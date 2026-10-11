import{W as tt,G as cg,R as wh,p as lg,v as dg,w as ug,d as zu,c as xp,a as hg,b as fg,H as yp,e as pg,P as Bu,f as mg,g as Sp,m as Hu,h as Vu,U as bp,r as Gu,i as gg,j as _g,k as vg,l as xg,n as yg,o as Mp,t as wp,q as Sg,s as bg,u as Mg,x as wg,y as Eg,z as Tg,A as Ep,B as Tp,C as Ag,D as Rg,E as Cg,F as Pg,I as Dg,J as Lg,K as Ig}from"./index-D4SCd4GL.js";const Wu="179",fo={ROTATE:0,DOLLY:1,PAN:2},co={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ng=0,Eh=1,Ug=2,Ap=1,kg=2,br=3,Rr=0,yi=1,fn=2,jr=0,po=1,Bd=2,Th=3,Ah=4,Fg=5,_s=100,Og=101,zg=102,Bg=103,Hg=104,Vg=200,Gg=201,Wg=202,Xg=203,Hd=204,Vd=205,qg=206,$g=207,Yg=208,jg=209,Zg=210,Kg=211,Jg=212,Qg=213,e0=214,Gd=0,Wd=1,Xd=2,So=3,qd=4,$d=5,Yd=6,jd=7,Rp=0,t0=1,n0=2,Zr=0,i0=1,r0=2,s0=3,o0=4,a0=5,c0=6,l0=7,Cp=300,bo=301,Mo=302,Zd=303,Kd=304,Ml=306,Jd=1e3,Ss=1001,Qd=1002,nr=1003,d0=1004,ic=1005,fr=1006,zl=1007,bs=1008,mr=1009,Pp=1010,Dp=1011,xa=1012,Xu=1013,Ds=1014,wr=1015,Wa=1016,qu=1017,$u=1018,ya=1020,Lp=35902,Ip=1021,Np=1022,er=1023,Sa=1026,ba=1027,Up=1028,Yu=1029,kp=1030,ju=1031,Zu=1033,Vc=33776,Gc=33777,Wc=33778,Xc=33779,eu=35840,tu=35841,nu=35842,iu=35843,ru=36196,su=37492,ou=37496,au=37808,cu=37809,lu=37810,du=37811,uu=37812,hu=37813,fu=37814,pu=37815,mu=37816,gu=37817,_u=37818,vu=37819,xu=37820,yu=37821,qc=36492,Su=36494,bu=36495,Fp=36283,Mu=36284,wu=36285,Eu=36286,u0=3200,h0=3201,f0=0,p0=1,$r="",hi="srgb",wo="srgb-linear",tl="linear",Zt="srgb",Ws=7680,Rh=519,m0=512,g0=513,_0=514,Op=515,v0=516,x0=517,y0=518,S0=519,Ch=35044,nl=35048,Ph="300 es",pr=2e3,il=2001;class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dh=1234567;const la=Math.PI/180,Ma=180/Math.PI;function Os(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kn[n&255]+Kn[n>>8&255]+Kn[n>>16&255]+Kn[n>>24&255]+"-"+Kn[e&255]+Kn[e>>8&255]+"-"+Kn[e>>16&15|64]+Kn[e>>24&255]+"-"+Kn[t&63|128]+Kn[t>>8&255]+"-"+Kn[t>>16&255]+Kn[t>>24&255]+Kn[i&255]+Kn[i>>8&255]+Kn[i>>16&255]+Kn[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function Ku(n,e){return(n%e+e)%e}function b0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function M0(n,e,t){return n!==e?(t-n)/(e-n):0}function da(n,e,t){return(1-t)*n+t*e}function w0(n,e,t,i){return da(n,e,1-Math.exp(-t*i))}function E0(n,e=1){return e-Math.abs(Ku(n,e*2)-e)}function T0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function A0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function R0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function C0(n,e){return n+Math.random()*(e-n)}function P0(n){return n*(.5-Math.random())}function D0(n){n!==void 0&&(Dh=n);let e=Dh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function L0(n){return n*la}function I0(n){return n*Ma}function N0(n){return(n&n-1)===0&&n!==0}function U0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function k0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function F0(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),d=o((e+i)/2),u=s((e-i)/2),h=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*d,c*u,c*h,a*l);break;case"YZY":n.set(c*h,a*d,c*u,a*l);break;case"ZXZ":n.set(c*u,c*h,a*d,a*l);break;case"XZX":n.set(a*d,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*d,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ro(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function li(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const jt={DEG2RAD:la,RAD2DEG:Ma,generateUUID:Os,clamp:Rt,euclideanModulo:Ku,mapLinear:b0,inverseLerp:M0,lerp:da,damp:w0,pingpong:E0,smoothstep:T0,smootherstep:A0,randInt:R0,randFloat:C0,randFloatSpread:P0,seededRandom:D0,degToRad:L0,radToDeg:I0,isPowerOfTwo:N0,ceilPowerOfTwo:U0,floorPowerOfTwo:k0,setQuaternionFromProperEuler:F0,normalize:li,denormalize:ro};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],d=i[r+2],u=i[r+3];const h=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==h||l!==f||d!==g){let m=1-a;const p=c*h+l*f+d*g+u*_,w=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),P=Math.atan2(C,p*w);m=Math.sin(m*P)/C,a=Math.sin(a*P)/C}const v=a*w;if(c=c*m+h*v,l=l*m+f*v,d=d*m+g*v,u=u*m+_*v,m===1-a){const C=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=C,l*=C,d*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],d=i[r+3],u=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+d*u+c*f-l*h,e[t+1]=c*g+d*h+l*u-a*f,e[t+2]=l*g+d*f+a*h-c*u,e[t+3]=d*g-a*u-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(r/2),u=a(s/2),h=c(i/2),f=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*d*u+l*f*g,this._y=l*f*u-h*d*g,this._z=l*d*g+h*f*u,this._w=l*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+l*f*g,this._y=l*f*u-h*d*g,this._z=l*d*g-h*f*u,this._w=l*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-l*f*g,this._y=l*f*u+h*d*g,this._z=l*d*g+h*f*u,this._w=l*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-l*f*g,this._y=l*f*u+h*d*g,this._z=l*d*g-h*f*u,this._w=l*d*u+h*f*g;break;case"YZX":this._x=h*d*u+l*f*g,this._y=l*f*u+h*d*g,this._z=l*d*g-h*f*u,this._w=l*d*u-h*f*g;break;case"XZY":this._x=h*d*u-l*f*g,this._y=l*f*u-h*d*g,this._z=l*d*g+h*f*u,this._w=l*d*u+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],u=t[10],h=i+a+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(d-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+o*a+r*l-s*c,this._y=r*d+o*c+s*a-i*l,this._z=s*d+o*l+i*c-r*a,this._w=o*d-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),u=Math.sin((1-t)*d)/l,h=Math.sin(t*d)/l;return this._w=o*u+this._w*h,this._x=i*u+this._x*h,this._y=r*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,i=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),d=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+c*l+o*u-a*d,this.y=i+c*d+a*l-s*u,this.z=r+c*u+s*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bl.copy(this).projectOnVector(e),this.sub(Bl)}reflect(e){return this.sub(Bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bl=new b,Lh=new mn;class wt{constructor(e,t,i,r,s,o,a,c,l){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],d=i[4],u=i[7],h=i[2],f=i[5],g=i[8],_=r[0],m=r[3],p=r[6],w=r[1],x=r[4],v=r[7],C=r[2],P=r[5],D=r[8];return s[0]=o*_+a*w+c*C,s[3]=o*m+a*x+c*P,s[6]=o*p+a*v+c*D,s[1]=l*_+d*w+u*C,s[4]=l*m+d*x+u*P,s[7]=l*p+d*v+u*D,s[2]=h*_+f*w+g*C,s[5]=h*m+f*x+g*P,s[8]=h*p+f*v+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-i*s*d+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],u=d*o-a*l,h=a*c-d*s,f=l*s-o*c,g=t*u+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*l-d*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(d*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Hl.makeScale(e,t)),this}rotate(e){return this.premultiply(Hl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hl=new wt;function zp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function rl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function O0(){const n=rl("canvas");return n.style.display="block",n}const Ih={};function mo(n){n in Ih||(Ih[n]=!0,console.warn(n))}function z0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Nh=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uh=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function B0(){const n={enabled:!0,workingColorSpace:wo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Zt&&(r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Zt&&(r.r=go(r.r),r.g=go(r.g),r.b=go(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$r?tl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return mo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return mo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wo]:{primaries:e,whitePoint:i,transfer:tl,toXYZ:Nh,fromXYZ:Uh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:i,transfer:Zt,toXYZ:Nh,fromXYZ:Uh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),n}const Bt=B0();function Er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function go(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xs;class H0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xs===void 0&&(Xs=rl("canvas")),Xs.width=e.width,Xs.height=e.height;const r=Xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Xs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Er(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Er(t[i]/255)*255):t[i]=Er(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let V0=0;class Ju{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Os(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Vl(r[o].image)):s.push(Vl(r[o]))}else s=Vl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Vl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?H0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let G0=0;const Gl=new b;class Si extends Fs{constructor(e=Si.DEFAULT_IMAGE,t=Si.DEFAULT_MAPPING,i=Ss,r=Ss,s=fr,o=bs,a=er,c=mr,l=Si.DEFAULT_ANISOTROPY,d=$r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Os(),this.name="",this.source=new Ju(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gl).x}get height(){return this.source.getSize(Gl).y}get depth(){return this.source.getSize(Gl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jd:e.x=e.x-Math.floor(e.x);break;case Ss:e.x=e.x<0?0:1;break;case Qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jd:e.y=e.y-Math.floor(e.y);break;case Ss:e.y=e.y<0?0:1;break;case Qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Si.DEFAULT_IMAGE=null;Si.DEFAULT_MAPPING=Cp;Si.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],d=c[4],u=c[8],h=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(d-h)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(f+1)/2,C=(p+1)/2,P=(d+h)/4,D=(u+_)/4,N=(g+m)/4;return x>v&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=P/i,s=D/i):v>C?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=P/r,s=N/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=D/s,r=N/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(h-d)*(h-d));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(h-d)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class W0 extends Fs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Si(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:fr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ju(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends W0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bp extends Si{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nr,this.minFilter=nr,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class X0 extends Si{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=nr,this.minFilter=nr,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lo{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yi):Yi.fromBufferAttribute(s,o),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rc.copy(i.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),sc.subVectors(this.max,Go),qs.subVectors(e.a,Go),$s.subVectors(e.b,Go),Ys.subVectors(e.c,Go),kr.subVectors($s,qs),Fr.subVectors(Ys,$s),os.subVectors(qs,Ys);let t=[0,-kr.z,kr.y,0,-Fr.z,Fr.y,0,-os.z,os.y,kr.z,0,-kr.x,Fr.z,0,-Fr.x,os.z,0,-os.x,-kr.y,kr.x,0,-Fr.y,Fr.x,0,-os.y,os.x,0];return!Wl(t,qs,$s,Ys,sc)||(t=[1,0,0,0,1,0,0,0,1],!Wl(t,qs,$s,Ys,sc))?!1:(oc.crossVectors(kr,Fr),t=[oc.x,oc.y,oc.z],Wl(t,qs,$s,Ys,sc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _r=[new b,new b,new b,new b,new b,new b,new b,new b],Yi=new b,rc=new Lo,qs=new b,$s=new b,Ys=new b,kr=new b,Fr=new b,os=new b,Go=new b,sc=new b,oc=new b,as=new b;function Wl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){as.fromArray(n,s);const a=r.x*Math.abs(as.x)+r.y*Math.abs(as.y)+r.z*Math.abs(as.z),c=e.dot(as),l=t.dot(as),d=i.dot(as);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const q0=new Lo,Wo=new b,Xl=new b;class Io{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):q0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const t=Wo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Wo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Xl)),this.expandByPoint(Wo.copy(e.center).sub(Xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const vr=new b,ql=new b,ac=new b,Or=new b,$l=new b,cc=new b,Yl=new b;class Xa{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ql.copy(e).add(t).multiplyScalar(.5),ac.copy(t).sub(e).normalize(),Or.copy(this.origin).sub(ql);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ac),a=Or.dot(this.direction),c=-Or.dot(ac),l=Or.lengthSq(),d=Math.abs(1-o*o);let u,h,f,g;if(d>0)if(u=o*c-a,h=o*a-c,g=s*d,u>=0)if(h>=-g)if(h<=g){const _=1/d;u*=_,h*=_,f=u*(u+o*h+2*a)+h*(o*u+h+2*c)+l}else h=s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+l;else h=-s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+l;else h<=-g?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+h*(h+2*c)+l):h<=g?(u=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+h*(h+2*c)+l);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ql).addScaledVector(ac,h),f}intersectSphere(e,t){vr.subVectors(e.center,this.origin);const i=vr.dot(this.direction),r=vr.dot(vr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,i,r,s){$l.subVectors(t,e),cc.subVectors(i,e),Yl.crossVectors($l,cc);let o=this.direction.dot(Yl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Or.subVectors(this.origin,e);const c=a*this.direction.dot(cc.crossVectors(Or,cc));if(c<0)return null;const l=a*this.direction.dot($l.cross(Or));if(l<0||c+l>o)return null;const d=-a*Or.dot(Yl);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,i,r,s,o,a,c,l,d,u,h,f,g,_,m){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,d,u,h,f,g,_,m)}set(e,t,i,r,s,o,a,c,l,d,u,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/js.setFromMatrixColumn(e,0).length(),s=1/js.setFromMatrixColumn(e,1).length(),o=1/js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=o*d,f=o*u,g=a*d,_=a*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*d,f=c*u,g=l*d,_=l*u;t[0]=h+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=f*a-g,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*d,f=c*u,g=l*d,_=l*u;t[0]=h-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*d,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*d,f=o*u,g=a*d,_=a*u;t[0]=c*d,t[4]=g*l-f,t[8]=h*l+_,t[1]=c*u,t[5]=_*l+h,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*d,t[4]=_-h*u,t[8]=g*u+f,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=f*u+g,t[10]=h-_*u}else if(e.order==="XZY"){const h=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=h*u+_,t[5]=o*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*d,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($0,e,Y0)}lookAt(e,t,i){const r=this.elements;return Ai.subVectors(e,t),Ai.lengthSq()===0&&(Ai.z=1),Ai.normalize(),zr.crossVectors(i,Ai),zr.lengthSq()===0&&(Math.abs(i.z)===1?Ai.x+=1e-4:Ai.z+=1e-4,Ai.normalize(),zr.crossVectors(i,Ai)),zr.normalize(),lc.crossVectors(Ai,zr),r[0]=zr.x,r[4]=lc.x,r[8]=Ai.x,r[1]=zr.y,r[5]=lc.y,r[9]=Ai.y,r[2]=zr.z,r[6]=lc.z,r[10]=Ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],d=i[1],u=i[5],h=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],w=i[3],x=i[7],v=i[11],C=i[15],P=r[0],D=r[4],N=r[8],M=r[12],S=r[1],I=r[5],F=r[9],V=r[13],G=r[2],J=r[6],Y=r[10],de=r[14],q=r[3],oe=r[7],xe=r[11],We=r[15];return s[0]=o*P+a*S+c*G+l*q,s[4]=o*D+a*I+c*J+l*oe,s[8]=o*N+a*F+c*Y+l*xe,s[12]=o*M+a*V+c*de+l*We,s[1]=d*P+u*S+h*G+f*q,s[5]=d*D+u*I+h*J+f*oe,s[9]=d*N+u*F+h*Y+f*xe,s[13]=d*M+u*V+h*de+f*We,s[2]=g*P+_*S+m*G+p*q,s[6]=g*D+_*I+m*J+p*oe,s[10]=g*N+_*F+m*Y+p*xe,s[14]=g*M+_*V+m*de+p*We,s[3]=w*P+x*S+v*G+C*q,s[7]=w*D+x*I+v*J+C*oe,s[11]=w*N+x*F+v*Y+C*xe,s[15]=w*M+x*V+v*de+C*We,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],u=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*u-r*l*u-s*a*h+i*l*h+r*a*f-i*c*f)+_*(+t*c*f-t*l*h+s*o*h-r*o*f+r*l*d-s*c*d)+m*(+t*l*u-t*a*f-s*o*u+i*o*f+s*a*d-i*l*d)+p*(-r*a*d-t*c*u+t*a*h+r*o*u-i*o*h+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],u=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=u*m*l-_*h*l+_*c*f-a*m*f-u*c*p+a*h*p,x=g*h*l-d*m*l-g*c*f+o*m*f+d*c*p-o*h*p,v=d*_*l-g*u*l+g*a*f-o*_*f-d*a*p+o*u*p,C=g*u*c-d*_*c-g*a*h+o*_*h+d*a*m-o*u*m,P=t*w+i*x+r*v+s*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return e[0]=w*D,e[1]=(_*h*s-u*m*s-_*r*f+i*m*f+u*r*p-i*h*p)*D,e[2]=(a*m*s-_*c*s+_*r*l-i*m*l-a*r*p+i*c*p)*D,e[3]=(u*c*s-a*h*s-u*r*l+i*h*l+a*r*f-i*c*f)*D,e[4]=x*D,e[5]=(d*m*s-g*h*s+g*r*f-t*m*f-d*r*p+t*h*p)*D,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*p-t*c*p)*D,e[7]=(o*h*s-d*c*s+d*r*l-t*h*l-o*r*f+t*c*f)*D,e[8]=v*D,e[9]=(g*u*s-d*_*s-g*i*f+t*_*f+d*i*p-t*u*p)*D,e[10]=(o*_*s-g*a*s+g*i*l-t*_*l-o*i*p+t*a*p)*D,e[11]=(d*a*s-o*u*s-d*i*l+t*u*l+o*i*f-t*a*f)*D,e[12]=C*D,e[13]=(d*_*r-g*u*r+g*i*h-t*_*h-d*i*m+t*u*m)*D,e[14]=(g*a*r-o*_*r-g*i*c+t*_*c+o*i*m-t*a*m)*D,e[15]=(o*u*r-d*a*r+d*i*c-t*u*c-o*i*h+t*a*h)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,d*a+i,d*c-r*o,0,l*c-r*a,d*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,d=o+o,u=a+a,h=s*l,f=s*d,g=s*u,_=o*d,m=o*u,p=a*u,w=c*l,x=c*d,v=c*u,C=i.x,P=i.y,D=i.z;return r[0]=(1-(_+p))*C,r[1]=(f+v)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(f-v)*P,r[5]=(1-(h+p))*P,r[6]=(m+w)*P,r[7]=0,r[8]=(g+x)*D,r[9]=(m-w)*D,r[10]=(1-(h+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=js.set(r[0],r[1],r[2]).length();const o=js.set(r[4],r[5],r[6]).length(),a=js.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ji.copy(this);const l=1/s,d=1/o,u=1/a;return ji.elements[0]*=l,ji.elements[1]*=l,ji.elements[2]*=l,ji.elements[4]*=d,ji.elements[5]*=d,ji.elements[6]*=d,ji.elements[8]*=u,ji.elements[9]*=u,ji.elements[10]*=u,t.setFromRotationMatrix(ji),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=pr,c=!1){const l=this.elements,d=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===pr)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===il)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=pr,c=!1){const l=this.elements,d=2/(t-e),u=2/(i-r),h=-(t+e)/(t-e),f=-(i+r)/(i-r);let g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===pr)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===il)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const js=new b,ji=new qt,$0=new b(0,0,0),Y0=new b(1,1,1),zr=new b,lc=new b,Ai=new b,kh=new qt,Fh=new mn;class ii{constructor(e=0,t=0,i=0,r=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],d=r[9],u=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class Qu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let j0=0;const Oh=new b,Zs=new mn,xr=new qt,dc=new b,Xo=new b,Z0=new b,K0=new mn,zh=new b(1,0,0),Bh=new b(0,1,0),Hh=new b(0,0,1),Vh={type:"added"},J0={type:"removed"},Ks={type:"childadded",child:null},jl={type:"childremoved",child:null};class vn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new b,t=new ii,i=new mn,r=new b(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new wt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(zh,e)}rotateY(e){return this.rotateOnAxis(Bh,e)}rotateZ(e){return this.rotateOnAxis(Hh,e)}translateOnAxis(e,t){return Oh.copy(e).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zh,e)}translateY(e){return this.translateOnAxis(Bh,e)}translateZ(e){return this.translateOnAxis(Hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?dc.copy(e):dc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xr.lookAt(Xo,dc,this.up):xr.lookAt(dc,Xo,this.up),this.quaternion.setFromRotationMatrix(xr),r&&(xr.extractRotation(r.matrixWorld),Zs.setFromRotationMatrix(xr),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vh),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(J0),jl.child=e,this.dispatchEvent(jl),jl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xr.multiply(e.parent.matrixWorld)),e.applyMatrix4(xr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vh),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,Z0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,K0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new b(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zi=new b,yr=new b,Zl=new b,Sr=new b,Js=new b,Qs=new b,Gh=new b,Kl=new b,Jl=new b,Ql=new b,ed=new Ft,td=new Ft,nd=new Ft;class Qi{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Zi.subVectors(e,t),r.cross(Zi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Zi.subVectors(r,t),yr.subVectors(i,t),Zl.subVectors(e,t);const o=Zi.dot(Zi),a=Zi.dot(yr),c=Zi.dot(Zl),l=yr.dot(yr),d=yr.dot(Zl),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const h=1/u,f=(l*c-a*d)*h,g=(o*d-a*c)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Sr)===null?!1:Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Sr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Sr.x),c.addScaledVector(o,Sr.y),c.addScaledVector(a,Sr.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return ed.setScalar(0),td.setScalar(0),nd.setScalar(0),ed.fromBufferAttribute(e,t),td.fromBufferAttribute(e,i),nd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ed,s.x),o.addScaledVector(td,s.y),o.addScaledVector(nd,s.z),o}static isFrontFacing(e,t,i,r){return Zi.subVectors(i,t),yr.subVectors(e,t),Zi.cross(yr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zi.subVectors(this.c,this.b),yr.subVectors(this.a,this.b),Zi.cross(yr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Qi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Js.subVectors(r,i),Qs.subVectors(s,i),Kl.subVectors(e,i);const c=Js.dot(Kl),l=Qs.dot(Kl);if(c<=0&&l<=0)return t.copy(i);Jl.subVectors(e,r);const d=Js.dot(Jl),u=Qs.dot(Jl);if(d>=0&&u<=d)return t.copy(r);const h=c*u-d*l;if(h<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(i).addScaledVector(Js,o);Ql.subVectors(e,s);const f=Js.dot(Ql),g=Qs.dot(Ql);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Qs,a);const m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return Gh.subVectors(s,r),a=(u-d)/(u-d+(f-g)),t.copy(r).addScaledVector(Gh,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(Js,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},uc={h:0,s:0,l:0};function id(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Bt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Bt.workingColorSpace){if(e=Ku(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=id(o,s,e+1/3),this.g=id(o,s,e),this.b=id(o,s,e-1/3)}return Bt.colorSpaceToWorking(this,r),this}setStyle(e,t=hi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const i=Hp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Bt.workingToColorSpace(Jn.copy(this),e),Math.round(Rt(Jn.r*255,0,255))*65536+Math.round(Rt(Jn.g*255,0,255))*256+Math.round(Rt(Jn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(Jn.copy(this),t);const i=Jn.r,r=Jn.g,s=Jn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=d<=.5?u/(o+a):u/(2-o-a),o){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(Jn.copy(this),t),e.r=Jn.r,e.g=Jn.g,e.b=Jn.b,e}getStyle(e=hi){Bt.workingToColorSpace(Jn.copy(this),e);const t=Jn.r,i=Jn.g,r=Jn.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+t,Br.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Br),e.getHSL(uc);const i=da(Br.h,uc.h,t),r=da(Br.s,uc.s,t),s=da(Br.l,uc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new Nt;Nt.NAMES=Hp;let Q0=0;class No extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=po,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=Vd,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(i.blending=this.blending),this.side!==Rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hd&&(i.blendSrc=this.blendSrc),this.blendDst!==Vd&&(i.blendDst=this.blendDst),this.blendEquation!==_s&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==So&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yn extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mn=new b,hc=new ze;let e_=0;class Ni{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ch,this.updateRanges=[],this.gpuType=wr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hc.fromBufferAttribute(this,t),hc.applyMatrix3(e),this.setXY(t,hc.x,hc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix3(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ro(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=li(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ro(t,this.array)),t}setX(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ro(t,this.array)),t}setY(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ro(t,this.array)),t}setZ(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ro(t,this.array)),t}setW(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),i=li(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),i=li(i,this.array),r=li(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),i=li(i,this.array),r=li(r,this.array),s=li(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ch&&(e.usage=this.usage),e}}class Vp extends Ni{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gp extends Ni{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Dt extends Ni{constructor(e,t,i){super(new Float32Array(e),t,i)}}let t_=0;const zi=new qt,rd=new vn,eo=new b,Ri=new Lo,qo=new Lo,Bn=new b;class kt extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zp(e)?Gp:Vp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new wt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,t,i){return zi.makeTranslation(e,t,i),this.applyMatrix4(zi),this}scale(e,t,i){return zi.makeScale(e,t,i),this.applyMatrix4(zi),this}lookAt(e){return rd.lookAt(e),rd.updateMatrix(),this.applyMatrix4(rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ri.setFromBufferAttribute(s),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const i=this.boundingSphere.center;if(Ri.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];qo.setFromBufferAttribute(a),this.morphTargetsRelative?(Bn.addVectors(Ri.min,qo.min),Ri.expandByPoint(Bn),Bn.addVectors(Ri.max,qo.max),Ri.expandByPoint(Bn)):(Ri.expandByPoint(qo.min),Ri.expandByPoint(qo.max))}Ri.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Bn.fromBufferAttribute(a,l),c&&(eo.fromBufferAttribute(e,l),Bn.add(eo)),r=Math.max(r,i.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new b,c[N]=new b;const l=new b,d=new b,u=new b,h=new ze,f=new ze,g=new ze,_=new b,m=new b;function p(N,M,S){l.fromBufferAttribute(i,N),d.fromBufferAttribute(i,M),u.fromBufferAttribute(i,S),h.fromBufferAttribute(s,N),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),d.sub(l),u.sub(l),f.sub(h),g.sub(h);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(I),a[N].add(_),a[M].add(_),a[S].add(_),c[N].add(m),c[M].add(m),c[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,M=w.length;N<M;++N){const S=w[N],I=S.start,F=S.count;for(let V=I,G=I+F;V<G;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const x=new b,v=new b,C=new b,P=new b;function D(N){C.fromBufferAttribute(r,N),P.copy(C);const M=a[N];x.copy(M),x.sub(C.multiplyScalar(C.dot(M))).normalize(),v.crossVectors(P,M);const I=v.dot(c[N])<0?-1:1;o.setXYZW(N,x.x,x.y,x.z,I)}for(let N=0,M=w.length;N<M;++N){const S=w[N],I=S.start,F=S.count;for(let V=I,G=I+F;V<G;V+=3)D(e.getX(V+0)),D(e.getX(V+1)),D(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ni(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new b,s=new b,o=new b,a=new b,c=new b,l=new b,d=new b,u=new b;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(d),c.add(d),l.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bn.fromBufferAttribute(e,t),Bn.normalize(),e.setXYZ(t,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(a,c){const l=a.array,d=a.itemSize,u=a.normalized,h=new l.constructor(c.length*d);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*d;for(let p=0;p<d;p++)h[g++]=l[f++]}return new Ni(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let d=0,u=l.length;d<u;d++){const h=l[d],f=e(h,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,h=l.length;u<h;u++){const f=l[u];d.push(f.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],u=s[l];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wh=new qt,cs=new Xa,fc=new Io,Xh=new b,pc=new b,mc=new b,gc=new b,sd=new b,_c=new b,qh=new b,vc=new b;class Ee extends vn{constructor(e=new kt,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_c.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=a[c],u=s[c];d!==0&&(sd.fromBufferAttribute(u,e),o?_c.addScaledVector(sd,d):_c.addScaledVector(sd.sub(t),d))}t.add(_c)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fc.copy(i.boundingSphere),fc.applyMatrix4(s),cs.copy(e.ray).recast(e.near),!(fc.containsPoint(cs.origin)===!1&&(cs.intersectSphere(fc,Xh)===null||cs.origin.distanceToSquared(Xh)>(e.far-e.near)**2))&&(Wh.copy(s).invert(),cs.copy(e.ray).applyMatrix4(Wh),!(i.boundingBox!==null&&cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,C=x;v<C;v+=3){const P=a.getX(v),D=a.getX(v+1),N=a.getX(v+2);r=xc(this,p,e,i,l,d,u,P,D,N),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);r=xc(this,o,e,i,l,d,u,w,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,C=x;v<C;v+=3){const P=v,D=v+1,N=v+2;r=xc(this,p,e,i,l,d,u,P,D,N),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=m,x=m+1,v=m+2;r=xc(this,o,e,i,l,d,u,w,x,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function n_(n,e,t,i,r,s,o,a){let c;if(e.side===yi?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Rr,a),c===null)return null;vc.copy(a),vc.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(vc);return l<t.near||l>t.far?null:{distance:l,point:vc.clone(),object:n}}function xc(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,pc),n.getVertexPosition(c,mc),n.getVertexPosition(l,gc);const d=n_(n,e,t,i,pc,mc,gc,qh);if(d){const u=new b;Qi.getBarycoord(qh,pc,mc,gc,u),r&&(d.uv=Qi.getInterpolatedAttribute(r,a,c,l,u,new ze)),s&&(d.uv1=Qi.getInterpolatedAttribute(s,a,c,l,u,new ze)),o&&(d.normal=Qi.getInterpolatedAttribute(o,a,c,l,u,new b),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new b,materialIndex:0};Qi.getNormal(pc,mc,gc,h.normal),d.face=h,d.barycoord=u}return d}class En extends kt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],d=[],u=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(d,3)),this.setAttribute("uv",new Dt(u,2));function g(_,m,p,w,x,v,C,P,D,N,M){const S=v/D,I=C/N,F=v/2,V=C/2,G=P/2,J=D+1,Y=N+1;let de=0,q=0;const oe=new b;for(let xe=0;xe<Y;xe++){const We=xe*I-V;for(let it=0;it<J;it++){const gt=it*S-F;oe[_]=gt*w,oe[m]=We*x,oe[p]=G,l.push(oe.x,oe.y,oe.z),oe[_]=0,oe[m]=0,oe[p]=P>0?1:-1,d.push(oe.x,oe.y,oe.z),u.push(it/D),u.push(1-xe/N),de+=1}}for(let xe=0;xe<N;xe++)for(let We=0;We<D;We++){const it=h+We+J*xe,gt=h+We+J*(xe+1),xt=h+(We+1)+J*(xe+1),Q=h+(We+1)+J*xe;c.push(it,gt,Q),c.push(gt,xt,Q),q+=6}a.addGroup(f,q,M),f+=q,h+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Eo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function di(n){const e={};for(let t=0;t<n.length;t++){const i=Eo(n[t]);for(const r in i)e[r]=i[r]}return e}function i_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}const r_={clone:Eo,merge:di};var s_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s_,this.fragmentShader=o_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Eo(e.uniforms),this.uniformsGroups=i_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xp extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=pr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hr=new b,$h=new ze,Yh=new ze;class Pi extends Xp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ma*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,t){return this.getViewBounds(e,$h,Yh),t.subVectors(Yh,$h)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(la*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const to=-90,no=1;class a_ extends vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pi(to,no,e,t);r.layers=this.layers,this.add(r);const s=new Pi(to,no,e,t);s.layers=this.layers,this.add(s);const o=new Pi(to,no,e,t);o.layers=this.layers,this.add(o);const a=new Pi(to,no,e,t);a.layers=this.layers,this.add(a);const c=new Pi(to,no,e,t);c.layers=this.layers,this.add(c);const l=new Pi(to,no,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===pr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===il)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class qp extends Si{constructor(e=[],t=bo,i,r,s,o,a,c,l,d){super(e,t,i,r,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class c_ extends Ls{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new qp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new En(5,5,5),s=new Cr({name:"CubemapFromEquirect",uniforms:Eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yi,blending:jr});s.uniforms.tEquirect.value=t;const o=new Ee(r,s),a=t.minFilter;return t.minFilter===bs&&(t.minFilter=fr),new a_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Cn extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l_={type:"move"};class od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(l_)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Cn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class d_ extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ad=new b,u_=new b,h_=new wt;class Xr{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ad.subVectors(i,t).cross(u_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ad),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||h_.getNormalMatrix(e),r=this.coplanarPoint(ad).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new Io,f_=new ze(.5,.5),yc=new b;class eh{constructor(e=new Xr,t=new Xr,i=new Xr,r=new Xr,s=new Xr,o=new Xr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],d=s[4],u=s[5],h=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],w=s[12],x=s[13],v=s[14],C=s[15];if(r[0].setComponents(l-o,f-d,p-g,C-w).normalize(),r[1].setComponents(l+o,f+d,p+g,C+w).normalize(),r[2].setComponents(l+a,f+u,p+_,C+x).normalize(),r[3].setComponents(l-a,f-u,p-_,C-x).normalize(),i)r[4].setComponents(c,h,m,v).normalize(),r[5].setComponents(l-c,f-h,p-m,C-v).normalize();else if(r[4].setComponents(l-c,f-h,p-m,C-v).normalize(),t===pr)r[5].setComponents(l+c,f+h,p+m,C+v).normalize();else if(t===il)r[5].setComponents(c,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);const t=f_.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(yc.x=r.normal.x>0?e.max.x:e.min.x,yc.y=r.normal.y>0?e.max.y:e.min.y,yc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bi extends No{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sl=new b,ol=new b,jh=new qt,$o=new Xa,Sc=new Io,cd=new b,Zh=new b;class nn extends vn{constructor(e=new kt,t=new bi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)sl.fromBufferAttribute(t,r-1),ol.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=sl.distanceTo(ol);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sc.copy(i.boundingSphere),Sc.applyMatrix4(r),Sc.radius+=s,e.ray.intersectsSphere(Sc)===!1)return;jh.copy(r).invert(),$o.copy(e.ray).applyMatrix4(jh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=d.getX(_),w=d.getX(_+1),x=bc(this,e,$o,c,p,w,_);x&&t.push(x)}if(this.isLineLoop){const _=d.getX(g-1),m=d.getX(f),p=bc(this,e,$o,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=bc(this,e,$o,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=bc(this,e,$o,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function bc(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(sl.fromBufferAttribute(a,r),ol.fromBufferAttribute(a,s),t.distanceSqToSegment(sl,ol,cd,Zh)>i)return;cd.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(cd);if(!(l<e.near||l>e.far))return{distance:l,point:Zh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Kh=new b,Jh=new b;class p_ extends nn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Kh.fromBufferAttribute(t,r),Jh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Kh.distanceTo(Jh);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class m_ extends nn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class $p extends No{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qh=new qt,Tu=new Xa,Mc=new Io,wc=new b;class Yp extends vn{constructor(e=new kt,t=new $p){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mc.copy(i.boundingSphere),Mc.applyMatrix4(r),Mc.radius+=s,e.ray.intersectsSphere(Mc)===!1)return;Qh.copy(r).invert(),Tu.copy(e.ray).applyMatrix4(Qh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=h,_=f;g<_;g++){const m=l.getX(g);wc.fromBufferAttribute(u,m),ef(wc,m,c,r,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=h,_=f;g<_;g++)wc.fromBufferAttribute(u,g),ef(wc,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ef(n,e,t,i,r,s,o){const a=Tu.distanceSqToPoint(n);if(a<t){const c=new b;Tu.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class jp extends Si{constructor(e,t,i=Ds,r,s,o,a=nr,c=nr,l,d=Sa,u=1){if(d!==Sa&&d!==ba)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,r,s,o,a,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ju(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wa extends kt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new b,d=new ze;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const f=i+u/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,c.push(d.x,d.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(a,3)),this.setAttribute("uv",new Dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ei extends kt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const d=[],u=[],h=[],f=[];let g=0;const _=[],m=i/2;let p=0;w(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new Dt(u,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(f,2));function w(){const v=new b,C=new b;let P=0;const D=(t-e)/i;for(let N=0;N<=s;N++){const M=[],S=N/s,I=S*(t-e)+e;for(let F=0;F<=r;F++){const V=F/r,G=V*c+a,J=Math.sin(G),Y=Math.cos(G);C.x=I*J,C.y=-S*i+m,C.z=I*Y,u.push(C.x,C.y,C.z),v.set(J,D,Y).normalize(),h.push(v.x,v.y,v.z),f.push(V,1-S),M.push(g++)}_.push(M)}for(let N=0;N<r;N++)for(let M=0;M<s;M++){const S=_[M][N],I=_[M+1][N],F=_[M+1][N+1],V=_[M][N+1];(e>0||M!==0)&&(d.push(S,I,V),P+=3),(t>0||M!==s-1)&&(d.push(I,F,V),P+=3)}l.addGroup(p,P,0),p+=P}function x(v){const C=g,P=new ze,D=new b;let N=0;const M=v===!0?e:t,S=v===!0?1:-1;for(let F=1;F<=r;F++)u.push(0,m*S,0),h.push(0,S,0),f.push(.5,.5),g++;const I=g;for(let F=0;F<=r;F++){const G=F/r*c+a,J=Math.cos(G),Y=Math.sin(G);D.x=M*Y,D.y=m*S,D.z=M*J,u.push(D.x,D.y,D.z),h.push(0,S,0),P.x=J*.5+.5,P.y=Y*.5*S+.5,f.push(P.x,P.y),g++}for(let F=0;F<r;F++){const V=C+F,G=I+F;v===!0?d.push(G,G+1,V):d.push(G+1,G,V),N+=3}l.addGroup(p,N,v===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class th extends kt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),d(),this.setAttribute("position",new Dt(s,3)),this.setAttribute("normal",new Dt(s.slice(),3)),this.setAttribute("uv",new Dt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const x=new b,v=new b,C=new b;for(let P=0;P<t.length;P+=3)f(t[P+0],x),f(t[P+1],v),f(t[P+2],C),c(x,v,C,w)}function c(w,x,v,C){const P=C+1,D=[];for(let N=0;N<=P;N++){D[N]=[];const M=w.clone().lerp(v,N/P),S=x.clone().lerp(v,N/P),I=P-N;for(let F=0;F<=I;F++)F===0&&N===P?D[N][F]=M:D[N][F]=M.clone().lerp(S,F/I)}for(let N=0;N<P;N++)for(let M=0;M<2*(P-N)-1;M++){const S=Math.floor(M/2);M%2===0?(h(D[N][S+1]),h(D[N+1][S]),h(D[N][S])):(h(D[N][S+1]),h(D[N+1][S+1]),h(D[N+1][S]))}}function l(w){const x=new b;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(w),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function d(){const w=new b;for(let x=0;x<s.length;x+=3){w.x=s[x+0],w.y=s[x+1],w.z=s[x+2];const v=m(w)/2/Math.PI+.5,C=p(w)/Math.PI+.5;o.push(v,1-C)}g(),u()}function u(){for(let w=0;w<o.length;w+=6){const x=o[w+0],v=o[w+2],C=o[w+4],P=Math.max(x,v,C),D=Math.min(x,v,C);P>.9&&D<.1&&(x<.2&&(o[w+0]+=1),v<.2&&(o[w+2]+=1),C<.2&&(o[w+4]+=1))}}function h(w){s.push(w.x,w.y,w.z)}function f(w,x){const v=w*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){const w=new b,x=new b,v=new b,C=new b,P=new ze,D=new ze,N=new ze;for(let M=0,S=0;M<s.length;M+=9,S+=6){w.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),P.set(o[S+0],o[S+1]),D.set(o[S+2],o[S+3]),N.set(o[S+4],o[S+5]),C.copy(w).add(x).add(v).divideScalar(3);const I=m(C);_(P,S+0,w,I),_(D,S+2,x,I),_(N,S+4,v,I)}}function _(w,x,v,C){C<0&&w.x===1&&(o[x]=w.x-1),v.x===0&&v.z===0&&(o[x]=C/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new th(e.vertices,e.indices,e.radius,e.details)}}class gr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const d=i[r],h=i[r+1]-d,f=(o-d)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new ze:new b);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new b,r=[],s=[],o=[],a=new b,c=new qt;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new b)}s[0]=new b,o[0]=new b;let l=Number.MAX_VALUE;const d=Math.abs(r[0].x),u=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=l&&(l=d,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Rt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Rt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class nh extends gr{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ze){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*d-f*u+this.aX,l=h*u+f*d+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class g_ extends nh{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ih(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,d,u){let h=(o-s)/l-(a-s)/(l+d)+(a-o)/d,f=(a-o)/d-(c-o)/(d+u)+(c-a)/u;h*=d,f*=d,r(o,a,h,f)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Ec=new b,ld=new ih,dd=new ih,ud=new ih;class rh extends gr{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new b){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,d;this.closed||a>0?l=r[(a-1)%s]:(Ec.subVectors(r[0],r[1]).add(r[0]),l=Ec);const u=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(Ec.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Ec),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ld.initNonuniformCatmullRom(l.x,u.x,h.x,d.x,g,_,m),dd.initNonuniformCatmullRom(l.y,u.y,h.y,d.y,g,_,m),ud.initNonuniformCatmullRom(l.z,u.z,h.z,d.z,g,_,m)}else this.curveType==="catmullrom"&&(ld.initCatmullRom(l.x,u.x,h.x,d.x,this.tension),dd.initCatmullRom(l.y,u.y,h.y,d.y,this.tension),ud.initCatmullRom(l.z,u.z,h.z,d.z,this.tension));return i.set(ld.calc(c),dd.calc(c),ud.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new b().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function tf(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function __(n,e){const t=1-n;return t*t*e}function v_(n,e){return 2*(1-n)*n*e}function x_(n,e){return n*n*e}function ua(n,e,t,i){return __(n,e)+v_(n,t)+x_(n,i)}function y_(n,e){const t=1-n;return t*t*t*e}function S_(n,e){const t=1-n;return 3*t*t*n*e}function b_(n,e){return 3*(1-n)*n*n*e}function M_(n,e){return n*n*n*e}function ha(n,e,t,i,r){return y_(n,e)+S_(n,t)+b_(n,i)+M_(n,r)}class Zp extends gr{constructor(e=new ze,t=new ze,i=new ze,r=new ze){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ze){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ha(e,r.x,s.x,o.x,a.x),ha(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class w_ extends gr{constructor(e=new b,t=new b,i=new b,r=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new b){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ha(e,r.x,s.x,o.x,a.x),ha(e,r.y,s.y,o.y,a.y),ha(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Kp extends gr{constructor(e=new ze,t=new ze){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ze){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ze){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class E_ extends gr{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jp extends gr{constructor(e=new ze,t=new ze,i=new ze){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ze){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ua(e,r.x,s.x,o.x),ua(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T_ extends gr{constructor(e=new b,t=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(ua(e,r.x,s.x,o.x),ua(e,r.y,s.y,o.y),ua(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qp extends gr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ze){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],d=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(tf(a,c.x,l.x,d.x,u.x),tf(a,c.y,l.y,d.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ze().fromArray(r))}return this}}var nf=Object.freeze({__proto__:null,ArcCurve:g_,CatmullRomCurve3:rh,CubicBezierCurve:Zp,CubicBezierCurve3:w_,EllipseCurve:nh,LineCurve:Kp,LineCurve3:E_,QuadraticBezierCurve:Jp,QuadraticBezierCurve3:T_,SplineCurve:Qp});class A_ extends gr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nf[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const d=c[l];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new nf[r.type]().fromJSON(r))}return this}}class rf extends A_{constructor(e){super(),this.type="Path",this.currentPoint=new ze,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Kp(this.currentPoint.clone(),new ze(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Jp(this.currentPoint.clone(),new ze(e,t),new ze(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Zp(this.currentPoint.clone(),new ze(e,t),new ze(i,r),new ze(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Qp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+l,t+d,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new nh(e,t,i,r,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const d=l.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class em extends rf{constructor(e){super(e),this.uuid=Os(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new rf().fromJSON(r))}return this}}function R_(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=tm(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=I_(n,e,s,t)),n.length>80*t){a=1/0,c=1/0;let d=-1/0,u=-1/0;for(let h=t;h<r;h+=t){const f=n[h],g=n[h+1];f<a&&(a=f),g<c&&(c=g),f>d&&(d=f),g>u&&(u=g)}l=Math.max(d-a,u-c),l=l!==0?32767/l:0}return Ea(s,o,t,a,c,l,0),o}function tm(n,e,t,i,r){let s;if(r===W_(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=sf(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=sf(o/i|0,n[o],n[o+1],s);return s&&To(s,s.next)&&(Aa(s),s=s.next),s}function Is(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(To(t,t.next)||gn(t.prev,t,t.next)===0)){if(Aa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ea(n,e,t,i,r,s,o){if(!n)return;!o&&s&&O_(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?P_(n,i,r,s):C_(n)){e.push(c.i,n.i,l.i),Aa(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=D_(Is(n),e),Ea(n,e,t,i,r,s,2)):o===2&&L_(n,e,t,i,r,s):Ea(Is(n),e,t,i,r,s,1);break}}}function C_(n){const e=n.prev,t=n,i=n.next;if(gn(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,d=Math.min(r,s,o),u=Math.min(a,c,l),h=Math.max(r,s,o),f=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=d&&g.x<=h&&g.y>=u&&g.y<=f&&ra(r,a,s,c,o,l,g.x,g.y)&&gn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function P_(n,e,t,i){const r=n.prev,s=n,o=n.next;if(gn(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,d=r.y,u=s.y,h=o.y,f=Math.min(a,c,l),g=Math.min(d,u,h),_=Math.max(a,c,l),m=Math.max(d,u,h),p=Au(f,g,e,t,i),w=Au(_,m,e,t,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=p&&v&&v.z<=w;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&ra(a,d,c,u,l,h,x.x,x.y)&&gn(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&ra(a,d,c,u,l,h,v.x,v.y)&&gn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&ra(a,d,c,u,l,h,x.x,x.y)&&gn(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=w;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&ra(a,d,c,u,l,h,v.x,v.y)&&gn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function D_(n,e){let t=n;do{const i=t.prev,r=t.next.next;!To(i,r)&&im(i,t,t.next,r)&&Ta(i,r)&&Ta(r,i)&&(e.push(i.i,t.i,r.i),Aa(t),Aa(t.next),t=n=r),t=t.next}while(t!==n);return Is(t)}function L_(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&H_(o,a)){let c=rm(o,a);o=Is(o,o.next),c=Is(c,c.next),Ea(o,e,t,i,r,s,0),Ea(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function I_(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=tm(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(B_(l))}r.sort(N_);for(let s=0;s<r.length;s++)t=U_(r[s],t);return t}function N_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function U_(n,e){const t=k_(n,e);if(!t)return e;const i=rm(t,n);return Is(i,i.next),Is(t,t.next)}function k_(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(To(n,t))return t;do{if(To(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let d=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&nm(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const u=Math.abs(r-t.y)/(i-t.x);Ta(t,n)&&(u<d||u===d&&(t.x>o.x||t.x===o.x&&F_(o,t)))&&(o=t,d=u)}t=t.next}while(t!==a);return o}function F_(n,e){return gn(n.prev,n,e.prev)<0&&gn(e.next,n,n.next)<0}function O_(n,e,t,i){let r=n;do r.z===0&&(r.z=Au(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,z_(r)}function z_(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Au(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function B_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function nm(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function ra(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&nm(n,e,t,i,r,s,o,a)}function H_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!V_(n,e)&&(Ta(n,e)&&Ta(e,n)&&G_(n,e)&&(gn(n.prev,n,e.prev)||gn(n,e.prev,e))||To(n,e)&&gn(n.prev,n,n.next)>0&&gn(e.prev,e,e.next)>0)}function gn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function To(n,e){return n.x===e.x&&n.y===e.y}function im(n,e,t,i){const r=Ac(gn(n,e,t)),s=Ac(gn(n,e,i)),o=Ac(gn(t,i,n)),a=Ac(gn(t,i,e));return!!(r!==s&&o!==a||r===0&&Tc(n,t,e)||s===0&&Tc(n,i,e)||o===0&&Tc(t,n,i)||a===0&&Tc(t,e,i))}function Tc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ac(n){return n>0?1:n<0?-1:0}function V_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&im(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ta(n,e){return gn(n.prev,n,n.next)<0?gn(n,e,n.next)>=0&&gn(n,n.prev,e)>=0:gn(n,e,n.prev)<0||gn(n,n.next,e)<0}function G_(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function rm(n,e){const t=Ru(n.i,n.x,n.y),i=Ru(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function sf(n,e,t,i){const r=Ru(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Aa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ru(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function W_(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class X_{static triangulate(e,t,i=2){return R_(e,t,i)}}class fa{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return fa.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];of(e),af(i,e);let o=e.length;t.forEach(of);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,af(i,t[c]);const a=X_.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function of(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function af(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ms extends th{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ms(e.radius,e.detail)}}class Jr extends kt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,d=c+1,u=e/a,h=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<d;p++){const w=p*h-o;for(let x=0;x<l;x++){const v=x*u-s;g.push(v,-w,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const x=w+l*p,v=w+l*(p+1),C=w+1+l*(p+1),P=w+1+l*p;f.push(x,v,P),f.push(v,C,P)}this.setIndex(f),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.widthSegments,e.heightSegments)}}class wl extends kt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],d=[];let u=e;const h=(t-e)/r,f=new b,g=new ze;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const p=s+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}u+=h}for(let _=0;_<r;_++){const m=_*(i+1);for(let p=0;p<i;p++){const w=p+m,x=w,v=w+i+1,C=w+i+2,P=w+1;a.push(x,v,P),a.push(v,C,P)}}this.setIndex(a),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class sh extends kt{constructor(e=new em([new ze(0,.5),new ze(-.5,-.5),new ze(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let d=0;d<e.length;d++)l(e[d]),this.addGroup(a,c,d),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Dt(r,3)),this.setAttribute("normal",new Dt(s,3)),this.setAttribute("uv",new Dt(o,2));function l(d){const u=r.length/3,h=d.extractPoints(t);let f=h.shape;const g=h.holes;fa.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const w=g[m];fa.isClockWise(w)===!0&&(g[m]=w.reverse())}const _=fa.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const w=g[m];f=f.concat(w)}for(let m=0,p=f.length;m<p;m++){const w=f[m];r.push(w.x,w.y,0),s.push(0,0,1),o.push(w.x,w.y)}for(let m=0,p=_.length;m<p;m++){const w=_[m],x=w[0]+u,v=w[1]+u,C=w[2]+u;i.push(x,v,C),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return q_(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new sh(i,e.curveSegments)}}function q_(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class Kr extends kt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const d=[],u=new b,h=new b,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const w=[],x=p/i;let v=0;p===0&&o===0?v=.5/t:p===i&&c===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){const P=C/t;u.x=-e*Math.cos(r+P*s)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(r+P*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),h.copy(u).normalize(),_.push(h.x,h.y,h.z),m.push(P+v,1-x),w.push(l++)}d.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const x=d[p][w+1],v=d[p][w],C=d[p+1][w],P=d[p+1][w+1];(p!==0||o>0)&&f.push(x,v,P),(p!==i-1||c<Math.PI)&&f.push(v,C,P)}this.setIndex(f),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vs extends kt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],d=new b,u=new b,h=new b;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){const _=g/r*s,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),h.subVectors(u,d).normalize(),c.push(h.x,h.y,h.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){const _=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,p=(r+1)*(f-1)+g,w=(r+1)*f+g;o.push(_,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class $_ extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Y_ extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cf extends bi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class j_ extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const hd=new qt,lf=new b,df=new b;class Z_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=mr,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eh,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;lf.setFromMatrixPosition(e.matrixWorld),t.position.copy(lf),df.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(df),t.updateMatrixWorld(),hd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const uf=new qt,Yo=new b,fd=new b;class K_ extends Z_{constructor(){super(new Pi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new Ft(2,1,1,1),new Ft(0,1,1,1),new Ft(3,1,1,1),new Ft(1,1,1,1),new Ft(3,0,1,1),new Ft(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Yo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Yo),fd.copy(i.position),fd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(fd),i.updateMatrixWorld(),r.makeTranslation(-Yo.x,-Yo.y,-Yo.z),uf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uf,i.coordinateSystem,i.reversedDepth)}}class J_ extends j_{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new K_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Q_ extends Xp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ev extends Pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const hf=new qt;class sm{constructor(e,t,i=0,r=1/0){this.ray=new Xa(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Qu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hf),this}intersectObject(e,t=!0,i=[]){return Cu(e,this,i,t),i.sort(ff),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Cu(e[r],this,i,t);return i.sort(ff),i}}function ff(n,e){return n.distance-e.distance}function Cu(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Cu(s[o],e,t,!0)}}class pf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class om extends Fs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function mf(n,e,t,i){const r=tv(i);switch(t){case Ip:return n*e;case Up:return n*e/r.components*r.byteLength;case Yu:return n*e/r.components*r.byteLength;case kp:return n*e*2/r.components*r.byteLength;case ju:return n*e*2/r.components*r.byteLength;case Np:return n*e*3/r.components*r.byteLength;case er:return n*e*4/r.components*r.byteLength;case Zu:return n*e*4/r.components*r.byteLength;case Vc:case Gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wc:case Xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tu:case iu:return Math.max(n,16)*Math.max(e,8)/4;case eu:case nu:return Math.max(n,8)*Math.max(e,8)/2;case ru:case su:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ou:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case au:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case lu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case du:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case uu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case hu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case pu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case gu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _u:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case xu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case qc:case Su:case bu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fp:case Mu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case wu:case Eu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tv(n){switch(n){case mr:case Pp:return{byteLength:1,components:1};case xa:case Dp:case Wa:return{byteLength:2,components:1};case qu:case $u:return{byteLength:2,components:4};case Ds:case Xu:case wr:return{byteLength:4,components:1};case Lp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wu);function am(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function nv(n){const e=new WeakMap;function t(a,c){const l=a.array,d=a.usage,u=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,d),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const d=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){const g=u[h],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,u[h]=_)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];n.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var iv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rv=`#ifdef USE_ALPHAHASH
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
#endif`,sv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ov=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,av=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lv=`#ifdef USE_AOMAP
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
#endif`,dv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uv=`#ifdef USE_BATCHING
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
#endif`,hv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gv=`#ifdef USE_IRIDESCENCE
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
#endif`,_v=`#ifdef USE_BUMPMAP
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
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tv=`#define PI 3.141592653589793
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
} // validated`,Av=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rv=`vec3 transformedNormal = objectNormal;
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
#endif`,Cv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Ov=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
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
#endif`,Bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wv=`#ifdef USE_GRADIENTMAP
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
}`,Xv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yv=`uniform bool receiveShadow;
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
#endif`,jv=`#ifdef USE_ENVMAP
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
#endif`,Zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ex=`PhysicalMaterial material;
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
#endif`,tx=`struct PhysicalMaterial {
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
}`,nx=`
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
#endif`,ix=`#if defined( RE_IndirectDiffuse )
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
#endif`,rx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ox=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ux=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hx=`#if defined( USE_POINTS_UV )
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
#endif`,fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_x=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vx=`#ifdef USE_MORPHTARGETS
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
#endif`,xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ex=`#ifdef USE_NORMALMAP
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
#endif`,Tx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hx=`float getShadowMask() {
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
}`,Vx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gx=`#ifdef USE_SKINNING
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
#endif`,Wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xx=`#ifdef USE_SKINNING
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
#endif`,qx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$x=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zx=`#ifdef USE_TRANSMISSION
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
#endif`,Kx=`#ifdef USE_TRANSMISSION
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
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ty=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ny=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iy=`uniform sampler2D t2D;
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
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cy=`#include <common>
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
}`,ly=`#if DEPTH_PACKING == 3200
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
}`,dy=`#define DISTANCE
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
}`,uy=`#define DISTANCE
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,py=`uniform float scale;
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
}`,my=`uniform vec3 diffuse;
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
}`,gy=`#include <common>
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
}`,_y=`uniform vec3 diffuse;
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
}`,vy=`#define LAMBERT
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
}`,xy=`#define LAMBERT
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
}`,yy=`#define MATCAP
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
}`,Sy=`#define MATCAP
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
}`,by=`#define NORMAL
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
}`,My=`#define NORMAL
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
}`,wy=`#define PHONG
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
}`,Ey=`#define PHONG
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
}`,Ty=`#define STANDARD
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
}`,Ay=`#define STANDARD
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
}`,Ry=`#define TOON
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
}`,Cy=`#define TOON
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
}`,Py=`uniform float size;
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
}`,Dy=`uniform vec3 diffuse;
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
}`,Ly=`#include <common>
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
}`,Iy=`uniform vec3 color;
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
}`,Ny=`uniform float rotation;
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
}`,Uy=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:iv,alphahash_pars_fragment:rv,alphamap_fragment:sv,alphamap_pars_fragment:ov,alphatest_fragment:av,alphatest_pars_fragment:cv,aomap_fragment:lv,aomap_pars_fragment:dv,batching_pars_vertex:uv,batching_vertex:hv,begin_vertex:fv,beginnormal_vertex:pv,bsdfs:mv,iridescence_fragment:gv,bumpmap_pars_fragment:_v,clipping_planes_fragment:vv,clipping_planes_pars_fragment:xv,clipping_planes_pars_vertex:yv,clipping_planes_vertex:Sv,color_fragment:bv,color_pars_fragment:Mv,color_pars_vertex:wv,color_vertex:Ev,common:Tv,cube_uv_reflection_fragment:Av,defaultnormal_vertex:Rv,displacementmap_pars_vertex:Cv,displacementmap_vertex:Pv,emissivemap_fragment:Dv,emissivemap_pars_fragment:Lv,colorspace_fragment:Iv,colorspace_pars_fragment:Nv,envmap_fragment:Uv,envmap_common_pars_fragment:kv,envmap_pars_fragment:Fv,envmap_pars_vertex:Ov,envmap_physical_pars_fragment:jv,envmap_vertex:zv,fog_vertex:Bv,fog_pars_vertex:Hv,fog_fragment:Vv,fog_pars_fragment:Gv,gradientmap_pars_fragment:Wv,lightmap_pars_fragment:Xv,lights_lambert_fragment:qv,lights_lambert_pars_fragment:$v,lights_pars_begin:Yv,lights_toon_fragment:Zv,lights_toon_pars_fragment:Kv,lights_phong_fragment:Jv,lights_phong_pars_fragment:Qv,lights_physical_fragment:ex,lights_physical_pars_fragment:tx,lights_fragment_begin:nx,lights_fragment_maps:ix,lights_fragment_end:rx,logdepthbuf_fragment:sx,logdepthbuf_pars_fragment:ox,logdepthbuf_pars_vertex:ax,logdepthbuf_vertex:cx,map_fragment:lx,map_pars_fragment:dx,map_particle_fragment:ux,map_particle_pars_fragment:hx,metalnessmap_fragment:fx,metalnessmap_pars_fragment:px,morphinstance_vertex:mx,morphcolor_vertex:gx,morphnormal_vertex:_x,morphtarget_pars_vertex:vx,morphtarget_vertex:xx,normal_fragment_begin:yx,normal_fragment_maps:Sx,normal_pars_fragment:bx,normal_pars_vertex:Mx,normal_vertex:wx,normalmap_pars_fragment:Ex,clearcoat_normal_fragment_begin:Tx,clearcoat_normal_fragment_maps:Ax,clearcoat_pars_fragment:Rx,iridescence_pars_fragment:Cx,opaque_fragment:Px,packing:Dx,premultiplied_alpha_fragment:Lx,project_vertex:Ix,dithering_fragment:Nx,dithering_pars_fragment:Ux,roughnessmap_fragment:kx,roughnessmap_pars_fragment:Fx,shadowmap_pars_fragment:Ox,shadowmap_pars_vertex:zx,shadowmap_vertex:Bx,shadowmask_pars_fragment:Hx,skinbase_vertex:Vx,skinning_pars_vertex:Gx,skinning_vertex:Wx,skinnormal_vertex:Xx,specularmap_fragment:qx,specularmap_pars_fragment:$x,tonemapping_fragment:Yx,tonemapping_pars_fragment:jx,transmission_fragment:Zx,transmission_pars_fragment:Kx,uv_pars_fragment:Jx,uv_pars_vertex:Qx,uv_vertex:ey,worldpos_vertex:ty,background_vert:ny,background_frag:iy,backgroundCube_vert:ry,backgroundCube_frag:sy,cube_vert:oy,cube_frag:ay,depth_vert:cy,depth_frag:ly,distanceRGBA_vert:dy,distanceRGBA_frag:uy,equirect_vert:hy,equirect_frag:fy,linedashed_vert:py,linedashed_frag:my,meshbasic_vert:gy,meshbasic_frag:_y,meshlambert_vert:vy,meshlambert_frag:xy,meshmatcap_vert:yy,meshmatcap_frag:Sy,meshnormal_vert:by,meshnormal_frag:My,meshphong_vert:wy,meshphong_frag:Ey,meshphysical_vert:Ty,meshphysical_frag:Ay,meshtoon_vert:Ry,meshtoon_frag:Cy,points_vert:Py,points_frag:Dy,shadow_vert:Ly,shadow_frag:Iy,sprite_vert:Ny,sprite_frag:Uy},Be={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},hr={basic:{uniforms:di([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:di([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Nt(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:di([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:di([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:di([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Nt(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:di([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:di([Be.points,Be.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:di([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:di([Be.common,Be.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:di([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:di([Be.sprite,Be.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:di([Be.common,Be.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:di([Be.lights,Be.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};hr.physical={uniforms:di([hr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const Rc={r:0,b:0,g:0},ds=new ii,ky=new qt;function Fy(n,e,t,i,r,s,o){const a=new Nt(0);let c=s===!0?0:1,l,d,u=null,h=0,f=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const C=g(x);C===null?p(a,c):C&&C.isColor&&(p(C,1),v=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,v){const C=g(v);C&&(C.isCubeTexture||C.mapping===Ml)?(d===void 0&&(d=new Ee(new En(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:Eo(hr.backgroundCube.uniforms),vertexShader:hr.backgroundCube.vertexShader,fragmentShader:hr.backgroundCube.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),ds.copy(v.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ky.makeRotationFromEuler(ds)),d.material.toneMapped=Bt.getTransfer(C.colorSpace)!==Zt,(u!==C||h!==C.version||f!==n.toneMapping)&&(d.material.needsUpdate=!0,u=C,h=C.version,f=n.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Ee(new Jr(2,2),new Cr({name:"BackgroundMaterial",uniforms:Eo(hr.background.uniforms),vertexShader:hr.background.vertexShader,fragmentShader:hr.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Bt.getTransfer(C.colorSpace)!==Zt,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||h!==C.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=C,h=C.version,f=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,v){x.getRGB(Rc,Wp(n)),i.buffers.color.setClear(Rc.r,Rc.g,Rc.b,v,o)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:_,addToRenderList:m,dispose:w}}function Oy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,I,F,V,G){let J=!1;const Y=u(V,F,I);s!==Y&&(s=Y,l(s.object)),J=f(S,V,F,G),J&&g(S,V,F,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,v(S,I,F,V),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function d(S){return n.deleteVertexArray(S)}function u(S,I,F){const V=F.wireframe===!0;let G=i[S.id];G===void 0&&(G={},i[S.id]=G);let J=G[I.id];J===void 0&&(J={},G[I.id]=J);let Y=J[V];return Y===void 0&&(Y=h(c()),J[V]=Y),Y}function h(S){const I=[],F=[],V=[];for(let G=0;G<t;G++)I[G]=0,F[G]=0,V[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:V,object:S,attributes:{},index:null}}function f(S,I,F,V){const G=s.attributes,J=I.attributes;let Y=0;const de=F.getAttributes();for(const q in de)if(de[q].location>=0){const xe=G[q];let We=J[q];if(We===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(We=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(We=S.instanceColor)),xe===void 0||xe.attribute!==We||We&&xe.data!==We.data)return!0;Y++}return s.attributesNum!==Y||s.index!==V}function g(S,I,F,V){const G={},J=I.attributes;let Y=0;const de=F.getAttributes();for(const q in de)if(de[q].location>=0){let xe=J[q];xe===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(xe=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(xe=S.instanceColor));const We={};We.attribute=xe,xe&&xe.data&&(We.data=xe.data),G[q]=We,Y++}s.attributes=G,s.attributesNum=Y,s.index=V}function _(){const S=s.newAttributes;for(let I=0,F=S.length;I<F;I++)S[I]=0}function m(S){p(S,0)}function p(S,I){const F=s.newAttributes,V=s.enabledAttributes,G=s.attributeDivisors;F[S]=1,V[S]===0&&(n.enableVertexAttribArray(S),V[S]=1),G[S]!==I&&(n.vertexAttribDivisor(S,I),G[S]=I)}function w(){const S=s.newAttributes,I=s.enabledAttributes;for(let F=0,V=I.length;F<V;F++)I[F]!==S[F]&&(n.disableVertexAttribArray(F),I[F]=0)}function x(S,I,F,V,G,J,Y){Y===!0?n.vertexAttribIPointer(S,I,F,G,J):n.vertexAttribPointer(S,I,F,V,G,J)}function v(S,I,F,V){_();const G=V.attributes,J=F.getAttributes(),Y=I.defaultAttributeValues;for(const de in J){const q=J[de];if(q.location>=0){let oe=G[de];if(oe===void 0&&(de==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),de==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),oe!==void 0){const xe=oe.normalized,We=oe.itemSize,it=e.get(oe);if(it===void 0)continue;const gt=it.buffer,xt=it.type,Q=it.bytesPerElement,Te=xt===n.INT||xt===n.UNSIGNED_INT||oe.gpuType===Xu;if(oe.isInterleavedBufferAttribute){const se=oe.data,je=se.stride,ne=oe.offset;if(se.isInstancedInterleavedBuffer){for(let fe=0;fe<q.locationSize;fe++)p(q.location+fe,se.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let fe=0;fe<q.locationSize;fe++)m(q.location+fe);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let fe=0;fe<q.locationSize;fe++)x(q.location+fe,We/q.locationSize,xt,xe,je*Q,(ne+We/q.locationSize*fe)*Q,Te)}else{if(oe.isInstancedBufferAttribute){for(let se=0;se<q.locationSize;se++)p(q.location+se,oe.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let se=0;se<q.locationSize;se++)m(q.location+se);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let se=0;se<q.locationSize;se++)x(q.location+se,We/q.locationSize,xt,xe,We*Q,We/q.locationSize*se*Q,Te)}}else if(Y!==void 0){const xe=Y[de];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(q.location,xe);break;case 3:n.vertexAttrib3fv(q.location,xe);break;case 4:n.vertexAttrib4fv(q.location,xe);break;default:n.vertexAttrib1fv(q.location,xe)}}}}w()}function C(){N();for(const S in i){const I=i[S];for(const F in I){const V=I[F];for(const G in V)d(V[G].object),delete V[G];delete I[F]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const F in I){const V=I[F];for(const G in V)d(V[G].object),delete V[G];delete I[F]}delete i[S.id]}function D(S){for(const I in i){const F=i[I];if(F[S.id]===void 0)continue;const V=F[S.id];for(const G in V)d(V[G].object),delete V[G];delete F[S.id]}}function N(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function zy(n,e,t){let i;function r(l){i=l}function s(l,d){n.drawArrays(i,l,d),t.update(d,i,1)}function o(l,d,u){u!==0&&(n.drawArraysInstanced(i,l,d,u),t.update(d,i,u))}function a(l,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g];t.update(f,i,1)}function c(l,d,u,h){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],d[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,d,0,h,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function By(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==er&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const N=D===Wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==mr&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==wr&&!N)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:C,maxSamples:P}}function Hy(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Xr,a=new wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||i!==0||r;return r=h,i=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?d(null):l();else{const w=s?0:i,x=w*4;let v=p.clippingState||null;c.value=v,v=d(g,h,x,f);for(let C=0;C!==x;++C)v[C]=t[C];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(w,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Vy(n){let e=new WeakMap;function t(o,a){return a===Zd?o.mapping=bo:a===Kd&&(o.mapping=Mo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zd||a===Kd)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new c_(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const lo=4,gf=[.125,.215,.35,.446,.526,.582],xs=20,pd=new Q_,_f=new Nt;let md=null,gd=0,_d=0,vd=!1;const ps=(1+Math.sqrt(5))/2,io=1/ps,vf=[new b(-ps,io,0),new b(ps,io,0),new b(-io,0,ps),new b(io,0,ps),new b(0,ps,-io),new b(0,ps,io),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],Gy=new b;class xf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Gy}=s;md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(md,gd,_d),this._renderer.xr.enabled=vd,e.scissorTest=!1,Cc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bo||e.mapping===Mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fr,minFilter:fr,generateMipmaps:!1,type:Wa,format:er,colorSpace:wo,depthBuffer:!1},r=yf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wy(s)),this._blurMaterial=Xy(s,e,t)}return r}_compileMaterial(e){const t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,pd)}_sceneToCubeUV(e,t,i,r,s){const c=new Pi(90,1,t,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(_f),u.toneMapping=Zr,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const _=new yn({name:"PMREM.Background",side:yi,depthWrite:!1,depthTest:!1}),m=new Ee(new En,_);let p=!1;const w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,p=!0):(_.color.copy(_f),p=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[x],s.y,s.z)):v===1?(c.up.set(0,0,l[x]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[x],s.z)):(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[x]));const C=this._cubeSize;Cc(r,v*C,x>2?C:0,C,C),u.setRenderTarget(r),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===bo||e.mapping===Mo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Cc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,pd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vf[(r-s-1)%vf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Ee(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*xs-1),_=s/g,m=isFinite(s)?1+Math.floor(d*_):xs;m>xs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xs}`);const p=[];let w=0;for(let D=0;D<xs;++D){const N=D/_,M=Math.exp(-N*N/2);p.push(M),D===0?w+=M:D<m&&(w+=2*M)}for(let D=0;D<p.length;D++)p[D]=p[D]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;const v=this._sizeLods[r],C=3*v*(r>x-lo?r-x+lo:0),P=4*(this._cubeSize-v);Cc(t,C,P,3*v,2*v),c.setRenderTarget(t),c.render(u,pd)}}function Wy(n){const e=[],t=[],i=[];let r=n;const s=n-lo+1+gf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-lo?c=gf[o-n+lo-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),d=-l,u=1+l,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let P=0;P<f;P++){const D=P%3*2/3-1,N=P>2?0:-1,M=[D,N,0,D+2/3,N,0,D+2/3,N+1,0,D,N,0,D+2/3,N+1,0,D,N+1,0];w.set(M,_*g*P),x.set(h,m*g*P);const S=[P,P,P,P,P,P];v.set(S,p*g*P)}const C=new kt;C.setAttribute("position",new Ni(w,_)),C.setAttribute("uv",new Ni(x,m)),C.setAttribute("faceIndex",new Ni(v,p)),e.push(C),r>lo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yf(n,e,t){const i=new Ls(n,e,t);return i.texture.mapping=Ml,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Xy(n,e,t){const i=new Float32Array(xs),r=new b(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oh(),fragmentShader:`

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
		`,blending:jr,depthTest:!1,depthWrite:!1})}function Sf(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

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
		`,blending:jr,depthTest:!1,depthWrite:!1})}function bf(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function oh(){return`

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
	`}function qy(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Zd||c===Kd,d=c===bo||c===Mo;if(l||d){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new xf(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||d&&f&&r(f)?(t===null&&(t=new xf(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function $y(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&mo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Yy(n,e,t,i){const r={},s=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(u){const h=u.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function l(u){const h=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let x=0,v=w.length;x<v;x+=3){const C=w[x+0],P=w[x+1],D=w[x+2];h.push(C,P,P,D,D,C)}}else if(g!==void 0){const w=g.array;_=g.version;for(let x=0,v=w.length/3-1;x<v;x+=3){const C=x+0,P=x+1,D=x+2;h.push(C,P,P,D,D,C)}}else return;const m=new(zp(h)?Gp:Vp)(h,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function d(u){const h=s.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:d}}function jy(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function l(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,h*o,g),t.update(f,i,g))}function d(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(h,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*_[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Zy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ky(n,e,t){const i=new WeakMap,r=new Ft;function s(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==u){let M=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const P=new Float32Array(v*C*4*u),D=new Bp(P,v,C,u);D.type=wr,D.needsUpdate=!0;const N=x*4;for(let S=0;S<u;S++){const I=m[S],F=p[S],V=w[S],G=v*C*4*S;for(let J=0;J<I.count;J++){const Y=J*N;f===!0&&(r.fromBufferAttribute(I,J),P[G+Y+0]=r.x,P[G+Y+1]=r.y,P[G+Y+2]=r.z,P[G+Y+3]=0),g===!0&&(r.fromBufferAttribute(F,J),P[G+Y+4]=r.x,P[G+Y+5]=r.y,P[G+Y+6]=r.z,P[G+Y+7]=0),_===!0&&(r.fromBufferAttribute(V,J),P[G+Y+8]=r.x,P[G+Y+9]=r.y,P[G+Y+10]=r.z,P[G+Y+11]=V.itemSize===4?r.w:1)}}h={count:u,texture:D,size:new ze(v,C)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Jy(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return u}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const cm=new Si,Mf=new jp(1,1),lm=new Bp,dm=new X0,um=new qp,wf=[],Ef=[],Tf=new Float32Array(16),Af=new Float32Array(9),Rf=new Float32Array(4);function Uo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=wf[r];if(s===void 0&&(s=new Float32Array(r),wf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Un(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function El(n,e){let t=Ef[e];t===void 0&&(t=new Int32Array(e),Ef[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Qy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function eS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;n.uniform2fv(this.addr,e),Un(t,e)}}function tS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nn(t,e))return;n.uniform3fv(this.addr,e),Un(t,e)}}function nS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;n.uniform4fv(this.addr,e),Un(t,e)}}function iS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Un(t,e)}else{if(Nn(t,i))return;Rf.set(i),n.uniformMatrix2fv(this.addr,!1,Rf),Un(t,i)}}function rS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Un(t,e)}else{if(Nn(t,i))return;Af.set(i),n.uniformMatrix3fv(this.addr,!1,Af),Un(t,i)}}function sS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Un(t,e)}else{if(Nn(t,i))return;Tf.set(i),n.uniformMatrix4fv(this.addr,!1,Tf),Un(t,i)}}function oS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function aS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;n.uniform2iv(this.addr,e),Un(t,e)}}function cS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;n.uniform3iv(this.addr,e),Un(t,e)}}function lS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;n.uniform4iv(this.addr,e),Un(t,e)}}function dS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function uS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;n.uniform2uiv(this.addr,e),Un(t,e)}}function hS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;n.uniform3uiv(this.addr,e),Un(t,e)}}function fS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;n.uniform4uiv(this.addr,e),Un(t,e)}}function pS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Mf.compareFunction=Op,s=Mf):s=cm,t.setTexture2D(e||s,r)}function mS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||dm,r)}function gS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||um,r)}function _S(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||lm,r)}function vS(n){switch(n){case 5126:return Qy;case 35664:return eS;case 35665:return tS;case 35666:return nS;case 35674:return iS;case 35675:return rS;case 35676:return sS;case 5124:case 35670:return oS;case 35667:case 35671:return aS;case 35668:case 35672:return cS;case 35669:case 35673:return lS;case 5125:return dS;case 36294:return uS;case 36295:return hS;case 36296:return fS;case 35678:case 36198:case 36298:case 36306:case 35682:return pS;case 35679:case 36299:case 36307:return mS;case 35680:case 36300:case 36308:case 36293:return gS;case 36289:case 36303:case 36311:case 36292:return _S}}function xS(n,e){n.uniform1fv(this.addr,e)}function yS(n,e){const t=Uo(e,this.size,2);n.uniform2fv(this.addr,t)}function SS(n,e){const t=Uo(e,this.size,3);n.uniform3fv(this.addr,t)}function bS(n,e){const t=Uo(e,this.size,4);n.uniform4fv(this.addr,t)}function MS(n,e){const t=Uo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function wS(n,e){const t=Uo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ES(n,e){const t=Uo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function TS(n,e){n.uniform1iv(this.addr,e)}function AS(n,e){n.uniform2iv(this.addr,e)}function RS(n,e){n.uniform3iv(this.addr,e)}function CS(n,e){n.uniform4iv(this.addr,e)}function PS(n,e){n.uniform1uiv(this.addr,e)}function DS(n,e){n.uniform2uiv(this.addr,e)}function LS(n,e){n.uniform3uiv(this.addr,e)}function IS(n,e){n.uniform4uiv(this.addr,e)}function NS(n,e,t){const i=this.cache,r=e.length,s=El(t,r);Nn(i,s)||(n.uniform1iv(this.addr,s),Un(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||cm,s[o])}function US(n,e,t){const i=this.cache,r=e.length,s=El(t,r);Nn(i,s)||(n.uniform1iv(this.addr,s),Un(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||dm,s[o])}function kS(n,e,t){const i=this.cache,r=e.length,s=El(t,r);Nn(i,s)||(n.uniform1iv(this.addr,s),Un(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||um,s[o])}function FS(n,e,t){const i=this.cache,r=e.length,s=El(t,r);Nn(i,s)||(n.uniform1iv(this.addr,s),Un(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||lm,s[o])}function OS(n){switch(n){case 5126:return xS;case 35664:return yS;case 35665:return SS;case 35666:return bS;case 35674:return MS;case 35675:return wS;case 35676:return ES;case 5124:case 35670:return TS;case 35667:case 35671:return AS;case 35668:case 35672:return RS;case 35669:case 35673:return CS;case 5125:return PS;case 36294:return DS;case 36295:return LS;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return NS;case 35679:case 36299:case 36307:return US;case 35680:case 36300:case 36308:case 36293:return kS;case 36289:case 36303:case 36311:case 36292:return FS}}class zS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=vS(t.type)}}class BS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OS(t.type)}}class HS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const xd=/(\w+)(\])?(\[|\.)?/g;function Cf(n,e){n.seq.push(e),n.map[e.id]=e}function VS(n,e,t){const i=n.name,r=i.length;for(xd.lastIndex=0;;){const s=xd.exec(i),o=xd.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Cf(t,l===void 0?new zS(a,n,e):new BS(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new HS(a),Cf(t,u)),t=u}}}class $c{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);VS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Pf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const GS=37297;let WS=0;function XS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Df=new wt;function qS(n){Bt._getMatrix(Df,Bt.workingColorSpace,n);const e=`mat3( ${Df.elements.map(t=>t.toFixed(4))} )`;switch(Bt.getTransfer(n)){case tl:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Lf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+XS(n.getShaderSource(e),a)}else return s}function $S(n,e){const t=qS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function YS(n,e){let t;switch(e){case i0:t="Linear";break;case r0:t="Reinhard";break;case s0:t="Cineon";break;case o0:t="ACESFilmic";break;case c0:t="AgX";break;case l0:t="Neutral";break;case a0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pc=new b;function jS(){Bt.getLuminanceCoefficients(Pc);const n=Pc.x.toFixed(4),e=Pc.y.toFixed(4),t=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function KS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function JS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function sa(n){return n!==""}function If(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pu(n){return n.replace(QS,tb)}const eb=new Map;function tb(n,e){let t=At[e];if(t===void 0){const i=eb.get(e);if(i!==void 0)t=At[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pu(t)}const nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uf(n){return n.replace(nb,ib)}function ib(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function rb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ap?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===kg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===br&&(e="SHADOWMAP_TYPE_VSM"),e}function sb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case bo:case Mo:e="ENVMAP_TYPE_CUBE";break;case Ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ob(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Mo&&(e="ENVMAP_MODE_REFRACTION"),e}function ab(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rp:e="ENVMAP_BLENDING_MULTIPLY";break;case t0:e="ENVMAP_BLENDING_MIX";break;case n0:e="ENVMAP_BLENDING_ADD";break}return e}function cb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function lb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=rb(t),l=sb(t),d=ob(t),u=ab(t),h=cb(t),f=ZS(t),g=KS(s),_=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sa).join(`
`),p.length>0&&(p+=`
`)):(m=[kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),p=[kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zr?"#define TONE_MAPPING":"",t.toneMapping!==Zr?At.tonemapping_pars_fragment:"",t.toneMapping!==Zr?YS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,$S("linearToOutputTexel",t.outputColorSpace),jS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),o=Pu(o),o=If(o,t),o=Nf(o,t),a=Pu(a),a=If(a,t),a=Nf(a,t),o=Uf(o),a=Uf(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=w+m+o,v=w+p+a,C=Pf(r,r.VERTEX_SHADER,x),P=Pf(r,r.FRAGMENT_SHADER,v);r.attachShader(_,C),r.attachShader(_,P),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(I){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(_)||"",V=r.getShaderInfoLog(C)||"",G=r.getShaderInfoLog(P)||"",J=F.trim(),Y=V.trim(),de=G.trim();let q=!0,oe=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,P);else{const xe=Lf(r,C,"vertex"),We=Lf(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+J+`
`+xe+`
`+We)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Y===""||de==="")&&(oe=!1);oe&&(I.diagnostics={runnable:q,programLog:J,vertexShader:{log:Y,prefix:m},fragmentShader:{log:de,prefix:p}})}r.deleteShader(C),r.deleteShader(P),N=new $c(r,_),M=JS(r,_)}let N;this.getUniforms=function(){return N===void 0&&D(this),N};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,GS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=P,this}let db=0;class ub{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new hb(e),t.set(e,i)),i}}class hb{constructor(e){this.id=db++,this.code=e,this.usedTimes=0}}function fb(n,e,t,i,r,s,o){const a=new Qu,c=new ub,l=new Set,d=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,I,F,V){const G=F.fog,J=V.geometry,Y=M.isMeshStandardMaterial?F.environment:null,de=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),q=de&&de.mapping===Ml?de.image.height:null,oe=g[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const xe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,We=xe!==void 0?xe.length:0;let it=0;J.morphAttributes.position!==void 0&&(it=1),J.morphAttributes.normal!==void 0&&(it=2),J.morphAttributes.color!==void 0&&(it=3);let gt,xt,Q,Te;if(oe){const Fe=hr[oe];gt=Fe.vertexShader,xt=Fe.fragmentShader}else gt=M.vertexShader,xt=M.fragmentShader,c.update(M),Q=c.getVertexShaderID(M),Te=c.getFragmentShaderID(M);const se=n.getRenderTarget(),je=n.state.buffers.depth.getReversed(),ne=V.isInstancedMesh===!0,fe=V.isBatchedMesh===!0,ee=!!M.map,te=!!M.matcap,R=!!de,me=!!M.aoMap,ue=!!M.lightMap,He=!!M.bumpMap,pe=!!M.normalMap,Ie=!!M.displacementMap,ae=!!M.emissiveMap,Ae=!!M.metalnessMap,we=!!M.roughnessMap,Ce=M.anisotropy>0,A=M.clearcoat>0,y=M.dispersion>0,O=M.iridescence>0,Z=M.sheen>0,X=M.transmission>0,W=Ce&&!!M.anisotropyMap,ke=A&&!!M.clearcoatMap,_e=A&&!!M.clearcoatNormalMap,$e=A&&!!M.clearcoatRoughnessMap,Ye=O&&!!M.iridescenceMap,be=O&&!!M.iridescenceThicknessMap,Pe=Z&&!!M.sheenColorMap,Ze=Z&&!!M.sheenRoughnessMap,Ke=!!M.specularMap,Re=!!M.specularColorMap,mt=!!M.specularIntensityMap,U=X&&!!M.transmissionMap,ye=X&&!!M.thicknessMap,Se=!!M.gradientMap,Xe=!!M.alphaMap,ge=M.alphaTest>0,re=!!M.alphaHash,qe=!!M.extensions;let ie=Zr;M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ie=n.toneMapping);const Ne={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:gt,fragmentShader:xt,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:Te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:fe,batchingColor:fe&&V._colorsTexture!==null,instancing:ne,instancingColor:ne&&V.instanceColor!==null,instancingMorph:ne&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:wo,alphaToCoverage:!!M.alphaToCoverage,map:ee,matcap:te,envMap:R,envMapMode:R&&de.mapping,envMapCubeUVHeight:q,aoMap:me,lightMap:ue,bumpMap:He,normalMap:pe,displacementMap:h&&Ie,emissiveMap:ae,normalMapObjectSpace:pe&&M.normalMapType===p0,normalMapTangentSpace:pe&&M.normalMapType===f0,metalnessMap:Ae,roughnessMap:we,anisotropy:Ce,anisotropyMap:W,clearcoat:A,clearcoatMap:ke,clearcoatNormalMap:_e,clearcoatRoughnessMap:$e,dispersion:y,iridescence:O,iridescenceMap:Ye,iridescenceThicknessMap:be,sheen:Z,sheenColorMap:Pe,sheenRoughnessMap:Ze,specularMap:Ke,specularColorMap:Re,specularIntensityMap:mt,transmission:X,transmissionMap:U,thicknessMap:ye,gradientMap:Se,opaque:M.transparent===!1&&M.blending===po&&M.alphaToCoverage===!1,alphaMap:Xe,alphaTest:ge,alphaHash:re,combine:M.combine,mapUv:ee&&_(M.map.channel),aoMapUv:me&&_(M.aoMap.channel),lightMapUv:ue&&_(M.lightMap.channel),bumpMapUv:He&&_(M.bumpMap.channel),normalMapUv:pe&&_(M.normalMap.channel),displacementMapUv:Ie&&_(M.displacementMap.channel),emissiveMapUv:ae&&_(M.emissiveMap.channel),metalnessMapUv:Ae&&_(M.metalnessMap.channel),roughnessMapUv:we&&_(M.roughnessMap.channel),anisotropyMapUv:W&&_(M.anisotropyMap.channel),clearcoatMapUv:ke&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:_e&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$e&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:be&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&_(M.sheenRoughnessMap.channel),specularMapUv:Ke&&_(M.specularMap.channel),specularColorMapUv:Re&&_(M.specularColorMap.channel),specularIntensityMapUv:mt&&_(M.specularIntensityMap.channel),transmissionMapUv:U&&_(M.transmissionMap.channel),thicknessMapUv:ye&&_(M.thicknessMap.channel),alphaMapUv:Xe&&_(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(pe||Ce),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!J.attributes.uv&&(ee||Xe),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:je,skinning:V.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:We,morphTextureStride:it,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:ee&&M.map.isVideoTexture===!0&&Bt.getTransfer(M.map.colorSpace)===Zt,decodeVideoTextureEmissive:ae&&M.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(M.emissiveMap.colorSpace)===Zt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fn,flipSided:M.side===yi,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:qe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&M.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(w(S,M),x(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function w(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const S=g[M.type];let I;if(S){const F=hr[S];I=r_.clone(F.uniforms)}else I=M.uniforms;return I}function C(M,S){let I;for(let F=0,V=d.length;F<V;F++){const G=d[F];if(G.cacheKey===S){I=G,++I.usedTimes;break}}return I===void 0&&(I=new lb(n,S,M,s),d.push(I)),I}function P(M){if(--M.usedTimes===0){const S=d.indexOf(M);d[S]=d[d.length-1],d.pop(),M.destroy()}}function D(M){c.remove(M)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:P,releaseShaderCache:D,programs:d,dispose:N}}function pb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function mb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ff(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Of(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,h,f,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,h,f,g,_,m){const p=o(u,h,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(u,h,f,g,_,m){const p=o(u,h,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(u,h){t.length>1&&t.sort(u||mb),i.length>1&&i.sort(h||Ff),r.length>1&&r.sort(h||Ff)}function d(){for(let u=e,h=n.length;u<h;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:d,sort:l}}function gb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Of,n.set(i,[o])):r>=s.length?(o=new Of,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function _b(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Nt};break;case"SpotLight":t={position:new b,direction:new b,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":t={color:new Nt,position:new b,halfWidth:new b,halfHeight:new b};break}return n[e.id]=t,t}}}function vb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let xb=0;function yb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Sb(n){const e=new _b,t=vb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new b);const r=new b,s=new qt,o=new qt;function a(l){let d=0,u=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,w=0,x=0,v=0,C=0,P=0,D=0;l.sort(yb);for(let M=0,S=l.length;M<S;M++){const I=l[M],F=I.color,V=I.intensity,G=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=F.r*V,u+=F.g*V,h+=F.b*V;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],V);D++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const de=I.shadow,q=t.get(I);q.shadowIntensity=de.intensity,q.shadowBias=de.bias,q.shadowNormalBias=de.normalBias,q.shadowRadius=de.radius,q.shadowMapSize=de.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=J,i.directionalShadowMatrix[f]=I.shadow.matrix,w++}i.directional[f]=Y,f++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(F).multiplyScalar(V),Y.distance=G,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[_]=Y;const de=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,de.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[_]=de.matrix,I.castShadow){const q=t.get(I);q.shadowIntensity=de.intensity,q.shadowBias=de.bias,q.shadowNormalBias=de.normalBias,q.shadowRadius=de.radius,q.shadowMapSize=de.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=J,v++}_++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(F).multiplyScalar(V),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=Y,m++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const de=I.shadow,q=t.get(I);q.shadowIntensity=de.intensity,q.shadowBias=de.bias,q.shadowNormalBias=de.normalBias,q.shadowRadius=de.radius,q.shadowMapSize=de.mapSize,q.shadowCameraNear=de.camera.near,q.shadowCameraFar=de.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=I.shadow.matrix,x++}i.point[g]=Y,g++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(V),Y.groundColor.copy(I.groundColor).multiplyScalar(V),i.hemi[p]=Y,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_FLOAT_1,i.rectAreaLTC2=Be.LTC_FLOAT_2):(i.rectAreaLTC1=Be.LTC_HALF_1,i.rectAreaLTC2=Be.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==w||N.numPointShadows!==x||N.numSpotShadows!==v||N.numSpotMaps!==C||N.numLightProbes!==D)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,N.directionalLength=f,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=w,N.numPointShadows=x,N.numSpotShadows=v,N.numSpotMaps=C,N.numLightProbes=D,i.version=xb++)}function c(l,d){let u=0,h=0,f=0,g=0,_=0;const m=d.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const x=l[p];if(x.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function zf(n){const e=new Sb(n),t=[],i=[];function r(d){l.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function bb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new zf(n),e.set(r,[a])):s>=o.length?(a=new zf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wb=`uniform sampler2D shadow_pass;
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
}`;function Eb(n,e,t){let i=new eh;const r=new ze,s=new ze,o=new Ft,a=new $_({depthPacking:h0}),c=new Y_,l={},d=t.maxTextureSize,u={[Rr]:yi,[yi]:Rr,[fn]:fn},h=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Mb,fragmentShader:wb}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ee(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ap;let p=this.type;this.render=function(P,D,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),F=n.state;F.setBlending(jr),F.buffers.depth.getReversed()?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=p!==br&&this.type===br,G=p===br&&this.type!==br;for(let J=0,Y=P.length;J<Y;J++){const de=P[J],q=de.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const oe=q.getFrameExtents();if(r.multiply(oe),s.copy(q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/oe.x),r.x=s.x*oe.x,q.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/oe.y),r.y=s.y*oe.y,q.mapSize.y=s.y)),q.map===null||V===!0||G===!0){const We=this.type!==br?{minFilter:nr,magFilter:nr}:{};q.map!==null&&q.map.dispose(),q.map=new Ls(r.x,r.y,We),q.map.texture.name=de.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const xe=q.getViewportCount();for(let We=0;We<xe;We++){const it=q.getViewport(We);o.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),F.viewport(o),q.updateMatrices(de,We),i=q.getFrustum(),v(D,N,q.camera,de,this.type)}q.isPointLightShadow!==!0&&this.type===br&&w(q,N),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,I)};function w(P,D){const N=e.update(_);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ls(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(D,null,N,h,_,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(D,null,N,f,_,null)}function x(P,D,N,M){let S=null;const I=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)S=I;else if(S=N.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const F=S.uuid,V=D.uuid;let G=l[F];G===void 0&&(G={},l[F]=G);let J=G[V];J===void 0&&(J=S.clone(),G[V]=J,D.addEventListener("dispose",C)),S=J}if(S.visible=D.visible,S.wireframe=D.wireframe,M===br?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:u[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=n.properties.get(S);F.light=N}return S}function v(P,D,N,M,S){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===br)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const V=e.update(P),G=P.material;if(Array.isArray(G)){const J=V.groups;for(let Y=0,de=J.length;Y<de;Y++){const q=J[Y],oe=G[q.materialIndex];if(oe&&oe.visible){const xe=x(P,oe,M,S);P.onBeforeShadow(n,P,D,N,V,xe,q),n.renderBufferDirect(N,null,V,xe,P,q),P.onAfterShadow(n,P,D,N,V,xe,q)}}}else if(G.visible){const J=x(P,G,M,S);P.onBeforeShadow(n,P,D,N,V,J,null),n.renderBufferDirect(N,null,V,J,P,null),P.onAfterShadow(n,P,D,N,V,J,null)}}const F=P.children;for(let V=0,G=F.length;V<G;V++)v(F[V],D,N,M,S)}function C(P){P.target.removeEventListener("dispose",C);for(const N in l){const M=l[N],S=P.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Tb={[Gd]:Wd,[Xd]:Yd,[qd]:jd,[So]:$d,[Wd]:Gd,[Yd]:Xd,[jd]:qd,[$d]:So};function Ab(n,e){function t(){let U=!1;const ye=new Ft;let Se=null;const Xe=new Ft(0,0,0,0);return{setMask:function(ge){Se!==ge&&!U&&(n.colorMask(ge,ge,ge,ge),Se=ge)},setLocked:function(ge){U=ge},setClear:function(ge,re,qe,ie,Ne){Ne===!0&&(ge*=ie,re*=ie,qe*=ie),ye.set(ge,re,qe,ie),Xe.equals(ye)===!1&&(n.clearColor(ge,re,qe,ie),Xe.copy(ye))},reset:function(){U=!1,Se=null,Xe.set(-1,0,0,0)}}}function i(){let U=!1,ye=!1,Se=null,Xe=null,ge=null;return{setReversed:function(re){if(ye!==re){const qe=e.get("EXT_clip_control");re?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),ye=re;const ie=ge;ge=null,this.setClear(ie)}},getReversed:function(){return ye},setTest:function(re){re?se(n.DEPTH_TEST):je(n.DEPTH_TEST)},setMask:function(re){Se!==re&&!U&&(n.depthMask(re),Se=re)},setFunc:function(re){if(ye&&(re=Tb[re]),Xe!==re){switch(re){case Gd:n.depthFunc(n.NEVER);break;case Wd:n.depthFunc(n.ALWAYS);break;case Xd:n.depthFunc(n.LESS);break;case So:n.depthFunc(n.LEQUAL);break;case qd:n.depthFunc(n.EQUAL);break;case $d:n.depthFunc(n.GEQUAL);break;case Yd:n.depthFunc(n.GREATER);break;case jd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Xe=re}},setLocked:function(re){U=re},setClear:function(re){ge!==re&&(ye&&(re=1-re),n.clearDepth(re),ge=re)},reset:function(){U=!1,Se=null,Xe=null,ge=null,ye=!1}}}function r(){let U=!1,ye=null,Se=null,Xe=null,ge=null,re=null,qe=null,ie=null,Ne=null;return{setTest:function(Fe){U||(Fe?se(n.STENCIL_TEST):je(n.STENCIL_TEST))},setMask:function(Fe){ye!==Fe&&!U&&(n.stencilMask(Fe),ye=Fe)},setFunc:function(Fe,ht,Mt){(Se!==Fe||Xe!==ht||ge!==Mt)&&(n.stencilFunc(Fe,ht,Mt),Se=Fe,Xe=ht,ge=Mt)},setOp:function(Fe,ht,Mt){(re!==Fe||qe!==ht||ie!==Mt)&&(n.stencilOp(Fe,ht,Mt),re=Fe,qe=ht,ie=Mt)},setLocked:function(Fe){U=Fe},setClear:function(Fe){Ne!==Fe&&(n.clearStencil(Fe),Ne=Fe)},reset:function(){U=!1,ye=null,Se=null,Xe=null,ge=null,re=null,qe=null,ie=null,Ne=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let d={},u={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,x=null,v=null,C=null,P=null,D=new Nt(0,0,0),N=0,M=!1,S=null,I=null,F=null,V=null,G=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,de=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=de>=1):q.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=de>=2);let oe=null,xe={};const We=n.getParameter(n.SCISSOR_BOX),it=n.getParameter(n.VIEWPORT),gt=new Ft().fromArray(We),xt=new Ft().fromArray(it);function Q(U,ye,Se,Xe){const ge=new Uint8Array(4),re=n.createTexture();n.bindTexture(U,re),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<Se;qe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,Xe,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(ye+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return re}const Te={};Te[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(So),He(!1),pe(Eh),se(n.CULL_FACE),me(jr);function se(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function je(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function ne(U,ye){return u[U]!==ye?(n.bindFramebuffer(U,ye),u[U]=ye,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ye),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function fe(U,ye){let Se=f,Xe=!1;if(U){Se=h.get(ye),Se===void 0&&(Se=[],h.set(ye,Se));const ge=U.textures;if(Se.length!==ge.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let re=0,qe=ge.length;re<qe;re++)Se[re]=n.COLOR_ATTACHMENT0+re;Se.length=ge.length,Xe=!0}}else Se[0]!==n.BACK&&(Se[0]=n.BACK,Xe=!0);Xe&&n.drawBuffers(Se)}function ee(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const te={[_s]:n.FUNC_ADD,[Og]:n.FUNC_SUBTRACT,[zg]:n.FUNC_REVERSE_SUBTRACT};te[Bg]=n.MIN,te[Hg]=n.MAX;const R={[Vg]:n.ZERO,[Gg]:n.ONE,[Wg]:n.SRC_COLOR,[Hd]:n.SRC_ALPHA,[Zg]:n.SRC_ALPHA_SATURATE,[Yg]:n.DST_COLOR,[qg]:n.DST_ALPHA,[Xg]:n.ONE_MINUS_SRC_COLOR,[Vd]:n.ONE_MINUS_SRC_ALPHA,[jg]:n.ONE_MINUS_DST_COLOR,[$g]:n.ONE_MINUS_DST_ALPHA,[Kg]:n.CONSTANT_COLOR,[Jg]:n.ONE_MINUS_CONSTANT_COLOR,[Qg]:n.CONSTANT_ALPHA,[e0]:n.ONE_MINUS_CONSTANT_ALPHA};function me(U,ye,Se,Xe,ge,re,qe,ie,Ne,Fe){if(U===jr){_===!0&&(je(n.BLEND),_=!1);return}if(_===!1&&(se(n.BLEND),_=!0),U!==Fg){if(U!==m||Fe!==M){if((p!==_s||v!==_s)&&(n.blendEquation(n.FUNC_ADD),p=_s,v=_s),Fe)switch(U){case po:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bd:n.blendFunc(n.ONE,n.ONE);break;case Th:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ah:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case po:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Th:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ah:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,x=null,C=null,P=null,D.set(0,0,0),N=0,m=U,M=Fe}return}ge=ge||ye,re=re||Se,qe=qe||Xe,(ye!==p||ge!==v)&&(n.blendEquationSeparate(te[ye],te[ge]),p=ye,v=ge),(Se!==w||Xe!==x||re!==C||qe!==P)&&(n.blendFuncSeparate(R[Se],R[Xe],R[re],R[qe]),w=Se,x=Xe,C=re,P=qe),(ie.equals(D)===!1||Ne!==N)&&(n.blendColor(ie.r,ie.g,ie.b,Ne),D.copy(ie),N=Ne),m=U,M=!1}function ue(U,ye){U.side===fn?je(n.CULL_FACE):se(n.CULL_FACE);let Se=U.side===yi;ye&&(Se=!Se),He(Se),U.blending===po&&U.transparent===!1?me(jr):me(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Xe=U.stencilWrite;a.setTest(Xe),Xe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):je(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(U){S!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),S=U)}function pe(U){U!==Ng?(se(n.CULL_FACE),U!==I&&(U===Eh?n.cullFace(n.BACK):U===Ug?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):je(n.CULL_FACE),I=U}function Ie(U){U!==F&&(Y&&n.lineWidth(U),F=U)}function ae(U,ye,Se){U?(se(n.POLYGON_OFFSET_FILL),(V!==ye||G!==Se)&&(n.polygonOffset(ye,Se),V=ye,G=Se)):je(n.POLYGON_OFFSET_FILL)}function Ae(U){U?se(n.SCISSOR_TEST):je(n.SCISSOR_TEST)}function we(U){U===void 0&&(U=n.TEXTURE0+J-1),oe!==U&&(n.activeTexture(U),oe=U)}function Ce(U,ye,Se){Se===void 0&&(oe===null?Se=n.TEXTURE0+J-1:Se=oe);let Xe=xe[Se];Xe===void 0&&(Xe={type:void 0,texture:void 0},xe[Se]=Xe),(Xe.type!==U||Xe.texture!==ye)&&(oe!==Se&&(n.activeTexture(Se),oe=Se),n.bindTexture(U,ye||Te[U]),Xe.type=U,Xe.texture=ye)}function A(){const U=xe[oe];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(U){gt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),gt.copy(U))}function Ze(U){xt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),xt.copy(U))}function Ke(U,ye){let Se=l.get(ye);Se===void 0&&(Se=new WeakMap,l.set(ye,Se));let Xe=Se.get(U);Xe===void 0&&(Xe=n.getUniformBlockIndex(ye,U.name),Se.set(U,Xe))}function Re(U,ye){const Xe=l.get(ye).get(U);c.get(ye)!==Xe&&(n.uniformBlockBinding(ye,Xe,U.__bindingPointIndex),c.set(ye,Xe))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},oe=null,xe={},u={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,x=null,v=null,C=null,P=null,D=new Nt(0,0,0),N=0,M=!1,S=null,I=null,F=null,V=null,G=null,gt.set(0,0,n.canvas.width,n.canvas.height),xt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:je,bindFramebuffer:ne,drawBuffers:fe,useProgram:ee,setBlending:me,setMaterial:ue,setFlipSided:He,setCullFace:pe,setLineWidth:Ie,setPolygonOffset:ae,setScissorTest:Ae,activeTexture:we,bindTexture:Ce,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:O,texImage2D:Ye,texImage3D:be,updateUBOMapping:Ke,uniformBlockBinding:Re,texStorage2D:_e,texStorage3D:$e,texSubImage2D:Z,texSubImage3D:X,compressedTexSubImage2D:W,compressedTexSubImage3D:ke,scissor:Pe,viewport:Ze,reset:mt}}function Rb(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ze,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return f?new OffscreenCanvas(A,y):rl("canvas")}function _(A,y,O){let Z=1;const X=Ce(A);if((X.width>O||X.height>O)&&(Z=O/Math.max(X.width,X.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const W=Math.floor(Z*X.width),ke=Math.floor(Z*X.height);u===void 0&&(u=g(W,ke));const _e=y?g(W,ke):u;return _e.width=W,_e.height=ke,_e.getContext("2d").drawImage(A,0,0,W,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+W+"x"+ke+")."),_e}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(A,y,O,Z,X=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=y;if(y===n.RED&&(O===n.FLOAT&&(W=n.R32F),O===n.HALF_FLOAT&&(W=n.R16F),O===n.UNSIGNED_BYTE&&(W=n.R8)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.R8UI),O===n.UNSIGNED_SHORT&&(W=n.R16UI),O===n.UNSIGNED_INT&&(W=n.R32UI),O===n.BYTE&&(W=n.R8I),O===n.SHORT&&(W=n.R16I),O===n.INT&&(W=n.R32I)),y===n.RG&&(O===n.FLOAT&&(W=n.RG32F),O===n.HALF_FLOAT&&(W=n.RG16F),O===n.UNSIGNED_BYTE&&(W=n.RG8)),y===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RG8UI),O===n.UNSIGNED_SHORT&&(W=n.RG16UI),O===n.UNSIGNED_INT&&(W=n.RG32UI),O===n.BYTE&&(W=n.RG8I),O===n.SHORT&&(W=n.RG16I),O===n.INT&&(W=n.RG32I)),y===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGB8UI),O===n.UNSIGNED_SHORT&&(W=n.RGB16UI),O===n.UNSIGNED_INT&&(W=n.RGB32UI),O===n.BYTE&&(W=n.RGB8I),O===n.SHORT&&(W=n.RGB16I),O===n.INT&&(W=n.RGB32I)),y===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),O===n.UNSIGNED_INT&&(W=n.RGBA32UI),O===n.BYTE&&(W=n.RGBA8I),O===n.SHORT&&(W=n.RGBA16I),O===n.INT&&(W=n.RGBA32I)),y===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),y===n.RGBA){const ke=X?tl:Bt.getTransfer(Z);O===n.FLOAT&&(W=n.RGBA32F),O===n.HALF_FLOAT&&(W=n.RGBA16F),O===n.UNSIGNED_BYTE&&(W=ke===Zt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function v(A,y){let O;return A?y===null||y===Ds||y===ya?O=n.DEPTH24_STENCIL8:y===wr?O=n.DEPTH32F_STENCIL8:y===xa&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ds||y===ya?O=n.DEPTH_COMPONENT24:y===wr?O=n.DEPTH_COMPONENT32F:y===xa&&(O=n.DEPTH_COMPONENT16),O}function C(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==nr&&A.minFilter!==fr?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function P(A){const y=A.target;y.removeEventListener("dispose",P),N(y),y.isVideoTexture&&d.delete(y)}function D(A){const y=A.target;y.removeEventListener("dispose",D),S(y)}function N(A){const y=i.get(A);if(y.__webglInit===void 0)return;const O=A.source,Z=h.get(O);if(Z){const X=Z[y.__cacheKey];X.usedTimes--,X.usedTimes===0&&M(A),Object.keys(Z).length===0&&h.delete(O)}i.remove(A)}function M(A){const y=i.get(A);n.deleteTexture(y.__webglTexture);const O=A.source,Z=h.get(O);delete Z[y.__cacheKey],o.memory.textures--}function S(A){const y=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let X=0;X<y.__webglFramebuffer[Z].length;X++)n.deleteFramebuffer(y.__webglFramebuffer[Z][X]);else n.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[Z]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=A.textures;for(let Z=0,X=O.length;Z<X;Z++){const W=i.get(O[Z]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(O[Z])}i.remove(A)}let I=0;function F(){I=0}function V(){const A=I;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),I+=1,A}function G(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function J(A,y){const O=i.get(A);if(A.isVideoTexture&&Ae(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(O,A,y);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function Y(A,y){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Te(O,A,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function de(A,y){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Te(O,A,y);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function q(A,y){const O=i.get(A);if(A.version>0&&O.__version!==A.version){se(O,A,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}const oe={[Jd]:n.REPEAT,[Ss]:n.CLAMP_TO_EDGE,[Qd]:n.MIRRORED_REPEAT},xe={[nr]:n.NEAREST,[d0]:n.NEAREST_MIPMAP_NEAREST,[ic]:n.NEAREST_MIPMAP_LINEAR,[fr]:n.LINEAR,[zl]:n.LINEAR_MIPMAP_NEAREST,[bs]:n.LINEAR_MIPMAP_LINEAR},We={[m0]:n.NEVER,[S0]:n.ALWAYS,[g0]:n.LESS,[Op]:n.LEQUAL,[_0]:n.EQUAL,[y0]:n.GEQUAL,[v0]:n.GREATER,[x0]:n.NOTEQUAL};function it(A,y){if(y.type===wr&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===fr||y.magFilter===zl||y.magFilter===ic||y.magFilter===bs||y.minFilter===fr||y.minFilter===zl||y.minFilter===ic||y.minFilter===bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,oe[y.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,oe[y.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,oe[y.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,xe[y.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,xe[y.minFilter]),y.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,We[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===nr||y.minFilter!==ic&&y.minFilter!==bs||y.type===wr&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function gt(A,y){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",P));const Z=y.source;let X=h.get(Z);X===void 0&&(X={},h.set(Z,X));const W=G(y);if(W!==A.__cacheKey){X[W]===void 0&&(X[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),X[W].usedTimes++;const ke=X[A.__cacheKey];ke!==void 0&&(X[A.__cacheKey].usedTimes--,ke.usedTimes===0&&M(y)),A.__cacheKey=W,A.__webglTexture=X[W].texture}return O}function xt(A,y,O){return Math.floor(Math.floor(A/O)/y)}function Q(A,y,O,Z){const W=A.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,O,Z,y.data);else{W.sort((be,Pe)=>be.start-Pe.start);let ke=0;for(let be=1;be<W.length;be++){const Pe=W[ke],Ze=W[be],Ke=Pe.start+Pe.count,Re=xt(Ze.start,y.width,4),mt=xt(Pe.start,y.width,4);Ze.start<=Ke+1&&Re===mt&&xt(Ze.start+Ze.count-1,y.width,4)===Re?Pe.count=Math.max(Pe.count,Ze.start+Ze.count-Pe.start):(++ke,W[ke]=Ze)}W.length=ke+1;const _e=n.getParameter(n.UNPACK_ROW_LENGTH),$e=n.getParameter(n.UNPACK_SKIP_PIXELS),Ye=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let be=0,Pe=W.length;be<Pe;be++){const Ze=W[be],Ke=Math.floor(Ze.start/4),Re=Math.ceil(Ze.count/4),mt=Ke%y.width,U=Math.floor(Ke/y.width),ye=Re,Se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,mt),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,mt,U,ye,Se,O,Z,y.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,_e),n.pixelStorei(n.UNPACK_SKIP_PIXELS,$e),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ye)}}function Te(A,y,O){let Z=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=n.TEXTURE_3D);const X=gt(A,y),W=y.source;t.bindTexture(Z,A.__webglTexture,n.TEXTURE0+O);const ke=i.get(W);if(W.version!==ke.__version||X===!0){t.activeTexture(n.TEXTURE0+O);const _e=Bt.getPrimaries(Bt.workingColorSpace),$e=y.colorSpace===$r?null:Bt.getPrimaries(y.colorSpace),Ye=y.colorSpace===$r||_e===$e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let be=_(y.image,!1,r.maxTextureSize);be=we(y,be);const Pe=s.convert(y.format,y.colorSpace),Ze=s.convert(y.type);let Ke=x(y.internalFormat,Pe,Ze,y.colorSpace,y.isVideoTexture);it(Z,y);let Re;const mt=y.mipmaps,U=y.isVideoTexture!==!0,ye=ke.__version===void 0||X===!0,Se=W.dataReady,Xe=C(y,be);if(y.isDepthTexture)Ke=v(y.format===ba,y.type),ye&&(U?t.texStorage2D(n.TEXTURE_2D,1,Ke,be.width,be.height):t.texImage2D(n.TEXTURE_2D,0,Ke,be.width,be.height,0,Pe,Ze,null));else if(y.isDataTexture)if(mt.length>0){U&&ye&&t.texStorage2D(n.TEXTURE_2D,Xe,Ke,mt[0].width,mt[0].height);for(let ge=0,re=mt.length;ge<re;ge++)Re=mt[ge],U?Se&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Re.width,Re.height,Pe,Ze,Re.data):t.texImage2D(n.TEXTURE_2D,ge,Ke,Re.width,Re.height,0,Pe,Ze,Re.data);y.generateMipmaps=!1}else U?(ye&&t.texStorage2D(n.TEXTURE_2D,Xe,Ke,be.width,be.height),Se&&Q(y,be,Pe,Ze)):t.texImage2D(n.TEXTURE_2D,0,Ke,be.width,be.height,0,Pe,Ze,be.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,Ke,mt[0].width,mt[0].height,be.depth);for(let ge=0,re=mt.length;ge<re;ge++)if(Re=mt[ge],y.format!==er)if(Pe!==null)if(U){if(Se)if(y.layerUpdates.size>0){const qe=mf(Re.width,Re.height,y.format,y.type);for(const ie of y.layerUpdates){const Ne=Re.data.subarray(ie*qe/Re.data.BYTES_PER_ELEMENT,(ie+1)*qe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,ie,Re.width,Re.height,1,Pe,Ne)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,be.depth,Pe,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Ke,Re.width,Re.height,be.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?Se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,be.depth,Pe,Ze,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Ke,Re.width,Re.height,be.depth,0,Pe,Ze,Re.data)}else{U&&ye&&t.texStorage2D(n.TEXTURE_2D,Xe,Ke,mt[0].width,mt[0].height);for(let ge=0,re=mt.length;ge<re;ge++)Re=mt[ge],y.format!==er?Pe!==null?U?Se&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,Re.width,Re.height,Pe,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Ke,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?Se&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Re.width,Re.height,Pe,Ze,Re.data):t.texImage2D(n.TEXTURE_2D,ge,Ke,Re.width,Re.height,0,Pe,Ze,Re.data)}else if(y.isDataArrayTexture)if(U){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,Ke,be.width,be.height,be.depth),Se)if(y.layerUpdates.size>0){const ge=mf(be.width,be.height,y.format,y.type);for(const re of y.layerUpdates){const qe=be.data.subarray(re*ge/be.data.BYTES_PER_ELEMENT,(re+1)*ge/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,be.width,be.height,1,Pe,Ze,qe)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Pe,Ze,be.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ke,be.width,be.height,be.depth,0,Pe,Ze,be.data);else if(y.isData3DTexture)U?(ye&&t.texStorage3D(n.TEXTURE_3D,Xe,Ke,be.width,be.height,be.depth),Se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Pe,Ze,be.data)):t.texImage3D(n.TEXTURE_3D,0,Ke,be.width,be.height,be.depth,0,Pe,Ze,be.data);else if(y.isFramebufferTexture){if(ye)if(U)t.texStorage2D(n.TEXTURE_2D,Xe,Ke,be.width,be.height);else{let ge=be.width,re=be.height;for(let qe=0;qe<Xe;qe++)t.texImage2D(n.TEXTURE_2D,qe,Ke,ge,re,0,Pe,Ze,null),ge>>=1,re>>=1}}else if(mt.length>0){if(U&&ye){const ge=Ce(mt[0]);t.texStorage2D(n.TEXTURE_2D,Xe,Ke,ge.width,ge.height)}for(let ge=0,re=mt.length;ge<re;ge++)Re=mt[ge],U?Se&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Pe,Ze,Re):t.texImage2D(n.TEXTURE_2D,ge,Ke,Pe,Ze,Re);y.generateMipmaps=!1}else if(U){if(ye){const ge=Ce(be);t.texStorage2D(n.TEXTURE_2D,Xe,Ke,ge.width,ge.height)}Se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,Ze,be)}else t.texImage2D(n.TEXTURE_2D,0,Ke,Pe,Ze,be);m(y)&&p(Z),ke.__version=W.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function se(A,y,O){if(y.image.length!==6)return;const Z=gt(A,y),X=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+O);const W=i.get(X);if(X.version!==W.__version||Z===!0){t.activeTexture(n.TEXTURE0+O);const ke=Bt.getPrimaries(Bt.workingColorSpace),_e=y.colorSpace===$r?null:Bt.getPrimaries(y.colorSpace),$e=y.colorSpace===$r||ke===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const Ye=y.isCompressedTexture||y.image[0].isCompressedTexture,be=y.image[0]&&y.image[0].isDataTexture,Pe=[];for(let re=0;re<6;re++)!Ye&&!be?Pe[re]=_(y.image[re],!0,r.maxCubemapSize):Pe[re]=be?y.image[re].image:y.image[re],Pe[re]=we(y,Pe[re]);const Ze=Pe[0],Ke=s.convert(y.format,y.colorSpace),Re=s.convert(y.type),mt=x(y.internalFormat,Ke,Re,y.colorSpace),U=y.isVideoTexture!==!0,ye=W.__version===void 0||Z===!0,Se=X.dataReady;let Xe=C(y,Ze);it(n.TEXTURE_CUBE_MAP,y);let ge;if(Ye){U&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Xe,mt,Ze.width,Ze.height);for(let re=0;re<6;re++){ge=Pe[re].mipmaps;for(let qe=0;qe<ge.length;qe++){const ie=ge[qe];y.format!==er?Ke!==null?U?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,qe,0,0,ie.width,ie.height,Ke,ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,qe,mt,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,qe,0,0,ie.width,ie.height,Ke,Re,ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,qe,mt,ie.width,ie.height,0,Ke,Re,ie.data)}}}else{if(ge=y.mipmaps,U&&ye){ge.length>0&&Xe++;const re=Ce(Pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Xe,mt,re.width,re.height)}for(let re=0;re<6;re++)if(be){U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Pe[re].width,Pe[re].height,Ke,Re,Pe[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,mt,Pe[re].width,Pe[re].height,0,Ke,Re,Pe[re].data);for(let qe=0;qe<ge.length;qe++){const Ne=ge[qe].image[re].image;U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,qe+1,0,0,Ne.width,Ne.height,Ke,Re,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,qe+1,mt,Ne.width,Ne.height,0,Ke,Re,Ne.data)}}else{U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ke,Re,Pe[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,mt,Ke,Re,Pe[re]);for(let qe=0;qe<ge.length;qe++){const ie=ge[qe];U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,qe+1,0,0,Ke,Re,ie.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,qe+1,mt,Ke,Re,ie.image[re])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),W.__version=X.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function je(A,y,O,Z,X,W){const ke=s.convert(O.format,O.colorSpace),_e=s.convert(O.type),$e=x(O.internalFormat,ke,_e,O.colorSpace),Ye=i.get(y),be=i.get(O);if(be.__renderTarget=y,!Ye.__hasExternalTextures){const Pe=Math.max(1,y.width>>W),Ze=Math.max(1,y.height>>W);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,W,$e,Pe,Ze,y.depth,0,ke,_e,null):t.texImage2D(X,W,$e,Pe,Ze,0,ke,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ae(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,X,be.__webglTexture,0,Ie(y)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,X,be.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(A,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,A),y.depthBuffer){const Z=y.depthTexture,X=Z&&Z.isDepthTexture?Z.type:null,W=v(y.stencilBuffer,X),ke=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=Ie(y);ae(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,W,y.width,y.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,W,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,W,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ke,n.RENDERBUFFER,A)}else{const Z=y.textures;for(let X=0;X<Z.length;X++){const W=Z[X],ke=s.convert(W.format,W.colorSpace),_e=s.convert(W.type),$e=x(W.internalFormat,ke,_e,W.colorSpace),Ye=Ie(y);O&&ae(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,$e,y.width,y.height):ae(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,$e,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,$e,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J(y.depthTexture,0);const X=Z.__webglTexture,W=Ie(y);if(y.depthTexture.format===Sa)ae(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(y.depthTexture.format===ba)ae(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function ee(A){const y=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const X=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",X)};Z.addEventListener("dispose",X),y.__depthDisposeCallback=X}y.__boundDepthTexture=Z}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const Z=A.texture.mipmaps;Z&&Z.length>0?fe(y.__webglFramebuffer[0],A):fe(y.__webglFramebuffer,A)}else if(O){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=n.createRenderbuffer(),ne(y.__webglDepthbuffer[Z],A,!1);else{const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,W)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ne(y.__webglDepthbuffer,A,!1);else{const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function te(A,y,O){const Z=i.get(A);y!==void 0&&je(Z.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ee(A)}function R(A){const y=A.texture,O=i.get(A),Z=i.get(y);A.addEventListener("dispose",D);const X=A.textures,W=A.isWebGLCubeRenderTarget===!0,ke=X.length>1;if(ke||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=y.version,o.memory.textures++),W){O.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[_e]=[];for(let $e=0;$e<y.mipmaps.length;$e++)O.__webglFramebuffer[_e][$e]=n.createFramebuffer()}else O.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let _e=0;_e<y.mipmaps.length;_e++)O.__webglFramebuffer[_e]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ke)for(let _e=0,$e=X.length;_e<$e;_e++){const Ye=i.get(X[_e]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&ae(A)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let _e=0;_e<X.length;_e++){const $e=X[_e];O.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[_e]);const Ye=s.convert($e.format,$e.colorSpace),be=s.convert($e.type),Pe=x($e.internalFormat,Ye,be,$e.colorSpace,A.isXRRenderTarget===!0),Ze=Ie(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,Pe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,O.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),it(n.TEXTURE_CUBE_MAP,y);for(let _e=0;_e<6;_e++)if(y.mipmaps&&y.mipmaps.length>0)for(let $e=0;$e<y.mipmaps.length;$e++)je(O.__webglFramebuffer[_e][$e],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e);else je(O.__webglFramebuffer[_e],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let _e=0,$e=X.length;_e<$e;_e++){const Ye=X[_e],be=i.get(Ye);let Pe=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Pe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Pe,be.__webglTexture),it(Pe,Ye),je(O.__webglFramebuffer,A,Ye,n.COLOR_ATTACHMENT0+_e,Pe,0),m(Ye)&&p(Pe)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_e=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,Z.__webglTexture),it(_e,y),y.mipmaps&&y.mipmaps.length>0)for(let $e=0;$e<y.mipmaps.length;$e++)je(O.__webglFramebuffer[$e],A,y,n.COLOR_ATTACHMENT0,_e,$e);else je(O.__webglFramebuffer,A,y,n.COLOR_ATTACHMENT0,_e,0);m(y)&&p(_e),t.unbindTexture()}A.depthBuffer&&ee(A)}function me(A){const y=A.textures;for(let O=0,Z=y.length;O<Z;O++){const X=y[O];if(m(X)){const W=w(A),ke=i.get(X).__webglTexture;t.bindTexture(W,ke),p(W),t.unbindTexture()}}}const ue=[],He=[];function pe(A){if(A.samples>0){if(ae(A)===!1){const y=A.textures,O=A.width,Z=A.height;let X=n.COLOR_BUFFER_BIT;const W=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ke=i.get(A),_e=y.length>1;if(_e)for(let Ye=0;Ye<y.length;Ye++)t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const $e=A.texture.mipmaps;$e&&$e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ye=0;Ye<y.length;Ye++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ke.__webglColorRenderbuffer[Ye]);const be=i.get(y[Ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,be,0)}n.blitFramebuffer(0,0,O,Z,0,0,O,Z,X,n.NEAREST),c===!0&&(ue.length=0,He.length=0,ue.push(n.COLOR_ATTACHMENT0+Ye),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ue.push(W),He.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Ye=0;Ye<y.length;Ye++){t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.RENDERBUFFER,ke.__webglColorRenderbuffer[Ye]);const be=i.get(y[Ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ie(A){return Math.min(r.maxSamples,A.samples)}function ae(A){const y=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ae(A){const y=o.render.frame;d.get(A)!==y&&(d.set(A,y),A.update())}function we(A,y){const O=A.colorSpace,Z=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==wo&&O!==$r&&(Bt.getTransfer(O)===Zt?(Z!==er||X!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=J,this.setTexture2DArray=Y,this.setTexture3D=de,this.setTextureCube=q,this.rebindTextures=te,this.setupRenderTarget=R,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=je,this.useMultisampledRTT=ae}function Cb(n,e){function t(i,r=$r){let s;const o=Bt.getTransfer(r);if(i===mr)return n.UNSIGNED_BYTE;if(i===qu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$u)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Lp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pp)return n.BYTE;if(i===Dp)return n.SHORT;if(i===xa)return n.UNSIGNED_SHORT;if(i===Xu)return n.INT;if(i===Ds)return n.UNSIGNED_INT;if(i===wr)return n.FLOAT;if(i===Wa)return n.HALF_FLOAT;if(i===Ip)return n.ALPHA;if(i===Np)return n.RGB;if(i===er)return n.RGBA;if(i===Sa)return n.DEPTH_COMPONENT;if(i===ba)return n.DEPTH_STENCIL;if(i===Up)return n.RED;if(i===Yu)return n.RED_INTEGER;if(i===kp)return n.RG;if(i===ju)return n.RG_INTEGER;if(i===Zu)return n.RGBA_INTEGER;if(i===Vc||i===Gc||i===Wc||i===Xc)if(o===Zt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===eu||i===tu||i===nu||i===iu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===eu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===iu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ru||i===su||i===ou)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ru||i===su)return o===Zt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ou)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===au||i===cu||i===lu||i===du||i===uu||i===hu||i===fu||i===pu||i===mu||i===gu||i===_u||i===vu||i===xu||i===yu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===au)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===du)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_u)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qc||i===Su||i===bu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qc)return o===Zt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Su)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fp||i===Mu||i===wu||i===Eu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===qc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Mu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ya?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class hm extends Si{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Db=`
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

}`;class Lb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new hm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Cr({vertexShader:Pb,fragmentShader:Db,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new Jr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ib extends Fs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,d=null,u=null,h=null,f=null,g=null;const _=new Lb,m={},p=t.getContextAttributes();let w=null,x=null;const v=[],C=[],P=new ze;let D=null;const N=new Pi;N.viewport=new Ft;const M=new Pi;M.viewport=new Ft;const S=[N,M],I=new ev;let F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let Te=v[Q];return Te===void 0&&(Te=new od,v[Q]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(Q){let Te=v[Q];return Te===void 0&&(Te=new od,v[Q]=Te),Te.getGripSpace()},this.getHand=function(Q){let Te=v[Q];return Te===void 0&&(Te=new od,v[Q]=Te),Te.getHandSpace()};function G(Q){const Te=C.indexOf(Q.inputSource);if(Te===-1)return;const se=v[Te];se!==void 0&&(se.update(Q.inputSource,Q.frame,l||o),se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function J(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<v.length;Q++){const Te=C[Q];Te!==null&&(C[Q]=null,v[Q].disconnect(Te))}F=null,V=null,_.reset();for(const Q in m)delete m[Q];e.setRenderTarget(w),f=null,h=null,u=null,r=null,x=null,xt.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",J),r.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(r,t)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,je=null,ne=null;p.depth&&(ne=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=p.stencil?ba:Sa,je=p.stencil?ya:Ds);const fe={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};h=u.createProjectionLayer(fe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Ls(h.textureWidth,h.textureHeight,{format:er,type:mr,depthTexture:new jp(h.textureWidth,h.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const se={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ls(f.framebufferWidth,f.framebufferHeight,{format:er,type:mr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),xt.setContext(r),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(Q){for(let Te=0;Te<Q.removed.length;Te++){const se=Q.removed[Te],je=C.indexOf(se);je>=0&&(C[je]=null,v[je].disconnect(se))}for(let Te=0;Te<Q.added.length;Te++){const se=Q.added[Te];let je=C.indexOf(se);if(je===-1){for(let fe=0;fe<v.length;fe++)if(fe>=C.length){C.push(se),je=fe;break}else if(C[fe]===null){C[fe]=se,je=fe;break}if(je===-1)break}const ne=v[je];ne&&ne.connect(se)}}const de=new b,q=new b;function oe(Q,Te,se){de.setFromMatrixPosition(Te.matrixWorld),q.setFromMatrixPosition(se.matrixWorld);const je=de.distanceTo(q),ne=Te.projectionMatrix.elements,fe=se.projectionMatrix.elements,ee=ne[14]/(ne[10]-1),te=ne[14]/(ne[10]+1),R=(ne[9]+1)/ne[5],me=(ne[9]-1)/ne[5],ue=(ne[8]-1)/ne[0],He=(fe[8]+1)/fe[0],pe=ee*ue,Ie=ee*He,ae=je/(-ue+He),Ae=ae*-ue;if(Te.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ae),Q.translateZ(ae),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ne[10]===-1)Q.projectionMatrix.copy(Te.projectionMatrix),Q.projectionMatrixInverse.copy(Te.projectionMatrixInverse);else{const we=ee+ae,Ce=te+ae,A=pe-Ae,y=Ie+(je-Ae),O=R*te/Ce*we,Z=me*te/Ce*we;Q.projectionMatrix.makePerspective(A,y,O,Z,we,Ce),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function xe(Q,Te){Te===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(Te.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let Te=Q.near,se=Q.far;_.texture!==null&&(_.depthNear>0&&(Te=_.depthNear),_.depthFar>0&&(se=_.depthFar)),I.near=M.near=N.near=Te,I.far=M.far=N.far=se,(F!==I.near||V!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,V=I.far),I.layers.mask=Q.layers.mask|6,N.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const je=Q.parent,ne=I.cameras;xe(I,je);for(let fe=0;fe<ne.length;fe++)xe(ne[fe],je);ne.length===2?oe(I,N,M):I.projectionMatrix.copy(N.projectionMatrix),We(Q,I,je)};function We(Q,Te,se){se===null?Q.matrix.copy(Te.matrixWorld):(Q.matrix.copy(se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(Te.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(Te.projectionMatrix),Q.projectionMatrixInverse.copy(Te.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ma*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Q){c=Q,h!==null&&(h.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(I)},this.getCameraTexture=function(Q){return m[Q]};let it=null;function gt(Q,Te){if(d=Te.getViewerPose(l||o),g=Te,d!==null){const se=d.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let je=!1;se.length!==I.cameras.length&&(I.cameras.length=0,je=!0);for(let te=0;te<se.length;te++){const R=se[te];let me=null;if(f!==null)me=f.getViewport(R);else{const He=u.getViewSubImage(h,R);me=He.viewport,te===0&&(e.setRenderTargetTextures(x,He.colorTexture,He.depthStencilTexture),e.setRenderTarget(x))}let ue=S[te];ue===void 0&&(ue=new Pi,ue.layers.enable(te),ue.viewport=new Ft,S[te]=ue),ue.matrix.fromArray(R.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(R.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(me.x,me.y,me.width,me.height),te===0&&(I.matrix.copy(ue.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),je===!0&&I.cameras.push(ue)}const ne=r.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const te=u.getDepthInformation(se[0]);te&&te.isValid&&te.texture&&_.init(te,r.renderState)}if(ne&&ne.includes("camera-access")&&(e.state.unbindTexture(),u))for(let te=0;te<se.length;te++){const R=se[te].camera;if(R){let me=m[R];me||(me=new hm,m[R]=me);const ue=u.getCameraImage(R);me.sourceTexture=ue}}}for(let se=0;se<v.length;se++){const je=C[se],ne=v[se];je!==null&&ne!==void 0&&ne.update(je,Te,l||o)}it&&it(Q,Te),Te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Te}),g=null}const xt=new am;xt.setAnimationLoop(gt),this.setAnimationLoop=function(Q){it=Q},this.dispose=function(){}}}const us=new ii,Nb=new qt;function Ub(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Wp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===yi&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===yi&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),x=w.envMap,v=w.envMapRotation;x&&(m.envMap.value=x,us.copy(v),us.x*=-1,us.y*=-1,us.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),m.envMapRotation.value.setFromMatrix4(Nb.makeRotationFromEuler(us)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yi&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function kb(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,x){const v=x.program;i.uniformBlockBinding(w,v)}function l(w,x){let v=r[w.id];v===void 0&&(g(w),v=d(w),r[w.id]=v,w.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(w,C);const P=e.render.frame;s[w.id]!==P&&(h(w),s[w.id]=P)}function d(w){const x=u();w.__bindingPointIndex=x;const v=n.createBuffer(),C=w.__size,P=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const x=r[w.id],v=w.uniforms,C=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let P=0,D=v.length;P<D;P++){const N=Array.isArray(v[P])?v[P]:[v[P]];for(let M=0,S=N.length;M<S;M++){const I=N[M];if(f(I,P,M,C)===!0){const F=I.__offset,V=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let J=0;J<V.length;J++){const Y=V[J],de=_(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,F+G,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,G),G+=de.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,x,v,C){const P=w.value,D=x+"_"+v;if(C[D]===void 0)return typeof P=="number"||typeof P=="boolean"?C[D]=P:C[D]=P.clone(),!0;{const N=C[D];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return C[D]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function g(w){const x=w.uniforms;let v=0;const C=16;for(let D=0,N=x.length;D<N;D++){const M=Array.isArray(x[D])?x[D]:[x[D]];for(let S=0,I=M.length;S<I;S++){const F=M[S],V=Array.isArray(F.value)?F.value:[F.value];for(let G=0,J=V.length;G<J;G++){const Y=V[G],de=_(Y),q=v%C,oe=q%de.boundary,xe=q+oe;v+=oe,xe!==0&&C-xe<de.storage&&(v+=C-xe),F.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=de.storage}}}const P=v%C;return P>0&&(v+=C-P),w.__size=v,w.__cache={},this}function _(w){const x={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(x.boundary=4,x.storage=4):w.isVector2?(x.boundary=8,x.storage=8):w.isVector3||w.isColor?(x.boundary=16,x.storage=12):w.isVector4?(x.boundary=16,x.storage=16):w.isMatrix3?(x.boundary=48,x.storage=48):w.isMatrix4?(x.boundary=64,x.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),x}function m(w){const x=w.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class Fb{constructor(e={}){const{canvas:t=O0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let C=!1;this._outputColorSpace=hi;let P=0,D=0,N=null,M=-1,S=null;const I=new Ft,F=new Ft;let V=null;const G=new Nt(0);let J=0,Y=t.width,de=t.height,q=1,oe=null,xe=null;const We=new Ft(0,0,Y,de),it=new Ft(0,0,Y,de);let gt=!1;const xt=new eh;let Q=!1,Te=!1;const se=new qt,je=new b,ne=new Ft,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function te(){return N===null?q:1}let R=i;function me(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wu}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",ge,!1),R===null){const z="webgl2";if(R=me(z,T),R===null)throw me(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ue,He,pe,Ie,ae,Ae,we,Ce,A,y,O,Z,X,W,ke,_e,$e,Ye,be,Pe,Ze,Ke,Re,mt;function U(){ue=new $y(R),ue.init(),Ke=new Cb(R,ue),He=new By(R,ue,e,Ke),pe=new Ab(R,ue),He.reversedDepthBuffer&&h&&pe.buffers.depth.setReversed(!0),Ie=new Zy(R),ae=new pb,Ae=new Rb(R,ue,pe,ae,He,Ke,Ie),we=new Vy(v),Ce=new qy(v),A=new nv(R),Re=new Oy(R,A),y=new Yy(R,A,Ie,Re),O=new Jy(R,y,A,Ie),be=new Ky(R,He,Ae),_e=new Hy(ae),Z=new fb(v,we,Ce,ue,He,Re,_e),X=new Ub(v,ae),W=new gb,ke=new bb(ue),Ye=new Fy(v,we,Ce,pe,O,f,c),$e=new Eb(v,O,He),mt=new kb(R,Ie,He,pe),Pe=new zy(R,ue,Ie),Ze=new jy(R,ue,Ie),Ie.programs=Z.programs,v.capabilities=He,v.extensions=ue,v.properties=ae,v.renderLists=W,v.shadowMap=$e,v.state=pe,v.info=Ie}U();const ye=new Ib(v,R);this.xr=ye,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=ue.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ue.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(Y,de,!1))},this.getSize=function(T){return T.set(Y,de)},this.setSize=function(T,z,j=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,de=z,t.width=Math.floor(T*q),t.height=Math.floor(z*q),j===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(Y*q,de*q).floor()},this.setDrawingBufferSize=function(T,z,j){Y=T,de=z,q=j,t.width=Math.floor(T*j),t.height=Math.floor(z*j),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(We)},this.setViewport=function(T,z,j,K){T.isVector4?We.set(T.x,T.y,T.z,T.w):We.set(T,z,j,K),pe.viewport(I.copy(We).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(it)},this.setScissor=function(T,z,j,K){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,z,j,K),pe.scissor(F.copy(it).multiplyScalar(q).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(T){pe.setScissorTest(gt=T)},this.setOpaqueSort=function(T){oe=T},this.setTransparentSort=function(T){xe=T},this.getClearColor=function(T){return T.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,j=!0){let K=0;if(T){let H=!1;if(N!==null){const Me=N.texture.format;H=Me===Zu||Me===ju||Me===Yu}if(H){const Me=N.texture.type,Ve=Me===mr||Me===Ds||Me===xa||Me===ya||Me===qu||Me===$u,Qe=Ye.getClearColor(),Ge=Ye.getClearAlpha(),lt=Qe.r,ft=Qe.g,st=Qe.b;Ve?(g[0]=lt,g[1]=ft,g[2]=st,g[3]=Ge,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=lt,_[1]=ft,_[2]=st,_[3]=Ge,R.clearBufferiv(R.COLOR,0,_))}else K|=R.COLOR_BUFFER_BIT}z&&(K|=R.DEPTH_BUFFER_BIT),j&&(K|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Ye.dispose(),W.dispose(),ke.dispose(),ae.dispose(),we.dispose(),Ce.dispose(),O.dispose(),Re.dispose(),mt.dispose(),Z.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Mt),ye.removeEventListener("sessionend",Bo),kn.stop()};function Se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Xe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=Ie.autoReset,z=$e.enabled,j=$e.autoUpdate,K=$e.needsUpdate,H=$e.type;U(),Ie.autoReset=T,$e.enabled=z,$e.autoUpdate=j,$e.needsUpdate=K,$e.type=H}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function re(T){const z=T.target;z.removeEventListener("dispose",re),qe(z)}function qe(T){ie(T),ae.remove(T)}function ie(T){const z=ae.get(T).programs;z!==void 0&&(z.forEach(function(j){Z.releaseProgram(j)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,j,K,H,Me){z===null&&(z=fe);const Ve=H.isMesh&&H.matrixWorld.determinant()<0,Qe=si(T,z,j,K,H);pe.setMaterial(K,Ve);let Ge=j.index,lt=1;if(K.wireframe===!0){if(Ge=y.getWireframeAttribute(j),Ge===void 0)return;lt=2}const ft=j.drawRange,st=j.attributes.position;let bt=ft.start*lt,Gt=(ft.start+ft.count)*lt;Me!==null&&(bt=Math.max(bt,Me.start*lt),Gt=Math.min(Gt,(Me.start+Me.count)*lt)),Ge!==null?(bt=Math.max(bt,0),Gt=Math.min(Gt,Ge.count)):st!=null&&(bt=Math.max(bt,0),Gt=Math.min(Gt,st.count));const an=Gt-bt;if(an<0||an===1/0)return;Re.setup(H,K,Qe,j,Ge);let $t,Yt=Pe;if(Ge!==null&&($t=A.get(Ge),Yt=Ze,Yt.setIndex($t)),H.isMesh)K.wireframe===!0?(pe.setLineWidth(K.wireframeLinewidth*te()),Yt.setMode(R.LINES)):Yt.setMode(R.TRIANGLES);else if(H.isLine){let pt=K.linewidth;pt===void 0&&(pt=1),pe.setLineWidth(pt*te()),H.isLineSegments?Yt.setMode(R.LINES):H.isLineLoop?Yt.setMode(R.LINE_LOOP):Yt.setMode(R.LINE_STRIP)}else H.isPoints?Yt.setMode(R.POINTS):H.isSprite&&Yt.setMode(R.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)mo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Yt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))Yt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const pt=H._multiDrawStarts,Wt=H._multiDrawCounts,Lt=H._multiDrawCount,Fn=Ge?A.get(Ge).bytesPerElement:1,oi=ae.get(K).currentProgram.getUniforms();for(let On=0;On<Lt;On++)oi.setValue(R,"_gl_DrawID",On),Yt.render(pt[On]/Fn,Wt[On])}else if(H.isInstancedMesh)Yt.renderInstances(bt,an,H.count);else if(j.isInstancedBufferGeometry){const pt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Wt=Math.min(j.instanceCount,pt);Yt.renderInstances(bt,an,Wt)}else Yt.render(bt,an)};function Ne(T,z,j){T.transparent===!0&&T.side===fn&&T.forceSinglePass===!1?(T.side=yi,T.needsUpdate=!0,Vs(T,z,j),T.side=Rr,T.needsUpdate=!0,Vs(T,z,j),T.side=fn):Vs(T,z,j)}this.compile=function(T,z,j=null){j===null&&(j=T),p=ke.get(j),p.init(z),x.push(p),j.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),T!==j&&T.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const K=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Me=H.material;if(Me)if(Array.isArray(Me))for(let Ve=0;Ve<Me.length;Ve++){const Qe=Me[Ve];Ne(Qe,j,H),K.add(Qe)}else Ne(Me,j,H),K.add(Me)}),p=x.pop(),K},this.compileAsync=function(T,z,j=null){const K=this.compile(T,z,j);return new Promise(H=>{function Me(){if(K.forEach(function(Ve){ae.get(Ve).currentProgram.isReady()&&K.delete(Ve)}),K.size===0){H(T);return}setTimeout(Me,10)}ue.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Fe=null;function ht(T){Fe&&Fe(T)}function Mt(){kn.stop()}function Bo(){kn.start()}const kn=new am;kn.setAnimationLoop(ht),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(T){Fe=T,ye.setAnimationLoop(T),T===null?kn.stop():kn.start()},ye.addEventListener("sessionstart",Mt),ye.addEventListener("sessionend",Bo),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(z),z=ye.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,z,N),p=ke.get(T,x.length),p.init(z),x.push(p),se.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),xt.setFromProjectionMatrix(se,pr,z.reversedDepth),Te=this.localClippingEnabled,Q=_e.init(this.clippingPlanes,Te),m=W.get(T,w.length),m.init(),w.push(m),ye.enabled===!0&&ye.isPresenting===!0){const Me=v.xr.getDepthSensingMesh();Me!==null&&Ir(Me,z,-1/0,v.sortObjects)}Ir(T,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(oe,xe),ee=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ee&&Ye.addToRenderList(m,T),this.info.render.frame++,Q===!0&&_e.beginShadows();const j=p.state.shadowsArray;$e.render(j,T,z),Q===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,H=m.transmissive;if(p.setupLights(),z.isArrayCamera){const Me=z.cameras;if(H.length>0)for(let Ve=0,Qe=Me.length;Ve<Qe;Ve++){const Ge=Me[Ve];Vo(K,H,T,Ge)}ee&&Ye.render(T);for(let Ve=0,Qe=Me.length;Ve<Qe;Ve++){const Ge=Me[Ve];Ho(m,T,Ge,Ge.viewport)}}else H.length>0&&Vo(K,H,T,z),ee&&Ye.render(T),Ho(m,T,z);N!==null&&D===0&&(Ae.updateMultisampleRenderTarget(N),Ae.updateRenderTargetMipmap(N)),T.isScene===!0&&T.onAfterRender(v,T,z),Re.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],Q===!0&&_e.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Ir(T,z,j,K){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||xt.intersectsSprite(T)){K&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);const Ve=O.update(T),Qe=T.material;Qe.visible&&m.push(T,Ve,Qe,j,ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||xt.intersectsObject(T))){const Ve=O.update(T),Qe=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ne.copy(T.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ne.copy(Ve.boundingSphere.center)),ne.applyMatrix4(T.matrixWorld).applyMatrix4(se)),Array.isArray(Qe)){const Ge=Ve.groups;for(let lt=0,ft=Ge.length;lt<ft;lt++){const st=Ge[lt],bt=Qe[st.materialIndex];bt&&bt.visible&&m.push(T,Ve,bt,j,ne.z,st)}}else Qe.visible&&m.push(T,Ve,Qe,j,ne.z,null)}}const Me=T.children;for(let Ve=0,Qe=Me.length;Ve<Qe;Ve++)Ir(Me[Ve],z,j,K)}function Ho(T,z,j,K){const H=T.opaque,Me=T.transmissive,Ve=T.transparent;p.setupLightsView(j),Q===!0&&_e.setGlobalState(v.clippingPlanes,j),K&&pe.viewport(I.copy(K)),H.length>0&&Nr(H,z,j),Me.length>0&&Nr(Me,z,j),Ve.length>0&&Nr(Ve,z,j),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Vo(T,z,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Ls(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?Wa:mr,minFilter:bs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace}));const Me=p.state.transmissionRenderTarget[K.id],Ve=K.viewport||I;Me.setSize(Ve.z*v.transmissionResolutionScale,Ve.w*v.transmissionResolutionScale);const Qe=v.getRenderTarget(),Ge=v.getActiveCubeFace(),lt=v.getActiveMipmapLevel();v.setRenderTarget(Me),v.getClearColor(G),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),ee&&Ye.render(j);const ft=v.toneMapping;v.toneMapping=Zr;const st=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),Q===!0&&_e.setGlobalState(v.clippingPlanes,K),Nr(T,j,K),Ae.updateMultisampleRenderTarget(Me),Ae.updateRenderTargetMipmap(Me),ue.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Gt=0,an=z.length;Gt<an;Gt++){const $t=z[Gt],Yt=$t.object,pt=$t.geometry,Wt=$t.material,Lt=$t.group;if(Wt.side===fn&&Yt.layers.test(K.layers)){const Fn=Wt.side;Wt.side=yi,Wt.needsUpdate=!0,ns(Yt,j,K,pt,Wt,Lt),Wt.side=Fn,Wt.needsUpdate=!0,bt=!0}}bt===!0&&(Ae.updateMultisampleRenderTarget(Me),Ae.updateRenderTargetMipmap(Me))}v.setRenderTarget(Qe,Ge,lt),v.setClearColor(G,J),st!==void 0&&(K.viewport=st),v.toneMapping=ft}function Nr(T,z,j){const K=z.isScene===!0?z.overrideMaterial:null;for(let H=0,Me=T.length;H<Me;H++){const Ve=T[H],Qe=Ve.object,Ge=Ve.geometry,lt=Ve.group;let ft=Ve.material;ft.allowOverride===!0&&K!==null&&(ft=K),Qe.layers.test(j.layers)&&ns(Qe,z,j,Ge,ft,lt)}}function ns(T,z,j,K,H,Me){T.onBeforeRender(v,z,j,K,H,Me),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(v,z,j,K,T,Me),H.transparent===!0&&H.side===fn&&H.forceSinglePass===!1?(H.side=yi,H.needsUpdate=!0,v.renderBufferDirect(j,z,K,H,T,Me),H.side=Rr,H.needsUpdate=!0,v.renderBufferDirect(j,z,K,H,T,Me),H.side=fn):v.renderBufferDirect(j,z,K,H,T,Me),T.onAfterRender(v,z,j,K,H,Me)}function Vs(T,z,j){z.isScene!==!0&&(z=fe);const K=ae.get(T),H=p.state.lights,Me=p.state.shadowsArray,Ve=H.state.version,Qe=Z.getParameters(T,H.state,Me,z,j),Ge=Z.getProgramCacheKey(Qe);let lt=K.programs;K.environment=T.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(T.isMeshStandardMaterial?Ce:we).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,lt===void 0&&(T.addEventListener("dispose",re),lt=new Map,K.programs=lt);let ft=lt.get(Ge);if(ft!==void 0){if(K.currentProgram===ft&&K.lightsStateVersion===Ve)return $i(T,Qe),ft}else Qe.uniforms=Z.getUniforms(T),T.onBeforeCompile(Qe,v),ft=Z.acquireProgram(Qe,Ge),lt.set(Ge,ft),K.uniforms=Qe.uniforms;const st=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(st.clippingPlanes=_e.uniform),$i(T,Qe),K.needsLights=nc(T),K.lightsStateVersion=Ve,K.needsLights&&(st.ambientLightColor.value=H.state.ambient,st.lightProbe.value=H.state.probe,st.directionalLights.value=H.state.directional,st.directionalLightShadows.value=H.state.directionalShadow,st.spotLights.value=H.state.spot,st.spotLightShadows.value=H.state.spotShadow,st.rectAreaLights.value=H.state.rectArea,st.ltc_1.value=H.state.rectAreaLTC1,st.ltc_2.value=H.state.rectAreaLTC2,st.pointLights.value=H.state.point,st.pointLightShadows.value=H.state.pointShadow,st.hemisphereLights.value=H.state.hemi,st.directionalShadowMap.value=H.state.directionalShadowMap,st.directionalShadowMatrix.value=H.state.directionalShadowMatrix,st.spotShadowMap.value=H.state.spotShadowMap,st.spotLightMatrix.value=H.state.spotLightMatrix,st.spotLightMap.value=H.state.spotLightMap,st.pointShadowMap.value=H.state.pointShadowMap,st.pointShadowMatrix.value=H.state.pointShadowMatrix),K.currentProgram=ft,K.uniformsList=null,ft}function is(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=$c.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function $i(T,z){const j=ae.get(T);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function si(T,z,j,K,H){z.isScene!==!0&&(z=fe),Ae.resetTextureUnits();const Me=z.fog,Ve=K.isMeshStandardMaterial?z.environment:null,Qe=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:wo,Ge=(K.isMeshStandardMaterial?Ce:we).get(K.envMap||Ve),lt=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ft=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),st=!!j.morphAttributes.position,bt=!!j.morphAttributes.normal,Gt=!!j.morphAttributes.color;let an=Zr;K.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(an=v.toneMapping);const $t=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Yt=$t!==void 0?$t.length:0,pt=ae.get(K),Wt=p.state.lights;if(Q===!0&&(Te===!0||T!==S)){const zn=T===S&&K.id===M;_e.setState(K,T,zn)}let Lt=!1;K.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==Wt.state.version||pt.outputColorSpace!==Qe||H.isBatchedMesh&&pt.batching===!1||!H.isBatchedMesh&&pt.batching===!0||H.isBatchedMesh&&pt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&pt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&pt.instancing===!1||!H.isInstancedMesh&&pt.instancing===!0||H.isSkinnedMesh&&pt.skinning===!1||!H.isSkinnedMesh&&pt.skinning===!0||H.isInstancedMesh&&pt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&pt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&pt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&pt.instancingMorph===!1&&H.morphTexture!==null||pt.envMap!==Ge||K.fog===!0&&pt.fog!==Me||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==_e.numPlanes||pt.numIntersection!==_e.numIntersection)||pt.vertexAlphas!==lt||pt.vertexTangents!==ft||pt.morphTargets!==st||pt.morphNormals!==bt||pt.morphColors!==Gt||pt.toneMapping!==an||pt.morphTargetsCount!==Yt)&&(Lt=!0):(Lt=!0,pt.__version=K.version);let Fn=pt.currentProgram;Lt===!0&&(Fn=Vs(K,z,H));let oi=!1,On=!1,rs=!1;const cn=Fn.getUniforms(),ai=pt.uniforms;if(pe.useProgram(Fn.program)&&(oi=!0,On=!0,rs=!0),K.id!==M&&(M=K.id,On=!0),oi||S!==T){pe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),cn.setValue(R,"projectionMatrix",T.projectionMatrix),cn.setValue(R,"viewMatrix",T.matrixWorldInverse);const E=cn.map.cameraPosition;E!==void 0&&E.setValue(R,je.setFromMatrixPosition(T.matrixWorld)),He.logarithmicDepthBuffer&&cn.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&cn.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,On=!0,rs=!0)}if(H.isSkinnedMesh){cn.setOptional(R,H,"bindMatrix"),cn.setOptional(R,H,"bindMatrixInverse");const zn=H.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),cn.setValue(R,"boneTexture",zn.boneTexture,Ae))}H.isBatchedMesh&&(cn.setOptional(R,H,"batchingTexture"),cn.setValue(R,"batchingTexture",H._matricesTexture,Ae),cn.setOptional(R,H,"batchingIdTexture"),cn.setValue(R,"batchingIdTexture",H._indirectTexture,Ae),cn.setOptional(R,H,"batchingColorTexture"),H._colorsTexture!==null&&cn.setValue(R,"batchingColorTexture",H._colorsTexture,Ae));const Zn=j.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&be.update(H,j,Fn),(On||pt.receiveShadow!==H.receiveShadow)&&(pt.receiveShadow=H.receiveShadow,cn.setValue(R,"receiveShadow",H.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ai.envMap.value=Ge,ai.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(ai.envMapIntensity.value=z.environmentIntensity),On&&(cn.setValue(R,"toneMappingExposure",v.toneMappingExposure),pt.needsLights&&Ti(ai,rs),Me&&K.fog===!0&&X.refreshFogUniforms(ai,Me),X.refreshMaterialUniforms(ai,K,q,de,p.state.transmissionRenderTarget[T.id]),$c.upload(R,is(pt),ai,Ae)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&($c.upload(R,is(pt),ai,Ae),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&cn.setValue(R,"center",H.center),cn.setValue(R,"modelViewMatrix",H.modelViewMatrix),cn.setValue(R,"normalMatrix",H.normalMatrix),cn.setValue(R,"modelMatrix",H.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const zn=K.uniformsGroups;for(let E=0,L=zn.length;E<L;E++){const k=zn[E];mt.update(k,Fn),mt.bind(k,Fn)}}return Fn}function Ti(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function nc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,z,j){const K=ae.get(T);K.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ae.get(T.texture).__webglTexture=z,ae.get(T.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const j=ae.get(T);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0};const Ur=R.createFramebuffer();this.setRenderTarget=function(T,z=0,j=0){N=T,P=z,D=j;let K=!0,H=null,Me=!1,Ve=!1;if(T){const Ge=ae.get(T);if(Ge.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(R.FRAMEBUFFER,null),K=!1;else if(Ge.__webglFramebuffer===void 0)Ae.setupRenderTarget(T);else if(Ge.__hasExternalTextures)Ae.rebindTextures(T,ae.get(T.texture).__webglTexture,ae.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const st=T.depthTexture;if(Ge.__boundDepthTexture!==st){if(st!==null&&ae.has(st)&&(T.width!==st.image.width||T.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ae.setupDepthRenderbuffer(T)}}const lt=T.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ve=!0);const ft=ae.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ft[z])?H=ft[z][j]:H=ft[z],Me=!0):T.samples>0&&Ae.useMultisampledRTT(T)===!1?H=ae.get(T).__webglMultisampledFramebuffer:Array.isArray(ft)?H=ft[j]:H=ft,I.copy(T.viewport),F.copy(T.scissor),V=T.scissorTest}else I.copy(We).multiplyScalar(q).floor(),F.copy(it).multiplyScalar(q).floor(),V=gt;if(j!==0&&(H=Ur),pe.bindFramebuffer(R.FRAMEBUFFER,H)&&K&&pe.drawBuffers(T,H),pe.viewport(I),pe.scissor(F),pe.setScissorTest(V),Me){const Ge=ae.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ge.__webglTexture,j)}else if(Ve){const Ge=z;for(let lt=0;lt<T.textures.length;lt++){const ft=ae.get(T.textures[lt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+lt,ft.__webglTexture,j,Ge)}}else if(T!==null&&j!==0){const Ge=ae.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ge.__webglTexture,j)}M=-1},this.readRenderTargetPixels=function(T,z,j,K,H,Me,Ve,Qe=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ge=Ge[Ve]),Ge){pe.bindFramebuffer(R.FRAMEBUFFER,Ge);try{const lt=T.textures[Qe],ft=lt.format,st=lt.type;if(!He.textureFormatReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-K&&j>=0&&j<=T.height-H&&(T.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Qe),R.readPixels(z,j,K,H,Ke.convert(ft),Ke.convert(st),Me))}finally{const lt=N!==null?ae.get(N).__webglFramebuffer:null;pe.bindFramebuffer(R.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(T,z,j,K,H,Me,Ve,Qe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ge=Ge[Ve]),Ge)if(z>=0&&z<=T.width-K&&j>=0&&j<=T.height-H){pe.bindFramebuffer(R.FRAMEBUFFER,Ge);const lt=T.textures[Qe],ft=lt.format,st=lt.type;if(!He.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,bt),R.bufferData(R.PIXEL_PACK_BUFFER,Me.byteLength,R.STREAM_READ),T.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Qe),R.readPixels(z,j,K,H,Ke.convert(ft),Ke.convert(st),0);const Gt=N!==null?ae.get(N).__webglFramebuffer:null;pe.bindFramebuffer(R.FRAMEBUFFER,Gt);const an=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await z0(R,an,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,bt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Me),R.deleteBuffer(bt),R.deleteSync(an),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,j=0){const K=Math.pow(2,-j),H=Math.floor(T.image.width*K),Me=Math.floor(T.image.height*K),Ve=z!==null?z.x:0,Qe=z!==null?z.y:0;Ae.setTexture2D(T,0),R.copyTexSubImage2D(R.TEXTURE_2D,j,0,0,Ve,Qe,H,Me),pe.unbindTexture()};const Xn=R.createFramebuffer(),Ol=R.createFramebuffer();this.copyTextureToTexture=function(T,z,j=null,K=null,H=0,Me=null){Me===null&&(H!==0?(mo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=H,H=0):Me=0);let Ve,Qe,Ge,lt,ft,st,bt,Gt,an;const $t=T.isCompressedTexture?T.mipmaps[Me]:T.image;if(j!==null)Ve=j.max.x-j.min.x,Qe=j.max.y-j.min.y,Ge=j.isBox3?j.max.z-j.min.z:1,lt=j.min.x,ft=j.min.y,st=j.isBox3?j.min.z:0;else{const Zn=Math.pow(2,-H);Ve=Math.floor($t.width*Zn),Qe=Math.floor($t.height*Zn),T.isDataArrayTexture?Ge=$t.depth:T.isData3DTexture?Ge=Math.floor($t.depth*Zn):Ge=1,lt=0,ft=0,st=0}K!==null?(bt=K.x,Gt=K.y,an=K.z):(bt=0,Gt=0,an=0);const Yt=Ke.convert(z.format),pt=Ke.convert(z.type);let Wt;z.isData3DTexture?(Ae.setTexture3D(z,0),Wt=R.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Ae.setTexture2DArray(z,0),Wt=R.TEXTURE_2D_ARRAY):(Ae.setTexture2D(z,0),Wt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,z.unpackAlignment);const Lt=R.getParameter(R.UNPACK_ROW_LENGTH),Fn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),oi=R.getParameter(R.UNPACK_SKIP_PIXELS),On=R.getParameter(R.UNPACK_SKIP_ROWS),rs=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,$t.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,$t.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,lt),R.pixelStorei(R.UNPACK_SKIP_ROWS,ft),R.pixelStorei(R.UNPACK_SKIP_IMAGES,st);const cn=T.isDataArrayTexture||T.isData3DTexture,ai=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const Zn=ae.get(T),zn=ae.get(z),E=ae.get(Zn.__renderTarget),L=ae.get(zn.__renderTarget);pe.bindFramebuffer(R.READ_FRAMEBUFFER,E.__webglFramebuffer),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,L.__webglFramebuffer);for(let k=0;k<Ge;k++)cn&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ae.get(T).__webglTexture,H,st+k),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ae.get(z).__webglTexture,Me,an+k)),R.blitFramebuffer(lt,ft,Ve,Qe,bt,Gt,Ve,Qe,R.DEPTH_BUFFER_BIT,R.NEAREST);pe.bindFramebuffer(R.READ_FRAMEBUFFER,null),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||ae.has(T)){const Zn=ae.get(T),zn=ae.get(z);pe.bindFramebuffer(R.READ_FRAMEBUFFER,Xn),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ol);for(let E=0;E<Ge;E++)cn?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Zn.__webglTexture,H,st+E):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Zn.__webglTexture,H),ai?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,zn.__webglTexture,Me,an+E):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,zn.__webglTexture,Me),H!==0?R.blitFramebuffer(lt,ft,Ve,Qe,bt,Gt,Ve,Qe,R.COLOR_BUFFER_BIT,R.NEAREST):ai?R.copyTexSubImage3D(Wt,Me,bt,Gt,an+E,lt,ft,Ve,Qe):R.copyTexSubImage2D(Wt,Me,bt,Gt,lt,ft,Ve,Qe);pe.bindFramebuffer(R.READ_FRAMEBUFFER,null),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ai?T.isDataTexture||T.isData3DTexture?R.texSubImage3D(Wt,Me,bt,Gt,an,Ve,Qe,Ge,Yt,pt,$t.data):z.isCompressedArrayTexture?R.compressedTexSubImage3D(Wt,Me,bt,Gt,an,Ve,Qe,Ge,Yt,$t.data):R.texSubImage3D(Wt,Me,bt,Gt,an,Ve,Qe,Ge,Yt,pt,$t):T.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Me,bt,Gt,Ve,Qe,Yt,pt,$t.data):T.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Me,bt,Gt,$t.width,$t.height,Yt,$t.data):R.texSubImage2D(R.TEXTURE_2D,Me,bt,Gt,Ve,Qe,Yt,pt,$t);R.pixelStorei(R.UNPACK_ROW_LENGTH,Lt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Fn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,oi),R.pixelStorei(R.UNPACK_SKIP_ROWS,On),R.pixelStorei(R.UNPACK_SKIP_IMAGES,rs),Me===0&&z.generateMipmaps&&R.generateMipmap(Wt),pe.unbindTexture()},this.copyTextureToTexture3D=function(T,z,j=null,K=null,H=0){return mo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,j,K,H)},this.initRenderTarget=function(T){ae.get(T).__webglFramebuffer===void 0&&Ae.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ae.setTextureCube(T,0):T.isData3DTexture?Ae.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ae.setTexture2DArray(T,0):Ae.setTexture2D(T,0),pe.unbindTexture()},this.resetState=function(){P=0,D=0,N=null,pe.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}}const Bf={type:"change"},ah={type:"start"},fm={type:"end"},Dc=new Xa,Hf=new Xr,Ob=Math.cos(70*jt.DEG2RAD),Ln=new b,pi=2*Math.PI,Kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yd=1e-6;class zb extends om{constructor(e,t=null){super(e,t),this.state=Kt.NONE,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fo.ROTATE,MIDDLE:fo.DOLLY,RIGHT:fo.PAN},this.touches={ONE:co.ROTATE,TWO:co.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new b,this._lastQuaternion=new mn,this._lastTargetPosition=new b,this._quat=new mn().setFromUnitVectors(e.up,new b(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pf,this._sphericalDelta=new pf,this._scale=1,this._panOffset=new b,this._rotateStart=new ze,this._rotateEnd=new ze,this._rotateDelta=new ze,this._panStart=new ze,this._panEnd=new ze,this._panDelta=new ze,this._dollyStart=new ze,this._dollyEnd=new ze,this._dollyDelta=new ze,this._dollyDirection=new b,this._mouse=new ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Hb.bind(this),this._onPointerDown=Bb.bind(this),this._onPointerUp=Vb.bind(this),this._onContextMenu=jb.bind(this),this._onMouseWheel=Xb.bind(this),this._onKeyDown=qb.bind(this),this._onTouchStart=$b.bind(this),this._onTouchMove=Yb.bind(this),this._onMouseDown=Gb.bind(this),this._onMouseMove=Wb.bind(this),this._interceptControlDown=Zb.bind(this),this._interceptControlUp=Kb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bf),this.update(),this.state=Kt.NONE}update(e=null){const t=this.object.position;Ln.copy(t).sub(this.target),Ln.applyQuaternion(this._quat),this._spherical.setFromVector3(Ln),this.autoRotate&&this.state===Kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=pi:i>Math.PI&&(i-=pi),r<-Math.PI?r+=pi:r>Math.PI&&(r-=pi),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ln.setFromSpherical(this._spherical),Ln.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ln.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new b(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new b(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Dc.origin.copy(this.object.position),Dc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Dc.direction))<Ob?this.object.lookAt(this.target):(Hf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Dc.intersectPlane(Hf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>yd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yd||this._lastTargetPosition.distanceToSquared(this.target)>yd?(this.dispatchEvent(Bf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pi/60*this.autoRotateSpeed*e:pi/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ln.setFromMatrixColumn(t,0),Ln.multiplyScalar(-e),this._panOffset.add(Ln)}_panUp(e,t){this.screenSpacePanning===!0?Ln.setFromMatrixColumn(t,1):(Ln.setFromMatrixColumn(t,0),Ln.crossVectors(this.object.up,Ln)),Ln.multiplyScalar(e),this._panOffset.add(Ln)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ln.copy(r).sub(this.target);let s=Ln.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pi*this._rotateDelta.x/t.clientHeight),this._rotateUp(pi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pi*this._rotateDelta.x/t.clientHeight),this._rotateUp(pi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Bb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Hb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Vb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fm),this.state=Kt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Gb(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Kt.DOLLY;break;case fo.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Kt.ROTATE}break;case fo.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Kt.PAN}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(ah)}function Wb(n){switch(this.state){case Kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Xb(n){this.enabled===!1||this.enableZoom===!1||this.state!==Kt.NONE||(n.preventDefault(),this.dispatchEvent(ah),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(fm))}function qb(n){this.enabled!==!1&&this._handleKeyDown(n)}function $b(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case co.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Kt.TOUCH_ROTATE;break;case co.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Kt.TOUCH_PAN;break;default:this.state=Kt.NONE}break;case 2:switch(this.touches.TWO){case co.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Kt.TOUCH_DOLLY_PAN;break;case co.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Kt.TOUCH_DOLLY_ROTATE;break;default:this.state=Kt.NONE}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(ah)}function Yb(n){switch(this._trackPointer(n),this.state){case Kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Kt.NONE}}function jb(n){this.enabled!==!1&&n.preventDefault()}function Zb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Kb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const hs=new sm,ti=new b,Vr=new b,un=new mn,Vf={X:new b(1,0,0),Y:new b(0,1,0),Z:new b(0,0,1)},Sd={type:"change"},Gf={type:"mouseDown",mode:null},Wf={type:"mouseUp",mode:null},Xf={type:"objectChange"};class Jb extends om{constructor(e,t=null){super(void 0,t);const i=new rM(this);this._root=i;const r=new sM;this._gizmo=r,i.add(r);const s=new oM;this._plane=s,i.add(s);const o=this;function a(x,v){let C=v;Object.defineProperty(o,x,{get:function(){return C!==void 0?C:v},set:function(P){C!==P&&(C=P,s[x]=P,r[x]=P,o.dispatchEvent({type:x+"-changed",value:P}),o.dispatchEvent(Sd))}}),o[x]=v,s[x]=v,r[x]=v}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const c=new b,l=new b,d=new mn,u=new mn,h=new b,f=new mn,g=new b,_=new b,m=new b,p=0,w=new b;a("worldPosition",c),a("worldPositionStart",l),a("worldQuaternion",d),a("worldQuaternionStart",u),a("cameraPosition",h),a("cameraQuaternion",f),a("pointStart",g),a("pointEnd",_),a("rotationAxis",m),a("rotationAngle",p),a("eye",w),this._offset=new b,this._startNorm=new b,this._endNorm=new b,this._cameraScale=new b,this._parentPosition=new b,this._parentQuaternion=new mn,this._parentQuaternionInv=new mn,this._parentScale=new b,this._worldScaleStart=new b,this._worldQuaternionInv=new mn,this._worldScale=new b,this._positionStart=new b,this._quaternionStart=new mn,this._scaleStart=new b,this._getPointer=Qb.bind(this),this._onPointerDown=tM.bind(this),this._onPointerHover=eM.bind(this),this._onPointerMove=nM.bind(this),this._onPointerUp=iM.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&hs.setFromCamera(e,this.camera);const t=bd(this._gizmo.picker[this.mode],hs);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&hs.setFromCamera(e,this.camera);const t=bd(this._plane,hs,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Gf.mode=this.mode,this.dispatchEvent(Gf)}}pointerMove(e){const t=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&hs.setFromCamera(e,this.camera);const o=bd(this._plane,hs,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(un.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(ti.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(ti.setFromMatrixPosition(r.parent.matrixWorld)))),r.position.x=Math.max(this.minX,Math.min(this.maxX,r.position.x)),r.position.y=Math.max(this.minY,Math.min(this.maxY,r.position.y)),r.position.z=Math.max(this.minZ,Math.min(this.maxZ,r.position.z));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Vr.set(a,a,a)}else ti.copy(this.pointStart),Vr.copy(this.pointEnd),ti.applyQuaternion(this._worldQuaternionInv),Vr.applyQuaternion(this._worldQuaternionInv),Vr.divide(ti),t.search("X")===-1&&(Vr.x=1),t.search("Y")===-1&&(Vr.y=1),t.search("Z")===-1&&(Vr.z=1);r.scale.copy(this._scaleStart).multiply(Vr),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(ti.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(ti.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Vf[t]),ti.copy(Vf[t]),s==="local"&&ti.applyQuaternion(this.worldQuaternion),ti.cross(this.eye),ti.length()===0?c=!0:this.rotationAngle=this._offset.dot(ti.normalize())*a),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(un.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(un.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Sd),this.dispatchEvent(Xf)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Wf.mode=this.mode,this.dispatchEvent(Wf)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Sd),this.dispatchEvent(Xf),this.pointStart.copy(this.pointEnd))}getRaycaster(){return hs}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,i,r){const s=this._gizmo.materialLib;s.xAxis.color.set(e),s.yAxis.color.set(t),s.zAxis.color.set(i),s.active.color.set(r),s.xAxisTransparent.color.set(e),s.yAxisTransparent.color.set(t),s.zAxisTransparent.color.set(i),s.activeTransparent.color.set(r),s.xAxis._color&&s.xAxis._color.set(e),s.yAxis._color&&s.yAxis._color.set(t),s.zAxis._color&&s.zAxis._color.set(i),s.active._color&&s.active._color.set(r),s.xAxisTransparent._color&&s.xAxisTransparent._color.set(e),s.yAxisTransparent._color&&s.yAxisTransparent._color.set(t),s.zAxisTransparent._color&&s.zAxisTransparent._color.set(i),s.activeTransparent._color&&s.activeTransparent._color.set(r)}}function Qb(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{const e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function eM(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function tM(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function nM(n){this.enabled&&this.pointerMove(this._getPointer(n))}function iM(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function bd(n,e,t){const i=e.intersectObject(n,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||t)return i[r];return!1}const Lc=new ii,Jt=new b(0,1,0),qf=new b(0,0,0),$f=new qt,Ic=new mn,Yc=new mn,dr=new b,Yf=new qt,oa=new b(1,0,0),ms=new b(0,1,0),aa=new b(0,0,1),Nc=new b,jo=new b,Zo=new b;class rM extends vn{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class sM extends vn{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new yn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new bi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const l=e.clone();l.color.setHex(65280),l.opacity=.5;const d=e.clone();d.color.setHex(255),d.opacity=.5;const u=e.clone();u.opacity=.25;const h=e.clone();h.color.setHex(16776960),h.opacity=.25;const f=e.clone();f.color.setHex(16776960);const g=e.clone();g.color.setHex(7895160),this.materialLib={xAxis:s,yAxis:o,zAxis:a,active:f,xAxisTransparent:c,yAxisTransparent:l,zAxisTransparent:d,activeTransparent:h};const _=new ei(0,.04,.1,12);_.translate(0,.05,0);const m=new En(.08,.08,.08);m.translate(0,.04,0);const p=new kt;p.setAttribute("position",new Dt([0,0,0,1,0,0],3));const w=new ei(.0075,.0075,.5,3);w.translate(0,.25,0);function x(J,Y){const de=new vs(J,.0075,3,64,Y*Math.PI*2);return de.rotateY(Math.PI/2),de.rotateX(Math.PI/2),de}function v(){const J=new kt;return J.setAttribute("position",new Dt([0,0,0,1,1,1],3)),J}const C={X:[[new Ee(_,s),[.5,0,0],[0,0,-Math.PI/2]],[new Ee(_,s),[-.5,0,0],[0,0,Math.PI/2]],[new Ee(w,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Ee(_,o),[0,.5,0]],[new Ee(_,o),[0,-.5,0],[Math.PI,0,0]],[new Ee(w,o)]],Z:[[new Ee(_,a),[0,0,.5],[Math.PI/2,0,0]],[new Ee(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new Ee(w,a),null,[Math.PI/2,0,0]]],XYZ:[[new Ee(new Ms(.1,0),u),[0,0,0]]],XY:[[new Ee(new En(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new Ee(new En(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new En(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},P={X:[[new Ee(new ei(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new Ee(new ei(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ee(new ei(.2,0,.6,4),i),[0,.3,0]],[new Ee(new ei(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ee(new ei(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new Ee(new ei(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Ee(new Ms(.2,0),i)]],XY:[[new Ee(new En(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new Ee(new En(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new En(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},D={START:[[new Ee(new Ms(.01,2),r),null,null,null,"helper"]],END:[[new Ee(new Ms(.01,2),r),null,null,null,"helper"]],DELTA:[[new nn(v(),r),null,null,null,"helper"]],X:[[new nn(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new nn(p,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new nn(p,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},N={XYZE:[[new Ee(x(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new Ee(x(.5,.5),s)]],Y:[[new Ee(x(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new Ee(x(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new Ee(x(.75,1),h),null,[0,Math.PI/2,0]]]},M={AXIS:[[new nn(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]]},S={XYZE:[[new Ee(new Kr(.25,10,8),i)]],X:[[new Ee(new vs(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Ee(new vs(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Ee(new vs(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Ee(new vs(.75,.1,2,24),i)]]},I={X:[[new Ee(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new Ee(w,s),[0,0,0],[0,0,-Math.PI/2]],[new Ee(m,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Ee(m,o),[0,.5,0]],[new Ee(w,o)],[new Ee(m,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Ee(m,a),[0,0,.5],[Math.PI/2,0,0]],[new Ee(w,a),[0,0,0],[Math.PI/2,0,0]],[new Ee(m,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Ee(new En(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new Ee(new En(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new En(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ee(new En(.1,.1,.1),u)]]},F={X:[[new Ee(new ei(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new Ee(new ei(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ee(new ei(.2,0,.6,4),i),[0,.3,0]],[new Ee(new ei(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ee(new ei(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new Ee(new ei(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Ee(new En(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new Ee(new En(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new En(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ee(new En(.2,.2,.2),i),[0,0,0]]]},V={X:[[new nn(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new nn(p,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new nn(p,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function G(J){const Y=new vn;for(const de in J)for(let q=J[de].length;q--;){const oe=J[de][q][0].clone(),xe=J[de][q][1],We=J[de][q][2],it=J[de][q][3],gt=J[de][q][4];oe.name=de,oe.tag=gt,xe&&oe.position.set(xe[0],xe[1],xe[2]),We&&oe.rotation.set(We[0],We[1],We[2]),it&&oe.scale.set(it[0],it[1],it[2]),oe.updateMatrix();const xt=oe.geometry.clone();xt.applyMatrix4(oe.matrix),oe.geometry=xt,oe.renderOrder=1/0,oe.position.set(0,0,0),oe.rotation.set(0,0,0),oe.scale.set(1,1,1),Y.add(oe)}return Y}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=G(C)),this.add(this.gizmo.rotate=G(N)),this.add(this.gizmo.scale=G(I)),this.add(this.picker.translate=G(P)),this.add(this.picker.rotate=G(S)),this.add(this.picker.scale=G(F)),this.add(this.helper.translate=G(D)),this.add(this.helper.rotate=G(M)),this.add(this.helper.scale=G(V)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Yc;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(un.setFromEuler(Lc.set(0,0,0)),o.quaternion.copy(i).multiply(un),Math.abs(Jt.copy(oa).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(un.setFromEuler(Lc.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(un),Math.abs(Jt.copy(ms).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(un.setFromEuler(Lc.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(un),Math.abs(Jt.copy(aa).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(un.setFromEuler(Lc.set(0,Math.PI/2,0)),Jt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix($f.lookAt(qf,Jt,ms)),o.quaternion.multiply(un),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),ti.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),ti.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(ti),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Jt.copy(oa).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Jt.copy(ms).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Jt.copy(aa).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Jt.copy(aa).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Jt.copy(oa).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Jt.copy(ms).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Ic.copy(i),Jt.copy(this.eye).applyQuaternion(un.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix($f.lookAt(this.eye,qf,ms)),o.name==="X"&&(un.setFromAxisAngle(oa,Math.atan2(-Jt.y,Jt.z)),un.multiplyQuaternions(Ic,un),o.quaternion.copy(un)),o.name==="Y"&&(un.setFromAxisAngle(ms,Math.atan2(Jt.x,Jt.z)),un.multiplyQuaternions(Ic,un),o.quaternion.copy(un)),o.name==="Z"&&(un.setFromAxisAngle(aa,Math.atan2(Jt.y,Jt.x)),un.multiplyQuaternions(Ic,un),o.quaternion.copy(un))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(c){return o.name===c})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}}class oM extends Ee{constructor(){super(new Jr(1e5,1e5,2,2),new yn({visible:!1,wireframe:!0,side:fn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Nc.copy(oa).applyQuaternion(t==="local"?this.worldQuaternion:Yc),jo.copy(ms).applyQuaternion(t==="local"?this.worldQuaternion:Yc),Zo.copy(aa).applyQuaternion(t==="local"?this.worldQuaternion:Yc),Jt.copy(jo),this.mode){case"translate":case"scale":switch(this.axis){case"X":Jt.copy(this.eye).cross(Nc),dr.copy(Nc).cross(Jt);break;case"Y":Jt.copy(this.eye).cross(jo),dr.copy(jo).cross(Jt);break;case"Z":Jt.copy(this.eye).cross(Zo),dr.copy(Zo).cross(Jt);break;case"XY":dr.copy(Zo);break;case"YZ":dr.copy(Nc);break;case"XZ":Jt.copy(Zo),dr.copy(jo);break;case"XYZ":case"E":dr.set(0,0,0);break}break;default:dr.set(0,0,0)}dr.length()===0?this.quaternion.copy(this.cameraQuaternion):(Yf.lookAt(ti.set(0,0,0),dr,Jt),this.quaternion.setFromRotationMatrix(Yf)),super.updateMatrixWorld(e)}}function aM(n,e=!0){n.userData.terrainContours=!0,n.userData.contourSmoothing=e,n.onBeforeCompile=t=>{t.uniforms.contourWidth={value:n.userData.contourSmoothing?1.2:.8},t.vertexShader=`varying float vContourHeight;
varying vec3 vTerrainPoint;
`+t.vertexShader,t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vContourHeight = position.y;
 vTerrainPoint = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=`varying float vContourHeight;
varying vec3 vTerrainPoint;
uniform float contourWidth;
`+t.fragmentShader,t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`
      #include <color_fragment>
      // Fixed world-space hillshade reveals real slope direction even below a contour interval.
      vec3 terrainNormal = normalize(cross(dFdx(vTerrainPoint), dFdy(vTerrainPoint)));
      terrainNormal *= terrainNormal.y < 0.0 ? -1.0 : 1.0;
      vec3 reliefNormal = normalize(vec3(terrainNormal.x * 2.5, terrainNormal.y, terrainNormal.z * 2.5));
      float hillshade = clamp(dot(reliefNormal, normalize(vec3(-0.55, 0.7, -0.45))), 0.0, 1.0);
      diffuseColor.rgb *= 0.55 + 0.85 * hillshade;
      float contourPixel = max(fwidth(vContourHeight), 0.00001);
      float contourDistance = abs(mod(vContourHeight + 2.5, 5.0) - 2.5);
      contourDistance = vContourHeight < 2.5 ? abs(vContourHeight - 0.025) : contourDistance;
      float contourLine = 1.0 - smoothstep(contourPixel * 0.25,
        contourPixel * contourWidth, contourDistance);
      // A level plateau is not a whole white contour, and sea level has no inland line.
      contourLine *= step(0.0001, fwidth(vContourHeight));
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.82, 0.89, 0.81), contourLine * 0.75);
    `)},n.customProgramCacheKey=()=>`terrain-contours-hillshade-${n.userData.contourSmoothing?1:0}`}const Uc=32,cM=.025,ur=cM;function pm(n,e,t){const i=new Cn,r=new yn({vertexColors:!0,transparent:!0,opacity:.88,side:fn,depthWrite:!0});t&&aM(r,t.smoothing);const s=[],o=new Nt,a=new Nt(.55,.68,.74),c=new Float32Array(n.size*n.size*3),l=new Uint32Array(n.size*n.size);let d=0,u=!1;for(let _=0;_<n.size-1;_+=Uc)for(let m=0;m<n.size-1;m+=Uc){const p=Math.min(n.size-1,m+Uc),w=Math.min(n.size-1,_+Uc),x=(p-m)*(w-_)*12*3,v=new Ni(new Float32Array(x),3).setUsage(nl),C=new Ni(new Float32Array(x),3).setUsage(nl),P=new kt;P.setAttribute("position",v),P.setAttribute("color",C);const D=-n.extent+m*n.spacing,N=-n.extent+p*n.spacing,M=-n.extentZ+_*n.spacingZ,S=-n.extentZ+w*n.spacingZ;P.boundingBox=new Lo(new b(D,0,M),new b(N,180,S)),P.boundingSphere=P.boundingBox.getBoundingSphere(new Io);const I=new Ee(P,r);I.userData.terrainChunk={minX:m,maxX:p,minZ:_,maxZ:w},s.push({minX:m,maxX:p,minZ:_,maxZ:w,mesh:I,position:v,color:C}),i.add(I)}const h=(_,m)=>{const p=-n.extent+_*n.spacing,w=-n.extentZ+m*n.spacingZ;let x=0;if(e){const P=Math.round((p+e.extent)/e.spacing),D=Math.round((w+e.extentZ)/e.spacingZ);P>=0&&P<e.size&&D>=0&&D<e.size&&(x=e.data[D*e.size+P]/255)}const v=m*n.size+_,C=n.data[v];if(l[v]!==d){const P=Math.pow(jt.clamp(C/180,0,1),.65);o.setHSL(.57,.35*(1-P)+.06,.06+P*.68,hi),x&&o.lerp(a,x*.45),c[v*3]=o.r,c[v*3+1]=o.g,c[v*3+2]=o.b,l[v]=d}return{x:p,y:C,z:w,density:x,r:c[v*3],g:c[v*3+1],b:c[v*3+2]}},f=_=>{let m=0;const p=x=>{_.position.setXYZ(m,x.x,x.y,x.z),_.color.setXYZ(m++,x.r,x.g,x.b)},w=(x,v,C)=>{if(x.y>=ur&&v.y>=ur&&C.y>=ur){p(x),p(v),p(C);return}const P=[x,v,C],D=[];for(let N=0;N<3;N++){const M=P[N],S=P[(N+1)%3];if(M.y>=ur&&D.push(M),M.y>=ur!=S.y>=ur){const I=(ur-M.y)/(S.y-M.y),F=M.density+(S.density-M.density)*I,V=Math.pow(ur/180,.65);o.setHSL(.57,.35*(1-V)+.06,.06+V*.68,hi),F&&o.lerp(a,F*.45),D.push({x:M.x+(S.x-M.x)*I,y:ur,z:M.z+(S.z-M.z)*I,density:F,r:o.r,g:o.g,b:o.b})}}for(let N=1;N<D.length-1;N++)p(D[0]),p(D[N]),p(D[N+1])};for(let x=_.minZ;x<_.maxZ;x++)for(let v=_.minX;v<_.maxX;v++){const C=h(v,x),P=h(v+1,x),D=h(v+1,x+1),N=h(v,x+1);Math.max(C.y,P.y,D.y,N.y)<ur||(w(C,P,D),w(C,D,N))}_.mesh.geometry.setDrawRange(0,m),_.mesh.visible=m>0;for(const x of[_.position,_.color])m&&x.addUpdateRange(0,m*3),x.needsUpdate=!0},g=_=>{if(!u&&!(_&&![_.minX,_.maxX,_.minZ,_.maxZ].every(Number.isFinite))&&!(_&&(_.minX>_.maxX||_.minZ>_.maxZ))){d=d+1>>>0,d||(l.fill(0),d=1);for(const m of s)_&&(m.maxX<_.minX||m.minX>_.maxX||m.maxZ<_.minZ||m.minZ>_.maxZ)||f(m)}};return g(),{root:i,update:g,dispose(){if(!u){u=!0;for(const _ of s)_.mesh.geometry.dispose();r.dispose(),i.removeFromParent(),i.clear()}}}}function lM(n,e){const t=pm(n,void 0,e);for(const i of t.root.children){const r=i,s=r.geometry.drawRange.count;for(const o of["position","color"]){const a=r.geometry.getAttribute(o);r.geometry.setAttribute(o,new Ni(a.array.slice(0,s*3),3))}r.geometry.setDrawRange(0,s)}return t.root}const dM=5,uM=cg,Md=40,jf=65;function hM(n){if(n<=Md*tt)return 1;if(n>=jf*tt)return 0;const e=(n/tt-Md)/(jf-Md);return 1-e*e*(3-2*e)}const fM=`
  varying vec2 vMapPosition;
  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vMapPosition = worldPosition.xz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,pM=`
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
`;function mM(n,e){const t=new Jr(n*2,e*2);t.rotateX(-Math.PI/2);const i=new Cr({uniforms:{majorColor:{value:new Nt(16777215)},minorColor:{value:new Nt(16777215)},majorStep:{value:dM*tt},minorStep:{value:uM*tt},minorOpacity:{value:1}},vertexShader:fM,fragmentShader:pM,transparent:!0,depthWrite:!1,side:fn}),r=new Ee(t,i);return r.position.y=-2,r.renderOrder=-1,r}function mm(n,e){n.material.uniforms.minorOpacity.value=hM(e)}const wd=[{label:"N",degrees:0,x:0,z:-1},{label:"E",degrees:90,x:1,z:0},{label:"S",degrees:180,x:0,z:1},{label:"W",degrees:270,x:-1,z:0}];function gM(n){const e=new b(0,0,-1).transformDirection(n.matrixWorldInverse);return Math.atan2(-e.y,e.x)+Math.PI/2}function _M(n){const e=document.createElement("div");e.className="map-compass",e.setAttribute("aria-label","地图方向：正北0度，东90度，南180度，西270度");const t=document.createElement("div");t.className="map-compass-dial",e.append(t);const i=wd.map(c=>{const l=document.createElement("span");return l.className=`compass-${c.label.toLowerCase()}`,l.textContent=c.label,l.title=`${c.label} ${c.degrees}°`,t.append(l),l}),r=document.createElement("small");r.textContent="N = 0°",e.append(r),n.append(e);const s=wd.map(c=>{const l=document.createElement("span");return l.className="map-cardinal",l.textContent=c.label,l.setAttribute("aria-label",`${c.label} ${c.degrees}°`),n.append(l),l}),o=new b;let a=NaN;return{update(c,l,d,u,h){c.updateMatrixWorld();const f=gM(c);(Math.abs(f-a)>1e-4||!Number.isFinite(a))&&(t.style.transform=`rotate(${f}rad)`,i.forEach(g=>{g.style.transform=`translate(-50%,-50%) rotate(${-f}rad)`}),a=f),wd.forEach((g,_)=>{const m=s[_];o.set(g.x*u,.2,g.z*h).project(c);const p=Number.isFinite(o.x)&&Number.isFinite(o.y)&&o.z>=-1&&o.z<=1&&Math.abs(o.x)<1.1&&Math.abs(o.y)<1.1;m.hidden=!p,p&&(m.style.left=`${Math.max(14,Math.min(l-14,(o.x+1)*l/2))}px`,m.style.top=`${Math.max(14,Math.min(d-14,(1-o.y)*d/2))}px`)})},dispose(){e.remove(),s.forEach(c=>c.remove())}}}const Ed=21,vM=7,Zf=14;function gm(n){const e=[],t=(r,s,o,a)=>{e.push(new b(r,s,0),new b(o,a,0))};for(const r of[Ed,vM])t(-r,-r,r,-r),t(r,-r,r,r),t(r,r,-r,r),t(-r,r,-r,-r);for(const r of[-1,1])for(const s of[-1,1])t(r*Ed,s*Ed,r*Zf,s*Zf);const i=new p_(new kt().setFromPoints(e),new bi({color:n,transparent:!0,opacity:.9,depthTest:!1}));return i.name="escort-marker",i.visible=!1,i}const kc=25,Fc=80,Ko=1;function xM(n,e){if(Number.isNaN(n))return e??1;const t=Math.max(0,n/tt);return e===1?t>=Fc+6?3:t>=kc+2?2:1:e===2?t<=kc-2?1:t>=Fc+6?3:2:e===3?t<=kc-2?1:t<=Fc-6?2:3:t<kc?1:t<Fc?2:3}const pa=(n,e)=>n<e?-1:n>e?1:0,yM=new Intl.Collator("en",{sensitivity:"variant"}),SM=n=>n.icon==="air-filled"||n.icon==="air-outline",_m=n=>n.status==="active"&&n.tgt===!0,vm=n=>n.status==="active"&&n.escort===!0&&n.faction!=="enemy",Kf=n=>_m(n)||vm(n)?1:0;function Jf(n){const e={x:0,y:0,z:0};for(const h of n)e.x+=h.position.x/n.length,e.y+=h.position.y/n.length,e.z+=h.position.z/n.length;const t=h=>Math.hypot(h.position.x-e.x,h.position.y-e.y,h.position.z-e.z);let i=n[0],r=t(i),s,o=1/0;const a=new Map;let c=!1,l=!1;for(const h of n){const f=t(h),g=Kf(h)-Kf(i);(g>0||g===0&&(f<r||f===r&&pa(h.id,i.id)<0))&&(i=h,r=f),SM(h)&&(!s||f<o||f===o&&pa(h.id,s.id)<0)&&(s=h,o=f),a.set(h.label,(a.get(h.label)??0)+1),c||=_m(h),l||=vm(h)}const d=[...a.keys()].filter(h=>h!==i.label).sort((h,f)=>yM.compare(h,f)||pa(h,f)),u=[i.label,...d].map(h=>{const f=a.get(h);return f>1?`${h} ×${f}`:h}).join(`
`);return{representativeId:i.id,memberIds:n.map(h=>h.id),label:u,hasTgt:c,hasEscort:l,...s?{airRepresentativeId:s.id}:{}}}function bM(n,e){const t=[...n].sort((d,u)=>pa(d.id,u.id));if(e===1)return t.map(d=>Jf([d]));const i=e===2?54:68,r=i*i,s=Ko*Ko,o=new Map,a=[],c=(d,u,h,f)=>`${d}:${u}:${h}:${f}`,l=(d,u)=>`${d}:${u}`;for(const d of t){if(d.status!=="active"||!d.onScreen||!Number.isFinite(d.screenX)||!Number.isFinite(d.screenY)||!Number.isFinite(d.position.x)||!Number.isFinite(d.position.y)||!Number.isFinite(d.position.z)){a.push({seed:d,members:[d]});continue}const u=Math.floor(d.position.x/Ko),h=Math.floor(d.position.y/Ko),f=Math.floor(d.position.z/Ko),g=Math.floor(d.screenX/i),_=Math.floor(d.screenY/i);let m;for(let p=-1;p<=1;p++)for(let w=-1;w<=1;w++)for(let x=-1;x<=1;x++){const v=o.get(c(d.faction,u+p,h+w,f+x));if(v)for(let C=-1;C<=1;C++)for(let P=-1;P<=1;P++){const D=v.get(l(g+C,_+P));if(D)for(const N of D){const M=d.position.x-N.seed.position.x,S=d.position.y-N.seed.position.y,I=d.position.z-N.seed.position.z;if(M*M+S*S+I*I>s)continue;const F=d.screenX-N.seed.screenX,V=d.screenY-N.seed.screenY;F*F+V*V<=r&&(!m||pa(N.seed.id,m.seed.id)<0)&&(m=N)}}}if(m)m.members.push(d);else{const p={seed:d,members:[d]};a.push(p);const w=c(d.faction,u,h,f);let x=o.get(w);x||(x=new Map,o.set(w,x));const v=l(g,_),C=x.get(v);C?C.push(p):x.set(v,[p])}}return a.map(d=>Jf(d.members))}const Oc=12,Qf=.675,MM=.15,wM=5e3;function Td(n,e){const t=Number.isFinite(e)&&e>0?e:Oc*Qf/12,i=n===1?Math.min(24*t/Oc,Math.max(10*t/Oc,Qf)):(n===2?15:17)*t/Oc;return Math.min(wM,Math.max(MM,i))}function EM(n){const e=new Cn;e.name="far-air-display",e.visible=!1;const t=new Ee(new wl(2.2,3.3,20),new yn({color:n,transparent:!0,opacity:.8,side:fn,depthTest:!1}));t.rotation.x=-Math.PI/2;const i=new nn(new kt().setFromPoints([new b(0,.2,0),new b(0,1,0)]),new bi({color:n,transparent:!0,opacity:.8,depthTest:!1})),r=Array.from({length:65},(a,c)=>{const l=c/64*Math.PI*2;return new b(Math.cos(l)*7.2,Math.sin(l)*7.2,0)}),s=new nn(new kt().setFromPoints(r),new bi({color:n,transparent:!0,opacity:.9,depthTest:!1})),o=gm(n);return t.add(s,o),e.add(t,i),{root:e,base:t,pole:i,tgt:s,escort:o}}function TM(n,e,t){const{tier:i,representative:r,status:s,scale:o}=t,a=s!=="wreck",c=n.base!==null;n.base&&(n.base.visible=r&&a&&i!==3,n.base.scale.setScalar((t.baseScale??o)/.675)),n.icon.visible=r&&a,n.icon.scale.setScalar(o),n.icon.position.y=t.iconHeight,n.pole.visible=r&&a&&i!==3,n.pole.userData.naturalTop=t.poleHeight,n.wreck.visible=r&&s!=="active",n.wreck.scale.setScalar(o/.675),e.root.visible=r&&s==="active"&&i===3&&t.hasAir,e.base.scale.setScalar((t.farBaseScale??o)/.675),e.base.position.y=1.5,e.tgt.scale.setScalar(.675),e.escort.scale.setScalar(.675),e.tgt.visible=t.hasTgt&&!c,e.escort.visible=t.hasEscort&&!c&&t.faction!=="enemy";const l=e.pole.geometry.getAttribute("position"),d=Math.max(t.airAltitude,.6);e.pole.userData.naturalTop=d,l.getY(1)!==d&&(l.setY(1,d),l.needsUpdate=!0,e.pole.geometry.computeBoundingSphere()),n.label.position.y=i===3?t.hasAir?d:1.5:t.poleHeight;const u=n.label.userData.dom;u.textContent!==t.label&&(u.textContent=t.label),u.style.whiteSpace="pre",u.style.fontSize=i===1?"14px":i===2?"13px":"12px",u.style.lineHeight="1.15";const h=r&&n.labelFade>0&&(i!==3||t.faction==="squadron");u.hidden=!h,n.label.userData.displayVisible=h}const AM=[[-5,-5],[0,7],[5,-5]],RM=[[-4,-4],[-4,2],[0,6],[4,2],[4,-4]],CM=[[-4,-4],[-4,4],[4,4],[4,-4]],PM=[[0,5.8],[-3.25,-3.1],[3.25,-3.1]];function ep(n){const e=new em;e.moveTo(n[0][0],n[0][1]);for(const[t,i]of n.slice(1))e.lineTo(t,i);return e.closePath(),new sh(e)}function Ad(n,e){return new yn({color:n,transparent:!0,opacity:e,side:fn,depthTest:!1,depthWrite:!1})}function DM(n,e){const t=new Cn,i=n==="ground"?CM:n==="ship"?RM:AM,r=new nn(new kt().setFromPoints(i.map(([o,a])=>new b(o,a,0))),new bi({color:e,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1}));if(r.name="outline",t.add(r),n==="air-filled"){const o=new Ee(ep(PM),Ad(e,.9));o.name="filledinner",t.add(o)}else if(n==="air-outline"){const o=new Ee(new wa(.65,32),Ad(e,.9));o.name="dot",o.position.y=-.3,t.add(o)}const s=new Ee(ep(i),Ad(e,0));return s.name="pickmesh",t.add(s),t}function zs(n){return!n.intangible&&(n.icon==="ground"||n.icon==="ship")}function qa(n,e,t){return new b(e.x,zs(n)?t(e.x,e.z):e.y,e.z)}function Tl(n,e,t,i){const r=qa(n,e,t);return n.intangible||(r.y=zs(n)?r.y+i:Math.max(r.y,t(r.x,r.z)+i)),r}const jc=8,al=1e-9,so=new b,Bi=new b,Tn=new b,Jo=new b,ui=new b,fs=new b,Rd=new b,Ji=new Ft,Tr=new qt,Cd=new qt,_o=Array.from({length:8},()=>new Ft),LM=Array.from({length:16},()=>new Ft),IM=Array.from({length:16},()=>new Ft),NM=[0,1,2],tp=[0,1],UM=[0],zc=new Ft,Bc=new Ft;function Ra(n,e){switch(e){case 0:return n.w+n.x;case 1:return n.w-n.x;case 2:return n.w+n.y;case 3:return n.w-n.y;case 4:return n.w+n.z;default:return n.w-n.z}}function cl(n,e,t){if(!Number.isFinite(e.w)||e.w<=0)return;const i=(e.x/e.w+1)*t.width/2,r=(1-e.y/e.w)*t.height/2;!Number.isFinite(i)||!Number.isFinite(r)||(n.left=Math.min(n.left,i),n.right=Math.max(n.right,i),n.top=Math.min(n.top,r),n.bottom=Math.max(n.bottom,r))}function np(n,e,t){let i=LM,r=IM,s=n.length;n.forEach((o,a)=>i[a].copy(_o[o]));for(let o=0;o<6&&s;o++){let a=0;for(let c=0;c<s;c++){const l=i[(c+s-1)%s],d=i[c],u=Ra(l,o),h=Ra(d,o);u>=0!=h>=0&&r[a++].copy(l).lerp(d,u/(u-h)),h>=0&&r[a++].copy(d)}s=a,[i,r]=[r,i]}for(let o=0;o<s;o++)cl(e,i[o],t)}function ip(n,e,t){zc.set(n.x,n.y,n.z,1).applyMatrix4(Tr),Bc.set(e.x,e.y,e.z,1).applyMatrix4(Tr);let i=0,r=1;for(let o=0;o<6;o++){const a=Ra(zc,o),c=Ra(Bc,o);if(!Number.isFinite(a)||!Number.isFinite(c)||a<0&&c<0)return null;if(a>=0!=c>=0){const l=a/(a-c);a<0?i=Math.max(i,l):r=Math.min(r,l)}}if(i>r)return null;const s={left:1/0,right:-1/0,top:1/0,bottom:-1/0};return Ji.copy(zc).lerp(Bc,i),cl(s,Ji,t),Ji.copy(zc).lerp(Bc,r),cl(s,Ji,t),Number.isFinite(s.right)?s:null}function ll(n){return Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z)}function uo(n,e){const{camera:t,width:i,height:r}=e;Rd.copy(n).applyMatrix4(t.matrixWorldInverse);const s=-Rd.z;if(!ll(Rd)||s<t.near||s>t.far||(fs.copy(n).project(t),!ll(fs)||fs.z<-1-al||fs.z>1+al))return null;const o=(fs.x+1)*i/2,a=(1-fs.y)*r/2;return Number.isFinite(o)&&Number.isFinite(a)?{x:o,y:a,z:fs.z}:null}function xm(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function ch(n){if(!n)return!1;const e=t=>t.visible&&t.opacity>0;return Array.isArray(n)?n.some(e):e(n)}function kM(n,e,t){const i=n.geometry,r=i.getAttribute("position"),s=i.index;if(!r)return;const o=s?.count??r.count,a=n.isMesh,c=n.isPoints,l=a?NM:c?UM:tp,d=a?3:c||!n.isLineSegments?1:2,u=Array.isArray(n.material)?i.groups:[{start:0,count:o,materialIndex:0}];for(const h of u){const f=Array.isArray(n.material)?n.material[h.materialIndex??0]:n.material;if(!ch(f))continue;const g=Math.max(h.start,i.drawRange.start),_=Math.min(o,h.start+h.count,i.drawRange.start+i.drawRange.count);for(let m=g;m+l.length<=_;m+=d){let p=!0;for(let w=0;w<l.length;w++){ui.fromBufferAttribute(r,s?s.getX(m+w):m+w).applyMatrix4(n.matrixWorld);const x=_o[w].set(ui.x,ui.y,ui.z,1).applyMatrix4(Tr);if(!Number.isFinite(x.x)||!Number.isFinite(x.y)||!Number.isFinite(x.z)||!Number.isFinite(x.w)){p=!1;break}}p&&np(l,e,t)}}if(n.isLineLoop&&o>1&&!Array.isArray(n.material)&&i.drawRange.start===0&&i.drawRange.count>=o){let h=!0;for(const[f,g]of[[0,o-1],[1,0]]){ui.fromBufferAttribute(r,s?s.getX(g):g).applyMatrix4(n.matrixWorld);const _=_o[f].set(ui.x,ui.y,ui.z,1).applyMatrix4(Tr);(!Number.isFinite(_.x)||!Number.isFinite(_.y)||!Number.isFinite(_.z)||!Number.isFinite(_.w))&&(h=!1)}h&&np(tp,e,t)}}function FM(n){if(!xm(n.icon))return null;const e={left:1/0,right:-1/0,top:1/0,bottom:-1/0};return n.icon.traverseVisible(t=>{const i=t;if(!i.geometry||!ch(i.material))return;const r=i.geometry;r.boundingBox||r.computeBoundingBox();const s=r.boundingBox;if(!s||s.isEmpty())return;for(let a=0;a<8;a++){if(ui.set(a&1?s.max.x:s.min.x,a&2?s.max.y:s.min.y,a&4?s.max.z:s.min.z).applyMatrix4(t.matrixWorld),!ll(ui))return;const c=_o[a].set(ui.x,ui.y,ui.z,1).applyMatrix4(Tr);if(!Number.isFinite(c.x)||!Number.isFinite(c.y)||!Number.isFinite(c.z)||!Number.isFinite(c.w))return}let o=!0;for(let a=0;a<6;a++){let c=0;for(const l of _o)Ra(l,a)>=0&&c++;if(!c)return;c<8&&(o=!1)}if(o)for(const a of _o)cl(e,a,n);else kM(i,e,n)}),Number.isFinite(e.right)?e:null}function OM(n){const e=typeof getComputedStyle=="function"?getComputedStyle(n):n.style,t=d=>{const u=Number.parseFloat(d??"");return Number.isFinite(u)?u:0},i=t(e.fontSize)||t(n.style.fontSize),r=i>0?i:14,s=e.lineHeight||n.style.lineHeight,o=t(s),a=o>0?/^[\d.]+$/.test(s)?o*r:o:r*1.15,c=Number.isFinite(a)&&a>0?a:14*1.15;let l=Number(n.offsetHeight);if(!Number.isFinite(l)||l<=0){const d=typeof n.getBoundingClientRect=="function"?n.getBoundingClientRect():null;l=d?Number(d.height??d.bottom-d.top):0}return(!Number.isFinite(l)||l<=0)&&(l=Math.max(1,(n.textContent??"").split(`
`).length)*c+t(e.paddingTop)+t(e.paddingBottom)),{height:Number.isFinite(l)&&l>0?l:c,lineHeight:c}}function Pd(n,e){const t=n.geometry.getAttribute("position");if(!t||t.count<2||!ll(e))return!1;const i=t.array instanceof Float32Array?Math.fround:a=>a,r=i(e.x),s=i(e.y),o=i(e.z);return!Number.isFinite(r)||!Number.isFinite(s)||!Number.isFinite(o)?!1:(t.getX(1)===r&&t.getY(1)===s&&t.getZ(1)===o||(t.setXYZ(1,r,s,o),t.needsUpdate=!0,n.geometry.boundingBox&&n.geometry.computeBoundingBox(),n.geometry.computeBoundingSphere()),!0)}function zM(n,e,t){Ji.set(Bi.x,Bi.y,Bi.z,1).applyMatrix4(Tr);const i=Ji.w,r=Tr.elements,s=1-t*2/n.height,o=r[5]-s*r[7];if(!Number.isFinite(o)||Math.abs(o)<al)return!1;const a=(s*Ji.w-Ji.y)/o,c=e.y-t,l=2*i/(n.camera.projectionMatrix.elements[5]*n.height),d=Math.max(Bi.distanceTo(so),l*Math.max(1,c))*4;if(!Number.isFinite(a)||a<=0||a>d||(Tn.copy(Bi),Tn.y+=a,Ji.set(Tn.x,Tn.y,Tn.z,1).applyMatrix4(Tr),Ji.w<i/2||Ji.w>i*2))return!1;const u=uo(Tn,n),h=Math.max(jc,Math.min(n.width/4,c));return!!u&&Math.abs(u.y-t)<.01&&Math.abs(u.x-e.x)<=h}function BM(n,e,t){Tn.set(e.x*2/n.width-1,1-t*2/n.height,e.z).unproject(n.camera);const i=uo(Tn,n);return!!i&&Math.abs(i.y-t)<.01}function HM(n){const{camera:e,width:t,height:i,group:r,icon:s,pole:o,dom:a,isAir:c,isMerged:l,visible:d}=n,u=Number.isFinite(n.naturalTop)?n.naturalTop:.6,h=o.geometry.getAttribute("position");h&&h.count>0?so.fromBufferAttribute(h,0).applyMatrix4(o.matrixWorld):so.set(0,.2,0).applyMatrix4(r.matrixWorld),Bi.set(0,u,0).applyMatrix4(r.matrixWorld),Tn.copy(Bi),a.style.transform="translate(0, 0)";const f=Number.isFinite(t)&&t>0&&Number.isFinite(i)&&i>0;Tr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse);const g=f?uo(so,n):null,_=f?uo(Bi,n):null,m=OM(a),p=xm(o)&&ch(o.material)&&!!h&&h.count>=2,w=f?FM(n):null,x=f&&p?ip(so,Bi,n):null,v=d&&!a.hidden&&!!(w||x);if(v&&l&&p&&h&&h.count>=2&&g&&_&&Math.abs(g.y-_.y)<m.height){const de=g.y-m.height-.1;!zM(n,_,de)&&!BM(n,_,de)&&Tn.copy(Bi)}const C=o.matrixWorld.determinant();Number.isFinite(C)&&Math.abs(C)>al?(Cd.copy(o.matrixWorld).invert(),Jo.copy(Tn).applyMatrix4(Cd),Pd(o,Jo)||(Tn.copy(Bi),Jo.copy(Bi).applyMatrix4(Cd),Pd(o,Jo))):Pd(o,Jo.set(0,u,0));const P=o.userData.labelDisplayTop;if(P?(P.x=Tn.x,P.y=Tn.y,P.z=Tn.z):o.userData.labelDisplayTop={x:Tn.x,y:Tn.y,z:Tn.z},!f)return a.style.left="0px",a.style.top="0px",!1;const D=uo(Tn,n)??_;ui.setFromMatrixPosition(s.matrixWorld);const N=uo(ui,n),M=N?.x??D?.x??g?.x??t/2,S=p?ip(so,Tn,n):null;let I=w?.right??S?.right??M;S&&(I=Math.max(I,S.right)),Number.isFinite(I)||(I=M);let F=D?.y??N?.y??g?.y??i/2;l&&p&&g&&D?F=Math.min(g.y,D.y):c&&!l&&(F=(N?.y??F)-m.lineHeight/2);const V=w??S;v&&V&&(!Number.isFinite(F)||F<0||F>i-m.height)&&(F=V.top);const G=Number(a.offsetWidth),J=Number.isFinite(G)&&G>0?G:0,Y=v?Math.max(0,Math.min(t-J-jc,I+jc)):I+jc;return v&&(F=Math.max(0,Math.min(i-m.height,F))),a.style.left=`${Y}px`,a.style.top=`${F}px`,v}function lh(n="mouse",e=!1){return n==="touch"||n==="pen"||e?32:14}function VM(n,e,t,i,r){if(![n.x,n.y,n.z,e.left,e.top,e.width,e.height,t,i,r].every(Number.isFinite)||e.width<=0||e.height<=0||r<0||n.z<-1||n.z>1)return null;const s=e.left+(n.x+1)*e.width/2,o=e.top+(1-n.y)*e.height/2;return s<e.left-r||s>e.left+e.width+r||o<e.top-r||o>e.top+e.height+r?null:Math.hypot(s-t,o-i)}function GM(n,e,t,i=0){return[n.left,n.right,n.top,n.bottom,e,t,i].every(Number.isFinite)&&n.right>n.left&&n.bottom>n.top&&i>=0&&e>=n.left-i&&e<=n.right+i&&t>=n.top-i&&t<=n.bottom+i}const rp=new Set(["markers","drawing","links","range","layers"]),sp=new Set(["units","equipment","groups","routes","links"]),Dd=[{id:"units",label:"单位",title:"单位与空间编辑"},{id:"equipment",label:"装备",title:"机体与武器挂载"},{id:"groups",label:"编组",title:"编组与批量调度"},{id:"routes",label:"航路",title:"航路、绑定与航迹"},{id:"markers",label:"标记",title:"自定义地图点位"},{id:"drawing",label:"作图",title:"标尺、圆规与范围规划"},{id:"links",label:"连线",title:"单位与标记连线"},{id:"terrain",label:"地形",title:"画布、地形与城区"},{id:"range",label:"距离",title:"距离判定与三维范围"},{id:"turns",label:"回合",title:"回合草稿与战斗结果"},{id:"layers",label:"图层",title:"地图显示与航迹图层"},{id:"project",label:"存档",title:"工程保存、导入与恢复"}];function WM(n){const e=document.querySelector("#app"),t=document.querySelector("#edit-panel");if(!e||!t)throw new Error("Editor sidebar requires the existing workspace shell");if(t.dataset.sidebarMounted)throw new Error("Editor sidebar is already mounted");const i=(ie,Ne="")=>{const Fe=document.createElement(ie);return Fe.textContent=Ne,Fe},r=(ie,Ne,Fe)=>{const ht=i("button",ie);return ht.type="button",Fe&&(ht.id=Fe),ht.addEventListener("click",Ne),ht},s=ie=>{const Ne=document.querySelector(ie);if(!Ne)throw new Error(`Missing sidebar source control: ${ie}`);return Ne},o=s("#unit-editor"),a=s("#terrain-editor"),c=s("#route-section"),l=s("#archive-panel"),d=s("#workflow-panel"),u=s("#tab-units").parentElement,h=s(".selection-panel"),f=s(".event-panel"),g=s(".range-panel"),_=s(".trail-panel"),m=document.createComment("archive-manager-portal");l.before(m);const p=i("div"),x=s("#edit-add").closest(".edit-actions").previousElementSibling;for(;o.firstChild&&o.firstChild!==x;)p.append(o.firstChild);c.remove(),o.querySelectorAll(":scope > .rule").forEach(ie=>ie.remove());const v=Array.from(o.children),C=s("#edit-label").closest("label"),P=s("#tool-move").closest(".edit-actions"),D=v.indexOf(C),N=v.indexOf(P),M=(ie,Ne,Fe)=>{const ht=i("details");return ht.className="sidebar-submenu",ht.open=Fe,ht.append(i("summary",ie)),ht.append(...Ne),ht};o.replaceChildren(M("单位与选择",v.slice(0,D),!0),M("属性与战损",v.slice(D,N),!1),M("位置、姿态与吸附",v.slice(N),!0)),a.querySelector(":scope > .eyebrow")?.remove();const S=Array.from(a.children),I=S.indexOf(s("#terrain-brush").closest("label")),F=S.indexOf(s("#terrain-preset").closest("label")),V=s("#terrain-undo").closest(".edit-actions"),G=S.indexOf(V);a.replaceChildren(M("画布尺寸与采样",S.slice(0,I),!1),M("笔刷、城区与等高线",S.slice(I,F),!0),M("地形生成与重置",S.slice(F,G),!1),...S.slice(G)),t.replaceChildren(),t.classList.add("editor-sidebar"),t.dataset.sidebarMounted="true",t.hidden=!1,e.classList.add("editor-sidebar-mounted"),t.setAttribute("aria-label","场景编辑器");const J=i("header");J.className="sidebar-header";const Y=i("div");Y.className="sidebar-title-row";const de=i("strong","场景编辑器"),q=i("span","浏览");q.id="editor-sidebar-state",q.className="sidebar-state",q.setAttribute("role","status"),Y.append(de,q);const oe=i("div");oe.className="sidebar-toolbar";const xe=r("进入编辑",()=>{we.editable&&n.toggleEdit()},"sidebar-toggle-edit"),We=r("全图",()=>n.fitMap(),"sidebar-fit-map");We.title="适配整个地图及当前单位";const it=r("俯视",()=>n.topView(),"sidebar-top-view");it.title="切换地图俯视视角";let gt=!1;const xt=r("收起",()=>ge(!gt),"sidebar-collapse");oe.append(xe,We,it,xt);const Q=i("div");Q.className="sidebar-quick-actions";const Te=r("保存修订",()=>{if(we.playerView)return;const ie=ye();ie&&!ie.disabled&&ie.click()},"sidebar-quick-save"),se=r("提交回合",()=>{if(we.playerView)return;re("turns");const ie=document.querySelector("#workflow-commit");ie&&!ie.disabled&&ie.click()},"sidebar-quick-commit"),je=r("另存为…",()=>{we.playerView||(re("turns"),document.querySelector("#editor-save-as-name")?.focus())},"sidebar-quick-save-as"),ne=r("生成快照",()=>{if(we.playerView)return;const ie=document.querySelector("#workflow-snapshot");ie&&!ie.disabled&&!ie.hidden&&ie.click()},"sidebar-quick-snapshot");Q.append(Te,je,se,ne);const fe=i("div");fe.className="sidebar-viewer-toolbar";const ee=r("导出查看器",()=>{we.playerView&&n.viewerExport?.()},"sidebar-viewer-export"),te=r("撤销",()=>{we.playerView&&we.editable&&we.viewerCanUndo&&n.viewerUndo?.()},"sidebar-viewer-undo"),R=r("重做",()=>{we.playerView&&we.editable&&we.viewerCanRedo&&n.viewerRedo?.()},"sidebar-viewer-redo");fe.append(ee,te,R),J.append(Y,oe,Q,fe);const me=i("nav");me.className="sidebar-nav",me.setAttribute("role","tablist"),me.setAttribute("aria-label","编辑工具菜单"),me.setAttribute("aria-orientation","vertical");const ue=i("div");ue.className="sidebar-content",ue.id="editor-sidebar-content";const He=new Map,pe=new Map,Ie=new Map,ae=new Map;let Ae="units",we={editing:!1,editable:!0,mapOnly:!1},Ce,A=!1,y=0;const O=ie=>we.playerView?rp.has(ie):!(we.mapOnly&&sp.has(ie));for(const ie of Dd){const Ne=r(ie.label,()=>re(ie.id),`sidebar-tab-${ie.id}`);Ne.title=ie.title,Ne.setAttribute("role","tab"),Ne.setAttribute("aria-controls",`sidebar-panel-${ie.id}`),Ne.dataset.sidebarTab=ie.id,Ie.set(ie.id,Ne),me.append(Ne);const Fe=i("section");Fe.id=`sidebar-panel-${ie.id}`,Fe.className="sidebar-tab-panel",Fe.setAttribute("role","tabpanel"),Fe.setAttribute("aria-labelledby",Ne.id);const ht=i("h2",ie.title);ht.className="sidebar-panel-heading";const Mt=i("div");Mt.className="sidebar-panel-body",Mt.dataset.sidebarPanel=ie.id,Fe.append(ht,Mt),He.set(ie.id,Fe),pe.set(ie.id,Mt),ue.append(Fe)}o.hidden=!1,a.hidden=!1,pe.get("units").append(h,o),pe.get("terrain").append(a),pe.get("turns").append(d,p,f),c.open=!0;const Z=c.querySelector(":scope > summary"),X=Array.from(c.children).filter(ie=>ie!==Z),W=X.indexOf(c.querySelector("#route-list")),ke=X.indexOf(c.querySelector("#track-edit").closest(".edit-actions"));c.replaceChildren(Z,M("航路设置与选中单位绑定",X.slice(0,W),!0),M("航路点与顺序",X.slice(W,ke),!0),M("航迹曲线与控制点",X.slice(ke),!1)),pe.get("routes").append(c);const _e=i("section");_e.className="sidebar-card",_e.append(i("h3","当前航路的绑定对象"));const $e=i("div");$e.id="route-bindings",$e.className="sidebar-bound-list",$e.setAttribute("aria-live","polite"),$e.textContent="当前航路暂无绑定对象";const Ye=i("div");Ye.className="edit-actions";const be=i("button","选中全部绑定单位");be.type="button",be.id="route-select-bound",Ye.append(be);const Pe=i("label");Pe.className="edit-row",Pe.append(i("span","编组"));const Ze=i("select");Ze.id="route-group-select",Ze.setAttribute("aria-label","绑定至当前航路的编组"),Ze.add(new Option("选择编组","")),Pe.append(Ze);const Ke=i("button","将编组绑定当前航路");Ke.type="button",Ke.id="route-bind-group";const Re=i("div");Re.className="edit-actions",Re.append(Ke),_e.append($e,Ye,Pe,Re),pe.get("routes").append(_e),pe.get("range").append(g),pe.get("layers").append(_);const mt=i("section");mt.className="sidebar-card",mt.append(i("h3","航路显示"));const U=(ie,Ne)=>{const Fe=i("label");Fe.className="check-row";const ht=i("input");return ht.id=ie,ht.type="checkbox",ht.checked=!0,Fe.append(ht,document.createTextNode(Ne)),Fe};mt.append(U("route-visible","显示所有航路与航路点"),U("route-labels","显示航路点名称与绑定对象")),pe.get("layers").append(mt),pe.get("project").append(l),u.hidden=!0,u.classList.add("sidebar-legacy-tabs"),t.append(J,me,ue,u);function ye(){return["#task-editor-save","#map-editor-save","#workflow-save-draft"].map(ie=>document.querySelector(ie)).find(ie=>ie&&!ie.hidden)}function Se(){if(we.playerView){Q.hidden=!0;for(const Mt of[Te,je,se,ne])Mt.hidden=!0,Mt.disabled=!0;return}const ie=ye(),Ne=document.querySelector("#workflow-commit");Te.hidden=!ie,Te.disabled=!ie||ie.disabled,Te.textContent=ie?.id==="workflow-save-draft"?"保存草稿":ie?.id==="map-editor-save"?"保存地图修订":"保存任务修订",se.hidden=!Ne||Ne.hidden||Ne.disabled,se.disabled=!Ne||Ne.disabled;const Fe=["#map-editor-save-as","#task-editor-save-as"].map(Mt=>document.querySelector(Mt)).find(Mt=>Mt&&!Mt.hidden);je.hidden=!Fe,je.disabled=!Fe||Fe.disabled;const ht=document.querySelector("#workflow-snapshot");ne.hidden=!ht||ht.hidden,ne.disabled=!ht||ht.disabled,Q.hidden=Te.hidden&&je.hidden&&se.hidden&&ne.hidden}function Xe(){for(const Ne of Dd){const Fe=O(Ne.id),ht=Fe&&Ne.id===Ae,Mt=Ie.get(Ne.id);Mt.hidden=!!we.playerView&&!Fe,Mt.disabled=!Fe,Mt.setAttribute("aria-selected",String(ht)),Mt.tabIndex=ht?0:-1,He.get(Ne.id).hidden=!ht}const ie=we.playerView?"玩家查看器":"场景编辑器";de.textContent=ie,t.setAttribute("aria-label",ie),me.setAttribute("aria-label",we.playerView?"标注工具菜单":"编辑工具菜单"),t.dataset.activeTab=Ae,t.dataset.playerView=String(!!we.playerView),t.dataset.editing=String(we.editing),t.dataset.editable=String(we.editable),t.dataset.active=String(we.active!==!1),q.textContent=we.playerView?we.editing?"标注中":"浏览":we.editable?we.editing?"编辑中":"浏览":"只读历史",xe.textContent=we.playerView?we.editing?"结束标注":"编辑标注":we.editing?"退出编辑":"进入编辑",xe.disabled=!we.editable,mt.hidden=!!we.playerView,ee.hidden=!we.playerView,ee.disabled=!we.playerView||!n.viewerExport,te.hidden=!we.playerView||!n.viewerUndo,R.hidden=!we.playerView||!n.viewerRedo,te.disabled=!we.playerView||!we.editable||!we.viewerCanUndo||!n.viewerUndo,R.disabled=!we.playerView||!we.editable||!we.viewerCanRedo||!n.viewerRedo,fe.hidden=!we.playerView,Se()}function ge(ie){gt=ie,t.dataset.collapsed=String(ie),xt.textContent=ie?"展开":"收起",xt.setAttribute("aria-expanded",String(!ie))}function re(ie){const Fe={unit:"units",route:"routes",group:"groups",marker:"markers",draw:"drawing",turn:"turns",archive:"project"}[ie]??ie;!He.has(Fe)||!O(Fe)||(ae.set(Ae,ue.scrollTop),Ae=Fe,ge(!1),Xe(),ue.scrollTop=ae.get(Fe)??0,n.chooseTool(Fe))}me.addEventListener("keydown",ie=>{if(!["ArrowUp","ArrowDown","Home","End"].includes(ie.key))return;const Ne=Dd.filter(Mt=>O(Mt.id)&&!Ie.get(Mt.id).hidden&&!Ie.get(Mt.id).disabled),Fe=Ne.findIndex(Mt=>Ie.get(Mt.id)===document.activeElement);if(Fe<0)return;ie.preventDefault();const ht=ie.key==="Home"?Ne[0]:ie.key==="End"?Ne.at(-1):Ne[(Fe+(ie.key==="ArrowDown"?1:-1)+Ne.length)%Ne.length];re(ht.id),Ie.get(ht.id).focus()});const qe=()=>{!we.playerView&&e.dataset.workspace==="manager"?l.parentNode!==e&&(m.parentNode===e?e.insertBefore(l,m.nextSibling):e.append(l),l.open=!1):(l.parentNode!==pe.get("project")&&pe.get("project").append(l),l.open=!0)};return new MutationObserver(qe).observe(e,{attributes:!0,attributeFilter:["data-workspace"]}),new MutationObserver(Se).observe(d,{subtree:!0,attributes:!0,attributeFilter:["hidden","disabled"]}),ge(!1),Xe(),qe(),{panels:{groups:pe.get("groups"),markers:pe.get("markers"),drawing:pe.get("drawing"),equipment:pe.get("equipment"),links:pe.get("links")},select:re,sync(ie){const Ne=!!ie.playerView&&!we.playerView,Fe=!ie.playerView&&!!we.playerView,ht=me.contains(document.activeElement),Mt=Fe?Ce:void 0;Ne&&(Ce=Ae,A=gt,y=ue.scrollTop,ae.set(Ae,ue.scrollTop)),we={...ie},t.hidden=!1,Fe&&(ae.set(Ae,ue.scrollTop),Ae=Ce??"units",Ce=void 0,ge(A)),we.playerView&&!rp.has(Ae)?(Ae="markers",ge(!1)):!we.playerView&&we.mapOnly&&sp.has(Ae)&&(Ae="terrain"),Xe(),qe(),(Ne||Fe)&&(ue.scrollTop=Fe&&Ae===Mt?y:ae.get(Ae)??0,ae.set(Ae,ue.scrollTop)),ht&&!O(document.activeElement.dataset.sidebarTab)&&Ie.get(Ae).focus()}}}function XM(n,e){let t="";const i=(C,P="")=>{const D=document.createElement(C);return D.textContent=P,D};n.append(i("h3","编组 / 批量操作"));const r=i("div");r.id="group-list",r.className="unit-picker",n.append(r);const s=i("label","编组名称");s.className="edit-row";const o=i("input");o.id="group-name",o.maxLength=128,s.append(o),n.append(s);const a=i("label","编组颜色");a.className="edit-row";const c=i("input");c.type="color",c.id="group-color",c.value="#62ffa8",a.append(c),n.append(a);const l=i("div");l.className="edit-actions",n.append(l);const d=[],u=(C,P,D,N=l)=>{const M=i("button",P);return M.type="button",M.id=C,M.addEventListener("click",D),N.append(M),d.push(M),M},h=i("div");h.id="group-state",h.className="edit-hint",h.setAttribute("role","status");const f=()=>e.read().groups.find(C=>C.id===t),g=()=>e.units().filter(C=>C.groupId===t).map(C=>C.id),_=(C,P)=>{e.change(C,P)&&v()};u("group-create","新建并分配所选",()=>{if(!e.editable())return;const C=o.value.trim()||`编组 ${e.read().groups.length+1}`,P=c.value,D=new Set(e.selectedIds()),N=`group-${crypto.randomUUID()}`;_("新建编组",(M,S)=>{M.groups.push({id:N,name:C,color:P}),S.filter(I=>D.has(I.id)).forEach(I=>{I.groupId=N}),t=N})}),u("group-save","保存名称 / 颜色",()=>{if(!f()||!o.value.trim())return;const C=o.value.trim(),P=c.value;_("修改编组",D=>{const N=D.groups.find(M=>M.id===t);N.name=C,N.color=P})});const m=i("div");m.className="edit-actions",n.append(m),u("group-assign","所选加入编组",()=>{if(!f())return;const C=new Set(e.selectedIds());_("分配编组",(P,D)=>D.filter(N=>C.has(N.id)).forEach(N=>{N.groupId=t}))},m),u("group-unassign","所选退出编组",()=>{const C=new Set(e.selectedIds());_("移除编组归属",(P,D)=>D.filter(N=>C.has(N.id)).forEach(N=>{delete N.groupId}))},m);const p=i("div");p.className="edit-actions",n.append(p),u("group-select","选中整组",()=>{f()&&e.select(g())},p),u("group-focus","定位整组",()=>{f()&&e.focus(g())},p),u("group-copy","复制整组",()=>{const C=f();C&&e.copy(C)},p);const w=i("div");w.className="edit-actions",n.append(w),u("group-delete","删除编组 / 保留单位",()=>{f()&&_("删除编组",(C,P)=>{C.groups=C.groups.filter(D=>D.id!==t),P.filter(D=>D.groupId===t).forEach(D=>{delete D.groupId}),t=""})},w);const x=i("div");x.id="group-members",x.className="unit-picker",n.append(x,h);function v(){const C=e.read(),P=e.units(),D=e.selectedIds(),N=e.editable();C.groups.some(S=>S.id===t)||(t=C.groups[0]?.id??""),r.replaceChildren(...C.groups.map(S=>{const I=P.filter(V=>V.groupId===S.id).length,F=i("button",`${S.name} (${I})`);return F.style.borderColor=S.color,F.setAttribute("aria-pressed",String(S.id===t)),F.addEventListener("click",()=>{t=S.id,o.value=S.name,c.value=S.color,v()}),F.addEventListener("dblclick",()=>e.select(P.filter(V=>V.groupId===S.id).map(V=>V.id))),F}));const M=f();document.activeElement!==o&&(o.value=M?.name??""),document.activeElement!==c&&(c.value=M?.color??"#62ffa8"),o.disabled=c.disabled=!N;for(const S of d)S.disabled=!N;for(const S of["group-select","group-focus"])n.querySelector(`#${S}`).disabled=!M||!g().length;for(const S of["group-save","group-assign","group-copy","group-delete"])n.querySelector(`#${S}`).disabled=!N||!M;n.querySelector("#group-assign").disabled||=!D.length,n.querySelector("#group-copy").disabled||=!g().length,n.querySelector("#group-unassign").disabled=!N||!P.some(S=>D.includes(S.id)&&S.groupId),x.replaceChildren(...P.filter(S=>S.groupId===t).map(S=>{const I=i("button",S.label);return I.setAttribute("aria-pressed",String(D.includes(S.id))),I.addEventListener("click",()=>e.select([S.id])),I})),h.textContent=`${M?`${M.name} · ${g().length} 个单位`:"暂无编组"} / 当前选择 ${D.length} 个${N?"":" / 只读"}`}return v(),{sync:v}}const Qo=new WeakMap,pn=n=>JSON.stringify([n.id,n.revision]),Ld=n=>({id:n.id,revision:n.revision}),qM=n=>({L:"轻型",M:"中型",H:"重型"})[n];function op(n,e,t){const i=n.sessions.find(s=>s.id===e),r=i?.sealedScenes?.find(s=>s.turn===t);return JSON.stringify([n.id,n.players,n.aircraft,n.sp,i?.status,i?.workflow,r?.resourceSnapshot??i?.resourceSnapshot,r?.rulesSnapshot??i?.rulesSnapshot,(r?.units??i?.units??[]).map(s=>({id:s.id,player:s.player,aircraftRef:s.aircraftRef,loadout:s.loadout,spRefs:s.spRefs,playerActions:s.playerActions}))])}function ap(n,e){const t=new Map;for(const i of[...n,...e])t.has(pn(i))||t.set(pn(i),i);return[...t.values()].sort((i,r)=>i.id===r.id?r.revision-i.revision:i.id.localeCompare(r.id))}function $M(n,e){const t={};Qo.set(n,t);const i=(ee,te="",R="")=>{const me=document.createElement(ee);return me.textContent=te,me.id=R,me},r=i("section");r.className="player-roster";const s=i("div");s.className="player-roster-header";const o=i("button","新建玩家","player-roster-new");o.type="button",n.getAttribute("data-collapsed")===null&&typeof matchMedia=="function"&&matchMedia("(max-width: 600px) and (pointer: coarse)").matches&&n.setAttribute("data-collapsed","true");const a=n.getAttribute("data-collapsed")==="true",c=i("button",a?"展开":"收起","player-roster-collapse");c.type="button",c.setAttribute("aria-expanded",String(!a)),s.append(i("h3","玩家"),o,c);const l=i("div","","player-roster-form-area");l.hidden=!0;const d=i("div","","player-roster-pending");d.hidden=!0;const u=i("div","","player-roster-list");u.className="player-roster-list";const h=i("p","","player-roster-feedback");h.setAttribute("role","status"),h.hidden=!0,r.append(s,l,d,u,h),n.replaceChildren(r);let f,g,_,m="",p=-1,w="",x=[],v=[],C=[],P=wh,D="",N="",M="",S=0,I=0,F=0,V,G,J,Y;const de=[],q=[],oe=new Map,xe=[],We=ee=>{const te=ee instanceof Error?ee.message:String(ee);h.textContent=te,h.hidden=!1,e.report(te)},it=()=>{if(Qo.get(n)!==t||!n.isConnected||!r.isConnected||!f)throw new Error("玩家栏已变化，请使用当前面板。");if(e.readRevision&&f.revision!==void 0){if(e.readRevision()!==f.revision)throw new Error("工程已变化，请等待玩家栏同步。")}else if(e.read&&op(e.read(),f.sessionId,f.turn)!==w)throw new Error("工程已变化，请等待玩家栏同步。");if(f.mapOnly)throw new Error("地图模式下玩家栏为只读。");return f},gt=ee=>{try{it(),ee()}catch(te){We(te)}},xt=()=>{const ee=it();if(!ee.editable)throw new Error("历史回合或当前场景为只读。");if(ee.pending||e.busy?.())throw new Error("请先完成或取消当前放置。");return ee},Q=(ee,te,R,me,ue)=>{const He=i("label",R);He.htmlFor=te;const pe=i("select","",te);for(const[Ie,ae]of me){const Ae=i("option",ae);Ae.value=Ie,pe.append(Ae)}return pe.value=ue,He.append(pe),ee.append(He),de.push(pe),pe},Te=(ee,te,R)=>{const me=ee.spSlots?.[R];return!!me&&!!te.weapon&&te.weapon.kind!=="normal"&&(!P.config.enforceWeight||!!te.weapon.weight&&ug(me,te.weapon.weight))&&(te.weapon.kind==="universal"||!!ee.allowedWeapons?.includes(te.name))},se=()=>{const ee=!!f?.editable&&!f.mapOnly&&!f.pending;o.disabled=!ee;for(const te of de)te.disabled=!ee;J&&(J.disabled=!ee||!V?.playerId),Y&&(Y.disabled=!ee||!V?.playerId||!V?.aircraftKey);for(const te of xe)te.node.disabled=!ee||!te.available;for(const[te,R]of oe)R.setAttribute("aria-selected",String(te===f?.selectedUnitId)),R.setAttribute("data-selected",String(te===f?.selectedUnitId))},je=()=>{l.replaceChildren(),de.length=0,q.length=0,G=void 0,J=void 0,Y=void 0;const ee=++I;if(l.hidden=!V,!V||!f)return;const te=V,R=()=>{if(V!==te||ee!==I||!l.isConnected)throw new Error("玩家创建表单已变化。")},me=i("form","","player-roster-form");me.className="player-form",me.append(i("h4","呼号"));const ue=new Set(x.map(Ce=>Ce.player?.id).filter(Boolean)),He=(f.project.players??[]).filter(Ce=>!ue.has(Ce.id));He.some(Ce=>Ce.id===te.playerId)||(te.playerId=""),G=Q(me,"player-roster-player","玩家呼号",[["","请选择玩家"],...He.map(Ce=>[Ce.id,Ce.callsign])],te.playerId),He.length||me.append(i("p","暂无可用呼号")),me.append(i("h4","装备")),J=Q(me,"player-roster-aircraft","机体",[["","请选择机体"],...v.map(Ce=>[pn(Ce),`${Ce.name} · 修订 ${Ce.revision}`])],te.aircraftKey);const pe=i("div","GUN / MSL / FLR","player-roster-inherent");pe.className="player-chips",me.append(pe);const Ie=i("div","","player-roster-slots");Ie.className="player-slots",me.append(Ie);const ae=v.find(Ce=>pn(Ce)===te.aircraftKey);ae&&(te.loadout=te.loadout.filter(Ce=>{const A=C.find(y=>pn(y)===pn(Ce.weaponRef));return A&&Te(ae,A,Ce.slot)}),ae.spSlots?.length||Ie.append(i("p","无 SP 槽")),ae.spSlots?.forEach((Ce,A)=>{const y=i("div");y.className="player-slot";const O=C.filter(W=>Te(ae,W,A)),Z=te.loadout.find(W=>W.slot===A)?.weaponRef,X=Q(y,`player-roster-slot-${A}`,`SP${A+1} · ${qM(Ce)} ${Ce}`,[["","空槽"],...O.map(W=>[pn(W),`${W.name} · ${W.weapon?.weight??""} · 修订 ${W.revision}`])],Z?pn(Z):"");q.push({slot:A,node:X,choices:O}),X.addEventListener("change",()=>gt(()=>{if(R(),!X.isConnected)throw new Error("SP 槽位已变化。");if(X.value&&!O.some(ke=>pn(ke)===X.value))throw new Error("所选 SP 的重量或机体许可不匹配。");te.loadout=te.loadout.filter(ke=>ke.slot!==A);const W=O.find(ke=>pn(ke)===X.value);W&&te.loadout.push({slot:A,weaponRef:Ld(W)}),te.loadout.sort((ke,_e)=>ke.slot-_e.slot)})),Ie.append(y)}));const Ae=i("div");Ae.className="player-actions",Y=i("button","完成配置","player-roster-create"),Y.type="submit";const we=i("button","取消","player-roster-create-cancel");we.type="button",Ae.append(Y,we),me.append(Ae),l.append(me),G.addEventListener("change",()=>gt(()=>{R(),te.playerId=G.value,se()})),J.addEventListener("change",()=>gt(()=>{if(R(),!te.playerId)throw new Error("请先选择玩家呼号。");if(J.value&&!v.some(Ce=>pn(Ce)===J.value))throw new Error("机体修订已变化。");te.aircraftKey=J.value,je()})),we.addEventListener("click",()=>gt(()=>{R(),V=void 0,je()})),me.addEventListener("submit",Ce=>{Ce.preventDefault(),gt(()=>{R();const A=xt();if(te.projectId!==A.project.id||te.sessionId!==A.sessionId||te.turn!==A.turn)throw new Error("创建场景或回合已变化，请取消后重新新建。");if(!(A.project.players??[]).some(W=>W.id===te.playerId)||x.some(W=>W.player?.id===te.playerId))throw new Error("请选择尚未加入当前场景的玩家。");const y=v.find(W=>pn(W)===te.aircraftKey);if(!y)throw new Error("请选择有效机体。");const O=q.filter(W=>W.node.value).map(W=>{const ke=W.choices.find(_e=>pn(_e)===W.node.value);if(!ke)throw new Error("所选 SP 的重量或机体许可不匹配。");return{slot:W.slot,weaponRef:Ld(ke)}}),Z=dg(y,C,O,P);if(Z.length)throw new Error(Z.join("；"));const X={playerId:te.playerId,aircraftRef:Ld(y),loadout:O};V=void 0,++I;try{e.beginCreate(X)}catch(W){throw V=te,je(),W}je()})}),se()},ne=()=>{d.replaceChildren();const ee=++F,te=f?.pending;if(d.hidden=!te,!te||!f)return;const R=i("article");R.className="player-card player-pending-card";const me=v.find(y=>pn(y)===pn(te.aircraftRef));R.append(i("h4",`${te.player.callsign} · 待落位`),i("p",me?.name??"已配置机体"));const ue=te.loadout.map(y=>`SP${y.slot+1} ${C.find(O=>pn(O)===pn(y.weaponRef))?.name??"已配置 SP"}`).join(" / "),He=f,Ie=He.project.sessions.find(y=>y.id===He.sessionId)?.resourceSnapshot.sp.find(y=>y.name==="FLR")??He.project.sp.find(y=>y.name==="FLR");R.append(i("p",`FLR 剩余 ${Ie?Ie.weapon?.usageLimit??"—":4} 次`),i("p",ue||"空 SP 挂载"));for(const y of te.loadout){const O=C.find(Z=>pn(Z)===pn(y.weaponRef));R.append(i("p",`SP${y.slot+1} · ${O?.name??"已配置 SP"} · 冷却 0 回合 · ${O?.weapon?.usageLimit===void 0?"已用 0 次":`剩余 ${O.weapon.usageLimit} 次`}`))}const ae=i("div");ae.className="player-actions";const Ae=i("button",te.armed?"等待地图落位":"生成位置","player-roster-arm");Ae.type="button",Ae.disabled=te.armed||!f.editable;const we=i("button","取消创建","player-roster-placement-cancel");we.type="button",ae.append(Ae,we),R.append(ae),d.append(R);const Ce={projectId:He.project.id,sessionId:He.sessionId,turn:He.turn},A=()=>{const y=it();if(ee!==F||!R.isConnected||y.project.id!==Ce.projectId||y.sessionId!==Ce.sessionId||y.turn!==Ce.turn||!y.pending||pn(y.pending.aircraftRef)!==pn(te.aircraftRef)||y.pending.player.id!==te.player.id)throw new Error("待落位配置已变化。");return y};Ae.addEventListener("click",()=>gt(()=>{const y=A();!y.editable||y.pending?.armed||e.armPlacement()})),we.addEventListener("click",()=>gt(()=>{A(),e.cancelPlacement()}))},fe=()=>{u.replaceChildren(),oe.clear(),xe.length=0;const ee=++S;if(!f)return;const te={projectId:f.project.id,sessionId:f.sessionId,turn:f.turn},R=x.filter(me=>me.player);R.length||u.append(i("p","暂无玩家"));for(const me of R){const ue=i("article","",`player-roster-unit-${me.id}`);ue.className="player-card",ue.tabIndex=0,ue.setAttribute("role","group"),ue.setAttribute("aria-label",`玩家 ${me.player.callsign}`);const He=i("h4",me.player.callsign),pe=v.find(X=>me.aircraftRef&&pn(X)===pn(me.aircraftRef)),Ie=lg(f.project,f.sessionId,me.id,f.turn),ae=i("div");ae.className="player-card-head";const Ae=i("span");Ae.className="player-faction-block",Ae.setAttribute("aria-hidden","true"),Ae.setAttribute("data-faction",me.faction);const we=Ie.filter(X=>X.slot!==void 0).length,Ce=i("span",`${we} 装备`);Ce.className="player-equipment-count",ae.append(Ae,He,Ce),ue.append(ae,i("p",pe?.name??"未绑定机体"));const A=Ie.find(X=>X.name==="FLR");ue.append(i("p",`FLR 剩余 ${A?.remaining??"—"} 次`));const y=()=>{const X=it();if(ee!==S||!ue.isConnected||X.project.id!==te.projectId||X.sessionId!==te.sessionId||X.turn!==te.turn||!x.some(W=>W.id===me.id))throw new Error("玩家单位或回合已变化。");return X},O=X=>["BUTTON","SELECT","INPUT"].includes(X.target?.tagName?.toUpperCase()??"");ue.addEventListener("click",X=>gt(()=>{O(X)||(y(),e.selectUnit(me.id,!1))})),ue.addEventListener("dblclick",X=>gt(()=>{O(X)||(y(),e.selectUnit(me.id,!0))})),ue.addEventListener("keydown",X=>{X.target!==ue||!["Enter"," "].includes(X.key)||(X.preventDefault(),gt(()=>{y(),e.selectUnit(me.id,X.key==="Enter")}))});const Z=i("div");Z.className="player-weapon-list",ue.append(Z);for(const X of Ie){const W=i("div");W.className="player-weapon-row";const ke=X.slot===void 0?X.name:`SP${X.slot+1} · ${X.name}`,_e=X.durationRemaining>0?`效果剩余 ${X.durationRemaining} 回合 · 冷却 ${X.profile?.cooldownTurns??0}T`:`冷却 ${X.cooldownRemaining} 回合`;W.append(i("strong",ke),i("span",X.jettisoned?"已抛弃":`${_e} · ${X.remaining===void 0?`已用 ${X.uses} 次`:`剩余 ${X.remaining} 次`}`));const $e=i("div");$e.className="player-actions";const Ye=i("button","使用");Ye.type="button",Ye.setAttribute("data-action","use"),Ye.setAttribute("data-weapon-key",X.key),$e.append(Ye),xe.push({node:Ye,available:X.canUse&&f.turn>0});let be=!1;const Pe=(Ze,Ke,Re)=>gt(()=>{y();const mt=xt();if(!Re.isConnected||!Ke||be||mt.turn<1)throw new Error("上一回合的此项行动当前不可记录。");be=!0,Re.disabled=!0;const U=xe.filter(Se=>Se.node.getAttribute("data-weapon-key")===X.key&&ue.contains(Se.node)),ye=U.map(Se=>Se.available);for(const Se of U)Se.available=!1;try{e.recordAction(me.id,X.key,Ze)}catch(Se){throw be=!1,U.forEach((Xe,ge)=>{Xe.available=ye[ge]}),se(),Se}});if(Ye.addEventListener("click",Ze=>{Ze.stopPropagation(),Pe("use",X.canUse,Ye)}),X.slot!==void 0||X.profile?.kind&&X.profile.kind!=="normal"){const Ze=i("button","抛弃");Ze.type="button",Ze.setAttribute("data-action","drop"),Ze.setAttribute("data-weapon-key",X.key),$e.append(Ze),xe.push({node:Ze,available:X.canJettison&&f.turn>0}),Ze.addEventListener("click",Ke=>{Ke.stopPropagation(),Pe("drop",X.canJettison,Ze)})}W.append($e),Z.append(W)}u.append(ue),oe.set(me.id,ue)}};return c.addEventListener("click",()=>gt(()=>{const ee=n.getAttribute("data-collapsed")!=="true";n.setAttribute("data-collapsed",String(ee)),c.textContent=ee?"展开":"收起",c.setAttribute("aria-expanded",String(!ee))})),o.addEventListener("click",()=>gt(()=>{const ee=xt();if(V){e.report("请先完成或取消当前玩家配置。");return}V={playerId:"",aircraftKey:"",loadout:[],projectId:ee.project.id,sessionId:ee.sessionId,turn:ee.turn},je()})),{sync(ee){if(Qo.get(n)!==t||!r.isConnected)return;if(f={...ee,pending:ee.pending?structuredClone(ee.pending):void 0},(ee.revision===void 0?ee.project!==g:ee.revision!==_||ee.project.id!==g?.id)||ee.sessionId!==m||ee.turn!==p){g=ee.project,_=ee.revision,m=ee.sessionId,p=ee.turn,w=e.readRevision&&ee.revision!==void 0?"":op(ee.project,ee.sessionId,ee.turn);const me=ee.project.sessions.find(Ie=>Ie.id===ee.sessionId),ue=me?.sealedScenes?.find(Ie=>Ie.turn===ee.turn);x=ue?.units??me?.units??[],v=ap(ue?.resourceSnapshot.aircraft??me?.resourceSnapshot.aircraft??[],ee.project.aircraft),C=ap(ue?.resourceSnapshot.sp??me?.resourceSnapshot.sp??[],ee.project.sp),P=ue?.rulesSnapshot??me?.rulesSnapshot??wh;const He=JSON.stringify([ee.project.id,ee.project.players,v,C,P,x.map(Ie=>Ie.player?.id)]);N!==He&&(N=He,V&&je());const pe=JSON.stringify([ee.project.id,ee.sessionId,ee.turn,v,C,P,x.filter(Ie=>Ie.player).map(Ie=>({id:Ie.id,player:Ie.player,aircraftRef:Ie.aircraftRef,loadout:Ie.loadout,spRefs:Ie.spRefs,playerActions:Ie.playerActions}))]);if(D!==pe){D=pe;try{fe()}catch(Ie){We(Ie)}}}const R=JSON.stringify([ee.project.id,ee.sessionId,ee.turn,ee.editable,ee.pending]);M!==R&&(M=R,ne()),se()},destroy(){Qo.get(n)===t&&(Qo.delete(n),++S,++I,++F,n.replaceChildren())}}}const ea=512,ta=[["#ff6935","橙"],["#2d8cff","蓝"],["#ffd84a","黄"],["#20e27e","绿"],["#ff4d5a","红"]],ci=n=>!!n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=1e5),na=n=>/^#[0-9a-f]{6}$/i.test(n),Id=n=>`${n.kind}:${n.id}`,cp=n=>{const e=n.indexOf(":"),t=n.slice(0,e),i=n.slice(e+1);return e>0&&i&&(t==="unit"||t==="marker")?{kind:t,id:i}:null},YM=(n,e,t)=>n.some(i=>i.fromUnitId===e&&i.to.kind===t.kind&&i.to.id===t.id||t.kind==="unit"&&i.to.kind==="unit"&&i.fromUnitId===t.id&&i.to.id===e);function jM(n){let e=!1,t="",i="",r="",s="",o="";const a=new Cn,c=new Map;a.name="Editor links",a.userData.editorLinks=!0,a.renderOrder=1e3,n.world.add(a);const l=(ne,fe="")=>{const ee=document.createElement(ne);return ee.textContent=fe,ee},d=l("div");d.className="scene-tool-panel editor-links-panel",n.panel.append(d);const u=l("style");u.textContent=`
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
  `,d.append(u,l("h3","连线"));const h=[],f=(ne,fe,ee)=>{const te=()=>{e||ee()};ne.addEventListener(fe,te),h.push({element:ne,event:fe,run:te})},g=()=>{const ne=l("div");return ne.className="tool-actions",d.append(ne),ne},_=(ne,fe,ee,te)=>{const R=l("button",ee);return R.id=fe,R.type="button",f(R,"click",te),ne.append(R),R},m=(ne,fe,ee)=>{const te=l("label");te.className="tool-row",te.append(l("span",ee));const R=l(ne);return R.id=fe,R.setAttribute("aria-label",ee),te.append(R),d.append(te),R},p=(ne,fe)=>{const ee=l("option",ne);return ee.value=fe,ee},w=g(),x=_(w,"link-mode","连线模式",()=>{if(t){We();return}if(!q()){se();return}const ne=oe();if(!ne||!n.readUnits().some(fe=>fe.id===ne&&ci(fe.position))){o="请选择源单位",se();return}t=ne,o="",D.value="",n.onModeChange(!0),se()}),v=_(w,"link-cancel","取消",We),C=m("select","link-source-unit","源单位");C.title="默认跟随选中单位；手动选择后固定源单位，连线模式中保持不变";const P=l("p");P.id="link-source",d.append(P);const D=m("select","link-target","目标"),N=m("select","link-style","颜色");N.replaceChildren(...ta.map(([ne,fe])=>p(fe,ne)),p("自定义","custom")),N.value=ta[0][0];const M=m("input","link-color","自定义颜色");M.type="color",M.value=ta[0][0];const S=_(g(),"link-add","添加连线",()=>{const ne=oe(),fe=cp(D.value);if(!q()){se();return}if(!ne||!fe){o="请选择源与目标",se();return}gt(ne,fe)}),I=m("select","link-list","连线列表");I.size=5;const F=m("input","link-visible","显示");F.type="checkbox",F.checked=!0;const V=g(),G=_(V,"link-apply","修改颜色 / 显示",()=>{const ne=r,fe=M.value,ee=F.checked;if(!q()){se();return}if(!na(fe)){o="请选择有效颜色",se();return}it("修改连线",te=>{const R=te.links?.find(me=>me.id===ne);if(!R)throw new Error("连线已移除");R.color=fe.toLowerCase(),R.visible=ee})}),J=_(V,"link-delete","删除连线",()=>{const ne=r;if(!q()){se();return}it("删除连线",fe=>{if(!fe.links?.some(ee=>ee.id===ne))throw new Error("连线已移除");fe.links=fe.links.filter(ee=>ee.id!==ne)})}),Y=l("p");Y.id="link-state",Y.setAttribute("role","status"),d.append(Y),f(C,"change",()=>{if(!q()||t){se();return}const ne=C.value;i=ne&&n.readUnits().some(fe=>fe.id===ne&&ci(fe.position))?ne:"",D.value="",o="",se()}),f(D,"change",()=>{o="",se()}),f(N,"change",()=>{if(!q()){se();return}na(N.value)&&(M.value=N.value)}),f(M,"input",()=>{if(!q()){se();return}N.value=ta.find(([ne])=>ne===M.value.toLowerCase())?.[0]??"custom"}),f(I,"change",()=>{r=I.value,s="",o="",se()});const de=ne=>{!e&&t&&ne.key==="Escape"&&(We(),ne.preventDefault())};typeof addEventListener=="function"&&addEventListener("keydown",de);function q(){return!e&&n.editable()&&!n.busy()}function oe(ne){return i&&!(ne??n.readUnits()).some(fe=>fe.id===i&&ci(fe.position))&&(i="",D.value=""),t||i||n.selectedUnitId()||""}function xe(){t&&(t="",D.value="",n.onModeChange(!1))}function We(){e||(xe(),D.value="",o="",se())}function it(ne,fe){if(!q())return se(),!1;let ee=!1;try{ee=n.change(ne,te=>{if(!q())throw new Error("当前状态已变化");fe(te)}),o=ee?"已保存":"未保存"}catch(te){o=te instanceof Error?te.message:String(te)}return se(),ee}function gt(ne,fe){const ee=M.value,te=ue=>{const He=n.readUnits(),pe=He.find(ae=>ae.id===ne),Ie=fe.kind==="unit"?He.find(ae=>ae.id===fe.id):ue.markers.find(ae=>ae.id===fe.id);if(!ci(pe?.position)||!ci(Ie?.position))throw new Error("源或目标已移除");if(fe.kind==="unit"&&fe.id===ne)throw new Error("源与目标相同");if((ue.links?.length??0)>=ea)throw new Error("连线已达上限 512");if(YM(ue.links??[],ne,fe))throw new Error("连线已存在");if(!na(ee))throw new Error("请选择有效颜色")};try{te(n.read())}catch(ue){return o=ue instanceof Error?ue.message:String(ue),se(),!1}const R=`link-${crypto.randomUUID()}`,me=it("添加连线",ue=>{te(ue),(ue.links??=[]).push({id:R,fromUnitId:ne,to:{...fe},color:ee.toLowerCase(),visible:!0})});return me&&(r=R,s="",se()),me}function xt(ne,fe){if(e||!t)return!1;if(!q())return se(),!0;const ee={kind:ne,id:fe};return D.value=Id(ee),gt(t,ee),!0}function Q(ne){a.remove(ne.line),ne.line.geometry.dispose(),ne.line.material.dispose()}function Te(){if(e)return;const ne=n.read();if(!ne.links?.length&&!t){for(const R of c.values())Q(R);c.clear();return}const fe=new Map(n.readUnits().map(R=>[R.id,R])),ee=new Map(ne.markers.map(R=>[R.id,R]));if(t&&(!n.editable()||!ci(fe.get(t)?.position))){xe(),o="",se();return}const te=new Set;for(const R of(ne.links??[]).slice(0,ea)){if(te.has(R.id))continue;te.add(R.id);let me=c.get(R.id);if(!me){const ae=new kt,Ae=new Dt(new Float32Array(6),3).setUsage(nl);ae.setAttribute("position",Ae);const we=new bi({color:"#ff6935",depthTest:!1,depthWrite:!1}),Ce=new nn(ae,we);Ce.name=`Editor link ${R.id}`,Ce.userData.editorLinkId=R.id,Ce.userData.editorTools=!0,Ce.renderOrder=1e3,Ce.frustumCulled=!1,me={line:Ce,position:Ae,coordinates:[NaN,NaN,NaN,NaN,NaN,NaN]},c.set(R.id,me),a.add(Ce)}const ue=fe.get(R.fromUnitId)?.position,He=(R.to.kind==="unit"?fe.get(R.to.id):ee.get(R.to.id))?.position;me.line.visible=R.visible!==!1&&ci(ue)&&ci(He);const pe=na(R.color)?R.color.toLowerCase():"#ff6935";if(`#${me.line.material.color.getHexString()}`!==pe&&me.line.material.color.set(pe),!ci(ue)||!ci(He))continue;let Ie=!1;for(let ae=0;ae<6;ae++){const Ae=ae<3?ue:He,we=ae%3,Ce=(we===0?Ae.x:we===1?Ae.y:Ae.z)*tt;me.coordinates[ae]!==Ce&&(me.coordinates[ae]=Ce,me.position.array[ae]=Ce,Ie=!0)}Ie&&(me.position.needsUpdate=!0)}for(const[R,me]of c)te.has(R)||(Q(me),c.delete(R))}function se(){if(e)return;const ne=n.read(),fe=n.readUnits(),ee=(ne.links??[]).slice(0,ea);t&&(!n.editable()||!fe.some(A=>A.id===t&&ci(A.position)))&&xe();const te=oe(fe),R=fe.find(A=>A.id===te),me=D.value,ue=[p("跟随选中单位",""),...fe.filter(A=>ci(A.position)).map(A=>p(A.label,A.id))];C.replaceChildren(...ue),C.value=ue.some(A=>A.value===te)?te:"";const He=[p("选择目标","")];for(const A of fe)A.id!==te&&ci(A.position)&&He.push(p(`单位：${A.label}`,Id({kind:"unit",id:A.id})));for(const A of ne.markers)ci(A.position)&&He.push(p(`标记：${A.label}`,Id({kind:"marker",id:A.id})));D.replaceChildren(...He),D.value=He.some(A=>A.value===me)?me:"",ee.some(A=>A.id===r)||(r=ee[0]?.id??""),I.replaceChildren(...ee.map(A=>{const y=fe.find(Z=>Z.id===A.fromUnitId)?.label??A.fromUnitId,O=(A.to.kind==="unit"?fe:ne.markers).find(Z=>Z.id===A.to.id)?.label??A.to.id;return p(`${y} → ${O}${A.visible===!1?" · 隐藏":""}`,A.id)})),I.value=r;const pe=ee.find(A=>A.id===r),Ie=pe?`${pe.id}|${pe.color}|${pe.visible!==!1}`:"";Ie!==s&&(s=Ie,pe?(M.value=na(pe.color)?pe.color.toLowerCase():"#ff6935",N.value=ta.find(([A])=>A===M.value)?.[0]??"custom",F.checked=pe.visible!==!1):F.checked=!0);const ae=q(),Ae=ci(R?.position);x.disabled=!t&&(!ae||!Ae||ee.length>=ea),x.setAttribute("aria-pressed",String(!!t)),v.disabled=!t,C.disabled=!ae||!!t,D.disabled=!ae,N.disabled=M.disabled=!ae,S.disabled=!ae||!Ae||!D.value||ee.length>=ea,F.disabled=G.disabled=J.disabled=!ae||!pe,P.textContent=`源：${R?.label??"未选择"}${t?" · 连线中":""}`;const we=cp(D.value),Ce=we&&(we.kind==="unit"?fe:ne.markers).find(A=>A.id===we.id)?.label;Y.textContent=o||(Ce?`目标：${Ce}`:""),Te()}function je(){if(!e){xe(),e=!0,typeof removeEventListener=="function"&&removeEventListener("keydown",de);for(const ne of h)ne.element.removeEventListener(ne.event,ne.run);for(const ne of c.values())Q(ne);c.clear(),n.world.remove(a),d.remove()}}return se(),{sync:se,update:Te,active:()=>!e&&!!t,pick:xt,cancel:We,dispose:je}}function ym(n,e){const t=e.x-n.x,i=n.z-e.z;return!Number.isFinite(t)||!Number.isFinite(i)||t===0&&i===0?void 0:(Math.atan2(t,i)*180/Math.PI%360+360)%360}function Sm(n,e){const t=ym(n,e);return t===void 0?"方位角未定义（起终点水平重合，N=0°）":`方位角 ${Math.round(t*100)/100%360}° (N=0°)`}const ZM=.12,KM=1e5,JM=1e3,Ca=n=>({x:n.x,y:n.y,z:n.z}),bm=n=>({pitch:n.pitch,yaw:n.yaw,roll:n.roll});function dl(n){if(!n||!["x","y","z"].every(e=>{const t=n[e];return Number.isFinite(t)&&Math.abs(t)<=KM}))throw new RangeError("Marker coordinates must be finite and within +/-100000 km")}function Mm(n){if(!Number.isFinite(n)||n<=0||n>JM)throw new RangeError("Marker size must be positive and at most 1000 km")}function wm(n){if(!n||![n.pitch,n.yaw,n.roll].every(Number.isFinite))throw new RangeError("Marker attitude must contain finite radians")}function Ci(n){return["line","arrow","circle","square","sphere"].includes(n.symbol)}function Pa(n){const e=n.attitude??{pitch:0,yaw:0,roll:0};return wm(e),new mn().setFromEuler(new ii(e.pitch,e.yaw,e.roll,"YXZ"))}function Em(n){const e=new b((n.sizeKm??ZM)/2,0,0).applyQuaternion(Pa(n)),t=n.position;return[{x:t.x-e.x,y:t.y-e.y,z:t.z-e.z},{x:t.x+e.x,y:t.y+e.y,z:t.z+e.z}]}function gs(n){if(n.controlPoints!==void 0){if(n.controlPoints.length!==2)throw new RangeError("Marker control points must contain exactly two points");return[Ca(n.controlPoints[0]),Ca(n.controlPoints[1])]}return Em(n)}function Zc(n,e){if(!Array.isArray(e)||e.length!==2)throw new RangeError("Marker control points must contain exactly two points");const[t,i]=e;dl(t),dl(i);const r=i.x-t.x,s=i.y-t.y,o=i.z-t.z,a=Math.hypot(r,s,o);Mm(a);const c=Pa(n),l=new b(1,0,0).applyQuaternion(c).normalize(),d=new b(r/a,s/a,o/a);let u;if(n.attitude!==void 0&&l.distanceTo(d)<=16*Number.EPSILON)u=bm(n.attitude);else{const h=new mn().setFromUnitVectors(l,d).multiply(c).normalize(),f=new ii().setFromQuaternion(h,"YXZ");u={pitch:f.x,yaw:f.y,roll:f.z}}return{...n,position:{x:(t.x+i.x)/2,y:(t.y+i.y)/2,z:(t.z+i.z)/2},attitude:u,sizeKm:a,controlPoints:[Ca(t),Ca(i)]}}function Tm(n,e,t,i){dl(e),wm(t),Mm(i);const r={...n,position:Ca(e),attitude:bm(t),sizeKm:i};return n.controlPoints!==void 0&&(r.controlPoints=Em(r),r.controlPoints.forEach(dl)),r}const Qn=n=>({x:n.x,y:n.y,z:n.z}),qn=n=>new b(n.x,n.y,n.z).multiplyScalar(tt),ys=(n,e)=>Math.hypot(e.x-n.x,e.y-n.y,e.z-n.z),Gr=n=>`${n}-${crypto.randomUUID()}`,Mr=n=>Number(n.toFixed(5)).toString(),Nd=n=>[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=1e5),QM=(n,e)=>({horizontal:Math.hypot(e.x-n.x,e.z-n.z),deltaY:e.y-n.y,slant:ys(n,e)}),Am=(n,e)=>{const t=QM(n,e);return`水平 ${Mr(t.horizontal)} km · 高差 ${t.deltaY>=0?"+":""}${Mr(t.deltaY)} km · 斜距 ${Mr(t.slant)} km`},wn=n=>n==="measure"||n==="bearing",Hc=n=>({measure:"测距",bearing:"方位角",circle:"圆规",sphere:"范围球"})[n],ia=n=>n.kind==="bearing"?Sm(n.points[0],n.points[1]):Am(n.points[0],n.points[1]),lp=(n,e,t,i)=>t==="sphere"?ys(n,e):i==="xz"?Math.hypot(e.x-n.x,e.z-n.z):i==="xy"?Math.hypot(e.x-n.x,e.y-n.y):Math.hypot(e.y-n.y,e.z-n.z);function ew(n){let e=!1,t="",i="",r="",s=null,o=!1,a,c="",l=n.editable(),d=!1,u=null,h=null;const f=new Cn,g=new Cn;f.name="Editor markers and drawings",g.name="Editor tool preview",f.userData.editorTools=!0,g.userData.editorTools=!0,n.world.add(f,g);const _=document.createElement("div");_.className="editor-tools-labels",_.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;",n.labelRoot.append(_);const m=[],p=[],w=document.createElement("style");w.textContent=`
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
  `,n.markersPanel.append(w);const x=(E,L="")=>{const k=document.createElement(E);return k.textContent=L,k},v=(E,L)=>{E.classList.add("scene-tool-panel"),E.append(x("h3",L))};v(n.markersPanel,"自定义标记点"),v(n.drawingsPanel,"标尺与圆规");const C=x("p"),P=x("p");C.id="marker-status",P.id="drawing-status";for(const E of[C,P])E.className="tool-status",E.setAttribute("role","status");const D=(E,L=u?.kind==="marker"?"markers":"drawing")=>{(L==="markers"?C:P).textContent=E},N=E=>(p.push(E),E),M=E=>{const L=x("div");return L.className="tool-actions",E.append(L),L},S=(E,L,k,B,$=!0)=>{const ce=x("button",k);return ce.type="button",ce.id=L,ce.addEventListener("click",()=>{if(!(e||$&&!n.editable()))try{B()}catch(le){D(le instanceof Error?le.message:String(le),L.startsWith("marker-")?"markers":"drawing")}}),E.append(ce),$&&N(ce),ce},I=(E,L,k,B=!0)=>{const $=x("details");return $.id=L,$.open=B,$.append(x("summary",k)),E.append($),$},F=(E,L,k,B,$="text")=>{const ce=x("label");ce.className="tool-row",ce.append(x("span",k));const le=N(x("input"));return le.id=L,le.type=$,le.value=B,$==="number"?le.step="any":$==="text"&&(le.maxLength=128),ce.append(le),E.append(ce),le},V=(E,L,k,B,$=!0)=>{const ce=x("label");ce.className="tool-row",ce.append(x("span",k));const le=x("select");return le.id=L,le.setAttribute("aria-label",k),B.forEach(([et,Oe])=>le.add(new Option(Oe,et))),ce.append(le),E.append(ce),$&&N(le),le},G=E=>{if(!E.value.trim()||!Number.isFinite(E.valueAsNumber))throw new Error("请填写有效数值");return E.valueAsNumber},J=(E,L,k,B)=>{const $=x("div");$.className="tool-xyz",E.append(x("p",k),$);const ce={};for(const le of["x","z","y"]){const et=le==="y"?"Z":le==="z"?"Y":"X",Oe=x("label",`${et}（km）`),Ut=N(x("input"));Ut.id=`${L}-${le}`,Ut.type="number",Ut.step="any",Ut.value=String(B[le]),Ut.setAttribute("aria-label",`${k} ${et}（km）`),Oe.append(Ut),$.append(Oe),ce[le]=Ut}return{row:$,fields:ce,read:()=>{const le={x:G(ce.x),y:G(ce.y),z:G(ce.z)};if(!Nd(le))throw new Error("点位坐标须为有限数值，绝对值不超过100000 km");return le},set:le=>{for(const et of["x","y","z"])ce[et].value=String(le[et])}}},Y=E=>/^#[0-9a-f]{6}$/i.test(E.value)?E.value.toLowerCase():"#ffd84a",de=(E,L)=>E.value.trim().slice(0,128)||L,q=E=>{for(const L of[...E.children])E.remove(L),L.traverse(k=>{(k instanceof Ee||k instanceof nn||k instanceof Yp)&&(k.geometry.dispose(),(Array.isArray(k.material)?k.material:[k.material]).forEach($=>$.dispose()))})},oe=(E,L,k=1)=>new nn(new kt().setFromPoints(E),new bi({color:L,transparent:!0,opacity:k,depthWrite:!1})),xe=(E,L,k,B=.045)=>{const $=new Ee(new Kr(B*tt,10,8),new yn({color:k,depthWrite:!1}));return $.position.copy(qn(L)),E.add($),$},We=(E,L)=>{L==="xz"?E.rotation.x=-Math.PI/2:L==="yz"&&(E.rotation.y=Math.PI/2)},it=(E,L)=>Array.from({length:129},(k,B)=>{const $=B/128*Math.PI*2,ce=Math.cos($)*E,le=Math.sin($)*E;return L==="xy"?new b(ce,le,0):L==="yz"?new b(0,ce,le):new b(ce,0,le)}),gt=(E,L,k=!1)=>{const B=new Cn;B.position.copy(qn(L.position)),B.quaternion.copy(Pa(L)),E.add(B),B.userData.markerSize=L.sizeKm??.12;const $=tt*(L.sizeKm??.12),ce=L.color,le=k?.65:1,et=le*Math.min(.6,Math.max(.02,L.opacity??.12));if(L.symbol==="cross")B.add(oe([new b(-$,.4,-$),new b($,.4,$)],ce,le)),B.add(oe([new b(-$,.4,$),new b($,.4,-$)],ce,le));else if(L.symbol==="flag"){B.add(oe([new b(0,.2,0),new b(0,$*3,0)],ce,le));const Oe=new Ee(new Jr($*1.6,$),new yn({color:ce,transparent:!0,opacity:.5,side:fn,depthWrite:!1}));Oe.position.set($*.8,$*2.5,0),B.add(Oe)}else if(L.symbol==="pin"){B.add(oe([new b(0,.2,0),new b(0,$*2.5,0)],ce,le));const Oe=new Ee(new Ms($*.6),new yn({color:ce,transparent:k,opacity:le,depthWrite:!1}));Oe.position.y=$*2.5,B.add(Oe),B.add(oe(it($*.7,"xz"),ce,le))}else if(L.symbol==="line"||L.symbol==="arrow")B.add(oe([new b(-$/2,0,0),new b($/2,0,0)],ce,le)),L.symbol==="arrow"&&B.add(oe([new b($*.25,0,-$*.2),new b($/2,0,0),new b($*.25,0,$*.2)],ce,le));else if(L.symbol==="circle"){const Oe=new Ee(new wa($/2,64),new yn({color:ce,transparent:!0,opacity:et,side:fn,depthWrite:!1}));We(Oe,"xz"),B.add(Oe,oe(it($/2,"xz"),ce,le))}else if(L.symbol==="square"){const Oe=$/2,Ut=new Ee(new Jr($,$),new yn({color:ce,transparent:!0,opacity:et,side:fn,depthWrite:!1}));We(Ut,"xz"),B.add(Ut,oe([new b(-Oe,0,-Oe),new b(Oe,0,-Oe),new b(Oe,0,Oe),new b(-Oe,0,Oe),new b(-Oe,0,-Oe)],ce,le))}else if(L.symbol==="sphere"){B.add(new Ee(new Kr($/2,32,20),new yn({color:ce,transparent:!0,opacity:et,side:fn,depthWrite:!1})));for(const Oe of["xz","xy","yz"])B.add(oe(it($/2,Oe),ce,le*.7))}else B.add(oe([new b(-$*.6,.4,0),new b($*.6,.4,0)],ce,le));return["circle","square","sphere"].includes(L.symbol)&&B.children.filter(Oe=>Oe instanceof Ee).forEach(Oe=>{Oe.visible=L.filled!==!1}),k||B.traverse(Oe=>{Oe.userData.editorTool={kind:"marker",id:L.id}}),!k&&L.id===t&&Ci(L)&&gs(L).forEach((Oe,Ut)=>{const Xt=qn(Oe).sub(qn(L.position)).applyQuaternion(B.quaternion.clone().invert()),lr=xe(B,{x:Xt.x/tt,y:Xt.y/tt,z:Xt.z/tt},ce);lr.userData.editorTool={kind:"marker",id:L.id,pointIndex:Ut}}),B},xt=(E,L)=>{const[k,B]=L.points;if(!k||!B)return;E.position.copy(qn(k)),E.position.y+=.3;const $=(B.x-k.x)*tt,ce=(B.z-k.z)*tt,le=Math.hypot($,ce),et=ym(k,B),Oe=Math.min(.6*tt,Math.max(.1*tt,le*.25)),Ut=(et??0)*Math.PI/180;for(const Xt of E.children)if(Xt instanceof nn){let lr;if(Xt.name==="bearing-direction")lr=[new b,new b($,0,ce)];else if(Xt.name==="bearing-north-reference")lr=[new b,new b(0,0,-Oe*1.3)];else if(Xt.name==="bearing-arc")lr=Array.from({length:65},(Oi,Gs)=>{const ss=Ut*Gs/64;return new b(Math.sin(ss)*Oe,0,-Math.cos(ss)*Oe)}),Xt.visible=et!==void 0&&et>0;else{const Oi=Math.min(Oe*.3,le*.2),Gs=le?$/le:0,ss=le?ce/le:0;lr=[new b($-Gs*Oi-ss*Oi*.5,0,ce-ss*Oi+Gs*Oi*.5),new b($,0,ce),new b($-Gs*Oi+ss*Oi*.5,0,ce-ss*Oi-Gs*Oi*.5)],Xt.visible=et!==void 0}Xt.geometry.setFromPoints(lr),Xt.geometry.computeBoundingSphere(),Xt.material instanceof cf&&(Xt.material.dashSize=Oe*.12,Xt.material.gapSize=Oe*.09,Xt.computeLineDistances())}else Xt.userData.bearingEndpoint!==void 0&&Xt.position.set(Xt.userData.bearingEndpoint===1?$:0,0,Xt.userData.bearingEndpoint===1?ce:0)},Q=(E,L,k=!1)=>{const B=new Cn;E.add(B),k||(B.userData.editorTool={kind:"drawing",id:L.id});const $=L.color,ce=Math.min(.6,Math.max(.02,L.opacity??.12));if(L.kind==="bearing"){if(L.points.length<2)return B;const le=oe([new b,new b],$,k?.65:.95);le.name="bearing-direction";const et=new nn(new kt().setFromPoints([new b,new b]),new cf({color:$,transparent:!0,opacity:k?.5:.75,depthWrite:!1,depthTest:!1}));et.name="bearing-north-reference";const Oe=oe(Array.from({length:65},()=>new b),$,k?.55:.85);Oe.name="bearing-arc";const Ut=oe([new b,new b,new b],$,k?.65:.95);Ut.name="bearing-arrow",B.add(le,et,Oe,Ut),L.points.forEach((Xt,lr)=>{const Oi=xe(B,{x:0,y:0,z:0},$);Oi.userData.bearingEndpoint=lr,k||(Oi.userData.editorTool={kind:"drawing",id:L.id,pointIndex:lr})}),B.traverse(Xt=>{(Xt instanceof nn||Xt instanceof Ee)&&(Xt.material.depthTest=!1,Xt.renderOrder=40)}),xt(B,L)}else if(L.kind==="measure"){if(L.points.length<2)return B;B.add(oe(L.points.map(qn),$,k?.65:.9)),L.points.forEach((le,et)=>{const Oe=xe(B,le,$);k||(Oe.userData.editorTool={kind:"drawing",id:L.id,pointIndex:et})})}else{const le=L.points[0],et=(L.radiusKm??0)*tt;if(!le||et<=0)return B;B.position.copy(qn(le));const Oe=L.plane??"xz";if(L.kind==="circle"){const Ut=new Ee(new wa(et,96),new yn({color:$,transparent:!0,opacity:k?ce/2:ce,side:fn,depthWrite:!1}));We(Ut,Oe),Oe==="xz"&&(Ut.position.y=.3),Ut.visible=L.filled!==!1,B.add(Ut,oe(it(et,Oe),$,k?.55:.8)),xe(B,{x:0,y:0,z:0},$)}else{const Ut=new Ee(new Kr(et,40,24),new yn({color:$,transparent:!0,opacity:k?ce/2:ce,side:fn,depthWrite:!1}));Ut.visible=L.filled!==!1,B.add(Ut);for(const Xt of["xz","xy","yz"])B.add(oe(it(et,Xt),$,k?.35:.5));xe(B,{x:0,y:0,z:0},$)}}return B},Te=(E,L,k,B,$,ce,le)=>{const et=new vn;et.position.copy(L),E.add(et);const Oe=x("button",k);return Oe.type="button",Oe.title=$,Oe.style.setProperty("--tool-color",B),Oe.addEventListener("click",Ut=>{Ut.stopPropagation(),ce()}),Oe.addEventListener("dblclick",Ut=>{Ut.stopPropagation(),le()}),_.append(Oe),m.push({object:et,element:Oe}),Oe},se=V(n.markersPanel,"marker-list","标记列表",[],!1);se.size=5;const je=M(n.markersPanel);S(je,"marker-focus","定位",()=>{const E=si();E&&n.focus(Qn(E.position))},!1);const ne=V(n.markersPanel,"marker-endpoint","移动目标",[["whole","整体"],["a","端点 A"],["b","端点 B"]],!1),fe=S(je,"marker-move","三轴移动",()=>{si()&&(st(t,!0,a),n.onTransformMode?.("translate"))}),ee=S(je,"marker-rotate","旋转",()=>{si()&&(st(t),n.onTransformMode?.("rotate"))}),te=S(je,"marker-scale","缩放",()=>{si()&&(st(t),n.onTransformMode?.("scale"))});S(je,"marker-copy","复制",()=>{const E=si();if(!E)throw new Error("请先选择标记");const L={...E,...E.attitude?{attitude:{...E.attitude}}:{},id:Gr("marker"),label:`${E.label.slice(0,122)} 副本`,position:{...E.position,x:E.position.x+.2,z:E.position.z+.2}};L.controlPoints&&(L.controlPoints=L.controlPoints.map(k=>({...k,x:k.x+.2,z:k.z+.2}))),j("复制标记",k=>k.markers.push(L),"markers",()=>{Xn("marker",L.id)})}),S(je,"marker-delete","删除",()=>{const E=t;if(!E)throw new Error("请先选择标记");j("删除标记",L=>{L.markers=L.markers.filter(k=>k.id!==E),L.links&&(L.links=L.links.filter(k=>k.to.kind!=="marker"||k.to.id!==E))},"markers",()=>{Xn("marker","")})});const R=I(n.markersPanel,"marker-properties","标记属性与位置"),me=F(R,"marker-label","名称","标记"),ue=F(R,"marker-color","颜色","#ffd84a","color"),He=V(R,"marker-symbol","符号",[["pin","定位针"],["cross","十字"],["flag","旗帜"],["text","文字"],["line","线段（长度）"],["arrow","箭头（长度）"],["circle","圆（直径）"],["square","正方形（边长）"],["sphere","球（直径）"]]),pe=F(R,"marker-size","尺寸（km）",".12","number");pe.min=".00001",pe.max="1000";const Ie=F(R,"marker-filled","填充","","checkbox");Ie.checked=!0;const ae=F(R,"marker-opacity","填充透明度",".12","number");ae.min=".02",ae.max=".6",ae.step=".01";const Ae=F(R,"marker-visible","显示标记","","checkbox");Ae.checked=!0;const we={pitch:F(R,"marker-pitch","俯仰 X°","0","number"),yaw:F(R,"marker-yaw","方向 Z°","0","number"),roll:F(R,"marker-roll","翻滚 Y°","0","number")},Ce=J(R,"marker-position","位置",{x:0,y:0,z:0}),A=F(R,"marker-height","高度（m）","0","number"),y=()=>{A.value=Ce.fields.y.value.trim()?String(Ce.fields.y.valueAsNumber*1e3):""},O=J(R,"marker-a","端点 A",{x:-.06,y:0,z:0}),Z=J(R,"marker-b","端点 B",{x:.06,y:0,z:0}),X=F(R,"marker-a-height","端点 A 高度（m）","0","number"),W=F(R,"marker-b-height","端点 B 高度（m）","0","number"),ke=x("label");ke.className="tool-row",ke.append(x("span","说明"));const _e=N(x("textarea"));_e.id="marker-description",_e.maxLength=4096,ke.append(_e),R.append(ke);const $e=M(R),Ye=S($e,"marker-apply","应用所选标记",()=>{const E=t;if(!E)throw new Error("请先选择标记");const L=T(E);j("修改标记",k=>{const B=k.markers.findIndex($=>$.id===E);if(B<0)throw new Error("标记已被移除");k.markers[B]=L},"markers")});S($e,"marker-ground","坐标贴地",()=>{const E=Ce.read();E.y=n.sampleHeightKm(E.x,E.z),Ce.set(E),y(),D("地形高度已填入","markers")});const be=I(n.markersPanel,"marker-create","新增标记"),Pe=M(be);S(Pe,"marker-pick","点地图放置",()=>{const E=T(Gr("marker"),{x:0,y:0,z:0});Lt({kind:"marker",marker:E}),n.onOpenPanel?.("markers"),D("标记放置中","markers")}),S(Pe,"marker-pick-two","两点确认方向与尺寸",()=>{const E=T(Gr("marker"),{x:0,y:0,z:0});if(!Ci(E))throw new Error("请选择线段、箭头、圆、正方形或球");Lt({kind:"marker",marker:E,twoPoint:!0}),n.onOpenPanel?.("markers"),D("端点 A 选择中","markers")}),S(Pe,"marker-add-position","按坐标新增",()=>{const E=T(Gr("marker"));j("新增标记",L=>L.markers.push(E),"markers",()=>{Xn("marker",E.id)})}),S(Pe,"marker-new","清空选择／新标记",()=>{Xn("marker",""),H(),lt(),$t(),ft(),Ur()},!1),S(Pe,"marker-cancel","取消放置",oi,!1),n.markersPanel.append(C);const Ze=V(n.drawingsPanel,"drawing-list","标尺／图形列表",[],!1);Ze.size=5;const Ke=M(n.drawingsPanel);S(Ke,"drawing-focus","定位",()=>{const E=Ti();E&&an(E)},!1);const Re=V(n.drawingsPanel,"drawing-endpoint","移动目标",[["whole","整体"],["a","端点 A"],["b","端点 B"]],!1),mt=S(Ke,"drawing-move","三轴移动",()=>{Ti()?.points[0]&&bt(i,!0,a)});S(Ke,"drawing-copy","复制",()=>{const E=Ti();if(!E)throw new Error("请先选择标尺或图形");const L={...E,id:Gr("drawing"),label:`${E.label.slice(0,122)} 副本`,points:E.points.map(k=>({...k,x:k.x+.2,z:k.z+.2}))};j("复制制图标尺",k=>k.drawings.push(L),"drawing",()=>{Xn("drawing",L.id)})}),S(Ke,"drawing-delete","删除",()=>{const E=i;if(!E)throw new Error("请先选择标尺或图形");j("删除制图标尺",L=>{L.drawings=L.drawings.filter(k=>k.id!==E)},"drawing",()=>{Xn("drawing","")})});const U=I(n.drawingsPanel,"drawing-properties","标尺属性与坐标"),ye=F(U,"drawing-label","名称","测距"),Se=V(U,"drawing-kind","类型",[["measure","自由测距"],["bearing","水平方位角（N=0°）"],["circle","平面圆规"],["sphere","立体半透明球"]]),Xe=F(U,"drawing-color","颜色","#2d8cff","color"),ge=F(U,"drawing-visible","显示图形","","checkbox");ge.checked=!0;const re=F(U,"drawing-filled","填充","","checkbox");re.checked=!0;const qe=F(U,"drawing-opacity","填充透明度",".12","number");qe.min=".02",qe.max=".6",qe.step=".01";const ie=V(U,"drawing-plane","圆规平面",[["xz","XY 水平"],["xy","XZ 垂直"],["yz","YZ 垂直"]]),Ne=J(U,"drawing-a","起点／中心",{x:0,y:0,z:0}),Fe=F(U,"drawing-height","高度（m）","0","number"),ht=J(U,"drawing-b","终点",{x:1,y:0,z:0}),Mt=F(U,"drawing-b-height","终点高度（m）","0","number"),Bo=()=>{Fe.value=Ne.fields.y.value.trim()?String(Ne.fields.y.valueAsNumber*1e3):"",Mt.value=ht.fields.y.value.trim()?String(ht.fields.y.valueAsNumber*1e3):""},kn=F(U,"drawing-radius","半径（km）","2","number");kn.min=".00001",kn.max="1000";const Ir=x("p");Ir.id="drawing-readout",U.append(Ir);const Ho=M(U),Vo=S(Ho,"drawing-apply","应用所选图形",()=>{const E=i;if(!E)throw new Error("请先选择标尺或图形");const L=z(E);j("修改制图标尺",k=>{const B=k.drawings.findIndex($=>$.id===E);if(B<0)throw new Error("图形已被移除");k.drawings[B]=L},"drawing")});S(Ho,"drawing-ground","起点／中心贴地",()=>{const E=Ne.read();E.y=n.sampleHeightKm(E.x,E.z),Ne.set(E),Ge(),D("地形高度已填入","drawing")});const Nr=I(n.drawingsPanel,"drawing-create","测距与制图"),ns=M(Nr);S(ns,"drawing-pick-measure","点选两点测距",()=>Fn("measure")),S(ns,"drawing-pick-bearing","点选两点测方位角",()=>Fn("bearing"));const Vs=x("p","方位角：正北 N=0°，顺时针 E=90°、S=180°、W=270°；仅按水平位置计算。");Nr.append(Vs),S(ns,"drawing-pick-circle","圆规：中心＋半径点",()=>Fn("circle")),S(ns,"drawing-pick-sphere","球体：中心＋半径点",()=>Fn("sphere"));const is=M(Nr);S(is,"drawing-add-position","按坐标／半径新增",()=>{const E=z(Gr("drawing"));j("新增制图标尺",L=>L.drawings.push(E),"drawing",()=>{Xn("drawing",E.id)})}),S(is,"drawing-pick-center","点地图定中心＋输入半径",()=>{const E=Se.value;if(wn(E))throw new Error("请选择平面圆规或球体，再使用输入半径方式");const L=z(Gr("drawing"),!0),k=G(kn);if(k<=0||k>1e3)throw new Error("半径须大于0且不超过1000 km");L.radiusKm=k,Lt({kind:E,drawing:L}),$i=!0,D("中心点放置中","drawing")}),S(is,"drawing-new","清空选择／新图形",()=>{Xn("drawing",""),Me(),lt(),ft(),Ur()},!1),S(is,"drawing-cancel","取消作图",oi,!1),n.drawingsPanel.append(P);let $i=!1;function si(){return n.read().markers.find(E=>E.id===t)}function Ti(){return n.read().drawings.find(E=>E.id===i)}function nc(){if(e||!s)return null;const E=n.read(),L=s==="marker"?t:i,k=s==="drawing"?E.drawings.find(le=>le.id===L):void 0,B=s==="marker"?E.markers.find(le=>le.id===L):void 0,$=wn(k?.kind)||B&&Ci(B)?a:void 0,ce=B?$===void 0?B.position:gs(B)[$]:k?.points[$??0];return L&&ce?{kind:s,id:L,position:Qn(ce),...$===void 0?{}:{pointIndex:$}}:null}function Ur(E=!1){if(e||d)return;const L=nc(),k=L?JSON.stringify([L.kind,L.id,L.pointIndex]):"",B=n.editable(),$=k!==c||!!L&&B!==l;if(c=k,l=B,!(!$&&!E)){d=!0;try{n.onSelectionChange?.(L)}finally{d=!1}}}function Xn(E,L,k){E==="marker"?t=L:i=L,a=k,L?s=E:s===E&&(s=null)}function Ol(){e||(t="",i="",a=void 0,s=null,H(),Me(),lt(),$t(),ft(),Ur())}function T(E,L){const k=G(pe);if(k<=0||k>1e3)throw new Error("尺寸须大于0且不超过1000 km");const B={id:E,label:de(me,"标记"),position:L??Ce.read(),color:Y(ue),symbol:He.value,sizeKm:k,visible:Ae.checked};if(["circle","square","sphere"].includes(B.symbol)){const le=G(ae);if(le<.02||le>.6)throw new Error("透明度范围为0.02–0.6");const et=n.read().markers.find(Oe=>Oe.id===E);(!et||et.filled!==void 0||!Ie.checked)&&(B.filled=Ie.checked),(!et||et.opacity!==void 0||le!==.12)&&(B.opacity=le)}const $=_e.value.trim().slice(0,4096);$&&(B.description=$);const ce=n.read().markers.find(le=>le.id===E);if(Ci(B)){ce?.controlPoints&&(B.controlPoints=ce.controlPoints.map(Qn));const le={pitch:0,yaw:0,roll:0};for(const et of["pitch","yaw","roll"]){const Oe=ce?.attitude?.[et]??0;le[et]=we[et].value===String(jt.radToDeg(Oe))?Oe:jt.degToRad(G(we[et]))}if((ce?.attitude||Object.values(le).some(et=>et!==0))&&(B.attitude=le),o&&!L)return Zc(B,[O.read(),Z.read()]);if(B.controlPoints&&ce&&(ys(ce.position,B.position)>0||B.sizeKm!==ce.sizeKm||JSON.stringify(B.attitude)!==JSON.stringify(ce.attitude)))return Tm(B,B.position,le,k)}return B}function z(E,L=!1){const k=Se.value,B=L?{x:0,y:0,z:0}:Ne.read(),$={id:E,label:de(ye,Hc(k)),kind:k,points:wn(k)?[B,L?Qn(B):ht.read()]:[B],color:Y(Xe),visible:ge.checked};if(!wn(k)){const ce=L?1:G(kn),le=G(qe);if(ce<=0||ce>1e3)throw new Error("半径须大于0且不超过1000 km");if(le<.02||le>.6)throw new Error("透明度范围为0.02–0.6");$.radiusKm=ce,$.opacity=le,$.plane=ie.value;const et=n.read().drawings.find(Oe=>Oe.id===E);(!et||et.filled!==void 0||!re.checked)&&($.filled=re.checked)}return $}function j(E,L,k,B){if(!n.editable())return D("只读",k),!1;try{const $=n.change(E,L);return $?(B?.(),B&&(r=""),Wt(),D(`${E}已保存`,k)):D("操作未保存或内容没有变化",k),$}catch($){return D($ instanceof Error?$.message:String($),k),!1}}function K(E,L,k,B){const $=u,ce=h,le=$i;u=null,n.onPickingChange(!1);const et=j(E,L,k,B);if(et)h=null,$i=!1,q(g);else if($&&n.editable()&&!e){const Oe=(k==="markers"?C:P).textContent;u=$,h=ce,$i=le,n.onPickingChange(!0),On(),D(Oe||"未保存",k)}return et}function H(){const E=si();me.value=E?.label??"标记",ue.value=E?.color??"#ffd84a",He.value=E?.symbol??"pin",Ae.checked=E?.visible!==!1,_e.value=E?.description??"",pe.value=String(E?.sizeKm??.12),Ie.checked=E?.filled!==!1,ae.value=String(E?.opacity??.12),Qe(),Ce.set(E?.position??{x:0,y:0,z:0}),y(),o=!1;for(const k of["pitch","yaw","roll"])we[k].value=String(jt.radToDeg(E?.attitude?.[k]??0));const L=gs(E??{position:{x:0,y:0,z:0}});O.set(L[0]),Z.set(L[1]),Zn(),s==="marker"&&(!E||!Ci(E))&&(a=void 0),ne.value=s==="marker"&&a===0?"a":s==="marker"&&a===1?"b":"whole",ne.closest("label").hidden=!E||!Ci(E),Ye.disabled=!n.editable()||!E,fe.disabled=!n.editable()||!E,ee.disabled=te.disabled=!n.editable()||!E||!Ci(E)}function Me(){const E=Ti();ye.value=E?.label??"测距",Se.value=E?.kind??"measure",Xe.value=E?.color??"#2d8cff",re.checked=E?.filled!==!1,ge.checked=E?.visible!==!1,qe.value=String(E?.opacity??.12),ie.value=E?.plane??"xz",kn.value=String(E?.radiusKm??2),Ne.set(E?.points[0]??{x:0,y:0,z:0}),ht.set(E?.points[1]??{x:1,y:0,z:0}),Ve(),Bo(),Vo.disabled=!n.editable()||!E,mt.disabled=!n.editable()||!E?.points[0],Ge()}function Ve(){const E=Ti();s==="drawing"&&(!wn(E?.kind)||a!==void 0&&!E?.points[a])&&(a=void 0),Re.value=s==="drawing"&&a===0?"a":s==="drawing"&&a===1?"b":"whole",Re.closest("label").hidden=!wn(E?.kind),Re.disabled=!wn(E?.kind)}function Qe(){const E=["line","arrow","circle","square","sphere"].includes(He.value),L=["circle","square","sphere"].includes(He.value);Ie.closest("label").hidden=!L;for(const k of Object.values(we))k.closest("label").hidden=!E;for(const k of[O.row,Z.row])k.hidden=!E;X.closest("label").hidden=!E,W.closest("label").hidden=!E,ae.closest("label").hidden=!L,ae.disabled=!n.editable()||!Ie.checked}function Ge(){const E=Se.value,L=wn(E);ht.row.hidden=!L;const k=ht.row.previousElementSibling;k&&(k.hidden=!L),kn.closest("label").hidden=L,qe.closest("label").hidden=L,ie.closest("label").hidden=E!=="circle",re.closest("label").hidden=L,Mt.closest("label").hidden=!L,qe.disabled=!n.editable()||!re.checked,Bo();try{Ir.textContent=E==="bearing"?Sm(Ne.read(),ht.read()):E==="measure"?Am(Ne.read(),ht.read()):`半径 ${Mr(G(kn))} km · 直径 ${Mr(G(kn)*2)} km${E==="circle"?` · ${{xz:"XY",xy:"XZ",yz:"YZ"}[ie.value]}平面`:" · 3D范围"}`}catch{Ir.textContent="—"}}function lt(){const E=n.read();se.replaceChildren(...E.markers.map(L=>new Option(`${L.visible===!1?"隐藏 · ":""}${L.label}`,L.id))),se.value=t,Ze.replaceChildren(...E.drawings.map(L=>new Option(`${L.visible===!1?"隐藏 · ":""}${Hc(L.kind)} · ${L.label}${wn(L.kind)&&L.points[1]?` · ${ia(L)}`:` · R ${Mr(L.radiusKm??0)} km`}`,L.id))),Ze.value=i}function ft(){for(const E of m)E.element.setAttribute("aria-pressed",String(E.element.dataset.markerId?E.element.dataset.markerId===t:E.element.dataset.drawingId===i))}function st(E,L=!0,k){if(n.read().markers.some($=>$.id===E)&&n.onMarkerPick?.(E)){lt();return}const B=n.read().markers.find($=>$.id===E);Xn("marker",B?E:"",B&&Ci(B)?k:void 0),H(),lt(),$t(),ft(),Ur(L&&!!t),n.onOpenPanel?.("markers")}function bt(E,L=!0,k){const B=n.read().drawings.find($=>$.id===E);Xn("drawing",B?E:"",wn(B?.kind)&&k!==void 0&&B?.points[k]?k:void 0),Me(),lt(),ft(),Ur(L&&!!i),n.onOpenPanel?.("drawing")}function Gt(E){if(e)return!1;let L=E;for(;L&&L!==f;)L=L.parent;if(!L)return!1;for(let k=E;k&&k!==f;k=k.parent){const B=k.userData.editorTool;if(B?.id){if(B.kind==="marker"&&n.read().markers.some($=>$.id===B.id))return st(B.id,!0,B.pointIndex),!0;if(B.kind==="drawing"&&n.read().drawings.some($=>$.id===B.id))return bt(B.id,!0,B.pointIndex),!0}}return!1}function an(E){const L=E.points[0];if(!L)return;const k=E.points[1];wn(E.kind)&&k?n.focus({x:(L.x+k.x)/2,y:E.kind==="bearing"?L.y:(L.y+k.y)/2,z:(L.z+k.z)/2},Math.max(.2,(E.kind==="bearing"?Math.hypot(k.x-L.x,k.z-L.z):ys(L,k))/2)):n.focus(Qn(L),E.radiusKm)}function $t(){for(const E of f.children){if(E.userData.editorTool?.kind!=="marker")continue;for(const k of[...E.children])k.userData.editorTool?.pointIndex!==void 0&&(k.traverse(B=>{B instanceof Ee&&(B.geometry.dispose(),B.material.dispose())}),E.remove(k));const L=n.read().markers.find(k=>k.id===E.userData.editorTool.id);!L||L.id!==t||!Ci(L)||gs(L).forEach((k,B)=>{const $=qn(k).sub(E.position).applyQuaternion(E.quaternion.clone().invert()).divideScalar(E.scale.x),ce=xe(E,{x:$.x/tt,y:$.y/tt,z:$.z/tt},L.color);ce.userData.editorTool={kind:"marker",id:L.id,pointIndex:B}})}}function Yt(){q(f),m.length=0,_.replaceChildren();const E=n.read();for(const L of E.markers){if(L.visible===!1)continue;const k=gt(f,L);Te(k,new b(0,tt*.4,0),L.label,L.color,L.description||"",()=>st(L.id),()=>n.focus(Qn(L.position))).dataset.markerId=L.id}for(const L of E.drawings){if(L.visible===!1||!L.points.length)continue;const k=Q(f,L),B=L.points[0],$=L.points[1],ce=wn(L.kind)&&$?`${L.label} · ${ia(L)}`:`${L.label} · 半径 ${Mr(L.radiusKm??0)} km`,le=L.kind==="measure"&&$?qn({x:(B.x+$.x)/2,y:(B.y+$.y)/2+.1,z:(B.z+$.z)/2}):new b(0,tt*.12,0);Te(k,le,ce,L.color,"",()=>bt(L.id),()=>an(L)).dataset.drawingId=L.id}ft()}function pt(){if(e)return;if(!n.editable()){Wt();return}const E=n.read();for(const B of f.children){const $=B.userData.editorTool;if($.kind==="marker"){const ce=E.markers.find(Ut=>Ut.id===$.id);if(!ce||ce.visible===!1){Wt();return}B.position.copy(qn(ce.position)),B.quaternion.copy(Pa(ce));const le=ce.sizeKm??.12,et=B.userData.markerSize??le;B.scale.setScalar(le/et);const Oe=B.quaternion.clone().invert();for(const Ut of B.children)if(Ut.userData.editorTool?.pointIndex!==void 0){const Xt=gs(ce)[Ut.userData.editorTool.pointIndex];Ut.position.copy(qn(Xt).sub(B.position).applyQuaternion(Oe).divideScalar(B.scale.x))}}else{const ce=E.drawings.find(le=>le.id===$.id);if(!ce||ce.visible===!1||!ce.points[0]){Wt();return}if(ce.kind==="bearing")xt(B,ce);else if(ce.kind!=="measure")B.position.copy(qn(ce.points[0]));else for(const le of B.children)if(le instanceof nn)le.geometry.setFromPoints(ce.points.map(qn)),le.geometry.computeBoundingSphere();else if(le.userData.editorTool?.pointIndex!==void 0){const et=ce.points[le.userData.editorTool.pointIndex];et&&le.position.copy(qn(et))}}}for(const B of m){const $=B.element.dataset.drawingId;if(!$)continue;const ce=E.drawings.find(Oe=>Oe.id===$),le=ce?.points[0],et=ce?.points[1];!ce||!wn(ce.kind)||!le||!et||(ce.kind==="measure"&&B.object.position.copy(qn({x:(le.x+et.x)/2,y:(le.y+et.y)/2+.1,z:(le.z+et.z)/2})),B.element.textContent=`${ce.label} · ${ia(ce)}`)}const L=si(),k=Ti();if(L){Ce.set(L.position),y(),pe.value=String(L.sizeKm??.12);const B=gs(L);O.set(B[0]),Z.set(B[1]),Zn();for(const $ of["pitch","yaw","roll"])we[$].value=String(jt.radToDeg(L.attitude?.[$]??0))}k&&(Ne.set(k.points[0]??{x:0,y:0,z:0}),ht.set(k.points[1]??{x:1,y:0,z:0}),Ge())}function Wt(){if(e)return;u&&!n.editable()&&oi();const E=n.read(),L=JSON.stringify({markers:E.markers,drawings:E.drawings}),k=n.editable();p.forEach(B=>{B.disabled=!k}),t&&!E.markers.some(B=>B.id===t)&&Xn("marker",""),i&&!E.drawings.some(B=>B.id===i)&&Xn("drawing",""),r!==L&&(r=L,lt(),H(),Me(),Yt()),Ye.disabled=!k||!si(),Vo.disabled=!k||!Ti(),fe.disabled=!k||!si(),mt.disabled=!k||!Ti()?.points[0],ee.disabled=te.disabled=!k||!si()||!Ci(si()),Qe(),Ge(),!k&&!u?(C.textContent="只读",P.textContent="只读"):k&&!u&&(C.textContent==="只读"&&(C.textContent=""),P.textContent==="只读"&&(P.textContent="")),Ur()}function Lt(E){oi(),n.editable()&&(u=E,$i=!1,n.onPickingChange(!0))}function Fn(E){Se.value=E,(!i||["测距","方位角","圆规","范围球"].includes(ye.value))&&(ye.value=Hc(E)),Ge();const L=z(Gr("drawing"),!0);Lt({kind:E,drawing:L}),n.onOpenPanel?.("drawing"),D(wn(E)?"起点选择中":"中心点选择中","drawing")}function oi(){const E=u;u=null,h=null,$i=!1,q(g),E&&(n.onPickingChange(!1),D("已退出地图点选",E.kind==="marker"?"markers":"drawing"))}function On(){q(g);const E=u,L=h;if(!(!E||!L))if(E.kind==="marker")E.twoPoint?E.first?(xe(g,E.first,E.marker.color,.08),xe(g,L,E.marker.color,.08),ys(E.first,L)>0&&ys(E.first,L)<=1e3&&gt(g,Zc(E.marker,[E.first,L]),!0)):xe(g,L,E.marker.color,.08):gt(g,{...E.marker,position:L},!0);else if(!E.first)xe(g,L,E.drawing.color,.08),$i&&Q(g,{...E.drawing,points:[L]},!0);else if(wn(E.kind)){const k={...E.drawing,points:[E.first,L]};Q(g,k,!0),D(ia(k),"drawing")}else{const k=lp(E.first,L,E.kind,E.drawing.plane??"xz");xe(g,E.first,E.drawing.color,.08),g.add(oe([qn(E.first),qn(L)],E.drawing.color,.6)),k>0&&k<=1e3&&Q(g,{...E.drawing,points:[E.first],radiusKm:k},!0),D(`半径 ${Mr(k)} km${k>1e3?"（超出1000 km）":""}`,"drawing")}}function rs(E){e||!u||E&&!Nd(E)||!E&&!h||E&&h&&ys(E,h)<1e-5||(h=E?Qn(E):null,On())}function cn(E){const L=u;if(e||!L||!n.editable()){n.editable()||oi();return}if(!Nd(E)){D("点位坐标超出有效范围");return}try{if(L.kind==="marker"){if(L.twoPoint&&!L.first){L.first=Qn(E),h=Qn(E),On(),D("端点 B 选择中","markers");return}const k=L.twoPoint?Zc(L.marker,[L.first,E]):{...L.marker,position:Qn(E)};K("地图放置标记",B=>B.markers.push(k),"markers",()=>{Xn("marker",k.id)})&&D("标记已放置并保存","markers")}else if($i){const k={...L.drawing,points:[Qn(E)]};K("地图放置范围图形",B=>B.drawings.push(k),"drawing",()=>{Xn("drawing",k.id)})&&D("图形已放置并保存","drawing")}else if(!L.first)L.first=Qn(E),h=Qn(E),On(),D(wn(L.kind)?"终点选择中":"半径点选择中","drawing");else{const k={...L.drawing,points:wn(L.kind)?[Qn(L.first),Qn(E)]:[Qn(L.first)]};if(!wn(L.kind)){const B=lp(L.first,E,L.kind,L.drawing.plane??"xz");if(B<=0||B>1e3)throw new Error("半径须大于0且不超过1000 km，请重新选择半径点");k.radiusKm=B}K("地图作图",B=>B.drawings.push(k),"drawing",()=>{Xn("drawing",k.id)})&&D(wn(k.kind)?`${Hc(k.kind)}已保存：${ia(k)}`:`图形已保存：半径 ${Mr(k.radiusKm)} km`,"drawing")}}catch(k){D(k instanceof Error?k.message:String(k),L.kind==="marker"?"markers":"drawing")}}const ai=E=>{E.key==="Escape"&&u&&(oi(),E.preventDefault())};addEventListener("keydown",ai),se.addEventListener("change",()=>st(se.value)),Ze.addEventListener("change",()=>bt(Ze.value)),Re.addEventListener("change",()=>{if(e||!wn(Ti()?.kind))return;const E=Re.value==="a"?0:Re.value==="b"?1:void 0;bt(i,!1,E)}),Ce.fields.y.addEventListener("input",y),A.addEventListener("input",()=>{Ce.fields.y.value=A.value.trim()?String(A.valueAsNumber/1e3):""}),ne.addEventListener("change",()=>st(t,!1,ne.value==="a"?0:ne.value==="b"?1:void 0)),He.addEventListener("input",Qe),Ie.addEventListener("input",Qe),re.addEventListener("input",Ge);for(const E of[A,pe,...Object.values(Ce.fields),...Object.values(we)])E.addEventListener("input",()=>{o=!1});function Zn(){X.value=O.fields.y.value.trim()?String(O.fields.y.valueAsNumber*1e3):"",W.value=Z.fields.y.value.trim()?String(Z.fields.y.valueAsNumber*1e3):""}for(const E of[...Object.values(O.fields),...Object.values(Z.fields)])E.addEventListener("input",()=>{o=!0,Zn()});for(const[E,L]of[[X,O],[W,Z],[Fe,Ne],[Mt,ht]])E.addEventListener("input",()=>{L.fields.y.value=E.value.trim()?String(E.valueAsNumber/1e3):"",E===X||E===W?o=!0:Ge()});for(const E of[...Object.values(Ne.fields),...Object.values(ht.fields),kn,ie,Se])E.addEventListener("input",Ge);const zn=(E,L)=>{for(const k of E)k.addEventListener("change",()=>{if(!(u||!n.editable()||e||!(L==="markers"?si():Ti())))try{const B=L==="markers"?t:i,$=L==="markers"?T(B):z(B),ce=L==="markers"?si():Ti();if(JSON.stringify(ce)===JSON.stringify($))return;j(L==="markers"?"修改标记":"修改制图标尺",le=>{if(L==="markers"){const et=le.markers.findIndex(Oe=>Oe.id===B);et>=0&&(le.markers[et]=$)}else{const et=le.drawings.findIndex(Oe=>Oe.id===B);et>=0&&(le.drawings[et]=$)}},L)}catch(B){D(B instanceof Error?B.message:String(B),L)}})};return zn([me,ue,He,pe,Ie,ae,Ae,_e,A,X,W,...Object.values(we),...Object.values(Ce.fields),...Object.values(O.fields),...Object.values(Z.fields)],"markers"),zn([ye,Se,Xe,ge,re,qe,ie,Fe,Mt,kn,...Object.values(Ne.fields),...Object.values(ht.fields)],"drawing"),H(),Me(),D("","markers"),D("","drawing"),Wt(),{sync:Wt,syncPosition:pt,selectObject:Gt,selection:nc,clearSelection:Ol,isPicking:()=>!!u,pick:cn,preview:rs,cancel:oi,updateLabels(E,L,k){if(e)return;E.updateMatrixWorld(),f.updateWorldMatrix(!0,!0);const B=new b;for(const $ of m){const ce=$.object.getWorldPosition(B).project(E),le=ce.z>=-1&&ce.z<=1&&Math.abs(ce.x)<=1.08&&Math.abs(ce.y)<=1.08;$.element.hidden=!le,le&&($.element.style.left=`${(ce.x+1)*L/2}px`,$.element.style.top=`${(1-ce.y)*k/2}px`)}},dispose(){e||(oi(),e=!0,removeEventListener("keydown",ai),q(f),q(g),n.world.remove(f,g),_.remove(),w.remove(),m.length=0,p.length=0,n.markersPanel.replaceChildren(),n.drawingsPanel.replaceChildren(),n.markersPanel.classList.remove("scene-tool-panel"),n.drawingsPanel.classList.remove("scene-tool-panel"))}}}function tw(n,e,t,i,r=360,s=1440){const o=i*Math.PI/180,a=Math.max(.25,1-r/Math.max(1,s)),c=2*Math.atan(Math.tan(o/2)*Math.max(.1,t)*a),l=Math.hypot(Math.max(1,n),Math.max(1,e)),d=l/Math.sin(Math.min(o,c)/2)*1.12,u=Math.max(1e4,d*10);return{distance:d,maxDistance:u,far:Math.max(5e4,u*3),near:Math.max(.1,l/1e5)}}const vo=n=>({id:n.id,revision:n.revision});function dh(n,e){const t=n.sessions.find(i=>i.id===e);if(!t)throw new Error(`Unknown session: ${e}`);if(t.workflow||t.status==="finished")throw new Error("Active authoring session required");return t}function Rm(n){if(typeof n!="string"||!n.trim()||n.trim().length>128)throw new Error("Name must contain 1..128 characters");return n.trim()}function Cm(n,e,t,i,r,s){const o=zu(e);fg(n,o);const a=dh(o,t);return{project:o,sessionId:t,selection:{kind:i,ref:vo(r)},mapRef:vo(s),taskRef:vo(a.taskRef)}}function nw(n,e,t,i){const r=zu(n);if(!dh(r,e).mapEditRef)throw new Error("Terrain editing session required");const o=xp(r,e,t,Rm(i)),a={id:t,revision:1};return o.sessions.find(c=>c.id===e).mapEditRef=vo(a),Cm(r,o,e,"map",a,a)}function iw(n,e,t,i){const r=zu(n);if(dh(r,e).mapEditRef)throw new Error("Task authoring session required");if(!t||typeof t!="object")throw new Error("New map and task IDs required");const o=Rm(i),a={id:t.mapId,revision:1},c={id:t.taskId,revision:1};let l=xp(r,e,t.mapId,`${o} MAP`.slice(0,128));l=hg(l,e,a,t.taskId,o);const d=l.sessions.find(u=>u.id===e);return d.taskRef=vo(c),d.mapRef=vo(a),Cm(r,l,e,"task",c,a)}function rw(n,e){return n===void 0||e<n?"active":e===n?"destroyed":"wreck"}const ma={squadron:2155134,friendly:2985215,neutral:16767050,enemy:16738613,white:15332072,terrain:6062736},Pm={squadron:"中队",friendly:"友军",neutral:"中立",enemy:"敌军"},Du={active:"在编",destroyed:"已击落",wreck:"残骸"},ts=new d_;ts.background=new Nt(133653);const yt=new Pi(42,innerWidth/innerHeight,.1,5e3);yt.position.set(0,240,410);const vt=new Fb({antialias:!0,powerPreference:"high-performance"});vt.setPixelRatio(Math.min(devicePixelRatio,2));vt.setSize(innerWidth,innerHeight);vt.outputColorSpace=hi;vt.domElement.setAttribute("aria-label","三维地图画布");vt.domElement.setAttribute("role","img");vt.domElement.tabIndex=0;document.querySelector("#scene").appendChild(vt.domElement);const It=new zb(yt,vt.domElement);It.target.set(0,0,0);It.enableDamping=!0;It.dampingFactor=.08;It.minDistance=35;It.maxDistance=1e4;It.maxPolarAngle=Math.PI*.49;const Dm=new J_(1588299,30,850);Dm.position.set(0,140,0);ts.add(Dm);const sn=new Cn;ts.add(sn);let Wr;function Lm(n,e){Wr&&(sn.remove(Wr),Wr.geometry.dispose(),Wr.material.dispose()),Wr=mM(n,e),sn.add(Wr),mm(Wr,yt.position.distanceTo(It.target))}Lm(750,750);function ga(n,e,t=1,i=1){const r=new kt().setFromPoints(n),s=new bi({color:e,transparent:!0,opacity:i});return new nn(r,s)}let _t=new yp,ir=new bp,Da=42,Ts=0;function Et(n,e){return _t.sample(n,e)}function Im(){const n=document.querySelector("#terrain-contour-smooth").checked;return lM(_t,{smoothing:n})}function Nm(){const n=new Cn,e=ir.buildings(_t,Da,Ts),t=[],i=[],r=[],s=Math.cos(Ts),o=Math.sin(Ts);for(const c of e){const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([d,u])=>{const h=d*c.width/2,f=u*c.depth/2,g=c.x+h*s-f*o,_=c.z+h*o+f*s;return new b(g,Et(g,_)+.32,_)});for(const d of[0,1,2,0,2,3]){const u=l[d];t.push(u.x,u.y,u.z),i.push(c.shade*.82,c.shade*.91,c.shade)}for(let d=0;d<3;d++){const u=c.x+(d-1)*c.width*.26*s,h=c.z+(d-1)*c.width*.26*o;r.push(u,Et(u,h)+.36,h)}}const a=new kt;return a.setAttribute("position",new Dt(t,3)),a.setAttribute("color",new Dt(i,3)),n.add(new Ee(a,new yn({vertexColors:!0,transparent:!0,opacity:.64,side:fn,depthWrite:!1}))),n.add(new Yp(new kt().setAttribute("position",new Dt(r,3)),new $p({color:14477547,size:.45,transparent:!0,opacity:.65,depthWrite:!1}))),n.userData.count=e.length,n}let ws=Nm();sn.add(ws);let mi=Im();sn.add(mi);let Pr=!1,tn=null,ul=null,hl=null,La=!0,As=null;function Um(){!tn||ul!==_t||hl!==ir?(tn&&(sn.remove(tn.root),tn.dispose()),tn=pm(_t,ir,{smoothing:!!document.querySelector("#terrain-contour-smooth")?.checked}),ul=_t,hl=ir,sn.add(tn.root)):La&&tn.update();const n=tn.root.children[0]?.material,e=!!document.querySelector("#terrain-contour-smooth")?.checked;n?.userData.terrainContours&&n.userData.contourSmoothing!==e&&(n.userData.contourSmoothing=e,n.needsUpdate=!0),La=!1,tn.root.visible=!!Pt||mi===tn.root}function km(){As&&(Um(),tn.update(As),As=null,mi!==tn.root&&(mi.visible=!1),ws.visible=!1)}function sw(n,e){const t=Math.max(0,Math.floor((n.x-e+_t.extent)/_t.spacing)),i=Math.min(_t.size-1,Math.ceil((n.x+e+_t.extent)/_t.spacing)),r=Math.max(0,Math.floor((n.z-e+_t.extentZ)/_t.spacingZ)),s=Math.min(_t.size-1,Math.ceil((n.z+e+_t.extentZ)/_t.spacingZ));if(t>i||r>s)return;const o=As;As=o?{minX:Math.min(o.minX,t),maxX:Math.max(o.maxX,i),minZ:Math.min(o.minZ,r),maxZ:Math.max(o.maxZ,s)}:{minX:t,maxX:i,minZ:r,maxZ:s}}function Al(n=!1){ec();const e=n&&tn&&ul===_t&&hl===ir;La=!e,As=null,tn&&(tn.root.visible=!!e),e?(mi!==tn.root&&Ps(mi),mi=tn.root,mi.visible=!0):(mi===tn?.root?(sn.remove(tn.root),tn.dispose(),tn=null):Ps(mi),mi=Im(),sn.add(mi)),Pr=!1,Ps(ws),ws=Nm(),sn.add(ws);const t=Lr(De);t.units.forEach(r=>{fh(r,t.turn),(r.unit.icon==="ground"||r.unit.icon==="ship")&&Uu(r.unit)}),yo();const i=_t.data.reduce((r,s)=>Math.max(r,s),0);document.querySelector("#terrain-state").textContent=`${_t.extent*2/25} × ${_t.extentZ*2/25} km / 最高 ${(i/25).toFixed(2)} km / 建筑 ${ws.userData.count}`}const ot=[{id:"rex",label:"REX",faction:"squadron",kind:"F-16C",icon:"air-filled",positions:[new b(-250,60,250),new b(-170,85,180),new b(-70,108,140),new b(30,125,130),new b(130,138,150)]},{id:"tasha",label:"TASHA",faction:"friendly",kind:"MIRAGE 2000-5",icon:"air-outline",positions:[new b(-210,84,270),new b(-120,88,185),new b(-20,94,130),new b(65,90,80),new b(150,96,30)]},{id:"professor",label:"PROFESSOR",faction:"neutral",kind:"EA-6B",icon:"air-outline",positions:[new b(-275,52,300),new b(-190,55,215),new b(-90,61,165),new b(10,65,125),new b(105,68,85)]},{id:"mig29",label:"MIG-29A",faction:"enemy",kind:"MIG-29",icon:"air-outline",destroyedAtTurn:3,positions:[new b(300,120,-220),new b(195,100,-150),new b(100,78,-70),new b(20,55,10),new b(20,55,10)]},{id:"sam",label:"SAM",faction:"enemy",kind:"SAM",icon:"ground",tgt:!0,positions:[new b(160,0,-150),new b(160,0,-150),new b(160,0,-150),new b(160,0,-150),new b(160,0,-150)]},{id:"frigate",label:"FRIGATE",faction:"enemy",kind:"FRIGATE",icon:"ship",tgt:!0,positions:[new b(245,0,-40),new b(230,0,-30),new b(215,0,-20),new b(200,0,-10),new b(185,0,0)]}],$n=[{summary:"FORMATION / INITIAL CONTACT",events:[]},{summary:"TACTICAL MOVEMENT / CONTACT",events:[{kind:"attack",attacker:"mig29",target:"rex",weapon:"2AAM"}]},{summary:"ENGAGEMENT / RANGE CLOSING",events:[{kind:"attack",attacker:"rex",target:"mig29",weapon:"QAAM"}]},{summary:"LOSSES / RESULT PENDING",events:[{kind:"destroy",target:"mig29"}]},{summary:"FINAL POSITION / RESULT",events:[]}];function ri(){return $n.length}function Mi(){return $n.length-1}function Fm(){return typeof Ct<"u"&&Ct?Dl:Mi()}function Bs(n,e){return rw(n.destroyedAtTurn,e)}function Ud(n){return ot.find(e=>e.id===n)?.label??n.toUpperCase()}function ow(n){return n.kind==="attack"?`${Ud(n.attacker)} → ${Ud(n.target)} / ${n.weapon}`:`${Ud(n.target)} 被击落`}function Lr(n){const e=Math.max(0,Math.min(n,Mi())),t=$n[e];return{turn:e,summary:t.summary,events:t.events,units:ot.map(i=>({unit:i,position:qa(i,i.positions[Math.min(e,i.positions.length-1)],Et),status:Bs(i,e)}))}}ot.forEach(n=>{n.positions.length!==ri()&&console.warn(`[scenario] ${n.label} has ${n.positions.length} keyframes but the scenario declares ${ri()} turns`)});let De=0,he=null;const wi=new Map,Ns=new Map,Rs=new Map;let Kc,oo=null,Lu=-1/0,Jc="",kd=[];const aw=.675,Fd=new mn().setFromEuler(new ii(-Math.PI/2,0,0)),Om=22,ni=1.5,dp=7.2;function cw(){const n=[];for(let e=0;e<=64;e++){const t=e/64*Math.PI*2;n.push(new b(Math.cos(t)*dp,Math.sin(t)*dp,0))}return n}function lw(n,e){const t=DM(n.icon,e);return t.scale.setScalar(aw),t.traverse(i=>{i.userData.unit=n}),t}function uh(n,e){const t=n.icon==="ground"?Math.PI:0;if(Sn())return _a(Mp({...n,destroyedAtTurn:n.attitudes?.[e]?void 0:n.destroyedAtTurn},e,{epsilon:.001}).yaw+t);const i=Math.min(e,n.positions.length-1),r=n.attitudes?.[i];if(r)return _a(r.yaw+t);const s=n.positions[Math.max(0,i-1)],o=n.positions[Math.min(n.positions.length-1,i+1)],a=o.x-s.x,c=o.z-s.z;return Math.hypot(a,c)<.001?null:_a(Math.atan2(-a,-c)+t)}const Od=.6,up=2,hp=new b(0,1,0),dw=new b(1,0,0),uw=new b(0,0,1);function _a(n){return Math.atan2(Math.sin(n),Math.cos(n))}function fp(n,e){const t=n.positions[e],i=n.positions[e+1];if(!t||!i)return null;const r=i.x-t.x,s=i.z-t.z;return Math.hypot(r,s)<.001?null:Math.atan2(r,s)}function hh(n,e){if(n.icon!=="air-filled"&&n.icon!=="air-outline")return null;if(Sn())return Mp({...n,destroyedAtTurn:n.attitudes?.[e]?void 0:n.destroyedAtTurn},e,{epsilon:.001,maxBank:Od,rollGain:up});const t=Math.min(e,n.positions.length-1),i=n.attitudes?.[t];if(i)return i;const r=n.positions[Math.max(0,t-1)],s=n.positions[Math.min(n.positions.length-1,t+1)],o=s.x-r.x,a=s.y-r.y,c=s.z-r.z,l=Math.hypot(o,c);if(l<.001&&Math.abs(a)<.001)return null;const d=Math.atan2(-o,-c),u=Math.atan2(a,Math.max(l,.001)),h=fp(n,t-1),f=fp(n,t),g=h===null||f===null?0:jt.clamp(up*_a(f-h),-Od,Od);return{yaw:d,pitch:u,roll:g}}function ko(n){const e=new Cn;e.userData.unit=n,e.userData.pickable=!0;const t=ma[n.faction],i=n.icon==="ground"||n.icon==="ship";let r=null;i||(r=new Ee(new wl(2.2,3.3,20),new yn({color:t,transparent:!0,opacity:.8,side:fn})),r.rotation.x=-Math.PI/2,r.userData.unit=n,e.add(r));const s=new nn(new kt,new bi({color:t,transparent:!0,opacity:.8}));s.userData.unit=n,e.add(s);const o=lw(n,t),a=new nn(new kt().setFromPoints(cw()),new bi({color:t,transparent:!0,opacity:.9,depthTest:!1}));a.visible=!1,a.userData.unit=n,o.add(a);const c=gm(t);c.userData.unit=n,o.add(c),e.add(o);const l=2.6,d=new bi({color:t,transparent:!0,opacity:.9,depthTest:!1}),u=new Cn;u.add(new nn(new kt().setFromPoints([new b(-l,0,-l),new b(l,0,l)]),d)),u.add(new nn(new kt().setFromPoints([new b(-l,0,l),new b(l,0,-l)]),d)),u.visible=!1,e.add(u);const h=[];o.traverse(m=>{const p=m.material;!p||Array.isArray(p)||h.push({material:p,baseOpacity:p.opacity})});const f=document.createElement("div");f.className=`world-label ${n.faction}`,f.textContent=n.label,f.style.cssText=`position:absolute; left:0; top:0; transform:translate(0, 0); color:#${t.toString(16).padStart(6,"0")}; text-shadow:0 0 7px #${t.toString(16).padStart(6,"0")}; font:14px 'Share Tech Mono',monospace; white-space:nowrap; pointer-events:none;`;const g=new vn;g.userData.dom=f,e.add(g),e.userData.parts={base:r,pole:s,icon:o,label:g,wreck:u,tgtRing:a,escortMarker:c,iconMaterials:h,labelFade:1};const _=EM(t);_.root.traverse(m=>{m.userData.unit=n}),e.add(_.root),Ns.set(n.id,_),sn.add(e),wi.set(n.id,e)}function fh(n,e){const{unit:t,status:i}=n,r=wi.get(t.id),s=r.userData.parts,o=i==="wreck",a=!(typeof Ct<"u"&&Ct)&&!Sn()&&o&&t.destroyedAtTurn!==void 0,c=qa(t,a?t.positions[Math.min(t.destroyedAtTurn,t.positions.length-1)]:n.position,Et),l=t.intangible?c.y:Et(c.x,c.z);r.position.set(c.x,l,c.z);const d=Math.max(0,c.y-l),u=Tl(t,c,Et,ni).y-l,h=s.base===null?u+Om-ni:Math.max(d,.6);if(s.base&&(s.base.visible=!o),s.icon.visible=!o,s.pole.visible=!o,s.wreck.visible=i!=="active",s.wreck.position.y=u,s.tgtRing.visible=t.tgt===!0&&i==="active",s.escortMarker.visible=t.escort===!0&&t.faction!=="enemy"&&i==="active",!o){let m=s.pole.geometry.getAttribute("position");m?(m.setXYZ(0,0,.2,0),m.setXYZ(1,0,h,0),m.needsUpdate=!0):(m=new Dt([0,.2,0,0,h,0],3),s.pole.geometry.setAttribute("position",m)),s.pole.geometry.computeBoundingSphere(),s.pole.geometry.boundingBox&&s.pole.geometry.computeBoundingBox()}const f=s.icon;f.position.y=u;const g=hh(t,e);if(g===null){const m=uh(t,e);m===null?f.quaternion.copy(Fd):f.quaternion.setFromAxisAngle(hp,m).multiply(Fd)}else f.quaternion.setFromAxisAngle(hp,g.yaw).multiply(new mn().setFromAxisAngle(dw,g.pitch)).multiply(new mn().setFromAxisAngle(uw,g.roll)).multiply(Fd);const _=i==="destroyed";s.iconMaterials.forEach(({material:m,baseOpacity:p})=>{m.transparent||(m.transparent=!0,m.needsUpdate=!0),m.userData.baseDepthTest??=m.depthTest,m.depthTest=t.intangible?!1:m.userData.baseDepthTest,m.opacity=p*(_?.3:1)*(t.hidden?.35:1)});for(const m of[s.base,s.pole,...s.wreck.children]){const p=m?.material;!p||Array.isArray(p)||(p.userData.hiddenBaseOpacity??=p.opacity,p.opacity=p.userData.hiddenBaseOpacity*(t.hidden?.35:1))}s.labelFade=(o?0:_?.5:1)*(t.hidden?.5:1),s.label.position.y=h}function zm(n,e){const t=new Cn;if(t.userData.trail=!0,n.length<2)return t;const i=[],r=2.3;n.forEach((c,l)=>{const d=n[Math.max(0,l-1)],u=n[Math.min(n.length-1,l+1)],h=new b().subVectors(u,d).normalize(),f=new b(-h.z,0,h.x).normalize().multiplyScalar(r*(.45+l/n.length*.55));i.push(c.x+f.x,c.y+.5,c.z+f.z,c.x-f.x,c.y+.5,c.z-f.z)});const s=[];for(let c=0;c<n.length-1;c++)s.push(c*2,c*2+1,c*2+2,c*2+1,c*2+3,c*2+2);const o=new kt;o.setAttribute("position",new Dt(i,3)),o.setIndex(s),o.computeVertexNormals();const a=new yn({color:e,transparent:!0,opacity:.28,side:fn,depthWrite:!1,blending:Bd});return t.add(new Ee(o,a)),t}function ph(n,e){return Sn()?Tt()?.sealedScenes?.find(t=>t.turn<=e&&t.units.some(i=>i.id===n.id))?.turn??e:0}function mh(n,e,t){const i=wp(n.positions,n.trackPoints??[],e,t).map(a=>new b(a.x,a.y,a.z));if(i.length<2)return[];const r=new rh(i,!1,"centripetal"),s=[];let o=0;for(let a=e;a<t;a++){const c=(n.trackPoints??[]).filter(g=>g.segment===a).length+1,l=o/(i.length-1),d=(o+c)/(i.length-1),u=Math.max(24,c*16),h=i.slice(o,o+c+1).every(g=>g.distanceToSquared(i[o])<1e-12),f=Array.from({length:u+1},(g,_)=>h?i[o].clone():r.getPoint(jt.lerp(l,d,_/u)));s.push({segment:a,points:f,start:l,end:d,curve:r}),o+=c}return s}function Bm(n,e){const{unit:t,status:i}=n;if(i==="wreck"||document.querySelector("#trail-display").value==="none")return;const r=t.destroyedAtTurn===void 0?e:Math.min(e,t.destroyedAtTurn),s=document.querySelector("#trail-display").value==="recent",o=Math.max(1,Math.floor(Number(document.querySelector("#trail-turns").value)||1)),a=ph(t,e),c=Math.max(a,s?Math.max(0,r-o):0),l=mh(t,a,r).filter(u=>u.segment>=c).flatMap((u,h)=>h?u.points.slice(1):u.points);!t.intangible&&(t.icon==="ground"||t.icon==="ship")&&l.forEach(u=>{u.y=Et(u.x,u.z)+ni});const d=zm(l,ma[t.faction]);d.userData.trail=t.id,sn.add(d)}const Fo=document.createElement("div");Fo.className="labels";Fo.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;contain:strict;";document.querySelector("#app").appendChild(Fo);function Oo(){for(const[,n]of wi){const e=n.userData.parts.label,t=e.userData.dom;t.dataset.unitId=n.userData.unit.id,Fo.appendChild(t),e.userData.domObject=t}}let Ue=!1,Ot=!1;const _n=[{id:"route-1",name:"ROUTE 1",waypoints:[]}];let Pn="route-1",Ia=2,fl=1,_i="",Di="",ln=null,Na=[],An=new Cn;sn.add(An);const Li=new Map;function pl(){return _n.find(n=>n.id===Pn)??_n[0]}function Ao(){return pl()?.waypoints??[]}const ml=document.createElement("div");ml.className="waypoint-labels";document.querySelector("#app").appendChild(ml);const Iu=[];let gl=1,_l=1,Vt=!1,In=!1,zt=!1,nt=null,Ki=new Cn;sn.add(Ki);let Pt=null,Qr=1;const ut=new Set;function ki(){return ot.filter(n=>ut.has(n.id))}function sr(){return ki().filter(n=>$a(n))}function Ro(){const n=sr();return n.reduce((e,t)=>e.add(Wn(t)),new b).divideScalar(n.length||1)}function Yn(n){St?.clearSelection(),nt=null,zt=!1,ut.clear(),n.forEach(e=>ut.add(e.id)),he=n[n.length-1]??null,n.length>1&&(Vi="translate"),at(),rt()}function Rl(n,e=!1){typeof en<"u"&&en?.pick("unit",n.id)||(e?(ut.has(n.id)?ut.delete(n.id):ut.add(n.id),Yn(ki())):Yn([n]))}function Ua(n){if(!fi()||!Ue)return;const e=sr();if(!e.length)return;const t=Hs();if(n.lengthSq()<1e-12&&!e.some(r=>zs(r)&&t.some(s=>{const o=r.positions[s];return o.y!==Et(o.x,o.z)})))return;const i=e.filter(r=>Dn(r)&&!r.intangible);i.length&&(n.y=Math.max(n.y,...i.flatMap(r=>t.map(s=>{const o=r.positions[s];return Math.max(0,Et(o.x+n.x,o.z+n.z))-o.y})))),bn("draft")&&(e.forEach(r=>{ct()&&!Sn()&&(r.routeBinding=void 0),t.forEach(s=>r.positions[s].add(n)),ct()&&r.trackPoints?.forEach(s=>{t.includes(s.segment)&&t.includes(s.segment+1)&&(s.x+=n.x,s.y+=n.y,s.z+=n.z)}),xl(r,t)}),at(),rt())}let jn;const Cl=()=>({groups:[],markers:[],drawings:[]}),Xi=()=>jn??Cl();let Hn,Hm,St,en,Nu,qr,vl="",Hi=null;const Pl=document.createElement("div");Pl.className="editor-tool-labels";document.querySelector("#app").appendChild(Pl);const hw=_M(Pl);let ve=null,Ct=!1,Qc=null,ka=null,Fa=null,Dl=0,el={edit:!1,terrain:!1};const Cs=new Map;let Ar=null,Yr=null;function Tt(){if(!ve)return;if(Yr?.store===ve&&Yr.revision===ve.revision)return Yr.session;const n=ve.read(),e=n.project.sessions.find(t=>t.id===(n.editor.sessionId??"session-working"));return Yr={store:ve,revision:ve.revision,session:e},e}function Sn(){return Tt()?.workflow?.mode==="formal"}function ct(){if(typeof Ct<"u"&&Ct)return!1;const n=Tt();return n?.status!=="finished"&&(!n?.workflow||Ii())}function xi(){return typeof Ct<"u"&&Ct||ct()}function Ii(){const n=Tt();return!!n?.workflow&&n.status!=="finished"&&n.turns.length===n.workflow.committedTurns+1&&De===n.workflow.committedTurns}function fi(){return ct()||Ii()}function Ht(){return!!Je||Le.dragging||!!Pt||!!Rn||!!vi||!!St?.isPicking()}function zd(n,e){if(!xi()||!Ue||Je||Le.dragging||Pt||Rn||vi||!bn("tools"))return!1;jn??=Cl(),e(jn,ot);const t=on(n);return at("tools"),rt(),t}function fw(n){const e=ot.filter(s=>s.groupId===n.id);if(!ct()||!Ue||!e.length||Ht()||!bn())return;jn??=Cl();const t={...n,id:`group-${crypto.randomUUID()}`,name:`${n.name} 副本`.slice(0,128)};jn.groups.push(t);const i=vh().spacing,r=e.map(s=>{const o=ja(Ya(s)),a=Qr++;return o.id=`unit-${a}`,o.label=`${s.label}-COPY-${a}`,o.groupId=t.id,o.routeBinding=void 0,delete o.player,delete o.playerActions,o.positions.forEach(c=>{c.x+=i,c.z+=i}),o.trackPoints?.forEach(c=>{c.x+=i,c.z+=i}),ot.push(o),ko(o),o});Oo(),Yn(r),Us("translate")}function gh(n,e=.5){const t=new b(n.x,n.y,n.z).multiplyScalar(tt),i=yt.position.clone().sub(It.target).normalize();i.lengthSq()<.1&&i.set(0,.6,1).normalize();const r=Math.max(90,e*tt/Math.sin(jt.degToRad(yt.fov)/2)*1.4);It.target.copy(t),yt.position.copy(t).addScaledVector(i,Math.min(r,It.maxDistance)),It.update()}function pp(n){const e=ot.filter(r=>n.includes(r.id)).map(r=>Wn(r));if(!e.length)return;const t=e.reduce((r,s)=>r.add(s),new b).divideScalar(e.length),i=Math.max(15,...e.map(r=>r.distanceTo(t)))/tt;gh({x:t.x/tt,y:t.y/tt,z:t.z/tt},i)}function $a(n){return fi()&&(Ii()||Bs(n,De)==="active")}function _h(n){return fi()&&(ct()||n.destroyedAtTurn===void 0||n.destroyedAtTurn===De)}function on(n="Edit scenario",e=Ar){if(!ve||!e)return!0;if(Le.dragging||Pt)return!1;try{const t=Vm();return Ar=null,ve.commit(t,n,e),!0}catch(t){return Ar=null,or(ve.read()),he=ot.find(i=>ut.has(i.id))??null,console.error("Scenario transaction rolled back",t),Qt("编辑未保存："+(t instanceof Error?t.message:String(t))),!1}}function Co(n,e){if(n===e)return!0;if(n===null||e===null||typeof n!="object"||typeof e!="object")return!1;if(Array.isArray(n)||Array.isArray(e))return!Array.isArray(n)||!Array.isArray(e)||n.length!==e.length?!1:n.every((s,o)=>Co(s??null,e[o]??null));const t=n,i=e,r=Object.keys(t).filter(s=>t[s]!==void 0);return r.length!==Object.keys(i).filter(s=>i[s]!==void 0).length?!1:r.every(s=>Object.prototype.hasOwnProperty.call(i,s)&&Co(t[s],i[s]))}function pw(n,e){const t={...n,editor:{...n.editor,currentTurn:e.currentTurn}},i=Gu(t,Vu(t));if(i.layout=e.layout,!Co(e,i))throw new Error("已提交回合保留原样；请在末尾草稿编辑场景");return{...n,editor:{...t.editor,activeRouteId:e.activeRouteId}}}function Vm(n=Ll()){if(typeof Ct<"u"&&Ct&&ve){const h=ve.read(),f=h.project.sessions.find(g=>g.id===h.editor.sessionId);return f.sceneTools=structuredClone(n.sceneTools??Cl()),h}if(ve&&(Tt()?.status==="finished"||Sn()&&!Ii()))return pw(ve.read(),n);const e=vg(n,n.layout??{size:_t.size,extent:_t.extent,extentZ:_t.extentZ});if(!ve)return e;const t=ve.read(),i=t.project,r=t.editor.sessionId??"session-working",s=i.sessions.find(h=>h.id===r),o=i.maps.find(h=>h.id===s.mapRef.id&&h.revision===s.mapRef.revision),a=e.project.sessions[0];if(a.id=s.id,a.name=s.name,a.taskRef=s.taskRef,a.mapRef=s.mapRef,a.resourceSnapshot=s.resourceSnapshot,a.rulesRevision=s.rulesRevision,a.status=s.status,s.rulesRef&&(a.rulesRef={...s.rulesRef}),s.rulesSnapshot&&(a.rulesSnapshot=structuredClone(s.rulesSnapshot)),a.workflow=s.workflow,a.mapEditRef=s.mapEditRef,s.workflow){a.sealedScenes=xg(s),a.turns=s.turns.map((f,g)=>g===De?a.turns[g]:f);const h=Gu(t,Vu(t));a.units.forEach(f=>{const g=s.units.find(m=>m.id===f.id),_=h.units.find(m=>m.id===f.id);if(g){for(let m=0;m<De;m++)f.positions[m]=g.positions[m],f.attitudes&&(f.attitudes[m]=g.attitudes?.[m]??null);_&&Co(n.units.find(m=>m.id===f.id)?.positions[De],_.positions[De])&&(f.positions[De]=g.positions[De])}})}const c=e.project.maps[0];c.id=o.id,c.revision=o.revision,c.name=o.name;const l=h=>h.id===o.id&&h.revision===o.revision,d=c.terrain.size!==o.terrain.size||c.terrain.widthKm!==(o.terrain.widthKm??o.terrain.extentKm*2)||c.terrain.heightKm!==(o.terrain.heightKm??o.terrain.extentKm*2)||!Co(c.urban,o.urban)||c.terrain.heightsKm.some((h,f)=>Math.abs(h-o.terrain.heightsKm[f])>1e-7),u=!!s.workflow||i.tasks.some(h=>l(h.mapRef))||i.sessions.some(h=>h.id!==r&&l(h.mapRef));return d&&u&&(c.revision=Math.max(...i.maps.filter(h=>h.id===o.id).map(h=>h.revision))+1,a.mapRef={id:c.id,revision:c.revision}),e.project={...i,maps:d?u?[...i.maps,c]:i.maps.map(h=>l(h)?c:h):i.maps,sessions:i.sessions.map(h=>h.id===r?a:h)},e.editor.sessionId=r,e}function or(n){const e=Vu(n);(_t.size!==e.size||_t.extent!==e.extent||_t.extentZ!==e.extentZ)&&(_t=new yp(e.size,e.extent,e.extentZ),ir=new bp(e.size,e.extent,e.extentZ),Lm(e.extent,e.extentZ??e.extent),Za(),yh()),mw(Gu(n,e))}function Ya(n){return{id:n.id,label:n.label,faction:n.faction,kind:n.kind,icon:n.icon,positions:n.positions.map(e=>({x:e.x,y:e.y,z:e.z})),attitudes:n.attitudes?.map(e=>e?{...e}:null),destroyedAtTurn:n.destroyedAtTurn,tgt:n.tgt,...n.escort===void 0?{}:{escort:n.escort},...n.hidden===void 0?{}:{hidden:n.hidden},...n.intangible===void 0?{}:{intangible:n.intangible},groupId:n.groupId,aircraftRef:n.aircraftRef?{...n.aircraftRef}:void 0,spRefs:n.spRefs?.map(e=>({...e})),...n.loadout===void 0?{}:{loadout:n.loadout.map(e=>({slot:e.slot,weaponRef:{...e.weaponRef}}))},...n.player===void 0?{}:{player:{...n.player}},...n.playerActions===void 0?{}:{playerActions:structuredClone(n.playerActions)},routeBinding:n.routeBinding?{...n.routeBinding,offset:n.routeBinding.offset?{...n.routeBinding.offset}:void 0}:void 0,trackPoints:n.trackPoints?.map(e=>({...e}))}}function ja(n){return{id:n.id,label:n.label,faction:n.faction,kind:n.kind,icon:n.icon,positions:n.positions.map(e=>new b(e.x,e.y,e.z)),attitudes:n.attitudes?.map(e=>e?{...e}:null),destroyedAtTurn:n.destroyedAtTurn,tgt:n.tgt,...n.escort===void 0?{}:{escort:n.escort},...n.hidden===void 0?{}:{hidden:n.hidden},...n.intangible===void 0?{}:{intangible:n.intangible},groupId:n.groupId,aircraftRef:n.aircraftRef?{...n.aircraftRef}:void 0,spRefs:n.spRefs?.map(e=>({...e})),...n.loadout===void 0?{}:{loadout:n.loadout.map(e=>({slot:e.slot,weaponRef:{...e.weaponRef}}))},...n.player===void 0?{}:{player:{...n.player}},...n.playerActions===void 0?{}:{playerActions:structuredClone(n.playerActions)},routeBinding:n.routeBinding?{...n.routeBinding,offset:n.routeBinding.offset?{...n.routeBinding.offset}:void 0}:void 0,trackPoints:n.trackPoints?.map(e=>({...e}))}}function Ll(){return{units:ot.map(Ya),turns:$n.map(n=>({summary:n.summary,events:n.events.map(e=>({...e}))})),currentTurn:De,...jn?{sceneTools:structuredClone(jn)}:{},layout:{size:_t.size,extent:_t.extent,extentZ:_t.extentZ},terrain:_t.data.slice(),urban:ir.data.slice(),urbanSeed:Da,urbanAngle:Ts,routes:_n.map(n=>({...n,waypoints:n.waypoints.map(e=>({...e}))})),activeRouteId:Pn}}function Ps(n){n.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i&&i.dispose()}),sn.remove(n)}function Gm(n){const e=wi.get(n.id);if(!e)return;e.userData.parts.label.userData.dom.remove(),Ps(e),wi.delete(n.id),Ns.delete(n.id),Rs.delete(n.id),ec()}function mw(n){jn=n.sceneTools?structuredClone(n.sceneTools):void 0,_n.splice(0,_n.length,...n.routes.map(e=>({...e,waypoints:e.waypoints.map(t=>({...t}))}))),Pn=n.activeRouteId,nt=null,Vt=!1,zt=!1,_t.data.set(n.terrain),ir.data.set(n.urban),Da=n.urbanSeed,Ts=n.urbanAngle,Pr=!0,dt("#urban-seed").value=String(Da),dt("#urban-angle").value=String(jt.radToDeg(Ts)),$n.splice(0,$n.length,...n.turns.map(e=>({summary:e.summary,events:e.events.map(t=>({...t}))}))),De=Math.min(n.currentTurn,Mi());for(const e of[...wi.values()])Ps(e);wi.clear(),Ns.clear(),Rs.clear(),ec(),Fo.replaceChildren(),ot.length=0,n.units.forEach(e=>ot.push(ja(e))),ot.forEach(ko),Oo()}function bn(n="author"){return!Ue||(n==="tools"?!xi():n==="author"?!ct():!fi())||!on()?!1:(Ar=ve?.read()??null,!0)}function Wm(n){if(!ve||Le.dragging||Pt||Je||!ct()&&!(Ii()&&n.type==="set-turn-summary"&&n.turn===De&&n.sessionId===Tt()?.id)||!on())return;const e=[...ut];ve.dispatch(n),or(ve.read()),ut.clear(),e.filter(t=>ot.some(i=>i.id===t)).forEach(t=>ut.add(t)),he=ki().at(-1)??null,at(),rt()}function Il(){if(Je||Le.dragging||Pt)return;on();const n=ve?.undo();if(!n)return;const e=[...ut];or(n),ut.clear(),e.filter(t=>ot.some(i=>i.id===t)).forEach(t=>ut.add(t)),he=ki().at(-1)??null,at(),rt()}function Nl(){if(Je||Le.dragging||Pt)return;on();const n=ve?.redo();if(!n)return;const e=[...ut];or(n),ut.clear(),e.filter(t=>ot.some(i=>i.id===t)).forEach(t=>ut.add(t)),he=ki().at(-1)??null,at(),rt()}function gw(n){Gm(n),ko(n),Oo()}function Uu(n){ec();const e={unit:n,position:Wn(n),status:Bs(n,De)};fh(e,De),sn.children.filter(t=>t.userData.trail===n.id).forEach(t=>Ps(t)),Bm(e,De),he===n&&ut.size<=1&&Ym(e,Lr(De))}function Wn(n,e=!1){const t=n.positions[Math.min(De,n.positions.length-1)];return e?t:qa(n,t,Et)}function xl(n,e=Hs()){zs(n)&&(e.forEach(t=>{const i=n.positions[t];i.y=Et(i.x,i.z)}),ct()&&n.trackPoints?.forEach(t=>{e.includes(t.segment)&&e.includes(t.segment+1)&&(t.y=Et(t.x,t.z))}))}function _w(){!ct()||Tt()?.mapEditRef||!Ue||Le.dragging||(Ei(!0),dn=!1,es(),ut.clear(),he=null,Je={id:`unit-${Qr}`,label:`NEW-${String(Qr).padStart(2,"0")}`,faction:"enemy",kind:"UNKNOWN",icon:"air-outline",tgt:!1,positions:Array.from({length:ri()},()=>new b(0,60,0)),attitudes:Array.from({length:ri()},()=>({yaw:0,pitch:0,roll:0}))},kl(),rt())}function vw(){if(!ct()||!Ue)return;const n=ki();if(!n.length||Je||Le.dragging||!bn())return;const e=new Set(n.map(t=>t.id));jn?.links&&(jn.links=jn.links.filter(t=>!e.has(t.fromUnitId)&&!(t.to.kind==="unit"&&e.has(t.to.id)))),n.forEach(t=>{Gm(t),ot.splice(ot.indexOf(t),1)}),$n.forEach((t,i)=>{(!Sn()||i===De)&&(t.events=t.events.filter(r=>!e.has(r.target)&&(r.kind!=="attack"||!e.has(r.attacker))))}),Yn([])}function vh(){const n=Math.floor(Number(dt("#create-count").value)),e=Number(dt("#create-spacing").value);return{count:Number.isFinite(n)?jt.clamp(n,1,100):1,spacing:Number.isFinite(e)?jt.clamp(e,1,1e3):20}}function Xm(){if(!ct()||!Ue)return;const n=ki();if(!n.length||Je||Le.dragging)return;const{count:e,spacing:t}=vh();if(!bn())return;const i=[];for(let r=0;r<e;r++)for(const s of n){const o=ja(Ya(s)),a=Qr++;o.id=`unit-${a}`,o.label=`${s.label}-COPY-${a}`,delete o.player,delete o.playerActions,o.routeBinding=void 0,o.trackPoints?.forEach(c=>{c.x+=t*(r+1),c.z+=t*(r+1)}),o.positions.forEach(c=>{c.x+=t*(r+1),c.z+=t*(r+1)}),i.push(o),ot.push(o),ko(o)}Oo(),Yn(i),Us("translate")}ot.forEach(ko);Oo();function at(n){ec(),on(),ve&&!Ar&&!Le.dragging&&!Pt&&ve.setEditor({currentTurn:De,activeRouteId:Pn,sessionId:ve.read().editor.sessionId??"session-working"}),n!=="tools"&&Sh(),qm();const e=Lr(De);St?.sync(),typeof en<"u"&&(Le.dragging?en?.update():en?.sync()),n!=="tools"&&(sn.children.filter(i=>i.userData.trail).forEach(i=>{sn.remove(i),i.traverse(r=>{(r instanceof Ee||r instanceof nn)&&(r.geometry.dispose(),Array.isArray(r.material)?r.material.forEach(s=>s.dispose()):r.material.dispose())})}),e.units.forEach(i=>{fh(i,e.turn),Bm(i,e.turn)})),document.querySelector("#turn-title").textContent=`TURN ${String(e.turn+1).padStart(2,"0")}`,document.querySelector("#turn-indicator").textContent=`${String(e.turn+1).padStart(2,"0")} / ${String(Fm()+1).padStart(2,"0")}`,document.querySelector("#turn-summary").textContent=e.summary,document.querySelector("#unit-count").textContent=String(e.units.length).padStart(2,"0"),document.querySelector("#event-list").textContent=e.events.length===0?"无接触":e.events.map(ow).join(`
`);const t=e.units.find(i=>i.unit===he);t?Ym(t,e):(he=null,kl()),ut.size>1&&(document.querySelector("#selected-name").textContent=`${ut.size} UNITS`,document.querySelector("#selected-detail").textContent=ki().map(i=>i.label).join(" / "),document.querySelector("#distance-readout").textContent=`${sr().length} 个可移动单位 / 编队移动`,document.querySelector("#attitude-readout").textContent="");for(const[i,r]of wi)r.userData.parts.label.userData.dom.classList.toggle("unit-selected",Ue&&ut.has(i))}function ku(){const n=Lr(De),e=n.units.find(s=>s.unit.id===_i),t=n.units.find(s=>s.unit.id===Di),i=An.userData.rangeCenters;if(i)for(const[s,o]of i){const a=n.units.find(l=>l.unit.id===s);if(!a)continue;const c=a.position.clone().sub(o);for(const l of An.children)l.userData.rangeUnitId===s&&l.position.add(c);o.copy(a.position)}An.userData.rangeCenter=i?.get(_i);const r=An.children.find(s=>s.userData.rangeConnector);if(e&&t&&e.unit.id!==t.unit.id&&r){const s=r.geometry.getAttribute("position");s.setXYZ(0,e.position.x,e.position.y,e.position.z),s.setXYZ(1,t.position.x,t.position.y,t.position.z),s.needsUpdate=!0,r.geometry.computeBoundingSphere();const o=Hu(e.position,t.position,"slant",xh());document.querySelector("#range-result").textContent=`${o.band} / 斜距
水平 ${o.horizontalKm.toFixed(2)} km
高差 ${o.altitudeDeltaKm.toFixed(2)} km
斜距 ${o.slantKm.toFixed(2)} km${e.status!=="active"||t.status!=="active"?`
已失效单位 / 仅供参考`:""}`}}function xh(){const n=Tt(),e=n?.sealedScenes?.find(t=>t.turn===De);return yg(e?e.rulesSnapshot:n?.rulesSnapshot)}function Ul(n){_i=n;const e=Li.get(n);e&&(document.querySelector("#range-rings").checked=e.rings,document.querySelector("#range-fill").checked=e.fill,document.querySelector("#range-fill-band").value=e.band,document.querySelector("#range-fill-opacity").value=String(e.opacity))}function xw(n){Li.delete(n),_i===n&&(_i=""),Gn(),at()}function yw(n,e){for(const a of Li.keys())n.units.some(c=>c.unit.id===a)||Li.delete(a);const t=An.userData.rangeLayerKeys??new Map,i=An.userData.rangeCenters??new Map;An.userData.rangeLayerKeys=t,An.userData.rangeCenters=i;const r=a=>{for(const c of[...An.children])if(c.userData.rangeUnitId===a){const l=c;l.geometry.dispose(),Array.isArray(l.material)?l.material.forEach(d=>d.dispose()):l.material.dispose(),An.remove(c)}t.delete(a),i.delete(a)};for(const a of t.keys())Li.has(a)||r(a);for(const[a,c]of Li){const l=n.units.find(h=>h.unit.id===a),d=e.find(h=>h.name===c.band)??e[0],u=JSON.stringify([c,e]);if(t.get(a)!==u){if(r(a),t.set(a,u),i.set(a,l.position.clone()),c.fill){const h=new Ee(new Kr(d.maxKm*tt,48,32),new yn({color:d.color,transparent:!0,opacity:c.opacity,depthWrite:!1,side:Rr}));h.position.copy(l.position),h.userData.rangeFill={band:d.name,radiusKm:d.maxKm},h.userData.rangeCentered=!0,h.userData.rangeUnitId=a,An.add(h)}if(c.rings)for(const h of e){const f=h.maxKm*tt,g=Array.from({length:129},(m,p)=>{const w=p/128*Math.PI*2;return new b(l.position.x+Math.cos(w)*f,l.position.y,l.position.z+Math.sin(w)*f)}),_=ga(g,h.color,1,.5);_.userData.rangeCentered=!0,_.userData.rangeUnitId=a,An.add(_)}}}const s=document.querySelector("#range-layer-list");s&&s.replaceChildren(...Array.from(Li,([a,c])=>{const l=n.units.find(_=>_.unit.id===a),d=document.createElement("div");d.className="range-layer-row",d.dataset.rangeUnitId=a;const u=document.createElement("div");u.textContent=`${l.unit.label} [${a}] · ${c.rings?"截面环":""}${c.rings&&c.fill?" + ":""}${c.fill?`${c.band}球体`:""}`;const h=document.createElement("div");h.className="edit-actions";const f=document.createElement("button");f.type="button",f.textContent="调整",f.setAttribute("aria-label",`调整${l.unit.label}的范围`),f.addEventListener("click",()=>{Ul(a),Gn(),at()});const g=document.createElement("button");return g.type="button",g.textContent="移除",g.setAttribute("aria-label",`移除${l.unit.label}的范围`),g.addEventListener("click",()=>xw(a)),h.appendChild(f),h.appendChild(g),d.appendChild(u),d.appendChild(h),d}));const o=document.querySelector("#range-layer-count");o&&(o.textContent=`常驻范围：${Li.size} 个单位`)}function qm(){const n=Tt()?.id,e=An.userData.rangeSessionId;e&&e!==n&&(Li.clear(),_i=Di=""),An.userData.rangeSessionId=n;const t=xh(),i=Lr(De);i.units.some(g=>g.unit.id===_i)||(_i=""),i.units.some(g=>g.unit.id===Di)||(Di="");for(const[g,_]of[["#range-attacker-name",_i],["#range-target-name",Di]]){const m=i.units.find(p=>p.unit.id===_);document.querySelector(g).textContent=m?`${m.unit.label} [${m.unit.id}] / ${Du[m.status]}`:"尚未选择"}for(const[g,_]of[["#range-attacker-select",_i],["#range-target-select",Di]]){const m=document.querySelector(g);m&&(m.replaceChildren(...["",...i.units.map(p=>p.unit.id)].map(p=>{const w=document.createElement("option");w.value=p;const x=i.units.find(v=>v.unit.id===p);return w.textContent=x?`${x.unit.label} · ${x.unit.kind}`:"选择单位",w})),m.value=_)}document.querySelector("#range-pick-state").textContent=ln?`${ln==="attacker"?"攻击方":"目标"}选择中`:"";for(const g of["attacker","target"])document.querySelector(`#range-pick-${g}`).setAttribute("aria-pressed",String(ln===g));const r=document.querySelector("#range-candidates");r.hidden=!Na.length,r.replaceChildren(...Na.flatMap(g=>{const _=i.units.find(p=>p.unit.id===g);if(!_)return[];const m=document.createElement("button");return m.textContent=`${_.unit.label} [${g}] / ${_.unit.kind} / ${Pm[_.unit.faction]} / ${Du[_.status]}`,m.addEventListener("click",()=>$m(_.unit)),[m]}));const s="slant";document.querySelector("#range-mode-readout").textContent=s.toUpperCase();const o=i.units.find(g=>g.unit.id===_i),a=i.units.find(g=>g.unit.id===Di),c=document.querySelector("#range-result"),l=document.querySelector("#range-fill").checked,d=document.querySelector("#range-rings").checked,u=t.find(g=>g.name===document.querySelector("#range-fill-band").value)??t[0],h=jt.clamp(Number(document.querySelector("#range-fill-opacity").value)||.12,.02,.6);o&&(l||d?Li.set(o.unit.id,{fill:l,rings:d,band:u.name,opacity:h}):Li.delete(o.unit.id)),yw(i,t);const f=JSON.stringify([o?.unit.id,a?.unit.id]);if(!o||!a)c.textContent="请选择攻击方与目标";else if(o===a)c.textContent="攻击方与目标不能相同";else{const g=Hu(o.position,a.position,s,t);c.textContent=`${g.band} / 斜距
水平 ${g.horizontalKm.toFixed(2)} km
高差 ${g.altitudeDeltaKm.toFixed(2)} km
斜距 ${g.slantKm.toFixed(2)} km${o.status!=="active"||a.status!=="active"?`
已失效单位 / 仅供参考`:""}`}if(o&&l&&!a&&(c.textContent=`${u.name} / 3D填充半径 ${u.maxKm} km`),An.userData.rangeVisualKey===f){ku();return}for(const g of[...An.children])if(g.userData.rangeConnector){const _=g;_.geometry.dispose(),Array.isArray(_.material)?_.material.forEach(m=>m.dispose()):_.material.dispose(),An.remove(_)}if(An.userData.rangeVisualKey=f,o&&a&&o!==a){const g=ga([o.position,a.position],15332072,1,.75);g.userData.rangeConnector=!0,An.add(g)}ku()}function Gn(){ln=null,Na=[],It.enabled=!0,vt.domElement.style.cursor=Ot?"crosshair":"",yo()}function $m(n){!ln||!ot.includes(n)||(ln==="attacker"?Ul(n.id):Di=n.id,Gn(),at())}function Sw(n){if(!(Le.dragging||Pt||Je)){if(St?.cancel(),ln===n){Gn(),at();return}Ei(!0),dn=!1,Ot&&Wi(!1),Vt=zt=In=!1,nt=null,ln=n,Na=[],Le.detach(),It.enabled=!0,vt.domElement.style.cursor="crosshair",at(),rt()}}function bw(n,e){Ht()||rn||e&&!Lr(De).units.some(t=>t.unit.id===e)||(n==="attacker"?Ul(e):Di=e,Gn(),at())}for(const n of["attacker","target"])document.querySelector(`#range-pick-${n}`).addEventListener("click",()=>Sw(n)),document.querySelector(`#range-${n}-select`).addEventListener("change",e=>bw(n,e.target.value));document.querySelector("#range-use-selected").addEventListener("click",()=>{!he||Le.dragging||(Ul(he.id),Gn(),at())});document.querySelector("#range-clear").addEventListener("click",()=>{Li.clear(),_i=Di="",Gn(),at()});for(const n of["#range-rings","#range-fill","#range-fill-band","#range-fill-opacity"])document.querySelector(n).addEventListener("change",()=>at());document.querySelector("#edit-panel").addEventListener("click",n=>{const e=n.target instanceof Element?n.target:null;ln&&!e?.closest(".range-panel")&&(Gn(),at())},!0);function kl(){document.querySelector("#selected-name").textContent="未选择",document.querySelector("#selected-detail").textContent="",document.querySelector("#distance-readout").textContent="—",document.querySelector("#attitude-readout").textContent="—"}function Ym(n,e){const{unit:t,status:i}=n;he=t;const r=n.position,s=[Pm[t.faction],Du[i]],o=Xi().groups.find(g=>g.id===t.groupId);o&&s.push(`编组:${o.name}`),t.tgt&&s.push("目标"),t.escort&&t.faction!=="enemy"&&s.push("护卫目标"),document.querySelector("#selected-name").textContent=t.label,document.querySelector("#selected-detail").textContent=`${t.kind} / ${s.join(" / ")}`;const a=e.units.find(g=>g.unit.id===Di),l=a&&a.unit!==t?Hu(r,a.position,"slant",xh()):null;document.querySelector("#distance-readout").textContent=l?`至 ${a.unit.label}：${l.distanceKm.toFixed(2)} km / ${l.band}`:"—";const d=hh(t,e.turn),u=g=>g*180/Math.PI,h=g=>`${u(g)>=0?"+":""}${u(g).toFixed(1)}°`,f=document.querySelector("#attitude-readout");if(d===null){const g=uh(t,e.turn);f.textContent=g===null?"朝向  固定":`朝向 ${h(g)}  （水平）`}else f.textContent=`偏航 ${h(d.yaw)}  俯仰 ${h(d.pitch)}  横滚 ${h(d.roll)}`}function ho(n){if(St?.cancel(),typeof Ct<"u"&&Ct){Gw(n);return}const e=Math.max(0,Math.min(n,Mi()));e!==De&&(Le.dragging||Pt||on()&&(St?.clearSelection(),tc="",Ga(),Ei(!0),es(),De=e,Sn()&&ve&&(ve.setEditor({...ve.read().editor,currentTurn:e}),or(ve.read()),ut.clear(),he=null,Ue=Ii()),at(),rt()))}function Za(){const{width:n,height:e}=zo(),t=tw(_t.extent,_t.extentZ,n/e,yt.fov,360,n);return It.maxDistance=t.maxDistance,yt.far=t.far,yt.near=t.near,yt.updateProjectionMatrix(),t}function yh(){const n=Za();It.target.set(0,0,0),yt.position.copy(new b(0,.65,1).normalize().multiplyScalar(n.distance)),It.update()}function Mw(){const n=Za();It.target.set(0,0,0),yt.position.set(0,n.distance,.001),It.maxPolarAngle=Math.PI*.499,It.update()}const xn=()=>({label:document.querySelector("#edit-label"),kind:document.querySelector("#edit-kind"),faction:document.querySelector("#edit-faction"),icon:document.querySelector("#edit-icon"),tgt:document.querySelector("#edit-tgt"),escort:document.querySelector("#edit-escort"),hidden:document.querySelector("#edit-hidden"),intangible:document.querySelector("#edit-intangible"),lost:document.querySelector("#edit-lost"),remove:document.querySelector("#edit-delete"),undo:document.querySelector("#edit-undo"),redo:document.querySelector("#edit-redo")});let Je=null,qi=!1,Vi="translate",xo="translate";const ww=new b,hn=new vn;ts.add(hn);const Le=new Jb(yt,vt.domElement);Le.setSize(.85);ts.add(Le.getHelper());const dt=n=>document.querySelector(n),Dn=n=>n.icon==="air-filled"||n.icon==="air-outline";function Ka(n){return hh(n,De)??{yaw:_a((uh(n,De)??0)-(n.icon==="ground"?Math.PI:0)),pitch:0,roll:0}}function Hs(){return fi()?Sn()?[De]:Array.from({length:dt("#apply-later").checked?ri()-De:1},(n,e)=>De+e):[]}function jm(n,e){$a(n)&&(n.attitudes??=Array.from({length:ri()},()=>null),Hs().forEach(t=>{n.attitudes[t]={...e}}))}function Zm(n){if(Sn()||!ct()||Tt()?.mapEditRef||!Ue||Je||Le.dragging||Pt||(Ei(!0),!bn()))return;const e=De,t=e+1,i=new Map(ot.map(s=>[s.id,{...Ka(s)}])),r=$n[e];$n.splice(t,0,{summary:n?r.summary:"TACTICAL MOVEMENT / NEW TURN",events:n?r.events.map(s=>({...s})):[]}),ot.forEach(s=>{if(s.trackPoints=Tp(s.trackPoints??[],t,!0),s.routeBinding&&s.routeBinding.startTurn>=t&&s.routeBinding.startTurn++,s.playerActions?.forEach(o=>{o.turn>=t&&o.turn++,o.recordedTurn>=t&&o.recordedTurn++}),s.positions.splice(t,0,s.positions[e].clone()),n)s.attitudes??=Array.from({length:ri()-1},()=>null),s.attitudes.splice(t,0,i.get(s.id));else if(s.attitudes){const o=s.attitudes[e];s.attitudes.splice(t,0,o?{...o}:null)}s.destroyedAtTurn!==void 0&&s.destroyedAtTurn>=t&&(s.destroyedAtTurn+=1)}),$n[t].events=$n[t].events.filter(s=>s.kind!=="destroy"),cr(),nt=null,De=t,at(),rt()}function Ew(){if(Sn()||!ct()||Tt()?.mapEditRef||!Ue||ri()<=1||Je||Le.dragging||(Ei(!0),!bn()))return;const n=De;$n.splice(n,1),ot.forEach(e=>{e.trackPoints=Tp(e.trackPoints??[],n,!1),e.routeBinding&&(e.routeBinding.startTurn=Math.max(0,e.routeBinding.startTurn>=n?e.routeBinding.startTurn-1:e.routeBinding.startTurn)),e.positions.splice(n,1),e.attitudes?.splice(n,1),e.playerActions&&(e.playerActions=e.playerActions.filter(t=>t.turn!==n&&t.recordedTurn!==n).map(t=>({...t,turn:t.turn>n?t.turn-1:t.turn,recordedTurn:t.recordedTurn>n?t.recordedTurn-1:t.recordedTurn}))),e.destroyedAtTurn===n?e.destroyedAtTurn=void 0:e.destroyedAtTurn!==void 0&&e.destroyedAtTurn>n&&(e.destroyedAtTurn-=1)}),cr(),nt=null,De=Math.min(n,Mi()),at(),rt()}function yo(){if(typeof en<"u"&&en?.active()){Le.detach();return}if(!fi()&&!xi()){Le.detach();return}if(ln||St?.isPicking()){Le.detach();return}if(Le.dragging)return;const n=St?.selection();if(n&&xi()&&Ue&&!Ot&&!Je&&!dn){hn.position.set(n.position.x,n.position.y,n.position.z).multiplyScalar(tt);const r=n.kind==="marker"?Xi().markers.find(o=>o.id===n.id):void 0,s=r&&Ci(r)&&n.pointIndex===void 0?xo:"translate";hn.scale.setScalar(1),hn.quaternion.copy(r&&s!=="translate"?Pa(r):new mn),Le.setMode(s),Le.setSpace(s==="translate"?"world":"local"),Le.showX=Le.showY=Le.showZ=!0,Le.attach(hn);return}hn.scale.setScalar(1);const e=Ja();if(ct()&&Ue&&!Ot&&e){const r=nt?.kind==="track"?ot.find(o=>o.id===nt.unitId):void 0,s=!!r&&!Dn(r)&&!r.intangible;hn.position.copy(ca(e,s)),hn.quaternion.identity(),Le.setMode("translate"),Le.setSpace("world"),Le.showX=Le.showZ=!0,Le.showY=!s,Le.attach(hn);return}if(Vt||zt||In){Le.detach();return}if(!Ue||Ot||!he||Je||dn||!sr().length||ut.size>1&&Vi==="rotate"){Le.detach();return}const t=ut.size>1?Ro():Wn(he);hn.position.copy(t),ut.size===1&&hn.position.copy(Tl(he,t,Et,ni)),ww.subVectors(hn.position,t);const i=Ka(he);hn.quaternion.setFromEuler(new ii(i.pitch,i.yaw,i.roll,"YXZ")),Le.setMode(Vi),Le.setSpace(Vi==="translate"?"world":"local"),Le.showX=Vi==="translate"||Dn(he),Le.showY=!0,Le.showZ=Vi==="translate"||Dn(he),Le.attach(hn)}let va="";function Tw(){const n=Hn?.panels.equipment;if(!n||!ve)return;if(Ct){n.replaceChildren(),va="";return}const e=Tt(),t=JSON.stringify([ve.revision,e?.id,De,he?.id,Ue,ct(),Ht(),he?Ya(he):null]);if(t===va&&n.childElementCount)return;va=t,n.replaceChildren();const i=document.createElement("label");i.className="equipment-unit-choice",i.textContent="配置单位";const r=document.createElement("select");r.id="equipment-unit",r.setAttribute("aria-label","配置装备的单位"),r.add(new Option("请选择单位",""));for(const l of ot)r.add(new Option(l.label,l.id));r.value=he?.id??"",r.disabled=Ht(),i.append(r),n.append(i),r.addEventListener("change",()=>{if(Ht()||!r.isConnected)return;const l=ot.find(d=>d.id===r.value);Yn(l?[l]:[])});const s=document.createElement("div");if(s.id="equipment-editor-body",n.append(s),!e||!he||Je){s.textContent=Je?"待落位":"未选择单位";return}const o=e.id,a=he.id,c=De;_g(s,{read:()=>Vm().project,busy:()=>rn||Ht()||he?.id!==a||Tt()?.id!==o||De!==c,report:Qt,commit:(l,d)=>{if(!ve||!ct()||!Ue||Ht()||he?.id!==a||Tt()?.id!==o||De!==c)throw new Error("单位或编辑状态已变化，请重新选择装备。");if(!on())throw new Error("请先完成当前编辑。");const u=ve.read();ve.commit({...u,project:l},d,u),ar(),Vn(!0),Hn?.select("equipment")}},{mode:"session",sessionId:o,unitId:a,turn:c,editable:ct()&&Ue&&!Ht()})}function Aw(n){if(!ve||!ct()||Tt()?.mapEditRef||rn||Ht())throw new Error("请先完成当前操作，再新建玩家。");if(!on())throw new Error("当前编辑尚未保存。");const e=ve.read(),t=Tt().id,i=`player-unit-${crypto.randomUUID()}`,s=Ep(e.project,t,i,n.playerId,n.aircraftRef,n.loadout,{x:0,y:2.4,z:0},De).sessions.find(o=>o.id===t).units.find(o=>o.id===i);Vn(!0),Wi(!1),Ei(!0),dn=!1,Gn(),St?.cancel(),St?.clearSelection(),Vt=zt=In=!1,nt=null,ut.clear(),he=null,kl(),Je=ja({...s,trackPoints:void 0,positions:s.positions.map(o=>({x:o.x*tt,y:o.y*tt,z:o.z*tt}))}),Hi={input:structuredClone(n),player:{...s.player},sessionId:t,turn:De,revision:ve.revision},qi=!1,It.enabled=!0,vt.domElement.style.cursor="",at(),rt()}function Rw(){const n=Hi;!n||!Je||!ve||n.sessionId!==Tt()?.id||n.turn!==De||n.revision!==ve.revision||!ct()||(qi=!0,It.enabled=!1,vt.domElement.style.cursor="crosshair",rt())}function Cw(n){const e=Hi,t=Je;if(!e||!t||!ve)return!1;if(!ct()||!Ue||rn||Le.dragging||Pt||e.sessionId!==Tt()?.id||e.turn!==De||e.revision!==ve.revision)return Qt("玩家放置状态已变化，请取消后重新创建。"),!1;const i=ve.read(),r=n.clone();r.y=t.intangible?Wn(t).y:Dn(t)?Math.max(Wn(t).y,Et(r.x,r.z)+ni):Et(r.x,r.z);try{const s=Ep(i.project,e.sessionId,t.id,e.input.playerId,e.input.aircraftRef,e.input.loadout,{x:r.x/tt,y:r.y/tt,z:r.z/tt},De),o=s.sessions.find(c=>c.id===e.sessionId).units.find(c=>c.id===t.id);o.icon=t.icon,o.faction=t.faction;const a=o.id;return ve.commit({...i,project:s},"创建玩家单位",i),ar(),Vn(!0),Yn(ot.filter(c=>c.id===a)),Qt(`${e.player.callsign} 已放置`),!0}catch(s){return Qt(s instanceof Error?s.message:String(s)),!1}}function Pw(n,e,t){if(!ve||!ct()||Tt()?.mapEditRef||rn||Ht())throw new Error("当前回合为只读或仍有操作待完成。");if(Ue||Vn(!0),!on())throw new Error("当前编辑尚未保存。");const i=ve.read(),r=Tt().id,s=Ig(i.project,r,n,De,e,t==="drop"?"jettison":"use",`player-action-${crypto.randomUUID()}`);ve.commit({...i,project:s},t==="drop"?"登记上一回合抛弃":"登记上一回合使用",i),ar(),Vn(!0),Qt(`已登记${t==="drop"?"抛弃":"使用"}`)}function Km(){if(!Nu||!qr||!ve)return;const n=Tt(),e=!!n?.mapEditRef;qr.hidden=!Dr||e;const t=JSON.stringify([ve.revision,n?.id,De,he?.id,ct(),Ue,Dr,rn,Ht(),Hi,qi]);t!==vl&&(vl=t,Nu.sync({project:ve.read().project,revision:ve.revision,sessionId:n?.id??"",turn:De,selectedUnitId:he?.id,editable:ct()&&!rn&&(Hi!==null||!Ht()),mapOnly:e,...Hi?{pending:{player:{...Hi.player},aircraftRef:{...Hi.input.aircraftRef},loadout:structuredClone(Hi.input.loadout),armed:qi}}:{}}))}function mp(){const n=Je??he,e=Ja();if(e)for(const s of["x","y","z"])dt(`#path-${s}`).value=e[s].toFixed(2);if(!n)return;const t=ut.size>1?Ro():Wn(n),i=Ka(n);for(const s of["x","y","z"])dt(`#edit-${s}`).value=t[s].toFixed(2);const r=document.querySelector("#edit-height");r&&(r.value=(t.y*1e3/tt).toFixed(1));for(const s of["pitch","yaw","roll"])dt(`#edit-${s}`).value=jt.radToDeg(i[s]).toFixed(2)}function rt(){for(const c of Array.from(document.querySelectorAll('#edit-panel [data-mode-disabled="true"]')))c.disabled=!1,delete c.dataset.modeDisabled;Jm(),Uw();const n=xn();dt("#canvas-width").value=String(_t.extent*2/tt),dt("#canvas-height").value=String(_t.extentZ*2/tt),dt("#canvas-samples").value=String(_t.size),Hn||(document.querySelector("#terrain-editor").toggleAttribute("hidden",!Ot),document.querySelector("#unit-editor").toggleAttribute("hidden",Ot)),document.querySelector("#tab-terrain").setAttribute("aria-pressed",String(Ot)),document.querySelector("#tab-units").setAttribute("aria-pressed",String(!Ot)),document.querySelector("#terrain-undo").disabled=!ve?.canUndo||!!Pt,document.querySelector("#terrain-redo").disabled=!ve?.canRedo||!!Pt;const e=Je??he;dt("#turn-summary-edit").value=$n[De].summary,dt("#turn-summary-edit").disabled=!!Je,dt("#edit-lost").max=String(ri());for(const c of["#turn-add","#turn-copy","#turn-delete"])document.querySelector(c).disabled=!!Je||Le.dragging||c==="#turn-delete"&&ri()===1;n.undo.disabled=!ve?.canUndo||!!Je,n.redo.disabled=!ve?.canRedo||!!Je,n.remove.disabled=he===null||!!Je,document.querySelector("#edit-copy").disabled=!ut.size||!!Je,document.querySelector("#tool-rotate").disabled=ut.size>1,document.querySelector("#selection-count").textContent=`已选 ${ut.size} / 可移动 ${sr().length}`,document.querySelector("#tool-box").setAttribute("aria-pressed",String(dn)),document.querySelector("#unit-picker").replaceChildren(...ot.map(c=>{const l=document.createElement("button"),d=Xi().groups.find(u=>u.id===c.groupId);return l.textContent=d?`${c.label} · ${d.name}`:c.label,d&&(l.style.borderColor=d.color),l.setAttribute("aria-pressed",String(ut.has(c.id))),l.disabled=!!Je,l.addEventListener("click",u=>Rl(c,u.shiftKey||u.ctrlKey||u.metaKey||dt("#select-additive").checked)),l}));const i=["urban","erase-urban"].includes(document.querySelector("#terrain-brush").value);for(const c of["#urban-density","#urban-angle","#urban-seed"])dt(c).closest("label").toggleAttribute("hidden",!i);dt("#terrain-strength").closest("label").toggleAttribute("hidden",i),dt("#terrain-flat").closest("label").toggleAttribute("hidden",i),[n.label,n.kind,n.faction,n.icon,n.tgt,n.escort,n.hidden,n.intangible,n.lost].filter(Boolean).forEach(c=>{c.disabled=!e}),n.label.value=e?.label??"",n.kind.value=e?.kind??"",n.faction.value=e?.faction??"enemy",n.icon.value=e?.icon??"air-outline",n.tgt.checked=e?.tgt===!0,n.hidden&&(n.hidden.checked=e?.hidden===!0),n.intangible&&(n.intangible.checked=e?.intangible===!0),n.escort.checked=e?.escort===!0&&e.faction!=="enemy",n.lost.value=e?.destroyedAtTurn===void 0?"":String(e.destroyedAtTurn+1),document.querySelector("#placement-actions").toggleAttribute("hidden",!Je),document.querySelector("#edit-state").textContent=Je?qi?"点选中":"待落位":ut.size>1?`编队移动 / 主单位 ${he?.label??"-"} / 回合 ${De+1}`:he?`回合 ${De+1} / ${he.attitudes?.[De]?"手动姿态":"自动姿态"}`:"未选择",document.querySelector("#edit-place").disabled=qi,document.querySelector("#edit-auto").disabled=!he||!!Je||ut.size>1;const r=!Je&&ut.size>1?Ro():e?Wn(e):new b,s=e?Ka(e):{yaw:0,pitch:0,roll:0};for(const c of["x","y","z"]){const l=dt(`#edit-${c}`);l.disabled=!e||!!Je&&c!=="y",l.value=e?r[c].toFixed(2):""}for(const c of["pitch","yaw","roll"]){const l=dt(`#edit-${c}`);l.disabled=!e||!Je&&ut.size>1||c!=="yaw"&&!Dn(e),l.value=e?jt.radToDeg(s[c]).toFixed(2):""}const o=document.querySelector("#edit-height");o&&(o.value=e?(r.y*1e3/tt).toFixed(1):"",o.disabled=!e),document.querySelector("#tool-move").setAttribute("aria-pressed",String(Vi==="translate")),document.querySelector("#tool-rotate").setAttribute("aria-pressed",String(Vi==="rotate"));const a=!!Tt()?.mapEditRef;document.querySelector("#tab-units").toggleAttribute("hidden",a),a&&!Hn&&document.querySelector("#unit-editor").setAttribute("hidden","");for(const c of["#turn-add","#turn-copy","#turn-delete"])Sn()&&(document.querySelector(c).disabled=!0);Sn()&&(dt("#apply-later").disabled=!0),Iw(),Ui(),yo(),Hn?.sync({editing:Ue,editable:xi(),mapOnly:a,active:Dr,playerView:Ct,viewerCanUndo:!!ve?.canUndo,viewerCanRedo:!!ve?.canRedo}),Hm?.sync(),St?.sync(),typeof en<"u"&&en?.sync(),Tw(),Km()}function Jm(){!fi()&&!xi()&&(Ue=!1),ct()||(Ot=Vt=In=zt=!1,nt=null),Hn||document.querySelector("#edit-panel").toggleAttribute("hidden",!Ue),document.querySelector("#mode-readout").textContent=Ue?Sn()?"草稿编辑":"EDIT":"VIEW"}const Dw=new Set(["edit-x","edit-y","edit-z","edit-height","edit-pitch","edit-yaw","edit-roll","edit-auto","edit-lost","turn-summary-edit","select-clear","select-additive","tool-box","tool-move","tool-rotate","move-snap","rotate-snap","trail-display","trail-turns","edit-undo","edit-redo","tab-units"]);function gp(n){return Dw.has(n.id)||!!n.closest("#unit-picker")}function Qm(n){return!!n.closest(".sidebar-header,.sidebar-nav,.range-panel,.trail-panel,.archive-panel,.selection-panel,.sidebar-bound-list,#unit-picker,#route-list,#track-list")||["route-select","route-group-select","route-select-bound","route-visible","route-labels","select-clear","select-additive"].includes(n.id)}function Lw(n,e){const t=xn().escort;t.disabled=!n||!e||n.faction==="enemy",t.checked=n?.escort===!0&&n.faction!=="enemy"}function Iw(){const n=fi()&&Ue,e=ct()&&Ue;for(const r of Array.from(document.querySelectorAll("#unit-editor input, #unit-editor button, #unit-editor select, #unit-editor textarea, #terrain-editor input, #terrain-editor button, #terrain-editor select, #route-section input, #route-section button, #route-section select, #turn-summary-edit")))Qm(r)||(!e&&(!n||!gp(r))?r.disabled=!0:e&&r.dataset.modeDisabled==="true"&&(r.disabled=!1),r.dataset.modeDisabled=String(!e&&(!n||!gp(r))));const t=Je??he;for(const r of["edit-x","edit-y","edit-z","edit-height","edit-pitch","edit-yaw","edit-roll","edit-auto"]){const s=document.getElementById(r);(!n||t&&!Je&&!$a(t))&&(s.disabled=!0)}const i=xn().lost;Lw(t,e),i.disabled=!t||!n||!e&&!_h(t),i.min=String(e?1:De+1),i.max=String(e?ri():De+1),i.step="1"}for(const n of["click","change","input","keydown","pointerdown"])document.querySelector("#edit-panel").addEventListener(n,e=>{const t=e.target instanceof Element?e.target.closest("button, input, select, textarea"):null;!t||Qm(t)||t.closest("#workflow-panel")||t.closest('[data-sidebar-panel="groups"],[data-sidebar-panel="markers"],[data-sidebar-panel="drawing"],[data-sidebar-panel="equipment"],[data-sidebar-panel="links"]')||ct()&&Ue||(e.preventDefault(),e.stopImmediatePropagation())},!0);function es(){Hi=null,Je=null,qi=!1,vt.domElement.style.cursor="",It.enabled=!0,rt()}function Vn(n){if(n&&!fi()&&!xi()){Jm(),Ui();return}on()&&(St?.cancel(),typeof en<"u"&&en?.cancel(),ln&&Gn(),Ue=n,Hn||document.querySelector("#edit-panel").toggleAttribute("hidden",!n),document.querySelector("#mode-readout").textContent=n?"EDIT":"VIEW",vt.domElement.style.cursor=n&&Ot?"crosshair":"",n||(Vt=zt=!1,nt=null,Sh(),Qa(),Ot=!1,Gi.visible=!1,Ei(!0),dn=!1,es()),at(),rt())}function Fi(n,e=!1,t="metadata"){if(!fi()||!Ue||t==="metadata"&&!ct()||he&&!Je&&(t==="pose"&&!$a(he)||t==="loss"&&!_h(he)))return;if(Je){n(Je),xl(Je,Je.positions.map((s,o)=>o)),rt();return}if(!he)return;const i=he.icon,r=he.intangible;bn(t==="metadata"?"author":"draft")&&(n(he),zs(he)&&(t==="pose"||he.icon!==i||he.intangible!==r)&&xl(he),e&&gw(he),at(),rt())}function Us(n){!fi()||!Ue||n==="rotate"&&ut.size>1||(dn=!1,Vi=n,rt())}Le.addEventListener("dragging-changed",n=>{if(It.enabled=!n.value,n.value){Ui();return}on("Transform units / path"),rt()});let Rn=null,Oa=null,za=!1,gi=null;function Nw(n,e,t){if(!jn)return;const i=r=>({x:r.x+t.x/tt,y:r.y+t.y/tt,z:r.z+t.z/tt});if(e.kind==="marker"){const r=n.markers.find(o=>o.id===e.id),s=jn.markers.find(o=>o.id===e.id);if(r&&s)if(Ci(r)&&e.pointIndex!==void 0){const o=gs(r);o[e.pointIndex]=i(o[e.pointIndex]);const a=Zc(r,o);Object.assign(s,a)}else s.position=i(r.position),r.controlPoints&&(s.controlPoints=r.controlPoints.map(i))}else{const r=n.drawings.find(o=>o.id===e.id),s=jn.drawings.find(o=>o.id===e.id);r&&s&&(s.points=r.points.map((o,a)=>e.pointIndex===void 0||a===e.pointIndex?i(o):{...o}))}}const Ba=new Map;let ao=[];const Fu=new b;Le.addEventListener("mouseDown",()=>{if(!fi()&&!(xi()&&St?.selection())||!Ue||!ct()&&nt){Le.detach();return}za=!1,Oa=Ar??ve?.read()??null,Rn=Ll(),gi=St?.selection()??null,Fu.copy(hn.position),ao=Hs(),Ba.clear(),sr().forEach(n=>Ba.set(n.id,n.positions.map(e=>e.clone())))});Le.addEventListener("mouseUp",()=>{Rn&&!Co(gi?Rn.sceneTools:Rn,gi?jn:Ll())&&(Ar=Oa),Rn=null,Oa=null,za=!1,gi=null});Le.addEventListener("objectChange",()=>{if(!fi()&&!(xi()&&gi)||!Ue||!Rn||za)return;if(gi&&Rn.sceneTools){if(!xi())return;try{const e=Rn.sceneTools.markers.find(i=>i.id===gi.id),t=jn?.markers.find(i=>i.id===gi.id);if(gi.kind==="marker"&&gi.pointIndex===void 0&&e&&t&&Ci(e)&&xo!=="translate"){const i=new ii().setFromQuaternion(hn.quaternion,"YXZ"),r=xo==="rotate"?{pitch:i.x,yaw:i.y,roll:i.z}:e.attitude??{pitch:0,yaw:0,roll:0},s=Le.axis??"XYZ",o=s.includes("X")?"x":s.includes("Y")?"y":"z",a=(e.sizeKm??.12)*(xo==="scale"?Math.abs(hn.scale[o]):1);Object.assign(t,Tm(e,e.position,r,a))}else Nw(Rn.sceneTools,gi,hn.position.clone().sub(Fu))}catch(e){Qt(e instanceof Error?e.message:String(e));return}St?.syncPosition?St.syncPosition():St?.sync(),typeof en<"u"&&en?.update();return}const n=Ja();if(n){if(!ct())return;const e=nt?.kind==="track"?ot.find(t=>t.id===nt.unitId):void 0;n.x=hn.position.x,n.y=e?.intangible?hn.position.y:Math.max(0,hn.position.y),n.z=hn.position.z,e&&!Dn(e)&&!e.intangible&&(n.y=Et(n.x,n.z)),nt?.kind==="waypoint"&&cr(),at(),mp();return}if(he){if(Vi==="translate"){const e=hn.position.clone().sub(Fu),t=sr().filter(i=>Dn(i)&&!i.intangible).map(i=>Ba.get(i.id)).filter(Boolean);t.length&&(e.y=Math.max(e.y,...t.flatMap(i=>ao.map(r=>{const s=i[r];return Math.max(0,Et(s.x+e.x,s.z+e.z))-s.y})))),sr().forEach(i=>{const r=Ba.get(i.id);if(r){ct()&&!Sn()&&(i.routeBinding=void 0),ao.forEach(o=>i.positions[o].copy(r[o]).add(e));const s=Rn?.units.find(o=>o.id===i.id)?.trackPoints;ct()&&s&&(i.trackPoints=s.map(o=>ao.includes(o.segment)&&ao.includes(o.segment+1)?{...o,x:o.x+e.x,y:o.y+e.y,z:o.z+e.z}:{...o})),xl(i,ao),Uu(i)}})}else{const e=new ii().setFromQuaternion(hn.quaternion,"YXZ");jm(he,{yaw:e.y,pitch:Dn(he)?e.x:0,roll:Dn(he)?e.z:0})}Vi!=="translate"&&Uu(he),ku(),mp()}});function Po(n){rr.x=n.clientX/innerWidth*2-1,rr.y=-(n.clientY/innerHeight)*2+1,tr.setFromCamera(rr,yt);let e=0;const t=new b;for(let i=2;i<yt.far;i+=2){const r=tr.ray.at(i,t);if(r.y<=Et(r.x,r.z)){let s=e,o=i;for(let c=0;c<18;c++){const l=(s+o)/2,d=tr.ray.at(l,t);d.y>Et(d.x,d.z)?s=l:o=l}const a=tr.ray.at(o,new b);return a.y=Et(a.x,a.z),a}e=i}return null}let dn=!1,vi=null;const ks=document.createElement("div");ks.className="selection-box";ks.hidden=!0;document.querySelector("#app").appendChild(ks);function Ei(n=!1,e){if(!vi)return;const t=vi;if(vi=null,ks.hidden=!0,It.enabled=!qi,vt.domElement.hasPointerCapture(t.pointerId)&&vt.domElement.releasePointerCapture(t.pointerId),n||!e)return;const i=Math.min(t.x,e.clientX),r=Math.max(t.x,e.clientX),s=Math.min(t.y,e.clientY),o=Math.max(t.y,e.clientY);ts.updateMatrixWorld(!0),yt.updateMatrixWorld(!0);const a=ot.filter(c=>{if(Bs(c,De)==="wreck")return!1;const d=wi.get(c.id).userData.parts.icon.getWorldPosition(new b).project(yt),u=(d.x+1)*innerWidth/2,h=(1-d.y)*innerHeight/2;return d.z>=-1&&d.z<=1&&u>=i&&u<=r&&h>=s&&h<=o});Yn(t.additive?[...new Set([...ki(),...a])]:a),ut.size>1&&(Vi="translate"),rt()}function yl(n){rr.x=n.clientX/innerWidth*2-1,rr.y=-(n.clientY/innerHeight)*2+1,tr.setFromCamera(rr,yt);const e=tr.intersectObjects(sn.children.filter(t=>t.userData.editorTools),!0).filter(t=>Sl(t.object)).filter(t=>{for(let i=t.object;i;i=i.parent)if(i.userData.editorTool)return!0;return!1});return e.find(t=>t.object.userData.editorTool?.pointIndex!==void 0)??e[0]}vt.domElement.addEventListener("pointerdown",n=>{if(n.button!==0||!Dr||n.altKey||Je||Ot||Le.dragging||Le.axis!==null||Pt||ln||St?.isPicking())return;if(en?.active()){n.preventDefault(),n.stopImmediatePropagation();const t=Fl(n)[0];for(let r=t?.object??null;r;r=r.parent){const s=r.userData.unit;if(s){en.pick("unit",s.id);return}}const i=yl(n);for(let r=i?.object??null;r;r=r.parent)if(r.userData.editorTool?.kind==="marker"){St?.selectObject?.(i.object);return}return}if(!Ue||dn||Vt||zt||In)return;const e=yl(n);e&&St?.selectObject?.(e.object)&&(n.preventDefault(),n.stopImmediatePropagation())},!0);vt.domElement.addEventListener("dblclick",n=>{n.button!==0||!Dr||Ht()||ln||Vt||zt||In||Ot||dn||Le.axis!==null||Fl(n).length||typeof yl<"u"&&yl(n)||tr.intersectObject(Ki,!0).some(t=>t.object.userData.pathPoint)||Yn([])});vt.domElement.addEventListener("pointerdown",n=>{if(Ct||St?.isPicking()||ln||!Ue||Ot||Vt||In||nt||Je||n.button!==0||!(dn||n.shiftKey))return;n.stopImmediatePropagation(),n.preventDefault();const e=Fl(n)[0]?.object.userData.unit;if(e&&!dn){Rl(e,!0);return}It.enabled=!1,Le.axis=null,vi={x:n.clientX,y:n.clientY,additive:n.shiftKey||n.ctrlKey||n.metaKey||dt("#select-additive").checked,pointerId:n.pointerId},ks.hidden=!1,ks.style.cssText=`left:${n.clientX}px;top:${n.clientY}px;width:0;height:0`,vt.domElement.setPointerCapture(n.pointerId)},!0);vt.domElement.addEventListener("pointermove",n=>{vi&&(n.stopImmediatePropagation(),ks.style.cssText=`left:${Math.min(vi.x,n.clientX)}px;top:${Math.min(vi.y,n.clientY)}px;width:${Math.abs(n.clientX-vi.x)}px;height:${Math.abs(n.clientY-vi.y)}px`)},!0);vt.domElement.addEventListener("pointerup",n=>{vi&&(n.stopImmediatePropagation(),Ei(!1,n))},!0);vt.domElement.addEventListener("pointercancel",()=>Ei(!0));vt.domElement.addEventListener("pointerdown",n=>{if(St?.isPicking()||ln||n.button!==0||Ot||Vt||zt||In||nt)return;if(Je&&qi){if(!ct()||!Ue)return;const t=Po(n);if(!t)return;if(Hi){n.stopImmediatePropagation(),Cw(t);return}const i=Je,{count:r,spacing:s}=vh(),o=Math.ceil(Math.sqrt(r)),a=[];if(!bn())return;for(let c=0;c<r;c++){const l=ja(Ya(i)),d=Qr++;l.id=`unit-${d}`,l.label=r===1?i.label:`${i.label}-${String(c+1).padStart(2,"0")}`;const u=t.clone();u.x+=c%o*s,u.z+=Math.floor(c/o)*s;const h=Et(u.x,u.z);u.y=l.intangible?Wn(i).y:Dn(l)?Math.max(Wn(i).y,h+ni):h,l.positions=Array.from({length:ri()},()=>u.clone()),ot.push(l),a.push(l),ko(l)}Je=null,qi=!1,It.enabled=!0,vt.domElement.style.cursor="",Oo(),Yn(a),Us("translate");return}if(Je||Le.dragging||Ue&&Le.axis!==null)return;const e=Fl(n)[0]?.object.userData.unit;e&&Rl(e,Ue&&(n.ctrlKey||n.metaKey||dt("#select-additive").checked))});document.querySelector("#edit-place").addEventListener("click",()=>{Je&&(qi=!0,It.enabled=!1,vt.domElement.style.cursor="crosshair",rt())});document.querySelector("#edit-cancel").addEventListener("click",es);document.querySelector("#tool-move").addEventListener("click",()=>Us("translate"));document.querySelector("#tool-rotate").addEventListener("click",()=>Us("rotate"));for(const n of["x","y","z"])dt(`#edit-${n}`).addEventListener("change",()=>{const e=Number(dt(`#edit-${n}`).value);if(Number.isFinite(e)){if(!Je&&ut.size>1){const t=new b;t[n]=e-Ro()[n],Ua(t)}else if(Je)Fi(t=>{Wn(t,!0)[n]=n==="y"&&!t.intangible?Math.max(0,e):e});else if(he){const t=new b;t[n]=e-Wn(he)[n],Ua(t)}}});document.querySelector("#edit-height")?.addEventListener("change",()=>{const n=dt("#edit-height"),e=Number(n.value);if(!n.value.trim()||!Number.isFinite(e)){rt();return}const t=Je?Wn(Je).y:he?ut.size>1?Ro().y:Wn(he).y:void 0,i=(Je?[Je]:sr()).some(s=>zs(s)&&(Je?s.positions:Hs().map(o=>s.positions[o])).some(o=>o.y!==Et(o.x,o.z)));if(t!==void 0&&n.value===(t*1e3/tt).toFixed(1)&&!i)return;const r=e*tt/1e3;if(Je)Fi(s=>{Wn(s,!0).y=s.intangible?r:Math.max(0,r)});else if(he){const s=new b(0,r-(ut.size>1?Ro().y:Wn(he).y),0);Ua(s)}});for(const n of["pitch","yaw","roll"])dt(`#edit-${n}`).addEventListener("change",()=>{const e=Number(dt(`#edit-${n}`).value);Number.isFinite(e)&&Fi(t=>{const i={...Ka(t),[n]:jt.degToRad(e)};Je?t.attitudes=Array.from({length:ri()},()=>({...i})):jm(t,i)},!1,"pose")});document.querySelector("#edit-auto").addEventListener("click",()=>Fi(n=>{n.attitudes&&Hs().forEach(e=>{n.attitudes[e]=null})},!1,"pose"));document.querySelector("#turn-add").addEventListener("click",()=>Zm(!1));document.querySelector("#turn-copy").addEventListener("click",()=>Zm(!0));document.querySelector("#turn-delete").addEventListener("click",Ew);dt("#turn-summary-edit").addEventListener("change",()=>{if(!fi()||!Ue)return;const n=dt("#turn-summary-edit").value.trim();n===$n[De].summary||Je||Wm({type:"set-turn-summary",sessionId:ve?.read().editor.sessionId??"session-working",turn:De,summary:n||"UNTITLED TURN"})});dt("#move-snap").addEventListener("change",()=>Le.setTranslationSnap(Number(dt("#move-snap").value)>0?Number(dt("#move-snap").value):null));dt("#rotate-snap").addEventListener("change",()=>Le.setRotationSnap(Number(dt("#rotate-snap").value)>0?jt.degToRad(Number(dt("#rotate-snap").value)):null));document.querySelector("#edit-copy").addEventListener("click",Xm);document.querySelector("#select-clear").addEventListener("click",()=>Yn([]));document.querySelector("#tool-box").addEventListener("click",()=>{dn=!dn,rt()});document.querySelector("#edit-add").addEventListener("click",_w);document.querySelector("#edit-delete").addEventListener("click",vw);document.querySelector("#edit-undo").addEventListener("click",Il);document.querySelector("#edit-redo").addEventListener("click",Nl);xn().label.addEventListener("change",()=>{if(Je){Fi(n=>{n.label=xn().label.value||n.id});return}he&&Wm({type:"rename-unit",sessionId:ve?.read().editor.sessionId??"session-working",unitId:he.id,label:xn().label.value||he.id})});xn().kind.addEventListener("change",()=>Fi(n=>{n.kind=xn().kind.value||"UNKNOWN"}));xn().faction.addEventListener("change",()=>Fi(n=>{n.faction=xn().faction.value,n.faction==="enemy"&&delete n.escort},!0));xn().icon.addEventListener("change",()=>Fi(n=>{n.icon=xn().icon.value},!0));xn().tgt.addEventListener("change",()=>Fi(n=>{n.tgt=xn().tgt.checked}));xn().escort.addEventListener("change",()=>{const n=Je??he;if(!n||n.faction==="enemy"||!ct()||!Ue){rt();return}Fi(e=>{e.escort=xn().escort.checked})});xn().hidden?.addEventListener("change",()=>Fi(n=>{n.hidden=xn().hidden.checked}));xn().intangible?.addEventListener("change",()=>Fi(n=>{if(n.intangible=xn().intangible.checked,!n.intangible){const e=Je===n?n.positions.map((t,i)=>i):Hs();e.forEach(t=>{const i=n.positions[t];i.y=Dn(n)?Math.max(i.y,Et(i.x,i.z),0):Et(i.x,i.z)}),n.trackPoints?.forEach(t=>{e.includes(t.segment)&&e.includes(t.segment+1)&&(t.y=Dn(n)?Math.max(t.y,Et(t.x,t.z),0):Et(t.x,t.z))})}}));xn().lost.addEventListener("change",()=>{if(!fi()||!Ue||he&&!_h(he))return;const n=xn().lost.value.trim();if(Sn()&&n!==""&&Number(n)!==De+1){Qt("损失回合仅可留空或填写当前草稿回合"),rt();return}Fi(e=>{const t=Number(n),i=e.destroyedAtTurn;e.destroyedAtTurn=n===""||Number.isNaN(t)?void 0:Math.max(0,Math.min(t-1,Mi())),Sn()&&i!==e.destroyedAtTurn&&($n[De].events=$n[De].events.filter(r=>r.kind!=="destroy"||r.target!==e.id),e.destroyedAtTurn===De&&$n[De].events.push({kind:"destroy",target:e.id})),cr()},!0,"loss")});document.querySelector("#prev-turn").addEventListener("click",()=>ho(De-1));document.querySelector("#next-turn").addEventListener("click",()=>ho(De+1));addEventListener("keydown",n=>{const e=n.key.toLowerCase();if(typeof en<"u"&&en?.active()&&n.key==="Escape"){en.cancel(),rt(),n.preventDefault();return}if(St?.isPicking()){n.key==="Escape"&&(St.cancel(),at(),n.preventDefault());return}if(ln&&n.key==="Escape"){Gn(),at(),n.preventDefault();return}if(!(ln&&["e","t","b","w","q","d","a","pageup","pagedown"].includes(e))){if(n.key==="Escape"&&Le.dragging&&gi){Le.reset(),Rn&&(jn=Rn.sceneTools?structuredClone(Rn.sceneTools):void 0),Rn=null,Oa=null,za=!0,gi=null,St?.sync(),n.preventDefault();return}if(n.key==="Escape"&&Le.dragging&&nt){if(Le.reset(),Rn){const t=Rn;_n.splice(0,_n.length,...t.routes.map(i=>({...i,waypoints:i.waypoints.map(r=>({...r}))}))),Pn=t.activeRouteId,ot.forEach(i=>{const r=t.units.find(s=>s.id===i.id);r&&(i.positions=r.positions.map(s=>new b(s.x,s.y,s.z)),i.trackPoints=r.trackPoints?.map(s=>({...s})))}),Rn=null,za=!0,at(),rt()}n.preventDefault();return}if(n.key==="Escape"&&(Vt||zt||nt)){Vt=zt=!1,nt=null,at(),rt();return}if(n.key==="Escape"&&Pt){Qa(!0);return}if(n.key==="Escape"&&Je){es();return}if(!n.target?.matches("input, select, textarea, [contenteditable]")&&document.querySelector("#manager-panel").hidden&&!(typeof Ct<"u"&&Ct&&["t","b","w","q","d","a","pageup","pagedown"].includes(e))){if(e==="t"&&Ue){Hn?Hn.select(Ot?"units":"terrain"):Wi(!Ot);return}if(!((Ot||nt||Vt||zt)&&["b","w","q","d","a","pageup","pagedown"].includes(e))){if(n.key==="Escape"){vi?Ei(!0):Le.dragging?Le.reset():(dn=!1,Yn([]));return}if(Ue&&e==="b"&&(dn=!dn,rt()),Ue&&(n.ctrlKey||n.metaKey)&&e==="d"){n.preventDefault(),Xm();return}if(Ue&&(n.ctrlKey||n.metaKey)&&e==="a"){n.preventDefault(),Je||Yn(ot.filter(t=>Bs(t,De)==="active"));return}if(Ue&&e==="w"&&Us("translate"),Ue&&e==="q"&&Us("rotate"),(n.ctrlKey||n.metaKey)&&e==="z"){n.preventDefault(),Il();return}if((n.ctrlKey||n.metaKey)&&e==="y"){n.preventDefault(),Nl();return}if(n.key==="ArrowLeft"&&ho(De-1),n.key==="ArrowRight"&&ho(De+1),n.key==="Home"&&ho(0),n.key==="End"&&ho(Fm()),e==="r"&&yh(),e==="e"&&Vn(!Ue),n.key==="PageUp"&&Ue&&he&&(n.preventDefault(),Ua(new b(0,10,0))),n.key==="PageDown"&&Ue&&he&&(n.preventDefault(),Ua(new b(0,-10,0))),e==="f"&&he){const t=Lr(De).units.find(i=>i.unit===he);t&&(It.target.set(t.position.x,t.position.y*.35,t.position.z),It.update())}}}}});function Ja(){if(!ct()||!nt)return null;if(nt.kind==="waypoint")return _n.flatMap(e=>e.waypoints).find(e=>e.id===nt.id)??null;const n=nt;return ot.find(e=>e.id===n.unitId)?.trackPoints?.find(e=>e.id===n.id)??null}function cr(){if(Sn()||!ct())return;const n=new Set;for(const e of ot){const t=e.routeBinding,i=_n.find(a=>a.id===t?.routeId);if(!t||!i?.waypoints.length)continue;const r=t.offset??{x:0,y:0,z:0},s=i.waypoints.map(a=>({x:a.x+r.x,y:a.y+r.y,z:a.z+r.z})),o=Sg(e.positions,s,t.startTurn,e.destroyedAtTurn);e.positions=o.map((a,c)=>new b(a.x,c<=t.startTurn||e.intangible?a.y:Dn(e)?Math.max(a.y,Et(a.x,a.z)+ni):Et(a.x,a.z),a.z)),n.add(e.id)}for(let e=1;e<ri();e++){const t=new Map;ot.filter(s=>n.has(s.id)&&s.routeBinding?.formationId&&e>s.routeBinding.startTurn&&(s.destroyedAtTurn===void 0||e<=s.destroyedAtTurn)).forEach(s=>{const o=s.routeBinding.formationId;t.set(o,[...t.get(o)??[],s])});for(const s of t.values()){const o=s.filter(c=>Dn(c)&&!c.intangible);let a=0;o.forEach(c=>{const l=c.routeBinding,d=_n.find(g=>g.id===l.routeId),u=d.waypoints[Math.min(e-l.startTurn-1,d.waypoints.length-1)],h=c.positions[e],f=u.y+(l.offset?.y??0);h.y=f,a=Math.max(a,Et(h.x,h.z)+ni-f)}),o.forEach(c=>{c.positions[e].y+=a})}const i=ot.filter(s=>!s.intangible).map(s=>({id:s.id,point:s.positions[e],fixed:!n.has(s.id)||!!s.routeBinding?.formationId||e<=(s.routeBinding?.startTurn??Mi())||s.destroyedAtTurn!==void 0&&e>s.destroyedAtTurn})),r=bg(i,8);for(const s of ot){if(!n.has(s.id))continue;const o=s.routeBinding;if(!(e<=o.startTurn)){if(s.destroyedAtTurn!==void 0&&e>s.destroyedAtTurn)s.positions[e].copy(s.positions[s.destroyedAtTurn]);else if(!o.formationId){const a=r.get(s.id)??s.positions[e];s.positions[e].set(a.x,s.intangible?a.y:Dn(s)?Math.max(a.y,Et(a.x,a.z)+ni):Et(a.x,a.z),a.z)}}}}}function ca(n,e=!1){return new b(n.x,e?Et(n.x,n.z)+ni:n.y,n.z)}function Sh(){if(Ps(Ki),Ki=new Cn,sn.add(Ki),ml.replaceChildren(),Iu.length=0,typeof Ct<"u"&&Ct)return;const n=(i,r,s,o=!1)=>{const a=nt?.id===r.id&&nt.kind===r.kind&&(r.kind!=="waypoint"||nt.kind==="waypoint"&&(!r.routeId||nt.routeId===r.routeId||Pn===r.routeId)),c=new Ee(new Kr(a?4:2.8,10,8),new yn({color:a?16777215:s,depthTest:!1}));c.position.copy(ca(i,o)),c.userData.pathPoint=r,c.renderOrder=10,Ki.add(c)},e=document.querySelector("#route-visible")?.checked??!0,t=document.querySelector("#route-labels")?.checked??!0;if(e)for(const i of _n){const r=ot.filter(l=>l.routeBinding?.routeId===i.id),s=[...new Set(r.map(l=>Xi().groups.find(d=>d.id===l.groupId)?.name).filter(Boolean))],o=r.filter(l=>!l.groupId||!Xi().groups.some(d=>d.id===l.groupId)).map(l=>l.label),a=[...s.map(l=>`编组:${l}`),...o].join(" / ")||"未绑定",c=i.id===Pn?16767050:7649492;i.waypoints.length>1&&Ki.add(ga(i.waypoints.map(l=>ca(l)),c,1,i.id===Pn?.7:.4)),i.waypoints.forEach((l,d)=>{n(l,{kind:"waypoint",id:l.id,routeId:i.id},c);const u=new b(l.x,Et(l.x,l.z)+.35,l.z);if(Ki.add(ga([u,ca(l)],c,1,.5)),Ki.add(ga([new b(l.x-4,u.y,l.z),new b(l.x+4,u.y,l.z),u.clone(),new b(l.x,u.y,l.z-4),new b(l.x,u.y,l.z+4)],c,1,.7)),!t)return;const h=document.createElement("button");h.className="waypoint-label",h.textContent=`${i.name} · ${d+1} · ${a}`,h.title=`${i.name} / 航路点 ${d+1}
绑定单位：${r.map(f=>f.label).join("、")||"无"}
${a}`,h.addEventListener("click",()=>{Le.dragging||Pt||St?.isPicking()||(Pn=i.id,Vt=zt=!1,nt=ct()&&Ue?{kind:"waypoint",id:l.id,routeId:i.id}:null,Hn?.select("routes"),at(),rt())}),ml.appendChild(h),Iu.push({dom:h,position:ca(l).add(new b(0,5,0))})})}if(!(!ct()||!Ue||Ot)&&In&&he&&ut.size===1&&Bs(he,De)!=="wreck"&&document.querySelector("#trail-display").value!=="none"){const i=!Dn(he)&&!he.intangible,r=Math.min(Mi(),he.destroyedAtTurn??Mi());he.trackPoints?.filter(o=>o.segment<r).forEach(o=>n(o,{kind:"track",unitId:he.id,id:o.id},ma[he.faction],i));const s=ph(he,De);for(const o of mh(he,s,r)){const{segment:a,points:c}=o;i&&c.forEach(d=>{d.y=Et(d.x,d.z)+ni});const l=zm(c,ma[he.faction]);l.userData.editSegment=a,l.userData.trackPart=o,l.traverse(d=>{d.userData.editSegment=a,d instanceof Ee&&(d.material.dispose(),d.material=new yn({color:ma[he.faction],transparent:!0,opacity:.65,side:fn,depthTest:!1}))}),Ki.add(l)}}}function Uw(){const n=Ao(),e=document.querySelector("#route-select");e.replaceChildren(..._n.map(f=>{const g=document.createElement("option");return g.value=f.id,g.textContent=f.name,g})),e.value=Pn,dt("#route-name").value=pl()?.name??"";const t=(f,g)=>{const _=document.createElement("button");return _.textContent=f,_.setAttribute("aria-pressed",String(nt?.id===g.id)),_.addEventListener("click",()=>{if(Le.dragging||Pt||St?.isPicking())return;Vt=zt=!1,nt=ct()&&Ue?g:null;const m=g.kind==="waypoint"?Ao().find(p=>p.id===g.id):he?.trackPoints?.find(p=>p.id===g.id);m&&!ct()&&gh({x:m.x/tt,y:m.y/tt,z:m.z/tt}),at(),rt()}),_};document.querySelector("#route-list").replaceChildren(...n.map((f,g)=>t(`WP ${g+1}`,{kind:"waypoint",id:f.id})));const i=he&&ut.size===1?he.trackPoints??[]:[];document.querySelector("#track-list").replaceChildren(...i.map((f,g)=>t(`P${g+1} / ${f.segment+1}-${f.segment+2}`,{kind:"track",unitId:he.id,id:f.id})));const r=Ja(),s=nt?.kind==="track"?ot.find(f=>f.id===nt.unitId):void 0,o=!!s&&!Dn(s)&&!s.intangible;for(const f of["x","y","z"]){const g=dt(`#path-${f}`);g.disabled=!r||o&&f==="y",g.value=r?r[f].toFixed(2):""}document.querySelector("#route-bind").disabled=!sr().length||!n.length,document.querySelector("#route-unbind").disabled=!ki().some(f=>f.routeBinding),document.querySelector("#path-delete").disabled=!r;for(const f of["#route-up","#route-down"])document.querySelector(f).disabled=nt?.kind!=="waypoint";document.querySelector("#route-pick").setAttribute("aria-pressed",String(Vt)),document.querySelector("#track-edit").setAttribute("aria-pressed",String(In)),document.querySelector("#track-add").setAttribute("aria-pressed",String(zt));for(const f of["#track-add","#track-midpoint"])document.querySelector(f).disabled=!he||ut.size!==1||ri()<2;nt?.kind==="track"&&he&&(Bs(he,De)==="wreck"||document.querySelector("#trail-display").value==="none")&&(nt=null),dt("#track-segment").max=String(Math.max(1,Mi())),document.querySelector("#path-state").textContent=Vt?"航路点放置中":zt?"控制点放置中":`${pl()?.name??"-"} / ${n.length} 个航路点 / ${ki().map(f=>`${f.label}:${_n.find(g=>g.id===f.routeBinding?.routeId)?.name??"未绑定"}${f.routeBinding?.formationId?"(编队)":""}`).join(" / ")} / ${i.length} 个航迹控制点`;const c=ot.filter(f=>f.routeBinding?.routeId===Pn),l=document.querySelector("#route-bindings");l&&l.replaceChildren(...c.map(f=>{const g=document.createElement("button"),_=Xi().groups.find(m=>m.id===f.groupId);return g.textContent=`${f.label}${_?` · ${_.name}`:""} / 从第 ${f.routeBinding.startTurn+1} 回合`,g.addEventListener("click",()=>Yn([f])),g}));const d=document.querySelector("#route-group-select");if(d){const f=d.value;d.replaceChildren(...Xi().groups.map(g=>new Option(`${g.name} (${ot.filter(_=>_.groupId===g.id).length})`,g.id))),Xi().groups.some(g=>g.id===f)&&(d.value=f)}const u=document.querySelector("#route-select-bound");u&&(u.disabled=!c.length);const h=document.querySelector("#route-bind-group");h&&(h.disabled=!ct()||!Ue||!n.length||!d?.value)}function eg(n,e){const t=[0,...(he?.trackPoints??[]).filter(s=>s.segment===n).sort((s,o)=>s.t-o.t).map(s=>s.t),1],i=jt.clamp(e,0,.999999)*(t.length-1),r=Math.floor(i);return jt.lerp(t[r],t[r+1],i-r)}function tg(n,e,t=.5){if(!ct()||!Ue||!he||ut.size!==1||!bn())return;he.trackPoints??=[];const i={id:`control-${_l++}`,segment:n,t:jt.clamp(t,.01,.99),x:e.x,y:e.y,z:e.z};he.trackPoints.push(i),nt={kind:"track",unitId:he.id,id:i.id},zt=!1,at(),rt()}vt.domElement.addEventListener("pointerdown",n=>{if(St?.isPicking()||!ct()||ln||!Ue||Ot||n.button!==0||n.altKey||Je)return;if(Vt){n.stopImmediatePropagation(),n.preventDefault();const i=Po(n);if(!i||!bn())return;Ao().push({id:`wp-${gl++}`,x:i.x,y:Math.max(Number(dt("#route-height").value)||0,i.y+ni),z:i.z}),cr(),at(),rt();return}rr.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),tr.setFromCamera(rr,yt);const e=tr.intersectObjects(Ki.children,!0),t=e.find(i=>i.object.userData.pathPoint);if(t&&Le.axis===null){n.stopImmediatePropagation(),n.preventDefault(),nt=t.object.userData.pathPoint,nt?.kind==="waypoint"&&nt.routeId&&(Pn=nt.routeId),zt=!1,Hn?.select("routes"),at(),rt();return}if(zt&&Le.axis===null){n.stopImmediatePropagation(),n.preventDefault();const i=e.find(r=>r.object.userData.editSegment!==void 0);if(i){const r=i.object.userData.editSegment,s=mh(he,ph(he,De),Math.min(Mi(),he.destroyedAtTurn??Mi())).find(l=>l.segment===r);if(!s)return;let o=0,a=1/0;for(let l=0;l<=300;l++){const d=s.curve.getPoint(jt.lerp(s.start,s.end,l/300));!Dn(he)&&!he.intangible&&(d.y=Et(d.x,d.z)+ni);const u=d.distanceToSquared(i.point);u<a&&(a=u,o=l/300)}const c=s.curve.getPoint(jt.lerp(s.start,s.end,o));tg(r,c,eg(r,o))}}},!0);document.querySelector("#route-select").addEventListener("change",()=>{Le.dragging||Pt||St?.isPicking()||(Pn=document.querySelector("#route-select").value,nt=null,Vt=zt=!1,at(),rt())});dt("#route-name").addEventListener("change",()=>{Le.dragging||bn()&&(pl().name=dt("#route-name").value.trim()||"UNTITLED ROUTE",at(),rt())});document.querySelector("#route-new").addEventListener("click",()=>{if(Le.dragging||Je||!bn())return;const n=Ia++,e={id:`route-${n}`,name:`ROUTE ${n}`,waypoints:[]};_n.push(e),Pn=e.id,nt=null,Vt=zt=!1,at(),rt()});document.querySelector("#route-remove").addEventListener("click",()=>{if(!(Le.dragging||Je)&&bn()){if(ot.filter(n=>n.routeBinding?.routeId===Pn).forEach(n=>{n.routeBinding=void 0}),_n.splice(_n.findIndex(n=>n.id===Pn),1),!_n.length){const n=Ia++;_n.push({id:`route-${n}`,name:`ROUTE ${n}`,waypoints:[]})}Pn=_n[0].id,nt=null,Vt=zt=!1,cr(),at(),rt()}});document.querySelector("#route-pick").addEventListener("click",()=>{!ct()||!Ue||Je||Le.dragging||(Vt=!Vt,zt=!1,nt=null,dn=!1,at(),rt())});function ng(n){if(!ct()||!Ue||Je||Le.dragging||!Ao().length||!n.length)return;const e=Mg(n.map(i=>Wn(i))),t=n.length>1?`formation-${fl++}`:void 0;bn()&&(n.forEach((i,r)=>{i.routeBinding={startTurn:De,routeId:Pn,offset:t?e[r]:{x:0,y:0,z:0},formationId:t},i.trackPoints=(i.trackPoints??[]).filter(s=>s.segment<De)}),cr(),at(),rt())}document.querySelector("#route-bind").addEventListener("click",()=>ng(sr()));document.querySelector("#route-unbind").addEventListener("click",()=>{bn()&&(ki().forEach(n=>{n.routeBinding=void 0}),cr(),at(),rt())});for(const[n,e]of[["#route-up",-1],["#route-down",1]])document.querySelector(n).addEventListener("click",()=>{if(nt?.kind!=="waypoint")return;const t=Ao(),i=t.findIndex(s=>s.id===nt.id),r=i+e;r<0||r>=t.length||bn()&&([t[i],t[r]]=[t[r],t[i]],cr(),at(),rt())});document.querySelector("#path-delete").addEventListener("click",()=>{if(nt&&bn()){if(nt.kind==="waypoint"){const n=Ao();n.splice(n.findIndex(e=>e.id===nt.id),1),n.length||ot.filter(e=>e.routeBinding?.routeId===Pn).forEach(e=>{e.routeBinding=void 0})}else{const n=nt,e=ot.find(t=>t.id===n.unitId);e.trackPoints=e.trackPoints?.filter(t=>t.id!==n.id)}nt=null,cr(),at(),rt()}});document.querySelector("#track-edit").addEventListener("click",()=>{!ct()||!Ue||(In=!In,zt=Vt=!1,nt=null,dn=!1,at(),rt())});document.querySelector("#track-add").addEventListener("click",()=>{!ct()||!Ue||(In=!0,zt=!zt,Vt=!1,nt=null,dn=!1,at(),rt())});document.querySelector("#track-midpoint").addEventListener("click",()=>{if(!ct()||!Ue||!he||ut.size!==1||ri()<2)return;const n=jt.clamp(Math.floor(Number(dt("#track-segment").value)||1)-1,0,Mi()-1),e=wp(he.positions,he.trackPoints??[],n,n+1).map(i=>new b(i.x,i.y,i.z)),t=new rh(e).getPoint(.5);In=!0,tg(n,t,eg(n,.5))});dt("#track-segment").addEventListener("change",()=>{dt("#track-segment").value=String(jt.clamp(Math.floor(Number(dt("#track-segment").value)||1),1,Math.max(1,Mi())))});for(const n of["x","y","z"])dt(`#path-${n}`).addEventListener("change",()=>{const e=Ja(),t=Number(dt(`#path-${n}`).value);if(!e||!Number.isFinite(t))return;const i=nt?.kind==="track"?nt.unitId:void 0;if(!bn())return;const r=ot.find(s=>s.id===i);e[n]=n==="y"&&!r?.intangible?Math.max(0,t):t,r&&zs(r)&&(e.y=Et(e.x,e.z)),nt?.kind==="waypoint"&&cr(),at(),rt()});for(const n of["#trail-display","#trail-turns"])document.querySelector(n).addEventListener("change",()=>at());function ig(){const n=(e,t,i,r)=>{const s=Number(dt(e).value);return Number.isFinite(s)?jt.clamp(s,t,i):r};return{radius:n("#terrain-radius",8,240,50),strength:n("#terrain-strength",.1,30,6),target:n("#terrain-flat",0,180,20),density:n("#urban-density",1,100,70)/100,mode:document.querySelector("#terrain-brush").value}}const Gi=new m_(new kt,new bi({color:7143340,depthTest:!1,transparent:!0,opacity:.9}));Gi.visible=!1;ts.add(Gi);function rg(n){if(Gi.visible=!!n&&Ot&&Ue,!n)return;const{radius:e}=ig();let t=Gi.geometry.getAttribute("position");t||(t=new Dt(new Float32Array(240),3),t.setUsage(nl),Gi.geometry.setAttribute("position",t));for(let i=0;i<80;i++){const r=i/80*Math.PI*2,s=n.x+Math.cos(r)*e,o=n.z+Math.sin(r)*e;t.setXYZ(i,s,Et(s,o)+.6,o)}t.needsUpdate=!0,Gi.geometry.computeBoundingSphere()}function sg(n){if(!ct()||!Ue||!Pt)return;const e=ig(),t=Pt.last,i=t?t.distanceTo(n):0;if(t&&i<_t.spacing*.4)return;const r=t?Math.ceil(i/Math.max(_t.spacing,e.radius/4)):1;for(let s=1;s<=r;s++){const o=t?t.clone().lerp(n,s/r):n,a=e.mode==="smooth"||e.mode==="flatten"?e.strength/30:e.strength;(e.mode==="urban"||e.mode==="erase-urban"?ir.paint(o.x,o.z,e.radius,e.density,e.mode==="erase-urban"):_t.brush(o.x,o.z,e.radius,a,e.mode,e.target))&&(Pt.changed=!0,Pr=!0,sw(o,e.radius))}Pt.last=n.clone()}function Qa(n=!1){if(!Pt)return;const e=Pt;n||km(),Pt=null,n?(_t.data.set(e.before.terrain),ir.data.set(e.before.urban),Pr=!0):e.changed&&(Ar=e.checkpoint),vt.domElement.hasPointerCapture(e.pointerId)&&vt.domElement.releasePointerCapture(e.pointerId),It.enabled=!0,Pr?(Al(!n),!n&&tn&&ul===_t&&hl===ir&&(La=!1)):(mi.visible=!0,ws.visible=!0,tn&&(tn.root.visible=mi===tn.root),As=null),at(),rt()}function Wi(n){n&&!ct()||!n&&Tt()?.mapEditRef||(ln&&Gn(),!Le.dragging&&(Qa(),Ei(!0),es(),dn=!1,Ot=n,Vt=zt=!1,nt=null,Sh(),Gi.visible=!1,n&&!Ue&&Vn(!0),vt.domElement.style.cursor=n?"crosshair":"",rt()))}vt.domElement.addEventListener("pointerdown",n=>{if(St?.isPicking()||!ct()||!Ue||!Ot||n.button!==0||n.altKey)return;n.stopImmediatePropagation(),n.preventDefault();const e=Po(n);!e||Math.abs(e.x)>_t.extent||Math.abs(e.z)>_t.extentZ||on()&&(Pt={before:Ll(),checkpoint:ve?.read()??null,pointerId:n.pointerId,changed:!1,last:null},It.enabled=!1,vt.domElement.setPointerCapture(n.pointerId),sg(e),rg(e))},!0);vt.domElement.addEventListener("pointermove",n=>{if(!ct()||!Ue||!Ot)return;const e=Po(n);rg(e),Pt&&(n.stopImmediatePropagation(),e&&sg(e))},!0);vt.domElement.addEventListener("pointerup",n=>{Pt&&(n.stopImmediatePropagation(),Qa())},!0);vt.domElement.addEventListener("pointercancel",()=>Qa(!0));vt.domElement.addEventListener("pointerleave",()=>{Pt||(Gi.visible=!1)});document.querySelector("#tab-terrain").addEventListener("click",()=>Wi(!0));document.querySelector("#tab-units").addEventListener("click",()=>Wi(!1));for(const[n,e]of[["#terrain-reset",()=>_t.reset()],["#terrain-generate",()=>_t.generate(Number(dt("#terrain-seed").value)||0,document.querySelector("#terrain-preset").value)]])document.querySelector(n).addEventListener("click",()=>{Pt||bn()&&(e(),Pr=!0,Al(),at(),rt())});document.querySelector("#terrain-brush").addEventListener("change",rt);for(const n of["#urban-angle","#urban-seed"])dt(n).addEventListener("change",()=>{Pt||bn()&&(Ts=jt.degToRad(jt.clamp(Number(dt("#urban-angle").value)||0,-180,180)),Da=Number(dt("#urban-seed").value)|0,Pr=!0,Al(),at(),rt())});document.querySelector("#terrain-contour-smooth").addEventListener("change",()=>{Pr=!0});document.querySelector("#terrain-undo").addEventListener("click",Il);document.querySelector("#terrain-redo").addEventListener("click",Nl);const tr=new sm,rr=new ze;function zo(){const n=vt.domElement.getBoundingClientRect?.();return n&&n.width>0&&n.height>0?{left:n.left,top:n.top,width:n.width,height:n.height}:{left:0,top:0,width:innerWidth,height:innerHeight}}function Ha(){return typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches}function bh(n,e,t){const i=zo(),r=[];yt.updateMatrixWorld(),sn.updateMatrixWorld(!0);for(const s of wi.values()){const o=s.userData.parts,a=s.userData.unit;if(!o||!a||!Sl(s))continue;const c=typeof Ns<"u"?Ns.get(a.id):void 0,l=o.label.userData.dom,d=!l.hidden&&Number(l.style.opacity||"1")>0&&GM(l.getBoundingClientRect(),n,e,t>14?6:0),u=[o.icon,...c?.root.visible?[c.base]:[],...o.wreck.visible?[o.wreck]:[]];let h=1/0,f;for(const g of u.filter(Sl)){const _=VM(g.getWorldPosition(new b).project(yt),i,n,e,d?Math.max(i.width,i.height):t);_!==null&&_<h&&(h=_,f=g)}f&&(h<=t||d)&&r.push({unit:a,distance:d?Math.min(h,t):h,object:f})}return r.sort((s,o)=>s.distance-o.distance||s.unit.id.localeCompare(o.unit.id))}function kw(n,e,t=14){const i=[],r=Lr(De);for(const s of bh(n,e,t)){const o=Rs.get(s.unit.id);if(Kc!==void 0&&!o)continue;const a=new Set(o??[s.unit.id]);r.units.filter(c=>a.has(c.unit.id)).forEach(c=>i.push({unit:c.unit,distance:s.distance}))}return i.sort((s,o)=>s.distance-o.distance||s.unit.id.localeCompare(o.unit.id)).map(s=>s.unit)}function og(n,e,t=14){const i=kw(n,e,t);i.length===1?$m(i[0]):(Na=i.map(r=>r.id),qm())}vt.domElement.addEventListener("pointerdown",n=>{!ln||n.button!==0||n.altKey||(n.stopImmediatePropagation(),n.preventDefault(),og(n.clientX,n.clientY,lh(n.pointerType,Ha())))},!0);Fo.addEventListener("pointerdown",n=>{if(n.button!==0||!Dr||n.altKey||Ht())return;const e=lh(n.pointerType,Ha());if(ln){n.stopPropagation(),n.preventDefault(),og(n.clientX,n.clientY,e);return}const t=(n.target instanceof Element?n.target.closest("[data-unit-id]"):null)?.dataset.unitId,i=bh(n.clientX,n.clientY,e),r=i.find(s=>s.unit.id===t)??i[0];r&&(n.stopPropagation(),n.preventDefault(),Rl(r.unit))});function Sl(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function Fl(n){const e=zo();rr.x=(n.clientX-e.left)/e.width*2-1,rr.y=-((n.clientY-e.top)/e.height)*2+1,tr.setFromCamera(rr,yt);const t=tr.intersectObjects([...wi.values()].flatMap(r=>r.children),!0).filter(r=>Sl(r.object));if(t.length||!Ha()&&n.pointerType!=="touch"&&n.pointerType!=="pen")return t;const i=bh(n.clientX,n.clientY,lh(n.pointerType,Ha()))[0];return i?[{distance:yt.position.distanceTo(i.object.getWorldPosition(new b)),point:i.object.getWorldPosition(new b),object:i.object}]:[]}function ec(){oo=null,Lu=-1/0,Jc=""}function Fw(n=performance.now()){const e=yt.position.distanceTo(It.target),t=xM(e,Kc),i=t!==Kc;Kc=t;const r=document.querySelector("#camera-readout");r&&(r.textContent=`FREE 3D / ${t}档`);const{width:s,height:o}=zo(),a=[t,s,o,...yt.position.toArray(),...yt.quaternion.toArray(),Ue,ln].join("|"),c=oo===null;if(!c&&!i&&a===Jc)return;if(yt.updateMatrixWorld(),sn.updateMatrixWorld(!0),oo??=Lr(De),c||i||a!==Jc&&n-Lu>=100){const u=oo.units.map(h=>{const f=wi.get(h.unit.id),g=f.userData.parts,m=(t===3?f.position.clone():g.icon.getWorldPosition(new b)).project(yt),p=Ue&&ut.has(h.unit.id);return{id:h.unit.id,label:h.unit.label,faction:h.unit.faction,icon:h.unit.icon,tgt:h.unit.tgt,escort:h.unit.escort,status:h.status,position:{x:h.position.x/tt,y:h.position.y/tt,z:h.position.z/tt},screenX:(m.x+1)*s/2,screenY:(1-m.y)*o/2,onScreen:!p&&!h.unit.hidden&&!h.unit.intangible&&m.z>-1&&m.z<1&&Math.abs(m.x)<=1&&Math.abs(m.y)<=1}});kd=bM(u,t),Rs.clear();for(const h of kd)Rs.set(h.representativeId,h.memberIds);Jc=a,Lu=n}const l=new Map(oo.units.map(u=>[u.unit.id,u])),d=new Map(kd.map(u=>[u.representativeId,u]));for(const u of oo.units){const h=wi.get(u.unit.id),f=h.userData.parts,g=Ns.get(u.unit.id),_=d.get(u.unit.id),p=(_?.airRepresentativeId?l.get(_.airRepresentativeId):void 0)??(Dn(u.unit)?u:void 0),w=qa(u.unit,u.position,Et),x=Math.max(0,w.y-h.position.y),v=Tl(u.unit,w,Et,ni).y-h.position.y,C=f.base===null?v+Om-ni:Math.max(x,.6),P=new b(h.position.x,h.position.y+v,h.position.z),N=2*Math.max(yt.near,-P.applyMatrix4(yt.matrixWorldInverse).z)*Math.tan(jt.degToRad(yt.fov)/2)/Math.max(1,o),M=Td(t,N),S=Math.max(yt.near,-new b(h.position.x,h.position.y,h.position.z).applyMatrix4(yt.matrixWorldInverse).z),I=Math.max(yt.near,-new b(h.position.x,h.position.y+1.5,h.position.z).applyMatrix4(yt.matrixWorldInverse).z),F=2*Math.tan(jt.degToRad(yt.fov)/2)/Math.max(1,o),V=Td(t,S*F),G=Td(t,I*F);f.tgtRing.visible=!!_?.hasTgt&&u.status==="active",f.escortMarker.visible=!!_?.hasEscort&&u.status==="active"&&u.unit.faction!=="enemy",TM(f,g,{tier:u.unit.intangible?1:t,representative:!!_,status:u.status,faction:u.unit.faction,label:_?.label??u.unit.label,scale:M,baseScale:V,farBaseScale:G,hasAir:!!p,airAltitude:p?Math.max(0,p.position.y-h.position.y):0,hasTgt:!!_?.hasTgt,hasEscort:!!_?.hasEscort,iconHeight:v,poleHeight:C}),g.root.traverse(J=>{const Y=J.material;!Y||Array.isArray(Y)||(Y.userData.hiddenBaseOpacity??=Y.opacity,Y.opacity=Y.userData.hiddenBaseOpacity*(u.unit.hidden?.35:1))})}for(const u of sn.children)typeof u.userData.trail=="string"&&(u.visible=t===1||Rs.has(u.userData.trail))}function Ow(){const{width:n,height:e}=zo();for(const{dom:t,position:i}of Iu){const r=i.clone().project(yt);t.hidden=r.z<-1||r.z>1,t.style.left=`${(r.x+1)*n/2}px`,t.style.top=`${(1-r.y)*e/2}px`}sn.updateMatrixWorld(!0);for(const t of wi.values()){const i=t.userData.parts,r=i.label.userData.dom,s=i.label.userData.displayVisible!==!1,o=Ns.get(t.userData.unit.id),a=o?.root.visible?o.pole:i.pole,c=HM({camera:yt,width:n,height:e,group:t,icon:i.wreck.visible?i.wreck:i.icon,pole:a,dom:r,isAir:i.base!==null,naturalTop:a.userData.naturalTop??i.label.position.y,isMerged:(Rs.get(t.userData.unit.id)?.length??1)>1,decorated:i.tgtRing.visible||i.escortMarker.visible,visible:s})!==!1&&s,l=Xi().groups.find(u=>u.id===t.userData.unit?.groupId);r.title=l?`编组: ${l.name}`:"",r.style.borderLeft=l?`3px solid ${l.color}`:"",r.style.opacity=c?String(i.labelFade):"0";const d=c&&!r.hidden&&(ln||typeof en<"u"&&en?.active()||Ha());r.style.pointerEvents=d?"auto":"none",r.style.cursor=ln?"crosshair":d?"pointer":"",r.classList.toggle("range-attacker-label",t.userData.unit.id===_i),r.classList.toggle("range-target-label",t.userData.unit.id===Di)}}let Dr=!1;function ag(){if(requestAnimationFrame(ag),!Dr)return;Pt?km():Pr&&Al(),Ot&&!Pt&&(!tn||La)&&Um(),It.update(),mm(Wr,yt.position.distanceTo(It.target)),Fw(),Ow();const n=zo();hw.update(yt,n.width,n.height,_t.extent,_t.extentZ),St?.updateLabels(yt,n.width,n.height),en?.update(),vt.render(ts,yt)}addEventListener("resize",()=>{const n=document.querySelector("#scene").getBoundingClientRect(),e=Math.max(1,n.width),t=Math.max(1,n.height);yt.aspect=e/t,Za(),vt.setSize(e,t,!1)});function zw(n){gg(n,{size:_t.size,extent:_t.extent})}function Bw(n){zw(n),Ct&&Mh(!1);const e=ve.read();try{Do(),Gn(),ut.clear(),he=null,ve.reset(n.checkpoint),or(n.checkpoint);const t=(i,r)=>Math.max(0,...i.filter(s=>s.startsWith(r)).map(s=>Number(s.slice(r.length))).filter(Number.isSafeInteger))+1;Qr=t(ot.map(i=>i.id),"unit-"),Ia=t(_n.map(i=>i.id),"route-"),gl=t(_n.flatMap(i=>i.waypoints.map(r=>r.id)),"wp-"),_l=t(ot.flatMap(i=>(i.trackPoints??[]).map(r=>r.id)),"control-"),fl=t(ot.flatMap(i=>i.routeBinding?.formationId?[i.routeBinding.formationId]:[]),"formation-"),Li.clear(),_i=Di="",at(),rt()}catch(t){throw or(e),ve.reset(e),at(),rt(),t}}let bl,Va,_p="",rn=!1,tc="",Es=null;function Qt(n){tc=n;const e=document.querySelector("#workflow-state");e&&(e.textContent=n)}function Ga(){Es=null,document.querySelector("#workflow-confirm")?.setAttribute("hidden","")}function Ui(){const n=Tt(),e=n?.workflow?.mode==="formal",t=document.querySelector("#workflow-panel");if(!t)return;if(typeof Ct<"u"&&Ct){t.hidden=!0;for(const g of Array.from(t.querySelectorAll("button")))g.disabled=!0;return}t.hidden=!1;const i=e&&n.turns.length===n.workflow.committedTurns+1,r=Ht()||rn,s=n?.status==="finished";t.dataset.mode=s?"finished":e?Ii()?"draft":"history":n?.mapEditRef?"map-editor":"authoring";const o=document.querySelector("#task-editor-save");o&&(o.hidden=!!e||!!n?.mapEditRef||n?.turns.length!==1,o.disabled=r||s);const a=document.querySelector("#map-editor-save");a&&(a.hidden=!n?.mapEditRef,a.disabled=r||s);const c=document.querySelector("#workflow-reopen");c&&(c.hidden=!e,c.disabled=!e||r||!!Es||!!i||!n.workflow.committedTurns||!!n.workflow?.branchFrom&&n.workflow.committedTurns-1<n.workflow.branchFrom.turn);const l=document.querySelector("#workflow-save-draft");l&&(l.hidden=!e,l.disabled=r||s||!Ii()||!!Es||!bl);const d=document.querySelector("#workflow-snapshot");d&&(d.hidden=!e,d.disabled=r||!!Es||!n?.workflow?.committedTurns||typeof Va>"u"||!Va);const u=document.querySelector("#editor-save-as-controls");u&&(u.hidden=!!e||s);for(const g of["map","task"]){const _=document.querySelector(`#${g}-editor-save-as`);_&&(_.hidden=!!e||(g==="map"?!n?.mapEditRef:!!n?.mapEditRef),_.disabled=r||s)}const h=document.querySelector("#editor-save-as-name");h&&(h.disabled=r||s,n&&_p!==n.id&&(_p=n.id,h.value=`${n.name.replace(/ 制作副本$/,"").slice(0,123)} COPY`));const f=document.querySelector("#workflow-state");f&&(f.textContent=tc||(s?"已结束":e?Ii()?`第 ${De+1} 回合 · 草稿`:`第 ${De+1} 回合 · 只读 · 已提交 ${n.workflow.committedTurns} 回合`:n?.mapEditRef?`地图制作 · r${n.mapEditRef.revision}`:"场景制作"));for(const g of["begin","advance","commit","discard"]){const _=document.querySelector(`#workflow-${g}`);_&&(_.hidden=!e,g==="discard"&&(_.textContent=n?.workflow?.committedTurns===0?"重置第一回合草稿…":"丢弃草稿…"),_.disabled=!e||s||r||!!Es||(g==="begin"?!!i:!Ii()))}}function Ou(n,e){if(typeof Ct<"u"&&Ct)return;if(!ve||rn||Ht()){Qt("请先结束当前放置、拖动或笔刷操作");return}if(e&&(e.revision!==ve.revision||e.sessionId!==Tt()?.id||e.turn!==De)){Ga(),Qt("会话或回合已变化，请重新选择操作"),Ui();return}if(!on())return;const t=ve.read(),i=t.editor.sessionId??"session-working",r=t.project.sessions.find(s=>s.id===i);if(!r?.workflow||(n==="reopen"?r.turns.length!==r.workflow.committedTurns||!r.workflow.committedTurns:r.status==="finished"||n!=="begin"&&!Ii()||n==="begin"&&r.turns.length!==r.workflow.committedTurns)){Qt("当前状态不适用此操作，请刷新回合状态"),Ui();return}rn=!0,tc="",Ga(),Ui();try{if(n==="reopen"){ve.reopenLastCommittedTurn(i,ve.revision),ar(),Vn(!0),Qt("最近回合已恢复为草稿");return}const o={begin:Pg,advance:Cg,commit:Rg,discard:Ag}[n](t.project,i),a=o.sessions.find(d=>d.id===i),c={project:o,editor:{...t.editor,currentTurn:a.turns.length-1}},l={begin:"开始回合草稿",advance:"按航路推进草稿",commit:"提交回合",discard:"丢弃回合草稿"};ve.commit(c,l[n],t),ar(),(n==="begin"||n==="advance"||n==="discard"&&a.workflow?.committedTurns===0)&&Vn(!0)}catch(s){Qt(s instanceof Error?s.message:String(s))}finally{rn=!1,rt()}}function Hw(n){if(Ct)return;if(n!=="commit"&&n!=="discard"&&n!=="reopen"){Ou(n);return}if(!ve||Ht()||rn||(n==="reopen"?!Sn()||Tt().turns.length!==Tt().workflow.committedTurns||!Tt().workflow.committedTurns:!Ii())||!on())return;const e=n==="reopen"?"取消最近回合提交？":n==="commit"?"提交当前回合？":Tt()?.workflow?.committedTurns===0?"重置第一回合草稿？":"丢弃当前草稿？",t={action:n,revision:ve.revision,sessionId:Tt().id,turn:De},i=document.querySelector("#workflow-confirm");if(!i){window.confirm(e)&&Ou(n,t);return}Es=t,i.hidden=!1;const r=document.querySelector("#workflow-confirm-text");r&&(r.textContent=e),Ui()}for(const n of["begin","advance","commit","discard","reopen"])document.querySelector(`#workflow-${n}`)?.addEventListener("click",()=>Hw(n));document.querySelector("#workflow-confirm-yes")?.addEventListener("click",()=>{const n=Es;n&&Ou(n.action,n)});document.querySelector("#workflow-confirm-cancel")?.addEventListener("click",()=>{Ga(),Ui()});document.querySelector("#canvas-resize")?.addEventListener("click",()=>{if(!ve||!ct()||Ht())return;const n=Number(dt("#canvas-width").value),e=Number(dt("#canvas-height").value),t=Number(dt("#canvas-samples").value);if(on())try{const i=ve.read(),r=i.project.sessions.find(a=>a.id===i.editor.sessionId),s=wg(i.project,r.mapRef,n,e,t),o=s.maps.at(-1);s.sessions.find(a=>a.id===r.id).mapRef={id:o.id,revision:o.revision},ve.commit({...i,project:s},"调整画布尺寸",i),ar(),Vn(!0),Wi(!0),Qt(`画布 ${n} × ${e} km`)}catch(i){Qt(i instanceof Error?i.message:String(i))}});document.querySelector("#task-editor-save")?.addEventListener("click",()=>{if(!(Ct||!ve||Ht()||Sn()||Tt()?.mapEditRef)&&on())try{const n=ve.read(),e=Tt(),t=n.project.tasks.find(s=>s.id===e.taskRef.id&&s.revision===e.taskRef.revision),i=Eg(n.project,e.id,t?.name??e.name.replace(/ 制作副本$/,""),`map-${crypto.randomUUID()}`);ve.commit({...n,project:i},"保存任务新修订",n),ar(),Vn(!0);const r=i.sessions.find(s=>s.id===e.id).taskRef;Qt(`任务已保存 · r${r.revision}`)}catch(n){Qt(n instanceof Error?n.message:String(n))}});document.querySelector("#map-editor-save")?.addEventListener("click",()=>{if(Ct||!ve||Ht()||rn||!Tt()?.mapEditRef||!on())return;const n=ve.read(),e=Tt().id;try{const t=Tg(n.project,e),i=t.sessions.find(s=>s.id===e).mapEditRef,r=ve.commit({...n,project:t},"保存地图新修订",n);ar(),Wi(!0),Qt(r?`地图已保存 · r${i.revision}`:`无修改 · r${i.revision}`),Ui()}catch(t){Qt(t instanceof Error?t.message:String(t))}});document.querySelector("#workflow-save-draft")?.addEventListener("click",async()=>{if(!ve||Ht()||rn||!Ii()||!bl||!on())return;const n=document.querySelector("#workflow-save-draft");n.disabled=!0;try{Qt(await bl()?"草稿已保存":"草稿保存失败")}catch(e){Qt(e instanceof Error?e.message:String(e))}finally{Ui()}});document.querySelector("#workflow-snapshot")?.addEventListener("click",async()=>{if(!(Ct||!ve||Ht()||rn||!Tt()?.workflow?.committedTurns||!Va)&&on()){rn=!0,Ui();try{await Va(),Qt("回合快照已发送到管理器快照仓库")}catch(n){Qt(n instanceof Error?n.message:String(n))}finally{rn=!1,Ui(),rt()}}});for(const n of["map","task"])document.querySelector(`#${n}-editor-save-as`)?.addEventListener("click",()=>{if(Ct||!ve||Ht()||rn||Sn()||!!Tt()?.mapEditRef!=(n==="map")||!on())return;const e=document.querySelector("#editor-save-as-name").value.trim();if(!e){Qt("请填写副本名称");return}try{const t=ve.read(),i=Tt(),r=`map-${crypto.randomUUID()}`,s=n==="map"?nw(t.project,i.id,r,e):iw(t.project,i.id,{mapId:r,taskId:`task-${crypto.randomUUID()}`},e);ve.commit({...t,project:s.project},n==="map"?"另存为新地图":"另存为新任务",t),ar(),Vn(!0),n==="map"&&Wi(!0),Qt(`${n==="map"?"地图":"任务"}已另存为「${e}」r1`)}catch(t){Qt(t instanceof Error?t.message:String(t))}});function Mh(n){if(n!==Ct){if(Ht()||rn||!on())throw new Error("请先完成当前编辑操作");if(n){const e=ve.read(),t=mg(e),i=Sp(e),r=new Bu(i);el={edit:Ue,terrain:Ot},Do(),ut.clear(),he=null,Qc=ve,ka=e,Dl=t,Cs.clear(),Cs.set(i.editor.currentTurn,r),Ct=!0,ve=r}else Do(),ut.clear(),he=null,ve=Qc,Ct=!1,Qc=null,ka=null,typeof Fa<"u"&&(Fa=null),Cs.clear(),Ue=el.edit,Ot=el.terrain;Yr=null,vl="",va="",or(ve.read()),document.querySelector("#app").dataset.playerView=String(Ct),document.querySelector("#player-viewer-open").hidden=Ct,document.querySelector("#player-viewer-exit").hidden=!Ct,at(),rt()}}function Vw(n){const e=pg(n);if(Ht()||rn||!on())throw new Error("请先完成当前编辑操作");Ct&&Mh(!1);const t=ve.read();el={edit:Ue,terrain:Ot},Do(),ut.clear(),he=null,Qc=ve,ka=t,Fa=e,Dl=e.turns.length-1;const i=new Bu(e.turns[0]);Cs.clear(),Cs.set(0,i),ve=i,Ct=!0,Yr=null,vl="",va="",or(i.read()),document.querySelector("#app").dataset.playerView="true",document.querySelector("#player-viewer-open").hidden=!0,document.querySelector("#player-viewer-exit").hidden=!1,at(),rt()}function Gw(n){if(!ka||Ht()||rn)return;const e=Math.max(0,Math.min(n,Dl));if(e===De||!on())return;const t=Ue,i=typeof Fa<"u"?Fa:null,r=Cs.get(e)??new Bu(i?i.turns[e]:Sp(ka,e));Cs.set(e,r),Do(),ut.clear(),he=null,ve=r,Yr=null,or(r.read()),Ue=t,at(),rt()}function Ww(){if(!Ct||Ht()||rn||!on())return;const n=ve.read(),e=n.project.sessions.find(s=>s.id===n.editor.sessionId);e.routes=[{id:"player-viewer-route",name:"Viewer",waypoints:[]}],n.editor.activeRouteId="player-viewer-route";const t=Dg(Lg(n,n.editor.sessionId)),i=URL.createObjectURL(new Blob([t],{type:"application/json"})),r=document.createElement("a");r.href=i,r.download=`player-view-turn-${De+1}.json`,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function Do(){St?.cancel(),St?.clearSelection(),gi=null,typeof en<"u"&&en?.cancel(),Ue=Ot=Vt=In=zt=dn=!1,nt=null,Je=null,Hi=null,qi=!1,Ar=null,Rn=null,Oa=null,Ba.clear(),Le.detach(),Gi.visible=!1,Pt&&vt.domElement.hasPointerCapture(Pt.pointerId)&&vt.domElement.releasePointerCapture(Pt.pointerId),Pt=null,Ei(!0),It.enabled=!0,vt.domElement.style.cursor="",Ga(),tc=""}function ar(){Yr=null,Do();const n=[...ut];or(ve.read()),ut.clear(),n.filter(t=>ot.some(i=>i.id===t)).forEach(t=>ut.add(t)),he=ki().at(-1)??null;const e=(t,i,r)=>Math.max(r,...t.filter(s=>s.startsWith(i)).map(s=>Number(s.slice(i.length))+1).filter(Number.isSafeInteger));Qr=e(ot.map(t=>t.id),"unit-",Qr),Ia=e(_n.map(t=>t.id),"route-",Ia),gl=e(_n.flatMap(t=>t.waypoints.map(i=>i.id)),"wp-",gl),_l=e(ot.flatMap(t=>(t.trackPoints??[]).map(i=>i.id)),"control-",_l),fl=e(ot.flatMap(t=>t.routeBinding?.formationId?[t.routeBinding.formationId]:[]),"formation-",fl),at(),rt()}let vp=!1;function qw(n,e){if(vp)throw new Error("Workspace already mounted");vp=!0,ve=n,bl=e?.saveDraft,Va=e?.generateSnapshot,Hn=WM({fitMap:yh,topView:Mw,toggleEdit:()=>Vn(!Ue),viewerExport:Ww,viewerUndo:Il,viewerRedo:Nl,chooseTool:t=>{Le.dragging||Pt||vi||(St?.cancel(),t!=="links"&&t!=="markers"&&en?.cancel(),["markers","drawing"].includes(t)||St?.clearSelection(),Je&&t!=="units"&&es(),t==="terrain"&&ct()?(Vn(!0),Wi(!0)):Ot&&(Tt()?.mapEditRef?(Ot=!1,Gi.visible=!1):Wi(!1)),["routes"].includes(t)||(Vt=zt=In=!1,nt=null),(["markers","drawing","links"].includes(t)?xi():ct())&&["groups","markers","drawing","routes","units","equipment","links"].includes(t)&&!Ue&&Vn(!0),t!=="range"&&ln&&Gn(),at(),rt())}}),qr=document.createElement("aside"),qr.id="player-roster-panel",qr.hidden=!0,qr.setAttribute("aria-label","玩家资料卡"),document.querySelector("#app").append(qr),document.querySelector("#app").classList.add("player-roster-mounted"),Nu=$M(qr,{readRevision:()=>ve.revision,read:()=>ve.read().project,busy:()=>rn||Ht(),report:Qt,beginCreate:Aw,armPlacement:Rw,cancelPlacement:es,selectUnit:(t,i)=>{if(rn||Ht())return;const r=ot.find(s=>s.id===t);r&&(Yn([r]),i&&pp([t]))},recordAction:Pw}),Hm=XM(Hn.panels.groups,{read:Xi,units:()=>ot,selectedIds:()=>[...ut],editable:()=>ct()&&Ue&&!Tt()?.mapEditRef,change:zd,select:t=>Yn(ot.filter(i=>t.includes(i.id))),copy:fw,focus:pp}),St=ew({markersPanel:Hn.panels.markers,drawingsPanel:Hn.panels.drawing,world:sn,labelRoot:Pl,read:Xi,change:(t,i)=>zd(t,r=>i(r)),editable:()=>xi()&&Ue,focus:gh,sampleHeightKm:(t,i)=>Et(t*tt,i*tt)/tt,onMarkerPick:t=>en?.pick("marker",t)??!1,onTransformMode:t=>{xo=t,yo()},onOpenPanel:t=>{document.querySelector("#edit-panel").dataset.activeTab!==t&&Hn?.select(t)},onSelectionChange:t=>{t&&(xo="translate",Gn(),nt=null,Vt=zt=In=dn=!1,ut.clear(),he=null,kl(),at(),rt()),yo()},onPickingChange:t=>{document.querySelector("#app").dataset.mapPicking=String(t),t&&(Gn(),Ei(!0),dn=!1,Vt=zt=In=Ot=!1,nt=null,Gi.visible=!1,Le.detach()),It.enabled=Dr,vt.domElement.style.cursor=t?"crosshair":"",Ui()}}),en=jM({panel:Hn.panels.links,world:sn,read:Xi,readUnits:()=>ot.map(t=>{const i=Tl(t,Wn(t),Et,ni);return{id:t.id,label:t.label,position:{x:i.x/tt,y:i.y/tt,z:i.z/tt}}}),selectedUnitId:()=>he?.id,editable:()=>xi()&&Ue&&!Tt()?.mapEditRef,busy:()=>rn||Ht(),change:(t,i)=>zd(t,r=>i(r)),onModeChange:t=>{t&&(St?.cancel(),St?.clearSelection(),Gn(),Ei(!0),dn=Vt=zt=In=!1,nt=null,Le.detach()),vt.domElement.style.cursor=t?"crosshair":"",yo()}}),document.querySelector("#route-select-bound").addEventListener("click",()=>Yn(ot.filter(t=>t.routeBinding?.routeId===Pn))),document.querySelector("#route-bind-group").addEventListener("click",()=>{const t=document.querySelector("#route-group-select").value;ng(ot.filter(i=>i.groupId===t&&$a(i)))});for(const t of["#route-visible","#route-labels"])document.querySelector(t).addEventListener("change",()=>at());return vt.domElement.addEventListener("pointerdown",t=>{if(!St?.isPicking()||t.button!==0||t.altKey)return;t.stopImmediatePropagation(),t.preventDefault();const i=Po(t);i&&St.pick({x:i.x/tt,y:i.y/tt,z:i.z/tt})},!0),vt.domElement.addEventListener("pointermove",t=>{if(!St?.isPicking())return;const i=Po(t);St.preview(i?{x:i.x/tt,y:i.y/tt,z:i.z/tt}:null)}),ar(),Za(),Vn(!1),at(),ag(),{flush:()=>{if(!on())throw new Error("当前编辑尚未保存")},open:Bw,sync:ar,busy:()=>rn||Ht(),selectedUnitId:()=>he?.id,editTerrain:()=>{ct()&&(Vn(!0),Wi(!0))},editScenario:()=>{ct()&&(Vn(!0),Wi(!1))},playerView:Mh,snapshot:Vw,activate:t=>{Dr=t,It.enabled=t,Hn?.sync({editing:Ue,editable:xi(),mapOnly:!!Tt()?.mapEditRef,active:t,playerView:Ct,viewerCanUndo:!!ve?.canUndo,viewerCanRedo:!!ve?.canRedo}),t?(at(),rt()):(St?.cancel(),en?.cancel(),Gn(),Le.detach(),Km())}}}export{qw as mountWorkspace};
