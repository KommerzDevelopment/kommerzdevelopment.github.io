import{$ as e,$t as t,A as n,At as r,B as i,Bt as a,C as o,Ct as s,D as c,Dt as l,E as u,Et as d,F as f,Ft as p,G as m,Gt as h,H as g,Ht as _,I as v,It as y,J as b,Jt as x,K as S,Kt as C,L as w,Lt as T,M as E,Mt as D,N as ee,Nt as te,O as ne,Ot as O,P as k,Pt as re,Q as ie,Qt as A,R as ae,Rt as j,S as M,St as oe,T as N,Tt as se,U as ce,Ut as P,V as F,Vt as I,W as le,Wt as ue,X as de,Xt as L,Y as R,Yt as fe,Z as pe,Zt as me,_ as he,_t as ge,a as _e,at as ve,b as ye,bt as z,c as be,ct as B,d as xe,dt as Se,en as Ce,et as we,f as Te,ft as Ee,g as De,gt as Oe,h as V,ht as ke,i as H,in as U,it as Ae,j as je,jt as Me,k as Ne,kt as W,l as Pe,lt as Fe,m as Ie,mt as Le,n as Re,nn as ze,nt as Be,o as Ve,ot as He,p as Ue,pt as We,qt as G,r as Ge,rn as Ke,rt as qe,s as Je,st as Ye,t as Xe,tn as Ze,tt as Qe,u as $e,ut as et,v as tt,vt as nt,w as rt,wt as K,x as it,xt as at,y as ot,yt as st,z as ct,zt as lt}from"./index-BuCXH6Jq.js";var ut=1.2,dt=9e3,q=4e3,ft={hit:`#d64541`,bounce:`#e0b64e`,miss:`#7fb4cc`,overpen:`#b9a7e0`,fire:`#e8813c`,torpedo:`#e8e2d0`},pt={hit:`HIT`,bounce:`BOUNCE`,overpen:`OVERPEN`,fire:`FIRE`,torpedo:`TORPEDO`};function mt(e,t,n,r,i){let a=ft[t],o=1-(1-r)**3;if(e.strokeStyle=a,e.fillStyle=a,e.lineWidth=3,t===`hit`)e.beginPath(),e.moveTo(0,-9),e.lineTo(9,0),e.lineTo(0,9),e.lineTo(-9,0),e.closePath(),e.fill(),r<.3&&(e.globalAlpha=i*(1-r/.3),e.beginPath(),e.arc(0,0,12+r/.3*34,0,Math.PI*2),e.stroke(),n&&(e.beginPath(),e.arc(0,0,6+r/.3*24,0,Math.PI*2),e.stroke()));else if(t===`overpen`)e.beginPath(),e.moveTo(0,-9),e.lineTo(9,0),e.lineTo(0,9),e.lineTo(-9,0),e.closePath(),e.stroke();else if(t===`fire`){let t=.75+.25*Math.min(1,r*4);e.save(),e.scale(t,t),e.beginPath(),e.moveTo(0,10),e.bezierCurveTo(-9,5,-7,-3,-2,-7),e.bezierCurveTo(-3,-2,1,-3,2,-12),e.bezierCurveTo(7,-6,9,3,4,9),e.closePath(),e.fill(),e.fillStyle=`rgba(11, 21, 25, 0.8)`,e.beginPath(),e.moveTo(0,9),e.bezierCurveTo(-3,5,-2,2,0,-1),e.bezierCurveTo(2,2,3,5,0,9),e.closePath(),e.fill(),e.restore()}else if(t===`torpedo`)e.lineWidth=2.5,e.beginPath(),e.moveTo(-12,-3.5),e.lineTo(6,-3.5),e.quadraticCurveTo(12,0,6,3.5),e.lineTo(-12,3.5),e.closePath(),e.fill(),e.beginPath(),e.moveTo(-12,-6),e.lineTo(-15,-6),e.moveTo(-12,6),e.lineTo(-15,6),e.moveTo(-12,-3.5),e.lineTo(-12,3.5),e.stroke(),r<.45&&(e.globalAlpha=i*(1-r/.45),e.strokeStyle=ft.hit,e.beginPath(),e.arc(0,0,14+r/.45*40,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(0,0,8+r/.45*26,0,Math.PI*2),e.stroke());else if(t===`bounce`)e.beginPath(),e.moveTo(-12,8),e.lineTo(0,2),e.lineTo(10,-10),e.stroke(),e.beginPath(),e.moveTo(10,-10),e.lineTo(4,-9),e.moveTo(10,-10),e.lineTo(9,-4),e.stroke();else{let t=Math.sin(Math.PI*Math.min(1,r*1.5));e.lineWidth=2.5,e.lineCap=`round`,e.beginPath(),e.moveTo(0,0),e.lineTo(0,-16*t),e.moveTo(-5,0),e.lineTo(-9,-10*t),e.moveTo(5,0),e.lineTo(9,-10*t),e.moveTo(-2.5,0),e.lineTo(-4,-13*t),e.moveTo(2.5,0),e.lineTo(4,-13*t),e.stroke(),e.globalAlpha=i*.45,e.beginPath(),e.ellipse(0,2,8+20*o,3+7*o,0,0,Math.PI*2),e.stroke()}let s=pt[t];s!==void 0&&(e.globalAlpha=i,e.font=fe(11,`bold`),e.textAlign=`center`,e.fillStyle=a,e.fillText(s,0,26))}var ht=1600,gt=.5,_t=22*gt,vt=58*gt,yt=44*gt,bt=3,xt=2;function St(){let e=[],t=new Set;function n(t,n,r,i){let a=e.filter(e=>e.targetId===n).length;e.push({kind:t,targetId:n,world:{x:0,y:0},smashing:r,bornMs:i,shelf:a})}return{draw(r,i,a){let o=a.animationMs;e=e.filter(e=>o-e.bornMs<ht);let s=new Set,c=new Set;for(let r of i.falls){let a=`f:${r.shooterId}:${r.tick}:${Math.round(r.pos.x)}:${Math.round(r.pos.y)}`;if(s.add(a),!(t.has(a)||r.tick<=i.tick-xt)){if(r.hits===0){let t=`${r.shooterId}:${r.tick}`;c.has(t)||(c.add(t),e.push({kind:`miss`,targetId:null,world:r.pos,smashing:!1,bornMs:o,shelf:0}))}else if(r.outcomes!==void 0){let e=r.outcomes;e.effective>0&&n(`hit`,r.targetId,e.smashing,o),e.fires>0&&n(`fire`,r.targetId,!1,o),e.overpens>0&&n(`overpen`,r.targetId,!1,o),e.bounces>0&&n(`bounce`,r.targetId,!1,o)}}}for(let e of i.torpedoHits){let r=`t:${e.shooterId}:${e.targetId}:${e.tick}:${Math.round(e.pos.x)}`;s.add(r),!t.has(r)&&e.tick>i.tick-xt&&n(`torpedo`,e.targetId,!1,o)}t=s;let l=e.filter(e=>e.kind===`miss`),u=l.length>bt?new Set([...l].sort((e,t)=>e.bornMs-t.bornMs).slice(0,l.length-bt)):null;u!==null&&(e=e.filter(e=>!u.has(e)));for(let t of e){let e=(o-t.bornMs)/ht,n,s=0;if(t.targetId===null)n=t.world;else{let e=i.ships.find(e=>e.id===t.targetId);if(e===void 0)continue;n=a.posOf(e),s=K(e.cls,a.metresPerPx).lengthPx*.5+20}if(!a.inFront(n))continue;let c=a.toScreen(n),l=h()?0:_t*(1-(1-e)**3),u=e<.7?1:1-(e-.7)/.3;r.save(),r.globalAlpha=u,r.translate(c.x+t.shelf%4*vt,c.y-s-Math.floor(t.shelf/4)*yt-l),r.scale(gt,gt),mt(r,t.kind,t.smashing,e,u),r.restore()}}}}function Ct(e,t){return[e,...(t??[]).slice(1)]}function wt(e,t){let n=Ct(e,t),r=0;for(let e=1;e<n.length;e+=1){let t=n[e-1],i=n[e];t!==void 0&&i!==void 0&&(r+=Math.hypot(i.x-t.x,i.y-t.y))}return r}function Tt(e,t,n){let r=Ct(e,t),i=r[0]??e,a=Math.max(0,n);for(let e=1;e<r.length;e+=1){let t=r[e];if(t===void 0)continue;let n=t.x-i.x,o=t.y-i.y,s=Math.hypot(n,o);if(s>=a&&s>0){let e=a/s;return{x:i.x+n*e,y:i.y+o*e}}a-=s,i=t}return i}function Et(e,t,n,r){let i=Tt(e,t,n),a=Tt(e,t,n+1),o=a.x-i.x,s=a.y-i.y,c=Math.hypot(o,s);return c<1e-6?r:{x:o/c,y:s/c}}var Dt=`18, 19, 23`,Ot=8,kt=5;function At(e){let t=e.flooding.fore.holes+e.flooding.mid.holes+e.flooding.aft.holes;return Math.min(1,t*8+Se(e.flooding)*.25)}function jt(e,t){return e*(.9+1.9*a(t))}function Mt(e,t,n){for(let r of t.ships){let t=At(r);if(t<.08)continue;let i=K(r.cls,n.metresPerPx),o=n.posOf(r),s=n.toScreen(o),c=n.headingOf(r)*Math.PI/180,l={x:-Math.sin(c),y:-Math.cos(c)},u=I(r.id),d=Math.max(3,i.beamPx);if(!r.sunk&&r.motion.speedKnots>.5){let s=i.lengthPx/2*n.metresPerPx,c=jt(i.lengthPx*n.metresPerPx,t),f=wt(o,r.track);for(let i=0;i<Ot;i+=1){let p=(i+1)/Ot,m=s+p*c;if(m>f)break;let h=n.toScreen(Tt(o,r.track,m)),g=Et(o,r.track,m,l),_=(G(u,i,30)-.5)*d*1.4*p,v=P(d*.4,d*1.35,a(p));e.fillStyle=`rgba(${Dt}, ${(.3*t*(1-.7*p)).toFixed(3)})`,e.beginPath(),e.arc(h.x+g.y*_,h.y+g.x*_,v,0,2*Math.PI),e.fill()}}else for(let n=0;n<kt;n+=1){let r=G(u,n,33)*2*Math.PI,a=G(u,n,34)*i.lengthPx*.45,o=d*(.8+1.1*G(u,n,35))*(.5+.5*t);e.fillStyle=`rgba(${Dt}, ${(.26*t).toFixed(3)})`,e.beginPath(),e.arc(s.x+Math.cos(r)*a,s.y+Math.sin(r)*a,o,0,2*Math.PI),e.fill()}}}var Nt=1.2,Pt=`52, 54, 60`,Ft=`112, 116, 124`,It=`255, 182, 92`,Lt=6,Rt=5;function zt(e,t,n,r,i,o){for(let s of t.ships){if(s.sunk||s.subsystems.engines===`out`)continue;let t=Math.abs(s.motion.speedKnots),c=Math.min(1,t/20),l=K(s.cls,n.metresPerPx),u=n.toScreen(n.posOf(s)),d=n.headingOf(s)*Math.PI/180,f=Math.sin(d),p=-Math.cos(d),m=r*.45+f*c,h=i*.45+p*c,g=Math.hypot(m,h)||1,_=.35+.65*c;for(let t of E[s.cls].funnels){let n=t*l.lengthPx,r=u.x-Math.sin(d)*n,i=u.y+Math.cos(d)*n,f=I(`${s.id}:funnel:${t}`),p=(3+4*c)*Math.max(1,l.beamPx/5);for(let t=0;t<Rt;t+=1){let n=(t+1)/Rt,s=(G(f,t,o)-.5)*p*n,u=(G(f,t,o+1)-.5)*p*n,d=r+m/g*p*(t+1)+s,v=i+h/g*p*(t+1)+u,y=P(1.2,3.2+2.4*c,a(n))*Math.max(1,l.beamPx/6);e.fillStyle=`rgba(${Ft}, ${(.14*_*(1-.8*n)).toFixed(3)})`,e.beginPath(),e.arc(d,v,y,0,2*Math.PI),e.fill()}}}}function Bt(e,t,n){let r=l(t.setting.weatherSeed),i=Math.sin(r),o=-Math.cos(r),s=(t.tick+n.frameFraction)*10,c=Math.floor(s/Nt);zt(e,t,n,i,o,c);for(let r of t.ships){if(r.sunk||r.fires.length===0)continue;let t=K(r.cls,n.metresPerPx),l=n.toScreen(n.posOf(r)),u=n.headingOf(r)*Math.PI/180;for(let d of r.fires){let f=Ie(d.zone,t.lengthPx),p=l.x-Math.sin(u)*f,m=l.y+Math.cos(u)*f,h=I(`${r.id}:${d.zone}`),g=.4+.6*d.intensity,_=4+5*g;for(let t=0;t<Lt;t+=1){let n=(t+1)/Lt,r=(G(h,t,c*2)-.5)*_*1.1*n,s=(G(h,t,c*2+1)-.5)*_*1.1*n,l=p+i*_*(t+1)+r,u=m+o*_*(t+1)+s,d=P(2.2,7+4*g,a(n));e.fillStyle=`rgba(${Pt}, ${.3*g*(1-.85*n)})`,e.beginPath(),e.arc(l,u,d,0,2*Math.PI),e.fill()}let v=2+Math.round(3*d.intensity);for(let t=0;t<v;t+=1){let r=(s/(1.6+1.8*G(h,t,7))+G(h,t,8))%1,c=a(r)*(9+10*G(h,t,9)),l=(G(h,t,10)-.5)*6*r,u=.6+.4*Math.sin(n.animationMs/90+t*2.4);e.fillStyle=`rgba(${It}, ${(1-r)*.85*u})`,e.beginPath(),e.arc(p+i*c-o*l,m+o*c+i*l,.9,0,2*Math.PI),e.fill()}}}}var Vt=.55,Ht=.3,Ut=6,Wt=16,Gt=981,Kt={fore:.3,mid:.02,aft:-.3};function qt(e){let t=e.steps??1;return e.outcome===`penetrated`||e.outcome===`wrecked`?Math.min(Wt,Ut*t):e.outcome===`overpenetrated`?Math.min(Wt,Math.round(Ut*.6*t)):Math.min(Wt,Math.round(Ut*.7))}function Jt(e){return e.outcome===`bounced`||e.outcome===`smothered`}function Yt(e,t,n,r,i,a){let o=Jt(e),s=o?Ht:Vt;if(i<0||i>=s)return[];let c=e.steps??1,l=[];for(let e=0;e<a;e+=1){let a=o?.55:2.2,u=r+(_(t,e*4)-.5)*2*a,d=o?.12+_(t,e*4+1)*.35:.15+_(t,e*4+1)*1.1,f=o?600+_(t,e*4+2)*600:(140+_(t,e*4+2)*260)*(.75+.25*c),p=e=>{let t=Math.cos(d)*f*e;return[n.x+Math.sin(u)*t,n.y+Math.cos(u)*t,n.z+Math.sin(d)*f*e-.5*Gt*e*e]},m=p(i);if(m[2]<=0)continue;let h=p(Math.max(0,i-(o?.02:.01))),g=1-i/s;l.push({x:m[0],y:m[1],z:m[2],px:h[0],py:h[1],pz:h[2],halfWidth:o?.55+_(t,e*4+3)*.5:(.6+_(t,e*4+3)*.9)*(.75+.25*c),alpha:o?g:g*.92,hot:o?.85+.15*_(t,e*4+3):.18*g})}return l}var Xt=`87, 86, 88`,Zt=`255, 209, 128`;function Qt(e,t,n){let r=t.tick+n.frameFraction;e.save(),e.lineCap=`round`;for(let i of t.falls){let a=i.sites;if(a===void 0||a.length===0)continue;let o=r-i.tick;if(o<0||o>=.55)continue;let s=t.ships.find(e=>e.id===i.targetId),c=t.ships.find(e=>e.id===i.shooterId);if(s===void 0)continue;let l=n.posOf(s),u=n.headingOf(s)*Math.PI/180,d=O[s.cls].lengthMetres,f=c===void 0?null:n.posOf(c),p=f===null?u:Math.atan2(l.x-f.x,l.y-f.y);a.forEach((t,r)=>{if(Jt(t)&&o>=.3)return;let a=(Kt[t.zone]??0)*d,s={x:l.x+Math.sin(u)*a,y:l.y+Math.cos(u)*a,z:11},c=Yt(t,I(`${i.shooterId}:${i.targetId}`)+i.tick*7919+r*131|0,s,p,o,W(qt(t)));for(let t of c){let r=n.toScreen({x:t.px,y:t.py}),i=n.toScreen({x:t.x,y:t.y});e.strokeStyle=`rgba(${t.hot>.5?Zt:Xt}, ${t.alpha.toFixed(3)})`,e.lineWidth=Math.max(.9,t.halfWidth*2/n.metresPerPx),e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(i.x,i.y),e.stroke()}})}e.restore()}function $t(e){return{pos:e.motion.pos,headingDeg:e.motion.headingDeg,rudder:e.motion.rudder??0}}function en(e,t,n){return(e+((t-e+540)%360-180)*n+360)%360}function tn(){let e=new Map,t=new Map,n=-1,r=0;return{step(i,a){let o=Math.max(0,Math.min(10,a));if(i.tick<n&&(e.clear(),t.clear(),n=-1),i.tick!==n){for(let n of i.ships){let r=t.get(n.id),i=$t(n);e.set(n.id,r??i),t.set(n.id,i)}n=i.tick,r=o/10;return}r=Math.max(r,o/10)},posOf(n){let i=e.get(n.id),a=t.get(n.id);return i===void 0||a===void 0?n.motion.pos:{x:i.pos.x+(a.pos.x-i.pos.x)*r,y:i.pos.y+(a.pos.y-i.pos.y)*r}},headingOf(n){let i=e.get(n.id),a=t.get(n.id);return i===void 0||a===void 0?n.motion.headingDeg:en(i.headingDeg,a.headingDeg,r)},rudderOf(n){let i=e.get(n.id),a=t.get(n.id);return i===void 0||a===void 0?n.motion.rudder??0:i.rudder+(a.rudder-i.rudder)*r},frameFraction(){return r}}}var nn=`rgba(11, 18, 32, 0.75)`,rn=`rgba(230, 240, 255, 0.9)`,an=`rgba(230, 240, 255, 0.35)`,on=`rgba(230, 240, 255, 0.25)`,sn=`rgba(255, 150, 60, 0.95)`,cn=`rgba(255, 255, 255, 0.75)`,ln=.02;function un(e,t,n){return e.solutions.find(e=>e.shooterId===t&&e.targetId===n)?.value??0}function dn(e,t,r,i){let a=t.ships.find(e=>e.side===`raider`);if(a===void 0)return;let o=t.ships.filter(e=>e.side===`enemy`&&!e.sunk&&!e.struckColours);if(o.length===0)return;let s=a.mounts.find(e=>e.targetId!==null)?.targetId,c=o.find(e=>e.id===s)??o[0];if(c===void 0)return;let l=(e,n)=>{let r=ee(t,e,n);return Math.max(ce(e,n,r),le(e,n,r))},u=[{label:L.battleOurSolution,value:un(t,a.id,c.id),ceiling:l(a,c)},...o.map((e,n)=>({label:e.name??(o.length>1?`${L.battleEnemySolution} ▸${n+1}`:L.battleEnemySolution),value:un(t,e.id,a.id),ceiling:l(e,a)}))];e.font=fe(10);for(let[t,n]of u.entries()){let r=44+t*26,i=t===0;e.fillStyle=nn,e.fillRect(10,r,130,8),e.fillStyle=!i&&n.value>=.5?sn:rn,e.fillRect(10,r,130*n.value,8),e.fillStyle=on,e.fillRect(10+130*U.minSolutionToFire-.5,r,1,8),e.fillStyle=an,e.fillRect(10+130*n.ceiling-1,r-2,2,12),e.fillStyle=cn;let a=n.value<n.ceiling-ln?`▲`:n.value>n.ceiling+ln?`▼`:``;a!==``&&e.fillText(a,144,r+8),i&&n.value<U.minSolutionToFire&&e.fillText(L.battleHoldingFire,156,r+8),e.fillText(n.label,10,r+19)}let d=i(a),f=Math.min(...o.map(e=>Math.hypot(i(e).x-d.x,i(e).y-d.y))),p=pe(t.setting,t.tick,a.motion.pos);e.fillStyle=cn,e.textAlign=`center`,e.fillText(`${(f/1e3).toFixed(1)} km · ${je(me[p.weather],n(t.setting,t.tick,a.motion.pos),p.dark)}`,r/2,16),e.fillText(pn(t,o.length),r/2,30),e.textAlign=`left`}function fn(e){let t=e.disguise;if(t===void 0)return null;if(t.seenThroughAtTick!==null)return L.battleLieSeenThrough;if(t.phase!==`standing`)return null;if(m(t))return L.battleLieSatisfied;if(t.suspicion>=t.threshold*A.challengeFraction)return L.battleLieChallenge;let n=e.ships.find(e=>e.side===`raider`&&!e.sunk),r=e.ships.find(e=>e.side===`enemy`&&!e.sunk);return n===void 0||r===void 0?null:Math.hypot(r.motion.pos.x-n.motion.pos.x,r.motion.pos.y-n.motion.pos.y)<=A.inspectionRangeMetres*A.satisfiedRangeFactor?L.battleLieAlongside:L.battleLieClosing}function pn(e,t){let n=fn(e);if(n!==null)return n;if(de(e))return mn(e);switch(R(e)){case`held`:return t>1?L.battleContactHeldMany:L.battleContactHeld;case`gunfire`:return L.battleContactGunfire;case`closing`:return L.battleContactClosing;case`slipping`:return hn(e,L.battleContactSlipping);case`outranged`:return hn(e,L.battleContactOutranged)}}function mn(e){switch(R(e)){case`held`:return L.battleContactConvoyOpen.replaceAll(`{km}`,String(Ze.crippledDisengageMetres/1e3));case`gunfire`:return L.battleContactConvoyGunfire;case`closing`:return L.battleContactConvoyClosing;case`slipping`:case`outranged`:return hn(e,L.battleContactConvoyClear)}}function hn(e,t){let n=Ze.escapeHoldTicks-e.contactBrokenTicks,r=Math.max(1,Math.ceil(n*10/60));return t.replaceAll(`{min}`,String(r))}var gn=`rgba(228, 234, 242, 0.95)`,_n=`rgba(10, 16, 24, 0.28)`,vn=60,yn=.514444;function bn(e,t,n,r,i,a=gn){e.save(),e.translate(t,n),e.rotate(r*Math.PI/180),e.strokeStyle=a,e.lineWidth=Math.max(1,i*.16),e.beginPath(),e.moveTo(0,-i*.55),e.lineTo(0,i*.45),e.moveTo(-i*.5,-i*.12),e.lineTo(i*.5,-i*.12),e.moveTo(-i*.22,i*.38),e.lineTo(i*.22,i*.38),e.stroke(),e.restore()}function xn(e,t){let n=S[e.aircraft].speedKnots*yn*10*Math.min(1,Math.max(0,t.frameFraction)),r=e.headingDeg*Math.PI/180;return{x:e.pos.x+Math.sin(r)*n,y:e.pos.y+Math.cos(r)*n}}function Sn(e){return Math.max(7,Math.min(16,26/Math.sqrt(e)))}function Cn(e){if(e===0)return{back:0,out:0};let t=Math.ceil(e/2),n=e%2==1?-1:1;return{back:t*vn,out:n*t*vn}}function wn(e,t,n){for(let r of t.flights)Tn(e,r,n)}function Tn(e,t,n){let r=xn(t,n),i=t.headingDeg*Math.PI/180,a=Sn(n.metresPerPx),o=Math.cos(i),s=Math.sin(i);for(let i=0;i<t.count;i++){let c=Cn(i),l={x:r.x-s*c.back-o*c.out,y:r.y-o*c.back+s*c.out},u=n.toScreen(l);e.strokeStyle=_n,e.lineWidth=Math.max(1,a*.14),e.beginPath(),e.moveTo(u.x+a*.5,u.y+a*.7),e.lineTo(u.x+a*1.1,u.y+a*.7),e.stroke(),bn(e,u.x,u.y,t.headingDeg,a)}}var En=9e3,Dn=7e3,On=.6;function kn(e){return I(`${e.tick}:${e.style}:${Math.round(e.to.x)}:${Math.round(e.to.y)}`)}function An(e){return e.style===`tracer`?Math.round(4+8*e.intensity):2}function jn(e,t,n,r){return e.tick+(n+G(t,n,0))/r}var Mn=[.4,.6],Nn=.8;function Pn(e,t){if(e.headingDeg===void 0||t===void 0)return[e.from,e.from];let n=O[t],r=e.headingDeg*Math.PI/180,i=Math.sin(r),a=Math.cos(r),o=a,s=-i,c=((e.to.x-e.from.x)*o+(e.to.y-e.from.y)*s>=0?1:-1)*Nn*(n.beamMetres/2),l=e.from.x+o*c,u=e.from.y+s*c,d=e=>{let t=(.5-e)*n.lengthMetres;return{x:l+i*t,y:u+a*t}};return[d(Mn[0]),d(Mn[1])]}function Fn(e,t,n,r){let i=e.to.x-e.from.x,a=e.to.y-e.from.y,o=(G(t,n,1)-.5)*2*150,s=(G(t,n,2)-.5)*2*150;return{x:e.to.x+-a/r*o+i/r*s,y:e.to.y+i/r*o+a/r*s}}function In(e,t,n,r,i,a,o){if(r<.5)return;let s=r,c=i*.9,l=i*(.36+.1*G(a,o,20)),u=i*(.44+.16*G(a,o,21)),d=(G(a,o,22)-.5)*.3*s,f=t+d,p=1+.08*G(a,o,23),m=.98+.09*G(a,o,24);e.beginPath(),e.moveTo(t-c,n),e.quadraticCurveTo(t-c*.72,n-s*.34,t+d*.55-l,n-s*.64),e.quadraticCurveTo(f-u*1.08,n-s*.8,f-u,n-s*.92),e.quadraticCurveTo(f-u*.65,n-s*(p+.05),f-u*.12,n-s*p*.99),e.quadraticCurveTo(f+u*.22,n-s*(m+.06),f+u*.55,n-s*m*.96),e.quadraticCurveTo(f+u*1.05,n-s*.86,t+d*.55+l,n-s*.62),e.quadraticCurveTo(t+c*.72,n-s*.32,t+c,n),e.closePath(),e.fill()}var Ln=`rgba(255, 214, 138, 0.95)`,Rn=`rgba(255, 214, 138, 0.4)`,zn=`rgba(236, 242, 250, 0.95)`,Bn=`255, 196, 110`,Vn=`62, 66, 74`,Hn=`rgba(230, 240, 255, 0.85)`,Un=`96, 100, 108`,Wn=`#d64541`,Gn=.5,Kn=.35,qn=.5,Jn=592;function Yn(e,t,n){let r=t.tick+j(n.frameFraction),i=t.ships.find(e=>e.side===`raider`)?.cls;for(let a of t.aaFire??[])Zn(e,a,i,r,n);Xn(e,t,n)}function Xn(e,t,n){let r=t.tick+j(n.frameFraction);for(let i of t.aaDowned??[])n.inFront(i.pos)&&tr(e,i,r,n)}function Zn(e,t,n,r,i){let a=kn(t),o=t.to.x-t.from.x,s=t.to.y-t.from.y,c=Math.hypot(o,s);if(c<1)return;let l=c/(t.style===`tracer`?En:Dn),u=An(t),d=Pn(t,n);for(let n=0;n<u;n+=1){let o=r-jn(t,a,n,u);if(o<0)continue;let s=Fn(t,a,n,c),f=o/l;f<=1?Qn(e,t,d[n%2],f,s,i):t.style===`burst`&&$n(e,a,n,o-l,s,i)}}function Qn(e,t,n,r,i,a){let o=e=>a.toScreen({x:n.x+(i.x-n.x)*e,y:n.y+(i.y-n.y)*e}),s=o(r),c=o(Math.max(0,r-(t.style===`tracer`?.045:.03)));e.strokeStyle=Rn,e.lineWidth=t.style===`tracer`?1.2:1.6,e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(s.x,s.y),e.stroke(),e.fillStyle=t.style===`tracer`?Ln:zn,e.beginPath(),e.arc(s.x,s.y,t.style===`tracer`?1.4:2.2,0,Math.PI*2),e.fill()}function $n(e,t,n,r,i,o){let s=r/On;if(s>=1)return;let c=o.toScreen(i),l=Sn(o.metresPerPx);if(s<.12){let t=s/.12;e.fillStyle=`rgba(${Bn}, ${.95*(1-t)})`,e.beginPath(),e.arc(c.x,c.y,l*(.25+.45*t),0,Math.PI*2),e.fill()}let u=a(s),d=.65*(1-s);for(let r=0;r<3;r+=1){let i=G(t,n,10+r)*Math.PI*2,a=l*.3*u*(.4+G(t,n,13+r)),o=l*(.28+.55*u)*(.7+.5*G(t,n,16+r));e.fillStyle=`rgba(${Vn}, ${d*(.7+.3*G(t,n,19+r))})`,e.beginPath(),e.arc(c.x+Math.cos(i)*a,c.y+Math.sin(i)*a,o,0,Math.PI*2),e.fill()}}function er(e,t,n){let r=e.headingDeg??G(t,0,30)*360,i=G(t,0,31)<.5?-1:1,a=j(n),o=e.pos.x,s=e.pos.y;for(let e=0;e<10;e+=1){let t=e/10;if(t>=a)break;let n=Math.min((e+1)/10,a)-t,c=t+n/2,l=r+i*165*lt(c),u=Jn*(1-.7*c),d=l*Math.PI/180;o+=Math.sin(d)*u*n*Gn,s+=Math.cos(d)*u*n*Gn}return{x:o,y:s,headingDeg:r+i*165*lt(a)}}function tr(e,t,n,r){let i=I(`${t.tick}:${Math.round(t.pos.x)}:${Math.round(t.pos.y)}`),o=C(n-t.tick,[Gn,Kn,qn]);if(o.done)return;let s=Sn(r.metresPerPx),c=r.toScreen(er(t,i,1));if(o.seg===0){let n=o.t;for(let a=1;a<=5;a+=1){let o=er(t,i,n-a*.08),c=r.toScreen(o);e.fillStyle=`rgba(${Un}, ${.4*(1-a/6)})`,e.beginPath(),e.arc(c.x,c.y,s*.16*(1+a*.25),0,Math.PI*2),e.fill()}let a=er(t,i,n),c=r.toScreen(a),l=1-lt(n);e.strokeStyle=`rgba(10, 16, 24, 0.28)`,e.lineWidth=Math.max(1,s*.14),e.beginPath(),e.moveTo(c.x+s*.5*l,c.y+s*.7*l),e.lineTo(c.x+s*1.1*l,c.y+s*.7*l),e.stroke(),bn(e,c.x,c.y,a.headingDeg,s*(1-.3*n),`rgba(228, 234, 242, ${.95-.25*n})`);return}if(o.seg===1){let t=T(o.t)*s*2.2;t>.5&&(e.fillStyle=Hn,In(e,c.x,c.y,t,s*.55,i,0)),e.fillStyle=`rgba(230, 240, 255, ${.4*(1-o.t)})`,e.beginPath(),e.ellipse(c.x,c.y+1,s*(.5+o.t),s*(.2+.35*o.t),0,0,Math.PI*2),e.fill()}let l=o.seg===1?o.t*.4:.4+o.t*.6;e.save(),e.globalAlpha=l<.55?1:1-(l-.55)/.45,e.fillStyle=Wn,e.font=fe(11,`bold`),e.textAlign=`center`,e.fillText(`SHOT DOWN`,c.x,c.y-s-14*a(l)),e.restore()}var nr=`rgba(205, 212, 222, 0.75)`,rr=`rgba(205, 212, 222, 0.85)`,ir=.5,ar=.28;function or(e,t,n){return e===`degraded`?{fill:t,alpha:ir}:e===`crippled`?{fill:t,alpha:ar}:e===`out`?n?{fill:xe,alpha:.9}:{fill:ge,alpha:1}:{fill:t,alpha:1}}function sr(e,t,n,r,i){let a=Math.min(r,i)*.3;e.beginPath(),e.roundRect(t-r/2,n-i/2,r,i,a)}function cr(e,t,n,r){let i=t.subsystems.radio;if(i===void 0)return;let a=or(i,nr,!0),o=n.bridge.lengthFraction*r.lengthPx,s=n.bridge.along*r.lengthPx+o*.5,c=s-r.lengthPx*.03;e.save(),e.globalAlpha*=a.alpha,e.strokeStyle=a.fill,e.lineWidth=Math.max(.8,r.beamPx*.08),e.lineCap=`round`,e.beginPath(),e.moveTo(0,s+r.lengthPx*.05),e.lineTo(0,s-r.lengthPx*.08),e.moveTo(-r.beamPx*.32,c),e.lineTo(r.beamPx*.32,c),e.stroke(),e.restore()}function lr(e,t,n){e.save(),e.strokeStyle=rr,e.fillStyle=rr,e.lineWidth=Math.max(.7,n.beamPx*.06),e.lineCap=`round`;for(let r of t.masts??[]){let t=r*n.lengthPx;e.beginPath(),e.arc(0,t,Math.max(.8,n.beamPx*.08),0,2*Math.PI),e.fill()}for(let r of t.kingposts??[]){let t=r*n.lengthPx;e.beginPath(),e.moveTo(-n.beamPx*.38,t),e.lineTo(n.beamPx*.38,t),e.stroke()}e.restore()}function ur(e,t,n,r,i){let a=t.subsystems.seaplane;if(a===void 0||n.catapult===void 0)return;let o=n.catapult*r.lengthPx,s=or(a,i,!0);e.save(),e.globalAlpha*=s.alpha,e.strokeStyle=s.fill,e.lineWidth=Math.max(.8,r.beamPx*.07),e.lineCap=`round`,e.beginPath(),e.moveTo(-r.beamPx*.42,o),e.lineTo(r.beamPx*.42,o),e.stroke();let c=r.beamPx*.3;e.beginPath(),e.moveTo(-c,o),e.lineTo(c,o),e.moveTo(0,o-c*.55),e.lineTo(0,o+c*.55),e.stroke(),e.restore()}function dr(e,t,n,r,i){for(let a of n.tubeMounts??[]){if(t.subsystems[a.mountId]===void 0)continue;let n=or(t.subsystems[a.mountId],i,!1),o=a.along*r.lengthPx,s=(a.athwart??0)*r.beamPx/2,c=r.lengthPx*.035,l=Math.max(1,r.beamPx*.14);e.save(),e.globalAlpha*=n.alpha,e.fillStyle=n.fill,sr(e,s,o,l,c*2),e.fill(),e.strokeStyle=z,e.lineWidth=.6,e.stroke(),e.restore()}}function fr(e,t,n,r,i,a){e.save(),e.translate(a,0);let o=n.bridge.lengthFraction*r.lengthPx,s=or(t.subsystems.director,i,!0);e.save(),e.globalAlpha*=s.alpha,e.fillStyle=s.fill,sr(e,0,n.bridge.along*r.lengthPx,r.beamPx*.56,o),e.fill(),e.restore(),e.fillStyle=i;for(let t of n.blocks??[])sr(e,0,t.along*r.lengthPx,r.beamPx*t.widthFraction,t.lengthFraction*r.lengthPx),e.fill(),e.strokeStyle=z,e.lineWidth=.6,e.stroke();let c=or(t.subsystems.engines,i,!1);e.save(),e.globalAlpha*=c.alpha;for(let t of n.funnels){let n=t*r.lengthPx,i=Math.max(1,r.beamPx*.16),a=Math.max(1.2,r.beamPx*.21);e.beginPath(),e.ellipse(0,n,i,a,0,0,2*Math.PI),e.fillStyle=c.fill,e.fill(),e.strokeStyle=z,e.lineWidth=.8,e.stroke(),e.beginPath(),e.ellipse(0,n,i*.55,a*.55,0,0,2*Math.PI),e.fillStyle=`rgba(20, 24, 30, 0.55)`,e.fill()}e.restore(),dr(e,t,n,r,i),ur(e,t,n,r,i),lr(e,n,r),cr(e,t,n,r),e.restore()}var pr=`rgba(10, 16, 22, 0.55)`;function mr(e,t){let n=e.disguise;if(n===void 0||t.side!==`raider`)return null;if(n.phase===`open`)return 1;if(n.phase===`standing`||n.droppedAtTick===null)return 0;let r=Math.max(1,A.coloursBeatTicks),i=e.tick-n.droppedAtTick;return Math.max(0,Math.min(1,i/r))}function hr(e,t,n,r,i){let a=t.along*n.lengthPx,o=t.athwart===void 0?[-1,1]:[t.athwart<0?-1:1],s=Math.max(2,n.lengthPx*.055),c=Math.max(1,n.beamPx*.22)*Math.sin(i*Math.PI/2);for(let t of o){let i=t*n.beamPx/2;e.beginPath(),e.rect(i,a-s/2,t*Math.max(.6,c),s),e.fillStyle=r,e.globalAlpha=.85,e.fill(),e.globalAlpha=1,e.strokeStyle=pr,e.lineWidth=.6,e.stroke()}}var gr={operational:0,degraded:.3,crippled:.55,out:1};function _r(e){return e===void 0?0:gr[e]}function vr(e,t){return t<=0?0:Math.min(t-1,Math.floor(_(I(e),7)*t))}function yr(e){return et(e)}function br(e){return _(I(e),41)<.5?-1:1}function xr(e,t){let n=yr(e);return br(t)*15*n*n}function Sr(e){let t=e.fore.level-e.aft.level;return 5*Math.max(-1,Math.min(1,t/ze.flooding.sinkAtTotal))}var Cr=`#15181c`,wr=.16,Tr=`rgba(255, 244, 205, 0.95)`,Er=`rgba(255, 170, 70, 0.55)`,Dr=.8,Or=`190, 194, 200`,kr=.22;function Ar(e){return e.athwart===void 0?1:.72}function jr(e,t,n){return e.beamPx*(t>1?.9:.65)*n}function Mr(e,t,n){let r=n.toScreen(n.posOf(e)),i=E[e.cls].turrets.find(e=>e.mountId===t);if(i===void 0)return r;let a=K(e.cls,n.metresPerPx),o=i.along*a.lengthPx,s=(i.athwart??0)*a.beamPx/2,c=n.headingOf(e)*Math.PI/180;return{x:r.x+Math.cos(c)*s-Math.sin(c)*o,y:r.y+Math.sin(c)*s+Math.cos(c)*o}}function Nr(e,t,n,r,a){let o=t===void 0?F(n):ct(t,n),s=Be(e.cls,n.id);if(s===void 0)return o;let c=r.ships.find(e=>e.id===t?.targetId);return g(o,e.sunk||e.struckColours||c===void 0||c.sunk||c.struckColours?F(n):i({pos:a.posOf(e),headingDeg:a.headingOf(e),speedKnots:e.motion.speedKnots},{pos:a.posOf(c),headingDeg:a.headingOf(c),speedKnots:c.motion.speedKnots},n)??F(n),s.traverseDegPerSecond*a.frameFraction*10)}function Pr(e,t,n,r){let i=Mr(e,t,r),a=E[e.cls].turrets.find(e=>e.mountId===t),o=Qe(e.cls).find(e=>e.id===t);if(a===void 0||o===void 0)return i;let s=Nr(e,e.mounts.find(e=>e.mountId===t),o,n,r),c=jr(K(e.cls,r.metresPerPx),o.guns,Ar(a)),l=(r.headingOf(e)+s)*Math.PI/180;return{x:i.x+Math.sin(l)*c,y:i.y-Math.cos(l)*c}}function Fr(e,t,n,r){let i=null;for(let a of n.salvos){if(a.shooterId!==e.id||a.mountId!==t)continue;let o=n.tick+r.frameFraction-a.firedAtTick;o>=0&&(i===null||o<i)&&(i=o)}return i}function Ir(e,t,n,r,i,a,o,s){e.save(),e.rotate(n*Math.PI/180);let c=vr(t,r);e.strokeStyle=ge,e.lineWidth=s,e.lineCap=`round`;let l=26*Math.PI/180;for(let n=0;n<r;n+=1){let i=(n-(r-1)/2)*o,s=n===c,u=a*(s?Math.cos(l):1),d=s?(_(I(t),9)-.5)*.34:0;e.beginPath(),e.moveTo(i,0),e.lineTo(i+Math.sin(d)*u,-Math.cos(d)*u),e.stroke()}e.fillStyle=ge,e.beginPath(),e.arc(0,0,i,0,2*Math.PI),e.fill(),e.fillStyle=Cr,e.beginPath(),e.arc((_(I(t),1)-.5)*i,(_(I(t),2)-.5)*i,Math.max(.6,i*.3),0,2*Math.PI),e.fill(),e.restore()}function Lr(e,t,n,r,i,a,o,s){let c=n.id,u=n.guns,d=r.along*i.lengthPx,f=(r.athwart??0)*i.beamPx/2,p=Ar(r),m=Math.max(1.1,i.beamPx*(u>1?.3:.22)*p);if(e.save(),e.translate(f,d),t.subsystems[c]===`out`){Ir(e,c,t.mounts.find(e=>e.mountId===c)?.trainDeg??F(n),u,m,jr(i,u,p),Math.max(1,i.beamPx*.16*p),Math.max(.8,i.beamPx*.09*p)),e.restore();return}let h=Nr(t,t.mounts.find(e=>e.mountId===c),n,o,s);e.rotate(h*Math.PI/180),t.subsystems[c]===`degraded`&&(e.globalAlpha*=.55),t.subsystems[c]===`crippled`&&(e.globalAlpha*=.32);let g=Fr(t,c,o,s),_=g!==null&&g<wr?1-g/wr:0,v=jr(i,u,p),y=v*(1-kr*_),b=Math.max(1,i.beamPx*.16*p);e.strokeStyle=a,e.lineWidth=Math.max(.8,i.beamPx*.09*p),e.lineCap=`round`;for(let t=0;t<u;t+=1){let n=(t-(u-1)/2)*b;e.beginPath(),e.moveTo(n,0),e.lineTo(n,-y),e.stroke()}if(u>1?(e.strokeStyle=z,e.lineWidth=.7,e.beginPath(),e.arc(0,0,m*1.18,0,2*Math.PI),e.stroke(),e.fillStyle=a,e.beginPath(),e.roundRect(-m,-m*1.05,m*2,m*2.05,[m*.85,m*.85,m*.35,m*.35]),e.fill(),e.strokeStyle=z,e.stroke()):(e.fillStyle=a,e.beginPath(),e.arc(0,0,m,0,2*Math.PI),e.fill()),_>0){let t=-y-1,n=(2+3.5*_)*Math.max(1,i.beamPx/6)*p,r=e.createRadialGradient(0,t,0,0,t,n);r.addColorStop(0,Tr),r.addColorStop(.35,Er),r.addColorStop(1,`rgba(255, 170, 70, 0)`),e.fillStyle=r,e.beginPath(),e.arc(0,t,n,0,2*Math.PI),e.fill()}if(g!==null&&g>=wr&&g<Dr){let n=(g-wr)/(Dr-wr),r=Math.max(1,i.beamPx/8)*p,a=(2+6*n)*r,c=l(o.setting.weatherSeed),u=(s.headingOf(t)+h)*Math.PI/180,d=Math.sin(c),f=-Math.cos(c),m=4*n*r,_=(d*Math.cos(u)+f*Math.sin(u))*m,y=(-d*Math.sin(u)+f*Math.cos(u))*m;e.fillStyle=`rgba(${Or}, ${(.4*(1-n)).toFixed(3)})`,e.beginPath(),e.arc(_,-v-a+y,(1.5+3.5*n)*p,0,2*Math.PI),e.fill()}e.restore()}var Rr=`rgba(255, 255, 255, 0.4)`,zr=`rgba(130, 195, 245, 0.9)`,Br=35,Vr=`rgba(225, 238, 248, 0.5)`,Hr=.07,Ur=.22;function Wr(e,t,n,r,i){let a=i?.fore.level??0,o=i?.mid.level??0,s=i?.aft.level??0,c=-n/2+n*.08*a,l=n/2-n*.06*s,u=(c+l)/2,d=c-u,f=l-u,p=r/2*(1-.18*o),m=p*(1-.28*a),h=p*(1-.28*s),g=d+n*t.bowFraction,_=f-n*t.sternFraction,v=h*t.sternWidthFraction;e.beginPath(),e.moveTo(0,d),e.quadraticCurveTo(m,d+n*t.bowFraction*.45,m,g),e.lineTo(h,_),e.quadraticCurveTo(h,f,v,f),e.lineTo(-v,f),e.quadraticCurveTo(-h,f,-h,_),e.lineTo(-m,g),e.quadraticCurveTo(-m,d+n*t.bowFraction*.45,0,d),e.closePath()}function Gr(e,t,n){let r=Math.abs(t.motion.speedKnots);if(r<3)return;let i=Math.min(1,r/26),a=-n.lengthPx/2,o=n.beamPx*(.5+.5*i);e.save(),e.strokeStyle=Vr,e.globalAlpha*=.35+.45*i,e.lineWidth=Math.max(.8,n.beamPx*.1),e.lineCap=`round`,e.beginPath(),e.moveTo(0,a+n.lengthPx*.02),e.lineTo(o,a+n.lengthPx*.09),e.moveTo(0,a+n.lengthPx*.02),e.lineTo(-o,a+n.lengthPx*.09),e.stroke(),e.restore()}function Kr(e,t,n,r){let i=n.lengthPx/2,a=Math.max(4,Math.min(n.lengthPx*.32,n.beamPx*1.3)),o=t*Br*Math.PI/180,s=or(r,zr,!0);e.save(),e.globalAlpha*=s.alpha,e.strokeStyle=s.fill,e.lineWidth=Math.max(1.5,Math.min(n.beamPx*.24,4)),e.lineCap=`round`,e.beginPath(),e.moveTo(0,i),e.lineTo(Math.sin(o)*a,i+Math.cos(o)*a),e.stroke(),e.restore()}function qr(e,t,n){let r=t.burns??Fe,i=t.plating??Fe;if(!(t.sunk||!Pe(r,i))){e.save(),e.clip();for(let a of $e(t.id,r,i)){let t=a.kind===`soot`;e.fillStyle=t?`rgba(22, 19, 17, ${(a.weight*.72).toFixed(3)})`:`rgba(120, 100, 84, ${(a.weight*.6).toFixed(3)})`,e.beginPath(),e.ellipse(a.across*n.beamPx*.34,-a.along*n.lengthPx,Math.max(.7,a.size*n.beamPx*.5),Math.max(.7,a.size*n.beamPx*(t?.8:.42)),0,0,2*Math.PI),e.fill()}e.restore()}}function Jr(e,t,n,r){let i=r.toScreen(r.posOf(t)),a=K(t.cls,r.metresPerPx),o=E[t.cls],s=t.side===`raider`?at:nt,c=t.side===`raider`?oe:st,l=t.sunk?0:r.rudderOf(t),u=-l*Hr*a.beamPx*Math.min(1,Math.abs(t.motion.speedKnots)/20)+xr(t.flooding,t.id)/15*Ur*a.beamPx;e.save(),e.translate(i.x,i.y),e.rotate(r.headingOf(t)*(Math.PI/180)),e.globalAlpha=t.sunk?.35:1,t.sunk||Gr(e,t,a),Wr(e,o,a.lengthPx,a.beamPx,t.flooding),e.fillStyle=s,e.fill(),e.strokeStyle=z,e.lineWidth=1,e.stroke();let d=(t.flooding.fore.level+t.flooding.mid.level+t.flooding.aft.level)/3;d>.04&&(e.fillStyle=`rgba(14, 36, 58, ${(.4*d).toFixed(3)})`,e.fill()),Wr(e,o,a.lengthPx,a.beamPx,t.flooding),qr(e,t,a),fr(e,t,o,a,c,u);let f=mr(n,t);for(let i of Qe(t.cls)){let s=o.turrets.find(e=>e.mountId===i.id);s!==void 0&&(f!==null&&hr(e,s,a,c,f),(f===null||f>0)&&(e.globalAlpha=f===null?1:f,Lr(e,t,i,s,a,c,n,r)),e.globalAlpha=t.sunk?.35:1)}if(t.sunk||(Kr(e,l,a,t.subsystems.steering),e.save(),Wr(e,o,a.lengthPx,a.beamPx,t.flooding),e.clip(),Ue(e,t,a.beamPx,a.lengthPx,r.animationMs),e.restore()),e.globalAlpha=1,e.restore(),!t.sunk){let n=t.orders.headingDeg*Math.PI/180;e.strokeStyle=Rr,e.lineWidth=1,e.beginPath(),e.moveTo(i.x+Math.sin(n)*(a.lengthPx/2+3),i.y-Math.cos(n)*(a.lengthPx/2+3)),e.lineTo(i.x+Math.sin(n)*(a.lengthPx/2+12),i.y-Math.cos(n)*(a.lengthPx/2+12)),e.stroke()}Te(e,t,i,a.lengthPx/2+24)}var Yr=17,Xr=7,Zr=3,Qr=5.5,$r=28*Math.PI/180,ei=24,ti=1.75,ni=3.75,ri=.9;function ii(e){return 1-x(j((e-16)/20))}function ai(e,t,n,r,i,a){let o=a+Yr;e[0]=t+r*a,e[1]=n+i*a,e[2]=t+r*o,e[3]=n+i*o;let s=-r,c=-i,l=Math.cos($r),u=Math.sin($r);e[4]=e[2]+(s*l-c*u)*Qr,e[5]=e[3]+(s*u+c*l)*Qr,e[6]=e[2]+(s*l+c*u)*Qr,e[7]=e[3]+(c*l-s*u)*Qr}var J=new Float64Array(8);function oi(e,t,n,r){let i=O[t.cls].lengthMetres/n.metresPerPx,a=ii(i);if(a<=0)return;let o=n.posOf(t),s=n.headingOf(t)*Math.PI/180,c=ei*n.metresPerPx,l={x:o.x+Math.sin(s)*c,y:o.y+Math.cos(s)*c};if(!n.inFront(o)||!n.inFront(l))return;let u=n.toScreen(o),d=n.toScreen(l),f=Math.hypot(d.x-u.x,d.y-u.y);f<1e-6||(ai(J,u.x,u.y,(d.x-u.x)/f,(d.y-u.y)/f,Math.max(Xr,i*.5+Zr)),e.save(),e.globalAlpha=a*ri,e.lineCap=`round`,e.lineJoin=`round`,e.beginPath(),e.moveTo(J[0],J[1]),e.lineTo(J[2],J[3]),e.moveTo(J[4],J[5]),e.lineTo(J[2],J[3]),e.lineTo(J[6],J[7]),e.strokeStyle=z,e.lineWidth=ni,e.stroke(),e.strokeStyle=r,e.lineWidth=ti,e.stroke(),e.restore())}var si=`rgba(255, 255, 255, 0.72)`,ci=13,li=46,ui=9,di=15;function fi(e,t,n,r){e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.stroke()}function pi(e,t,n){let r=t.ships.filter(e=>e.side===`raider`&&!e.sunk);if(r.length!==0){e.strokeStyle=si,e.lineWidth=1.5;for(let i of t.ships){if(i.side!==`enemy`||i.sunk||!r.some(e=>b(t,e,i))||!n.inFront(n.posOf(i)))continue;let a=n.toScreen(n.posOf(i)),o=K(i.cls,n.metresPerPx).lengthPx*.5;fi(e,a.x,a.y,Math.min(li,Math.max(ci,o+ui))),oi(e,i,n,nt)}for(let t of r)oi(e,t,n,s);for(let r of t.flights){let t=xn(r,n);if(!n.inFront(t))continue;let i=n.toScreen(t);fi(e,i.x,i.y,di)}}}var mi={AP:`rgba(236, 242, 250, 0.92)`,HE:`rgba(255, 222, 130, 0.92)`},hi={AP:`rgba(236, 242, 250, 0.3)`,HE:`rgba(255, 222, 130, 0.3)`},gi=180;function _i(e,t){let n=.8*t,r=.3*t;e.beginPath(),e.moveTo(n,0),e.quadraticCurveTo(n*.15,r,-n*.8,r),e.lineTo(-n,r*.8),e.lineTo(-n,-r*.8),e.lineTo(-n*.8,-r),e.quadraticCurveTo(n*.15,-r,n,0),e.closePath()}function vi(e,t,n){for(let r of t.salvos){let i=t.ships.find(e=>e.id===r.shooterId),a=t.ships.find(e=>e.id===r.targetId);if(i===void 0||a===void 0)continue;let o=Math.max(1,r.landsAtTick-r.firedAtTick),s=Math.min(1,Math.max(0,(t.tick+n.frameFraction-r.firedAtTick)/o)),c=n.posOf(i),l=n.posOf(a),u=l.x+r.fallOffset.x-c.x,d=l.y+r.fallOffset.y-c.y,f=Math.hypot(u,d),p=f<1?0:d/f,m=f<1?0:-u/f,h=0,g=0;if(n.inFront(c)){let e=n.toScreen(c),a=Pr(i,r.mountId,t,n);h=a.x-e.x,g=a.y-e.y}let _=(e,t)=>{let r={x:c.x+(u+p*e)*t,y:c.y+(d+m*e)*t};if(!n.inFront(r))return null;let i=n.toScreen(r);return{x:i.x+h*(1-t),y:i.y+g*(1-t)}},v=I(`${r.shooterId}:${r.mountId}`)^(r.firedAtTick|0),y=Math.max(0,s-.04),b=1+.85*T(s);for(let t=0;t<r.guns;t+=1){let n=(G(v,t,0)-.5)*2*gi,i=_(n,s);if(i===null)continue;let a=_(n,y);a!==null&&(e.strokeStyle=hi[r.shell],e.lineWidth=1,e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(i.x,i.y),e.stroke());let o=s>0?a:i,c=s>0?i:_(n,.04),l=o===null||c===null?0:Math.atan2(c.y-o.y,c.x-o.x);e.save(),e.translate(i.x,i.y),e.rotate(l),_i(e,b),e.fillStyle=mi[r.shell],e.fill(),e.restore()}}}function yi(e,n,r){let i=n.ships.filter(e=>e.side===`enemy`&&!e.sunk&&!e.struckColours);e.font=fe(11,`bold`),e.fillStyle=nt;for(let[t,n]of i.entries()){let a=n.name??(i.length>1?`${t+1}`:null),o=r.posOf(n);if(a===null||!r.inFront(o))continue;let s=r.toScreen(o),c=K(n.cls,r.metresPerPx).lengthPx/2;e.fillText(a,s.x+c+6,s.y-8)}let a=n.ships.find(e=>e.side===`raider`&&!e.sunk),o=a===void 0?null:Ce(a.cls);if(a===void 0||o===null||!r.inFront(r.posOf(a)))return;let c=r.toScreen(r.posOf(a)),l=K(a.cls,r.metresPerPx).lengthPx/2;e.save(),e.fillStyle=s,e.textAlign=`center`,e.fillText(t[o].shipName,c.x,c.y+l+14),e.restore()}var bi=36,xi=1.35,Si=5;function Ci(e,t){return e.ships.map(e=>{let n=t.toScreen(t.posOf(e)),r=t.headingOf(e)*Math.PI/180,i=K(e.cls,t.metresPerPx);return{x:n.x,y:n.y,sternX:-Math.sin(r),sternY:Math.cos(r),wakePx:e.sunk||e.motion.speedKnots<.5?0:Math.min(90,4+e.motion.speedKnots*2.6)*xi,lengthPx:i.lengthPx,beamPx:i.beamPx}})}var wi={calm:0,wakeEdge:0};function Ti(e,t,n){let r=0,i=0;for(let a of e){let e=t-a.x,o=n-a.y,s=Math.hypot(e,o);if(s<bi&&(r=Math.max(r,1-s/bi)),a.wakePx<=0)continue;let c=e*a.sternX+o*a.sternY-a.lengthPx/2;if(c<0||c>a.wakePx)continue;let l=1-c/a.wakePx,u=Math.abs(o*a.sternX-e*a.sternY),d=a.beamPx*(.9+1.3*(c/a.wakePx));u<d?r=Math.max(r,.25+.75*l):u<d+Si&&(i=Math.max(i,l))}return r===0&&i===0?wi:{calm:Math.min(1,r),wakeEdge:i}}var Ei=`200, 226, 250`,Di=`8, 26, 48`,Oi=1.4,ki=`240, 248, 255`,Ai=56,ji=3.5;function Mi(e,t,n,r,i,a,o,s){let c=2**Math.round(Math.log2(Ai*n.metresPerPx)),l=n.toScreen({x:0,y:0}),u=(0-l.x)*n.metresPerPx,d=(o-l.x)*n.metresPerPx,f=(l.y-s)*n.metresPerPx,p=l.y*n.metresPerPx,m=r.storm>=.12,h=Math.sin(i),g=-Math.cos(i),v=Ci(t,n);e.lineWidth=1.2;for(let t=Math.floor(u/c);t*c<=d;t+=1)for(let o=Math.floor(f/c);o*c<=p;o+=1){let s=_(t,o*13+5),l=ue(a/ji+s,1),u=Math.sin(l*Math.PI)**2;if(u<.06)continue;let d=(_(t*7+1,o)-.5)*.9,f=(_(t,o*7+3)-.5)*.9,p=(l-.5)*.25,y=n.toScreen({x:(t+.5+d+Math.sin(i)*p)*c,y:(o+.5+f+Math.cos(i)*p)*c}),b=Ti(v,y.x,y.y);if(_(t,o)<=r.crestDensity&&b.calm<.9){let n=1-b.calm,a=i+Math.PI/2+(_(t*3,o*5)-.5)*.7,s=(5+8*_(t*5+2,o*3+1))*n,c=Math.sin(a)*s,l=-Math.cos(a)*s,d=2.5,f=y.x-h*Oi,p=y.y-g*Oi;if(e.strokeStyle=`rgba(${Di}, ${(.55*r.crestAlpha*u*n).toFixed(3)})`,e.beginPath(),e.moveTo(f-c,p-l),e.quadraticCurveTo(f+h*d,p+g*d,f+c,p+l),e.stroke(),e.strokeStyle=`rgba(${Ei}, ${(r.crestAlpha*u*n).toFixed(3)})`,e.beginPath(),e.moveTo(y.x-c,y.y-l),e.quadraticCurveTo(y.x+h*d,y.y+g*d,y.x+c,y.y+l),e.stroke(),m&&_(t*11+4,o)<.6&&(e.fillStyle=`rgba(${ki}, ${(.5*u*n).toFixed(3)})`,e.beginPath(),e.arc(y.x,y.y,1+1.4*u,0,2*Math.PI),e.fill(),u>.45&&_(t*19+2,o*5+8)<.55)){let r=_(t*23+6,o*17+3)<.5?1:-1,i=(3.5+5*_(t*29+7,o*7+9))*n;e.strokeStyle=`rgba(${ki}, ${(.32*u*n).toFixed(3)})`,e.beginPath(),e.moveTo(y.x+r*c,y.y+r*l),e.lineTo(y.x+r*c+h*i,y.y+r*l+g*i),e.stroke()}}if(b.wakeEdge>.05){let t=Math.sin(ue(a/1.6+s,1)*Math.PI)**2;e.fillStyle=`rgba(${ki}, ${(.45*b.wakeEdge*(.35+.65*t)).toFixed(3)})`,e.beginPath(),e.arc(y.x,y.y,1+1.5*b.wakeEdge,0,2*Math.PI),e.fill()}}}var Ni=`210, 228, 244`,Pi=`224, 168, 110`,Fi=`255, 250, 235`,Ii=28,Li=1.15,Ri={clear:1,overcast:.45,squall:.15,gale:0};function zi(e,t){let n=Ri[t];return{liftAlpha:.05*x(j((e-8)/22))*(.4+.6*n),warmAlpha:.07*T(j((e+6)/16))*(.3+.7*n),glitterDensity:.22*x(j(e/25))*n}}function Bi(e,t,n,r){t.liftAlpha>.003&&(e.fillStyle=`rgba(${Ni}, ${t.liftAlpha.toFixed(3)})`,e.fillRect(0,0,n,r)),t.warmAlpha>.003&&(e.fillStyle=`rgba(${Pi}, ${t.warmAlpha.toFixed(3)})`,e.fillRect(0,0,n,r))}function Vi(e,t,n,r,i,a){if(n.glitterDensity<=.005)return;let o=2**Math.round(Math.log2(Ii*t.metresPerPx)),s=t.toScreen({x:0,y:0}),c=(0-s.x)*t.metresPerPx,l=(i-s.x)*t.metresPerPx,u=(s.y-a)*t.metresPerPx,d=s.y*t.metresPerPx;for(let i=Math.floor(c/o);i*o<=l;i+=1)for(let a=Math.floor(u/o);a*o<=d;a+=1){if(_(i*17+9,a*23+4)>=n.glitterDensity)continue;let s=_(i*5+2,a*11+7),c=(r/Li+s)%1,l=Math.sin(c*Math.PI)**2;if(l<.2)continue;let u=(_(i*3+1,a*13+6)-.5)*.9,d=(_(i*13+8,a*3+2)-.5)*.9,f=t.toScreen({x:(i+.5+u)*o,y:(a+.5+d)*o});e.fillStyle=`rgba(${Fi}, ${(.45*l).toFixed(3)})`,e.beginPath(),e.arc(f.x,f.y,.7,0,2*Math.PI),e.fill()}}var Hi=[205,230,255];function Ui(){let e=[{tile:y(31,10,Hi,512),speed:10,scale:1.2,stretch:7,alpha:.1},{tile:y(47,10,Hi,512),speed:5.5,scale:.65,stretch:5,alpha:.06}],t=e.map(()=>null);return{draw(n,r,i,a,o,s,c){let l=i-Math.PI/2;for(let[i,u]of e.entries()){t[i]??=n.createPattern(u.tile,`repeat`);let e=t[i];if(e==null)continue;n.save(),n.globalAlpha=u.alpha*o,n.translate(r.x,r.y),n.rotate(l);let d=u.tile.width*u.scale;n.translate(ue(a*u.speed,d),0),n.scale(u.scale,u.scale*u.stretch);let f=(Math.hypot(r.x,r.y)+s+c+d)/u.scale;n.fillStyle=e,n.fillRect(-f,-f,2*f,2*f),n.restore()}}}}var Wi=`#12365c`,Gi=[8,30,56],Ki=[205,230,255],qi=`rgba(8, 14, 34, 0.2)`,Ji=`58, 72, 84`,Yi=6,Xi=4,Zi={clear:{crestDensity:.3,crestAlpha:.45,swell:1,storm:0},overcast:{crestDensity:.45,crestAlpha:.55,swell:1.15,storm:.05},squall:{crestDensity:.7,crestAlpha:.75,swell:1.35,storm:.12},gale:{crestDensity:1,crestAlpha:1,swell:1.6,storm:.2}};function Qi(){let t=[{tile:p(21,22,Gi),drift:{x:.8,y:.4},scale:6,alpha:.22,rotate:-.35},{tile:y(8,20,Ki,512),drift:{x:-4,y:5},scale:1.7,alpha:.04,rotate:.25},{tile:y(53,44,Ki,512),drift:{x:9,y:6},scale:1,alpha:.075,rotate:-.15}],n=t.map(()=>null),r=Ui(),i=document.createElement(`canvas`),a=i.getContext(`2d`);function o(e,r,i,a,o,s,c){let l=t[r];if(l===void 0)return;n[r]??=e.createPattern(l.tile,`repeat`);let u=n[r];if(u!=null){if(e.save(),e.globalAlpha=l.alpha*c,l.rotate===void 0){let t=l.tile.width*l.scale,n=ue(i.x+a*l.drift.x,t),r=ue(i.y+a*l.drift.y,t);e.translate(n,r),e.scale(l.scale,l.scale),e.fillStyle=u,e.fillRect((-n-t)/l.scale,(-r-t)/l.scale,(o+2*t)/l.scale,(s+2*t)/l.scale)}else{let t=i.x+a*l.drift.x,n=i.y+a*l.drift.y;e.translate(t,n),e.rotate(l.rotate),e.scale(l.scale,l.scale);let r=(Math.hypot(t,n)+o+s+l.tile.width)/l.scale;e.fillStyle=u,e.fillRect(-r,-r,2*r,2*r)}e.restore()}}return{draw(t,n,s,c,u){let d=h()?0:(n.tick+s.frameFraction)*10,f=pe(n.setting,n.tick,{x:0,y:0}),p=Zi[f.weather],m=zi(re(ie(n.setting,n.tick),e(n.setting.anchor,{x:0,y:0})),f.weather),g=s.toScreen({x:0,y:0}),_=l(n.setting.weatherSeed),v=a??t;if(a!==null){let e=Math.max(1,Math.round(c)),t=Math.max(1,Math.round(u));(i.width!==e||i.height!==t)&&(i.width=e,i.height=t)}v.fillStyle=Wi,v.fillRect(0,0,c,u),Bi(v,m,c,u),o(v,0,g,d,c,u,1),r.draw(v,g,_,d,p.swell,c,u),o(v,1,g,d,c,u,p.swell);let y=j((Yi-s.metresPerPx)/Xi)*p.swell;y>.02&&o(v,2,g,d,c,u,y),p.storm>0&&(v.fillStyle=`rgba(${Ji}, ${p.storm})`,v.fillRect(0,0,c,u)),a!==null&&t.drawImage(i,0,0,c,u),Mi(t,n,s,p,_,d,c,u),Vi(t,s,m,d,c,u),f.dark&&(t.fillStyle=qi,t.fillRect(0,0,c,u))}}}var $i=.8,ea=`235, 244, 252`,ta=`rgba(230, 240, 255, 0.85)`,na=`rgba(240, 248, 255, 0.9)`,ra=`rgba(255, 150, 90, 0.9)`,ia=`255, 236, 200`,aa=`58, 56, 62`,oa=.25;function sa(e,t,n){for(let r of t.ships){if(r.sunk||r.motion.speedKnots<.5)continue;let{lengthPx:i,beamPx:a}=K(r.cls,n.metresPerPx),o=n.toScreen(n.posOf(r)),s=Math.min(90,4+r.motion.speedKnots*2.6),c=I(r.id),l=Math.floor((t.tick+n.frameFraction)*10/$i);e.save(),e.translate(o.x,o.y),e.rotate(n.headingOf(r)*Math.PI/180);let u=i/2,d=e.createLinearGradient(0,u,0,u+s);d.addColorStop(0,`rgba(${ea}, 0.4)`),d.addColorStop(1,`rgba(${ea}, 0)`),e.fillStyle=d,e.beginPath(),e.moveTo(-a*.45,u),e.lineTo(a*.45,u),e.lineTo(a*.95,u+s),e.lineTo(-a*.95,u+s),e.closePath(),e.fill();for(let t=0;t<6;t+=1){let n=(t+_(c+t,l))/6,r=u+n*s,i=a*(.45+.5*n),o=(_(c+t,l+1)-.5)*2*i*.7;e.fillStyle=`rgba(${ea}, ${.35*(1-n)})`,e.beginPath(),e.arc(o,r,.8+1.6*(1-n),0,2*Math.PI),e.fill()}e.strokeStyle=`rgba(${ea}, 0.18)`,e.lineWidth=1;for(let t of[-1,1])e.beginPath(),e.moveTo(t*a*.5,u),e.lineTo(t*(a*.5+s*.3),u+s),e.stroke();let f=-i/2;e.strokeStyle=`rgba(${ea}, ${Math.min(.5,.1+r.motion.speedKnots*.015)})`,e.lineWidth=1.2,e.beginPath(),e.moveTo(-a*.9,f+a),e.lineTo(0,f-1.5),e.lineTo(a*.9,f+a),e.stroke(),e.restore()}}function ca(e,t,n){for(let r of t.falls){let i=t.tick+n.frameFraction-r.tick,o=1-i/U.fallRetentionTicks;if(o<=0)continue;let s=r.tick*37+Math.round(r.pos.x)*7+Math.round(r.pos.y)|0,c=n.toScreen(r.pos);for(let t=0;t<r.guns;t+=1){let r=G(s,t,0)*2*Math.PI,a=(40+G(s,t,1)*140)/n.metresPerPx,l=c.x+Math.cos(r)*a,u=c.y+Math.sin(r)*a,d=T(Math.min(1,i/(U.fallRetentionTicks*.45)))*13;if(d>.5){e.fillStyle=ta,In(e,l,u,d,3.6,s,t),e.fillStyle=na;for(let n=0;n<3;n+=1){let r=(G(s,t,2+n)-.5)*6;e.beginPath(),e.arc(l+r,u-d-1.5,.9,0,2*Math.PI),e.fill()}}let f=1.5+(1-o)*4;e.fillStyle=`rgba(230, 240, 255, ${.35*o})`,e.beginPath(),e.arc(l,u,f,0,2*Math.PI),e.fill()}if(r.hits>0){let u=Math.min(1,.5+r.hits*.25),d=t.ships.find(e=>e.id===r.targetId),f=t.ships.find(e=>e.id===r.shooterId),p=c.x,m=c.y,h=null;if(d!==void 0&&!d.sunk){let t=n.posOf(d),o=n.toScreen(t),l=K(d.cls,n.metresPerPx),u=n.headingOf(d)*Math.PI/180,g=f===void 0?r.pos:n.posOf(f);if(Ae(Math.hypot(g.x-t.x,g.y-t.y))===`long`){let e=(G(s,9,7)-.5)*l.lengthPx*.6;p=o.x+Math.sin(u)*e,m=o.y-Math.cos(u)*e}else{let t=(f===void 0?c.x:n.toScreen(g).x)-o.x,r=(f===void 0?c.y:n.toScreen(g).y)-o.y,d=Math.hypot(t,r)||1;if(t/=d,r/=d,p=o.x+t*(l.beamPx*.5+1),m=o.y+r*(l.beamPx*.5+1),h=u,i<oa){let n=i/oa;e.strokeStyle=`rgba(${ia}, ${((1-n)*.85).toFixed(3)})`,e.lineWidth=1;for(let i=0;i<2;i+=1){let o=(G(s,i,8)-.5)*1.4,c=(3+4*G(s,i,9))*a(n);e.beginPath(),e.moveTo(p,m),e.lineTo(p+(t-r*o)*c,m+(r+t*o)*c),e.stroke()}}}}if(i<oa){let t=i/oa;e.fillStyle=`rgba(${ia}, ${(1-t)*.95})`,e.beginPath(),h===null?e.arc(p,m,(2+6*a(t))*u,0,2*Math.PI):e.ellipse(p,m,(1.2+2*a(t))*u,(3+5*a(t))*u,h,0,2*Math.PI),e.fill()}let g=l(t.setting.weatherSeed),_=a(1-o)*10,v=Math.sin(g)*_,y=-Math.cos(g)*_,b=1+Math.min(3,r.hits);for(let t=0;t<b;t+=1){let n=(G(s,t,5)-.5)*9,r=(G(s,t,6)-.5)*9,i=(1.5+4.5*a(1-o))*u;e.fillStyle=`rgba(${aa}, ${.4*o*u})`,e.beginPath(),e.arc(p+n+v,m+r+y,i,0,2*Math.PI),e.fill()}e.globalAlpha=Math.max(0,o),e.strokeStyle=ra,e.lineWidth=2,e.beginPath(),e.arc(c.x,c.y,7,0,2*Math.PI),e.stroke(),e.globalAlpha=1}}}var la=2.6,ua=48,da=.45,fa=new Set(Object.values(S).map(e=>e.torpedo));function pa(e){return fa.has(e)}function ma(e){let t=B[e.type].rangeMetres-e.runMetresLeft,n=e.headingDeg*Math.PI/180;return{x:e.pos.x-Math.sin(n)*t,y:e.pos.y-Math.cos(n)*t}}function ha(e,t,n){return(t-e.firedAtTick)*n}function ga(e,t,n){if(!pa(e.type))return null;let r=ha(e,t,n);if(r<0||r>=2.6)return null;let i=r/la,a=ma(e),o=e.headingDeg*Math.PI/180,s=Math.sin(o),c=Math.cos(o),l=ua*(1-i);return{fall:i,x:a.x-s*l,y:a.y-c*l,z:55*(1-i*i),pitchR:da*i,entryX:a.x,entryY:a.y}}function _a(e,t,n){return ga(e,t,n)!==null}function va(e,t,n,r){if(!pa(e.type))return null;let i=ha(e,t,n)-la;if(i<0||i>r)return null;let a=ma(e);return[a.x,a.y,7,i]}function ya(e){return B[e].speedKnots*.5144444444444445>19?5.1:7.2}var ba=[[7,1,1],[13,1,-1],[19,.6,0]],xa=1.05,Sa=1.75,Ca=1.3,wa=7,Ta=4;function Ea(e,t){return e*8191^Math.round(t*128)}function Da(e,t){return Math.max(1,Math.ceil(t*e/6))}function Oa(e,t,n,r,i,a,o,s=1){let c=[],l=Math.max(0,Math.ceil((a-Ke.wakeMetres)/6));for(let u=Math.ceil(l/s)*s;u*6<=i;u+=s){let i=u*6,s=1-(a-i)/Ke.wakeMetres,l=Math.sqrt(Math.max(0,Math.min(1,s))),d=Ca+(wa-Ca)*(1-s);for(let[a,f,p]of ba){let m=p===0?(_(o+u,a)-.5)*1.6*d:p*d*(.72+.56*_(o+u,a)),h=i-_(o+u,a+3)*Ta;c.push({x:e+n*h-r*m,y:t+r*h+n*m,life:s,fade:l,radiusMetres:(xa+Sa*s)*f*(.62+.76*_(o+u,a+1)),seed:_(o+u,a+2)})}}return c}var ka=`rgb(215, 238, 255)`,Aa=`rgba(240, 250, 255, 0.95)`,ja=`rgba(255, 150, 90, 0.9)`,Ma=`255, 240, 214`,Na=`236, 245, 255`,Pa=`245, 250, 255`,Fa=`230, 240, 252`,Ia=.6,La=.08,Ra=.35,za=5,Ba=6;function Va(e,t,n,r,i){let o=I(`${t.targetId}:${t.zone}:${t.tick}`),s=j(r/Ra);s<1&&(e.strokeStyle=`rgba(${Na}, ${(.5*(1-s)).toFixed(3)})`,e.lineWidth=1.5,e.beginPath(),e.arc(n.x,n.y,4+a(s)*26,0,2*Math.PI),e.stroke());let c=j(r/Ia);if(c<1)for(let t=0;t<4;t+=1){let r=(G(o,t,0)-.5)*11,i=(G(o,t,1)-.5)*7,a=T(c)*(14+14*G(o,t,2))*(t===0?1.4:1);if(!(a<.5)){e.fillStyle=`rgba(${Na}, 0.9)`,In(e,n.x+r,n.y+i,a,t===0?6.5:4.5,o,t),e.fillStyle=`rgba(${Pa}, 0.9)`;for(let s=0;s<3;s+=1){let c=(G(o,t,3+s)-.5)*8;e.beginPath(),e.arc(n.x+r+c,n.y+i-a-2,1.1,0,2*Math.PI),e.fill()}}}let l=j(r/La);l<1&&(e.fillStyle=`rgba(${Ma}, ${(.95*(1-l)).toFixed(3)})`,e.beginPath(),e.arc(n.x,n.y,3+7*a(l),0,2*Math.PI),e.fill()),e.fillStyle=`rgba(${Fa}, ${(.4*i).toFixed(3)})`,e.beginPath(),e.arc(n.x,n.y,3.5+a(1-i)*12,0,2*Math.PI),e.fill()}function Ha(e,t,n,r,i,a,o){let s=Da(r,za),c=Array.from({length:Ba},()=>[]),l=(e,t,i,a,o,l)=>{for(let u of Oa(e.x,e.y,t,i,a,o,l,s)){let e=n({x:u.x,y:u.y}),t=Math.min(Ba-1,Math.floor(u.fade*Ba));c[t]?.push(e.x,e.y,Math.max(.5,u.radiusMetres/r))}},u=[],d=t.tick-1+i;for(let e of t.torpedoes){if(e.side===`enemy`&&!e.sighted||_a(e,d,a))continue;let r=B[e.type].speedKnots*ve,s=e.headingDeg*Math.PI/180,c=k(e,(i-1)*r*a,t.ships,e=>o(e)),f=Math.sin(s),p=Math.cos(s);u.push(n({x:e.pos.x+f*c,y:e.pos.y+p*c}));let m=B[e.type].rangeMetres-e.runMetresLeft+c;l({x:e.pos.x-f*(m-c),y:e.pos.y-p*(m-c)},f,p,m,m,Ea(e.firedAtTick,e.headingDeg))}for(let e of t.spentTorpedoes??[]){if(e.side===`enemy`&&!e.sighted)continue;let n=B[e.type].speedKnots*ve,r=e.headingDeg*Math.PI/180,o=Math.sin(r),s=Math.cos(r),c=e.runMetres+(t.tick+i-e.endedAtTick)*a*n;l({x:e.pos.x-o*e.runMetres,y:e.pos.y-s*e.runMetres},o,s,e.runMetres,c,Ea(e.firedAtTick,e.headingDeg))}if(e.fillStyle=ka,c.forEach((t,n)=>{if(t.length!==0){e.globalAlpha=.85*(n+.5)/Ba,e.beginPath();for(let n=0;n<t.length;n+=3){let r=t[n]??0,i=t[n+1]??0,a=t[n+2]??0;e.moveTo(r+a,i),e.arc(r,i,a,0,2*Math.PI)}e.fill()}}),e.globalAlpha=1,e.fillStyle=Aa,u.length>0){let t=Math.max(1.5,6/r);e.beginPath();for(let n of u)e.moveTo(n.x+t,n.y),e.arc(n.x,n.y,t,0,2*Math.PI);e.fill()}for(let r of t.torpedoHits){let o=t.tick-1+i-(r.tick-1)-(r.atSeconds??a)/a;if(o<0)continue;let s=Math.max(0,1-o/Ke.hitRetentionTicks);if(s<=0)continue;let c=n(r.pos);Va(e,r,c,o,s),e.globalAlpha=s,e.strokeStyle=ja,e.lineWidth=3,e.beginPath(),e.arc(c.x,c.y,10,0,2*Math.PI),e.stroke(),e.globalAlpha=1}}function Ua(e){let t=e.getContext(`2d`);if(!t)throw Error(`Canvas 2D context unavailable`);let n=t,r=0,i=0,a={x:0,y:0},o=20,s=!1,c=null,l=null,u=Qi(),f=tn(),p=St();function m(e){let t=e.ships.map(e=>f.posOf(e).x),n=e.ships.map(e=>f.posOf(e).y),s=Math.min(...t)-q,c=Math.max(...t)+q,l=Math.min(...n)-q,u=Math.max(...n)+q;a={x:(s+c)/2,y:(l+u)/2},o=Math.max((c-s)/Math.max(r,1),(u-l)/Math.max(i,1),dt/Math.max(Math.min(r,i),1))}function h(e){return{x:r/2+(e.x-a.x)/o,y:i/2-(e.y-a.y)/o}}function g(){return!0}return{resize(t,a){r=t,i=a;let o=window.devicePixelRatio||1;e.width=Math.round(t*o),e.height=Math.round(a*o),e.style.width=`${t}px`,e.style.height=`${a}px`,n.setTransform(o,0,0,o,0,0)},render(e,t=0){let a=e.battle;if(a===null)return;c=a,f.step(a,t);let l=f.frameFraction();s||m(a);let _={toScreen:h,inFront:g,posOf:f.posOf,headingOf:f.headingOf,rudderOf:f.rudderOf,metresPerPx:o,frameFraction:l,animationMs:performance.now()};u.draw(n,a,_,r,i),Mt(n,a,_);let v=a.ships.find(e=>e.side===`raider`);v!==void 0&&se(n,v,_),sa(n,a,_),d(n,a,_),Ha(n,a,h,o,l,10,f.posOf),ca(n,a,_),vi(n,a,_);for(let e of a.ships)Jr(n,e,a,_);Bt(n,a,_),Qt(n,a,_),wn(n,a,_),Yn(n,a,_),pi(n,a,_),yi(n,a,_),p.draw(n,a,_),dn(n,a,r,f.posOf)},renderAftermath(e,t){c=e,f.step(e,Math.min(t,8)),s||m(e);let a={toScreen:h,inFront:g,posOf:f.posOf,headingOf:f.headingOf,rudderOf:f.rudderOf,metresPerPx:o,frameFraction:t/10,animationMs:performance.now()};u.draw(n,e,a,r,i),Mt(n,e,a),sa(n,e,a),d(n,e,a),ca(n,e,a);for(let r of e.ships)r.sunk&&Oe(t)||Jr(n,r,e,a);Bt(n,e,a),Qt(n,e,a);for(let r of e.ships)r.sunk&&ke(n,r,a,t)},screenToPlane(e,t){return{x:a.x+(e-r/2)*o,y:a.y-(t-i/2)*o}},shipAt(e,t){if(c===null)return null;let n=null;for(let r of c.ships){let i=h(f.posOf(r)),a=Math.hypot(i.x-e,i.y-t);a<28&&(n===null||a<n.d)&&(n={id:r.id,d:a})}return n?.id??null},panByPixels(e,t){s=!0,a={x:a.x-e*o,y:a.y+t*o}},zoomBy(e,t,n){s=!0;let c={x:a.x+(t-r/2)*o,y:a.y-(n-i/2)*o};o=Math.max(ut,Math.min(400,o/e)),a={x:c.x-(t-r/2)*o,y:c.y+(n-i/2)*o}},recenter(){s=!1},isManual(){return s},setReport(e){l=e},reportShipId(){return l}}}var Wa=550;function Ga(e,t,n,r,i,a){if(!t.inFront(n))return;let o=t.toScreen(n),s=24*t.metresPerPx,c=e=>{let r=it(n,e,s);if(!t.inFront(r))return null;let i=t.toScreen(r),a=Math.hypot(i.x-o.x,i.y-o.y);return a<1e-6?null:{x:(i.x-o.x)/a,y:(i.y-o.y)/a}},l=(e,t)=>{let n=c(e);return n===null?null:{x:o.x+n.x*t,y:o.y+n.y*t}};e.save(),e.globalAlpha*=.45,e.strokeStyle=tt,e.lineWidth=1,e.beginPath(),e.arc(o.x,o.y,38,0,Math.PI*2),e.stroke(),e.restore(),e.lineCap=`round`,e.lineJoin=`round`;let d=He(r,a),f=d>=0?ye:ot;if(Math.abs(d)>1){u(e,M(r,a,3).map(e=>l(e,38)),f,3.5);let t=l(a,38),n=l(a-Math.sign(d)*2,38);if(t!==null&&n!==null){let r=Math.hypot(t.x-n.x,t.y-n.y)||1,i=(t.x-n.x)/r,a=(t.y-n.y)/r,o=e=>({x:t.x-i*8-a*6*e,y:t.y-a*8+i*6*e});u(e,[o(1),t,o(-1)],f,2.5)}}let p=Math.abs(He(a,i))>.5;p&&(e.setLineDash([4,4]),u(e,M(a,i,3).map(e=>l(e,38)),he,2.5),e.setLineDash([])),u(e,[l(r,38*.7),l(r,38*1.25)],tt,2.5);let m=c(i);if(m!==null){let t={x:o.x+m.x*38*.98,y:o.y+m.y*38*.98},n={x:o.x+m.x*38*1.42,y:o.y+m.y*38*1.42};e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(n.x-m.y*7,n.y+m.x*7),e.lineTo(n.x+m.y*7,n.y-m.x*7),e.closePath(),p||(e.fillStyle=V,e.fill()),e.strokeStyle=p?he:z,e.lineWidth=p?2:1,e.stroke()}}function Ka(e,t,n){if(!t.inFront(n))return;let r=t.toScreen(n);e.beginPath(),e.arc(r.x,r.y,56,0,Math.PI*2),e.strokeStyle=z,e.lineWidth=5,e.stroke(),e.strokeStyle=V,e.lineWidth=2.5,e.stroke()}function qa(e,t,n,r,i){if(!t.inFront(n))return;let a=t.toScreen(n);if(e.globalAlpha=r,e.beginPath(),e.arc(a.x,a.y,7,0,Math.PI*2),e.moveTo(a.x-10,a.y),e.lineTo(a.x+10,a.y),e.moveTo(a.x,a.y-10),e.lineTo(a.x,a.y+10),e.strokeStyle=z,e.lineWidth=3.5,e.stroke(),e.strokeStyle=tt,e.lineWidth=1.5,e.stroke(),i<Wa&&!h()){let t=i/Wa;e.globalAlpha=r*(1-t)*.6,e.beginPath(),e.arc(a.x,a.y,8+18*t,0,Math.PI*2),e.stroke()}}function Ja(e,t,n,r,i,a){if(!t.inFront(n))return;let o=t.toScreen(n);e.globalAlpha=i,e.font=fe(12,`600`),e.textAlign=`center`,e.lineWidth=3,e.strokeStyle=z;let s=e.canvas.width/(e.getTransform().a||1),c=Ne(o.x,e.measureText(r).width,s);e.strokeText(r,c,o.y+a),e.fillStyle=tt,e.fillText(r,c,o.y+a)}var Ya=1500,Xa=120,Za=15,Qa={horizonSeconds:480,stepSeconds:2,runOnSeconds:90};function $a(e,t,n){let r=O[t.cls].lengthMetres,i=n.headingOf(t),a=it(n.posOf(t),i+180,r/2),s=Math.min(r*.35,Math.max(r*.12,14*n.metresPerPx)),c=it(a,o(i,n.rudderOf(t)),s),l=t.subsystems.steering===`out`;e.lineCap=`round`,N(e,n,[a,c],l?he:De,2.5)}function eo(e,t,n,r,i){let a=r.pos;if(e.globalAlpha=1,i.course===null){Ka(e,n,a),Ja(e,n,a,L.helmDragHint,1,-68);return}let{at:o,headingDeg:s}=i.course,c={...t,orders:{...t.orders,headingDeg:s}};e.setLineDash([1.5,6]),e.lineCap=`round`,N(e,n,w(c,r,Qa).points,V,2.2),e.setLineDash([]),N(e,n,[a,o],V,1.5),Ga(e,n,a,r.headingDeg,s,ae(c).headingDeg);let l=n.inFront(o)&&n.inFront(a)&&n.toScreen(o).y<n.toScreen(a).y;Ja(e,n,a,rt(s),1,l?64:-54)}function to(){let e=null,t=null,n=!1,r=null;return{markOrder(t,n,r){e={at:t,headingDeg:n,wallMs:r}},setDrag(e){t=e},draw(i,a,o,s){let l=a.ships.find(e=>e.side===`raider`);if(l===void 0||l.sunk){e=null,t=null;return}i.save(),$a(i,l,o);let u=o.posOf(l),d=o.headingOf(l),p={pos:u,headingDeg:d,speedKnots:l.motion.speedKnots,rudder:o.rudderOf(l)},m=l.orders.headingDeg,h=ae(l).headingDeg,g=!v(p,h);g?r=null:n&&(r=s),n=g,e!==null&&Math.abs(He(e.headingDeg,m))>.5&&(e=null);let _=c(g,r,s);if(t!==null){eo(i,l,o,p,t),i.restore();return}if(_>0){i.globalAlpha=_;let e=w(l,p,Qa);i.setLineDash([1.5,6]),i.lineCap=`round`,N(i,o,e.points,V,2.2);let t=it(u,m,Xa*o.metresPerPx);i.setLineDash([7,6]),N(i,o,[u,t],tt,1.5),i.setLineDash([]),Ja(i,o,t,rt(m),_,-10),i.globalAlpha=_,Ga(i,o,u,d,m,h);let n=ne(g,f(l,p),h);n.forEach((e,t)=>{let r=(n.length-1-t)*Za;Ja(i,o,u,e,_,-54-r)})}if(e!==null){let t=s-e.wallMs,n=_>0?_:1-j(t/Ya);n<=0?e=null:qa(i,o,e.at,n,t)}i.restore()}}}function no(e,t,n,r){if(r===null)return;let i=t.ships.find(e=>e.side===`raider`),a=t.ships.find(e=>e.id===r.victimId);if(i===void 0||a===void 0)return;e.save(),e.lineCap=`round`;let o=we(i,a,r.spread,t.tick).torpedoes;if(o.length>0){e.setLineDash([8,6]);for(let t of o)N(e,n,[t.pos,it(t.pos,t.headingDeg,t.runMetresLeft)],V,1.6)}else{let t=Ye[i.cls];if(t!==void 0){let r=B[i.torpedoType??t.type].rangeMetres;qe(i.motion.pos,a.motion.pos)>r&&(e.setLineDash([5,6]),N(e,n,Array.from({length:73},(e,t)=>it(i.motion.pos,t*5,r)),he,1.5))}}e.restore()}function Y(e,t,n){let r=(t,n)=>{let r=e.createShader(t);if(r===null)throw Error(`shader allocation failed`);if(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)!==!0)throw Error(`shader: ${e.getShaderInfoLog(r)??`unknown`}`);return r},i=e.createProgram();if(i===null)throw Error(`program allocation failed`);let a=r(e.VERTEX_SHADER,t),o=r(e.FRAGMENT_SHADER,n);if(e.attachShader(i,a),e.attachShader(i,o),e.linkProgram(i),e.getProgramParameter(i,e.LINK_STATUS)!==!0)throw Error(`link: ${e.getProgramInfoLog(i)??`unknown`}`);e.detachShader(i,a),e.detachShader(i,o),e.deleteShader(a),e.deleteShader(o);let s=new Map;return{program:i,uniform(t){let n=s.get(t);if(n!==void 0)return n;let r=e.getUniformLocation(i,t);return s.set(t,r),r}}}function ro(e,t){let n=new Float32Array((t+1)*(t+1)*2),r=0;for(let e=0;e<=t;e+=1)for(let i=0;i<=t;i+=1)n[r]=-.5+i/t,n[r+1]=-.5+e/t,r+=2;let i=new Uint32Array(t*t*6),a=0;for(let e=0;e<t;e+=1)for(let n=0;n<t;n+=1){let r=e*(t+1)+n,o=r+1,s=r+(t+1),c=s+1;i[a]=r,i[a+1]=o,i[a+2]=c,i[a+3]=r,i[a+4]=c,i[a+5]=s,a+=6}let o=e.createVertexArray();if(o===null)throw Error(`vao allocation failed`);e.bindVertexArray(o);let s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let c=e.createBuffer();return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,c),e.bufferData(e.ELEMENT_ARRAY_BUFFER,i,e.STATIC_DRAW),e.bindVertexArray(null),{vao:o,indexCount:i.length,cells:t}}function io(e,t){let n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,40,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,40,12),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,3,e.FLOAT,!1,40,24),e.enableVertexAttribArray(3),e.vertexAttribPointer(3,1,e.FLOAT,!1,40,36),e.bindVertexArray(null),{vao:n,buffer:r,vertexCount:t.length/10}}function ao(e){let t=e.createVertexArray();if(t===null)throw Error(`vao allocation failed`);e.bindVertexArray(t);let n=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null),t}var oo=[.11,.19,.44],so=[.92,.92,.9],co=[.78,.11,.16];function X(e,t){return{rgb:e,corners:t.map(([e,t])=>[e*.5,t*.5])}}function Z(e,t,n,r){return[[e,t],[n,t],[n,r],[e,r]]}var lo=[X(oo,Z(0,0,1,1)),X(so,[[0,0],[0,.3],[1,1],[1,.7]]),X(so,[[0,1],[0,.7],[1,0],[1,.3]]),X(co,[[0,.085],[0,.215],[1,.915],[1,.785]]),X(co,[[0,.915],[0,.785],[1,.085],[1,.215]]),X(so,Z(0,.333,1,.667)),X(so,Z(.417,0,.583,1)),X(co,Z(0,.4,1,.6)),X(co,Z(.45,0,.55,1))],uo={royalNavy:{name:`Royal Navy`,roundel:[{radius:1,rgb:[.13,.29,.66]},{radius:.6,rgb:[.9,.91,.9]},{radius:.2,rgb:[.79,.13,.21]}],finFlash:[{width:1,rgb:[.13,.29,.66]},{width:1,rgb:[.9,.91,.9]},{width:1,rgb:[.79,.13,.21]}],ensign:{name:`White Ensign`,ratio:2,patches:[{corners:Z(0,0,1,1),rgb:[.9,.9,.88]},{corners:Z(0,.4,1,.6),rgb:co},{corners:Z(.45,0,.55,1),rgb:co},...lo]}},britishMerchant:{name:`British merchant service`,ensign:{name:`Red Ensign`,ratio:2,patches:[{corners:Z(0,0,1,1),rgb:[.72,.13,.16]},...lo]}}};function fo(e){return uo[e]}var po=.05;function mo(e,t,n,r,i,a,o=8){let s=i+po,c=(e,t)=>{let i=t/o*2*Math.PI;return[n+Math.cos(i)*e,r+Math.sin(i)*e,s]};for(let i=0;i<t.length;i+=1){let l=t[i],u=a*l.radius,d=i+1<t.length?a*t[i+1].radius:0;for(let t=0;t<o;t+=1){let i=t+1;d<=0?e.tri([n,r,s],c(u,t),c(u,i),l.rgb):e.quad(c(d,t),c(u,t),c(u,i),c(d,i),l.rgb)}}}function ho(e,t,n,r,i,a,o){let s=t.reduce((e,t)=>e+t.width,0);if(!(s<=0))for(let c of[-1,1]){let l=c*n,u=r;for(let n of t){let t=u+(i-r)*n.width/s,d=c*(i-r)>0?[[l,u,a],[l,t,a],[l,t,o],[l,u,o]]:[[l,t,a],[l,u,a],[l,u,o],[l,t,o]];e.quad(d[0],d[1],d[2],d[3],n.rgb),u=t}}}var go=.18,_o=.004;function vo(e,t,n,r){let i=r*t.ratio,[a,o,s]=n,c=(e,t,n)=>[a+n,o-e*i,s-t*r-e*i*go];for(let n=0;n<t.patches.length;n+=1){let r=t.patches[n],[i,a,o,s]=r.corners;for(let t of[1,-1]){let l=t*(.01+n*_o),u=(t>0?[i,a,o,s]:[s,o,a,i]).map(([e,t])=>c(e,t,l));e.quad(u[0],u[1],u[2],u[3],r.rgb)}}}function yo(e,t,n){return typeof e==`function`?e(t,n):e}var Q=class{out=[];tri(e,t,n,r){let i=t[0]-e[0],a=t[1]-e[1],o=t[2]-e[2],s=n[0]-e[0],c=n[1]-e[1],l=n[2]-e[2],u=a*l-o*c,d=o*s-i*l,f=i*c-a*s,p=Math.hypot(u,d,f)||1;u/=p,d/=p,f/=p;for(let i of[e,t,n])this.out.push(i[0],i[1],i[2],u,d,f,r[0],r[1],r[2],i[2])}quad(e,t,n,r,i){this.tri(e,t,n,i),this.tri(e,n,r,i)}box(e,t,n,r,i,a,o,s=0){let c=Math.sin(s*Math.PI/180),l=Math.cos(s*Math.PI/180),u=(n,r)=>[e+n*l-r*c,t+n*c+r*l],d=r/2,f=i/2,p=[u(-d,-f),u(d,-f),u(d,f),u(-d,f)],m=p.map(([e,t])=>[e,t,n]),h=p.map(([e,t])=>[e,t,n+a]);this.quad(h[0],h[1],h[2],h[3],o);for(let e=0;e<4;e+=1){let t=(e+1)%4;this.quad(m[e],m[t],h[t],h[e],o)}}prism(e,t,n,r,i,a,o,s=12){for(let c=0;c<s;c+=1){let l=c/s*2*Math.PI,u=(c+1)/s*2*Math.PI,d=[e+r*Math.cos(l),t+i*Math.sin(l),n],f=[e+r*Math.cos(u),t+i*Math.sin(u),n],p=[d[0],d[1],n+a],m=[f[0],f[1],n+a];this.quad(d,f,m,p,o),this.tri([e,t,n+a],p,m,o)}}skin(e,t,n=!0,r=!0){for(let n=0;n+1<e.length;n+=1){let r=e[n],i=e[n+1];for(let e=0;e<r.length;e+=1){let n=(e+1)%r.length,a=yo(t,e,r.length);this.quad(r[e],r[n],i[n],i[e],a)}}let i=yo(t,0,1),a=(e,t)=>{let n=0,r=0,a=0;for(let t of e)n+=t[0]/e.length,r+=t[1]/e.length,a+=t[2]/e.length;for(let o=0;o<e.length;o+=1){let s=(o+1)%e.length,c=e[o],l=e[s];this.tri([n,r,a],t?l:c,t?c:l,i)}};n&&e.length>0&&a(e[0],!0),r&&e.length>1&&a(e[e.length-1],!1)}rod(e,t,n,r,i=6,a=!1){let o=t[0]-e[0],s=t[1]-e[1],c=t[2]-e[2],l=Math.hypot(o,s,c);if(l<1e-6)return;let u=[o/l,s/l,c/l],d=Math.abs(u[2])<.9?[0,0,1]:[1,0,0],f=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],p=(e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]})(f(u,d)),m=f(u,p),h=e=>{let t=[];for(let r=0;r<i;r+=1){let a=r/i*2*Math.PI,o=Math.cos(a)*n,s=Math.sin(a)*n;t.push([e[0]+p[0]*o+m[0]*s,e[1]+p[1]*o+m[1]*s,e[2]+p[2]*o+m[2]*s])}return t};this.skin([h(e),h(t)],r,a,a)}tube(e,t,n,r,i,a,o=10){let s=i/2;for(let i=0;i<o;i+=1){let c=i/o*2*Math.PI,l=(i+1)/o*2*Math.PI,u=[e+r*Math.cos(c),t-s,n+r*Math.sin(c)],d=[e+r*Math.cos(l),t-s,n+r*Math.sin(l)],f=[u[0],t+s,u[2]],p=[d[0],t+s,d[2]];this.quad(d,u,f,p,a),this.tri([e,t+s,n],p,f,a),this.tri([e,t-s,n],u,d,a)}}},bo=[`raider`,`heavyCruiser`,`lightCruiser`,`demsMerchant`,`qship`,`auxRaider`,`destroyer`,`battlecruiser`],xo=1.25,So=827150923;function Co(e,t){if(e.byteLength<12)return null;let n=new DataView(e);if(n.getUint32(0,!0)!==So)return null;let r=n.getUint32(4,!0),i=n.getUint32(8,!0),a=12+r;if(r%4!=0||a+i*4>e.byteLength)return null;let o;try{o=JSON.parse(new TextDecoder().decode(new Uint8Array(e,12,r)))}catch{return null}if(o.stride!==10||!Array.isArray(o.parts))return null;let s=new Float32Array(e.slice(a,a+i*4)),c=o.parts.find(e=>e.name===`hull`);if(c===void 0||!wo(c,i))return null;let l=[];for(let e of o.parts)if(e.mountId!==void 0){if(!wo(e,i)||e.seat===void 0||e.seat.length!==3)return null;l.push({mountId:e.mountId,seat:[e.seat[0],e.seat[1],e.seat[2]],restDeg:e.restDeg??0,verts:s.subarray(e.offset,e.offset+e.count)})}let u={verts:s.subarray(c.offset,c.offset+c.count),hullFloats:c.boundFloats,mounts:l,bootZ:typeof o.bootZ==`number`&&Number.isFinite(o.bootZ)&&o.bootZ>0&&o.bootZ<=3?o.bootZ:xo};return To(u,t)?u:null}function wo(e,t){return Number.isInteger(e.offset)&&Number.isInteger(e.count)&&e.offset>=0&&e.count>0&&e.count%30==0&&e.offset+e.count<=t&&Number.isInteger(e.boundFloats)&&e.boundFloats>=0&&e.boundFloats<=e.count}function To(e,t){let n=O[t].lengthMetres/2,r=O[t].beamMetres/2;for(let t=0;t<e.hullFloats;t+=10)if(Math.abs(e.verts[t])>r+.01||Math.abs(e.verts[t+1])>n+.01)return!1;for(let t of e.mounts)if(Math.abs(t.seat[0])>r+.01||Math.abs(t.seat[1])>n+.01||t.seat[2]<=0)return!1;return!0}var Eo=new Map,Do=0,Oo=!1;function ko(){return Do}function Ao(e){return Eo.get(e)}async function jo(){Oo||(Oo=!0,await Promise.all(bo.map(async e=>{try{let t=await fetch(`models/${e}.krm`);if(!t.ok)return;let n=Co(await t.arrayBuffer(),e);n!==null&&(Eo.set(e,n),Do+=1)}catch{}})))}var Mo=[.295,.305,.315],No=[.4,.372,.328],Po=[.355,.365,.375],Fo=[.465,.475,.487],Io=[.125,.125,.135],Lo=[.375,.385,.398],Ro=[.19,.195,.205],zo=[.3,.302,.31];function Bo(e){switch(E[e].deck){case`flightDeck`:return zo;case`steel`:return Po;default:return No}}function Vo(e,t){let n=E[e],r=O[e].beamMetres/2;if(t<-.5+n.bowFraction){let e=(t+.5)/n.bowFraction;return Math.max(.25,r*Math.sin(e*Math.PI/2)**.82)}if(t>.5-n.sternFraction){let e=(.5-t)/n.sternFraction;return r*(n.sternWidthFraction+(1-n.sternWidthFraction)*Math.sin(e*Math.PI/2)**.8)}return r}function Ho(e,t,n){return e===`carrier`?t*.037:2.6+t*.013+(1.2+t*.008)*(Math.max(0,-n+.05)/.55)**1.5+.3*Math.max(0,n-.2)}function Uo(e,t){let n=O[t].lengthMetres,r=Bo(t),i=-2.6,a=[];for(let e=0;e<=48;e+=1){let r=-.5+e/48;a.push({y:-r*n,w:Vo(t,r),fb:Ho(t,n,r)})}for(let t=0;t<48;t+=1){let n=a[t],o=a[t+1];e.quad([o.w,o.y,i],[n.w,n.y,i],[n.w,n.y,n.fb],[o.w,o.y,o.fb],Mo),e.quad([-n.w,n.y,i],[-o.w,o.y,i],[-o.w,o.y,o.fb],[-n.w,n.y,n.fb],Mo),e.quad([-n.w,n.y,n.fb],[-o.w,o.y,o.fb],[o.w,o.y,o.fb],[n.w,n.y,n.fb],r)}let o=a[0],s=a[48];e.quad([o.w,o.y,i],[-o.w,o.y,i],[-o.w,o.y,o.fb],[o.w,o.y,o.fb],Mo),e.quad([-s.w,s.y,i],[s.w,s.y,i],[s.w,s.y,s.fb],[-s.w,s.y,s.fb],Mo)}function Wo(e){return e===`raider`?3:e===`lightCruiser`||e===`heavyCruiser`||e===`battlecruiser`||e===`carrier`?2:1}function Go(e,t){return t===void 0?e===`raider`||e===`lightCruiser`||e===`heavyCruiser`||e===`battlecruiser`||e===`destroyer`:!1}function Ko(e,t,n){let r=E[t],i=O[t],a=i.lengthMetres,o=i.beamMetres,s=e=>-e*a,c=e=>Ho(t,a,e);{let i=s(r.bridge.along),l=c(r.bridge.along),u=r.bridge.lengthFraction*a,d=t===`carrier`?o*.22:o*.52,f=t===`carrier`?o*.5-d/2-.4:0;e.box(f,i,l,d,u,4.5+a*.011,Fo),e.box(f,i+.6,l+4.5+a*.011,d*.64,u*.6,4.2,Fo),t===`raider`&&(e.box(0,i+.4,l+12.3,3.8,4.6,4.2,Fo),n.box(0,i+2.4,l+16.5,.7,.7,4.6,Ro))}for(let t of r.blocks??[])e.box(0,s(t.along),c(t.along),t.widthFraction*o,t.lengthFraction*a,3.6+a*.008,Fo);for(let t of r.funnels){let n=s(t),r=c(t),i=8+a*.02;e.prism(0,n,r,1.6+o*.05,3.4+o*.07,i,Fo),e.prism(0,n,r+i,1.7+o*.05,3.5+o*.07,1.2,Io)}for(let t of r.masts??[]){let r=s(t),i=c(t)+4;e.box(0,r,i,.5,.5,9+a*.02,Ro),n.box(0,r,i+7+a*.015,6+o*.1,.35,.35,Ro)}for(let t of r.kingposts??[]){let n=s(t),r=c(t);e.box(-o*.28,n,r,.7,.7,9,Ro),e.box(o*.28,n,r,.7,.7,9,Ro),e.box(0,n,r+8.2,o*.62,.4,.4,Ro)}if(r.catapult!==void 0){let t=s(r.catapult),n=c(r.catapult);e.box(0,t,n,o*.62,2.1,.8,Ro),e.box(0,t,n+1.5,1.1,7.6,1.1,[.7,.715,.735]),e.box(0,t+.5,n+2.5,8.8,1.6,.26,[.7,.715,.735])}for(let t of r.tubeMounts??[]){let n=(t.athwart??0)*(o/2);e.box(n,s(t.along),c(t.along),2.1,6,1.4,Ro)}}function qo(e,t,n,r){let i=O[n].lengthMetres>200;if(!r){e.box(0,0,0,3,2.5,2,Lo),t.box(0,3.2,1.15,.3,5.2,.3,Lo);return}let a=i||n===`raider`?1:n===`destroyer`?.5:.66;e.prism(0,0,0,4.8*a,4.8*a,1.2,Lo,12),e.box(0,0,1.2,8.2*a,10.2*a,2.9*a,Lo);let o=Wo(n),s=1.9*a,c=(i||n===`raider`?11.4:8.2)*a;for(let e=0;e<o;e+=1){let n=(e-(o-1)/2)*s;t.box(n,c*.75,1.2+1.3*a,.4,c,.4,Lo)}}var Jo=new Map;function Yo(e){let t=Ao(e);if(t!==void 0)return t.mounts;let n=Jo.get(e);if(n!==void 0)return n;let r=O[e],i=r.lengthMetres,a=r.beamMetres,o=E[e].turrets.map(t=>{let n=new Q,r=new Q;qo(n,r,e,Go(e,t.athwart));let o=new Float32Array(n.out.length+r.out.length);return o.set(n.out,0),o.set(r.out,n.out.length),{mountId:t.mountId,seat:[(t.athwart??0)*(a/2),-t.along*i,Ho(e,i,t.along)],restDeg:t.restDeg,verts:o}});return Jo.set(e,o),o}function Xo(e){return Ao(e)?.bootZ??1.25}function Zo(e,t=!0){let n=E[e].ensign,r=n===void 0?void 0:fo(n.set)?.ensign;if(!t||n===void 0||r===void 0)return new Float32Array;let i=new Q,a=O[e].lengthMetres;return vo(i,r,[0,-n.along*a,n.headMetres],n.hoistMetres),new Float32Array(i.out)}var Qo=new Map,$o=new Map;function es(e,t=!0){let n=Ao(e);if(n!==void 0){let r=Zo(e,t);if(r.length===0)return{verts:n.verts,hullFloats:n.hullFloats};let i=ko(),a=`${e}:${+!!t}`,o=$o.get(a);if(o!==void 0&&o.gen===i)return o.mesh;let s=new Float32Array(n.verts.length+r.length);s.set(n.verts,0),s.set(r,n.verts.length);let c={verts:s,hullFloats:n.hullFloats};return $o.set(a,{gen:i,mesh:c}),c}let r=Qo.get(e);if(r!==void 0)return r;let i=new Q,a=new Q;Uo(i,e),Ko(i,e,a);let o=i.out.length,s=new Float32Array(o+a.out.length);s.set(i.out,0),s.set(a.out,o);let c={verts:s,hullFloats:o};return Qo.set(e,c),c}var ts=1,ns=.35,rs=.9,is=1.5,as=6,os=50,ss=[.07,.065,.062],cs=[.022,.02,.02];function ls(e){let t=[];for(let n=0;n+30<=e.length;n+=30){let r=0,i=0,a=0;for(let t=0;t<3;t+=1)r+=e[n+t*10],i+=e[n+t*10+1],a+=e[n+t*10+2];t.push({at:n,cx:r/3,cy:i/3,cz:a/3})}return t}function us(e,t){let n=e.filter(e=>e.cy>t-ts).sort((e,t)=>e.cx-t.cx),r=[],i=0,a=0,o=!1;for(let e of n){if(o&&e.cx-a<=rs){a=e.cx;continue}o&&r.push({centreX:(i+a)/2,halfWidth:(a-i)/2}),i=e.cx,a=e.cx,o=!0}return o&&r.push({centreX:(i+a)/2,halfWidth:(a-i)/2}),r}function ds(e,t){return Math.abs(t-e.centreX)<=e.halfWidth+ns}function fs(e){let t=ls(e),n=-1/0;for(let t=0;t<e.length;t+=10){let r=e[t+1];r>n&&(n=r)}let r=us(t,n),i=-1/0;for(let e of t)!r.some(t=>ds(t,e.cx))&&e.cy>i&&(i=e.cy);if(!Number.isFinite(i))return{houseAt:t.map(e=>e.at),barrels:[],roofZ:0};let a=[],o=r.map(()=>({at:[],minY:1/0,sumZ:0,n:0})),s=-1/0;for(let n of t){let t=r.findIndex(e=>ds(e,n.cx)),c=t<0?void 0:o[t];if(c===void 0||n.cy<=i){a.push(n.at),n.cz>s&&(s=n.cz);continue}c.at.push(n.at);for(let t=0;t<3;t+=1){let r=e[n.at+t*10+1];r<c.minY&&(c.minY=r)}c.sumZ+=n.cz,c.n+=1}return{houseAt:a,barrels:o.filter(e=>e.at.length>0&&n-e.minY>=is).map(e=>({at:e.at,pivotY:e.minY,pivotZ:e.sumZ/e.n,lengthMetres:n-e.minY})),roofZ:Number.isFinite(s)?s:0}}function ps(e){let t=Math.asin(Math.max(0,Math.min(1,e.pivotZ/e.lengthMetres)));return Math.max(as*Math.PI/180,Math.min(os*Math.PI/180,t))}function ms(e,t,n){for(let r=0;r<30;r+=1)n.push(e[t+r])}function hs(e,t,n){let r=ps(t),i=Math.cos(r),a=Math.sin(r);for(let r of t.at)for(let o=0;o<3;o+=1){let s=r+o*10,c=e[s+1]-t.pivotY,l=e[s+2]-t.pivotZ,u=t.pivotY+c*i+l*a,d=t.pivotZ-c*a+l*i,f=e[s+4],p=e[s+5];n.push(e[s],u,d,e[s+3],f*i+p*a,-f*a+p*i,e[s+6],e[s+7],e[s+8],d)}}function gs(e,t,n){let r=I(n),i=.55+.5*_(r,3),a=(_(r,1)-.5)*1.6,o=(_(r,2)-.5)*2.2,s=t.roofZ+.03,c=[];for(let e=0;e<9;e+=1){let t=e/9*Math.PI*2,n=i*(.62+.62*_(r,10+e));c.push([a+Math.cos(t)*n,o+Math.sin(t)*n])}for(let t=0;t<9;t+=1){let n=c[t],r=c[(t+1)%9];e.tri([a,o,s],[n[0],n[1],s],[r[0],r[1],s],ss),e.tri([a,o,s-i*.9],[r[0],r[1],s],[n[0],n[1],s],cs)}}var _s=new WeakMap;function vs(e,t){let n=_s.get(e);n===void 0&&(n=new Map,_s.set(e,n));let r=n.get(t);if(r!==void 0)return r;let i=fs(e);if(i.barrels.length===0)return n.set(t,e),e;let a=vr(t,i.barrels.length),o=[];for(let t of i.houseAt)ms(e,t,o);i.barrels.forEach((t,n)=>{if(n===a){hs(e,t,o);return}for(let n of t.at)ms(e,n,o)});let s=new Q;gs(s,i,t);let c=new Float32Array(o.length+s.out.length);return c.set(o,0),c.set(s.out,o.length),n.set(t,c),c}var ys=.5;function bs(e,t,n,r){let i=1/Math.tan(e/2),a=new Float32Array(16);return a[0]=i/t,a[5]=i,a[10]=(r+n)/(n-r),a[11]=-1,a[14]=2*r*n/(n-r),a}function xs(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2]]}function Ss(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function Cs(e){let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]}function ws(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Ts(e,t,n){let r=Cs(xs(e,t)),i=Cs(Ss(n,r)),a=Ss(r,i),o=new Float32Array(16);return o[0]=i[0],o[1]=a[0],o[2]=r[0],o[4]=i[1],o[5]=a[1],o[6]=r[1],o[8]=i[2],o[9]=a[2],o[10]=r[2],o[12]=-ws(i,e),o[13]=-ws(a,e),o[14]=-ws(r,e),o[15]=1,o}function Es(e,t){let n=new Float32Array(16);for(let r=0;r<4;r+=1)for(let i=0;i<4;i+=1){let a=0;for(let n=0;n<4;n+=1)a+=e[n*4+i]*t[r*4+n];n[r*4+i]=a}return n}function Ds(e,t,n,r=.06){let i=[e.groundFromScreen(0,0),e.groundFromScreen(t,0),e.groundFromScreen(0,n),e.groundFromScreen(t,n)],a=1/0,o=-1/0,s=1/0,c=-1/0;for(let e of i)a=Math.min(a,e.x),o=Math.max(o,e.x),s=Math.min(s,e.y),c=Math.max(c,e.y);return{centreX:(a+o)/2,centreY:(s+c)/2,spanMetres:Math.max(o-a,c-s)*(1+r)}}function Os(e,t,n,r){let i=n/r;return{x:Math.round(e/i)*i,y:Math.round(t/i)*i}}function ks(e){return Math.min(58,Math.max(ys,e))}function As(e){let t=ks(e.pitchDeg)*Math.PI/180,n=38*Math.PI/180,r=e.heightPx/2/Math.tan(n/2),i=r*e.zoomMetresPerPx,a=[e.targetX,e.targetY-Math.sin(t)*i,Math.cos(t)*i],o=[e.targetX,e.targetY,0],s=Ts(a,o,[0,0,1]),c=Es(bs(n,e.widthPx/Math.max(e.heightPx,1),Math.max(i*.05,1),i*6+12e3),s),l=Math.max(i*.05,1),u=(e,t,n)=>c[3]*e+c[7]*t+c[11]*n+c[15],d=Cs(xs(a,o)),f=Cs(Ss([0,0,1],d)),p=Ss(d,f);return{eye:a,target:[e.targetX,e.targetY],viewProjection:c,metresPerPxAtTarget:e.zoomMetresPerPx,project(t,n,r=0){let i=c[0]*t+c[4]*n+c[8]*r+c[12],a=c[1]*t+c[5]*n+c[9]*r+c[13],o=u(t,n,r),s=o===0?1e-6:o;return{x:e.widthPx/2+i/s*e.widthPx/2,y:e.heightPx/2-a/s*e.heightPx/2}},inFrontOfEye(e,t,n=0){return u(e,t,n)>l},groundFromScreen(t,n){let i=t-e.widthPx/2,o=e.heightPx/2-n,s=Cs([f[0]*i+p[0]*o-d[0]*r,f[1]*i+p[1]*o-d[1]*r,f[2]*i+p[2]*o-d[2]*r]),c=Math.min(s[2],-1e-4),l=-a[2]/c;return{x:a[0]+s[0]*l,y:a[1]+s[1]*l}}}}function js(e,t,n,r,i){let a=t*Math.PI/180,o=Math.cos(a),s=Math.sin(a),c=Math.cos(r),l=Math.sin(r),u=Math.cos(i),d=Math.sin(i),f=[o,-s,0,s,o,0,0,0,1],p=[1,0,0,0,c,l,0,-l,c],m=[u,0,-d,0,1,0,d,0,u],h=(e,t)=>{let n=Array(9).fill(0);for(let r=0;r<3;r+=1)for(let i=0;i<3;i+=1){let a=0;for(let n=0;n<3;n+=1)a+=e[n*3+i]*t[r*3+n];n[r*3+i]=a}return n},g=h(f,h(p,m)),_=new Float32Array(16);return _[0]=g[0],_[1]=g[1],_[2]=g[2],_[4]=g[3],_[5]=g[4],_[6]=g[5],_[8]=g[6],_[9]=g[7],_[10]=g[8],_[12]=e.x,_[13]=e.y,_[14]=n,_[15]=1,{matrix:_,normal:new Float32Array(g)}}function Ms(e,t,n){let r=Math.max(t[2]??1,.25),i=(t[0]??0)/r,a=(t[1]??0)/r,o=new Float32Array(16);for(let t=0;t<4;t+=1){let n=e[t*4+2];o[t*4]=e[t*4]-i*n,o[t*4+1]=e[t*4+1]-a*n,o[t*4+2]=0,o[t*4+3]=e[t*4+3]}return o[14]=n,o}function Ns(e){let t=e.eye[0]-e.target[0],n=e.eye[1]-e.target[1],r=e.eye[2],i=Math.hypot(t,n,r)||1,a=[t/i,n/i,r/i],o=Math.hypot(a[1],a[0])||1,s=[-a[1]/o,a[0]/o,0];return{right:s,up:[a[1]*s[2]-a[2]*s[1],a[2]*s[0]-a[0]*s[2],a[0]*s[1]-a[1]*s[0]]}}function Ps(e,t,n){let r=n*Math.PI/180,i=Math.cos(r),a=Math.sin(r),o=[i,a,0,-a,i,0,0,0,1],s=new Float32Array(16),c=(e,t,n)=>e[n*4+t];for(let t=0;t<3;t+=1)for(let n=0;n<3;n+=1){let r=0;for(let i=0;i<3;i+=1)r+=c(e,n,i)*o[t*3+i];s[t*4+n]=r}for(let n=0;n<3;n+=1){let r=c(e,n,3);for(let i=0;i<3;i+=1)r+=c(e,n,i)*t[i];s[12+n]=r}s[15]=1;let l=new Float32Array(9);for(let e=0;e<3;e+=1)for(let t=0;t<3;t+=1)l[e*3+t]=s[e*4+t];return{matrix:s,normal:l}}var Fs=Math.PI/180;function Is(e,t,n){let{gl:r}=e;for(let i of t){let t=e.posOf(i),a=e.headingOf(i),o=a*Fs,s=[Math.sin(o),Math.cos(o)],c=[Math.cos(o),-Math.sin(o)],l=(n,r)=>e.seaAt(t.x+n,t.y+r),u=Math.min(e.sinkOf(i),1.2),d=js(t,a,.55*l(0,0)-.15-3.2*u,Math.max(-.038,Math.min(.038,.6*Math.atan2(l(s[0]*70,s[1]*70)-l(-s[0]*70,-s[1]*70),140)))+.075*u+Sr(i.flooding)*Fs,Math.max(-.05,Math.min(.05,.8*Math.atan2(l(c[0]*9,c[1]*9)-l(-c[0]*9,-c[1]*9),18)))+.2*u+xr(i.flooding,i.id)*Fs);r.uniformMatrix4fv(n(`uModel`),!1,d.matrix),r.uniformMatrix3fv(n(`uNM`),!1,d.normal),r.uniform1f(n(`uBootZ`),Xo(i.cls)),r.uniform1f(n(`uWound`),0);let f=e.hullVao(i);if(r.bindVertexArray(f.vao),r.drawArrays(r.TRIANGLES,0,f.vertexCount),r.uniform1f(n(`uBootZ`),-1e6),!(e.showMounts!==void 0&&!e.showMounts(i))){for(let t of Yo(i.cls)){let a=i.subsystems[t.mountId],o=i.mounts.find(e=>e.mountId===t.mountId)?.trainDeg??t.restDeg,s=Ps(d.matrix,t.seat,-o);r.uniformMatrix4fv(n(`uModel`),!1,s.matrix),r.uniformMatrix3fv(n(`uNM`),!1,s.normal),r.uniform1f(n(`uWound`),_r(a));let c=e.mountVao(i.cls,t,a===`out`);r.bindVertexArray(c.vao),r.drawArrays(r.TRIANGLES,0,c.vertexCount)}r.uniform1f(n(`uWound`),0)}}}function Ls(e,t){return t?vs(e.verts,e.mountId):e.verts}var Rs=`#version 300 es
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
}`,zs=`#version 300 es
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
}`,Bs=`#version 300 es
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
}`,Vs=`#version 300 es
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
}`,Hs=16,Us=7,Ws=80,Gs={fore:.3,mid:.02,aft:-.3};function Ks(e){let t=Y(e,Rs,zs),n=Y(e,Bs,Vs),r=ao(e);return{draw(i,a,o,s,c,l,u,d){let f=i.filter(e=>e.fires.length>0);if(f.length===0)return;let p=s.eye[0]-s.target[0],m=s.eye[1]-s.target[1],h=s.eye[2],g=Math.hypot(p,m,h)||1,v=[p/g,m/g,h/g],y=Math.hypot(v[1],v[0])||1,b=[-v[1]/y,v[0]/y,0],x=[v[1]*b[2]-v[2]*b[1],v[2]*b[0]-v[0]*b[2],v[0]*b[1]-v[1]*b[0]],S=[...f].sort((e,t)=>{let n=a(e),r=a(t);return Math.hypot(r.x-s.eye[0],r.y-s.eye[1])-Math.hypot(n.x-s.eye[0],n.y-s.eye[1])}),C=[],w=[],T=[];for(let e of S){let t=a(e),n=o(e)*Math.PI/180,r=[Math.sin(n),Math.cos(n)],i=O[e.cls].lengthMetres;e.fires.forEach((n,a)=>{let o=(Gs[n.zone]??0)*i,s={x:t.x+r[0]*o,y:t.y+r[1]*o},f=I(e.id)+a*977|0,p=n.intensity,m=.62-.55*qs(.35,.85,p),h=45+250*p,g=W(Hs);for(let e=0;e<g;e+=1){let t=_(f,e*3),n=(t+c/Ws)%1,r=n*h,i=(_(f,e*3+1)-.5)*(5+.1*r),o=(_(f,e*3+2)-.5)*(5+.1*r),g=.3*r+40*n*n,v=.5+.5*Math.sin(l*.011+e*2.7+f);C.push({pos:{x:s.x+u[0]*g+i,y:s.y+u[1]*g+o},z:4+r,r:(10+.3*r+14*p)*(.8+.4*_(f,e*3+7)),alpha:p*.72*(1-n)**.7*(.75+.25*t),col:[m*d[0],m*d[1],m*d[2]],seed:t*9+a,ph:n,ember:qs(25,0,r)*p*v*.8})}let v=W(Us);for(let e=0;e<v;e+=1){let t=_(f,100+e*3),n=(25+300*t)*(.4+.6*p),r=(_(f,101+e*3)-.5)*(10+.12*n),i=m+(.74-m)*.65;C.push({pos:{x:s.x+u[0]*n-u[1]*r,y:s.y+u[1]*n+u[0]*r},z:6+16*t,r:17+.12*n,alpha:.3*p*(1-t*.75),col:[i*d[0],i*d[1],i*d[2]],seed:t*9+a+.5,ph:t,ember:0})}let y=[r[1],-r[0]],b=6+Math.round(p*8);for(let e=0;e<b;e+=1){let t=(_(f,200+e*4)-.5)*2*(5+9*p),n=(_(f,201+e*4)-.5)*2*(2.5+3.5*p),i=.5+.5*Math.sin(l*(.009+.004*_(f,202+e*4))+e*2.1+f);w.push({pos:{x:s.x+r[0]*t+y[0]*n,y:s.y+r[1]*t+y[1]*n},z:5.6+(_(f,203+e*4)-.5)*1.8,r:(1.6+2.6*_(f,204+e*4))*(.8+.5*p),alpha:.75*p,col:[(3.5+8*p)*(.55+.7*_(f,205+e*4))*(.85+.35*i),0,0],seed:e*3.3+f%7,ph:i,ember:0})}for(let e=0;e<3;e+=1){let t=.6+.4*Math.sin(l*.007+e*2.9+f);T.push({pos:{x:s.x+(_(f,300+e)-.5)*(6+8*p),y:s.y+(_(f,301+e)-.5)*(5+5*p)},z:5.4,r:(4+7*p)*(.8+.4*_(f,302+e)),alpha:.3*p*t,col:[1,.52,.2],seed:e*1.7+f%5,ph:t,ember:.9})}})}e.enable(e.BLEND),e.depthMask(!1),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.useProgram(t.program),e.bindVertexArray(r),e.uniformMatrix4fv(t.uniform(`uVP`),!1,s.viewProjection),e.uniform3f(t.uniform(`uRight`),b[0],b[1],b[2]),e.uniform3f(t.uniform(`uUp`),x[0],x[1],x[2]);for(let n of C)e.uniform3f(t.uniform(`uPos`),n.pos.x,n.pos.y,n.z),e.uniform1f(t.uniform(`uR`),n.r),e.uniform3f(t.uniform(`uCol`),n.col[0],n.col[1],n.col[2]),e.uniform1f(t.uniform(`uA`),n.alpha),e.uniform1f(t.uniform(`uSeed`),n.seed),e.uniform1f(t.uniform(`uPh`),n.ph),e.uniform1f(t.uniform(`uEmber`),n.ember),e.drawArrays(e.TRIANGLES,0,6);e.blendFunc(e.SRC_ALPHA,e.ONE),e.useProgram(t.program),e.uniform3f(t.uniform(`uRight`),1,0,0),e.uniform3f(t.uniform(`uUp`),0,1,0);for(let n of T)e.uniform3f(t.uniform(`uPos`),n.pos.x,n.pos.y,n.z),e.uniform1f(t.uniform(`uR`),n.r),e.uniform3f(t.uniform(`uCol`),n.col[0],n.col[1],n.col[2]),e.uniform1f(t.uniform(`uA`),n.alpha),e.uniform1f(t.uniform(`uSeed`),n.seed),e.uniform1f(t.uniform(`uPh`),n.ph),e.uniform1f(t.uniform(`uEmber`),n.ember),e.drawArrays(e.TRIANGLES,0,6);e.useProgram(n.program),e.uniformMatrix4fv(n.uniform(`uVP`),!1,s.viewProjection),e.uniform3f(n.uniform(`uCam`),s.eye[0],s.eye[1],s.eye[2]);for(let t of w)e.uniform3f(n.uniform(`uPos`),t.pos.x,t.pos.y,t.z),e.uniform1f(n.uniform(`uW`),t.r*2),e.uniform1f(n.uniform(`uH`),t.col[0]),e.uniform1f(n.uniform(`uA`),t.alpha),e.uniform1f(n.uniform(`uSeed`),t.seed),e.uniform1f(n.uniform(`uFlick`),t.ph),e.drawArrays(e.TRIANGLES,0,6);e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null)}}}function qs(e,t,n){let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)}var Js=8,Ys=6;function Xs(e,t,n,r){let i=(n+r)/2,a=(n-r)/2,o=2/3.1,s=[];for(let n=0;n<Js;n+=1){let r=n/Js*2*Math.PI,c=Math.cos(r),l=Math.sin(r);s.push([Math.sign(c)*Math.abs(c)**o*t,e,i+Math.sign(l)*Math.abs(l)**o*a])}return s}function Zs(e,t){let n=[];for(let r=0;r<Ys;r+=1){let i=r/Ys*2*Math.PI,a=t.le-t.chord*(1-Math.cos(i))/2,o=Math.sin(i)*t.thick/2;n.push(e?[t.rise-o,a,t.at]:[t.at,a,t.rise+o])}return n}function Qs(e,t,n,r,i){e.skin(n.map(e=>Zs(t,e)),(e,t)=>e<t/2?r:i)}function $s(e,t,n,r){let{semiSpan:i,leY:a,chord:o,z:s,dihedralRise:c,shape:l}=t,u=[];for(let e=-1;e<=1;e+=2){let t=l.map(([t,n,r,l])=>({at:e*t*i,le:a-o*l,chord:o*n,thick:o*.115*r,rise:s+c*t}));u.push(...e===-1?t.reverse():t.slice(1))}Qs(e,!1,u,n,r)}function ec(e,t,n,r,i,a,o,s=6){let c=e=>{let t=[];for(let a=0;a<s;a+=1){let o=a/s*2*Math.PI;t.push([e,n+Math.cos(o)*i,r+Math.sin(o)*i])}return t};e.skin([c(t-a/2),c(t+a/2)],o,!1,!1)}var tc=[.317,.328,.343],nc=[.166,.174,.186],rc=[[.5,.006],[.4,.038],[-.24,.0435],[-.4,.031],[-.482,.0155]],ic=6;function ac(e,t,n,r,i){let a=(e,a)=>{let o=[];for(let s=0;s<ic;s+=1){let c=s/ic*2*Math.PI;o.push([n+Math.cos(c)*a*t,r+e*t,i+Math.sin(c)*a*t])}return o};e.skin(rc.map(([e,t])=>a(e,t)),tc);let o=t*.068,s=r-t*.43,c=t*.058,l=t*.006;for(let t of[!1,!0]){let r=e=>[[-c,-l],[c,-l],[c,l],[-c,l]].map(([r,a])=>t?[n+a,s+e,i+r]:[n+r,s+e,i+a]);e.skin(t?[r(-o),r(o)]:[r(o),r(-o)],nc,!1,!1)}}var oc=[.243,.283,.256],sc=[.281,.305,.318],cc=[.6,.632,.575],lc=[.198,.21,.222],$=[.166,.174,.186],uc=[.082,.09,.1],dc=[[0,1,1,0],[.88,.93,.88,.025],[1,.34,.44,.2]];function fc(e){Qs(e,!0,[{at:.16,le:-3.45,chord:1.97,thick:.2,rise:0},{at:1.24,le:-3.63,chord:1.78,thick:.14,rise:0},{at:1.6,le:-4.28,chord:.86,thick:.07,rise:0}],sc,sc)}function pc(e){e.skin([[4.3,.54,.6,-.58],[1.35,.53,.8,-.7],[-1.15,.49,.74,-.66],[-3.4,.31,.54,-.42],[-5.2,.11,.35,-.14]].map(([e,t,n,r])=>Xs(e,t,n,r)),(e,t)=>e<t/2?sc:cc,!1,!1)}function mc(e){e.skin([Xs(5.02,.63,.63,-.63),Xs(4.56,.66,.66,-.66),Xs(4.3,.58,.6,-.6)],lc,!0,!1);for(let t=0;t<3;t+=1){let n=t/3*2*Math.PI,r=Math.cos(n),i=Math.sin(n),a=(e,t,n)=>[[t/2,-n/2],[t/2,n/2],[-t/2,n/2],[-t/2,-n/2]].map(([t,n])=>{let a=.5,o=t*Math.cos(a)-n*Math.sin(a),s=t*Math.sin(a)+n*Math.cos(a);return[r*e-i*s,5.28+o,i*e+r*s]});e.skin([a(.2,.28,.07),a(1.56,.16,.04)],lc,!1,!1)}}function hc(e,t,n){for(let r of[-1,1]){e.rod([r*.5,2.9,.68],[r*.74,2.68,t],.06,$,4),e.rod([r*.5,1.5,.76],[r*.74,1.72,t],.06,$,4);let i=3.55,a=n+.26;e.rod([r*i,1.62,a],[r*i,2.44,t],.06,$,4),e.rod([r*i,.36,a],[r*i,1.18,t],.06,$,4),e.rod([r*.3,-3.55,-.5],[r*1.32,-4.02,-.16],.05,$,4)}}function gc(e){for(let t of[-1,1]){let n=[t*1.44,1.74,-1.74];e.rod([t*.46,2.24,-.6],n,.075,$,4),e.rod([t*.46,1.16,-.64],n,.075,$,4),ec(e,t*1.43,1.74,-1.74,.4,.26,$,8)}e.rod([0,-4.62,-.28],[0,-4.72,-.62],.07,$,4),ec(e,0,-4.72,-.66,.19,.14,$,6)}function _c(e,t,n,r,i){let a=fo(S.swordfish.insignia);if(a!==void 0){if(a.roundel!==void 0){let o=t+r*.115*.47;for(let t of[-1,1])mo(e,a.roundel,t*i*.58,n-r/2,o,r*.36)}a.finFlash!==void 0&&ho(e,a.finFlash,.105,-4.32,-5.16,.42,1.2)}}function vc(e,t){let n=1.3,r=-.66,i=6.935,a=2.03;pc(e),mc(e);let o=2.02,s={semiSpan:i,chord:a,shape:dc};$s(e,{...s,leY:o,z:r,dihedralRise:.34},oc,cc),$s(e,{...s,leY:o,z:n,dihedralRise:0},oc,cc),$s(e,{semiSpan:2,chord:1.24,shape:dc,leY:-3.62,z:-.18,dihedralRise:.06},oc,cc),fc(e),hc(e,n,r),gc(e),_c(e,n,o,a,i),e.box(0,-.45,.3,.68,3.9,.56,uc),t&&ac(e,5.1,0,.36,-1.46)}var yc={swordfish:vc};function bc(e,t){let n=new Float32Array(e.out);for(let e=0;e<n.length;e+=10)n[e]=n[e]*t,n[e+1]=n[e+1]*t,n[e+2]=n[e+2]*t,n[e+9]=n[e+9]*t;return n}var xc=new Map;function Sc(e){let t=Math.round(e*100),n=xc.get(t);if(n!==void 0)return n;let r=new Q;ac(r,e,0,0,0);let i={verts:bc(r,2)};return xc.set(t,i),i}var Cc=new Map;function wc(e,t){let n=`${e}:${t?`armed`:`clean`}`,r=Cc.get(n);if(r!==void 0)return r;let i=new Q;yc[e](i,t);let a={verts:bc(i,2)};return Cc.set(n,a),a}var Tc=.514444,Ec=60,Dc=55,Oc=95;function kc(e){return e===`withdrawing`?Oc:Dc}var Ac=.05,jc=.7,Mc=.45,Nc=[0,0,1],Pc=.46;function Fc(e){if(e===0)return{back:0,out:0};let t=Math.ceil(e/2),n=e%2==1?-1:1;return{back:t*Ec,out:n*t*Ec}}function Ic(e,t){let n=t.ships.find(e=>e.side===`raider`);if(n===void 0||e.phase!==`approach`)return 0;let r=(Math.atan2(n.motion.pos.x-e.pos.x,n.motion.pos.y-e.pos.y)*180/Math.PI-e.headingDeg+540)%360-180;return Math.max(-.7,Math.min(jc,r*Ac))}function Lc(e){let t=new Map,n=(n,r)=>{let i=t.get(n);if(i!==void 0)return i;let a=io(e,r());return t.set(n,a),a},r=(e,t)=>n(`${e}:${t?`armed`:`clean`}`,()=>wc(e,t).verts),i=e=>n(`fish:${e.toFixed(2)}`,()=>Sc(e).verts);return{draw(t,n,a,o,s,c){let l=t.tick+Math.min(1,Math.max(0,a)),u=t.torpedoes.map(e=>({fish:e,drop:ga(e,l,o)})).filter(e=>e.drop!==null);if(t.flights.length===0&&u.length===0)return;let d=e=>n.uniform(e);e.uniform1f(d(`uBootZ`),-1e6);let f=Math.min(1,Math.max(0,a)),p=[];for(let e of t.flights){let n=S[e.aircraft].speedKnots*Tc*o*f,i=e.headingDeg*Math.PI/180,a=Math.sin(i),s=Math.cos(i),c={x:e.pos.x+a*n,y:e.pos.y+s*n},l=e.phase===`approach`,u=l?Dc:Oc,d=Ic(e,t);for(let t=0;t<e.count;t+=1){let n=Fc(t),i=js({x:c.x-a*n.back-s*n.out,y:c.y-s*n.back+a*n.out},e.headingDeg,u,0,d);p.push({matrix:i.matrix,normal:i.normal,vao:r(e.aircraft,l)})}}for(let{fish:e,drop:t}of u){if(t===null)continue;let n=js({x:t.x,y:t.y},e.headingDeg,t.z,-t.pitchR,0);p.push({matrix:n.matrix,normal:n.normal,vao:i(ya(e.type))})}e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1);let m=(t,n)=>{e.uniform1f(d(`uShadow`),t);for(let t of p)e.uniformMatrix4fv(d(`uModel`),!1,Ms(t.matrix,n,Mc)),e.uniformMatrix3fv(d(`uNM`),!1,t.normal),e.bindVertexArray(t.vao.vao),e.drawArrays(e.TRIANGLES,0,t.vao.vertexCount)};m(Pc,Nc),m(.3+.32*Math.min(1,Math.max(0,c)),s),e.depthMask(!0),e.disable(e.BLEND),e.uniform1f(d(`uShadow`),0);for(let t of p)e.uniformMatrix4fv(d(`uModel`),!1,t.matrix),e.uniformMatrix3fv(d(`uNM`),!1,t.normal),e.bindVertexArray(t.vao.vao),e.drawArrays(e.TRIANGLES,0,t.vao.vertexCount);e.bindVertexArray(null)}}}var Rc=`#version 300 es
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
}`,zc=`#version 300 es
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
}`,Bc=16,Vc=3.4,Hc=5,Uc=9,Wc=26,Gc=3,Kc=[1,.84,.54],qc=[.93,.95,.98],Jc=[1,.77,.43],Yc=[.25,.26,.29],Xc=12;function Zc(e){let t=Y(e,Rc,zc),n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);let o=Xc*4;for(let t=0;t<3;t+=1)e.enableVertexAttribArray(1+t),e.vertexAttribPointer(1+t,4,e.FLOAT,!1,o,t*16),e.vertexAttribDivisor(1+t,1);e.bindVertexArray(null);let s=new Float32Array(512*Xc),c=0,l=(e,t,n,r,i,a)=>{if((c+1)*Xc>s.length){let e=new Float32Array(s.length*2);e.set(s),s=e}let o=c*Xc;s.set([e[0],e[1],e[2],n],o),s.set([t[0],t[1],t[2],r],o+4),s.set([i[0],i[1],i[2],a],o+8),c+=1},u=(e,t)=>{let n=kc(`approach`),r=1/0;for(let i of e.flights){let e=Math.hypot(i.pos.x-t.to.x,i.pos.y-t.to.y);e<r&&(r=e,n=kc(i.phase))}return n};return{draw(r,o,d){c=0;let f=r.tick+j(d),p=r.ships.find(e=>e.side===`raider`)?.cls;for(let e of r.aaFire??[]){let t=e.to.x-e.from.x,n=e.to.y-e.from.y,i=Math.hypot(t,n);if(i<1)continue;let o=e.style===`tracer`,s=i/(o?En:Dn),c=kn(e),d=u(r,e),m=W(An(e)),h=Pn(e,p);for(let t=0;t<m;t+=1){let n=f-jn(e,c,t,m);if(n<0)continue;let r=Fn(e,c,t,i),u=n/s,p=h[t%2],g=e=>[p.x+(r.x-p.x)*e,p.y+(r.y-p.y)*e,Bc+(d-Bc)*e];if(u<=1){l(g(Math.max(0,u-(o?.055:.035))),g(u),o?Vc:Hc,o?.95:1,o?Kc:qc,0);continue}if(o)continue;let _=(n-s)/On;if(_>=1)continue;let v=g(1);if(_<.12){let e=_/.12;l(v,v,Uc*(.7+.9*e),.95*(1-e),Jc,1)}let y=a(_),b=.6*(1-_),x=W(Gc);for(let e=0;e<x;e+=1){let n=G(c,t,10+e)*Math.PI*2,r=Uc*.9*y*(.4+G(c,t,13+e)),i=(Uc+(Wc-Uc)*y)*(.7+.5*G(c,t,16+e)),a=[v[0]+Math.cos(n)*r,v[1]+Math.sin(n)*r,v[2]+(G(c,t,22+e)-.5)*r];l(a,a,i,b*(.7+.3*G(c,t,19+e)),Yc,1)}}}c!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(n),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,s.subarray(0,c*Xc),e.DYNAMIC_DRAW),e.uniformMatrix4fv(t.uniform(`uVP`),!1,o.viewProjection),e.uniform3f(t.uniform(`uEye`),o.eye[0],o.eye[1],o.eye[2]),e.drawArraysInstanced(e.TRIANGLES,0,6,c),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}var Qc=[.2,.198,.196],$c=[1,.82,.5],el=12,tl=1024;function nl(e){let t=Y(e,Rc,zc),n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);let a=el*4;for(let t=0;t<3;t+=1)e.enableVertexAttribArray(1+t),e.vertexAttribPointer(1+t,4,e.FLOAT,!1,a,t*16),e.vertexAttribDivisor(1+t,1);e.bindVertexArray(null);let o=new Float32Array(tl*el);return{draw(r,a,s,c,l){let u=0,d=r.tick+l;for(let e of r.falls){let t=e.sites;if(t===void 0||t.length===0)continue;let n=d-e.tick;if(n<0||n>=.55)continue;let i=r.ships.find(t=>t.id===e.targetId),c=r.ships.find(t=>t.id===e.shooterId);if(i===void 0)continue;let l=a(i),f=s(i)*Math.PI/180,p=[Math.sin(f),Math.cos(f)],m=O[i.cls].lengthMetres,h=c===void 0?null:a(c),g=h===null?f:Math.atan2(l.x-h.x,l.y-h.y);t.forEach((t,r)=>{if(Jt(t)&&n>=.3)return;let i=(Kt[t.zone]??0)*m,a={x:l.x+p[0]*i,y:l.y+p[1]*i,z:11},s=Yt(t,I(`${e.shooterId}:${e.targetId}`)+e.tick*7919+r*131|0,a,g,n,W(qt(t)));for(let e of s){if(u>=tl)return;let t=u*el;o[t]=e.px,o[t+1]=e.py,o[t+2]=e.pz,o[t+3]=e.halfWidth,o[t+4]=e.x,o[t+5]=e.y,o[t+6]=e.z,o[t+7]=e.alpha,o[t+8]=Qc[0]+($c[0]-Qc[0])*e.hot,o[t+9]=Qc[1]+($c[1]-Qc[1])*e.hot,o[t+10]=Qc[2]+($c[2]-Qc[2])*e.hot,o[t+11]=e.hot*.35,u+=1}})}u!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(n),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,o.subarray(0,u*el),e.DYNAMIC_DRAW),e.uniformMatrix4fv(t.uniform(`uVP`),!1,c.viewProjection),e.uniform3f(t.uniform(`uEye`),c.eye[0],c.eye[1],c.eye[2]),e.drawArraysInstanced(e.TRIANGLES,0,6,u),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}var rl=[.075,.065,.058],il=[.42,.36,.31],al=12,ol=512;function sl(e){let t=Y(e,Rc,zc),n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);let a=al*4;for(let t=0;t<3;t+=1)e.enableVertexAttribArray(1+t),e.vertexAttribPointer(1+t,4,e.FLOAT,!1,a,t*16),e.vertexAttribDivisor(1+t,1);e.bindVertexArray(null);let o=new Float32Array(ol*al);return{draw(r,a,s,c){let l=0;for(let e of r){if(e.sunk)continue;let t=e.burns??Fe,n=e.plating??Fe;if(!Pe(t,n))continue;let r=O[e.cls],i=a(e),c=s(e)*Math.PI/180,u=[Math.sin(c),Math.cos(c)],d=[Math.cos(c),-Math.sin(c)],f=r.beamMetres*.42;for(let a of $e(e.id,t,n)){if(l>=ol)break;let e=a.along*r.lengthMetres,t=a.across*r.beamMetres/2,n=i.x+u[0]*e+d[0]*t,s=i.y+u[1]*e+d[1]*t,c=f+(a.kind===`soot`?1.2+a.up*2.5:.4),p=a.size*r.beamMetres*.5,m=a.kind===`soot`?rl:il,h=l*al;o[h]=n,o[h+1]=s,o[h+2]=c,o[h+3]=p,o[h+4]=n,o[h+5]=s,o[h+6]=c,o[h+7]=a.weight*(a.kind===`soot`?.9:.8),o[h+8]=m[0],o[h+9]=m[1],o[h+10]=m[2],o[h+11]=a.kind===`soot`?1:.45,l+=1}}l!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(n),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,o.subarray(0,l*al),e.DYNAMIC_DRAW),e.uniformMatrix4fv(t.uniform(`uVP`),!1,c.viewProjection),e.uniform3f(t.uniform(`uEye`),c.eye[0],c.eye[1],c.eye[2]),e.drawArraysInstanced(e.TRIANGLES,0,6,l),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}var cl=`#version 300 es
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
}`,ll=`#version 300 es
precision highp float;
in vec2 vUV; in float vA; in float vDark; in float vSoft;
out vec4 o;
uniform vec3 uCol;
void main(){
  float d = length(vUV - 0.5) * 2.0;
  // Smooth to the edge and nothing else — the ruling's whole point.
  float a = smoothstep(1.0, vSoft, d) * vA;
  o = vec4(uCol * vDark, a);
}`,ul=[.07,.075,.09],dl=6,fl=9,pl=6,ml=14,hl=.22;function gl(e,t){let n=At(e);if(n<.08)return null;let r=O[e.cls],i=r.lengthMetres,a=r.beamMetres;if(!e.sunk&&e.motion.speedKnots>.5){let r=wt(t,e.track),o=Math.min(i/2,r),s=Math.min(o+jt(i,n),r),c=Tt(t,e.track,o),l=Tt(t,e.track,s);return{ax:c.x,ay:c.y,bx:l.x,by:l.y,radiusMetres:a*1.6,strength:n}}return{ax:t.x,ay:t.y,bx:t.x,by:t.y,radiusMetres:i*.45+a*1.4*(.5+.5*n),strength:n}}function _l(e){let t=Y(e,cl,ll),n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);let o=dl*4;e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,o,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,o,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null);let s=new Float32Array(512*dl),c=0,l=(e,t,n,r,i,a)=>{if((c+1)*dl>s.length){let e=new Float32Array(s.length*2);e.set(s),s=e}let o=c*dl;s[o]=e,s[o+1]=t,s[o+2]=n,s[o+3]=r,s[o+4]=i,s[o+5]=a,c+=1};return{draw(r,o,u,d,f){c=0;for(let e of r){let t=O[e.cls],n=t.lengthMetres,r=t.beamMetres,i=o(e),s=u(e)*Math.PI/180,c={x:-Math.sin(s),y:-Math.cos(s)},d=I(e.id),p=At(e);if(p>=.08)if(!e.sunk&&e.motion.speedKnots>.5){let t=jt(n,p),o=wt(i,e.track),s=W(fl);for(let u=0;u<s;u+=1){let f=(u+1)/s,m=n/2+f*t;if(m>o)break;let h=Tt(i,e.track,m),g=Et(i,e.track,m,c),v=(_(d,u+30)-.5)*r*1.6*f;l(h.x-g.y*v,h.y+g.x*v,P(r*.45,r*1.5,a(f)),.46*p*(1-.62*f),1,.15)}}else{let e=W(pl);for(let t=0;t<e;t+=1){let e=_(d,t+33)*2*Math.PI,a=_(d,t+40)*n*.5;l(i.x+Math.cos(e)*a,i.y+Math.sin(e)*a,r*(.9+1.2*_(d,t+47))*(.5+.5*p),.4*p,1,.1)}}let m=f(e);if(e.sunk&&m>.15){let e=n*(.35+.5*Math.min(1,m)),t=W(ml);for(let n=0;n<t;n+=1){let t=_(d,n+60)*2*Math.PI,r=e*Math.sqrt(_(d,n+80));l(i.x+Math.cos(t)*r,i.y+Math.sin(t)*r,1.2+3.4*_(d,n+100),.55*Math.min(1,m*1.6),2.6+2.4*_(d,n+120),.62)}}}c!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(n),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,s.subarray(0,c*dl),e.DYNAMIC_DRAW),e.uniformMatrix4fv(t.uniform(`uVP`),!1,d.viewProjection),e.uniform3f(t.uniform(`uCol`),ul[0],ul[1],ul[2]),e.uniform1f(t.uniform(`uSeaZ`),hl),e.drawArraysInstanced(e.TRIANGLES,0,6,c),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}var vl=1,yl=new WeakMap;function bl(e){let t=yl.get(e.verts);if(t!==void 0)return t;let n=0;for(let t=0;t<e.verts.length;t+=10){let r=e.verts[t+1];r>n&&(n=r)}let r=0,i=0;for(let t=0;t<e.verts.length;t+=10)e.verts[t+1]<n-vl||(r+=e.verts[t+2],i+=1);let a={reachMetres:n,heightMetres:i===0?0:r/i};return yl.set(e.verts,a),a}function xl(e,t,n,r){let i=Yo(e.cls).find(e=>e.mountId===t);if(i===void 0)return null;let a=bl(i),o=e.mounts.find(e=>e.mountId===t)?.trainDeg,s=r*Math.PI/180,[c,l,u]=i.seat,d=n.x+c*Math.cos(s)+l*Math.sin(s),f=n.y-c*Math.sin(s)+l*Math.cos(s),p=s+(o??i.restDeg)*Math.PI/180;return{x:d+Math.sin(p)*a.reachMetres,y:f+Math.cos(p)*a.reachMetres,z:u+a.heightMetres,boreRad:p}}var Sl=[.815,.835,.867],Cl=[.44,.455,.486],wl=7,Tl=46,El=1.6,Dl=.35,Ol=6,kl=.35,Al=5,jl=[1.6,1.32,.72],Ml=[.58,.55,.5];function Nl(e,t,n){return[e[0]*t[0]*n,e[1]*t[1]*n,e[2]*t[2]*n]}function Pl(e){let t=Y(e,Rs,zs),n=ao(e);return{draw(r,i,o,s,c,l,u,d,f){let p=[],m=r.tick+u,h=l,g=Math.floor(h/El),v=j((h-g*El)/El),y=(e,t)=>Math.hypot(e-c.eye[0],t-c.eye[1]);for(let e of r.smoke){let t=m-(e.expiresAtTick-Ze.smoke.durationTicks),n=j(1-t/Ze.smoke.durationTicks);if(n<=0)continue;let r=e.expiresAtTick*41+Math.round(e.pos.x)*7+Math.round(e.pos.y)|0,i=j(t/1.5),o=.7+.35*a(1-n),s=e.radiusMetres*Dl*a(1-n),c=i*(.34+.5*n),l=W(wl);for(let t=0;t<l;t+=1){let n=_(r,t*5+g)*(1-v)+_(r,t*5+g+1)*v,i=_(r,t*5+2)*Math.PI*2,a=e.radiusMetres*.62*Math.sqrt(_(r,t*5+3)),u=s*(.4+.6*t/l),m=e.pos.x+Math.cos(i)*a+d[0]*u,h=e.pos.y+Math.sin(i)*a+d[1]*u;p.push({x:m+(n-.5)*e.radiusMetres*.14,y:h+(n-.5)*e.radiusMetres*.14,z:3+Tl*(.12+.88*_(r,t*5+4)),r:e.radiusMetres*(.36+.16*n)*o,alpha:c*.5,col:Nl(Sl,f,1),seed:_(r,t*5+6)*9,ph:.5,d:y(m,h)})}}for(let e of i){if(e.sunk)continue;let t=Math.min(1,e.motion.speedKnots/20);if(t<=.02)continue;let n=o(e),r=s(e)*Math.PI/180,i=O[e.cls].lengthMetres,c=O[e.cls].beamMetres,l=-Math.sin(r)*t+d[0]*.45,u=-Math.cos(r)*t+d[1]*.45,m=Math.hypot(l,u)||1;for(let o of E[e.cls].funnels){let e=-o*i,s=n.x+Math.sin(r)*e,d=n.y+Math.cos(r)*e,h=Math.round(s)*31+Math.round(d)*7|0,v=c*(.9+1.5*t),b=W(Ol);for(let e=0;e<b;e+=1){let n=(e+1)/b,r=(_(h,e*3+g)-.5)*v*n,i=(_(h,e*3+g+1)-.5)*v*n,o=s+l/m*v*(e+1)+r,x=d+u/m*v*(e+1)+i;p.push({x:o,y:x,z:16+26*a(n),r:c*(.28+.5*a(n))*(.7+.6*t),alpha:.2*(.35+.65*t)*(1-.75*n),col:Nl(Cl,f,1),seed:_(h,e*3+2)*9,ph:n,d:y(o,x)})}}}for(let e of r.salvos){let t=(m-e.firedAtTick)*10;if(t<0||t>Al)continue;let n=i.find(t=>t.id===e.shooterId);if(n===void 0)continue;let r=xl(n,e.mountId,o(n),s(n));if(r===null)continue;let c=r.x,l=r.y,u=e.firedAtTick*131+e.mountId.length*17|0;if(t<kl){let e=t/kl;p.push({x:c,y:l,z:r.z,r:(7+16*e)*(.8+.4*_(u,1)),alpha:(1-e)*.95,col:jl,seed:_(u,2)*9,ph:.2,d:y(c,l)})}let h=j(t/Al),g=30*h;p.push({x:c+d[0]*g,y:l+d[1]*g,z:r.z+10*h,r:(6+26*a(h))*(.85+.3*_(u,3)),alpha:.5*(1-h)*(1-h),col:Nl(Ml,f,1),seed:_(u,4)*9,ph:.5,d:y(c+d[0]*g,l+d[1]*g)})}if(p.length===0)return;p.sort((e,t)=>t.d-e.d);let b=Ns(c);e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(n),e.uniformMatrix4fv(t.uniform(`uVP`),!1,c.viewProjection),e.uniform3f(t.uniform(`uRight`),b.right[0],b.right[1],b.right[2]),e.uniform3f(t.uniform(`uUp`),b.up[0],b.up[1],b.up[2]),e.uniform1f(t.uniform(`uEmber`),0);for(let n of p)e.uniform3f(t.uniform(`uPos`),n.x,n.y,n.z),e.uniform1f(t.uniform(`uR`),n.r),e.uniform3f(t.uniform(`uCol`),n.col[0],n.col[1],n.col[2]),e.uniform1f(t.uniform(`uA`),n.alpha),e.uniform1f(t.uniform(`uSeed`),n.seed),e.uniform1f(t.uniform(`uPh`),n.ph),e.drawArrays(e.TRIANGLES,0,6);e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null)}}}var Fl=`#version 300 es
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
}`,Il=`#version 300 es
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
}`,Ll=[.84,.93,1];function Rl(e,t){let n=.55+.45*Math.min(t/2.6,1);return[Ll[0]*(e[0]??1)*n,Ll[1]*(e[1]??1)*n,Ll[2]*(e[2]??1)*n]}var zl=6,Bl=2,Vl=5;function Hl(e){let t=Y(e,Fl,Il),n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);let a=zl*4;e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,a,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,a,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null);let o=new Float32Array(4096*zl),s=0,c=(e,t,n,r,i,a)=>{if((s+1)*zl>o.length){let e=new Float32Array(o.length*2);e.set(o),o=e}let c=s*zl;o[c]=e,o[c+1]=t,o[c+2]=n,o[c+3]=r,o[c+4]=i,o[c+5]=a,s+=1},l=(e,t,n,r,i,a,o,s)=>{for(let l of Oa(e,t,n,r,i,a,o,s))c(l.x,l.y,l.radiusMetres,.96*l.fade,.95+.45*l.life,l.seed)};return{draw(r,a,u,d,f,p,m){let h=r.spentTorpedoes??[];if(r.torpedoes.length===0&&h.length===0)return;s=0;let g=Da(u.metresPerPxAtTarget,Bl),v=Math.min(1,Math.max(0,d-(r.tick-1)));for(let e of r.torpedoes){if(e.side===`enemy`&&!e.sighted||_a(e,d,f))continue;let t=B[e.type].speedKnots*ve,n=e.headingDeg*Math.PI/180,i=k(e,(v-1)*t*f,r.ships,e=>a(e)),o=Math.sin(n),s=Math.cos(n),u=B[e.type].rangeMetres-e.runMetresLeft+i,p=Ea(e.firedAtTick,e.headingDeg);l(e.pos.x-o*(u-i),e.pos.y-s*(u-i),o,s,u,u,p,g);let m=e.pos.x+o*i,h=e.pos.y+s*i;for(let e=0;e<Vl;e+=1){let t=-1.6*e,n=(_(p+e,41)-.5)*3.4;c(m+o*t-s*n,h+s*t+o*n,1.5+1.3*_(p+e,43),.98,1.35,_(p+e,47))}}for(let e of h){if(e.side===`enemy`&&!e.sighted)continue;let t=B[e.type].speedKnots*ve,n=e.headingDeg*Math.PI/180,r=Math.sin(n),i=Math.cos(n),a=(d-(e.endedAtTick-1+(e.endedAtSeconds??f)/f))*f,o=a>=0?e.runMetres:Math.max(0,e.runMetres+a*t),s=o+Math.max(0,a)*t;l(e.pos.x-r*e.runMetres,e.pos.y-i*e.runMetres,r,i,o,s,Ea(e.firedAtTick,e.headingDeg),g)}s!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(n),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,o.subarray(0,s*zl),e.DYNAMIC_DRAW),e.uniformMatrix4fv(t.uniform(`uVP`),!1,u.viewProjection),e.uniform3f(t.uniform(`uCol`),m[0],m[1],m[2]),e.uniform1f(t.uniform(`uMinR`),p*.6),e.drawArraysInstanced(e.TRIANGLES,0,6,s),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}var Ul=2400,Wl=850,Gl=300,Kl=4e3,ql=14e3,Jl=10,Yl=90,Xl=`#version 300 es
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
}`,Zl=`#version 300 es
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
        trkSpeed = (k == 0) ? B.z : segLen / ${Jl}.0;
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
      float ageFade = clamp(1.0 - (d/max(trkSpeed, 0.5))/${Yl}.0, 0.0, 1.0);
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
    float visBand = smoothstep(1.6, 4.0, ${Ul}.0 / fp);
    float visSwell = smoothstep(1.6, 4.0, ${Wl}.0 / fp);
    toothVis = smoothstep(1.6, 4.0, ${Gl}.0 / fp);
    // Along the wind and across it: a running sea is drawn out down the
    // blow, so every octave is stretched along it.
    vec2 fq = vec2(dot(vPos.xy - drift, uWind), dot(vPos.xy - drift, wperp));
    farMott = mix(0.5, fbm(fq/vec2(${Ul}.0*2.6, ${Ul}.0) + 11.3), uFarBand);
    farSwell = mix(0.5, fbm(fq/vec2(${Wl}.0*2.8, ${Wl}.0) + 4.1), uFarBand);
    farTooth = fbm(fq/vec2(${Gl}.0*3.2, ${Gl}.0) + 19.7);
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
  fogW *= 1.0 - 0.92*smoothstep(${ql}.0, ${Kl}.0, length(vPos.xy - uHome));
  col = mix(col, uHaze, fogW);
  o = vec4(col, 1.0);
}`,Ql=60,$l=42,eu=34,tu=26,nu=.27,ru=8;function iu(e){return e/10-1}function au(e,t){let n=iu(t),r=[];for(let t of e.torpedoes){if(r.length>=12)break;let e=va(t,n,10,5);e!==null&&r.push(e)}for(let t=e.torpedoHits.length-1;t>=0&&r.length+3<=12;--t){let i=e.torpedoHits[t];if(i===void 0)continue;let a=(n-(i.tick-1))*10-(i.atSeconds??10);if(a<0||a>tu)continue;let o=(e.ships.find(e=>e.id===i.targetId)?.motion.headingDeg??0)*Math.PI/180,s=Math.sin(o)*eu,c=Math.cos(o)*eu,l=a*nu;r.push([i.pos.x,i.pos.y,Ql,l]),r.push([i.pos.x+s,i.pos.y+c,$l,l*.86]),r.push([i.pos.x-s,i.pos.y-c,$l,l*.78])}for(let t=e.falls.length-1;t>=0&&r.length<12;--t){let i=e.falls[t];if(i===void 0)continue;let a=(n-(i.tick-1))*10;if(a<0||a>ru)continue;let o=e.ships.find(e=>e.id===i.shooterId),s=o===void 0?10:H[o.cls];r.push([i.pos.x,i.pos.y,s,a])}return r}var ou=260,su=520,cu=.9,lu=520,uu=1.15,du=.16,fu=.02;function pu(e,t,n,r){let i=[];for(let n of e.ships){if(i.length>=24)break;let e=(n.fires??[]).reduce((e,t)=>e+t.intensity,0);if(e<=fu)continue;let r=t(n);i.push(r.x,r.y,ou+su*Math.min(1,e),cu*Math.min(1.4,e))}for(let a of e.salvos){if(i.length>=24)break;let o=iu(r)-(a.firedAtTick-1);if(o<0||o>du)continue;let s=e.ships.find(e=>e.id===a.shooterId);if(s===void 0)continue;let c=xl(s,a.mountId,t(s),n(s))??t(s);i.push(c.x,c.y,lu,uu*(1-o/du))}return i}var mu=4;function hu(e){let t=e.getExtension(`EXT_disjoint_timer_query_webgl2`),n=[],r=[],i=null,a=Ee(),o=-1;function s(){if(t===null)return;let i=e.getParameter(t.GPU_DISJOINT_EXT)===!0;for(let t=n.length-1;t>=0;--t){let a=n[t];if(a===void 0||!i&&e.getQueryParameter(a,e.QUERY_RESULT_AVAILABLE)!==!0||(n.splice(t,1),r.push(a),i))continue;let s=e.getQueryParameter(a,e.QUERY_RESULT);o=o<0?s/1e6:We(o,s/1e6)}}return{begin(){a.begin(),s()},beginPlane(){if(a.beginInner(),t===null||i!==null)return;let o=r.pop()??(n.length<mu?e.createQuery():null);o!==null&&(i=o,e.beginQuery(t.TIME_ELAPSED_EXT,o))},endPlane(){a.endInner(),!(t===null||i===null)&&(e.endQuery(t.TIME_ELAPSED_EXT),n.push(i),i=null)},end(){a.end()},readout(){return gu(a.periodMs(),a.cpuMs(),a.innerMs(),o)}}}function gu(e,t,n,r){return[Le(e),`cpu ${t.toFixed(1)} (plane ${n.toFixed(1)})`,r<0?`gpu — (no timer)`:`gpu ${r.toFixed(1)}`]}var _u=16/2;function vu(e,t){let n=[e];for(let e of(t??[]).slice(1,16))n.push(e);let r=n[n.length-1]??e;for(;n.length<16;)n.push(r);let i=[];for(let e=0;e<16;e+=2)i.push(n[e].x,n[e].y,n[e+1].x,n[e+1].y);return i}var yu=`#version 300 es
precision highp float;
layout(location=0) in vec3 aPos; layout(location=1) in vec3 aNrm;
layout(location=2) in vec3 aCol; layout(location=3) in float aShipZ;
uniform mat4 uVP; uniform mat4 uModel; uniform mat3 uNM;
out vec3 vN; out vec3 vC; out vec3 vW; out float vZ;
void main(){
  vec4 w = uModel * vec4(aPos, 1.0);
  vW = w.xyz; vN = normalize(uNM * aNrm); vC = aCol; vZ = aShipZ;
  gl_Position = uVP * w;
}`,bu=`#version 300 es
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
  fog *= 1.0 - 0.92*smoothstep(${ql}.0, ${Kl}.0, length(vW.xy - uHome));
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
}`,xu=`#version 300 es
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
}`,Su=`#version 300 es
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
}`,Cu=300,wu=9e3,Tu=3e5;function Eu(t){let n=t.getContext(`webgl2`,{antialias:!0,alpha:!1});if(n===null)throw Error(`WebGL2 unavailable`);let r=Y(n,Xl,Zl),i=Y(n,yu,bu),a=Y(n,xu,Su),o=ro(n,Cu),s=hu(n),c=Ks(n),u=Hl(n),d=Lc(n),f=Zc(n),p=nl(n),m=sl(n),h=Pl(n),g=_l(n),_=1,v=(()=>{let e=new URLSearchParams(window.location.search).get(`glwx`);return e!==null&&e in _e?e:null})(),y=new URLSearchParams(window.location.search).get(`glfar`)===`0`?0:1,b=new URLSearchParams(window.location.search).get(`glarms`)===`0`?0:1,x=()=>{let e=window.__KR_NIGHTX__;if(typeof e==`number`&&e>0)return e;let t=Number(new URLSearchParams(window.location.search).get(`nightx`));return Number.isFinite(t)&&t>0?t:null},S=0,C=0,w=ao(n);jo();let T=ko(),E=new Map,D=new Map,ee=()=>{let e=ko();if(e!==T){T=e;for(let{vao:e,buffer:t}of E.values())n.deleteVertexArray(e),n.deleteBuffer(t);for(let{vao:e,buffer:t}of D.values())n.deleteVertexArray(e),n.deleteBuffer(t);E.clear(),D.clear()}},ne=(e,t,r)=>{let i=`${e}:${t.mountId}:${r?`wreck`:`sound`}`,a=D.get(i);if(a!==void 0)return a;let o=io(n,Ls(t,r));return D.set(i,o),o},k=(e,t)=>{let r=`${e.cls}:${+!!t}`,i=E.get(r);if(i!==void 0)return i;let a=io(n,es(e.cls,t).verts);return E.set(r,a),a};return{resize(e,r,i){_=i,S=e,C=r,t.width=Math.round(e*i),t.height=Math.round(r*i),t.style.width=`${e}px`,t.style.height=`${r}px`,n.viewport(0,0,t.width,t.height)},render(t,T,E,D,A){s.beginPlane(),ee();let ae=pe(t.setting,t.tick,{x:0,y:0}),j=re(ie(t.setting,t.tick),e(t.setting.anchor,{x:0,y:0})),M=ae.dark?`night`:j<9?`twilight`:`day`,oe=v??ae.weather,N=_e[oe],se=+(oe===`clear`||oe===`overcast`),ce=M===`night`?x():null,P=M===`night`?ce===null?Ge:Je(Xe.night,ce):Xe[M],F=l(t.setting.weatherSeed),I=Ve(oe,F),le=P.alt*Math.PI/180,ue=P.az*Math.PI/180,de=[Math.sin(ue)*Math.cos(le),Math.cos(ue)*Math.cos(le),Math.sin(le)],L=[P.hazeCol[0]*N.skyMul,P.hazeCol[1]*N.skyMul,P.hazeCol[2]*N.skyMul];n.enable(n.DEPTH_TEST),n.clearColor(L[0],L[1],L[2],1),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),n.useProgram(r.program);let R=e=>r.uniform(e);n.uniformMatrix4fv(R(`uVP`),!1,E.viewProjection);let fe=Ds(E,S,C),me=Math.min(Math.max(fe.spanMetres,wu),Tu),he=Os(fe.centreX,fe.centreY,me,Cu);n.uniform2f(R(`uOrigin`),he.x,he.y),n.uniform1f(R(`uExtent`),me),n.uniform1f(R(`uFarOn`),y),n.uniform1f(R(`uArmsOn`),b),n.uniform1i(R(`uTrackN`),te(16)),n.uniform1f(R(`uFarBand`),N.farBand),n.uniform1f(R(`uT`),D);let ge=new Float32Array(16),ve=new Float32Array(8);I.forEach((e,t)=>{ge.set([e.dx,e.dy,e.k,e.a],t*4),ve.set([e.w,e.q],t*2)}),n.uniform4fv(R(`uWaveA`),ge),n.uniform2fv(R(`uWaveB`),ve),n.uniform3f(R(`uCam`),E.eye[0],E.eye[1],E.eye[2]),n.uniform3fv(R(`uSunDir`),de),n.uniform3fv(R(`uSunCol`),Array.from(P.sun)),n.uniform1f(R(`uSunI`),P.sunI),n.uniform3fv(R(`uDeep`),[N.deep[0]*P.tint[0],N.deep[1]*P.tint[1],N.deep[2]*P.tint[2]]),n.uniform3fv(R(`uSkyTo`),[P.skyTo[0]*N.skyMul,P.skyTo[1]*N.skyMul,P.skyTo[2]*N.skyMul]),n.uniform3fv(R(`uSkyAway`),[P.skyAway[0]*N.skyMul,P.skyAway[1]*N.skyMul,P.skyAway[2]*N.skyMul]),n.uniform1f(R(`uSpec`),N.spec),n.uniform1f(R(`uGlitter`),N.glitter*(M===`night`?Re:1)),n.uniform1f(R(`uGlitZ`),Math.min(1,Math.max(.4,E.metresPerPxAtTarget/1.1)));let ye=E.metresPerPxAtTarget/Math.max(_,.5);n.uniform1f(R(`uGlitFreq`),Math.min(1.35,1/(3*ye))),n.uniform1f(R(`uFoamAmt`),N.foam),n.uniform1f(R(`uFoamThresh`),N.foamThresh),n.uniform3fv(R(`uFoamTint`),Array.from(P.foamTint)),n.uniform1f(R(`uStreak`),N.streak),n.uniform2f(R(`uWind`),Math.sin(F),Math.cos(F)),n.uniform1f(R(`uSeaAmp`),N.amp),n.uniform3fv(R(`uHaze`),L),n.uniform2f(R(`uHazeP`),N.haze,N.hazeMax),n.uniform1f(R(`uHazeLift`),se);let z=t.ships.find(e=>e.side===`raider`)??t.ships[0],B=z===void 0?{x:0,y:0}:T.posOf(z);n.uniform2f(R(`uHome`),B.x,B.y);let xe=pu(t,T.posOf,T.headingOf,D),Se=new Float32Array(24);Se.set(xe),n.uniform1i(R(`uEmitCount`),Math.floor(xe.length/4)),n.uniform4fv(R(`uEmit`),Se);let Ce=t.ships.filter(e=>A.hide?.(e)!==!0).sort((e,t)=>{let n=T.posOf(e),r=T.posOf(t);return Math.hypot(n.x-E.target[0],n.y-E.target[1])-Math.hypot(r.x-E.target[0],r.y-E.target[1])}).slice(0,6),we=new Float32Array(24),Te=new Float32Array(24),Ee=new Float32Array(24),De=new Float32Array(12),Oe=new Float32Array(6*_u*4);Ce.forEach((e,t)=>{let n=T.posOf(e),r=T.headingOf(e)*Math.PI/180,i=O[e.cls],a=A.sinkOf?.(e)??(e.sunk?.65:0);we.set([n.x,n.y,Math.sin(r),Math.cos(r)],t*4),Te.set([i.lengthMetres,i.beamMetres,e.motion.speedKnots*.5144,Math.min(a,1.2)],t*4),Oe.set(vu(n,e.track),t*_u*4);let o=gl(e,n);o!==null&&(Ee.set([o.ax,o.ay,o.bx,o.by],t*4),De.set([o.radiusMetres,o.strength],t*2))}),n.uniform1i(R(`uShipCount`),Ce.length),n.uniform4fv(R(`uShipA`),we),n.uniform4fv(R(`uShipB`),Te),n.uniform4fv(R(`uSlickA`),Ee),n.uniform2fv(R(`uSlickB`),De),n.uniform4fv(R(`uTrack`),Oe);let V=au(t,D),ke=new Float32Array(48);V.forEach((e,t)=>ke.set(e,t*4)),n.uniform1i(R(`uSplashCount`),V.length),n.uniform4fv(R(`uSplash`),ke),n.bindVertexArray(o.vao),n.drawElements(n.TRIANGLES,o.indexCount,n.UNSIGNED_INT,0),g.draw(t.ships,T.posOf,T.headingOf,E,e=>Math.min(A.sinkOf?.(e)??(e.sunk?.65:0),1.2)),u.draw(t,T.posOf,E,iu(D),10,ye,Rl(P.foamTint,P.sunI)),n.useProgram(i.program);let H=e=>i.uniform(e);n.uniformMatrix4fv(H(`uVP`),!1,E.viewProjection),n.uniform3f(H(`uCam`),E.eye[0],E.eye[1],E.eye[2]),n.uniform3fv(H(`uSunDir`),de),n.uniform3fv(H(`uSunCol`),Array.from(P.sun)),n.uniform1f(H(`uSunI`),P.sunI),n.uniform3fv(H(`uAmb`),Array.from(P.ambient)),n.uniform1f(H(`uAmbI`),P.ambI),n.uniform3fv(H(`uHaze`),L),n.uniform2f(H(`uHazeP`),N.haze,N.hazeMax),n.uniform1f(H(`uHazeLift`),se),n.uniform2f(H(`uHome`),B.x,B.y),n.uniform1i(H(`uEmitCount`),Math.floor(xe.length/4)),n.uniform4fv(H(`uEmit`),Se),n.uniform1f(H(`uShadow`),0),Is({gl:n,shipP:i,posOf:T.posOf,headingOf:T.headingOf,seaAt:(e,t)=>be(I,e,t,D),sinkOf:e=>A.sinkOf?.(e)??(e.sunk?.65:0),hullVao:e=>k(e,mr(t,e)===0),showMounts:e=>mr(t,e)!==0,mountVao:ne},Ce,H),n.uniform1f(H(`uBootZ`),xo),d.draw(t,i,D/10%1,10,de,P.sunI),f.draw(t,E,D/10%1),m.draw(Ce,T.posOf,T.headingOf,E),p.draw(t,T.posOf,T.headingOf,E,D/10%1),n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),n.depthMask(!1),n.useProgram(a.program);let U=e=>a.uniform(e);n.uniformMatrix4fv(U(`uVP`),!1,E.viewProjection),n.uniform3f(U(`uCam`),E.eye[0],E.eye[1],E.eye[2]),n.uniform3fv(U(`uSunCol`),Array.from(P.sun)),n.uniform1f(U(`uSunI`),P.sunI),n.uniform3fv(U(`uFoamTint`),Array.from(P.foamTint)),n.uniform1i(U(`uEmitCount`),Math.floor(xe.length/4)),n.uniform4fv(U(`uEmit`),Se),n.bindVertexArray(w),V.forEach((e,t)=>{n.uniform4f(U(`uS`),e[0],e[1],e[2],e[3]),n.uniform1f(U(`uSeed`),t*3.7+1.1),n.uniform1f(U(`uWScale`),1),n.uniform1f(U(`uOff`),0),n.drawArrays(n.TRIANGLES,0,6),n.uniform1f(U(`uSeed`),t*3.7+31.7),n.uniform1f(U(`uWScale`),.72),n.uniform1f(U(`uOff`),.16),n.drawArrays(n.TRIANGLES,0,6)}),n.depthMask(!0),n.disable(n.BLEND),n.bindVertexArray(null);let Ae=[Math.min(1.2,P.sun[0]*P.sunI*.3+P.ambient[0]*P.ambI*.9),Math.min(1.2,P.sun[1]*P.sunI*.3+P.ambient[1]*P.ambI*.9),Math.min(1.2,P.sun[2]*P.sunI*.3+P.ambient[2]*P.ambI*.9)],je=Ce;h.draw(t,je,T.posOf,T.headingOf,E,D,D/10%1,[Math.sin(F),Math.cos(F)],Ae),c.draw(je,T.posOf,T.headingOf,E,D,A.wallMs,[Math.sin(F),Math.cos(F)],Ae),s.endPlane()},meter:s}}var Du=6e3;function Ou(e){let{glCanvas:t}=e,n=!1,r=!1,i=null,a=null,o=()=>{if(a!==null)return;let n=e.buildFlat();n!==null&&(t.style.display=`none`,a=n)},s=()=>{if(!r){if(r=!0,e.onTrouble===void 0){o();return}e.onTrouble(o)}};return t.addEventListener(`webglcontextlost`,e=>{a===null&&(e.preventDefault(),n=!0,i!==null&&window.clearTimeout(i),i=window.setTimeout(s,Du))}),t.addEventListener(`webglcontextrestored`,()=>{if(a===null){i!==null&&(window.clearTimeout(i),i=null);try{e.rebuildPlane(),n=!1,r=!1}catch{s()}}}),{isLost:()=>n,flatView:()=>a}}var ku=45;function Au(e){let t=new URLSearchParams(e),n=t.get(`pitch`),r=t.get(`glscale`);D(r===null?null:Number(r));let i=t.get(`fpscap`);Me(i===null?null:Number(i));let a=t.get(`glzoom`);return{pitchDeg:ks(n===null?ku:Number(n)),devZoom:a===null?null:Number(a),devFocus:t.get(`glfocus`),showMeter:!1}}var ju=5;function Mu(e,t,n){return{top:t+44,bottom:e-n-44}}function Nu(e,t,n,r,i){let a=n.bottom-n.top;if(a<=0||e.length===0)return t;let o=t;for(let t=0;t<ju;t+=1){let t=i(o),s=e.filter(e=>t.inFrontOfEye(e.x,e.y)).map(e=>t.project(e.x,e.y).y);if(s.length===0)return o;let c=Math.min(...s),l=Math.max(...s);if(l-c>a){o={center:o.center,metresPerPx:o.metresPerPx*((l-c)/a)};continue}let u=(c+l)/2,d=(n.top+n.bottom)/2;if(Math.abs(u-d)<.5)return o;let f=t.groundFromScreen(r/2,u),p=t.groundFromScreen(r/2,d);o={center:{x:o.center.x+f.x-p.x,y:o.center.y+f.y-p.y},metresPerPx:o.metresPerPx}}return o}function Pu(e,t,n){let r=e.map(e=>e.x),i=e.map(e=>e.y),a=Math.min(...r)-q,o=Math.max(...r)+q,s=Math.min(...i)-q,c=Math.max(...i)+q;return{center:{x:(a+o)/2,y:(s+c)/2},metresPerPx:Math.max((o-a)/Math.max(t,1),(c-s)/Math.max(n,1),dt/Math.max(Math.min(t,n),1))}}function Fu(e,t,n){let{widthPx:r,heightPx:i,pitchDeg:a}=t;return Nu(e,Pu(e,r,i),Mu(i,n.top,n.bottom),r,e=>As({targetX:e.center.x,targetY:e.center.y,pitchDeg:a,zoomMetresPerPx:e.metresPerPx,widthPx:r,heightPx:i}))}var Iu=.5;function Lu(e,t){if(h()||e>=900)return t;let n=Math.max(0,e)/900;return Iu+(t-Iu)*x(n)}function Ru(e){return!h()&&e<900}function zu(){let e=null;return{arm(){h()||e===null&&(e=`armed`)},begin(t){e=h()?null:t},pitchDeg(t,n){if(e===null)return null;if(e===`armed`)return Iu;let r=t-e;return Ru(r)?Lu(r,n):(e=null,null)},cancel(){e=null},active(){return e!==null}}}var Bu=.2;function Vu(e,t){let n=e.getContext(`2d`);if(n===null)throw Error(`Canvas 2D context unavailable`);let i=document.createElement(`canvas`);i.className=`battle-gl`,i.style.position=`fixed`,i.style.left=`0`,i.style.top=`0`,i.style.zIndex=`0`,i.style.pointerEvents=`none`;let a=Eu(i);e.style.position=`relative`,e.style.zIndex=`1`,e.parentElement?.insertBefore(i,e);let o=Ou({glCanvas:i,rebuildPlane:()=>{a=Eu(i),f>0&&p>0&&a.resize(f,p,r(_))},buildFlat:()=>{try{let t=Ua(e);return f>0&&p>0&&t.resize(f,p),t}catch{return null}},onTrouble:t}),{pitchDeg:s,devZoom:c,devFocus:l,showMeter:u}=Au(window.location.search),d=s,f=0,p=0,m=0,g=0,_=1,v={x:0,y:0},y=20,b=!1,x=null,C=zu(),w=null,T=null,E=tn(),D=St(),ee=to(),te=null;function ne(e){({center:v,metresPerPx:y}=Fu(e.ships.map(e=>E.posOf(e)),{widthPx:f,heightPx:p,pitchDeg:O()},{top:Math.max(40,m),bottom:g}))}function O(){let e=C.pitchDeg(performance.now(),d)??d;return re&&(window.__KR_PITCH__=e),e}function k(){return As({targetX:v.x,targetY:v.y,pitchDeg:O(),zoomMetresPerPx:y,widthPx:f,heightPx:p})}let re=!1;function ie(e,t){if(c!==null){let n;if(l===`fish`)n=e.torpedoes.find(e=>e.side===`raider`||e.sighted)?.pos;else if(l===`air`){let r=e.flights[0];if(r!==void 0){let e=S[r.aircraft].speedKnots*ve*10*t,i=r.headingDeg*Math.PI/180;n={x:r.pos.x+Math.sin(i)*e,y:r.pos.y+Math.cos(i)*e}}}else{let t=l===`enemy`?e.ships.find(e=>e.side!==`raider`):e.ships.find(e=>e.side===`raider`);n=t===void 0?void 0:E.posOf(t)}n!==void 0&&(y=Math.max(ut,c),v={x:n.x,y:n.y-y*p*.2});return}b||ne(e)}function A(e,t){return{toScreen:t=>e.project(t.x,t.y),inFront:t=>e.inFrontOfEye(t.x,t.y),posOf:E.posOf,headingOf:E.headingOf,rudderOf:E.rudderOf,metresPerPx:e.metresPerPxAtTarget,frameFraction:t,animationMs:performance.now()}}function ae(e,t,n,r){o.isLost()||a.render(e,{posOf:E.posOf,headingOf:E.headingOf},t,h()?0:n,r===null?{wallMs:performance.now()}:{wallMs:performance.now(),sinkOf:e=>e.sunk?Math.min(1.1,.45+r/20):0,hide:e=>e.sunk&&Oe(r)})}let j={resize(t,i,o=0,s=0){f=t,p=i,m=o,g=s,_=window.devicePixelRatio||1,e.width=Math.round(t*_),e.height=Math.round(i*_),e.style.width=`${t}px`,e.style.height=`${i}px`,n.setTransform(_,0,0,_,0,0),a.resize(t,i,r(_))},render(e,t=0){let r=e.battle;if(r===null)return;a.meter.begin(),r.tick===0&&w!==r.setting.startTimeHours&&(w=r.setting.startTimeHours,C.arm()),x=r,E.step(r,t);let i=E.frameFraction();ie(r,i);let o=k();ae(r,o,(r.tick+i)*10,null),n.clearRect(0,0,f,p);let s=A(o,i),c=r.ships.find(e=>e.side===`raider`);c!==void 0&&se(n,c,s),vi(n,r,s),Xn(n,r,s),pi(n,r,s),ee.draw(n,r,s,s.animationMs),no(n,r,s,te),yi(n,r,s),D.draw(n,r,s),dn(n,r,f,E.posOf),u&&(n.fillStyle=`rgba(223, 230, 234, 0.8)`,n.font=`11px monospace`,n.textAlign=`right`,a.meter.readout().forEach((e,t)=>{n.fillText(e,f-8,14+t*13)}),n.textAlign=`left`),a.meter.end()},renderAftermath(e,t){C.cancel(),w=null,x=e,E.step(e,Math.min(t,8)),ie(e,0);let r=k();ae(e,r,e.tick*10+t,t),n.clearRect(0,0,f,p);let i=A(r,t/10);for(let r of e.ships)r.sunk&&ke(n,r,i,t)},screenToPlane(e,t){let n=k().groundFromScreen(e,t);return{x:n.x,y:n.y}},shipAt(e,t){if(x===null)return null;let n=k(),r=null;for(let i of x.ships){let a=E.posOf(i);if(!n.inFrontOfEye(a.x,a.y))continue;let o=n.project(a.x,a.y),s=Math.hypot(o.x-e,o.y-t);s<28&&(r===null||s<r.d)&&(r={id:i.id,d:s})}return r?.id??null},panByPixels(e,t){b=!0,v={x:v.x-e*y,y:v.y+t*y}},zoomBy(e,t,n){b=!0;let r=k().groundFromScreen(t,n);y=Math.max(ut,Math.min(400,y/e));let i=As({targetX:v.x,targetY:v.y,pitchDeg:d,zoomMetresPerPx:y,widthPx:f,heightPx:p}).groundFromScreen(t,n);v={x:v.x+(r.x-i.x),y:v.y+(r.y-i.y)}},tiltByPixels(e){d=ks(d-e*Bu),C.cancel()},recenter(){b=!1},isManual(){return b},setReport(e){T=e},reportShipId(){return T},markHelmOrder(e,t){ee.markOrder(e,t,performance.now())},setTorpedoPlot(e){te=e},setHelmDrag(e){ee.setDrag(e)},beginEntry(){if(x!==null&&x.tick>0){C.cancel();return}C.begin(performance.now())},setLayersVisible(e){i.style.display=e?``:`none`}},M=()=>o.flatView()??j;return{resize(e,t,n,r){f=e,p=t,M().resize(e,t,n,r)},render:(e,t)=>M().render(e,t),renderAftermath:(e,t)=>M().renderAftermath(e,t),screenToPlane:(e,t)=>M().screenToPlane(e,t),shipAt:(e,t)=>M().shipAt(e,t),panByPixels:(e,t)=>M().panByPixels(e,t),zoomBy:(e,t,n)=>M().zoomBy(e,t,n),tiltByPixels:e=>M().tiltByPixels?.(e),recenter:()=>M().recenter(),isManual:()=>M().isManual(),setReport:e=>M().setReport(e),reportShipId:()=>M().reportShipId(),beginEntry:()=>M().beginEntry?.(),markHelmOrder:(e,t)=>M().markHelmOrder?.(e,t),setTorpedoPlot:e=>M().setTorpedoPlot?.(e),setHelmDrag:e=>M().setHelmDrag?.(e),setLayersVisible(e){let t=o.flatView();if(t!==null){t.setLayersVisible?.(e);return}j.setLayersVisible?.(e)}}}function Hu(e){let t=new URLSearchParams(e).get(`gl`);return t===null?!0:t!==`0`&&t!==`off`&&t!==`false`}function Uu(e,t,n){if(!Hu(t))return{view:Ua(e),fellBack:!1};try{return{view:Vu(e,n),fellBack:!1}}catch{return{view:Ua(e),fellBack:!0}}}export{Uu as chooseBattleView};