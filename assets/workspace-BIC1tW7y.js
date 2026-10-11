import{W as tt,G as vg,R as Rh,p as xg,v as yg,w as Sg,d as Gu,c as Ap,a as bg,b as Mg,H as Rp,e as wg,P as Wu,f as Eg,g as Cp,m as Xu,h as qu,U as Pp,r as $u,i as Tg,j as Ag,k as Rg,l as Cg,n as Pg,o as Dp,t as Lp,q as Dg,s as Lg,u as Ig,x as Ng,y as Ug,z as kg,A as Ip,B as Np,C as Fg,D as Og,E as zg,F as Bg,I as Hg,J as Vg,K as Gg}from"./index-W71T5VV4.js";const Yu="179",fo={ROTATE:0,DOLLY:1,PAN:2},co={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wg=0,Ch=1,Xg=2,Up=1,qg=2,br=3,Cr=0,Si=1,fn=2,Zr=0,po=1,Wd=2,Ph=3,Dh=4,$g=5,vs=100,Yg=101,jg=102,Zg=103,Kg=104,Jg=200,Qg=201,e0=202,t0=203,Xd=204,qd=205,n0=206,i0=207,r0=208,s0=209,o0=210,a0=211,c0=212,l0=213,d0=214,$d=0,Yd=1,jd=2,bo=3,Zd=4,Kd=5,Jd=6,Qd=7,kp=0,u0=1,h0=2,Kr=0,f0=1,p0=2,m0=3,g0=4,_0=5,v0=6,x0=7,Fp=300,Mo=301,wo=302,eu=303,tu=304,Al=306,nu=1e3,bs=1001,iu=1002,ir=1003,y0=1004,sc=1005,fr=1006,Gl=1007,Ms=1008,mr=1009,Op=1010,zp=1011,Sa=1012,ju=1013,Ds=1014,wr=1015,qa=1016,Zu=1017,Ku=1018,ba=1020,Bp=35902,Hp=1021,Vp=1022,tr=1023,Ma=1026,wa=1027,Gp=1028,Ju=1029,Wp=1030,Qu=1031,eh=1033,Xc=33776,qc=33777,$c=33778,Yc=33779,ru=35840,su=35841,ou=35842,au=35843,cu=36196,lu=37492,du=37496,uu=37808,hu=37809,fu=37810,pu=37811,mu=37812,gu=37813,_u=37814,vu=37815,xu=37816,yu=37817,Su=37818,bu=37819,Mu=37820,wu=37821,jc=36492,Eu=36494,Tu=36495,Xp=36283,Au=36284,Ru=36285,Cu=36286,S0=3200,b0=3201,M0=0,w0=1,Yr="",fi="srgb",Eo="srgb-linear",rl="linear",Zt="srgb",Ws=7680,Lh=519,E0=512,T0=513,A0=514,qp=515,R0=516,C0=517,P0=518,D0=519,Ih=35044,sl=35048,Nh="300 es",pr=2e3,ol=2001;class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uh=1234567;const ua=Math.PI/180,Ea=180/Math.PI;function Os(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jn[n&255]+Jn[n>>8&255]+Jn[n>>16&255]+Jn[n>>24&255]+"-"+Jn[e&255]+Jn[e>>8&255]+"-"+Jn[e>>16&15|64]+Jn[e>>24&255]+"-"+Jn[t&63|128]+Jn[t>>8&255]+"-"+Jn[t>>16&255]+Jn[t>>24&255]+Jn[i&255]+Jn[i>>8&255]+Jn[i>>16&255]+Jn[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function th(n,e){return(n%e+e)%e}function L0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function I0(n,e,t){return n!==e?(t-n)/(e-n):0}function ha(n,e,t){return(1-t)*n+t*e}function N0(n,e,t,i){return ha(n,e,1-Math.exp(-t*i))}function U0(n,e=1){return e-Math.abs(th(n,e*2)-e)}function k0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function F0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function O0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function z0(n,e){return n+Math.random()*(e-n)}function B0(n){return n*(.5-Math.random())}function H0(n){n!==void 0&&(Uh=n);let e=Uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function V0(n){return n*ua}function G0(n){return n*Ea}function W0(n){return(n&n-1)===0&&n!==0}function X0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function q0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $0(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),d=o((e+i)/2),f=s((e-i)/2),u=o((e-i)/2),h=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*d,c*f,c*u,a*l);break;case"YZY":n.set(c*u,a*d,c*f,a*l);break;case"ZXZ":n.set(c*f,c*u,a*d,a*l);break;case"XZX":n.set(a*d,c*m,c*h,a*l);break;case"YXY":n.set(c*h,a*d,c*m,a*l);break;case"ZYZ":n.set(c*m,c*h,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ro(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function di(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const jt={DEG2RAD:ua,RAD2DEG:Ea,generateUUID:Os,clamp:Rt,euclideanModulo:th,mapLinear:L0,inverseLerp:I0,lerp:ha,damp:N0,pingpong:U0,smoothstep:k0,smootherstep:F0,randInt:O0,randFloat:z0,randFloatSpread:B0,seededRandom:H0,degToRad:V0,radToDeg:G0,isPowerOfTwo:W0,ceilPowerOfTwo:X0,floorPowerOfTwo:q0,setQuaternionFromProperEuler:$0,normalize:di,denormalize:ro};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],d=i[r+2],f=i[r+3];const u=s[o+0],h=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=h,e[t+2]=m,e[t+3]=_;return}if(f!==_||c!==u||l!==h||d!==m){let g=1-a;const p=c*u+l*h+d*m+f*_,w=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const C=Math.sqrt(y),P=Math.atan2(C,p*w);g=Math.sin(g*P)/C,a=Math.sin(a*P)/C}const v=a*w;if(c=c*g+u*v,l=l*g+h*v,d=d*g+m*v,f=f*g+_*v,g===1-a){const C=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=C,l*=C,d*=C,f*=C}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],d=i[r+3],f=s[o],u=s[o+1],h=s[o+2],m=s[o+3];return e[t]=a*m+d*f+c*h-l*u,e[t+1]=c*m+d*u+l*f-a*h,e[t+2]=l*m+d*h+a*u-c*f,e[t+3]=d*m-a*f-c*u-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(r/2),f=a(s/2),u=c(i/2),h=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=u*d*f+l*h*m,this._y=l*h*f-u*d*m,this._z=l*d*m+u*h*f,this._w=l*d*f-u*h*m;break;case"YXZ":this._x=u*d*f+l*h*m,this._y=l*h*f-u*d*m,this._z=l*d*m-u*h*f,this._w=l*d*f+u*h*m;break;case"ZXY":this._x=u*d*f-l*h*m,this._y=l*h*f+u*d*m,this._z=l*d*m+u*h*f,this._w=l*d*f-u*h*m;break;case"ZYX":this._x=u*d*f-l*h*m,this._y=l*h*f+u*d*m,this._z=l*d*m-u*h*f,this._w=l*d*f+u*h*m;break;case"YZX":this._x=u*d*f+l*h*m,this._y=l*h*f+u*d*m,this._z=l*d*m-u*h*f,this._w=l*d*f-u*h*m;break;case"XZY":this._x=u*d*f-l*h*m,this._y=l*h*f-u*d*m,this._z=l*d*m+u*h*f,this._w=l*d*f+u*h*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],f=t[10],u=i+a+f;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(d-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+d)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+o*a+r*l-s*c,this._y=r*d+o*c+s*a-i*l,this._z=s*d+o*l+i*c-r*a,this._w=o*d-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),f=Math.sin((1-t)*d)/l,u=Math.sin(t*d)/l;return this._w=o*f+this._w*u,this._x=i*f+this._x*u,this._y=r*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,i=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),d=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+c*l+o*f-a*d,this.y=i+c*d+a*l-s*f,this.z=r+c*f+s*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wl.copy(this).projectOnVector(e),this.sub(Wl)}reflect(e){return this.sub(Wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wl=new b,kh=new mn;class wt{constructor(e,t,i,r,s,o,a,c,l){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],d=i[4],f=i[7],u=i[2],h=i[5],m=i[8],_=r[0],g=r[3],p=r[6],w=r[1],y=r[4],v=r[7],C=r[2],P=r[5],D=r[8];return s[0]=o*_+a*w+c*C,s[3]=o*g+a*y+c*P,s[6]=o*p+a*v+c*D,s[1]=l*_+d*w+f*C,s[4]=l*g+d*y+f*P,s[7]=l*p+d*v+f*D,s[2]=u*_+h*w+m*C,s[5]=u*g+h*y+m*P,s[8]=u*p+h*v+m*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-i*s*d+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=d*o-a*l,u=a*c-d*s,h=l*s-o*c,m=t*f+i*u+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=f*_,e[1]=(r*l-d*i)*_,e[2]=(a*i-r*o)*_,e[3]=u*_,e[4]=(d*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xl.makeScale(e,t)),this}rotate(e){return this.premultiply(Xl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xl=new wt;function $p(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function al(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Y0(){const n=al("canvas");return n.style.display="block",n}const Fh={};function mo(n){n in Fh||(Fh[n]=!0,console.warn(n))}function j0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Oh=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Z0(){const n={enabled:!0,workingColorSpace:Eo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Zt&&(r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Zt&&(r.r=go(r.r),r.g=go(r.g),r.b=go(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yr?rl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return mo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return mo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Eo]:{primaries:e,whitePoint:i,transfer:rl,toXYZ:Oh,fromXYZ:zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:i,transfer:Zt,toXYZ:Oh,fromXYZ:zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),n}const Bt=Z0();function Er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function go(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xs;class K0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xs===void 0&&(Xs=al("canvas")),Xs.width=e.width,Xs.height=e.height;const r=Xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Xs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=al("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Er(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Er(t[i]/255)*255):t[i]=Er(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let J0=0;class nh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Os(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ql(r[o].image)):s.push(ql(r[o]))}else s=ql(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ql(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?K0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Q0=0;const $l=new b;class bi extends Fs{constructor(e=bi.DEFAULT_IMAGE,t=bi.DEFAULT_MAPPING,i=bs,r=bs,s=fr,o=Ms,a=tr,c=mr,l=bi.DEFAULT_ANISOTROPY,d=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Os(),this.name="",this.source=new nh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($l).x}get height(){return this.source.getSize($l).y}get depth(){return this.source.getSize($l).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nu:e.x=e.x-Math.floor(e.x);break;case bs:e.x=e.x<0?0:1;break;case iu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nu:e.y=e.y-Math.floor(e.y);break;case bs:e.y=e.y<0?0:1;break;case iu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bi.DEFAULT_IMAGE=null;bi.DEFAULT_MAPPING=Fp;bi.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],d=c[4],f=c[8],u=c[1],h=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(d-u)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(h+1)/2,C=(p+1)/2,P=(d+u)/4,D=(f+_)/4,N=(m+g)/4;return y>v&&y>C?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=P/i,s=D/i):v>C?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=P/r,s=N/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=D/s,r=N/s),this.set(i,r,s,t),this}let w=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(u-d)*(u-d));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(f-_)/w,this.z=(u-d)/w,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e_ extends Fs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new bi(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:fr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new nh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends e_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Yp extends bi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ir,this.minFilter=ir,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class t_ extends bi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ir,this.minFilter=ir,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class No{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ji.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ji.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ji):ji.fromBufferAttribute(s,o),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oc.copy(i.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),ac.subVectors(this.max,Xo),qs.subVectors(e.a,Xo),$s.subVectors(e.b,Xo),Ys.subVectors(e.c,Xo),Fr.subVectors($s,qs),Or.subVectors(Ys,$s),as.subVectors(qs,Ys);let t=[0,-Fr.z,Fr.y,0,-Or.z,Or.y,0,-as.z,as.y,Fr.z,0,-Fr.x,Or.z,0,-Or.x,as.z,0,-as.x,-Fr.y,Fr.x,0,-Or.y,Or.x,0,-as.y,as.x,0];return!Yl(t,qs,$s,Ys,ac)||(t=[1,0,0,0,1,0,0,0,1],!Yl(t,qs,$s,Ys,ac))?!1:(cc.crossVectors(Fr,Or),t=[cc.x,cc.y,cc.z],Yl(t,qs,$s,Ys,ac))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _r=[new b,new b,new b,new b,new b,new b,new b,new b],ji=new b,oc=new No,qs=new b,$s=new b,Ys=new b,Fr=new b,Or=new b,as=new b,Xo=new b,ac=new b,cc=new b,cs=new b;function Yl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){cs.fromArray(n,s);const a=r.x*Math.abs(cs.x)+r.y*Math.abs(cs.y)+r.z*Math.abs(cs.z),c=e.dot(cs),l=t.dot(cs),d=i.dot(cs);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const n_=new No,qo=new b,jl=new b;class Uo{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):n_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);const t=qo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(qo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(jl)),this.expandByPoint(qo.copy(e.center).sub(jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const vr=new b,Zl=new b,lc=new b,zr=new b,Kl=new b,dc=new b,Jl=new b;class $a{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zl.copy(e).add(t).multiplyScalar(.5),lc.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(Zl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(lc),a=zr.dot(this.direction),c=-zr.dot(lc),l=zr.lengthSq(),d=Math.abs(1-o*o);let f,u,h,m;if(d>0)if(f=o*c-a,u=o*a-c,m=s*d,f>=0)if(u>=-m)if(u<=m){const _=1/d;f*=_,u*=_,h=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=s,f=Math.max(0,-(o*u+a)),h=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(o*u+a)),h=-f*f+u*(u+2*c)+l;else u<=-m?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-c),s),h=-f*f+u*(u+2*c)+l):u<=m?(f=0,u=Math.min(Math.max(-s,-c),s),h=u*(u+2*c)+l):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-c),s),h=-f*f+u*(u+2*c)+l);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),h=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zl).addScaledVector(lc,u),h}intersectSphere(e,t){vr.subVectors(e.center,this.origin);const i=vr.dot(this.direction),r=vr.dot(vr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,i,r,s){Kl.subVectors(t,e),dc.subVectors(i,e),Jl.crossVectors(Kl,dc);let o=this.direction.dot(Jl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zr.subVectors(this.origin,e);const c=a*this.direction.dot(dc.crossVectors(zr,dc));if(c<0)return null;const l=a*this.direction.dot(Kl.cross(zr));if(l<0||c+l>o)return null;const d=-a*zr.dot(Jl);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,i,r,s,o,a,c,l,d,f,u,h,m,_,g){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,d,f,u,h,m,_,g)}set(e,t,i,r,s,o,a,c,l,d,f,u,h,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=f,p[14]=u,p[3]=h,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/js.setFromMatrixColumn(e,0).length(),s=1/js.setFromMatrixColumn(e,1).length(),o=1/js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=o*d,h=o*f,m=a*d,_=a*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=h+m*l,t[5]=u-_*l,t[9]=-a*c,t[2]=_-u*l,t[6]=m+h*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*d,h=c*f,m=l*d,_=l*f;t[0]=u+_*a,t[4]=m*a-h,t[8]=o*l,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=h*a-m,t[6]=_+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*d,h=c*f,m=l*d,_=l*f;t[0]=u-_*a,t[4]=-o*f,t[8]=m+h*a,t[1]=h+m*a,t[5]=o*d,t[9]=_-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*d,h=o*f,m=a*d,_=a*f;t[0]=c*d,t[4]=m*l-h,t[8]=u*l+_,t[1]=c*f,t[5]=_*l+u,t[9]=h*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,h=o*l,m=a*c,_=a*l;t[0]=c*d,t[4]=_-u*f,t[8]=m*f+h,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=h*f+m,t[10]=u-_*f}else if(e.order==="XZY"){const u=o*c,h=o*l,m=a*c,_=a*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=u*f+_,t[5]=o*d,t[9]=h*f-m,t[2]=m*f-h,t[6]=a*d,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i_,e,r_)}lookAt(e,t,i){const r=this.elements;return Ri.subVectors(e,t),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),Br.crossVectors(i,Ri),Br.lengthSq()===0&&(Math.abs(i.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),Br.crossVectors(i,Ri)),Br.normalize(),uc.crossVectors(Ri,Br),r[0]=Br.x,r[4]=uc.x,r[8]=Ri.x,r[1]=Br.y,r[5]=uc.y,r[9]=Ri.y,r[2]=Br.z,r[6]=uc.z,r[10]=Ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],d=i[1],f=i[5],u=i[9],h=i[13],m=i[2],_=i[6],g=i[10],p=i[14],w=i[3],y=i[7],v=i[11],C=i[15],P=r[0],D=r[4],N=r[8],M=r[12],S=r[1],I=r[5],F=r[9],V=r[13],G=r[2],J=r[6],Y=r[10],de=r[14],q=r[3],oe=r[7],xe=r[11],We=r[15];return s[0]=o*P+a*S+c*G+l*q,s[4]=o*D+a*I+c*J+l*oe,s[8]=o*N+a*F+c*Y+l*xe,s[12]=o*M+a*V+c*de+l*We,s[1]=d*P+f*S+u*G+h*q,s[5]=d*D+f*I+u*J+h*oe,s[9]=d*N+f*F+u*Y+h*xe,s[13]=d*M+f*V+u*de+h*We,s[2]=m*P+_*S+g*G+p*q,s[6]=m*D+_*I+g*J+p*oe,s[10]=m*N+_*F+g*Y+p*xe,s[14]=m*M+_*V+g*de+p*We,s[3]=w*P+y*S+v*G+C*q,s[7]=w*D+y*I+v*J+C*oe,s[11]=w*N+y*F+v*Y+C*xe,s[15]=w*M+y*V+v*de+C*We,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],f=e[6],u=e[10],h=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*c*f-r*l*f-s*a*u+i*l*u+r*a*h-i*c*h)+_*(+t*c*h-t*l*u+s*o*u-r*o*h+r*l*d-s*c*d)+g*(+t*l*f-t*a*h-s*o*f+i*o*h+s*a*d-i*l*d)+p*(-r*a*d-t*c*f+t*a*u+r*o*f-i*o*u+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=e[9],u=e[10],h=e[11],m=e[12],_=e[13],g=e[14],p=e[15],w=f*g*l-_*u*l+_*c*h-a*g*h-f*c*p+a*u*p,y=m*u*l-d*g*l-m*c*h+o*g*h+d*c*p-o*u*p,v=d*_*l-m*f*l+m*a*h-o*_*h-d*a*p+o*f*p,C=m*f*c-d*_*c-m*a*u+o*_*u+d*a*g-o*f*g,P=t*w+i*y+r*v+s*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return e[0]=w*D,e[1]=(_*u*s-f*g*s-_*r*h+i*g*h+f*r*p-i*u*p)*D,e[2]=(a*g*s-_*c*s+_*r*l-i*g*l-a*r*p+i*c*p)*D,e[3]=(f*c*s-a*u*s-f*r*l+i*u*l+a*r*h-i*c*h)*D,e[4]=y*D,e[5]=(d*g*s-m*u*s+m*r*h-t*g*h-d*r*p+t*u*p)*D,e[6]=(m*c*s-o*g*s-m*r*l+t*g*l+o*r*p-t*c*p)*D,e[7]=(o*u*s-d*c*s+d*r*l-t*u*l-o*r*h+t*c*h)*D,e[8]=v*D,e[9]=(m*f*s-d*_*s-m*i*h+t*_*h+d*i*p-t*f*p)*D,e[10]=(o*_*s-m*a*s+m*i*l-t*_*l-o*i*p+t*a*p)*D,e[11]=(d*a*s-o*f*s-d*i*l+t*f*l+o*i*h-t*a*h)*D,e[12]=C*D,e[13]=(d*_*r-m*f*r+m*i*u-t*_*u-d*i*g+t*f*g)*D,e[14]=(m*a*r-o*_*r-m*i*c+t*_*c+o*i*g-t*a*g)*D,e[15]=(o*f*r-d*a*r+d*i*c-t*f*c-o*i*u+t*a*u)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,d*a+i,d*c-r*o,0,l*c-r*a,d*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,d=o+o,f=a+a,u=s*l,h=s*d,m=s*f,_=o*d,g=o*f,p=a*f,w=c*l,y=c*d,v=c*f,C=i.x,P=i.y,D=i.z;return r[0]=(1-(_+p))*C,r[1]=(h+v)*C,r[2]=(m-y)*C,r[3]=0,r[4]=(h-v)*P,r[5]=(1-(u+p))*P,r[6]=(g+w)*P,r[7]=0,r[8]=(m+y)*D,r[9]=(g-w)*D,r[10]=(1-(u+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=js.set(r[0],r[1],r[2]).length();const o=js.set(r[4],r[5],r[6]).length(),a=js.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zi.copy(this);const l=1/s,d=1/o,f=1/a;return Zi.elements[0]*=l,Zi.elements[1]*=l,Zi.elements[2]*=l,Zi.elements[4]*=d,Zi.elements[5]*=d,Zi.elements[6]*=d,Zi.elements[8]*=f,Zi.elements[9]*=f,Zi.elements[10]*=f,t.setFromRotationMatrix(Zi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=pr,c=!1){const l=this.elements,d=2*s/(t-e),f=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r);let m,_;if(c)m=s/(o-s),_=o*s/(o-s);else if(a===pr)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ol)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=pr,c=!1){const l=this.elements,d=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),h=-(i+r)/(i-r);let m,_;if(c)m=1/(o-s),_=o/(o-s);else if(a===pr)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===ol)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const js=new b,Zi=new qt,i_=new b(0,0,0),r_=new b(1,1,1),Br=new b,uc=new b,Ri=new b,Bh=new qt,Hh=new mn;class ri{constructor(e=0,t=0,i=0,r=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],d=r[9],f=r[2],u=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class ih{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let s_=0;const Vh=new b,Zs=new mn,xr=new qt,hc=new b,$o=new b,o_=new b,a_=new mn,Gh=new b(1,0,0),Wh=new b(0,1,0),Xh=new b(0,0,1),qh={type:"added"},c_={type:"removed"},Ks={type:"childadded",child:null},Ql={type:"childremoved",child:null};class vn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new b,t=new ri,i=new mn,r=new b(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new wt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ih,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?hc.copy(e):hc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xr.lookAt($o,hc,this.up):xr.lookAt(hc,$o,this.up),this.quaternion.setFromRotationMatrix(xr),r&&(xr.extractRotation(r.matrixWorld),Zs.setFromRotationMatrix(xr),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qh),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(c_),Ql.child=e,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xr.multiply(e.parent.matrixWorld)),e.applyMatrix4(xr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qh),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,o_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,a_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),f=o(e.shapes),u=o(e.skeletons),h=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new b(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ki=new b,yr=new b,ed=new b,Sr=new b,Js=new b,Qs=new b,$h=new b,td=new b,nd=new b,id=new b,rd=new Ft,sd=new Ft,od=new Ft;class er{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ki.subVectors(e,t),r.cross(Ki);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ki.subVectors(r,t),yr.subVectors(i,t),ed.subVectors(e,t);const o=Ki.dot(Ki),a=Ki.dot(yr),c=Ki.dot(ed),l=yr.dot(yr),d=yr.dot(ed),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const u=1/f,h=(l*c-a*d)*u,m=(o*d-a*c)*u;return s.set(1-h-m,m,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Sr)===null?!1:Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Sr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Sr.x),c.addScaledVector(o,Sr.y),c.addScaledVector(a,Sr.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return rd.setScalar(0),sd.setScalar(0),od.setScalar(0),rd.fromBufferAttribute(e,t),sd.fromBufferAttribute(e,i),od.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(rd,s.x),o.addScaledVector(sd,s.y),o.addScaledVector(od,s.z),o}static isFrontFacing(e,t,i,r){return Ki.subVectors(i,t),yr.subVectors(e,t),Ki.cross(yr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ki.subVectors(this.c,this.b),yr.subVectors(this.a,this.b),Ki.cross(yr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return er.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return er.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return er.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return er.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return er.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Js.subVectors(r,i),Qs.subVectors(s,i),td.subVectors(e,i);const c=Js.dot(td),l=Qs.dot(td);if(c<=0&&l<=0)return t.copy(i);nd.subVectors(e,r);const d=Js.dot(nd),f=Qs.dot(nd);if(d>=0&&f<=d)return t.copy(r);const u=c*f-d*l;if(u<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(i).addScaledVector(Js,o);id.subVectors(e,s);const h=Js.dot(id),m=Qs.dot(id);if(m>=0&&h<=m)return t.copy(s);const _=h*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(Qs,a);const g=d*m-h*f;if(g<=0&&f-d>=0&&h-m>=0)return $h.subVectors(s,r),a=(f-d)/(f-d+(h-m)),t.copy(r).addScaledVector($h,a);const p=1/(g+_+u);return o=_*p,a=u*p,t.copy(i).addScaledVector(Js,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},fc={h:0,s:0,l:0};function ad(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Bt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Bt.workingColorSpace){if(e=th(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ad(o,s,e+1/3),this.g=ad(o,s,e),this.b=ad(o,s,e-1/3)}return Bt.colorSpaceToWorking(this,r),this}setStyle(e,t=fi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){const i=jp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Bt.workingToColorSpace(Qn.copy(this),e),Math.round(Rt(Qn.r*255,0,255))*65536+Math.round(Rt(Qn.g*255,0,255))*256+Math.round(Rt(Qn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(Qn.copy(this),t);const i=Qn.r,r=Qn.g,s=Qn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=d<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(Qn.copy(this),t),e.r=Qn.r,e.g=Qn.g,e.b=Qn.b,e}getStyle(e=fi){Bt.workingToColorSpace(Qn.copy(this),e);const t=Qn.r,i=Qn.g,r=Qn.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(fc);const i=ha(Hr.h,fc.h,t),r=ha(Hr.s,fc.s,t),s=ha(Hr.l,fc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qn=new Ut;Ut.NAMES=jp;let l_=0;class ko extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=po,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=qd,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(i.blending=this.blending),this.side!==Cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xd&&(i.blendSrc=this.blendSrc),this.blendDst!==qd&&(i.blendDst=this.blendDst),this.blendEquation!==vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yn extends ko{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wn=new b,pc=new ze;let d_=0;class Ui{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:d_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ih,this.updateRanges=[],this.gpuType=wr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pc.fromBufferAttribute(this,t),pc.applyMatrix3(e),this.setXY(t,pc.x,pc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix3(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ro(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=di(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ro(t,this.array)),t}setX(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ro(t,this.array)),t}setY(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ro(t,this.array)),t}setZ(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ro(t,this.array)),t}setW(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),i=di(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),i=di(i,this.array),r=di(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),i=di(i,this.array),r=di(r,this.array),s=di(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ih&&(e.usage=this.usage),e}}class Zp extends Ui{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Kp extends Ui{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Dt extends Ui{constructor(e,t,i){super(new Float32Array(e),t,i)}}let u_=0;const Bi=new qt,cd=new vn,eo=new b,Ci=new No,Yo=new No,Hn=new b;class kt extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($p(e)?Kp:Zp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new wt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bi.makeRotationFromQuaternion(e),this.applyMatrix4(Bi),this}rotateX(e){return Bi.makeRotationX(e),this.applyMatrix4(Bi),this}rotateY(e){return Bi.makeRotationY(e),this.applyMatrix4(Bi),this}rotateZ(e){return Bi.makeRotationZ(e),this.applyMatrix4(Bi),this}translate(e,t,i){return Bi.makeTranslation(e,t,i),this.applyMatrix4(Bi),this}scale(e,t,i){return Bi.makeScale(e,t,i),this.applyMatrix4(Bi),this}lookAt(e){return cd.lookAt(e),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new No);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ci.setFromBufferAttribute(s),this.morphTargetsRelative?(Hn.addVectors(this.boundingBox.min,Ci.min),this.boundingBox.expandByPoint(Hn),Hn.addVectors(this.boundingBox.max,Ci.max),this.boundingBox.expandByPoint(Hn)):(this.boundingBox.expandByPoint(Ci.min),this.boundingBox.expandByPoint(Ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const i=this.boundingSphere.center;if(Ci.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Yo.setFromBufferAttribute(a),this.morphTargetsRelative?(Hn.addVectors(Ci.min,Yo.min),Ci.expandByPoint(Hn),Hn.addVectors(Ci.max,Yo.max),Ci.expandByPoint(Hn)):(Ci.expandByPoint(Yo.min),Ci.expandByPoint(Yo.max))}Ci.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Hn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Hn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Hn.fromBufferAttribute(a,l),c&&(eo.fromBufferAttribute(e,l),Hn.add(eo)),r=Math.max(r,i.distanceToSquared(Hn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new b,c[N]=new b;const l=new b,d=new b,f=new b,u=new ze,h=new ze,m=new ze,_=new b,g=new b;function p(N,M,S){l.fromBufferAttribute(i,N),d.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),u.fromBufferAttribute(s,N),h.fromBufferAttribute(s,M),m.fromBufferAttribute(s,S),d.sub(l),f.sub(l),h.sub(u),m.sub(u);const I=1/(h.x*m.y-m.x*h.y);isFinite(I)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(f,-h.y).multiplyScalar(I),g.copy(f).multiplyScalar(h.x).addScaledVector(d,-m.x).multiplyScalar(I),a[N].add(_),a[M].add(_),a[S].add(_),c[N].add(g),c[M].add(g),c[S].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,M=w.length;N<M;++N){const S=w[N],I=S.start,F=S.count;for(let V=I,G=I+F;V<G;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const y=new b,v=new b,C=new b,P=new b;function D(N){C.fromBufferAttribute(r,N),P.copy(C);const M=a[N];y.copy(M),y.sub(C.multiplyScalar(C.dot(M))).normalize(),v.crossVectors(P,M);const I=v.dot(c[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,I)}for(let N=0,M=w.length;N<M;++N){const S=w[N],I=S.start,F=S.count;for(let V=I,G=I+F;V<G;V+=3)D(e.getX(V+0)),D(e.getX(V+1)),D(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ui(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const r=new b,s=new b,o=new b,a=new b,c=new b,l=new b,d=new b,f=new b;if(e)for(let u=0,h=e.count;u<h;u+=3){const m=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),a.add(d),c.add(d),l.add(d),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,h=t.count;u<h;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Hn.fromBufferAttribute(e,t),Hn.normalize(),e.setXYZ(t,Hn.x,Hn.y,Hn.z)}toNonIndexed(){function e(a,c){const l=a.array,d=a.itemSize,f=a.normalized,u=new l.constructor(c.length*d);let h=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?h=c[_]*a.data.stride+a.offset:h=c[_]*d;for(let p=0;p<d;p++)u[m++]=l[h++]}return new Ui(u,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let d=0,f=l.length;d<f;d++){const u=l[d],h=e(u,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,u=l.length;f<u;f++){const h=l[f];d.push(h.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],f=s[l];for(let u=0,h=f.length;u<h;u++)d.push(f[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yh=new qt,ls=new $a,mc=new Uo,jh=new b,gc=new b,_c=new b,vc=new b,ld=new b,xc=new b,Zh=new b,yc=new b;class Ee extends vn{constructor(e=new kt,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){xc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=a[c],f=s[c];d!==0&&(ld.fromBufferAttribute(f,e),o?xc.addScaledVector(ld,d):xc.addScaledVector(ld.sub(t),d))}t.add(xc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mc.copy(i.boundingSphere),mc.applyMatrix4(s),ls.copy(e.ray).recast(e.near),!(mc.containsPoint(ls.origin)===!1&&(ls.intersectSphere(mc,jh)===null||ls.origin.distanceToSquared(jh)>(e.far-e.near)**2))&&(Yh.copy(s).invert(),ls.copy(e.ray).applyMatrix4(Yh),!(i.boundingBox!==null&&ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],w=Math.max(g.start,h.start),y=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let v=w,C=y;v<C;v+=3){const P=a.getX(v),D=a.getX(v+1),N=a.getX(v+2);r=Sc(this,p,e,i,l,d,f,P,D,N),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let g=m,p=_;g<p;g+=3){const w=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);r=Sc(this,o,e,i,l,d,f,w,y,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],w=Math.max(g.start,h.start),y=Math.min(c.count,Math.min(g.start+g.count,h.start+h.count));for(let v=w,C=y;v<C;v+=3){const P=v,D=v+1,N=v+2;r=Sc(this,p,e,i,l,d,f,P,D,N),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let g=m,p=_;g<p;g+=3){const w=g,y=g+1,v=g+2;r=Sc(this,o,e,i,l,d,f,w,y,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function h_(n,e,t,i,r,s,o,a){let c;if(e.side===Si?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Cr,a),c===null)return null;yc.copy(a),yc.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(yc);return l<t.near||l>t.far?null:{distance:l,point:yc.clone(),object:n}}function Sc(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,gc),n.getVertexPosition(c,_c),n.getVertexPosition(l,vc);const d=h_(n,e,t,i,gc,_c,vc,Zh);if(d){const f=new b;er.getBarycoord(Zh,gc,_c,vc,f),r&&(d.uv=er.getInterpolatedAttribute(r,a,c,l,f,new ze)),s&&(d.uv1=er.getInterpolatedAttribute(s,a,c,l,f,new ze)),o&&(d.normal=er.getInterpolatedAttribute(o,a,c,l,f,new b),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new b,materialIndex:0};er.getNormal(gc,_c,vc,u.normal),d.face=u,d.barycoord=f}return d}class Tn extends kt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],d=[],f=[];let u=0,h=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(d,3)),this.setAttribute("uv",new Dt(f,2));function m(_,g,p,w,y,v,C,P,D,N,M){const S=v/D,I=C/N,F=v/2,V=C/2,G=P/2,J=D+1,Y=N+1;let de=0,q=0;const oe=new b;for(let xe=0;xe<Y;xe++){const We=xe*I-V;for(let it=0;it<J;it++){const gt=it*S-F;oe[_]=gt*w,oe[g]=We*y,oe[p]=G,l.push(oe.x,oe.y,oe.z),oe[_]=0,oe[g]=0,oe[p]=P>0?1:-1,d.push(oe.x,oe.y,oe.z),f.push(it/D),f.push(1-xe/N),de+=1}}for(let xe=0;xe<N;xe++)for(let We=0;We<D;We++){const it=u+We+J*xe,gt=u+We+J*(xe+1),xt=u+(We+1)+J*(xe+1),Q=u+(We+1)+J*xe;c.push(it,gt,Q),c.push(gt,xt,Q),q+=6}a.addGroup(h,q,M),h+=q,u+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function To(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ui(n){const e={};for(let t=0;t<n.length;t++){const i=To(n[t]);for(const r in i)e[r]=i[r]}return e}function f_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Jp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}const p_={clone:To,merge:ui};var m_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends ko{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m_,this.fragmentShader=g_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=f_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Qp extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=pr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vr=new b,Kh=new ze,Jh=new ze;class Di extends Qp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z)}getViewSize(e,t){return this.getViewBounds(e,Kh,Jh),t.subVectors(Jh,Kh)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ua*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const to=-90,no=1;class __ extends vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Di(to,no,e,t);r.layers=this.layers,this.add(r);const s=new Di(to,no,e,t);s.layers=this.layers,this.add(s);const o=new Di(to,no,e,t);o.layers=this.layers,this.add(o);const a=new Di(to,no,e,t);a.layers=this.layers,this.add(a);const c=new Di(to,no,e,t);c.layers=this.layers,this.add(c);const l=new Di(to,no,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===pr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(f,u,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class em extends bi{constructor(e=[],t=Mo,i,r,s,o,a,c,l,d){super(e,t,i,r,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v_ extends Ls{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new em(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Tn(5,5,5),s=new Pr({name:"CubemapFromEquirect",uniforms:To(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Si,blending:Zr});s.uniforms.tEquirect.value=t;const o=new Ee(r,s),a=t.minFilter;return t.minFilter===Ms&&(t.minFilter=fr),new __(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Sn extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x_={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=d.position.distanceTo(f.position),h=.02,m=.005;l.inputState.pinching&&u>h+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=h-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x_)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Sn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class y_ extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ud=new b,S_=new b,b_=new wt;class qr{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ud.subVectors(i,t).cross(S_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ud),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||b_.getNormalMatrix(e),r=this.coplanarPoint(ud).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new Uo,M_=new ze(.5,.5),bc=new b;class rh{constructor(e=new qr,t=new qr,i=new qr,r=new qr,s=new qr,o=new qr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],d=s[4],f=s[5],u=s[6],h=s[7],m=s[8],_=s[9],g=s[10],p=s[11],w=s[12],y=s[13],v=s[14],C=s[15];if(r[0].setComponents(l-o,h-d,p-m,C-w).normalize(),r[1].setComponents(l+o,h+d,p+m,C+w).normalize(),r[2].setComponents(l+a,h+f,p+_,C+y).normalize(),r[3].setComponents(l-a,h-f,p-_,C-y).normalize(),i)r[4].setComponents(c,u,g,v).normalize(),r[5].setComponents(l-c,h-u,p-g,C-v).normalize();else if(r[4].setComponents(l-c,h-u,p-g,C-v).normalize(),t===pr)r[5].setComponents(l+c,h+u,p+g,C+v).normalize();else if(t===ol)r[5].setComponents(c,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);const t=M_.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(bc.x=r.normal.x>0?e.max.x:e.min.x,bc.y=r.normal.y>0?e.max.y:e.min.y,bc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mi extends ko{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cl=new b,ll=new b,Qh=new qt,jo=new $a,Mc=new Uo,hd=new b,ef=new b;class rn extends vn{constructor(e=new kt,t=new Mi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)cl.fromBufferAttribute(t,r-1),ll.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=cl.distanceTo(ll);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mc.copy(i.boundingSphere),Mc.applyMatrix4(r),Mc.radius+=s,e.ray.intersectsSphere(Mc)===!1)return;Qh.copy(r).invert(),jo.copy(e.ray).applyMatrix4(Qh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=h,g=m-1;_<g;_+=l){const p=d.getX(_),w=d.getX(_+1),y=wc(this,e,jo,c,p,w,_);y&&t.push(y)}if(this.isLineLoop){const _=d.getX(m-1),g=d.getX(h),p=wc(this,e,jo,c,_,g,m-1);p&&t.push(p)}}else{const h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=h,g=m-1;_<g;_+=l){const p=wc(this,e,jo,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=wc(this,e,jo,c,m-1,h,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function wc(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(cl.fromBufferAttribute(a,r),ll.fromBufferAttribute(a,s),t.distanceSqToSegment(cl,ll,hd,ef)>i)return;hd.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(hd);if(!(l<e.near||l>e.far))return{distance:l,point:ef.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const tf=new b,nf=new b;class w_ extends rn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)tf.fromBufferAttribute(t,r),nf.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+tf.distanceTo(nf);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class E_ extends rn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class tm extends ko{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rf=new qt,Pu=new $a,Ec=new Uo,Tc=new b;class nm extends vn{constructor(e=new kt,t=new tm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ec.copy(i.boundingSphere),Ec.applyMatrix4(r),Ec.radius+=s,e.ray.intersectsSphere(Ec)===!1)return;rf.copy(r).invert(),Pu.copy(e.ray).applyMatrix4(rf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){const u=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let m=u,_=h;m<_;m++){const g=l.getX(m);Tc.fromBufferAttribute(f,g),sf(Tc,g,c,r,e,t,this)}}else{const u=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let m=u,_=h;m<_;m++)Tc.fromBufferAttribute(f,m),sf(Tc,m,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function sf(n,e,t,i,r,s,o){const a=Pu.distanceSqToPoint(n);if(a<t){const c=new b;Pu.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class im extends bi{constructor(e,t,i=Ds,r,s,o,a=ir,c=ir,l,d=Ma,f=1){if(d!==Ma&&d!==wa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,s,o,a,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ta extends kt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new b,d=new ze;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const h=i+f/t*r;l.x=e*Math.cos(h),l.y=e*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,c.push(d.x,d.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(a,3)),this.setAttribute("uv",new Dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ti extends kt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],u=[],h=[];let m=0;const _=[],g=i/2;let p=0;w(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new Dt(f,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(h,2));function w(){const v=new b,C=new b;let P=0;const D=(t-e)/i;for(let N=0;N<=s;N++){const M=[],S=N/s,I=S*(t-e)+e;for(let F=0;F<=r;F++){const V=F/r,G=V*c+a,J=Math.sin(G),Y=Math.cos(G);C.x=I*J,C.y=-S*i+g,C.z=I*Y,f.push(C.x,C.y,C.z),v.set(J,D,Y).normalize(),u.push(v.x,v.y,v.z),h.push(V,1-S),M.push(m++)}_.push(M)}for(let N=0;N<r;N++)for(let M=0;M<s;M++){const S=_[M][N],I=_[M+1][N],F=_[M+1][N+1],V=_[M][N+1];(e>0||M!==0)&&(d.push(S,I,V),P+=3),(t>0||M!==s-1)&&(d.push(I,F,V),P+=3)}l.addGroup(p,P,0),p+=P}function y(v){const C=m,P=new ze,D=new b;let N=0;const M=v===!0?e:t,S=v===!0?1:-1;for(let F=1;F<=r;F++)f.push(0,g*S,0),u.push(0,S,0),h.push(.5,.5),m++;const I=m;for(let F=0;F<=r;F++){const G=F/r*c+a,J=Math.cos(G),Y=Math.sin(G);D.x=M*Y,D.y=g*S,D.z=M*J,f.push(D.x,D.y,D.z),u.push(0,S,0),P.x=J*.5+.5,P.y=Y*.5*S+.5,h.push(P.x,P.y),m++}for(let F=0;F<r;F++){const V=C+F,G=I+F;v===!0?d.push(G,G+1,V):d.push(G+1,G,V),N+=3}l.addGroup(p,N,v===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sh extends kt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),d(),this.setAttribute("position",new Dt(s,3)),this.setAttribute("normal",new Dt(s.slice(),3)),this.setAttribute("uv",new Dt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const y=new b,v=new b,C=new b;for(let P=0;P<t.length;P+=3)h(t[P+0],y),h(t[P+1],v),h(t[P+2],C),c(y,v,C,w)}function c(w,y,v,C){const P=C+1,D=[];for(let N=0;N<=P;N++){D[N]=[];const M=w.clone().lerp(v,N/P),S=y.clone().lerp(v,N/P),I=P-N;for(let F=0;F<=I;F++)F===0&&N===P?D[N][F]=M:D[N][F]=M.clone().lerp(S,F/I)}for(let N=0;N<P;N++)for(let M=0;M<2*(P-N)-1;M++){const S=Math.floor(M/2);M%2===0?(u(D[N][S+1]),u(D[N+1][S]),u(D[N][S])):(u(D[N][S+1]),u(D[N+1][S+1]),u(D[N+1][S]))}}function l(w){const y=new b;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(w),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function d(){const w=new b;for(let y=0;y<s.length;y+=3){w.x=s[y+0],w.y=s[y+1],w.z=s[y+2];const v=g(w)/2/Math.PI+.5,C=p(w)/Math.PI+.5;o.push(v,1-C)}m(),f()}function f(){for(let w=0;w<o.length;w+=6){const y=o[w+0],v=o[w+2],C=o[w+4],P=Math.max(y,v,C),D=Math.min(y,v,C);P>.9&&D<.1&&(y<.2&&(o[w+0]+=1),v<.2&&(o[w+2]+=1),C<.2&&(o[w+4]+=1))}}function u(w){s.push(w.x,w.y,w.z)}function h(w,y){const v=w*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function m(){const w=new b,y=new b,v=new b,C=new b,P=new ze,D=new ze,N=new ze;for(let M=0,S=0;M<s.length;M+=9,S+=6){w.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),P.set(o[S+0],o[S+1]),D.set(o[S+2],o[S+3]),N.set(o[S+4],o[S+5]),C.copy(w).add(y).add(v).divideScalar(3);const I=g(C);_(P,S+0,w,I),_(D,S+2,y,I),_(N,S+4,v,I)}}function _(w,y,v,C){C<0&&w.x===1&&(o[y]=w.x-1),v.x===0&&v.z===0&&(o[y]=C/2/Math.PI+.5)}function g(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sh(e.vertices,e.indices,e.radius,e.details)}}class gr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const d=i[r],u=i[r+1]-d,h=(o-d)/u;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new ze:new b);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new b,r=[],s=[],o=[],a=new b,c=new qt;for(let h=0;h<=e;h++){const m=h/e;r[h]=this.getTangentAt(m,new b)}s[0]=new b,o[0]=new b;let l=Number.MAX_VALUE;const d=Math.abs(r[0].x),f=Math.abs(r[0].y),u=Math.abs(r[0].z);d<=l&&(l=d,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Rt(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(c.makeRotationAxis(a,m))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(Rt(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(r[m],h*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class oh extends gr{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ze){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,h=l-this.aY;c=u*d-h*f+this.aX,l=u*f+h*d+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class T_ extends oh{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ah(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,d,f){let u=(o-s)/l-(a-s)/(l+d)+(a-o)/d,h=(a-o)/d-(c-o)/(d+f)+(c-a)/f;u*=d,h*=d,r(o,a,u,h)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Ac=new b,fd=new ah,pd=new ah,md=new ah;class ch extends gr{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new b){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,d;this.closed||a>0?l=r[(a-1)%s]:(Ac.subVectors(r[0],r[1]).add(r[0]),l=Ac);const f=r[a%s],u=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(Ac.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Ac),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(f),h),_=Math.pow(f.distanceToSquared(u),h),g=Math.pow(u.distanceToSquared(d),h);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),fd.initNonuniformCatmullRom(l.x,f.x,u.x,d.x,m,_,g),pd.initNonuniformCatmullRom(l.y,f.y,u.y,d.y,m,_,g),md.initNonuniformCatmullRom(l.z,f.z,u.z,d.z,m,_,g)}else this.curveType==="catmullrom"&&(fd.initCatmullRom(l.x,f.x,u.x,d.x,this.tension),pd.initCatmullRom(l.y,f.y,u.y,d.y,this.tension),md.initCatmullRom(l.z,f.z,u.z,d.z,this.tension));return i.set(fd.calc(c),pd.calc(c),md.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new b().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function of(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function A_(n,e){const t=1-n;return t*t*e}function R_(n,e){return 2*(1-n)*n*e}function C_(n,e){return n*n*e}function fa(n,e,t,i){return A_(n,e)+R_(n,t)+C_(n,i)}function P_(n,e){const t=1-n;return t*t*t*e}function D_(n,e){const t=1-n;return 3*t*t*n*e}function L_(n,e){return 3*(1-n)*n*n*e}function I_(n,e){return n*n*n*e}function pa(n,e,t,i,r){return P_(n,e)+D_(n,t)+L_(n,i)+I_(n,r)}class rm extends gr{constructor(e=new ze,t=new ze,i=new ze,r=new ze){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ze){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(pa(e,r.x,s.x,o.x,a.x),pa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class N_ extends gr{constructor(e=new b,t=new b,i=new b,r=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new b){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(pa(e,r.x,s.x,o.x,a.x),pa(e,r.y,s.y,o.y,a.y),pa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sm extends gr{constructor(e=new ze,t=new ze){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ze){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ze){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class U_ extends gr{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class om extends gr{constructor(e=new ze,t=new ze,i=new ze){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ze){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(fa(e,r.x,s.x,o.x),fa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class k_ extends gr{constructor(e=new b,t=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(fa(e,r.x,s.x,o.x),fa(e,r.y,s.y,o.y),fa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class am extends gr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ze){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],d=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(of(a,c.x,l.x,d.x,f.x),of(a,c.y,l.y,d.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ze().fromArray(r))}return this}}var af=Object.freeze({__proto__:null,ArcCurve:T_,CatmullRomCurve3:ch,CubicBezierCurve:rm,CubicBezierCurve3:N_,EllipseCurve:oh,LineCurve:sm,LineCurve3:U_,QuadraticBezierCurve:om,QuadraticBezierCurve3:k_,SplineCurve:am});class F_ extends gr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new af[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const d=c[l];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new af[r.type]().fromJSON(r))}return this}}class cf extends F_{constructor(e){super(),this.type="Path",this.currentPoint=new ze,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new sm(this.currentPoint.clone(),new ze(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new om(this.currentPoint.clone(),new ze(e,t),new ze(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new rm(this.currentPoint.clone(),new ze(e,t),new ze(i,r),new ze(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new am(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+l,t+d,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new oh(e,t,i,r,s,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const d=l.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class cm extends cf{constructor(e){super(e),this.uuid=Os(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new cf().fromJSON(r))}return this}}function O_(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=lm(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=G_(n,e,s,t)),n.length>80*t){a=1/0,c=1/0;let d=-1/0,f=-1/0;for(let u=t;u<r;u+=t){const h=n[u],m=n[u+1];h<a&&(a=h),m<c&&(c=m),h>d&&(d=h),m>f&&(f=m)}l=Math.max(d-a,f-c),l=l!==0?32767/l:0}return Aa(s,o,t,a,c,l,0),o}function lm(n,e,t,i,r){let s;if(r===ev(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=lf(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=lf(o/i|0,n[o],n[o+1],s);return s&&Ao(s,s.next)&&(Ca(s),s=s.next),s}function Is(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ao(t,t.next)||gn(t.prev,t,t.next)===0)){if(Ca(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Aa(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Y_(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?B_(n,i,r,s):z_(n)){e.push(c.i,n.i,l.i),Ca(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=H_(Is(n),e),Aa(n,e,t,i,r,s,2)):o===2&&V_(n,e,t,i,r,s):Aa(Is(n),e,t,i,r,s,1);break}}}function z_(n){const e=n.prev,t=n,i=n.next;if(gn(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,d=Math.min(r,s,o),f=Math.min(a,c,l),u=Math.max(r,s,o),h=Math.max(a,c,l);let m=i.next;for(;m!==e;){if(m.x>=d&&m.x<=u&&m.y>=f&&m.y<=h&&oa(r,a,s,c,o,l,m.x,m.y)&&gn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function B_(n,e,t,i){const r=n.prev,s=n,o=n.next;if(gn(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,d=r.y,f=s.y,u=o.y,h=Math.min(a,c,l),m=Math.min(d,f,u),_=Math.max(a,c,l),g=Math.max(d,f,u),p=Du(h,m,e,t,i),w=Du(_,g,e,t,i);let y=n.prevZ,v=n.nextZ;for(;y&&y.z>=p&&v&&v.z<=w;){if(y.x>=h&&y.x<=_&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&oa(a,d,c,f,l,u,y.x,y.y)&&gn(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=h&&v.x<=_&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&oa(a,d,c,f,l,u,v.x,v.y)&&gn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=h&&y.x<=_&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&oa(a,d,c,f,l,u,y.x,y.y)&&gn(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=w;){if(v.x>=h&&v.x<=_&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&oa(a,d,c,f,l,u,v.x,v.y)&&gn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function H_(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Ao(i,r)&&um(i,t,t.next,r)&&Ra(i,r)&&Ra(r,i)&&(e.push(i.i,t.i,r.i),Ca(t),Ca(t.next),t=n=r),t=t.next}while(t!==n);return Is(t)}function V_(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&K_(o,a)){let c=hm(o,a);o=Is(o,o.next),c=Is(c,c.next),Aa(o,e,t,i,r,s,0),Aa(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function G_(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=lm(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(Z_(l))}r.sort(W_);for(let s=0;s<r.length;s++)t=X_(r[s],t);return t}function W_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function X_(n,e){const t=q_(n,e);if(!t)return e;const i=hm(t,n);return Is(i,i.next),Is(t,t.next)}function q_(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(Ao(n,t))return t;do{if(Ao(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let d=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&dm(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);Ra(t,n)&&(f<d||f===d&&(t.x>o.x||t.x===o.x&&$_(o,t)))&&(o=t,d=f)}t=t.next}while(t!==a);return o}function $_(n,e){return gn(n.prev,n,e.prev)<0&&gn(e.next,n,n.next)<0}function Y_(n,e,t,i){let r=n;do r.z===0&&(r.z=Du(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,j_(r)}function j_(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Du(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Z_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function dm(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function oa(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&dm(n,e,t,i,r,s,o,a)}function K_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!J_(n,e)&&(Ra(n,e)&&Ra(e,n)&&Q_(n,e)&&(gn(n.prev,n,e.prev)||gn(n,e.prev,e))||Ao(n,e)&&gn(n.prev,n,n.next)>0&&gn(e.prev,e,e.next)>0)}function gn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ao(n,e){return n.x===e.x&&n.y===e.y}function um(n,e,t,i){const r=Cc(gn(n,e,t)),s=Cc(gn(n,e,i)),o=Cc(gn(t,i,n)),a=Cc(gn(t,i,e));return!!(r!==s&&o!==a||r===0&&Rc(n,t,e)||s===0&&Rc(n,i,e)||o===0&&Rc(t,n,i)||a===0&&Rc(t,e,i))}function Rc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Cc(n){return n>0?1:n<0?-1:0}function J_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&um(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ra(n,e){return gn(n.prev,n,n.next)<0?gn(n,e,n.next)>=0&&gn(n,n.prev,e)>=0:gn(n,e,n.prev)<0||gn(n,n.next,e)<0}function Q_(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function hm(n,e){const t=Lu(n.i,n.x,n.y),i=Lu(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function lf(n,e,t,i){const r=Lu(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ca(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Lu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ev(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class tv{static triangulate(e,t,i=2){return O_(e,t,i)}}class ma{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ma.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];df(e),uf(i,e);let o=e.length;t.forEach(df);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,uf(i,t[c]);const a=tv.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function df(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function uf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ws extends sh{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ws(e.radius,e.detail)}}class Qr extends kt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,d=c+1,f=e/a,u=t/c,h=[],m=[],_=[],g=[];for(let p=0;p<d;p++){const w=p*u-o;for(let y=0;y<l;y++){const v=y*f-s;m.push(v,-w,0),_.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const y=w+l*p,v=w+l*(p+1),C=w+1+l*(p+1),P=w+1+l*p;h.push(y,v,P),h.push(v,C,P)}this.setIndex(h),this.setAttribute("position",new Dt(m,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rl extends kt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],d=[];let f=e;const u=(t-e)/r,h=new b,m=new ze;for(let _=0;_<=r;_++){for(let g=0;g<=i;g++){const p=s+g/i*o;h.x=f*Math.cos(p),h.y=f*Math.sin(p),c.push(h.x,h.y,h.z),l.push(0,0,1),m.x=(h.x/t+1)/2,m.y=(h.y/t+1)/2,d.push(m.x,m.y)}f+=u}for(let _=0;_<r;_++){const g=_*(i+1);for(let p=0;p<i;p++){const w=p+g,y=w,v=w+i+1,C=w+i+2,P=w+1;a.push(y,v,P),a.push(v,C,P)}}this.setIndex(a),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class lh extends kt{constructor(e=new cm([new ze(0,.5),new ze(-.5,-.5),new ze(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let d=0;d<e.length;d++)l(e[d]),this.addGroup(a,c,d),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Dt(r,3)),this.setAttribute("normal",new Dt(s,3)),this.setAttribute("uv",new Dt(o,2));function l(d){const f=r.length/3,u=d.extractPoints(t);let h=u.shape;const m=u.holes;ma.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,p=m.length;g<p;g++){const w=m[g];ma.isClockWise(w)===!0&&(m[g]=w.reverse())}const _=ma.triangulateShape(h,m);for(let g=0,p=m.length;g<p;g++){const w=m[g];h=h.concat(w)}for(let g=0,p=h.length;g<p;g++){const w=h[g];r.push(w.x,w.y,0),s.push(0,0,1),o.push(w.x,w.y)}for(let g=0,p=_.length;g<p;g++){const w=_[g],y=w[0]+f,v=w[1]+f,C=w[2]+f;i.push(y,v,C),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return nv(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new lh(i,e.curveSegments)}}function nv(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class Jr extends kt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const d=[],f=new b,u=new b,h=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const w=[],y=p/i;let v=0;p===0&&o===0?v=.5/t:p===i&&c===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){const P=C/t;f.x=-e*Math.cos(r+P*s)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(r+P*s)*Math.sin(o+y*a),m.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),g.push(P+v,1-y),w.push(l++)}d.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const y=d[p][w+1],v=d[p][w],C=d[p+1][w],P=d[p+1][w+1];(p!==0||o>0)&&h.push(y,v,P),(p!==i-1||c<Math.PI)&&h.push(v,C,P)}this.setIndex(h),this.setAttribute("position",new Dt(m,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xs extends kt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],d=new b,f=new b,u=new b;for(let h=0;h<=i;h++)for(let m=0;m<=r;m++){const _=m/r*s,g=h/i*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(_),f.y=(e+t*Math.cos(g))*Math.sin(_),f.z=t*Math.sin(g),a.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),u.subVectors(f,d).normalize(),c.push(u.x,u.y,u.z),l.push(m/r),l.push(h/i)}for(let h=1;h<=i;h++)for(let m=1;m<=r;m++){const _=(r+1)*h+m-1,g=(r+1)*(h-1)+m-1,p=(r+1)*(h-1)+m,w=(r+1)*h+m;o.push(_,g,w),o.push(g,p,w)}this.setIndex(o),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class iv extends ko{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=S0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rv extends ko{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hf extends Mi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class sv extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const gd=new qt,ff=new b,pf=new b;class ov{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=mr,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rh,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ff.setFromMatrixPosition(e.matrixWorld),t.position.copy(ff),pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pf),t.updateMatrixWorld(),gd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mf=new qt,Zo=new b,_d=new b;class av extends ov{constructor(){super(new Di(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new Ft(2,1,1,1),new Ft(0,1,1,1),new Ft(3,1,1,1),new Ft(1,1,1,1),new Ft(3,0,1,1),new Ft(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Zo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Zo),_d.copy(i.position),_d.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(_d),i.updateMatrixWorld(),r.makeTranslation(-Zo.x,-Zo.y,-Zo.z),mf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mf,i.coordinateSystem,i.reversedDepth)}}class cv extends sv{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new av}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class lv extends Qp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dv extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const gf=new qt;class fm{constructor(e,t,i=0,r=1/0){this.ray=new $a(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ih,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gf),this}intersectObject(e,t=!0,i=[]){return Iu(e,this,i,t),i.sort(_f),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Iu(e[r],this,i,t);return i.sort(_f),i}}function _f(n,e){return n.distance-e.distance}function Iu(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Iu(s[o],e,t,!0)}}class vf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class pm extends Fs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function xf(n,e,t,i){const r=uv(i);switch(t){case Hp:return n*e;case Gp:return n*e/r.components*r.byteLength;case Ju:return n*e/r.components*r.byteLength;case Wp:return n*e*2/r.components*r.byteLength;case Qu:return n*e*2/r.components*r.byteLength;case Vp:return n*e*3/r.components*r.byteLength;case tr:return n*e*4/r.components*r.byteLength;case eh:return n*e*4/r.components*r.byteLength;case Xc:case qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $c:case Yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case su:case au:return Math.max(n,16)*Math.max(e,8)/4;case ru:case ou:return Math.max(n,8)*Math.max(e,8)/2;case cu:case lu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case du:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case fu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _u:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case vu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case yu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Su:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Mu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case wu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case jc:case Eu:case Tu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Xp:case Au:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ru:case Cu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uv(n){switch(n){case mr:case Op:return{byteLength:1,components:1};case Sa:case zp:case qa:return{byteLength:2,components:1};case Zu:case Ku:return{byteLength:2,components:4};case Ds:case ju:case wr:return{byteLength:4,components:1};case Bp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yu);function mm(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function hv(n){const e=new WeakMap;function t(a,c){const l=a.array,d=a.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,d),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const d=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,d);else{f.sort((h,m)=>h.start-m.start);let u=0;for(let h=1;h<f.length;h++){const m=f[u],_=f[h];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,f[u]=_)}f.length=u+1;for(let h=0,m=f.length;h<m;h++){const _=f[h];n.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var fv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pv=`#ifdef USE_ALPHAHASH
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
#endif`,mv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_v=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xv=`#ifdef USE_AOMAP
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
#endif`,yv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sv=`#ifdef USE_BATCHING
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
#endif`,bv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ev=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tv=`#ifdef USE_IRIDESCENCE
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
#endif`,Av=`#ifdef USE_BUMPMAP
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
#endif`,Rv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Iv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kv=`#define PI 3.141592653589793
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
} // validated`,Fv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ov=`vec3 transformedNormal = objectNormal;
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
#endif`,zv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xv=`#ifdef USE_ENVMAP
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
#endif`,qv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$v=`#ifdef USE_ENVMAP
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
#endif`,Yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jv=`#ifdef USE_ENVMAP
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
#endif`,Zv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ex=`#ifdef USE_GRADIENTMAP
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
}`,tx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rx=`uniform bool receiveShadow;
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
#endif`,sx=`#ifdef USE_ENVMAP
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
#endif`,ox=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dx=`PhysicalMaterial material;
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
#endif`,ux=`struct PhysicalMaterial {
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
}`,hx=`
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
#endif`,fx=`#if defined( RE_IndirectDiffuse )
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
#endif`,px=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bx=`#if defined( USE_POINTS_UV )
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
#endif`,Mx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rx=`#ifdef USE_MORPHTARGETS
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
#endif`,Cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ux=`#ifdef USE_NORMALMAP
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
#endif`,kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$x=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kx=`float getShadowMask() {
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
}`,Jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,ey=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ty=`#ifdef USE_SKINNING
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
#endif`,ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ry=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oy=`#ifdef USE_TRANSMISSION
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
#endif`,ay=`#ifdef USE_TRANSMISSION
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
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fy=`uniform sampler2D t2D;
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
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,my=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`#include <common>
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
}`,xy=`#if DEPTH_PACKING == 3200
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
}`,yy=`#define DISTANCE
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
}`,Sy=`#define DISTANCE
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
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,My=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`uniform float scale;
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
}`,Ey=`uniform vec3 diffuse;
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
}`,Ty=`#include <common>
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Ry=`#define LAMBERT
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
}`,Cy=`#define LAMBERT
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
}`,Py=`#define MATCAP
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
}`,Dy=`#define MATCAP
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
}`,Ly=`#define NORMAL
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
}`,Iy=`#define NORMAL
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
}`,Ny=`#define PHONG
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
}`,Uy=`#define PHONG
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
}`,ky=`#define STANDARD
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
}`,Fy=`#define STANDARD
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
}`,Oy=`#define TOON
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
}`,zy=`#define TOON
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
}`,By=`uniform float size;
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
}`,Hy=`uniform vec3 diffuse;
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
}`,Vy=`#include <common>
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
}`,Gy=`uniform vec3 color;
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
}`,Wy=`uniform float rotation;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:fv,alphahash_pars_fragment:pv,alphamap_fragment:mv,alphamap_pars_fragment:gv,alphatest_fragment:_v,alphatest_pars_fragment:vv,aomap_fragment:xv,aomap_pars_fragment:yv,batching_pars_vertex:Sv,batching_vertex:bv,begin_vertex:Mv,beginnormal_vertex:wv,bsdfs:Ev,iridescence_fragment:Tv,bumpmap_pars_fragment:Av,clipping_planes_fragment:Rv,clipping_planes_pars_fragment:Cv,clipping_planes_pars_vertex:Pv,clipping_planes_vertex:Dv,color_fragment:Lv,color_pars_fragment:Iv,color_pars_vertex:Nv,color_vertex:Uv,common:kv,cube_uv_reflection_fragment:Fv,defaultnormal_vertex:Ov,displacementmap_pars_vertex:zv,displacementmap_vertex:Bv,emissivemap_fragment:Hv,emissivemap_pars_fragment:Vv,colorspace_fragment:Gv,colorspace_pars_fragment:Wv,envmap_fragment:Xv,envmap_common_pars_fragment:qv,envmap_pars_fragment:$v,envmap_pars_vertex:Yv,envmap_physical_pars_fragment:sx,envmap_vertex:jv,fog_vertex:Zv,fog_pars_vertex:Kv,fog_fragment:Jv,fog_pars_fragment:Qv,gradientmap_pars_fragment:ex,lightmap_pars_fragment:tx,lights_lambert_fragment:nx,lights_lambert_pars_fragment:ix,lights_pars_begin:rx,lights_toon_fragment:ox,lights_toon_pars_fragment:ax,lights_phong_fragment:cx,lights_phong_pars_fragment:lx,lights_physical_fragment:dx,lights_physical_pars_fragment:ux,lights_fragment_begin:hx,lights_fragment_maps:fx,lights_fragment_end:px,logdepthbuf_fragment:mx,logdepthbuf_pars_fragment:gx,logdepthbuf_pars_vertex:_x,logdepthbuf_vertex:vx,map_fragment:xx,map_pars_fragment:yx,map_particle_fragment:Sx,map_particle_pars_fragment:bx,metalnessmap_fragment:Mx,metalnessmap_pars_fragment:wx,morphinstance_vertex:Ex,morphcolor_vertex:Tx,morphnormal_vertex:Ax,morphtarget_pars_vertex:Rx,morphtarget_vertex:Cx,normal_fragment_begin:Px,normal_fragment_maps:Dx,normal_pars_fragment:Lx,normal_pars_vertex:Ix,normal_vertex:Nx,normalmap_pars_fragment:Ux,clearcoat_normal_fragment_begin:kx,clearcoat_normal_fragment_maps:Fx,clearcoat_pars_fragment:Ox,iridescence_pars_fragment:zx,opaque_fragment:Bx,packing:Hx,premultiplied_alpha_fragment:Vx,project_vertex:Gx,dithering_fragment:Wx,dithering_pars_fragment:Xx,roughnessmap_fragment:qx,roughnessmap_pars_fragment:$x,shadowmap_pars_fragment:Yx,shadowmap_pars_vertex:jx,shadowmap_vertex:Zx,shadowmask_pars_fragment:Kx,skinbase_vertex:Jx,skinning_pars_vertex:Qx,skinning_vertex:ey,skinnormal_vertex:ty,specularmap_fragment:ny,specularmap_pars_fragment:iy,tonemapping_fragment:ry,tonemapping_pars_fragment:sy,transmission_fragment:oy,transmission_pars_fragment:ay,uv_pars_fragment:cy,uv_pars_vertex:ly,uv_vertex:dy,worldpos_vertex:uy,background_vert:hy,background_frag:fy,backgroundCube_vert:py,backgroundCube_frag:my,cube_vert:gy,cube_frag:_y,depth_vert:vy,depth_frag:xy,distanceRGBA_vert:yy,distanceRGBA_frag:Sy,equirect_vert:by,equirect_frag:My,linedashed_vert:wy,linedashed_frag:Ey,meshbasic_vert:Ty,meshbasic_frag:Ay,meshlambert_vert:Ry,meshlambert_frag:Cy,meshmatcap_vert:Py,meshmatcap_frag:Dy,meshnormal_vert:Ly,meshnormal_frag:Iy,meshphong_vert:Ny,meshphong_frag:Uy,meshphysical_vert:ky,meshphysical_frag:Fy,meshtoon_vert:Oy,meshtoon_frag:zy,points_vert:By,points_frag:Hy,shadow_vert:Vy,shadow_frag:Gy,sprite_vert:Wy,sprite_frag:Xy},Be={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},hr={basic:{uniforms:ui([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:ui([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ut(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:ui([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:ui([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:ui([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Ut(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:ui([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:ui([Be.points,Be.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:ui([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:ui([Be.common,Be.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:ui([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:ui([Be.sprite,Be.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:ui([Be.common,Be.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:ui([Be.lights,Be.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};hr.physical={uniforms:ui([hr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const Pc={r:0,b:0,g:0},us=new ri,qy=new qt;function $y(n,e,t,i,r,s,o){const a=new Ut(0);let c=s===!0?0:1,l,d,f=null,u=0,h=null;function m(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const C=m(y);C===null?p(a,c):C&&C.isColor&&(p(C,1),v=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(y,v){const C=m(v);C&&(C.isCubeTexture||C.mapping===Al)?(d===void 0&&(d=new Ee(new Tn(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:To(hr.backgroundCube.uniforms),vertexShader:hr.backgroundCube.vertexShader,fragmentShader:hr.backgroundCube.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),us.copy(v.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(qy.makeRotationFromEuler(us)),d.material.toneMapped=Bt.getTransfer(C.colorSpace)!==Zt,(f!==C||u!==C.version||h!==n.toneMapping)&&(d.material.needsUpdate=!0,f=C,u=C.version,h=n.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Ee(new Qr(2,2),new Pr({name:"BackgroundMaterial",uniforms:To(hr.background.uniforms),vertexShader:hr.background.vertexShader,fragmentShader:hr.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Bt.getTransfer(C.colorSpace)!==Zt,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||u!==C.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,f=C,u=C.version,h=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(Pc,Jp(n)),i.buffers.color.setClear(Pc.r,Pc.g,Pc.b,v,o)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:g,dispose:w}}function Yy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(S,I,F,V,G){let J=!1;const Y=f(V,F,I);s!==Y&&(s=Y,l(s.object)),J=h(S,V,F,G),J&&m(S,V,F,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,v(S,I,F,V),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function d(S){return n.deleteVertexArray(S)}function f(S,I,F){const V=F.wireframe===!0;let G=i[S.id];G===void 0&&(G={},i[S.id]=G);let J=G[I.id];J===void 0&&(J={},G[I.id]=J);let Y=J[V];return Y===void 0&&(Y=u(c()),J[V]=Y),Y}function u(S){const I=[],F=[],V=[];for(let G=0;G<t;G++)I[G]=0,F[G]=0,V[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:V,object:S,attributes:{},index:null}}function h(S,I,F,V){const G=s.attributes,J=I.attributes;let Y=0;const de=F.getAttributes();for(const q in de)if(de[q].location>=0){const xe=G[q];let We=J[q];if(We===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(We=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(We=S.instanceColor)),xe===void 0||xe.attribute!==We||We&&xe.data!==We.data)return!0;Y++}return s.attributesNum!==Y||s.index!==V}function m(S,I,F,V){const G={},J=I.attributes;let Y=0;const de=F.getAttributes();for(const q in de)if(de[q].location>=0){let xe=J[q];xe===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(xe=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(xe=S.instanceColor));const We={};We.attribute=xe,xe&&xe.data&&(We.data=xe.data),G[q]=We,Y++}s.attributes=G,s.attributesNum=Y,s.index=V}function _(){const S=s.newAttributes;for(let I=0,F=S.length;I<F;I++)S[I]=0}function g(S){p(S,0)}function p(S,I){const F=s.newAttributes,V=s.enabledAttributes,G=s.attributeDivisors;F[S]=1,V[S]===0&&(n.enableVertexAttribArray(S),V[S]=1),G[S]!==I&&(n.vertexAttribDivisor(S,I),G[S]=I)}function w(){const S=s.newAttributes,I=s.enabledAttributes;for(let F=0,V=I.length;F<V;F++)I[F]!==S[F]&&(n.disableVertexAttribArray(F),I[F]=0)}function y(S,I,F,V,G,J,Y){Y===!0?n.vertexAttribIPointer(S,I,F,G,J):n.vertexAttribPointer(S,I,F,V,G,J)}function v(S,I,F,V){_();const G=V.attributes,J=F.getAttributes(),Y=I.defaultAttributeValues;for(const de in J){const q=J[de];if(q.location>=0){let oe=G[de];if(oe===void 0&&(de==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),de==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),oe!==void 0){const xe=oe.normalized,We=oe.itemSize,it=e.get(oe);if(it===void 0)continue;const gt=it.buffer,xt=it.type,Q=it.bytesPerElement,Te=xt===n.INT||xt===n.UNSIGNED_INT||oe.gpuType===ju;if(oe.isInterleavedBufferAttribute){const se=oe.data,je=se.stride,ne=oe.offset;if(se.isInstancedInterleavedBuffer){for(let fe=0;fe<q.locationSize;fe++)p(q.location+fe,se.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let fe=0;fe<q.locationSize;fe++)g(q.location+fe);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let fe=0;fe<q.locationSize;fe++)y(q.location+fe,We/q.locationSize,xt,xe,je*Q,(ne+We/q.locationSize*fe)*Q,Te)}else{if(oe.isInstancedBufferAttribute){for(let se=0;se<q.locationSize;se++)p(q.location+se,oe.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let se=0;se<q.locationSize;se++)g(q.location+se);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let se=0;se<q.locationSize;se++)y(q.location+se,We/q.locationSize,xt,xe,We*Q,We/q.locationSize*se*Q,Te)}}else if(Y!==void 0){const xe=Y[de];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(q.location,xe);break;case 3:n.vertexAttrib3fv(q.location,xe);break;case 4:n.vertexAttrib4fv(q.location,xe);break;default:n.vertexAttrib1fv(q.location,xe)}}}}w()}function C(){N();for(const S in i){const I=i[S];for(const F in I){const V=I[F];for(const G in V)d(V[G].object),delete V[G];delete I[F]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const F in I){const V=I[F];for(const G in V)d(V[G].object),delete V[G];delete I[F]}delete i[S.id]}function D(S){for(const I in i){const F=i[I];if(F[S.id]===void 0)continue;const V=F[S.id];for(const G in V)d(V[G].object),delete V[G];delete F[S.id]}}function N(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:g,disableUnusedAttributes:w}}function jy(n,e,t){let i;function r(l){i=l}function s(l,d){n.drawArrays(i,l,d),t.update(d,i,1)}function o(l,d,f){f!==0&&(n.drawArraysInstanced(i,l,d,f),t.update(d,i,f))}function a(l,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,f);let h=0;for(let m=0;m<f;m++)h+=d[m];t.update(h,i,1)}function c(l,d,f,u){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<l.length;m++)o(l[m],d[m],u[m]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,d,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=d[_]*u[_];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Zy(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==tr&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const N=D===qa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==mr&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==wr&&!N)}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:C,maxSamples:P}}function Ky(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new qr,a=new wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const h=f.length!==0||u||i!==0||r;return r=u,i=f.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,h){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!r||m===null||m.length===0||s&&!g)s?d(null):l();else{const w=s?0:i,y=w*4;let v=p.clippingState||null;c.value=v,v=d(m,u,y,h);for(let C=0;C!==y;++C)v[C]=t[C];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,h,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=h+_*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=h;y!==_;++y,v+=4)o.copy(f[y]).applyMatrix4(w,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Jy(n){let e=new WeakMap;function t(o,a){return a===eu?o.mapping=Mo:a===tu&&(o.mapping=wo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===eu||a===tu)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new v_(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const lo=4,yf=[.125,.215,.35,.446,.526,.582],ys=20,vd=new lv,Sf=new Ut;let xd=null,yd=0,Sd=0,bd=!1;const ms=(1+Math.sqrt(5))/2,io=1/ms,bf=[new b(-ms,io,0),new b(ms,io,0),new b(-io,0,ms),new b(io,0,ms),new b(0,ms,-io),new b(0,ms,io),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],Qy=new b;class Mf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Qy}=s;xd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xd,yd,Sd),this._renderer.xr.enabled=bd,e.scissorTest=!1,Dc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mo||e.mapping===wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fr,minFilter:fr,generateMipmaps:!1,type:qa,format:tr,colorSpace:Eo,depthBuffer:!1},r=wf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eS(s)),this._blurMaterial=tS(s,e,t)}return r}_compileMaterial(e){const t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,vd)}_sceneToCubeUV(e,t,i,r,s){const c=new Di(90,1,t,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(Sf),f.toneMapping=Kr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const _=new yn({name:"PMREM.Background",side:Si,depthWrite:!1,depthTest:!1}),g=new Ee(new Tn,_);let p=!1;const w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,p=!0):(_.color.copy(Sf),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[y],s.y,s.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[y]));const C=this._cubeSize;Dc(r,v*C,y>2?C:0,C,C),f.setRenderTarget(r),p&&f.render(g,c),f.render(e,c)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=u,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Mo||e.mapping===wo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ef());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Dc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,vd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=bf[(r-s-1)%bf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Ee(this._lodPlanes[r],l),u=l.uniforms,h=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ys-1),_=s/m,g=isFinite(s)?1+Math.floor(d*_):ys;g>ys&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ys}`);const p=[];let w=0;for(let D=0;D<ys;++D){const N=D/_,M=Math.exp(-N*N/2);p.push(M),D===0?w+=M:D<g&&(w+=2*M)}for(let D=0;D<p.length;D++)p[D]=p[D]/w;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-i;const v=this._sizeLods[r],C=3*v*(r>y-lo?r-y+lo:0),P=4*(this._cubeSize-v);Dc(t,C,P,3*v,2*v),c.setRenderTarget(t),c.render(f,vd)}}function eS(n){const e=[],t=[],i=[];let r=n;const s=n-lo+1+yf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-lo?c=yf[o-n+lo-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),d=-l,f=1+l,u=[d,d,f,d,f,f,d,d,f,f,d,f],h=6,m=6,_=3,g=2,p=1,w=new Float32Array(_*m*h),y=new Float32Array(g*m*h),v=new Float32Array(p*m*h);for(let P=0;P<h;P++){const D=P%3*2/3-1,N=P>2?0:-1,M=[D,N,0,D+2/3,N,0,D+2/3,N+1,0,D,N,0,D+2/3,N+1,0,D,N+1,0];w.set(M,_*m*P),y.set(u,g*m*P);const S=[P,P,P,P,P,P];v.set(S,p*m*P)}const C=new kt;C.setAttribute("position",new Ui(w,_)),C.setAttribute("uv",new Ui(y,g)),C.setAttribute("faceIndex",new Ui(v,p)),e.push(C),r>lo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function wf(n,e,t){const i=new Ls(n,e,t);return i.texture.mapping=Al,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function tS(n,e,t){const i=new Float32Array(ys),r=new b(0,1,0);return new Pr({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function Ef(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function Tf(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function dh(){return`

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
	`}function nS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===eu||c===tu,d=c===Mo||c===wo;if(l||d){let f=e.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Mf(n)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return l&&h&&h.height>0||d&&h&&r(h)?(t===null&&(t=new Mf(n)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function iS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&mo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function rS(n,e,t,i){const r={},s=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete r[u.id];const h=s.get(u);h&&(e.remove(h),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function c(f){const u=f.attributes;for(const h in u)e.update(u[h],n.ARRAY_BUFFER)}function l(f){const u=[],h=f.index,m=f.attributes.position;let _=0;if(h!==null){const w=h.array;_=h.version;for(let y=0,v=w.length;y<v;y+=3){const C=w[y+0],P=w[y+1],D=w[y+2];u.push(C,P,P,D,D,C)}}else if(m!==void 0){const w=m.array;_=m.version;for(let y=0,v=w.length/3-1;y<v;y+=3){const C=y+0,P=y+1,D=y+2;u.push(C,P,P,D,D,C)}}else return;const g=new($p(u)?Kp:Zp)(u,1);g.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,g)}function d(f){const u=s.get(f);if(u){const h=f.index;h!==null&&u.version<h.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:d}}function sS(n,e,t){let i;function r(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function c(u,h){n.drawElements(i,h,s,u*o),t.update(h,i,1)}function l(u,h,m){m!==0&&(n.drawElementsInstanced(i,h,s,u*o,m),t.update(h,i,m))}function d(u,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,u,0,m);let g=0;for(let p=0;p<m;p++)g+=h[p];t.update(g,i,1)}function f(u,h,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)l(u[p]/o,h[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,s,u,0,_,0,m);let p=0;for(let w=0;w<m;w++)p+=h[w]*_[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function oS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function aS(n,e,t){const i=new WeakMap,r=new Ft;function s(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let M=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();const h=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;h===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let v=a.attributes.position.count*y,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const P=new Float32Array(v*C*4*f),D=new Yp(P,v,C,f);D.type=wr,D.needsUpdate=!0;const N=y*4;for(let S=0;S<f;S++){const I=g[S],F=p[S],V=w[S],G=v*C*4*S;for(let J=0;J<I.count;J++){const Y=J*N;h===!0&&(r.fromBufferAttribute(I,J),P[G+Y+0]=r.x,P[G+Y+1]=r.y,P[G+Y+2]=r.z,P[G+Y+3]=0),m===!0&&(r.fromBufferAttribute(F,J),P[G+Y+4]=r.x,P[G+Y+5]=r.y,P[G+Y+6]=r.z,P[G+Y+7]=0),_===!0&&(r.fromBufferAttribute(V,J),P[G+Y+8]=r.x,P[G+Y+9]=r.y,P[G+Y+10]=r.z,P[G+Y+11]=V.itemSize===4?r.w:1)}}u={count:f,texture:D,size:new ze(v,C)},i.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let _=0;_<l.length;_++)h+=l[_];const m=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function cS(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==l&&(u.update(),r.set(u,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const gm=new bi,Af=new im(1,1),_m=new Yp,vm=new t_,xm=new em,Rf=[],Cf=[],Pf=new Float32Array(16),Df=new Float32Array(9),Lf=new Float32Array(4);function Fo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Rf[r];if(s===void 0&&(s=new Float32Array(r),Rf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Un(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Cl(n,e){let t=Cf[e];t===void 0&&(t=new Int32Array(e),Cf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;n.uniform2fv(this.addr,e),kn(t,e)}}function uS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Un(t,e))return;n.uniform3fv(this.addr,e),kn(t,e)}}function hS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;n.uniform4fv(this.addr,e),kn(t,e)}}function fS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Un(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kn(t,e)}else{if(Un(t,i))return;Lf.set(i),n.uniformMatrix2fv(this.addr,!1,Lf),kn(t,i)}}function pS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Un(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kn(t,e)}else{if(Un(t,i))return;Df.set(i),n.uniformMatrix3fv(this.addr,!1,Df),kn(t,i)}}function mS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Un(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kn(t,e)}else{if(Un(t,i))return;Pf.set(i),n.uniformMatrix4fv(this.addr,!1,Pf),kn(t,i)}}function gS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;n.uniform2iv(this.addr,e),kn(t,e)}}function vS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Un(t,e))return;n.uniform3iv(this.addr,e),kn(t,e)}}function xS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;n.uniform4iv(this.addr,e),kn(t,e)}}function yS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function SS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Un(t,e))return;n.uniform2uiv(this.addr,e),kn(t,e)}}function bS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Un(t,e))return;n.uniform3uiv(this.addr,e),kn(t,e)}}function MS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Un(t,e))return;n.uniform4uiv(this.addr,e),kn(t,e)}}function wS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Af.compareFunction=qp,s=Af):s=gm,t.setTexture2D(e||s,r)}function ES(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vm,r)}function TS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||xm,r)}function AS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||_m,r)}function RS(n){switch(n){case 5126:return lS;case 35664:return dS;case 35665:return uS;case 35666:return hS;case 35674:return fS;case 35675:return pS;case 35676:return mS;case 5124:case 35670:return gS;case 35667:case 35671:return _S;case 35668:case 35672:return vS;case 35669:case 35673:return xS;case 5125:return yS;case 36294:return SS;case 36295:return bS;case 36296:return MS;case 35678:case 36198:case 36298:case 36306:case 35682:return wS;case 35679:case 36299:case 36307:return ES;case 35680:case 36300:case 36308:case 36293:return TS;case 36289:case 36303:case 36311:case 36292:return AS}}function CS(n,e){n.uniform1fv(this.addr,e)}function PS(n,e){const t=Fo(e,this.size,2);n.uniform2fv(this.addr,t)}function DS(n,e){const t=Fo(e,this.size,3);n.uniform3fv(this.addr,t)}function LS(n,e){const t=Fo(e,this.size,4);n.uniform4fv(this.addr,t)}function IS(n,e){const t=Fo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function NS(n,e){const t=Fo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function US(n,e){const t=Fo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function kS(n,e){n.uniform1iv(this.addr,e)}function FS(n,e){n.uniform2iv(this.addr,e)}function OS(n,e){n.uniform3iv(this.addr,e)}function zS(n,e){n.uniform4iv(this.addr,e)}function BS(n,e){n.uniform1uiv(this.addr,e)}function HS(n,e){n.uniform2uiv(this.addr,e)}function VS(n,e){n.uniform3uiv(this.addr,e)}function GS(n,e){n.uniform4uiv(this.addr,e)}function WS(n,e,t){const i=this.cache,r=e.length,s=Cl(t,r);Un(i,s)||(n.uniform1iv(this.addr,s),kn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||gm,s[o])}function XS(n,e,t){const i=this.cache,r=e.length,s=Cl(t,r);Un(i,s)||(n.uniform1iv(this.addr,s),kn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vm,s[o])}function qS(n,e,t){const i=this.cache,r=e.length,s=Cl(t,r);Un(i,s)||(n.uniform1iv(this.addr,s),kn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||xm,s[o])}function $S(n,e,t){const i=this.cache,r=e.length,s=Cl(t,r);Un(i,s)||(n.uniform1iv(this.addr,s),kn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||_m,s[o])}function YS(n){switch(n){case 5126:return CS;case 35664:return PS;case 35665:return DS;case 35666:return LS;case 35674:return IS;case 35675:return NS;case 35676:return US;case 5124:case 35670:return kS;case 35667:case 35671:return FS;case 35668:case 35672:return OS;case 35669:case 35673:return zS;case 5125:return BS;case 36294:return HS;case 36295:return VS;case 36296:return GS;case 35678:case 36198:case 36298:case 36306:case 35682:return WS;case 35679:case 36299:case 36307:return XS;case 35680:case 36300:case 36308:case 36293:return qS;case 36289:case 36303:case 36311:case 36292:return $S}}class jS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=RS(t.type)}}class ZS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YS(t.type)}}class KS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Md=/(\w+)(\])?(\[|\.)?/g;function If(n,e){n.seq.push(e),n.map[e.id]=e}function JS(n,e,t){const i=n.name,r=i.length;for(Md.lastIndex=0;;){const s=Md.exec(i),o=Md.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){If(t,l===void 0?new jS(a,n,e):new ZS(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new KS(a),If(t,f)),t=f}}}class Zc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);JS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Nf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const QS=37297;let eb=0;function tb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Uf=new wt;function nb(n){Bt._getMatrix(Uf,Bt.workingColorSpace,n);const e=`mat3( ${Uf.elements.map(t=>t.toFixed(4))} )`;switch(Bt.getTransfer(n)){case rl:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function kf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+tb(n.getShaderSource(e),a)}else return s}function ib(n,e){const t=nb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rb(n,e){let t;switch(e){case f0:t="Linear";break;case p0:t="Reinhard";break;case m0:t="Cineon";break;case g0:t="ACESFilmic";break;case v0:t="AgX";break;case x0:t="Neutral";break;case _0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Lc=new b;function sb(){Bt.getLuminanceCoefficients(Lc);const n=Lc.x.toFixed(4),e=Lc.y.toFixed(4),t=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ob(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function ab(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function aa(n){return n!==""}function Ff(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Of(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nu(n){return n.replace(lb,ub)}const db=new Map;function ub(n,e){let t=At[e];if(t===void 0){const i=db.get(e);if(i!==void 0)t=At[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nu(t)}const hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zf(n){return n.replace(hb,fb)}function fb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function pb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Up?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===qg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===br&&(e="SHADOWMAP_TYPE_VSM"),e}function mb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Mo:case wo:e="ENVMAP_TYPE_CUBE";break;case Al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gb(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===wo&&(e="ENVMAP_MODE_REFRACTION"),e}function _b(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kp:e="ENVMAP_BLENDING_MULTIPLY";break;case u0:e="ENVMAP_BLENDING_MIX";break;case h0:e="ENVMAP_BLENDING_ADD";break}return e}function vb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function xb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=pb(t),l=mb(t),d=gb(t),f=_b(t),u=vb(t),h=ob(t),m=ab(s),_=r.createProgram();let g,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(aa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(aa).join(`
`),p.length>0&&(p+=`
`)):(g=[Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),p=[Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kr?"#define TONE_MAPPING":"",t.toneMapping!==Kr?At.tonemapping_pars_fragment:"",t.toneMapping!==Kr?rb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,ib("linearToOutputTexel",t.outputColorSpace),sb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),o=Nu(o),o=Ff(o,t),o=Of(o,t),a=Nu(a),a=Ff(a,t),a=Of(a,t),o=zf(o),a=zf(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=w+g+o,v=w+p+a,C=Nf(r,r.VERTEX_SHADER,y),P=Nf(r,r.FRAGMENT_SHADER,v);r.attachShader(_,C),r.attachShader(_,P),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(I){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(_)||"",V=r.getShaderInfoLog(C)||"",G=r.getShaderInfoLog(P)||"",J=F.trim(),Y=V.trim(),de=G.trim();let q=!0,oe=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,P);else{const xe=kf(r,C,"vertex"),We=kf(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+J+`
`+xe+`
`+We)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Y===""||de==="")&&(oe=!1);oe&&(I.diagnostics={runnable:q,programLog:J,vertexShader:{log:Y,prefix:g},fragmentShader:{log:de,prefix:p}})}r.deleteShader(C),r.deleteShader(P),N=new Zc(r,_),M=cb(r,_)}let N;this.getUniforms=function(){return N===void 0&&D(this),N};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,QS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=P,this}let yb=0;class Sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new bb(e),t.set(e,i)),i}}class bb{constructor(e){this.id=yb++,this.code=e,this.usedTimes=0}}function Mb(n,e,t,i,r,s,o){const a=new ih,c=new Sb,l=new Set,d=[],f=r.logarithmicDepthBuffer,u=r.vertexTextures;let h=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,S,I,F,V){const G=F.fog,J=V.geometry,Y=M.isMeshStandardMaterial?F.environment:null,de=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),q=de&&de.mapping===Al?de.image.height:null,oe=m[M.type];M.precision!==null&&(h=r.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const xe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,We=xe!==void 0?xe.length:0;let it=0;J.morphAttributes.position!==void 0&&(it=1),J.morphAttributes.normal!==void 0&&(it=2),J.morphAttributes.color!==void 0&&(it=3);let gt,xt,Q,Te;if(oe){const Fe=hr[oe];gt=Fe.vertexShader,xt=Fe.fragmentShader}else gt=M.vertexShader,xt=M.fragmentShader,c.update(M),Q=c.getVertexShaderID(M),Te=c.getFragmentShaderID(M);const se=n.getRenderTarget(),je=n.state.buffers.depth.getReversed(),ne=V.isInstancedMesh===!0,fe=V.isBatchedMesh===!0,ee=!!M.map,te=!!M.matcap,R=!!de,me=!!M.aoMap,ue=!!M.lightMap,He=!!M.bumpMap,pe=!!M.normalMap,Ie=!!M.displacementMap,ae=!!M.emissiveMap,Ae=!!M.metalnessMap,we=!!M.roughnessMap,Ce=M.anisotropy>0,A=M.clearcoat>0,x=M.dispersion>0,O=M.iridescence>0,Z=M.sheen>0,X=M.transmission>0,W=Ce&&!!M.anisotropyMap,ke=A&&!!M.clearcoatMap,_e=A&&!!M.clearcoatNormalMap,$e=A&&!!M.clearcoatRoughnessMap,Ye=O&&!!M.iridescenceMap,be=O&&!!M.iridescenceThicknessMap,Pe=Z&&!!M.sheenColorMap,Ze=Z&&!!M.sheenRoughnessMap,Ke=!!M.specularMap,Re=!!M.specularColorMap,mt=!!M.specularIntensityMap,U=X&&!!M.transmissionMap,ye=X&&!!M.thicknessMap,Se=!!M.gradientMap,Xe=!!M.alphaMap,ge=M.alphaTest>0,re=!!M.alphaHash,qe=!!M.extensions;let ie=Kr;M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ie=n.toneMapping);const Ne={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:gt,fragmentShader:xt,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:Te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:fe,batchingColor:fe&&V._colorsTexture!==null,instancing:ne,instancingColor:ne&&V.instanceColor!==null,instancingMorph:ne&&V.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Eo,alphaToCoverage:!!M.alphaToCoverage,map:ee,matcap:te,envMap:R,envMapMode:R&&de.mapping,envMapCubeUVHeight:q,aoMap:me,lightMap:ue,bumpMap:He,normalMap:pe,displacementMap:u&&Ie,emissiveMap:ae,normalMapObjectSpace:pe&&M.normalMapType===w0,normalMapTangentSpace:pe&&M.normalMapType===M0,metalnessMap:Ae,roughnessMap:we,anisotropy:Ce,anisotropyMap:W,clearcoat:A,clearcoatMap:ke,clearcoatNormalMap:_e,clearcoatRoughnessMap:$e,dispersion:x,iridescence:O,iridescenceMap:Ye,iridescenceThicknessMap:be,sheen:Z,sheenColorMap:Pe,sheenRoughnessMap:Ze,specularMap:Ke,specularColorMap:Re,specularIntensityMap:mt,transmission:X,transmissionMap:U,thicknessMap:ye,gradientMap:Se,opaque:M.transparent===!1&&M.blending===po&&M.alphaToCoverage===!1,alphaMap:Xe,alphaTest:ge,alphaHash:re,combine:M.combine,mapUv:ee&&_(M.map.channel),aoMapUv:me&&_(M.aoMap.channel),lightMapUv:ue&&_(M.lightMap.channel),bumpMapUv:He&&_(M.bumpMap.channel),normalMapUv:pe&&_(M.normalMap.channel),displacementMapUv:Ie&&_(M.displacementMap.channel),emissiveMapUv:ae&&_(M.emissiveMap.channel),metalnessMapUv:Ae&&_(M.metalnessMap.channel),roughnessMapUv:we&&_(M.roughnessMap.channel),anisotropyMapUv:W&&_(M.anisotropyMap.channel),clearcoatMapUv:ke&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:_e&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$e&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:be&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&_(M.sheenRoughnessMap.channel),specularMapUv:Ke&&_(M.specularMap.channel),specularColorMapUv:Re&&_(M.specularColorMap.channel),specularIntensityMapUv:mt&&_(M.specularIntensityMap.channel),transmissionMapUv:U&&_(M.transmissionMap.channel),thicknessMapUv:ye&&_(M.thicknessMap.channel),alphaMapUv:Xe&&_(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(pe||Ce),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!J.attributes.uv&&(ee||Xe),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:je,skinning:V.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:We,morphTextureStride:it,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:ee&&M.map.isVideoTexture===!0&&Bt.getTransfer(M.map.colorSpace)===Zt,decodeVideoTextureEmissive:ae&&M.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(M.emissiveMap.colorSpace)===Zt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fn,flipSided:M.side===Si,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:qe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&M.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(w(S,M),y(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function w(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const S=m[M.type];let I;if(S){const F=hr[S];I=p_.clone(F.uniforms)}else I=M.uniforms;return I}function C(M,S){let I;for(let F=0,V=d.length;F<V;F++){const G=d[F];if(G.cacheKey===S){I=G,++I.usedTimes;break}}return I===void 0&&(I=new xb(n,S,M,s),d.push(I)),I}function P(M){if(--M.usedTimes===0){const S=d.indexOf(M);d[S]=d[d.length-1],d.pop(),M.destroy()}}function D(M){c.remove(M)}function N(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:P,releaseShaderCache:D,programs:d,dispose:N}}function wb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Eb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Hf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,u,h,m,_,g){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:h,groupOrder:m,renderOrder:f.renderOrder,z:_,group:g},n[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=h,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=_,p.group=g),e++,p}function a(f,u,h,m,_,g){const p=o(f,u,h,m,_,g);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(f,u,h,m,_,g){const p=o(f,u,h,m,_,g);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(f,u){t.length>1&&t.sort(f||Eb),i.length>1&&i.sort(u||Hf),r.length>1&&r.sort(u||Hf)}function d(){for(let f=e,u=n.length;f<u;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:d,sort:l}}function Tb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Vf,n.set(i,[o])):r>=s.length?(o=new Vf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ab(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Ut};break;case"SpotLight":t={position:new b,direction:new b,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":t={color:new Ut,position:new b,halfWidth:new b,halfHeight:new b};break}return n[e.id]=t,t}}}function Rb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Cb=0;function Pb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Db(n){const e=new Ab,t=Rb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new b);const r=new b,s=new qt,o=new qt;function a(l){let d=0,f=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,m=0,_=0,g=0,p=0,w=0,y=0,v=0,C=0,P=0,D=0;l.sort(Pb);for(let M=0,S=l.length;M<S;M++){const I=l[M],F=I.color,V=I.intensity,G=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=F.r*V,f+=F.g*V,u+=F.b*V;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],V);D++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const de=I.shadow,q=t.get(I);q.shadowIntensity=de.intensity,q.shadowBias=de.bias,q.shadowNormalBias=de.normalBias,q.shadowRadius=de.radius,q.shadowMapSize=de.mapSize,i.directionalShadow[h]=q,i.directionalShadowMap[h]=J,i.directionalShadowMatrix[h]=I.shadow.matrix,w++}i.directional[h]=Y,h++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(F).multiplyScalar(V),Y.distance=G,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[_]=Y;const de=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,de.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[_]=de.matrix,I.castShadow){const q=t.get(I);q.shadowIntensity=de.intensity,q.shadowBias=de.bias,q.shadowNormalBias=de.normalBias,q.shadowRadius=de.radius,q.shadowMapSize=de.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=J,v++}_++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(F).multiplyScalar(V),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=Y,g++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const de=I.shadow,q=t.get(I);q.shadowIntensity=de.intensity,q.shadowBias=de.bias,q.shadowNormalBias=de.normalBias,q.shadowRadius=de.radius,q.shadowMapSize=de.mapSize,q.shadowCameraNear=de.camera.near,q.shadowCameraFar=de.camera.far,i.pointShadow[m]=q,i.pointShadowMap[m]=J,i.pointShadowMatrix[m]=I.shadow.matrix,y++}i.point[m]=Y,m++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(V),Y.groundColor.copy(I.groundColor).multiplyScalar(V),i.hemi[p]=Y,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Be.LTC_FLOAT_1,i.rectAreaLTC2=Be.LTC_FLOAT_2):(i.rectAreaLTC1=Be.LTC_HALF_1,i.rectAreaLTC2=Be.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const N=i.hash;(N.directionalLength!==h||N.pointLength!==m||N.spotLength!==_||N.rectAreaLength!==g||N.hemiLength!==p||N.numDirectionalShadows!==w||N.numPointShadows!==y||N.numSpotShadows!==v||N.numSpotMaps!==C||N.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,N.directionalLength=h,N.pointLength=m,N.spotLength=_,N.rectAreaLength=g,N.hemiLength=p,N.numDirectionalShadows=w,N.numPointShadows=y,N.numSpotShadows=v,N.numSpotMaps=C,N.numLightProbes=D,i.version=Cb++)}function c(l,d){let f=0,u=0,h=0,m=0,_=0;const g=d.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const y=l[p];if(y.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),f++}else if(y.isSpotLight){const v=i.spot[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),h++}else if(y.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const v=i.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:i}}function Gf(n){const e=new Db(n),t=[],i=[];function r(d){l.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Lb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Gf(n),e.set(r,[a])):s>=o.length?(a=new Gf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Ib=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nb=`uniform sampler2D shadow_pass;
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
}`;function Ub(n,e,t){let i=new rh;const r=new ze,s=new ze,o=new Ft,a=new iv({depthPacking:b0}),c=new rv,l={},d=t.maxTextureSize,f={[Cr]:Si,[Si]:Cr,[fn]:fn},u=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Ib,fragmentShader:Nb}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const m=new kt;m.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ee(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Up;let p=this.type;this.render=function(P,D,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Zr),F.buffers.depth.getReversed()?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=p!==br&&this.type===br,G=p===br&&this.type!==br;for(let J=0,Y=P.length;J<Y;J++){const de=P[J],q=de.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const oe=q.getFrameExtents();if(r.multiply(oe),s.copy(q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/oe.x),r.x=s.x*oe.x,q.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/oe.y),r.y=s.y*oe.y,q.mapSize.y=s.y)),q.map===null||V===!0||G===!0){const We=this.type!==br?{minFilter:ir,magFilter:ir}:{};q.map!==null&&q.map.dispose(),q.map=new Ls(r.x,r.y,We),q.map.texture.name=de.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const xe=q.getViewportCount();for(let We=0;We<xe;We++){const it=q.getViewport(We);o.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),F.viewport(o),q.updateMatrices(de,We),i=q.getFrustum(),v(D,N,q.camera,de,this.type)}q.isPointLightShadow!==!0&&this.type===br&&w(q,N),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(M,S,I)};function w(P,D){const N=e.update(_);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ls(r.x,r.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(D,null,N,u,_,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(D,null,N,h,_,null)}function y(P,D,N,M){let S=null;const I=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)S=I;else if(S=N.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const F=S.uuid,V=D.uuid;let G=l[F];G===void 0&&(G={},l[F]=G);let J=G[V];J===void 0&&(J=S.clone(),G[V]=J,D.addEventListener("dispose",C)),S=J}if(S.visible=D.visible,S.wireframe=D.wireframe,M===br?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:f[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=n.properties.get(S);F.light=N}return S}function v(P,D,N,M,S){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===br)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const V=e.update(P),G=P.material;if(Array.isArray(G)){const J=V.groups;for(let Y=0,de=J.length;Y<de;Y++){const q=J[Y],oe=G[q.materialIndex];if(oe&&oe.visible){const xe=y(P,oe,M,S);P.onBeforeShadow(n,P,D,N,V,xe,q),n.renderBufferDirect(N,null,V,xe,P,q),P.onAfterShadow(n,P,D,N,V,xe,q)}}}else if(G.visible){const J=y(P,G,M,S);P.onBeforeShadow(n,P,D,N,V,J,null),n.renderBufferDirect(N,null,V,J,P,null),P.onAfterShadow(n,P,D,N,V,J,null)}}const F=P.children;for(let V=0,G=F.length;V<G;V++)v(F[V],D,N,M,S)}function C(P){P.target.removeEventListener("dispose",C);for(const N in l){const M=l[N],S=P.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const kb={[$d]:Yd,[jd]:Jd,[Zd]:Qd,[bo]:Kd,[Yd]:$d,[Jd]:jd,[Qd]:Zd,[Kd]:bo};function Fb(n,e){function t(){let U=!1;const ye=new Ft;let Se=null;const Xe=new Ft(0,0,0,0);return{setMask:function(ge){Se!==ge&&!U&&(n.colorMask(ge,ge,ge,ge),Se=ge)},setLocked:function(ge){U=ge},setClear:function(ge,re,qe,ie,Ne){Ne===!0&&(ge*=ie,re*=ie,qe*=ie),ye.set(ge,re,qe,ie),Xe.equals(ye)===!1&&(n.clearColor(ge,re,qe,ie),Xe.copy(ye))},reset:function(){U=!1,Se=null,Xe.set(-1,0,0,0)}}}function i(){let U=!1,ye=!1,Se=null,Xe=null,ge=null;return{setReversed:function(re){if(ye!==re){const qe=e.get("EXT_clip_control");re?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),ye=re;const ie=ge;ge=null,this.setClear(ie)}},getReversed:function(){return ye},setTest:function(re){re?se(n.DEPTH_TEST):je(n.DEPTH_TEST)},setMask:function(re){Se!==re&&!U&&(n.depthMask(re),Se=re)},setFunc:function(re){if(ye&&(re=kb[re]),Xe!==re){switch(re){case $d:n.depthFunc(n.NEVER);break;case Yd:n.depthFunc(n.ALWAYS);break;case jd:n.depthFunc(n.LESS);break;case bo:n.depthFunc(n.LEQUAL);break;case Zd:n.depthFunc(n.EQUAL);break;case Kd:n.depthFunc(n.GEQUAL);break;case Jd:n.depthFunc(n.GREATER);break;case Qd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Xe=re}},setLocked:function(re){U=re},setClear:function(re){ge!==re&&(ye&&(re=1-re),n.clearDepth(re),ge=re)},reset:function(){U=!1,Se=null,Xe=null,ge=null,ye=!1}}}function r(){let U=!1,ye=null,Se=null,Xe=null,ge=null,re=null,qe=null,ie=null,Ne=null;return{setTest:function(Fe){U||(Fe?se(n.STENCIL_TEST):je(n.STENCIL_TEST))},setMask:function(Fe){ye!==Fe&&!U&&(n.stencilMask(Fe),ye=Fe)},setFunc:function(Fe,ht,Mt){(Se!==Fe||Xe!==ht||ge!==Mt)&&(n.stencilFunc(Fe,ht,Mt),Se=Fe,Xe=ht,ge=Mt)},setOp:function(Fe,ht,Mt){(re!==Fe||qe!==ht||ie!==Mt)&&(n.stencilOp(Fe,ht,Mt),re=Fe,qe=ht,ie=Mt)},setLocked:function(Fe){U=Fe},setClear:function(Fe){Ne!==Fe&&(n.clearStencil(Fe),Ne=Fe)},reset:function(){U=!1,ye=null,Se=null,Xe=null,ge=null,re=null,qe=null,ie=null,Ne=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let d={},f={},u=new WeakMap,h=[],m=null,_=!1,g=null,p=null,w=null,y=null,v=null,C=null,P=null,D=new Ut(0,0,0),N=0,M=!1,S=null,I=null,F=null,V=null,G=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,de=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=de>=1):q.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=de>=2);let oe=null,xe={};const We=n.getParameter(n.SCISSOR_BOX),it=n.getParameter(n.VIEWPORT),gt=new Ft().fromArray(We),xt=new Ft().fromArray(it);function Q(U,ye,Se,Xe){const ge=new Uint8Array(4),re=n.createTexture();n.bindTexture(U,re),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<Se;qe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,Xe,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(ye+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return re}const Te={};Te[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(bo),He(!1),pe(Ch),se(n.CULL_FACE),me(Zr);function se(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function je(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function ne(U,ye){return f[U]!==ye?(n.bindFramebuffer(U,ye),f[U]=ye,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ye),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function fe(U,ye){let Se=h,Xe=!1;if(U){Se=u.get(ye),Se===void 0&&(Se=[],u.set(ye,Se));const ge=U.textures;if(Se.length!==ge.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let re=0,qe=ge.length;re<qe;re++)Se[re]=n.COLOR_ATTACHMENT0+re;Se.length=ge.length,Xe=!0}}else Se[0]!==n.BACK&&(Se[0]=n.BACK,Xe=!0);Xe&&n.drawBuffers(Se)}function ee(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const te={[vs]:n.FUNC_ADD,[Yg]:n.FUNC_SUBTRACT,[jg]:n.FUNC_REVERSE_SUBTRACT};te[Zg]=n.MIN,te[Kg]=n.MAX;const R={[Jg]:n.ZERO,[Qg]:n.ONE,[e0]:n.SRC_COLOR,[Xd]:n.SRC_ALPHA,[o0]:n.SRC_ALPHA_SATURATE,[r0]:n.DST_COLOR,[n0]:n.DST_ALPHA,[t0]:n.ONE_MINUS_SRC_COLOR,[qd]:n.ONE_MINUS_SRC_ALPHA,[s0]:n.ONE_MINUS_DST_COLOR,[i0]:n.ONE_MINUS_DST_ALPHA,[a0]:n.CONSTANT_COLOR,[c0]:n.ONE_MINUS_CONSTANT_COLOR,[l0]:n.CONSTANT_ALPHA,[d0]:n.ONE_MINUS_CONSTANT_ALPHA};function me(U,ye,Se,Xe,ge,re,qe,ie,Ne,Fe){if(U===Zr){_===!0&&(je(n.BLEND),_=!1);return}if(_===!1&&(se(n.BLEND),_=!0),U!==$g){if(U!==g||Fe!==M){if((p!==vs||v!==vs)&&(n.blendEquation(n.FUNC_ADD),p=vs,v=vs),Fe)switch(U){case po:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wd:n.blendFunc(n.ONE,n.ONE);break;case Ph:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case po:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ph:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,y=null,C=null,P=null,D.set(0,0,0),N=0,g=U,M=Fe}return}ge=ge||ye,re=re||Se,qe=qe||Xe,(ye!==p||ge!==v)&&(n.blendEquationSeparate(te[ye],te[ge]),p=ye,v=ge),(Se!==w||Xe!==y||re!==C||qe!==P)&&(n.blendFuncSeparate(R[Se],R[Xe],R[re],R[qe]),w=Se,y=Xe,C=re,P=qe),(ie.equals(D)===!1||Ne!==N)&&(n.blendColor(ie.r,ie.g,ie.b,Ne),D.copy(ie),N=Ne),g=U,M=!1}function ue(U,ye){U.side===fn?je(n.CULL_FACE):se(n.CULL_FACE);let Se=U.side===Si;ye&&(Se=!Se),He(Se),U.blending===po&&U.transparent===!1?me(Zr):me(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Xe=U.stencilWrite;a.setTest(Xe),Xe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):je(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(U){S!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),S=U)}function pe(U){U!==Wg?(se(n.CULL_FACE),U!==I&&(U===Ch?n.cullFace(n.BACK):U===Xg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):je(n.CULL_FACE),I=U}function Ie(U){U!==F&&(Y&&n.lineWidth(U),F=U)}function ae(U,ye,Se){U?(se(n.POLYGON_OFFSET_FILL),(V!==ye||G!==Se)&&(n.polygonOffset(ye,Se),V=ye,G=Se)):je(n.POLYGON_OFFSET_FILL)}function Ae(U){U?se(n.SCISSOR_TEST):je(n.SCISSOR_TEST)}function we(U){U===void 0&&(U=n.TEXTURE0+J-1),oe!==U&&(n.activeTexture(U),oe=U)}function Ce(U,ye,Se){Se===void 0&&(oe===null?Se=n.TEXTURE0+J-1:Se=oe);let Xe=xe[Se];Xe===void 0&&(Xe={type:void 0,texture:void 0},xe[Se]=Xe),(Xe.type!==U||Xe.texture!==ye)&&(oe!==Se&&(n.activeTexture(Se),oe=Se),n.bindTexture(U,ye||Te[U]),Xe.type=U,Xe.texture=ye)}function A(){const U=xe[oe];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(U){gt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),gt.copy(U))}function Ze(U){xt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),xt.copy(U))}function Ke(U,ye){let Se=l.get(ye);Se===void 0&&(Se=new WeakMap,l.set(ye,Se));let Xe=Se.get(U);Xe===void 0&&(Xe=n.getUniformBlockIndex(ye,U.name),Se.set(U,Xe))}function Re(U,ye){const Xe=l.get(ye).get(U);c.get(ye)!==Xe&&(n.uniformBlockBinding(ye,Xe,U.__bindingPointIndex),c.set(ye,Xe))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},oe=null,xe={},f={},u=new WeakMap,h=[],m=null,_=!1,g=null,p=null,w=null,y=null,v=null,C=null,P=null,D=new Ut(0,0,0),N=0,M=!1,S=null,I=null,F=null,V=null,G=null,gt.set(0,0,n.canvas.width,n.canvas.height),xt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:je,bindFramebuffer:ne,drawBuffers:fe,useProgram:ee,setBlending:me,setMaterial:ue,setFlipSided:He,setCullFace:pe,setLineWidth:Ie,setPolygonOffset:ae,setScissorTest:Ae,activeTexture:we,bindTexture:Ce,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:Ye,texImage3D:be,updateUBOMapping:Ke,uniformBlockBinding:Re,texStorage2D:_e,texStorage3D:$e,texSubImage2D:Z,texSubImage3D:X,compressedTexSubImage2D:W,compressedTexSubImage3D:ke,scissor:Pe,viewport:Ze,reset:mt}}function Ob(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ze,d=new WeakMap;let f;const u=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,x){return h?new OffscreenCanvas(A,x):al("canvas")}function _(A,x,O){let Z=1;const X=Ce(A);if((X.width>O||X.height>O)&&(Z=O/Math.max(X.width,X.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const W=Math.floor(Z*X.width),ke=Math.floor(Z*X.height);f===void 0&&(f=m(W,ke));const _e=x?m(W,ke):f;return _e.width=W,_e.height=ke,_e.getContext("2d").drawImage(A,0,0,W,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+W+"x"+ke+")."),_e}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(A,x,O,Z,X=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=x;if(x===n.RED&&(O===n.FLOAT&&(W=n.R32F),O===n.HALF_FLOAT&&(W=n.R16F),O===n.UNSIGNED_BYTE&&(W=n.R8)),x===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.R8UI),O===n.UNSIGNED_SHORT&&(W=n.R16UI),O===n.UNSIGNED_INT&&(W=n.R32UI),O===n.BYTE&&(W=n.R8I),O===n.SHORT&&(W=n.R16I),O===n.INT&&(W=n.R32I)),x===n.RG&&(O===n.FLOAT&&(W=n.RG32F),O===n.HALF_FLOAT&&(W=n.RG16F),O===n.UNSIGNED_BYTE&&(W=n.RG8)),x===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RG8UI),O===n.UNSIGNED_SHORT&&(W=n.RG16UI),O===n.UNSIGNED_INT&&(W=n.RG32UI),O===n.BYTE&&(W=n.RG8I),O===n.SHORT&&(W=n.RG16I),O===n.INT&&(W=n.RG32I)),x===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGB8UI),O===n.UNSIGNED_SHORT&&(W=n.RGB16UI),O===n.UNSIGNED_INT&&(W=n.RGB32UI),O===n.BYTE&&(W=n.RGB8I),O===n.SHORT&&(W=n.RGB16I),O===n.INT&&(W=n.RGB32I)),x===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),O===n.UNSIGNED_INT&&(W=n.RGBA32UI),O===n.BYTE&&(W=n.RGBA8I),O===n.SHORT&&(W=n.RGBA16I),O===n.INT&&(W=n.RGBA32I)),x===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),x===n.RGBA){const ke=X?rl:Bt.getTransfer(Z);O===n.FLOAT&&(W=n.RGBA32F),O===n.HALF_FLOAT&&(W=n.RGBA16F),O===n.UNSIGNED_BYTE&&(W=ke===Zt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function v(A,x){let O;return A?x===null||x===Ds||x===ba?O=n.DEPTH24_STENCIL8:x===wr?O=n.DEPTH32F_STENCIL8:x===Sa&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ds||x===ba?O=n.DEPTH_COMPONENT24:x===wr?O=n.DEPTH_COMPONENT32F:x===Sa&&(O=n.DEPTH_COMPONENT16),O}function C(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==ir&&A.minFilter!==fr?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function P(A){const x=A.target;x.removeEventListener("dispose",P),N(x),x.isVideoTexture&&d.delete(x)}function D(A){const x=A.target;x.removeEventListener("dispose",D),S(x)}function N(A){const x=i.get(A);if(x.__webglInit===void 0)return;const O=A.source,Z=u.get(O);if(Z){const X=Z[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&M(A),Object.keys(Z).length===0&&u.delete(O)}i.remove(A)}function M(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const O=A.source,Z=u.get(O);delete Z[x.__cacheKey],o.memory.textures--}function S(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let X=0;X<x.__webglFramebuffer[Z].length;X++)n.deleteFramebuffer(x.__webglFramebuffer[Z][X]);else n.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[Z]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=A.textures;for(let Z=0,X=O.length;Z<X;Z++){const W=i.get(O[Z]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(O[Z])}i.remove(A)}let I=0;function F(){I=0}function V(){const A=I;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),I+=1,A}function G(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function J(A,x){const O=i.get(A);if(A.isVideoTexture&&Ae(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(O,A,x);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+x)}function Y(A,x){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Te(O,A,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+x)}function de(A,x){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Te(O,A,x);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+x)}function q(A,x){const O=i.get(A);if(A.version>0&&O.__version!==A.version){se(O,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+x)}const oe={[nu]:n.REPEAT,[bs]:n.CLAMP_TO_EDGE,[iu]:n.MIRRORED_REPEAT},xe={[ir]:n.NEAREST,[y0]:n.NEAREST_MIPMAP_NEAREST,[sc]:n.NEAREST_MIPMAP_LINEAR,[fr]:n.LINEAR,[Gl]:n.LINEAR_MIPMAP_NEAREST,[Ms]:n.LINEAR_MIPMAP_LINEAR},We={[E0]:n.NEVER,[D0]:n.ALWAYS,[T0]:n.LESS,[qp]:n.LEQUAL,[A0]:n.EQUAL,[P0]:n.GEQUAL,[R0]:n.GREATER,[C0]:n.NOTEQUAL};function it(A,x){if(x.type===wr&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===fr||x.magFilter===Gl||x.magFilter===sc||x.magFilter===Ms||x.minFilter===fr||x.minFilter===Gl||x.minFilter===sc||x.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,oe[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,oe[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,oe[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,xe[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,xe[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,We[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ir||x.minFilter!==sc&&x.minFilter!==Ms||x.type===wr&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function gt(A,x){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",P));const Z=x.source;let X=u.get(Z);X===void 0&&(X={},u.set(Z,X));const W=G(x);if(W!==A.__cacheKey){X[W]===void 0&&(X[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),X[W].usedTimes++;const ke=X[A.__cacheKey];ke!==void 0&&(X[A.__cacheKey].usedTimes--,ke.usedTimes===0&&M(x)),A.__cacheKey=W,A.__webglTexture=X[W].texture}return O}function xt(A,x,O){return Math.floor(Math.floor(A/O)/x)}function Q(A,x,O,Z){const W=A.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,O,Z,x.data);else{W.sort((be,Pe)=>be.start-Pe.start);let ke=0;for(let be=1;be<W.length;be++){const Pe=W[ke],Ze=W[be],Ke=Pe.start+Pe.count,Re=xt(Ze.start,x.width,4),mt=xt(Pe.start,x.width,4);Ze.start<=Ke+1&&Re===mt&&xt(Ze.start+Ze.count-1,x.width,4)===Re?Pe.count=Math.max(Pe.count,Ze.start+Ze.count-Pe.start):(++ke,W[ke]=Ze)}W.length=ke+1;const _e=n.getParameter(n.UNPACK_ROW_LENGTH),$e=n.getParameter(n.UNPACK_SKIP_PIXELS),Ye=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let be=0,Pe=W.length;be<Pe;be++){const Ze=W[be],Ke=Math.floor(Ze.start/4),Re=Math.ceil(Ze.count/4),mt=Ke%x.width,U=Math.floor(Ke/x.width),ye=Re,Se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,mt),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,mt,U,ye,Se,O,Z,x.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,_e),n.pixelStorei(n.UNPACK_SKIP_PIXELS,$e),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ye)}}function Te(A,x,O){let Z=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=n.TEXTURE_3D);const X=gt(A,x),W=x.source;t.bindTexture(Z,A.__webglTexture,n.TEXTURE0+O);const ke=i.get(W);if(W.version!==ke.__version||X===!0){t.activeTexture(n.TEXTURE0+O);const _e=Bt.getPrimaries(Bt.workingColorSpace),$e=x.colorSpace===Yr?null:Bt.getPrimaries(x.colorSpace),Ye=x.colorSpace===Yr||_e===$e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let be=_(x.image,!1,r.maxTextureSize);be=we(x,be);const Pe=s.convert(x.format,x.colorSpace),Ze=s.convert(x.type);let Ke=y(x.internalFormat,Pe,Ze,x.colorSpace,x.isVideoTexture);it(Z,x);let Re;const mt=x.mipmaps,U=x.isVideoTexture!==!0,ye=ke.__version===void 0||X===!0,Se=W.dataReady,Xe=C(x,be);if(x.isDepthTexture)Ke=v(x.format===wa,x.type),ye&&(U?t.texStorage2D(n.TEXTURE_2D,1,Ke,be.width,be.height):t.texImage2D(n.TEXTURE_2D,0,Ke,be.width,be.height,0,Pe,Ze,null));else if(x.isDataTexture)if(mt.length>0){U&&ye&&t.texStorage2D(n.TEXTURE_2D,Xe,Ke,mt[0].width,mt[0].height);for(let ge=0,re=mt.length;ge<re;ge++)Re=mt[ge],U?Se&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Re.width,Re.height,Pe,Ze,Re.data):t.texImage2D(n.TEXTURE_2D,ge,Ke,Re.width,Re.height,0,Pe,Ze,Re.data);x.generateMipmaps=!1}else U?(ye&&t.texStorage2D(n.TEXTURE_2D,Xe,Ke,be.width,be.height),Se&&Q(x,be,Pe,Ze)):t.texImage2D(n.TEXTURE_2D,0,Ke,be.width,be.height,0,Pe,Ze,be.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,Ke,mt[0].width,mt[0].height,be.depth);for(let ge=0,re=mt.length;ge<re;ge++)if(Re=mt[ge],x.format!==tr)if(Pe!==null)if(U){if(Se)if(x.layerUpdates.size>0){const qe=xf(Re.width,Re.height,x.format,x.type);for(const ie of x.layerUpdates){const Ne=Re.data.subarray(ie*qe/Re.data.BYTES_PER_ELEMENT,(ie+1)*qe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,ie,Re.width,Re.height,1,Pe,Ne)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,be.depth,Pe,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Ke,Re.width,Re.height,be.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?Se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,be.depth,Pe,Ze,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Ke,Re.width,Re.height,be.depth,0,Pe,Ze,Re.data)}else{U&&ye&&t.texStorage2D(n.TEXTURE_2D,Xe,Ke,mt[0].width,mt[0].height);for(let ge=0,re=mt.length;ge<re;ge++)Re=mt[ge],x.format!==tr?Pe!==null?U?Se&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,Re.width,Re.height,Pe,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Ke,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?Se&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Re.width,Re.height,Pe,Ze,Re.data):t.texImage2D(n.TEXTURE_2D,ge,Ke,Re.width,Re.height,0,Pe,Ze,Re.data)}else if(x.isDataArrayTexture)if(U){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Xe,Ke,be.width,be.height,be.depth),Se)if(x.layerUpdates.size>0){const ge=xf(be.width,be.height,x.format,x.type);for(const re of x.layerUpdates){const qe=be.data.subarray(re*ge/be.data.BYTES_PER_ELEMENT,(re+1)*ge/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,be.width,be.height,1,Pe,Ze,qe)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Pe,Ze,be.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ke,be.width,be.height,be.depth,0,Pe,Ze,be.data);else if(x.isData3DTexture)U?(ye&&t.texStorage3D(n.TEXTURE_3D,Xe,Ke,be.width,be.height,be.depth),Se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Pe,Ze,be.data)):t.texImage3D(n.TEXTURE_3D,0,Ke,be.width,be.height,be.depth,0,Pe,Ze,be.data);else if(x.isFramebufferTexture){if(ye)if(U)t.texStorage2D(n.TEXTURE_2D,Xe,Ke,be.width,be.height);else{let ge=be.width,re=be.height;for(let qe=0;qe<Xe;qe++)t.texImage2D(n.TEXTURE_2D,qe,Ke,ge,re,0,Pe,Ze,null),ge>>=1,re>>=1}}else if(mt.length>0){if(U&&ye){const ge=Ce(mt[0]);t.texStorage2D(n.TEXTURE_2D,Xe,Ke,ge.width,ge.height)}for(let ge=0,re=mt.length;ge<re;ge++)Re=mt[ge],U?Se&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Pe,Ze,Re):t.texImage2D(n.TEXTURE_2D,ge,Ke,Pe,Ze,Re);x.generateMipmaps=!1}else if(U){if(ye){const ge=Ce(be);t.texStorage2D(n.TEXTURE_2D,Xe,Ke,ge.width,ge.height)}Se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,Ze,be)}else t.texImage2D(n.TEXTURE_2D,0,Ke,Pe,Ze,be);g(x)&&p(Z),ke.__version=W.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function se(A,x,O){if(x.image.length!==6)return;const Z=gt(A,x),X=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+O);const W=i.get(X);if(X.version!==W.__version||Z===!0){t.activeTexture(n.TEXTURE0+O);const ke=Bt.getPrimaries(Bt.workingColorSpace),_e=x.colorSpace===Yr?null:Bt.getPrimaries(x.colorSpace),$e=x.colorSpace===Yr||ke===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const Ye=x.isCompressedTexture||x.image[0].isCompressedTexture,be=x.image[0]&&x.image[0].isDataTexture,Pe=[];for(let re=0;re<6;re++)!Ye&&!be?Pe[re]=_(x.image[re],!0,r.maxCubemapSize):Pe[re]=be?x.image[re].image:x.image[re],Pe[re]=we(x,Pe[re]);const Ze=Pe[0],Ke=s.convert(x.format,x.colorSpace),Re=s.convert(x.type),mt=y(x.internalFormat,Ke,Re,x.colorSpace),U=x.isVideoTexture!==!0,ye=W.__version===void 0||Z===!0,Se=X.dataReady;let Xe=C(x,Ze);it(n.TEXTURE_CUBE_MAP,x);let ge;if(Ye){U&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Xe,mt,Ze.width,Ze.height);for(let re=0;re<6;re++){ge=Pe[re].mipmaps;for(let qe=0;qe<ge.length;qe++){const ie=ge[qe];x.format!==tr?Ke!==null?U?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,qe,0,0,ie.width,ie.height,Ke,ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,qe,mt,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,qe,0,0,ie.width,ie.height,Ke,Re,ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,qe,mt,ie.width,ie.height,0,Ke,Re,ie.data)}}}else{if(ge=x.mipmaps,U&&ye){ge.length>0&&Xe++;const re=Ce(Pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Xe,mt,re.width,re.height)}for(let re=0;re<6;re++)if(be){U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Pe[re].width,Pe[re].height,Ke,Re,Pe[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,mt,Pe[re].width,Pe[re].height,0,Ke,Re,Pe[re].data);for(let qe=0;qe<ge.length;qe++){const Ne=ge[qe].image[re].image;U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,qe+1,0,0,Ne.width,Ne.height,Ke,Re,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,qe+1,mt,Ne.width,Ne.height,0,Ke,Re,Ne.data)}}else{U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ke,Re,Pe[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,mt,Ke,Re,Pe[re]);for(let qe=0;qe<ge.length;qe++){const ie=ge[qe];U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,qe+1,0,0,Ke,Re,ie.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,qe+1,mt,Ke,Re,ie.image[re])}}}g(x)&&p(n.TEXTURE_CUBE_MAP),W.__version=X.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function je(A,x,O,Z,X,W){const ke=s.convert(O.format,O.colorSpace),_e=s.convert(O.type),$e=y(O.internalFormat,ke,_e,O.colorSpace),Ye=i.get(x),be=i.get(O);if(be.__renderTarget=x,!Ye.__hasExternalTextures){const Pe=Math.max(1,x.width>>W),Ze=Math.max(1,x.height>>W);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,W,$e,Pe,Ze,x.depth,0,ke,_e,null):t.texImage2D(X,W,$e,Pe,Ze,0,ke,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ae(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,X,be.__webglTexture,0,Ie(x)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,X,be.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(A,x,O){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){const Z=x.depthTexture,X=Z&&Z.isDepthTexture?Z.type:null,W=v(x.stencilBuffer,X),ke=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=Ie(x);ae(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_e,W,x.width,x.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,W,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,W,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ke,n.RENDERBUFFER,A)}else{const Z=x.textures;for(let X=0;X<Z.length;X++){const W=Z[X],ke=s.convert(W.format,W.colorSpace),_e=s.convert(W.type),$e=y(W.internalFormat,ke,_e,W.colorSpace),Ye=Ie(x);O&&ae(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,$e,x.width,x.height):ae(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,$e,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,$e,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);const X=Z.__webglTexture,W=Ie(x);if(x.depthTexture.format===Ma)ae(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(x.depthTexture.format===wa)ae(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function ee(A){const x=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const X=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",X)};Z.addEventListener("dispose",X),x.__depthDisposeCallback=X}x.__boundDepthTexture=Z}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const Z=A.texture.mipmaps;Z&&Z.length>0?fe(x.__webglFramebuffer[0],A):fe(x.__webglFramebuffer,A)}else if(O){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=n.createRenderbuffer(),ne(x.__webglDepthbuffer[Z],A,!1);else{const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,W)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ne(x.__webglDepthbuffer,A,!1);else{const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function te(A,x,O){const Z=i.get(A);x!==void 0&&je(Z.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ee(A)}function R(A){const x=A.texture,O=i.get(A),Z=i.get(x);A.addEventListener("dispose",D);const X=A.textures,W=A.isWebGLCubeRenderTarget===!0,ke=X.length>1;if(ke||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=x.version,o.memory.textures++),W){O.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[_e]=[];for(let $e=0;$e<x.mipmaps.length;$e++)O.__webglFramebuffer[_e][$e]=n.createFramebuffer()}else O.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let _e=0;_e<x.mipmaps.length;_e++)O.__webglFramebuffer[_e]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ke)for(let _e=0,$e=X.length;_e<$e;_e++){const Ye=i.get(X[_e]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&ae(A)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let _e=0;_e<X.length;_e++){const $e=X[_e];O.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[_e]);const Ye=s.convert($e.format,$e.colorSpace),be=s.convert($e.type),Pe=y($e.internalFormat,Ye,be,$e.colorSpace,A.isXRRenderTarget===!0),Ze=Ie(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,Pe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,O.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),it(n.TEXTURE_CUBE_MAP,x);for(let _e=0;_e<6;_e++)if(x.mipmaps&&x.mipmaps.length>0)for(let $e=0;$e<x.mipmaps.length;$e++)je(O.__webglFramebuffer[_e][$e],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e);else je(O.__webglFramebuffer[_e],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);g(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let _e=0,$e=X.length;_e<$e;_e++){const Ye=X[_e],be=i.get(Ye);let Pe=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Pe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Pe,be.__webglTexture),it(Pe,Ye),je(O.__webglFramebuffer,A,Ye,n.COLOR_ATTACHMENT0+_e,Pe,0),g(Ye)&&p(Pe)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_e=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,Z.__webglTexture),it(_e,x),x.mipmaps&&x.mipmaps.length>0)for(let $e=0;$e<x.mipmaps.length;$e++)je(O.__webglFramebuffer[$e],A,x,n.COLOR_ATTACHMENT0,_e,$e);else je(O.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,_e,0);g(x)&&p(_e),t.unbindTexture()}A.depthBuffer&&ee(A)}function me(A){const x=A.textures;for(let O=0,Z=x.length;O<Z;O++){const X=x[O];if(g(X)){const W=w(A),ke=i.get(X).__webglTexture;t.bindTexture(W,ke),p(W),t.unbindTexture()}}}const ue=[],He=[];function pe(A){if(A.samples>0){if(ae(A)===!1){const x=A.textures,O=A.width,Z=A.height;let X=n.COLOR_BUFFER_BIT;const W=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ke=i.get(A),_e=x.length>1;if(_e)for(let Ye=0;Ye<x.length;Ye++)t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const $e=A.texture.mipmaps;$e&&$e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ye=0;Ye<x.length;Ye++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ke.__webglColorRenderbuffer[Ye]);const be=i.get(x[Ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,be,0)}n.blitFramebuffer(0,0,O,Z,0,0,O,Z,X,n.NEAREST),c===!0&&(ue.length=0,He.length=0,ue.push(n.COLOR_ATTACHMENT0+Ye),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ue.push(W),He.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let Ye=0;Ye<x.length;Ye++){t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.RENDERBUFFER,ke.__webglColorRenderbuffer[Ye]);const be=i.get(x[Ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.TEXTURE_2D,be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Ie(A){return Math.min(r.maxSamples,A.samples)}function ae(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ae(A){const x=o.render.frame;d.get(A)!==x&&(d.set(A,x),A.update())}function we(A,x){const O=A.colorSpace,Z=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Eo&&O!==Yr&&(Bt.getTransfer(O)===Zt?(Z!==tr||X!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function Ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=J,this.setTexture2DArray=Y,this.setTexture3D=de,this.setTextureCube=q,this.rebindTextures=te,this.setupRenderTarget=R,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=je,this.useMultisampledRTT=ae}function zb(n,e){function t(i,r=Yr){let s;const o=Bt.getTransfer(r);if(i===mr)return n.UNSIGNED_BYTE;if(i===Zu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ku)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Op)return n.BYTE;if(i===zp)return n.SHORT;if(i===Sa)return n.UNSIGNED_SHORT;if(i===ju)return n.INT;if(i===Ds)return n.UNSIGNED_INT;if(i===wr)return n.FLOAT;if(i===qa)return n.HALF_FLOAT;if(i===Hp)return n.ALPHA;if(i===Vp)return n.RGB;if(i===tr)return n.RGBA;if(i===Ma)return n.DEPTH_COMPONENT;if(i===wa)return n.DEPTH_STENCIL;if(i===Gp)return n.RED;if(i===Ju)return n.RED_INTEGER;if(i===Wp)return n.RG;if(i===Qu)return n.RG_INTEGER;if(i===eh)return n.RGBA_INTEGER;if(i===Xc||i===qc||i===$c||i===Yc)if(o===Zt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Xc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Xc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$c)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ru||i===su||i===ou||i===au)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ru)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===su)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ou)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===au)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cu||i===lu||i===du)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===cu||i===lu)return o===Zt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===du)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===uu||i===hu||i===fu||i===pu||i===mu||i===gu||i===_u||i===vu||i===xu||i===yu||i===Su||i===bu||i===Mu||i===wu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===uu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_u)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Su)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wu)return o===Zt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jc||i===Eu||i===Tu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===jc)return o===Zt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Eu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xp||i===Au||i===Ru||i===Cu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===jc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Au)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ru)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ba?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class ym extends bi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hb=`
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

}`;class Vb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ym(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pr({vertexShader:Bb,fragmentShader:Hb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new Qr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gb extends Fs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,d=null,f=null,u=null,h=null,m=null;const _=new Vb,g={},p=t.getContextAttributes();let w=null,y=null;const v=[],C=[],P=new ze;let D=null;const N=new Di;N.viewport=new Ft;const M=new Di;M.viewport=new Ft;const S=[N,M],I=new dv;let F=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let Te=v[Q];return Te===void 0&&(Te=new dd,v[Q]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(Q){let Te=v[Q];return Te===void 0&&(Te=new dd,v[Q]=Te),Te.getGripSpace()},this.getHand=function(Q){let Te=v[Q];return Te===void 0&&(Te=new dd,v[Q]=Te),Te.getHandSpace()};function G(Q){const Te=C.indexOf(Q.inputSource);if(Te===-1)return;const se=v[Te];se!==void 0&&(se.update(Q.inputSource,Q.frame,l||o),se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function J(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<v.length;Q++){const Te=C[Q];Te!==null&&(C[Q]=null,v[Q].disconnect(Te))}F=null,V=null,_.reset();for(const Q in g)delete g[Q];e.setRenderTarget(w),h=null,u=null,f=null,r=null,y=null,xt.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",J),r.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(r,t)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,je=null,ne=null;p.depth&&(ne=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=p.stencil?wa:Ma,je=p.stencil?ba:Ds);const fe={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};u=f.createProjectionLayer(fe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Ls(u.textureWidth,u.textureHeight,{format:tr,type:mr,depthTexture:new im(u.textureWidth,u.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const se={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Ls(h.framebufferWidth,h.framebufferHeight,{format:tr,type:mr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),xt.setContext(r),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(Q){for(let Te=0;Te<Q.removed.length;Te++){const se=Q.removed[Te],je=C.indexOf(se);je>=0&&(C[je]=null,v[je].disconnect(se))}for(let Te=0;Te<Q.added.length;Te++){const se=Q.added[Te];let je=C.indexOf(se);if(je===-1){for(let fe=0;fe<v.length;fe++)if(fe>=C.length){C.push(se),je=fe;break}else if(C[fe]===null){C[fe]=se,je=fe;break}if(je===-1)break}const ne=v[je];ne&&ne.connect(se)}}const de=new b,q=new b;function oe(Q,Te,se){de.setFromMatrixPosition(Te.matrixWorld),q.setFromMatrixPosition(se.matrixWorld);const je=de.distanceTo(q),ne=Te.projectionMatrix.elements,fe=se.projectionMatrix.elements,ee=ne[14]/(ne[10]-1),te=ne[14]/(ne[10]+1),R=(ne[9]+1)/ne[5],me=(ne[9]-1)/ne[5],ue=(ne[8]-1)/ne[0],He=(fe[8]+1)/fe[0],pe=ee*ue,Ie=ee*He,ae=je/(-ue+He),Ae=ae*-ue;if(Te.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ae),Q.translateZ(ae),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ne[10]===-1)Q.projectionMatrix.copy(Te.projectionMatrix),Q.projectionMatrixInverse.copy(Te.projectionMatrixInverse);else{const we=ee+ae,Ce=te+ae,A=pe-Ae,x=Ie+(je-Ae),O=R*te/Ce*we,Z=me*te/Ce*we;Q.projectionMatrix.makePerspective(A,x,O,Z,we,Ce),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function xe(Q,Te){Te===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(Te.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let Te=Q.near,se=Q.far;_.texture!==null&&(_.depthNear>0&&(Te=_.depthNear),_.depthFar>0&&(se=_.depthFar)),I.near=M.near=N.near=Te,I.far=M.far=N.far=se,(F!==I.near||V!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,V=I.far),I.layers.mask=Q.layers.mask|6,N.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const je=Q.parent,ne=I.cameras;xe(I,je);for(let fe=0;fe<ne.length;fe++)xe(ne[fe],je);ne.length===2?oe(I,N,M):I.projectionMatrix.copy(N.projectionMatrix),We(Q,I,je)};function We(Q,Te,se){se===null?Q.matrix.copy(Te.matrixWorld):(Q.matrix.copy(se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(Te.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(Te.projectionMatrix),Q.projectionMatrixInverse.copy(Te.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ea*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&h===null))return c},this.setFoveation=function(Q){c=Q,u!==null&&(u.fixedFoveation=Q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(I)},this.getCameraTexture=function(Q){return g[Q]};let it=null;function gt(Q,Te){if(d=Te.getViewerPose(l||o),m=Te,d!==null){const se=d.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let je=!1;se.length!==I.cameras.length&&(I.cameras.length=0,je=!0);for(let te=0;te<se.length;te++){const R=se[te];let me=null;if(h!==null)me=h.getViewport(R);else{const He=f.getViewSubImage(u,R);me=He.viewport,te===0&&(e.setRenderTargetTextures(y,He.colorTexture,He.depthStencilTexture),e.setRenderTarget(y))}let ue=S[te];ue===void 0&&(ue=new Di,ue.layers.enable(te),ue.viewport=new Ft,S[te]=ue),ue.matrix.fromArray(R.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(R.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(me.x,me.y,me.width,me.height),te===0&&(I.matrix.copy(ue.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),je===!0&&I.cameras.push(ue)}const ne=r.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const te=f.getDepthInformation(se[0]);te&&te.isValid&&te.texture&&_.init(te,r.renderState)}if(ne&&ne.includes("camera-access")&&(e.state.unbindTexture(),f))for(let te=0;te<se.length;te++){const R=se[te].camera;if(R){let me=g[R];me||(me=new ym,g[R]=me);const ue=f.getCameraImage(R);me.sourceTexture=ue}}}for(let se=0;se<v.length;se++){const je=C[se],ne=v[se];je!==null&&ne!==void 0&&ne.update(je,Te,l||o)}it&&it(Q,Te),Te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Te}),m=null}const xt=new mm;xt.setAnimationLoop(gt),this.setAnimationLoop=function(Q){it=Q},this.dispose=function(){}}}const hs=new ri,Wb=new qt;function Xb(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Jp(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,w,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),d(g,p)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&h(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,w,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Si&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Si&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const w=e.get(p),y=w.envMap,v=w.envMapRotation;y&&(g.envMap.value=y,hs.copy(v),hs.x*=-1,hs.y*=-1,hs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),g.envMapRotation.value.setFromMatrix4(Wb.makeRotationFromEuler(hs)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,w,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Si&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const w=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qb(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,y){const v=y.program;i.uniformBlockBinding(w,v)}function l(w,y){let v=r[w.id];v===void 0&&(m(w),v=d(w),r[w.id]=v,w.addEventListener("dispose",g));const C=y.program;i.updateUBOMapping(w,C);const P=e.render.frame;s[w.id]!==P&&(u(w),s[w.id]=P)}function d(w){const y=f();w.__bindingPointIndex=y;const v=n.createBuffer(),C=w.__size,P=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,C,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const y=r[w.id],v=w.uniforms,C=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let P=0,D=v.length;P<D;P++){const N=Array.isArray(v[P])?v[P]:[v[P]];for(let M=0,S=N.length;M<S;M++){const I=N[M];if(h(I,P,M,C)===!0){const F=I.__offset,V=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let J=0;J<V.length;J++){const Y=V[J],de=_(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,F+G,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,G),G+=de.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(w,y,v,C){const P=w.value,D=y+"_"+v;if(C[D]===void 0)return typeof P=="number"||typeof P=="boolean"?C[D]=P:C[D]=P.clone(),!0;{const N=C[D];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return C[D]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function m(w){const y=w.uniforms;let v=0;const C=16;for(let D=0,N=y.length;D<N;D++){const M=Array.isArray(y[D])?y[D]:[y[D]];for(let S=0,I=M.length;S<I;S++){const F=M[S],V=Array.isArray(F.value)?F.value:[F.value];for(let G=0,J=V.length;G<J;G++){const Y=V[G],de=_(Y),q=v%C,oe=q%de.boundary,xe=q+oe;v+=oe,xe!==0&&C-xe<de.storage&&(v+=C-xe),F.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=de.storage}}}const P=v%C;return P>0&&(v+=C-P),w.__size=v,w.__cache={},this}function _(w){const y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function g(w){const y=w.target;y.removeEventListener("dispose",g);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class $b{constructor(e={}){const{canvas:t=Y0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const w=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let C=!1;this._outputColorSpace=fi;let P=0,D=0,N=null,M=-1,S=null;const I=new Ft,F=new Ft;let V=null;const G=new Ut(0);let J=0,Y=t.width,de=t.height,q=1,oe=null,xe=null;const We=new Ft(0,0,Y,de),it=new Ft(0,0,Y,de);let gt=!1;const xt=new rh;let Q=!1,Te=!1;const se=new qt,je=new b,ne=new Ft,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function te(){return N===null?q:1}let R=i;function me(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yu}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",ge,!1),R===null){const z="webgl2";if(R=me(z,T),R===null)throw me(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ue,He,pe,Ie,ae,Ae,we,Ce,A,x,O,Z,X,W,ke,_e,$e,Ye,be,Pe,Ze,Ke,Re,mt;function U(){ue=new iS(R),ue.init(),Ke=new zb(R,ue),He=new Zy(R,ue,e,Ke),pe=new Fb(R,ue),He.reversedDepthBuffer&&u&&pe.buffers.depth.setReversed(!0),Ie=new oS(R),ae=new wb,Ae=new Ob(R,ue,pe,ae,He,Ke,Ie),we=new Jy(v),Ce=new nS(v),A=new hv(R),Re=new Yy(R,A),x=new rS(R,A,Ie,Re),O=new cS(R,x,A,Ie),be=new aS(R,He,Ae),_e=new Ky(ae),Z=new Mb(v,we,Ce,ue,He,Re,_e),X=new Xb(v,ae),W=new Tb,ke=new Lb(ue),Ye=new $y(v,we,Ce,pe,O,h,c),$e=new Ub(v,O,He),mt=new qb(R,Ie,He,pe),Pe=new jy(R,ue,Ie),Ze=new sS(R,ue,Ie),Ie.programs=Z.programs,v.capabilities=He,v.extensions=ue,v.properties=ae,v.renderLists=W,v.shadowMap=$e,v.state=pe,v.info=Ie}U();const ye=new Gb(v,R);this.xr=ye,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=ue.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ue.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(Y,de,!1))},this.getSize=function(T){return T.set(Y,de)},this.setSize=function(T,z,j=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,de=z,t.width=Math.floor(T*q),t.height=Math.floor(z*q),j===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(Y*q,de*q).floor()},this.setDrawingBufferSize=function(T,z,j){Y=T,de=z,q=j,t.width=Math.floor(T*j),t.height=Math.floor(z*j),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(We)},this.setViewport=function(T,z,j,K){T.isVector4?We.set(T.x,T.y,T.z,T.w):We.set(T,z,j,K),pe.viewport(I.copy(We).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(it)},this.setScissor=function(T,z,j,K){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,z,j,K),pe.scissor(F.copy(it).multiplyScalar(q).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(T){pe.setScissorTest(gt=T)},this.setOpaqueSort=function(T){oe=T},this.setTransparentSort=function(T){xe=T},this.getClearColor=function(T){return T.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,j=!0){let K=0;if(T){let H=!1;if(N!==null){const Me=N.texture.format;H=Me===eh||Me===Qu||Me===Ju}if(H){const Me=N.texture.type,Ve=Me===mr||Me===Ds||Me===Sa||Me===ba||Me===Zu||Me===Ku,Qe=Ye.getClearColor(),Ge=Ye.getClearAlpha(),lt=Qe.r,ft=Qe.g,st=Qe.b;Ve?(m[0]=lt,m[1]=ft,m[2]=st,m[3]=Ge,R.clearBufferuiv(R.COLOR,0,m)):(_[0]=lt,_[1]=ft,_[2]=st,_[3]=Ge,R.clearBufferiv(R.COLOR,0,_))}else K|=R.COLOR_BUFFER_BIT}z&&(K|=R.DEPTH_BUFFER_BIT),j&&(K|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Ye.dispose(),W.dispose(),ke.dispose(),ae.dispose(),we.dispose(),Ce.dispose(),O.dispose(),Re.dispose(),mt.dispose(),Z.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Mt),ye.removeEventListener("sessionend",Vo),Fn.stop()};function Se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Xe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=Ie.autoReset,z=$e.enabled,j=$e.autoUpdate,K=$e.needsUpdate,H=$e.type;U(),Ie.autoReset=T,$e.enabled=z,$e.autoUpdate=j,$e.needsUpdate=K,$e.type=H}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function re(T){const z=T.target;z.removeEventListener("dispose",re),qe(z)}function qe(T){ie(T),ae.remove(T)}function ie(T){const z=ae.get(T).programs;z!==void 0&&(z.forEach(function(j){Z.releaseProgram(j)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,j,K,H,Me){z===null&&(z=fe);const Ve=H.isMesh&&H.matrixWorld.determinant()<0,Qe=oi(T,z,j,K,H);pe.setMaterial(K,Ve);let Ge=j.index,lt=1;if(K.wireframe===!0){if(Ge=x.getWireframeAttribute(j),Ge===void 0)return;lt=2}const ft=j.drawRange,st=j.attributes.position;let bt=ft.start*lt,Gt=(ft.start+ft.count)*lt;Me!==null&&(bt=Math.max(bt,Me.start*lt),Gt=Math.min(Gt,(Me.start+Me.count)*lt)),Ge!==null?(bt=Math.max(bt,0),Gt=Math.min(Gt,Ge.count)):st!=null&&(bt=Math.max(bt,0),Gt=Math.min(Gt,st.count));const an=Gt-bt;if(an<0||an===1/0)return;Re.setup(H,K,Qe,j,Ge);let $t,Yt=Pe;if(Ge!==null&&($t=A.get(Ge),Yt=Ze,Yt.setIndex($t)),H.isMesh)K.wireframe===!0?(pe.setLineWidth(K.wireframeLinewidth*te()),Yt.setMode(R.LINES)):Yt.setMode(R.TRIANGLES);else if(H.isLine){let pt=K.linewidth;pt===void 0&&(pt=1),pe.setLineWidth(pt*te()),H.isLineSegments?Yt.setMode(R.LINES):H.isLineLoop?Yt.setMode(R.LINE_LOOP):Yt.setMode(R.LINE_STRIP)}else H.isPoints?Yt.setMode(R.POINTS):H.isSprite&&Yt.setMode(R.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)mo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Yt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))Yt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const pt=H._multiDrawStarts,Wt=H._multiDrawCounts,Lt=H._multiDrawCount,On=Ge?A.get(Ge).bytesPerElement:1,ai=ae.get(K).currentProgram.getUniforms();for(let zn=0;zn<Lt;zn++)ai.setValue(R,"_gl_DrawID",zn),Yt.render(pt[zn]/On,Wt[zn])}else if(H.isInstancedMesh)Yt.renderInstances(bt,an,H.count);else if(j.isInstancedBufferGeometry){const pt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Wt=Math.min(j.instanceCount,pt);Yt.renderInstances(bt,an,Wt)}else Yt.render(bt,an)};function Ne(T,z,j){T.transparent===!0&&T.side===fn&&T.forceSinglePass===!1?(T.side=Si,T.needsUpdate=!0,Vs(T,z,j),T.side=Cr,T.needsUpdate=!0,Vs(T,z,j),T.side=fn):Vs(T,z,j)}this.compile=function(T,z,j=null){j===null&&(j=T),p=ke.get(j),p.init(z),y.push(p),j.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),T!==j&&T.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const K=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Me=H.material;if(Me)if(Array.isArray(Me))for(let Ve=0;Ve<Me.length;Ve++){const Qe=Me[Ve];Ne(Qe,j,H),K.add(Qe)}else Ne(Me,j,H),K.add(Me)}),p=y.pop(),K},this.compileAsync=function(T,z,j=null){const K=this.compile(T,z,j);return new Promise(H=>{function Me(){if(K.forEach(function(Ve){ae.get(Ve).currentProgram.isReady()&&K.delete(Ve)}),K.size===0){H(T);return}setTimeout(Me,10)}ue.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Fe=null;function ht(T){Fe&&Fe(T)}function Mt(){Fn.stop()}function Vo(){Fn.start()}const Fn=new mm;Fn.setAnimationLoop(ht),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(T){Fe=T,ye.setAnimationLoop(T),T===null?Fn.stop():Fn.start()},ye.addEventListener("sessionstart",Mt),ye.addEventListener("sessionend",Vo),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(z),z=ye.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,z,N),p=ke.get(T,y.length),p.init(z),y.push(p),se.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),xt.setFromProjectionMatrix(se,pr,z.reversedDepth),Te=this.localClippingEnabled,Q=_e.init(this.clippingPlanes,Te),g=W.get(T,w.length),g.init(),w.push(g),ye.enabled===!0&&ye.isPresenting===!0){const Me=v.xr.getDepthSensingMesh();Me!==null&&Nr(Me,z,-1/0,v.sortObjects)}Nr(T,z,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(oe,xe),ee=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ee&&Ye.addToRenderList(g,T),this.info.render.frame++,Q===!0&&_e.beginShadows();const j=p.state.shadowsArray;$e.render(j,T,z),Q===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=g.opaque,H=g.transmissive;if(p.setupLights(),z.isArrayCamera){const Me=z.cameras;if(H.length>0)for(let Ve=0,Qe=Me.length;Ve<Qe;Ve++){const Ge=Me[Ve];Wo(K,H,T,Ge)}ee&&Ye.render(T);for(let Ve=0,Qe=Me.length;Ve<Qe;Ve++){const Ge=Me[Ve];Go(g,T,Ge,Ge.viewport)}}else H.length>0&&Wo(K,H,T,z),ee&&Ye.render(T),Go(g,T,z);N!==null&&D===0&&(Ae.updateMultisampleRenderTarget(N),Ae.updateRenderTargetMipmap(N)),T.isScene===!0&&T.onAfterRender(v,T,z),Re.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],Q===!0&&_e.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function Nr(T,z,j,K){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||xt.intersectsSprite(T)){K&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);const Ve=O.update(T),Qe=T.material;Qe.visible&&g.push(T,Ve,Qe,j,ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||xt.intersectsObject(T))){const Ve=O.update(T),Qe=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ne.copy(T.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ne.copy(Ve.boundingSphere.center)),ne.applyMatrix4(T.matrixWorld).applyMatrix4(se)),Array.isArray(Qe)){const Ge=Ve.groups;for(let lt=0,ft=Ge.length;lt<ft;lt++){const st=Ge[lt],bt=Qe[st.materialIndex];bt&&bt.visible&&g.push(T,Ve,bt,j,ne.z,st)}}else Qe.visible&&g.push(T,Ve,Qe,j,ne.z,null)}}const Me=T.children;for(let Ve=0,Qe=Me.length;Ve<Qe;Ve++)Nr(Me[Ve],z,j,K)}function Go(T,z,j,K){const H=T.opaque,Me=T.transmissive,Ve=T.transparent;p.setupLightsView(j),Q===!0&&_e.setGlobalState(v.clippingPlanes,j),K&&pe.viewport(I.copy(K)),H.length>0&&Ur(H,z,j),Me.length>0&&Ur(Me,z,j),Ve.length>0&&Ur(Ve,z,j),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Wo(T,z,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Ls(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?qa:mr,minFilter:Ms,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace}));const Me=p.state.transmissionRenderTarget[K.id],Ve=K.viewport||I;Me.setSize(Ve.z*v.transmissionResolutionScale,Ve.w*v.transmissionResolutionScale);const Qe=v.getRenderTarget(),Ge=v.getActiveCubeFace(),lt=v.getActiveMipmapLevel();v.setRenderTarget(Me),v.getClearColor(G),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),ee&&Ye.render(j);const ft=v.toneMapping;v.toneMapping=Kr;const st=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),Q===!0&&_e.setGlobalState(v.clippingPlanes,K),Ur(T,j,K),Ae.updateMultisampleRenderTarget(Me),Ae.updateRenderTargetMipmap(Me),ue.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Gt=0,an=z.length;Gt<an;Gt++){const $t=z[Gt],Yt=$t.object,pt=$t.geometry,Wt=$t.material,Lt=$t.group;if(Wt.side===fn&&Yt.layers.test(K.layers)){const On=Wt.side;Wt.side=Si,Wt.needsUpdate=!0,is(Yt,j,K,pt,Wt,Lt),Wt.side=On,Wt.needsUpdate=!0,bt=!0}}bt===!0&&(Ae.updateMultisampleRenderTarget(Me),Ae.updateRenderTargetMipmap(Me))}v.setRenderTarget(Qe,Ge,lt),v.setClearColor(G,J),st!==void 0&&(K.viewport=st),v.toneMapping=ft}function Ur(T,z,j){const K=z.isScene===!0?z.overrideMaterial:null;for(let H=0,Me=T.length;H<Me;H++){const Ve=T[H],Qe=Ve.object,Ge=Ve.geometry,lt=Ve.group;let ft=Ve.material;ft.allowOverride===!0&&K!==null&&(ft=K),Qe.layers.test(j.layers)&&is(Qe,z,j,Ge,ft,lt)}}function is(T,z,j,K,H,Me){T.onBeforeRender(v,z,j,K,H,Me),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(v,z,j,K,T,Me),H.transparent===!0&&H.side===fn&&H.forceSinglePass===!1?(H.side=Si,H.needsUpdate=!0,v.renderBufferDirect(j,z,K,H,T,Me),H.side=Cr,H.needsUpdate=!0,v.renderBufferDirect(j,z,K,H,T,Me),H.side=fn):v.renderBufferDirect(j,z,K,H,T,Me),T.onAfterRender(v,z,j,K,H,Me)}function Vs(T,z,j){z.isScene!==!0&&(z=fe);const K=ae.get(T),H=p.state.lights,Me=p.state.shadowsArray,Ve=H.state.version,Qe=Z.getParameters(T,H.state,Me,z,j),Ge=Z.getProgramCacheKey(Qe);let lt=K.programs;K.environment=T.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(T.isMeshStandardMaterial?Ce:we).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,lt===void 0&&(T.addEventListener("dispose",re),lt=new Map,K.programs=lt);let ft=lt.get(Ge);if(ft!==void 0){if(K.currentProgram===ft&&K.lightsStateVersion===Ve)return Yi(T,Qe),ft}else Qe.uniforms=Z.getUniforms(T),T.onBeforeCompile(Qe,v),ft=Z.acquireProgram(Qe,Ge),lt.set(Ge,ft),K.uniforms=Qe.uniforms;const st=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(st.clippingPlanes=_e.uniform),Yi(T,Qe),K.needsLights=rc(T),K.lightsStateVersion=Ve,K.needsLights&&(st.ambientLightColor.value=H.state.ambient,st.lightProbe.value=H.state.probe,st.directionalLights.value=H.state.directional,st.directionalLightShadows.value=H.state.directionalShadow,st.spotLights.value=H.state.spot,st.spotLightShadows.value=H.state.spotShadow,st.rectAreaLights.value=H.state.rectArea,st.ltc_1.value=H.state.rectAreaLTC1,st.ltc_2.value=H.state.rectAreaLTC2,st.pointLights.value=H.state.point,st.pointLightShadows.value=H.state.pointShadow,st.hemisphereLights.value=H.state.hemi,st.directionalShadowMap.value=H.state.directionalShadowMap,st.directionalShadowMatrix.value=H.state.directionalShadowMatrix,st.spotShadowMap.value=H.state.spotShadowMap,st.spotLightMatrix.value=H.state.spotLightMatrix,st.spotLightMap.value=H.state.spotLightMap,st.pointShadowMap.value=H.state.pointShadowMap,st.pointShadowMatrix.value=H.state.pointShadowMatrix),K.currentProgram=ft,K.uniformsList=null,ft}function rs(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Zc.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Yi(T,z){const j=ae.get(T);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function oi(T,z,j,K,H){z.isScene!==!0&&(z=fe),Ae.resetTextureUnits();const Me=z.fog,Ve=K.isMeshStandardMaterial?z.environment:null,Qe=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Eo,Ge=(K.isMeshStandardMaterial?Ce:we).get(K.envMap||Ve),lt=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ft=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),st=!!j.morphAttributes.position,bt=!!j.morphAttributes.normal,Gt=!!j.morphAttributes.color;let an=Kr;K.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(an=v.toneMapping);const $t=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Yt=$t!==void 0?$t.length:0,pt=ae.get(K),Wt=p.state.lights;if(Q===!0&&(Te===!0||T!==S)){const Bn=T===S&&K.id===M;_e.setState(K,T,Bn)}let Lt=!1;K.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==Wt.state.version||pt.outputColorSpace!==Qe||H.isBatchedMesh&&pt.batching===!1||!H.isBatchedMesh&&pt.batching===!0||H.isBatchedMesh&&pt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&pt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&pt.instancing===!1||!H.isInstancedMesh&&pt.instancing===!0||H.isSkinnedMesh&&pt.skinning===!1||!H.isSkinnedMesh&&pt.skinning===!0||H.isInstancedMesh&&pt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&pt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&pt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&pt.instancingMorph===!1&&H.morphTexture!==null||pt.envMap!==Ge||K.fog===!0&&pt.fog!==Me||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==_e.numPlanes||pt.numIntersection!==_e.numIntersection)||pt.vertexAlphas!==lt||pt.vertexTangents!==ft||pt.morphTargets!==st||pt.morphNormals!==bt||pt.morphColors!==Gt||pt.toneMapping!==an||pt.morphTargetsCount!==Yt)&&(Lt=!0):(Lt=!0,pt.__version=K.version);let On=pt.currentProgram;Lt===!0&&(On=Vs(K,z,H));let ai=!1,zn=!1,ss=!1;const cn=On.getUniforms(),ci=pt.uniforms;if(pe.useProgram(On.program)&&(ai=!0,zn=!0,ss=!0),K.id!==M&&(M=K.id,zn=!0),ai||S!==T){pe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),cn.setValue(R,"projectionMatrix",T.projectionMatrix),cn.setValue(R,"viewMatrix",T.matrixWorldInverse);const E=cn.map.cameraPosition;E!==void 0&&E.setValue(R,je.setFromMatrixPosition(T.matrixWorld)),He.logarithmicDepthBuffer&&cn.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&cn.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,zn=!0,ss=!0)}if(H.isSkinnedMesh){cn.setOptional(R,H,"bindMatrix"),cn.setOptional(R,H,"bindMatrixInverse");const Bn=H.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),cn.setValue(R,"boneTexture",Bn.boneTexture,Ae))}H.isBatchedMesh&&(cn.setOptional(R,H,"batchingTexture"),cn.setValue(R,"batchingTexture",H._matricesTexture,Ae),cn.setOptional(R,H,"batchingIdTexture"),cn.setValue(R,"batchingIdTexture",H._indirectTexture,Ae),cn.setOptional(R,H,"batchingColorTexture"),H._colorsTexture!==null&&cn.setValue(R,"batchingColorTexture",H._colorsTexture,Ae));const Kn=j.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&be.update(H,j,On),(zn||pt.receiveShadow!==H.receiveShadow)&&(pt.receiveShadow=H.receiveShadow,cn.setValue(R,"receiveShadow",H.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(ci.envMap.value=Ge,ci.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(ci.envMapIntensity.value=z.environmentIntensity),zn&&(cn.setValue(R,"toneMappingExposure",v.toneMappingExposure),pt.needsLights&&Ai(ci,ss),Me&&K.fog===!0&&X.refreshFogUniforms(ci,Me),X.refreshMaterialUniforms(ci,K,q,de,p.state.transmissionRenderTarget[T.id]),Zc.upload(R,rs(pt),ci,Ae)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Zc.upload(R,rs(pt),ci,Ae),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&cn.setValue(R,"center",H.center),cn.setValue(R,"modelViewMatrix",H.modelViewMatrix),cn.setValue(R,"normalMatrix",H.normalMatrix),cn.setValue(R,"modelMatrix",H.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Bn=K.uniformsGroups;for(let E=0,L=Bn.length;E<L;E++){const k=Bn[E];mt.update(k,On),mt.bind(k,On)}}return On}function Ai(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function rc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,z,j){const K=ae.get(T);K.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),ae.get(T.texture).__webglTexture=z,ae.get(T.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const j=ae.get(T);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0};const kr=R.createFramebuffer();this.setRenderTarget=function(T,z=0,j=0){N=T,P=z,D=j;let K=!0,H=null,Me=!1,Ve=!1;if(T){const Ge=ae.get(T);if(Ge.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(R.FRAMEBUFFER,null),K=!1;else if(Ge.__webglFramebuffer===void 0)Ae.setupRenderTarget(T);else if(Ge.__hasExternalTextures)Ae.rebindTextures(T,ae.get(T.texture).__webglTexture,ae.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const st=T.depthTexture;if(Ge.__boundDepthTexture!==st){if(st!==null&&ae.has(st)&&(T.width!==st.image.width||T.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ae.setupDepthRenderbuffer(T)}}const lt=T.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ve=!0);const ft=ae.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ft[z])?H=ft[z][j]:H=ft[z],Me=!0):T.samples>0&&Ae.useMultisampledRTT(T)===!1?H=ae.get(T).__webglMultisampledFramebuffer:Array.isArray(ft)?H=ft[j]:H=ft,I.copy(T.viewport),F.copy(T.scissor),V=T.scissorTest}else I.copy(We).multiplyScalar(q).floor(),F.copy(it).multiplyScalar(q).floor(),V=gt;if(j!==0&&(H=kr),pe.bindFramebuffer(R.FRAMEBUFFER,H)&&K&&pe.drawBuffers(T,H),pe.viewport(I),pe.scissor(F),pe.setScissorTest(V),Me){const Ge=ae.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ge.__webglTexture,j)}else if(Ve){const Ge=z;for(let lt=0;lt<T.textures.length;lt++){const ft=ae.get(T.textures[lt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+lt,ft.__webglTexture,j,Ge)}}else if(T!==null&&j!==0){const Ge=ae.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ge.__webglTexture,j)}M=-1},this.readRenderTargetPixels=function(T,z,j,K,H,Me,Ve,Qe=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ge=Ge[Ve]),Ge){pe.bindFramebuffer(R.FRAMEBUFFER,Ge);try{const lt=T.textures[Qe],ft=lt.format,st=lt.type;if(!He.textureFormatReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-K&&j>=0&&j<=T.height-H&&(T.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Qe),R.readPixels(z,j,K,H,Ke.convert(ft),Ke.convert(st),Me))}finally{const lt=N!==null?ae.get(N).__webglFramebuffer:null;pe.bindFramebuffer(R.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(T,z,j,K,H,Me,Ve,Qe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ge=Ge[Ve]),Ge)if(z>=0&&z<=T.width-K&&j>=0&&j<=T.height-H){pe.bindFramebuffer(R.FRAMEBUFFER,Ge);const lt=T.textures[Qe],ft=lt.format,st=lt.type;if(!He.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,bt),R.bufferData(R.PIXEL_PACK_BUFFER,Me.byteLength,R.STREAM_READ),T.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Qe),R.readPixels(z,j,K,H,Ke.convert(ft),Ke.convert(st),0);const Gt=N!==null?ae.get(N).__webglFramebuffer:null;pe.bindFramebuffer(R.FRAMEBUFFER,Gt);const an=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await j0(R,an,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,bt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Me),R.deleteBuffer(bt),R.deleteSync(an),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,j=0){const K=Math.pow(2,-j),H=Math.floor(T.image.width*K),Me=Math.floor(T.image.height*K),Ve=z!==null?z.x:0,Qe=z!==null?z.y:0;Ae.setTexture2D(T,0),R.copyTexSubImage2D(R.TEXTURE_2D,j,0,0,Ve,Qe,H,Me),pe.unbindTexture()};const qn=R.createFramebuffer(),Vl=R.createFramebuffer();this.copyTextureToTexture=function(T,z,j=null,K=null,H=0,Me=null){Me===null&&(H!==0?(mo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=H,H=0):Me=0);let Ve,Qe,Ge,lt,ft,st,bt,Gt,an;const $t=T.isCompressedTexture?T.mipmaps[Me]:T.image;if(j!==null)Ve=j.max.x-j.min.x,Qe=j.max.y-j.min.y,Ge=j.isBox3?j.max.z-j.min.z:1,lt=j.min.x,ft=j.min.y,st=j.isBox3?j.min.z:0;else{const Kn=Math.pow(2,-H);Ve=Math.floor($t.width*Kn),Qe=Math.floor($t.height*Kn),T.isDataArrayTexture?Ge=$t.depth:T.isData3DTexture?Ge=Math.floor($t.depth*Kn):Ge=1,lt=0,ft=0,st=0}K!==null?(bt=K.x,Gt=K.y,an=K.z):(bt=0,Gt=0,an=0);const Yt=Ke.convert(z.format),pt=Ke.convert(z.type);let Wt;z.isData3DTexture?(Ae.setTexture3D(z,0),Wt=R.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Ae.setTexture2DArray(z,0),Wt=R.TEXTURE_2D_ARRAY):(Ae.setTexture2D(z,0),Wt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,z.unpackAlignment);const Lt=R.getParameter(R.UNPACK_ROW_LENGTH),On=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ai=R.getParameter(R.UNPACK_SKIP_PIXELS),zn=R.getParameter(R.UNPACK_SKIP_ROWS),ss=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,$t.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,$t.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,lt),R.pixelStorei(R.UNPACK_SKIP_ROWS,ft),R.pixelStorei(R.UNPACK_SKIP_IMAGES,st);const cn=T.isDataArrayTexture||T.isData3DTexture,ci=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const Kn=ae.get(T),Bn=ae.get(z),E=ae.get(Kn.__renderTarget),L=ae.get(Bn.__renderTarget);pe.bindFramebuffer(R.READ_FRAMEBUFFER,E.__webglFramebuffer),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,L.__webglFramebuffer);for(let k=0;k<Ge;k++)cn&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ae.get(T).__webglTexture,H,st+k),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ae.get(z).__webglTexture,Me,an+k)),R.blitFramebuffer(lt,ft,Ve,Qe,bt,Gt,Ve,Qe,R.DEPTH_BUFFER_BIT,R.NEAREST);pe.bindFramebuffer(R.READ_FRAMEBUFFER,null),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||ae.has(T)){const Kn=ae.get(T),Bn=ae.get(z);pe.bindFramebuffer(R.READ_FRAMEBUFFER,qn),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,Vl);for(let E=0;E<Ge;E++)cn?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Kn.__webglTexture,H,st+E):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Kn.__webglTexture,H),ci?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Bn.__webglTexture,Me,an+E):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Bn.__webglTexture,Me),H!==0?R.blitFramebuffer(lt,ft,Ve,Qe,bt,Gt,Ve,Qe,R.COLOR_BUFFER_BIT,R.NEAREST):ci?R.copyTexSubImage3D(Wt,Me,bt,Gt,an+E,lt,ft,Ve,Qe):R.copyTexSubImage2D(Wt,Me,bt,Gt,lt,ft,Ve,Qe);pe.bindFramebuffer(R.READ_FRAMEBUFFER,null),pe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ci?T.isDataTexture||T.isData3DTexture?R.texSubImage3D(Wt,Me,bt,Gt,an,Ve,Qe,Ge,Yt,pt,$t.data):z.isCompressedArrayTexture?R.compressedTexSubImage3D(Wt,Me,bt,Gt,an,Ve,Qe,Ge,Yt,$t.data):R.texSubImage3D(Wt,Me,bt,Gt,an,Ve,Qe,Ge,Yt,pt,$t):T.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Me,bt,Gt,Ve,Qe,Yt,pt,$t.data):T.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Me,bt,Gt,$t.width,$t.height,Yt,$t.data):R.texSubImage2D(R.TEXTURE_2D,Me,bt,Gt,Ve,Qe,Yt,pt,$t);R.pixelStorei(R.UNPACK_ROW_LENGTH,Lt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,On),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ai),R.pixelStorei(R.UNPACK_SKIP_ROWS,zn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ss),Me===0&&z.generateMipmaps&&R.generateMipmap(Wt),pe.unbindTexture()},this.copyTextureToTexture3D=function(T,z,j=null,K=null,H=0){return mo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,j,K,H)},this.initRenderTarget=function(T){ae.get(T).__webglFramebuffer===void 0&&Ae.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ae.setTextureCube(T,0):T.isData3DTexture?Ae.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ae.setTexture2DArray(T,0):Ae.setTexture2D(T,0),pe.unbindTexture()},this.resetState=function(){P=0,D=0,N=null,pe.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}}const Wf={type:"change"},uh={type:"start"},Sm={type:"end"},Ic=new $a,Xf=new qr,Yb=Math.cos(70*jt.DEG2RAD),In=new b,mi=2*Math.PI,Kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wd=1e-6;class jb extends pm{constructor(e,t=null){super(e,t),this.state=Kt.NONE,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fo.ROTATE,MIDDLE:fo.DOLLY,RIGHT:fo.PAN},this.touches={ONE:co.ROTATE,TWO:co.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new b,this._lastQuaternion=new mn,this._lastTargetPosition=new b,this._quat=new mn().setFromUnitVectors(e.up,new b(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vf,this._sphericalDelta=new vf,this._scale=1,this._panOffset=new b,this._rotateStart=new ze,this._rotateEnd=new ze,this._rotateDelta=new ze,this._panStart=new ze,this._panEnd=new ze,this._panDelta=new ze,this._dollyStart=new ze,this._dollyEnd=new ze,this._dollyDelta=new ze,this._dollyDirection=new b,this._mouse=new ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Kb.bind(this),this._onPointerDown=Zb.bind(this),this._onPointerUp=Jb.bind(this),this._onContextMenu=sM.bind(this),this._onMouseWheel=tM.bind(this),this._onKeyDown=nM.bind(this),this._onTouchStart=iM.bind(this),this._onTouchMove=rM.bind(this),this._onMouseDown=Qb.bind(this),this._onMouseMove=eM.bind(this),this._interceptControlDown=oM.bind(this),this._interceptControlUp=aM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wf),this.update(),this.state=Kt.NONE}update(e=null){const t=this.object.position;In.copy(t).sub(this.target),In.applyQuaternion(this._quat),this._spherical.setFromVector3(In),this.autoRotate&&this.state===Kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=mi:i>Math.PI&&(i-=mi),r<-Math.PI?r+=mi:r>Math.PI&&(r-=mi),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(In.setFromSpherical(this._spherical),In.applyQuaternion(this._quatInverse),t.copy(this.target).add(In),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=In.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new b(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new b(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=In.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ic.origin.copy(this.object.position),Ic.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ic.direction))<Yb?this.object.lookAt(this.target):(Xf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ic.intersectPlane(Xf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>wd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wd||this._lastTargetPosition.distanceToSquared(this.target)>wd?(this.dispatchEvent(Wf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?mi/60*this.autoRotateSpeed*e:mi/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){In.setFromMatrixColumn(t,0),In.multiplyScalar(-e),this._panOffset.add(In)}_panUp(e,t){this.screenSpacePanning===!0?In.setFromMatrixColumn(t,1):(In.setFromMatrixColumn(t,0),In.crossVectors(this.object.up,In)),In.multiplyScalar(e),this._panOffset.add(In)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;In.copy(r).sub(this.target);let s=In.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(mi*this._rotateDelta.x/t.clientHeight),this._rotateUp(mi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(mi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-mi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(mi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-mi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(mi*this._rotateDelta.x/t.clientHeight),this._rotateUp(mi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Zb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Kb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Jb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sm),this.state=Kt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Qb(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Kt.DOLLY;break;case fo.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Kt.ROTATE}break;case fo.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Kt.PAN}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(uh)}function eM(n){switch(this.state){case Kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function tM(n){this.enabled===!1||this.enableZoom===!1||this.state!==Kt.NONE||(n.preventDefault(),this.dispatchEvent(uh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Sm))}function nM(n){this.enabled!==!1&&this._handleKeyDown(n)}function iM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case co.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Kt.TOUCH_ROTATE;break;case co.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Kt.TOUCH_PAN;break;default:this.state=Kt.NONE}break;case 2:switch(this.touches.TWO){case co.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Kt.TOUCH_DOLLY_PAN;break;case co.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Kt.TOUCH_DOLLY_ROTATE;break;default:this.state=Kt.NONE}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(uh)}function rM(n){switch(this._trackPointer(n),this.state){case Kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Kt.NONE}}function sM(n){this.enabled!==!1&&n.preventDefault()}function oM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function aM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const fs=new fm,ni=new b,Gr=new b,un=new mn,qf={X:new b(1,0,0),Y:new b(0,1,0),Z:new b(0,0,1)},Ed={type:"change"},$f={type:"mouseDown",mode:null},Yf={type:"mouseUp",mode:null},jf={type:"objectChange"};class cM extends pm{constructor(e,t=null){super(void 0,t);const i=new pM(this);this._root=i;const r=new mM;this._gizmo=r,i.add(r);const s=new gM;this._plane=s,i.add(s);const o=this;function a(y,v){let C=v;Object.defineProperty(o,y,{get:function(){return C!==void 0?C:v},set:function(P){C!==P&&(C=P,s[y]=P,r[y]=P,o.dispatchEvent({type:y+"-changed",value:P}),o.dispatchEvent(Ed))}}),o[y]=v,s[y]=v,r[y]=v}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const c=new b,l=new b,d=new mn,f=new mn,u=new b,h=new mn,m=new b,_=new b,g=new b,p=0,w=new b;a("worldPosition",c),a("worldPositionStart",l),a("worldQuaternion",d),a("worldQuaternionStart",f),a("cameraPosition",u),a("cameraQuaternion",h),a("pointStart",m),a("pointEnd",_),a("rotationAxis",g),a("rotationAngle",p),a("eye",w),this._offset=new b,this._startNorm=new b,this._endNorm=new b,this._cameraScale=new b,this._parentPosition=new b,this._parentQuaternion=new mn,this._parentQuaternionInv=new mn,this._parentScale=new b,this._worldScaleStart=new b,this._worldQuaternionInv=new mn,this._worldScale=new b,this._positionStart=new b,this._quaternionStart=new mn,this._scaleStart=new b,this._getPointer=lM.bind(this),this._onPointerDown=uM.bind(this),this._onPointerHover=dM.bind(this),this._onPointerMove=hM.bind(this),this._onPointerUp=fM.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&fs.setFromCamera(e,this.camera);const t=Td(this._gizmo.picker[this.mode],fs);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&fs.setFromCamera(e,this.camera);const t=Td(this._plane,fs,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,$f.mode=this.mode,this.dispatchEvent($f)}}pointerMove(e){const t=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&fs.setFromCamera(e,this.camera);const o=Td(this._plane,fs,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(un.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(ni.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(ni.setFromMatrixPosition(r.parent.matrixWorld)))),r.position.x=Math.max(this.minX,Math.min(this.maxX,r.position.x)),r.position.y=Math.max(this.minY,Math.min(this.maxY,r.position.y)),r.position.z=Math.max(this.minZ,Math.min(this.maxZ,r.position.z));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Gr.set(a,a,a)}else ni.copy(this.pointStart),Gr.copy(this.pointEnd),ni.applyQuaternion(this._worldQuaternionInv),Gr.applyQuaternion(this._worldQuaternionInv),Gr.divide(ni),t.search("X")===-1&&(Gr.x=1),t.search("Y")===-1&&(Gr.y=1),t.search("Z")===-1&&(Gr.z=1);r.scale.copy(this._scaleStart).multiply(Gr),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(ni.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(ni.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(qf[t]),ni.copy(qf[t]),s==="local"&&ni.applyQuaternion(this.worldQuaternion),ni.cross(this.eye),ni.length()===0?c=!0:this.rotationAngle=this._offset.dot(ni.normalize())*a),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(un.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(un.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Ed),this.dispatchEvent(jf)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Yf.mode=this.mode,this.dispatchEvent(Yf)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Ed),this.dispatchEvent(jf),this.pointStart.copy(this.pointEnd))}getRaycaster(){return fs}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,i,r){const s=this._gizmo.materialLib;s.xAxis.color.set(e),s.yAxis.color.set(t),s.zAxis.color.set(i),s.active.color.set(r),s.xAxisTransparent.color.set(e),s.yAxisTransparent.color.set(t),s.zAxisTransparent.color.set(i),s.activeTransparent.color.set(r),s.xAxis._color&&s.xAxis._color.set(e),s.yAxis._color&&s.yAxis._color.set(t),s.zAxis._color&&s.zAxis._color.set(i),s.active._color&&s.active._color.set(r),s.xAxisTransparent._color&&s.xAxisTransparent._color.set(e),s.yAxisTransparent._color&&s.yAxisTransparent._color.set(t),s.zAxisTransparent._color&&s.zAxisTransparent._color.set(i),s.activeTransparent._color&&s.activeTransparent._color.set(r)}}function lM(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{const e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function dM(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function uM(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function hM(n){this.enabled&&this.pointerMove(this._getPointer(n))}function fM(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function Td(n,e,t){const i=e.intersectObject(n,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||t)return i[r];return!1}const Nc=new ri,Jt=new b(0,1,0),Zf=new b(0,0,0),Kf=new qt,Uc=new mn,Kc=new mn,dr=new b,Jf=new qt,ca=new b(1,0,0),gs=new b(0,1,0),la=new b(0,0,1),kc=new b,Ko=new b,Jo=new b;class pM extends vn{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class mM extends vn{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new yn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Mi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const l=e.clone();l.color.setHex(65280),l.opacity=.5;const d=e.clone();d.color.setHex(255),d.opacity=.5;const f=e.clone();f.opacity=.25;const u=e.clone();u.color.setHex(16776960),u.opacity=.25;const h=e.clone();h.color.setHex(16776960);const m=e.clone();m.color.setHex(7895160),this.materialLib={xAxis:s,yAxis:o,zAxis:a,active:h,xAxisTransparent:c,yAxisTransparent:l,zAxisTransparent:d,activeTransparent:u};const _=new ti(0,.04,.1,12);_.translate(0,.05,0);const g=new Tn(.08,.08,.08);g.translate(0,.04,0);const p=new kt;p.setAttribute("position",new Dt([0,0,0,1,0,0],3));const w=new ti(.0075,.0075,.5,3);w.translate(0,.25,0);function y(J,Y){const de=new xs(J,.0075,3,64,Y*Math.PI*2);return de.rotateY(Math.PI/2),de.rotateX(Math.PI/2),de}function v(){const J=new kt;return J.setAttribute("position",new Dt([0,0,0,1,1,1],3)),J}const C={X:[[new Ee(_,s),[.5,0,0],[0,0,-Math.PI/2]],[new Ee(_,s),[-.5,0,0],[0,0,Math.PI/2]],[new Ee(w,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Ee(_,o),[0,.5,0]],[new Ee(_,o),[0,-.5,0],[Math.PI,0,0]],[new Ee(w,o)]],Z:[[new Ee(_,a),[0,0,.5],[Math.PI/2,0,0]],[new Ee(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new Ee(w,a),null,[Math.PI/2,0,0]]],XYZ:[[new Ee(new ws(.1,0),f),[0,0,0]]],XY:[[new Ee(new Tn(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new Ee(new Tn(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new Tn(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},P={X:[[new Ee(new ti(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new Ee(new ti(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ee(new ti(.2,0,.6,4),i),[0,.3,0]],[new Ee(new ti(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ee(new ti(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new Ee(new ti(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Ee(new ws(.2,0),i)]],XY:[[new Ee(new Tn(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new Ee(new Tn(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new Tn(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},D={START:[[new Ee(new ws(.01,2),r),null,null,null,"helper"]],END:[[new Ee(new ws(.01,2),r),null,null,null,"helper"]],DELTA:[[new rn(v(),r),null,null,null,"helper"]],X:[[new rn(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new rn(p,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new rn(p,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},N={XYZE:[[new Ee(y(.5,1),m),null,[0,Math.PI/2,0]]],X:[[new Ee(y(.5,.5),s)]],Y:[[new Ee(y(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new Ee(y(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new Ee(y(.75,1),u),null,[0,Math.PI/2,0]]]},M={AXIS:[[new rn(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]]},S={XYZE:[[new Ee(new Jr(.25,10,8),i)]],X:[[new Ee(new xs(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Ee(new xs(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Ee(new xs(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Ee(new xs(.75,.1,2,24),i)]]},I={X:[[new Ee(g,s),[.5,0,0],[0,0,-Math.PI/2]],[new Ee(w,s),[0,0,0],[0,0,-Math.PI/2]],[new Ee(g,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Ee(g,o),[0,.5,0]],[new Ee(w,o)],[new Ee(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Ee(g,a),[0,0,.5],[Math.PI/2,0,0]],[new Ee(w,a),[0,0,0],[Math.PI/2,0,0]],[new Ee(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Ee(new Tn(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new Ee(new Tn(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new Tn(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ee(new Tn(.1,.1,.1),f)]]},F={X:[[new Ee(new ti(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new Ee(new ti(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ee(new ti(.2,0,.6,4),i),[0,.3,0]],[new Ee(new ti(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ee(new ti(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new Ee(new ti(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Ee(new Tn(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new Ee(new Tn(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ee(new Tn(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ee(new Tn(.2,.2,.2),i),[0,0,0]]]},V={X:[[new rn(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new rn(p,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new rn(p,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function G(J){const Y=new vn;for(const de in J)for(let q=J[de].length;q--;){const oe=J[de][q][0].clone(),xe=J[de][q][1],We=J[de][q][2],it=J[de][q][3],gt=J[de][q][4];oe.name=de,oe.tag=gt,xe&&oe.position.set(xe[0],xe[1],xe[2]),We&&oe.rotation.set(We[0],We[1],We[2]),it&&oe.scale.set(it[0],it[1],it[2]),oe.updateMatrix();const xt=oe.geometry.clone();xt.applyMatrix4(oe.matrix),oe.geometry=xt,oe.renderOrder=1/0,oe.position.set(0,0,0),oe.rotation.set(0,0,0),oe.scale.set(1,1,1),Y.add(oe)}return Y}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=G(C)),this.add(this.gizmo.rotate=G(N)),this.add(this.gizmo.scale=G(I)),this.add(this.picker.translate=G(P)),this.add(this.picker.rotate=G(S)),this.add(this.picker.scale=G(F)),this.add(this.helper.translate=G(D)),this.add(this.helper.rotate=G(M)),this.add(this.helper.scale=G(V)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Kc;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(un.setFromEuler(Nc.set(0,0,0)),o.quaternion.copy(i).multiply(un),Math.abs(Jt.copy(ca).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(un.setFromEuler(Nc.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(un),Math.abs(Jt.copy(gs).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(un.setFromEuler(Nc.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(un),Math.abs(Jt.copy(la).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(un.setFromEuler(Nc.set(0,Math.PI/2,0)),Jt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Kf.lookAt(Zf,Jt,gs)),o.quaternion.multiply(un),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),ni.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),ni.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(ni),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Jt.copy(ca).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Jt.copy(gs).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Jt.copy(la).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Jt.copy(la).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Jt.copy(ca).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Jt.copy(gs).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Uc.copy(i),Jt.copy(this.eye).applyQuaternion(un.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Kf.lookAt(this.eye,Zf,gs)),o.name==="X"&&(un.setFromAxisAngle(ca,Math.atan2(-Jt.y,Jt.z)),un.multiplyQuaternions(Uc,un),o.quaternion.copy(un)),o.name==="Y"&&(un.setFromAxisAngle(gs,Math.atan2(Jt.x,Jt.z)),un.multiplyQuaternions(Uc,un),o.quaternion.copy(un)),o.name==="Z"&&(un.setFromAxisAngle(la,Math.atan2(Jt.y,Jt.x)),un.multiplyQuaternions(Uc,un),o.quaternion.copy(un))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(c){return o.name===c})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}}class gM extends Ee{constructor(){super(new Qr(1e5,1e5,2,2),new yn({visible:!1,wireframe:!0,side:fn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),kc.copy(ca).applyQuaternion(t==="local"?this.worldQuaternion:Kc),Ko.copy(gs).applyQuaternion(t==="local"?this.worldQuaternion:Kc),Jo.copy(la).applyQuaternion(t==="local"?this.worldQuaternion:Kc),Jt.copy(Ko),this.mode){case"translate":case"scale":switch(this.axis){case"X":Jt.copy(this.eye).cross(kc),dr.copy(kc).cross(Jt);break;case"Y":Jt.copy(this.eye).cross(Ko),dr.copy(Ko).cross(Jt);break;case"Z":Jt.copy(this.eye).cross(Jo),dr.copy(Jo).cross(Jt);break;case"XY":dr.copy(Jo);break;case"YZ":dr.copy(kc);break;case"XZ":Jt.copy(Jo),dr.copy(Ko);break;case"XYZ":case"E":dr.set(0,0,0);break}break;default:dr.set(0,0,0)}dr.length()===0?this.quaternion.copy(this.cameraQuaternion):(Jf.lookAt(ni.set(0,0,0),dr,Jt),this.quaternion.setFromRotationMatrix(Jf)),super.updateMatrixWorld(e)}}function _M(n,e=!0){n.userData.terrainContours=!0,n.userData.contourSmoothing=e,n.onBeforeCompile=t=>{t.uniforms.contourWidth={value:n.userData.contourSmoothing?1.2:.8},t.vertexShader=`varying float vContourHeight;
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
    `)},n.customProgramCacheKey=()=>`terrain-contours-hillshade-${n.userData.contourSmoothing?1:0}`}const Fc=32,vM=.025,ur=vM;function bm(n,e){const t=new Sn,i=new yn({vertexColors:!0,transparent:!0,opacity:.88,side:fn,depthWrite:!0});e&&_M(i,e.smoothing);const r=[],s=new Ut,o=new Float32Array(n.size*n.size*3),a=new Uint32Array(n.size*n.size);let c=0,l=!1;for(let h=0;h<n.size-1;h+=Fc)for(let m=0;m<n.size-1;m+=Fc){const _=Math.min(n.size-1,m+Fc),g=Math.min(n.size-1,h+Fc),p=(_-m)*(g-h)*12*3,w=new Ui(new Float32Array(p),3).setUsage(sl),y=new Ui(new Float32Array(p),3).setUsage(sl),v=new kt;v.setAttribute("position",w),v.setAttribute("color",y);const C=-n.extent+m*n.spacing,P=-n.extent+_*n.spacing,D=-n.extentZ+h*n.spacingZ,N=-n.extentZ+g*n.spacingZ;v.boundingBox=new No(new b(C,0,D),new b(P,180,N)),v.boundingSphere=v.boundingBox.getBoundingSphere(new Uo);const M=new Ee(v,i);M.userData.terrainChunk={minX:m,maxX:_,minZ:h,maxZ:g},r.push({minX:m,maxX:_,minZ:h,maxZ:g,mesh:M,position:w,color:y}),t.add(M)}const d=(h,m)=>{const _=-n.extent+h*n.spacing,g=-n.extentZ+m*n.spacingZ,p=m*n.size+h,w=n.data[p];if(a[p]!==c){const y=Math.pow(jt.clamp(w/180,0,1),.65);s.setHSL(.57,.35*(1-y)+.06,.06+y*.68,fi),o[p*3]=s.r,o[p*3+1]=s.g,o[p*3+2]=s.b,a[p]=c}return{x:_,y:w,z:g,r:o[p*3],g:o[p*3+1],b:o[p*3+2]}},f=h=>{let m=0;const _=p=>{h.position.setXYZ(m,p.x,p.y,p.z),h.color.setXYZ(m++,p.r,p.g,p.b)},g=(p,w,y)=>{if(p.y>=ur&&w.y>=ur&&y.y>=ur){_(p),_(w),_(y);return}const v=[p,w,y],C=[];for(let P=0;P<3;P++){const D=v[P],N=v[(P+1)%3];if(D.y>=ur&&C.push(D),D.y>=ur!=N.y>=ur){const M=(ur-D.y)/(N.y-D.y),S=Math.pow(ur/180,.65);s.setHSL(.57,.35*(1-S)+.06,.06+S*.68,fi),C.push({x:D.x+(N.x-D.x)*M,y:ur,z:D.z+(N.z-D.z)*M,r:s.r,g:s.g,b:s.b})}}for(let P=1;P<C.length-1;P++)_(C[0]),_(C[P]),_(C[P+1])};for(let p=h.minZ;p<h.maxZ;p++)for(let w=h.minX;w<h.maxX;w++){const y=d(w,p),v=d(w+1,p),C=d(w+1,p+1),P=d(w,p+1);Math.max(y.y,v.y,C.y,P.y)<ur||(g(y,v,C),g(y,C,P))}h.mesh.geometry.setDrawRange(0,m),h.mesh.visible=m>0;for(const p of[h.position,h.color])m&&p.addUpdateRange(0,m*3),p.needsUpdate=!0},u=h=>{if(!l&&!(h&&![h.minX,h.maxX,h.minZ,h.maxZ].every(Number.isFinite))&&!(h&&(h.minX>h.maxX||h.minZ>h.maxZ))){c=c+1>>>0,c||(a.fill(0),c=1);for(const m of r)h&&(m.maxX<h.minX||m.minX>h.maxX||m.maxZ<h.minZ||m.minZ>h.maxZ)||f(m)}};return u(),{root:t,update:u,dispose(){if(!l){l=!0;for(const h of r)h.mesh.geometry.dispose();i.dispose(),t.removeFromParent(),t.clear()}}}}function xM(n,e){const t=bm(n,e);for(const i of t.root.children){const r=i,s=r.geometry.drawRange.count;for(const o of["position","color"]){const a=r.geometry.getAttribute(o);r.geometry.setAttribute(o,new Ui(a.array.slice(0,s*3),3))}r.geometry.setDrawRange(0,s)}return t.root}const yM=5,SM=vg,Ad=40,Qf=65;function bM(n){if(n<=Ad*tt)return 1;if(n>=Qf*tt)return 0;const e=(n/tt-Ad)/(Qf-Ad);return 1-e*e*(3-2*e)}const MM=`
  varying vec2 vMapPosition;
  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vMapPosition = worldPosition.xz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,wM=`
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
`;function EM(n,e){const t=new Qr(n*2,e*2);t.rotateX(-Math.PI/2);const i=new Pr({uniforms:{majorColor:{value:new Ut(16777215)},minorColor:{value:new Ut(16777215)},majorStep:{value:yM*tt},minorStep:{value:SM*tt},minorOpacity:{value:1}},vertexShader:MM,fragmentShader:wM,transparent:!0,depthWrite:!1,side:fn}),r=new Ee(t,i);return r.position.y=-2,r.renderOrder=-1,r}function Mm(n,e){n.material.uniforms.minorOpacity.value=bM(e)}const Rd=[{label:"N",degrees:0,x:0,z:-1},{label:"E",degrees:90,x:1,z:0},{label:"S",degrees:180,x:0,z:1},{label:"W",degrees:270,x:-1,z:0}];function TM(n){const e=new b(0,0,-1).transformDirection(n.matrixWorldInverse);return Math.atan2(-e.y,e.x)+Math.PI/2}function AM(n){const e=document.createElement("div");e.className="map-compass",e.setAttribute("aria-label","地图方向：正北0度，东90度，南180度，西270度");const t=document.createElement("div");t.className="map-compass-dial",e.append(t);const i=Rd.map(c=>{const l=document.createElement("span");return l.className=`compass-${c.label.toLowerCase()}`,l.textContent=c.label,l.title=`${c.label} ${c.degrees}°`,t.append(l),l}),r=document.createElement("small");r.textContent="N = 0°",e.append(r),n.append(e);const s=Rd.map(c=>{const l=document.createElement("span");return l.className="map-cardinal",l.textContent=c.label,l.setAttribute("aria-label",`${c.label} ${c.degrees}°`),n.append(l),l}),o=new b;let a=NaN;return{update(c,l,d,f,u){c.updateMatrixWorld();const h=TM(c);(Math.abs(h-a)>1e-4||!Number.isFinite(a))&&(t.style.transform=`rotate(${h}rad)`,i.forEach(m=>{m.style.transform=`translate(-50%,-50%) rotate(${-h}rad)`}),a=h),Rd.forEach((m,_)=>{const g=s[_];o.set(m.x*f,.2,m.z*u).project(c);const p=Number.isFinite(o.x)&&Number.isFinite(o.y)&&o.z>=-1&&o.z<=1&&Math.abs(o.x)<1.1&&Math.abs(o.y)<1.1;g.hidden=!p,p&&(g.style.left=`${Math.max(14,Math.min(l-14,(o.x+1)*l/2))}px`,g.style.top=`${Math.max(14,Math.min(d-14,(1-o.y)*d/2))}px`)})},dispose(){e.remove(),s.forEach(c=>c.remove())}}}const Cd=21,RM=7,ep=14;function wm(n){const e=[],t=(r,s,o,a)=>{e.push(new b(r,s,0),new b(o,a,0))};for(const r of[Cd,RM])t(-r,-r,r,-r),t(r,-r,r,r),t(r,r,-r,r),t(-r,r,-r,-r);for(const r of[-1,1])for(const s of[-1,1])t(r*Cd,s*Cd,r*ep,s*ep);const i=new w_(new kt().setFromPoints(e),new Mi({color:n,transparent:!0,opacity:.9,depthTest:!1}));return i.name="escort-marker",i.visible=!1,i}const Oc=25,zc=80,Qo=1;function CM(n,e){if(Number.isNaN(n))return e??1;const t=Math.max(0,n/tt);return e===1?t>=zc+6?3:t>=Oc+2?2:1:e===2?t<=Oc-2?1:t>=zc+6?3:2:e===3?t<=Oc-2?1:t<=zc-6?2:3:t<Oc?1:t<zc?2:3}const ga=(n,e)=>n<e?-1:n>e?1:0,PM=new Intl.Collator("en",{sensitivity:"variant"}),DM=n=>n.icon==="air-filled"||n.icon==="air-outline",Em=n=>n.status==="active"&&n.tgt===!0,Tm=n=>n.status==="active"&&n.escort===!0&&n.faction!=="enemy",tp=n=>Em(n)||Tm(n)?1:0;function np(n){const e={x:0,y:0,z:0};for(const u of n)e.x+=u.position.x/n.length,e.y+=u.position.y/n.length,e.z+=u.position.z/n.length;const t=u=>Math.hypot(u.position.x-e.x,u.position.y-e.y,u.position.z-e.z);let i=n[0],r=t(i),s,o=1/0;const a=new Map;let c=!1,l=!1;for(const u of n){const h=t(u),m=tp(u)-tp(i);(m>0||m===0&&(h<r||h===r&&ga(u.id,i.id)<0))&&(i=u,r=h),DM(u)&&(!s||h<o||h===o&&ga(u.id,s.id)<0)&&(s=u,o=h),a.set(u.label,(a.get(u.label)??0)+1),c||=Em(u),l||=Tm(u)}const d=[...a.keys()].filter(u=>u!==i.label).sort((u,h)=>PM.compare(u,h)||ga(u,h)),f=[i.label,...d].map(u=>{const h=a.get(u);return h>1?`${u} ×${h}`:u}).join(`
`);return{representativeId:i.id,memberIds:n.map(u=>u.id),label:f,hasTgt:c,hasEscort:l,...s?{airRepresentativeId:s.id}:{}}}function LM(n,e){const t=[...n].sort((d,f)=>ga(d.id,f.id));if(e===1)return t.map(d=>np([d]));const i=e===2?54:68,r=i*i,s=Qo*Qo,o=new Map,a=[],c=(d,f,u,h)=>`${d}:${f}:${u}:${h}`,l=(d,f)=>`${d}:${f}`;for(const d of t){if(d.status!=="active"||!d.onScreen||!Number.isFinite(d.screenX)||!Number.isFinite(d.screenY)||!Number.isFinite(d.position.x)||!Number.isFinite(d.position.y)||!Number.isFinite(d.position.z)){a.push({seed:d,members:[d]});continue}const f=Math.floor(d.position.x/Qo),u=Math.floor(d.position.y/Qo),h=Math.floor(d.position.z/Qo),m=Math.floor(d.screenX/i),_=Math.floor(d.screenY/i);let g;for(let p=-1;p<=1;p++)for(let w=-1;w<=1;w++)for(let y=-1;y<=1;y++){const v=o.get(c(d.faction,f+p,u+w,h+y));if(v)for(let C=-1;C<=1;C++)for(let P=-1;P<=1;P++){const D=v.get(l(m+C,_+P));if(D)for(const N of D){const M=d.position.x-N.seed.position.x,S=d.position.y-N.seed.position.y,I=d.position.z-N.seed.position.z;if(M*M+S*S+I*I>s)continue;const F=d.screenX-N.seed.screenX,V=d.screenY-N.seed.screenY;F*F+V*V<=r&&(!g||ga(N.seed.id,g.seed.id)<0)&&(g=N)}}}if(g)g.members.push(d);else{const p={seed:d,members:[d]};a.push(p);const w=c(d.faction,f,u,h);let y=o.get(w);y||(y=new Map,o.set(w,y));const v=l(m,_),C=y.get(v);C?C.push(p):y.set(v,[p])}}return a.map(d=>np(d.members))}const Bc=12,ip=.675,IM=.15,NM=5e3;function Pd(n,e){const t=Number.isFinite(e)&&e>0?e:Bc*ip/12,i=n===1?Math.min(24*t/Bc,Math.max(10*t/Bc,ip)):(n===2?15:17)*t/Bc;return Math.min(NM,Math.max(IM,i))}function UM(n){const e=new Sn;e.name="far-air-display",e.visible=!1;const t=new Ee(new Rl(2.2,3.3,20),new yn({color:n,transparent:!0,opacity:.8,side:fn,depthTest:!1}));t.rotation.x=-Math.PI/2;const i=new rn(new kt().setFromPoints([new b(0,.2,0),new b(0,1,0)]),new Mi({color:n,transparent:!0,opacity:.8,depthTest:!1})),r=Array.from({length:65},(a,c)=>{const l=c/64*Math.PI*2;return new b(Math.cos(l)*7.2,Math.sin(l)*7.2,0)}),s=new rn(new kt().setFromPoints(r),new Mi({color:n,transparent:!0,opacity:.9,depthTest:!1})),o=wm(n);return t.add(s,o),e.add(t,i),{root:e,base:t,pole:i,tgt:s,escort:o}}function kM(n,e,t){const{tier:i,representative:r,status:s,scale:o}=t,a=s!=="wreck",c=n.base!==null;n.base&&(n.base.visible=r&&a&&i!==3,n.base.scale.setScalar((t.baseScale??o)/.675)),n.icon.visible=r&&a,n.icon.scale.setScalar(o),n.icon.position.y=t.iconHeight,n.pole.visible=r&&a&&i!==3,n.pole.userData.naturalTop=t.poleHeight,n.wreck.visible=r&&s!=="active",n.wreck.scale.setScalar(o/.675),e.root.visible=r&&s==="active"&&i===3&&t.hasAir,e.base.scale.setScalar((t.farBaseScale??o)/.675),e.base.position.y=1.5,e.tgt.scale.setScalar(.675),e.escort.scale.setScalar(.675),e.tgt.visible=t.hasTgt&&!c,e.escort.visible=t.hasEscort&&!c&&t.faction!=="enemy";const l=e.pole.geometry.getAttribute("position"),d=Math.max(t.airAltitude,.6);e.pole.userData.naturalTop=d,l.getY(1)!==d&&(l.setY(1,d),l.needsUpdate=!0,e.pole.geometry.computeBoundingSphere()),n.label.position.y=i===3?t.hasAir?d:1.5:t.poleHeight;const f=n.label.userData.dom;f.textContent!==t.label&&(f.textContent=t.label),f.style.whiteSpace="pre",f.style.fontSize=i===1?"14px":i===2?"13px":"12px",f.style.lineHeight="1.15";const u=r&&n.labelFade>0&&(i!==3||t.faction==="squadron");f.hidden=!u,n.label.userData.displayVisible=u}const FM=[[-5,-5],[0,7],[5,-5]],OM=[[-4,-4],[-4,2],[0,6],[4,2],[4,-4]],zM=[[-4,-4],[-4,4],[4,4],[4,-4]],BM=[[0,5.8],[-3.25,-3.1],[3.25,-3.1]];function rp(n){const e=new cm;e.moveTo(n[0][0],n[0][1]);for(const[t,i]of n.slice(1))e.lineTo(t,i);return e.closePath(),new lh(e)}function Dd(n,e){return new yn({color:n,transparent:!0,opacity:e,side:fn,depthTest:!1,depthWrite:!1})}function HM(n,e){const t=new Sn,i=n==="ground"?zM:n==="ship"?OM:FM,r=new rn(new kt().setFromPoints(i.map(([o,a])=>new b(o,a,0))),new Mi({color:e,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1}));if(r.name="outline",t.add(r),n==="air-filled"){const o=new Ee(rp(BM),Dd(e,.9));o.name="filledinner",t.add(o)}else if(n==="air-outline"){const o=new Ee(new Ta(.65,32),Dd(e,.9));o.name="dot",o.position.y=-.3,t.add(o)}const s=new Ee(rp(i),Dd(e,0));return s.name="pickmesh",t.add(s),t}function zs(n){return!n.intangible&&(n.icon==="ground"||n.icon==="ship")}function Ya(n,e,t){return new b(e.x,zs(n)?t(e.x,e.z):e.y,e.z)}function Pl(n,e,t,i){const r=Ya(n,e,t);return n.intangible||(r.y=zs(n)?r.y+i:Math.max(r.y,t(r.x,r.z)+i)),r}const Jc=8,dl=1e-9,so=new b,Hi=new b,An=new b,ea=new b,hi=new b,ps=new b,Ld=new b,Qi=new Ft,Tr=new qt,Id=new qt,_o=Array.from({length:8},()=>new Ft),VM=Array.from({length:16},()=>new Ft),GM=Array.from({length:16},()=>new Ft),WM=[0,1,2],sp=[0,1],XM=[0],Hc=new Ft,Vc=new Ft;function Pa(n,e){switch(e){case 0:return n.w+n.x;case 1:return n.w-n.x;case 2:return n.w+n.y;case 3:return n.w-n.y;case 4:return n.w+n.z;default:return n.w-n.z}}function ul(n,e,t){if(!Number.isFinite(e.w)||e.w<=0)return;const i=(e.x/e.w+1)*t.width/2,r=(1-e.y/e.w)*t.height/2;!Number.isFinite(i)||!Number.isFinite(r)||(n.left=Math.min(n.left,i),n.right=Math.max(n.right,i),n.top=Math.min(n.top,r),n.bottom=Math.max(n.bottom,r))}function op(n,e,t){let i=VM,r=GM,s=n.length;n.forEach((o,a)=>i[a].copy(_o[o]));for(let o=0;o<6&&s;o++){let a=0;for(let c=0;c<s;c++){const l=i[(c+s-1)%s],d=i[c],f=Pa(l,o),u=Pa(d,o);f>=0!=u>=0&&r[a++].copy(l).lerp(d,f/(f-u)),u>=0&&r[a++].copy(d)}s=a,[i,r]=[r,i]}for(let o=0;o<s;o++)ul(e,i[o],t)}function ap(n,e,t){Hc.set(n.x,n.y,n.z,1).applyMatrix4(Tr),Vc.set(e.x,e.y,e.z,1).applyMatrix4(Tr);let i=0,r=1;for(let o=0;o<6;o++){const a=Pa(Hc,o),c=Pa(Vc,o);if(!Number.isFinite(a)||!Number.isFinite(c)||a<0&&c<0)return null;if(a>=0!=c>=0){const l=a/(a-c);a<0?i=Math.max(i,l):r=Math.min(r,l)}}if(i>r)return null;const s={left:1/0,right:-1/0,top:1/0,bottom:-1/0};return Qi.copy(Hc).lerp(Vc,i),ul(s,Qi,t),Qi.copy(Hc).lerp(Vc,r),ul(s,Qi,t),Number.isFinite(s.right)?s:null}function hl(n){return Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z)}function uo(n,e){const{camera:t,width:i,height:r}=e;Ld.copy(n).applyMatrix4(t.matrixWorldInverse);const s=-Ld.z;if(!hl(Ld)||s<t.near||s>t.far||(ps.copy(n).project(t),!hl(ps)||ps.z<-1-dl||ps.z>1+dl))return null;const o=(ps.x+1)*i/2,a=(1-ps.y)*r/2;return Number.isFinite(o)&&Number.isFinite(a)?{x:o,y:a,z:ps.z}:null}function Am(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function hh(n){if(!n)return!1;const e=t=>t.visible&&t.opacity>0;return Array.isArray(n)?n.some(e):e(n)}function qM(n,e,t){const i=n.geometry,r=i.getAttribute("position"),s=i.index;if(!r)return;const o=s?.count??r.count,a=n.isMesh,c=n.isPoints,l=a?WM:c?XM:sp,d=a?3:c||!n.isLineSegments?1:2,f=Array.isArray(n.material)?i.groups:[{start:0,count:o,materialIndex:0}];for(const u of f){const h=Array.isArray(n.material)?n.material[u.materialIndex??0]:n.material;if(!hh(h))continue;const m=Math.max(u.start,i.drawRange.start),_=Math.min(o,u.start+u.count,i.drawRange.start+i.drawRange.count);for(let g=m;g+l.length<=_;g+=d){let p=!0;for(let w=0;w<l.length;w++){hi.fromBufferAttribute(r,s?s.getX(g+w):g+w).applyMatrix4(n.matrixWorld);const y=_o[w].set(hi.x,hi.y,hi.z,1).applyMatrix4(Tr);if(!Number.isFinite(y.x)||!Number.isFinite(y.y)||!Number.isFinite(y.z)||!Number.isFinite(y.w)){p=!1;break}}p&&op(l,e,t)}}if(n.isLineLoop&&o>1&&!Array.isArray(n.material)&&i.drawRange.start===0&&i.drawRange.count>=o){let u=!0;for(const[h,m]of[[0,o-1],[1,0]]){hi.fromBufferAttribute(r,s?s.getX(m):m).applyMatrix4(n.matrixWorld);const _=_o[h].set(hi.x,hi.y,hi.z,1).applyMatrix4(Tr);(!Number.isFinite(_.x)||!Number.isFinite(_.y)||!Number.isFinite(_.z)||!Number.isFinite(_.w))&&(u=!1)}u&&op(sp,e,t)}}function $M(n){if(!Am(n.icon))return null;const e={left:1/0,right:-1/0,top:1/0,bottom:-1/0};return n.icon.traverseVisible(t=>{const i=t;if(!i.geometry||!hh(i.material))return;const r=i.geometry;r.boundingBox||r.computeBoundingBox();const s=r.boundingBox;if(!s||s.isEmpty())return;for(let a=0;a<8;a++){if(hi.set(a&1?s.max.x:s.min.x,a&2?s.max.y:s.min.y,a&4?s.max.z:s.min.z).applyMatrix4(t.matrixWorld),!hl(hi))return;const c=_o[a].set(hi.x,hi.y,hi.z,1).applyMatrix4(Tr);if(!Number.isFinite(c.x)||!Number.isFinite(c.y)||!Number.isFinite(c.z)||!Number.isFinite(c.w))return}let o=!0;for(let a=0;a<6;a++){let c=0;for(const l of _o)Pa(l,a)>=0&&c++;if(!c)return;c<8&&(o=!1)}if(o)for(const a of _o)ul(e,a,n);else qM(i,e,n)}),Number.isFinite(e.right)?e:null}function YM(n){const e=typeof getComputedStyle=="function"?getComputedStyle(n):n.style,t=d=>{const f=Number.parseFloat(d??"");return Number.isFinite(f)?f:0},i=t(e.fontSize)||t(n.style.fontSize),r=i>0?i:14,s=e.lineHeight||n.style.lineHeight,o=t(s),a=o>0?/^[\d.]+$/.test(s)?o*r:o:r*1.15,c=Number.isFinite(a)&&a>0?a:14*1.15;let l=Number(n.offsetHeight);if(!Number.isFinite(l)||l<=0){const d=typeof n.getBoundingClientRect=="function"?n.getBoundingClientRect():null;l=d?Number(d.height??d.bottom-d.top):0}return(!Number.isFinite(l)||l<=0)&&(l=Math.max(1,(n.textContent??"").split(`
`).length)*c+t(e.paddingTop)+t(e.paddingBottom)),{height:Number.isFinite(l)&&l>0?l:c,lineHeight:c}}function Nd(n,e){const t=n.geometry.getAttribute("position");if(!t||t.count<2||!hl(e))return!1;const i=t.array instanceof Float32Array?Math.fround:a=>a,r=i(e.x),s=i(e.y),o=i(e.z);return!Number.isFinite(r)||!Number.isFinite(s)||!Number.isFinite(o)?!1:(t.getX(1)===r&&t.getY(1)===s&&t.getZ(1)===o||(t.setXYZ(1,r,s,o),t.needsUpdate=!0,n.geometry.boundingBox&&n.geometry.computeBoundingBox(),n.geometry.computeBoundingSphere()),!0)}function jM(n,e,t){Qi.set(Hi.x,Hi.y,Hi.z,1).applyMatrix4(Tr);const i=Qi.w,r=Tr.elements,s=1-t*2/n.height,o=r[5]-s*r[7];if(!Number.isFinite(o)||Math.abs(o)<dl)return!1;const a=(s*Qi.w-Qi.y)/o,c=e.y-t,l=2*i/(n.camera.projectionMatrix.elements[5]*n.height),d=Math.max(Hi.distanceTo(so),l*Math.max(1,c))*4;if(!Number.isFinite(a)||a<=0||a>d||(An.copy(Hi),An.y+=a,Qi.set(An.x,An.y,An.z,1).applyMatrix4(Tr),Qi.w<i/2||Qi.w>i*2))return!1;const f=uo(An,n),u=Math.max(Jc,Math.min(n.width/4,c));return!!f&&Math.abs(f.y-t)<.01&&Math.abs(f.x-e.x)<=u}function ZM(n,e,t){An.set(e.x*2/n.width-1,1-t*2/n.height,e.z).unproject(n.camera);const i=uo(An,n);return!!i&&Math.abs(i.y-t)<.01}function KM(n){const{camera:e,width:t,height:i,group:r,icon:s,pole:o,dom:a,isAir:c,isMerged:l,visible:d}=n,f=Number.isFinite(n.naturalTop)?n.naturalTop:.6,u=o.geometry.getAttribute("position");u&&u.count>0?so.fromBufferAttribute(u,0).applyMatrix4(o.matrixWorld):so.set(0,.2,0).applyMatrix4(r.matrixWorld),Hi.set(0,f,0).applyMatrix4(r.matrixWorld),An.copy(Hi),a.style.transform="translate(0, 0)";const h=Number.isFinite(t)&&t>0&&Number.isFinite(i)&&i>0;Tr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse);const m=h?uo(so,n):null,_=h?uo(Hi,n):null,g=YM(a),p=Am(o)&&hh(o.material)&&!!u&&u.count>=2,w=h?$M(n):null,y=h&&p?ap(so,Hi,n):null,v=d&&!a.hidden&&!!(w||y);if(v&&l&&p&&u&&u.count>=2&&m&&_&&Math.abs(m.y-_.y)<g.height){const de=m.y-g.height-.1;!jM(n,_,de)&&!ZM(n,_,de)&&An.copy(Hi)}const C=o.matrixWorld.determinant();Number.isFinite(C)&&Math.abs(C)>dl?(Id.copy(o.matrixWorld).invert(),ea.copy(An).applyMatrix4(Id),Nd(o,ea)||(An.copy(Hi),ea.copy(Hi).applyMatrix4(Id),Nd(o,ea))):Nd(o,ea.set(0,f,0));const P=o.userData.labelDisplayTop;if(P?(P.x=An.x,P.y=An.y,P.z=An.z):o.userData.labelDisplayTop={x:An.x,y:An.y,z:An.z},!h)return a.style.left="0px",a.style.top="0px",!1;const D=uo(An,n)??_;hi.setFromMatrixPosition(s.matrixWorld);const N=uo(hi,n),M=N?.x??D?.x??m?.x??t/2,S=p?ap(so,An,n):null;let I=w?.right??S?.right??M;S&&(I=Math.max(I,S.right)),Number.isFinite(I)||(I=M);let F=D?.y??N?.y??m?.y??i/2;l&&p&&m&&D?F=Math.min(m.y,D.y):c&&!l&&(F=(N?.y??F)-g.lineHeight/2);const V=w??S;v&&V&&(!Number.isFinite(F)||F<0||F>i-g.height)&&(F=V.top);const G=Number(a.offsetWidth),J=Number.isFinite(G)&&G>0?G:0,Y=v?Math.max(0,Math.min(t-J-Jc,I+Jc)):I+Jc;return v&&(F=Math.max(0,Math.min(i-g.height,F))),a.style.left=`${Y}px`,a.style.top=`${F}px`,v}function fh(n="mouse",e=!1){return n==="touch"||n==="pen"||e?32:14}function JM(n,e,t,i,r){if(![n.x,n.y,n.z,e.left,e.top,e.width,e.height,t,i,r].every(Number.isFinite)||e.width<=0||e.height<=0||r<0||n.z<-1||n.z>1)return null;const s=e.left+(n.x+1)*e.width/2,o=e.top+(1-n.y)*e.height/2;return s<e.left-r||s>e.left+e.width+r||o<e.top-r||o>e.top+e.height+r?null:Math.hypot(s-t,o-i)}function QM(n,e,t,i=0){return[n.left,n.right,n.top,n.bottom,e,t,i].every(Number.isFinite)&&n.right>n.left&&n.bottom>n.top&&i>=0&&e>=n.left-i&&e<=n.right+i&&t>=n.top-i&&t<=n.bottom+i}const cp=new Set(["markers","drawing","links","range","layers"]),lp=new Set(["units","equipment","groups","routes","links"]),Ud=[{id:"units",label:"单位",title:"单位与空间编辑"},{id:"equipment",label:"装备",title:"机体与武器挂载"},{id:"groups",label:"编组",title:"编组与批量调度"},{id:"routes",label:"航路",title:"航路、绑定与航迹"},{id:"markers",label:"标记",title:"自定义地图点位"},{id:"drawing",label:"作图",title:"标尺、圆规与范围规划"},{id:"links",label:"连线",title:"单位与标记连线"},{id:"terrain",label:"地形",title:"画布、地形与城区"},{id:"range",label:"距离",title:"距离判定与三维范围"},{id:"turns",label:"回合",title:"回合草稿与战斗结果"},{id:"layers",label:"图层",title:"地图显示与航迹图层"},{id:"project",label:"存档",title:"工程保存、导入与恢复"}];function ew(n){const e=document.querySelector("#app"),t=document.querySelector("#edit-panel");if(!e||!t)throw new Error("Editor sidebar requires the existing workspace shell");if(t.dataset.sidebarMounted)throw new Error("Editor sidebar is already mounted");const i=(ie,Ne="")=>{const Fe=document.createElement(ie);return Fe.textContent=Ne,Fe},r=(ie,Ne,Fe)=>{const ht=i("button",ie);return ht.type="button",Fe&&(ht.id=Fe),ht.addEventListener("click",Ne),ht},s=ie=>{const Ne=document.querySelector(ie);if(!Ne)throw new Error(`Missing sidebar source control: ${ie}`);return Ne},o=s("#unit-editor"),a=s("#terrain-editor"),c=s("#route-section"),l=s("#archive-panel"),d=s("#workflow-panel"),f=s("#tab-units").parentElement,u=s(".selection-panel"),h=s(".event-panel"),m=s(".range-panel"),_=s(".trail-panel"),g=document.createComment("archive-manager-portal");l.before(g);const p=i("div"),y=s("#edit-add").closest(".edit-actions").previousElementSibling;for(;o.firstChild&&o.firstChild!==y;)p.append(o.firstChild);c.remove(),o.querySelectorAll(":scope > .rule").forEach(ie=>ie.remove());const v=Array.from(o.children),C=s("#edit-label").closest("label"),P=s("#tool-move").closest(".edit-actions"),D=v.indexOf(C),N=v.indexOf(P),M=(ie,Ne,Fe)=>{const ht=i("details");return ht.className="sidebar-submenu",ht.open=Fe,ht.append(i("summary",ie)),ht.append(...Ne),ht};o.replaceChildren(M("单位与选择",v.slice(0,D),!0),M("属性与战损",v.slice(D,N),!1),M("位置、姿态与吸附",v.slice(N),!0)),a.querySelector(":scope > .eyebrow")?.remove();const S=Array.from(a.children),I=S.indexOf(s("#terrain-brush").closest("label")),F=S.indexOf(s("#terrain-preset").closest("label")),V=s("#terrain-undo").closest(".edit-actions"),G=S.indexOf(V);a.replaceChildren(M("画布尺寸与采样",S.slice(0,I),!1),M("笔刷、城区与等高线",S.slice(I,F),!0),M("地形生成与重置",S.slice(F,G),!1),...S.slice(G)),t.replaceChildren(),t.classList.add("editor-sidebar"),t.dataset.sidebarMounted="true",t.hidden=!1,e.classList.add("editor-sidebar-mounted"),t.setAttribute("aria-label","场景编辑器");const J=i("header");J.className="sidebar-header";const Y=i("div");Y.className="sidebar-title-row";const de=i("strong","场景编辑器"),q=i("span","浏览");q.id="editor-sidebar-state",q.className="sidebar-state",q.setAttribute("role","status"),Y.append(de,q);const oe=i("div");oe.className="sidebar-toolbar";const xe=r("进入编辑",()=>{we.editable&&n.toggleEdit()},"sidebar-toggle-edit"),We=r("全图",()=>n.fitMap(),"sidebar-fit-map");We.title="适配整个地图及当前单位";const it=r("俯视",()=>n.topView(),"sidebar-top-view");it.title="切换地图俯视视角";let gt=!1;const xt=r("收起",()=>ge(!gt),"sidebar-collapse");oe.append(xe,We,it,xt);const Q=i("div");Q.className="sidebar-quick-actions";const Te=r("保存修订",()=>{if(we.playerView)return;const ie=ye();ie&&!ie.disabled&&ie.click()},"sidebar-quick-save"),se=r("提交回合",()=>{if(we.playerView)return;re("turns");const ie=document.querySelector("#workflow-commit");ie&&!ie.disabled&&ie.click()},"sidebar-quick-commit"),je=r("另存为…",()=>{we.playerView||(re("turns"),document.querySelector("#editor-save-as-name")?.focus())},"sidebar-quick-save-as"),ne=r("生成快照",()=>{if(we.playerView)return;const ie=document.querySelector("#workflow-snapshot");ie&&!ie.disabled&&!ie.hidden&&ie.click()},"sidebar-quick-snapshot");Q.append(Te,je,se,ne);const fe=i("div");fe.className="sidebar-viewer-toolbar";const ee=r("导出查看器",()=>{we.playerView&&n.viewerExport?.()},"sidebar-viewer-export"),te=r("撤销",()=>{we.playerView&&we.editable&&we.viewerCanUndo&&n.viewerUndo?.()},"sidebar-viewer-undo"),R=r("重做",()=>{we.playerView&&we.editable&&we.viewerCanRedo&&n.viewerRedo?.()},"sidebar-viewer-redo");fe.append(ee,te,R),J.append(Y,oe,Q,fe);const me=i("nav");me.className="sidebar-nav",me.setAttribute("role","tablist"),me.setAttribute("aria-label","编辑工具菜单"),me.setAttribute("aria-orientation","vertical");const ue=i("div");ue.className="sidebar-content",ue.id="editor-sidebar-content";const He=new Map,pe=new Map,Ie=new Map,ae=new Map;let Ae="units",we={editing:!1,editable:!0,mapOnly:!1},Ce,A=!1,x=0;const O=ie=>we.playerView?cp.has(ie):!(we.mapOnly&&lp.has(ie));for(const ie of Ud){const Ne=r(ie.label,()=>re(ie.id),`sidebar-tab-${ie.id}`);Ne.title=ie.title,Ne.setAttribute("role","tab"),Ne.setAttribute("aria-controls",`sidebar-panel-${ie.id}`),Ne.dataset.sidebarTab=ie.id,Ie.set(ie.id,Ne),me.append(Ne);const Fe=i("section");Fe.id=`sidebar-panel-${ie.id}`,Fe.className="sidebar-tab-panel",Fe.setAttribute("role","tabpanel"),Fe.setAttribute("aria-labelledby",Ne.id);const ht=i("h2",ie.title);ht.className="sidebar-panel-heading";const Mt=i("div");Mt.className="sidebar-panel-body",Mt.dataset.sidebarPanel=ie.id,Fe.append(ht,Mt),He.set(ie.id,Fe),pe.set(ie.id,Mt),ue.append(Fe)}o.hidden=!1,a.hidden=!1,pe.get("units").append(u,o),pe.get("terrain").append(a),pe.get("turns").append(d,p,h),c.open=!0;const Z=c.querySelector(":scope > summary"),X=Array.from(c.children).filter(ie=>ie!==Z),W=X.indexOf(c.querySelector("#route-list")),ke=X.indexOf(c.querySelector("#track-edit").closest(".edit-actions"));c.replaceChildren(Z,M("航路设置与选中单位绑定",X.slice(0,W),!0),M("航路点与顺序",X.slice(W,ke),!0),M("航迹曲线与控制点",X.slice(ke),!1)),pe.get("routes").append(c);const _e=i("section");_e.className="sidebar-card",_e.append(i("h3","当前航路的绑定对象"));const $e=i("div");$e.id="route-bindings",$e.className="sidebar-bound-list",$e.setAttribute("aria-live","polite"),$e.textContent="当前航路暂无绑定对象";const Ye=i("div");Ye.className="edit-actions";const be=i("button","选中全部绑定单位");be.type="button",be.id="route-select-bound",Ye.append(be);const Pe=i("label");Pe.className="edit-row",Pe.append(i("span","编组"));const Ze=i("select");Ze.id="route-group-select",Ze.setAttribute("aria-label","绑定至当前航路的编组"),Ze.add(new Option("选择编组","")),Pe.append(Ze);const Ke=i("button","将编组绑定当前航路");Ke.type="button",Ke.id="route-bind-group";const Re=i("div");Re.className="edit-actions",Re.append(Ke),_e.append($e,Ye,Pe,Re),pe.get("routes").append(_e),pe.get("range").append(m),pe.get("layers").append(_);const mt=i("section");mt.className="sidebar-card",mt.append(i("h3","航路显示"));const U=(ie,Ne)=>{const Fe=i("label");Fe.className="check-row";const ht=i("input");return ht.id=ie,ht.type="checkbox",ht.checked=!0,Fe.append(ht,document.createTextNode(Ne)),Fe};mt.append(U("route-visible","显示所有航路与航路点"),U("route-labels","显示航路点名称与绑定对象")),pe.get("layers").append(mt),pe.get("project").append(l),f.hidden=!0,f.classList.add("sidebar-legacy-tabs"),t.append(J,me,ue,f);function ye(){return["#task-editor-save","#map-editor-save","#workflow-save-draft"].map(ie=>document.querySelector(ie)).find(ie=>ie&&!ie.hidden)}function Se(){if(we.playerView){Q.hidden=!0;for(const Mt of[Te,je,se,ne])Mt.hidden=!0,Mt.disabled=!0;return}const ie=ye(),Ne=document.querySelector("#workflow-commit");Te.hidden=!ie,Te.disabled=!ie||ie.disabled,Te.textContent=ie?.id==="workflow-save-draft"?"保存草稿":ie?.id==="map-editor-save"?"保存地图修订":"保存任务修订",se.hidden=!Ne||Ne.hidden||Ne.disabled,se.disabled=!Ne||Ne.disabled;const Fe=["#map-editor-save-as","#task-editor-save-as"].map(Mt=>document.querySelector(Mt)).find(Mt=>Mt&&!Mt.hidden);je.hidden=!Fe,je.disabled=!Fe||Fe.disabled;const ht=document.querySelector("#workflow-snapshot");ne.hidden=!ht||ht.hidden,ne.disabled=!ht||ht.disabled,Q.hidden=Te.hidden&&je.hidden&&se.hidden&&ne.hidden}function Xe(){for(const Ne of Ud){const Fe=O(Ne.id),ht=Fe&&Ne.id===Ae,Mt=Ie.get(Ne.id);Mt.hidden=!!we.playerView&&!Fe,Mt.disabled=!Fe,Mt.setAttribute("aria-selected",String(ht)),Mt.tabIndex=ht?0:-1,He.get(Ne.id).hidden=!ht}const ie=we.playerView?"玩家查看器":"场景编辑器";de.textContent=ie,t.setAttribute("aria-label",ie),me.setAttribute("aria-label",we.playerView?"标注工具菜单":"编辑工具菜单"),t.dataset.activeTab=Ae,t.dataset.playerView=String(!!we.playerView),t.dataset.editing=String(we.editing),t.dataset.editable=String(we.editable),t.dataset.active=String(we.active!==!1),q.textContent=we.playerView?we.editing?"标注中":"浏览":we.editable?we.editing?"编辑中":"浏览":"只读历史",xe.textContent=we.playerView?we.editing?"结束标注":"编辑标注":we.editing?"退出编辑":"进入编辑",xe.disabled=!we.editable,mt.hidden=!!we.playerView,ee.hidden=!we.playerView,ee.disabled=!we.playerView||!n.viewerExport,te.hidden=!we.playerView||!n.viewerUndo,R.hidden=!we.playerView||!n.viewerRedo,te.disabled=!we.playerView||!we.editable||!we.viewerCanUndo||!n.viewerUndo,R.disabled=!we.playerView||!we.editable||!we.viewerCanRedo||!n.viewerRedo,fe.hidden=!we.playerView,Se()}function ge(ie){gt=ie,t.dataset.collapsed=String(ie),xt.textContent=ie?"展开":"收起",xt.setAttribute("aria-expanded",String(!ie))}function re(ie){const Fe={unit:"units",route:"routes",group:"groups",marker:"markers",draw:"drawing",turn:"turns",archive:"project"}[ie]??ie;!He.has(Fe)||!O(Fe)||(ae.set(Ae,ue.scrollTop),Ae=Fe,ge(!1),Xe(),ue.scrollTop=ae.get(Fe)??0,n.chooseTool(Fe))}me.addEventListener("keydown",ie=>{if(!["ArrowUp","ArrowDown","Home","End"].includes(ie.key))return;const Ne=Ud.filter(Mt=>O(Mt.id)&&!Ie.get(Mt.id).hidden&&!Ie.get(Mt.id).disabled),Fe=Ne.findIndex(Mt=>Ie.get(Mt.id)===document.activeElement);if(Fe<0)return;ie.preventDefault();const ht=ie.key==="Home"?Ne[0]:ie.key==="End"?Ne.at(-1):Ne[(Fe+(ie.key==="ArrowDown"?1:-1)+Ne.length)%Ne.length];re(ht.id),Ie.get(ht.id).focus()});const qe=()=>{!we.playerView&&e.dataset.workspace==="manager"?l.parentNode!==e&&(g.parentNode===e?e.insertBefore(l,g.nextSibling):e.append(l),l.open=!1):(l.parentNode!==pe.get("project")&&pe.get("project").append(l),l.open=!0)};return new MutationObserver(qe).observe(e,{attributes:!0,attributeFilter:["data-workspace"]}),new MutationObserver(Se).observe(d,{subtree:!0,attributes:!0,attributeFilter:["hidden","disabled"]}),ge(!1),Xe(),qe(),{panels:{groups:pe.get("groups"),markers:pe.get("markers"),drawing:pe.get("drawing"),equipment:pe.get("equipment"),links:pe.get("links")},select:re,sync(ie){const Ne=!!ie.playerView&&!we.playerView,Fe=!ie.playerView&&!!we.playerView,ht=me.contains(document.activeElement),Mt=Fe?Ce:void 0;Ne&&(Ce=Ae,A=gt,x=ue.scrollTop,ae.set(Ae,ue.scrollTop)),we={...ie},t.hidden=!1,Fe&&(ae.set(Ae,ue.scrollTop),Ae=Ce??"units",Ce=void 0,ge(A)),we.playerView&&!cp.has(Ae)?(Ae="markers",ge(!1)):!we.playerView&&we.mapOnly&&lp.has(Ae)&&(Ae="terrain"),Xe(),qe(),(Ne||Fe)&&(ue.scrollTop=Fe&&Ae===Mt?x:ae.get(Ae)??0,ae.set(Ae,ue.scrollTop)),ht&&!O(document.activeElement.dataset.sidebarTab)&&Ie.get(Ae).focus()}}}function tw(n,e){let t="";const i=(C,P="")=>{const D=document.createElement(C);return D.textContent=P,D};n.append(i("h3","编组 / 批量操作"));const r=i("div");r.id="group-list",r.className="unit-picker",n.append(r);const s=i("label","编组名称");s.className="edit-row";const o=i("input");o.id="group-name",o.maxLength=128,s.append(o),n.append(s);const a=i("label","编组颜色");a.className="edit-row";const c=i("input");c.type="color",c.id="group-color",c.value="#62ffa8",a.append(c),n.append(a);const l=i("div");l.className="edit-actions",n.append(l);const d=[],f=(C,P,D,N=l)=>{const M=i("button",P);return M.type="button",M.id=C,M.addEventListener("click",D),N.append(M),d.push(M),M},u=i("div");u.id="group-state",u.className="edit-hint",u.setAttribute("role","status");const h=()=>e.read().groups.find(C=>C.id===t),m=()=>e.units().filter(C=>C.groupId===t).map(C=>C.id),_=(C,P)=>{e.change(C,P)&&v()};f("group-create","新建并分配所选",()=>{if(!e.editable())return;const C=o.value.trim()||`编组 ${e.read().groups.length+1}`,P=c.value,D=new Set(e.selectedIds()),N=`group-${crypto.randomUUID()}`;_("新建编组",(M,S)=>{M.groups.push({id:N,name:C,color:P}),S.filter(I=>D.has(I.id)).forEach(I=>{I.groupId=N}),t=N})}),f("group-save","保存名称 / 颜色",()=>{if(!h()||!o.value.trim())return;const C=o.value.trim(),P=c.value;_("修改编组",D=>{const N=D.groups.find(M=>M.id===t);N.name=C,N.color=P})});const g=i("div");g.className="edit-actions",n.append(g),f("group-assign","所选加入编组",()=>{if(!h())return;const C=new Set(e.selectedIds());_("分配编组",(P,D)=>D.filter(N=>C.has(N.id)).forEach(N=>{N.groupId=t}))},g),f("group-unassign","所选退出编组",()=>{const C=new Set(e.selectedIds());_("移除编组归属",(P,D)=>D.filter(N=>C.has(N.id)).forEach(N=>{delete N.groupId}))},g);const p=i("div");p.className="edit-actions",n.append(p),f("group-select","选中整组",()=>{h()&&e.select(m())},p),f("group-focus","定位整组",()=>{h()&&e.focus(m())},p),f("group-copy","复制整组",()=>{const C=h();C&&e.copy(C)},p);const w=i("div");w.className="edit-actions",n.append(w),f("group-delete","删除编组 / 保留单位",()=>{h()&&_("删除编组",(C,P)=>{C.groups=C.groups.filter(D=>D.id!==t),P.filter(D=>D.groupId===t).forEach(D=>{delete D.groupId}),t=""})},w);const y=i("div");y.id="group-members",y.className="unit-picker",n.append(y,u);function v(){const C=e.read(),P=e.units(),D=e.selectedIds(),N=e.editable();C.groups.some(S=>S.id===t)||(t=C.groups[0]?.id??""),r.replaceChildren(...C.groups.map(S=>{const I=P.filter(V=>V.groupId===S.id).length,F=i("button",`${S.name} (${I})`);return F.style.borderColor=S.color,F.setAttribute("aria-pressed",String(S.id===t)),F.addEventListener("click",()=>{t=S.id,o.value=S.name,c.value=S.color,v()}),F.addEventListener("dblclick",()=>e.select(P.filter(V=>V.groupId===S.id).map(V=>V.id))),F}));const M=h();document.activeElement!==o&&(o.value=M?.name??""),document.activeElement!==c&&(c.value=M?.color??"#62ffa8"),o.disabled=c.disabled=!N;for(const S of d)S.disabled=!N;for(const S of["group-select","group-focus"])n.querySelector(`#${S}`).disabled=!M||!m().length;for(const S of["group-save","group-assign","group-copy","group-delete"])n.querySelector(`#${S}`).disabled=!N||!M;n.querySelector("#group-assign").disabled||=!D.length,n.querySelector("#group-copy").disabled||=!m().length,n.querySelector("#group-unassign").disabled=!N||!P.some(S=>D.includes(S.id)&&S.groupId),y.replaceChildren(...P.filter(S=>S.groupId===t).map(S=>{const I=i("button",S.label);return I.setAttribute("aria-pressed",String(D.includes(S.id))),I.addEventListener("click",()=>e.select([S.id])),I})),u.textContent=`${M?`${M.name} · ${m().length} 个单位`:"暂无编组"} / 当前选择 ${D.length} 个${N?"":" / 只读"}`}return v(),{sync:v}}const ta=new WeakMap,pn=n=>JSON.stringify([n.id,n.revision]),kd=n=>({id:n.id,revision:n.revision}),nw=n=>({L:"轻型",M:"中型",H:"重型"})[n];function dp(n,e,t){const i=n.sessions.find(s=>s.id===e),r=i?.sealedScenes?.find(s=>s.turn===t);return JSON.stringify([n.id,n.players,n.aircraft,n.sp,i?.status,i?.workflow,r?.resourceSnapshot??i?.resourceSnapshot,r?.rulesSnapshot??i?.rulesSnapshot,(r?.units??i?.units??[]).map(s=>({id:s.id,player:s.player,aircraftRef:s.aircraftRef,loadout:s.loadout,spRefs:s.spRefs,playerActions:s.playerActions}))])}function up(n,e){const t=new Map;for(const i of[...n,...e])t.has(pn(i))||t.set(pn(i),i);return[...t.values()].sort((i,r)=>i.id===r.id?r.revision-i.revision:i.id.localeCompare(r.id))}function iw(n,e){const t={};ta.set(n,t);const i=(ee,te="",R="")=>{const me=document.createElement(ee);return me.textContent=te,me.id=R,me},r=i("section");r.className="player-roster";const s=i("div");s.className="player-roster-header";const o=i("button","新建玩家","player-roster-new");o.type="button",n.getAttribute("data-collapsed")===null&&typeof matchMedia=="function"&&matchMedia("(max-width: 600px) and (pointer: coarse)").matches&&n.setAttribute("data-collapsed","true");const a=n.getAttribute("data-collapsed")==="true",c=i("button",a?"展开":"收起","player-roster-collapse");c.type="button",c.setAttribute("aria-expanded",String(!a)),s.append(i("h3","玩家"),o,c);const l=i("div","","player-roster-form-area");l.hidden=!0;const d=i("div","","player-roster-pending");d.hidden=!0;const f=i("div","","player-roster-list");f.className="player-roster-list";const u=i("p","","player-roster-feedback");u.setAttribute("role","status"),u.hidden=!0,r.append(s,l,d,f,u),n.replaceChildren(r);let h,m,_,g="",p=-1,w="",y=[],v=[],C=[],P=Rh,D="",N="",M="",S=0,I=0,F=0,V,G,J,Y;const de=[],q=[],oe=new Map,xe=[],We=ee=>{const te=ee instanceof Error?ee.message:String(ee);u.textContent=te,u.hidden=!1,e.report(te)},it=()=>{if(ta.get(n)!==t||!n.isConnected||!r.isConnected||!h)throw new Error("玩家栏已变化，请使用当前面板。");if(e.readRevision&&h.revision!==void 0){if(e.readRevision()!==h.revision)throw new Error("工程已变化，请等待玩家栏同步。")}else if(e.read&&dp(e.read(),h.sessionId,h.turn)!==w)throw new Error("工程已变化，请等待玩家栏同步。");if(h.mapOnly)throw new Error("地图模式下玩家栏为只读。");return h},gt=ee=>{try{it(),ee()}catch(te){We(te)}},xt=()=>{const ee=it();if(!ee.editable)throw new Error("历史回合或当前场景为只读。");if(ee.pending||e.busy?.())throw new Error("请先完成或取消当前放置。");return ee},Q=(ee,te,R,me,ue)=>{const He=i("label",R);He.htmlFor=te;const pe=i("select","",te);for(const[Ie,ae]of me){const Ae=i("option",ae);Ae.value=Ie,pe.append(Ae)}return pe.value=ue,He.append(pe),ee.append(He),de.push(pe),pe},Te=(ee,te,R)=>{const me=ee.spSlots?.[R];return!!me&&!!te.weapon&&te.weapon.kind!=="normal"&&(!P.config.enforceWeight||!!te.weapon.weight&&Sg(me,te.weapon.weight))&&(te.weapon.kind==="universal"||!!ee.allowedWeapons?.includes(te.name))},se=()=>{const ee=!!h?.editable&&!h.mapOnly&&!h.pending;o.disabled=!ee;for(const te of de)te.disabled=!ee;J&&(J.disabled=!ee||!V?.playerId),Y&&(Y.disabled=!ee||!V?.playerId||!V?.aircraftKey);for(const te of xe)te.node.disabled=!ee||!te.available;for(const[te,R]of oe)R.setAttribute("aria-selected",String(te===h?.selectedUnitId)),R.setAttribute("data-selected",String(te===h?.selectedUnitId))},je=()=>{l.replaceChildren(),de.length=0,q.length=0,G=void 0,J=void 0,Y=void 0;const ee=++I;if(l.hidden=!V,!V||!h)return;const te=V,R=()=>{if(V!==te||ee!==I||!l.isConnected)throw new Error("玩家创建表单已变化。")},me=i("form","","player-roster-form");me.className="player-form",me.append(i("h4","呼号"));const ue=new Set(y.map(Ce=>Ce.player?.id).filter(Boolean)),He=(h.project.players??[]).filter(Ce=>!ue.has(Ce.id));He.some(Ce=>Ce.id===te.playerId)||(te.playerId=""),G=Q(me,"player-roster-player","玩家呼号",[["","请选择玩家"],...He.map(Ce=>[Ce.id,Ce.callsign])],te.playerId),He.length||me.append(i("p","暂无可用呼号")),me.append(i("h4","装备")),J=Q(me,"player-roster-aircraft","机体",[["","请选择机体"],...v.map(Ce=>[pn(Ce),`${Ce.name} · 修订 ${Ce.revision}`])],te.aircraftKey);const pe=i("div","GUN / MSL / FLR","player-roster-inherent");pe.className="player-chips",me.append(pe);const Ie=i("div","","player-roster-slots");Ie.className="player-slots",me.append(Ie);const ae=v.find(Ce=>pn(Ce)===te.aircraftKey);ae&&(te.loadout=te.loadout.filter(Ce=>{const A=C.find(x=>pn(x)===pn(Ce.weaponRef));return A&&Te(ae,A,Ce.slot)}),ae.spSlots?.length||Ie.append(i("p","无 SP 槽")),ae.spSlots?.forEach((Ce,A)=>{const x=i("div");x.className="player-slot";const O=C.filter(W=>Te(ae,W,A)),Z=te.loadout.find(W=>W.slot===A)?.weaponRef,X=Q(x,`player-roster-slot-${A}`,`SP${A+1} · ${nw(Ce)} ${Ce}`,[["","空槽"],...O.map(W=>[pn(W),`${W.name} · ${W.weapon?.weight??""} · 修订 ${W.revision}`])],Z?pn(Z):"");q.push({slot:A,node:X,choices:O}),X.addEventListener("change",()=>gt(()=>{if(R(),!X.isConnected)throw new Error("SP 槽位已变化。");if(X.value&&!O.some(ke=>pn(ke)===X.value))throw new Error("所选 SP 的重量或机体许可不匹配。");te.loadout=te.loadout.filter(ke=>ke.slot!==A);const W=O.find(ke=>pn(ke)===X.value);W&&te.loadout.push({slot:A,weaponRef:kd(W)}),te.loadout.sort((ke,_e)=>ke.slot-_e.slot)})),Ie.append(x)}));const Ae=i("div");Ae.className="player-actions",Y=i("button","完成配置","player-roster-create"),Y.type="submit";const we=i("button","取消","player-roster-create-cancel");we.type="button",Ae.append(Y,we),me.append(Ae),l.append(me),G.addEventListener("change",()=>gt(()=>{R(),te.playerId=G.value,se()})),J.addEventListener("change",()=>gt(()=>{if(R(),!te.playerId)throw new Error("请先选择玩家呼号。");if(J.value&&!v.some(Ce=>pn(Ce)===J.value))throw new Error("机体修订已变化。");te.aircraftKey=J.value,je()})),we.addEventListener("click",()=>gt(()=>{R(),V=void 0,je()})),me.addEventListener("submit",Ce=>{Ce.preventDefault(),gt(()=>{R();const A=xt();if(te.projectId!==A.project.id||te.sessionId!==A.sessionId||te.turn!==A.turn)throw new Error("创建场景或回合已变化，请取消后重新新建。");if(!(A.project.players??[]).some(W=>W.id===te.playerId)||y.some(W=>W.player?.id===te.playerId))throw new Error("请选择尚未加入当前场景的玩家。");const x=v.find(W=>pn(W)===te.aircraftKey);if(!x)throw new Error("请选择有效机体。");const O=q.filter(W=>W.node.value).map(W=>{const ke=W.choices.find(_e=>pn(_e)===W.node.value);if(!ke)throw new Error("所选 SP 的重量或机体许可不匹配。");return{slot:W.slot,weaponRef:kd(ke)}}),Z=yg(x,C,O,P);if(Z.length)throw new Error(Z.join("；"));const X={playerId:te.playerId,aircraftRef:kd(x),loadout:O};V=void 0,++I;try{e.beginCreate(X)}catch(W){throw V=te,je(),W}je()})}),se()},ne=()=>{d.replaceChildren();const ee=++F,te=h?.pending;if(d.hidden=!te,!te||!h)return;const R=i("article");R.className="player-card player-pending-card";const me=v.find(x=>pn(x)===pn(te.aircraftRef));R.append(i("h4",`${te.player.callsign} · 待落位`),i("p",me?.name??"已配置机体"));const ue=te.loadout.map(x=>`SP${x.slot+1} ${C.find(O=>pn(O)===pn(x.weaponRef))?.name??"已配置 SP"}`).join(" / "),He=h,Ie=He.project.sessions.find(x=>x.id===He.sessionId)?.resourceSnapshot.sp.find(x=>x.name==="FLR")??He.project.sp.find(x=>x.name==="FLR");R.append(i("p",`FLR 剩余 ${Ie?Ie.weapon?.usageLimit??"—":4} 次`),i("p",ue||"空 SP 挂载"));for(const x of te.loadout){const O=C.find(Z=>pn(Z)===pn(x.weaponRef));R.append(i("p",`SP${x.slot+1} · ${O?.name??"已配置 SP"} · 冷却 0 回合 · ${O?.weapon?.usageLimit===void 0?"已用 0 次":`剩余 ${O.weapon.usageLimit} 次`}`))}const ae=i("div");ae.className="player-actions";const Ae=i("button",te.armed?"等待地图落位":"生成位置","player-roster-arm");Ae.type="button",Ae.disabled=te.armed||!h.editable;const we=i("button","取消创建","player-roster-placement-cancel");we.type="button",ae.append(Ae,we),R.append(ae),d.append(R);const Ce={projectId:He.project.id,sessionId:He.sessionId,turn:He.turn},A=()=>{const x=it();if(ee!==F||!R.isConnected||x.project.id!==Ce.projectId||x.sessionId!==Ce.sessionId||x.turn!==Ce.turn||!x.pending||pn(x.pending.aircraftRef)!==pn(te.aircraftRef)||x.pending.player.id!==te.player.id)throw new Error("待落位配置已变化。");return x};Ae.addEventListener("click",()=>gt(()=>{const x=A();!x.editable||x.pending?.armed||e.armPlacement()})),we.addEventListener("click",()=>gt(()=>{A(),e.cancelPlacement()}))},fe=()=>{f.replaceChildren(),oe.clear(),xe.length=0;const ee=++S;if(!h)return;const te={projectId:h.project.id,sessionId:h.sessionId,turn:h.turn},R=y.filter(me=>me.player);R.length||f.append(i("p","暂无玩家"));for(const me of R){const ue=i("article","",`player-roster-unit-${me.id}`);ue.className="player-card",ue.tabIndex=0,ue.setAttribute("role","group"),ue.setAttribute("aria-label",`玩家 ${me.player.callsign}`);const He=i("h4",me.player.callsign),pe=v.find(X=>me.aircraftRef&&pn(X)===pn(me.aircraftRef)),Ie=xg(h.project,h.sessionId,me.id,h.turn),ae=i("div");ae.className="player-card-head";const Ae=i("span");Ae.className="player-faction-block",Ae.setAttribute("aria-hidden","true"),Ae.setAttribute("data-faction",me.faction);const we=Ie.filter(X=>X.slot!==void 0).length,Ce=i("span",`${we} 装备`);Ce.className="player-equipment-count",ae.append(Ae,He,Ce),ue.append(ae,i("p",pe?.name??"未绑定机体"));const A=Ie.find(X=>X.name==="FLR");ue.append(i("p",`FLR 剩余 ${A?.remaining??"—"} 次`));const x=()=>{const X=it();if(ee!==S||!ue.isConnected||X.project.id!==te.projectId||X.sessionId!==te.sessionId||X.turn!==te.turn||!y.some(W=>W.id===me.id))throw new Error("玩家单位或回合已变化。");return X},O=X=>["BUTTON","SELECT","INPUT"].includes(X.target?.tagName?.toUpperCase()??"");ue.addEventListener("click",X=>gt(()=>{O(X)||(x(),e.selectUnit(me.id,!1))})),ue.addEventListener("dblclick",X=>gt(()=>{O(X)||(x(),e.selectUnit(me.id,!0))})),ue.addEventListener("keydown",X=>{X.target!==ue||!["Enter"," "].includes(X.key)||(X.preventDefault(),gt(()=>{x(),e.selectUnit(me.id,X.key==="Enter")}))});const Z=i("div");Z.className="player-weapon-list",ue.append(Z);for(const X of Ie){const W=i("div");W.className="player-weapon-row";const ke=X.slot===void 0?X.name:`SP${X.slot+1} · ${X.name}`,_e=X.durationRemaining>0?`效果剩余 ${X.durationRemaining} 回合 · 冷却 ${X.profile?.cooldownTurns??0}T`:`冷却 ${X.cooldownRemaining} 回合`;W.append(i("strong",ke),i("span",X.jettisoned?"已抛弃":`${_e} · ${X.remaining===void 0?`已用 ${X.uses} 次`:`剩余 ${X.remaining} 次`}`));const $e=i("div");$e.className="player-actions";const Ye=i("button","使用");Ye.type="button",Ye.setAttribute("data-action","use"),Ye.setAttribute("data-weapon-key",X.key),$e.append(Ye),xe.push({node:Ye,available:X.canUse&&h.turn>0});let be=!1;const Pe=(Ze,Ke,Re)=>gt(()=>{x();const mt=xt();if(!Re.isConnected||!Ke||be||mt.turn<1)throw new Error("上一回合的此项行动当前不可记录。");be=!0,Re.disabled=!0;const U=xe.filter(Se=>Se.node.getAttribute("data-weapon-key")===X.key&&ue.contains(Se.node)),ye=U.map(Se=>Se.available);for(const Se of U)Se.available=!1;try{e.recordAction(me.id,X.key,Ze)}catch(Se){throw be=!1,U.forEach((Xe,ge)=>{Xe.available=ye[ge]}),se(),Se}});if(Ye.addEventListener("click",Ze=>{Ze.stopPropagation(),Pe("use",X.canUse,Ye)}),X.slot!==void 0||X.profile?.kind&&X.profile.kind!=="normal"){const Ze=i("button","抛弃");Ze.type="button",Ze.setAttribute("data-action","drop"),Ze.setAttribute("data-weapon-key",X.key),$e.append(Ze),xe.push({node:Ze,available:X.canJettison&&h.turn>0}),Ze.addEventListener("click",Ke=>{Ke.stopPropagation(),Pe("drop",X.canJettison,Ze)})}W.append($e),Z.append(W)}f.append(ue),oe.set(me.id,ue)}};return c.addEventListener("click",()=>gt(()=>{const ee=n.getAttribute("data-collapsed")!=="true";n.setAttribute("data-collapsed",String(ee)),c.textContent=ee?"展开":"收起",c.setAttribute("aria-expanded",String(!ee))})),o.addEventListener("click",()=>gt(()=>{const ee=xt();if(V){e.report("请先完成或取消当前玩家配置。");return}V={playerId:"",aircraftKey:"",loadout:[],projectId:ee.project.id,sessionId:ee.sessionId,turn:ee.turn},je()})),{sync(ee){if(ta.get(n)!==t||!r.isConnected)return;if(h={...ee,pending:ee.pending?structuredClone(ee.pending):void 0},(ee.revision===void 0?ee.project!==m:ee.revision!==_||ee.project.id!==m?.id)||ee.sessionId!==g||ee.turn!==p){m=ee.project,_=ee.revision,g=ee.sessionId,p=ee.turn,w=e.readRevision&&ee.revision!==void 0?"":dp(ee.project,ee.sessionId,ee.turn);const me=ee.project.sessions.find(Ie=>Ie.id===ee.sessionId),ue=me?.sealedScenes?.find(Ie=>Ie.turn===ee.turn);y=ue?.units??me?.units??[],v=up(ue?.resourceSnapshot.aircraft??me?.resourceSnapshot.aircraft??[],ee.project.aircraft),C=up(ue?.resourceSnapshot.sp??me?.resourceSnapshot.sp??[],ee.project.sp),P=ue?.rulesSnapshot??me?.rulesSnapshot??Rh;const He=JSON.stringify([ee.project.id,ee.project.players,v,C,P,y.map(Ie=>Ie.player?.id)]);N!==He&&(N=He,V&&je());const pe=JSON.stringify([ee.project.id,ee.sessionId,ee.turn,v,C,P,y.filter(Ie=>Ie.player).map(Ie=>({id:Ie.id,player:Ie.player,aircraftRef:Ie.aircraftRef,loadout:Ie.loadout,spRefs:Ie.spRefs,playerActions:Ie.playerActions}))]);if(D!==pe){D=pe;try{fe()}catch(Ie){We(Ie)}}}const R=JSON.stringify([ee.project.id,ee.sessionId,ee.turn,ee.editable,ee.pending]);M!==R&&(M=R,ne()),se()},destroy(){ta.get(n)===t&&(ta.delete(n),++S,++I,++F,n.replaceChildren())}}}const na=512,ia=[["#ff6935","橙"],["#2d8cff","蓝"],["#ffd84a","黄"],["#20e27e","绿"],["#ff4d5a","红"]],li=n=>!!n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=1e5),ra=n=>/^#[0-9a-f]{6}$/i.test(n),Fd=n=>`${n.kind}:${n.id}`,hp=n=>{const e=n.indexOf(":"),t=n.slice(0,e),i=n.slice(e+1);return e>0&&i&&(t==="unit"||t==="marker")?{kind:t,id:i}:null},rw=(n,e,t)=>n.some(i=>i.fromUnitId===e&&i.to.kind===t.kind&&i.to.id===t.id||t.kind==="unit"&&i.to.kind==="unit"&&i.fromUnitId===t.id&&i.to.id===e);function sw(n){let e=!1,t="",i="",r="",s="",o="";const a=new Sn,c=new Map;a.name="Editor links",a.userData.editorLinks=!0,a.renderOrder=1e3,n.world.add(a);const l=(ne,fe="")=>{const ee=document.createElement(ne);return ee.textContent=fe,ee},d=l("div");d.className="scene-tool-panel editor-links-panel",n.panel.append(d);const f=l("style");f.textContent=`
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
  `,d.append(f,l("h3","连线"));const u=[],h=(ne,fe,ee)=>{const te=()=>{e||ee()};ne.addEventListener(fe,te),u.push({element:ne,event:fe,run:te})},m=()=>{const ne=l("div");return ne.className="tool-actions",d.append(ne),ne},_=(ne,fe,ee,te)=>{const R=l("button",ee);return R.id=fe,R.type="button",h(R,"click",te),ne.append(R),R},g=(ne,fe,ee)=>{const te=l("label");te.className="tool-row",te.append(l("span",ee));const R=l(ne);return R.id=fe,R.setAttribute("aria-label",ee),te.append(R),d.append(te),R},p=(ne,fe)=>{const ee=l("option",ne);return ee.value=fe,ee},w=m(),y=_(w,"link-mode","连线模式",()=>{if(t){We();return}if(!q()){se();return}const ne=oe();if(!ne||!n.readUnits().some(fe=>fe.id===ne&&li(fe.position))){o="请选择源单位",se();return}t=ne,o="",D.value="",n.onModeChange(!0),se()}),v=_(w,"link-cancel","取消",We),C=g("select","link-source-unit","源单位");C.title="默认跟随选中单位；手动选择后固定源单位，连线模式中保持不变";const P=l("p");P.id="link-source",d.append(P);const D=g("select","link-target","目标"),N=g("select","link-style","颜色");N.replaceChildren(...ia.map(([ne,fe])=>p(fe,ne)),p("自定义","custom")),N.value=ia[0][0];const M=g("input","link-color","自定义颜色");M.type="color",M.value=ia[0][0];const S=_(m(),"link-add","添加连线",()=>{const ne=oe(),fe=hp(D.value);if(!q()){se();return}if(!ne||!fe){o="请选择源与目标",se();return}gt(ne,fe)}),I=g("select","link-list","连线列表");I.size=5;const F=g("input","link-visible","显示");F.type="checkbox",F.checked=!0;const V=m(),G=_(V,"link-apply","修改颜色 / 显示",()=>{const ne=r,fe=M.value,ee=F.checked;if(!q()){se();return}if(!ra(fe)){o="请选择有效颜色",se();return}it("修改连线",te=>{const R=te.links?.find(me=>me.id===ne);if(!R)throw new Error("连线已移除");R.color=fe.toLowerCase(),R.visible=ee})}),J=_(V,"link-delete","删除连线",()=>{const ne=r;if(!q()){se();return}it("删除连线",fe=>{if(!fe.links?.some(ee=>ee.id===ne))throw new Error("连线已移除");fe.links=fe.links.filter(ee=>ee.id!==ne)})}),Y=l("p");Y.id="link-state",Y.setAttribute("role","status"),d.append(Y),h(C,"change",()=>{if(!q()||t){se();return}const ne=C.value;i=ne&&n.readUnits().some(fe=>fe.id===ne&&li(fe.position))?ne:"",D.value="",o="",se()}),h(D,"change",()=>{o="",se()}),h(N,"change",()=>{if(!q()){se();return}ra(N.value)&&(M.value=N.value)}),h(M,"input",()=>{if(!q()){se();return}N.value=ia.find(([ne])=>ne===M.value.toLowerCase())?.[0]??"custom"}),h(I,"change",()=>{r=I.value,s="",o="",se()});const de=ne=>{!e&&t&&ne.key==="Escape"&&(We(),ne.preventDefault())};typeof addEventListener=="function"&&addEventListener("keydown",de);function q(){return!e&&n.editable()&&!n.busy()}function oe(ne){return i&&!(ne??n.readUnits()).some(fe=>fe.id===i&&li(fe.position))&&(i="",D.value=""),t||i||n.selectedUnitId()||""}function xe(){t&&(t="",D.value="",n.onModeChange(!1))}function We(){e||(xe(),D.value="",o="",se())}function it(ne,fe){if(!q())return se(),!1;let ee=!1;try{ee=n.change(ne,te=>{if(!q())throw new Error("当前状态已变化");fe(te)}),o=ee?"已保存":"未保存"}catch(te){o=te instanceof Error?te.message:String(te)}return se(),ee}function gt(ne,fe){const ee=M.value,te=ue=>{const He=n.readUnits(),pe=He.find(ae=>ae.id===ne),Ie=fe.kind==="unit"?He.find(ae=>ae.id===fe.id):ue.markers.find(ae=>ae.id===fe.id);if(!li(pe?.position)||!li(Ie?.position))throw new Error("源或目标已移除");if(fe.kind==="unit"&&fe.id===ne)throw new Error("源与目标相同");if((ue.links?.length??0)>=na)throw new Error("连线已达上限 512");if(rw(ue.links??[],ne,fe))throw new Error("连线已存在");if(!ra(ee))throw new Error("请选择有效颜色")};try{te(n.read())}catch(ue){return o=ue instanceof Error?ue.message:String(ue),se(),!1}const R=`link-${crypto.randomUUID()}`,me=it("添加连线",ue=>{te(ue),(ue.links??=[]).push({id:R,fromUnitId:ne,to:{...fe},color:ee.toLowerCase(),visible:!0})});return me&&(r=R,s="",se()),me}function xt(ne,fe){if(e||!t)return!1;if(!q())return se(),!0;const ee={kind:ne,id:fe};return D.value=Fd(ee),gt(t,ee),!0}function Q(ne){a.remove(ne.line),ne.line.geometry.dispose(),ne.line.material.dispose()}function Te(){if(e)return;const ne=n.read();if(!ne.links?.length&&!t){for(const R of c.values())Q(R);c.clear();return}const fe=new Map(n.readUnits().map(R=>[R.id,R])),ee=new Map(ne.markers.map(R=>[R.id,R]));if(t&&(!n.editable()||!li(fe.get(t)?.position))){xe(),o="",se();return}const te=new Set;for(const R of(ne.links??[]).slice(0,na)){if(te.has(R.id))continue;te.add(R.id);let me=c.get(R.id);if(!me){const ae=new kt,Ae=new Dt(new Float32Array(6),3).setUsage(sl);ae.setAttribute("position",Ae);const we=new Mi({color:"#ff6935",depthTest:!1,depthWrite:!1}),Ce=new rn(ae,we);Ce.name=`Editor link ${R.id}`,Ce.userData.editorLinkId=R.id,Ce.userData.editorTools=!0,Ce.renderOrder=1e3,Ce.frustumCulled=!1,me={line:Ce,position:Ae,coordinates:[NaN,NaN,NaN,NaN,NaN,NaN]},c.set(R.id,me),a.add(Ce)}const ue=fe.get(R.fromUnitId)?.position,He=(R.to.kind==="unit"?fe.get(R.to.id):ee.get(R.to.id))?.position;me.line.visible=R.visible!==!1&&li(ue)&&li(He);const pe=ra(R.color)?R.color.toLowerCase():"#ff6935";if(`#${me.line.material.color.getHexString()}`!==pe&&me.line.material.color.set(pe),!li(ue)||!li(He))continue;let Ie=!1;for(let ae=0;ae<6;ae++){const Ae=ae<3?ue:He,we=ae%3,Ce=(we===0?Ae.x:we===1?Ae.y:Ae.z)*tt;me.coordinates[ae]!==Ce&&(me.coordinates[ae]=Ce,me.position.array[ae]=Ce,Ie=!0)}Ie&&(me.position.needsUpdate=!0)}for(const[R,me]of c)te.has(R)||(Q(me),c.delete(R))}function se(){if(e)return;const ne=n.read(),fe=n.readUnits(),ee=(ne.links??[]).slice(0,na);t&&(!n.editable()||!fe.some(A=>A.id===t&&li(A.position)))&&xe();const te=oe(fe),R=fe.find(A=>A.id===te),me=D.value,ue=[p("跟随选中单位",""),...fe.filter(A=>li(A.position)).map(A=>p(A.label,A.id))];C.replaceChildren(...ue),C.value=ue.some(A=>A.value===te)?te:"";const He=[p("选择目标","")];for(const A of fe)A.id!==te&&li(A.position)&&He.push(p(`单位：${A.label}`,Fd({kind:"unit",id:A.id})));for(const A of ne.markers)li(A.position)&&He.push(p(`标记：${A.label}`,Fd({kind:"marker",id:A.id})));D.replaceChildren(...He),D.value=He.some(A=>A.value===me)?me:"",ee.some(A=>A.id===r)||(r=ee[0]?.id??""),I.replaceChildren(...ee.map(A=>{const x=fe.find(Z=>Z.id===A.fromUnitId)?.label??A.fromUnitId,O=(A.to.kind==="unit"?fe:ne.markers).find(Z=>Z.id===A.to.id)?.label??A.to.id;return p(`${x} → ${O}${A.visible===!1?" · 隐藏":""}`,A.id)})),I.value=r;const pe=ee.find(A=>A.id===r),Ie=pe?`${pe.id}|${pe.color}|${pe.visible!==!1}`:"";Ie!==s&&(s=Ie,pe?(M.value=ra(pe.color)?pe.color.toLowerCase():"#ff6935",N.value=ia.find(([A])=>A===M.value)?.[0]??"custom",F.checked=pe.visible!==!1):F.checked=!0);const ae=q(),Ae=li(R?.position);y.disabled=!t&&(!ae||!Ae||ee.length>=na),y.setAttribute("aria-pressed",String(!!t)),v.disabled=!t,C.disabled=!ae||!!t,D.disabled=!ae,N.disabled=M.disabled=!ae,S.disabled=!ae||!Ae||!D.value||ee.length>=na,F.disabled=G.disabled=J.disabled=!ae||!pe,P.textContent=`源：${R?.label??"未选择"}${t?" · 连线中":""}`;const we=hp(D.value),Ce=we&&(we.kind==="unit"?fe:ne.markers).find(A=>A.id===we.id)?.label;Y.textContent=o||(Ce?`目标：${Ce}`:""),Te()}function je(){if(!e){xe(),e=!0,typeof removeEventListener=="function"&&removeEventListener("keydown",de);for(const ne of u)ne.element.removeEventListener(ne.event,ne.run);for(const ne of c.values())Q(ne);c.clear(),n.world.remove(a),d.remove()}}return se(),{sync:se,update:Te,active:()=>!e&&!!t,pick:xt,cancel:We,dispose:je}}function Rm(n,e){const t=e.x-n.x,i=n.z-e.z;return!Number.isFinite(t)||!Number.isFinite(i)||t===0&&i===0?void 0:(Math.atan2(t,i)*180/Math.PI%360+360)%360}function Cm(n,e){const t=Rm(n,e);return t===void 0?"方位角未定义（起终点水平重合，N=0°）":`方位角 ${Math.round(t*100)/100%360}° (N=0°)`}const ow=.12,aw=1e5,cw=1e3,Da=n=>({x:n.x,y:n.y,z:n.z}),Pm=n=>({pitch:n.pitch,yaw:n.yaw,roll:n.roll});function fl(n){if(!n||!["x","y","z"].every(e=>{const t=n[e];return Number.isFinite(t)&&Math.abs(t)<=aw}))throw new RangeError("Marker coordinates must be finite and within +/-100000 km")}function Dm(n){if(!Number.isFinite(n)||n<=0||n>cw)throw new RangeError("Marker size must be positive and at most 1000 km")}function Lm(n){if(!n||![n.pitch,n.yaw,n.roll].every(Number.isFinite))throw new RangeError("Marker attitude must contain finite radians")}function Pi(n){return["line","arrow","circle","square","sphere"].includes(n.symbol)}function La(n){const e=n.attitude??{pitch:0,yaw:0,roll:0};return Lm(e),new mn().setFromEuler(new ri(e.pitch,e.yaw,e.roll,"YXZ"))}function Im(n){const e=new b((n.sizeKm??ow)/2,0,0).applyQuaternion(La(n)),t=n.position;return[{x:t.x-e.x,y:t.y-e.y,z:t.z-e.z},{x:t.x+e.x,y:t.y+e.y,z:t.z+e.z}]}function _s(n){if(n.controlPoints!==void 0){if(n.controlPoints.length!==2)throw new RangeError("Marker control points must contain exactly two points");return[Da(n.controlPoints[0]),Da(n.controlPoints[1])]}return Im(n)}function Qc(n,e){if(!Array.isArray(e)||e.length!==2)throw new RangeError("Marker control points must contain exactly two points");const[t,i]=e;fl(t),fl(i);const r=i.x-t.x,s=i.y-t.y,o=i.z-t.z,a=Math.hypot(r,s,o);Dm(a);const c=La(n),l=new b(1,0,0).applyQuaternion(c).normalize(),d=new b(r/a,s/a,o/a);let f;if(n.attitude!==void 0&&l.distanceTo(d)<=16*Number.EPSILON)f=Pm(n.attitude);else{const u=new mn().setFromUnitVectors(l,d).multiply(c).normalize(),h=new ri().setFromQuaternion(u,"YXZ");f={pitch:h.x,yaw:h.y,roll:h.z}}return{...n,position:{x:(t.x+i.x)/2,y:(t.y+i.y)/2,z:(t.z+i.z)/2},attitude:f,sizeKm:a,controlPoints:[Da(t),Da(i)]}}function Nm(n,e,t,i){fl(e),Lm(t),Dm(i);const r={...n,position:Da(e),attitude:Pm(t),sizeKm:i};return n.controlPoints!==void 0&&(r.controlPoints=Im(r),r.controlPoints.forEach(fl)),r}const ei=n=>({x:n.x,y:n.y,z:n.z}),$n=n=>new b(n.x,n.y,n.z).multiplyScalar(tt),Ss=(n,e)=>Math.hypot(e.x-n.x,e.y-n.y,e.z-n.z),Wr=n=>`${n}-${crypto.randomUUID()}`,Mr=n=>Number(n.toFixed(5)).toString(),Od=n=>[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=1e5),lw=(n,e)=>({horizontal:Math.hypot(e.x-n.x,e.z-n.z),deltaY:e.y-n.y,slant:Ss(n,e)}),Um=(n,e)=>{const t=lw(n,e);return`水平 ${Mr(t.horizontal)} km · 高差 ${t.deltaY>=0?"+":""}${Mr(t.deltaY)} km · 斜距 ${Mr(t.slant)} km`},En=n=>n==="measure"||n==="bearing",Gc=n=>({measure:"测距",bearing:"方位角",circle:"圆规",sphere:"范围球"})[n],sa=n=>n.kind==="bearing"?Cm(n.points[0],n.points[1]):Um(n.points[0],n.points[1]),fp=(n,e,t,i)=>t==="sphere"?Ss(n,e):i==="xz"?Math.hypot(e.x-n.x,e.z-n.z):i==="xy"?Math.hypot(e.x-n.x,e.y-n.y):Math.hypot(e.y-n.y,e.z-n.z);function dw(n){let e=!1,t="",i="",r="",s=null,o=!1,a,c="",l=n.editable(),d=!1,f=null,u=null;const h=new Sn,m=new Sn;h.name="Editor markers and drawings",m.name="Editor tool preview",h.userData.editorTools=!0,m.userData.editorTools=!0,n.world.add(h,m);const _=document.createElement("div");_.className="editor-tools-labels",_.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;",n.labelRoot.append(_);const g=[],p=[],w=document.createElement("style");w.textContent=`
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
  `,n.markersPanel.append(w);const y=(E,L="")=>{const k=document.createElement(E);return k.textContent=L,k},v=(E,L)=>{E.classList.add("scene-tool-panel"),E.append(y("h3",L))};v(n.markersPanel,"自定义标记点"),v(n.drawingsPanel,"标尺与圆规");const C=y("p"),P=y("p");C.id="marker-status",P.id="drawing-status";for(const E of[C,P])E.className="tool-status",E.setAttribute("role","status");const D=(E,L=f?.kind==="marker"?"markers":"drawing")=>{(L==="markers"?C:P).textContent=E},N=E=>(p.push(E),E),M=E=>{const L=y("div");return L.className="tool-actions",E.append(L),L},S=(E,L,k,B,$=!0)=>{const ce=y("button",k);return ce.type="button",ce.id=L,ce.addEventListener("click",()=>{if(!(e||$&&!n.editable()))try{B()}catch(le){D(le instanceof Error?le.message:String(le),L.startsWith("marker-")?"markers":"drawing")}}),E.append(ce),$&&N(ce),ce},I=(E,L,k,B=!0)=>{const $=y("details");return $.id=L,$.open=B,$.append(y("summary",k)),E.append($),$},F=(E,L,k,B,$="text")=>{const ce=y("label");ce.className="tool-row",ce.append(y("span",k));const le=N(y("input"));return le.id=L,le.type=$,le.value=B,$==="number"?le.step="any":$==="text"&&(le.maxLength=128),ce.append(le),E.append(ce),le},V=(E,L,k,B,$=!0)=>{const ce=y("label");ce.className="tool-row",ce.append(y("span",k));const le=y("select");return le.id=L,le.setAttribute("aria-label",k),B.forEach(([et,Oe])=>le.add(new Option(Oe,et))),ce.append(le),E.append(ce),$&&N(le),le},G=E=>{if(!E.value.trim()||!Number.isFinite(E.valueAsNumber))throw new Error("请填写有效数值");return E.valueAsNumber},J=(E,L,k,B)=>{const $=y("div");$.className="tool-xyz",E.append(y("p",k),$);const ce={};for(const le of["x","z","y"]){const et=le==="y"?"Z":le==="z"?"Y":"X",Oe=y("label",`${et}（km）`),Nt=N(y("input"));Nt.id=`${L}-${le}`,Nt.type="number",Nt.step="any",Nt.value=String(B[le]),Nt.setAttribute("aria-label",`${k} ${et}（km）`),Oe.append(Nt),$.append(Oe),ce[le]=Nt}return{row:$,fields:ce,read:()=>{const le={x:G(ce.x),y:G(ce.y),z:G(ce.z)};if(!Od(le))throw new Error("点位坐标须为有限数值，绝对值不超过100000 km");return le},set:le=>{for(const et of["x","y","z"])ce[et].value=String(le[et])}}},Y=E=>/^#[0-9a-f]{6}$/i.test(E.value)?E.value.toLowerCase():"#ffd84a",de=(E,L)=>E.value.trim().slice(0,128)||L,q=E=>{for(const L of[...E.children])E.remove(L),L.traverse(k=>{(k instanceof Ee||k instanceof rn||k instanceof nm)&&(k.geometry.dispose(),(Array.isArray(k.material)?k.material:[k.material]).forEach($=>$.dispose()))})},oe=(E,L,k=1)=>new rn(new kt().setFromPoints(E),new Mi({color:L,transparent:!0,opacity:k,depthWrite:!1})),xe=(E,L,k,B=.045)=>{const $=new Ee(new Jr(B*tt,10,8),new yn({color:k,depthWrite:!1}));return $.position.copy($n(L)),E.add($),$},We=(E,L)=>{L==="xz"?E.rotation.x=-Math.PI/2:L==="yz"&&(E.rotation.y=Math.PI/2)},it=(E,L)=>Array.from({length:129},(k,B)=>{const $=B/128*Math.PI*2,ce=Math.cos($)*E,le=Math.sin($)*E;return L==="xy"?new b(ce,le,0):L==="yz"?new b(0,ce,le):new b(ce,0,le)}),gt=(E,L,k=!1)=>{const B=new Sn;B.position.copy($n(L.position)),B.quaternion.copy(La(L)),E.add(B),B.userData.markerSize=L.sizeKm??.12;const $=tt*(L.sizeKm??.12),ce=L.color,le=k?.65:1,et=le*Math.min(.6,Math.max(.02,L.opacity??.12));if(L.symbol==="cross")B.add(oe([new b(-$,.4,-$),new b($,.4,$)],ce,le)),B.add(oe([new b(-$,.4,$),new b($,.4,-$)],ce,le));else if(L.symbol==="flag"){B.add(oe([new b(0,.2,0),new b(0,$*3,0)],ce,le));const Oe=new Ee(new Qr($*1.6,$),new yn({color:ce,transparent:!0,opacity:.5,side:fn,depthWrite:!1}));Oe.position.set($*.8,$*2.5,0),B.add(Oe)}else if(L.symbol==="pin"){B.add(oe([new b(0,.2,0),new b(0,$*2.5,0)],ce,le));const Oe=new Ee(new ws($*.6),new yn({color:ce,transparent:k,opacity:le,depthWrite:!1}));Oe.position.y=$*2.5,B.add(Oe),B.add(oe(it($*.7,"xz"),ce,le))}else if(L.symbol==="line"||L.symbol==="arrow")B.add(oe([new b(-$/2,0,0),new b($/2,0,0)],ce,le)),L.symbol==="arrow"&&B.add(oe([new b($*.25,0,-$*.2),new b($/2,0,0),new b($*.25,0,$*.2)],ce,le));else if(L.symbol==="circle"){const Oe=new Ee(new Ta($/2,64),new yn({color:ce,transparent:!0,opacity:et,side:fn,depthWrite:!1}));We(Oe,"xz"),B.add(Oe,oe(it($/2,"xz"),ce,le))}else if(L.symbol==="square"){const Oe=$/2,Nt=new Ee(new Qr($,$),new yn({color:ce,transparent:!0,opacity:et,side:fn,depthWrite:!1}));We(Nt,"xz"),B.add(Nt,oe([new b(-Oe,0,-Oe),new b(Oe,0,-Oe),new b(Oe,0,Oe),new b(-Oe,0,Oe),new b(-Oe,0,-Oe)],ce,le))}else if(L.symbol==="sphere"){B.add(new Ee(new Jr($/2,32,20),new yn({color:ce,transparent:!0,opacity:et,side:fn,depthWrite:!1})));for(const Oe of["xz","xy","yz"])B.add(oe(it($/2,Oe),ce,le*.7))}else B.add(oe([new b(-$*.6,.4,0),new b($*.6,.4,0)],ce,le));return["circle","square","sphere"].includes(L.symbol)&&B.children.filter(Oe=>Oe instanceof Ee).forEach(Oe=>{Oe.visible=L.filled!==!1}),k||B.traverse(Oe=>{Oe.userData.editorTool={kind:"marker",id:L.id}}),!k&&L.id===t&&Pi(L)&&_s(L).forEach((Oe,Nt)=>{const Xt=$n(Oe).sub($n(L.position)).applyQuaternion(B.quaternion.clone().invert()),lr=xe(B,{x:Xt.x/tt,y:Xt.y/tt,z:Xt.z/tt},ce);lr.userData.editorTool={kind:"marker",id:L.id,pointIndex:Nt}}),B},xt=(E,L)=>{const[k,B]=L.points;if(!k||!B)return;E.position.copy($n(k)),E.position.y+=.3;const $=(B.x-k.x)*tt,ce=(B.z-k.z)*tt,le=Math.hypot($,ce),et=Rm(k,B),Oe=Math.min(.6*tt,Math.max(.1*tt,le*.25)),Nt=(et??0)*Math.PI/180;for(const Xt of E.children)if(Xt instanceof rn){let lr;if(Xt.name==="bearing-direction")lr=[new b,new b($,0,ce)];else if(Xt.name==="bearing-north-reference")lr=[new b,new b(0,0,-Oe*1.3)];else if(Xt.name==="bearing-arc")lr=Array.from({length:65},(zi,Gs)=>{const os=Nt*Gs/64;return new b(Math.sin(os)*Oe,0,-Math.cos(os)*Oe)}),Xt.visible=et!==void 0&&et>0;else{const zi=Math.min(Oe*.3,le*.2),Gs=le?$/le:0,os=le?ce/le:0;lr=[new b($-Gs*zi-os*zi*.5,0,ce-os*zi+Gs*zi*.5),new b($,0,ce),new b($-Gs*zi+os*zi*.5,0,ce-os*zi-Gs*zi*.5)],Xt.visible=et!==void 0}Xt.geometry.setFromPoints(lr),Xt.geometry.computeBoundingSphere(),Xt.material instanceof hf&&(Xt.material.dashSize=Oe*.12,Xt.material.gapSize=Oe*.09,Xt.computeLineDistances())}else Xt.userData.bearingEndpoint!==void 0&&Xt.position.set(Xt.userData.bearingEndpoint===1?$:0,0,Xt.userData.bearingEndpoint===1?ce:0)},Q=(E,L,k=!1)=>{const B=new Sn;E.add(B),k||(B.userData.editorTool={kind:"drawing",id:L.id});const $=L.color,ce=Math.min(.6,Math.max(.02,L.opacity??.12));if(L.kind==="bearing"){if(L.points.length<2)return B;const le=oe([new b,new b],$,k?.65:.95);le.name="bearing-direction";const et=new rn(new kt().setFromPoints([new b,new b]),new hf({color:$,transparent:!0,opacity:k?.5:.75,depthWrite:!1,depthTest:!1}));et.name="bearing-north-reference";const Oe=oe(Array.from({length:65},()=>new b),$,k?.55:.85);Oe.name="bearing-arc";const Nt=oe([new b,new b,new b],$,k?.65:.95);Nt.name="bearing-arrow",B.add(le,et,Oe,Nt),L.points.forEach((Xt,lr)=>{const zi=xe(B,{x:0,y:0,z:0},$);zi.userData.bearingEndpoint=lr,k||(zi.userData.editorTool={kind:"drawing",id:L.id,pointIndex:lr})}),B.traverse(Xt=>{(Xt instanceof rn||Xt instanceof Ee)&&(Xt.material.depthTest=!1,Xt.renderOrder=40)}),xt(B,L)}else if(L.kind==="measure"){if(L.points.length<2)return B;B.add(oe(L.points.map($n),$,k?.65:.9)),L.points.forEach((le,et)=>{const Oe=xe(B,le,$);k||(Oe.userData.editorTool={kind:"drawing",id:L.id,pointIndex:et})})}else{const le=L.points[0],et=(L.radiusKm??0)*tt;if(!le||et<=0)return B;B.position.copy($n(le));const Oe=L.plane??"xz";if(L.kind==="circle"){const Nt=new Ee(new Ta(et,96),new yn({color:$,transparent:!0,opacity:k?ce/2:ce,side:fn,depthWrite:!1}));We(Nt,Oe),Oe==="xz"&&(Nt.position.y=.3),Nt.visible=L.filled!==!1,B.add(Nt,oe(it(et,Oe),$,k?.55:.8)),xe(B,{x:0,y:0,z:0},$)}else{const Nt=new Ee(new Jr(et,40,24),new yn({color:$,transparent:!0,opacity:k?ce/2:ce,side:fn,depthWrite:!1}));Nt.visible=L.filled!==!1,B.add(Nt);for(const Xt of["xz","xy","yz"])B.add(oe(it(et,Xt),$,k?.35:.5));xe(B,{x:0,y:0,z:0},$)}}return B},Te=(E,L,k,B,$,ce,le)=>{const et=new vn;et.position.copy(L),E.add(et);const Oe=y("button",k);return Oe.type="button",Oe.title=$,Oe.style.setProperty("--tool-color",B),Oe.addEventListener("click",Nt=>{Nt.stopPropagation(),ce()}),Oe.addEventListener("dblclick",Nt=>{Nt.stopPropagation(),le()}),_.append(Oe),g.push({object:et,element:Oe}),Oe},se=V(n.markersPanel,"marker-list","标记列表",[],!1);se.size=5;const je=M(n.markersPanel);S(je,"marker-focus","定位",()=>{const E=oi();E&&n.focus(ei(E.position))},!1);const ne=V(n.markersPanel,"marker-endpoint","移动目标",[["whole","整体"],["a","端点 A"],["b","端点 B"]],!1),fe=S(je,"marker-move","三轴移动",()=>{oi()&&(st(t,!0,a),n.onTransformMode?.("translate"))}),ee=S(je,"marker-rotate","旋转",()=>{oi()&&(st(t),n.onTransformMode?.("rotate"))}),te=S(je,"marker-scale","缩放",()=>{oi()&&(st(t),n.onTransformMode?.("scale"))});S(je,"marker-copy","复制",()=>{const E=oi();if(!E)throw new Error("请先选择标记");const L={...E,...E.attitude?{attitude:{...E.attitude}}:{},id:Wr("marker"),label:`${E.label.slice(0,122)} 副本`,position:{...E.position,x:E.position.x+.2,z:E.position.z+.2}};L.controlPoints&&(L.controlPoints=L.controlPoints.map(k=>({...k,x:k.x+.2,z:k.z+.2}))),j("复制标记",k=>k.markers.push(L),"markers",()=>{qn("marker",L.id)})}),S(je,"marker-delete","删除",()=>{const E=t;if(!E)throw new Error("请先选择标记");j("删除标记",L=>{L.markers=L.markers.filter(k=>k.id!==E),L.links&&(L.links=L.links.filter(k=>k.to.kind!=="marker"||k.to.id!==E))},"markers",()=>{qn("marker","")})});const R=I(n.markersPanel,"marker-properties","标记属性与位置"),me=F(R,"marker-label","名称","标记"),ue=F(R,"marker-color","颜色","#ffd84a","color"),He=V(R,"marker-symbol","符号",[["pin","定位针"],["cross","十字"],["flag","旗帜"],["text","文字"],["line","线段（长度）"],["arrow","箭头（长度）"],["circle","圆（直径）"],["square","正方形（边长）"],["sphere","球（直径）"]]),pe=F(R,"marker-size","尺寸（km）",".12","number");pe.min=".00001",pe.max="1000";const Ie=F(R,"marker-filled","填充","","checkbox");Ie.checked=!0;const ae=F(R,"marker-opacity","填充透明度",".12","number");ae.min=".02",ae.max=".6",ae.step=".01";const Ae=F(R,"marker-visible","显示标记","","checkbox");Ae.checked=!0;const we={pitch:F(R,"marker-pitch","俯仰 X°","0","number"),yaw:F(R,"marker-yaw","方向 Z°","0","number"),roll:F(R,"marker-roll","翻滚 Y°","0","number")},Ce=J(R,"marker-position","位置",{x:0,y:0,z:0}),A=F(R,"marker-height","高度（m）","0","number"),x=()=>{A.value=Ce.fields.y.value.trim()?String(Ce.fields.y.valueAsNumber*1e3):""},O=J(R,"marker-a","端点 A",{x:-.06,y:0,z:0}),Z=J(R,"marker-b","端点 B",{x:.06,y:0,z:0}),X=F(R,"marker-a-height","端点 A 高度（m）","0","number"),W=F(R,"marker-b-height","端点 B 高度（m）","0","number"),ke=y("label");ke.className="tool-row",ke.append(y("span","说明"));const _e=N(y("textarea"));_e.id="marker-description",_e.maxLength=4096,ke.append(_e),R.append(ke);const $e=M(R),Ye=S($e,"marker-apply","应用所选标记",()=>{const E=t;if(!E)throw new Error("请先选择标记");const L=T(E);j("修改标记",k=>{const B=k.markers.findIndex($=>$.id===E);if(B<0)throw new Error("标记已被移除");k.markers[B]=L},"markers")});S($e,"marker-ground","坐标贴地",()=>{const E=Ce.read();E.y=n.sampleHeightKm(E.x,E.z),Ce.set(E),x(),D("地形高度已填入","markers")});const be=I(n.markersPanel,"marker-create","新增标记"),Pe=M(be);S(Pe,"marker-pick","点地图放置",()=>{const E=T(Wr("marker"),{x:0,y:0,z:0});Lt({kind:"marker",marker:E}),n.onOpenPanel?.("markers"),D("标记放置中","markers")}),S(Pe,"marker-pick-two","两点确认方向与尺寸",()=>{const E=T(Wr("marker"),{x:0,y:0,z:0});if(!Pi(E))throw new Error("请选择线段、箭头、圆、正方形或球");Lt({kind:"marker",marker:E,twoPoint:!0}),n.onOpenPanel?.("markers"),D("端点 A 选择中","markers")}),S(Pe,"marker-add-position","按坐标新增",()=>{const E=T(Wr("marker"));j("新增标记",L=>L.markers.push(E),"markers",()=>{qn("marker",E.id)})}),S(Pe,"marker-new","清空选择／新标记",()=>{qn("marker",""),H(),lt(),$t(),ft(),kr()},!1),S(Pe,"marker-cancel","取消放置",ai,!1),n.markersPanel.append(C);const Ze=V(n.drawingsPanel,"drawing-list","标尺／图形列表",[],!1);Ze.size=5;const Ke=M(n.drawingsPanel);S(Ke,"drawing-focus","定位",()=>{const E=Ai();E&&an(E)},!1);const Re=V(n.drawingsPanel,"drawing-endpoint","移动目标",[["whole","整体"],["a","端点 A"],["b","端点 B"]],!1),mt=S(Ke,"drawing-move","三轴移动",()=>{Ai()?.points[0]&&bt(i,!0,a)});S(Ke,"drawing-copy","复制",()=>{const E=Ai();if(!E)throw new Error("请先选择标尺或图形");const L={...E,id:Wr("drawing"),label:`${E.label.slice(0,122)} 副本`,points:E.points.map(k=>({...k,x:k.x+.2,z:k.z+.2}))};j("复制制图标尺",k=>k.drawings.push(L),"drawing",()=>{qn("drawing",L.id)})}),S(Ke,"drawing-delete","删除",()=>{const E=i;if(!E)throw new Error("请先选择标尺或图形");j("删除制图标尺",L=>{L.drawings=L.drawings.filter(k=>k.id!==E)},"drawing",()=>{qn("drawing","")})});const U=I(n.drawingsPanel,"drawing-properties","标尺属性与坐标"),ye=F(U,"drawing-label","名称","测距"),Se=V(U,"drawing-kind","类型",[["measure","自由测距"],["bearing","水平方位角（N=0°）"],["circle","平面圆规"],["sphere","立体半透明球"]]),Xe=F(U,"drawing-color","颜色","#2d8cff","color"),ge=F(U,"drawing-visible","显示图形","","checkbox");ge.checked=!0;const re=F(U,"drawing-filled","填充","","checkbox");re.checked=!0;const qe=F(U,"drawing-opacity","填充透明度",".12","number");qe.min=".02",qe.max=".6",qe.step=".01";const ie=V(U,"drawing-plane","圆规平面",[["xz","XY 水平"],["xy","XZ 垂直"],["yz","YZ 垂直"]]),Ne=J(U,"drawing-a","起点／中心",{x:0,y:0,z:0}),Fe=F(U,"drawing-height","高度（m）","0","number"),ht=J(U,"drawing-b","终点",{x:1,y:0,z:0}),Mt=F(U,"drawing-b-height","终点高度（m）","0","number"),Vo=()=>{Fe.value=Ne.fields.y.value.trim()?String(Ne.fields.y.valueAsNumber*1e3):"",Mt.value=ht.fields.y.value.trim()?String(ht.fields.y.valueAsNumber*1e3):""},Fn=F(U,"drawing-radius","半径（km）","2","number");Fn.min=".00001",Fn.max="1000";const Nr=y("p");Nr.id="drawing-readout",U.append(Nr);const Go=M(U),Wo=S(Go,"drawing-apply","应用所选图形",()=>{const E=i;if(!E)throw new Error("请先选择标尺或图形");const L=z(E);j("修改制图标尺",k=>{const B=k.drawings.findIndex($=>$.id===E);if(B<0)throw new Error("图形已被移除");k.drawings[B]=L},"drawing")});S(Go,"drawing-ground","起点／中心贴地",()=>{const E=Ne.read();E.y=n.sampleHeightKm(E.x,E.z),Ne.set(E),Ge(),D("地形高度已填入","drawing")});const Ur=I(n.drawingsPanel,"drawing-create","测距与制图"),is=M(Ur);S(is,"drawing-pick-measure","点选两点测距",()=>On("measure")),S(is,"drawing-pick-bearing","点选两点测方位角",()=>On("bearing"));const Vs=y("p","方位角：正北 N=0°，顺时针 E=90°、S=180°、W=270°；仅按水平位置计算。");Ur.append(Vs),S(is,"drawing-pick-circle","圆规：中心＋半径点",()=>On("circle")),S(is,"drawing-pick-sphere","球体：中心＋半径点",()=>On("sphere"));const rs=M(Ur);S(rs,"drawing-add-position","按坐标／半径新增",()=>{const E=z(Wr("drawing"));j("新增制图标尺",L=>L.drawings.push(E),"drawing",()=>{qn("drawing",E.id)})}),S(rs,"drawing-pick-center","点地图定中心＋输入半径",()=>{const E=Se.value;if(En(E))throw new Error("请选择平面圆规或球体，再使用输入半径方式");const L=z(Wr("drawing"),!0),k=G(Fn);if(k<=0||k>1e3)throw new Error("半径须大于0且不超过1000 km");L.radiusKm=k,Lt({kind:E,drawing:L}),Yi=!0,D("中心点放置中","drawing")}),S(rs,"drawing-new","清空选择／新图形",()=>{qn("drawing",""),Me(),lt(),ft(),kr()},!1),S(rs,"drawing-cancel","取消作图",ai,!1),n.drawingsPanel.append(P);let Yi=!1;function oi(){return n.read().markers.find(E=>E.id===t)}function Ai(){return n.read().drawings.find(E=>E.id===i)}function rc(){if(e||!s)return null;const E=n.read(),L=s==="marker"?t:i,k=s==="drawing"?E.drawings.find(le=>le.id===L):void 0,B=s==="marker"?E.markers.find(le=>le.id===L):void 0,$=En(k?.kind)||B&&Pi(B)?a:void 0,ce=B?$===void 0?B.position:_s(B)[$]:k?.points[$??0];return L&&ce?{kind:s,id:L,position:ei(ce),...$===void 0?{}:{pointIndex:$}}:null}function kr(E=!1){if(e||d)return;const L=rc(),k=L?JSON.stringify([L.kind,L.id,L.pointIndex]):"",B=n.editable(),$=k!==c||!!L&&B!==l;if(c=k,l=B,!(!$&&!E)){d=!0;try{n.onSelectionChange?.(L)}finally{d=!1}}}function qn(E,L,k){E==="marker"?t=L:i=L,a=k,L?s=E:s===E&&(s=null)}function Vl(){e||(t="",i="",a=void 0,s=null,H(),Me(),lt(),$t(),ft(),kr())}function T(E,L){const k=G(pe);if(k<=0||k>1e3)throw new Error("尺寸须大于0且不超过1000 km");const B={id:E,label:de(me,"标记"),position:L??Ce.read(),color:Y(ue),symbol:He.value,sizeKm:k,visible:Ae.checked};if(["circle","square","sphere"].includes(B.symbol)){const le=G(ae);if(le<.02||le>.6)throw new Error("透明度范围为0.02–0.6");const et=n.read().markers.find(Oe=>Oe.id===E);(!et||et.filled!==void 0||!Ie.checked)&&(B.filled=Ie.checked),(!et||et.opacity!==void 0||le!==.12)&&(B.opacity=le)}const $=_e.value.trim().slice(0,4096);$&&(B.description=$);const ce=n.read().markers.find(le=>le.id===E);if(Pi(B)){ce?.controlPoints&&(B.controlPoints=ce.controlPoints.map(ei));const le={pitch:0,yaw:0,roll:0};for(const et of["pitch","yaw","roll"]){const Oe=ce?.attitude?.[et]??0;le[et]=we[et].value===String(jt.radToDeg(Oe))?Oe:jt.degToRad(G(we[et]))}if((ce?.attitude||Object.values(le).some(et=>et!==0))&&(B.attitude=le),o&&!L)return Qc(B,[O.read(),Z.read()]);if(B.controlPoints&&ce&&(Ss(ce.position,B.position)>0||B.sizeKm!==ce.sizeKm||JSON.stringify(B.attitude)!==JSON.stringify(ce.attitude)))return Nm(B,B.position,le,k)}return B}function z(E,L=!1){const k=Se.value,B=L?{x:0,y:0,z:0}:Ne.read(),$={id:E,label:de(ye,Gc(k)),kind:k,points:En(k)?[B,L?ei(B):ht.read()]:[B],color:Y(Xe),visible:ge.checked};if(!En(k)){const ce=L?1:G(Fn),le=G(qe);if(ce<=0||ce>1e3)throw new Error("半径须大于0且不超过1000 km");if(le<.02||le>.6)throw new Error("透明度范围为0.02–0.6");$.radiusKm=ce,$.opacity=le,$.plane=ie.value;const et=n.read().drawings.find(Oe=>Oe.id===E);(!et||et.filled!==void 0||!re.checked)&&($.filled=re.checked)}return $}function j(E,L,k,B){if(!n.editable())return D("只读",k),!1;try{const $=n.change(E,L);return $?(B?.(),B&&(r=""),Wt(),D(`${E}已保存`,k)):D("操作未保存或内容没有变化",k),$}catch($){return D($ instanceof Error?$.message:String($),k),!1}}function K(E,L,k,B){const $=f,ce=u,le=Yi;f=null,n.onPickingChange(!1);const et=j(E,L,k,B);if(et)u=null,Yi=!1,q(m);else if($&&n.editable()&&!e){const Oe=(k==="markers"?C:P).textContent;f=$,u=ce,Yi=le,n.onPickingChange(!0),zn(),D(Oe||"未保存",k)}return et}function H(){const E=oi();me.value=E?.label??"标记",ue.value=E?.color??"#ffd84a",He.value=E?.symbol??"pin",Ae.checked=E?.visible!==!1,_e.value=E?.description??"",pe.value=String(E?.sizeKm??.12),Ie.checked=E?.filled!==!1,ae.value=String(E?.opacity??.12),Qe(),Ce.set(E?.position??{x:0,y:0,z:0}),x(),o=!1;for(const k of["pitch","yaw","roll"])we[k].value=String(jt.radToDeg(E?.attitude?.[k]??0));const L=_s(E??{position:{x:0,y:0,z:0}});O.set(L[0]),Z.set(L[1]),Kn(),s==="marker"&&(!E||!Pi(E))&&(a=void 0),ne.value=s==="marker"&&a===0?"a":s==="marker"&&a===1?"b":"whole",ne.closest("label").hidden=!E||!Pi(E),Ye.disabled=!n.editable()||!E,fe.disabled=!n.editable()||!E,ee.disabled=te.disabled=!n.editable()||!E||!Pi(E)}function Me(){const E=Ai();ye.value=E?.label??"测距",Se.value=E?.kind??"measure",Xe.value=E?.color??"#2d8cff",re.checked=E?.filled!==!1,ge.checked=E?.visible!==!1,qe.value=String(E?.opacity??.12),ie.value=E?.plane??"xz",Fn.value=String(E?.radiusKm??2),Ne.set(E?.points[0]??{x:0,y:0,z:0}),ht.set(E?.points[1]??{x:1,y:0,z:0}),Ve(),Vo(),Wo.disabled=!n.editable()||!E,mt.disabled=!n.editable()||!E?.points[0],Ge()}function Ve(){const E=Ai();s==="drawing"&&(!En(E?.kind)||a!==void 0&&!E?.points[a])&&(a=void 0),Re.value=s==="drawing"&&a===0?"a":s==="drawing"&&a===1?"b":"whole",Re.closest("label").hidden=!En(E?.kind),Re.disabled=!En(E?.kind)}function Qe(){const E=["line","arrow","circle","square","sphere"].includes(He.value),L=["circle","square","sphere"].includes(He.value);Ie.closest("label").hidden=!L;for(const k of Object.values(we))k.closest("label").hidden=!E;for(const k of[O.row,Z.row])k.hidden=!E;X.closest("label").hidden=!E,W.closest("label").hidden=!E,ae.closest("label").hidden=!L,ae.disabled=!n.editable()||!Ie.checked}function Ge(){const E=Se.value,L=En(E);ht.row.hidden=!L;const k=ht.row.previousElementSibling;k&&(k.hidden=!L),Fn.closest("label").hidden=L,qe.closest("label").hidden=L,ie.closest("label").hidden=E!=="circle",re.closest("label").hidden=L,Mt.closest("label").hidden=!L,qe.disabled=!n.editable()||!re.checked,Vo();try{Nr.textContent=E==="bearing"?Cm(Ne.read(),ht.read()):E==="measure"?Um(Ne.read(),ht.read()):`半径 ${Mr(G(Fn))} km · 直径 ${Mr(G(Fn)*2)} km${E==="circle"?` · ${{xz:"XY",xy:"XZ",yz:"YZ"}[ie.value]}平面`:" · 3D范围"}`}catch{Nr.textContent="—"}}function lt(){const E=n.read();se.replaceChildren(...E.markers.map(L=>new Option(`${L.visible===!1?"隐藏 · ":""}${L.label}`,L.id))),se.value=t,Ze.replaceChildren(...E.drawings.map(L=>new Option(`${L.visible===!1?"隐藏 · ":""}${Gc(L.kind)} · ${L.label}${En(L.kind)&&L.points[1]?` · ${sa(L)}`:` · R ${Mr(L.radiusKm??0)} km`}`,L.id))),Ze.value=i}function ft(){for(const E of g)E.element.setAttribute("aria-pressed",String(E.element.dataset.markerId?E.element.dataset.markerId===t:E.element.dataset.drawingId===i))}function st(E,L=!0,k){if(n.read().markers.some($=>$.id===E)&&n.onMarkerPick?.(E)){lt();return}const B=n.read().markers.find($=>$.id===E);qn("marker",B?E:"",B&&Pi(B)?k:void 0),H(),lt(),$t(),ft(),kr(L&&!!t),n.onOpenPanel?.("markers")}function bt(E,L=!0,k){const B=n.read().drawings.find($=>$.id===E);qn("drawing",B?E:"",En(B?.kind)&&k!==void 0&&B?.points[k]?k:void 0),Me(),lt(),ft(),kr(L&&!!i),n.onOpenPanel?.("drawing")}function Gt(E){if(e)return!1;let L=E;for(;L&&L!==h;)L=L.parent;if(!L)return!1;for(let k=E;k&&k!==h;k=k.parent){const B=k.userData.editorTool;if(B?.id){if(B.kind==="marker"&&n.read().markers.some($=>$.id===B.id))return st(B.id,!0,B.pointIndex),!0;if(B.kind==="drawing"&&n.read().drawings.some($=>$.id===B.id))return bt(B.id,!0,B.pointIndex),!0}}return!1}function an(E){const L=E.points[0];if(!L)return;const k=E.points[1];En(E.kind)&&k?n.focus({x:(L.x+k.x)/2,y:E.kind==="bearing"?L.y:(L.y+k.y)/2,z:(L.z+k.z)/2},Math.max(.2,(E.kind==="bearing"?Math.hypot(k.x-L.x,k.z-L.z):Ss(L,k))/2)):n.focus(ei(L),E.radiusKm)}function $t(){for(const E of h.children){if(E.userData.editorTool?.kind!=="marker")continue;for(const k of[...E.children])k.userData.editorTool?.pointIndex!==void 0&&(k.traverse(B=>{B instanceof Ee&&(B.geometry.dispose(),B.material.dispose())}),E.remove(k));const L=n.read().markers.find(k=>k.id===E.userData.editorTool.id);!L||L.id!==t||!Pi(L)||_s(L).forEach((k,B)=>{const $=$n(k).sub(E.position).applyQuaternion(E.quaternion.clone().invert()).divideScalar(E.scale.x),ce=xe(E,{x:$.x/tt,y:$.y/tt,z:$.z/tt},L.color);ce.userData.editorTool={kind:"marker",id:L.id,pointIndex:B}})}}function Yt(){q(h),g.length=0,_.replaceChildren();const E=n.read();for(const L of E.markers){if(L.visible===!1)continue;const k=gt(h,L);Te(k,new b(0,tt*.4,0),L.label,L.color,L.description||"",()=>st(L.id),()=>n.focus(ei(L.position))).dataset.markerId=L.id}for(const L of E.drawings){if(L.visible===!1||!L.points.length)continue;const k=Q(h,L),B=L.points[0],$=L.points[1],ce=En(L.kind)&&$?`${L.label} · ${sa(L)}`:`${L.label} · 半径 ${Mr(L.radiusKm??0)} km`,le=L.kind==="measure"&&$?$n({x:(B.x+$.x)/2,y:(B.y+$.y)/2+.1,z:(B.z+$.z)/2}):new b(0,tt*.12,0);Te(k,le,ce,L.color,"",()=>bt(L.id),()=>an(L)).dataset.drawingId=L.id}ft()}function pt(){if(e)return;if(!n.editable()){Wt();return}const E=n.read();for(const B of h.children){const $=B.userData.editorTool;if($.kind==="marker"){const ce=E.markers.find(Nt=>Nt.id===$.id);if(!ce||ce.visible===!1){Wt();return}B.position.copy($n(ce.position)),B.quaternion.copy(La(ce));const le=ce.sizeKm??.12,et=B.userData.markerSize??le;B.scale.setScalar(le/et);const Oe=B.quaternion.clone().invert();for(const Nt of B.children)if(Nt.userData.editorTool?.pointIndex!==void 0){const Xt=_s(ce)[Nt.userData.editorTool.pointIndex];Nt.position.copy($n(Xt).sub(B.position).applyQuaternion(Oe).divideScalar(B.scale.x))}}else{const ce=E.drawings.find(le=>le.id===$.id);if(!ce||ce.visible===!1||!ce.points[0]){Wt();return}if(ce.kind==="bearing")xt(B,ce);else if(ce.kind!=="measure")B.position.copy($n(ce.points[0]));else for(const le of B.children)if(le instanceof rn)le.geometry.setFromPoints(ce.points.map($n)),le.geometry.computeBoundingSphere();else if(le.userData.editorTool?.pointIndex!==void 0){const et=ce.points[le.userData.editorTool.pointIndex];et&&le.position.copy($n(et))}}}for(const B of g){const $=B.element.dataset.drawingId;if(!$)continue;const ce=E.drawings.find(Oe=>Oe.id===$),le=ce?.points[0],et=ce?.points[1];!ce||!En(ce.kind)||!le||!et||(ce.kind==="measure"&&B.object.position.copy($n({x:(le.x+et.x)/2,y:(le.y+et.y)/2+.1,z:(le.z+et.z)/2})),B.element.textContent=`${ce.label} · ${sa(ce)}`)}const L=oi(),k=Ai();if(L){Ce.set(L.position),x(),pe.value=String(L.sizeKm??.12);const B=_s(L);O.set(B[0]),Z.set(B[1]),Kn();for(const $ of["pitch","yaw","roll"])we[$].value=String(jt.radToDeg(L.attitude?.[$]??0))}k&&(Ne.set(k.points[0]??{x:0,y:0,z:0}),ht.set(k.points[1]??{x:1,y:0,z:0}),Ge())}function Wt(){if(e)return;f&&!n.editable()&&ai();const E=n.read(),L=JSON.stringify({markers:E.markers,drawings:E.drawings}),k=n.editable();p.forEach(B=>{B.disabled=!k}),t&&!E.markers.some(B=>B.id===t)&&qn("marker",""),i&&!E.drawings.some(B=>B.id===i)&&qn("drawing",""),r!==L&&(r=L,lt(),H(),Me(),Yt()),Ye.disabled=!k||!oi(),Wo.disabled=!k||!Ai(),fe.disabled=!k||!oi(),mt.disabled=!k||!Ai()?.points[0],ee.disabled=te.disabled=!k||!oi()||!Pi(oi()),Qe(),Ge(),!k&&!f?(C.textContent="只读",P.textContent="只读"):k&&!f&&(C.textContent==="只读"&&(C.textContent=""),P.textContent==="只读"&&(P.textContent="")),kr()}function Lt(E){ai(),n.editable()&&(f=E,Yi=!1,n.onPickingChange(!0))}function On(E){Se.value=E,(!i||["测距","方位角","圆规","范围球"].includes(ye.value))&&(ye.value=Gc(E)),Ge();const L=z(Wr("drawing"),!0);Lt({kind:E,drawing:L}),n.onOpenPanel?.("drawing"),D(En(E)?"起点选择中":"中心点选择中","drawing")}function ai(){const E=f;f=null,u=null,Yi=!1,q(m),E&&(n.onPickingChange(!1),D("已退出地图点选",E.kind==="marker"?"markers":"drawing"))}function zn(){q(m);const E=f,L=u;if(!(!E||!L))if(E.kind==="marker")E.twoPoint?E.first?(xe(m,E.first,E.marker.color,.08),xe(m,L,E.marker.color,.08),Ss(E.first,L)>0&&Ss(E.first,L)<=1e3&&gt(m,Qc(E.marker,[E.first,L]),!0)):xe(m,L,E.marker.color,.08):gt(m,{...E.marker,position:L},!0);else if(!E.first)xe(m,L,E.drawing.color,.08),Yi&&Q(m,{...E.drawing,points:[L]},!0);else if(En(E.kind)){const k={...E.drawing,points:[E.first,L]};Q(m,k,!0),D(sa(k),"drawing")}else{const k=fp(E.first,L,E.kind,E.drawing.plane??"xz");xe(m,E.first,E.drawing.color,.08),m.add(oe([$n(E.first),$n(L)],E.drawing.color,.6)),k>0&&k<=1e3&&Q(m,{...E.drawing,points:[E.first],radiusKm:k},!0),D(`半径 ${Mr(k)} km${k>1e3?"（超出1000 km）":""}`,"drawing")}}function ss(E){e||!f||E&&!Od(E)||!E&&!u||E&&u&&Ss(E,u)<1e-5||(u=E?ei(E):null,zn())}function cn(E){const L=f;if(e||!L||!n.editable()){n.editable()||ai();return}if(!Od(E)){D("点位坐标超出有效范围");return}try{if(L.kind==="marker"){if(L.twoPoint&&!L.first){L.first=ei(E),u=ei(E),zn(),D("端点 B 选择中","markers");return}const k=L.twoPoint?Qc(L.marker,[L.first,E]):{...L.marker,position:ei(E)};K("地图放置标记",B=>B.markers.push(k),"markers",()=>{qn("marker",k.id)})&&D("标记已放置并保存","markers")}else if(Yi){const k={...L.drawing,points:[ei(E)]};K("地图放置范围图形",B=>B.drawings.push(k),"drawing",()=>{qn("drawing",k.id)})&&D("图形已放置并保存","drawing")}else if(!L.first)L.first=ei(E),u=ei(E),zn(),D(En(L.kind)?"终点选择中":"半径点选择中","drawing");else{const k={...L.drawing,points:En(L.kind)?[ei(L.first),ei(E)]:[ei(L.first)]};if(!En(L.kind)){const B=fp(L.first,E,L.kind,L.drawing.plane??"xz");if(B<=0||B>1e3)throw new Error("半径须大于0且不超过1000 km，请重新选择半径点");k.radiusKm=B}K("地图作图",B=>B.drawings.push(k),"drawing",()=>{qn("drawing",k.id)})&&D(En(k.kind)?`${Gc(k.kind)}已保存：${sa(k)}`:`图形已保存：半径 ${Mr(k.radiusKm)} km`,"drawing")}}catch(k){D(k instanceof Error?k.message:String(k),L.kind==="marker"?"markers":"drawing")}}const ci=E=>{E.key==="Escape"&&f&&(ai(),E.preventDefault())};addEventListener("keydown",ci),se.addEventListener("change",()=>st(se.value)),Ze.addEventListener("change",()=>bt(Ze.value)),Re.addEventListener("change",()=>{if(e||!En(Ai()?.kind))return;const E=Re.value==="a"?0:Re.value==="b"?1:void 0;bt(i,!1,E)}),Ce.fields.y.addEventListener("input",x),A.addEventListener("input",()=>{Ce.fields.y.value=A.value.trim()?String(A.valueAsNumber/1e3):""}),ne.addEventListener("change",()=>st(t,!1,ne.value==="a"?0:ne.value==="b"?1:void 0)),He.addEventListener("input",Qe),Ie.addEventListener("input",Qe),re.addEventListener("input",Ge);for(const E of[A,pe,...Object.values(Ce.fields),...Object.values(we)])E.addEventListener("input",()=>{o=!1});function Kn(){X.value=O.fields.y.value.trim()?String(O.fields.y.valueAsNumber*1e3):"",W.value=Z.fields.y.value.trim()?String(Z.fields.y.valueAsNumber*1e3):""}for(const E of[...Object.values(O.fields),...Object.values(Z.fields)])E.addEventListener("input",()=>{o=!0,Kn()});for(const[E,L]of[[X,O],[W,Z],[Fe,Ne],[Mt,ht]])E.addEventListener("input",()=>{L.fields.y.value=E.value.trim()?String(E.valueAsNumber/1e3):"",E===X||E===W?o=!0:Ge()});for(const E of[...Object.values(Ne.fields),...Object.values(ht.fields),Fn,ie,Se])E.addEventListener("input",Ge);const Bn=(E,L)=>{for(const k of E)k.addEventListener("change",()=>{if(!(f||!n.editable()||e||!(L==="markers"?oi():Ai())))try{const B=L==="markers"?t:i,$=L==="markers"?T(B):z(B),ce=L==="markers"?oi():Ai();if(JSON.stringify(ce)===JSON.stringify($))return;j(L==="markers"?"修改标记":"修改制图标尺",le=>{if(L==="markers"){const et=le.markers.findIndex(Oe=>Oe.id===B);et>=0&&(le.markers[et]=$)}else{const et=le.drawings.findIndex(Oe=>Oe.id===B);et>=0&&(le.drawings[et]=$)}},L)}catch(B){D(B instanceof Error?B.message:String(B),L)}})};return Bn([me,ue,He,pe,Ie,ae,Ae,_e,A,X,W,...Object.values(we),...Object.values(Ce.fields),...Object.values(O.fields),...Object.values(Z.fields)],"markers"),Bn([ye,Se,Xe,ge,re,qe,ie,Fe,Mt,Fn,...Object.values(Ne.fields),...Object.values(ht.fields)],"drawing"),H(),Me(),D("","markers"),D("","drawing"),Wt(),{sync:Wt,syncPosition:pt,selectObject:Gt,selection:rc,clearSelection:Vl,isPicking:()=>!!f,pick:cn,preview:ss,cancel:ai,updateLabels(E,L,k){if(e)return;E.updateMatrixWorld(),h.updateWorldMatrix(!0,!0);const B=new b;for(const $ of g){const ce=$.object.getWorldPosition(B).project(E),le=ce.z>=-1&&ce.z<=1&&Math.abs(ce.x)<=1.08&&Math.abs(ce.y)<=1.08;$.element.hidden=!le,le&&($.element.style.left=`${(ce.x+1)*L/2}px`,$.element.style.top=`${(1-ce.y)*k/2}px`)}},dispose(){e||(ai(),e=!0,removeEventListener("keydown",ci),q(h),q(m),n.world.remove(h,m),_.remove(),w.remove(),g.length=0,p.length=0,n.markersPanel.replaceChildren(),n.drawingsPanel.replaceChildren(),n.markersPanel.classList.remove("scene-tool-panel"),n.drawingsPanel.classList.remove("scene-tool-panel"))}}}function uw(n,e,t,i,r=360,s=1440){const o=i*Math.PI/180,a=Math.max(.25,1-r/Math.max(1,s)),c=2*Math.atan(Math.tan(o/2)*Math.max(.1,t)*a),l=Math.hypot(Math.max(1,n),Math.max(1,e)),d=l/Math.sin(Math.min(o,c)/2)*1.12,f=Math.max(1e4,d*10);return{distance:d,maxDistance:f,far:Math.max(5e4,f*3),near:Math.max(.1,l/1e5)}}const vo=n=>({id:n.id,revision:n.revision});function ph(n,e){const t=n.sessions.find(i=>i.id===e);if(!t)throw new Error(`Unknown session: ${e}`);if(t.workflow||t.status==="finished")throw new Error("Active authoring session required");return t}function km(n){if(typeof n!="string"||!n.trim()||n.trim().length>128)throw new Error("Name must contain 1..128 characters");return n.trim()}function Fm(n,e,t,i,r,s){const o=Gu(e);Mg(n,o);const a=ph(o,t);return{project:o,sessionId:t,selection:{kind:i,ref:vo(r)},mapRef:vo(s),taskRef:vo(a.taskRef)}}function hw(n,e,t,i){const r=Gu(n);if(!ph(r,e).mapEditRef)throw new Error("Terrain editing session required");const o=Ap(r,e,t,km(i)),a={id:t,revision:1};return o.sessions.find(c=>c.id===e).mapEditRef=vo(a),Fm(r,o,e,"map",a,a)}function fw(n,e,t,i){const r=Gu(n);if(ph(r,e).mapEditRef)throw new Error("Task authoring session required");if(!t||typeof t!="object")throw new Error("New map and task IDs required");const o=km(i),a={id:t.mapId,revision:1},c={id:t.taskId,revision:1};let l=Ap(r,e,t.mapId,`${o} MAP`.slice(0,128));l=bg(l,e,a,t.taskId,o);const d=l.sessions.find(f=>f.id===e);return d.taskRef=vo(c),d.mapRef=vo(a),Fm(r,l,e,"task",c,a)}function pw(n,e){return n===void 0||e<n?"active":e===n?"destroyed":"wreck"}const mw=2800,pp=180,gw=3,mp="ac-notice-host";function _w(n=document){const e=n.defaultView,t=()=>!!e?.matchMedia?.("(prefers-reduced-motion: reduce)").matches,i=new Map;let r=null;const s=()=>{if(r?.isConnected)return r;const c=n.getElementById(mp);if(c)return r=c,r;const l=n.createElement("div");return l.id=mp,l.className="ac-notice-host",l.setAttribute("role","status"),l.setAttribute("aria-live","polite"),n.body.append(l),r=l,l},o=c=>{const l=i.get(c);l!==void 0&&(e?.clearTimeout(l),i.delete(c)),c.remove()};return{notify:(c,l="ok")=>{const d=String(c??"").trim();if(!d)return;const f=s(),u=n.createElement("div");for(u.className="ac-notice",u.dataset.tone=l,u.textContent=d,u.addEventListener("click",()=>o(u)),f.append(u);f.children.length>gw;){const _=f.firstElementChild;if(!_)break;o(_)}const h=typeof u.animate=="function";h&&!t()&&u.animate([{opacity:0,transform:"translateY(6px)"},{opacity:1,transform:"none"}],{duration:pp,easing:"cubic-bezier(.2,.9,.2,1)"});const m=e?.setTimeout(()=>{if(i.delete(u),!h||t()){u.remove();return}u.animate([{opacity:1},{opacity:0,transform:"translateY(-4px)"}],{duration:pp,easing:"cubic-bezier(.2,.9,.2,1)"}).addEventListener("finish",()=>u.remove())},mw);m!==void 0&&i.set(u,m)},dispose(){for(const c of i.values())e?.clearTimeout(c);i.clear(),r?.remove(),r=null}}}let gp;function Ar(n,e="ok"){gp??=_w(),gp.notify(n,e)}const _a={squadron:2155134,friendly:2985215,neutral:16767050,enemy:16738613,white:15332072,terrain:6062736},Om={squadron:"中队",friendly:"友军",neutral:"中立",enemy:"敌军"},Uu={active:"在编",destroyed:"已击落",wreck:"残骸"},ns=new y_;ns.background=new Ut(133653);const yt=new Di(42,innerWidth/innerHeight,.1,5e3);yt.position.set(0,240,410);const vt=new $b({antialias:!0,powerPreference:"high-performance"});vt.setPixelRatio(Math.min(devicePixelRatio,2));vt.setSize(innerWidth,innerHeight);vt.outputColorSpace=fi;vt.domElement.setAttribute("aria-label","三维地图画布");vt.domElement.setAttribute("role","img");vt.domElement.tabIndex=0;document.querySelector("#scene").appendChild(vt.domElement);const It=new jb(yt,vt.domElement);It.target.set(0,0,0);It.enableDamping=!0;It.dampingFactor=.08;It.minDistance=35;It.maxDistance=1e4;It.maxPolarAngle=Math.PI*.49;const zm=new cv(1588299,30,850);zm.position.set(0,140,0);ns.add(zm);const tn=new Sn;ns.add(tn);let Xr;function Bm(n,e){Xr&&(tn.remove(Xr),Xr.geometry.dispose(),Xr.material.dispose()),Xr=EM(n,e),tn.add(Xr),Mm(Xr,yt.position.distanceTo(It.target))}Bm(750,750);function va(n,e,t=1,i=1){const r=new kt().setFromPoints(n),s=new Mi({color:e,transparent:!0,opacity:i});return new rn(r,s)}let _t=new Rp,Rn=new Pp,Ia=42,As=0;function Et(n,e){return _t.sample(n,e)}function Hm(){const n=document.querySelector("#terrain-contour-smooth").checked;return xM(_t,{smoothing:n})}const Wc=32,pl=new Map,vw=new yn({vertexColors:!0,transparent:!0,opacity:.64,side:fn,depthWrite:!1}),xw=new tm({color:14477547,size:.45,transparent:!0,opacity:.65,depthWrite:!1}),yw=(n,e)=>`${n},${e}`;function Vm(n){const e=Rn.buildings(_t,Ia,As,n),t=[],i=[],r=[],s=Math.cos(As),o=Math.sin(As);for(const c of e){const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([d,f])=>{const u=d*c.width/2,h=f*c.depth/2,m=c.x+u*s-h*o,_=c.z+u*o+h*s;return new b(m,Et(m,_)+.32,_)});for(const d of[0,1,2,0,2,3]){const f=l[d];t.push(f.x,f.y,f.z),i.push(c.shade*.82,c.shade*.91,c.shade)}for(let d=0;d<3;d++){const f=c.x+(d-1)*c.width*.26*s,u=c.z+(d-1)*c.width*.26*o;r.push(f,Et(f,u)+.36,u)}}for(const c of[...n.group.children])c.geometry?.dispose(),n.group.remove(c);const a=new kt;a.setAttribute("position",new Dt(t,3)),a.setAttribute("color",new Dt(i,3)),n.group.add(new Ee(a,vw)),n.group.add(new nm(new kt().setAttribute("position",new Dt(r,3)),xw)),n.group.userData.count=e.length}function Gm(){let n=0;for(const e of pl.values())n+=e.group.userData.count;return n}function Wm(){const n=new Sn;pl.clear();for(let e=0;e<Rn.size;e+=Wc)for(let t=0;t<Rn.size;t+=Wc){const i={minX:t,minZ:e,maxX:Math.min(Rn.size-1,t+Wc-1),maxZ:Math.min(Rn.size-1,e+Wc-1),group:new Sn};Vm(i),pl.set(yw(t,e),i),n.add(i.group)}return n.userData.count=Gm(),n}function Sw(n){for(const e of pl.values())n&&(e.maxX<n.minX||e.minX>n.maxX||e.maxZ<n.minZ||e.minZ>n.maxZ)||Vm(e);Es.userData.count=Gm()}function bw(n){n.traverse(e=>{e.geometry?.dispose()}),tn.remove(n),n.clear()}let xo=null;function Mw(n,e){const t=Math.max(0,Math.floor((n.x-e+Rn.extent)/Rn.spacing)),i=Math.min(Rn.size-1,Math.ceil((n.x+e+Rn.extent)/Rn.spacing)),r=Math.max(0,Math.floor((n.z-e+Rn.extentZ)/Rn.spacingZ)),s=Math.min(Rn.size-1,Math.ceil((n.z+e+Rn.extentZ)/Rn.spacingZ)),o=xo;xo=o?{minX:Math.min(o.minX,t),maxX:Math.max(o.maxX,i),minZ:Math.min(o.minZ,r),maxZ:Math.max(o.maxZ,s)}:{minX:t,maxX:i,minZ:r,maxZ:s}}function ww(){if(!xo)return;const n=xo;xo=null,Sw(n)}let Es=Wm();tn.add(Es);let gi=Hm();tn.add(gi);let Dr=!1,nn=null,ml=null,Na=!0,Rs=null;function Xm(){!nn||ml!==_t?(nn&&(tn.remove(nn.root),nn.dispose()),nn=bm(_t,{smoothing:!!document.querySelector("#terrain-contour-smooth")?.checked}),ml=_t,tn.add(nn.root)):Na&&nn.update();const n=nn.root.children[0]?.material,e=!!document.querySelector("#terrain-contour-smooth")?.checked;n?.userData.terrainContours&&n.userData.contourSmoothing!==e&&(n.userData.contourSmoothing=e,n.needsUpdate=!0),Na=!1,nn.root.visible=gi===nn.root||!!Pt?.height}function qm(){Rs&&(Xm(),nn.update(Rs),Rs=null,gi!==nn.root&&(gi.visible=!1))}function Ew(n,e){const t=Math.max(0,Math.floor((n.x-e+_t.extent)/_t.spacing)),i=Math.min(_t.size-1,Math.ceil((n.x+e+_t.extent)/_t.spacing)),r=Math.max(0,Math.floor((n.z-e+_t.extentZ)/_t.spacingZ)),s=Math.min(_t.size-1,Math.ceil((n.z+e+_t.extentZ)/_t.spacingZ));if(t>i||r>s)return;const o=Rs;Rs=o?{minX:Math.min(o.minX,t),maxX:Math.max(o.maxX,i),minZ:Math.min(o.minZ,r),maxZ:Math.max(o.maxZ,s)}:{minX:t,maxX:i,minZ:r,maxZ:s}}function Dl(n=!1){nc();const e=n&&nn&&ml===_t;Na=!e,Rs=null,nn&&(nn.root.visible=!!e),e?(gi!==nn.root&&Do(gi),gi=nn.root,gi.visible=!0):(gi===nn?.root?(tn.remove(nn.root),nn.dispose(),nn=null):Do(gi),gi=Hm(),tn.add(gi)),Dr=!1,bw(Es),Es=Wm(),tn.add(Es);const t=Ir(De);t.units.forEach(r=>{_h(r,t.turn),(r.unit.icon==="ground"||r.unit.icon==="ship")&&zu(r.unit)}),So();const i=_t.data.reduce((r,s)=>Math.max(r,s),0);document.querySelector("#terrain-state").textContent=`${_t.extent*2/25} × ${_t.extentZ*2/25} km / 最高 ${(i/25).toFixed(2)} km / 建筑 ${Es.userData.count}`}const ot=[{id:"rex",label:"REX",faction:"squadron",kind:"F-16C",icon:"air-filled",positions:[new b(-250,60,250),new b(-170,85,180),new b(-70,108,140),new b(30,125,130),new b(130,138,150)]},{id:"tasha",label:"TASHA",faction:"friendly",kind:"MIRAGE 2000-5",icon:"air-outline",positions:[new b(-210,84,270),new b(-120,88,185),new b(-20,94,130),new b(65,90,80),new b(150,96,30)]},{id:"professor",label:"PROFESSOR",faction:"neutral",kind:"EA-6B",icon:"air-outline",positions:[new b(-275,52,300),new b(-190,55,215),new b(-90,61,165),new b(10,65,125),new b(105,68,85)]},{id:"mig29",label:"MIG-29A",faction:"enemy",kind:"MIG-29",icon:"air-outline",destroyedAtTurn:3,positions:[new b(300,120,-220),new b(195,100,-150),new b(100,78,-70),new b(20,55,10),new b(20,55,10)]},{id:"sam",label:"SAM",faction:"enemy",kind:"SAM",icon:"ground",tgt:!0,positions:[new b(160,0,-150),new b(160,0,-150),new b(160,0,-150),new b(160,0,-150),new b(160,0,-150)]},{id:"frigate",label:"FRIGATE",faction:"enemy",kind:"FRIGATE",icon:"ship",tgt:!0,positions:[new b(245,0,-40),new b(230,0,-30),new b(215,0,-20),new b(200,0,-10),new b(185,0,0)]}],Yn=[{summary:"FORMATION / INITIAL CONTACT",events:[]},{summary:"TACTICAL MOVEMENT / CONTACT",events:[{kind:"attack",attacker:"mig29",target:"rex",weapon:"2AAM"}]},{summary:"ENGAGEMENT / RANGE CLOSING",events:[{kind:"attack",attacker:"rex",target:"mig29",weapon:"QAAM"}]},{summary:"LOSSES / RESULT PENDING",events:[{kind:"destroy",target:"mig29"}]},{summary:"FINAL POSITION / RESULT",events:[]}];function si(){return Yn.length}function wi(){return Yn.length-1}function $m(){return typeof Ct<"u"&&Ct?Ul:wi()}function Bs(n,e){return pw(n.destroyedAtTurn,e)}function zd(n){return ot.find(e=>e.id===n)?.label??n.toUpperCase()}function Tw(n){return n.kind==="attack"?`${zd(n.attacker)} → ${zd(n.target)} / ${n.weapon}`:`${zd(n.target)} 被击落`}function Ir(n){const e=Math.max(0,Math.min(n,wi())),t=Yn[e];return{turn:e,summary:t.summary,events:t.events,units:ot.map(i=>({unit:i,position:Ya(i,i.positions[Math.min(e,i.positions.length-1)],Et),status:Bs(i,e)}))}}ot.forEach(n=>{n.positions.length!==si()&&console.warn(`[scenario] ${n.label} has ${n.positions.length} keyframes but the scenario declares ${si()} turns`)});let De=0,he=null;const Ei=new Map,Ns=new Map,Cs=new Map;let el,oo=null,ku=-1/0,tl="",Bd=[];const Aw=.675,Hd=new mn().setFromEuler(new ri(-Math.PI/2,0,0)),Ym=22,ii=1.5,_p=7.2;function Rw(){const n=[];for(let e=0;e<=64;e++){const t=e/64*Math.PI*2;n.push(new b(Math.cos(t)*_p,Math.sin(t)*_p,0))}return n}function Cw(n,e){const t=HM(n.icon,e);return t.scale.setScalar(Aw),t.traverse(i=>{i.userData.unit=n}),t}function mh(n,e){const t=n.icon==="ground"?Math.PI:0;if(bn())return xa(Dp({...n,destroyedAtTurn:n.attitudes?.[e]?void 0:n.destroyedAtTurn},e,{epsilon:.001}).yaw+t);const i=Math.min(e,n.positions.length-1),r=n.attitudes?.[i];if(r)return xa(r.yaw+t);const s=n.positions[Math.max(0,i-1)],o=n.positions[Math.min(n.positions.length-1,i+1)],a=o.x-s.x,c=o.z-s.z;return Math.hypot(a,c)<.001?null:xa(Math.atan2(-a,-c)+t)}const Vd=.6,vp=2,xp=new b(0,1,0),Pw=new b(1,0,0),Dw=new b(0,0,1);function xa(n){return Math.atan2(Math.sin(n),Math.cos(n))}function yp(n,e){const t=n.positions[e],i=n.positions[e+1];if(!t||!i)return null;const r=i.x-t.x,s=i.z-t.z;return Math.hypot(r,s)<.001?null:Math.atan2(r,s)}function gh(n,e){if(n.icon!=="air-filled"&&n.icon!=="air-outline")return null;if(bn())return Dp({...n,destroyedAtTurn:n.attitudes?.[e]?void 0:n.destroyedAtTurn},e,{epsilon:.001,maxBank:Vd,rollGain:vp});const t=Math.min(e,n.positions.length-1),i=n.attitudes?.[t];if(i)return i;const r=n.positions[Math.max(0,t-1)],s=n.positions[Math.min(n.positions.length-1,t+1)],o=s.x-r.x,a=s.y-r.y,c=s.z-r.z,l=Math.hypot(o,c);if(l<.001&&Math.abs(a)<.001)return null;const d=Math.atan2(-o,-c),f=Math.atan2(a,Math.max(l,.001)),u=yp(n,t-1),h=yp(n,t),m=u===null||h===null?0:jt.clamp(vp*xa(h-u),-Vd,Vd);return{yaw:d,pitch:f,roll:m}}function Oo(n){const e=new Sn;e.userData.unit=n,e.userData.pickable=!0;const t=_a[n.faction],i=n.icon==="ground"||n.icon==="ship";let r=null;i||(r=new Ee(new Rl(2.2,3.3,20),new yn({color:t,transparent:!0,opacity:.8,side:fn})),r.rotation.x=-Math.PI/2,r.userData.unit=n,e.add(r));const s=new rn(new kt,new Mi({color:t,transparent:!0,opacity:.8}));s.userData.unit=n,e.add(s);const o=Cw(n,t),a=new rn(new kt().setFromPoints(Rw()),new Mi({color:t,transparent:!0,opacity:.9,depthTest:!1}));a.visible=!1,a.userData.unit=n,o.add(a);const c=wm(t);c.userData.unit=n,o.add(c),e.add(o);const l=2.6,d=new Mi({color:t,transparent:!0,opacity:.9,depthTest:!1}),f=new Sn;f.add(new rn(new kt().setFromPoints([new b(-l,0,-l),new b(l,0,l)]),d)),f.add(new rn(new kt().setFromPoints([new b(-l,0,l),new b(l,0,-l)]),d)),f.visible=!1,e.add(f);const u=[];o.traverse(g=>{const p=g.material;!p||Array.isArray(p)||u.push({material:p,baseOpacity:p.opacity})});const h=document.createElement("div");h.className=`world-label ${n.faction}`,h.textContent=n.label,h.style.cssText=`position:absolute; left:0; top:0; transform:translate(0, 0); color:#${t.toString(16).padStart(6,"0")}; text-shadow:0 0 7px #${t.toString(16).padStart(6,"0")}; font:14px 'Share Tech Mono',monospace; white-space:nowrap; pointer-events:none;`;const m=new vn;m.userData.dom=h,e.add(m),e.userData.parts={base:r,pole:s,icon:o,label:m,wreck:f,tgtRing:a,escortMarker:c,iconMaterials:u,labelFade:1};const _=UM(t);_.root.traverse(g=>{g.userData.unit=n}),e.add(_.root),Ns.set(n.id,_),tn.add(e),Ei.set(n.id,e)}function _h(n,e){const{unit:t,status:i}=n,r=Ei.get(t.id),s=r.userData.parts,o=i==="wreck",a=!(typeof Ct<"u"&&Ct)&&!bn()&&o&&t.destroyedAtTurn!==void 0,c=Ya(t,a?t.positions[Math.min(t.destroyedAtTurn,t.positions.length-1)]:n.position,Et),l=t.intangible?c.y:Et(c.x,c.z);r.position.set(c.x,l,c.z);const d=Math.max(0,c.y-l),f=Pl(t,c,Et,ii).y-l,u=s.base===null?f+Ym-ii:Math.max(d,.6);if(s.base&&(s.base.visible=!o),s.icon.visible=!o,s.pole.visible=!o,s.wreck.visible=i!=="active",s.wreck.position.y=f,s.tgtRing.visible=t.tgt===!0&&i==="active",s.escortMarker.visible=t.escort===!0&&t.faction!=="enemy"&&i==="active",!o){let g=s.pole.geometry.getAttribute("position");g?(g.setXYZ(0,0,.2,0),g.setXYZ(1,0,u,0),g.needsUpdate=!0):(g=new Dt([0,.2,0,0,u,0],3),s.pole.geometry.setAttribute("position",g)),s.pole.geometry.computeBoundingSphere(),s.pole.geometry.boundingBox&&s.pole.geometry.computeBoundingBox()}const h=s.icon;h.position.y=f;const m=gh(t,e);if(m===null){const g=mh(t,e);g===null?h.quaternion.copy(Hd):h.quaternion.setFromAxisAngle(xp,g).multiply(Hd)}else h.quaternion.setFromAxisAngle(xp,m.yaw).multiply(new mn().setFromAxisAngle(Pw,m.pitch)).multiply(new mn().setFromAxisAngle(Dw,m.roll)).multiply(Hd);const _=i==="destroyed";s.iconMaterials.forEach(({material:g,baseOpacity:p})=>{g.transparent||(g.transparent=!0,g.needsUpdate=!0),g.userData.baseDepthTest??=g.depthTest,g.depthTest=t.intangible?!1:g.userData.baseDepthTest,g.opacity=p*(_?.3:1)*(t.hidden?.35:1)});for(const g of[s.base,s.pole,...s.wreck.children]){const p=g?.material;!p||Array.isArray(p)||(p.userData.hiddenBaseOpacity??=p.opacity,p.opacity=p.userData.hiddenBaseOpacity*(t.hidden?.35:1))}s.labelFade=(o?0:_?.5:1)*(t.hidden?.5:1),s.label.position.y=u}function jm(n,e){const t=new Sn;if(t.userData.trail=!0,n.length<2)return t;const i=[],r=2.3;n.forEach((c,l)=>{const d=n[Math.max(0,l-1)],f=n[Math.min(n.length-1,l+1)],u=new b().subVectors(f,d).normalize(),h=new b(-u.z,0,u.x).normalize().multiplyScalar(r*(.45+l/n.length*.55));i.push(c.x+h.x,c.y+.5,c.z+h.z,c.x-h.x,c.y+.5,c.z-h.z)});const s=[];for(let c=0;c<n.length-1;c++)s.push(c*2,c*2+1,c*2+2,c*2+1,c*2+3,c*2+2);const o=new kt;o.setAttribute("position",new Dt(i,3)),o.setIndex(s),o.computeVertexNormals();const a=new yn({color:e,transparent:!0,opacity:.28,side:fn,depthWrite:!1,blending:Wd});return t.add(new Ee(o,a)),t}function vh(n,e){return bn()?Tt()?.sealedScenes?.find(t=>t.turn<=e&&t.units.some(i=>i.id===n.id))?.turn??e:0}function xh(n,e,t){const i=Lp(n.positions,n.trackPoints??[],e,t).map(a=>new b(a.x,a.y,a.z));if(i.length<2)return[];const r=new ch(i,!1,"centripetal"),s=[];let o=0;for(let a=e;a<t;a++){const c=(n.trackPoints??[]).filter(m=>m.segment===a).length+1,l=o/(i.length-1),d=(o+c)/(i.length-1),f=Math.max(24,c*16),u=i.slice(o,o+c+1).every(m=>m.distanceToSquared(i[o])<1e-12),h=Array.from({length:f+1},(m,_)=>u?i[o].clone():r.getPoint(jt.lerp(l,d,_/f)));s.push({segment:a,points:h,start:l,end:d,curve:r}),o+=c}return s}function Zm(n,e){const{unit:t,status:i}=n;if(i==="wreck"||document.querySelector("#trail-display").value==="none")return;const r=t.destroyedAtTurn===void 0?e:Math.min(e,t.destroyedAtTurn),s=document.querySelector("#trail-display").value==="recent",o=Math.max(1,Math.floor(Number(document.querySelector("#trail-turns").value)||1)),a=vh(t,e),c=Math.max(a,s?Math.max(0,r-o):0),l=xh(t,a,r).filter(f=>f.segment>=c).flatMap((f,u)=>u?f.points.slice(1):f.points);!t.intangible&&(t.icon==="ground"||t.icon==="ship")&&l.forEach(f=>{f.y=Et(f.x,f.z)+ii});const d=jm(l,_a[t.faction]);d.userData.trail=t.id,tn.add(d)}const zo=document.createElement("div");zo.className="labels";zo.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;contain:strict;";document.querySelector("#app").appendChild(zo);function Bo(){for(const[,n]of Ei){const e=n.userData.parts.label,t=e.userData.dom;t.dataset.unitId=n.userData.unit.id,zo.appendChild(t),e.userData.domObject=t}}let Ue=!1,Ot=!1;const _n=[{id:"route-1",name:"ROUTE 1",waypoints:[]}];let Dn="route-1",Ua=2,gl=1,vi="",Li="",ln=null,ka=[],Cn=new Sn;tn.add(Cn);const Ii=new Map;function _l(){return _n.find(n=>n.id===Dn)??_n[0]}function Ro(){return _l()?.waypoints??[]}const vl=document.createElement("div");vl.className="waypoint-labels";document.querySelector("#app").appendChild(vl);const Fu=[];let xl=1,yl=1,Vt=!1,Nn=!1,zt=!1,nt=null,Ji=new Sn;tn.add(Ji);let Pt=null,es=1;const ut=new Set;function Fi(){return ot.filter(n=>ut.has(n.id))}function sr(){return Fi().filter(n=>ja(n))}function Co(){const n=sr();return n.reduce((e,t)=>e.add(Xn(t)),new b).divideScalar(n.length||1)}function jn(n){St?.clearSelection(),nt=null,zt=!1,ut.clear(),n.forEach(e=>ut.add(e.id)),he=n[n.length-1]??null,n.length>1&&(Gi="translate"),at(),rt()}function Ll(n,e=!1){typeof en<"u"&&en?.pick("unit",n.id)||(e?(ut.has(n.id)?ut.delete(n.id):ut.add(n.id),jn(Fi())):jn([n]))}function Fa(n){if(!pi()||!Ue)return;const e=sr();if(!e.length)return;const t=Hs();if(n.lengthSq()<1e-12&&!e.some(r=>zs(r)&&t.some(s=>{const o=r.positions[s];return o.y!==Et(o.x,o.z)})))return;const i=e.filter(r=>Ln(r)&&!r.intangible);i.length&&(n.y=Math.max(n.y,...i.flatMap(r=>t.map(s=>{const o=r.positions[s];return Math.max(0,Et(o.x+n.x,o.z+n.z))-o.y})))),Mn("draft")&&(e.forEach(r=>{ct()&&!bn()&&(r.routeBinding=void 0),t.forEach(s=>r.positions[s].add(n)),ct()&&r.trackPoints?.forEach(s=>{t.includes(s.segment)&&t.includes(s.segment+1)&&(s.x+=n.x,s.y+=n.y,s.z+=n.z)}),bl(r,t)}),at(),rt())}let Zn;const Il=()=>({groups:[],markers:[],drawings:[]}),qi=()=>Zn??Il();let Vn,Km,St,en,Ou,$r,Sl="",Vi=null;const Nl=document.createElement("div");Nl.className="editor-tool-labels";document.querySelector("#app").appendChild(Nl);const Lw=AM(Nl);let ve=null,Ct=!1,nl=null,Oa=null,za=null,Ul=0,il={edit:!1,terrain:!1};const Ps=new Map;let Rr=null,jr=null;function Tt(){if(!ve)return;if(jr?.store===ve&&jr.revision===ve.revision)return jr.session;const n=ve.read(),e=n.project.sessions.find(t=>t.id===(n.editor.sessionId??"session-working"));return jr={store:ve,revision:ve.revision,session:e},e}function bn(){return Tt()?.workflow?.mode==="formal"}function ct(){if(typeof Ct<"u"&&Ct)return!1;const n=Tt();return n?.status!=="finished"&&(!n?.workflow||Ni())}function yi(){return typeof Ct<"u"&&Ct||ct()}function Ni(){const n=Tt();return!!n?.workflow&&n.status!=="finished"&&n.turns.length===n.workflow.committedTurns+1&&De===n.workflow.committedTurns}function pi(){return ct()||Ni()}function Ht(){return!!Je||Le.dragging||!!Pt||!!Pn||!!xi||!!St?.isPicking()}function Gd(n,e){if(!yi()||!Ue||Je||Le.dragging||Pt||Pn||xi||!Mn("tools"))return!1;Zn??=Il(),e(Zn,ot);const t=on(n);return at("tools"),rt(),t}function Iw(n){const e=ot.filter(s=>s.groupId===n.id);if(!ct()||!Ue||!e.length||Ht()||!Mn())return;Zn??=Il();const t={...n,id:`group-${crypto.randomUUID()}`,name:`${n.name} 副本`.slice(0,128)};Zn.groups.push(t);const i=bh().spacing,r=e.map(s=>{const o=Ka(Za(s)),a=es++;return o.id=`unit-${a}`,o.groupId=t.id,o.routeBinding=void 0,delete o.player,delete o.playerActions,o.positions.forEach(c=>{c.x+=i,c.z+=i}),o.trackPoints?.forEach(c=>{c.x+=i,c.z+=i}),ot.push(o),Oo(o),o});Bo(),jn(r),Us("translate")}function yh(n,e=.5){const t=new b(n.x,n.y,n.z).multiplyScalar(tt),i=yt.position.clone().sub(It.target).normalize();i.lengthSq()<.1&&i.set(0,.6,1).normalize();const r=Math.max(90,e*tt/Math.sin(jt.degToRad(yt.fov)/2)*1.4);It.target.copy(t),yt.position.copy(t).addScaledVector(i,Math.min(r,It.maxDistance)),It.update()}function Sp(n){const e=ot.filter(r=>n.includes(r.id)).map(r=>Xn(r));if(!e.length)return;const t=e.reduce((r,s)=>r.add(s),new b).divideScalar(e.length),i=Math.max(15,...e.map(r=>r.distanceTo(t)))/tt;yh({x:t.x/tt,y:t.y/tt,z:t.z/tt},i)}function ja(n){return pi()&&(Ni()||Bs(n,De)==="active")}function Sh(n){return pi()&&(ct()||n.destroyedAtTurn===void 0||n.destroyedAtTurn===De)}function on(n="Edit scenario",e=Rr){if(!ve||!e)return!0;if(Le.dragging||Pt)return!1;try{const t=Jm();return Rr=null,ve.commit(t,n,e),!0}catch(t){return Rr=null,or(ve.read()),he=ot.find(i=>ut.has(i.id))??null,console.error("Scenario transaction rolled back",t),Qt("编辑未保存："+(t instanceof Error?t.message:String(t))),!1}}function Po(n,e){if(n===e)return!0;if(n===null||e===null||typeof n!="object"||typeof e!="object")return!1;if(Array.isArray(n)||Array.isArray(e))return!Array.isArray(n)||!Array.isArray(e)||n.length!==e.length?!1:n.every((s,o)=>Po(s??null,e[o]??null));const t=n,i=e,r=Object.keys(t).filter(s=>t[s]!==void 0);return r.length!==Object.keys(i).filter(s=>i[s]!==void 0).length?!1:r.every(s=>Object.prototype.hasOwnProperty.call(i,s)&&Po(t[s],i[s]))}function Nw(n,e){const t={...n,editor:{...n.editor,currentTurn:e.currentTurn}},i=$u(t,qu(t));if(i.layout=e.layout,!Po(e,i))throw new Error("已提交回合保留原样；请在末尾草稿编辑场景");return{...n,editor:{...t.editor,activeRouteId:e.activeRouteId}}}function Jm(n=kl()){if(typeof Ct<"u"&&Ct&&ve){const u=ve.read(),h=u.project.sessions.find(m=>m.id===u.editor.sessionId);return h.sceneTools=structuredClone(n.sceneTools??Il()),u}if(ve&&(Tt()?.status==="finished"||bn()&&!Ni()))return Nw(ve.read(),n);const e=Rg(n,n.layout??{size:_t.size,extent:_t.extent,extentZ:_t.extentZ});if(!ve)return e;const t=ve.read(),i=t.project,r=t.editor.sessionId??"session-working",s=i.sessions.find(u=>u.id===r),o=i.maps.find(u=>u.id===s.mapRef.id&&u.revision===s.mapRef.revision),a=e.project.sessions[0];if(a.id=s.id,a.name=s.name,a.taskRef=s.taskRef,a.mapRef=s.mapRef,a.resourceSnapshot=s.resourceSnapshot,a.rulesRevision=s.rulesRevision,a.status=s.status,s.rulesRef&&(a.rulesRef={...s.rulesRef}),s.rulesSnapshot&&(a.rulesSnapshot=structuredClone(s.rulesSnapshot)),a.workflow=s.workflow,a.mapEditRef=s.mapEditRef,s.workflow){a.sealedScenes=Cg(s),a.turns=s.turns.map((h,m)=>m===De?a.turns[m]:h);const u=$u(t,qu(t));a.units.forEach(h=>{const m=s.units.find(g=>g.id===h.id),_=u.units.find(g=>g.id===h.id);if(m){for(let g=0;g<De;g++)h.positions[g]=m.positions[g],h.attitudes&&(h.attitudes[g]=m.attitudes?.[g]??null);_&&Po(n.units.find(g=>g.id===h.id)?.positions[De],_.positions[De])&&(h.positions[De]=m.positions[De])}})}const c=e.project.maps[0];c.id=o.id,c.revision=o.revision,c.name=o.name;const l=u=>u.id===o.id&&u.revision===o.revision,d=c.terrain.size!==o.terrain.size||c.terrain.widthKm!==(o.terrain.widthKm??o.terrain.extentKm*2)||c.terrain.heightKm!==(o.terrain.heightKm??o.terrain.extentKm*2)||!Po(c.urban,o.urban)||c.terrain.heightsKm.some((u,h)=>Math.abs(u-o.terrain.heightsKm[h])>1e-7),f=!!s.workflow||i.tasks.some(u=>l(u.mapRef))||i.sessions.some(u=>u.id!==r&&l(u.mapRef));return d&&f&&(c.revision=Math.max(...i.maps.filter(u=>u.id===o.id).map(u=>u.revision))+1,a.mapRef={id:c.id,revision:c.revision}),e.project={...i,maps:d?f?[...i.maps,c]:i.maps.map(u=>l(u)?c:u):i.maps,sessions:i.sessions.map(u=>u.id===r?a:u)},e.editor.sessionId=r,e}function or(n){const e=qu(n);(_t.size!==e.size||_t.extent!==e.extent||_t.extentZ!==e.extentZ)&&(_t=new Rp(e.size,e.extent,e.extentZ),Rn=new Pp(e.size,e.extent,e.extentZ),Bm(e.extent,e.extentZ??e.extent),Ja(),wh()),Uw($u(n,e))}function Za(n){return{id:n.id,label:n.label,faction:n.faction,kind:n.kind,icon:n.icon,positions:n.positions.map(e=>({x:e.x,y:e.y,z:e.z})),attitudes:n.attitudes?.map(e=>e?{...e}:null),destroyedAtTurn:n.destroyedAtTurn,tgt:n.tgt,...n.escort===void 0?{}:{escort:n.escort},...n.hidden===void 0?{}:{hidden:n.hidden},...n.intangible===void 0?{}:{intangible:n.intangible},groupId:n.groupId,aircraftRef:n.aircraftRef?{...n.aircraftRef}:void 0,spRefs:n.spRefs?.map(e=>({...e})),...n.loadout===void 0?{}:{loadout:n.loadout.map(e=>({slot:e.slot,weaponRef:{...e.weaponRef}}))},...n.player===void 0?{}:{player:{...n.player}},...n.playerActions===void 0?{}:{playerActions:structuredClone(n.playerActions)},routeBinding:n.routeBinding?{...n.routeBinding,offset:n.routeBinding.offset?{...n.routeBinding.offset}:void 0}:void 0,trackPoints:n.trackPoints?.map(e=>({...e}))}}function Ka(n){return{id:n.id,label:n.label,faction:n.faction,kind:n.kind,icon:n.icon,positions:n.positions.map(e=>new b(e.x,e.y,e.z)),attitudes:n.attitudes?.map(e=>e?{...e}:null),destroyedAtTurn:n.destroyedAtTurn,tgt:n.tgt,...n.escort===void 0?{}:{escort:n.escort},...n.hidden===void 0?{}:{hidden:n.hidden},...n.intangible===void 0?{}:{intangible:n.intangible},groupId:n.groupId,aircraftRef:n.aircraftRef?{...n.aircraftRef}:void 0,spRefs:n.spRefs?.map(e=>({...e})),...n.loadout===void 0?{}:{loadout:n.loadout.map(e=>({slot:e.slot,weaponRef:{...e.weaponRef}}))},...n.player===void 0?{}:{player:{...n.player}},...n.playerActions===void 0?{}:{playerActions:structuredClone(n.playerActions)},routeBinding:n.routeBinding?{...n.routeBinding,offset:n.routeBinding.offset?{...n.routeBinding.offset}:void 0}:void 0,trackPoints:n.trackPoints?.map(e=>({...e}))}}function kl(){return{units:ot.map(Za),turns:Yn.map(n=>({summary:n.summary,events:n.events.map(e=>({...e}))})),currentTurn:De,...Zn?{sceneTools:structuredClone(Zn)}:{},layout:{size:_t.size,extent:_t.extent,extentZ:_t.extentZ},terrain:_t.data.slice(),urban:Rn.data.slice(),urbanSeed:Ia,urbanAngle:As,routes:_n.map(n=>({...n,waypoints:n.waypoints.map(e=>({...e}))})),activeRouteId:Dn}}function Do(n){n.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i&&i.dispose()}),tn.remove(n)}function Qm(n){const e=Ei.get(n.id);if(!e)return;e.userData.parts.label.userData.dom.remove(),Do(e),Ei.delete(n.id),Ns.delete(n.id),Cs.delete(n.id),nc()}function Uw(n){Zn=n.sceneTools?structuredClone(n.sceneTools):void 0,_n.splice(0,_n.length,...n.routes.map(e=>({...e,waypoints:e.waypoints.map(t=>({...t}))}))),Dn=n.activeRouteId,nt=null,Vt=!1,zt=!1,_t.data.set(n.terrain),Rn.data.set(n.urban),Ia=n.urbanSeed,As=n.urbanAngle,Dr=!0,dt("#urban-seed").value=String(Ia),dt("#urban-angle").value=String(jt.radToDeg(As)),Yn.splice(0,Yn.length,...n.turns.map(e=>({summary:e.summary,events:e.events.map(t=>({...t}))}))),De=Math.min(n.currentTurn,wi());for(const e of[...Ei.values()])Do(e);Ei.clear(),Ns.clear(),Cs.clear(),nc(),zo.replaceChildren(),ot.length=0,n.units.forEach(e=>ot.push(Ka(e))),ot.forEach(Oo),Bo()}function Mn(n="author"){return!Ue||(n==="tools"?!yi():n==="author"?!ct():!pi())||!on()?!1:(Rr=ve?.read()??null,!0)}function eg(n){if(!ve||Le.dragging||Pt||Je||!ct()&&!(Ni()&&n.type==="set-turn-summary"&&n.turn===De&&n.sessionId===Tt()?.id)||!on())return;const e=[...ut];ve.dispatch(n),or(ve.read()),ut.clear(),e.filter(t=>ot.some(i=>i.id===t)).forEach(t=>ut.add(t)),he=Fi().at(-1)??null,at(),rt()}function Fl(){if(Je||Le.dragging||Pt)return;on();const n=ve?.undo();if(!n)return;const e=[...ut];or(n),ut.clear(),e.filter(t=>ot.some(i=>i.id===t)).forEach(t=>ut.add(t)),he=Fi().at(-1)??null,at(),rt()}function Ol(){if(Je||Le.dragging||Pt)return;on();const n=ve?.redo();if(!n)return;const e=[...ut];or(n),ut.clear(),e.filter(t=>ot.some(i=>i.id===t)).forEach(t=>ut.add(t)),he=Fi().at(-1)??null,at(),rt()}function kw(n){Qm(n),Oo(n),Bo()}function zu(n){nc();const e={unit:n,position:Xn(n),status:Bs(n,De)};_h(e,De),tn.children.filter(t=>t.userData.trail===n.id).forEach(t=>Do(t)),Zm(e,De),he===n&&ut.size<=1&&rg(e,Ir(De))}function Xn(n,e=!1){const t=n.positions[Math.min(De,n.positions.length-1)];return e?t:Ya(n,t,Et)}function bl(n,e=Hs()){zs(n)&&(e.forEach(t=>{const i=n.positions[t];i.y=Et(i.x,i.z)}),ct()&&n.trackPoints?.forEach(t=>{e.includes(t.segment)&&e.includes(t.segment+1)&&(t.y=Et(t.x,t.z))}))}function Fw(){!ct()||Tt()?.mapEditRef||!Ue||Le.dragging||(Ti(!0),dn=!1,ts(),ut.clear(),he=null,Je={id:`unit-${es}`,label:`NEW-${String(es).padStart(2,"0")}`,faction:"enemy",kind:"UNKNOWN",icon:"air-outline",tgt:!1,positions:Array.from({length:si()},()=>new b(0,60,0)),attitudes:Array.from({length:si()},()=>({yaw:0,pitch:0,roll:0}))},Bl(),rt())}function Ow(){if(!ct()||!Ue)return;const n=Fi();if(!n.length||Je||Le.dragging||!Mn())return;const e=new Set(n.map(t=>t.id));Zn?.links&&(Zn.links=Zn.links.filter(t=>!e.has(t.fromUnitId)&&!(t.to.kind==="unit"&&e.has(t.to.id)))),n.forEach(t=>{Qm(t),ot.splice(ot.indexOf(t),1)}),Yn.forEach((t,i)=>{(!bn()||i===De)&&(t.events=t.events.filter(r=>!e.has(r.target)&&(r.kind!=="attack"||!e.has(r.attacker))))}),jn([])}function bh(){const n=Math.floor(Number(dt("#create-count").value)),e=Number(dt("#create-spacing").value);return{count:Number.isFinite(n)?jt.clamp(n,1,100):1,spacing:Number.isFinite(e)?jt.clamp(e,1,1e3):20}}function tg(){if(!ct()||!Ue)return;const n=Fi();if(!n.length||Je||Le.dragging)return;const{count:e,spacing:t}=bh();if(!Mn())return;const i=[];for(let r=0;r<e;r++)for(const s of n){const o=Ka(Za(s)),a=es++;o.id=`unit-${a}`,delete o.player,delete o.playerActions,o.routeBinding=void 0,o.trackPoints?.forEach(c=>{c.x+=t*(r+1),c.z+=t*(r+1)}),o.positions.forEach(c=>{c.x+=t*(r+1),c.z+=t*(r+1)}),i.push(o),ot.push(o),Oo(o)}Bo(),jn(i),Us("translate")}ot.forEach(Oo);Bo();function at(n){nc(),on(),ve&&!Rr&&!Le.dragging&&!Pt&&ve.setEditor({currentTurn:De,activeRouteId:Dn,sessionId:ve.read().editor.sessionId??"session-working"}),n!=="tools"&&Eh(),ng();const e=Ir(De);St?.sync(),typeof en<"u"&&(Le.dragging?en?.update():en?.sync()),n!=="tools"&&(tn.children.filter(i=>i.userData.trail).forEach(i=>{tn.remove(i),i.traverse(r=>{(r instanceof Ee||r instanceof rn)&&(r.geometry.dispose(),Array.isArray(r.material)?r.material.forEach(s=>s.dispose()):r.material.dispose())})}),e.units.forEach(i=>{_h(i,e.turn),Zm(i,e.turn)})),document.querySelector("#turn-title").textContent=`TURN ${String(e.turn+1).padStart(2,"0")}`,document.querySelector("#turn-indicator").textContent=`${String(e.turn+1).padStart(2,"0")} / ${String($m()+1).padStart(2,"0")}`,document.querySelector("#turn-summary").textContent=e.summary,document.querySelector("#unit-count").textContent=String(e.units.length).padStart(2,"0"),document.querySelector("#event-list").textContent=e.events.length===0?"无接触":e.events.map(Tw).join(`
`);const t=e.units.find(i=>i.unit===he);t?rg(t,e):(he=null,Bl()),ut.size>1&&(document.querySelector("#selected-name").textContent=`${ut.size} UNITS`,document.querySelector("#selected-detail").textContent=Fi().map(i=>i.label).join(" / "),document.querySelector("#distance-readout").textContent=`${sr().length} 个可移动单位 / 编队移动`,document.querySelector("#attitude-readout").textContent="");for(const[i,r]of Ei)r.userData.parts.label.userData.dom.classList.toggle("unit-selected",Ue&&ut.has(i))}function Bu(){const n=Ir(De),e=n.units.find(s=>s.unit.id===vi),t=n.units.find(s=>s.unit.id===Li),i=Cn.userData.rangeCenters;if(i)for(const[s,o]of i){const a=n.units.find(l=>l.unit.id===s);if(!a)continue;const c=a.position.clone().sub(o);for(const l of Cn.children)l.userData.rangeUnitId===s&&l.position.add(c);o.copy(a.position)}Cn.userData.rangeCenter=i?.get(vi);const r=Cn.children.find(s=>s.userData.rangeConnector);if(e&&t&&e.unit.id!==t.unit.id&&r){const s=r.geometry.getAttribute("position");s.setXYZ(0,e.position.x,e.position.y,e.position.z),s.setXYZ(1,t.position.x,t.position.y,t.position.z),s.needsUpdate=!0,r.geometry.computeBoundingSphere();const o=Xu(e.position,t.position,"slant",Mh());document.querySelector("#range-result").textContent=`${o.band} / 斜距
水平 ${o.horizontalKm.toFixed(2)} km
高差 ${o.altitudeDeltaKm.toFixed(2)} km
斜距 ${o.slantKm.toFixed(2)} km${e.status!=="active"||t.status!=="active"?`
已失效单位 / 仅供参考`:""}`}}function Mh(){const n=Tt(),e=n?.sealedScenes?.find(t=>t.turn===De);return Pg(e?e.rulesSnapshot:n?.rulesSnapshot)}function zl(n){vi=n;const e=Ii.get(n);e&&(document.querySelector("#range-rings").checked=e.rings,document.querySelector("#range-fill").checked=e.fill,document.querySelector("#range-fill-band").value=e.band,document.querySelector("#range-fill-opacity").value=String(e.opacity))}function zw(n){Ii.delete(n),vi===n&&(vi=""),Wn(),at()}function Bw(n,e){for(const a of Ii.keys())n.units.some(c=>c.unit.id===a)||Ii.delete(a);const t=Cn.userData.rangeLayerKeys??new Map,i=Cn.userData.rangeCenters??new Map;Cn.userData.rangeLayerKeys=t,Cn.userData.rangeCenters=i;const r=a=>{for(const c of[...Cn.children])if(c.userData.rangeUnitId===a){const l=c;l.geometry.dispose(),Array.isArray(l.material)?l.material.forEach(d=>d.dispose()):l.material.dispose(),Cn.remove(c)}t.delete(a),i.delete(a)};for(const a of t.keys())Ii.has(a)||r(a);for(const[a,c]of Ii){const l=n.units.find(u=>u.unit.id===a),d=e.find(u=>u.name===c.band)??e[0],f=JSON.stringify([c,e]);if(t.get(a)!==f){if(r(a),t.set(a,f),i.set(a,l.position.clone()),c.fill){const u=new Ee(new Jr(d.maxKm*tt,48,32),new yn({color:d.color,transparent:!0,opacity:c.opacity,depthWrite:!1,side:Cr}));u.position.copy(l.position),u.userData.rangeFill={band:d.name,radiusKm:d.maxKm},u.userData.rangeCentered=!0,u.userData.rangeUnitId=a,Cn.add(u)}if(c.rings)for(const u of e){const h=u.maxKm*tt,m=Array.from({length:129},(g,p)=>{const w=p/128*Math.PI*2;return new b(l.position.x+Math.cos(w)*h,l.position.y,l.position.z+Math.sin(w)*h)}),_=va(m,u.color,1,.5);_.userData.rangeCentered=!0,_.userData.rangeUnitId=a,Cn.add(_)}}}const s=document.querySelector("#range-layer-list");s&&s.replaceChildren(...Array.from(Ii,([a,c])=>{const l=n.units.find(_=>_.unit.id===a),d=document.createElement("div");d.className="range-layer-row",d.dataset.rangeUnitId=a;const f=document.createElement("div");f.textContent=`${l.unit.label} [${a}] · ${c.rings?"截面环":""}${c.rings&&c.fill?" + ":""}${c.fill?`${c.band}球体`:""}`;const u=document.createElement("div");u.className="edit-actions";const h=document.createElement("button");h.type="button",h.textContent="调整",h.setAttribute("aria-label",`调整${l.unit.label}的范围`),h.addEventListener("click",()=>{zl(a),Wn(),at()});const m=document.createElement("button");return m.type="button",m.textContent="移除",m.setAttribute("aria-label",`移除${l.unit.label}的范围`),m.addEventListener("click",()=>zw(a)),u.appendChild(h),u.appendChild(m),d.appendChild(f),d.appendChild(u),d}));const o=document.querySelector("#range-layer-count");o&&(o.textContent=`常驻范围：${Ii.size} 个单位`)}function ng(){const n=Tt()?.id,e=Cn.userData.rangeSessionId;e&&e!==n&&(Ii.clear(),vi=Li=""),Cn.userData.rangeSessionId=n;const t=Mh(),i=Ir(De);i.units.some(m=>m.unit.id===vi)||(vi=""),i.units.some(m=>m.unit.id===Li)||(Li="");for(const[m,_]of[["#range-attacker-name",vi],["#range-target-name",Li]]){const g=i.units.find(p=>p.unit.id===_);document.querySelector(m).textContent=g?`${g.unit.label} [${g.unit.id}] / ${Uu[g.status]}`:"尚未选择"}for(const[m,_]of[["#range-attacker-select",vi],["#range-target-select",Li]]){const g=document.querySelector(m);g&&(g.replaceChildren(...["",...i.units.map(p=>p.unit.id)].map(p=>{const w=document.createElement("option");w.value=p;const y=i.units.find(v=>v.unit.id===p);return w.textContent=y?`${y.unit.label} · ${y.unit.kind}`:"选择单位",w})),g.value=_)}document.querySelector("#range-pick-state").textContent=ln?`${ln==="attacker"?"攻击方":"目标"}选择中`:"";for(const m of["attacker","target"])document.querySelector(`#range-pick-${m}`).setAttribute("aria-pressed",String(ln===m));const r=document.querySelector("#range-candidates");r.hidden=!ka.length,r.replaceChildren(...ka.flatMap(m=>{const _=i.units.find(p=>p.unit.id===m);if(!_)return[];const g=document.createElement("button");return g.textContent=`${_.unit.label} [${m}] / ${_.unit.kind} / ${Om[_.unit.faction]} / ${Uu[_.status]}`,g.addEventListener("click",()=>ig(_.unit)),[g]}));const s="slant";document.querySelector("#range-mode-readout").textContent=s.toUpperCase();const o=i.units.find(m=>m.unit.id===vi),a=i.units.find(m=>m.unit.id===Li),c=document.querySelector("#range-result"),l=document.querySelector("#range-fill").checked,d=document.querySelector("#range-rings").checked,f=t.find(m=>m.name===document.querySelector("#range-fill-band").value)??t[0],u=jt.clamp(Number(document.querySelector("#range-fill-opacity").value)||.12,.02,.6);o&&(l||d?Ii.set(o.unit.id,{fill:l,rings:d,band:f.name,opacity:u}):Ii.delete(o.unit.id)),Bw(i,t);const h=JSON.stringify([o?.unit.id,a?.unit.id]);if(!o||!a)c.textContent="请选择攻击方与目标";else if(o===a)c.textContent="攻击方与目标不能相同";else{const m=Xu(o.position,a.position,s,t);c.textContent=`${m.band} / 斜距
水平 ${m.horizontalKm.toFixed(2)} km
高差 ${m.altitudeDeltaKm.toFixed(2)} km
斜距 ${m.slantKm.toFixed(2)} km${o.status!=="active"||a.status!=="active"?`
已失效单位 / 仅供参考`:""}`}if(o&&l&&!a&&(c.textContent=`${f.name} / 3D填充半径 ${f.maxKm} km`),Cn.userData.rangeVisualKey===h){Bu();return}for(const m of[...Cn.children])if(m.userData.rangeConnector){const _=m;_.geometry.dispose(),Array.isArray(_.material)?_.material.forEach(g=>g.dispose()):_.material.dispose(),Cn.remove(_)}if(Cn.userData.rangeVisualKey=h,o&&a&&o!==a){const m=va([o.position,a.position],15332072,1,.75);m.userData.rangeConnector=!0,Cn.add(m)}Bu()}function Wn(){ln=null,ka=[],It.enabled=!0,vt.domElement.style.cursor=Ot?"crosshair":"",So()}function ig(n){!ln||!ot.includes(n)||(ln==="attacker"?zl(n.id):Li=n.id,Wn(),at())}function Hw(n){if(!(Le.dragging||Pt||Je)){if(St?.cancel(),ln===n){Wn(),at();return}Ti(!0),dn=!1,Ot&&Xi(!1),Vt=zt=Nn=!1,nt=null,ln=n,ka=[],Le.detach(),It.enabled=!0,vt.domElement.style.cursor="crosshair",at(),rt()}}function Vw(n,e){Ht()||sn||e&&!Ir(De).units.some(t=>t.unit.id===e)||(n==="attacker"?zl(e):Li=e,Wn(),at())}for(const n of["attacker","target"])document.querySelector(`#range-pick-${n}`).addEventListener("click",()=>Hw(n)),document.querySelector(`#range-${n}-select`).addEventListener("change",e=>Vw(n,e.target.value));document.querySelector("#range-use-selected").addEventListener("click",()=>{!he||Le.dragging||(zl(he.id),Wn(),at())});document.querySelector("#range-clear").addEventListener("click",()=>{Ii.clear(),vi=Li="",Wn(),at()});for(const n of["#range-rings","#range-fill","#range-fill-band","#range-fill-opacity"])document.querySelector(n).addEventListener("change",()=>at());document.querySelector("#edit-panel").addEventListener("click",n=>{const e=n.target instanceof Element?n.target:null;ln&&!e?.closest(".range-panel")&&(Wn(),at())},!0);function Bl(){document.querySelector("#selected-name").textContent="未选择",document.querySelector("#selected-detail").textContent="",document.querySelector("#distance-readout").textContent="—",document.querySelector("#attitude-readout").textContent="—"}function rg(n,e){const{unit:t,status:i}=n;he=t;const r=n.position,s=[Om[t.faction],Uu[i]],o=qi().groups.find(m=>m.id===t.groupId);o&&s.push(`编组:${o.name}`),t.tgt&&s.push("目标"),t.escort&&t.faction!=="enemy"&&s.push("护卫目标"),document.querySelector("#selected-name").textContent=t.label,document.querySelector("#selected-detail").textContent=`${t.kind} / ${s.join(" / ")}`;const a=e.units.find(m=>m.unit.id===Li),l=a&&a.unit!==t?Xu(r,a.position,"slant",Mh()):null;document.querySelector("#distance-readout").textContent=l?`至 ${a.unit.label}：${l.distanceKm.toFixed(2)} km / ${l.band}`:"—";const d=gh(t,e.turn),f=m=>m*180/Math.PI,u=m=>`${f(m)>=0?"+":""}${f(m).toFixed(1)}°`,h=document.querySelector("#attitude-readout");if(d===null){const m=mh(t,e.turn);h.textContent=m===null?"朝向  固定":`朝向 ${u(m)}  （水平）`}else h.textContent=`偏航 ${u(d.yaw)}  俯仰 ${u(d.pitch)}  横滚 ${u(d.roll)}`}function ho(n){if(St?.cancel(),typeof Ct<"u"&&Ct){lE(n);return}const e=Math.max(0,Math.min(n,wi()));e!==De&&(Le.dragging||Pt||on()&&(St?.clearSelection(),ic="",Xa(),Ti(!0),ts(),De=e,bn()&&ve&&(ve.setEditor({...ve.read().editor,currentTurn:e}),or(ve.read()),ut.clear(),he=null,Ue=Ni()),at(),rt()))}function Ja(){const{width:n,height:e}=Ho(),t=uw(_t.extent,_t.extentZ,n/e,yt.fov,360,n);return It.maxDistance=t.maxDistance,yt.far=t.far,yt.near=t.near,yt.updateProjectionMatrix(),t}function wh(){const n=Ja();It.target.set(0,0,0),yt.position.copy(new b(0,.65,1).normalize().multiplyScalar(n.distance)),It.update()}function Gw(){const n=Ja();It.target.set(0,0,0),yt.position.set(0,n.distance,.001),It.maxPolarAngle=Math.PI*.499,It.update()}const xn=()=>({label:document.querySelector("#edit-label"),kind:document.querySelector("#edit-kind"),faction:document.querySelector("#edit-faction"),icon:document.querySelector("#edit-icon"),tgt:document.querySelector("#edit-tgt"),escort:document.querySelector("#edit-escort"),hidden:document.querySelector("#edit-hidden"),intangible:document.querySelector("#edit-intangible"),lost:document.querySelector("#edit-lost"),remove:document.querySelector("#edit-delete"),undo:document.querySelector("#edit-undo"),redo:document.querySelector("#edit-redo")});let Je=null,$i=!1,Gi="translate",yo="translate";const Ww=new b,hn=new vn;ns.add(hn);const Le=new cM(yt,vt.domElement);Le.setSize(.85);ns.add(Le.getHelper());const dt=n=>document.querySelector(n),Ln=n=>n.icon==="air-filled"||n.icon==="air-outline";function Qa(n){return gh(n,De)??{yaw:xa((mh(n,De)??0)-(n.icon==="ground"?Math.PI:0)),pitch:0,roll:0}}function Hs(){return pi()?bn()?[De]:Array.from({length:dt("#apply-later").checked?si()-De:1},(n,e)=>De+e):[]}function sg(n,e){ja(n)&&(n.attitudes??=Array.from({length:si()},()=>null),Hs().forEach(t=>{n.attitudes[t]={...e}}))}function og(n){if(bn()||!ct()||Tt()?.mapEditRef||!Ue||Je||Le.dragging||Pt||(Ti(!0),!Mn()))return;const e=De,t=e+1,i=new Map(ot.map(s=>[s.id,{...Qa(s)}])),r=Yn[e];Yn.splice(t,0,{summary:n?r.summary:"TACTICAL MOVEMENT / NEW TURN",events:n?r.events.map(s=>({...s})):[]}),ot.forEach(s=>{if(s.trackPoints=Np(s.trackPoints??[],t,!0),s.routeBinding&&s.routeBinding.startTurn>=t&&s.routeBinding.startTurn++,s.playerActions?.forEach(o=>{o.turn>=t&&o.turn++,o.recordedTurn>=t&&o.recordedTurn++}),s.positions.splice(t,0,s.positions[e].clone()),n)s.attitudes??=Array.from({length:si()-1},()=>null),s.attitudes.splice(t,0,i.get(s.id));else if(s.attitudes){const o=s.attitudes[e];s.attitudes.splice(t,0,o?{...o}:null)}s.destroyedAtTurn!==void 0&&s.destroyedAtTurn>=t&&(s.destroyedAtTurn+=1)}),Yn[t].events=Yn[t].events.filter(s=>s.kind!=="destroy"),cr(),nt=null,De=t,at(),rt()}function Xw(){if(bn()||!ct()||Tt()?.mapEditRef||!Ue||si()<=1||Je||Le.dragging||(Ti(!0),!Mn()))return;const n=De;Yn.splice(n,1),ot.forEach(e=>{e.trackPoints=Np(e.trackPoints??[],n,!1),e.routeBinding&&(e.routeBinding.startTurn=Math.max(0,e.routeBinding.startTurn>=n?e.routeBinding.startTurn-1:e.routeBinding.startTurn)),e.positions.splice(n,1),e.attitudes?.splice(n,1),e.playerActions&&(e.playerActions=e.playerActions.filter(t=>t.turn!==n&&t.recordedTurn!==n).map(t=>({...t,turn:t.turn>n?t.turn-1:t.turn,recordedTurn:t.recordedTurn>n?t.recordedTurn-1:t.recordedTurn}))),e.destroyedAtTurn===n?e.destroyedAtTurn=void 0:e.destroyedAtTurn!==void 0&&e.destroyedAtTurn>n&&(e.destroyedAtTurn-=1)}),cr(),nt=null,De=Math.min(n,wi()),at(),rt()}function So(){if(typeof en<"u"&&en?.active()){Le.detach();return}if(!pi()&&!yi()){Le.detach();return}if(ln||St?.isPicking()){Le.detach();return}if(Le.dragging)return;const n=St?.selection();if(n&&yi()&&Ue&&!Ot&&!Je&&!dn){hn.position.set(n.position.x,n.position.y,n.position.z).multiplyScalar(tt);const r=n.kind==="marker"?qi().markers.find(o=>o.id===n.id):void 0,s=r&&Pi(r)&&n.pointIndex===void 0?yo:"translate";hn.scale.setScalar(1),hn.quaternion.copy(r&&s!=="translate"?La(r):new mn),Le.setMode(s),Le.setSpace(s==="translate"?"world":"local"),Le.showX=Le.showY=Le.showZ=!0,Le.attach(hn);return}hn.scale.setScalar(1);const e=ec();if(ct()&&Ue&&!Ot&&e){const r=nt?.kind==="track"?ot.find(o=>o.id===nt.unitId):void 0,s=!!r&&!Ln(r)&&!r.intangible;hn.position.copy(da(e,s)),hn.quaternion.identity(),Le.setMode("translate"),Le.setSpace("world"),Le.showX=Le.showZ=!0,Le.showY=!s,Le.attach(hn);return}if(Vt||zt||Nn){Le.detach();return}if(!Ue||Ot||!he||Je||dn||!sr().length||ut.size>1&&Gi==="rotate"){Le.detach();return}const t=ut.size>1?Co():Xn(he);hn.position.copy(t),ut.size===1&&hn.position.copy(Pl(he,t,Et,ii)),Ww.subVectors(hn.position,t);const i=Qa(he);hn.quaternion.setFromEuler(new ri(i.pitch,i.yaw,i.roll,"YXZ")),Le.setMode(Gi),Le.setSpace(Gi==="translate"?"world":"local"),Le.showX=Gi==="translate"||Ln(he),Le.showY=!0,Le.showZ=Gi==="translate"||Ln(he),Le.attach(hn)}let ya="";function qw(){const n=Vn?.panels.equipment;if(!n||!ve)return;if(Ct){n.replaceChildren(),ya="";return}const e=Tt(),t=JSON.stringify([ve.revision,e?.id,De,he?.id,Ue,ct(),Ht(),he?Za(he):null]);if(t===ya&&n.childElementCount)return;ya=t,n.replaceChildren();const i=document.createElement("label");i.className="equipment-unit-choice",i.textContent="配置单位";const r=document.createElement("select");r.id="equipment-unit",r.setAttribute("aria-label","配置装备的单位"),r.add(new Option("请选择单位",""));for(const l of ot)r.add(new Option(l.label,l.id));r.value=he?.id??"",r.disabled=Ht(),i.append(r),n.append(i),r.addEventListener("change",()=>{if(Ht()||!r.isConnected)return;const l=ot.find(d=>d.id===r.value);jn(l?[l]:[])});const s=document.createElement("div");if(s.id="equipment-editor-body",n.append(s),!e||!he||Je){s.textContent=Je?"待落位":"未选择单位";return}const o=e.id,a=he.id,c=De;Ag(s,{read:()=>Jm().project,busy:()=>sn||Ht()||he?.id!==a||Tt()?.id!==o||De!==c,report:Qt,commit:(l,d)=>{if(!ve||!ct()||!Ue||Ht()||he?.id!==a||Tt()?.id!==o||De!==c)throw new Error("单位或编辑状态已变化，请重新选择装备。");if(!on())throw new Error("请先完成当前编辑。");const f=ve.read();ve.commit({...f,project:l},d,f),ar(),Gn(!0),Vn?.select("equipment")}},{mode:"session",sessionId:o,unitId:a,turn:c,editable:ct()&&Ue&&!Ht()})}function $w(n){if(!ve||!ct()||Tt()?.mapEditRef||sn||Ht())throw new Error("请先完成当前操作，再新建玩家。");if(!on())throw new Error("当前编辑尚未保存。");const e=ve.read(),t=Tt().id,i=`player-unit-${crypto.randomUUID()}`,s=Ip(e.project,t,i,n.playerId,n.aircraftRef,n.loadout,{x:0,y:2.4,z:0},De).sessions.find(o=>o.id===t).units.find(o=>o.id===i);Gn(!0),Xi(!1),Ti(!0),dn=!1,Wn(),St?.cancel(),St?.clearSelection(),Vt=zt=Nn=!1,nt=null,ut.clear(),he=null,Bl(),Je=Ka({...s,trackPoints:void 0,positions:s.positions.map(o=>({x:o.x*tt,y:o.y*tt,z:o.z*tt}))}),Vi={input:structuredClone(n),player:{...s.player},sessionId:t,turn:De,revision:ve.revision},$i=!1,It.enabled=!0,vt.domElement.style.cursor="",at(),rt()}function Yw(){const n=Vi;!n||!Je||!ve||n.sessionId!==Tt()?.id||n.turn!==De||n.revision!==ve.revision||!ct()||($i=!0,It.enabled=!1,vt.domElement.style.cursor="crosshair",rt())}function jw(n){const e=Vi,t=Je;if(!e||!t||!ve)return!1;if(!ct()||!Ue||sn||Le.dragging||Pt||e.sessionId!==Tt()?.id||e.turn!==De||e.revision!==ve.revision)return Qt("玩家放置状态已变化，请取消后重新创建。"),!1;const i=ve.read(),r=n.clone();r.y=t.intangible?Xn(t).y:Ln(t)?Math.max(Xn(t).y,Et(r.x,r.z)+ii):Et(r.x,r.z);try{const s=Ip(i.project,e.sessionId,t.id,e.input.playerId,e.input.aircraftRef,e.input.loadout,{x:r.x/tt,y:r.y/tt,z:r.z/tt},De),o=s.sessions.find(c=>c.id===e.sessionId).units.find(c=>c.id===t.id);o.icon=t.icon,o.faction=t.faction;const a=o.id;return ve.commit({...i,project:s},"创建玩家单位",i),ar(),Gn(!0),jn(ot.filter(c=>c.id===a)),Qt(`${e.player.callsign} 已放置`),!0}catch(s){return Qt(s instanceof Error?s.message:String(s)),!1}}function Zw(n,e,t){if(!ve||!ct()||Tt()?.mapEditRef||sn||Ht())throw new Error("当前回合为只读或仍有操作待完成。");if(Ue||Gn(!0),!on())throw new Error("当前编辑尚未保存。");const i=ve.read(),r=Tt().id,s=Gg(i.project,r,n,De,e,t==="drop"?"jettison":"use",`player-action-${crypto.randomUUID()}`);ve.commit({...i,project:s},t==="drop"?"登记上一回合抛弃":"登记上一回合使用",i),ar(),Gn(!0),Qt(`已登记${t==="drop"?"抛弃":"使用"}`)}function ag(){if(!Ou||!$r||!ve)return;const n=Tt(),e=!!n?.mapEditRef;$r.hidden=!Lr||e;const t=JSON.stringify([ve.revision,n?.id,De,he?.id,ct(),Ue,Lr,sn,Ht(),Vi,$i]);t!==Sl&&(Sl=t,Ou.sync({project:ve.read().project,revision:ve.revision,sessionId:n?.id??"",turn:De,selectedUnitId:he?.id,editable:ct()&&!sn&&(Vi!==null||!Ht()),mapOnly:e,...Vi?{pending:{player:{...Vi.player},aircraftRef:{...Vi.input.aircraftRef},loadout:structuredClone(Vi.input.loadout),armed:$i}}:{}}))}function bp(){const n=Je??he,e=ec();if(e)for(const s of["x","y","z"])dt(`#path-${s}`).value=e[s].toFixed(2);if(!n)return;const t=ut.size>1?Co():Xn(n),i=Qa(n);for(const s of["x","y","z"])dt(`#edit-${s}`).value=t[s].toFixed(2);const r=document.querySelector("#edit-height");r&&(r.value=(t.y*1e3/tt).toFixed(1));for(const s of["pitch","yaw","roll"])dt(`#edit-${s}`).value=jt.radToDeg(i[s]).toFixed(2)}function rt(){for(const c of Array.from(document.querySelectorAll('#edit-panel [data-mode-disabled="true"]')))c.disabled=!1,delete c.dataset.modeDisabled;cg(),tE();const n=xn();dt("#canvas-width").value=String(_t.extent*2/tt),dt("#canvas-height").value=String(_t.extentZ*2/tt),dt("#canvas-samples").value=String(_t.size),Vn||(document.querySelector("#terrain-editor").toggleAttribute("hidden",!Ot),document.querySelector("#unit-editor").toggleAttribute("hidden",Ot)),document.querySelector("#tab-terrain").setAttribute("aria-pressed",String(Ot)),document.querySelector("#tab-units").setAttribute("aria-pressed",String(!Ot)),document.querySelector("#terrain-undo").disabled=!ve?.canUndo||!!Pt,document.querySelector("#terrain-redo").disabled=!ve?.canRedo||!!Pt;const e=Je??he;dt("#turn-summary-edit").value=Yn[De].summary,dt("#turn-summary-edit").disabled=!!Je,dt("#edit-lost").max=String(si());for(const c of["#turn-add","#turn-copy","#turn-delete"])document.querySelector(c).disabled=!!Je||Le.dragging||c==="#turn-delete"&&si()===1;n.undo.disabled=!ve?.canUndo||!!Je,n.redo.disabled=!ve?.canRedo||!!Je,n.remove.disabled=he===null||!!Je,document.querySelector("#edit-copy").disabled=!ut.size||!!Je,document.querySelector("#tool-rotate").disabled=ut.size>1,document.querySelector("#selection-count").textContent=`已选 ${ut.size} / 可移动 ${sr().length}`,document.querySelector("#tool-box").setAttribute("aria-pressed",String(dn)),document.querySelector("#unit-picker").replaceChildren(...ot.map(c=>{const l=document.createElement("button"),d=qi().groups.find(f=>f.id===c.groupId);return l.textContent=d?`${c.label} · ${d.name}`:c.label,d&&(l.style.borderColor=d.color),l.setAttribute("aria-pressed",String(ut.has(c.id))),l.disabled=!!Je,l.addEventListener("click",f=>Ll(c,f.shiftKey||f.ctrlKey||f.metaKey||dt("#select-additive").checked)),l}));const i=["urban","erase-urban"].includes(document.querySelector("#terrain-brush").value);for(const c of["#urban-density","#urban-angle","#urban-seed"])dt(c).closest("label").toggleAttribute("hidden",!i);dt("#terrain-strength").closest("label").toggleAttribute("hidden",i),dt("#terrain-flat").closest("label").toggleAttribute("hidden",i),[n.label,n.kind,n.faction,n.icon,n.tgt,n.escort,n.hidden,n.intangible,n.lost].filter(Boolean).forEach(c=>{c.disabled=!e}),n.label.value=e?.label??"",n.kind.value=e?.kind??"",n.faction.value=e?.faction??"enemy",n.icon.value=e?.icon??"air-outline",n.tgt.checked=e?.tgt===!0,n.hidden&&(n.hidden.checked=e?.hidden===!0),n.intangible&&(n.intangible.checked=e?.intangible===!0),n.escort.checked=e?.escort===!0&&e.faction!=="enemy",n.lost.value=e?.destroyedAtTurn===void 0?"":String(e.destroyedAtTurn+1),document.querySelector("#placement-actions").toggleAttribute("hidden",!Je),document.querySelector("#edit-state").textContent=Je?$i?"点选中":"待落位":ut.size>1?`编队移动 / 主单位 ${he?.label??"-"} / 回合 ${De+1}`:he?`回合 ${De+1} / ${he.attitudes?.[De]?"手动姿态":"自动姿态"}`:"未选择",document.querySelector("#edit-place").disabled=$i,document.querySelector("#edit-auto").disabled=!he||!!Je||ut.size>1;const r=!Je&&ut.size>1?Co():e?Xn(e):new b,s=e?Qa(e):{yaw:0,pitch:0,roll:0};for(const c of["x","y","z"]){const l=dt(`#edit-${c}`);l.disabled=!e||!!Je&&c!=="y",l.value=e?r[c].toFixed(2):""}for(const c of["pitch","yaw","roll"]){const l=dt(`#edit-${c}`);l.disabled=!e||!Je&&ut.size>1||c!=="yaw"&&!Ln(e),l.value=e?jt.radToDeg(s[c]).toFixed(2):""}const o=document.querySelector("#edit-height");o&&(o.value=e?(r.y*1e3/tt).toFixed(1):"",o.disabled=!e),document.querySelector("#tool-move").setAttribute("aria-pressed",String(Gi==="translate")),document.querySelector("#tool-rotate").setAttribute("aria-pressed",String(Gi==="rotate"));const a=!!Tt()?.mapEditRef;document.querySelector("#tab-units").toggleAttribute("hidden",a),a&&!Vn&&document.querySelector("#unit-editor").setAttribute("hidden","");for(const c of["#turn-add","#turn-copy","#turn-delete"])bn()&&(document.querySelector(c).disabled=!0);bn()&&(dt("#apply-later").disabled=!0),Qw(),ki(),So(),Vn?.sync({editing:Ue,editable:yi(),mapOnly:a,active:Lr,playerView:Ct,viewerCanUndo:!!ve?.canUndo,viewerCanRedo:!!ve?.canRedo}),Km?.sync(),St?.sync(),typeof en<"u"&&en?.sync(),qw(),ag()}function cg(){!pi()&&!yi()&&(Ue=!1),ct()||(Ot=Vt=Nn=zt=!1,nt=null),Vn||document.querySelector("#edit-panel").toggleAttribute("hidden",!Ue),document.querySelector("#mode-readout").textContent=Ue?bn()?"草稿编辑":"EDIT":"VIEW"}const Kw=new Set(["edit-x","edit-y","edit-z","edit-height","edit-pitch","edit-yaw","edit-roll","edit-auto","edit-lost","turn-summary-edit","select-clear","select-additive","tool-box","tool-move","tool-rotate","move-snap","rotate-snap","trail-display","trail-turns","edit-undo","edit-redo","tab-units"]);function Mp(n){return Kw.has(n.id)||!!n.closest("#unit-picker")}function lg(n){return!!n.closest(".sidebar-header,.sidebar-nav,.range-panel,.trail-panel,.archive-panel,.selection-panel,.sidebar-bound-list,#unit-picker,#route-list,#track-list")||["route-select","route-group-select","route-select-bound","route-visible","route-labels","select-clear","select-additive"].includes(n.id)}function Jw(n,e){const t=xn().escort;t.disabled=!n||!e||n.faction==="enemy",t.checked=n?.escort===!0&&n.faction!=="enemy"}function Qw(){const n=pi()&&Ue,e=ct()&&Ue;for(const r of Array.from(document.querySelectorAll("#unit-editor input, #unit-editor button, #unit-editor select, #unit-editor textarea, #terrain-editor input, #terrain-editor button, #terrain-editor select, #route-section input, #route-section button, #route-section select, #turn-summary-edit")))lg(r)||(!e&&(!n||!Mp(r))?r.disabled=!0:e&&r.dataset.modeDisabled==="true"&&(r.disabled=!1),r.dataset.modeDisabled=String(!e&&(!n||!Mp(r))));const t=Je??he;for(const r of["edit-x","edit-y","edit-z","edit-height","edit-pitch","edit-yaw","edit-roll","edit-auto"]){const s=document.getElementById(r);(!n||t&&!Je&&!ja(t))&&(s.disabled=!0)}const i=xn().lost;Jw(t,e),i.disabled=!t||!n||!e&&!Sh(t),i.min=String(e?1:De+1),i.max=String(e?si():De+1),i.step="1"}for(const n of["click","change","input","keydown","pointerdown"])document.querySelector("#edit-panel").addEventListener(n,e=>{const t=e.target instanceof Element?e.target.closest("button, input, select, textarea"):null;!t||lg(t)||t.closest("#workflow-panel")||t.closest('[data-sidebar-panel="groups"],[data-sidebar-panel="markers"],[data-sidebar-panel="drawing"],[data-sidebar-panel="equipment"],[data-sidebar-panel="links"]')||ct()&&Ue||(e.preventDefault(),e.stopImmediatePropagation())},!0);function ts(){Vi=null,Je=null,$i=!1,vt.domElement.style.cursor="",It.enabled=!0,rt()}function Gn(n){if(n&&!pi()&&!yi()){cg(),ki();return}on()&&(St?.cancel(),typeof en<"u"&&en?.cancel(),ln&&Wn(),Ue=n,Vn||document.querySelector("#edit-panel").toggleAttribute("hidden",!n),document.querySelector("#mode-readout").textContent=n?"EDIT":"VIEW",vt.domElement.style.cursor=n&&Ot?"crosshair":"",n||(Vt=zt=!1,nt=null,Eh(),tc(),Ot=!1,Wi.visible=!1,Ti(!0),dn=!1,ts()),at(),rt())}function Oi(n,e=!1,t="metadata"){if(!pi()||!Ue||t==="metadata"&&!ct()||he&&!Je&&(t==="pose"&&!ja(he)||t==="loss"&&!Sh(he)))return;if(Je){n(Je),bl(Je,Je.positions.map((s,o)=>o)),rt();return}if(!he)return;const i=he.icon,r=he.intangible;Mn(t==="metadata"?"author":"draft")&&(n(he),zs(he)&&(t==="pose"||he.icon!==i||he.intangible!==r)&&bl(he),e&&kw(he),at(),rt())}function Us(n){!pi()||!Ue||n==="rotate"&&ut.size>1||(dn=!1,Gi=n,rt())}Le.addEventListener("dragging-changed",n=>{if(It.enabled=!n.value,n.value){ki();return}on("Transform units / path"),rt()});let Pn=null,Ba=null,Ha=!1,_i=null;function eE(n,e,t){if(!Zn)return;const i=r=>({x:r.x+t.x/tt,y:r.y+t.y/tt,z:r.z+t.z/tt});if(e.kind==="marker"){const r=n.markers.find(o=>o.id===e.id),s=Zn.markers.find(o=>o.id===e.id);if(r&&s)if(Pi(r)&&e.pointIndex!==void 0){const o=_s(r);o[e.pointIndex]=i(o[e.pointIndex]);const a=Qc(r,o);Object.assign(s,a)}else s.position=i(r.position),r.controlPoints&&(s.controlPoints=r.controlPoints.map(i))}else{const r=n.drawings.find(o=>o.id===e.id),s=Zn.drawings.find(o=>o.id===e.id);r&&s&&(s.points=r.points.map((o,a)=>e.pointIndex===void 0||a===e.pointIndex?i(o):{...o}))}}const Va=new Map;let ao=[];const Hu=new b;Le.addEventListener("mouseDown",()=>{if(!pi()&&!(yi()&&St?.selection())||!Ue||!ct()&&nt){Le.detach();return}Ha=!1,Ba=Rr??ve?.read()??null,Pn=kl(),_i=St?.selection()??null,Hu.copy(hn.position),ao=Hs(),Va.clear(),sr().forEach(n=>Va.set(n.id,n.positions.map(e=>e.clone())))});Le.addEventListener("mouseUp",()=>{Pn&&!Po(_i?Pn.sceneTools:Pn,_i?Zn:kl())&&(Rr=Ba),Pn=null,Ba=null,Ha=!1,_i=null});Le.addEventListener("objectChange",()=>{if(!pi()&&!(yi()&&_i)||!Ue||!Pn||Ha)return;if(_i&&Pn.sceneTools){if(!yi())return;try{const e=Pn.sceneTools.markers.find(i=>i.id===_i.id),t=Zn?.markers.find(i=>i.id===_i.id);if(_i.kind==="marker"&&_i.pointIndex===void 0&&e&&t&&Pi(e)&&yo!=="translate"){const i=new ri().setFromQuaternion(hn.quaternion,"YXZ"),r=yo==="rotate"?{pitch:i.x,yaw:i.y,roll:i.z}:e.attitude??{pitch:0,yaw:0,roll:0},s=Le.axis??"XYZ",o=s.includes("X")?"x":s.includes("Y")?"y":"z",a=(e.sizeKm??.12)*(yo==="scale"?Math.abs(hn.scale[o]):1);Object.assign(t,Nm(e,e.position,r,a))}else eE(Pn.sceneTools,_i,hn.position.clone().sub(Hu))}catch(e){Qt(e instanceof Error?e.message:String(e));return}St?.syncPosition?St.syncPosition():St?.sync(),typeof en<"u"&&en?.update();return}const n=ec();if(n){if(!ct())return;const e=nt?.kind==="track"?ot.find(t=>t.id===nt.unitId):void 0;n.x=hn.position.x,n.y=e?.intangible?hn.position.y:Math.max(0,hn.position.y),n.z=hn.position.z,e&&!Ln(e)&&!e.intangible&&(n.y=Et(n.x,n.z)),nt?.kind==="waypoint"&&cr(),at(),bp();return}if(he){if(Gi==="translate"){const e=hn.position.clone().sub(Hu),t=sr().filter(i=>Ln(i)&&!i.intangible).map(i=>Va.get(i.id)).filter(Boolean);t.length&&(e.y=Math.max(e.y,...t.flatMap(i=>ao.map(r=>{const s=i[r];return Math.max(0,Et(s.x+e.x,s.z+e.z))-s.y})))),sr().forEach(i=>{const r=Va.get(i.id);if(r){ct()&&!bn()&&(i.routeBinding=void 0),ao.forEach(o=>i.positions[o].copy(r[o]).add(e));const s=Pn?.units.find(o=>o.id===i.id)?.trackPoints;ct()&&s&&(i.trackPoints=s.map(o=>ao.includes(o.segment)&&ao.includes(o.segment+1)?{...o,x:o.x+e.x,y:o.y+e.y,z:o.z+e.z}:{...o})),bl(i,ao),zu(i)}})}else{const e=new ri().setFromQuaternion(hn.quaternion,"YXZ");sg(he,{yaw:e.y,pitch:Ln(he)?e.x:0,roll:Ln(he)?e.z:0})}Gi!=="translate"&&zu(he),Bu(),bp()}});function Lo(n){rr.x=n.clientX/innerWidth*2-1,rr.y=-(n.clientY/innerHeight)*2+1,nr.setFromCamera(rr,yt);let e=0;const t=new b;for(let i=2;i<yt.far;i+=2){const r=nr.ray.at(i,t);if(r.y<=Et(r.x,r.z)){let s=e,o=i;for(let c=0;c<18;c++){const l=(s+o)/2,d=nr.ray.at(l,t);d.y>Et(d.x,d.z)?s=l:o=l}const a=nr.ray.at(o,new b);return a.y=Et(a.x,a.z),a}e=i}return null}let dn=!1,xi=null;const ks=document.createElement("div");ks.className="selection-box";ks.hidden=!0;document.querySelector("#app").appendChild(ks);function Ti(n=!1,e){if(!xi)return;const t=xi;if(xi=null,ks.hidden=!0,It.enabled=!$i,vt.domElement.hasPointerCapture(t.pointerId)&&vt.domElement.releasePointerCapture(t.pointerId),n||!e)return;const i=Math.min(t.x,e.clientX),r=Math.max(t.x,e.clientX),s=Math.min(t.y,e.clientY),o=Math.max(t.y,e.clientY);ns.updateMatrixWorld(!0),yt.updateMatrixWorld(!0);const a=ot.filter(c=>{if(Bs(c,De)==="wreck")return!1;const d=Ei.get(c.id).userData.parts.icon.getWorldPosition(new b).project(yt),f=(d.x+1)*innerWidth/2,u=(1-d.y)*innerHeight/2;return d.z>=-1&&d.z<=1&&f>=i&&f<=r&&u>=s&&u<=o});jn(t.additive?[...new Set([...Fi(),...a])]:a),ut.size>1&&(Gi="translate"),rt()}function Ml(n){rr.x=n.clientX/innerWidth*2-1,rr.y=-(n.clientY/innerHeight)*2+1,nr.setFromCamera(rr,yt);const e=nr.intersectObjects(tn.children.filter(t=>t.userData.editorTools),!0).filter(t=>wl(t.object)).filter(t=>{for(let i=t.object;i;i=i.parent)if(i.userData.editorTool)return!0;return!1});return e.find(t=>t.object.userData.editorTool?.pointIndex!==void 0)??e[0]}vt.domElement.addEventListener("pointerdown",n=>{if(n.button!==0||!Lr||n.altKey||Je||Ot||Le.dragging||Le.axis!==null||Pt||ln||St?.isPicking())return;if(en?.active()){n.preventDefault(),n.stopImmediatePropagation();const t=Hl(n)[0];for(let r=t?.object??null;r;r=r.parent){const s=r.userData.unit;if(s){en.pick("unit",s.id);return}}const i=Ml(n);for(let r=i?.object??null;r;r=r.parent)if(r.userData.editorTool?.kind==="marker"){St?.selectObject?.(i.object);return}return}if(!Ue||dn||Vt||zt||Nn)return;const e=Ml(n);e&&St?.selectObject?.(e.object)&&(n.preventDefault(),n.stopImmediatePropagation())},!0);vt.domElement.addEventListener("dblclick",n=>{n.button!==0||!Lr||Ht()||ln||Vt||zt||Nn||Ot||dn||Le.axis!==null||Hl(n).length||typeof Ml<"u"&&Ml(n)||nr.intersectObject(Ji,!0).some(t=>t.object.userData.pathPoint)||jn([])});vt.domElement.addEventListener("pointerdown",n=>{if(Ct||St?.isPicking()||ln||!Ue||Ot||Vt||Nn||nt||Je||n.button!==0||!(dn||n.shiftKey))return;n.stopImmediatePropagation(),n.preventDefault();const e=Hl(n)[0]?.object.userData.unit;if(e&&!dn){Ll(e,!0);return}It.enabled=!1,Le.axis=null,xi={x:n.clientX,y:n.clientY,additive:n.shiftKey||n.ctrlKey||n.metaKey||dt("#select-additive").checked,pointerId:n.pointerId},ks.hidden=!1,ks.style.cssText=`left:${n.clientX}px;top:${n.clientY}px;width:0;height:0`,vt.domElement.setPointerCapture(n.pointerId)},!0);vt.domElement.addEventListener("pointermove",n=>{xi&&(n.stopImmediatePropagation(),ks.style.cssText=`left:${Math.min(xi.x,n.clientX)}px;top:${Math.min(xi.y,n.clientY)}px;width:${Math.abs(n.clientX-xi.x)}px;height:${Math.abs(n.clientY-xi.y)}px`)},!0);vt.domElement.addEventListener("pointerup",n=>{xi&&(n.stopImmediatePropagation(),Ti(!1,n))},!0);vt.domElement.addEventListener("pointercancel",()=>Ti(!0));vt.domElement.addEventListener("pointerdown",n=>{if(St?.isPicking()||ln||n.button!==0||Ot||Vt||zt||Nn||nt)return;if(Je&&$i){if(!ct()||!Ue)return;const t=Lo(n);if(!t)return;if(Vi){n.stopImmediatePropagation(),jw(t);return}const i=Je,{count:r,spacing:s}=bh(),o=Math.ceil(Math.sqrt(r)),a=[];if(!Mn())return;for(let c=0;c<r;c++){const l=Ka(Za(i)),d=es++;l.id=`unit-${d}`,l.label=r===1?i.label:`${i.label}-${String(c+1).padStart(2,"0")}`;const f=t.clone();f.x+=c%o*s,f.z+=Math.floor(c/o)*s;const u=Et(f.x,f.z);f.y=l.intangible?Xn(i).y:Ln(l)?Math.max(Xn(i).y,u+ii):u,l.positions=Array.from({length:si()},()=>f.clone()),ot.push(l),a.push(l),Oo(l)}Je=null,$i=!1,It.enabled=!0,vt.domElement.style.cursor="",Bo(),jn(a),Us("translate");return}if(Je||Le.dragging||Ue&&Le.axis!==null)return;const e=Hl(n)[0]?.object.userData.unit;e&&Ll(e,Ue&&(n.ctrlKey||n.metaKey||dt("#select-additive").checked))});document.querySelector("#edit-place").addEventListener("click",()=>{Je&&($i=!0,It.enabled=!1,vt.domElement.style.cursor="crosshair",rt())});document.querySelector("#edit-cancel").addEventListener("click",ts);document.querySelector("#tool-move").addEventListener("click",()=>Us("translate"));document.querySelector("#tool-rotate").addEventListener("click",()=>Us("rotate"));for(const n of["x","y","z"])dt(`#edit-${n}`).addEventListener("change",()=>{const e=Number(dt(`#edit-${n}`).value);if(Number.isFinite(e)){if(!Je&&ut.size>1){const t=new b;t[n]=e-Co()[n],Fa(t)}else if(Je)Oi(t=>{Xn(t,!0)[n]=n==="y"&&!t.intangible?Math.max(0,e):e});else if(he){const t=new b;t[n]=e-Xn(he)[n],Fa(t)}}});document.querySelector("#edit-height")?.addEventListener("change",()=>{const n=dt("#edit-height"),e=Number(n.value);if(!n.value.trim()||!Number.isFinite(e)){rt();return}const t=Je?Xn(Je).y:he?ut.size>1?Co().y:Xn(he).y:void 0,i=(Je?[Je]:sr()).some(s=>zs(s)&&(Je?s.positions:Hs().map(o=>s.positions[o])).some(o=>o.y!==Et(o.x,o.z)));if(t!==void 0&&n.value===(t*1e3/tt).toFixed(1)&&!i)return;const r=e*tt/1e3;if(Je)Oi(s=>{Xn(s,!0).y=s.intangible?r:Math.max(0,r)});else if(he){const s=new b(0,r-(ut.size>1?Co().y:Xn(he).y),0);Fa(s)}});for(const n of["pitch","yaw","roll"])dt(`#edit-${n}`).addEventListener("change",()=>{const e=Number(dt(`#edit-${n}`).value);Number.isFinite(e)&&Oi(t=>{const i={...Qa(t),[n]:jt.degToRad(e)};Je?t.attitudes=Array.from({length:si()},()=>({...i})):sg(t,i)},!1,"pose")});document.querySelector("#edit-auto").addEventListener("click",()=>Oi(n=>{n.attitudes&&Hs().forEach(e=>{n.attitudes[e]=null})},!1,"pose"));document.querySelector("#turn-add").addEventListener("click",()=>og(!1));document.querySelector("#turn-copy").addEventListener("click",()=>og(!0));document.querySelector("#turn-delete").addEventListener("click",Xw);dt("#turn-summary-edit").addEventListener("change",()=>{if(!pi()||!Ue)return;const n=dt("#turn-summary-edit").value.trim();n===Yn[De].summary||Je||eg({type:"set-turn-summary",sessionId:ve?.read().editor.sessionId??"session-working",turn:De,summary:n||"UNTITLED TURN"})});dt("#move-snap").addEventListener("change",()=>Le.setTranslationSnap(Number(dt("#move-snap").value)>0?Number(dt("#move-snap").value):null));dt("#rotate-snap").addEventListener("change",()=>Le.setRotationSnap(Number(dt("#rotate-snap").value)>0?jt.degToRad(Number(dt("#rotate-snap").value)):null));document.querySelector("#edit-copy").addEventListener("click",tg);document.querySelector("#select-clear").addEventListener("click",()=>jn([]));document.querySelector("#tool-box").addEventListener("click",()=>{dn=!dn,rt()});document.querySelector("#edit-add").addEventListener("click",Fw);document.querySelector("#edit-delete").addEventListener("click",Ow);document.querySelector("#edit-undo").addEventListener("click",Fl);document.querySelector("#edit-redo").addEventListener("click",Ol);xn().label.addEventListener("change",()=>{if(Je){Oi(n=>{n.label=xn().label.value||n.id});return}he&&eg({type:"rename-unit",sessionId:ve?.read().editor.sessionId??"session-working",unitId:he.id,label:xn().label.value||he.id})});xn().kind.addEventListener("change",()=>Oi(n=>{n.kind=xn().kind.value||"UNKNOWN"}));xn().faction.addEventListener("change",()=>Oi(n=>{n.faction=xn().faction.value,n.faction==="enemy"&&delete n.escort},!0));xn().icon.addEventListener("change",()=>Oi(n=>{n.icon=xn().icon.value},!0));xn().tgt.addEventListener("change",()=>Oi(n=>{n.tgt=xn().tgt.checked}));xn().escort.addEventListener("change",()=>{const n=Je??he;if(!n||n.faction==="enemy"||!ct()||!Ue){rt();return}Oi(e=>{e.escort=xn().escort.checked})});xn().hidden?.addEventListener("change",()=>Oi(n=>{n.hidden=xn().hidden.checked}));xn().intangible?.addEventListener("change",()=>Oi(n=>{if(n.intangible=xn().intangible.checked,!n.intangible){const e=Je===n?n.positions.map((t,i)=>i):Hs();e.forEach(t=>{const i=n.positions[t];i.y=Ln(n)?Math.max(i.y,Et(i.x,i.z),0):Et(i.x,i.z)}),n.trackPoints?.forEach(t=>{e.includes(t.segment)&&e.includes(t.segment+1)&&(t.y=Ln(n)?Math.max(t.y,Et(t.x,t.z),0):Et(t.x,t.z))})}}));xn().lost.addEventListener("change",()=>{if(!pi()||!Ue||he&&!Sh(he))return;const n=xn().lost.value.trim();if(bn()&&n!==""&&Number(n)!==De+1){Qt("损失回合仅可留空或填写当前草稿回合"),rt();return}Oi(e=>{const t=Number(n),i=e.destroyedAtTurn;e.destroyedAtTurn=n===""||Number.isNaN(t)?void 0:Math.max(0,Math.min(t-1,wi())),bn()&&i!==e.destroyedAtTurn&&(Yn[De].events=Yn[De].events.filter(r=>r.kind!=="destroy"||r.target!==e.id),e.destroyedAtTurn===De&&Yn[De].events.push({kind:"destroy",target:e.id})),cr()},!0,"loss")});document.querySelector("#prev-turn").addEventListener("click",()=>ho(De-1));document.querySelector("#next-turn").addEventListener("click",()=>ho(De+1));addEventListener("keydown",n=>{const e=n.key.toLowerCase();if(typeof en<"u"&&en?.active()&&n.key==="Escape"){en.cancel(),rt(),n.preventDefault();return}if(St?.isPicking()){n.key==="Escape"&&(St.cancel(),at(),n.preventDefault());return}if(ln&&n.key==="Escape"){Wn(),at(),n.preventDefault();return}if(!(ln&&["e","t","b","w","q","d","a","pageup","pagedown"].includes(e))){if(n.key==="Escape"&&Le.dragging&&_i){Le.reset(),Pn&&(Zn=Pn.sceneTools?structuredClone(Pn.sceneTools):void 0),Pn=null,Ba=null,Ha=!0,_i=null,St?.sync(),n.preventDefault();return}if(n.key==="Escape"&&Le.dragging&&nt){if(Le.reset(),Pn){const t=Pn;_n.splice(0,_n.length,...t.routes.map(i=>({...i,waypoints:i.waypoints.map(r=>({...r}))}))),Dn=t.activeRouteId,ot.forEach(i=>{const r=t.units.find(s=>s.id===i.id);r&&(i.positions=r.positions.map(s=>new b(s.x,s.y,s.z)),i.trackPoints=r.trackPoints?.map(s=>({...s})))}),Pn=null,Ha=!0,at(),rt()}n.preventDefault();return}if(n.key==="Escape"&&(Vt||zt||nt)){Vt=zt=!1,nt=null,at(),rt();return}if(n.key==="Escape"&&Pt){tc(!0);return}if(n.key==="Escape"&&Je){ts();return}if(!n.target?.matches("input, select, textarea, [contenteditable]")&&document.querySelector("#manager-panel").hidden&&!(typeof Ct<"u"&&Ct&&["t","b","w","q","d","a","pageup","pagedown"].includes(e))){if(e==="t"&&Ue){Vn?Vn.select(Ot?"units":"terrain"):Xi(!Ot);return}if(!((Ot||nt||Vt||zt)&&["b","w","q","d","a","pageup","pagedown"].includes(e))){if(n.key==="Escape"){xi?Ti(!0):Le.dragging?Le.reset():(dn=!1,jn([]));return}if(Ue&&e==="b"&&(dn=!dn,rt()),Ue&&(n.ctrlKey||n.metaKey)&&e==="d"){n.preventDefault(),tg();return}if(Ue&&(n.ctrlKey||n.metaKey)&&e==="a"){n.preventDefault(),Je||jn(ot.filter(t=>Bs(t,De)==="active"));return}if(Ue&&e==="w"&&Us("translate"),Ue&&e==="q"&&Us("rotate"),(n.ctrlKey||n.metaKey)&&e==="z"){n.preventDefault(),Fl();return}if((n.ctrlKey||n.metaKey)&&e==="y"){n.preventDefault(),Ol();return}if(n.key==="ArrowLeft"&&ho(De-1),n.key==="ArrowRight"&&ho(De+1),n.key==="Home"&&ho(0),n.key==="End"&&ho($m()),e==="r"&&wh(),e==="e"&&Gn(!Ue),n.key==="PageUp"&&Ue&&he&&(n.preventDefault(),Fa(new b(0,10,0))),n.key==="PageDown"&&Ue&&he&&(n.preventDefault(),Fa(new b(0,-10,0))),e==="f"&&he){const t=Ir(De).units.find(i=>i.unit===he);t&&(It.target.set(t.position.x,t.position.y*.35,t.position.z),It.update())}}}}});function ec(){if(!ct()||!nt)return null;if(nt.kind==="waypoint")return _n.flatMap(e=>e.waypoints).find(e=>e.id===nt.id)??null;const n=nt;return ot.find(e=>e.id===n.unitId)?.trackPoints?.find(e=>e.id===n.id)??null}function cr(){if(bn()||!ct())return;const n=new Set;for(const e of ot){const t=e.routeBinding,i=_n.find(a=>a.id===t?.routeId);if(!t||!i?.waypoints.length)continue;const r=t.offset??{x:0,y:0,z:0},s=i.waypoints.map(a=>({x:a.x+r.x,y:a.y+r.y,z:a.z+r.z})),o=Dg(e.positions,s,t.startTurn,e.destroyedAtTurn);e.positions=o.map((a,c)=>new b(a.x,c<=t.startTurn||e.intangible?a.y:Ln(e)?Math.max(a.y,Et(a.x,a.z)+ii):Et(a.x,a.z),a.z)),n.add(e.id)}for(let e=1;e<si();e++){const t=new Map;ot.filter(s=>n.has(s.id)&&s.routeBinding?.formationId&&e>s.routeBinding.startTurn&&(s.destroyedAtTurn===void 0||e<=s.destroyedAtTurn)).forEach(s=>{const o=s.routeBinding.formationId;t.set(o,[...t.get(o)??[],s])});for(const s of t.values()){const o=s.filter(c=>Ln(c)&&!c.intangible);let a=0;o.forEach(c=>{const l=c.routeBinding,d=_n.find(m=>m.id===l.routeId),f=d.waypoints[Math.min(e-l.startTurn-1,d.waypoints.length-1)],u=c.positions[e],h=f.y+(l.offset?.y??0);u.y=h,a=Math.max(a,Et(u.x,u.z)+ii-h)}),o.forEach(c=>{c.positions[e].y+=a})}const i=ot.filter(s=>!s.intangible).map(s=>({id:s.id,point:s.positions[e],fixed:!n.has(s.id)||!!s.routeBinding?.formationId||e<=(s.routeBinding?.startTurn??wi())||s.destroyedAtTurn!==void 0&&e>s.destroyedAtTurn})),r=Lg(i,8);for(const s of ot){if(!n.has(s.id))continue;const o=s.routeBinding;if(!(e<=o.startTurn)){if(s.destroyedAtTurn!==void 0&&e>s.destroyedAtTurn)s.positions[e].copy(s.positions[s.destroyedAtTurn]);else if(!o.formationId){const a=r.get(s.id)??s.positions[e];s.positions[e].set(a.x,s.intangible?a.y:Ln(s)?Math.max(a.y,Et(a.x,a.z)+ii):Et(a.x,a.z),a.z)}}}}}function da(n,e=!1){return new b(n.x,e?Et(n.x,n.z)+ii:n.y,n.z)}function Eh(){if(Do(Ji),Ji=new Sn,tn.add(Ji),vl.replaceChildren(),Fu.length=0,typeof Ct<"u"&&Ct)return;const n=(i,r,s,o=!1)=>{const a=nt?.id===r.id&&nt.kind===r.kind&&(r.kind!=="waypoint"||nt.kind==="waypoint"&&(!r.routeId||nt.routeId===r.routeId||Dn===r.routeId)),c=new Ee(new Jr(a?4:2.8,10,8),new yn({color:a?16777215:s,depthTest:!1}));c.position.copy(da(i,o)),c.userData.pathPoint=r,c.renderOrder=10,Ji.add(c)},e=document.querySelector("#route-visible")?.checked??!0,t=document.querySelector("#route-labels")?.checked??!0;if(e)for(const i of _n){const r=ot.filter(l=>l.routeBinding?.routeId===i.id),s=[...new Set(r.map(l=>qi().groups.find(d=>d.id===l.groupId)?.name).filter(Boolean))],o=r.filter(l=>!l.groupId||!qi().groups.some(d=>d.id===l.groupId)).map(l=>l.label),a=[...s.map(l=>`编组:${l}`),...o].join(" / ")||"未绑定",c=i.id===Dn?16767050:7649492;i.waypoints.length>1&&Ji.add(va(i.waypoints.map(l=>da(l)),c,1,i.id===Dn?.7:.4)),i.waypoints.forEach((l,d)=>{n(l,{kind:"waypoint",id:l.id,routeId:i.id},c);const f=new b(l.x,Et(l.x,l.z)+.35,l.z);if(Ji.add(va([f,da(l)],c,1,.5)),Ji.add(va([new b(l.x-4,f.y,l.z),new b(l.x+4,f.y,l.z),f.clone(),new b(l.x,f.y,l.z-4),new b(l.x,f.y,l.z+4)],c,1,.7)),!t)return;const u=document.createElement("button");u.className="waypoint-label",u.textContent=`${i.name} · ${d+1} · ${a}`,u.title=`${i.name} / 航路点 ${d+1}
绑定单位：${r.map(h=>h.label).join("、")||"无"}
${a}`,u.addEventListener("click",()=>{Le.dragging||Pt||St?.isPicking()||(Dn=i.id,Vt=zt=!1,nt=ct()&&Ue?{kind:"waypoint",id:l.id,routeId:i.id}:null,Vn?.select("routes"),at(),rt())}),vl.appendChild(u),Fu.push({dom:u,position:da(l).add(new b(0,5,0))})})}if(!(!ct()||!Ue||Ot)&&Nn&&he&&ut.size===1&&Bs(he,De)!=="wreck"&&document.querySelector("#trail-display").value!=="none"){const i=!Ln(he)&&!he.intangible,r=Math.min(wi(),he.destroyedAtTurn??wi());he.trackPoints?.filter(o=>o.segment<r).forEach(o=>n(o,{kind:"track",unitId:he.id,id:o.id},_a[he.faction],i));const s=vh(he,De);for(const o of xh(he,s,r)){const{segment:a,points:c}=o;i&&c.forEach(d=>{d.y=Et(d.x,d.z)+ii});const l=jm(c,_a[he.faction]);l.userData.editSegment=a,l.userData.trackPart=o,l.traverse(d=>{d.userData.editSegment=a,d instanceof Ee&&(d.material.dispose(),d.material=new yn({color:_a[he.faction],transparent:!0,opacity:.65,side:fn,depthTest:!1}))}),Ji.add(l)}}}function tE(){const n=Ro(),e=document.querySelector("#route-select");e.replaceChildren(..._n.map(h=>{const m=document.createElement("option");return m.value=h.id,m.textContent=h.name,m})),e.value=Dn,dt("#route-name").value=_l()?.name??"";const t=(h,m)=>{const _=document.createElement("button");return _.textContent=h,_.setAttribute("aria-pressed",String(nt?.id===m.id)),_.addEventListener("click",()=>{if(Le.dragging||Pt||St?.isPicking())return;Vt=zt=!1,nt=ct()&&Ue?m:null;const g=m.kind==="waypoint"?Ro().find(p=>p.id===m.id):he?.trackPoints?.find(p=>p.id===m.id);g&&!ct()&&yh({x:g.x/tt,y:g.y/tt,z:g.z/tt}),at(),rt()}),_};document.querySelector("#route-list").replaceChildren(...n.map((h,m)=>t(`WP ${m+1}`,{kind:"waypoint",id:h.id})));const i=he&&ut.size===1?he.trackPoints??[]:[];document.querySelector("#track-list").replaceChildren(...i.map((h,m)=>t(`P${m+1} / ${h.segment+1}-${h.segment+2}`,{kind:"track",unitId:he.id,id:h.id})));const r=ec(),s=nt?.kind==="track"?ot.find(h=>h.id===nt.unitId):void 0,o=!!s&&!Ln(s)&&!s.intangible;for(const h of["x","y","z"]){const m=dt(`#path-${h}`);m.disabled=!r||o&&h==="y",m.value=r?r[h].toFixed(2):""}document.querySelector("#route-bind").disabled=!sr().length||!n.length,document.querySelector("#route-unbind").disabled=!Fi().some(h=>h.routeBinding),document.querySelector("#path-delete").disabled=!r;for(const h of["#route-up","#route-down"])document.querySelector(h).disabled=nt?.kind!=="waypoint";document.querySelector("#route-pick").setAttribute("aria-pressed",String(Vt)),document.querySelector("#track-edit").setAttribute("aria-pressed",String(Nn)),document.querySelector("#track-add").setAttribute("aria-pressed",String(zt));for(const h of["#track-add","#track-midpoint"])document.querySelector(h).disabled=!he||ut.size!==1||si()<2;nt?.kind==="track"&&he&&(Bs(he,De)==="wreck"||document.querySelector("#trail-display").value==="none")&&(nt=null),dt("#track-segment").max=String(Math.max(1,wi())),document.querySelector("#path-state").textContent=Vt?"航路点放置中":zt?"控制点放置中":`${_l()?.name??"-"} / ${n.length} 个航路点 / ${Fi().map(h=>`${h.label}:${_n.find(m=>m.id===h.routeBinding?.routeId)?.name??"未绑定"}${h.routeBinding?.formationId?"(编队)":""}`).join(" / ")} / ${i.length} 个航迹控制点`;const c=ot.filter(h=>h.routeBinding?.routeId===Dn),l=document.querySelector("#route-bindings");l&&l.replaceChildren(...c.map(h=>{const m=document.createElement("button"),_=qi().groups.find(g=>g.id===h.groupId);return m.textContent=`${h.label}${_?` · ${_.name}`:""} / 从第 ${h.routeBinding.startTurn+1} 回合`,m.addEventListener("click",()=>jn([h])),m}));const d=document.querySelector("#route-group-select");if(d){const h=d.value;d.replaceChildren(...qi().groups.map(m=>new Option(`${m.name} (${ot.filter(_=>_.groupId===m.id).length})`,m.id))),qi().groups.some(m=>m.id===h)&&(d.value=h)}const f=document.querySelector("#route-select-bound");f&&(f.disabled=!c.length);const u=document.querySelector("#route-bind-group");u&&(u.disabled=!ct()||!Ue||!n.length||!d?.value)}function dg(n,e){const t=[0,...(he?.trackPoints??[]).filter(s=>s.segment===n).sort((s,o)=>s.t-o.t).map(s=>s.t),1],i=jt.clamp(e,0,.999999)*(t.length-1),r=Math.floor(i);return jt.lerp(t[r],t[r+1],i-r)}function ug(n,e,t=.5){if(!ct()||!Ue||!he||ut.size!==1||!Mn())return;he.trackPoints??=[];const i={id:`control-${yl++}`,segment:n,t:jt.clamp(t,.01,.99),x:e.x,y:e.y,z:e.z};he.trackPoints.push(i),nt={kind:"track",unitId:he.id,id:i.id},zt=!1,at(),rt()}vt.domElement.addEventListener("pointerdown",n=>{if(St?.isPicking()||!ct()||ln||!Ue||Ot||n.button!==0||n.altKey||Je)return;if(Vt){n.stopImmediatePropagation(),n.preventDefault();const i=Lo(n);if(!i||!Mn())return;Ro().push({id:`wp-${xl++}`,x:i.x,y:Math.max(Number(dt("#route-height").value)||0,i.y+ii),z:i.z}),cr(),at(),rt();return}rr.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),nr.setFromCamera(rr,yt);const e=nr.intersectObjects(Ji.children,!0),t=e.find(i=>i.object.userData.pathPoint);if(t&&Le.axis===null){n.stopImmediatePropagation(),n.preventDefault(),nt=t.object.userData.pathPoint,nt?.kind==="waypoint"&&nt.routeId&&(Dn=nt.routeId),zt=!1,Vn?.select("routes"),at(),rt();return}if(zt&&Le.axis===null){n.stopImmediatePropagation(),n.preventDefault();const i=e.find(r=>r.object.userData.editSegment!==void 0);if(i){const r=i.object.userData.editSegment,s=xh(he,vh(he,De),Math.min(wi(),he.destroyedAtTurn??wi())).find(l=>l.segment===r);if(!s)return;let o=0,a=1/0;for(let l=0;l<=300;l++){const d=s.curve.getPoint(jt.lerp(s.start,s.end,l/300));!Ln(he)&&!he.intangible&&(d.y=Et(d.x,d.z)+ii);const f=d.distanceToSquared(i.point);f<a&&(a=f,o=l/300)}const c=s.curve.getPoint(jt.lerp(s.start,s.end,o));ug(r,c,dg(r,o))}}},!0);document.querySelector("#route-select").addEventListener("change",()=>{Le.dragging||Pt||St?.isPicking()||(Dn=document.querySelector("#route-select").value,nt=null,Vt=zt=!1,at(),rt())});dt("#route-name").addEventListener("change",()=>{Le.dragging||Mn()&&(_l().name=dt("#route-name").value.trim()||"UNTITLED ROUTE",at(),rt())});document.querySelector("#route-new").addEventListener("click",()=>{if(Le.dragging||Je||!Mn())return;const n=Ua++,e={id:`route-${n}`,name:`ROUTE ${n}`,waypoints:[]};_n.push(e),Dn=e.id,nt=null,Vt=zt=!1,at(),rt()});document.querySelector("#route-remove").addEventListener("click",()=>{if(!(Le.dragging||Je)&&Mn()){if(ot.filter(n=>n.routeBinding?.routeId===Dn).forEach(n=>{n.routeBinding=void 0}),_n.splice(_n.findIndex(n=>n.id===Dn),1),!_n.length){const n=Ua++;_n.push({id:`route-${n}`,name:`ROUTE ${n}`,waypoints:[]})}Dn=_n[0].id,nt=null,Vt=zt=!1,cr(),at(),rt()}});document.querySelector("#route-pick").addEventListener("click",()=>{!ct()||!Ue||Je||Le.dragging||(Vt=!Vt,zt=!1,nt=null,dn=!1,at(),rt())});function hg(n){if(!ct()||!Ue||Je||Le.dragging||!Ro().length||!n.length)return;const e=Ig(n.map(i=>Xn(i))),t=n.length>1?`formation-${gl++}`:void 0;Mn()&&(n.forEach((i,r)=>{i.routeBinding={startTurn:De,routeId:Dn,offset:t?e[r]:{x:0,y:0,z:0},formationId:t},i.trackPoints=(i.trackPoints??[]).filter(s=>s.segment<De)}),cr(),at(),rt())}document.querySelector("#route-bind").addEventListener("click",()=>hg(sr()));document.querySelector("#route-unbind").addEventListener("click",()=>{Mn()&&(Fi().forEach(n=>{n.routeBinding=void 0}),cr(),at(),rt())});for(const[n,e]of[["#route-up",-1],["#route-down",1]])document.querySelector(n).addEventListener("click",()=>{if(nt?.kind!=="waypoint")return;const t=Ro(),i=t.findIndex(s=>s.id===nt.id),r=i+e;r<0||r>=t.length||Mn()&&([t[i],t[r]]=[t[r],t[i]],cr(),at(),rt())});document.querySelector("#path-delete").addEventListener("click",()=>{if(nt&&Mn()){if(nt.kind==="waypoint"){const n=Ro();n.splice(n.findIndex(e=>e.id===nt.id),1),n.length||ot.filter(e=>e.routeBinding?.routeId===Dn).forEach(e=>{e.routeBinding=void 0})}else{const n=nt,e=ot.find(t=>t.id===n.unitId);e.trackPoints=e.trackPoints?.filter(t=>t.id!==n.id)}nt=null,cr(),at(),rt()}});document.querySelector("#track-edit").addEventListener("click",()=>{!ct()||!Ue||(Nn=!Nn,zt=Vt=!1,nt=null,dn=!1,at(),rt())});document.querySelector("#track-add").addEventListener("click",()=>{!ct()||!Ue||(Nn=!0,zt=!zt,Vt=!1,nt=null,dn=!1,at(),rt())});document.querySelector("#track-midpoint").addEventListener("click",()=>{if(!ct()||!Ue||!he||ut.size!==1||si()<2)return;const n=jt.clamp(Math.floor(Number(dt("#track-segment").value)||1)-1,0,wi()-1),e=Lp(he.positions,he.trackPoints??[],n,n+1).map(i=>new b(i.x,i.y,i.z)),t=new ch(e).getPoint(.5);Nn=!0,ug(n,t,dg(n,.5))});dt("#track-segment").addEventListener("change",()=>{dt("#track-segment").value=String(jt.clamp(Math.floor(Number(dt("#track-segment").value)||1),1,Math.max(1,wi())))});for(const n of["x","y","z"])dt(`#path-${n}`).addEventListener("change",()=>{const e=ec(),t=Number(dt(`#path-${n}`).value);if(!e||!Number.isFinite(t))return;const i=nt?.kind==="track"?nt.unitId:void 0;if(!Mn())return;const r=ot.find(s=>s.id===i);e[n]=n==="y"&&!r?.intangible?Math.max(0,t):t,r&&zs(r)&&(e.y=Et(e.x,e.z)),nt?.kind==="waypoint"&&cr(),at(),rt()});for(const n of["#trail-display","#trail-turns"])document.querySelector(n).addEventListener("change",()=>at());function fg(){const n=(e,t,i,r)=>{const s=Number(dt(e).value);return Number.isFinite(s)?jt.clamp(s,t,i):r};return{radius:n("#terrain-radius",8,240,50),strength:n("#terrain-strength",.1,30,6),target:n("#terrain-flat",0,180,20),density:n("#urban-density",1,100,70)/100,mode:document.querySelector("#terrain-brush").value}}const Wi=new E_(new kt,new Mi({color:7143340,depthTest:!1,transparent:!0,opacity:.9}));Wi.visible=!1;ns.add(Wi);function pg(n){if(Wi.visible=!!n&&Ot&&Ue,!n)return;const{radius:e}=fg();let t=Wi.geometry.getAttribute("position");t||(t=new Dt(new Float32Array(240),3),t.setUsage(sl),Wi.geometry.setAttribute("position",t));for(let i=0;i<80;i++){const r=i/80*Math.PI*2,s=n.x+Math.cos(r)*e,o=n.z+Math.sin(r)*e;t.setXYZ(i,s,Et(s,o)+.6,o)}t.needsUpdate=!0,Wi.geometry.computeBoundingSphere()}function mg(n){if(!ct()||!Ue||!Pt)return;const e=fg(),t=Pt.last,i=t?t.distanceTo(n):0;if(t&&i<_t.spacing*.4)return;const r=t?Math.ceil(i/Math.max(_t.spacing,e.radius/4)):1;for(let s=1;s<=r;s++){const o=t?t.clone().lerp(n,s/r):n,a=e.mode==="smooth"||e.mode==="flatten"?e.strength/30:e.strength;(e.mode==="urban"||e.mode==="erase-urban"?Rn.paint(o.x,o.z,e.radius,e.density,e.mode==="erase-urban"):_t.brush(o.x,o.z,e.radius,a,e.mode,e.target))&&(Pt.changed=!0,Dr=!0,e.mode==="urban"||e.mode==="erase-urban"?Mw(o,e.radius):Ew(o,e.radius))}Pt.last=n.clone()}function tc(n=!1){if(!Pt)return;const e=Pt;!n&&e.height&&qm(),Pt=null,xo=null,n?(_t.data.set(e.before.terrain),Rn.data.set(e.before.urban),Dr=!0):e.changed&&(Rr=e.checkpoint),vt.domElement.hasPointerCapture(e.pointerId)&&vt.domElement.releasePointerCapture(e.pointerId),It.enabled=!0,Dr?(Dl(!n),!n&&nn&&ml===_t&&(Na=!1)):(gi.visible=!0,Es.visible=!0,nn&&(nn.root.visible=gi===nn.root),Rs=null),at(),rt()}function Xi(n){n&&!ct()||!n&&Tt()?.mapEditRef||(ln&&Wn(),!Le.dragging&&(tc(),Ti(!0),ts(),dn=!1,Ot=n,Vt=zt=!1,nt=null,Eh(),Wi.visible=!1,n&&!Ue&&Gn(!0),vt.domElement.style.cursor=n?"crosshair":"",rt()))}vt.domElement.addEventListener("pointerdown",n=>{if(St?.isPicking()||!ct()||!Ue||!Ot||n.button!==0||n.altKey)return;n.stopImmediatePropagation(),n.preventDefault();const e=Lo(n);!e||Math.abs(e.x)>_t.extent||Math.abs(e.z)>_t.extentZ||on()&&(Pt={before:kl(),checkpoint:ve?.read()??null,pointerId:n.pointerId,changed:!1,last:null,height:!["urban","erase-urban"].includes(document.querySelector("#terrain-brush").value)},It.enabled=!1,vt.domElement.setPointerCapture(n.pointerId),mg(e),pg(e))},!0);vt.domElement.addEventListener("pointermove",n=>{if(!ct()||!Ue||!Ot)return;const e=Lo(n);pg(e),Pt&&(n.stopImmediatePropagation(),e&&mg(e))},!0);vt.domElement.addEventListener("pointerup",n=>{Pt&&(n.stopImmediatePropagation(),tc())},!0);vt.domElement.addEventListener("pointercancel",()=>tc(!0));vt.domElement.addEventListener("pointerleave",()=>{Pt||(Wi.visible=!1)});document.querySelector("#tab-terrain").addEventListener("click",()=>Xi(!0));document.querySelector("#tab-units").addEventListener("click",()=>Xi(!1));for(const[n,e]of[["#terrain-reset",()=>_t.reset()],["#terrain-generate",()=>_t.generate(Number(dt("#terrain-seed").value)||0,document.querySelector("#terrain-preset").value)]])document.querySelector(n).addEventListener("click",()=>{Pt||Mn()&&(e(),Dr=!0,Dl(),at(),rt())});document.querySelector("#terrain-brush").addEventListener("change",rt);for(const n of["#urban-angle","#urban-seed"])dt(n).addEventListener("change",()=>{Pt||Mn()&&(As=jt.degToRad(jt.clamp(Number(dt("#urban-angle").value)||0,-180,180)),Ia=Number(dt("#urban-seed").value)|0,Dr=!0,Dl(),at(),rt())});document.querySelector("#terrain-contour-smooth").addEventListener("change",()=>{Dr=!0});document.querySelector("#terrain-undo").addEventListener("click",Fl);document.querySelector("#terrain-redo").addEventListener("click",Ol);const nr=new fm,rr=new ze;function Ho(){const n=vt.domElement.getBoundingClientRect?.();return n&&n.width>0&&n.height>0?{left:n.left,top:n.top,width:n.width,height:n.height}:{left:0,top:0,width:innerWidth,height:innerHeight}}function Ga(){return typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches}function Th(n,e,t){const i=Ho(),r=[];yt.updateMatrixWorld(),tn.updateMatrixWorld(!0);for(const s of Ei.values()){const o=s.userData.parts,a=s.userData.unit;if(!o||!a||!wl(s))continue;const c=typeof Ns<"u"?Ns.get(a.id):void 0,l=o.label.userData.dom,d=!l.hidden&&Number(l.style.opacity||"1")>0&&QM(l.getBoundingClientRect(),n,e,t>14?6:0),f=[o.icon,...c?.root.visible?[c.base]:[],...o.wreck.visible?[o.wreck]:[]];let u=1/0,h;for(const m of f.filter(wl)){const _=JM(m.getWorldPosition(new b).project(yt),i,n,e,d?Math.max(i.width,i.height):t);_!==null&&_<u&&(u=_,h=m)}h&&(u<=t||d)&&r.push({unit:a,distance:d?Math.min(u,t):u,object:h})}return r.sort((s,o)=>s.distance-o.distance||s.unit.id.localeCompare(o.unit.id))}function nE(n,e,t=14){const i=[],r=Ir(De);for(const s of Th(n,e,t)){const o=Cs.get(s.unit.id);if(el!==void 0&&!o)continue;const a=new Set(o??[s.unit.id]);r.units.filter(c=>a.has(c.unit.id)).forEach(c=>i.push({unit:c.unit,distance:s.distance}))}return i.sort((s,o)=>s.distance-o.distance||s.unit.id.localeCompare(o.unit.id)).map(s=>s.unit)}function gg(n,e,t=14){const i=nE(n,e,t);i.length===1?ig(i[0]):(ka=i.map(r=>r.id),ng())}vt.domElement.addEventListener("pointerdown",n=>{!ln||n.button!==0||n.altKey||(n.stopImmediatePropagation(),n.preventDefault(),gg(n.clientX,n.clientY,fh(n.pointerType,Ga())))},!0);zo.addEventListener("pointerdown",n=>{if(n.button!==0||!Lr||n.altKey||Ht())return;const e=fh(n.pointerType,Ga());if(ln){n.stopPropagation(),n.preventDefault(),gg(n.clientX,n.clientY,e);return}const t=(n.target instanceof Element?n.target.closest("[data-unit-id]"):null)?.dataset.unitId,i=Th(n.clientX,n.clientY,e),r=i.find(s=>s.unit.id===t)??i[0];r&&(n.stopPropagation(),n.preventDefault(),Ll(r.unit))});function wl(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function Hl(n){const e=Ho();rr.x=(n.clientX-e.left)/e.width*2-1,rr.y=-((n.clientY-e.top)/e.height)*2+1,nr.setFromCamera(rr,yt);const t=nr.intersectObjects([...Ei.values()].flatMap(r=>r.children),!0).filter(r=>wl(r.object));if(t.length||!Ga()&&n.pointerType!=="touch"&&n.pointerType!=="pen")return t;const i=Th(n.clientX,n.clientY,fh(n.pointerType,Ga()))[0];return i?[{distance:yt.position.distanceTo(i.object.getWorldPosition(new b)),point:i.object.getWorldPosition(new b),object:i.object}]:[]}function nc(){oo=null,ku=-1/0,tl=""}function iE(n=performance.now()){const e=yt.position.distanceTo(It.target),t=CM(e,el),i=t!==el;el=t;const r=document.querySelector("#camera-readout");r&&(r.textContent=`FREE 3D / ${t}档`);const{width:s,height:o}=Ho(),a=[t,s,o,...yt.position.toArray(),...yt.quaternion.toArray(),Ue,ln].join("|"),c=oo===null;if(!c&&!i&&a===tl)return;if(yt.updateMatrixWorld(),tn.updateMatrixWorld(!0),oo??=Ir(De),c||i||a!==tl&&n-ku>=100){const f=oo.units.map(u=>{const h=Ei.get(u.unit.id),m=h.userData.parts,g=(t===3?h.position.clone():m.icon.getWorldPosition(new b)).project(yt),p=Ue&&ut.has(u.unit.id);return{id:u.unit.id,label:u.unit.label,faction:u.unit.faction,icon:u.unit.icon,tgt:u.unit.tgt,escort:u.unit.escort,status:u.status,position:{x:u.position.x/tt,y:u.position.y/tt,z:u.position.z/tt},screenX:(g.x+1)*s/2,screenY:(1-g.y)*o/2,onScreen:!p&&!u.unit.hidden&&!u.unit.intangible&&g.z>-1&&g.z<1&&Math.abs(g.x)<=1&&Math.abs(g.y)<=1}});Bd=LM(f,t),Cs.clear();for(const u of Bd)Cs.set(u.representativeId,u.memberIds);tl=a,ku=n}const l=new Map(oo.units.map(f=>[f.unit.id,f])),d=new Map(Bd.map(f=>[f.representativeId,f]));for(const f of oo.units){const u=Ei.get(f.unit.id),h=u.userData.parts,m=Ns.get(f.unit.id),_=d.get(f.unit.id),p=(_?.airRepresentativeId?l.get(_.airRepresentativeId):void 0)??(Ln(f.unit)?f:void 0),w=Ya(f.unit,f.position,Et),y=Math.max(0,w.y-u.position.y),v=Pl(f.unit,w,Et,ii).y-u.position.y,C=h.base===null?v+Ym-ii:Math.max(y,.6),P=new b(u.position.x,u.position.y+v,u.position.z),N=2*Math.max(yt.near,-P.applyMatrix4(yt.matrixWorldInverse).z)*Math.tan(jt.degToRad(yt.fov)/2)/Math.max(1,o),M=Pd(t,N),S=Math.max(yt.near,-new b(u.position.x,u.position.y,u.position.z).applyMatrix4(yt.matrixWorldInverse).z),I=Math.max(yt.near,-new b(u.position.x,u.position.y+1.5,u.position.z).applyMatrix4(yt.matrixWorldInverse).z),F=2*Math.tan(jt.degToRad(yt.fov)/2)/Math.max(1,o),V=Pd(t,S*F),G=Pd(t,I*F);h.tgtRing.visible=!!_?.hasTgt&&f.status==="active",h.escortMarker.visible=!!_?.hasEscort&&f.status==="active"&&f.unit.faction!=="enemy",kM(h,m,{tier:f.unit.intangible?1:t,representative:!!_,status:f.status,faction:f.unit.faction,label:_?.label??f.unit.label,scale:M,baseScale:V,farBaseScale:G,hasAir:!!p,airAltitude:p?Math.max(0,p.position.y-u.position.y):0,hasTgt:!!_?.hasTgt,hasEscort:!!_?.hasEscort,iconHeight:v,poleHeight:C}),m.root.traverse(J=>{const Y=J.material;!Y||Array.isArray(Y)||(Y.userData.hiddenBaseOpacity??=Y.opacity,Y.opacity=Y.userData.hiddenBaseOpacity*(f.unit.hidden?.35:1))})}for(const f of tn.children)typeof f.userData.trail=="string"&&(f.visible=t===1||Cs.has(f.userData.trail))}function rE(){const{width:n,height:e}=Ho();for(const{dom:t,position:i}of Fu){const r=i.clone().project(yt);t.hidden=r.z<-1||r.z>1,t.style.left=`${(r.x+1)*n/2}px`,t.style.top=`${(1-r.y)*e/2}px`}tn.updateMatrixWorld(!0);for(const t of Ei.values()){const i=t.userData.parts,r=i.label.userData.dom,s=i.label.userData.displayVisible!==!1,o=Ns.get(t.userData.unit.id),a=o?.root.visible?o.pole:i.pole,c=KM({camera:yt,width:n,height:e,group:t,icon:i.wreck.visible?i.wreck:i.icon,pole:a,dom:r,isAir:i.base!==null,naturalTop:a.userData.naturalTop??i.label.position.y,isMerged:(Cs.get(t.userData.unit.id)?.length??1)>1,decorated:i.tgtRing.visible||i.escortMarker.visible,visible:s})!==!1&&s,l=qi().groups.find(f=>f.id===t.userData.unit?.groupId);r.title=l?`编组: ${l.name}`:"",r.style.borderLeft=l?`3px solid ${l.color}`:"",r.style.opacity=c?String(i.labelFade):"0";const d=c&&!r.hidden&&(ln||typeof en<"u"&&en?.active()||Ga());r.style.pointerEvents=d?"auto":"none",r.style.cursor=ln?"crosshair":d?"pointer":"",r.classList.toggle("range-attacker-label",t.userData.unit.id===vi),r.classList.toggle("range-target-label",t.userData.unit.id===Li)}}let Lr=!1;function _g(){if(requestAnimationFrame(_g),!Lr)return;Pt?(qm(),ww()):Dr&&Dl(),Ot&&!Pt&&(!nn||Na)&&Xm(),It.update(),Mm(Xr,yt.position.distanceTo(It.target)),iE(),rE();const n=Ho();Lw.update(yt,n.width,n.height,_t.extent,_t.extentZ),St?.updateLabels(yt,n.width,n.height),en?.update(),vt.render(ns,yt)}function El(){const n=document.querySelector("#scene")?.getBoundingClientRect(),e=Math.floor(n?.width??0),t=Math.floor(n?.height??0);return e<1||t<1?!1:(yt.aspect=e/t,Ja(),vt.setSize(e,t,!1),!0)}addEventListener("resize",()=>{El()});const wp=document.querySelector("#scene");wp&&typeof ResizeObserver=="function"&&new ResizeObserver(()=>{El()}).observe(wp);function sE(n){Tg(n,{size:_t.size,extent:_t.extent})}function oE(n){sE(n),Ct&&Ah(!1);const e=ve.read();try{Io(),Wn(),ut.clear(),he=null,ve.reset(n.checkpoint),or(n.checkpoint);const t=(i,r)=>Math.max(0,...i.filter(s=>s.startsWith(r)).map(s=>Number(s.slice(r.length))).filter(Number.isSafeInteger))+1;es=t(ot.map(i=>i.id),"unit-"),Ua=t(_n.map(i=>i.id),"route-"),xl=t(_n.flatMap(i=>i.waypoints.map(r=>r.id)),"wp-"),yl=t(ot.flatMap(i=>(i.trackPoints??[]).map(r=>r.id)),"control-"),gl=t(ot.flatMap(i=>i.routeBinding?.formationId?[i.routeBinding.formationId]:[]),"formation-"),Ii.clear(),vi=Li="",at(),rt()}catch(t){throw or(e),ve.reset(e),at(),rt(),t}}let Tl,Wa,Ep="",sn=!1,ic="",Ts=null;function Qt(n){ic=n;const e=document.querySelector("#workflow-state");e&&(e.textContent=n)}function Xa(){Ts=null,document.querySelector("#workflow-confirm")?.setAttribute("hidden","")}function ki(){const n=Tt(),e=n?.workflow?.mode==="formal",t=document.querySelector("#workflow-panel");if(!t)return;if(typeof Ct<"u"&&Ct){t.hidden=!0;for(const m of Array.from(t.querySelectorAll("button")))m.disabled=!0;return}t.hidden=!1;const i=e&&n.turns.length===n.workflow.committedTurns+1,r=Ht()||sn,s=n?.status==="finished";t.dataset.mode=s?"finished":e?Ni()?"draft":"history":n?.mapEditRef?"map-editor":"authoring";const o=document.querySelector("#task-editor-save");o&&(o.hidden=!!e||!!n?.mapEditRef||n?.turns.length!==1,o.disabled=r||s);const a=document.querySelector("#map-editor-save");a&&(a.hidden=!n?.mapEditRef,a.disabled=r||s);const c=document.querySelector("#workflow-reopen");c&&(c.hidden=!e,c.disabled=!e||r||!!Ts||!!i||!n.workflow.committedTurns||!!n.workflow?.branchFrom&&n.workflow.committedTurns-1<n.workflow.branchFrom.turn);const l=document.querySelector("#workflow-save-draft");l&&(l.hidden=!e,l.disabled=r||s||!Ni()||!!Ts||!Tl);const d=document.querySelector("#workflow-snapshot");d&&(d.hidden=!e,d.disabled=r||!!Ts||!n?.workflow?.committedTurns||typeof Wa>"u"||!Wa);const f=document.querySelector("#editor-save-as-controls");f&&(f.hidden=!!e||s);for(const m of["map","task"]){const _=document.querySelector(`#${m}-editor-save-as`);_&&(_.hidden=!!e||(m==="map"?!n?.mapEditRef:!!n?.mapEditRef),_.disabled=r||s)}const u=document.querySelector("#editor-save-as-name");u&&(u.disabled=r||s,n&&Ep!==n.id&&(Ep=n.id,u.value=`${n.name.replace(/ 制作副本$/,"").slice(0,123)} COPY`));const h=document.querySelector("#workflow-state");h&&(h.textContent=ic||(s?"已结束":e?Ni()?`第 ${De+1} 回合 · 草稿`:`第 ${De+1} 回合 · 只读 · 已提交 ${n.workflow.committedTurns} 回合`:n?.mapEditRef?`地图制作 · r${n.mapEditRef.revision}`:"场景制作"));for(const m of["begin","advance","commit","discard"]){const _=document.querySelector(`#workflow-${m}`);_&&(_.hidden=!e,m==="discard"&&(_.textContent=n?.workflow?.committedTurns===0?"重置第一回合草稿…":"丢弃草稿…"),_.disabled=!e||s||r||!!Ts||(m==="begin"?!!i:!Ni()))}}function Vu(n,e){if(typeof Ct<"u"&&Ct)return;if(!ve||sn||Ht()){Qt("请先结束当前放置、拖动或笔刷操作");return}if(e&&(e.revision!==ve.revision||e.sessionId!==Tt()?.id||e.turn!==De)){Xa(),Qt("会话或回合已变化，请重新选择操作"),ki();return}if(!on())return;const t=ve.read(),i=t.editor.sessionId??"session-working",r=t.project.sessions.find(s=>s.id===i);if(!r?.workflow||(n==="reopen"?r.turns.length!==r.workflow.committedTurns||!r.workflow.committedTurns:r.status==="finished"||n!=="begin"&&!Ni()||n==="begin"&&r.turns.length!==r.workflow.committedTurns)){Qt("当前状态不适用此操作，请刷新回合状态"),ki();return}sn=!0,ic="",Xa(),ki();try{if(n==="reopen"){ve.reopenLastCommittedTurn(i,ve.revision),ar(),Gn(!0),Qt("最近回合已恢复为草稿");return}const o={begin:Bg,advance:zg,commit:Og,discard:Fg}[n](t.project,i),a=o.sessions.find(d=>d.id===i),c={project:o,editor:{...t.editor,currentTurn:a.turns.length-1}},l={begin:"开始回合草稿",advance:"按航路推进草稿",commit:"提交回合",discard:"丢弃回合草稿"};ve.commit(c,l[n],t),ar(),(n==="begin"||n==="advance"||n==="discard"&&a.workflow?.committedTurns===0)&&Gn(!0)}catch(s){Qt(s instanceof Error?s.message:String(s))}finally{sn=!1,rt()}}function aE(n){if(Ct)return;if(n!=="commit"&&n!=="discard"&&n!=="reopen"){Vu(n);return}if(!ve||Ht()||sn||(n==="reopen"?!bn()||Tt().turns.length!==Tt().workflow.committedTurns||!Tt().workflow.committedTurns:!Ni())||!on())return;const e=n==="reopen"?"取消最近回合提交？":n==="commit"?"提交当前回合？":Tt()?.workflow?.committedTurns===0?"重置第一回合草稿？":"丢弃当前草稿？",t={action:n,revision:ve.revision,sessionId:Tt().id,turn:De},i=document.querySelector("#workflow-confirm");if(!i){window.confirm(e)&&Vu(n,t);return}Ts=t,i.hidden=!1;const r=document.querySelector("#workflow-confirm-text");r&&(r.textContent=e),ki()}for(const n of["begin","advance","commit","discard","reopen"])document.querySelector(`#workflow-${n}`)?.addEventListener("click",()=>aE(n));document.querySelector("#workflow-confirm-yes")?.addEventListener("click",()=>{const n=Ts;n&&Vu(n.action,n)});document.querySelector("#workflow-confirm-cancel")?.addEventListener("click",()=>{Xa(),ki()});document.querySelector("#canvas-resize")?.addEventListener("click",()=>{if(!ve||!ct()||Ht())return;const n=Number(dt("#canvas-width").value),e=Number(dt("#canvas-height").value),t=Number(dt("#canvas-samples").value);if(on())try{const i=ve.read(),r=i.project.sessions.find(a=>a.id===i.editor.sessionId),s=Ng(i.project,r.mapRef,n,e,t),o=s.maps.at(-1);s.sessions.find(a=>a.id===r.id).mapRef={id:o.id,revision:o.revision},ve.commit({...i,project:s},"调整画布尺寸",i),ar(),Gn(!0),Xi(!0),Qt(`画布 ${n} × ${e} km`)}catch(i){Qt(i instanceof Error?i.message:String(i))}});document.querySelector("#task-editor-save")?.addEventListener("click",()=>{if(!(Ct||!ve||Ht()||bn()||Tt()?.mapEditRef)&&on())try{const n=ve.read(),e=Tt(),t=n.project.tasks.find(s=>s.id===e.taskRef.id&&s.revision===e.taskRef.revision),i=Ug(n.project,e.id,t?.name??e.name.replace(/ 制作副本$/,""));ve.commit({...n,project:i},"保存任务新修订",n),ar(),Gn(!0);const r=i.sessions.find(s=>s.id===e.id).taskRef;Qt(`任务已保存 · r${r.revision}`),Ar(`任务已保存 · r${r.revision}`)}catch(n){const e=n instanceof Error?n.message:String(n);Qt(e),Ar(e,"error")}});document.querySelector("#map-editor-save")?.addEventListener("click",()=>{if(Ct||!ve||Ht()||sn||!Tt()?.mapEditRef||!on())return;const n=ve.read(),e=Tt().id;try{const t=kg(n.project,e),i=t.sessions.find(s=>s.id===e).mapEditRef,r=ve.commit({...n,project:t},"保存地图新修订",n);ar(),Xi(!0),Qt(r?`地图已保存 · r${i.revision}`:`无修改 · r${i.revision}`),Ar(r?`地图已保存 · r${i.revision}`:`无修改 · r${i.revision}`),ki()}catch(t){const i=t instanceof Error?t.message:String(t);Qt(i),Ar(i,"error")}});document.querySelector("#workflow-save-draft")?.addEventListener("click",async()=>{if(!ve||Ht()||sn||!Ni()||!Tl||!on())return;const n=document.querySelector("#workflow-save-draft");n.disabled=!0;try{const e=await Tl();Qt(e?"草稿已保存":"草稿保存失败"),Ar(e?"草稿已保存":"草稿保存失败",e?"ok":"error")}catch(e){const t=e instanceof Error?e.message:String(e);Qt(t),Ar(t,"error")}finally{ki()}});document.querySelector("#workflow-snapshot")?.addEventListener("click",async()=>{if(!(Ct||!ve||Ht()||sn||!Tt()?.workflow?.committedTurns||!Wa)&&on()){sn=!0,ki();try{await Wa(),Qt("回合快照已发送到管理器快照仓库")}catch(n){Qt(n instanceof Error?n.message:String(n))}finally{sn=!1,ki(),rt()}}});for(const n of["map","task"])document.querySelector(`#${n}-editor-save-as`)?.addEventListener("click",()=>{if(Ct||!ve||Ht()||sn||bn()||!!Tt()?.mapEditRef!=(n==="map")||!on())return;const e=document.querySelector("#editor-save-as-name").value.trim();if(!e){Qt("请填写副本名称"),Ar("请填写副本名称","error");return}try{const t=ve.read(),i=Tt(),r=`map-${crypto.randomUUID()}`,s=n==="map"?hw(t.project,i.id,r,e):fw(t.project,i.id,{mapId:r,taskId:`task-${crypto.randomUUID()}`},e);ve.commit({...t,project:s.project},n==="map"?"另存为新地图":"另存为新任务",t),ar(),Gn(!0),n==="map"&&Xi(!0),Qt(`${n==="map"?"地图":"任务"}已另存为「${e}」r1`),Ar(`${n==="map"?"地图":"任务"}已另存为「${e}」r1`)}catch(t){const i=t instanceof Error?t.message:String(t);Qt(i),Ar(i,"error")}});function Ah(n){if(n!==Ct){if(Ht()||sn||!on())throw new Error("请先完成当前编辑操作");if(n){const e=ve.read(),t=Eg(e),i=Cp(e),r=new Wu(i);il={edit:Ue,terrain:Ot},Io(),ut.clear(),he=null,nl=ve,Oa=e,Ul=t,Ps.clear(),Ps.set(i.editor.currentTurn,r),Ct=!0,ve=r}else Io(),ut.clear(),he=null,ve=nl,Ct=!1,nl=null,Oa=null,typeof za<"u"&&(za=null),Ps.clear(),Ue=il.edit,Ot=il.terrain;jr=null,Sl="",ya="",or(ve.read()),document.querySelector("#app").dataset.playerView=String(Ct),document.querySelector("#player-viewer-open").hidden=Ct,document.querySelector("#player-viewer-exit").hidden=!Ct,at(),rt()}}function cE(n){const e=wg(n);if(Ht()||sn||!on())throw new Error("请先完成当前编辑操作");Ct&&Ah(!1);const t=ve.read();il={edit:Ue,terrain:Ot},Io(),ut.clear(),he=null,nl=ve,Oa=t,za=e,Ul=e.turns.length-1;const i=new Wu(e.turns[0]);Ps.clear(),Ps.set(0,i),ve=i,Ct=!0,jr=null,Sl="",ya="",or(i.read()),document.querySelector("#app").dataset.playerView="true",document.querySelector("#player-viewer-open").hidden=!0,document.querySelector("#player-viewer-exit").hidden=!1,at(),rt()}function lE(n){if(!Oa||Ht()||sn)return;const e=Math.max(0,Math.min(n,Ul));if(e===De||!on())return;const t=Ue,i=typeof za<"u"?za:null,r=Ps.get(e)??new Wu(i?i.turns[e]:Cp(Oa,e));Ps.set(e,r),Io(),ut.clear(),he=null,ve=r,jr=null,or(r.read()),Ue=t,at(),rt()}function dE(){if(!Ct||Ht()||sn||!on())return;const n=ve.read(),e=n.project.sessions.find(s=>s.id===n.editor.sessionId);e.routes=[{id:"player-viewer-route",name:"Viewer",waypoints:[]}],n.editor.activeRouteId="player-viewer-route";const t=Hg(Vg(n,n.editor.sessionId)),i=URL.createObjectURL(new Blob([t],{type:"application/json"})),r=document.createElement("a");r.href=i,r.download=`player-view-turn-${De+1}.json`,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function Io(){St?.cancel(),St?.clearSelection(),_i=null,typeof en<"u"&&en?.cancel(),Ue=Ot=Vt=Nn=zt=dn=!1,nt=null,Je=null,Vi=null,$i=!1,Rr=null,Pn=null,Ba=null,Va.clear(),Le.detach(),Wi.visible=!1,Pt&&vt.domElement.hasPointerCapture(Pt.pointerId)&&vt.domElement.releasePointerCapture(Pt.pointerId),Pt=null,Ti(!0),It.enabled=!0,vt.domElement.style.cursor="",Xa(),ic=""}function ar(){jr=null,Io();const n=[...ut];or(ve.read()),ut.clear(),n.filter(t=>ot.some(i=>i.id===t)).forEach(t=>ut.add(t)),he=Fi().at(-1)??null;const e=(t,i,r)=>Math.max(r,...t.filter(s=>s.startsWith(i)).map(s=>Number(s.slice(i.length))+1).filter(Number.isSafeInteger));es=e(ot.map(t=>t.id),"unit-",es),Ua=e(_n.map(t=>t.id),"route-",Ua),xl=e(_n.flatMap(t=>t.waypoints.map(i=>i.id)),"wp-",xl),yl=e(ot.flatMap(t=>(t.trackPoints??[]).map(i=>i.id)),"control-",yl),gl=e(ot.flatMap(t=>t.routeBinding?.formationId?[t.routeBinding.formationId]:[]),"formation-",gl),at(),rt()}let Tp=!1;function hE(n,e){if(Tp)throw new Error("Workspace already mounted");Tp=!0,ve=n,Tl=e?.saveDraft,Wa=e?.generateSnapshot,Vn=ew({fitMap:wh,topView:Gw,toggleEdit:()=>Gn(!Ue),viewerExport:dE,viewerUndo:Fl,viewerRedo:Ol,chooseTool:t=>{Le.dragging||Pt||xi||(St?.cancel(),t!=="links"&&t!=="markers"&&en?.cancel(),["markers","drawing"].includes(t)||St?.clearSelection(),Je&&t!=="units"&&ts(),t==="terrain"&&ct()?(Gn(!0),Xi(!0)):Ot&&(Tt()?.mapEditRef?(Ot=!1,Wi.visible=!1):Xi(!1)),["routes"].includes(t)||(Vt=zt=Nn=!1,nt=null),(["markers","drawing","links"].includes(t)?yi():ct())&&["groups","markers","drawing","routes","units","equipment","links"].includes(t)&&!Ue&&Gn(!0),t!=="range"&&ln&&Wn(),at(),rt())}}),$r=document.createElement("aside"),$r.id="player-roster-panel",$r.hidden=!0,$r.setAttribute("aria-label","玩家资料卡"),document.querySelector("#app").append($r),document.querySelector("#app").classList.add("player-roster-mounted"),Ou=iw($r,{readRevision:()=>ve.revision,read:()=>ve.read().project,busy:()=>sn||Ht(),report:Qt,beginCreate:$w,armPlacement:Yw,cancelPlacement:ts,selectUnit:(t,i)=>{if(sn||Ht())return;const r=ot.find(s=>s.id===t);r&&(jn([r]),i&&Sp([t]))},recordAction:Zw}),Km=tw(Vn.panels.groups,{read:qi,units:()=>ot,selectedIds:()=>[...ut],editable:()=>ct()&&Ue&&!Tt()?.mapEditRef,change:Gd,select:t=>jn(ot.filter(i=>t.includes(i.id))),copy:Iw,focus:Sp}),St=dw({markersPanel:Vn.panels.markers,drawingsPanel:Vn.panels.drawing,world:tn,labelRoot:Nl,read:qi,change:(t,i)=>Gd(t,r=>i(r)),editable:()=>yi()&&Ue,focus:yh,sampleHeightKm:(t,i)=>Et(t*tt,i*tt)/tt,onMarkerPick:t=>en?.pick("marker",t)??!1,onTransformMode:t=>{yo=t,So()},onOpenPanel:t=>{document.querySelector("#edit-panel").dataset.activeTab!==t&&Vn?.select(t)},onSelectionChange:t=>{t&&(yo="translate",Wn(),nt=null,Vt=zt=Nn=dn=!1,ut.clear(),he=null,Bl(),at(),rt()),So()},onPickingChange:t=>{document.querySelector("#app").dataset.mapPicking=String(t),t&&(Wn(),Ti(!0),dn=!1,Vt=zt=Nn=Ot=!1,nt=null,Wi.visible=!1,Le.detach()),It.enabled=Lr,vt.domElement.style.cursor=t?"crosshair":"",ki()}}),en=sw({panel:Vn.panels.links,world:tn,read:qi,readUnits:()=>ot.map(t=>{const i=Pl(t,Xn(t),Et,ii);return{id:t.id,label:t.label,position:{x:i.x/tt,y:i.y/tt,z:i.z/tt}}}),selectedUnitId:()=>he?.id,editable:()=>yi()&&Ue&&!Tt()?.mapEditRef,busy:()=>sn||Ht(),change:(t,i)=>Gd(t,r=>i(r)),onModeChange:t=>{t&&(St?.cancel(),St?.clearSelection(),Wn(),Ti(!0),dn=Vt=zt=Nn=!1,nt=null,Le.detach()),vt.domElement.style.cursor=t?"crosshair":"",So()}}),document.querySelector("#route-select-bound").addEventListener("click",()=>jn(ot.filter(t=>t.routeBinding?.routeId===Dn))),document.querySelector("#route-bind-group").addEventListener("click",()=>{const t=document.querySelector("#route-group-select").value;hg(ot.filter(i=>i.groupId===t&&ja(i)))});for(const t of["#route-visible","#route-labels"])document.querySelector(t).addEventListener("change",()=>at());return vt.domElement.addEventListener("pointerdown",t=>{if(!St?.isPicking()||t.button!==0||t.altKey)return;t.stopImmediatePropagation(),t.preventDefault();const i=Lo(t);i&&St.pick({x:i.x/tt,y:i.y/tt,z:i.z/tt})},!0),vt.domElement.addEventListener("pointermove",t=>{if(!St?.isPicking())return;const i=Lo(t);St.preview(i?{x:i.x/tt,y:i.y/tt,z:i.z/tt}:null)}),ar(),Ja(),Gn(!1),at(),_g(),{flush:()=>{if(!on())throw new Error("当前编辑尚未保存")},open:oE,sync:ar,busy:()=>sn||Ht(),selectedUnitId:()=>he?.id,editTerrain:()=>{ct()&&(Gn(!0),Xi(!0))},editScenario:()=>{ct()&&(Gn(!0),Xi(!1))},playerView:Ah,snapshot:cE,activate:t=>{Lr=t,It.enabled=t,Vn?.sync({editing:Ue,editable:yi(),mapOnly:!!Tt()?.mapEditRef,active:t,playerView:Ct,viewerCanUndo:!!ve?.canUndo,viewerCanRedo:!!ve?.canRedo}),t?(El()||requestAnimationFrame(()=>{El()}),at(),rt()):(St?.cancel(),en?.cancel(),Wn(),Le.detach(),ag())}}}export{hE as mountWorkspace};
