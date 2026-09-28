import{$ as e,A as t,At as n,B as r,C as i,Ct as a,D as o,Dt as s,E as c,Et as l,F as u,G as d,H as f,I as p,J as m,K as h,L as g,Mt as _,N as v,Nt as y,O as b,Ot as ee,P as x,Q as S,R as C,S as w,St as T,T as E,Tt as D,U as te,V as ne,W as O,X as re,Y as k,Z as A,_ as ie,_t as j,a as ae,at as oe,b as M,bt as N,c as se,ct as ce,d as P,dt as le,et as ue,f as de,ft as F,g as fe,gt as I,h as L,ht as R,i as pe,it as z,j as B,jt as me,k as he,kt as ge,l as V,lt as _e,m as ve,mt as H,n as ye,nt as be,o as xe,ot as Se,p as Ce,pt as U,q as we,r as Te,rt as W,s as Ee,st as De,t as Oe,tt as ke,u as Ae,ut as G,v as K,vt as je,w as Me,wt as Ne,x as Pe,xt as Fe,y as Ie,yt as Le,z as Re}from"./index-C4DduWua.js";var ze=1.2,Be=9e3,q=4e3,Ve={hit:`#d64541`,bounce:`#e0b64e`,miss:`#7fb4cc`,overpen:`#b9a7e0`,fire:`#e8813c`,torpedo:`#e8e2d0`},He={hit:`HIT`,bounce:`BOUNCE`,overpen:`OVERPEN`,fire:`FIRE`,torpedo:`TORPEDO`};function Ue(e,t,n,r,i){let a=Ve[t],o=1-(1-r)**3;if(e.strokeStyle=a,e.fillStyle=a,e.lineWidth=3,t===`hit`)e.beginPath(),e.moveTo(0,-9),e.lineTo(9,0),e.lineTo(0,9),e.lineTo(-9,0),e.closePath(),e.fill(),r<.3&&(e.globalAlpha=i*(1-r/.3),e.beginPath(),e.arc(0,0,12+r/.3*34,0,Math.PI*2),e.stroke(),n&&(e.beginPath(),e.arc(0,0,6+r/.3*24,0,Math.PI*2),e.stroke()));else if(t===`overpen`)e.beginPath(),e.moveTo(0,-9),e.lineTo(9,0),e.lineTo(0,9),e.lineTo(-9,0),e.closePath(),e.stroke();else if(t===`fire`){let t=.75+.25*Math.min(1,r*4);e.save(),e.scale(t,t),e.beginPath(),e.moveTo(0,10),e.bezierCurveTo(-9,5,-7,-3,-2,-7),e.bezierCurveTo(-3,-2,1,-3,2,-12),e.bezierCurveTo(7,-6,9,3,4,9),e.closePath(),e.fill(),e.fillStyle=`rgba(11, 21, 25, 0.8)`,e.beginPath(),e.moveTo(0,9),e.bezierCurveTo(-3,5,-2,2,0,-1),e.bezierCurveTo(2,2,3,5,0,9),e.closePath(),e.fill(),e.restore()}else if(t===`torpedo`)e.lineWidth=2.5,e.beginPath(),e.moveTo(-12,-3.5),e.lineTo(6,-3.5),e.quadraticCurveTo(12,0,6,3.5),e.lineTo(-12,3.5),e.closePath(),e.fill(),e.beginPath(),e.moveTo(-12,-6),e.lineTo(-15,-6),e.moveTo(-12,6),e.lineTo(-15,6),e.moveTo(-12,-3.5),e.lineTo(-12,3.5),e.stroke(),r<.45&&(e.globalAlpha=i*(1-r/.45),e.strokeStyle=Ve.hit,e.beginPath(),e.arc(0,0,14+r/.45*40,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(0,0,8+r/.45*26,0,Math.PI*2),e.stroke());else if(t===`bounce`)e.beginPath(),e.moveTo(-12,8),e.lineTo(0,2),e.lineTo(10,-10),e.stroke(),e.beginPath(),e.moveTo(10,-10),e.lineTo(4,-9),e.moveTo(10,-10),e.lineTo(9,-4),e.stroke();else{let t=Math.sin(Math.PI*Math.min(1,r*1.5));e.lineWidth=2.5,e.lineCap=`round`,e.beginPath(),e.moveTo(0,0),e.lineTo(0,-16*t),e.moveTo(-5,0),e.lineTo(-9,-10*t),e.moveTo(5,0),e.lineTo(9,-10*t),e.moveTo(-2.5,0),e.lineTo(-4,-13*t),e.moveTo(2.5,0),e.lineTo(4,-13*t),e.stroke(),e.globalAlpha=i*.45,e.beginPath(),e.ellipse(0,2,8+20*o,3+7*o,0,0,Math.PI*2),e.stroke()}let s=He[t];s!==void 0&&(e.globalAlpha=i,e.font=Ne(11,`bold`),e.textAlign=`center`,e.fillStyle=a,e.fillText(s,0,26))}var We=1600,Ge=.5,Ke=22*Ge,qe=58*Ge,Je=44*Ge,Ye=3,Xe=2;function Ze(){let t=[],n=new Set;function r(e,n,r,i){let a=t.filter(e=>e.targetId===n).length;t.push({kind:e,targetId:n,world:{x:0,y:0},smashing:r,bornMs:i,shelf:a})}return{draw(i,a,o){let s=o.animationMs;t=t.filter(e=>s-e.bornMs<We);let c=new Set,l=new Set;for(let e of a.falls){let i=`f:${e.shooterId}:${e.tick}:${Math.round(e.pos.x)}:${Math.round(e.pos.y)}`;if(c.add(i),!(n.has(i)||e.tick<=a.tick-Xe)){if(e.hits===0){let n=`${e.shooterId}:${e.tick}`;l.has(n)||(l.add(n),t.push({kind:`miss`,targetId:null,world:e.pos,smashing:!1,bornMs:s,shelf:0}))}else if(e.outcomes!==void 0){let t=e.outcomes;t.effective>0&&r(`hit`,e.targetId,t.smashing,s),t.fires>0&&r(`fire`,e.targetId,!1,s),t.overpens>0&&r(`overpen`,e.targetId,!1,s),t.bounces>0&&r(`bounce`,e.targetId,!1,s)}}}for(let e of a.torpedoHits){let t=`t:${e.shooterId}:${e.targetId}:${e.tick}:${Math.round(e.pos.x)}`;c.add(t),!n.has(t)&&e.tick>a.tick-Xe&&r(`torpedo`,e.targetId,!1,s)}n=c;let u=t.filter(e=>e.kind===`miss`),d=u.length>Ye?new Set([...u].sort((e,t)=>e.bornMs-t.bornMs).slice(0,u.length-Ye)):null;d!==null&&(t=t.filter(e=>!d.has(e)));for(let n of t){let t=(s-n.bornMs)/We,r,c=0;if(n.targetId===null)r=o.toScreen(n.world);else{let t=a.ships.find(e=>e.id===n.targetId);if(t===void 0)continue;r=o.toScreen(o.posOf(t)),c=e(t.cls,o.metresPerPx).lengthPx*.5+20}let l=N()?0:Ke*(1-(1-t)**3),u=t<.7?1:1-(t-.7)/.3;i.save(),i.globalAlpha=u,i.translate(r.x+n.shelf%4*qe,r.y-c-Math.floor(n.shelf/4)*Je-l),i.scale(Ge,Ge),Ue(i,n.kind,n.smashing,t,u),i.restore()}}}}function Qe(e,t){return[e,...(t??[]).slice(1)]}function $e(e,t){let n=Qe(e,t),r=0;for(let e=1;e<n.length;e+=1){let t=n[e-1],i=n[e];t!==void 0&&i!==void 0&&(r+=Math.hypot(i.x-t.x,i.y-t.y))}return r}function et(e,t,n){let r=Qe(e,t),i=r[0]??e,a=Math.max(0,n);for(let e=1;e<r.length;e+=1){let t=r[e];if(t===void 0)continue;let n=t.x-i.x,o=t.y-i.y,s=Math.hypot(n,o);if(s>=a&&s>0){let e=a/s;return{x:i.x+n*e,y:i.y+o*e}}a-=s,i=t}return i}function tt(e,t,n,r){let i=et(e,t,n),a=et(e,t,n+1),o=a.x-i.x,s=a.y-i.y,c=Math.hypot(o,s);return c<1e-6?r:{x:o/c,y:s/c}}var nt=`18, 19, 23`,rt=8,it=5;function at(e){let t=e.flooding.fore.holes+e.flooding.mid.holes+e.flooding.aft.holes;return Math.min(1,t*8+Re(e.flooding)*.25)}function ot(e,t){return e*(.9+1.9*R(t))}function st(t,n,r){for(let i of n.ships){let n=at(i);if(n<.08)continue;let a=e(i.cls,r.metresPerPx),o=r.posOf(i),s=r.toScreen(o),c=r.headingOf(i)*Math.PI/180,l={x:-Math.sin(c),y:-Math.cos(c)},u=I(i.id),d=Math.max(3,a.beamPx);if(!i.sunk&&i.motion.speedKnots>.5){let e=a.lengthPx/2*r.metresPerPx,s=ot(a.lengthPx*r.metresPerPx,n),c=$e(o,i.track);for(let a=0;a<rt;a+=1){let f=(a+1)/rt,p=e+f*s;if(p>c)break;let m=r.toScreen(et(o,i.track,p)),h=tt(o,i.track,p,l),g=(T(u,a,30)-.5)*d*1.4*f,_=je(d*.4,d*1.35,R(f));t.fillStyle=`rgba(${nt}, ${(.3*n*(1-.7*f)).toFixed(3)})`,t.beginPath(),t.arc(m.x+h.y*g,m.y+h.x*g,_,0,2*Math.PI),t.fill()}}else for(let e=0;e<it;e+=1){let r=T(u,e,33)*2*Math.PI,i=T(u,e,34)*a.lengthPx*.45,o=d*(.8+1.1*T(u,e,35))*(.5+.5*n);t.fillStyle=`rgba(${nt}, ${(.26*n).toFixed(3)})`,t.beginPath(),t.arc(s.x+Math.cos(r)*i,s.y+Math.sin(r)*i,o,0,2*Math.PI),t.fill()}}}var ct=1.2,lt=`52, 54, 60`,ut=`112, 116, 124`,dt=`255, 182, 92`,ft=6,pt=5;function mt(t,n,r,i,a,o){for(let s of n.ships){if(s.sunk||s.subsystems.engines===`out`)continue;let n=Math.abs(s.motion.speedKnots),c=Math.min(1,n/20),l=e(s.cls,r.metresPerPx),u=r.toScreen(r.posOf(s)),d=r.headingOf(s)*Math.PI/180,f=Math.sin(d),p=-Math.cos(d),m=i*.45+f*c,h=a*.45+p*c,g=Math.hypot(m,h)||1,_=.35+.65*c;for(let e of L[s.cls].funnels){let n=e*l.lengthPx,r=u.x-Math.sin(d)*n,i=u.y+Math.cos(d)*n,a=I(`${s.id}:funnel:${e}`),f=(3+4*c)*Math.max(1,l.beamPx/5);for(let e=0;e<pt;e+=1){let n=(e+1)/pt,s=(T(a,e,o)-.5)*f*n,u=(T(a,e,o+1)-.5)*f*n,d=r+m/g*f*(e+1)+s,p=i+h/g*f*(e+1)+u,v=je(1.2,3.2+2.4*c,R(n))*Math.max(1,l.beamPx/6);t.fillStyle=`rgba(${ut}, ${(.14*_*(1-.8*n)).toFixed(3)})`,t.beginPath(),t.arc(d,p,v,0,2*Math.PI),t.fill()}}}}function ht(t,n,r){let i=be(n.setting.weatherSeed),a=Math.sin(i),o=-Math.cos(i),s=(n.tick+r.frameFraction)*10,c=Math.floor(s/ct);mt(t,n,r,a,o,c);for(let i of n.ships){if(i.sunk||i.fires.length===0)continue;let n=e(i.cls,r.metresPerPx),l=r.toScreen(r.posOf(i)),u=r.headingOf(i)*Math.PI/180;for(let e of i.fires){let d=ve(e.zone,n.lengthPx),f=l.x-Math.sin(u)*d,p=l.y+Math.cos(u)*d,m=I(`${i.id}:${e.zone}`),h=.4+.6*e.intensity,g=4+5*h;for(let e=0;e<ft;e+=1){let n=(e+1)/ft,r=(T(m,e,c*2)-.5)*g*1.1*n,i=(T(m,e,c*2+1)-.5)*g*1.1*n,s=f+a*g*(e+1)+r,l=p+o*g*(e+1)+i,u=je(2.2,7+4*h,R(n));t.fillStyle=`rgba(${lt}, ${.3*h*(1-.85*n)})`,t.beginPath(),t.arc(s,l,u,0,2*Math.PI),t.fill()}let _=2+Math.round(3*e.intensity);for(let e=0;e<_;e+=1){let n=(s/(1.6+1.8*T(m,e,7))+T(m,e,8))%1,i=R(n)*(9+10*T(m,e,9)),c=(T(m,e,10)-.5)*6*n,l=.6+.4*Math.sin(r.animationMs/90+e*2.4);t.fillStyle=`rgba(${dt}, ${(1-n)*.85*l})`,t.beginPath(),t.arc(f+a*i-o*c,p+o*i+a*c,.9,0,2*Math.PI),t.fill()}}}}var gt=.55,_t=.3,vt=6,yt=16,bt=981,xt={fore:.3,mid:.02,aft:-.3};function St(e){let t=e.steps??1;return e.outcome===`penetrated`||e.outcome===`wrecked`?Math.min(yt,vt*t):e.outcome===`overpenetrated`?Math.min(yt,Math.round(vt*.6*t)):Math.min(yt,Math.round(vt*.7))}function Ct(e){return e.outcome===`bounced`||e.outcome===`smothered`}function wt(e,t,n,r,i,a){let o=Ct(e),s=o?_t:gt;if(i<0||i>=s)return[];let c=e.steps??1,l=[];for(let e=0;e<a;e+=1){let a=o?.55:2.2,u=r+(j(t,e*4)-.5)*2*a,d=o?.12+j(t,e*4+1)*.35:.15+j(t,e*4+1)*1.1,f=o?600+j(t,e*4+2)*600:(140+j(t,e*4+2)*260)*(.75+.25*c),p=e=>{let t=Math.cos(d)*f*e;return[n.x+Math.sin(u)*t,n.y+Math.cos(u)*t,n.z+Math.sin(d)*f*e-.5*bt*e*e]},m=p(i);if(m[2]<=0)continue;let h=p(Math.max(0,i-(o?.02:.01))),g=1-i/s;l.push({x:m[0],y:m[1],z:m[2],px:h[0],py:h[1],pz:h[2],halfWidth:o?.55+j(t,e*4+3)*.5:(.6+j(t,e*4+3)*.9)*(.75+.25*c),alpha:o?g:g*.92,hot:o?.85+.15*j(t,e*4+3):.18*g})}return l}var Tt=`87, 86, 88`,Et=`255, 209, 128`;function Dt(e,t,n){let r=t.tick+n.frameFraction;e.save(),e.lineCap=`round`;for(let i of t.falls){let a=i.sites;if(a===void 0||a.length===0)continue;let o=r-i.tick;if(o<0||o>=.55)continue;let s=t.ships.find(e=>e.id===i.targetId),c=t.ships.find(e=>e.id===i.shooterId);if(s===void 0)continue;let l=n.posOf(s),u=n.headingOf(s)*Math.PI/180,d=W[s.cls].lengthMetres,f=c===void 0?null:n.posOf(c),p=f===null?u:Math.atan2(l.x-f.x,l.y-f.y);a.forEach((t,r)=>{if(Ct(t)&&o>=.3)return;let a=(xt[t.zone]??0)*d,s={x:l.x+Math.sin(u)*a,y:l.y+Math.cos(u)*a,z:11},c=wt(t,I(`${i.shooterId}:${i.targetId}`)+i.tick*7919+r*131|0,s,p,o,z(St(t)));for(let t of c){let r=n.toScreen({x:t.px,y:t.py}),i=n.toScreen({x:t.x,y:t.y});e.strokeStyle=`rgba(${t.hot>.5?Et:Tt}, ${t.alpha.toFixed(3)})`,e.lineWidth=Math.max(.9,t.halfWidth*2/n.metresPerPx),e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(i.x,i.y),e.stroke()}})}e.restore()}function Ot(e){return{pos:e.motion.pos,headingDeg:e.motion.headingDeg,rudder:e.motion.rudder??0}}function kt(e,t,n){return(e+((t-e+540)%360-180)*n+360)%360}function At(){let e=new Map,t=new Map,n=-1,r=0;return{step(i,a){let o=Math.max(0,Math.min(10,a));if(i.tick<n&&(e.clear(),t.clear(),n=-1),i.tick!==n){for(let n of i.ships){let r=t.get(n.id),i=Ot(n);e.set(n.id,r??i),t.set(n.id,i)}n=i.tick,r=o/10;return}r=Math.max(r,o/10)},posOf(n){let i=e.get(n.id),a=t.get(n.id);return i===void 0||a===void 0?n.motion.pos:{x:i.pos.x+(a.pos.x-i.pos.x)*r,y:i.pos.y+(a.pos.y-i.pos.y)*r}},headingOf(n){let i=e.get(n.id),a=t.get(n.id);return i===void 0||a===void 0?n.motion.headingDeg:kt(i.headingDeg,a.headingDeg,r)},rudderOf(n){let i=e.get(n.id),a=t.get(n.id);return i===void 0||a===void 0?n.motion.rudder??0:i.rudder+(a.rudder-i.rudder)*r},frameFraction(){return r}}}var jt=`rgba(11, 18, 32, 0.75)`,Mt=`rgba(230, 240, 255, 0.9)`,Nt=`rgba(230, 240, 255, 0.35)`,Pt=`rgba(230, 240, 255, 0.25)`,Ft=`rgba(255, 150, 60, 0.95)`,It=`rgba(255, 255, 255, 0.75)`,Lt=.02;function Rt(e,t,n){return e.solutions.find(e=>e.shooterId===t&&e.targetId===n)?.value??0}function zt(e,t,n,r){let a=t.ships.find(e=>e.side===`raider`);if(a===void 0)return;let o=t.ships.filter(e=>e.side===`enemy`&&!e.sunk&&!e.struckColours);if(o.length===0)return;let s=a.mounts.find(e=>e.targetId!==null)?.targetId,c=o.find(e=>e.id===s)??o[0];if(c===void 0)return;let u=(e,n)=>{let r=fe(t,e,n);return Math.max(w(e,n,r),i(e,n,r))},d=[{label:D.battleOurSolution,value:Rt(t,a.id,c.id),ceiling:u(a,c)},...o.map((e,n)=>({label:e.name??(o.length>1?`${D.battleEnemySolution} ▸${n+1}`:D.battleEnemySolution),value:Rt(t,e.id,a.id),ceiling:u(e,a)}))];e.font=Ne(10);for(let[t,n]of d.entries()){let r=44+t*26,i=t===0;e.fillStyle=jt,e.fillRect(10,r,130,8),e.fillStyle=!i&&n.value>=.5?Ft:Mt,e.fillRect(10,r,130*n.value,8),e.fillStyle=Pt,e.fillRect(10+130*y.minSolutionToFire-.5,r,1,8),e.fillStyle=Nt,e.fillRect(10+130*n.ceiling-1,r-2,2,12),e.fillStyle=It;let a=n.value<n.ceiling-Lt?`▲`:n.value>n.ceiling+Lt?`▼`:``;a!==``&&e.fillText(a,144,r+8),i&&n.value<y.minSolutionToFire&&e.fillText(D.battleHoldingFire,156,r+8),e.fillText(n.label,10,r+19)}let f=r(a),p=Math.min(...o.map(e=>Math.hypot(r(e).x-f.x,r(e).y-f.y))),m=b(t.setting,t.tick,a.motion.pos);e.fillStyle=It,e.textAlign=`center`,e.fillText(`${(p/1e3).toFixed(1)} km · ${l[m.weather]}`,n/2,16),e.fillText(Vt(t,o.length),n/2,30),e.textAlign=`left`}function Bt(e){let t=e.disguise;if(t===void 0)return null;if(t.seenThroughAtTick!==null)return D.battleLieSeenThrough;if(t.phase!==`standing`)return null;if(Me(t))return D.battleLieSatisfied;if(t.suspicion>=t.threshold*s.challengeFraction)return D.battleLieChallenge;let n=e.ships.find(e=>e.side===`raider`&&!e.sunk),r=e.ships.find(e=>e.side===`enemy`&&!e.sunk);return n===void 0||r===void 0?null:Math.hypot(r.motion.pos.x-n.motion.pos.x,r.motion.pos.y-n.motion.pos.y)<=s.inspectionRangeMetres*s.satisfiedRangeFactor?D.battleLieAlongside:D.battleLieClosing}function Vt(e,t){let n=Bt(e);if(n!==null)return n;if(o(e))return D.battleContactConvoyOpen;switch(c(e)){case`held`:return t>1?D.battleContactHeldMany:D.battleContactHeld;case`gunfire`:return D.battleContactGunfire;case`closing`:return D.battleContactClosing;case`slipping`:return Ht(e,D.battleContactSlipping);case`outranged`:return Ht(e,D.battleContactOutranged)}}function Ht(e,t){let r=n.escapeHoldTicks-e.contactBrokenTicks,i=Math.max(1,Math.ceil(r*10/60));return t.replaceAll(`{min}`,String(i))}var Ut=`rgba(228, 234, 242, 0.95)`,Wt=`rgba(10, 16, 24, 0.28)`,Gt=60,Kt=.514444;function qt(e,t,n,r,i,a=Ut){e.save(),e.translate(t,n),e.rotate(r*Math.PI/180),e.strokeStyle=a,e.lineWidth=Math.max(1,i*.16),e.beginPath(),e.moveTo(0,-i*.55),e.lineTo(0,i*.45),e.moveTo(-i*.5,-i*.12),e.lineTo(i*.5,-i*.12),e.moveTo(-i*.22,i*.38),e.lineTo(i*.22,i*.38),e.stroke(),e.restore()}function Jt(e,t){let n=B[e.aircraft].speedKnots*Kt*10*Math.min(1,Math.max(0,t.frameFraction)),r=e.headingDeg*Math.PI/180;return{x:e.pos.x+Math.sin(r)*n,y:e.pos.y+Math.cos(r)*n}}function Yt(e){return Math.max(7,Math.min(16,26/Math.sqrt(e)))}function Xt(e){if(e===0)return{back:0,out:0};let t=Math.ceil(e/2),n=e%2==1?-1:1;return{back:t*Gt,out:n*t*Gt}}function Zt(e,t,n){for(let r of t.flights)Qt(e,r,n)}function Qt(e,t,n){let r=Jt(t,n),i=t.headingDeg*Math.PI/180,a=Yt(n.metresPerPx),o=Math.cos(i),s=Math.sin(i);for(let i=0;i<t.count;i++){let c=Xt(i),l={x:r.x-s*c.back-o*c.out,y:r.y-o*c.back+s*c.out},u=n.toScreen(l);e.strokeStyle=Wt,e.lineWidth=Math.max(1,a*.14),e.beginPath(),e.moveTo(u.x+a*.5,u.y+a*.7),e.lineTo(u.x+a*1.1,u.y+a*.7),e.stroke(),qt(e,u.x,u.y,t.headingDeg,a)}}var $t=9e3,en=7e3,tn=.6;function nn(e){return I(`${e.tick}:${e.style}:${Math.round(e.to.x)}:${Math.round(e.to.y)}`)}function rn(e){return e.style===`tracer`?Math.round(4+8*e.intensity):2}function an(e,t,n,r){return e.tick+(n+T(t,n,0))/r}var on=[.4,.6],sn=.8;function cn(e,t){if(e.headingDeg===void 0||t===void 0)return[e.from,e.from];let n=W[t],r=e.headingDeg*Math.PI/180,i=Math.sin(r),a=Math.cos(r),o=a,s=-i,c=((e.to.x-e.from.x)*o+(e.to.y-e.from.y)*s>=0?1:-1)*sn*(n.beamMetres/2),l=e.from.x+o*c,u=e.from.y+s*c,d=e=>{let t=(.5-e)*n.lengthMetres;return{x:l+i*t,y:u+a*t}};return[d(on[0]),d(on[1])]}function ln(e,t,n,r){let i=e.to.x-e.from.x,a=e.to.y-e.from.y,o=(T(t,n,1)-.5)*2*150,s=(T(t,n,2)-.5)*2*150;return{x:e.to.x+-a/r*o+i/r*s,y:e.to.y+i/r*o+a/r*s}}function un(e,t,n,r,i,a,o){if(r<.5)return;let s=r,c=i*.9,l=i*(.36+.1*T(a,o,20)),u=i*(.44+.16*T(a,o,21)),d=(T(a,o,22)-.5)*.3*s,f=t+d,p=1+.08*T(a,o,23),m=.98+.09*T(a,o,24);e.beginPath(),e.moveTo(t-c,n),e.quadraticCurveTo(t-c*.72,n-s*.34,t+d*.55-l,n-s*.64),e.quadraticCurveTo(f-u*1.08,n-s*.8,f-u,n-s*.92),e.quadraticCurveTo(f-u*.65,n-s*(p+.05),f-u*.12,n-s*p*.99),e.quadraticCurveTo(f+u*.22,n-s*(m+.06),f+u*.55,n-s*m*.96),e.quadraticCurveTo(f+u*1.05,n-s*.86,t+d*.55+l,n-s*.62),e.quadraticCurveTo(t+c*.72,n-s*.32,t+c,n),e.closePath(),e.fill()}var dn=`rgba(255, 214, 138, 0.95)`,fn=`rgba(255, 214, 138, 0.4)`,pn=`rgba(236, 242, 250, 0.95)`,mn=`255, 196, 110`,hn=`62, 66, 74`,gn=`rgba(230, 240, 255, 0.85)`,_n=`96, 100, 108`,vn=`#d64541`,yn=.5,bn=.35,xn=.5,Sn=592;function Cn(e,t,n){let r=t.tick+U(n.frameFraction),i=t.ships.find(e=>e.side===`raider`)?.cls;for(let a of t.aaFire??[])Tn(e,a,i,r,n);wn(e,t,n)}function wn(e,t,n){let r=t.tick+U(n.frameFraction);for(let i of t.aaDowned??[])kn(e,i,r,n)}function Tn(e,t,n,r,i){let a=nn(t),o=t.to.x-t.from.x,s=t.to.y-t.from.y,c=Math.hypot(o,s);if(c<1)return;let l=c/(t.style===`tracer`?$t:en),u=rn(t),d=cn(t,n);for(let n=0;n<u;n+=1){let o=r-an(t,a,n,u);if(o<0)continue;let s=ln(t,a,n,c),f=o/l;f<=1?En(e,t,d[n%2],f,s,i):t.style===`burst`&&Dn(e,a,n,o-l,s,i)}}function En(e,t,n,r,i,a){let o=e=>a.toScreen({x:n.x+(i.x-n.x)*e,y:n.y+(i.y-n.y)*e}),s=o(r),c=o(Math.max(0,r-(t.style===`tracer`?.045:.03)));e.strokeStyle=fn,e.lineWidth=t.style===`tracer`?1.2:1.6,e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(s.x,s.y),e.stroke(),e.fillStyle=t.style===`tracer`?dn:pn,e.beginPath(),e.arc(s.x,s.y,t.style===`tracer`?1.4:2.2,0,Math.PI*2),e.fill()}function Dn(e,t,n,r,i,a){let o=r/tn;if(o>=1)return;let s=a.toScreen(i),c=Yt(a.metresPerPx);if(o<.12){let t=o/.12;e.fillStyle=`rgba(${mn}, ${.95*(1-t)})`,e.beginPath(),e.arc(s.x,s.y,c*(.25+.45*t),0,Math.PI*2),e.fill()}let l=R(o),u=.65*(1-o);for(let r=0;r<3;r+=1){let i=T(t,n,10+r)*Math.PI*2,a=c*.3*l*(.4+T(t,n,13+r)),o=c*(.28+.55*l)*(.7+.5*T(t,n,16+r));e.fillStyle=`rgba(${hn}, ${u*(.7+.3*T(t,n,19+r))})`,e.beginPath(),e.arc(s.x+Math.cos(i)*a,s.y+Math.sin(i)*a,o,0,Math.PI*2),e.fill()}}function On(e,t,n){let r=e.headingDeg??T(t,0,30)*360,i=T(t,0,31)<.5?-1:1,a=U(n),o=e.pos.x,s=e.pos.y;for(let e=0;e<10;e+=1){let t=e/10;if(t>=a)break;let n=Math.min((e+1)/10,a)-t,c=t+n/2,l=r+i*165*H(c),u=Sn*(1-.7*c),d=l*Math.PI/180;o+=Math.sin(d)*u*n*yn,s+=Math.cos(d)*u*n*yn}return{x:o,y:s,headingDeg:r+i*165*H(a)}}function kn(e,t,n,r){let i=I(`${t.tick}:${Math.round(t.pos.x)}:${Math.round(t.pos.y)}`),a=Fe(n-t.tick,[yn,bn,xn]);if(a.done)return;let o=Yt(r.metresPerPx),s=r.toScreen(On(t,i,1));if(a.seg===0){let n=a.t;for(let a=1;a<=5;a+=1){let s=On(t,i,n-a*.08),c=r.toScreen(s);e.fillStyle=`rgba(${_n}, ${.4*(1-a/6)})`,e.beginPath(),e.arc(c.x,c.y,o*.16*(1+a*.25),0,Math.PI*2),e.fill()}let s=On(t,i,n),c=r.toScreen(s),l=1-H(n);e.strokeStyle=`rgba(10, 16, 24, 0.28)`,e.lineWidth=Math.max(1,o*.14),e.beginPath(),e.moveTo(c.x+o*.5*l,c.y+o*.7*l),e.lineTo(c.x+o*1.1*l,c.y+o*.7*l),e.stroke(),qt(e,c.x,c.y,s.headingDeg,o*(1-.3*n),`rgba(228, 234, 242, ${.95-.25*n})`);return}if(a.seg===1){let t=F(a.t)*o*2.2;t>.5&&(e.fillStyle=gn,un(e,s.x,s.y,t,o*.55,i,0)),e.fillStyle=`rgba(230, 240, 255, ${.4*(1-a.t)})`,e.beginPath(),e.ellipse(s.x,s.y+1,o*(.5+a.t),o*(.2+.35*a.t),0,0,Math.PI*2),e.fill()}let c=a.seg===1?a.t*.4:.4+a.t*.6;e.save(),e.globalAlpha=c<.55?1:1-(c-.55)/.45,e.fillStyle=vn,e.font=Ne(11,`bold`),e.textAlign=`center`,e.fillText(`SHOT DOWN`,s.x,s.y-o-14*R(c)),e.restore()}var An=`rgba(205, 212, 222, 0.75)`,jn=`rgba(205, 212, 222, 0.85)`,Mn=.5,Nn=.28;function Pn(e,t,n){return e===`degraded`?{fill:t,alpha:Mn}:e===`crippled`?{fill:t,alpha:Nn}:e===`out`?n?{fill:P,alpha:.9}:{fill:h,alpha:1}:{fill:t,alpha:1}}function Fn(e,t,n,r,i){let a=Math.min(r,i)*.3;e.beginPath(),e.roundRect(t-r/2,n-i/2,r,i,a)}function In(e,t,n,r){let i=t.subsystems.radio;if(i===void 0)return;let a=Pn(i,An,!0),o=n.bridge.lengthFraction*r.lengthPx,s=n.bridge.along*r.lengthPx+o*.5,c=s-r.lengthPx*.03;e.save(),e.globalAlpha*=a.alpha,e.strokeStyle=a.fill,e.lineWidth=Math.max(.8,r.beamPx*.08),e.lineCap=`round`,e.beginPath(),e.moveTo(0,s+r.lengthPx*.05),e.lineTo(0,s-r.lengthPx*.08),e.moveTo(-r.beamPx*.32,c),e.lineTo(r.beamPx*.32,c),e.stroke(),e.restore()}function Ln(e,t,n){e.save(),e.strokeStyle=jn,e.fillStyle=jn,e.lineWidth=Math.max(.7,n.beamPx*.06),e.lineCap=`round`;for(let r of t.masts??[]){let t=r*n.lengthPx;e.beginPath(),e.arc(0,t,Math.max(.8,n.beamPx*.08),0,2*Math.PI),e.fill()}for(let r of t.kingposts??[]){let t=r*n.lengthPx;e.beginPath(),e.moveTo(-n.beamPx*.38,t),e.lineTo(n.beamPx*.38,t),e.stroke()}e.restore()}function Rn(e,t,n,r,i){let a=t.subsystems.seaplane;if(a===void 0||n.catapult===void 0)return;let o=n.catapult*r.lengthPx,s=Pn(a,i,!0);e.save(),e.globalAlpha*=s.alpha,e.strokeStyle=s.fill,e.lineWidth=Math.max(.8,r.beamPx*.07),e.lineCap=`round`,e.beginPath(),e.moveTo(-r.beamPx*.42,o),e.lineTo(r.beamPx*.42,o),e.stroke();let c=r.beamPx*.3;e.beginPath(),e.moveTo(-c,o),e.lineTo(c,o),e.moveTo(0,o-c*.55),e.lineTo(0,o+c*.55),e.stroke(),e.restore()}function zn(e,t,n,r,i){for(let a of n.tubeMounts??[]){if(t.subsystems[a.mountId]===void 0)continue;let n=Pn(t.subsystems[a.mountId],i,!1),o=a.along*r.lengthPx,s=(a.athwart??0)*r.beamPx/2,c=r.lengthPx*.035,l=Math.max(1,r.beamPx*.14);e.save(),e.globalAlpha*=n.alpha,e.fillStyle=n.fill,Fn(e,s,o,l,c*2),e.fill(),e.strokeStyle=k,e.lineWidth=.6,e.stroke(),e.restore()}}function Bn(e,t,n,r,i,a){e.save(),e.translate(a,0);let o=n.bridge.lengthFraction*r.lengthPx,s=Pn(t.subsystems.director,i,!0);e.save(),e.globalAlpha*=s.alpha,e.fillStyle=s.fill,Fn(e,0,n.bridge.along*r.lengthPx,r.beamPx*.56,o),e.fill(),e.restore(),e.fillStyle=i;for(let t of n.blocks??[])Fn(e,0,t.along*r.lengthPx,r.beamPx*t.widthFraction,t.lengthFraction*r.lengthPx),e.fill(),e.strokeStyle=k,e.lineWidth=.6,e.stroke();let c=Pn(t.subsystems.engines,i,!1);e.save(),e.globalAlpha*=c.alpha;for(let t of n.funnels){let n=t*r.lengthPx,i=Math.max(1,r.beamPx*.16),a=Math.max(1.2,r.beamPx*.21);e.beginPath(),e.ellipse(0,n,i,a,0,0,2*Math.PI),e.fillStyle=c.fill,e.fill(),e.strokeStyle=k,e.lineWidth=.8,e.stroke(),e.beginPath(),e.ellipse(0,n,i*.55,a*.55,0,0,2*Math.PI),e.fillStyle=`rgba(20, 24, 30, 0.55)`,e.fill()}e.restore(),zn(e,t,n,r,i),Rn(e,t,n,r,i),Ln(e,n,r),In(e,t,n,r),e.restore()}var Vn=`rgba(10, 16, 22, 0.55)`;function Hn(e,t){let n=e.disguise;if(n===void 0||t.side!==`raider`)return null;if(n.phase===`open`)return 1;if(n.phase===`standing`||n.droppedAtTick===null)return 0;let r=Math.max(1,s.coloursBeatTicks),i=e.tick-n.droppedAtTick;return Math.max(0,Math.min(1,i/r))}function Un(e,t,n,r,i){let a=t.along*n.lengthPx,o=t.athwart===void 0?[-1,1]:[t.athwart<0?-1:1],s=Math.max(2,n.lengthPx*.055),c=Math.max(1,n.beamPx*.22)*Math.sin(i*Math.PI/2);for(let t of o){let i=t*n.beamPx/2;e.beginPath(),e.rect(i,a-s/2,t*Math.max(.6,c),s),e.fillStyle=r,e.globalAlpha=.85,e.fill(),e.globalAlpha=1,e.strokeStyle=Vn,e.lineWidth=.6,e.stroke()}}var Wn={operational:0,degraded:.3,crippled:.55,out:1};function Gn(e){return e===void 0?0:Wn[e]}function Kn(e,t){return t<=0?0:Math.min(t-1,Math.floor(j(I(e),7)*t))}function qn(e){let t=r.reduce((t,n)=>t+e[n].level,0);return Math.min(1,t/me.flooding.sinkAtTotal)}function Jn(e){return j(I(e),41)<.5?-1:1}function Yn(e,t){let n=qn(e);return Jn(t)*15*n*n}function Xn(e){let t=e.fore.level-e.aft.level;return 5*Math.max(-1,Math.min(1,t/me.flooding.sinkAtTotal))}var Zn=`#15181c`,Qn=.16,$n=`rgba(255, 244, 205, 0.95)`,er=`rgba(255, 170, 70, 0.55)`,tr=.8,nr=`190, 194, 200`,rr=.22;function ir(e){return e.athwart===void 0?1:.72}function ar(e,t,n){return e.beamPx*(t>1?.9:.65)*n}function or(t,n,r){let i=r.toScreen(r.posOf(t)),a=L[t.cls].turrets.find(e=>e.mountId===n);if(a===void 0)return i;let o=e(t.cls,r.metresPerPx),s=a.along*o.lengthPx,c=(a.athwart??0)*o.beamPx/2,l=r.headingOf(t)*Math.PI/180;return{x:i.x+Math.cos(l)*c-Math.sin(l)*s,y:i.y+Math.sin(l)*c+Math.cos(l)*s}}function sr(e,t,n,r,i){let a=t===void 0?M(n):K(t,n),o=x(e.cls,n.id);if(o===void 0)return a;let s=r.ships.find(e=>e.id===t?.targetId);return Pe(a,e.sunk||e.struckColours||s===void 0||s.sunk||s.struckColours?M(n):Ie({pos:i.posOf(e),headingDeg:i.headingOf(e),speedKnots:e.motion.speedKnots},{pos:i.posOf(s),headingDeg:i.headingOf(s),speedKnots:s.motion.speedKnots},n)??M(n),o.traverseDegPerSecond*i.frameFraction*10)}function cr(t,n,r,i){let a=or(t,n,i),o=L[t.cls].turrets.find(e=>e.mountId===n),s=v(t.cls).find(e=>e.id===n);if(o===void 0||s===void 0)return a;let c=sr(t,t.mounts.find(e=>e.mountId===n),s,r,i),l=ar(e(t.cls,i.metresPerPx),s.guns,ir(o)),u=(i.headingOf(t)+c)*Math.PI/180;return{x:a.x+Math.sin(u)*l,y:a.y-Math.cos(u)*l}}function lr(e,t,n,r){let i=null;for(let a of n.salvos){if(a.shooterId!==e.id||a.mountId!==t)continue;let o=n.tick+r.frameFraction-a.firedAtTick;o>=0&&(i===null||o<i)&&(i=o)}return i}function ur(e,t,n,r,i,a,o,s){e.save(),e.rotate(n*Math.PI/180);let c=Kn(t,r);e.strokeStyle=h,e.lineWidth=s,e.lineCap=`round`;let l=26*Math.PI/180;for(let n=0;n<r;n+=1){let i=(n-(r-1)/2)*o,s=n===c,u=a*(s?Math.cos(l):1),d=s?(j(I(t),9)-.5)*.34:0;e.beginPath(),e.moveTo(i,0),e.lineTo(i+Math.sin(d)*u,-Math.cos(d)*u),e.stroke()}e.fillStyle=h,e.beginPath(),e.arc(0,0,i,0,2*Math.PI),e.fill(),e.fillStyle=Zn,e.beginPath(),e.arc((j(I(t),1)-.5)*i,(j(I(t),2)-.5)*i,Math.max(.6,i*.3),0,2*Math.PI),e.fill(),e.restore()}function dr(e,t,n,r,i,a,o,s){let c=n.id,l=n.guns,u=r.along*i.lengthPx,d=(r.athwart??0)*i.beamPx/2,f=ir(r),p=Math.max(1.1,i.beamPx*(l>1?.3:.22)*f);if(e.save(),e.translate(d,u),t.subsystems[c]===`out`){ur(e,c,t.mounts.find(e=>e.mountId===c)?.trainDeg??M(n),l,p,ar(i,l,f),Math.max(1,i.beamPx*.16*f),Math.max(.8,i.beamPx*.09*f)),e.restore();return}let m=sr(t,t.mounts.find(e=>e.mountId===c),n,o,s);e.rotate(m*Math.PI/180),t.subsystems[c]===`degraded`&&(e.globalAlpha*=.55),t.subsystems[c]===`crippled`&&(e.globalAlpha*=.32);let h=lr(t,c,o,s),g=h!==null&&h<Qn?1-h/Qn:0,_=ar(i,l,f),v=_*(1-rr*g),y=Math.max(1,i.beamPx*.16*f);e.strokeStyle=a,e.lineWidth=Math.max(.8,i.beamPx*.09*f),e.lineCap=`round`;for(let t=0;t<l;t+=1){let n=(t-(l-1)/2)*y;e.beginPath(),e.moveTo(n,0),e.lineTo(n,-v),e.stroke()}if(l>1?(e.strokeStyle=k,e.lineWidth=.7,e.beginPath(),e.arc(0,0,p*1.18,0,2*Math.PI),e.stroke(),e.fillStyle=a,e.beginPath(),e.roundRect(-p,-p*1.05,p*2,p*2.05,[p*.85,p*.85,p*.35,p*.35]),e.fill(),e.strokeStyle=k,e.stroke()):(e.fillStyle=a,e.beginPath(),e.arc(0,0,p,0,2*Math.PI),e.fill()),g>0){let t=-v-1,n=(2+3.5*g)*Math.max(1,i.beamPx/6)*f,r=e.createRadialGradient(0,t,0,0,t,n);r.addColorStop(0,$n),r.addColorStop(.35,er),r.addColorStop(1,`rgba(255, 170, 70, 0)`),e.fillStyle=r,e.beginPath(),e.arc(0,t,n,0,2*Math.PI),e.fill()}if(h!==null&&h>=Qn&&h<tr){let n=(h-Qn)/(tr-Qn),r=Math.max(1,i.beamPx/8)*f,a=(2+6*n)*r,c=be(o.setting.weatherSeed),l=(s.headingOf(t)+m)*Math.PI/180,u=Math.sin(c),d=-Math.cos(c),p=4*n*r,g=(u*Math.cos(l)+d*Math.sin(l))*p,v=(-u*Math.sin(l)+d*Math.cos(l))*p;e.fillStyle=`rgba(${nr}, ${(.4*(1-n)).toFixed(3)})`,e.beginPath(),e.arc(g,-_-a+v,(1.5+3.5*n)*f,0,2*Math.PI),e.fill()}e.restore()}var fr=`rgba(255, 255, 255, 0.4)`,pr=`rgba(130, 195, 245, 0.9)`,mr=35,hr=`rgba(225, 238, 248, 0.5)`,gr=.07,_r=.22;function vr(e,t,n,r,i){let a=i?.fore.level??0,o=i?.mid.level??0,s=i?.aft.level??0,c=-n/2+n*.08*a,l=n/2-n*.06*s,u=(c+l)/2,d=c-u,f=l-u,p=r/2*(1-.18*o),m=p*(1-.28*a),h=p*(1-.28*s),g=d+n*t.bowFraction,_=f-n*t.sternFraction,v=h*t.sternWidthFraction;e.beginPath(),e.moveTo(0,d),e.quadraticCurveTo(m,d+n*t.bowFraction*.45,m,g),e.lineTo(h,_),e.quadraticCurveTo(h,f,v,f),e.lineTo(-v,f),e.quadraticCurveTo(-h,f,-h,_),e.lineTo(-m,g),e.quadraticCurveTo(-m,d+n*t.bowFraction*.45,0,d),e.closePath()}function yr(e,t,n){let r=Math.abs(t.motion.speedKnots);if(r<3)return;let i=Math.min(1,r/26),a=-n.lengthPx/2,o=n.beamPx*(.5+.5*i);e.save(),e.strokeStyle=hr,e.globalAlpha*=.35+.45*i,e.lineWidth=Math.max(.8,n.beamPx*.1),e.lineCap=`round`,e.beginPath(),e.moveTo(0,a+n.lengthPx*.02),e.lineTo(o,a+n.lengthPx*.09),e.moveTo(0,a+n.lengthPx*.02),e.lineTo(-o,a+n.lengthPx*.09),e.stroke(),e.restore()}function br(e,t,n,r){let i=n.lengthPx/2,a=Math.max(4,Math.min(n.lengthPx*.32,n.beamPx*1.3)),o=t*mr*Math.PI/180,s=Pn(r,pr,!0);e.save(),e.globalAlpha*=s.alpha,e.strokeStyle=s.fill,e.lineWidth=Math.max(1.5,Math.min(n.beamPx*.24,4)),e.lineCap=`round`,e.beginPath(),e.moveTo(0,i),e.lineTo(Math.sin(o)*a,i+Math.cos(o)*a),e.stroke(),e.restore()}function xr(e,t,n){let r=t.burns??C,i=t.plating??C;if(!(t.sunk||!V(r,i))){e.save(),e.clip();for(let a of Ae(t.id,r,i)){let t=a.kind===`soot`;e.fillStyle=t?`rgba(22, 19, 17, ${(a.weight*.72).toFixed(3)})`:`rgba(120, 100, 84, ${(a.weight*.6).toFixed(3)})`,e.beginPath(),e.ellipse(a.across*n.beamPx*.34,-a.along*n.lengthPx,Math.max(.7,a.size*n.beamPx*.5),Math.max(.7,a.size*n.beamPx*(t?.8:.42)),0,0,2*Math.PI),e.fill()}e.restore()}}function Sr(t,n,r,i){let a=i.toScreen(i.posOf(n)),o=e(n.cls,i.metresPerPx),s=L[n.cls],c=n.side===`raider`?re:we,l=n.side===`raider`?A:m,u=n.sunk?0:i.rudderOf(n),d=-u*gr*o.beamPx*Math.min(1,Math.abs(n.motion.speedKnots)/20)+Yn(n.flooding,n.id)/15*_r*o.beamPx;t.save(),t.translate(a.x,a.y),t.rotate(i.headingOf(n)*(Math.PI/180)),t.globalAlpha=n.sunk?.35:1,n.sunk||yr(t,n,o),vr(t,s,o.lengthPx,o.beamPx,n.flooding),t.fillStyle=c,t.fill(),t.strokeStyle=k,t.lineWidth=1,t.stroke();let f=(n.flooding.fore.level+n.flooding.mid.level+n.flooding.aft.level)/3;f>.04&&(t.fillStyle=`rgba(14, 36, 58, ${(.4*f).toFixed(3)})`,t.fill()),vr(t,s,o.lengthPx,o.beamPx,n.flooding),xr(t,n,o),Bn(t,n,s,o,l,d);let p=Hn(r,n);for(let e of v(n.cls)){let a=s.turrets.find(t=>t.mountId===e.id);a!==void 0&&(p!==null&&Un(t,a,o,l,p),(p===null||p>0)&&(t.globalAlpha=p===null?1:p,dr(t,n,e,a,o,l,r,i)),t.globalAlpha=n.sunk?.35:1)}if(n.sunk||(br(t,u,o,n.subsystems.steering),t.save(),vr(t,s,o.lengthPx,o.beamPx,n.flooding),t.clip(),Ce(t,n,o.beamPx,o.lengthPx,i.animationMs),t.restore()),t.globalAlpha=1,t.restore(),!n.sunk){let e=n.orders.headingDeg*Math.PI/180;t.strokeStyle=fr,t.lineWidth=1,t.beginPath(),t.moveTo(a.x+Math.sin(e)*(o.lengthPx/2+3),a.y-Math.cos(e)*(o.lengthPx/2+3)),t.lineTo(a.x+Math.sin(e)*(o.lengthPx/2+12),a.y-Math.cos(e)*(o.lengthPx/2+12)),t.stroke()}de(t,n,a,o.lengthPx/2+24)}var Cr=`rgba(255, 255, 255, 0.72)`,wr=13,Tr=46,Er=9,Dr=15;function Or(e,t,n,r){e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.stroke()}function kr(t,n,r){let i=n.ships.filter(e=>e.side===`raider`&&!e.sunk);if(i.length!==0){t.strokeStyle=Cr,t.lineWidth=1.5;for(let a of n.ships){if(a.side!==`enemy`||a.sunk||!i.some(e=>E(n,e,a)))continue;let o=r.toScreen(r.posOf(a)),s=e(a.cls,r.metresPerPx).lengthPx*.5;Or(t,o.x,o.y,Math.min(Tr,Math.max(wr,s+Er)))}for(let e of n.flights){let n=r.toScreen(Jt(e,r));Or(t,n.x,n.y,Dr)}}}var Ar={AP:`rgba(236, 242, 250, 0.92)`,HE:`rgba(255, 222, 130, 0.92)`},jr={AP:`rgba(236, 242, 250, 0.3)`,HE:`rgba(255, 222, 130, 0.3)`},Mr=180;function Nr(e,t){let n=.8*t,r=.3*t;e.beginPath(),e.moveTo(n,0),e.quadraticCurveTo(n*.15,r,-n*.8,r),e.lineTo(-n,r*.8),e.lineTo(-n,-r*.8),e.lineTo(-n*.8,-r),e.quadraticCurveTo(n*.15,-r,n,0),e.closePath()}function Pr(e,t,n){for(let r of t.salvos){let i=t.ships.find(e=>e.id===r.shooterId),a=t.ships.find(e=>e.id===r.targetId);if(i===void 0||a===void 0)continue;let o=Math.max(1,r.landsAtTick-r.firedAtTick),s=Math.min(1,Math.max(0,(t.tick+n.frameFraction-r.firedAtTick)/o)),c=cr(i,r.mountId,t,n),l=n.posOf(a),u=n.toScreen({x:l.x+r.fallOffset.x,y:l.y+r.fallOffset.y}),d=Math.hypot(u.x-c.x,u.y-c.y),f=d<1?0:-(u.y-c.y)/d,p=d<1?0:(u.x-c.x)/d,m=I(`${r.shooterId}:${r.mountId}`)^(r.firedAtTick|0),h=Math.max(0,s-.04),g=1+.85*F(s),_=Mr/n.metresPerPx,v=Math.atan2(u.y-c.y,u.x-c.x);for(let t=0;t<r.guns;t+=1){let n=(T(m,t,0)-.5)*2*_,i=c.x+(u.x-c.x)*s+f*n*s,a=c.y+(u.y-c.y)*s+p*n*s;e.strokeStyle=jr[r.shell],e.lineWidth=1,e.beginPath(),e.moveTo(c.x+(u.x-c.x)*h+f*n*h,c.y+(u.y-c.y)*h+p*n*h),e.lineTo(i,a),e.stroke(),e.save(),e.translate(i,a),e.rotate(v),Nr(e,g),e.fillStyle=Ar[r.shell],e.fill(),e.restore()}}}function Fr(t,n,r){let i=n.ships.filter(e=>e.side===`enemy`&&!e.sunk&&!e.struckColours);t.font=Ne(11,`bold`),t.fillStyle=we;for(let[n,a]of i.entries()){let o=a.name??(i.length>1?`${n+1}`:null);if(o===null)continue;let s=r.toScreen(r.posOf(a)),c=e(a.cls,r.metresPerPx).lengthPx/2;t.fillText(o,s.x+c+6,s.y-8)}let a=n.ships.find(e=>e.side===`raider`&&!e.sunk),o=a===void 0?null:ge(a.cls);if(a===void 0||o===null)return;let s=r.toScreen(r.posOf(a)),c=e(a.cls,r.metresPerPx).lengthPx/2;t.save(),t.fillStyle=S,t.textAlign=`center`,t.fillText(ee[o].shipName,s.x,s.y+c+14),t.restore()}var Ir=36,Lr=1.35,Rr=5;function zr(t,n){return t.ships.map(t=>{let r=n.toScreen(n.posOf(t)),i=n.headingOf(t)*Math.PI/180,a=e(t.cls,n.metresPerPx);return{x:r.x,y:r.y,sternX:-Math.sin(i),sternY:Math.cos(i),wakePx:t.sunk||t.motion.speedKnots<.5?0:Math.min(90,4+t.motion.speedKnots*2.6)*Lr,lengthPx:a.lengthPx,beamPx:a.beamPx}})}var Br={calm:0,wakeEdge:0};function Vr(e,t,n){let r=0,i=0;for(let a of e){let e=t-a.x,o=n-a.y,s=Math.hypot(e,o);if(s<Ir&&(r=Math.max(r,1-s/Ir)),a.wakePx<=0)continue;let c=e*a.sternX+o*a.sternY-a.lengthPx/2;if(c<0||c>a.wakePx)continue;let l=1-c/a.wakePx,u=Math.abs(o*a.sternX-e*a.sternY),d=a.beamPx*(.9+1.3*(c/a.wakePx));u<d?r=Math.max(r,.25+.75*l):u<d+Rr&&(i=Math.max(i,l))}return r===0&&i===0?Br:{calm:Math.min(1,r),wakeEdge:i}}var Hr=`200, 226, 250`,Ur=`8, 26, 48`,Wr=1.4,Gr=`240, 248, 255`,Kr=56,qr=3.5;function Jr(e,t,n,r,i,a,o,s){let c=2**Math.round(Math.log2(Kr*n.metresPerPx)),l=n.toScreen({x:0,y:0}),u=(0-l.x)*n.metresPerPx,d=(o-l.x)*n.metresPerPx,f=(l.y-s)*n.metresPerPx,p=l.y*n.metresPerPx,m=r.storm>=.12,h=Math.sin(i),g=-Math.cos(i),_=zr(t,n);e.lineWidth=1.2;for(let t=Math.floor(u/c);t*c<=d;t+=1)for(let o=Math.floor(f/c);o*c<=p;o+=1){let s=j(t,o*13+5),l=Le(a/qr+s,1),u=Math.sin(l*Math.PI)**2;if(u<.06)continue;let d=(j(t*7+1,o)-.5)*.9,f=(j(t,o*7+3)-.5)*.9,p=(l-.5)*.25,v=n.toScreen({x:(t+.5+d+Math.sin(i)*p)*c,y:(o+.5+f+Math.cos(i)*p)*c}),y=Vr(_,v.x,v.y);if(j(t,o)<=r.crestDensity&&y.calm<.9){let n=1-y.calm,a=i+Math.PI/2+(j(t*3,o*5)-.5)*.7,s=(5+8*j(t*5+2,o*3+1))*n,c=Math.sin(a)*s,l=-Math.cos(a)*s,d=2.5,f=v.x-h*Wr,p=v.y-g*Wr;if(e.strokeStyle=`rgba(${Ur}, ${(.55*r.crestAlpha*u*n).toFixed(3)})`,e.beginPath(),e.moveTo(f-c,p-l),e.quadraticCurveTo(f+h*d,p+g*d,f+c,p+l),e.stroke(),e.strokeStyle=`rgba(${Hr}, ${(r.crestAlpha*u*n).toFixed(3)})`,e.beginPath(),e.moveTo(v.x-c,v.y-l),e.quadraticCurveTo(v.x+h*d,v.y+g*d,v.x+c,v.y+l),e.stroke(),m&&j(t*11+4,o)<.6&&(e.fillStyle=`rgba(${Gr}, ${(.5*u*n).toFixed(3)})`,e.beginPath(),e.arc(v.x,v.y,1+1.4*u,0,2*Math.PI),e.fill(),u>.45&&j(t*19+2,o*5+8)<.55)){let r=j(t*23+6,o*17+3)<.5?1:-1,i=(3.5+5*j(t*29+7,o*7+9))*n;e.strokeStyle=`rgba(${Gr}, ${(.32*u*n).toFixed(3)})`,e.beginPath(),e.moveTo(v.x+r*c,v.y+r*l),e.lineTo(v.x+r*c+h*i,v.y+r*l+g*i),e.stroke()}}if(y.wakeEdge>.05){let t=Math.sin(Le(a/1.6+s,1)*Math.PI)**2;e.fillStyle=`rgba(${Gr}, ${(.45*y.wakeEdge*(.35+.65*t)).toFixed(3)})`,e.beginPath(),e.arc(v.x,v.y,1+1.5*y.wakeEdge,0,2*Math.PI),e.fill()}}}var Yr=`210, 228, 244`,Xr=`224, 168, 110`,Zr=`255, 250, 235`,Qr=28,$r=1.15,ei={clear:1,overcast:.45,squall:.15,gale:0};function ti(e,t){let n=ei[t];return{liftAlpha:.05*a(U((e-8)/22))*(.4+.6*n),warmAlpha:.07*F(U((e+6)/16))*(.3+.7*n),glitterDensity:.22*a(U(e/25))*n}}function ni(e,t,n,r){t.liftAlpha>.003&&(e.fillStyle=`rgba(${Yr}, ${t.liftAlpha.toFixed(3)})`,e.fillRect(0,0,n,r)),t.warmAlpha>.003&&(e.fillStyle=`rgba(${Xr}, ${t.warmAlpha.toFixed(3)})`,e.fillRect(0,0,n,r))}function ri(e,t,n,r,i,a){if(n.glitterDensity<=.005)return;let o=2**Math.round(Math.log2(Qr*t.metresPerPx)),s=t.toScreen({x:0,y:0}),c=(0-s.x)*t.metresPerPx,l=(i-s.x)*t.metresPerPx,u=(s.y-a)*t.metresPerPx,d=s.y*t.metresPerPx;for(let i=Math.floor(c/o);i*o<=l;i+=1)for(let a=Math.floor(u/o);a*o<=d;a+=1){if(j(i*17+9,a*23+4)>=n.glitterDensity)continue;let s=j(i*5+2,a*11+7),c=(r/$r+s)%1,l=Math.sin(c*Math.PI)**2;if(l<.2)continue;let u=(j(i*3+1,a*13+6)-.5)*.9,d=(j(i*13+8,a*3+2)-.5)*.9,f=t.toScreen({x:(i+.5+u)*o,y:(a+.5+d)*o});e.fillStyle=`rgba(${Zr}, ${(.45*l).toFixed(3)})`,e.beginPath(),e.arc(f.x,f.y,.7,0,2*Math.PI),e.fill()}}var ii=[205,230,255];function ai(){let e=[{tile:le(31,10,ii,512),speed:10,scale:1.2,stretch:7,alpha:.1},{tile:le(47,10,ii,512),speed:5.5,scale:.65,stretch:5,alpha:.06}],t=e.map(()=>null);return{draw(n,r,i,a,o,s,c){let l=i-Math.PI/2;for(let[i,u]of e.entries()){t[i]??=n.createPattern(u.tile,`repeat`);let e=t[i];if(e==null)continue;n.save(),n.globalAlpha=u.alpha*o,n.translate(r.x,r.y),n.rotate(l);let d=u.tile.width*u.scale;n.translate(Le(a*u.speed,d),0),n.scale(u.scale,u.scale*u.stretch);let f=(Math.hypot(r.x,r.y)+s+c+d)/u.scale;n.fillStyle=e,n.fillRect(-f,-f,2*f,2*f),n.restore()}}}}var oi=`#12365c`,si=[8,30,56],ci=[205,230,255],li=`rgba(8, 14, 34, 0.3)`,ui=`58, 72, 84`,di=6,fi=4,pi={clear:{crestDensity:.3,crestAlpha:.45,swell:1,storm:0},overcast:{crestDensity:.45,crestAlpha:.55,swell:1.15,storm:.05},squall:{crestDensity:.7,crestAlpha:.75,swell:1.35,storm:.12},gale:{crestDensity:1,crestAlpha:1,swell:1.6,storm:.2}};function mi(){let e=[{tile:G(21,22,si),drift:{x:.8,y:.4},scale:6,alpha:.22,rotate:-.35},{tile:le(8,20,ci,512),drift:{x:-4,y:5},scale:1.7,alpha:.04,rotate:.25},{tile:le(53,44,ci,512),drift:{x:9,y:6},scale:1,alpha:.075,rotate:-.15}],n=e.map(()=>null),r=ai(),i=document.createElement(`canvas`),a=i.getContext(`2d`);function o(t,r,i,a,o,s,c){let l=e[r];if(l===void 0)return;n[r]??=t.createPattern(l.tile,`repeat`);let u=n[r];if(u!=null){if(t.save(),t.globalAlpha=l.alpha*c,l.rotate===void 0){let e=l.tile.width*l.scale,n=Le(i.x+a*l.drift.x,e),r=Le(i.y+a*l.drift.y,e);t.translate(n,r),t.scale(l.scale,l.scale),t.fillStyle=u,t.fillRect((-n-e)/l.scale,(-r-e)/l.scale,(o+2*e)/l.scale,(s+2*e)/l.scale)}else{let e=i.x+a*l.drift.x,n=i.y+a*l.drift.y;t.translate(e,n),t.rotate(l.rotate),t.scale(l.scale,l.scale);let r=(Math.hypot(e,n)+o+s+l.tile.width)/l.scale;t.fillStyle=u,t.fillRect(-r,-r,2*r,2*r)}t.restore()}}return{draw(e,n,s,c,l){let u=N()?0:(n.tick+s.frameFraction)*10,d=b(n.setting,n.tick,{x:0,y:0}),f=pi[d.weather],p=ti(_e(he(n.setting,n.tick),t(n.setting.anchor,{x:0,y:0})),d.weather),m=s.toScreen({x:0,y:0}),h=be(n.setting.weatherSeed),g=a??e;if(a!==null){let e=Math.max(1,Math.round(c)),t=Math.max(1,Math.round(l));(i.width!==e||i.height!==t)&&(i.width=e,i.height=t)}g.fillStyle=oi,g.fillRect(0,0,c,l),ni(g,p,c,l),o(g,0,m,u,c,l,1),r.draw(g,m,h,u,f.swell,c,l),o(g,1,m,u,c,l,f.swell);let _=U((di-s.metresPerPx)/fi)*f.swell;_>.02&&o(g,2,m,u,c,l,_),f.storm>0&&(g.fillStyle=`rgba(${ui}, ${f.storm})`,g.fillRect(0,0,c,l)),a!==null&&e.drawImage(i,0,0,c,l),Jr(e,n,s,f,h,u,c,l),ri(e,s,p,u,c,l),d.dark&&(e.fillStyle=li,e.fillRect(0,0,c,l))}}}var hi=.8,gi=`235, 244, 252`,_i=`rgba(230, 240, 255, 0.85)`,vi=`rgba(240, 248, 255, 0.9)`,yi=`rgba(255, 150, 90, 0.9)`,bi=`255, 236, 200`,xi=`58, 56, 62`,Si=.25;function Ci(t,n,r){for(let i of n.ships){if(i.sunk||i.motion.speedKnots<.5)continue;let{lengthPx:a,beamPx:o}=e(i.cls,r.metresPerPx),s=r.toScreen(r.posOf(i)),c=Math.min(90,4+i.motion.speedKnots*2.6),l=I(i.id),u=Math.floor((n.tick+r.frameFraction)*10/hi);t.save(),t.translate(s.x,s.y),t.rotate(r.headingOf(i)*Math.PI/180);let d=a/2,f=t.createLinearGradient(0,d,0,d+c);f.addColorStop(0,`rgba(${gi}, 0.4)`),f.addColorStop(1,`rgba(${gi}, 0)`),t.fillStyle=f,t.beginPath(),t.moveTo(-o*.45,d),t.lineTo(o*.45,d),t.lineTo(o*.95,d+c),t.lineTo(-o*.95,d+c),t.closePath(),t.fill();for(let e=0;e<6;e+=1){let n=(e+j(l+e,u))/6,r=d+n*c,i=o*(.45+.5*n),a=(j(l+e,u+1)-.5)*2*i*.7;t.fillStyle=`rgba(${gi}, ${.35*(1-n)})`,t.beginPath(),t.arc(a,r,.8+1.6*(1-n),0,2*Math.PI),t.fill()}t.strokeStyle=`rgba(${gi}, 0.18)`,t.lineWidth=1;for(let e of[-1,1])t.beginPath(),t.moveTo(e*o*.5,d),t.lineTo(e*(o*.5+c*.3),d+c),t.stroke();let p=-a/2;t.strokeStyle=`rgba(${gi}, ${Math.min(.5,.1+i.motion.speedKnots*.015)})`,t.lineWidth=1.2,t.beginPath(),t.moveTo(-o*.9,p+o),t.lineTo(0,p-1.5),t.lineTo(o*.9,p+o),t.stroke(),t.restore()}}function wi(t,n,r){for(let i of n.falls){let a=n.tick+r.frameFraction-i.tick,o=1-a/y.fallRetentionTicks;if(o<=0)continue;let s=i.tick*37+Math.round(i.pos.x)*7+Math.round(i.pos.y)|0,c=r.toScreen(i.pos);for(let e=0;e<i.guns;e+=1){let n=T(s,e,0)*2*Math.PI,i=(40+T(s,e,1)*140)/r.metresPerPx,l=c.x+Math.cos(n)*i,u=c.y+Math.sin(n)*i,d=F(Math.min(1,a/(y.fallRetentionTicks*.45)))*13;if(d>.5){t.fillStyle=_i,un(t,l,u,d,3.6,s,e),t.fillStyle=vi;for(let n=0;n<3;n+=1){let r=(T(s,e,2+n)-.5)*6;t.beginPath(),t.arc(l+r,u-d-1.5,.9,0,2*Math.PI),t.fill()}}let f=1.5+(1-o)*4;t.fillStyle=`rgba(230, 240, 255, ${.35*o})`,t.beginPath(),t.arc(l,u,f,0,2*Math.PI),t.fill()}if(i.hits>0){let l=Math.min(1,.5+i.hits*.25),d=n.ships.find(e=>e.id===i.targetId),f=n.ships.find(e=>e.id===i.shooterId),p=c.x,m=c.y,h=null;if(d!==void 0&&!d.sunk){let n=r.posOf(d),o=r.toScreen(n),l=e(d.cls,r.metresPerPx),g=r.headingOf(d)*Math.PI/180,_=f===void 0?i.pos:r.posOf(f);if(u(Math.hypot(_.x-n.x,_.y-n.y))===`long`){let e=(T(s,9,7)-.5)*l.lengthPx*.6;p=o.x+Math.sin(g)*e,m=o.y-Math.cos(g)*e}else{let e=(f===void 0?c.x:r.toScreen(_).x)-o.x,n=(f===void 0?c.y:r.toScreen(_).y)-o.y,i=Math.hypot(e,n)||1;if(e/=i,n/=i,p=o.x+e*(l.beamPx*.5+1),m=o.y+n*(l.beamPx*.5+1),h=g,a<Si){let r=a/Si;t.strokeStyle=`rgba(${bi}, ${((1-r)*.85).toFixed(3)})`,t.lineWidth=1;for(let i=0;i<2;i+=1){let a=(T(s,i,8)-.5)*1.4,o=(3+4*T(s,i,9))*R(r);t.beginPath(),t.moveTo(p,m),t.lineTo(p+(e-n*a)*o,m+(n+e*a)*o),t.stroke()}}}}if(a<Si){let e=a/Si;t.fillStyle=`rgba(${bi}, ${(1-e)*.95})`,t.beginPath(),h===null?t.arc(p,m,(2+6*R(e))*l,0,2*Math.PI):t.ellipse(p,m,(1.2+2*R(e))*l,(3+5*R(e))*l,h,0,2*Math.PI),t.fill()}let g=be(n.setting.weatherSeed),_=R(1-o)*10,v=Math.sin(g)*_,y=-Math.cos(g)*_,b=1+Math.min(3,i.hits);for(let e=0;e<b;e+=1){let n=(T(s,e,5)-.5)*9,r=(T(s,e,6)-.5)*9,i=(1.5+4.5*R(1-o))*l;t.fillStyle=`rgba(${xi}, ${.4*o*l})`,t.beginPath(),t.arc(p+n+v,m+r+y,i,0,2*Math.PI),t.fill()}t.globalAlpha=Math.max(0,o),t.strokeStyle=yi,t.lineWidth=2,t.beginPath(),t.arc(c.x,c.y,7,0,2*Math.PI),t.stroke(),t.globalAlpha=1}}}var Ti=2.6,Ei=48,Di=.45,Oi=new Set(Object.values(B).map(e=>e.torpedo));function ki(e){return Oi.has(e)}function Ai(e){let t=g[e.type].rangeMetres-e.runMetresLeft,n=e.headingDeg*Math.PI/180;return{x:e.pos.x-Math.sin(n)*t,y:e.pos.y-Math.cos(n)*t}}function ji(e,t,n){return(t-e.firedAtTick)*n}function Mi(e,t,n){if(!ki(e.type))return null;let r=ji(e,t,n);if(r<0||r>=2.6)return null;let i=r/Ti,a=Ai(e),o=e.headingDeg*Math.PI/180,s=Math.sin(o),c=Math.cos(o),l=Ei*(1-i);return{fall:i,x:a.x-s*l,y:a.y-c*l,z:55*(1-i*i),pitchR:Di*i,entryX:a.x,entryY:a.y}}function Ni(e,t,n){return Mi(e,t,n)!==null}function Pi(e,t,n,r){if(!ki(e.type))return null;let i=ji(e,t,n)-Ti;if(i<0||i>r)return null;let a=Ai(e);return[a.x,a.y,7,i]}function Fi(e){return g[e].speedKnots*.5144444444444445>19?5.1:7.2}var Ii=[[7,1,1],[13,1,-1],[19,.6,0]],Li=1.05,Ri=1.75,zi=1.3,Bi=7,Vi=4;function Hi(e,t){return e*8191^Math.round(t*128)}function Ui(e,t){return Math.max(1,Math.ceil(t*e/6))}function Wi(e,t,n,r,i,a,o,s=1){let c=[],l=Math.max(0,Math.ceil((a-_.wakeMetres)/6));for(let u=Math.ceil(l/s)*s;u*6<=i;u+=s){let i=u*6,s=1-(a-i)/_.wakeMetres,l=Math.sqrt(Math.max(0,Math.min(1,s))),d=zi+(Bi-zi)*(1-s);for(let[a,f,p]of Ii){let m=p===0?(j(o+u,a)-.5)*1.6*d:p*d*(.72+.56*j(o+u,a)),h=i-j(o+u,a+3)*Vi;c.push({x:e+n*h-r*m,y:t+r*h+n*m,life:s,fade:l,radiusMetres:(Li+Ri*s)*f*(.62+.76*j(o+u,a+1)),seed:j(o+u,a+2)})}}return c}var Gi=`rgb(215, 238, 255)`,Ki=`rgba(240, 250, 255, 0.95)`,qi=`rgba(255, 150, 90, 0.9)`,Ji=`255, 240, 214`,Yi=`236, 245, 255`,Xi=`245, 250, 255`,Zi=`230, 240, 252`,Qi=.6,$i=.08,ea=.35,ta=5,na=6;function ra(e,t,n,r,i){let a=I(`${t.targetId}:${t.zone}:${t.tick}`),o=U(r/ea);o<1&&(e.strokeStyle=`rgba(${Yi}, ${(.5*(1-o)).toFixed(3)})`,e.lineWidth=1.5,e.beginPath(),e.arc(n.x,n.y,4+R(o)*26,0,2*Math.PI),e.stroke());let s=U(r/Qi);if(s<1)for(let t=0;t<4;t+=1){let r=(T(a,t,0)-.5)*11,i=(T(a,t,1)-.5)*7,o=F(s)*(14+14*T(a,t,2))*(t===0?1.4:1);if(!(o<.5)){e.fillStyle=`rgba(${Yi}, 0.9)`,un(e,n.x+r,n.y+i,o,t===0?6.5:4.5,a,t),e.fillStyle=`rgba(${Xi}, 0.9)`;for(let s=0;s<3;s+=1){let c=(T(a,t,3+s)-.5)*8;e.beginPath(),e.arc(n.x+r+c,n.y+i-o-2,1.1,0,2*Math.PI),e.fill()}}}let c=U(r/$i);c<1&&(e.fillStyle=`rgba(${Ji}, ${(.95*(1-c)).toFixed(3)})`,e.beginPath(),e.arc(n.x,n.y,3+7*R(c),0,2*Math.PI),e.fill()),e.fillStyle=`rgba(${Zi}, ${(.4*i).toFixed(3)})`,e.beginPath(),e.arc(n.x,n.y,3.5+R(1-i)*12,0,2*Math.PI),e.fill()}function ia(e,t,n,r,i,a,o){let s=Ui(r,ta),c=Array.from({length:na},()=>[]),l=(e,t,i,a,o,l)=>{for(let u of Wi(e.x,e.y,t,i,a,o,l,s)){let e=n({x:u.x,y:u.y}),t=Math.min(na-1,Math.floor(u.fade*na));c[t]?.push(e.x,e.y,Math.max(.5,u.radiusMetres/r))}},u=[],d=t.tick-1+i;for(let e of t.torpedoes){if(e.side===`enemy`&&!e.sighted||Ni(e,d,a))continue;let r=g[e.type].speedKnots*p,s=e.headingDeg*Math.PI/180,c=ie(e,(i-1)*r*a,t.ships,e=>o(e)),f=Math.sin(s),m=Math.cos(s);u.push(n({x:e.pos.x+f*c,y:e.pos.y+m*c}));let h=g[e.type].rangeMetres-e.runMetresLeft+c;l({x:e.pos.x-f*(h-c),y:e.pos.y-m*(h-c)},f,m,h,h,Hi(e.firedAtTick,e.headingDeg))}for(let e of t.spentTorpedoes??[]){if(e.side===`enemy`&&!e.sighted)continue;let n=g[e.type].speedKnots*p,r=e.headingDeg*Math.PI/180,o=Math.sin(r),s=Math.cos(r),c=e.runMetres+(t.tick+i-e.endedAtTick)*a*n;l({x:e.pos.x-o*e.runMetres,y:e.pos.y-s*e.runMetres},o,s,e.runMetres,c,Hi(e.firedAtTick,e.headingDeg))}if(e.fillStyle=Gi,c.forEach((t,n)=>{if(t.length!==0){e.globalAlpha=.85*(n+.5)/na,e.beginPath();for(let n=0;n<t.length;n+=3){let r=t[n]??0,i=t[n+1]??0,a=t[n+2]??0;e.moveTo(r+a,i),e.arc(r,i,a,0,2*Math.PI)}e.fill()}}),e.globalAlpha=1,e.fillStyle=Ki,u.length>0){let t=Math.max(1.5,6/r);e.beginPath();for(let n of u)e.moveTo(n.x+t,n.y),e.arc(n.x,n.y,t,0,2*Math.PI);e.fill()}for(let r of t.torpedoHits){let o=t.tick-1+i-(r.tick-1)-(r.atSeconds??a)/a;if(o<0)continue;let s=Math.max(0,1-o/_.hitRetentionTicks);if(s<=0)continue;let c=n(r.pos);ra(e,r,c,o,s),e.globalAlpha=s,e.strokeStyle=qi,e.lineWidth=3,e.beginPath(),e.arc(c.x,c.y,10,0,2*Math.PI),e.stroke(),e.globalAlpha=1}}function aa(e){let t=e.getContext(`2d`);if(!t)throw Error(`Canvas 2D context unavailable`);let n=t,r=0,i=0,a={x:0,y:0},o=20,s=!1,c=null,l=null,u=mi(),f=At(),p=Ze();function m(e){let t=e.ships.map(e=>f.posOf(e).x),n=e.ships.map(e=>f.posOf(e).y),s=Math.min(...t)-q,c=Math.max(...t)+q,l=Math.min(...n)-q,u=Math.max(...n)+q;a={x:(s+c)/2,y:(l+u)/2},o=Math.max((c-s)/Math.max(r,1),(u-l)/Math.max(i,1),Be/Math.max(Math.min(r,i),1))}function h(e){return{x:r/2+(e.x-a.x)/o,y:i/2-(e.y-a.y)/o}}function g(){return!0}return{resize(t,a){r=t,i=a;let o=window.devicePixelRatio||1;e.width=Math.round(t*o),e.height=Math.round(a*o),e.style.width=`${t}px`,e.style.height=`${a}px`,n.setTransform(o,0,0,o,0,0)},render(e,t=0){let a=e.battle;if(a===null)return;c=a,f.step(a,t);let l=f.frameFraction();s||m(a);let d={toScreen:h,inFront:g,posOf:f.posOf,headingOf:f.headingOf,rudderOf:f.rudderOf,metresPerPx:o,frameFraction:l,animationMs:performance.now()};u.draw(n,a,d,r,i),st(n,a,d);let _=a.ships.find(e=>e.side===`raider`);_!==void 0&&ue(n,_,d),Ci(n,a,d),ke(n,a,d),ia(n,a,h,o,l,10,f.posOf),wi(n,a,d),Pr(n,a,d);for(let e of a.ships)Sr(n,e,a,d);ht(n,a,d),Dt(n,a,d),Zt(n,a,d),Cn(n,a,d),kr(n,a,d),Fr(n,a,d),p.draw(n,a,d),zt(n,a,r,f.posOf)},renderAftermath(e,t){c=e,f.step(e,Math.min(t,8)),s||m(e);let a={toScreen:h,inFront:g,posOf:f.posOf,headingOf:f.headingOf,rudderOf:f.rudderOf,metresPerPx:o,frameFraction:t/10,animationMs:performance.now()};u.draw(n,e,a,r,i),st(n,e,a),Ci(n,e,a),ke(n,e,a),wi(n,e,a);for(let r of e.ships)r.sunk&&d(t)||Sr(n,r,e,a);ht(n,e,a),Dt(n,e,a);for(let r of e.ships)r.sunk&&O(n,r,a,t)},screenToPlane(e,t){return{x:a.x+(e-r/2)*o,y:a.y-(t-i/2)*o}},shipAt(e,t){if(c===null)return null;let n=null;for(let r of c.ships){let i=h(f.posOf(r)),a=Math.hypot(i.x-e,i.y-t);a<28&&(n===null||a<n.d)&&(n={id:r.id,d:a})}return n?.id??null},panByPixels(e,t){s=!0,a={x:a.x-e*o,y:a.y+t*o}},zoomBy(e,t,n){s=!0;let c={x:a.x+(t-r/2)*o,y:a.y-(n-i/2)*o};o=Math.max(ze,Math.min(400,o/e)),a={x:c.x-(t-r/2)*o,y:c.y+(n-i/2)*o}},recenter(){s=!1},isManual(){return s},setReport(e){l=e},reportShipId(){return l}}}function J(e,t,n){let r=(t,n)=>{let r=e.createShader(t);if(r===null)throw Error(`shader allocation failed`);if(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)!==!0)throw Error(`shader: ${e.getShaderInfoLog(r)??`unknown`}`);return r},i=e.createProgram();if(i===null)throw Error(`program allocation failed`);let a=r(e.VERTEX_SHADER,t),o=r(e.FRAGMENT_SHADER,n);if(e.attachShader(i,a),e.attachShader(i,o),e.linkProgram(i),e.getProgramParameter(i,e.LINK_STATUS)!==!0)throw Error(`link: ${e.getProgramInfoLog(i)??`unknown`}`);e.detachShader(i,a),e.detachShader(i,o),e.deleteShader(a),e.deleteShader(o);let s=new Map;return{program:i,uniform(t){let n=s.get(t);if(n!==void 0)return n;let r=e.getUniformLocation(i,t);return s.set(t,r),r}}}function oa(e,t){let n=new Float32Array((t+1)*(t+1)*2),r=0;for(let e=0;e<=t;e+=1)for(let i=0;i<=t;i+=1)n[r]=-.5+i/t,n[r+1]=-.5+e/t,r+=2;let i=new Uint32Array(t*t*6),a=0;for(let e=0;e<t;e+=1)for(let n=0;n<t;n+=1){let r=e*(t+1)+n,o=r+1,s=r+(t+1),c=s+1;i[a]=r,i[a+1]=o,i[a+2]=c,i[a+3]=r,i[a+4]=c,i[a+5]=s,a+=6}let o=e.createVertexArray();if(o===null)throw Error(`vao allocation failed`);e.bindVertexArray(o);let s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let c=e.createBuffer();return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,c),e.bufferData(e.ELEMENT_ARRAY_BUFFER,i,e.STATIC_DRAW),e.bindVertexArray(null),{vao:o,indexCount:i.length,cells:t}}function sa(e,t){let n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,40,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,40,12),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,3,e.FLOAT,!1,40,24),e.enableVertexAttribArray(3),e.vertexAttribPointer(3,1,e.FLOAT,!1,40,36),e.bindVertexArray(null),{vao:n,buffer:r,vertexCount:t.length/10}}function ca(e){let t=e.createVertexArray();if(t===null)throw Error(`vao allocation failed`);e.bindVertexArray(t);let n=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null),t}var la=[.11,.19,.44],ua=[.92,.92,.9],da=[.78,.11,.16];function Y(e,t){return{rgb:e,corners:t.map(([e,t])=>[e*.5,t*.5])}}function X(e,t,n,r){return[[e,t],[n,t],[n,r],[e,r]]}var fa=[Y(la,X(0,0,1,1)),Y(ua,[[0,0],[0,.3],[1,1],[1,.7]]),Y(ua,[[0,1],[0,.7],[1,0],[1,.3]]),Y(da,[[0,.085],[0,.215],[1,.915],[1,.785]]),Y(da,[[0,.915],[0,.785],[1,.085],[1,.215]]),Y(ua,X(0,.333,1,.667)),Y(ua,X(.417,0,.583,1)),Y(da,X(0,.4,1,.6)),Y(da,X(.45,0,.55,1))],pa={royalNavy:{name:`Royal Navy`,roundel:[{radius:1,rgb:[.13,.29,.66]},{radius:.6,rgb:[.9,.91,.9]},{radius:.2,rgb:[.79,.13,.21]}],finFlash:[{width:1,rgb:[.13,.29,.66]},{width:1,rgb:[.9,.91,.9]},{width:1,rgb:[.79,.13,.21]}],ensign:{name:`White Ensign`,ratio:2,patches:[{corners:X(0,0,1,1),rgb:[.9,.9,.88]},{corners:X(0,.4,1,.6),rgb:da},{corners:X(.45,0,.55,1),rgb:da},...fa]}},britishMerchant:{name:`British merchant service`,ensign:{name:`Red Ensign`,ratio:2,patches:[{corners:X(0,0,1,1),rgb:[.72,.13,.16]},...fa]}}};function ma(e){return pa[e]}var ha=.05;function ga(e,t,n,r,i,a,o=8){let s=i+ha,c=(e,t)=>{let i=t/o*2*Math.PI;return[n+Math.cos(i)*e,r+Math.sin(i)*e,s]};for(let i=0;i<t.length;i+=1){let l=t[i],u=a*l.radius,d=i+1<t.length?a*t[i+1].radius:0;for(let t=0;t<o;t+=1){let i=t+1;d<=0?e.tri([n,r,s],c(u,t),c(u,i),l.rgb):e.quad(c(d,t),c(u,t),c(u,i),c(d,i),l.rgb)}}}function _a(e,t,n,r,i,a,o){let s=t.reduce((e,t)=>e+t.width,0);if(!(s<=0))for(let c of[-1,1]){let l=c*n,u=r;for(let n of t){let t=u+(i-r)*n.width/s,d=c*(i-r)>0?[[l,u,a],[l,t,a],[l,t,o],[l,u,o]]:[[l,t,a],[l,u,a],[l,u,o],[l,t,o]];e.quad(d[0],d[1],d[2],d[3],n.rgb),u=t}}}var va=.18,ya=.004;function ba(e,t,n,r){let i=r*t.ratio,[a,o,s]=n,c=(e,t,n)=>[a+n,o-e*i,s-t*r-e*i*va];for(let n=0;n<t.patches.length;n+=1){let r=t.patches[n],[i,a,o,s]=r.corners;for(let t of[1,-1]){let l=t*(.01+n*ya),u=(t>0?[i,a,o,s]:[s,o,a,i]).map(([e,t])=>c(e,t,l));e.quad(u[0],u[1],u[2],u[3],r.rgb)}}}function xa(e,t,n){return typeof e==`function`?e(t,n):e}var Z=class{out=[];tri(e,t,n,r){let i=t[0]-e[0],a=t[1]-e[1],o=t[2]-e[2],s=n[0]-e[0],c=n[1]-e[1],l=n[2]-e[2],u=a*l-o*c,d=o*s-i*l,f=i*c-a*s,p=Math.hypot(u,d,f)||1;u/=p,d/=p,f/=p;for(let i of[e,t,n])this.out.push(i[0],i[1],i[2],u,d,f,r[0],r[1],r[2],i[2])}quad(e,t,n,r,i){this.tri(e,t,n,i),this.tri(e,n,r,i)}box(e,t,n,r,i,a,o,s=0){let c=Math.sin(s*Math.PI/180),l=Math.cos(s*Math.PI/180),u=(n,r)=>[e+n*l-r*c,t+n*c+r*l],d=r/2,f=i/2,p=[u(-d,-f),u(d,-f),u(d,f),u(-d,f)],m=p.map(([e,t])=>[e,t,n]),h=p.map(([e,t])=>[e,t,n+a]);this.quad(h[0],h[1],h[2],h[3],o);for(let e=0;e<4;e+=1){let t=(e+1)%4;this.quad(m[e],m[t],h[t],h[e],o)}}prism(e,t,n,r,i,a,o,s=12){for(let c=0;c<s;c+=1){let l=c/s*2*Math.PI,u=(c+1)/s*2*Math.PI,d=[e+r*Math.cos(l),t+i*Math.sin(l),n],f=[e+r*Math.cos(u),t+i*Math.sin(u),n],p=[d[0],d[1],n+a],m=[f[0],f[1],n+a];this.quad(d,f,m,p,o),this.tri([e,t,n+a],p,m,o)}}skin(e,t,n=!0,r=!0){for(let n=0;n+1<e.length;n+=1){let r=e[n],i=e[n+1];for(let e=0;e<r.length;e+=1){let n=(e+1)%r.length,a=xa(t,e,r.length);this.quad(r[e],r[n],i[n],i[e],a)}}let i=xa(t,0,1),a=(e,t)=>{let n=0,r=0,a=0;for(let t of e)n+=t[0]/e.length,r+=t[1]/e.length,a+=t[2]/e.length;for(let o=0;o<e.length;o+=1){let s=(o+1)%e.length,c=e[o],l=e[s];this.tri([n,r,a],t?l:c,t?c:l,i)}};n&&e.length>0&&a(e[0],!0),r&&e.length>1&&a(e[e.length-1],!1)}rod(e,t,n,r,i=6,a=!1){let o=t[0]-e[0],s=t[1]-e[1],c=t[2]-e[2],l=Math.hypot(o,s,c);if(l<1e-6)return;let u=[o/l,s/l,c/l],d=Math.abs(u[2])<.9?[0,0,1]:[1,0,0],f=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],p=(e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]})(f(u,d)),m=f(u,p),h=e=>{let t=[];for(let r=0;r<i;r+=1){let a=r/i*2*Math.PI,o=Math.cos(a)*n,s=Math.sin(a)*n;t.push([e[0]+p[0]*o+m[0]*s,e[1]+p[1]*o+m[1]*s,e[2]+p[2]*o+m[2]*s])}return t};this.skin([h(e),h(t)],r,a,a)}tube(e,t,n,r,i,a,o=10){let s=i/2;for(let i=0;i<o;i+=1){let c=i/o*2*Math.PI,l=(i+1)/o*2*Math.PI,u=[e+r*Math.cos(c),t-s,n+r*Math.sin(c)],d=[e+r*Math.cos(l),t-s,n+r*Math.sin(l)],f=[u[0],t+s,u[2]],p=[d[0],t+s,d[2]];this.quad(d,u,f,p,a),this.tri([e,t+s,n],p,f,a),this.tri([e,t-s,n],u,d,a)}}},Sa=[`raider`,`heavyCruiser`,`lightCruiser`,`demsMerchant`,`qship`,`auxRaider`,`destroyer`,`battlecruiser`],Ca=1.25,wa=827150923;function Ta(e,t){if(e.byteLength<12)return null;let n=new DataView(e);if(n.getUint32(0,!0)!==wa)return null;let r=n.getUint32(4,!0),i=n.getUint32(8,!0),a=12+r;if(r%4!=0||a+i*4>e.byteLength)return null;let o;try{o=JSON.parse(new TextDecoder().decode(new Uint8Array(e,12,r)))}catch{return null}if(o.stride!==10||!Array.isArray(o.parts))return null;let s=new Float32Array(e.slice(a,a+i*4)),c=o.parts.find(e=>e.name===`hull`);if(c===void 0||!Ea(c,i))return null;let l=[];for(let e of o.parts)if(e.mountId!==void 0){if(!Ea(e,i)||e.seat===void 0||e.seat.length!==3)return null;l.push({mountId:e.mountId,seat:[e.seat[0],e.seat[1],e.seat[2]],restDeg:e.restDeg??0,verts:s.subarray(e.offset,e.offset+e.count)})}let u={verts:s.subarray(c.offset,c.offset+c.count),hullFloats:c.boundFloats,mounts:l,bootZ:typeof o.bootZ==`number`&&Number.isFinite(o.bootZ)&&o.bootZ>0&&o.bootZ<=3?o.bootZ:Ca};return Da(u,t)?u:null}function Ea(e,t){return Number.isInteger(e.offset)&&Number.isInteger(e.count)&&e.offset>=0&&e.count>0&&e.count%30==0&&e.offset+e.count<=t&&Number.isInteger(e.boundFloats)&&e.boundFloats>=0&&e.boundFloats<=e.count}function Da(e,t){let n=W[t].lengthMetres/2,r=W[t].beamMetres/2;for(let t=0;t<e.hullFloats;t+=10)if(Math.abs(e.verts[t])>r+.01||Math.abs(e.verts[t+1])>n+.01)return!1;for(let t of e.mounts)if(Math.abs(t.seat[0])>r+.01||Math.abs(t.seat[1])>n+.01||t.seat[2]<=0)return!1;return!0}var Oa=new Map,ka=0,Aa=!1;function ja(){return ka}function Ma(e){return Oa.get(e)}async function Na(){Aa||(Aa=!0,await Promise.all(Sa.map(async e=>{try{let t=await fetch(`models/${e}.krm`);if(!t.ok)return;let n=Ta(await t.arrayBuffer(),e);n!==null&&(Oa.set(e,n),ka+=1)}catch{}})))}var Pa=[.295,.305,.315],Fa=[.4,.372,.328],Ia=[.355,.365,.375],La=[.465,.475,.487],Ra=[.125,.125,.135],za=[.375,.385,.398],Q=[.19,.195,.205],Ba=[.3,.302,.31];function Va(e){switch(L[e].deck){case`flightDeck`:return Ba;case`steel`:return Ia;default:return Fa}}function Ha(e,t){let n=L[e],r=W[e].beamMetres/2;if(t<-.5+n.bowFraction){let e=(t+.5)/n.bowFraction;return Math.max(.25,r*Math.sin(e*Math.PI/2)**.82)}if(t>.5-n.sternFraction){let e=(.5-t)/n.sternFraction;return r*(n.sternWidthFraction+(1-n.sternWidthFraction)*Math.sin(e*Math.PI/2)**.8)}return r}function Ua(e,t,n){return e===`carrier`?t*.037:2.6+t*.013+(1.2+t*.008)*(Math.max(0,-n+.05)/.55)**1.5+.3*Math.max(0,n-.2)}function Wa(e,t){let n=W[t].lengthMetres,r=Va(t),i=-2.6,a=[];for(let e=0;e<=48;e+=1){let r=-.5+e/48;a.push({y:-r*n,w:Ha(t,r),fb:Ua(t,n,r)})}for(let t=0;t<48;t+=1){let n=a[t],o=a[t+1];e.quad([o.w,o.y,i],[n.w,n.y,i],[n.w,n.y,n.fb],[o.w,o.y,o.fb],Pa),e.quad([-n.w,n.y,i],[-o.w,o.y,i],[-o.w,o.y,o.fb],[-n.w,n.y,n.fb],Pa),e.quad([-n.w,n.y,n.fb],[-o.w,o.y,o.fb],[o.w,o.y,o.fb],[n.w,n.y,n.fb],r)}let o=a[0],s=a[48];e.quad([o.w,o.y,i],[-o.w,o.y,i],[-o.w,o.y,o.fb],[o.w,o.y,o.fb],Pa),e.quad([-s.w,s.y,i],[s.w,s.y,i],[s.w,s.y,s.fb],[-s.w,s.y,s.fb],Pa)}function Ga(e){return e===`raider`?3:e===`lightCruiser`||e===`heavyCruiser`||e===`battlecruiser`||e===`carrier`?2:1}function Ka(e,t){return t===void 0?e===`raider`||e===`lightCruiser`||e===`heavyCruiser`||e===`battlecruiser`||e===`destroyer`:!1}function qa(e,t,n){let r=L[t],i=W[t],a=i.lengthMetres,o=i.beamMetres,s=e=>-e*a,c=e=>Ua(t,a,e);{let i=s(r.bridge.along),l=c(r.bridge.along),u=r.bridge.lengthFraction*a,d=t===`carrier`?o*.22:o*.52,f=t===`carrier`?o*.5-d/2-.4:0;e.box(f,i,l,d,u,4.5+a*.011,La),e.box(f,i+.6,l+4.5+a*.011,d*.64,u*.6,4.2,La),t===`raider`&&(e.box(0,i+.4,l+12.3,3.8,4.6,4.2,La),n.box(0,i+2.4,l+16.5,.7,.7,4.6,Q))}for(let t of r.blocks??[])e.box(0,s(t.along),c(t.along),t.widthFraction*o,t.lengthFraction*a,3.6+a*.008,La);for(let t of r.funnels){let n=s(t),r=c(t),i=8+a*.02;e.prism(0,n,r,1.6+o*.05,3.4+o*.07,i,La),e.prism(0,n,r+i,1.7+o*.05,3.5+o*.07,1.2,Ra)}for(let t of r.masts??[]){let r=s(t),i=c(t)+4;e.box(0,r,i,.5,.5,9+a*.02,Q),n.box(0,r,i+7+a*.015,6+o*.1,.35,.35,Q)}for(let t of r.kingposts??[]){let n=s(t),r=c(t);e.box(-o*.28,n,r,.7,.7,9,Q),e.box(o*.28,n,r,.7,.7,9,Q),e.box(0,n,r+8.2,o*.62,.4,.4,Q)}if(r.catapult!==void 0){let t=s(r.catapult),n=c(r.catapult);e.box(0,t,n,o*.62,2.1,.8,Q),e.box(0,t,n+1.5,1.1,7.6,1.1,[.7,.715,.735]),e.box(0,t+.5,n+2.5,8.8,1.6,.26,[.7,.715,.735])}for(let t of r.tubeMounts??[]){let n=(t.athwart??0)*(o/2);e.box(n,s(t.along),c(t.along),2.1,6,1.4,Q)}}function Ja(e,t,n,r){let i=W[n].lengthMetres>200;if(!r){e.box(0,0,0,3,2.5,2,za),t.box(0,3.2,1.15,.3,5.2,.3,za);return}let a=i||n===`raider`?1:n===`destroyer`?.5:.66;e.prism(0,0,0,4.8*a,4.8*a,1.2,za,12),e.box(0,0,1.2,8.2*a,10.2*a,2.9*a,za);let o=Ga(n),s=1.9*a,c=(i||n===`raider`?11.4:8.2)*a;for(let e=0;e<o;e+=1){let n=(e-(o-1)/2)*s;t.box(n,c*.75,1.2+1.3*a,.4,c,.4,za)}}var Ya=new Map;function Xa(e){let t=Ma(e);if(t!==void 0)return t.mounts;let n=Ya.get(e);if(n!==void 0)return n;let r=W[e],i=r.lengthMetres,a=r.beamMetres,o=L[e].turrets.map(t=>{let n=new Z,r=new Z;Ja(n,r,e,Ka(e,t.athwart));let o=new Float32Array(n.out.length+r.out.length);return o.set(n.out,0),o.set(r.out,n.out.length),{mountId:t.mountId,seat:[(t.athwart??0)*(a/2),-t.along*i,Ua(e,i,t.along)],restDeg:t.restDeg,verts:o}});return Ya.set(e,o),o}function Za(e){return Ma(e)?.bootZ??1.25}function Qa(e,t=!0){let n=L[e].ensign,r=n===void 0?void 0:ma(n.set)?.ensign;if(!t||n===void 0||r===void 0)return new Float32Array;let i=new Z,a=W[e].lengthMetres;return ba(i,r,[0,-n.along*a,n.headMetres],n.hoistMetres),new Float32Array(i.out)}var $a=new Map,eo=new Map;function to(e,t=!0){let n=Ma(e);if(n!==void 0){let r=Qa(e,t);if(r.length===0)return{verts:n.verts,hullFloats:n.hullFloats};let i=ja(),a=`${e}:${+!!t}`,o=eo.get(a);if(o!==void 0&&o.gen===i)return o.mesh;let s=new Float32Array(n.verts.length+r.length);s.set(n.verts,0),s.set(r,n.verts.length);let c={verts:s,hullFloats:n.hullFloats};return eo.set(a,{gen:i,mesh:c}),c}let r=$a.get(e);if(r!==void 0)return r;let i=new Z,a=new Z;Wa(i,e),qa(i,e,a);let o=i.out.length,s=new Float32Array(o+a.out.length);s.set(i.out,0),s.set(a.out,o);let c={verts:s,hullFloats:o};return $a.set(e,c),c}var no=1,ro=.35,io=.9,ao=1.5,oo=6,so=50,co=[.07,.065,.062],lo=[.022,.02,.02];function uo(e){let t=[];for(let n=0;n+30<=e.length;n+=30){let r=0,i=0,a=0;for(let t=0;t<3;t+=1)r+=e[n+t*10],i+=e[n+t*10+1],a+=e[n+t*10+2];t.push({at:n,cx:r/3,cy:i/3,cz:a/3})}return t}function fo(e,t){let n=e.filter(e=>e.cy>t-no).sort((e,t)=>e.cx-t.cx),r=[],i=0,a=0,o=!1;for(let e of n){if(o&&e.cx-a<=io){a=e.cx;continue}o&&r.push({centreX:(i+a)/2,halfWidth:(a-i)/2}),i=e.cx,a=e.cx,o=!0}return o&&r.push({centreX:(i+a)/2,halfWidth:(a-i)/2}),r}function po(e,t){return Math.abs(t-e.centreX)<=e.halfWidth+ro}function mo(e){let t=uo(e),n=-1/0;for(let t=0;t<e.length;t+=10){let r=e[t+1];r>n&&(n=r)}let r=fo(t,n),i=-1/0;for(let e of t)!r.some(t=>po(t,e.cx))&&e.cy>i&&(i=e.cy);if(!Number.isFinite(i))return{houseAt:t.map(e=>e.at),barrels:[],roofZ:0};let a=[],o=r.map(()=>({at:[],minY:1/0,sumZ:0,n:0})),s=-1/0;for(let n of t){let t=r.findIndex(e=>po(e,n.cx)),c=t<0?void 0:o[t];if(c===void 0||n.cy<=i){a.push(n.at),n.cz>s&&(s=n.cz);continue}c.at.push(n.at);for(let t=0;t<3;t+=1){let r=e[n.at+t*10+1];r<c.minY&&(c.minY=r)}c.sumZ+=n.cz,c.n+=1}return{houseAt:a,barrels:o.filter(e=>e.at.length>0&&n-e.minY>=ao).map(e=>({at:e.at,pivotY:e.minY,pivotZ:e.sumZ/e.n,lengthMetres:n-e.minY})),roofZ:Number.isFinite(s)?s:0}}function ho(e){let t=Math.asin(Math.max(0,Math.min(1,e.pivotZ/e.lengthMetres)));return Math.max(oo*Math.PI/180,Math.min(so*Math.PI/180,t))}function go(e,t,n){for(let r=0;r<30;r+=1)n.push(e[t+r])}function _o(e,t,n){let r=ho(t),i=Math.cos(r),a=Math.sin(r);for(let r of t.at)for(let o=0;o<3;o+=1){let s=r+o*10,c=e[s+1]-t.pivotY,l=e[s+2]-t.pivotZ,u=t.pivotY+c*i+l*a,d=t.pivotZ-c*a+l*i,f=e[s+4],p=e[s+5];n.push(e[s],u,d,e[s+3],f*i+p*a,-f*a+p*i,e[s+6],e[s+7],e[s+8],d)}}function vo(e,t,n){let r=I(n),i=.55+.5*j(r,3),a=(j(r,1)-.5)*1.6,o=(j(r,2)-.5)*2.2,s=t.roofZ+.03,c=[];for(let e=0;e<9;e+=1){let t=e/9*Math.PI*2,n=i*(.62+.62*j(r,10+e));c.push([a+Math.cos(t)*n,o+Math.sin(t)*n])}for(let t=0;t<9;t+=1){let n=c[t],r=c[(t+1)%9];e.tri([a,o,s],[n[0],n[1],s],[r[0],r[1],s],co),e.tri([a,o,s-i*.9],[r[0],r[1],s],[n[0],n[1],s],lo)}}var yo=new WeakMap;function bo(e,t){let n=yo.get(e);n===void 0&&(n=new Map,yo.set(e,n));let r=n.get(t);if(r!==void 0)return r;let i=mo(e);if(i.barrels.length===0)return n.set(t,e),e;let a=Kn(t,i.barrels.length),o=[];for(let t of i.houseAt)go(e,t,o);i.barrels.forEach((t,n)=>{if(n===a){_o(e,t,o);return}for(let n of t.at)go(e,n,o)});let s=new Z;vo(s,i,t);let c=new Float32Array(o.length+s.out.length);return c.set(o,0),c.set(s.out,o.length),n.set(t,c),c}var xo=.5;function So(e,t,n,r){let i=1/Math.tan(e/2),a=new Float32Array(16);return a[0]=i/t,a[5]=i,a[10]=(r+n)/(n-r),a[11]=-1,a[14]=2*r*n/(n-r),a}function Co(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2]]}function wo(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function To(e){let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]}function Eo(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Do(e,t,n){let r=To(Co(e,t)),i=To(wo(n,r)),a=wo(r,i),o=new Float32Array(16);return o[0]=i[0],o[1]=a[0],o[2]=r[0],o[4]=i[1],o[5]=a[1],o[6]=r[1],o[8]=i[2],o[9]=a[2],o[10]=r[2],o[12]=-Eo(i,e),o[13]=-Eo(a,e),o[14]=-Eo(r,e),o[15]=1,o}function Oo(e,t){let n=new Float32Array(16);for(let r=0;r<4;r+=1)for(let i=0;i<4;i+=1){let a=0;for(let n=0;n<4;n+=1)a+=e[n*4+i]*t[r*4+n];n[r*4+i]=a}return n}function ko(e,t,n,r=.06){let i=[e.groundFromScreen(0,0),e.groundFromScreen(t,0),e.groundFromScreen(0,n),e.groundFromScreen(t,n)],a=1/0,o=-1/0,s=1/0,c=-1/0;for(let e of i)a=Math.min(a,e.x),o=Math.max(o,e.x),s=Math.min(s,e.y),c=Math.max(c,e.y);return{centreX:(a+o)/2,centreY:(s+c)/2,spanMetres:Math.max(o-a,c-s)*(1+r)}}function Ao(e){return Math.min(58,Math.max(xo,e))}function jo(e){let t=Ao(e.pitchDeg)*Math.PI/180,n=38*Math.PI/180,r=e.heightPx/2/Math.tan(n/2),i=r*e.zoomMetresPerPx,a=[e.targetX,e.targetY-Math.sin(t)*i,Math.cos(t)*i],o=[e.targetX,e.targetY,0],s=Do(a,o,[0,0,1]),c=Oo(So(n,e.widthPx/Math.max(e.heightPx,1),Math.max(i*.05,1),i*6+12e3),s),l=Math.max(i*.05,1),u=(e,t,n)=>c[3]*e+c[7]*t+c[11]*n+c[15],d=To(Co(a,o)),f=To(wo([0,0,1],d)),p=wo(d,f);return{eye:a,target:[e.targetX,e.targetY],viewProjection:c,metresPerPxAtTarget:e.zoomMetresPerPx,project(t,n,r=0){let i=c[0]*t+c[4]*n+c[8]*r+c[12],a=c[1]*t+c[5]*n+c[9]*r+c[13],o=u(t,n,r),s=o===0?1e-6:o;return{x:e.widthPx/2+i/s*e.widthPx/2,y:e.heightPx/2-a/s*e.heightPx/2}},inFrontOfEye(e,t,n=0){return u(e,t,n)>l},groundFromScreen(t,n){let i=t-e.widthPx/2,o=e.heightPx/2-n,s=To([f[0]*i+p[0]*o-d[0]*r,f[1]*i+p[1]*o-d[1]*r,f[2]*i+p[2]*o-d[2]*r]),c=Math.min(s[2],-1e-4),l=-a[2]/c;return{x:a[0]+s[0]*l,y:a[1]+s[1]*l}}}}function Mo(e,t,n,r,i){let a=t*Math.PI/180,o=Math.cos(a),s=Math.sin(a),c=Math.cos(r),l=Math.sin(r),u=Math.cos(i),d=Math.sin(i),f=[o,-s,0,s,o,0,0,0,1],p=[1,0,0,0,c,l,0,-l,c],m=[u,0,-d,0,1,0,d,0,u],h=(e,t)=>{let n=Array(9).fill(0);for(let r=0;r<3;r+=1)for(let i=0;i<3;i+=1){let a=0;for(let n=0;n<3;n+=1)a+=e[n*3+i]*t[r*3+n];n[r*3+i]=a}return n},g=h(f,h(p,m)),_=new Float32Array(16);return _[0]=g[0],_[1]=g[1],_[2]=g[2],_[4]=g[3],_[5]=g[4],_[6]=g[5],_[8]=g[6],_[9]=g[7],_[10]=g[8],_[12]=e.x,_[13]=e.y,_[14]=n,_[15]=1,{matrix:_,normal:new Float32Array(g)}}function No(e,t,n){let r=Math.max(t[2]??1,.25),i=(t[0]??0)/r,a=(t[1]??0)/r,o=new Float32Array(16);for(let t=0;t<4;t+=1){let n=e[t*4+2];o[t*4]=e[t*4]-i*n,o[t*4+1]=e[t*4+1]-a*n,o[t*4+2]=0,o[t*4+3]=e[t*4+3]}return o[14]=n,o}function Po(e){let t=e.eye[0]-e.target[0],n=e.eye[1]-e.target[1],r=e.eye[2],i=Math.hypot(t,n,r)||1,a=[t/i,n/i,r/i],o=Math.hypot(a[1],a[0])||1,s=[-a[1]/o,a[0]/o,0];return{right:s,up:[a[1]*s[2]-a[2]*s[1],a[2]*s[0]-a[0]*s[2],a[0]*s[1]-a[1]*s[0]]}}function Fo(e,t,n){let r=n*Math.PI/180,i=Math.cos(r),a=Math.sin(r),o=[i,a,0,-a,i,0,0,0,1],s=new Float32Array(16),c=(e,t,n)=>e[n*4+t];for(let t=0;t<3;t+=1)for(let n=0;n<3;n+=1){let r=0;for(let i=0;i<3;i+=1)r+=c(e,n,i)*o[t*3+i];s[t*4+n]=r}for(let n=0;n<3;n+=1){let r=c(e,n,3);for(let i=0;i<3;i+=1)r+=c(e,n,i)*t[i];s[12+n]=r}s[15]=1;let l=new Float32Array(9);for(let e=0;e<3;e+=1)for(let t=0;t<3;t+=1)l[e*3+t]=s[e*4+t];return{matrix:s,normal:l}}var Io=Math.PI/180;function Lo(e,t,n){let{gl:r}=e;for(let i of t){let t=e.posOf(i),a=e.headingOf(i),o=a*Io,s=[Math.sin(o),Math.cos(o)],c=[Math.cos(o),-Math.sin(o)],l=(n,r)=>e.seaAt(t.x+n,t.y+r),u=Math.min(e.sinkOf(i),1.2),d=Mo(t,a,.55*l(0,0)-.15-3.2*u,Math.max(-.038,Math.min(.038,.6*Math.atan2(l(s[0]*70,s[1]*70)-l(-s[0]*70,-s[1]*70),140)))+.075*u+Xn(i.flooding)*Io,Math.max(-.05,Math.min(.05,.8*Math.atan2(l(c[0]*9,c[1]*9)-l(-c[0]*9,-c[1]*9),18)))+.2*u+Yn(i.flooding,i.id)*Io);r.uniformMatrix4fv(n(`uModel`),!1,d.matrix),r.uniformMatrix3fv(n(`uNM`),!1,d.normal),r.uniform1f(n(`uBootZ`),Za(i.cls)),r.uniform1f(n(`uWound`),0);let f=e.hullVao(i);if(r.bindVertexArray(f.vao),r.drawArrays(r.TRIANGLES,0,f.vertexCount),r.uniform1f(n(`uBootZ`),-1e6),!(e.showMounts!==void 0&&!e.showMounts(i))){for(let t of Xa(i.cls)){let a=i.subsystems[t.mountId],o=i.mounts.find(e=>e.mountId===t.mountId)?.trainDeg??t.restDeg,s=Fo(d.matrix,t.seat,-o);r.uniformMatrix4fv(n(`uModel`),!1,s.matrix),r.uniformMatrix3fv(n(`uNM`),!1,s.normal),r.uniform1f(n(`uWound`),Gn(a));let c=e.mountVao(i.cls,t,a===`out`);r.bindVertexArray(c.vao),r.drawArrays(r.TRIANGLES,0,c.vertexCount)}r.uniform1f(n(`uWound`),0)}}}function Ro(e,t){return t?bo(e.verts,e.mountId):e.verts}var zo=`#version 300 es
precision highp float;
layout(location=0) in vec2 aUV;
uniform mat4 uVP;
uniform vec3 uPos;          // puff centre, world metres
uniform float uR;           // puff radius, metres
uniform vec3 uRight; uniform vec3 uUp;   // camera basis, world space
out vec2 vUV;
void main(){
  vUV = aUV;
  vec3 w = uPos + uRight*(aUV.x - 0.5)*2.0*uR + uUp*(aUV.y - 0.5)*2.0*uR;
  gl_Position = uVP * vec4(w, 1.0);
}`,Bo=`#version 300 es
precision highp float;
in vec2 vUV; out vec4 o;
uniform vec3 uCol;          // smoke tone, already lit for the phase
uniform float uA;           // peak alpha
uniform float uSeed;
uniform float uPh;          // puff phase 0..1 up the column
uniform float uEmber;       // warm base light, 0..1, wall-clock flicker
float h21(vec2 p){ p = fract(p*vec2(234.34,435.345)); p += dot(p,p+34.23); return fract(p.x*p.y); }
float vnoise(vec2 p){
  vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y);
}
void main(){
  vec2 c = vUV - 0.5;
  float d = length(c) * 2.0;
  // billowing lobes: two octaves of erosion, keyed per puff
  float n = 0.6*vnoise(vUV*3.4 + uSeed*7.0) + 0.4*vnoise(vUV*7.8 + uSeed*13.0);
  float edge = d + (n - 0.5)*0.75;
  float a = smoothstep(1.0, 0.35, edge) * uA;
  // the boil: density varies inside the lobe, never flat
  a *= 0.65 + 0.5*vnoise(vUV*5.2 + uSeed*3.0 + uPh*2.0);
  vec3 col = uCol * (0.82 + 0.36*smoothstep(0.6, 1.0, vUV.y));
  // fresh smoke near the flame carries its light
  col = mix(col, vec3(0.95, 0.45, 0.16), uEmber * smoothstep(0.55, 0.0, vUV.y));
  o = vec4(col, a);
}`,Vo=`#version 300 es
precision highp float;
layout(location=0) in vec2 aUV;
uniform mat4 uVP; uniform vec3 uCam;
uniform vec3 uPos;          // tongue seat, world; z is the deck
uniform float uW; uniform float uH;
out vec2 vUV;
void main(){
  vUV = aUV;
  vec2 toCam = normalize(uCam.xy - uPos.xy);
  vec2 rightv = vec2(-toCam.y, toCam.x);
  vec2 xy = uPos.xy + rightv * (aUV.x - 0.5) * uW;
  gl_Position = uVP * vec4(xy, uPos.z + aUV.y * uH, 1.0);
}`,Ho=`#version 300 es
precision highp float;
in vec2 vUV; out vec4 o;
uniform float uA; uniform float uSeed; uniform float uFlick;
float h21(vec2 p){ p = fract(p*vec2(234.34,435.345)); p += dot(p,p+34.23); return fract(p.x*p.y); }
float vnoise(vec2 p){
  vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y);
}
void main(){
  float u = vUV.x, v = vUV.y;
  // a licking tongue: narrow, waving with the flicker, torn at the tip
  float sway = (vnoise(vec2(uSeed*7.0, v*2.5 - uFlick*4.0)) - 0.5) * 0.5 * v;
  float w = mix(0.34, 0.06, smoothstep(0.05, 0.95, v));
  float n = vnoise(vec2(u*7.0 + uSeed, v*5.0 - uFlick*5.0));
  float d = abs(u - 0.5 + sway) + (n - 0.5)*0.28*v;
  float body = smoothstep(w, w*0.2, d);
  // the tip tears off into licks; the base sinks into the glow bed with
  // its own ragged edge — never a straight line
  body *= 1.0 - smoothstep(0.55, 1.0, v + (n - 0.5)*0.55);
  body *= smoothstep(0.0, 0.10 + 0.12*h21(vec2(uSeed, 3.0)), v + (vnoise(vec2(u*9.0 + uSeed*3.0, 1.0)) - 0.5)*0.16);
  float a = body * uA * (0.65 + 0.35*uFlick);
  float core = smoothstep(0.5, 0.0, v) * smoothstep(w, 0.0, d);
  vec3 col = mix(mix(vec3(1.0, 0.86, 0.5), vec3(1.0, 0.55, 0.16), v), vec3(1.0, 0.97, 0.8), core*0.7);
  o = vec4(col, a);
}`,Uo=16,Wo=7,Go=80,Ko={fore:.3,mid:.02,aft:-.3};function qo(e){let t=J(e,zo,Bo),n=J(e,Vo,Ho),r=ca(e);return{draw(i,a,o,s,c,l,u,d){let f=i.filter(e=>e.fires.length>0);if(f.length===0)return;let p=s.eye[0]-s.target[0],m=s.eye[1]-s.target[1],h=s.eye[2],g=Math.hypot(p,m,h)||1,_=[p/g,m/g,h/g],v=Math.hypot(_[1],_[0])||1,y=[-_[1]/v,_[0]/v,0],b=[_[1]*y[2]-_[2]*y[1],_[2]*y[0]-_[0]*y[2],_[0]*y[1]-_[1]*y[0]],ee=[...f].sort((e,t)=>{let n=a(e),r=a(t);return Math.hypot(r.x-s.eye[0],r.y-s.eye[1])-Math.hypot(n.x-s.eye[0],n.y-s.eye[1])}),x=[],S=[],C=[];for(let e of ee){let t=a(e),n=o(e)*Math.PI/180,r=[Math.sin(n),Math.cos(n)],i=W[e.cls].lengthMetres;e.fires.forEach((n,a)=>{let o=(Ko[n.zone]??0)*i,s={x:t.x+r[0]*o,y:t.y+r[1]*o},f=I(e.id)+a*977|0,p=n.intensity,m=.62-.55*Jo(.35,.85,p),h=45+250*p,g=z(Uo);for(let e=0;e<g;e+=1){let t=j(f,e*3),n=(t+c/Go)%1,r=n*h,i=(j(f,e*3+1)-.5)*(5+.1*r),o=(j(f,e*3+2)-.5)*(5+.1*r),g=.3*r+40*n*n,_=.5+.5*Math.sin(l*.011+e*2.7+f);x.push({pos:{x:s.x+u[0]*g+i,y:s.y+u[1]*g+o},z:4+r,r:(10+.3*r+14*p)*(.8+.4*j(f,e*3+7)),alpha:p*.72*(1-n)**.7*(.75+.25*t),col:[m*d[0],m*d[1],m*d[2]],seed:t*9+a,ph:n,ember:Jo(25,0,r)*p*_*.8})}let _=z(Wo);for(let e=0;e<_;e+=1){let t=j(f,100+e*3),n=(25+300*t)*(.4+.6*p),r=(j(f,101+e*3)-.5)*(10+.12*n),i=m+(.74-m)*.65;x.push({pos:{x:s.x+u[0]*n-u[1]*r,y:s.y+u[1]*n+u[0]*r},z:6+16*t,r:17+.12*n,alpha:.3*p*(1-t*.75),col:[i*d[0],i*d[1],i*d[2]],seed:t*9+a+.5,ph:t,ember:0})}let v=[r[1],-r[0]],y=6+Math.round(p*8);for(let e=0;e<y;e+=1){let t=(j(f,200+e*4)-.5)*2*(5+9*p),n=(j(f,201+e*4)-.5)*2*(2.5+3.5*p),i=.5+.5*Math.sin(l*(.009+.004*j(f,202+e*4))+e*2.1+f);S.push({pos:{x:s.x+r[0]*t+v[0]*n,y:s.y+r[1]*t+v[1]*n},z:5.6+(j(f,203+e*4)-.5)*1.8,r:(1.6+2.6*j(f,204+e*4))*(.8+.5*p),alpha:.75*p,col:[(3.5+8*p)*(.55+.7*j(f,205+e*4))*(.85+.35*i),0,0],seed:e*3.3+f%7,ph:i,ember:0})}for(let e=0;e<3;e+=1){let t=.6+.4*Math.sin(l*.007+e*2.9+f);C.push({pos:{x:s.x+(j(f,300+e)-.5)*(6+8*p),y:s.y+(j(f,301+e)-.5)*(5+5*p)},z:5.4,r:(4+7*p)*(.8+.4*j(f,302+e)),alpha:.3*p*t,col:[1,.52,.2],seed:e*1.7+f%5,ph:t,ember:.9})}})}e.enable(e.BLEND),e.depthMask(!1),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.useProgram(t.program),e.bindVertexArray(r),e.uniformMatrix4fv(t.uniform(`uVP`),!1,s.viewProjection),e.uniform3f(t.uniform(`uRight`),y[0],y[1],y[2]),e.uniform3f(t.uniform(`uUp`),b[0],b[1],b[2]);for(let n of x)e.uniform3f(t.uniform(`uPos`),n.pos.x,n.pos.y,n.z),e.uniform1f(t.uniform(`uR`),n.r),e.uniform3f(t.uniform(`uCol`),n.col[0],n.col[1],n.col[2]),e.uniform1f(t.uniform(`uA`),n.alpha),e.uniform1f(t.uniform(`uSeed`),n.seed),e.uniform1f(t.uniform(`uPh`),n.ph),e.uniform1f(t.uniform(`uEmber`),n.ember),e.drawArrays(e.TRIANGLES,0,6);e.blendFunc(e.SRC_ALPHA,e.ONE),e.useProgram(t.program),e.uniform3f(t.uniform(`uRight`),1,0,0),e.uniform3f(t.uniform(`uUp`),0,1,0);for(let n of C)e.uniform3f(t.uniform(`uPos`),n.pos.x,n.pos.y,n.z),e.uniform1f(t.uniform(`uR`),n.r),e.uniform3f(t.uniform(`uCol`),n.col[0],n.col[1],n.col[2]),e.uniform1f(t.uniform(`uA`),n.alpha),e.uniform1f(t.uniform(`uSeed`),n.seed),e.uniform1f(t.uniform(`uPh`),n.ph),e.uniform1f(t.uniform(`uEmber`),n.ember),e.drawArrays(e.TRIANGLES,0,6);e.useProgram(n.program),e.uniformMatrix4fv(n.uniform(`uVP`),!1,s.viewProjection),e.uniform3f(n.uniform(`uCam`),s.eye[0],s.eye[1],s.eye[2]);for(let t of S)e.uniform3f(n.uniform(`uPos`),t.pos.x,t.pos.y,t.z),e.uniform1f(n.uniform(`uW`),t.r*2),e.uniform1f(n.uniform(`uH`),t.col[0]),e.uniform1f(n.uniform(`uA`),t.alpha),e.uniform1f(n.uniform(`uSeed`),t.seed),e.uniform1f(n.uniform(`uFlick`),t.ph),e.drawArrays(e.TRIANGLES,0,6);e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null)}}}function Jo(e,t,n){let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)}var Yo=8,Xo=6;function Zo(e,t,n,r){let i=(n+r)/2,a=(n-r)/2,o=2/3.1,s=[];for(let n=0;n<Yo;n+=1){let r=n/Yo*2*Math.PI,c=Math.cos(r),l=Math.sin(r);s.push([Math.sign(c)*Math.abs(c)**o*t,e,i+Math.sign(l)*Math.abs(l)**o*a])}return s}function Qo(e,t){let n=[];for(let r=0;r<Xo;r+=1){let i=r/Xo*2*Math.PI,a=t.le-t.chord*(1-Math.cos(i))/2,o=Math.sin(i)*t.thick/2;n.push(e?[t.rise-o,a,t.at]:[t.at,a,t.rise+o])}return n}function $o(e,t,n,r,i){e.skin(n.map(e=>Qo(t,e)),(e,t)=>e<t/2?r:i)}function es(e,t,n,r){let{semiSpan:i,leY:a,chord:o,z:s,dihedralRise:c,shape:l}=t,u=[];for(let e=-1;e<=1;e+=2){let t=l.map(([t,n,r,l])=>({at:e*t*i,le:a-o*l,chord:o*n,thick:o*.115*r,rise:s+c*t}));u.push(...e===-1?t.reverse():t.slice(1))}$o(e,!1,u,n,r)}function ts(e,t,n,r,i,a,o,s=6){let c=e=>{let t=[];for(let a=0;a<s;a+=1){let o=a/s*2*Math.PI;t.push([e,n+Math.cos(o)*i,r+Math.sin(o)*i])}return t};e.skin([c(t-a/2),c(t+a/2)],o,!1,!1)}var ns=[.317,.328,.343],rs=[.166,.174,.186],is=[[.5,.006],[.4,.038],[-.24,.0435],[-.4,.031],[-.482,.0155]],as=6;function os(e,t,n,r,i){let a=(e,a)=>{let o=[];for(let s=0;s<as;s+=1){let c=s/as*2*Math.PI;o.push([n+Math.cos(c)*a*t,r+e*t,i+Math.sin(c)*a*t])}return o};e.skin(is.map(([e,t])=>a(e,t)),ns);let o=t*.068,s=r-t*.43,c=t*.058,l=t*.006;for(let t of[!1,!0]){let r=e=>[[-c,-l],[c,-l],[c,l],[-c,l]].map(([r,a])=>t?[n+a,s+e,i+r]:[n+r,s+e,i+a]);e.skin(t?[r(-o),r(o)]:[r(o),r(-o)],rs,!1,!1)}}var ss=[.243,.283,.256],cs=[.281,.305,.318],ls=[.6,.632,.575],us=[.198,.21,.222],$=[.166,.174,.186],ds=[.082,.09,.1],fs=[[0,1,1,0],[.88,.93,.88,.025],[1,.34,.44,.2]];function ps(e){$o(e,!0,[{at:.16,le:-3.45,chord:1.97,thick:.2,rise:0},{at:1.24,le:-3.63,chord:1.78,thick:.14,rise:0},{at:1.6,le:-4.28,chord:.86,thick:.07,rise:0}],cs,cs)}function ms(e){e.skin([[4.3,.54,.6,-.58],[1.35,.53,.8,-.7],[-1.15,.49,.74,-.66],[-3.4,.31,.54,-.42],[-5.2,.11,.35,-.14]].map(([e,t,n,r])=>Zo(e,t,n,r)),(e,t)=>e<t/2?cs:ls,!1,!1)}function hs(e){e.skin([Zo(5.02,.63,.63,-.63),Zo(4.56,.66,.66,-.66),Zo(4.3,.58,.6,-.6)],us,!0,!1);for(let t=0;t<3;t+=1){let n=t/3*2*Math.PI,r=Math.cos(n),i=Math.sin(n),a=(e,t,n)=>[[t/2,-n/2],[t/2,n/2],[-t/2,n/2],[-t/2,-n/2]].map(([t,n])=>{let a=.5,o=t*Math.cos(a)-n*Math.sin(a),s=t*Math.sin(a)+n*Math.cos(a);return[r*e-i*s,5.28+o,i*e+r*s]});e.skin([a(.2,.28,.07),a(1.56,.16,.04)],us,!1,!1)}}function gs(e,t,n){for(let r of[-1,1]){e.rod([r*.5,2.9,.68],[r*.74,2.68,t],.06,$,4),e.rod([r*.5,1.5,.76],[r*.74,1.72,t],.06,$,4);let i=3.55,a=n+.26;e.rod([r*i,1.62,a],[r*i,2.44,t],.06,$,4),e.rod([r*i,.36,a],[r*i,1.18,t],.06,$,4),e.rod([r*.3,-3.55,-.5],[r*1.32,-4.02,-.16],.05,$,4)}}function _s(e){for(let t of[-1,1]){let n=[t*1.44,1.74,-1.74];e.rod([t*.46,2.24,-.6],n,.075,$,4),e.rod([t*.46,1.16,-.64],n,.075,$,4),ts(e,t*1.43,1.74,-1.74,.4,.26,$,8)}e.rod([0,-4.62,-.28],[0,-4.72,-.62],.07,$,4),ts(e,0,-4.72,-.66,.19,.14,$,6)}function vs(e,t,n,r,i){let a=ma(B.swordfish.insignia);if(a!==void 0){if(a.roundel!==void 0){let o=t+r*.115*.47;for(let t of[-1,1])ga(e,a.roundel,t*i*.58,n-r/2,o,r*.36)}a.finFlash!==void 0&&_a(e,a.finFlash,.105,-4.32,-5.16,.42,1.2)}}function ys(e,t){let n=1.3,r=-.66,i=6.935,a=2.03;ms(e),hs(e);let o=2.02,s={semiSpan:i,chord:a,shape:fs};es(e,{...s,leY:o,z:r,dihedralRise:.34},ss,ls),es(e,{...s,leY:o,z:n,dihedralRise:0},ss,ls),es(e,{semiSpan:2,chord:1.24,shape:fs,leY:-3.62,z:-.18,dihedralRise:.06},ss,ls),ps(e),gs(e,n,r),_s(e),vs(e,n,o,a,i),e.box(0,-.45,.3,.68,3.9,.56,ds),t&&os(e,5.1,0,.36,-1.46)}var bs={swordfish:ys};function xs(e,t){let n=new Float32Array(e.out);for(let e=0;e<n.length;e+=10)n[e]=n[e]*t,n[e+1]=n[e+1]*t,n[e+2]=n[e+2]*t,n[e+9]=n[e+9]*t;return n}var Ss=new Map;function Cs(e){let t=Math.round(e*100),n=Ss.get(t);if(n!==void 0)return n;let r=new Z;os(r,e,0,0,0);let i={verts:xs(r,2)};return Ss.set(t,i),i}var ws=new Map;function Ts(e,t){let n=`${e}:${t?`armed`:`clean`}`,r=ws.get(n);if(r!==void 0)return r;let i=new Z;bs[e](i,t);let a={verts:xs(i,2)};return ws.set(n,a),a}var Es=.514444,Ds=60,Os=55,ks=95;function As(e){return e===`withdrawing`?ks:Os}var js=.05,Ms=.7,Ns=.45,Ps=[0,0,1],Fs=.46;function Is(e){if(e===0)return{back:0,out:0};let t=Math.ceil(e/2),n=e%2==1?-1:1;return{back:t*Ds,out:n*t*Ds}}function Ls(e,t){let n=t.ships.find(e=>e.side===`raider`);if(n===void 0||e.phase!==`approach`)return 0;let r=(Math.atan2(n.motion.pos.x-e.pos.x,n.motion.pos.y-e.pos.y)*180/Math.PI-e.headingDeg+540)%360-180;return Math.max(-.7,Math.min(Ms,r*js))}function Rs(e){let t=new Map,n=(n,r)=>{let i=t.get(n);if(i!==void 0)return i;let a=sa(e,r());return t.set(n,a),a},r=(e,t)=>n(`${e}:${t?`armed`:`clean`}`,()=>Ts(e,t).verts),i=e=>n(`fish:${e.toFixed(2)}`,()=>Cs(e).verts);return{draw(t,n,a,o,s,c){let l=t.tick+Math.min(1,Math.max(0,a)),u=t.torpedoes.map(e=>({fish:e,drop:Mi(e,l,o)})).filter(e=>e.drop!==null);if(t.flights.length===0&&u.length===0)return;let d=e=>n.uniform(e);e.uniform1f(d(`uBootZ`),-1e6);let f=Math.min(1,Math.max(0,a)),p=[];for(let e of t.flights){let n=B[e.aircraft].speedKnots*Es*o*f,i=e.headingDeg*Math.PI/180,a=Math.sin(i),s=Math.cos(i),c={x:e.pos.x+a*n,y:e.pos.y+s*n},l=e.phase===`approach`,u=l?Os:ks,d=Ls(e,t);for(let t=0;t<e.count;t+=1){let n=Is(t),i=Mo({x:c.x-a*n.back-s*n.out,y:c.y-s*n.back+a*n.out},e.headingDeg,u,0,d);p.push({matrix:i.matrix,normal:i.normal,vao:r(e.aircraft,l)})}}for(let{fish:e,drop:t}of u){if(t===null)continue;let n=Mo({x:t.x,y:t.y},e.headingDeg,t.z,-t.pitchR,0);p.push({matrix:n.matrix,normal:n.normal,vao:i(Fi(e.type))})}e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1);let m=(t,n)=>{e.uniform1f(d(`uShadow`),t);for(let t of p)e.uniformMatrix4fv(d(`uModel`),!1,No(t.matrix,n,Ns)),e.uniformMatrix3fv(d(`uNM`),!1,t.normal),e.bindVertexArray(t.vao.vao),e.drawArrays(e.TRIANGLES,0,t.vao.vertexCount)};m(Fs,Ps),m(.3+.32*Math.min(1,Math.max(0,c)),s),e.depthMask(!0),e.disable(e.BLEND),e.uniform1f(d(`uShadow`),0);for(let t of p)e.uniformMatrix4fv(d(`uModel`),!1,t.matrix),e.uniformMatrix3fv(d(`uNM`),!1,t.normal),e.bindVertexArray(t.vao.vao),e.drawArrays(e.TRIANGLES,0,t.vao.vertexCount);e.bindVertexArray(null)}}}var zs=`#version 300 es
precision highp float;
layout(location=0) in vec2 aUV;
// tail xyz + half-width (metres)
layout(location=1) in vec4 aTailW;
// head xyz + alpha
layout(location=2) in vec4 aHeadA;
// rgb + softness (0 a hard round, 1 a soft bloom)
layout(location=3) in vec4 aColSoft;
uniform mat4 uVP;
uniform vec3 uEye;
out vec2 vUV; out vec4 vCol; out float vSoft; out float vLen;
void main(){
  vec3 tail = aTailW.xyz, head = aHeadA.xyz;
  float w = aTailW.w;
  vec3 axis = head - tail;
  float len = length(axis);
  // A segment shorter than it is wide is a disc: pick any axis across
  // the view so the quad still has somewhere to point.
  vec3 view = normalize(uEye - mix(tail, head, 0.5));
  vec3 dir = len > 1e-4 ? axis / len : normalize(cross(view, vec3(0.0,0.0,1.0)) + vec3(1e-5));
  vec3 side = normalize(cross(dir, view));
  // Grow the quad half a width past each end so a round's head is round
  // and a streak does not stop square.
  vec3 mid = mix(tail, head, aUV.y);
  vec3 world = mid + dir * ((aUV.y - 0.5) * 2.0 * w) + side * ((aUV.x - 0.5) * 2.0 * w);
  vUV = aUV; vCol = vec4(aColSoft.rgb, aHeadA.w); vSoft = aColSoft.w;
  vLen = len / max(w, 1e-4);
  gl_Position = uVP * vec4(world, 1.0);
}`,Bs=`#version 300 es
precision highp float;
in vec2 vUV; in vec4 vCol; in float vSoft; in float vLen;
out vec4 o;
void main(){
  // Across the ribbon always falls off; along it only the caps do, so a
  // long streak keeps its body and a zero-length one reads as a disc.
  float across = abs(vUV.x - 0.5) * 2.0;
  float along = abs(vUV.y - 0.5) * 2.0;
  float capped = max(0.0, along - vLen / (vLen + 1.0));
  float d = length(vec2(across, capped * (1.0 + vLen)));
  // A round is a hard little core that falls off late; a bloom is soft
  // the whole way out. One curve, one parameter between them.
  float hard = smoothstep(1.0, 0.45, d);
  float soft = smoothstep(1.0, 0.0, d);
  float body = mix(hard, soft * soft, vSoft);
  float a = vCol.a * clamp(body, 0.0, 1.0);
  if (a < 0.004) discard;
  o = vec4(vCol.rgb, a);
}`,Vs=16,Hs=3.4,Us=5,Ws=9,Gs=26,Ks=3,qs=[1,.84,.54],Js=[.93,.95,.98],Ys=[1,.77,.43],Xs=[.25,.26,.29],Zs=12;function Qs(e){let t=J(e,zs,Bs),n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);let a=Zs*4;for(let t=0;t<3;t+=1)e.enableVertexAttribArray(1+t),e.vertexAttribPointer(1+t,4,e.FLOAT,!1,a,t*16),e.vertexAttribDivisor(1+t,1);e.bindVertexArray(null);let o=new Float32Array(512*Zs),s=0,c=(e,t,n,r,i,a)=>{if((s+1)*Zs>o.length){let e=new Float32Array(o.length*2);e.set(o),o=e}let c=s*Zs;o.set([e[0],e[1],e[2],n],c),o.set([t[0],t[1],t[2],r],c+4),o.set([i[0],i[1],i[2],a],c+8),s+=1},l=(e,t)=>{let n=As(`approach`),r=1/0;for(let i of e.flights){let e=Math.hypot(i.pos.x-t.to.x,i.pos.y-t.to.y);e<r&&(r=e,n=As(i.phase))}return n};return{draw(r,a,u){s=0;let d=r.tick+U(u),f=r.ships.find(e=>e.side===`raider`)?.cls;for(let e of r.aaFire??[]){let t=e.to.x-e.from.x,n=e.to.y-e.from.y,i=Math.hypot(t,n);if(i<1)continue;let a=e.style===`tracer`,o=i/(a?$t:en),s=nn(e),u=l(r,e),p=z(rn(e)),m=cn(e,f);for(let t=0;t<p;t+=1){let n=d-an(e,s,t,p);if(n<0)continue;let r=ln(e,s,t,i),l=n/o,f=m[t%2],h=e=>[f.x+(r.x-f.x)*e,f.y+(r.y-f.y)*e,Vs+(u-Vs)*e];if(l<=1){c(h(Math.max(0,l-(a?.055:.035))),h(l),a?Hs:Us,a?.95:1,a?qs:Js,0);continue}if(a)continue;let g=(n-o)/tn;if(g>=1)continue;let _=h(1);if(g<.12){let e=g/.12;c(_,_,Ws*(.7+.9*e),.95*(1-e),Ys,1)}let v=R(g),y=.6*(1-g),b=z(Ks);for(let e=0;e<b;e+=1){let n=T(s,t,10+e)*Math.PI*2,r=Ws*.9*v*(.4+T(s,t,13+e)),i=(Ws+(Gs-Ws)*v)*(.7+.5*T(s,t,16+e)),a=[_[0]+Math.cos(n)*r,_[1]+Math.sin(n)*r,_[2]+(T(s,t,22+e)-.5)*r];c(a,a,i,y*(.7+.3*T(s,t,19+e)),Xs,1)}}}s!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(n),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,o.subarray(0,s*Zs),e.DYNAMIC_DRAW),e.uniformMatrix4fv(t.uniform(`uVP`),!1,a.viewProjection),e.uniform3f(t.uniform(`uEye`),a.eye[0],a.eye[1],a.eye[2]),e.drawArraysInstanced(e.TRIANGLES,0,6,s),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}var $s=[.2,.198,.196],ec=[1,.82,.5],tc=12,nc=1024;function rc(e){let t=J(e,zs,Bs),n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);let a=tc*4;for(let t=0;t<3;t+=1)e.enableVertexAttribArray(1+t),e.vertexAttribPointer(1+t,4,e.FLOAT,!1,a,t*16),e.vertexAttribDivisor(1+t,1);e.bindVertexArray(null);let o=new Float32Array(nc*tc);return{draw(r,a,s,c,l){let u=0,d=r.tick+l;for(let e of r.falls){let t=e.sites;if(t===void 0||t.length===0)continue;let n=d-e.tick;if(n<0||n>=.55)continue;let i=r.ships.find(t=>t.id===e.targetId),c=r.ships.find(t=>t.id===e.shooterId);if(i===void 0)continue;let l=a(i),f=s(i)*Math.PI/180,p=[Math.sin(f),Math.cos(f)],m=W[i.cls].lengthMetres,h=c===void 0?null:a(c),g=h===null?f:Math.atan2(l.x-h.x,l.y-h.y);t.forEach((t,r)=>{if(Ct(t)&&n>=.3)return;let i=(xt[t.zone]??0)*m,a={x:l.x+p[0]*i,y:l.y+p[1]*i,z:11},s=wt(t,I(`${e.shooterId}:${e.targetId}`)+e.tick*7919+r*131|0,a,g,n,z(St(t)));for(let e of s){if(u>=nc)return;let t=u*tc;o[t]=e.px,o[t+1]=e.py,o[t+2]=e.pz,o[t+3]=e.halfWidth,o[t+4]=e.x,o[t+5]=e.y,o[t+6]=e.z,o[t+7]=e.alpha,o[t+8]=$s[0]+(ec[0]-$s[0])*e.hot,o[t+9]=$s[1]+(ec[1]-$s[1])*e.hot,o[t+10]=$s[2]+(ec[2]-$s[2])*e.hot,o[t+11]=e.hot*.35,u+=1}})}u!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(n),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,o.subarray(0,u*tc),e.DYNAMIC_DRAW),e.uniformMatrix4fv(t.uniform(`uVP`),!1,c.viewProjection),e.uniform3f(t.uniform(`uEye`),c.eye[0],c.eye[1],c.eye[2]),e.drawArraysInstanced(e.TRIANGLES,0,6,u),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}var ic=[.075,.065,.058],ac=[.42,.36,.31],oc=12,sc=512;function cc(e){let t=J(e,zs,Bs),n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);let a=oc*4;for(let t=0;t<3;t+=1)e.enableVertexAttribArray(1+t),e.vertexAttribPointer(1+t,4,e.FLOAT,!1,a,t*16),e.vertexAttribDivisor(1+t,1);e.bindVertexArray(null);let o=new Float32Array(sc*oc);return{draw(r,a,s,c){let l=0;for(let e of r){if(e.sunk)continue;let t=e.burns??C,n=e.plating??C;if(!V(t,n))continue;let r=W[e.cls],i=a(e),c=s(e)*Math.PI/180,u=[Math.sin(c),Math.cos(c)],d=[Math.cos(c),-Math.sin(c)],f=r.beamMetres*.42;for(let a of Ae(e.id,t,n)){if(l>=sc)break;let e=a.along*r.lengthMetres,t=a.across*r.beamMetres/2,n=i.x+u[0]*e+d[0]*t,s=i.y+u[1]*e+d[1]*t,c=f+(a.kind===`soot`?1.2+a.up*2.5:.4),p=a.size*r.beamMetres*.5,m=a.kind===`soot`?ic:ac,h=l*oc;o[h]=n,o[h+1]=s,o[h+2]=c,o[h+3]=p,o[h+4]=n,o[h+5]=s,o[h+6]=c,o[h+7]=a.weight*(a.kind===`soot`?.9:.8),o[h+8]=m[0],o[h+9]=m[1],o[h+10]=m[2],o[h+11]=a.kind===`soot`?1:.45,l+=1}}l!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(n),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,o.subarray(0,l*oc),e.DYNAMIC_DRAW),e.uniformMatrix4fv(t.uniform(`uVP`),!1,c.viewProjection),e.uniform3f(t.uniform(`uEye`),c.eye[0],c.eye[1],c.eye[2]),e.drawArraysInstanced(e.TRIANGLES,0,6,l),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}var lc=`#version 300 es
precision highp float;
layout(location=0) in vec2 aUV;      // unit quad corner
layout(location=1) in vec4 aBlob;    // xy centre (world m), z radius, w alpha
layout(location=2) in vec2 aTone;    // x darkness 0..1, y edge softness
uniform mat4 uVP;
uniform float uSeaZ;
out vec2 vUV; out float vA; out float vDark; out float vSoft;
void main(){
  vUV = aUV; vA = aBlob.w; vDark = aTone.x; vSoft = aTone.y;
  // World-flat: oil lies ON the water; it never faces the camera.
  vec2 xy = aBlob.xy + (aUV - 0.5) * 2.0 * aBlob.z;
  gl_Position = uVP * vec4(xy, uSeaZ, 1.0);
}`,uc=`#version 300 es
precision highp float;
in vec2 vUV; in float vA; in float vDark; in float vSoft;
out vec4 o;
uniform vec3 uCol;
void main(){
  float d = length(vUV - 0.5) * 2.0;
  // Smooth to the edge and nothing else — the ruling's whole point.
  float a = smoothstep(1.0, vSoft, d) * vA;
  o = vec4(uCol * vDark, a);
}`,dc=[.07,.075,.09],fc=6,pc=9,mc=6,hc=14,gc=.22;function _c(e,t){let n=at(e);if(n<.08)return null;let r=W[e.cls],i=r.lengthMetres,a=r.beamMetres;if(!e.sunk&&e.motion.speedKnots>.5){let r=$e(t,e.track),o=Math.min(i/2,r),s=Math.min(o+ot(i,n),r),c=et(t,e.track,o),l=et(t,e.track,s);return{ax:c.x,ay:c.y,bx:l.x,by:l.y,radiusMetres:a*1.6,strength:n}}return{ax:t.x,ay:t.y,bx:t.x,by:t.y,radiusMetres:i*.45+a*1.4*(.5+.5*n),strength:n}}function vc(e){let t=J(e,lc,uc),n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);let a=fc*4;e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,a,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,a,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null);let o=new Float32Array(512*fc),s=0,c=(e,t,n,r,i,a)=>{if((s+1)*fc>o.length){let e=new Float32Array(o.length*2);e.set(o),o=e}let c=s*fc;o[c]=e,o[c+1]=t,o[c+2]=n,o[c+3]=r,o[c+4]=i,o[c+5]=a,s+=1};return{draw(r,a,l,u,d){s=0;for(let e of r){let t=W[e.cls],n=t.lengthMetres,r=t.beamMetres,i=a(e),o=l(e)*Math.PI/180,s={x:-Math.sin(o),y:-Math.cos(o)},u=I(e.id),f=at(e);if(f>=.08)if(!e.sunk&&e.motion.speedKnots>.5){let t=ot(n,f),a=$e(i,e.track),o=z(pc);for(let l=0;l<o;l+=1){let d=(l+1)/o,p=n/2+d*t;if(p>a)break;let m=et(i,e.track,p),h=tt(i,e.track,p,s),g=(j(u,l+30)-.5)*r*1.6*d;c(m.x-h.y*g,m.y+h.x*g,je(r*.45,r*1.5,R(d)),.46*f*(1-.62*d),1,.15)}}else{let e=z(mc);for(let t=0;t<e;t+=1){let e=j(u,t+33)*2*Math.PI,a=j(u,t+40)*n*.5;c(i.x+Math.cos(e)*a,i.y+Math.sin(e)*a,r*(.9+1.2*j(u,t+47))*(.5+.5*f),.4*f,1,.1)}}let p=d(e);if(e.sunk&&p>.15){let e=n*(.35+.5*Math.min(1,p)),t=z(hc);for(let n=0;n<t;n+=1){let t=j(u,n+60)*2*Math.PI,r=e*Math.sqrt(j(u,n+80));c(i.x+Math.cos(t)*r,i.y+Math.sin(t)*r,1.2+3.4*j(u,n+100),.55*Math.min(1,p*1.6),2.6+2.4*j(u,n+120),.62)}}}s!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(n),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,o.subarray(0,s*fc),e.DYNAMIC_DRAW),e.uniformMatrix4fv(t.uniform(`uVP`),!1,u.viewProjection),e.uniform3f(t.uniform(`uCol`),dc[0],dc[1],dc[2]),e.uniform1f(t.uniform(`uSeaZ`),gc),e.drawArraysInstanced(e.TRIANGLES,0,6,s),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}var yc=1,bc=new WeakMap;function xc(e){let t=bc.get(e.verts);if(t!==void 0)return t;let n=0;for(let t=0;t<e.verts.length;t+=10){let r=e.verts[t+1];r>n&&(n=r)}let r=0,i=0;for(let t=0;t<e.verts.length;t+=10)e.verts[t+1]<n-yc||(r+=e.verts[t+2],i+=1);let a={reachMetres:n,heightMetres:i===0?0:r/i};return bc.set(e.verts,a),a}function Sc(e,t,n,r){let i=Xa(e.cls).find(e=>e.mountId===t);if(i===void 0)return null;let a=xc(i),o=e.mounts.find(e=>e.mountId===t)?.trainDeg,s=r*Math.PI/180,[c,l,u]=i.seat,d=n.x+c*Math.cos(s)+l*Math.sin(s),f=n.y-c*Math.sin(s)+l*Math.cos(s),p=s+(o??i.restDeg)*Math.PI/180;return{x:d+Math.sin(p)*a.reachMetres,y:f+Math.cos(p)*a.reachMetres,z:u+a.heightMetres,boreRad:p}}var Cc=[.815,.835,.867],wc=[.44,.455,.486],Tc=7,Ec=46,Dc=1.6,Oc=.35,kc=6,Ac=.35,jc=5,Mc=[1.6,1.32,.72],Nc=[.58,.55,.5];function Pc(e,t,n){return[e[0]*t[0]*n,e[1]*t[1]*n,e[2]*t[2]*n]}function Fc(e){let t=J(e,zo,Bo),r=ca(e);return{draw(i,a,o,s,c,l,u,d,f){let p=[],m=i.tick+u,h=l,g=Math.floor(h/Dc),_=U((h-g*Dc)/Dc),v=(e,t)=>Math.hypot(e-c.eye[0],t-c.eye[1]);for(let e of i.smoke){let t=m-(e.expiresAtTick-n.smoke.durationTicks),r=U(1-t/n.smoke.durationTicks);if(r<=0)continue;let i=e.expiresAtTick*41+Math.round(e.pos.x)*7+Math.round(e.pos.y)|0,a=U(t/1.5),o=.7+.35*R(1-r),s=e.radiusMetres*Oc*R(1-r),c=a*(.34+.5*r),l=z(Tc);for(let t=0;t<l;t+=1){let n=j(i,t*5+g)*(1-_)+j(i,t*5+g+1)*_,r=j(i,t*5+2)*Math.PI*2,a=e.radiusMetres*.62*Math.sqrt(j(i,t*5+3)),u=s*(.4+.6*t/l),m=e.pos.x+Math.cos(r)*a+d[0]*u,h=e.pos.y+Math.sin(r)*a+d[1]*u;p.push({x:m+(n-.5)*e.radiusMetres*.14,y:h+(n-.5)*e.radiusMetres*.14,z:3+Ec*(.12+.88*j(i,t*5+4)),r:e.radiusMetres*(.36+.16*n)*o,alpha:c*.5,col:Pc(Cc,f,1),seed:j(i,t*5+6)*9,ph:.5,d:v(m,h)})}}for(let e of a){if(e.sunk)continue;let t=Math.min(1,e.motion.speedKnots/20);if(t<=.02)continue;let n=o(e),r=s(e)*Math.PI/180,i=W[e.cls].lengthMetres,a=W[e.cls].beamMetres,c=-Math.sin(r)*t+d[0]*.45,l=-Math.cos(r)*t+d[1]*.45,u=Math.hypot(c,l)||1;for(let o of L[e.cls].funnels){let e=-o*i,s=n.x+Math.sin(r)*e,d=n.y+Math.cos(r)*e,m=Math.round(s)*31+Math.round(d)*7|0,h=a*(.9+1.5*t),_=z(kc);for(let e=0;e<_;e+=1){let n=(e+1)/_,r=(j(m,e*3+g)-.5)*h*n,i=(j(m,e*3+g+1)-.5)*h*n,o=s+c/u*h*(e+1)+r,y=d+l/u*h*(e+1)+i;p.push({x:o,y,z:16+26*R(n),r:a*(.28+.5*R(n))*(.7+.6*t),alpha:.2*(.35+.65*t)*(1-.75*n),col:Pc(wc,f,1),seed:j(m,e*3+2)*9,ph:n,d:v(o,y)})}}}for(let e of i.salvos){let t=(m-e.firedAtTick)*10;if(t<0||t>jc)continue;let n=a.find(t=>t.id===e.shooterId);if(n===void 0)continue;let r=Sc(n,e.mountId,o(n),s(n));if(r===null)continue;let i=r.x,c=r.y,l=e.firedAtTick*131+e.mountId.length*17|0;if(t<Ac){let e=t/Ac;p.push({x:i,y:c,z:r.z,r:(7+16*e)*(.8+.4*j(l,1)),alpha:(1-e)*.95,col:Mc,seed:j(l,2)*9,ph:.2,d:v(i,c)})}let u=U(t/jc),h=30*u;p.push({x:i+d[0]*h,y:c+d[1]*h,z:r.z+10*u,r:(6+26*R(u))*(.85+.3*j(l,3)),alpha:.5*(1-u)*(1-u),col:Pc(Nc,f,1),seed:j(l,4)*9,ph:.5,d:v(i+d[0]*h,c+d[1]*h)})}if(p.length===0)return;p.sort((e,t)=>t.d-e.d);let y=Po(c);e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(r),e.uniformMatrix4fv(t.uniform(`uVP`),!1,c.viewProjection),e.uniform3f(t.uniform(`uRight`),y.right[0],y.right[1],y.right[2]),e.uniform3f(t.uniform(`uUp`),y.up[0],y.up[1],y.up[2]),e.uniform1f(t.uniform(`uEmber`),0);for(let n of p)e.uniform3f(t.uniform(`uPos`),n.x,n.y,n.z),e.uniform1f(t.uniform(`uR`),n.r),e.uniform3f(t.uniform(`uCol`),n.col[0],n.col[1],n.col[2]),e.uniform1f(t.uniform(`uA`),n.alpha),e.uniform1f(t.uniform(`uSeed`),n.seed),e.uniform1f(t.uniform(`uPh`),n.ph),e.drawArrays(e.TRIANGLES,0,6);e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null)}}}var Ic=`#version 300 es
precision highp float;
layout(location=0) in vec2 aUV;     // unit quad corner, per vertex
layout(location=1) in vec4 aBoil;   // xy centre (world m), z radius (m), w alpha
layout(location=2) in vec2 aTone;   // x brightness, y per-bubble seed 0..1
uniform mat4 uVP;
/** Device-pixel floor in world metres: a disc narrower than a device
 * pixel aliases into snow (the glitter lesson), so it never goes below. */
uniform float uMinR;
out vec2 vUV; out float vA; out float vBright; out float vSeed;
void main(){
  vUV = aUV;
  vA = aBoil.w; vBright = aTone.x; vSeed = aTone.y;
  float r = max(aBoil.z, uMinR);
  // World-flat basis: the churn lies on the sea, never faces the screen.
  vec2 xy = aBoil.xy + (aUV - 0.5) * 2.0 * r;
  gl_Position = uVP * vec4(xy, 0.35, 1.0);
}`,Lc=`#version 300 es
precision highp float;
in vec2 vUV; in float vA; in float vBright; in float vSeed;
out vec4 o;
uniform vec3 uCol;
void main(){
  float d = length(vUV - 0.5) * 2.0;
  // Body edge varies per bubble — some hard, some already dissolving.
  float body = smoothstep(1.0, 0.40 + 0.22 * vSeed, d);
  // The rim is where a bubble catches the light; it keeps a crowded
  // lane granular instead of letting it fill in to a solid band.
  float rim = smoothstep(0.30, 0.88, d) * (1.0 - smoothstep(0.88, 1.0, d));
  o = vec4(uCol * (vBright + 0.5 * rim), body * vA);
}`,Rc=[.84,.93,1];function zc(e,t){let n=.55+.45*Math.min(t/2.6,1);return[Rc[0]*(e[0]??1)*n,Rc[1]*(e[1]??1)*n,Rc[2]*(e[2]??1)*n]}var Bc=6,Vc=2,Hc=5;function Uc(e){let t=J(e,Ic,Lc),n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);let a=Bc*4;e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,a,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,a,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null);let o=new Float32Array(4096*Bc),s=0,c=(e,t,n,r,i,a)=>{if((s+1)*Bc>o.length){let e=new Float32Array(o.length*2);e.set(o),o=e}let c=s*Bc;o[c]=e,o[c+1]=t,o[c+2]=n,o[c+3]=r,o[c+4]=i,o[c+5]=a,s+=1},l=(e,t,n,r,i,a,o,s)=>{for(let l of Wi(e,t,n,r,i,a,o,s))c(l.x,l.y,l.radiusMetres,.96*l.fade,.95+.45*l.life,l.seed)};return{draw(r,a,u,d,f,m,h){let _=r.spentTorpedoes??[];if(r.torpedoes.length===0&&_.length===0)return;s=0;let v=Ui(u.metresPerPxAtTarget,Vc),y=Math.min(1,Math.max(0,d-(r.tick-1)));for(let e of r.torpedoes){if(e.side===`enemy`&&!e.sighted||Ni(e,d,f))continue;let t=g[e.type].speedKnots*p,n=e.headingDeg*Math.PI/180,i=ie(e,(y-1)*t*f,r.ships,e=>a(e)),o=Math.sin(n),s=Math.cos(n),u=g[e.type].rangeMetres-e.runMetresLeft+i,m=Hi(e.firedAtTick,e.headingDeg);l(e.pos.x-o*(u-i),e.pos.y-s*(u-i),o,s,u,u,m,v);let h=e.pos.x+o*i,_=e.pos.y+s*i;for(let e=0;e<Hc;e+=1){let t=-1.6*e,n=(j(m+e,41)-.5)*3.4;c(h+o*t-s*n,_+s*t+o*n,1.5+1.3*j(m+e,43),.98,1.35,j(m+e,47))}}for(let e of _){if(e.side===`enemy`&&!e.sighted)continue;let t=g[e.type].speedKnots*p,n=e.headingDeg*Math.PI/180,r=Math.sin(n),i=Math.cos(n),a=(d-(e.endedAtTick-1+(e.endedAtSeconds??f)/f))*f,o=a>=0?e.runMetres:Math.max(0,e.runMetres+a*t),s=o+Math.max(0,a)*t;l(e.pos.x-r*e.runMetres,e.pos.y-i*e.runMetres,r,i,o,s,Hi(e.firedAtTick,e.headingDeg),v)}s!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(n),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,o.subarray(0,s*Bc),e.DYNAMIC_DRAW),e.uniformMatrix4fv(t.uniform(`uVP`),!1,u.viewProjection),e.uniform3f(t.uniform(`uCol`),h[0],h[1],h[2]),e.uniform1f(t.uniform(`uMinR`),m*.6),e.drawArraysInstanced(e.TRIANGLES,0,6,s),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}var Wc=2400,Gc=850,Kc=300,qc=4e3,Jc=14e3,Yc=10,Xc=90,Zc=`#version 300 es
precision highp float;
layout(location=0) in vec2 aXY;
uniform mat4 uVP; uniform vec2 uOrigin; uniform float uT;
// The grid arrives normalized (−0.5…+0.5): uExtent is how many metres
// of sea the camera wants this frame, uOrigin where to centre them.
uniform float uExtent;
uniform vec4 uWaveA[4];   // dirx, diry, k, amp
uniform vec2 uWaveB[4];   // omega, steepness
out vec3 vPos; out vec3 vNrm; out float vCrest;
void main(){
  vec2 xy = aXY * uExtent + uOrigin;
  vec3 p = vec3(xy, 0.0);
  vec3 n = vec3(0.0, 0.0, 1.0);
  float crest = 0.0;
  for (int i=0;i<4;i++){
    vec2 D = uWaveA[i].xy; float k = uWaveA[i].z, A = uWaveA[i].w;
    float w = uWaveB[i].x, q = uWaveB[i].y;
    float th = k*dot(D, xy) - w*uT;
    float S = sin(th), C = cos(th);
    p.xy += D * (q*A*C);
    p.z  += A*S;
    n.xy -= D * (k*A*C);
    n.z  -= q*k*A*S;
    crest += A*S;
  }
  vPos = p; vNrm = normalize(n); vCrest = crest;
  gl_Position = uVP * vec4(p, 1.0);
}`,Qc=`#version 300 es
precision highp float;
in vec3 vPos; in vec3 vNrm; in float vCrest;
out vec4 o;
uniform vec3 uCam; uniform float uT;
uniform vec3 uSunDir; uniform vec3 uSunCol; uniform float uSunI;
uniform vec3 uDeep; uniform vec3 uSkyTo; uniform vec3 uSkyAway;
uniform float uSpec; uniform float uGlitter; uniform float uGlitZ; uniform float uGlitFreq;
uniform float uFoamAmt; uniform float uFoamThresh; uniform vec3 uFoamTint;
uniform float uStreak; uniform vec2 uWind; uniform float uSeaAmp;
uniform vec3 uHaze; uniform vec2 uHazeP;
// Her own position. The weather may close the horizon, but a man on the
// bridge can see the water around his ship: the fog is lifted inside a
// bubble centred here, so the vicinity is always legible whatever the
// sky is doing further out (owner request, Aug 2026).
uniform vec2 uHome;
// Lights ON the water: burning ships and the flash of gunfire, as
// (x, y, radius m, strength). At night these are the only things that
// light the sea at all, and a raider afire should be able to see by
// her own fires. Warm, additive, and falling off with the square.
uniform int uEmitCount;
uniform vec4 uEmit[6];
// 1 where the sky may clear with height, 0 where the weather is meant
// to close the horizon whatever the camera does (gale, squall).
uniform float uHazeLift;
// ?glfar=0 kills every far-field term, so the rig can shoot the sea
// with and without them and MEASURE the difference instead of arguing
// about it. It earned its keep the day it was added: the far-field work
// that had just been called finished turned out to move the picture by
// a tenth of what the near water does — which is to say, not at all.
uniform float uFarOn;
// How much of the far field's BROAD octaves this sky shows — 0 on a
// clear day, where light and shade at that scale is cloud shadow under
// a cloudless sky and reads as exactly the wrong thing (owner ruling,
// C1·27, and again at C1·28: the first pass took only the 2.4 km band,
// and the 850 m swell is drawn out 2.8x DOWN THE WIND, so it patches
// the sea at two and a half kilometres too and he could still see it).
// Only the 300 m crest octave is fine enough to be the sea's own
// structure rather than a sky's, and that one stands in every state.
uniform float uFarBand;
uniform int uShipCount;
uniform vec4 uShipA[6];   // x, y, sin(heading), cos(heading)
uniform vec4 uShipB[6];   // length, beam, speed m/s, sink 0..1
uniform int uSplashCount;
uniform vec4 uSplash[12]; // x, y, size, age s
// One slick capsule per ship, parallel to uShipA/uShipB and counted by
// the same uShipCount: a strength of zero means she is not bleeding.
uniform vec4 uSlickA[6];  // ax, ay, bx, by — the capsule
uniform vec2 uSlickB[6];  // radius m, strength 0..1
// Where each ship HAS BEEN (C1·29, and the Kelvin arms joined it at
// C1·32), newest first, two points to a vector: TRACK_VECS of them per
// ship, laid end to end. The wash AND the arms are built along this
// polyline instead of off her stern, so water she has already disturbed
// stays disturbed — and stays disturbed the way she disturbed it — when
// she slows, turns or founders. A short track is padded with its own
// last point, which shows up here as a zero-length segment and ends the
// walk.
uniform vec4 uTrack[48];
// How many of those points to actually walk. The wake is the one effect
// whose cost is a LOOP LENGTH rather than a count of things drawn, so
// this is how the degrade dials thin it (render/degrade.ts): a weaker
// device remembers less water rather than drawing a worse wake.
uniform int uTrackN;
// ?glarms=0 kills the Kelvin arms and nothing else, so the rig can shoot
// the sea with and without the dearest block in the ship loop and MEASURE
// what it costs, the way uFarOn does for the far field. A measurement
// that says "better" is not a measurement that says "gone", and neither
// is one that has no floor to stand against.
uniform float uArmsOn;

/** A track point: ships are laid end to end, two points to a vector. */
vec2 trackAt(int ship, int k){
  vec4 v = uTrack[ship*8 + k/2];
  return (k - (k/2)*2 == 0) ? v.xy : v.zw;
}

float h21(vec2 p){ p = fract(p*vec2(234.34,435.345)); p += dot(p,p+34.23); return fract(p.x*p.y); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y);
}
float fbm(vec2 p){ return 0.55*vnoise(p) + 0.30*vnoise(p*2.13+7.7) + 0.15*vnoise(p*4.7+3.1); }
float hullDist(vec2 f, float hl, float hw){
  vec2 d = vec2(max(abs(f.x)-hw*0.82, 0.0), max(abs(f.y)-hl*0.94, 0.0));
  return length(d);
}
vec2 toShip(vec2 w, vec4 A){ vec2 r = w - A.xy; return vec2(r.x*A.w - r.y*A.z, r.x*A.z + r.y*A.w); }

void main(){
  vec2 drift = uWind * uT * 0.7;
  float e = 0.6;
  float n1 = fbm((vPos.xy - drift)/11.0);
  float nx = fbm((vPos.xy - drift + vec2(e,0.0))/11.0) - n1;
  float ny = fbm((vPos.xy - drift + vec2(0.0,e))/11.0) - n1;
  float n2 = fbm((vPos.xy - drift*1.7)/3.1);
  float mx = fbm((vPos.xy - drift*1.7 + vec2(e,0.0))/3.1) - n2;
  float my = fbm((vPos.xy - drift*1.7 + vec2(0.0,e))/3.1) - n2;
  float n3 = fbm((vPos.xy - drift*0.5)/28.0);
  float px3 = fbm((vPos.xy - drift*0.5 + vec2(e,0.0))/28.0) - n3;
  float py3 = fbm((vPos.xy - drift*0.5 + vec2(0.0,e))/28.0) - n3;

  float shipFoam = 0.0, kelShade = 0.0, ao = 0.0, sinkFoam = 0.0, aer = 0.0;
  vec2 rip = vec2(0.0);
  float nearestHull = 1e9;
  for (int i=0;i<6;i++){
    if (i >= uShipCount) break;
    vec4 A = uShipA[i]; vec4 B = uShipB[i];
    vec2 sp = toShip(vPos.xy, A);
    float hl = B.x*0.5, hw = B.y*0.5;
    // The cull is a CIRCLE about her, not a box in her own frame, and it
    // stopped being a box the day the wake stopped being hull-attached
    // (C1·32). A box in her frame culls the water she has LEFT: steam
    // east, put the wheel over and come north, and the arms she laid to
    // the east are now abeam in her new frame, where a box drawn across
    // her beam cuts them off. A circle knows nothing about which way she
    // is pointing, which is the whole point. It is also tighter than the
    // old box on the diagonal, and so slightly cheaper.
    vec2 rel = vPos.xy - A.xy;
    float reach = 900.0 + hl;
    if (dot(rel, rel) > reach*reach) continue;
    float dHull = hullDist(sp, hl, hw);
    nearestHull = min(nearestHull, dHull);
    float distort = (fbm(vPos.xy/6.5 + 2.2) - 0.5) * 6.0;
    float dHn = max(dHull + distort, 0.0);
    ao = max(ao, smoothstep(7.5, 0.5, dHn)*0.18);
    float spd = min(B.z/12.35, 1.0);
    // side lace + wet-line
    float hwAt = hw * smoothstep(hl*1.02, hl*0.50, abs(sp.y));
    float lace = smoothstep(2.6, 0.4, abs(abs(sp.x) - (hwAt + 0.8)))
               * (0.22 + 0.85*smoothstep(hl*0.55, hl*0.95, abs(sp.y)))
               * (1.0 - smoothstep(hl*0.98, hl*1.06, abs(sp.y)))
               * smoothstep(0.35, 0.75, fbm(vec2(sp.x*0.8, sp.y*0.35 + uT*0.6)));
    float wet = 0.75 + 0.7*uFoamAmt;
    shipFoam += lace * 0.9 * wet * spd
              + smoothstep(1.5, 0.3, dHn) * 0.30 * (0.35 + 0.65*spd);
    shipFoam += smoothstep(13.0, 3.0, length(vec2(sp.x*1.4, sp.y-hl*1.01))) * 0.95 * wet * spd;
    // The wash, laid along her TRACK and not hung off her stern (C1·29).
    // The old form was a ribbon in the ship's own frame, which meant the
    // water had no memory of her: slow, turn, or start going down and
    // the whole pattern retracted to the hull instead of staying where
    // she put it. Walking her path instead costs a handful of segment
    // tests and buys a wake that curves through her turns and is LEFT
    // BEHIND when she comes off the boil.
    //
    // Nothing below is new arithmetic — it is the same wash, in
    // track-frame coordinates: d is arc length astern along her path
    // instead of distance astern in her frame, and qx is signed
    // cross-track distance instead of her own beam axis. The noise
    // therefore follows the curve.
    // The walk is the single dearest thing in this shader — every pixel
    // near a ship walks her whole record, once per ship — so it is
    // written in SQUARED distances throughout and takes its one square
    // root at the end. Comparing d*d against the best d*d picks the same
    // segment as comparing d against the best d, and the projection
    // works in a fraction of the segment (0..1) rather than in metres,
    // which is what lets the direction stay unnormalized inside the
    // loop. That removes a square root and a vector divide from every
    // iteration; measured, it is what pays for the longer record.
    float trkD2 = 1e18;    // SQUARED cross-track distance to the nearest
    float trkAlong = 0.0;  // arc length from the head to that point
    float trkSide = 1.0;   // which side of the track this pixel lies
    float trkSpeed = 0.0;  // the speed she MADE along that segment
    vec2 trkSeg = vec2(-A.z, -A.w);  // that segment, still unnormalized
    float trkSegLen = 1.0;
    float acc = 0.0;
    for (int k=0;k<15;k++){
      if (k >= uTrackN - 1) break;
      // The walk stops when it has gone further astern than anything is
      // drawn. This is what pays for a record twice as long: arc length
      // only grows, so once acc passes the arms' reach no later segment
      // can hold water that is still being marked. The record is sized
      // for a SLOW ship, who needs many ticks to lay nine hundred
      // metres; a ship at twenty knots lays it in nine and walks nine
      // segments however many she is keeping.
      if (acc > 900.0) break;
      vec2 p0 = trackAt(i, k), p1 = trackAt(i, k+1);
      vec2 seg = p1 - p0;
      float segLen2 = dot(seg, seg);
      if (segLen2 < 0.25){
        // A padded (repeated) point ends the walk: she has no more
        // track. A zero-length segment at the HEAD is a different thing
        // and must NOT end it — that is a ship lying stopped, and
        // breaking there takes away everything she laid while she still
        // had way on, which is the very fault this whole record exists
        // to cure. acc is still zero until a real segment is walked, so
        // it distinguishes the two without a second counter.
        if (acc > 0.5) break;
        continue;
      }
      float segLen = sqrt(segLen2);
      // A segment too far off to the side is rejected before it is
      // projected: a handful of operations to skip the rest. The margin
      // is the widest the pattern ever gets across the track, and the
      // test is conservative — a pixel further than segLen + margin from
      // the near end is further than the margin from every point on it.
      vec2 m = vPos.xy - p0;
      float bound = segLen + 460.0;
      if (dot(m, m) > bound*bound){
        acc += segLen;
        continue;
      }
      // Water AHEAD of her must read as ahead. The projection is clamped
      // to the segment everywhere except at the head, where it is let
      // run negative: clamped to zero, every pixel from her stem to the
      // horizon would sit at arc length zero and wear the bow system's
      // origin offset, which puts a wedge in FRONT of her.
      float lo = (acc < 0.5) ? -1e4 : 0.0;
      float t = clamp(dot(m, seg)/segLen2, lo, 1.0);
      vec2 d = m - seg*t;
      float d2 = dot(d, d);
      if (d2 < trkD2){
        trkD2 = d2;
        trkAlong = acc + t*segLen;
        // The side needs only the SIGN of the cross product, and scaling
        // seg by a positive length cannot change a sign — so this reads
        // the same off the unnormalized segment.
        trkSide = (seg.x*m.y - seg.y*m.x) >= 0.0 ? 1.0 : -1.0;
        // No speed is stored: a segment's length over the tick length IS
        // the speed she made along it, which is why an old fast stretch
        // stays wide behind a ship who has since slowed. The HEAD
        // segment is the one exception, and it has to be: it runs from
        // where she is being DRAWN, so it is a fraction of a tick long
        // and its length is a fraction of her speed. Read off its length
        // it would swing from nothing to her full speed once a tick, and
        // since the arms take their WAVELENGTH from this figure the
        // water at her stern would breathe on the tick.
        trkSpeed = (k == 0) ? B.z : segLen / ${Yc}.0;
        trkSeg = seg;
        trkSegLen = segLen;
      }
      acc += segLen;
    }
    float trkD = sqrt(trkD2);
    // seg runs ASTERN (p1 is the older point), so her heading along that
    // stretch is its reverse. Normalized once, here, instead of fifteen
    // times in the loop.
    vec2 trkDir = -trkSeg / trkSegLen;
    if (trkAlong > hl*0.85 && trkSpeed > 0.3 && trkD < 400.0){
      float d = trkAlong - hl*0.85;
      // Age, not distance: a ship stopped in the water leaves a wake
      // that disperses in its own time rather than hanging on the sea
      // for ever because she is no longer running out from under it.
      float ageFade = clamp(1.0 - (d/max(trkSpeed, 0.5))/${Xc}.0, 0.0, 1.0);
      float along = -trkAlong;
      float bend = (fbm(vec2(along*0.020, 3.7)) - 0.5) * (4.0 + 30.0*uSeaAmp) * min(d, 320.0)/320.0;
      float qx = trkSide*trkD + bend;
      float wHalf = (5.2 + 0.085*d) * (0.82 + (0.36 + 0.30*uSeaAmp)*fbm(vec2(qx*0.16, along*0.05)));
      float core = smoothstep(1.0, 0.35, abs(qx)/wHalf);
      float wakeLen = 35.0*trkSpeed + 25.0;
      float fade = pow(clamp(1.0 - d/wakeLen, 0.0, 1.0), 1.7);
      float ch1 = fbm(vec2(qx*0.30, along*0.055));
      float ch2 = 1.0 - abs(2.0*fbm(vec2(qx*0.9 + 5.0, along*0.22)) - 1.0);
      float churn = smoothstep(0.15, 0.65, ch1*0.55 + ch2*0.55);
      float billow = 0.55 + 0.45*fbm(vec2(qx*0.05, along*0.016) + 9.1);
      float seaTear = 1.0 - 0.50*min(uSeaAmp, 1.4)*smoothstep(0.40, 0.80, fbm((vPos.xy - drift)/18.0));
      float wake = core * fade * churn * billow * seaTear * 1.05
                 + core * smoothstep(18.0 + 4.2*trkSpeed, 6.0, d) * (0.45 + 0.75*ch2) * 0.9;
      // Her OWN speed along that stretch, not her speed now.
      shipFoam += min(wake, 1.15) * min(trkSpeed/12.35, 1.0) * ageFade;
    }
    // Kelvin relief: two systems, arms only, no foam — laid along her
    // TRACK and no longer welded to her hull (C1·32; owner: "Its like
    // the Kelvin waves are attached to the ship. So when the ship turns,
    // the waves turn with it... The waves, once already in the water,
    // cannot be moved in real life").
    //
    // NOT ONE FIGURE OF THE WEDGE ARITHMETIC HAS CHANGED. It is still
    // the steady pattern and still the right one: KT = g/V-squared is
    // the transverse wavenumber, KD = KT*2.56 the divergent one, S35 and
    // C35 the sine and cosine of the 35 deg 16' divergent crest angle,
    // and ss*0.354 the cusp line, which is tan 19 deg 28' — the
    // half-angle of the wedge. What changed is the FRAME the arithmetic
    // is evaluated in.
    //
    // It used to be her hull's, rebuilt every frame from where she is
    // and which way she points, so the entire pattern swung with the
    // wheel. It is now the track frame the wash has used since C1·29:
    // ss is arc length astern along the path she actually steamed, aq
    // the distance from that path, sq the side of it, and the slopes are
    // rotated back into the world by the heading she HELD on that
    // stretch rather than the one she is on now. Water she has left
    // keeps the arms she laid in it, at the angle she laid them, at the
    // wavelength her speed THEN set. On a steady course the two frames
    // are the same frame and the picture is the one he already approved.
    //
    // The rejected alternative, recorded because it is the obvious one
    // and it is wrong: anchor a fresh wedge at every track point and sum
    // them. That double-counts. The steady wedge IS the superposition of
    // the waves shed along a straight track — the 19 deg 28' half-angle
    // is a stationary-phase result OF that integral — so summing seven
    // of them integrates twice. Worse, at one point a tick the origins
    // stand a hundred metres apart while the divergent waves are twenty-
    // five metres long, so the seven copies land at scattered phase and
    // cancel: the arms would come out about two and a half times fainter
    // and mottled, on a straight course, where nothing should change at
    // all. No weighting fixes that; it is an aliasing fault, not a
    // normalisation one.
    float armSpd = min(trkSpeed/12.35, 1.0);
    // Waves disperse. Distance alone cannot retire them, because a ship
    // who has stopped is no longer running out from under hers — the
    // same argument that gave the wash its life, and the same shape.
    float armAge = clamp(
      1.0 - (max(trkAlong, 0.0)/max(trkSpeed, 0.5))/130.0,
      0.0, 1.0);
    float calm = armSpd * armAge / (1.0 + uSeaAmp*uSeaAmp*1.1);
    if (uArmsOn > 0.5 && calm > 0.02 && trkSpeed > 1.0 && trkD < 450.0){
      float KT = 9.81/max(trkSpeed*trkSpeed, 6.0);
      float KD = KT * 2.56;
      float S35 = 0.574, C35 = 0.819;
      float aq = trkD;
      float sq = trkSide;
      for (int b=0;b<2;b++){
        // The origins are still the bow and the stern — measured from
        // the class table's length, never from a C2 mesh, so a modelled
        // hull inherits this untouched. They are offsets along the ARC
        // now, which for a ship on a steady course is the identical
        // number: arc length astern of her centre is distance astern of
        // her centre.
        float org = (b==0) ? hl*0.92 : -hl*0.80;
        float ss = trkAlong + org;
        if (ss < 4.0) continue;
        float halfWedge = ss*0.364 + 6.0;
        float win = smoothstep(halfWedge*1.30, halfWedge*0.85, aq);
        if (win < 0.01) continue;
        float cuspD = (aq - ss*0.354)/(0.12*ss*0.354 + 3.0);
        float cusp = exp(-cuspD*cuspD);
        // Two ways for an arm to end, and it wants both: dispersal
        // (armAge, above) and plain distance. The taper over the last
        // quarter of the reach is what stops the far end being a LINE.
        float decay = 1.0/(1.0 + ss*0.0075)
                    * smoothstep(900.0, 900.0*0.72, ss);
        float phD = (ss*S35 + aq*C35) * KD;
        float armMod = 0.72 + 0.38*fbm(vec2(ss*0.03, sq*4.7 + float(b)*9.0));
        float aD = 3.2*(0.06 + 1.15*cusp) * armMod * win * decay * calm;
        float gq = cos(phD)*C35*KD*sq*aD;
        float gs2 = -cos(phD)*S35*KD*aD;
        // The same rotation as before with the same handedness — the
        // heading she held on this stretch simply stands where her
        // current heading used to (trkDir.x for A.z, trkDir.y for A.w).
        rip += vec2(trkDir.y*gq + trkDir.x*gs2, -trkDir.x*gq + trkDir.y*gs2);
        float aT = 0.12 * win * decay * calm
                 * smoothstep(halfWedge*0.60, halfWedge*0.10, aq)
                 * smoothstep(300.0, 70.0, ss) * ((b==1)?1.0:0.35);
        float gt = -cos(ss*KT)*KT*aT;
        rip += vec2(trkDir.x*gt, trkDir.y*gt);
        kelShade += sin(phD) * cusp * win * decay * calm * armMod * (b==0 ? 1.0 : 0.55);
      }
    }
    // the sinking boil: circular keel sources, stern-weighted, drifting
    if (B.w > 0.01){
      vec2 bowDir = vec2(A.z, A.w);
      for (int k=0;k<5;k++){
        float along = -0.45 + 0.225*float(k);
        float wgt = mix(1.15, 0.45, smoothstep(-0.5, 0.5, along));
        vec2 ctr = A.xy + bowDir*(along*B.x)
                 + uWind * (6.0 + 9.0*h21(vec2(float(k)*3.3, 7.1))) * B.w;
        float rad = (13.0 + 9.0*h21(vec2(float(k)*5.7, 2.9))) * (0.8 + 0.5*B.w) * wgt;
        float dd = length(vPos.xy - ctr) * (1.0 + 0.35*(fbm(vPos.xy/6.0 + float(k)*11.0 - uWind*uT*0.3) - 0.5));
        sinkFoam += smoothstep(rad, rad*0.25, dd) * wgt * B.w;
        aer = max(aer, smoothstep(rad*1.8, rad*0.4, dd) * wgt * B.w);
      }
    }
  }
  if (sinkFoam > 0.0){
    float cells = smoothstep(0.50, 0.78, fbm(vPos.xy/3.1 - uWind*uT*0.5));
    float cells2 = smoothstep(0.58, 0.84, fbm(vPos.xy/8.0 - uWind*uT*0.25 + 4.4));
    sinkFoam = clamp(sinkFoam*(0.30 + 0.85*cells) + min(sinkFoam,1.0)*0.40*cells2, 0.0, 1.15);
  }

  // splash impacts, hull-shadowed
  float sBoil = 0.0, sFront = 0.0, sMat = 0.0;
  for (int j=0;j<12;j++){
    if (j >= uSplashCount) break;
    vec4 spl = uSplash[j];
    vec2 dxy = vPos.xy - spl.xy;
    float r = max(length(dxy), 0.001);
    if (r > 90.0*spl.z/15.0) continue;
    float age = spl.w;
    float sz = spl.z / 15.0;
    float occ = 0.0;
    for (int i=0;i<6;i++){
      if (i >= uShipCount) break;
      for (int k=0;k<3;k++){
        vec2 q = spl.xy + dxy*(0.25 + 0.33*float(k));
        occ = max(occ, smoothstep(3.0, -1.5, hullDist(toShip(q, uShipA[i]), uShipB[i].x*0.5, uShipB[i].y*0.5)));
      }
    }
    float shadow = 1.0 - 0.92*occ;
    float rr = r * (1.0 + 0.28*(fbm(vPos.xy/9.0 + float(j)*13.1) - 0.5));
    float boilR = (6.5 + 1.6*age) * sz;
    sBoil += smoothstep(boilR, boilR*0.25, rr) * exp(-age*0.45) * shadow;
    float frontR = (5.5 + 11.0*sqrt(max(age,0.0))) * sz;
    float front = smoothstep((2.1 + 0.7*age)*sz, (2.1 + 0.7*age)*sz*0.30, abs(rr - frontR))
                * (0.55 + 0.45*smoothstep(0.35, 0.75, fbm(vPos.xy/2.6 + float(j)*3.3)));
    sFront += front * exp(-age*0.30) * shadow;
    float dis = smoothstep(0.28 + 0.09*age, 0.66 + 0.09*age, fbm(vPos.xy/3.4 + float(j)*7.7));
    sMat += smoothstep(frontR, frontR*0.30, rr) * dis * exp(-age*0.26) * shadow;
    float dr = r - frontR*0.82;
    float wamp = 0.55 * exp(-age*0.5) * sz * shadow;
    rip += (dxy/r) * exp(-dr*dr/(14.0*sz)) * sin(dr*1.9) * wamp;
    float dr2 = r - frontR*0.52;
    rip += (dxy/r) * exp(-dr2*dr2/(9.0*sz)) * sin(dr2*2.6) * wamp * 0.35;
  }

  // Oil calms water. The Damage v2 ruling asks a slick to read by
  // darkness AND smoothness, and a blob drawn OVER the sea can only
  // darken it — the smoothness has to be taken out from underneath,
  // here. Inside a slick the sea keeps its swell (oil does not flatten
  // a wave) but loses its capillary chop, its sparkle and its wind-
  // driven crest foam, and goes glassy. Mechanical churn is untouched:
  // a wash, a shell splash and the sinking boil all break through oil.
  float slick = 0.0;
  for (int i=0;i<6;i++){
    if (i >= uShipCount) break;
    vec2 T = uSlickB[i];
    if (T.y <= 0.001) continue;
    vec4 S = uSlickA[i];
    vec2 pa = vPos.xy - S.xy, ba = S.zw - S.xy;
    float hh = clamp(dot(pa,ba)/max(dot(ba,ba), 1e-4), 0.0, 1.0);
    float dS = length(pa - ba*hh);
    // A slick's edge is ragged, never a clean curve — the same wobble
    // the hull AO uses on its own boundary.
    dS *= 1.0 + 0.34*(fbm(vPos.xy/7.5 + 5.9) - 0.5);
    slick = max(slick, smoothstep(T.x, T.x*0.30, dS) * T.y);
  }
  slick = clamp(slick, 0.0, 1.0);

  // Far-field LOD: fine normal detail and sparkle roll off with
  // distance, or minification shreds them into view-aligned streaks.
  float camDist = length(uCam - vPos);
  float lod = exp(-camDist/2600.0);
  // The SECOND, longer roll-off (C1·17). The first one leaves a 30 %
  // floor of surface detail standing at any range, and the tight sun
  // specular had no distance term at all — both perfectly safe while
  // the sea stopped at 9 km, and both a per-pixel blaze once it does
  // not. This starts past 4 km, so every distance the old grid could
  // actually draw is bit-for-bit unchanged: it only governs water that
  // could not be drawn at all before.
  float lodFar = exp(-max(camDist - 4000.0, 0.0)/9000.0);
  float detailAmp = 2.1 * (0.30*lodFar + 0.70*lod) * (1.0 - 0.85*slick);
  vec3 N = normalize(vNrm + vec3((nx+mx*0.5+px3*0.8)*detailAmp + rip.x,
                                 (ny+my*0.5+py3*0.8)*detailAmp + rip.y, 0.0));
  vec3 Vv = normalize(uCam - vPos);
  vec2 wperp = vec2(-uWind.y, uWind.x);
  float band = fbm(vec2(dot(vPos.xy - drift, uWind)/210.0, dot(vPos.xy, wperp)/620.0));
  vec3 deep = uDeep * (0.82 + 0.40*band);
  float sunSide = 0.5 + 0.5*dot(normalize(N.xy + vec2(0.0001)), normalize(uSunDir.xy + vec2(0.0001)));
  vec3 sky = mix(uSkyAway, uSkyTo, sunSide);
  float fres = 0.055 + 0.80*pow(1.0 - max(dot(N, Vv), 0.0), 5.0);
  vec3 col = mix(deep, sky, clamp(fres, 0.0, 1.0));
  col *= 1.0 + clamp(kelShade, -1.0, 1.0) * 0.22;

  // THE FAR SEA (C1·18, owner note against C1·17: "I can barely see a
  // sea"). C1·17 was right that detail finer than a pixel has to go —
  // it was wrong about what it should go TO. It faded the far water to
  // NOTHING, and nothing is a painted floor. It has to fade to its own
  // AVERAGE: a whitecap field 20 km off cannot be resolved cap by cap,
  // but the field is plainly there — the sea is lighter where the wind
  // is working, banded where the swell runs, and it carries the sun.
  //
  // So the far field gets its own texture — and C1·22 is about how it
  // is SIZED, which is what decided whether any of this reads as water.
  //
  // C1·18 sized it in metres per pixel: features landing at a constant
  // size on screen, one cell for the whole frame, rescaled as the camera
  // zoomed. That defeats aliasing perfectly and it is also the recipe
  // for WALLPAPER. Texture that does not shrink with distance carries no
  // depth: the near sea and the sea twenty kilometres off wore the same
  // sized crests, nothing foreshortened, and the owner read the result
  // exactly right — "the ocean stops being an ocean and just looks like
  // a 2D thing".
  //
  // The honest way is the one every renderer uses for this: keep the
  // detail in WORLD metres, where a 300 m rank of crests is 300 m
  // whatever the camera does, and fade each octave out as its own size
  // falls toward the size of a PIXEL. fwidth gives that footprint per
  // fragment — how much world a pixel covers right here — so the near
  // half of a tilted frame keeps all three scales while the far half
  // holds only the broadest, which is precisely the gradient that says
  // "this plane is going away from you". Nothing aliases, because an
  // octave is gone before it can.
  float farAmt = (1.0 - lodFar) * uFarOn;
  float farMott = 0.5, farSwell = 0.5, farTooth = 0.5;
  float toothVis = 0.0;
  if (farAmt > 0.002){
    // World metres under one pixel at this fragment. The whole depth
    // cue hangs off this varying with distance, which it does.
    float fp = max(fwidth(vPos.x), fwidth(vPos.y)) + 1e-3;
    // An octave is worth drawing while it spans a few pixels, and is
    // faded out before it reaches one.
    float visBand = smoothstep(1.6, 4.0, ${Wc}.0 / fp);
    float visSwell = smoothstep(1.6, 4.0, ${Gc}.0 / fp);
    toothVis = smoothstep(1.6, 4.0, ${Kc}.0 / fp);
    // Along the wind and across it: a running sea is drawn out down the
    // blow, so every octave is stretched along it.
    vec2 fq = vec2(dot(vPos.xy - drift, uWind), dot(vPos.xy - drift, wperp));
    farMott = mix(0.5, fbm(fq/vec2(${Wc}.0*2.6, ${Wc}.0) + 11.3), uFarBand);
    farSwell = mix(0.5, fbm(fq/vec2(${Gc}.0*2.8, ${Gc}.0) + 4.1), uFarBand);
    farTooth = fbm(fq/vec2(${Kc}.0*3.2, ${Kc}.0) + 19.7);
    // Each octave contributes only while it is resolvable; past that it
    // has already gone to its own mean of 0.5, which is the fade-to-the-
    // average rule applied per scale instead of all at once.
    col *= 1.0 + farAmt * ((farMott - 0.5)*0.52*visBand
                         + (farSwell - 0.5)*0.66*visSwell
                         + (farTooth - 0.5)*0.42*toothVis);
  }

  vec3 R = reflect(-uSunDir, N);
  float sTight = pow(max(dot(R, Vv), 0.0), 650.0);
  vec3 Nj = normalize(N + vec3((vnoise(vPos.xy*uGlitFreq)-0.5)*0.26, (vnoise(vPos.xy*uGlitFreq*1.26+9.0)-0.5)*0.26, 0.0));
  float sGlit = pow(max(dot(reflect(-uSunDir, Nj), Vv), 0.0), 110.0);
  float lane = 0.20 + 1.8*pow(max(dot(reflect(-uSunDir, vec3(0.0,0.0,1.0)), Vv), 0.0), 8.0);
  // Both highlights die in the slick. The tight one goes too, and on
  // purpose: a glassy surface would mirror the sun BRIGHTER, and the
  // ruling is darkness and smoothness, never a sheen.
  // The tight highlight takes the far roll-off with the detail that
  // feeds it: a 650-power specular read off a normal that changes every
  // pixel is what turned the far sea into a sheet of white noise. Past
  // the far field the sea keeps its swell, its colour and its haze,
  // which is what a sea 20 km off actually looks like.
  col += uSunCol * uSunI * (sTight*2.0*uSpec*lodFar*(1.0 - 0.80*slick)
                          + sGlit*0.42*uGlitter*lane*uGlitZ*lod*(1.0 - 0.95*slick));
  // The sun's path on the far sea: the SAME glitter, averaged. Close
  // to, a million facets catch the sun one at a time and the eye reads
  // sparkle; from 20 km the eye reads one broad luminous lane, which is
  // the single most alive thing about open water seen from height. The
  // lane is the mirror lobe the sparkle already rides, so the path
  // lands where the sparkle would have — and being broad and smooth it
  // cannot alias, which the tight highlight emphatically did.
  // It must be a LANE and not a lift. The lane variable above carries a
  // flat 0.20 base for the near-field sparkle to ride on, and taking
  // that base into a term this broad simply raised the whole sea and
  // washed it pale. Only the directional lobe belongs here.
  // (No backticks in this file, ever: it is one big template literal,
  // and a stray one ends the shader mid-comment. shadercheck does NOT
  // catch that — it reads the source, so it never sees the break.)
  float sunLane = pow(max(dot(reflect(-uSunDir, vec3(0.0,0.0,1.0)), Vv), 0.0), 8.0);
  col += uSunCol * uSunI * uGlitter * uGlitZ * farAmt * sunLane
       * (0.22 + 0.78*farMott) * (0.55 + 0.45*farSwell) * 0.20
       * (1.0 - 0.95*slick);

  vec2 sd = vec2(dot(vPos.xy-drift, uWind), dot(vPos.xy-drift, wperp));
  float macro = fbm(mix((vPos.xy - drift)/6.0, sd/vec2(30.0, 3.2), uStreak*0.85));
  float fil = smoothstep(0.58, 0.80, 1.0 - abs(2.0*fbm((vPos.xy - drift*1.35)/2.3 + 4.7) - 1.0));
  float crest = smoothstep(uFoamThresh, uFoamThresh+0.16, vCrest*0.5 + (1.0-N.z)*2.6);
  float bandBreak = 0.30 + 0.70*smoothstep(0.25, 0.62, fbm(vPos.xy/140.0 + 3.3));
  // The wind's own foam only: oil kills it, so the slick damps this and
  // not the ship, splash and sinking foam added further down.
  float foam = (crest * bandBreak * smoothstep(0.44, 0.60, macro) * (0.30 + 0.95*fil) * uFoamAmt
             + crest * bandBreak * smoothstep(0.55, 0.92, macro) * 0.18 * uFoamAmt)
             * (0.30 + 0.70*lod) * (1.0 - 0.90*slick);
  // ...and the far field's own whitecaps, by the same argument as the
  // sun path: individually unresolvable, collectively the difference
  // between a calm and a gale at twenty kilometres. This is what a
  // weather state should still SAY about water too far to see in
  // detail, and it is why uFoamAmt survives the roll-off.
  if (farAmt > 0.002){
    // What makes near water read as WATER is contrast — foam and
    // highlights, white against dark — not a gentle wobble in tone.
    // Measured, the near sea carries four times the variation of the
    // far sea and gets there on caps and glints that reach full white.
    // So the far field's caps have to be caps. Weather sets how MUCH of
    // the sea is breaking (the threshold moves), not how white a
    // breaking crest is, because a whitecap is white in any weather.
    // Read the other way round — brightness scaled by the weather, as
    // the first cut had it — a blow came out as pale and flat as a
    // calm, which says nothing at all.
    // The threshold has to sit where the noise actually LIVES. A
    // weighted blend of three fbm octaves is a bell about 0.5 with a
    // spread near 0.077, so a cut at 0.74 stood a full sigma out in the
    // tail: a sixth of the sea broke, none of it fully, and the whole
    // term came to a faint wash. These cuts sit within half a sigma of
    // the middle and the ramp is narrow, so a crest that breaks goes
    // properly white instead of hinting at it.
    // Caps are a STIPPLE, and only the finest octave may draw them.
    // Built from the broad scales as well, they fused into continents —
    // the sea came back looking like pack ice. The big scales say only
    // WHERE the wind has the water, moving the threshold so caps gather
    // into streaks down the blow and thin out between them; the tooth,
    // a few pixels across and drawn out along the swell, is the caps.
    // NO CAP STRUCTURE. The owner's ruling, and he is right on the
    // physics: at the zooms where this term lives, 40 to 90 metres to
    // the pixel, a real whitecap is ten to thirty metres and therefore a
    // FRACTION OF A PIXEL. Anything with visible shape at that scale is
    // invented, which is why two rounds of tuning could not make it look
    // like the sea — it was never going to, and it showed up in a flat
    // calm besides. Measured before it went: clear weather was putting
    // caps over about a quarter of the water with a fifth of a foam wash
    // beneath, where a calm sea has essentially none at all.
    //
    // What a whitecap field honestly does at that range is LIGHTEN the
    // water, steeply with the wind and with no structure to it. So that
    // is all this is now: a smooth wash, weighted a little toward the
    // crests of the swell so it is not perfectly even, and raised to a
    // power so a calm has none and a blow is plainly paler. The texture
    // that makes the far sea read as water is the three world-scale
    // octaves above; this only says how hard it is blowing.
    float wash = 0.55 * pow(uFoamAmt, 2.5) * (0.55 + 0.45*farSwell);
    float farCaps = wash * (1.0 - 0.90*slick);
    foam = mix(foam, farCaps, farAmt);
  }

  if (aer > 0.0){
    float roil = 0.5 + 0.5*fbm(vPos.xy/4.2 - vec2(uT*0.25, uT*0.18));
    vec3 aerCol = uFoamTint * vec3(0.74, 0.94, 0.90) * max(uSunI*0.5, 0.35) * 0.72;
    col = mix(col, aerCol, clamp(aer * (0.30 + 0.70*roil), 0.0, 0.85));
  }
  col *= 1.0 - ao;
  col *= 1.0 - clamp(sMat*0.22 + sBoil*0.18, 0.0, 0.32);
  foam = clamp(foam + shipFoam*(0.5 + 0.5*uFoamAmt)
             + clamp(sBoil*1.05 + sFront*0.95 + sMat*0.52, 0.0, 1.0) + sinkFoam, 0.0, 1.0);
  vec3 foamCol = uFoamTint * (0.66 + 0.34*max(dot(N, uSunDir), 0.0)) * max(uSunI*0.5, 0.35);
  col = mix(col, foamCol, foam*0.85);

  // Firelight and gun flash on the water (C1·25). Additive and warm,
  // falling off with the square of the distance the way a real light
  // does. At noon the same term is lost inside the sun's own light,
  // which is correct: a fire lights the sea only when there is nothing
  // brighter, so this needs no day/night switch of its own.
  // The sea a hull is standing on takes no firelight (owner report:
  // "it is as if the light comes from under the ship, and the ship
  // doesn't exist"). He was reading a real fault. The light was a point
  // at the ship's own centre with nothing between it and the water, so
  // its brightest place was the patch of sea underneath her and the
  // glow bloomed out from beneath the hull like a lamp on the seabed.
  // A fire burns on a DECK: it lights the water all round the ship,
  // because it can see over her own rail in every direction, and it
  // lights none of the water she is sitting on.
  float underHull = smoothstep(9.0, -3.0, nearestHull);
  for (int i=0;i<6;i++){
    if (i >= uEmitCount) break;
    vec4 E = uEmit[i];
    // The light sits a funnel's height above the water, not on it.
    vec3 Lv = vec3(E.xy - vPos.xy, 26.0);
    float dl = length(Lv);
    vec3 L = Lv / dl;
    float fall = 1.0 / (1.0 + (dl*dl)/(E.z*E.z));
    // ...and it does not pass THROUGH another ship either. The same
    // three-sample segment test the splash rings use, with the source's
    // own hull skipped: she is not in her own way, and the ray starts
    // inside her by construction.
    float occ = underHull;
    vec2 dxy = vPos.xy - E.xy;
    for (int s=0;s<6;s++){
      if (s >= uShipCount || occ > 0.95) break;
      if (length(uShipA[s].xy - E.xy) < 40.0) continue;
      for (int k=0;k<3;k++){
        vec2 q = E.xy + dxy*(0.22 + 0.30*float(k));
        occ = max(occ, smoothstep(5.0, -2.0, hullDist(toShip(q, uShipA[s]), uShipB[s].x*0.5, uShipB[s].y*0.5)));
      }
    }
    fall *= 1.0 - occ;
    // Two parts, and the second is the one that reads. Diffuse alone is
    // a flat warm disc — fog, not fire. What the eye actually knows a
    // light on water by is the GLITTER PATH: a shivering lane of
    // reflections running from the flame toward whoever is looking,
    // broken up by every wave it crosses. That is a specular term, and
    // it rides the same wave normal the sun's glitter does.
    float diff = clamp(dot(L, N), 0.0, 1.0);
    vec3 H = normalize(L + Vv);
    float spec = pow(clamp(dot(H, N), 0.0, 1.0), 70.0);
    // Foam is spray, not a mirror: it takes the light but not the lane.
    col += vec3(1.0, 0.62, 0.30) * E.w * fall
         * (0.85*diff + 2.4*spec*(1.0 - 0.75*foam));
  }

  // Haze over AIR MASS, not over raw range (C1·19). Air thins with
  // height, and this camera is not standing on a bridge: at battle zoom
  // it sits a couple of kilometres up and at the widest zooms sixty of
  // them, because ground coverage under a narrow field of view is
  // bought with altitude. Reckoned on slant range alone the model
  // INVENTED weather — the further back you stood the thicker the fog
  // got, until the far sea was seven parts haze to three parts water
  // and no amount of surface detail could be seen through it. That was
  // measured, not guessed: 0.70 of every far pixel was flat haze.
  //
  // One scale height of atmosphere (8 km) holds essentially all of it,
  // so a path from far above the sea crosses roughly that much air
  // however long it is. At a low camera the correction returns the
  // slant range unchanged, which is why nothing near the water shifts.
  float dz = max(uCam.z - vPos.z, 1.0);
  float airMass = camDist * (8000.0/dz) * (1.0 - exp(-dz/8000.0));
  // ...and the CEILING falls as the camera climbs (C1·23). Air mass
  // fixed how much haze a long path gathers; this is about how much can
  // stack up at all when you are looking DOWN through the layer rather
  // than along it. Without it the wide zoom washed out — more than half
  // of every far pixel was flat fog in an overcast, and no amount of
  // detail under it could be seen.
  //
  // uHazeLift is 1 for the light skies and 0 for the heavy ones, by the
  // owner's ruling: a gale and a squall are MEANT to close the horizon,
  // and their figures stand. At battle zoom the camera is barely a
  // kilometre or two up, so this is within a few per cent of nothing —
  // the close view he approved does not move.
  float above = clamp(dz / 30000.0, 0.0, 1.0);
  float ceilH = uHazeP.y * (1.0 - uHazeLift * 0.55 * above);
  float fogW = clamp(ceilH * (1.0 - exp(-airMass / uHazeP.x)), 0.0, 1.0);
  // The bridge bubble: whatever the weather is doing out there, the
  // water around the ship is water you can see. This is not the
  // renderer softening the weather — it is where the observer stands.
  // Beyond it the gale closes in exactly as its figures say.
  fogW *= 1.0 - 0.92*smoothstep(${Jc}.0, ${qc}.0, length(vPos.xy - uHome));
  col = mix(col, uHaze, fogW);
  o = vec4(col, 1.0);
}`,$c=60,el=42,tl=34,nl=26,rl=.27,il=8;function al(e){return e/10-1}function ol(e,t){let n=al(t),r=[];for(let t of e.torpedoes){if(r.length>=12)break;let e=Pi(t,n,10,5);e!==null&&r.push(e)}for(let t=e.torpedoHits.length-1;t>=0&&r.length+3<=12;--t){let i=e.torpedoHits[t];if(i===void 0)continue;let a=(n-(i.tick-1))*10-(i.atSeconds??10);if(a<0||a>nl)continue;let o=(e.ships.find(e=>e.id===i.targetId)?.motion.headingDeg??0)*Math.PI/180,s=Math.sin(o)*tl,c=Math.cos(o)*tl,l=a*rl;r.push([i.pos.x,i.pos.y,$c,l]),r.push([i.pos.x+s,i.pos.y+c,el,l*.86]),r.push([i.pos.x-s,i.pos.y-c,el,l*.78])}for(let t=e.falls.length-1;t>=0&&r.length<12;--t){let i=e.falls[t];if(i===void 0)continue;let a=(n-(i.tick-1))*10;if(a<0||a>il)continue;let o=e.ships.find(e=>e.id===i.shooterId),s=o===void 0?10:pe[o.cls];r.push([i.pos.x,i.pos.y,s,a])}return r}var sl=260,cl=520,ll=.9,ul=520,dl=1.15,fl=.16,pl=.02;function ml(e,t,n,r){let i=[];for(let n of e.ships){if(i.length>=24)break;let e=(n.fires??[]).reduce((e,t)=>e+t.intensity,0);if(e<=pl)continue;let r=t(n);i.push(r.x,r.y,sl+cl*Math.min(1,e),ll*Math.min(1.4,e))}for(let a of e.salvos){if(i.length>=24)break;let o=al(r)-(a.firedAtTick-1);if(o<0||o>fl)continue;let s=e.ships.find(e=>e.id===a.shooterId);if(s===void 0)continue;let c=Sc(s,a.mountId,t(s),n(s))??t(s);i.push(c.x,c.y,ul,dl*(1-o/fl))}return i}var hl=4;function gl(e){let t=e.getExtension(`EXT_disjoint_timer_query_webgl2`),n=[],r=[],i=null,a=ne(),o=-1;function s(){if(t===null)return;let i=e.getParameter(t.GPU_DISJOINT_EXT)===!0;for(let t=n.length-1;t>=0;--t){let a=n[t];if(a===void 0||!i&&e.getQueryParameter(a,e.QUERY_RESULT_AVAILABLE)!==!0||(n.splice(t,1),r.push(a),i))continue;let s=e.getQueryParameter(a,e.QUERY_RESULT);o=o<0?s/1e6:f(o,s/1e6)}}return{begin(){a.begin(),s()},beginPlane(){if(a.beginInner(),t===null||i!==null)return;let o=r.pop()??(n.length<hl?e.createQuery():null);o!==null&&(i=o,e.beginQuery(t.TIME_ELAPSED_EXT,o))},endPlane(){a.endInner(),!(t===null||i===null)&&(e.endQuery(t.TIME_ELAPSED_EXT),n.push(i),i=null)},end(){a.end()},readout(){return _l(a.periodMs(),a.cpuMs(),a.innerMs(),o)}}}function _l(e,t,n,r){return[te(e),`cpu ${t.toFixed(1)} (plane ${n.toFixed(1)})`,r<0?`gpu — (no timer)`:`gpu ${r.toFixed(1)}`]}var vl=16/2;function yl(e,t){let n=[e];for(let e of(t??[]).slice(1,16))n.push(e);let r=n[n.length-1]??e;for(;n.length<16;)n.push(r);let i=[];for(let e=0;e<16;e+=2)i.push(n[e].x,n[e].y,n[e+1].x,n[e+1].y);return i}var bl=`#version 300 es
precision highp float;
layout(location=0) in vec3 aPos; layout(location=1) in vec3 aNrm;
layout(location=2) in vec3 aCol; layout(location=3) in float aShipZ;
uniform mat4 uVP; uniform mat4 uModel; uniform mat3 uNM;
out vec3 vN; out vec3 vC; out vec3 vW; out float vZ;
void main(){
  vec4 w = uModel * vec4(aPos, 1.0);
  vW = w.xyz; vN = normalize(uNM * aNrm); vC = aCol; vZ = aShipZ;
  gl_Position = uVP * w;
}`,xl=`#version 300 es
precision highp float;
in vec3 vN; in vec3 vC; in vec3 vW; in float vZ;
out vec4 o;
uniform vec3 uCam; uniform vec3 uSunDir; uniform vec3 uSunCol; uniform float uSunI;
uniform vec3 uAmb; uniform float uAmbI;
uniform vec3 uHaze; uniform vec2 uHazeP; uniform float uHazeLift; uniform vec2 uHome;
/** The same lights the water takes (glWaterShader, C1·25), as
 * (x, y, radius m, strength): burning ships and the flash of gunfire.
 * A hull must stand in her own firelight or the sea around her is lit
 * by something the picture never shows. */
uniform int uEmitCount;
uniform vec4 uEmit[6];
/** Shadow pass when > 0, and its opacity: the same mesh flattened onto
 * the sea (glMath.flattenToSea) draws as a flat dark silhouette instead
 * of a lit hull. Zero — the default for every uniform — leaves the
 * fleet's own drawing untouched. */
uniform float uShadow;
/** Model-frame height below which the mesh takes the boot-topping black
 * — a hull's antifouling below the waterline. An airframe passes this
 * well below its wheels, so nothing of it is painted as bilge. */
uniform float uBootZ;
/** How wounded this part is: 0 sound … 1 shot out (render/damageLook.ts,
 * the §6 four-rung language). Wounded metal takes soot and returns less
 * light — the one channel a lit solid has, since the flat view's fade
 * would show the sea straight through her plating. Zero is the default
 * for every uniform, so the flights and the shadow pass share this
 * program and draw untouched without knowing it is here. */
uniform float uWound;
void main(){
  float dist = length(uCam - vW);
  // Air mass, not slant range — the same reckoning the water uses
  // (C1·19, and the comment there explains why). Hulls and the sea they
  // sit on must agree about the weather or a ship wears a different
  // atmosphere from her own wake.
  float dzS = max(uCam.z - vW.z, 1.0);
  float air = dist * (8000.0/dzS) * (1.0 - exp(-dzS/8000.0));
  // The same falling ceiling the water uses (C1·23) — hulls and the sea
  // they sit on must agree about the weather.
  float ceilS = uHazeP.y * (1.0 - uHazeLift * 0.55 * clamp(dzS/30000.0, 0.0, 1.0));
  float fog = clamp(ceilS * (1.0 - exp(-air / uHazeP.x)), 0.0, 1.0);
  // The same bridge bubble the water uses: a hull close aboard is a hull
  // you can see, or the ring would be marking a contact the eye cannot
  // find in her own vicinity.
  fog *= 1.0 - 0.92*smoothstep(${Jc}.0, ${qc}.0, length(vW.xy - uHome));
  if (uShadow > 0.0) {
    o = vec4(mix(vec3(0.035, 0.045, 0.06), uHaze, fog), uShadow);
    return;
  }
  vec3 base = vZ < uBootZ ? vec3(0.085, 0.085, 0.095) : vC;
  base = mix(base, vec3(0.055, 0.050, 0.048), uWound * 0.72) * (1.0 - 0.62 * uWound);
  float dif = max(dot(vN, uSunDir), 0.0);
  vec3 amb = uAmb * uAmbI * (0.62 + 0.38*(vN.z*0.5 + 0.5));
  vec3 col = base * (amb + uSunCol * uSunI * dif * 0.62);
  for (int i=0;i<6;i++){
    if (i >= uEmitCount) break;
    vec4 E = uEmit[i];
    vec3 Lv = vec3(E.xy - vW.xy, 26.0 - vW.z);
    float dl = length(Lv);
    float fall = 1.0 / (1.0 + (dl*dl)/(E.z*E.z));
    float d2 = clamp(dot(Lv/dl, vN), 0.0, 1.0);
    col += base * vec3(1.0, 0.62, 0.30) * E.w * fall * (0.25 + 0.85*d2);
  }
  col = mix(col, uHaze, fog);
  o = vec4(col, 1.0);
}`,Sl=`#version 300 es
precision highp float;
layout(location=0) in vec2 aUV;
uniform mat4 uVP; uniform vec3 uCam;
uniform vec4 uS;          // x, y, size, age s
uniform float uSeed; uniform float uWScale; uniform float uOff;
out vec2 vUV; out float vAge; out vec2 vXY;
void main(){
  vUV = aUV; vAge = uS.w;
  float grow = smoothstep(0.0, 0.45, uS.w);
  float fall = 1.0 - smoothstep(2.0, 5.5, uS.w);
  float H = uS.z * (0.30 + 2.7*grow) * max(fall, 0.12);
  float W = uS.z * (0.68 + 0.38*smoothstep(1.8, 5.0, uS.w)) * uWScale;
  vec2 toCam = normalize(uCam.xy - uS.xy);
  vec2 rightv = vec2(-toCam.y, toCam.x);
  vec2 xy = uS.xy + rightv * ((aUV.x - 0.5) * W + uOff * uS.z);
  vXY = xy;
  gl_Position = uVP * vec4(xy, aUV.y * H * (uWScale*0.35 + 0.65), 1.0);
}`,Cl=`#version 300 es
precision highp float;
in vec2 vUV; in float vAge; in vec2 vXY; out vec4 o;
uniform vec3 uSunCol; uniform float uSunI; uniform vec3 uFoamTint; uniform float uSeed;
/** The same lights the water and the hulls take (C1·26). A wall of
 * white water thrown up alongside a burning ship at night is lit by
 * her fires and by nothing else; without this the biggest event in the
 * game was a dark grey shape on dark grey water, which is how a
 * torpedo hit came to look like nothing happening at all. */
uniform int uEmitCount;
uniform vec4 uEmit[6];
float h21(vec2 p){ p = fract(p*vec2(234.34,435.345)); p += dot(p,p+34.23); return fract(p.x*p.y); }
float vnoise(vec2 p){
  vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y);
}
void main(){
  float u = vUV.x, v = vUV.y;
  float age = vAge;
  float w = 0.34 + 0.18*smoothstep(0.14, 0.0, v) + 0.10*smoothstep(0.72, 1.0, v);
  w *= 1.0 + 0.16*smoothstep(2.2, 5.0, age);
  float fing  = 1.0 - abs(2.0*vnoise(vec2(u*9.0  + uSeed*3.0,  v*1.6 - age*0.5)) - 1.0);
  float fing2 = 1.0 - abs(2.0*vnoise(vec2(u*19.0 + uSeed*7.0,  v*2.8 - age*0.8)) - 1.0);
  float cut = 1.0 - 0.34*pow(vnoise(vec2(u*13.0 + uSeed*11.0, uSeed)), 1.4) - 0.10*fing2;
  float crown = smoothstep(cut, cut - 0.05, v);
  float edge = (vnoise(vec2(u*8.0 + uSeed, v*10.0 - age*1.2)) - 0.5)*0.22
             + (vnoise(vec2(u*21.0 + uSeed*5.0, v*26.0)) - 0.5)*0.10;
  float d0 = abs(u - 0.5) + edge*mix(0.30, 1.20, v);
  float a = smoothstep(w, w - 0.07, d0) * crown;
  float dens = 0.55 + 0.45*smoothstep(0.15, 0.85, fing*0.60 + fing2*0.55);
  a *= mix(0.75, 1.05, dens);
  a = clamp(a + smoothstep(0.26, 0.0, v) * 0.40 * smoothstep(w + 0.50, w, d0), 0.0, 1.0);
  a *= smoothstep(0.0, 0.04, v);
  a *= 1.0 - smoothstep(2.4, 6.2, age);
  float lat = smoothstep(0.9, 0.1, abs(u - 0.40));
  vec3 col = uFoamTint * (0.55 + 0.45*lat) * (0.72 + 0.42*smoothstep(0.35, 0.95, v))
           * max(uSunI*0.55, 0.4) * (0.80 + 0.25*dens);
  for (int i=0;i<6;i++){
    if (i >= uEmitCount) break;
    vec4 E = uEmit[i];
    float d = length(vXY - E.xy);
    float fall = 1.0 / (1.0 + (d*d)/(E.z*E.z));
    // Spray is not a mirror: it takes the light flatly, all over, which
    // is why a plume beside a fire glows rather than glinting.
    col += uFoamTint * vec3(1.0, 0.62, 0.30) * E.w * fall * 1.6;
  }
  o = vec4(col, a*0.97);
}`,wl=300,Tl=9e3,El=3e5;function Dl(e){let n=e.getContext(`webgl2`,{antialias:!0,alpha:!1});if(n===null)throw Error(`WebGL2 unavailable`);let r=J(n,Zc,Qc),i=J(n,bl,xl),a=J(n,Sl,Cl),o=oa(n,wl),s=gl(n),c=qo(n),l=Uc(n),u=Rs(n),d=Qs(n),f=rc(n),p=cc(n),m=Fc(n),h=vc(n),g=1,_=(()=>{let e=new URLSearchParams(window.location.search).get(`glwx`);return e!==null&&e in ae?e:null})(),v=new URLSearchParams(window.location.search).get(`glfar`)===`0`?0:1,y=new URLSearchParams(window.location.search).get(`glarms`)===`0`?0:1,ee=()=>{let e=window.__KR_NIGHTX__;if(typeof e==`number`&&e>0)return e;let t=Number(new URLSearchParams(window.location.search).get(`nightx`));return Number.isFinite(t)&&t>0?t:null},x=0,S=0,C=ca(n);Na();let w=ja(),T=new Map,E=new Map,D=()=>{let e=ja();if(e!==w){w=e;for(let{vao:e,buffer:t}of T.values())n.deleteVertexArray(e),n.deleteBuffer(t);for(let{vao:e,buffer:t}of E.values())n.deleteVertexArray(e),n.deleteBuffer(t);T.clear(),E.clear()}},te=(e,t,r)=>{let i=`${e}:${t.mountId}:${r?`wreck`:`sound`}`,a=E.get(i);if(a!==void 0)return a;let o=sa(n,Ro(t,r));return E.set(i,o),o},ne=(e,t)=>{let r=`${e.cls}:${+!!t}`,i=T.get(r);if(i!==void 0)return i;let a=sa(n,to(e.cls,t).verts);return T.set(r,a),a};return{resize(t,r,i){g=i,x=t,S=r,e.width=Math.round(t*i),e.height=Math.round(r*i),e.style.width=`${t}px`,e.style.height=`${r}px`,n.viewport(0,0,e.width,e.height)},render(e,w,T,E,O){s.beginPlane(),D();let re=b(e.setting,e.tick,{x:0,y:0}),k=_e(he(e.setting,e.tick),t(e.setting.anchor,{x:0,y:0})),A=re.dark?`night`:k<9?`twilight`:`day`,ie=_??re.weather,j=ae[ie],oe=+(ie===`clear`||ie===`overcast`),M=A===`night`?ee():null,N=A===`night`?M===null?Te:Ee(Oe.night,M):Oe[A],P=be(e.setting.weatherSeed),le=xe(ie,P),ue=N.alt*Math.PI/180,de=N.az*Math.PI/180,F=[Math.sin(de)*Math.cos(ue),Math.cos(de)*Math.cos(ue),Math.sin(ue)],fe=[N.hazeCol[0]*j.skyMul,N.hazeCol[1]*j.skyMul,N.hazeCol[2]*j.skyMul];n.enable(n.DEPTH_TEST),n.clearColor(fe[0],fe[1],fe[2],1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.useProgram(r.program);let I=e=>r.uniform(e);n.uniformMatrix4fv(I(`uVP`),!1,T.viewProjection);let L=ko(T,x,S),R=Math.min(Math.max(L.spanMetres,Tl),El);n.uniform2f(I(`uOrigin`),L.centreX,L.centreY),n.uniform1f(I(`uExtent`),R),n.uniform1f(I(`uFarOn`),v),n.uniform1f(I(`uArmsOn`),y),n.uniform1i(I(`uTrackN`),ce(16)),n.uniform1f(I(`uFarBand`),j.farBand),n.uniform1f(I(`uT`),E);let pe=new Float32Array(16),z=new Float32Array(8);le.forEach((e,t)=>{pe.set([e.dx,e.dy,e.k,e.a],t*4),z.set([e.w,e.q],t*2)}),n.uniform4fv(I(`uWaveA`),pe),n.uniform2fv(I(`uWaveB`),z),n.uniform3f(I(`uCam`),T.eye[0],T.eye[1],T.eye[2]),n.uniform3fv(I(`uSunDir`),F),n.uniform3fv(I(`uSunCol`),Array.from(N.sun)),n.uniform1f(I(`uSunI`),N.sunI),n.uniform3fv(I(`uDeep`),[j.deep[0]*N.tint[0],j.deep[1]*N.tint[1],j.deep[2]*N.tint[2]]),n.uniform3fv(I(`uSkyTo`),[N.skyTo[0]*j.skyMul,N.skyTo[1]*j.skyMul,N.skyTo[2]*j.skyMul]),n.uniform3fv(I(`uSkyAway`),[N.skyAway[0]*j.skyMul,N.skyAway[1]*j.skyMul,N.skyAway[2]*j.skyMul]),n.uniform1f(I(`uSpec`),j.spec),n.uniform1f(I(`uGlitter`),j.glitter*(A===`night`?ye:1)),n.uniform1f(I(`uGlitZ`),Math.min(1,Math.max(.4,T.metresPerPxAtTarget/1.1)));let B=T.metresPerPxAtTarget/Math.max(g,.5);n.uniform1f(I(`uGlitFreq`),Math.min(1.35,1/(3*B))),n.uniform1f(I(`uFoamAmt`),j.foam),n.uniform1f(I(`uFoamThresh`),j.foamThresh),n.uniform3fv(I(`uFoamTint`),Array.from(N.foamTint)),n.uniform1f(I(`uStreak`),j.streak),n.uniform2f(I(`uWind`),Math.sin(P),Math.cos(P)),n.uniform1f(I(`uSeaAmp`),j.amp),n.uniform3fv(I(`uHaze`),fe),n.uniform2f(I(`uHazeP`),j.haze,j.hazeMax),n.uniform1f(I(`uHazeLift`),oe);let me=e.ships.find(e=>e.side===`raider`)??e.ships[0],ge=me===void 0?{x:0,y:0}:w.posOf(me);n.uniform2f(I(`uHome`),ge.x,ge.y);let V=ml(e,w.posOf,w.headingOf,E),ve=new Float32Array(24);ve.set(V),n.uniform1i(I(`uEmitCount`),Math.floor(V.length/4)),n.uniform4fv(I(`uEmit`),ve);let H=e.ships.filter(e=>O.hide?.(e)!==!0).sort((e,t)=>{let n=w.posOf(e),r=w.posOf(t);return Math.hypot(n.x-T.target[0],n.y-T.target[1])-Math.hypot(r.x-T.target[0],r.y-T.target[1])}).slice(0,6),Se=new Float32Array(24),Ce=new Float32Array(24),U=new Float32Array(24),we=new Float32Array(12),De=new Float32Array(6*vl*4);H.forEach((e,t)=>{let n=w.posOf(e),r=w.headingOf(e)*Math.PI/180,i=W[e.cls],a=O.sinkOf?.(e)??(e.sunk?.65:0);Se.set([n.x,n.y,Math.sin(r),Math.cos(r)],t*4),Ce.set([i.lengthMetres,i.beamMetres,e.motion.speedKnots*.5144,Math.min(a,1.2)],t*4),De.set(yl(n,e.track),t*vl*4);let o=_c(e,n);o!==null&&(U.set([o.ax,o.ay,o.bx,o.by],t*4),we.set([o.radiusMetres,o.strength],t*2))}),n.uniform1i(I(`uShipCount`),H.length),n.uniform4fv(I(`uShipA`),Se),n.uniform4fv(I(`uShipB`),Ce),n.uniform4fv(I(`uSlickA`),U),n.uniform2fv(I(`uSlickB`),we),n.uniform4fv(I(`uTrack`),De);let ke=ol(e,E),Ae=new Float32Array(48);ke.forEach((e,t)=>Ae.set(e,t*4)),n.uniform1i(I(`uSplashCount`),ke.length),n.uniform4fv(I(`uSplash`),Ae),n.bindVertexArray(o.vao),n.drawElements(n.TRIANGLES,o.indexCount,n.UNSIGNED_INT,0),h.draw(e.ships,w.posOf,w.headingOf,T,e=>Math.min(O.sinkOf?.(e)??(e.sunk?.65:0),1.2)),l.draw(e,w.posOf,T,al(E),10,B,zc(N.foamTint,N.sunI)),n.useProgram(i.program);let G=e=>i.uniform(e);n.uniformMatrix4fv(G(`uVP`),!1,T.viewProjection),n.uniform3f(G(`uCam`),T.eye[0],T.eye[1],T.eye[2]),n.uniform3fv(G(`uSunDir`),F),n.uniform3fv(G(`uSunCol`),Array.from(N.sun)),n.uniform1f(G(`uSunI`),N.sunI),n.uniform3fv(G(`uAmb`),Array.from(N.ambient)),n.uniform1f(G(`uAmbI`),N.ambI),n.uniform3fv(G(`uHaze`),fe),n.uniform2f(G(`uHazeP`),j.haze,j.hazeMax),n.uniform1f(G(`uHazeLift`),oe),n.uniform2f(G(`uHome`),ge.x,ge.y),n.uniform1i(G(`uEmitCount`),Math.floor(V.length/4)),n.uniform4fv(G(`uEmit`),ve),n.uniform1f(G(`uShadow`),0),Lo({gl:n,shipP:i,posOf:w.posOf,headingOf:w.headingOf,seaAt:(e,t)=>se(le,e,t,E),sinkOf:e=>O.sinkOf?.(e)??(e.sunk?.65:0),hullVao:t=>ne(t,Hn(e,t)===0),showMounts:t=>Hn(e,t)!==0,mountVao:te},H,G),n.uniform1f(G(`uBootZ`),Ca),u.draw(e,i,E/10%1,10,F,N.sunI),d.draw(e,T,E/10%1),p.draw(H,w.posOf,w.headingOf,T),f.draw(e,w.posOf,w.headingOf,T,E/10%1),n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),n.depthMask(!1),n.useProgram(a.program);let K=e=>a.uniform(e);n.uniformMatrix4fv(K(`uVP`),!1,T.viewProjection),n.uniform3f(K(`uCam`),T.eye[0],T.eye[1],T.eye[2]),n.uniform3fv(K(`uSunCol`),Array.from(N.sun)),n.uniform1f(K(`uSunI`),N.sunI),n.uniform3fv(K(`uFoamTint`),Array.from(N.foamTint)),n.uniform1i(K(`uEmitCount`),Math.floor(V.length/4)),n.uniform4fv(K(`uEmit`),ve),n.bindVertexArray(C),ke.forEach((e,t)=>{n.uniform4f(K(`uS`),e[0],e[1],e[2],e[3]),n.uniform1f(K(`uSeed`),t*3.7+1.1),n.uniform1f(K(`uWScale`),1),n.uniform1f(K(`uOff`),0),n.drawArrays(n.TRIANGLES,0,6),n.uniform1f(K(`uSeed`),t*3.7+31.7),n.uniform1f(K(`uWScale`),.72),n.uniform1f(K(`uOff`),.16),n.drawArrays(n.TRIANGLES,0,6)}),n.depthMask(!0),n.disable(n.BLEND),n.bindVertexArray(null);let je=[Math.min(1.2,N.sun[0]*N.sunI*.3+N.ambient[0]*N.ambI*.9),Math.min(1.2,N.sun[1]*N.sunI*.3+N.ambient[1]*N.ambI*.9),Math.min(1.2,N.sun[2]*N.sunI*.3+N.ambient[2]*N.ambI*.9)],Me=H;m.draw(e,Me,w.posOf,w.headingOf,T,E,E/10%1,[Math.sin(P),Math.cos(P)],je),c.draw(Me,w.posOf,w.headingOf,T,E,O.wallMs,[Math.sin(P),Math.cos(P)],je),s.endPlane()},meter:s}}var Ol=6e3;function kl(e){let{glCanvas:t}=e,n=!1,r=!1,i=null,a=null,o=()=>{if(a!==null)return;let n=e.buildFlat();n!==null&&(t.style.display=`none`,a=n)},s=()=>{if(!r){if(r=!0,e.onTrouble===void 0){o();return}e.onTrouble(o)}};return t.addEventListener(`webglcontextlost`,e=>{a===null&&(e.preventDefault(),n=!0,i!==null&&window.clearTimeout(i),i=window.setTimeout(s,Ol))}),t.addEventListener(`webglcontextrestored`,()=>{if(a===null){i!==null&&(window.clearTimeout(i),i=null);try{e.rebuildPlane(),n=!1,r=!1}catch{s()}}}),{isLost:()=>n,flatView:()=>a}}var Al=45;function jl(e){let t=new URLSearchParams(e),n=t.get(`pitch`),r=t.get(`glscale`);De(r===null?null:Number(r));let i=t.get(`fpscap`);Se(i===null?null:Number(i));let a=t.get(`glzoom`);return{pitchDeg:Ao(n===null?Al:Number(n)),devZoom:a===null?null:Number(a),devFocus:t.get(`glfocus`),showMeter:!1}}var Ml=.5;function Nl(e,t){if(N()||e>=900)return t;let n=Math.max(0,e)/900;return Ml+(t-Ml)*a(n)}function Pl(e){return!N()&&e<900}function Fl(){let e=null;return{arm(){N()||e===null&&(e=`armed`)},begin(t){e=N()?null:t},pitchDeg(t,n){if(e===null)return null;if(e===`armed`)return Ml;let r=t-e;return Pl(r)?Nl(r,n):(e=null,null)},cancel(){e=null},active(){return e!==null}}}var Il=.2;function Ll(e,t){let n=e.getContext(`2d`);if(n===null)throw Error(`Canvas 2D context unavailable`);let r=document.createElement(`canvas`);r.className=`battle-gl`,r.style.position=`fixed`,r.style.left=`0`,r.style.top=`0`,r.style.zIndex=`0`,r.style.pointerEvents=`none`;let i=Dl(r);e.style.position=`relative`,e.style.zIndex=`1`,e.parentElement?.insertBefore(r,e);let a=kl({glCanvas:r,rebuildPlane:()=>{i=Dl(r),f>0&&m>0&&i.resize(f,m,oe(h))},buildFlat:()=>{try{let t=aa(e);return f>0&&m>0&&t.resize(f,m),t}catch{return null}},onTrouble:t}),{pitchDeg:o,devZoom:s,devFocus:c,showMeter:l}=jl(window.location.search),u=o,f=0,m=0,h=1,g={x:0,y:0},_=20,v=!1,y=null,b=Fl(),ee=null,x=null,S=At(),C=Ze();function w(e){let t=e.ships.map(e=>S.posOf(e).x),n=e.ships.map(e=>S.posOf(e).y),r=Math.min(...t)-q,i=Math.max(...t)+q,a=Math.min(...n)-q,o=Math.max(...n)+q;g={x:(r+i)/2,y:(a+o)/2},_=Math.max((i-r)/Math.max(f,1),(o-a)/Math.max(m,1),Be/Math.max(Math.min(f,m),1))}function T(){let e=b.pitchDeg(performance.now(),u)??u;return D&&(window.__KR_PITCH__=e),e}function E(){return jo({targetX:g.x,targetY:g.y,pitchDeg:T(),zoomMetresPerPx:_,widthPx:f,heightPx:m})}let D=!1;function te(e,t){if(s!==null){let n;if(c===`fish`)n=e.torpedoes.find(e=>e.side===`raider`||e.sighted)?.pos;else if(c===`air`){let r=e.flights[0];if(r!==void 0){let e=B[r.aircraft].speedKnots*p*10*t,i=r.headingDeg*Math.PI/180;n={x:r.pos.x+Math.sin(i)*e,y:r.pos.y+Math.cos(i)*e}}}else{let t=c===`enemy`?e.ships.find(e=>e.side!==`raider`):e.ships.find(e=>e.side===`raider`);n=t===void 0?void 0:S.posOf(t)}n!==void 0&&(_=Math.max(ze,s),g={x:n.x,y:n.y-_*m*.2});return}v||w(e)}function ne(e,t){return{toScreen:t=>e.project(t.x,t.y),inFront:t=>e.inFrontOfEye(t.x,t.y),posOf:S.posOf,headingOf:S.headingOf,rudderOf:S.rudderOf,metresPerPx:e.metresPerPxAtTarget,frameFraction:t,animationMs:performance.now()}}function re(e,t,n,r){a.isLost()||i.render(e,{posOf:S.posOf,headingOf:S.headingOf},t,N()?0:n,r===null?{wallMs:performance.now()}:{wallMs:performance.now(),sinkOf:e=>e.sunk?Math.min(1.1,.45+r/20):0,hide:e=>e.sunk&&d(r)})}let k={resize(t,r){f=t,m=r,h=window.devicePixelRatio||1,e.width=Math.round(t*h),e.height=Math.round(r*h),e.style.width=`${t}px`,e.style.height=`${r}px`,n.setTransform(h,0,0,h,0,0),i.resize(t,r,oe(h))},render(e,t=0){let r=e.battle;if(r===null)return;i.meter.begin(),r.tick===0&&ee!==r.setting.startTimeHours&&(ee=r.setting.startTimeHours,b.arm()),y=r,S.step(r,t);let a=S.frameFraction();te(r,a);let o=E();re(r,o,(r.tick+a)*10,null),n.clearRect(0,0,f,m);let s=ne(o,a),c=r.ships.find(e=>e.side===`raider`);c!==void 0&&ue(n,c,s),Pr(n,r,s),wn(n,r,s),kr(n,r,s),Fr(n,r,s),C.draw(n,r,s),zt(n,r,f,S.posOf),l&&(n.fillStyle=`rgba(223, 230, 234, 0.8)`,n.font=`11px monospace`,n.textAlign=`right`,i.meter.readout().forEach((e,t)=>{n.fillText(e,f-8,14+t*13)}),n.textAlign=`left`),i.meter.end()},renderAftermath(e,t){b.cancel(),ee=null,y=e,S.step(e,Math.min(t,8)),te(e,0);let r=E();re(e,r,e.tick*10+t,t),n.clearRect(0,0,f,m);let i=ne(r,t/10);for(let r of e.ships)r.sunk&&O(n,r,i,t)},screenToPlane(e,t){let n=E().groundFromScreen(e,t);return{x:n.x,y:n.y}},shipAt(e,t){if(y===null)return null;let n=E(),r=null;for(let i of y.ships){let a=n.project(S.posOf(i).x,S.posOf(i).y),o=Math.hypot(a.x-e,a.y-t);o<28&&(r===null||o<r.d)&&(r={id:i.id,d:o})}return r?.id??null},panByPixels(e,t){v=!0,g={x:g.x-e*_,y:g.y+t*_}},zoomBy(e,t,n){v=!0;let r=E().groundFromScreen(t,n);_=Math.max(ze,Math.min(400,_/e));let i=jo({targetX:g.x,targetY:g.y,pitchDeg:u,zoomMetresPerPx:_,widthPx:f,heightPx:m}).groundFromScreen(t,n);g={x:g.x+(r.x-i.x),y:g.y+(r.y-i.y)}},tiltByPixels(e){u=Ao(u-e*Il),b.cancel()},recenter(){v=!1},isManual(){return v},setReport(e){x=e},reportShipId(){return x},beginEntry(){if(y!==null&&y.tick>0){b.cancel();return}b.begin(performance.now())},setLayersVisible(e){r.style.display=e?``:`none`}},A=()=>a.flatView()??k;return{resize(e,t){f=e,m=t,A().resize(e,t)},render:(e,t)=>A().render(e,t),renderAftermath:(e,t)=>A().renderAftermath(e,t),screenToPlane:(e,t)=>A().screenToPlane(e,t),shipAt:(e,t)=>A().shipAt(e,t),panByPixels:(e,t)=>A().panByPixels(e,t),zoomBy:(e,t,n)=>A().zoomBy(e,t,n),tiltByPixels:e=>A().tiltByPixels?.(e),recenter:()=>A().recenter(),isManual:()=>A().isManual(),setReport:e=>A().setReport(e),reportShipId:()=>A().reportShipId(),beginEntry:()=>A().beginEntry?.(),setLayersVisible(e){let t=a.flatView();if(t!==null){t.setLayersVisible?.(e);return}k.setLayersVisible?.(e)}}}function Rl(e){let t=new URLSearchParams(e).get(`gl`);return t===null?!0:t!==`0`&&t!==`off`&&t!==`false`}function zl(e,t,n){if(!Rl(t))return{view:aa(e),fellBack:!1};try{return{view:Ll(e,n),fellBack:!1}}catch{return{view:aa(e),fellBack:!0}}}export{zl as chooseBattleView};