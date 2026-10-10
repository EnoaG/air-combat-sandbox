import{W as rt,G as Ym,R as uh,p as $m,v as jm,w as Zm,d as Eu,c as sp,a as Km,b as Jm,H as op,e as Qm,P as Tu,f as eg,g as ap,m as Au,h as Ru,U as cp,r as Cu,i as tg,j as ng,k as ig,l as rg,n as sg,o as lp,t as dp,q as og,s as ag,u as cg,x as lg,y as dg,z as ug,A as hg,B as up,C as hp,D as fg,E as pg,F as mg,I as gg,J as _g,K as vg,L as xg}from"./index-Bn2TOw_a.js";const Pu="179",so={ROTATE:0,DOLLY:1,PAN:2},to={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yg=0,hh=1,Sg=2,fp=1,Mg=2,pr=3,yr=0,ui=1,dn=2,Vr=0,oo=1,Td=2,fh=3,ph=4,bg=5,ds=100,wg=101,Eg=102,Tg=103,Ag=104,Rg=200,Cg=201,Pg=202,Lg=203,Ad=204,Rd=205,Dg=206,Ig=207,Ng=208,Ug=209,Fg=210,kg=211,Og=212,zg=213,Bg=214,Cd=0,Pd=1,Ld=2,go=3,Dd=4,Id=5,Nd=6,Ud=7,pp=0,Hg=1,Vg=2,Gr=0,Gg=1,Wg=2,Xg=3,qg=4,Yg=5,$g=6,jg=7,mp=300,_o=301,vo=302,Fd=303,kd=304,hl=306,Od=1e3,ps=1001,zd=1002,ji=1003,Zg=1004,$a=1005,rr=1006,Tl=1007,ms=1008,ar=1009,gp=1010,_p=1011,da=1012,Lu=1013,bs=1014,gr=1015,Ua=1016,Du=1017,Iu=1018,ua=1020,vp=35902,xp=1021,yp=1022,Yi=1023,ha=1026,fa=1027,Sp=1028,Nu=1029,Mp=1030,Uu=1031,Fu=1033,Dc=33776,Ic=33777,Nc=33778,Uc=33779,Bd=35840,Hd=35841,Vd=35842,Gd=35843,Wd=36196,Xd=37492,qd=37496,Yd=37808,$d=37809,jd=37810,Zd=37811,Kd=37812,Jd=37813,Qd=37814,eu=37815,tu=37816,nu=37817,iu=37818,ru=37819,su=37820,ou=37821,Fc=36492,au=36494,cu=36495,bp=36283,lu=36284,du=36285,uu=36286,Kg=3200,Jg=3201,Qg=0,e0=1,Br="",si="srgb",xo="srgb-linear",Xc="linear",Yt="srgb",Fs=7680,mh=519,t0=512,n0=513,i0=514,wp=515,r0=516,s0=517,o0=518,a0=519,gh=35044,qc=35048,_h="300 es",sr=2e3,Yc=2001;class Ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vh=1234567;const ta=Math.PI/180,pa=180/Math.PI;function Ls(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[t&63|128]+Hn[t>>8&255]+"-"+Hn[t>>16&255]+Hn[t>>24&255]+Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]).toLowerCase()}function Tt(n,e,t){return Math.max(e,Math.min(t,n))}function ku(n,e){return(n%e+e)%e}function c0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function l0(n,e,t){return n!==e?(t-n)/(e-n):0}function na(n,e,t){return(1-t)*n+t*e}function d0(n,e,t,i){return na(n,e,1-Math.exp(-t*i))}function u0(n,e=1){return e-Math.abs(ku(n,e*2)-e)}function h0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function f0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function p0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function m0(n,e){return n+Math.random()*(e-n)}function g0(n){return n*(.5-Math.random())}function _0(n){n!==void 0&&(vh=n);let e=vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v0(n){return n*ta}function x0(n){return n*pa}function y0(n){return(n&n-1)===0&&n!==0}function S0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function M0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function b0(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),d=o((e+i)/2),u=s((e-i)/2),h=o((e-i)/2),f=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*d,c*u,c*h,a*l);break;case"YZY":n.set(c*h,a*d,c*u,a*l);break;case"ZXZ":n.set(c*u,c*h,a*d,a*l);break;case"XZX":n.set(a*d,c*m,c*f,a*l);break;case"YXY":n.set(c*f,a*d,c*m,a*l);break;case"ZYZ":n.set(c*m,c*f,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ks(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const qt={DEG2RAD:ta,RAD2DEG:pa,generateUUID:Ls,clamp:Tt,euclideanModulo:ku,mapLinear:c0,inverseLerp:l0,lerp:na,damp:d0,pingpong:u0,smoothstep:h0,smootherstep:f0,randInt:p0,randFloat:m0,randFloatSpread:g0,seededRandom:_0,degToRad:v0,radToDeg:x0,isPowerOfTwo:y0,ceilPowerOfTwo:S0,floorPowerOfTwo:M0,setQuaternionFromProperEuler:b0,normalize:ti,denormalize:Ks};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],d=i[r+2],u=i[r+3];const h=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(u!==_||c!==h||l!==f||d!==m){let g=1-a;const p=c*h+l*f+d*m+u*_,E=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const R=Math.sqrt(y),C=Math.atan2(R,p*E);g=Math.sin(g*C)/R,a=Math.sin(a*C)/R}const x=a*E;if(c=c*g+h*x,l=l*g+f*x,d=d*g+m*x,u=u*g+_*x,g===1-a){const R=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=R,l*=R,d*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],d=i[r+3],u=s[o],h=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+d*u+c*f-l*h,e[t+1]=c*m+d*h+l*u-a*f,e[t+2]=l*m+d*f+a*h-c*u,e[t+3]=d*m-a*u-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(r/2),u=a(s/2),h=c(i/2),f=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=h*d*u+l*f*m,this._y=l*f*u-h*d*m,this._z=l*d*m+h*f*u,this._w=l*d*u-h*f*m;break;case"YXZ":this._x=h*d*u+l*f*m,this._y=l*f*u-h*d*m,this._z=l*d*m-h*f*u,this._w=l*d*u+h*f*m;break;case"ZXY":this._x=h*d*u-l*f*m,this._y=l*f*u+h*d*m,this._z=l*d*m+h*f*u,this._w=l*d*u-h*f*m;break;case"ZYX":this._x=h*d*u-l*f*m,this._y=l*f*u+h*d*m,this._z=l*d*m-h*f*u,this._w=l*d*u+h*f*m;break;case"YZX":this._x=h*d*u+l*f*m,this._y=l*f*u+h*d*m,this._z=l*d*m-h*f*u,this._w=l*d*u-h*f*m;break;case"XZY":this._x=h*d*u-l*f*m,this._y=l*f*u-h*d*m,this._z=l*d*m+h*f*u,this._w=l*d*u+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],u=t[10],h=i+a+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(d-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+o*a+r*l-s*c,this._y=r*d+o*c+s*a-i*l,this._z=s*d+o*l+i*c-r*a,this._w=o*d-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),u=Math.sin((1-t)*d)/l,h=Math.sin(t*d)/l;return this._w=o*u+this._w*h,this._x=i*u+this._x*h,this._y=r*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,i=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),d=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+c*l+o*u-a*d,this.y=i+c*d+a*l-s*u,this.z=r+c*u+s*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Al=new b,xh=new fn;class wt{constructor(e,t,i,r,s,o,a,c,l){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],d=i[4],u=i[7],h=i[2],f=i[5],m=i[8],_=r[0],g=r[3],p=r[6],E=r[1],y=r[4],x=r[7],R=r[2],C=r[5],P=r[8];return s[0]=o*_+a*E+c*R,s[3]=o*g+a*y+c*C,s[6]=o*p+a*x+c*P,s[1]=l*_+d*E+u*R,s[4]=l*g+d*y+u*C,s[7]=l*p+d*x+u*P,s[2]=h*_+f*E+m*R,s[5]=h*g+f*y+m*C,s[8]=h*p+f*x+m*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-i*s*d+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],u=d*o-a*l,h=a*c-d*s,f=l*s-o*c,m=t*u+i*h+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(r*l-d*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(d*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Rl.makeScale(e,t)),this}rotate(e){return this.premultiply(Rl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rl=new wt;function Ep(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $c(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function w0(){const n=$c("canvas");return n.style.display="block",n}const yh={};function ao(n){n in yh||(yh[n]=!0,console.warn(n))}function E0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Sh=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mh=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T0(){const n={enabled:!0,workingColorSpace:xo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Yt&&(r.r=_r(r.r),r.g=_r(r.g),r.b=_r(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Yt&&(r.r=co(r.r),r.g=co(r.g),r.b=co(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Br?Xc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ao("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ao("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[xo]:{primaries:e,whitePoint:i,transfer:Xc,toXYZ:Sh,fromXYZ:Mh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:i,transfer:Yt,toXYZ:Sh,fromXYZ:Mh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),n}const Ht=T0();function _r(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function co(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ks;class A0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ks===void 0&&(ks=$c("canvas")),ks.width=e.width,ks.height=e.height;const r=ks.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ks}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$c("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_r(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_r(t[i]/255)*255):t[i]=_r(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let R0=0;class Ou{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Ls(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Cl(r[o].image)):s.push(Cl(r[o]))}else s=Cl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Cl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?A0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let C0=0;const Pl=new b;class hi extends Ps{constructor(e=hi.DEFAULT_IMAGE,t=hi.DEFAULT_MAPPING,i=ps,r=ps,s=rr,o=ms,a=Yi,c=ar,l=hi.DEFAULT_ANISOTROPY,d=Br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Ls(),this.name="",this.source=new Ou(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pl).x}get height(){return this.source.getSize(Pl).y}get depth(){return this.source.getSize(Pl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Od:e.x=e.x-Math.floor(e.x);break;case ps:e.x=e.x<0?0:1;break;case zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Od:e.y=e.y-Math.floor(e.y);break;case ps:e.y=e.y<0?0:1;break;case zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=mp;hi.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,i=0,r=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],d=c[4],u=c[8],h=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(d-h)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(f+1)/2,R=(p+1)/2,C=(d+h)/4,P=(u+_)/4,N=(m+g)/4;return y>x&&y>R?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=C/i,s=P/i):x>R?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=C/r,s=N/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=P/s,r=N/s),this.set(i,r,s,t),this}let E=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(h-d)*(h-d));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(u-_)/E,this.z=(h-d)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class P0 extends Ps{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new hi(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:rr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ou(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ws extends P0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Tp extends hi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ji,this.minFilter=ji,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class L0 extends hi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ji,this.minFilter=ji,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class To{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bi):Bi.fromBufferAttribute(s,o),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),Za.subVectors(this.max,Fo),Os.subVectors(e.a,Fo),zs.subVectors(e.b,Fo),Bs.subVectors(e.c,Fo),Cr.subVectors(zs,Os),Pr.subVectors(Bs,zs),Qr.subVectors(Os,Bs);let t=[0,-Cr.z,Cr.y,0,-Pr.z,Pr.y,0,-Qr.z,Qr.y,Cr.z,0,-Cr.x,Pr.z,0,-Pr.x,Qr.z,0,-Qr.x,-Cr.y,Cr.x,0,-Pr.y,Pr.x,0,-Qr.y,Qr.x,0];return!Ll(t,Os,zs,Bs,Za)||(t=[1,0,0,0,1,0,0,0,1],!Ll(t,Os,zs,Bs,Za))?!1:(Ka.crossVectors(Cr,Pr),t=[Ka.x,Ka.y,Ka.z],Ll(t,Os,zs,Bs,Za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const lr=[new b,new b,new b,new b,new b,new b,new b,new b],Bi=new b,ja=new To,Os=new b,zs=new b,Bs=new b,Cr=new b,Pr=new b,Qr=new b,Fo=new b,Za=new b,Ka=new b,es=new b;function Ll(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){es.fromArray(n,s);const a=r.x*Math.abs(es.x)+r.y*Math.abs(es.y)+r.z*Math.abs(es.z),c=e.dot(es),l=t.dot(es),d=i.dot(es);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const D0=new To,ko=new b,Dl=new b;class Ao{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):D0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const t=ko.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ko,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(Dl)),this.expandByPoint(ko.copy(e.center).sub(Dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const dr=new b,Il=new b,Ja=new b,Lr=new b,Nl=new b,Qa=new b,Ul=new b;class Fa{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dr.copy(this.origin).addScaledVector(this.direction,t),dr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Il.copy(e).add(t).multiplyScalar(.5),Ja.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(Il);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ja),a=Lr.dot(this.direction),c=-Lr.dot(Ja),l=Lr.lengthSq(),d=Math.abs(1-o*o);let u,h,f,m;if(d>0)if(u=o*c-a,h=o*a-c,m=s*d,u>=0)if(h>=-m)if(h<=m){const _=1/d;u*=_,h*=_,f=u*(u+o*h+2*a)+h*(o*u+h+2*c)+l}else h=s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+l;else h=-s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+l;else h<=-m?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+h*(h+2*c)+l):h<=m?(u=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+h*(h+2*c)+l);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Il).addScaledVector(Ja,h),f}intersectSphere(e,t){dr.subVectors(e.center,this.origin);const i=dr.dot(this.direction),r=dr.dot(dr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,dr)!==null}intersectTriangle(e,t,i,r,s){Nl.subVectors(t,e),Qa.subVectors(i,e),Ul.crossVectors(Nl,Qa);let o=this.direction.dot(Ul),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Lr.subVectors(this.origin,e);const c=a*this.direction.dot(Qa.crossVectors(Lr,Qa));if(c<0)return null;const l=a*this.direction.dot(Nl.cross(Lr));if(l<0||c+l>o)return null;const d=-a*Lr.dot(Ul);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,t,i,r,s,o,a,c,l,d,u,h,f,m,_,g){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,d,u,h,f,m,_,g)}set(e,t,i,r,s,o,a,c,l,d,u,h,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Hs.setFromMatrixColumn(e,0).length(),s=1/Hs.setFromMatrixColumn(e,1).length(),o=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=o*d,f=o*u,m=a*d,_=a*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*d,f=c*u,m=l*d,_=l*u;t[0]=h+_*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=f*a-m,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*d,f=c*u,m=l*d,_=l*u;t[0]=h-_*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*d,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*d,f=o*u,m=a*d,_=a*u;t[0]=c*d,t[4]=m*l-f,t[8]=h*l+_,t[1]=c*u,t[5]=_*l+h,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*d,t[4]=_-h*u,t[8]=m*u+f,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=f*u+m,t[10]=h-_*u}else if(e.order==="XZY"){const h=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=h*u+_,t[5]=o*d,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*d,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I0,e,N0)}lookAt(e,t,i){const r=this.elements;return xi.subVectors(e,t),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),Dr.crossVectors(i,xi),Dr.lengthSq()===0&&(Math.abs(i.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),Dr.crossVectors(i,xi)),Dr.normalize(),ec.crossVectors(xi,Dr),r[0]=Dr.x,r[4]=ec.x,r[8]=xi.x,r[1]=Dr.y,r[5]=ec.y,r[9]=xi.y,r[2]=Dr.z,r[6]=ec.z,r[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],d=i[1],u=i[5],h=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],E=i[3],y=i[7],x=i[11],R=i[15],C=r[0],P=r[4],N=r[8],M=r[12],S=r[1],I=r[5],F=r[9],B=r[13],G=r[2],J=r[6],q=r[10],ce=r[14],X=r[3],oe=r[7],Se=r[11],Ve=r[15];return s[0]=o*C+a*S+c*G+l*X,s[4]=o*P+a*I+c*J+l*oe,s[8]=o*N+a*F+c*q+l*Se,s[12]=o*M+a*B+c*ce+l*Ve,s[1]=d*C+u*S+h*G+f*X,s[5]=d*P+u*I+h*J+f*oe,s[9]=d*N+u*F+h*q+f*Se,s[13]=d*M+u*B+h*ce+f*Ve,s[2]=m*C+_*S+g*G+p*X,s[6]=m*P+_*I+g*J+p*oe,s[10]=m*N+_*F+g*q+p*Se,s[14]=m*M+_*B+g*ce+p*Ve,s[3]=E*C+y*S+x*G+R*X,s[7]=E*P+y*I+x*J+R*oe,s[11]=E*N+y*F+x*q+R*Se,s[15]=E*M+y*B+x*ce+R*Ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],u=e[6],h=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*c*u-r*l*u-s*a*h+i*l*h+r*a*f-i*c*f)+_*(+t*c*f-t*l*h+s*o*h-r*o*f+r*l*d-s*c*d)+g*(+t*l*u-t*a*f-s*o*u+i*o*f+s*a*d-i*l*d)+p*(-r*a*d-t*c*u+t*a*h+r*o*u-i*o*h+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],u=e[9],h=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],E=u*g*l-_*h*l+_*c*f-a*g*f-u*c*p+a*h*p,y=m*h*l-d*g*l-m*c*f+o*g*f+d*c*p-o*h*p,x=d*_*l-m*u*l+m*a*f-o*_*f-d*a*p+o*u*p,R=m*u*c-d*_*c-m*a*h+o*_*h+d*a*g-o*u*g,C=t*E+i*y+r*x+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=E*P,e[1]=(_*h*s-u*g*s-_*r*f+i*g*f+u*r*p-i*h*p)*P,e[2]=(a*g*s-_*c*s+_*r*l-i*g*l-a*r*p+i*c*p)*P,e[3]=(u*c*s-a*h*s-u*r*l+i*h*l+a*r*f-i*c*f)*P,e[4]=y*P,e[5]=(d*g*s-m*h*s+m*r*f-t*g*f-d*r*p+t*h*p)*P,e[6]=(m*c*s-o*g*s-m*r*l+t*g*l+o*r*p-t*c*p)*P,e[7]=(o*h*s-d*c*s+d*r*l-t*h*l-o*r*f+t*c*f)*P,e[8]=x*P,e[9]=(m*u*s-d*_*s-m*i*f+t*_*f+d*i*p-t*u*p)*P,e[10]=(o*_*s-m*a*s+m*i*l-t*_*l-o*i*p+t*a*p)*P,e[11]=(d*a*s-o*u*s-d*i*l+t*u*l+o*i*f-t*a*f)*P,e[12]=R*P,e[13]=(d*_*r-m*u*r+m*i*h-t*_*h-d*i*g+t*u*g)*P,e[14]=(m*a*r-o*_*r-m*i*c+t*_*c+o*i*g-t*a*g)*P,e[15]=(o*u*r-d*a*r+d*i*c-t*u*c-o*i*h+t*a*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,d*a+i,d*c-r*o,0,l*c-r*a,d*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,d=o+o,u=a+a,h=s*l,f=s*d,m=s*u,_=o*d,g=o*u,p=a*u,E=c*l,y=c*d,x=c*u,R=i.x,C=i.y,P=i.z;return r[0]=(1-(_+p))*R,r[1]=(f+x)*R,r[2]=(m-y)*R,r[3]=0,r[4]=(f-x)*C,r[5]=(1-(h+p))*C,r[6]=(g+E)*C,r[7]=0,r[8]=(m+y)*P,r[9]=(g-E)*P,r[10]=(1-(h+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Hs.set(r[0],r[1],r[2]).length();const o=Hs.set(r[4],r[5],r[6]).length(),a=Hs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hi.copy(this);const l=1/s,d=1/o,u=1/a;return Hi.elements[0]*=l,Hi.elements[1]*=l,Hi.elements[2]*=l,Hi.elements[4]*=d,Hi.elements[5]*=d,Hi.elements[6]*=d,Hi.elements[8]*=u,Hi.elements[9]*=u,Hi.elements[10]*=u,t.setFromRotationMatrix(Hi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=sr,c=!1){const l=this.elements,d=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let m,_;if(c)m=s/(o-s),_=o*s/(o-s);else if(a===sr)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Yc)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=sr,c=!1){const l=this.elements,d=2/(t-e),u=2/(i-r),h=-(t+e)/(t-e),f=-(i+r)/(i-r);let m,_;if(c)m=1/(o-s),_=o/(o-s);else if(a===sr)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===Yc)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hs=new b,Hi=new Xt,I0=new b(0,0,0),N0=new b(1,1,1),Dr=new b,ec=new b,xi=new b,bh=new Xt,wh=new fn;class Zn{constructor(e=0,t=0,i=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],d=r[9],u=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wh.setFromEuler(this),this.setFromQuaternion(wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class zu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U0=0;const Eh=new b,Vs=new fn,ur=new Xt,tc=new b,Oo=new b,F0=new b,k0=new fn,Th=new b(1,0,0),Ah=new b(0,1,0),Rh=new b(0,0,1),Ch={type:"added"},O0={type:"removed"},Gs={type:"childadded",child:null},Fl={type:"childremoved",child:null};class gn extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new b,t=new Zn,i=new fn,r=new b(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xt},normalMatrix:{value:new wt}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(Th,e)}rotateY(e){return this.rotateOnAxis(Ah,e)}rotateZ(e){return this.rotateOnAxis(Rh,e)}translateOnAxis(e,t){return Eh.copy(e).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Th,e)}translateY(e){return this.translateOnAxis(Ah,e)}translateZ(e){return this.translateOnAxis(Rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ur.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?tc.copy(e):tc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ur.lookAt(Oo,tc,this.up):ur.lookAt(tc,Oo,this.up),this.quaternion.setFromRotationMatrix(ur),r&&(ur.extractRotation(r.matrixWorld),Vs.setFromRotationMatrix(ur),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ch),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(O0),Fl.child=e,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ch),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,F0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,k0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gn.DEFAULT_UP=new b(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vi=new b,hr=new b,kl=new b,fr=new b,Ws=new b,Xs=new b,Ph=new b,Ol=new b,zl=new b,Bl=new b,Hl=new kt,Vl=new kt,Gl=new kt;class qi{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Vi.subVectors(e,t),r.cross(Vi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Vi.subVectors(r,t),hr.subVectors(i,t),kl.subVectors(e,t);const o=Vi.dot(Vi),a=Vi.dot(hr),c=Vi.dot(kl),l=hr.dot(hr),d=hr.dot(kl),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const h=1/u,f=(l*c-a*d)*h,m=(o*d-a*c)*h;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,fr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fr.x),c.addScaledVector(o,fr.y),c.addScaledVector(a,fr.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Hl.setScalar(0),Vl.setScalar(0),Gl.setScalar(0),Hl.fromBufferAttribute(e,t),Vl.fromBufferAttribute(e,i),Gl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Hl,s.x),o.addScaledVector(Vl,s.y),o.addScaledVector(Gl,s.z),o}static isFrontFacing(e,t,i,r){return Vi.subVectors(i,t),hr.subVectors(e,t),Vi.cross(hr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Vi.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return qi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ws.subVectors(r,i),Xs.subVectors(s,i),Ol.subVectors(e,i);const c=Ws.dot(Ol),l=Xs.dot(Ol);if(c<=0&&l<=0)return t.copy(i);zl.subVectors(e,r);const d=Ws.dot(zl),u=Xs.dot(zl);if(d>=0&&u<=d)return t.copy(r);const h=c*u-d*l;if(h<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(i).addScaledVector(Ws,o);Bl.subVectors(e,s);const f=Ws.dot(Bl),m=Xs.dot(Bl);if(m>=0&&f<=m)return t.copy(s);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(Xs,a);const g=d*m-f*u;if(g<=0&&u-d>=0&&f-m>=0)return Ph.subVectors(s,r),a=(u-d)/(u-d+(f-m)),t.copy(r).addScaledVector(Ph,a);const p=1/(g+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},nc={h:0,s:0,l:0};function Wl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ht.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ht.workingColorSpace){if(e=ku(e,1),t=Tt(t,0,1),i=Tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Wl(o,s,e+1/3),this.g=Wl(o,s,e),this.b=Wl(o,s,e-1/3)}return Ht.colorSpaceToWorking(this,r),this}setStyle(e,t=si){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){const i=Ap[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return Ht.workingToColorSpace(Vn.copy(this),e),Math.round(Tt(Vn.r*255,0,255))*65536+Math.round(Tt(Vn.g*255,0,255))*256+Math.round(Tt(Vn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.workingToColorSpace(Vn.copy(this),t);const i=Vn.r,r=Vn.g,s=Vn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=d<=.5?u/(o+a):u/(2-o-a),o){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Ht.workingColorSpace){return Ht.workingToColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=si){Ht.workingToColorSpace(Vn.copy(this),e);const t=Vn.r,i=Vn.g,r=Vn.b;return e!==si?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(nc);const i=na(Ir.h,nc.h,t),r=na(Ir.s,nc.s,t),s=na(Ir.l,nc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new Nt;Nt.NAMES=Ap;let z0=0;class Ro extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Ls(),this.name="",this.type="Material",this.blending=oo,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Rd,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(i.blending=this.blending),this.side!==yr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ad&&(i.blendSrc=this.blendSrc),this.blendDst!==Rd&&(i.blendDst=this.blendDst),this.blendEquation!==ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vn extends Ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=pp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mn=new b,ic=new ze;let B0=0;class wi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gh,this.updateRanges=[],this.gpuType=gr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ic.fromBufferAttribute(this,t),ic.applyMatrix3(e),this.setXY(t,ic.x,ic.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix3(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ti(t,this.array),i=ti(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ti(t,this.array),i=ti(i,this.array),r=ti(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ti(t,this.array),i=ti(i,this.array),r=ti(r,this.array),s=ti(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gh&&(e.usage=this.usage),e}}class Rp extends wi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Cp extends wi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Rt extends wi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let H0=0;const Ci=new Xt,Xl=new gn,qs=new b,yi=new To,zo=new To,In=new b;class Ut extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ep(e)?Cp:Rp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new wt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,i){return Ci.makeTranslation(e,t,i),this.applyMatrix4(Ci),this}scale(e,t,i){return Ci.makeScale(e,t,i),this.applyMatrix4(Ci),this}lookAt(e){return Xl.lookAt(e),Xl.updateMatrix(),this.applyMatrix4(Xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new To);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];yi.setFromBufferAttribute(s),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ao);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const i=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];zo.setFromBufferAttribute(a),this.morphTargetsRelative?(In.addVectors(yi.min,zo.min),yi.expandByPoint(In),In.addVectors(yi.max,zo.max),yi.expandByPoint(In)):(yi.expandByPoint(zo.min),yi.expandByPoint(zo.max))}yi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)In.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(In));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)In.fromBufferAttribute(a,l),c&&(qs.fromBufferAttribute(e,l),In.add(qs)),r=Math.max(r,i.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new b,c[N]=new b;const l=new b,d=new b,u=new b,h=new ze,f=new ze,m=new ze,_=new b,g=new b;function p(N,M,S){l.fromBufferAttribute(i,N),d.fromBufferAttribute(i,M),u.fromBufferAttribute(i,S),h.fromBufferAttribute(s,N),f.fromBufferAttribute(s,M),m.fromBufferAttribute(s,S),d.sub(l),u.sub(l),f.sub(h),m.sub(h);const I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),g.copy(u).multiplyScalar(f.x).addScaledVector(d,-m.x).multiplyScalar(I),a[N].add(_),a[M].add(_),a[S].add(_),c[N].add(g),c[M].add(g),c[S].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let N=0,M=E.length;N<M;++N){const S=E[N],I=S.start,F=S.count;for(let B=I,G=I+F;B<G;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new b,x=new b,R=new b,C=new b;function P(N){R.fromBufferAttribute(r,N),C.copy(R);const M=a[N];y.copy(M),y.sub(R.multiplyScalar(R.dot(M))).normalize(),x.crossVectors(C,M);const I=x.dot(c[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,I)}for(let N=0,M=E.length;N<M;++N){const S=E[N],I=S.start,F=S.count;for(let B=I,G=I+F;B<G;B+=3)P(e.getX(B+0)),P(e.getX(B+1)),P(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new b,s=new b,o=new b,a=new b,c=new b,l=new b,d=new b,u=new b;if(e)for(let h=0,f=e.count;h<f;h+=3){const m=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),a.add(d),c.add(d),l.add(d),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)In.fromBufferAttribute(e,t),In.normalize(),e.setXYZ(t,In.x,In.y,In.z)}toNonIndexed(){function e(a,c){const l=a.array,d=a.itemSize,u=a.normalized,h=new l.constructor(c.length*d);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*d;for(let p=0;p<d;p++)h[m++]=l[f++]}return new wi(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let d=0,u=l.length;d<u;d++){const h=l[d],f=e(h,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,h=l.length;u<h;u++){const f=l[u];d.push(f.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],u=s[l];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new Xt,ts=new Fa,rc=new Ao,Dh=new b,sc=new b,oc=new b,ac=new b,ql=new b,cc=new b,Ih=new b,lc=new b;class Ee extends gn{constructor(e=new Ut,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){cc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=a[c],u=s[c];d!==0&&(ql.fromBufferAttribute(u,e),o?cc.addScaledVector(ql,d):cc.addScaledVector(ql.sub(t),d))}t.add(cc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rc.copy(i.boundingSphere),rc.applyMatrix4(s),ts.copy(e.ray).recast(e.near),!(rc.containsPoint(ts.origin)===!1&&(ts.intersectSphere(rc,Dh)===null||ts.origin.distanceToSquared(Dh)>(e.far-e.near)**2))&&(Lh.copy(s).invert(),ts.copy(e.ray).applyMatrix4(Lh),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[g.materialIndex],E=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=E,R=y;x<R;x+=3){const C=a.getX(x),P=a.getX(x+1),N=a.getX(x+2);r=dc(this,p,e,i,l,d,u,C,P,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const E=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);r=dc(this,o,e,i,l,d,u,E,y,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[g.materialIndex],E=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=E,R=y;x<R;x+=3){const C=x,P=x+1,N=x+2;r=dc(this,p,e,i,l,d,u,C,P,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const E=g,y=g+1,x=g+2;r=dc(this,o,e,i,l,d,u,E,y,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function V0(n,e,t,i,r,s,o,a){let c;if(e.side===ui?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===yr,a),c===null)return null;lc.copy(a),lc.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(lc);return l<t.near||l>t.far?null:{distance:l,point:lc.clone(),object:n}}function dc(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,sc),n.getVertexPosition(c,oc),n.getVertexPosition(l,ac);const d=V0(n,e,t,i,sc,oc,ac,Ih);if(d){const u=new b;qi.getBarycoord(Ih,sc,oc,ac,u),r&&(d.uv=qi.getInterpolatedAttribute(r,a,c,l,u,new ze)),s&&(d.uv1=qi.getInterpolatedAttribute(s,a,c,l,u,new ze)),o&&(d.normal=qi.getInterpolatedAttribute(o,a,c,l,u,new b),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new b,materialIndex:0};qi.getNormal(sc,oc,ac,h.normal),d.face=h,d.barycoord=u}return d}class bn extends Ut{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],d=[],u=[];let h=0,f=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(u,2));function m(_,g,p,E,y,x,R,C,P,N,M){const S=x/P,I=R/N,F=x/2,B=R/2,G=C/2,J=P+1,q=N+1;let ce=0,X=0;const oe=new b;for(let Se=0;Se<q;Se++){const Ve=Se*I-B;for(let tt=0;tt<J;tt++){const mt=tt*S-F;oe[_]=mt*E,oe[g]=Ve*y,oe[p]=G,l.push(oe.x,oe.y,oe.z),oe[_]=0,oe[g]=0,oe[p]=C>0?1:-1,d.push(oe.x,oe.y,oe.z),u.push(tt/P),u.push(1-Se/N),ce+=1}}for(let Se=0;Se<N;Se++)for(let Ve=0;Ve<P;Ve++){const tt=h+Ve+J*Se,mt=h+Ve+J*(Se+1),xt=h+(Ve+1)+J*(Se+1),ee=h+(Ve+1)+J*Se;c.push(tt,mt,ee),c.push(mt,xt,ee),X+=6}a.addGroup(f,X,M),f+=X,h+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ni(n){const e={};for(let t=0;t<n.length;t++){const i=yo(n[t]);for(const r in i)e[r]=i[r]}return e}function G0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Pp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ht.workingColorSpace}const W0={clone:yo,merge:ni};var X0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends Ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X0,this.fragmentShader=q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=G0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Lp extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=sr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new b,Nh=new ze,Uh=new ze;class Mi extends Lp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,Nh,Uh),t.subVectors(Uh,Nh)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ta*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ys=-90,$s=1;class Y0 extends gn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mi(Ys,$s,e,t);r.layers=this.layers,this.add(r);const s=new Mi(Ys,$s,e,t);s.layers=this.layers,this.add(s);const o=new Mi(Ys,$s,e,t);o.layers=this.layers,this.add(o);const a=new Mi(Ys,$s,e,t);a.layers=this.layers,this.add(a);const c=new Mi(Ys,$s,e,t);c.layers=this.layers,this.add(c);const l=new Mi(Ys,$s,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===sr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Yc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Dp extends hi{constructor(e=[],t=_o,i,r,s,o,a,c,l,d){super(e,t,i,r,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $0 extends ws{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new bn(5,5,5),s=new Sr({name:"CubemapFromEquirect",uniforms:yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ui,blending:Vr});s.uniforms.tEquirect.value=t;const o=new Ee(r,s),a=t.minFilter;return t.minFilter===ms&&(t.minFilter=rr),new Y0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class xn extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j0={type:"move"};class Yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&h>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j0)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new xn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Z0 extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $l=new b,K0=new b,J0=new wt;class Or{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=$l.subVectors(i,t).cross(K0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($l),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||J0.getNormalMatrix(e),r=this.coplanarPoint($l).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Ao,Q0=new ze(.5,.5),uc=new b;class Bu{constructor(e=new Or,t=new Or,i=new Or,r=new Or,s=new Or,o=new Or){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=sr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],d=s[4],u=s[5],h=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],E=s[12],y=s[13],x=s[14],R=s[15];if(r[0].setComponents(l-o,f-d,p-m,R-E).normalize(),r[1].setComponents(l+o,f+d,p+m,R+E).normalize(),r[2].setComponents(l+a,f+u,p+_,R+y).normalize(),r[3].setComponents(l-a,f-u,p-_,R-y).normalize(),i)r[4].setComponents(c,h,g,x).normalize(),r[5].setComponents(l-c,f-h,p-g,R-x).normalize();else if(r[4].setComponents(l-c,f-h,p-g,R-x).normalize(),t===sr)r[5].setComponents(l+c,f+h,p+g,R+x).normalize();else if(t===Yc)r[5].setComponents(c,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);const t=Q0.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(uc.x=r.normal.x>0?e.max.x:e.min.x,uc.y=r.normal.y>0?e.max.y:e.min.y,uc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(uc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fi extends Ro{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jc=new b,Zc=new b,Fh=new Xt,Bo=new Fa,hc=new Ao,jl=new b,kh=new b;class hn extends gn{constructor(e=new Ut,t=new fi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)jc.fromBufferAttribute(t,r-1),Zc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=jc.distanceTo(Zc);e.setAttribute("lineDistance",new Rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hc.copy(i.boundingSphere),hc.applyMatrix4(r),hc.radius+=s,e.ray.intersectsSphere(hc)===!1)return;Fh.copy(r).invert(),Bo.copy(e.ray).applyMatrix4(Fh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=d.getX(_),E=d.getX(_+1),y=fc(this,e,Bo,c,p,E,_);y&&t.push(y)}if(this.isLineLoop){const _=d.getX(m-1),g=d.getX(f),p=fc(this,e,Bo,c,_,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=fc(this,e,Bo,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=fc(this,e,Bo,c,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function fc(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(jc.fromBufferAttribute(a,r),Zc.fromBufferAttribute(a,s),t.distanceSqToSegment(jc,Zc,jl,kh)>i)return;jl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(jl);if(!(l<e.near||l>e.far))return{distance:l,point:kh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Oh=new b,zh=new b;class Ip extends hn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Oh.fromBufferAttribute(t,r),zh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Oh.distanceTo(zh);e.setAttribute("lineDistance",new Rt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class e_ extends hn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Np extends Ro{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bh=new Xt,hu=new Fa,pc=new Ao,mc=new b;class Up extends gn{constructor(e=new Ut,t=new Np){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pc.copy(i.boundingSphere),pc.applyMatrix4(r),pc.radius+=s,e.ray.intersectsSphere(pc)===!1)return;Bh.copy(r).invert(),hu.copy(e.ray).applyMatrix4(Bh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=h,_=f;m<_;m++){const g=l.getX(m);mc.fromBufferAttribute(u,g),Hh(mc,g,c,r,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=h,_=f;m<_;m++)mc.fromBufferAttribute(u,m),Hh(mc,m,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Hh(n,e,t,i,r,s,o){const a=hu.distanceSqToPoint(n);if(a<t){const c=new b;hu.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Fp extends hi{constructor(e,t,i=bs,r,s,o,a=ji,c=ji,l,d=ha,u=1){if(d!==ha&&d!==fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,r,s,o,a,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ou(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ma extends Ut{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new b,d=new ze;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const f=i+u/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,c.push(d.x,d.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(a,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Xn extends Ut{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const d=[],u=[],h=[],f=[];let m=0;const _=[],g=i/2;let p=0;E(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(f,2));function E(){const x=new b,R=new b;let C=0;const P=(t-e)/i;for(let N=0;N<=s;N++){const M=[],S=N/s,I=S*(t-e)+e;for(let F=0;F<=r;F++){const B=F/r,G=B*c+a,J=Math.sin(G),q=Math.cos(G);R.x=I*J,R.y=-S*i+g,R.z=I*q,u.push(R.x,R.y,R.z),x.set(J,P,q).normalize(),h.push(x.x,x.y,x.z),f.push(B,1-S),M.push(m++)}_.push(M)}for(let N=0;N<r;N++)for(let M=0;M<s;M++){const S=_[M][N],I=_[M+1][N],F=_[M+1][N+1],B=_[M][N+1];(e>0||M!==0)&&(d.push(S,I,B),C+=3),(t>0||M!==s-1)&&(d.push(I,F,B),C+=3)}l.addGroup(p,C,0),p+=C}function y(x){const R=m,C=new ze,P=new b;let N=0;const M=x===!0?e:t,S=x===!0?1:-1;for(let F=1;F<=r;F++)u.push(0,g*S,0),h.push(0,S,0),f.push(.5,.5),m++;const I=m;for(let F=0;F<=r;F++){const G=F/r*c+a,J=Math.cos(G),q=Math.sin(G);P.x=M*q,P.y=g*S,P.z=M*J,u.push(P.x,P.y,P.z),h.push(0,S,0),C.x=J*.5+.5,C.y=q*.5*S+.5,f.push(C.x,C.y),m++}for(let F=0;F<r;F++){const B=R+F,G=I+F;x===!0?d.push(G,G+1,B):d.push(G+1,G,B),N+=3}l.addGroup(p,N,x===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hu extends Ut{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),d(),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(s.slice(),3)),this.setAttribute("uv",new Rt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const y=new b,x=new b,R=new b;for(let C=0;C<t.length;C+=3)f(t[C+0],y),f(t[C+1],x),f(t[C+2],R),c(y,x,R,E)}function c(E,y,x,R){const C=R+1,P=[];for(let N=0;N<=C;N++){P[N]=[];const M=E.clone().lerp(x,N/C),S=y.clone().lerp(x,N/C),I=C-N;for(let F=0;F<=I;F++)F===0&&N===C?P[N][F]=M:P[N][F]=M.clone().lerp(S,F/I)}for(let N=0;N<C;N++)for(let M=0;M<2*(C-N)-1;M++){const S=Math.floor(M/2);M%2===0?(h(P[N][S+1]),h(P[N+1][S]),h(P[N][S])):(h(P[N][S+1]),h(P[N+1][S+1]),h(P[N+1][S]))}}function l(E){const y=new b;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(E),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function d(){const E=new b;for(let y=0;y<s.length;y+=3){E.x=s[y+0],E.y=s[y+1],E.z=s[y+2];const x=g(E)/2/Math.PI+.5,R=p(E)/Math.PI+.5;o.push(x,1-R)}m(),u()}function u(){for(let E=0;E<o.length;E+=6){const y=o[E+0],x=o[E+2],R=o[E+4],C=Math.max(y,x,R),P=Math.min(y,x,R);C>.9&&P<.1&&(y<.2&&(o[E+0]+=1),x<.2&&(o[E+2]+=1),R<.2&&(o[E+4]+=1))}}function h(E){s.push(E.x,E.y,E.z)}function f(E,y){const x=E*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function m(){const E=new b,y=new b,x=new b,R=new b,C=new ze,P=new ze,N=new ze;for(let M=0,S=0;M<s.length;M+=9,S+=6){E.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),C.set(o[S+0],o[S+1]),P.set(o[S+2],o[S+3]),N.set(o[S+4],o[S+5]),R.copy(E).add(y).add(x).divideScalar(3);const I=g(R);_(C,S+0,E,I),_(P,S+2,y,I),_(N,S+4,x,I)}}function _(E,y,x,R){R<0&&E.x===1&&(o[y]=E.x-1),x.x===0&&x.z===0&&(o[y]=R/2/Math.PI+.5)}function g(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hu(e.vertices,e.indices,e.radius,e.details)}}class cr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const d=i[r],h=i[r+1]-d,f=(o-d)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new ze:new b);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new b,r=[],s=[],o=[],a=new b,c=new Xt;for(let f=0;f<=e;f++){const m=f/e;r[f]=this.getTangentAt(m,new b)}s[0]=new b,o[0]=new b;let l=Number.MAX_VALUE;const d=Math.abs(r[0].x),u=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=l&&(l=d,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Tt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Tt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(r[m],f*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vu extends cr{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ze){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*d-f*u+this.aX,l=h*u+f*d+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class t_ extends Vu{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gu(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,d,u){let h=(o-s)/l-(a-s)/(l+d)+(a-o)/d,f=(a-o)/d-(c-o)/(d+u)+(c-a)/u;h*=d,f*=d,r(o,a,h,f)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const gc=new b,Zl=new Gu,Kl=new Gu,Jl=new Gu;class Wu extends cr{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new b){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,d;this.closed||a>0?l=r[(a-1)%s]:(gc.subVectors(r[0],r[1]).add(r[0]),l=gc);const u=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(gc.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=gc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Zl.initNonuniformCatmullRom(l.x,u.x,h.x,d.x,m,_,g),Kl.initNonuniformCatmullRom(l.y,u.y,h.y,d.y,m,_,g),Jl.initNonuniformCatmullRom(l.z,u.z,h.z,d.z,m,_,g)}else this.curveType==="catmullrom"&&(Zl.initCatmullRom(l.x,u.x,h.x,d.x,this.tension),Kl.initCatmullRom(l.y,u.y,h.y,d.y,this.tension),Jl.initCatmullRom(l.z,u.z,h.z,d.z,this.tension));return i.set(Zl.calc(c),Kl.calc(c),Jl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new b().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Vh(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function n_(n,e){const t=1-n;return t*t*e}function i_(n,e){return 2*(1-n)*n*e}function r_(n,e){return n*n*e}function ia(n,e,t,i){return n_(n,e)+i_(n,t)+r_(n,i)}function s_(n,e){const t=1-n;return t*t*t*e}function o_(n,e){const t=1-n;return 3*t*t*n*e}function a_(n,e){return 3*(1-n)*n*n*e}function c_(n,e){return n*n*n*e}function ra(n,e,t,i,r){return s_(n,e)+o_(n,t)+a_(n,i)+c_(n,r)}class kp extends cr{constructor(e=new ze,t=new ze,i=new ze,r=new ze){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ze){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ra(e,r.x,s.x,o.x,a.x),ra(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class l_ extends cr{constructor(e=new b,t=new b,i=new b,r=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new b){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ra(e,r.x,s.x,o.x,a.x),ra(e,r.y,s.y,o.y,a.y),ra(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Op extends cr{constructor(e=new ze,t=new ze){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ze){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ze){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class d_ extends cr{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zp extends cr{constructor(e=new ze,t=new ze,i=new ze){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ze){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ia(e,r.x,s.x,o.x),ia(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class u_ extends cr{constructor(e=new b,t=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ia(e,r.x,s.x,o.x),ia(e,r.y,s.y,o.y),ia(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bp extends cr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ze){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],d=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(Vh(a,c.x,l.x,d.x,u.x),Vh(a,c.y,l.y,d.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ze().fromArray(r))}return this}}var Gh=Object.freeze({__proto__:null,ArcCurve:t_,CatmullRomCurve3:Wu,CubicBezierCurve:kp,CubicBezierCurve3:l_,EllipseCurve:Vu,LineCurve:Op,LineCurve3:d_,QuadraticBezierCurve:zp,QuadraticBezierCurve3:u_,SplineCurve:Bp});class h_ extends cr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gh[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const d=c[l];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Gh[r.type]().fromJSON(r))}return this}}class Wh extends h_{constructor(e){super(),this.type="Path",this.currentPoint=new ze,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Op(this.currentPoint.clone(),new ze(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new zp(this.currentPoint.clone(),new ze(e,t),new ze(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new kp(this.currentPoint.clone(),new ze(e,t),new ze(i,r),new ze(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Bp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+l,t+d,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new Vu(e,t,i,r,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const d=l.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Hp extends Wh{constructor(e){super(e),this.uuid=Ls(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Wh().fromJSON(r))}return this}}function f_(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Vp(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=v_(n,e,s,t)),n.length>80*t){a=1/0,c=1/0;let d=-1/0,u=-1/0;for(let h=t;h<r;h+=t){const f=n[h],m=n[h+1];f<a&&(a=f),m<c&&(c=m),f>d&&(d=f),m>u&&(u=m)}l=Math.max(d-a,u-c),l=l!==0?32767/l:0}return ga(s,o,t,a,c,l,0),o}function Vp(n,e,t,i,r){let s;if(r===C_(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Xh(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Xh(o/i|0,n[o],n[o+1],s);return s&&So(s,s.next)&&(va(s),s=s.next),s}function Es(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(So(t,t.next)||pn(t.prev,t,t.next)===0)){if(va(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ga(n,e,t,i,r,s,o){if(!n)return;!o&&s&&b_(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?m_(n,i,r,s):p_(n)){e.push(c.i,n.i,l.i),va(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=g_(Es(n),e),ga(n,e,t,i,r,s,2)):o===2&&__(n,e,t,i,r,s):ga(Es(n),e,t,i,r,s,1);break}}}function p_(n){const e=n.prev,t=n,i=n.next;if(pn(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,d=Math.min(r,s,o),u=Math.min(a,c,l),h=Math.max(r,s,o),f=Math.max(a,c,l);let m=i.next;for(;m!==e;){if(m.x>=d&&m.x<=h&&m.y>=u&&m.y<=f&&Zo(r,a,s,c,o,l,m.x,m.y)&&pn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function m_(n,e,t,i){const r=n.prev,s=n,o=n.next;if(pn(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,d=r.y,u=s.y,h=o.y,f=Math.min(a,c,l),m=Math.min(d,u,h),_=Math.max(a,c,l),g=Math.max(d,u,h),p=fu(f,m,e,t,i),E=fu(_,g,e,t,i);let y=n.prevZ,x=n.nextZ;for(;y&&y.z>=p&&x&&x.z<=E;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&Zo(a,d,c,u,l,h,y.x,y.y)&&pn(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&Zo(a,d,c,u,l,h,x.x,x.y)&&pn(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&Zo(a,d,c,u,l,h,y.x,y.y)&&pn(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=E;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&Zo(a,d,c,u,l,h,x.x,x.y)&&pn(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function g_(n,e){let t=n;do{const i=t.prev,r=t.next.next;!So(i,r)&&Wp(i,t,t.next,r)&&_a(i,r)&&_a(r,i)&&(e.push(i.i,t.i,r.i),va(t),va(t.next),t=n=r),t=t.next}while(t!==n);return Es(t)}function __(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&T_(o,a)){let c=Xp(o,a);o=Es(o,o.next),c=Es(c,c.next),ga(o,e,t,i,r,s,0),ga(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function v_(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=Vp(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(E_(l))}r.sort(x_);for(let s=0;s<r.length;s++)t=y_(r[s],t);return t}function x_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function y_(n,e){const t=S_(n,e);if(!t)return e;const i=Xp(t,n);return Es(i,i.next),Es(t,t.next)}function S_(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(So(n,t))return t;do{if(So(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let d=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Gp(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const u=Math.abs(r-t.y)/(i-t.x);_a(t,n)&&(u<d||u===d&&(t.x>o.x||t.x===o.x&&M_(o,t)))&&(o=t,d=u)}t=t.next}while(t!==a);return o}function M_(n,e){return pn(n.prev,n,e.prev)<0&&pn(e.next,n,n.next)<0}function b_(n,e,t,i){let r=n;do r.z===0&&(r.z=fu(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,w_(r)}function w_(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function fu(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function E_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Gp(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Zo(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&Gp(n,e,t,i,r,s,o,a)}function T_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!A_(n,e)&&(_a(n,e)&&_a(e,n)&&R_(n,e)&&(pn(n.prev,n,e.prev)||pn(n,e.prev,e))||So(n,e)&&pn(n.prev,n,n.next)>0&&pn(e.prev,e,e.next)>0)}function pn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function So(n,e){return n.x===e.x&&n.y===e.y}function Wp(n,e,t,i){const r=vc(pn(n,e,t)),s=vc(pn(n,e,i)),o=vc(pn(t,i,n)),a=vc(pn(t,i,e));return!!(r!==s&&o!==a||r===0&&_c(n,t,e)||s===0&&_c(n,i,e)||o===0&&_c(t,n,i)||a===0&&_c(t,e,i))}function _c(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function vc(n){return n>0?1:n<0?-1:0}function A_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Wp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function _a(n,e){return pn(n.prev,n,n.next)<0?pn(n,e,n.next)>=0&&pn(n,n.prev,e)>=0:pn(n,e,n.prev)<0||pn(n,n.next,e)<0}function R_(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Xp(n,e){const t=pu(n.i,n.x,n.y),i=pu(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Xh(n,e,t,i){const r=pu(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function va(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function pu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function C_(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class P_{static triangulate(e,t,i=2){return f_(e,t,i)}}class sa{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return sa.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];qh(e),Yh(i,e);let o=e.length;t.forEach(qh);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,Yh(i,t[c]);const a=P_.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function qh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Yh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class gs extends Hu{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gs(e.radius,e.detail)}}class Xr extends Ut{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,d=c+1,u=e/a,h=t/c,f=[],m=[],_=[],g=[];for(let p=0;p<d;p++){const E=p*h-o;for(let y=0;y<l;y++){const x=y*u-s;m.push(x,-E,0),_.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){const y=E+l*p,x=E+l*(p+1),R=E+1+l*(p+1),C=E+1+l*p;f.push(y,x,C),f.push(x,R,C)}this.setIndex(f),this.setAttribute("position",new Rt(m,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.widthSegments,e.heightSegments)}}class fl extends Ut{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],d=[];let u=e;const h=(t-e)/r,f=new b,m=new ze;for(let _=0;_<=r;_++){for(let g=0;g<=i;g++){const p=s+g/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,d.push(m.x,m.y)}u+=h}for(let _=0;_<r;_++){const g=_*(i+1);for(let p=0;p<i;p++){const E=p+g,y=E,x=E+i+1,R=E+i+2,C=E+1;a.push(y,x,C),a.push(x,R,C)}}this.setIndex(a),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Xu extends Ut{constructor(e=new Hp([new ze(0,.5),new ze(-.5,-.5),new ze(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let d=0;d<e.length;d++)l(e[d]),this.addGroup(a,c,d),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Rt(r,3)),this.setAttribute("normal",new Rt(s,3)),this.setAttribute("uv",new Rt(o,2));function l(d){const u=r.length/3,h=d.extractPoints(t);let f=h.shape;const m=h.holes;sa.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const E=m[g];sa.isClockWise(E)===!0&&(m[g]=E.reverse())}const _=sa.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const E=m[g];f=f.concat(E)}for(let g=0,p=f.length;g<p;g++){const E=f[g];r.push(E.x,E.y,0),s.push(0,0,1),o.push(E.x,E.y)}for(let g=0,p=_.length;g<p;g++){const E=_[g],y=E[0]+u,x=E[1]+u,R=E[2]+u;i.push(y,x,R),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return L_(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new Xu(i,e.curveSegments)}}function L_(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class Wr extends Ut{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const d=[],u=new b,h=new b,f=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const E=[],y=p/i;let x=0;p===0&&o===0?x=.5/t:p===i&&c===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){const C=R/t;u.x=-e*Math.cos(r+C*s)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(r+C*s)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),h.copy(u).normalize(),_.push(h.x,h.y,h.z),g.push(C+x,1-y),E.push(l++)}d.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){const y=d[p][E+1],x=d[p][E],R=d[p+1][E],C=d[p+1][E+1];(p!==0||o>0)&&f.push(y,x,C),(p!==i-1||c<Math.PI)&&f.push(x,R,C)}this.setIndex(f),this.setAttribute("position",new Rt(m,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class us extends Ut{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],d=new b,u=new b,h=new b;for(let f=0;f<=i;f++)for(let m=0;m<=r;m++){const _=m/r*s,g=f/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),h.subVectors(u,d).normalize(),c.push(h.x,h.y,h.z),l.push(m/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=r;m++){const _=(r+1)*f+m-1,g=(r+1)*(f-1)+m-1,p=(r+1)*(f-1)+m,E=(r+1)*f+m;o.push(_,g,E),o.push(g,p,E)}this.setIndex(o),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class D_ extends Ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class I_ extends Ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class N_ extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ql=new Xt,$h=new b,jh=new b;class U_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=ar,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bu,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;$h.setFromMatrixPosition(e.matrixWorld),t.position.copy($h),jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jh),t.updateMatrixWorld(),Ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zh=new Xt,Ho=new b,ed=new b;class F_ extends U_{constructor(){super(new Mi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new kt(2,1,1,1),new kt(0,1,1,1),new kt(3,1,1,1),new kt(1,1,1,1),new kt(3,0,1,1),new kt(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ho.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ho),ed.copy(i.position),ed.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ed),i.updateMatrixWorld(),r.makeTranslation(-Ho.x,-Ho.y,-Ho.z),Zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh,i.coordinateSystem,i.reversedDepth)}}class k_ extends N_{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new F_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class O_ extends Lp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class z_ extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Kh=new Xt;class qp{constructor(e,t,i=0,r=1/0){this.ray=new Fa(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new zu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kh),this}intersectObject(e,t=!0,i=[]){return mu(e,this,i,t),i.sort(Jh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)mu(e[r],this,i,t);return i.sort(Jh),i}}function Jh(n,e){return n.distance-e.distance}function mu(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)mu(s[o],e,t,!0)}}class Qh{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Yp extends Ps{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ef(n,e,t,i){const r=B_(i);switch(t){case xp:return n*e;case Sp:return n*e/r.components*r.byteLength;case Nu:return n*e/r.components*r.byteLength;case Mp:return n*e*2/r.components*r.byteLength;case Uu:return n*e*2/r.components*r.byteLength;case yp:return n*e*3/r.components*r.byteLength;case Yi:return n*e*4/r.components*r.byteLength;case Fu:return n*e*4/r.components*r.byteLength;case Dc:case Ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nc:case Uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hd:case Gd:return Math.max(n,16)*Math.max(e,8)/4;case Bd:case Vd:return Math.max(n,8)*Math.max(e,8)/2;case Wd:case Xd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case eu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case tu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case nu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case iu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ru:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case su:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ou:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fc:case au:case cu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bp:case lu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case du:case uu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function B_(n){switch(n){case ar:case gp:return{byteLength:1,components:1};case da:case _p:case Ua:return{byteLength:2,components:1};case Du:case Iu:return{byteLength:2,components:4};case bs:case Lu:case gr:return{byteLength:4,components:1};case vp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pu);function $p(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function H_(n){const e=new WeakMap;function t(a,c){const l=a.array,d=a.usage,u=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,d),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const d=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,d);else{u.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<u.length;f++){const m=u[h],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,u[h]=_)}u.length=h+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];n.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var V_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,W_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,j_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,K_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ev=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_v=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vv="gl_FragColor = linearToOutputTexel( gl_FragColor );",xv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ev=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Av=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Uv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$v=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Px=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ux=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$x=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ty=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ny=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ry=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ay=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ly=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,py=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,my=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_y=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Et={alphahash_fragment:V_,alphahash_pars_fragment:G_,alphamap_fragment:W_,alphamap_pars_fragment:X_,alphatest_fragment:q_,alphatest_pars_fragment:Y_,aomap_fragment:$_,aomap_pars_fragment:j_,batching_pars_vertex:Z_,batching_vertex:K_,begin_vertex:J_,beginnormal_vertex:Q_,bsdfs:ev,iridescence_fragment:tv,bumpmap_pars_fragment:nv,clipping_planes_fragment:iv,clipping_planes_pars_fragment:rv,clipping_planes_pars_vertex:sv,clipping_planes_vertex:ov,color_fragment:av,color_pars_fragment:cv,color_pars_vertex:lv,color_vertex:dv,common:uv,cube_uv_reflection_fragment:hv,defaultnormal_vertex:fv,displacementmap_pars_vertex:pv,displacementmap_vertex:mv,emissivemap_fragment:gv,emissivemap_pars_fragment:_v,colorspace_fragment:vv,colorspace_pars_fragment:xv,envmap_fragment:yv,envmap_common_pars_fragment:Sv,envmap_pars_fragment:Mv,envmap_pars_vertex:bv,envmap_physical_pars_fragment:Nv,envmap_vertex:wv,fog_vertex:Ev,fog_pars_vertex:Tv,fog_fragment:Av,fog_pars_fragment:Rv,gradientmap_pars_fragment:Cv,lightmap_pars_fragment:Pv,lights_lambert_fragment:Lv,lights_lambert_pars_fragment:Dv,lights_pars_begin:Iv,lights_toon_fragment:Uv,lights_toon_pars_fragment:Fv,lights_phong_fragment:kv,lights_phong_pars_fragment:Ov,lights_physical_fragment:zv,lights_physical_pars_fragment:Bv,lights_fragment_begin:Hv,lights_fragment_maps:Vv,lights_fragment_end:Gv,logdepthbuf_fragment:Wv,logdepthbuf_pars_fragment:Xv,logdepthbuf_pars_vertex:qv,logdepthbuf_vertex:Yv,map_fragment:$v,map_pars_fragment:jv,map_particle_fragment:Zv,map_particle_pars_fragment:Kv,metalnessmap_fragment:Jv,metalnessmap_pars_fragment:Qv,morphinstance_vertex:ex,morphcolor_vertex:tx,morphnormal_vertex:nx,morphtarget_pars_vertex:ix,morphtarget_vertex:rx,normal_fragment_begin:sx,normal_fragment_maps:ox,normal_pars_fragment:ax,normal_pars_vertex:cx,normal_vertex:lx,normalmap_pars_fragment:dx,clearcoat_normal_fragment_begin:ux,clearcoat_normal_fragment_maps:hx,clearcoat_pars_fragment:fx,iridescence_pars_fragment:px,opaque_fragment:mx,packing:gx,premultiplied_alpha_fragment:_x,project_vertex:vx,dithering_fragment:xx,dithering_pars_fragment:yx,roughnessmap_fragment:Sx,roughnessmap_pars_fragment:Mx,shadowmap_pars_fragment:bx,shadowmap_pars_vertex:wx,shadowmap_vertex:Ex,shadowmask_pars_fragment:Tx,skinbase_vertex:Ax,skinning_pars_vertex:Rx,skinning_vertex:Cx,skinnormal_vertex:Px,specularmap_fragment:Lx,specularmap_pars_fragment:Dx,tonemapping_fragment:Ix,tonemapping_pars_fragment:Nx,transmission_fragment:Ux,transmission_pars_fragment:Fx,uv_pars_fragment:kx,uv_pars_vertex:Ox,uv_vertex:zx,worldpos_vertex:Bx,background_vert:Hx,background_frag:Vx,backgroundCube_vert:Gx,backgroundCube_frag:Wx,cube_vert:Xx,cube_frag:qx,depth_vert:Yx,depth_frag:$x,distanceRGBA_vert:jx,distanceRGBA_frag:Zx,equirect_vert:Kx,equirect_frag:Jx,linedashed_vert:Qx,linedashed_frag:ey,meshbasic_vert:ty,meshbasic_frag:ny,meshlambert_vert:iy,meshlambert_frag:ry,meshmatcap_vert:sy,meshmatcap_frag:oy,meshnormal_vert:ay,meshnormal_frag:cy,meshphong_vert:ly,meshphong_frag:dy,meshphysical_vert:uy,meshphysical_frag:hy,meshtoon_vert:fy,meshtoon_frag:py,points_vert:my,points_frag:gy,shadow_vert:_y,shadow_frag:vy,sprite_vert:xy,sprite_frag:yy},He={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},ir={basic:{uniforms:ni([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:ni([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:ni([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:ni([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:ni([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:ni([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:ni([He.points,He.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:ni([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:ni([He.common,He.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:ni([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:ni([He.sprite,He.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:ni([He.common,He.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:ni([He.lights,He.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};ir.physical={uniforms:ni([ir.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const xc={r:0,b:0,g:0},is=new Zn,Sy=new Xt;function My(n,e,t,i,r,s,o){const a=new Nt(0);let c=s===!0?0:1,l,d,u=null,h=0,f=null;function m(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const R=m(y);R===null?p(a,c):R&&R.isColor&&(p(R,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(y,x){const R=m(x);R&&(R.isCubeTexture||R.mapping===hl)?(d===void 0&&(d=new Ee(new bn(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:yo(ir.backgroundCube.uniforms),vertexShader:ir.backgroundCube.vertexShader,fragmentShader:ir.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),is.copy(x.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(is)),d.material.toneMapped=Ht.getTransfer(R.colorSpace)!==Yt,(u!==R||h!==R.version||f!==n.toneMapping)&&(d.material.needsUpdate=!0,u=R,h=R.version,f=n.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Ee(new Xr(2,2),new Sr({name:"BackgroundMaterial",uniforms:yo(ir.background.uniforms),vertexShader:ir.background.vertexShader,fragmentShader:ir.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ht.getTransfer(R.colorSpace)!==Yt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||h!==R.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=R,h=R.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(xc,Pp(n)),i.buffers.color.setClear(xc.r,xc.g,xc.b,x,o)}function E(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:g,dispose:E}}function by(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,I,F,B,G){let J=!1;const q=u(B,F,I);s!==q&&(s=q,l(s.object)),J=f(S,B,F,G),J&&m(S,B,F,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,x(S,I,F,B),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function d(S){return n.deleteVertexArray(S)}function u(S,I,F){const B=F.wireframe===!0;let G=i[S.id];G===void 0&&(G={},i[S.id]=G);let J=G[I.id];J===void 0&&(J={},G[I.id]=J);let q=J[B];return q===void 0&&(q=h(c()),J[B]=q),q}function h(S){const I=[],F=[],B=[];for(let G=0;G<t;G++)I[G]=0,F[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:B,object:S,attributes:{},index:null}}function f(S,I,F,B){const G=s.attributes,J=I.attributes;let q=0;const ce=F.getAttributes();for(const X in ce)if(ce[X].location>=0){const Se=G[X];let Ve=J[X];if(Ve===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Ve=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Ve=S.instanceColor)),Se===void 0||Se.attribute!==Ve||Ve&&Se.data!==Ve.data)return!0;q++}return s.attributesNum!==q||s.index!==B}function m(S,I,F,B){const G={},J=I.attributes;let q=0;const ce=F.getAttributes();for(const X in ce)if(ce[X].location>=0){let Se=J[X];Se===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Se=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Se=S.instanceColor));const Ve={};Ve.attribute=Se,Se&&Se.data&&(Ve.data=Se.data),G[X]=Ve,q++}s.attributes=G,s.attributesNum=q,s.index=B}function _(){const S=s.newAttributes;for(let I=0,F=S.length;I<F;I++)S[I]=0}function g(S){p(S,0)}function p(S,I){const F=s.newAttributes,B=s.enabledAttributes,G=s.attributeDivisors;F[S]=1,B[S]===0&&(n.enableVertexAttribArray(S),B[S]=1),G[S]!==I&&(n.vertexAttribDivisor(S,I),G[S]=I)}function E(){const S=s.newAttributes,I=s.enabledAttributes;for(let F=0,B=I.length;F<B;F++)I[F]!==S[F]&&(n.disableVertexAttribArray(F),I[F]=0)}function y(S,I,F,B,G,J,q){q===!0?n.vertexAttribIPointer(S,I,F,G,J):n.vertexAttribPointer(S,I,F,B,G,J)}function x(S,I,F,B){_();const G=B.attributes,J=F.getAttributes(),q=I.defaultAttributeValues;for(const ce in J){const X=J[ce];if(X.location>=0){let oe=G[ce];if(oe===void 0&&(ce==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),ce==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),oe!==void 0){const Se=oe.normalized,Ve=oe.itemSize,tt=e.get(oe);if(tt===void 0)continue;const mt=tt.buffer,xt=tt.type,ee=tt.bytesPerElement,we=xt===n.INT||xt===n.UNSIGNED_INT||oe.gpuType===Lu;if(oe.isInterleavedBufferAttribute){const ie=oe.data,Ye=ie.stride,ne=oe.offset;if(ie.isInstancedInterleavedBuffer){for(let he=0;he<X.locationSize;he++)p(X.location+he,ie.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let he=0;he<X.locationSize;he++)g(X.location+he);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let he=0;he<X.locationSize;he++)y(X.location+he,Ve/X.locationSize,xt,Se,Ye*ee,(ne+Ve/X.locationSize*he)*ee,we)}else{if(oe.isInstancedBufferAttribute){for(let ie=0;ie<X.locationSize;ie++)p(X.location+ie,oe.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ie=0;ie<X.locationSize;ie++)g(X.location+ie);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let ie=0;ie<X.locationSize;ie++)y(X.location+ie,Ve/X.locationSize,xt,Se,Ve*ee,Ve/X.locationSize*ie*ee,we)}}else if(q!==void 0){const Se=q[ce];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(X.location,Se);break;case 3:n.vertexAttrib3fv(X.location,Se);break;case 4:n.vertexAttrib4fv(X.location,Se);break;default:n.vertexAttrib1fv(X.location,Se)}}}}E()}function R(){N();for(const S in i){const I=i[S];for(const F in I){const B=I[F];for(const G in B)d(B[G].object),delete B[G];delete I[F]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const F in I){const B=I[F];for(const G in B)d(B[G].object),delete B[G];delete I[F]}delete i[S.id]}function P(S){for(const I in i){const F=i[I];if(F[S.id]===void 0)continue;const B=F[S.id];for(const G in B)d(B[G].object),delete B[G];delete F[S.id]}}function N(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:E}}function wy(n,e,t){let i;function r(l){i=l}function s(l,d){n.drawArrays(i,l,d),t.update(d,i,1)}function o(l,d,u){u!==0&&(n.drawArraysInstanced(i,l,d,u),t.update(d,i,u))}function a(l,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,u);let f=0;for(let m=0;m<u;m++)f+=d[m];t.update(f,i,1)}function c(l,d,u,h){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],d[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,d,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=d[_]*h[_];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ey(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Yi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const N=P===Ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ar&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==gr&&!N)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:R,maxSamples:C}}function Ty(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Or,a=new wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||i!==0||r;return r=h,i=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=n.get(u);if(!r||m===null||m.length===0||s&&!g)s?d(null):l();else{const E=s?0:i,y=E*4;let x=p.clippingState||null;c.value=x,x=d(m,h,y,f);for(let R=0;R!==y;++R)x[R]=t[R];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(E,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Ay(n){let e=new WeakMap;function t(o,a){return a===Fd?o.mapping=_o:a===kd&&(o.mapping=vo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fd||a===kd)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new $0(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const no=4,tf=[.125,.215,.35,.446,.526,.582],hs=20,td=new O_,nf=new Nt;let nd=null,id=0,rd=0,sd=!1;const as=(1+Math.sqrt(5))/2,js=1/as,rf=[new b(-as,js,0),new b(as,js,0),new b(-js,0,as),new b(js,0,as),new b(0,as,-js),new b(0,as,js),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],Ry=new b;class sf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Ry}=s;nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nd,id,rd),this._renderer.xr.enabled=sd,e.scissorTest=!1,yc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_o||e.mapping===vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rr,minFilter:rr,generateMipmaps:!1,type:Ua,format:Yi,colorSpace:xo,depthBuffer:!1},r=of(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=of(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cy(s)),this._blurMaterial=Py(s,e,t)}return r}_compileMaterial(e){const t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,td)}_sceneToCubeUV(e,t,i,r,s){const c=new Mi(90,1,t,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(nf),u.toneMapping=Gr,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const _=new vn({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1}),g=new Ee(new bn,_);let p=!1;const E=e.background;E?E.isColor&&(_.color.copy(E),e.background=null,p=!0):(_.color.copy(nf),p=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[y],s.y,s.z)):x===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[y]));const R=this._cubeSize;yc(r,x*R,y>2?R:0,R,R),u.setRenderTarget(r),p&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===_o||e.mapping===vo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;yc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,td)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=rf[(r-s-1)%rf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Ee(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*hs-1),_=s/m,g=isFinite(s)?1+Math.floor(d*_):hs;g>hs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hs}`);const p=[];let E=0;for(let P=0;P<hs;++P){const N=P/_,M=Math.exp(-N*N/2);p.push(M),P===0?E+=M:P<g&&(E+=2*M)}for(let P=0;P<p.length;P++)p[P]=p[P]/E;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=m,h.mipInt.value=y-i;const x=this._sizeLods[r],R=3*x*(r>y-no?r-y+no:0),C=4*(this._cubeSize-x);yc(t,R,C,3*x,2*x),c.setRenderTarget(t),c.render(u,td)}}function Cy(n){const e=[],t=[],i=[];let r=n;const s=n-no+1+tf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-no?c=tf[o-n+no-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),d=-l,u=1+l,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,m=6,_=3,g=2,p=1,E=new Float32Array(_*m*f),y=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let C=0;C<f;C++){const P=C%3*2/3-1,N=C>2?0:-1,M=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];E.set(M,_*m*C),y.set(h,g*m*C);const S=[C,C,C,C,C,C];x.set(S,p*m*C)}const R=new Ut;R.setAttribute("position",new wi(E,_)),R.setAttribute("uv",new wi(y,g)),R.setAttribute("faceIndex",new wi(x,p)),e.push(R),r>no&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function of(n,e,t){const i=new ws(n,e,t);return i.texture.mapping=hl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Py(n,e,t){const i=new Float32Array(hs),r=new b(0,1,0);return new Sr({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function af(){return new Sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function cf(){return new Sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function qu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ly(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Fd||c===kd,d=c===_o||c===vo;if(l||d){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new sf(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||d&&f&&r(f)?(t===null&&(t=new sf(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Dy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ao("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Iy(n,e,t,i){const r={},s=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(u){const h=u.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function l(u){const h=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let y=0,x=E.length;y<x;y+=3){const R=E[y+0],C=E[y+1],P=E[y+2];h.push(R,C,C,P,P,R)}}else if(m!==void 0){const E=m.array;_=m.version;for(let y=0,x=E.length/3-1;y<x;y+=3){const R=y+0,C=y+1,P=y+2;h.push(R,C,C,P,P,R)}}else return;const g=new(Ep(h)?Cp:Rp)(h,1);g.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,g)}function d(u){const h=s.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:d}}function Ny(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function l(h,f,m){m!==0&&(n.drawElementsInstanced(i,f,s,h*o,m),t.update(f,i,m))}function d(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,i,1)}function u(h,f,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,_,0,m);let p=0;for(let E=0;E<m;E++)p+=f[E]*_[E];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Uy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Fy(n,e,t){const i=new WeakMap,r=new kt;function s(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==u){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const C=new Float32Array(x*R*4*u),P=new Tp(C,x,R,u);P.type=gr,P.needsUpdate=!0;const N=y*4;for(let S=0;S<u;S++){const I=g[S],F=p[S],B=E[S],G=x*R*4*S;for(let J=0;J<I.count;J++){const q=J*N;f===!0&&(r.fromBufferAttribute(I,J),C[G+q+0]=r.x,C[G+q+1]=r.y,C[G+q+2]=r.z,C[G+q+3]=0),m===!0&&(r.fromBufferAttribute(F,J),C[G+q+4]=r.x,C[G+q+5]=r.y,C[G+q+6]=r.z,C[G+q+7]=0),_===!0&&(r.fromBufferAttribute(B,J),C[G+q+8]=r.x,C[G+q+9]=r.y,C[G+q+10]=r.z,C[G+q+11]=B.itemSize===4?r.w:1)}}h={count:u,texture:P,size:new ze(x,R)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function ky(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return u}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const jp=new hi,lf=new Fp(1,1),Zp=new Tp,Kp=new L0,Jp=new Dp,df=[],uf=[],hf=new Float32Array(16),ff=new Float32Array(9),pf=new Float32Array(4);function Co(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=df[r];if(s===void 0&&(s=new Float32Array(r),df[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Pn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ln(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pl(n,e){let t=uf[e];t===void 0&&(t=new Int32Array(e),uf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Oy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;n.uniform2fv(this.addr,e),Ln(t,e)}}function By(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pn(t,e))return;n.uniform3fv(this.addr,e),Ln(t,e)}}function Hy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;n.uniform4fv(this.addr,e),Ln(t,e)}}function Vy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ln(t,e)}else{if(Pn(t,i))return;pf.set(i),n.uniformMatrix2fv(this.addr,!1,pf),Ln(t,i)}}function Gy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ln(t,e)}else{if(Pn(t,i))return;ff.set(i),n.uniformMatrix3fv(this.addr,!1,ff),Ln(t,i)}}function Wy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ln(t,e)}else{if(Pn(t,i))return;hf.set(i),n.uniformMatrix4fv(this.addr,!1,hf),Ln(t,i)}}function Xy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;n.uniform2iv(this.addr,e),Ln(t,e)}}function Yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pn(t,e))return;n.uniform3iv(this.addr,e),Ln(t,e)}}function $y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;n.uniform4iv(this.addr,e),Ln(t,e)}}function jy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;n.uniform2uiv(this.addr,e),Ln(t,e)}}function Ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pn(t,e))return;n.uniform3uiv(this.addr,e),Ln(t,e)}}function Jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;n.uniform4uiv(this.addr,e),Ln(t,e)}}function Qy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(lf.compareFunction=wp,s=lf):s=jp,t.setTexture2D(e||s,r)}function eS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Kp,r)}function tS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Jp,r)}function nS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Zp,r)}function iS(n){switch(n){case 5126:return Oy;case 35664:return zy;case 35665:return By;case 35666:return Hy;case 35674:return Vy;case 35675:return Gy;case 35676:return Wy;case 5124:case 35670:return Xy;case 35667:case 35671:return qy;case 35668:case 35672:return Yy;case 35669:case 35673:return $y;case 5125:return jy;case 36294:return Zy;case 36295:return Ky;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return eS;case 35680:case 36300:case 36308:case 36293:return tS;case 36289:case 36303:case 36311:case 36292:return nS}}function rS(n,e){n.uniform1fv(this.addr,e)}function sS(n,e){const t=Co(e,this.size,2);n.uniform2fv(this.addr,t)}function oS(n,e){const t=Co(e,this.size,3);n.uniform3fv(this.addr,t)}function aS(n,e){const t=Co(e,this.size,4);n.uniform4fv(this.addr,t)}function cS(n,e){const t=Co(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lS(n,e){const t=Co(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dS(n,e){const t=Co(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uS(n,e){n.uniform1iv(this.addr,e)}function hS(n,e){n.uniform2iv(this.addr,e)}function fS(n,e){n.uniform3iv(this.addr,e)}function pS(n,e){n.uniform4iv(this.addr,e)}function mS(n,e){n.uniform1uiv(this.addr,e)}function gS(n,e){n.uniform2uiv(this.addr,e)}function _S(n,e){n.uniform3uiv(this.addr,e)}function vS(n,e){n.uniform4uiv(this.addr,e)}function xS(n,e,t){const i=this.cache,r=e.length,s=pl(t,r);Pn(i,s)||(n.uniform1iv(this.addr,s),Ln(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||jp,s[o])}function yS(n,e,t){const i=this.cache,r=e.length,s=pl(t,r);Pn(i,s)||(n.uniform1iv(this.addr,s),Ln(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Kp,s[o])}function SS(n,e,t){const i=this.cache,r=e.length,s=pl(t,r);Pn(i,s)||(n.uniform1iv(this.addr,s),Ln(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Jp,s[o])}function MS(n,e,t){const i=this.cache,r=e.length,s=pl(t,r);Pn(i,s)||(n.uniform1iv(this.addr,s),Ln(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Zp,s[o])}function bS(n){switch(n){case 5126:return rS;case 35664:return sS;case 35665:return oS;case 35666:return aS;case 35674:return cS;case 35675:return lS;case 35676:return dS;case 5124:case 35670:return uS;case 35667:case 35671:return hS;case 35668:case 35672:return fS;case 35669:case 35673:return pS;case 5125:return mS;case 36294:return gS;case 36295:return _S;case 36296:return vS;case 35678:case 36198:case 36298:case 36306:case 35682:return xS;case 35679:case 36299:case 36307:return yS;case 35680:case 36300:case 36308:case 36293:return SS;case 36289:case 36303:case 36311:case 36292:return MS}}class wS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=iS(t.type)}}class ES{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bS(t.type)}}class TS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const od=/(\w+)(\])?(\[|\.)?/g;function mf(n,e){n.seq.push(e),n.map[e.id]=e}function AS(n,e,t){const i=n.name,r=i.length;for(od.lastIndex=0;;){const s=od.exec(i),o=od.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){mf(t,l===void 0?new wS(a,n,e):new ES(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new TS(a),mf(t,u)),t=u}}}class kc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);AS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function gf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const RS=37297;let CS=0;function PS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const _f=new wt;function LS(n){Ht._getMatrix(_f,Ht.workingColorSpace,n);const e=`mat3( ${_f.elements.map(t=>t.toFixed(4))} )`;switch(Ht.getTransfer(n)){case Xc:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function vf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+PS(n.getShaderSource(e),a)}else return s}function DS(n,e){const t=LS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function IS(n,e){let t;switch(e){case Gg:t="Linear";break;case Wg:t="Reinhard";break;case Xg:t="Cineon";break;case qg:t="ACESFilmic";break;case $g:t="AgX";break;case jg:t="Neutral";break;case Yg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sc=new b;function NS(){Ht.getLuminanceCoefficients(Sc);const n=Sc.x.toFixed(4),e=Sc.y.toFixed(4),t=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function US(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ko).join(`
`)}function FS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ko(n){return n!==""}function xf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OS=/^[ \t]*#include +<([\w\d./]+)>/gm;function gu(n){return n.replace(OS,BS)}const zS=new Map;function BS(n,e){let t=Et[e];if(t===void 0){const i=zS.get(e);if(i!==void 0)t=Et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gu(t)}const HS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sf(n){return n.replace(HS,VS)}function VS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===fp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Mg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pr&&(e="SHADOWMAP_TYPE_VSM"),e}function WS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _o:case vo:e="ENVMAP_TYPE_CUBE";break;case hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XS(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===vo&&(e="ENVMAP_MODE_REFRACTION"),e}function qS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pp:e="ENVMAP_BLENDING_MULTIPLY";break;case Hg:e="ENVMAP_BLENDING_MIX";break;case Vg:e="ENVMAP_BLENDING_ADD";break}return e}function YS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function $S(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=GS(t),l=WS(t),d=XS(t),u=qS(t),h=YS(t),f=US(t),m=FS(s),_=r.createProgram();let g,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ko).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ko).join(`
`),p.length>0&&(p+=`
`)):(g=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ko).join(`
`),p=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gr?"#define TONE_MAPPING":"",t.toneMapping!==Gr?Et.tonemapping_pars_fragment:"",t.toneMapping!==Gr?IS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,DS("linearToOutputTexel",t.outputColorSpace),NS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ko).join(`
`)),o=gu(o),o=xf(o,t),o=yf(o,t),a=gu(a),a=xf(a,t),a=yf(a,t),o=Sf(o),a=Sf(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=E+g+o,x=E+p+a,R=gf(r,r.VERTEX_SHADER,y),C=gf(r,r.FRAGMENT_SHADER,x);r.attachShader(_,R),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(I){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(_)||"",B=r.getShaderInfoLog(R)||"",G=r.getShaderInfoLog(C)||"",J=F.trim(),q=B.trim(),ce=G.trim();let X=!0,oe=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,C);else{const Se=vf(r,R,"vertex"),Ve=vf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+J+`
`+Se+`
`+Ve)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(q===""||ce==="")&&(oe=!1);oe&&(I.diagnostics={runnable:X,programLog:J,vertexShader:{log:q,prefix:g},fragmentShader:{log:ce,prefix:p}})}r.deleteShader(R),r.deleteShader(C),N=new kc(r,_),M=kS(r,_)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,RS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let jS=0;class ZS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new KS(e),t.set(e,i)),i}}class KS{constructor(e){this.id=jS++,this.code=e,this.usedTimes=0}}function JS(n,e,t,i,r,s,o){const a=new zu,c=new ZS,l=new Set,d=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,S,I,F,B){const G=F.fog,J=B.geometry,q=M.isMeshStandardMaterial?F.environment:null,ce=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),X=ce&&ce.mapping===hl?ce.image.height:null,oe=m[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const Se=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ve=Se!==void 0?Se.length:0;let tt=0;J.morphAttributes.position!==void 0&&(tt=1),J.morphAttributes.normal!==void 0&&(tt=2),J.morphAttributes.color!==void 0&&(tt=3);let mt,xt,ee,we;if(oe){const Pe=ir[oe];mt=Pe.vertexShader,xt=Pe.fragmentShader}else mt=M.vertexShader,xt=M.fragmentShader,c.update(M),ee=c.getVertexShaderID(M),we=c.getFragmentShaderID(M);const ie=n.getRenderTarget(),Ye=n.state.buffers.depth.getReversed(),ne=B.isInstancedMesh===!0,he=B.isBatchedMesh===!0,Q=!!M.map,Y=!!M.matcap,L=!!ce,pe=!!M.aoMap,ae=!!M.lightMap,Be=!!M.bumpMap,ue=!!M.normalMap,Fe=!!M.displacementMap,le=!!M.emissiveMap,Te=!!M.metalnessMap,ve=!!M.roughnessMap,De=M.anisotropy>0,w=M.clearcoat>0,v=M.dispersion>0,O=M.iridescence>0,K=M.sheen>0,se=M.transmission>0,W=De&&!!M.anisotropyMap,Ie=w&&!!M.clearcoatMap,Me=w&&!!M.clearcoatNormalMap,ke=w&&!!M.clearcoatRoughnessMap,Ke=O&&!!M.iridescenceMap,_e=O&&!!M.iridescenceThicknessMap,Ce=K&&!!M.sheenColorMap,nt=K&&!!M.sheenRoughnessMap,$e=!!M.specularMap,Ae=!!M.specularColorMap,Qe=!!M.specularIntensityMap,U=se&&!!M.transmissionMap,ye=se&&!!M.thicknessMap,Re=!!M.gradientMap,Ge=!!M.alphaMap,fe=M.alphaTest>0,re=!!M.alphaHash,Xe=!!M.extensions;let te=Gr;M.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(te=n.toneMapping);const qe={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:mt,fragmentShader:xt,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:we,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:he,batchingColor:he&&B._colorsTexture!==null,instancing:ne,instancingColor:ne&&B.instanceColor!==null,instancingMorph:ne&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:xo,alphaToCoverage:!!M.alphaToCoverage,map:Q,matcap:Y,envMap:L,envMapMode:L&&ce.mapping,envMapCubeUVHeight:X,aoMap:pe,lightMap:ae,bumpMap:Be,normalMap:ue,displacementMap:h&&Fe,emissiveMap:le,normalMapObjectSpace:ue&&M.normalMapType===e0,normalMapTangentSpace:ue&&M.normalMapType===Qg,metalnessMap:Te,roughnessMap:ve,anisotropy:De,anisotropyMap:W,clearcoat:w,clearcoatMap:Ie,clearcoatNormalMap:Me,clearcoatRoughnessMap:ke,dispersion:v,iridescence:O,iridescenceMap:Ke,iridescenceThicknessMap:_e,sheen:K,sheenColorMap:Ce,sheenRoughnessMap:nt,specularMap:$e,specularColorMap:Ae,specularIntensityMap:Qe,transmission:se,transmissionMap:U,thicknessMap:ye,gradientMap:Re,opaque:M.transparent===!1&&M.blending===oo&&M.alphaToCoverage===!1,alphaMap:Ge,alphaTest:fe,alphaHash:re,combine:M.combine,mapUv:Q&&_(M.map.channel),aoMapUv:pe&&_(M.aoMap.channel),lightMapUv:ae&&_(M.lightMap.channel),bumpMapUv:Be&&_(M.bumpMap.channel),normalMapUv:ue&&_(M.normalMap.channel),displacementMapUv:Fe&&_(M.displacementMap.channel),emissiveMapUv:le&&_(M.emissiveMap.channel),metalnessMapUv:Te&&_(M.metalnessMap.channel),roughnessMapUv:ve&&_(M.roughnessMap.channel),anisotropyMapUv:W&&_(M.anisotropyMap.channel),clearcoatMapUv:Ie&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:nt&&_(M.sheenRoughnessMap.channel),specularMapUv:$e&&_(M.specularMap.channel),specularColorMapUv:Ae&&_(M.specularColorMap.channel),specularIntensityMapUv:Qe&&_(M.specularIntensityMap.channel),transmissionMapUv:U&&_(M.transmissionMap.channel),thicknessMapUv:ye&&_(M.thicknessMap.channel),alphaMapUv:Ge&&_(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ue||De),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(Q||Ge),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ye,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:tt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:te,decodeVideoTexture:Q&&M.map.isVideoTexture===!0&&Ht.getTransfer(M.map.colorSpace)===Yt,decodeVideoTextureEmissive:le&&M.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(M.emissiveMap.colorSpace)===Yt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===dn,flipSided:M.side===ui,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Xe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&M.extensions.multiDraw===!0||he)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(E(S,M),y(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function E(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const S=m[M.type];let I;if(S){const F=ir[S];I=W0.clone(F.uniforms)}else I=M.uniforms;return I}function R(M,S){let I;for(let F=0,B=d.length;F<B;F++){const G=d[F];if(G.cacheKey===S){I=G,++I.usedTimes;break}}return I===void 0&&(I=new $S(n,S,M,s),d.push(I)),I}function C(M){if(--M.usedTimes===0){const S=d.indexOf(M);d[S]=d[d.length-1],d.pop(),M.destroy()}}function P(M){c.remove(M)}function N(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:C,releaseShaderCache:P,programs:d,dispose:N}}function QS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function eM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,h,f,m,_,g){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},n[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function a(u,h,f,m,_,g){const p=o(u,h,f,m,_,g);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(u,h,f,m,_,g){const p=o(u,h,f,m,_,g);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(u,h){t.length>1&&t.sort(u||eM),i.length>1&&i.sort(h||bf),r.length>1&&r.sort(h||bf)}function d(){for(let u=e,h=n.length;u<h;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:d,sort:l}}function tM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new wf,n.set(i,[o])):r>=s.length?(o=new wf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function nM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Nt};break;case"SpotLight":t={position:new b,direction:new b,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":t={color:new Nt,position:new b,halfWidth:new b,halfHeight:new b};break}return n[e.id]=t,t}}}function iM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rM=0;function sM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function oM(n){const e=new nM,t=iM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new b);const r=new b,s=new Xt,o=new Xt;function a(l){let d=0,u=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,E=0,y=0,x=0,R=0,C=0,P=0;l.sort(sM);for(let M=0,S=l.length;M<S;M++){const I=l[M],F=I.color,B=I.intensity,G=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=F.r*B,u+=F.g*B,h+=F.b*B;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],B);P++}else if(I.isDirectionalLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ce=I.shadow,X=t.get(I);X.shadowIntensity=ce.intensity,X.shadowBias=ce.bias,X.shadowNormalBias=ce.normalBias,X.shadowRadius=ce.radius,X.shadowMapSize=ce.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=J,i.directionalShadowMatrix[f]=I.shadow.matrix,E++}i.directional[f]=q,f++}else if(I.isSpotLight){const q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(F).multiplyScalar(B),q.distance=G,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[_]=q;const ce=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,ce.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[_]=ce.matrix,I.castShadow){const X=t.get(I);X.shadowIntensity=ce.intensity,X.shadowBias=ce.bias,X.shadowNormalBias=ce.normalBias,X.shadowRadius=ce.radius,X.shadowMapSize=ce.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=J,x++}_++}else if(I.isRectAreaLight){const q=e.get(I);q.color.copy(F).multiplyScalar(B),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=q,g++}else if(I.isPointLight){const q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const ce=I.shadow,X=t.get(I);X.shadowIntensity=ce.intensity,X.shadowBias=ce.bias,X.shadowNormalBias=ce.normalBias,X.shadowRadius=ce.radius,X.shadowMapSize=ce.mapSize,X.shadowCameraNear=ce.camera.near,X.shadowCameraFar=ce.camera.far,i.pointShadow[m]=X,i.pointShadowMap[m]=J,i.pointShadowMatrix[m]=I.shadow.matrix,y++}i.point[m]=q,m++}else if(I.isHemisphereLight){const q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(B),q.groundColor.copy(I.groundColor).multiplyScalar(B),i.hemi[p]=q,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=He.LTC_FLOAT_1,i.rectAreaLTC2=He.LTC_FLOAT_2):(i.rectAreaLTC1=He.LTC_HALF_1,i.rectAreaLTC2=He.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==f||N.pointLength!==m||N.spotLength!==_||N.rectAreaLength!==g||N.hemiLength!==p||N.numDirectionalShadows!==E||N.numPointShadows!==y||N.numSpotShadows!==x||N.numSpotMaps!==R||N.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,N.directionalLength=f,N.pointLength=m,N.spotLength=_,N.rectAreaLength=g,N.hemiLength=p,N.numDirectionalShadows=E,N.numPointShadows=y,N.numSpotShadows=x,N.numSpotMaps=R,N.numLightProbes=P,i.version=rM++)}function c(l,d){let u=0,h=0,f=0,m=0,_=0;const g=d.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const y=l[p];if(y.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),u++}else if(y.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:i}}function Ef(n){const e=new oM(n),t=[],i=[];function r(d){l.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function aM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ef(n),e.set(r,[a])):s>=o.length?(a=new Ef(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const cM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dM(n,e,t){let i=new Bu;const r=new ze,s=new ze,o=new kt,a=new D_({depthPacking:Jg}),c=new I_,l={},d=t.maxTextureSize,u={[yr]:ui,[ui]:yr,[dn]:dn},h=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:cM,fragmentShader:lM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ut;m.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ee(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fp;let p=this.type;this.render=function(C,P,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Vr),F.buffers.depth.getReversed()?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=p!==pr&&this.type===pr,G=p===pr&&this.type!==pr;for(let J=0,q=C.length;J<q;J++){const ce=C[J],X=ce.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const oe=X.getFrameExtents();if(r.multiply(oe),s.copy(X.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/oe.x),r.x=s.x*oe.x,X.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/oe.y),r.y=s.y*oe.y,X.mapSize.y=s.y)),X.map===null||B===!0||G===!0){const Ve=this.type!==pr?{minFilter:ji,magFilter:ji}:{};X.map!==null&&X.map.dispose(),X.map=new ws(r.x,r.y,Ve),X.map.texture.name=ce.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const Se=X.getViewportCount();for(let Ve=0;Ve<Se;Ve++){const tt=X.getViewport(Ve);o.set(s.x*tt.x,s.y*tt.y,s.x*tt.z,s.y*tt.w),F.viewport(o),X.updateMatrices(ce,Ve),i=X.getFrustum(),x(P,N,X.camera,ce,this.type)}X.isPointLightShadow!==!0&&this.type===pr&&E(X,N),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(M,S,I)};function E(C,P){const N=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ws(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,N,h,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,N,f,_,null)}function y(C,P,N,M){let S=null;const I=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)S=I;else if(S=N.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=S.uuid,B=P.uuid;let G=l[F];G===void 0&&(G={},l[F]=G);let J=G[B];J===void 0&&(J=S.clone(),G[B]=J,P.addEventListener("dispose",R)),S=J}if(S.visible=P.visible,S.wireframe=P.wireframe,M===pr?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:u[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=n.properties.get(S);F.light=N}return S}function x(C,P,N,M,S){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===pr)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const B=e.update(C),G=C.material;if(Array.isArray(G)){const J=B.groups;for(let q=0,ce=J.length;q<ce;q++){const X=J[q],oe=G[X.materialIndex];if(oe&&oe.visible){const Se=y(C,oe,M,S);C.onBeforeShadow(n,C,P,N,B,Se,X),n.renderBufferDirect(N,null,B,Se,C,X),C.onAfterShadow(n,C,P,N,B,Se,X)}}}else if(G.visible){const J=y(C,G,M,S);C.onBeforeShadow(n,C,P,N,B,J,null),n.renderBufferDirect(N,null,B,J,C,null),C.onAfterShadow(n,C,P,N,B,J,null)}}const F=C.children;for(let B=0,G=F.length;B<G;B++)x(F[B],P,N,M,S)}function R(C){C.target.removeEventListener("dispose",R);for(const N in l){const M=l[N],S=C.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const uM={[Cd]:Pd,[Ld]:Nd,[Dd]:Ud,[go]:Id,[Pd]:Cd,[Nd]:Ld,[Ud]:Dd,[Id]:go};function hM(n,e){function t(){let U=!1;const ye=new kt;let Re=null;const Ge=new kt(0,0,0,0);return{setMask:function(fe){Re!==fe&&!U&&(n.colorMask(fe,fe,fe,fe),Re=fe)},setLocked:function(fe){U=fe},setClear:function(fe,re,Xe,te,qe){qe===!0&&(fe*=te,re*=te,Xe*=te),ye.set(fe,re,Xe,te),Ge.equals(ye)===!1&&(n.clearColor(fe,re,Xe,te),Ge.copy(ye))},reset:function(){U=!1,Re=null,Ge.set(-1,0,0,0)}}}function i(){let U=!1,ye=!1,Re=null,Ge=null,fe=null;return{setReversed:function(re){if(ye!==re){const Xe=e.get("EXT_clip_control");re?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),ye=re;const te=fe;fe=null,this.setClear(te)}},getReversed:function(){return ye},setTest:function(re){re?ie(n.DEPTH_TEST):Ye(n.DEPTH_TEST)},setMask:function(re){Re!==re&&!U&&(n.depthMask(re),Re=re)},setFunc:function(re){if(ye&&(re=uM[re]),Ge!==re){switch(re){case Cd:n.depthFunc(n.NEVER);break;case Pd:n.depthFunc(n.ALWAYS);break;case Ld:n.depthFunc(n.LESS);break;case go:n.depthFunc(n.LEQUAL);break;case Dd:n.depthFunc(n.EQUAL);break;case Id:n.depthFunc(n.GEQUAL);break;case Nd:n.depthFunc(n.GREATER);break;case Ud:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ge=re}},setLocked:function(re){U=re},setClear:function(re){fe!==re&&(ye&&(re=1-re),n.clearDepth(re),fe=re)},reset:function(){U=!1,Re=null,Ge=null,fe=null,ye=!1}}}function r(){let U=!1,ye=null,Re=null,Ge=null,fe=null,re=null,Xe=null,te=null,qe=null;return{setTest:function(Pe){U||(Pe?ie(n.STENCIL_TEST):Ye(n.STENCIL_TEST))},setMask:function(Pe){ye!==Pe&&!U&&(n.stencilMask(Pe),ye=Pe)},setFunc:function(Pe,vt,Ct){(Re!==Pe||Ge!==vt||fe!==Ct)&&(n.stencilFunc(Pe,vt,Ct),Re=Pe,Ge=vt,fe=Ct)},setOp:function(Pe,vt,Ct){(re!==Pe||Xe!==vt||te!==Ct)&&(n.stencilOp(Pe,vt,Ct),re=Pe,Xe=vt,te=Ct)},setLocked:function(Pe){U=Pe},setClear:function(Pe){qe!==Pe&&(n.clearStencil(Pe),qe=Pe)},reset:function(){U=!1,ye=null,Re=null,Ge=null,fe=null,re=null,Xe=null,te=null,qe=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let d={},u={},h=new WeakMap,f=[],m=null,_=!1,g=null,p=null,E=null,y=null,x=null,R=null,C=null,P=new Nt(0,0,0),N=0,M=!1,S=null,I=null,F=null,B=null,G=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ce=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=ce>=1):X.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=ce>=2);let oe=null,Se={};const Ve=n.getParameter(n.SCISSOR_BOX),tt=n.getParameter(n.VIEWPORT),mt=new kt().fromArray(Ve),xt=new kt().fromArray(tt);function ee(U,ye,Re,Ge){const fe=new Uint8Array(4),re=n.createTexture();n.bindTexture(U,re),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<Re;Xe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,Ge,0,n.RGBA,n.UNSIGNED_BYTE,fe):n.texImage2D(ye+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,fe);return re}const we={};we[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(n.DEPTH_TEST),o.setFunc(go),Be(!1),ue(hh),ie(n.CULL_FACE),pe(Vr);function ie(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function Ye(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function ne(U,ye){return u[U]!==ye?(n.bindFramebuffer(U,ye),u[U]=ye,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ye),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function he(U,ye){let Re=f,Ge=!1;if(U){Re=h.get(ye),Re===void 0&&(Re=[],h.set(ye,Re));const fe=U.textures;if(Re.length!==fe.length||Re[0]!==n.COLOR_ATTACHMENT0){for(let re=0,Xe=fe.length;re<Xe;re++)Re[re]=n.COLOR_ATTACHMENT0+re;Re.length=fe.length,Ge=!0}}else Re[0]!==n.BACK&&(Re[0]=n.BACK,Ge=!0);Ge&&n.drawBuffers(Re)}function Q(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const Y={[ds]:n.FUNC_ADD,[wg]:n.FUNC_SUBTRACT,[Eg]:n.FUNC_REVERSE_SUBTRACT};Y[Tg]=n.MIN,Y[Ag]=n.MAX;const L={[Rg]:n.ZERO,[Cg]:n.ONE,[Pg]:n.SRC_COLOR,[Ad]:n.SRC_ALPHA,[Fg]:n.SRC_ALPHA_SATURATE,[Ng]:n.DST_COLOR,[Dg]:n.DST_ALPHA,[Lg]:n.ONE_MINUS_SRC_COLOR,[Rd]:n.ONE_MINUS_SRC_ALPHA,[Ug]:n.ONE_MINUS_DST_COLOR,[Ig]:n.ONE_MINUS_DST_ALPHA,[kg]:n.CONSTANT_COLOR,[Og]:n.ONE_MINUS_CONSTANT_COLOR,[zg]:n.CONSTANT_ALPHA,[Bg]:n.ONE_MINUS_CONSTANT_ALPHA};function pe(U,ye,Re,Ge,fe,re,Xe,te,qe,Pe){if(U===Vr){_===!0&&(Ye(n.BLEND),_=!1);return}if(_===!1&&(ie(n.BLEND),_=!0),U!==bg){if(U!==g||Pe!==M){if((p!==ds||x!==ds)&&(n.blendEquation(n.FUNC_ADD),p=ds,x=ds),Pe)switch(U){case oo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Td:n.blendFunc(n.ONE,n.ONE);break;case fh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ph:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case oo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Td:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case fh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ph:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,y=null,R=null,C=null,P.set(0,0,0),N=0,g=U,M=Pe}return}fe=fe||ye,re=re||Re,Xe=Xe||Ge,(ye!==p||fe!==x)&&(n.blendEquationSeparate(Y[ye],Y[fe]),p=ye,x=fe),(Re!==E||Ge!==y||re!==R||Xe!==C)&&(n.blendFuncSeparate(L[Re],L[Ge],L[re],L[Xe]),E=Re,y=Ge,R=re,C=Xe),(te.equals(P)===!1||qe!==N)&&(n.blendColor(te.r,te.g,te.b,qe),P.copy(te),N=qe),g=U,M=!1}function ae(U,ye){U.side===dn?Ye(n.CULL_FACE):ie(n.CULL_FACE);let Re=U.side===ui;ye&&(Re=!Re),Be(Re),U.blending===oo&&U.transparent===!1?pe(Vr):pe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Ge=U.stencilWrite;a.setTest(Ge),Ge&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),le(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):Ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(U){S!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),S=U)}function ue(U){U!==yg?(ie(n.CULL_FACE),U!==I&&(U===hh?n.cullFace(n.BACK):U===Sg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ye(n.CULL_FACE),I=U}function Fe(U){U!==F&&(q&&n.lineWidth(U),F=U)}function le(U,ye,Re){U?(ie(n.POLYGON_OFFSET_FILL),(B!==ye||G!==Re)&&(n.polygonOffset(ye,Re),B=ye,G=Re)):Ye(n.POLYGON_OFFSET_FILL)}function Te(U){U?ie(n.SCISSOR_TEST):Ye(n.SCISSOR_TEST)}function ve(U){U===void 0&&(U=n.TEXTURE0+J-1),oe!==U&&(n.activeTexture(U),oe=U)}function De(U,ye,Re){Re===void 0&&(oe===null?Re=n.TEXTURE0+J-1:Re=oe);let Ge=Se[Re];Ge===void 0&&(Ge={type:void 0,texture:void 0},Se[Re]=Ge),(Ge.type!==U||Ge.texture!==ye)&&(oe!==Re&&(n.activeTexture(Re),oe=Re),n.bindTexture(U,ye||we[U]),Ge.type=U,Ge.texture=ye)}function w(){const U=Se[oe];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ke(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(U){mt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),mt.copy(U))}function nt(U){xt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),xt.copy(U))}function $e(U,ye){let Re=l.get(ye);Re===void 0&&(Re=new WeakMap,l.set(ye,Re));let Ge=Re.get(U);Ge===void 0&&(Ge=n.getUniformBlockIndex(ye,U.name),Re.set(U,Ge))}function Ae(U,ye){const Ge=l.get(ye).get(U);c.get(ye)!==Ge&&(n.uniformBlockBinding(ye,Ge,U.__bindingPointIndex),c.set(ye,Ge))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},oe=null,Se={},u={},h=new WeakMap,f=[],m=null,_=!1,g=null,p=null,E=null,y=null,x=null,R=null,C=null,P=new Nt(0,0,0),N=0,M=!1,S=null,I=null,F=null,B=null,G=null,mt.set(0,0,n.canvas.width,n.canvas.height),xt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:Ye,bindFramebuffer:ne,drawBuffers:he,useProgram:Q,setBlending:pe,setMaterial:ae,setFlipSided:Be,setCullFace:ue,setLineWidth:Fe,setPolygonOffset:le,setScissorTest:Te,activeTexture:ve,bindTexture:De,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Ke,texImage3D:_e,updateUBOMapping:$e,uniformBlockBinding:Ae,texStorage2D:Me,texStorage3D:ke,texSubImage2D:K,texSubImage3D:se,compressedTexSubImage2D:W,compressedTexSubImage3D:Ie,scissor:Ce,viewport:nt,reset:Qe}}function fM(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ze,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,v){return f?new OffscreenCanvas(w,v):$c("canvas")}function _(w,v,O){let K=1;const se=De(w);if((se.width>O||se.height>O)&&(K=O/Math.max(se.width,se.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const W=Math.floor(K*se.width),Ie=Math.floor(K*se.height);u===void 0&&(u=m(W,Ie));const Me=v?m(W,Ie):u;return Me.width=W,Me.height=Ie,Me.getContext("2d").drawImage(w,0,0,W,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+W+"x"+Ie+")."),Me}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),w;return w}function g(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(w,v,O,K,se=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let W=v;if(v===n.RED&&(O===n.FLOAT&&(W=n.R32F),O===n.HALF_FLOAT&&(W=n.R16F),O===n.UNSIGNED_BYTE&&(W=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.R8UI),O===n.UNSIGNED_SHORT&&(W=n.R16UI),O===n.UNSIGNED_INT&&(W=n.R32UI),O===n.BYTE&&(W=n.R8I),O===n.SHORT&&(W=n.R16I),O===n.INT&&(W=n.R32I)),v===n.RG&&(O===n.FLOAT&&(W=n.RG32F),O===n.HALF_FLOAT&&(W=n.RG16F),O===n.UNSIGNED_BYTE&&(W=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RG8UI),O===n.UNSIGNED_SHORT&&(W=n.RG16UI),O===n.UNSIGNED_INT&&(W=n.RG32UI),O===n.BYTE&&(W=n.RG8I),O===n.SHORT&&(W=n.RG16I),O===n.INT&&(W=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGB8UI),O===n.UNSIGNED_SHORT&&(W=n.RGB16UI),O===n.UNSIGNED_INT&&(W=n.RGB32UI),O===n.BYTE&&(W=n.RGB8I),O===n.SHORT&&(W=n.RGB16I),O===n.INT&&(W=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),O===n.UNSIGNED_INT&&(W=n.RGBA32UI),O===n.BYTE&&(W=n.RGBA8I),O===n.SHORT&&(W=n.RGBA16I),O===n.INT&&(W=n.RGBA32I)),v===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),v===n.RGBA){const Ie=se?Xc:Ht.getTransfer(K);O===n.FLOAT&&(W=n.RGBA32F),O===n.HALF_FLOAT&&(W=n.RGBA16F),O===n.UNSIGNED_BYTE&&(W=Ie===Yt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function x(w,v){let O;return w?v===null||v===bs||v===ua?O=n.DEPTH24_STENCIL8:v===gr?O=n.DEPTH32F_STENCIL8:v===da&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===bs||v===ua?O=n.DEPTH_COMPONENT24:v===gr?O=n.DEPTH_COMPONENT32F:v===da&&(O=n.DEPTH_COMPONENT16),O}function R(w,v){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==ji&&w.minFilter!==rr?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function C(w){const v=w.target;v.removeEventListener("dispose",C),N(v),v.isVideoTexture&&d.delete(v)}function P(w){const v=w.target;v.removeEventListener("dispose",P),S(v)}function N(w){const v=i.get(w);if(v.__webglInit===void 0)return;const O=w.source,K=h.get(O);if(K){const se=K[v.__cacheKey];se.usedTimes--,se.usedTimes===0&&M(w),Object.keys(K).length===0&&h.delete(O)}i.remove(w)}function M(w){const v=i.get(w);n.deleteTexture(v.__webglTexture);const O=w.source,K=h.get(O);delete K[v.__cacheKey],o.memory.textures--}function S(w){const v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let se=0;se<v.__webglFramebuffer[K].length;se++)n.deleteFramebuffer(v.__webglFramebuffer[K][se]);else n.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)n.deleteFramebuffer(v.__webglFramebuffer[K]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=w.textures;for(let K=0,se=O.length;K<se;K++){const W=i.get(O[K]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(O[K])}i.remove(w)}let I=0;function F(){I=0}function B(){const w=I;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),I+=1,w}function G(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function J(w,v){const O=i.get(w);if(w.isVideoTexture&&Te(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(O,w,v);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function q(w,v){const O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){we(O,w,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function ce(w,v){const O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){we(O,w,v);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function X(w,v){const O=i.get(w);if(w.version>0&&O.__version!==w.version){ie(O,w,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const oe={[Od]:n.REPEAT,[ps]:n.CLAMP_TO_EDGE,[zd]:n.MIRRORED_REPEAT},Se={[ji]:n.NEAREST,[Zg]:n.NEAREST_MIPMAP_NEAREST,[$a]:n.NEAREST_MIPMAP_LINEAR,[rr]:n.LINEAR,[Tl]:n.LINEAR_MIPMAP_NEAREST,[ms]:n.LINEAR_MIPMAP_LINEAR},Ve={[t0]:n.NEVER,[a0]:n.ALWAYS,[n0]:n.LESS,[wp]:n.LEQUAL,[i0]:n.EQUAL,[o0]:n.GEQUAL,[r0]:n.GREATER,[s0]:n.NOTEQUAL};function tt(w,v){if(v.type===gr&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===rr||v.magFilter===Tl||v.magFilter===$a||v.magFilter===ms||v.minFilter===rr||v.minFilter===Tl||v.minFilter===$a||v.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,oe[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,oe[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,oe[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,Se[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,Se[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ji||v.minFilter!==$a&&v.minFilter!==ms||v.type===gr&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function mt(w,v){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",C));const K=v.source;let se=h.get(K);se===void 0&&(se={},h.set(K,se));const W=G(v);if(W!==w.__cacheKey){se[W]===void 0&&(se[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),se[W].usedTimes++;const Ie=se[w.__cacheKey];Ie!==void 0&&(se[w.__cacheKey].usedTimes--,Ie.usedTimes===0&&M(v)),w.__cacheKey=W,w.__webglTexture=se[W].texture}return O}function xt(w,v,O){return Math.floor(Math.floor(w/O)/v)}function ee(w,v,O,K){const W=w.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,O,K,v.data);else{W.sort((_e,Ce)=>_e.start-Ce.start);let Ie=0;for(let _e=1;_e<W.length;_e++){const Ce=W[Ie],nt=W[_e],$e=Ce.start+Ce.count,Ae=xt(nt.start,v.width,4),Qe=xt(Ce.start,v.width,4);nt.start<=$e+1&&Ae===Qe&&xt(nt.start+nt.count-1,v.width,4)===Ae?Ce.count=Math.max(Ce.count,nt.start+nt.count-Ce.start):(++Ie,W[Ie]=nt)}W.length=Ie+1;const Me=n.getParameter(n.UNPACK_ROW_LENGTH),ke=n.getParameter(n.UNPACK_SKIP_PIXELS),Ke=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let _e=0,Ce=W.length;_e<Ce;_e++){const nt=W[_e],$e=Math.floor(nt.start/4),Ae=Math.ceil(nt.count/4),Qe=$e%v.width,U=Math.floor($e/v.width),ye=Ae,Re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Qe,U,ye,Re,O,K,v.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Me),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ke)}}function we(w,v,O){let K=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=n.TEXTURE_3D);const se=mt(w,v),W=v.source;t.bindTexture(K,w.__webglTexture,n.TEXTURE0+O);const Ie=i.get(W);if(W.version!==Ie.__version||se===!0){t.activeTexture(n.TEXTURE0+O);const Me=Ht.getPrimaries(Ht.workingColorSpace),ke=v.colorSpace===Br?null:Ht.getPrimaries(v.colorSpace),Ke=v.colorSpace===Br||Me===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let _e=_(v.image,!1,r.maxTextureSize);_e=ve(v,_e);const Ce=s.convert(v.format,v.colorSpace),nt=s.convert(v.type);let $e=y(v.internalFormat,Ce,nt,v.colorSpace,v.isVideoTexture);tt(K,v);let Ae;const Qe=v.mipmaps,U=v.isVideoTexture!==!0,ye=Ie.__version===void 0||se===!0,Re=W.dataReady,Ge=R(v,_e);if(v.isDepthTexture)$e=x(v.format===fa,v.type),ye&&(U?t.texStorage2D(n.TEXTURE_2D,1,$e,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,$e,_e.width,_e.height,0,Ce,nt,null));else if(v.isDataTexture)if(Qe.length>0){U&&ye&&t.texStorage2D(n.TEXTURE_2D,Ge,$e,Qe[0].width,Qe[0].height);for(let fe=0,re=Qe.length;fe<re;fe++)Ae=Qe[fe],U?Re&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Ae.width,Ae.height,Ce,nt,Ae.data):t.texImage2D(n.TEXTURE_2D,fe,$e,Ae.width,Ae.height,0,Ce,nt,Ae.data);v.generateMipmaps=!1}else U?(ye&&t.texStorage2D(n.TEXTURE_2D,Ge,$e,_e.width,_e.height),Re&&ee(v,_e,Ce,nt)):t.texImage2D(n.TEXTURE_2D,0,$e,_e.width,_e.height,0,Ce,nt,_e.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){U&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,$e,Qe[0].width,Qe[0].height,_e.depth);for(let fe=0,re=Qe.length;fe<re;fe++)if(Ae=Qe[fe],v.format!==Yi)if(Ce!==null)if(U){if(Re)if(v.layerUpdates.size>0){const Xe=ef(Ae.width,Ae.height,v.format,v.type);for(const te of v.layerUpdates){const qe=Ae.data.subarray(te*Xe/Ae.data.BYTES_PER_ELEMENT,(te+1)*Xe/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,te,Ae.width,Ae.height,1,Ce,qe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Ae.width,Ae.height,_e.depth,Ce,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,fe,$e,Ae.width,Ae.height,_e.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?Re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,fe,0,0,0,Ae.width,Ae.height,_e.depth,Ce,nt,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,fe,$e,Ae.width,Ae.height,_e.depth,0,Ce,nt,Ae.data)}else{U&&ye&&t.texStorage2D(n.TEXTURE_2D,Ge,$e,Qe[0].width,Qe[0].height);for(let fe=0,re=Qe.length;fe<re;fe++)Ae=Qe[fe],v.format!==Yi?Ce!==null?U?Re&&t.compressedTexSubImage2D(n.TEXTURE_2D,fe,0,0,Ae.width,Ae.height,Ce,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,fe,$e,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?Re&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Ae.width,Ae.height,Ce,nt,Ae.data):t.texImage2D(n.TEXTURE_2D,fe,$e,Ae.width,Ae.height,0,Ce,nt,Ae.data)}else if(v.isDataArrayTexture)if(U){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,$e,_e.width,_e.height,_e.depth),Re)if(v.layerUpdates.size>0){const fe=ef(_e.width,_e.height,v.format,v.type);for(const re of v.layerUpdates){const Xe=_e.data.subarray(re*fe/_e.data.BYTES_PER_ELEMENT,(re+1)*fe/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,_e.width,_e.height,1,Ce,nt,Xe)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ce,nt,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,$e,_e.width,_e.height,_e.depth,0,Ce,nt,_e.data);else if(v.isData3DTexture)U?(ye&&t.texStorage3D(n.TEXTURE_3D,Ge,$e,_e.width,_e.height,_e.depth),Re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ce,nt,_e.data)):t.texImage3D(n.TEXTURE_3D,0,$e,_e.width,_e.height,_e.depth,0,Ce,nt,_e.data);else if(v.isFramebufferTexture){if(ye)if(U)t.texStorage2D(n.TEXTURE_2D,Ge,$e,_e.width,_e.height);else{let fe=_e.width,re=_e.height;for(let Xe=0;Xe<Ge;Xe++)t.texImage2D(n.TEXTURE_2D,Xe,$e,fe,re,0,Ce,nt,null),fe>>=1,re>>=1}}else if(Qe.length>0){if(U&&ye){const fe=De(Qe[0]);t.texStorage2D(n.TEXTURE_2D,Ge,$e,fe.width,fe.height)}for(let fe=0,re=Qe.length;fe<re;fe++)Ae=Qe[fe],U?Re&&t.texSubImage2D(n.TEXTURE_2D,fe,0,0,Ce,nt,Ae):t.texImage2D(n.TEXTURE_2D,fe,$e,Ce,nt,Ae);v.generateMipmaps=!1}else if(U){if(ye){const fe=De(_e);t.texStorage2D(n.TEXTURE_2D,Ge,$e,fe.width,fe.height)}Re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,nt,_e)}else t.texImage2D(n.TEXTURE_2D,0,$e,Ce,nt,_e);g(v)&&p(K),Ie.__version=W.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ie(w,v,O){if(v.image.length!==6)return;const K=mt(w,v),se=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);const W=i.get(se);if(se.version!==W.__version||K===!0){t.activeTexture(n.TEXTURE0+O);const Ie=Ht.getPrimaries(Ht.workingColorSpace),Me=v.colorSpace===Br?null:Ht.getPrimaries(v.colorSpace),ke=v.colorSpace===Br||Ie===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const Ke=v.isCompressedTexture||v.image[0].isCompressedTexture,_e=v.image[0]&&v.image[0].isDataTexture,Ce=[];for(let re=0;re<6;re++)!Ke&&!_e?Ce[re]=_(v.image[re],!0,r.maxCubemapSize):Ce[re]=_e?v.image[re].image:v.image[re],Ce[re]=ve(v,Ce[re]);const nt=Ce[0],$e=s.convert(v.format,v.colorSpace),Ae=s.convert(v.type),Qe=y(v.internalFormat,$e,Ae,v.colorSpace),U=v.isVideoTexture!==!0,ye=W.__version===void 0||K===!0,Re=se.dataReady;let Ge=R(v,nt);tt(n.TEXTURE_CUBE_MAP,v);let fe;if(Ke){U&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,Qe,nt.width,nt.height);for(let re=0;re<6;re++){fe=Ce[re].mipmaps;for(let Xe=0;Xe<fe.length;Xe++){const te=fe[Xe];v.format!==Yi?$e!==null?U?Re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Xe,0,0,te.width,te.height,$e,te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Xe,Qe,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Xe,0,0,te.width,te.height,$e,Ae,te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Xe,Qe,te.width,te.height,0,$e,Ae,te.data)}}}else{if(fe=v.mipmaps,U&&ye){fe.length>0&&Ge++;const re=De(Ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,Qe,re.width,re.height)}for(let re=0;re<6;re++)if(_e){U?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ce[re].width,Ce[re].height,$e,Ae,Ce[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Qe,Ce[re].width,Ce[re].height,0,$e,Ae,Ce[re].data);for(let Xe=0;Xe<fe.length;Xe++){const qe=fe[Xe].image[re].image;U?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Xe+1,0,0,qe.width,qe.height,$e,Ae,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Xe+1,Qe,qe.width,qe.height,0,$e,Ae,qe.data)}}else{U?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,$e,Ae,Ce[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Qe,$e,Ae,Ce[re]);for(let Xe=0;Xe<fe.length;Xe++){const te=fe[Xe];U?Re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Xe+1,0,0,$e,Ae,te.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Xe+1,Qe,$e,Ae,te.image[re])}}}g(v)&&p(n.TEXTURE_CUBE_MAP),W.__version=se.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Ye(w,v,O,K,se,W){const Ie=s.convert(O.format,O.colorSpace),Me=s.convert(O.type),ke=y(O.internalFormat,Ie,Me,O.colorSpace),Ke=i.get(v),_e=i.get(O);if(_e.__renderTarget=v,!Ke.__hasExternalTextures){const Ce=Math.max(1,v.width>>W),nt=Math.max(1,v.height>>W);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,W,ke,Ce,nt,v.depth,0,Ie,Me,null):t.texImage2D(se,W,ke,Ce,nt,0,Ie,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),le(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,se,_e.__webglTexture,0,Fe(v)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,se,_e.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(w,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){const K=v.depthTexture,se=K&&K.isDepthTexture?K.type:null,W=x(v.stencilBuffer,se),Ie=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=Fe(v);le(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,W,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,W,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,w)}else{const K=v.textures;for(let se=0;se<K.length;se++){const W=K[se],Ie=s.convert(W.format,W.colorSpace),Me=s.convert(W.type),ke=y(W.internalFormat,Ie,Me,W.colorSpace),Ke=Fe(v);O&&le(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,ke,v.width,v.height):le(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke,ke,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ke,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);const se=K.__webglTexture,W=Fe(v);if(v.depthTexture.format===ha)le(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(v.depthTexture.format===fa)le(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Q(w){const v=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const se=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",se)};K.addEventListener("dispose",se),v.__depthDisposeCallback=se}v.__boundDepthTexture=K}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const K=w.texture.mipmaps;K&&K.length>0?he(v.__webglFramebuffer[0],w):he(v.__webglFramebuffer,w)}else if(O){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=n.createRenderbuffer(),ne(v.__webglDepthbuffer[K],w,!1);else{const se=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,W)}}else{const K=w.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ne(v.__webglDepthbuffer,w,!1);else{const se=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Y(w,v,O){const K=i.get(w);v!==void 0&&Ye(K.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Q(w)}function L(w){const v=w.texture,O=i.get(w),K=i.get(v);w.addEventListener("dispose",P);const se=w.textures,W=w.isWebGLCubeRenderTarget===!0,Ie=se.length>1;if(Ie||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=v.version,o.memory.textures++),W){O.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[Me]=[];for(let ke=0;ke<v.mipmaps.length;ke++)O.__webglFramebuffer[Me][ke]=n.createFramebuffer()}else O.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let Me=0;Me<v.mipmaps.length;Me++)O.__webglFramebuffer[Me]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let Me=0,ke=se.length;Me<ke;Me++){const Ke=i.get(se[Me]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&le(w)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Me=0;Me<se.length;Me++){const ke=se[Me];O.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[Me]);const Ke=s.convert(ke.format,ke.colorSpace),_e=s.convert(ke.type),Ce=y(ke.internalFormat,Ke,_e,ke.colorSpace,w.isXRRenderTarget===!0),nt=Fe(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,Ce,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,O.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),tt(n.TEXTURE_CUBE_MAP,v);for(let Me=0;Me<6;Me++)if(v.mipmaps&&v.mipmaps.length>0)for(let ke=0;ke<v.mipmaps.length;ke++)Ye(O.__webglFramebuffer[Me][ke],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke);else Ye(O.__webglFramebuffer[Me],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);g(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let Me=0,ke=se.length;Me<ke;Me++){const Ke=se[Me],_e=i.get(Ke);let Ce=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ce=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ce,_e.__webglTexture),tt(Ce,Ke),Ye(O.__webglFramebuffer,w,Ke,n.COLOR_ATTACHMENT0+Me,Ce,0),g(Ke)&&p(Ce)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Me=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,K.__webglTexture),tt(Me,v),v.mipmaps&&v.mipmaps.length>0)for(let ke=0;ke<v.mipmaps.length;ke++)Ye(O.__webglFramebuffer[ke],w,v,n.COLOR_ATTACHMENT0,Me,ke);else Ye(O.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,Me,0);g(v)&&p(Me),t.unbindTexture()}w.depthBuffer&&Q(w)}function pe(w){const v=w.textures;for(let O=0,K=v.length;O<K;O++){const se=v[O];if(g(se)){const W=E(w),Ie=i.get(se).__webglTexture;t.bindTexture(W,Ie),p(W),t.unbindTexture()}}}const ae=[],Be=[];function ue(w){if(w.samples>0){if(le(w)===!1){const v=w.textures,O=w.width,K=w.height;let se=n.COLOR_BUFFER_BIT;const W=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(w),Me=v.length>1;if(Me)for(let Ke=0;Ke<v.length;Ke++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const ke=w.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ke=0;Ke<v.length;Ke++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),Me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ke]);const _e=i.get(v[Ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,O,K,0,0,O,K,se,n.NEAREST),c===!0&&(ae.length=0,Be.length=0,ae.push(n.COLOR_ATTACHMENT0+Ke),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ae.push(W),Be.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let Ke=0;Ke<v.length;Ke++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ke]);const _e=i.get(v[Ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Fe(w){return Math.min(r.maxSamples,w.samples)}function le(w){const v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Te(w){const v=o.render.frame;d.get(w)!==v&&(d.set(w,v),w.update())}function ve(w,v){const O=w.colorSpace,K=w.format,se=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==xo&&O!==Br&&(Ht.getTransfer(O)===Yt?(K!==Yi||se!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function De(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=J,this.setTexture2DArray=q,this.setTexture3D=ce,this.setTextureCube=X,this.rebindTextures=Y,this.setupRenderTarget=L,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=le}function pM(n,e){function t(i,r=Br){let s;const o=Ht.getTransfer(r);if(i===ar)return n.UNSIGNED_BYTE;if(i===Du)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Iu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gp)return n.BYTE;if(i===_p)return n.SHORT;if(i===da)return n.UNSIGNED_SHORT;if(i===Lu)return n.INT;if(i===bs)return n.UNSIGNED_INT;if(i===gr)return n.FLOAT;if(i===Ua)return n.HALF_FLOAT;if(i===xp)return n.ALPHA;if(i===yp)return n.RGB;if(i===Yi)return n.RGBA;if(i===ha)return n.DEPTH_COMPONENT;if(i===fa)return n.DEPTH_STENCIL;if(i===Sp)return n.RED;if(i===Nu)return n.RED_INTEGER;if(i===Mp)return n.RG;if(i===Uu)return n.RG_INTEGER;if(i===Fu)return n.RGBA_INTEGER;if(i===Dc||i===Ic||i===Nc||i===Uc)if(o===Yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Dc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Dc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ic)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Nc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bd||i===Hd||i===Vd||i===Gd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wd||i===Xd||i===qd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wd||i===Xd)return o===Yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qd)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yd||i===$d||i===jd||i===Zd||i===Kd||i===Jd||i===Qd||i===eu||i===tu||i===nu||i===iu||i===ru||i===su||i===ou)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yd)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$d)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jd)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zd)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kd)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jd)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qd)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eu)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tu)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nu)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===iu)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ru)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===su)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ou)return o===Yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fc||i===au||i===cu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Fc)return o===Yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===au)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bp||i===lu||i===du||i===uu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Fc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===lu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===du)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ua?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Qp extends hi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const mM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _M{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Qp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Sr({vertexShader:mM,fragmentShader:gM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new Xr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vM extends Ps{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,d=null,u=null,h=null,f=null,m=null;const _=new _M,g={},p=t.getContextAttributes();let E=null,y=null;const x=[],R=[],C=new ze;let P=null;const N=new Mi;N.viewport=new kt;const M=new Mi;M.viewport=new kt;const S=[N,M],I=new z_;let F=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let we=x[ee];return we===void 0&&(we=new Yl,x[ee]=we),we.getTargetRaySpace()},this.getControllerGrip=function(ee){let we=x[ee];return we===void 0&&(we=new Yl,x[ee]=we),we.getGripSpace()},this.getHand=function(ee){let we=x[ee];return we===void 0&&(we=new Yl,x[ee]=we),we.getHandSpace()};function G(ee){const we=R.indexOf(ee.inputSource);if(we===-1)return;const ie=x[we];ie!==void 0&&(ie.update(ee.inputSource,ee.frame,l||o),ie.dispatchEvent({type:ee.type,data:ee.inputSource}))}function J(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",q);for(let ee=0;ee<x.length;ee++){const we=R[ee];we!==null&&(R[ee]=null,x[ee].disconnect(we))}F=null,B=null,_.reset();for(const ee in g)delete g[ee];e.setRenderTarget(E),f=null,h=null,u=null,r=null,y=null,xt.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",J),r.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(r,t)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ye=null,ne=null;p.depth&&(ne=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=p.stencil?fa:ha,Ye=p.stencil?ua:bs);const he={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};h=u.createProjectionLayer(he),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new ws(h.textureWidth,h.textureHeight,{format:Yi,type:ar,depthTexture:new Fp(h.textureWidth,h.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ie={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ws(f.framebufferWidth,f.framebufferHeight,{format:Yi,type:ar,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),xt.setContext(r),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(ee){for(let we=0;we<ee.removed.length;we++){const ie=ee.removed[we],Ye=R.indexOf(ie);Ye>=0&&(R[Ye]=null,x[Ye].disconnect(ie))}for(let we=0;we<ee.added.length;we++){const ie=ee.added[we];let Ye=R.indexOf(ie);if(Ye===-1){for(let he=0;he<x.length;he++)if(he>=R.length){R.push(ie),Ye=he;break}else if(R[he]===null){R[he]=ie,Ye=he;break}if(Ye===-1)break}const ne=x[Ye];ne&&ne.connect(ie)}}const ce=new b,X=new b;function oe(ee,we,ie){ce.setFromMatrixPosition(we.matrixWorld),X.setFromMatrixPosition(ie.matrixWorld);const Ye=ce.distanceTo(X),ne=we.projectionMatrix.elements,he=ie.projectionMatrix.elements,Q=ne[14]/(ne[10]-1),Y=ne[14]/(ne[10]+1),L=(ne[9]+1)/ne[5],pe=(ne[9]-1)/ne[5],ae=(ne[8]-1)/ne[0],Be=(he[8]+1)/he[0],ue=Q*ae,Fe=Q*Be,le=Ye/(-ae+Be),Te=le*-ae;if(we.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Te),ee.translateZ(le),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ne[10]===-1)ee.projectionMatrix.copy(we.projectionMatrix),ee.projectionMatrixInverse.copy(we.projectionMatrixInverse);else{const ve=Q+le,De=Y+le,w=ue-Te,v=Fe+(Ye-Te),O=L*Y/De*ve,K=pe*Y/De*ve;ee.projectionMatrix.makePerspective(w,v,O,K,ve,De),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Se(ee,we){we===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(we.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let we=ee.near,ie=ee.far;_.texture!==null&&(_.depthNear>0&&(we=_.depthNear),_.depthFar>0&&(ie=_.depthFar)),I.near=M.near=N.near=we,I.far=M.far=N.far=ie,(F!==I.near||B!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,B=I.far),I.layers.mask=ee.layers.mask|6,N.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const Ye=ee.parent,ne=I.cameras;Se(I,Ye);for(let he=0;he<ne.length;he++)Se(ne[he],Ye);ne.length===2?oe(I,N,M):I.projectionMatrix.copy(N.projectionMatrix),Ve(ee,I,Ye)};function Ve(ee,we,ie){ie===null?ee.matrix.copy(we.matrixWorld):(ee.matrix.copy(ie.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(we.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(we.projectionMatrix),ee.projectionMatrixInverse.copy(we.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=pa*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(ee){c=ee,h!==null&&(h.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(I)},this.getCameraTexture=function(ee){return g[ee]};let tt=null;function mt(ee,we){if(d=we.getViewerPose(l||o),m=we,d!==null){const ie=d.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ye=!1;ie.length!==I.cameras.length&&(I.cameras.length=0,Ye=!0);for(let Y=0;Y<ie.length;Y++){const L=ie[Y];let pe=null;if(f!==null)pe=f.getViewport(L);else{const Be=u.getViewSubImage(h,L);pe=Be.viewport,Y===0&&(e.setRenderTargetTextures(y,Be.colorTexture,Be.depthStencilTexture),e.setRenderTarget(y))}let ae=S[Y];ae===void 0&&(ae=new Mi,ae.layers.enable(Y),ae.viewport=new kt,S[Y]=ae),ae.matrix.fromArray(L.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(L.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(pe.x,pe.y,pe.width,pe.height),Y===0&&(I.matrix.copy(ae.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ye===!0&&I.cameras.push(ae)}const ne=r.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const Y=u.getDepthInformation(ie[0]);Y&&Y.isValid&&Y.texture&&_.init(Y,r.renderState)}if(ne&&ne.includes("camera-access")&&(e.state.unbindTexture(),u))for(let Y=0;Y<ie.length;Y++){const L=ie[Y].camera;if(L){let pe=g[L];pe||(pe=new Qp,g[L]=pe);const ae=u.getCameraImage(L);pe.sourceTexture=ae}}}for(let ie=0;ie<x.length;ie++){const Ye=R[ie],ne=x[ie];Ye!==null&&ne!==void 0&&ne.update(Ye,we,l||o)}tt&&tt(ee,we),we.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:we}),m=null}const xt=new $p;xt.setAnimationLoop(mt),this.setAnimationLoop=function(ee){tt=ee},this.dispose=function(){}}}const rs=new Zn,xM=new Xt;function yM(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Pp(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,E,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),d(g,p)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,E,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ui&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ui&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const E=e.get(p),y=E.envMap,x=E.envMapRotation;y&&(g.envMap.value=y,rs.copy(x),rs.x*=-1,rs.y*=-1,rs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),g.envMapRotation.value.setFromMatrix4(xM.makeRotationFromEuler(rs)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,E,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ui&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const E=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function SM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){const x=y.program;i.uniformBlockBinding(E,x)}function l(E,y){let x=r[E.id];x===void 0&&(m(E),x=d(E),r[E.id]=x,E.addEventListener("dispose",g));const R=y.program;i.updateUBOMapping(E,R);const C=e.render.frame;s[E.id]!==C&&(h(E),s[E.id]=C)}function d(E){const y=u();E.__bindingPointIndex=y;const x=n.createBuffer(),R=E.__size,C=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,R,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const y=r[E.id],x=E.uniforms,R=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let C=0,P=x.length;C<P;C++){const N=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,S=N.length;M<S;M++){const I=N[M];if(f(I,C,M,R)===!0){const F=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let J=0;J<B.length;J++){const q=B[J],ce=_(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,F+G,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,G),G+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,y,x,R){const C=E.value,P=y+"_"+x;if(R[P]===void 0)return typeof C=="number"||typeof C=="boolean"?R[P]=C:R[P]=C.clone(),!0;{const N=R[P];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return R[P]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function m(E){const y=E.uniforms;let x=0;const R=16;for(let P=0,N=y.length;P<N;P++){const M=Array.isArray(y[P])?y[P]:[y[P]];for(let S=0,I=M.length;S<I;S++){const F=M[S],B=Array.isArray(F.value)?F.value:[F.value];for(let G=0,J=B.length;G<J;G++){const q=B[G],ce=_(q),X=x%R,oe=X%ce.boundary,Se=X+oe;x+=oe,Se!==0&&R-Se<ce.storage&&(x+=R-Se),F.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=ce.storage}}}const C=x%R;return C>0&&(x+=R-C),E.__size=x,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function g(E){const y=E.target;y.removeEventListener("dispose",g);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class MM{constructor(e={}){const{canvas:t=w0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const E=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=si;let C=0,P=0,N=null,M=-1,S=null;const I=new kt,F=new kt;let B=null;const G=new Nt(0);let J=0,q=t.width,ce=t.height,X=1,oe=null,Se=null;const Ve=new kt(0,0,q,ce),tt=new kt(0,0,q,ce);let mt=!1;const xt=new Bu;let ee=!1,we=!1;const ie=new Xt,Ye=new b,ne=new kt,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function Y(){return N===null?X:1}let L=i;function pe(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pu}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",fe,!1),L===null){const z="webgl2";if(L=pe(z,T),L===null)throw pe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ae,Be,ue,Fe,le,Te,ve,De,w,v,O,K,se,W,Ie,Me,ke,Ke,_e,Ce,nt,$e,Ae,Qe;function U(){ae=new Dy(L),ae.init(),$e=new pM(L,ae),Be=new Ey(L,ae,e,$e),ue=new hM(L,ae),Be.reversedDepthBuffer&&h&&ue.buffers.depth.setReversed(!0),Fe=new Uy(L),le=new QS,Te=new fM(L,ae,ue,le,Be,$e,Fe),ve=new Ay(x),De=new Ly(x),w=new H_(L),Ae=new by(L,w),v=new Iy(L,w,Fe,Ae),O=new ky(L,v,w,Fe),_e=new Fy(L,Be,Te),Me=new Ty(le),K=new JS(x,ve,De,ae,Be,Ae,Me),se=new yM(x,le),W=new tM,Ie=new aM(ae),Ke=new My(x,ve,De,ue,O,f,c),ke=new dM(x,O,Be),Qe=new SM(L,Fe,Be,ue),Ce=new wy(L,ae,Fe),nt=new Ny(L,ae,Fe),Fe.programs=K.programs,x.capabilities=Be,x.extensions=ae,x.properties=le,x.renderLists=W,x.shadowMap=ke,x.state=ue,x.info=Fe}U();const ye=new vM(x,L);this.xr=ye,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=ae.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ae.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(q,ce,!1))},this.getSize=function(T){return T.set(q,ce)},this.setSize=function(T,z,j=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,ce=z,t.width=Math.floor(T*X),t.height=Math.floor(z*X),j===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(q*X,ce*X).floor()},this.setDrawingBufferSize=function(T,z,j){q=T,ce=z,X=j,t.width=Math.floor(T*j),t.height=Math.floor(z*j),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Ve)},this.setViewport=function(T,z,j,Z){T.isVector4?Ve.set(T.x,T.y,T.z,T.w):Ve.set(T,z,j,Z),ue.viewport(I.copy(Ve).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(tt)},this.setScissor=function(T,z,j,Z){T.isVector4?tt.set(T.x,T.y,T.z,T.w):tt.set(T,z,j,Z),ue.scissor(F.copy(tt).multiplyScalar(X).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(T){ue.setScissorTest(mt=T)},this.setOpaqueSort=function(T){oe=T},this.setTransparentSort=function(T){Se=T},this.getClearColor=function(T){return T.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,j=!0){let Z=0;if(T){let H=!1;if(N!==null){const be=N.texture.format;H=be===Fu||be===Uu||be===Nu}if(H){const be=N.texture.type,Ne=be===ar||be===bs||be===da||be===ua||be===Du||be===Iu,Ze=Ke.getClearColor(),We=Ke.getClearAlpha(),ct=Ze.r,pt=Ze.g,ft=Ze.b;Ne?(m[0]=ct,m[1]=pt,m[2]=ft,m[3]=We,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=ct,_[1]=pt,_[2]=ft,_[3]=We,L.clearBufferiv(L.COLOR,0,_))}else Z|=L.COLOR_BUFFER_BIT}z&&(Z|=L.DEPTH_BUFFER_BIT),j&&(Z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Ke.dispose(),W.dispose(),Ie.dispose(),le.dispose(),ve.dispose(),De.dispose(),O.dispose(),Ae.dispose(),Qe.dispose(),K.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Ct),ye.removeEventListener("sessionend",_i),Ri.stop()};function Re(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ge(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const T=Fe.autoReset,z=ke.enabled,j=ke.autoUpdate,Z=ke.needsUpdate,H=ke.type;U(),Fe.autoReset=T,ke.enabled=z,ke.autoUpdate=j,ke.needsUpdate=Z,ke.type=H}function fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function re(T){const z=T.target;z.removeEventListener("dispose",re),Xe(z)}function Xe(T){te(T),le.remove(T)}function te(T){const z=le.get(T).programs;z!==void 0&&(z.forEach(function(j){K.releaseProgram(j)}),T.isShaderMaterial&&K.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,j,Z,H,be){z===null&&(z=he);const Ne=H.isMesh&&H.matrixWorld.determinant()<0,Ze=Ya(T,z,j,Z,H);ue.setMaterial(Z,Ne);let We=j.index,ct=1;if(Z.wireframe===!0){if(We=v.getWireframeAttribute(j),We===void 0)return;ct=2}const pt=j.drawRange,ft=j.attributes.position;let Pt=pt.start*ct,Bt=(pt.start+pt.count)*ct;be!==null&&(Pt=Math.max(Pt,be.start*ct),Bt=Math.min(Bt,(be.start+be.count)*ct)),We!==null?(Pt=Math.max(Pt,0),Bt=Math.min(Bt,We.count)):ft!=null&&(Pt=Math.max(Pt,0),Bt=Math.min(Bt,ft.count));const an=Bt-Pt;if(an<0||an===1/0)return;Ae.setup(H,Z,Ze,j,We);let jt,Ft=Ce;if(We!==null&&(jt=w.get(We),Ft=nt,Ft.setIndex(jt)),H.isMesh)Z.wireframe===!0?(ue.setLineWidth(Z.wireframeLinewidth*Y()),Ft.setMode(L.LINES)):Ft.setMode(L.TRIANGLES);else if(H.isLine){let dt=Z.linewidth;dt===void 0&&(dt=1),ue.setLineWidth(dt*Y()),H.isLineSegments?Ft.setMode(L.LINES):H.isLineLoop?Ft.setMode(L.LINE_LOOP):Ft.setMode(L.LINE_STRIP)}else H.isPoints?Ft.setMode(L.POINTS):H.isSprite&&Ft.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ao("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ft.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))Ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const dt=H._multiDrawStarts,Zt=H._multiDrawCounts,bt=H._multiDrawCount,Dn=We?w.get(We).bytesPerElement:1,Ar=le.get(Z).currentProgram.getUniforms();for(let Jn=0;Jn<bt;Jn++)Ar.setValue(L,"_gl_DrawID",Jn),Ft.render(dt[Jn]/Dn,Zt[Jn])}else if(H.isInstancedMesh)Ft.renderInstances(Pt,an,H.count);else if(j.isInstancedBufferGeometry){const dt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Zt=Math.min(j.instanceCount,dt);Ft.renderInstances(Pt,an,Zt)}else Ft.render(Pt,an)};function qe(T,z,j){T.transparent===!0&&T.side===dn&&T.forceSinglePass===!1?(T.side=ui,T.needsUpdate=!0,vi(T,z,j),T.side=yr,T.needsUpdate=!0,vi(T,z,j),T.side=dn):vi(T,z,j)}this.compile=function(T,z,j=null){j===null&&(j=T),p=Ie.get(j),p.init(z),y.push(p),j.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),T!==j&&T.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const Z=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const be=H.material;if(be)if(Array.isArray(be))for(let Ne=0;Ne<be.length;Ne++){const Ze=be[Ne];qe(Ze,j,H),Z.add(Ze)}else qe(be,j,H),Z.add(be)}),p=y.pop(),Z},this.compileAsync=function(T,z,j=null){const Z=this.compile(T,z,j);return new Promise(H=>{function be(){if(Z.forEach(function(Ne){le.get(Ne).currentProgram.isReady()&&Z.delete(Ne)}),Z.size===0){H(T);return}setTimeout(be,10)}ae.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Pe=null;function vt(T){Pe&&Pe(T)}function Ct(){Ri.stop()}function _i(){Ri.start()}const Ri=new $p;Ri.setAnimationLoop(vt),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(T){Pe=T,ye.setAnimationLoop(T),T===null?Ri.stop():Ri.start()},ye.addEventListener("sessionstart",Ct),ye.addEventListener("sessionend",_i),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(z),z=ye.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,z,N),p=Ie.get(T,y.length),p.init(z),y.push(p),ie.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),xt.setFromProjectionMatrix(ie,sr,z.reversedDepth),we=this.localClippingEnabled,ee=Me.init(this.clippingPlanes,we),g=W.get(T,E.length),g.init(),E.push(g),ye.enabled===!0&&ye.isPresenting===!0){const be=x.xr.getDepthSensingMesh();be!==null&&Us(be,z,-1/0,x.sortObjects)}Us(T,z,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(oe,Se),Q=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Q&&Ke.addToRenderList(g,T),this.info.render.frame++,ee===!0&&Me.beginShadows();const j=p.state.shadowsArray;ke.render(j,T,z),ee===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=g.opaque,H=g.transmissive;if(p.setupLights(),z.isArrayCamera){const be=z.cameras;if(H.length>0)for(let Ne=0,Ze=be.length;Ne<Ze;Ne++){const We=be[Ne];Uo(Z,H,T,We)}Q&&Ke.render(T);for(let Ne=0,Ze=be.length;Ne<Ze;Ne++){const We=be[Ne];No(g,T,We,We.viewport)}}else H.length>0&&Uo(Z,H,T,z),Q&&Ke.render(T),No(g,T,z);N!==null&&P===0&&(Te.updateMultisampleRenderTarget(N),Te.updateRenderTargetMipmap(N)),T.isScene===!0&&T.onAfterRender(x,T,z),Ae.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],ee===!0&&Me.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function Us(T,z,j,Z){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||xt.intersectsSprite(T)){Z&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ie);const Ne=O.update(T),Ze=T.material;Ze.visible&&g.push(T,Ne,Ze,j,ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||xt.intersectsObject(T))){const Ne=O.update(T),Ze=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ne.copy(T.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ne.copy(Ne.boundingSphere.center)),ne.applyMatrix4(T.matrixWorld).applyMatrix4(ie)),Array.isArray(Ze)){const We=Ne.groups;for(let ct=0,pt=We.length;ct<pt;ct++){const ft=We[ct],Pt=Ze[ft.materialIndex];Pt&&Pt.visible&&g.push(T,Ne,Pt,j,ne.z,ft)}}else Ze.visible&&g.push(T,Ne,Ze,j,ne.z,null)}}const be=T.children;for(let Ne=0,Ze=be.length;Ne<Ze;Ne++)Us(be[Ne],z,j,Z)}function No(T,z,j,Z){const H=T.opaque,be=T.transmissive,Ne=T.transparent;p.setupLightsView(j),ee===!0&&Me.setGlobalState(x.clippingPlanes,j),Z&&ue.viewport(I.copy(Z)),H.length>0&&Er(H,z,j),be.length>0&&Er(be,z,j),Ne.length>0&&Er(Ne,z,j),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Uo(T,z,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new ws(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?Ua:ar,minFilter:ms,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));const be=p.state.transmissionRenderTarget[Z.id],Ne=Z.viewport||I;be.setSize(Ne.z*x.transmissionResolutionScale,Ne.w*x.transmissionResolutionScale);const Ze=x.getRenderTarget(),We=x.getActiveCubeFace(),ct=x.getActiveMipmapLevel();x.setRenderTarget(be),x.getClearColor(G),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),Q&&Ke.render(j);const pt=x.toneMapping;x.toneMapping=Gr;const ft=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),ee===!0&&Me.setGlobalState(x.clippingPlanes,Z),Er(T,j,Z),Te.updateMultisampleRenderTarget(be),Te.updateRenderTargetMipmap(be),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let Bt=0,an=z.length;Bt<an;Bt++){const jt=z[Bt],Ft=jt.object,dt=jt.geometry,Zt=jt.material,bt=jt.group;if(Zt.side===dn&&Ft.layers.test(Z.layers)){const Dn=Zt.side;Zt.side=ui,Zt.needsUpdate=!0,jr(Ft,j,Z,dt,Zt,bt),Zt.side=Dn,Zt.needsUpdate=!0,Pt=!0}}Pt===!0&&(Te.updateMultisampleRenderTarget(be),Te.updateRenderTargetMipmap(be))}x.setRenderTarget(Ze,We,ct),x.setClearColor(G,J),ft!==void 0&&(Z.viewport=ft),x.toneMapping=pt}function Er(T,z,j){const Z=z.isScene===!0?z.overrideMaterial:null;for(let H=0,be=T.length;H<be;H++){const Ne=T[H],Ze=Ne.object,We=Ne.geometry,ct=Ne.group;let pt=Ne.material;pt.allowOverride===!0&&Z!==null&&(pt=Z),Ze.layers.test(j.layers)&&jr(Ze,z,j,We,pt,ct)}}function jr(T,z,j,Z,H,be){T.onBeforeRender(x,z,j,Z,H,be),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(x,z,j,Z,T,be),H.transparent===!0&&H.side===dn&&H.forceSinglePass===!1?(H.side=ui,H.needsUpdate=!0,x.renderBufferDirect(j,z,Z,H,T,be),H.side=yr,H.needsUpdate=!0,x.renderBufferDirect(j,z,Z,H,T,be),H.side=dn):x.renderBufferDirect(j,z,Z,H,T,be),T.onAfterRender(x,z,j,Z,H,be)}function vi(T,z,j){z.isScene!==!0&&(z=he);const Z=le.get(T),H=p.state.lights,be=p.state.shadowsArray,Ne=H.state.version,Ze=K.getParameters(T,H.state,be,z,j),We=K.getProgramCacheKey(Ze);let ct=Z.programs;Z.environment=T.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(T.isMeshStandardMaterial?De:ve).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,ct===void 0&&(T.addEventListener("dispose",re),ct=new Map,Z.programs=ct);let pt=ct.get(We);if(pt!==void 0){if(Z.currentProgram===pt&&Z.lightsStateVersion===Ne)return ai(T,Ze),pt}else Ze.uniforms=K.getUniforms(T),T.onBeforeCompile(Ze,x),pt=K.acquireProgram(Ze,We),ct.set(We,pt),Z.uniforms=Ze.uniforms;const ft=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ft.clippingPlanes=Me.uniform),ai(T,Ze),Z.needsLights=kn(T),Z.lightsStateVersion=Ne,Z.needsLights&&(ft.ambientLightColor.value=H.state.ambient,ft.lightProbe.value=H.state.probe,ft.directionalLights.value=H.state.directional,ft.directionalLightShadows.value=H.state.directionalShadow,ft.spotLights.value=H.state.spot,ft.spotLightShadows.value=H.state.spotShadow,ft.rectAreaLights.value=H.state.rectArea,ft.ltc_1.value=H.state.rectAreaLTC1,ft.ltc_2.value=H.state.rectAreaLTC2,ft.pointLights.value=H.state.point,ft.pointLightShadows.value=H.state.pointShadow,ft.hemisphereLights.value=H.state.hemi,ft.directionalShadowMap.value=H.state.directionalShadowMap,ft.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ft.spotShadowMap.value=H.state.spotShadowMap,ft.spotLightMatrix.value=H.state.spotLightMatrix,ft.spotLightMap.value=H.state.spotLightMap,ft.pointShadowMap.value=H.state.pointShadowMap,ft.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.currentProgram=pt,Z.uniformsList=null,pt}function Bn(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=kc.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function ai(T,z){const j=le.get(T);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function Ya(T,z,j,Z,H){z.isScene!==!0&&(z=he),Te.resetTextureUnits();const be=z.fog,Ne=Z.isMeshStandardMaterial?z.environment:null,Ze=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:xo,We=(Z.isMeshStandardMaterial?De:ve).get(Z.envMap||Ne),ct=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pt=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ft=!!j.morphAttributes.position,Pt=!!j.morphAttributes.normal,Bt=!!j.morphAttributes.color;let an=Gr;Z.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(an=x.toneMapping);const jt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ft=jt!==void 0?jt.length:0,dt=le.get(Z),Zt=p.state.lights;if(ee===!0&&(we===!0||T!==S)){const D=T===S&&Z.id===M;Me.setState(Z,T,D)}let bt=!1;Z.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==Zt.state.version||dt.outputColorSpace!==Ze||H.isBatchedMesh&&dt.batching===!1||!H.isBatchedMesh&&dt.batching===!0||H.isBatchedMesh&&dt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&dt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&dt.instancing===!1||!H.isInstancedMesh&&dt.instancing===!0||H.isSkinnedMesh&&dt.skinning===!1||!H.isSkinnedMesh&&dt.skinning===!0||H.isInstancedMesh&&dt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&dt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&dt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&dt.instancingMorph===!1&&H.morphTexture!==null||dt.envMap!==We||Z.fog===!0&&dt.fog!==be||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==Me.numPlanes||dt.numIntersection!==Me.numIntersection)||dt.vertexAlphas!==ct||dt.vertexTangents!==pt||dt.morphTargets!==ft||dt.morphNormals!==Pt||dt.morphColors!==Bt||dt.toneMapping!==an||dt.morphTargetsCount!==Ft)&&(bt=!0):(bt=!0,dt.__version=Z.version);let Dn=dt.currentProgram;bt===!0&&(Dn=vi(Z,z,H));let Ar=!1,Jn=!1,Rr=!1;const Kt=Dn.getUniforms(),Qn=dt.uniforms;if(ue.useProgram(Dn.program)&&(Ar=!0,Jn=!0,Rr=!0),Z.id!==M&&(M=Z.id,Jn=!0),Ar||S!==T){ue.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Kt.setValue(L,"projectionMatrix",T.projectionMatrix),Kt.setValue(L,"viewMatrix",T.matrixWorldInverse);const k=Kt.map.cameraPosition;k!==void 0&&k.setValue(L,Ye.setFromMatrixPosition(T.matrixWorld)),Be.logarithmicDepthBuffer&&Kt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Kt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,Jn=!0,Rr=!0)}if(H.isSkinnedMesh){Kt.setOptional(L,H,"bindMatrix"),Kt.setOptional(L,H,"bindMatrixInverse");const D=H.skeleton;D&&(D.boneTexture===null&&D.computeBoneTexture(),Kt.setValue(L,"boneTexture",D.boneTexture,Te))}H.isBatchedMesh&&(Kt.setOptional(L,H,"batchingTexture"),Kt.setValue(L,"batchingTexture",H._matricesTexture,Te),Kt.setOptional(L,H,"batchingIdTexture"),Kt.setValue(L,"batchingIdTexture",H._indirectTexture,Te),Kt.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&Kt.setValue(L,"batchingColorTexture",H._colorsTexture,Te));const A=j.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&_e.update(H,j,Dn),(Jn||dt.receiveShadow!==H.receiveShadow)&&(dt.receiveShadow=H.receiveShadow,Kt.setValue(L,"receiveShadow",H.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Qn.envMap.value=We,Qn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&z.environment!==null&&(Qn.envMapIntensity.value=z.environmentIntensity),Jn&&(Kt.setValue(L,"toneMappingExposure",x.toneMappingExposure),dt.needsLights&&Tr(Qn,Rr),be&&Z.fog===!0&&se.refreshFogUniforms(Qn,be),se.refreshMaterialUniforms(Qn,Z,X,ce,p.state.transmissionRenderTarget[T.id]),kc.upload(L,Bn(dt),Qn,Te)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(kc.upload(L,Bn(dt),Qn,Te),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Kt.setValue(L,"center",H.center),Kt.setValue(L,"modelViewMatrix",H.modelViewMatrix),Kt.setValue(L,"normalMatrix",H.normalMatrix),Kt.setValue(L,"modelMatrix",H.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const D=Z.uniformsGroups;for(let k=0,V=D.length;k<V;k++){const $=D[k];Qe.update($,Dn),Qe.bind($,Dn)}}return Dn}function Tr(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function kn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,z,j){const Z=le.get(T);Z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),le.get(T.texture).__webglTexture=z,le.get(T.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:j,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const j=le.get(T);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0};const El=L.createFramebuffer();this.setRenderTarget=function(T,z=0,j=0){N=T,C=z,P=j;let Z=!0,H=null,be=!1,Ne=!1;if(T){const We=le.get(T);if(We.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(L.FRAMEBUFFER,null),Z=!1;else if(We.__webglFramebuffer===void 0)Te.setupRenderTarget(T);else if(We.__hasExternalTextures)Te.rebindTextures(T,le.get(T.texture).__webglTexture,le.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ft=T.depthTexture;if(We.__boundDepthTexture!==ft){if(ft!==null&&le.has(ft)&&(T.width!==ft.image.width||T.height!==ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Te.setupDepthRenderbuffer(T)}}const ct=T.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Ne=!0);const pt=le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(pt[z])?H=pt[z][j]:H=pt[z],be=!0):T.samples>0&&Te.useMultisampledRTT(T)===!1?H=le.get(T).__webglMultisampledFramebuffer:Array.isArray(pt)?H=pt[j]:H=pt,I.copy(T.viewport),F.copy(T.scissor),B=T.scissorTest}else I.copy(Ve).multiplyScalar(X).floor(),F.copy(tt).multiplyScalar(X).floor(),B=mt;if(j!==0&&(H=El),ue.bindFramebuffer(L.FRAMEBUFFER,H)&&Z&&ue.drawBuffers(T,H),ue.viewport(I),ue.scissor(F),ue.setScissorTest(B),be){const We=le.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,We.__webglTexture,j)}else if(Ne){const We=z;for(let ct=0;ct<T.textures.length;ct++){const pt=le.get(T.textures[ct]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ct,pt.__webglTexture,j,We)}}else if(T!==null&&j!==0){const We=le.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,We.__webglTexture,j)}M=-1},this.readRenderTargetPixels=function(T,z,j,Z,H,be,Ne,Ze=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(We=We[Ne]),We){ue.bindFramebuffer(L.FRAMEBUFFER,We);try{const ct=T.textures[Ze],pt=ct.format,ft=ct.type;if(!Be.textureFormatReadable(pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-Z&&j>=0&&j<=T.height-H&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ze),L.readPixels(z,j,Z,H,$e.convert(pt),$e.convert(ft),be))}finally{const ct=N!==null?le.get(N).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(T,z,j,Z,H,be,Ne,Ze=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(We=We[Ne]),We)if(z>=0&&z<=T.width-Z&&j>=0&&j<=T.height-H){ue.bindFramebuffer(L.FRAMEBUFFER,We);const ct=T.textures[Ze],pt=ct.format,ft=ct.type;if(!Be.textureFormatReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Pt),L.bufferData(L.PIXEL_PACK_BUFFER,be.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ze),L.readPixels(z,j,Z,H,$e.convert(pt),$e.convert(ft),0);const Bt=N!==null?le.get(N).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,Bt);const an=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await E0(L,an,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Pt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,be),L.deleteBuffer(Pt),L.deleteSync(an),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,j=0){const Z=Math.pow(2,-j),H=Math.floor(T.image.width*Z),be=Math.floor(T.image.height*Z),Ne=z!==null?z.x:0,Ze=z!==null?z.y:0;Te.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,Ne,Ze,H,be),ue.unbindTexture()};const Zr=L.createFramebuffer(),Kr=L.createFramebuffer();this.copyTextureToTexture=function(T,z,j=null,Z=null,H=0,be=null){be===null&&(H!==0?(ao("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=H,H=0):be=0);let Ne,Ze,We,ct,pt,ft,Pt,Bt,an;const jt=T.isCompressedTexture?T.mipmaps[be]:T.image;if(j!==null)Ne=j.max.x-j.min.x,Ze=j.max.y-j.min.y,We=j.isBox3?j.max.z-j.min.z:1,ct=j.min.x,pt=j.min.y,ft=j.isBox3?j.min.z:0;else{const A=Math.pow(2,-H);Ne=Math.floor(jt.width*A),Ze=Math.floor(jt.height*A),T.isDataArrayTexture?We=jt.depth:T.isData3DTexture?We=Math.floor(jt.depth*A):We=1,ct=0,pt=0,ft=0}Z!==null?(Pt=Z.x,Bt=Z.y,an=Z.z):(Pt=0,Bt=0,an=0);const Ft=$e.convert(z.format),dt=$e.convert(z.type);let Zt;z.isData3DTexture?(Te.setTexture3D(z,0),Zt=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Te.setTexture2DArray(z,0),Zt=L.TEXTURE_2D_ARRAY):(Te.setTexture2D(z,0),Zt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const bt=L.getParameter(L.UNPACK_ROW_LENGTH),Dn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ar=L.getParameter(L.UNPACK_SKIP_PIXELS),Jn=L.getParameter(L.UNPACK_SKIP_ROWS),Rr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,jt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,jt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ct),L.pixelStorei(L.UNPACK_SKIP_ROWS,pt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ft);const Kt=T.isDataArrayTexture||T.isData3DTexture,Qn=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const A=le.get(T),D=le.get(z),k=le.get(A.__renderTarget),V=le.get(D.__renderTarget);ue.bindFramebuffer(L.READ_FRAMEBUFFER,k.__webglFramebuffer),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,V.__webglFramebuffer);for(let $=0;$<We;$++)Kt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,le.get(T).__webglTexture,H,ft+$),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,le.get(z).__webglTexture,be,an+$)),L.blitFramebuffer(ct,pt,Ne,Ze,Pt,Bt,Ne,Ze,L.DEPTH_BUFFER_BIT,L.NEAREST);ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||le.has(T)){const A=le.get(T),D=le.get(z);ue.bindFramebuffer(L.READ_FRAMEBUFFER,Zr),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,Kr);for(let k=0;k<We;k++)Kt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,A.__webglTexture,H,ft+k):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,A.__webglTexture,H),Qn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,D.__webglTexture,be,an+k):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,D.__webglTexture,be),H!==0?L.blitFramebuffer(ct,pt,Ne,Ze,Pt,Bt,Ne,Ze,L.COLOR_BUFFER_BIT,L.NEAREST):Qn?L.copyTexSubImage3D(Zt,be,Pt,Bt,an+k,ct,pt,Ne,Ze):L.copyTexSubImage2D(Zt,be,Pt,Bt,ct,pt,Ne,Ze);ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Qn?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Zt,be,Pt,Bt,an,Ne,Ze,We,Ft,dt,jt.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(Zt,be,Pt,Bt,an,Ne,Ze,We,Ft,jt.data):L.texSubImage3D(Zt,be,Pt,Bt,an,Ne,Ze,We,Ft,dt,jt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,be,Pt,Bt,Ne,Ze,Ft,dt,jt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,be,Pt,Bt,jt.width,jt.height,Ft,jt.data):L.texSubImage2D(L.TEXTURE_2D,be,Pt,Bt,Ne,Ze,Ft,dt,jt);L.pixelStorei(L.UNPACK_ROW_LENGTH,bt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Dn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ar),L.pixelStorei(L.UNPACK_SKIP_ROWS,Jn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Rr),be===0&&z.generateMipmaps&&L.generateMipmap(Zt),ue.unbindTexture()},this.copyTextureToTexture3D=function(T,z,j=null,Z=null,H=0){return ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,j,Z,H)},this.initRenderTarget=function(T){le.get(T).__webglFramebuffer===void 0&&Te.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Te.setTextureCube(T,0):T.isData3DTexture?Te.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Te.setTexture2DArray(T,0):Te.setTexture2D(T,0),ue.unbindTexture()},this.resetState=function(){C=0,P=0,N=null,ue.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ht._getUnpackColorSpace()}}const Tf={type:"change"},Yu={type:"start"},em={type:"end"},Mc=new Fa,Af=new Or,bM=Math.cos(70*qt.DEG2RAD),An=new b,ci=2*Math.PI,$t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ad=1e-6;class wM extends Yp{constructor(e,t=null){super(e,t),this.state=$t.NONE,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:so.ROTATE,MIDDLE:so.DOLLY,RIGHT:so.PAN},this.touches={ONE:to.ROTATE,TWO:to.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new b,this._lastQuaternion=new fn,this._lastTargetPosition=new b,this._quat=new fn().setFromUnitVectors(e.up,new b(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qh,this._sphericalDelta=new Qh,this._scale=1,this._panOffset=new b,this._rotateStart=new ze,this._rotateEnd=new ze,this._rotateDelta=new ze,this._panStart=new ze,this._panEnd=new ze,this._panDelta=new ze,this._dollyStart=new ze,this._dollyEnd=new ze,this._dollyDelta=new ze,this._dollyDirection=new b,this._mouse=new ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=TM.bind(this),this._onPointerDown=EM.bind(this),this._onPointerUp=AM.bind(this),this._onContextMenu=NM.bind(this),this._onMouseWheel=PM.bind(this),this._onKeyDown=LM.bind(this),this._onTouchStart=DM.bind(this),this._onTouchMove=IM.bind(this),this._onMouseDown=RM.bind(this),this._onMouseMove=CM.bind(this),this._interceptControlDown=UM.bind(this),this._interceptControlUp=FM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Tf),this.update(),this.state=$t.NONE}update(e=null){const t=this.object.position;An.copy(t).sub(this.target),An.applyQuaternion(this._quat),this._spherical.setFromVector3(An),this.autoRotate&&this.state===$t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=ci:i>Math.PI&&(i-=ci),r<-Math.PI?r+=ci:r>Math.PI&&(r-=ci),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(An.setFromSpherical(this._spherical),An.applyQuaternion(this._quatInverse),t.copy(this.target).add(An),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=An.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new b(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new b(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=An.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Mc.origin.copy(this.object.position),Mc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mc.direction))<bM?this.object.lookAt(this.target):(Af.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mc.intersectPlane(Af,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ad||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ad||this._lastTargetPosition.distanceToSquared(this.target)>ad?(this.dispatchEvent(Tf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ci/60*this.autoRotateSpeed*e:ci/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){An.setFromMatrixColumn(t,0),An.multiplyScalar(-e),this._panOffset.add(An)}_panUp(e,t){this.screenSpacePanning===!0?An.setFromMatrixColumn(t,1):(An.setFromMatrixColumn(t,0),An.crossVectors(this.object.up,An)),An.multiplyScalar(e),this._panOffset.add(An)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;An.copy(r).sub(this.target);let s=An.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/t.clientHeight),this._rotateUp(ci*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/t.clientHeight),this._rotateUp(ci*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function EM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function TM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function AM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(em),this.state=$t.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function RM(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case so.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=$t.DOLLY;break;case so.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=$t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=$t.ROTATE}break;case so.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=$t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=$t.PAN}break;default:this.state=$t.NONE}this.state!==$t.NONE&&this.dispatchEvent(Yu)}function CM(n){switch(this.state){case $t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case $t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case $t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function PM(n){this.enabled===!1||this.enableZoom===!1||this.state!==$t.NONE||(n.preventDefault(),this.dispatchEvent(Yu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(em))}function LM(n){this.enabled!==!1&&this._handleKeyDown(n)}function DM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case to.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=$t.TOUCH_ROTATE;break;case to.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=$t.TOUCH_PAN;break;default:this.state=$t.NONE}break;case 2:switch(this.touches.TWO){case to.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=$t.TOUCH_DOLLY_PAN;break;case to.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=$t.TOUCH_DOLLY_ROTATE;break;default:this.state=$t.NONE}break;default:this.state=$t.NONE}this.state!==$t.NONE&&this.dispatchEvent(Yu)}function IM(n){switch(this._trackPointer(n),this.state){case $t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case $t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case $t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case $t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=$t.NONE}}function NM(n){this.enabled!==!1&&n.preventDefault()}function UM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function FM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ss=new qp,qn=new b,Ur=new b,cn=new fn,Rf={X:new b(1,0,0),Y:new b(0,1,0),Z:new b(0,0,1)},cd={type:"change"},Cf={type:"mouseDown",mode:null},Pf={type:"mouseUp",mode:null},Lf={type:"objectChange"};class kM extends Yp{constructor(e,t=null){super(void 0,t);const i=new GM(this);this._root=i;const r=new WM;this._gizmo=r,i.add(r);const s=new XM;this._plane=s,i.add(s);const o=this;function a(y,x){let R=x;Object.defineProperty(o,y,{get:function(){return R!==void 0?R:x},set:function(C){R!==C&&(R=C,s[y]=C,r[y]=C,o.dispatchEvent({type:y+"-changed",value:C}),o.dispatchEvent(cd))}}),o[y]=x,s[y]=x,r[y]=x}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const c=new b,l=new b,d=new fn,u=new fn,h=new b,f=new fn,m=new b,_=new b,g=new b,p=0,E=new b;a("worldPosition",c),a("worldPositionStart",l),a("worldQuaternion",d),a("worldQuaternionStart",u),a("cameraPosition",h),a("cameraQuaternion",f),a("pointStart",m),a("pointEnd",_),a("rotationAxis",g),a("rotationAngle",p),a("eye",E),this._offset=new b,this._startNorm=new b,this._endNorm=new b,this._cameraScale=new b,this._parentPosition=new b,this._parentQuaternion=new fn,this._parentQuaternionInv=new fn,this._parentScale=new b,this._worldScaleStart=new b,this._worldQuaternionInv=new fn,this._worldScale=new b,this._positionStart=new b,this._quaternionStart=new fn,this._scaleStart=new b,this._getPointer=OM.bind(this),this._onPointerDown=BM.bind(this),this._onPointerHover=zM.bind(this),this._onPointerMove=HM.bind(this),this._onPointerUp=VM.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&ss.setFromCamera(e,this.camera);const t=ld(this._gizmo.picker[this.mode],ss);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&ss.setFromCamera(e,this.camera);const t=ld(this._plane,ss,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Cf.mode=this.mode,this.dispatchEvent(Cf)}}pointerMove(e){const t=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&ss.setFromCamera(e,this.camera);const o=ld(this._plane,ss,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(cn.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(qn.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(qn.setFromMatrixPosition(r.parent.matrixWorld)))),r.position.x=Math.max(this.minX,Math.min(this.maxX,r.position.x)),r.position.y=Math.max(this.minY,Math.min(this.maxY,r.position.y)),r.position.z=Math.max(this.minZ,Math.min(this.maxZ,r.position.z));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Ur.set(a,a,a)}else qn.copy(this.pointStart),Ur.copy(this.pointEnd),qn.applyQuaternion(this._worldQuaternionInv),Ur.applyQuaternion(this._worldQuaternionInv),Ur.divide(qn),t.search("X")===-1&&(Ur.x=1),t.search("Y")===-1&&(Ur.y=1),t.search("Z")===-1&&(Ur.z=1);r.scale.copy(this._scaleStart).multiply(Ur),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(qn.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(qn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Rf[t]),qn.copy(Rf[t]),s==="local"&&qn.applyQuaternion(this.worldQuaternion),qn.cross(this.eye),qn.length()===0?c=!0:this.rotationAngle=this._offset.dot(qn.normalize())*a),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(cn.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(cn.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(cd),this.dispatchEvent(Lf)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Pf.mode=this.mode,this.dispatchEvent(Pf)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(cd),this.dispatchEvent(Lf),this.pointStart.copy(this.pointEnd))}getRaycaster(){return ss}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,i,r){const s=this._gizmo.materialLib;s.xAxis.color.set(e),s.yAxis.color.set(t),s.zAxis.color.set(i),s.active.color.set(r),s.xAxisTransparent.color.set(e),s.yAxisTransparent.color.set(t),s.zAxisTransparent.color.set(i),s.activeTransparent.color.set(r),s.xAxis._color&&s.xAxis._color.set(e),s.yAxis._color&&s.yAxis._color.set(t),s.zAxis._color&&s.zAxis._color.set(i),s.active._color&&s.active._color.set(r),s.xAxisTransparent._color&&s.xAxisTransparent._color.set(e),s.yAxisTransparent._color&&s.yAxisTransparent._color.set(t),s.zAxisTransparent._color&&s.zAxisTransparent._color.set(i),s.activeTransparent._color&&s.activeTransparent._color.set(r)}}function OM(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{const e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function zM(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function BM(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function HM(n){this.enabled&&this.pointerMove(this._getPointer(n))}function VM(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function ld(n,e,t){const i=e.intersectObject(n,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||t)return i[r];return!1}const bc=new Zn,Jt=new b(0,1,0),Df=new b(0,0,0),If=new Xt,wc=new fn,Oc=new fn,tr=new b,Nf=new Xt,Jo=new b(1,0,0),cs=new b(0,1,0),Qo=new b(0,0,1),Ec=new b,Vo=new b,Go=new b;class GM extends gn{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class WM extends gn{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new vn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new fi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const l=e.clone();l.color.setHex(65280),l.opacity=.5;const d=e.clone();d.color.setHex(255),d.opacity=.5;const u=e.clone();u.opacity=.25;const h=e.clone();h.color.setHex(16776960),h.opacity=.25;const f=e.clone();f.color.setHex(16776960);const m=e.clone();m.color.setHex(7895160),this.materialLib={xAxis:s,yAxis:o,zAxis:a,active:f,xAxisTransparent:c,yAxisTransparent:l,zAxisTransparent:d,activeTransparent:h};const _=new Xn(0,.04,.1,12);_.translate(0,.05,0);const g=new bn(.08,.08,.08);g.translate(0,.04,0);const p=new Ut;p.setAttribute("position",new Rt([0,0,0,1,0,0],3));const E=new Xn(.0075,.0075,.5,3);E.translate(0,.25,0);function y(J,q){const ce=new us(J,.0075,3,64,q*Math.PI*2);return ce.rotateY(Math.PI/2),ce.rotateX(Math.PI/2),ce}function x(){const J=new Ut;return J.setAttribute("position",new Rt([0,0,0,1,1,1],3)),J}const R={X:[[new Ee(_,s),[.5,0,0],[0,0,-Math.PI/2]],[new Ee(_,s),[-.5,0,0],[0,0,Math.PI/2]],[new Ee(E,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Ee(_,o),[0,.5,0]],[new Ee(_,o),[0,-.5,0],[Math.PI,0,0]],[new Ee(E,o)]],Z:[[new Ee(_,a),[0,0,.5],[Math.PI/2,0,0]],[new Ee(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new Ee(E,a),null,[Math.PI/2,0,0]]],XYZ:[[new Ee(new gs(.1,0),u),[0,0,0]]],XY:[[new Ee(new bn(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new Ee(new bn(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new bn(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},C={X:[[new Ee(new Xn(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new Ee(new Xn(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ee(new Xn(.2,0,.6,4),i),[0,.3,0]],[new Ee(new Xn(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ee(new Xn(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new Ee(new Xn(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Ee(new gs(.2,0),i)]],XY:[[new Ee(new bn(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new Ee(new bn(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new bn(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},P={START:[[new Ee(new gs(.01,2),r),null,null,null,"helper"]],END:[[new Ee(new gs(.01,2),r),null,null,null,"helper"]],DELTA:[[new hn(x(),r),null,null,null,"helper"]],X:[[new hn(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new hn(p,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new hn(p,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},N={XYZE:[[new Ee(y(.5,1),m),null,[0,Math.PI/2,0]]],X:[[new Ee(y(.5,.5),s)]],Y:[[new Ee(y(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new Ee(y(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new Ee(y(.75,1),h),null,[0,Math.PI/2,0]]]},M={AXIS:[[new hn(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]]},S={XYZE:[[new Ee(new Wr(.25,10,8),i)]],X:[[new Ee(new us(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Ee(new us(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Ee(new us(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Ee(new us(.75,.1,2,24),i)]]},I={X:[[new Ee(g,s),[.5,0,0],[0,0,-Math.PI/2]],[new Ee(E,s),[0,0,0],[0,0,-Math.PI/2]],[new Ee(g,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Ee(g,o),[0,.5,0]],[new Ee(E,o)],[new Ee(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Ee(g,a),[0,0,.5],[Math.PI/2,0,0]],[new Ee(E,a),[0,0,0],[Math.PI/2,0,0]],[new Ee(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Ee(new bn(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new Ee(new bn(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new bn(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ee(new bn(.1,.1,.1),u)]]},F={X:[[new Ee(new Xn(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new Ee(new Xn(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ee(new Xn(.2,0,.6,4),i),[0,.3,0]],[new Ee(new Xn(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ee(new Xn(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new Ee(new Xn(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Ee(new bn(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new Ee(new bn(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new bn(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ee(new bn(.2,.2,.2),i),[0,0,0]]]},B={X:[[new hn(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new hn(p,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new hn(p,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function G(J){const q=new gn;for(const ce in J)for(let X=J[ce].length;X--;){const oe=J[ce][X][0].clone(),Se=J[ce][X][1],Ve=J[ce][X][2],tt=J[ce][X][3],mt=J[ce][X][4];oe.name=ce,oe.tag=mt,Se&&oe.position.set(Se[0],Se[1],Se[2]),Ve&&oe.rotation.set(Ve[0],Ve[1],Ve[2]),tt&&oe.scale.set(tt[0],tt[1],tt[2]),oe.updateMatrix();const xt=oe.geometry.clone();xt.applyMatrix4(oe.matrix),oe.geometry=xt,oe.renderOrder=1/0,oe.position.set(0,0,0),oe.rotation.set(0,0,0),oe.scale.set(1,1,1),q.add(oe)}return q}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=G(R)),this.add(this.gizmo.rotate=G(N)),this.add(this.gizmo.scale=G(I)),this.add(this.picker.translate=G(C)),this.add(this.picker.rotate=G(S)),this.add(this.picker.scale=G(F)),this.add(this.helper.translate=G(P)),this.add(this.helper.rotate=G(M)),this.add(this.helper.scale=G(B)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Oc;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(cn.setFromEuler(bc.set(0,0,0)),o.quaternion.copy(i).multiply(cn),Math.abs(Jt.copy(Jo).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(cn.setFromEuler(bc.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(cn),Math.abs(Jt.copy(cs).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(cn.setFromEuler(bc.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(cn),Math.abs(Jt.copy(Qo).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(cn.setFromEuler(bc.set(0,Math.PI/2,0)),Jt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(If.lookAt(Df,Jt,cs)),o.quaternion.multiply(cn),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),qn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),qn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(qn),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Jt.copy(Jo).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Jt.copy(cs).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Jt.copy(Qo).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Jt.copy(Qo).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Jt.copy(Jo).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Jt.copy(cs).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(wc.copy(i),Jt.copy(this.eye).applyQuaternion(cn.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(If.lookAt(this.eye,Df,cs)),o.name==="X"&&(cn.setFromAxisAngle(Jo,Math.atan2(-Jt.y,Jt.z)),cn.multiplyQuaternions(wc,cn),o.quaternion.copy(cn)),o.name==="Y"&&(cn.setFromAxisAngle(cs,Math.atan2(Jt.x,Jt.z)),cn.multiplyQuaternions(wc,cn),o.quaternion.copy(cn)),o.name==="Z"&&(cn.setFromAxisAngle(Qo,Math.atan2(Jt.y,Jt.x)),cn.multiplyQuaternions(wc,cn),o.quaternion.copy(cn))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(c){return o.name===c})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}}class XM extends Ee{constructor(){super(new Xr(1e5,1e5,2,2),new vn({visible:!1,wireframe:!0,side:dn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Ec.copy(Jo).applyQuaternion(t==="local"?this.worldQuaternion:Oc),Vo.copy(cs).applyQuaternion(t==="local"?this.worldQuaternion:Oc),Go.copy(Qo).applyQuaternion(t==="local"?this.worldQuaternion:Oc),Jt.copy(Vo),this.mode){case"translate":case"scale":switch(this.axis){case"X":Jt.copy(this.eye).cross(Ec),tr.copy(Ec).cross(Jt);break;case"Y":Jt.copy(this.eye).cross(Vo),tr.copy(Vo).cross(Jt);break;case"Z":Jt.copy(this.eye).cross(Go),tr.copy(Go).cross(Jt);break;case"XY":tr.copy(Go);break;case"YZ":tr.copy(Ec);break;case"XZ":Jt.copy(Go),tr.copy(Vo);break;case"XYZ":case"E":tr.set(0,0,0);break}break;default:tr.set(0,0,0)}tr.length()===0?this.quaternion.copy(this.cameraQuaternion):(Nf.lookAt(qn.set(0,0,0),tr,Jt),this.quaternion.setFromRotationMatrix(Nf)),super.updateMatrixWorld(e)}}const Tc=32,nr=.4;function tm(n,e){const t=new xn,i=new vn({vertexColors:!0,transparent:!0,opacity:.88,side:dn,depthWrite:!0}),r=[],s=new Nt,o=new Nt(.55,.68,.74),a=new Float32Array(n.size*n.size*3),c=new Uint32Array(n.size*n.size);let l=0,d=!1;for(let m=0;m<n.size-1;m+=Tc)for(let _=0;_<n.size-1;_+=Tc){const g=Math.min(n.size-1,_+Tc),p=Math.min(n.size-1,m+Tc),E=(g-_)*(p-m)*12*3,y=new wi(new Float32Array(E),3).setUsage(qc),x=new wi(new Float32Array(E),3).setUsage(qc),R=new Ut;R.setAttribute("position",y),R.setAttribute("color",x);const C=-n.extent+_*n.spacing,P=-n.extent+g*n.spacing,N=-n.extentZ+m*n.spacingZ,M=-n.extentZ+p*n.spacingZ;R.boundingBox=new To(new b(C,0,N),new b(P,180,M)),R.boundingSphere=R.boundingBox.getBoundingSphere(new Ao);const S=new Ee(R,i);S.userData.terrainChunk={minX:_,maxX:g,minZ:m,maxZ:p},r.push({minX:_,maxX:g,minZ:m,maxZ:p,mesh:S,position:y,color:x}),t.add(S)}const u=(m,_)=>{const g=-n.extent+m*n.spacing,p=-n.extentZ+_*n.spacingZ;let E=0;if(e){const R=Math.round((g+e.extent)/e.spacing),C=Math.round((p+e.extentZ)/e.spacingZ);R>=0&&R<e.size&&C>=0&&C<e.size&&(E=e.data[C*e.size+R]/255)}const y=_*n.size+m,x=n.data[y];if(c[y]!==l){const R=Math.pow(qt.clamp(x/180,0,1),.65);s.setHSL(.57,.35*(1-R)+.06,.06+R*.68,si),E&&s.lerp(o,E*.45),a[y*3]=s.r,a[y*3+1]=s.g,a[y*3+2]=s.b,c[y]=l}return{x:g,y:x,z:p,density:E,r:a[y*3],g:a[y*3+1],b:a[y*3+2]}},h=m=>{let _=0;const g=E=>{m.position.setXYZ(_,E.x,E.y,E.z),m.color.setXYZ(_++,E.r,E.g,E.b)},p=(E,y,x)=>{if(E.y>=nr&&y.y>=nr&&x.y>=nr){g(E),g(y),g(x);return}const R=[E,y,x],C=[];for(let P=0;P<3;P++){const N=R[P],M=R[(P+1)%3];if(N.y>=nr&&C.push(N),N.y>=nr!=M.y>=nr){const S=(nr-N.y)/(M.y-N.y),I=N.density+(M.density-N.density)*S,F=Math.pow(nr/180,.65);s.setHSL(.57,.35*(1-F)+.06,.06+F*.68,si),I&&s.lerp(o,I*.45),C.push({x:N.x+(M.x-N.x)*S,y:nr,z:N.z+(M.z-N.z)*S,density:I,r:s.r,g:s.g,b:s.b})}}for(let P=1;P<C.length-1;P++)g(C[0]),g(C[P]),g(C[P+1])};for(let E=m.minZ;E<m.maxZ;E++)for(let y=m.minX;y<m.maxX;y++){const x=u(y,E),R=u(y+1,E),C=u(y+1,E+1),P=u(y,E+1);Math.max(x.y,R.y,C.y,P.y)<nr||(p(x,R,C),p(x,C,P))}m.mesh.geometry.setDrawRange(0,_),m.mesh.visible=_>0;for(const E of[m.position,m.color])_&&E.addUpdateRange(0,_*3),E.needsUpdate=!0},f=m=>{if(!d&&!(m&&![m.minX,m.maxX,m.minZ,m.maxZ].every(Number.isFinite))&&!(m&&(m.minX>m.maxX||m.minZ>m.maxZ))){l=l+1>>>0,l||(c.fill(0),l=1);for(const _ of r)m&&(_.maxX<m.minX||_.minX>m.maxX||_.maxZ<m.minZ||_.minZ>m.maxZ)||h(_)}};return f(),{root:t,update:f,dispose(){if(!d){d=!0;for(const m of r)m.mesh.geometry.dispose();i.dispose(),t.removeFromParent(),t.clear()}}}}function qM(n){const e=tm(n);for(const t of e.root.children){const i=t,r=i.geometry.drawRange.count;for(const s of["position","color"]){const o=i.geometry.getAttribute(s);i.geometry.setAttribute(s,new wi(o.array.slice(0,r*3),3))}i.geometry.setDrawRange(0,r)}return e.root}const YM=5,$M=Ym,dd=40,Uf=65;function jM(n){if(n<=dd*rt)return 1;if(n>=Uf*rt)return 0;const e=(n/rt-dd)/(Uf-dd);return 1-e*e*(3-2*e)}const ZM=`
  varying vec2 vMapPosition;
  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vMapPosition = worldPosition.xz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,KM=`
  uniform vec3 majorColor;
  uniform vec3 minorColor;
  uniform float majorStep;
  uniform float minorStep;
  uniform float minorOpacity;
  varying vec2 vMapPosition;

  void main() {
    // Pixel-space antialiasing maintains the visual weight at any zoom level.
    vec2 pixel = max(fwidth(vMapPosition), vec2(0.0001));
    vec2 antialias = pixel * 0.7;
    vec2 majorDelta = abs(mod(vMapPosition + majorStep * 0.5, majorStep) - majorStep * 0.5);
    vec2 majorHalfWidth = max(pixel * 1.15, vec2(0.08));
    vec2 majorLines = 1.0 - smoothstep(max(majorHalfWidth - antialias, vec2(0.0)),
      majorHalfWidth + antialias, majorDelta);
    float major = max(majorLines.x, majorLines.y);

    float fine = 0.0;
    if (minorOpacity > 0.0) {
      vec2 delta = abs(mod(vMapPosition + minorStep * 0.5, minorStep) - minorStep * 0.5);
      vec2 halfWidth = max(pixel * 0.38, vec2(0.025));
      vec2 thinLines = 1.0 - smoothstep(max(halfWidth - antialias, vec2(0.0)),
        halfWidth + antialias, delta);
      // Each crossing has four straight arms with a small square opening, never a ring.
      vec2 gapHalfWidth = min(max(pixel * 1.8, vec2(minorStep * 0.045)), vec2(minorStep * 0.14));
      vec2 outsideGap = smoothstep(max(gapHalfWidth - antialias, vec2(0.0)),
        gapHalfWidth + antialias, delta);
      fine = max(thinLines.x * outsideGap.y, thinLines.y * outsideGap.x) * minorOpacity;
    }
    float majorAlpha = major * 0.64;
    float minorAlpha = fine * 0.34;
    float alpha = majorAlpha + (1.0 - majorAlpha) * minorAlpha;
    if (alpha < 0.001) discard;
    vec3 color = mix(minorColor, majorColor, majorAlpha / max(alpha, 0.001));
    gl_FragColor = vec4(color, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;function JM(n,e){const t=new Xr(n*2,e*2);t.rotateX(-Math.PI/2);const i=new Sr({uniforms:{majorColor:{value:new Nt(16777215)},minorColor:{value:new Nt(16777215)},majorStep:{value:YM*rt},minorStep:{value:$M*rt},minorOpacity:{value:1}},vertexShader:ZM,fragmentShader:KM,transparent:!0,depthWrite:!1,side:dn}),r=new Ee(t,i);return r.position.y=-2,r.renderOrder=-1,r}function nm(n,e){n.material.uniforms.minorOpacity.value=jM(e)}const ud=21,QM=7,Ff=14;function im(n){const e=[],t=(r,s,o,a)=>{e.push(new b(r,s,0),new b(o,a,0))};for(const r of[ud,QM])t(-r,-r,r,-r),t(r,-r,r,r),t(r,r,-r,r),t(-r,r,-r,-r);for(const r of[-1,1])for(const s of[-1,1])t(r*ud,s*ud,r*Ff,s*Ff);const i=new Ip(new Ut().setFromPoints(e),new fi({color:n,transparent:!0,opacity:.9,depthTest:!1}));return i.name="escort-marker",i.visible=!1,i}const Ac=25,Rc=80,Wo=1;function eb(n,e){if(Number.isNaN(n))return e??1;const t=Math.max(0,n/rt);return e===1?t>=Rc+6?3:t>=Ac+2?2:1:e===2?t<=Ac-2?1:t>=Rc+6?3:2:e===3?t<=Ac-2?1:t<=Rc-6?2:3:t<Ac?1:t<Rc?2:3}const oa=(n,e)=>n<e?-1:n>e?1:0,tb=new Intl.Collator("en",{sensitivity:"variant"}),nb=n=>n.icon==="air-filled"||n.icon==="air-outline",rm=n=>n.status==="active"&&n.tgt===!0,sm=n=>n.status==="active"&&n.escort===!0&&n.faction!=="enemy",kf=n=>rm(n)||sm(n)?1:0;function Of(n){const e={x:0,y:0,z:0};for(const h of n)e.x+=h.position.x/n.length,e.y+=h.position.y/n.length,e.z+=h.position.z/n.length;const t=h=>Math.hypot(h.position.x-e.x,h.position.y-e.y,h.position.z-e.z);let i=n[0],r=t(i),s,o=1/0;const a=new Map;let c=!1,l=!1;for(const h of n){const f=t(h),m=kf(h)-kf(i);(m>0||m===0&&(f<r||f===r&&oa(h.id,i.id)<0))&&(i=h,r=f),nb(h)&&(!s||f<o||f===o&&oa(h.id,s.id)<0)&&(s=h,o=f),a.set(h.label,(a.get(h.label)??0)+1),c||=rm(h),l||=sm(h)}const d=[...a.keys()].filter(h=>h!==i.label).sort((h,f)=>tb.compare(h,f)||oa(h,f)),u=[i.label,...d].map(h=>{const f=a.get(h);return f>1?`${h} ×${f}`:h}).join(`
`);return{representativeId:i.id,memberIds:n.map(h=>h.id),label:u,hasTgt:c,hasEscort:l,...s?{airRepresentativeId:s.id}:{}}}function ib(n,e){const t=[...n].sort((d,u)=>oa(d.id,u.id));if(e===1)return t.map(d=>Of([d]));const i=e===2?54:68,r=i*i,s=Wo*Wo,o=new Map,a=[],c=(d,u,h,f)=>`${d}:${u}:${h}:${f}`,l=(d,u)=>`${d}:${u}`;for(const d of t){if(d.status!=="active"||!d.onScreen||!Number.isFinite(d.screenX)||!Number.isFinite(d.screenY)||!Number.isFinite(d.position.x)||!Number.isFinite(d.position.y)||!Number.isFinite(d.position.z)){a.push({seed:d,members:[d]});continue}const u=Math.floor(d.position.x/Wo),h=Math.floor(d.position.y/Wo),f=Math.floor(d.position.z/Wo),m=Math.floor(d.screenX/i),_=Math.floor(d.screenY/i);let g;for(let p=-1;p<=1;p++)for(let E=-1;E<=1;E++)for(let y=-1;y<=1;y++){const x=o.get(c(d.faction,u+p,h+E,f+y));if(x)for(let R=-1;R<=1;R++)for(let C=-1;C<=1;C++){const P=x.get(l(m+R,_+C));if(P)for(const N of P){const M=d.position.x-N.seed.position.x,S=d.position.y-N.seed.position.y,I=d.position.z-N.seed.position.z;if(M*M+S*S+I*I>s)continue;const F=d.screenX-N.seed.screenX,B=d.screenY-N.seed.screenY;F*F+B*B<=r&&(!g||oa(N.seed.id,g.seed.id)<0)&&(g=N)}}}if(g)g.members.push(d);else{const p={seed:d,members:[d]};a.push(p);const E=c(d.faction,u,h,f);let y=o.get(E);y||(y=new Map,o.set(E,y));const x=l(m,_),R=y.get(x);R?R.push(p):y.set(x,[p])}}return a.map(d=>Of(d.members))}const Cc=12,zf=.675,rb=.15,sb=5e3;function hd(n,e){const t=Number.isFinite(e)&&e>0?e:Cc*zf/12,i=n===1?Math.min(24*t/Cc,Math.max(10*t/Cc,zf)):(n===2?15:17)*t/Cc;return Math.min(sb,Math.max(rb,i))}function ob(n){const e=new xn;e.name="far-air-display",e.visible=!1;const t=new Ee(new fl(2.2,3.3,20),new vn({color:n,transparent:!0,opacity:.8,side:dn,depthTest:!1}));t.rotation.x=-Math.PI/2;const i=new hn(new Ut().setFromPoints([new b(0,.2,0),new b(0,1,0)]),new fi({color:n,transparent:!0,opacity:.8,depthTest:!1})),r=Array.from({length:65},(a,c)=>{const l=c/64*Math.PI*2;return new b(Math.cos(l)*7.2,Math.sin(l)*7.2,0)}),s=new hn(new Ut().setFromPoints(r),new fi({color:n,transparent:!0,opacity:.9,depthTest:!1})),o=im(n);return t.add(s,o),e.add(t,i),{root:e,base:t,pole:i,tgt:s,escort:o}}function ab(n,e,t){const{tier:i,representative:r,status:s,scale:o}=t,a=s!=="wreck",c=n.base!==null;n.base&&(n.base.visible=r&&a&&i!==3,n.base.scale.setScalar((t.baseScale??o)/.675)),n.icon.visible=r&&a,n.icon.scale.setScalar(o),n.icon.position.y=t.iconHeight,n.pole.visible=r&&a&&i!==3,n.pole.userData.naturalTop=t.poleHeight,n.wreck.visible=r&&s!=="active",n.wreck.scale.setScalar(o/.675),e.root.visible=r&&s==="active"&&i===3&&t.hasAir,e.base.scale.setScalar((t.farBaseScale??o)/.675),e.base.position.y=1.5,e.tgt.scale.setScalar(.675),e.escort.scale.setScalar(.675),e.tgt.visible=t.hasTgt&&!c,e.escort.visible=t.hasEscort&&!c&&t.faction!=="enemy";const l=e.pole.geometry.getAttribute("position"),d=Math.max(t.airAltitude,.6);e.pole.userData.naturalTop=d,l.getY(1)!==d&&(l.setY(1,d),l.needsUpdate=!0,e.pole.geometry.computeBoundingSphere()),n.label.position.y=i===3?t.hasAir?d:1.5:t.poleHeight;const u=n.label.userData.dom;u.textContent!==t.label&&(u.textContent=t.label),u.style.whiteSpace="pre",u.style.fontSize=i===1?"14px":i===2?"13px":"12px",u.style.lineHeight="1.15";const h=r&&n.labelFade>0&&(i!==3||t.faction==="squadron");u.hidden=!h,n.label.userData.displayVisible=h}const cb=[[-5,-5],[0,7],[5,-5]],lb=[[-4,-4],[-4,2],[0,6],[4,2],[4,-4]],db=[[-4,-4],[-4,4],[4,4],[4,-4]],ub=[[0,5.8],[-3.25,-3.1],[3.25,-3.1]];function Bf(n){const e=new Hp;e.moveTo(n[0][0],n[0][1]);for(const[t,i]of n.slice(1))e.lineTo(t,i);return e.closePath(),new Xu(e)}function fd(n,e){return new vn({color:n,transparent:!0,opacity:e,side:dn,depthTest:!1,depthWrite:!1})}function hb(n,e){const t=new xn,i=n==="ground"?db:n==="ship"?lb:cb,r=new hn(new Ut().setFromPoints(i.map(([o,a])=>new b(o,a,0))),new fi({color:e,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1}));if(r.name="outline",t.add(r),n==="air-filled"){const o=new Ee(Bf(ub),fd(e,.9));o.name="filledinner",t.add(o)}else if(n==="air-outline"){const o=new Ee(new ma(.65,32),fd(e,.9));o.name="dot",o.position.y=-.3,t.add(o)}const s=new Ee(Bf(i),fd(e,0));return s.name="pickmesh",t.add(s),t}function Ds(n){return!n.intangible&&(n.icon==="ground"||n.icon==="ship")}function ka(n,e,t){return new b(e.x,Ds(n)?t(e.x,e.z):e.y,e.z)}function ml(n,e,t,i){const r=ka(n,e,t);return n.intangible||(r.y=Ds(n)?r.y+i:Math.max(r.y,t(r.x,r.z)+i)),r}const zc=8,Kc=1e-9,Js=new b,Pi=new b,wn=new b,Xo=new b,ii=new b,os=new b,pd=new b,Wi=new kt,vr=new Xt,md=new Xt,lo=Array.from({length:8},()=>new kt),fb=Array.from({length:16},()=>new kt),pb=Array.from({length:16},()=>new kt),mb=[0,1,2],Hf=[0,1],gb=[0],Pc=new kt,Lc=new kt;function xa(n,e){switch(e){case 0:return n.w+n.x;case 1:return n.w-n.x;case 2:return n.w+n.y;case 3:return n.w-n.y;case 4:return n.w+n.z;default:return n.w-n.z}}function Jc(n,e,t){if(!Number.isFinite(e.w)||e.w<=0)return;const i=(e.x/e.w+1)*t.width/2,r=(1-e.y/e.w)*t.height/2;!Number.isFinite(i)||!Number.isFinite(r)||(n.left=Math.min(n.left,i),n.right=Math.max(n.right,i),n.top=Math.min(n.top,r),n.bottom=Math.max(n.bottom,r))}function Vf(n,e,t){let i=fb,r=pb,s=n.length;n.forEach((o,a)=>i[a].copy(lo[o]));for(let o=0;o<6&&s;o++){let a=0;for(let c=0;c<s;c++){const l=i[(c+s-1)%s],d=i[c],u=xa(l,o),h=xa(d,o);u>=0!=h>=0&&r[a++].copy(l).lerp(d,u/(u-h)),h>=0&&r[a++].copy(d)}s=a,[i,r]=[r,i]}for(let o=0;o<s;o++)Jc(e,i[o],t)}function Gf(n,e,t){Pc.set(n.x,n.y,n.z,1).applyMatrix4(vr),Lc.set(e.x,e.y,e.z,1).applyMatrix4(vr);let i=0,r=1;for(let o=0;o<6;o++){const a=xa(Pc,o),c=xa(Lc,o);if(!Number.isFinite(a)||!Number.isFinite(c)||a<0&&c<0)return null;if(a>=0!=c>=0){const l=a/(a-c);a<0?i=Math.max(i,l):r=Math.min(r,l)}}if(i>r)return null;const s={left:1/0,right:-1/0,top:1/0,bottom:-1/0};return Wi.copy(Pc).lerp(Lc,i),Jc(s,Wi,t),Wi.copy(Pc).lerp(Lc,r),Jc(s,Wi,t),Number.isFinite(s.right)?s:null}function Qc(n){return Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z)}function io(n,e){const{camera:t,width:i,height:r}=e;pd.copy(n).applyMatrix4(t.matrixWorldInverse);const s=-pd.z;if(!Qc(pd)||s<t.near||s>t.far||(os.copy(n).project(t),!Qc(os)||os.z<-1-Kc||os.z>1+Kc))return null;const o=(os.x+1)*i/2,a=(1-os.y)*r/2;return Number.isFinite(o)&&Number.isFinite(a)?{x:o,y:a,z:os.z}:null}function om(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function $u(n){if(!n)return!1;const e=t=>t.visible&&t.opacity>0;return Array.isArray(n)?n.some(e):e(n)}function _b(n,e,t){const i=n.geometry,r=i.getAttribute("position"),s=i.index;if(!r)return;const o=s?.count??r.count,a=n.isMesh,c=n.isPoints,l=a?mb:c?gb:Hf,d=a?3:c||!n.isLineSegments?1:2,u=Array.isArray(n.material)?i.groups:[{start:0,count:o,materialIndex:0}];for(const h of u){const f=Array.isArray(n.material)?n.material[h.materialIndex??0]:n.material;if(!$u(f))continue;const m=Math.max(h.start,i.drawRange.start),_=Math.min(o,h.start+h.count,i.drawRange.start+i.drawRange.count);for(let g=m;g+l.length<=_;g+=d){let p=!0;for(let E=0;E<l.length;E++){ii.fromBufferAttribute(r,s?s.getX(g+E):g+E).applyMatrix4(n.matrixWorld);const y=lo[E].set(ii.x,ii.y,ii.z,1).applyMatrix4(vr);if(!Number.isFinite(y.x)||!Number.isFinite(y.y)||!Number.isFinite(y.z)||!Number.isFinite(y.w)){p=!1;break}}p&&Vf(l,e,t)}}if(n.isLineLoop&&o>1&&!Array.isArray(n.material)&&i.drawRange.start===0&&i.drawRange.count>=o){let h=!0;for(const[f,m]of[[0,o-1],[1,0]]){ii.fromBufferAttribute(r,s?s.getX(m):m).applyMatrix4(n.matrixWorld);const _=lo[f].set(ii.x,ii.y,ii.z,1).applyMatrix4(vr);(!Number.isFinite(_.x)||!Number.isFinite(_.y)||!Number.isFinite(_.z)||!Number.isFinite(_.w))&&(h=!1)}h&&Vf(Hf,e,t)}}function vb(n){if(!om(n.icon))return null;const e={left:1/0,right:-1/0,top:1/0,bottom:-1/0};return n.icon.traverseVisible(t=>{const i=t;if(!i.geometry||!$u(i.material))return;const r=i.geometry;r.boundingBox||r.computeBoundingBox();const s=r.boundingBox;if(!s||s.isEmpty())return;for(let a=0;a<8;a++){if(ii.set(a&1?s.max.x:s.min.x,a&2?s.max.y:s.min.y,a&4?s.max.z:s.min.z).applyMatrix4(t.matrixWorld),!Qc(ii))return;const c=lo[a].set(ii.x,ii.y,ii.z,1).applyMatrix4(vr);if(!Number.isFinite(c.x)||!Number.isFinite(c.y)||!Number.isFinite(c.z)||!Number.isFinite(c.w))return}let o=!0;for(let a=0;a<6;a++){let c=0;for(const l of lo)xa(l,a)>=0&&c++;if(!c)return;c<8&&(o=!1)}if(o)for(const a of lo)Jc(e,a,n);else _b(i,e,n)}),Number.isFinite(e.right)?e:null}function xb(n){const e=typeof getComputedStyle=="function"?getComputedStyle(n):n.style,t=d=>{const u=Number.parseFloat(d??"");return Number.isFinite(u)?u:0},i=t(e.fontSize)||t(n.style.fontSize),r=i>0?i:14,s=e.lineHeight||n.style.lineHeight,o=t(s),a=o>0?/^[\d.]+$/.test(s)?o*r:o:r*1.15,c=Number.isFinite(a)&&a>0?a:14*1.15;let l=Number(n.offsetHeight);if(!Number.isFinite(l)||l<=0){const d=typeof n.getBoundingClientRect=="function"?n.getBoundingClientRect():null;l=d?Number(d.height??d.bottom-d.top):0}return(!Number.isFinite(l)||l<=0)&&(l=Math.max(1,(n.textContent??"").split(`
`).length)*c+t(e.paddingTop)+t(e.paddingBottom)),{height:Number.isFinite(l)&&l>0?l:c,lineHeight:c}}function gd(n,e){const t=n.geometry.getAttribute("position");if(!t||t.count<2||!Qc(e))return!1;const i=t.array instanceof Float32Array?Math.fround:a=>a,r=i(e.x),s=i(e.y),o=i(e.z);return!Number.isFinite(r)||!Number.isFinite(s)||!Number.isFinite(o)?!1:(t.getX(1)===r&&t.getY(1)===s&&t.getZ(1)===o||(t.setXYZ(1,r,s,o),t.needsUpdate=!0,n.geometry.boundingBox&&n.geometry.computeBoundingBox(),n.geometry.computeBoundingSphere()),!0)}function yb(n,e,t){Wi.set(Pi.x,Pi.y,Pi.z,1).applyMatrix4(vr);const i=Wi.w,r=vr.elements,s=1-t*2/n.height,o=r[5]-s*r[7];if(!Number.isFinite(o)||Math.abs(o)<Kc)return!1;const a=(s*Wi.w-Wi.y)/o,c=e.y-t,l=2*i/(n.camera.projectionMatrix.elements[5]*n.height),d=Math.max(Pi.distanceTo(Js),l*Math.max(1,c))*4;if(!Number.isFinite(a)||a<=0||a>d||(wn.copy(Pi),wn.y+=a,Wi.set(wn.x,wn.y,wn.z,1).applyMatrix4(vr),Wi.w<i/2||Wi.w>i*2))return!1;const u=io(wn,n),h=Math.max(zc,Math.min(n.width/4,c));return!!u&&Math.abs(u.y-t)<.01&&Math.abs(u.x-e.x)<=h}function Sb(n,e,t){wn.set(e.x*2/n.width-1,1-t*2/n.height,e.z).unproject(n.camera);const i=io(wn,n);return!!i&&Math.abs(i.y-t)<.01}function Mb(n){const{camera:e,width:t,height:i,group:r,icon:s,pole:o,dom:a,isAir:c,isMerged:l,visible:d}=n,u=Number.isFinite(n.naturalTop)?n.naturalTop:.6,h=o.geometry.getAttribute("position");h&&h.count>0?Js.fromBufferAttribute(h,0).applyMatrix4(o.matrixWorld):Js.set(0,.2,0).applyMatrix4(r.matrixWorld),Pi.set(0,u,0).applyMatrix4(r.matrixWorld),wn.copy(Pi),a.style.transform="translate(0, 0)";const f=Number.isFinite(t)&&t>0&&Number.isFinite(i)&&i>0;vr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse);const m=f?io(Js,n):null,_=f?io(Pi,n):null,g=xb(a),p=om(o)&&$u(o.material)&&!!h&&h.count>=2,E=f?vb(n):null,y=f&&p?Gf(Js,Pi,n):null,x=d&&!a.hidden&&!!(E||y);if(x&&l&&p&&h&&h.count>=2&&m&&_&&Math.abs(m.y-_.y)<g.height){const ce=m.y-g.height-.1;!yb(n,_,ce)&&!Sb(n,_,ce)&&wn.copy(Pi)}const R=o.matrixWorld.determinant();Number.isFinite(R)&&Math.abs(R)>Kc?(md.copy(o.matrixWorld).invert(),Xo.copy(wn).applyMatrix4(md),gd(o,Xo)||(wn.copy(Pi),Xo.copy(Pi).applyMatrix4(md),gd(o,Xo))):gd(o,Xo.set(0,u,0));const C=o.userData.labelDisplayTop;if(C?(C.x=wn.x,C.y=wn.y,C.z=wn.z):o.userData.labelDisplayTop={x:wn.x,y:wn.y,z:wn.z},!f)return a.style.left="0px",a.style.top="0px",!1;const P=io(wn,n)??_;ii.setFromMatrixPosition(s.matrixWorld);const N=io(ii,n),M=N?.x??P?.x??m?.x??t/2,S=p?Gf(Js,wn,n):null;let I=E?.right??S?.right??M;S&&(I=Math.max(I,S.right)),Number.isFinite(I)||(I=M);let F=P?.y??N?.y??m?.y??i/2;l&&p&&m&&P?F=Math.min(m.y,P.y):c&&!l&&(F=(N?.y??F)-g.lineHeight/2);const B=E??S;x&&B&&(!Number.isFinite(F)||F<0||F>i-g.height)&&(F=B.top);const G=Number(a.offsetWidth),J=Number.isFinite(G)&&G>0?G:0,q=x?Math.max(0,Math.min(t-J-zc,I+zc)):I+zc;return x&&(F=Math.max(0,Math.min(i-g.height,F))),a.style.left=`${q}px`,a.style.top=`${F}px`,x}function ju(n="mouse",e=!1){return n==="touch"||n==="pen"||e?32:14}function bb(n,e,t,i,r){if(![n.x,n.y,n.z,e.left,e.top,e.width,e.height,t,i,r].every(Number.isFinite)||e.width<=0||e.height<=0||r<0||n.z<-1||n.z>1)return null;const s=e.left+(n.x+1)*e.width/2,o=e.top+(1-n.y)*e.height/2;return s<e.left-r||s>e.left+e.width+r||o<e.top-r||o>e.top+e.height+r?null:Math.hypot(s-t,o-i)}function wb(n,e,t,i=0){return[n.left,n.right,n.top,n.bottom,e,t,i].every(Number.isFinite)&&n.right>n.left&&n.bottom>n.top&&i>=0&&e>=n.left-i&&e<=n.right+i&&t>=n.top-i&&t<=n.bottom+i}const Wf=new Set(["markers","drawing","links","range","layers"]),Xf=new Set(["units","equipment","groups","routes","links"]),_d=[{id:"units",label:"单位",title:"单位与空间编辑"},{id:"equipment",label:"装备",title:"机体与武器挂载"},{id:"groups",label:"编组",title:"编组与批量调度"},{id:"routes",label:"航路",title:"航路、绑定与航迹"},{id:"markers",label:"标记",title:"自定义地图点位"},{id:"drawing",label:"作图",title:"标尺、圆规与范围规划"},{id:"links",label:"连线",title:"单位与标记连线"},{id:"terrain",label:"地形",title:"画布、地形与城区"},{id:"range",label:"距离",title:"距离判定与三维范围"},{id:"turns",label:"回合",title:"回合草稿与战斗结果"},{id:"layers",label:"图层",title:"地图显示与航迹图层"},{id:"project",label:"存档",title:"工程保存、导入与恢复"}];function Eb(n){const e=document.querySelector("#app"),t=document.querySelector("#edit-panel");if(!e||!t)throw new Error("Editor sidebar requires the existing workspace shell");if(t.dataset.sidebarMounted)throw new Error("Editor sidebar is already mounted");const i=(te,qe="")=>{const Pe=document.createElement(te);return Pe.textContent=qe,Pe},r=(te,qe,Pe)=>{const vt=i("button",te);return vt.type="button",Pe&&(vt.id=Pe),vt.addEventListener("click",qe),vt},s=te=>{const qe=document.querySelector(te);if(!qe)throw new Error(`Missing sidebar source control: ${te}`);return qe},o=s("#unit-editor"),a=s("#terrain-editor"),c=s("#route-section"),l=s("#archive-panel"),d=s("#workflow-panel"),u=s("#tab-units").parentElement,h=s(".selection-panel"),f=s(".event-panel"),m=s(".range-panel"),_=s(".trail-panel"),g=document.createComment("archive-manager-portal");l.before(g);const p=i("div"),y=s("#edit-add").closest(".edit-actions").previousElementSibling;for(;o.firstChild&&o.firstChild!==y;)p.append(o.firstChild);c.remove(),o.querySelectorAll(":scope > .rule").forEach(te=>te.remove());const x=Array.from(o.children),R=s("#edit-label").closest("label"),C=s("#tool-move").closest(".edit-actions"),P=x.indexOf(R),N=x.indexOf(C),M=(te,qe,Pe)=>{const vt=i("details");return vt.className="sidebar-submenu",vt.open=Pe,vt.append(i("summary",te)),vt.append(...qe),vt};o.replaceChildren(M("单位与选择",x.slice(0,P),!0),M("属性与战损",x.slice(P,N),!1),M("位置、姿态与吸附",x.slice(N),!0)),a.querySelector(":scope > .eyebrow")?.remove();const S=Array.from(a.children),I=S.indexOf(s("#terrain-brush").closest("label")),F=S.indexOf(s("#terrain-preset").closest("label")),B=s("#terrain-undo").closest(".edit-actions"),G=S.indexOf(B);a.replaceChildren(M("画布尺寸与采样",S.slice(0,I),!1),M("笔刷、城区与等高线",S.slice(I,F),!0),M("地形生成与重置",S.slice(F,G),!1),...S.slice(G)),t.replaceChildren(),t.classList.add("editor-sidebar"),t.dataset.sidebarMounted="true",t.hidden=!1,e.classList.add("editor-sidebar-mounted"),t.setAttribute("aria-label","场景编辑器");const J=i("header");J.className="sidebar-header";const q=i("div");q.className="sidebar-title-row";const ce=i("strong","场景编辑器"),X=i("span","浏览");X.id="editor-sidebar-state",X.className="sidebar-state",X.setAttribute("role","status"),q.append(ce,X);const oe=i("div");oe.className="sidebar-toolbar";const Se=r("进入编辑",()=>{ve.editable&&n.toggleEdit()},"sidebar-toggle-edit"),Ve=r("全图",()=>n.fitMap(),"sidebar-fit-map");Ve.title="适配整个地图及当前单位";const tt=r("俯视",()=>n.topView(),"sidebar-top-view");tt.title="切换地图俯视视角";let mt=!1;const xt=r("收起",()=>fe(!mt),"sidebar-collapse");oe.append(Se,Ve,tt,xt);const ee=i("div");ee.className="sidebar-quick-actions";const we=r("保存修订",()=>{if(ve.playerView)return;const te=ye();te&&!te.disabled&&te.click()},"sidebar-quick-save"),ie=r("提交回合",()=>{if(ve.playerView)return;re("turns");const te=document.querySelector("#workflow-commit");te&&!te.disabled&&te.click()},"sidebar-quick-commit"),Ye=r("另存为…",()=>{ve.playerView||(re("turns"),document.querySelector("#editor-save-as-name")?.focus())},"sidebar-quick-save-as"),ne=r("生成快照",()=>{if(ve.playerView)return;const te=document.querySelector("#workflow-snapshot");te&&!te.disabled&&!te.hidden&&te.click()},"sidebar-quick-snapshot");ee.append(we,Ye,ie,ne);const he=i("div");he.className="sidebar-viewer-toolbar";const Q=r("导出查看器",()=>{ve.playerView&&n.viewerExport?.()},"sidebar-viewer-export"),Y=r("撤销",()=>{ve.playerView&&ve.editable&&ve.viewerCanUndo&&n.viewerUndo?.()},"sidebar-viewer-undo"),L=r("重做",()=>{ve.playerView&&ve.editable&&ve.viewerCanRedo&&n.viewerRedo?.()},"sidebar-viewer-redo");he.append(Q,Y,L),J.append(q,oe,ee,he);const pe=i("nav");pe.className="sidebar-nav",pe.setAttribute("role","tablist"),pe.setAttribute("aria-label","编辑工具菜单"),pe.setAttribute("aria-orientation","vertical");const ae=i("div");ae.className="sidebar-content",ae.id="editor-sidebar-content";const Be=new Map,ue=new Map,Fe=new Map,le=new Map;let Te="units",ve={editing:!1,editable:!0,mapOnly:!1},De,w=!1,v=0;const O=te=>ve.playerView?Wf.has(te):!(ve.mapOnly&&Xf.has(te));for(const te of _d){const qe=r(te.label,()=>re(te.id),`sidebar-tab-${te.id}`);qe.title=te.title,qe.setAttribute("role","tab"),qe.setAttribute("aria-controls",`sidebar-panel-${te.id}`),qe.dataset.sidebarTab=te.id,Fe.set(te.id,qe),pe.append(qe);const Pe=i("section");Pe.id=`sidebar-panel-${te.id}`,Pe.className="sidebar-tab-panel",Pe.setAttribute("role","tabpanel"),Pe.setAttribute("aria-labelledby",qe.id);const vt=i("h2",te.title);vt.className="sidebar-panel-heading";const Ct=i("div");Ct.className="sidebar-panel-body",Ct.dataset.sidebarPanel=te.id,Pe.append(vt,Ct),Be.set(te.id,Pe),ue.set(te.id,Ct),ae.append(Pe)}o.hidden=!1,a.hidden=!1,ue.get("units").append(h,o),ue.get("terrain").append(a),ue.get("turns").append(d,p,f),c.open=!0;const K=c.querySelector(":scope > summary"),se=Array.from(c.children).filter(te=>te!==K),W=se.indexOf(c.querySelector("#route-list")),Ie=se.indexOf(c.querySelector("#track-edit").closest(".edit-actions"));c.replaceChildren(K,M("航路设置与选中单位绑定",se.slice(0,W),!0),M("航路点与顺序",se.slice(W,Ie),!0),M("航迹曲线与控制点",se.slice(Ie),!1)),ue.get("routes").append(c);const Me=i("section");Me.className="sidebar-card",Me.append(i("h3","当前航路的绑定对象"));const ke=i("div");ke.id="route-bindings",ke.className="sidebar-bound-list",ke.setAttribute("aria-live","polite"),ke.textContent="当前航路暂无绑定对象";const Ke=i("div");Ke.className="edit-actions";const _e=i("button","选中全部绑定单位");_e.type="button",_e.id="route-select-bound",Ke.append(_e);const Ce=i("label");Ce.className="edit-row",Ce.append(i("span","编组"));const nt=i("select");nt.id="route-group-select",nt.setAttribute("aria-label","绑定至当前航路的编组"),nt.add(new Option("选择编组","")),Ce.append(nt);const $e=i("button","将编组绑定当前航路");$e.type="button",$e.id="route-bind-group";const Ae=i("div");Ae.className="edit-actions",Ae.append($e),Me.append(ke,Ke,Ce,Ae),ue.get("routes").append(Me),ue.get("range").append(m),ue.get("layers").append(_);const Qe=i("section");Qe.className="sidebar-card",Qe.append(i("h3","航路显示"));const U=(te,qe)=>{const Pe=i("label");Pe.className="check-row";const vt=i("input");return vt.id=te,vt.type="checkbox",vt.checked=!0,Pe.append(vt,document.createTextNode(qe)),Pe};Qe.append(U("route-visible","显示所有航路与航路点"),U("route-labels","显示航路点名称与绑定对象")),ue.get("layers").append(Qe),ue.get("project").append(l),u.hidden=!0,u.classList.add("sidebar-legacy-tabs"),t.append(J,pe,ae,u);function ye(){return["#task-editor-save","#map-editor-save","#workflow-save-draft"].map(te=>document.querySelector(te)).find(te=>te&&!te.hidden)}function Re(){if(ve.playerView){ee.hidden=!0;for(const Ct of[we,Ye,ie,ne])Ct.hidden=!0,Ct.disabled=!0;return}const te=ye(),qe=document.querySelector("#workflow-commit");we.hidden=!te,we.disabled=!te||te.disabled,we.textContent=te?.id==="workflow-save-draft"?"保存草稿":te?.id==="map-editor-save"?"保存地图修订":"保存任务修订",ie.hidden=!qe||qe.hidden||qe.disabled,ie.disabled=!qe||qe.disabled;const Pe=["#map-editor-save-as","#task-editor-save-as"].map(Ct=>document.querySelector(Ct)).find(Ct=>Ct&&!Ct.hidden);Ye.hidden=!Pe,Ye.disabled=!Pe||Pe.disabled;const vt=document.querySelector("#workflow-snapshot");ne.hidden=!vt||vt.hidden,ne.disabled=!vt||vt.disabled,ee.hidden=we.hidden&&Ye.hidden&&ie.hidden&&ne.hidden}function Ge(){for(const qe of _d){const Pe=O(qe.id),vt=Pe&&qe.id===Te,Ct=Fe.get(qe.id);Ct.hidden=!!ve.playerView&&!Pe,Ct.disabled=!Pe,Ct.setAttribute("aria-selected",String(vt)),Ct.tabIndex=vt?0:-1,Be.get(qe.id).hidden=!vt}const te=ve.playerView?"玩家查看器":"场景编辑器";ce.textContent=te,t.setAttribute("aria-label",te),pe.setAttribute("aria-label",ve.playerView?"标注工具菜单":"编辑工具菜单"),t.dataset.activeTab=Te,t.dataset.playerView=String(!!ve.playerView),t.dataset.editing=String(ve.editing),t.dataset.editable=String(ve.editable),t.dataset.active=String(ve.active!==!1),X.textContent=ve.playerView?ve.editing?"标注中":"浏览":ve.editable?ve.editing?"编辑中":"浏览":"只读历史",Se.textContent=ve.playerView?ve.editing?"结束标注":"编辑标注":ve.editing?"退出编辑":"进入编辑",Se.disabled=!ve.editable,Qe.hidden=!!ve.playerView,Q.hidden=!ve.playerView,Q.disabled=!ve.playerView||!n.viewerExport,Y.hidden=!ve.playerView||!n.viewerUndo,L.hidden=!ve.playerView||!n.viewerRedo,Y.disabled=!ve.playerView||!ve.editable||!ve.viewerCanUndo||!n.viewerUndo,L.disabled=!ve.playerView||!ve.editable||!ve.viewerCanRedo||!n.viewerRedo,he.hidden=!ve.playerView,Re()}function fe(te){mt=te,t.dataset.collapsed=String(te),xt.textContent=te?"展开":"收起",xt.setAttribute("aria-expanded",String(!te))}function re(te){const Pe={unit:"units",route:"routes",group:"groups",marker:"markers",draw:"drawing",turn:"turns",archive:"project"}[te]??te;!Be.has(Pe)||!O(Pe)||(le.set(Te,ae.scrollTop),Te=Pe,fe(!1),Ge(),ae.scrollTop=le.get(Pe)??0,n.chooseTool(Pe))}pe.addEventListener("keydown",te=>{if(!["ArrowUp","ArrowDown","Home","End"].includes(te.key))return;const qe=_d.filter(Ct=>O(Ct.id)&&!Fe.get(Ct.id).hidden&&!Fe.get(Ct.id).disabled),Pe=qe.findIndex(Ct=>Fe.get(Ct.id)===document.activeElement);if(Pe<0)return;te.preventDefault();const vt=te.key==="Home"?qe[0]:te.key==="End"?qe.at(-1):qe[(Pe+(te.key==="ArrowDown"?1:-1)+qe.length)%qe.length];re(vt.id),Fe.get(vt.id).focus()});const Xe=()=>{!ve.playerView&&e.dataset.workspace==="manager"?l.parentNode!==e&&(g.parentNode===e?e.insertBefore(l,g.nextSibling):e.append(l),l.open=!1):(l.parentNode!==ue.get("project")&&ue.get("project").append(l),l.open=!0)};return new MutationObserver(Xe).observe(e,{attributes:!0,attributeFilter:["data-workspace"]}),new MutationObserver(Re).observe(d,{subtree:!0,attributes:!0,attributeFilter:["hidden","disabled"]}),fe(!1),Ge(),Xe(),{panels:{groups:ue.get("groups"),markers:ue.get("markers"),drawing:ue.get("drawing"),equipment:ue.get("equipment"),links:ue.get("links")},select:re,sync(te){const qe=!!te.playerView&&!ve.playerView,Pe=!te.playerView&&!!ve.playerView,vt=pe.contains(document.activeElement),Ct=Pe?De:void 0;qe&&(De=Te,w=mt,v=ae.scrollTop,le.set(Te,ae.scrollTop)),ve={...te},t.hidden=!1,Pe&&(le.set(Te,ae.scrollTop),Te=De??"units",De=void 0,fe(w)),ve.playerView&&!Wf.has(Te)?(Te="markers",fe(!1)):!ve.playerView&&ve.mapOnly&&Xf.has(Te)&&(Te="terrain"),Ge(),Xe(),(qe||Pe)&&(ae.scrollTop=Pe&&Te===Ct?v:le.get(Te)??0,le.set(Te,ae.scrollTop)),vt&&!O(document.activeElement.dataset.sidebarTab)&&Fe.get(Te).focus()}}}function Tb(n,e){let t="";const i=(R,C="")=>{const P=document.createElement(R);return P.textContent=C,P};n.append(i("h3","编组 / 批量操作"));const r=i("div");r.id="group-list",r.className="unit-picker",n.append(r);const s=i("label","编组名称");s.className="edit-row";const o=i("input");o.id="group-name",o.maxLength=128,s.append(o),n.append(s);const a=i("label","编组颜色");a.className="edit-row";const c=i("input");c.type="color",c.id="group-color",c.value="#62ffa8",a.append(c),n.append(a);const l=i("div");l.className="edit-actions",n.append(l);const d=[],u=(R,C,P,N=l)=>{const M=i("button",C);return M.type="button",M.id=R,M.addEventListener("click",P),N.append(M),d.push(M),M},h=i("div");h.id="group-state",h.className="edit-hint",h.setAttribute("role","status");const f=()=>e.read().groups.find(R=>R.id===t),m=()=>e.units().filter(R=>R.groupId===t).map(R=>R.id),_=(R,C)=>{e.change(R,C)&&x()};u("group-create","新建并分配所选",()=>{if(!e.editable())return;const R=o.value.trim()||`编组 ${e.read().groups.length+1}`,C=c.value,P=new Set(e.selectedIds()),N=`group-${crypto.randomUUID()}`;_("新建编组",(M,S)=>{M.groups.push({id:N,name:R,color:C}),S.filter(I=>P.has(I.id)).forEach(I=>{I.groupId=N}),t=N})}),u("group-save","保存名称 / 颜色",()=>{if(!f()||!o.value.trim())return;const R=o.value.trim(),C=c.value;_("修改编组",P=>{const N=P.groups.find(M=>M.id===t);N.name=R,N.color=C})});const g=i("div");g.className="edit-actions",n.append(g),u("group-assign","所选加入编组",()=>{if(!f())return;const R=new Set(e.selectedIds());_("分配编组",(C,P)=>P.filter(N=>R.has(N.id)).forEach(N=>{N.groupId=t}))},g),u("group-unassign","所选退出编组",()=>{const R=new Set(e.selectedIds());_("移除编组归属",(C,P)=>P.filter(N=>R.has(N.id)).forEach(N=>{delete N.groupId}))},g);const p=i("div");p.className="edit-actions",n.append(p),u("group-select","选中整组",()=>{f()&&e.select(m())},p),u("group-focus","定位整组",()=>{f()&&e.focus(m())},p),u("group-copy","复制整组",()=>{const R=f();R&&e.copy(R)},p);const E=i("div");E.className="edit-actions",n.append(E),u("group-delete","删除编组 / 保留单位",()=>{f()&&_("删除编组",(R,C)=>{R.groups=R.groups.filter(P=>P.id!==t),C.filter(P=>P.groupId===t).forEach(P=>{delete P.groupId}),t=""})},E);const y=i("div");y.id="group-members",y.className="unit-picker",n.append(y,h);function x(){const R=e.read(),C=e.units(),P=e.selectedIds(),N=e.editable();R.groups.some(S=>S.id===t)||(t=R.groups[0]?.id??""),r.replaceChildren(...R.groups.map(S=>{const I=C.filter(B=>B.groupId===S.id).length,F=i("button",`${S.name} (${I})`);return F.style.borderColor=S.color,F.setAttribute("aria-pressed",String(S.id===t)),F.addEventListener("click",()=>{t=S.id,o.value=S.name,c.value=S.color,x()}),F.addEventListener("dblclick",()=>e.select(C.filter(B=>B.groupId===S.id).map(B=>B.id))),F}));const M=f();document.activeElement!==o&&(o.value=M?.name??""),document.activeElement!==c&&(c.value=M?.color??"#62ffa8"),o.disabled=c.disabled=!N;for(const S of d)S.disabled=!N;for(const S of["group-select","group-focus"])n.querySelector(`#${S}`).disabled=!M||!m().length;for(const S of["group-save","group-assign","group-copy","group-delete"])n.querySelector(`#${S}`).disabled=!N||!M;n.querySelector("#group-assign").disabled||=!P.length,n.querySelector("#group-copy").disabled||=!m().length,n.querySelector("#group-unassign").disabled=!N||!C.some(S=>P.includes(S.id)&&S.groupId),y.replaceChildren(...C.filter(S=>S.groupId===t).map(S=>{const I=i("button",S.label);return I.setAttribute("aria-pressed",String(P.includes(S.id))),I.addEventListener("click",()=>e.select([S.id])),I})),h.textContent=`${M?`${M.name} · ${m().length} 个单位`:"暂无编组"} / 当前选择 ${P.length} 个${N?"":" / 只读"}`}return x(),{sync:x}}const qo=new WeakMap,un=n=>JSON.stringify([n.id,n.revision]),vd=n=>({id:n.id,revision:n.revision}),Ab=n=>({L:"轻型",M:"中型",H:"重型"})[n];function qf(n,e,t){const i=n.sessions.find(s=>s.id===e),r=i?.sealedScenes?.find(s=>s.turn===t);return JSON.stringify([n.id,n.players,n.aircraft,n.sp,i?.status,i?.workflow,r?.resourceSnapshot??i?.resourceSnapshot,r?.rulesSnapshot??i?.rulesSnapshot,(r?.units??i?.units??[]).map(s=>({id:s.id,player:s.player,aircraftRef:s.aircraftRef,loadout:s.loadout,spRefs:s.spRefs,playerActions:s.playerActions}))])}function Yf(n,e){const t=new Map;for(const i of[...n,...e])t.has(un(i))||t.set(un(i),i);return[...t.values()].sort((i,r)=>i.id===r.id?r.revision-i.revision:i.id.localeCompare(r.id))}function Rb(n,e){const t={};qo.set(n,t);const i=(Q,Y="",L="")=>{const pe=document.createElement(Q);return pe.textContent=Y,pe.id=L,pe},r=i("section");r.className="player-roster";const s=i("div");s.className="player-roster-header";const o=i("button","新建玩家","player-roster-new");o.type="button",n.getAttribute("data-collapsed")===null&&typeof matchMedia=="function"&&matchMedia("(max-width: 600px) and (pointer: coarse)").matches&&n.setAttribute("data-collapsed","true");const a=n.getAttribute("data-collapsed")==="true",c=i("button",a?"展开":"收起","player-roster-collapse");c.type="button",c.setAttribute("aria-expanded",String(!a)),s.append(i("h3","玩家"),o,c);const l=i("div","","player-roster-form-area");l.hidden=!0;const d=i("div","","player-roster-pending");d.hidden=!0;const u=i("div","","player-roster-list");u.className="player-roster-list";const h=i("p","","player-roster-feedback");h.setAttribute("role","status"),h.hidden=!0,r.append(s,l,d,u,h),n.replaceChildren(r);let f,m,_,g="",p=-1,E="",y=[],x=[],R=[],C=uh,P="",N="",M="",S=0,I=0,F=0,B,G,J,q;const ce=[],X=[],oe=new Map,Se=[],Ve=Q=>{const Y=Q instanceof Error?Q.message:String(Q);h.textContent=Y,h.hidden=!1,e.report(Y)},tt=()=>{if(qo.get(n)!==t||!n.isConnected||!r.isConnected||!f)throw new Error("玩家栏已变化，请使用当前面板。");if(e.readRevision&&f.revision!==void 0){if(e.readRevision()!==f.revision)throw new Error("工程已变化，请等待玩家栏同步。")}else if(e.read&&qf(e.read(),f.sessionId,f.turn)!==E)throw new Error("工程已变化，请等待玩家栏同步。");if(f.mapOnly)throw new Error("地图模式下玩家栏为只读。");return f},mt=Q=>{try{tt(),Q()}catch(Y){Ve(Y)}},xt=()=>{const Q=tt();if(!Q.editable)throw new Error("历史回合或当前场景为只读。");if(Q.pending||e.busy?.())throw new Error("请先完成或取消当前放置。");return Q},ee=(Q,Y,L,pe,ae)=>{const Be=i("label",L);Be.htmlFor=Y;const ue=i("select","",Y);for(const[Fe,le]of pe){const Te=i("option",le);Te.value=Fe,ue.append(Te)}return ue.value=ae,Be.append(ue),Q.append(Be),ce.push(ue),ue},we=(Q,Y,L)=>{const pe=Q.spSlots?.[L];return!!pe&&!!Y.weapon&&Y.weapon.kind!=="normal"&&(!C.config.enforceWeight||!!Y.weapon.weight&&Zm(pe,Y.weapon.weight))&&(Y.weapon.kind==="universal"||!!Q.allowedWeapons?.includes(Y.name))},ie=()=>{const Q=!!f?.editable&&!f.mapOnly&&!f.pending;o.disabled=!Q;for(const Y of ce)Y.disabled=!Q;J&&(J.disabled=!Q||!B?.playerId),q&&(q.disabled=!Q||!B?.playerId||!B?.aircraftKey);for(const Y of Se)Y.node.disabled=!Q||!Y.available;for(const[Y,L]of oe)L.setAttribute("aria-selected",String(Y===f?.selectedUnitId)),L.setAttribute("data-selected",String(Y===f?.selectedUnitId))},Ye=()=>{l.replaceChildren(),ce.length=0,X.length=0,G=void 0,J=void 0,q=void 0;const Q=++I;if(l.hidden=!B,!B||!f)return;const Y=B,L=()=>{if(B!==Y||Q!==I||!l.isConnected)throw new Error("玩家创建表单已变化。")},pe=i("form","","player-roster-form");pe.className="player-form",pe.append(i("h4","呼号"));const ae=new Set(y.map(De=>De.player?.id).filter(Boolean)),Be=(f.project.players??[]).filter(De=>!ae.has(De.id));Be.some(De=>De.id===Y.playerId)||(Y.playerId=""),G=ee(pe,"player-roster-player","玩家呼号",[["","请选择玩家"],...Be.map(De=>[De.id,De.callsign])],Y.playerId),Be.length||pe.append(i("p","暂无可用呼号")),pe.append(i("h4","装备")),J=ee(pe,"player-roster-aircraft","机体",[["","请选择机体"],...x.map(De=>[un(De),`${De.name} · 修订 ${De.revision}`])],Y.aircraftKey);const ue=i("div","GUN / MSL / FLR","player-roster-inherent");ue.className="player-chips",pe.append(ue);const Fe=i("div","","player-roster-slots");Fe.className="player-slots",pe.append(Fe);const le=x.find(De=>un(De)===Y.aircraftKey);le&&(Y.loadout=Y.loadout.filter(De=>{const w=R.find(v=>un(v)===un(De.weaponRef));return w&&we(le,w,De.slot)}),le.spSlots?.length||Fe.append(i("p","无 SP 槽")),le.spSlots?.forEach((De,w)=>{const v=i("div");v.className="player-slot";const O=R.filter(W=>we(le,W,w)),K=Y.loadout.find(W=>W.slot===w)?.weaponRef,se=ee(v,`player-roster-slot-${w}`,`SP${w+1} · ${Ab(De)} ${De}`,[["","空槽"],...O.map(W=>[un(W),`${W.name} · ${W.weapon?.weight??""} · 修订 ${W.revision}`])],K?un(K):"");X.push({slot:w,node:se,choices:O}),se.addEventListener("change",()=>mt(()=>{if(L(),!se.isConnected)throw new Error("SP 槽位已变化。");if(se.value&&!O.some(Ie=>un(Ie)===se.value))throw new Error("所选 SP 的重量或机体许可不匹配。");Y.loadout=Y.loadout.filter(Ie=>Ie.slot!==w);const W=O.find(Ie=>un(Ie)===se.value);W&&Y.loadout.push({slot:w,weaponRef:vd(W)}),Y.loadout.sort((Ie,Me)=>Ie.slot-Me.slot)})),Fe.append(v)}));const Te=i("div");Te.className="player-actions",q=i("button","完成配置","player-roster-create"),q.type="submit";const ve=i("button","取消","player-roster-create-cancel");ve.type="button",Te.append(q,ve),pe.append(Te),l.append(pe),G.addEventListener("change",()=>mt(()=>{L(),Y.playerId=G.value,ie()})),J.addEventListener("change",()=>mt(()=>{if(L(),!Y.playerId)throw new Error("请先选择玩家呼号。");if(J.value&&!x.some(De=>un(De)===J.value))throw new Error("机体修订已变化。");Y.aircraftKey=J.value,Ye()})),ve.addEventListener("click",()=>mt(()=>{L(),B=void 0,Ye()})),pe.addEventListener("submit",De=>{De.preventDefault(),mt(()=>{L();const w=xt();if(Y.projectId!==w.project.id||Y.sessionId!==w.sessionId||Y.turn!==w.turn)throw new Error("创建场景或回合已变化，请取消后重新新建。");if(!(w.project.players??[]).some(W=>W.id===Y.playerId)||y.some(W=>W.player?.id===Y.playerId))throw new Error("请选择尚未加入当前场景的玩家。");const v=x.find(W=>un(W)===Y.aircraftKey);if(!v)throw new Error("请选择有效机体。");const O=X.filter(W=>W.node.value).map(W=>{const Ie=W.choices.find(Me=>un(Me)===W.node.value);if(!Ie)throw new Error("所选 SP 的重量或机体许可不匹配。");return{slot:W.slot,weaponRef:vd(Ie)}}),K=jm(v,R,O,C);if(K.length)throw new Error(K.join("；"));const se={playerId:Y.playerId,aircraftRef:vd(v),loadout:O};B=void 0,++I;try{e.beginCreate(se)}catch(W){throw B=Y,Ye(),W}Ye()})}),ie()},ne=()=>{d.replaceChildren();const Q=++F,Y=f?.pending;if(d.hidden=!Y,!Y||!f)return;const L=i("article");L.className="player-card player-pending-card";const pe=x.find(v=>un(v)===un(Y.aircraftRef));L.append(i("h4",`${Y.player.callsign} · 待落位`),i("p",pe?.name??"已配置机体"));const ae=Y.loadout.map(v=>`SP${v.slot+1} ${R.find(O=>un(O)===un(v.weaponRef))?.name??"已配置 SP"}`).join(" / "),Be=f,Fe=Be.project.sessions.find(v=>v.id===Be.sessionId)?.resourceSnapshot.sp.find(v=>v.name==="FLR")??Be.project.sp.find(v=>v.name==="FLR");L.append(i("p",`FLR 剩余 ${Fe?Fe.weapon?.usageLimit??"—":4} 次`),i("p",ae||"空 SP 挂载"));for(const v of Y.loadout){const O=R.find(K=>un(K)===un(v.weaponRef));L.append(i("p",`SP${v.slot+1} · ${O?.name??"已配置 SP"} · 冷却 0 回合 · ${O?.weapon?.usageLimit===void 0?"已用 0 次":`剩余 ${O.weapon.usageLimit} 次`}`))}const le=i("div");le.className="player-actions";const Te=i("button",Y.armed?"等待地图落位":"生成位置","player-roster-arm");Te.type="button",Te.disabled=Y.armed||!f.editable;const ve=i("button","取消创建","player-roster-placement-cancel");ve.type="button",le.append(Te,ve),L.append(le),d.append(L);const De={projectId:Be.project.id,sessionId:Be.sessionId,turn:Be.turn},w=()=>{const v=tt();if(Q!==F||!L.isConnected||v.project.id!==De.projectId||v.sessionId!==De.sessionId||v.turn!==De.turn||!v.pending||un(v.pending.aircraftRef)!==un(Y.aircraftRef)||v.pending.player.id!==Y.player.id)throw new Error("待落位配置已变化。");return v};Te.addEventListener("click",()=>mt(()=>{const v=w();!v.editable||v.pending?.armed||e.armPlacement()})),ve.addEventListener("click",()=>mt(()=>{w(),e.cancelPlacement()}))},he=()=>{u.replaceChildren(),oe.clear(),Se.length=0;const Q=++S;if(!f)return;const Y={projectId:f.project.id,sessionId:f.sessionId,turn:f.turn},L=y.filter(pe=>pe.player);L.length||u.append(i("p","暂无玩家"));for(const pe of L){const ae=i("article","",`player-roster-unit-${pe.id}`);ae.className="player-card",ae.tabIndex=0,ae.setAttribute("role","group"),ae.setAttribute("aria-label",`玩家 ${pe.player.callsign}`);const Be=i("h4",pe.player.callsign),ue=x.find(w=>pe.aircraftRef&&un(w)===un(pe.aircraftRef));ae.append(Be,i("p",ue?.name??"未绑定机体"));const Fe=$m(f.project,f.sessionId,pe.id,f.turn),le=Fe.find(w=>w.name==="FLR");ae.append(i("p",`FLR 剩余 ${le?.remaining??"—"} 次`));const Te=()=>{const w=tt();if(Q!==S||!ae.isConnected||w.project.id!==Y.projectId||w.sessionId!==Y.sessionId||w.turn!==Y.turn||!y.some(v=>v.id===pe.id))throw new Error("玩家单位或回合已变化。");return w},ve=w=>["BUTTON","SELECT","INPUT"].includes(w.target?.tagName?.toUpperCase()??"");ae.addEventListener("click",w=>mt(()=>{ve(w)||(Te(),e.selectUnit(pe.id,!1))})),ae.addEventListener("dblclick",w=>mt(()=>{ve(w)||(Te(),e.selectUnit(pe.id,!0))})),ae.addEventListener("keydown",w=>{w.target!==ae||!["Enter"," "].includes(w.key)||(w.preventDefault(),mt(()=>{Te(),e.selectUnit(pe.id,w.key==="Enter")}))});const De=i("div");De.className="player-weapon-list",ae.append(De);for(const w of Fe){const v=i("div");v.className="player-weapon-row";const O=w.slot===void 0?w.name:`SP${w.slot+1} · ${w.name}`,K=w.durationRemaining>0?`效果剩余 ${w.durationRemaining} 回合 · 冷却 ${w.profile?.cooldownTurns??0}T`:`冷却 ${w.cooldownRemaining} 回合`;v.append(i("strong",O),i("span",w.jettisoned?"已抛弃":`${K} · ${w.remaining===void 0?`已用 ${w.uses} 次`:`剩余 ${w.remaining} 次`}`));const se=i("div");se.className="player-actions";const W=i("button","使用");W.type="button",W.setAttribute("data-action","use"),W.setAttribute("data-weapon-key",w.key),se.append(W),Se.push({node:W,available:w.canUse&&f.turn>0});let Ie=!1;const Me=(ke,Ke,_e)=>mt(()=>{Te();const Ce=xt();if(!_e.isConnected||!Ke||Ie||Ce.turn<1)throw new Error("上一回合的此项行动当前不可记录。");Ie=!0,_e.disabled=!0;const nt=Se.filter(Ae=>Ae.node.getAttribute("data-weapon-key")===w.key&&ae.contains(Ae.node)),$e=nt.map(Ae=>Ae.available);for(const Ae of nt)Ae.available=!1;try{e.recordAction(pe.id,w.key,ke)}catch(Ae){throw Ie=!1,nt.forEach((Qe,U)=>{Qe.available=$e[U]}),ie(),Ae}});if(W.addEventListener("click",ke=>{ke.stopPropagation(),Me("use",w.canUse,W)}),w.slot!==void 0||w.profile?.kind&&w.profile.kind!=="normal"){const ke=i("button","抛弃");ke.type="button",ke.setAttribute("data-action","drop"),ke.setAttribute("data-weapon-key",w.key),se.append(ke),Se.push({node:ke,available:w.canJettison&&f.turn>0}),ke.addEventListener("click",Ke=>{Ke.stopPropagation(),Me("drop",w.canJettison,ke)})}v.append(se),De.append(v)}u.append(ae),oe.set(pe.id,ae)}};return c.addEventListener("click",()=>mt(()=>{const Q=n.getAttribute("data-collapsed")!=="true";n.setAttribute("data-collapsed",String(Q)),c.textContent=Q?"展开":"收起",c.setAttribute("aria-expanded",String(!Q))})),o.addEventListener("click",()=>mt(()=>{const Q=xt();if(B){e.report("请先完成或取消当前玩家配置。");return}B={playerId:"",aircraftKey:"",loadout:[],projectId:Q.project.id,sessionId:Q.sessionId,turn:Q.turn},Ye()})),{sync(Q){if(qo.get(n)!==t||!r.isConnected)return;if(f={...Q,pending:Q.pending?structuredClone(Q.pending):void 0},(Q.revision===void 0?Q.project!==m:Q.revision!==_||Q.project.id!==m?.id)||Q.sessionId!==g||Q.turn!==p){m=Q.project,_=Q.revision,g=Q.sessionId,p=Q.turn,E=e.readRevision&&Q.revision!==void 0?"":qf(Q.project,Q.sessionId,Q.turn);const pe=Q.project.sessions.find(Fe=>Fe.id===Q.sessionId),ae=pe?.sealedScenes?.find(Fe=>Fe.turn===Q.turn);y=ae?.units??pe?.units??[],x=Yf(ae?.resourceSnapshot.aircraft??pe?.resourceSnapshot.aircraft??[],Q.project.aircraft),R=Yf(ae?.resourceSnapshot.sp??pe?.resourceSnapshot.sp??[],Q.project.sp),C=ae?.rulesSnapshot??pe?.rulesSnapshot??uh;const Be=JSON.stringify([Q.project.id,Q.project.players,x,R,C,y.map(Fe=>Fe.player?.id)]);N!==Be&&(N=Be,B&&Ye());const ue=JSON.stringify([Q.project.id,Q.sessionId,Q.turn,x,R,C,y.filter(Fe=>Fe.player).map(Fe=>({id:Fe.id,player:Fe.player,aircraftRef:Fe.aircraftRef,loadout:Fe.loadout,spRefs:Fe.spRefs,playerActions:Fe.playerActions}))]);if(P!==ue){P=ue;try{he()}catch(Fe){Ve(Fe)}}}const L=JSON.stringify([Q.project.id,Q.sessionId,Q.turn,Q.editable,Q.pending]);M!==L&&(M=L,ne()),ie()},destroy(){qo.get(n)===t&&(qo.delete(n),++S,++I,++F,n.replaceChildren())}}}const Yo=512,$o=[["#ff6935","橙"],["#2d8cff","蓝"],["#ffd84a","黄"],["#20e27e","绿"],["#ff4d5a","红"]],ei=n=>!!n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=1e5),jo=n=>/^#[0-9a-f]{6}$/i.test(n),xd=n=>`${n.kind}:${n.id}`,$f=n=>{const e=n.indexOf(":"),t=n.slice(0,e),i=n.slice(e+1);return e>0&&i&&(t==="unit"||t==="marker")?{kind:t,id:i}:null},Cb=(n,e,t)=>n.some(i=>i.fromUnitId===e&&i.to.kind===t.kind&&i.to.id===t.id||t.kind==="unit"&&i.to.kind==="unit"&&i.fromUnitId===t.id&&i.to.id===e);function Pb(n){let e=!1,t="",i="",r="",s="",o="";const a=new xn,c=new Map;a.name="Editor links",a.userData.editorLinks=!0,a.renderOrder=1e3,n.world.add(a);const l=(ne,he="")=>{const Q=document.createElement(ne);return Q.textContent=he,Q},d=l("div");d.className="scene-tool-panel editor-links-panel",n.panel.append(d);const u=l("style");u.textContent=`
    .editor-links-panel { font-size:12px; min-width:0; }
    .editor-links-panel h3 { margin:0 0 10px; font-size:14px; }
    .editor-links-panel .tool-row { display:grid; grid-template-columns:minmax(60px,1fr) minmax(0,1.6fr); gap:8px; align-items:center; margin:6px 0; }
    .editor-links-panel select,.editor-links-panel input[type=color] { min-width:0; width:100%; box-sizing:border-box; padding:5px; font:inherit; color:#d8e6ee; background:#061727; border:1px solid #416579; }
    .editor-links-panel input[type=color] { min-height:28px; padding:2px; }
    .editor-links-panel .tool-actions { display:flex; flex-wrap:wrap; gap:6px; margin:8px 0; }
    .editor-links-panel button { background:#0b2535; color:#d8e6ee; border:1px solid #67889b; padding:6px 8px; font:inherit; cursor:pointer; }
    .editor-links-panel button:disabled { opacity:.4; cursor:default; }
    .editor-links-panel [aria-pressed=true] { color:#8affb8; border-color:#8affb8; }
    .editor-links-panel p { margin:8px 0; overflow-wrap:anywhere; }
    .editor-links-panel #link-state:empty { display:none; }
  `,d.append(u,l("h3","连线"));const h=[],f=(ne,he,Q)=>{const Y=()=>{e||Q()};ne.addEventListener(he,Y),h.push({element:ne,event:he,run:Y})},m=()=>{const ne=l("div");return ne.className="tool-actions",d.append(ne),ne},_=(ne,he,Q,Y)=>{const L=l("button",Q);return L.id=he,L.type="button",f(L,"click",Y),ne.append(L),L},g=(ne,he,Q)=>{const Y=l("label");Y.className="tool-row",Y.append(l("span",Q));const L=l(ne);return L.id=he,L.setAttribute("aria-label",Q),Y.append(L),d.append(Y),L},p=(ne,he)=>{const Q=l("option",ne);return Q.value=he,Q},E=m(),y=_(E,"link-mode","连线模式",()=>{if(t){Ve();return}if(!X()){ie();return}const ne=oe();if(!ne||!n.readUnits().some(he=>he.id===ne&&ei(he.position))){o="请选择源单位",ie();return}t=ne,o="",P.value="",n.onModeChange(!0),ie()}),x=_(E,"link-cancel","取消",Ve),R=g("select","link-source-unit","源单位");R.title="默认跟随选中单位；手动选择后固定源单位，连线模式中保持不变";const C=l("p");C.id="link-source",d.append(C);const P=g("select","link-target","目标"),N=g("select","link-style","颜色");N.replaceChildren(...$o.map(([ne,he])=>p(he,ne)),p("自定义","custom")),N.value=$o[0][0];const M=g("input","link-color","自定义颜色");M.type="color",M.value=$o[0][0];const S=_(m(),"link-add","添加连线",()=>{const ne=oe(),he=$f(P.value);if(!X()){ie();return}if(!ne||!he){o="请选择源与目标",ie();return}mt(ne,he)}),I=g("select","link-list","连线列表");I.size=5;const F=g("input","link-visible","显示");F.type="checkbox",F.checked=!0;const B=m(),G=_(B,"link-apply","修改颜色 / 显示",()=>{const ne=r,he=M.value,Q=F.checked;if(!X()){ie();return}if(!jo(he)){o="请选择有效颜色",ie();return}tt("修改连线",Y=>{const L=Y.links?.find(pe=>pe.id===ne);if(!L)throw new Error("连线已移除");L.color=he.toLowerCase(),L.visible=Q})}),J=_(B,"link-delete","删除连线",()=>{const ne=r;if(!X()){ie();return}tt("删除连线",he=>{if(!he.links?.some(Q=>Q.id===ne))throw new Error("连线已移除");he.links=he.links.filter(Q=>Q.id!==ne)})}),q=l("p");q.id="link-state",q.setAttribute("role","status"),d.append(q),f(R,"change",()=>{if(!X()||t){ie();return}const ne=R.value;i=ne&&n.readUnits().some(he=>he.id===ne&&ei(he.position))?ne:"",P.value="",o="",ie()}),f(P,"change",()=>{o="",ie()}),f(N,"change",()=>{if(!X()){ie();return}jo(N.value)&&(M.value=N.value)}),f(M,"input",()=>{if(!X()){ie();return}N.value=$o.find(([ne])=>ne===M.value.toLowerCase())?.[0]??"custom"}),f(I,"change",()=>{r=I.value,s="",o="",ie()});const ce=ne=>{!e&&t&&ne.key==="Escape"&&(Ve(),ne.preventDefault())};typeof addEventListener=="function"&&addEventListener("keydown",ce);function X(){return!e&&n.editable()&&!n.busy()}function oe(ne){return i&&!(ne??n.readUnits()).some(he=>he.id===i&&ei(he.position))&&(i="",P.value=""),t||i||n.selectedUnitId()||""}function Se(){t&&(t="",P.value="",n.onModeChange(!1))}function Ve(){e||(Se(),P.value="",o="",ie())}function tt(ne,he){if(!X())return ie(),!1;let Q=!1;try{Q=n.change(ne,Y=>{if(!X())throw new Error("当前状态已变化");he(Y)}),o=Q?"已保存":"未保存"}catch(Y){o=Y instanceof Error?Y.message:String(Y)}return ie(),Q}function mt(ne,he){const Q=M.value,Y=ae=>{const Be=n.readUnits(),ue=Be.find(le=>le.id===ne),Fe=he.kind==="unit"?Be.find(le=>le.id===he.id):ae.markers.find(le=>le.id===he.id);if(!ei(ue?.position)||!ei(Fe?.position))throw new Error("源或目标已移除");if(he.kind==="unit"&&he.id===ne)throw new Error("源与目标相同");if((ae.links?.length??0)>=Yo)throw new Error("连线已达上限 512");if(Cb(ae.links??[],ne,he))throw new Error("连线已存在");if(!jo(Q))throw new Error("请选择有效颜色")};try{Y(n.read())}catch(ae){return o=ae instanceof Error?ae.message:String(ae),ie(),!1}const L=`link-${crypto.randomUUID()}`,pe=tt("添加连线",ae=>{Y(ae),(ae.links??=[]).push({id:L,fromUnitId:ne,to:{...he},color:Q.toLowerCase(),visible:!0})});return pe&&(r=L,s="",ie()),pe}function xt(ne,he){if(e||!t)return!1;if(!X())return ie(),!0;const Q={kind:ne,id:he};return P.value=xd(Q),mt(t,Q),!0}function ee(ne){a.remove(ne.line),ne.line.geometry.dispose(),ne.line.material.dispose()}function we(){if(e)return;const ne=n.read();if(!ne.links?.length&&!t){for(const L of c.values())ee(L);c.clear();return}const he=new Map(n.readUnits().map(L=>[L.id,L])),Q=new Map(ne.markers.map(L=>[L.id,L]));if(t&&(!n.editable()||!ei(he.get(t)?.position))){Se(),o="",ie();return}const Y=new Set;for(const L of(ne.links??[]).slice(0,Yo)){if(Y.has(L.id))continue;Y.add(L.id);let pe=c.get(L.id);if(!pe){const le=new Ut,Te=new Rt(new Float32Array(6),3).setUsage(qc);le.setAttribute("position",Te);const ve=new fi({color:"#ff6935",depthTest:!1,depthWrite:!1}),De=new hn(le,ve);De.name=`Editor link ${L.id}`,De.userData.editorLinkId=L.id,De.userData.editorTools=!0,De.renderOrder=1e3,De.frustumCulled=!1,pe={line:De,position:Te,coordinates:[NaN,NaN,NaN,NaN,NaN,NaN]},c.set(L.id,pe),a.add(De)}const ae=he.get(L.fromUnitId)?.position,Be=(L.to.kind==="unit"?he.get(L.to.id):Q.get(L.to.id))?.position;pe.line.visible=L.visible!==!1&&ei(ae)&&ei(Be);const ue=jo(L.color)?L.color.toLowerCase():"#ff6935";if(`#${pe.line.material.color.getHexString()}`!==ue&&pe.line.material.color.set(ue),!ei(ae)||!ei(Be))continue;let Fe=!1;for(let le=0;le<6;le++){const Te=le<3?ae:Be,ve=le%3,De=(ve===0?Te.x:ve===1?Te.y:Te.z)*rt;pe.coordinates[le]!==De&&(pe.coordinates[le]=De,pe.position.array[le]=De,Fe=!0)}Fe&&(pe.position.needsUpdate=!0)}for(const[L,pe]of c)Y.has(L)||(ee(pe),c.delete(L))}function ie(){if(e)return;const ne=n.read(),he=n.readUnits(),Q=(ne.links??[]).slice(0,Yo);t&&(!n.editable()||!he.some(w=>w.id===t&&ei(w.position)))&&Se();const Y=oe(he),L=he.find(w=>w.id===Y),pe=P.value,ae=[p("跟随选中单位",""),...he.filter(w=>ei(w.position)).map(w=>p(w.label,w.id))];R.replaceChildren(...ae),R.value=ae.some(w=>w.value===Y)?Y:"";const Be=[p("选择目标","")];for(const w of he)w.id!==Y&&ei(w.position)&&Be.push(p(`单位：${w.label}`,xd({kind:"unit",id:w.id})));for(const w of ne.markers)ei(w.position)&&Be.push(p(`标记：${w.label}`,xd({kind:"marker",id:w.id})));P.replaceChildren(...Be),P.value=Be.some(w=>w.value===pe)?pe:"",Q.some(w=>w.id===r)||(r=Q[0]?.id??""),I.replaceChildren(...Q.map(w=>{const v=he.find(K=>K.id===w.fromUnitId)?.label??w.fromUnitId,O=(w.to.kind==="unit"?he:ne.markers).find(K=>K.id===w.to.id)?.label??w.to.id;return p(`${v} → ${O}${w.visible===!1?" · 隐藏":""}`,w.id)})),I.value=r;const ue=Q.find(w=>w.id===r),Fe=ue?`${ue.id}|${ue.color}|${ue.visible!==!1}`:"";Fe!==s&&(s=Fe,ue?(M.value=jo(ue.color)?ue.color.toLowerCase():"#ff6935",N.value=$o.find(([w])=>w===M.value)?.[0]??"custom",F.checked=ue.visible!==!1):F.checked=!0);const le=X(),Te=ei(L?.position);y.disabled=!t&&(!le||!Te||Q.length>=Yo),y.setAttribute("aria-pressed",String(!!t)),x.disabled=!t,R.disabled=!le||!!t,P.disabled=!le,N.disabled=M.disabled=!le,S.disabled=!le||!Te||!P.value||Q.length>=Yo,F.disabled=G.disabled=J.disabled=!le||!ue,C.textContent=`源：${L?.label??"未选择"}${t?" · 连线中":""}`;const ve=$f(P.value),De=ve&&(ve.kind==="unit"?he:ne.markers).find(w=>w.id===ve.id)?.label;q.textContent=o||(De?`目标：${De}`:""),we()}function Ye(){if(!e){Se(),e=!0,typeof removeEventListener=="function"&&removeEventListener("keydown",ce);for(const ne of h)ne.element.removeEventListener(ne.event,ne.run);for(const ne of c.values())ee(ne);c.clear(),n.world.remove(a),d.remove()}}return ie(),{sync:ie,update:we,active:()=>!e&&!!t,pick:xt,cancel:Ve,dispose:Ye}}const Lb=.12,Db=1e5,Ib=1e3,ya=n=>({x:n.x,y:n.y,z:n.z}),am=n=>({pitch:n.pitch,yaw:n.yaw,roll:n.roll});function el(n){if(!n||!["x","y","z"].every(e=>{const t=n[e];return Number.isFinite(t)&&Math.abs(t)<=Db}))throw new RangeError("Marker coordinates must be finite and within +/-100000 km")}function cm(n){if(!Number.isFinite(n)||n<=0||n>Ib)throw new RangeError("Marker size must be positive and at most 1000 km")}function lm(n){if(!n||![n.pitch,n.yaw,n.roll].every(Number.isFinite))throw new RangeError("Marker attitude must contain finite radians")}function Si(n){return["line","arrow","circle","square","sphere"].includes(n.symbol)}function Sa(n){const e=n.attitude??{pitch:0,yaw:0,roll:0};return lm(e),new fn().setFromEuler(new Zn(e.pitch,e.yaw,e.roll,"YXZ"))}function dm(n){const e=new b((n.sizeKm??Lb)/2,0,0).applyQuaternion(Sa(n)),t=n.position;return[{x:t.x-e.x,y:t.y-e.y,z:t.z-e.z},{x:t.x+e.x,y:t.y+e.y,z:t.z+e.z}]}function ls(n){if(n.controlPoints!==void 0){if(n.controlPoints.length!==2)throw new RangeError("Marker control points must contain exactly two points");return[ya(n.controlPoints[0]),ya(n.controlPoints[1])]}return dm(n)}function Bc(n,e){if(!Array.isArray(e)||e.length!==2)throw new RangeError("Marker control points must contain exactly two points");const[t,i]=e;el(t),el(i);const r=i.x-t.x,s=i.y-t.y,o=i.z-t.z,a=Math.hypot(r,s,o);cm(a);const c=Sa(n),l=new b(1,0,0).applyQuaternion(c).normalize(),d=new b(r/a,s/a,o/a);let u;if(n.attitude!==void 0&&l.distanceTo(d)<=16*Number.EPSILON)u=am(n.attitude);else{const h=new fn().setFromUnitVectors(l,d).multiply(c).normalize(),f=new Zn().setFromQuaternion(h,"YXZ");u={pitch:f.x,yaw:f.y,roll:f.z}}return{...n,position:{x:(t.x+i.x)/2,y:(t.y+i.y)/2,z:(t.z+i.z)/2},attitude:u,sizeKm:a,controlPoints:[ya(t),ya(i)]}}function um(n,e,t,i){el(e),lm(t),cm(i);const r={...n,position:ya(e),attitude:am(t),sizeKm:i};return n.controlPoints!==void 0&&(r.controlPoints=dm(r),r.controlPoints.forEach(el)),r}const Gn=n=>({x:n.x,y:n.y,z:n.z}),Wn=n=>new b(n.x,n.y,n.z).multiplyScalar(rt),fs=(n,e)=>Math.hypot(e.x-n.x,e.y-n.y,e.z-n.z),Fr=n=>`${n}-${crypto.randomUUID()}`,mr=n=>Number(n.toFixed(5)).toString(),yd=n=>[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=1e5),Nb=(n,e)=>({horizontal:Math.hypot(e.x-n.x,e.z-n.z),deltaY:e.y-n.y,slant:fs(n,e)}),Zs=(n,e)=>{const t=Nb(n,e);return`水平 ${mr(t.horizontal)} km · 高差 ${t.deltaY>=0?"+":""}${mr(t.deltaY)} km · 斜距 ${mr(t.slant)} km`},jf=(n,e,t,i)=>t==="sphere"?fs(n,e):i==="xz"?Math.hypot(e.x-n.x,e.z-n.z):i==="xy"?Math.hypot(e.x-n.x,e.y-n.y):Math.hypot(e.y-n.y,e.z-n.z);function Ub(n){let e=!1,t="",i="",r="",s=null,o=!1,a,c="",l=n.editable(),d=!1,u=null,h=null;const f=new xn,m=new xn;f.name="Editor markers and drawings",m.name="Editor tool preview",f.userData.editorTools=!0,m.userData.editorTools=!0,n.world.add(f,m);const _=document.createElement("div");_.className="editor-tools-labels",_.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;",n.labelRoot.append(_);const g=[],p=[],E=document.createElement("style");E.textContent=`
    .scene-tool-panel { font-size:12px; min-width:0; }
    .scene-tool-panel h3 { margin:0 0 10px; font-size:14px; }
    .scene-tool-panel p { line-height:1.6; margin:8px 0; overflow-wrap:anywhere; }
    .scene-tool-panel details { border-top:1px solid #365565; padding:7px 0; }
    .scene-tool-panel summary { color:#a8d8f3; margin:0 0 8px; cursor:pointer; }
    .scene-tool-panel .tool-row { display:grid; grid-template-columns:minmax(70px,1fr) minmax(0,1.6fr); gap:8px; align-items:center; margin:6px 0; }
    .scene-tool-panel input:not([type=checkbox]), .scene-tool-panel textarea, .scene-tool-panel select { min-width:0; width:100%; box-sizing:border-box; font:inherit; padding:5px; color:#d8e6ee; background:#061727; border:1px solid #416579; }
    .scene-tool-panel input[type=color] { min-height:28px; padding:2px; }
    .scene-tool-panel textarea { resize:vertical; min-height:60px; }
    .scene-tool-panel .tool-xyz { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:6px; margin:8px 0; }
    .scene-tool-panel .tool-xyz label { min-width:0; display:grid; gap:4px; }
    .scene-tool-panel .tool-actions { display:flex; flex-wrap:wrap; gap:6px; margin:8px 0; }
    .scene-tool-panel button { background:#0b2535; color:#d8e6ee; border:1px solid #67889b; padding:6px 8px; font:inherit; cursor:pointer; }
    .scene-tool-panel button:disabled { opacity:.4; cursor:default; }
    .scene-tool-panel [aria-pressed=true] { color:#8affb8; border-color:#8affb8; }
    .scene-tool-panel .tool-status { color:#9fd4ff; border-left:2px solid #5988a3; padding-left:8px; }
    .scene-tool-panel #drawing-readout { color:#92aab7; font-size:11px; }
    .scene-tool-panel .tool-status:empty { display:none; }
    .editor-tools-labels button[aria-pressed=true] { outline:1px solid #ffffff; }
    .editor-tools-labels button { position:absolute; left:0; top:0; transform:translate(-50%,-100%); padding:3px 6px; font:12px monospace; white-space:nowrap; max-width:600px; overflow:hidden; text-overflow:ellipsis; color:var(--tool-color,#9fd4ff); background:rgba(2,12,22,.8); border:1px solid var(--tool-color,#9fd4ff); border-radius:3px; pointer-events:auto; cursor:pointer; }
  `,n.markersPanel.append(E);const y=(A,D="")=>{const k=document.createElement(A);return k.textContent=D,k},x=(A,D)=>{A.classList.add("scene-tool-panel"),A.append(y("h3",D))};x(n.markersPanel,"自定义标记点"),x(n.drawingsPanel,"标尺与圆规");const R=y("p"),C=y("p");R.id="marker-status",C.id="drawing-status";for(const A of[R,C])A.className="tool-status",A.setAttribute("role","status");const P=(A,D=u?.kind==="marker"?"markers":"drawing")=>{(D==="markers"?R:C).textContent=A},N=A=>(p.push(A),A),M=A=>{const D=y("div");return D.className="tool-actions",A.append(D),D},S=(A,D,k,V,$=!0)=>{const ge=y("button",k);return ge.type="button",ge.id=D,ge.addEventListener("click",()=>{if(!(e||$&&!n.editable()))try{V()}catch(me){P(me instanceof Error?me.message:String(me),D.startsWith("marker-")?"markers":"drawing")}}),A.append(ge),$&&N(ge),ge},I=(A,D,k,V=!0)=>{const $=y("details");return $.id=D,$.open=V,$.append(y("summary",k)),A.append($),$},F=(A,D,k,V,$="text")=>{const ge=y("label");ge.className="tool-row",ge.append(y("span",k));const me=N(y("input"));return me.id=D,me.type=$,me.value=V,$==="number"?me.step="any":$==="text"&&(me.maxLength=128),ge.append(me),A.append(ge),me},B=(A,D,k,V,$=!0)=>{const ge=y("label");ge.className="tool-row",ge.append(y("span",k));const me=y("select");return me.id=D,me.setAttribute("aria-label",k),V.forEach(([ot,Je])=>me.add(new Option(Je,ot))),ge.append(me),A.append(ge),$&&N(me),me},G=A=>{if(!A.value.trim()||!Number.isFinite(A.valueAsNumber))throw new Error("请填写有效数值");return A.valueAsNumber},J=(A,D,k,V)=>{const $=y("div");$.className="tool-xyz",A.append(y("p",k),$);const ge={};for(const me of["x","z","y"]){const ot=me==="y"?"Z":me==="z"?"Y":"X",Je=y("label",`${ot}（km）`),Wt=N(y("input"));Wt.id=`${D}-${me}`,Wt.type="number",Wt.step="any",Wt.value=String(V[me]),Wt.setAttribute("aria-label",`${k} ${ot}（km）`),Je.append(Wt),$.append(Je),ge[me]=Wt}return{row:$,fields:ge,read:()=>{const me={x:G(ge.x),y:G(ge.y),z:G(ge.z)};if(!yd(me))throw new Error("点位坐标须为有限数值，绝对值不超过100000 km");return me},set:me=>{for(const ot of["x","y","z"])ge[ot].value=String(me[ot])}}},q=A=>/^#[0-9a-f]{6}$/i.test(A.value)?A.value.toLowerCase():"#ffd84a",ce=(A,D)=>A.value.trim().slice(0,128)||D,X=A=>{for(const D of[...A.children])A.remove(D),D.traverse(k=>{(k instanceof Ee||k instanceof hn||k instanceof Up)&&(k.geometry.dispose(),(Array.isArray(k.material)?k.material:[k.material]).forEach($=>$.dispose()))})},oe=(A,D,k=1)=>new hn(new Ut().setFromPoints(A),new fi({color:D,transparent:!0,opacity:k,depthWrite:!1})),Se=(A,D,k,V=.045)=>{const $=new Ee(new Wr(V*rt,10,8),new vn({color:k,depthWrite:!1}));return $.position.copy(Wn(D)),A.add($),$},Ve=(A,D)=>{D==="xz"?A.rotation.x=-Math.PI/2:D==="yz"&&(A.rotation.y=Math.PI/2)},tt=(A,D)=>Array.from({length:129},(k,V)=>{const $=V/128*Math.PI*2,ge=Math.cos($)*A,me=Math.sin($)*A;return D==="xy"?new b(ge,me,0):D==="yz"?new b(0,ge,me):new b(ge,0,me)}),mt=(A,D,k=!1)=>{const V=new xn;V.position.copy(Wn(D.position)),V.quaternion.copy(Sa(D)),A.add(V),V.userData.markerSize=D.sizeKm??.12;const $=rt*(D.sizeKm??.12),ge=D.color,me=k?.65:1,ot=me*Math.min(.6,Math.max(.02,D.opacity??.12));if(D.symbol==="cross")V.add(oe([new b(-$,.4,-$),new b($,.4,$)],ge,me)),V.add(oe([new b(-$,.4,$),new b($,.4,-$)],ge,me));else if(D.symbol==="flag"){V.add(oe([new b(0,.2,0),new b(0,$*3,0)],ge,me));const Je=new Ee(new Xr($*1.6,$),new vn({color:ge,transparent:!0,opacity:.5,side:dn,depthWrite:!1}));Je.position.set($*.8,$*2.5,0),V.add(Je)}else if(D.symbol==="pin"){V.add(oe([new b(0,.2,0),new b(0,$*2.5,0)],ge,me));const Je=new Ee(new gs($*.6),new vn({color:ge,transparent:k,opacity:me,depthWrite:!1}));Je.position.y=$*2.5,V.add(Je),V.add(oe(tt($*.7,"xz"),ge,me))}else if(D.symbol==="line"||D.symbol==="arrow")V.add(oe([new b(-$/2,0,0),new b($/2,0,0)],ge,me)),D.symbol==="arrow"&&V.add(oe([new b($*.25,0,-$*.2),new b($/2,0,0),new b($*.25,0,$*.2)],ge,me));else if(D.symbol==="circle"){const Je=new Ee(new ma($/2,64),new vn({color:ge,transparent:!0,opacity:ot,side:dn,depthWrite:!1}));Ve(Je,"xz"),V.add(Je,oe(tt($/2,"xz"),ge,me))}else if(D.symbol==="square"){const Je=$/2,Wt=new Ee(new Xr($,$),new vn({color:ge,transparent:!0,opacity:ot,side:dn,depthWrite:!1}));Ve(Wt,"xz"),V.add(Wt,oe([new b(-Je,0,-Je),new b(Je,0,-Je),new b(Je,0,Je),new b(-Je,0,Je),new b(-Je,0,-Je)],ge,me))}else if(D.symbol==="sphere"){V.add(new Ee(new Wr($/2,32,20),new vn({color:ge,transparent:!0,opacity:ot,side:dn,depthWrite:!1})));for(const Je of["xz","xy","yz"])V.add(oe(tt($/2,Je),ge,me*.7))}else V.add(oe([new b(-$*.6,.4,0),new b($*.6,.4,0)],ge,me));return["circle","square","sphere"].includes(D.symbol)&&V.children.filter(Je=>Je instanceof Ee).forEach(Je=>{Je.visible=D.filled!==!1}),k||V.traverse(Je=>{Je.userData.editorTool={kind:"marker",id:D.id}}),!k&&D.id===t&&Si(D)&&ls(D).forEach((Je,Wt)=>{const Jr=Wn(Je).sub(Wn(D.position)).applyQuaternion(V.quaternion.clone().invert()),qm=Se(V,{x:Jr.x/rt,y:Jr.y/rt,z:Jr.z/rt},ge);qm.userData.editorTool={kind:"marker",id:D.id,pointIndex:Wt}}),V},xt=(A,D,k=!1)=>{const V=new xn;A.add(V),k||(V.userData.editorTool={kind:"drawing",id:D.id});const $=D.color,ge=Math.min(.6,Math.max(.02,D.opacity??.12));if(D.kind==="measure"){if(D.points.length<2)return V;V.add(oe(D.points.map(Wn),$,k?.65:.9)),D.points.forEach((me,ot)=>{const Je=Se(V,me,$);k||(Je.userData.editorTool={kind:"drawing",id:D.id,pointIndex:ot})})}else{const me=D.points[0],ot=(D.radiusKm??0)*rt;if(!me||ot<=0)return V;V.position.copy(Wn(me));const Je=D.plane??"xz";if(D.kind==="circle"){const Wt=new Ee(new ma(ot,96),new vn({color:$,transparent:!0,opacity:k?ge/2:ge,side:dn,depthWrite:!1}));Ve(Wt,Je),Je==="xz"&&(Wt.position.y=.3),Wt.visible=D.filled!==!1,V.add(Wt,oe(tt(ot,Je),$,k?.55:.8)),Se(V,{x:0,y:0,z:0},$)}else{const Wt=new Ee(new Wr(ot,40,24),new vn({color:$,transparent:!0,opacity:k?ge/2:ge,side:dn,depthWrite:!1}));Wt.visible=D.filled!==!1,V.add(Wt);for(const Jr of["xz","xy","yz"])V.add(oe(tt(ot,Jr),$,k?.35:.5));Se(V,{x:0,y:0,z:0},$)}}return V},ee=(A,D,k,V,$,ge,me)=>{const ot=new gn;ot.position.copy(D),A.add(ot);const Je=y("button",k);return Je.type="button",Je.title=$,Je.style.setProperty("--tool-color",V),Je.addEventListener("click",Wt=>{Wt.stopPropagation(),ge()}),Je.addEventListener("dblclick",Wt=>{Wt.stopPropagation(),me()}),_.append(Je),g.push({object:ot,element:Je}),Je},we=B(n.markersPanel,"marker-list","标记列表",[],!1);we.size=5;const ie=M(n.markersPanel);S(ie,"marker-focus","定位",()=>{const A=Bn();A&&n.focus(Gn(A.position))},!1);const Ye=B(n.markersPanel,"marker-endpoint","移动目标",[["whole","整体"],["a","端点 A"],["b","端点 B"]],!1),ne=S(ie,"marker-move","三轴移动",()=>{Bn()&&(ct(t,!0,a),n.onTransformMode?.("translate"))}),he=S(ie,"marker-rotate","旋转",()=>{Bn()&&(ct(t),n.onTransformMode?.("rotate"))}),Q=S(ie,"marker-scale","缩放",()=>{Bn()&&(ct(t),n.onTransformMode?.("scale"))});S(ie,"marker-copy","复制",()=>{const A=Bn();if(!A)throw new Error("请先选择标记");const D={...A,...A.attitude?{attitude:{...A.attitude}}:{},id:Fr("marker"),label:`${A.label.slice(0,122)} 副本`,position:{...A.position,x:A.position.x+.2,z:A.position.z+.2}};D.controlPoints&&(D.controlPoints=D.controlPoints.map(k=>({...k,x:k.x+.2,z:k.z+.2}))),T("复制标记",k=>k.markers.push(D),"markers",()=>{kn("marker",D.id)})}),S(ie,"marker-delete","删除",()=>{const A=t;if(!A)throw new Error("请先选择标记");T("删除标记",D=>{D.markers=D.markers.filter(k=>k.id!==A),D.links&&(D.links=D.links.filter(k=>k.to.kind!=="marker"||k.to.id!==A))},"markers",()=>{kn("marker","")})});const Y=I(n.markersPanel,"marker-properties","标记属性与位置"),L=F(Y,"marker-label","名称","标记"),pe=F(Y,"marker-color","颜色","#ffd84a","color"),ae=B(Y,"marker-symbol","符号",[["pin","定位针"],["cross","十字"],["flag","旗帜"],["text","文字"],["line","线段（长度）"],["arrow","箭头（长度）"],["circle","圆（直径）"],["square","正方形（边长）"],["sphere","球（直径）"]]),Be=F(Y,"marker-size","尺寸（km）",".12","number");Be.min=".00001",Be.max="1000";const ue=F(Y,"marker-filled","填充","","checkbox");ue.checked=!0;const Fe=F(Y,"marker-opacity","填充透明度",".12","number");Fe.min=".02",Fe.max=".6",Fe.step=".01";const le=F(Y,"marker-visible","显示标记","","checkbox");le.checked=!0;const Te={pitch:F(Y,"marker-pitch","俯仰 X°","0","number"),yaw:F(Y,"marker-yaw","方向 Z°","0","number"),roll:F(Y,"marker-roll","翻滚 Y°","0","number")},ve=J(Y,"marker-position","位置",{x:0,y:0,z:0}),De=F(Y,"marker-height","高度（m）","0","number"),w=()=>{De.value=ve.fields.y.value.trim()?String(ve.fields.y.valueAsNumber*1e3):""},v=J(Y,"marker-a","端点 A",{x:-.06,y:0,z:0}),O=J(Y,"marker-b","端点 B",{x:.06,y:0,z:0}),K=F(Y,"marker-a-height","端点 A 高度（m）","0","number"),se=F(Y,"marker-b-height","端点 B 高度（m）","0","number"),W=y("label");W.className="tool-row",W.append(y("span","说明"));const Ie=N(y("textarea"));Ie.id="marker-description",Ie.maxLength=4096,W.append(Ie),Y.append(W);const Me=M(Y),ke=S(Me,"marker-apply","应用所选标记",()=>{const A=t;if(!A)throw new Error("请先选择标记");const D=Zr(A);T("修改标记",k=>{const V=k.markers.findIndex($=>$.id===A);if(V<0)throw new Error("标记已被移除");k.markers[V]=D},"markers")});S(Me,"marker-ground","坐标贴地",()=>{const A=ve.read();A.y=n.sampleHeightKm(A.x,A.z),ve.set(A),w(),P("地形高度已填入","markers")});const Ke=I(n.markersPanel,"marker-create","新增标记"),_e=M(Ke);S(_e,"marker-pick","点地图放置",()=>{const A=Zr(Fr("marker"),{x:0,y:0,z:0});dt({kind:"marker",marker:A}),n.onOpenPanel?.("markers"),P("标记放置中","markers")}),S(_e,"marker-pick-two","两点确认方向与尺寸",()=>{const A=Zr(Fr("marker"),{x:0,y:0,z:0});if(!Si(A))throw new Error("请选择线段、箭头、圆、正方形或球");dt({kind:"marker",marker:A,twoPoint:!0}),n.onOpenPanel?.("markers"),P("端点 A 选择中","markers")}),S(_e,"marker-add-position","按坐标新增",()=>{const A=Zr(Fr("marker"));T("新增标记",D=>D.markers.push(A),"markers",()=>{kn("marker",A.id)})}),S(_e,"marker-new","清空选择／新标记",()=>{kn("marker",""),j(),Ze(),Bt(),We(),Tr()},!1),S(_e,"marker-cancel","取消放置",bt,!1),n.markersPanel.append(R);const Ce=B(n.drawingsPanel,"drawing-list","标尺／图形列表",[],!1);Ce.size=5;const nt=M(n.drawingsPanel);S(nt,"drawing-focus","定位",()=>{const A=ai();A&&Pt(A)},!1);const $e=B(n.drawingsPanel,"drawing-endpoint","移动目标",[["whole","整体"],["a","端点 A"],["b","端点 B"]],!1),Ae=S(nt,"drawing-move","三轴移动",()=>{ai()?.points[0]&&pt(i,!0,a)});S(nt,"drawing-copy","复制",()=>{const A=ai();if(!A)throw new Error("请先选择标尺或图形");const D={...A,id:Fr("drawing"),label:`${A.label.slice(0,122)} 副本`,points:A.points.map(k=>({...k,x:k.x+.2,z:k.z+.2}))};T("复制制图标尺",k=>k.drawings.push(D),"drawing",()=>{kn("drawing",D.id)})}),S(nt,"drawing-delete","删除",()=>{const A=i;if(!A)throw new Error("请先选择标尺或图形");T("删除制图标尺",D=>{D.drawings=D.drawings.filter(k=>k.id!==A)},"drawing",()=>{kn("drawing","")})});const Qe=I(n.drawingsPanel,"drawing-properties","标尺属性与坐标"),U=F(Qe,"drawing-label","名称","测距"),ye=B(Qe,"drawing-kind","类型",[["measure","自由测距"],["circle","平面圆规"],["sphere","立体半透明球"]]),Re=F(Qe,"drawing-color","颜色","#2d8cff","color"),Ge=F(Qe,"drawing-visible","显示图形","","checkbox");Ge.checked=!0;const fe=F(Qe,"drawing-filled","填充","","checkbox");fe.checked=!0;const re=F(Qe,"drawing-opacity","填充透明度",".12","number");re.min=".02",re.max=".6",re.step=".01";const Xe=B(Qe,"drawing-plane","圆规平面",[["xz","XY 水平"],["xy","XZ 垂直"],["yz","YZ 垂直"]]),te=J(Qe,"drawing-a","起点／中心",{x:0,y:0,z:0}),qe=F(Qe,"drawing-height","高度（m）","0","number"),Pe=J(Qe,"drawing-b","测距终点",{x:1,y:0,z:0}),vt=F(Qe,"drawing-b-height","终点高度（m）","0","number"),Ct=()=>{qe.value=te.fields.y.value.trim()?String(te.fields.y.valueAsNumber*1e3):"",vt.value=Pe.fields.y.value.trim()?String(Pe.fields.y.valueAsNumber*1e3):""},_i=F(Qe,"drawing-radius","半径（km）","2","number");_i.min=".00001",_i.max="1000";const Ri=y("p");Ri.id="drawing-readout",Qe.append(Ri);const Us=M(Qe),No=S(Us,"drawing-apply","应用所选图形",()=>{const A=i;if(!A)throw new Error("请先选择标尺或图形");const D=Kr(A);T("修改制图标尺",k=>{const V=k.drawings.findIndex($=>$.id===A);if(V<0)throw new Error("图形已被移除");k.drawings[V]=D},"drawing")});S(Us,"drawing-ground","起点／中心贴地",()=>{const A=te.read();A.y=n.sampleHeightKm(A.x,A.z),te.set(A),Ne(),P("地形高度已填入","drawing")});const Uo=I(n.drawingsPanel,"drawing-create","测距与制图"),Er=M(Uo);S(Er,"drawing-pick-measure","点选两点测距",()=>Zt("measure")),S(Er,"drawing-pick-circle","圆规：中心＋半径点",()=>Zt("circle")),S(Er,"drawing-pick-sphere","球体：中心＋半径点",()=>Zt("sphere"));const jr=M(Uo);S(jr,"drawing-add-position","按坐标／半径新增",()=>{const A=Kr(Fr("drawing"));T("新增制图标尺",D=>D.drawings.push(A),"drawing",()=>{kn("drawing",A.id)})}),S(jr,"drawing-pick-center","点地图定中心＋输入半径",()=>{const A=ye.value;if(A==="measure")throw new Error("请选择平面圆规或球体，再使用输入半径方式");const D=Kr(Fr("drawing"),!0),k=G(_i);if(k<=0||k>1e3)throw new Error("半径须大于0且不超过1000 km");D.radiusKm=k,dt({kind:A,drawing:D}),vi=!0,P("中心点放置中","drawing")}),S(jr,"drawing-new","清空选择／新图形",()=>{kn("drawing",""),Z(),Ze(),We(),Tr()},!1),S(jr,"drawing-cancel","取消作图",bt,!1),n.drawingsPanel.append(C);let vi=!1;function Bn(){return n.read().markers.find(A=>A.id===t)}function ai(){return n.read().drawings.find(A=>A.id===i)}function Ya(){if(e||!s)return null;const A=n.read(),D=s==="marker"?t:i,k=s==="drawing"?A.drawings.find(me=>me.id===D):void 0,V=s==="marker"?A.markers.find(me=>me.id===D):void 0,$=k?.kind==="measure"||V&&Si(V)?a:void 0,ge=V?$===void 0?V.position:ls(V)[$]:k?.points[$??0];return D&&ge?{kind:s,id:D,position:Gn(ge),...$===void 0?{}:{pointIndex:$}}:null}function Tr(A=!1){if(e||d)return;const D=Ya(),k=D?JSON.stringify([D.kind,D.id,D.pointIndex]):"",V=n.editable(),$=k!==c||!!D&&V!==l;if(c=k,l=V,!(!$&&!A)){d=!0;try{n.onSelectionChange?.(D)}finally{d=!1}}}function kn(A,D,k){A==="marker"?t=D:i=D,a=k,D?s=A:s===A&&(s=null)}function El(){e||(t="",i="",a=void 0,s=null,j(),Z(),Ze(),Bt(),We(),Tr())}function Zr(A,D){const k=G(Be);if(k<=0||k>1e3)throw new Error("尺寸须大于0且不超过1000 km");const V={id:A,label:ce(L,"标记"),position:D??ve.read(),color:q(pe),symbol:ae.value,sizeKm:k,visible:le.checked};if(["circle","square","sphere"].includes(V.symbol)){const me=G(Fe);if(me<.02||me>.6)throw new Error("透明度范围为0.02–0.6");const ot=n.read().markers.find(Je=>Je.id===A);(!ot||ot.filled!==void 0||!ue.checked)&&(V.filled=ue.checked),(!ot||ot.opacity!==void 0||me!==.12)&&(V.opacity=me)}const $=Ie.value.trim().slice(0,4096);$&&(V.description=$);const ge=n.read().markers.find(me=>me.id===A);if(Si(V)){ge?.controlPoints&&(V.controlPoints=ge.controlPoints.map(Gn));const me={pitch:0,yaw:0,roll:0};for(const ot of["pitch","yaw","roll"]){const Je=ge?.attitude?.[ot]??0;me[ot]=Te[ot].value===String(qt.radToDeg(Je))?Je:qt.degToRad(G(Te[ot]))}if((ge?.attitude||Object.values(me).some(ot=>ot!==0))&&(V.attitude=me),o&&!D)return Bc(V,[v.read(),O.read()]);if(V.controlPoints&&ge&&(fs(ge.position,V.position)>0||V.sizeKm!==ge.sizeKm||JSON.stringify(V.attitude)!==JSON.stringify(ge.attitude)))return um(V,V.position,me,k)}return V}function Kr(A,D=!1){const k=ye.value,V=D?{x:0,y:0,z:0}:te.read(),$={id:A,label:ce(U,k==="measure"?"测距":k==="circle"?"圆规":"范围球"),kind:k,points:k==="measure"?[V,D?Gn(V):Pe.read()]:[V],color:q(Re),visible:Ge.checked};if(k!=="measure"){const ge=D?1:G(_i),me=G(re);if(ge<=0||ge>1e3)throw new Error("半径须大于0且不超过1000 km");if(me<.02||me>.6)throw new Error("透明度范围为0.02–0.6");$.radiusKm=ge,$.opacity=me,$.plane=Xe.value;const ot=n.read().drawings.find(Je=>Je.id===A);(!ot||ot.filled!==void 0||!fe.checked)&&($.filled=fe.checked)}return $}function T(A,D,k,V){if(!n.editable())return P("只读",k),!1;try{const $=n.change(A,D);return $?(V?.(),V&&(r=""),Ft(),P(`${A}已保存`,k)):P("操作未保存或内容没有变化",k),$}catch($){return P($ instanceof Error?$.message:String($),k),!1}}function z(A,D,k,V){const $=u,ge=h,me=vi;u=null,n.onPickingChange(!1);const ot=T(A,D,k,V);if(ot)h=null,vi=!1,X(m);else if($&&n.editable()&&!e){const Je=(k==="markers"?R:C).textContent;u=$,h=ge,vi=me,n.onPickingChange(!0),Dn(),P(Je||"未保存",k)}return ot}function j(){const A=Bn();L.value=A?.label??"标记",pe.value=A?.color??"#ffd84a",ae.value=A?.symbol??"pin",le.checked=A?.visible!==!1,Ie.value=A?.description??"",Be.value=String(A?.sizeKm??.12),ue.checked=A?.filled!==!1,Fe.value=String(A?.opacity??.12),be(),ve.set(A?.position??{x:0,y:0,z:0}),w(),o=!1;for(const k of["pitch","yaw","roll"])Te[k].value=String(qt.radToDeg(A?.attitude?.[k]??0));const D=ls(A??{position:{x:0,y:0,z:0}});v.set(D[0]),O.set(D[1]),Kt(),s==="marker"&&(!A||!Si(A))&&(a=void 0),Ye.value=s==="marker"&&a===0?"a":s==="marker"&&a===1?"b":"whole",Ye.closest("label").hidden=!A||!Si(A),ke.disabled=!n.editable()||!A,ne.disabled=!n.editable()||!A,he.disabled=Q.disabled=!n.editable()||!A||!Si(A)}function Z(){const A=ai();U.value=A?.label??"测距",ye.value=A?.kind??"measure",Re.value=A?.color??"#2d8cff",fe.checked=A?.filled!==!1,Ge.checked=A?.visible!==!1,re.value=String(A?.opacity??.12),Xe.value=A?.plane??"xz",_i.value=String(A?.radiusKm??2),te.set(A?.points[0]??{x:0,y:0,z:0}),Pe.set(A?.points[1]??{x:1,y:0,z:0}),H(),Ct(),No.disabled=!n.editable()||!A,Ae.disabled=!n.editable()||!A?.points[0],Ne()}function H(){const A=ai();s==="drawing"&&(A?.kind!=="measure"||a!==void 0&&!A.points[a])&&(a=void 0),$e.value=s==="drawing"&&a===0?"a":s==="drawing"&&a===1?"b":"whole",$e.closest("label").hidden=A?.kind!=="measure",$e.disabled=A?.kind!=="measure"}function be(){const A=["line","arrow","circle","square","sphere"].includes(ae.value),D=["circle","square","sphere"].includes(ae.value);ue.closest("label").hidden=!D;for(const k of Object.values(Te))k.closest("label").hidden=!A;for(const k of[v.row,O.row])k.hidden=!A;K.closest("label").hidden=!A,se.closest("label").hidden=!A,Fe.closest("label").hidden=!D,Fe.disabled=!n.editable()||!ue.checked}function Ne(){const A=ye.value;Pe.row.hidden=A!=="measure";const D=Pe.row.previousElementSibling;D&&(D.hidden=A!=="measure"),_i.closest("label").hidden=A==="measure",re.closest("label").hidden=A==="measure",Xe.closest("label").hidden=A!=="circle",fe.closest("label").hidden=A==="measure",vt.closest("label").hidden=A!=="measure",re.disabled=!n.editable()||!fe.checked,Ct();try{Ri.textContent=A==="measure"?Zs(te.read(),Pe.read()):`半径 ${mr(G(_i))} km · 直径 ${mr(G(_i)*2)} km${A==="circle"?` · ${{xz:"XY",xy:"XZ",yz:"YZ"}[Xe.value]}平面`:" · 3D范围"}`}catch{Ri.textContent="—"}}function Ze(){const A=n.read();we.replaceChildren(...A.markers.map(D=>new Option(`${D.visible===!1?"隐藏 · ":""}${D.label}`,D.id))),we.value=t,Ce.replaceChildren(...A.drawings.map(D=>new Option(`${D.visible===!1?"隐藏 · ":""}${D.kind==="measure"?"测距":D.kind==="circle"?"圆规":"球体"} · ${D.label}${D.kind==="measure"&&D.points[1]?` · ${Zs(D.points[0],D.points[1])}`:` · R ${mr(D.radiusKm??0)} km`}`,D.id))),Ce.value=i}function We(){for(const A of g)A.element.setAttribute("aria-pressed",String(A.element.dataset.markerId?A.element.dataset.markerId===t:A.element.dataset.drawingId===i))}function ct(A,D=!0,k){if(n.read().markers.some($=>$.id===A)&&n.onMarkerPick?.(A)){Ze();return}const V=n.read().markers.find($=>$.id===A);kn("marker",V?A:"",V&&Si(V)?k:void 0),j(),Ze(),Bt(),We(),Tr(D&&!!t),n.onOpenPanel?.("markers")}function pt(A,D=!0,k){const V=n.read().drawings.find($=>$.id===A);kn("drawing",V?A:"",V?.kind==="measure"&&k!==void 0&&V.points[k]?k:void 0),Z(),Ze(),We(),Tr(D&&!!i),n.onOpenPanel?.("drawing")}function ft(A){if(e)return!1;let D=A;for(;D&&D!==f;)D=D.parent;if(!D)return!1;for(let k=A;k&&k!==f;k=k.parent){const V=k.userData.editorTool;if(V?.id){if(V.kind==="marker"&&n.read().markers.some($=>$.id===V.id))return ct(V.id,!0,V.pointIndex),!0;if(V.kind==="drawing"&&n.read().drawings.some($=>$.id===V.id))return pt(V.id,!0,V.pointIndex),!0}}return!1}function Pt(A){const D=A.points[0];if(!D)return;const k=A.points[1];A.kind==="measure"&&k?n.focus({x:(D.x+k.x)/2,y:(D.y+k.y)/2,z:(D.z+k.z)/2},Math.max(.2,fs(D,k)/2)):n.focus(Gn(D),A.radiusKm)}function Bt(){for(const A of f.children){if(A.userData.editorTool?.kind!=="marker")continue;for(const k of[...A.children])k.userData.editorTool?.pointIndex!==void 0&&(k.traverse(V=>{V instanceof Ee&&(V.geometry.dispose(),V.material.dispose())}),A.remove(k));const D=n.read().markers.find(k=>k.id===A.userData.editorTool.id);!D||D.id!==t||!Si(D)||ls(D).forEach((k,V)=>{const $=Wn(k).sub(A.position).applyQuaternion(A.quaternion.clone().invert()).divideScalar(A.scale.x),ge=Se(A,{x:$.x/rt,y:$.y/rt,z:$.z/rt},D.color);ge.userData.editorTool={kind:"marker",id:D.id,pointIndex:V}})}}function an(){X(f),g.length=0,_.replaceChildren();const A=n.read();for(const D of A.markers){if(D.visible===!1)continue;const k=mt(f,D);ee(k,new b(0,rt*.4,0),D.label,D.color,D.description||"",()=>ct(D.id),()=>n.focus(Gn(D.position))).dataset.markerId=D.id}for(const D of A.drawings){if(D.visible===!1||!D.points.length)continue;const k=xt(f,D),V=D.points[0],$=D.points[1],ge=D.kind==="measure"&&$?`${D.label} · ${Zs(V,$)}`:`${D.label} · 半径 ${mr(D.radiusKm??0)} km`,me=D.kind==="measure"&&$?Wn({x:(V.x+$.x)/2,y:(V.y+$.y)/2+.1,z:(V.z+$.z)/2}):new b(0,rt*.12,0);ee(k,me,ge,D.color,"",()=>pt(D.id),()=>Pt(D)).dataset.drawingId=D.id}We()}function jt(){if(e)return;if(!n.editable()){Ft();return}const A=n.read();for(const V of f.children){const $=V.userData.editorTool;if($.kind==="marker"){const ge=A.markers.find(Wt=>Wt.id===$.id);if(!ge||ge.visible===!1){Ft();return}V.position.copy(Wn(ge.position)),V.quaternion.copy(Sa(ge));const me=ge.sizeKm??.12,ot=V.userData.markerSize??me;V.scale.setScalar(me/ot);const Je=V.quaternion.clone().invert();for(const Wt of V.children)if(Wt.userData.editorTool?.pointIndex!==void 0){const Jr=ls(ge)[Wt.userData.editorTool.pointIndex];Wt.position.copy(Wn(Jr).sub(V.position).applyQuaternion(Je).divideScalar(V.scale.x))}}else{const ge=A.drawings.find(me=>me.id===$.id);if(!ge||ge.visible===!1||!ge.points[0]){Ft();return}if(ge.kind!=="measure")V.position.copy(Wn(ge.points[0]));else for(const me of V.children)if(me instanceof hn)me.geometry.setFromPoints(ge.points.map(Wn)),me.geometry.computeBoundingSphere();else if(me.userData.editorTool?.pointIndex!==void 0){const ot=ge.points[me.userData.editorTool.pointIndex];ot&&me.position.copy(Wn(ot))}}}for(const V of g){const $=V.element.dataset.drawingId;if(!$)continue;const ge=A.drawings.find(Je=>Je.id===$),me=ge?.points[0],ot=ge?.points[1];ge?.kind!=="measure"||!me||!ot||(V.object.position.copy(Wn({x:(me.x+ot.x)/2,y:(me.y+ot.y)/2+.1,z:(me.z+ot.z)/2})),V.element.textContent=`${ge.label} · ${Zs(me,ot)}`)}const D=Bn(),k=ai();if(D){ve.set(D.position),w(),Be.value=String(D.sizeKm??.12);const V=ls(D);v.set(V[0]),O.set(V[1]),Kt();for(const $ of["pitch","yaw","roll"])Te[$].value=String(qt.radToDeg(D.attitude?.[$]??0))}k&&(te.set(k.points[0]??{x:0,y:0,z:0}),Pe.set(k.points[1]??{x:1,y:0,z:0}),Ne())}function Ft(){if(e)return;u&&!n.editable()&&bt();const A=n.read(),D=JSON.stringify({markers:A.markers,drawings:A.drawings}),k=n.editable();p.forEach(V=>{V.disabled=!k}),t&&!A.markers.some(V=>V.id===t)&&kn("marker",""),i&&!A.drawings.some(V=>V.id===i)&&kn("drawing",""),r!==D&&(r=D,Ze(),j(),Z(),an()),ke.disabled=!k||!Bn(),No.disabled=!k||!ai(),ne.disabled=!k||!Bn(),Ae.disabled=!k||!ai()?.points[0],he.disabled=Q.disabled=!k||!Bn()||!Si(Bn()),be(),Ne(),!k&&!u?(R.textContent="只读",C.textContent="只读"):k&&!u&&(R.textContent==="只读"&&(R.textContent=""),C.textContent==="只读"&&(C.textContent="")),Tr()}function dt(A){bt(),n.editable()&&(u=A,vi=!1,n.onPickingChange(!0))}function Zt(A){ye.value=A,(!i||U.value==="测距"||U.value==="圆规"||U.value==="范围球")&&(U.value=A==="measure"?"测距":A==="circle"?"圆规":"范围球"),Ne();const D=Kr(Fr("drawing"),!0);dt({kind:A,drawing:D}),n.onOpenPanel?.("drawing"),P(A==="measure"?"起点选择中":"中心点选择中","drawing")}function bt(){const A=u;u=null,h=null,vi=!1,X(m),A&&(n.onPickingChange(!1),P("已退出地图点选",A.kind==="marker"?"markers":"drawing"))}function Dn(){X(m);const A=u,D=h;if(!(!A||!D))if(A.kind==="marker")A.twoPoint?A.first?(Se(m,A.first,A.marker.color,.08),Se(m,D,A.marker.color,.08),fs(A.first,D)>0&&fs(A.first,D)<=1e3&&mt(m,Bc(A.marker,[A.first,D]),!0)):Se(m,D,A.marker.color,.08):mt(m,{...A.marker,position:D},!0);else if(!A.first)Se(m,D,A.drawing.color,.08),vi&&xt(m,{...A.drawing,points:[D]},!0);else if(A.kind==="measure")xt(m,{...A.drawing,points:[A.first,D]},!0),P(Zs(A.first,D),"drawing");else{const k=jf(A.first,D,A.kind,A.drawing.plane??"xz");Se(m,A.first,A.drawing.color,.08),m.add(oe([Wn(A.first),Wn(D)],A.drawing.color,.6)),k>0&&k<=1e3&&xt(m,{...A.drawing,points:[A.first],radiusKm:k},!0),P(`半径 ${mr(k)} km${k>1e3?"（超出1000 km）":""}`,"drawing")}}function Ar(A){e||!u||A&&!yd(A)||!A&&!h||A&&h&&fs(A,h)<1e-5||(h=A?Gn(A):null,Dn())}function Jn(A){const D=u;if(e||!D||!n.editable()){n.editable()||bt();return}if(!yd(A)){P("点位坐标超出有效范围");return}try{if(D.kind==="marker"){if(D.twoPoint&&!D.first){D.first=Gn(A),h=Gn(A),Dn(),P("端点 B 选择中","markers");return}const k=D.twoPoint?Bc(D.marker,[D.first,A]):{...D.marker,position:Gn(A)};z("地图放置标记",V=>V.markers.push(k),"markers",()=>{kn("marker",k.id)})&&P("标记已放置并保存","markers")}else if(vi){const k={...D.drawing,points:[Gn(A)]};z("地图放置范围图形",V=>V.drawings.push(k),"drawing",()=>{kn("drawing",k.id)})&&P("图形已放置并保存","drawing")}else if(!D.first)D.first=Gn(A),h=Gn(A),Dn(),P(D.kind==="measure"?"终点选择中":"半径点选择中","drawing");else{const k={...D.drawing,points:D.kind==="measure"?[Gn(D.first),Gn(A)]:[Gn(D.first)]};if(D.kind!=="measure"){const V=jf(D.first,A,D.kind,D.drawing.plane??"xz");if(V<=0||V>1e3)throw new Error("半径须大于0且不超过1000 km，请重新选择半径点");k.radiusKm=V}z("地图作图",V=>V.drawings.push(k),"drawing",()=>{kn("drawing",k.id)})&&P(k.kind==="measure"?`测距已保存：${Zs(k.points[0],k.points[1])}`:`图形已保存：半径 ${mr(k.radiusKm)} km`,"drawing")}}catch(k){P(k instanceof Error?k.message:String(k),D.kind==="marker"?"markers":"drawing")}}const Rr=A=>{A.key==="Escape"&&u&&(bt(),A.preventDefault())};addEventListener("keydown",Rr),we.addEventListener("change",()=>ct(we.value)),Ce.addEventListener("change",()=>pt(Ce.value)),$e.addEventListener("change",()=>{if(e||ai()?.kind!=="measure")return;const A=$e.value==="a"?0:$e.value==="b"?1:void 0;pt(i,!1,A)}),ve.fields.y.addEventListener("input",w),De.addEventListener("input",()=>{ve.fields.y.value=De.value.trim()?String(De.valueAsNumber/1e3):""}),Ye.addEventListener("change",()=>ct(t,!1,Ye.value==="a"?0:Ye.value==="b"?1:void 0)),ae.addEventListener("input",be),ue.addEventListener("input",be),fe.addEventListener("input",Ne);for(const A of[De,Be,...Object.values(ve.fields),...Object.values(Te)])A.addEventListener("input",()=>{o=!1});function Kt(){K.value=v.fields.y.value.trim()?String(v.fields.y.valueAsNumber*1e3):"",se.value=O.fields.y.value.trim()?String(O.fields.y.valueAsNumber*1e3):""}for(const A of[...Object.values(v.fields),...Object.values(O.fields)])A.addEventListener("input",()=>{o=!0,Kt()});for(const[A,D]of[[K,v],[se,O],[qe,te],[vt,Pe]])A.addEventListener("input",()=>{D.fields.y.value=A.value.trim()?String(A.valueAsNumber/1e3):"",A===K||A===se?o=!0:Ne()});for(const A of[...Object.values(te.fields),...Object.values(Pe.fields),_i,Xe,ye])A.addEventListener("input",Ne);const Qn=(A,D)=>{for(const k of A)k.addEventListener("change",()=>{if(!(u||!n.editable()||e||!(D==="markers"?Bn():ai())))try{const V=D==="markers"?t:i,$=D==="markers"?Zr(V):Kr(V),ge=D==="markers"?Bn():ai();if(JSON.stringify(ge)===JSON.stringify($))return;T(D==="markers"?"修改标记":"修改制图标尺",me=>{if(D==="markers"){const ot=me.markers.findIndex(Je=>Je.id===V);ot>=0&&(me.markers[ot]=$)}else{const ot=me.drawings.findIndex(Je=>Je.id===V);ot>=0&&(me.drawings[ot]=$)}},D)}catch(V){P(V instanceof Error?V.message:String(V),D)}})};return Qn([L,pe,ae,Be,ue,Fe,le,Ie,De,K,se,...Object.values(Te),...Object.values(ve.fields),...Object.values(v.fields),...Object.values(O.fields)],"markers"),Qn([U,ye,Re,Ge,fe,re,Xe,qe,vt,_i,...Object.values(te.fields),...Object.values(Pe.fields)],"drawing"),j(),Z(),P("","markers"),P("","drawing"),Ft(),{sync:Ft,syncPosition:jt,selectObject:ft,selection:Ya,clearSelection:El,isPicking:()=>!!u,pick:Jn,preview:Ar,cancel:bt,updateLabels(A,D,k){if(e)return;A.updateMatrixWorld(),f.updateWorldMatrix(!0,!0);const V=new b;for(const $ of g){const ge=$.object.getWorldPosition(V).project(A),me=ge.z>=-1&&ge.z<=1&&Math.abs(ge.x)<=1.08&&Math.abs(ge.y)<=1.08;$.element.hidden=!me,me&&($.element.style.left=`${(ge.x+1)*D/2}px`,$.element.style.top=`${(1-ge.y)*k/2}px`)}},dispose(){e||(bt(),e=!0,removeEventListener("keydown",Rr),X(f),X(m),n.world.remove(f,m),_.remove(),E.remove(),g.length=0,p.length=0,n.markersPanel.replaceChildren(),n.drawingsPanel.replaceChildren(),n.markersPanel.classList.remove("scene-tool-panel"),n.drawingsPanel.classList.remove("scene-tool-panel"))}}}function Fb(n,e,t,i,r=360,s=1440){const o=i*Math.PI/180,a=Math.max(.25,1-r/Math.max(1,s)),c=2*Math.atan(Math.tan(o/2)*Math.max(.1,t)*a),l=Math.hypot(Math.max(1,n),Math.max(1,e)),d=l/Math.sin(Math.min(o,c)/2)*1.12,u=Math.max(1e4,d*10);return{distance:d,maxDistance:u,far:Math.max(5e4,u*3),near:Math.max(.1,l/1e5)}}const uo=n=>({id:n.id,revision:n.revision});function Zu(n,e){const t=n.sessions.find(i=>i.id===e);if(!t)throw new Error(`Unknown session: ${e}`);if(t.workflow||t.status==="finished")throw new Error("Active authoring session required");return t}function hm(n){if(typeof n!="string"||!n.trim()||n.trim().length>128)throw new Error("Name must contain 1..128 characters");return n.trim()}function fm(n,e,t,i,r,s){const o=Eu(e);Jm(n,o);const a=Zu(o,t);return{project:o,sessionId:t,selection:{kind:i,ref:uo(r)},mapRef:uo(s),taskRef:uo(a.taskRef)}}function kb(n,e,t,i){const r=Eu(n);if(!Zu(r,e).mapEditRef)throw new Error("Terrain editing session required");const o=sp(r,e,t,hm(i)),a={id:t,revision:1};return o.sessions.find(c=>c.id===e).mapEditRef=uo(a),fm(r,o,e,"map",a,a)}function Ob(n,e,t,i){const r=Eu(n);if(Zu(r,e).mapEditRef)throw new Error("Task authoring session required");if(!t||typeof t!="object")throw new Error("New map and task IDs required");const o=hm(i),a={id:t.mapId,revision:1},c={id:t.taskId,revision:1};let l=sp(r,e,t.mapId,`${o} MAP`.slice(0,128));l=Km(l,e,a,t.taskId,o);const d=l.sessions.find(u=>u.id===e);return d.taskRef=uo(c),d.mapRef=uo(a),fm(r,l,e,"task",c,a)}function zb(n,e){return n===void 0||e<n?"active":e===n?"destroyed":"wreck"}const ho={squadron:2155134,friendly:2985215,neutral:16767050,enemy:16738613,white:15332072,terrain:6062736},pm={squadron:"SQUADRON",friendly:"FRIENDLY",neutral:"NEUTRAL",enemy:"ENEMY"},$r=new Z0;$r.background=new Nt(133653);const Mt=new Mi(42,innerWidth/innerHeight,.1,5e3);Mt.position.set(0,240,410);const _t=new MM({antialias:!0,powerPreference:"high-performance"});_t.setPixelRatio(Math.min(devicePixelRatio,2));_t.setSize(innerWidth,innerHeight);_t.outputColorSpace=si;_t.domElement.setAttribute("aria-label","三维地图画布");_t.domElement.setAttribute("role","img");_t.domElement.tabIndex=0;document.querySelector("#scene").appendChild(_t.domElement);const It=new wM(Mt,_t.domElement);It.target.set(0,0,0);It.enableDamping=!0;It.dampingFactor=.08;It.minDistance=35;It.maxDistance=1e4;It.maxPolarAngle=Math.PI*.49;const mm=new k_(1588299,30,850);mm.position.set(0,140,0);$r.add(mm);const nn=new xn;$r.add(nn);let kr;function gm(n,e){kr&&(nn.remove(kr),kr.geometry.dispose(),kr.material.dispose()),kr=JM(n,e),nn.add(kr),nm(kr,Mt.position.distanceTo(It.target))}gm(750,750);function aa(n,e,t=1,i=1){const r=new Ut().setFromPoints(n),s=new fi({color:e,transparent:!0,opacity:i});return new hn(r,s)}let gt=new op,or=new cp,Ma=42,xs=0;function St(n,e){return gt.sample(n,e)}function _m(){const n=qM(gt);let e=0;for(const i of gt.data)e=Math.max(e,i);const t=document.querySelector("#terrain-contour-smooth").checked;for(const i of[.4,...Array.from({length:Math.floor(e/5)},(r,s)=>(s+1)*5)]){const r=[];for(const s of gt.contours(i)){const o=s[0],a=s[s.length-1],c=t?hg(s,Math.hypot(o.x-a.x,o.z-a.z)<1e-6):s;for(let l=1;l<c.length;l++){const d=c[l-1],u=c[l];r.push(d.x,t?St(d.x,d.z)+.18:i+.18,d.z,u.x,t?St(u.x,u.z)+.18:i+.18,u.z)}}if(r.length){const s=new Ut;s.setAttribute("position",new Rt(r,3)),n.add(new Ip(s,new fi({color:ho.white,transparent:!0,opacity:i===.4?.95:.65})))}}return n}function vm(){const n=new xn,e=or.buildings(gt,Ma,xs),t=[],i=[],r=[],s=Math.cos(xs),o=Math.sin(xs);for(const c of e){const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([d,u])=>{const h=d*c.width/2,f=u*c.depth/2,m=c.x+h*s-f*o,_=c.z+h*o+f*s;return new b(m,St(m,_)+.32,_)});for(const d of[0,1,2,0,2,3]){const u=l[d];t.push(u.x,u.y,u.z),i.push(c.shade*.82,c.shade*.91,c.shade)}for(let d=0;d<3;d++){const u=c.x+(d-1)*c.width*.26*s,h=c.z+(d-1)*c.width*.26*o;r.push(u,St(u,h)+.36,h)}}const a=new Ut;return a.setAttribute("position",new Rt(t,3)),a.setAttribute("color",new Rt(i,3)),n.add(new Ee(a,new vn({vertexColors:!0,transparent:!0,opacity:.64,side:dn,depthWrite:!1}))),n.add(new Up(new Ut().setAttribute("position",new Rt(r,3)),new Np({color:14477547,size:.45,transparent:!0,opacity:.65,depthWrite:!1}))),n.userData.count=e.length,n}let _s=vm();nn.add(_s);let fo=_m();nn.add(fo);let Mr=!1,ri=null,_u=null,vu=null,ba=!0,ys=null;function xm(){!ri||_u!==gt||vu!==or?(ri&&(nn.remove(ri.root),ri.dispose()),ri=tm(gt,or),_u=gt,vu=or,nn.add(ri.root)):ba&&ri.update(),ba=!1,ri.root.visible=!!Dt}function ym(){ys&&(xm(),ri.update(ys),ys=null,fo.visible=!1,_s.visible=!1)}function Bb(n,e){const t=Math.max(0,Math.floor((n.x-e+gt.extent)/gt.spacing)),i=Math.min(gt.size-1,Math.ceil((n.x+e+gt.extent)/gt.spacing)),r=Math.max(0,Math.floor((n.z-e+gt.extentZ)/gt.spacingZ)),s=Math.min(gt.size-1,Math.ceil((n.z+e+gt.extentZ)/gt.spacingZ));if(t>i||r>s)return;const o=ys;ys=o?{minX:Math.min(o.minX,t),maxX:Math.max(o.maxX,i),minZ:Math.min(o.minZ,r),maxZ:Math.max(o.maxZ,s)}:{minX:t,maxX:i,minZ:r,maxZ:s}}function gl(){Xa(),ba=!0,ys=null,ri&&(ri.root.visible=!1),As(fo),fo=_m(),nn.add(fo),Mr=!1,As(_s),_s=vm(),nn.add(_s);const n=wr(Le);n.units.forEach(t=>{Qu(t,n.turn),(t.unit.icon==="ground"||t.unit.icon==="ship")&&Mu(t.unit)}),mo();const e=gt.data.reduce((t,i)=>Math.max(t,i),0);document.querySelector("#terrain-state").textContent=`${gt.extent*2/25} × ${gt.extentZ*2/25} km / MAX HEIGHT ${(e/25).toFixed(2)} km / BUILDINGS ${_s.userData.count}`}const st=[{id:"rex",label:"REX",faction:"squadron",kind:"F-16C",icon:"air-filled",positions:[new b(-250,60,250),new b(-170,85,180),new b(-70,108,140),new b(30,125,130),new b(130,138,150)]},{id:"tasha",label:"TASHA",faction:"friendly",kind:"MIRAGE 2000-5",icon:"air-outline",positions:[new b(-210,84,270),new b(-120,88,185),new b(-20,94,130),new b(65,90,80),new b(150,96,30)]},{id:"professor",label:"PROFESSOR",faction:"neutral",kind:"EA-6B",icon:"air-outline",positions:[new b(-275,52,300),new b(-190,55,215),new b(-90,61,165),new b(10,65,125),new b(105,68,85)]},{id:"mig29",label:"MIG-29A",faction:"enemy",kind:"MIG-29",icon:"air-outline",destroyedAtTurn:3,positions:[new b(300,120,-220),new b(195,100,-150),new b(100,78,-70),new b(20,55,10),new b(20,55,10)]},{id:"sam",label:"SAM",faction:"enemy",kind:"SAM",icon:"ground",tgt:!0,positions:[new b(160,0,-150),new b(160,0,-150),new b(160,0,-150),new b(160,0,-150),new b(160,0,-150)]},{id:"frigate",label:"FRIGATE",faction:"enemy",kind:"FRIGATE",icon:"ship",tgt:!0,positions:[new b(245,0,-40),new b(230,0,-30),new b(215,0,-20),new b(200,0,-10),new b(185,0,0)]}],On=[{summary:"FORMATION / INITIAL CONTACT",events:[]},{summary:"TACTICAL MOVEMENT / CONTACT",events:[{kind:"attack",attacker:"mig29",target:"rex",weapon:"2AAM"}]},{summary:"ENGAGEMENT / RANGE CLOSING",events:[{kind:"attack",attacker:"rex",target:"mig29",weapon:"QAAM"}]},{summary:"LOSSES / RESULT PENDING",events:[{kind:"destroy",target:"mig29"}]},{summary:"FINAL POSITION / RESULT",events:[]}];function Kn(){return On.length}function pi(){return On.length-1}function Sm(){return typeof Lt<"u"&&Lt?xl:pi()}function Is(n,e){return zb(n.destroyedAtTurn,e)}function Sd(n){return st.find(e=>e.id===n)?.label??n.toUpperCase()}function Hb(n){return n.kind==="attack"?`${Sd(n.attacker)} -> ${Sd(n.target)} / ${n.weapon}`:`${Sd(n.target)} DESTROYED`}function wr(n){const e=Math.max(0,Math.min(n,pi())),t=On[e];return{turn:e,summary:t.summary,events:t.events,units:st.map(i=>({unit:i,position:ka(i,i.positions[Math.min(e,i.positions.length-1)],St),status:Is(i,e)}))}}st.forEach(n=>{n.positions.length!==Kn()&&console.warn(`[scenario] ${n.label} has ${n.positions.length} keyframes but the scenario declares ${Kn()} turns`)});let Le=0,de=null;const mi=new Map,Ts=new Map,Ss=new Map;let Hc,Qs=null,xu=-1/0,Vc="",Md=[];const Vb=.675,bd=new fn().setFromEuler(new Zn(-Math.PI/2,0,0)),Mm=22,$n=1.5,Zf=7.2;function Gb(){const n=[];for(let e=0;e<=64;e++){const t=e/64*Math.PI*2;n.push(new b(Math.cos(t)*Zf,Math.sin(t)*Zf,0))}return n}function Wb(n,e){const t=hb(n.icon,e);return t.scale.setScalar(Vb),t.traverse(i=>{i.userData.unit=n}),t}function Ku(n,e){const t=n.icon==="ground"?Math.PI:0;if(yn())return ca(lp({...n,destroyedAtTurn:n.attitudes?.[e]?void 0:n.destroyedAtTurn},e,{epsilon:.001}).yaw+t);const i=Math.min(e,n.positions.length-1),r=n.attitudes?.[i];if(r)return ca(r.yaw+t);const s=n.positions[Math.max(0,i-1)],o=n.positions[Math.min(n.positions.length-1,i+1)],a=o.x-s.x,c=o.z-s.z;return Math.hypot(a,c)<.001?null:ca(Math.atan2(-a,-c)+t)}const wd=.6,Kf=2,Jf=new b(0,1,0),Xb=new b(1,0,0),qb=new b(0,0,1);function ca(n){return Math.atan2(Math.sin(n),Math.cos(n))}function Qf(n,e){const t=n.positions[e],i=n.positions[e+1];if(!t||!i)return null;const r=i.x-t.x,s=i.z-t.z;return Math.hypot(r,s)<.001?null:Math.atan2(r,s)}function Ju(n,e){if(n.icon!=="air-filled"&&n.icon!=="air-outline")return null;if(yn())return lp({...n,destroyedAtTurn:n.attitudes?.[e]?void 0:n.destroyedAtTurn},e,{epsilon:.001,maxBank:wd,rollGain:Kf});const t=Math.min(e,n.positions.length-1),i=n.attitudes?.[t];if(i)return i;const r=n.positions[Math.max(0,t-1)],s=n.positions[Math.min(n.positions.length-1,t+1)],o=s.x-r.x,a=s.y-r.y,c=s.z-r.z,l=Math.hypot(o,c);if(l<.001&&Math.abs(a)<.001)return null;const d=Math.atan2(-o,-c),u=Math.atan2(a,Math.max(l,.001)),h=Qf(n,t-1),f=Qf(n,t),m=h===null||f===null?0:qt.clamp(Kf*ca(f-h),-wd,wd);return{yaw:d,pitch:u,roll:m}}function Po(n){const e=new xn;e.userData.unit=n,e.userData.pickable=!0;const t=ho[n.faction],i=n.icon==="ground"||n.icon==="ship";let r=null;i||(r=new Ee(new fl(2.2,3.3,20),new vn({color:t,transparent:!0,opacity:.8,side:dn})),r.rotation.x=-Math.PI/2,r.userData.unit=n,e.add(r));const s=new hn(new Ut,new fi({color:t,transparent:!0,opacity:.8}));s.userData.unit=n,e.add(s);const o=Wb(n,t),a=new hn(new Ut().setFromPoints(Gb()),new fi({color:t,transparent:!0,opacity:.9,depthTest:!1}));a.visible=!1,a.userData.unit=n,o.add(a);const c=im(t);c.userData.unit=n,o.add(c),e.add(o);const l=2.6,d=new fi({color:t,transparent:!0,opacity:.9,depthTest:!1}),u=new xn;u.add(new hn(new Ut().setFromPoints([new b(-l,0,-l),new b(l,0,l)]),d)),u.add(new hn(new Ut().setFromPoints([new b(-l,0,l),new b(l,0,-l)]),d)),u.visible=!1,e.add(u);const h=[];o.traverse(g=>{const p=g.material;!p||Array.isArray(p)||h.push({material:p,baseOpacity:p.opacity})});const f=document.createElement("div");f.className=`world-label ${n.faction}`,f.textContent=n.label,f.style.cssText=`position:absolute; left:0; top:0; transform:translate(0, 0); color:#${t.toString(16).padStart(6,"0")}; text-shadow:0 0 7px #${t.toString(16).padStart(6,"0")}; font:14px 'Share Tech Mono',monospace; white-space:nowrap; pointer-events:none;`;const m=new gn;m.userData.dom=f,e.add(m),e.userData.parts={base:r,pole:s,icon:o,label:m,wreck:u,tgtRing:a,escortMarker:c,iconMaterials:h,labelFade:1};const _=ob(t);_.root.traverse(g=>{g.userData.unit=n}),e.add(_.root),Ts.set(n.id,_),nn.add(e),mi.set(n.id,e)}function Qu(n,e){const{unit:t,status:i}=n,r=mi.get(t.id),s=r.userData.parts,o=i==="wreck",a=!(typeof Lt<"u"&&Lt)&&!yn()&&o&&t.destroyedAtTurn!==void 0,c=ka(t,a?t.positions[Math.min(t.destroyedAtTurn,t.positions.length-1)]:n.position,St),l=t.intangible?c.y:St(c.x,c.z);r.position.set(c.x,l,c.z);const d=Math.max(0,c.y-l),u=ml(t,c,St,$n).y-l,h=s.base===null?u+Mm-$n:Math.max(d,.6);if(s.base&&(s.base.visible=!o),s.icon.visible=!o,s.pole.visible=!o,s.wreck.visible=i!=="active",s.wreck.position.y=u,s.tgtRing.visible=t.tgt===!0&&i==="active",s.escortMarker.visible=t.escort===!0&&t.faction!=="enemy"&&i==="active",!o){let g=s.pole.geometry.getAttribute("position");g?(g.setXYZ(0,0,.2,0),g.setXYZ(1,0,h,0),g.needsUpdate=!0):(g=new Rt([0,.2,0,0,h,0],3),s.pole.geometry.setAttribute("position",g)),s.pole.geometry.computeBoundingSphere(),s.pole.geometry.boundingBox&&s.pole.geometry.computeBoundingBox()}const f=s.icon;f.position.y=u;const m=Ju(t,e);if(m===null){const g=Ku(t,e);g===null?f.quaternion.copy(bd):f.quaternion.setFromAxisAngle(Jf,g).multiply(bd)}else f.quaternion.setFromAxisAngle(Jf,m.yaw).multiply(new fn().setFromAxisAngle(Xb,m.pitch)).multiply(new fn().setFromAxisAngle(qb,m.roll)).multiply(bd);const _=i==="destroyed";s.iconMaterials.forEach(({material:g,baseOpacity:p})=>{g.transparent||(g.transparent=!0,g.needsUpdate=!0),g.userData.baseDepthTest??=g.depthTest,g.depthTest=t.intangible?!1:g.userData.baseDepthTest,g.opacity=p*(_?.3:1)*(t.hidden?.35:1)});for(const g of[s.base,s.pole,...s.wreck.children]){const p=g?.material;!p||Array.isArray(p)||(p.userData.hiddenBaseOpacity??=p.opacity,p.opacity=p.userData.hiddenBaseOpacity*(t.hidden?.35:1))}s.labelFade=(o?0:_?.5:1)*(t.hidden?.5:1),s.label.position.y=h}function bm(n,e){const t=new xn;if(t.userData.trail=!0,n.length<2)return t;const i=[],r=2.3;n.forEach((c,l)=>{const d=n[Math.max(0,l-1)],u=n[Math.min(n.length-1,l+1)],h=new b().subVectors(u,d).normalize(),f=new b(-h.z,0,h.x).normalize().multiplyScalar(r*(.45+l/n.length*.55));i.push(c.x+f.x,c.y+.5,c.z+f.z,c.x-f.x,c.y+.5,c.z-f.z)});const s=[];for(let c=0;c<n.length-1;c++)s.push(c*2,c*2+1,c*2+2,c*2+1,c*2+3,c*2+2);const o=new Ut;o.setAttribute("position",new Rt(i,3)),o.setIndex(s),o.computeVertexNormals();const a=new vn({color:e,transparent:!0,opacity:.28,side:dn,depthWrite:!1,blending:Td});return t.add(new Ee(o,a)),t}function eh(n,e){return yn()?At()?.sealedScenes?.find(t=>t.turn<=e&&t.units.some(i=>i.id===n.id))?.turn??e:0}function th(n,e,t){const i=dp(n.positions,n.trackPoints??[],e,t).map(a=>new b(a.x,a.y,a.z));if(i.length<2)return[];const r=new Wu(i,!1,"centripetal"),s=[];let o=0;for(let a=e;a<t;a++){const c=(n.trackPoints??[]).filter(m=>m.segment===a).length+1,l=o/(i.length-1),d=(o+c)/(i.length-1),u=Math.max(24,c*16),h=i.slice(o,o+c+1).every(m=>m.distanceToSquared(i[o])<1e-12),f=Array.from({length:u+1},(m,_)=>h?i[o].clone():r.getPoint(qt.lerp(l,d,_/u)));s.push({segment:a,points:f,start:l,end:d,curve:r}),o+=c}return s}function wm(n,e){const{unit:t,status:i}=n;if(i==="wreck"||document.querySelector("#trail-display").value==="none")return;const r=t.destroyedAtTurn===void 0?e:Math.min(e,t.destroyedAtTurn),s=document.querySelector("#trail-display").value==="recent",o=Math.max(1,Math.floor(Number(document.querySelector("#trail-turns").value)||1)),a=eh(t,e),c=Math.max(a,s?Math.max(0,r-o):0),l=th(t,a,r).filter(u=>u.segment>=c).flatMap((u,h)=>h?u.points.slice(1):u.points);!t.intangible&&(t.icon==="ground"||t.icon==="ship")&&l.forEach(u=>{u.y=St(u.x,u.z)+$n});const d=bm(l,ho[t.faction]);d.userData.trail=t.id,nn.add(d)}const Lo=document.createElement("div");Lo.className="labels";Lo.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;contain:strict;";document.querySelector("#app").appendChild(Lo);function Do(){for(const[,n]of mi){const e=n.userData.parts.label,t=e.userData.dom;t.dataset.unitId=n.userData.unit.id,Lo.appendChild(t),e.userData.domObject=t}}let Oe=!1,Ot=!1;const mn=[{id:"route-1",name:"ROUTE 1",waypoints:[]}];let En="route-1",wa=2,tl=1,Ii="",Ni="",sn=null,Ea=[],Xi=new xn;nn.add(Xi);function nl(){return mn.find(n=>n.id===En)??mn[0]}function Mo(){return nl()?.waypoints??[]}const il=document.createElement("div");il.className="waypoint-labels";document.querySelector("#app").appendChild(il);const yu=[];let rl=1,sl=1,Gt=!1,Cn=!1,zt=!1,et=null,Gi=new xn;nn.add(Gi);let Dt=null,qr=1;const ht=new Set;function Ti(){return st.filter(n=>ht.has(n.id))}function Ki(){return Ti().filter(n=>Oa(n))}function bo(){const n=Ki();return n.reduce((e,t)=>e.add(Fn(t)),new b).divideScalar(n.length||1)}function zn(n){yt?.clearSelection(),et=null,zt=!1,ht.clear(),n.forEach(e=>ht.add(e.id)),de=n[n.length-1]??null,n.length>1&&(Ui="translate"),lt(),it()}function _l(n,e=!1){typeof en<"u"&&en?.pick("unit",n.id)||(e?(ht.has(n.id)?ht.delete(n.id):ht.add(n.id),zn(Ti())):zn([n]))}function Ta(n){if(!oi()||!Oe)return;const e=Ki();if(!e.length)return;const t=Ns();if(n.lengthSq()<1e-12&&!e.some(r=>Ds(r)&&t.some(s=>{const o=r.positions[s];return o.y!==St(o.x,o.z)})))return;const i=e.filter(r=>Tn(r)&&!r.intangible);i.length&&(n.y=Math.max(n.y,...i.flatMap(r=>t.map(s=>{const o=r.positions[s];return Math.max(0,St(o.x+n.x,o.z+n.z))-o.y})))),Sn("draft")&&(e.forEach(r=>{at()&&!yn()&&(r.routeBinding=void 0),t.forEach(s=>r.positions[s].add(n)),at()&&r.trackPoints?.forEach(s=>{t.includes(s.segment)&&t.includes(s.segment+1)&&(s.x+=n.x,s.y+=n.y,s.z+=n.z)}),cl(r,t)}),lt(),it())}let jn;const vl=()=>({groups:[],markers:[],drawings:[]}),Oi=()=>jn??vl();let Nn,Em,yt,en,Su,zr,ol="",Di=null;const nh=document.createElement("div");nh.className="editor-tool-labels";document.querySelector("#app").appendChild(nh);let xe=null,Lt=!1,Gc=null,Aa=null,Ra=null,xl=0,Wc={edit:!1,terrain:!1};const Ms=new Map;let xr=null,Hr=null;function At(){if(!xe)return;if(Hr?.store===xe&&Hr.revision===xe.revision)return Hr.session;const n=xe.read(),e=n.project.sessions.find(t=>t.id===(n.editor.sessionId??"session-working"));return Hr={store:xe,revision:xe.revision,session:e},e}function yn(){return At()?.workflow?.mode==="formal"}function at(){if(typeof Lt<"u"&&Lt)return!1;const n=At();return n?.status!=="finished"&&(!n?.workflow||bi())}function di(){return typeof Lt<"u"&&Lt||at()}function bi(){const n=At();return!!n?.workflow&&n.status!=="finished"&&n.turns.length===n.workflow.committedTurns+1&&Le===n.workflow.committedTurns}function oi(){return at()||bi()}function Vt(){return!!je||Ue.dragging||!!Dt||!!Rn||!!li||!!yt?.isPicking()}function Ed(n,e){if(!di()||!Oe||je||Ue.dragging||Dt||Rn||li||!Sn("tools"))return!1;jn??=vl(),e(jn,st);const t=rn(n);return lt(),it(),t}function Yb(n){const e=st.filter(s=>s.groupId===n.id);if(!at()||!Oe||!e.length||Vt()||!Sn())return;jn??=vl();const t={...n,id:`group-${crypto.randomUUID()}`,name:`${n.name} 副本`.slice(0,128)};jn.groups.push(t);const i=sh().spacing,r=e.map(s=>{const o=Ba(za(s)),a=qr++;return o.id=`unit-${a}`,o.label=`${s.label}-COPY-${a}`,o.groupId=t.id,o.routeBinding=void 0,delete o.player,delete o.playerActions,o.positions.forEach(c=>{c.x+=i,c.z+=i}),o.trackPoints?.forEach(c=>{c.x+=i,c.z+=i}),st.push(o),Po(o),o});Do(),zn(r),Rs("translate")}function ih(n,e=.5){const t=new b(n.x,n.y,n.z).multiplyScalar(rt),i=Mt.position.clone().sub(It.target).normalize();i.lengthSq()<.1&&i.set(0,.6,1).normalize();const r=Math.max(90,e*rt/Math.sin(qt.degToRad(Mt.fov)/2)*1.4);It.target.copy(t),Mt.position.copy(t).addScaledVector(i,Math.min(r,It.maxDistance)),It.update()}function ep(n){const e=st.filter(r=>n.includes(r.id)).map(r=>Fn(r));if(!e.length)return;const t=e.reduce((r,s)=>r.add(s),new b).divideScalar(e.length),i=Math.max(15,...e.map(r=>r.distanceTo(t)))/rt;ih({x:t.x/rt,y:t.y/rt,z:t.z/rt},i)}function Oa(n){return oi()&&(bi()||Is(n,Le)==="active")}function rh(n){return oi()&&(at()||n.destroyedAtTurn===void 0||n.destroyedAtTurn===Le)}function rn(n="Edit scenario",e=xr){if(!xe||!e)return!0;if(Ue.dragging||Dt)return!1;try{const t=Tm();return xr=null,xe.commit(t,n,e),!0}catch(t){return xr=null,Ji(xe.read()),de=st.find(i=>ht.has(i.id))??null,console.error("Scenario transaction rolled back",t),Qt("编辑未保存："+(t instanceof Error?t.message:String(t))),!1}}function al(n,e){const t=i=>JSON.stringify(i,(r,s)=>s&&typeof s=="object"&&!Array.isArray(s)?Object.fromEntries(Object.entries(s).sort(([o],[a])=>o.localeCompare(a))):s);return t(n)===t(e)}function $b(n,e){const t={...n,editor:{...n.editor,currentTurn:e.currentTurn}},i=Cu(t,Ru(t));if(i.layout=e.layout,!al(e,i))throw new Error("已提交回合保留原样；请在末尾草稿编辑场景");return{...n,editor:{...t.editor,activeRouteId:e.activeRouteId}}}function Tm(n=yl()){if(typeof Lt<"u"&&Lt&&xe){const h=xe.read(),f=h.project.sessions.find(m=>m.id===h.editor.sessionId);return f.sceneTools=structuredClone(n.sceneTools??vl()),h}if(xe&&(At()?.status==="finished"||yn()&&!bi()))return $b(xe.read(),n);const e=ig(n,n.layout??{size:gt.size,extent:gt.extent,extentZ:gt.extentZ});if(!xe)return e;const t=xe.read(),i=t.project,r=t.editor.sessionId??"session-working",s=i.sessions.find(h=>h.id===r),o=i.maps.find(h=>h.id===s.mapRef.id&&h.revision===s.mapRef.revision),a=e.project.sessions[0];if(a.id=s.id,a.name=s.name,a.taskRef=s.taskRef,a.mapRef=s.mapRef,a.resourceSnapshot=s.resourceSnapshot,a.rulesRevision=s.rulesRevision,a.status=s.status,s.rulesRef&&(a.rulesRef={...s.rulesRef}),s.rulesSnapshot&&(a.rulesSnapshot=structuredClone(s.rulesSnapshot)),a.workflow=s.workflow,a.mapEditRef=s.mapEditRef,s.workflow){a.sealedScenes=rg(s),a.turns=s.turns.map((f,m)=>m===Le?a.turns[m]:f);const h=Cu(t,Ru(t));a.units.forEach(f=>{const m=s.units.find(g=>g.id===f.id),_=h.units.find(g=>g.id===f.id);if(m){for(let g=0;g<Le;g++)f.positions[g]=m.positions[g],f.attitudes&&(f.attitudes[g]=m.attitudes?.[g]??null);_&&al(n.units.find(g=>g.id===f.id)?.positions[Le],_.positions[Le])&&(f.positions[Le]=m.positions[Le])}})}const c=e.project.maps[0];c.id=o.id,c.revision=o.revision,c.name=o.name;const l=h=>h.id===o.id&&h.revision===o.revision,d=c.terrain.size!==o.terrain.size||c.terrain.widthKm!==(o.terrain.widthKm??o.terrain.extentKm*2)||c.terrain.heightKm!==(o.terrain.heightKm??o.terrain.extentKm*2)||!al(c.urban,o.urban)||c.terrain.heightsKm.some((h,f)=>Math.abs(h-o.terrain.heightsKm[f])>1e-7),u=!!s.workflow||i.tasks.some(h=>l(h.mapRef))||i.sessions.some(h=>h.id!==r&&l(h.mapRef));return d&&u&&(c.revision=Math.max(...i.maps.filter(h=>h.id===o.id).map(h=>h.revision))+1,a.mapRef={id:c.id,revision:c.revision}),e.project={...i,maps:d?u?[...i.maps,c]:i.maps.map(h=>l(h)?c:h):i.maps,sessions:i.sessions.map(h=>h.id===r?a:h)},e.editor.sessionId=r,e}function Ji(n){const e=Ru(n);(gt.size!==e.size||gt.extent!==e.extent||gt.extentZ!==e.extentZ)&&(gt=new op(e.size,e.extent,e.extentZ),or=new cp(e.size,e.extent,e.extentZ),gm(e.extent,e.extentZ??e.extent),Ha(),ah()),jb(Cu(n,e))}function za(n){return{id:n.id,label:n.label,faction:n.faction,kind:n.kind,icon:n.icon,positions:n.positions.map(e=>({x:e.x,y:e.y,z:e.z})),attitudes:n.attitudes?.map(e=>e?{...e}:null),destroyedAtTurn:n.destroyedAtTurn,tgt:n.tgt,...n.escort===void 0?{}:{escort:n.escort},...n.hidden===void 0?{}:{hidden:n.hidden},...n.intangible===void 0?{}:{intangible:n.intangible},groupId:n.groupId,aircraftRef:n.aircraftRef?{...n.aircraftRef}:void 0,spRefs:n.spRefs?.map(e=>({...e})),...n.loadout===void 0?{}:{loadout:n.loadout.map(e=>({slot:e.slot,weaponRef:{...e.weaponRef}}))},...n.player===void 0?{}:{player:{...n.player}},...n.playerActions===void 0?{}:{playerActions:structuredClone(n.playerActions)},routeBinding:n.routeBinding?{...n.routeBinding,offset:n.routeBinding.offset?{...n.routeBinding.offset}:void 0}:void 0,trackPoints:n.trackPoints?.map(e=>({...e}))}}function Ba(n){return{id:n.id,label:n.label,faction:n.faction,kind:n.kind,icon:n.icon,positions:n.positions.map(e=>new b(e.x,e.y,e.z)),attitudes:n.attitudes?.map(e=>e?{...e}:null),destroyedAtTurn:n.destroyedAtTurn,tgt:n.tgt,...n.escort===void 0?{}:{escort:n.escort},...n.hidden===void 0?{}:{hidden:n.hidden},...n.intangible===void 0?{}:{intangible:n.intangible},groupId:n.groupId,aircraftRef:n.aircraftRef?{...n.aircraftRef}:void 0,spRefs:n.spRefs?.map(e=>({...e})),...n.loadout===void 0?{}:{loadout:n.loadout.map(e=>({slot:e.slot,weaponRef:{...e.weaponRef}}))},...n.player===void 0?{}:{player:{...n.player}},...n.playerActions===void 0?{}:{playerActions:structuredClone(n.playerActions)},routeBinding:n.routeBinding?{...n.routeBinding,offset:n.routeBinding.offset?{...n.routeBinding.offset}:void 0}:void 0,trackPoints:n.trackPoints?.map(e=>({...e}))}}function yl(){return{units:st.map(za),turns:On.map(n=>({summary:n.summary,events:n.events.map(e=>({...e}))})),currentTurn:Le,...jn?{sceneTools:structuredClone(jn)}:{},layout:{size:gt.size,extent:gt.extent,extentZ:gt.extentZ},terrain:gt.data.slice(),urban:or.data.slice(),urbanSeed:Ma,urbanAngle:xs,routes:mn.map(n=>({...n,waypoints:n.waypoints.map(e=>({...e}))})),activeRouteId:En}}function As(n){n.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i&&i.dispose()}),nn.remove(n)}function Am(n){const e=mi.get(n.id);if(!e)return;e.userData.parts.label.userData.dom.remove(),As(e),mi.delete(n.id),Ts.delete(n.id),Ss.delete(n.id),Xa()}function jb(n){jn=n.sceneTools?structuredClone(n.sceneTools):void 0,mn.splice(0,mn.length,...n.routes.map(e=>({...e,waypoints:e.waypoints.map(t=>({...t}))}))),En=n.activeRouteId,et=null,Gt=!1,zt=!1,gt.data.set(n.terrain),or.data.set(n.urban),Ma=n.urbanSeed,xs=n.urbanAngle,Mr=!0,ut("#urban-seed").value=String(Ma),ut("#urban-angle").value=String(qt.radToDeg(xs)),On.splice(0,On.length,...n.turns.map(e=>({summary:e.summary,events:e.events.map(t=>({...t}))}))),Le=Math.min(n.currentTurn,pi());for(const e of[...mi.values()])As(e);mi.clear(),Ts.clear(),Ss.clear(),Xa(),Lo.replaceChildren(),st.length=0,n.units.forEach(e=>st.push(Ba(e))),st.forEach(Po),Do()}function Sn(n="author"){return!Oe||(n==="tools"?!di():n==="author"?!at():!oi())||!rn()?!1:(xr=xe?.read()??null,!0)}function Rm(n){if(!xe||Ue.dragging||Dt||je||!at()&&!(bi()&&n.type==="set-turn-summary"&&n.turn===Le&&n.sessionId===At()?.id)||!rn())return;const e=[...ht];xe.dispatch(n),Ji(xe.read()),ht.clear(),e.filter(t=>st.some(i=>i.id===t)).forEach(t=>ht.add(t)),de=Ti().at(-1)??null,lt(),it()}function Sl(){if(je||Ue.dragging||Dt)return;rn();const n=xe?.undo();if(!n)return;const e=[...ht];Ji(n),ht.clear(),e.filter(t=>st.some(i=>i.id===t)).forEach(t=>ht.add(t)),de=Ti().at(-1)??null,lt(),it()}function Ml(){if(je||Ue.dragging||Dt)return;rn();const n=xe?.redo();if(!n)return;const e=[...ht];Ji(n),ht.clear(),e.filter(t=>st.some(i=>i.id===t)).forEach(t=>ht.add(t)),de=Ti().at(-1)??null,lt(),it()}function Zb(n){Am(n),Po(n),Do()}function Mu(n){Xa();const e={unit:n,position:Fn(n),status:Is(n,Le)};Qu(e,Le),nn.children.filter(t=>t.userData.trail===n.id).forEach(t=>As(t)),wm(e,Le),de===n&&ht.size<=1&&Dm(e,wr(Le))}function Fn(n,e=!1){const t=n.positions[Math.min(Le,n.positions.length-1)];return e?t:ka(n,t,St)}function cl(n,e=Ns()){Ds(n)&&(e.forEach(t=>{const i=n.positions[t];i.y=St(i.x,i.z)}),at()&&n.trackPoints?.forEach(t=>{e.includes(t.segment)&&e.includes(t.segment+1)&&(t.y=St(t.x,t.z))}))}function Kb(){!at()||At()?.mapEditRef||!Oe||Ue.dragging||(gi(!0),on=!1,Yr(),ht.clear(),de=null,je={id:`unit-${qr}`,label:`NEW-${String(qr).padStart(2,"0")}`,faction:"enemy",kind:"UNKNOWN",icon:"air-outline",tgt:!1,positions:Array.from({length:Kn()},()=>new b(0,60,0)),attitudes:Array.from({length:Kn()},()=>({yaw:0,pitch:0,roll:0}))},bl(),it())}function Jb(){if(!at()||!Oe)return;const n=Ti();if(!n.length||je||Ue.dragging||!Sn())return;const e=new Set(n.map(t=>t.id));jn?.links&&(jn.links=jn.links.filter(t=>!e.has(t.fromUnitId)&&!(t.to.kind==="unit"&&e.has(t.to.id)))),n.forEach(t=>{Am(t),st.splice(st.indexOf(t),1)}),On.forEach((t,i)=>{(!yn()||i===Le)&&(t.events=t.events.filter(r=>!e.has(r.target)&&(r.kind!=="attack"||!e.has(r.attacker))))}),zn([])}function sh(){const n=Math.floor(Number(ut("#create-count").value)),e=Number(ut("#create-spacing").value);return{count:Number.isFinite(n)?qt.clamp(n,1,100):1,spacing:Number.isFinite(e)?qt.clamp(e,1,1e3):20}}function Cm(){if(!at()||!Oe)return;const n=Ti();if(!n.length||je||Ue.dragging)return;const{count:e,spacing:t}=sh();if(!Sn())return;const i=[];for(let r=0;r<e;r++)for(const s of n){const o=Ba(za(s)),a=qr++;o.id=`unit-${a}`,o.label=`${s.label}-COPY-${a}`,delete o.player,delete o.playerActions,o.routeBinding=void 0,o.trackPoints?.forEach(c=>{c.x+=t*(r+1),c.z+=t*(r+1)}),o.positions.forEach(c=>{c.x+=t*(r+1),c.z+=t*(r+1)}),i.push(o),st.push(o),Po(o)}Do(),zn(i),Rs("translate")}st.forEach(Po);Do();function lt(){Xa(),rn(),xe&&!xr&&!Ue.dragging&&!Dt&&xe.setEditor({currentTurn:Le,activeRouteId:En,sessionId:xe.read().editor.sessionId??"session-working"}),ch(),Pm();const n=wr(Le);yt?.sync(),typeof en<"u"&&(Ue.dragging?en?.update():en?.sync()),nn.children.filter(t=>t.userData.trail).forEach(t=>{nn.remove(t),t.traverse(i=>{(i instanceof Ee||i instanceof hn)&&(i.geometry.dispose(),Array.isArray(i.material)?i.material.forEach(r=>r.dispose()):i.material.dispose())})}),n.units.forEach(t=>{Qu(t,n.turn),wm(t,n.turn)}),document.querySelector("#turn-title").textContent=`TURN ${String(n.turn+1).padStart(2,"0")}`,document.querySelector("#turn-indicator").textContent=`${String(n.turn+1).padStart(2,"0")} / ${String(Sm()+1).padStart(2,"0")}`,document.querySelector("#turn-summary").textContent=n.summary,document.querySelector("#unit-count").textContent=String(n.units.length).padStart(2,"0"),document.querySelector("#event-list").textContent=n.events.length===0?"NO CONTACT":n.events.map(Hb).join(`
`);const e=n.units.find(t=>t.unit===de);e?Dm(e,n):(de=null,bl()),ht.size>1&&(document.querySelector("#selected-name").textContent=`${ht.size} UNITS`,document.querySelector("#selected-detail").textContent=Ti().map(t=>t.label).join(" / "),document.querySelector("#distance-readout").textContent=`${Ki().length} MOVABLE / FORMATION MOVE`,document.querySelector("#attitude-readout").textContent="");for(const[t,i]of mi)i.userData.parts.label.userData.dom.classList.toggle("unit-selected",Oe&&ht.has(t))}function Qb(){const n=wr(Le),e=n.units.find(s=>s.unit.id===Ii),t=n.units.find(s=>s.unit.id===Ni),i=Xi.userData.rangeCenter;if(e&&i){const s=e.position.clone().sub(i);for(const o of Xi.children)o.userData.rangeCentered&&o.position.add(s);i.copy(e.position)}const r=Xi.children.find(s=>s.userData.rangeConnector);if(e&&t&&e.unit.id!==t.unit.id&&r){const s=r.geometry.getAttribute("position");s.setXYZ(0,e.position.x,e.position.y,e.position.z),s.setXYZ(1,t.position.x,t.position.y,t.position.z),s.needsUpdate=!0,r.geometry.computeBoundingSphere();const o=Au(e.position,t.position,"slant",oh());document.querySelector("#range-result").textContent=`${o.band} / SLANT
HORIZONTAL ${o.horizontalKm.toFixed(2)} km
DELTA ALT ${o.altitudeDeltaKm.toFixed(2)} km
SLANT ${o.slantKm.toFixed(2)} km${e.status!=="active"||t.status!=="active"?`
LOST UNIT / MEASUREMENT ONLY`:""}`}}function oh(){const n=At(),e=n?.sealedScenes?.find(t=>t.turn===Le);return sg(e?e.rulesSnapshot:n?.rulesSnapshot)}function Pm(){const n=oh(),e=wr(Le);e.units.some(a=>a.unit.id===Ii)||(Ii=""),e.units.some(a=>a.unit.id===Ni)||(Ni="");for(const[a,c]of[["#range-attacker-name",Ii],["#range-target-name",Ni]]){const l=e.units.find(d=>d.unit.id===c);document.querySelector(a).textContent=l?`${l.unit.label} [${l.unit.id}] / ${l.status.toUpperCase()}`:"尚未选择"}for(const[a,c]of[["#range-attacker-select",Ii],["#range-target-select",Ni]]){const l=document.querySelector(a);l&&(l.replaceChildren(...["",...e.units.map(d=>d.unit.id)].map(d=>{const u=document.createElement("option");u.value=d;const h=e.units.find(f=>f.unit.id===d);return u.textContent=h?`${h.unit.label} · ${h.unit.kind}`:"选择单位",u})),l.value=c)}document.querySelector("#range-pick-state").textContent=sn?`${sn==="attacker"?"攻击方":"目标"}选择中`:"";for(const a of["attacker","target"])document.querySelector(`#range-pick-${a}`).setAttribute("aria-pressed",String(sn===a));const t=document.querySelector("#range-candidates");t.hidden=!Ea.length,t.replaceChildren(...Ea.flatMap(a=>{const c=e.units.find(d=>d.unit.id===a);if(!c)return[];const l=document.createElement("button");return l.textContent=`${c.unit.label} [${a}] / ${c.unit.kind} / ${pm[c.unit.faction]} / ${c.status.toUpperCase()}`,l.addEventListener("click",()=>Lm(c.unit)),[l]}));const i="slant";document.querySelector("#range-mode-readout").textContent=i.toUpperCase();const r=e.units.find(a=>a.unit.id===Ii),s=e.units.find(a=>a.unit.id===Ni),o=document.querySelector("#range-result");if(As(Xi),Xi=new xn,nn.add(Xi),!r||!s)o.textContent="SELECT ATTACKER AND TARGET";else if(r===s)o.textContent="ATTACKER AND TARGET MUST DIFFER";else{const a=Au(r.position,s.position,i,n);o.textContent=`${a.band} / ${i.toUpperCase()}
HORIZONTAL ${a.horizontalKm.toFixed(2)} km
DELTA ALT ${a.altitudeDeltaKm.toFixed(2)} km
SLANT ${a.slantKm.toFixed(2)} km${r.status!=="active"||s.status!=="active"?`
LOST UNIT / MEASUREMENT ONLY`:""}`;const c=aa([r.position,s.position],15332072,1,.75);c.userData.rangeConnector=!0,Xi.add(c)}if(r&&document.querySelector("#range-fill").checked){const a=n.find(d=>d.name===document.querySelector("#range-fill-band").value)??n[0],c=qt.clamp(Number(document.querySelector("#range-fill-opacity").value)||.12,.02,.6),l=new Ee(new Wr(a.maxKm*rt,48,32),new vn({color:a.color,transparent:!0,opacity:c,depthWrite:!1,side:yr}));l.position.copy(r.position),l.userData.rangeFill={band:a.name,radiusKm:a.maxKm},l.userData.rangeCentered=!0,Xi.add(l),s||(o.textContent=`${a.name} / 3D填充半径 ${a.maxKm} km`)}if(r&&document.querySelector("#range-rings").checked)for(const a of n){const c=a.maxKm*rt,l=Array.from({length:129},(u,h)=>{const f=h/128*Math.PI*2;return new b(r.position.x+Math.cos(f)*c,r.position.y,r.position.z+Math.sin(f)*c)}),d=aa(l,a.color,1,.5);d.userData.rangeCentered=!0,Xi.add(d)}r&&(Xi.userData.rangeCenter=r.position.clone())}function Yn(){sn=null,Ea=[],It.enabled=!0,_t.domElement.style.cursor=Ot?"crosshair":"",mo()}function Lm(n){!sn||!st.includes(n)||(sn==="attacker"?Ii=n.id:Ni=n.id,Yn(),lt())}function ew(n){if(!(Ue.dragging||Dt||je)){if(yt?.cancel(),sn===n){Yn(),lt();return}gi(!0),on=!1,Ot&&ki(!1),Gt=zt=Cn=!1,et=null,sn=n,Ea=[],Ue.detach(),It.enabled=!0,_t.domElement.style.cursor="crosshair",lt(),it()}}function tw(n,e){Vt()||tn||e&&!wr(Le).units.some(t=>t.unit.id===e)||(n==="attacker"?Ii=e:Ni=e,Yn(),lt())}for(const n of["attacker","target"])document.querySelector(`#range-pick-${n}`).addEventListener("click",()=>ew(n)),document.querySelector(`#range-${n}-select`).addEventListener("change",e=>tw(n,e.target.value));document.querySelector("#range-use-selected").addEventListener("click",()=>{!de||Ue.dragging||(Ii=de.id,Yn(),lt())});document.querySelector("#range-clear").addEventListener("click",()=>{Ii=Ni="",Yn(),lt()});for(const n of["#range-rings","#range-fill","#range-fill-band","#range-fill-opacity"])document.querySelector(n).addEventListener("change",lt);document.querySelector("#edit-panel").addEventListener("click",n=>{const e=n.target instanceof Element?n.target:null;sn&&!e?.closest(".range-panel")&&(Yn(),lt())},!0);function bl(){document.querySelector("#selected-name").textContent="NONE",document.querySelector("#selected-detail").textContent="",document.querySelector("#distance-readout").textContent="—",document.querySelector("#attitude-readout").textContent="—"}function Dm(n,e){const{unit:t,status:i}=n;de=t;const r=n.position,s=[pm[t.faction],i.toUpperCase()],o=Oi().groups.find(m=>m.id===t.groupId);o&&s.push(`编组:${o.name}`),t.tgt&&s.push("TGT"),t.escort&&t.faction!=="enemy"&&s.push("ESCORT / 护卫目标"),document.querySelector("#selected-name").textContent=t.label,document.querySelector("#selected-detail").textContent=`${t.kind} / ${s.join(" / ")}`;const a=e.units.find(m=>m.unit.id===Ni),l=a&&a.unit!==t?Au(r,a.position,"slant",oh()):null;document.querySelector("#distance-readout").textContent=l?`TO ${a.unit.label}: ${l.distanceKm.toFixed(2)} km / ${l.band}`:"—";const d=Ju(t,e.turn),u=m=>m*180/Math.PI,h=m=>`${u(m)>=0?"+":""}${u(m).toFixed(1)}°`,f=document.querySelector("#attitude-readout");if(d===null){const m=Ku(t,e.turn);f.textContent=m===null?"FACING  FIXED":`FACING ${h(m)}  (FLAT)`}else f.textContent=`YAW ${h(d.yaw)}  PITCH ${h(d.pitch)}  ROLL ${h(d.roll)}`}function ro(n){if(yt?.cancel(),typeof Lt<"u"&&Lt){Mw(n);return}const e=Math.max(0,Math.min(n,pi()));e!==Le&&(Ue.dragging||Dt||rn()&&(yt?.clearSelection(),qa="",Na(),gi(!0),Yr(),Le=e,yn()&&xe&&(xe.setEditor({...xe.read().editor,currentTurn:e}),Ji(xe.read()),ht.clear(),de=null,Oe=bi()),lt(),it()))}function Ha(){const{width:n,height:e}=Io(),t=Fb(gt.extent,gt.extentZ,n/e,Mt.fov,360,n);return It.maxDistance=t.maxDistance,Mt.far=t.far,Mt.near=t.near,Mt.updateProjectionMatrix(),t}function ah(){const n=Ha();It.target.set(0,0,0),Mt.position.copy(new b(0,.65,1).normalize().multiplyScalar(n.distance)),It.update()}function nw(){const n=Ha();It.target.set(0,0,0),Mt.position.set(0,n.distance,.001),It.maxPolarAngle=Math.PI*.499,It.update()}const _n=()=>({label:document.querySelector("#edit-label"),kind:document.querySelector("#edit-kind"),faction:document.querySelector("#edit-faction"),icon:document.querySelector("#edit-icon"),tgt:document.querySelector("#edit-tgt"),escort:document.querySelector("#edit-escort"),hidden:document.querySelector("#edit-hidden"),intangible:document.querySelector("#edit-intangible"),lost:document.querySelector("#edit-lost"),remove:document.querySelector("#edit-delete"),undo:document.querySelector("#edit-undo"),redo:document.querySelector("#edit-redo")});let je=null,zi=!1,Ui="translate",po="translate";const iw=new b,ln=new gn;$r.add(ln);const Ue=new kM(Mt,_t.domElement);Ue.setSize(.85);$r.add(Ue.getHelper());const ut=n=>document.querySelector(n),Tn=n=>n.icon==="air-filled"||n.icon==="air-outline";function Va(n){return Ju(n,Le)??{yaw:ca((Ku(n,Le)??0)-(n.icon==="ground"?Math.PI:0)),pitch:0,roll:0}}function Ns(){return oi()?yn()?[Le]:Array.from({length:ut("#apply-later").checked?Kn()-Le:1},(n,e)=>Le+e):[]}function Im(n,e){Oa(n)&&(n.attitudes??=Array.from({length:Kn()},()=>null),Ns().forEach(t=>{n.attitudes[t]={...e}}))}function Nm(n){if(yn()||!at()||At()?.mapEditRef||!Oe||je||Ue.dragging||Dt||(gi(!0),!Sn()))return;const e=Le,t=e+1,i=new Map(st.map(s=>[s.id,{...Va(s)}])),r=On[e];On.splice(t,0,{summary:n?r.summary:"TACTICAL MOVEMENT / NEW TURN",events:n?r.events.map(s=>({...s})):[]}),st.forEach(s=>{if(s.trackPoints=hp(s.trackPoints??[],t,!0),s.routeBinding&&s.routeBinding.startTurn>=t&&s.routeBinding.startTurn++,s.playerActions?.forEach(o=>{o.turn>=t&&o.turn++,o.recordedTurn>=t&&o.recordedTurn++}),s.positions.splice(t,0,s.positions[e].clone()),n)s.attitudes??=Array.from({length:Kn()-1},()=>null),s.attitudes.splice(t,0,i.get(s.id));else if(s.attitudes){const o=s.attitudes[e];s.attitudes.splice(t,0,o?{...o}:null)}s.destroyedAtTurn!==void 0&&s.destroyedAtTurn>=t&&(s.destroyedAtTurn+=1)}),On[t].events=On[t].events.filter(s=>s.kind!=="destroy"),er(),et=null,Le=t,lt(),it()}function rw(){if(yn()||!at()||At()?.mapEditRef||!Oe||Kn()<=1||je||Ue.dragging||(gi(!0),!Sn()))return;const n=Le;On.splice(n,1),st.forEach(e=>{e.trackPoints=hp(e.trackPoints??[],n,!1),e.routeBinding&&(e.routeBinding.startTurn=Math.max(0,e.routeBinding.startTurn>=n?e.routeBinding.startTurn-1:e.routeBinding.startTurn)),e.positions.splice(n,1),e.attitudes?.splice(n,1),e.playerActions&&(e.playerActions=e.playerActions.filter(t=>t.turn!==n&&t.recordedTurn!==n).map(t=>({...t,turn:t.turn>n?t.turn-1:t.turn,recordedTurn:t.recordedTurn>n?t.recordedTurn-1:t.recordedTurn}))),e.destroyedAtTurn===n?e.destroyedAtTurn=void 0:e.destroyedAtTurn!==void 0&&e.destroyedAtTurn>n&&(e.destroyedAtTurn-=1)}),er(),et=null,Le=Math.min(n,pi()),lt(),it()}function mo(){if(typeof en<"u"&&en?.active()){Ue.detach();return}if(!oi()&&!di()){Ue.detach();return}if(sn||yt?.isPicking()){Ue.detach();return}if(Ue.dragging)return;const n=yt?.selection();if(n&&di()&&Oe&&!Ot&&!je&&!on){ln.position.set(n.position.x,n.position.y,n.position.z).multiplyScalar(rt);const r=n.kind==="marker"?Oi().markers.find(o=>o.id===n.id):void 0,s=r&&Si(r)&&n.pointIndex===void 0?po:"translate";ln.scale.setScalar(1),ln.quaternion.copy(r&&s!=="translate"?Sa(r):new fn),Ue.setMode(s),Ue.setSpace(s==="translate"?"world":"local"),Ue.showX=Ue.showY=Ue.showZ=!0,Ue.attach(ln);return}ln.scale.setScalar(1);const e=Ga();if(at()&&Oe&&!Ot&&e){const r=et?.kind==="track"?st.find(o=>o.id===et.unitId):void 0,s=!!r&&!Tn(r)&&!r.intangible;ln.position.copy(ea(e,s)),ln.quaternion.identity(),Ue.setMode("translate"),Ue.setSpace("world"),Ue.showX=Ue.showZ=!0,Ue.showY=!s,Ue.attach(ln);return}if(Gt||zt||Cn){Ue.detach();return}if(!Oe||Ot||!de||je||on||!Ki().length||ht.size>1&&Ui==="rotate"){Ue.detach();return}const t=ht.size>1?bo():Fn(de);ln.position.copy(t),ht.size===1&&ln.position.copy(ml(de,t,St,$n)),iw.subVectors(ln.position,t);const i=Va(de);ln.quaternion.setFromEuler(new Zn(i.pitch,i.yaw,i.roll,"YXZ")),Ue.setMode(Ui),Ue.setSpace(Ui==="translate"?"world":"local"),Ue.showX=Ui==="translate"||Tn(de),Ue.showY=!0,Ue.showZ=Ui==="translate"||Tn(de),Ue.attach(ln)}let la="";function sw(){const n=Nn?.panels.equipment;if(!n||!xe)return;if(Lt){n.replaceChildren(),la="";return}const e=At(),t=JSON.stringify([xe.revision,e?.id,Le,de?.id,Oe,at(),Vt(),de?za(de):null]);if(t===la&&n.childElementCount)return;la=t,n.replaceChildren();const i=document.createElement("label");i.className="equipment-unit-choice",i.textContent="配置单位";const r=document.createElement("select");r.id="equipment-unit",r.setAttribute("aria-label","配置装备的单位"),r.add(new Option("请选择单位",""));for(const l of st)r.add(new Option(l.label,l.id));r.value=de?.id??"",r.disabled=Vt(),i.append(r),n.append(i),r.addEventListener("change",()=>{if(Vt()||!r.isConnected)return;const l=st.find(d=>d.id===r.value);zn(l?[l]:[])});const s=document.createElement("div");if(s.id="equipment-editor-body",n.append(s),!e||!de||je){s.textContent=je?"待落位":"未选择单位";return}const o=e.id,a=de.id,c=Le;ng(s,{read:()=>Tm().project,busy:()=>tn||Vt()||de?.id!==a||At()?.id!==o||Le!==c,report:Qt,commit:(l,d)=>{if(!xe||!at()||!Oe||Vt()||de?.id!==a||At()?.id!==o||Le!==c)throw new Error("单位或编辑状态已变化，请重新选择装备。");if(!rn())throw new Error("请先完成当前编辑。");const u=xe.read();xe.commit({...u,project:l},d,u),Qi(),Un(!0),Nn?.select("equipment")}},{mode:"session",sessionId:o,unitId:a,turn:c,editable:at()&&Oe&&!Vt()})}function ow(n){if(!xe||!at()||At()?.mapEditRef||tn||Vt())throw new Error("请先完成当前操作，再新建玩家。");if(!rn())throw new Error("当前编辑尚未保存。");const e=xe.read(),t=At().id,i=`player-unit-${crypto.randomUUID()}`,s=up(e.project,t,i,n.playerId,n.aircraftRef,n.loadout,{x:0,y:2.4,z:0},Le).sessions.find(o=>o.id===t).units.find(o=>o.id===i);Un(!0),ki(!1),gi(!0),on=!1,Yn(),yt?.cancel(),yt?.clearSelection(),Gt=zt=Cn=!1,et=null,ht.clear(),de=null,bl(),je=Ba({...s,trackPoints:void 0,positions:s.positions.map(o=>({x:o.x*rt,y:o.y*rt,z:o.z*rt}))}),Di={input:structuredClone(n),player:{...s.player},sessionId:t,turn:Le,revision:xe.revision},zi=!1,It.enabled=!0,_t.domElement.style.cursor="",lt(),it()}function aw(){const n=Di;!n||!je||!xe||n.sessionId!==At()?.id||n.turn!==Le||n.revision!==xe.revision||!at()||(zi=!0,It.enabled=!1,_t.domElement.style.cursor="crosshair",it())}function cw(n){const e=Di,t=je;if(!e||!t||!xe)return!1;if(!at()||!Oe||tn||Ue.dragging||Dt||e.sessionId!==At()?.id||e.turn!==Le||e.revision!==xe.revision)return Qt("玩家放置状态已变化，请取消后重新创建。"),!1;const i=xe.read(),r=n.clone();r.y=t.intangible?Fn(t).y:Tn(t)?Math.max(Fn(t).y,St(r.x,r.z)+$n):St(r.x,r.z);try{const s=up(i.project,e.sessionId,t.id,e.input.playerId,e.input.aircraftRef,e.input.loadout,{x:r.x/rt,y:r.y/rt,z:r.z/rt},Le),o=s.sessions.find(c=>c.id===e.sessionId).units.find(c=>c.id===t.id);o.icon=t.icon,o.faction=t.faction;const a=o.id;return xe.commit({...i,project:s},"创建玩家单位",i),Qi(),Un(!0),zn(st.filter(c=>c.id===a)),Qt(`${e.player.callsign} 已放置`),!0}catch(s){return Qt(s instanceof Error?s.message:String(s)),!1}}function lw(n,e,t){if(!xe||!at()||At()?.mapEditRef||tn||Vt())throw new Error("当前回合为只读或仍有操作待完成。");if(Oe||Un(!0),!rn())throw new Error("当前编辑尚未保存。");const i=xe.read(),r=At().id,s=xg(i.project,r,n,Le,e,t==="drop"?"jettison":"use",`player-action-${crypto.randomUUID()}`);xe.commit({...i,project:s},t==="drop"?"登记上一回合抛弃":"登记上一回合使用",i),Qi(),Un(!0),Qt(`已登记${t==="drop"?"抛弃":"使用"}`)}function Um(){if(!Su||!zr||!xe)return;const n=At(),e=!!n?.mapEditRef;zr.hidden=!br||e;const t=JSON.stringify([xe.revision,n?.id,Le,de?.id,at(),Oe,br,tn,Vt(),Di,zi]);t!==ol&&(ol=t,Su.sync({project:xe.read().project,revision:xe.revision,sessionId:n?.id??"",turn:Le,selectedUnitId:de?.id,editable:at()&&!tn&&(Di!==null||!Vt()),mapOnly:e,...Di?{pending:{player:{...Di.player},aircraftRef:{...Di.input.aircraftRef},loadout:structuredClone(Di.input.loadout),armed:zi}}:{}}))}function tp(){const n=je??de,e=Ga();if(e)for(const s of["x","y","z"])ut(`#path-${s}`).value=e[s].toFixed(2);if(!n)return;const t=ht.size>1?bo():Fn(n),i=Va(n);for(const s of["x","y","z"])ut(`#edit-${s}`).value=t[s].toFixed(2);const r=document.querySelector("#edit-height");r&&(r.value=(t.y*1e3/rt).toFixed(1));for(const s of["pitch","yaw","roll"])ut(`#edit-${s}`).value=qt.radToDeg(i[s]).toFixed(2)}function it(){for(const c of Array.from(document.querySelectorAll('#edit-panel [data-mode-disabled="true"]')))c.disabled=!1,delete c.dataset.modeDisabled;Fm(),pw();const n=_n();ut("#canvas-width").value=String(gt.extent*2/rt),ut("#canvas-height").value=String(gt.extentZ*2/rt),ut("#canvas-samples").value=String(gt.size),Nn||(document.querySelector("#terrain-editor").toggleAttribute("hidden",!Ot),document.querySelector("#unit-editor").toggleAttribute("hidden",Ot)),document.querySelector("#tab-terrain").setAttribute("aria-pressed",String(Ot)),document.querySelector("#tab-units").setAttribute("aria-pressed",String(!Ot)),document.querySelector("#terrain-undo").disabled=!xe?.canUndo||!!Dt,document.querySelector("#terrain-redo").disabled=!xe?.canRedo||!!Dt;const e=je??de;ut("#turn-summary-edit").value=On[Le].summary,ut("#turn-summary-edit").disabled=!!je,ut("#edit-lost").max=String(Kn());for(const c of["#turn-add","#turn-copy","#turn-delete"])document.querySelector(c).disabled=!!je||Ue.dragging||c==="#turn-delete"&&Kn()===1;n.undo.disabled=!xe?.canUndo||!!je,n.redo.disabled=!xe?.canRedo||!!je,n.remove.disabled=de===null||!!je,document.querySelector("#edit-copy").disabled=!ht.size||!!je,document.querySelector("#tool-rotate").disabled=ht.size>1,document.querySelector("#selection-count").textContent=`SELECTED ${ht.size} / MOVABLE ${Ki().length}`,document.querySelector("#tool-box").setAttribute("aria-pressed",String(on)),document.querySelector("#unit-picker").replaceChildren(...st.map(c=>{const l=document.createElement("button"),d=Oi().groups.find(u=>u.id===c.groupId);return l.textContent=d?`${c.label} · ${d.name}`:c.label,d&&(l.style.borderColor=d.color),l.setAttribute("aria-pressed",String(ht.has(c.id))),l.disabled=!!je,l.addEventListener("click",u=>_l(c,u.shiftKey||u.ctrlKey||u.metaKey||ut("#select-additive").checked)),l}));const i=["urban","erase-urban"].includes(document.querySelector("#terrain-brush").value);for(const c of["#urban-density","#urban-angle","#urban-seed"])ut(c).closest("label").toggleAttribute("hidden",!i);ut("#terrain-strength").closest("label").toggleAttribute("hidden",i),ut("#terrain-flat").closest("label").toggleAttribute("hidden",i),[n.label,n.kind,n.faction,n.icon,n.tgt,n.escort,n.hidden,n.intangible,n.lost].filter(Boolean).forEach(c=>{c.disabled=!e}),n.label.value=e?.label??"",n.kind.value=e?.kind??"",n.faction.value=e?.faction??"enemy",n.icon.value=e?.icon??"air-outline",n.tgt.checked=e?.tgt===!0,n.hidden&&(n.hidden.checked=e?.hidden===!0),n.intangible&&(n.intangible.checked=e?.intangible===!0),n.escort.checked=e?.escort===!0&&e.faction!=="enemy",n.lost.value=e?.destroyedAtTurn===void 0?"":String(e.destroyedAtTurn+1),document.querySelector("#placement-actions").toggleAttribute("hidden",!je),document.querySelector("#edit-state").textContent=je?zi?"PLACING":"PENDING":ht.size>1?`GROUP MOVE / PRIMARY ${de?.label??"-"} / TURN ${Le+1}`:de?`TURN ${Le+1} / ${de.attitudes?.[Le]?"MANUAL ATTITUDE":"AUTO ATTITUDE"}`:"NONE",document.querySelector("#edit-place").disabled=zi,document.querySelector("#edit-auto").disabled=!de||!!je||ht.size>1;const r=!je&&ht.size>1?bo():e?Fn(e):new b,s=e?Va(e):{yaw:0,pitch:0,roll:0};for(const c of["x","y","z"]){const l=ut(`#edit-${c}`);l.disabled=!e||!!je&&c!=="y",l.value=e?r[c].toFixed(2):""}for(const c of["pitch","yaw","roll"]){const l=ut(`#edit-${c}`);l.disabled=!e||!je&&ht.size>1||c!=="yaw"&&!Tn(e),l.value=e?qt.radToDeg(s[c]).toFixed(2):""}const o=document.querySelector("#edit-height");o&&(o.value=e?(r.y*1e3/rt).toFixed(1):"",o.disabled=!e),document.querySelector("#tool-move").setAttribute("aria-pressed",String(Ui==="translate")),document.querySelector("#tool-rotate").setAttribute("aria-pressed",String(Ui==="rotate"));const a=!!At()?.mapEditRef;document.querySelector("#tab-units").toggleAttribute("hidden",a),a&&!Nn&&document.querySelector("#unit-editor").setAttribute("hidden","");for(const c of["#turn-add","#turn-copy","#turn-delete"])yn()&&(document.querySelector(c).disabled=!0);yn()&&(ut("#apply-later").disabled=!0),hw(),Ei(),mo(),Nn?.sync({editing:Oe,editable:di(),mapOnly:a,active:br,playerView:Lt,viewerCanUndo:!!xe?.canUndo,viewerCanRedo:!!xe?.canRedo}),Em?.sync(),yt?.sync(),typeof en<"u"&&en?.sync(),sw(),Um()}function Fm(){!oi()&&!di()&&(Oe=!1),at()||(Ot=Gt=Cn=zt=!1,et=null),Nn||document.querySelector("#edit-panel").toggleAttribute("hidden",!Oe),document.querySelector("#mode-readout").textContent=Oe?yn()?"草稿编辑":"EDIT":"VIEW"}const dw=new Set(["edit-x","edit-y","edit-z","edit-height","edit-pitch","edit-yaw","edit-roll","edit-auto","edit-lost","turn-summary-edit","select-clear","select-additive","tool-box","tool-move","tool-rotate","move-snap","rotate-snap","trail-display","trail-turns","edit-undo","edit-redo","tab-units"]);function np(n){return dw.has(n.id)||!!n.closest("#unit-picker")}function km(n){return!!n.closest(".sidebar-header,.sidebar-nav,.range-panel,.trail-panel,.archive-panel,.selection-panel,.sidebar-bound-list,#unit-picker,#route-list,#track-list")||["route-select","route-group-select","route-select-bound","route-visible","route-labels","select-clear","select-additive"].includes(n.id)}function uw(n,e){const t=_n().escort;t.disabled=!n||!e||n.faction==="enemy",t.checked=n?.escort===!0&&n.faction!=="enemy"}function hw(){const n=oi()&&Oe,e=at()&&Oe;for(const r of Array.from(document.querySelectorAll("#unit-editor input, #unit-editor button, #unit-editor select, #unit-editor textarea, #terrain-editor input, #terrain-editor button, #terrain-editor select, #route-section input, #route-section button, #route-section select, #turn-summary-edit")))km(r)||(!e&&(!n||!np(r))?r.disabled=!0:e&&r.dataset.modeDisabled==="true"&&(r.disabled=!1),r.dataset.modeDisabled=String(!e&&(!n||!np(r))));const t=je??de;for(const r of["edit-x","edit-y","edit-z","edit-height","edit-pitch","edit-yaw","edit-roll","edit-auto"]){const s=document.getElementById(r);(!n||t&&!je&&!Oa(t))&&(s.disabled=!0)}const i=_n().lost;uw(t,e),i.disabled=!t||!n||!e&&!rh(t),i.min=String(e?1:Le+1),i.max=String(e?Kn():Le+1),i.step="1"}for(const n of["click","change","input","keydown","pointerdown"])document.querySelector("#edit-panel").addEventListener(n,e=>{const t=e.target instanceof Element?e.target.closest("button, input, select, textarea"):null;!t||km(t)||t.closest("#workflow-panel")||t.closest('[data-sidebar-panel="groups"],[data-sidebar-panel="markers"],[data-sidebar-panel="drawing"],[data-sidebar-panel="equipment"],[data-sidebar-panel="links"]')||at()&&Oe||(e.preventDefault(),e.stopImmediatePropagation())},!0);function Yr(){Di=null,je=null,zi=!1,_t.domElement.style.cursor="",It.enabled=!0,it()}function Un(n){if(n&&!oi()&&!di()){Fm(),Ei();return}rn()&&(yt?.cancel(),typeof en<"u"&&en?.cancel(),sn&&Yn(),Oe=n,Nn||document.querySelector("#edit-panel").toggleAttribute("hidden",!n),document.querySelector("#mode-readout").textContent=n?"EDIT":"VIEW",_t.domElement.style.cursor=n&&Ot?"crosshair":"",n||(Gt=zt=!1,et=null,ch(),Wa(),Ot=!1,Fi.visible=!1,gi(!0),on=!1,Yr()),lt(),it())}function Ai(n,e=!1,t="metadata"){if(!oi()||!Oe||t==="metadata"&&!at()||de&&!je&&(t==="pose"&&!Oa(de)||t==="loss"&&!rh(de)))return;if(je){n(je),cl(je,je.positions.map((s,o)=>o)),it();return}if(!de)return;const i=de.icon,r=de.intangible;Sn(t==="metadata"?"author":"draft")&&(n(de),Ds(de)&&(t==="pose"||de.icon!==i||de.intangible!==r)&&cl(de),e&&Zb(de),lt(),it())}function Rs(n){!oi()||!Oe||n==="rotate"&&ht.size>1||(on=!1,Ui=n,it())}Ue.addEventListener("dragging-changed",n=>{if(It.enabled=!n.value,n.value){Ei();return}rn("Transform units / path"),it()});let Rn=null,Ca=null,Pa=!1,Li=null;function fw(n,e,t){if(!jn)return;const i=r=>({x:r.x+t.x/rt,y:r.y+t.y/rt,z:r.z+t.z/rt});if(e.kind==="marker"){const r=n.markers.find(o=>o.id===e.id),s=jn.markers.find(o=>o.id===e.id);if(r&&s)if(Si(r)&&e.pointIndex!==void 0){const o=ls(r);o[e.pointIndex]=i(o[e.pointIndex]);const a=Bc(r,o);Object.assign(s,a)}else s.position=i(r.position),r.controlPoints&&(s.controlPoints=r.controlPoints.map(i))}else{const r=n.drawings.find(o=>o.id===e.id),s=jn.drawings.find(o=>o.id===e.id);r&&s&&(s.points=r.points.map((o,a)=>e.pointIndex===void 0||a===e.pointIndex?i(o):{...o}))}}const La=new Map;let eo=[];const bu=new b;Ue.addEventListener("mouseDown",()=>{if(!oi()&&!(di()&&yt?.selection())||!Oe||!at()&&et){Ue.detach();return}Pa=!1,Ca=xr??xe?.read()??null,Rn=yl(),Li=yt?.selection()??null,bu.copy(ln.position),eo=Ns(),La.clear(),Ki().forEach(n=>La.set(n.id,n.positions.map(e=>e.clone())))});Ue.addEventListener("mouseUp",()=>{Rn&&!al(Rn,yl())&&(xr=Ca),Rn=null,Ca=null,Pa=!1,Li=null});Ue.addEventListener("objectChange",()=>{if(!oi()&&!(di()&&Li)||!Oe||!Rn||Pa)return;if(Li&&Rn.sceneTools){if(!di())return;try{const e=Rn.sceneTools.markers.find(i=>i.id===Li.id),t=jn?.markers.find(i=>i.id===Li.id);if(Li.kind==="marker"&&Li.pointIndex===void 0&&e&&t&&Si(e)&&po!=="translate"){const i=new Zn().setFromQuaternion(ln.quaternion,"YXZ"),r=po==="rotate"?{pitch:i.x,yaw:i.y,roll:i.z}:e.attitude??{pitch:0,yaw:0,roll:0},s=Ue.axis??"XYZ",o=s.includes("X")?"x":s.includes("Y")?"y":"z",a=(e.sizeKm??.12)*(po==="scale"?Math.abs(ln.scale[o]):1);Object.assign(t,um(e,e.position,r,a))}else fw(Rn.sceneTools,Li,ln.position.clone().sub(bu))}catch(e){Qt(e instanceof Error?e.message:String(e));return}yt?.syncPosition?yt.syncPosition():yt?.sync(),typeof en<"u"&&en?.update();return}const n=Ga();if(n){if(!at())return;const e=et?.kind==="track"?st.find(t=>t.id===et.unitId):void 0;n.x=ln.position.x,n.y=e?.intangible?ln.position.y:Math.max(0,ln.position.y),n.z=ln.position.z,e&&!Tn(e)&&!e.intangible&&(n.y=St(n.x,n.z)),et?.kind==="waypoint"&&er(),lt(),tp();return}if(de){if(Ui==="translate"){const e=ln.position.clone().sub(bu),t=Ki().filter(i=>Tn(i)&&!i.intangible).map(i=>La.get(i.id)).filter(Boolean);t.length&&(e.y=Math.max(e.y,...t.flatMap(i=>eo.map(r=>{const s=i[r];return Math.max(0,St(s.x+e.x,s.z+e.z))-s.y})))),Ki().forEach(i=>{const r=La.get(i.id);if(r){at()&&!yn()&&(i.routeBinding=void 0),eo.forEach(o=>i.positions[o].copy(r[o]).add(e));const s=Rn?.units.find(o=>o.id===i.id)?.trackPoints;at()&&s&&(i.trackPoints=s.map(o=>eo.includes(o.segment)&&eo.includes(o.segment+1)?{...o,x:o.x+e.x,y:o.y+e.y,z:o.z+e.z}:{...o})),cl(i,eo),Mu(i)}})}else{const e=new Zn().setFromQuaternion(ln.quaternion,"YXZ");Im(de,{yaw:e.y,pitch:Tn(de)?e.x:0,roll:Tn(de)?e.z:0})}Ui!=="translate"&&Mu(de),Qb(),tp()}});function wo(n){Zi.x=n.clientX/innerWidth*2-1,Zi.y=-(n.clientY/innerHeight)*2+1,$i.setFromCamera(Zi,Mt);let e=0;const t=new b;for(let i=2;i<Mt.far;i+=2){const r=$i.ray.at(i,t);if(r.y<=St(r.x,r.z)){let s=e,o=i;for(let c=0;c<18;c++){const l=(s+o)/2,d=$i.ray.at(l,t);d.y>St(d.x,d.z)?s=l:o=l}const a=$i.ray.at(o,new b);return a.y=St(a.x,a.z),a}e=i}return null}let on=!1,li=null;const Cs=document.createElement("div");Cs.className="selection-box";Cs.hidden=!0;document.querySelector("#app").appendChild(Cs);function gi(n=!1,e){if(!li)return;const t=li;if(li=null,Cs.hidden=!0,It.enabled=!zi,_t.domElement.hasPointerCapture(t.pointerId)&&_t.domElement.releasePointerCapture(t.pointerId),n||!e)return;const i=Math.min(t.x,e.clientX),r=Math.max(t.x,e.clientX),s=Math.min(t.y,e.clientY),o=Math.max(t.y,e.clientY);$r.updateMatrixWorld(!0),Mt.updateMatrixWorld(!0);const a=st.filter(c=>{if(Is(c,Le)==="wreck")return!1;const d=mi.get(c.id).userData.parts.icon.getWorldPosition(new b).project(Mt),u=(d.x+1)*innerWidth/2,h=(1-d.y)*innerHeight/2;return d.z>=-1&&d.z<=1&&u>=i&&u<=r&&h>=s&&h<=o});zn(t.additive?[...new Set([...Ti(),...a])]:a),ht.size>1&&(Ui="translate"),it()}function ll(n){Zi.x=n.clientX/innerWidth*2-1,Zi.y=-(n.clientY/innerHeight)*2+1,$i.setFromCamera(Zi,Mt);const e=$i.intersectObjects(nn.children.filter(t=>t.userData.editorTools),!0).filter(t=>dl(t.object)).filter(t=>{for(let i=t.object;i;i=i.parent)if(i.userData.editorTool)return!0;return!1});return e.find(t=>t.object.userData.editorTool?.pointIndex!==void 0)??e[0]}_t.domElement.addEventListener("pointerdown",n=>{if(n.button!==0||!br||n.altKey||je||Ot||Ue.dragging||Ue.axis!==null||Dt||sn||yt?.isPicking())return;if(en?.active()){n.preventDefault(),n.stopImmediatePropagation();const t=wl(n)[0];for(let r=t?.object??null;r;r=r.parent){const s=r.userData.unit;if(s){en.pick("unit",s.id);return}}const i=ll(n);for(let r=i?.object??null;r;r=r.parent)if(r.userData.editorTool?.kind==="marker"){yt?.selectObject?.(i.object);return}return}if(!Oe||on||Gt||zt||Cn)return;const e=ll(n);e&&yt?.selectObject?.(e.object)&&(n.preventDefault(),n.stopImmediatePropagation())},!0);_t.domElement.addEventListener("dblclick",n=>{n.button!==0||!br||Vt()||sn||Gt||zt||Cn||Ot||on||Ue.axis!==null||wl(n).length||typeof ll<"u"&&ll(n)||$i.intersectObject(Gi,!0).some(t=>t.object.userData.pathPoint)||zn([])});_t.domElement.addEventListener("pointerdown",n=>{if(Lt||yt?.isPicking()||sn||!Oe||Ot||Gt||Cn||et||je||n.button!==0||!(on||n.shiftKey))return;n.stopImmediatePropagation(),n.preventDefault();const e=wl(n)[0]?.object.userData.unit;if(e&&!on){_l(e,!0);return}It.enabled=!1,Ue.axis=null,li={x:n.clientX,y:n.clientY,additive:n.shiftKey||n.ctrlKey||n.metaKey||ut("#select-additive").checked,pointerId:n.pointerId},Cs.hidden=!1,Cs.style.cssText=`left:${n.clientX}px;top:${n.clientY}px;width:0;height:0`,_t.domElement.setPointerCapture(n.pointerId)},!0);_t.domElement.addEventListener("pointermove",n=>{li&&(n.stopImmediatePropagation(),Cs.style.cssText=`left:${Math.min(li.x,n.clientX)}px;top:${Math.min(li.y,n.clientY)}px;width:${Math.abs(n.clientX-li.x)}px;height:${Math.abs(n.clientY-li.y)}px`)},!0);_t.domElement.addEventListener("pointerup",n=>{li&&(n.stopImmediatePropagation(),gi(!1,n))},!0);_t.domElement.addEventListener("pointercancel",()=>gi(!0));_t.domElement.addEventListener("pointerdown",n=>{if(yt?.isPicking()||sn||n.button!==0||Ot||Gt||zt||Cn||et)return;if(je&&zi){if(!at()||!Oe)return;const t=wo(n);if(!t)return;if(Di){n.stopImmediatePropagation(),cw(t);return}const i=je,{count:r,spacing:s}=sh(),o=Math.ceil(Math.sqrt(r)),a=[];if(!Sn())return;for(let c=0;c<r;c++){const l=Ba(za(i)),d=qr++;l.id=`unit-${d}`,l.label=r===1?i.label:`${i.label}-${String(c+1).padStart(2,"0")}`;const u=t.clone();u.x+=c%o*s,u.z+=Math.floor(c/o)*s;const h=St(u.x,u.z);u.y=l.intangible?Fn(i).y:Tn(l)?Math.max(Fn(i).y,h+$n):h,l.positions=Array.from({length:Kn()},()=>u.clone()),st.push(l),a.push(l),Po(l)}je=null,zi=!1,It.enabled=!0,_t.domElement.style.cursor="",Do(),zn(a),Rs("translate");return}if(je||Ue.dragging||Oe&&Ue.axis!==null)return;const e=wl(n)[0]?.object.userData.unit;e&&_l(e,Oe&&(n.ctrlKey||n.metaKey||ut("#select-additive").checked))});document.querySelector("#edit-place").addEventListener("click",()=>{je&&(zi=!0,It.enabled=!1,_t.domElement.style.cursor="crosshair",it())});document.querySelector("#edit-cancel").addEventListener("click",Yr);document.querySelector("#tool-move").addEventListener("click",()=>Rs("translate"));document.querySelector("#tool-rotate").addEventListener("click",()=>Rs("rotate"));for(const n of["x","y","z"])ut(`#edit-${n}`).addEventListener("change",()=>{const e=Number(ut(`#edit-${n}`).value);if(Number.isFinite(e)){if(!je&&ht.size>1){const t=new b;t[n]=e-bo()[n],Ta(t)}else if(je)Ai(t=>{Fn(t,!0)[n]=n==="y"&&!t.intangible?Math.max(0,e):e});else if(de){const t=new b;t[n]=e-Fn(de)[n],Ta(t)}}});document.querySelector("#edit-height")?.addEventListener("change",()=>{const n=ut("#edit-height"),e=Number(n.value);if(!n.value.trim()||!Number.isFinite(e)){it();return}const t=je?Fn(je).y:de?ht.size>1?bo().y:Fn(de).y:void 0,i=(je?[je]:Ki()).some(s=>Ds(s)&&(je?s.positions:Ns().map(o=>s.positions[o])).some(o=>o.y!==St(o.x,o.z)));if(t!==void 0&&n.value===(t*1e3/rt).toFixed(1)&&!i)return;const r=e*rt/1e3;if(je)Ai(s=>{Fn(s,!0).y=s.intangible?r:Math.max(0,r)});else if(de){const s=new b(0,r-(ht.size>1?bo().y:Fn(de).y),0);Ta(s)}});for(const n of["pitch","yaw","roll"])ut(`#edit-${n}`).addEventListener("change",()=>{const e=Number(ut(`#edit-${n}`).value);Number.isFinite(e)&&Ai(t=>{const i={...Va(t),[n]:qt.degToRad(e)};je?t.attitudes=Array.from({length:Kn()},()=>({...i})):Im(t,i)},!1,"pose")});document.querySelector("#edit-auto").addEventListener("click",()=>Ai(n=>{n.attitudes&&Ns().forEach(e=>{n.attitudes[e]=null})},!1,"pose"));document.querySelector("#turn-add").addEventListener("click",()=>Nm(!1));document.querySelector("#turn-copy").addEventListener("click",()=>Nm(!0));document.querySelector("#turn-delete").addEventListener("click",rw);ut("#turn-summary-edit").addEventListener("change",()=>{if(!oi()||!Oe)return;const n=ut("#turn-summary-edit").value.trim();n===On[Le].summary||je||Rm({type:"set-turn-summary",sessionId:xe?.read().editor.sessionId??"session-working",turn:Le,summary:n||"UNTITLED TURN"})});ut("#move-snap").addEventListener("change",()=>Ue.setTranslationSnap(Number(ut("#move-snap").value)>0?Number(ut("#move-snap").value):null));ut("#rotate-snap").addEventListener("change",()=>Ue.setRotationSnap(Number(ut("#rotate-snap").value)>0?qt.degToRad(Number(ut("#rotate-snap").value)):null));document.querySelector("#edit-copy").addEventListener("click",Cm);document.querySelector("#select-clear").addEventListener("click",()=>zn([]));document.querySelector("#tool-box").addEventListener("click",()=>{on=!on,it()});document.querySelector("#edit-add").addEventListener("click",Kb);document.querySelector("#edit-delete").addEventListener("click",Jb);document.querySelector("#edit-undo").addEventListener("click",Sl);document.querySelector("#edit-redo").addEventListener("click",Ml);_n().label.addEventListener("change",()=>{if(je){Ai(n=>{n.label=_n().label.value||n.id});return}de&&Rm({type:"rename-unit",sessionId:xe?.read().editor.sessionId??"session-working",unitId:de.id,label:_n().label.value||de.id})});_n().kind.addEventListener("change",()=>Ai(n=>{n.kind=_n().kind.value||"UNKNOWN"}));_n().faction.addEventListener("change",()=>Ai(n=>{n.faction=_n().faction.value,n.faction==="enemy"&&delete n.escort},!0));_n().icon.addEventListener("change",()=>Ai(n=>{n.icon=_n().icon.value},!0));_n().tgt.addEventListener("change",()=>Ai(n=>{n.tgt=_n().tgt.checked}));_n().escort.addEventListener("change",()=>{const n=je??de;if(!n||n.faction==="enemy"||!at()||!Oe){it();return}Ai(e=>{e.escort=_n().escort.checked})});_n().hidden?.addEventListener("change",()=>Ai(n=>{n.hidden=_n().hidden.checked}));_n().intangible?.addEventListener("change",()=>Ai(n=>{if(n.intangible=_n().intangible.checked,!n.intangible){const e=je===n?n.positions.map((t,i)=>i):Ns();e.forEach(t=>{const i=n.positions[t];i.y=Tn(n)?Math.max(i.y,St(i.x,i.z),0):St(i.x,i.z)}),n.trackPoints?.forEach(t=>{e.includes(t.segment)&&e.includes(t.segment+1)&&(t.y=Tn(n)?Math.max(t.y,St(t.x,t.z),0):St(t.x,t.z))})}}));_n().lost.addEventListener("change",()=>{if(!oi()||!Oe||de&&!rh(de))return;const n=_n().lost.value.trim();if(yn()&&n!==""&&Number(n)!==Le+1){Qt("损失回合仅可留空或填写当前草稿回合"),it();return}Ai(e=>{const t=Number(n),i=e.destroyedAtTurn;e.destroyedAtTurn=n===""||Number.isNaN(t)?void 0:Math.max(0,Math.min(t-1,pi())),yn()&&i!==e.destroyedAtTurn&&(On[Le].events=On[Le].events.filter(r=>r.kind!=="destroy"||r.target!==e.id),e.destroyedAtTurn===Le&&On[Le].events.push({kind:"destroy",target:e.id})),er()},!0,"loss")});document.querySelector("#prev-turn").addEventListener("click",()=>ro(Le-1));document.querySelector("#next-turn").addEventListener("click",()=>ro(Le+1));addEventListener("keydown",n=>{const e=n.key.toLowerCase();if(typeof en<"u"&&en?.active()&&n.key==="Escape"){en.cancel(),it(),n.preventDefault();return}if(yt?.isPicking()){n.key==="Escape"&&(yt.cancel(),lt(),n.preventDefault());return}if(sn&&n.key==="Escape"){Yn(),lt(),n.preventDefault();return}if(!(sn&&["e","t","b","w","q","d","a","pageup","pagedown"].includes(e))){if(n.key==="Escape"&&Ue.dragging&&Li){Ue.reset(),Rn&&(jn=Rn.sceneTools?structuredClone(Rn.sceneTools):void 0),Rn=null,Ca=null,Pa=!0,Li=null,yt?.sync(),n.preventDefault();return}if(n.key==="Escape"&&Ue.dragging&&et){if(Ue.reset(),Rn){const t=Rn;mn.splice(0,mn.length,...t.routes.map(i=>({...i,waypoints:i.waypoints.map(r=>({...r}))}))),En=t.activeRouteId,st.forEach(i=>{const r=t.units.find(s=>s.id===i.id);r&&(i.positions=r.positions.map(s=>new b(s.x,s.y,s.z)),i.trackPoints=r.trackPoints?.map(s=>({...s})))}),Rn=null,Pa=!0,lt(),it()}n.preventDefault();return}if(n.key==="Escape"&&(Gt||zt||et)){Gt=zt=!1,et=null,lt(),it();return}if(n.key==="Escape"&&Dt){Wa(!0);return}if(n.key==="Escape"&&je){Yr();return}if(!n.target?.matches("input, select, textarea, [contenteditable]")&&document.querySelector("#manager-panel").hidden&&!(typeof Lt<"u"&&Lt&&["t","b","w","q","d","a","pageup","pagedown"].includes(e))){if(e==="t"&&Oe){Nn?Nn.select(Ot?"units":"terrain"):ki(!Ot);return}if(!((Ot||et||Gt||zt)&&["b","w","q","d","a","pageup","pagedown"].includes(e))){if(n.key==="Escape"){li?gi(!0):Ue.dragging?Ue.reset():(on=!1,zn([]));return}if(Oe&&e==="b"&&(on=!on,it()),Oe&&(n.ctrlKey||n.metaKey)&&e==="d"){n.preventDefault(),Cm();return}if(Oe&&(n.ctrlKey||n.metaKey)&&e==="a"){n.preventDefault(),je||zn(st.filter(t=>Is(t,Le)==="active"));return}if(Oe&&e==="w"&&Rs("translate"),Oe&&e==="q"&&Rs("rotate"),(n.ctrlKey||n.metaKey)&&e==="z"){n.preventDefault(),Sl();return}if((n.ctrlKey||n.metaKey)&&e==="y"){n.preventDefault(),Ml();return}if(n.key==="ArrowLeft"&&ro(Le-1),n.key==="ArrowRight"&&ro(Le+1),n.key==="Home"&&ro(0),n.key==="End"&&ro(Sm()),e==="r"&&ah(),e==="e"&&Un(!Oe),n.key==="PageUp"&&Oe&&de&&(n.preventDefault(),Ta(new b(0,10,0))),n.key==="PageDown"&&Oe&&de&&(n.preventDefault(),Ta(new b(0,-10,0))),e==="f"&&de){const t=wr(Le).units.find(i=>i.unit===de);t&&(It.target.set(t.position.x,t.position.y*.35,t.position.z),It.update())}}}}});function Ga(){if(!at()||!et)return null;if(et.kind==="waypoint")return mn.flatMap(e=>e.waypoints).find(e=>e.id===et.id)??null;const n=et;return st.find(e=>e.id===n.unitId)?.trackPoints?.find(e=>e.id===n.id)??null}function er(){if(yn()||!at())return;const n=new Set;for(const e of st){const t=e.routeBinding,i=mn.find(a=>a.id===t?.routeId);if(!t||!i?.waypoints.length)continue;const r=t.offset??{x:0,y:0,z:0},s=i.waypoints.map(a=>({x:a.x+r.x,y:a.y+r.y,z:a.z+r.z})),o=og(e.positions,s,t.startTurn,e.destroyedAtTurn);e.positions=o.map((a,c)=>new b(a.x,c<=t.startTurn||e.intangible?a.y:Tn(e)?Math.max(a.y,St(a.x,a.z)+$n):St(a.x,a.z),a.z)),n.add(e.id)}for(let e=1;e<Kn();e++){const t=new Map;st.filter(s=>n.has(s.id)&&s.routeBinding?.formationId&&e>s.routeBinding.startTurn&&(s.destroyedAtTurn===void 0||e<=s.destroyedAtTurn)).forEach(s=>{const o=s.routeBinding.formationId;t.set(o,[...t.get(o)??[],s])});for(const s of t.values()){const o=s.filter(c=>Tn(c)&&!c.intangible);let a=0;o.forEach(c=>{const l=c.routeBinding,d=mn.find(m=>m.id===l.routeId),u=d.waypoints[Math.min(e-l.startTurn-1,d.waypoints.length-1)],h=c.positions[e],f=u.y+(l.offset?.y??0);h.y=f,a=Math.max(a,St(h.x,h.z)+$n-f)}),o.forEach(c=>{c.positions[e].y+=a})}const i=st.filter(s=>!s.intangible).map(s=>({id:s.id,point:s.positions[e],fixed:!n.has(s.id)||!!s.routeBinding?.formationId||e<=(s.routeBinding?.startTurn??pi())||s.destroyedAtTurn!==void 0&&e>s.destroyedAtTurn})),r=ag(i,8);for(const s of st){if(!n.has(s.id))continue;const o=s.routeBinding;if(!(e<=o.startTurn)){if(s.destroyedAtTurn!==void 0&&e>s.destroyedAtTurn)s.positions[e].copy(s.positions[s.destroyedAtTurn]);else if(!o.formationId){const a=r.get(s.id)??s.positions[e];s.positions[e].set(a.x,s.intangible?a.y:Tn(s)?Math.max(a.y,St(a.x,a.z)+$n):St(a.x,a.z),a.z)}}}}}function ea(n,e=!1){return new b(n.x,e?St(n.x,n.z)+$n:n.y,n.z)}function ch(){if(As(Gi),Gi=new xn,nn.add(Gi),il.replaceChildren(),yu.length=0,typeof Lt<"u"&&Lt)return;const n=(i,r,s,o=!1)=>{const a=et?.id===r.id&&et.kind===r.kind&&(r.kind!=="waypoint"||et.kind==="waypoint"&&(!r.routeId||et.routeId===r.routeId||En===r.routeId)),c=new Ee(new Wr(a?4:2.8,10,8),new vn({color:a?16777215:s,depthTest:!1}));c.position.copy(ea(i,o)),c.userData.pathPoint=r,c.renderOrder=10,Gi.add(c)},e=document.querySelector("#route-visible")?.checked??!0,t=document.querySelector("#route-labels")?.checked??!0;if(e)for(const i of mn){const r=st.filter(l=>l.routeBinding?.routeId===i.id),s=[...new Set(r.map(l=>Oi().groups.find(d=>d.id===l.groupId)?.name).filter(Boolean))],o=r.filter(l=>!l.groupId||!Oi().groups.some(d=>d.id===l.groupId)).map(l=>l.label),a=[...s.map(l=>`编组:${l}`),...o].join(" / ")||"未绑定",c=i.id===En?16767050:7649492;i.waypoints.length>1&&Gi.add(aa(i.waypoints.map(l=>ea(l)),c,1,i.id===En?.7:.4)),i.waypoints.forEach((l,d)=>{n(l,{kind:"waypoint",id:l.id,routeId:i.id},c);const u=new b(l.x,St(l.x,l.z)+.35,l.z);if(Gi.add(aa([u,ea(l)],c,1,.5)),Gi.add(aa([new b(l.x-4,u.y,l.z),new b(l.x+4,u.y,l.z),u.clone(),new b(l.x,u.y,l.z-4),new b(l.x,u.y,l.z+4)],c,1,.7)),!t)return;const h=document.createElement("button");h.className="waypoint-label",h.textContent=`${i.name} · ${d+1} · ${a}`,h.title=`${i.name} / 航路点 ${d+1}
绑定单位：${r.map(f=>f.label).join("、")||"无"}
${a}`,h.addEventListener("click",()=>{Ue.dragging||Dt||yt?.isPicking()||(En=i.id,Gt=zt=!1,et=at()&&Oe?{kind:"waypoint",id:l.id,routeId:i.id}:null,Nn?.select("routes"),lt(),it())}),il.appendChild(h),yu.push({dom:h,position:ea(l).add(new b(0,5,0))})})}if(!(!at()||!Oe||Ot)&&Cn&&de&&ht.size===1&&Is(de,Le)!=="wreck"&&document.querySelector("#trail-display").value!=="none"){const i=!Tn(de)&&!de.intangible,r=Math.min(pi(),de.destroyedAtTurn??pi());de.trackPoints?.filter(o=>o.segment<r).forEach(o=>n(o,{kind:"track",unitId:de.id,id:o.id},ho[de.faction],i));const s=eh(de,Le);for(const o of th(de,s,r)){const{segment:a,points:c}=o;i&&c.forEach(d=>{d.y=St(d.x,d.z)+$n});const l=bm(c,ho[de.faction]);l.userData.editSegment=a,l.userData.trackPart=o,l.traverse(d=>{d.userData.editSegment=a,d instanceof Ee&&(d.material.dispose(),d.material=new vn({color:ho[de.faction],transparent:!0,opacity:.65,side:dn,depthTest:!1}))}),Gi.add(l)}}}function pw(){const n=Mo(),e=document.querySelector("#route-select");e.replaceChildren(...mn.map(f=>{const m=document.createElement("option");return m.value=f.id,m.textContent=f.name,m})),e.value=En,ut("#route-name").value=nl()?.name??"";const t=(f,m)=>{const _=document.createElement("button");return _.textContent=f,_.setAttribute("aria-pressed",String(et?.id===m.id)),_.addEventListener("click",()=>{if(Ue.dragging||Dt||yt?.isPicking())return;Gt=zt=!1,et=at()&&Oe?m:null;const g=m.kind==="waypoint"?Mo().find(p=>p.id===m.id):de?.trackPoints?.find(p=>p.id===m.id);g&&!at()&&ih({x:g.x/rt,y:g.y/rt,z:g.z/rt}),lt(),it()}),_};document.querySelector("#route-list").replaceChildren(...n.map((f,m)=>t(`WP ${m+1}`,{kind:"waypoint",id:f.id})));const i=de&&ht.size===1?de.trackPoints??[]:[];document.querySelector("#track-list").replaceChildren(...i.map((f,m)=>t(`P${m+1} / ${f.segment+1}-${f.segment+2}`,{kind:"track",unitId:de.id,id:f.id})));const r=Ga(),s=et?.kind==="track"?st.find(f=>f.id===et.unitId):void 0,o=!!s&&!Tn(s)&&!s.intangible;for(const f of["x","y","z"]){const m=ut(`#path-${f}`);m.disabled=!r||o&&f==="y",m.value=r?r[f].toFixed(2):""}document.querySelector("#route-bind").disabled=!Ki().length||!n.length,document.querySelector("#route-unbind").disabled=!Ti().some(f=>f.routeBinding),document.querySelector("#path-delete").disabled=!r;for(const f of["#route-up","#route-down"])document.querySelector(f).disabled=et?.kind!=="waypoint";document.querySelector("#route-pick").setAttribute("aria-pressed",String(Gt)),document.querySelector("#track-edit").setAttribute("aria-pressed",String(Cn)),document.querySelector("#track-add").setAttribute("aria-pressed",String(zt));for(const f of["#track-add","#track-midpoint"])document.querySelector(f).disabled=!de||ht.size!==1||Kn()<2;et?.kind==="track"&&de&&(Is(de,Le)==="wreck"||document.querySelector("#trail-display").value==="none")&&(et=null),ut("#track-segment").max=String(Math.max(1,pi())),document.querySelector("#path-state").textContent=Gt?"航路点放置中":zt?"控制点放置中":`${nl()?.name??"-"} / ${n.length} WP / ${Ti().map(f=>`${f.label}:${mn.find(m=>m.id===f.routeBinding?.routeId)?.name??"未绑定"}${f.routeBinding?.formationId?"(编队)":""}`).join(" / ")} / ${i.length} TRACK POINTS`;const c=st.filter(f=>f.routeBinding?.routeId===En),l=document.querySelector("#route-bindings");l&&l.replaceChildren(...c.map(f=>{const m=document.createElement("button"),_=Oi().groups.find(g=>g.id===f.groupId);return m.textContent=`${f.label}${_?` · ${_.name}`:""} / 从第 ${f.routeBinding.startTurn+1} 回合`,m.addEventListener("click",()=>zn([f])),m}));const d=document.querySelector("#route-group-select");if(d){const f=d.value;d.replaceChildren(...Oi().groups.map(m=>new Option(`${m.name} (${st.filter(_=>_.groupId===m.id).length})`,m.id))),Oi().groups.some(m=>m.id===f)&&(d.value=f)}const u=document.querySelector("#route-select-bound");u&&(u.disabled=!c.length);const h=document.querySelector("#route-bind-group");h&&(h.disabled=!at()||!Oe||!n.length||!d?.value)}function Om(n,e){const t=[0,...(de?.trackPoints??[]).filter(s=>s.segment===n).sort((s,o)=>s.t-o.t).map(s=>s.t),1],i=qt.clamp(e,0,.999999)*(t.length-1),r=Math.floor(i);return qt.lerp(t[r],t[r+1],i-r)}function zm(n,e,t=.5){if(!at()||!Oe||!de||ht.size!==1||!Sn())return;de.trackPoints??=[];const i={id:`control-${sl++}`,segment:n,t:qt.clamp(t,.01,.99),x:e.x,y:e.y,z:e.z};de.trackPoints.push(i),et={kind:"track",unitId:de.id,id:i.id},zt=!1,lt(),it()}_t.domElement.addEventListener("pointerdown",n=>{if(yt?.isPicking()||!at()||sn||!Oe||Ot||n.button!==0||n.altKey||je)return;if(Gt){n.stopImmediatePropagation(),n.preventDefault();const i=wo(n);if(!i||!Sn())return;Mo().push({id:`wp-${rl++}`,x:i.x,y:Math.max(Number(ut("#route-height").value)||0,i.y+$n),z:i.z}),er(),lt(),it();return}Zi.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),$i.setFromCamera(Zi,Mt);const e=$i.intersectObjects(Gi.children,!0),t=e.find(i=>i.object.userData.pathPoint);if(t&&Ue.axis===null){n.stopImmediatePropagation(),n.preventDefault(),et=t.object.userData.pathPoint,et?.kind==="waypoint"&&et.routeId&&(En=et.routeId),zt=!1,Nn?.select("routes"),lt(),it();return}if(zt&&Ue.axis===null){n.stopImmediatePropagation(),n.preventDefault();const i=e.find(r=>r.object.userData.editSegment!==void 0);if(i){const r=i.object.userData.editSegment,s=th(de,eh(de,Le),Math.min(pi(),de.destroyedAtTurn??pi())).find(l=>l.segment===r);if(!s)return;let o=0,a=1/0;for(let l=0;l<=300;l++){const d=s.curve.getPoint(qt.lerp(s.start,s.end,l/300));!Tn(de)&&!de.intangible&&(d.y=St(d.x,d.z)+$n);const u=d.distanceToSquared(i.point);u<a&&(a=u,o=l/300)}const c=s.curve.getPoint(qt.lerp(s.start,s.end,o));zm(r,c,Om(r,o))}}},!0);document.querySelector("#route-select").addEventListener("change",()=>{Ue.dragging||Dt||yt?.isPicking()||(En=document.querySelector("#route-select").value,et=null,Gt=zt=!1,lt(),it())});ut("#route-name").addEventListener("change",()=>{Ue.dragging||Sn()&&(nl().name=ut("#route-name").value.trim()||"UNTITLED ROUTE",lt(),it())});document.querySelector("#route-new").addEventListener("click",()=>{if(Ue.dragging||je||!Sn())return;const n=wa++,e={id:`route-${n}`,name:`ROUTE ${n}`,waypoints:[]};mn.push(e),En=e.id,et=null,Gt=zt=!1,lt(),it()});document.querySelector("#route-remove").addEventListener("click",()=>{if(!(Ue.dragging||je)&&Sn()){if(st.filter(n=>n.routeBinding?.routeId===En).forEach(n=>{n.routeBinding=void 0}),mn.splice(mn.findIndex(n=>n.id===En),1),!mn.length){const n=wa++;mn.push({id:`route-${n}`,name:`ROUTE ${n}`,waypoints:[]})}En=mn[0].id,et=null,Gt=zt=!1,er(),lt(),it()}});document.querySelector("#route-pick").addEventListener("click",()=>{!at()||!Oe||je||Ue.dragging||(Gt=!Gt,zt=!1,et=null,on=!1,lt(),it())});function Bm(n){if(!at()||!Oe||je||Ue.dragging||!Mo().length||!n.length)return;const e=cg(n.map(i=>Fn(i))),t=n.length>1?`formation-${tl++}`:void 0;Sn()&&(n.forEach((i,r)=>{i.routeBinding={startTurn:Le,routeId:En,offset:t?e[r]:{x:0,y:0,z:0},formationId:t},i.trackPoints=(i.trackPoints??[]).filter(s=>s.segment<Le)}),er(),lt(),it())}document.querySelector("#route-bind").addEventListener("click",()=>Bm(Ki()));document.querySelector("#route-unbind").addEventListener("click",()=>{Sn()&&(Ti().forEach(n=>{n.routeBinding=void 0}),er(),lt(),it())});for(const[n,e]of[["#route-up",-1],["#route-down",1]])document.querySelector(n).addEventListener("click",()=>{if(et?.kind!=="waypoint")return;const t=Mo(),i=t.findIndex(s=>s.id===et.id),r=i+e;r<0||r>=t.length||Sn()&&([t[i],t[r]]=[t[r],t[i]],er(),lt(),it())});document.querySelector("#path-delete").addEventListener("click",()=>{if(et&&Sn()){if(et.kind==="waypoint"){const n=Mo();n.splice(n.findIndex(e=>e.id===et.id),1),n.length||st.filter(e=>e.routeBinding?.routeId===En).forEach(e=>{e.routeBinding=void 0})}else{const n=et,e=st.find(t=>t.id===n.unitId);e.trackPoints=e.trackPoints?.filter(t=>t.id!==n.id)}et=null,er(),lt(),it()}});document.querySelector("#track-edit").addEventListener("click",()=>{!at()||!Oe||(Cn=!Cn,zt=Gt=!1,et=null,on=!1,lt(),it())});document.querySelector("#track-add").addEventListener("click",()=>{!at()||!Oe||(Cn=!0,zt=!zt,Gt=!1,et=null,on=!1,lt(),it())});document.querySelector("#track-midpoint").addEventListener("click",()=>{if(!at()||!Oe||!de||ht.size!==1||Kn()<2)return;const n=qt.clamp(Math.floor(Number(ut("#track-segment").value)||1)-1,0,pi()-1),e=dp(de.positions,de.trackPoints??[],n,n+1).map(i=>new b(i.x,i.y,i.z)),t=new Wu(e).getPoint(.5);Cn=!0,zm(n,t,Om(n,.5))});ut("#track-segment").addEventListener("change",()=>{ut("#track-segment").value=String(qt.clamp(Math.floor(Number(ut("#track-segment").value)||1),1,Math.max(1,pi())))});for(const n of["x","y","z"])ut(`#path-${n}`).addEventListener("change",()=>{const e=Ga(),t=Number(ut(`#path-${n}`).value);if(!e||!Number.isFinite(t))return;const i=et?.kind==="track"?et.unitId:void 0;if(!Sn())return;const r=st.find(s=>s.id===i);e[n]=n==="y"&&!r?.intangible?Math.max(0,t):t,r&&Ds(r)&&(e.y=St(e.x,e.z)),et?.kind==="waypoint"&&er(),lt(),it()});for(const n of["#trail-display","#trail-turns"])document.querySelector(n).addEventListener("change",lt);function Hm(){const n=(e,t,i,r)=>{const s=Number(ut(e).value);return Number.isFinite(s)?qt.clamp(s,t,i):r};return{radius:n("#terrain-radius",8,240,50),strength:n("#terrain-strength",.1,30,6),target:n("#terrain-flat",0,180,20),density:n("#urban-density",1,100,70)/100,mode:document.querySelector("#terrain-brush").value}}const Fi=new e_(new Ut,new fi({color:7143340,depthTest:!1,transparent:!0,opacity:.9}));Fi.visible=!1;$r.add(Fi);function Vm(n){if(Fi.visible=!!n&&Ot&&Oe,!n)return;const{radius:e}=Hm();let t=Fi.geometry.getAttribute("position");t||(t=new Rt(new Float32Array(240),3),t.setUsage(qc),Fi.geometry.setAttribute("position",t));for(let i=0;i<80;i++){const r=i/80*Math.PI*2,s=n.x+Math.cos(r)*e,o=n.z+Math.sin(r)*e;t.setXYZ(i,s,St(s,o)+.6,o)}t.needsUpdate=!0,Fi.geometry.computeBoundingSphere()}function Gm(n){if(!at()||!Oe||!Dt)return;const e=Hm(),t=Dt.last,i=t?t.distanceTo(n):0;if(t&&i<gt.spacing*.4)return;const r=t?Math.ceil(i/Math.max(gt.spacing,e.radius/4)):1;for(let s=1;s<=r;s++){const o=t?t.clone().lerp(n,s/r):n,a=e.mode==="smooth"||e.mode==="flatten"?e.strength/30:e.strength;(e.mode==="urban"||e.mode==="erase-urban"?or.paint(o.x,o.z,e.radius,e.density,e.mode==="erase-urban"):gt.brush(o.x,o.z,e.radius,a,e.mode,e.target))&&(Dt.changed=!0,Mr=!0,Bb(o,e.radius))}Dt.last=n.clone()}function Wa(n=!1){if(!Dt)return;const e=Dt;n||ym(),Dt=null,n?(gt.data.set(e.before.terrain),or.data.set(e.before.urban),Mr=!0):e.changed&&(xr=e.checkpoint),_t.domElement.hasPointerCapture(e.pointerId)&&_t.domElement.releasePointerCapture(e.pointerId),It.enabled=!0,Mr?(gl(),!n&&ri&&_u===gt&&vu===or&&(ba=!1)):(fo.visible=!0,_s.visible=!0,ri&&(ri.root.visible=!1),ys=null),lt(),it()}function ki(n){n&&!at()||!n&&At()?.mapEditRef||(sn&&Yn(),!Ue.dragging&&(Wa(),gi(!0),Yr(),on=!1,Ot=n,Gt=zt=!1,et=null,ch(),Fi.visible=!1,n&&!Oe&&Un(!0),_t.domElement.style.cursor=n?"crosshair":"",it()))}_t.domElement.addEventListener("pointerdown",n=>{if(yt?.isPicking()||!at()||!Oe||!Ot||n.button!==0||n.altKey)return;n.stopImmediatePropagation(),n.preventDefault();const e=wo(n);!e||Math.abs(e.x)>gt.extent||Math.abs(e.z)>gt.extentZ||rn()&&(Dt={before:yl(),checkpoint:xe?.read()??null,pointerId:n.pointerId,changed:!1,last:null},It.enabled=!1,_t.domElement.setPointerCapture(n.pointerId),Gm(e),Vm(e))},!0);_t.domElement.addEventListener("pointermove",n=>{if(!at()||!Oe||!Ot)return;const e=wo(n);Vm(e),Dt&&(n.stopImmediatePropagation(),e&&Gm(e))},!0);_t.domElement.addEventListener("pointerup",n=>{Dt&&(n.stopImmediatePropagation(),Wa())},!0);_t.domElement.addEventListener("pointercancel",()=>Wa(!0));_t.domElement.addEventListener("pointerleave",()=>{Dt||(Fi.visible=!1)});document.querySelector("#tab-terrain").addEventListener("click",()=>ki(!0));document.querySelector("#tab-units").addEventListener("click",()=>ki(!1));for(const[n,e]of[["#terrain-reset",()=>gt.reset()],["#terrain-generate",()=>gt.generate(Number(ut("#terrain-seed").value)||0,document.querySelector("#terrain-preset").value)]])document.querySelector(n).addEventListener("click",()=>{Dt||Sn()&&(e(),Mr=!0,gl(),lt(),it())});document.querySelector("#terrain-brush").addEventListener("change",it);for(const n of["#urban-angle","#urban-seed"])ut(n).addEventListener("change",()=>{Dt||Sn()&&(xs=qt.degToRad(qt.clamp(Number(ut("#urban-angle").value)||0,-180,180)),Ma=Number(ut("#urban-seed").value)|0,Mr=!0,gl(),lt(),it())});document.querySelector("#terrain-contour-smooth").addEventListener("change",()=>{Mr=!0});document.querySelector("#terrain-undo").addEventListener("click",Sl);document.querySelector("#terrain-redo").addEventListener("click",Ml);const $i=new qp,Zi=new ze;function Io(){const n=_t.domElement.getBoundingClientRect?.();return n&&n.width>0&&n.height>0?{left:n.left,top:n.top,width:n.width,height:n.height}:{left:0,top:0,width:innerWidth,height:innerHeight}}function Da(){return typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches}function lh(n,e,t){const i=Io(),r=[];Mt.updateMatrixWorld(),nn.updateMatrixWorld(!0);for(const s of mi.values()){const o=s.userData.parts,a=s.userData.unit;if(!o||!a||!dl(s))continue;const c=typeof Ts<"u"?Ts.get(a.id):void 0,l=o.label.userData.dom,d=!l.hidden&&Number(l.style.opacity||"1")>0&&wb(l.getBoundingClientRect(),n,e,t>14?6:0),u=[o.icon,...c?.root.visible?[c.base]:[],...o.wreck.visible?[o.wreck]:[]];let h=1/0,f;for(const m of u.filter(dl)){const _=bb(m.getWorldPosition(new b).project(Mt),i,n,e,d?Math.max(i.width,i.height):t);_!==null&&_<h&&(h=_,f=m)}f&&(h<=t||d)&&r.push({unit:a,distance:d?Math.min(h,t):h,object:f})}return r.sort((s,o)=>s.distance-o.distance||s.unit.id.localeCompare(o.unit.id))}function mw(n,e,t=14){const i=[],r=wr(Le);for(const s of lh(n,e,t)){const o=Ss.get(s.unit.id);if(Hc!==void 0&&!o)continue;const a=new Set(o??[s.unit.id]);r.units.filter(c=>a.has(c.unit.id)).forEach(c=>i.push({unit:c.unit,distance:s.distance}))}return i.sort((s,o)=>s.distance-o.distance||s.unit.id.localeCompare(o.unit.id)).map(s=>s.unit)}function Wm(n,e,t=14){const i=mw(n,e,t);i.length===1?Lm(i[0]):(Ea=i.map(r=>r.id),Pm())}_t.domElement.addEventListener("pointerdown",n=>{!sn||n.button!==0||n.altKey||(n.stopImmediatePropagation(),n.preventDefault(),Wm(n.clientX,n.clientY,ju(n.pointerType,Da())))},!0);Lo.addEventListener("pointerdown",n=>{if(n.button!==0||!br||n.altKey||Vt())return;const e=ju(n.pointerType,Da());if(sn){n.stopPropagation(),n.preventDefault(),Wm(n.clientX,n.clientY,e);return}const t=(n.target instanceof Element?n.target.closest("[data-unit-id]"):null)?.dataset.unitId,i=lh(n.clientX,n.clientY,e),r=i.find(s=>s.unit.id===t)??i[0];r&&(n.stopPropagation(),n.preventDefault(),_l(r.unit))});function dl(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function wl(n){const e=Io();Zi.x=(n.clientX-e.left)/e.width*2-1,Zi.y=-((n.clientY-e.top)/e.height)*2+1,$i.setFromCamera(Zi,Mt);const t=$i.intersectObjects([...mi.values()].flatMap(r=>r.children),!0).filter(r=>dl(r.object));if(t.length||!Da()&&n.pointerType!=="touch"&&n.pointerType!=="pen")return t;const i=lh(n.clientX,n.clientY,ju(n.pointerType,Da()))[0];return i?[{distance:Mt.position.distanceTo(i.object.getWorldPosition(new b)),point:i.object.getWorldPosition(new b),object:i.object}]:[]}function Xa(){Qs=null,xu=-1/0,Vc=""}function gw(n=performance.now()){const e=Mt.position.distanceTo(It.target),t=eb(e,Hc),i=t!==Hc;Hc=t;const r=document.querySelector("#camera-readout");r&&(r.textContent=`FREE 3D / ${t}档`);const{width:s,height:o}=Io(),a=[t,s,o,...Mt.position.toArray(),...Mt.quaternion.toArray(),Oe,sn].join("|"),c=Qs===null;if(!c&&!i&&a===Vc)return;if(Mt.updateMatrixWorld(),nn.updateMatrixWorld(!0),Qs??=wr(Le),c||i||a!==Vc&&n-xu>=100){const u=Qs.units.map(h=>{const f=mi.get(h.unit.id),m=f.userData.parts,g=(t===3?f.position.clone():m.icon.getWorldPosition(new b)).project(Mt),p=Oe&&ht.has(h.unit.id);return{id:h.unit.id,label:h.unit.label,faction:h.unit.faction,icon:h.unit.icon,tgt:h.unit.tgt,escort:h.unit.escort,status:h.status,position:{x:h.position.x/rt,y:h.position.y/rt,z:h.position.z/rt},screenX:(g.x+1)*s/2,screenY:(1-g.y)*o/2,onScreen:!p&&!h.unit.hidden&&!h.unit.intangible&&g.z>-1&&g.z<1&&Math.abs(g.x)<=1&&Math.abs(g.y)<=1}});Md=ib(u,t),Ss.clear();for(const h of Md)Ss.set(h.representativeId,h.memberIds);Vc=a,xu=n}const l=new Map(Qs.units.map(u=>[u.unit.id,u])),d=new Map(Md.map(u=>[u.representativeId,u]));for(const u of Qs.units){const h=mi.get(u.unit.id),f=h.userData.parts,m=Ts.get(u.unit.id),_=d.get(u.unit.id),p=(_?.airRepresentativeId?l.get(_.airRepresentativeId):void 0)??(Tn(u.unit)?u:void 0),E=ka(u.unit,u.position,St),y=Math.max(0,E.y-h.position.y),x=ml(u.unit,E,St,$n).y-h.position.y,R=f.base===null?x+Mm-$n:Math.max(y,.6),C=new b(h.position.x,h.position.y+x,h.position.z),N=2*Math.max(Mt.near,-C.applyMatrix4(Mt.matrixWorldInverse).z)*Math.tan(qt.degToRad(Mt.fov)/2)/Math.max(1,o),M=hd(t,N),S=Math.max(Mt.near,-new b(h.position.x,h.position.y,h.position.z).applyMatrix4(Mt.matrixWorldInverse).z),I=Math.max(Mt.near,-new b(h.position.x,h.position.y+1.5,h.position.z).applyMatrix4(Mt.matrixWorldInverse).z),F=2*Math.tan(qt.degToRad(Mt.fov)/2)/Math.max(1,o),B=hd(t,S*F),G=hd(t,I*F);f.tgtRing.visible=!!_?.hasTgt&&u.status==="active",f.escortMarker.visible=!!_?.hasEscort&&u.status==="active"&&u.unit.faction!=="enemy",ab(f,m,{tier:u.unit.intangible?1:t,representative:!!_,status:u.status,faction:u.unit.faction,label:_?.label??u.unit.label,scale:M,baseScale:B,farBaseScale:G,hasAir:!!p,airAltitude:p?Math.max(0,p.position.y-h.position.y):0,hasTgt:!!_?.hasTgt,hasEscort:!!_?.hasEscort,iconHeight:x,poleHeight:R}),m.root.traverse(J=>{const q=J.material;!q||Array.isArray(q)||(q.userData.hiddenBaseOpacity??=q.opacity,q.opacity=q.userData.hiddenBaseOpacity*(u.unit.hidden?.35:1))})}for(const u of nn.children)typeof u.userData.trail=="string"&&(u.visible=t===1||Ss.has(u.userData.trail))}function _w(){const{width:n,height:e}=Io();for(const{dom:t,position:i}of yu){const r=i.clone().project(Mt);t.hidden=r.z<-1||r.z>1,t.style.left=`${(r.x+1)*n/2}px`,t.style.top=`${(1-r.y)*e/2}px`}nn.updateMatrixWorld(!0);for(const t of mi.values()){const i=t.userData.parts,r=i.label.userData.dom,s=i.label.userData.displayVisible!==!1,o=Ts.get(t.userData.unit.id),a=o?.root.visible?o.pole:i.pole,c=Mb({camera:Mt,width:n,height:e,group:t,icon:i.wreck.visible?i.wreck:i.icon,pole:a,dom:r,isAir:i.base!==null,naturalTop:a.userData.naturalTop??i.label.position.y,isMerged:(Ss.get(t.userData.unit.id)?.length??1)>1,decorated:i.tgtRing.visible||i.escortMarker.visible,visible:s})!==!1&&s,l=Oi().groups.find(u=>u.id===t.userData.unit?.groupId);r.title=l?`编组: ${l.name}`:"",r.style.borderLeft=l?`3px solid ${l.color}`:"",r.style.opacity=c?String(i.labelFade):"0";const d=c&&!r.hidden&&(sn||typeof en<"u"&&en?.active()||Da());r.style.pointerEvents=d?"auto":"none",r.style.cursor=sn?"crosshair":d?"pointer":"",r.classList.toggle("range-attacker-label",t.userData.unit.id===Ii),r.classList.toggle("range-target-label",t.userData.unit.id===Ni)}}let br=!1;function Xm(){if(requestAnimationFrame(Xm),!br)return;Dt?ym():Mr&&gl(),Ot&&!Dt&&(!ri||ba)&&xm(),It.update(),nm(kr,Mt.position.distanceTo(It.target)),gw(),_w();const n=Io();yt?.updateLabels(Mt,n.width,n.height),en?.update(),_t.render($r,Mt)}addEventListener("resize",()=>{const n=document.querySelector("#scene").getBoundingClientRect(),e=Math.max(1,n.width),t=Math.max(1,n.height);Mt.aspect=e/t,Ha(),_t.setSize(e,t,!1)});function vw(n){tg(n,{size:gt.size,extent:gt.extent})}function xw(n){vw(n),Lt&&dh(!1);const e=xe.read();try{Eo(),Yn(),ht.clear(),de=null,xe.reset(n.checkpoint),Ji(n.checkpoint);const t=(i,r)=>Math.max(0,...i.filter(s=>s.startsWith(r)).map(s=>Number(s.slice(r.length))).filter(Number.isSafeInteger))+1;qr=t(st.map(i=>i.id),"unit-"),wa=t(mn.map(i=>i.id),"route-"),rl=t(mn.flatMap(i=>i.waypoints.map(r=>r.id)),"wp-"),sl=t(st.flatMap(i=>(i.trackPoints??[]).map(r=>r.id)),"control-"),tl=t(st.flatMap(i=>i.routeBinding?.formationId?[i.routeBinding.formationId]:[]),"formation-"),Ii=Ni="",lt(),it()}catch(t){throw Ji(e),xe.reset(e),lt(),it(),t}}let ul,Ia,ip="",tn=!1,qa="",vs=null;function Qt(n){qa=n;const e=document.querySelector("#workflow-state");e&&(e.textContent=n)}function Na(){vs=null,document.querySelector("#workflow-confirm")?.setAttribute("hidden","")}function Ei(){const n=At(),e=n?.workflow?.mode==="formal",t=document.querySelector("#workflow-panel");if(!t)return;if(typeof Lt<"u"&&Lt){t.hidden=!0;for(const m of Array.from(t.querySelectorAll("button")))m.disabled=!0;return}t.hidden=!1;const i=e&&n.turns.length===n.workflow.committedTurns+1,r=Vt()||tn,s=n?.status==="finished";t.dataset.mode=s?"finished":e?bi()?"draft":"history":n?.mapEditRef?"map-editor":"authoring";const o=document.querySelector("#task-editor-save");o&&(o.hidden=!!e||!!n?.mapEditRef||n?.turns.length!==1,o.disabled=r||s);const a=document.querySelector("#map-editor-save");a&&(a.hidden=!n?.mapEditRef,a.disabled=r||s);const c=document.querySelector("#workflow-reopen");c&&(c.hidden=!e,c.disabled=!e||r||!!vs||!!i||!n.workflow.committedTurns||!!n.workflow?.branchFrom&&n.workflow.committedTurns-1<n.workflow.branchFrom.turn);const l=document.querySelector("#workflow-save-draft");l&&(l.hidden=!e,l.disabled=r||s||!bi()||!!vs||!ul);const d=document.querySelector("#workflow-snapshot");d&&(d.hidden=!e,d.disabled=r||!!vs||!n?.workflow?.committedTurns||typeof Ia>"u"||!Ia);const u=document.querySelector("#editor-save-as-controls");u&&(u.hidden=!!e||s);for(const m of["map","task"]){const _=document.querySelector(`#${m}-editor-save-as`);_&&(_.hidden=!!e||(m==="map"?!n?.mapEditRef:!!n?.mapEditRef),_.disabled=r||s)}const h=document.querySelector("#editor-save-as-name");h&&(h.disabled=r||s,n&&ip!==n.id&&(ip=n.id,h.value=`${n.name.replace(/ 制作副本$/,"").slice(0,123)} COPY`));const f=document.querySelector("#workflow-state");f&&(f.textContent=qa||(s?"已结束":e?bi()?`第 ${Le+1} 回合 · 草稿`:`第 ${Le+1} 回合 · 只读 · 已提交 ${n.workflow.committedTurns} 回合`:n?.mapEditRef?`地图制作 · r${n.mapEditRef.revision}`:"场景制作"));for(const m of["begin","advance","commit","discard"]){const _=document.querySelector(`#workflow-${m}`);_&&(_.hidden=!e,m==="discard"&&(_.textContent=n?.workflow?.committedTurns===0?"重置第一回合草稿…":"丢弃草稿…"),_.disabled=!e||s||r||!!vs||(m==="begin"?!!i:!bi()))}}function wu(n,e){if(typeof Lt<"u"&&Lt)return;if(!xe||tn||Vt()){Qt("请先结束当前放置、拖动或笔刷操作");return}if(e&&(e.revision!==xe.revision||e.sessionId!==At()?.id||e.turn!==Le)){Na(),Qt("会话或回合已变化，请重新选择操作"),Ei();return}if(!rn())return;const t=xe.read(),i=t.editor.sessionId??"session-working",r=t.project.sessions.find(s=>s.id===i);if(!r?.workflow||(n==="reopen"?r.turns.length!==r.workflow.committedTurns||!r.workflow.committedTurns:r.status==="finished"||n!=="begin"&&!bi()||n==="begin"&&r.turns.length!==r.workflow.committedTurns)){Qt("当前状态不适用此操作，请刷新回合状态"),Ei();return}tn=!0,qa="",Na(),Ei();try{if(n==="reopen"){xe.reopenLastCommittedTurn(i,xe.revision),Qi(),Un(!0),Qt("最近回合已恢复为草稿");return}const o={begin:gg,advance:mg,commit:pg,discard:fg}[n](t.project,i),a=o.sessions.find(d=>d.id===i),c={project:o,editor:{...t.editor,currentTurn:a.turns.length-1}},l={begin:"开始回合草稿",advance:"按航路推进草稿",commit:"提交回合",discard:"丢弃回合草稿"};xe.commit(c,l[n],t),Qi(),(n==="begin"||n==="advance"||n==="discard"&&a.workflow?.committedTurns===0)&&Un(!0)}catch(s){Qt(s instanceof Error?s.message:String(s))}finally{tn=!1,it()}}function yw(n){if(Lt)return;if(n!=="commit"&&n!=="discard"&&n!=="reopen"){wu(n);return}if(!xe||Vt()||tn||(n==="reopen"?!yn()||At().turns.length!==At().workflow.committedTurns||!At().workflow.committedTurns:!bi())||!rn())return;const e=n==="reopen"?"取消最近回合提交？":n==="commit"?"提交当前回合？":At()?.workflow?.committedTurns===0?"重置第一回合草稿？":"丢弃当前草稿？",t={action:n,revision:xe.revision,sessionId:At().id,turn:Le},i=document.querySelector("#workflow-confirm");if(!i){window.confirm(e)&&wu(n,t);return}vs=t,i.hidden=!1;const r=document.querySelector("#workflow-confirm-text");r&&(r.textContent=e),Ei()}for(const n of["begin","advance","commit","discard","reopen"])document.querySelector(`#workflow-${n}`)?.addEventListener("click",()=>yw(n));document.querySelector("#workflow-confirm-yes")?.addEventListener("click",()=>{const n=vs;n&&wu(n.action,n)});document.querySelector("#workflow-confirm-cancel")?.addEventListener("click",()=>{Na(),Ei()});document.querySelector("#canvas-resize")?.addEventListener("click",()=>{if(!xe||!at()||Vt())return;const n=Number(ut("#canvas-width").value),e=Number(ut("#canvas-height").value),t=Number(ut("#canvas-samples").value);if(rn())try{const i=xe.read(),r=i.project.sessions.find(a=>a.id===i.editor.sessionId),s=lg(i.project,r.mapRef,n,e,t),o=s.maps.at(-1);s.sessions.find(a=>a.id===r.id).mapRef={id:o.id,revision:o.revision},xe.commit({...i,project:s},"调整画布尺寸",i),Qi(),Un(!0),ki(!0),Qt(`画布 ${n} × ${e} km`)}catch(i){Qt(i instanceof Error?i.message:String(i))}});document.querySelector("#task-editor-save")?.addEventListener("click",()=>{if(!(Lt||!xe||Vt()||yn()||At()?.mapEditRef)&&rn())try{const n=xe.read(),e=At(),t=n.project.tasks.find(s=>s.id===e.taskRef.id&&s.revision===e.taskRef.revision),i=dg(n.project,e.id,t?.name??e.name.replace(/ 制作副本$/,""),`map-${crypto.randomUUID()}`);xe.commit({...n,project:i},"保存任务新修订",n),Qi(),Un(!0);const r=i.sessions.find(s=>s.id===e.id).taskRef;Qt(`任务已保存 · r${r.revision}`)}catch(n){Qt(n instanceof Error?n.message:String(n))}});document.querySelector("#map-editor-save")?.addEventListener("click",()=>{if(Lt||!xe||Vt()||tn||!At()?.mapEditRef||!rn())return;const n=xe.read(),e=At().id;try{const t=ug(n.project,e),i=t.sessions.find(s=>s.id===e).mapEditRef,r=xe.commit({...n,project:t},"保存地图新修订",n);Qi(),ki(!0),Qt(r?`地图已保存 · r${i.revision}`:`无修改 · r${i.revision}`),Ei()}catch(t){Qt(t instanceof Error?t.message:String(t))}});document.querySelector("#workflow-save-draft")?.addEventListener("click",async()=>{if(!xe||Vt()||tn||!bi()||!ul||!rn())return;const n=document.querySelector("#workflow-save-draft");n.disabled=!0;try{Qt(await ul()?"草稿已保存":"草稿保存失败")}catch(e){Qt(e instanceof Error?e.message:String(e))}finally{Ei()}});document.querySelector("#workflow-snapshot")?.addEventListener("click",async()=>{if(!(Lt||!xe||Vt()||tn||!At()?.workflow?.committedTurns||!Ia)&&rn()){tn=!0,Ei();try{await Ia(),Qt("回合快照已发送到管理器快照仓库")}catch(n){Qt(n instanceof Error?n.message:String(n))}finally{tn=!1,Ei(),it()}}});for(const n of["map","task"])document.querySelector(`#${n}-editor-save-as`)?.addEventListener("click",()=>{if(Lt||!xe||Vt()||tn||yn()||!!At()?.mapEditRef!=(n==="map")||!rn())return;const e=document.querySelector("#editor-save-as-name").value.trim();if(!e){Qt("请填写副本名称");return}try{const t=xe.read(),i=At(),r=`map-${crypto.randomUUID()}`,s=n==="map"?kb(t.project,i.id,r,e):Ob(t.project,i.id,{mapId:r,taskId:`task-${crypto.randomUUID()}`},e);xe.commit({...t,project:s.project},n==="map"?"另存为新地图":"另存为新任务",t),Qi(),Un(!0),n==="map"&&ki(!0),Qt(`${n==="map"?"地图":"任务"}已另存为「${e}」r1`)}catch(t){Qt(t instanceof Error?t.message:String(t))}});function dh(n){if(n!==Lt){if(Vt()||tn||!rn())throw new Error("请先完成当前编辑操作");if(n){const e=xe.read(),t=eg(e),i=ap(e),r=new Tu(i);Wc={edit:Oe,terrain:Ot},Eo(),ht.clear(),de=null,Gc=xe,Aa=e,xl=t,Ms.clear(),Ms.set(i.editor.currentTurn,r),Lt=!0,xe=r}else Eo(),ht.clear(),de=null,xe=Gc,Lt=!1,Gc=null,Aa=null,typeof Ra<"u"&&(Ra=null),Ms.clear(),Oe=Wc.edit,Ot=Wc.terrain;Hr=null,ol="",la="",Ji(xe.read()),document.querySelector("#app").dataset.playerView=String(Lt),document.querySelector("#player-viewer-open").hidden=Lt,document.querySelector("#player-viewer-exit").hidden=!Lt,lt(),it()}}function Sw(n){const e=Qm(n);if(Vt()||tn||!rn())throw new Error("请先完成当前编辑操作");Lt&&dh(!1);const t=xe.read();Wc={edit:Oe,terrain:Ot},Eo(),ht.clear(),de=null,Gc=xe,Aa=t,Ra=e,xl=e.turns.length-1;const i=new Tu(e.turns[0]);Ms.clear(),Ms.set(0,i),xe=i,Lt=!0,Hr=null,ol="",la="",Ji(i.read()),document.querySelector("#app").dataset.playerView="true",document.querySelector("#player-viewer-open").hidden=!0,document.querySelector("#player-viewer-exit").hidden=!1,lt(),it()}function Mw(n){if(!Aa||Vt()||tn)return;const e=Math.max(0,Math.min(n,xl));if(e===Le||!rn())return;const t=Oe,i=typeof Ra<"u"?Ra:null,r=Ms.get(e)??new Tu(i?i.turns[e]:ap(Aa,e));Ms.set(e,r),Eo(),ht.clear(),de=null,xe=r,Hr=null,Ji(r.read()),Oe=t,lt(),it()}function bw(){if(!Lt||Vt()||tn||!rn())return;const n=xe.read(),e=n.project.sessions.find(s=>s.id===n.editor.sessionId);e.routes=[{id:"player-viewer-route",name:"Viewer",waypoints:[]}],n.editor.activeRouteId="player-viewer-route";const t=_g(vg(n,n.editor.sessionId)),i=URL.createObjectURL(new Blob([t],{type:"application/json"})),r=document.createElement("a");r.href=i,r.download=`player-view-turn-${Le+1}.json`,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function Eo(){yt?.cancel(),yt?.clearSelection(),Li=null,typeof en<"u"&&en?.cancel(),Oe=Ot=Gt=Cn=zt=on=!1,et=null,je=null,Di=null,zi=!1,xr=null,Rn=null,Ca=null,La.clear(),Ue.detach(),Fi.visible=!1,Dt&&_t.domElement.hasPointerCapture(Dt.pointerId)&&_t.domElement.releasePointerCapture(Dt.pointerId),Dt=null,gi(!0),It.enabled=!0,_t.domElement.style.cursor="",Na(),qa=""}function Qi(){Hr=null,Eo();const n=[...ht];Ji(xe.read()),ht.clear(),n.filter(t=>st.some(i=>i.id===t)).forEach(t=>ht.add(t)),de=Ti().at(-1)??null;const e=(t,i,r)=>Math.max(r,...t.filter(s=>s.startsWith(i)).map(s=>Number(s.slice(i.length))+1).filter(Number.isSafeInteger));qr=e(st.map(t=>t.id),"unit-",qr),wa=e(mn.map(t=>t.id),"route-",wa),rl=e(mn.flatMap(t=>t.waypoints.map(i=>i.id)),"wp-",rl),sl=e(st.flatMap(t=>(t.trackPoints??[]).map(i=>i.id)),"control-",sl),tl=e(st.flatMap(t=>t.routeBinding?.formationId?[t.routeBinding.formationId]:[]),"formation-",tl),lt(),it()}let rp=!1;function Ew(n,e){if(rp)throw new Error("Workspace already mounted");rp=!0,xe=n,ul=e?.saveDraft,Ia=e?.generateSnapshot,Nn=Eb({fitMap:ah,topView:nw,toggleEdit:()=>Un(!Oe),viewerExport:bw,viewerUndo:Sl,viewerRedo:Ml,chooseTool:t=>{Ue.dragging||Dt||li||(yt?.cancel(),t!=="links"&&t!=="markers"&&en?.cancel(),["markers","drawing"].includes(t)||yt?.clearSelection(),je&&t!=="units"&&Yr(),t==="terrain"&&at()?(Un(!0),ki(!0)):Ot&&(At()?.mapEditRef?(Ot=!1,Fi.visible=!1):ki(!1)),["routes"].includes(t)||(Gt=zt=Cn=!1,et=null),(["markers","drawing","links"].includes(t)?di():at())&&["groups","markers","drawing","routes","units","equipment","links"].includes(t)&&!Oe&&Un(!0),t!=="range"&&sn&&Yn(),lt(),it())}}),zr=document.createElement("aside"),zr.id="player-roster-panel",zr.hidden=!0,zr.setAttribute("aria-label","玩家资料卡"),document.querySelector("#app").append(zr),document.querySelector("#app").classList.add("player-roster-mounted"),Su=Rb(zr,{readRevision:()=>xe.revision,read:()=>xe.read().project,busy:()=>tn||Vt(),report:Qt,beginCreate:ow,armPlacement:aw,cancelPlacement:Yr,selectUnit:(t,i)=>{if(tn||Vt())return;const r=st.find(s=>s.id===t);r&&(zn([r]),i&&ep([t]))},recordAction:lw}),Em=Tb(Nn.panels.groups,{read:Oi,units:()=>st,selectedIds:()=>[...ht],editable:()=>at()&&Oe&&!At()?.mapEditRef,change:Ed,select:t=>zn(st.filter(i=>t.includes(i.id))),copy:Yb,focus:ep}),yt=Ub({markersPanel:Nn.panels.markers,drawingsPanel:Nn.panels.drawing,world:nn,labelRoot:nh,read:Oi,change:(t,i)=>Ed(t,r=>i(r)),editable:()=>di()&&Oe,focus:ih,sampleHeightKm:(t,i)=>St(t*rt,i*rt)/rt,onMarkerPick:t=>en?.pick("marker",t)??!1,onTransformMode:t=>{po=t,mo()},onOpenPanel:t=>{document.querySelector("#edit-panel").dataset.activeTab!==t&&Nn?.select(t)},onSelectionChange:t=>{t&&(po="translate",Yn(),et=null,Gt=zt=Cn=on=!1,ht.clear(),de=null,bl(),lt(),it()),mo()},onPickingChange:t=>{document.querySelector("#app").dataset.mapPicking=String(t),t&&(Yn(),gi(!0),on=!1,Gt=zt=Cn=Ot=!1,et=null,Fi.visible=!1,Ue.detach()),It.enabled=br,_t.domElement.style.cursor=t?"crosshair":"",Ei()}}),en=Pb({panel:Nn.panels.links,world:nn,read:Oi,readUnits:()=>st.map(t=>{const i=ml(t,Fn(t),St,$n);return{id:t.id,label:t.label,position:{x:i.x/rt,y:i.y/rt,z:i.z/rt}}}),selectedUnitId:()=>de?.id,editable:()=>di()&&Oe&&!At()?.mapEditRef,busy:()=>tn||Vt(),change:(t,i)=>Ed(t,r=>i(r)),onModeChange:t=>{t&&(yt?.cancel(),yt?.clearSelection(),Yn(),gi(!0),on=Gt=zt=Cn=!1,et=null,Ue.detach()),_t.domElement.style.cursor=t?"crosshair":"",mo()}}),document.querySelector("#route-select-bound").addEventListener("click",()=>zn(st.filter(t=>t.routeBinding?.routeId===En))),document.querySelector("#route-bind-group").addEventListener("click",()=>{const t=document.querySelector("#route-group-select").value;Bm(st.filter(i=>i.groupId===t&&Oa(i)))});for(const t of["#route-visible","#route-labels"])document.querySelector(t).addEventListener("change",lt);return _t.domElement.addEventListener("pointerdown",t=>{if(!yt?.isPicking()||t.button!==0||t.altKey)return;t.stopImmediatePropagation(),t.preventDefault();const i=wo(t);i&&yt.pick({x:i.x/rt,y:i.y/rt,z:i.z/rt})},!0),_t.domElement.addEventListener("pointermove",t=>{if(!yt?.isPicking())return;const i=wo(t);yt.preview(i?{x:i.x/rt,y:i.y/rt,z:i.z/rt}:null)}),Qi(),Ha(),Un(!1),lt(),Xm(),{flush:()=>{if(!rn())throw new Error("当前编辑尚未保存")},open:xw,sync:Qi,busy:()=>tn||Vt(),selectedUnitId:()=>de?.id,editTerrain:()=>{at()&&(Un(!0),ki(!0))},editScenario:()=>{at()&&(Un(!0),ki(!1))},playerView:dh,snapshot:Sw,activate:t=>{br=t,It.enabled=t,Nn?.sync({editing:Oe,editable:di(),mapOnly:!!At()?.mapEditRef,active:t,playerView:Lt,viewerCanUndo:!!xe?.canUndo,viewerCanRedo:!!xe?.canRedo}),t?(lt(),it()):(yt?.cancel(),en?.cancel(),Yn(),Ue.detach(),Um())}}}export{Ew as mountWorkspace};
