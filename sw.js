// The offline shell (M5 PWA; switch S3 — this file ships inert until
// main.ts registers it). Static and dependency-free by law; public/ is
// copied verbatim, so the build sha arrives as ?v= on the registration
// URL and keys the cache. Strategy, chosen for the daily playtest:
// navigations go NETWORK-FIRST (online always gets the newest build;
// the cached shell serves only offline), and Vite's content-hashed
// assets are cache-first (immutable by construction). Activation
// deletes every other build's cache and takes over at once.

const VERSION = new URL(self.location.href).searchParams.get('v') || 'dev';
const CACHE = `kr-${VERSION}`;

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') {
    return;
  }
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }
  if (request.mode === 'navigate') {
    // Network-first: a stale shell is only ever served offline.
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Never cache an error page as the offline shell.
          if (response.ok) {
            const copy = response.clone();
            void caches.open(CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then((hit) => hit ?? caches.match('./index.html'))
            .then((hit) => hit ?? Response.error()),
        ),
    );
    return;
  }
  // Everything else same-origin (hashed assets, icons, portraits):
  // cache-first, filled on first fetch.
  event.respondWith(
    caches.match(request).then(
      (hit) =>
        hit ??
        fetch(request).then((response) => {
          if (response.ok) {
            const copy = response.clone();
            void caches.open(CACHE).then((cache) => cache.put(request, copy));
          }
          return response;
        }),
    ),
  );
});
