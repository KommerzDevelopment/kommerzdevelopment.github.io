import{$ as e,$t as t,A as n,At as r,B as i,Bt as a,C as o,Ct as s,D as c,Dt as l,E as u,Et as d,F as f,Ft as p,G as m,Gt as h,H as g,Ht as _,I as v,It as y,J as b,Jt as x,K as ee,Kt as S,L as te,Lt as C,M as w,Mt as T,N as ne,Nt as E,O as re,Ot as D,P as ie,Pt as O,Q as k,Qt as A,R as j,Rt as M,S as ae,St as N,T as P,Tt as F,U as oe,Ut as se,V as ce,Vt as I,Wt as L,X as le,Xt as R,Y as ue,Yt as de,Z as fe,Zt as pe,_ as me,_t as z,a as he,at as B,b as ge,bt as _e,c as ve,ct as ye,d as be,dt as xe,en as Se,et as Ce,f as we,ft as Te,g as Ee,gt as De,h as Oe,ht as V,i as H,it as ke,j as Ae,jt as je,k as Me,kt as Ne,l as Pe,lt as Fe,m as Ie,mt as Le,n as Re,nt as ze,o as Be,ot as Ve,p as He,pt as Ue,q as We,qt as U,r as Ge,rt as Ke,s as qe,st as Je,t as Ye,tn as Xe,tt as Ze,u as Qe,ut as $e,v as et,vt as tt,w as nt,wt as rt,x as it,xt as W,y as at,yt as ot,z as st,zt as G}from"./index-Del4L-1A.js";var ct=1.2,lt=9e3,K=4e3,ut={hit:`#d64541`,bounce:`#e0b64e`,miss:`#7fb4cc`,overpen:`#b9a7e0`,fire:`#e8813c`,torpedo:`#e8e2d0`},dt={hit:`HIT`,bounce:`BOUNCE`,overpen:`OVERPEN`,fire:`FIRE`,torpedo:`TORPEDO`};function ft(e,t,n,r,i){let a=ut[t],o=1-(1-r)**3;if(e.strokeStyle=a,e.fillStyle=a,e.lineWidth=3,t===`hit`)e.beginPath(),e.moveTo(0,-9),e.lineTo(9,0),e.lineTo(0,9),e.lineTo(-9,0),e.closePath(),e.fill(),r<.3&&(e.globalAlpha=i*(1-r/.3),e.beginPath(),e.arc(0,0,12+r/.3*34,0,Math.PI*2),e.stroke(),n&&(e.beginPath(),e.arc(0,0,6+r/.3*24,0,Math.PI*2),e.stroke()));else if(t===`overpen`)e.beginPath(),e.moveTo(0,-9),e.lineTo(9,0),e.lineTo(0,9),e.lineTo(-9,0),e.closePath(),e.stroke();else if(t===`fire`){let t=.75+.25*Math.min(1,r*4);e.save(),e.scale(t,t),e.beginPath(),e.moveTo(0,10),e.bezierCurveTo(-9,5,-7,-3,-2,-7),e.bezierCurveTo(-3,-2,1,-3,2,-12),e.bezierCurveTo(7,-6,9,3,4,9),e.closePath(),e.fill(),e.fillStyle=`rgba(11, 21, 25, 0.8)`,e.beginPath(),e.moveTo(0,9),e.bezierCurveTo(-3,5,-2,2,0,-1),e.bezierCurveTo(2,2,3,5,0,9),e.closePath(),e.fill(),e.restore()}else if(t===`torpedo`)e.lineWidth=2.5,e.beginPath(),e.moveTo(-12,-3.5),e.lineTo(6,-3.5),e.quadraticCurveTo(12,0,6,3.5),e.lineTo(-12,3.5),e.closePath(),e.fill(),e.beginPath(),e.moveTo(-12,-6),e.lineTo(-15,-6),e.moveTo(-12,6),e.lineTo(-15,6),e.moveTo(-12,-3.5),e.lineTo(-12,3.5),e.stroke(),r<.45&&(e.globalAlpha=i*(1-r/.45),e.strokeStyle=ut.hit,e.beginPath(),e.arc(0,0,14+r/.45*40,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(0,0,8+r/.45*26,0,Math.PI*2),e.stroke());else if(t===`bounce`)e.beginPath(),e.moveTo(-12,8),e.lineTo(0,2),e.lineTo(10,-10),e.stroke(),e.beginPath(),e.moveTo(10,-10),e.lineTo(4,-9),e.moveTo(10,-10),e.lineTo(9,-4),e.stroke();else{let t=Math.sin(Math.PI*Math.min(1,r*1.5));e.lineWidth=2.5,e.lineCap=`round`,e.beginPath(),e.moveTo(0,0),e.lineTo(0,-16*t),e.moveTo(-5,0),e.lineTo(-9,-10*t),e.moveTo(5,0),e.lineTo(9,-10*t),e.moveTo(-2.5,0),e.lineTo(-4,-13*t),e.moveTo(2.5,0),e.lineTo(4,-13*t),e.stroke(),e.globalAlpha=i*.45,e.beginPath(),e.ellipse(0,2,8+20*o,3+7*o,0,0,Math.PI*2),e.stroke()}let s=dt[t];s!==void 0&&(e.globalAlpha=i,e.font=S(11,`bold`),e.textAlign=`center`,e.fillStyle=a,e.fillText(s,0,26))}var pt=1600,mt=.5,ht=22*mt,gt=58*mt,_t=44*mt,vt=3,yt=2;function bt(){let e=[],t=new Set;function n(t,n,r,i){let a=e.filter(e=>e.targetId===n).length;e.push({kind:t,targetId:n,world:{x:0,y:0},smashing:r,bornMs:i,shelf:a})}return{draw(r,i,a){let o=a.animationMs;e=e.filter(e=>o-e.bornMs<pt);let s=new Set,c=new Set;for(let r of i.falls){let a=`f:${r.shooterId}:${r.tick}:${Math.round(r.pos.x)}:${Math.round(r.pos.y)}`;if(s.add(a),!(t.has(a)||r.tick<=i.tick-yt)){if(r.hits===0){let t=`${r.shooterId}:${r.tick}`;c.has(t)||(c.add(t),e.push({kind:`miss`,targetId:null,world:r.pos,smashing:!1,bornMs:o,shelf:0}))}else if(r.outcomes!==void 0){let e=r.outcomes;e.effective>0&&n(`hit`,r.targetId,e.smashing,o),e.fires>0&&n(`fire`,r.targetId,!1,o),e.overpens>0&&n(`overpen`,r.targetId,!1,o),e.bounces>0&&n(`bounce`,r.targetId,!1,o)}}}for(let e of i.torpedoHits){let r=`t:${e.shooterId}:${e.targetId}:${e.tick}:${Math.round(e.pos.x)}`;s.add(r),!t.has(r)&&e.tick>i.tick-yt&&n(`torpedo`,e.targetId,!1,o)}t=s;let l=e.filter(e=>e.kind===`miss`),u=l.length>vt?new Set([...l].sort((e,t)=>e.bornMs-t.bornMs).slice(0,l.length-vt)):null;u!==null&&(e=e.filter(e=>!u.has(e)));for(let t of e){let e=(o-t.bornMs)/pt,n,s=0;if(t.targetId===null)n=t.world;else{let e=i.ships.find(e=>e.id===t.targetId);if(e===void 0)continue;n=a.posOf(e),s=W(e.cls,a.metresPerPx).lengthPx*.5+20}if(!a.inFront(n))continue;let c=a.toScreen(n),l=_()?0:ht*(1-(1-e)**3),u=e<.7?1:1-(e-.7)/.3;r.save(),r.globalAlpha=u,r.translate(c.x+t.shelf%4*gt,c.y-s-Math.floor(t.shelf/4)*_t-l),r.scale(mt,mt),ft(r,t.kind,t.smashing,e,u),r.restore()}}}}function xt(e,t){return[e,...(t??[]).slice(1)]}function St(e,t){let n=xt(e,t),r=0;for(let e=1;e<n.length;e+=1){let t=n[e-1],i=n[e];t!==void 0&&i!==void 0&&(r+=Math.hypot(i.x-t.x,i.y-t.y))}return r}function Ct(e,t,n){let r=xt(e,t),i=r[0]??e,a=Math.max(0,n);for(let e=1;e<r.length;e+=1){let t=r[e];if(t===void 0)continue;let n=t.x-i.x,o=t.y-i.y,s=Math.hypot(n,o);if(s>=a&&s>0){let e=a/s;return{x:i.x+n*e,y:i.y+o*e}}a-=s,i=t}return i}function wt(e,t,n,r){let i=Ct(e,t,n),a=Ct(e,t,n+1),o=a.x-i.x,s=a.y-i.y,c=Math.hypot(o,s);return c<1e-6?r:{x:o/c,y:s/c}}var Tt=`18, 19, 23`,Et=8,Dt=5;function Ot(e){let t=e.flooding.fore.holes+e.flooding.mid.holes+e.flooding.aft.holes;return Math.min(1,t*8+ye(e.flooding)*.25)}function kt(e,t){return e*(.9+1.9*C(t))}function At(e,t,n){for(let r of t.ships){let t=Ot(r);if(t<.08)continue;let i=W(r.cls,n.metresPerPx),o=n.posOf(r),s=n.toScreen(o),c=n.headingOf(r)*Math.PI/180,l={x:-Math.sin(c),y:-Math.cos(c)},u=M(r.id),d=Math.max(3,i.beamPx);if(!r.sunk&&r.motion.speedKnots>.5){let s=i.lengthPx/2*n.metresPerPx,c=kt(i.lengthPx*n.metresPerPx,t),f=St(o,r.track);for(let i=0;i<Et;i+=1){let p=(i+1)/Et,m=s+p*c;if(m>f)break;let h=n.toScreen(Ct(o,r.track,m)),g=wt(o,r.track,m,l),_=(L(u,i,30)-.5)*d*1.4*p,v=a(d*.4,d*1.35,C(p));e.fillStyle=`rgba(${Tt}, ${(.3*t*(1-.7*p)).toFixed(3)})`,e.beginPath(),e.arc(h.x+g.y*_,h.y+g.x*_,v,0,2*Math.PI),e.fill()}}else for(let n=0;n<Dt;n+=1){let r=L(u,n,33)*2*Math.PI,a=L(u,n,34)*i.lengthPx*.45,o=d*(.8+1.1*L(u,n,35))*(.5+.5*t);e.fillStyle=`rgba(${Tt}, ${(.26*t).toFixed(3)})`,e.beginPath(),e.arc(s.x+Math.cos(r)*a,s.y+Math.sin(r)*a,o,0,2*Math.PI),e.fill()}}}var jt=1.2,Mt=`52, 54, 60`,Nt=`112, 116, 124`,Pt=`255, 182, 92`,Ft=6,It=5;function Lt(e,t,r,i,o,s){for(let c of t.ships){if(c.sunk||c.subsystems.engines===`out`)continue;let t=Math.abs(c.motion.speedKnots),l=Math.min(1,t/20),u=W(c.cls,r.metresPerPx),d=r.toScreen(r.posOf(c)),f=r.headingOf(c)*Math.PI/180,p=Math.sin(f),m=-Math.cos(f),h=i*.45+p*l,g=o*.45+m*l,_=Math.hypot(h,g)||1,v=.35+.65*l;for(let t of n[c.cls].funnels){let n=t*u.lengthPx,r=d.x-Math.sin(f)*n,i=d.y+Math.cos(f)*n,o=M(`${c.id}:funnel:${t}`),p=(3+4*l)*Math.max(1,u.beamPx/5);for(let t=0;t<It;t+=1){let n=(t+1)/It,c=(L(o,t,s)-.5)*p*n,d=(L(o,t,s+1)-.5)*p*n,f=r+h/_*p*(t+1)+c,m=i+g/_*p*(t+1)+d,y=a(1.2,3.2+2.4*l,C(n))*Math.max(1,u.beamPx/6);e.fillStyle=`rgba(${Nt}, ${(.14*v*(1-.8*n)).toFixed(3)})`,e.beginPath(),e.arc(f,m,y,0,2*Math.PI),e.fill()}}}}function Rt(e,t,n){let r=rt(t.setting.weatherSeed),i=Math.sin(r),o=-Math.cos(r),s=(t.tick+n.frameFraction)*10,c=Math.floor(s/jt);Lt(e,t,n,i,o,c);for(let r of t.ships){if(r.sunk||r.fires.length===0)continue;let t=W(r.cls,n.metresPerPx),l=n.toScreen(n.posOf(r)),u=n.headingOf(r)*Math.PI/180;for(let d of r.fires){let f=Ie(d.zone,t.lengthPx),p=l.x-Math.sin(u)*f,m=l.y+Math.cos(u)*f,h=M(`${r.id}:${d.zone}`),g=.4+.6*d.intensity,_=4+5*g;for(let t=0;t<Ft;t+=1){let n=(t+1)/Ft,r=(L(h,t,c*2)-.5)*_*1.1*n,s=(L(h,t,c*2+1)-.5)*_*1.1*n,l=p+i*_*(t+1)+r,u=m+o*_*(t+1)+s,d=a(2.2,7+4*g,C(n));e.fillStyle=`rgba(${Mt}, ${.3*g*(1-.85*n)})`,e.beginPath(),e.arc(l,u,d,0,2*Math.PI),e.fill()}let v=2+Math.round(3*d.intensity);for(let t=0;t<v;t+=1){let r=(s/(1.6+1.8*L(h,t,7))+L(h,t,8))%1,a=C(r)*(9+10*L(h,t,9)),c=(L(h,t,10)-.5)*6*r,l=.6+.4*Math.sin(n.animationMs/90+t*2.4);e.fillStyle=`rgba(${Pt}, ${(1-r)*.85*l})`,e.beginPath(),e.arc(p+i*a-o*c,m+o*a+i*c,.9,0,2*Math.PI),e.fill()}}}}var zt=.55,Bt=.3,Vt=6,Ht=16,Ut=981,Wt={fore:.3,mid:.02,aft:-.3};function Gt(e){let t=e.steps??1;return e.outcome===`penetrated`||e.outcome===`wrecked`?Math.min(Ht,Vt*t):e.outcome===`overpenetrated`?Math.min(Ht,Math.round(Vt*.6*t)):Math.min(Ht,Math.round(Vt*.7))}function Kt(e){return e.outcome===`bounced`||e.outcome===`smothered`}function qt(e,t,n,r,i,a){let o=Kt(e),s=o?Bt:zt;if(i<0||i>=s)return[];let c=e.steps??1,l=[];for(let e=0;e<a;e+=1){let a=o?.55:2.2,u=r+(G(t,e*4)-.5)*2*a,d=o?.12+G(t,e*4+1)*.35:.15+G(t,e*4+1)*1.1,f=o?600+G(t,e*4+2)*600:(140+G(t,e*4+2)*260)*(.75+.25*c),p=e=>{let t=Math.cos(d)*f*e;return[n.x+Math.sin(u)*t,n.y+Math.cos(u)*t,n.z+Math.sin(d)*f*e-.5*Ut*e*e]},m=p(i);if(m[2]<=0)continue;let h=p(Math.max(0,i-(o?.02:.01))),g=1-i/s;l.push({x:m[0],y:m[1],z:m[2],px:h[0],py:h[1],pz:h[2],halfWidth:o?.55+G(t,e*4+3)*.5:(.6+G(t,e*4+3)*.9)*(.75+.25*c),alpha:o?g:g*.92,hot:o?.85+.15*G(t,e*4+3):.18*g})}return l}var Jt=`87, 86, 88`,Yt=`255, 209, 128`;function Xt(e,t,n){let r=t.tick+n.frameFraction;e.save(),e.lineCap=`round`;for(let i of t.falls){let a=i.sites;if(a===void 0||a.length===0)continue;let o=r-i.tick;if(o<0||o>=.55)continue;let s=t.ships.find(e=>e.id===i.targetId),c=t.ships.find(e=>e.id===i.shooterId);if(s===void 0)continue;let l=n.posOf(s),u=n.headingOf(s)*Math.PI/180,f=F[s.cls].lengthMetres,p=c===void 0?null:n.posOf(c),m=p===null?u:Math.atan2(l.x-p.x,l.y-p.y);a.forEach((t,r)=>{if(Kt(t)&&o>=.3)return;let a=(Wt[t.zone]??0)*f,s={x:l.x+Math.sin(u)*a,y:l.y+Math.cos(u)*a,z:11},c=qt(t,M(`${i.shooterId}:${i.targetId}`)+i.tick*7919+r*131|0,s,m,o,d(Gt(t)));for(let t of c){let r=n.toScreen({x:t.px,y:t.py}),i=n.toScreen({x:t.x,y:t.y});e.strokeStyle=`rgba(${t.hot>.5?Yt:Jt}, ${t.alpha.toFixed(3)})`,e.lineWidth=Math.max(.9,t.halfWidth*2/n.metresPerPx),e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(i.x,i.y),e.stroke()}})}e.restore()}function Zt(e){return{pos:e.motion.pos,headingDeg:e.motion.headingDeg,rudder:e.motion.rudder??0}}function Qt(e,t,n){return(e+((t-e+540)%360-180)*n+360)%360}function $t(){let e=new Map,t=new Map,n=-1,r=0;return{step(i,a){let o=Math.max(0,Math.min(10,a));if(i.tick<n&&(e.clear(),t.clear(),n=-1),i.tick!==n){for(let n of i.ships){let r=t.get(n.id),i=Zt(n);e.set(n.id,r??i),t.set(n.id,i)}n=i.tick,r=o/10;return}r=Math.max(r,o/10)},posOf(n){let i=e.get(n.id),a=t.get(n.id);return i===void 0||a===void 0?n.motion.pos:{x:i.pos.x+(a.pos.x-i.pos.x)*r,y:i.pos.y+(a.pos.y-i.pos.y)*r}},headingOf(n){let i=e.get(n.id),a=t.get(n.id);return i===void 0||a===void 0?n.motion.headingDeg:Qt(i.headingDeg,a.headingDeg,r)},rudderOf(n){let i=e.get(n.id),a=t.get(n.id);return i===void 0||a===void 0?n.motion.rudder??0:i.rudder+(a.rudder-i.rudder)*r},frameFraction(){return r}}}var en=`rgba(11, 18, 32, 0.75)`,tn=`rgba(230, 240, 255, 0.9)`,nn=`rgba(230, 240, 255, 0.35)`,rn=`rgba(230, 240, 255, 0.25)`,an=`rgba(255, 150, 60, 0.95)`,on=`rgba(255, 255, 255, 0.75)`,sn=.02;function cn(e,t,n){return e.solutions.find(e=>e.shooterId===t&&e.targetId===n)?.value??0}function ln(e,t,n,r){let a=t.ships.find(e=>e.side===`raider`);if(a===void 0)return;let o=t.ships.filter(e=>e.side===`enemy`&&!e.sunk&&!e.struckColours);if(o.length===0)return;let s=a.mounts.find(e=>e.targetId!==null)?.targetId,c=o.find(e=>e.id===s)??o[0];if(c===void 0)return;let l=(e,n)=>{let r=Ae(t,e,n);return Math.max(i(e,n,r),ce(e,n,r))},u=[{label:U.battleOurSolution,value:cn(t,a.id,c.id),ceiling:l(a,c)},...o.map((e,n)=>({label:e.name??(o.length>1?`${U.battleEnemySolution} ▸${n+1}`:U.battleEnemySolution),value:cn(t,e.id,a.id),ceiling:l(e,a)}))];e.font=S(10);for(let[t,n]of u.entries()){let r=44+t*26,i=t===0;e.fillStyle=en,e.fillRect(10,r,130,8),e.fillStyle=!i&&n.value>=.5?an:tn,e.fillRect(10,r,130*n.value,8),e.fillStyle=rn,e.fillRect(10+130*Xe.minSolutionToFire-.5,r,1,8),e.fillStyle=nn,e.fillRect(10+130*n.ceiling-1,r-2,2,12),e.fillStyle=on;let a=n.value<n.ceiling-sn?`▲`:n.value>n.ceiling+sn?`▼`:``;a!==``&&e.fillText(a,144,r+8),i&&n.value<Xe.minSolutionToFire&&e.fillText(U.battleHoldingFire,156,r+8),e.fillText(n.label,10,r+19)}let d=r(a),f=Math.min(...o.map(e=>Math.hypot(r(e).x-d.x,r(e).y-d.y))),p=b(t.setting,t.tick,a.motion.pos);e.fillStyle=on,e.textAlign=`center`,e.fillText(`${(f/1e3).toFixed(1)} km · ${Me(x[p.weather],re(t.setting,t.tick,a.motion.pos),p.dark)}`,n/2,16),e.fillText(dn(t,o.length),n/2,30),e.textAlign=`left`}function un(e){let t=e.disguise;if(t===void 0)return null;if(t.seenThroughAtTick!==null)return U.battleLieSeenThrough;if(t.phase!==`standing`)return null;if(g(t))return U.battleLieSatisfied;if(t.suspicion>=t.threshold*de.challengeFraction)return U.battleLieChallenge;let n=e.ships.find(e=>e.side===`raider`&&!e.sunk),r=e.ships.find(e=>e.side===`enemy`&&!e.sunk);return n===void 0||r===void 0?null:Math.hypot(r.motion.pos.x-n.motion.pos.x,r.motion.pos.y-n.motion.pos.y)<=de.inspectionRangeMetres*de.satisfiedRangeFactor?U.battleLieAlongside:U.battleLieClosing}function dn(e,t){let n=un(e);if(n!==null)return n;if(We(e))return fn(e);switch(ee(e)){case`held`:return t>1?U.battleContactHeldMany:U.battleContactHeld;case`gunfire`:return U.battleContactGunfire;case`closing`:return U.battleContactClosing;case`slipping`:return pn(e,U.battleContactSlipping);case`outranged`:return pn(e,U.battleContactOutranged)}}function fn(e){switch(ee(e)){case`held`:return U.battleContactConvoyOpen.replaceAll(`{km}`,String(A.crippledDisengageMetres/1e3));case`gunfire`:return U.battleContactConvoyGunfire;case`closing`:return U.battleContactConvoyClosing;case`slipping`:case`outranged`:return pn(e,U.battleContactConvoyClear)}}function pn(e,t){let n=A.escapeHoldTicks-e.contactBrokenTicks,r=Math.max(1,Math.ceil(n*10/60));return t.replaceAll(`{min}`,String(r))}var mn=`rgba(228, 234, 242, 0.95)`,hn=`rgba(10, 16, 24, 0.28)`,gn=60,_n=.514444;function vn(e,t,n,r,i,a=mn){e.save(),e.translate(t,n),e.rotate(r*Math.PI/180),e.strokeStyle=a,e.lineWidth=Math.max(1,i*.16),e.beginPath(),e.moveTo(0,-i*.55),e.lineTo(0,i*.45),e.moveTo(-i*.5,-i*.12),e.lineTo(i*.5,-i*.12),e.moveTo(-i*.22,i*.38),e.lineTo(i*.22,i*.38),e.stroke(),e.restore()}function yn(e,t){let n=oe[e.aircraft].speedKnots*_n*10*Math.min(1,Math.max(0,t.frameFraction)),r=e.headingDeg*Math.PI/180;return{x:e.pos.x+Math.sin(r)*n,y:e.pos.y+Math.cos(r)*n}}function bn(e){return Math.max(7,Math.min(16,26/Math.sqrt(e)))}function xn(e){if(e===0)return{back:0,out:0};let t=Math.ceil(e/2),n=e%2==1?-1:1;return{back:t*gn,out:n*t*gn}}function Sn(e,t,n){for(let r of t.flights)Cn(e,r,n)}function Cn(e,t,n){let r=yn(t,n),i=t.headingDeg*Math.PI/180,a=bn(n.metresPerPx),o=Math.cos(i),s=Math.sin(i);for(let i=0;i<t.count;i++){let c=xn(i),l={x:r.x-s*c.back-o*c.out,y:r.y-o*c.back+s*c.out},u=n.toScreen(l);e.strokeStyle=hn,e.lineWidth=Math.max(1,a*.14),e.beginPath(),e.moveTo(u.x+a*.5,u.y+a*.7),e.lineTo(u.x+a*1.1,u.y+a*.7),e.stroke(),vn(e,u.x,u.y,t.headingDeg,a)}}var wn=9e3,Tn=7e3,En=.6;function Dn(e){return M(`${e.tick}:${e.style}:${Math.round(e.to.x)}:${Math.round(e.to.y)}`)}function On(e){return e.style===`tracer`?Math.round(4+8*e.intensity):2}function kn(e,t,n,r){return e.tick+(n+L(t,n,0))/r}var An=[.4,.6],jn=.8;function Mn(e,t){if(e.headingDeg===void 0||t===void 0)return[e.from,e.from];let n=F[t],r=e.headingDeg*Math.PI/180,i=Math.sin(r),a=Math.cos(r),o=a,s=-i,c=((e.to.x-e.from.x)*o+(e.to.y-e.from.y)*s>=0?1:-1)*jn*(n.beamMetres/2),l=e.from.x+o*c,u=e.from.y+s*c,d=e=>{let t=(.5-e)*n.lengthMetres;return{x:l+i*t,y:u+a*t}};return[d(An[0]),d(An[1])]}function Nn(e,t,n,r){let i=e.to.x-e.from.x,a=e.to.y-e.from.y,o=(L(t,n,1)-.5)*2*150,s=(L(t,n,2)-.5)*2*150;return{x:e.to.x+-a/r*o+i/r*s,y:e.to.y+i/r*o+a/r*s}}function Pn(e,t,n,r,i,a,o){if(r<.5)return;let s=r,c=i*.9,l=i*(.36+.1*L(a,o,20)),u=i*(.44+.16*L(a,o,21)),d=(L(a,o,22)-.5)*.3*s,f=t+d,p=1+.08*L(a,o,23),m=.98+.09*L(a,o,24);e.beginPath(),e.moveTo(t-c,n),e.quadraticCurveTo(t-c*.72,n-s*.34,t+d*.55-l,n-s*.64),e.quadraticCurveTo(f-u*1.08,n-s*.8,f-u,n-s*.92),e.quadraticCurveTo(f-u*.65,n-s*(p+.05),f-u*.12,n-s*p*.99),e.quadraticCurveTo(f+u*.22,n-s*(m+.06),f+u*.55,n-s*m*.96),e.quadraticCurveTo(f+u*1.05,n-s*.86,t+d*.55+l,n-s*.62),e.quadraticCurveTo(t+c*.72,n-s*.32,t+c,n),e.closePath(),e.fill()}var Fn=`rgba(255, 214, 138, 0.95)`,In=`rgba(255, 214, 138, 0.4)`,Ln=`rgba(236, 242, 250, 0.95)`,Rn=`255, 196, 110`,zn=`62, 66, 74`,Bn=`rgba(230, 240, 255, 0.85)`,Vn=`96, 100, 108`,Hn=`#d64541`,Un=.5,Wn=.35,Gn=.5,Kn=592;function qn(e,t,n){let r=t.tick+p(n.frameFraction),i=t.ships.find(e=>e.side===`raider`)?.cls;for(let a of t.aaFire??[])Yn(e,a,i,r,n);Jn(e,t,n)}function Jn(e,t,n){let r=t.tick+p(n.frameFraction);for(let i of t.aaDowned??[])n.inFront(i.pos)&&$n(e,i,r,n)}function Yn(e,t,n,r,i){let a=Dn(t),o=t.to.x-t.from.x,s=t.to.y-t.from.y,c=Math.hypot(o,s);if(c<1)return;let l=c/(t.style===`tracer`?wn:Tn),u=On(t),d=Mn(t,n);for(let n=0;n<u;n+=1){let o=r-kn(t,a,n,u);if(o<0)continue;let s=Nn(t,a,n,c),f=o/l;f<=1?Xn(e,t,d[n%2],f,s,i):t.style===`burst`&&Zn(e,a,n,o-l,s,i)}}function Xn(e,t,n,r,i,a){let o=e=>a.toScreen({x:n.x+(i.x-n.x)*e,y:n.y+(i.y-n.y)*e}),s=o(r),c=o(Math.max(0,r-(t.style===`tracer`?.045:.03)));e.strokeStyle=In,e.lineWidth=t.style===`tracer`?1.2:1.6,e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(s.x,s.y),e.stroke(),e.fillStyle=t.style===`tracer`?Fn:Ln,e.beginPath(),e.arc(s.x,s.y,t.style===`tracer`?1.4:2.2,0,Math.PI*2),e.fill()}function Zn(e,t,n,r,i,a){let o=r/En;if(o>=1)return;let s=a.toScreen(i),c=bn(a.metresPerPx);if(o<.12){let t=o/.12;e.fillStyle=`rgba(${Rn}, ${.95*(1-t)})`,e.beginPath(),e.arc(s.x,s.y,c*(.25+.45*t),0,Math.PI*2),e.fill()}let l=C(o),u=.65*(1-o);for(let r=0;r<3;r+=1){let i=L(t,n,10+r)*Math.PI*2,a=c*.3*l*(.4+L(t,n,13+r)),o=c*(.28+.55*l)*(.7+.5*L(t,n,16+r));e.fillStyle=`rgba(${zn}, ${u*(.7+.3*L(t,n,19+r))})`,e.beginPath(),e.arc(s.x+Math.cos(i)*a,s.y+Math.sin(i)*a,o,0,Math.PI*2),e.fill()}}function Qn(e,t,n){let r=e.headingDeg??L(t,0,30)*360,i=L(t,0,31)<.5?-1:1,a=p(n),o=e.pos.x,s=e.pos.y;for(let e=0;e<10;e+=1){let t=e/10;if(t>=a)break;let n=Math.min((e+1)/10,a)-t,c=t+n/2,l=r+i*165*y(c),u=Kn*(1-.7*c),d=l*Math.PI/180;o+=Math.sin(d)*u*n*Un,s+=Math.cos(d)*u*n*Un}return{x:o,y:s,headingDeg:r+i*165*y(a)}}function $n(e,t,n,r){let i=M(`${t.tick}:${Math.round(t.pos.x)}:${Math.round(t.pos.y)}`),a=se(n-t.tick,[Un,Wn,Gn]);if(a.done)return;let o=bn(r.metresPerPx),s=r.toScreen(Qn(t,i,1));if(a.seg===0){let n=a.t;for(let a=1;a<=5;a+=1){let s=Qn(t,i,n-a*.08),c=r.toScreen(s);e.fillStyle=`rgba(${Vn}, ${.4*(1-a/6)})`,e.beginPath(),e.arc(c.x,c.y,o*.16*(1+a*.25),0,Math.PI*2),e.fill()}let s=Qn(t,i,n),c=r.toScreen(s),l=1-y(n);e.strokeStyle=`rgba(10, 16, 24, 0.28)`,e.lineWidth=Math.max(1,o*.14),e.beginPath(),e.moveTo(c.x+o*.5*l,c.y+o*.7*l),e.lineTo(c.x+o*1.1*l,c.y+o*.7*l),e.stroke(),vn(e,c.x,c.y,s.headingDeg,o*(1-.3*n),`rgba(228, 234, 242, ${.95-.25*n})`);return}if(a.seg===1){let t=O(a.t)*o*2.2;t>.5&&(e.fillStyle=Bn,Pn(e,s.x,s.y,t,o*.55,i,0)),e.fillStyle=`rgba(230, 240, 255, ${.4*(1-a.t)})`,e.beginPath(),e.ellipse(s.x,s.y+1,o*(.5+a.t),o*(.2+.35*a.t),0,0,Math.PI*2),e.fill()}let c=a.seg===1?a.t*.4:.4+a.t*.6;e.save(),e.globalAlpha=c<.55?1:1-(c-.55)/.45,e.fillStyle=Hn,e.font=S(11,`bold`),e.textAlign=`center`,e.fillText(`SHOT DOWN`,s.x,s.y-o-14*C(c)),e.restore()}var er=`rgba(205, 212, 222, 0.75)`,tr=`rgba(205, 212, 222, 0.85)`,nr=.5,rr=.28;function ir(e,t,n){return e===`degraded`?{fill:t,alpha:nr}:e===`crippled`?{fill:t,alpha:rr}:e===`out`?n?{fill:be,alpha:.9}:{fill:Le,alpha:1}:{fill:t,alpha:1}}function ar(e,t,n,r,i){let a=Math.min(r,i)*.3;e.beginPath(),e.roundRect(t-r/2,n-i/2,r,i,a)}function or(e,t,n,r){let i=t.subsystems.radio;if(i===void 0)return;let a=ir(i,er,!0),o=n.bridge.lengthFraction*r.lengthPx,s=n.bridge.along*r.lengthPx+o*.5,c=s-r.lengthPx*.03;e.save(),e.globalAlpha*=a.alpha,e.strokeStyle=a.fill,e.lineWidth=Math.max(.8,r.beamPx*.08),e.lineCap=`round`,e.beginPath(),e.moveTo(0,s+r.lengthPx*.05),e.lineTo(0,s-r.lengthPx*.08),e.moveTo(-r.beamPx*.32,c),e.lineTo(r.beamPx*.32,c),e.stroke(),e.restore()}function sr(e,t,n){e.save(),e.strokeStyle=tr,e.fillStyle=tr,e.lineWidth=Math.max(.7,n.beamPx*.06),e.lineCap=`round`;for(let r of t.masts??[]){let t=r*n.lengthPx;e.beginPath(),e.arc(0,t,Math.max(.8,n.beamPx*.08),0,2*Math.PI),e.fill()}for(let r of t.kingposts??[]){let t=r*n.lengthPx;e.beginPath(),e.moveTo(-n.beamPx*.38,t),e.lineTo(n.beamPx*.38,t),e.stroke()}e.restore()}function cr(e,t,n,r,i){let a=t.subsystems.seaplane;if(a===void 0||n.catapult===void 0)return;let o=n.catapult*r.lengthPx,s=ir(a,i,!0);e.save(),e.globalAlpha*=s.alpha,e.strokeStyle=s.fill,e.lineWidth=Math.max(.8,r.beamPx*.07),e.lineCap=`round`,e.beginPath(),e.moveTo(-r.beamPx*.42,o),e.lineTo(r.beamPx*.42,o),e.stroke();let c=r.beamPx*.3;e.beginPath(),e.moveTo(-c,o),e.lineTo(c,o),e.moveTo(0,o-c*.55),e.lineTo(0,o+c*.55),e.stroke(),e.restore()}function lr(e,t,n,r,i){for(let a of n.tubeMounts??[]){if(t.subsystems[a.mountId]===void 0)continue;let n=ir(t.subsystems[a.mountId],i,!1),o=a.along*r.lengthPx,s=(a.athwart??0)*r.beamPx/2,c=r.lengthPx*.035,l=Math.max(1,r.beamPx*.14);e.save(),e.globalAlpha*=n.alpha,e.fillStyle=n.fill,ar(e,s,o,l,c*2),e.fill(),e.strokeStyle=z,e.lineWidth=.6,e.stroke(),e.restore()}}function ur(e,t,n,r,i,a){e.save(),e.translate(a,0);let o=n.bridge.lengthFraction*r.lengthPx,s=ir(t.subsystems.director,i,!0);e.save(),e.globalAlpha*=s.alpha,e.fillStyle=s.fill,ar(e,0,n.bridge.along*r.lengthPx,r.beamPx*.56,o),e.fill(),e.restore(),e.fillStyle=i;for(let t of n.blocks??[])ar(e,0,t.along*r.lengthPx,r.beamPx*t.widthFraction,t.lengthFraction*r.lengthPx),e.fill(),e.strokeStyle=z,e.lineWidth=.6,e.stroke();let c=ir(t.subsystems.engines,i,!1);e.save(),e.globalAlpha*=c.alpha;for(let t of n.funnels){let n=t*r.lengthPx,i=Math.max(1,r.beamPx*.16),a=Math.max(1.2,r.beamPx*.21);e.beginPath(),e.ellipse(0,n,i,a,0,0,2*Math.PI),e.fillStyle=c.fill,e.fill(),e.strokeStyle=z,e.lineWidth=.8,e.stroke(),e.beginPath(),e.ellipse(0,n,i*.55,a*.55,0,0,2*Math.PI),e.fillStyle=`rgba(20, 24, 30, 0.55)`,e.fill()}e.restore(),lr(e,t,n,r,i),cr(e,t,n,r,i),sr(e,n,r),or(e,t,n,r),e.restore()}var dr=`rgba(10, 16, 22, 0.55)`;function fr(e,t){let n=e.disguise;if(n===void 0||t.side!==`raider`)return null;if(n.phase===`open`)return 1;if(n.phase===`standing`||n.droppedAtTick===null)return 0;let r=Math.max(1,de.coloursBeatTicks),i=e.tick-n.droppedAtTick;return Math.max(0,Math.min(1,i/r))}function pr(e,t,n,r,i){let a=t.along*n.lengthPx,o=t.athwart===void 0?[-1,1]:[t.athwart<0?-1:1],s=Math.max(2,n.lengthPx*.055),c=Math.max(1,n.beamPx*.22)*Math.sin(i*Math.PI/2);for(let t of o){let i=t*n.beamPx/2;e.beginPath(),e.rect(i,a-s/2,t*Math.max(.6,c),s),e.fillStyle=r,e.globalAlpha=.85,e.fill(),e.globalAlpha=1,e.strokeStyle=dr,e.lineWidth=.6,e.stroke()}}var mr={operational:0,degraded:.3,crippled:.55,out:1};function hr(e){return e===void 0?0:mr[e]}function gr(e,t){return t<=0?0:Math.min(t-1,Math.floor(G(M(e),7)*t))}function _r(e){return Je(e)}function vr(e){return G(M(e),41)<.5?-1:1}function yr(e,t){let n=_r(e);return vr(t)*15*n*n}function br(e){let n=e.fore.level-e.aft.level;return 5*Math.max(-1,Math.min(1,n/t.flooding.sinkAtTotal))}var xr=`#15181c`,Sr=.16,Cr=`rgba(255, 244, 205, 0.95)`,wr=`rgba(255, 170, 70, 0.55)`,Tr=.8,Er=`190, 194, 200`,Dr=.22;function Or(e){return e.athwart===void 0?1:.72}function kr(e,t,n){return e.beamPx*(t>1?.9:.65)*n}function Ar(e,t,r){let i=r.toScreen(r.posOf(e)),a=n[e.cls].turrets.find(e=>e.mountId===t);if(a===void 0)return i;let o=W(e.cls,r.metresPerPx),s=a.along*o.lengthPx,c=(a.athwart??0)*o.beamPx/2,l=r.headingOf(e)*Math.PI/180;return{x:i.x+Math.cos(l)*c-Math.sin(l)*s,y:i.y+Math.sin(l)*c+Math.cos(l)*s}}function jr(t,n,r,i,a){let o=n===void 0?j(r):v(n,r),s=e(t.cls,r.id);if(s===void 0)return o;let c=i.ships.find(e=>e.id===n?.targetId);return st(o,t.sunk||t.struckColours||c===void 0||c.sunk||c.struckColours?j(r):te({pos:a.posOf(t),headingDeg:a.headingOf(t),speedKnots:t.motion.speedKnots},{pos:a.posOf(c),headingDeg:a.headingOf(c),speedKnots:c.motion.speedKnots},r)??j(r),s.traverseDegPerSecond*a.frameFraction*10)}function Mr(e,t,r,i){let a=Ar(e,t,i),o=n[e.cls].turrets.find(e=>e.mountId===t),s=k(e.cls).find(e=>e.id===t);if(o===void 0||s===void 0)return a;let c=jr(e,e.mounts.find(e=>e.mountId===t),s,r,i),l=kr(W(e.cls,i.metresPerPx),s.guns,Or(o)),u=(i.headingOf(e)+c)*Math.PI/180;return{x:a.x+Math.sin(u)*l,y:a.y-Math.cos(u)*l}}function Nr(e,t,n,r){let i=null;for(let a of n.salvos){if(a.shooterId!==e.id||a.mountId!==t)continue;let o=n.tick+r.frameFraction-a.firedAtTick;o>=0&&(i===null||o<i)&&(i=o)}return i}function Pr(e,t,n,r,i,a,o,s){e.save(),e.rotate(n*Math.PI/180);let c=gr(t,r);e.strokeStyle=Le,e.lineWidth=s,e.lineCap=`round`;let l=26*Math.PI/180;for(let n=0;n<r;n+=1){let i=(n-(r-1)/2)*o,s=n===c,u=a*(s?Math.cos(l):1),d=s?(G(M(t),9)-.5)*.34:0;e.beginPath(),e.moveTo(i,0),e.lineTo(i+Math.sin(d)*u,-Math.cos(d)*u),e.stroke()}e.fillStyle=Le,e.beginPath(),e.arc(0,0,i,0,2*Math.PI),e.fill(),e.fillStyle=xr,e.beginPath(),e.arc((G(M(t),1)-.5)*i,(G(M(t),2)-.5)*i,Math.max(.6,i*.3),0,2*Math.PI),e.fill(),e.restore()}function Fr(e,t,n,r,i,a,o,s){let c=n.id,l=n.guns,u=r.along*i.lengthPx,d=(r.athwart??0)*i.beamPx/2,f=Or(r),p=Math.max(1.1,i.beamPx*(l>1?.3:.22)*f);if(e.save(),e.translate(d,u),t.subsystems[c]===`out`){Pr(e,c,t.mounts.find(e=>e.mountId===c)?.trainDeg??j(n),l,p,kr(i,l,f),Math.max(1,i.beamPx*.16*f),Math.max(.8,i.beamPx*.09*f)),e.restore();return}let m=jr(t,t.mounts.find(e=>e.mountId===c),n,o,s);e.rotate(m*Math.PI/180),t.subsystems[c]===`degraded`&&(e.globalAlpha*=.55),t.subsystems[c]===`crippled`&&(e.globalAlpha*=.32);let h=Nr(t,c,o,s),g=h!==null&&h<Sr?1-h/Sr:0,_=kr(i,l,f),v=_*(1-Dr*g),y=Math.max(1,i.beamPx*.16*f);e.strokeStyle=a,e.lineWidth=Math.max(.8,i.beamPx*.09*f),e.lineCap=`round`;for(let t=0;t<l;t+=1){let n=(t-(l-1)/2)*y;e.beginPath(),e.moveTo(n,0),e.lineTo(n,-v),e.stroke()}if(l>1?(e.strokeStyle=z,e.lineWidth=.7,e.beginPath(),e.arc(0,0,p*1.18,0,2*Math.PI),e.stroke(),e.fillStyle=a,e.beginPath(),e.roundRect(-p,-p*1.05,p*2,p*2.05,[p*.85,p*.85,p*.35,p*.35]),e.fill(),e.strokeStyle=z,e.stroke()):(e.fillStyle=a,e.beginPath(),e.arc(0,0,p,0,2*Math.PI),e.fill()),g>0){let t=-v-1,n=(2+3.5*g)*Math.max(1,i.beamPx/6)*f,r=e.createRadialGradient(0,t,0,0,t,n);r.addColorStop(0,Cr),r.addColorStop(.35,wr),r.addColorStop(1,`rgba(255, 170, 70, 0)`),e.fillStyle=r,e.beginPath(),e.arc(0,t,n,0,2*Math.PI),e.fill()}if(h!==null&&h>=Sr&&h<Tr){let n=(h-Sr)/(Tr-Sr),r=Math.max(1,i.beamPx/8)*f,a=(2+6*n)*r,c=rt(o.setting.weatherSeed),l=(s.headingOf(t)+m)*Math.PI/180,u=Math.sin(c),d=-Math.cos(c),p=4*n*r,g=(u*Math.cos(l)+d*Math.sin(l))*p,v=(-u*Math.sin(l)+d*Math.cos(l))*p;e.fillStyle=`rgba(${Er}, ${(.4*(1-n)).toFixed(3)})`,e.beginPath(),e.arc(g,-_-a+v,(1.5+3.5*n)*f,0,2*Math.PI),e.fill()}e.restore()}var Ir=`rgba(255, 255, 255, 0.4)`,Lr=`rgba(130, 195, 245, 0.9)`,Rr=35,zr=`rgba(225, 238, 248, 0.5)`,Br=.07,Vr=.22;function Hr(e,t,n,r,i){let a=i?.fore.level??0,o=i?.mid.level??0,s=i?.aft.level??0,c=-n/2+n*.08*a,l=n/2-n*.06*s,u=(c+l)/2,d=c-u,f=l-u,p=r/2*(1-.18*o),m=p*(1-.28*a),h=p*(1-.28*s),g=d+n*t.bowFraction,_=f-n*t.sternFraction,v=h*t.sternWidthFraction;e.beginPath(),e.moveTo(0,d),e.quadraticCurveTo(m,d+n*t.bowFraction*.45,m,g),e.lineTo(h,_),e.quadraticCurveTo(h,f,v,f),e.lineTo(-v,f),e.quadraticCurveTo(-h,f,-h,_),e.lineTo(-m,g),e.quadraticCurveTo(-m,d+n*t.bowFraction*.45,0,d),e.closePath()}function Ur(e,t,n){let r=Math.abs(t.motion.speedKnots);if(r<3)return;let i=Math.min(1,r/26),a=-n.lengthPx/2,o=n.beamPx*(.5+.5*i);e.save(),e.strokeStyle=zr,e.globalAlpha*=.35+.45*i,e.lineWidth=Math.max(.8,n.beamPx*.1),e.lineCap=`round`,e.beginPath(),e.moveTo(0,a+n.lengthPx*.02),e.lineTo(o,a+n.lengthPx*.09),e.moveTo(0,a+n.lengthPx*.02),e.lineTo(-o,a+n.lengthPx*.09),e.stroke(),e.restore()}function Wr(e,t,n,r){let i=n.lengthPx/2,a=Math.max(4,Math.min(n.lengthPx*.32,n.beamPx*1.3)),o=t*Rr*Math.PI/180,s=ir(r,Lr,!0);e.save(),e.globalAlpha*=s.alpha,e.strokeStyle=s.fill,e.lineWidth=Math.max(1.5,Math.min(n.beamPx*.24,4)),e.lineCap=`round`,e.beginPath(),e.moveTo(0,i),e.lineTo(Math.sin(o)*a,i+Math.cos(o)*a),e.stroke(),e.restore()}function Gr(e,t,n){let r=t.burns??Ve,i=t.plating??Ve;if(!(t.sunk||!Pe(r,i))){e.save(),e.clip();for(let a of Qe(t.id,r,i)){let t=a.kind===`soot`;e.fillStyle=t?`rgba(22, 19, 17, ${(a.weight*.72).toFixed(3)})`:`rgba(120, 100, 84, ${(a.weight*.6).toFixed(3)})`,e.beginPath(),e.ellipse(a.across*n.beamPx*.34,-a.along*n.lengthPx,Math.max(.7,a.size*n.beamPx*.5),Math.max(.7,a.size*n.beamPx*(t?.8:.42)),0,0,2*Math.PI),e.fill()}e.restore()}}function Kr(e,t,r,i){let a=i.toScreen(i.posOf(t)),o=W(t.cls,i.metresPerPx),s=n[t.cls],c=t.side===`raider`?tt:V,l=t.side===`raider`?ot:De,u=t.sunk?0:i.rudderOf(t),d=-u*Br*o.beamPx*Math.min(1,Math.abs(t.motion.speedKnots)/20)+yr(t.flooding,t.id)/15*Vr*o.beamPx;e.save(),e.translate(a.x,a.y),e.rotate(i.headingOf(t)*(Math.PI/180)),e.globalAlpha=t.sunk?.35:1,t.sunk||Ur(e,t,o),Hr(e,s,o.lengthPx,o.beamPx,t.flooding),e.fillStyle=c,e.fill(),e.strokeStyle=z,e.lineWidth=1,e.stroke();let f=(t.flooding.fore.level+t.flooding.mid.level+t.flooding.aft.level)/3;f>.04&&(e.fillStyle=`rgba(14, 36, 58, ${(.4*f).toFixed(3)})`,e.fill()),Hr(e,s,o.lengthPx,o.beamPx,t.flooding),Gr(e,t,o),ur(e,t,s,o,l,d);let p=fr(r,t);for(let n of k(t.cls)){let a=s.turrets.find(e=>e.mountId===n.id);a!==void 0&&(p!==null&&pr(e,a,o,l,p),(p===null||p>0)&&(e.globalAlpha=p===null?1:p,Fr(e,t,n,a,o,l,r,i)),e.globalAlpha=t.sunk?.35:1)}if(t.sunk||(Wr(e,u,o,t.subsystems.steering),e.save(),Hr(e,s,o.lengthPx,o.beamPx,t.flooding),e.clip(),He(e,t,o.beamPx,o.lengthPx,i.animationMs),e.restore()),e.globalAlpha=1,e.restore(),!t.sunk){let n=t.orders.headingDeg*Math.PI/180;e.strokeStyle=Ir,e.lineWidth=1,e.beginPath(),e.moveTo(a.x+Math.sin(n)*(o.lengthPx/2+3),a.y-Math.cos(n)*(o.lengthPx/2+3)),e.lineTo(a.x+Math.sin(n)*(o.lengthPx/2+12),a.y-Math.cos(n)*(o.lengthPx/2+12)),e.stroke()}we(e,t,a,o.lengthPx/2+24)}var qr=17,Jr=7,Yr=3,Xr=5.5,Zr=28*Math.PI/180,Qr=24,$r=1.75,ei=3.75,ti=.9;function ni(e){return 1-h(p((e-16)/20))}function ri(e,t,n,r,i,a){let o=a+qr;e[0]=t+r*a,e[1]=n+i*a,e[2]=t+r*o,e[3]=n+i*o;let s=-r,c=-i,l=Math.cos(Zr),u=Math.sin(Zr);e[4]=e[2]+(s*l-c*u)*Xr,e[5]=e[3]+(s*u+c*l)*Xr,e[6]=e[2]+(s*l+c*u)*Xr,e[7]=e[3]+(c*l-s*u)*Xr}var q=new Float64Array(8);function ii(e,t,n,r){let i=F[t.cls].lengthMetres/n.metresPerPx,a=ni(i);if(a<=0)return;let o=n.posOf(t),s=n.headingOf(t)*Math.PI/180,c=Qr*n.metresPerPx,l={x:o.x+Math.sin(s)*c,y:o.y+Math.cos(s)*c};if(!n.inFront(o)||!n.inFront(l))return;let u=n.toScreen(o),d=n.toScreen(l),f=Math.hypot(d.x-u.x,d.y-u.y);f<1e-6||(ri(q,u.x,u.y,(d.x-u.x)/f,(d.y-u.y)/f,Math.max(Jr,i*.5+Yr)),e.save(),e.globalAlpha=a*ti,e.lineCap=`round`,e.lineJoin=`round`,e.beginPath(),e.moveTo(q[0],q[1]),e.lineTo(q[2],q[3]),e.moveTo(q[4],q[5]),e.lineTo(q[2],q[3]),e.lineTo(q[6],q[7]),e.strokeStyle=z,e.lineWidth=ei,e.stroke(),e.strokeStyle=r,e.lineWidth=$r,e.stroke(),e.restore())}var ai=`rgba(255, 255, 255, 0.72)`,oi=13,si=46,ci=9,li=15;function ui(e,t,n,r){e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.stroke()}function di(e,t,n){let r=t.ships.filter(e=>e.side===`raider`&&!e.sunk);if(r.length!==0){e.strokeStyle=ai,e.lineWidth=1.5;for(let i of t.ships){if(i.side!==`enemy`||i.sunk||!r.some(e=>m(t,e,i))||!n.inFront(n.posOf(i)))continue;let a=n.toScreen(n.posOf(i)),o=W(i.cls,n.metresPerPx).lengthPx*.5;ui(e,a.x,a.y,Math.min(si,Math.max(oi,o+ci))),ii(e,i,n,V)}for(let t of r)ii(e,t,n,_e);for(let r of t.flights){let t=yn(r,n);if(!n.inFront(t))continue;let i=n.toScreen(t);ui(e,i.x,i.y,li)}}}var fi={AP:`rgba(236, 242, 250, 0.92)`,HE:`rgba(255, 222, 130, 0.92)`},pi={AP:`rgba(236, 242, 250, 0.3)`,HE:`rgba(255, 222, 130, 0.3)`},mi=180;function hi(e,t){let n=.8*t,r=.3*t;e.beginPath(),e.moveTo(n,0),e.quadraticCurveTo(n*.15,r,-n*.8,r),e.lineTo(-n,r*.8),e.lineTo(-n,-r*.8),e.lineTo(-n*.8,-r),e.quadraticCurveTo(n*.15,-r,n,0),e.closePath()}function gi(e,t,n){for(let r of t.salvos){let i=t.ships.find(e=>e.id===r.shooterId),a=t.ships.find(e=>e.id===r.targetId);if(i===void 0||a===void 0)continue;let o=Math.max(1,r.landsAtTick-r.firedAtTick),s=Math.min(1,Math.max(0,(t.tick+n.frameFraction-r.firedAtTick)/o)),c=n.posOf(i),l=n.posOf(a),u=l.x+r.fallOffset.x-c.x,d=l.y+r.fallOffset.y-c.y,f=Math.hypot(u,d),p=f<1?0:d/f,m=f<1?0:-u/f,h=0,g=0;if(n.inFront(c)){let e=n.toScreen(c),a=Mr(i,r.mountId,t,n);h=a.x-e.x,g=a.y-e.y}let _=(e,t)=>{let r={x:c.x+(u+p*e)*t,y:c.y+(d+m*e)*t};if(!n.inFront(r))return null;let i=n.toScreen(r);return{x:i.x+h*(1-t),y:i.y+g*(1-t)}},v=M(`${r.shooterId}:${r.mountId}`)^(r.firedAtTick|0),y=Math.max(0,s-.04),b=1+.85*O(s);for(let t=0;t<r.guns;t+=1){let n=(L(v,t,0)-.5)*2*mi,i=_(n,s);if(i===null)continue;let a=_(n,y);a!==null&&(e.strokeStyle=pi[r.shell],e.lineWidth=1,e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(i.x,i.y),e.stroke());let o=s>0?a:i,c=s>0?i:_(n,.04),l=o===null||c===null?0:Math.atan2(c.y-o.y,c.x-o.x);e.save(),e.translate(i.x,i.y),e.rotate(l),hi(e,b),e.fillStyle=fi[r.shell],e.fill(),e.restore()}}}function _i(e,t,n){let r=t.ships.filter(e=>e.side===`enemy`&&!e.sunk&&!e.struckColours);e.font=S(11,`bold`),e.fillStyle=V;for(let[t,i]of r.entries()){let a=i.name??(r.length>1?`${t+1}`:null),o=n.posOf(i);if(a===null||!n.inFront(o))continue;let s=n.toScreen(o),c=W(i.cls,n.metresPerPx).lengthPx/2;e.fillText(a,s.x+c+6,s.y-8)}let i=t.ships.find(e=>e.side===`raider`&&!e.sunk),a=i===void 0?null:pe(i.cls);if(i===void 0||a===null||!n.inFront(n.posOf(i)))return;let o=n.toScreen(n.posOf(i)),s=W(i.cls,n.metresPerPx).lengthPx/2;e.save(),e.fillStyle=_e,e.textAlign=`center`,e.fillText(R[a].shipName,o.x,o.y+s+14),e.restore()}var vi=36,yi=1.35,bi=5;function xi(e,t){return e.ships.map(e=>{let n=t.toScreen(t.posOf(e)),r=t.headingOf(e)*Math.PI/180,i=W(e.cls,t.metresPerPx);return{x:n.x,y:n.y,sternX:-Math.sin(r),sternY:Math.cos(r),wakePx:e.sunk||e.motion.speedKnots<.5?0:Math.min(90,4+e.motion.speedKnots*2.6)*yi,lengthPx:i.lengthPx,beamPx:i.beamPx}})}var Si={calm:0,wakeEdge:0};function Ci(e,t,n){let r=0,i=0;for(let a of e){let e=t-a.x,o=n-a.y,s=Math.hypot(e,o);if(s<vi&&(r=Math.max(r,1-s/vi)),a.wakePx<=0)continue;let c=e*a.sternX+o*a.sternY-a.lengthPx/2;if(c<0||c>a.wakePx)continue;let l=1-c/a.wakePx,u=Math.abs(o*a.sternX-e*a.sternY),d=a.beamPx*(.9+1.3*(c/a.wakePx));u<d?r=Math.max(r,.25+.75*l):u<d+bi&&(i=Math.max(i,l))}return r===0&&i===0?Si:{calm:Math.min(1,r),wakeEdge:i}}var wi=`200, 226, 250`,Ti=`8, 26, 48`,Ei=1.4,Di=`240, 248, 255`,Oi=56,ki=3.5;function Ai(e,t,n,r,i,a,o,s){let c=2**Math.round(Math.log2(Oi*n.metresPerPx)),l=n.toScreen({x:0,y:0}),u=(0-l.x)*n.metresPerPx,d=(o-l.x)*n.metresPerPx,f=(l.y-s)*n.metresPerPx,p=l.y*n.metresPerPx,m=r.storm>=.12,h=Math.sin(i),g=-Math.cos(i),_=xi(t,n);e.lineWidth=1.2;for(let t=Math.floor(u/c);t*c<=d;t+=1)for(let o=Math.floor(f/c);o*c<=p;o+=1){let s=G(t,o*13+5),l=I(a/ki+s,1),u=Math.sin(l*Math.PI)**2;if(u<.06)continue;let d=(G(t*7+1,o)-.5)*.9,f=(G(t,o*7+3)-.5)*.9,p=(l-.5)*.25,v=n.toScreen({x:(t+.5+d+Math.sin(i)*p)*c,y:(o+.5+f+Math.cos(i)*p)*c}),y=Ci(_,v.x,v.y);if(G(t,o)<=r.crestDensity&&y.calm<.9){let n=1-y.calm,a=i+Math.PI/2+(G(t*3,o*5)-.5)*.7,s=(5+8*G(t*5+2,o*3+1))*n,c=Math.sin(a)*s,l=-Math.cos(a)*s,d=2.5,f=v.x-h*Ei,p=v.y-g*Ei;if(e.strokeStyle=`rgba(${Ti}, ${(.55*r.crestAlpha*u*n).toFixed(3)})`,e.beginPath(),e.moveTo(f-c,p-l),e.quadraticCurveTo(f+h*d,p+g*d,f+c,p+l),e.stroke(),e.strokeStyle=`rgba(${wi}, ${(r.crestAlpha*u*n).toFixed(3)})`,e.beginPath(),e.moveTo(v.x-c,v.y-l),e.quadraticCurveTo(v.x+h*d,v.y+g*d,v.x+c,v.y+l),e.stroke(),m&&G(t*11+4,o)<.6&&(e.fillStyle=`rgba(${Di}, ${(.5*u*n).toFixed(3)})`,e.beginPath(),e.arc(v.x,v.y,1+1.4*u,0,2*Math.PI),e.fill(),u>.45&&G(t*19+2,o*5+8)<.55)){let r=G(t*23+6,o*17+3)<.5?1:-1,i=(3.5+5*G(t*29+7,o*7+9))*n;e.strokeStyle=`rgba(${Di}, ${(.32*u*n).toFixed(3)})`,e.beginPath(),e.moveTo(v.x+r*c,v.y+r*l),e.lineTo(v.x+r*c+h*i,v.y+r*l+g*i),e.stroke()}}if(y.wakeEdge>.05){let t=Math.sin(I(a/1.6+s,1)*Math.PI)**2;e.fillStyle=`rgba(${Di}, ${(.45*y.wakeEdge*(.35+.65*t)).toFixed(3)})`,e.beginPath(),e.arc(v.x,v.y,1+1.5*y.wakeEdge,0,2*Math.PI),e.fill()}}}var ji=`210, 228, 244`,Mi=`224, 168, 110`,Ni=`255, 250, 235`,Pi=28,Fi=1.15,Ii={clear:1,overcast:.45,squall:.15,gale:0};function Li(e,t){let n=Ii[t];return{liftAlpha:.05*h(p((e-8)/22))*(.4+.6*n),warmAlpha:.07*O(p((e+6)/16))*(.3+.7*n),glitterDensity:.22*h(p(e/25))*n}}function Ri(e,t,n,r){t.liftAlpha>.003&&(e.fillStyle=`rgba(${ji}, ${t.liftAlpha.toFixed(3)})`,e.fillRect(0,0,n,r)),t.warmAlpha>.003&&(e.fillStyle=`rgba(${Mi}, ${t.warmAlpha.toFixed(3)})`,e.fillRect(0,0,n,r))}function zi(e,t,n,r,i,a){if(n.glitterDensity<=.005)return;let o=2**Math.round(Math.log2(Pi*t.metresPerPx)),s=t.toScreen({x:0,y:0}),c=(0-s.x)*t.metresPerPx,l=(i-s.x)*t.metresPerPx,u=(s.y-a)*t.metresPerPx,d=s.y*t.metresPerPx;for(let i=Math.floor(c/o);i*o<=l;i+=1)for(let a=Math.floor(u/o);a*o<=d;a+=1){if(G(i*17+9,a*23+4)>=n.glitterDensity)continue;let s=G(i*5+2,a*11+7),c=(r/Fi+s)%1,l=Math.sin(c*Math.PI)**2;if(l<.2)continue;let u=(G(i*3+1,a*13+6)-.5)*.9,d=(G(i*13+8,a*3+2)-.5)*.9,f=t.toScreen({x:(i+.5+u)*o,y:(a+.5+d)*o});e.fillStyle=`rgba(${Ni}, ${(.45*l).toFixed(3)})`,e.beginPath(),e.arc(f.x,f.y,.7,0,2*Math.PI),e.fill()}}var Bi=[205,230,255];function Vi(){let e=[{tile:E(31,10,Bi,512),speed:10,scale:1.2,stretch:7,alpha:.1},{tile:E(47,10,Bi,512),speed:5.5,scale:.65,stretch:5,alpha:.06}],t=e.map(()=>null);return{draw(n,r,i,a,o,s,c){let l=i-Math.PI/2;for(let[i,u]of e.entries()){t[i]??=n.createPattern(u.tile,`repeat`);let e=t[i];if(e==null)continue;n.save(),n.globalAlpha=u.alpha*o,n.translate(r.x,r.y),n.rotate(l);let d=u.tile.width*u.scale;n.translate(I(a*u.speed,d),0),n.scale(u.scale,u.scale*u.stretch);let f=(Math.hypot(r.x,r.y)+s+c+d)/u.scale;n.fillStyle=e,n.fillRect(-f,-f,2*f,2*f),n.restore()}}}}var Hi=`#12365c`,Ui=[8,30,56],Wi=[205,230,255],Gi=`rgba(8, 14, 34, 0.2)`,Ki=`58, 72, 84`,qi=6,Ji=4,Yi={clear:{crestDensity:.3,crestAlpha:.45,swell:1,storm:0},overcast:{crestDensity:.45,crestAlpha:.55,swell:1.15,storm:.05},squall:{crestDensity:.7,crestAlpha:.75,swell:1.35,storm:.12},gale:{crestDensity:1,crestAlpha:1,swell:1.6,storm:.2}};function Xi(){let e=[{tile:T(21,22,Ui),drift:{x:.8,y:.4},scale:6,alpha:.22,rotate:-.35},{tile:E(8,20,Wi,512),drift:{x:-4,y:5},scale:1.7,alpha:.04,rotate:.25},{tile:E(53,44,Wi,512),drift:{x:9,y:6},scale:1,alpha:.075,rotate:-.15}],t=e.map(()=>null),n=Vi(),r=document.createElement(`canvas`),i=r.getContext(`2d`);function a(n,r,i,a,o,s,c){let l=e[r];if(l===void 0)return;t[r]??=n.createPattern(l.tile,`repeat`);let u=t[r];if(u!=null){if(n.save(),n.globalAlpha=l.alpha*c,l.rotate===void 0){let e=l.tile.width*l.scale,t=I(i.x+a*l.drift.x,e),r=I(i.y+a*l.drift.y,e);n.translate(t,r),n.scale(l.scale,l.scale),n.fillStyle=u,n.fillRect((-t-e)/l.scale,(-r-e)/l.scale,(o+2*e)/l.scale,(s+2*e)/l.scale)}else{let e=i.x+a*l.drift.x,t=i.y+a*l.drift.y;n.translate(e,t),n.rotate(l.rotate),n.scale(l.scale,l.scale);let r=(Math.hypot(e,t)+o+s+l.tile.width)/l.scale;n.fillStyle=u,n.fillRect(-r,-r,2*r,2*r)}n.restore()}}return{draw(e,t,o,s,c){let l=_()?0:(t.tick+o.frameFraction)*10,u=b(t.setting,t.tick,{x:0,y:0}),d=Yi[u.weather],f=Li(je(ue(t.setting,t.tick),le(t.setting.anchor,{x:0,y:0})),u.weather),m=o.toScreen({x:0,y:0}),h=rt(t.setting.weatherSeed),g=i??e;if(i!==null){let e=Math.max(1,Math.round(s)),t=Math.max(1,Math.round(c));(r.width!==e||r.height!==t)&&(r.width=e,r.height=t)}g.fillStyle=Hi,g.fillRect(0,0,s,c),Ri(g,f,s,c),a(g,0,m,l,s,c,1),n.draw(g,m,h,l,d.swell,s,c),a(g,1,m,l,s,c,d.swell);let v=p((qi-o.metresPerPx)/Ji)*d.swell;v>.02&&a(g,2,m,l,s,c,v),d.storm>0&&(g.fillStyle=`rgba(${Ki}, ${d.storm})`,g.fillRect(0,0,s,c)),i!==null&&e.drawImage(r,0,0,s,c),Ai(e,t,o,d,h,l,s,c),zi(e,o,f,l,s,c),u.dark&&(e.fillStyle=Gi,e.fillRect(0,0,s,c))}}}var Zi=.8,Qi=`235, 244, 252`,$i=`rgba(230, 240, 255, 0.85)`,ea=`rgba(240, 248, 255, 0.9)`,ta=`rgba(255, 150, 90, 0.9)`,na=`255, 236, 200`,ra=`58, 56, 62`,ia=.25;function aa(e,t,n){for(let r of t.ships){if(r.sunk||r.motion.speedKnots<.5)continue;let{lengthPx:i,beamPx:a}=W(r.cls,n.metresPerPx),o=n.toScreen(n.posOf(r)),s=Math.min(90,4+r.motion.speedKnots*2.6),c=M(r.id),l=Math.floor((t.tick+n.frameFraction)*10/Zi);e.save(),e.translate(o.x,o.y),e.rotate(n.headingOf(r)*Math.PI/180);let u=i/2,d=e.createLinearGradient(0,u,0,u+s);d.addColorStop(0,`rgba(${Qi}, 0.4)`),d.addColorStop(1,`rgba(${Qi}, 0)`),e.fillStyle=d,e.beginPath(),e.moveTo(-a*.45,u),e.lineTo(a*.45,u),e.lineTo(a*.95,u+s),e.lineTo(-a*.95,u+s),e.closePath(),e.fill();for(let t=0;t<6;t+=1){let n=(t+G(c+t,l))/6,r=u+n*s,i=a*(.45+.5*n),o=(G(c+t,l+1)-.5)*2*i*.7;e.fillStyle=`rgba(${Qi}, ${.35*(1-n)})`,e.beginPath(),e.arc(o,r,.8+1.6*(1-n),0,2*Math.PI),e.fill()}e.strokeStyle=`rgba(${Qi}, 0.18)`,e.lineWidth=1;for(let t of[-1,1])e.beginPath(),e.moveTo(t*a*.5,u),e.lineTo(t*(a*.5+s*.3),u+s),e.stroke();let f=-i/2;e.strokeStyle=`rgba(${Qi}, ${Math.min(.5,.1+r.motion.speedKnots*.015)})`,e.lineWidth=1.2,e.beginPath(),e.moveTo(-a*.9,f+a),e.lineTo(0,f-1.5),e.lineTo(a*.9,f+a),e.stroke(),e.restore()}}function oa(e,t,n){for(let r of t.falls){let i=t.tick+n.frameFraction-r.tick,a=1-i/Xe.fallRetentionTicks;if(a<=0)continue;let o=r.tick*37+Math.round(r.pos.x)*7+Math.round(r.pos.y)|0,s=n.toScreen(r.pos);for(let t=0;t<r.guns;t+=1){let r=L(o,t,0)*2*Math.PI,c=(40+L(o,t,1)*140)/n.metresPerPx,l=s.x+Math.cos(r)*c,u=s.y+Math.sin(r)*c,d=O(Math.min(1,i/(Xe.fallRetentionTicks*.45)))*13;if(d>.5){e.fillStyle=$i,Pn(e,l,u,d,3.6,o,t),e.fillStyle=ea;for(let n=0;n<3;n+=1){let r=(L(o,t,2+n)-.5)*6;e.beginPath(),e.arc(l+r,u-d-1.5,.9,0,2*Math.PI),e.fill()}}let f=1.5+(1-a)*4;e.fillStyle=`rgba(230, 240, 255, ${.35*a})`,e.beginPath(),e.arc(l,u,f,0,2*Math.PI),e.fill()}if(r.hits>0){let c=Math.min(1,.5+r.hits*.25),l=t.ships.find(e=>e.id===r.targetId),u=t.ships.find(e=>e.id===r.shooterId),d=s.x,f=s.y,p=null;if(l!==void 0&&!l.sunk){let t=n.posOf(l),a=n.toScreen(t),c=W(l.cls,n.metresPerPx),m=n.headingOf(l)*Math.PI/180,h=u===void 0?r.pos:n.posOf(u);if(Ze(Math.hypot(h.x-t.x,h.y-t.y))===`long`){let e=(L(o,9,7)-.5)*c.lengthPx*.6;d=a.x+Math.sin(m)*e,f=a.y-Math.cos(m)*e}else{let t=(u===void 0?s.x:n.toScreen(h).x)-a.x,r=(u===void 0?s.y:n.toScreen(h).y)-a.y,l=Math.hypot(t,r)||1;if(t/=l,r/=l,d=a.x+t*(c.beamPx*.5+1),f=a.y+r*(c.beamPx*.5+1),p=m,i<ia){let n=i/ia;e.strokeStyle=`rgba(${na}, ${((1-n)*.85).toFixed(3)})`,e.lineWidth=1;for(let i=0;i<2;i+=1){let a=(L(o,i,8)-.5)*1.4,s=(3+4*L(o,i,9))*C(n);e.beginPath(),e.moveTo(d,f),e.lineTo(d+(t-r*a)*s,f+(r+t*a)*s),e.stroke()}}}}if(i<ia){let t=i/ia;e.fillStyle=`rgba(${na}, ${(1-t)*.95})`,e.beginPath(),p===null?e.arc(d,f,(2+6*C(t))*c,0,2*Math.PI):e.ellipse(d,f,(1.2+2*C(t))*c,(3+5*C(t))*c,p,0,2*Math.PI),e.fill()}let m=rt(t.setting.weatherSeed),h=C(1-a)*10,g=Math.sin(m)*h,_=-Math.cos(m)*h,v=1+Math.min(3,r.hits);for(let t=0;t<v;t+=1){let n=(L(o,t,5)-.5)*9,r=(L(o,t,6)-.5)*9,i=(1.5+4.5*C(1-a))*c;e.fillStyle=`rgba(${ra}, ${.4*a*c})`,e.beginPath(),e.arc(d+n+g,f+r+_,i,0,2*Math.PI),e.fill()}e.globalAlpha=Math.max(0,a),e.strokeStyle=ta,e.lineWidth=2,e.beginPath(),e.arc(s.x,s.y,7,0,2*Math.PI),e.stroke(),e.globalAlpha=1}}}var sa=2.6,ca=48,la=.45,ua=new Set(Object.values(oe).map(e=>e.torpedo));function da(e){return ua.has(e)}function fa(e){let t=B[e.type].rangeMetres-e.runMetresLeft,n=e.headingDeg*Math.PI/180;return{x:e.pos.x-Math.sin(n)*t,y:e.pos.y-Math.cos(n)*t}}function pa(e,t,n){return(t-e.firedAtTick)*n}function ma(e,t,n){if(!da(e.type))return null;let r=pa(e,t,n);if(r<0||r>=2.6)return null;let i=r/sa,a=fa(e),o=e.headingDeg*Math.PI/180,s=Math.sin(o),c=Math.cos(o),l=ca*(1-i);return{fall:i,x:a.x-s*l,y:a.y-c*l,z:55*(1-i*i),pitchR:la*i,entryX:a.x,entryY:a.y}}function ha(e,t,n){return ma(e,t,n)!==null}function ga(e,t,n,r){if(!da(e.type))return null;let i=pa(e,t,n)-sa;if(i<0||i>r)return null;let a=fa(e);return[a.x,a.y,7,i]}function _a(e){return B[e].speedKnots*.5144444444444445>19?5.1:7.2}var va=[[7,1,1],[13,1,-1],[19,.6,0]],ya=1.05,ba=1.75,xa=1.3,Sa=7,Ca=4;function wa(e,t){return e*8191^Math.round(t*128)}function Ta(e,t){return Math.max(1,Math.ceil(t*e/6))}function Ea(e,t,n,r,i,a,o,s=1){let c=[],l=Math.max(0,Math.ceil((a-Se.wakeMetres)/6));for(let u=Math.ceil(l/s)*s;u*6<=i;u+=s){let i=u*6,s=1-(a-i)/Se.wakeMetres,l=Math.sqrt(Math.max(0,Math.min(1,s))),d=xa+(Sa-xa)*(1-s);for(let[a,f,p]of va){let m=p===0?(G(o+u,a)-.5)*1.6*d:p*d*(.72+.56*G(o+u,a)),h=i-G(o+u,a+3)*Ca;c.push({x:e+n*h-r*m,y:t+r*h+n*m,life:s,fade:l,radiusMetres:(ya+ba*s)*f*(.62+.76*G(o+u,a+1)),seed:G(o+u,a+2)})}}return c}var Da=`rgb(215, 238, 255)`,Oa=`rgba(240, 250, 255, 0.95)`,ka=`rgba(255, 150, 90, 0.9)`,Aa=`255, 240, 214`,ja=`236, 245, 255`,Ma=`245, 250, 255`,Na=`230, 240, 252`,Pa=.6,Fa=.08,Ia=.35,La=5,Ra=6;function za(e,t,n,r,i){let a=M(`${t.targetId}:${t.zone}:${t.tick}`),o=p(r/Ia);o<1&&(e.strokeStyle=`rgba(${ja}, ${(.5*(1-o)).toFixed(3)})`,e.lineWidth=1.5,e.beginPath(),e.arc(n.x,n.y,4+C(o)*26,0,2*Math.PI),e.stroke());let s=p(r/Pa);if(s<1)for(let t=0;t<4;t+=1){let r=(L(a,t,0)-.5)*11,i=(L(a,t,1)-.5)*7,o=O(s)*(14+14*L(a,t,2))*(t===0?1.4:1);if(!(o<.5)){e.fillStyle=`rgba(${ja}, 0.9)`,Pn(e,n.x+r,n.y+i,o,t===0?6.5:4.5,a,t),e.fillStyle=`rgba(${Ma}, 0.9)`;for(let s=0;s<3;s+=1){let c=(L(a,t,3+s)-.5)*8;e.beginPath(),e.arc(n.x+r+c,n.y+i-o-2,1.1,0,2*Math.PI),e.fill()}}}let c=p(r/Fa);c<1&&(e.fillStyle=`rgba(${Aa}, ${(.95*(1-c)).toFixed(3)})`,e.beginPath(),e.arc(n.x,n.y,3+7*C(c),0,2*Math.PI),e.fill()),e.fillStyle=`rgba(${Na}, ${(.4*i).toFixed(3)})`,e.beginPath(),e.arc(n.x,n.y,3.5+C(1-i)*12,0,2*Math.PI),e.fill()}function Ba(e,t,n,r,i,a,o){let s=Ta(r,La),c=Array.from({length:Ra},()=>[]),l=(e,t,i,a,o,l)=>{for(let u of Ea(e.x,e.y,t,i,a,o,l,s)){let e=n({x:u.x,y:u.y}),t=Math.min(Ra-1,Math.floor(u.fade*Ra));c[t]?.push(e.x,e.y,Math.max(.5,u.radiusMetres/r))}},u=[],d=t.tick-1+i;for(let e of t.torpedoes){if(e.side===`enemy`&&!e.sighted||ha(e,d,a))continue;let r=B[e.type].speedKnots*ze,s=e.headingDeg*Math.PI/180,c=w(e,(i-1)*r*a,t.ships,e=>o(e)),f=Math.sin(s),p=Math.cos(s);u.push(n({x:e.pos.x+f*c,y:e.pos.y+p*c}));let m=B[e.type].rangeMetres-e.runMetresLeft+c;l({x:e.pos.x-f*(m-c),y:e.pos.y-p*(m-c)},f,p,m,m,wa(e.firedAtTick,e.headingDeg))}for(let e of t.spentTorpedoes??[]){if(e.side===`enemy`&&!e.sighted)continue;let n=B[e.type].speedKnots*ze,r=e.headingDeg*Math.PI/180,o=Math.sin(r),s=Math.cos(r),c=e.runMetres+(t.tick+i-e.endedAtTick)*a*n;l({x:e.pos.x-o*e.runMetres,y:e.pos.y-s*e.runMetres},o,s,e.runMetres,c,wa(e.firedAtTick,e.headingDeg))}if(e.fillStyle=Da,c.forEach((t,n)=>{if(t.length!==0){e.globalAlpha=.85*(n+.5)/Ra,e.beginPath();for(let n=0;n<t.length;n+=3){let r=t[n]??0,i=t[n+1]??0,a=t[n+2]??0;e.moveTo(r+a,i),e.arc(r,i,a,0,2*Math.PI)}e.fill()}}),e.globalAlpha=1,e.fillStyle=Oa,u.length>0){let t=Math.max(1.5,6/r);e.beginPath();for(let n of u)e.moveTo(n.x+t,n.y),e.arc(n.x,n.y,t,0,2*Math.PI);e.fill()}for(let r of t.torpedoHits){let o=t.tick-1+i-(r.tick-1)-(r.atSeconds??a)/a;if(o<0)continue;let s=Math.max(0,1-o/Se.hitRetentionTicks);if(s<=0)continue;let c=n(r.pos);za(e,r,c,o,s),e.globalAlpha=s,e.strokeStyle=ka,e.lineWidth=3,e.beginPath(),e.arc(c.x,c.y,10,0,2*Math.PI),e.stroke(),e.globalAlpha=1}}function Va(e){let t=e.getContext(`2d`);if(!t)throw Error(`Canvas 2D context unavailable`);let n=t,r=0,i=0,a={x:0,y:0},o=20,c=!1,l=null,u=null,d=Xi(),f=$t(),p=bt();function m(e){let t=e.ships.map(e=>f.posOf(e).x),n=e.ships.map(e=>f.posOf(e).y),s=Math.min(...t)-K,c=Math.max(...t)+K,l=Math.min(...n)-K,u=Math.max(...n)+K;a={x:(s+c)/2,y:(l+u)/2},o=Math.max((c-s)/Math.max(r,1),(u-l)/Math.max(i,1),lt/Math.max(Math.min(r,i),1))}function h(e){return{x:r/2+(e.x-a.x)/o,y:i/2-(e.y-a.y)/o}}function g(){return!0}return{resize(t,a){r=t,i=a;let o=window.devicePixelRatio||1;e.width=Math.round(t*o),e.height=Math.round(a*o),e.style.width=`${t}px`,e.style.height=`${a}px`,n.setTransform(o,0,0,o,0,0)},render(e,t=0){let a=e.battle;if(a===null)return;l=a,f.step(a,t);let u=f.frameFraction();c||m(a);let _={toScreen:h,inFront:g,posOf:f.posOf,headingOf:f.headingOf,rudderOf:f.rudderOf,metresPerPx:o,frameFraction:u,animationMs:performance.now()};d.draw(n,a,_,r,i),At(n,a,_);let v=a.ships.find(e=>e.side===`raider`);v!==void 0&&N(n,v,_),aa(n,a,_),s(n,a,_),Ba(n,a,h,o,u,10,f.posOf),oa(n,a,_),gi(n,a,_);for(let e of a.ships)Kr(n,e,a,_);Rt(n,a,_),Xt(n,a,_),Sn(n,a,_),qn(n,a,_),di(n,a,_),_i(n,a,_),p.draw(n,a,_),ln(n,a,r,f.posOf)},renderAftermath(e,t){l=e,f.step(e,Math.min(t,8)),c||m(e);let a={toScreen:h,inFront:g,posOf:f.posOf,headingOf:f.headingOf,rudderOf:f.rudderOf,metresPerPx:o,frameFraction:t/10,animationMs:performance.now()};d.draw(n,e,a,r,i),At(n,e,a),aa(n,e,a),s(n,e,a),oa(n,e,a);for(let r of e.ships)r.sunk&&Ue(t)||Kr(n,r,e,a);Rt(n,e,a),Xt(n,e,a);for(let r of e.ships)r.sunk&&Te(n,r,a,t)},screenToPlane(e,t){return{x:a.x+(e-r/2)*o,y:a.y-(t-i/2)*o}},shipAt(e,t){if(l===null)return null;let n=null;for(let r of l.ships){let i=h(f.posOf(r)),a=Math.hypot(i.x-e,i.y-t);a<28&&(n===null||a<n.d)&&(n={id:r.id,d:a})}return n?.id??null},panByPixels(e,t){c=!0,a={x:a.x-e*o,y:a.y+t*o}},zoomBy(e,t,n){c=!0;let s={x:a.x+(t-r/2)*o,y:a.y-(n-i/2)*o};o=Math.max(ct,Math.min(400,o/e)),a={x:s.x-(t-r/2)*o,y:s.y+(n-i/2)*o}},recenter(){c=!1},isManual(){return c},setReport(e){u=e},reportShipId(){return u}}}var Ha=550;function Ua(e,t,n,r,i,a){if(!t.inFront(n))return;let o=t.toScreen(n),s=24*t.metresPerPx,c=e=>{let r=it(n,e,s);if(!t.inFront(r))return null;let i=t.toScreen(r),a=Math.hypot(i.x-o.x,i.y-o.y);return a<1e-6?null:{x:(i.x-o.x)/a,y:(i.y-o.y)/a}},l=(e,t)=>{let n=c(e);return n===null?null:{x:o.x+n.x*t,y:o.y+n.y*t}};e.save(),e.globalAlpha*=.45,e.strokeStyle=et,e.lineWidth=1,e.beginPath(),e.arc(o.x,o.y,38,0,Math.PI*2),e.stroke(),e.restore(),e.lineCap=`round`,e.lineJoin=`round`;let d=Ke(r,a),f=d>=0?ge:at;if(Math.abs(d)>1){u(e,ae(r,a,3).map(e=>l(e,38)),f,3.5);let t=l(a,38),n=l(a-Math.sign(d)*2,38);if(t!==null&&n!==null){let r=Math.hypot(t.x-n.x,t.y-n.y)||1,i=(t.x-n.x)/r,a=(t.y-n.y)/r,o=e=>({x:t.x-i*8-a*6*e,y:t.y-a*8+i*6*e});u(e,[o(1),t,o(-1)],f,2.5)}}let p=Math.abs(Ke(a,i))>.5;p&&(e.setLineDash([4,4]),u(e,ae(a,i,3).map(e=>l(e,38)),me,2.5),e.setLineDash([])),u(e,[l(r,38*.7),l(r,38*1.25)],et,2.5);let m=c(i);if(m!==null){let t={x:o.x+m.x*38*.98,y:o.y+m.y*38*.98},n={x:o.x+m.x*38*1.42,y:o.y+m.y*38*1.42};e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(n.x-m.y*7,n.y+m.x*7),e.lineTo(n.x+m.y*7,n.y-m.x*7),e.closePath(),p||(e.fillStyle=Oe,e.fill()),e.strokeStyle=p?me:z,e.lineWidth=p?2:1,e.stroke()}}function Wa(e,t,n,r,i){if(!t.inFront(n))return;let a=t.toScreen(n);if(e.globalAlpha=r,e.beginPath(),e.arc(a.x,a.y,7,0,Math.PI*2),e.moveTo(a.x-10,a.y),e.lineTo(a.x+10,a.y),e.moveTo(a.x,a.y-10),e.lineTo(a.x,a.y+10),e.strokeStyle=z,e.lineWidth=3.5,e.stroke(),e.strokeStyle=et,e.lineWidth=1.5,e.stroke(),i<Ha&&!_()){let t=i/Ha;e.globalAlpha=r*(1-t)*.6,e.beginPath(),e.arc(a.x,a.y,8+18*t,0,Math.PI*2),e.stroke()}}function Ga(e,t,n,r,i,a){if(!t.inFront(n))return;let o=t.toScreen(n);e.globalAlpha=i,e.font=S(12,`600`),e.textAlign=`center`,e.lineWidth=3,e.strokeStyle=z,e.strokeText(r,o.x,o.y+a),e.fillStyle=et,e.fillText(r,o.x,o.y+a)}var Ka=1500,qa=120,Ja={horizonSeconds:480,stepSeconds:2,runOnSeconds:90};function Ya(e,t,n){let r=F[t.cls].lengthMetres,i=n.headingOf(t),a=it(n.posOf(t),i+180,r/2),s=Math.min(r*.35,Math.max(r*.12,14*n.metresPerPx)),c=it(a,o(i,n.rudderOf(t)),s),l=t.subsystems.steering===`out`;e.lineCap=`round`,P(e,n,[a,c],l?me:Ee,2.5)}function Xa(){let e=null,t=!1,n=null;return{markOrder(t,n,r){e={at:t,headingDeg:n,wallMs:r}},draw(r,i,a,o){let s=i.ships.find(e=>e.side===`raider`);if(s===void 0||s.sunk){e=null;return}r.save(),Ya(r,s,a);let l=a.posOf(s),u=a.headingOf(s),d={pos:l,headingDeg:u,speedKnots:s.motion.speedKnots,rudder:a.rudderOf(s)},m=s.orders.headingDeg,h=f(s).headingDeg,g=!ne(d,h);g?n=null:t&&(n=o),t=g,e!==null&&Math.abs(Ke(e.headingDeg,m))>.5&&(e=null);let _=c(g,n,o);if(_>0){r.globalAlpha=_;let e=ie(s,d,Ja);r.setLineDash([1.5,6]),r.lineCap=`round`,P(r,a,e.points,Oe,2.2);let t=it(l,m,qa*a.metresPerPx);r.setLineDash([7,6]),P(r,a,[l,t],et,1.5),r.setLineDash([]),Ga(r,a,t,nt(m),_,-10),r.globalAlpha=_,Ua(r,a,l,u,m,h),g||Ga(r,a,l,`Steady on ${nt(h)}`,_,-54)}if(e!==null){let t=o-e.wallMs,n=_>0?_:1-p(t/Ka);n<=0?e=null:Wa(r,a,e.at,n,t)}r.restore()}}}function Za(e,t,n,r){if(r===null)return;let i=t.ships.find(e=>e.side===`raider`),a=t.ships.find(e=>e.id===r.victimId);if(i===void 0||a===void 0)return;e.save(),e.lineCap=`round`;let o=fe(i,a,r.spread,t.tick).torpedoes;if(o.length>0){e.setLineDash([8,6]);for(let t of o)P(e,n,[t.pos,it(t.pos,t.headingDeg,t.runMetresLeft)],Oe,1.6)}else{let t=ke[i.cls];if(t!==void 0){let r=B[i.torpedoType??t.type].rangeMetres;Ce(i.motion.pos,a.motion.pos)>r&&(e.setLineDash([5,6]),P(e,n,Array.from({length:73},(e,t)=>it(i.motion.pos,t*5,r)),me,1.5))}}e.restore()}function J(e,t,n){let r=(t,n)=>{let r=e.createShader(t);if(r===null)throw Error(`shader allocation failed`);if(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)!==!0)throw Error(`shader: ${e.getShaderInfoLog(r)??`unknown`}`);return r},i=e.createProgram();if(i===null)throw Error(`program allocation failed`);let a=r(e.VERTEX_SHADER,t),o=r(e.FRAGMENT_SHADER,n);if(e.attachShader(i,a),e.attachShader(i,o),e.linkProgram(i),e.getProgramParameter(i,e.LINK_STATUS)!==!0)throw Error(`link: ${e.getProgramInfoLog(i)??`unknown`}`);e.detachShader(i,a),e.detachShader(i,o),e.deleteShader(a),e.deleteShader(o);let s=new Map;return{program:i,uniform(t){let n=s.get(t);if(n!==void 0)return n;let r=e.getUniformLocation(i,t);return s.set(t,r),r}}}function Qa(e,t){let n=new Float32Array((t+1)*(t+1)*2),r=0;for(let e=0;e<=t;e+=1)for(let i=0;i<=t;i+=1)n[r]=-.5+i/t,n[r+1]=-.5+e/t,r+=2;let i=new Uint32Array(t*t*6),a=0;for(let e=0;e<t;e+=1)for(let n=0;n<t;n+=1){let r=e*(t+1)+n,o=r+1,s=r+(t+1),c=s+1;i[a]=r,i[a+1]=o,i[a+2]=c,i[a+3]=r,i[a+4]=c,i[a+5]=s,a+=6}let o=e.createVertexArray();if(o===null)throw Error(`vao allocation failed`);e.bindVertexArray(o);let s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let c=e.createBuffer();return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,c),e.bufferData(e.ELEMENT_ARRAY_BUFFER,i,e.STATIC_DRAW),e.bindVertexArray(null),{vao:o,indexCount:i.length,cells:t}}function $a(e,t){let n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,40,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,40,12),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,3,e.FLOAT,!1,40,24),e.enableVertexAttribArray(3),e.vertexAttribPointer(3,1,e.FLOAT,!1,40,36),e.bindVertexArray(null),{vao:n,buffer:r,vertexCount:t.length/10}}function eo(e){let t=e.createVertexArray();if(t===null)throw Error(`vao allocation failed`);e.bindVertexArray(t);let n=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null),t}var to=[.11,.19,.44],no=[.92,.92,.9],ro=[.78,.11,.16];function Y(e,t){return{rgb:e,corners:t.map(([e,t])=>[e*.5,t*.5])}}function X(e,t,n,r){return[[e,t],[n,t],[n,r],[e,r]]}var io=[Y(to,X(0,0,1,1)),Y(no,[[0,0],[0,.3],[1,1],[1,.7]]),Y(no,[[0,1],[0,.7],[1,0],[1,.3]]),Y(ro,[[0,.085],[0,.215],[1,.915],[1,.785]]),Y(ro,[[0,.915],[0,.785],[1,.085],[1,.215]]),Y(no,X(0,.333,1,.667)),Y(no,X(.417,0,.583,1)),Y(ro,X(0,.4,1,.6)),Y(ro,X(.45,0,.55,1))],ao={royalNavy:{name:`Royal Navy`,roundel:[{radius:1,rgb:[.13,.29,.66]},{radius:.6,rgb:[.9,.91,.9]},{radius:.2,rgb:[.79,.13,.21]}],finFlash:[{width:1,rgb:[.13,.29,.66]},{width:1,rgb:[.9,.91,.9]},{width:1,rgb:[.79,.13,.21]}],ensign:{name:`White Ensign`,ratio:2,patches:[{corners:X(0,0,1,1),rgb:[.9,.9,.88]},{corners:X(0,.4,1,.6),rgb:ro},{corners:X(.45,0,.55,1),rgb:ro},...io]}},britishMerchant:{name:`British merchant service`,ensign:{name:`Red Ensign`,ratio:2,patches:[{corners:X(0,0,1,1),rgb:[.72,.13,.16]},...io]}}};function oo(e){return ao[e]}var so=.05;function co(e,t,n,r,i,a,o=8){let s=i+so,c=(e,t)=>{let i=t/o*2*Math.PI;return[n+Math.cos(i)*e,r+Math.sin(i)*e,s]};for(let i=0;i<t.length;i+=1){let l=t[i],u=a*l.radius,d=i+1<t.length?a*t[i+1].radius:0;for(let t=0;t<o;t+=1){let i=t+1;d<=0?e.tri([n,r,s],c(u,t),c(u,i),l.rgb):e.quad(c(d,t),c(u,t),c(u,i),c(d,i),l.rgb)}}}function lo(e,t,n,r,i,a,o){let s=t.reduce((e,t)=>e+t.width,0);if(!(s<=0))for(let c of[-1,1]){let l=c*n,u=r;for(let n of t){let t=u+(i-r)*n.width/s,d=c*(i-r)>0?[[l,u,a],[l,t,a],[l,t,o],[l,u,o]]:[[l,t,a],[l,u,a],[l,u,o],[l,t,o]];e.quad(d[0],d[1],d[2],d[3],n.rgb),u=t}}}var uo=.18,fo=.004;function po(e,t,n,r){let i=r*t.ratio,[a,o,s]=n,c=(e,t,n)=>[a+n,o-e*i,s-t*r-e*i*uo];for(let n=0;n<t.patches.length;n+=1){let r=t.patches[n],[i,a,o,s]=r.corners;for(let t of[1,-1]){let l=t*(.01+n*fo),u=(t>0?[i,a,o,s]:[s,o,a,i]).map(([e,t])=>c(e,t,l));e.quad(u[0],u[1],u[2],u[3],r.rgb)}}}function mo(e,t,n){return typeof e==`function`?e(t,n):e}var Z=class{out=[];tri(e,t,n,r){let i=t[0]-e[0],a=t[1]-e[1],o=t[2]-e[2],s=n[0]-e[0],c=n[1]-e[1],l=n[2]-e[2],u=a*l-o*c,d=o*s-i*l,f=i*c-a*s,p=Math.hypot(u,d,f)||1;u/=p,d/=p,f/=p;for(let i of[e,t,n])this.out.push(i[0],i[1],i[2],u,d,f,r[0],r[1],r[2],i[2])}quad(e,t,n,r,i){this.tri(e,t,n,i),this.tri(e,n,r,i)}box(e,t,n,r,i,a,o,s=0){let c=Math.sin(s*Math.PI/180),l=Math.cos(s*Math.PI/180),u=(n,r)=>[e+n*l-r*c,t+n*c+r*l],d=r/2,f=i/2,p=[u(-d,-f),u(d,-f),u(d,f),u(-d,f)],m=p.map(([e,t])=>[e,t,n]),h=p.map(([e,t])=>[e,t,n+a]);this.quad(h[0],h[1],h[2],h[3],o);for(let e=0;e<4;e+=1){let t=(e+1)%4;this.quad(m[e],m[t],h[t],h[e],o)}}prism(e,t,n,r,i,a,o,s=12){for(let c=0;c<s;c+=1){let l=c/s*2*Math.PI,u=(c+1)/s*2*Math.PI,d=[e+r*Math.cos(l),t+i*Math.sin(l),n],f=[e+r*Math.cos(u),t+i*Math.sin(u),n],p=[d[0],d[1],n+a],m=[f[0],f[1],n+a];this.quad(d,f,m,p,o),this.tri([e,t,n+a],p,m,o)}}skin(e,t,n=!0,r=!0){for(let n=0;n+1<e.length;n+=1){let r=e[n],i=e[n+1];for(let e=0;e<r.length;e+=1){let n=(e+1)%r.length,a=mo(t,e,r.length);this.quad(r[e],r[n],i[n],i[e],a)}}let i=mo(t,0,1),a=(e,t)=>{let n=0,r=0,a=0;for(let t of e)n+=t[0]/e.length,r+=t[1]/e.length,a+=t[2]/e.length;for(let o=0;o<e.length;o+=1){let s=(o+1)%e.length,c=e[o],l=e[s];this.tri([n,r,a],t?l:c,t?c:l,i)}};n&&e.length>0&&a(e[0],!0),r&&e.length>1&&a(e[e.length-1],!1)}rod(e,t,n,r,i=6,a=!1){let o=t[0]-e[0],s=t[1]-e[1],c=t[2]-e[2],l=Math.hypot(o,s,c);if(l<1e-6)return;let u=[o/l,s/l,c/l],d=Math.abs(u[2])<.9?[0,0,1]:[1,0,0],f=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],p=(e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]})(f(u,d)),m=f(u,p),h=e=>{let t=[];for(let r=0;r<i;r+=1){let a=r/i*2*Math.PI,o=Math.cos(a)*n,s=Math.sin(a)*n;t.push([e[0]+p[0]*o+m[0]*s,e[1]+p[1]*o+m[1]*s,e[2]+p[2]*o+m[2]*s])}return t};this.skin([h(e),h(t)],r,a,a)}tube(e,t,n,r,i,a,o=10){let s=i/2;for(let i=0;i<o;i+=1){let c=i/o*2*Math.PI,l=(i+1)/o*2*Math.PI,u=[e+r*Math.cos(c),t-s,n+r*Math.sin(c)],d=[e+r*Math.cos(l),t-s,n+r*Math.sin(l)],f=[u[0],t+s,u[2]],p=[d[0],t+s,d[2]];this.quad(d,u,f,p,a),this.tri([e,t+s,n],p,f,a),this.tri([e,t-s,n],u,d,a)}}},ho=[`raider`,`heavyCruiser`,`lightCruiser`,`demsMerchant`,`qship`,`auxRaider`,`destroyer`,`battlecruiser`],go=1.25,_o=827150923;function vo(e,t){if(e.byteLength<12)return null;let n=new DataView(e);if(n.getUint32(0,!0)!==_o)return null;let r=n.getUint32(4,!0),i=n.getUint32(8,!0),a=12+r;if(r%4!=0||a+i*4>e.byteLength)return null;let o;try{o=JSON.parse(new TextDecoder().decode(new Uint8Array(e,12,r)))}catch{return null}if(o.stride!==10||!Array.isArray(o.parts))return null;let s=new Float32Array(e.slice(a,a+i*4)),c=o.parts.find(e=>e.name===`hull`);if(c===void 0||!yo(c,i))return null;let l=[];for(let e of o.parts)if(e.mountId!==void 0){if(!yo(e,i)||e.seat===void 0||e.seat.length!==3)return null;l.push({mountId:e.mountId,seat:[e.seat[0],e.seat[1],e.seat[2]],restDeg:e.restDeg??0,verts:s.subarray(e.offset,e.offset+e.count)})}let u={verts:s.subarray(c.offset,c.offset+c.count),hullFloats:c.boundFloats,mounts:l,bootZ:typeof o.bootZ==`number`&&Number.isFinite(o.bootZ)&&o.bootZ>0&&o.bootZ<=3?o.bootZ:go};return bo(u,t)?u:null}function yo(e,t){return Number.isInteger(e.offset)&&Number.isInteger(e.count)&&e.offset>=0&&e.count>0&&e.count%30==0&&e.offset+e.count<=t&&Number.isInteger(e.boundFloats)&&e.boundFloats>=0&&e.boundFloats<=e.count}function bo(e,t){let n=F[t].lengthMetres/2,r=F[t].beamMetres/2;for(let t=0;t<e.hullFloats;t+=10)if(Math.abs(e.verts[t])>r+.01||Math.abs(e.verts[t+1])>n+.01)return!1;for(let t of e.mounts)if(Math.abs(t.seat[0])>r+.01||Math.abs(t.seat[1])>n+.01||t.seat[2]<=0)return!1;return!0}var xo=new Map,So=0,Co=!1;function wo(){return So}function To(e){return xo.get(e)}async function Eo(){Co||(Co=!0,await Promise.all(ho.map(async e=>{try{let t=await fetch(`models/${e}.krm`);if(!t.ok)return;let n=vo(await t.arrayBuffer(),e);n!==null&&(xo.set(e,n),So+=1)}catch{}})))}var Do=[.295,.305,.315],Oo=[.4,.372,.328],ko=[.355,.365,.375],Ao=[.465,.475,.487],jo=[.125,.125,.135],Mo=[.375,.385,.398],Q=[.19,.195,.205],No=[.3,.302,.31];function Po(e){switch(n[e].deck){case`flightDeck`:return No;case`steel`:return ko;default:return Oo}}function Fo(e,t){let r=n[e],i=F[e].beamMetres/2;if(t<-.5+r.bowFraction){let e=(t+.5)/r.bowFraction;return Math.max(.25,i*Math.sin(e*Math.PI/2)**.82)}if(t>.5-r.sternFraction){let e=(.5-t)/r.sternFraction;return i*(r.sternWidthFraction+(1-r.sternWidthFraction)*Math.sin(e*Math.PI/2)**.8)}return i}function Io(e,t,n){return e===`carrier`?t*.037:2.6+t*.013+(1.2+t*.008)*(Math.max(0,-n+.05)/.55)**1.5+.3*Math.max(0,n-.2)}function Lo(e,t){let n=F[t].lengthMetres,r=Po(t),i=-2.6,a=[];for(let e=0;e<=48;e+=1){let r=-.5+e/48;a.push({y:-r*n,w:Fo(t,r),fb:Io(t,n,r)})}for(let t=0;t<48;t+=1){let n=a[t],o=a[t+1];e.quad([o.w,o.y,i],[n.w,n.y,i],[n.w,n.y,n.fb],[o.w,o.y,o.fb],Do),e.quad([-n.w,n.y,i],[-o.w,o.y,i],[-o.w,o.y,o.fb],[-n.w,n.y,n.fb],Do),e.quad([-n.w,n.y,n.fb],[-o.w,o.y,o.fb],[o.w,o.y,o.fb],[n.w,n.y,n.fb],r)}let o=a[0],s=a[48];e.quad([o.w,o.y,i],[-o.w,o.y,i],[-o.w,o.y,o.fb],[o.w,o.y,o.fb],Do),e.quad([-s.w,s.y,i],[s.w,s.y,i],[s.w,s.y,s.fb],[-s.w,s.y,s.fb],Do)}function Ro(e){return e===`raider`?3:e===`lightCruiser`||e===`heavyCruiser`||e===`battlecruiser`||e===`carrier`?2:1}function zo(e,t){return t===void 0?e===`raider`||e===`lightCruiser`||e===`heavyCruiser`||e===`battlecruiser`||e===`destroyer`:!1}function Bo(e,t,r){let i=n[t],a=F[t],o=a.lengthMetres,s=a.beamMetres,c=e=>-e*o,l=e=>Io(t,o,e);{let n=c(i.bridge.along),a=l(i.bridge.along),u=i.bridge.lengthFraction*o,d=t===`carrier`?s*.22:s*.52,f=t===`carrier`?s*.5-d/2-.4:0;e.box(f,n,a,d,u,4.5+o*.011,Ao),e.box(f,n+.6,a+4.5+o*.011,d*.64,u*.6,4.2,Ao),t===`raider`&&(e.box(0,n+.4,a+12.3,3.8,4.6,4.2,Ao),r.box(0,n+2.4,a+16.5,.7,.7,4.6,Q))}for(let t of i.blocks??[])e.box(0,c(t.along),l(t.along),t.widthFraction*s,t.lengthFraction*o,3.6+o*.008,Ao);for(let t of i.funnels){let n=c(t),r=l(t),i=8+o*.02;e.prism(0,n,r,1.6+s*.05,3.4+s*.07,i,Ao),e.prism(0,n,r+i,1.7+s*.05,3.5+s*.07,1.2,jo)}for(let t of i.masts??[]){let n=c(t),i=l(t)+4;e.box(0,n,i,.5,.5,9+o*.02,Q),r.box(0,n,i+7+o*.015,6+s*.1,.35,.35,Q)}for(let t of i.kingposts??[]){let n=c(t),r=l(t);e.box(-s*.28,n,r,.7,.7,9,Q),e.box(s*.28,n,r,.7,.7,9,Q),e.box(0,n,r+8.2,s*.62,.4,.4,Q)}if(i.catapult!==void 0){let t=c(i.catapult),n=l(i.catapult);e.box(0,t,n,s*.62,2.1,.8,Q),e.box(0,t,n+1.5,1.1,7.6,1.1,[.7,.715,.735]),e.box(0,t+.5,n+2.5,8.8,1.6,.26,[.7,.715,.735])}for(let t of i.tubeMounts??[]){let n=(t.athwart??0)*(s/2);e.box(n,c(t.along),l(t.along),2.1,6,1.4,Q)}}function Vo(e,t,n,r){let i=F[n].lengthMetres>200;if(!r){e.box(0,0,0,3,2.5,2,Mo),t.box(0,3.2,1.15,.3,5.2,.3,Mo);return}let a=i||n===`raider`?1:n===`destroyer`?.5:.66;e.prism(0,0,0,4.8*a,4.8*a,1.2,Mo,12),e.box(0,0,1.2,8.2*a,10.2*a,2.9*a,Mo);let o=Ro(n),s=1.9*a,c=(i||n===`raider`?11.4:8.2)*a;for(let e=0;e<o;e+=1){let n=(e-(o-1)/2)*s;t.box(n,c*.75,1.2+1.3*a,.4,c,.4,Mo)}}var Ho=new Map;function Uo(e){let t=To(e);if(t!==void 0)return t.mounts;let r=Ho.get(e);if(r!==void 0)return r;let i=F[e],a=i.lengthMetres,o=i.beamMetres,s=n[e].turrets.map(t=>{let n=new Z,r=new Z;Vo(n,r,e,zo(e,t.athwart));let i=new Float32Array(n.out.length+r.out.length);return i.set(n.out,0),i.set(r.out,n.out.length),{mountId:t.mountId,seat:[(t.athwart??0)*(o/2),-t.along*a,Io(e,a,t.along)],restDeg:t.restDeg,verts:i}});return Ho.set(e,s),s}function Wo(e){return To(e)?.bootZ??1.25}function Go(e,t=!0){let r=n[e].ensign,i=r===void 0?void 0:oo(r.set)?.ensign;if(!t||r===void 0||i===void 0)return new Float32Array;let a=new Z,o=F[e].lengthMetres;return po(a,i,[0,-r.along*o,r.headMetres],r.hoistMetres),new Float32Array(a.out)}var Ko=new Map,qo=new Map;function Jo(e,t=!0){let n=To(e);if(n!==void 0){let r=Go(e,t);if(r.length===0)return{verts:n.verts,hullFloats:n.hullFloats};let i=wo(),a=`${e}:${+!!t}`,o=qo.get(a);if(o!==void 0&&o.gen===i)return o.mesh;let s=new Float32Array(n.verts.length+r.length);s.set(n.verts,0),s.set(r,n.verts.length);let c={verts:s,hullFloats:n.hullFloats};return qo.set(a,{gen:i,mesh:c}),c}let r=Ko.get(e);if(r!==void 0)return r;let i=new Z,a=new Z;Lo(i,e),Bo(i,e,a);let o=i.out.length,s=new Float32Array(o+a.out.length);s.set(i.out,0),s.set(a.out,o);let c={verts:s,hullFloats:o};return Ko.set(e,c),c}var Yo=1,Xo=.35,Zo=.9,Qo=1.5,$o=6,es=50,ts=[.07,.065,.062],ns=[.022,.02,.02];function rs(e){let t=[];for(let n=0;n+30<=e.length;n+=30){let r=0,i=0,a=0;for(let t=0;t<3;t+=1)r+=e[n+t*10],i+=e[n+t*10+1],a+=e[n+t*10+2];t.push({at:n,cx:r/3,cy:i/3,cz:a/3})}return t}function is(e,t){let n=e.filter(e=>e.cy>t-Yo).sort((e,t)=>e.cx-t.cx),r=[],i=0,a=0,o=!1;for(let e of n){if(o&&e.cx-a<=Zo){a=e.cx;continue}o&&r.push({centreX:(i+a)/2,halfWidth:(a-i)/2}),i=e.cx,a=e.cx,o=!0}return o&&r.push({centreX:(i+a)/2,halfWidth:(a-i)/2}),r}function as(e,t){return Math.abs(t-e.centreX)<=e.halfWidth+Xo}function os(e){let t=rs(e),n=-1/0;for(let t=0;t<e.length;t+=10){let r=e[t+1];r>n&&(n=r)}let r=is(t,n),i=-1/0;for(let e of t)!r.some(t=>as(t,e.cx))&&e.cy>i&&(i=e.cy);if(!Number.isFinite(i))return{houseAt:t.map(e=>e.at),barrels:[],roofZ:0};let a=[],o=r.map(()=>({at:[],minY:1/0,sumZ:0,n:0})),s=-1/0;for(let n of t){let t=r.findIndex(e=>as(e,n.cx)),c=t<0?void 0:o[t];if(c===void 0||n.cy<=i){a.push(n.at),n.cz>s&&(s=n.cz);continue}c.at.push(n.at);for(let t=0;t<3;t+=1){let r=e[n.at+t*10+1];r<c.minY&&(c.minY=r)}c.sumZ+=n.cz,c.n+=1}return{houseAt:a,barrels:o.filter(e=>e.at.length>0&&n-e.minY>=Qo).map(e=>({at:e.at,pivotY:e.minY,pivotZ:e.sumZ/e.n,lengthMetres:n-e.minY})),roofZ:Number.isFinite(s)?s:0}}function ss(e){let t=Math.asin(Math.max(0,Math.min(1,e.pivotZ/e.lengthMetres)));return Math.max($o*Math.PI/180,Math.min(es*Math.PI/180,t))}function cs(e,t,n){for(let r=0;r<30;r+=1)n.push(e[t+r])}function ls(e,t,n){let r=ss(t),i=Math.cos(r),a=Math.sin(r);for(let r of t.at)for(let o=0;o<3;o+=1){let s=r+o*10,c=e[s+1]-t.pivotY,l=e[s+2]-t.pivotZ,u=t.pivotY+c*i+l*a,d=t.pivotZ-c*a+l*i,f=e[s+4],p=e[s+5];n.push(e[s],u,d,e[s+3],f*i+p*a,-f*a+p*i,e[s+6],e[s+7],e[s+8],d)}}function us(e,t,n){let r=M(n),i=.55+.5*G(r,3),a=(G(r,1)-.5)*1.6,o=(G(r,2)-.5)*2.2,s=t.roofZ+.03,c=[];for(let e=0;e<9;e+=1){let t=e/9*Math.PI*2,n=i*(.62+.62*G(r,10+e));c.push([a+Math.cos(t)*n,o+Math.sin(t)*n])}for(let t=0;t<9;t+=1){let n=c[t],r=c[(t+1)%9];e.tri([a,o,s],[n[0],n[1],s],[r[0],r[1],s],ts),e.tri([a,o,s-i*.9],[r[0],r[1],s],[n[0],n[1],s],ns)}}var ds=new WeakMap;function fs(e,t){let n=ds.get(e);n===void 0&&(n=new Map,ds.set(e,n));let r=n.get(t);if(r!==void 0)return r;let i=os(e);if(i.barrels.length===0)return n.set(t,e),e;let a=gr(t,i.barrels.length),o=[];for(let t of i.houseAt)cs(e,t,o);i.barrels.forEach((t,n)=>{if(n===a){ls(e,t,o);return}for(let n of t.at)cs(e,n,o)});let s=new Z;us(s,i,t);let c=new Float32Array(o.length+s.out.length);return c.set(o,0),c.set(s.out,o.length),n.set(t,c),c}var ps=.5;function ms(e,t,n,r){let i=1/Math.tan(e/2),a=new Float32Array(16);return a[0]=i/t,a[5]=i,a[10]=(r+n)/(n-r),a[11]=-1,a[14]=2*r*n/(n-r),a}function hs(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2]]}function gs(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function _s(e){let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]}function vs(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function ys(e,t,n){let r=_s(hs(e,t)),i=_s(gs(n,r)),a=gs(r,i),o=new Float32Array(16);return o[0]=i[0],o[1]=a[0],o[2]=r[0],o[4]=i[1],o[5]=a[1],o[6]=r[1],o[8]=i[2],o[9]=a[2],o[10]=r[2],o[12]=-vs(i,e),o[13]=-vs(a,e),o[14]=-vs(r,e),o[15]=1,o}function bs(e,t){let n=new Float32Array(16);for(let r=0;r<4;r+=1)for(let i=0;i<4;i+=1){let a=0;for(let n=0;n<4;n+=1)a+=e[n*4+i]*t[r*4+n];n[r*4+i]=a}return n}function xs(e,t,n,r=.06){let i=[e.groundFromScreen(0,0),e.groundFromScreen(t,0),e.groundFromScreen(0,n),e.groundFromScreen(t,n)],a=1/0,o=-1/0,s=1/0,c=-1/0;for(let e of i)a=Math.min(a,e.x),o=Math.max(o,e.x),s=Math.min(s,e.y),c=Math.max(c,e.y);return{centreX:(a+o)/2,centreY:(s+c)/2,spanMetres:Math.max(o-a,c-s)*(1+r)}}function Ss(e,t,n,r){let i=n/r;return{x:Math.round(e/i)*i,y:Math.round(t/i)*i}}function Cs(e){return Math.min(58,Math.max(ps,e))}function ws(e){let t=Cs(e.pitchDeg)*Math.PI/180,n=38*Math.PI/180,r=e.heightPx/2/Math.tan(n/2),i=r*e.zoomMetresPerPx,a=[e.targetX,e.targetY-Math.sin(t)*i,Math.cos(t)*i],o=[e.targetX,e.targetY,0],s=ys(a,o,[0,0,1]),c=bs(ms(n,e.widthPx/Math.max(e.heightPx,1),Math.max(i*.05,1),i*6+12e3),s),l=Math.max(i*.05,1),u=(e,t,n)=>c[3]*e+c[7]*t+c[11]*n+c[15],d=_s(hs(a,o)),f=_s(gs([0,0,1],d)),p=gs(d,f);return{eye:a,target:[e.targetX,e.targetY],viewProjection:c,metresPerPxAtTarget:e.zoomMetresPerPx,project(t,n,r=0){let i=c[0]*t+c[4]*n+c[8]*r+c[12],a=c[1]*t+c[5]*n+c[9]*r+c[13],o=u(t,n,r),s=o===0?1e-6:o;return{x:e.widthPx/2+i/s*e.widthPx/2,y:e.heightPx/2-a/s*e.heightPx/2}},inFrontOfEye(e,t,n=0){return u(e,t,n)>l},groundFromScreen(t,n){let i=t-e.widthPx/2,o=e.heightPx/2-n,s=_s([f[0]*i+p[0]*o-d[0]*r,f[1]*i+p[1]*o-d[1]*r,f[2]*i+p[2]*o-d[2]*r]),c=Math.min(s[2],-1e-4),l=-a[2]/c;return{x:a[0]+s[0]*l,y:a[1]+s[1]*l}}}}function Ts(e,t,n,r,i){let a=t*Math.PI/180,o=Math.cos(a),s=Math.sin(a),c=Math.cos(r),l=Math.sin(r),u=Math.cos(i),d=Math.sin(i),f=[o,-s,0,s,o,0,0,0,1],p=[1,0,0,0,c,l,0,-l,c],m=[u,0,-d,0,1,0,d,0,u],h=(e,t)=>{let n=Array(9).fill(0);for(let r=0;r<3;r+=1)for(let i=0;i<3;i+=1){let a=0;for(let n=0;n<3;n+=1)a+=e[n*3+i]*t[r*3+n];n[r*3+i]=a}return n},g=h(f,h(p,m)),_=new Float32Array(16);return _[0]=g[0],_[1]=g[1],_[2]=g[2],_[4]=g[3],_[5]=g[4],_[6]=g[5],_[8]=g[6],_[9]=g[7],_[10]=g[8],_[12]=e.x,_[13]=e.y,_[14]=n,_[15]=1,{matrix:_,normal:new Float32Array(g)}}function Es(e,t,n){let r=Math.max(t[2]??1,.25),i=(t[0]??0)/r,a=(t[1]??0)/r,o=new Float32Array(16);for(let t=0;t<4;t+=1){let n=e[t*4+2];o[t*4]=e[t*4]-i*n,o[t*4+1]=e[t*4+1]-a*n,o[t*4+2]=0,o[t*4+3]=e[t*4+3]}return o[14]=n,o}function Ds(e){let t=e.eye[0]-e.target[0],n=e.eye[1]-e.target[1],r=e.eye[2],i=Math.hypot(t,n,r)||1,a=[t/i,n/i,r/i],o=Math.hypot(a[1],a[0])||1,s=[-a[1]/o,a[0]/o,0];return{right:s,up:[a[1]*s[2]-a[2]*s[1],a[2]*s[0]-a[0]*s[2],a[0]*s[1]-a[1]*s[0]]}}function Os(e,t,n){let r=n*Math.PI/180,i=Math.cos(r),a=Math.sin(r),o=[i,a,0,-a,i,0,0,0,1],s=new Float32Array(16),c=(e,t,n)=>e[n*4+t];for(let t=0;t<3;t+=1)for(let n=0;n<3;n+=1){let r=0;for(let i=0;i<3;i+=1)r+=c(e,n,i)*o[t*3+i];s[t*4+n]=r}for(let n=0;n<3;n+=1){let r=c(e,n,3);for(let i=0;i<3;i+=1)r+=c(e,n,i)*t[i];s[12+n]=r}s[15]=1;let l=new Float32Array(9);for(let e=0;e<3;e+=1)for(let t=0;t<3;t+=1)l[e*3+t]=s[e*4+t];return{matrix:s,normal:l}}var ks=Math.PI/180;function As(e,t,n){let{gl:r}=e;for(let i of t){let t=e.posOf(i),a=e.headingOf(i),o=a*ks,s=[Math.sin(o),Math.cos(o)],c=[Math.cos(o),-Math.sin(o)],l=(n,r)=>e.seaAt(t.x+n,t.y+r),u=Math.min(e.sinkOf(i),1.2),d=Ts(t,a,.55*l(0,0)-.15-3.2*u,Math.max(-.038,Math.min(.038,.6*Math.atan2(l(s[0]*70,s[1]*70)-l(-s[0]*70,-s[1]*70),140)))+.075*u+br(i.flooding)*ks,Math.max(-.05,Math.min(.05,.8*Math.atan2(l(c[0]*9,c[1]*9)-l(-c[0]*9,-c[1]*9),18)))+.2*u+yr(i.flooding,i.id)*ks);r.uniformMatrix4fv(n(`uModel`),!1,d.matrix),r.uniformMatrix3fv(n(`uNM`),!1,d.normal),r.uniform1f(n(`uBootZ`),Wo(i.cls)),r.uniform1f(n(`uWound`),0);let f=e.hullVao(i);if(r.bindVertexArray(f.vao),r.drawArrays(r.TRIANGLES,0,f.vertexCount),r.uniform1f(n(`uBootZ`),-1e6),!(e.showMounts!==void 0&&!e.showMounts(i))){for(let t of Uo(i.cls)){let a=i.subsystems[t.mountId],o=i.mounts.find(e=>e.mountId===t.mountId)?.trainDeg??t.restDeg,s=Os(d.matrix,t.seat,-o);r.uniformMatrix4fv(n(`uModel`),!1,s.matrix),r.uniformMatrix3fv(n(`uNM`),!1,s.normal),r.uniform1f(n(`uWound`),hr(a));let c=e.mountVao(i.cls,t,a===`out`);r.bindVertexArray(c.vao),r.drawArrays(r.TRIANGLES,0,c.vertexCount)}r.uniform1f(n(`uWound`),0)}}}function js(e,t){return t?fs(e.verts,e.mountId):e.verts}var Ms=`#version 300 es
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
}`,Ns=`#version 300 es
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
}`,Ps=`#version 300 es
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
}`,Fs=`#version 300 es
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
}`,Is=16,Ls=7,Rs=80,zs={fore:.3,mid:.02,aft:-.3};function Bs(e){let t=J(e,Ms,Ns),n=J(e,Ps,Fs),r=eo(e);return{draw(i,a,o,s,c,l,u,f){let p=i.filter(e=>e.fires.length>0);if(p.length===0)return;let m=s.eye[0]-s.target[0],h=s.eye[1]-s.target[1],g=s.eye[2],_=Math.hypot(m,h,g)||1,v=[m/_,h/_,g/_],y=Math.hypot(v[1],v[0])||1,b=[-v[1]/y,v[0]/y,0],x=[v[1]*b[2]-v[2]*b[1],v[2]*b[0]-v[0]*b[2],v[0]*b[1]-v[1]*b[0]],ee=[...p].sort((e,t)=>{let n=a(e),r=a(t);return Math.hypot(r.x-s.eye[0],r.y-s.eye[1])-Math.hypot(n.x-s.eye[0],n.y-s.eye[1])}),S=[],te=[],C=[];for(let e of ee){let t=a(e),n=o(e)*Math.PI/180,r=[Math.sin(n),Math.cos(n)],i=F[e.cls].lengthMetres;e.fires.forEach((n,a)=>{let o=(zs[n.zone]??0)*i,s={x:t.x+r[0]*o,y:t.y+r[1]*o},p=M(e.id)+a*977|0,m=n.intensity,h=.62-.55*Vs(.35,.85,m),g=45+250*m,_=d(Is);for(let e=0;e<_;e+=1){let t=G(p,e*3),n=(t+c/Rs)%1,r=n*g,i=(G(p,e*3+1)-.5)*(5+.1*r),o=(G(p,e*3+2)-.5)*(5+.1*r),d=.3*r+40*n*n,_=.5+.5*Math.sin(l*.011+e*2.7+p);S.push({pos:{x:s.x+u[0]*d+i,y:s.y+u[1]*d+o},z:4+r,r:(10+.3*r+14*m)*(.8+.4*G(p,e*3+7)),alpha:m*.72*(1-n)**.7*(.75+.25*t),col:[h*f[0],h*f[1],h*f[2]],seed:t*9+a,ph:n,ember:Vs(25,0,r)*m*_*.8})}let v=d(Ls);for(let e=0;e<v;e+=1){let t=G(p,100+e*3),n=(25+300*t)*(.4+.6*m),r=(G(p,101+e*3)-.5)*(10+.12*n),i=h+(.74-h)*.65;S.push({pos:{x:s.x+u[0]*n-u[1]*r,y:s.y+u[1]*n+u[0]*r},z:6+16*t,r:17+.12*n,alpha:.3*m*(1-t*.75),col:[i*f[0],i*f[1],i*f[2]],seed:t*9+a+.5,ph:t,ember:0})}let y=[r[1],-r[0]],b=6+Math.round(m*8);for(let e=0;e<b;e+=1){let t=(G(p,200+e*4)-.5)*2*(5+9*m),n=(G(p,201+e*4)-.5)*2*(2.5+3.5*m),i=.5+.5*Math.sin(l*(.009+.004*G(p,202+e*4))+e*2.1+p);te.push({pos:{x:s.x+r[0]*t+y[0]*n,y:s.y+r[1]*t+y[1]*n},z:5.6+(G(p,203+e*4)-.5)*1.8,r:(1.6+2.6*G(p,204+e*4))*(.8+.5*m),alpha:.75*m,col:[(3.5+8*m)*(.55+.7*G(p,205+e*4))*(.85+.35*i),0,0],seed:e*3.3+p%7,ph:i,ember:0})}for(let e=0;e<3;e+=1){let t=.6+.4*Math.sin(l*.007+e*2.9+p);C.push({pos:{x:s.x+(G(p,300+e)-.5)*(6+8*m),y:s.y+(G(p,301+e)-.5)*(5+5*m)},z:5.4,r:(4+7*m)*(.8+.4*G(p,302+e)),alpha:.3*m*t,col:[1,.52,.2],seed:e*1.7+p%5,ph:t,ember:.9})}})}e.enable(e.BLEND),e.depthMask(!1),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.useProgram(t.program),e.bindVertexArray(r),e.uniformMatrix4fv(t.uniform(`uVP`),!1,s.viewProjection),e.uniform3f(t.uniform(`uRight`),b[0],b[1],b[2]),e.uniform3f(t.uniform(`uUp`),x[0],x[1],x[2]);for(let n of S)e.uniform3f(t.uniform(`uPos`),n.pos.x,n.pos.y,n.z),e.uniform1f(t.uniform(`uR`),n.r),e.uniform3f(t.uniform(`uCol`),n.col[0],n.col[1],n.col[2]),e.uniform1f(t.uniform(`uA`),n.alpha),e.uniform1f(t.uniform(`uSeed`),n.seed),e.uniform1f(t.uniform(`uPh`),n.ph),e.uniform1f(t.uniform(`uEmber`),n.ember),e.drawArrays(e.TRIANGLES,0,6);e.blendFunc(e.SRC_ALPHA,e.ONE),e.useProgram(t.program),e.uniform3f(t.uniform(`uRight`),1,0,0),e.uniform3f(t.uniform(`uUp`),0,1,0);for(let n of C)e.uniform3f(t.uniform(`uPos`),n.pos.x,n.pos.y,n.z),e.uniform1f(t.uniform(`uR`),n.r),e.uniform3f(t.uniform(`uCol`),n.col[0],n.col[1],n.col[2]),e.uniform1f(t.uniform(`uA`),n.alpha),e.uniform1f(t.uniform(`uSeed`),n.seed),e.uniform1f(t.uniform(`uPh`),n.ph),e.uniform1f(t.uniform(`uEmber`),n.ember),e.drawArrays(e.TRIANGLES,0,6);e.useProgram(n.program),e.uniformMatrix4fv(n.uniform(`uVP`),!1,s.viewProjection),e.uniform3f(n.uniform(`uCam`),s.eye[0],s.eye[1],s.eye[2]);for(let t of te)e.uniform3f(n.uniform(`uPos`),t.pos.x,t.pos.y,t.z),e.uniform1f(n.uniform(`uW`),t.r*2),e.uniform1f(n.uniform(`uH`),t.col[0]),e.uniform1f(n.uniform(`uA`),t.alpha),e.uniform1f(n.uniform(`uSeed`),t.seed),e.uniform1f(n.uniform(`uFlick`),t.ph),e.drawArrays(e.TRIANGLES,0,6);e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null)}}}function Vs(e,t,n){let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)}var Hs=8,Us=6;function Ws(e,t,n,r){let i=(n+r)/2,a=(n-r)/2,o=2/3.1,s=[];for(let n=0;n<Hs;n+=1){let r=n/Hs*2*Math.PI,c=Math.cos(r),l=Math.sin(r);s.push([Math.sign(c)*Math.abs(c)**o*t,e,i+Math.sign(l)*Math.abs(l)**o*a])}return s}function Gs(e,t){let n=[];for(let r=0;r<Us;r+=1){let i=r/Us*2*Math.PI,a=t.le-t.chord*(1-Math.cos(i))/2,o=Math.sin(i)*t.thick/2;n.push(e?[t.rise-o,a,t.at]:[t.at,a,t.rise+o])}return n}function Ks(e,t,n,r,i){e.skin(n.map(e=>Gs(t,e)),(e,t)=>e<t/2?r:i)}function qs(e,t,n,r){let{semiSpan:i,leY:a,chord:o,z:s,dihedralRise:c,shape:l}=t,u=[];for(let e=-1;e<=1;e+=2){let t=l.map(([t,n,r,l])=>({at:e*t*i,le:a-o*l,chord:o*n,thick:o*.115*r,rise:s+c*t}));u.push(...e===-1?t.reverse():t.slice(1))}Ks(e,!1,u,n,r)}function Js(e,t,n,r,i,a,o,s=6){let c=e=>{let t=[];for(let a=0;a<s;a+=1){let o=a/s*2*Math.PI;t.push([e,n+Math.cos(o)*i,r+Math.sin(o)*i])}return t};e.skin([c(t-a/2),c(t+a/2)],o,!1,!1)}var Ys=[.317,.328,.343],Xs=[.166,.174,.186],Zs=[[.5,.006],[.4,.038],[-.24,.0435],[-.4,.031],[-.482,.0155]],Qs=6;function $s(e,t,n,r,i){let a=(e,a)=>{let o=[];for(let s=0;s<Qs;s+=1){let c=s/Qs*2*Math.PI;o.push([n+Math.cos(c)*a*t,r+e*t,i+Math.sin(c)*a*t])}return o};e.skin(Zs.map(([e,t])=>a(e,t)),Ys);let o=t*.068,s=r-t*.43,c=t*.058,l=t*.006;for(let t of[!1,!0]){let r=e=>[[-c,-l],[c,-l],[c,l],[-c,l]].map(([r,a])=>t?[n+a,s+e,i+r]:[n+r,s+e,i+a]);e.skin(t?[r(-o),r(o)]:[r(o),r(-o)],Xs,!1,!1)}}var ec=[.243,.283,.256],tc=[.281,.305,.318],nc=[.6,.632,.575],rc=[.198,.21,.222],$=[.166,.174,.186],ic=[.082,.09,.1],ac=[[0,1,1,0],[.88,.93,.88,.025],[1,.34,.44,.2]];function oc(e){Ks(e,!0,[{at:.16,le:-3.45,chord:1.97,thick:.2,rise:0},{at:1.24,le:-3.63,chord:1.78,thick:.14,rise:0},{at:1.6,le:-4.28,chord:.86,thick:.07,rise:0}],tc,tc)}function sc(e){e.skin([[4.3,.54,.6,-.58],[1.35,.53,.8,-.7],[-1.15,.49,.74,-.66],[-3.4,.31,.54,-.42],[-5.2,.11,.35,-.14]].map(([e,t,n,r])=>Ws(e,t,n,r)),(e,t)=>e<t/2?tc:nc,!1,!1)}function cc(e){e.skin([Ws(5.02,.63,.63,-.63),Ws(4.56,.66,.66,-.66),Ws(4.3,.58,.6,-.6)],rc,!0,!1);for(let t=0;t<3;t+=1){let n=t/3*2*Math.PI,r=Math.cos(n),i=Math.sin(n),a=(e,t,n)=>[[t/2,-n/2],[t/2,n/2],[-t/2,n/2],[-t/2,-n/2]].map(([t,n])=>{let a=.5,o=t*Math.cos(a)-n*Math.sin(a),s=t*Math.sin(a)+n*Math.cos(a);return[r*e-i*s,5.28+o,i*e+r*s]});e.skin([a(.2,.28,.07),a(1.56,.16,.04)],rc,!1,!1)}}function lc(e,t,n){for(let r of[-1,1]){e.rod([r*.5,2.9,.68],[r*.74,2.68,t],.06,$,4),e.rod([r*.5,1.5,.76],[r*.74,1.72,t],.06,$,4);let i=3.55,a=n+.26;e.rod([r*i,1.62,a],[r*i,2.44,t],.06,$,4),e.rod([r*i,.36,a],[r*i,1.18,t],.06,$,4),e.rod([r*.3,-3.55,-.5],[r*1.32,-4.02,-.16],.05,$,4)}}function uc(e){for(let t of[-1,1]){let n=[t*1.44,1.74,-1.74];e.rod([t*.46,2.24,-.6],n,.075,$,4),e.rod([t*.46,1.16,-.64],n,.075,$,4),Js(e,t*1.43,1.74,-1.74,.4,.26,$,8)}e.rod([0,-4.62,-.28],[0,-4.72,-.62],.07,$,4),Js(e,0,-4.72,-.66,.19,.14,$,6)}function dc(e,t,n,r,i){let a=oo(oe.swordfish.insignia);if(a!==void 0){if(a.roundel!==void 0){let o=t+r*.115*.47;for(let t of[-1,1])co(e,a.roundel,t*i*.58,n-r/2,o,r*.36)}a.finFlash!==void 0&&lo(e,a.finFlash,.105,-4.32,-5.16,.42,1.2)}}function fc(e,t){let n=1.3,r=-.66,i=6.935,a=2.03;sc(e),cc(e);let o=2.02,s={semiSpan:i,chord:a,shape:ac};qs(e,{...s,leY:o,z:r,dihedralRise:.34},ec,nc),qs(e,{...s,leY:o,z:n,dihedralRise:0},ec,nc),qs(e,{semiSpan:2,chord:1.24,shape:ac,leY:-3.62,z:-.18,dihedralRise:.06},ec,nc),oc(e),lc(e,n,r),uc(e),dc(e,n,o,a,i),e.box(0,-.45,.3,.68,3.9,.56,ic),t&&$s(e,5.1,0,.36,-1.46)}var pc={swordfish:fc};function mc(e,t){let n=new Float32Array(e.out);for(let e=0;e<n.length;e+=10)n[e]=n[e]*t,n[e+1]=n[e+1]*t,n[e+2]=n[e+2]*t,n[e+9]=n[e+9]*t;return n}var hc=new Map;function gc(e){let t=Math.round(e*100),n=hc.get(t);if(n!==void 0)return n;let r=new Z;$s(r,e,0,0,0);let i={verts:mc(r,2)};return hc.set(t,i),i}var _c=new Map;function vc(e,t){let n=`${e}:${t?`armed`:`clean`}`,r=_c.get(n);if(r!==void 0)return r;let i=new Z;pc[e](i,t);let a={verts:mc(i,2)};return _c.set(n,a),a}var yc=.514444,bc=60,xc=55,Sc=95;function Cc(e){return e===`withdrawing`?Sc:xc}var wc=.05,Tc=.7,Ec=.45,Dc=[0,0,1],Oc=.46;function kc(e){if(e===0)return{back:0,out:0};let t=Math.ceil(e/2),n=e%2==1?-1:1;return{back:t*bc,out:n*t*bc}}function Ac(e,t){let n=t.ships.find(e=>e.side===`raider`);if(n===void 0||e.phase!==`approach`)return 0;let r=(Math.atan2(n.motion.pos.x-e.pos.x,n.motion.pos.y-e.pos.y)*180/Math.PI-e.headingDeg+540)%360-180;return Math.max(-.7,Math.min(Tc,r*wc))}function jc(e){let t=new Map,n=(n,r)=>{let i=t.get(n);if(i!==void 0)return i;let a=$a(e,r());return t.set(n,a),a},r=(e,t)=>n(`${e}:${t?`armed`:`clean`}`,()=>vc(e,t).verts),i=e=>n(`fish:${e.toFixed(2)}`,()=>gc(e).verts);return{draw(t,n,a,o,s,c){let l=t.tick+Math.min(1,Math.max(0,a)),u=t.torpedoes.map(e=>({fish:e,drop:ma(e,l,o)})).filter(e=>e.drop!==null);if(t.flights.length===0&&u.length===0)return;let d=e=>n.uniform(e);e.uniform1f(d(`uBootZ`),-1e6);let f=Math.min(1,Math.max(0,a)),p=[];for(let e of t.flights){let n=oe[e.aircraft].speedKnots*yc*o*f,i=e.headingDeg*Math.PI/180,a=Math.sin(i),s=Math.cos(i),c={x:e.pos.x+a*n,y:e.pos.y+s*n},l=e.phase===`approach`,u=l?xc:Sc,d=Ac(e,t);for(let t=0;t<e.count;t+=1){let n=kc(t),i=Ts({x:c.x-a*n.back-s*n.out,y:c.y-s*n.back+a*n.out},e.headingDeg,u,0,d);p.push({matrix:i.matrix,normal:i.normal,vao:r(e.aircraft,l)})}}for(let{fish:e,drop:t}of u){if(t===null)continue;let n=Ts({x:t.x,y:t.y},e.headingDeg,t.z,-t.pitchR,0);p.push({matrix:n.matrix,normal:n.normal,vao:i(_a(e.type))})}e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1);let m=(t,n)=>{e.uniform1f(d(`uShadow`),t);for(let t of p)e.uniformMatrix4fv(d(`uModel`),!1,Es(t.matrix,n,Ec)),e.uniformMatrix3fv(d(`uNM`),!1,t.normal),e.bindVertexArray(t.vao.vao),e.drawArrays(e.TRIANGLES,0,t.vao.vertexCount)};m(Oc,Dc),m(.3+.32*Math.min(1,Math.max(0,c)),s),e.depthMask(!0),e.disable(e.BLEND),e.uniform1f(d(`uShadow`),0);for(let t of p)e.uniformMatrix4fv(d(`uModel`),!1,t.matrix),e.uniformMatrix3fv(d(`uNM`),!1,t.normal),e.bindVertexArray(t.vao.vao),e.drawArrays(e.TRIANGLES,0,t.vao.vertexCount);e.bindVertexArray(null)}}}var Mc=`#version 300 es
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
}`,Nc=`#version 300 es
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
}`,Pc=16,Fc=3.4,Ic=5,Lc=9,Rc=26,zc=3,Bc=[1,.84,.54],Vc=[.93,.95,.98],Hc=[1,.77,.43],Uc=[.25,.26,.29],Wc=12;function Gc(e){let t=J(e,Mc,Nc),n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);let a=Wc*4;for(let t=0;t<3;t+=1)e.enableVertexAttribArray(1+t),e.vertexAttribPointer(1+t,4,e.FLOAT,!1,a,t*16),e.vertexAttribDivisor(1+t,1);e.bindVertexArray(null);let o=new Float32Array(512*Wc),s=0,c=(e,t,n,r,i,a)=>{if((s+1)*Wc>o.length){let e=new Float32Array(o.length*2);e.set(o),o=e}let c=s*Wc;o.set([e[0],e[1],e[2],n],c),o.set([t[0],t[1],t[2],r],c+4),o.set([i[0],i[1],i[2],a],c+8),s+=1},l=(e,t)=>{let n=Cc(`approach`),r=1/0;for(let i of e.flights){let e=Math.hypot(i.pos.x-t.to.x,i.pos.y-t.to.y);e<r&&(r=e,n=Cc(i.phase))}return n};return{draw(r,a,u){s=0;let f=r.tick+p(u),m=r.ships.find(e=>e.side===`raider`)?.cls;for(let e of r.aaFire??[]){let t=e.to.x-e.from.x,n=e.to.y-e.from.y,i=Math.hypot(t,n);if(i<1)continue;let a=e.style===`tracer`,o=i/(a?wn:Tn),s=Dn(e),u=l(r,e),p=d(On(e)),h=Mn(e,m);for(let t=0;t<p;t+=1){let n=f-kn(e,s,t,p);if(n<0)continue;let r=Nn(e,s,t,i),l=n/o,m=h[t%2],g=e=>[m.x+(r.x-m.x)*e,m.y+(r.y-m.y)*e,Pc+(u-Pc)*e];if(l<=1){c(g(Math.max(0,l-(a?.055:.035))),g(l),a?Fc:Ic,a?.95:1,a?Bc:Vc,0);continue}if(a)continue;let _=(n-o)/En;if(_>=1)continue;let v=g(1);if(_<.12){let e=_/.12;c(v,v,Lc*(.7+.9*e),.95*(1-e),Hc,1)}let y=C(_),b=.6*(1-_),x=d(zc);for(let e=0;e<x;e+=1){let n=L(s,t,10+e)*Math.PI*2,r=Lc*.9*y*(.4+L(s,t,13+e)),i=(Lc+(Rc-Lc)*y)*(.7+.5*L(s,t,16+e)),a=[v[0]+Math.cos(n)*r,v[1]+Math.sin(n)*r,v[2]+(L(s,t,22+e)-.5)*r];c(a,a,i,b*(.7+.3*L(s,t,19+e)),Uc,1)}}}s!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(n),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,o.subarray(0,s*Wc),e.DYNAMIC_DRAW),e.uniformMatrix4fv(t.uniform(`uVP`),!1,a.viewProjection),e.uniform3f(t.uniform(`uEye`),a.eye[0],a.eye[1],a.eye[2]),e.drawArraysInstanced(e.TRIANGLES,0,6,s),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}var Kc=[.2,.198,.196],qc=[1,.82,.5],Jc=12,Yc=1024;function Xc(e){let t=J(e,Mc,Nc),n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);let a=Jc*4;for(let t=0;t<3;t+=1)e.enableVertexAttribArray(1+t),e.vertexAttribPointer(1+t,4,e.FLOAT,!1,a,t*16),e.vertexAttribDivisor(1+t,1);e.bindVertexArray(null);let o=new Float32Array(Yc*Jc);return{draw(r,a,s,c,l){let u=0,f=r.tick+l;for(let e of r.falls){let t=e.sites;if(t===void 0||t.length===0)continue;let n=f-e.tick;if(n<0||n>=.55)continue;let i=r.ships.find(t=>t.id===e.targetId),c=r.ships.find(t=>t.id===e.shooterId);if(i===void 0)continue;let l=a(i),p=s(i)*Math.PI/180,m=[Math.sin(p),Math.cos(p)],h=F[i.cls].lengthMetres,g=c===void 0?null:a(c),_=g===null?p:Math.atan2(l.x-g.x,l.y-g.y);t.forEach((t,r)=>{if(Kt(t)&&n>=.3)return;let i=(Wt[t.zone]??0)*h,a={x:l.x+m[0]*i,y:l.y+m[1]*i,z:11},s=qt(t,M(`${e.shooterId}:${e.targetId}`)+e.tick*7919+r*131|0,a,_,n,d(Gt(t)));for(let e of s){if(u>=Yc)return;let t=u*Jc;o[t]=e.px,o[t+1]=e.py,o[t+2]=e.pz,o[t+3]=e.halfWidth,o[t+4]=e.x,o[t+5]=e.y,o[t+6]=e.z,o[t+7]=e.alpha,o[t+8]=Kc[0]+(qc[0]-Kc[0])*e.hot,o[t+9]=Kc[1]+(qc[1]-Kc[1])*e.hot,o[t+10]=Kc[2]+(qc[2]-Kc[2])*e.hot,o[t+11]=e.hot*.35,u+=1}})}u!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(n),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,o.subarray(0,u*Jc),e.DYNAMIC_DRAW),e.uniformMatrix4fv(t.uniform(`uVP`),!1,c.viewProjection),e.uniform3f(t.uniform(`uEye`),c.eye[0],c.eye[1],c.eye[2]),e.drawArraysInstanced(e.TRIANGLES,0,6,u),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}var Zc=[.075,.065,.058],Qc=[.42,.36,.31],$c=12,el=512;function tl(e){let t=J(e,Mc,Nc),n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);let a=$c*4;for(let t=0;t<3;t+=1)e.enableVertexAttribArray(1+t),e.vertexAttribPointer(1+t,4,e.FLOAT,!1,a,t*16),e.vertexAttribDivisor(1+t,1);e.bindVertexArray(null);let o=new Float32Array(el*$c);return{draw(r,a,s,c){let l=0;for(let e of r){if(e.sunk)continue;let t=e.burns??Ve,n=e.plating??Ve;if(!Pe(t,n))continue;let r=F[e.cls],i=a(e),c=s(e)*Math.PI/180,u=[Math.sin(c),Math.cos(c)],d=[Math.cos(c),-Math.sin(c)],f=r.beamMetres*.42;for(let a of Qe(e.id,t,n)){if(l>=el)break;let e=a.along*r.lengthMetres,t=a.across*r.beamMetres/2,n=i.x+u[0]*e+d[0]*t,s=i.y+u[1]*e+d[1]*t,c=f+(a.kind===`soot`?1.2+a.up*2.5:.4),p=a.size*r.beamMetres*.5,m=a.kind===`soot`?Zc:Qc,h=l*$c;o[h]=n,o[h+1]=s,o[h+2]=c,o[h+3]=p,o[h+4]=n,o[h+5]=s,o[h+6]=c,o[h+7]=a.weight*(a.kind===`soot`?.9:.8),o[h+8]=m[0],o[h+9]=m[1],o[h+10]=m[2],o[h+11]=a.kind===`soot`?1:.45,l+=1}}l!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(n),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,o.subarray(0,l*$c),e.DYNAMIC_DRAW),e.uniformMatrix4fv(t.uniform(`uVP`),!1,c.viewProjection),e.uniform3f(t.uniform(`uEye`),c.eye[0],c.eye[1],c.eye[2]),e.drawArraysInstanced(e.TRIANGLES,0,6,l),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}var nl=`#version 300 es
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
}`,rl=`#version 300 es
precision highp float;
in vec2 vUV; in float vA; in float vDark; in float vSoft;
out vec4 o;
uniform vec3 uCol;
void main(){
  float d = length(vUV - 0.5) * 2.0;
  // Smooth to the edge and nothing else — the ruling's whole point.
  float a = smoothstep(1.0, vSoft, d) * vA;
  o = vec4(uCol * vDark, a);
}`,il=[.07,.075,.09],al=6,ol=9,sl=6,cl=14,ll=.22;function ul(e,t){let n=Ot(e);if(n<.08)return null;let r=F[e.cls],i=r.lengthMetres,a=r.beamMetres;if(!e.sunk&&e.motion.speedKnots>.5){let r=St(t,e.track),o=Math.min(i/2,r),s=Math.min(o+kt(i,n),r),c=Ct(t,e.track,o),l=Ct(t,e.track,s);return{ax:c.x,ay:c.y,bx:l.x,by:l.y,radiusMetres:a*1.6,strength:n}}return{ax:t.x,ay:t.y,bx:t.x,by:t.y,radiusMetres:i*.45+a*1.4*(.5+.5*n),strength:n}}function dl(e){let t=J(e,nl,rl),n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);let o=al*4;e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,o,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,o,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null);let s=new Float32Array(512*al),c=0,l=(e,t,n,r,i,a)=>{if((c+1)*al>s.length){let e=new Float32Array(s.length*2);e.set(s),s=e}let o=c*al;s[o]=e,s[o+1]=t,s[o+2]=n,s[o+3]=r,s[o+4]=i,s[o+5]=a,c+=1};return{draw(r,o,u,f,p){c=0;for(let e of r){let t=F[e.cls],n=t.lengthMetres,r=t.beamMetres,i=o(e),s=u(e)*Math.PI/180,c={x:-Math.sin(s),y:-Math.cos(s)},f=M(e.id),m=Ot(e);if(m>=.08)if(!e.sunk&&e.motion.speedKnots>.5){let t=kt(n,m),o=St(i,e.track),s=d(ol);for(let u=0;u<s;u+=1){let d=(u+1)/s,p=n/2+d*t;if(p>o)break;let h=Ct(i,e.track,p),g=wt(i,e.track,p,c),_=(G(f,u+30)-.5)*r*1.6*d;l(h.x-g.y*_,h.y+g.x*_,a(r*.45,r*1.5,C(d)),.46*m*(1-.62*d),1,.15)}}else{let e=d(sl);for(let t=0;t<e;t+=1){let e=G(f,t+33)*2*Math.PI,a=G(f,t+40)*n*.5;l(i.x+Math.cos(e)*a,i.y+Math.sin(e)*a,r*(.9+1.2*G(f,t+47))*(.5+.5*m),.4*m,1,.1)}}let h=p(e);if(e.sunk&&h>.15){let e=n*(.35+.5*Math.min(1,h)),t=d(cl);for(let n=0;n<t;n+=1){let t=G(f,n+60)*2*Math.PI,r=e*Math.sqrt(G(f,n+80));l(i.x+Math.cos(t)*r,i.y+Math.sin(t)*r,1.2+3.4*G(f,n+100),.55*Math.min(1,h*1.6),2.6+2.4*G(f,n+120),.62)}}}c!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(n),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,s.subarray(0,c*al),e.DYNAMIC_DRAW),e.uniformMatrix4fv(t.uniform(`uVP`),!1,f.viewProjection),e.uniform3f(t.uniform(`uCol`),il[0],il[1],il[2]),e.uniform1f(t.uniform(`uSeaZ`),ll),e.drawArraysInstanced(e.TRIANGLES,0,6,c),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}var fl=1,pl=new WeakMap;function ml(e){let t=pl.get(e.verts);if(t!==void 0)return t;let n=0;for(let t=0;t<e.verts.length;t+=10){let r=e.verts[t+1];r>n&&(n=r)}let r=0,i=0;for(let t=0;t<e.verts.length;t+=10)e.verts[t+1]<n-fl||(r+=e.verts[t+2],i+=1);let a={reachMetres:n,heightMetres:i===0?0:r/i};return pl.set(e.verts,a),a}function hl(e,t,n,r){let i=Uo(e.cls).find(e=>e.mountId===t);if(i===void 0)return null;let a=ml(i),o=e.mounts.find(e=>e.mountId===t)?.trainDeg,s=r*Math.PI/180,[c,l,u]=i.seat,d=n.x+c*Math.cos(s)+l*Math.sin(s),f=n.y-c*Math.sin(s)+l*Math.cos(s),p=s+(o??i.restDeg)*Math.PI/180;return{x:d+Math.sin(p)*a.reachMetres,y:f+Math.cos(p)*a.reachMetres,z:u+a.heightMetres,boreRad:p}}var gl=[.815,.835,.867],_l=[.44,.455,.486],vl=7,yl=46,bl=1.6,xl=.35,Sl=6,Cl=.35,wl=5,Tl=[1.6,1.32,.72],El=[.58,.55,.5];function Dl(e,t,n){return[e[0]*t[0]*n,e[1]*t[1]*n,e[2]*t[2]*n]}function Ol(e){let t=J(e,Ms,Ns),r=eo(e);return{draw(i,a,o,s,c,l,u,f,m){let h=[],g=i.tick+u,_=l,v=Math.floor(_/bl),y=p((_-v*bl)/bl),b=(e,t)=>Math.hypot(e-c.eye[0],t-c.eye[1]);for(let e of i.smoke){let t=g-(e.expiresAtTick-A.smoke.durationTicks),n=p(1-t/A.smoke.durationTicks);if(n<=0)continue;let r=e.expiresAtTick*41+Math.round(e.pos.x)*7+Math.round(e.pos.y)|0,i=p(t/1.5),a=.7+.35*C(1-n),o=e.radiusMetres*xl*C(1-n),s=i*(.34+.5*n),c=d(vl);for(let t=0;t<c;t+=1){let n=G(r,t*5+v)*(1-y)+G(r,t*5+v+1)*y,i=G(r,t*5+2)*Math.PI*2,l=e.radiusMetres*.62*Math.sqrt(G(r,t*5+3)),u=o*(.4+.6*t/c),d=e.pos.x+Math.cos(i)*l+f[0]*u,p=e.pos.y+Math.sin(i)*l+f[1]*u;h.push({x:d+(n-.5)*e.radiusMetres*.14,y:p+(n-.5)*e.radiusMetres*.14,z:3+yl*(.12+.88*G(r,t*5+4)),r:e.radiusMetres*(.36+.16*n)*a,alpha:s*.5,col:Dl(gl,m,1),seed:G(r,t*5+6)*9,ph:.5,d:b(d,p)})}}for(let e of a){if(e.sunk)continue;let t=Math.min(1,e.motion.speedKnots/20);if(t<=.02)continue;let r=o(e),i=s(e)*Math.PI/180,a=F[e.cls].lengthMetres,c=F[e.cls].beamMetres,l=-Math.sin(i)*t+f[0]*.45,u=-Math.cos(i)*t+f[1]*.45,p=Math.hypot(l,u)||1;for(let o of n[e.cls].funnels){let e=-o*a,n=r.x+Math.sin(i)*e,s=r.y+Math.cos(i)*e,f=Math.round(n)*31+Math.round(s)*7|0,g=c*(.9+1.5*t),_=d(Sl);for(let e=0;e<_;e+=1){let r=(e+1)/_,i=(G(f,e*3+v)-.5)*g*r,a=(G(f,e*3+v+1)-.5)*g*r,o=n+l/p*g*(e+1)+i,d=s+u/p*g*(e+1)+a;h.push({x:o,y:d,z:16+26*C(r),r:c*(.28+.5*C(r))*(.7+.6*t),alpha:.2*(.35+.65*t)*(1-.75*r),col:Dl(_l,m,1),seed:G(f,e*3+2)*9,ph:r,d:b(o,d)})}}}for(let e of i.salvos){let t=(g-e.firedAtTick)*10;if(t<0||t>wl)continue;let n=a.find(t=>t.id===e.shooterId);if(n===void 0)continue;let r=hl(n,e.mountId,o(n),s(n));if(r===null)continue;let i=r.x,c=r.y,l=e.firedAtTick*131+e.mountId.length*17|0;if(t<Cl){let e=t/Cl;h.push({x:i,y:c,z:r.z,r:(7+16*e)*(.8+.4*G(l,1)),alpha:(1-e)*.95,col:Tl,seed:G(l,2)*9,ph:.2,d:b(i,c)})}let u=p(t/wl),d=30*u;h.push({x:i+f[0]*d,y:c+f[1]*d,z:r.z+10*u,r:(6+26*C(u))*(.85+.3*G(l,3)),alpha:.5*(1-u)*(1-u),col:Dl(El,m,1),seed:G(l,4)*9,ph:.5,d:b(i+f[0]*d,c+f[1]*d)})}if(h.length===0)return;h.sort((e,t)=>t.d-e.d);let x=Ds(c);e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(r),e.uniformMatrix4fv(t.uniform(`uVP`),!1,c.viewProjection),e.uniform3f(t.uniform(`uRight`),x.right[0],x.right[1],x.right[2]),e.uniform3f(t.uniform(`uUp`),x.up[0],x.up[1],x.up[2]),e.uniform1f(t.uniform(`uEmber`),0);for(let n of h)e.uniform3f(t.uniform(`uPos`),n.x,n.y,n.z),e.uniform1f(t.uniform(`uR`),n.r),e.uniform3f(t.uniform(`uCol`),n.col[0],n.col[1],n.col[2]),e.uniform1f(t.uniform(`uA`),n.alpha),e.uniform1f(t.uniform(`uSeed`),n.seed),e.uniform1f(t.uniform(`uPh`),n.ph),e.drawArrays(e.TRIANGLES,0,6);e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null)}}}var kl=`#version 300 es
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
}`,Al=`#version 300 es
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
}`,jl=[.84,.93,1];function Ml(e,t){let n=.55+.45*Math.min(t/2.6,1);return[jl[0]*(e[0]??1)*n,jl[1]*(e[1]??1)*n,jl[2]*(e[2]??1)*n]}var Nl=6,Pl=2,Fl=5;function Il(e){let t=J(e,kl,Al),n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);let a=Nl*4;e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,a,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,a,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null);let o=new Float32Array(4096*Nl),s=0,c=(e,t,n,r,i,a)=>{if((s+1)*Nl>o.length){let e=new Float32Array(o.length*2);e.set(o),o=e}let c=s*Nl;o[c]=e,o[c+1]=t,o[c+2]=n,o[c+3]=r,o[c+4]=i,o[c+5]=a,s+=1},l=(e,t,n,r,i,a,o,s)=>{for(let l of Ea(e,t,n,r,i,a,o,s))c(l.x,l.y,l.radiusMetres,.96*l.fade,.95+.45*l.life,l.seed)};return{draw(r,a,u,d,f,p,m){let h=r.spentTorpedoes??[];if(r.torpedoes.length===0&&h.length===0)return;s=0;let g=Ta(u.metresPerPxAtTarget,Pl),_=Math.min(1,Math.max(0,d-(r.tick-1)));for(let e of r.torpedoes){if(e.side===`enemy`&&!e.sighted||ha(e,d,f))continue;let t=B[e.type].speedKnots*ze,n=e.headingDeg*Math.PI/180,i=w(e,(_-1)*t*f,r.ships,e=>a(e)),o=Math.sin(n),s=Math.cos(n),u=B[e.type].rangeMetres-e.runMetresLeft+i,p=wa(e.firedAtTick,e.headingDeg);l(e.pos.x-o*(u-i),e.pos.y-s*(u-i),o,s,u,u,p,g);let m=e.pos.x+o*i,h=e.pos.y+s*i;for(let e=0;e<Fl;e+=1){let t=-1.6*e,n=(G(p+e,41)-.5)*3.4;c(m+o*t-s*n,h+s*t+o*n,1.5+1.3*G(p+e,43),.98,1.35,G(p+e,47))}}for(let e of h){if(e.side===`enemy`&&!e.sighted)continue;let t=B[e.type].speedKnots*ze,n=e.headingDeg*Math.PI/180,r=Math.sin(n),i=Math.cos(n),a=(d-(e.endedAtTick-1+(e.endedAtSeconds??f)/f))*f,o=a>=0?e.runMetres:Math.max(0,e.runMetres+a*t),s=o+Math.max(0,a)*t;l(e.pos.x-r*e.runMetres,e.pos.y-i*e.runMetres,r,i,o,s,wa(e.firedAtTick,e.headingDeg),g)}s!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(n),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,o.subarray(0,s*Nl),e.DYNAMIC_DRAW),e.uniformMatrix4fv(t.uniform(`uVP`),!1,u.viewProjection),e.uniform3f(t.uniform(`uCol`),m[0],m[1],m[2]),e.uniform1f(t.uniform(`uMinR`),p*.6),e.drawArraysInstanced(e.TRIANGLES,0,6,s),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}var Ll=2400,Rl=850,zl=300,Bl=4e3,Vl=14e3,Hl=10,Ul=90,Wl=`#version 300 es
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
}`,Gl=`#version 300 es
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
        trkSpeed = (k == 0) ? B.z : segLen / ${Hl}.0;
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
      float ageFade = clamp(1.0 - (d/max(trkSpeed, 0.5))/${Ul}.0, 0.0, 1.0);
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
    float visBand = smoothstep(1.6, 4.0, ${Ll}.0 / fp);
    float visSwell = smoothstep(1.6, 4.0, ${Rl}.0 / fp);
    toothVis = smoothstep(1.6, 4.0, ${zl}.0 / fp);
    // Along the wind and across it: a running sea is drawn out down the
    // blow, so every octave is stretched along it.
    vec2 fq = vec2(dot(vPos.xy - drift, uWind), dot(vPos.xy - drift, wperp));
    farMott = mix(0.5, fbm(fq/vec2(${Ll}.0*2.6, ${Ll}.0) + 11.3), uFarBand);
    farSwell = mix(0.5, fbm(fq/vec2(${Rl}.0*2.8, ${Rl}.0) + 4.1), uFarBand);
    farTooth = fbm(fq/vec2(${zl}.0*3.2, ${zl}.0) + 19.7);
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
  fogW *= 1.0 - 0.92*smoothstep(${Vl}.0, ${Bl}.0, length(vPos.xy - uHome));
  col = mix(col, uHaze, fogW);
  o = vec4(col, 1.0);
}`,Kl=60,ql=42,Jl=34,Yl=26,Xl=.27,Zl=8;function Ql(e){return e/10-1}function $l(e,t){let n=Ql(t),r=[];for(let t of e.torpedoes){if(r.length>=12)break;let e=ga(t,n,10,5);e!==null&&r.push(e)}for(let t=e.torpedoHits.length-1;t>=0&&r.length+3<=12;--t){let i=e.torpedoHits[t];if(i===void 0)continue;let a=(n-(i.tick-1))*10-(i.atSeconds??10);if(a<0||a>Yl)continue;let o=(e.ships.find(e=>e.id===i.targetId)?.motion.headingDeg??0)*Math.PI/180,s=Math.sin(o)*Jl,c=Math.cos(o)*Jl,l=a*Xl;r.push([i.pos.x,i.pos.y,Kl,l]),r.push([i.pos.x+s,i.pos.y+c,ql,l*.86]),r.push([i.pos.x-s,i.pos.y-c,ql,l*.78])}for(let t=e.falls.length-1;t>=0&&r.length<12;--t){let i=e.falls[t];if(i===void 0)continue;let a=(n-(i.tick-1))*10;if(a<0||a>Zl)continue;let o=e.ships.find(e=>e.id===i.shooterId),s=o===void 0?10:H[o.cls];r.push([i.pos.x,i.pos.y,s,a])}return r}var eu=260,tu=520,nu=.9,ru=520,iu=1.15,au=.16,ou=.02;function su(e,t,n,r){let i=[];for(let n of e.ships){if(i.length>=24)break;let e=(n.fires??[]).reduce((e,t)=>e+t.intensity,0);if(e<=ou)continue;let r=t(n);i.push(r.x,r.y,eu+tu*Math.min(1,e),nu*Math.min(1.4,e))}for(let a of e.salvos){if(i.length>=24)break;let o=Ql(r)-(a.firedAtTick-1);if(o<0||o>au)continue;let s=e.ships.find(e=>e.id===a.shooterId);if(s===void 0)continue;let c=hl(s,a.mountId,t(s),n(s))??t(s);i.push(c.x,c.y,ru,iu*(1-o/au))}return i}var cu=4;function lu(e){let t=e.getExtension(`EXT_disjoint_timer_query_webgl2`),n=[],r=[],i=null,a=Fe(),o=-1;function s(){if(t===null)return;let i=e.getParameter(t.GPU_DISJOINT_EXT)===!0;for(let t=n.length-1;t>=0;--t){let a=n[t];if(a===void 0||!i&&e.getQueryParameter(a,e.QUERY_RESULT_AVAILABLE)!==!0||(n.splice(t,1),r.push(a),i))continue;let s=e.getQueryParameter(a,e.QUERY_RESULT);o=o<0?s/1e6:$e(o,s/1e6)}}return{begin(){a.begin(),s()},beginPlane(){if(a.beginInner(),t===null||i!==null)return;let o=r.pop()??(n.length<cu?e.createQuery():null);o!==null&&(i=o,e.beginQuery(t.TIME_ELAPSED_EXT,o))},endPlane(){a.endInner(),!(t===null||i===null)&&(e.endQuery(t.TIME_ELAPSED_EXT),n.push(i),i=null)},end(){a.end()},readout(){return uu(a.periodMs(),a.cpuMs(),a.innerMs(),o)}}}function uu(e,t,n,r){return[xe(e),`cpu ${t.toFixed(1)} (plane ${n.toFixed(1)})`,r<0?`gpu — (no timer)`:`gpu ${r.toFixed(1)}`]}var du=16/2;function fu(e,t){let n=[e];for(let e of(t??[]).slice(1,16))n.push(e);let r=n[n.length-1]??e;for(;n.length<16;)n.push(r);let i=[];for(let e=0;e<16;e+=2)i.push(n[e].x,n[e].y,n[e+1].x,n[e+1].y);return i}var pu=`#version 300 es
precision highp float;
layout(location=0) in vec3 aPos; layout(location=1) in vec3 aNrm;
layout(location=2) in vec3 aCol; layout(location=3) in float aShipZ;
uniform mat4 uVP; uniform mat4 uModel; uniform mat3 uNM;
out vec3 vN; out vec3 vC; out vec3 vW; out float vZ;
void main(){
  vec4 w = uModel * vec4(aPos, 1.0);
  vW = w.xyz; vN = normalize(uNM * aNrm); vC = aCol; vZ = aShipZ;
  gl_Position = uVP * w;
}`,mu=`#version 300 es
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
  fog *= 1.0 - 0.92*smoothstep(${Vl}.0, ${Bl}.0, length(vW.xy - uHome));
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
}`,hu=`#version 300 es
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
}`,gu=`#version 300 es
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
}`,_u=300,vu=9e3,yu=3e5;function bu(e){let t=e.getContext(`webgl2`,{antialias:!0,alpha:!1});if(t===null)throw Error(`WebGL2 unavailable`);let n=J(t,Wl,Gl),i=J(t,pu,mu),a=J(t,hu,gu),o=Qa(t,_u),s=lu(t),c=Bs(t),l=Il(t),u=jc(t),d=Gc(t),f=Xc(t),p=tl(t),m=Ol(t),h=dl(t),g=1,_=(()=>{let e=new URLSearchParams(window.location.search).get(`glwx`);return e!==null&&e in he?e:null})(),v=new URLSearchParams(window.location.search).get(`glfar`)===`0`?0:1,y=new URLSearchParams(window.location.search).get(`glarms`)===`0`?0:1,x=()=>{let e=window.__KR_NIGHTX__;if(typeof e==`number`&&e>0)return e;let t=Number(new URLSearchParams(window.location.search).get(`nightx`));return Number.isFinite(t)&&t>0?t:null},ee=0,S=0,te=eo(t);Eo();let C=wo(),w=new Map,T=new Map,ne=()=>{let e=wo();if(e!==C){C=e;for(let{vao:e,buffer:n}of w.values())t.deleteVertexArray(e),t.deleteBuffer(n);for(let{vao:e,buffer:n}of T.values())t.deleteVertexArray(e),t.deleteBuffer(n);w.clear(),T.clear()}},E=(e,n,r)=>{let i=`${e}:${n.mountId}:${r?`wreck`:`sound`}`,a=T.get(i);if(a!==void 0)return a;let o=$a(t,js(n,r));return T.set(i,o),o},re=(e,n)=>{let r=`${e.cls}:${+!!n}`,i=w.get(r);if(i!==void 0)return i;let a=$a(t,Jo(e.cls,n).verts);return w.set(r,a),a};return{resize(n,r,i){g=i,ee=n,S=r,e.width=Math.round(n*i),e.height=Math.round(r*i),e.style.width=`${n}px`,e.style.height=`${r}px`,t.viewport(0,0,e.width,e.height)},render(e,C,w,T,D){s.beginPlane(),ne();let ie=b(e.setting,e.tick,{x:0,y:0}),O=je(ue(e.setting,e.tick),le(e.setting.anchor,{x:0,y:0})),k=ie.dark?`night`:O<9?`twilight`:`day`,A=_??ie.weather,j=he[A],M=+(A===`clear`||A===`overcast`),ae=k===`night`?x():null,N=k===`night`?ae===null?Ge:qe(Ye.night,ae):Ye[k],P=rt(e.setting.weatherSeed),oe=Be(A,P),se=N.alt*Math.PI/180,ce=N.az*Math.PI/180,I=[Math.sin(ce)*Math.cos(se),Math.cos(ce)*Math.cos(se),Math.sin(se)],L=[N.hazeCol[0]*j.skyMul,N.hazeCol[1]*j.skyMul,N.hazeCol[2]*j.skyMul];t.enable(t.DEPTH_TEST),t.clearColor(L[0],L[1],L[2],1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.useProgram(n.program);let R=e=>n.uniform(e);t.uniformMatrix4fv(R(`uVP`),!1,w.viewProjection);let de=xs(w,ee,S),fe=Math.min(Math.max(de.spanMetres,vu),yu),pe=Ss(de.centreX,de.centreY,fe,_u);t.uniform2f(R(`uOrigin`),pe.x,pe.y),t.uniform1f(R(`uExtent`),fe),t.uniform1f(R(`uFarOn`),v),t.uniform1f(R(`uArmsOn`),y),t.uniform1i(R(`uTrackN`),r(16)),t.uniform1f(R(`uFarBand`),j.farBand),t.uniform1f(R(`uT`),T);let me=new Float32Array(16),z=new Float32Array(8);oe.forEach((e,t)=>{me.set([e.dx,e.dy,e.k,e.a],t*4),z.set([e.w,e.q],t*2)}),t.uniform4fv(R(`uWaveA`),me),t.uniform2fv(R(`uWaveB`),z),t.uniform3f(R(`uCam`),w.eye[0],w.eye[1],w.eye[2]),t.uniform3fv(R(`uSunDir`),I),t.uniform3fv(R(`uSunCol`),Array.from(N.sun)),t.uniform1f(R(`uSunI`),N.sunI),t.uniform3fv(R(`uDeep`),[j.deep[0]*N.tint[0],j.deep[1]*N.tint[1],j.deep[2]*N.tint[2]]),t.uniform3fv(R(`uSkyTo`),[N.skyTo[0]*j.skyMul,N.skyTo[1]*j.skyMul,N.skyTo[2]*j.skyMul]),t.uniform3fv(R(`uSkyAway`),[N.skyAway[0]*j.skyMul,N.skyAway[1]*j.skyMul,N.skyAway[2]*j.skyMul]),t.uniform1f(R(`uSpec`),j.spec),t.uniform1f(R(`uGlitter`),j.glitter*(k===`night`?Re:1)),t.uniform1f(R(`uGlitZ`),Math.min(1,Math.max(.4,w.metresPerPxAtTarget/1.1)));let B=w.metresPerPxAtTarget/Math.max(g,.5);t.uniform1f(R(`uGlitFreq`),Math.min(1.35,1/(3*B))),t.uniform1f(R(`uFoamAmt`),j.foam),t.uniform1f(R(`uFoamThresh`),j.foamThresh),t.uniform3fv(R(`uFoamTint`),Array.from(N.foamTint)),t.uniform1f(R(`uStreak`),j.streak),t.uniform2f(R(`uWind`),Math.sin(P),Math.cos(P)),t.uniform1f(R(`uSeaAmp`),j.amp),t.uniform3fv(R(`uHaze`),L),t.uniform2f(R(`uHazeP`),j.haze,j.hazeMax),t.uniform1f(R(`uHazeLift`),M);let ge=e.ships.find(e=>e.side===`raider`)??e.ships[0],_e=ge===void 0?{x:0,y:0}:C.posOf(ge);t.uniform2f(R(`uHome`),_e.x,_e.y);let ye=su(e,C.posOf,C.headingOf,T),be=new Float32Array(24);be.set(ye),t.uniform1i(R(`uEmitCount`),Math.floor(ye.length/4)),t.uniform4fv(R(`uEmit`),be);let xe=e.ships.filter(e=>D.hide?.(e)!==!0).sort((e,t)=>{let n=C.posOf(e),r=C.posOf(t);return Math.hypot(n.x-w.target[0],n.y-w.target[1])-Math.hypot(r.x-w.target[0],r.y-w.target[1])}).slice(0,6),Se=new Float32Array(24),Ce=new Float32Array(24),we=new Float32Array(24),Te=new Float32Array(12),Ee=new Float32Array(6*du*4);xe.forEach((e,t)=>{let n=C.posOf(e),r=C.headingOf(e)*Math.PI/180,i=F[e.cls],a=D.sinkOf?.(e)??(e.sunk?.65:0);Se.set([n.x,n.y,Math.sin(r),Math.cos(r)],t*4),Ce.set([i.lengthMetres,i.beamMetres,e.motion.speedKnots*.5144,Math.min(a,1.2)],t*4),Ee.set(fu(n,e.track),t*du*4);let o=ul(e,n);o!==null&&(we.set([o.ax,o.ay,o.bx,o.by],t*4),Te.set([o.radiusMetres,o.strength],t*2))}),t.uniform1i(R(`uShipCount`),xe.length),t.uniform4fv(R(`uShipA`),Se),t.uniform4fv(R(`uShipB`),Ce),t.uniform4fv(R(`uSlickA`),we),t.uniform2fv(R(`uSlickB`),Te),t.uniform4fv(R(`uTrack`),Ee);let De=$l(e,T),Oe=new Float32Array(48);De.forEach((e,t)=>Oe.set(e,t*4)),t.uniform1i(R(`uSplashCount`),De.length),t.uniform4fv(R(`uSplash`),Oe),t.bindVertexArray(o.vao),t.drawElements(t.TRIANGLES,o.indexCount,t.UNSIGNED_INT,0),h.draw(e.ships,C.posOf,C.headingOf,w,e=>Math.min(D.sinkOf?.(e)??(e.sunk?.65:0),1.2)),l.draw(e,C.posOf,w,Ql(T),10,B,Ml(N.foamTint,N.sunI)),t.useProgram(i.program);let V=e=>i.uniform(e);t.uniformMatrix4fv(V(`uVP`),!1,w.viewProjection),t.uniform3f(V(`uCam`),w.eye[0],w.eye[1],w.eye[2]),t.uniform3fv(V(`uSunDir`),I),t.uniform3fv(V(`uSunCol`),Array.from(N.sun)),t.uniform1f(V(`uSunI`),N.sunI),t.uniform3fv(V(`uAmb`),Array.from(N.ambient)),t.uniform1f(V(`uAmbI`),N.ambI),t.uniform3fv(V(`uHaze`),L),t.uniform2f(V(`uHazeP`),j.haze,j.hazeMax),t.uniform1f(V(`uHazeLift`),M),t.uniform2f(V(`uHome`),_e.x,_e.y),t.uniform1i(V(`uEmitCount`),Math.floor(ye.length/4)),t.uniform4fv(V(`uEmit`),be),t.uniform1f(V(`uShadow`),0),As({gl:t,shipP:i,posOf:C.posOf,headingOf:C.headingOf,seaAt:(e,t)=>ve(oe,e,t,T),sinkOf:e=>D.sinkOf?.(e)??(e.sunk?.65:0),hullVao:t=>re(t,fr(e,t)===0),showMounts:t=>fr(e,t)!==0,mountVao:E},xe,V),t.uniform1f(V(`uBootZ`),go),u.draw(e,i,T/10%1,10,I,N.sunI),d.draw(e,w,T/10%1),p.draw(xe,C.posOf,C.headingOf,w),f.draw(e,C.posOf,C.headingOf,w,T/10%1),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.depthMask(!1),t.useProgram(a.program);let H=e=>a.uniform(e);t.uniformMatrix4fv(H(`uVP`),!1,w.viewProjection),t.uniform3f(H(`uCam`),w.eye[0],w.eye[1],w.eye[2]),t.uniform3fv(H(`uSunCol`),Array.from(N.sun)),t.uniform1f(H(`uSunI`),N.sunI),t.uniform3fv(H(`uFoamTint`),Array.from(N.foamTint)),t.uniform1i(H(`uEmitCount`),Math.floor(ye.length/4)),t.uniform4fv(H(`uEmit`),be),t.bindVertexArray(te),De.forEach((e,n)=>{t.uniform4f(H(`uS`),e[0],e[1],e[2],e[3]),t.uniform1f(H(`uSeed`),n*3.7+1.1),t.uniform1f(H(`uWScale`),1),t.uniform1f(H(`uOff`),0),t.drawArrays(t.TRIANGLES,0,6),t.uniform1f(H(`uSeed`),n*3.7+31.7),t.uniform1f(H(`uWScale`),.72),t.uniform1f(H(`uOff`),.16),t.drawArrays(t.TRIANGLES,0,6)}),t.depthMask(!0),t.disable(t.BLEND),t.bindVertexArray(null);let ke=[Math.min(1.2,N.sun[0]*N.sunI*.3+N.ambient[0]*N.ambI*.9),Math.min(1.2,N.sun[1]*N.sunI*.3+N.ambient[1]*N.ambI*.9),Math.min(1.2,N.sun[2]*N.sunI*.3+N.ambient[2]*N.ambI*.9)],Ae=xe;m.draw(e,Ae,C.posOf,C.headingOf,w,T,T/10%1,[Math.sin(P),Math.cos(P)],ke),c.draw(Ae,C.posOf,C.headingOf,w,T,D.wallMs,[Math.sin(P),Math.cos(P)],ke),s.endPlane()},meter:s}}var xu=6e3;function Su(e){let{glCanvas:t}=e,n=!1,r=!1,i=null,a=null,o=()=>{if(a!==null)return;let n=e.buildFlat();n!==null&&(t.style.display=`none`,a=n)},s=()=>{if(!r){if(r=!0,e.onTrouble===void 0){o();return}e.onTrouble(o)}};return t.addEventListener(`webglcontextlost`,e=>{a===null&&(e.preventDefault(),n=!0,i!==null&&window.clearTimeout(i),i=window.setTimeout(s,xu))}),t.addEventListener(`webglcontextrestored`,()=>{if(a===null){i!==null&&(window.clearTimeout(i),i=null);try{e.rebuildPlane(),n=!1,r=!1}catch{s()}}}),{isLost:()=>n,flatView:()=>a}}var Cu=45;function wu(e){let t=new URLSearchParams(e),n=t.get(`pitch`),r=t.get(`glscale`);Ne(r===null?null:Number(r));let i=t.get(`fpscap`);D(i===null?null:Number(i));let a=t.get(`glzoom`);return{pitchDeg:Cs(n===null?Cu:Number(n)),devZoom:a===null?null:Number(a),devFocus:t.get(`glfocus`),showMeter:!1}}var Tu=.5;function Eu(e,t){if(_()||e>=900)return t;let n=Math.max(0,e)/900;return Tu+(t-Tu)*h(n)}function Du(e){return!_()&&e<900}function Ou(){let e=null;return{arm(){_()||e===null&&(e=`armed`)},begin(t){e=_()?null:t},pitchDeg(t,n){if(e===null)return null;if(e===`armed`)return Tu;let r=t-e;return Du(r)?Eu(r,n):(e=null,null)},cancel(){e=null},active(){return e!==null}}}var ku=.2;function Au(e,t){let n=e.getContext(`2d`);if(n===null)throw Error(`Canvas 2D context unavailable`);let r=document.createElement(`canvas`);r.className=`battle-gl`,r.style.position=`fixed`,r.style.left=`0`,r.style.top=`0`,r.style.zIndex=`0`,r.style.pointerEvents=`none`;let i=bu(r);e.style.position=`relative`,e.style.zIndex=`1`,e.parentElement?.insertBefore(r,e);let a=Su({glCanvas:r,rebuildPlane:()=>{i=bu(r),f>0&&p>0&&i.resize(f,p,l(m))},buildFlat:()=>{try{let t=Va(e);return f>0&&p>0&&t.resize(f,p),t}catch{return null}},onTrouble:t}),{pitchDeg:o,devZoom:s,devFocus:c,showMeter:u}=wu(window.location.search),d=o,f=0,p=0,m=1,h={x:0,y:0},g=20,v=!1,y=null,b=Ou(),x=null,ee=null,S=$t(),te=bt(),C=Xa(),w=null;function T(e){let t=e.ships.map(e=>S.posOf(e).x),n=e.ships.map(e=>S.posOf(e).y),r=Math.min(...t)-K,i=Math.max(...t)+K,a=Math.min(...n)-K,o=Math.max(...n)+K;h={x:(r+i)/2,y:(a+o)/2},g=Math.max((i-r)/Math.max(f,1),(o-a)/Math.max(p,1),lt/Math.max(Math.min(f,p),1))}function ne(){let e=b.pitchDeg(performance.now(),d)??d;return re&&(window.__KR_PITCH__=e),e}function E(){return ws({targetX:h.x,targetY:h.y,pitchDeg:ne(),zoomMetresPerPx:g,widthPx:f,heightPx:p})}let re=!1;function D(e,t){if(s!==null){let n;if(c===`fish`)n=e.torpedoes.find(e=>e.side===`raider`||e.sighted)?.pos;else if(c===`air`){let r=e.flights[0];if(r!==void 0){let e=oe[r.aircraft].speedKnots*ze*10*t,i=r.headingDeg*Math.PI/180;n={x:r.pos.x+Math.sin(i)*e,y:r.pos.y+Math.cos(i)*e}}}else{let t=c===`enemy`?e.ships.find(e=>e.side!==`raider`):e.ships.find(e=>e.side===`raider`);n=t===void 0?void 0:S.posOf(t)}n!==void 0&&(g=Math.max(ct,s),h={x:n.x,y:n.y-g*p*.2});return}v||T(e)}function ie(e,t){return{toScreen:t=>e.project(t.x,t.y),inFront:t=>e.inFrontOfEye(t.x,t.y),posOf:S.posOf,headingOf:S.headingOf,rudderOf:S.rudderOf,metresPerPx:e.metresPerPxAtTarget,frameFraction:t,animationMs:performance.now()}}function O(e,t,n,r){a.isLost()||i.render(e,{posOf:S.posOf,headingOf:S.headingOf},t,_()?0:n,r===null?{wallMs:performance.now()}:{wallMs:performance.now(),sinkOf:e=>e.sunk?Math.min(1.1,.45+r/20):0,hide:e=>e.sunk&&Ue(r)})}let k={resize(t,r){f=t,p=r,m=window.devicePixelRatio||1,e.width=Math.round(t*m),e.height=Math.round(r*m),e.style.width=`${t}px`,e.style.height=`${r}px`,n.setTransform(m,0,0,m,0,0),i.resize(t,r,l(m))},render(e,t=0){let r=e.battle;if(r===null)return;i.meter.begin(),r.tick===0&&x!==r.setting.startTimeHours&&(x=r.setting.startTimeHours,b.arm()),y=r,S.step(r,t);let a=S.frameFraction();D(r,a);let o=E();O(r,o,(r.tick+a)*10,null),n.clearRect(0,0,f,p);let s=ie(o,a),c=r.ships.find(e=>e.side===`raider`);c!==void 0&&N(n,c,s),gi(n,r,s),Jn(n,r,s),di(n,r,s),C.draw(n,r,s,s.animationMs),Za(n,r,s,w),_i(n,r,s),te.draw(n,r,s),ln(n,r,f,S.posOf),u&&(n.fillStyle=`rgba(223, 230, 234, 0.8)`,n.font=`11px monospace`,n.textAlign=`right`,i.meter.readout().forEach((e,t)=>{n.fillText(e,f-8,14+t*13)}),n.textAlign=`left`),i.meter.end()},renderAftermath(e,t){b.cancel(),x=null,y=e,S.step(e,Math.min(t,8)),D(e,0);let r=E();O(e,r,e.tick*10+t,t),n.clearRect(0,0,f,p);let i=ie(r,t/10);for(let r of e.ships)r.sunk&&Te(n,r,i,t)},screenToPlane(e,t){let n=E().groundFromScreen(e,t);return{x:n.x,y:n.y}},shipAt(e,t){if(y===null)return null;let n=E(),r=null;for(let i of y.ships){let a=S.posOf(i);if(!n.inFrontOfEye(a.x,a.y))continue;let o=n.project(a.x,a.y),s=Math.hypot(o.x-e,o.y-t);s<28&&(r===null||s<r.d)&&(r={id:i.id,d:s})}return r?.id??null},panByPixels(e,t){v=!0,h={x:h.x-e*g,y:h.y+t*g}},zoomBy(e,t,n){v=!0;let r=E().groundFromScreen(t,n);g=Math.max(ct,Math.min(400,g/e));let i=ws({targetX:h.x,targetY:h.y,pitchDeg:d,zoomMetresPerPx:g,widthPx:f,heightPx:p}).groundFromScreen(t,n);h={x:h.x+(r.x-i.x),y:h.y+(r.y-i.y)}},tiltByPixels(e){d=Cs(d-e*ku),b.cancel()},recenter(){v=!1},isManual(){return v},setReport(e){ee=e},reportShipId(){return ee},markHelmOrder(e,t){C.markOrder(e,t,performance.now())},setTorpedoPlot(e){w=e},beginEntry(){if(y!==null&&y.tick>0){b.cancel();return}b.begin(performance.now())},setLayersVisible(e){r.style.display=e?``:`none`}},A=()=>a.flatView()??k;return{resize(e,t){f=e,p=t,A().resize(e,t)},render:(e,t)=>A().render(e,t),renderAftermath:(e,t)=>A().renderAftermath(e,t),screenToPlane:(e,t)=>A().screenToPlane(e,t),shipAt:(e,t)=>A().shipAt(e,t),panByPixels:(e,t)=>A().panByPixels(e,t),zoomBy:(e,t,n)=>A().zoomBy(e,t,n),tiltByPixels:e=>A().tiltByPixels?.(e),recenter:()=>A().recenter(),isManual:()=>A().isManual(),setReport:e=>A().setReport(e),reportShipId:()=>A().reportShipId(),beginEntry:()=>A().beginEntry?.(),markHelmOrder:(e,t)=>A().markHelmOrder?.(e,t),setLayersVisible(e){let t=a.flatView();if(t!==null){t.setLayersVisible?.(e);return}k.setLayersVisible?.(e)}}}function ju(e){let t=new URLSearchParams(e).get(`gl`);return t===null?!0:t!==`0`&&t!==`off`&&t!==`false`}function Mu(e,t,n){if(!ju(t))return{view:Va(e),fellBack:!1};try{return{view:Au(e,n),fellBack:!1}}catch{return{view:Va(e),fellBack:!0}}}export{Mu as chooseBattleView};