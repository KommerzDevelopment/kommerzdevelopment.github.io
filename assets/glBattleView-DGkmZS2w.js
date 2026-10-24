import{$ as e,A as t,At as n,B as r,Bt as i,C as a,Ct as o,D as s,Dt as c,E as l,Et as u,F as d,Ft as f,G as p,Gt as m,H as h,Ht as g,I as _,It as v,J as y,K as b,L as x,Lt as S,M as C,Mt as w,N as T,Nt as E,O as D,Ot as O,P as ee,Pt as k,Q as A,R as te,Rt as ne,S as j,St as M,T as N,Tt as re,Ut as ie,V as P,Vt as F,W as ae,Wt as oe,X as se,Y as ce,Z as le,_ as I,_t as ue,a as de,at as L,b as fe,bt as pe,c as me,ct as he,d as R,dt as ge,et as _e,f as ve,ft as ye,g as be,gt as xe,h as Se,ht as z,i as Ce,it as we,j as Te,jt as Ee,k as De,kt as B,l as V,lt as H,m as U,mt as Oe,n as ke,nt as Ae,o as je,ot as Me,p as Ne,pt as Pe,q as Fe,r as Ie,rt as Le,s as Re,st as ze,t as Be,tt as Ve,u as He,ut as Ue,v as We,vt as W,w as Ge,wt as Ke,x as G,xt as qe,y as Je,yt as K,z as Ye,zt as Xe}from"./index-IAH70j2J.js";var Ze=1.2,Qe=9e3,$e=4e3,et={hit:`#d64541`,bounce:`#e0b64e`,miss:`#7fb4cc`,overpen:`#b9a7e0`,fire:`#e8813c`,torpedo:`#e8e2d0`},tt={hit:`HIT`,bounce:`BOUNCE`,overpen:`OVERPEN`,fire:`FIRE`,torpedo:`TORPEDO`};function nt(e,t,n,r,i){let a=et[t],o=1-(1-r)**3;if(e.strokeStyle=a,e.fillStyle=a,e.lineWidth=3,t===`hit`)e.beginPath(),e.moveTo(0,-9),e.lineTo(9,0),e.lineTo(0,9),e.lineTo(-9,0),e.closePath(),e.fill(),r<.3&&(e.globalAlpha=i*(1-r/.3),e.beginPath(),e.arc(0,0,12+r/.3*34,0,Math.PI*2),e.stroke(),n&&(e.beginPath(),e.arc(0,0,6+r/.3*24,0,Math.PI*2),e.stroke()));else if(t===`overpen`)e.beginPath(),e.moveTo(0,-9),e.lineTo(9,0),e.lineTo(0,9),e.lineTo(-9,0),e.closePath(),e.stroke();else if(t===`fire`){let t=.75+.25*Math.min(1,r*4);e.save(),e.scale(t,t),e.beginPath(),e.moveTo(0,10),e.bezierCurveTo(-9,5,-7,-3,-2,-7),e.bezierCurveTo(-3,-2,1,-3,2,-12),e.bezierCurveTo(7,-6,9,3,4,9),e.closePath(),e.fill(),e.fillStyle=`rgba(11, 21, 25, 0.8)`,e.beginPath(),e.moveTo(0,9),e.bezierCurveTo(-3,5,-2,2,0,-1),e.bezierCurveTo(2,2,3,5,0,9),e.closePath(),e.fill(),e.restore()}else if(t===`torpedo`)e.lineWidth=2.5,e.beginPath(),e.moveTo(-12,-3.5),e.lineTo(6,-3.5),e.quadraticCurveTo(12,0,6,3.5),e.lineTo(-12,3.5),e.closePath(),e.fill(),e.beginPath(),e.moveTo(-12,-6),e.lineTo(-15,-6),e.moveTo(-12,6),e.lineTo(-15,6),e.moveTo(-12,-3.5),e.lineTo(-12,3.5),e.stroke(),r<.45&&(e.globalAlpha=i*(1-r/.45),e.strokeStyle=et.hit,e.beginPath(),e.arc(0,0,14+r/.45*40,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(0,0,8+r/.45*26,0,Math.PI*2),e.stroke());else if(t===`bounce`)e.beginPath(),e.moveTo(-12,8),e.lineTo(0,2),e.lineTo(10,-10),e.stroke(),e.beginPath(),e.moveTo(10,-10),e.lineTo(4,-9),e.moveTo(10,-10),e.lineTo(9,-4),e.stroke();else{let t=Math.sin(Math.PI*Math.min(1,r*1.5));e.lineWidth=2.5,e.lineCap=`round`,e.beginPath(),e.moveTo(0,0),e.lineTo(0,-16*t),e.moveTo(-5,0),e.lineTo(-9,-10*t),e.moveTo(5,0),e.lineTo(9,-10*t),e.moveTo(-2.5,0),e.lineTo(-4,-13*t),e.moveTo(2.5,0),e.lineTo(4,-13*t),e.stroke(),e.globalAlpha=i*.45,e.beginPath(),e.ellipse(0,2,8+20*o,3+7*o,0,0,Math.PI*2),e.stroke()}let s=tt[t];s!==void 0&&(e.globalAlpha=i,e.font=v(11,`bold`),e.textAlign=`center`,e.fillStyle=a,e.fillText(s,0,26))}function rt(e){let t=e.closeShots??[];return t.length===0?e.salvos:[...e.salvos,...t]}function it(e){let t=e.landsAtTick-e.firedAtTick;return t>0?t:(e.flightSeconds??0)/10}function at(e){return(e.afterSeconds??0)/10}var ot=1600,st=.5,ct=22*st,lt=58*st,ut=44*st,dt=3,ft=2;function pt(){let e=[],t=new Set;function n(t,n,r,i){let a=e.filter(e=>e.targetId===n).length;e.push({kind:t,targetId:n,world:{x:0,y:0},smashing:r,bornMs:i,shelf:a})}return{draw(r,i,a){let o=a.animationMs;e=e.filter(e=>o-e.bornMs<ot);let s=new Set,c=new Set;for(let r of i.falls){if(i.tick+a.frameFraction-r.tick<at(r))continue;let l=`f:${r.shooterId}:${r.tick}:${Math.round(r.pos.x)}:${Math.round(r.pos.y)}`;if(s.add(l),!(t.has(l)||r.tick<=i.tick-ft)){if(r.hits===0){let t=`${r.shooterId}:${r.tick}`;c.has(t)||(c.add(t),e.push({kind:`miss`,targetId:null,world:r.pos,smashing:!1,bornMs:o,shelf:0}))}else if(r.outcomes!==void 0){let e=r.outcomes;e.effective>0&&n(`hit`,r.targetId,e.smashing,o),e.fires>0&&n(`fire`,r.targetId,!1,o),e.overpens>0&&n(`overpen`,r.targetId,!1,o),e.bounces>0&&n(`bounce`,r.targetId,!1,o)}}}for(let e of i.torpedoHits){let r=`t:${e.shooterId}:${e.targetId}:${e.tick}:${Math.round(e.pos.x)}`;s.add(r),!t.has(r)&&e.tick>i.tick-ft&&n(`torpedo`,e.targetId,!1,o)}t=s;let l=e.filter(e=>e.kind===`miss`),u=l.length>dt?new Set([...l].sort((e,t)=>e.bornMs-t.bornMs).slice(0,l.length-dt)):null;u!==null&&(e=e.filter(e=>!u.has(e)));for(let t of e){let e=(o-t.bornMs)/ot,n,s=0;if(t.targetId===null)n=t.world;else{let e=i.ships.find(e=>e.id===t.targetId);if(e===void 0)continue;n=a.posOf(e),s=z(e.cls,a.metresPerPx).lengthPx*.5+20}if(!a.inFront(n))continue;let c=a.toScreen(n),l=w()?0:ct*(1-(1-e)**3),u=e<.7?1:1-(e-.7)/.3;r.save(),r.globalAlpha=u,r.translate(c.x+t.shelf%4*lt,c.y-s-Math.floor(t.shelf/4)*ut-l),r.scale(st,st),nt(r,t.kind,t.smashing,e,u),r.restore()}}}}function mt(e){return{pos:e.motion.pos,headingDeg:e.motion.headingDeg,rudder:e.motion.rudder??0}}function ht(e,t,n){return(e+((t-e+540)%360-180)*n+360)%360}function gt(){let e=new Map,t=new Map,n=-1,r=0;return{step(i,a){let o=Math.max(0,Math.min(10,a));if(i.tick<n&&(e.clear(),t.clear(),n=-1),i.tick!==n){for(let n of i.ships){let r=t.get(n.id),i=mt(n);e.set(n.id,r??i),t.set(n.id,i)}n=i.tick,r=o/10;return}r=Math.max(r,o/10)},posOf(n){let i=e.get(n.id),a=t.get(n.id);return i===void 0||a===void 0?n.motion.pos:{x:i.pos.x+(a.pos.x-i.pos.x)*r,y:i.pos.y+(a.pos.y-i.pos.y)*r}},headingOf(n){let i=e.get(n.id),a=t.get(n.id);return i===void 0||a===void 0?n.motion.headingDeg:ht(i.headingDeg,a.headingDeg,r)},rudderOf(n){let i=e.get(n.id),a=t.get(n.id);return i===void 0||a===void 0?n.motion.rudder??0:i.rudder+(a.rudder-i.rudder)*r},frameFraction(){return r}}}var _t=`rgba(228, 234, 242, 0.95)`,vt=.514444;function yt(e,t,n,r,i,a=_t){e.save(),e.translate(t,n),e.rotate(r*Math.PI/180),e.strokeStyle=a,e.lineWidth=Math.max(1,i*.16),e.beginPath(),e.moveTo(0,-i*.55),e.lineTo(0,i*.45),e.moveTo(-i*.5,-i*.12),e.lineTo(i*.5,-i*.12),e.moveTo(-i*.22,i*.38),e.lineTo(i*.22,i*.38),e.stroke(),e.restore()}function bt(e,t){let n=h[e.aircraft].speedKnots*vt*10*Math.min(1,Math.max(0,t.frameFraction)),r=e.headingDeg*Math.PI/180;return{x:e.pos.x+Math.sin(r)*n,y:e.pos.y+Math.cos(r)*n}}function xt(e){return Math.max(7,Math.min(16,26/Math.sqrt(e)))}var St=9e3,Ct=7e3,wt=.6;function Tt(e){return B(`${e.tick}:${e.style}:${Math.round(e.to.x)}:${Math.round(e.to.y)}`)}function Et(e){return e.style===`tracer`?Math.round(4+8*e.intensity):2}function Dt(e,t,n,r){return e.tick+(n+k(t,n,0))/r}var Ot=[.4,.6],kt=.8;function At(e,t){if(e.headingDeg===void 0||t===void 0)return[e.from,e.from];let n=W[t],r=e.headingDeg*Math.PI/180,i=Math.sin(r),a=Math.cos(r),o=a,s=-i,c=((e.to.x-e.from.x)*o+(e.to.y-e.from.y)*s>=0?1:-1)*kt*(n.beamMetres/2),l=e.from.x+o*c,u=e.from.y+s*c,d=e=>{let t=(.5-e)*n.lengthMetres;return{x:l+i*t,y:u+a*t}};return[d(Ot[0]),d(Ot[1])]}function jt(e,t,n,r){let i=e.to.x-e.from.x,a=e.to.y-e.from.y,o=(k(t,n,1)-.5)*2*150,s=(k(t,n,2)-.5)*2*150;return{x:e.to.x+-a/r*o+i/r*s,y:e.to.y+i/r*o+a/r*s}}function Mt(e,t,n,r,i,a,o){if(r<.5)return;let s=r,c=i*.9,l=i*(.36+.1*k(a,o,20)),u=i*(.44+.16*k(a,o,21)),d=(k(a,o,22)-.5)*.3*s,f=t+d,p=1+.08*k(a,o,23),m=.98+.09*k(a,o,24);e.beginPath(),e.moveTo(t-c,n),e.quadraticCurveTo(t-c*.72,n-s*.34,t+d*.55-l,n-s*.64),e.quadraticCurveTo(f-u*1.08,n-s*.8,f-u,n-s*.92),e.quadraticCurveTo(f-u*.65,n-s*(p+.05),f-u*.12,n-s*p*.99),e.quadraticCurveTo(f+u*.22,n-s*(m+.06),f+u*.55,n-s*m*.96),e.quadraticCurveTo(f+u*1.05,n-s*.86,t+d*.55+l,n-s*.62),e.quadraticCurveTo(t+c*.72,n-s*.32,t+c,n),e.closePath(),e.fill()}var Nt=`rgba(230, 240, 255, 0.85)`,Pt=`96, 100, 108`,Ft=`#d64541`,It=.5,Lt=.35,Rt=.5,zt=592;function Bt(e,t,n){let r=t.tick+u(n.frameFraction);for(let i of t.aaDowned??[])n.inFront(i.pos)&&Ht(e,i,r,n)}function Vt(e,t,n){let r=e.headingDeg??k(t,0,30)*360,i=k(t,0,31)<.5?-1:1,a=u(n),o=e.pos.x,s=e.pos.y;for(let e=0;e<10;e+=1){let t=e/10;if(t>=a)break;let n=Math.min((e+1)/10,a)-t,l=t+n/2,u=r+i*165*c(l),d=zt*(1-.7*l),f=u*Math.PI/180;o+=Math.sin(f)*d*n*It,s+=Math.cos(f)*d*n*It}return{x:o,y:s,headingDeg:r+i*165*c(a)}}function Ht(e,t,n,r){let i=B(`${t.tick}:${Math.round(t.pos.x)}:${Math.round(t.pos.y)}`),a=E(n-t.tick,[It,Lt,Rt]);if(a.done)return;let o=xt(r.metresPerPx),s=r.toScreen(Vt(t,i,1));if(a.seg===0){let n=a.t;for(let a=1;a<=5;a+=1){let s=Vt(t,i,n-a*.08),c=r.toScreen(s);e.fillStyle=`rgba(${Pt}, ${.4*(1-a/6)})`,e.beginPath(),e.arc(c.x,c.y,o*.16*(1+a*.25),0,Math.PI*2),e.fill()}let s=Vt(t,i,n),l=r.toScreen(s),u=1-c(n);e.strokeStyle=`rgba(10, 16, 24, 0.28)`,e.lineWidth=Math.max(1,o*.14),e.beginPath(),e.moveTo(l.x+o*.5*u,l.y+o*.7*u),e.lineTo(l.x+o*1.1*u,l.y+o*.7*u),e.stroke(),yt(e,l.x,l.y,s.headingDeg,o*(1-.3*n),`rgba(228, 234, 242, ${.95-.25*n})`);return}if(a.seg===1){let t=re(a.t)*o*2.2;t>.5&&(e.fillStyle=Nt,Mt(e,s.x,s.y,t,o*.55,i,0)),e.fillStyle=`rgba(230, 240, 255, ${.4*(1-a.t)})`,e.beginPath(),e.ellipse(s.x,s.y+1,o*(.5+a.t),o*(.2+.35*a.t),0,0,Math.PI*2),e.fill()}let l=a.seg===1?a.t*.4:.4+a.t*.6;e.save(),e.globalAlpha=l<.55?1:1-(l-.55)/.45,e.fillStyle=Ft,e.font=v(11,`bold`),e.textAlign=`center`,e.fillText(`SHOT DOWN`,s.x,s.y-o-14*O(l)),e.restore()}var Ut=`rgba(11, 18, 32, 0.75)`,Wt=`rgba(230, 240, 255, 0.9)`,Gt=`rgba(230, 240, 255, 0.35)`,Kt=`rgba(230, 240, 255, 0.25)`,qt=`rgba(255, 150, 60, 0.95)`,Jt=`rgba(255, 255, 255, 0.75)`,Yt=.02;function Xt(e,t,n){return e.solutions.find(e=>e.shooterId===t&&e.targetId===n)?.value??0}function Zt(e,t,n,i){let a=t.ships.find(e=>e.side===`raider`);if(a===void 0)return;let o=t.ships.filter(e=>e.side===`enemy`&&!e.sunk&&!e.struckColours);if(o.length===0)return;let c=a.mounts.find(e=>e.targetId!==null)?.targetId,u=o.find(e=>e.id===c)??o[0];if(u===void 0)return;let d=(e,n)=>{let i=De(t,e,n);return Math.max(Ye(e,n,i),r(e,n,i))},f=[{label:S.battleOurSolution,value:Xt(t,a.id,u.id),ceiling:d(a,u)},...o.map((e,n)=>({label:e.name??(o.length>1?`${S.battleEnemySolution} ▸${n+1}`:S.battleEnemySolution),value:Xt(t,e.id,a.id),ceiling:d(e,a)}))];e.font=v(10);for(let[t,n]of f.entries()){let r=44+t*26,i=t===0;e.fillStyle=Ut,e.fillRect(10,r,130,8),e.fillStyle=!i&&n.value>=.5?qt:Wt,e.fillRect(10,r,130*n.value,8),e.fillStyle=Kt,e.fillRect(10+130*m.minSolutionToFire-.5,r,1,8),e.fillStyle=Gt,e.fillRect(10+130*n.ceiling-1,r-2,2,12),e.fillStyle=Jt;let a=n.value<n.ceiling-Yt?`▲`:n.value>n.ceiling+Yt?`▼`:``;a!==``&&e.fillText(a,144,r+8),i&&n.value<m.minSolutionToFire&&e.fillText(S.battleHoldingFire,156,r+8),e.fillText(n.label,10,r+19)}let p=i(a),h=Math.min(...o.map(e=>Math.hypot(i(e).x-p.x,i(e).y-p.y))),g=Fe(t.setting,t.tick,a.motion.pos);e.fillStyle=Jt,e.textAlign=`center`,e.fillText(`${(h/1e3).toFixed(1)} km · ${s(ne[g.weather],l(t.setting,t.tick,a.motion.pos),g.dark)}`,n/2,16),e.fillText($t(t,o.length),n/2,30),e.textAlign=`left`}function Qt(e){let t=e.disguise;if(t===void 0)return null;if(t.seenThroughAtTick!==null)return S.battleLieSeenThrough;if(t.phase!==`standing`)return null;if(P(t))return S.battleLieSatisfied;if(t.suspicion>=t.threshold*Xe.challengeFraction)return S.battleLieChallenge;let n=e.ships.find(e=>e.side===`raider`&&!e.sunk),r=e.ships.find(e=>e.side===`enemy`&&!e.sunk);return n===void 0||r===void 0?null:Math.hypot(r.motion.pos.x-n.motion.pos.x,r.motion.pos.y-n.motion.pos.y)<=Xe.inspectionRangeMetres*Xe.satisfiedRangeFactor?S.battleLieAlongside:S.battleLieClosing}function $t(e,t){let n=Qt(e);if(n!==null)return n;if(b(e))return en(e);switch(p(e)){case`held`:return t>1?S.battleContactHeldMany:S.battleContactHeld;case`gunfire`:return S.battleContactGunfire;case`closing`:return S.battleContactClosing;case`slipping`:return tn(e,S.battleContactSlipping);case`outranged`:return tn(e,S.battleContactOutranged)}}function en(e){switch(p(e)){case`held`:return S.battleContactConvoyOpen.replaceAll(`{km}`,String(g.crippledDisengageMetres/1e3));case`gunfire`:return S.battleContactConvoyGunfire;case`closing`:return S.battleContactConvoyClosing;case`slipping`:case`outranged`:return tn(e,S.battleContactConvoyClear)}}function tn(e,t){let n=g.escapeHoldTicks-e.contactBrokenTicks,r=Math.max(1,Math.ceil(n*10/60));return t.replaceAll(`{min}`,String(r))}var nn=17,rn=7,an=3,on=5.5,sn=28*Math.PI/180,cn=24,ln=1.75,un=3.75,dn=.9;function fn(e){return 1-f(u((e-16)/20))}function pn(e,t,n,r,i,a){let o=a+nn;e[0]=t+r*a,e[1]=n+i*a,e[2]=t+r*o,e[3]=n+i*o;let s=-r,c=-i,l=Math.cos(sn),u=Math.sin(sn);e[4]=e[2]+(s*l-c*u)*on,e[5]=e[3]+(s*u+c*l)*on,e[6]=e[2]+(s*l+c*u)*on,e[7]=e[3]+(c*l-s*u)*on}var q=new Float64Array(8);function mn(e,t,n,r){let i=W[t.cls].lengthMetres/n.metresPerPx,a=fn(i);if(a<=0)return;let o=n.posOf(t),s=n.headingOf(t)*Math.PI/180,c=cn*n.metresPerPx,l={x:o.x+Math.sin(s)*c,y:o.y+Math.cos(s)*c};if(!n.inFront(o)||!n.inFront(l))return;let u=n.toScreen(o),d=n.toScreen(l),f=Math.hypot(d.x-u.x,d.y-u.y);f<1e-6||(pn(q,u.x,u.y,(d.x-u.x)/f,(d.y-u.y)/f,Math.max(rn,i*.5+an)),e.save(),e.globalAlpha=a*dn,e.lineCap=`round`,e.lineJoin=`round`,e.beginPath(),e.moveTo(q[0],q[1]),e.lineTo(q[2],q[3]),e.moveTo(q[4],q[5]),e.lineTo(q[2],q[3]),e.lineTo(q[6],q[7]),e.strokeStyle=Pe,e.lineWidth=un,e.stroke(),e.strokeStyle=r,e.lineWidth=ln,e.stroke(),e.restore())}var hn=`rgba(255, 255, 255, 0.72)`,gn=13,_n=46,vn=9,yn=15,bn=`rgba(255, 255, 255, 0.45)`,xn=[5,4];function Sn(e){let t=e.ships.filter(e=>e.side===`raider`&&!e.sunk);return e.ships.filter(e=>e.side===`enemy`&&!e.sunk).map(n=>({ship:n,held:t.some(t=>ae(e,t,n))}))}function Cn(e,t,n,r){e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.stroke()}function wn(e,t,n){let r=t.ships.filter(e=>e.side===`raider`&&!e.sunk);if(r.length!==0){e.lineWidth=1.5;for(let{ship:r,held:i}of Sn(t)){if(!n.inFront(n.posOf(r)))continue;let t=n.toScreen(n.posOf(r)),a=z(r.cls,n.metresPerPx).lengthPx*.5;e.strokeStyle=i?hn:bn,e.setLineDash(i?[]:xn),Cn(e,t.x,t.y,Math.min(_n,Math.max(gn,a+vn))),i&&mn(e,r,n,ye)}e.setLineDash([]),e.strokeStyle=hn;for(let t of r)mn(e,t,n,Oe);for(let r of t.flights){let t=bt(r,n);if(!n.inFront(t))continue;let i=n.toScreen(t);Cn(e,i.x,i.y,yn)}}}var Tn=550;function En(e,t,n,r,i,a){if(!t.inFront(n))return;let o=t.toScreen(n),s=24*t.metresPerPx,c=e=>{let r=I(n,e,s);if(!t.inFront(r))return null;let i=t.toScreen(r),a=Math.hypot(i.x-o.x,i.y-o.y);return a<1e-6?null:{x:(i.x-o.x)/a,y:(i.y-o.y)/a}},l=(e,t)=>{let n=c(e);return n===null?null:{x:o.x+n.x*t,y:o.y+n.y*t}};e.save(),e.globalAlpha*=.45,e.strokeStyle=U,e.lineWidth=1,e.beginPath(),e.arc(o.x,o.y,38,0,Math.PI*2),e.stroke(),e.restore(),e.lineCap=`round`,e.lineJoin=`round`;let u=Ve(r,a),d=u>=0?be:Se;if(Math.abs(u)>1){j(e,We(r,a,3).map(e=>l(e,38)),d,3.5);let t=l(a,38),n=l(a-Math.sign(u)*2,38);if(t!==null&&n!==null){let r=Math.hypot(t.x-n.x,t.y-n.y)||1,i=(t.x-n.x)/r,a=(t.y-n.y)/r,o=e=>({x:t.x-i*8-a*6*e,y:t.y-a*8+i*6*e});j(e,[o(1),t,o(-1)],d,2.5)}}let f=Math.abs(Ve(a,i))>.5;f&&(e.setLineDash([4,4]),j(e,We(a,i,3).map(e=>l(e,38)),Ne,2.5),e.setLineDash([])),j(e,[l(r,38*.7),l(r,38*1.25)],U,2.5);let p=c(i);if(p!==null){let t={x:o.x+p.x*38*.98,y:o.y+p.y*38*.98},n={x:o.x+p.x*38*1.42,y:o.y+p.y*38*1.42};e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(n.x-p.y*7,n.y+p.x*7),e.lineTo(n.x+p.y*7,n.y-p.x*7),e.closePath(),f||(e.fillStyle=R,e.fill()),e.strokeStyle=f?Ne:Pe,e.lineWidth=f?2:1,e.stroke()}}function Dn(e,t,n){if(!t.inFront(n))return;let r=t.toScreen(n);e.beginPath(),e.arc(r.x,r.y,56,0,Math.PI*2),e.strokeStyle=Pe,e.lineWidth=5,e.stroke(),e.strokeStyle=R,e.lineWidth=2.5,e.stroke()}function On(e,t,n,r,i){if(!t.inFront(n))return;let a=t.toScreen(n);if(e.globalAlpha=r,e.beginPath(),e.arc(a.x,a.y,7,0,Math.PI*2),e.moveTo(a.x-10,a.y),e.lineTo(a.x+10,a.y),e.moveTo(a.x,a.y-10),e.lineTo(a.x,a.y+10),e.strokeStyle=Pe,e.lineWidth=3.5,e.stroke(),e.strokeStyle=U,e.lineWidth=1.5,e.stroke(),i<Tn&&!w()){let t=i/Tn;e.globalAlpha=r*(1-t)*.6,e.beginPath(),e.arc(a.x,a.y,8+18*t,0,Math.PI*2),e.stroke()}}function kn(e,t,n,r,i,a){if(!t.inFront(n))return;let o=t.toScreen(n);e.globalAlpha=i,e.font=v(12,`600`),e.textAlign=`center`,e.lineWidth=3,e.strokeStyle=Pe;let s=e.canvas.width/(e.getTransform().a||1),c=N(o.x,e.measureText(r).width,s);e.strokeText(r,c,o.y+a),e.fillStyle=U,e.fillText(r,c,o.y+a)}var An=1500,jn=120,Mn=15,Nn={horizonSeconds:480,stepSeconds:2,runOnSeconds:90};function Pn(e,t,n){let r=W[t.cls].lengthMetres,i=n.headingOf(t),a=I(n.posOf(t),i+180,r/2),o=Math.min(r*.35,Math.max(r*.12,14*n.metresPerPx)),s=I(a,Je(i,n.rudderOf(t)),o),c=t.subsystems.steering===`out`;e.lineCap=`round`,G(e,n,[a,s],c?Ne:ve,2.5)}function Fn(e,t,n,r,i){let a=r.pos;if(e.globalAlpha=1,i.course===null){Dn(e,n,a),kn(e,n,a,S.helmDragHint,1,-68);return}let{at:o,headingDeg:s}=i.course,c={...t,orders:{...t.orders,headingDeg:s}};e.setLineDash([1.5,6]),e.lineCap=`round`,G(e,n,T(c,r,Nn).points,R,2.2),e.setLineDash([]),G(e,n,[a,o],R,1.5),En(e,n,a,r.headingDeg,s,ee(c).headingDeg);let l=n.inFront(o)&&n.inFront(a)&&n.toScreen(o).y<n.toScreen(a).y;kn(e,n,a,fe(s),1,l?64:-54)}function In(){let e=null,t=null,n=!1,r=null;return{markOrder(t,n,r){e={at:t,headingDeg:n,wallMs:r}},setDrag(e){t=e},draw(i,o,s,c){let l=o.ships.find(e=>e.side===`raider`);if(l===void 0||l.sunk){e=null,t=null;return}i.save(),Pn(i,l,s);let d=s.posOf(l),f=s.headingOf(l),p={pos:d,headingDeg:f,speedKnots:l.motion.speedKnots,rudder:s.rudderOf(l)},m=l.orders.headingDeg,h=ee(l).headingDeg,g=!C(p,h);g?r=null:n&&(r=c),n=g,e!==null&&Math.abs(Ve(e.headingDeg,m))>.5&&(e=null);let _=a(g,r,c);if(t!==null){Fn(i,l,s,p,t),i.restore();return}if(_>0){i.globalAlpha=_;let e=T(l,p,Nn);i.setLineDash([1.5,6]),i.lineCap=`round`,G(i,s,e.points,R,2.2);let t=I(d,m,jn*s.metresPerPx);i.setLineDash([7,6]),G(i,s,[d,t],U,1.5),i.setLineDash([]),kn(i,s,t,fe(m),_,-10),i.globalAlpha=_,En(i,s,d,f,m,h);let n=Ge(g,Te(l,p),h);n.forEach((e,t)=>{let r=(n.length-1-t)*Mn;kn(i,s,d,e,_,-54-r)})}if(e!==null){let t=c-e.wallMs,n=_>0?_:1-u(t/An);n<=0?e=null:On(i,s,e.at,n,t)}i.restore()}}}function Ln(t,n,r,i){if(i===null)return;let a=n.ships.find(e=>e.side===`raider`),o=n.ships.find(e=>e.id===i.victimId);if(a===void 0||o===void 0)return;t.save(),t.lineCap=`round`;let s=se(a,o,i.spread,n.tick).torpedoes;if(s.length>0){t.setLineDash([8,6]);for(let e of s)G(t,r,[e.pos,I(e.pos,e.headingDeg,e.runMetresLeft)],R,1.6)}else{let n=Ae[a.cls];if(n!==void 0){let i=Le[a.torpedoType??n.type].rangeMetres;e(a.motion.pos,o.motion.pos)>i&&(t.setLineDash([5,6]),G(t,r,Array.from({length:73},(e,t)=>I(a.motion.pos,t*5,i)),Ne,1.5))}}t.restore()}var Rn={operational:0,degraded:.3,crippled:.55,out:1};function zn(e){return e===void 0?0:Rn[e]}function Bn(e,t){return t<=0?0:Math.min(t-1,Math.floor(n(B(e),7)*t))}function Vn(e){return L(e)}function Hn(e){return n(B(e),41)<.5?-1:1}function Un(e,t){let n=Vn(e);return Hn(t)*15*n*n}function Wn(e){let t=e.fore.level-e.aft.level;return 5*Math.max(-1,Math.min(1,t/ie.flooding.sinkAtTotal))}function Gn(e){return e.athwart===void 0?1:.72}function Kn(e,t,n){return e.beamPx*(t>1?.9:.65)*n}function qn(e,t,n){let r=n.toScreen(n.posOf(e)),i=D[e.cls].turrets.find(e=>e.mountId===t);if(i===void 0)return r;let a=z(e.cls,n.metresPerPx),o=i.along*a.lengthPx,s=(i.athwart??0)*a.beamPx/2,c=n.headingOf(e)*Math.PI/180;return{x:r.x+Math.cos(c)*s-Math.sin(c)*o,y:r.y+Math.sin(c)*s+Math.cos(c)*o}}function Jn(e,t,n,r,i){let a=t===void 0?x(n):d(t,n),o=A(e.cls,n.id);if(o===void 0)return a;let s=r.ships.find(e=>e.id===t?.targetId);return te(a,e.sunk||e.struckColours||s===void 0||s.sunk||s.struckColours?x(n):_({pos:i.posOf(e),headingDeg:i.headingOf(e),speedKnots:e.motion.speedKnots},{pos:i.posOf(s),headingDeg:i.headingOf(s),speedKnots:s.motion.speedKnots},n)??x(n),o.traverseDegPerSecond*i.frameFraction*10)}function Yn(e,t,n,r){let i=qn(e,t,r),a=D[e.cls].turrets.find(e=>e.mountId===t),o=le(e.cls).find(e=>e.id===t);if(a===void 0||o===void 0)return i;let s=Jn(e,e.mounts.find(e=>e.mountId===t),o,n,r),c=Kn(z(e.cls,r.metresPerPx),o.guns,Gn(a)),l=(r.headingOf(e)+s)*Math.PI/180;return{x:i.x+Math.sin(l)*c,y:i.y-Math.cos(l)*c}}var Xn={AP:`rgba(236, 242, 250, 0.92)`,HE:`rgba(255, 222, 130, 0.92)`},Zn={AP:`rgba(236, 242, 250, 0.3)`,HE:`rgba(255, 222, 130, 0.3)`},Qn=180;function $n(e,t){let n=.8*t,r=.3*t;e.beginPath(),e.moveTo(n,0),e.quadraticCurveTo(n*.15,r,-n*.8,r),e.lineTo(-n,r*.8),e.lineTo(-n,-r*.8),e.lineTo(-n*.8,-r),e.quadraticCurveTo(n*.15,-r,n,0),e.closePath()}function er(e,t,n){for(let r of rt(t)){let i=t.ships.find(e=>e.id===r.shooterId),a=t.ships.find(e=>e.id===r.targetId);if(i===void 0||a===void 0)continue;let o=it(r);if(o<=0)continue;let s=(t.tick+n.frameFraction-r.firedAtTick)/o;if(s>=1&&r.landsAtTick===r.firedAtTick)continue;let c=Math.min(1,Math.max(0,s)),l=n.posOf(i),u=n.posOf(a),d=u.x+r.fallOffset.x-l.x,f=u.y+r.fallOffset.y-l.y,p=Math.hypot(d,f),m=p<1?0:f/p,h=p<1?0:-d/p,g=0,_=0;if(n.inFront(l)){let e=n.toScreen(l),a=Yn(i,r.mountId,t,n);g=a.x-e.x,_=a.y-e.y}let v=(e,t)=>{let r={x:l.x+(d+m*e)*t,y:l.y+(f+h*e)*t};if(!n.inFront(r))return null;let i=n.toScreen(r);return{x:i.x+g*(1-t),y:i.y+_*(1-t)}},y=B(`${r.shooterId}:${r.mountId}`)^(r.firedAtTick|0),b=Math.max(0,c-.04),x=1+.85*re(c);for(let t=0;t<r.guns;t+=1){let n=(k(y,t,0)-.5)*2*Qn,i=v(n,c);if(i===null)continue;let a=v(n,b);a!==null&&(e.strokeStyle=Zn[r.shell],e.lineWidth=1,e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(i.x,i.y),e.stroke());let o=c>0?a:i,s=c>0?i:v(n,.04),l=o===null||s===null?0:Math.atan2(s.y-o.y,s.x-o.x);e.save(),e.translate(i.x,i.y),e.rotate(l),$n(e,x),e.fillStyle=Xn[r.shell],e.fill(),e.restore()}}}function tr(e,t,n){let r=t.ships.filter(e=>e.side===`enemy`&&!e.sunk&&!e.struckColours);e.font=v(11,`bold`),e.fillStyle=ye;for(let[t,i]of r.entries()){let a=i.name??(r.length>1?`${t+1}`:null),o=n.posOf(i);if(a===null||!n.inFront(o))continue;let s=n.toScreen(o),c=z(i.cls,n.metresPerPx).lengthPx/2;e.fillText(a,s.x+c+6,s.y-8)}let a=t.ships.find(e=>e.side===`raider`&&!e.sunk),o=a===void 0?null:F(a.cls);if(a===void 0||o===null||!n.inFront(n.posOf(a)))return;let s=n.toScreen(n.posOf(a)),c=z(a.cls,n.metresPerPx).lengthPx/2;e.save(),e.fillStyle=Oe,e.textAlign=`center`,e.fillText(i[o].shipName,s.x,s.y+c+14),e.restore()}function nr(e,t){let n=e.disguise;if(n===void 0||t.side!==`raider`)return null;if(n.phase===`open`)return 1;if(n.phase===`standing`||n.droppedAtTick===null)return 0;let r=Math.max(1,Xe.coloursBeatTicks),i=e.tick-n.droppedAtTick;return Math.max(0,Math.min(1,i/r))}function J(e,t,n){let r=(t,n)=>{let r=e.createShader(t);if(r===null)throw Error(`shader allocation failed`);if(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)!==!0)throw Error(`shader: ${e.getShaderInfoLog(r)??`unknown`}`);return r},i=e.createProgram();if(i===null)throw Error(`program allocation failed`);let a=r(e.VERTEX_SHADER,t),o=r(e.FRAGMENT_SHADER,n);if(e.attachShader(i,a),e.attachShader(i,o),e.linkProgram(i),e.getProgramParameter(i,e.LINK_STATUS)!==!0)throw Error(`link: ${e.getProgramInfoLog(i)??`unknown`}`);e.detachShader(i,a),e.detachShader(i,o),e.deleteShader(a),e.deleteShader(o);let s=new Map;return{program:i,uniform(t){let n=s.get(t);if(n!==void 0)return n;let r=e.getUniformLocation(i,t);return s.set(t,r),r}}}function rr(e,t){let n=new Float32Array((t+1)*(t+1)*2),r=0;for(let e=0;e<=t;e+=1)for(let i=0;i<=t;i+=1)n[r]=-.5+i/t,n[r+1]=-.5+e/t,r+=2;let i=new Uint32Array(t*t*6),a=0;for(let e=0;e<t;e+=1)for(let n=0;n<t;n+=1){let r=e*(t+1)+n,o=r+1,s=r+(t+1),c=s+1;i[a]=r,i[a+1]=o,i[a+2]=c,i[a+3]=r,i[a+4]=c,i[a+5]=s,a+=6}let o=e.createVertexArray();if(o===null)throw Error(`vao allocation failed`);e.bindVertexArray(o);let s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let c=e.createBuffer();return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,c),e.bufferData(e.ELEMENT_ARRAY_BUFFER,i,e.STATIC_DRAW),e.bindVertexArray(null),{vao:o,indexCount:i.length,cells:t}}function ir(e,t){let n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,40,0),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,3,e.FLOAT,!1,40,12),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,3,e.FLOAT,!1,40,24),e.enableVertexAttribArray(3),e.vertexAttribPointer(3,1,e.FLOAT,!1,40,36),e.bindVertexArray(null),{vao:n,buffer:r,vertexCount:t.length/10}}function ar(e){let t=e.createVertexArray();if(t===null)throw Error(`vao allocation failed`);e.bindVertexArray(t);let n=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.bindVertexArray(null),t}var or=[.11,.19,.44],sr=[.92,.92,.9],cr=[.78,.11,.16];function Y(e,t){return{rgb:e,corners:t.map(([e,t])=>[e*.5,t*.5])}}function X(e,t,n,r){return[[e,t],[n,t],[n,r],[e,r]]}var lr=[Y(or,X(0,0,1,1)),Y(sr,[[0,0],[0,.3],[1,1],[1,.7]]),Y(sr,[[0,1],[0,.7],[1,0],[1,.3]]),Y(cr,[[0,.085],[0,.215],[1,.915],[1,.785]]),Y(cr,[[0,.915],[0,.785],[1,.085],[1,.215]]),Y(sr,X(0,.333,1,.667)),Y(sr,X(.417,0,.583,1)),Y(cr,X(0,.4,1,.6)),Y(cr,X(.45,0,.55,1))],ur={royalNavy:{name:`Royal Navy`,roundel:[{radius:1,rgb:[.13,.29,.66]},{radius:.6,rgb:[.9,.91,.9]},{radius:.2,rgb:[.79,.13,.21]}],finFlash:[{width:1,rgb:[.13,.29,.66]},{width:1,rgb:[.9,.91,.9]},{width:1,rgb:[.79,.13,.21]}],ensign:{name:`White Ensign`,ratio:2,patches:[{corners:X(0,0,1,1),rgb:[.9,.9,.88]},{corners:X(0,.4,1,.6),rgb:cr},{corners:X(.45,0,.55,1),rgb:cr},...lr]}},britishMerchant:{name:`British merchant service`,ensign:{name:`Red Ensign`,ratio:2,patches:[{corners:X(0,0,1,1),rgb:[.72,.13,.16]},...lr]}}};function dr(e){return ur[e]}var fr=.05;function pr(e,t,n,r,i,a,o=8){let s=i+fr,c=(e,t)=>{let i=t/o*2*Math.PI;return[n+Math.cos(i)*e,r+Math.sin(i)*e,s]};for(let i=0;i<t.length;i+=1){let l=t[i],u=a*l.radius,d=i+1<t.length?a*t[i+1].radius:0;for(let t=0;t<o;t+=1){let i=t+1;d<=0?e.tri([n,r,s],c(u,t),c(u,i),l.rgb):e.quad(c(d,t),c(u,t),c(u,i),c(d,i),l.rgb)}}}function mr(e,t,n,r,i,a,o){let s=t.reduce((e,t)=>e+t.width,0);if(!(s<=0))for(let c of[-1,1]){let l=c*n,u=r;for(let n of t){let t=u+(i-r)*n.width/s,d=c*(i-r)>0?[[l,u,a],[l,t,a],[l,t,o],[l,u,o]]:[[l,t,a],[l,u,a],[l,u,o],[l,t,o]];e.quad(d[0],d[1],d[2],d[3],n.rgb),u=t}}}var hr=.18,gr=.004;function _r(e,t,n,r){let i=r*t.ratio,[a,o,s]=n,c=(e,t,n)=>[a+n,o-e*i,s-t*r-e*i*hr];for(let n=0;n<t.patches.length;n+=1){let r=t.patches[n],[i,a,o,s]=r.corners;for(let t of[1,-1]){let l=t*(.01+n*gr),u=(t>0?[i,a,o,s]:[s,o,a,i]).map(([e,t])=>c(e,t,l));e.quad(u[0],u[1],u[2],u[3],r.rgb)}}}function vr(e,t,n){return typeof e==`function`?e(t,n):e}var Z=class{out=[];tri(e,t,n,r){let i=t[0]-e[0],a=t[1]-e[1],o=t[2]-e[2],s=n[0]-e[0],c=n[1]-e[1],l=n[2]-e[2],u=a*l-o*c,d=o*s-i*l,f=i*c-a*s,p=Math.hypot(u,d,f)||1;u/=p,d/=p,f/=p;for(let i of[e,t,n])this.out.push(i[0],i[1],i[2],u,d,f,r[0],r[1],r[2],i[2])}quad(e,t,n,r,i){this.tri(e,t,n,i),this.tri(e,n,r,i)}box(e,t,n,r,i,a,o,s=0){let c=Math.sin(s*Math.PI/180),l=Math.cos(s*Math.PI/180),u=(n,r)=>[e+n*l-r*c,t+n*c+r*l],d=r/2,f=i/2,p=[u(-d,-f),u(d,-f),u(d,f),u(-d,f)],m=p.map(([e,t])=>[e,t,n]),h=p.map(([e,t])=>[e,t,n+a]);this.quad(h[0],h[1],h[2],h[3],o);for(let e=0;e<4;e+=1){let t=(e+1)%4;this.quad(m[e],m[t],h[t],h[e],o)}}prism(e,t,n,r,i,a,o,s=12){for(let c=0;c<s;c+=1){let l=c/s*2*Math.PI,u=(c+1)/s*2*Math.PI,d=[e+r*Math.cos(l),t+i*Math.sin(l),n],f=[e+r*Math.cos(u),t+i*Math.sin(u),n],p=[d[0],d[1],n+a],m=[f[0],f[1],n+a];this.quad(d,f,m,p,o),this.tri([e,t,n+a],p,m,o)}}skin(e,t,n=!0,r=!0){for(let n=0;n+1<e.length;n+=1){let r=e[n],i=e[n+1];for(let e=0;e<r.length;e+=1){let n=(e+1)%r.length,a=vr(t,e,r.length);this.quad(r[e],r[n],i[n],i[e],a)}}let i=vr(t,0,1),a=(e,t)=>{let n=0,r=0,a=0;for(let t of e)n+=t[0]/e.length,r+=t[1]/e.length,a+=t[2]/e.length;for(let o=0;o<e.length;o+=1){let s=(o+1)%e.length,c=e[o],l=e[s];this.tri([n,r,a],t?l:c,t?c:l,i)}};n&&e.length>0&&a(e[0],!0),r&&e.length>1&&a(e[e.length-1],!1)}rod(e,t,n,r,i=6,a=!1){let o=t[0]-e[0],s=t[1]-e[1],c=t[2]-e[2],l=Math.hypot(o,s,c);if(l<1e-6)return;let u=[o/l,s/l,c/l],d=Math.abs(u[2])<.9?[0,0,1]:[1,0,0],f=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],p=(e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]})(f(u,d)),m=f(u,p),h=e=>{let t=[];for(let r=0;r<i;r+=1){let a=r/i*2*Math.PI,o=Math.cos(a)*n,s=Math.sin(a)*n;t.push([e[0]+p[0]*o+m[0]*s,e[1]+p[1]*o+m[1]*s,e[2]+p[2]*o+m[2]*s])}return t};this.skin([h(e),h(t)],r,a,a)}tube(e,t,n,r,i,a,o=10){let s=i/2;for(let i=0;i<o;i+=1){let c=i/o*2*Math.PI,l=(i+1)/o*2*Math.PI,u=[e+r*Math.cos(c),t-s,n+r*Math.sin(c)],d=[e+r*Math.cos(l),t-s,n+r*Math.sin(l)],f=[u[0],t+s,u[2]],p=[d[0],t+s,d[2]];this.quad(d,u,f,p,a),this.tri([e,t+s,n],p,f,a),this.tri([e,t-s,n],u,d,a)}}},yr=[`raider`,`heavyCruiser`,`lightCruiser`,`demsMerchant`,`qship`,`auxRaider`,`destroyer`,`battlecruiser`],br=1.25,xr=827150923;function Sr(e,t){if(e.byteLength<12)return null;let n=new DataView(e);if(n.getUint32(0,!0)!==xr)return null;let r=n.getUint32(4,!0),i=n.getUint32(8,!0),a=12+r;if(r%4!=0||a+i*4>e.byteLength)return null;let o;try{o=JSON.parse(new TextDecoder().decode(new Uint8Array(e,12,r)))}catch{return null}if(o.stride!==10||!Array.isArray(o.parts))return null;let s=new Float32Array(e.slice(a,a+i*4)),c=o.parts.find(e=>e.name===`hull`);if(c===void 0||!Cr(c,i))return null;let l=[];for(let e of o.parts)if(e.mountId!==void 0){if(!Cr(e,i)||e.seat===void 0||e.seat.length!==3)return null;l.push({mountId:e.mountId,seat:[e.seat[0],e.seat[1],e.seat[2]],restDeg:e.restDeg??0,verts:s.subarray(e.offset,e.offset+e.count)})}let u={verts:s.subarray(c.offset,c.offset+c.count),hullFloats:c.boundFloats,mounts:l,bootZ:typeof o.bootZ==`number`&&Number.isFinite(o.bootZ)&&o.bootZ>0&&o.bootZ<=3?o.bootZ:br};return wr(u,t)?u:null}function Cr(e,t){return Number.isInteger(e.offset)&&Number.isInteger(e.count)&&e.offset>=0&&e.count>0&&e.count%30==0&&e.offset+e.count<=t&&Number.isInteger(e.boundFloats)&&e.boundFloats>=0&&e.boundFloats<=e.count}function wr(e,t){let n=W[t].lengthMetres/2,r=W[t].beamMetres/2;for(let t=0;t<e.hullFloats;t+=10)if(Math.abs(e.verts[t])>r+.01||Math.abs(e.verts[t+1])>n+.01)return!1;for(let t of e.mounts)if(Math.abs(t.seat[0])>r+.01||Math.abs(t.seat[1])>n+.01||t.seat[2]<=0)return!1;return!0}var Tr=new Map,Er=0,Dr=!1;function Or(){return Er}function kr(e){return Tr.get(e)}async function Ar(){Dr||(Dr=!0,await Promise.all(yr.map(async e=>{try{let t=await fetch(`models/${e}.krm`);if(!t.ok)return;let n=Sr(await t.arrayBuffer(),e);n!==null&&(Tr.set(e,n),Er+=1)}catch{}})))}var jr=[.295,.305,.315],Mr=[.4,.372,.328],Nr=[.355,.365,.375],Pr=[.465,.475,.487],Fr=[.125,.125,.135],Ir=[.375,.385,.398],Q=[.19,.195,.205],Lr=[.3,.302,.31];function Rr(e){switch(D[e].deck){case`flightDeck`:return Lr;case`steel`:return Nr;default:return Mr}}function zr(e,t){let n=D[e],r=W[e].beamMetres/2;if(t<-.5+n.bowFraction){let e=(t+.5)/n.bowFraction;return Math.max(.25,r*Math.sin(e*Math.PI/2)**.82)}if(t>.5-n.sternFraction){let e=(.5-t)/n.sternFraction;return r*(n.sternWidthFraction+(1-n.sternWidthFraction)*Math.sin(e*Math.PI/2)**.8)}return r}function Br(e,t,n){return e===`carrier`?t*.037:2.6+t*.013+(1.2+t*.008)*(Math.max(0,-n+.05)/.55)**1.5+.3*Math.max(0,n-.2)}function Vr(e,t){let n=W[t].lengthMetres,r=Rr(t),i=-2.6,a=[];for(let e=0;e<=48;e+=1){let r=-.5+e/48;a.push({y:-r*n,w:zr(t,r),fb:Br(t,n,r)})}for(let t=0;t<48;t+=1){let n=a[t],o=a[t+1];e.quad([o.w,o.y,i],[n.w,n.y,i],[n.w,n.y,n.fb],[o.w,o.y,o.fb],jr),e.quad([-n.w,n.y,i],[-o.w,o.y,i],[-o.w,o.y,o.fb],[-n.w,n.y,n.fb],jr),e.quad([-n.w,n.y,n.fb],[-o.w,o.y,o.fb],[o.w,o.y,o.fb],[n.w,n.y,n.fb],r)}let o=a[0],s=a[48];e.quad([o.w,o.y,i],[-o.w,o.y,i],[-o.w,o.y,o.fb],[o.w,o.y,o.fb],jr),e.quad([-s.w,s.y,i],[s.w,s.y,i],[s.w,s.y,s.fb],[-s.w,s.y,s.fb],jr)}function Hr(e){return e===`raider`?3:e===`lightCruiser`||e===`heavyCruiser`||e===`battlecruiser`||e===`carrier`?2:1}function Ur(e,t){return t===void 0?e===`raider`||e===`lightCruiser`||e===`heavyCruiser`||e===`battlecruiser`||e===`destroyer`:!1}function Wr(e,t,n){let r=D[t],i=W[t],a=i.lengthMetres,o=i.beamMetres,s=e=>-e*a,c=e=>Br(t,a,e);{let i=s(r.bridge.along),l=c(r.bridge.along),u=r.bridge.lengthFraction*a,d=t===`carrier`?o*.22:o*.52,f=t===`carrier`?o*.5-d/2-.4:0;e.box(f,i,l,d,u,4.5+a*.011,Pr),e.box(f,i+.6,l+4.5+a*.011,d*.64,u*.6,4.2,Pr),t===`raider`&&(e.box(0,i+.4,l+12.3,3.8,4.6,4.2,Pr),n.box(0,i+2.4,l+16.5,.7,.7,4.6,Q))}for(let t of r.blocks??[])e.box(0,s(t.along),c(t.along),t.widthFraction*o,t.lengthFraction*a,3.6+a*.008,Pr);for(let t of r.funnels){let n=s(t),r=c(t),i=8+a*.02;e.prism(0,n,r,1.6+o*.05,3.4+o*.07,i,Pr),e.prism(0,n,r+i,1.7+o*.05,3.5+o*.07,1.2,Fr)}for(let t of r.masts??[]){let r=s(t),i=c(t)+4;e.box(0,r,i,.5,.5,9+a*.02,Q),n.box(0,r,i+7+a*.015,6+o*.1,.35,.35,Q)}for(let t of r.kingposts??[]){let n=s(t),r=c(t);e.box(-o*.28,n,r,.7,.7,9,Q),e.box(o*.28,n,r,.7,.7,9,Q),e.box(0,n,r+8.2,o*.62,.4,.4,Q)}if(r.catapult!==void 0){let t=s(r.catapult),n=c(r.catapult);e.box(0,t,n,o*.62,2.1,.8,Q),e.box(0,t,n+1.5,1.1,7.6,1.1,[.7,.715,.735]),e.box(0,t+.5,n+2.5,8.8,1.6,.26,[.7,.715,.735])}for(let t of r.tubeMounts??[]){let n=(t.athwart??0)*(o/2);e.box(n,s(t.along),c(t.along),2.1,6,1.4,Q)}}function Gr(e,t,n,r){let i=W[n].lengthMetres>200;if(!r){e.box(0,0,0,3,2.5,2,Ir),t.box(0,3.2,1.15,.3,5.2,.3,Ir);return}let a=i||n===`raider`?1:n===`destroyer`?.5:.66;e.prism(0,0,0,4.8*a,4.8*a,1.2,Ir,12),e.box(0,0,1.2,8.2*a,10.2*a,2.9*a,Ir);let o=Hr(n),s=1.9*a,c=(i||n===`raider`?11.4:8.2)*a;for(let e=0;e<o;e+=1){let n=(e-(o-1)/2)*s;t.box(n,c*.75,1.2+1.3*a,.4,c,.4,Ir)}}var Kr=new Map;function qr(e){let t=kr(e);if(t!==void 0)return t.mounts;let n=Kr.get(e);if(n!==void 0)return n;let r=W[e],i=r.lengthMetres,a=r.beamMetres,o=D[e].turrets.map(t=>{let n=new Z,r=new Z;Gr(n,r,e,Ur(e,t.athwart));let o=new Float32Array(n.out.length+r.out.length);return o.set(n.out,0),o.set(r.out,n.out.length),{mountId:t.mountId,seat:[(t.athwart??0)*(a/2),-t.along*i,Br(e,i,t.along)],restDeg:t.restDeg,verts:o}});return Kr.set(e,o),o}function Jr(e){return kr(e)?.bootZ??1.25}function Yr(e,t=!0){let n=D[e].ensign,r=n===void 0?void 0:dr(n.set)?.ensign;if(!t||n===void 0||r===void 0)return new Float32Array;let i=new Z,a=W[e].lengthMetres;return _r(i,r,[0,-n.along*a,n.headMetres],n.hoistMetres),new Float32Array(i.out)}var Xr=new Map,Zr=new Map;function Qr(e,t=!0){let n=kr(e);if(n!==void 0){let r=Yr(e,t);if(r.length===0)return{verts:n.verts,hullFloats:n.hullFloats};let i=Or(),a=`${e}:${+!!t}`,o=Zr.get(a);if(o!==void 0&&o.gen===i)return o.mesh;let s=new Float32Array(n.verts.length+r.length);s.set(n.verts,0),s.set(r,n.verts.length);let c={verts:s,hullFloats:n.hullFloats};return Zr.set(a,{gen:i,mesh:c}),c}let r=Xr.get(e);if(r!==void 0)return r;let i=new Z,a=new Z;Vr(i,e),Wr(i,e,a);let o=i.out.length,s=new Float32Array(o+a.out.length);s.set(i.out,0),s.set(a.out,o);let c={verts:s,hullFloats:o};return Xr.set(e,c),c}var $r=1,ei=.35,ti=.9,ni=1.5,ri=6,ii=50,ai=[.07,.065,.062],oi=[.022,.02,.02];function si(e){let t=[];for(let n=0;n+30<=e.length;n+=30){let r=0,i=0,a=0;for(let t=0;t<3;t+=1)r+=e[n+t*10],i+=e[n+t*10+1],a+=e[n+t*10+2];t.push({at:n,cx:r/3,cy:i/3,cz:a/3})}return t}function ci(e,t){let n=e.filter(e=>e.cy>t-$r).sort((e,t)=>e.cx-t.cx),r=[],i=0,a=0,o=!1;for(let e of n){if(o&&e.cx-a<=ti){a=e.cx;continue}o&&r.push({centreX:(i+a)/2,halfWidth:(a-i)/2}),i=e.cx,a=e.cx,o=!0}return o&&r.push({centreX:(i+a)/2,halfWidth:(a-i)/2}),r}function li(e,t){return Math.abs(t-e.centreX)<=e.halfWidth+ei}function ui(e){let t=si(e),n=-1/0;for(let t=0;t<e.length;t+=10){let r=e[t+1];r>n&&(n=r)}let r=ci(t,n),i=-1/0;for(let e of t)!r.some(t=>li(t,e.cx))&&e.cy>i&&(i=e.cy);if(!Number.isFinite(i))return{houseAt:t.map(e=>e.at),barrels:[],roofZ:0};let a=[],o=r.map(()=>({at:[],minY:1/0,sumZ:0,n:0})),s=-1/0;for(let n of t){let t=r.findIndex(e=>li(e,n.cx)),c=t<0?void 0:o[t];if(c===void 0||n.cy<=i){a.push(n.at),n.cz>s&&(s=n.cz);continue}c.at.push(n.at);for(let t=0;t<3;t+=1){let r=e[n.at+t*10+1];r<c.minY&&(c.minY=r)}c.sumZ+=n.cz,c.n+=1}return{houseAt:a,barrels:o.filter(e=>e.at.length>0&&n-e.minY>=ni).map(e=>({at:e.at,pivotY:e.minY,pivotZ:e.sumZ/e.n,lengthMetres:n-e.minY})),roofZ:Number.isFinite(s)?s:0}}function di(e){let t=Math.asin(Math.max(0,Math.min(1,e.pivotZ/e.lengthMetres)));return Math.max(ri*Math.PI/180,Math.min(ii*Math.PI/180,t))}function fi(e,t,n){for(let r=0;r<30;r+=1)n.push(e[t+r])}function pi(e,t,n){let r=di(t),i=Math.cos(r),a=Math.sin(r);for(let r of t.at)for(let o=0;o<3;o+=1){let s=r+o*10,c=e[s+1]-t.pivotY,l=e[s+2]-t.pivotZ,u=t.pivotY+c*i+l*a,d=t.pivotZ-c*a+l*i,f=e[s+4],p=e[s+5];n.push(e[s],u,d,e[s+3],f*i+p*a,-f*a+p*i,e[s+6],e[s+7],e[s+8],d)}}function mi(e,t,r){let i=B(r),a=.55+.5*n(i,3),o=(n(i,1)-.5)*1.6,s=(n(i,2)-.5)*2.2,c=t.roofZ+.03,l=[];for(let e=0;e<9;e+=1){let t=e/9*Math.PI*2,r=a*(.62+.62*n(i,10+e));l.push([o+Math.cos(t)*r,s+Math.sin(t)*r])}for(let t=0;t<9;t+=1){let n=l[t],r=l[(t+1)%9];e.tri([o,s,c],[n[0],n[1],c],[r[0],r[1],c],ai),e.tri([o,s,c-a*.9],[r[0],r[1],c],[n[0],n[1],c],oi)}}var hi=new WeakMap;function gi(e,t){let n=hi.get(e);n===void 0&&(n=new Map,hi.set(e,n));let r=n.get(t);if(r!==void 0)return r;let i=ui(e);if(i.barrels.length===0)return n.set(t,e),e;let a=Bn(t,i.barrels.length),o=[];for(let t of i.houseAt)fi(e,t,o);i.barrels.forEach((t,n)=>{if(n===a){pi(e,t,o);return}for(let n of t.at)fi(e,n,o)});let s=new Z;mi(s,i,t);let c=new Float32Array(o.length+s.out.length);return c.set(o,0),c.set(s.out,o.length),n.set(t,c),c}var _i=.5;function vi(e,t,n,r){let i=1/Math.tan(e/2),a=new Float32Array(16);return a[0]=i/t,a[5]=i,a[10]=(r+n)/(n-r),a[11]=-1,a[14]=2*r*n/(n-r),a}function yi(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2]]}function bi(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function xi(e){let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]}function Si(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Ci(e,t,n){let r=xi(yi(e,t)),i=xi(bi(n,r)),a=bi(r,i),o=new Float32Array(16);return o[0]=i[0],o[1]=a[0],o[2]=r[0],o[4]=i[1],o[5]=a[1],o[6]=r[1],o[8]=i[2],o[9]=a[2],o[10]=r[2],o[12]=-Si(i,e),o[13]=-Si(a,e),o[14]=-Si(r,e),o[15]=1,o}function wi(e,t){let n=new Float32Array(16);for(let r=0;r<4;r+=1)for(let i=0;i<4;i+=1){let a=0;for(let n=0;n<4;n+=1)a+=e[n*4+i]*t[r*4+n];n[r*4+i]=a}return n}function Ti(e,t,n,r=.06){let i=[e.groundFromScreen(0,0),e.groundFromScreen(t,0),e.groundFromScreen(0,n),e.groundFromScreen(t,n)],a=1/0,o=-1/0,s=1/0,c=-1/0;for(let e of i)a=Math.min(a,e.x),o=Math.max(o,e.x),s=Math.min(s,e.y),c=Math.max(c,e.y);return{centreX:(a+o)/2,centreY:(s+c)/2,spanMetres:Math.max(o-a,c-s)*(1+r)}}function Ei(e,t,n,r){let i=n/r;return{x:Math.round(e/i)*i,y:Math.round(t/i)*i}}function Di(e){return Math.min(58,Math.max(_i,e))}function Oi(e){let t=Di(e.pitchDeg)*Math.PI/180,n=38*Math.PI/180,r=e.heightPx/2/Math.tan(n/2),i=r*e.zoomMetresPerPx,a=[e.targetX,e.targetY-Math.sin(t)*i,Math.cos(t)*i],o=[e.targetX,e.targetY,0],s=Ci(a,o,[0,0,1]),c=wi(vi(n,e.widthPx/Math.max(e.heightPx,1),Math.max(i*.05,1),i*6+12e3),s),l=Math.max(i*.05,1),u=(e,t,n)=>c[3]*e+c[7]*t+c[11]*n+c[15],d=xi(yi(a,o)),f=xi(bi([0,0,1],d)),p=bi(d,f);return{eye:a,target:[e.targetX,e.targetY],viewProjection:c,metresPerPxAtTarget:e.zoomMetresPerPx,project(t,n,r=0){let i=c[0]*t+c[4]*n+c[8]*r+c[12],a=c[1]*t+c[5]*n+c[9]*r+c[13],o=u(t,n,r),s=o===0?1e-6:o;return{x:e.widthPx/2+i/s*e.widthPx/2,y:e.heightPx/2-a/s*e.heightPx/2}},inFrontOfEye(e,t,n=0){return u(e,t,n)>l},groundFromScreen(t,n){let i=t-e.widthPx/2,o=e.heightPx/2-n,s=xi([f[0]*i+p[0]*o-d[0]*r,f[1]*i+p[1]*o-d[1]*r,f[2]*i+p[2]*o-d[2]*r]),c=Math.min(s[2],-1e-4),l=-a[2]/c;return{x:a[0]+s[0]*l,y:a[1]+s[1]*l}}}}function ki(e,t,n,r,i){let a=t*Math.PI/180,o=Math.cos(a),s=Math.sin(a),c=Math.cos(r),l=Math.sin(r),u=Math.cos(i),d=Math.sin(i),f=[o,-s,0,s,o,0,0,0,1],p=[1,0,0,0,c,l,0,-l,c],m=[u,0,-d,0,1,0,d,0,u],h=(e,t)=>{let n=Array(9).fill(0);for(let r=0;r<3;r+=1)for(let i=0;i<3;i+=1){let a=0;for(let n=0;n<3;n+=1)a+=e[n*3+i]*t[r*3+n];n[r*3+i]=a}return n},g=h(f,h(p,m)),_=new Float32Array(16);return _[0]=g[0],_[1]=g[1],_[2]=g[2],_[4]=g[3],_[5]=g[4],_[6]=g[5],_[8]=g[6],_[9]=g[7],_[10]=g[8],_[12]=e.x,_[13]=e.y,_[14]=n,_[15]=1,{matrix:_,normal:new Float32Array(g)}}function Ai(e,t,n){let r=Math.max(t[2]??1,.25),i=(t[0]??0)/r,a=(t[1]??0)/r,o=new Float32Array(16);for(let t=0;t<4;t+=1){let n=e[t*4+2];o[t*4]=e[t*4]-i*n,o[t*4+1]=e[t*4+1]-a*n,o[t*4+2]=0,o[t*4+3]=e[t*4+3]}return o[14]=n,o}function ji(e){let t=e.eye[0]-e.target[0],n=e.eye[1]-e.target[1],r=e.eye[2],i=Math.hypot(t,n,r)||1,a=[t/i,n/i,r/i],o=Math.hypot(a[1],a[0])||1,s=[-a[1]/o,a[0]/o,0];return{right:s,up:[a[1]*s[2]-a[2]*s[1],a[2]*s[0]-a[0]*s[2],a[0]*s[1]-a[1]*s[0]]}}function Mi(e,t,n){let r=n*Math.PI/180,i=Math.cos(r),a=Math.sin(r),o=[i,a,0,-a,i,0,0,0,1],s=new Float32Array(16),c=(e,t,n)=>e[n*4+t];for(let t=0;t<3;t+=1)for(let n=0;n<3;n+=1){let r=0;for(let i=0;i<3;i+=1)r+=c(e,n,i)*o[t*3+i];s[t*4+n]=r}for(let n=0;n<3;n+=1){let r=c(e,n,3);for(let i=0;i<3;i+=1)r+=c(e,n,i)*t[i];s[12+n]=r}s[15]=1;let l=new Float32Array(9);for(let e=0;e<3;e+=1)for(let t=0;t<3;t+=1)l[e*3+t]=s[e*4+t];return{matrix:s,normal:l}}var Ni=Math.PI/180;function Pi(e,t,n){let{gl:r}=e;for(let i of t){let t=e.posOf(i),a=e.headingOf(i),o=a*Ni,s=[Math.sin(o),Math.cos(o)],c=[Math.cos(o),-Math.sin(o)],l=(n,r)=>e.seaAt(t.x+n,t.y+r),u=Math.min(e.sinkOf(i),1.2),d=ki(t,a,.55*l(0,0)-.15-3.2*u,Math.max(-.038,Math.min(.038,.6*Math.atan2(l(s[0]*70,s[1]*70)-l(-s[0]*70,-s[1]*70),140)))+.075*u+Wn(i.flooding)*Ni,Math.max(-.05,Math.min(.05,.8*Math.atan2(l(c[0]*9,c[1]*9)-l(-c[0]*9,-c[1]*9),18)))+.2*u+Un(i.flooding,i.id)*Ni);r.uniformMatrix4fv(n(`uModel`),!1,d.matrix),r.uniformMatrix3fv(n(`uNM`),!1,d.normal),r.uniform1f(n(`uBootZ`),Jr(i.cls)),r.uniform1f(n(`uWound`),0);let f=e.hullVao(i);if(r.bindVertexArray(f.vao),r.drawArrays(r.TRIANGLES,0,f.vertexCount),r.uniform1f(n(`uBootZ`),-1e6),!(e.showMounts!==void 0&&!e.showMounts(i))){for(let t of qr(i.cls)){let a=i.subsystems[t.mountId],o=i.mounts.find(e=>e.mountId===t.mountId)?.trainDeg??t.restDeg,s=Mi(d.matrix,t.seat,-o);r.uniformMatrix4fv(n(`uModel`),!1,s.matrix),r.uniformMatrix3fv(n(`uNM`),!1,s.normal),r.uniform1f(n(`uWound`),zn(a));let c=e.mountVao(i.cls,t,a===`out`);r.bindVertexArray(c.vao),r.drawArrays(r.TRIANGLES,0,c.vertexCount)}r.uniform1f(n(`uWound`),0)}}}function Fi(e,t){return t?gi(e.verts,e.mountId):e.verts}var Ii=`#version 300 es
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
}`,Li=`#version 300 es
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
}`,Ri=`#version 300 es
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
}`,zi=`#version 300 es
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
}`,Bi=16,Vi=7,Hi=80,Ui={fore:.3,mid:.02,aft:-.3};function Wi(e){let t=J(e,Ii,Li),r=J(e,Ri,zi),i=ar(e);return{draw(a,o,s,c,l,u,d,f){let p=a.filter(e=>e.fires.length>0);if(p.length===0)return;let m=c.eye[0]-c.target[0],h=c.eye[1]-c.target[1],g=c.eye[2],_=Math.hypot(m,h,g)||1,v=[m/_,h/_,g/_],y=Math.hypot(v[1],v[0])||1,b=[-v[1]/y,v[0]/y,0],x=[v[1]*b[2]-v[2]*b[1],v[2]*b[0]-v[0]*b[2],v[0]*b[1]-v[1]*b[0]],S=[...p].sort((e,t)=>{let n=o(e),r=o(t);return Math.hypot(r.x-c.eye[0],r.y-c.eye[1])-Math.hypot(n.x-c.eye[0],n.y-c.eye[1])}),C=[],w=[],T=[];for(let e of S){let t=o(e),r=s(e)*Math.PI/180,i=[Math.sin(r),Math.cos(r)],a=W[e.cls].lengthMetres;e.fires.forEach((r,o)=>{let s=(Ui[r.zone]??0)*a,c={x:t.x+i[0]*s,y:t.y+i[1]*s},p=B(e.id)+o*977|0,m=r.intensity,h=.62-.55*Gi(.35,.85,m),g=45+250*m,_=K(Bi);for(let e=0;e<_;e+=1){let t=n(p,e*3),r=(t+l/Hi)%1,i=r*g,a=(n(p,e*3+1)-.5)*(5+.1*i),s=(n(p,e*3+2)-.5)*(5+.1*i),_=.3*i+40*r*r,v=.5+.5*Math.sin(u*.011+e*2.7+p);C.push({pos:{x:c.x+d[0]*_+a,y:c.y+d[1]*_+s},z:4+i,r:(10+.3*i+14*m)*(.8+.4*n(p,e*3+7)),alpha:m*.72*(1-r)**.7*(.75+.25*t),col:[h*f[0],h*f[1],h*f[2]],seed:t*9+o,ph:r,ember:Gi(25,0,i)*m*v*.8})}let v=K(Vi);for(let e=0;e<v;e+=1){let t=n(p,100+e*3),r=(25+300*t)*(.4+.6*m),i=(n(p,101+e*3)-.5)*(10+.12*r),a=h+(.74-h)*.65;C.push({pos:{x:c.x+d[0]*r-d[1]*i,y:c.y+d[1]*r+d[0]*i},z:6+16*t,r:17+.12*r,alpha:.3*m*(1-t*.75),col:[a*f[0],a*f[1],a*f[2]],seed:t*9+o+.5,ph:t,ember:0})}let y=[i[1],-i[0]],b=6+Math.round(m*8);for(let e=0;e<b;e+=1){let t=(n(p,200+e*4)-.5)*2*(5+9*m),r=(n(p,201+e*4)-.5)*2*(2.5+3.5*m),a=.5+.5*Math.sin(u*(.009+.004*n(p,202+e*4))+e*2.1+p);w.push({pos:{x:c.x+i[0]*t+y[0]*r,y:c.y+i[1]*t+y[1]*r},z:5.6+(n(p,203+e*4)-.5)*1.8,r:(1.6+2.6*n(p,204+e*4))*(.8+.5*m),alpha:.75*m,col:[(3.5+8*m)*(.55+.7*n(p,205+e*4))*(.85+.35*a),0,0],seed:e*3.3+p%7,ph:a,ember:0})}for(let e=0;e<3;e+=1){let t=.6+.4*Math.sin(u*.007+e*2.9+p);T.push({pos:{x:c.x+(n(p,300+e)-.5)*(6+8*m),y:c.y+(n(p,301+e)-.5)*(5+5*m)},z:5.4,r:(4+7*m)*(.8+.4*n(p,302+e)),alpha:.3*m*t,col:[1,.52,.2],seed:e*1.7+p%5,ph:t,ember:.9})}})}e.enable(e.BLEND),e.depthMask(!1),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.useProgram(t.program),e.bindVertexArray(i),e.uniformMatrix4fv(t.uniform(`uVP`),!1,c.viewProjection),e.uniform3f(t.uniform(`uRight`),b[0],b[1],b[2]),e.uniform3f(t.uniform(`uUp`),x[0],x[1],x[2]);for(let n of C)e.uniform3f(t.uniform(`uPos`),n.pos.x,n.pos.y,n.z),e.uniform1f(t.uniform(`uR`),n.r),e.uniform3f(t.uniform(`uCol`),n.col[0],n.col[1],n.col[2]),e.uniform1f(t.uniform(`uA`),n.alpha),e.uniform1f(t.uniform(`uSeed`),n.seed),e.uniform1f(t.uniform(`uPh`),n.ph),e.uniform1f(t.uniform(`uEmber`),n.ember),e.drawArrays(e.TRIANGLES,0,6);e.blendFunc(e.SRC_ALPHA,e.ONE),e.useProgram(t.program),e.uniform3f(t.uniform(`uRight`),1,0,0),e.uniform3f(t.uniform(`uUp`),0,1,0);for(let n of T)e.uniform3f(t.uniform(`uPos`),n.pos.x,n.pos.y,n.z),e.uniform1f(t.uniform(`uR`),n.r),e.uniform3f(t.uniform(`uCol`),n.col[0],n.col[1],n.col[2]),e.uniform1f(t.uniform(`uA`),n.alpha),e.uniform1f(t.uniform(`uSeed`),n.seed),e.uniform1f(t.uniform(`uPh`),n.ph),e.uniform1f(t.uniform(`uEmber`),n.ember),e.drawArrays(e.TRIANGLES,0,6);e.useProgram(r.program),e.uniformMatrix4fv(r.uniform(`uVP`),!1,c.viewProjection),e.uniform3f(r.uniform(`uCam`),c.eye[0],c.eye[1],c.eye[2]);for(let t of w)e.uniform3f(r.uniform(`uPos`),t.pos.x,t.pos.y,t.z),e.uniform1f(r.uniform(`uW`),t.r*2),e.uniform1f(r.uniform(`uH`),t.col[0]),e.uniform1f(r.uniform(`uA`),t.alpha),e.uniform1f(r.uniform(`uSeed`),t.seed),e.uniform1f(r.uniform(`uFlick`),t.ph),e.drawArrays(e.TRIANGLES,0,6);e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null)}}}function Gi(e,t,n){let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)}var Ki=2.6,qi=48,Ji=.45,Yi=new Set(Object.values(h).map(e=>e.torpedo));function Xi(e){return Yi.has(e)}function Zi(e){let t=Le[e.type].rangeMetres-e.runMetresLeft,n=e.headingDeg*Math.PI/180;return{x:e.pos.x-Math.sin(n)*t,y:e.pos.y-Math.cos(n)*t}}function Qi(e,t,n){return(t-e.firedAtTick)*n}function $i(e,t,n){if(!Xi(e.type))return null;let r=Qi(e,t,n);if(r<0||r>=2.6)return null;let i=r/Ki,a=Zi(e),o=e.headingDeg*Math.PI/180,s=Math.sin(o),c=Math.cos(o),l=qi*(1-i);return{fall:i,x:a.x-s*l,y:a.y-c*l,z:55*(1-i*i),pitchR:Ji*i,entryX:a.x,entryY:a.y}}function ea(e,t,n){return $i(e,t,n)!==null}function ta(e,t,n,r){if(!Xi(e.type))return null;let i=Qi(e,t,n)-Ki;if(i<0||i>r)return null;let a=Zi(e);return[a.x,a.y,7,i]}function na(e){return Le[e].speedKnots*.5144444444444445>19?5.1:7.2}var ra=8,ia=6;function aa(e,t,n,r){let i=(n+r)/2,a=(n-r)/2,o=2/3.1,s=[];for(let n=0;n<ra;n+=1){let r=n/ra*2*Math.PI,c=Math.cos(r),l=Math.sin(r);s.push([Math.sign(c)*Math.abs(c)**o*t,e,i+Math.sign(l)*Math.abs(l)**o*a])}return s}function oa(e,t){let n=[];for(let r=0;r<ia;r+=1){let i=r/ia*2*Math.PI,a=t.le-t.chord*(1-Math.cos(i))/2,o=Math.sin(i)*t.thick/2;n.push(e?[t.rise-o,a,t.at]:[t.at,a,t.rise+o])}return n}function sa(e,t,n,r,i){e.skin(n.map(e=>oa(t,e)),(e,t)=>e<t/2?r:i)}function ca(e,t,n,r){let{semiSpan:i,leY:a,chord:o,z:s,dihedralRise:c,shape:l}=t,u=[];for(let e=-1;e<=1;e+=2){let t=l.map(([t,n,r,l])=>({at:e*t*i,le:a-o*l,chord:o*n,thick:o*.115*r,rise:s+c*t}));u.push(...e===-1?t.reverse():t.slice(1))}sa(e,!1,u,n,r)}function la(e,t,n,r,i,a,o,s=6){let c=e=>{let t=[];for(let a=0;a<s;a+=1){let o=a/s*2*Math.PI;t.push([e,n+Math.cos(o)*i,r+Math.sin(o)*i])}return t};e.skin([c(t-a/2),c(t+a/2)],o,!1,!1)}var ua=[.317,.328,.343],da=[.166,.174,.186],fa=[[.5,.006],[.4,.038],[-.24,.0435],[-.4,.031],[-.482,.0155]],pa=6;function ma(e,t,n,r,i){let a=(e,a)=>{let o=[];for(let s=0;s<pa;s+=1){let c=s/pa*2*Math.PI;o.push([n+Math.cos(c)*a*t,r+e*t,i+Math.sin(c)*a*t])}return o};e.skin(fa.map(([e,t])=>a(e,t)),ua);let o=t*.068,s=r-t*.43,c=t*.058,l=t*.006;for(let t of[!1,!0]){let r=e=>[[-c,-l],[c,-l],[c,l],[-c,l]].map(([r,a])=>t?[n+a,s+e,i+r]:[n+r,s+e,i+a]);e.skin(t?[r(-o),r(o)]:[r(o),r(-o)],da,!1,!1)}}var ha=[.243,.283,.256],ga=[.281,.305,.318],_a=[.6,.632,.575],va=[.198,.21,.222],$=[.166,.174,.186],ya=[.082,.09,.1],ba=[[0,1,1,0],[.88,.93,.88,.025],[1,.34,.44,.2]];function xa(e){sa(e,!0,[{at:.16,le:-3.45,chord:1.97,thick:.2,rise:0},{at:1.24,le:-3.63,chord:1.78,thick:.14,rise:0},{at:1.6,le:-4.28,chord:.86,thick:.07,rise:0}],ga,ga)}function Sa(e){e.skin([[4.3,.54,.6,-.58],[1.35,.53,.8,-.7],[-1.15,.49,.74,-.66],[-3.4,.31,.54,-.42],[-5.2,.11,.35,-.14]].map(([e,t,n,r])=>aa(e,t,n,r)),(e,t)=>e<t/2?ga:_a,!1,!1)}function Ca(e){e.skin([aa(5.02,.63,.63,-.63),aa(4.56,.66,.66,-.66),aa(4.3,.58,.6,-.6)],va,!0,!1);for(let t=0;t<3;t+=1){let n=t/3*2*Math.PI,r=Math.cos(n),i=Math.sin(n),a=(e,t,n)=>[[t/2,-n/2],[t/2,n/2],[-t/2,n/2],[-t/2,-n/2]].map(([t,n])=>{let a=.5,o=t*Math.cos(a)-n*Math.sin(a),s=t*Math.sin(a)+n*Math.cos(a);return[r*e-i*s,5.28+o,i*e+r*s]});e.skin([a(.2,.28,.07),a(1.56,.16,.04)],va,!1,!1)}}function wa(e,t,n){for(let r of[-1,1]){e.rod([r*.5,2.9,.68],[r*.74,2.68,t],.06,$,4),e.rod([r*.5,1.5,.76],[r*.74,1.72,t],.06,$,4);let i=3.55,a=n+.26;e.rod([r*i,1.62,a],[r*i,2.44,t],.06,$,4),e.rod([r*i,.36,a],[r*i,1.18,t],.06,$,4),e.rod([r*.3,-3.55,-.5],[r*1.32,-4.02,-.16],.05,$,4)}}function Ta(e){for(let t of[-1,1]){let n=[t*1.44,1.74,-1.74];e.rod([t*.46,2.24,-.6],n,.075,$,4),e.rod([t*.46,1.16,-.64],n,.075,$,4),la(e,t*1.43,1.74,-1.74,.4,.26,$,8)}e.rod([0,-4.62,-.28],[0,-4.72,-.62],.07,$,4),la(e,0,-4.72,-.66,.19,.14,$,6)}function Ea(e,t,n,r,i){let a=dr(h.swordfish.insignia);if(a!==void 0){if(a.roundel!==void 0){let o=t+r*.115*.47;for(let t of[-1,1])pr(e,a.roundel,t*i*.58,n-r/2,o,r*.36)}a.finFlash!==void 0&&mr(e,a.finFlash,.105,-4.32,-5.16,.42,1.2)}}function Da(e,t){let n=1.3,r=-.66,i=6.935,a=2.03;Sa(e),Ca(e);let o=2.02,s={semiSpan:i,chord:a,shape:ba};ca(e,{...s,leY:o,z:r,dihedralRise:.34},ha,_a),ca(e,{...s,leY:o,z:n,dihedralRise:0},ha,_a),ca(e,{semiSpan:2,chord:1.24,shape:ba,leY:-3.62,z:-.18,dihedralRise:.06},ha,_a),xa(e),wa(e,n,r),Ta(e),Ea(e,n,o,a,i),e.box(0,-.45,.3,.68,3.9,.56,ya),t&&ma(e,5.1,0,.36,-1.46)}var Oa={swordfish:Da};function ka(e,t){let n=new Float32Array(e.out);for(let e=0;e<n.length;e+=10)n[e]=n[e]*t,n[e+1]=n[e+1]*t,n[e+2]=n[e+2]*t,n[e+9]=n[e+9]*t;return n}var Aa=new Map;function ja(e){let t=Math.round(e*100),n=Aa.get(t);if(n!==void 0)return n;let r=new Z;ma(r,e,0,0,0);let i={verts:ka(r,2)};return Aa.set(t,i),i}var Ma=new Map;function Na(e,t){let n=`${e}:${t?`armed`:`clean`}`,r=Ma.get(n);if(r!==void 0)return r;let i=new Z;Oa[e](i,t);let a={verts:ka(i,2)};return Ma.set(n,a),a}var Pa=.514444,Fa=60,Ia=55,La=95;function Ra(e){return e===`withdrawing`?La:Ia}var za=.05,Ba=.7,Va=.45,Ha=[0,0,1],Ua=.46;function Wa(e){if(e===0)return{back:0,out:0};let t=Math.ceil(e/2),n=e%2==1?-1:1;return{back:t*Fa,out:n*t*Fa}}function Ga(e,t){let n=t.ships.find(e=>e.side===`raider`);if(n===void 0||e.phase!==`approach`)return 0;let r=(Math.atan2(n.motion.pos.x-e.pos.x,n.motion.pos.y-e.pos.y)*180/Math.PI-e.headingDeg+540)%360-180;return Math.max(-.7,Math.min(Ba,r*za))}function Ka(e){let t=new Map,n=(n,r)=>{let i=t.get(n);if(i!==void 0)return i;let a=ir(e,r());return t.set(n,a),a},r=(e,t)=>n(`${e}:${t?`armed`:`clean`}`,()=>Na(e,t).verts),i=e=>n(`fish:${e.toFixed(2)}`,()=>ja(e).verts);return{draw(t,n,a,o,s,c){let l=t.tick+Math.min(1,Math.max(0,a)),u=t.torpedoes.map(e=>({fish:e,drop:$i(e,l,o)})).filter(e=>e.drop!==null);if(t.flights.length===0&&u.length===0)return;let d=e=>n.uniform(e);e.uniform1f(d(`uBootZ`),-1e6);let f=Math.min(1,Math.max(0,a)),p=[];for(let e of t.flights){let n=h[e.aircraft].speedKnots*Pa*o*f,i=e.headingDeg*Math.PI/180,a=Math.sin(i),s=Math.cos(i),c={x:e.pos.x+a*n,y:e.pos.y+s*n},l=e.phase===`approach`,u=l?Ia:La,d=Ga(e,t);for(let t=0;t<e.count;t+=1){let n=Wa(t),i=ki({x:c.x-a*n.back-s*n.out,y:c.y-s*n.back+a*n.out},e.headingDeg,u,0,d);p.push({matrix:i.matrix,normal:i.normal,vao:r(e.aircraft,l)})}}for(let{fish:e,drop:t}of u){if(t===null)continue;let n=ki({x:t.x,y:t.y},e.headingDeg,t.z,-t.pitchR,0);p.push({matrix:n.matrix,normal:n.normal,vao:i(na(e.type))})}e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1);let m=(t,n)=>{e.uniform1f(d(`uShadow`),t);for(let t of p)e.uniformMatrix4fv(d(`uModel`),!1,Ai(t.matrix,n,Va)),e.uniformMatrix3fv(d(`uNM`),!1,t.normal),e.bindVertexArray(t.vao.vao),e.drawArrays(e.TRIANGLES,0,t.vao.vertexCount)};m(Ua,Ha),m(.3+.32*Math.min(1,Math.max(0,c)),s),e.depthMask(!0),e.disable(e.BLEND),e.uniform1f(d(`uShadow`),0);for(let t of p)e.uniformMatrix4fv(d(`uModel`),!1,t.matrix),e.uniformMatrix3fv(d(`uNM`),!1,t.normal),e.bindVertexArray(t.vao.vao),e.drawArrays(e.TRIANGLES,0,t.vao.vertexCount);e.bindVertexArray(null)}}}var qa=`#version 300 es
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
}`,Ja=`#version 300 es
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
}`,Ya=16,Xa=3.4,Za=5,Qa=9,$a=26,eo=3,to=[1,.84,.54],no=[.93,.95,.98],ro=[1,.77,.43],io=[.25,.26,.29],ao=12;function oo(e){let t=J(e,qa,Ja),n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);let a=ao*4;for(let t=0;t<3;t+=1)e.enableVertexAttribArray(1+t),e.vertexAttribPointer(1+t,4,e.FLOAT,!1,a,t*16),e.vertexAttribDivisor(1+t,1);e.bindVertexArray(null);let o=new Float32Array(512*ao),s=0,c=(e,t,n,r,i,a)=>{if((s+1)*ao>o.length){let e=new Float32Array(o.length*2);e.set(o),o=e}let c=s*ao;o.set([e[0],e[1],e[2],n],c),o.set([t[0],t[1],t[2],r],c+4),o.set([i[0],i[1],i[2],a],c+8),s+=1},l=(e,t)=>{let n=Ra(`approach`),r=1/0;for(let i of e.flights){let e=Math.hypot(i.pos.x-t.to.x,i.pos.y-t.to.y);e<r&&(r=e,n=Ra(i.phase))}return n};return{draw(r,a,d){s=0;let f=r.tick+u(d),p=r.ships.find(e=>e.side===`raider`)?.cls;for(let e of r.aaFire??[]){let t=e.to.x-e.from.x,n=e.to.y-e.from.y,i=Math.hypot(t,n);if(i<1)continue;let a=e.style===`tracer`,o=i/(a?St:Ct),s=Tt(e),u=l(r,e),d=K(Et(e)),m=At(e,p);for(let t=0;t<d;t+=1){let n=f-Dt(e,s,t,d);if(n<0)continue;let r=jt(e,s,t,i),l=n/o,p=m[t%2],h=e=>[p.x+(r.x-p.x)*e,p.y+(r.y-p.y)*e,Ya+(u-Ya)*e];if(l<=1){c(h(Math.max(0,l-(a?.055:.035))),h(l),a?Xa:Za,a?.95:1,a?to:no,0);continue}if(a)continue;let g=(n-o)/wt;if(g>=1)continue;let _=h(1);if(g<.12){let e=g/.12;c(_,_,Qa*(.7+.9*e),.95*(1-e),ro,1)}let v=O(g),y=.6*(1-g),b=K(eo);for(let e=0;e<b;e+=1){let n=k(s,t,10+e)*Math.PI*2,r=Qa*.9*v*(.4+k(s,t,13+e)),i=(Qa+($a-Qa)*v)*(.7+.5*k(s,t,16+e)),a=[_[0]+Math.cos(n)*r,_[1]+Math.sin(n)*r,_[2]+(k(s,t,22+e)-.5)*r];c(a,a,i,y*(.7+.3*k(s,t,19+e)),io,1)}}}s!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(n),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,o.subarray(0,s*ao),e.DYNAMIC_DRAW),e.uniformMatrix4fv(t.uniform(`uVP`),!1,a.viewProjection),e.uniform3f(t.uniform(`uEye`),a.eye[0],a.eye[1],a.eye[2]),e.drawArraysInstanced(e.TRIANGLES,0,6,s),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}var so=.55,co=.3,lo=6,uo=16,fo=981,po={fore:.3,mid:.02,aft:-.3};function mo(e){let t=e.steps??1;return e.outcome===`penetrated`||e.outcome===`wrecked`?Math.min(uo,lo*t):e.outcome===`overpenetrated`?Math.min(uo,Math.round(lo*.6*t)):Math.min(uo,Math.round(lo*.7))}function ho(e){return e.outcome===`bounced`||e.outcome===`smothered`}function go(e,t,r,i,a,o){let s=ho(e),c=s?co:so;if(a<0||a>=c)return[];let l=e.steps??1,u=[];for(let e=0;e<o;e+=1){let o=s?.55:2.2,d=i+(n(t,e*4)-.5)*2*o,f=s?.12+n(t,e*4+1)*.35:.15+n(t,e*4+1)*1.1,p=s?600+n(t,e*4+2)*600:(140+n(t,e*4+2)*260)*(.75+.25*l),m=e=>{let t=Math.cos(f)*p*e;return[r.x+Math.sin(d)*t,r.y+Math.cos(d)*t,r.z+Math.sin(f)*p*e-.5*fo*e*e]},h=m(a);if(h[2]<=0)continue;let g=m(Math.max(0,a-(s?.02:.01))),_=1-a/c;u.push({x:h[0],y:h[1],z:h[2],px:g[0],py:g[1],pz:g[2],halfWidth:s?.55+n(t,e*4+3)*.5:(.6+n(t,e*4+3)*.9)*(.75+.25*l),alpha:s?_:_*.92,hot:s?.85+.15*n(t,e*4+3):.18*_})}return u}var _o=[.2,.198,.196],vo=[1,.82,.5],yo=12,bo=1024;function xo(e){let t=J(e,qa,Ja),n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);let a=yo*4;for(let t=0;t<3;t+=1)e.enableVertexAttribArray(1+t),e.vertexAttribPointer(1+t,4,e.FLOAT,!1,a,t*16),e.vertexAttribDivisor(1+t,1);e.bindVertexArray(null);let o=new Float32Array(bo*yo);return{draw(r,a,s,c,l){let u=0,d=r.tick+l;for(let e of r.falls){let t=e.sites;if(t===void 0||t.length===0)continue;let n=d-e.tick-at(e);if(n<0||n>=.55)continue;let i=r.ships.find(t=>t.id===e.targetId),c=r.ships.find(t=>t.id===e.shooterId);if(i===void 0)continue;let l=a(i),f=s(i)*Math.PI/180,p=[Math.sin(f),Math.cos(f)],m=W[i.cls].lengthMetres,h=c===void 0?null:a(c),g=h===null?f:Math.atan2(l.x-h.x,l.y-h.y);t.forEach((t,r)=>{if(ho(t)&&n>=.3)return;let i=(po[t.zone]??0)*m,a={x:l.x+p[0]*i,y:l.y+p[1]*i,z:11},s=go(t,B(`${e.shooterId}:${e.targetId}`)+e.tick*7919+r*131|0,a,g,n,K(mo(t)));for(let e of s){if(u>=bo)return;let t=u*yo;o[t]=e.px,o[t+1]=e.py,o[t+2]=e.pz,o[t+3]=e.halfWidth,o[t+4]=e.x,o[t+5]=e.y,o[t+6]=e.z,o[t+7]=e.alpha,o[t+8]=_o[0]+(vo[0]-_o[0])*e.hot,o[t+9]=_o[1]+(vo[1]-_o[1])*e.hot,o[t+10]=_o[2]+(vo[2]-_o[2])*e.hot,o[t+11]=e.hot*.35,u+=1}})}u!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(n),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,o.subarray(0,u*yo),e.DYNAMIC_DRAW),e.uniformMatrix4fv(t.uniform(`uVP`),!1,c.viewProjection),e.uniform3f(t.uniform(`uEye`),c.eye[0],c.eye[1],c.eye[2]),e.drawArraysInstanced(e.TRIANGLES,0,6,u),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}var So=[.075,.065,.058],Co=[.42,.36,.31],wo=12,To=512;function Eo(e){let t=J(e,qa,Ja),n=e.createVertexArray();if(n===null)throw Error(`vao allocation failed`);e.bindVertexArray(n);let r=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,8,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i);let a=wo*4;for(let t=0;t<3;t+=1)e.enableVertexAttribArray(1+t),e.vertexAttribPointer(1+t,4,e.FLOAT,!1,a,t*16),e.vertexAttribDivisor(1+t,1);e.bindVertexArray(null);let o=new Float32Array(To*wo);return{draw(r,a,s,c){let l=0;for(let e of r){if(e.sunk)continue;let t=e.burns??we,n=e.plating??we;if(!V(t,n))continue;let r=W[e.cls],i=a(e),c=s(e)*Math.PI/180,u=[Math.sin(c),Math.cos(c)],d=[Math.cos(c),-Math.sin(c)],f=r.beamMetres*.42;for(let a of He(e.id,t,n)){if(l>=To)break;let e=a.along*r.lengthMetres,t=a.across*r.beamMetres/2,n=i.x+u[0]*e+d[0]*t,s=i.y+u[1]*e+d[1]*t,c=f+(a.kind===`soot`?1.2+a.up*2.5:.4),p=a.size*r.beamMetres*.5,m=a.kind===`soot`?So:Co,h=l*wo;o[h]=n,o[h+1]=s,o[h+2]=c,o[h+3]=p,o[h+4]=n,o[h+5]=s,o[h+6]=c,o[h+7]=a.weight*(a.kind===`soot`?.9:.8),o[h+8]=m[0],o[h+9]=m[1],o[h+10]=m[2],o[h+11]=a.kind===`soot`?1:.45,l+=1}}l!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(n),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,o.subarray(0,l*wo),e.DYNAMIC_DRAW),e.uniformMatrix4fv(t.uniform(`uVP`),!1,c.viewProjection),e.uniform3f(t.uniform(`uEye`),c.eye[0],c.eye[1],c.eye[2]),e.drawArraysInstanced(e.TRIANGLES,0,6,l),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}function Do(e,t){return[e,...(t??[]).slice(1)]}function Oo(e,t){let n=Do(e,t),r=0;for(let e=1;e<n.length;e+=1){let t=n[e-1],i=n[e];t!==void 0&&i!==void 0&&(r+=Math.hypot(i.x-t.x,i.y-t.y))}return r}function ko(e,t,n){let r=Do(e,t),i=r[0]??e,a=Math.max(0,n);for(let e=1;e<r.length;e+=1){let t=r[e];if(t===void 0)continue;let n=t.x-i.x,o=t.y-i.y,s=Math.hypot(n,o);if(s>=a&&s>0){let e=a/s;return{x:i.x+n*e,y:i.y+o*e}}a-=s,i=t}return i}function Ao(e,t,n,r){let i=ko(e,t,n),a=ko(e,t,n+1),o=a.x-i.x,s=a.y-i.y,c=Math.hypot(o,s);return c<1e-6?r:{x:o/c,y:s/c}}function jo(e){let t=e.flooding.fore.holes+e.flooding.mid.holes+e.flooding.aft.holes;return Math.min(1,t*8+Me(e.flooding)*.25)}function Mo(e,t){return e*(.9+1.9*O(t))}var No=`#version 300 es
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
}`,Po=`#version 300 es
precision highp float;
in vec2 vUV; in float vA; in float vDark; in float vSoft;
out vec4 o;
uniform vec3 uCol;
void main(){
  float d = length(vUV - 0.5) * 2.0;
  // Smooth to the edge and nothing else — the ruling's whole point.
  float a = smoothstep(1.0, vSoft, d) * vA;
  o = vec4(uCol * vDark, a);
}`,Fo=[.07,.075,.09],Io=6,Lo=9,Ro=6,zo=14,Bo=.22;function Vo(e,t){let n=jo(e);if(n<.08)return null;let r=W[e.cls],i=r.lengthMetres,a=r.beamMetres;if(!e.sunk&&e.motion.speedKnots>.5){let r=Oo(t,e.track),o=Math.min(i/2,r),s=Math.min(o+Mo(i,n),r),c=ko(t,e.track,o),l=ko(t,e.track,s);return{ax:c.x,ay:c.y,bx:l.x,by:l.y,radiusMetres:a*1.6,strength:n}}return{ax:t.x,ay:t.y,bx:t.x,by:t.y,radiusMetres:i*.45+a*1.4*(.5+.5*n),strength:n}}function Ho(e){let t=J(e,No,Po),r=e.createVertexArray();if(r===null)throw Error(`vao allocation failed`);e.bindVertexArray(r);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a);let o=Io*4;e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,o,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,o,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null);let s=new Float32Array(512*Io),c=0,l=(e,t,n,r,i,a)=>{if((c+1)*Io>s.length){let e=new Float32Array(s.length*2);e.set(s),s=e}let o=c*Io;s[o]=e,s[o+1]=t,s[o+2]=n,s[o+3]=r,s[o+4]=i,s[o+5]=a,c+=1};return{draw(i,o,u,d,f){c=0;for(let e of i){let t=W[e.cls],r=t.lengthMetres,i=t.beamMetres,a=o(e),s=u(e)*Math.PI/180,c={x:-Math.sin(s),y:-Math.cos(s)},d=B(e.id),p=jo(e);if(p>=.08)if(!e.sunk&&e.motion.speedKnots>.5){let t=Mo(r,p),o=Oo(a,e.track),s=K(Lo);for(let u=0;u<s;u+=1){let f=(u+1)/s,m=r/2+f*t;if(m>o)break;let h=ko(a,e.track,m),g=Ao(a,e.track,m,c),_=(n(d,u+30)-.5)*i*1.6*f;l(h.x-g.y*_,h.y+g.x*_,Ee(i*.45,i*1.5,O(f)),.46*p*(1-.62*f),1,.15)}}else{let e=K(Ro);for(let t=0;t<e;t+=1){let e=n(d,t+33)*2*Math.PI,o=n(d,t+40)*r*.5;l(a.x+Math.cos(e)*o,a.y+Math.sin(e)*o,i*(.9+1.2*n(d,t+47))*(.5+.5*p),.4*p,1,.1)}}let m=f(e);if(e.sunk&&m>.15){let e=r*(.35+.5*Math.min(1,m)),t=K(zo);for(let r=0;r<t;r+=1){let t=n(d,r+60)*2*Math.PI,i=e*Math.sqrt(n(d,r+80));l(a.x+Math.cos(t)*i,a.y+Math.sin(t)*i,1.2+3.4*n(d,r+100),.55*Math.min(1,m*1.6),2.6+2.4*n(d,r+120),.62)}}}c!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(r),e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,s.subarray(0,c*Io),e.DYNAMIC_DRAW),e.uniformMatrix4fv(t.uniform(`uVP`),!1,d.viewProjection),e.uniform3f(t.uniform(`uCol`),Fo[0],Fo[1],Fo[2]),e.uniform1f(t.uniform(`uSeaZ`),Bo),e.drawArraysInstanced(e.TRIANGLES,0,6,c),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}var Uo=1,Wo=new WeakMap;function Go(e){let t=Wo.get(e.verts);if(t!==void 0)return t;let n=0;for(let t=0;t<e.verts.length;t+=10){let r=e.verts[t+1];r>n&&(n=r)}let r=0,i=0;for(let t=0;t<e.verts.length;t+=10)e.verts[t+1]<n-Uo||(r+=e.verts[t+2],i+=1);let a={reachMetres:n,heightMetres:i===0?0:r/i};return Wo.set(e.verts,a),a}function Ko(e,t,n,r){let i=qr(e.cls).find(e=>e.mountId===t);if(i===void 0)return null;let a=Go(i),o=e.mounts.find(e=>e.mountId===t)?.trainDeg,s=r*Math.PI/180,[c,l,u]=i.seat,d=n.x+c*Math.cos(s)+l*Math.sin(s),f=n.y-c*Math.sin(s)+l*Math.cos(s),p=s+(o??i.restDeg)*Math.PI/180;return{x:d+Math.sin(p)*a.reachMetres,y:f+Math.cos(p)*a.reachMetres,z:u+a.heightMetres,boreRad:p}}var qo=[.815,.835,.867],Jo=[.44,.455,.486],Yo=7,Xo=46,Zo=1.6,Qo=.35,$o=6,es=.35,ts=5,ns=[1.6,1.32,.72],rs=[.58,.55,.5];function is(e,t,n){return[e[0]*t[0]*n,e[1]*t[1]*n,e[2]*t[2]*n]}function as(e){let t=J(e,Ii,Li),r=ar(e);return{draw(i,a,o,s,c,l,d,f,p){let m=[],h=i.tick+d,_=l,v=Math.floor(_/Zo),y=u((_-v*Zo)/Zo),b=(e,t)=>Math.hypot(e-c.eye[0],t-c.eye[1]);for(let e of i.smoke){let t=h-(e.expiresAtTick-g.smoke.durationTicks),r=u(1-t/g.smoke.durationTicks);if(r<=0)continue;let i=e.expiresAtTick*41+Math.round(e.pos.x)*7+Math.round(e.pos.y)|0,a=u(t/1.5),o=.7+.35*O(1-r),s=e.radiusMetres*Qo*O(1-r),c=a*(.34+.5*r),l=K(Yo);for(let t=0;t<l;t+=1){let r=n(i,t*5+v)*(1-y)+n(i,t*5+v+1)*y,a=n(i,t*5+2)*Math.PI*2,u=e.radiusMetres*.62*Math.sqrt(n(i,t*5+3)),d=s*(.4+.6*t/l),h=e.pos.x+Math.cos(a)*u+f[0]*d,g=e.pos.y+Math.sin(a)*u+f[1]*d;m.push({x:h+(r-.5)*e.radiusMetres*.14,y:g+(r-.5)*e.radiusMetres*.14,z:3+Xo*(.12+.88*n(i,t*5+4)),r:e.radiusMetres*(.36+.16*r)*o,alpha:c*.5,col:is(qo,p,1),seed:n(i,t*5+6)*9,ph:.5,d:b(h,g)})}}for(let e of a){if(e.sunk)continue;let t=Math.min(1,e.motion.speedKnots/20);if(t<=.02)continue;let r=o(e),i=s(e)*Math.PI/180,a=W[e.cls].lengthMetres,c=W[e.cls].beamMetres,l=-Math.sin(i)*t+f[0]*.45,u=-Math.cos(i)*t+f[1]*.45,d=Math.hypot(l,u)||1;for(let o of D[e.cls].funnels){let e=-o*a,s=r.x+Math.sin(i)*e,f=r.y+Math.cos(i)*e,h=Math.round(s)*31+Math.round(f)*7|0,g=c*(.9+1.5*t),_=K($o);for(let e=0;e<_;e+=1){let r=(e+1)/_,i=(n(h,e*3+v)-.5)*g*r,a=(n(h,e*3+v+1)-.5)*g*r,o=s+l/d*g*(e+1)+i,y=f+u/d*g*(e+1)+a;m.push({x:o,y,z:16+26*O(r),r:c*(.28+.5*O(r))*(.7+.6*t),alpha:.2*(.35+.65*t)*(1-.75*r),col:is(Jo,p,1),seed:n(h,e*3+2)*9,ph:r,d:b(o,y)})}}}for(let e of rt(i)){let t=(h-e.firedAtTick)*10;if(t<0||t>ts)continue;let r=a.find(t=>t.id===e.shooterId);if(r===void 0)continue;let i=Ko(r,e.mountId,o(r),s(r));if(i===null)continue;let c=i.x,l=i.y,d=e.firedAtTick*131+e.mountId.length*17|0;if(t<es){let e=t/es;m.push({x:c,y:l,z:i.z,r:(7+16*e)*(.8+.4*n(d,1)),alpha:(1-e)*.95,col:ns,seed:n(d,2)*9,ph:.2,d:b(c,l)})}let g=u(t/ts),_=30*g;m.push({x:c+f[0]*_,y:l+f[1]*_,z:i.z+10*g,r:(6+26*O(g))*(.85+.3*n(d,3)),alpha:.5*(1-g)*(1-g),col:is(rs,p,1),seed:n(d,4)*9,ph:.5,d:b(c+f[0]*_,l+f[1]*_)})}if(m.length===0)return;m.sort((e,t)=>t.d-e.d);let x=ji(c);e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(t.program),e.bindVertexArray(r),e.uniformMatrix4fv(t.uniform(`uVP`),!1,c.viewProjection),e.uniform3f(t.uniform(`uRight`),x.right[0],x.right[1],x.right[2]),e.uniform3f(t.uniform(`uUp`),x.up[0],x.up[1],x.up[2]),e.uniform1f(t.uniform(`uEmber`),0);for(let n of m)e.uniform3f(t.uniform(`uPos`),n.x,n.y,n.z),e.uniform1f(t.uniform(`uR`),n.r),e.uniform3f(t.uniform(`uCol`),n.col[0],n.col[1],n.col[2]),e.uniform1f(t.uniform(`uA`),n.alpha),e.uniform1f(t.uniform(`uSeed`),n.seed),e.uniform1f(t.uniform(`uPh`),n.ph),e.drawArrays(e.TRIANGLES,0,6);e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null)}}}var os=[[7,1,1],[13,1,-1],[19,.6,0]],ss=1.05,cs=1.75,ls=1.3,us=7,ds=4;function fs(e,t){return e*8191^Math.round(t*128)}function ps(e,t){return Math.max(1,Math.ceil(t*e/6))}function ms(e,t,r,i,a,o,s,c=1){let l=[],u=Math.max(0,Math.ceil((o-oe.wakeMetres)/6));for(let d=Math.ceil(u/c)*c;d*6<=a;d+=c){let a=d*6,c=1-(o-a)/oe.wakeMetres,u=Math.sqrt(Math.max(0,Math.min(1,c))),f=ls+(us-ls)*(1-c);for(let[o,p,m]of os){let h=m===0?(n(s+d,o)-.5)*1.6*f:m*f*(.72+.56*n(s+d,o)),g=a-n(s+d,o+3)*ds;l.push({x:e+r*g-i*h,y:t+i*g+r*h,life:c,fade:u,radiusMetres:(ss+cs*c)*p*(.62+.76*n(s+d,o+1)),seed:n(s+d,o+2)})}}return l}var hs=`#version 300 es
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
}`,gs=`#version 300 es
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
}`,_s=[.84,.93,1];function vs(e,t){let n=.55+.45*Math.min(t/2.6,1);return[_s[0]*(e[0]??1)*n,_s[1]*(e[1]??1)*n,_s[2]*(e[2]??1)*n]}var ys=6,bs=2,xs=5;function Ss(e){let r=J(e,hs,gs),i=e.createVertexArray();if(i===null)throw Error(`vao allocation failed`);e.bindVertexArray(i);let a=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,0,1,1,0,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o);let s=ys*4;e.enableVertexAttribArray(1),e.vertexAttribPointer(1,4,e.FLOAT,!1,s,0),e.vertexAttribDivisor(1,1),e.enableVertexAttribArray(2),e.vertexAttribPointer(2,2,e.FLOAT,!1,s,16),e.vertexAttribDivisor(2,1),e.bindVertexArray(null);let c=new Float32Array(4096*ys),l=0,u=(e,t,n,r,i,a)=>{if((l+1)*ys>c.length){let e=new Float32Array(c.length*2);e.set(c),c=e}let o=l*ys;c[o]=e,c[o+1]=t,c[o+2]=n,c[o+3]=r,c[o+4]=i,c[o+5]=a,l+=1},d=(e,t,n,r,i,a,o,s)=>{for(let c of ms(e,t,n,r,i,a,o,s))u(c.x,c.y,c.radiusMetres,.96*c.fade,.95+.45*c.life,c.seed)};return{draw(a,s,f,p,m,h,g){let _=a.spentTorpedoes??[];if(a.torpedoes.length===0&&_.length===0)return;l=0;let v=ps(f.metresPerPxAtTarget,bs),y=Math.min(1,Math.max(0,p-(a.tick-1)));for(let e of a.torpedoes){if(e.side===`enemy`&&!e.sighted||ea(e,p,m))continue;let r=Le[e.type].speedKnots*_e,i=e.headingDeg*Math.PI/180,o=t(e,(y-1)*r*m,a.ships,e=>s(e)),c=Math.sin(i),l=Math.cos(i),f=Le[e.type].rangeMetres-e.runMetresLeft+o,h=fs(e.firedAtTick,e.headingDeg);d(e.pos.x-c*(f-o),e.pos.y-l*(f-o),c,l,f,f,h,v);let g=e.pos.x+c*o,_=e.pos.y+l*o;for(let e=0;e<xs;e+=1){let t=-1.6*e,r=(n(h+e,41)-.5)*3.4;u(g+c*t-l*r,_+l*t+c*r,1.5+1.3*n(h+e,43),.98,1.35,n(h+e,47))}}for(let e of _){if(e.side===`enemy`&&!e.sighted)continue;let t=Le[e.type].speedKnots*_e,n=e.headingDeg*Math.PI/180,r=Math.sin(n),i=Math.cos(n),a=(p-(e.endedAtTick-1+(e.endedAtSeconds??m)/m))*m,o=a>=0?e.runMetres:Math.max(0,e.runMetres+a*t),s=o+Math.max(0,a)*t;d(e.pos.x-r*e.runMetres,e.pos.y-i*e.runMetres,r,i,o,s,fs(e.firedAtTick,e.headingDeg),v)}l!==0&&(e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.depthMask(!1),e.useProgram(r.program),e.bindVertexArray(i),e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,c.subarray(0,l*ys),e.DYNAMIC_DRAW),e.uniformMatrix4fv(r.uniform(`uVP`),!1,f.viewProjection),e.uniform3f(r.uniform(`uCol`),g[0],g[1],g[2]),e.uniform1f(r.uniform(`uMinR`),h*.6),e.drawArraysInstanced(e.TRIANGLES,0,6,l),e.depthMask(!0),e.disable(e.BLEND),e.bindVertexArray(null))}}}var Cs=2400,ws=850,Ts=300,Es=4e3,Ds=14e3,Os=10,ks=90,As=`#version 300 es
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
}`,js=`#version 300 es
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
        trkSpeed = (k == 0) ? B.z : segLen / ${Os}.0;
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
      float ageFade = clamp(1.0 - (d/max(trkSpeed, 0.5))/${ks}.0, 0.0, 1.0);
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
    float visBand = smoothstep(1.6, 4.0, ${Cs}.0 / fp);
    float visSwell = smoothstep(1.6, 4.0, ${ws}.0 / fp);
    toothVis = smoothstep(1.6, 4.0, ${Ts}.0 / fp);
    // Along the wind and across it: a running sea is drawn out down the
    // blow, so every octave is stretched along it.
    vec2 fq = vec2(dot(vPos.xy - drift, uWind), dot(vPos.xy - drift, wperp));
    farMott = mix(0.5, fbm(fq/vec2(${Cs}.0*2.6, ${Cs}.0) + 11.3), uFarBand);
    farSwell = mix(0.5, fbm(fq/vec2(${ws}.0*2.8, ${ws}.0) + 4.1), uFarBand);
    farTooth = fbm(fq/vec2(${Ts}.0*3.2, ${Ts}.0) + 19.7);
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
  fogW *= 1.0 - 0.92*smoothstep(${Ds}.0, ${Es}.0, length(vPos.xy - uHome));
  col = mix(col, uHaze, fogW);
  o = vec4(col, 1.0);
}`,Ms=60,Ns=42,Ps=34,Fs=26,Is=.27,Ls=8;function Rs(e){return e/10-1}function zs(e,t){let n=Rs(t),r=[];for(let t of e.torpedoes){if(r.length>=12)break;let e=ta(t,n,10,5);e!==null&&r.push(e)}for(let t=e.torpedoHits.length-1;t>=0&&r.length+3<=12;--t){let i=e.torpedoHits[t];if(i===void 0)continue;let a=(n-(i.tick-1))*10-(i.atSeconds??10);if(a<0||a>Fs)continue;let o=(e.ships.find(e=>e.id===i.targetId)?.motion.headingDeg??0)*Math.PI/180,s=Math.sin(o)*Ps,c=Math.cos(o)*Ps,l=a*Is;r.push([i.pos.x,i.pos.y,Ms,l]),r.push([i.pos.x+s,i.pos.y+c,Ns,l*.86]),r.push([i.pos.x-s,i.pos.y-c,Ns,l*.78])}for(let t=e.falls.length-1;t>=0&&r.length<12;--t){let i=e.falls[t];if(i===void 0)continue;let a=(n-(i.tick-1)-at(i))*10;if(a<0||a>Ls)continue;let o=e.ships.find(e=>e.id===i.shooterId),s=o===void 0?10:Ce[o.cls];r.push([i.pos.x,i.pos.y,s,a])}return r}var Bs=260,Vs=520,Hs=.9,Us=520,Ws=1.15,Gs=.16,Ks=.02;function qs(e,t,n,r){let i=[];for(let n of e.ships){if(i.length>=24)break;let e=(n.fires??[]).reduce((e,t)=>e+t.intensity,0);if(e<=Ks)continue;let r=t(n);i.push(r.x,r.y,Bs+Vs*Math.min(1,e),Hs*Math.min(1.4,e))}for(let a of rt(e)){if(i.length>=24)break;let o=Rs(r)-(a.firedAtTick-1);if(o<0||o>Gs)continue;let s=e.ships.find(e=>e.id===a.shooterId);if(s===void 0)continue;let c=Ko(s,a.mountId,t(s),n(s))??t(s);i.push(c.x,c.y,Us,Ws*(1-o/Gs))}return i}var Js=4;function Ys(e){let t=e.getExtension(`EXT_disjoint_timer_query_webgl2`),n=[],r=[],i=null,a=ze(),o=-1;function s(){if(t===null)return;let i=e.getParameter(t.GPU_DISJOINT_EXT)===!0;for(let t=n.length-1;t>=0;--t){let a=n[t];if(a===void 0||!i&&e.getQueryParameter(a,e.QUERY_RESULT_AVAILABLE)!==!0||(n.splice(t,1),r.push(a),i))continue;let s=e.getQueryParameter(a,e.QUERY_RESULT);o=o<0?s/1e6:he(o,s/1e6)}}return{begin(){a.begin(),s()},beginPlane(){if(a.beginInner(),t===null||i!==null)return;let o=r.pop()??(n.length<Js?e.createQuery():null);o!==null&&(i=o,e.beginQuery(t.TIME_ELAPSED_EXT,o))},endPlane(){a.endInner(),!(t===null||i===null)&&(e.endQuery(t.TIME_ELAPSED_EXT),n.push(i),i=null)},end(){a.end()},readout(){return Xs(a.periodMs(),a.cpuMs(),a.innerMs(),o)}}}function Xs(e,t,n,r){return[H(e),`cpu ${t.toFixed(1)} (plane ${n.toFixed(1)})`,r<0?`gpu — (no timer)`:`gpu ${r.toFixed(1)}`]}var Zs=16/2;function Qs(e,t){let n=[e];for(let e of(t??[]).slice(1,16))n.push(e);let r=n[n.length-1]??e;for(;n.length<16;)n.push(r);let i=[];for(let e=0;e<16;e+=2)i.push(n[e].x,n[e].y,n[e+1].x,n[e+1].y);return i}var $s=`#version 300 es
precision highp float;
layout(location=0) in vec3 aPos; layout(location=1) in vec3 aNrm;
layout(location=2) in vec3 aCol; layout(location=3) in float aShipZ;
uniform mat4 uVP; uniform mat4 uModel; uniform mat3 uNM;
out vec3 vN; out vec3 vC; out vec3 vW; out float vZ;
void main(){
  vec4 w = uModel * vec4(aPos, 1.0);
  vW = w.xyz; vN = normalize(uNM * aNrm); vC = aCol; vZ = aShipZ;
  gl_Position = uVP * w;
}`,ec=`#version 300 es
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
  fog *= 1.0 - 0.92*smoothstep(${Ds}.0, ${Es}.0, length(vW.xy - uHome));
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
}`,tc=`#version 300 es
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
}`,nc=`#version 300 es
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
}`,rc=300,ic=9e3,ac=3e5;function oc(e){let t=e.getContext(`webgl2`,{antialias:!0,alpha:!1});if(t===null)throw Error(`WebGL2 unavailable`);let n=J(t,As,js),r=J(t,$s,ec),i=J(t,tc,nc),a=rr(t,rc),s=Ys(t),c=Wi(t),l=Ss(t),u=Ka(t),d=oo(t),f=xo(t),p=Eo(t),m=as(t),h=Ho(t),g=1,_=(()=>{let e=new URLSearchParams(window.location.search).get(`glwx`);return e!==null&&e in de?e:null})(),v=new URLSearchParams(window.location.search).get(`glfar`)===`0`?0:1,b=new URLSearchParams(window.location.search).get(`glarms`)===`0`?0:1,x=()=>{let e=window.__KR_NIGHTX__;if(typeof e==`number`&&e>0)return e;let t=Number(new URLSearchParams(window.location.search).get(`nightx`));return Number.isFinite(t)&&t>0?t:null},S=0,C=0,w=ar(t);Ar();let T=Or(),E=new Map,D=new Map,O=()=>{let e=Or();if(e!==T){T=e;for(let{vao:e,buffer:n}of E.values())t.deleteVertexArray(e),t.deleteBuffer(n);for(let{vao:e,buffer:n}of D.values())t.deleteVertexArray(e),t.deleteBuffer(n);E.clear(),D.clear()}},ee=(e,n,r)=>{let i=`${e}:${n.mountId}:${r?`wreck`:`sound`}`,a=D.get(i);if(a!==void 0)return a;let o=ir(t,Fi(n,r));return D.set(i,o),o},k=(e,n)=>{let r=`${e.cls}:${+!!n}`,i=E.get(r);if(i!==void 0)return i;let a=ir(t,Qr(e.cls,n).verts);return E.set(r,a),a};return{resize(n,r,i){g=i,S=n,C=r,e.width=Math.round(n*i),e.height=Math.round(r*i),e.style.width=`${n}px`,e.style.height=`${r}px`,t.viewport(0,0,e.width,e.height)},render(e,T,E,D,A){s.beginPlane(),O();let te=Fe(e.setting,e.tick,{x:0,y:0}),ne=Ke(y(e.setting,e.tick),ce(e.setting.anchor,{x:0,y:0})),j=te.dark?`night`:ne<9?`twilight`:`day`,M=_??te.weather,N=de[M],re=+(M===`clear`||M===`overcast`),ie=j===`night`?x():null,P=j===`night`?ie===null?Ie:Re(Be.night,ie):Be[j],F=ue(e.setting.weatherSeed),ae=je(M,F),oe=P.alt*Math.PI/180,se=P.az*Math.PI/180,le=[Math.sin(se)*Math.cos(oe),Math.cos(se)*Math.cos(oe),Math.sin(oe)],I=[P.hazeCol[0]*N.skyMul,P.hazeCol[1]*N.skyMul,P.hazeCol[2]*N.skyMul];t.enable(t.DEPTH_TEST),t.clearColor(I[0],I[1],I[2],1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.useProgram(n.program);let L=e=>n.uniform(e);t.uniformMatrix4fv(L(`uVP`),!1,E.viewProjection);let fe=Ti(E,S,C),pe=Math.min(Math.max(fe.spanMetres,ic),ac),he=Ei(fe.centreX,fe.centreY,pe,rc);t.uniform2f(L(`uOrigin`),he.x,he.y),t.uniform1f(L(`uExtent`),pe),t.uniform1f(L(`uFarOn`),v),t.uniform1f(L(`uArmsOn`),b),t.uniform1i(L(`uTrackN`),o(16)),t.uniform1f(L(`uFarBand`),N.farBand),t.uniform1f(L(`uT`),D);let R=new Float32Array(16),ge=new Float32Array(8);ae.forEach((e,t)=>{R.set([e.dx,e.dy,e.k,e.a],t*4),ge.set([e.w,e.q],t*2)}),t.uniform4fv(L(`uWaveA`),R),t.uniform2fv(L(`uWaveB`),ge),t.uniform3f(L(`uCam`),E.eye[0],E.eye[1],E.eye[2]),t.uniform3fv(L(`uSunDir`),le),t.uniform3fv(L(`uSunCol`),Array.from(P.sun)),t.uniform1f(L(`uSunI`),P.sunI),t.uniform3fv(L(`uDeep`),[N.deep[0]*P.tint[0],N.deep[1]*P.tint[1],N.deep[2]*P.tint[2]]),t.uniform3fv(L(`uSkyTo`),[P.skyTo[0]*N.skyMul,P.skyTo[1]*N.skyMul,P.skyTo[2]*N.skyMul]),t.uniform3fv(L(`uSkyAway`),[P.skyAway[0]*N.skyMul,P.skyAway[1]*N.skyMul,P.skyAway[2]*N.skyMul]),t.uniform1f(L(`uSpec`),N.spec),t.uniform1f(L(`uGlitter`),N.glitter*(j===`night`?ke:1)),t.uniform1f(L(`uGlitZ`),Math.min(1,Math.max(.4,E.metresPerPxAtTarget/1.1)));let _e=E.metresPerPxAtTarget/Math.max(g,.5);t.uniform1f(L(`uGlitFreq`),Math.min(1.35,1/(3*_e))),t.uniform1f(L(`uFoamAmt`),N.foam),t.uniform1f(L(`uFoamThresh`),N.foamThresh),t.uniform3fv(L(`uFoamTint`),Array.from(P.foamTint)),t.uniform1f(L(`uStreak`),N.streak),t.uniform2f(L(`uWind`),Math.sin(F),Math.cos(F)),t.uniform1f(L(`uSeaAmp`),N.amp),t.uniform3fv(L(`uHaze`),I),t.uniform2f(L(`uHazeP`),N.haze,N.hazeMax),t.uniform1f(L(`uHazeLift`),re);let ve=e.ships.find(e=>e.side===`raider`)??e.ships[0],ye=ve===void 0?{x:0,y:0}:T.posOf(ve);t.uniform2f(L(`uHome`),ye.x,ye.y);let be=qs(e,T.posOf,T.headingOf,D),xe=new Float32Array(24);xe.set(be),t.uniform1i(L(`uEmitCount`),Math.floor(be.length/4)),t.uniform4fv(L(`uEmit`),xe);let Se=e.ships.filter(e=>A.hide?.(e)!==!0).sort((e,t)=>{let n=T.posOf(e),r=T.posOf(t);return Math.hypot(n.x-E.target[0],n.y-E.target[1])-Math.hypot(r.x-E.target[0],r.y-E.target[1])}).slice(0,6),z=new Float32Array(24),Ce=new Float32Array(24),we=new Float32Array(24),Te=new Float32Array(12),Ee=new Float32Array(6*Zs*4);Se.forEach((e,t)=>{let n=T.posOf(e),r=T.headingOf(e)*Math.PI/180,i=W[e.cls],a=A.sinkOf?.(e)??(e.sunk?.65:0);z.set([n.x,n.y,Math.sin(r),Math.cos(r)],t*4),Ce.set([i.lengthMetres,i.beamMetres,e.motion.speedKnots*.5144,Math.min(a,1.2)],t*4),Ee.set(Qs(n,e.track),t*Zs*4);let o=Vo(e,n);o!==null&&(we.set([o.ax,o.ay,o.bx,o.by],t*4),Te.set([o.radiusMetres,o.strength],t*2))}),t.uniform1i(L(`uShipCount`),Se.length),t.uniform4fv(L(`uShipA`),z),t.uniform4fv(L(`uShipB`),Ce),t.uniform4fv(L(`uSlickA`),we),t.uniform2fv(L(`uSlickB`),Te),t.uniform4fv(L(`uTrack`),Ee);let De=zs(e,D),B=new Float32Array(48);De.forEach((e,t)=>B.set(e,t*4)),t.uniform1i(L(`uSplashCount`),De.length),t.uniform4fv(L(`uSplash`),B),t.bindVertexArray(a.vao),t.drawElements(t.TRIANGLES,a.indexCount,t.UNSIGNED_INT,0),h.draw(e.ships,T.posOf,T.headingOf,E,e=>Math.min(A.sinkOf?.(e)??(e.sunk?.65:0),1.2)),l.draw(e,T.posOf,E,Rs(D),10,_e,vs(P.foamTint,P.sunI)),t.useProgram(r.program);let V=e=>r.uniform(e);t.uniformMatrix4fv(V(`uVP`),!1,E.viewProjection),t.uniform3f(V(`uCam`),E.eye[0],E.eye[1],E.eye[2]),t.uniform3fv(V(`uSunDir`),le),t.uniform3fv(V(`uSunCol`),Array.from(P.sun)),t.uniform1f(V(`uSunI`),P.sunI),t.uniform3fv(V(`uAmb`),Array.from(P.ambient)),t.uniform1f(V(`uAmbI`),P.ambI),t.uniform3fv(V(`uHaze`),I),t.uniform2f(V(`uHazeP`),N.haze,N.hazeMax),t.uniform1f(V(`uHazeLift`),re),t.uniform2f(V(`uHome`),ye.x,ye.y),t.uniform1i(V(`uEmitCount`),Math.floor(be.length/4)),t.uniform4fv(V(`uEmit`),xe),t.uniform1f(V(`uShadow`),0),Pi({gl:t,shipP:r,posOf:T.posOf,headingOf:T.headingOf,seaAt:(e,t)=>me(ae,e,t,D),sinkOf:e=>A.sinkOf?.(e)??(e.sunk?.65:0),hullVao:t=>k(t,nr(e,t)===0),showMounts:t=>nr(e,t)!==0,mountVao:ee},Se,V),t.uniform1f(V(`uBootZ`),br),u.draw(e,r,D/10%1,10,le,P.sunI),d.draw(e,E,D/10%1),p.draw(Se,T.posOf,T.headingOf,E),f.draw(e,T.posOf,T.headingOf,E,D/10%1),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.depthMask(!1),t.useProgram(i.program);let H=e=>i.uniform(e);t.uniformMatrix4fv(H(`uVP`),!1,E.viewProjection),t.uniform3f(H(`uCam`),E.eye[0],E.eye[1],E.eye[2]),t.uniform3fv(H(`uSunCol`),Array.from(P.sun)),t.uniform1f(H(`uSunI`),P.sunI),t.uniform3fv(H(`uFoamTint`),Array.from(P.foamTint)),t.uniform1i(H(`uEmitCount`),Math.floor(be.length/4)),t.uniform4fv(H(`uEmit`),xe),t.bindVertexArray(w),De.forEach((e,n)=>{t.uniform4f(H(`uS`),e[0],e[1],e[2],e[3]),t.uniform1f(H(`uSeed`),n*3.7+1.1),t.uniform1f(H(`uWScale`),1),t.uniform1f(H(`uOff`),0),t.drawArrays(t.TRIANGLES,0,6),t.uniform1f(H(`uSeed`),n*3.7+31.7),t.uniform1f(H(`uWScale`),.72),t.uniform1f(H(`uOff`),.16),t.drawArrays(t.TRIANGLES,0,6)}),t.depthMask(!0),t.disable(t.BLEND),t.bindVertexArray(null);let U=[Math.min(1.2,P.sun[0]*P.sunI*.3+P.ambient[0]*P.ambI*.9),Math.min(1.2,P.sun[1]*P.sunI*.3+P.ambient[1]*P.ambI*.9),Math.min(1.2,P.sun[2]*P.sunI*.3+P.ambient[2]*P.ambI*.9)],Oe=Se;m.draw(e,Oe,T.posOf,T.headingOf,E,D,D/10%1,[Math.sin(F),Math.cos(F)],U),c.draw(Oe,T.posOf,T.headingOf,E,D,A.wallMs,[Math.sin(F),Math.cos(F)],U),s.endPlane()},meter:s}}var sc=6e3;function cc(e){let{glCanvas:t}=e,n=!1,r=!1,i=null,a=()=>{r||(r=!0,e.onTrouble?.())};return t.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),n=!0,i!==null&&window.clearTimeout(i),i=window.setTimeout(a,sc)}),t.addEventListener(`webglcontextrestored`,()=>{i!==null&&(window.clearTimeout(i),i=null);try{e.rebuildPlane(),n=!1,r=!1}catch{a()}}),{isLost:()=>n}}var lc=45;function uc(e){let t=new URLSearchParams(e),n=t.get(`pitch`),r=t.get(`glscale`);M(r===null?null:Number(r));let i=t.get(`fpscap`);qe(i===null?null:Number(i));let a=t.get(`glzoom`);return{pitchDeg:Di(n===null?lc:Number(n)),devZoom:a===null?null:Number(a),devFocus:t.get(`glfocus`),showMeter:!1}}var dc=5;function fc(e,t,n){return{top:t+44,bottom:e-n-44}}function pc(e,t,n,r,i){let a=n.bottom-n.top;if(a<=0||e.length===0)return t;let o=t;for(let t=0;t<dc;t+=1){let t=i(o),s=e.filter(e=>t.inFrontOfEye(e.x,e.y)).map(e=>t.project(e.x,e.y).y);if(s.length===0)return o;let c=Math.min(...s),l=Math.max(...s);if(l-c>a){o={center:o.center,metresPerPx:o.metresPerPx*((l-c)/a)};continue}let u=(c+l)/2,d=(n.top+n.bottom)/2;if(Math.abs(u-d)<.5)return o;let f=t.groundFromScreen(r/2,u),p=t.groundFromScreen(r/2,d);o={center:{x:o.center.x+f.x-p.x,y:o.center.y+f.y-p.y},metresPerPx:o.metresPerPx}}return o}function mc(e,t,n){let r=e.map(e=>e.x),i=e.map(e=>e.y),a=Math.min(...r)-$e,o=Math.max(...r)+$e,s=Math.min(...i)-$e,c=Math.max(...i)+$e;return{center:{x:(a+o)/2,y:(s+c)/2},metresPerPx:Math.max((o-a)/Math.max(t,1),(c-s)/Math.max(n,1),Qe/Math.max(Math.min(t,n),1))}}function hc(e,t,n){let{widthPx:r,heightPx:i,pitchDeg:a}=t;return pc(e,mc(e,r,i),fc(i,n.top,n.bottom),r,e=>Oi({targetX:e.center.x,targetY:e.center.y,pitchDeg:a,zoomMetresPerPx:e.metresPerPx,widthPx:r,heightPx:i}))}var gc=.5;function _c(e,t){if(w()||e>=900)return t;let n=Math.max(0,e)/900;return gc+(t-gc)*f(n)}function vc(e){return!w()&&e<900}function yc(){let e=null;return{arm(){w()||e===null&&(e=`armed`)},begin(t){e=w()?null:t},pitchDeg(t,n){if(e===null)return null;if(e===`armed`)return gc;let r=t-e;return vc(r)?_c(r,n):(e=null,null)},cancel(){e=null},active(){return e!==null}}}var bc=.2;function xc(e,t){let n=e.getContext(`2d`);if(n===null)throw Error(`Canvas 2D context unavailable`);let r=document.createElement(`canvas`);r.className=`battle-gl`,r.style.position=`fixed`,r.style.left=`0`,r.style.top=`0`,r.style.zIndex=`0`,r.style.pointerEvents=`none`;let i=oc(r);e.style.position=`relative`,e.style.zIndex=`1`,e.parentElement?.insertBefore(r,e);let a=cc({glCanvas:r,rebuildPlane:()=>{i=oc(r),d>0&&f>0&&i.resize(d,f,pe(g))},onTrouble:t}),{pitchDeg:o,devZoom:s,devFocus:c,showMeter:l}=uc(window.location.search),u=o,d=0,f=0,p=0,m=0,g=1,_={x:0,y:0},v=20,y=!1,b=null,x=yc(),S=null,C=null,T=gt(),E=pt(),D=In(),O=null;function ee(e){({center:_,metresPerPx:v}=hc(e.ships.map(e=>T.posOf(e)),{widthPx:d,heightPx:f,pitchDeg:k()},{top:Math.max(40,p),bottom:m}))}function k(){let e=x.pitchDeg(performance.now(),u)??u;return te&&(window.__KR_PITCH__=e),e}function A(){return Oi({targetX:_.x,targetY:_.y,pitchDeg:k(),zoomMetresPerPx:v,widthPx:d,heightPx:f})}let te=!1;function ne(e,t){if(s!==null){let n;if(c===`fish`)n=e.torpedoes.find(e=>e.side===`raider`||e.sighted)?.pos;else if(c===`air`){let r=e.flights[0];if(r!==void 0){let e=h[r.aircraft].speedKnots*_e*10*t,i=r.headingDeg*Math.PI/180;n={x:r.pos.x+Math.sin(i)*e,y:r.pos.y+Math.cos(i)*e}}}else{let t=c===`enemy`?e.ships.find(e=>e.side!==`raider`):e.ships.find(e=>e.side===`raider`);n=t===void 0?void 0:T.posOf(t)}n!==void 0&&(v=Math.max(Ze,s),_={x:n.x,y:n.y-v*f*.2});return}y||ee(e)}function j(e,t){return{toScreen:t=>e.project(t.x,t.y),inFront:t=>e.inFrontOfEye(t.x,t.y),posOf:T.posOf,headingOf:T.headingOf,rudderOf:T.rudderOf,metresPerPx:e.metresPerPxAtTarget,frameFraction:t,animationMs:performance.now()}}function M(e,t,n,r){a.isLost()||i.render(e,{posOf:T.posOf,headingOf:T.headingOf},t,w()?0:n,r===null?{wallMs:performance.now()}:{wallMs:performance.now(),sinkOf:e=>e.sunk?Math.min(1.1,.45+r/20):0,hide:e=>e.sunk&&ge(r)})}return{resize(t,r,a=0,o=0){d=t,f=r,p=a,m=o,g=window.devicePixelRatio||1,e.width=Math.round(t*g),e.height=Math.round(r*g),e.style.width=`${t}px`,e.style.height=`${r}px`,n.setTransform(g,0,0,g,0,0),i.resize(t,r,pe(g))},render(e,t=0){let r=e.battle;if(r===null)return;i.meter.begin(),r.tick===0&&S!==r.setting.startTimeHours&&(S=r.setting.startTimeHours,x.arm()),b=r,T.step(r,t);let a=T.frameFraction();ne(r,a);let o=A();M(r,o,(r.tick+a)*10,null),n.clearRect(0,0,d,f);let s=j(o,a),c=r.ships.find(e=>e.side===`raider`);c!==void 0&&xe(n,c,s),er(n,r,s),Bt(n,r,s),wn(n,r,s),D.draw(n,r,s,s.animationMs),Ln(n,r,s,O),tr(n,r,s),E.draw(n,r,s),Zt(n,r,d,T.posOf),l&&(n.fillStyle=`rgba(223, 230, 234, 0.8)`,n.font=`11px monospace`,n.textAlign=`right`,i.meter.readout().forEach((e,t)=>{n.fillText(e,d-8,14+t*13)}),n.textAlign=`left`),i.meter.end()},renderAftermath(e,t){x.cancel(),S=null,b=e,T.step(e,Math.min(t,8)),ne(e,0);let r=A();M(e,r,e.tick*10+t,t),n.clearRect(0,0,d,f);let i=j(r,t/10);for(let r of e.ships)r.sunk&&Ue(n,r,i,t)},screenToPlane(e,t){let n=A().groundFromScreen(e,t);return{x:n.x,y:n.y}},shipAt(e,t){if(b===null)return null;let n=A(),r=null;for(let i of b.ships){let a=T.posOf(i);if(!n.inFrontOfEye(a.x,a.y))continue;let o=n.project(a.x,a.y),s=Math.hypot(o.x-e,o.y-t);s<28&&(r===null||s<r.d)&&(r={id:i.id,d:s})}return r?.id??null},panByPixels(e,t){y=!0,_={x:_.x-e*v,y:_.y+t*v}},zoomBy(e,t,n){y=!0;let r=A().groundFromScreen(t,n);v=Math.max(Ze,Math.min(400,v/e));let i=Oi({targetX:_.x,targetY:_.y,pitchDeg:u,zoomMetresPerPx:v,widthPx:d,heightPx:f}).groundFromScreen(t,n);_={x:_.x+(r.x-i.x),y:_.y+(r.y-i.y)}},tiltByPixels(e){u=Di(u-e*bc),x.cancel()},recenter(){y=!1},isManual(){return y},setReport(e){C=e},reportShipId(){return C},markHelmOrder(e,t){D.markOrder(e,t,performance.now())},setTorpedoPlot(e){O=e},setHelmDrag(e){D.setDrag(e)},beginEntry(){if(b!==null&&b.tick>0){x.cancel();return}x.begin(performance.now())},setLayersVisible(e){r.style.display=e?``:`none`}}}export{xc as createGlBattleView};