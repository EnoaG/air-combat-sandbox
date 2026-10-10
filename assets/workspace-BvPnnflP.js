import{W as et,G as sg,R as yh,p as og,v as ag,w as cg,d as Uu,c as mp,a as lg,b as dg,H as gp,e as ug,P as Fu,f as hg,g as _p,m as ku,h as Ou,U as vp,r as zu,i as fg,j as pg,k as mg,l as gg,n as _g,o as xp,t as yp,q as vg,s as xg,u as yg,x as Sg,y as bg,z as Mg,A as Sp,B as bp,C as wg,D as Eg,E as Tg,F as Ag,I as Rg,J as Cg,K as Pg}from"./index-BJ0ir9Yt.js";const Bu="179",ho={ROTATE:0,DOLLY:1,PAN:2},ao={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dg=0,Sh=1,Lg=2,Mp=1,Ig=2,Sr=3,Ar=0,vi=1,fn=2,$r=0,fo=1,Od=2,bh=3,Mh=4,Ng=5,_s=100,Ug=101,Fg=102,kg=103,Og=104,zg=200,Bg=201,Hg=202,Vg=203,zd=204,Bd=205,Gg=206,Wg=207,Xg=208,qg=209,Yg=210,$g=211,jg=212,Zg=213,Kg=214,Hd=0,Vd=1,Gd=2,yo=3,Wd=4,Xd=5,qd=6,Yd=7,wp=0,Jg=1,Qg=2,jr=0,e0=1,t0=2,n0=3,i0=4,r0=5,s0=6,o0=7,Ep=300,So=301,bo=302,$d=303,jd=304,bl=306,Zd=1e3,Ss=1001,Kd=1002,tr=1003,a0=1004,nc=1005,hr=1006,kl=1007,bs=1008,pr=1009,Tp=1010,Ap=1011,va=1012,Hu=1013,Ps=1014,Mr=1015,Ga=1016,Vu=1017,Gu=1018,xa=1020,Rp=35902,Cp=1021,Pp=1022,Qi=1023,ya=1026,Sa=1027,Dp=1028,Wu=1029,Lp=1030,Xu=1031,qu=1033,Hc=33776,Vc=33777,Gc=33778,Wc=33779,Jd=35840,Qd=35841,eu=35842,tu=35843,nu=36196,iu=37492,ru=37496,su=37808,ou=37809,au=37810,cu=37811,lu=37812,du=37813,uu=37814,hu=37815,fu=37816,pu=37817,mu=37818,gu=37819,_u=37820,vu=37821,Xc=36492,xu=36494,yu=36495,Ip=36283,Su=36284,bu=36285,Mu=36286,c0=3200,l0=3201,d0=0,u0=1,qr="",ui="srgb",Mo="srgb-linear",el="linear",Zt="srgb",Gs=7680,wh=519,h0=512,f0=513,p0=514,Np=515,m0=516,g0=517,_0=518,v0=519,Eh=35044,tl=35048,Th="300 es",fr=2e3,nl=2001;class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ah=1234567;const ca=Math.PI/180,ba=180/Math.PI;function ks(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jn[n&255]+jn[n>>8&255]+jn[n>>16&255]+jn[n>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[t&63|128]+jn[t>>8&255]+"-"+jn[t>>16&255]+jn[t>>24&255]+jn[i&255]+jn[i>>8&255]+jn[i>>16&255]+jn[i>>24&255]).toLowerCase()}function At(n,e,t){return Math.max(e,Math.min(t,n))}function Yu(n,e){return(n%e+e)%e}function x0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function y0(n,e,t){return n!==e?(t-n)/(e-n):0}function la(n,e,t){return(1-t)*n+t*e}function S0(n,e,t,i){return la(n,e,1-Math.exp(-t*i))}function b0(n,e=1){return e-Math.abs(Yu(n,e*2)-e)}function M0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function w0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function E0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function T0(n,e){return n+Math.random()*(e-n)}function A0(n){return n*(.5-Math.random())}function R0(n){n!==void 0&&(Ah=n);let e=Ah+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function C0(n){return n*ca}function P0(n){return n*ba}function D0(n){return(n&n-1)===0&&n!==0}function L0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function I0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function N0(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function io(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ci(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const jt={DEG2RAD:ca,RAD2DEG:ba,generateUUID:ks,clamp:At,euclideanModulo:Yu,mapLinear:x0,inverseLerp:y0,lerp:la,damp:S0,pingpong:b0,smoothstep:M0,smootherstep:w0,randInt:E0,randFloat:T0,randFloatSpread:A0,seededRandom:R0,degToRad:C0,radToDeg:P0,isPowerOfTwo:D0,ceilPowerOfTwo:L0,floorPowerOfTwo:I0,setQuaternionFromProperEuler:N0,normalize:ci,denormalize:io};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,T=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),P=Math.atan2(C,p*T);m=Math.sin(m*P)/C,a=Math.sin(a*P)/C}const v=a*T;if(c=c*m+d*v,l=l*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),d=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,i=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ol.copy(this).projectOnVector(e),this.sub(Ol)}reflect(e){return this.sub(Ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ol=new b,Rh=new mn;class wt{constructor(e,t,i,r,s,o,a,c,l){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=r[0],m=r[3],p=r[6],T=r[1],x=r[4],v=r[7],C=r[2],P=r[5],D=r[8];return s[0]=o*_+a*T+c*C,s[3]=o*m+a*x+c*P,s[6]=o*p+a*v+c*D,s[1]=l*_+u*T+h*C,s[4]=l*m+u*x+h*P,s[7]=l*p+u*v+h*D,s[2]=d*_+f*T+g*C,s[5]=d*m+f*x+g*P,s[8]=d*p+f*v+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,f=l*s-o*c,g=t*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(zl.makeScale(e,t)),this}rotate(e){return this.premultiply(zl.makeRotation(-e)),this}translate(e,t){return this.premultiply(zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zl=new wt;function Up(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function il(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function U0(){const n=il("canvas");return n.style.display="block",n}const Ch={};function po(n){n in Ch||(Ch[n]=!0,console.warn(n))}function F0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Ph=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dh=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function k0(){const n={enabled:!0,workingColorSpace:Mo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Zt&&(r.r=wr(r.r),r.g=wr(r.g),r.b=wr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Zt&&(r.r=mo(r.r),r.g=mo(r.g),r.b=mo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qr?el:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return po("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return po("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Mo]:{primaries:e,whitePoint:i,transfer:el,toXYZ:Ph,fromXYZ:Dh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:i,transfer:Zt,toXYZ:Ph,fromXYZ:Dh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),n}const Bt=k0();function wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ws;class O0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ws===void 0&&(Ws=il("canvas")),Ws.width=e.width,Ws.height=e.height;const r=Ws.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ws}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=il("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=wr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wr(t[i]/255)*255):t[i]=wr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let z0=0;class $u{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bl(r[o].image)):s.push(Bl(r[o]))}else s=Bl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Bl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?O0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let B0=0;const Hl=new b;class xi extends Fs{constructor(e=xi.DEFAULT_IMAGE,t=xi.DEFAULT_MAPPING,i=Ss,r=Ss,s=hr,o=bs,a=Qi,c=pr,l=xi.DEFAULT_ANISOTROPY,u=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=ks(),this.name="",this.source=new $u(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hl).x}get height(){return this.source.getSize(Hl).y}get depth(){return this.source.getSize(Hl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ep)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zd:e.x=e.x-Math.floor(e.x);break;case Ss:e.x=e.x<0?0:1;break;case Kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zd:e.y=e.y-Math.floor(e.y);break;case Ss:e.y=e.y<0?0:1;break;case Kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xi.DEFAULT_IMAGE=null;xi.DEFAULT_MAPPING=Ep;xi.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,i=0,r=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(f+1)/2,C=(p+1)/2,P=(u+d)/4,D=(h+_)/4,N=(g+m)/4;return x>v&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=P/i,s=D/i):v>C?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=P/r,s=N/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=D/s,r=N/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(d-u)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class H0 extends Fs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new xi(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:hr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new $u(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ds extends H0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Fp extends xi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tr,this.minFilter=tr,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class V0 extends xi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tr,this.minFilter=tr,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yi):Yi.fromBufferAttribute(s,o),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ic.copy(i.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),rc.subVectors(this.max,Vo),Xs.subVectors(e.a,Vo),qs.subVectors(e.b,Vo),Ys.subVectors(e.c,Vo),Ur.subVectors(qs,Xs),Fr.subVectors(Ys,qs),os.subVectors(Xs,Ys);let t=[0,-Ur.z,Ur.y,0,-Fr.z,Fr.y,0,-os.z,os.y,Ur.z,0,-Ur.x,Fr.z,0,-Fr.x,os.z,0,-os.x,-Ur.y,Ur.x,0,-Fr.y,Fr.x,0,-os.y,os.x,0];return!Vl(t,Xs,qs,Ys,rc)||(t=[1,0,0,0,1,0,0,0,1],!Vl(t,Xs,qs,Ys,rc))?!1:(sc.crossVectors(Ur,Fr),t=[sc.x,sc.y,sc.z],Vl(t,Xs,qs,Ys,rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gr=[new b,new b,new b,new b,new b,new b,new b,new b],Yi=new b,ic=new Do,Xs=new b,qs=new b,Ys=new b,Ur=new b,Fr=new b,os=new b,Vo=new b,rc=new b,sc=new b,as=new b;function Vl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){as.fromArray(n,s);const a=r.x*Math.abs(as.x)+r.y*Math.abs(as.y)+r.z*Math.abs(as.z),c=e.dot(as),l=t.dot(as),u=i.dot(as);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const G0=new Do,Go=new b,Gl=new b;class Lo{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):G0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const t=Go.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Go,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Gl)),this.expandByPoint(Go.copy(e.center).sub(Gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const _r=new b,Wl=new b,oc=new b,kr=new b,Xl=new b,ac=new b,ql=new b;class Wa{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wl.copy(e).add(t).multiplyScalar(.5),oc.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(Wl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(oc),a=kr.dot(this.direction),c=-kr.dot(oc),l=kr.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Wl).addScaledVector(oc,d),f}intersectSphere(e,t){_r.subVectors(e.center,this.origin);const i=_r.dot(this.direction),r=_r.dot(_r)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,i,r,s){Xl.subVectors(t,e),ac.subVectors(i,e),ql.crossVectors(Xl,ac);let o=this.direction.dot(ql),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kr.subVectors(this.origin,e);const c=a*this.direction.dot(ac.crossVectors(kr,ac));if(c<0)return null;const l=a*this.direction.dot(Xl.cross(kr));if(l<0||c+l>o)return null;const u=-a*kr.dot(ql);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,i,r,s,o,a,c,l,u,h,d,f,g,_,m){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,h,d,f,g,_,m)}set(e,t,i,r,s,o,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/$s.setFromMatrixColumn(e,0).length(),s=1/$s.setFromMatrixColumn(e,1).length(),o=1/$s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W0,e,X0)}lookAt(e,t,i){const r=this.elements;return Ei.subVectors(e,t),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),Or.crossVectors(i,Ei),Or.lengthSq()===0&&(Math.abs(i.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),Or.crossVectors(i,Ei)),Or.normalize(),cc.crossVectors(Ei,Or),r[0]=Or.x,r[4]=cc.x,r[8]=Ei.x,r[1]=Or.y,r[5]=cc.y,r[9]=Ei.y,r[2]=Or.z,r[6]=cc.z,r[10]=Ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],T=i[3],x=i[7],v=i[11],C=i[15],P=r[0],D=r[4],N=r[8],M=r[12],S=r[1],I=r[5],k=r[9],V=r[13],G=r[2],K=r[6],Y=r[10],de=r[14],X=r[3],oe=r[7],xe=r[11],Xe=r[15];return s[0]=o*P+a*S+c*G+l*X,s[4]=o*D+a*I+c*K+l*oe,s[8]=o*N+a*k+c*Y+l*xe,s[12]=o*M+a*V+c*de+l*Xe,s[1]=u*P+h*S+d*G+f*X,s[5]=u*D+h*I+d*K+f*oe,s[9]=u*N+h*k+d*Y+f*xe,s[13]=u*M+h*V+d*de+f*Xe,s[2]=g*P+_*S+m*G+p*X,s[6]=g*D+_*I+m*K+p*oe,s[10]=g*N+_*k+m*Y+p*xe,s[14]=g*M+_*V+m*de+p*Xe,s[3]=T*P+x*S+v*G+C*X,s[7]=T*D+x*I+v*K+C*oe,s[11]=T*N+x*k+v*Y+C*xe,s[15]=T*M+x*V+v*de+C*Xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*f-i*c*f)+_*(+t*c*f-t*l*d+s*o*d-r*o*f+r*l*u-s*c*u)+m*(+t*l*h-t*a*f-s*o*h+i*o*f+s*a*u-i*l*u)+p*(-r*a*u-t*c*h+t*a*d+r*o*h-i*o*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,x=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,v=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,C=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,P=t*T+i*x+r*v+s*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return e[0]=T*D,e[1]=(_*d*s-h*m*s-_*r*f+i*m*f+h*r*p-i*d*p)*D,e[2]=(a*m*s-_*c*s+_*r*l-i*m*l-a*r*p+i*c*p)*D,e[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*f-i*c*f)*D,e[4]=x*D,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*D,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*D,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*f+t*c*f)*D,e[8]=v*D,e[9]=(g*h*s-u*_*s-g*i*f+t*_*f+u*i*p-t*h*p)*D,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*p+t*a*p)*D,e[11]=(u*a*s-o*h*s-u*i*l+t*h*l+o*i*f-t*a*f)*D,e[12]=C*D,e[13]=(u*_*r-g*h*r+g*i*d-t*_*d-u*i*m+t*h*m)*D,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*m-t*a*m)*D,e[15]=(o*h*r-u*a*r+u*i*c-t*h*c-o*i*d+t*a*d)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,f=s*u,g=s*h,_=o*u,m=o*h,p=a*h,T=c*l,x=c*u,v=c*h,C=i.x,P=i.y,D=i.z;return r[0]=(1-(_+p))*C,r[1]=(f+v)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(f-v)*P,r[5]=(1-(d+p))*P,r[6]=(m+T)*P,r[7]=0,r[8]=(g+x)*D,r[9]=(m-T)*D,r[10]=(1-(d+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=$s.set(r[0],r[1],r[2]).length();const o=$s.set(r[4],r[5],r[6]).length(),a=$s.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$i.copy(this);const l=1/s,u=1/o,h=1/a;return $i.elements[0]*=l,$i.elements[1]*=l,$i.elements[2]*=l,$i.elements[4]*=u,$i.elements[5]*=u,$i.elements[6]*=u,$i.elements[8]*=h,$i.elements[9]*=h,$i.elements[10]*=h,t.setFromRotationMatrix($i),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=fr,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===fr)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===nl)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=fr,c=!1){const l=this.elements,u=2/(t-e),h=2/(i-r),d=-(t+e)/(t-e),f=-(i+r)/(i-r);let g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===fr)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===nl)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $s=new b,$i=new qt,W0=new b(0,0,0),X0=new b(1,1,1),Or=new b,cc=new b,Ei=new b,Lh=new qt,Ih=new mn;class ni{constructor(e=0,t=0,i=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Lh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class ju{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q0=0;const Nh=new b,js=new mn,vr=new qt,lc=new b,Wo=new b,Y0=new b,$0=new mn,Uh=new b(1,0,0),Fh=new b(0,1,0),kh=new b(0,0,1),Oh={type:"added"},j0={type:"removed"},Zs={type:"childadded",child:null},Yl={type:"childremoved",child:null};class vn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new b,t=new ni,i=new mn,r=new b(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new wt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ju,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Uh,e)}rotateY(e){return this.rotateOnAxis(Fh,e)}rotateZ(e){return this.rotateOnAxis(kh,e)}translateOnAxis(e,t){return Nh.copy(e).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uh,e)}translateY(e){return this.translateOnAxis(Fh,e)}translateZ(e){return this.translateOnAxis(kh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?lc.copy(e):lc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vr.lookAt(Wo,lc,this.up):vr.lookAt(lc,Wo,this.up),this.quaternion.setFromRotationMatrix(vr),r&&(vr.extractRotation(r.matrixWorld),js.setFromRotationMatrix(vr),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oh),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(j0),Yl.child=e,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(vr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oh),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,Y0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,$0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new b(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ji=new b,xr=new b,$l=new b,yr=new b,Ks=new b,Js=new b,zh=new b,jl=new b,Zl=new b,Kl=new b,Jl=new kt,Ql=new kt,ed=new kt;class Ji{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ji.subVectors(e,t),r.cross(ji);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ji.subVectors(r,t),xr.subVectors(i,t),$l.subVectors(e,t);const o=ji.dot(ji),a=ji.dot(xr),c=ji.dot($l),l=xr.dot(xr),u=xr.dot($l),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,yr)===null?!1:yr.x>=0&&yr.y>=0&&yr.x+yr.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,yr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,yr.x),c.addScaledVector(o,yr.y),c.addScaledVector(a,yr.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Jl.setScalar(0),Ql.setScalar(0),ed.setScalar(0),Jl.fromBufferAttribute(e,t),Ql.fromBufferAttribute(e,i),ed.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Jl,s.x),o.addScaledVector(Ql,s.y),o.addScaledVector(ed,s.z),o}static isFrontFacing(e,t,i,r){return ji.subVectors(i,t),xr.subVectors(e,t),ji.cross(xr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),ji.cross(xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ji.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Ji.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ks.subVectors(r,i),Js.subVectors(s,i),jl.subVectors(e,i);const c=Ks.dot(jl),l=Js.dot(jl);if(c<=0&&l<=0)return t.copy(i);Zl.subVectors(e,r);const u=Ks.dot(Zl),h=Js.dot(Zl);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Ks,o);Kl.subVectors(e,s);const f=Ks.dot(Kl),g=Js.dot(Kl);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Js,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return zh.subVectors(s,r),a=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(zh,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(Ks,o).addScaledVector(Js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},dc={h:0,s:0,l:0};function td(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Bt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Bt.workingColorSpace){if(e=Yu(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=td(o,s,e+1/3),this.g=td(o,s,e),this.b=td(o,s,e-1/3)}return Bt.colorSpaceToWorking(this,r),this}setStyle(e,t=ui){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const i=kp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Bt.workingToColorSpace(Zn.copy(this),e),Math.round(At(Zn.r*255,0,255))*65536+Math.round(At(Zn.g*255,0,255))*256+Math.round(At(Zn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(Zn.copy(this),t);const i=Zn.r,r=Zn.g,s=Zn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(Zn.copy(this),t),e.r=Zn.r,e.g=Zn.g,e.b=Zn.b,e}getStyle(e=ui){Bt.workingToColorSpace(Zn.copy(this),e);const t=Zn.r,i=Zn.g,r=Zn.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+t,zr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zr),e.getHSL(dc);const i=la(zr.h,dc.h,t),r=la(zr.s,dc.s,t),s=la(zr.l,dc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zn=new Nt;Nt.NAMES=kp;let Z0=0;class Io extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=ks(),this.name="",this.type="Material",this.blending=fo,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Bd,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(i.blending=this.blending),this.side!==Ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zd&&(i.blendSrc=this.blendSrc),this.blendDst!==Bd&&(i.blendDst=this.blendDst),this.blendEquation!==_s&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yn extends Io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=wp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wn=new b,uc=new Be;let K0=0;class Di{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Eh,this.updateRanges=[],this.gpuType=Mr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)uc.fromBufferAttribute(this,t),uc.applyMatrix3(e),this.setXY(t,uc.x,uc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix3(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=io(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=io(t,this.array)),t}setX(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=io(t,this.array)),t}setY(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=io(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=io(t,this.array)),t}setW(e,t){return this.normalized&&(t=ci(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),i=ci(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),i=ci(i,this.array),r=ci(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ci(t,this.array),i=ci(i,this.array),r=ci(r,this.array),s=ci(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eh&&(e.usage=this.usage),e}}class Op extends Di{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class zp extends Di{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Dt extends Di{constructor(e,t,i){super(new Float32Array(e),t,i)}}let J0=0;const Fi=new qt,nd=new vn,Qs=new b,Ti=new Do,Xo=new Do,zn=new b;class Ft extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Up(e)?zp:Op)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new wt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fi.makeRotationFromQuaternion(e),this.applyMatrix4(Fi),this}rotateX(e){return Fi.makeRotationX(e),this.applyMatrix4(Fi),this}rotateY(e){return Fi.makeRotationY(e),this.applyMatrix4(Fi),this}rotateZ(e){return Fi.makeRotationZ(e),this.applyMatrix4(Fi),this}translate(e,t,i){return Fi.makeTranslation(e,t,i),this.applyMatrix4(Fi),this}scale(e,t,i){return Fi.makeScale(e,t,i),this.applyMatrix4(Fi),this}lookAt(e){return nd.lookAt(e),nd.updateMatrix(),this.applyMatrix4(nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ti.setFromBufferAttribute(s),this.morphTargetsRelative?(zn.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(zn),zn.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(zn)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const i=this.boundingSphere.center;if(Ti.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Xo.setFromBufferAttribute(a),this.morphTargetsRelative?(zn.addVectors(Ti.min,Xo.min),Ti.expandByPoint(zn),zn.addVectors(Ti.max,Xo.max),Ti.expandByPoint(zn)):(Ti.expandByPoint(Xo.min),Ti.expandByPoint(Xo.max))}Ti.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)zn.fromBufferAttribute(a,l),c&&(Qs.fromBufferAttribute(e,l),zn.add(Qs)),r=Math.max(r,i.distanceToSquared(zn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new b,c[N]=new b;const l=new b,u=new b,h=new b,d=new Be,f=new Be,g=new Be,_=new b,m=new b;function p(N,M,S){l.fromBufferAttribute(i,N),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,N),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(I),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),a[N].add(_),a[M].add(_),a[S].add(_),c[N].add(m),c[M].add(m),c[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,M=T.length;N<M;++N){const S=T[N],I=S.start,k=S.count;for(let V=I,G=I+k;V<G;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const x=new b,v=new b,C=new b,P=new b;function D(N){C.fromBufferAttribute(r,N),P.copy(C);const M=a[N];x.copy(M),x.sub(C.multiplyScalar(C.dot(M))).normalize(),v.crossVectors(P,M);const I=v.dot(c[N])<0?-1:1;o.setXYZW(N,x.x,x.y,x.z,I)}for(let N=0,M=T.length;N<M;++N){const S=T[N],I=S.start,k=S.count;for(let V=I,G=I+k;V<G;V+=3)D(e.getX(V+0)),D(e.getX(V+1)),D(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Di(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new b,s=new b,o=new b,a=new b,c=new b,l=new b,u=new b,h=new b;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zn.fromBufferAttribute(e,t),zn.normalize(),e.setXYZ(t,zn.x,zn.y,zn.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new Di(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bh=new qt,cs=new Wa,hc=new Lo,Hh=new b,fc=new b,pc=new b,mc=new b,id=new b,gc=new b,Vh=new b,_c=new b;class Ee extends vn{constructor(e=new Ft,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){gc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(id.fromBufferAttribute(h,e),o?gc.addScaledVector(id,u):gc.addScaledVector(id.sub(t),u))}t.add(gc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),hc.copy(i.boundingSphere),hc.applyMatrix4(s),cs.copy(e.ray).recast(e.near),!(hc.containsPoint(cs.origin)===!1&&(cs.intersectSphere(hc,Hh)===null||cs.origin.distanceToSquared(Hh)>(e.far-e.near)**2))&&(Bh.copy(s).invert(),cs.copy(e.ray).applyMatrix4(Bh),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=T,C=x;v<C;v+=3){const P=a.getX(v),D=a.getX(v+1),N=a.getX(v+2);r=vc(this,p,e,i,l,u,h,P,D,N),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);r=vc(this,o,e,i,l,u,h,T,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=T,C=x;v<C;v+=3){const P=v,D=v+1,N=v+2;r=vc(this,p,e,i,l,u,h,P,D,N),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const T=m,x=m+1,v=m+2;r=vc(this,o,e,i,l,u,h,T,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Q0(n,e,t,i,r,s,o,a){let c;if(e.side===vi?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Ar,a),c===null)return null;_c.copy(a),_c.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(_c);return l<t.near||l>t.far?null:{distance:l,point:_c.clone(),object:n}}function vc(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,fc),n.getVertexPosition(c,pc),n.getVertexPosition(l,mc);const u=Q0(n,e,t,i,fc,pc,mc,Vh);if(u){const h=new b;Ji.getBarycoord(Vh,fc,pc,mc,h),r&&(u.uv=Ji.getInterpolatedAttribute(r,a,c,l,h,new Be)),s&&(u.uv1=Ji.getInterpolatedAttribute(s,a,c,l,h,new Be)),o&&(u.normal=Ji.getInterpolatedAttribute(o,a,c,l,h,new b),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new b,materialIndex:0};Ji.getNormal(fc,pc,mc,d.normal),u.face=d,u.barycoord=h}return u}class Tn extends Ft{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(h,2));function g(_,m,p,T,x,v,C,P,D,N,M){const S=v/D,I=C/N,k=v/2,V=C/2,G=P/2,K=D+1,Y=N+1;let de=0,X=0;const oe=new b;for(let xe=0;xe<Y;xe++){const Xe=xe*I-V;for(let it=0;it<K;it++){const gt=it*S-k;oe[_]=gt*T,oe[m]=Xe*x,oe[p]=G,l.push(oe.x,oe.y,oe.z),oe[_]=0,oe[m]=0,oe[p]=P>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(it/D),h.push(1-xe/N),de+=1}}for(let xe=0;xe<N;xe++)for(let Xe=0;Xe<D;Xe++){const it=d+Xe+K*xe,gt=d+Xe+K*(xe+1),xt=d+(Xe+1)+K*(xe+1),J=d+(Xe+1)+K*xe;c.push(it,gt,J),c.push(gt,xt,J),X+=6}a.addGroup(f,X,M),f+=X,d+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function li(n){const e={};for(let t=0;t<n.length;t++){const i=wo(n[t]);for(const r in i)e[r]=i[r]}return e}function e_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}const t_={clone:wo,merge:li};var n_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rr extends Io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n_,this.fragmentShader=i_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=e_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Hp extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=fr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Br=new b,Gh=new Be,Wh=new Be;class Ci extends Hp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,t){return this.getViewBounds(e,Gh,Wh),t.subVectors(Wh,Gh)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ca*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const eo=-90,to=1;class r_ extends vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ci(eo,to,e,t);r.layers=this.layers,this.add(r);const s=new Ci(eo,to,e,t);s.layers=this.layers,this.add(s);const o=new Ci(eo,to,e,t);o.layers=this.layers,this.add(o);const a=new Ci(eo,to,e,t);a.layers=this.layers,this.add(a);const c=new Ci(eo,to,e,t);c.layers=this.layers,this.add(c);const l=new Ci(eo,to,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===fr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Vp extends xi{constructor(e=[],t=So,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class s_ extends Ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Vp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Tn(5,5,5),s=new Rr({name:"CubemapFromEquirect",uniforms:wo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vi,blending:$r});s.uniforms.tEquirect.value=t;const o=new Ee(r,s),a=t.minFilter;return t.minFilter===bs&&(t.minFilter=hr),new r_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Sn extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o_={type:"move"};class rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(o_)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Sn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class a_ extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const sd=new b,c_=new b,l_=new wt;class Wr{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=sd.subVectors(i,t).cross(c_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(sd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||l_.getNormalMatrix(e),r=this.coplanarPoint(sd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new Lo,d_=new Be(.5,.5),xc=new b;class Zu{constructor(e=new Wr,t=new Wr,i=new Wr,r=new Wr,s=new Wr,o=new Wr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],T=s[12],x=s[13],v=s[14],C=s[15];if(r[0].setComponents(l-o,f-u,p-g,C-T).normalize(),r[1].setComponents(l+o,f+u,p+g,C+T).normalize(),r[2].setComponents(l+a,f+h,p+_,C+x).normalize(),r[3].setComponents(l-a,f-h,p-_,C-x).normalize(),i)r[4].setComponents(c,d,m,v).normalize(),r[5].setComponents(l-c,f-d,p-m,C-v).normalize();else if(r[4].setComponents(l-c,f-d,p-m,C-v).normalize(),t===fr)r[5].setComponents(l+c,f+d,p+m,C+v).normalize();else if(t===nl)r[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);const t=d_.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(xc.x=r.normal.x>0?e.max.x:e.min.x,xc.y=r.normal.y>0?e.max.y:e.min.y,xc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yi extends Io{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rl=new b,sl=new b,Xh=new qt,qo=new Wa,yc=new Lo,od=new b,qh=new b;class rn extends vn{constructor(e=new Ft,t=new yi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)rl.fromBufferAttribute(t,r-1),sl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=rl.distanceTo(sl);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(r),yc.radius+=s,e.ray.intersectsSphere(yc)===!1)return;Xh.copy(r).invert(),qo.copy(e.ray).applyMatrix4(Xh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),T=u.getX(_+1),x=Sc(this,e,qo,c,p,T,_);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Sc(this,e,qo,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=Sc(this,e,qo,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Sc(this,e,qo,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Sc(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(rl.fromBufferAttribute(a,r),sl.fromBufferAttribute(a,s),t.distanceSqToSegment(rl,sl,od,qh)>i)return;od.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(od);if(!(l<e.near||l>e.far))return{distance:l,point:qh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Yh=new b,$h=new b;class u_ extends rn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Yh.fromBufferAttribute(t,r),$h.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Yh.distanceTo($h);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class h_ extends rn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Gp extends Io{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jh=new qt,wu=new Wa,bc=new Lo,Mc=new b;class Wp extends vn{constructor(e=new Ft,t=new Gp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bc.copy(i.boundingSphere),bc.applyMatrix4(r),bc.radius+=s,e.ray.intersectsSphere(bc)===!1)return;jh.copy(r).invert(),wu.copy(e.ray).applyMatrix4(jh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Mc.fromBufferAttribute(h,m),Zh(Mc,m,c,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Mc.fromBufferAttribute(h,g),Zh(Mc,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zh(n,e,t,i,r,s,o){const a=wu.distanceSqToPoint(n);if(a<t){const c=new b;wu.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Xp extends xi{constructor(e,t,i=Ps,r,s,o,a=tr,c=tr,l,u=ya,h=1){if(u!==ya&&u!==Sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $u(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ma extends Ft{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new b,u=new Be;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=i+h/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(a,3)),this.setAttribute("uv",new Dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Jn extends Ft{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;T(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Dt(h,3)),this.setAttribute("normal",new Dt(d,3)),this.setAttribute("uv",new Dt(f,2));function T(){const v=new b,C=new b;let P=0;const D=(t-e)/i;for(let N=0;N<=s;N++){const M=[],S=N/s,I=S*(t-e)+e;for(let k=0;k<=r;k++){const V=k/r,G=V*c+a,K=Math.sin(G),Y=Math.cos(G);C.x=I*K,C.y=-S*i+m,C.z=I*Y,h.push(C.x,C.y,C.z),v.set(K,D,Y).normalize(),d.push(v.x,v.y,v.z),f.push(V,1-S),M.push(g++)}_.push(M)}for(let N=0;N<r;N++)for(let M=0;M<s;M++){const S=_[M][N],I=_[M+1][N],k=_[M+1][N+1],V=_[M][N+1];(e>0||M!==0)&&(u.push(S,I,V),P+=3),(t>0||M!==s-1)&&(u.push(I,k,V),P+=3)}l.addGroup(p,P,0),p+=P}function x(v){const C=g,P=new Be,D=new b;let N=0;const M=v===!0?e:t,S=v===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const I=g;for(let k=0;k<=r;k++){const G=k/r*c+a,K=Math.cos(G),Y=Math.sin(G);D.x=M*Y,D.y=m*S,D.z=M*K,h.push(D.x,D.y,D.z),d.push(0,S,0),P.x=K*.5+.5,P.y=Y*.5*S+.5,f.push(P.x,P.y),g++}for(let k=0;k<r;k++){const V=C+k,G=I+k;v===!0?u.push(G,G+1,V):u.push(G+1,G,V),N+=3}l.addGroup(p,N,v===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ku extends Ft{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new Dt(s,3)),this.setAttribute("normal",new Dt(s.slice(),3)),this.setAttribute("uv",new Dt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const x=new b,v=new b,C=new b;for(let P=0;P<t.length;P+=3)f(t[P+0],x),f(t[P+1],v),f(t[P+2],C),c(x,v,C,T)}function c(T,x,v,C){const P=C+1,D=[];for(let N=0;N<=P;N++){D[N]=[];const M=T.clone().lerp(v,N/P),S=x.clone().lerp(v,N/P),I=P-N;for(let k=0;k<=I;k++)k===0&&N===P?D[N][k]=M:D[N][k]=M.clone().lerp(S,k/I)}for(let N=0;N<P;N++)for(let M=0;M<2*(P-N)-1;M++){const S=Math.floor(M/2);M%2===0?(d(D[N][S+1]),d(D[N+1][S]),d(D[N][S])):(d(D[N][S+1]),d(D[N+1][S+1]),d(D[N+1][S]))}}function l(T){const x=new b;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(T),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function u(){const T=new b;for(let x=0;x<s.length;x+=3){T.x=s[x+0],T.y=s[x+1],T.z=s[x+2];const v=m(T)/2/Math.PI+.5,C=p(T)/Math.PI+.5;o.push(v,1-C)}g(),h()}function h(){for(let T=0;T<o.length;T+=6){const x=o[T+0],v=o[T+2],C=o[T+4],P=Math.max(x,v,C),D=Math.min(x,v,C);P>.9&&D<.1&&(x<.2&&(o[T+0]+=1),v<.2&&(o[T+2]+=1),C<.2&&(o[T+4]+=1))}}function d(T){s.push(T.x,T.y,T.z)}function f(T,x){const v=T*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){const T=new b,x=new b,v=new b,C=new b,P=new Be,D=new Be,N=new Be;for(let M=0,S=0;M<s.length;M+=9,S+=6){T.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),P.set(o[S+0],o[S+1]),D.set(o[S+2],o[S+3]),N.set(o[S+4],o[S+5]),C.copy(T).add(x).add(v).divideScalar(3);const I=m(C);_(P,S+0,T,I),_(D,S+2,x,I),_(N,S+4,v,I)}}function _(T,x,v,C){C<0&&T.x===1&&(o[x]=T.x-1),v.x===0&&v.z===0&&(o[x]=C/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ku(e.vertices,e.indices,e.radius,e.details)}}class mr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],d=i[r+1]-u,f=(o-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new Be:new b);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new b,r=[],s=[],o=[],a=new b,c=new qt;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new b)}s[0]=new b,o[0]=new b;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(At(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(At(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ju extends mr{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Be){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class f_ extends Ju{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qu(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const wc=new b,ad=new Qu,cd=new Qu,ld=new Qu;class eh extends mr{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new b){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(wc.subVectors(r[0],r[1]).add(r[0]),l=wc);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(wc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=wc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ad.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,m),cd.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,m),ld.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ad.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),cd.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),ld.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(ad.calc(c),cd.calc(c),ld.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new b().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Kh(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function p_(n,e){const t=1-n;return t*t*e}function m_(n,e){return 2*(1-n)*n*e}function g_(n,e){return n*n*e}function da(n,e,t,i){return p_(n,e)+m_(n,t)+g_(n,i)}function __(n,e){const t=1-n;return t*t*t*e}function v_(n,e){const t=1-n;return 3*t*t*n*e}function x_(n,e){return 3*(1-n)*n*n*e}function y_(n,e){return n*n*n*e}function ua(n,e,t,i,r){return __(n,e)+v_(n,t)+x_(n,i)+y_(n,r)}class qp extends mr{constructor(e=new Be,t=new Be,i=new Be,r=new Be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Be){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ua(e,r.x,s.x,o.x,a.x),ua(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class S_ extends mr{constructor(e=new b,t=new b,i=new b,r=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new b){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ua(e,r.x,s.x,o.x,a.x),ua(e,r.y,s.y,o.y,a.y),ua(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Yp extends mr{constructor(e=new Be,t=new Be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Be){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class b_ extends mr{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $p extends mr{constructor(e=new Be,t=new Be,i=new Be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Be){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(da(e,r.x,s.x,o.x),da(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M_ extends mr{constructor(e=new b,t=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(da(e,r.x,s.x,o.x),da(e,r.y,s.y,o.y),da(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jp extends mr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Be){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Kh(a,c.x,l.x,u.x,h.x),Kh(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Be().fromArray(r))}return this}}var Jh=Object.freeze({__proto__:null,ArcCurve:f_,CatmullRomCurve3:eh,CubicBezierCurve:qp,CubicBezierCurve3:S_,EllipseCurve:Ju,LineCurve:Yp,LineCurve3:b_,QuadraticBezierCurve:$p,QuadraticBezierCurve3:M_,SplineCurve:jp});class w_ extends mr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jh[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Jh[r.type]().fromJSON(r))}return this}}class Qh extends w_{constructor(e){super(),this.type="Path",this.currentPoint=new Be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Yp(this.currentPoint.clone(),new Be(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new $p(this.currentPoint.clone(),new Be(e,t),new Be(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new qp(this.currentPoint.clone(),new Be(e,t),new Be(i,r),new Be(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new jp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new Ju(e,t,i,r,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Zp extends Qh{constructor(e){super(e),this.uuid=ks(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Qh().fromJSON(r))}return this}}function E_(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Kp(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=P_(n,e,s,t)),n.length>80*t){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let d=t;d<r;d+=t){const f=n[d],g=n[d+1];f<a&&(a=f),g<c&&(c=g),f>u&&(u=f),g>h&&(h=g)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return wa(s,o,t,a,c,l,0),o}function Kp(n,e,t,i,r){let s;if(r===H_(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=ef(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=ef(o/i|0,n[o],n[o+1],s);return s&&Eo(s,s.next)&&(Ta(s),s=s.next),s}function Ls(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Eo(t,t.next)||gn(t.prev,t,t.next)===0)){if(Ta(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function wa(n,e,t,i,r,s,o){if(!n)return;!o&&s&&U_(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?A_(n,i,r,s):T_(n)){e.push(c.i,n.i,l.i),Ta(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=R_(Ls(n),e),wa(n,e,t,i,r,s,2)):o===2&&C_(n,e,t,i,r,s):wa(Ls(n),e,t,i,r,s,1);break}}}function T_(n){const e=n.prev,t=n,i=n.next;if(gn(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(r,s,o),h=Math.min(a,c,l),d=Math.max(r,s,o),f=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&ia(r,a,s,c,o,l,g.x,g.y)&&gn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function A_(n,e,t,i){const r=n.prev,s=n,o=n.next;if(gn(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,h=s.y,d=o.y,f=Math.min(a,c,l),g=Math.min(u,h,d),_=Math.max(a,c,l),m=Math.max(u,h,d),p=Eu(f,g,e,t,i),T=Eu(_,m,e,t,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=p&&v&&v.z<=T;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&ia(a,u,c,h,l,d,x.x,x.y)&&gn(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&ia(a,u,c,h,l,d,v.x,v.y)&&gn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&ia(a,u,c,h,l,d,x.x,x.y)&&gn(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=T;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&ia(a,u,c,h,l,d,v.x,v.y)&&gn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function R_(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Eo(i,r)&&Qp(i,t,t.next,r)&&Ea(i,r)&&Ea(r,i)&&(e.push(i.i,t.i,r.i),Ta(t),Ta(t.next),t=n=r),t=t.next}while(t!==n);return Ls(t)}function C_(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&O_(o,a)){let c=em(o,a);o=Ls(o,o.next),c=Ls(c,c.next),wa(o,e,t,i,r,s,0),wa(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function P_(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=Kp(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(k_(l))}r.sort(D_);for(let s=0;s<r.length;s++)t=L_(r[s],t);return t}function D_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function L_(n,e){const t=I_(n,e);if(!t)return e;const i=em(t,n);return Ls(i,i.next),Ls(t,t.next)}function I_(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(Eo(n,t))return t;do{if(Eo(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Jp(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const h=Math.abs(r-t.y)/(i-t.x);Ea(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&N_(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function N_(n,e){return gn(n.prev,n,e.prev)<0&&gn(e.next,n,n.next)<0}function U_(n,e,t,i){let r=n;do r.z===0&&(r.z=Eu(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,F_(r)}function F_(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Eu(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function k_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Jp(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function ia(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&Jp(n,e,t,i,r,s,o,a)}function O_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!z_(n,e)&&(Ea(n,e)&&Ea(e,n)&&B_(n,e)&&(gn(n.prev,n,e.prev)||gn(n,e.prev,e))||Eo(n,e)&&gn(n.prev,n,n.next)>0&&gn(e.prev,e,e.next)>0)}function gn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Eo(n,e){return n.x===e.x&&n.y===e.y}function Qp(n,e,t,i){const r=Tc(gn(n,e,t)),s=Tc(gn(n,e,i)),o=Tc(gn(t,i,n)),a=Tc(gn(t,i,e));return!!(r!==s&&o!==a||r===0&&Ec(n,t,e)||s===0&&Ec(n,i,e)||o===0&&Ec(t,n,i)||a===0&&Ec(t,e,i))}function Ec(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Tc(n){return n>0?1:n<0?-1:0}function z_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Qp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ea(n,e){return gn(n.prev,n,n.next)<0?gn(n,e,n.next)>=0&&gn(n,n.prev,e)>=0:gn(n,e,n.prev)<0||gn(n,n.next,e)<0}function B_(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function em(n,e){const t=Tu(n.i,n.x,n.y),i=Tu(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function ef(n,e,t,i){const r=Tu(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ta(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Tu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function H_(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class V_{static triangulate(e,t,i=2){return E_(e,t,i)}}class ha{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ha.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];tf(e),nf(i,e);let o=e.length;t.forEach(tf);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,nf(i,t[c]);const a=V_.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function tf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function nf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ms extends Ku{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ms(e.radius,e.detail)}}class Jr extends Ft{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const T=p*d-o;for(let x=0;x<l;x++){const v=x*h-s;g.push(v,-T,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const x=T+l*p,v=T+l*(p+1),C=T+1+l*(p+1),P=T+1+l*p;f.push(x,v,P),f.push(v,C,P)}this.setIndex(f),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ml extends Ft{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let h=e;const d=(t-e)/r,f=new b,g=new Be;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const p=s+m/i*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<r;_++){const m=_*(i+1);for(let p=0;p<i;p++){const T=p+m,x=T,v=T+i+1,C=T+i+2,P=T+1;a.push(x,v,P),a.push(v,C,P)}}this.setIndex(a),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class th extends Ft{constructor(e=new Zp([new Be(0,.5),new Be(-.5,-.5),new Be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Dt(r,3)),this.setAttribute("normal",new Dt(s,3)),this.setAttribute("uv",new Dt(o,2));function l(u){const h=r.length/3,d=u.extractPoints(t);let f=d.shape;const g=d.holes;ha.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const T=g[m];ha.isClockWise(T)===!0&&(g[m]=T.reverse())}const _=ha.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const T=g[m];f=f.concat(T)}for(let m=0,p=f.length;m<p;m++){const T=f[m];r.push(T.x,T.y,0),s.push(0,0,1),o.push(T.x,T.y)}for(let m=0,p=_.length;m<p;m++){const T=_[m],x=T[0]+h,v=T[1]+h,C=T[2]+h;i.push(x,v,C),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return G_(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new th(i,e.curveSegments)}}function G_(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class Zr extends Ft{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new b,d=new b,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const T=[],x=p/i;let v=0;p===0&&o===0?v=.5/t:p===i&&c===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){const P=C/t;h.x=-e*Math.cos(r+P*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+P*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(P+v,1-x),T.push(l++)}u.push(T)}for(let p=0;p<i;p++)for(let T=0;T<t;T++){const x=u[p][T+1],v=u[p][T],C=u[p+1][T],P=u[p+1][T+1];(p!==0||o>0)&&f.push(x,v,P),(p!==i-1||c<Math.PI)&&f.push(v,C,P)}this.setIndex(f),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vs extends Ft{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new b,h=new b,d=new b;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){const _=g/r*s,m=f/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){const _=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,p=(r+1)*(f-1)+g,T=(r+1)*f+g;o.push(_,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class W_ extends Io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class X_ extends Io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class rf extends yi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class q_ extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const dd=new qt,sf=new b,of=new b;class Y_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=pr,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zu,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;sf.setFromMatrixPosition(e.matrixWorld),t.position.copy(sf),of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(of),t.updateMatrixWorld(),dd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const af=new qt,Yo=new b,ud=new b;class $_ extends Y_{constructor(){super(new Ci(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new kt(2,1,1,1),new kt(0,1,1,1),new kt(3,1,1,1),new kt(1,1,1,1),new kt(3,0,1,1),new kt(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Yo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Yo),ud.copy(i.position),ud.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ud),i.updateMatrixWorld(),r.makeTranslation(-Yo.x,-Yo.y,-Yo.z),af.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af,i.coordinateSystem,i.reversedDepth)}}class j_ extends q_{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new $_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Z_ extends Hp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class K_ extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const cf=new qt;class tm{constructor(e,t,i=0,r=1/0){this.ray=new Wa(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ju,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cf),this}intersectObject(e,t=!0,i=[]){return Au(e,this,i,t),i.sort(lf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Au(e[r],this,i,t);return i.sort(lf),i}}function lf(n,e){return n.distance-e.distance}function Au(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Au(s[o],e,t,!0)}}class df{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=At(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class nm extends Fs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function uf(n,e,t,i){const r=J_(i);switch(t){case Cp:return n*e;case Dp:return n*e/r.components*r.byteLength;case Wu:return n*e/r.components*r.byteLength;case Lp:return n*e*2/r.components*r.byteLength;case Xu:return n*e*2/r.components*r.byteLength;case Pp:return n*e*3/r.components*r.byteLength;case Qi:return n*e*4/r.components*r.byteLength;case qu:return n*e*4/r.components*r.byteLength;case Hc:case Vc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gc:case Wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qd:case tu:return Math.max(n,16)*Math.max(e,8)/4;case Jd:case eu:return Math.max(n,8)*Math.max(e,8)/2;case nu:case iu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ru:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case su:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ou:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case au:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case cu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case lu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case du:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case uu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case fu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case pu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case mu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _u:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case vu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Xc:case xu:case yu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ip:case Su:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bu:case Mu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function J_(n){switch(n){case pr:case Tp:return{byteLength:1,components:1};case va:case Ap:case Ga:return{byteLength:2,components:1};case Vu:case Gu:return{byteLength:2,components:4};case Ps:case Hu:case Mr:return{byteLength:4,components:1};case Rp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bu);function im(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Q_(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var ev=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tv=`#ifdef USE_ALPHAHASH
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
#endif`,nv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ov=`#ifdef USE_AOMAP
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
#endif`,av=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cv=`#ifdef USE_BATCHING
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
#endif`,lv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fv=`#ifdef USE_IRIDESCENCE
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
#endif`,pv=`#ifdef USE_BUMPMAP
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
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mv=`#define PI 3.141592653589793
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
} // validated`,wv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ev=`vec3 transformedNormal = objectNormal;
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
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Av=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lv=`#ifdef USE_ENVMAP
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
#endif`,Iv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nv=`#ifdef USE_ENVMAP
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
#endif`,Uv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ov=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hv=`#ifdef USE_GRADIENTMAP
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
}`,Vv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xv=`uniform bool receiveShadow;
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
#endif`,qv=`#ifdef USE_ENVMAP
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
#endif`,Yv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kv=`PhysicalMaterial material;
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
#endif`,Jv=`struct PhysicalMaterial {
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
}`,Qv=`
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
#endif`,ex=`#if defined( RE_IndirectDiffuse )
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
#endif`,tx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ix=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lx=`#if defined( USE_POINTS_UV )
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
#endif`,dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`#ifdef USE_MORPHTARGETS
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
#endif`,gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_x=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bx=`#ifdef USE_NORMALMAP
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
#endif`,Mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ox=`float getShadowMask() {
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
}`,zx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bx=`#ifdef USE_SKINNING
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
#endif`,Hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vx=`#ifdef USE_SKINNING
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
#endif`,Gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yx=`#ifdef USE_TRANSMISSION
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
#endif`,$x=`#ifdef USE_TRANSMISSION
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
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ey=`uniform sampler2D t2D;
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
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ny=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`#include <common>
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
}`,oy=`#if DEPTH_PACKING == 3200
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
}`,ay=`#define DISTANCE
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
}`,cy=`#define DISTANCE
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
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`uniform float scale;
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
}`,hy=`uniform vec3 diffuse;
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
}`,fy=`#include <common>
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
}`,py=`uniform vec3 diffuse;
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
}`,my=`#define LAMBERT
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
}`,gy=`#define LAMBERT
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
}`,_y=`#define MATCAP
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
}`,vy=`#define MATCAP
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
}`,xy=`#define NORMAL
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
}`,yy=`#define NORMAL
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
}`,Sy=`#define PHONG
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
}`,by=`#define PHONG
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
}`,My=`#define STANDARD
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
}`,wy=`#define STANDARD
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
}`,Ey=`#define TOON
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
}`,Ty=`#define TOON
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
}`,Ay=`uniform float size;
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Cy=`#include <common>
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
}`,Py=`uniform vec3 color;
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
}`,Dy=`uniform float rotation;
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:ev,alphahash_pars_fragment:tv,alphamap_fragment:nv,alphamap_pars_fragment:iv,alphatest_fragment:rv,alphatest_pars_fragment:sv,aomap_fragment:ov,aomap_pars_fragment:av,batching_pars_vertex:cv,batching_vertex:lv,begin_vertex:dv,beginnormal_vertex:uv,bsdfs:hv,iridescence_fragment:fv,bumpmap_pars_fragment:pv,clipping_planes_fragment:mv,clipping_planes_pars_fragment:gv,clipping_planes_pars_vertex:_v,clipping_planes_vertex:vv,color_fragment:xv,color_pars_fragment:yv,color_pars_vertex:Sv,color_vertex:bv,common:Mv,cube_uv_reflection_fragment:wv,defaultnormal_vertex:Ev,displacementmap_pars_vertex:Tv,displacementmap_vertex:Av,emissivemap_fragment:Rv,emissivemap_pars_fragment:Cv,colorspace_fragment:Pv,colorspace_pars_fragment:Dv,envmap_fragment:Lv,envmap_common_pars_fragment:Iv,envmap_pars_fragment:Nv,envmap_pars_vertex:Uv,envmap_physical_pars_fragment:qv,envmap_vertex:Fv,fog_vertex:kv,fog_pars_vertex:Ov,fog_fragment:zv,fog_pars_fragment:Bv,gradientmap_pars_fragment:Hv,lightmap_pars_fragment:Vv,lights_lambert_fragment:Gv,lights_lambert_pars_fragment:Wv,lights_pars_begin:Xv,lights_toon_fragment:Yv,lights_toon_pars_fragment:$v,lights_phong_fragment:jv,lights_phong_pars_fragment:Zv,lights_physical_fragment:Kv,lights_physical_pars_fragment:Jv,lights_fragment_begin:Qv,lights_fragment_maps:ex,lights_fragment_end:tx,logdepthbuf_fragment:nx,logdepthbuf_pars_fragment:ix,logdepthbuf_pars_vertex:rx,logdepthbuf_vertex:sx,map_fragment:ox,map_pars_fragment:ax,map_particle_fragment:cx,map_particle_pars_fragment:lx,metalnessmap_fragment:dx,metalnessmap_pars_fragment:ux,morphinstance_vertex:hx,morphcolor_vertex:fx,morphnormal_vertex:px,morphtarget_pars_vertex:mx,morphtarget_vertex:gx,normal_fragment_begin:_x,normal_fragment_maps:vx,normal_pars_fragment:xx,normal_pars_vertex:yx,normal_vertex:Sx,normalmap_pars_fragment:bx,clearcoat_normal_fragment_begin:Mx,clearcoat_normal_fragment_maps:wx,clearcoat_pars_fragment:Ex,iridescence_pars_fragment:Tx,opaque_fragment:Ax,packing:Rx,premultiplied_alpha_fragment:Cx,project_vertex:Px,dithering_fragment:Dx,dithering_pars_fragment:Lx,roughnessmap_fragment:Ix,roughnessmap_pars_fragment:Nx,shadowmap_pars_fragment:Ux,shadowmap_pars_vertex:Fx,shadowmap_vertex:kx,shadowmask_pars_fragment:Ox,skinbase_vertex:zx,skinning_pars_vertex:Bx,skinning_vertex:Hx,skinnormal_vertex:Vx,specularmap_fragment:Gx,specularmap_pars_fragment:Wx,tonemapping_fragment:Xx,tonemapping_pars_fragment:qx,transmission_fragment:Yx,transmission_pars_fragment:$x,uv_pars_fragment:jx,uv_pars_vertex:Zx,uv_vertex:Kx,worldpos_vertex:Jx,background_vert:Qx,background_frag:ey,backgroundCube_vert:ty,backgroundCube_frag:ny,cube_vert:iy,cube_frag:ry,depth_vert:sy,depth_frag:oy,distanceRGBA_vert:ay,distanceRGBA_frag:cy,equirect_vert:ly,equirect_frag:dy,linedashed_vert:uy,linedashed_frag:hy,meshbasic_vert:fy,meshbasic_frag:py,meshlambert_vert:my,meshlambert_frag:gy,meshmatcap_vert:_y,meshmatcap_frag:vy,meshnormal_vert:xy,meshnormal_frag:yy,meshphong_vert:Sy,meshphong_frag:by,meshphysical_vert:My,meshphysical_frag:wy,meshtoon_vert:Ey,meshtoon_frag:Ty,points_vert:Ay,points_frag:Ry,shadow_vert:Cy,shadow_frag:Py,sprite_vert:Dy,sprite_frag:Ly},He={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},ur={basic:{uniforms:li([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:li([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:li([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:li([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:li([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:li([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:li([He.points,He.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:li([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:li([He.common,He.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:li([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:li([He.sprite,He.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:li([He.common,He.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:li([He.lights,He.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};ur.physical={uniforms:li([ur.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const Ac={r:0,b:0,g:0},ds=new ni,Iy=new qt;function Ny(n,e,t,i,r,s,o){const a=new Nt(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const C=g(x);C===null?p(a,c):C&&C.isColor&&(p(C,1),v=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,v){const C=g(v);C&&(C.isCubeTexture||C.mapping===bl)?(u===void 0&&(u=new Ee(new Tn(1,1,1),new Rr({name:"BackgroundCubeMaterial",uniforms:wo(ur.backgroundCube.uniforms),vertexShader:ur.backgroundCube.vertexShader,fragmentShader:ur.backgroundCube.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ds.copy(v.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(ds)),u.material.toneMapped=Bt.getTransfer(C.colorSpace)!==Zt,(h!==C||d!==C.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=C,d=C.version,f=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Ee(new Jr(2,2),new Rr({name:"BackgroundMaterial",uniforms:wo(ur.background.uniforms),vertexShader:ur.background.vertexShader,fragmentShader:ur.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Bt.getTransfer(C.colorSpace)!==Zt,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||d!==C.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=C,d=C.version,f=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,v){x.getRGB(Ac,Bp(n)),i.buffers.color.setClear(Ac.r,Ac.g,Ac.b,v,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:_,addToRenderList:m,dispose:T}}function Uy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,I,k,V,G){let K=!1;const Y=h(V,k,I);s!==Y&&(s=Y,l(s.object)),K=f(S,V,k,G),K&&g(S,V,k,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,v(S,I,k,V),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,I,k){const V=k.wireframe===!0;let G=i[S.id];G===void 0&&(G={},i[S.id]=G);let K=G[I.id];K===void 0&&(K={},G[I.id]=K);let Y=K[V];return Y===void 0&&(Y=d(c()),K[V]=Y),Y}function d(S){const I=[],k=[],V=[];for(let G=0;G<t;G++)I[G]=0,k[G]=0,V[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:V,object:S,attributes:{},index:null}}function f(S,I,k,V){const G=s.attributes,K=I.attributes;let Y=0;const de=k.getAttributes();for(const X in de)if(de[X].location>=0){const xe=G[X];let Xe=K[X];if(Xe===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Xe=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Xe=S.instanceColor)),xe===void 0||xe.attribute!==Xe||Xe&&xe.data!==Xe.data)return!0;Y++}return s.attributesNum!==Y||s.index!==V}function g(S,I,k,V){const G={},K=I.attributes;let Y=0;const de=k.getAttributes();for(const X in de)if(de[X].location>=0){let xe=K[X];xe===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(xe=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(xe=S.instanceColor));const Xe={};Xe.attribute=xe,xe&&xe.data&&(Xe.data=xe.data),G[X]=Xe,Y++}s.attributes=G,s.attributesNum=Y,s.index=V}function _(){const S=s.newAttributes;for(let I=0,k=S.length;I<k;I++)S[I]=0}function m(S){p(S,0)}function p(S,I){const k=s.newAttributes,V=s.enabledAttributes,G=s.attributeDivisors;k[S]=1,V[S]===0&&(n.enableVertexAttribArray(S),V[S]=1),G[S]!==I&&(n.vertexAttribDivisor(S,I),G[S]=I)}function T(){const S=s.newAttributes,I=s.enabledAttributes;for(let k=0,V=I.length;k<V;k++)I[k]!==S[k]&&(n.disableVertexAttribArray(k),I[k]=0)}function x(S,I,k,V,G,K,Y){Y===!0?n.vertexAttribIPointer(S,I,k,G,K):n.vertexAttribPointer(S,I,k,V,G,K)}function v(S,I,k,V){_();const G=V.attributes,K=k.getAttributes(),Y=I.defaultAttributeValues;for(const de in K){const X=K[de];if(X.location>=0){let oe=G[de];if(oe===void 0&&(de==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),de==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),oe!==void 0){const xe=oe.normalized,Xe=oe.itemSize,it=e.get(oe);if(it===void 0)continue;const gt=it.buffer,xt=it.type,J=it.bytesPerElement,Ae=xt===n.INT||xt===n.UNSIGNED_INT||oe.gpuType===Hu;if(oe.isInterleavedBufferAttribute){const re=oe.data,Ye=re.stride,te=oe.offset;if(re.isInstancedInterleavedBuffer){for(let fe=0;fe<X.locationSize;fe++)p(X.location+fe,re.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let fe=0;fe<X.locationSize;fe++)m(X.location+fe);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let fe=0;fe<X.locationSize;fe++)x(X.location+fe,Xe/X.locationSize,xt,xe,Ye*J,(te+Xe/X.locationSize*fe)*J,Ae)}else{if(oe.isInstancedBufferAttribute){for(let re=0;re<X.locationSize;re++)p(X.location+re,oe.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let re=0;re<X.locationSize;re++)m(X.location+re);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let re=0;re<X.locationSize;re++)x(X.location+re,Xe/X.locationSize,xt,xe,Xe*J,Xe/X.locationSize*re*J,Ae)}}else if(Y!==void 0){const xe=Y[de];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(X.location,xe);break;case 3:n.vertexAttrib3fv(X.location,xe);break;case 4:n.vertexAttrib4fv(X.location,xe);break;default:n.vertexAttrib1fv(X.location,xe)}}}}T()}function C(){N();for(const S in i){const I=i[S];for(const k in I){const V=I[k];for(const G in V)u(V[G].object),delete V[G];delete I[k]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const k in I){const V=I[k];for(const G in V)u(V[G].object),delete V[G];delete I[k]}delete i[S.id]}function D(S){for(const I in i){const k=i[I];if(k[S.id]===void 0)continue;const V=k[S.id];for(const G in V)u(V[G].object),delete V[G];delete k[S.id]}}function N(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function Fy(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ky(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Qi&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const N=D===Ga&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==pr&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Mr&&!N)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:C,maxSamples:P}}function Oy(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Wr,a=new wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const T=s?0:i,x=T*4;let v=p.clippingState||null;c.value=v,v=u(g,d,x,f);for(let C=0;C!==x;++C)v[C]=t[C];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(T,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function zy(n){let e=new WeakMap;function t(o,a){return a===$d?o.mapping=So:a===jd&&(o.mapping=bo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$d||a===jd)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new s_(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const co=4,hf=[.125,.215,.35,.446,.526,.582],xs=20,hd=new Z_,ff=new Nt;let fd=null,pd=0,md=0,gd=!1;const ps=(1+Math.sqrt(5))/2,no=1/ps,pf=[new b(-ps,no,0),new b(ps,no,0),new b(-no,0,ps),new b(no,0,ps),new b(0,ps,-no),new b(0,ps,no),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],By=new b;class mf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=By}=s;fd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fd,pd,md),this._renderer.xr.enabled=gd,e.scissorTest=!1,Rc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===So||e.mapping===bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fd=this._renderer.getRenderTarget(),pd=this._renderer.getActiveCubeFace(),md=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hr,minFilter:hr,generateMipmaps:!1,type:Ga,format:Qi,colorSpace:Mo,depthBuffer:!1},r=gf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hy(s)),this._blurMaterial=Vy(s,e,t)}return r}_compileMaterial(e){const t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,hd)}_sceneToCubeUV(e,t,i,r,s){const c=new Ci(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ff),h.toneMapping=jr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const _=new yn({name:"PMREM.Background",side:vi,depthWrite:!1,depthTest:!1}),m=new Ee(new Tn,_);let p=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,p=!0):(_.color.copy(ff),p=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[x],s.y,s.z)):v===1?(c.up.set(0,0,l[x]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[x],s.z)):(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[x]));const C=this._cubeSize;Rc(r,v*C,x>2?C:0,C,C),h.setRenderTarget(r),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===So||e.mapping===bo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_f());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Rc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,hd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=pf[(r-s-1)%pf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ee(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*xs-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):xs;m>xs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xs}`);const p=[];let T=0;for(let D=0;D<xs;++D){const N=D/_,M=Math.exp(-N*N/2);p.push(M),D===0?T+=M:D<m&&(T+=2*M)}for(let D=0;D<p.length;D++)p[D]=p[D]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const v=this._sizeLods[r],C=3*v*(r>x-co?r-x+co:0),P=4*(this._cubeSize-v);Rc(t,C,P,3*v,2*v),c.setRenderTarget(t),c.render(h,hd)}}function Hy(n){const e=[],t=[],i=[];let r=n;const s=n-co+1+hf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-co?c=hf[o-n+co-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let P=0;P<f;P++){const D=P%3*2/3-1,N=P>2?0:-1,M=[D,N,0,D+2/3,N,0,D+2/3,N+1,0,D,N,0,D+2/3,N+1,0,D,N+1,0];T.set(M,_*g*P),x.set(d,m*g*P);const S=[P,P,P,P,P,P];v.set(S,p*g*P)}const C=new Ft;C.setAttribute("position",new Di(T,_)),C.setAttribute("uv",new Di(x,m)),C.setAttribute("faceIndex",new Di(v,p)),e.push(C),r>co&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gf(n,e,t){const i=new Ds(n,e,t);return i.texture.mapping=bl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Vy(n,e,t){const i=new Float32Array(xs),r=new b(0,1,0);return new Rr({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nh(),fragmentShader:`

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
		`,blending:$r,depthTest:!1,depthWrite:!1})}function _f(){return new Rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

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
		`,blending:$r,depthTest:!1,depthWrite:!1})}function vf(){return new Rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$r,depthTest:!1,depthWrite:!1})}function nh(){return`

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
	`}function Gy(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===$d||c===jd,u=c===So||c===bo;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new mf(n)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new mf(n)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Wy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&po("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Xy(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const T=f.array;_=f.version;for(let x=0,v=T.length;x<v;x+=3){const C=T[x+0],P=T[x+1],D=T[x+2];d.push(C,P,P,D,D,C)}}else if(g!==void 0){const T=g.array;_=g.version;for(let x=0,v=T.length/3-1;x<v;x+=3){const C=x+0,P=x+1,D=x+2;d.push(C,P,P,D,D,C)}}else return;const m=new(Up(d)?zp:Op)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function qy(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*o,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*_[T];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Yy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function $y(n,e,t){const i=new WeakMap,r=new kt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let M=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const P=new Float32Array(v*C*4*h),D=new Fp(P,v,C,h);D.type=Mr,D.needsUpdate=!0;const N=x*4;for(let S=0;S<h;S++){const I=m[S],k=p[S],V=T[S],G=v*C*4*S;for(let K=0;K<I.count;K++){const Y=K*N;f===!0&&(r.fromBufferAttribute(I,K),P[G+Y+0]=r.x,P[G+Y+1]=r.y,P[G+Y+2]=r.z,P[G+Y+3]=0),g===!0&&(r.fromBufferAttribute(k,K),P[G+Y+4]=r.x,P[G+Y+5]=r.y,P[G+Y+6]=r.z,P[G+Y+7]=0),_===!0&&(r.fromBufferAttribute(V,K),P[G+Y+8]=r.x,P[G+Y+9]=r.y,P[G+Y+10]=r.z,P[G+Y+11]=V.itemSize===4?r.w:1)}}d={count:h,texture:D,size:new Be(v,C)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function jy(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const rm=new xi,xf=new Xp(1,1),sm=new Fp,om=new V0,am=new Vp,yf=[],Sf=[],bf=new Float32Array(16),Mf=new Float32Array(9),wf=new Float32Array(4);function No(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=yf[r];if(s===void 0&&(s=new Float32Array(r),yf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function In(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wl(n,e){let t=Sf[e];t===void 0&&(t=new Int32Array(e),Sf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Zy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;n.uniform2fv(this.addr,e),Nn(t,e)}}function Jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(In(t,e))return;n.uniform3fv(this.addr,e),Nn(t,e)}}function Qy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;n.uniform4fv(this.addr,e),Nn(t,e)}}function eS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(In(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nn(t,e)}else{if(In(t,i))return;wf.set(i),n.uniformMatrix2fv(this.addr,!1,wf),Nn(t,i)}}function tS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(In(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nn(t,e)}else{if(In(t,i))return;Mf.set(i),n.uniformMatrix3fv(this.addr,!1,Mf),Nn(t,i)}}function nS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(In(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nn(t,e)}else{if(In(t,i))return;bf.set(i),n.uniformMatrix4fv(this.addr,!1,bf),Nn(t,i)}}function iS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;n.uniform2iv(this.addr,e),Nn(t,e)}}function sS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;n.uniform3iv(this.addr,e),Nn(t,e)}}function oS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;n.uniform4iv(this.addr,e),Nn(t,e)}}function aS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;n.uniform2uiv(this.addr,e),Nn(t,e)}}function lS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;n.uniform3uiv(this.addr,e),Nn(t,e)}}function dS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;n.uniform4uiv(this.addr,e),Nn(t,e)}}function uS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(xf.compareFunction=Np,s=xf):s=rm,t.setTexture2D(e||s,r)}function hS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||om,r)}function fS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||am,r)}function pS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||sm,r)}function mS(n){switch(n){case 5126:return Zy;case 35664:return Ky;case 35665:return Jy;case 35666:return Qy;case 35674:return eS;case 35675:return tS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return rS;case 35668:case 35672:return sS;case 35669:case 35673:return oS;case 5125:return aS;case 36294:return cS;case 36295:return lS;case 36296:return dS;case 35678:case 36198:case 36298:case 36306:case 35682:return uS;case 35679:case 36299:case 36307:return hS;case 35680:case 36300:case 36308:case 36293:return fS;case 36289:case 36303:case 36311:case 36292:return pS}}function gS(n,e){n.uniform1fv(this.addr,e)}function _S(n,e){const t=No(e,this.size,2);n.uniform2fv(this.addr,t)}function vS(n,e){const t=No(e,this.size,3);n.uniform3fv(this.addr,t)}function xS(n,e){const t=No(e,this.size,4);n.uniform4fv(this.addr,t)}function yS(n,e){const t=No(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function SS(n,e){const t=No(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bS(n,e){const t=No(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function MS(n,e){n.uniform1iv(this.addr,e)}function wS(n,e){n.uniform2iv(this.addr,e)}function ES(n,e){n.uniform3iv(this.addr,e)}function TS(n,e){n.uniform4iv(this.addr,e)}function AS(n,e){n.uniform1uiv(this.addr,e)}function RS(n,e){n.uniform2uiv(this.addr,e)}function CS(n,e){n.uniform3uiv(this.addr,e)}function PS(n,e){n.uniform4uiv(this.addr,e)}function DS(n,e,t){const i=this.cache,r=e.length,s=wl(t,r);In(i,s)||(n.uniform1iv(this.addr,s),Nn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||rm,s[o])}function LS(n,e,t){const i=this.cache,r=e.length,s=wl(t,r);In(i,s)||(n.uniform1iv(this.addr,s),Nn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||om,s[o])}function IS(n,e,t){const i=this.cache,r=e.length,s=wl(t,r);In(i,s)||(n.uniform1iv(this.addr,s),Nn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||am,s[o])}function NS(n,e,t){const i=this.cache,r=e.length,s=wl(t,r);In(i,s)||(n.uniform1iv(this.addr,s),Nn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||sm,s[o])}function US(n){switch(n){case 5126:return gS;case 35664:return _S;case 35665:return vS;case 35666:return xS;case 35674:return yS;case 35675:return SS;case 35676:return bS;case 5124:case 35670:return MS;case 35667:case 35671:return wS;case 35668:case 35672:return ES;case 35669:case 35673:return TS;case 5125:return AS;case 36294:return RS;case 36295:return CS;case 36296:return PS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return LS;case 35680:case 36300:case 36308:case 36293:return IS;case 36289:case 36303:case 36311:case 36292:return NS}}class FS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mS(t.type)}}class kS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=US(t.type)}}class OS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const _d=/(\w+)(\])?(\[|\.)?/g;function Ef(n,e){n.seq.push(e),n.map[e.id]=e}function zS(n,e,t){const i=n.name,r=i.length;for(_d.lastIndex=0;;){const s=_d.exec(i),o=_d.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Ef(t,l===void 0?new FS(a,n,e):new kS(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new OS(a),Ef(t,h)),t=h}}}class qc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);zS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Tf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const BS=37297;let HS=0;function VS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Af=new wt;function GS(n){Bt._getMatrix(Af,Bt.workingColorSpace,n);const e=`mat3( ${Af.elements.map(t=>t.toFixed(4))} )`;switch(Bt.getTransfer(n)){case el:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Rf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+VS(n.getShaderSource(e),a)}else return s}function WS(n,e){const t=GS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function XS(n,e){let t;switch(e){case e0:t="Linear";break;case t0:t="Reinhard";break;case n0:t="Cineon";break;case i0:t="ACESFilmic";break;case s0:t="AgX";break;case o0:t="Neutral";break;case r0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cc=new b;function qS(){Bt.getLuminanceCoefficients(Cc);const n=Cc.x.toFixed(4),e=Cc.y.toFixed(4),t=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function $S(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ra(n){return n!==""}function Cf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(n){return n.replace(ZS,JS)}const KS=new Map;function JS(n,e){let t=Tt[e];if(t===void 0){const i=KS.get(e);if(i!==void 0)t=Tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ru(t)}const QS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Df(n){return n.replace(QS,eb)}function eb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function tb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Mp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ig?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Sr&&(e="SHADOWMAP_TYPE_VSM"),e}function nb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case So:case bo:e="ENVMAP_TYPE_CUBE";break;case bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ib(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===bo&&(e="ENVMAP_MODE_REFRACTION"),e}function rb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wp:e="ENVMAP_BLENDING_MULTIPLY";break;case Jg:e="ENVMAP_BLENDING_MIX";break;case Qg:e="ENVMAP_BLENDING_ADD";break}return e}function sb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ob(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=tb(t),l=nb(t),u=ib(t),h=rb(t),d=sb(t),f=YS(t),g=$S(s),_=r.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ra).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ra).join(`
`),p.length>0&&(p+=`
`)):(m=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),p=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jr?"#define TONE_MAPPING":"",t.toneMapping!==jr?Tt.tonemapping_pars_fragment:"",t.toneMapping!==jr?XS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,WS("linearToOutputTexel",t.outputColorSpace),qS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ra).join(`
`)),o=Ru(o),o=Cf(o,t),o=Pf(o,t),a=Ru(a),a=Cf(a,t),a=Pf(a,t),o=Df(o),a=Df(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=T+m+o,v=T+p+a,C=Tf(r,r.VERTEX_SHADER,x),P=Tf(r,r.FRAGMENT_SHADER,v);r.attachShader(_,C),r.attachShader(_,P),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(I){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(_)||"",V=r.getShaderInfoLog(C)||"",G=r.getShaderInfoLog(P)||"",K=k.trim(),Y=V.trim(),de=G.trim();let X=!0,oe=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,P);else{const xe=Rf(r,C,"vertex"),Xe=Rf(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+K+`
`+xe+`
`+Xe)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(Y===""||de==="")&&(oe=!1);oe&&(I.diagnostics={runnable:X,programLog:K,vertexShader:{log:Y,prefix:m},fragmentShader:{log:de,prefix:p}})}r.deleteShader(C),r.deleteShader(P),N=new qc(r,_),M=jS(r,_)}let N;this.getUniforms=function(){return N===void 0&&D(this),N};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,BS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=P,this}let ab=0;class cb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new lb(e),t.set(e,i)),i}}class lb{constructor(e){this.id=ab++,this.code=e,this.usedTimes=0}}function db(n,e,t,i,r,s,o){const a=new ju,c=new cb,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,I,k,V){const G=k.fog,K=V.geometry,Y=M.isMeshStandardMaterial?k.environment:null,de=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),X=de&&de.mapping===bl?de.image.height:null,oe=g[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const xe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Xe=xe!==void 0?xe.length:0;let it=0;K.morphAttributes.position!==void 0&&(it=1),K.morphAttributes.normal!==void 0&&(it=2),K.morphAttributes.color!==void 0&&(it=3);let gt,xt,J,Ae;if(oe){const Oe=ur[oe];gt=Oe.vertexShader,xt=Oe.fragmentShader}else gt=M.vertexShader,xt=M.fragmentShader,c.update(M),J=c.getVertexShaderID(M),Ae=c.getFragmentShaderID(M);const re=n.getRenderTarget(),Ye=n.state.buffers.depth.getReversed(),te=V.isInstancedMesh===!0,fe=V.isBatchedMesh===!0,Q=!!M.map,ee=!!M.matcap,R=!!de,me=!!M.aoMap,ue=!!M.lightMap,Ve=!!M.bumpMap,pe=!!M.normalMap,Ne=!!M.displacementMap,ae=!!M.emissiveMap,Re=!!M.metalnessMap,be=!!M.roughnessMap,Ce=M.anisotropy>0,w=M.clearcoat>0,y=M.dispersion>0,O=M.iridescence>0,j=M.sheen>0,se=M.transmission>0,W=Ce&&!!M.anisotropyMap,Ue=w&&!!M.clearcoatMap,_e=w&&!!M.clearcoatNormalMap,Fe=w&&!!M.clearcoatRoughnessMap,Ze=O&&!!M.iridescenceMap,ye=O&&!!M.iridescenceThicknessMap,Pe=j&&!!M.sheenColorMap,tt=j&&!!M.sheenRoughnessMap,Ke=!!M.specularMap,we=!!M.specularColorMap,mt=!!M.specularIntensityMap,U=se&&!!M.transmissionMap,Se=se&&!!M.thicknessMap,Te=!!M.gradientMap,$e=!!M.alphaMap,ge=M.alphaTest>0,ie=!!M.alphaHash,qe=!!M.extensions;let ne=jr;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ne=n.toneMapping);const Ie={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:gt,fragmentShader:xt,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:Ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:fe,batchingColor:fe&&V._colorsTexture!==null,instancing:te,instancingColor:te&&V.instanceColor!==null,instancingMorph:te&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Mo,alphaToCoverage:!!M.alphaToCoverage,map:Q,matcap:ee,envMap:R,envMapMode:R&&de.mapping,envMapCubeUVHeight:X,aoMap:me,lightMap:ue,bumpMap:Ve,normalMap:pe,displacementMap:d&&Ne,emissiveMap:ae,normalMapObjectSpace:pe&&M.normalMapType===u0,normalMapTangentSpace:pe&&M.normalMapType===d0,metalnessMap:Re,roughnessMap:be,anisotropy:Ce,anisotropyMap:W,clearcoat:w,clearcoatMap:Ue,clearcoatNormalMap:_e,clearcoatRoughnessMap:Fe,dispersion:y,iridescence:O,iridescenceMap:Ze,iridescenceThicknessMap:ye,sheen:j,sheenColorMap:Pe,sheenRoughnessMap:tt,specularMap:Ke,specularColorMap:we,specularIntensityMap:mt,transmission:se,transmissionMap:U,thicknessMap:Se,gradientMap:Te,opaque:M.transparent===!1&&M.blending===fo&&M.alphaToCoverage===!1,alphaMap:$e,alphaTest:ge,alphaHash:ie,combine:M.combine,mapUv:Q&&_(M.map.channel),aoMapUv:me&&_(M.aoMap.channel),lightMapUv:ue&&_(M.lightMap.channel),bumpMapUv:Ve&&_(M.bumpMap.channel),normalMapUv:pe&&_(M.normalMap.channel),displacementMapUv:Ne&&_(M.displacementMap.channel),emissiveMapUv:ae&&_(M.emissiveMap.channel),metalnessMapUv:Re&&_(M.metalnessMap.channel),roughnessMapUv:be&&_(M.roughnessMap.channel),anisotropyMapUv:W&&_(M.anisotropyMap.channel),clearcoatMapUv:Ue&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:_e&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:tt&&_(M.sheenRoughnessMap.channel),specularMapUv:Ke&&_(M.specularMap.channel),specularColorMapUv:we&&_(M.specularColorMap.channel),specularIntensityMapUv:mt&&_(M.specularIntensityMap.channel),transmissionMapUv:U&&_(M.transmissionMap.channel),thicknessMapUv:Se&&_(M.thicknessMap.channel),alphaMapUv:$e&&_(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(pe||Ce),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!K.attributes.uv&&(Q||$e),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ye,skinning:V.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Xe,morphTextureStride:it,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ne,decodeVideoTexture:Q&&M.map.isVideoTexture===!0&&Bt.getTransfer(M.map.colorSpace)===Zt,decodeVideoTextureEmissive:ae&&M.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(M.emissiveMap.colorSpace)===Zt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fn,flipSided:M.side===vi,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:qe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&M.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(T(S,M),x(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function T(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const S=g[M.type];let I;if(S){const k=ur[S];I=t_.clone(k.uniforms)}else I=M.uniforms;return I}function C(M,S){let I;for(let k=0,V=u.length;k<V;k++){const G=u[k];if(G.cacheKey===S){I=G,++I.usedTimes;break}}return I===void 0&&(I=new ob(n,S,M,s),u.push(I)),I}function P(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function D(M){c.remove(M)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:P,releaseShaderCache:D,programs:u,dispose:N}}function ub(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function hb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function If(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||hb),i.length>1&&i.sort(d||If),r.length>1&&r.sort(d||If)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function fb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Nf,n.set(i,[o])):r>=s.length?(o=new Nf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function pb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Nt};break;case"SpotLight":t={position:new b,direction:new b,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":t={color:new Nt,position:new b,halfWidth:new b,halfHeight:new b};break}return n[e.id]=t,t}}}function mb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let gb=0;function _b(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vb(n){const e=new pb,t=mb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new b);const r=new b,s=new qt,o=new qt;function a(l){let u=0,h=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,T=0,x=0,v=0,C=0,P=0,D=0;l.sort(_b);for(let M=0,S=l.length;M<S;M++){const I=l[M],k=I.color,V=I.intensity,G=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=k.r*V,h+=k.g*V,d+=k.b*V;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],V);D++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const de=I.shadow,X=t.get(I);X.shadowIntensity=de.intensity,X.shadowBias=de.bias,X.shadowNormalBias=de.normalBias,X.shadowRadius=de.radius,X.shadowMapSize=de.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=K,i.directionalShadowMatrix[f]=I.shadow.matrix,T++}i.directional[f]=Y,f++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(k).multiplyScalar(V),Y.distance=G,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[_]=Y;const de=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,de.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[_]=de.matrix,I.castShadow){const X=t.get(I);X.shadowIntensity=de.intensity,X.shadowBias=de.bias,X.shadowNormalBias=de.normalBias,X.shadowRadius=de.radius,X.shadowMapSize=de.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=K,v++}_++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(k).multiplyScalar(V),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=Y,m++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const de=I.shadow,X=t.get(I);X.shadowIntensity=de.intensity,X.shadowBias=de.bias,X.shadowNormalBias=de.normalBias,X.shadowRadius=de.radius,X.shadowMapSize=de.mapSize,X.shadowCameraNear=de.camera.near,X.shadowCameraFar=de.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=I.shadow.matrix,x++}i.point[g]=Y,g++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(V),Y.groundColor.copy(I.groundColor).multiplyScalar(V),i.hemi[p]=Y,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=He.LTC_FLOAT_1,i.rectAreaLTC2=He.LTC_FLOAT_2):(i.rectAreaLTC1=He.LTC_HALF_1,i.rectAreaLTC2=He.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==T||N.numPointShadows!==x||N.numSpotShadows!==v||N.numSpotMaps!==C||N.numLightProbes!==D)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,N.directionalLength=f,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=T,N.numPointShadows=x,N.numSpotShadows=v,N.numSpotMaps=C,N.numLightProbes=D,i.version=gb++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const x=l[p];if(x.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function Uf(n){const e=new vb(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function xb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Uf(n),e.set(r,[a])):s>=o.length?(a=new Uf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sb=`uniform sampler2D shadow_pass;
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
}`;function bb(n,e,t){let i=new Zu;const r=new Be,s=new Be,o=new kt,a=new W_({depthPacking:l0}),c=new X_,l={},u=t.maxTextureSize,h={[Ar]:vi,[vi]:Ar,[fn]:fn},d=new Rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:yb,fragmentShader:Sb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ee(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mp;let p=this.type;this.render=function(P,D,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),k=n.state;k.setBlending($r),k.buffers.depth.getReversed()?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=p!==Sr&&this.type===Sr,G=p===Sr&&this.type!==Sr;for(let K=0,Y=P.length;K<Y;K++){const de=P[K],X=de.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const oe=X.getFrameExtents();if(r.multiply(oe),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,X.mapSize.y=s.y)),X.map===null||V===!0||G===!0){const Xe=this.type!==Sr?{minFilter:tr,magFilter:tr}:{};X.map!==null&&X.map.dispose(),X.map=new Ds(r.x,r.y,Xe),X.map.texture.name=de.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const xe=X.getViewportCount();for(let Xe=0;Xe<xe;Xe++){const it=X.getViewport(Xe);o.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),k.viewport(o),X.updateMatrices(de,Xe),i=X.getFrustum(),v(D,N,X.camera,de,this.type)}X.isPointLightShadow!==!0&&this.type===Sr&&T(X,N),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,I)};function T(P,D){const N=e.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ds(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(D,null,N,d,_,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(D,null,N,f,_,null)}function x(P,D,N,M){let S=null;const I=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)S=I;else if(S=N.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const k=S.uuid,V=D.uuid;let G=l[k];G===void 0&&(G={},l[k]=G);let K=G[V];K===void 0&&(K=S.clone(),G[V]=K,D.addEventListener("dispose",C)),S=K}if(S.visible=D.visible,S.wireframe=D.wireframe,M===Sr?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:h[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=n.properties.get(S);k.light=N}return S}function v(P,D,N,M,S){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===Sr)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const V=e.update(P),G=P.material;if(Array.isArray(G)){const K=V.groups;for(let Y=0,de=K.length;Y<de;Y++){const X=K[Y],oe=G[X.materialIndex];if(oe&&oe.visible){const xe=x(P,oe,M,S);P.onBeforeShadow(n,P,D,N,V,xe,X),n.renderBufferDirect(N,null,V,xe,P,X),P.onAfterShadow(n,P,D,N,V,xe,X)}}}else if(G.visible){const K=x(P,G,M,S);P.onBeforeShadow(n,P,D,N,V,K,null),n.renderBufferDirect(N,null,V,K,P,null),P.onAfterShadow(n,P,D,N,V,K,null)}}const k=P.children;for(let V=0,G=k.length;V<G;V++)v(k[V],D,N,M,S)}function C(P){P.target.removeEventListener("dispose",C);for(const N in l){const M=l[N],S=P.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Mb={[Hd]:Vd,[Gd]:qd,[Wd]:Yd,[yo]:Xd,[Vd]:Hd,[qd]:Gd,[Yd]:Wd,[Xd]:yo};function wb(n,e){function t(){let U=!1;const Se=new kt;let Te=null;const $e=new kt(0,0,0,0);return{setMask:function(ge){Te!==ge&&!U&&(n.colorMask(ge,ge,ge,ge),Te=ge)},setLocked:function(ge){U=ge},setClear:function(ge,ie,qe,ne,Ie){Ie===!0&&(ge*=ne,ie*=ne,qe*=ne),Se.set(ge,ie,qe,ne),$e.equals(Se)===!1&&(n.clearColor(ge,ie,qe,ne),$e.copy(Se))},reset:function(){U=!1,Te=null,$e.set(-1,0,0,0)}}}function i(){let U=!1,Se=!1,Te=null,$e=null,ge=null;return{setReversed:function(ie){if(Se!==ie){const qe=e.get("EXT_clip_control");ie?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Se=ie;const ne=ge;ge=null,this.setClear(ne)}},getReversed:function(){return Se},setTest:function(ie){ie?re(n.DEPTH_TEST):Ye(n.DEPTH_TEST)},setMask:function(ie){Te!==ie&&!U&&(n.depthMask(ie),Te=ie)},setFunc:function(ie){if(Se&&(ie=Mb[ie]),$e!==ie){switch(ie){case Hd:n.depthFunc(n.NEVER);break;case Vd:n.depthFunc(n.ALWAYS);break;case Gd:n.depthFunc(n.LESS);break;case yo:n.depthFunc(n.LEQUAL);break;case Wd:n.depthFunc(n.EQUAL);break;case Xd:n.depthFunc(n.GEQUAL);break;case qd:n.depthFunc(n.GREATER);break;case Yd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$e=ie}},setLocked:function(ie){U=ie},setClear:function(ie){ge!==ie&&(Se&&(ie=1-ie),n.clearDepth(ie),ge=ie)},reset:function(){U=!1,Te=null,$e=null,ge=null,Se=!1}}}function r(){let U=!1,Se=null,Te=null,$e=null,ge=null,ie=null,qe=null,ne=null,Ie=null;return{setTest:function(Oe){U||(Oe?re(n.STENCIL_TEST):Ye(n.STENCIL_TEST))},setMask:function(Oe){Se!==Oe&&!U&&(n.stencilMask(Oe),Se=Oe)},setFunc:function(Oe,ht,Mt){(Te!==Oe||$e!==ht||ge!==Mt)&&(n.stencilFunc(Oe,ht,Mt),Te=Oe,$e=ht,ge=Mt)},setOp:function(Oe,ht,Mt){(ie!==Oe||qe!==ht||ne!==Mt)&&(n.stencilOp(Oe,ht,Mt),ie=Oe,qe=ht,ne=Mt)},setLocked:function(Oe){U=Oe},setClear:function(Oe){Ie!==Oe&&(n.clearStencil(Oe),Ie=Oe)},reset:function(){U=!1,Se=null,Te=null,$e=null,ge=null,ie=null,qe=null,ne=null,Ie=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,x=null,v=null,C=null,P=null,D=new Nt(0,0,0),N=0,M=!1,S=null,I=null,k=null,V=null,G=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,de=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=de>=1):X.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=de>=2);let oe=null,xe={};const Xe=n.getParameter(n.SCISSOR_BOX),it=n.getParameter(n.VIEWPORT),gt=new kt().fromArray(Xe),xt=new kt().fromArray(it);function J(U,Se,Te,$e){const ge=new Uint8Array(4),ie=n.createTexture();n.bindTexture(U,ie),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<Te;qe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,$e,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(Se+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return ie}const Ae={};Ae[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(n.DEPTH_TEST),o.setFunc(yo),Ve(!1),pe(Sh),re(n.CULL_FACE),me($r);function re(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Ye(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function te(U,Se){return h[U]!==Se?(n.bindFramebuffer(U,Se),h[U]=Se,U===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Se),U===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function fe(U,Se){let Te=f,$e=!1;if(U){Te=d.get(Se),Te===void 0&&(Te=[],d.set(Se,Te));const ge=U.textures;if(Te.length!==ge.length||Te[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,qe=ge.length;ie<qe;ie++)Te[ie]=n.COLOR_ATTACHMENT0+ie;Te.length=ge.length,$e=!0}}else Te[0]!==n.BACK&&(Te[0]=n.BACK,$e=!0);$e&&n.drawBuffers(Te)}function Q(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const ee={[_s]:n.FUNC_ADD,[Ug]:n.FUNC_SUBTRACT,[Fg]:n.FUNC_REVERSE_SUBTRACT};ee[kg]=n.MIN,ee[Og]=n.MAX;const R={[zg]:n.ZERO,[Bg]:n.ONE,[Hg]:n.SRC_COLOR,[zd]:n.SRC_ALPHA,[Yg]:n.SRC_ALPHA_SATURATE,[Xg]:n.DST_COLOR,[Gg]:n.DST_ALPHA,[Vg]:n.ONE_MINUS_SRC_COLOR,[Bd]:n.ONE_MINUS_SRC_ALPHA,[qg]:n.ONE_MINUS_DST_COLOR,[Wg]:n.ONE_MINUS_DST_ALPHA,[$g]:n.CONSTANT_COLOR,[jg]:n.ONE_MINUS_CONSTANT_COLOR,[Zg]:n.CONSTANT_ALPHA,[Kg]:n.ONE_MINUS_CONSTANT_ALPHA};function me(U,Se,Te,$e,ge,ie,qe,ne,Ie,Oe){if(U===$r){_===!0&&(Ye(n.BLEND),_=!1);return}if(_===!1&&(re(n.BLEND),_=!0),U!==Ng){if(U!==m||Oe!==M){if((p!==_s||v!==_s)&&(n.blendEquation(n.FUNC_ADD),p=_s,v=_s),Oe)switch(U){case fo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Od:n.blendFunc(n.ONE,n.ONE);break;case bh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case fo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Od:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,x=null,C=null,P=null,D.set(0,0,0),N=0,m=U,M=Oe}return}ge=ge||Se,ie=ie||Te,qe=qe||$e,(Se!==p||ge!==v)&&(n.blendEquationSeparate(ee[Se],ee[ge]),p=Se,v=ge),(Te!==T||$e!==x||ie!==C||qe!==P)&&(n.blendFuncSeparate(R[Te],R[$e],R[ie],R[qe]),T=Te,x=$e,C=ie,P=qe),(ne.equals(D)===!1||Ie!==N)&&(n.blendColor(ne.r,ne.g,ne.b,Ie),D.copy(ne),N=Ie),m=U,M=!1}function ue(U,Se){U.side===fn?Ye(n.CULL_FACE):re(n.CULL_FACE);let Te=U.side===vi;Se&&(Te=!Te),Ve(Te),U.blending===fo&&U.transparent===!1?me($r):me(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const $e=U.stencilWrite;a.setTest($e),$e&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):Ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(U){S!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),S=U)}function pe(U){U!==Dg?(re(n.CULL_FACE),U!==I&&(U===Sh?n.cullFace(n.BACK):U===Lg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ye(n.CULL_FACE),I=U}function Ne(U){U!==k&&(Y&&n.lineWidth(U),k=U)}function ae(U,Se,Te){U?(re(n.POLYGON_OFFSET_FILL),(V!==Se||G!==Te)&&(n.polygonOffset(Se,Te),V=Se,G=Te)):Ye(n.POLYGON_OFFSET_FILL)}function Re(U){U?re(n.SCISSOR_TEST):Ye(n.SCISSOR_TEST)}function be(U){U===void 0&&(U=n.TEXTURE0+K-1),oe!==U&&(n.activeTexture(U),oe=U)}function Ce(U,Se,Te){Te===void 0&&(oe===null?Te=n.TEXTURE0+K-1:Te=oe);let $e=xe[Te];$e===void 0&&($e={type:void 0,texture:void 0},xe[Te]=$e),($e.type!==U||$e.texture!==Se)&&(oe!==Te&&(n.activeTexture(Te),oe=Te),n.bindTexture(U,Se||Ae[U]),$e.type=U,$e.texture=Se)}function w(){const U=xe[oe];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ze(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(U){gt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),gt.copy(U))}function tt(U){xt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),xt.copy(U))}function Ke(U,Se){let Te=l.get(Se);Te===void 0&&(Te=new WeakMap,l.set(Se,Te));let $e=Te.get(U);$e===void 0&&($e=n.getUniformBlockIndex(Se,U.name),Te.set(U,$e))}function we(U,Se){const $e=l.get(Se).get(U);c.get(Se)!==$e&&(n.uniformBlockBinding(Se,$e,U.__bindingPointIndex),c.set(Se,$e))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},oe=null,xe={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,x=null,v=null,C=null,P=null,D=new Nt(0,0,0),N=0,M=!1,S=null,I=null,k=null,V=null,G=null,gt.set(0,0,n.canvas.width,n.canvas.height),xt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:Ye,bindFramebuffer:te,drawBuffers:fe,useProgram:Q,setBlending:me,setMaterial:ue,setFlipSided:Ve,setCullFace:pe,setLineWidth:Ne,setPolygonOffset:ae,setScissorTest:Re,activeTexture:be,bindTexture:Ce,unbindTexture:w,compressedTexImage2D:y,compressedTexImage3D:O,texImage2D:Ze,texImage3D:ye,updateUBOMapping:Ke,uniformBlockBinding:we,texStorage2D:_e,texStorage3D:Fe,texSubImage2D:j,texSubImage3D:se,compressedTexSubImage2D:W,compressedTexSubImage3D:Ue,scissor:Pe,viewport:tt,reset:mt}}function Eb(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return f?new OffscreenCanvas(w,y):il("canvas")}function _(w,y,O){let j=1;const se=Ce(w);if((se.width>O||se.height>O)&&(j=O/Math.max(se.width,se.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const W=Math.floor(j*se.width),Ue=Math.floor(j*se.height);h===void 0&&(h=g(W,Ue));const _e=y?g(W,Ue):h;return _e.width=W,_e.height=Ue,_e.getContext("2d").drawImage(w,0,0,W,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+W+"x"+Ue+")."),_e}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(w,y,O,j,se=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let W=y;if(y===n.RED&&(O===n.FLOAT&&(W=n.R32F),O===n.HALF_FLOAT&&(W=n.R16F),O===n.UNSIGNED_BYTE&&(W=n.R8)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.R8UI),O===n.UNSIGNED_SHORT&&(W=n.R16UI),O===n.UNSIGNED_INT&&(W=n.R32UI),O===n.BYTE&&(W=n.R8I),O===n.SHORT&&(W=n.R16I),O===n.INT&&(W=n.R32I)),y===n.RG&&(O===n.FLOAT&&(W=n.RG32F),O===n.HALF_FLOAT&&(W=n.RG16F),O===n.UNSIGNED_BYTE&&(W=n.RG8)),y===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RG8UI),O===n.UNSIGNED_SHORT&&(W=n.RG16UI),O===n.UNSIGNED_INT&&(W=n.RG32UI),O===n.BYTE&&(W=n.RG8I),O===n.SHORT&&(W=n.RG16I),O===n.INT&&(W=n.RG32I)),y===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGB8UI),O===n.UNSIGNED_SHORT&&(W=n.RGB16UI),O===n.UNSIGNED_INT&&(W=n.RGB32UI),O===n.BYTE&&(W=n.RGB8I),O===n.SHORT&&(W=n.RGB16I),O===n.INT&&(W=n.RGB32I)),y===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),O===n.UNSIGNED_INT&&(W=n.RGBA32UI),O===n.BYTE&&(W=n.RGBA8I),O===n.SHORT&&(W=n.RGBA16I),O===n.INT&&(W=n.RGBA32I)),y===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),y===n.RGBA){const Ue=se?el:Bt.getTransfer(j);O===n.FLOAT&&(W=n.RGBA32F),O===n.HALF_FLOAT&&(W=n.RGBA16F),O===n.UNSIGNED_BYTE&&(W=Ue===Zt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function v(w,y){let O;return w?y===null||y===Ps||y===xa?O=n.DEPTH24_STENCIL8:y===Mr?O=n.DEPTH32F_STENCIL8:y===va&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ps||y===xa?O=n.DEPTH_COMPONENT24:y===Mr?O=n.DEPTH_COMPONENT32F:y===va&&(O=n.DEPTH_COMPONENT16),O}function C(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==tr&&w.minFilter!==hr?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function P(w){const y=w.target;y.removeEventListener("dispose",P),N(y),y.isVideoTexture&&u.delete(y)}function D(w){const y=w.target;y.removeEventListener("dispose",D),S(y)}function N(w){const y=i.get(w);if(y.__webglInit===void 0)return;const O=w.source,j=d.get(O);if(j){const se=j[y.__cacheKey];se.usedTimes--,se.usedTimes===0&&M(w),Object.keys(j).length===0&&d.delete(O)}i.remove(w)}function M(w){const y=i.get(w);n.deleteTexture(y.__webglTexture);const O=w.source,j=d.get(O);delete j[y.__cacheKey],o.memory.textures--}function S(w){const y=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let se=0;se<y.__webglFramebuffer[j].length;se++)n.deleteFramebuffer(y.__webglFramebuffer[j][se]);else n.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)n.deleteFramebuffer(y.__webglFramebuffer[j]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=w.textures;for(let j=0,se=O.length;j<se;j++){const W=i.get(O[j]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(O[j])}i.remove(w)}let I=0;function k(){I=0}function V(){const w=I;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),I+=1,w}function G(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function K(w,y){const O=i.get(w);if(w.isVideoTexture&&Re(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(O,w,y);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function Y(w,y){const O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Ae(O,w,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function de(w,y){const O=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){Ae(O,w,y);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function X(w,y){const O=i.get(w);if(w.version>0&&O.__version!==w.version){re(O,w,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}const oe={[Zd]:n.REPEAT,[Ss]:n.CLAMP_TO_EDGE,[Kd]:n.MIRRORED_REPEAT},xe={[tr]:n.NEAREST,[a0]:n.NEAREST_MIPMAP_NEAREST,[nc]:n.NEAREST_MIPMAP_LINEAR,[hr]:n.LINEAR,[kl]:n.LINEAR_MIPMAP_NEAREST,[bs]:n.LINEAR_MIPMAP_LINEAR},Xe={[h0]:n.NEVER,[v0]:n.ALWAYS,[f0]:n.LESS,[Np]:n.LEQUAL,[p0]:n.EQUAL,[_0]:n.GEQUAL,[m0]:n.GREATER,[g0]:n.NOTEQUAL};function it(w,y){if(y.type===Mr&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===hr||y.magFilter===kl||y.magFilter===nc||y.magFilter===bs||y.minFilter===hr||y.minFilter===kl||y.minFilter===nc||y.minFilter===bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,oe[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,oe[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,oe[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,xe[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,xe[y.minFilter]),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Xe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===tr||y.minFilter!==nc&&y.minFilter!==bs||y.type===Mr&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function gt(w,y){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",P));const j=y.source;let se=d.get(j);se===void 0&&(se={},d.set(j,se));const W=G(y);if(W!==w.__cacheKey){se[W]===void 0&&(se[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),se[W].usedTimes++;const Ue=se[w.__cacheKey];Ue!==void 0&&(se[w.__cacheKey].usedTimes--,Ue.usedTimes===0&&M(y)),w.__cacheKey=W,w.__webglTexture=se[W].texture}return O}function xt(w,y,O){return Math.floor(Math.floor(w/O)/y)}function J(w,y,O,j){const W=w.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,O,j,y.data);else{W.sort((ye,Pe)=>ye.start-Pe.start);let Ue=0;for(let ye=1;ye<W.length;ye++){const Pe=W[Ue],tt=W[ye],Ke=Pe.start+Pe.count,we=xt(tt.start,y.width,4),mt=xt(Pe.start,y.width,4);tt.start<=Ke+1&&we===mt&&xt(tt.start+tt.count-1,y.width,4)===we?Pe.count=Math.max(Pe.count,tt.start+tt.count-Pe.start):(++Ue,W[Ue]=tt)}W.length=Ue+1;const _e=n.getParameter(n.UNPACK_ROW_LENGTH),Fe=n.getParameter(n.UNPACK_SKIP_PIXELS),Ze=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ye=0,Pe=W.length;ye<Pe;ye++){const tt=W[ye],Ke=Math.floor(tt.start/4),we=Math.ceil(tt.count/4),mt=Ke%y.width,U=Math.floor(Ke/y.width),Se=we,Te=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,mt),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,mt,U,Se,Te,O,j,y.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,_e),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ze)}}function Ae(w,y,O){let j=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=n.TEXTURE_3D);const se=gt(w,y),W=y.source;t.bindTexture(j,w.__webglTexture,n.TEXTURE0+O);const Ue=i.get(W);if(W.version!==Ue.__version||se===!0){t.activeTexture(n.TEXTURE0+O);const _e=Bt.getPrimaries(Bt.workingColorSpace),Fe=y.colorSpace===qr?null:Bt.getPrimaries(y.colorSpace),Ze=y.colorSpace===qr||_e===Fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let ye=_(y.image,!1,r.maxTextureSize);ye=be(y,ye);const Pe=s.convert(y.format,y.colorSpace),tt=s.convert(y.type);let Ke=x(y.internalFormat,Pe,tt,y.colorSpace,y.isVideoTexture);it(j,y);let we;const mt=y.mipmaps,U=y.isVideoTexture!==!0,Se=Ue.__version===void 0||se===!0,Te=W.dataReady,$e=C(y,ye);if(y.isDepthTexture)Ke=v(y.format===Sa,y.type),Se&&(U?t.texStorage2D(n.TEXTURE_2D,1,Ke,ye.width,ye.height):t.texImage2D(n.TEXTURE_2D,0,Ke,ye.width,ye.height,0,Pe,tt,null));else if(y.isDataTexture)if(mt.length>0){U&&Se&&t.texStorage2D(n.TEXTURE_2D,$e,Ke,mt[0].width,mt[0].height);for(let ge=0,ie=mt.length;ge<ie;ge++)we=mt[ge],U?Te&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,we.width,we.height,Pe,tt,we.data):t.texImage2D(n.TEXTURE_2D,ge,Ke,we.width,we.height,0,Pe,tt,we.data);y.generateMipmaps=!1}else U?(Se&&t.texStorage2D(n.TEXTURE_2D,$e,Ke,ye.width,ye.height),Te&&J(y,ye,Pe,tt)):t.texImage2D(n.TEXTURE_2D,0,Ke,ye.width,ye.height,0,Pe,tt,ye.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,Ke,mt[0].width,mt[0].height,ye.depth);for(let ge=0,ie=mt.length;ge<ie;ge++)if(we=mt[ge],y.format!==Qi)if(Pe!==null)if(U){if(Te)if(y.layerUpdates.size>0){const qe=uf(we.width,we.height,y.format,y.type);for(const ne of y.layerUpdates){const Ie=we.data.subarray(ne*qe/we.data.BYTES_PER_ELEMENT,(ne+1)*qe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,ne,we.width,we.height,1,Pe,Ie)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,we.width,we.height,ye.depth,Pe,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Ke,we.width,we.height,ye.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?Te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,we.width,we.height,ye.depth,Pe,tt,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Ke,we.width,we.height,ye.depth,0,Pe,tt,we.data)}else{U&&Se&&t.texStorage2D(n.TEXTURE_2D,$e,Ke,mt[0].width,mt[0].height);for(let ge=0,ie=mt.length;ge<ie;ge++)we=mt[ge],y.format!==Qi?Pe!==null?U?Te&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,we.width,we.height,Pe,we.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Ke,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?Te&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,we.width,we.height,Pe,tt,we.data):t.texImage2D(n.TEXTURE_2D,ge,Ke,we.width,we.height,0,Pe,tt,we.data)}else if(y.isDataArrayTexture)if(U){if(Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,$e,Ke,ye.width,ye.height,ye.depth),Te)if(y.layerUpdates.size>0){const ge=uf(ye.width,ye.height,y.format,y.type);for(const ie of y.layerUpdates){const qe=ye.data.subarray(ie*ge/ye.data.BYTES_PER_ELEMENT,(ie+1)*ge/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,ye.width,ye.height,1,Pe,tt,qe)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Pe,tt,ye.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ke,ye.width,ye.height,ye.depth,0,Pe,tt,ye.data);else if(y.isData3DTexture)U?(Se&&t.texStorage3D(n.TEXTURE_3D,$e,Ke,ye.width,ye.height,ye.depth),Te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Pe,tt,ye.data)):t.texImage3D(n.TEXTURE_3D,0,Ke,ye.width,ye.height,ye.depth,0,Pe,tt,ye.data);else if(y.isFramebufferTexture){if(Se)if(U)t.texStorage2D(n.TEXTURE_2D,$e,Ke,ye.width,ye.height);else{let ge=ye.width,ie=ye.height;for(let qe=0;qe<$e;qe++)t.texImage2D(n.TEXTURE_2D,qe,Ke,ge,ie,0,Pe,tt,null),ge>>=1,ie>>=1}}else if(mt.length>0){if(U&&Se){const ge=Ce(mt[0]);t.texStorage2D(n.TEXTURE_2D,$e,Ke,ge.width,ge.height)}for(let ge=0,ie=mt.length;ge<ie;ge++)we=mt[ge],U?Te&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Pe,tt,we):t.texImage2D(n.TEXTURE_2D,ge,Ke,Pe,tt,we);y.generateMipmaps=!1}else if(U){if(Se){const ge=Ce(ye);t.texStorage2D(n.TEXTURE_2D,$e,Ke,ge.width,ge.height)}Te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,tt,ye)}else t.texImage2D(n.TEXTURE_2D,0,Ke,Pe,tt,ye);m(y)&&p(j),Ue.__version=W.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function re(w,y,O){if(y.image.length!==6)return;const j=gt(w,y),se=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+O);const W=i.get(se);if(se.version!==W.__version||j===!0){t.activeTexture(n.TEXTURE0+O);const Ue=Bt.getPrimaries(Bt.workingColorSpace),_e=y.colorSpace===qr?null:Bt.getPrimaries(y.colorSpace),Fe=y.colorSpace===qr||Ue===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Ze=y.isCompressedTexture||y.image[0].isCompressedTexture,ye=y.image[0]&&y.image[0].isDataTexture,Pe=[];for(let ie=0;ie<6;ie++)!Ze&&!ye?Pe[ie]=_(y.image[ie],!0,r.maxCubemapSize):Pe[ie]=ye?y.image[ie].image:y.image[ie],Pe[ie]=be(y,Pe[ie]);const tt=Pe[0],Ke=s.convert(y.format,y.colorSpace),we=s.convert(y.type),mt=x(y.internalFormat,Ke,we,y.colorSpace),U=y.isVideoTexture!==!0,Se=W.__version===void 0||j===!0,Te=se.dataReady;let $e=C(y,tt);it(n.TEXTURE_CUBE_MAP,y);let ge;if(Ze){U&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,$e,mt,tt.width,tt.height);for(let ie=0;ie<6;ie++){ge=Pe[ie].mipmaps;for(let qe=0;qe<ge.length;qe++){const ne=ge[qe];y.format!==Qi?Ke!==null?U?Te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,qe,0,0,ne.width,ne.height,Ke,ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,qe,mt,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,qe,0,0,ne.width,ne.height,Ke,we,ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,qe,mt,ne.width,ne.height,0,Ke,we,ne.data)}}}else{if(ge=y.mipmaps,U&&Se){ge.length>0&&$e++;const ie=Ce(Pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,$e,mt,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ye){U?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Pe[ie].width,Pe[ie].height,Ke,we,Pe[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,mt,Pe[ie].width,Pe[ie].height,0,Ke,we,Pe[ie].data);for(let qe=0;qe<ge.length;qe++){const Ie=ge[qe].image[ie].image;U?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,qe+1,0,0,Ie.width,Ie.height,Ke,we,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,qe+1,mt,Ie.width,Ie.height,0,Ke,we,Ie.data)}}else{U?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ke,we,Pe[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,mt,Ke,we,Pe[ie]);for(let qe=0;qe<ge.length;qe++){const ne=ge[qe];U?Te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,qe+1,0,0,Ke,we,ne.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,qe+1,mt,Ke,we,ne.image[ie])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),W.__version=se.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Ye(w,y,O,j,se,W){const Ue=s.convert(O.format,O.colorSpace),_e=s.convert(O.type),Fe=x(O.internalFormat,Ue,_e,O.colorSpace),Ze=i.get(y),ye=i.get(O);if(ye.__renderTarget=y,!Ze.__hasExternalTextures){const Pe=Math.max(1,y.width>>W),tt=Math.max(1,y.height>>W);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,W,Fe,Pe,tt,y.depth,0,Ue,_e,null):t.texImage2D(se,W,Fe,Pe,tt,0,Ue,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),ae(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,se,ye.__webglTexture,0,Ne(y)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,se,ye.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function te(w,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer){const j=y.depthTexture,se=j&&j.isDepthTexture?j.type:null,W=v(y.stencilBuffer,se),Ue=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=Ne(y);ae(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,W,y.width,y.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,W,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,W,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ue,n.RENDERBUFFER,w)}else{const j=y.textures;for(let se=0;se<j.length;se++){const W=j[se],Ue=s.convert(W.format,W.colorSpace),_e=s.convert(W.type),Fe=x(W.internalFormat,Ue,_e,W.colorSpace),Ze=Ne(y);O&&ae(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,Fe,y.width,y.height):ae(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze,Fe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Fe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);const se=j.__webglTexture,W=Ne(y);if(y.depthTexture.format===ya)ae(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(y.depthTexture.format===Sa)ae(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Q(w){const y=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const j=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const se=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",se)};j.addEventListener("dispose",se),y.__depthDisposeCallback=se}y.__boundDepthTexture=j}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const j=w.texture.mipmaps;j&&j.length>0?fe(y.__webglFramebuffer[0],w):fe(y.__webglFramebuffer,w)}else if(O){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=n.createRenderbuffer(),te(y.__webglDepthbuffer[j],w,!1);else{const se=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,W)}}else{const j=w.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),te(y.__webglDepthbuffer,w,!1);else{const se=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(w,y,O){const j=i.get(w);y!==void 0&&Ye(j.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Q(w)}function R(w){const y=w.texture,O=i.get(w),j=i.get(y);w.addEventListener("dispose",D);const se=w.textures,W=w.isWebGLCubeRenderTarget===!0,Ue=se.length>1;if(Ue||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=y.version,o.memory.textures++),W){O.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[_e]=[];for(let Fe=0;Fe<y.mipmaps.length;Fe++)O.__webglFramebuffer[_e][Fe]=n.createFramebuffer()}else O.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let _e=0;_e<y.mipmaps.length;_e++)O.__webglFramebuffer[_e]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Ue)for(let _e=0,Fe=se.length;_e<Fe;_e++){const Ze=i.get(se[_e]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&ae(w)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let _e=0;_e<se.length;_e++){const Fe=se[_e];O.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[_e]);const Ze=s.convert(Fe.format,Fe.colorSpace),ye=s.convert(Fe.type),Pe=x(Fe.internalFormat,Ze,ye,Fe.colorSpace,w.isXRRenderTarget===!0),tt=Ne(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,Pe,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,O.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),te(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),it(n.TEXTURE_CUBE_MAP,y);for(let _e=0;_e<6;_e++)if(y.mipmaps&&y.mipmaps.length>0)for(let Fe=0;Fe<y.mipmaps.length;Fe++)Ye(O.__webglFramebuffer[_e][Fe],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Fe);else Ye(O.__webglFramebuffer[_e],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let _e=0,Fe=se.length;_e<Fe;_e++){const Ze=se[_e],ye=i.get(Ze);let Pe=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Pe=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Pe,ye.__webglTexture),it(Pe,Ze),Ye(O.__webglFramebuffer,w,Ze,n.COLOR_ATTACHMENT0+_e,Pe,0),m(Ze)&&p(Pe)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(_e=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,j.__webglTexture),it(_e,y),y.mipmaps&&y.mipmaps.length>0)for(let Fe=0;Fe<y.mipmaps.length;Fe++)Ye(O.__webglFramebuffer[Fe],w,y,n.COLOR_ATTACHMENT0,_e,Fe);else Ye(O.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,_e,0);m(y)&&p(_e),t.unbindTexture()}w.depthBuffer&&Q(w)}function me(w){const y=w.textures;for(let O=0,j=y.length;O<j;O++){const se=y[O];if(m(se)){const W=T(w),Ue=i.get(se).__webglTexture;t.bindTexture(W,Ue),p(W),t.unbindTexture()}}}const ue=[],Ve=[];function pe(w){if(w.samples>0){if(ae(w)===!1){const y=w.textures,O=w.width,j=w.height;let se=n.COLOR_BUFFER_BIT;const W=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ue=i.get(w),_e=y.length>1;if(_e)for(let Ze=0;Ze<y.length;Ze++)t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Fe=w.texture.mipmaps;Fe&&Fe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ze=0;Ze<y.length;Ze++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ze]);const ye=i.get(y[Ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,O,j,0,0,O,j,se,n.NEAREST),c===!0&&(ue.length=0,Ve.length=0,ue.push(n.COLOR_ATTACHMENT0+Ze),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ue.push(W),Ve.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ve)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Ze=0;Ze<y.length;Ze++){t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ze,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ze]);const ye=i.get(y[Ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ze,n.TEXTURE_2D,ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ne(w){return Math.min(r.maxSamples,w.samples)}function ae(w){const y=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Re(w){const y=o.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function be(w,y){const O=w.colorSpace,j=w.format,se=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Mo&&O!==qr&&(Bt.getTransfer(O)===Zt?(j!==Qi||se!==pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Ce(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=Y,this.setTexture3D=de,this.setTextureCube=X,this.rebindTextures=ee,this.setupRenderTarget=R,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=ae}function Tb(n,e){function t(i,r=qr){let s;const o=Bt.getTransfer(r);if(i===pr)return n.UNSIGNED_BYTE;if(i===Vu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Rp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Tp)return n.BYTE;if(i===Ap)return n.SHORT;if(i===va)return n.UNSIGNED_SHORT;if(i===Hu)return n.INT;if(i===Ps)return n.UNSIGNED_INT;if(i===Mr)return n.FLOAT;if(i===Ga)return n.HALF_FLOAT;if(i===Cp)return n.ALPHA;if(i===Pp)return n.RGB;if(i===Qi)return n.RGBA;if(i===ya)return n.DEPTH_COMPONENT;if(i===Sa)return n.DEPTH_STENCIL;if(i===Dp)return n.RED;if(i===Wu)return n.RED_INTEGER;if(i===Lp)return n.RG;if(i===Xu)return n.RG_INTEGER;if(i===qu)return n.RGBA_INTEGER;if(i===Hc||i===Vc||i===Gc||i===Wc)if(o===Zt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Hc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Hc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jd||i===Qd||i===eu||i===tu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===eu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nu||i===iu||i===ru)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nu||i===iu)return o===Zt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ru)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===su||i===ou||i===au||i===cu||i===lu||i===du||i===uu||i===hu||i===fu||i===pu||i===mu||i===gu||i===_u||i===vu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===su)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ou)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===au)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===du)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_u)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xc||i===xu||i===yu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Xc)return o===Zt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ip||i===Su||i===bu||i===Mu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Su)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class cm extends xi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Ab=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rb=`
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

}`;class Cb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new cm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Rr({vertexShader:Ab,fragmentShader:Rb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new Jr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pb extends Fs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new Cb,m={},p=t.getContextAttributes();let T=null,x=null;const v=[],C=[],P=new Be;let D=null;const N=new Ci;N.viewport=new kt;const M=new Ci;M.viewport=new kt;const S=[N,M],I=new K_;let k=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Ae=v[J];return Ae===void 0&&(Ae=new rd,v[J]=Ae),Ae.getTargetRaySpace()},this.getControllerGrip=function(J){let Ae=v[J];return Ae===void 0&&(Ae=new rd,v[J]=Ae),Ae.getGripSpace()},this.getHand=function(J){let Ae=v[J];return Ae===void 0&&(Ae=new rd,v[J]=Ae),Ae.getHandSpace()};function G(J){const Ae=C.indexOf(J.inputSource);if(Ae===-1)return;const re=v[Ae];re!==void 0&&(re.update(J.inputSource,J.frame,l||o),re.dispatchEvent({type:J.type,data:J.inputSource}))}function K(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",Y);for(let J=0;J<v.length;J++){const Ae=C[J];Ae!==null&&(C[J]=null,v[J].disconnect(Ae))}k=null,V=null,_.reset();for(const J in m)delete m[J];e.setRenderTarget(T),f=null,d=null,h=null,r=null,x=null,xt.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",K),r.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&(h=new XRWebGLBinding(r,t)),h!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ye=null,te=null;p.depth&&(te=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=p.stencil?Sa:ya,Ye=p.stencil?xa:Ps);const fe={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:s};d=h.createProjectionLayer(fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Ds(d.textureWidth,d.textureHeight,{format:Qi,type:pr,depthTexture:new Xp(d.textureWidth,d.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const re={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ds(f.framebufferWidth,f.framebufferHeight,{format:Qi,type:pr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),xt.setContext(r),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(J){for(let Ae=0;Ae<J.removed.length;Ae++){const re=J.removed[Ae],Ye=C.indexOf(re);Ye>=0&&(C[Ye]=null,v[Ye].disconnect(re))}for(let Ae=0;Ae<J.added.length;Ae++){const re=J.added[Ae];let Ye=C.indexOf(re);if(Ye===-1){for(let fe=0;fe<v.length;fe++)if(fe>=C.length){C.push(re),Ye=fe;break}else if(C[fe]===null){C[fe]=re,Ye=fe;break}if(Ye===-1)break}const te=v[Ye];te&&te.connect(re)}}const de=new b,X=new b;function oe(J,Ae,re){de.setFromMatrixPosition(Ae.matrixWorld),X.setFromMatrixPosition(re.matrixWorld);const Ye=de.distanceTo(X),te=Ae.projectionMatrix.elements,fe=re.projectionMatrix.elements,Q=te[14]/(te[10]-1),ee=te[14]/(te[10]+1),R=(te[9]+1)/te[5],me=(te[9]-1)/te[5],ue=(te[8]-1)/te[0],Ve=(fe[8]+1)/fe[0],pe=Q*ue,Ne=Q*Ve,ae=Ye/(-ue+Ve),Re=ae*-ue;if(Ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Re),J.translateZ(ae),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),te[10]===-1)J.projectionMatrix.copy(Ae.projectionMatrix),J.projectionMatrixInverse.copy(Ae.projectionMatrixInverse);else{const be=Q+ae,Ce=ee+ae,w=pe-Re,y=Ne+(Ye-Re),O=R*ee/Ce*be,j=me*ee/Ce*be;J.projectionMatrix.makePerspective(w,y,O,j,be,Ce),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function xe(J,Ae){Ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let Ae=J.near,re=J.far;_.texture!==null&&(_.depthNear>0&&(Ae=_.depthNear),_.depthFar>0&&(re=_.depthFar)),I.near=M.near=N.near=Ae,I.far=M.far=N.far=re,(k!==I.near||V!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),k=I.near,V=I.far),I.layers.mask=J.layers.mask|6,N.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const Ye=J.parent,te=I.cameras;xe(I,Ye);for(let fe=0;fe<te.length;fe++)xe(te[fe],Ye);te.length===2?oe(I,N,M):I.projectionMatrix.copy(N.projectionMatrix),Xe(J,I,Ye)};function Xe(J,Ae,re){re===null?J.matrix.copy(Ae.matrixWorld):(J.matrix.copy(re.matrixWorld),J.matrix.invert(),J.matrix.multiply(Ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Ae.projectionMatrix),J.projectionMatrixInverse.copy(Ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ba*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(I)},this.getCameraTexture=function(J){return m[J]};let it=null;function gt(J,Ae){if(u=Ae.getViewerPose(l||o),g=Ae,u!==null){const re=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ye=!1;re.length!==I.cameras.length&&(I.cameras.length=0,Ye=!0);for(let ee=0;ee<re.length;ee++){const R=re[ee];let me=null;if(f!==null)me=f.getViewport(R);else{const Ve=h.getViewSubImage(d,R);me=Ve.viewport,ee===0&&(e.setRenderTargetTextures(x,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(x))}let ue=S[ee];ue===void 0&&(ue=new Ci,ue.layers.enable(ee),ue.viewport=new kt,S[ee]=ue),ue.matrix.fromArray(R.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(R.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(me.x,me.y,me.width,me.height),ee===0&&(I.matrix.copy(ue.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ye===!0&&I.cameras.push(ue)}const te=r.enabledFeatures;if(te&&te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const ee=h.getDepthInformation(re[0]);ee&&ee.isValid&&ee.texture&&_.init(ee,r.renderState)}if(te&&te.includes("camera-access")&&(e.state.unbindTexture(),h))for(let ee=0;ee<re.length;ee++){const R=re[ee].camera;if(R){let me=m[R];me||(me=new cm,m[R]=me);const ue=h.getCameraImage(R);me.sourceTexture=ue}}}for(let re=0;re<v.length;re++){const Ye=C[re],te=v[re];Ye!==null&&te!==void 0&&te.update(Ye,Ae,l||o)}it&&it(J,Ae),Ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ae}),g=null}const xt=new im;xt.setAnimationLoop(gt),this.setAnimationLoop=function(J){it=J},this.dispose=function(){}}}const us=new ni,Db=new qt;function Lb(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Bp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===vi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===vi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),x=T.envMap,v=T.envMapRotation;x&&(m.envMap.value=x,us.copy(v),us.x*=-1,us.y*=-1,us.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.envMapRotation.value.setFromMatrix4(Db.makeRotationFromEuler(us)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vi&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ib(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,x){const v=x.program;i.uniformBlockBinding(T,v)}function l(T,x){let v=r[T.id];v===void 0&&(g(T),v=u(T),r[T.id]=v,T.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(T,C);const P=e.render.frame;s[T.id]!==P&&(d(T),s[T.id]=P)}function u(T){const x=h();T.__bindingPointIndex=x;const v=n.createBuffer(),C=T.__size,P=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const x=r[T.id],v=T.uniforms,C=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let P=0,D=v.length;P<D;P++){const N=Array.isArray(v[P])?v[P]:[v[P]];for(let M=0,S=N.length;M<S;M++){const I=N[M];if(f(I,P,M,C)===!0){const k=I.__offset,V=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let K=0;K<V.length;K++){const Y=V[K],de=_(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,k+G,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,G),G+=de.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,x,v,C){const P=T.value,D=x+"_"+v;if(C[D]===void 0)return typeof P=="number"||typeof P=="boolean"?C[D]=P:C[D]=P.clone(),!0;{const N=C[D];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return C[D]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function g(T){const x=T.uniforms;let v=0;const C=16;for(let D=0,N=x.length;D<N;D++){const M=Array.isArray(x[D])?x[D]:[x[D]];for(let S=0,I=M.length;S<I;S++){const k=M[S],V=Array.isArray(k.value)?k.value:[k.value];for(let G=0,K=V.length;G<K;G++){const Y=V[G],de=_(Y),X=v%C,oe=X%de.boundary,xe=X+oe;v+=oe,xe!==0&&C-xe<de.storage&&(v+=C-xe),k.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=de.storage}}}const P=v%C;return P>0&&(v+=C-P),T.__size=v,T.__cache={},this}function _(T){const x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function m(T){const x=T.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class Nb{constructor(e={}){const{canvas:t=U0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let C=!1;this._outputColorSpace=ui;let P=0,D=0,N=null,M=-1,S=null;const I=new kt,k=new kt;let V=null;const G=new Nt(0);let K=0,Y=t.width,de=t.height,X=1,oe=null,xe=null;const Xe=new kt(0,0,Y,de),it=new kt(0,0,Y,de);let gt=!1;const xt=new Zu;let J=!1,Ae=!1;const re=new qt,Ye=new b,te=new kt,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function ee(){return N===null?X:1}let R=i;function me(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bu}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",ge,!1),R===null){const z="webgl2";if(R=me(z,A),R===null)throw me(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ue,Ve,pe,Ne,ae,Re,be,Ce,w,y,O,j,se,W,Ue,_e,Fe,Ze,ye,Pe,tt,Ke,we,mt;function U(){ue=new Wy(R),ue.init(),Ke=new Tb(R,ue),Ve=new ky(R,ue,e,Ke),pe=new wb(R,ue),Ve.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),Ne=new Yy(R),ae=new ub,Re=new Eb(R,ue,pe,ae,Ve,Ke,Ne),be=new zy(v),Ce=new Gy(v),w=new Q_(R),we=new Uy(R,w),y=new Xy(R,w,Ne,we),O=new jy(R,y,w,Ne),ye=new $y(R,Ve,Re),_e=new Oy(ae),j=new db(v,be,Ce,ue,Ve,we,_e),se=new Lb(v,ae),W=new fb,Ue=new xb(ue),Ze=new Ny(v,be,Ce,pe,O,f,c),Fe=new bb(v,O,Ve),mt=new Ib(R,Ne,Ve,pe),Pe=new Fy(R,ue,Ne),tt=new qy(R,ue,Ne),Ne.programs=j.programs,v.capabilities=Ve,v.extensions=ue,v.properties=ae,v.renderLists=W,v.shadowMap=Fe,v.state=pe,v.info=Ne}U();const Se=new Pb(v,R);this.xr=Se,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const A=ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(Y,de,!1))},this.getSize=function(A){return A.set(Y,de)},this.setSize=function(A,z,$=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,de=z,t.width=Math.floor(A*X),t.height=Math.floor(z*X),$===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(Y*X,de*X).floor()},this.setDrawingBufferSize=function(A,z,$){Y=A,de=z,X=$,t.width=Math.floor(A*$),t.height=Math.floor(z*$),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(Xe)},this.setViewport=function(A,z,$,Z){A.isVector4?Xe.set(A.x,A.y,A.z,A.w):Xe.set(A,z,$,Z),pe.viewport(I.copy(Xe).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(it)},this.setScissor=function(A,z,$,Z){A.isVector4?it.set(A.x,A.y,A.z,A.w):it.set(A,z,$,Z),pe.scissor(k.copy(it).multiplyScalar(X).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(A){pe.setScissorTest(gt=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){xe=A},this.getClearColor=function(A){return A.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,$=!0){let Z=0;if(A){let H=!1;if(N!==null){const Me=N.texture.format;H=Me===qu||Me===Xu||Me===Wu}if(H){const Me=N.texture.type,Ge=Me===pr||Me===Ps||Me===va||Me===xa||Me===Vu||Me===Gu,Je=Ze.getClearColor(),We=Ze.getClearAlpha(),ct=Je.r,ft=Je.g,st=Je.b;Ge?(g[0]=ct,g[1]=ft,g[2]=st,g[3]=We,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=ct,_[1]=ft,_[2]=st,_[3]=We,R.clearBufferiv(R.COLOR,0,_))}else Z|=R.COLOR_BUFFER_BIT}z&&(Z|=R.DEPTH_BUFFER_BIT),$&&(Z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Ze.dispose(),W.dispose(),Ue.dispose(),ae.dispose(),be.dispose(),Ce.dispose(),O.dispose(),we.dispose(),mt.dispose(),j.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Mt),Se.removeEventListener("sessionend",zo),Un.stop()};function Te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function $e(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const A=Ne.autoReset,z=Fe.enabled,$=Fe.autoUpdate,Z=Fe.needsUpdate,H=Fe.type;U(),Ne.autoReset=A,Fe.enabled=z,Fe.autoUpdate=$,Fe.needsUpdate=Z,Fe.type=H}function ge(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ie(A){const z=A.target;z.removeEventListener("dispose",ie),qe(z)}function qe(A){ne(A),ae.remove(A)}function ne(A){const z=ae.get(A).programs;z!==void 0&&(z.forEach(function($){j.releaseProgram($)}),A.isShaderMaterial&&j.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,$,Z,H,Me){z===null&&(z=fe);const Ge=H.isMesh&&H.matrixWorld.determinant()<0,Je=ri(A,z,$,Z,H);pe.setMaterial(Z,Ge);let We=$.index,ct=1;if(Z.wireframe===!0){if(We=y.getWireframeAttribute($),We===void 0)return;ct=2}const ft=$.drawRange,st=$.attributes.position;let bt=ft.start*ct,Gt=(ft.start+ft.count)*ct;Me!==null&&(bt=Math.max(bt,Me.start*ct),Gt=Math.min(Gt,(Me.start+Me.count)*ct)),We!==null?(bt=Math.max(bt,0),Gt=Math.min(Gt,We.count)):st!=null&&(bt=Math.max(bt,0),Gt=Math.min(Gt,st.count));const an=Gt-bt;if(an<0||an===1/0)return;we.setup(H,Z,Je,$,We);let Yt,$t=Pe;if(We!==null&&(Yt=w.get(We),$t=tt,$t.setIndex(Yt)),H.isMesh)Z.wireframe===!0?(pe.setLineWidth(Z.wireframeLinewidth*ee()),$t.setMode(R.LINES)):$t.setMode(R.TRIANGLES);else if(H.isLine){let pt=Z.linewidth;pt===void 0&&(pt=1),pe.setLineWidth(pt*ee()),H.isLineSegments?$t.setMode(R.LINES):H.isLineLoop?$t.setMode(R.LINE_LOOP):$t.setMode(R.LINE_STRIP)}else H.isPoints?$t.setMode(R.POINTS):H.isSprite&&$t.setMode(R.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)po("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$t.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))$t.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const pt=H._multiDrawStarts,Wt=H._multiDrawCounts,Lt=H._multiDrawCount,Fn=We?w.get(We).bytesPerElement:1,si=ae.get(Z).currentProgram.getUniforms();for(let kn=0;kn<Lt;kn++)si.setValue(R,"_gl_DrawID",kn),$t.render(pt[kn]/Fn,Wt[kn])}else if(H.isInstancedMesh)$t.renderInstances(bt,an,H.count);else if($.isInstancedBufferGeometry){const pt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Wt=Math.min($.instanceCount,pt);$t.renderInstances(bt,an,Wt)}else $t.render(bt,an)};function Ie(A,z,$){A.transparent===!0&&A.side===fn&&A.forceSinglePass===!1?(A.side=vi,A.needsUpdate=!0,Hs(A,z,$),A.side=Ar,A.needsUpdate=!0,Hs(A,z,$),A.side=fn):Hs(A,z,$)}this.compile=function(A,z,$=null){$===null&&($=A),p=Ue.get($),p.init(z),x.push(p),$.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),A!==$&&A.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const Z=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Me=H.material;if(Me)if(Array.isArray(Me))for(let Ge=0;Ge<Me.length;Ge++){const Je=Me[Ge];Ie(Je,$,H),Z.add(Je)}else Ie(Me,$,H),Z.add(Me)}),p=x.pop(),Z},this.compileAsync=function(A,z,$=null){const Z=this.compile(A,z,$);return new Promise(H=>{function Me(){if(Z.forEach(function(Ge){ae.get(Ge).currentProgram.isReady()&&Z.delete(Ge)}),Z.size===0){H(A);return}setTimeout(Me,10)}ue.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Oe=null;function ht(A){Oe&&Oe(A)}function Mt(){Un.stop()}function zo(){Un.start()}const Un=new im;Un.setAnimationLoop(ht),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(A){Oe=A,Se.setAnimationLoop(A),A===null?Un.stop():Un.start()},Se.addEventListener("sessionstart",Mt),Se.addEventListener("sessionend",zo),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(z),z=Se.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,z,N),p=Ue.get(A,x.length),p.init(z),x.push(p),re.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),xt.setFromProjectionMatrix(re,fr,z.reversedDepth),Ae=this.localClippingEnabled,J=_e.init(this.clippingPlanes,Ae),m=W.get(A,T.length),m.init(),T.push(m),Se.enabled===!0&&Se.isPresenting===!0){const Me=v.xr.getDepthSensingMesh();Me!==null&&Lr(Me,z,-1/0,v.sortObjects)}Lr(A,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(oe,xe),Q=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Q&&Ze.addToRenderList(m,A),this.info.render.frame++,J===!0&&_e.beginShadows();const $=p.state.shadowsArray;Fe.render($,A,z),J===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,H=m.transmissive;if(p.setupLights(),z.isArrayCamera){const Me=z.cameras;if(H.length>0)for(let Ge=0,Je=Me.length;Ge<Je;Ge++){const We=Me[Ge];Ho(Z,H,A,We)}Q&&Ze.render(A);for(let Ge=0,Je=Me.length;Ge<Je;Ge++){const We=Me[Ge];Bo(m,A,We,We.viewport)}}else H.length>0&&Ho(Z,H,A,z),Q&&Ze.render(A),Bo(m,A,z);N!==null&&D===0&&(Re.updateMultisampleRenderTarget(N),Re.updateRenderTargetMipmap(N)),A.isScene===!0&&A.onAfterRender(v,A,z),we.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],J===!0&&_e.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Lr(A,z,$,Z){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||xt.intersectsSprite(A)){Z&&te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(re);const Ge=O.update(A),Je=A.material;Je.visible&&m.push(A,Ge,Je,$,te.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||xt.intersectsObject(A))){const Ge=O.update(A),Je=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),te.copy(A.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),te.copy(Ge.boundingSphere.center)),te.applyMatrix4(A.matrixWorld).applyMatrix4(re)),Array.isArray(Je)){const We=Ge.groups;for(let ct=0,ft=We.length;ct<ft;ct++){const st=We[ct],bt=Je[st.materialIndex];bt&&bt.visible&&m.push(A,Ge,bt,$,te.z,st)}}else Je.visible&&m.push(A,Ge,Je,$,te.z,null)}}const Me=A.children;for(let Ge=0,Je=Me.length;Ge<Je;Ge++)Lr(Me[Ge],z,$,Z)}function Bo(A,z,$,Z){const H=A.opaque,Me=A.transmissive,Ge=A.transparent;p.setupLightsView($),J===!0&&_e.setGlobalState(v.clippingPlanes,$),Z&&pe.viewport(I.copy(Z)),H.length>0&&Ir(H,z,$),Me.length>0&&Ir(Me,z,$),Ge.length>0&&Ir(Ge,z,$),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Ho(A,z,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Ds(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?Ga:pr,minFilter:bs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace}));const Me=p.state.transmissionRenderTarget[Z.id],Ge=Z.viewport||I;Me.setSize(Ge.z*v.transmissionResolutionScale,Ge.w*v.transmissionResolutionScale);const Je=v.getRenderTarget(),We=v.getActiveCubeFace(),ct=v.getActiveMipmapLevel();v.setRenderTarget(Me),v.getClearColor(G),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),Q&&Ze.render($);const ft=v.toneMapping;v.toneMapping=jr;const st=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),J===!0&&_e.setGlobalState(v.clippingPlanes,Z),Ir(A,$,Z),Re.updateMultisampleRenderTarget(Me),Re.updateRenderTargetMipmap(Me),ue.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Gt=0,an=z.length;Gt<an;Gt++){const Yt=z[Gt],$t=Yt.object,pt=Yt.geometry,Wt=Yt.material,Lt=Yt.group;if(Wt.side===fn&&$t.layers.test(Z.layers)){const Fn=Wt.side;Wt.side=vi,Wt.needsUpdate=!0,ns($t,$,Z,pt,Wt,Lt),Wt.side=Fn,Wt.needsUpdate=!0,bt=!0}}bt===!0&&(Re.updateMultisampleRenderTarget(Me),Re.updateRenderTargetMipmap(Me))}v.setRenderTarget(Je,We,ct),v.setClearColor(G,K),st!==void 0&&(Z.viewport=st),v.toneMapping=ft}function Ir(A,z,$){const Z=z.isScene===!0?z.overrideMaterial:null;for(let H=0,Me=A.length;H<Me;H++){const Ge=A[H],Je=Ge.object,We=Ge.geometry,ct=Ge.group;let ft=Ge.material;ft.allowOverride===!0&&Z!==null&&(ft=Z),Je.layers.test($.layers)&&ns(Je,z,$,We,ft,ct)}}function ns(A,z,$,Z,H,Me){A.onBeforeRender(v,z,$,Z,H,Me),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(v,z,$,Z,A,Me),H.transparent===!0&&H.side===fn&&H.forceSinglePass===!1?(H.side=vi,H.needsUpdate=!0,v.renderBufferDirect($,z,Z,H,A,Me),H.side=Ar,H.needsUpdate=!0,v.renderBufferDirect($,z,Z,H,A,Me),H.side=fn):v.renderBufferDirect($,z,Z,H,A,Me),A.onAfterRender(v,z,$,Z,H,Me)}function Hs(A,z,$){z.isScene!==!0&&(z=fe);const Z=ae.get(A),H=p.state.lights,Me=p.state.shadowsArray,Ge=H.state.version,Je=j.getParameters(A,H.state,Me,z,$),We=j.getProgramCacheKey(Je);let ct=Z.programs;Z.environment=A.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(A.isMeshStandardMaterial?Ce:be).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,ct===void 0&&(A.addEventListener("dispose",ie),ct=new Map,Z.programs=ct);let ft=ct.get(We);if(ft!==void 0){if(Z.currentProgram===ft&&Z.lightsStateVersion===Ge)return qi(A,Je),ft}else Je.uniforms=j.getUniforms(A),A.onBeforeCompile(Je,v),ft=j.acquireProgram(Je,We),ct.set(We,ft),Z.uniforms=Je.uniforms;const st=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(st.clippingPlanes=_e.uniform),qi(A,Je),Z.needsLights=tc(A),Z.lightsStateVersion=Ge,Z.needsLights&&(st.ambientLightColor.value=H.state.ambient,st.lightProbe.value=H.state.probe,st.directionalLights.value=H.state.directional,st.directionalLightShadows.value=H.state.directionalShadow,st.spotLights.value=H.state.spot,st.spotLightShadows.value=H.state.spotShadow,st.rectAreaLights.value=H.state.rectArea,st.ltc_1.value=H.state.rectAreaLTC1,st.ltc_2.value=H.state.rectAreaLTC2,st.pointLights.value=H.state.point,st.pointLightShadows.value=H.state.pointShadow,st.hemisphereLights.value=H.state.hemi,st.directionalShadowMap.value=H.state.directionalShadowMap,st.directionalShadowMatrix.value=H.state.directionalShadowMatrix,st.spotShadowMap.value=H.state.spotShadowMap,st.spotLightMatrix.value=H.state.spotLightMatrix,st.spotLightMap.value=H.state.spotLightMap,st.pointShadowMap.value=H.state.pointShadowMap,st.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.currentProgram=ft,Z.uniformsList=null,ft}function is(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=qc.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function qi(A,z){const $=ae.get(A);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.batchingColor=z.batchingColor,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function ri(A,z,$,Z,H){z.isScene!==!0&&(z=fe),Re.resetTextureUnits();const Me=z.fog,Ge=Z.isMeshStandardMaterial?z.environment:null,Je=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Mo,We=(Z.isMeshStandardMaterial?Ce:be).get(Z.envMap||Ge),ct=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ft=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),st=!!$.morphAttributes.position,bt=!!$.morphAttributes.normal,Gt=!!$.morphAttributes.color;let an=jr;Z.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(an=v.toneMapping);const Yt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,$t=Yt!==void 0?Yt.length:0,pt=ae.get(Z),Wt=p.state.lights;if(J===!0&&(Ae===!0||A!==S)){const On=A===S&&Z.id===M;_e.setState(Z,A,On)}let Lt=!1;Z.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==Wt.state.version||pt.outputColorSpace!==Je||H.isBatchedMesh&&pt.batching===!1||!H.isBatchedMesh&&pt.batching===!0||H.isBatchedMesh&&pt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&pt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&pt.instancing===!1||!H.isInstancedMesh&&pt.instancing===!0||H.isSkinnedMesh&&pt.skinning===!1||!H.isSkinnedMesh&&pt.skinning===!0||H.isInstancedMesh&&pt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&pt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&pt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&pt.instancingMorph===!1&&H.morphTexture!==null||pt.envMap!==We||Z.fog===!0&&pt.fog!==Me||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==_e.numPlanes||pt.numIntersection!==_e.numIntersection)||pt.vertexAlphas!==ct||pt.vertexTangents!==ft||pt.morphTargets!==st||pt.morphNormals!==bt||pt.morphColors!==Gt||pt.toneMapping!==an||pt.morphTargetsCount!==$t)&&(Lt=!0):(Lt=!0,pt.__version=Z.version);let Fn=pt.currentProgram;Lt===!0&&(Fn=Hs(Z,z,H));let si=!1,kn=!1,rs=!1;const cn=Fn.getUniforms(),oi=pt.uniforms;if(pe.useProgram(Fn.program)&&(si=!0,kn=!0,rs=!0),Z.id!==M&&(M=Z.id,kn=!0),si||S!==A){pe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),cn.setValue(R,"projectionMatrix",A.projectionMatrix),cn.setValue(R,"viewMatrix",A.matrixWorldInverse);const E=cn.map.cameraPosition;E!==void 0&&E.setValue(R,Ye.setFromMatrixPosition(A.matrixWorld)),Ve.logarithmicDepthBuffer&&cn.setValue(R,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&cn.setValue(R,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,kn=!0,rs=!0)}if(H.isSkinnedMesh){cn.setOptional(R,H,"bindMatrix"),cn.setOptional(R,H,"bindMatrixInverse");const On=H.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),cn.setValue(R,"boneTexture",On.boneTexture,Re))}H.isBatchedMesh&&(cn.setOptional(R,H,"batchingTexture"),cn.setValue(R,"batchingTexture",H._matricesTexture,Re),cn.setOptional(R,H,"batchingIdTexture"),cn.setValue(R,"batchingIdTexture",H._indirectTexture,Re),cn.setOptional(R,H,"batchingColorTexture"),H._colorsTexture!==null&&cn.setValue(R,"batchingColorTexture",H._colorsTexture,Re));const $n=$.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&ye.update(H,$,Fn),(kn||pt.receiveShadow!==H.receiveShadow)&&(pt.receiveShadow=H.receiveShadow,cn.setValue(R,"receiveShadow",H.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(oi.envMap.value=We,oi.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&z.environment!==null&&(oi.envMapIntensity.value=z.environmentIntensity),kn&&(cn.setValue(R,"toneMappingExposure",v.toneMappingExposure),pt.needsLights&&wi(oi,rs),Me&&Z.fog===!0&&se.refreshFogUniforms(oi,Me),se.refreshMaterialUniforms(oi,Z,X,de,p.state.transmissionRenderTarget[A.id]),qc.upload(R,is(pt),oi,Re)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(qc.upload(R,is(pt),oi,Re),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&cn.setValue(R,"center",H.center),cn.setValue(R,"modelViewMatrix",H.modelViewMatrix),cn.setValue(R,"normalMatrix",H.normalMatrix),cn.setValue(R,"modelMatrix",H.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const On=Z.uniformsGroups;for(let E=0,L=On.length;E<L;E++){const F=On[E];mt.update(F,Fn),mt.bind(F,Fn)}}return Fn}function wi(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function tc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,z,$){const Z=ae.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),ae.get(A.texture).__webglTexture=z,ae.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:$,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const $=ae.get(A);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0};const Nr=R.createFramebuffer();this.setRenderTarget=function(A,z=0,$=0){N=A,P=z,D=$;let Z=!0,H=null,Me=!1,Ge=!1;if(A){const We=ae.get(A);if(We.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(R.FRAMEBUFFER,null),Z=!1;else if(We.__webglFramebuffer===void 0)Re.setupRenderTarget(A);else if(We.__hasExternalTextures)Re.rebindTextures(A,ae.get(A.texture).__webglTexture,ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const st=A.depthTexture;if(We.__boundDepthTexture!==st){if(st!==null&&ae.has(st)&&(A.width!==st.image.width||A.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Re.setupDepthRenderbuffer(A)}}const ct=A.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Ge=!0);const ft=ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ft[z])?H=ft[z][$]:H=ft[z],Me=!0):A.samples>0&&Re.useMultisampledRTT(A)===!1?H=ae.get(A).__webglMultisampledFramebuffer:Array.isArray(ft)?H=ft[$]:H=ft,I.copy(A.viewport),k.copy(A.scissor),V=A.scissorTest}else I.copy(Xe).multiplyScalar(X).floor(),k.copy(it).multiplyScalar(X).floor(),V=gt;if($!==0&&(H=Nr),pe.bindFramebuffer(R.FRAMEBUFFER,H)&&Z&&pe.drawBuffers(A,H),pe.viewport(I),pe.scissor(k),pe.setScissorTest(V),Me){const We=ae.get(A.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+z,We.__webglTexture,$)}else if(Ge){const We=z;for(let ct=0;ct<A.textures.length;ct++){const ft=ae.get(A.textures[ct]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+ct,ft.__webglTexture,$,We)}}else if(A!==null&&$!==0){const We=ae.get(A.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,We.__webglTexture,$)}M=-1},this.readRenderTargetPixels=function(A,z,$,Z,H,Me,Ge,Je=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We){pe.bindFramebuffer(R.FRAMEBUFFER,We);try{const ct=A.textures[Je],ft=ct.format,st=ct.type;if(!Ve.textureFormatReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Z&&$>=0&&$<=A.height-H&&(A.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Je),R.readPixels(z,$,Z,H,Ke.convert(ft),Ke.convert(st),Me))}finally{const ct=N!==null?ae.get(N).__webglFramebuffer:null;pe.bindFramebuffer(R.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(A,z,$,Z,H,Me,Ge,Je=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(We=We[Ge]),We)if(z>=0&&z<=A.width-Z&&$>=0&&$<=A.height-H){pe.bindFramebuffer(R.FRAMEBUFFER,We);const ct=A.textures[Je],ft=ct.format,st=ct.type;if(!Ve.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,bt),R.bufferData(R.PIXEL_PACK_BUFFER,Me.byteLength,R.STREAM_READ),A.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Je),R.readPixels(z,$,Z,H,Ke.convert(ft),Ke.convert(st),0);const Gt=N!==null?ae.get(N).__webglFramebuffer:null;pe.bindFramebuffer(R.FRAMEBUFFER,Gt);const an=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await F0(R,an,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,bt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Me),R.deleteBuffer(bt),R.deleteSync(an),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,$=0){const Z=Math.pow(2,-$),H=Math.floor(A.image.width*Z),Me=Math.floor(A.image.height*Z),Ge=z!==null?z.x:0,Je=z!==null?z.y:0;Re.setTexture2D(A,0),R.copyTexSubImage2D(R.TEXTURE_2D,$,0,0,Ge,Je,H,Me),pe.unbindTexture()};const Gn=R.createFramebuffer(),Fl=R.createFramebuffer();this.copyTextureToTexture=function(A,z,$=null,Z=null,H=0,Me=null){Me===null&&(H!==0?(po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=H,H=0):Me=0);let Ge,Je,We,ct,ft,st,bt,Gt,an;const Yt=A.isCompressedTexture?A.mipmaps[Me]:A.image;if($!==null)Ge=$.max.x-$.min.x,Je=$.max.y-$.min.y,We=$.isBox3?$.max.z-$.min.z:1,ct=$.min.x,ft=$.min.y,st=$.isBox3?$.min.z:0;else{const $n=Math.pow(2,-H);Ge=Math.floor(Yt.width*$n),Je=Math.floor(Yt.height*$n),A.isDataArrayTexture?We=Yt.depth:A.isData3DTexture?We=Math.floor(Yt.depth*$n):We=1,ct=0,ft=0,st=0}Z!==null?(bt=Z.x,Gt=Z.y,an=Z.z):(bt=0,Gt=0,an=0);const $t=Ke.convert(z.format),pt=Ke.convert(z.type);let Wt;z.isData3DTexture?(Re.setTexture3D(z,0),Wt=R.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Re.setTexture2DArray(z,0),Wt=R.TEXTURE_2D_ARRAY):(Re.setTexture2D(z,0),Wt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,z.unpackAlignment);const Lt=R.getParameter(R.UNPACK_ROW_LENGTH),Fn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),si=R.getParameter(R.UNPACK_SKIP_PIXELS),kn=R.getParameter(R.UNPACK_SKIP_ROWS),rs=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Yt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Yt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ct),R.pixelStorei(R.UNPACK_SKIP_ROWS,ft),R.pixelStorei(R.UNPACK_SKIP_IMAGES,st);const cn=A.isDataArrayTexture||A.isData3DTexture,oi=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const $n=ae.get(A),On=ae.get(z),E=ae.get($n.__renderTarget),L=ae.get(On.__renderTarget);pe.bindFramebuffer(R.READ_FRAMEBUFFER,E.__webglFramebuffer),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,L.__webglFramebuffer);for(let F=0;F<We;F++)cn&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ae.get(A).__webglTexture,H,st+F),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ae.get(z).__webglTexture,Me,an+F)),R.blitFramebuffer(ct,ft,Ge,Je,bt,Gt,Ge,Je,R.DEPTH_BUFFER_BIT,R.NEAREST);pe.bindFramebuffer(R.READ_FRAMEBUFFER,null),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||ae.has(A)){const $n=ae.get(A),On=ae.get(z);pe.bindFramebuffer(R.READ_FRAMEBUFFER,Gn),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,Fl);for(let E=0;E<We;E++)cn?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,$n.__webglTexture,H,st+E):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,$n.__webglTexture,H),oi?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,On.__webglTexture,Me,an+E):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,On.__webglTexture,Me),H!==0?R.blitFramebuffer(ct,ft,Ge,Je,bt,Gt,Ge,Je,R.COLOR_BUFFER_BIT,R.NEAREST):oi?R.copyTexSubImage3D(Wt,Me,bt,Gt,an+E,ct,ft,Ge,Je):R.copyTexSubImage2D(Wt,Me,bt,Gt,ct,ft,Ge,Je);pe.bindFramebuffer(R.READ_FRAMEBUFFER,null),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else oi?A.isDataTexture||A.isData3DTexture?R.texSubImage3D(Wt,Me,bt,Gt,an,Ge,Je,We,$t,pt,Yt.data):z.isCompressedArrayTexture?R.compressedTexSubImage3D(Wt,Me,bt,Gt,an,Ge,Je,We,$t,Yt.data):R.texSubImage3D(Wt,Me,bt,Gt,an,Ge,Je,We,$t,pt,Yt):A.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Me,bt,Gt,Ge,Je,$t,pt,Yt.data):A.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Me,bt,Gt,Yt.width,Yt.height,$t,Yt.data):R.texSubImage2D(R.TEXTURE_2D,Me,bt,Gt,Ge,Je,$t,pt,Yt);R.pixelStorei(R.UNPACK_ROW_LENGTH,Lt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Fn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,si),R.pixelStorei(R.UNPACK_SKIP_ROWS,kn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,rs),Me===0&&z.generateMipmaps&&R.generateMipmap(Wt),pe.unbindTexture()},this.copyTextureToTexture3D=function(A,z,$=null,Z=null,H=0){return po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,z,$,Z,H)},this.initRenderTarget=function(A){ae.get(A).__webglFramebuffer===void 0&&Re.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Re.setTextureCube(A,0):A.isData3DTexture?Re.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Re.setTexture2DArray(A,0):Re.setTexture2D(A,0),pe.unbindTexture()},this.resetState=function(){P=0,D=0,N=null,pe.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}}const Ff={type:"change"},ih={type:"start"},lm={type:"end"},Pc=new Wa,kf=new Wr,Ub=Math.cos(70*jt.DEG2RAD),Dn=new b,fi=2*Math.PI,Kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vd=1e-6;class Fb extends nm{constructor(e,t=null){super(e,t),this.state=Kt.NONE,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ho.ROTATE,MIDDLE:ho.DOLLY,RIGHT:ho.PAN},this.touches={ONE:ao.ROTATE,TWO:ao.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new b,this._lastQuaternion=new mn,this._lastTargetPosition=new b,this._quat=new mn().setFromUnitVectors(e.up,new b(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new df,this._sphericalDelta=new df,this._scale=1,this._panOffset=new b,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new b,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ob.bind(this),this._onPointerDown=kb.bind(this),this._onPointerUp=zb.bind(this),this._onContextMenu=qb.bind(this),this._onMouseWheel=Vb.bind(this),this._onKeyDown=Gb.bind(this),this._onTouchStart=Wb.bind(this),this._onTouchMove=Xb.bind(this),this._onMouseDown=Bb.bind(this),this._onMouseMove=Hb.bind(this),this._interceptControlDown=Yb.bind(this),this._interceptControlUp=$b.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ff),this.update(),this.state=Kt.NONE}update(e=null){const t=this.object.position;Dn.copy(t).sub(this.target),Dn.applyQuaternion(this._quat),this._spherical.setFromVector3(Dn),this.autoRotate&&this.state===Kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=fi:i>Math.PI&&(i-=fi),r<-Math.PI?r+=fi:r>Math.PI&&(r-=fi),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Dn.setFromSpherical(this._spherical),Dn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Dn.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new b(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new b(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Pc.origin.copy(this.object.position),Pc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pc.direction))<Ub?this.object.lookAt(this.target):(kf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pc.intersectPlane(kf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>vd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vd||this._lastTargetPosition.distanceToSquared(this.target)>vd?(this.dispatchEvent(Ff),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?fi/60*this.autoRotateSpeed*e:fi/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dn.setFromMatrixColumn(t,0),Dn.multiplyScalar(-e),this._panOffset.add(Dn)}_panUp(e,t){this.screenSpacePanning===!0?Dn.setFromMatrixColumn(t,1):(Dn.setFromMatrixColumn(t,0),Dn.crossVectors(this.object.up,Dn)),Dn.multiplyScalar(e),this._panOffset.add(Dn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Dn.copy(r).sub(this.target);let s=Dn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/t.clientHeight),this._rotateUp(fi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/t.clientHeight),this._rotateUp(fi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function kb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Ob(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function zb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lm),this.state=Kt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Bb(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ho.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Kt.DOLLY;break;case ho.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Kt.ROTATE}break;case ho.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Kt.PAN}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(ih)}function Hb(n){switch(this.state){case Kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Vb(n){this.enabled===!1||this.enableZoom===!1||this.state!==Kt.NONE||(n.preventDefault(),this.dispatchEvent(ih),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(lm))}function Gb(n){this.enabled!==!1&&this._handleKeyDown(n)}function Wb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ao.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Kt.TOUCH_ROTATE;break;case ao.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Kt.TOUCH_PAN;break;default:this.state=Kt.NONE}break;case 2:switch(this.touches.TWO){case ao.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Kt.TOUCH_DOLLY_PAN;break;case ao.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Kt.TOUCH_DOLLY_ROTATE;break;default:this.state=Kt.NONE}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(ih)}function Xb(n){switch(this._trackPointer(n),this.state){case Kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Kt.NONE}}function qb(n){this.enabled!==!1&&n.preventDefault()}function Yb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $b(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const hs=new tm,Qn=new b,Hr=new b,un=new mn,Of={X:new b(1,0,0),Y:new b(0,1,0),Z:new b(0,0,1)},xd={type:"change"},zf={type:"mouseDown",mode:null},Bf={type:"mouseUp",mode:null},Hf={type:"objectChange"};class jb extends nm{constructor(e,t=null){super(void 0,t);const i=new tM(this);this._root=i;const r=new nM;this._gizmo=r,i.add(r);const s=new iM;this._plane=s,i.add(s);const o=this;function a(x,v){let C=v;Object.defineProperty(o,x,{get:function(){return C!==void 0?C:v},set:function(P){C!==P&&(C=P,s[x]=P,r[x]=P,o.dispatchEvent({type:x+"-changed",value:P}),o.dispatchEvent(xd))}}),o[x]=v,s[x]=v,r[x]=v}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const c=new b,l=new b,u=new mn,h=new mn,d=new b,f=new mn,g=new b,_=new b,m=new b,p=0,T=new b;a("worldPosition",c),a("worldPositionStart",l),a("worldQuaternion",u),a("worldQuaternionStart",h),a("cameraPosition",d),a("cameraQuaternion",f),a("pointStart",g),a("pointEnd",_),a("rotationAxis",m),a("rotationAngle",p),a("eye",T),this._offset=new b,this._startNorm=new b,this._endNorm=new b,this._cameraScale=new b,this._parentPosition=new b,this._parentQuaternion=new mn,this._parentQuaternionInv=new mn,this._parentScale=new b,this._worldScaleStart=new b,this._worldQuaternionInv=new mn,this._worldScale=new b,this._positionStart=new b,this._quaternionStart=new mn,this._scaleStart=new b,this._getPointer=Zb.bind(this),this._onPointerDown=Jb.bind(this),this._onPointerHover=Kb.bind(this),this._onPointerMove=Qb.bind(this),this._onPointerUp=eM.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&hs.setFromCamera(e,this.camera);const t=yd(this._gizmo.picker[this.mode],hs);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&hs.setFromCamera(e,this.camera);const t=yd(this._plane,hs,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,zf.mode=this.mode,this.dispatchEvent(zf)}}pointerMove(e){const t=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&hs.setFromCamera(e,this.camera);const o=yd(this._plane,hs,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(un.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(Qn.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(Qn.setFromMatrixPosition(r.parent.matrixWorld)))),r.position.x=Math.max(this.minX,Math.min(this.maxX,r.position.x)),r.position.y=Math.max(this.minY,Math.min(this.maxY,r.position.y)),r.position.z=Math.max(this.minZ,Math.min(this.maxZ,r.position.z));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Hr.set(a,a,a)}else Qn.copy(this.pointStart),Hr.copy(this.pointEnd),Qn.applyQuaternion(this._worldQuaternionInv),Hr.applyQuaternion(this._worldQuaternionInv),Hr.divide(Qn),t.search("X")===-1&&(Hr.x=1),t.search("Y")===-1&&(Hr.y=1),t.search("Z")===-1&&(Hr.z=1);r.scale.copy(this._scaleStart).multiply(Hr),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Qn.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Qn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Of[t]),Qn.copy(Of[t]),s==="local"&&Qn.applyQuaternion(this.worldQuaternion),Qn.cross(this.eye),Qn.length()===0?c=!0:this.rotationAngle=this._offset.dot(Qn.normalize())*a),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(un.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(un.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(xd),this.dispatchEvent(Hf)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Bf.mode=this.mode,this.dispatchEvent(Bf)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(xd),this.dispatchEvent(Hf),this.pointStart.copy(this.pointEnd))}getRaycaster(){return hs}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,i,r){const s=this._gizmo.materialLib;s.xAxis.color.set(e),s.yAxis.color.set(t),s.zAxis.color.set(i),s.active.color.set(r),s.xAxisTransparent.color.set(e),s.yAxisTransparent.color.set(t),s.zAxisTransparent.color.set(i),s.activeTransparent.color.set(r),s.xAxis._color&&s.xAxis._color.set(e),s.yAxis._color&&s.yAxis._color.set(t),s.zAxis._color&&s.zAxis._color.set(i),s.active._color&&s.active._color.set(r),s.xAxisTransparent._color&&s.xAxisTransparent._color.set(e),s.yAxisTransparent._color&&s.yAxisTransparent._color.set(t),s.zAxisTransparent._color&&s.zAxisTransparent._color.set(i),s.activeTransparent._color&&s.activeTransparent._color.set(r)}}function Zb(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{const e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function Kb(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function Jb(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function Qb(n){this.enabled&&this.pointerMove(this._getPointer(n))}function eM(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function yd(n,e,t){const i=e.intersectObject(n,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||t)return i[r];return!1}const Dc=new ni,Jt=new b(0,1,0),Vf=new b(0,0,0),Gf=new qt,Lc=new mn,Yc=new mn,lr=new b,Wf=new qt,sa=new b(1,0,0),ms=new b(0,1,0),oa=new b(0,0,1),Ic=new b,$o=new b,jo=new b;class tM extends vn{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class nM extends vn{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new yn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new yi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const l=e.clone();l.color.setHex(65280),l.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const h=e.clone();h.opacity=.25;const d=e.clone();d.color.setHex(16776960),d.opacity=.25;const f=e.clone();f.color.setHex(16776960);const g=e.clone();g.color.setHex(7895160),this.materialLib={xAxis:s,yAxis:o,zAxis:a,active:f,xAxisTransparent:c,yAxisTransparent:l,zAxisTransparent:u,activeTransparent:d};const _=new Jn(0,.04,.1,12);_.translate(0,.05,0);const m=new Tn(.08,.08,.08);m.translate(0,.04,0);const p=new Ft;p.setAttribute("position",new Dt([0,0,0,1,0,0],3));const T=new Jn(.0075,.0075,.5,3);T.translate(0,.25,0);function x(K,Y){const de=new vs(K,.0075,3,64,Y*Math.PI*2);return de.rotateY(Math.PI/2),de.rotateX(Math.PI/2),de}function v(){const K=new Ft;return K.setAttribute("position",new Dt([0,0,0,1,1,1],3)),K}const C={X:[[new Ee(_,s),[.5,0,0],[0,0,-Math.PI/2]],[new Ee(_,s),[-.5,0,0],[0,0,Math.PI/2]],[new Ee(T,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Ee(_,o),[0,.5,0]],[new Ee(_,o),[0,-.5,0],[Math.PI,0,0]],[new Ee(T,o)]],Z:[[new Ee(_,a),[0,0,.5],[Math.PI/2,0,0]],[new Ee(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new Ee(T,a),null,[Math.PI/2,0,0]]],XYZ:[[new Ee(new Ms(.1,0),h),[0,0,0]]],XY:[[new Ee(new Tn(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new Ee(new Tn(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new Tn(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},P={X:[[new Ee(new Jn(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new Ee(new Jn(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ee(new Jn(.2,0,.6,4),i),[0,.3,0]],[new Ee(new Jn(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ee(new Jn(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new Ee(new Jn(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Ee(new Ms(.2,0),i)]],XY:[[new Ee(new Tn(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new Ee(new Tn(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new Tn(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},D={START:[[new Ee(new Ms(.01,2),r),null,null,null,"helper"]],END:[[new Ee(new Ms(.01,2),r),null,null,null,"helper"]],DELTA:[[new rn(v(),r),null,null,null,"helper"]],X:[[new rn(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new rn(p,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new rn(p,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},N={XYZE:[[new Ee(x(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new Ee(x(.5,.5),s)]],Y:[[new Ee(x(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new Ee(x(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new Ee(x(.75,1),d),null,[0,Math.PI/2,0]]]},M={AXIS:[[new rn(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]]},S={XYZE:[[new Ee(new Zr(.25,10,8),i)]],X:[[new Ee(new vs(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Ee(new vs(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Ee(new vs(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Ee(new vs(.75,.1,2,24),i)]]},I={X:[[new Ee(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new Ee(T,s),[0,0,0],[0,0,-Math.PI/2]],[new Ee(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Ee(m,o),[0,.5,0]],[new Ee(T,o)],[new Ee(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Ee(m,a),[0,0,.5],[Math.PI/2,0,0]],[new Ee(T,a),[0,0,0],[Math.PI/2,0,0]],[new Ee(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Ee(new Tn(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new Ee(new Tn(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new Tn(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ee(new Tn(.1,.1,.1),h)]]},k={X:[[new Ee(new Jn(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new Ee(new Jn(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ee(new Jn(.2,0,.6,4),i),[0,.3,0]],[new Ee(new Jn(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ee(new Jn(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new Ee(new Jn(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Ee(new Tn(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new Ee(new Tn(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new Tn(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ee(new Tn(.2,.2,.2),i),[0,0,0]]]},V={X:[[new rn(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new rn(p,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new rn(p,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function G(K){const Y=new vn;for(const de in K)for(let X=K[de].length;X--;){const oe=K[de][X][0].clone(),xe=K[de][X][1],Xe=K[de][X][2],it=K[de][X][3],gt=K[de][X][4];oe.name=de,oe.tag=gt,xe&&oe.position.set(xe[0],xe[1],xe[2]),Xe&&oe.rotation.set(Xe[0],Xe[1],Xe[2]),it&&oe.scale.set(it[0],it[1],it[2]),oe.updateMatrix();const xt=oe.geometry.clone();xt.applyMatrix4(oe.matrix),oe.geometry=xt,oe.renderOrder=1/0,oe.position.set(0,0,0),oe.rotation.set(0,0,0),oe.scale.set(1,1,1),Y.add(oe)}return Y}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=G(C)),this.add(this.gizmo.rotate=G(N)),this.add(this.gizmo.scale=G(I)),this.add(this.picker.translate=G(P)),this.add(this.picker.rotate=G(S)),this.add(this.picker.scale=G(k)),this.add(this.helper.translate=G(D)),this.add(this.helper.rotate=G(M)),this.add(this.helper.scale=G(V)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Yc;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(un.setFromEuler(Dc.set(0,0,0)),o.quaternion.copy(i).multiply(un),Math.abs(Jt.copy(sa).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(un.setFromEuler(Dc.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(un),Math.abs(Jt.copy(ms).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(un.setFromEuler(Dc.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(un),Math.abs(Jt.copy(oa).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(un.setFromEuler(Dc.set(0,Math.PI/2,0)),Jt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Gf.lookAt(Vf,Jt,ms)),o.quaternion.multiply(un),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Qn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Qn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Qn),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Jt.copy(sa).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Jt.copy(ms).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Jt.copy(oa).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Jt.copy(oa).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Jt.copy(sa).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Jt.copy(ms).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Lc.copy(i),Jt.copy(this.eye).applyQuaternion(un.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Gf.lookAt(this.eye,Vf,ms)),o.name==="X"&&(un.setFromAxisAngle(sa,Math.atan2(-Jt.y,Jt.z)),un.multiplyQuaternions(Lc,un),o.quaternion.copy(un)),o.name==="Y"&&(un.setFromAxisAngle(ms,Math.atan2(Jt.x,Jt.z)),un.multiplyQuaternions(Lc,un),o.quaternion.copy(un)),o.name==="Z"&&(un.setFromAxisAngle(oa,Math.atan2(Jt.y,Jt.x)),un.multiplyQuaternions(Lc,un),o.quaternion.copy(un))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(c){return o.name===c})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}}class iM extends Ee{constructor(){super(new Jr(1e5,1e5,2,2),new yn({visible:!1,wireframe:!0,side:fn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Ic.copy(sa).applyQuaternion(t==="local"?this.worldQuaternion:Yc),$o.copy(ms).applyQuaternion(t==="local"?this.worldQuaternion:Yc),jo.copy(oa).applyQuaternion(t==="local"?this.worldQuaternion:Yc),Jt.copy($o),this.mode){case"translate":case"scale":switch(this.axis){case"X":Jt.copy(this.eye).cross(Ic),lr.copy(Ic).cross(Jt);break;case"Y":Jt.copy(this.eye).cross($o),lr.copy($o).cross(Jt);break;case"Z":Jt.copy(this.eye).cross(jo),lr.copy(jo).cross(Jt);break;case"XY":lr.copy(jo);break;case"YZ":lr.copy(Ic);break;case"XZ":Jt.copy(jo),lr.copy($o);break;case"XYZ":case"E":lr.set(0,0,0);break}break;default:lr.set(0,0,0)}lr.length()===0?this.quaternion.copy(this.cameraQuaternion):(Wf.lookAt(Qn.set(0,0,0),lr,Jt),this.quaternion.setFromRotationMatrix(Wf)),super.updateMatrixWorld(e)}}function rM(n,e=!0){n.userData.terrainContours=!0,n.userData.contourSmoothing=e,n.onBeforeCompile=t=>{t.uniforms.contourWidth={value:n.userData.contourSmoothing?1.2:.8},t.vertexShader=`varying float vContourHeight;
`+t.vertexShader,t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vContourHeight = position.y;`),t.fragmentShader=`varying float vContourHeight;
uniform float contourWidth;
`+t.fragmentShader,t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`
      #include <color_fragment>
      float contourPixel = max(fwidth(vContourHeight), 0.00001);
      float contourDistance = abs(mod(vContourHeight + 2.5, 5.0) - 2.5);
      contourDistance = vContourHeight < 2.5 ? abs(vContourHeight - 0.025) : contourDistance;
      float contourLine = 1.0 - smoothstep(contourPixel * 0.25,
        contourPixel * contourWidth, contourDistance);
      // A level plateau is not a whole white contour, and sea level has no inland line.
      contourLine *= step(0.0001, fwidth(vContourHeight));
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.82, 0.89, 0.81), contourLine * 0.75);
    `)},n.customProgramCacheKey=()=>`terrain-contours-${n.userData.contourSmoothing?1:0}`}const Nc=32,sM=.025,dr=sM;function dm(n,e,t){const i=new Sn,r=new yn({vertexColors:!0,transparent:!0,opacity:.88,side:fn,depthWrite:!0});t&&rM(r,t.smoothing);const s=[],o=new Nt,a=new Nt(.55,.68,.74),c=new Float32Array(n.size*n.size*3),l=new Uint32Array(n.size*n.size);let u=0,h=!1;for(let _=0;_<n.size-1;_+=Nc)for(let m=0;m<n.size-1;m+=Nc){const p=Math.min(n.size-1,m+Nc),T=Math.min(n.size-1,_+Nc),x=(p-m)*(T-_)*12*3,v=new Di(new Float32Array(x),3).setUsage(tl),C=new Di(new Float32Array(x),3).setUsage(tl),P=new Ft;P.setAttribute("position",v),P.setAttribute("color",C);const D=-n.extent+m*n.spacing,N=-n.extent+p*n.spacing,M=-n.extentZ+_*n.spacingZ,S=-n.extentZ+T*n.spacingZ;P.boundingBox=new Do(new b(D,0,M),new b(N,180,S)),P.boundingSphere=P.boundingBox.getBoundingSphere(new Lo);const I=new Ee(P,r);I.userData.terrainChunk={minX:m,maxX:p,minZ:_,maxZ:T},s.push({minX:m,maxX:p,minZ:_,maxZ:T,mesh:I,position:v,color:C}),i.add(I)}const d=(_,m)=>{const p=-n.extent+_*n.spacing,T=-n.extentZ+m*n.spacingZ;let x=0;if(e){const P=Math.round((p+e.extent)/e.spacing),D=Math.round((T+e.extentZ)/e.spacingZ);P>=0&&P<e.size&&D>=0&&D<e.size&&(x=e.data[D*e.size+P]/255)}const v=m*n.size+_,C=n.data[v];if(l[v]!==u){const P=Math.pow(jt.clamp(C/180,0,1),.65);o.setHSL(.57,.35*(1-P)+.06,.06+P*.68,ui),x&&o.lerp(a,x*.45),c[v*3]=o.r,c[v*3+1]=o.g,c[v*3+2]=o.b,l[v]=u}return{x:p,y:C,z:T,density:x,r:c[v*3],g:c[v*3+1],b:c[v*3+2]}},f=_=>{let m=0;const p=x=>{_.position.setXYZ(m,x.x,x.y,x.z),_.color.setXYZ(m++,x.r,x.g,x.b)},T=(x,v,C)=>{if(x.y>=dr&&v.y>=dr&&C.y>=dr){p(x),p(v),p(C);return}const P=[x,v,C],D=[];for(let N=0;N<3;N++){const M=P[N],S=P[(N+1)%3];if(M.y>=dr&&D.push(M),M.y>=dr!=S.y>=dr){const I=(dr-M.y)/(S.y-M.y),k=M.density+(S.density-M.density)*I,V=Math.pow(dr/180,.65);o.setHSL(.57,.35*(1-V)+.06,.06+V*.68,ui),k&&o.lerp(a,k*.45),D.push({x:M.x+(S.x-M.x)*I,y:dr,z:M.z+(S.z-M.z)*I,density:k,r:o.r,g:o.g,b:o.b})}}for(let N=1;N<D.length-1;N++)p(D[0]),p(D[N]),p(D[N+1])};for(let x=_.minZ;x<_.maxZ;x++)for(let v=_.minX;v<_.maxX;v++){const C=d(v,x),P=d(v+1,x),D=d(v+1,x+1),N=d(v,x+1);Math.max(C.y,P.y,D.y,N.y)<dr||(T(C,P,D),T(C,D,N))}_.mesh.geometry.setDrawRange(0,m),_.mesh.visible=m>0;for(const x of[_.position,_.color])m&&x.addUpdateRange(0,m*3),x.needsUpdate=!0},g=_=>{if(!h&&!(_&&![_.minX,_.maxX,_.minZ,_.maxZ].every(Number.isFinite))&&!(_&&(_.minX>_.maxX||_.minZ>_.maxZ))){u=u+1>>>0,u||(l.fill(0),u=1);for(const m of s)_&&(m.maxX<_.minX||m.minX>_.maxX||m.maxZ<_.minZ||m.minZ>_.maxZ)||f(m)}};return g(),{root:i,update:g,dispose(){if(!h){h=!0;for(const _ of s)_.mesh.geometry.dispose();r.dispose(),i.removeFromParent(),i.clear()}}}}function oM(n,e){const t=dm(n,void 0,e);for(const i of t.root.children){const r=i,s=r.geometry.drawRange.count;for(const o of["position","color"]){const a=r.geometry.getAttribute(o);r.geometry.setAttribute(o,new Di(a.array.slice(0,s*3),3))}r.geometry.setDrawRange(0,s)}return t.root}const aM=5,cM=sg,Sd=40,Xf=65;function lM(n){if(n<=Sd*et)return 1;if(n>=Xf*et)return 0;const e=(n/et-Sd)/(Xf-Sd);return 1-e*e*(3-2*e)}const dM=`
  varying vec2 vMapPosition;
  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vMapPosition = worldPosition.xz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,uM=`
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
`;function hM(n,e){const t=new Jr(n*2,e*2);t.rotateX(-Math.PI/2);const i=new Rr({uniforms:{majorColor:{value:new Nt(16777215)},minorColor:{value:new Nt(16777215)},majorStep:{value:aM*et},minorStep:{value:cM*et},minorOpacity:{value:1}},vertexShader:dM,fragmentShader:uM,transparent:!0,depthWrite:!1,side:fn}),r=new Ee(t,i);return r.position.y=-2,r.renderOrder=-1,r}function um(n,e){n.material.uniforms.minorOpacity.value=lM(e)}const bd=[{label:"N",degrees:0,x:0,z:-1},{label:"E",degrees:90,x:1,z:0},{label:"S",degrees:180,x:0,z:1},{label:"W",degrees:270,x:-1,z:0}];function fM(n){const e=new b(0,0,-1).transformDirection(n.matrixWorldInverse);return Math.atan2(-e.y,e.x)+Math.PI/2}function pM(n){const e=document.createElement("div");e.className="map-compass",e.setAttribute("aria-label","地图方向：正北0度，东90度，南180度，西270度");const t=document.createElement("div");t.className="map-compass-dial",e.append(t);const i=bd.map(c=>{const l=document.createElement("span");return l.className=`compass-${c.label.toLowerCase()}`,l.textContent=c.label,l.title=`${c.label} ${c.degrees}°`,t.append(l),l}),r=document.createElement("small");r.textContent="N = 0°",e.append(r),n.append(e);const s=bd.map(c=>{const l=document.createElement("span");return l.className="map-cardinal",l.textContent=c.label,l.setAttribute("aria-label",`${c.label} ${c.degrees}°`),n.append(l),l}),o=new b;let a=NaN;return{update(c,l,u,h,d){c.updateMatrixWorld();const f=fM(c);(Math.abs(f-a)>1e-4||!Number.isFinite(a))&&(t.style.transform=`rotate(${f}rad)`,i.forEach(g=>{g.style.transform=`translate(-50%,-50%) rotate(${-f}rad)`}),a=f),bd.forEach((g,_)=>{const m=s[_];o.set(g.x*h,.2,g.z*d).project(c);const p=Number.isFinite(o.x)&&Number.isFinite(o.y)&&o.z>=-1&&o.z<=1&&Math.abs(o.x)<1.1&&Math.abs(o.y)<1.1;m.hidden=!p,p&&(m.style.left=`${Math.max(14,Math.min(l-14,(o.x+1)*l/2))}px`,m.style.top=`${Math.max(14,Math.min(u-14,(1-o.y)*u/2))}px`)})},dispose(){e.remove(),s.forEach(c=>c.remove())}}}const Md=21,mM=7,qf=14;function hm(n){const e=[],t=(r,s,o,a)=>{e.push(new b(r,s,0),new b(o,a,0))};for(const r of[Md,mM])t(-r,-r,r,-r),t(r,-r,r,r),t(r,r,-r,r),t(-r,r,-r,-r);for(const r of[-1,1])for(const s of[-1,1])t(r*Md,s*Md,r*qf,s*qf);const i=new u_(new Ft().setFromPoints(e),new yi({color:n,transparent:!0,opacity:.9,depthTest:!1}));return i.name="escort-marker",i.visible=!1,i}const Uc=25,Fc=80,Zo=1;function gM(n,e){if(Number.isNaN(n))return e??1;const t=Math.max(0,n/et);return e===1?t>=Fc+6?3:t>=Uc+2?2:1:e===2?t<=Uc-2?1:t>=Fc+6?3:2:e===3?t<=Uc-2?1:t<=Fc-6?2:3:t<Uc?1:t<Fc?2:3}const fa=(n,e)=>n<e?-1:n>e?1:0,_M=new Intl.Collator("en",{sensitivity:"variant"}),vM=n=>n.icon==="air-filled"||n.icon==="air-outline",fm=n=>n.status==="active"&&n.tgt===!0,pm=n=>n.status==="active"&&n.escort===!0&&n.faction!=="enemy",Yf=n=>fm(n)||pm(n)?1:0;function $f(n){const e={x:0,y:0,z:0};for(const d of n)e.x+=d.position.x/n.length,e.y+=d.position.y/n.length,e.z+=d.position.z/n.length;const t=d=>Math.hypot(d.position.x-e.x,d.position.y-e.y,d.position.z-e.z);let i=n[0],r=t(i),s,o=1/0;const a=new Map;let c=!1,l=!1;for(const d of n){const f=t(d),g=Yf(d)-Yf(i);(g>0||g===0&&(f<r||f===r&&fa(d.id,i.id)<0))&&(i=d,r=f),vM(d)&&(!s||f<o||f===o&&fa(d.id,s.id)<0)&&(s=d,o=f),a.set(d.label,(a.get(d.label)??0)+1),c||=fm(d),l||=pm(d)}const u=[...a.keys()].filter(d=>d!==i.label).sort((d,f)=>_M.compare(d,f)||fa(d,f)),h=[i.label,...u].map(d=>{const f=a.get(d);return f>1?`${d} ×${f}`:d}).join(`
`);return{representativeId:i.id,memberIds:n.map(d=>d.id),label:h,hasTgt:c,hasEscort:l,...s?{airRepresentativeId:s.id}:{}}}function xM(n,e){const t=[...n].sort((u,h)=>fa(u.id,h.id));if(e===1)return t.map(u=>$f([u]));const i=e===2?54:68,r=i*i,s=Zo*Zo,o=new Map,a=[],c=(u,h,d,f)=>`${u}:${h}:${d}:${f}`,l=(u,h)=>`${u}:${h}`;for(const u of t){if(u.status!=="active"||!u.onScreen||!Number.isFinite(u.screenX)||!Number.isFinite(u.screenY)||!Number.isFinite(u.position.x)||!Number.isFinite(u.position.y)||!Number.isFinite(u.position.z)){a.push({seed:u,members:[u]});continue}const h=Math.floor(u.position.x/Zo),d=Math.floor(u.position.y/Zo),f=Math.floor(u.position.z/Zo),g=Math.floor(u.screenX/i),_=Math.floor(u.screenY/i);let m;for(let p=-1;p<=1;p++)for(let T=-1;T<=1;T++)for(let x=-1;x<=1;x++){const v=o.get(c(u.faction,h+p,d+T,f+x));if(v)for(let C=-1;C<=1;C++)for(let P=-1;P<=1;P++){const D=v.get(l(g+C,_+P));if(D)for(const N of D){const M=u.position.x-N.seed.position.x,S=u.position.y-N.seed.position.y,I=u.position.z-N.seed.position.z;if(M*M+S*S+I*I>s)continue;const k=u.screenX-N.seed.screenX,V=u.screenY-N.seed.screenY;k*k+V*V<=r&&(!m||fa(N.seed.id,m.seed.id)<0)&&(m=N)}}}if(m)m.members.push(u);else{const p={seed:u,members:[u]};a.push(p);const T=c(u.faction,h,d,f);let x=o.get(T);x||(x=new Map,o.set(T,x));const v=l(g,_),C=x.get(v);C?C.push(p):x.set(v,[p])}}return a.map(u=>$f(u.members))}const kc=12,jf=.675,yM=.15,SM=5e3;function wd(n,e){const t=Number.isFinite(e)&&e>0?e:kc*jf/12,i=n===1?Math.min(24*t/kc,Math.max(10*t/kc,jf)):(n===2?15:17)*t/kc;return Math.min(SM,Math.max(yM,i))}function bM(n){const e=new Sn;e.name="far-air-display",e.visible=!1;const t=new Ee(new Ml(2.2,3.3,20),new yn({color:n,transparent:!0,opacity:.8,side:fn,depthTest:!1}));t.rotation.x=-Math.PI/2;const i=new rn(new Ft().setFromPoints([new b(0,.2,0),new b(0,1,0)]),new yi({color:n,transparent:!0,opacity:.8,depthTest:!1})),r=Array.from({length:65},(a,c)=>{const l=c/64*Math.PI*2;return new b(Math.cos(l)*7.2,Math.sin(l)*7.2,0)}),s=new rn(new Ft().setFromPoints(r),new yi({color:n,transparent:!0,opacity:.9,depthTest:!1})),o=hm(n);return t.add(s,o),e.add(t,i),{root:e,base:t,pole:i,tgt:s,escort:o}}function MM(n,e,t){const{tier:i,representative:r,status:s,scale:o}=t,a=s!=="wreck",c=n.base!==null;n.base&&(n.base.visible=r&&a&&i!==3,n.base.scale.setScalar((t.baseScale??o)/.675)),n.icon.visible=r&&a,n.icon.scale.setScalar(o),n.icon.position.y=t.iconHeight,n.pole.visible=r&&a&&i!==3,n.pole.userData.naturalTop=t.poleHeight,n.wreck.visible=r&&s!=="active",n.wreck.scale.setScalar(o/.675),e.root.visible=r&&s==="active"&&i===3&&t.hasAir,e.base.scale.setScalar((t.farBaseScale??o)/.675),e.base.position.y=1.5,e.tgt.scale.setScalar(.675),e.escort.scale.setScalar(.675),e.tgt.visible=t.hasTgt&&!c,e.escort.visible=t.hasEscort&&!c&&t.faction!=="enemy";const l=e.pole.geometry.getAttribute("position"),u=Math.max(t.airAltitude,.6);e.pole.userData.naturalTop=u,l.getY(1)!==u&&(l.setY(1,u),l.needsUpdate=!0,e.pole.geometry.computeBoundingSphere()),n.label.position.y=i===3?t.hasAir?u:1.5:t.poleHeight;const h=n.label.userData.dom;h.textContent!==t.label&&(h.textContent=t.label),h.style.whiteSpace="pre",h.style.fontSize=i===1?"14px":i===2?"13px":"12px",h.style.lineHeight="1.15";const d=r&&n.labelFade>0&&(i!==3||t.faction==="squadron");h.hidden=!d,n.label.userData.displayVisible=d}const wM=[[-5,-5],[0,7],[5,-5]],EM=[[-4,-4],[-4,2],[0,6],[4,2],[4,-4]],TM=[[-4,-4],[-4,4],[4,4],[4,-4]],AM=[[0,5.8],[-3.25,-3.1],[3.25,-3.1]];function Zf(n){const e=new Zp;e.moveTo(n[0][0],n[0][1]);for(const[t,i]of n.slice(1))e.lineTo(t,i);return e.closePath(),new th(e)}function Ed(n,e){return new yn({color:n,transparent:!0,opacity:e,side:fn,depthTest:!1,depthWrite:!1})}function RM(n,e){const t=new Sn,i=n==="ground"?TM:n==="ship"?EM:wM,r=new rn(new Ft().setFromPoints(i.map(([o,a])=>new b(o,a,0))),new yi({color:e,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1}));if(r.name="outline",t.add(r),n==="air-filled"){const o=new Ee(Zf(AM),Ed(e,.9));o.name="filledinner",t.add(o)}else if(n==="air-outline"){const o=new Ee(new Ma(.65,32),Ed(e,.9));o.name="dot",o.position.y=-.3,t.add(o)}const s=new Ee(Zf(i),Ed(e,0));return s.name="pickmesh",t.add(s),t}function Os(n){return!n.intangible&&(n.icon==="ground"||n.icon==="ship")}function Xa(n,e,t){return new b(e.x,Os(n)?t(e.x,e.z):e.y,e.z)}function El(n,e,t,i){const r=Xa(n,e,t);return n.intangible||(r.y=Os(n)?r.y+i:Math.max(r.y,t(r.x,r.z)+i)),r}const $c=8,ol=1e-9,ro=new b,ki=new b,An=new b,Ko=new b,di=new b,fs=new b,Td=new b,Ki=new kt,Er=new qt,Ad=new qt,go=Array.from({length:8},()=>new kt),CM=Array.from({length:16},()=>new kt),PM=Array.from({length:16},()=>new kt),DM=[0,1,2],Kf=[0,1],LM=[0],Oc=new kt,zc=new kt;function Aa(n,e){switch(e){case 0:return n.w+n.x;case 1:return n.w-n.x;case 2:return n.w+n.y;case 3:return n.w-n.y;case 4:return n.w+n.z;default:return n.w-n.z}}function al(n,e,t){if(!Number.isFinite(e.w)||e.w<=0)return;const i=(e.x/e.w+1)*t.width/2,r=(1-e.y/e.w)*t.height/2;!Number.isFinite(i)||!Number.isFinite(r)||(n.left=Math.min(n.left,i),n.right=Math.max(n.right,i),n.top=Math.min(n.top,r),n.bottom=Math.max(n.bottom,r))}function Jf(n,e,t){let i=CM,r=PM,s=n.length;n.forEach((o,a)=>i[a].copy(go[o]));for(let o=0;o<6&&s;o++){let a=0;for(let c=0;c<s;c++){const l=i[(c+s-1)%s],u=i[c],h=Aa(l,o),d=Aa(u,o);h>=0!=d>=0&&r[a++].copy(l).lerp(u,h/(h-d)),d>=0&&r[a++].copy(u)}s=a,[i,r]=[r,i]}for(let o=0;o<s;o++)al(e,i[o],t)}function Qf(n,e,t){Oc.set(n.x,n.y,n.z,1).applyMatrix4(Er),zc.set(e.x,e.y,e.z,1).applyMatrix4(Er);let i=0,r=1;for(let o=0;o<6;o++){const a=Aa(Oc,o),c=Aa(zc,o);if(!Number.isFinite(a)||!Number.isFinite(c)||a<0&&c<0)return null;if(a>=0!=c>=0){const l=a/(a-c);a<0?i=Math.max(i,l):r=Math.min(r,l)}}if(i>r)return null;const s={left:1/0,right:-1/0,top:1/0,bottom:-1/0};return Ki.copy(Oc).lerp(zc,i),al(s,Ki,t),Ki.copy(Oc).lerp(zc,r),al(s,Ki,t),Number.isFinite(s.right)?s:null}function cl(n){return Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z)}function lo(n,e){const{camera:t,width:i,height:r}=e;Td.copy(n).applyMatrix4(t.matrixWorldInverse);const s=-Td.z;if(!cl(Td)||s<t.near||s>t.far||(fs.copy(n).project(t),!cl(fs)||fs.z<-1-ol||fs.z>1+ol))return null;const o=(fs.x+1)*i/2,a=(1-fs.y)*r/2;return Number.isFinite(o)&&Number.isFinite(a)?{x:o,y:a,z:fs.z}:null}function mm(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function rh(n){if(!n)return!1;const e=t=>t.visible&&t.opacity>0;return Array.isArray(n)?n.some(e):e(n)}function IM(n,e,t){const i=n.geometry,r=i.getAttribute("position"),s=i.index;if(!r)return;const o=s?.count??r.count,a=n.isMesh,c=n.isPoints,l=a?DM:c?LM:Kf,u=a?3:c||!n.isLineSegments?1:2,h=Array.isArray(n.material)?i.groups:[{start:0,count:o,materialIndex:0}];for(const d of h){const f=Array.isArray(n.material)?n.material[d.materialIndex??0]:n.material;if(!rh(f))continue;const g=Math.max(d.start,i.drawRange.start),_=Math.min(o,d.start+d.count,i.drawRange.start+i.drawRange.count);for(let m=g;m+l.length<=_;m+=u){let p=!0;for(let T=0;T<l.length;T++){di.fromBufferAttribute(r,s?s.getX(m+T):m+T).applyMatrix4(n.matrixWorld);const x=go[T].set(di.x,di.y,di.z,1).applyMatrix4(Er);if(!Number.isFinite(x.x)||!Number.isFinite(x.y)||!Number.isFinite(x.z)||!Number.isFinite(x.w)){p=!1;break}}p&&Jf(l,e,t)}}if(n.isLineLoop&&o>1&&!Array.isArray(n.material)&&i.drawRange.start===0&&i.drawRange.count>=o){let d=!0;for(const[f,g]of[[0,o-1],[1,0]]){di.fromBufferAttribute(r,s?s.getX(g):g).applyMatrix4(n.matrixWorld);const _=go[f].set(di.x,di.y,di.z,1).applyMatrix4(Er);(!Number.isFinite(_.x)||!Number.isFinite(_.y)||!Number.isFinite(_.z)||!Number.isFinite(_.w))&&(d=!1)}d&&Jf(Kf,e,t)}}function NM(n){if(!mm(n.icon))return null;const e={left:1/0,right:-1/0,top:1/0,bottom:-1/0};return n.icon.traverseVisible(t=>{const i=t;if(!i.geometry||!rh(i.material))return;const r=i.geometry;r.boundingBox||r.computeBoundingBox();const s=r.boundingBox;if(!s||s.isEmpty())return;for(let a=0;a<8;a++){if(di.set(a&1?s.max.x:s.min.x,a&2?s.max.y:s.min.y,a&4?s.max.z:s.min.z).applyMatrix4(t.matrixWorld),!cl(di))return;const c=go[a].set(di.x,di.y,di.z,1).applyMatrix4(Er);if(!Number.isFinite(c.x)||!Number.isFinite(c.y)||!Number.isFinite(c.z)||!Number.isFinite(c.w))return}let o=!0;for(let a=0;a<6;a++){let c=0;for(const l of go)Aa(l,a)>=0&&c++;if(!c)return;c<8&&(o=!1)}if(o)for(const a of go)al(e,a,n);else IM(i,e,n)}),Number.isFinite(e.right)?e:null}function UM(n){const e=typeof getComputedStyle=="function"?getComputedStyle(n):n.style,t=u=>{const h=Number.parseFloat(u??"");return Number.isFinite(h)?h:0},i=t(e.fontSize)||t(n.style.fontSize),r=i>0?i:14,s=e.lineHeight||n.style.lineHeight,o=t(s),a=o>0?/^[\d.]+$/.test(s)?o*r:o:r*1.15,c=Number.isFinite(a)&&a>0?a:14*1.15;let l=Number(n.offsetHeight);if(!Number.isFinite(l)||l<=0){const u=typeof n.getBoundingClientRect=="function"?n.getBoundingClientRect():null;l=u?Number(u.height??u.bottom-u.top):0}return(!Number.isFinite(l)||l<=0)&&(l=Math.max(1,(n.textContent??"").split(`
`).length)*c+t(e.paddingTop)+t(e.paddingBottom)),{height:Number.isFinite(l)&&l>0?l:c,lineHeight:c}}function Rd(n,e){const t=n.geometry.getAttribute("position");if(!t||t.count<2||!cl(e))return!1;const i=t.array instanceof Float32Array?Math.fround:a=>a,r=i(e.x),s=i(e.y),o=i(e.z);return!Number.isFinite(r)||!Number.isFinite(s)||!Number.isFinite(o)?!1:(t.getX(1)===r&&t.getY(1)===s&&t.getZ(1)===o||(t.setXYZ(1,r,s,o),t.needsUpdate=!0,n.geometry.boundingBox&&n.geometry.computeBoundingBox(),n.geometry.computeBoundingSphere()),!0)}function FM(n,e,t){Ki.set(ki.x,ki.y,ki.z,1).applyMatrix4(Er);const i=Ki.w,r=Er.elements,s=1-t*2/n.height,o=r[5]-s*r[7];if(!Number.isFinite(o)||Math.abs(o)<ol)return!1;const a=(s*Ki.w-Ki.y)/o,c=e.y-t,l=2*i/(n.camera.projectionMatrix.elements[5]*n.height),u=Math.max(ki.distanceTo(ro),l*Math.max(1,c))*4;if(!Number.isFinite(a)||a<=0||a>u||(An.copy(ki),An.y+=a,Ki.set(An.x,An.y,An.z,1).applyMatrix4(Er),Ki.w<i/2||Ki.w>i*2))return!1;const h=lo(An,n),d=Math.max($c,Math.min(n.width/4,c));return!!h&&Math.abs(h.y-t)<.01&&Math.abs(h.x-e.x)<=d}function kM(n,e,t){An.set(e.x*2/n.width-1,1-t*2/n.height,e.z).unproject(n.camera);const i=lo(An,n);return!!i&&Math.abs(i.y-t)<.01}function OM(n){const{camera:e,width:t,height:i,group:r,icon:s,pole:o,dom:a,isAir:c,isMerged:l,visible:u}=n,h=Number.isFinite(n.naturalTop)?n.naturalTop:.6,d=o.geometry.getAttribute("position");d&&d.count>0?ro.fromBufferAttribute(d,0).applyMatrix4(o.matrixWorld):ro.set(0,.2,0).applyMatrix4(r.matrixWorld),ki.set(0,h,0).applyMatrix4(r.matrixWorld),An.copy(ki),a.style.transform="translate(0, 0)";const f=Number.isFinite(t)&&t>0&&Number.isFinite(i)&&i>0;Er.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse);const g=f?lo(ro,n):null,_=f?lo(ki,n):null,m=UM(a),p=mm(o)&&rh(o.material)&&!!d&&d.count>=2,T=f?NM(n):null,x=f&&p?Qf(ro,ki,n):null,v=u&&!a.hidden&&!!(T||x);if(v&&l&&p&&d&&d.count>=2&&g&&_&&Math.abs(g.y-_.y)<m.height){const de=g.y-m.height-.1;!FM(n,_,de)&&!kM(n,_,de)&&An.copy(ki)}const C=o.matrixWorld.determinant();Number.isFinite(C)&&Math.abs(C)>ol?(Ad.copy(o.matrixWorld).invert(),Ko.copy(An).applyMatrix4(Ad),Rd(o,Ko)||(An.copy(ki),Ko.copy(ki).applyMatrix4(Ad),Rd(o,Ko))):Rd(o,Ko.set(0,h,0));const P=o.userData.labelDisplayTop;if(P?(P.x=An.x,P.y=An.y,P.z=An.z):o.userData.labelDisplayTop={x:An.x,y:An.y,z:An.z},!f)return a.style.left="0px",a.style.top="0px",!1;const D=lo(An,n)??_;di.setFromMatrixPosition(s.matrixWorld);const N=lo(di,n),M=N?.x??D?.x??g?.x??t/2,S=p?Qf(ro,An,n):null;let I=T?.right??S?.right??M;S&&(I=Math.max(I,S.right)),Number.isFinite(I)||(I=M);let k=D?.y??N?.y??g?.y??i/2;l&&p&&g&&D?k=Math.min(g.y,D.y):c&&!l&&(k=(N?.y??k)-m.lineHeight/2);const V=T??S;v&&V&&(!Number.isFinite(k)||k<0||k>i-m.height)&&(k=V.top);const G=Number(a.offsetWidth),K=Number.isFinite(G)&&G>0?G:0,Y=v?Math.max(0,Math.min(t-K-$c,I+$c)):I+$c;return v&&(k=Math.max(0,Math.min(i-m.height,k))),a.style.left=`${Y}px`,a.style.top=`${k}px`,v}function sh(n="mouse",e=!1){return n==="touch"||n==="pen"||e?32:14}function zM(n,e,t,i,r){if(![n.x,n.y,n.z,e.left,e.top,e.width,e.height,t,i,r].every(Number.isFinite)||e.width<=0||e.height<=0||r<0||n.z<-1||n.z>1)return null;const s=e.left+(n.x+1)*e.width/2,o=e.top+(1-n.y)*e.height/2;return s<e.left-r||s>e.left+e.width+r||o<e.top-r||o>e.top+e.height+r?null:Math.hypot(s-t,o-i)}function BM(n,e,t,i=0){return[n.left,n.right,n.top,n.bottom,e,t,i].every(Number.isFinite)&&n.right>n.left&&n.bottom>n.top&&i>=0&&e>=n.left-i&&e<=n.right+i&&t>=n.top-i&&t<=n.bottom+i}const ep=new Set(["markers","drawing","links","range","layers"]),tp=new Set(["units","equipment","groups","routes","links"]),Cd=[{id:"units",label:"单位",title:"单位与空间编辑"},{id:"equipment",label:"装备",title:"机体与武器挂载"},{id:"groups",label:"编组",title:"编组与批量调度"},{id:"routes",label:"航路",title:"航路、绑定与航迹"},{id:"markers",label:"标记",title:"自定义地图点位"},{id:"drawing",label:"作图",title:"标尺、圆规与范围规划"},{id:"links",label:"连线",title:"单位与标记连线"},{id:"terrain",label:"地形",title:"画布、地形与城区"},{id:"range",label:"距离",title:"距离判定与三维范围"},{id:"turns",label:"回合",title:"回合草稿与战斗结果"},{id:"layers",label:"图层",title:"地图显示与航迹图层"},{id:"project",label:"存档",title:"工程保存、导入与恢复"}];function HM(n){const e=document.querySelector("#app"),t=document.querySelector("#edit-panel");if(!e||!t)throw new Error("Editor sidebar requires the existing workspace shell");if(t.dataset.sidebarMounted)throw new Error("Editor sidebar is already mounted");const i=(ne,Ie="")=>{const Oe=document.createElement(ne);return Oe.textContent=Ie,Oe},r=(ne,Ie,Oe)=>{const ht=i("button",ne);return ht.type="button",Oe&&(ht.id=Oe),ht.addEventListener("click",Ie),ht},s=ne=>{const Ie=document.querySelector(ne);if(!Ie)throw new Error(`Missing sidebar source control: ${ne}`);return Ie},o=s("#unit-editor"),a=s("#terrain-editor"),c=s("#route-section"),l=s("#archive-panel"),u=s("#workflow-panel"),h=s("#tab-units").parentElement,d=s(".selection-panel"),f=s(".event-panel"),g=s(".range-panel"),_=s(".trail-panel"),m=document.createComment("archive-manager-portal");l.before(m);const p=i("div"),x=s("#edit-add").closest(".edit-actions").previousElementSibling;for(;o.firstChild&&o.firstChild!==x;)p.append(o.firstChild);c.remove(),o.querySelectorAll(":scope > .rule").forEach(ne=>ne.remove());const v=Array.from(o.children),C=s("#edit-label").closest("label"),P=s("#tool-move").closest(".edit-actions"),D=v.indexOf(C),N=v.indexOf(P),M=(ne,Ie,Oe)=>{const ht=i("details");return ht.className="sidebar-submenu",ht.open=Oe,ht.append(i("summary",ne)),ht.append(...Ie),ht};o.replaceChildren(M("单位与选择",v.slice(0,D),!0),M("属性与战损",v.slice(D,N),!1),M("位置、姿态与吸附",v.slice(N),!0)),a.querySelector(":scope > .eyebrow")?.remove();const S=Array.from(a.children),I=S.indexOf(s("#terrain-brush").closest("label")),k=S.indexOf(s("#terrain-preset").closest("label")),V=s("#terrain-undo").closest(".edit-actions"),G=S.indexOf(V);a.replaceChildren(M("画布尺寸与采样",S.slice(0,I),!1),M("笔刷、城区与等高线",S.slice(I,k),!0),M("地形生成与重置",S.slice(k,G),!1),...S.slice(G)),t.replaceChildren(),t.classList.add("editor-sidebar"),t.dataset.sidebarMounted="true",t.hidden=!1,e.classList.add("editor-sidebar-mounted"),t.setAttribute("aria-label","场景编辑器");const K=i("header");K.className="sidebar-header";const Y=i("div");Y.className="sidebar-title-row";const de=i("strong","场景编辑器"),X=i("span","浏览");X.id="editor-sidebar-state",X.className="sidebar-state",X.setAttribute("role","status"),Y.append(de,X);const oe=i("div");oe.className="sidebar-toolbar";const xe=r("进入编辑",()=>{be.editable&&n.toggleEdit()},"sidebar-toggle-edit"),Xe=r("全图",()=>n.fitMap(),"sidebar-fit-map");Xe.title="适配整个地图及当前单位";const it=r("俯视",()=>n.topView(),"sidebar-top-view");it.title="切换地图俯视视角";let gt=!1;const xt=r("收起",()=>ge(!gt),"sidebar-collapse");oe.append(xe,Xe,it,xt);const J=i("div");J.className="sidebar-quick-actions";const Ae=r("保存修订",()=>{if(be.playerView)return;const ne=Se();ne&&!ne.disabled&&ne.click()},"sidebar-quick-save"),re=r("提交回合",()=>{if(be.playerView)return;ie("turns");const ne=document.querySelector("#workflow-commit");ne&&!ne.disabled&&ne.click()},"sidebar-quick-commit"),Ye=r("另存为…",()=>{be.playerView||(ie("turns"),document.querySelector("#editor-save-as-name")?.focus())},"sidebar-quick-save-as"),te=r("生成快照",()=>{if(be.playerView)return;const ne=document.querySelector("#workflow-snapshot");ne&&!ne.disabled&&!ne.hidden&&ne.click()},"sidebar-quick-snapshot");J.append(Ae,Ye,re,te);const fe=i("div");fe.className="sidebar-viewer-toolbar";const Q=r("导出查看器",()=>{be.playerView&&n.viewerExport?.()},"sidebar-viewer-export"),ee=r("撤销",()=>{be.playerView&&be.editable&&be.viewerCanUndo&&n.viewerUndo?.()},"sidebar-viewer-undo"),R=r("重做",()=>{be.playerView&&be.editable&&be.viewerCanRedo&&n.viewerRedo?.()},"sidebar-viewer-redo");fe.append(Q,ee,R),K.append(Y,oe,J,fe);const me=i("nav");me.className="sidebar-nav",me.setAttribute("role","tablist"),me.setAttribute("aria-label","编辑工具菜单"),me.setAttribute("aria-orientation","vertical");const ue=i("div");ue.className="sidebar-content",ue.id="editor-sidebar-content";const Ve=new Map,pe=new Map,Ne=new Map,ae=new Map;let Re="units",be={editing:!1,editable:!0,mapOnly:!1},Ce,w=!1,y=0;const O=ne=>be.playerView?ep.has(ne):!(be.mapOnly&&tp.has(ne));for(const ne of Cd){const Ie=r(ne.label,()=>ie(ne.id),`sidebar-tab-${ne.id}`);Ie.title=ne.title,Ie.setAttribute("role","tab"),Ie.setAttribute("aria-controls",`sidebar-panel-${ne.id}`),Ie.dataset.sidebarTab=ne.id,Ne.set(ne.id,Ie),me.append(Ie);const Oe=i("section");Oe.id=`sidebar-panel-${ne.id}`,Oe.className="sidebar-tab-panel",Oe.setAttribute("role","tabpanel"),Oe.setAttribute("aria-labelledby",Ie.id);const ht=i("h2",ne.title);ht.className="sidebar-panel-heading";const Mt=i("div");Mt.className="sidebar-panel-body",Mt.dataset.sidebarPanel=ne.id,Oe.append(ht,Mt),Ve.set(ne.id,Oe),pe.set(ne.id,Mt),ue.append(Oe)}o.hidden=!1,a.hidden=!1,pe.get("units").append(d,o),pe.get("terrain").append(a),pe.get("turns").append(u,p,f),c.open=!0;const j=c.querySelector(":scope > summary"),se=Array.from(c.children).filter(ne=>ne!==j),W=se.indexOf(c.querySelector("#route-list")),Ue=se.indexOf(c.querySelector("#track-edit").closest(".edit-actions"));c.replaceChildren(j,M("航路设置与选中单位绑定",se.slice(0,W),!0),M("航路点与顺序",se.slice(W,Ue),!0),M("航迹曲线与控制点",se.slice(Ue),!1)),pe.get("routes").append(c);const _e=i("section");_e.className="sidebar-card",_e.append(i("h3","当前航路的绑定对象"));const Fe=i("div");Fe.id="route-bindings",Fe.className="sidebar-bound-list",Fe.setAttribute("aria-live","polite"),Fe.textContent="当前航路暂无绑定对象";const Ze=i("div");Ze.className="edit-actions";const ye=i("button","选中全部绑定单位");ye.type="button",ye.id="route-select-bound",Ze.append(ye);const Pe=i("label");Pe.className="edit-row",Pe.append(i("span","编组"));const tt=i("select");tt.id="route-group-select",tt.setAttribute("aria-label","绑定至当前航路的编组"),tt.add(new Option("选择编组","")),Pe.append(tt);const Ke=i("button","将编组绑定当前航路");Ke.type="button",Ke.id="route-bind-group";const we=i("div");we.className="edit-actions",we.append(Ke),_e.append(Fe,Ze,Pe,we),pe.get("routes").append(_e),pe.get("range").append(g),pe.get("layers").append(_);const mt=i("section");mt.className="sidebar-card",mt.append(i("h3","航路显示"));const U=(ne,Ie)=>{const Oe=i("label");Oe.className="check-row";const ht=i("input");return ht.id=ne,ht.type="checkbox",ht.checked=!0,Oe.append(ht,document.createTextNode(Ie)),Oe};mt.append(U("route-visible","显示所有航路与航路点"),U("route-labels","显示航路点名称与绑定对象")),pe.get("layers").append(mt),pe.get("project").append(l),h.hidden=!0,h.classList.add("sidebar-legacy-tabs"),t.append(K,me,ue,h);function Se(){return["#task-editor-save","#map-editor-save","#workflow-save-draft"].map(ne=>document.querySelector(ne)).find(ne=>ne&&!ne.hidden)}function Te(){if(be.playerView){J.hidden=!0;for(const Mt of[Ae,Ye,re,te])Mt.hidden=!0,Mt.disabled=!0;return}const ne=Se(),Ie=document.querySelector("#workflow-commit");Ae.hidden=!ne,Ae.disabled=!ne||ne.disabled,Ae.textContent=ne?.id==="workflow-save-draft"?"保存草稿":ne?.id==="map-editor-save"?"保存地图修订":"保存任务修订",re.hidden=!Ie||Ie.hidden||Ie.disabled,re.disabled=!Ie||Ie.disabled;const Oe=["#map-editor-save-as","#task-editor-save-as"].map(Mt=>document.querySelector(Mt)).find(Mt=>Mt&&!Mt.hidden);Ye.hidden=!Oe,Ye.disabled=!Oe||Oe.disabled;const ht=document.querySelector("#workflow-snapshot");te.hidden=!ht||ht.hidden,te.disabled=!ht||ht.disabled,J.hidden=Ae.hidden&&Ye.hidden&&re.hidden&&te.hidden}function $e(){for(const Ie of Cd){const Oe=O(Ie.id),ht=Oe&&Ie.id===Re,Mt=Ne.get(Ie.id);Mt.hidden=!!be.playerView&&!Oe,Mt.disabled=!Oe,Mt.setAttribute("aria-selected",String(ht)),Mt.tabIndex=ht?0:-1,Ve.get(Ie.id).hidden=!ht}const ne=be.playerView?"玩家查看器":"场景编辑器";de.textContent=ne,t.setAttribute("aria-label",ne),me.setAttribute("aria-label",be.playerView?"标注工具菜单":"编辑工具菜单"),t.dataset.activeTab=Re,t.dataset.playerView=String(!!be.playerView),t.dataset.editing=String(be.editing),t.dataset.editable=String(be.editable),t.dataset.active=String(be.active!==!1),X.textContent=be.playerView?be.editing?"标注中":"浏览":be.editable?be.editing?"编辑中":"浏览":"只读历史",xe.textContent=be.playerView?be.editing?"结束标注":"编辑标注":be.editing?"退出编辑":"进入编辑",xe.disabled=!be.editable,mt.hidden=!!be.playerView,Q.hidden=!be.playerView,Q.disabled=!be.playerView||!n.viewerExport,ee.hidden=!be.playerView||!n.viewerUndo,R.hidden=!be.playerView||!n.viewerRedo,ee.disabled=!be.playerView||!be.editable||!be.viewerCanUndo||!n.viewerUndo,R.disabled=!be.playerView||!be.editable||!be.viewerCanRedo||!n.viewerRedo,fe.hidden=!be.playerView,Te()}function ge(ne){gt=ne,t.dataset.collapsed=String(ne),xt.textContent=ne?"展开":"收起",xt.setAttribute("aria-expanded",String(!ne))}function ie(ne){const Oe={unit:"units",route:"routes",group:"groups",marker:"markers",draw:"drawing",turn:"turns",archive:"project"}[ne]??ne;!Ve.has(Oe)||!O(Oe)||(ae.set(Re,ue.scrollTop),Re=Oe,ge(!1),$e(),ue.scrollTop=ae.get(Oe)??0,n.chooseTool(Oe))}me.addEventListener("keydown",ne=>{if(!["ArrowUp","ArrowDown","Home","End"].includes(ne.key))return;const Ie=Cd.filter(Mt=>O(Mt.id)&&!Ne.get(Mt.id).hidden&&!Ne.get(Mt.id).disabled),Oe=Ie.findIndex(Mt=>Ne.get(Mt.id)===document.activeElement);if(Oe<0)return;ne.preventDefault();const ht=ne.key==="Home"?Ie[0]:ne.key==="End"?Ie.at(-1):Ie[(Oe+(ne.key==="ArrowDown"?1:-1)+Ie.length)%Ie.length];ie(ht.id),Ne.get(ht.id).focus()});const qe=()=>{!be.playerView&&e.dataset.workspace==="manager"?l.parentNode!==e&&(m.parentNode===e?e.insertBefore(l,m.nextSibling):e.append(l),l.open=!1):(l.parentNode!==pe.get("project")&&pe.get("project").append(l),l.open=!0)};return new MutationObserver(qe).observe(e,{attributes:!0,attributeFilter:["data-workspace"]}),new MutationObserver(Te).observe(u,{subtree:!0,attributes:!0,attributeFilter:["hidden","disabled"]}),ge(!1),$e(),qe(),{panels:{groups:pe.get("groups"),markers:pe.get("markers"),drawing:pe.get("drawing"),equipment:pe.get("equipment"),links:pe.get("links")},select:ie,sync(ne){const Ie=!!ne.playerView&&!be.playerView,Oe=!ne.playerView&&!!be.playerView,ht=me.contains(document.activeElement),Mt=Oe?Ce:void 0;Ie&&(Ce=Re,w=gt,y=ue.scrollTop,ae.set(Re,ue.scrollTop)),be={...ne},t.hidden=!1,Oe&&(ae.set(Re,ue.scrollTop),Re=Ce??"units",Ce=void 0,ge(w)),be.playerView&&!ep.has(Re)?(Re="markers",ge(!1)):!be.playerView&&be.mapOnly&&tp.has(Re)&&(Re="terrain"),$e(),qe(),(Ie||Oe)&&(ue.scrollTop=Oe&&Re===Mt?y:ae.get(Re)??0,ae.set(Re,ue.scrollTop)),ht&&!O(document.activeElement.dataset.sidebarTab)&&Ne.get(Re).focus()}}}function VM(n,e){let t="";const i=(C,P="")=>{const D=document.createElement(C);return D.textContent=P,D};n.append(i("h3","编组 / 批量操作"));const r=i("div");r.id="group-list",r.className="unit-picker",n.append(r);const s=i("label","编组名称");s.className="edit-row";const o=i("input");o.id="group-name",o.maxLength=128,s.append(o),n.append(s);const a=i("label","编组颜色");a.className="edit-row";const c=i("input");c.type="color",c.id="group-color",c.value="#62ffa8",a.append(c),n.append(a);const l=i("div");l.className="edit-actions",n.append(l);const u=[],h=(C,P,D,N=l)=>{const M=i("button",P);return M.type="button",M.id=C,M.addEventListener("click",D),N.append(M),u.push(M),M},d=i("div");d.id="group-state",d.className="edit-hint",d.setAttribute("role","status");const f=()=>e.read().groups.find(C=>C.id===t),g=()=>e.units().filter(C=>C.groupId===t).map(C=>C.id),_=(C,P)=>{e.change(C,P)&&v()};h("group-create","新建并分配所选",()=>{if(!e.editable())return;const C=o.value.trim()||`编组 ${e.read().groups.length+1}`,P=c.value,D=new Set(e.selectedIds()),N=`group-${crypto.randomUUID()}`;_("新建编组",(M,S)=>{M.groups.push({id:N,name:C,color:P}),S.filter(I=>D.has(I.id)).forEach(I=>{I.groupId=N}),t=N})}),h("group-save","保存名称 / 颜色",()=>{if(!f()||!o.value.trim())return;const C=o.value.trim(),P=c.value;_("修改编组",D=>{const N=D.groups.find(M=>M.id===t);N.name=C,N.color=P})});const m=i("div");m.className="edit-actions",n.append(m),h("group-assign","所选加入编组",()=>{if(!f())return;const C=new Set(e.selectedIds());_("分配编组",(P,D)=>D.filter(N=>C.has(N.id)).forEach(N=>{N.groupId=t}))},m),h("group-unassign","所选退出编组",()=>{const C=new Set(e.selectedIds());_("移除编组归属",(P,D)=>D.filter(N=>C.has(N.id)).forEach(N=>{delete N.groupId}))},m);const p=i("div");p.className="edit-actions",n.append(p),h("group-select","选中整组",()=>{f()&&e.select(g())},p),h("group-focus","定位整组",()=>{f()&&e.focus(g())},p),h("group-copy","复制整组",()=>{const C=f();C&&e.copy(C)},p);const T=i("div");T.className="edit-actions",n.append(T),h("group-delete","删除编组 / 保留单位",()=>{f()&&_("删除编组",(C,P)=>{C.groups=C.groups.filter(D=>D.id!==t),P.filter(D=>D.groupId===t).forEach(D=>{delete D.groupId}),t=""})},T);const x=i("div");x.id="group-members",x.className="unit-picker",n.append(x,d);function v(){const C=e.read(),P=e.units(),D=e.selectedIds(),N=e.editable();C.groups.some(S=>S.id===t)||(t=C.groups[0]?.id??""),r.replaceChildren(...C.groups.map(S=>{const I=P.filter(V=>V.groupId===S.id).length,k=i("button",`${S.name} (${I})`);return k.style.borderColor=S.color,k.setAttribute("aria-pressed",String(S.id===t)),k.addEventListener("click",()=>{t=S.id,o.value=S.name,c.value=S.color,v()}),k.addEventListener("dblclick",()=>e.select(P.filter(V=>V.groupId===S.id).map(V=>V.id))),k}));const M=f();document.activeElement!==o&&(o.value=M?.name??""),document.activeElement!==c&&(c.value=M?.color??"#62ffa8"),o.disabled=c.disabled=!N;for(const S of u)S.disabled=!N;for(const S of["group-select","group-focus"])n.querySelector(`#${S}`).disabled=!M||!g().length;for(const S of["group-save","group-assign","group-copy","group-delete"])n.querySelector(`#${S}`).disabled=!N||!M;n.querySelector("#group-assign").disabled||=!D.length,n.querySelector("#group-copy").disabled||=!g().length,n.querySelector("#group-unassign").disabled=!N||!P.some(S=>D.includes(S.id)&&S.groupId),x.replaceChildren(...P.filter(S=>S.groupId===t).map(S=>{const I=i("button",S.label);return I.setAttribute("aria-pressed",String(D.includes(S.id))),I.addEventListener("click",()=>e.select([S.id])),I})),d.textContent=`${M?`${M.name} · ${g().length} 个单位`:"暂无编组"} / 当前选择 ${D.length} 个${N?"":" / 只读"}`}return v(),{sync:v}}const Jo=new WeakMap,pn=n=>JSON.stringify([n.id,n.revision]),Pd=n=>({id:n.id,revision:n.revision}),GM=n=>({L:"轻型",M:"中型",H:"重型"})[n];function np(n,e,t){const i=n.sessions.find(s=>s.id===e),r=i?.sealedScenes?.find(s=>s.turn===t);return JSON.stringify([n.id,n.players,n.aircraft,n.sp,i?.status,i?.workflow,r?.resourceSnapshot??i?.resourceSnapshot,r?.rulesSnapshot??i?.rulesSnapshot,(r?.units??i?.units??[]).map(s=>({id:s.id,player:s.player,aircraftRef:s.aircraftRef,loadout:s.loadout,spRefs:s.spRefs,playerActions:s.playerActions}))])}function ip(n,e){const t=new Map;for(const i of[...n,...e])t.has(pn(i))||t.set(pn(i),i);return[...t.values()].sort((i,r)=>i.id===r.id?r.revision-i.revision:i.id.localeCompare(r.id))}function WM(n,e){const t={};Jo.set(n,t);const i=(Q,ee="",R="")=>{const me=document.createElement(Q);return me.textContent=ee,me.id=R,me},r=i("section");r.className="player-roster";const s=i("div");s.className="player-roster-header";const o=i("button","新建玩家","player-roster-new");o.type="button",n.getAttribute("data-collapsed")===null&&typeof matchMedia=="function"&&matchMedia("(max-width: 600px) and (pointer: coarse)").matches&&n.setAttribute("data-collapsed","true");const a=n.getAttribute("data-collapsed")==="true",c=i("button",a?"展开":"收起","player-roster-collapse");c.type="button",c.setAttribute("aria-expanded",String(!a)),s.append(i("h3","玩家"),o,c);const l=i("div","","player-roster-form-area");l.hidden=!0;const u=i("div","","player-roster-pending");u.hidden=!0;const h=i("div","","player-roster-list");h.className="player-roster-list";const d=i("p","","player-roster-feedback");d.setAttribute("role","status"),d.hidden=!0,r.append(s,l,u,h,d),n.replaceChildren(r);let f,g,_,m="",p=-1,T="",x=[],v=[],C=[],P=yh,D="",N="",M="",S=0,I=0,k=0,V,G,K,Y;const de=[],X=[],oe=new Map,xe=[],Xe=Q=>{const ee=Q instanceof Error?Q.message:String(Q);d.textContent=ee,d.hidden=!1,e.report(ee)},it=()=>{if(Jo.get(n)!==t||!n.isConnected||!r.isConnected||!f)throw new Error("玩家栏已变化，请使用当前面板。");if(e.readRevision&&f.revision!==void 0){if(e.readRevision()!==f.revision)throw new Error("工程已变化，请等待玩家栏同步。")}else if(e.read&&np(e.read(),f.sessionId,f.turn)!==T)throw new Error("工程已变化，请等待玩家栏同步。");if(f.mapOnly)throw new Error("地图模式下玩家栏为只读。");return f},gt=Q=>{try{it(),Q()}catch(ee){Xe(ee)}},xt=()=>{const Q=it();if(!Q.editable)throw new Error("历史回合或当前场景为只读。");if(Q.pending||e.busy?.())throw new Error("请先完成或取消当前放置。");return Q},J=(Q,ee,R,me,ue)=>{const Ve=i("label",R);Ve.htmlFor=ee;const pe=i("select","",ee);for(const[Ne,ae]of me){const Re=i("option",ae);Re.value=Ne,pe.append(Re)}return pe.value=ue,Ve.append(pe),Q.append(Ve),de.push(pe),pe},Ae=(Q,ee,R)=>{const me=Q.spSlots?.[R];return!!me&&!!ee.weapon&&ee.weapon.kind!=="normal"&&(!P.config.enforceWeight||!!ee.weapon.weight&&cg(me,ee.weapon.weight))&&(ee.weapon.kind==="universal"||!!Q.allowedWeapons?.includes(ee.name))},re=()=>{const Q=!!f?.editable&&!f.mapOnly&&!f.pending;o.disabled=!Q;for(const ee of de)ee.disabled=!Q;K&&(K.disabled=!Q||!V?.playerId),Y&&(Y.disabled=!Q||!V?.playerId||!V?.aircraftKey);for(const ee of xe)ee.node.disabled=!Q||!ee.available;for(const[ee,R]of oe)R.setAttribute("aria-selected",String(ee===f?.selectedUnitId)),R.setAttribute("data-selected",String(ee===f?.selectedUnitId))},Ye=()=>{l.replaceChildren(),de.length=0,X.length=0,G=void 0,K=void 0,Y=void 0;const Q=++I;if(l.hidden=!V,!V||!f)return;const ee=V,R=()=>{if(V!==ee||Q!==I||!l.isConnected)throw new Error("玩家创建表单已变化。")},me=i("form","","player-roster-form");me.className="player-form",me.append(i("h4","呼号"));const ue=new Set(x.map(Ce=>Ce.player?.id).filter(Boolean)),Ve=(f.project.players??[]).filter(Ce=>!ue.has(Ce.id));Ve.some(Ce=>Ce.id===ee.playerId)||(ee.playerId=""),G=J(me,"player-roster-player","玩家呼号",[["","请选择玩家"],...Ve.map(Ce=>[Ce.id,Ce.callsign])],ee.playerId),Ve.length||me.append(i("p","暂无可用呼号")),me.append(i("h4","装备")),K=J(me,"player-roster-aircraft","机体",[["","请选择机体"],...v.map(Ce=>[pn(Ce),`${Ce.name} · 修订 ${Ce.revision}`])],ee.aircraftKey);const pe=i("div","GUN / MSL / FLR","player-roster-inherent");pe.className="player-chips",me.append(pe);const Ne=i("div","","player-roster-slots");Ne.className="player-slots",me.append(Ne);const ae=v.find(Ce=>pn(Ce)===ee.aircraftKey);ae&&(ee.loadout=ee.loadout.filter(Ce=>{const w=C.find(y=>pn(y)===pn(Ce.weaponRef));return w&&Ae(ae,w,Ce.slot)}),ae.spSlots?.length||Ne.append(i("p","无 SP 槽")),ae.spSlots?.forEach((Ce,w)=>{const y=i("div");y.className="player-slot";const O=C.filter(W=>Ae(ae,W,w)),j=ee.loadout.find(W=>W.slot===w)?.weaponRef,se=J(y,`player-roster-slot-${w}`,`SP${w+1} · ${GM(Ce)} ${Ce}`,[["","空槽"],...O.map(W=>[pn(W),`${W.name} · ${W.weapon?.weight??""} · 修订 ${W.revision}`])],j?pn(j):"");X.push({slot:w,node:se,choices:O}),se.addEventListener("change",()=>gt(()=>{if(R(),!se.isConnected)throw new Error("SP 槽位已变化。");if(se.value&&!O.some(Ue=>pn(Ue)===se.value))throw new Error("所选 SP 的重量或机体许可不匹配。");ee.loadout=ee.loadout.filter(Ue=>Ue.slot!==w);const W=O.find(Ue=>pn(Ue)===se.value);W&&ee.loadout.push({slot:w,weaponRef:Pd(W)}),ee.loadout.sort((Ue,_e)=>Ue.slot-_e.slot)})),Ne.append(y)}));const Re=i("div");Re.className="player-actions",Y=i("button","完成配置","player-roster-create"),Y.type="submit";const be=i("button","取消","player-roster-create-cancel");be.type="button",Re.append(Y,be),me.append(Re),l.append(me),G.addEventListener("change",()=>gt(()=>{R(),ee.playerId=G.value,re()})),K.addEventListener("change",()=>gt(()=>{if(R(),!ee.playerId)throw new Error("请先选择玩家呼号。");if(K.value&&!v.some(Ce=>pn(Ce)===K.value))throw new Error("机体修订已变化。");ee.aircraftKey=K.value,Ye()})),be.addEventListener("click",()=>gt(()=>{R(),V=void 0,Ye()})),me.addEventListener("submit",Ce=>{Ce.preventDefault(),gt(()=>{R();const w=xt();if(ee.projectId!==w.project.id||ee.sessionId!==w.sessionId||ee.turn!==w.turn)throw new Error("创建场景或回合已变化，请取消后重新新建。");if(!(w.project.players??[]).some(W=>W.id===ee.playerId)||x.some(W=>W.player?.id===ee.playerId))throw new Error("请选择尚未加入当前场景的玩家。");const y=v.find(W=>pn(W)===ee.aircraftKey);if(!y)throw new Error("请选择有效机体。");const O=X.filter(W=>W.node.value).map(W=>{const Ue=W.choices.find(_e=>pn(_e)===W.node.value);if(!Ue)throw new Error("所选 SP 的重量或机体许可不匹配。");return{slot:W.slot,weaponRef:Pd(Ue)}}),j=ag(y,C,O,P);if(j.length)throw new Error(j.join("；"));const se={playerId:ee.playerId,aircraftRef:Pd(y),loadout:O};V=void 0,++I;try{e.beginCreate(se)}catch(W){throw V=ee,Ye(),W}Ye()})}),re()},te=()=>{u.replaceChildren();const Q=++k,ee=f?.pending;if(u.hidden=!ee,!ee||!f)return;const R=i("article");R.className="player-card player-pending-card";const me=v.find(y=>pn(y)===pn(ee.aircraftRef));R.append(i("h4",`${ee.player.callsign} · 待落位`),i("p",me?.name??"已配置机体"));const ue=ee.loadout.map(y=>`SP${y.slot+1} ${C.find(O=>pn(O)===pn(y.weaponRef))?.name??"已配置 SP"}`).join(" / "),Ve=f,Ne=Ve.project.sessions.find(y=>y.id===Ve.sessionId)?.resourceSnapshot.sp.find(y=>y.name==="FLR")??Ve.project.sp.find(y=>y.name==="FLR");R.append(i("p",`FLR 剩余 ${Ne?Ne.weapon?.usageLimit??"—":4} 次`),i("p",ue||"空 SP 挂载"));for(const y of ee.loadout){const O=C.find(j=>pn(j)===pn(y.weaponRef));R.append(i("p",`SP${y.slot+1} · ${O?.name??"已配置 SP"} · 冷却 0 回合 · ${O?.weapon?.usageLimit===void 0?"已用 0 次":`剩余 ${O.weapon.usageLimit} 次`}`))}const ae=i("div");ae.className="player-actions";const Re=i("button",ee.armed?"等待地图落位":"生成位置","player-roster-arm");Re.type="button",Re.disabled=ee.armed||!f.editable;const be=i("button","取消创建","player-roster-placement-cancel");be.type="button",ae.append(Re,be),R.append(ae),u.append(R);const Ce={projectId:Ve.project.id,sessionId:Ve.sessionId,turn:Ve.turn},w=()=>{const y=it();if(Q!==k||!R.isConnected||y.project.id!==Ce.projectId||y.sessionId!==Ce.sessionId||y.turn!==Ce.turn||!y.pending||pn(y.pending.aircraftRef)!==pn(ee.aircraftRef)||y.pending.player.id!==ee.player.id)throw new Error("待落位配置已变化。");return y};Re.addEventListener("click",()=>gt(()=>{const y=w();!y.editable||y.pending?.armed||e.armPlacement()})),be.addEventListener("click",()=>gt(()=>{w(),e.cancelPlacement()}))},fe=()=>{h.replaceChildren(),oe.clear(),xe.length=0;const Q=++S;if(!f)return;const ee={projectId:f.project.id,sessionId:f.sessionId,turn:f.turn},R=x.filter(me=>me.player);R.length||h.append(i("p","暂无玩家"));for(const me of R){const ue=i("article","",`player-roster-unit-${me.id}`);ue.className="player-card",ue.tabIndex=0,ue.setAttribute("role","group"),ue.setAttribute("aria-label",`玩家 ${me.player.callsign}`);const Ve=i("h4",me.player.callsign),pe=v.find(w=>me.aircraftRef&&pn(w)===pn(me.aircraftRef));ue.append(Ve,i("p",pe?.name??"未绑定机体"));const Ne=og(f.project,f.sessionId,me.id,f.turn),ae=Ne.find(w=>w.name==="FLR");ue.append(i("p",`FLR 剩余 ${ae?.remaining??"—"} 次`));const Re=()=>{const w=it();if(Q!==S||!ue.isConnected||w.project.id!==ee.projectId||w.sessionId!==ee.sessionId||w.turn!==ee.turn||!x.some(y=>y.id===me.id))throw new Error("玩家单位或回合已变化。");return w},be=w=>["BUTTON","SELECT","INPUT"].includes(w.target?.tagName?.toUpperCase()??"");ue.addEventListener("click",w=>gt(()=>{be(w)||(Re(),e.selectUnit(me.id,!1))})),ue.addEventListener("dblclick",w=>gt(()=>{be(w)||(Re(),e.selectUnit(me.id,!0))})),ue.addEventListener("keydown",w=>{w.target!==ue||!["Enter"," "].includes(w.key)||(w.preventDefault(),gt(()=>{Re(),e.selectUnit(me.id,w.key==="Enter")}))});const Ce=i("div");Ce.className="player-weapon-list",ue.append(Ce);for(const w of Ne){const y=i("div");y.className="player-weapon-row";const O=w.slot===void 0?w.name:`SP${w.slot+1} · ${w.name}`,j=w.durationRemaining>0?`效果剩余 ${w.durationRemaining} 回合 · 冷却 ${w.profile?.cooldownTurns??0}T`:`冷却 ${w.cooldownRemaining} 回合`;y.append(i("strong",O),i("span",w.jettisoned?"已抛弃":`${j} · ${w.remaining===void 0?`已用 ${w.uses} 次`:`剩余 ${w.remaining} 次`}`));const se=i("div");se.className="player-actions";const W=i("button","使用");W.type="button",W.setAttribute("data-action","use"),W.setAttribute("data-weapon-key",w.key),se.append(W),xe.push({node:W,available:w.canUse&&f.turn>0});let Ue=!1;const _e=(Fe,Ze,ye)=>gt(()=>{Re();const Pe=xt();if(!ye.isConnected||!Ze||Ue||Pe.turn<1)throw new Error("上一回合的此项行动当前不可记录。");Ue=!0,ye.disabled=!0;const tt=xe.filter(we=>we.node.getAttribute("data-weapon-key")===w.key&&ue.contains(we.node)),Ke=tt.map(we=>we.available);for(const we of tt)we.available=!1;try{e.recordAction(me.id,w.key,Fe)}catch(we){throw Ue=!1,tt.forEach((mt,U)=>{mt.available=Ke[U]}),re(),we}});if(W.addEventListener("click",Fe=>{Fe.stopPropagation(),_e("use",w.canUse,W)}),w.slot!==void 0||w.profile?.kind&&w.profile.kind!=="normal"){const Fe=i("button","抛弃");Fe.type="button",Fe.setAttribute("data-action","drop"),Fe.setAttribute("data-weapon-key",w.key),se.append(Fe),xe.push({node:Fe,available:w.canJettison&&f.turn>0}),Fe.addEventListener("click",Ze=>{Ze.stopPropagation(),_e("drop",w.canJettison,Fe)})}y.append(se),Ce.append(y)}h.append(ue),oe.set(me.id,ue)}};return c.addEventListener("click",()=>gt(()=>{const Q=n.getAttribute("data-collapsed")!=="true";n.setAttribute("data-collapsed",String(Q)),c.textContent=Q?"展开":"收起",c.setAttribute("aria-expanded",String(!Q))})),o.addEventListener("click",()=>gt(()=>{const Q=xt();if(V){e.report("请先完成或取消当前玩家配置。");return}V={playerId:"",aircraftKey:"",loadout:[],projectId:Q.project.id,sessionId:Q.sessionId,turn:Q.turn},Ye()})),{sync(Q){if(Jo.get(n)!==t||!r.isConnected)return;if(f={...Q,pending:Q.pending?structuredClone(Q.pending):void 0},(Q.revision===void 0?Q.project!==g:Q.revision!==_||Q.project.id!==g?.id)||Q.sessionId!==m||Q.turn!==p){g=Q.project,_=Q.revision,m=Q.sessionId,p=Q.turn,T=e.readRevision&&Q.revision!==void 0?"":np(Q.project,Q.sessionId,Q.turn);const me=Q.project.sessions.find(Ne=>Ne.id===Q.sessionId),ue=me?.sealedScenes?.find(Ne=>Ne.turn===Q.turn);x=ue?.units??me?.units??[],v=ip(ue?.resourceSnapshot.aircraft??me?.resourceSnapshot.aircraft??[],Q.project.aircraft),C=ip(ue?.resourceSnapshot.sp??me?.resourceSnapshot.sp??[],Q.project.sp),P=ue?.rulesSnapshot??me?.rulesSnapshot??yh;const Ve=JSON.stringify([Q.project.id,Q.project.players,v,C,P,x.map(Ne=>Ne.player?.id)]);N!==Ve&&(N=Ve,V&&Ye());const pe=JSON.stringify([Q.project.id,Q.sessionId,Q.turn,v,C,P,x.filter(Ne=>Ne.player).map(Ne=>({id:Ne.id,player:Ne.player,aircraftRef:Ne.aircraftRef,loadout:Ne.loadout,spRefs:Ne.spRefs,playerActions:Ne.playerActions}))]);if(D!==pe){D=pe;try{fe()}catch(Ne){Xe(Ne)}}}const R=JSON.stringify([Q.project.id,Q.sessionId,Q.turn,Q.editable,Q.pending]);M!==R&&(M=R,te()),re()},destroy(){Jo.get(n)===t&&(Jo.delete(n),++S,++I,++k,n.replaceChildren())}}}const Qo=512,ea=[["#ff6935","橙"],["#2d8cff","蓝"],["#ffd84a","黄"],["#20e27e","绿"],["#ff4d5a","红"]],ai=n=>!!n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=1e5),ta=n=>/^#[0-9a-f]{6}$/i.test(n),Dd=n=>`${n.kind}:${n.id}`,rp=n=>{const e=n.indexOf(":"),t=n.slice(0,e),i=n.slice(e+1);return e>0&&i&&(t==="unit"||t==="marker")?{kind:t,id:i}:null},XM=(n,e,t)=>n.some(i=>i.fromUnitId===e&&i.to.kind===t.kind&&i.to.id===t.id||t.kind==="unit"&&i.to.kind==="unit"&&i.fromUnitId===t.id&&i.to.id===e);function qM(n){let e=!1,t="",i="",r="",s="",o="";const a=new Sn,c=new Map;a.name="Editor links",a.userData.editorLinks=!0,a.renderOrder=1e3,n.world.add(a);const l=(te,fe="")=>{const Q=document.createElement(te);return Q.textContent=fe,Q},u=l("div");u.className="scene-tool-panel editor-links-panel",n.panel.append(u);const h=l("style");h.textContent=`
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
  `,u.append(h,l("h3","连线"));const d=[],f=(te,fe,Q)=>{const ee=()=>{e||Q()};te.addEventListener(fe,ee),d.push({element:te,event:fe,run:ee})},g=()=>{const te=l("div");return te.className="tool-actions",u.append(te),te},_=(te,fe,Q,ee)=>{const R=l("button",Q);return R.id=fe,R.type="button",f(R,"click",ee),te.append(R),R},m=(te,fe,Q)=>{const ee=l("label");ee.className="tool-row",ee.append(l("span",Q));const R=l(te);return R.id=fe,R.setAttribute("aria-label",Q),ee.append(R),u.append(ee),R},p=(te,fe)=>{const Q=l("option",te);return Q.value=fe,Q},T=g(),x=_(T,"link-mode","连线模式",()=>{if(t){Xe();return}if(!X()){re();return}const te=oe();if(!te||!n.readUnits().some(fe=>fe.id===te&&ai(fe.position))){o="请选择源单位",re();return}t=te,o="",D.value="",n.onModeChange(!0),re()}),v=_(T,"link-cancel","取消",Xe),C=m("select","link-source-unit","源单位");C.title="默认跟随选中单位；手动选择后固定源单位，连线模式中保持不变";const P=l("p");P.id="link-source",u.append(P);const D=m("select","link-target","目标"),N=m("select","link-style","颜色");N.replaceChildren(...ea.map(([te,fe])=>p(fe,te)),p("自定义","custom")),N.value=ea[0][0];const M=m("input","link-color","自定义颜色");M.type="color",M.value=ea[0][0];const S=_(g(),"link-add","添加连线",()=>{const te=oe(),fe=rp(D.value);if(!X()){re();return}if(!te||!fe){o="请选择源与目标",re();return}gt(te,fe)}),I=m("select","link-list","连线列表");I.size=5;const k=m("input","link-visible","显示");k.type="checkbox",k.checked=!0;const V=g(),G=_(V,"link-apply","修改颜色 / 显示",()=>{const te=r,fe=M.value,Q=k.checked;if(!X()){re();return}if(!ta(fe)){o="请选择有效颜色",re();return}it("修改连线",ee=>{const R=ee.links?.find(me=>me.id===te);if(!R)throw new Error("连线已移除");R.color=fe.toLowerCase(),R.visible=Q})}),K=_(V,"link-delete","删除连线",()=>{const te=r;if(!X()){re();return}it("删除连线",fe=>{if(!fe.links?.some(Q=>Q.id===te))throw new Error("连线已移除");fe.links=fe.links.filter(Q=>Q.id!==te)})}),Y=l("p");Y.id="link-state",Y.setAttribute("role","status"),u.append(Y),f(C,"change",()=>{if(!X()||t){re();return}const te=C.value;i=te&&n.readUnits().some(fe=>fe.id===te&&ai(fe.position))?te:"",D.value="",o="",re()}),f(D,"change",()=>{o="",re()}),f(N,"change",()=>{if(!X()){re();return}ta(N.value)&&(M.value=N.value)}),f(M,"input",()=>{if(!X()){re();return}N.value=ea.find(([te])=>te===M.value.toLowerCase())?.[0]??"custom"}),f(I,"change",()=>{r=I.value,s="",o="",re()});const de=te=>{!e&&t&&te.key==="Escape"&&(Xe(),te.preventDefault())};typeof addEventListener=="function"&&addEventListener("keydown",de);function X(){return!e&&n.editable()&&!n.busy()}function oe(te){return i&&!(te??n.readUnits()).some(fe=>fe.id===i&&ai(fe.position))&&(i="",D.value=""),t||i||n.selectedUnitId()||""}function xe(){t&&(t="",D.value="",n.onModeChange(!1))}function Xe(){e||(xe(),D.value="",o="",re())}function it(te,fe){if(!X())return re(),!1;let Q=!1;try{Q=n.change(te,ee=>{if(!X())throw new Error("当前状态已变化");fe(ee)}),o=Q?"已保存":"未保存"}catch(ee){o=ee instanceof Error?ee.message:String(ee)}return re(),Q}function gt(te,fe){const Q=M.value,ee=ue=>{const Ve=n.readUnits(),pe=Ve.find(ae=>ae.id===te),Ne=fe.kind==="unit"?Ve.find(ae=>ae.id===fe.id):ue.markers.find(ae=>ae.id===fe.id);if(!ai(pe?.position)||!ai(Ne?.position))throw new Error("源或目标已移除");if(fe.kind==="unit"&&fe.id===te)throw new Error("源与目标相同");if((ue.links?.length??0)>=Qo)throw new Error("连线已达上限 512");if(XM(ue.links??[],te,fe))throw new Error("连线已存在");if(!ta(Q))throw new Error("请选择有效颜色")};try{ee(n.read())}catch(ue){return o=ue instanceof Error?ue.message:String(ue),re(),!1}const R=`link-${crypto.randomUUID()}`,me=it("添加连线",ue=>{ee(ue),(ue.links??=[]).push({id:R,fromUnitId:te,to:{...fe},color:Q.toLowerCase(),visible:!0})});return me&&(r=R,s="",re()),me}function xt(te,fe){if(e||!t)return!1;if(!X())return re(),!0;const Q={kind:te,id:fe};return D.value=Dd(Q),gt(t,Q),!0}function J(te){a.remove(te.line),te.line.geometry.dispose(),te.line.material.dispose()}function Ae(){if(e)return;const te=n.read();if(!te.links?.length&&!t){for(const R of c.values())J(R);c.clear();return}const fe=new Map(n.readUnits().map(R=>[R.id,R])),Q=new Map(te.markers.map(R=>[R.id,R]));if(t&&(!n.editable()||!ai(fe.get(t)?.position))){xe(),o="",re();return}const ee=new Set;for(const R of(te.links??[]).slice(0,Qo)){if(ee.has(R.id))continue;ee.add(R.id);let me=c.get(R.id);if(!me){const ae=new Ft,Re=new Dt(new Float32Array(6),3).setUsage(tl);ae.setAttribute("position",Re);const be=new yi({color:"#ff6935",depthTest:!1,depthWrite:!1}),Ce=new rn(ae,be);Ce.name=`Editor link ${R.id}`,Ce.userData.editorLinkId=R.id,Ce.userData.editorTools=!0,Ce.renderOrder=1e3,Ce.frustumCulled=!1,me={line:Ce,position:Re,coordinates:[NaN,NaN,NaN,NaN,NaN,NaN]},c.set(R.id,me),a.add(Ce)}const ue=fe.get(R.fromUnitId)?.position,Ve=(R.to.kind==="unit"?fe.get(R.to.id):Q.get(R.to.id))?.position;me.line.visible=R.visible!==!1&&ai(ue)&&ai(Ve);const pe=ta(R.color)?R.color.toLowerCase():"#ff6935";if(`#${me.line.material.color.getHexString()}`!==pe&&me.line.material.color.set(pe),!ai(ue)||!ai(Ve))continue;let Ne=!1;for(let ae=0;ae<6;ae++){const Re=ae<3?ue:Ve,be=ae%3,Ce=(be===0?Re.x:be===1?Re.y:Re.z)*et;me.coordinates[ae]!==Ce&&(me.coordinates[ae]=Ce,me.position.array[ae]=Ce,Ne=!0)}Ne&&(me.position.needsUpdate=!0)}for(const[R,me]of c)ee.has(R)||(J(me),c.delete(R))}function re(){if(e)return;const te=n.read(),fe=n.readUnits(),Q=(te.links??[]).slice(0,Qo);t&&(!n.editable()||!fe.some(w=>w.id===t&&ai(w.position)))&&xe();const ee=oe(fe),R=fe.find(w=>w.id===ee),me=D.value,ue=[p("跟随选中单位",""),...fe.filter(w=>ai(w.position)).map(w=>p(w.label,w.id))];C.replaceChildren(...ue),C.value=ue.some(w=>w.value===ee)?ee:"";const Ve=[p("选择目标","")];for(const w of fe)w.id!==ee&&ai(w.position)&&Ve.push(p(`单位：${w.label}`,Dd({kind:"unit",id:w.id})));for(const w of te.markers)ai(w.position)&&Ve.push(p(`标记：${w.label}`,Dd({kind:"marker",id:w.id})));D.replaceChildren(...Ve),D.value=Ve.some(w=>w.value===me)?me:"",Q.some(w=>w.id===r)||(r=Q[0]?.id??""),I.replaceChildren(...Q.map(w=>{const y=fe.find(j=>j.id===w.fromUnitId)?.label??w.fromUnitId,O=(w.to.kind==="unit"?fe:te.markers).find(j=>j.id===w.to.id)?.label??w.to.id;return p(`${y} → ${O}${w.visible===!1?" · 隐藏":""}`,w.id)})),I.value=r;const pe=Q.find(w=>w.id===r),Ne=pe?`${pe.id}|${pe.color}|${pe.visible!==!1}`:"";Ne!==s&&(s=Ne,pe?(M.value=ta(pe.color)?pe.color.toLowerCase():"#ff6935",N.value=ea.find(([w])=>w===M.value)?.[0]??"custom",k.checked=pe.visible!==!1):k.checked=!0);const ae=X(),Re=ai(R?.position);x.disabled=!t&&(!ae||!Re||Q.length>=Qo),x.setAttribute("aria-pressed",String(!!t)),v.disabled=!t,C.disabled=!ae||!!t,D.disabled=!ae,N.disabled=M.disabled=!ae,S.disabled=!ae||!Re||!D.value||Q.length>=Qo,k.disabled=G.disabled=K.disabled=!ae||!pe,P.textContent=`源：${R?.label??"未选择"}${t?" · 连线中":""}`;const be=rp(D.value),Ce=be&&(be.kind==="unit"?fe:te.markers).find(w=>w.id===be.id)?.label;Y.textContent=o||(Ce?`目标：${Ce}`:""),Ae()}function Ye(){if(!e){xe(),e=!0,typeof removeEventListener=="function"&&removeEventListener("keydown",de);for(const te of d)te.element.removeEventListener(te.event,te.run);for(const te of c.values())J(te);c.clear(),n.world.remove(a),u.remove()}}return re(),{sync:re,update:Ae,active:()=>!e&&!!t,pick:xt,cancel:Xe,dispose:Ye}}function gm(n,e){const t=e.x-n.x,i=n.z-e.z;return!Number.isFinite(t)||!Number.isFinite(i)||t===0&&i===0?void 0:(Math.atan2(t,i)*180/Math.PI%360+360)%360}function _m(n,e){const t=gm(n,e);return t===void 0?"方位角未定义（起终点水平重合，N=0°）":`方位角 ${Math.round(t*100)/100%360}° (N=0°)`}const YM=.12,$M=1e5,jM=1e3,Ra=n=>({x:n.x,y:n.y,z:n.z}),vm=n=>({pitch:n.pitch,yaw:n.yaw,roll:n.roll});function ll(n){if(!n||!["x","y","z"].every(e=>{const t=n[e];return Number.isFinite(t)&&Math.abs(t)<=$M}))throw new RangeError("Marker coordinates must be finite and within +/-100000 km")}function xm(n){if(!Number.isFinite(n)||n<=0||n>jM)throw new RangeError("Marker size must be positive and at most 1000 km")}function ym(n){if(!n||![n.pitch,n.yaw,n.roll].every(Number.isFinite))throw new RangeError("Marker attitude must contain finite radians")}function Ai(n){return["line","arrow","circle","square","sphere"].includes(n.symbol)}function Ca(n){const e=n.attitude??{pitch:0,yaw:0,roll:0};return ym(e),new mn().setFromEuler(new ni(e.pitch,e.yaw,e.roll,"YXZ"))}function Sm(n){const e=new b((n.sizeKm??YM)/2,0,0).applyQuaternion(Ca(n)),t=n.position;return[{x:t.x-e.x,y:t.y-e.y,z:t.z-e.z},{x:t.x+e.x,y:t.y+e.y,z:t.z+e.z}]}function gs(n){if(n.controlPoints!==void 0){if(n.controlPoints.length!==2)throw new RangeError("Marker control points must contain exactly two points");return[Ra(n.controlPoints[0]),Ra(n.controlPoints[1])]}return Sm(n)}function jc(n,e){if(!Array.isArray(e)||e.length!==2)throw new RangeError("Marker control points must contain exactly two points");const[t,i]=e;ll(t),ll(i);const r=i.x-t.x,s=i.y-t.y,o=i.z-t.z,a=Math.hypot(r,s,o);xm(a);const c=Ca(n),l=new b(1,0,0).applyQuaternion(c).normalize(),u=new b(r/a,s/a,o/a);let h;if(n.attitude!==void 0&&l.distanceTo(u)<=16*Number.EPSILON)h=vm(n.attitude);else{const d=new mn().setFromUnitVectors(l,u).multiply(c).normalize(),f=new ni().setFromQuaternion(d,"YXZ");h={pitch:f.x,yaw:f.y,roll:f.z}}return{...n,position:{x:(t.x+i.x)/2,y:(t.y+i.y)/2,z:(t.z+i.z)/2},attitude:h,sizeKm:a,controlPoints:[Ra(t),Ra(i)]}}function bm(n,e,t,i){ll(e),ym(t),xm(i);const r={...n,position:Ra(e),attitude:vm(t),sizeKm:i};return n.controlPoints!==void 0&&(r.controlPoints=Sm(r),r.controlPoints.forEach(ll)),r}const Kn=n=>({x:n.x,y:n.y,z:n.z}),Wn=n=>new b(n.x,n.y,n.z).multiplyScalar(et),ys=(n,e)=>Math.hypot(e.x-n.x,e.y-n.y,e.z-n.z),Vr=n=>`${n}-${crypto.randomUUID()}`,br=n=>Number(n.toFixed(5)).toString(),Ld=n=>[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=1e5),ZM=(n,e)=>({horizontal:Math.hypot(e.x-n.x,e.z-n.z),deltaY:e.y-n.y,slant:ys(n,e)}),Mm=(n,e)=>{const t=ZM(n,e);return`水平 ${br(t.horizontal)} km · 高差 ${t.deltaY>=0?"+":""}${br(t.deltaY)} km · 斜距 ${br(t.slant)} km`},En=n=>n==="measure"||n==="bearing",Bc=n=>({measure:"测距",bearing:"方位角",circle:"圆规",sphere:"范围球"})[n],na=n=>n.kind==="bearing"?_m(n.points[0],n.points[1]):Mm(n.points[0],n.points[1]),sp=(n,e,t,i)=>t==="sphere"?ys(n,e):i==="xz"?Math.hypot(e.x-n.x,e.z-n.z):i==="xy"?Math.hypot(e.x-n.x,e.y-n.y):Math.hypot(e.y-n.y,e.z-n.z);function KM(n){let e=!1,t="",i="",r="",s=null,o=!1,a,c="",l=n.editable(),u=!1,h=null,d=null;const f=new Sn,g=new Sn;f.name="Editor markers and drawings",g.name="Editor tool preview",f.userData.editorTools=!0,g.userData.editorTools=!0,n.world.add(f,g);const _=document.createElement("div");_.className="editor-tools-labels",_.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;",n.labelRoot.append(_);const m=[],p=[],T=document.createElement("style");T.textContent=`
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
  `,n.markersPanel.append(T);const x=(E,L="")=>{const F=document.createElement(E);return F.textContent=L,F},v=(E,L)=>{E.classList.add("scene-tool-panel"),E.append(x("h3",L))};v(n.markersPanel,"自定义标记点"),v(n.drawingsPanel,"标尺与圆规");const C=x("p"),P=x("p");C.id="marker-status",P.id="drawing-status";for(const E of[C,P])E.className="tool-status",E.setAttribute("role","status");const D=(E,L=h?.kind==="marker"?"markers":"drawing")=>{(L==="markers"?C:P).textContent=E},N=E=>(p.push(E),E),M=E=>{const L=x("div");return L.className="tool-actions",E.append(L),L},S=(E,L,F,B,q=!0)=>{const ce=x("button",F);return ce.type="button",ce.id=L,ce.addEventListener("click",()=>{if(!(e||q&&!n.editable()))try{B()}catch(le){D(le instanceof Error?le.message:String(le),L.startsWith("marker-")?"markers":"drawing")}}),E.append(ce),q&&N(ce),ce},I=(E,L,F,B=!0)=>{const q=x("details");return q.id=L,q.open=B,q.append(x("summary",F)),E.append(q),q},k=(E,L,F,B,q="text")=>{const ce=x("label");ce.className="tool-row",ce.append(x("span",F));const le=N(x("input"));return le.id=L,le.type=q,le.value=B,q==="number"?le.step="any":q==="text"&&(le.maxLength=128),ce.append(le),E.append(ce),le},V=(E,L,F,B,q=!0)=>{const ce=x("label");ce.className="tool-row",ce.append(x("span",F));const le=x("select");return le.id=L,le.setAttribute("aria-label",F),B.forEach(([Qe,ze])=>le.add(new Option(ze,Qe))),ce.append(le),E.append(ce),q&&N(le),le},G=E=>{if(!E.value.trim()||!Number.isFinite(E.valueAsNumber))throw new Error("请填写有效数值");return E.valueAsNumber},K=(E,L,F,B)=>{const q=x("div");q.className="tool-xyz",E.append(x("p",F),q);const ce={};for(const le of["x","z","y"]){const Qe=le==="y"?"Z":le==="z"?"Y":"X",ze=x("label",`${Qe}（km）`),Ut=N(x("input"));Ut.id=`${L}-${le}`,Ut.type="number",Ut.step="any",Ut.value=String(B[le]),Ut.setAttribute("aria-label",`${F} ${Qe}（km）`),ze.append(Ut),q.append(ze),ce[le]=Ut}return{row:q,fields:ce,read:()=>{const le={x:G(ce.x),y:G(ce.y),z:G(ce.z)};if(!Ld(le))throw new Error("点位坐标须为有限数值，绝对值不超过100000 km");return le},set:le=>{for(const Qe of["x","y","z"])ce[Qe].value=String(le[Qe])}}},Y=E=>/^#[0-9a-f]{6}$/i.test(E.value)?E.value.toLowerCase():"#ffd84a",de=(E,L)=>E.value.trim().slice(0,128)||L,X=E=>{for(const L of[...E.children])E.remove(L),L.traverse(F=>{(F instanceof Ee||F instanceof rn||F instanceof Wp)&&(F.geometry.dispose(),(Array.isArray(F.material)?F.material:[F.material]).forEach(q=>q.dispose()))})},oe=(E,L,F=1)=>new rn(new Ft().setFromPoints(E),new yi({color:L,transparent:!0,opacity:F,depthWrite:!1})),xe=(E,L,F,B=.045)=>{const q=new Ee(new Zr(B*et,10,8),new yn({color:F,depthWrite:!1}));return q.position.copy(Wn(L)),E.add(q),q},Xe=(E,L)=>{L==="xz"?E.rotation.x=-Math.PI/2:L==="yz"&&(E.rotation.y=Math.PI/2)},it=(E,L)=>Array.from({length:129},(F,B)=>{const q=B/128*Math.PI*2,ce=Math.cos(q)*E,le=Math.sin(q)*E;return L==="xy"?new b(ce,le,0):L==="yz"?new b(0,ce,le):new b(ce,0,le)}),gt=(E,L,F=!1)=>{const B=new Sn;B.position.copy(Wn(L.position)),B.quaternion.copy(Ca(L)),E.add(B),B.userData.markerSize=L.sizeKm??.12;const q=et*(L.sizeKm??.12),ce=L.color,le=F?.65:1,Qe=le*Math.min(.6,Math.max(.02,L.opacity??.12));if(L.symbol==="cross")B.add(oe([new b(-q,.4,-q),new b(q,.4,q)],ce,le)),B.add(oe([new b(-q,.4,q),new b(q,.4,-q)],ce,le));else if(L.symbol==="flag"){B.add(oe([new b(0,.2,0),new b(0,q*3,0)],ce,le));const ze=new Ee(new Jr(q*1.6,q),new yn({color:ce,transparent:!0,opacity:.5,side:fn,depthWrite:!1}));ze.position.set(q*.8,q*2.5,0),B.add(ze)}else if(L.symbol==="pin"){B.add(oe([new b(0,.2,0),new b(0,q*2.5,0)],ce,le));const ze=new Ee(new Ms(q*.6),new yn({color:ce,transparent:F,opacity:le,depthWrite:!1}));ze.position.y=q*2.5,B.add(ze),B.add(oe(it(q*.7,"xz"),ce,le))}else if(L.symbol==="line"||L.symbol==="arrow")B.add(oe([new b(-q/2,0,0),new b(q/2,0,0)],ce,le)),L.symbol==="arrow"&&B.add(oe([new b(q*.25,0,-q*.2),new b(q/2,0,0),new b(q*.25,0,q*.2)],ce,le));else if(L.symbol==="circle"){const ze=new Ee(new Ma(q/2,64),new yn({color:ce,transparent:!0,opacity:Qe,side:fn,depthWrite:!1}));Xe(ze,"xz"),B.add(ze,oe(it(q/2,"xz"),ce,le))}else if(L.symbol==="square"){const ze=q/2,Ut=new Ee(new Jr(q,q),new yn({color:ce,transparent:!0,opacity:Qe,side:fn,depthWrite:!1}));Xe(Ut,"xz"),B.add(Ut,oe([new b(-ze,0,-ze),new b(ze,0,-ze),new b(ze,0,ze),new b(-ze,0,ze),new b(-ze,0,-ze)],ce,le))}else if(L.symbol==="sphere"){B.add(new Ee(new Zr(q/2,32,20),new yn({color:ce,transparent:!0,opacity:Qe,side:fn,depthWrite:!1})));for(const ze of["xz","xy","yz"])B.add(oe(it(q/2,ze),ce,le*.7))}else B.add(oe([new b(-q*.6,.4,0),new b(q*.6,.4,0)],ce,le));return["circle","square","sphere"].includes(L.symbol)&&B.children.filter(ze=>ze instanceof Ee).forEach(ze=>{ze.visible=L.filled!==!1}),F||B.traverse(ze=>{ze.userData.editorTool={kind:"marker",id:L.id}}),!F&&L.id===t&&Ai(L)&&gs(L).forEach((ze,Ut)=>{const Xt=Wn(ze).sub(Wn(L.position)).applyQuaternion(B.quaternion.clone().invert()),cr=xe(B,{x:Xt.x/et,y:Xt.y/et,z:Xt.z/et},ce);cr.userData.editorTool={kind:"marker",id:L.id,pointIndex:Ut}}),B},xt=(E,L)=>{const[F,B]=L.points;if(!F||!B)return;E.position.copy(Wn(F)),E.position.y+=.3;const q=(B.x-F.x)*et,ce=(B.z-F.z)*et,le=Math.hypot(q,ce),Qe=gm(F,B),ze=Math.min(.6*et,Math.max(.1*et,le*.25)),Ut=(Qe??0)*Math.PI/180;for(const Xt of E.children)if(Xt instanceof rn){let cr;if(Xt.name==="bearing-direction")cr=[new b,new b(q,0,ce)];else if(Xt.name==="bearing-north-reference")cr=[new b,new b(0,0,-ze*1.3)];else if(Xt.name==="bearing-arc")cr=Array.from({length:65},(Ui,Vs)=>{const ss=Ut*Vs/64;return new b(Math.sin(ss)*ze,0,-Math.cos(ss)*ze)}),Xt.visible=Qe!==void 0&&Qe>0;else{const Ui=Math.min(ze*.3,le*.2),Vs=le?q/le:0,ss=le?ce/le:0;cr=[new b(q-Vs*Ui-ss*Ui*.5,0,ce-ss*Ui+Vs*Ui*.5),new b(q,0,ce),new b(q-Vs*Ui+ss*Ui*.5,0,ce-ss*Ui-Vs*Ui*.5)],Xt.visible=Qe!==void 0}Xt.geometry.setFromPoints(cr),Xt.geometry.computeBoundingSphere(),Xt.material instanceof rf&&(Xt.material.dashSize=ze*.12,Xt.material.gapSize=ze*.09,Xt.computeLineDistances())}else Xt.userData.bearingEndpoint!==void 0&&Xt.position.set(Xt.userData.bearingEndpoint===1?q:0,0,Xt.userData.bearingEndpoint===1?ce:0)},J=(E,L,F=!1)=>{const B=new Sn;E.add(B),F||(B.userData.editorTool={kind:"drawing",id:L.id});const q=L.color,ce=Math.min(.6,Math.max(.02,L.opacity??.12));if(L.kind==="bearing"){if(L.points.length<2)return B;const le=oe([new b,new b],q,F?.65:.95);le.name="bearing-direction";const Qe=new rn(new Ft().setFromPoints([new b,new b]),new rf({color:q,transparent:!0,opacity:F?.5:.75,depthWrite:!1,depthTest:!1}));Qe.name="bearing-north-reference";const ze=oe(Array.from({length:65},()=>new b),q,F?.55:.85);ze.name="bearing-arc";const Ut=oe([new b,new b,new b],q,F?.65:.95);Ut.name="bearing-arrow",B.add(le,Qe,ze,Ut),L.points.forEach((Xt,cr)=>{const Ui=xe(B,{x:0,y:0,z:0},q);Ui.userData.bearingEndpoint=cr,F||(Ui.userData.editorTool={kind:"drawing",id:L.id,pointIndex:cr})}),B.traverse(Xt=>{(Xt instanceof rn||Xt instanceof Ee)&&(Xt.material.depthTest=!1,Xt.renderOrder=40)}),xt(B,L)}else if(L.kind==="measure"){if(L.points.length<2)return B;B.add(oe(L.points.map(Wn),q,F?.65:.9)),L.points.forEach((le,Qe)=>{const ze=xe(B,le,q);F||(ze.userData.editorTool={kind:"drawing",id:L.id,pointIndex:Qe})})}else{const le=L.points[0],Qe=(L.radiusKm??0)*et;if(!le||Qe<=0)return B;B.position.copy(Wn(le));const ze=L.plane??"xz";if(L.kind==="circle"){const Ut=new Ee(new Ma(Qe,96),new yn({color:q,transparent:!0,opacity:F?ce/2:ce,side:fn,depthWrite:!1}));Xe(Ut,ze),ze==="xz"&&(Ut.position.y=.3),Ut.visible=L.filled!==!1,B.add(Ut,oe(it(Qe,ze),q,F?.55:.8)),xe(B,{x:0,y:0,z:0},q)}else{const Ut=new Ee(new Zr(Qe,40,24),new yn({color:q,transparent:!0,opacity:F?ce/2:ce,side:fn,depthWrite:!1}));Ut.visible=L.filled!==!1,B.add(Ut);for(const Xt of["xz","xy","yz"])B.add(oe(it(Qe,Xt),q,F?.35:.5));xe(B,{x:0,y:0,z:0},q)}}return B},Ae=(E,L,F,B,q,ce,le)=>{const Qe=new vn;Qe.position.copy(L),E.add(Qe);const ze=x("button",F);return ze.type="button",ze.title=q,ze.style.setProperty("--tool-color",B),ze.addEventListener("click",Ut=>{Ut.stopPropagation(),ce()}),ze.addEventListener("dblclick",Ut=>{Ut.stopPropagation(),le()}),_.append(ze),m.push({object:Qe,element:ze}),ze},re=V(n.markersPanel,"marker-list","标记列表",[],!1);re.size=5;const Ye=M(n.markersPanel);S(Ye,"marker-focus","定位",()=>{const E=ri();E&&n.focus(Kn(E.position))},!1);const te=V(n.markersPanel,"marker-endpoint","移动目标",[["whole","整体"],["a","端点 A"],["b","端点 B"]],!1),fe=S(Ye,"marker-move","三轴移动",()=>{ri()&&(st(t,!0,a),n.onTransformMode?.("translate"))}),Q=S(Ye,"marker-rotate","旋转",()=>{ri()&&(st(t),n.onTransformMode?.("rotate"))}),ee=S(Ye,"marker-scale","缩放",()=>{ri()&&(st(t),n.onTransformMode?.("scale"))});S(Ye,"marker-copy","复制",()=>{const E=ri();if(!E)throw new Error("请先选择标记");const L={...E,...E.attitude?{attitude:{...E.attitude}}:{},id:Vr("marker"),label:`${E.label.slice(0,122)} 副本`,position:{...E.position,x:E.position.x+.2,z:E.position.z+.2}};L.controlPoints&&(L.controlPoints=L.controlPoints.map(F=>({...F,x:F.x+.2,z:F.z+.2}))),$("复制标记",F=>F.markers.push(L),"markers",()=>{Gn("marker",L.id)})}),S(Ye,"marker-delete","删除",()=>{const E=t;if(!E)throw new Error("请先选择标记");$("删除标记",L=>{L.markers=L.markers.filter(F=>F.id!==E),L.links&&(L.links=L.links.filter(F=>F.to.kind!=="marker"||F.to.id!==E))},"markers",()=>{Gn("marker","")})});const R=I(n.markersPanel,"marker-properties","标记属性与位置"),me=k(R,"marker-label","名称","标记"),ue=k(R,"marker-color","颜色","#ffd84a","color"),Ve=V(R,"marker-symbol","符号",[["pin","定位针"],["cross","十字"],["flag","旗帜"],["text","文字"],["line","线段（长度）"],["arrow","箭头（长度）"],["circle","圆（直径）"],["square","正方形（边长）"],["sphere","球（直径）"]]),pe=k(R,"marker-size","尺寸（km）",".12","number");pe.min=".00001",pe.max="1000";const Ne=k(R,"marker-filled","填充","","checkbox");Ne.checked=!0;const ae=k(R,"marker-opacity","填充透明度",".12","number");ae.min=".02",ae.max=".6",ae.step=".01";const Re=k(R,"marker-visible","显示标记","","checkbox");Re.checked=!0;const be={pitch:k(R,"marker-pitch","俯仰 X°","0","number"),yaw:k(R,"marker-yaw","方向 Z°","0","number"),roll:k(R,"marker-roll","翻滚 Y°","0","number")},Ce=K(R,"marker-position","位置",{x:0,y:0,z:0}),w=k(R,"marker-height","高度（m）","0","number"),y=()=>{w.value=Ce.fields.y.value.trim()?String(Ce.fields.y.valueAsNumber*1e3):""},O=K(R,"marker-a","端点 A",{x:-.06,y:0,z:0}),j=K(R,"marker-b","端点 B",{x:.06,y:0,z:0}),se=k(R,"marker-a-height","端点 A 高度（m）","0","number"),W=k(R,"marker-b-height","端点 B 高度（m）","0","number"),Ue=x("label");Ue.className="tool-row",Ue.append(x("span","说明"));const _e=N(x("textarea"));_e.id="marker-description",_e.maxLength=4096,Ue.append(_e),R.append(Ue);const Fe=M(R),Ze=S(Fe,"marker-apply","应用所选标记",()=>{const E=t;if(!E)throw new Error("请先选择标记");const L=A(E);$("修改标记",F=>{const B=F.markers.findIndex(q=>q.id===E);if(B<0)throw new Error("标记已被移除");F.markers[B]=L},"markers")});S(Fe,"marker-ground","坐标贴地",()=>{const E=Ce.read();E.y=n.sampleHeightKm(E.x,E.z),Ce.set(E),y(),D("地形高度已填入","markers")});const ye=I(n.markersPanel,"marker-create","新增标记"),Pe=M(ye);S(Pe,"marker-pick","点地图放置",()=>{const E=A(Vr("marker"),{x:0,y:0,z:0});Lt({kind:"marker",marker:E}),n.onOpenPanel?.("markers"),D("标记放置中","markers")}),S(Pe,"marker-pick-two","两点确认方向与尺寸",()=>{const E=A(Vr("marker"),{x:0,y:0,z:0});if(!Ai(E))throw new Error("请选择线段、箭头、圆、正方形或球");Lt({kind:"marker",marker:E,twoPoint:!0}),n.onOpenPanel?.("markers"),D("端点 A 选择中","markers")}),S(Pe,"marker-add-position","按坐标新增",()=>{const E=A(Vr("marker"));$("新增标记",L=>L.markers.push(E),"markers",()=>{Gn("marker",E.id)})}),S(Pe,"marker-new","清空选择／新标记",()=>{Gn("marker",""),H(),ct(),Yt(),ft(),Nr()},!1),S(Pe,"marker-cancel","取消放置",si,!1),n.markersPanel.append(C);const tt=V(n.drawingsPanel,"drawing-list","标尺／图形列表",[],!1);tt.size=5;const Ke=M(n.drawingsPanel);S(Ke,"drawing-focus","定位",()=>{const E=wi();E&&an(E)},!1);const we=V(n.drawingsPanel,"drawing-endpoint","移动目标",[["whole","整体"],["a","端点 A"],["b","端点 B"]],!1),mt=S(Ke,"drawing-move","三轴移动",()=>{wi()?.points[0]&&bt(i,!0,a)});S(Ke,"drawing-copy","复制",()=>{const E=wi();if(!E)throw new Error("请先选择标尺或图形");const L={...E,id:Vr("drawing"),label:`${E.label.slice(0,122)} 副本`,points:E.points.map(F=>({...F,x:F.x+.2,z:F.z+.2}))};$("复制制图标尺",F=>F.drawings.push(L),"drawing",()=>{Gn("drawing",L.id)})}),S(Ke,"drawing-delete","删除",()=>{const E=i;if(!E)throw new Error("请先选择标尺或图形");$("删除制图标尺",L=>{L.drawings=L.drawings.filter(F=>F.id!==E)},"drawing",()=>{Gn("drawing","")})});const U=I(n.drawingsPanel,"drawing-properties","标尺属性与坐标"),Se=k(U,"drawing-label","名称","测距"),Te=V(U,"drawing-kind","类型",[["measure","自由测距"],["bearing","水平方位角（N=0°）"],["circle","平面圆规"],["sphere","立体半透明球"]]),$e=k(U,"drawing-color","颜色","#2d8cff","color"),ge=k(U,"drawing-visible","显示图形","","checkbox");ge.checked=!0;const ie=k(U,"drawing-filled","填充","","checkbox");ie.checked=!0;const qe=k(U,"drawing-opacity","填充透明度",".12","number");qe.min=".02",qe.max=".6",qe.step=".01";const ne=V(U,"drawing-plane","圆规平面",[["xz","XY 水平"],["xy","XZ 垂直"],["yz","YZ 垂直"]]),Ie=K(U,"drawing-a","起点／中心",{x:0,y:0,z:0}),Oe=k(U,"drawing-height","高度（m）","0","number"),ht=K(U,"drawing-b","终点",{x:1,y:0,z:0}),Mt=k(U,"drawing-b-height","终点高度（m）","0","number"),zo=()=>{Oe.value=Ie.fields.y.value.trim()?String(Ie.fields.y.valueAsNumber*1e3):"",Mt.value=ht.fields.y.value.trim()?String(ht.fields.y.valueAsNumber*1e3):""},Un=k(U,"drawing-radius","半径（km）","2","number");Un.min=".00001",Un.max="1000";const Lr=x("p");Lr.id="drawing-readout",U.append(Lr);const Bo=M(U),Ho=S(Bo,"drawing-apply","应用所选图形",()=>{const E=i;if(!E)throw new Error("请先选择标尺或图形");const L=z(E);$("修改制图标尺",F=>{const B=F.drawings.findIndex(q=>q.id===E);if(B<0)throw new Error("图形已被移除");F.drawings[B]=L},"drawing")});S(Bo,"drawing-ground","起点／中心贴地",()=>{const E=Ie.read();E.y=n.sampleHeightKm(E.x,E.z),Ie.set(E),We(),D("地形高度已填入","drawing")});const Ir=I(n.drawingsPanel,"drawing-create","测距与制图"),ns=M(Ir);S(ns,"drawing-pick-measure","点选两点测距",()=>Fn("measure")),S(ns,"drawing-pick-bearing","点选两点测方位角",()=>Fn("bearing"));const Hs=x("p","方位角：正北 N=0°，顺时针 E=90°、S=180°、W=270°；仅按水平位置计算。");Ir.append(Hs),S(ns,"drawing-pick-circle","圆规：中心＋半径点",()=>Fn("circle")),S(ns,"drawing-pick-sphere","球体：中心＋半径点",()=>Fn("sphere"));const is=M(Ir);S(is,"drawing-add-position","按坐标／半径新增",()=>{const E=z(Vr("drawing"));$("新增制图标尺",L=>L.drawings.push(E),"drawing",()=>{Gn("drawing",E.id)})}),S(is,"drawing-pick-center","点地图定中心＋输入半径",()=>{const E=Te.value;if(En(E))throw new Error("请选择平面圆规或球体，再使用输入半径方式");const L=z(Vr("drawing"),!0),F=G(Un);if(F<=0||F>1e3)throw new Error("半径须大于0且不超过1000 km");L.radiusKm=F,Lt({kind:E,drawing:L}),qi=!0,D("中心点放置中","drawing")}),S(is,"drawing-new","清空选择／新图形",()=>{Gn("drawing",""),Me(),ct(),ft(),Nr()},!1),S(is,"drawing-cancel","取消作图",si,!1),n.drawingsPanel.append(P);let qi=!1;function ri(){return n.read().markers.find(E=>E.id===t)}function wi(){return n.read().drawings.find(E=>E.id===i)}function tc(){if(e||!s)return null;const E=n.read(),L=s==="marker"?t:i,F=s==="drawing"?E.drawings.find(le=>le.id===L):void 0,B=s==="marker"?E.markers.find(le=>le.id===L):void 0,q=En(F?.kind)||B&&Ai(B)?a:void 0,ce=B?q===void 0?B.position:gs(B)[q]:F?.points[q??0];return L&&ce?{kind:s,id:L,position:Kn(ce),...q===void 0?{}:{pointIndex:q}}:null}function Nr(E=!1){if(e||u)return;const L=tc(),F=L?JSON.stringify([L.kind,L.id,L.pointIndex]):"",B=n.editable(),q=F!==c||!!L&&B!==l;if(c=F,l=B,!(!q&&!E)){u=!0;try{n.onSelectionChange?.(L)}finally{u=!1}}}function Gn(E,L,F){E==="marker"?t=L:i=L,a=F,L?s=E:s===E&&(s=null)}function Fl(){e||(t="",i="",a=void 0,s=null,H(),Me(),ct(),Yt(),ft(),Nr())}function A(E,L){const F=G(pe);if(F<=0||F>1e3)throw new Error("尺寸须大于0且不超过1000 km");const B={id:E,label:de(me,"标记"),position:L??Ce.read(),color:Y(ue),symbol:Ve.value,sizeKm:F,visible:Re.checked};if(["circle","square","sphere"].includes(B.symbol)){const le=G(ae);if(le<.02||le>.6)throw new Error("透明度范围为0.02–0.6");const Qe=n.read().markers.find(ze=>ze.id===E);(!Qe||Qe.filled!==void 0||!Ne.checked)&&(B.filled=Ne.checked),(!Qe||Qe.opacity!==void 0||le!==.12)&&(B.opacity=le)}const q=_e.value.trim().slice(0,4096);q&&(B.description=q);const ce=n.read().markers.find(le=>le.id===E);if(Ai(B)){ce?.controlPoints&&(B.controlPoints=ce.controlPoints.map(Kn));const le={pitch:0,yaw:0,roll:0};for(const Qe of["pitch","yaw","roll"]){const ze=ce?.attitude?.[Qe]??0;le[Qe]=be[Qe].value===String(jt.radToDeg(ze))?ze:jt.degToRad(G(be[Qe]))}if((ce?.attitude||Object.values(le).some(Qe=>Qe!==0))&&(B.attitude=le),o&&!L)return jc(B,[O.read(),j.read()]);if(B.controlPoints&&ce&&(ys(ce.position,B.position)>0||B.sizeKm!==ce.sizeKm||JSON.stringify(B.attitude)!==JSON.stringify(ce.attitude)))return bm(B,B.position,le,F)}return B}function z(E,L=!1){const F=Te.value,B=L?{x:0,y:0,z:0}:Ie.read(),q={id:E,label:de(Se,Bc(F)),kind:F,points:En(F)?[B,L?Kn(B):ht.read()]:[B],color:Y($e),visible:ge.checked};if(!En(F)){const ce=L?1:G(Un),le=G(qe);if(ce<=0||ce>1e3)throw new Error("半径须大于0且不超过1000 km");if(le<.02||le>.6)throw new Error("透明度范围为0.02–0.6");q.radiusKm=ce,q.opacity=le,q.plane=ne.value;const Qe=n.read().drawings.find(ze=>ze.id===E);(!Qe||Qe.filled!==void 0||!ie.checked)&&(q.filled=ie.checked)}return q}function $(E,L,F,B){if(!n.editable())return D("只读",F),!1;try{const q=n.change(E,L);return q?(B?.(),B&&(r=""),Wt(),D(`${E}已保存`,F)):D("操作未保存或内容没有变化",F),q}catch(q){return D(q instanceof Error?q.message:String(q),F),!1}}function Z(E,L,F,B){const q=h,ce=d,le=qi;h=null,n.onPickingChange(!1);const Qe=$(E,L,F,B);if(Qe)d=null,qi=!1,X(g);else if(q&&n.editable()&&!e){const ze=(F==="markers"?C:P).textContent;h=q,d=ce,qi=le,n.onPickingChange(!0),kn(),D(ze||"未保存",F)}return Qe}function H(){const E=ri();me.value=E?.label??"标记",ue.value=E?.color??"#ffd84a",Ve.value=E?.symbol??"pin",Re.checked=E?.visible!==!1,_e.value=E?.description??"",pe.value=String(E?.sizeKm??.12),Ne.checked=E?.filled!==!1,ae.value=String(E?.opacity??.12),Je(),Ce.set(E?.position??{x:0,y:0,z:0}),y(),o=!1;for(const F of["pitch","yaw","roll"])be[F].value=String(jt.radToDeg(E?.attitude?.[F]??0));const L=gs(E??{position:{x:0,y:0,z:0}});O.set(L[0]),j.set(L[1]),$n(),s==="marker"&&(!E||!Ai(E))&&(a=void 0),te.value=s==="marker"&&a===0?"a":s==="marker"&&a===1?"b":"whole",te.closest("label").hidden=!E||!Ai(E),Ze.disabled=!n.editable()||!E,fe.disabled=!n.editable()||!E,Q.disabled=ee.disabled=!n.editable()||!E||!Ai(E)}function Me(){const E=wi();Se.value=E?.label??"测距",Te.value=E?.kind??"measure",$e.value=E?.color??"#2d8cff",ie.checked=E?.filled!==!1,ge.checked=E?.visible!==!1,qe.value=String(E?.opacity??.12),ne.value=E?.plane??"xz",Un.value=String(E?.radiusKm??2),Ie.set(E?.points[0]??{x:0,y:0,z:0}),ht.set(E?.points[1]??{x:1,y:0,z:0}),Ge(),zo(),Ho.disabled=!n.editable()||!E,mt.disabled=!n.editable()||!E?.points[0],We()}function Ge(){const E=wi();s==="drawing"&&(!En(E?.kind)||a!==void 0&&!E?.points[a])&&(a=void 0),we.value=s==="drawing"&&a===0?"a":s==="drawing"&&a===1?"b":"whole",we.closest("label").hidden=!En(E?.kind),we.disabled=!En(E?.kind)}function Je(){const E=["line","arrow","circle","square","sphere"].includes(Ve.value),L=["circle","square","sphere"].includes(Ve.value);Ne.closest("label").hidden=!L;for(const F of Object.values(be))F.closest("label").hidden=!E;for(const F of[O.row,j.row])F.hidden=!E;se.closest("label").hidden=!E,W.closest("label").hidden=!E,ae.closest("label").hidden=!L,ae.disabled=!n.editable()||!Ne.checked}function We(){const E=Te.value,L=En(E);ht.row.hidden=!L;const F=ht.row.previousElementSibling;F&&(F.hidden=!L),Un.closest("label").hidden=L,qe.closest("label").hidden=L,ne.closest("label").hidden=E!=="circle",ie.closest("label").hidden=L,Mt.closest("label").hidden=!L,qe.disabled=!n.editable()||!ie.checked,zo();try{Lr.textContent=E==="bearing"?_m(Ie.read(),ht.read()):E==="measure"?Mm(Ie.read(),ht.read()):`半径 ${br(G(Un))} km · 直径 ${br(G(Un)*2)} km${E==="circle"?` · ${{xz:"XY",xy:"XZ",yz:"YZ"}[ne.value]}平面`:" · 3D范围"}`}catch{Lr.textContent="—"}}function ct(){const E=n.read();re.replaceChildren(...E.markers.map(L=>new Option(`${L.visible===!1?"隐藏 · ":""}${L.label}`,L.id))),re.value=t,tt.replaceChildren(...E.drawings.map(L=>new Option(`${L.visible===!1?"隐藏 · ":""}${Bc(L.kind)} · ${L.label}${En(L.kind)&&L.points[1]?` · ${na(L)}`:` · R ${br(L.radiusKm??0)} km`}`,L.id))),tt.value=i}function ft(){for(const E of m)E.element.setAttribute("aria-pressed",String(E.element.dataset.markerId?E.element.dataset.markerId===t:E.element.dataset.drawingId===i))}function st(E,L=!0,F){if(n.read().markers.some(q=>q.id===E)&&n.onMarkerPick?.(E)){ct();return}const B=n.read().markers.find(q=>q.id===E);Gn("marker",B?E:"",B&&Ai(B)?F:void 0),H(),ct(),Yt(),ft(),Nr(L&&!!t),n.onOpenPanel?.("markers")}function bt(E,L=!0,F){const B=n.read().drawings.find(q=>q.id===E);Gn("drawing",B?E:"",En(B?.kind)&&F!==void 0&&B?.points[F]?F:void 0),Me(),ct(),ft(),Nr(L&&!!i),n.onOpenPanel?.("drawing")}function Gt(E){if(e)return!1;let L=E;for(;L&&L!==f;)L=L.parent;if(!L)return!1;for(let F=E;F&&F!==f;F=F.parent){const B=F.userData.editorTool;if(B?.id){if(B.kind==="marker"&&n.read().markers.some(q=>q.id===B.id))return st(B.id,!0,B.pointIndex),!0;if(B.kind==="drawing"&&n.read().drawings.some(q=>q.id===B.id))return bt(B.id,!0,B.pointIndex),!0}}return!1}function an(E){const L=E.points[0];if(!L)return;const F=E.points[1];En(E.kind)&&F?n.focus({x:(L.x+F.x)/2,y:E.kind==="bearing"?L.y:(L.y+F.y)/2,z:(L.z+F.z)/2},Math.max(.2,(E.kind==="bearing"?Math.hypot(F.x-L.x,F.z-L.z):ys(L,F))/2)):n.focus(Kn(L),E.radiusKm)}function Yt(){for(const E of f.children){if(E.userData.editorTool?.kind!=="marker")continue;for(const F of[...E.children])F.userData.editorTool?.pointIndex!==void 0&&(F.traverse(B=>{B instanceof Ee&&(B.geometry.dispose(),B.material.dispose())}),E.remove(F));const L=n.read().markers.find(F=>F.id===E.userData.editorTool.id);!L||L.id!==t||!Ai(L)||gs(L).forEach((F,B)=>{const q=Wn(F).sub(E.position).applyQuaternion(E.quaternion.clone().invert()).divideScalar(E.scale.x),ce=xe(E,{x:q.x/et,y:q.y/et,z:q.z/et},L.color);ce.userData.editorTool={kind:"marker",id:L.id,pointIndex:B}})}}function $t(){X(f),m.length=0,_.replaceChildren();const E=n.read();for(const L of E.markers){if(L.visible===!1)continue;const F=gt(f,L);Ae(F,new b(0,et*.4,0),L.label,L.color,L.description||"",()=>st(L.id),()=>n.focus(Kn(L.position))).dataset.markerId=L.id}for(const L of E.drawings){if(L.visible===!1||!L.points.length)continue;const F=J(f,L),B=L.points[0],q=L.points[1],ce=En(L.kind)&&q?`${L.label} · ${na(L)}`:`${L.label} · 半径 ${br(L.radiusKm??0)} km`,le=L.kind==="measure"&&q?Wn({x:(B.x+q.x)/2,y:(B.y+q.y)/2+.1,z:(B.z+q.z)/2}):new b(0,et*.12,0);Ae(F,le,ce,L.color,"",()=>bt(L.id),()=>an(L)).dataset.drawingId=L.id}ft()}function pt(){if(e)return;if(!n.editable()){Wt();return}const E=n.read();for(const B of f.children){const q=B.userData.editorTool;if(q.kind==="marker"){const ce=E.markers.find(Ut=>Ut.id===q.id);if(!ce||ce.visible===!1){Wt();return}B.position.copy(Wn(ce.position)),B.quaternion.copy(Ca(ce));const le=ce.sizeKm??.12,Qe=B.userData.markerSize??le;B.scale.setScalar(le/Qe);const ze=B.quaternion.clone().invert();for(const Ut of B.children)if(Ut.userData.editorTool?.pointIndex!==void 0){const Xt=gs(ce)[Ut.userData.editorTool.pointIndex];Ut.position.copy(Wn(Xt).sub(B.position).applyQuaternion(ze).divideScalar(B.scale.x))}}else{const ce=E.drawings.find(le=>le.id===q.id);if(!ce||ce.visible===!1||!ce.points[0]){Wt();return}if(ce.kind==="bearing")xt(B,ce);else if(ce.kind!=="measure")B.position.copy(Wn(ce.points[0]));else for(const le of B.children)if(le instanceof rn)le.geometry.setFromPoints(ce.points.map(Wn)),le.geometry.computeBoundingSphere();else if(le.userData.editorTool?.pointIndex!==void 0){const Qe=ce.points[le.userData.editorTool.pointIndex];Qe&&le.position.copy(Wn(Qe))}}}for(const B of m){const q=B.element.dataset.drawingId;if(!q)continue;const ce=E.drawings.find(ze=>ze.id===q),le=ce?.points[0],Qe=ce?.points[1];!ce||!En(ce.kind)||!le||!Qe||(ce.kind==="measure"&&B.object.position.copy(Wn({x:(le.x+Qe.x)/2,y:(le.y+Qe.y)/2+.1,z:(le.z+Qe.z)/2})),B.element.textContent=`${ce.label} · ${na(ce)}`)}const L=ri(),F=wi();if(L){Ce.set(L.position),y(),pe.value=String(L.sizeKm??.12);const B=gs(L);O.set(B[0]),j.set(B[1]),$n();for(const q of["pitch","yaw","roll"])be[q].value=String(jt.radToDeg(L.attitude?.[q]??0))}F&&(Ie.set(F.points[0]??{x:0,y:0,z:0}),ht.set(F.points[1]??{x:1,y:0,z:0}),We())}function Wt(){if(e)return;h&&!n.editable()&&si();const E=n.read(),L=JSON.stringify({markers:E.markers,drawings:E.drawings}),F=n.editable();p.forEach(B=>{B.disabled=!F}),t&&!E.markers.some(B=>B.id===t)&&Gn("marker",""),i&&!E.drawings.some(B=>B.id===i)&&Gn("drawing",""),r!==L&&(r=L,ct(),H(),Me(),$t()),Ze.disabled=!F||!ri(),Ho.disabled=!F||!wi(),fe.disabled=!F||!ri(),mt.disabled=!F||!wi()?.points[0],Q.disabled=ee.disabled=!F||!ri()||!Ai(ri()),Je(),We(),!F&&!h?(C.textContent="只读",P.textContent="只读"):F&&!h&&(C.textContent==="只读"&&(C.textContent=""),P.textContent==="只读"&&(P.textContent="")),Nr()}function Lt(E){si(),n.editable()&&(h=E,qi=!1,n.onPickingChange(!0))}function Fn(E){Te.value=E,(!i||["测距","方位角","圆规","范围球"].includes(Se.value))&&(Se.value=Bc(E)),We();const L=z(Vr("drawing"),!0);Lt({kind:E,drawing:L}),n.onOpenPanel?.("drawing"),D(En(E)?"起点选择中":"中心点选择中","drawing")}function si(){const E=h;h=null,d=null,qi=!1,X(g),E&&(n.onPickingChange(!1),D("已退出地图点选",E.kind==="marker"?"markers":"drawing"))}function kn(){X(g);const E=h,L=d;if(!(!E||!L))if(E.kind==="marker")E.twoPoint?E.first?(xe(g,E.first,E.marker.color,.08),xe(g,L,E.marker.color,.08),ys(E.first,L)>0&&ys(E.first,L)<=1e3&&gt(g,jc(E.marker,[E.first,L]),!0)):xe(g,L,E.marker.color,.08):gt(g,{...E.marker,position:L},!0);else if(!E.first)xe(g,L,E.drawing.color,.08),qi&&J(g,{...E.drawing,points:[L]},!0);else if(En(E.kind)){const F={...E.drawing,points:[E.first,L]};J(g,F,!0),D(na(F),"drawing")}else{const F=sp(E.first,L,E.kind,E.drawing.plane??"xz");xe(g,E.first,E.drawing.color,.08),g.add(oe([Wn(E.first),Wn(L)],E.drawing.color,.6)),F>0&&F<=1e3&&J(g,{...E.drawing,points:[E.first],radiusKm:F},!0),D(`半径 ${br(F)} km${F>1e3?"（超出1000 km）":""}`,"drawing")}}function rs(E){e||!h||E&&!Ld(E)||!E&&!d||E&&d&&ys(E,d)<1e-5||(d=E?Kn(E):null,kn())}function cn(E){const L=h;if(e||!L||!n.editable()){n.editable()||si();return}if(!Ld(E)){D("点位坐标超出有效范围");return}try{if(L.kind==="marker"){if(L.twoPoint&&!L.first){L.first=Kn(E),d=Kn(E),kn(),D("端点 B 选择中","markers");return}const F=L.twoPoint?jc(L.marker,[L.first,E]):{...L.marker,position:Kn(E)};Z("地图放置标记",B=>B.markers.push(F),"markers",()=>{Gn("marker",F.id)})&&D("标记已放置并保存","markers")}else if(qi){const F={...L.drawing,points:[Kn(E)]};Z("地图放置范围图形",B=>B.drawings.push(F),"drawing",()=>{Gn("drawing",F.id)})&&D("图形已放置并保存","drawing")}else if(!L.first)L.first=Kn(E),d=Kn(E),kn(),D(En(L.kind)?"终点选择中":"半径点选择中","drawing");else{const F={...L.drawing,points:En(L.kind)?[Kn(L.first),Kn(E)]:[Kn(L.first)]};if(!En(L.kind)){const B=sp(L.first,E,L.kind,L.drawing.plane??"xz");if(B<=0||B>1e3)throw new Error("半径须大于0且不超过1000 km，请重新选择半径点");F.radiusKm=B}Z("地图作图",B=>B.drawings.push(F),"drawing",()=>{Gn("drawing",F.id)})&&D(En(F.kind)?`${Bc(F.kind)}已保存：${na(F)}`:`图形已保存：半径 ${br(F.radiusKm)} km`,"drawing")}}catch(F){D(F instanceof Error?F.message:String(F),L.kind==="marker"?"markers":"drawing")}}const oi=E=>{E.key==="Escape"&&h&&(si(),E.preventDefault())};addEventListener("keydown",oi),re.addEventListener("change",()=>st(re.value)),tt.addEventListener("change",()=>bt(tt.value)),we.addEventListener("change",()=>{if(e||!En(wi()?.kind))return;const E=we.value==="a"?0:we.value==="b"?1:void 0;bt(i,!1,E)}),Ce.fields.y.addEventListener("input",y),w.addEventListener("input",()=>{Ce.fields.y.value=w.value.trim()?String(w.valueAsNumber/1e3):""}),te.addEventListener("change",()=>st(t,!1,te.value==="a"?0:te.value==="b"?1:void 0)),Ve.addEventListener("input",Je),Ne.addEventListener("input",Je),ie.addEventListener("input",We);for(const E of[w,pe,...Object.values(Ce.fields),...Object.values(be)])E.addEventListener("input",()=>{o=!1});function $n(){se.value=O.fields.y.value.trim()?String(O.fields.y.valueAsNumber*1e3):"",W.value=j.fields.y.value.trim()?String(j.fields.y.valueAsNumber*1e3):""}for(const E of[...Object.values(O.fields),...Object.values(j.fields)])E.addEventListener("input",()=>{o=!0,$n()});for(const[E,L]of[[se,O],[W,j],[Oe,Ie],[Mt,ht]])E.addEventListener("input",()=>{L.fields.y.value=E.value.trim()?String(E.valueAsNumber/1e3):"",E===se||E===W?o=!0:We()});for(const E of[...Object.values(Ie.fields),...Object.values(ht.fields),Un,ne,Te])E.addEventListener("input",We);const On=(E,L)=>{for(const F of E)F.addEventListener("change",()=>{if(!(h||!n.editable()||e||!(L==="markers"?ri():wi())))try{const B=L==="markers"?t:i,q=L==="markers"?A(B):z(B),ce=L==="markers"?ri():wi();if(JSON.stringify(ce)===JSON.stringify(q))return;$(L==="markers"?"修改标记":"修改制图标尺",le=>{if(L==="markers"){const Qe=le.markers.findIndex(ze=>ze.id===B);Qe>=0&&(le.markers[Qe]=q)}else{const Qe=le.drawings.findIndex(ze=>ze.id===B);Qe>=0&&(le.drawings[Qe]=q)}},L)}catch(B){D(B instanceof Error?B.message:String(B),L)}})};return On([me,ue,Ve,pe,Ne,ae,Re,_e,w,se,W,...Object.values(be),...Object.values(Ce.fields),...Object.values(O.fields),...Object.values(j.fields)],"markers"),On([Se,Te,$e,ge,ie,qe,ne,Oe,Mt,Un,...Object.values(Ie.fields),...Object.values(ht.fields)],"drawing"),H(),Me(),D("","markers"),D("","drawing"),Wt(),{sync:Wt,syncPosition:pt,selectObject:Gt,selection:tc,clearSelection:Fl,isPicking:()=>!!h,pick:cn,preview:rs,cancel:si,updateLabels(E,L,F){if(e)return;E.updateMatrixWorld(),f.updateWorldMatrix(!0,!0);const B=new b;for(const q of m){const ce=q.object.getWorldPosition(B).project(E),le=ce.z>=-1&&ce.z<=1&&Math.abs(ce.x)<=1.08&&Math.abs(ce.y)<=1.08;q.element.hidden=!le,le&&(q.element.style.left=`${(ce.x+1)*L/2}px`,q.element.style.top=`${(1-ce.y)*F/2}px`)}},dispose(){e||(si(),e=!0,removeEventListener("keydown",oi),X(f),X(g),n.world.remove(f,g),_.remove(),T.remove(),m.length=0,p.length=0,n.markersPanel.replaceChildren(),n.drawingsPanel.replaceChildren(),n.markersPanel.classList.remove("scene-tool-panel"),n.drawingsPanel.classList.remove("scene-tool-panel"))}}}function JM(n,e,t,i,r=360,s=1440){const o=i*Math.PI/180,a=Math.max(.25,1-r/Math.max(1,s)),c=2*Math.atan(Math.tan(o/2)*Math.max(.1,t)*a),l=Math.hypot(Math.max(1,n),Math.max(1,e)),u=l/Math.sin(Math.min(o,c)/2)*1.12,h=Math.max(1e4,u*10);return{distance:u,maxDistance:h,far:Math.max(5e4,h*3),near:Math.max(.1,l/1e5)}}const _o=n=>({id:n.id,revision:n.revision});function oh(n,e){const t=n.sessions.find(i=>i.id===e);if(!t)throw new Error(`Unknown session: ${e}`);if(t.workflow||t.status==="finished")throw new Error("Active authoring session required");return t}function wm(n){if(typeof n!="string"||!n.trim()||n.trim().length>128)throw new Error("Name must contain 1..128 characters");return n.trim()}function Em(n,e,t,i,r,s){const o=Uu(e);dg(n,o);const a=oh(o,t);return{project:o,sessionId:t,selection:{kind:i,ref:_o(r)},mapRef:_o(s),taskRef:_o(a.taskRef)}}function QM(n,e,t,i){const r=Uu(n);if(!oh(r,e).mapEditRef)throw new Error("Terrain editing session required");const o=mp(r,e,t,wm(i)),a={id:t,revision:1};return o.sessions.find(c=>c.id===e).mapEditRef=_o(a),Em(r,o,e,"map",a,a)}function ew(n,e,t,i){const r=Uu(n);if(oh(r,e).mapEditRef)throw new Error("Task authoring session required");if(!t||typeof t!="object")throw new Error("New map and task IDs required");const o=wm(i),a={id:t.mapId,revision:1},c={id:t.taskId,revision:1};let l=mp(r,e,t.mapId,`${o} MAP`.slice(0,128));l=lg(l,e,a,t.taskId,o);const u=l.sessions.find(h=>h.id===e);return u.taskRef=_o(c),u.mapRef=_o(a),Em(r,l,e,"task",c,a)}function tw(n,e){return n===void 0||e<n?"active":e===n?"destroyed":"wreck"}const pa={squadron:2155134,friendly:2985215,neutral:16767050,enemy:16738613,white:15332072,terrain:6062736},Tm={squadron:"SQUADRON",friendly:"FRIENDLY",neutral:"NEUTRAL",enemy:"ENEMY"},ts=new a_;ts.background=new Nt(133653);const yt=new Ci(42,innerWidth/innerHeight,.1,5e3);yt.position.set(0,240,410);const vt=new Nb({antialias:!0,powerPreference:"high-performance"});vt.setPixelRatio(Math.min(devicePixelRatio,2));vt.setSize(innerWidth,innerHeight);vt.outputColorSpace=ui;vt.domElement.setAttribute("aria-label","三维地图画布");vt.domElement.setAttribute("role","img");vt.domElement.tabIndex=0;document.querySelector("#scene").appendChild(vt.domElement);const It=new Fb(yt,vt.domElement);It.target.set(0,0,0);It.enableDamping=!0;It.dampingFactor=.08;It.minDistance=35;It.maxDistance=1e4;It.maxPolarAngle=Math.PI*.49;const Am=new j_(1588299,30,850);Am.position.set(0,140,0);ts.add(Am);const tn=new Sn;ts.add(tn);let Gr;function Rm(n,e){Gr&&(tn.remove(Gr),Gr.geometry.dispose(),Gr.material.dispose()),Gr=hM(n,e),tn.add(Gr),um(Gr,yt.position.distanceTo(It.target))}Rm(750,750);function ma(n,e,t=1,i=1){const r=new Ft().setFromPoints(n),s=new yi({color:e,transparent:!0,opacity:i});return new rn(r,s)}let _t=new gp,nr=new vp,Pa=42,Ts=0;function Et(n,e){return _t.sample(n,e)}function Cm(){const n=document.querySelector("#terrain-contour-smooth").checked;return oM(_t,{smoothing:n})}function Pm(){const n=new Sn,e=nr.buildings(_t,Pa,Ts),t=[],i=[],r=[],s=Math.cos(Ts),o=Math.sin(Ts);for(const c of e){const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([u,h])=>{const d=u*c.width/2,f=h*c.depth/2,g=c.x+d*s-f*o,_=c.z+d*o+f*s;return new b(g,Et(g,_)+.32,_)});for(const u of[0,1,2,0,2,3]){const h=l[u];t.push(h.x,h.y,h.z),i.push(c.shade*.82,c.shade*.91,c.shade)}for(let u=0;u<3;u++){const h=c.x+(u-1)*c.width*.26*s,d=c.z+(u-1)*c.width*.26*o;r.push(h,Et(h,d)+.36,d)}}const a=new Ft;return a.setAttribute("position",new Dt(t,3)),a.setAttribute("color",new Dt(i,3)),n.add(new Ee(a,new yn({vertexColors:!0,transparent:!0,opacity:.64,side:fn,depthWrite:!1}))),n.add(new Wp(new Ft().setAttribute("position",new Dt(r,3)),new Gp({color:14477547,size:.45,transparent:!0,opacity:.65,depthWrite:!1}))),n.userData.count=e.length,n}let ws=Pm();tn.add(ws);let pi=Cm();tn.add(pi);let Cr=!1,nn=null,dl=null,ul=null,Da=!0,As=null;function Dm(){!nn||dl!==_t||ul!==nr?(nn&&(tn.remove(nn.root),nn.dispose()),nn=dm(_t,nr,{smoothing:!!document.querySelector("#terrain-contour-smooth")?.checked}),dl=_t,ul=nr,tn.add(nn.root)):Da&&nn.update();const n=nn.root.children[0]?.material,e=!!document.querySelector("#terrain-contour-smooth")?.checked;n?.userData.terrainContours&&n.userData.contourSmoothing!==e&&(n.userData.contourSmoothing=e,n.needsUpdate=!0),Da=!1,nn.root.visible=!!Pt||pi===nn.root}function Lm(){As&&(Dm(),nn.update(As),As=null,pi!==nn.root&&(pi.visible=!1),ws.visible=!1)}function nw(n,e){const t=Math.max(0,Math.floor((n.x-e+_t.extent)/_t.spacing)),i=Math.min(_t.size-1,Math.ceil((n.x+e+_t.extent)/_t.spacing)),r=Math.max(0,Math.floor((n.z-e+_t.extentZ)/_t.spacingZ)),s=Math.min(_t.size-1,Math.ceil((n.z+e+_t.extentZ)/_t.spacingZ));if(t>i||r>s)return;const o=As;As=o?{minX:Math.min(o.minX,t),maxX:Math.max(o.maxX,i),minZ:Math.min(o.minZ,r),maxZ:Math.max(o.maxZ,s)}:{minX:t,maxX:i,minZ:r,maxZ:s}}function Tl(n=!1){Qa();const e=n&&nn&&dl===_t&&ul===nr;Da=!e,As=null,nn&&(nn.root.visible=!!e),e?(pi!==nn.root&&Kr(pi),pi=nn.root,pi.visible=!0):(pi===nn?.root?(tn.remove(nn.root),nn.dispose(),nn=null):Kr(pi),pi=Cm(),tn.add(pi)),Cr=!1,Kr(ws),ws=Pm(),tn.add(ws);const t=Dr(De);t.units.forEach(r=>{lh(r,t.turn),(r.unit.icon==="ground"||r.unit.icon==="ship")&&Lu(r.unit)}),xo();const i=_t.data.reduce((r,s)=>Math.max(r,s),0);document.querySelector("#terrain-state").textContent=`${_t.extent*2/25} × ${_t.extentZ*2/25} km / MAX HEIGHT ${(i/25).toFixed(2)} km / BUILDINGS ${ws.userData.count}`}const ot=[{id:"rex",label:"REX",faction:"squadron",kind:"F-16C",icon:"air-filled",positions:[new b(-250,60,250),new b(-170,85,180),new b(-70,108,140),new b(30,125,130),new b(130,138,150)]},{id:"tasha",label:"TASHA",faction:"friendly",kind:"MIRAGE 2000-5",icon:"air-outline",positions:[new b(-210,84,270),new b(-120,88,185),new b(-20,94,130),new b(65,90,80),new b(150,96,30)]},{id:"professor",label:"PROFESSOR",faction:"neutral",kind:"EA-6B",icon:"air-outline",positions:[new b(-275,52,300),new b(-190,55,215),new b(-90,61,165),new b(10,65,125),new b(105,68,85)]},{id:"mig29",label:"MIG-29A",faction:"enemy",kind:"MIG-29",icon:"air-outline",destroyedAtTurn:3,positions:[new b(300,120,-220),new b(195,100,-150),new b(100,78,-70),new b(20,55,10),new b(20,55,10)]},{id:"sam",label:"SAM",faction:"enemy",kind:"SAM",icon:"ground",tgt:!0,positions:[new b(160,0,-150),new b(160,0,-150),new b(160,0,-150),new b(160,0,-150),new b(160,0,-150)]},{id:"frigate",label:"FRIGATE",faction:"enemy",kind:"FRIGATE",icon:"ship",tgt:!0,positions:[new b(245,0,-40),new b(230,0,-30),new b(215,0,-20),new b(200,0,-10),new b(185,0,0)]}],Xn=[{summary:"FORMATION / INITIAL CONTACT",events:[]},{summary:"TACTICAL MOVEMENT / CONTACT",events:[{kind:"attack",attacker:"mig29",target:"rex",weapon:"2AAM"}]},{summary:"ENGAGEMENT / RANGE CLOSING",events:[{kind:"attack",attacker:"rex",target:"mig29",weapon:"QAAM"}]},{summary:"LOSSES / RESULT PENDING",events:[{kind:"destroy",target:"mig29"}]},{summary:"FINAL POSITION / RESULT",events:[]}];function ii(){return Xn.length}function Si(){return Xn.length-1}function Im(){return typeof Ct<"u"&&Ct?Pl:Si()}function zs(n,e){return tw(n.destroyedAtTurn,e)}function Id(n){return ot.find(e=>e.id===n)?.label??n.toUpperCase()}function iw(n){return n.kind==="attack"?`${Id(n.attacker)} -> ${Id(n.target)} / ${n.weapon}`:`${Id(n.target)} DESTROYED`}function Dr(n){const e=Math.max(0,Math.min(n,Si())),t=Xn[e];return{turn:e,summary:t.summary,events:t.events,units:ot.map(i=>({unit:i,position:Xa(i,i.positions[Math.min(e,i.positions.length-1)],Et),status:zs(i,e)}))}}ot.forEach(n=>{n.positions.length!==ii()&&console.warn(`[scenario] ${n.label} has ${n.positions.length} keyframes but the scenario declares ${ii()} turns`)});let De=0,he=null;const bi=new Map,Is=new Map,Rs=new Map;let Zc,so=null,Cu=-1/0,Kc="",Nd=[];const rw=.675,Ud=new mn().setFromEuler(new ni(-Math.PI/2,0,0)),Nm=22,ti=1.5,op=7.2;function sw(){const n=[];for(let e=0;e<=64;e++){const t=e/64*Math.PI*2;n.push(new b(Math.cos(t)*op,Math.sin(t)*op,0))}return n}function ow(n,e){const t=RM(n.icon,e);return t.scale.setScalar(rw),t.traverse(i=>{i.userData.unit=n}),t}function ah(n,e){const t=n.icon==="ground"?Math.PI:0;if(bn())return ga(xp({...n,destroyedAtTurn:n.attitudes?.[e]?void 0:n.destroyedAtTurn},e,{epsilon:.001}).yaw+t);const i=Math.min(e,n.positions.length-1),r=n.attitudes?.[i];if(r)return ga(r.yaw+t);const s=n.positions[Math.max(0,i-1)],o=n.positions[Math.min(n.positions.length-1,i+1)],a=o.x-s.x,c=o.z-s.z;return Math.hypot(a,c)<.001?null:ga(Math.atan2(-a,-c)+t)}const Fd=.6,ap=2,cp=new b(0,1,0),aw=new b(1,0,0),cw=new b(0,0,1);function ga(n){return Math.atan2(Math.sin(n),Math.cos(n))}function lp(n,e){const t=n.positions[e],i=n.positions[e+1];if(!t||!i)return null;const r=i.x-t.x,s=i.z-t.z;return Math.hypot(r,s)<.001?null:Math.atan2(r,s)}function ch(n,e){if(n.icon!=="air-filled"&&n.icon!=="air-outline")return null;if(bn())return xp({...n,destroyedAtTurn:n.attitudes?.[e]?void 0:n.destroyedAtTurn},e,{epsilon:.001,maxBank:Fd,rollGain:ap});const t=Math.min(e,n.positions.length-1),i=n.attitudes?.[t];if(i)return i;const r=n.positions[Math.max(0,t-1)],s=n.positions[Math.min(n.positions.length-1,t+1)],o=s.x-r.x,a=s.y-r.y,c=s.z-r.z,l=Math.hypot(o,c);if(l<.001&&Math.abs(a)<.001)return null;const u=Math.atan2(-o,-c),h=Math.atan2(a,Math.max(l,.001)),d=lp(n,t-1),f=lp(n,t),g=d===null||f===null?0:jt.clamp(ap*ga(f-d),-Fd,Fd);return{yaw:u,pitch:h,roll:g}}function Uo(n){const e=new Sn;e.userData.unit=n,e.userData.pickable=!0;const t=pa[n.faction],i=n.icon==="ground"||n.icon==="ship";let r=null;i||(r=new Ee(new Ml(2.2,3.3,20),new yn({color:t,transparent:!0,opacity:.8,side:fn})),r.rotation.x=-Math.PI/2,r.userData.unit=n,e.add(r));const s=new rn(new Ft,new yi({color:t,transparent:!0,opacity:.8}));s.userData.unit=n,e.add(s);const o=ow(n,t),a=new rn(new Ft().setFromPoints(sw()),new yi({color:t,transparent:!0,opacity:.9,depthTest:!1}));a.visible=!1,a.userData.unit=n,o.add(a);const c=hm(t);c.userData.unit=n,o.add(c),e.add(o);const l=2.6,u=new yi({color:t,transparent:!0,opacity:.9,depthTest:!1}),h=new Sn;h.add(new rn(new Ft().setFromPoints([new b(-l,0,-l),new b(l,0,l)]),u)),h.add(new rn(new Ft().setFromPoints([new b(-l,0,l),new b(l,0,-l)]),u)),h.visible=!1,e.add(h);const d=[];o.traverse(m=>{const p=m.material;!p||Array.isArray(p)||d.push({material:p,baseOpacity:p.opacity})});const f=document.createElement("div");f.className=`world-label ${n.faction}`,f.textContent=n.label,f.style.cssText=`position:absolute; left:0; top:0; transform:translate(0, 0); color:#${t.toString(16).padStart(6,"0")}; text-shadow:0 0 7px #${t.toString(16).padStart(6,"0")}; font:14px 'Share Tech Mono',monospace; white-space:nowrap; pointer-events:none;`;const g=new vn;g.userData.dom=f,e.add(g),e.userData.parts={base:r,pole:s,icon:o,label:g,wreck:h,tgtRing:a,escortMarker:c,iconMaterials:d,labelFade:1};const _=bM(t);_.root.traverse(m=>{m.userData.unit=n}),e.add(_.root),Is.set(n.id,_),tn.add(e),bi.set(n.id,e)}function lh(n,e){const{unit:t,status:i}=n,r=bi.get(t.id),s=r.userData.parts,o=i==="wreck",a=!(typeof Ct<"u"&&Ct)&&!bn()&&o&&t.destroyedAtTurn!==void 0,c=Xa(t,a?t.positions[Math.min(t.destroyedAtTurn,t.positions.length-1)]:n.position,Et),l=t.intangible?c.y:Et(c.x,c.z);r.position.set(c.x,l,c.z);const u=Math.max(0,c.y-l),h=El(t,c,Et,ti).y-l,d=s.base===null?h+Nm-ti:Math.max(u,.6);if(s.base&&(s.base.visible=!o),s.icon.visible=!o,s.pole.visible=!o,s.wreck.visible=i!=="active",s.wreck.position.y=h,s.tgtRing.visible=t.tgt===!0&&i==="active",s.escortMarker.visible=t.escort===!0&&t.faction!=="enemy"&&i==="active",!o){let m=s.pole.geometry.getAttribute("position");m?(m.setXYZ(0,0,.2,0),m.setXYZ(1,0,d,0),m.needsUpdate=!0):(m=new Dt([0,.2,0,0,d,0],3),s.pole.geometry.setAttribute("position",m)),s.pole.geometry.computeBoundingSphere(),s.pole.geometry.boundingBox&&s.pole.geometry.computeBoundingBox()}const f=s.icon;f.position.y=h;const g=ch(t,e);if(g===null){const m=ah(t,e);m===null?f.quaternion.copy(Ud):f.quaternion.setFromAxisAngle(cp,m).multiply(Ud)}else f.quaternion.setFromAxisAngle(cp,g.yaw).multiply(new mn().setFromAxisAngle(aw,g.pitch)).multiply(new mn().setFromAxisAngle(cw,g.roll)).multiply(Ud);const _=i==="destroyed";s.iconMaterials.forEach(({material:m,baseOpacity:p})=>{m.transparent||(m.transparent=!0,m.needsUpdate=!0),m.userData.baseDepthTest??=m.depthTest,m.depthTest=t.intangible?!1:m.userData.baseDepthTest,m.opacity=p*(_?.3:1)*(t.hidden?.35:1)});for(const m of[s.base,s.pole,...s.wreck.children]){const p=m?.material;!p||Array.isArray(p)||(p.userData.hiddenBaseOpacity??=p.opacity,p.opacity=p.userData.hiddenBaseOpacity*(t.hidden?.35:1))}s.labelFade=(o?0:_?.5:1)*(t.hidden?.5:1),s.label.position.y=d}function Um(n,e){const t=new Sn;if(t.userData.trail=!0,n.length<2)return t;const i=[],r=2.3;n.forEach((c,l)=>{const u=n[Math.max(0,l-1)],h=n[Math.min(n.length-1,l+1)],d=new b().subVectors(h,u).normalize(),f=new b(-d.z,0,d.x).normalize().multiplyScalar(r*(.45+l/n.length*.55));i.push(c.x+f.x,c.y+.5,c.z+f.z,c.x-f.x,c.y+.5,c.z-f.z)});const s=[];for(let c=0;c<n.length-1;c++)s.push(c*2,c*2+1,c*2+2,c*2+1,c*2+3,c*2+2);const o=new Ft;o.setAttribute("position",new Dt(i,3)),o.setIndex(s),o.computeVertexNormals();const a=new yn({color:e,transparent:!0,opacity:.28,side:fn,depthWrite:!1,blending:Od});return t.add(new Ee(o,a)),t}function dh(n,e){return bn()?Rt()?.sealedScenes?.find(t=>t.turn<=e&&t.units.some(i=>i.id===n.id))?.turn??e:0}function uh(n,e,t){const i=yp(n.positions,n.trackPoints??[],e,t).map(a=>new b(a.x,a.y,a.z));if(i.length<2)return[];const r=new eh(i,!1,"centripetal"),s=[];let o=0;for(let a=e;a<t;a++){const c=(n.trackPoints??[]).filter(g=>g.segment===a).length+1,l=o/(i.length-1),u=(o+c)/(i.length-1),h=Math.max(24,c*16),d=i.slice(o,o+c+1).every(g=>g.distanceToSquared(i[o])<1e-12),f=Array.from({length:h+1},(g,_)=>d?i[o].clone():r.getPoint(jt.lerp(l,u,_/h)));s.push({segment:a,points:f,start:l,end:u,curve:r}),o+=c}return s}function Fm(n,e){const{unit:t,status:i}=n;if(i==="wreck"||document.querySelector("#trail-display").value==="none")return;const r=t.destroyedAtTurn===void 0?e:Math.min(e,t.destroyedAtTurn),s=document.querySelector("#trail-display").value==="recent",o=Math.max(1,Math.floor(Number(document.querySelector("#trail-turns").value)||1)),a=dh(t,e),c=Math.max(a,s?Math.max(0,r-o):0),l=uh(t,a,r).filter(h=>h.segment>=c).flatMap((h,d)=>d?h.points.slice(1):h.points);!t.intangible&&(t.icon==="ground"||t.icon==="ship")&&l.forEach(h=>{h.y=Et(h.x,h.z)+ti});const u=Um(l,pa[t.faction]);u.userData.trail=t.id,tn.add(u)}const Fo=document.createElement("div");Fo.className="labels";Fo.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;contain:strict;";document.querySelector("#app").appendChild(Fo);function ko(){for(const[,n]of bi){const e=n.userData.parts.label,t=e.userData.dom;t.dataset.unitId=n.userData.unit.id,Fo.appendChild(t),e.userData.domObject=t}}let ke=!1,Ot=!1;const _n=[{id:"route-1",name:"ROUTE 1",waypoints:[]}];let Cn="route-1",La=2,hl=1,zi="",Bi="",ln=null,Ia=[],Ri=new Sn;tn.add(Ri);function fl(){return _n.find(n=>n.id===Cn)??_n[0]}function To(){return fl()?.waypoints??[]}const pl=document.createElement("div");pl.className="waypoint-labels";document.querySelector("#app").appendChild(pl);const Pu=[];let ml=1,gl=1,Vt=!1,Ln=!1,zt=!1,nt=null,Zi=new Sn;tn.add(Zi);let Pt=null,Qr=1;const ut=new Set;function Ii(){return ot.filter(n=>ut.has(n.id))}function rr(){return Ii().filter(n=>qa(n))}function Ao(){const n=rr();return n.reduce((e,t)=>e.add(Vn(t)),new b).divideScalar(n.length||1)}function qn(n){St?.clearSelection(),nt=null,zt=!1,ut.clear(),n.forEach(e=>ut.add(e.id)),he=n[n.length-1]??null,n.length>1&&(Hi="translate"),lt(),rt()}function Al(n,e=!1){typeof en<"u"&&en?.pick("unit",n.id)||(e?(ut.has(n.id)?ut.delete(n.id):ut.add(n.id),qn(Ii())):qn([n]))}function Na(n){if(!hi()||!ke)return;const e=rr();if(!e.length)return;const t=Bs();if(n.lengthSq()<1e-12&&!e.some(r=>Os(r)&&t.some(s=>{const o=r.positions[s];return o.y!==Et(o.x,o.z)})))return;const i=e.filter(r=>Pn(r)&&!r.intangible);i.length&&(n.y=Math.max(n.y,...i.flatMap(r=>t.map(s=>{const o=r.positions[s];return Math.max(0,Et(o.x+n.x,o.z+n.z))-o.y})))),Mn("draft")&&(e.forEach(r=>{at()&&!bn()&&(r.routeBinding=void 0),t.forEach(s=>r.positions[s].add(n)),at()&&r.trackPoints?.forEach(s=>{t.includes(s.segment)&&t.includes(s.segment+1)&&(s.x+=n.x,s.y+=n.y,s.z+=n.z)}),vl(r,t)}),lt(),rt())}let Yn;const Rl=()=>({groups:[],markers:[],drawings:[]}),Wi=()=>Yn??Rl();let Bn,km,St,en,Du,Xr,_l="",Oi=null;const Cl=document.createElement("div");Cl.className="editor-tool-labels";document.querySelector("#app").appendChild(Cl);const lw=pM(Cl);let ve=null,Ct=!1,Jc=null,Ua=null,Fa=null,Pl=0,Qc={edit:!1,terrain:!1};const Cs=new Map;let Tr=null,Yr=null;function Rt(){if(!ve)return;if(Yr?.store===ve&&Yr.revision===ve.revision)return Yr.session;const n=ve.read(),e=n.project.sessions.find(t=>t.id===(n.editor.sessionId??"session-working"));return Yr={store:ve,revision:ve.revision,session:e},e}function bn(){return Rt()?.workflow?.mode==="formal"}function at(){if(typeof Ct<"u"&&Ct)return!1;const n=Rt();return n?.status!=="finished"&&(!n?.workflow||Pi())}function _i(){return typeof Ct<"u"&&Ct||at()}function Pi(){const n=Rt();return!!n?.workflow&&n.status!=="finished"&&n.turns.length===n.workflow.committedTurns+1&&De===n.workflow.committedTurns}function hi(){return at()||Pi()}function Ht(){return!!je||Le.dragging||!!Pt||!!Rn||!!gi||!!St?.isPicking()}function kd(n,e){if(!_i()||!ke||je||Le.dragging||Pt||Rn||gi||!Mn("tools"))return!1;Yn??=Rl(),e(Yn,ot);const t=on(n);return lt("tools"),rt(),t}function dw(n){const e=ot.filter(s=>s.groupId===n.id);if(!at()||!ke||!e.length||Ht()||!Mn())return;Yn??=Rl();const t={...n,id:`group-${crypto.randomUUID()}`,name:`${n.name} 副本`.slice(0,128)};Yn.groups.push(t);const i=ph().spacing,r=e.map(s=>{const o=$a(Ya(s)),a=Qr++;return o.id=`unit-${a}`,o.label=`${s.label}-COPY-${a}`,o.groupId=t.id,o.routeBinding=void 0,delete o.player,delete o.playerActions,o.positions.forEach(c=>{c.x+=i,c.z+=i}),o.trackPoints?.forEach(c=>{c.x+=i,c.z+=i}),ot.push(o),Uo(o),o});ko(),qn(r),Ns("translate")}function hh(n,e=.5){const t=new b(n.x,n.y,n.z).multiplyScalar(et),i=yt.position.clone().sub(It.target).normalize();i.lengthSq()<.1&&i.set(0,.6,1).normalize();const r=Math.max(90,e*et/Math.sin(jt.degToRad(yt.fov)/2)*1.4);It.target.copy(t),yt.position.copy(t).addScaledVector(i,Math.min(r,It.maxDistance)),It.update()}function dp(n){const e=ot.filter(r=>n.includes(r.id)).map(r=>Vn(r));if(!e.length)return;const t=e.reduce((r,s)=>r.add(s),new b).divideScalar(e.length),i=Math.max(15,...e.map(r=>r.distanceTo(t)))/et;hh({x:t.x/et,y:t.y/et,z:t.z/et},i)}function qa(n){return hi()&&(Pi()||zs(n,De)==="active")}function fh(n){return hi()&&(at()||n.destroyedAtTurn===void 0||n.destroyedAtTurn===De)}function on(n="Edit scenario",e=Tr){if(!ve||!e)return!0;if(Le.dragging||Pt)return!1;try{const t=Om();return Tr=null,ve.commit(t,n,e),!0}catch(t){return Tr=null,sr(ve.read()),he=ot.find(i=>ut.has(i.id))??null,console.error("Scenario transaction rolled back",t),Qt("编辑未保存："+(t instanceof Error?t.message:String(t))),!1}}function Ro(n,e){if(n===e)return!0;if(n===null||e===null||typeof n!="object"||typeof e!="object")return!1;if(Array.isArray(n)||Array.isArray(e))return!Array.isArray(n)||!Array.isArray(e)||n.length!==e.length?!1:n.every((s,o)=>Ro(s??null,e[o]??null));const t=n,i=e,r=Object.keys(t).filter(s=>t[s]!==void 0);return r.length!==Object.keys(i).filter(s=>i[s]!==void 0).length?!1:r.every(s=>Object.prototype.hasOwnProperty.call(i,s)&&Ro(t[s],i[s]))}function uw(n,e){const t={...n,editor:{...n.editor,currentTurn:e.currentTurn}},i=zu(t,Ou(t));if(i.layout=e.layout,!Ro(e,i))throw new Error("已提交回合保留原样；请在末尾草稿编辑场景");return{...n,editor:{...t.editor,activeRouteId:e.activeRouteId}}}function Om(n=Dl()){if(typeof Ct<"u"&&Ct&&ve){const d=ve.read(),f=d.project.sessions.find(g=>g.id===d.editor.sessionId);return f.sceneTools=structuredClone(n.sceneTools??Rl()),d}if(ve&&(Rt()?.status==="finished"||bn()&&!Pi()))return uw(ve.read(),n);const e=mg(n,n.layout??{size:_t.size,extent:_t.extent,extentZ:_t.extentZ});if(!ve)return e;const t=ve.read(),i=t.project,r=t.editor.sessionId??"session-working",s=i.sessions.find(d=>d.id===r),o=i.maps.find(d=>d.id===s.mapRef.id&&d.revision===s.mapRef.revision),a=e.project.sessions[0];if(a.id=s.id,a.name=s.name,a.taskRef=s.taskRef,a.mapRef=s.mapRef,a.resourceSnapshot=s.resourceSnapshot,a.rulesRevision=s.rulesRevision,a.status=s.status,s.rulesRef&&(a.rulesRef={...s.rulesRef}),s.rulesSnapshot&&(a.rulesSnapshot=structuredClone(s.rulesSnapshot)),a.workflow=s.workflow,a.mapEditRef=s.mapEditRef,s.workflow){a.sealedScenes=gg(s),a.turns=s.turns.map((f,g)=>g===De?a.turns[g]:f);const d=zu(t,Ou(t));a.units.forEach(f=>{const g=s.units.find(m=>m.id===f.id),_=d.units.find(m=>m.id===f.id);if(g){for(let m=0;m<De;m++)f.positions[m]=g.positions[m],f.attitudes&&(f.attitudes[m]=g.attitudes?.[m]??null);_&&Ro(n.units.find(m=>m.id===f.id)?.positions[De],_.positions[De])&&(f.positions[De]=g.positions[De])}})}const c=e.project.maps[0];c.id=o.id,c.revision=o.revision,c.name=o.name;const l=d=>d.id===o.id&&d.revision===o.revision,u=c.terrain.size!==o.terrain.size||c.terrain.widthKm!==(o.terrain.widthKm??o.terrain.extentKm*2)||c.terrain.heightKm!==(o.terrain.heightKm??o.terrain.extentKm*2)||!Ro(c.urban,o.urban)||c.terrain.heightsKm.some((d,f)=>Math.abs(d-o.terrain.heightsKm[f])>1e-7),h=!!s.workflow||i.tasks.some(d=>l(d.mapRef))||i.sessions.some(d=>d.id!==r&&l(d.mapRef));return u&&h&&(c.revision=Math.max(...i.maps.filter(d=>d.id===o.id).map(d=>d.revision))+1,a.mapRef={id:c.id,revision:c.revision}),e.project={...i,maps:u?h?[...i.maps,c]:i.maps.map(d=>l(d)?c:d):i.maps,sessions:i.sessions.map(d=>d.id===r?a:d)},e.editor.sessionId=r,e}function sr(n){const e=Ou(n);(_t.size!==e.size||_t.extent!==e.extent||_t.extentZ!==e.extentZ)&&(_t=new gp(e.size,e.extent,e.extentZ),nr=new vp(e.size,e.extent,e.extentZ),Rm(e.extent,e.extentZ??e.extent),ja(),gh()),hw(zu(n,e))}function Ya(n){return{id:n.id,label:n.label,faction:n.faction,kind:n.kind,icon:n.icon,positions:n.positions.map(e=>({x:e.x,y:e.y,z:e.z})),attitudes:n.attitudes?.map(e=>e?{...e}:null),destroyedAtTurn:n.destroyedAtTurn,tgt:n.tgt,...n.escort===void 0?{}:{escort:n.escort},...n.hidden===void 0?{}:{hidden:n.hidden},...n.intangible===void 0?{}:{intangible:n.intangible},groupId:n.groupId,aircraftRef:n.aircraftRef?{...n.aircraftRef}:void 0,spRefs:n.spRefs?.map(e=>({...e})),...n.loadout===void 0?{}:{loadout:n.loadout.map(e=>({slot:e.slot,weaponRef:{...e.weaponRef}}))},...n.player===void 0?{}:{player:{...n.player}},...n.playerActions===void 0?{}:{playerActions:structuredClone(n.playerActions)},routeBinding:n.routeBinding?{...n.routeBinding,offset:n.routeBinding.offset?{...n.routeBinding.offset}:void 0}:void 0,trackPoints:n.trackPoints?.map(e=>({...e}))}}function $a(n){return{id:n.id,label:n.label,faction:n.faction,kind:n.kind,icon:n.icon,positions:n.positions.map(e=>new b(e.x,e.y,e.z)),attitudes:n.attitudes?.map(e=>e?{...e}:null),destroyedAtTurn:n.destroyedAtTurn,tgt:n.tgt,...n.escort===void 0?{}:{escort:n.escort},...n.hidden===void 0?{}:{hidden:n.hidden},...n.intangible===void 0?{}:{intangible:n.intangible},groupId:n.groupId,aircraftRef:n.aircraftRef?{...n.aircraftRef}:void 0,spRefs:n.spRefs?.map(e=>({...e})),...n.loadout===void 0?{}:{loadout:n.loadout.map(e=>({slot:e.slot,weaponRef:{...e.weaponRef}}))},...n.player===void 0?{}:{player:{...n.player}},...n.playerActions===void 0?{}:{playerActions:structuredClone(n.playerActions)},routeBinding:n.routeBinding?{...n.routeBinding,offset:n.routeBinding.offset?{...n.routeBinding.offset}:void 0}:void 0,trackPoints:n.trackPoints?.map(e=>({...e}))}}function Dl(){return{units:ot.map(Ya),turns:Xn.map(n=>({summary:n.summary,events:n.events.map(e=>({...e}))})),currentTurn:De,...Yn?{sceneTools:structuredClone(Yn)}:{},layout:{size:_t.size,extent:_t.extent,extentZ:_t.extentZ},terrain:_t.data.slice(),urban:nr.data.slice(),urbanSeed:Pa,urbanAngle:Ts,routes:_n.map(n=>({...n,waypoints:n.waypoints.map(e=>({...e}))})),activeRouteId:Cn}}function Kr(n){n.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i&&i.dispose()}),tn.remove(n)}function zm(n){const e=bi.get(n.id);if(!e)return;e.userData.parts.label.userData.dom.remove(),Kr(e),bi.delete(n.id),Is.delete(n.id),Rs.delete(n.id),Qa()}function hw(n){Yn=n.sceneTools?structuredClone(n.sceneTools):void 0,_n.splice(0,_n.length,...n.routes.map(e=>({...e,waypoints:e.waypoints.map(t=>({...t}))}))),Cn=n.activeRouteId,nt=null,Vt=!1,zt=!1,_t.data.set(n.terrain),nr.data.set(n.urban),Pa=n.urbanSeed,Ts=n.urbanAngle,Cr=!0,dt("#urban-seed").value=String(Pa),dt("#urban-angle").value=String(jt.radToDeg(Ts)),Xn.splice(0,Xn.length,...n.turns.map(e=>({summary:e.summary,events:e.events.map(t=>({...t}))}))),De=Math.min(n.currentTurn,Si());for(const e of[...bi.values()])Kr(e);bi.clear(),Is.clear(),Rs.clear(),Qa(),Fo.replaceChildren(),ot.length=0,n.units.forEach(e=>ot.push($a(e))),ot.forEach(Uo),ko()}function Mn(n="author"){return!ke||(n==="tools"?!_i():n==="author"?!at():!hi())||!on()?!1:(Tr=ve?.read()??null,!0)}function Bm(n){if(!ve||Le.dragging||Pt||je||!at()&&!(Pi()&&n.type==="set-turn-summary"&&n.turn===De&&n.sessionId===Rt()?.id)||!on())return;const e=[...ut];ve.dispatch(n),sr(ve.read()),ut.clear(),e.filter(t=>ot.some(i=>i.id===t)).forEach(t=>ut.add(t)),he=Ii().at(-1)??null,lt(),rt()}function Ll(){if(je||Le.dragging||Pt)return;on();const n=ve?.undo();if(!n)return;const e=[...ut];sr(n),ut.clear(),e.filter(t=>ot.some(i=>i.id===t)).forEach(t=>ut.add(t)),he=Ii().at(-1)??null,lt(),rt()}function Il(){if(je||Le.dragging||Pt)return;on();const n=ve?.redo();if(!n)return;const e=[...ut];sr(n),ut.clear(),e.filter(t=>ot.some(i=>i.id===t)).forEach(t=>ut.add(t)),he=Ii().at(-1)??null,lt(),rt()}function fw(n){zm(n),Uo(n),ko()}function Lu(n){Qa();const e={unit:n,position:Vn(n),status:zs(n,De)};lh(e,De),tn.children.filter(t=>t.userData.trail===n.id).forEach(t=>Kr(t)),Fm(e,De),he===n&&ut.size<=1&&Xm(e,Dr(De))}function Vn(n,e=!1){const t=n.positions[Math.min(De,n.positions.length-1)];return e?t:Xa(n,t,Et)}function vl(n,e=Bs()){Os(n)&&(e.forEach(t=>{const i=n.positions[t];i.y=Et(i.x,i.z)}),at()&&n.trackPoints?.forEach(t=>{e.includes(t.segment)&&e.includes(t.segment+1)&&(t.y=Et(t.x,t.z))}))}function pw(){!at()||Rt()?.mapEditRef||!ke||Le.dragging||(Mi(!0),dn=!1,es(),ut.clear(),he=null,je={id:`unit-${Qr}`,label:`NEW-${String(Qr).padStart(2,"0")}`,faction:"enemy",kind:"UNKNOWN",icon:"air-outline",tgt:!1,positions:Array.from({length:ii()},()=>new b(0,60,0)),attitudes:Array.from({length:ii()},()=>({yaw:0,pitch:0,roll:0}))},Nl(),rt())}function mw(){if(!at()||!ke)return;const n=Ii();if(!n.length||je||Le.dragging||!Mn())return;const e=new Set(n.map(t=>t.id));Yn?.links&&(Yn.links=Yn.links.filter(t=>!e.has(t.fromUnitId)&&!(t.to.kind==="unit"&&e.has(t.to.id)))),n.forEach(t=>{zm(t),ot.splice(ot.indexOf(t),1)}),Xn.forEach((t,i)=>{(!bn()||i===De)&&(t.events=t.events.filter(r=>!e.has(r.target)&&(r.kind!=="attack"||!e.has(r.attacker))))}),qn([])}function ph(){const n=Math.floor(Number(dt("#create-count").value)),e=Number(dt("#create-spacing").value);return{count:Number.isFinite(n)?jt.clamp(n,1,100):1,spacing:Number.isFinite(e)?jt.clamp(e,1,1e3):20}}function Hm(){if(!at()||!ke)return;const n=Ii();if(!n.length||je||Le.dragging)return;const{count:e,spacing:t}=ph();if(!Mn())return;const i=[];for(let r=0;r<e;r++)for(const s of n){const o=$a(Ya(s)),a=Qr++;o.id=`unit-${a}`,o.label=`${s.label}-COPY-${a}`,delete o.player,delete o.playerActions,o.routeBinding=void 0,o.trackPoints?.forEach(c=>{c.x+=t*(r+1),c.z+=t*(r+1)}),o.positions.forEach(c=>{c.x+=t*(r+1),c.z+=t*(r+1)}),i.push(o),ot.push(o),Uo(o)}ko(),qn(i),Ns("translate")}ot.forEach(Uo);ko();function lt(n){Qa(),on(),ve&&!Tr&&!Le.dragging&&!Pt&&ve.setEditor({currentTurn:De,activeRouteId:Cn,sessionId:ve.read().editor.sessionId??"session-working"}),n!=="tools"&&_h(),Gm();const e=Dr(De);St?.sync(),typeof en<"u"&&(Le.dragging?en?.update():en?.sync()),n!=="tools"&&(tn.children.filter(i=>i.userData.trail).forEach(i=>{tn.remove(i),i.traverse(r=>{(r instanceof Ee||r instanceof rn)&&(r.geometry.dispose(),Array.isArray(r.material)?r.material.forEach(s=>s.dispose()):r.material.dispose())})}),e.units.forEach(i=>{lh(i,e.turn),Fm(i,e.turn)})),document.querySelector("#turn-title").textContent=`TURN ${String(e.turn+1).padStart(2,"0")}`,document.querySelector("#turn-indicator").textContent=`${String(e.turn+1).padStart(2,"0")} / ${String(Im()+1).padStart(2,"0")}`,document.querySelector("#turn-summary").textContent=e.summary,document.querySelector("#unit-count").textContent=String(e.units.length).padStart(2,"0"),document.querySelector("#event-list").textContent=e.events.length===0?"NO CONTACT":e.events.map(iw).join(`
`);const t=e.units.find(i=>i.unit===he);t?Xm(t,e):(he=null,Nl()),ut.size>1&&(document.querySelector("#selected-name").textContent=`${ut.size} UNITS`,document.querySelector("#selected-detail").textContent=Ii().map(i=>i.label).join(" / "),document.querySelector("#distance-readout").textContent=`${rr().length} MOVABLE / FORMATION MOVE`,document.querySelector("#attitude-readout").textContent="");for(const[i,r]of bi)r.userData.parts.label.userData.dom.classList.toggle("unit-selected",ke&&ut.has(i))}function Vm(){const n=Dr(De),e=n.units.find(s=>s.unit.id===zi),t=n.units.find(s=>s.unit.id===Bi),i=Ri.userData.rangeCenter;if(e&&i){const s=e.position.clone().sub(i);for(const o of Ri.children)o.userData.rangeCentered&&o.position.add(s);i.copy(e.position)}const r=Ri.children.find(s=>s.userData.rangeConnector);if(e&&t&&e.unit.id!==t.unit.id&&r){const s=r.geometry.getAttribute("position");s.setXYZ(0,e.position.x,e.position.y,e.position.z),s.setXYZ(1,t.position.x,t.position.y,t.position.z),s.needsUpdate=!0,r.geometry.computeBoundingSphere();const o=ku(e.position,t.position,"slant",mh());document.querySelector("#range-result").textContent=`${o.band} / SLANT
HORIZONTAL ${o.horizontalKm.toFixed(2)} km
DELTA ALT ${o.altitudeDeltaKm.toFixed(2)} km
SLANT ${o.slantKm.toFixed(2)} km${e.status!=="active"||t.status!=="active"?`
LOST UNIT / MEASUREMENT ONLY`:""}`}}function mh(){const n=Rt(),e=n?.sealedScenes?.find(t=>t.turn===De);return _g(e?e.rulesSnapshot:n?.rulesSnapshot)}function Gm(){const n=mh(),e=Dr(De);e.units.some(d=>d.unit.id===zi)||(zi=""),e.units.some(d=>d.unit.id===Bi)||(Bi="");for(const[d,f]of[["#range-attacker-name",zi],["#range-target-name",Bi]]){const g=e.units.find(_=>_.unit.id===f);document.querySelector(d).textContent=g?`${g.unit.label} [${g.unit.id}] / ${g.status.toUpperCase()}`:"尚未选择"}for(const[d,f]of[["#range-attacker-select",zi],["#range-target-select",Bi]]){const g=document.querySelector(d);g&&(g.replaceChildren(...["",...e.units.map(_=>_.unit.id)].map(_=>{const m=document.createElement("option");m.value=_;const p=e.units.find(T=>T.unit.id===_);return m.textContent=p?`${p.unit.label} · ${p.unit.kind}`:"选择单位",m})),g.value=f)}document.querySelector("#range-pick-state").textContent=ln?`${ln==="attacker"?"攻击方":"目标"}选择中`:"";for(const d of["attacker","target"])document.querySelector(`#range-pick-${d}`).setAttribute("aria-pressed",String(ln===d));const t=document.querySelector("#range-candidates");t.hidden=!Ia.length,t.replaceChildren(...Ia.flatMap(d=>{const f=e.units.find(_=>_.unit.id===d);if(!f)return[];const g=document.createElement("button");return g.textContent=`${f.unit.label} [${d}] / ${f.unit.kind} / ${Tm[f.unit.faction]} / ${f.status.toUpperCase()}`,g.addEventListener("click",()=>Wm(f.unit)),[g]}));const i="slant";document.querySelector("#range-mode-readout").textContent=i.toUpperCase();const r=e.units.find(d=>d.unit.id===zi),s=e.units.find(d=>d.unit.id===Bi),o=document.querySelector("#range-result"),a=document.querySelector("#range-fill").checked,c=document.querySelector("#range-rings").checked,l=n.find(d=>d.name===document.querySelector("#range-fill-band").value)??n[0],u=jt.clamp(Number(document.querySelector("#range-fill-opacity").value)||.12,.02,.6),h=JSON.stringify([r?.unit.id,s?.unit.id,n,a,c,l.name,u]);if(!r||!s)o.textContent="SELECT ATTACKER AND TARGET";else if(r===s)o.textContent="ATTACKER AND TARGET MUST DIFFER";else{const d=ku(r.position,s.position,i,n);o.textContent=`${d.band} / ${i.toUpperCase()}
HORIZONTAL ${d.horizontalKm.toFixed(2)} km
DELTA ALT ${d.altitudeDeltaKm.toFixed(2)} km
SLANT ${d.slantKm.toFixed(2)} km${r.status!=="active"||s.status!=="active"?`
LOST UNIT / MEASUREMENT ONLY`:""}`}if(r&&a&&!s&&(o.textContent=`${l.name} / 3D填充半径 ${l.maxKm} km`),Ri.userData.rangeVisualKey===h){Vm();return}if(Kr(Ri),Ri=new Sn,tn.add(Ri),Ri.userData.rangeVisualKey=h,r&&s&&r!==s){const d=ma([r.position,s.position],15332072,1,.75);d.userData.rangeConnector=!0,Ri.add(d)}if(r&&a){const d=new Ee(new Zr(l.maxKm*et,48,32),new yn({color:l.color,transparent:!0,opacity:u,depthWrite:!1,side:Ar}));d.position.copy(r.position),d.userData.rangeFill={band:l.name,radiusKm:l.maxKm},d.userData.rangeCentered=!0,Ri.add(d)}if(r&&c)for(const d of n){const f=d.maxKm*et,g=Array.from({length:129},(m,p)=>{const T=p/128*Math.PI*2;return new b(r.position.x+Math.cos(T)*f,r.position.y,r.position.z+Math.sin(T)*f)}),_=ma(g,d.color,1,.5);_.userData.rangeCentered=!0,Ri.add(_)}r&&(Ri.userData.rangeCenter=r.position.clone())}function ei(){ln=null,Ia=[],It.enabled=!0,vt.domElement.style.cursor=Ot?"crosshair":"",xo()}function Wm(n){!ln||!ot.includes(n)||(ln==="attacker"?zi=n.id:Bi=n.id,ei(),lt())}function gw(n){if(!(Le.dragging||Pt||je)){if(St?.cancel(),ln===n){ei(),lt();return}Mi(!0),dn=!1,Ot&&Gi(!1),Vt=zt=Ln=!1,nt=null,ln=n,Ia=[],Le.detach(),It.enabled=!0,vt.domElement.style.cursor="crosshair",lt(),rt()}}function _w(n,e){Ht()||sn||e&&!Dr(De).units.some(t=>t.unit.id===e)||(n==="attacker"?zi=e:Bi=e,ei(),lt())}for(const n of["attacker","target"])document.querySelector(`#range-pick-${n}`).addEventListener("click",()=>gw(n)),document.querySelector(`#range-${n}-select`).addEventListener("change",e=>_w(n,e.target.value));document.querySelector("#range-use-selected").addEventListener("click",()=>{!he||Le.dragging||(zi=he.id,ei(),lt())});document.querySelector("#range-clear").addEventListener("click",()=>{zi=Bi="",ei(),lt()});for(const n of["#range-rings","#range-fill","#range-fill-band","#range-fill-opacity"])document.querySelector(n).addEventListener("change",()=>lt());document.querySelector("#edit-panel").addEventListener("click",n=>{const e=n.target instanceof Element?n.target:null;ln&&!e?.closest(".range-panel")&&(ei(),lt())},!0);function Nl(){document.querySelector("#selected-name").textContent="NONE",document.querySelector("#selected-detail").textContent="",document.querySelector("#distance-readout").textContent="—",document.querySelector("#attitude-readout").textContent="—"}function Xm(n,e){const{unit:t,status:i}=n;he=t;const r=n.position,s=[Tm[t.faction],i.toUpperCase()],o=Wi().groups.find(g=>g.id===t.groupId);o&&s.push(`编组:${o.name}`),t.tgt&&s.push("TGT"),t.escort&&t.faction!=="enemy"&&s.push("ESCORT / 护卫目标"),document.querySelector("#selected-name").textContent=t.label,document.querySelector("#selected-detail").textContent=`${t.kind} / ${s.join(" / ")}`;const a=e.units.find(g=>g.unit.id===Bi),l=a&&a.unit!==t?ku(r,a.position,"slant",mh()):null;document.querySelector("#distance-readout").textContent=l?`TO ${a.unit.label}: ${l.distanceKm.toFixed(2)} km / ${l.band}`:"—";const u=ch(t,e.turn),h=g=>g*180/Math.PI,d=g=>`${h(g)>=0?"+":""}${h(g).toFixed(1)}°`,f=document.querySelector("#attitude-readout");if(u===null){const g=ah(t,e.turn);f.textContent=g===null?"FACING  FIXED":`FACING ${d(g)}  (FLAT)`}else f.textContent=`YAW ${d(u.yaw)}  PITCH ${d(u.pitch)}  ROLL ${d(u.roll)}`}function uo(n){if(St?.cancel(),typeof Ct<"u"&&Ct){Ow(n);return}const e=Math.max(0,Math.min(n,Si()));e!==De&&(Le.dragging||Pt||on()&&(St?.clearSelection(),ec="",Va(),Mi(!0),es(),De=e,bn()&&ve&&(ve.setEditor({...ve.read().editor,currentTurn:e}),sr(ve.read()),ut.clear(),he=null,ke=Pi()),lt(),rt()))}function ja(){const{width:n,height:e}=Oo(),t=JM(_t.extent,_t.extentZ,n/e,yt.fov,360,n);return It.maxDistance=t.maxDistance,yt.far=t.far,yt.near=t.near,yt.updateProjectionMatrix(),t}function gh(){const n=ja();It.target.set(0,0,0),yt.position.copy(new b(0,.65,1).normalize().multiplyScalar(n.distance)),It.update()}function vw(){const n=ja();It.target.set(0,0,0),yt.position.set(0,n.distance,.001),It.maxPolarAngle=Math.PI*.499,It.update()}const xn=()=>({label:document.querySelector("#edit-label"),kind:document.querySelector("#edit-kind"),faction:document.querySelector("#edit-faction"),icon:document.querySelector("#edit-icon"),tgt:document.querySelector("#edit-tgt"),escort:document.querySelector("#edit-escort"),hidden:document.querySelector("#edit-hidden"),intangible:document.querySelector("#edit-intangible"),lost:document.querySelector("#edit-lost"),remove:document.querySelector("#edit-delete"),undo:document.querySelector("#edit-undo"),redo:document.querySelector("#edit-redo")});let je=null,Xi=!1,Hi="translate",vo="translate";const xw=new b,hn=new vn;ts.add(hn);const Le=new jb(yt,vt.domElement);Le.setSize(.85);ts.add(Le.getHelper());const dt=n=>document.querySelector(n),Pn=n=>n.icon==="air-filled"||n.icon==="air-outline";function Za(n){return ch(n,De)??{yaw:ga((ah(n,De)??0)-(n.icon==="ground"?Math.PI:0)),pitch:0,roll:0}}function Bs(){return hi()?bn()?[De]:Array.from({length:dt("#apply-later").checked?ii()-De:1},(n,e)=>De+e):[]}function qm(n,e){qa(n)&&(n.attitudes??=Array.from({length:ii()},()=>null),Bs().forEach(t=>{n.attitudes[t]={...e}}))}function Ym(n){if(bn()||!at()||Rt()?.mapEditRef||!ke||je||Le.dragging||Pt||(Mi(!0),!Mn()))return;const e=De,t=e+1,i=new Map(ot.map(s=>[s.id,{...Za(s)}])),r=Xn[e];Xn.splice(t,0,{summary:n?r.summary:"TACTICAL MOVEMENT / NEW TURN",events:n?r.events.map(s=>({...s})):[]}),ot.forEach(s=>{if(s.trackPoints=bp(s.trackPoints??[],t,!0),s.routeBinding&&s.routeBinding.startTurn>=t&&s.routeBinding.startTurn++,s.playerActions?.forEach(o=>{o.turn>=t&&o.turn++,o.recordedTurn>=t&&o.recordedTurn++}),s.positions.splice(t,0,s.positions[e].clone()),n)s.attitudes??=Array.from({length:ii()-1},()=>null),s.attitudes.splice(t,0,i.get(s.id));else if(s.attitudes){const o=s.attitudes[e];s.attitudes.splice(t,0,o?{...o}:null)}s.destroyedAtTurn!==void 0&&s.destroyedAtTurn>=t&&(s.destroyedAtTurn+=1)}),Xn[t].events=Xn[t].events.filter(s=>s.kind!=="destroy"),ar(),nt=null,De=t,lt(),rt()}function yw(){if(bn()||!at()||Rt()?.mapEditRef||!ke||ii()<=1||je||Le.dragging||(Mi(!0),!Mn()))return;const n=De;Xn.splice(n,1),ot.forEach(e=>{e.trackPoints=bp(e.trackPoints??[],n,!1),e.routeBinding&&(e.routeBinding.startTurn=Math.max(0,e.routeBinding.startTurn>=n?e.routeBinding.startTurn-1:e.routeBinding.startTurn)),e.positions.splice(n,1),e.attitudes?.splice(n,1),e.playerActions&&(e.playerActions=e.playerActions.filter(t=>t.turn!==n&&t.recordedTurn!==n).map(t=>({...t,turn:t.turn>n?t.turn-1:t.turn,recordedTurn:t.recordedTurn>n?t.recordedTurn-1:t.recordedTurn}))),e.destroyedAtTurn===n?e.destroyedAtTurn=void 0:e.destroyedAtTurn!==void 0&&e.destroyedAtTurn>n&&(e.destroyedAtTurn-=1)}),ar(),nt=null,De=Math.min(n,Si()),lt(),rt()}function xo(){if(typeof en<"u"&&en?.active()){Le.detach();return}if(!hi()&&!_i()){Le.detach();return}if(ln||St?.isPicking()){Le.detach();return}if(Le.dragging)return;const n=St?.selection();if(n&&_i()&&ke&&!Ot&&!je&&!dn){hn.position.set(n.position.x,n.position.y,n.position.z).multiplyScalar(et);const r=n.kind==="marker"?Wi().markers.find(o=>o.id===n.id):void 0,s=r&&Ai(r)&&n.pointIndex===void 0?vo:"translate";hn.scale.setScalar(1),hn.quaternion.copy(r&&s!=="translate"?Ca(r):new mn),Le.setMode(s),Le.setSpace(s==="translate"?"world":"local"),Le.showX=Le.showY=Le.showZ=!0,Le.attach(hn);return}hn.scale.setScalar(1);const e=Ka();if(at()&&ke&&!Ot&&e){const r=nt?.kind==="track"?ot.find(o=>o.id===nt.unitId):void 0,s=!!r&&!Pn(r)&&!r.intangible;hn.position.copy(aa(e,s)),hn.quaternion.identity(),Le.setMode("translate"),Le.setSpace("world"),Le.showX=Le.showZ=!0,Le.showY=!s,Le.attach(hn);return}if(Vt||zt||Ln){Le.detach();return}if(!ke||Ot||!he||je||dn||!rr().length||ut.size>1&&Hi==="rotate"){Le.detach();return}const t=ut.size>1?Ao():Vn(he);hn.position.copy(t),ut.size===1&&hn.position.copy(El(he,t,Et,ti)),xw.subVectors(hn.position,t);const i=Za(he);hn.quaternion.setFromEuler(new ni(i.pitch,i.yaw,i.roll,"YXZ")),Le.setMode(Hi),Le.setSpace(Hi==="translate"?"world":"local"),Le.showX=Hi==="translate"||Pn(he),Le.showY=!0,Le.showZ=Hi==="translate"||Pn(he),Le.attach(hn)}let _a="";function Sw(){const n=Bn?.panels.equipment;if(!n||!ve)return;if(Ct){n.replaceChildren(),_a="";return}const e=Rt(),t=JSON.stringify([ve.revision,e?.id,De,he?.id,ke,at(),Ht(),he?Ya(he):null]);if(t===_a&&n.childElementCount)return;_a=t,n.replaceChildren();const i=document.createElement("label");i.className="equipment-unit-choice",i.textContent="配置单位";const r=document.createElement("select");r.id="equipment-unit",r.setAttribute("aria-label","配置装备的单位"),r.add(new Option("请选择单位",""));for(const l of ot)r.add(new Option(l.label,l.id));r.value=he?.id??"",r.disabled=Ht(),i.append(r),n.append(i),r.addEventListener("change",()=>{if(Ht()||!r.isConnected)return;const l=ot.find(u=>u.id===r.value);qn(l?[l]:[])});const s=document.createElement("div");if(s.id="equipment-editor-body",n.append(s),!e||!he||je){s.textContent=je?"待落位":"未选择单位";return}const o=e.id,a=he.id,c=De;pg(s,{read:()=>Om().project,busy:()=>sn||Ht()||he?.id!==a||Rt()?.id!==o||De!==c,report:Qt,commit:(l,u)=>{if(!ve||!at()||!ke||Ht()||he?.id!==a||Rt()?.id!==o||De!==c)throw new Error("单位或编辑状态已变化，请重新选择装备。");if(!on())throw new Error("请先完成当前编辑。");const h=ve.read();ve.commit({...h,project:l},u,h),or(),Hn(!0),Bn?.select("equipment")}},{mode:"session",sessionId:o,unitId:a,turn:c,editable:at()&&ke&&!Ht()})}function bw(n){if(!ve||!at()||Rt()?.mapEditRef||sn||Ht())throw new Error("请先完成当前操作，再新建玩家。");if(!on())throw new Error("当前编辑尚未保存。");const e=ve.read(),t=Rt().id,i=`player-unit-${crypto.randomUUID()}`,s=Sp(e.project,t,i,n.playerId,n.aircraftRef,n.loadout,{x:0,y:2.4,z:0},De).sessions.find(o=>o.id===t).units.find(o=>o.id===i);Hn(!0),Gi(!1),Mi(!0),dn=!1,ei(),St?.cancel(),St?.clearSelection(),Vt=zt=Ln=!1,nt=null,ut.clear(),he=null,Nl(),je=$a({...s,trackPoints:void 0,positions:s.positions.map(o=>({x:o.x*et,y:o.y*et,z:o.z*et}))}),Oi={input:structuredClone(n),player:{...s.player},sessionId:t,turn:De,revision:ve.revision},Xi=!1,It.enabled=!0,vt.domElement.style.cursor="",lt(),rt()}function Mw(){const n=Oi;!n||!je||!ve||n.sessionId!==Rt()?.id||n.turn!==De||n.revision!==ve.revision||!at()||(Xi=!0,It.enabled=!1,vt.domElement.style.cursor="crosshair",rt())}function ww(n){const e=Oi,t=je;if(!e||!t||!ve)return!1;if(!at()||!ke||sn||Le.dragging||Pt||e.sessionId!==Rt()?.id||e.turn!==De||e.revision!==ve.revision)return Qt("玩家放置状态已变化，请取消后重新创建。"),!1;const i=ve.read(),r=n.clone();r.y=t.intangible?Vn(t).y:Pn(t)?Math.max(Vn(t).y,Et(r.x,r.z)+ti):Et(r.x,r.z);try{const s=Sp(i.project,e.sessionId,t.id,e.input.playerId,e.input.aircraftRef,e.input.loadout,{x:r.x/et,y:r.y/et,z:r.z/et},De),o=s.sessions.find(c=>c.id===e.sessionId).units.find(c=>c.id===t.id);o.icon=t.icon,o.faction=t.faction;const a=o.id;return ve.commit({...i,project:s},"创建玩家单位",i),or(),Hn(!0),qn(ot.filter(c=>c.id===a)),Qt(`${e.player.callsign} 已放置`),!0}catch(s){return Qt(s instanceof Error?s.message:String(s)),!1}}function Ew(n,e,t){if(!ve||!at()||Rt()?.mapEditRef||sn||Ht())throw new Error("当前回合为只读或仍有操作待完成。");if(ke||Hn(!0),!on())throw new Error("当前编辑尚未保存。");const i=ve.read(),r=Rt().id,s=Pg(i.project,r,n,De,e,t==="drop"?"jettison":"use",`player-action-${crypto.randomUUID()}`);ve.commit({...i,project:s},t==="drop"?"登记上一回合抛弃":"登记上一回合使用",i),or(),Hn(!0),Qt(`已登记${t==="drop"?"抛弃":"使用"}`)}function $m(){if(!Du||!Xr||!ve)return;const n=Rt(),e=!!n?.mapEditRef;Xr.hidden=!Pr||e;const t=JSON.stringify([ve.revision,n?.id,De,he?.id,at(),ke,Pr,sn,Ht(),Oi,Xi]);t!==_l&&(_l=t,Du.sync({project:ve.read().project,revision:ve.revision,sessionId:n?.id??"",turn:De,selectedUnitId:he?.id,editable:at()&&!sn&&(Oi!==null||!Ht()),mapOnly:e,...Oi?{pending:{player:{...Oi.player},aircraftRef:{...Oi.input.aircraftRef},loadout:structuredClone(Oi.input.loadout),armed:Xi}}:{}}))}function up(){const n=je??he,e=Ka();if(e)for(const s of["x","y","z"])dt(`#path-${s}`).value=e[s].toFixed(2);if(!n)return;const t=ut.size>1?Ao():Vn(n),i=Za(n);for(const s of["x","y","z"])dt(`#edit-${s}`).value=t[s].toFixed(2);const r=document.querySelector("#edit-height");r&&(r.value=(t.y*1e3/et).toFixed(1));for(const s of["pitch","yaw","roll"])dt(`#edit-${s}`).value=jt.radToDeg(i[s]).toFixed(2)}function rt(){for(const c of Array.from(document.querySelectorAll('#edit-panel [data-mode-disabled="true"]')))c.disabled=!1,delete c.dataset.modeDisabled;jm(),Pw();const n=xn();dt("#canvas-width").value=String(_t.extent*2/et),dt("#canvas-height").value=String(_t.extentZ*2/et),dt("#canvas-samples").value=String(_t.size),Bn||(document.querySelector("#terrain-editor").toggleAttribute("hidden",!Ot),document.querySelector("#unit-editor").toggleAttribute("hidden",Ot)),document.querySelector("#tab-terrain").setAttribute("aria-pressed",String(Ot)),document.querySelector("#tab-units").setAttribute("aria-pressed",String(!Ot)),document.querySelector("#terrain-undo").disabled=!ve?.canUndo||!!Pt,document.querySelector("#terrain-redo").disabled=!ve?.canRedo||!!Pt;const e=je??he;dt("#turn-summary-edit").value=Xn[De].summary,dt("#turn-summary-edit").disabled=!!je,dt("#edit-lost").max=String(ii());for(const c of["#turn-add","#turn-copy","#turn-delete"])document.querySelector(c).disabled=!!je||Le.dragging||c==="#turn-delete"&&ii()===1;n.undo.disabled=!ve?.canUndo||!!je,n.redo.disabled=!ve?.canRedo||!!je,n.remove.disabled=he===null||!!je,document.querySelector("#edit-copy").disabled=!ut.size||!!je,document.querySelector("#tool-rotate").disabled=ut.size>1,document.querySelector("#selection-count").textContent=`SELECTED ${ut.size} / MOVABLE ${rr().length}`,document.querySelector("#tool-box").setAttribute("aria-pressed",String(dn)),document.querySelector("#unit-picker").replaceChildren(...ot.map(c=>{const l=document.createElement("button"),u=Wi().groups.find(h=>h.id===c.groupId);return l.textContent=u?`${c.label} · ${u.name}`:c.label,u&&(l.style.borderColor=u.color),l.setAttribute("aria-pressed",String(ut.has(c.id))),l.disabled=!!je,l.addEventListener("click",h=>Al(c,h.shiftKey||h.ctrlKey||h.metaKey||dt("#select-additive").checked)),l}));const i=["urban","erase-urban"].includes(document.querySelector("#terrain-brush").value);for(const c of["#urban-density","#urban-angle","#urban-seed"])dt(c).closest("label").toggleAttribute("hidden",!i);dt("#terrain-strength").closest("label").toggleAttribute("hidden",i),dt("#terrain-flat").closest("label").toggleAttribute("hidden",i),[n.label,n.kind,n.faction,n.icon,n.tgt,n.escort,n.hidden,n.intangible,n.lost].filter(Boolean).forEach(c=>{c.disabled=!e}),n.label.value=e?.label??"",n.kind.value=e?.kind??"",n.faction.value=e?.faction??"enemy",n.icon.value=e?.icon??"air-outline",n.tgt.checked=e?.tgt===!0,n.hidden&&(n.hidden.checked=e?.hidden===!0),n.intangible&&(n.intangible.checked=e?.intangible===!0),n.escort.checked=e?.escort===!0&&e.faction!=="enemy",n.lost.value=e?.destroyedAtTurn===void 0?"":String(e.destroyedAtTurn+1),document.querySelector("#placement-actions").toggleAttribute("hidden",!je),document.querySelector("#edit-state").textContent=je?Xi?"PLACING":"PENDING":ut.size>1?`GROUP MOVE / PRIMARY ${he?.label??"-"} / TURN ${De+1}`:he?`TURN ${De+1} / ${he.attitudes?.[De]?"MANUAL ATTITUDE":"AUTO ATTITUDE"}`:"NONE",document.querySelector("#edit-place").disabled=Xi,document.querySelector("#edit-auto").disabled=!he||!!je||ut.size>1;const r=!je&&ut.size>1?Ao():e?Vn(e):new b,s=e?Za(e):{yaw:0,pitch:0,roll:0};for(const c of["x","y","z"]){const l=dt(`#edit-${c}`);l.disabled=!e||!!je&&c!=="y",l.value=e?r[c].toFixed(2):""}for(const c of["pitch","yaw","roll"]){const l=dt(`#edit-${c}`);l.disabled=!e||!je&&ut.size>1||c!=="yaw"&&!Pn(e),l.value=e?jt.radToDeg(s[c]).toFixed(2):""}const o=document.querySelector("#edit-height");o&&(o.value=e?(r.y*1e3/et).toFixed(1):"",o.disabled=!e),document.querySelector("#tool-move").setAttribute("aria-pressed",String(Hi==="translate")),document.querySelector("#tool-rotate").setAttribute("aria-pressed",String(Hi==="rotate"));const a=!!Rt()?.mapEditRef;document.querySelector("#tab-units").toggleAttribute("hidden",a),a&&!Bn&&document.querySelector("#unit-editor").setAttribute("hidden","");for(const c of["#turn-add","#turn-copy","#turn-delete"])bn()&&(document.querySelector(c).disabled=!0);bn()&&(dt("#apply-later").disabled=!0),Rw(),Li(),xo(),Bn?.sync({editing:ke,editable:_i(),mapOnly:a,active:Pr,playerView:Ct,viewerCanUndo:!!ve?.canUndo,viewerCanRedo:!!ve?.canRedo}),km?.sync(),St?.sync(),typeof en<"u"&&en?.sync(),Sw(),$m()}function jm(){!hi()&&!_i()&&(ke=!1),at()||(Ot=Vt=Ln=zt=!1,nt=null),Bn||document.querySelector("#edit-panel").toggleAttribute("hidden",!ke),document.querySelector("#mode-readout").textContent=ke?bn()?"草稿编辑":"EDIT":"VIEW"}const Tw=new Set(["edit-x","edit-y","edit-z","edit-height","edit-pitch","edit-yaw","edit-roll","edit-auto","edit-lost","turn-summary-edit","select-clear","select-additive","tool-box","tool-move","tool-rotate","move-snap","rotate-snap","trail-display","trail-turns","edit-undo","edit-redo","tab-units"]);function hp(n){return Tw.has(n.id)||!!n.closest("#unit-picker")}function Zm(n){return!!n.closest(".sidebar-header,.sidebar-nav,.range-panel,.trail-panel,.archive-panel,.selection-panel,.sidebar-bound-list,#unit-picker,#route-list,#track-list")||["route-select","route-group-select","route-select-bound","route-visible","route-labels","select-clear","select-additive"].includes(n.id)}function Aw(n,e){const t=xn().escort;t.disabled=!n||!e||n.faction==="enemy",t.checked=n?.escort===!0&&n.faction!=="enemy"}function Rw(){const n=hi()&&ke,e=at()&&ke;for(const r of Array.from(document.querySelectorAll("#unit-editor input, #unit-editor button, #unit-editor select, #unit-editor textarea, #terrain-editor input, #terrain-editor button, #terrain-editor select, #route-section input, #route-section button, #route-section select, #turn-summary-edit")))Zm(r)||(!e&&(!n||!hp(r))?r.disabled=!0:e&&r.dataset.modeDisabled==="true"&&(r.disabled=!1),r.dataset.modeDisabled=String(!e&&(!n||!hp(r))));const t=je??he;for(const r of["edit-x","edit-y","edit-z","edit-height","edit-pitch","edit-yaw","edit-roll","edit-auto"]){const s=document.getElementById(r);(!n||t&&!je&&!qa(t))&&(s.disabled=!0)}const i=xn().lost;Aw(t,e),i.disabled=!t||!n||!e&&!fh(t),i.min=String(e?1:De+1),i.max=String(e?ii():De+1),i.step="1"}for(const n of["click","change","input","keydown","pointerdown"])document.querySelector("#edit-panel").addEventListener(n,e=>{const t=e.target instanceof Element?e.target.closest("button, input, select, textarea"):null;!t||Zm(t)||t.closest("#workflow-panel")||t.closest('[data-sidebar-panel="groups"],[data-sidebar-panel="markers"],[data-sidebar-panel="drawing"],[data-sidebar-panel="equipment"],[data-sidebar-panel="links"]')||at()&&ke||(e.preventDefault(),e.stopImmediatePropagation())},!0);function es(){Oi=null,je=null,Xi=!1,vt.domElement.style.cursor="",It.enabled=!0,rt()}function Hn(n){if(n&&!hi()&&!_i()){jm(),Li();return}on()&&(St?.cancel(),typeof en<"u"&&en?.cancel(),ln&&ei(),ke=n,Bn||document.querySelector("#edit-panel").toggleAttribute("hidden",!n),document.querySelector("#mode-readout").textContent=n?"EDIT":"VIEW",vt.domElement.style.cursor=n&&Ot?"crosshair":"",n||(Vt=zt=!1,nt=null,_h(),Ja(),Ot=!1,Vi.visible=!1,Mi(!0),dn=!1,es()),lt(),rt())}function Ni(n,e=!1,t="metadata"){if(!hi()||!ke||t==="metadata"&&!at()||he&&!je&&(t==="pose"&&!qa(he)||t==="loss"&&!fh(he)))return;if(je){n(je),vl(je,je.positions.map((s,o)=>o)),rt();return}if(!he)return;const i=he.icon,r=he.intangible;Mn(t==="metadata"?"author":"draft")&&(n(he),Os(he)&&(t==="pose"||he.icon!==i||he.intangible!==r)&&vl(he),e&&fw(he),lt(),rt())}function Ns(n){!hi()||!ke||n==="rotate"&&ut.size>1||(dn=!1,Hi=n,rt())}Le.addEventListener("dragging-changed",n=>{if(It.enabled=!n.value,n.value){Li();return}on("Transform units / path"),rt()});let Rn=null,ka=null,Oa=!1,mi=null;function Cw(n,e,t){if(!Yn)return;const i=r=>({x:r.x+t.x/et,y:r.y+t.y/et,z:r.z+t.z/et});if(e.kind==="marker"){const r=n.markers.find(o=>o.id===e.id),s=Yn.markers.find(o=>o.id===e.id);if(r&&s)if(Ai(r)&&e.pointIndex!==void 0){const o=gs(r);o[e.pointIndex]=i(o[e.pointIndex]);const a=jc(r,o);Object.assign(s,a)}else s.position=i(r.position),r.controlPoints&&(s.controlPoints=r.controlPoints.map(i))}else{const r=n.drawings.find(o=>o.id===e.id),s=Yn.drawings.find(o=>o.id===e.id);r&&s&&(s.points=r.points.map((o,a)=>e.pointIndex===void 0||a===e.pointIndex?i(o):{...o}))}}const za=new Map;let oo=[];const Iu=new b;Le.addEventListener("mouseDown",()=>{if(!hi()&&!(_i()&&St?.selection())||!ke||!at()&&nt){Le.detach();return}Oa=!1,ka=Tr??ve?.read()??null,Rn=Dl(),mi=St?.selection()??null,Iu.copy(hn.position),oo=Bs(),za.clear(),rr().forEach(n=>za.set(n.id,n.positions.map(e=>e.clone())))});Le.addEventListener("mouseUp",()=>{Rn&&!Ro(mi?Rn.sceneTools:Rn,mi?Yn:Dl())&&(Tr=ka),Rn=null,ka=null,Oa=!1,mi=null});Le.addEventListener("objectChange",()=>{if(!hi()&&!(_i()&&mi)||!ke||!Rn||Oa)return;if(mi&&Rn.sceneTools){if(!_i())return;try{const e=Rn.sceneTools.markers.find(i=>i.id===mi.id),t=Yn?.markers.find(i=>i.id===mi.id);if(mi.kind==="marker"&&mi.pointIndex===void 0&&e&&t&&Ai(e)&&vo!=="translate"){const i=new ni().setFromQuaternion(hn.quaternion,"YXZ"),r=vo==="rotate"?{pitch:i.x,yaw:i.y,roll:i.z}:e.attitude??{pitch:0,yaw:0,roll:0},s=Le.axis??"XYZ",o=s.includes("X")?"x":s.includes("Y")?"y":"z",a=(e.sizeKm??.12)*(vo==="scale"?Math.abs(hn.scale[o]):1);Object.assign(t,bm(e,e.position,r,a))}else Cw(Rn.sceneTools,mi,hn.position.clone().sub(Iu))}catch(e){Qt(e instanceof Error?e.message:String(e));return}St?.syncPosition?St.syncPosition():St?.sync(),typeof en<"u"&&en?.update();return}const n=Ka();if(n){if(!at())return;const e=nt?.kind==="track"?ot.find(t=>t.id===nt.unitId):void 0;n.x=hn.position.x,n.y=e?.intangible?hn.position.y:Math.max(0,hn.position.y),n.z=hn.position.z,e&&!Pn(e)&&!e.intangible&&(n.y=Et(n.x,n.z)),nt?.kind==="waypoint"&&ar(),lt(),up();return}if(he){if(Hi==="translate"){const e=hn.position.clone().sub(Iu),t=rr().filter(i=>Pn(i)&&!i.intangible).map(i=>za.get(i.id)).filter(Boolean);t.length&&(e.y=Math.max(e.y,...t.flatMap(i=>oo.map(r=>{const s=i[r];return Math.max(0,Et(s.x+e.x,s.z+e.z))-s.y})))),rr().forEach(i=>{const r=za.get(i.id);if(r){at()&&!bn()&&(i.routeBinding=void 0),oo.forEach(o=>i.positions[o].copy(r[o]).add(e));const s=Rn?.units.find(o=>o.id===i.id)?.trackPoints;at()&&s&&(i.trackPoints=s.map(o=>oo.includes(o.segment)&&oo.includes(o.segment+1)?{...o,x:o.x+e.x,y:o.y+e.y,z:o.z+e.z}:{...o})),vl(i,oo),Lu(i)}})}else{const e=new ni().setFromQuaternion(hn.quaternion,"YXZ");qm(he,{yaw:e.y,pitch:Pn(he)?e.x:0,roll:Pn(he)?e.z:0})}Hi!=="translate"&&Lu(he),Vm(),up()}});function Co(n){ir.x=n.clientX/innerWidth*2-1,ir.y=-(n.clientY/innerHeight)*2+1,er.setFromCamera(ir,yt);let e=0;const t=new b;for(let i=2;i<yt.far;i+=2){const r=er.ray.at(i,t);if(r.y<=Et(r.x,r.z)){let s=e,o=i;for(let c=0;c<18;c++){const l=(s+o)/2,u=er.ray.at(l,t);u.y>Et(u.x,u.z)?s=l:o=l}const a=er.ray.at(o,new b);return a.y=Et(a.x,a.z),a}e=i}return null}let dn=!1,gi=null;const Us=document.createElement("div");Us.className="selection-box";Us.hidden=!0;document.querySelector("#app").appendChild(Us);function Mi(n=!1,e){if(!gi)return;const t=gi;if(gi=null,Us.hidden=!0,It.enabled=!Xi,vt.domElement.hasPointerCapture(t.pointerId)&&vt.domElement.releasePointerCapture(t.pointerId),n||!e)return;const i=Math.min(t.x,e.clientX),r=Math.max(t.x,e.clientX),s=Math.min(t.y,e.clientY),o=Math.max(t.y,e.clientY);ts.updateMatrixWorld(!0),yt.updateMatrixWorld(!0);const a=ot.filter(c=>{if(zs(c,De)==="wreck")return!1;const u=bi.get(c.id).userData.parts.icon.getWorldPosition(new b).project(yt),h=(u.x+1)*innerWidth/2,d=(1-u.y)*innerHeight/2;return u.z>=-1&&u.z<=1&&h>=i&&h<=r&&d>=s&&d<=o});qn(t.additive?[...new Set([...Ii(),...a])]:a),ut.size>1&&(Hi="translate"),rt()}function xl(n){ir.x=n.clientX/innerWidth*2-1,ir.y=-(n.clientY/innerHeight)*2+1,er.setFromCamera(ir,yt);const e=er.intersectObjects(tn.children.filter(t=>t.userData.editorTools),!0).filter(t=>yl(t.object)).filter(t=>{for(let i=t.object;i;i=i.parent)if(i.userData.editorTool)return!0;return!1});return e.find(t=>t.object.userData.editorTool?.pointIndex!==void 0)??e[0]}vt.domElement.addEventListener("pointerdown",n=>{if(n.button!==0||!Pr||n.altKey||je||Ot||Le.dragging||Le.axis!==null||Pt||ln||St?.isPicking())return;if(en?.active()){n.preventDefault(),n.stopImmediatePropagation();const t=Ul(n)[0];for(let r=t?.object??null;r;r=r.parent){const s=r.userData.unit;if(s){en.pick("unit",s.id);return}}const i=xl(n);for(let r=i?.object??null;r;r=r.parent)if(r.userData.editorTool?.kind==="marker"){St?.selectObject?.(i.object);return}return}if(!ke||dn||Vt||zt||Ln)return;const e=xl(n);e&&St?.selectObject?.(e.object)&&(n.preventDefault(),n.stopImmediatePropagation())},!0);vt.domElement.addEventListener("dblclick",n=>{n.button!==0||!Pr||Ht()||ln||Vt||zt||Ln||Ot||dn||Le.axis!==null||Ul(n).length||typeof xl<"u"&&xl(n)||er.intersectObject(Zi,!0).some(t=>t.object.userData.pathPoint)||qn([])});vt.domElement.addEventListener("pointerdown",n=>{if(Ct||St?.isPicking()||ln||!ke||Ot||Vt||Ln||nt||je||n.button!==0||!(dn||n.shiftKey))return;n.stopImmediatePropagation(),n.preventDefault();const e=Ul(n)[0]?.object.userData.unit;if(e&&!dn){Al(e,!0);return}It.enabled=!1,Le.axis=null,gi={x:n.clientX,y:n.clientY,additive:n.shiftKey||n.ctrlKey||n.metaKey||dt("#select-additive").checked,pointerId:n.pointerId},Us.hidden=!1,Us.style.cssText=`left:${n.clientX}px;top:${n.clientY}px;width:0;height:0`,vt.domElement.setPointerCapture(n.pointerId)},!0);vt.domElement.addEventListener("pointermove",n=>{gi&&(n.stopImmediatePropagation(),Us.style.cssText=`left:${Math.min(gi.x,n.clientX)}px;top:${Math.min(gi.y,n.clientY)}px;width:${Math.abs(n.clientX-gi.x)}px;height:${Math.abs(n.clientY-gi.y)}px`)},!0);vt.domElement.addEventListener("pointerup",n=>{gi&&(n.stopImmediatePropagation(),Mi(!1,n))},!0);vt.domElement.addEventListener("pointercancel",()=>Mi(!0));vt.domElement.addEventListener("pointerdown",n=>{if(St?.isPicking()||ln||n.button!==0||Ot||Vt||zt||Ln||nt)return;if(je&&Xi){if(!at()||!ke)return;const t=Co(n);if(!t)return;if(Oi){n.stopImmediatePropagation(),ww(t);return}const i=je,{count:r,spacing:s}=ph(),o=Math.ceil(Math.sqrt(r)),a=[];if(!Mn())return;for(let c=0;c<r;c++){const l=$a(Ya(i)),u=Qr++;l.id=`unit-${u}`,l.label=r===1?i.label:`${i.label}-${String(c+1).padStart(2,"0")}`;const h=t.clone();h.x+=c%o*s,h.z+=Math.floor(c/o)*s;const d=Et(h.x,h.z);h.y=l.intangible?Vn(i).y:Pn(l)?Math.max(Vn(i).y,d+ti):d,l.positions=Array.from({length:ii()},()=>h.clone()),ot.push(l),a.push(l),Uo(l)}je=null,Xi=!1,It.enabled=!0,vt.domElement.style.cursor="",ko(),qn(a),Ns("translate");return}if(je||Le.dragging||ke&&Le.axis!==null)return;const e=Ul(n)[0]?.object.userData.unit;e&&Al(e,ke&&(n.ctrlKey||n.metaKey||dt("#select-additive").checked))});document.querySelector("#edit-place").addEventListener("click",()=>{je&&(Xi=!0,It.enabled=!1,vt.domElement.style.cursor="crosshair",rt())});document.querySelector("#edit-cancel").addEventListener("click",es);document.querySelector("#tool-move").addEventListener("click",()=>Ns("translate"));document.querySelector("#tool-rotate").addEventListener("click",()=>Ns("rotate"));for(const n of["x","y","z"])dt(`#edit-${n}`).addEventListener("change",()=>{const e=Number(dt(`#edit-${n}`).value);if(Number.isFinite(e)){if(!je&&ut.size>1){const t=new b;t[n]=e-Ao()[n],Na(t)}else if(je)Ni(t=>{Vn(t,!0)[n]=n==="y"&&!t.intangible?Math.max(0,e):e});else if(he){const t=new b;t[n]=e-Vn(he)[n],Na(t)}}});document.querySelector("#edit-height")?.addEventListener("change",()=>{const n=dt("#edit-height"),e=Number(n.value);if(!n.value.trim()||!Number.isFinite(e)){rt();return}const t=je?Vn(je).y:he?ut.size>1?Ao().y:Vn(he).y:void 0,i=(je?[je]:rr()).some(s=>Os(s)&&(je?s.positions:Bs().map(o=>s.positions[o])).some(o=>o.y!==Et(o.x,o.z)));if(t!==void 0&&n.value===(t*1e3/et).toFixed(1)&&!i)return;const r=e*et/1e3;if(je)Ni(s=>{Vn(s,!0).y=s.intangible?r:Math.max(0,r)});else if(he){const s=new b(0,r-(ut.size>1?Ao().y:Vn(he).y),0);Na(s)}});for(const n of["pitch","yaw","roll"])dt(`#edit-${n}`).addEventListener("change",()=>{const e=Number(dt(`#edit-${n}`).value);Number.isFinite(e)&&Ni(t=>{const i={...Za(t),[n]:jt.degToRad(e)};je?t.attitudes=Array.from({length:ii()},()=>({...i})):qm(t,i)},!1,"pose")});document.querySelector("#edit-auto").addEventListener("click",()=>Ni(n=>{n.attitudes&&Bs().forEach(e=>{n.attitudes[e]=null})},!1,"pose"));document.querySelector("#turn-add").addEventListener("click",()=>Ym(!1));document.querySelector("#turn-copy").addEventListener("click",()=>Ym(!0));document.querySelector("#turn-delete").addEventListener("click",yw);dt("#turn-summary-edit").addEventListener("change",()=>{if(!hi()||!ke)return;const n=dt("#turn-summary-edit").value.trim();n===Xn[De].summary||je||Bm({type:"set-turn-summary",sessionId:ve?.read().editor.sessionId??"session-working",turn:De,summary:n||"UNTITLED TURN"})});dt("#move-snap").addEventListener("change",()=>Le.setTranslationSnap(Number(dt("#move-snap").value)>0?Number(dt("#move-snap").value):null));dt("#rotate-snap").addEventListener("change",()=>Le.setRotationSnap(Number(dt("#rotate-snap").value)>0?jt.degToRad(Number(dt("#rotate-snap").value)):null));document.querySelector("#edit-copy").addEventListener("click",Hm);document.querySelector("#select-clear").addEventListener("click",()=>qn([]));document.querySelector("#tool-box").addEventListener("click",()=>{dn=!dn,rt()});document.querySelector("#edit-add").addEventListener("click",pw);document.querySelector("#edit-delete").addEventListener("click",mw);document.querySelector("#edit-undo").addEventListener("click",Ll);document.querySelector("#edit-redo").addEventListener("click",Il);xn().label.addEventListener("change",()=>{if(je){Ni(n=>{n.label=xn().label.value||n.id});return}he&&Bm({type:"rename-unit",sessionId:ve?.read().editor.sessionId??"session-working",unitId:he.id,label:xn().label.value||he.id})});xn().kind.addEventListener("change",()=>Ni(n=>{n.kind=xn().kind.value||"UNKNOWN"}));xn().faction.addEventListener("change",()=>Ni(n=>{n.faction=xn().faction.value,n.faction==="enemy"&&delete n.escort},!0));xn().icon.addEventListener("change",()=>Ni(n=>{n.icon=xn().icon.value},!0));xn().tgt.addEventListener("change",()=>Ni(n=>{n.tgt=xn().tgt.checked}));xn().escort.addEventListener("change",()=>{const n=je??he;if(!n||n.faction==="enemy"||!at()||!ke){rt();return}Ni(e=>{e.escort=xn().escort.checked})});xn().hidden?.addEventListener("change",()=>Ni(n=>{n.hidden=xn().hidden.checked}));xn().intangible?.addEventListener("change",()=>Ni(n=>{if(n.intangible=xn().intangible.checked,!n.intangible){const e=je===n?n.positions.map((t,i)=>i):Bs();e.forEach(t=>{const i=n.positions[t];i.y=Pn(n)?Math.max(i.y,Et(i.x,i.z),0):Et(i.x,i.z)}),n.trackPoints?.forEach(t=>{e.includes(t.segment)&&e.includes(t.segment+1)&&(t.y=Pn(n)?Math.max(t.y,Et(t.x,t.z),0):Et(t.x,t.z))})}}));xn().lost.addEventListener("change",()=>{if(!hi()||!ke||he&&!fh(he))return;const n=xn().lost.value.trim();if(bn()&&n!==""&&Number(n)!==De+1){Qt("损失回合仅可留空或填写当前草稿回合"),rt();return}Ni(e=>{const t=Number(n),i=e.destroyedAtTurn;e.destroyedAtTurn=n===""||Number.isNaN(t)?void 0:Math.max(0,Math.min(t-1,Si())),bn()&&i!==e.destroyedAtTurn&&(Xn[De].events=Xn[De].events.filter(r=>r.kind!=="destroy"||r.target!==e.id),e.destroyedAtTurn===De&&Xn[De].events.push({kind:"destroy",target:e.id})),ar()},!0,"loss")});document.querySelector("#prev-turn").addEventListener("click",()=>uo(De-1));document.querySelector("#next-turn").addEventListener("click",()=>uo(De+1));addEventListener("keydown",n=>{const e=n.key.toLowerCase();if(typeof en<"u"&&en?.active()&&n.key==="Escape"){en.cancel(),rt(),n.preventDefault();return}if(St?.isPicking()){n.key==="Escape"&&(St.cancel(),lt(),n.preventDefault());return}if(ln&&n.key==="Escape"){ei(),lt(),n.preventDefault();return}if(!(ln&&["e","t","b","w","q","d","a","pageup","pagedown"].includes(e))){if(n.key==="Escape"&&Le.dragging&&mi){Le.reset(),Rn&&(Yn=Rn.sceneTools?structuredClone(Rn.sceneTools):void 0),Rn=null,ka=null,Oa=!0,mi=null,St?.sync(),n.preventDefault();return}if(n.key==="Escape"&&Le.dragging&&nt){if(Le.reset(),Rn){const t=Rn;_n.splice(0,_n.length,...t.routes.map(i=>({...i,waypoints:i.waypoints.map(r=>({...r}))}))),Cn=t.activeRouteId,ot.forEach(i=>{const r=t.units.find(s=>s.id===i.id);r&&(i.positions=r.positions.map(s=>new b(s.x,s.y,s.z)),i.trackPoints=r.trackPoints?.map(s=>({...s})))}),Rn=null,Oa=!0,lt(),rt()}n.preventDefault();return}if(n.key==="Escape"&&(Vt||zt||nt)){Vt=zt=!1,nt=null,lt(),rt();return}if(n.key==="Escape"&&Pt){Ja(!0);return}if(n.key==="Escape"&&je){es();return}if(!n.target?.matches("input, select, textarea, [contenteditable]")&&document.querySelector("#manager-panel").hidden&&!(typeof Ct<"u"&&Ct&&["t","b","w","q","d","a","pageup","pagedown"].includes(e))){if(e==="t"&&ke){Bn?Bn.select(Ot?"units":"terrain"):Gi(!Ot);return}if(!((Ot||nt||Vt||zt)&&["b","w","q","d","a","pageup","pagedown"].includes(e))){if(n.key==="Escape"){gi?Mi(!0):Le.dragging?Le.reset():(dn=!1,qn([]));return}if(ke&&e==="b"&&(dn=!dn,rt()),ke&&(n.ctrlKey||n.metaKey)&&e==="d"){n.preventDefault(),Hm();return}if(ke&&(n.ctrlKey||n.metaKey)&&e==="a"){n.preventDefault(),je||qn(ot.filter(t=>zs(t,De)==="active"));return}if(ke&&e==="w"&&Ns("translate"),ke&&e==="q"&&Ns("rotate"),(n.ctrlKey||n.metaKey)&&e==="z"){n.preventDefault(),Ll();return}if((n.ctrlKey||n.metaKey)&&e==="y"){n.preventDefault(),Il();return}if(n.key==="ArrowLeft"&&uo(De-1),n.key==="ArrowRight"&&uo(De+1),n.key==="Home"&&uo(0),n.key==="End"&&uo(Im()),e==="r"&&gh(),e==="e"&&Hn(!ke),n.key==="PageUp"&&ke&&he&&(n.preventDefault(),Na(new b(0,10,0))),n.key==="PageDown"&&ke&&he&&(n.preventDefault(),Na(new b(0,-10,0))),e==="f"&&he){const t=Dr(De).units.find(i=>i.unit===he);t&&(It.target.set(t.position.x,t.position.y*.35,t.position.z),It.update())}}}}});function Ka(){if(!at()||!nt)return null;if(nt.kind==="waypoint")return _n.flatMap(e=>e.waypoints).find(e=>e.id===nt.id)??null;const n=nt;return ot.find(e=>e.id===n.unitId)?.trackPoints?.find(e=>e.id===n.id)??null}function ar(){if(bn()||!at())return;const n=new Set;for(const e of ot){const t=e.routeBinding,i=_n.find(a=>a.id===t?.routeId);if(!t||!i?.waypoints.length)continue;const r=t.offset??{x:0,y:0,z:0},s=i.waypoints.map(a=>({x:a.x+r.x,y:a.y+r.y,z:a.z+r.z})),o=vg(e.positions,s,t.startTurn,e.destroyedAtTurn);e.positions=o.map((a,c)=>new b(a.x,c<=t.startTurn||e.intangible?a.y:Pn(e)?Math.max(a.y,Et(a.x,a.z)+ti):Et(a.x,a.z),a.z)),n.add(e.id)}for(let e=1;e<ii();e++){const t=new Map;ot.filter(s=>n.has(s.id)&&s.routeBinding?.formationId&&e>s.routeBinding.startTurn&&(s.destroyedAtTurn===void 0||e<=s.destroyedAtTurn)).forEach(s=>{const o=s.routeBinding.formationId;t.set(o,[...t.get(o)??[],s])});for(const s of t.values()){const o=s.filter(c=>Pn(c)&&!c.intangible);let a=0;o.forEach(c=>{const l=c.routeBinding,u=_n.find(g=>g.id===l.routeId),h=u.waypoints[Math.min(e-l.startTurn-1,u.waypoints.length-1)],d=c.positions[e],f=h.y+(l.offset?.y??0);d.y=f,a=Math.max(a,Et(d.x,d.z)+ti-f)}),o.forEach(c=>{c.positions[e].y+=a})}const i=ot.filter(s=>!s.intangible).map(s=>({id:s.id,point:s.positions[e],fixed:!n.has(s.id)||!!s.routeBinding?.formationId||e<=(s.routeBinding?.startTurn??Si())||s.destroyedAtTurn!==void 0&&e>s.destroyedAtTurn})),r=xg(i,8);for(const s of ot){if(!n.has(s.id))continue;const o=s.routeBinding;if(!(e<=o.startTurn)){if(s.destroyedAtTurn!==void 0&&e>s.destroyedAtTurn)s.positions[e].copy(s.positions[s.destroyedAtTurn]);else if(!o.formationId){const a=r.get(s.id)??s.positions[e];s.positions[e].set(a.x,s.intangible?a.y:Pn(s)?Math.max(a.y,Et(a.x,a.z)+ti):Et(a.x,a.z),a.z)}}}}}function aa(n,e=!1){return new b(n.x,e?Et(n.x,n.z)+ti:n.y,n.z)}function _h(){if(Kr(Zi),Zi=new Sn,tn.add(Zi),pl.replaceChildren(),Pu.length=0,typeof Ct<"u"&&Ct)return;const n=(i,r,s,o=!1)=>{const a=nt?.id===r.id&&nt.kind===r.kind&&(r.kind!=="waypoint"||nt.kind==="waypoint"&&(!r.routeId||nt.routeId===r.routeId||Cn===r.routeId)),c=new Ee(new Zr(a?4:2.8,10,8),new yn({color:a?16777215:s,depthTest:!1}));c.position.copy(aa(i,o)),c.userData.pathPoint=r,c.renderOrder=10,Zi.add(c)},e=document.querySelector("#route-visible")?.checked??!0,t=document.querySelector("#route-labels")?.checked??!0;if(e)for(const i of _n){const r=ot.filter(l=>l.routeBinding?.routeId===i.id),s=[...new Set(r.map(l=>Wi().groups.find(u=>u.id===l.groupId)?.name).filter(Boolean))],o=r.filter(l=>!l.groupId||!Wi().groups.some(u=>u.id===l.groupId)).map(l=>l.label),a=[...s.map(l=>`编组:${l}`),...o].join(" / ")||"未绑定",c=i.id===Cn?16767050:7649492;i.waypoints.length>1&&Zi.add(ma(i.waypoints.map(l=>aa(l)),c,1,i.id===Cn?.7:.4)),i.waypoints.forEach((l,u)=>{n(l,{kind:"waypoint",id:l.id,routeId:i.id},c);const h=new b(l.x,Et(l.x,l.z)+.35,l.z);if(Zi.add(ma([h,aa(l)],c,1,.5)),Zi.add(ma([new b(l.x-4,h.y,l.z),new b(l.x+4,h.y,l.z),h.clone(),new b(l.x,h.y,l.z-4),new b(l.x,h.y,l.z+4)],c,1,.7)),!t)return;const d=document.createElement("button");d.className="waypoint-label",d.textContent=`${i.name} · ${u+1} · ${a}`,d.title=`${i.name} / 航路点 ${u+1}
绑定单位：${r.map(f=>f.label).join("、")||"无"}
${a}`,d.addEventListener("click",()=>{Le.dragging||Pt||St?.isPicking()||(Cn=i.id,Vt=zt=!1,nt=at()&&ke?{kind:"waypoint",id:l.id,routeId:i.id}:null,Bn?.select("routes"),lt(),rt())}),pl.appendChild(d),Pu.push({dom:d,position:aa(l).add(new b(0,5,0))})})}if(!(!at()||!ke||Ot)&&Ln&&he&&ut.size===1&&zs(he,De)!=="wreck"&&document.querySelector("#trail-display").value!=="none"){const i=!Pn(he)&&!he.intangible,r=Math.min(Si(),he.destroyedAtTurn??Si());he.trackPoints?.filter(o=>o.segment<r).forEach(o=>n(o,{kind:"track",unitId:he.id,id:o.id},pa[he.faction],i));const s=dh(he,De);for(const o of uh(he,s,r)){const{segment:a,points:c}=o;i&&c.forEach(u=>{u.y=Et(u.x,u.z)+ti});const l=Um(c,pa[he.faction]);l.userData.editSegment=a,l.userData.trackPart=o,l.traverse(u=>{u.userData.editSegment=a,u instanceof Ee&&(u.material.dispose(),u.material=new yn({color:pa[he.faction],transparent:!0,opacity:.65,side:fn,depthTest:!1}))}),Zi.add(l)}}}function Pw(){const n=To(),e=document.querySelector("#route-select");e.replaceChildren(..._n.map(f=>{const g=document.createElement("option");return g.value=f.id,g.textContent=f.name,g})),e.value=Cn,dt("#route-name").value=fl()?.name??"";const t=(f,g)=>{const _=document.createElement("button");return _.textContent=f,_.setAttribute("aria-pressed",String(nt?.id===g.id)),_.addEventListener("click",()=>{if(Le.dragging||Pt||St?.isPicking())return;Vt=zt=!1,nt=at()&&ke?g:null;const m=g.kind==="waypoint"?To().find(p=>p.id===g.id):he?.trackPoints?.find(p=>p.id===g.id);m&&!at()&&hh({x:m.x/et,y:m.y/et,z:m.z/et}),lt(),rt()}),_};document.querySelector("#route-list").replaceChildren(...n.map((f,g)=>t(`WP ${g+1}`,{kind:"waypoint",id:f.id})));const i=he&&ut.size===1?he.trackPoints??[]:[];document.querySelector("#track-list").replaceChildren(...i.map((f,g)=>t(`P${g+1} / ${f.segment+1}-${f.segment+2}`,{kind:"track",unitId:he.id,id:f.id})));const r=Ka(),s=nt?.kind==="track"?ot.find(f=>f.id===nt.unitId):void 0,o=!!s&&!Pn(s)&&!s.intangible;for(const f of["x","y","z"]){const g=dt(`#path-${f}`);g.disabled=!r||o&&f==="y",g.value=r?r[f].toFixed(2):""}document.querySelector("#route-bind").disabled=!rr().length||!n.length,document.querySelector("#route-unbind").disabled=!Ii().some(f=>f.routeBinding),document.querySelector("#path-delete").disabled=!r;for(const f of["#route-up","#route-down"])document.querySelector(f).disabled=nt?.kind!=="waypoint";document.querySelector("#route-pick").setAttribute("aria-pressed",String(Vt)),document.querySelector("#track-edit").setAttribute("aria-pressed",String(Ln)),document.querySelector("#track-add").setAttribute("aria-pressed",String(zt));for(const f of["#track-add","#track-midpoint"])document.querySelector(f).disabled=!he||ut.size!==1||ii()<2;nt?.kind==="track"&&he&&(zs(he,De)==="wreck"||document.querySelector("#trail-display").value==="none")&&(nt=null),dt("#track-segment").max=String(Math.max(1,Si())),document.querySelector("#path-state").textContent=Vt?"航路点放置中":zt?"控制点放置中":`${fl()?.name??"-"} / ${n.length} WP / ${Ii().map(f=>`${f.label}:${_n.find(g=>g.id===f.routeBinding?.routeId)?.name??"未绑定"}${f.routeBinding?.formationId?"(编队)":""}`).join(" / ")} / ${i.length} TRACK POINTS`;const c=ot.filter(f=>f.routeBinding?.routeId===Cn),l=document.querySelector("#route-bindings");l&&l.replaceChildren(...c.map(f=>{const g=document.createElement("button"),_=Wi().groups.find(m=>m.id===f.groupId);return g.textContent=`${f.label}${_?` · ${_.name}`:""} / 从第 ${f.routeBinding.startTurn+1} 回合`,g.addEventListener("click",()=>qn([f])),g}));const u=document.querySelector("#route-group-select");if(u){const f=u.value;u.replaceChildren(...Wi().groups.map(g=>new Option(`${g.name} (${ot.filter(_=>_.groupId===g.id).length})`,g.id))),Wi().groups.some(g=>g.id===f)&&(u.value=f)}const h=document.querySelector("#route-select-bound");h&&(h.disabled=!c.length);const d=document.querySelector("#route-bind-group");d&&(d.disabled=!at()||!ke||!n.length||!u?.value)}function Km(n,e){const t=[0,...(he?.trackPoints??[]).filter(s=>s.segment===n).sort((s,o)=>s.t-o.t).map(s=>s.t),1],i=jt.clamp(e,0,.999999)*(t.length-1),r=Math.floor(i);return jt.lerp(t[r],t[r+1],i-r)}function Jm(n,e,t=.5){if(!at()||!ke||!he||ut.size!==1||!Mn())return;he.trackPoints??=[];const i={id:`control-${gl++}`,segment:n,t:jt.clamp(t,.01,.99),x:e.x,y:e.y,z:e.z};he.trackPoints.push(i),nt={kind:"track",unitId:he.id,id:i.id},zt=!1,lt(),rt()}vt.domElement.addEventListener("pointerdown",n=>{if(St?.isPicking()||!at()||ln||!ke||Ot||n.button!==0||n.altKey||je)return;if(Vt){n.stopImmediatePropagation(),n.preventDefault();const i=Co(n);if(!i||!Mn())return;To().push({id:`wp-${ml++}`,x:i.x,y:Math.max(Number(dt("#route-height").value)||0,i.y+ti),z:i.z}),ar(),lt(),rt();return}ir.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),er.setFromCamera(ir,yt);const e=er.intersectObjects(Zi.children,!0),t=e.find(i=>i.object.userData.pathPoint);if(t&&Le.axis===null){n.stopImmediatePropagation(),n.preventDefault(),nt=t.object.userData.pathPoint,nt?.kind==="waypoint"&&nt.routeId&&(Cn=nt.routeId),zt=!1,Bn?.select("routes"),lt(),rt();return}if(zt&&Le.axis===null){n.stopImmediatePropagation(),n.preventDefault();const i=e.find(r=>r.object.userData.editSegment!==void 0);if(i){const r=i.object.userData.editSegment,s=uh(he,dh(he,De),Math.min(Si(),he.destroyedAtTurn??Si())).find(l=>l.segment===r);if(!s)return;let o=0,a=1/0;for(let l=0;l<=300;l++){const u=s.curve.getPoint(jt.lerp(s.start,s.end,l/300));!Pn(he)&&!he.intangible&&(u.y=Et(u.x,u.z)+ti);const h=u.distanceToSquared(i.point);h<a&&(a=h,o=l/300)}const c=s.curve.getPoint(jt.lerp(s.start,s.end,o));Jm(r,c,Km(r,o))}}},!0);document.querySelector("#route-select").addEventListener("change",()=>{Le.dragging||Pt||St?.isPicking()||(Cn=document.querySelector("#route-select").value,nt=null,Vt=zt=!1,lt(),rt())});dt("#route-name").addEventListener("change",()=>{Le.dragging||Mn()&&(fl().name=dt("#route-name").value.trim()||"UNTITLED ROUTE",lt(),rt())});document.querySelector("#route-new").addEventListener("click",()=>{if(Le.dragging||je||!Mn())return;const n=La++,e={id:`route-${n}`,name:`ROUTE ${n}`,waypoints:[]};_n.push(e),Cn=e.id,nt=null,Vt=zt=!1,lt(),rt()});document.querySelector("#route-remove").addEventListener("click",()=>{if(!(Le.dragging||je)&&Mn()){if(ot.filter(n=>n.routeBinding?.routeId===Cn).forEach(n=>{n.routeBinding=void 0}),_n.splice(_n.findIndex(n=>n.id===Cn),1),!_n.length){const n=La++;_n.push({id:`route-${n}`,name:`ROUTE ${n}`,waypoints:[]})}Cn=_n[0].id,nt=null,Vt=zt=!1,ar(),lt(),rt()}});document.querySelector("#route-pick").addEventListener("click",()=>{!at()||!ke||je||Le.dragging||(Vt=!Vt,zt=!1,nt=null,dn=!1,lt(),rt())});function Qm(n){if(!at()||!ke||je||Le.dragging||!To().length||!n.length)return;const e=yg(n.map(i=>Vn(i))),t=n.length>1?`formation-${hl++}`:void 0;Mn()&&(n.forEach((i,r)=>{i.routeBinding={startTurn:De,routeId:Cn,offset:t?e[r]:{x:0,y:0,z:0},formationId:t},i.trackPoints=(i.trackPoints??[]).filter(s=>s.segment<De)}),ar(),lt(),rt())}document.querySelector("#route-bind").addEventListener("click",()=>Qm(rr()));document.querySelector("#route-unbind").addEventListener("click",()=>{Mn()&&(Ii().forEach(n=>{n.routeBinding=void 0}),ar(),lt(),rt())});for(const[n,e]of[["#route-up",-1],["#route-down",1]])document.querySelector(n).addEventListener("click",()=>{if(nt?.kind!=="waypoint")return;const t=To(),i=t.findIndex(s=>s.id===nt.id),r=i+e;r<0||r>=t.length||Mn()&&([t[i],t[r]]=[t[r],t[i]],ar(),lt(),rt())});document.querySelector("#path-delete").addEventListener("click",()=>{if(nt&&Mn()){if(nt.kind==="waypoint"){const n=To();n.splice(n.findIndex(e=>e.id===nt.id),1),n.length||ot.filter(e=>e.routeBinding?.routeId===Cn).forEach(e=>{e.routeBinding=void 0})}else{const n=nt,e=ot.find(t=>t.id===n.unitId);e.trackPoints=e.trackPoints?.filter(t=>t.id!==n.id)}nt=null,ar(),lt(),rt()}});document.querySelector("#track-edit").addEventListener("click",()=>{!at()||!ke||(Ln=!Ln,zt=Vt=!1,nt=null,dn=!1,lt(),rt())});document.querySelector("#track-add").addEventListener("click",()=>{!at()||!ke||(Ln=!0,zt=!zt,Vt=!1,nt=null,dn=!1,lt(),rt())});document.querySelector("#track-midpoint").addEventListener("click",()=>{if(!at()||!ke||!he||ut.size!==1||ii()<2)return;const n=jt.clamp(Math.floor(Number(dt("#track-segment").value)||1)-1,0,Si()-1),e=yp(he.positions,he.trackPoints??[],n,n+1).map(i=>new b(i.x,i.y,i.z)),t=new eh(e).getPoint(.5);Ln=!0,Jm(n,t,Km(n,.5))});dt("#track-segment").addEventListener("change",()=>{dt("#track-segment").value=String(jt.clamp(Math.floor(Number(dt("#track-segment").value)||1),1,Math.max(1,Si())))});for(const n of["x","y","z"])dt(`#path-${n}`).addEventListener("change",()=>{const e=Ka(),t=Number(dt(`#path-${n}`).value);if(!e||!Number.isFinite(t))return;const i=nt?.kind==="track"?nt.unitId:void 0;if(!Mn())return;const r=ot.find(s=>s.id===i);e[n]=n==="y"&&!r?.intangible?Math.max(0,t):t,r&&Os(r)&&(e.y=Et(e.x,e.z)),nt?.kind==="waypoint"&&ar(),lt(),rt()});for(const n of["#trail-display","#trail-turns"])document.querySelector(n).addEventListener("change",()=>lt());function eg(){const n=(e,t,i,r)=>{const s=Number(dt(e).value);return Number.isFinite(s)?jt.clamp(s,t,i):r};return{radius:n("#terrain-radius",8,240,50),strength:n("#terrain-strength",.1,30,6),target:n("#terrain-flat",0,180,20),density:n("#urban-density",1,100,70)/100,mode:document.querySelector("#terrain-brush").value}}const Vi=new h_(new Ft,new yi({color:7143340,depthTest:!1,transparent:!0,opacity:.9}));Vi.visible=!1;ts.add(Vi);function tg(n){if(Vi.visible=!!n&&Ot&&ke,!n)return;const{radius:e}=eg();let t=Vi.geometry.getAttribute("position");t||(t=new Dt(new Float32Array(240),3),t.setUsage(tl),Vi.geometry.setAttribute("position",t));for(let i=0;i<80;i++){const r=i/80*Math.PI*2,s=n.x+Math.cos(r)*e,o=n.z+Math.sin(r)*e;t.setXYZ(i,s,Et(s,o)+.6,o)}t.needsUpdate=!0,Vi.geometry.computeBoundingSphere()}function ng(n){if(!at()||!ke||!Pt)return;const e=eg(),t=Pt.last,i=t?t.distanceTo(n):0;if(t&&i<_t.spacing*.4)return;const r=t?Math.ceil(i/Math.max(_t.spacing,e.radius/4)):1;for(let s=1;s<=r;s++){const o=t?t.clone().lerp(n,s/r):n,a=e.mode==="smooth"||e.mode==="flatten"?e.strength/30:e.strength;(e.mode==="urban"||e.mode==="erase-urban"?nr.paint(o.x,o.z,e.radius,e.density,e.mode==="erase-urban"):_t.brush(o.x,o.z,e.radius,a,e.mode,e.target))&&(Pt.changed=!0,Cr=!0,nw(o,e.radius))}Pt.last=n.clone()}function Ja(n=!1){if(!Pt)return;const e=Pt;n||Lm(),Pt=null,n?(_t.data.set(e.before.terrain),nr.data.set(e.before.urban),Cr=!0):e.changed&&(Tr=e.checkpoint),vt.domElement.hasPointerCapture(e.pointerId)&&vt.domElement.releasePointerCapture(e.pointerId),It.enabled=!0,Cr?(Tl(!n),!n&&nn&&dl===_t&&ul===nr&&(Da=!1)):(pi.visible=!0,ws.visible=!0,nn&&(nn.root.visible=pi===nn.root),As=null),lt(),rt()}function Gi(n){n&&!at()||!n&&Rt()?.mapEditRef||(ln&&ei(),!Le.dragging&&(Ja(),Mi(!0),es(),dn=!1,Ot=n,Vt=zt=!1,nt=null,_h(),Vi.visible=!1,n&&!ke&&Hn(!0),vt.domElement.style.cursor=n?"crosshair":"",rt()))}vt.domElement.addEventListener("pointerdown",n=>{if(St?.isPicking()||!at()||!ke||!Ot||n.button!==0||n.altKey)return;n.stopImmediatePropagation(),n.preventDefault();const e=Co(n);!e||Math.abs(e.x)>_t.extent||Math.abs(e.z)>_t.extentZ||on()&&(Pt={before:Dl(),checkpoint:ve?.read()??null,pointerId:n.pointerId,changed:!1,last:null},It.enabled=!1,vt.domElement.setPointerCapture(n.pointerId),ng(e),tg(e))},!0);vt.domElement.addEventListener("pointermove",n=>{if(!at()||!ke||!Ot)return;const e=Co(n);tg(e),Pt&&(n.stopImmediatePropagation(),e&&ng(e))},!0);vt.domElement.addEventListener("pointerup",n=>{Pt&&(n.stopImmediatePropagation(),Ja())},!0);vt.domElement.addEventListener("pointercancel",()=>Ja(!0));vt.domElement.addEventListener("pointerleave",()=>{Pt||(Vi.visible=!1)});document.querySelector("#tab-terrain").addEventListener("click",()=>Gi(!0));document.querySelector("#tab-units").addEventListener("click",()=>Gi(!1));for(const[n,e]of[["#terrain-reset",()=>_t.reset()],["#terrain-generate",()=>_t.generate(Number(dt("#terrain-seed").value)||0,document.querySelector("#terrain-preset").value)]])document.querySelector(n).addEventListener("click",()=>{Pt||Mn()&&(e(),Cr=!0,Tl(),lt(),rt())});document.querySelector("#terrain-brush").addEventListener("change",rt);for(const n of["#urban-angle","#urban-seed"])dt(n).addEventListener("change",()=>{Pt||Mn()&&(Ts=jt.degToRad(jt.clamp(Number(dt("#urban-angle").value)||0,-180,180)),Pa=Number(dt("#urban-seed").value)|0,Cr=!0,Tl(),lt(),rt())});document.querySelector("#terrain-contour-smooth").addEventListener("change",()=>{Cr=!0});document.querySelector("#terrain-undo").addEventListener("click",Ll);document.querySelector("#terrain-redo").addEventListener("click",Il);const er=new tm,ir=new Be;function Oo(){const n=vt.domElement.getBoundingClientRect?.();return n&&n.width>0&&n.height>0?{left:n.left,top:n.top,width:n.width,height:n.height}:{left:0,top:0,width:innerWidth,height:innerHeight}}function Ba(){return typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches}function vh(n,e,t){const i=Oo(),r=[];yt.updateMatrixWorld(),tn.updateMatrixWorld(!0);for(const s of bi.values()){const o=s.userData.parts,a=s.userData.unit;if(!o||!a||!yl(s))continue;const c=typeof Is<"u"?Is.get(a.id):void 0,l=o.label.userData.dom,u=!l.hidden&&Number(l.style.opacity||"1")>0&&BM(l.getBoundingClientRect(),n,e,t>14?6:0),h=[o.icon,...c?.root.visible?[c.base]:[],...o.wreck.visible?[o.wreck]:[]];let d=1/0,f;for(const g of h.filter(yl)){const _=zM(g.getWorldPosition(new b).project(yt),i,n,e,u?Math.max(i.width,i.height):t);_!==null&&_<d&&(d=_,f=g)}f&&(d<=t||u)&&r.push({unit:a,distance:u?Math.min(d,t):d,object:f})}return r.sort((s,o)=>s.distance-o.distance||s.unit.id.localeCompare(o.unit.id))}function Dw(n,e,t=14){const i=[],r=Dr(De);for(const s of vh(n,e,t)){const o=Rs.get(s.unit.id);if(Zc!==void 0&&!o)continue;const a=new Set(o??[s.unit.id]);r.units.filter(c=>a.has(c.unit.id)).forEach(c=>i.push({unit:c.unit,distance:s.distance}))}return i.sort((s,o)=>s.distance-o.distance||s.unit.id.localeCompare(o.unit.id)).map(s=>s.unit)}function ig(n,e,t=14){const i=Dw(n,e,t);i.length===1?Wm(i[0]):(Ia=i.map(r=>r.id),Gm())}vt.domElement.addEventListener("pointerdown",n=>{!ln||n.button!==0||n.altKey||(n.stopImmediatePropagation(),n.preventDefault(),ig(n.clientX,n.clientY,sh(n.pointerType,Ba())))},!0);Fo.addEventListener("pointerdown",n=>{if(n.button!==0||!Pr||n.altKey||Ht())return;const e=sh(n.pointerType,Ba());if(ln){n.stopPropagation(),n.preventDefault(),ig(n.clientX,n.clientY,e);return}const t=(n.target instanceof Element?n.target.closest("[data-unit-id]"):null)?.dataset.unitId,i=vh(n.clientX,n.clientY,e),r=i.find(s=>s.unit.id===t)??i[0];r&&(n.stopPropagation(),n.preventDefault(),Al(r.unit))});function yl(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function Ul(n){const e=Oo();ir.x=(n.clientX-e.left)/e.width*2-1,ir.y=-((n.clientY-e.top)/e.height)*2+1,er.setFromCamera(ir,yt);const t=er.intersectObjects([...bi.values()].flatMap(r=>r.children),!0).filter(r=>yl(r.object));if(t.length||!Ba()&&n.pointerType!=="touch"&&n.pointerType!=="pen")return t;const i=vh(n.clientX,n.clientY,sh(n.pointerType,Ba()))[0];return i?[{distance:yt.position.distanceTo(i.object.getWorldPosition(new b)),point:i.object.getWorldPosition(new b),object:i.object}]:[]}function Qa(){so=null,Cu=-1/0,Kc=""}function Lw(n=performance.now()){const e=yt.position.distanceTo(It.target),t=gM(e,Zc),i=t!==Zc;Zc=t;const r=document.querySelector("#camera-readout");r&&(r.textContent=`FREE 3D / ${t}档`);const{width:s,height:o}=Oo(),a=[t,s,o,...yt.position.toArray(),...yt.quaternion.toArray(),ke,ln].join("|"),c=so===null;if(!c&&!i&&a===Kc)return;if(yt.updateMatrixWorld(),tn.updateMatrixWorld(!0),so??=Dr(De),c||i||a!==Kc&&n-Cu>=100){const h=so.units.map(d=>{const f=bi.get(d.unit.id),g=f.userData.parts,m=(t===3?f.position.clone():g.icon.getWorldPosition(new b)).project(yt),p=ke&&ut.has(d.unit.id);return{id:d.unit.id,label:d.unit.label,faction:d.unit.faction,icon:d.unit.icon,tgt:d.unit.tgt,escort:d.unit.escort,status:d.status,position:{x:d.position.x/et,y:d.position.y/et,z:d.position.z/et},screenX:(m.x+1)*s/2,screenY:(1-m.y)*o/2,onScreen:!p&&!d.unit.hidden&&!d.unit.intangible&&m.z>-1&&m.z<1&&Math.abs(m.x)<=1&&Math.abs(m.y)<=1}});Nd=xM(h,t),Rs.clear();for(const d of Nd)Rs.set(d.representativeId,d.memberIds);Kc=a,Cu=n}const l=new Map(so.units.map(h=>[h.unit.id,h])),u=new Map(Nd.map(h=>[h.representativeId,h]));for(const h of so.units){const d=bi.get(h.unit.id),f=d.userData.parts,g=Is.get(h.unit.id),_=u.get(h.unit.id),p=(_?.airRepresentativeId?l.get(_.airRepresentativeId):void 0)??(Pn(h.unit)?h:void 0),T=Xa(h.unit,h.position,Et),x=Math.max(0,T.y-d.position.y),v=El(h.unit,T,Et,ti).y-d.position.y,C=f.base===null?v+Nm-ti:Math.max(x,.6),P=new b(d.position.x,d.position.y+v,d.position.z),N=2*Math.max(yt.near,-P.applyMatrix4(yt.matrixWorldInverse).z)*Math.tan(jt.degToRad(yt.fov)/2)/Math.max(1,o),M=wd(t,N),S=Math.max(yt.near,-new b(d.position.x,d.position.y,d.position.z).applyMatrix4(yt.matrixWorldInverse).z),I=Math.max(yt.near,-new b(d.position.x,d.position.y+1.5,d.position.z).applyMatrix4(yt.matrixWorldInverse).z),k=2*Math.tan(jt.degToRad(yt.fov)/2)/Math.max(1,o),V=wd(t,S*k),G=wd(t,I*k);f.tgtRing.visible=!!_?.hasTgt&&h.status==="active",f.escortMarker.visible=!!_?.hasEscort&&h.status==="active"&&h.unit.faction!=="enemy",MM(f,g,{tier:h.unit.intangible?1:t,representative:!!_,status:h.status,faction:h.unit.faction,label:_?.label??h.unit.label,scale:M,baseScale:V,farBaseScale:G,hasAir:!!p,airAltitude:p?Math.max(0,p.position.y-d.position.y):0,hasTgt:!!_?.hasTgt,hasEscort:!!_?.hasEscort,iconHeight:v,poleHeight:C}),g.root.traverse(K=>{const Y=K.material;!Y||Array.isArray(Y)||(Y.userData.hiddenBaseOpacity??=Y.opacity,Y.opacity=Y.userData.hiddenBaseOpacity*(h.unit.hidden?.35:1))})}for(const h of tn.children)typeof h.userData.trail=="string"&&(h.visible=t===1||Rs.has(h.userData.trail))}function Iw(){const{width:n,height:e}=Oo();for(const{dom:t,position:i}of Pu){const r=i.clone().project(yt);t.hidden=r.z<-1||r.z>1,t.style.left=`${(r.x+1)*n/2}px`,t.style.top=`${(1-r.y)*e/2}px`}tn.updateMatrixWorld(!0);for(const t of bi.values()){const i=t.userData.parts,r=i.label.userData.dom,s=i.label.userData.displayVisible!==!1,o=Is.get(t.userData.unit.id),a=o?.root.visible?o.pole:i.pole,c=OM({camera:yt,width:n,height:e,group:t,icon:i.wreck.visible?i.wreck:i.icon,pole:a,dom:r,isAir:i.base!==null,naturalTop:a.userData.naturalTop??i.label.position.y,isMerged:(Rs.get(t.userData.unit.id)?.length??1)>1,decorated:i.tgtRing.visible||i.escortMarker.visible,visible:s})!==!1&&s,l=Wi().groups.find(h=>h.id===t.userData.unit?.groupId);r.title=l?`编组: ${l.name}`:"",r.style.borderLeft=l?`3px solid ${l.color}`:"",r.style.opacity=c?String(i.labelFade):"0";const u=c&&!r.hidden&&(ln||typeof en<"u"&&en?.active()||Ba());r.style.pointerEvents=u?"auto":"none",r.style.cursor=ln?"crosshair":u?"pointer":"",r.classList.toggle("range-attacker-label",t.userData.unit.id===zi),r.classList.toggle("range-target-label",t.userData.unit.id===Bi)}}let Pr=!1;function rg(){if(requestAnimationFrame(rg),!Pr)return;Pt?Lm():Cr&&Tl(),Ot&&!Pt&&(!nn||Da)&&Dm(),It.update(),um(Gr,yt.position.distanceTo(It.target)),Lw(),Iw();const n=Oo();lw.update(yt,n.width,n.height,_t.extent,_t.extentZ),St?.updateLabels(yt,n.width,n.height),en?.update(),vt.render(ts,yt)}addEventListener("resize",()=>{const n=document.querySelector("#scene").getBoundingClientRect(),e=Math.max(1,n.width),t=Math.max(1,n.height);yt.aspect=e/t,ja(),vt.setSize(e,t,!1)});function Nw(n){fg(n,{size:_t.size,extent:_t.extent})}function Uw(n){Nw(n),Ct&&xh(!1);const e=ve.read();try{Po(),ei(),ut.clear(),he=null,ve.reset(n.checkpoint),sr(n.checkpoint);const t=(i,r)=>Math.max(0,...i.filter(s=>s.startsWith(r)).map(s=>Number(s.slice(r.length))).filter(Number.isSafeInteger))+1;Qr=t(ot.map(i=>i.id),"unit-"),La=t(_n.map(i=>i.id),"route-"),ml=t(_n.flatMap(i=>i.waypoints.map(r=>r.id)),"wp-"),gl=t(ot.flatMap(i=>(i.trackPoints??[]).map(r=>r.id)),"control-"),hl=t(ot.flatMap(i=>i.routeBinding?.formationId?[i.routeBinding.formationId]:[]),"formation-"),zi=Bi="",lt(),rt()}catch(t){throw sr(e),ve.reset(e),lt(),rt(),t}}let Sl,Ha,fp="",sn=!1,ec="",Es=null;function Qt(n){ec=n;const e=document.querySelector("#workflow-state");e&&(e.textContent=n)}function Va(){Es=null,document.querySelector("#workflow-confirm")?.setAttribute("hidden","")}function Li(){const n=Rt(),e=n?.workflow?.mode==="formal",t=document.querySelector("#workflow-panel");if(!t)return;if(typeof Ct<"u"&&Ct){t.hidden=!0;for(const g of Array.from(t.querySelectorAll("button")))g.disabled=!0;return}t.hidden=!1;const i=e&&n.turns.length===n.workflow.committedTurns+1,r=Ht()||sn,s=n?.status==="finished";t.dataset.mode=s?"finished":e?Pi()?"draft":"history":n?.mapEditRef?"map-editor":"authoring";const o=document.querySelector("#task-editor-save");o&&(o.hidden=!!e||!!n?.mapEditRef||n?.turns.length!==1,o.disabled=r||s);const a=document.querySelector("#map-editor-save");a&&(a.hidden=!n?.mapEditRef,a.disabled=r||s);const c=document.querySelector("#workflow-reopen");c&&(c.hidden=!e,c.disabled=!e||r||!!Es||!!i||!n.workflow.committedTurns||!!n.workflow?.branchFrom&&n.workflow.committedTurns-1<n.workflow.branchFrom.turn);const l=document.querySelector("#workflow-save-draft");l&&(l.hidden=!e,l.disabled=r||s||!Pi()||!!Es||!Sl);const u=document.querySelector("#workflow-snapshot");u&&(u.hidden=!e,u.disabled=r||!!Es||!n?.workflow?.committedTurns||typeof Ha>"u"||!Ha);const h=document.querySelector("#editor-save-as-controls");h&&(h.hidden=!!e||s);for(const g of["map","task"]){const _=document.querySelector(`#${g}-editor-save-as`);_&&(_.hidden=!!e||(g==="map"?!n?.mapEditRef:!!n?.mapEditRef),_.disabled=r||s)}const d=document.querySelector("#editor-save-as-name");d&&(d.disabled=r||s,n&&fp!==n.id&&(fp=n.id,d.value=`${n.name.replace(/ 制作副本$/,"").slice(0,123)} COPY`));const f=document.querySelector("#workflow-state");f&&(f.textContent=ec||(s?"已结束":e?Pi()?`第 ${De+1} 回合 · 草稿`:`第 ${De+1} 回合 · 只读 · 已提交 ${n.workflow.committedTurns} 回合`:n?.mapEditRef?`地图制作 · r${n.mapEditRef.revision}`:"场景制作"));for(const g of["begin","advance","commit","discard"]){const _=document.querySelector(`#workflow-${g}`);_&&(_.hidden=!e,g==="discard"&&(_.textContent=n?.workflow?.committedTurns===0?"重置第一回合草稿…":"丢弃草稿…"),_.disabled=!e||s||r||!!Es||(g==="begin"?!!i:!Pi()))}}function Nu(n,e){if(typeof Ct<"u"&&Ct)return;if(!ve||sn||Ht()){Qt("请先结束当前放置、拖动或笔刷操作");return}if(e&&(e.revision!==ve.revision||e.sessionId!==Rt()?.id||e.turn!==De)){Va(),Qt("会话或回合已变化，请重新选择操作"),Li();return}if(!on())return;const t=ve.read(),i=t.editor.sessionId??"session-working",r=t.project.sessions.find(s=>s.id===i);if(!r?.workflow||(n==="reopen"?r.turns.length!==r.workflow.committedTurns||!r.workflow.committedTurns:r.status==="finished"||n!=="begin"&&!Pi()||n==="begin"&&r.turns.length!==r.workflow.committedTurns)){Qt("当前状态不适用此操作，请刷新回合状态"),Li();return}sn=!0,ec="",Va(),Li();try{if(n==="reopen"){ve.reopenLastCommittedTurn(i,ve.revision),or(),Hn(!0),Qt("最近回合已恢复为草稿");return}const o={begin:Ag,advance:Tg,commit:Eg,discard:wg}[n](t.project,i),a=o.sessions.find(u=>u.id===i),c={project:o,editor:{...t.editor,currentTurn:a.turns.length-1}},l={begin:"开始回合草稿",advance:"按航路推进草稿",commit:"提交回合",discard:"丢弃回合草稿"};ve.commit(c,l[n],t),or(),(n==="begin"||n==="advance"||n==="discard"&&a.workflow?.committedTurns===0)&&Hn(!0)}catch(s){Qt(s instanceof Error?s.message:String(s))}finally{sn=!1,rt()}}function Fw(n){if(Ct)return;if(n!=="commit"&&n!=="discard"&&n!=="reopen"){Nu(n);return}if(!ve||Ht()||sn||(n==="reopen"?!bn()||Rt().turns.length!==Rt().workflow.committedTurns||!Rt().workflow.committedTurns:!Pi())||!on())return;const e=n==="reopen"?"取消最近回合提交？":n==="commit"?"提交当前回合？":Rt()?.workflow?.committedTurns===0?"重置第一回合草稿？":"丢弃当前草稿？",t={action:n,revision:ve.revision,sessionId:Rt().id,turn:De},i=document.querySelector("#workflow-confirm");if(!i){window.confirm(e)&&Nu(n,t);return}Es=t,i.hidden=!1;const r=document.querySelector("#workflow-confirm-text");r&&(r.textContent=e),Li()}for(const n of["begin","advance","commit","discard","reopen"])document.querySelector(`#workflow-${n}`)?.addEventListener("click",()=>Fw(n));document.querySelector("#workflow-confirm-yes")?.addEventListener("click",()=>{const n=Es;n&&Nu(n.action,n)});document.querySelector("#workflow-confirm-cancel")?.addEventListener("click",()=>{Va(),Li()});document.querySelector("#canvas-resize")?.addEventListener("click",()=>{if(!ve||!at()||Ht())return;const n=Number(dt("#canvas-width").value),e=Number(dt("#canvas-height").value),t=Number(dt("#canvas-samples").value);if(on())try{const i=ve.read(),r=i.project.sessions.find(a=>a.id===i.editor.sessionId),s=Sg(i.project,r.mapRef,n,e,t),o=s.maps.at(-1);s.sessions.find(a=>a.id===r.id).mapRef={id:o.id,revision:o.revision},ve.commit({...i,project:s},"调整画布尺寸",i),or(),Hn(!0),Gi(!0),Qt(`画布 ${n} × ${e} km`)}catch(i){Qt(i instanceof Error?i.message:String(i))}});document.querySelector("#task-editor-save")?.addEventListener("click",()=>{if(!(Ct||!ve||Ht()||bn()||Rt()?.mapEditRef)&&on())try{const n=ve.read(),e=Rt(),t=n.project.tasks.find(s=>s.id===e.taskRef.id&&s.revision===e.taskRef.revision),i=bg(n.project,e.id,t?.name??e.name.replace(/ 制作副本$/,""),`map-${crypto.randomUUID()}`);ve.commit({...n,project:i},"保存任务新修订",n),or(),Hn(!0);const r=i.sessions.find(s=>s.id===e.id).taskRef;Qt(`任务已保存 · r${r.revision}`)}catch(n){Qt(n instanceof Error?n.message:String(n))}});document.querySelector("#map-editor-save")?.addEventListener("click",()=>{if(Ct||!ve||Ht()||sn||!Rt()?.mapEditRef||!on())return;const n=ve.read(),e=Rt().id;try{const t=Mg(n.project,e),i=t.sessions.find(s=>s.id===e).mapEditRef,r=ve.commit({...n,project:t},"保存地图新修订",n);or(),Gi(!0),Qt(r?`地图已保存 · r${i.revision}`:`无修改 · r${i.revision}`),Li()}catch(t){Qt(t instanceof Error?t.message:String(t))}});document.querySelector("#workflow-save-draft")?.addEventListener("click",async()=>{if(!ve||Ht()||sn||!Pi()||!Sl||!on())return;const n=document.querySelector("#workflow-save-draft");n.disabled=!0;try{Qt(await Sl()?"草稿已保存":"草稿保存失败")}catch(e){Qt(e instanceof Error?e.message:String(e))}finally{Li()}});document.querySelector("#workflow-snapshot")?.addEventListener("click",async()=>{if(!(Ct||!ve||Ht()||sn||!Rt()?.workflow?.committedTurns||!Ha)&&on()){sn=!0,Li();try{await Ha(),Qt("回合快照已发送到管理器快照仓库")}catch(n){Qt(n instanceof Error?n.message:String(n))}finally{sn=!1,Li(),rt()}}});for(const n of["map","task"])document.querySelector(`#${n}-editor-save-as`)?.addEventListener("click",()=>{if(Ct||!ve||Ht()||sn||bn()||!!Rt()?.mapEditRef!=(n==="map")||!on())return;const e=document.querySelector("#editor-save-as-name").value.trim();if(!e){Qt("请填写副本名称");return}try{const t=ve.read(),i=Rt(),r=`map-${crypto.randomUUID()}`,s=n==="map"?QM(t.project,i.id,r,e):ew(t.project,i.id,{mapId:r,taskId:`task-${crypto.randomUUID()}`},e);ve.commit({...t,project:s.project},n==="map"?"另存为新地图":"另存为新任务",t),or(),Hn(!0),n==="map"&&Gi(!0),Qt(`${n==="map"?"地图":"任务"}已另存为「${e}」r1`)}catch(t){Qt(t instanceof Error?t.message:String(t))}});function xh(n){if(n!==Ct){if(Ht()||sn||!on())throw new Error("请先完成当前编辑操作");if(n){const e=ve.read(),t=hg(e),i=_p(e),r=new Fu(i);Qc={edit:ke,terrain:Ot},Po(),ut.clear(),he=null,Jc=ve,Ua=e,Pl=t,Cs.clear(),Cs.set(i.editor.currentTurn,r),Ct=!0,ve=r}else Po(),ut.clear(),he=null,ve=Jc,Ct=!1,Jc=null,Ua=null,typeof Fa<"u"&&(Fa=null),Cs.clear(),ke=Qc.edit,Ot=Qc.terrain;Yr=null,_l="",_a="",sr(ve.read()),document.querySelector("#app").dataset.playerView=String(Ct),document.querySelector("#player-viewer-open").hidden=Ct,document.querySelector("#player-viewer-exit").hidden=!Ct,lt(),rt()}}function kw(n){const e=ug(n);if(Ht()||sn||!on())throw new Error("请先完成当前编辑操作");Ct&&xh(!1);const t=ve.read();Qc={edit:ke,terrain:Ot},Po(),ut.clear(),he=null,Jc=ve,Ua=t,Fa=e,Pl=e.turns.length-1;const i=new Fu(e.turns[0]);Cs.clear(),Cs.set(0,i),ve=i,Ct=!0,Yr=null,_l="",_a="",sr(i.read()),document.querySelector("#app").dataset.playerView="true",document.querySelector("#player-viewer-open").hidden=!0,document.querySelector("#player-viewer-exit").hidden=!1,lt(),rt()}function Ow(n){if(!Ua||Ht()||sn)return;const e=Math.max(0,Math.min(n,Pl));if(e===De||!on())return;const t=ke,i=typeof Fa<"u"?Fa:null,r=Cs.get(e)??new Fu(i?i.turns[e]:_p(Ua,e));Cs.set(e,r),Po(),ut.clear(),he=null,ve=r,Yr=null,sr(r.read()),ke=t,lt(),rt()}function zw(){if(!Ct||Ht()||sn||!on())return;const n=ve.read(),e=n.project.sessions.find(s=>s.id===n.editor.sessionId);e.routes=[{id:"player-viewer-route",name:"Viewer",waypoints:[]}],n.editor.activeRouteId="player-viewer-route";const t=Rg(Cg(n,n.editor.sessionId)),i=URL.createObjectURL(new Blob([t],{type:"application/json"})),r=document.createElement("a");r.href=i,r.download=`player-view-turn-${De+1}.json`,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function Po(){St?.cancel(),St?.clearSelection(),mi=null,typeof en<"u"&&en?.cancel(),ke=Ot=Vt=Ln=zt=dn=!1,nt=null,je=null,Oi=null,Xi=!1,Tr=null,Rn=null,ka=null,za.clear(),Le.detach(),Vi.visible=!1,Pt&&vt.domElement.hasPointerCapture(Pt.pointerId)&&vt.domElement.releasePointerCapture(Pt.pointerId),Pt=null,Mi(!0),It.enabled=!0,vt.domElement.style.cursor="",Va(),ec=""}function or(){Yr=null,Po();const n=[...ut];sr(ve.read()),ut.clear(),n.filter(t=>ot.some(i=>i.id===t)).forEach(t=>ut.add(t)),he=Ii().at(-1)??null;const e=(t,i,r)=>Math.max(r,...t.filter(s=>s.startsWith(i)).map(s=>Number(s.slice(i.length))+1).filter(Number.isSafeInteger));Qr=e(ot.map(t=>t.id),"unit-",Qr),La=e(_n.map(t=>t.id),"route-",La),ml=e(_n.flatMap(t=>t.waypoints.map(i=>i.id)),"wp-",ml),gl=e(ot.flatMap(t=>(t.trackPoints??[]).map(i=>i.id)),"control-",gl),hl=e(ot.flatMap(t=>t.routeBinding?.formationId?[t.routeBinding.formationId]:[]),"formation-",hl),lt(),rt()}let pp=!1;function Hw(n,e){if(pp)throw new Error("Workspace already mounted");pp=!0,ve=n,Sl=e?.saveDraft,Ha=e?.generateSnapshot,Bn=HM({fitMap:gh,topView:vw,toggleEdit:()=>Hn(!ke),viewerExport:zw,viewerUndo:Ll,viewerRedo:Il,chooseTool:t=>{Le.dragging||Pt||gi||(St?.cancel(),t!=="links"&&t!=="markers"&&en?.cancel(),["markers","drawing"].includes(t)||St?.clearSelection(),je&&t!=="units"&&es(),t==="terrain"&&at()?(Hn(!0),Gi(!0)):Ot&&(Rt()?.mapEditRef?(Ot=!1,Vi.visible=!1):Gi(!1)),["routes"].includes(t)||(Vt=zt=Ln=!1,nt=null),(["markers","drawing","links"].includes(t)?_i():at())&&["groups","markers","drawing","routes","units","equipment","links"].includes(t)&&!ke&&Hn(!0),t!=="range"&&ln&&ei(),lt(),rt())}}),Xr=document.createElement("aside"),Xr.id="player-roster-panel",Xr.hidden=!0,Xr.setAttribute("aria-label","玩家资料卡"),document.querySelector("#app").append(Xr),document.querySelector("#app").classList.add("player-roster-mounted"),Du=WM(Xr,{readRevision:()=>ve.revision,read:()=>ve.read().project,busy:()=>sn||Ht(),report:Qt,beginCreate:bw,armPlacement:Mw,cancelPlacement:es,selectUnit:(t,i)=>{if(sn||Ht())return;const r=ot.find(s=>s.id===t);r&&(qn([r]),i&&dp([t]))},recordAction:Ew}),km=VM(Bn.panels.groups,{read:Wi,units:()=>ot,selectedIds:()=>[...ut],editable:()=>at()&&ke&&!Rt()?.mapEditRef,change:kd,select:t=>qn(ot.filter(i=>t.includes(i.id))),copy:dw,focus:dp}),St=KM({markersPanel:Bn.panels.markers,drawingsPanel:Bn.panels.drawing,world:tn,labelRoot:Cl,read:Wi,change:(t,i)=>kd(t,r=>i(r)),editable:()=>_i()&&ke,focus:hh,sampleHeightKm:(t,i)=>Et(t*et,i*et)/et,onMarkerPick:t=>en?.pick("marker",t)??!1,onTransformMode:t=>{vo=t,xo()},onOpenPanel:t=>{document.querySelector("#edit-panel").dataset.activeTab!==t&&Bn?.select(t)},onSelectionChange:t=>{t&&(vo="translate",ei(),nt=null,Vt=zt=Ln=dn=!1,ut.clear(),he=null,Nl(),lt(),rt()),xo()},onPickingChange:t=>{document.querySelector("#app").dataset.mapPicking=String(t),t&&(ei(),Mi(!0),dn=!1,Vt=zt=Ln=Ot=!1,nt=null,Vi.visible=!1,Le.detach()),It.enabled=Pr,vt.domElement.style.cursor=t?"crosshair":"",Li()}}),en=qM({panel:Bn.panels.links,world:tn,read:Wi,readUnits:()=>ot.map(t=>{const i=El(t,Vn(t),Et,ti);return{id:t.id,label:t.label,position:{x:i.x/et,y:i.y/et,z:i.z/et}}}),selectedUnitId:()=>he?.id,editable:()=>_i()&&ke&&!Rt()?.mapEditRef,busy:()=>sn||Ht(),change:(t,i)=>kd(t,r=>i(r)),onModeChange:t=>{t&&(St?.cancel(),St?.clearSelection(),ei(),Mi(!0),dn=Vt=zt=Ln=!1,nt=null,Le.detach()),vt.domElement.style.cursor=t?"crosshair":"",xo()}}),document.querySelector("#route-select-bound").addEventListener("click",()=>qn(ot.filter(t=>t.routeBinding?.routeId===Cn))),document.querySelector("#route-bind-group").addEventListener("click",()=>{const t=document.querySelector("#route-group-select").value;Qm(ot.filter(i=>i.groupId===t&&qa(i)))});for(const t of["#route-visible","#route-labels"])document.querySelector(t).addEventListener("change",()=>lt());return vt.domElement.addEventListener("pointerdown",t=>{if(!St?.isPicking()||t.button!==0||t.altKey)return;t.stopImmediatePropagation(),t.preventDefault();const i=Co(t);i&&St.pick({x:i.x/et,y:i.y/et,z:i.z/et})},!0),vt.domElement.addEventListener("pointermove",t=>{if(!St?.isPicking())return;const i=Co(t);St.preview(i?{x:i.x/et,y:i.y/et,z:i.z/et}:null)}),or(),ja(),Hn(!1),lt(),rg(),{flush:()=>{if(!on())throw new Error("当前编辑尚未保存")},open:Uw,sync:or,busy:()=>sn||Ht(),selectedUnitId:()=>he?.id,editTerrain:()=>{at()&&(Hn(!0),Gi(!0))},editScenario:()=>{at()&&(Hn(!0),Gi(!1))},playerView:xh,snapshot:kw,activate:t=>{Pr=t,It.enabled=t,Bn?.sync({editing:ke,editable:_i(),mapOnly:!!Rt()?.mapEditRef,active:t,playerView:Ct,viewerCanUndo:!!ve?.canUndo,viewerCanRedo:!!ve?.canRedo}),t?(lt(),rt()):(St?.cancel(),en?.cancel(),ei(),Le.detach(),$m())}}}export{Hw as mountWorkspace};
