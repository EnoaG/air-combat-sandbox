import{W as tt,G as Eg,R as Ih,p as Tg,v as Ag,w as Rg,d as qu,c as Lp,a as Cg,b as Pg,H as Ip,e as Dg,P as $u,f as Lg,g as Np,m as Yu,h as ju,U as Up,r as Zu,i as Ig,j as Ng,k as Ug,l as kg,n as Fg,o as kp,t as Fp,q as Og,s as zg,u as Bg,x as Hg,y as Vg,z as Gg,A as Op,B as zp,C as Wg,D as Xg,E as qg,F as $g,I as Yg,J as jg,K as Zg}from"./index-CE9YO6JQ.js";const Ku="179",yo={ROTATE:0,DOLLY:1,PAN:2},go={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kg=0,Nh=1,Jg=2,Bp=1,Qg=2,Tr=3,Nr=0,bi=1,pn=2,Qr=0,So=1,jd=2,Uh=3,kh=4,e0=5,bs=100,t0=101,n0=102,i0=103,r0=104,s0=200,o0=201,a0=202,c0=203,Zd=204,Kd=205,l0=206,d0=207,u0=208,h0=209,f0=210,p0=211,m0=212,g0=213,_0=214,Jd=0,Qd=1,eu=2,Co=3,tu=4,nu=5,iu=6,ru=7,Hp=0,v0=1,x0=2,es=0,y0=1,S0=2,b0=3,M0=4,w0=5,E0=6,T0=7,Vp=300,Po=301,Do=302,su=303,ou=304,Ll=306,au=1e3,Ts=1001,cu=1002,ar=1003,A0=1004,dc=1005,_r=1006,Yl=1007,As=1008,xr=1009,Gp=1010,Wp=1011,Ra=1012,Ju=1013,ks=1014,Rr=1015,Qa=1016,Qu=1017,eh=1018,Ca=1020,Xp=35902,qp=1021,$p=1022,sr=1023,Pa=1026,Da=1027,Yp=1028,th=1029,jp=1030,nh=1031,ih=1033,Zc=33776,Kc=33777,Jc=33778,Qc=33779,lu=35840,du=35841,uu=35842,hu=35843,fu=36196,pu=37492,mu=37496,gu=37808,_u=37809,vu=37810,xu=37811,yu=37812,Su=37813,bu=37814,Mu=37815,wu=37816,Eu=37817,Tu=37818,Au=37819,Ru=37820,Cu=37821,el=36492,Pu=36494,Du=36495,Zp=36283,Lu=36284,Iu=36285,Nu=36286,R0=3200,C0=3201,P0=0,D0=1,Kr="",pi="srgb",Lo="srgb-linear",ll="linear",Kt="srgb",Js=7680,Fh=519,L0=512,I0=513,N0=514,Kp=515,U0=516,k0=517,F0=518,O0=519,Oh=35044,dl=35048,zh="300 es",vr=2e3,ul=2001;class Vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bh=1234567;const xa=Math.PI/180,La=180/Math.PI;function Gs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ei[n&255]+ei[n>>8&255]+ei[n>>16&255]+ei[n>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[t&63|128]+ei[t>>8&255]+"-"+ei[t>>16&255]+ei[t>>24&255]+ei[i&255]+ei[i>>8&255]+ei[i>>16&255]+ei[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function rh(n,e){return(n%e+e)%e}function z0(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function B0(n,e,t){return n!==e?(t-n)/(e-n):0}function ya(n,e,t){return(1-t)*n+t*e}function H0(n,e,t,i){return ya(n,e,1-Math.exp(-t*i))}function V0(n,e=1){return e-Math.abs(rh(n,e*2)-e)}function G0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function W0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function X0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function q0(n,e){return n+Math.random()*(e-n)}function $0(n){return n*(.5-Math.random())}function Y0(n){n!==void 0&&(Bh=n);let e=Bh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function j0(n){return n*xa}function Z0(n){return n*La}function K0(n){return(n&n-1)===0&&n!==0}function J0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Q0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function e_(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),d=o((e+i)/2),f=s((e-i)/2),u=o((e-i)/2),h=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*d,c*f,c*u,a*l);break;case"YZY":n.set(c*u,a*d,c*f,a*l);break;case"ZXZ":n.set(c*f,c*u,a*d,a*l);break;case"XZX":n.set(a*d,c*m,c*h,a*l);break;case"YXY":n.set(c*h,a*d,c*m,a*l);break;case"ZYZ":n.set(c*m,c*h,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ui(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const jt={DEG2RAD:xa,RAD2DEG:La,generateUUID:Gs,clamp:Rt,euclideanModulo:rh,mapLinear:z0,inverseLerp:B0,lerp:ya,damp:H0,pingpong:V0,smoothstep:G0,smootherstep:W0,randInt:X0,randFloat:q0,randFloatSpread:$0,seededRandom:Y0,degToRad:j0,radToDeg:Z0,isPowerOfTwo:K0,ceilPowerOfTwo:J0,floorPowerOfTwo:Q0,setQuaternionFromProperEuler:e_,normalize:ui,denormalize:fo};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],d=i[r+2],f=i[r+3];const u=s[o+0],h=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=h,e[t+2]=m,e[t+3]=_;return}if(f!==_||c!==u||l!==h||d!==m){let g=1-a;const p=c*u+l*h+d*m+f*_,w=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const L=Math.sqrt(y),D=Math.atan2(L,p*w);g=Math.sin(g*D)/L,a=Math.sin(a*D)/L}const v=a*w;if(c=c*g+u*v,l=l*g+h*v,d=d*g+m*v,f=f*g+_*v,g===1-a){const L=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=L,l*=L,d*=L,f*=L}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],d=i[r+3],f=s[o],u=s[o+1],h=s[o+2],m=s[o+3];return e[t]=a*m+d*f+c*h-l*u,e[t+1]=c*m+d*u+l*f-a*h,e[t+2]=l*m+d*h+a*u-c*f,e[t+3]=d*m-a*f-c*u-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(r/2),f=a(s/2),u=c(i/2),h=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=u*d*f+l*h*m,this._y=l*h*f-u*d*m,this._z=l*d*m+u*h*f,this._w=l*d*f-u*h*m;break;case"YXZ":this._x=u*d*f+l*h*m,this._y=l*h*f-u*d*m,this._z=l*d*m-u*h*f,this._w=l*d*f+u*h*m;break;case"ZXY":this._x=u*d*f-l*h*m,this._y=l*h*f+u*d*m,this._z=l*d*m+u*h*f,this._w=l*d*f-u*h*m;break;case"ZYX":this._x=u*d*f-l*h*m,this._y=l*h*f+u*d*m,this._z=l*d*m-u*h*f,this._w=l*d*f+u*h*m;break;case"YZX":this._x=u*d*f+l*h*m,this._y=l*h*f+u*d*m,this._z=l*d*m-u*h*f,this._w=l*d*f-u*h*m;break;case"XZY":this._x=u*d*f-l*h*m,this._y=l*h*f-u*d*m,this._z=l*d*m+u*h*f,this._w=l*d*f+u*h*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],f=t[10],u=i+a+f;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(d-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+d)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+o*a+r*l-s*c,this._y=r*d+o*c+s*a-i*l,this._z=s*d+o*l+i*c-r*a,this._w=o*d-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),f=Math.sin((1-t)*d)/l,u=Math.sin(t*d)/l;return this._w=o*f+this._w*u,this._x=i*f+this._x*u,this._y=r*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(e=0,t=0,i=0){S.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),d=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+c*l+o*f-a*d,this.y=i+c*d+a*l-s*f,this.z=r+c*f+s*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jl.copy(this).projectOnVector(e),this.sub(jl)}reflect(e){return this.sub(jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jl=new S,Hh=new cn;class wt{constructor(e,t,i,r,s,o,a,c,l){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],d=i[4],f=i[7],u=i[2],h=i[5],m=i[8],_=r[0],g=r[3],p=r[6],w=r[1],y=r[4],v=r[7],L=r[2],D=r[5],R=r[8];return s[0]=o*_+a*w+c*L,s[3]=o*g+a*y+c*D,s[6]=o*p+a*v+c*R,s[1]=l*_+d*w+f*L,s[4]=l*g+d*y+f*D,s[7]=l*p+d*v+f*R,s[2]=u*_+h*w+m*L,s[5]=u*g+h*y+m*D,s[8]=u*p+h*v+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-i*s*d+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=d*o-a*l,u=a*c-d*s,h=l*s-o*c,m=t*f+i*u+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=f*_,e[1]=(r*l-d*i)*_,e[2]=(a*i-r*o)*_,e[3]=u*_,e[4]=(d*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zl.makeScale(e,t)),this}rotate(e){return this.premultiply(Zl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zl=new wt;function Jp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function hl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function t_(){const n=hl("canvas");return n.style.display="block",n}const Vh={};function bo(n){n in Vh||(Vh[n]=!0,console.warn(n))}function n_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Gh=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wh=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function i_(){const n={enabled:!0,workingColorSpace:Lo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Kt&&(r.r=Pr(r.r),r.g=Pr(r.g),r.b=Pr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Kt&&(r.r=Mo(r.r),r.g=Mo(r.g),r.b=Mo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Kr?ll:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return bo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return bo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Lo]:{primaries:e,whitePoint:i,transfer:ll,toXYZ:Gh,fromXYZ:Wh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:i,transfer:Kt,toXYZ:Gh,fromXYZ:Wh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),n}const Gt=i_();function Pr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qs;class r_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qs===void 0&&(Qs=hl("canvas")),Qs.width=e.width,Qs.height=e.height;const r=Qs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Qs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pr(t[i]/255)*255):t[i]=Pr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let s_=0;class sh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Kl(r[o].image)):s.push(Kl(r[o]))}else s=Kl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Kl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?r_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let o_=0;const Jl=new S;class Mi extends Vs{constructor(e=Mi.DEFAULT_IMAGE,t=Mi.DEFAULT_MAPPING,i=Ts,r=Ts,s=_r,o=As,a=sr,c=xr,l=Mi.DEFAULT_ANISOTROPY,d=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=Gs(),this.name="",this.source=new sh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jl).x}get height(){return this.source.getSize(Jl).y}get depth(){return this.source.getSize(Jl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case au:e.x=e.x-Math.floor(e.x);break;case Ts:e.x=e.x<0?0:1;break;case cu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case au:e.y=e.y-Math.floor(e.y);break;case Ts:e.y=e.y<0?0:1;break;case cu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Mi.DEFAULT_IMAGE=null;Mi.DEFAULT_MAPPING=Vp;Mi.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],d=c[4],f=c[8],u=c[1],h=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(d-u)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(h+1)/2,L=(p+1)/2,D=(d+u)/4,R=(f+_)/4,N=(m+g)/4;return y>v&&y>L?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=D/i,s=R/i):v>L?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=D/r,s=N/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=R/s,r=N/s),this.set(i,r,s,t),this}let w=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(u-d)*(u-d));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(f-_)/w,this.z=(u-d)/w,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class a_ extends Vs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_r,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Mi(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:_r,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new sh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fs extends a_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qp extends Mi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ar,this.minFilter=ar,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class c_ extends Mi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ar,this.minFilter=ar,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ji.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ji.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ji):Ji.fromBufferAttribute(s,o),Ji.applyMatrix4(e.matrixWorld),this.expandByPoint(Ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uc.copy(i.boundingBox)),uc.applyMatrix4(e.matrixWorld),this.union(uc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ji),Ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),hc.subVectors(this.max,Qo),eo.subVectors(e.a,Qo),to.subVectors(e.b,Qo),no.subVectors(e.c,Qo),Br.subVectors(to,eo),Hr.subVectors(no,to),us.subVectors(eo,no);let t=[0,-Br.z,Br.y,0,-Hr.z,Hr.y,0,-us.z,us.y,Br.z,0,-Br.x,Hr.z,0,-Hr.x,us.z,0,-us.x,-Br.y,Br.x,0,-Hr.y,Hr.x,0,-us.y,us.x,0];return!Ql(t,eo,to,no,hc)||(t=[1,0,0,0,1,0,0,0,1],!Ql(t,eo,to,no,hc))?!1:(fc.crossVectors(Br,Hr),t=[fc.x,fc.y,fc.z],Ql(t,eo,to,no,hc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sr=[new S,new S,new S,new S,new S,new S,new S,new S],Ji=new S,uc=new Vo,eo=new S,to=new S,no=new S,Br=new S,Hr=new S,us=new S,Qo=new S,hc=new S,fc=new S,hs=new S;function Ql(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){hs.fromArray(n,s);const a=r.x*Math.abs(hs.x)+r.y*Math.abs(hs.y)+r.z*Math.abs(hs.z),c=e.dot(hs),l=t.dot(hs),d=i.dot(hs);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const l_=new Vo,ea=new S,ed=new S;class Go{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):l_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const t=ea.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ea,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(ed)),this.expandByPoint(ea.copy(e.center).sub(ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const br=new S,td=new S,pc=new S,Vr=new S,nd=new S,mc=new S,id=new S;class ec{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(br.copy(this.origin).addScaledVector(this.direction,t),br.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){td.copy(e).add(t).multiplyScalar(.5),pc.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(td);const s=e.distanceTo(t)*.5,o=-this.direction.dot(pc),a=Vr.dot(this.direction),c=-Vr.dot(pc),l=Vr.lengthSq(),d=Math.abs(1-o*o);let f,u,h,m;if(d>0)if(f=o*c-a,u=o*a-c,m=s*d,f>=0)if(u>=-m)if(u<=m){const _=1/d;f*=_,u*=_,h=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=s,f=Math.max(0,-(o*u+a)),h=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(o*u+a)),h=-f*f+u*(u+2*c)+l;else u<=-m?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-c),s),h=-f*f+u*(u+2*c)+l):u<=m?(f=0,u=Math.min(Math.max(-s,-c),s),h=u*(u+2*c)+l):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-c),s),h=-f*f+u*(u+2*c)+l);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),h=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(td).addScaledVector(pc,u),h}intersectSphere(e,t){br.subVectors(e.center,this.origin);const i=br.dot(this.direction),r=br.dot(br)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,br)!==null}intersectTriangle(e,t,i,r,s){nd.subVectors(t,e),mc.subVectors(i,e),id.crossVectors(nd,mc);let o=this.direction.dot(id),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vr.subVectors(this.origin,e);const c=a*this.direction.dot(mc.crossVectors(Vr,mc));if(c<0)return null;const l=a*this.direction.dot(nd.cross(Vr));if(l<0||c+l>o)return null;const d=-a*Vr.dot(id);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,i,r,s,o,a,c,l,d,f,u,h,m,_,g){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,d,f,u,h,m,_,g)}set(e,t,i,r,s,o,a,c,l,d,f,u,h,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=f,p[14]=u,p[3]=h,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/io.setFromMatrixColumn(e,0).length(),s=1/io.setFromMatrixColumn(e,1).length(),o=1/io.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=o*d,h=o*f,m=a*d,_=a*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=h+m*l,t[5]=u-_*l,t[9]=-a*c,t[2]=_-u*l,t[6]=m+h*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*d,h=c*f,m=l*d,_=l*f;t[0]=u+_*a,t[4]=m*a-h,t[8]=o*l,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=h*a-m,t[6]=_+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*d,h=c*f,m=l*d,_=l*f;t[0]=u-_*a,t[4]=-o*f,t[8]=m+h*a,t[1]=h+m*a,t[5]=o*d,t[9]=_-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*d,h=o*f,m=a*d,_=a*f;t[0]=c*d,t[4]=m*l-h,t[8]=u*l+_,t[1]=c*f,t[5]=_*l+u,t[9]=h*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,h=o*l,m=a*c,_=a*l;t[0]=c*d,t[4]=_-u*f,t[8]=m*f+h,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=h*f+m,t[10]=u-_*f}else if(e.order==="XZY"){const u=o*c,h=o*l,m=a*c,_=a*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=u*f+_,t[5]=o*d,t[9]=h*f-m,t[2]=m*f-h,t[6]=a*d,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d_,e,u_)}lookAt(e,t,i){const r=this.elements;return Pi.subVectors(e,t),Pi.lengthSq()===0&&(Pi.z=1),Pi.normalize(),Gr.crossVectors(i,Pi),Gr.lengthSq()===0&&(Math.abs(i.z)===1?Pi.x+=1e-4:Pi.z+=1e-4,Pi.normalize(),Gr.crossVectors(i,Pi)),Gr.normalize(),gc.crossVectors(Pi,Gr),r[0]=Gr.x,r[4]=gc.x,r[8]=Pi.x,r[1]=Gr.y,r[5]=gc.y,r[9]=Pi.y,r[2]=Gr.z,r[6]=gc.z,r[10]=Pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],d=i[1],f=i[5],u=i[9],h=i[13],m=i[2],_=i[6],g=i[10],p=i[14],w=i[3],y=i[7],v=i[11],L=i[15],D=r[0],R=r[4],N=r[8],b=r[12],M=r[1],I=r[5],k=r[9],O=r[13],G=r[2],$=r[6],j=r[10],re=r[14],q=r[3],ge=r[7],Te=r[11],ze=r[15];return s[0]=o*D+a*M+c*G+l*q,s[4]=o*R+a*I+c*$+l*ge,s[8]=o*N+a*k+c*j+l*Te,s[12]=o*b+a*O+c*re+l*ze,s[1]=d*D+f*M+u*G+h*q,s[5]=d*R+f*I+u*$+h*ge,s[9]=d*N+f*k+u*j+h*Te,s[13]=d*b+f*O+u*re+h*ze,s[2]=m*D+_*M+g*G+p*q,s[6]=m*R+_*I+g*$+p*ge,s[10]=m*N+_*k+g*j+p*Te,s[14]=m*b+_*O+g*re+p*ze,s[3]=w*D+y*M+v*G+L*q,s[7]=w*R+y*I+v*$+L*ge,s[11]=w*N+y*k+v*j+L*Te,s[15]=w*b+y*O+v*re+L*ze,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],f=e[6],u=e[10],h=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*c*f-r*l*f-s*a*u+i*l*u+r*a*h-i*c*h)+_*(+t*c*h-t*l*u+s*o*u-r*o*h+r*l*d-s*c*d)+g*(+t*l*f-t*a*h-s*o*f+i*o*h+s*a*d-i*l*d)+p*(-r*a*d-t*c*f+t*a*u+r*o*f-i*o*u+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],f=e[9],u=e[10],h=e[11],m=e[12],_=e[13],g=e[14],p=e[15],w=f*g*l-_*u*l+_*c*h-a*g*h-f*c*p+a*u*p,y=m*u*l-d*g*l-m*c*h+o*g*h+d*c*p-o*u*p,v=d*_*l-m*f*l+m*a*h-o*_*h-d*a*p+o*f*p,L=m*f*c-d*_*c-m*a*u+o*_*u+d*a*g-o*f*g,D=t*w+i*y+r*v+s*L;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/D;return e[0]=w*R,e[1]=(_*u*s-f*g*s-_*r*h+i*g*h+f*r*p-i*u*p)*R,e[2]=(a*g*s-_*c*s+_*r*l-i*g*l-a*r*p+i*c*p)*R,e[3]=(f*c*s-a*u*s-f*r*l+i*u*l+a*r*h-i*c*h)*R,e[4]=y*R,e[5]=(d*g*s-m*u*s+m*r*h-t*g*h-d*r*p+t*u*p)*R,e[6]=(m*c*s-o*g*s-m*r*l+t*g*l+o*r*p-t*c*p)*R,e[7]=(o*u*s-d*c*s+d*r*l-t*u*l-o*r*h+t*c*h)*R,e[8]=v*R,e[9]=(m*f*s-d*_*s-m*i*h+t*_*h+d*i*p-t*f*p)*R,e[10]=(o*_*s-m*a*s+m*i*l-t*_*l-o*i*p+t*a*p)*R,e[11]=(d*a*s-o*f*s-d*i*l+t*f*l+o*i*h-t*a*h)*R,e[12]=L*R,e[13]=(d*_*r-m*f*r+m*i*u-t*_*u-d*i*g+t*f*g)*R,e[14]=(m*a*r-o*_*r-m*i*c+t*_*c+o*i*g-t*a*g)*R,e[15]=(o*f*r-d*a*r+d*i*c-t*f*c-o*i*u+t*a*u)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,d*a+i,d*c-r*o,0,l*c-r*a,d*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,d=o+o,f=a+a,u=s*l,h=s*d,m=s*f,_=o*d,g=o*f,p=a*f,w=c*l,y=c*d,v=c*f,L=i.x,D=i.y,R=i.z;return r[0]=(1-(_+p))*L,r[1]=(h+v)*L,r[2]=(m-y)*L,r[3]=0,r[4]=(h-v)*D,r[5]=(1-(u+p))*D,r[6]=(g+w)*D,r[7]=0,r[8]=(m+y)*R,r[9]=(g-w)*R,r[10]=(1-(u+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=io.set(r[0],r[1],r[2]).length();const o=io.set(r[4],r[5],r[6]).length(),a=io.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qi.copy(this);const l=1/s,d=1/o,f=1/a;return Qi.elements[0]*=l,Qi.elements[1]*=l,Qi.elements[2]*=l,Qi.elements[4]*=d,Qi.elements[5]*=d,Qi.elements[6]*=d,Qi.elements[8]*=f,Qi.elements[9]*=f,Qi.elements[10]*=f,t.setFromRotationMatrix(Qi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=vr,c=!1){const l=this.elements,d=2*s/(t-e),f=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r);let m,_;if(c)m=s/(o-s),_=o*s/(o-s);else if(a===vr)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ul)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=vr,c=!1){const l=this.elements,d=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),h=-(i+r)/(i-r);let m,_;if(c)m=1/(o-s),_=o/(o-s);else if(a===vr)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===ul)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const io=new S,Qi=new $t,d_=new S(0,0,0),u_=new S(1,1,1),Gr=new S,gc=new S,Pi=new S,Xh=new $t,qh=new cn;class In{constructor(e=0,t=0,i=0,r=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],d=r[9],f=r[2],u=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qh.setFromEuler(this),this.setFromQuaternion(qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class oh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h_=0;const $h=new S,ro=new cn,Mr=new $t,_c=new S,ta=new S,f_=new S,p_=new cn,Yh=new S(1,0,0),jh=new S(0,1,0),Zh=new S(0,0,1),Kh={type:"added"},m_={type:"removed"},so={type:"childadded",child:null},rd={type:"childremoved",child:null};class xn extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new S,t=new In,i=new cn,r=new S(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new wt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis(Zh,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis(Zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_c.copy(e):_c.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(ta,_c,this.up):Mr.lookAt(_c,ta,this.up),this.quaternion.setFromRotationMatrix(Mr),r&&(Mr.extractRotation(r.matrixWorld),ro.setFromRotationMatrix(Mr),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kh),so.child=e,this.dispatchEvent(so),so.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(m_),rd.child=e,this.dispatchEvent(rd),rd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kh),so.child=e,this.dispatchEvent(so),so.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,f_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,p_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),f=o(e.shapes),u=o(e.skeletons),h=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xn.DEFAULT_UP=new S(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const er=new S,wr=new S,sd=new S,Er=new S,oo=new S,ao=new S,Jh=new S,od=new S,ad=new S,cd=new S,ld=new Ot,dd=new Ot,ud=new Ot;class rr{constructor(e=new S,t=new S,i=new S){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),er.subVectors(e,t),r.cross(er);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){er.subVectors(r,t),wr.subVectors(i,t),sd.subVectors(e,t);const o=er.dot(er),a=er.dot(wr),c=er.dot(sd),l=wr.dot(wr),d=wr.dot(sd),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const u=1/f,h=(l*c-a*d)*u,m=(o*d-a*c)*u;return s.set(1-h-m,m,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Er)===null?!1:Er.x>=0&&Er.y>=0&&Er.x+Er.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Er)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Er.x),c.addScaledVector(o,Er.y),c.addScaledVector(a,Er.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return ld.setScalar(0),dd.setScalar(0),ud.setScalar(0),ld.fromBufferAttribute(e,t),dd.fromBufferAttribute(e,i),ud.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ld,s.x),o.addScaledVector(dd,s.y),o.addScaledVector(ud,s.z),o}static isFrontFacing(e,t,i,r){return er.subVectors(i,t),wr.subVectors(e,t),er.cross(wr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return er.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),er.cross(wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return rr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return rr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;oo.subVectors(r,i),ao.subVectors(s,i),od.subVectors(e,i);const c=oo.dot(od),l=ao.dot(od);if(c<=0&&l<=0)return t.copy(i);ad.subVectors(e,r);const d=oo.dot(ad),f=ao.dot(ad);if(d>=0&&f<=d)return t.copy(r);const u=c*f-d*l;if(u<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(i).addScaledVector(oo,o);cd.subVectors(e,s);const h=oo.dot(cd),m=ao.dot(cd);if(m>=0&&h<=m)return t.copy(s);const _=h*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(ao,a);const g=d*m-h*f;if(g<=0&&f-d>=0&&h-m>=0)return Jh.subVectors(s,r),a=(f-d)/(f-d+(h-m)),t.copy(r).addScaledVector(Jh,a);const p=1/(g+_+u);return o=_*p,a=u*p,t.copy(i).addScaledVector(oo,o).addScaledVector(ao,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},vc={h:0,s:0,l:0};function hd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class kt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Gt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Gt.workingColorSpace){if(e=rh(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=hd(o,s,e+1/3),this.g=hd(o,s,e),this.b=hd(o,s,e-1/3)}return Gt.colorSpaceToWorking(this,r),this}setStyle(e,t=pi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pi){const i=em[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}copyLinearToSRGB(e){return this.r=Mo(e.r),this.g=Mo(e.g),this.b=Mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Gt.workingToColorSpace(ti.copy(this),e),Math.round(Rt(ti.r*255,0,255))*65536+Math.round(Rt(ti.g*255,0,255))*256+Math.round(Rt(ti.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.workingToColorSpace(ti.copy(this),t);const i=ti.r,r=ti.g,s=ti.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=d<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Gt.workingColorSpace){return Gt.workingToColorSpace(ti.copy(this),t),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=pi){Gt.workingToColorSpace(ti.copy(this),e);const t=ti.r,i=ti.g,r=ti.b;return e!==pi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+t,Wr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wr),e.getHSL(vc);const i=ya(Wr.h,vc.h,t),r=ya(Wr.s,vc.s,t),s=ya(Wr.l,vc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ti=new kt;kt.NAMES=em;let g_=0;class Wo extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=So,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Kd,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==So&&(i.blending=this.blending),this.side!==Nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zd&&(i.blendSrc=this.blendSrc),this.blendDst!==Kd&&(i.blendDst=this.blendDst),this.blendEquation!==bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Co&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mn extends Wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const An=new S,xc=new Be;let __=0;class Fi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:__++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Oh,this.updateRanges=[],this.gpuType=Rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xc.fromBufferAttribute(this,t),xc.applyMatrix3(e),this.setXY(t,xc.x,xc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix3(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ui(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fo(t,this.array)),t}setX(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fo(t,this.array)),t}setY(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fo(t,this.array)),t}setW(e,t){return this.normalized&&(t=ui(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ui(t,this.array),i=ui(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ui(t,this.array),i=ui(i,this.array),r=ui(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ui(t,this.array),i=ui(i,this.array),r=ui(r,this.array),s=ui(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oh&&(e.usage=this.usage),e}}class tm extends Fi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class nm extends Fi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Dt extends Fi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let v_=0;const Wi=new $t,fd=new xn,co=new S,Di=new Vo,na=new Vo,Bn=new S;class Ft extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jp(e)?nm:tm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new wt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wi.makeRotationFromQuaternion(e),this.applyMatrix4(Wi),this}rotateX(e){return Wi.makeRotationX(e),this.applyMatrix4(Wi),this}rotateY(e){return Wi.makeRotationY(e),this.applyMatrix4(Wi),this}rotateZ(e){return Wi.makeRotationZ(e),this.applyMatrix4(Wi),this}translate(e,t,i){return Wi.makeTranslation(e,t,i),this.applyMatrix4(Wi),this}scale(e,t,i){return Wi.makeScale(e,t,i),this.applyMatrix4(Wi),this}lookAt(e){return fd.lookAt(e),fd.updateMatrix(),this.applyMatrix4(fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Di.setFromBufferAttribute(s),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,Di.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,Di.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(Di.min),this.boundingBox.expandByPoint(Di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(e){const i=this.boundingSphere.center;if(Di.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];na.setFromBufferAttribute(a),this.morphTargetsRelative?(Bn.addVectors(Di.min,na.min),Di.expandByPoint(Bn),Bn.addVectors(Di.max,na.max),Di.expandByPoint(Bn)):(Di.expandByPoint(na.min),Di.expandByPoint(na.max))}Di.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Bn.fromBufferAttribute(a,l),c&&(co.fromBufferAttribute(e,l),Bn.add(co)),r=Math.max(r,i.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new S,c[N]=new S;const l=new S,d=new S,f=new S,u=new Be,h=new Be,m=new Be,_=new S,g=new S;function p(N,b,M){l.fromBufferAttribute(i,N),d.fromBufferAttribute(i,b),f.fromBufferAttribute(i,M),u.fromBufferAttribute(s,N),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,M),d.sub(l),f.sub(l),h.sub(u),m.sub(u);const I=1/(h.x*m.y-m.x*h.y);isFinite(I)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(f,-h.y).multiplyScalar(I),g.copy(f).multiplyScalar(h.x).addScaledVector(d,-m.x).multiplyScalar(I),a[N].add(_),a[b].add(_),a[M].add(_),c[N].add(g),c[b].add(g),c[M].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,b=w.length;N<b;++N){const M=w[N],I=M.start,k=M.count;for(let O=I,G=I+k;O<G;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new S,v=new S,L=new S,D=new S;function R(N){L.fromBufferAttribute(r,N),D.copy(L);const b=a[N];y.copy(b),y.sub(L.multiplyScalar(L.dot(b))).normalize(),v.crossVectors(D,b);const I=v.dot(c[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,I)}for(let N=0,b=w.length;N<b;++N){const M=w[N],I=M.start,k=M.count;for(let O=I,G=I+k;O<G;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const r=new S,s=new S,o=new S,a=new S,c=new S,l=new S,d=new S,f=new S;if(e)for(let u=0,h=e.count;u<h;u+=3){const m=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),a.add(d),c.add(d),l.add(d),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,h=t.count;u<h;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bn.fromBufferAttribute(e,t),Bn.normalize(),e.setXYZ(t,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(a,c){const l=a.array,d=a.itemSize,f=a.normalized,u=new l.constructor(c.length*d);let h=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?h=c[_]*a.data.stride+a.offset:h=c[_]*d;for(let p=0;p<d;p++)u[m++]=l[h++]}return new Fi(u,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let d=0,f=l.length;d<f;d++){const u=l[d],h=e(u,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,u=l.length;f<u;f++){const h=l[f];d.push(h.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],f=s[l];for(let u=0,h=f.length;u<h;u++)d.push(f[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qh=new $t,fs=new ec,yc=new Go,ef=new S,Sc=new S,bc=new S,Mc=new S,pd=new S,wc=new S,tf=new S,Ec=new S;class we extends xn{constructor(e=new Ft,t=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){wc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=a[c],f=s[c];d!==0&&(pd.fromBufferAttribute(f,e),o?wc.addScaledVector(pd,d):wc.addScaledVector(pd.sub(t),d))}t.add(wc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(s),fs.copy(e.ray).recast(e.near),!(yc.containsPoint(fs.origin)===!1&&(fs.intersectSphere(yc,ef)===null||fs.origin.distanceToSquared(ef)>(e.far-e.near)**2))&&(Qh.copy(s).invert(),fs.copy(e.ray).applyMatrix4(Qh),!(i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],w=Math.max(g.start,h.start),y=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let v=w,L=y;v<L;v+=3){const D=a.getX(v),R=a.getX(v+1),N=a.getX(v+2);r=Tc(this,p,e,i,l,d,f,D,R,N),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let g=m,p=_;g<p;g+=3){const w=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);r=Tc(this,o,e,i,l,d,f,w,y,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],w=Math.max(g.start,h.start),y=Math.min(c.count,Math.min(g.start+g.count,h.start+h.count));for(let v=w,L=y;v<L;v+=3){const D=v,R=v+1,N=v+2;r=Tc(this,p,e,i,l,d,f,D,R,N),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let g=m,p=_;g<p;g+=3){const w=g,y=g+1,v=g+2;r=Tc(this,o,e,i,l,d,f,w,y,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function x_(n,e,t,i,r,s,o,a){let c;if(e.side===bi?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Nr,a),c===null)return null;Ec.copy(a),Ec.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ec);return l<t.near||l>t.far?null:{distance:l,point:Ec.clone(),object:n}}function Tc(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Sc),n.getVertexPosition(c,bc),n.getVertexPosition(l,Mc);const d=x_(n,e,t,i,Sc,bc,Mc,tf);if(d){const f=new S;rr.getBarycoord(tf,Sc,bc,Mc,f),r&&(d.uv=rr.getInterpolatedAttribute(r,a,c,l,f,new Be)),s&&(d.uv1=rr.getInterpolatedAttribute(s,a,c,l,f,new Be)),o&&(d.normal=rr.getInterpolatedAttribute(o,a,c,l,f,new S),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new S,materialIndex:0};rr.getNormal(Sc,bc,Mc,u.normal),d.face=u,d.barycoord=f}return d}class Cn extends Ft{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],d=[],f=[];let u=0,h=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(d,3)),this.setAttribute("uv",new Dt(f,2));function m(_,g,p,w,y,v,L,D,R,N,b){const M=v/R,I=L/N,k=v/2,O=L/2,G=D/2,$=R+1,j=N+1;let re=0,q=0;const ge=new S;for(let Te=0;Te<j;Te++){const ze=Te*I-O;for(let He=0;He<$;He++){const at=He*M-k;ge[_]=at*w,ge[g]=ze*y,ge[p]=G,l.push(ge.x,ge.y,ge.z),ge[_]=0,ge[g]=0,ge[p]=D>0?1:-1,d.push(ge.x,ge.y,ge.z),f.push(He/R),f.push(1-Te/N),re+=1}}for(let Te=0;Te<N;Te++)for(let ze=0;ze<R;ze++){const He=u+ze+$*Te,at=u+ze+$*(Te+1),yt=u+(ze+1)+$*(Te+1),te=u+(ze+1)+$*Te;c.push(He,at,te),c.push(at,yt,te),q+=6}a.addGroup(h,q,b),h+=q,u+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Io(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function hi(n){const e={};for(let t=0;t<n.length;t++){const i=Io(n[t]);for(const r in i)e[r]=i[r]}return e}function y_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function im(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Gt.workingColorSpace}const S_={clone:Io,merge:hi};var b_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends Wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b_,this.fragmentShader=M_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Io(e.uniforms),this.uniformsGroups=y_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class rm extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=vr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xr=new S,nf=new Be,rf=new Be;class Ii extends rm{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=La*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return La*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,nf,rf),t.subVectors(rf,nf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const lo=-90,uo=1;class w_ extends xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ii(lo,uo,e,t);r.layers=this.layers,this.add(r);const s=new Ii(lo,uo,e,t);s.layers=this.layers,this.add(s);const o=new Ii(lo,uo,e,t);o.layers=this.layers,this.add(o);const a=new Ii(lo,uo,e,t);a.layers=this.layers,this.add(a);const c=new Ii(lo,uo,e,t);c.layers=this.layers,this.add(c);const l=new Ii(lo,uo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===vr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(f,u,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class sm extends Mi{constructor(e=[],t=Po,i,r,s,o,a,c,l,d){super(e,t,i,r,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class E_ extends Fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new sm(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cn(5,5,5),s=new Ur({name:"CubemapFromEquirect",uniforms:Io(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bi,blending:Qr});s.uniforms.tEquirect.value=t;const o=new we(r,s),a=t.minFilter;return t.minFilter===As&&(t.minFilter=_r),new w_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class wn extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T_={type:"move"};class md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=d.position.distanceTo(f.position),h=.02,m=.005;l.inputState.pinching&&u>h+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=h-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(T_)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class A_ extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gd=new S,R_=new S,C_=new wt;class jr{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=gd.subVectors(i,t).cross(R_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(gd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||C_.getNormalMatrix(e),r=this.coplanarPoint(gd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Go,P_=new Be(.5,.5),Ac=new S;class ah{constructor(e=new jr,t=new jr,i=new jr,r=new jr,s=new jr,o=new jr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],d=s[4],f=s[5],u=s[6],h=s[7],m=s[8],_=s[9],g=s[10],p=s[11],w=s[12],y=s[13],v=s[14],L=s[15];if(r[0].setComponents(l-o,h-d,p-m,L-w).normalize(),r[1].setComponents(l+o,h+d,p+m,L+w).normalize(),r[2].setComponents(l+a,h+f,p+_,L+y).normalize(),r[3].setComponents(l-a,h-f,p-_,L-y).normalize(),i)r[4].setComponents(c,u,g,v).normalize(),r[5].setComponents(l-c,h-u,p-g,L-v).normalize();else if(r[4].setComponents(l-c,h-u,p-g,L-v).normalize(),t===vr)r[5].setComponents(l+c,h+u,p+g,L+v).normalize();else if(t===ul)r[5].setComponents(c,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const t=P_.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ac.x=r.normal.x>0?e.max.x:e.min.x,Ac.y=r.normal.y>0?e.max.y:e.min.y,Ac.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wi extends Wo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fl=new S,pl=new S,sf=new $t,ia=new ec,Rc=new Go,_d=new S,of=new S;class an extends xn{constructor(e=new Ft,t=new wi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)fl.fromBufferAttribute(t,r-1),pl.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=fl.distanceTo(pl);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rc.copy(i.boundingSphere),Rc.applyMatrix4(r),Rc.radius+=s,e.ray.intersectsSphere(Rc)===!1)return;sf.copy(r).invert(),ia.copy(e.ray).applyMatrix4(sf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=h,g=m-1;_<g;_+=l){const p=d.getX(_),w=d.getX(_+1),y=Cc(this,e,ia,c,p,w,_);y&&t.push(y)}if(this.isLineLoop){const _=d.getX(m-1),g=d.getX(h),p=Cc(this,e,ia,c,_,g,m-1);p&&t.push(p)}}else{const h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=h,g=m-1;_<g;_+=l){const p=Cc(this,e,ia,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Cc(this,e,ia,c,m-1,h,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Cc(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(fl.fromBufferAttribute(a,r),pl.fromBufferAttribute(a,s),t.distanceSqToSegment(fl,pl,_d,of)>i)return;_d.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(_d);if(!(l<e.near||l>e.far))return{distance:l,point:of.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const af=new S,cf=new S;class D_ extends an{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)af.fromBufferAttribute(t,r),cf.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+af.distanceTo(cf);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class L_ extends an{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class om extends Wo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lf=new $t,Uu=new ec,Pc=new Go,Dc=new S;class am extends xn{constructor(e=new Ft,t=new om){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pc.copy(i.boundingSphere),Pc.applyMatrix4(r),Pc.radius+=s,e.ray.intersectsSphere(Pc)===!1)return;lf.copy(r).invert(),Uu.copy(e.ray).applyMatrix4(lf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){const u=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let m=u,_=h;m<_;m++){const g=l.getX(m);Dc.fromBufferAttribute(f,g),df(Dc,g,c,r,e,t,this)}}else{const u=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let m=u,_=h;m<_;m++)Dc.fromBufferAttribute(f,m),df(Dc,m,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function df(n,e,t,i,r,s,o){const a=Uu.distanceSqToPoint(n);if(a<t){const c=new S;Uu.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class cm extends Mi{constructor(e,t,i=ks,r,s,o,a=ar,c=ar,l,d=Pa,f=1){if(d!==Pa&&d!==Da)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,s,o,a,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ia extends Ft{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new S,d=new Be;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const h=i+f/t*r;l.x=e*Math.cos(h),l.y=e*Math.sin(h),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,c.push(d.x,d.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(a,3)),this.setAttribute("uv",new Dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ii extends Ft{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],u=[],h=[];let m=0;const _=[],g=i/2;let p=0;w(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new Dt(f,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(h,2));function w(){const v=new S,L=new S;let D=0;const R=(t-e)/i;for(let N=0;N<=s;N++){const b=[],M=N/s,I=M*(t-e)+e;for(let k=0;k<=r;k++){const O=k/r,G=O*c+a,$=Math.sin(G),j=Math.cos(G);L.x=I*$,L.y=-M*i+g,L.z=I*j,f.push(L.x,L.y,L.z),v.set($,R,j).normalize(),u.push(v.x,v.y,v.z),h.push(O,1-M),b.push(m++)}_.push(b)}for(let N=0;N<r;N++)for(let b=0;b<s;b++){const M=_[b][N],I=_[b+1][N],k=_[b+1][N+1],O=_[b][N+1];(e>0||b!==0)&&(d.push(M,I,O),D+=3),(t>0||b!==s-1)&&(d.push(I,k,O),D+=3)}l.addGroup(p,D,0),p+=D}function y(v){const L=m,D=new Be,R=new S;let N=0;const b=v===!0?e:t,M=v===!0?1:-1;for(let k=1;k<=r;k++)f.push(0,g*M,0),u.push(0,M,0),h.push(.5,.5),m++;const I=m;for(let k=0;k<=r;k++){const G=k/r*c+a,$=Math.cos(G),j=Math.sin(G);R.x=b*j,R.y=g*M,R.z=b*$,f.push(R.x,R.y,R.z),u.push(0,M,0),D.x=$*.5+.5,D.y=j*.5*M+.5,h.push(D.x,D.y),m++}for(let k=0;k<r;k++){const O=L+k,G=I+k;v===!0?d.push(G,G+1,O):d.push(G+1,G,O),N+=3}l.addGroup(p,N,v===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ch extends Ft{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),d(),this.setAttribute("position",new Dt(s,3)),this.setAttribute("normal",new Dt(s.slice(),3)),this.setAttribute("uv",new Dt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const y=new S,v=new S,L=new S;for(let D=0;D<t.length;D+=3)h(t[D+0],y),h(t[D+1],v),h(t[D+2],L),c(y,v,L,w)}function c(w,y,v,L){const D=L+1,R=[];for(let N=0;N<=D;N++){R[N]=[];const b=w.clone().lerp(v,N/D),M=y.clone().lerp(v,N/D),I=D-N;for(let k=0;k<=I;k++)k===0&&N===D?R[N][k]=b:R[N][k]=b.clone().lerp(M,k/I)}for(let N=0;N<D;N++)for(let b=0;b<2*(D-N)-1;b++){const M=Math.floor(b/2);b%2===0?(u(R[N][M+1]),u(R[N+1][M]),u(R[N][M])):(u(R[N][M+1]),u(R[N+1][M+1]),u(R[N+1][M]))}}function l(w){const y=new S;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(w),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function d(){const w=new S;for(let y=0;y<s.length;y+=3){w.x=s[y+0],w.y=s[y+1],w.z=s[y+2];const v=g(w)/2/Math.PI+.5,L=p(w)/Math.PI+.5;o.push(v,1-L)}m(),f()}function f(){for(let w=0;w<o.length;w+=6){const y=o[w+0],v=o[w+2],L=o[w+4],D=Math.max(y,v,L),R=Math.min(y,v,L);D>.9&&R<.1&&(y<.2&&(o[w+0]+=1),v<.2&&(o[w+2]+=1),L<.2&&(o[w+4]+=1))}}function u(w){s.push(w.x,w.y,w.z)}function h(w,y){const v=w*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function m(){const w=new S,y=new S,v=new S,L=new S,D=new Be,R=new Be,N=new Be;for(let b=0,M=0;b<s.length;b+=9,M+=6){w.set(s[b+0],s[b+1],s[b+2]),y.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),D.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),N.set(o[M+4],o[M+5]),L.copy(w).add(y).add(v).divideScalar(3);const I=g(L);_(D,M+0,w,I),_(R,M+2,y,I),_(N,M+4,v,I)}}function _(w,y,v,L){L<0&&w.x===1&&(o[y]=w.x-1),v.x===0&&v.z===0&&(o[y]=L/2/Math.PI+.5)}function g(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ch(e.vertices,e.indices,e.radius,e.details)}}class yr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const d=i[r],u=i[r+1]-d,h=(o-d)/u;return(r+h)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new Be:new S);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new S,r=[],s=[],o=[],a=new S,c=new $t;for(let h=0;h<=e;h++){const m=h/e;r[h]=this.getTangentAt(m,new S)}s[0]=new S,o[0]=new S;let l=Number.MAX_VALUE;const d=Math.abs(r[0].x),f=Math.abs(r[0].y),u=Math.abs(r[0].z);d<=l&&(l=d,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Rt(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(c.makeRotationAxis(a,m))}o[h].crossVectors(r[h],s[h])}if(t===!0){let h=Math.acos(Rt(s[0].dot(s[e]),-1,1));h/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(h=-h);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(r[m],h*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class lh extends yr{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Be){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,h=l-this.aY;c=u*d-h*f+this.aX,l=u*f+h*d+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class I_ extends lh{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function dh(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,d,f){let u=(o-s)/l-(a-s)/(l+d)+(a-o)/d,h=(a-o)/d-(c-o)/(d+f)+(c-a)/f;u*=d,h*=d,r(o,a,u,h)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Lc=new S,vd=new dh,xd=new dh,yd=new dh;class uh extends yr{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new S){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,d;this.closed||a>0?l=r[(a-1)%s]:(Lc.subVectors(r[0],r[1]).add(r[0]),l=Lc);const f=r[a%s],u=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(Lc.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Lc),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(f),h),_=Math.pow(f.distanceToSquared(u),h),g=Math.pow(u.distanceToSquared(d),h);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),vd.initNonuniformCatmullRom(l.x,f.x,u.x,d.x,m,_,g),xd.initNonuniformCatmullRom(l.y,f.y,u.y,d.y,m,_,g),yd.initNonuniformCatmullRom(l.z,f.z,u.z,d.z,m,_,g)}else this.curveType==="catmullrom"&&(vd.initCatmullRom(l.x,f.x,u.x,d.x,this.tension),xd.initCatmullRom(l.y,f.y,u.y,d.y,this.tension),yd.initCatmullRom(l.z,f.z,u.z,d.z,this.tension));return i.set(vd.calc(c),xd.calc(c),yd.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new S().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function uf(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function N_(n,e){const t=1-n;return t*t*e}function U_(n,e){return 2*(1-n)*n*e}function k_(n,e){return n*n*e}function Sa(n,e,t,i){return N_(n,e)+U_(n,t)+k_(n,i)}function F_(n,e){const t=1-n;return t*t*t*e}function O_(n,e){const t=1-n;return 3*t*t*n*e}function z_(n,e){return 3*(1-n)*n*n*e}function B_(n,e){return n*n*n*e}function ba(n,e,t,i,r){return F_(n,e)+O_(n,t)+z_(n,i)+B_(n,r)}class lm extends yr{constructor(e=new Be,t=new Be,i=new Be,r=new Be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Be){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ba(e,r.x,s.x,o.x,a.x),ba(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class H_ extends yr{constructor(e=new S,t=new S,i=new S,r=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new S){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ba(e,r.x,s.x,o.x,a.x),ba(e,r.y,s.y,o.y,a.y),ba(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dm extends yr{constructor(e=new Be,t=new Be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Be){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V_ extends yr{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class um extends yr{constructor(e=new Be,t=new Be,i=new Be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Be){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Sa(e,r.x,s.x,o.x),Sa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class G_ extends yr{constructor(e=new S,t=new S,i=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new S){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Sa(e,r.x,s.x,o.x),Sa(e,r.y,s.y,o.y),Sa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hm extends yr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Be){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],d=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(uf(a,c.x,l.x,d.x,f.x),uf(a,c.y,l.y,d.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Be().fromArray(r))}return this}}var hf=Object.freeze({__proto__:null,ArcCurve:I_,CatmullRomCurve3:uh,CubicBezierCurve:lm,CubicBezierCurve3:H_,EllipseCurve:lh,LineCurve:dm,LineCurve3:V_,QuadraticBezierCurve:um,QuadraticBezierCurve3:G_,SplineCurve:hm});class W_ extends yr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hf[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const d=c[l];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new hf[r.type]().fromJSON(r))}return this}}class ff extends W_{constructor(e){super(),this.type="Path",this.currentPoint=new Be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new dm(this.currentPoint.clone(),new Be(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new um(this.currentPoint.clone(),new Be(e,t),new Be(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new lm(this.currentPoint.clone(),new Be(e,t),new Be(i,r),new Be(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new hm(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+l,t+d,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new lh(e,t,i,r,s,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const d=l.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fm extends ff{constructor(e){super(e),this.uuid=Gs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new ff().fromJSON(r))}return this}}function X_(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=pm(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=Z_(n,e,s,t)),n.length>80*t){a=1/0,c=1/0;let d=-1/0,f=-1/0;for(let u=t;u<r;u+=t){const h=n[u],m=n[u+1];h<a&&(a=h),m<c&&(c=m),h>d&&(d=h),m>f&&(f=m)}l=Math.max(d-a,f-c),l=l!==0?32767/l:0}return Na(s,o,t,a,c,l,0),o}function pm(n,e,t,i,r){let s;if(r===av(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=pf(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=pf(o/i|0,n[o],n[o+1],s);return s&&No(s,s.next)&&(ka(s),s=s.next),s}function Os(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(No(t,t.next)||_n(t.prev,t,t.next)===0)){if(ka(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Na(n,e,t,i,r,s,o){if(!n)return;!o&&s&&tv(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?$_(n,i,r,s):q_(n)){e.push(c.i,n.i,l.i),ka(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Y_(Os(n),e),Na(n,e,t,i,r,s,2)):o===2&&j_(n,e,t,i,r,s):Na(Os(n),e,t,i,r,s,1);break}}}function q_(n){const e=n.prev,t=n,i=n.next;if(_n(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,d=Math.min(r,s,o),f=Math.min(a,c,l),u=Math.max(r,s,o),h=Math.max(a,c,l);let m=i.next;for(;m!==e;){if(m.x>=d&&m.x<=u&&m.y>=f&&m.y<=h&&pa(r,a,s,c,o,l,m.x,m.y)&&_n(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $_(n,e,t,i){const r=n.prev,s=n,o=n.next;if(_n(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,d=r.y,f=s.y,u=o.y,h=Math.min(a,c,l),m=Math.min(d,f,u),_=Math.max(a,c,l),g=Math.max(d,f,u),p=ku(h,m,e,t,i),w=ku(_,g,e,t,i);let y=n.prevZ,v=n.nextZ;for(;y&&y.z>=p&&v&&v.z<=w;){if(y.x>=h&&y.x<=_&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&pa(a,d,c,f,l,u,y.x,y.y)&&_n(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=h&&v.x<=_&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&pa(a,d,c,f,l,u,v.x,v.y)&&_n(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=h&&y.x<=_&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&pa(a,d,c,f,l,u,y.x,y.y)&&_n(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=w;){if(v.x>=h&&v.x<=_&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&pa(a,d,c,f,l,u,v.x,v.y)&&_n(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Y_(n,e){let t=n;do{const i=t.prev,r=t.next.next;!No(i,r)&&gm(i,t,t.next,r)&&Ua(i,r)&&Ua(r,i)&&(e.push(i.i,t.i,r.i),ka(t),ka(t.next),t=n=r),t=t.next}while(t!==n);return Os(t)}function j_(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rv(o,a)){let c=_m(o,a);o=Os(o,o.next),c=Os(c,c.next),Na(o,e,t,i,r,s,0),Na(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Z_(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=pm(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(iv(l))}r.sort(K_);for(let s=0;s<r.length;s++)t=J_(r[s],t);return t}function K_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function J_(n,e){const t=Q_(n,e);if(!t)return e;const i=_m(t,n);return Os(i,i.next),Os(t,t.next)}function Q_(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(No(n,t))return t;do{if(No(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let d=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&mm(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);Ua(t,n)&&(f<d||f===d&&(t.x>o.x||t.x===o.x&&ev(o,t)))&&(o=t,d=f)}t=t.next}while(t!==a);return o}function ev(n,e){return _n(n.prev,n,e.prev)<0&&_n(e.next,n,n.next)<0}function tv(n,e,t,i){let r=n;do r.z===0&&(r.z=ku(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,nv(r)}function nv(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function ku(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function iv(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function mm(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function pa(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&mm(n,e,t,i,r,s,o,a)}function rv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!sv(n,e)&&(Ua(n,e)&&Ua(e,n)&&ov(n,e)&&(_n(n.prev,n,e.prev)||_n(n,e.prev,e))||No(n,e)&&_n(n.prev,n,n.next)>0&&_n(e.prev,e,e.next)>0)}function _n(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function No(n,e){return n.x===e.x&&n.y===e.y}function gm(n,e,t,i){const r=Nc(_n(n,e,t)),s=Nc(_n(n,e,i)),o=Nc(_n(t,i,n)),a=Nc(_n(t,i,e));return!!(r!==s&&o!==a||r===0&&Ic(n,t,e)||s===0&&Ic(n,i,e)||o===0&&Ic(t,n,i)||a===0&&Ic(t,e,i))}function Ic(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Nc(n){return n>0?1:n<0?-1:0}function sv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&gm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ua(n,e){return _n(n.prev,n,n.next)<0?_n(n,e,n.next)>=0&&_n(n,n.prev,e)>=0:_n(n,e,n.prev)<0||_n(n,n.next,e)<0}function ov(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function _m(n,e){const t=Fu(n.i,n.x,n.y),i=Fu(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function pf(n,e,t,i){const r=Fu(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ka(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Fu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function av(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class cv{static triangulate(e,t,i=2){return X_(e,t,i)}}class Ma{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ma.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];mf(e),gf(i,e);let o=e.length;t.forEach(mf);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,gf(i,t[c]);const a=cv.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function mf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function gf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Rs extends ch{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Rs(e.radius,e.detail)}}class is extends Ft{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,d=c+1,f=e/a,u=t/c,h=[],m=[],_=[],g=[];for(let p=0;p<d;p++){const w=p*u-o;for(let y=0;y<l;y++){const v=y*f-s;m.push(v,-w,0),_.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const y=w+l*p,v=w+l*(p+1),L=w+1+l*(p+1),D=w+1+l*p;h.push(y,v,D),h.push(v,L,D)}this.setIndex(h),this.setAttribute("position",new Dt(m,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.widthSegments,e.heightSegments)}}class Il extends Ft{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],d=[];let f=e;const u=(t-e)/r,h=new S,m=new Be;for(let _=0;_<=r;_++){for(let g=0;g<=i;g++){const p=s+g/i*o;h.x=f*Math.cos(p),h.y=f*Math.sin(p),c.push(h.x,h.y,h.z),l.push(0,0,1),m.x=(h.x/t+1)/2,m.y=(h.y/t+1)/2,d.push(m.x,m.y)}f+=u}for(let _=0;_<r;_++){const g=_*(i+1);for(let p=0;p<i;p++){const w=p+g,y=w,v=w+i+1,L=w+i+2,D=w+1;a.push(y,v,D),a.push(v,L,D)}}this.setIndex(a),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class hh extends Ft{constructor(e=new fm([new Be(0,.5),new Be(-.5,-.5),new Be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let d=0;d<e.length;d++)l(e[d]),this.addGroup(a,c,d),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Dt(r,3)),this.setAttribute("normal",new Dt(s,3)),this.setAttribute("uv",new Dt(o,2));function l(d){const f=r.length/3,u=d.extractPoints(t);let h=u.shape;const m=u.holes;Ma.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,p=m.length;g<p;g++){const w=m[g];Ma.isClockWise(w)===!0&&(m[g]=w.reverse())}const _=Ma.triangulateShape(h,m);for(let g=0,p=m.length;g<p;g++){const w=m[g];h=h.concat(w)}for(let g=0,p=h.length;g<p;g++){const w=h[g];r.push(w.x,w.y,0),s.push(0,0,1),o.push(w.x,w.y)}for(let g=0,p=_.length;g<p;g++){const w=_[g],y=w[0]+f,v=w[1]+f,L=w[2]+f;i.push(y,v,L),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return lv(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new hh(i,e.curveSegments)}}function lv(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class ts extends Ft{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const d=[],f=new S,u=new S,h=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const w=[],y=p/i;let v=0;p===0&&o===0?v=.5/t:p===i&&c===Math.PI&&(v=-.5/t);for(let L=0;L<=t;L++){const D=L/t;f.x=-e*Math.cos(r+D*s)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(r+D*s)*Math.sin(o+y*a),m.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),g.push(D+v,1-y),w.push(l++)}d.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const y=d[p][w+1],v=d[p][w],L=d[p+1][w],D=d[p+1][w+1];(p!==0||o>0)&&h.push(y,v,D),(p!==i-1||c<Math.PI)&&h.push(v,L,D)}this.setIndex(h),this.setAttribute("position",new Dt(m,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ms extends Ft{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],d=new S,f=new S,u=new S;for(let h=0;h<=i;h++)for(let m=0;m<=r;m++){const _=m/r*s,g=h/i*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(_),f.y=(e+t*Math.cos(g))*Math.sin(_),f.z=t*Math.sin(g),a.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),u.subVectors(f,d).normalize(),c.push(u.x,u.y,u.z),l.push(m/r),l.push(h/i)}for(let h=1;h<=i;h++)for(let m=1;m<=r;m++){const _=(r+1)*h+m-1,g=(r+1)*(h-1)+m-1,p=(r+1)*(h-1)+m,w=(r+1)*h+m;o.push(_,g,w),o.push(g,p,w)}this.setIndex(o),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class dv extends Wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=R0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uv extends Wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _f extends wi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class hv extends xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Sd=new $t,vf=new S,xf=new S;class fv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=xr,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ah,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;vf.setFromMatrixPosition(e.matrixWorld),t.position.copy(vf),xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xf),t.updateMatrixWorld(),Sd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yf=new $t,ra=new S,bd=new S;class pv extends fv{constructor(){super(new Ii(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ra.setFromMatrixPosition(e.matrixWorld),i.position.copy(ra),bd.copy(i.position),bd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(bd),i.updateMatrixWorld(),r.makeTranslation(-ra.x,-ra.y,-ra.z),yf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yf,i.coordinateSystem,i.reversedDepth)}}class mv extends hv{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new pv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gv extends rm{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _v extends Ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Sf=new $t;class vm{constructor(e,t,i=0,r=1/0){this.ray=new ec(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new oh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sf),this}intersectObject(e,t=!0,i=[]){return Ou(e,this,i,t),i.sort(bf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ou(e[r],this,i,t);return i.sort(bf),i}}function bf(n,e){return n.distance-e.distance}function Ou(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Ou(s[o],e,t,!0)}}class Mf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xm extends Vs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function wf(n,e,t,i){const r=vv(i);switch(t){case qp:return n*e;case Yp:return n*e/r.components*r.byteLength;case th:return n*e/r.components*r.byteLength;case jp:return n*e*2/r.components*r.byteLength;case nh:return n*e*2/r.components*r.byteLength;case $p:return n*e*3/r.components*r.byteLength;case sr:return n*e*4/r.components*r.byteLength;case ih:return n*e*4/r.components*r.byteLength;case Zc:case Kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jc:case Qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case du:case hu:return Math.max(n,16)*Math.max(e,8)/4;case lu:case uu:return Math.max(n,8)*Math.max(e,8)/2;case fu:case pu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _u:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case vu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case yu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Su:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case bu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case wu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Au:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ru:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case el:case Pu:case Du:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zp:case Lu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Iu:case Nu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vv(n){switch(n){case xr:case Gp:return{byteLength:1,components:1};case Ra:case Wp:case Qa:return{byteLength:2,components:1};case Qu:case eh:return{byteLength:2,components:4};case ks:case Ju:case Rr:return{byteLength:4,components:1};case Xp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ku}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ku);function ym(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function xv(n){const e=new WeakMap;function t(a,c){const l=a.array,d=a.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,d),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const d=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,d);else{f.sort((h,m)=>h.start-m.start);let u=0;for(let h=1;h<f.length;h++){const m=f[u],_=f[h];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,f[u]=_)}f.length=u+1;for(let h=0,m=f.length;h<m;h++){const _=f[h];n.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var yv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sv=`#ifdef USE_ALPHAHASH
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
#endif`,bv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tv=`#ifdef USE_AOMAP
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
#endif`,Av=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rv=`#ifdef USE_BATCHING
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
#endif`,Cv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Iv=`#ifdef USE_IRIDESCENCE
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
#endif`,Nv=`#ifdef USE_BUMPMAP
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
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gv=`#define PI 3.141592653589793
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
} // validated`,Wv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xv=`vec3 transformedNormal = objectNormal;
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
#endif`,qv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jv=`#ifdef USE_ENVMAP
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
#endif`,Qv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ox=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ax=`#ifdef USE_GRADIENTMAP
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
}`,cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ux=`uniform bool receiveShadow;
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
#endif`,hx=`#ifdef USE_ENVMAP
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
#endif`,fx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_x=`PhysicalMaterial material;
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
#endif`,vx=`struct PhysicalMaterial {
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
}`,xx=`
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
#endif`,yx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cx=`#if defined( USE_POINTS_UV )
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
#endif`,Px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ix=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`#ifdef USE_MORPHTARGETS
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
#endif`,kx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vx=`#ifdef USE_NORMALMAP
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
#endif`,Gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ry=`float getShadowMask() {
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
}`,sy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oy=`#ifdef USE_SKINNING
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
#endif`,ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cy=`#ifdef USE_SKINNING
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
#endif`,ly=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fy=`#ifdef USE_TRANSMISSION
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
#endif`,py=`#ifdef USE_TRANSMISSION
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
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yy=`uniform sampler2D t2D;
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`#ifdef ENVMAP_TYPE_CUBE
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
}`,My=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`#include <common>
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
}`,Ty=`#if DEPTH_PACKING == 3200
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
}`,Ay=`#define DISTANCE
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
}`,Ry=`#define DISTANCE
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
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Py=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`uniform float scale;
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Iy=`#include <common>
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Uy=`#define LAMBERT
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
}`,ky=`#define LAMBERT
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
}`,Fy=`#define MATCAP
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
}`,Oy=`#define MATCAP
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
}`,zy=`#define NORMAL
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
}`,By=`#define NORMAL
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
}`,Hy=`#define PHONG
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
}`,Vy=`#define PHONG
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
}`,Gy=`#define STANDARD
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
}`,Wy=`#define STANDARD
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
}`,Xy=`#define TOON
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
}`,qy=`#define TOON
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
}`,$y=`uniform float size;
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
}`,Yy=`uniform vec3 diffuse;
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
}`,jy=`#include <common>
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
}`,Zy=`uniform vec3 color;
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
}`,Ky=`uniform float rotation;
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
}`,Jy=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:yv,alphahash_pars_fragment:Sv,alphamap_fragment:bv,alphamap_pars_fragment:Mv,alphatest_fragment:wv,alphatest_pars_fragment:Ev,aomap_fragment:Tv,aomap_pars_fragment:Av,batching_pars_vertex:Rv,batching_vertex:Cv,begin_vertex:Pv,beginnormal_vertex:Dv,bsdfs:Lv,iridescence_fragment:Iv,bumpmap_pars_fragment:Nv,clipping_planes_fragment:Uv,clipping_planes_pars_fragment:kv,clipping_planes_pars_vertex:Fv,clipping_planes_vertex:Ov,color_fragment:zv,color_pars_fragment:Bv,color_pars_vertex:Hv,color_vertex:Vv,common:Gv,cube_uv_reflection_fragment:Wv,defaultnormal_vertex:Xv,displacementmap_pars_vertex:qv,displacementmap_vertex:$v,emissivemap_fragment:Yv,emissivemap_pars_fragment:jv,colorspace_fragment:Zv,colorspace_pars_fragment:Kv,envmap_fragment:Jv,envmap_common_pars_fragment:Qv,envmap_pars_fragment:ex,envmap_pars_vertex:tx,envmap_physical_pars_fragment:hx,envmap_vertex:nx,fog_vertex:ix,fog_pars_vertex:rx,fog_fragment:sx,fog_pars_fragment:ox,gradientmap_pars_fragment:ax,lightmap_pars_fragment:cx,lights_lambert_fragment:lx,lights_lambert_pars_fragment:dx,lights_pars_begin:ux,lights_toon_fragment:fx,lights_toon_pars_fragment:px,lights_phong_fragment:mx,lights_phong_pars_fragment:gx,lights_physical_fragment:_x,lights_physical_pars_fragment:vx,lights_fragment_begin:xx,lights_fragment_maps:yx,lights_fragment_end:Sx,logdepthbuf_fragment:bx,logdepthbuf_pars_fragment:Mx,logdepthbuf_pars_vertex:wx,logdepthbuf_vertex:Ex,map_fragment:Tx,map_pars_fragment:Ax,map_particle_fragment:Rx,map_particle_pars_fragment:Cx,metalnessmap_fragment:Px,metalnessmap_pars_fragment:Dx,morphinstance_vertex:Lx,morphcolor_vertex:Ix,morphnormal_vertex:Nx,morphtarget_pars_vertex:Ux,morphtarget_vertex:kx,normal_fragment_begin:Fx,normal_fragment_maps:Ox,normal_pars_fragment:zx,normal_pars_vertex:Bx,normal_vertex:Hx,normalmap_pars_fragment:Vx,clearcoat_normal_fragment_begin:Gx,clearcoat_normal_fragment_maps:Wx,clearcoat_pars_fragment:Xx,iridescence_pars_fragment:qx,opaque_fragment:$x,packing:Yx,premultiplied_alpha_fragment:jx,project_vertex:Zx,dithering_fragment:Kx,dithering_pars_fragment:Jx,roughnessmap_fragment:Qx,roughnessmap_pars_fragment:ey,shadowmap_pars_fragment:ty,shadowmap_pars_vertex:ny,shadowmap_vertex:iy,shadowmask_pars_fragment:ry,skinbase_vertex:sy,skinning_pars_vertex:oy,skinning_vertex:ay,skinnormal_vertex:cy,specularmap_fragment:ly,specularmap_pars_fragment:dy,tonemapping_fragment:uy,tonemapping_pars_fragment:hy,transmission_fragment:fy,transmission_pars_fragment:py,uv_pars_fragment:my,uv_pars_vertex:gy,uv_vertex:_y,worldpos_vertex:vy,background_vert:xy,background_frag:yy,backgroundCube_vert:Sy,backgroundCube_frag:by,cube_vert:My,cube_frag:wy,depth_vert:Ey,depth_frag:Ty,distanceRGBA_vert:Ay,distanceRGBA_frag:Ry,equirect_vert:Cy,equirect_frag:Py,linedashed_vert:Dy,linedashed_frag:Ly,meshbasic_vert:Iy,meshbasic_frag:Ny,meshlambert_vert:Uy,meshlambert_frag:ky,meshmatcap_vert:Fy,meshmatcap_frag:Oy,meshnormal_vert:zy,meshnormal_frag:By,meshphong_vert:Hy,meshphong_frag:Vy,meshphysical_vert:Gy,meshphysical_frag:Wy,meshtoon_vert:Xy,meshtoon_frag:qy,points_vert:$y,points_frag:Yy,shadow_vert:jy,shadow_frag:Zy,sprite_vert:Ky,sprite_frag:Jy},We={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},gr={basic:{uniforms:hi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:hi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new kt(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:hi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:hi([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:hi([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new kt(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:hi([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:hi([We.points,We.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:hi([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:hi([We.common,We.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:hi([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:hi([We.sprite,We.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:hi([We.common,We.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:hi([We.lights,We.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};gr.physical={uniforms:hi([gr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const Uc={r:0,b:0,g:0},ms=new In,Qy=new $t;function eS(n,e,t,i,r,s,o){const a=new kt(0);let c=s===!0?0:1,l,d,f=null,u=0,h=null;function m(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const L=m(y);L===null?p(a,c):L&&L.isColor&&(p(L,1),v=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(y,v){const L=m(v);L&&(L.isCubeTexture||L.mapping===Ll)?(d===void 0&&(d=new we(new Cn(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:Io(gr.backgroundCube.uniforms),vertexShader:gr.backgroundCube.vertexShader,fragmentShader:gr.backgroundCube.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),ms.copy(v.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),d.material.uniforms.envMap.value=L,d.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(ms)),d.material.toneMapped=Gt.getTransfer(L.colorSpace)!==Kt,(f!==L||u!==L.version||h!==n.toneMapping)&&(d.material.needsUpdate=!0,f=L,u=L.version,h=n.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new we(new is(2,2),new Ur({name:"BackgroundMaterial",uniforms:Io(gr.background.uniforms),vertexShader:gr.background.vertexShader,fragmentShader:gr.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Gt.getTransfer(L.colorSpace)!==Kt,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||u!==L.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,f=L,u=L.version,h=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(Uc,im(n)),i.buffers.color.setClear(Uc.r,Uc.g,Uc.b,v,o)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:g,dispose:w}}function tS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(M,I,k,O,G){let $=!1;const j=f(O,k,I);s!==j&&(s=j,l(s.object)),$=h(M,O,k,G),$&&m(M,O,k,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,v(M,I,k,O),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function d(M){return n.deleteVertexArray(M)}function f(M,I,k){const O=k.wireframe===!0;let G=i[M.id];G===void 0&&(G={},i[M.id]=G);let $=G[I.id];$===void 0&&($={},G[I.id]=$);let j=$[O];return j===void 0&&(j=u(c()),$[O]=j),j}function u(M){const I=[],k=[],O=[];for(let G=0;G<t;G++)I[G]=0,k[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:O,object:M,attributes:{},index:null}}function h(M,I,k,O){const G=s.attributes,$=I.attributes;let j=0;const re=k.getAttributes();for(const q in re)if(re[q].location>=0){const Te=G[q];let ze=$[q];if(ze===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ze=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ze=M.instanceColor)),Te===void 0||Te.attribute!==ze||ze&&Te.data!==ze.data)return!0;j++}return s.attributesNum!==j||s.index!==O}function m(M,I,k,O){const G={},$=I.attributes;let j=0;const re=k.getAttributes();for(const q in re)if(re[q].location>=0){let Te=$[q];Te===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor));const ze={};ze.attribute=Te,Te&&Te.data&&(ze.data=Te.data),G[q]=ze,j++}s.attributes=G,s.attributesNum=j,s.index=O}function _(){const M=s.newAttributes;for(let I=0,k=M.length;I<k;I++)M[I]=0}function g(M){p(M,0)}function p(M,I){const k=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;k[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),G[M]!==I&&(n.vertexAttribDivisor(M,I),G[M]=I)}function w(){const M=s.newAttributes,I=s.enabledAttributes;for(let k=0,O=I.length;k<O;k++)I[k]!==M[k]&&(n.disableVertexAttribArray(k),I[k]=0)}function y(M,I,k,O,G,$,j){j===!0?n.vertexAttribIPointer(M,I,k,G,$):n.vertexAttribPointer(M,I,k,O,G,$)}function v(M,I,k,O){_();const G=O.attributes,$=k.getAttributes(),j=I.defaultAttributeValues;for(const re in $){const q=$[re];if(q.location>=0){let ge=G[re];if(ge===void 0&&(re==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),re==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ge!==void 0){const Te=ge.normalized,ze=ge.itemSize,He=e.get(ge);if(He===void 0)continue;const at=He.buffer,yt=He.type,te=He.bytesPerElement,Ae=yt===n.INT||yt===n.UNSIGNED_INT||ge.gpuType===Ju;if(ge.isInterleavedBufferAttribute){const oe=ge.data,Ke=oe.stride,ne=ge.offset;if(oe.isInstancedInterleavedBuffer){for(let de=0;de<q.locationSize;de++)p(q.location+de,oe.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<q.locationSize;de++)g(q.location+de);n.bindBuffer(n.ARRAY_BUFFER,at);for(let de=0;de<q.locationSize;de++)y(q.location+de,ze/q.locationSize,yt,Te,Ke*te,(ne+ze/q.locationSize*de)*te,Ae)}else{if(ge.isInstancedBufferAttribute){for(let oe=0;oe<q.locationSize;oe++)p(q.location+oe,ge.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let oe=0;oe<q.locationSize;oe++)g(q.location+oe);n.bindBuffer(n.ARRAY_BUFFER,at);for(let oe=0;oe<q.locationSize;oe++)y(q.location+oe,ze/q.locationSize,yt,Te,ze*te,ze/q.locationSize*oe*te,Ae)}}else if(j!==void 0){const Te=j[re];if(Te!==void 0)switch(Te.length){case 2:n.vertexAttrib2fv(q.location,Te);break;case 3:n.vertexAttrib3fv(q.location,Te);break;case 4:n.vertexAttrib4fv(q.location,Te);break;default:n.vertexAttrib1fv(q.location,Te)}}}}w()}function L(){N();for(const M in i){const I=i[M];for(const k in I){const O=I[k];for(const G in O)d(O[G].object),delete O[G];delete I[k]}delete i[M]}}function D(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const k in I){const O=I[k];for(const G in O)d(O[G].object),delete O[G];delete I[k]}delete i[M.id]}function R(M){for(const I in i){const k=i[I];if(k[M.id]===void 0)continue;const O=k[M.id];for(const G in O)d(O[G].object),delete O[G];delete k[M.id]}}function N(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:w}}function nS(n,e,t){let i;function r(l){i=l}function s(l,d){n.drawArrays(i,l,d),t.update(d,i,1)}function o(l,d,f){f!==0&&(n.drawArraysInstanced(i,l,d,f),t.update(d,i,f))}function a(l,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,f);let h=0;for(let m=0;m<f;m++)h+=d[m];t.update(h,i,1)}function c(l,d,f,u){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<l.length;m++)o(l[m],d[m],u[m]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,d,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=d[_]*u[_];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function iS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==sr&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const N=R===Qa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==xr&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Rr&&!N)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:L,maxSamples:D}}function rS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new jr,a=new wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const h=f.length!==0||u||i!==0||r;return r=u,i=f.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,h){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!r||m===null||m.length===0||s&&!g)s?d(null):l();else{const w=s?0:i,y=w*4;let v=p.clippingState||null;c.value=v,v=d(m,u,y,h);for(let L=0;L!==y;++L)v[L]=t[L];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,h,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=h+_*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=h;y!==_;++y,v+=4)o.copy(f[y]).applyMatrix4(w,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function sS(n){let e=new WeakMap;function t(o,a){return a===su?o.mapping=Po:a===ou&&(o.mapping=Do),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===su||a===ou)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new E_(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const _o=4,Ef=[.125,.215,.35,.446,.526,.582],ws=20,Md=new gv,Tf=new kt;let wd=null,Ed=0,Td=0,Ad=!1;const xs=(1+Math.sqrt(5))/2,ho=1/xs,Af=[new S(-xs,ho,0),new S(xs,ho,0),new S(-ho,0,xs),new S(ho,0,xs),new S(0,xs,-ho),new S(0,xs,ho),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],oS=new S;class Rf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=oS}=s;wd=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wd,Ed,Td),this._renderer.xr.enabled=Ad,e.scissorTest=!1,kc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Po||e.mapping===Do?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wd=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_r,minFilter:_r,generateMipmaps:!1,type:Qa,format:sr,colorSpace:Lo,depthBuffer:!1},r=Cf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aS(s)),this._blurMaterial=cS(s,e,t)}return r}_compileMaterial(e){const t=new we(this._lodPlanes[0],e);this._renderer.compile(t,Md)}_sceneToCubeUV(e,t,i,r,s){const c=new Ii(90,1,t,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(Tf),f.toneMapping=es,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const _=new Mn({name:"PMREM.Background",side:bi,depthWrite:!1,depthTest:!1}),g=new we(new Cn,_);let p=!1;const w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,p=!0):(_.color.copy(Tf),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[y],s.y,s.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[y]));const L=this._cubeSize;kc(r,v*L,y>2?L:0,L,L),f.setRenderTarget(r),p&&f.render(g,c),f.render(e,c)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=u,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Po||e.mapping===Do;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Df()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new we(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;kc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Md)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Af[(r-s-1)%Af.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new we(this._lodPlanes[r],l),u=l.uniforms,h=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*ws-1),_=s/m,g=isFinite(s)?1+Math.floor(d*_):ws;g>ws&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ws}`);const p=[];let w=0;for(let R=0;R<ws;++R){const N=R/_,b=Math.exp(-N*N/2);p.push(b),R===0?w+=b:R<g&&(w+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/w;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-i;const v=this._sizeLods[r],L=3*v*(r>y-_o?r-y+_o:0),D=4*(this._cubeSize-v);kc(t,L,D,3*v,2*v),c.setRenderTarget(t),c.render(f,Md)}}function aS(n){const e=[],t=[],i=[];let r=n;const s=n-_o+1+Ef.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-_o?c=Ef[o-n+_o-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),d=-l,f=1+l,u=[d,d,f,d,f,f,d,d,f,f,d,f],h=6,m=6,_=3,g=2,p=1,w=new Float32Array(_*m*h),y=new Float32Array(g*m*h),v=new Float32Array(p*m*h);for(let D=0;D<h;D++){const R=D%3*2/3-1,N=D>2?0:-1,b=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];w.set(b,_*m*D),y.set(u,g*m*D);const M=[D,D,D,D,D,D];v.set(M,p*m*D)}const L=new Ft;L.setAttribute("position",new Fi(w,_)),L.setAttribute("uv",new Fi(y,g)),L.setAttribute("faceIndex",new Fi(v,p)),e.push(L),r>_o&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Cf(n,e,t){const i=new Fs(n,e,t);return i.texture.mapping=Ll,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function cS(n,e,t){const i=new Float32Array(ws),r=new S(0,1,0);return new Ur({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function Pf(){return new Ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function Df(){return new Ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function fh(){return`

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
	`}function lS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===su||c===ou,d=c===Po||c===Do;if(l||d){let f=e.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Rf(n)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return l&&h&&h.height>0||d&&h&&r(h)?(t===null&&(t=new Rf(n)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function dS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&bo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function uS(n,e,t,i){const r={},s=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete r[u.id];const h=s.get(u);h&&(e.remove(h),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function c(f){const u=f.attributes;for(const h in u)e.update(u[h],n.ARRAY_BUFFER)}function l(f){const u=[],h=f.index,m=f.attributes.position;let _=0;if(h!==null){const w=h.array;_=h.version;for(let y=0,v=w.length;y<v;y+=3){const L=w[y+0],D=w[y+1],R=w[y+2];u.push(L,D,D,R,R,L)}}else if(m!==void 0){const w=m.array;_=m.version;for(let y=0,v=w.length/3-1;y<v;y+=3){const L=y+0,D=y+1,R=y+2;u.push(L,D,D,R,R,L)}}else return;const g=new(Jp(u)?nm:tm)(u,1);g.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,g)}function d(f){const u=s.get(f);if(u){const h=f.index;h!==null&&u.version<h.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:d}}function hS(n,e,t){let i;function r(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function c(u,h){n.drawElements(i,h,s,u*o),t.update(h,i,1)}function l(u,h,m){m!==0&&(n.drawElementsInstanced(i,h,s,u*o,m),t.update(h,i,m))}function d(u,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,u,0,m);let g=0;for(let p=0;p<m;p++)g+=h[p];t.update(g,i,1)}function f(u,h,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)l(u[p]/o,h[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,s,u,0,_,0,m);let p=0;for(let w=0;w<m;w++)p+=h[w]*_[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function fS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function pS(n,e,t){const i=new WeakMap,r=new Ot;function s(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let b=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const h=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;h===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let v=a.attributes.position.count*y,L=1;v>e.maxTextureSize&&(L=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const D=new Float32Array(v*L*4*f),R=new Qp(D,v,L,f);R.type=Rr,R.needsUpdate=!0;const N=y*4;for(let M=0;M<f;M++){const I=g[M],k=p[M],O=w[M],G=v*L*4*M;for(let $=0;$<I.count;$++){const j=$*N;h===!0&&(r.fromBufferAttribute(I,$),D[G+j+0]=r.x,D[G+j+1]=r.y,D[G+j+2]=r.z,D[G+j+3]=0),m===!0&&(r.fromBufferAttribute(k,$),D[G+j+4]=r.x,D[G+j+5]=r.y,D[G+j+6]=r.z,D[G+j+7]=0),_===!0&&(r.fromBufferAttribute(O,$),D[G+j+8]=r.x,D[G+j+9]=r.y,D[G+j+10]=r.z,D[G+j+11]=O.itemSize===4?r.w:1)}}u={count:f,texture:R,size:new Be(v,L)},i.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let _=0;_<l.length;_++)h+=l[_];const m=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function mS(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==l&&(u.update(),r.set(u,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Sm=new Mi,Lf=new cm(1,1),bm=new Qp,Mm=new c_,wm=new sm,If=[],Nf=[],Uf=new Float32Array(16),kf=new Float32Array(9),Ff=new Float32Array(4);function Xo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=If[r];if(s===void 0&&(s=new Float32Array(r),If[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function On(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nl(n,e){let t=Nf[e];t===void 0&&(t=new Int32Array(e),Nf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function gS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;n.uniform2fv(this.addr,e),zn(t,e)}}function vS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(On(t,e))return;n.uniform3fv(this.addr,e),zn(t,e)}}function xS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;n.uniform4fv(this.addr,e),zn(t,e)}}function yS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(On(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zn(t,e)}else{if(On(t,i))return;Ff.set(i),n.uniformMatrix2fv(this.addr,!1,Ff),zn(t,i)}}function SS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(On(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zn(t,e)}else{if(On(t,i))return;kf.set(i),n.uniformMatrix3fv(this.addr,!1,kf),zn(t,i)}}function bS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(On(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zn(t,e)}else{if(On(t,i))return;Uf.set(i),n.uniformMatrix4fv(this.addr,!1,Uf),zn(t,i)}}function MS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;n.uniform2iv(this.addr,e),zn(t,e)}}function ES(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;n.uniform3iv(this.addr,e),zn(t,e)}}function TS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;n.uniform4iv(this.addr,e),zn(t,e)}}function AS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function RS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;n.uniform2uiv(this.addr,e),zn(t,e)}}function CS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;n.uniform3uiv(this.addr,e),zn(t,e)}}function PS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;n.uniform4uiv(this.addr,e),zn(t,e)}}function DS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Lf.compareFunction=Kp,s=Lf):s=Sm,t.setTexture2D(e||s,r)}function LS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Mm,r)}function IS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||wm,r)}function NS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||bm,r)}function US(n){switch(n){case 5126:return gS;case 35664:return _S;case 35665:return vS;case 35666:return xS;case 35674:return yS;case 35675:return SS;case 35676:return bS;case 5124:case 35670:return MS;case 35667:case 35671:return wS;case 35668:case 35672:return ES;case 35669:case 35673:return TS;case 5125:return AS;case 36294:return RS;case 36295:return CS;case 36296:return PS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return LS;case 35680:case 36300:case 36308:case 36293:return IS;case 36289:case 36303:case 36311:case 36292:return NS}}function kS(n,e){n.uniform1fv(this.addr,e)}function FS(n,e){const t=Xo(e,this.size,2);n.uniform2fv(this.addr,t)}function OS(n,e){const t=Xo(e,this.size,3);n.uniform3fv(this.addr,t)}function zS(n,e){const t=Xo(e,this.size,4);n.uniform4fv(this.addr,t)}function BS(n,e){const t=Xo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function HS(n,e){const t=Xo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function VS(n,e){const t=Xo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function GS(n,e){n.uniform1iv(this.addr,e)}function WS(n,e){n.uniform2iv(this.addr,e)}function XS(n,e){n.uniform3iv(this.addr,e)}function qS(n,e){n.uniform4iv(this.addr,e)}function $S(n,e){n.uniform1uiv(this.addr,e)}function YS(n,e){n.uniform2uiv(this.addr,e)}function jS(n,e){n.uniform3uiv(this.addr,e)}function ZS(n,e){n.uniform4uiv(this.addr,e)}function KS(n,e,t){const i=this.cache,r=e.length,s=Nl(t,r);On(i,s)||(n.uniform1iv(this.addr,s),zn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Sm,s[o])}function JS(n,e,t){const i=this.cache,r=e.length,s=Nl(t,r);On(i,s)||(n.uniform1iv(this.addr,s),zn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Mm,s[o])}function QS(n,e,t){const i=this.cache,r=e.length,s=Nl(t,r);On(i,s)||(n.uniform1iv(this.addr,s),zn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||wm,s[o])}function eb(n,e,t){const i=this.cache,r=e.length,s=Nl(t,r);On(i,s)||(n.uniform1iv(this.addr,s),zn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||bm,s[o])}function tb(n){switch(n){case 5126:return kS;case 35664:return FS;case 35665:return OS;case 35666:return zS;case 35674:return BS;case 35675:return HS;case 35676:return VS;case 5124:case 35670:return GS;case 35667:case 35671:return WS;case 35668:case 35672:return XS;case 35669:case 35673:return qS;case 5125:return $S;case 36294:return YS;case 36295:return jS;case 36296:return ZS;case 35678:case 36198:case 36298:case 36306:case 35682:return KS;case 35679:case 36299:case 36307:return JS;case 35680:case 36300:case 36308:case 36293:return QS;case 36289:case 36303:case 36311:case 36292:return eb}}class nb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=US(t.type)}}class ib{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tb(t.type)}}class rb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Rd=/(\w+)(\])?(\[|\.)?/g;function Of(n,e){n.seq.push(e),n.map[e.id]=e}function sb(n,e,t){const i=n.name,r=i.length;for(Rd.lastIndex=0;;){const s=Rd.exec(i),o=Rd.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Of(t,l===void 0?new nb(a,n,e):new ib(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new rb(a),Of(t,f)),t=f}}}class tl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);sb(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function zf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ob=37297;let ab=0;function cb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Bf=new wt;function lb(n){Gt._getMatrix(Bf,Gt.workingColorSpace,n);const e=`mat3( ${Bf.elements.map(t=>t.toFixed(4))} )`;switch(Gt.getTransfer(n)){case ll:return[e,"LinearTransferOETF"];case Kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Hf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+cb(n.getShaderSource(e),a)}else return s}function db(n,e){const t=lb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ub(n,e){let t;switch(e){case y0:t="Linear";break;case S0:t="Reinhard";break;case b0:t="Cineon";break;case M0:t="ACESFilmic";break;case E0:t="AgX";break;case T0:t="Neutral";break;case w0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fc=new S;function hb(){Gt.getLuminanceCoefficients(Fc);const n=Fc.x.toFixed(4),e=Fc.y.toFixed(4),t=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function pb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ma(n){return n!==""}function Vf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function zu(n){return n.replace(gb,vb)}const _b=new Map;function vb(n,e){let t=At[e];if(t===void 0){const i=_b.get(e);if(i!==void 0)t=At[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zu(t)}const xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(n){return n.replace(xb,yb)}function yb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Sb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Tr&&(e="SHADOWMAP_TYPE_VSM"),e}function bb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Po:case Do:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mb(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Do&&(e="ENVMAP_MODE_REFRACTION"),e}function wb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hp:e="ENVMAP_BLENDING_MULTIPLY";break;case v0:e="ENVMAP_BLENDING_MIX";break;case x0:e="ENVMAP_BLENDING_ADD";break}return e}function Eb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Tb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Sb(t),l=bb(t),d=Mb(t),f=wb(t),u=Eb(t),h=fb(t),m=pb(s),_=r.createProgram();let g,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ma).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ma).join(`
`),p.length>0&&(p+=`
`)):(g=[Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),p=[Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==es?"#define TONE_MAPPING":"",t.toneMapping!==es?At.tonemapping_pars_fragment:"",t.toneMapping!==es?ub("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,db("linearToOutputTexel",t.outputColorSpace),hb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),o=zu(o),o=Vf(o,t),o=Gf(o,t),a=zu(a),a=Vf(a,t),a=Gf(a,t),o=Wf(o),a=Wf(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=w+g+o,v=w+p+a,L=zf(r,r.VERTEX_SHADER,y),D=zf(r,r.FRAGMENT_SHADER,v);r.attachShader(_,L),r.attachShader(_,D),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(I){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(_)||"",O=r.getShaderInfoLog(L)||"",G=r.getShaderInfoLog(D)||"",$=k.trim(),j=O.trim(),re=G.trim();let q=!0,ge=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,L,D);else{const Te=Hf(r,L,"vertex"),ze=Hf(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+$+`
`+Te+`
`+ze)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(j===""||re==="")&&(ge=!1);ge&&(I.diagnostics={runnable:q,programLog:$,vertexShader:{log:j,prefix:g},fragmentShader:{log:re,prefix:p}})}r.deleteShader(L),r.deleteShader(D),N=new tl(r,_),b=mb(r,_)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,ob)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ab++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=D,this}let Ab=0;class Rb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Cb(e),t.set(e,i)),i}}class Cb{constructor(e){this.id=Ab++,this.code=e,this.usedTimes=0}}function Pb(n,e,t,i,r,s,o){const a=new oh,c=new Rb,l=new Set,d=[],f=r.logarithmicDepthBuffer,u=r.vertexTextures;let h=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,M,I,k,O){const G=k.fog,$=O.geometry,j=b.isMeshStandardMaterial?k.environment:null,re=(b.isMeshStandardMaterial?t:e).get(b.envMap||j),q=re&&re.mapping===Ll?re.image.height:null,ge=m[b.type];b.precision!==null&&(h=r.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));const Te=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ze=Te!==void 0?Te.length:0;let He=0;$.morphAttributes.position!==void 0&&(He=1),$.morphAttributes.normal!==void 0&&(He=2),$.morphAttributes.color!==void 0&&(He=3);let at,yt,te,Ae;if(ge){const Ue=gr[ge];at=Ue.vertexShader,yt=Ue.fragmentShader}else at=b.vertexShader,yt=b.fragmentShader,c.update(b),te=c.getVertexShaderID(b),Ae=c.getFragmentShaderID(b);const oe=n.getRenderTarget(),Ke=n.state.buffers.depth.getReversed(),ne=O.isInstancedMesh===!0,de=O.isBatchedMesh===!0,Q=!!b.map,ee=!!b.matcap,C=!!re,me=!!b.aoMap,he=!!b.lightMap,Re=!!b.bumpMap,pe=!!b.normalMap,Ve=!!b.displacementMap,ae=!!b.emissiveMap,Ee=!!b.metalnessMap,be=!!b.roughnessMap,Le=b.anisotropy>0,A=b.clearcoat>0,x=b.dispersion>0,z=b.iridescence>0,K=b.sheen>0,X=b.transmission>0,W=Le&&!!b.anisotropyMap,Ie=A&&!!b.clearcoatMap,xe=A&&!!b.clearcoatNormalMap,Ge=A&&!!b.clearcoatRoughnessMap,Xe=z&&!!b.iridescenceMap,_e=z&&!!b.iridescenceThicknessMap,Ne=K&&!!b.sheenColorMap,Je=K&&!!b.sheenRoughnessMap,Qe=!!b.specularMap,Ce=!!b.specularColorMap,dt=!!b.specularIntensityMap,U=X&&!!b.transmissionMap,ye=X&&!!b.thicknessMap,Se=!!b.gradientMap,qe=!!b.alphaMap,le=b.alphaTest>0,se=!!b.alphaHash,$e=!!b.extensions;let ie=es;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ie=n.toneMapping);const Ye={shaderID:ge,shaderType:b.type,shaderName:b.name,vertexShader:at,fragmentShader:yt,defines:b.defines,customVertexShaderID:te,customFragmentShaderID:Ae,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:de,batchingColor:de&&O._colorsTexture!==null,instancing:ne,instancingColor:ne&&O.instanceColor!==null,instancingMorph:ne&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Lo,alphaToCoverage:!!b.alphaToCoverage,map:Q,matcap:ee,envMap:C,envMapMode:C&&re.mapping,envMapCubeUVHeight:q,aoMap:me,lightMap:he,bumpMap:Re,normalMap:pe,displacementMap:u&&Ve,emissiveMap:ae,normalMapObjectSpace:pe&&b.normalMapType===D0,normalMapTangentSpace:pe&&b.normalMapType===P0,metalnessMap:Ee,roughnessMap:be,anisotropy:Le,anisotropyMap:W,clearcoat:A,clearcoatMap:Ie,clearcoatNormalMap:xe,clearcoatRoughnessMap:Ge,dispersion:x,iridescence:z,iridescenceMap:Xe,iridescenceThicknessMap:_e,sheen:K,sheenColorMap:Ne,sheenRoughnessMap:Je,specularMap:Qe,specularColorMap:Ce,specularIntensityMap:dt,transmission:X,transmissionMap:U,thicknessMap:ye,gradientMap:Se,opaque:b.transparent===!1&&b.blending===So&&b.alphaToCoverage===!1,alphaMap:qe,alphaTest:le,alphaHash:se,combine:b.combine,mapUv:Q&&_(b.map.channel),aoMapUv:me&&_(b.aoMap.channel),lightMapUv:he&&_(b.lightMap.channel),bumpMapUv:Re&&_(b.bumpMap.channel),normalMapUv:pe&&_(b.normalMap.channel),displacementMapUv:Ve&&_(b.displacementMap.channel),emissiveMapUv:ae&&_(b.emissiveMap.channel),metalnessMapUv:Ee&&_(b.metalnessMap.channel),roughnessMapUv:be&&_(b.roughnessMap.channel),anisotropyMapUv:W&&_(b.anisotropyMap.channel),clearcoatMapUv:Ie&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:xe&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Je&&_(b.sheenRoughnessMap.channel),specularMapUv:Qe&&_(b.specularMap.channel),specularColorMapUv:Ce&&_(b.specularColorMap.channel),specularIntensityMapUv:dt&&_(b.specularIntensityMap.channel),transmissionMapUv:U&&_(b.transmissionMap.channel),thicknessMapUv:ye&&_(b.thicknessMap.channel),alphaMapUv:qe&&_(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(pe||Le),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(Q||qe),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ke,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ze,morphTextureStride:He,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:Q&&b.map.isVideoTexture===!0&&Gt.getTransfer(b.map.colorSpace)===Kt,decodeVideoTextureEmissive:ae&&b.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(b.emissiveMap.colorSpace)===Kt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===pn,flipSided:b.side===bi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:$e&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&b.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(w(M,b),y(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function w(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const M=m[b.type];let I;if(M){const k=gr[M];I=S_.clone(k.uniforms)}else I=b.uniforms;return I}function L(b,M){let I;for(let k=0,O=d.length;k<O;k++){const G=d[k];if(G.cacheKey===M){I=G,++I.usedTimes;break}}return I===void 0&&(I=new Tb(n,M,b,s),d.push(I)),I}function D(b){if(--b.usedTimes===0){const M=d.indexOf(b);d[M]=d[d.length-1],d.pop(),b.destroy()}}function R(b){c.remove(b)}function N(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:L,releaseProgram:D,releaseShaderCache:R,programs:d,dispose:N}}function Db(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Lb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function qf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $f(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,u,h,m,_,g){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:h,groupOrder:m,renderOrder:f.renderOrder,z:_,group:g},n[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=h,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=_,p.group=g),e++,p}function a(f,u,h,m,_,g){const p=o(f,u,h,m,_,g);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(f,u,h,m,_,g){const p=o(f,u,h,m,_,g);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(f,u){t.length>1&&t.sort(f||Lb),i.length>1&&i.sort(u||qf),r.length>1&&r.sort(u||qf)}function d(){for(let f=e,u=n.length;f<u;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:d,sort:l}}function Ib(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new $f,n.set(i,[o])):r>=s.length?(o=new $f,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Nb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new kt};break;case"SpotLight":t={position:new S,direction:new S,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new kt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":t={color:new kt,position:new S,halfWidth:new S,halfHeight:new S};break}return n[e.id]=t,t}}}function Ub(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let kb=0;function Fb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ob(n){const e=new Nb,t=Ub(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new S);const r=new S,s=new $t,o=new $t;function a(l){let d=0,f=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,m=0,_=0,g=0,p=0,w=0,y=0,v=0,L=0,D=0,R=0;l.sort(Fb);for(let b=0,M=l.length;b<M;b++){const I=l[b],k=I.color,O=I.intensity,G=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=k.r*O,f+=k.g*O,u+=k.b*O;else if(I.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(I.sh.coefficients[j],O);R++}else if(I.isDirectionalLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const re=I.shadow,q=t.get(I);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,i.directionalShadow[h]=q,i.directionalShadowMap[h]=$,i.directionalShadowMatrix[h]=I.shadow.matrix,w++}i.directional[h]=j,h++}else if(I.isSpotLight){const j=e.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(k).multiplyScalar(O),j.distance=G,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,i.spot[_]=j;const re=I.shadow;if(I.map&&(i.spotLightMap[L]=I.map,L++,re.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[_]=re.matrix,I.castShadow){const q=t.get(I);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=$,v++}_++}else if(I.isRectAreaLight){const j=e.get(I);j.color.copy(k).multiplyScalar(O),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=j,g++}else if(I.isPointLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),j.distance=I.distance,j.decay=I.decay,I.castShadow){const re=I.shadow,q=t.get(I);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,q.shadowCameraNear=re.camera.near,q.shadowCameraFar=re.camera.far,i.pointShadow[m]=q,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=I.shadow.matrix,y++}i.point[m]=j,m++}else if(I.isHemisphereLight){const j=e.get(I);j.skyColor.copy(I.color).multiplyScalar(O),j.groundColor.copy(I.groundColor).multiplyScalar(O),i.hemi[p]=j,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const N=i.hash;(N.directionalLength!==h||N.pointLength!==m||N.spotLength!==_||N.rectAreaLength!==g||N.hemiLength!==p||N.numDirectionalShadows!==w||N.numPointShadows!==y||N.numSpotShadows!==v||N.numSpotMaps!==L||N.numLightProbes!==R)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+L-D,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=R,N.directionalLength=h,N.pointLength=m,N.spotLength=_,N.rectAreaLength=g,N.hemiLength=p,N.numDirectionalShadows=w,N.numPointShadows=y,N.numSpotShadows=v,N.numSpotMaps=L,N.numLightProbes=R,i.version=kb++)}function c(l,d){let f=0,u=0,h=0,m=0,_=0;const g=d.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const y=l[p];if(y.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),f++}else if(y.isSpotLight){const v=i.spot[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),h++}else if(y.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const v=i.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:i}}function Yf(n){const e=new Ob(n),t=[],i=[];function r(d){l.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function zb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Yf(n),e.set(r,[a])):s>=o.length?(a=new Yf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Bb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hb=`uniform sampler2D shadow_pass;
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
}`;function Vb(n,e,t){let i=new ah;const r=new Be,s=new Be,o=new Ot,a=new dv({depthPacking:C0}),c=new uv,l={},d=t.maxTextureSize,f={[Nr]:bi,[bi]:Nr,[pn]:pn},u=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Bb,fragmentShader:Hb}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const m=new Ft;m.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new we(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bp;let p=this.type;this.render=function(D,R,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Qr),k.buffers.depth.getReversed()?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=p!==Tr&&this.type===Tr,G=p===Tr&&this.type!==Tr;for(let $=0,j=D.length;$<j;$++){const re=D[$],q=re.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ge=q.getFrameExtents();if(r.multiply(ge),s.copy(q.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ge.x),r.x=s.x*ge.x,q.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ge.y),r.y=s.y*ge.y,q.mapSize.y=s.y)),q.map===null||O===!0||G===!0){const ze=this.type!==Tr?{minFilter:ar,magFilter:ar}:{};q.map!==null&&q.map.dispose(),q.map=new Fs(r.x,r.y,ze),q.map.texture.name=re.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const Te=q.getViewportCount();for(let ze=0;ze<Te;ze++){const He=q.getViewport(ze);o.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),k.viewport(o),q.updateMatrices(re,ze),i=q.getFrustum(),v(R,N,q.camera,re,this.type)}q.isPointLightShadow!==!0&&this.type===Tr&&w(q,N),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(b,M,I)};function w(D,R){const N=e.update(_);u.defines.VSM_SAMPLES!==D.blurSamples&&(u.defines.VSM_SAMPLES=D.blurSamples,h.defines.VSM_SAMPLES=D.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Fs(r.x,r.y)),u.uniforms.shadow_pass.value=D.map.texture,u.uniforms.resolution.value=D.mapSize,u.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(R,null,N,u,_,null),h.uniforms.shadow_pass.value=D.mapPass.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(R,null,N,h,_,null)}function y(D,R,N,b){let M=null;const I=N.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(I!==void 0)M=I;else if(M=N.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=M.uuid,O=R.uuid;let G=l[k];G===void 0&&(G={},l[k]=G);let $=G[O];$===void 0&&($=M.clone(),G[O]=$,R.addEventListener("dispose",L)),M=$}if(M.visible=R.visible,M.wireframe=R.wireframe,b===Tr?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:f[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=n.properties.get(M);k.light=N}return M}function v(D,R,N,b,M){if(D.visible===!1)return;if(D.layers.test(R.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===Tr)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,D.matrixWorld);const O=e.update(D),G=D.material;if(Array.isArray(G)){const $=O.groups;for(let j=0,re=$.length;j<re;j++){const q=$[j],ge=G[q.materialIndex];if(ge&&ge.visible){const Te=y(D,ge,b,M);D.onBeforeShadow(n,D,R,N,O,Te,q),n.renderBufferDirect(N,null,O,Te,D,q),D.onAfterShadow(n,D,R,N,O,Te,q)}}}else if(G.visible){const $=y(D,G,b,M);D.onBeforeShadow(n,D,R,N,O,$,null),n.renderBufferDirect(N,null,O,$,D,null),D.onAfterShadow(n,D,R,N,O,$,null)}}const k=D.children;for(let O=0,G=k.length;O<G;O++)v(k[O],R,N,b,M)}function L(D){D.target.removeEventListener("dispose",L);for(const N in l){const b=l[N],M=D.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const Gb={[Jd]:Qd,[eu]:iu,[tu]:ru,[Co]:nu,[Qd]:Jd,[iu]:eu,[ru]:tu,[nu]:Co};function Wb(n,e){function t(){let U=!1;const ye=new Ot;let Se=null;const qe=new Ot(0,0,0,0);return{setMask:function(le){Se!==le&&!U&&(n.colorMask(le,le,le,le),Se=le)},setLocked:function(le){U=le},setClear:function(le,se,$e,ie,Ye){Ye===!0&&(le*=ie,se*=ie,$e*=ie),ye.set(le,se,$e,ie),qe.equals(ye)===!1&&(n.clearColor(le,se,$e,ie),qe.copy(ye))},reset:function(){U=!1,Se=null,qe.set(-1,0,0,0)}}}function i(){let U=!1,ye=!1,Se=null,qe=null,le=null;return{setReversed:function(se){if(ye!==se){const $e=e.get("EXT_clip_control");se?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),ye=se;const ie=le;le=null,this.setClear(ie)}},getReversed:function(){return ye},setTest:function(se){se?oe(n.DEPTH_TEST):Ke(n.DEPTH_TEST)},setMask:function(se){Se!==se&&!U&&(n.depthMask(se),Se=se)},setFunc:function(se){if(ye&&(se=Gb[se]),qe!==se){switch(se){case Jd:n.depthFunc(n.NEVER);break;case Qd:n.depthFunc(n.ALWAYS);break;case eu:n.depthFunc(n.LESS);break;case Co:n.depthFunc(n.LEQUAL);break;case tu:n.depthFunc(n.EQUAL);break;case nu:n.depthFunc(n.GEQUAL);break;case iu:n.depthFunc(n.GREATER);break;case ru:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}qe=se}},setLocked:function(se){U=se},setClear:function(se){le!==se&&(ye&&(se=1-se),n.clearDepth(se),le=se)},reset:function(){U=!1,Se=null,qe=null,le=null,ye=!1}}}function r(){let U=!1,ye=null,Se=null,qe=null,le=null,se=null,$e=null,ie=null,Ye=null;return{setTest:function(Ue){U||(Ue?oe(n.STENCIL_TEST):Ke(n.STENCIL_TEST))},setMask:function(Ue){ye!==Ue&&!U&&(n.stencilMask(Ue),ye=Ue)},setFunc:function(Ue,mt,St){(Se!==Ue||qe!==mt||le!==St)&&(n.stencilFunc(Ue,mt,St),Se=Ue,qe=mt,le=St)},setOp:function(Ue,mt,St){(se!==Ue||$e!==mt||ie!==St)&&(n.stencilOp(Ue,mt,St),se=Ue,$e=mt,ie=St)},setLocked:function(Ue){U=Ue},setClear:function(Ue){Ye!==Ue&&(n.clearStencil(Ue),Ye=Ue)},reset:function(){U=!1,ye=null,Se=null,qe=null,le=null,se=null,$e=null,ie=null,Ye=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let d={},f={},u=new WeakMap,h=[],m=null,_=!1,g=null,p=null,w=null,y=null,v=null,L=null,D=null,R=new kt(0,0,0),N=0,b=!1,M=null,I=null,k=null,O=null,G=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,re=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=re>=1):q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=re>=2);let ge=null,Te={};const ze=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),at=new Ot().fromArray(ze),yt=new Ot().fromArray(He);function te(U,ye,Se,qe){const le=new Uint8Array(4),se=n.createTexture();n.bindTexture(U,se),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<Se;$e++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,qe,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(ye+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return se}const Ae={};Ae[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(Co),Re(!1),pe(Nh),oe(n.CULL_FACE),me(Qr);function oe(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function Ke(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function ne(U,ye){return f[U]!==ye?(n.bindFramebuffer(U,ye),f[U]=ye,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ye),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function de(U,ye){let Se=h,qe=!1;if(U){Se=u.get(ye),Se===void 0&&(Se=[],u.set(ye,Se));const le=U.textures;if(Se.length!==le.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let se=0,$e=le.length;se<$e;se++)Se[se]=n.COLOR_ATTACHMENT0+se;Se.length=le.length,qe=!0}}else Se[0]!==n.BACK&&(Se[0]=n.BACK,qe=!0);qe&&n.drawBuffers(Se)}function Q(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const ee={[bs]:n.FUNC_ADD,[t0]:n.FUNC_SUBTRACT,[n0]:n.FUNC_REVERSE_SUBTRACT};ee[i0]=n.MIN,ee[r0]=n.MAX;const C={[s0]:n.ZERO,[o0]:n.ONE,[a0]:n.SRC_COLOR,[Zd]:n.SRC_ALPHA,[f0]:n.SRC_ALPHA_SATURATE,[u0]:n.DST_COLOR,[l0]:n.DST_ALPHA,[c0]:n.ONE_MINUS_SRC_COLOR,[Kd]:n.ONE_MINUS_SRC_ALPHA,[h0]:n.ONE_MINUS_DST_COLOR,[d0]:n.ONE_MINUS_DST_ALPHA,[p0]:n.CONSTANT_COLOR,[m0]:n.ONE_MINUS_CONSTANT_COLOR,[g0]:n.CONSTANT_ALPHA,[_0]:n.ONE_MINUS_CONSTANT_ALPHA};function me(U,ye,Se,qe,le,se,$e,ie,Ye,Ue){if(U===Qr){_===!0&&(Ke(n.BLEND),_=!1);return}if(_===!1&&(oe(n.BLEND),_=!0),U!==e0){if(U!==g||Ue!==b){if((p!==bs||v!==bs)&&(n.blendEquation(n.FUNC_ADD),p=bs,v=bs),Ue)switch(U){case So:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jd:n.blendFunc(n.ONE,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case So:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Uh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,y=null,L=null,D=null,R.set(0,0,0),N=0,g=U,b=Ue}return}le=le||ye,se=se||Se,$e=$e||qe,(ye!==p||le!==v)&&(n.blendEquationSeparate(ee[ye],ee[le]),p=ye,v=le),(Se!==w||qe!==y||se!==L||$e!==D)&&(n.blendFuncSeparate(C[Se],C[qe],C[se],C[$e]),w=Se,y=qe,L=se,D=$e),(ie.equals(R)===!1||Ye!==N)&&(n.blendColor(ie.r,ie.g,ie.b,Ye),R.copy(ie),N=Ye),g=U,b=!1}function he(U,ye){U.side===pn?Ke(n.CULL_FACE):oe(n.CULL_FACE);let Se=U.side===bi;ye&&(Se=!Se),Re(Se),U.blending===So&&U.transparent===!1?me(Qr):me(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const qe=U.stencilWrite;a.setTest(qe),qe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function Re(U){M!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),M=U)}function pe(U){U!==Kg?(oe(n.CULL_FACE),U!==I&&(U===Nh?n.cullFace(n.BACK):U===Jg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ke(n.CULL_FACE),I=U}function Ve(U){U!==k&&(j&&n.lineWidth(U),k=U)}function ae(U,ye,Se){U?(oe(n.POLYGON_OFFSET_FILL),(O!==ye||G!==Se)&&(n.polygonOffset(ye,Se),O=ye,G=Se)):Ke(n.POLYGON_OFFSET_FILL)}function Ee(U){U?oe(n.SCISSOR_TEST):Ke(n.SCISSOR_TEST)}function be(U){U===void 0&&(U=n.TEXTURE0+$-1),ge!==U&&(n.activeTexture(U),ge=U)}function Le(U,ye,Se){Se===void 0&&(ge===null?Se=n.TEXTURE0+$-1:Se=ge);let qe=Te[Se];qe===void 0&&(qe={type:void 0,texture:void 0},Te[Se]=qe),(qe.type!==U||qe.texture!==ye)&&(ge!==Se&&(n.activeTexture(Se),ge=Se),n.bindTexture(U,ye||Ae[U]),qe.type=U,qe.texture=ye)}function A(){const U=Te[ge];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ge(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xe(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(U){at.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),at.copy(U))}function Je(U){yt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),yt.copy(U))}function Qe(U,ye){let Se=l.get(ye);Se===void 0&&(Se=new WeakMap,l.set(ye,Se));let qe=Se.get(U);qe===void 0&&(qe=n.getUniformBlockIndex(ye,U.name),Se.set(U,qe))}function Ce(U,ye){const qe=l.get(ye).get(U);c.get(ye)!==qe&&(n.uniformBlockBinding(ye,qe,U.__bindingPointIndex),c.set(ye,qe))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ge=null,Te={},f={},u=new WeakMap,h=[],m=null,_=!1,g=null,p=null,w=null,y=null,v=null,L=null,D=null,R=new kt(0,0,0),N=0,b=!1,M=null,I=null,k=null,O=null,G=null,at.set(0,0,n.canvas.width,n.canvas.height),yt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Ke,bindFramebuffer:ne,drawBuffers:de,useProgram:Q,setBlending:me,setMaterial:he,setFlipSided:Re,setCullFace:pe,setLineWidth:Ve,setPolygonOffset:ae,setScissorTest:Ee,activeTexture:be,bindTexture:Le,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:z,texImage2D:Xe,texImage3D:_e,updateUBOMapping:Qe,uniformBlockBinding:Ce,texStorage2D:xe,texStorage3D:Ge,texSubImage2D:K,texSubImage3D:X,compressedTexSubImage2D:W,compressedTexSubImage3D:Ie,scissor:Ne,viewport:Je,reset:dt}}function Xb(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,d=new WeakMap;let f;const u=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,x){return h?new OffscreenCanvas(A,x):hl("canvas")}function _(A,x,z){let K=1;const X=Le(A);if((X.width>z||X.height>z)&&(K=z/Math.max(X.width,X.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const W=Math.floor(K*X.width),Ie=Math.floor(K*X.height);f===void 0&&(f=m(W,Ie));const xe=x?m(W,Ie):f;return xe.width=W,xe.height=Ie,xe.getContext("2d").drawImage(A,0,0,W,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+W+"x"+Ie+")."),xe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(A,x,z,K,X=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=x;if(x===n.RED&&(z===n.FLOAT&&(W=n.R32F),z===n.HALF_FLOAT&&(W=n.R16F),z===n.UNSIGNED_BYTE&&(W=n.R8)),x===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(W=n.R8UI),z===n.UNSIGNED_SHORT&&(W=n.R16UI),z===n.UNSIGNED_INT&&(W=n.R32UI),z===n.BYTE&&(W=n.R8I),z===n.SHORT&&(W=n.R16I),z===n.INT&&(W=n.R32I)),x===n.RG&&(z===n.FLOAT&&(W=n.RG32F),z===n.HALF_FLOAT&&(W=n.RG16F),z===n.UNSIGNED_BYTE&&(W=n.RG8)),x===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(W=n.RG8UI),z===n.UNSIGNED_SHORT&&(W=n.RG16UI),z===n.UNSIGNED_INT&&(W=n.RG32UI),z===n.BYTE&&(W=n.RG8I),z===n.SHORT&&(W=n.RG16I),z===n.INT&&(W=n.RG32I)),x===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(W=n.RGB8UI),z===n.UNSIGNED_SHORT&&(W=n.RGB16UI),z===n.UNSIGNED_INT&&(W=n.RGB32UI),z===n.BYTE&&(W=n.RGB8I),z===n.SHORT&&(W=n.RGB16I),z===n.INT&&(W=n.RGB32I)),x===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),z===n.UNSIGNED_INT&&(W=n.RGBA32UI),z===n.BYTE&&(W=n.RGBA8I),z===n.SHORT&&(W=n.RGBA16I),z===n.INT&&(W=n.RGBA32I)),x===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),x===n.RGBA){const Ie=X?ll:Gt.getTransfer(K);z===n.FLOAT&&(W=n.RGBA32F),z===n.HALF_FLOAT&&(W=n.RGBA16F),z===n.UNSIGNED_BYTE&&(W=Ie===Kt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function v(A,x){let z;return A?x===null||x===ks||x===Ca?z=n.DEPTH24_STENCIL8:x===Rr?z=n.DEPTH32F_STENCIL8:x===Ra&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ks||x===Ca?z=n.DEPTH_COMPONENT24:x===Rr?z=n.DEPTH_COMPONENT32F:x===Ra&&(z=n.DEPTH_COMPONENT16),z}function L(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==ar&&A.minFilter!==_r?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function D(A){const x=A.target;x.removeEventListener("dispose",D),N(x),x.isVideoTexture&&d.delete(x)}function R(A){const x=A.target;x.removeEventListener("dispose",R),M(x)}function N(A){const x=i.get(A);if(x.__webglInit===void 0)return;const z=A.source,K=u.get(z);if(K){const X=K[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&b(A),Object.keys(K).length===0&&u.delete(z)}i.remove(A)}function b(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const z=A.source,K=u.get(z);delete K[x.__cacheKey],o.memory.textures--}function M(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let X=0;X<x.__webglFramebuffer[K].length;X++)n.deleteFramebuffer(x.__webglFramebuffer[K][X]);else n.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)n.deleteFramebuffer(x.__webglFramebuffer[K]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=A.textures;for(let K=0,X=z.length;K<X;K++){const W=i.get(z[K]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(z[K])}i.remove(A)}let I=0;function k(){I=0}function O(){const A=I;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),I+=1,A}function G(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function $(A,x){const z=i.get(A);if(A.isVideoTexture&&Ee(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(z,A,x);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+x)}function j(A,x){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Ae(z,A,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+x)}function re(A,x){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Ae(z,A,x);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+x)}function q(A,x){const z=i.get(A);if(A.version>0&&z.__version!==A.version){oe(z,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+x)}const ge={[au]:n.REPEAT,[Ts]:n.CLAMP_TO_EDGE,[cu]:n.MIRRORED_REPEAT},Te={[ar]:n.NEAREST,[A0]:n.NEAREST_MIPMAP_NEAREST,[dc]:n.NEAREST_MIPMAP_LINEAR,[_r]:n.LINEAR,[Yl]:n.LINEAR_MIPMAP_NEAREST,[As]:n.LINEAR_MIPMAP_LINEAR},ze={[L0]:n.NEVER,[O0]:n.ALWAYS,[I0]:n.LESS,[Kp]:n.LEQUAL,[N0]:n.EQUAL,[F0]:n.GEQUAL,[U0]:n.GREATER,[k0]:n.NOTEQUAL};function He(A,x){if(x.type===Rr&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===_r||x.magFilter===Yl||x.magFilter===dc||x.magFilter===As||x.minFilter===_r||x.minFilter===Yl||x.minFilter===dc||x.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,ge[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ge[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ge[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Te[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Te[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ze[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ar||x.minFilter!==dc&&x.minFilter!==As||x.type===Rr&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function at(A,x){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",D));const K=x.source;let X=u.get(K);X===void 0&&(X={},u.set(K,X));const W=G(x);if(W!==A.__cacheKey){X[W]===void 0&&(X[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),X[W].usedTimes++;const Ie=X[A.__cacheKey];Ie!==void 0&&(X[A.__cacheKey].usedTimes--,Ie.usedTimes===0&&b(x)),A.__cacheKey=W,A.__webglTexture=X[W].texture}return z}function yt(A,x,z){return Math.floor(Math.floor(A/z)/x)}function te(A,x,z,K){const W=A.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,z,K,x.data);else{W.sort((_e,Ne)=>_e.start-Ne.start);let Ie=0;for(let _e=1;_e<W.length;_e++){const Ne=W[Ie],Je=W[_e],Qe=Ne.start+Ne.count,Ce=yt(Je.start,x.width,4),dt=yt(Ne.start,x.width,4);Je.start<=Qe+1&&Ce===dt&&yt(Je.start+Je.count-1,x.width,4)===Ce?Ne.count=Math.max(Ne.count,Je.start+Je.count-Ne.start):(++Ie,W[Ie]=Je)}W.length=Ie+1;const xe=n.getParameter(n.UNPACK_ROW_LENGTH),Ge=n.getParameter(n.UNPACK_SKIP_PIXELS),Xe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let _e=0,Ne=W.length;_e<Ne;_e++){const Je=W[_e],Qe=Math.floor(Je.start/4),Ce=Math.ceil(Je.count/4),dt=Qe%x.width,U=Math.floor(Qe/x.width),ye=Ce,Se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,dt),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,dt,U,ye,Se,z,K,x.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,xe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,Xe)}}function Ae(A,x,z){let K=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=n.TEXTURE_3D);const X=at(A,x),W=x.source;t.bindTexture(K,A.__webglTexture,n.TEXTURE0+z);const Ie=i.get(W);if(W.version!==Ie.__version||X===!0){t.activeTexture(n.TEXTURE0+z);const xe=Gt.getPrimaries(Gt.workingColorSpace),Ge=x.colorSpace===Kr?null:Gt.getPrimaries(x.colorSpace),Xe=x.colorSpace===Kr||xe===Ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let _e=_(x.image,!1,r.maxTextureSize);_e=be(x,_e);const Ne=s.convert(x.format,x.colorSpace),Je=s.convert(x.type);let Qe=y(x.internalFormat,Ne,Je,x.colorSpace,x.isVideoTexture);He(K,x);let Ce;const dt=x.mipmaps,U=x.isVideoTexture!==!0,ye=Ie.__version===void 0||X===!0,Se=W.dataReady,qe=L(x,_e);if(x.isDepthTexture)Qe=v(x.format===Da,x.type),ye&&(U?t.texStorage2D(n.TEXTURE_2D,1,Qe,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Qe,_e.width,_e.height,0,Ne,Je,null));else if(x.isDataTexture)if(dt.length>0){U&&ye&&t.texStorage2D(n.TEXTURE_2D,qe,Qe,dt[0].width,dt[0].height);for(let le=0,se=dt.length;le<se;le++)Ce=dt[le],U?Se&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ce.width,Ce.height,Ne,Je,Ce.data):t.texImage2D(n.TEXTURE_2D,le,Qe,Ce.width,Ce.height,0,Ne,Je,Ce.data);x.generateMipmaps=!1}else U?(ye&&t.texStorage2D(n.TEXTURE_2D,qe,Qe,_e.width,_e.height),Se&&te(x,_e,Ne,Je)):t.texImage2D(n.TEXTURE_2D,0,Qe,_e.width,_e.height,0,Ne,Je,_e.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,Qe,dt[0].width,dt[0].height,_e.depth);for(let le=0,se=dt.length;le<se;le++)if(Ce=dt[le],x.format!==sr)if(Ne!==null)if(U){if(Se)if(x.layerUpdates.size>0){const $e=wf(Ce.width,Ce.height,x.format,x.type);for(const ie of x.layerUpdates){const Ye=Ce.data.subarray(ie*$e/Ce.data.BYTES_PER_ELEMENT,(ie+1)*$e/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,ie,Ce.width,Ce.height,1,Ne,Ye)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ce.width,Ce.height,_e.depth,Ne,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Qe,Ce.width,Ce.height,_e.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?Se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ce.width,Ce.height,_e.depth,Ne,Je,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Qe,Ce.width,Ce.height,_e.depth,0,Ne,Je,Ce.data)}else{U&&ye&&t.texStorage2D(n.TEXTURE_2D,qe,Qe,dt[0].width,dt[0].height);for(let le=0,se=dt.length;le<se;le++)Ce=dt[le],x.format!==sr?Ne!==null?U?Se&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Ce.width,Ce.height,Ne,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Qe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?Se&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ce.width,Ce.height,Ne,Je,Ce.data):t.texImage2D(n.TEXTURE_2D,le,Qe,Ce.width,Ce.height,0,Ne,Je,Ce.data)}else if(x.isDataArrayTexture)if(U){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,Qe,_e.width,_e.height,_e.depth),Se)if(x.layerUpdates.size>0){const le=wf(_e.width,_e.height,x.format,x.type);for(const se of x.layerUpdates){const $e=_e.data.subarray(se*le/_e.data.BYTES_PER_ELEMENT,(se+1)*le/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,_e.width,_e.height,1,Ne,Je,$e)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ne,Je,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Qe,_e.width,_e.height,_e.depth,0,Ne,Je,_e.data);else if(x.isData3DTexture)U?(ye&&t.texStorage3D(n.TEXTURE_3D,qe,Qe,_e.width,_e.height,_e.depth),Se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ne,Je,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Qe,_e.width,_e.height,_e.depth,0,Ne,Je,_e.data);else if(x.isFramebufferTexture){if(ye)if(U)t.texStorage2D(n.TEXTURE_2D,qe,Qe,_e.width,_e.height);else{let le=_e.width,se=_e.height;for(let $e=0;$e<qe;$e++)t.texImage2D(n.TEXTURE_2D,$e,Qe,le,se,0,Ne,Je,null),le>>=1,se>>=1}}else if(dt.length>0){if(U&&ye){const le=Le(dt[0]);t.texStorage2D(n.TEXTURE_2D,qe,Qe,le.width,le.height)}for(let le=0,se=dt.length;le<se;le++)Ce=dt[le],U?Se&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ne,Je,Ce):t.texImage2D(n.TEXTURE_2D,le,Qe,Ne,Je,Ce);x.generateMipmaps=!1}else if(U){if(ye){const le=Le(_e);t.texStorage2D(n.TEXTURE_2D,qe,Qe,le.width,le.height)}Se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ne,Je,_e)}else t.texImage2D(n.TEXTURE_2D,0,Qe,Ne,Je,_e);g(x)&&p(K),Ie.__version=W.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function oe(A,x,z){if(x.image.length!==6)return;const K=at(A,x),X=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);const W=i.get(X);if(X.version!==W.__version||K===!0){t.activeTexture(n.TEXTURE0+z);const Ie=Gt.getPrimaries(Gt.workingColorSpace),xe=x.colorSpace===Kr?null:Gt.getPrimaries(x.colorSpace),Ge=x.colorSpace===Kr||Ie===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const Xe=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,Ne=[];for(let se=0;se<6;se++)!Xe&&!_e?Ne[se]=_(x.image[se],!0,r.maxCubemapSize):Ne[se]=_e?x.image[se].image:x.image[se],Ne[se]=be(x,Ne[se]);const Je=Ne[0],Qe=s.convert(x.format,x.colorSpace),Ce=s.convert(x.type),dt=y(x.internalFormat,Qe,Ce,x.colorSpace),U=x.isVideoTexture!==!0,ye=W.__version===void 0||K===!0,Se=X.dataReady;let qe=L(x,Je);He(n.TEXTURE_CUBE_MAP,x);let le;if(Xe){U&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,dt,Je.width,Je.height);for(let se=0;se<6;se++){le=Ne[se].mipmaps;for(let $e=0;$e<le.length;$e++){const ie=le[$e];x.format!==sr?Qe!==null?U?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e,0,0,ie.width,ie.height,Qe,ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e,dt,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e,0,0,ie.width,ie.height,Qe,Ce,ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e,dt,ie.width,ie.height,0,Qe,Ce,ie.data)}}}else{if(le=x.mipmaps,U&&ye){le.length>0&&qe++;const se=Le(Ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,dt,se.width,se.height)}for(let se=0;se<6;se++)if(_e){U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ne[se].width,Ne[se].height,Qe,Ce,Ne[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,dt,Ne[se].width,Ne[se].height,0,Qe,Ce,Ne[se].data);for(let $e=0;$e<le.length;$e++){const Ye=le[$e].image[se].image;U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e+1,0,0,Ye.width,Ye.height,Qe,Ce,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e+1,dt,Ye.width,Ye.height,0,Qe,Ce,Ye.data)}}else{U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Qe,Ce,Ne[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,dt,Qe,Ce,Ne[se]);for(let $e=0;$e<le.length;$e++){const ie=le[$e];U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e+1,0,0,Qe,Ce,ie.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e+1,dt,Qe,Ce,ie.image[se])}}}g(x)&&p(n.TEXTURE_CUBE_MAP),W.__version=X.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ke(A,x,z,K,X,W){const Ie=s.convert(z.format,z.colorSpace),xe=s.convert(z.type),Ge=y(z.internalFormat,Ie,xe,z.colorSpace),Xe=i.get(x),_e=i.get(z);if(_e.__renderTarget=x,!Xe.__hasExternalTextures){const Ne=Math.max(1,x.width>>W),Je=Math.max(1,x.height>>W);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,W,Ge,Ne,Je,x.depth,0,Ie,xe,null):t.texImage2D(X,W,Ge,Ne,Je,0,Ie,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ae(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,X,_e.__webglTexture,0,Ve(x)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,X,_e.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(A,x,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){const K=x.depthTexture,X=K&&K.isDepthTexture?K.type:null,W=v(x.stencilBuffer,X),Ie=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=Ve(x);ae(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,W,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,W,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,W,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,A)}else{const K=x.textures;for(let X=0;X<K.length;X++){const W=K[X],Ie=s.convert(W.format,W.colorSpace),xe=s.convert(W.type),Ge=y(W.internalFormat,Ie,xe,W.colorSpace),Xe=Ve(x);z&&ae(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Ge,x.width,x.height):ae(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe,Ge,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ge,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const X=K.__webglTexture,W=Ve(x);if(x.depthTexture.format===Pa)ae(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(x.depthTexture.format===Da)ae(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Q(A){const x=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const X=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",X)};K.addEventListener("dispose",X),x.__depthDisposeCallback=X}x.__boundDepthTexture=K}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const K=A.texture.mipmaps;K&&K.length>0?de(x.__webglFramebuffer[0],A):de(x.__webglFramebuffer,A)}else if(z){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=n.createRenderbuffer(),ne(x.__webglDepthbuffer[K],A,!1);else{const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,W)}}else{const K=A.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ne(x.__webglDepthbuffer,A,!1);else{const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(A,x,z){const K=i.get(A);x!==void 0&&Ke(K.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Q(A)}function C(A){const x=A.texture,z=i.get(A),K=i.get(x);A.addEventListener("dispose",R);const X=A.textures,W=A.isWebGLCubeRenderTarget===!0,Ie=X.length>1;if(Ie||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=x.version,o.memory.textures++),W){z.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[xe]=[];for(let Ge=0;Ge<x.mipmaps.length;Ge++)z.__webglFramebuffer[xe][Ge]=n.createFramebuffer()}else z.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let xe=0;xe<x.mipmaps.length;xe++)z.__webglFramebuffer[xe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let xe=0,Ge=X.length;xe<Ge;xe++){const Xe=i.get(X[xe]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&ae(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xe=0;xe<X.length;xe++){const Ge=X[xe];z.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[xe]);const Xe=s.convert(Ge.format,Ge.colorSpace),_e=s.convert(Ge.type),Ne=y(Ge.internalFormat,Xe,_e,Ge.colorSpace,A.isXRRenderTarget===!0),Je=Ve(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,Ne,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,z.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),He(n.TEXTURE_CUBE_MAP,x);for(let xe=0;xe<6;xe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ge=0;Ge<x.mipmaps.length;Ge++)Ke(z.__webglFramebuffer[xe][Ge],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ge);else Ke(z.__webglFramebuffer[xe],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);g(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let xe=0,Ge=X.length;xe<Ge;xe++){const Xe=X[xe],_e=i.get(Xe);let Ne=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ne=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ne,_e.__webglTexture),He(Ne,Xe),Ke(z.__webglFramebuffer,A,Xe,n.COLOR_ATTACHMENT0+xe,Ne,0),g(Xe)&&p(Ne)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,K.__webglTexture),He(xe,x),x.mipmaps&&x.mipmaps.length>0)for(let Ge=0;Ge<x.mipmaps.length;Ge++)Ke(z.__webglFramebuffer[Ge],A,x,n.COLOR_ATTACHMENT0,xe,Ge);else Ke(z.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,xe,0);g(x)&&p(xe),t.unbindTexture()}A.depthBuffer&&Q(A)}function me(A){const x=A.textures;for(let z=0,K=x.length;z<K;z++){const X=x[z];if(g(X)){const W=w(A),Ie=i.get(X).__webglTexture;t.bindTexture(W,Ie),p(W),t.unbindTexture()}}}const he=[],Re=[];function pe(A){if(A.samples>0){if(ae(A)===!1){const x=A.textures,z=A.width,K=A.height;let X=n.COLOR_BUFFER_BIT;const W=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(A),xe=x.length>1;if(xe)for(let Xe=0;Xe<x.length;Xe++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Ge=A.texture.mipmaps;Ge&&Ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Xe=0;Xe<x.length;Xe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),xe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Xe]);const _e=i.get(x[Xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,z,K,0,0,z,K,X,n.NEAREST),c===!0&&(he.length=0,Re.length=0,he.push(n.COLOR_ATTACHMENT0+Xe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(he.push(W),Re.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let Xe=0;Xe<x.length;Xe++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Xe]);const _e=i.get(x[Xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Ve(A){return Math.min(r.maxSamples,A.samples)}function ae(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ee(A){const x=o.render.frame;d.get(A)!==x&&(d.set(A,x),A.update())}function be(A,x){const z=A.colorSpace,K=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Lo&&z!==Kr&&(Gt.getTransfer(z)===Kt?(K!==sr||X!==xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function Le(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=j,this.setTexture3D=re,this.setTextureCube=q,this.rebindTextures=ee,this.setupRenderTarget=C,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=ae}function qb(n,e){function t(i,r=Kr){let s;const o=Gt.getTransfer(r);if(i===xr)return n.UNSIGNED_BYTE;if(i===Qu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===eh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gp)return n.BYTE;if(i===Wp)return n.SHORT;if(i===Ra)return n.UNSIGNED_SHORT;if(i===Ju)return n.INT;if(i===ks)return n.UNSIGNED_INT;if(i===Rr)return n.FLOAT;if(i===Qa)return n.HALF_FLOAT;if(i===qp)return n.ALPHA;if(i===$p)return n.RGB;if(i===sr)return n.RGBA;if(i===Pa)return n.DEPTH_COMPONENT;if(i===Da)return n.DEPTH_STENCIL;if(i===Yp)return n.RED;if(i===th)return n.RED_INTEGER;if(i===jp)return n.RG;if(i===nh)return n.RG_INTEGER;if(i===ih)return n.RGBA_INTEGER;if(i===Zc||i===Kc||i===Jc||i===Qc)if(o===Kt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Zc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Zc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lu||i===du||i===uu||i===hu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===lu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===du)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fu||i===pu||i===mu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===fu||i===pu)return o===Kt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===mu)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gu||i===_u||i===vu||i===xu||i===yu||i===Su||i===bu||i===Mu||i===wu||i===Eu||i===Tu||i===Au||i===Ru||i===Cu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===gu)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_u)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vu)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xu)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yu)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Su)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bu)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mu)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wu)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Eu)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tu)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Au)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ru)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cu)return o===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===el||i===Pu||i===Du)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===el)return o===Kt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Du)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zp||i===Lu||i===Iu||i===Nu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===el)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Lu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Iu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ca?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Em extends Mi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const $b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yb=`
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

}`;class jb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Em(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ur({vertexShader:$b,fragmentShader:Yb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new is(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zb extends Vs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,d=null,f=null,u=null,h=null,m=null;const _=new jb,g={},p=t.getContextAttributes();let w=null,y=null;const v=[],L=[],D=new Be;let R=null;const N=new Ii;N.viewport=new Ot;const b=new Ii;b.viewport=new Ot;const M=[N,b],I=new _v;let k=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let Ae=v[te];return Ae===void 0&&(Ae=new md,v[te]=Ae),Ae.getTargetRaySpace()},this.getControllerGrip=function(te){let Ae=v[te];return Ae===void 0&&(Ae=new md,v[te]=Ae),Ae.getGripSpace()},this.getHand=function(te){let Ae=v[te];return Ae===void 0&&(Ae=new md,v[te]=Ae),Ae.getHandSpace()};function G(te){const Ae=L.indexOf(te.inputSource);if(Ae===-1)return;const oe=v[Ae];oe!==void 0&&(oe.update(te.inputSource,te.frame,l||o),oe.dispatchEvent({type:te.type,data:te.inputSource}))}function $(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",j);for(let te=0;te<v.length;te++){const Ae=L[te];Ae!==null&&(L[te]=null,v[te].disconnect(Ae))}k=null,O=null,_.reset();for(const te in g)delete g[te];e.setRenderTarget(w),h=null,u=null,f=null,r=null,y=null,yt.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",$),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(r,t)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ke=null,ne=null;p.depth&&(ne=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=p.stencil?Da:Pa,Ke=p.stencil?Ca:ks);const de={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};u=f.createProjectionLayer(de),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Fs(u.textureWidth,u.textureHeight,{format:sr,type:xr,depthTexture:new cm(u.textureWidth,u.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const oe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Fs(h.framebufferWidth,h.framebufferHeight,{format:sr,type:xr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),yt.setContext(r),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(te){for(let Ae=0;Ae<te.removed.length;Ae++){const oe=te.removed[Ae],Ke=L.indexOf(oe);Ke>=0&&(L[Ke]=null,v[Ke].disconnect(oe))}for(let Ae=0;Ae<te.added.length;Ae++){const oe=te.added[Ae];let Ke=L.indexOf(oe);if(Ke===-1){for(let de=0;de<v.length;de++)if(de>=L.length){L.push(oe),Ke=de;break}else if(L[de]===null){L[de]=oe,Ke=de;break}if(Ke===-1)break}const ne=v[Ke];ne&&ne.connect(oe)}}const re=new S,q=new S;function ge(te,Ae,oe){re.setFromMatrixPosition(Ae.matrixWorld),q.setFromMatrixPosition(oe.matrixWorld);const Ke=re.distanceTo(q),ne=Ae.projectionMatrix.elements,de=oe.projectionMatrix.elements,Q=ne[14]/(ne[10]-1),ee=ne[14]/(ne[10]+1),C=(ne[9]+1)/ne[5],me=(ne[9]-1)/ne[5],he=(ne[8]-1)/ne[0],Re=(de[8]+1)/de[0],pe=Q*he,Ve=Q*Re,ae=Ke/(-he+Re),Ee=ae*-he;if(Ae.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ee),te.translateZ(ae),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ne[10]===-1)te.projectionMatrix.copy(Ae.projectionMatrix),te.projectionMatrixInverse.copy(Ae.projectionMatrixInverse);else{const be=Q+ae,Le=ee+ae,A=pe-Ee,x=Ve+(Ke-Ee),z=C*ee/Le*be,K=me*ee/Le*be;te.projectionMatrix.makePerspective(A,x,z,K,be,Le),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Te(te,Ae){Ae===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(Ae.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let Ae=te.near,oe=te.far;_.texture!==null&&(_.depthNear>0&&(Ae=_.depthNear),_.depthFar>0&&(oe=_.depthFar)),I.near=b.near=N.near=Ae,I.far=b.far=N.far=oe,(k!==I.near||O!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),k=I.near,O=I.far),I.layers.mask=te.layers.mask|6,N.layers.mask=I.layers.mask&3,b.layers.mask=I.layers.mask&5;const Ke=te.parent,ne=I.cameras;Te(I,Ke);for(let de=0;de<ne.length;de++)Te(ne[de],Ke);ne.length===2?ge(I,N,b):I.projectionMatrix.copy(N.projectionMatrix),ze(te,I,Ke)};function ze(te,Ae,oe){oe===null?te.matrix.copy(Ae.matrixWorld):(te.matrix.copy(oe.matrixWorld),te.matrix.invert(),te.matrix.multiply(Ae.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(Ae.projectionMatrix),te.projectionMatrixInverse.copy(Ae.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=La*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&h===null))return c},this.setFoveation=function(te){c=te,u!==null&&(u.fixedFoveation=te),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(I)},this.getCameraTexture=function(te){return g[te]};let He=null;function at(te,Ae){if(d=Ae.getViewerPose(l||o),m=Ae,d!==null){const oe=d.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let Ke=!1;oe.length!==I.cameras.length&&(I.cameras.length=0,Ke=!0);for(let ee=0;ee<oe.length;ee++){const C=oe[ee];let me=null;if(h!==null)me=h.getViewport(C);else{const Re=f.getViewSubImage(u,C);me=Re.viewport,ee===0&&(e.setRenderTargetTextures(y,Re.colorTexture,Re.depthStencilTexture),e.setRenderTarget(y))}let he=M[ee];he===void 0&&(he=new Ii,he.layers.enable(ee),he.viewport=new Ot,M[ee]=he),he.matrix.fromArray(C.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(C.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(me.x,me.y,me.width,me.height),ee===0&&(I.matrix.copy(he.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ke===!0&&I.cameras.push(he)}const ne=r.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ee=f.getDepthInformation(oe[0]);ee&&ee.isValid&&ee.texture&&_.init(ee,r.renderState)}if(ne&&ne.includes("camera-access")&&(e.state.unbindTexture(),f))for(let ee=0;ee<oe.length;ee++){const C=oe[ee].camera;if(C){let me=g[C];me||(me=new Em,g[C]=me);const he=f.getCameraImage(C);me.sourceTexture=he}}}for(let oe=0;oe<v.length;oe++){const Ke=L[oe],ne=v[oe];Ke!==null&&ne!==void 0&&ne.update(Ke,Ae,l||o)}He&&He(te,Ae),Ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ae}),m=null}const yt=new ym;yt.setAnimationLoop(at),this.setAnimationLoop=function(te){He=te},this.dispose=function(){}}}const gs=new In,Kb=new $t;function Jb(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,im(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,w,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),d(g,p)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&h(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,w,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===bi&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===bi&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const w=e.get(p),y=w.envMap,v=w.envMapRotation;y&&(g.envMap.value=y,gs.copy(v),gs.x*=-1,gs.y*=-1,gs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),g.envMapRotation.value.setFromMatrix4(Kb.makeRotationFromEuler(gs)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,w,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bi&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const w=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Qb(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,y){const v=y.program;i.uniformBlockBinding(w,v)}function l(w,y){let v=r[w.id];v===void 0&&(m(w),v=d(w),r[w.id]=v,w.addEventListener("dispose",g));const L=y.program;i.updateUBOMapping(w,L);const D=e.render.frame;s[w.id]!==D&&(u(w),s[w.id]=D)}function d(w){const y=f();w.__bindingPointIndex=y;const v=n.createBuffer(),L=w.__size,D=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,L,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const y=r[w.id],v=w.uniforms,L=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let D=0,R=v.length;D<R;D++){const N=Array.isArray(v[D])?v[D]:[v[D]];for(let b=0,M=N.length;b<M;b++){const I=N[b];if(h(I,D,b,L)===!0){const k=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let $=0;$<O.length;$++){const j=O[$],re=_(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,k+G,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,G),G+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(w,y,v,L){const D=w.value,R=y+"_"+v;if(L[R]===void 0)return typeof D=="number"||typeof D=="boolean"?L[R]=D:L[R]=D.clone(),!0;{const N=L[R];if(typeof D=="number"||typeof D=="boolean"){if(N!==D)return L[R]=D,!0}else if(N.equals(D)===!1)return N.copy(D),!0}return!1}function m(w){const y=w.uniforms;let v=0;const L=16;for(let R=0,N=y.length;R<N;R++){const b=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,I=b.length;M<I;M++){const k=b[M],O=Array.isArray(k.value)?k.value:[k.value];for(let G=0,$=O.length;G<$;G++){const j=O[G],re=_(j),q=v%L,ge=q%re.boundary,Te=q+ge;v+=ge,Te!==0&&L-Te<re.storage&&(v+=L-Te),k.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=re.storage}}}const D=v%L;return D>0&&(v+=L-D),w.__size=v,w.__cache={},this}function _(w){const y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function g(w){const y=w.target;y.removeEventListener("dispose",g);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class eM{constructor(e={}){const{canvas:t=t_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const w=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=es,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let L=!1;this._outputColorSpace=pi;let D=0,R=0,N=null,b=-1,M=null;const I=new Ot,k=new Ot;let O=null;const G=new kt(0);let $=0,j=t.width,re=t.height,q=1,ge=null,Te=null;const ze=new Ot(0,0,j,re),He=new Ot(0,0,j,re);let at=!1;const yt=new ah;let te=!1,Ae=!1;const oe=new $t,Ke=new S,ne=new Ot,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function ee(){return N===null?q:1}let C=i;function me(E,H){return t.getContext(E,H)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ku}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",le,!1),C===null){const H="webgl2";if(C=me(H,E),C===null)throw me(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let he,Re,pe,Ve,ae,Ee,be,Le,A,x,z,K,X,W,Ie,xe,Ge,Xe,_e,Ne,Je,Qe,Ce,dt;function U(){he=new dS(C),he.init(),Qe=new qb(C,he),Re=new iS(C,he,e,Qe),pe=new Wb(C,he),Re.reversedDepthBuffer&&u&&pe.buffers.depth.setReversed(!0),Ve=new fS(C),ae=new Db,Ee=new Xb(C,he,pe,ae,Re,Qe,Ve),be=new sS(v),Le=new lS(v),A=new xv(C),Ce=new tS(C,A),x=new uS(C,A,Ve,Ce),z=new mS(C,x,A,Ve),_e=new pS(C,Re,Ee),xe=new rS(ae),K=new Pb(v,be,Le,he,Re,Ce,xe),X=new Jb(v,ae),W=new Ib,Ie=new zb(he),Xe=new eS(v,be,Le,pe,z,h,c),Ge=new Vb(v,z,Re),dt=new Qb(C,Ve,Re,pe),Ne=new nS(C,he,Ve),Je=new hS(C,he,Ve),Ve.programs=K.programs,v.capabilities=Re,v.extensions=he,v.properties=ae,v.renderLists=W,v.shadowMap=Ge,v.state=pe,v.info=Ve}U();const ye=new Zb(v,C);this.xr=ye,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=he.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=he.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(j,re,!1))},this.getSize=function(E){return E.set(j,re)},this.setSize=function(E,H,Z=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,re=H,t.width=Math.floor(E*q),t.height=Math.floor(H*q),Z===!0&&(t.style.width=E+"px",t.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(j*q,re*q).floor()},this.setDrawingBufferSize=function(E,H,Z){j=E,re=H,q=Z,t.width=Math.floor(E*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(ze)},this.setViewport=function(E,H,Z,J){E.isVector4?ze.set(E.x,E.y,E.z,E.w):ze.set(E,H,Z,J),pe.viewport(I.copy(ze).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(He)},this.setScissor=function(E,H,Z,J){E.isVector4?He.set(E.x,E.y,E.z,E.w):He.set(E,H,Z,J),pe.scissor(k.copy(He).multiplyScalar(q).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(E){pe.setScissorTest(at=E)},this.setOpaqueSort=function(E){ge=E},this.setTransparentSort=function(E){Te=E},this.getClearColor=function(E){return E.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,Z=!0){let J=0;if(E){let V=!1;if(N!==null){const Me=N.texture.format;V=Me===ih||Me===nh||Me===th}if(V){const Me=N.texture.type,Pe=Me===xr||Me===ks||Me===Ra||Me===Ca||Me===Qu||Me===eh,et=Xe.getClearColor(),je=Xe.getClearAlpha(),ht=et.r,_t=et.g,lt=et.b;Pe?(m[0]=ht,m[1]=_t,m[2]=lt,m[3]=je,C.clearBufferuiv(C.COLOR,0,m)):(_[0]=ht,_[1]=_t,_[2]=lt,_[3]=je,C.clearBufferiv(C.COLOR,0,_))}else J|=C.COLOR_BUFFER_BIT}H&&(J|=C.DEPTH_BUFFER_BIT),Z&&(J|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Xe.dispose(),W.dispose(),Ie.dispose(),ae.dispose(),be.dispose(),Le.dispose(),z.dispose(),Ce.dispose(),dt.dispose(),K.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",St),ye.removeEventListener("sessionend",oi),Zi.stop()};function Se(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function qe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=Ve.autoReset,H=Ge.enabled,Z=Ge.autoUpdate,J=Ge.needsUpdate,V=Ge.type;U(),Ve.autoReset=E,Ge.enabled=H,Ge.autoUpdate=Z,Ge.needsUpdate=J,Ge.type=V}function le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function se(E){const H=E.target;H.removeEventListener("dispose",se),$e(H)}function $e(E){ie(E),ae.remove(E)}function ie(E){const H=ae.get(E).programs;H!==void 0&&(H.forEach(function(Z){K.releaseProgram(Z)}),E.isShaderMaterial&&K.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,Z,J,V,Me){H===null&&(H=de);const Pe=V.isMesh&&V.matrixWorld.determinant()<0,et=Ys(E,H,Z,J,V);pe.setMaterial(J,Pe);let je=Z.index,ht=1;if(J.wireframe===!0){if(je=x.getWireframeAttribute(Z),je===void 0)return;ht=2}const _t=Z.drawRange,lt=Z.attributes.position;let xt=_t.start*ht,Nt=(_t.start+_t.count)*ht;Me!==null&&(xt=Math.max(xt,Me.start*ht),Nt=Math.min(Nt,(Me.start+Me.count)*ht)),je!==null?(xt=Math.max(xt,0),Nt=Math.min(Nt,je.count)):lt!=null&&(xt=Math.max(xt,0),Nt=Math.min(Nt,lt.count));const Yt=Nt-xt;if(Yt<0||Yt===1/0)return;Ce.setup(V,J,et,Z,je);let zt,Bt=Ne;if(je!==null&&(zt=A.get(je),Bt=Je,Bt.setIndex(zt)),V.isMesh)J.wireframe===!0?(pe.setLineWidth(J.wireframeLinewidth*ee()),Bt.setMode(C.LINES)):Bt.setMode(C.TRIANGLES);else if(V.isLine){let pt=J.linewidth;pt===void 0&&(pt=1),pe.setLineWidth(pt*ee()),V.isLineSegments?Bt.setMode(C.LINES):V.isLineLoop?Bt.setMode(C.LINE_LOOP):Bt.setMode(C.LINE_STRIP)}else V.isPoints?Bt.setMode(C.POINTS):V.isSprite&&Bt.setMode(C.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)bo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Bt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))Bt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const pt=V._multiDrawStarts,sn=V._multiDrawCounts,Ut=V._multiDrawCount,li=je?A.get(je).bytesPerElement:1,zr=ae.get(J).currentProgram.getUniforms();for(let Tn=0;Tn<Ut;Tn++)zr.setValue(C,"_gl_DrawID",Tn),Bt.render(pt[Tn]/li,sn[Tn])}else if(V.isInstancedMesh)Bt.renderInstances(xt,Yt,V.count);else if(Z.isInstancedBufferGeometry){const pt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,sn=Math.min(Z.instanceCount,pt);Bt.renderInstances(xt,Yt,sn)}else Bt.render(xt,Yt)};function Ye(E,H,Z){E.transparent===!0&&E.side===pn&&E.forceSinglePass===!1?(E.side=bi,E.needsUpdate=!0,ls(E,H,Z),E.side=Nr,E.needsUpdate=!0,ls(E,H,Z),E.side=pn):ls(E,H,Z)}this.compile=function(E,H,Z=null){Z===null&&(Z=E),p=Ie.get(Z),p.init(H),y.push(p),Z.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),E!==Z&&E.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const J=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Me=V.material;if(Me)if(Array.isArray(Me))for(let Pe=0;Pe<Me.length;Pe++){const et=Me[Pe];Ye(et,Z,V),J.add(et)}else Ye(Me,Z,V),J.add(Me)}),p=y.pop(),J},this.compileAsync=function(E,H,Z=null){const J=this.compile(E,H,Z);return new Promise(V=>{function Me(){if(J.forEach(function(Pe){ae.get(Pe).currentProgram.isReady()&&J.delete(Pe)}),J.size===0){V(E);return}setTimeout(Me,10)}he.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Ue=null;function mt(E){Ue&&Ue(E)}function St(){Zi.stop()}function oi(){Zi.start()}const Zi=new ym;Zi.setAnimationLoop(mt),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(E){Ue=E,ye.setAnimationLoop(E),E===null?Zi.stop():Zi.start()},ye.addEventListener("sessionstart",St),ye.addEventListener("sessionend",oi),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(H),H=ye.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,H,N),p=Ie.get(E,y.length),p.init(H),y.push(p),oe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),yt.setFromProjectionMatrix(oe,vr,H.reversedDepth),Ae=this.localClippingEnabled,te=xe.init(this.clippingPlanes,Ae),g=W.get(E,w.length),g.init(),w.push(g),ye.enabled===!0&&ye.isPresenting===!0){const Me=v.xr.getDepthSensingMesh();Me!==null&&Jn(Me,H,-1/0,v.sortObjects)}Jn(E,H,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ge,Te),Q=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Q&&Xe.addToRenderList(g,E),this.info.render.frame++,te===!0&&xe.beginShadows();const Z=p.state.shadowsArray;Ge.render(Z,E,H),te===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=g.opaque,V=g.transmissive;if(p.setupLights(),H.isArrayCamera){const Me=H.cameras;if(V.length>0)for(let Pe=0,et=Me.length;Pe<et;Pe++){const je=Me[Pe];Ko(J,V,E,je)}Q&&Xe.render(E);for(let Pe=0,et=Me.length;Pe<et;Pe++){const je=Me[Pe];as(g,E,je,je.viewport)}}else V.length>0&&Ko(J,V,E,H),Q&&Xe.render(E),as(g,E,H);N!==null&&R===0&&(Ee.updateMultisampleRenderTarget(N),Ee.updateRenderTargetMipmap(N)),E.isScene===!0&&E.onAfterRender(v,E,H),Ce.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],te===!0&&xe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function Jn(E,H,Z,J){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||yt.intersectsSprite(E)){J&&ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(oe);const Pe=z.update(E),et=E.material;et.visible&&g.push(E,Pe,et,Z,ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||yt.intersectsObject(E))){const Pe=z.update(E),et=E.material;if(J&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ne.copy(E.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ne.copy(Pe.boundingSphere.center)),ne.applyMatrix4(E.matrixWorld).applyMatrix4(oe)),Array.isArray(et)){const je=Pe.groups;for(let ht=0,_t=je.length;ht<_t;ht++){const lt=je[ht],xt=et[lt.materialIndex];xt&&xt.visible&&g.push(E,Pe,xt,Z,ne.z,lt)}}else et.visible&&g.push(E,Pe,et,Z,ne.z,null)}}const Me=E.children;for(let Pe=0,et=Me.length;Pe<et;Pe++)Jn(Me[Pe],H,Z,J)}function as(E,H,Z,J){const V=E.opaque,Me=E.transmissive,Pe=E.transparent;p.setupLightsView(Z),te===!0&&xe.setGlobalState(v.clippingPlanes,Z),J&&pe.viewport(I.copy(J)),V.length>0&&ai(V,H,Z),Me.length>0&&ai(Me,H,Z),Pe.length>0&&ai(Pe,H,Z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Ko(E,H,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Fs(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?Qa:xr,minFilter:As,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));const Me=p.state.transmissionRenderTarget[J.id],Pe=J.viewport||I;Me.setSize(Pe.z*v.transmissionResolutionScale,Pe.w*v.transmissionResolutionScale);const et=v.getRenderTarget(),je=v.getActiveCubeFace(),ht=v.getActiveMipmapLevel();v.setRenderTarget(Me),v.getClearColor(G),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),Q&&Xe.render(Z);const _t=v.toneMapping;v.toneMapping=es;const lt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),te===!0&&xe.setGlobalState(v.clippingPlanes,J),ai(E,Z,J),Ee.updateMultisampleRenderTarget(Me),Ee.updateRenderTargetMipmap(Me),he.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Nt=0,Yt=H.length;Nt<Yt;Nt++){const zt=H[Nt],Bt=zt.object,pt=zt.geometry,sn=zt.material,Ut=zt.group;if(sn.side===pn&&Bt.layers.test(J.layers)){const li=sn.side;sn.side=bi,sn.needsUpdate=!0,cs(Bt,Z,J,pt,sn,Ut),sn.side=li,sn.needsUpdate=!0,xt=!0}}xt===!0&&(Ee.updateMultisampleRenderTarget(Me),Ee.updateRenderTargetMipmap(Me))}v.setRenderTarget(et,je,ht),v.setClearColor(G,$),lt!==void 0&&(J.viewport=lt),v.toneMapping=_t}function ai(E,H,Z){const J=H.isScene===!0?H.overrideMaterial:null;for(let V=0,Me=E.length;V<Me;V++){const Pe=E[V],et=Pe.object,je=Pe.geometry,ht=Pe.group;let _t=Pe.material;_t.allowOverride===!0&&J!==null&&(_t=J),et.layers.test(Z.layers)&&cs(et,H,Z,je,_t,ht)}}function cs(E,H,Z,J,V,Me){E.onBeforeRender(v,H,Z,J,V,Me),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(v,H,Z,J,E,Me),V.transparent===!0&&V.side===pn&&V.forceSinglePass===!1?(V.side=bi,V.needsUpdate=!0,v.renderBufferDirect(Z,H,J,V,E,Me),V.side=Nr,V.needsUpdate=!0,v.renderBufferDirect(Z,H,J,V,E,Me),V.side=pn):v.renderBufferDirect(Z,H,J,V,E,Me),E.onAfterRender(v,H,Z,J,V,Me)}function ls(E,H,Z){H.isScene!==!0&&(H=de);const J=ae.get(E),V=p.state.lights,Me=p.state.shadowsArray,Pe=V.state.version,et=K.getParameters(E,V.state,Me,H,Z),je=K.getProgramCacheKey(et);let ht=J.programs;J.environment=E.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(E.isMeshStandardMaterial?Le:be).get(E.envMap||J.environment),J.envMapRotation=J.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,ht===void 0&&(E.addEventListener("dispose",se),ht=new Map,J.programs=ht);let _t=ht.get(je);if(_t!==void 0){if(J.currentProgram===_t&&J.lightsStateVersion===Pe)return $s(E,et),_t}else et.uniforms=K.getUniforms(E),E.onBeforeCompile(et,v),_t=K.acquireProgram(et,je),ht.set(je,_t),J.uniforms=et.uniforms;const lt=J.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(lt.clippingPlanes=xe.uniform),$s(E,et),J.needsLights=js(E),J.lightsStateVersion=Pe,J.needsLights&&(lt.ambientLightColor.value=V.state.ambient,lt.lightProbe.value=V.state.probe,lt.directionalLights.value=V.state.directional,lt.directionalLightShadows.value=V.state.directionalShadow,lt.spotLights.value=V.state.spot,lt.spotLightShadows.value=V.state.spotShadow,lt.rectAreaLights.value=V.state.rectArea,lt.ltc_1.value=V.state.rectAreaLTC1,lt.ltc_2.value=V.state.rectAreaLTC2,lt.pointLights.value=V.state.point,lt.pointLightShadows.value=V.state.pointShadow,lt.hemisphereLights.value=V.state.hemi,lt.directionalShadowMap.value=V.state.directionalShadowMap,lt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,lt.spotShadowMap.value=V.state.spotShadowMap,lt.spotLightMatrix.value=V.state.spotLightMatrix,lt.spotLightMap.value=V.state.spotLightMap,lt.pointShadowMap.value=V.state.pointShadowMap,lt.pointShadowMatrix.value=V.state.pointShadowMatrix),J.currentProgram=_t,J.uniformsList=null,_t}function Jo(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=tl.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function $s(E,H){const Z=ae.get(E);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function Ys(E,H,Z,J,V){H.isScene!==!0&&(H=de),Ee.resetTextureUnits();const Me=H.fog,Pe=J.isMeshStandardMaterial?H.environment:null,et=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Lo,je=(J.isMeshStandardMaterial?Le:be).get(J.envMap||Pe),ht=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,_t=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),lt=!!Z.morphAttributes.position,xt=!!Z.morphAttributes.normal,Nt=!!Z.morphAttributes.color;let Yt=es;J.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Yt=v.toneMapping);const zt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Bt=zt!==void 0?zt.length:0,pt=ae.get(J),sn=p.state.lights;if(te===!0&&(Ae===!0||E!==M)){const qn=E===M&&J.id===b;xe.setState(J,E,qn)}let Ut=!1;J.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==sn.state.version||pt.outputColorSpace!==et||V.isBatchedMesh&&pt.batching===!1||!V.isBatchedMesh&&pt.batching===!0||V.isBatchedMesh&&pt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&pt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&pt.instancing===!1||!V.isInstancedMesh&&pt.instancing===!0||V.isSkinnedMesh&&pt.skinning===!1||!V.isSkinnedMesh&&pt.skinning===!0||V.isInstancedMesh&&pt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&pt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&pt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&pt.instancingMorph===!1&&V.morphTexture!==null||pt.envMap!==je||J.fog===!0&&pt.fog!==Me||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==xe.numPlanes||pt.numIntersection!==xe.numIntersection)||pt.vertexAlphas!==ht||pt.vertexTangents!==_t||pt.morphTargets!==lt||pt.morphNormals!==xt||pt.morphColors!==Nt||pt.toneMapping!==Yt||pt.morphTargetsCount!==Bt)&&(Ut=!0):(Ut=!0,pt.__version=J.version);let li=pt.currentProgram;Ut===!0&&(li=ls(J,H,V));let zr=!1,Tn=!1,hr=!1;const Zt=li.getUniforms(),bn=pt.uniforms;if(pe.useProgram(li.program)&&(zr=!0,Tn=!0,hr=!0),J.id!==b&&(b=J.id,Tn=!0),zr||M!==E){pe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Zt.setValue(C,"projectionMatrix",E.projectionMatrix),Zt.setValue(C,"viewMatrix",E.matrixWorldInverse);const Qn=Zt.map.cameraPosition;Qn!==void 0&&Qn.setValue(C,Ke.setFromMatrixPosition(E.matrixWorld)),Re.logarithmicDepthBuffer&&Zt.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Zt.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Tn=!0,hr=!0)}if(V.isSkinnedMesh){Zt.setOptional(C,V,"bindMatrix"),Zt.setOptional(C,V,"bindMatrixInverse");const qn=V.skeleton;qn&&(qn.boneTexture===null&&qn.computeBoneTexture(),Zt.setValue(C,"boneTexture",qn.boneTexture,Ee))}V.isBatchedMesh&&(Zt.setOptional(C,V,"batchingTexture"),Zt.setValue(C,"batchingTexture",V._matricesTexture,Ee),Zt.setOptional(C,V,"batchingIdTexture"),Zt.setValue(C,"batchingIdTexture",V._indirectTexture,Ee),Zt.setOptional(C,V,"batchingColorTexture"),V._colorsTexture!==null&&Zt.setValue(C,"batchingColorTexture",V._colorsTexture,Ee));const Xn=Z.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&_e.update(V,Z,li),(Tn||pt.receiveShadow!==V.receiveShadow)&&(pt.receiveShadow=V.receiveShadow,Zt.setValue(C,"receiveShadow",V.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(bn.envMap.value=je,bn.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&H.environment!==null&&(bn.envMapIntensity.value=H.environmentIntensity),Tn&&(Zt.setValue(C,"toneMappingExposure",v.toneMappingExposure),pt.needsLights&&$l(bn,hr),Me&&J.fog===!0&&X.refreshFogUniforms(bn,Me),X.refreshMaterialUniforms(bn,J,q,re,p.state.transmissionRenderTarget[E.id]),tl.upload(C,Jo(pt),bn,Ee)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(tl.upload(C,Jo(pt),bn,Ee),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Zt.setValue(C,"center",V.center),Zt.setValue(C,"modelViewMatrix",V.modelViewMatrix),Zt.setValue(C,"normalMatrix",V.normalMatrix),Zt.setValue(C,"modelMatrix",V.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const qn=J.uniformsGroups;for(let Qn=0,Zs=qn.length;Qn<Zs;Qn++){const Ki=qn[Qn];dt.update(Ki,li),dt.bind(Ki,li)}}return li}function $l(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function js(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,H,Z){const J=ae.get(E);J.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ae.get(E.texture).__webglTexture=H,ae.get(E.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Z,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){const Z=ae.get(E);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0};const ur=C.createFramebuffer();this.setRenderTarget=function(E,H=0,Z=0){N=E,D=H,R=Z;let J=!0,V=null,Me=!1,Pe=!1;if(E){const je=ae.get(E);if(je.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(C.FRAMEBUFFER,null),J=!1;else if(je.__webglFramebuffer===void 0)Ee.setupRenderTarget(E);else if(je.__hasExternalTextures)Ee.rebindTextures(E,ae.get(E.texture).__webglTexture,ae.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const lt=E.depthTexture;if(je.__boundDepthTexture!==lt){if(lt!==null&&ae.has(lt)&&(E.width!==lt.image.width||E.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ee.setupDepthRenderbuffer(E)}}const ht=E.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(Pe=!0);const _t=ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(_t[H])?V=_t[H][Z]:V=_t[H],Me=!0):E.samples>0&&Ee.useMultisampledRTT(E)===!1?V=ae.get(E).__webglMultisampledFramebuffer:Array.isArray(_t)?V=_t[Z]:V=_t,I.copy(E.viewport),k.copy(E.scissor),O=E.scissorTest}else I.copy(ze).multiplyScalar(q).floor(),k.copy(He).multiplyScalar(q).floor(),O=at;if(Z!==0&&(V=ur),pe.bindFramebuffer(C.FRAMEBUFFER,V)&&J&&pe.drawBuffers(E,V),pe.viewport(I),pe.scissor(k),pe.setScissorTest(O),Me){const je=ae.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+H,je.__webglTexture,Z)}else if(Pe){const je=H;for(let ht=0;ht<E.textures.length;ht++){const _t=ae.get(E.textures[ht]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ht,_t.__webglTexture,Z,je)}}else if(E!==null&&Z!==0){const je=ae.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,je.__webglTexture,Z)}b=-1},this.readRenderTargetPixels=function(E,H,Z,J,V,Me,Pe,et=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(je=je[Pe]),je){pe.bindFramebuffer(C.FRAMEBUFFER,je);try{const ht=E.textures[et],_t=ht.format,lt=ht.type;if(!Re.textureFormatReadable(_t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-J&&Z>=0&&Z<=E.height-V&&(E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+et),C.readPixels(H,Z,J,V,Qe.convert(_t),Qe.convert(lt),Me))}finally{const ht=N!==null?ae.get(N).__webglFramebuffer:null;pe.bindFramebuffer(C.FRAMEBUFFER,ht)}}},this.readRenderTargetPixelsAsync=async function(E,H,Z,J,V,Me,Pe,et=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(je=je[Pe]),je)if(H>=0&&H<=E.width-J&&Z>=0&&Z<=E.height-V){pe.bindFramebuffer(C.FRAMEBUFFER,je);const ht=E.textures[et],_t=ht.format,lt=ht.type;if(!Re.textureFormatReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,xt),C.bufferData(C.PIXEL_PACK_BUFFER,Me.byteLength,C.STREAM_READ),E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+et),C.readPixels(H,Z,J,V,Qe.convert(_t),Qe.convert(lt),0);const Nt=N!==null?ae.get(N).__webglFramebuffer:null;pe.bindFramebuffer(C.FRAMEBUFFER,Nt);const Yt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await n_(C,Yt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,xt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Me),C.deleteBuffer(xt),C.deleteSync(Yt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,H=null,Z=0){const J=Math.pow(2,-Z),V=Math.floor(E.image.width*J),Me=Math.floor(E.image.height*J),Pe=H!==null?H.x:0,et=H!==null?H.y:0;Ee.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,Z,0,0,Pe,et,V,Me),pe.unbindTexture()};const ci=C.createFramebuffer(),Ci=C.createFramebuffer();this.copyTextureToTexture=function(E,H,Z=null,J=null,V=0,Me=null){Me===null&&(V!==0?(bo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=V,V=0):Me=0);let Pe,et,je,ht,_t,lt,xt,Nt,Yt;const zt=E.isCompressedTexture?E.mipmaps[Me]:E.image;if(Z!==null)Pe=Z.max.x-Z.min.x,et=Z.max.y-Z.min.y,je=Z.isBox3?Z.max.z-Z.min.z:1,ht=Z.min.x,_t=Z.min.y,lt=Z.isBox3?Z.min.z:0;else{const Xn=Math.pow(2,-V);Pe=Math.floor(zt.width*Xn),et=Math.floor(zt.height*Xn),E.isDataArrayTexture?je=zt.depth:E.isData3DTexture?je=Math.floor(zt.depth*Xn):je=1,ht=0,_t=0,lt=0}J!==null?(xt=J.x,Nt=J.y,Yt=J.z):(xt=0,Nt=0,Yt=0);const Bt=Qe.convert(H.format),pt=Qe.convert(H.type);let sn;H.isData3DTexture?(Ee.setTexture3D(H,0),sn=C.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Ee.setTexture2DArray(H,0),sn=C.TEXTURE_2D_ARRAY):(Ee.setTexture2D(H,0),sn=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);const Ut=C.getParameter(C.UNPACK_ROW_LENGTH),li=C.getParameter(C.UNPACK_IMAGE_HEIGHT),zr=C.getParameter(C.UNPACK_SKIP_PIXELS),Tn=C.getParameter(C.UNPACK_SKIP_ROWS),hr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,zt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,zt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ht),C.pixelStorei(C.UNPACK_SKIP_ROWS,_t),C.pixelStorei(C.UNPACK_SKIP_IMAGES,lt);const Zt=E.isDataArrayTexture||E.isData3DTexture,bn=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){const Xn=ae.get(E),qn=ae.get(H),Qn=ae.get(Xn.__renderTarget),Zs=ae.get(qn.__renderTarget);pe.bindFramebuffer(C.READ_FRAMEBUFFER,Qn.__webglFramebuffer),pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,Zs.__webglFramebuffer);for(let Ki=0;Ki<je;Ki++)Zt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ae.get(E).__webglTexture,V,lt+Ki),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ae.get(H).__webglTexture,Me,Yt+Ki)),C.blitFramebuffer(ht,_t,Pe,et,xt,Nt,Pe,et,C.DEPTH_BUFFER_BIT,C.NEAREST);pe.bindFramebuffer(C.READ_FRAMEBUFFER,null),pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||ae.has(E)){const Xn=ae.get(E),qn=ae.get(H);pe.bindFramebuffer(C.READ_FRAMEBUFFER,ci),pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ci);for(let Qn=0;Qn<je;Qn++)Zt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Xn.__webglTexture,V,lt+Qn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Xn.__webglTexture,V),bn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,qn.__webglTexture,Me,Yt+Qn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,qn.__webglTexture,Me),V!==0?C.blitFramebuffer(ht,_t,Pe,et,xt,Nt,Pe,et,C.COLOR_BUFFER_BIT,C.NEAREST):bn?C.copyTexSubImage3D(sn,Me,xt,Nt,Yt+Qn,ht,_t,Pe,et):C.copyTexSubImage2D(sn,Me,xt,Nt,ht,_t,Pe,et);pe.bindFramebuffer(C.READ_FRAMEBUFFER,null),pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else bn?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(sn,Me,xt,Nt,Yt,Pe,et,je,Bt,pt,zt.data):H.isCompressedArrayTexture?C.compressedTexSubImage3D(sn,Me,xt,Nt,Yt,Pe,et,je,Bt,zt.data):C.texSubImage3D(sn,Me,xt,Nt,Yt,Pe,et,je,Bt,pt,zt):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Me,xt,Nt,Pe,et,Bt,pt,zt.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Me,xt,Nt,zt.width,zt.height,Bt,zt.data):C.texSubImage2D(C.TEXTURE_2D,Me,xt,Nt,Pe,et,Bt,pt,zt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ut),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,li),C.pixelStorei(C.UNPACK_SKIP_PIXELS,zr),C.pixelStorei(C.UNPACK_SKIP_ROWS,Tn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,hr),Me===0&&H.generateMipmaps&&C.generateMipmap(sn),pe.unbindTexture()},this.copyTextureToTexture3D=function(E,H,Z=null,J=null,V=0){return bo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,H,Z,J,V)},this.initRenderTarget=function(E){ae.get(E).__webglFramebuffer===void 0&&Ee.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ee.setTextureCube(E,0):E.isData3DTexture?Ee.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ee.setTexture2DArray(E,0):Ee.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){D=0,R=0,N=null,pe.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Gt._getUnpackColorSpace()}}const jf={type:"change"},ph={type:"start"},Tm={type:"end"},Oc=new ec,Zf=new jr,tM=Math.cos(70*jt.DEG2RAD),kn=new S,gi=2*Math.PI,Jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cd=1e-6;class nM extends xm{constructor(e,t=null){super(e,t),this.state=Jt.NONE,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yo.ROTATE,MIDDLE:yo.DOLLY,RIGHT:yo.PAN},this.touches={ONE:go.ROTATE,TWO:go.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new S,this._lastQuaternion=new cn,this._lastTargetPosition=new S,this._quat=new cn().setFromUnitVectors(e.up,new S(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mf,this._sphericalDelta=new Mf,this._scale=1,this._panOffset=new S,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new S,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rM.bind(this),this._onPointerDown=iM.bind(this),this._onPointerUp=sM.bind(this),this._onContextMenu=hM.bind(this),this._onMouseWheel=cM.bind(this),this._onKeyDown=lM.bind(this),this._onTouchStart=dM.bind(this),this._onTouchMove=uM.bind(this),this._onMouseDown=oM.bind(this),this._onMouseMove=aM.bind(this),this._interceptControlDown=fM.bind(this),this._interceptControlUp=pM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jf),this.update(),this.state=Jt.NONE}update(e=null){const t=this.object.position;kn.copy(t).sub(this.target),kn.applyQuaternion(this._quat),this._spherical.setFromVector3(kn),this.autoRotate&&this.state===Jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=gi:i>Math.PI&&(i-=gi),r<-Math.PI?r+=gi:r>Math.PI&&(r-=gi),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(kn.setFromSpherical(this._spherical),kn.applyQuaternion(this._quatInverse),t.copy(this.target).add(kn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=kn.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new S(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new S(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=kn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Oc.origin.copy(this.object.position),Oc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oc.direction))<tM?this.object.lookAt(this.target):(Zf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oc.intersectPlane(Zf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Cd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cd||this._lastTargetPosition.distanceToSquared(this.target)>Cd?(this.dispatchEvent(jf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?gi/60*this.autoRotateSpeed*e:gi/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){kn.setFromMatrixColumn(t,0),kn.multiplyScalar(-e),this._panOffset.add(kn)}_panUp(e,t){this.screenSpacePanning===!0?kn.setFromMatrixColumn(t,1):(kn.setFromMatrixColumn(t,0),kn.crossVectors(this.object.up,kn)),kn.multiplyScalar(e),this._panOffset.add(kn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;kn.copy(r).sub(this.target);let s=kn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(gi*this._rotateDelta.x/t.clientHeight),this._rotateUp(gi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-gi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(gi*this._rotateDelta.x/t.clientHeight),this._rotateUp(gi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function iM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function rM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function sM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tm),this.state=Jt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function oM(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case yo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Jt.DOLLY;break;case yo.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Jt.ROTATE}break;case yo.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Jt.PAN}break;default:this.state=Jt.NONE}this.state!==Jt.NONE&&this.dispatchEvent(ph)}function aM(n){switch(this.state){case Jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function cM(n){this.enabled===!1||this.enableZoom===!1||this.state!==Jt.NONE||(n.preventDefault(),this.dispatchEvent(ph),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Tm))}function lM(n){this.enabled!==!1&&this._handleKeyDown(n)}function dM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case go.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Jt.TOUCH_ROTATE;break;case go.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Jt.TOUCH_PAN;break;default:this.state=Jt.NONE}break;case 2:switch(this.touches.TWO){case go.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Jt.TOUCH_DOLLY_PAN;break;case go.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Jt.TOUCH_DOLLY_ROTATE;break;default:this.state=Jt.NONE}break;default:this.state=Jt.NONE}this.state!==Jt.NONE&&this.dispatchEvent(ph)}function uM(n){switch(this._trackPointer(n),this.state){case Jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Jt.NONE}}function hM(n){this.enabled!==!1&&n.preventDefault()}function fM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function pM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _s=new vm,ri=new S,qr=new S,fn=new cn,Kf={X:new S(1,0,0),Y:new S(0,1,0),Z:new S(0,0,1)},Pd={type:"change"},Jf={type:"mouseDown",mode:null},Qf={type:"mouseUp",mode:null},ep={type:"objectChange"};class mM extends xm{constructor(e,t=null){super(void 0,t);const i=new SM(this);this._root=i;const r=new bM;this._gizmo=r,i.add(r);const s=new MM;this._plane=s,i.add(s);const o=this;function a(y,v){let L=v;Object.defineProperty(o,y,{get:function(){return L!==void 0?L:v},set:function(D){L!==D&&(L=D,s[y]=D,r[y]=D,o.dispatchEvent({type:y+"-changed",value:D}),o.dispatchEvent(Pd))}}),o[y]=v,s[y]=v,r[y]=v}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const c=new S,l=new S,d=new cn,f=new cn,u=new S,h=new cn,m=new S,_=new S,g=new S,p=0,w=new S;a("worldPosition",c),a("worldPositionStart",l),a("worldQuaternion",d),a("worldQuaternionStart",f),a("cameraPosition",u),a("cameraQuaternion",h),a("pointStart",m),a("pointEnd",_),a("rotationAxis",g),a("rotationAngle",p),a("eye",w),this._offset=new S,this._startNorm=new S,this._endNorm=new S,this._cameraScale=new S,this._parentPosition=new S,this._parentQuaternion=new cn,this._parentQuaternionInv=new cn,this._parentScale=new S,this._worldScaleStart=new S,this._worldQuaternionInv=new cn,this._worldScale=new S,this._positionStart=new S,this._quaternionStart=new cn,this._scaleStart=new S,this._getPointer=gM.bind(this),this._onPointerDown=vM.bind(this),this._onPointerHover=_M.bind(this),this._onPointerMove=xM.bind(this),this._onPointerUp=yM.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&_s.setFromCamera(e,this.camera);const t=Dd(this._gizmo.picker[this.mode],_s);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&_s.setFromCamera(e,this.camera);const t=Dd(this._plane,_s,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Jf.mode=this.mode,this.dispatchEvent(Jf)}}pointerMove(e){const t=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&_s.setFromCamera(e,this.camera);const o=Dd(this._plane,_s,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(fn.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(ri.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(ri.setFromMatrixPosition(r.parent.matrixWorld)))),r.position.x=Math.max(this.minX,Math.min(this.maxX,r.position.x)),r.position.y=Math.max(this.minY,Math.min(this.maxY,r.position.y)),r.position.z=Math.max(this.minZ,Math.min(this.maxZ,r.position.z));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),qr.set(a,a,a)}else ri.copy(this.pointStart),qr.copy(this.pointEnd),ri.applyQuaternion(this._worldQuaternionInv),qr.applyQuaternion(this._worldQuaternionInv),qr.divide(ri),t.search("X")===-1&&(qr.x=1),t.search("Y")===-1&&(qr.y=1),t.search("Z")===-1&&(qr.z=1);r.scale.copy(this._scaleStart).multiply(qr),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(ri.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(ri.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Kf[t]),ri.copy(Kf[t]),s==="local"&&ri.applyQuaternion(this.worldQuaternion),ri.cross(this.eye),ri.length()===0?c=!0:this.rotationAngle=this._offset.dot(ri.normalize())*a),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(fn.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(fn.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Pd),this.dispatchEvent(ep)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Qf.mode=this.mode,this.dispatchEvent(Qf)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Pd),this.dispatchEvent(ep),this.pointStart.copy(this.pointEnd))}getRaycaster(){return _s}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,i,r){const s=this._gizmo.materialLib;s.xAxis.color.set(e),s.yAxis.color.set(t),s.zAxis.color.set(i),s.active.color.set(r),s.xAxisTransparent.color.set(e),s.yAxisTransparent.color.set(t),s.zAxisTransparent.color.set(i),s.activeTransparent.color.set(r),s.xAxis._color&&s.xAxis._color.set(e),s.yAxis._color&&s.yAxis._color.set(t),s.zAxis._color&&s.zAxis._color.set(i),s.active._color&&s.active._color.set(r),s.xAxisTransparent._color&&s.xAxisTransparent._color.set(e),s.yAxisTransparent._color&&s.yAxisTransparent._color.set(t),s.zAxisTransparent._color&&s.zAxisTransparent._color.set(i),s.activeTransparent._color&&s.activeTransparent._color.set(r)}}function gM(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{const e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function _M(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function vM(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function xM(n){this.enabled&&this.pointerMove(this._getPointer(n))}function yM(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function Dd(n,e,t){const i=e.intersectObject(n,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||t)return i[r];return!1}const zc=new In,Qt=new S(0,1,0),tp=new S(0,0,0),np=new $t,Bc=new cn,nl=new cn,pr=new S,ip=new $t,ga=new S(1,0,0),ys=new S(0,1,0),_a=new S(0,0,1),Hc=new S,sa=new S,oa=new S;class SM extends xn{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class bM extends xn{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new Mn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new wi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const l=e.clone();l.color.setHex(65280),l.opacity=.5;const d=e.clone();d.color.setHex(255),d.opacity=.5;const f=e.clone();f.opacity=.25;const u=e.clone();u.color.setHex(16776960),u.opacity=.25;const h=e.clone();h.color.setHex(16776960);const m=e.clone();m.color.setHex(7895160),this.materialLib={xAxis:s,yAxis:o,zAxis:a,active:h,xAxisTransparent:c,yAxisTransparent:l,zAxisTransparent:d,activeTransparent:u};const _=new ii(0,.04,.1,12);_.translate(0,.05,0);const g=new Cn(.08,.08,.08);g.translate(0,.04,0);const p=new Ft;p.setAttribute("position",new Dt([0,0,0,1,0,0],3));const w=new ii(.0075,.0075,.5,3);w.translate(0,.25,0);function y($,j){const re=new Ms($,.0075,3,64,j*Math.PI*2);return re.rotateY(Math.PI/2),re.rotateX(Math.PI/2),re}function v(){const $=new Ft;return $.setAttribute("position",new Dt([0,0,0,1,1,1],3)),$}const L={X:[[new we(_,s),[.5,0,0],[0,0,-Math.PI/2]],[new we(_,s),[-.5,0,0],[0,0,Math.PI/2]],[new we(w,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new we(_,o),[0,.5,0]],[new we(_,o),[0,-.5,0],[Math.PI,0,0]],[new we(w,o)]],Z:[[new we(_,a),[0,0,.5],[Math.PI/2,0,0]],[new we(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new we(w,a),null,[Math.PI/2,0,0]]],XYZ:[[new we(new Rs(.1,0),f),[0,0,0]]],XY:[[new we(new Cn(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new we(new Cn(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new we(new Cn(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},D={X:[[new we(new ii(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new we(new ii(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new we(new ii(.2,0,.6,4),i),[0,.3,0]],[new we(new ii(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new we(new ii(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new we(new ii(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new we(new Rs(.2,0),i)]],XY:[[new we(new Cn(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new we(new Cn(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new we(new Cn(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},R={START:[[new we(new Rs(.01,2),r),null,null,null,"helper"]],END:[[new we(new Rs(.01,2),r),null,null,null,"helper"]],DELTA:[[new an(v(),r),null,null,null,"helper"]],X:[[new an(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new an(p,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new an(p,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},N={XYZE:[[new we(y(.5,1),m),null,[0,Math.PI/2,0]]],X:[[new we(y(.5,.5),s)]],Y:[[new we(y(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new we(y(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new we(y(.75,1),u),null,[0,Math.PI/2,0]]]},b={AXIS:[[new an(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new we(new ts(.25,10,8),i)]],X:[[new we(new Ms(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new we(new Ms(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new we(new Ms(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new we(new Ms(.75,.1,2,24),i)]]},I={X:[[new we(g,s),[.5,0,0],[0,0,-Math.PI/2]],[new we(w,s),[0,0,0],[0,0,-Math.PI/2]],[new we(g,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new we(g,o),[0,.5,0]],[new we(w,o)],[new we(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new we(g,a),[0,0,.5],[Math.PI/2,0,0]],[new we(w,a),[0,0,0],[Math.PI/2,0,0]],[new we(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new we(new Cn(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new we(new Cn(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new we(new Cn(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new we(new Cn(.1,.1,.1),f)]]},k={X:[[new we(new ii(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new we(new ii(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new we(new ii(.2,0,.6,4),i),[0,.3,0]],[new we(new ii(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new we(new ii(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new we(new ii(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new we(new Cn(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new we(new Cn(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new we(new Cn(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new we(new Cn(.2,.2,.2),i),[0,0,0]]]},O={X:[[new an(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new an(p,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new an(p,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function G($){const j=new xn;for(const re in $)for(let q=$[re].length;q--;){const ge=$[re][q][0].clone(),Te=$[re][q][1],ze=$[re][q][2],He=$[re][q][3],at=$[re][q][4];ge.name=re,ge.tag=at,Te&&ge.position.set(Te[0],Te[1],Te[2]),ze&&ge.rotation.set(ze[0],ze[1],ze[2]),He&&ge.scale.set(He[0],He[1],He[2]),ge.updateMatrix();const yt=ge.geometry.clone();yt.applyMatrix4(ge.matrix),ge.geometry=yt,ge.renderOrder=1/0,ge.position.set(0,0,0),ge.rotation.set(0,0,0),ge.scale.set(1,1,1),j.add(ge)}return j}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=G(L)),this.add(this.gizmo.rotate=G(N)),this.add(this.gizmo.scale=G(I)),this.add(this.picker.translate=G(D)),this.add(this.picker.rotate=G(M)),this.add(this.picker.scale=G(k)),this.add(this.helper.translate=G(R)),this.add(this.helper.rotate=G(b)),this.add(this.helper.scale=G(O)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:nl;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(fn.setFromEuler(zc.set(0,0,0)),o.quaternion.copy(i).multiply(fn),Math.abs(Qt.copy(ga).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(fn.setFromEuler(zc.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(fn),Math.abs(Qt.copy(ys).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(fn.setFromEuler(zc.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(fn),Math.abs(Qt.copy(_a).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(fn.setFromEuler(zc.set(0,Math.PI/2,0)),Qt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(np.lookAt(tp,Qt,ys)),o.quaternion.multiply(fn),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),ri.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),ri.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(ri),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Qt.copy(ga).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Qt.copy(ys).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Qt.copy(_a).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Qt.copy(_a).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Qt.copy(ga).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Qt.copy(ys).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Bc.copy(i),Qt.copy(this.eye).applyQuaternion(fn.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(np.lookAt(this.eye,tp,ys)),o.name==="X"&&(fn.setFromAxisAngle(ga,Math.atan2(-Qt.y,Qt.z)),fn.multiplyQuaternions(Bc,fn),o.quaternion.copy(fn)),o.name==="Y"&&(fn.setFromAxisAngle(ys,Math.atan2(Qt.x,Qt.z)),fn.multiplyQuaternions(Bc,fn),o.quaternion.copy(fn)),o.name==="Z"&&(fn.setFromAxisAngle(_a,Math.atan2(Qt.y,Qt.x)),fn.multiplyQuaternions(Bc,fn),o.quaternion.copy(fn))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(c){return o.name===c})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}}class MM extends we{constructor(){super(new is(1e5,1e5,2,2),new Mn({visible:!1,wireframe:!0,side:pn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Hc.copy(ga).applyQuaternion(t==="local"?this.worldQuaternion:nl),sa.copy(ys).applyQuaternion(t==="local"?this.worldQuaternion:nl),oa.copy(_a).applyQuaternion(t==="local"?this.worldQuaternion:nl),Qt.copy(sa),this.mode){case"translate":case"scale":switch(this.axis){case"X":Qt.copy(this.eye).cross(Hc),pr.copy(Hc).cross(Qt);break;case"Y":Qt.copy(this.eye).cross(sa),pr.copy(sa).cross(Qt);break;case"Z":Qt.copy(this.eye).cross(oa),pr.copy(oa).cross(Qt);break;case"XY":pr.copy(oa);break;case"YZ":pr.copy(Hc);break;case"XZ":Qt.copy(oa),pr.copy(sa);break;case"XYZ":case"E":pr.set(0,0,0);break}break;default:pr.set(0,0,0)}pr.length()===0?this.quaternion.copy(this.cameraQuaternion):(ip.lookAt(ri.set(0,0,0),pr,Qt),this.quaternion.setFromRotationMatrix(ip)),super.updateMatrixWorld(e)}}function wM(n,e=!0){n.userData.terrainContours=!0,n.userData.contourSmoothing=e,n.onBeforeCompile=t=>{t.uniforms.contourWidth={value:n.userData.contourSmoothing?1.2:.8},t.vertexShader=`varying float vContourHeight;
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
    `)},n.customProgramCacheKey=()=>`terrain-contours-hillshade-${n.userData.contourSmoothing?1:0}`}const Vc=32,EM=.025,mr=EM;function Am(n,e){const t=new wn,i=new Mn({vertexColors:!0,transparent:!0,opacity:.88,side:pn,depthWrite:!0});e&&wM(i,e.smoothing);const r=[],s=new kt,o=new Float32Array(n.size*n.size*3),a=new Uint32Array(n.size*n.size);let c=0,l=!1;for(let h=0;h<n.size-1;h+=Vc)for(let m=0;m<n.size-1;m+=Vc){const _=Math.min(n.size-1,m+Vc),g=Math.min(n.size-1,h+Vc),p=(_-m)*(g-h)*12*3,w=new Fi(new Float32Array(p),3).setUsage(dl),y=new Fi(new Float32Array(p),3).setUsage(dl),v=new Ft;v.setAttribute("position",w),v.setAttribute("color",y);const L=-n.extent+m*n.spacing,D=-n.extent+_*n.spacing,R=-n.extentZ+h*n.spacingZ,N=-n.extentZ+g*n.spacingZ;v.boundingBox=new Vo(new S(L,0,R),new S(D,180,N)),v.boundingSphere=v.boundingBox.getBoundingSphere(new Go);const b=new we(v,i);b.userData.terrainChunk={minX:m,maxX:_,minZ:h,maxZ:g},b.renderOrder=-2,r.push({minX:m,maxX:_,minZ:h,maxZ:g,mesh:b,position:w,color:y}),t.add(b)}const d=(h,m)=>{const _=-n.extent+h*n.spacing,g=-n.extentZ+m*n.spacingZ,p=m*n.size+h,w=n.data[p];if(a[p]!==c){const y=Math.pow(jt.clamp(w/180,0,1),.65);s.setHSL(.57,.35*(1-y)+.06,.06+y*.68,pi),o[p*3]=s.r,o[p*3+1]=s.g,o[p*3+2]=s.b,a[p]=c}return{x:_,y:w,z:g,r:o[p*3],g:o[p*3+1],b:o[p*3+2]}},f=h=>{let m=0;const _=p=>{h.position.setXYZ(m,p.x,p.y,p.z),h.color.setXYZ(m++,p.r,p.g,p.b)},g=(p,w,y)=>{if(p.y>=mr&&w.y>=mr&&y.y>=mr){_(p),_(w),_(y);return}const v=[p,w,y],L=[];for(let D=0;D<3;D++){const R=v[D],N=v[(D+1)%3];if(R.y>=mr&&L.push(R),R.y>=mr!=N.y>=mr){const b=(mr-R.y)/(N.y-R.y),M=Math.pow(mr/180,.65);s.setHSL(.57,.35*(1-M)+.06,.06+M*.68,pi),L.push({x:R.x+(N.x-R.x)*b,y:mr,z:R.z+(N.z-R.z)*b,r:s.r,g:s.g,b:s.b})}}for(let D=1;D<L.length-1;D++)_(L[0]),_(L[D]),_(L[D+1])};for(let p=h.minZ;p<h.maxZ;p++)for(let w=h.minX;w<h.maxX;w++){const y=d(w,p),v=d(w+1,p),L=d(w+1,p+1),D=d(w,p+1);Math.max(y.y,v.y,L.y,D.y)<mr||(g(y,v,L),g(y,L,D))}h.mesh.geometry.setDrawRange(0,m),h.mesh.visible=m>0;for(const p of[h.position,h.color])m&&p.addUpdateRange(0,m*3),p.needsUpdate=!0},u=h=>{if(!l&&!(h&&![h.minX,h.maxX,h.minZ,h.maxZ].every(Number.isFinite))&&!(h&&(h.minX>h.maxX||h.minZ>h.maxZ))){c=c+1>>>0,c||(a.fill(0),c=1);for(const m of r)h&&(m.maxX<h.minX||m.minX>h.maxX||m.maxZ<h.minZ||m.minZ>h.maxZ)||f(m)}};return u(),{root:t,update:u,dispose(){if(!l){l=!0;for(const h of r)h.mesh.geometry.dispose();i.dispose(),t.removeFromParent(),t.clear()}}}}function TM(n,e){const t=Am(n,e);for(const i of t.root.children){const r=i,s=r.geometry.drawRange.count;for(const o of["position","color"]){const a=r.geometry.getAttribute(o);r.geometry.setAttribute(o,new Fi(a.array.slice(0,s*3),3))}r.geometry.setDrawRange(0,s)}return t.root}const AM=5,RM=Eg,Ld=40,rp=65;function CM(n){if(n<=Ld*tt)return 1;if(n>=rp*tt)return 0;const e=(n/tt-Ld)/(rp-Ld);return 1-e*e*(3-2*e)}const PM=`
  varying vec2 vMapPosition;
  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vMapPosition = worldPosition.xz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,DM=`
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
`;function LM(n,e){const t=new is(n*2,e*2);t.rotateX(-Math.PI/2);const i=new Ur({uniforms:{majorColor:{value:new kt(16777215)},minorColor:{value:new kt(16777215)},majorStep:{value:AM*tt},minorStep:{value:RM*tt},minorOpacity:{value:1}},vertexShader:PM,fragmentShader:DM,transparent:!0,depthWrite:!1,side:pn}),r=new we(t,i);return r.position.y=-2,r.renderOrder=-1,r}function Rm(n,e){n.material.uniforms.minorOpacity.value=CM(e)}const Id=[{label:"N",degrees:0,x:0,z:-1},{label:"E",degrees:90,x:1,z:0},{label:"S",degrees:180,x:0,z:1},{label:"W",degrees:270,x:-1,z:0}];function IM(n){const e=new S(0,0,-1).transformDirection(n.matrixWorldInverse);return Math.atan2(-e.y,e.x)+Math.PI/2}function NM(n){const e=document.createElement("div");e.className="map-compass",e.setAttribute("aria-label","地图方向：正北0度，东90度，南180度，西270度");const t=document.createElement("div");t.className="map-compass-dial",e.append(t);const i=Id.map(c=>{const l=document.createElement("span");return l.className=`compass-${c.label.toLowerCase()}`,l.textContent=c.label,l.title=`${c.label} ${c.degrees}°`,t.append(l),l}),r=document.createElement("small");r.textContent="N = 0°",e.append(r),n.append(e);const s=Id.map(c=>{const l=document.createElement("span");return l.className="map-cardinal",l.textContent=c.label,l.setAttribute("aria-label",`${c.label} ${c.degrees}°`),n.append(l),l}),o=new S;let a=NaN;return{update(c,l,d,f,u){c.updateMatrixWorld();const h=IM(c);(Math.abs(h-a)>1e-4||!Number.isFinite(a))&&(t.style.transform=`rotate(${h}rad)`,i.forEach(m=>{m.style.transform=`translate(-50%,-50%) rotate(${-h}rad)`}),a=h),Id.forEach((m,_)=>{const g=s[_];o.set(m.x*f,.2,m.z*u).project(c);const p=Number.isFinite(o.x)&&Number.isFinite(o.y)&&o.z>=-1&&o.z<=1&&Math.abs(o.x)<1.1&&Math.abs(o.y)<1.1;g.hidden=!p,p&&(g.style.left=`${Math.max(14,Math.min(l-14,(o.x+1)*l/2))}px`,g.style.top=`${Math.max(14,Math.min(d-14,(1-o.y)*d/2))}px`)})},dispose(){e.remove(),s.forEach(c=>c.remove())}}}const Nd=21,UM=7,sp=14;function Cm(n){const e=[],t=(r,s,o,a)=>{e.push(new S(r,s,0),new S(o,a,0))};for(const r of[Nd,UM])t(-r,-r,r,-r),t(r,-r,r,r),t(r,r,-r,r),t(-r,r,-r,-r);for(const r of[-1,1])for(const s of[-1,1])t(r*Nd,s*Nd,r*sp,s*sp);const i=new D_(new Ft().setFromPoints(e),new wi({color:n,transparent:!0,opacity:.9,depthTest:!1}));return i.name="escort-marker",i.visible=!1,i}const Gc=25,Wc=80,aa=1;function kM(n,e){if(Number.isNaN(n))return e??1;const t=Math.max(0,n/tt);return e===1?t>=Wc+6?3:t>=Gc+2?2:1:e===2?t<=Gc-2?1:t>=Wc+6?3:2:e===3?t<=Gc-2?1:t<=Wc-6?2:3:t<Gc?1:t<Wc?2:3}const wa=(n,e)=>n<e?-1:n>e?1:0,FM=new Intl.Collator("en",{sensitivity:"variant"}),OM=n=>n.icon==="air-filled"||n.icon==="air-outline",Pm=n=>n.status==="active"&&n.tgt===!0,Dm=n=>n.status==="active"&&n.escort===!0&&n.faction!=="enemy",op=n=>Pm(n)||Dm(n)?1:0;function ap(n){const e={x:0,y:0,z:0};for(const u of n)e.x+=u.position.x/n.length,e.y+=u.position.y/n.length,e.z+=u.position.z/n.length;const t=u=>Math.hypot(u.position.x-e.x,u.position.y-e.y,u.position.z-e.z);let i=n[0],r=t(i),s,o=1/0;const a=new Map;let c=!1,l=!1;for(const u of n){const h=t(u),m=op(u)-op(i);(m>0||m===0&&(h<r||h===r&&wa(u.id,i.id)<0))&&(i=u,r=h),OM(u)&&(!s||h<o||h===o&&wa(u.id,s.id)<0)&&(s=u,o=h),a.set(u.label,(a.get(u.label)??0)+1),c||=Pm(u),l||=Dm(u)}const d=[...a.keys()].filter(u=>u!==i.label).sort((u,h)=>FM.compare(u,h)||wa(u,h)),f=[i.label,...d].map(u=>{const h=a.get(u);return h>1?`${u} ×${h}`:u}).join(`
`);return{representativeId:i.id,memberIds:n.map(u=>u.id),label:f,hasTgt:c,hasEscort:l,...s?{airRepresentativeId:s.id}:{}}}function zM(n,e){const t=[...n].sort((d,f)=>wa(d.id,f.id));if(e===1)return t.map(d=>ap([d]));const i=e===2?54:68,r=i*i,s=aa*aa,o=new Map,a=[],c=(d,f,u,h)=>`${d}:${f}:${u}:${h}`,l=(d,f)=>`${d}:${f}`;for(const d of t){if(d.status!=="active"||!d.onScreen||!Number.isFinite(d.screenX)||!Number.isFinite(d.screenY)||!Number.isFinite(d.position.x)||!Number.isFinite(d.position.y)||!Number.isFinite(d.position.z)){a.push({seed:d,members:[d]});continue}const f=Math.floor(d.position.x/aa),u=Math.floor(d.position.y/aa),h=Math.floor(d.position.z/aa),m=Math.floor(d.screenX/i),_=Math.floor(d.screenY/i);let g;for(let p=-1;p<=1;p++)for(let w=-1;w<=1;w++)for(let y=-1;y<=1;y++){const v=o.get(c(d.faction,f+p,u+w,h+y));if(v)for(let L=-1;L<=1;L++)for(let D=-1;D<=1;D++){const R=v.get(l(m+L,_+D));if(R)for(const N of R){const b=d.position.x-N.seed.position.x,M=d.position.y-N.seed.position.y,I=d.position.z-N.seed.position.z;if(b*b+M*M+I*I>s)continue;const k=d.screenX-N.seed.screenX,O=d.screenY-N.seed.screenY;k*k+O*O<=r&&(!g||wa(N.seed.id,g.seed.id)<0)&&(g=N)}}}if(g)g.members.push(d);else{const p={seed:d,members:[d]};a.push(p);const w=c(d.faction,f,u,h);let y=o.get(w);y||(y=new Map,o.set(w,y));const v=l(m,_),L=y.get(v);L?L.push(p):y.set(v,[p])}}return a.map(d=>ap(d.members))}const Xc=12,cp=.675,BM=.15,HM=5e3;function Ud(n,e){const t=Number.isFinite(e)&&e>0?e:Xc*cp/12,i=n===1?Math.min(24*t/Xc,Math.max(10*t/Xc,cp)):(n===2?15:17)*t/Xc;return Math.min(HM,Math.max(BM,i))}function VM(n){const e=new wn;e.name="far-air-display",e.visible=!1;const t=new we(new Il(2.2,3.3,20),new Mn({color:n,transparent:!0,opacity:.8,side:pn,depthTest:!1}));t.rotation.x=-Math.PI/2;const i=new an(new Ft().setFromPoints([new S(0,.2,0),new S(0,1,0)]),new wi({color:n,transparent:!0,opacity:.8,depthTest:!1})),r=Array.from({length:65},(a,c)=>{const l=c/64*Math.PI*2;return new S(Math.cos(l)*7.2,Math.sin(l)*7.2,0)}),s=new an(new Ft().setFromPoints(r),new wi({color:n,transparent:!0,opacity:.9,depthTest:!1})),o=Cm(n);return t.add(s,o),e.add(t,i),{root:e,base:t,pole:i,tgt:s,escort:o}}function GM(n,e,t){const{tier:i,representative:r,status:s,scale:o}=t,a=s!=="wreck",c=n.base!==null;n.base&&(n.base.visible=r&&a&&i!==3,n.base.scale.setScalar((t.baseScale??o)/.675)),n.icon.visible=r&&a,n.icon.scale.setScalar(o),n.icon.position.y=t.iconHeight,n.pole.visible=r&&a&&i!==3,n.pole.userData.naturalTop=t.poleHeight,n.wreck.visible=r&&s!=="active",n.wreck.scale.setScalar(o/.675),e.root.visible=r&&s==="active"&&i===3&&t.hasAir,e.base.scale.setScalar((t.farBaseScale??o)/.675),e.base.position.y=1.5,e.tgt.scale.setScalar(.675),e.escort.scale.setScalar(.675),e.tgt.visible=t.hasTgt&&!c,e.escort.visible=t.hasEscort&&!c&&t.faction!=="enemy";const l=e.pole.geometry.getAttribute("position"),d=Math.max(t.airAltitude,.6);e.pole.userData.naturalTop=d,l.getY(1)!==d&&(l.setY(1,d),l.needsUpdate=!0,e.pole.geometry.computeBoundingSphere()),n.label.position.y=i===3?t.hasAir?d:1.5:t.poleHeight;const f=n.label.userData.dom;f.textContent!==t.label&&(f.textContent=t.label),f.style.whiteSpace="pre",f.style.fontSize=i===1?"14px":i===2?"13px":"12px",f.style.lineHeight="1.15";const u=r&&n.labelFade>0&&(i!==3||t.faction==="squadron");f.hidden=!u,n.label.userData.displayVisible=u}const WM=[[-5,-5],[0,7],[5,-5]],XM=[[-4,-4],[-4,2],[0,6],[4,2],[4,-4]],qM=[[-4,-4],[-4,4],[4,4],[4,-4]],$M=[[0,5.8],[-3.25,-3.1],[3.25,-3.1]];function lp(n){const e=new fm;e.moveTo(n[0][0],n[0][1]);for(const[t,i]of n.slice(1))e.lineTo(t,i);return e.closePath(),new hh(e)}function kd(n,e){return new Mn({color:n,transparent:!0,opacity:e,side:pn,depthTest:!1,depthWrite:!1})}function YM(n,e){const t=new wn,i=n==="ground"?qM:n==="ship"?XM:WM,r=new an(new Ft().setFromPoints(i.map(([o,a])=>new S(o,a,0))),new wi({color:e,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1}));if(r.name="outline",t.add(r),n==="air-filled"){const o=new we(lp($M),kd(e,.9));o.name="filledinner",t.add(o)}else if(n==="air-outline"){const o=new we(new Ia(.65,32),kd(e,.9));o.name="dot",o.position.y=-.3,t.add(o)}const s=new we(lp(i),kd(e,0));return s.name="pickmesh",t.add(s),t}function Ws(n){return!n.intangible&&(n.icon==="ground"||n.icon==="ship")}function tc(n,e,t){return new S(e.x,Ws(n)?t(e.x,e.z):e.y,e.z)}function Ul(n,e,t,i){const r=tc(n,e,t);return n.intangible||(r.y=Ws(n)?r.y+i:Math.max(r.y,t(r.x,r.z)+i)),r}const il=8,ml=1e-9,po=new S,Xi=new S,Pn=new S,ca=new S,fi=new S,vs=new S,Fd=new S,nr=new Ot,Dr=new $t,Od=new $t,wo=Array.from({length:8},()=>new Ot),jM=Array.from({length:16},()=>new Ot),ZM=Array.from({length:16},()=>new Ot),KM=[0,1,2],dp=[0,1],JM=[0],qc=new Ot,$c=new Ot;function Fa(n,e){switch(e){case 0:return n.w+n.x;case 1:return n.w-n.x;case 2:return n.w+n.y;case 3:return n.w-n.y;case 4:return n.w+n.z;default:return n.w-n.z}}function gl(n,e,t){if(!Number.isFinite(e.w)||e.w<=0)return;const i=(e.x/e.w+1)*t.width/2,r=(1-e.y/e.w)*t.height/2;!Number.isFinite(i)||!Number.isFinite(r)||(n.left=Math.min(n.left,i),n.right=Math.max(n.right,i),n.top=Math.min(n.top,r),n.bottom=Math.max(n.bottom,r))}function up(n,e,t){let i=jM,r=ZM,s=n.length;n.forEach((o,a)=>i[a].copy(wo[o]));for(let o=0;o<6&&s;o++){let a=0;for(let c=0;c<s;c++){const l=i[(c+s-1)%s],d=i[c],f=Fa(l,o),u=Fa(d,o);f>=0!=u>=0&&r[a++].copy(l).lerp(d,f/(f-u)),u>=0&&r[a++].copy(d)}s=a,[i,r]=[r,i]}for(let o=0;o<s;o++)gl(e,i[o],t)}function hp(n,e,t){qc.set(n.x,n.y,n.z,1).applyMatrix4(Dr),$c.set(e.x,e.y,e.z,1).applyMatrix4(Dr);let i=0,r=1;for(let o=0;o<6;o++){const a=Fa(qc,o),c=Fa($c,o);if(!Number.isFinite(a)||!Number.isFinite(c)||a<0&&c<0)return null;if(a>=0!=c>=0){const l=a/(a-c);a<0?i=Math.max(i,l):r=Math.min(r,l)}}if(i>r)return null;const s={left:1/0,right:-1/0,top:1/0,bottom:-1/0};return nr.copy(qc).lerp($c,i),gl(s,nr,t),nr.copy(qc).lerp($c,r),gl(s,nr,t),Number.isFinite(s.right)?s:null}function _l(n){return Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z)}function vo(n,e){const{camera:t,width:i,height:r}=e;Fd.copy(n).applyMatrix4(t.matrixWorldInverse);const s=-Fd.z;if(!_l(Fd)||s<t.near||s>t.far||(vs.copy(n).project(t),!_l(vs)||vs.z<-1-ml||vs.z>1+ml))return null;const o=(vs.x+1)*i/2,a=(1-vs.y)*r/2;return Number.isFinite(o)&&Number.isFinite(a)?{x:o,y:a,z:vs.z}:null}function Lm(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function mh(n){if(!n)return!1;const e=t=>t.visible&&t.opacity>0;return Array.isArray(n)?n.some(e):e(n)}function QM(n,e,t){const i=n.geometry,r=i.getAttribute("position"),s=i.index;if(!r)return;const o=s?.count??r.count,a=n.isMesh,c=n.isPoints,l=a?KM:c?JM:dp,d=a?3:c||!n.isLineSegments?1:2,f=Array.isArray(n.material)?i.groups:[{start:0,count:o,materialIndex:0}];for(const u of f){const h=Array.isArray(n.material)?n.material[u.materialIndex??0]:n.material;if(!mh(h))continue;const m=Math.max(u.start,i.drawRange.start),_=Math.min(o,u.start+u.count,i.drawRange.start+i.drawRange.count);for(let g=m;g+l.length<=_;g+=d){let p=!0;for(let w=0;w<l.length;w++){fi.fromBufferAttribute(r,s?s.getX(g+w):g+w).applyMatrix4(n.matrixWorld);const y=wo[w].set(fi.x,fi.y,fi.z,1).applyMatrix4(Dr);if(!Number.isFinite(y.x)||!Number.isFinite(y.y)||!Number.isFinite(y.z)||!Number.isFinite(y.w)){p=!1;break}}p&&up(l,e,t)}}if(n.isLineLoop&&o>1&&!Array.isArray(n.material)&&i.drawRange.start===0&&i.drawRange.count>=o){let u=!0;for(const[h,m]of[[0,o-1],[1,0]]){fi.fromBufferAttribute(r,s?s.getX(m):m).applyMatrix4(n.matrixWorld);const _=wo[h].set(fi.x,fi.y,fi.z,1).applyMatrix4(Dr);(!Number.isFinite(_.x)||!Number.isFinite(_.y)||!Number.isFinite(_.z)||!Number.isFinite(_.w))&&(u=!1)}u&&up(dp,e,t)}}function ew(n){if(!Lm(n.icon))return null;const e={left:1/0,right:-1/0,top:1/0,bottom:-1/0};return n.icon.traverseVisible(t=>{const i=t;if(!i.geometry||!mh(i.material))return;const r=i.geometry;r.boundingBox||r.computeBoundingBox();const s=r.boundingBox;if(!s||s.isEmpty())return;for(let a=0;a<8;a++){if(fi.set(a&1?s.max.x:s.min.x,a&2?s.max.y:s.min.y,a&4?s.max.z:s.min.z).applyMatrix4(t.matrixWorld),!_l(fi))return;const c=wo[a].set(fi.x,fi.y,fi.z,1).applyMatrix4(Dr);if(!Number.isFinite(c.x)||!Number.isFinite(c.y)||!Number.isFinite(c.z)||!Number.isFinite(c.w))return}let o=!0;for(let a=0;a<6;a++){let c=0;for(const l of wo)Fa(l,a)>=0&&c++;if(!c)return;c<8&&(o=!1)}if(o)for(const a of wo)gl(e,a,n);else QM(i,e,n)}),Number.isFinite(e.right)?e:null}function tw(n){const e=typeof getComputedStyle=="function"?getComputedStyle(n):n.style,t=d=>{const f=Number.parseFloat(d??"");return Number.isFinite(f)?f:0},i=t(e.fontSize)||t(n.style.fontSize),r=i>0?i:14,s=e.lineHeight||n.style.lineHeight,o=t(s),a=o>0?/^[\d.]+$/.test(s)?o*r:o:r*1.15,c=Number.isFinite(a)&&a>0?a:14*1.15;let l=Number(n.offsetHeight);if(!Number.isFinite(l)||l<=0){const d=typeof n.getBoundingClientRect=="function"?n.getBoundingClientRect():null;l=d?Number(d.height??d.bottom-d.top):0}return(!Number.isFinite(l)||l<=0)&&(l=Math.max(1,(n.textContent??"").split(`
`).length)*c+t(e.paddingTop)+t(e.paddingBottom)),{height:Number.isFinite(l)&&l>0?l:c,lineHeight:c}}function zd(n,e){const t=n.geometry.getAttribute("position");if(!t||t.count<2||!_l(e))return!1;const i=t.array instanceof Float32Array?Math.fround:a=>a,r=i(e.x),s=i(e.y),o=i(e.z);return!Number.isFinite(r)||!Number.isFinite(s)||!Number.isFinite(o)?!1:(t.getX(1)===r&&t.getY(1)===s&&t.getZ(1)===o||(t.setXYZ(1,r,s,o),t.needsUpdate=!0,n.geometry.boundingBox&&n.geometry.computeBoundingBox(),n.geometry.computeBoundingSphere()),!0)}function nw(n,e,t){nr.set(Xi.x,Xi.y,Xi.z,1).applyMatrix4(Dr);const i=nr.w,r=Dr.elements,s=1-t*2/n.height,o=r[5]-s*r[7];if(!Number.isFinite(o)||Math.abs(o)<ml)return!1;const a=(s*nr.w-nr.y)/o,c=e.y-t,l=2*i/(n.camera.projectionMatrix.elements[5]*n.height),d=Math.max(Xi.distanceTo(po),l*Math.max(1,c))*4;if(!Number.isFinite(a)||a<=0||a>d||(Pn.copy(Xi),Pn.y+=a,nr.set(Pn.x,Pn.y,Pn.z,1).applyMatrix4(Dr),nr.w<i/2||nr.w>i*2))return!1;const f=vo(Pn,n),u=Math.max(il,Math.min(n.width/4,c));return!!f&&Math.abs(f.y-t)<.01&&Math.abs(f.x-e.x)<=u}function iw(n,e,t){Pn.set(e.x*2/n.width-1,1-t*2/n.height,e.z).unproject(n.camera);const i=vo(Pn,n);return!!i&&Math.abs(i.y-t)<.01}function rw(n){const{camera:e,width:t,height:i,group:r,icon:s,pole:o,dom:a,isAir:c,isMerged:l,visible:d}=n,f=Number.isFinite(n.naturalTop)?n.naturalTop:.6,u=o.geometry.getAttribute("position");u&&u.count>0?po.fromBufferAttribute(u,0).applyMatrix4(o.matrixWorld):po.set(0,.2,0).applyMatrix4(r.matrixWorld),Xi.set(0,f,0).applyMatrix4(r.matrixWorld),Pn.copy(Xi),a.style.transform="translate(0, 0)";const h=Number.isFinite(t)&&t>0&&Number.isFinite(i)&&i>0;Dr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse);const m=h?vo(po,n):null,_=h?vo(Xi,n):null,g=tw(a),p=Lm(o)&&mh(o.material)&&!!u&&u.count>=2,w=h?ew(n):null,y=h&&p?hp(po,Xi,n):null,v=d&&!a.hidden&&!!(w||y);if(v&&l&&p&&u&&u.count>=2&&m&&_&&Math.abs(m.y-_.y)<g.height){const re=m.y-g.height-.1;!nw(n,_,re)&&!iw(n,_,re)&&Pn.copy(Xi)}const L=o.matrixWorld.determinant();Number.isFinite(L)&&Math.abs(L)>ml?(Od.copy(o.matrixWorld).invert(),ca.copy(Pn).applyMatrix4(Od),zd(o,ca)||(Pn.copy(Xi),ca.copy(Xi).applyMatrix4(Od),zd(o,ca))):zd(o,ca.set(0,f,0));const D=o.userData.labelDisplayTop;if(D?(D.x=Pn.x,D.y=Pn.y,D.z=Pn.z):o.userData.labelDisplayTop={x:Pn.x,y:Pn.y,z:Pn.z},!h)return a.style.left="0px",a.style.top="0px",!1;const R=vo(Pn,n)??_;fi.setFromMatrixPosition(s.matrixWorld);const N=vo(fi,n),b=N?.x??R?.x??m?.x??t/2,M=p?hp(po,Pn,n):null;let I=w?.right??M?.right??b;M&&(I=Math.max(I,M.right)),Number.isFinite(I)||(I=b);let k=R?.y??N?.y??m?.y??i/2;l&&p&&m&&R?k=Math.min(m.y,R.y):c&&!l&&(k=(N?.y??k)-g.lineHeight/2);const O=w??M;v&&O&&(!Number.isFinite(k)||k<0||k>i-g.height)&&(k=O.top);const G=Number(a.offsetWidth),$=Number.isFinite(G)&&G>0?G:0,j=v?Math.max(0,Math.min(t-$-il,I+il)):I+il;return v&&(k=Math.max(0,Math.min(i-g.height,k))),a.style.left=`${j}px`,a.style.top=`${k}px`,v}function gh(n="mouse",e=!1){return n==="touch"||n==="pen"||e?32:14}function sw(n,e,t,i,r){if(![n.x,n.y,n.z,e.left,e.top,e.width,e.height,t,i,r].every(Number.isFinite)||e.width<=0||e.height<=0||r<0||n.z<-1||n.z>1)return null;const s=e.left+(n.x+1)*e.width/2,o=e.top+(1-n.y)*e.height/2;return s<e.left-r||s>e.left+e.width+r||o<e.top-r||o>e.top+e.height+r?null:Math.hypot(s-t,o-i)}function ow(n,e,t,i=0){return[n.left,n.right,n.top,n.bottom,e,t,i].every(Number.isFinite)&&n.right>n.left&&n.bottom>n.top&&i>=0&&e>=n.left-i&&e<=n.right+i&&t>=n.top-i&&t<=n.bottom+i}const fp=new Set(["markers","drawing","links","range","layers"]),pp=new Set(["units","equipment","groups","routes","links"]),Bd=[{id:"units",label:"单位",title:"单位与空间编辑"},{id:"equipment",label:"装备",title:"机体与武器挂载"},{id:"groups",label:"编组",title:"编组与批量调度"},{id:"routes",label:"航路",title:"航路、绑定与航迹"},{id:"markers",label:"标记",title:"自定义地图点位"},{id:"drawing",label:"作图",title:"标尺、圆规与范围规划"},{id:"links",label:"连线",title:"单位与标记连线"},{id:"terrain",label:"地形",title:"画布、地形与城区"},{id:"range",label:"距离",title:"距离判定与三维范围"},{id:"turns",label:"回合",title:"回合草稿与战斗结果"},{id:"layers",label:"图层",title:"地图显示与航迹图层"},{id:"project",label:"存档",title:"工程保存、导入与恢复"}];function aw(n){const e=document.querySelector("#app"),t=document.querySelector("#edit-panel");if(!e||!t)throw new Error("Editor sidebar requires the existing workspace shell");if(t.dataset.sidebarMounted)throw new Error("Editor sidebar is already mounted");const i=(ie,Ye="")=>{const Ue=document.createElement(ie);return Ue.textContent=Ye,Ue},r=(ie,Ye,Ue)=>{const mt=i("button",ie);return mt.type="button",Ue&&(mt.id=Ue),mt.addEventListener("click",Ye),mt},s=ie=>{const Ye=document.querySelector(ie);if(!Ye)throw new Error(`Missing sidebar source control: ${ie}`);return Ye},o=s("#unit-editor"),a=s("#terrain-editor"),c=s("#route-section"),l=s("#archive-panel"),d=s("#workflow-panel"),f=s("#tab-units").parentElement,u=s(".selection-panel"),h=s(".event-panel"),m=s(".range-panel"),_=s(".trail-panel"),g=document.createComment("archive-manager-portal");l.before(g);const p=i("div"),y=s("#edit-add").closest(".edit-actions").previousElementSibling;for(;o.firstChild&&o.firstChild!==y;)p.append(o.firstChild);c.remove(),o.querySelectorAll(":scope > .rule").forEach(ie=>ie.remove());const v=Array.from(o.children),L=s("#edit-label").closest("label"),D=s("#tool-move").closest(".edit-actions"),R=v.indexOf(L),N=v.indexOf(D),b=(ie,Ye,Ue)=>{const mt=i("details");return mt.className="sidebar-submenu",mt.open=Ue,mt.append(i("summary",ie)),mt.append(...Ye),mt};o.replaceChildren(b("单位与选择",v.slice(0,R),!0),b("属性与战损",v.slice(R,N),!1),b("位置、姿态与吸附",v.slice(N),!0)),a.querySelector(":scope > .eyebrow")?.remove();const M=Array.from(a.children),I=M.indexOf(s("#terrain-brush").closest("label")),k=M.indexOf(s("#terrain-preset").closest("label")),O=s("#terrain-undo").closest(".edit-actions"),G=M.indexOf(O);a.replaceChildren(b("画布尺寸与采样",M.slice(0,I),!1),b("笔刷、城区与等高线",M.slice(I,k),!0),b("地形生成与重置",M.slice(k,G),!1),...M.slice(G)),t.replaceChildren(),t.classList.add("editor-sidebar"),t.dataset.sidebarMounted="true",t.hidden=!1,e.classList.add("editor-sidebar-mounted"),t.setAttribute("aria-label","场景编辑器");const $=i("header");$.className="sidebar-header";const j=i("div");j.className="sidebar-title-row";const re=i("strong","场景编辑器"),q=i("span","浏览");q.id="editor-sidebar-state",q.className="sidebar-state",q.setAttribute("role","status"),j.append(re,q);const ge=i("div");ge.className="sidebar-toolbar";const Te=r("进入编辑",()=>{be.editable&&n.toggleEdit()},"sidebar-toggle-edit"),ze=r("全图",()=>n.fitMap(),"sidebar-fit-map");ze.title="适配整个地图及当前单位";const He=r("俯视",()=>n.topView(),"sidebar-top-view");He.title="切换地图俯视视角";let at=!1;const yt=r("收起",()=>le(!at),"sidebar-collapse");ge.append(Te,ze,He,yt);const te=i("div");te.className="sidebar-quick-actions";const Ae=r("保存修订",()=>{if(be.playerView)return;const ie=ye();ie&&!ie.disabled&&ie.click()},"sidebar-quick-save"),oe=r("提交回合",()=>{if(be.playerView)return;se("turns");const ie=document.querySelector("#workflow-commit");ie&&!ie.disabled&&ie.click()},"sidebar-quick-commit"),Ke=r("另存为…",()=>{be.playerView||(se("turns"),document.querySelector("#editor-save-as-name")?.focus())},"sidebar-quick-save-as"),ne=r("生成快照",()=>{if(be.playerView)return;const ie=document.querySelector("#workflow-snapshot");ie&&!ie.disabled&&!ie.hidden&&ie.click()},"sidebar-quick-snapshot");te.append(Ae,Ke,oe,ne);const de=i("div");de.className="sidebar-viewer-toolbar";const Q=r("导出查看器",()=>{be.playerView&&n.viewerExport?.()},"sidebar-viewer-export"),ee=r("撤销",()=>{be.playerView&&be.editable&&be.viewerCanUndo&&n.viewerUndo?.()},"sidebar-viewer-undo"),C=r("重做",()=>{be.playerView&&be.editable&&be.viewerCanRedo&&n.viewerRedo?.()},"sidebar-viewer-redo");de.append(Q,ee,C),$.append(j,ge,te,de);const me=i("nav");me.className="sidebar-nav",me.setAttribute("role","tablist"),me.setAttribute("aria-label","编辑工具菜单"),me.setAttribute("aria-orientation","vertical");const he=i("div");he.className="sidebar-content",he.id="editor-sidebar-content";const Re=new Map,pe=new Map,Ve=new Map,ae=new Map;let Ee="units",be={editing:!1,editable:!0,mapOnly:!1},Le,A=!1,x=0;const z=ie=>be.playerView?fp.has(ie):!(be.mapOnly&&pp.has(ie));for(const ie of Bd){const Ye=r(ie.label,()=>se(ie.id),`sidebar-tab-${ie.id}`);Ye.title=ie.title,Ye.setAttribute("role","tab"),Ye.setAttribute("aria-controls",`sidebar-panel-${ie.id}`),Ye.dataset.sidebarTab=ie.id,Ve.set(ie.id,Ye),me.append(Ye);const Ue=i("section");Ue.id=`sidebar-panel-${ie.id}`,Ue.className="sidebar-tab-panel",Ue.setAttribute("role","tabpanel"),Ue.setAttribute("aria-labelledby",Ye.id);const mt=i("h2",ie.title);mt.className="sidebar-panel-heading";const St=i("div");St.className="sidebar-panel-body",St.dataset.sidebarPanel=ie.id,Ue.append(mt,St),Re.set(ie.id,Ue),pe.set(ie.id,St),he.append(Ue)}o.hidden=!1,a.hidden=!1,pe.get("units").append(u,o),pe.get("terrain").append(a),pe.get("turns").append(d,p,h),c.open=!0;const K=c.querySelector(":scope > summary"),X=Array.from(c.children).filter(ie=>ie!==K),W=X.indexOf(c.querySelector("#route-list")),Ie=X.indexOf(c.querySelector("#track-edit").closest(".edit-actions"));c.replaceChildren(K,b("航路设置与选中单位绑定",X.slice(0,W),!0),b("航路点与顺序",X.slice(W,Ie),!0),b("航迹曲线与控制点",X.slice(Ie),!1)),pe.get("routes").append(c);const xe=i("section");xe.className="sidebar-card",xe.append(i("h3","当前航路的绑定对象"));const Ge=i("div");Ge.id="route-bindings",Ge.className="sidebar-bound-list",Ge.setAttribute("aria-live","polite"),Ge.textContent="当前航路暂无绑定对象";const Xe=i("div");Xe.className="edit-actions";const _e=i("button","选中全部绑定单位");_e.type="button",_e.id="route-select-bound",Xe.append(_e);const Ne=i("label");Ne.className="edit-row",Ne.append(i("span","编组"));const Je=i("select");Je.id="route-group-select",Je.setAttribute("aria-label","绑定至当前航路的编组"),Je.add(new Option("选择编组","")),Ne.append(Je);const Qe=i("button","将编组绑定当前航路");Qe.type="button",Qe.id="route-bind-group";const Ce=i("div");Ce.className="edit-actions",Ce.append(Qe),xe.append(Ge,Xe,Ne,Ce),pe.get("routes").append(xe),pe.get("range").append(m),pe.get("layers").append(_);const dt=i("section");dt.className="sidebar-card",dt.append(i("h3","航路显示"));const U=(ie,Ye)=>{const Ue=i("label");Ue.className="check-row";const mt=i("input");return mt.id=ie,mt.type="checkbox",mt.checked=!0,Ue.append(mt,document.createTextNode(Ye)),Ue};dt.append(U("route-visible","显示所有航路与航路点"),U("route-labels","显示航路点名称与绑定对象")),pe.get("layers").append(dt),pe.get("project").append(l),f.hidden=!0,f.classList.add("sidebar-legacy-tabs"),t.append($,me,he,f);function ye(){return["#task-editor-save","#map-editor-save","#workflow-save-draft"].map(ie=>document.querySelector(ie)).find(ie=>ie&&!ie.hidden)}function Se(){if(be.playerView){te.hidden=!0;for(const St of[Ae,Ke,oe,ne])St.hidden=!0,St.disabled=!0;return}const ie=ye(),Ye=document.querySelector("#workflow-commit");Ae.hidden=!ie,Ae.disabled=!ie||ie.disabled,Ae.textContent=ie?.id==="workflow-save-draft"?"保存草稿":ie?.id==="map-editor-save"?"保存地图修订":"保存任务修订",oe.hidden=!Ye||Ye.hidden||Ye.disabled,oe.disabled=!Ye||Ye.disabled;const Ue=["#map-editor-save-as","#task-editor-save-as"].map(St=>document.querySelector(St)).find(St=>St&&!St.hidden);Ke.hidden=!Ue,Ke.disabled=!Ue||Ue.disabled;const mt=document.querySelector("#workflow-snapshot");ne.hidden=!mt||mt.hidden,ne.disabled=!mt||mt.disabled,te.hidden=Ae.hidden&&Ke.hidden&&oe.hidden&&ne.hidden}function qe(){for(const Ye of Bd){const Ue=z(Ye.id),mt=Ue&&Ye.id===Ee,St=Ve.get(Ye.id);St.hidden=!!be.playerView&&!Ue,St.disabled=!Ue,St.setAttribute("aria-selected",String(mt)),St.tabIndex=mt?0:-1,Re.get(Ye.id).hidden=!mt}const ie=be.playerView?"玩家查看器":"场景编辑器";re.textContent=ie,t.setAttribute("aria-label",ie),me.setAttribute("aria-label",be.playerView?"标注工具菜单":"编辑工具菜单"),t.dataset.activeTab=Ee,t.dataset.playerView=String(!!be.playerView),t.dataset.editing=String(be.editing),t.dataset.editable=String(be.editable),t.dataset.active=String(be.active!==!1),q.textContent=be.playerView?be.editing?"标注中":"浏览":be.editable?be.editing?"编辑中":"浏览":"只读历史",Te.textContent=be.playerView?be.editing?"结束标注":"编辑标注":be.editing?"退出编辑":"进入编辑",Te.disabled=!be.editable,dt.hidden=!!be.playerView,Q.hidden=!be.playerView,Q.disabled=!be.playerView||!n.viewerExport,ee.hidden=!be.playerView||!n.viewerUndo,C.hidden=!be.playerView||!n.viewerRedo,ee.disabled=!be.playerView||!be.editable||!be.viewerCanUndo||!n.viewerUndo,C.disabled=!be.playerView||!be.editable||!be.viewerCanRedo||!n.viewerRedo,de.hidden=!be.playerView,Se()}function le(ie){at=ie,t.dataset.collapsed=String(ie),yt.textContent=ie?"展开":"收起",yt.setAttribute("aria-expanded",String(!ie))}function se(ie){const Ue={unit:"units",route:"routes",group:"groups",marker:"markers",draw:"drawing",turn:"turns",archive:"project"}[ie]??ie;!Re.has(Ue)||!z(Ue)||(ae.set(Ee,he.scrollTop),Ee=Ue,le(!1),qe(),he.scrollTop=ae.get(Ue)??0,n.chooseTool(Ue))}me.addEventListener("keydown",ie=>{if(!["ArrowUp","ArrowDown","Home","End"].includes(ie.key))return;const Ye=Bd.filter(St=>z(St.id)&&!Ve.get(St.id).hidden&&!Ve.get(St.id).disabled),Ue=Ye.findIndex(St=>Ve.get(St.id)===document.activeElement);if(Ue<0)return;ie.preventDefault();const mt=ie.key==="Home"?Ye[0]:ie.key==="End"?Ye.at(-1):Ye[(Ue+(ie.key==="ArrowDown"?1:-1)+Ye.length)%Ye.length];se(mt.id),Ve.get(mt.id).focus()});const $e=()=>{!be.playerView&&e.dataset.workspace==="manager"?l.parentNode!==e&&(g.parentNode===e?e.insertBefore(l,g.nextSibling):e.append(l),l.open=!1):(l.parentNode!==pe.get("project")&&pe.get("project").append(l),l.open=!0)};return new MutationObserver($e).observe(e,{attributes:!0,attributeFilter:["data-workspace"]}),new MutationObserver(Se).observe(d,{subtree:!0,attributes:!0,attributeFilter:["hidden","disabled"]}),le(!1),qe(),$e(),{panels:{groups:pe.get("groups"),markers:pe.get("markers"),drawing:pe.get("drawing"),equipment:pe.get("equipment"),links:pe.get("links")},select:se,sync(ie){const Ye=!!ie.playerView&&!be.playerView,Ue=!ie.playerView&&!!be.playerView,mt=me.contains(document.activeElement),St=Ue?Le:void 0;Ye&&(Le=Ee,A=at,x=he.scrollTop,ae.set(Ee,he.scrollTop)),be={...ie},t.hidden=!1,Ue&&(ae.set(Ee,he.scrollTop),Ee=Le??"units",Le=void 0,le(A)),be.playerView&&!fp.has(Ee)?(Ee="markers",le(!1)):!be.playerView&&be.mapOnly&&pp.has(Ee)&&(Ee="terrain"),qe(),$e(),(Ye||Ue)&&(he.scrollTop=Ue&&Ee===St?x:ae.get(Ee)??0,ae.set(Ee,he.scrollTop)),mt&&!z(document.activeElement.dataset.sidebarTab)&&Ve.get(Ee).focus()}}}function cw(n,e){let t="";const i=(R,N="")=>{const b=document.createElement(R);return b.textContent=N,b};n.append(i("h3","编组 / 批量操作"));const r=i("div");r.id="group-list",r.className="unit-picker",n.append(r);const s=i("label","编组名称（回车即改名）");s.className="edit-row";const o=i("input");o.id="group-name",o.maxLength=128,s.append(o),n.append(s);const a=i("label","编组颜色");a.className="edit-row";const c=i("input");c.type="color",c.id="group-color",c.value="#62ffa8",a.append(c),n.append(a);const l=i("div");l.className="edit-actions",n.append(l);const d=[],f=(R,N,b,M=l)=>{const I=i("button",N);return I.type="button",I.id=R,I.addEventListener("click",b),M.append(I),d.push(I),I},u=i("div");u.id="group-state",u.className="edit-hint",u.setAttribute("role","status");const h=()=>e.read().groups.find(R=>R.id===t),m=()=>e.units().filter(R=>R.groupId===t).map(R=>R.id),_=(R,N)=>{e.change(R,N)&&D()};f("group-create","新建并分配所选",()=>{if(!e.editable())return;const R=o.value.trim()||`编组 ${e.read().groups.length+1}`,N=c.value,b=new Set(e.selectedIds()),M=`group-${crypto.randomUUID()}`;_("新建编组",(I,k)=>{I.groups.push({id:M,name:R,color:N}),k.filter(O=>b.has(O.id)).forEach(O=>{O.groupId=M}),t=M})});const g=()=>{if(!h()||!o.value.trim())return;const R=o.value.trim(),N=c.value;_("修改编组",b=>{const M=b.groups.find(I=>I.id===t);M.name=R,M.color=N})};f("group-save","保存名称 / 颜色",g),o.addEventListener("keydown",R=>{R.key==="Enter"&&(R.preventDefault(),g())});const p=i("div");p.className="edit-actions",n.append(p),f("group-assign","所选加入编组",()=>{if(!h())return;const R=new Set(e.selectedIds());_("分配编组",(N,b)=>b.filter(M=>R.has(M.id)).forEach(M=>{M.groupId=t}))},p),f("group-unassign","所选退出编组",()=>{const R=new Set(e.selectedIds());_("移除编组归属",(N,b)=>b.filter(M=>R.has(M.id)).forEach(M=>{delete M.groupId}))},p);const w=i("div");w.className="edit-actions",n.append(w);const y=o;f("group-rename","改名",()=>{y.focus(),y.select()},w),f("group-select","选中整组",()=>{h()&&e.select(m())},w),f("group-focus","定位整组",()=>{h()&&e.focus(m())},w),f("group-copy","复制整组",()=>{const R=h();R&&e.copy(R)},w);const v=i("div");v.className="edit-actions",n.append(v),f("group-delete","删除编组 / 保留单位",()=>{h()&&_("删除编组",(R,N)=>{R.groups=R.groups.filter(b=>b.id!==t),N.filter(b=>b.groupId===t).forEach(b=>{delete b.groupId}),t=""})},v);const L=i("div");L.id="group-members",L.className="unit-picker",n.append(L,u);function D(){const R=e.read(),N=e.units(),b=e.selectedIds(),M=e.editable();R.groups.some(k=>k.id===t)||(t=R.groups[0]?.id??""),r.replaceChildren(...R.groups.map(k=>{const O=N.filter($=>$.groupId===k.id).length,G=i("button",`${k.name} (${O})`);return G.style.borderColor=k.color,G.setAttribute("aria-pressed",String(k.id===t)),G.addEventListener("click",()=>{t=k.id,o.value=k.name,c.value=k.color,D()}),G.addEventListener("dblclick",()=>e.select(N.filter($=>$.groupId===k.id).map($=>$.id))),G}));const I=h();document.activeElement!==o&&(o.value=I?.name??""),document.activeElement!==c&&(c.value=I?.color??"#62ffa8"),o.disabled=c.disabled=!M;for(const k of d)k.disabled=!M;for(const k of["group-select","group-focus"])n.querySelector(`#${k}`).disabled=!I||!m().length;for(const k of["group-save","group-rename","group-assign","group-copy","group-delete"])n.querySelector(`#${k}`).disabled=!M||!I;n.querySelector("#group-assign").disabled||=!b.length,n.querySelector("#group-copy").disabled||=!m().length,n.querySelector("#group-unassign").disabled=!M||!N.some(k=>b.includes(k.id)&&k.groupId),L.replaceChildren(...N.filter(k=>k.groupId===t).map(k=>{const O=i("button",k.label);return O.setAttribute("aria-pressed",String(b.includes(k.id))),O.addEventListener("click",()=>e.select([k.id])),O})),u.textContent=`${I?`${I.name} · ${m().length} 个单位`:"暂无编组"} / 当前选择 ${b.length} 个${M?"":" / 只读"}`}return D(),{sync:D}}const la=new WeakMap,mn=n=>JSON.stringify([n.id,n.revision]),Hd=n=>({id:n.id,revision:n.revision}),lw=n=>({L:"轻型",M:"中型",H:"重型"})[n];function mp(n,e,t){const i=n.sessions.find(s=>s.id===e),r=i?.sealedScenes?.find(s=>s.turn===t);return JSON.stringify([n.id,n.players,n.aircraft,n.sp,i?.status,i?.workflow,r?.resourceSnapshot??i?.resourceSnapshot,r?.rulesSnapshot??i?.rulesSnapshot,(r?.units??i?.units??[]).map(s=>({id:s.id,player:s.player,aircraftRef:s.aircraftRef,loadout:s.loadout,spRefs:s.spRefs,playerActions:s.playerActions}))])}function gp(n,e){const t=new Map;for(const i of[...n,...e])t.has(mn(i))||t.set(mn(i),i);return[...t.values()].sort((i,r)=>i.id===r.id?r.revision-i.revision:i.id.localeCompare(r.id))}function dw(n,e){const t={};la.set(n,t);const i=(Q,ee="",C="")=>{const me=document.createElement(Q);return me.textContent=ee,me.id=C,me},r=i("section");r.className="player-roster";const s=i("div");s.className="player-roster-header";const o=i("button","新建玩家","player-roster-new");o.type="button",n.getAttribute("data-collapsed")===null&&typeof matchMedia=="function"&&matchMedia("(max-width: 600px) and (pointer: coarse)").matches&&n.setAttribute("data-collapsed","true");const a=n.getAttribute("data-collapsed")==="true",c=i("button",a?"展开":"收起","player-roster-collapse");c.type="button",c.setAttribute("aria-expanded",String(!a)),s.append(i("h3","玩家"),o,c);const l=i("div","","player-roster-form-area");l.hidden=!0;const d=i("div","","player-roster-pending");d.hidden=!0;const f=i("div","","player-roster-list");f.className="player-roster-list";const u=i("p","","player-roster-feedback");u.setAttribute("role","status"),u.hidden=!0,r.append(s,l,d,f,u),n.replaceChildren(r);let h,m,_,g="",p=-1,w="",y=[],v=[],L=[],D=Ih,R="",N="",b="",M=0,I=0,k=0,O,G,$,j;const re=[],q=[],ge=new Map,Te=[],ze=Q=>{const ee=Q instanceof Error?Q.message:String(Q);u.textContent=ee,u.hidden=!1,e.report(ee)},He=()=>{if(la.get(n)!==t||!n.isConnected||!r.isConnected||!h)throw new Error("玩家栏已变化，请使用当前面板。");if(e.readRevision&&h.revision!==void 0){if(e.readRevision()!==h.revision)throw new Error("工程已变化，请等待玩家栏同步。")}else if(e.read&&mp(e.read(),h.sessionId,h.turn)!==w)throw new Error("工程已变化，请等待玩家栏同步。");if(h.mapOnly)throw new Error("地图模式下玩家栏为只读。");return h},at=Q=>{try{He(),Q()}catch(ee){ze(ee)}},yt=()=>{const Q=He();if(!Q.editable)throw new Error("历史回合或当前场景为只读。");if(Q.pending||e.busy?.())throw new Error("请先完成或取消当前放置。");return Q},te=(Q,ee,C,me,he)=>{const Re=i("label",C);Re.htmlFor=ee;const pe=i("select","",ee);for(const[Ve,ae]of me){const Ee=i("option",ae);Ee.value=Ve,pe.append(Ee)}return pe.value=he,Re.append(pe),Q.append(Re),re.push(pe),pe},Ae=(Q,ee,C)=>{const me=Q.spSlots?.[C];return!!me&&!!ee.weapon&&ee.weapon.kind!=="normal"&&(!D.config.enforceWeight||!!ee.weapon.weight&&Rg(me,ee.weapon.weight))&&(ee.weapon.kind==="universal"||!!Q.allowedWeapons?.includes(ee.name))},oe=()=>{const Q=!!h?.editable&&!h.mapOnly&&!h.pending;o.disabled=!Q;for(const ee of re)ee.disabled=!Q;$&&($.disabled=!Q||!O?.playerId),j&&(j.disabled=!Q||!O?.playerId||!O?.aircraftKey);for(const ee of Te)ee.node.disabled=!Q||!ee.available;for(const[ee,C]of ge)C.setAttribute("aria-selected",String(ee===h?.selectedUnitId)),C.setAttribute("data-selected",String(ee===h?.selectedUnitId))},Ke=()=>{l.replaceChildren(),re.length=0,q.length=0,G=void 0,$=void 0,j=void 0;const Q=++I;if(l.hidden=!O,!O||!h)return;const ee=O,C=()=>{if(O!==ee||Q!==I||!l.isConnected)throw new Error("玩家创建表单已变化。")},me=i("form","","player-roster-form");me.className="player-form",me.append(i("h4","呼号"));const he=new Set(y.map(Le=>Le.player?.id).filter(Boolean)),Re=(h.project.players??[]).filter(Le=>!he.has(Le.id));Re.some(Le=>Le.id===ee.playerId)||(ee.playerId=""),G=te(me,"player-roster-player","玩家呼号",[["","请选择玩家"],...Re.map(Le=>[Le.id,Le.callsign])],ee.playerId),Re.length||me.append(i("p","暂无可用呼号")),me.append(i("h4","装备")),$=te(me,"player-roster-aircraft","机体",[["","请选择机体"],...v.map(Le=>[mn(Le),`${Le.name} · 修订 ${Le.revision}`])],ee.aircraftKey);const pe=i("div","GUN / MSL / FLR","player-roster-inherent");pe.className="player-chips",me.append(pe);const Ve=i("div","","player-roster-slots");Ve.className="player-slots",me.append(Ve);const ae=v.find(Le=>mn(Le)===ee.aircraftKey);ae&&(ee.loadout=ee.loadout.filter(Le=>{const A=L.find(x=>mn(x)===mn(Le.weaponRef));return A&&Ae(ae,A,Le.slot)}),ae.spSlots?.length||Ve.append(i("p","无 SP 槽")),ae.spSlots?.forEach((Le,A)=>{const x=i("div");x.className="player-slot";const z=L.filter(W=>Ae(ae,W,A)),K=ee.loadout.find(W=>W.slot===A)?.weaponRef,X=te(x,`player-roster-slot-${A}`,`SP${A+1} · ${lw(Le)} ${Le}`,[["","空槽"],...z.map(W=>[mn(W),`${W.name} · ${W.weapon?.weight??""} · 修订 ${W.revision}`])],K?mn(K):"");q.push({slot:A,node:X,choices:z}),X.addEventListener("change",()=>at(()=>{if(C(),!X.isConnected)throw new Error("SP 槽位已变化。");if(X.value&&!z.some(Ie=>mn(Ie)===X.value))throw new Error("所选 SP 的重量或机体许可不匹配。");ee.loadout=ee.loadout.filter(Ie=>Ie.slot!==A);const W=z.find(Ie=>mn(Ie)===X.value);W&&ee.loadout.push({slot:A,weaponRef:Hd(W)}),ee.loadout.sort((Ie,xe)=>Ie.slot-xe.slot)})),Ve.append(x)}));const Ee=i("div");Ee.className="player-actions",j=i("button","完成配置","player-roster-create"),j.type="submit";const be=i("button","取消","player-roster-create-cancel");be.type="button",Ee.append(j,be),me.append(Ee),l.append(me),G.addEventListener("change",()=>at(()=>{C(),ee.playerId=G.value,oe()})),$.addEventListener("change",()=>at(()=>{if(C(),!ee.playerId)throw new Error("请先选择玩家呼号。");if($.value&&!v.some(Le=>mn(Le)===$.value))throw new Error("机体修订已变化。");ee.aircraftKey=$.value,Ke()})),be.addEventListener("click",()=>at(()=>{C(),O=void 0,Ke()})),me.addEventListener("submit",Le=>{Le.preventDefault(),at(()=>{C();const A=yt();if(ee.projectId!==A.project.id||ee.sessionId!==A.sessionId||ee.turn!==A.turn)throw new Error("创建场景或回合已变化，请取消后重新新建。");if(!(A.project.players??[]).some(W=>W.id===ee.playerId)||y.some(W=>W.player?.id===ee.playerId))throw new Error("请选择尚未加入当前场景的玩家。");const x=v.find(W=>mn(W)===ee.aircraftKey);if(!x)throw new Error("请选择有效机体。");const z=q.filter(W=>W.node.value).map(W=>{const Ie=W.choices.find(xe=>mn(xe)===W.node.value);if(!Ie)throw new Error("所选 SP 的重量或机体许可不匹配。");return{slot:W.slot,weaponRef:Hd(Ie)}}),K=Ag(x,L,z,D);if(K.length)throw new Error(K.join("；"));const X={playerId:ee.playerId,aircraftRef:Hd(x),loadout:z};O=void 0,++I;try{e.beginCreate(X)}catch(W){throw O=ee,Ke(),W}Ke()})}),oe()},ne=()=>{d.replaceChildren();const Q=++k,ee=h?.pending;if(d.hidden=!ee,!ee||!h)return;const C=i("article");C.className="player-card player-pending-card";const me=v.find(x=>mn(x)===mn(ee.aircraftRef));C.append(i("h4",`${ee.player.callsign} · 待落位`),i("p",me?.name??"已配置机体"));const he=ee.loadout.map(x=>`SP${x.slot+1} ${L.find(z=>mn(z)===mn(x.weaponRef))?.name??"已配置 SP"}`).join(" / "),Re=h,Ve=Re.project.sessions.find(x=>x.id===Re.sessionId)?.resourceSnapshot.sp.find(x=>x.name==="FLR")??Re.project.sp.find(x=>x.name==="FLR");C.append(i("p",`FLR 剩余 ${Ve?Ve.weapon?.usageLimit??"—":4} 次`),i("p",he||"空 SP 挂载"));for(const x of ee.loadout){const z=L.find(K=>mn(K)===mn(x.weaponRef));C.append(i("p",`SP${x.slot+1} · ${z?.name??"已配置 SP"} · 冷却 0 回合 · ${z?.weapon?.usageLimit===void 0?"已用 0 次":`剩余 ${z.weapon.usageLimit} 次`}`))}const ae=i("div");ae.className="player-actions";const Ee=i("button",ee.armed?"等待地图落位":"生成位置","player-roster-arm");Ee.type="button",Ee.disabled=ee.armed||!h.editable,Ee.setAttribute("aria-pressed",String(ee.armed));const be=i("button","取消创建","player-roster-placement-cancel");be.type="button",ae.append(Ee,be),C.append(ae),d.append(C);const Le={projectId:Re.project.id,sessionId:Re.sessionId,turn:Re.turn},A=()=>{const x=He();if(Q!==k||!C.isConnected||x.project.id!==Le.projectId||x.sessionId!==Le.sessionId||x.turn!==Le.turn||!x.pending||mn(x.pending.aircraftRef)!==mn(ee.aircraftRef)||x.pending.player.id!==ee.player.id)throw new Error("待落位配置已变化。");return x};Ee.addEventListener("click",()=>at(()=>{const x=A();!x.editable||x.pending?.armed||e.armPlacement()})),be.addEventListener("click",()=>at(()=>{A(),e.cancelPlacement()}))},de=()=>{f.replaceChildren(),ge.clear(),Te.length=0;const Q=++M;if(!h)return;const ee={projectId:h.project.id,sessionId:h.sessionId,turn:h.turn},C=y.filter(me=>me.player);C.length||f.append(i("p","暂无玩家"));for(const me of C){const he=i("article","",`player-roster-unit-${me.id}`);he.className="player-card",he.tabIndex=0,he.setAttribute("role","group"),he.setAttribute("aria-label",`玩家 ${me.player.callsign}`);const Re=i("h4",me.player.callsign),pe=v.find(X=>me.aircraftRef&&mn(X)===mn(me.aircraftRef)),Ve=Tg(h.project,h.sessionId,me.id,h.turn),ae=i("div");ae.className="player-card-head";const Ee=i("span");Ee.className="player-faction-block",Ee.setAttribute("aria-hidden","true"),Ee.setAttribute("data-faction",me.faction);const be=Ve.filter(X=>X.slot!==void 0).length,Le=i("span",`${be} 装备`);Le.className="player-equipment-count",ae.append(Ee,Re,Le),he.append(ae,i("p",pe?.name??"未绑定机体"));const A=Ve.find(X=>X.name==="FLR");he.append(i("p",`FLR 剩余 ${A?.remaining??"—"} 次`));const x=()=>{const X=He();if(Q!==M||!he.isConnected||X.project.id!==ee.projectId||X.sessionId!==ee.sessionId||X.turn!==ee.turn||!y.some(W=>W.id===me.id))throw new Error("玩家单位或回合已变化。");return X},z=X=>["BUTTON","SELECT","INPUT"].includes(X.target?.tagName?.toUpperCase()??"");he.addEventListener("click",X=>at(()=>{z(X)||(x(),e.selectUnit(me.id,!1))})),he.addEventListener("dblclick",X=>at(()=>{z(X)||(x(),e.selectUnit(me.id,!0))})),he.addEventListener("keydown",X=>{X.target!==he||!["Enter"," "].includes(X.key)||(X.preventDefault(),at(()=>{x(),e.selectUnit(me.id,X.key==="Enter")}))});const K=i("div");K.className="player-weapon-list",he.append(K);for(const X of Ve){const W=i("div");W.className="player-weapon-row";const Ie=X.slot===void 0?X.name:`SP${X.slot+1} · ${X.name}`,xe=X.durationRemaining>0?`效果剩余 ${X.durationRemaining} 回合 · 冷却 ${X.profile?.cooldownTurns??0}T`:`冷却 ${X.cooldownRemaining} 回合`;W.append(i("strong",Ie),i("span",X.jettisoned?"已抛弃":`${xe} · ${X.remaining===void 0?`已用 ${X.uses} 次`:`剩余 ${X.remaining} 次`}`));const Ge=i("div");Ge.className="player-actions";const Xe=i("button","使用");Xe.type="button",Xe.setAttribute("data-action","use"),Xe.setAttribute("data-weapon-key",X.key),Ge.append(Xe),Te.push({node:Xe,available:X.canUse&&h.turn>0});let _e=!1;const Ne=(Je,Qe,Ce)=>at(()=>{x();const dt=yt();if(!Ce.isConnected||!Qe||_e||dt.turn<1)throw new Error("上一回合的此项行动当前不可记录。");_e=!0,Ce.disabled=!0;const U=Te.filter(Se=>Se.node.getAttribute("data-weapon-key")===X.key&&he.contains(Se.node)),ye=U.map(Se=>Se.available);for(const Se of U)Se.available=!1;try{e.recordAction(me.id,X.key,Je)}catch(Se){throw _e=!1,U.forEach((qe,le)=>{qe.available=ye[le]}),oe(),Se}});if(Xe.addEventListener("click",Je=>{Je.stopPropagation(),Ne("use",X.canUse,Xe)}),X.slot!==void 0||X.profile?.kind&&X.profile.kind!=="normal"){const Je=i("button","抛弃");Je.type="button",Je.setAttribute("data-action","drop"),Je.setAttribute("data-weapon-key",X.key),Ge.append(Je),Te.push({node:Je,available:X.canJettison&&h.turn>0}),Je.addEventListener("click",Qe=>{Qe.stopPropagation(),Ne("drop",X.canJettison,Je)})}W.append(Ge),K.append(W)}f.append(he),ge.set(me.id,he)}};return c.addEventListener("click",()=>at(()=>{const Q=n.getAttribute("data-collapsed")!=="true";n.setAttribute("data-collapsed",String(Q)),c.textContent=Q?"展开":"收起",c.setAttribute("aria-expanded",String(!Q))})),o.addEventListener("click",()=>at(()=>{const Q=yt();if(O){e.report("请先完成或取消当前玩家配置。");return}O={playerId:"",aircraftKey:"",loadout:[],projectId:Q.project.id,sessionId:Q.sessionId,turn:Q.turn},Ke()})),{sync(Q){if(la.get(n)!==t||!r.isConnected)return;if(h={...Q,pending:Q.pending?structuredClone(Q.pending):void 0},(Q.revision===void 0?Q.project!==m:Q.revision!==_||Q.project.id!==m?.id)||Q.sessionId!==g||Q.turn!==p){m=Q.project,_=Q.revision,g=Q.sessionId,p=Q.turn,w=e.readRevision&&Q.revision!==void 0?"":mp(Q.project,Q.sessionId,Q.turn);const me=Q.project.sessions.find(Ve=>Ve.id===Q.sessionId),he=me?.sealedScenes?.find(Ve=>Ve.turn===Q.turn);y=he?.units??me?.units??[],v=gp(he?.resourceSnapshot.aircraft??me?.resourceSnapshot.aircraft??[],Q.project.aircraft),L=gp(he?.resourceSnapshot.sp??me?.resourceSnapshot.sp??[],Q.project.sp),D=he?.rulesSnapshot??me?.rulesSnapshot??Ih;const Re=JSON.stringify([Q.project.id,Q.project.players,v,L,D,y.map(Ve=>Ve.player?.id)]);N!==Re&&(N=Re,O&&Ke());const pe=JSON.stringify([Q.project.id,Q.sessionId,Q.turn,v,L,D,y.filter(Ve=>Ve.player).map(Ve=>({id:Ve.id,player:Ve.player,aircraftRef:Ve.aircraftRef,loadout:Ve.loadout,spRefs:Ve.spRefs,playerActions:Ve.playerActions}))]);if(R!==pe){R=pe;try{de()}catch(Ve){ze(Ve)}}}const C=JSON.stringify([Q.project.id,Q.sessionId,Q.turn,Q.editable,Q.pending]);b!==C&&(b=C,ne()),oe()},destroy(){la.get(n)===t&&(la.delete(n),++M,++I,++k,n.replaceChildren())}}}const da=512,ua=[["#ff6935","橙"],["#2d8cff","蓝"],["#ffd84a","黄"],["#20e27e","绿"],["#ff4d5a","红"]],di=n=>!!n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=1e5),ha=n=>/^#[0-9a-f]{6}$/i.test(n),Vd=n=>`${n.kind}:${n.id}`,_p=n=>{const e=n.indexOf(":"),t=n.slice(0,e),i=n.slice(e+1);return e>0&&i&&(t==="unit"||t==="marker")?{kind:t,id:i}:null},uw=(n,e,t)=>n.some(i=>i.fromUnitId===e&&i.to.kind===t.kind&&i.to.id===t.id||t.kind==="unit"&&i.to.kind==="unit"&&i.fromUnitId===t.id&&i.to.id===e);function hw(n){let e=!1,t="",i="",r="",s="",o="";const a=new wn,c=new Map;a.name="Editor links",a.userData.editorLinks=!0,a.renderOrder=1e3,n.world.add(a);const l=(ne,de="")=>{const Q=document.createElement(ne);return Q.textContent=de,Q},d=l("div");d.className="scene-tool-panel editor-links-panel",n.panel.append(d);const f=l("style");f.textContent=`
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
  `,d.append(f,l("h3","连线"));const u=[],h=(ne,de,Q)=>{const ee=()=>{e||Q()};ne.addEventListener(de,ee),u.push({element:ne,event:de,run:ee})},m=()=>{const ne=l("div");return ne.className="tool-actions",d.append(ne),ne},_=(ne,de,Q,ee)=>{const C=l("button",Q);return C.id=de,C.type="button",h(C,"click",ee),ne.append(C),C},g=(ne,de,Q)=>{const ee=l("label");ee.className="tool-row",ee.append(l("span",Q));const C=l(ne);return C.id=de,C.setAttribute("aria-label",Q),ee.append(C),d.append(ee),C},p=(ne,de)=>{const Q=l("option",ne);return Q.value=de,Q},w=m(),y=_(w,"link-mode","连线模式",()=>{if(t){ze();return}if(!q()){oe();return}const ne=ge();if(!ne||!n.readUnits().some(de=>de.id===ne&&di(de.position))){o="请选择源单位",oe();return}t=ne,o="",R.value="",n.onModeChange(!0),oe()}),v=_(w,"link-cancel","取消",ze),L=g("select","link-source-unit","源单位");L.title="默认跟随选中单位；手动选择后固定源单位，连线模式中保持不变";const D=l("p");D.id="link-source",d.append(D);const R=g("select","link-target","目标"),N=g("select","link-style","颜色");N.replaceChildren(...ua.map(([ne,de])=>p(de,ne)),p("自定义","custom")),N.value=ua[0][0];const b=g("input","link-color","自定义颜色");b.type="color",b.value=ua[0][0];const M=_(m(),"link-add","添加连线",()=>{const ne=ge(),de=_p(R.value);if(!q()){oe();return}if(!ne||!de){o="请选择源与目标",oe();return}at(ne,de)}),I=g("select","link-list","连线列表");I.size=5;const k=g("input","link-visible","显示");k.type="checkbox",k.checked=!0;const O=m(),G=_(O,"link-apply","修改颜色 / 显示",()=>{const ne=r,de=b.value,Q=k.checked;if(!q()){oe();return}if(!ha(de)){o="请选择有效颜色",oe();return}He("修改连线",ee=>{const C=ee.links?.find(me=>me.id===ne);if(!C)throw new Error("连线已移除");C.color=de.toLowerCase(),C.visible=Q})}),$=_(O,"link-delete","删除连线",()=>{const ne=r;if(!q()){oe();return}He("删除连线",de=>{if(!de.links?.some(Q=>Q.id===ne))throw new Error("连线已移除");de.links=de.links.filter(Q=>Q.id!==ne)})}),j=l("p");j.id="link-state",j.setAttribute("role","status"),d.append(j),h(L,"change",()=>{if(!q()||t){oe();return}const ne=L.value;i=ne&&n.readUnits().some(de=>de.id===ne&&di(de.position))?ne:"",R.value="",o="",oe()}),h(R,"change",()=>{o="",oe()}),h(N,"change",()=>{if(!q()){oe();return}ha(N.value)&&(b.value=N.value)}),h(b,"input",()=>{if(!q()){oe();return}N.value=ua.find(([ne])=>ne===b.value.toLowerCase())?.[0]??"custom"}),h(I,"change",()=>{r=I.value,s="",o="",oe()});const re=ne=>{!e&&t&&ne.key==="Escape"&&(ze(),ne.preventDefault())};typeof addEventListener=="function"&&addEventListener("keydown",re);function q(){return!e&&n.editable()&&!n.busy()}function ge(ne){return i&&!(ne??n.readUnits()).some(de=>de.id===i&&di(de.position))&&(i="",R.value=""),t||i||n.selectedUnitId()||""}function Te(){t&&(t="",R.value="",n.onModeChange(!1))}function ze(){e||(Te(),R.value="",o="",oe())}function He(ne,de){if(!q())return oe(),!1;let Q=!1;try{Q=n.change(ne,ee=>{if(!q())throw new Error("当前状态已变化");de(ee)}),o=Q?"已保存":"未保存"}catch(ee){o=ee instanceof Error?ee.message:String(ee)}return oe(),Q}function at(ne,de){const Q=b.value,ee=he=>{const Re=n.readUnits(),pe=Re.find(ae=>ae.id===ne),Ve=de.kind==="unit"?Re.find(ae=>ae.id===de.id):he.markers.find(ae=>ae.id===de.id);if(!di(pe?.position)||!di(Ve?.position))throw new Error("源或目标已移除");if(de.kind==="unit"&&de.id===ne)throw new Error("源与目标相同");if((he.links?.length??0)>=da)throw new Error("连线已达上限 512");if(uw(he.links??[],ne,de))throw new Error("连线已存在");if(!ha(Q))throw new Error("请选择有效颜色")};try{ee(n.read())}catch(he){return o=he instanceof Error?he.message:String(he),oe(),!1}const C=`link-${crypto.randomUUID()}`,me=He("添加连线",he=>{ee(he),(he.links??=[]).push({id:C,fromUnitId:ne,to:{...de},color:Q.toLowerCase(),visible:!0})});return me&&(r=C,s="",oe()),me}function yt(ne,de){if(e||!t)return!1;if(!q())return oe(),!0;const Q={kind:ne,id:de};return R.value=Vd(Q),at(t,Q),!0}function te(ne){a.remove(ne.line),ne.line.geometry.dispose(),ne.line.material.dispose()}function Ae(){if(e)return;const ne=n.read();if(!ne.links?.length&&!t){for(const C of c.values())te(C);c.clear();return}const de=new Map(n.readUnits().map(C=>[C.id,C])),Q=new Map(ne.markers.map(C=>[C.id,C]));if(t&&(!n.editable()||!di(de.get(t)?.position))){Te(),o="",oe();return}const ee=new Set;for(const C of(ne.links??[]).slice(0,da)){if(ee.has(C.id))continue;ee.add(C.id);let me=c.get(C.id);if(!me){const ae=new Ft,Ee=new Dt(new Float32Array(6),3).setUsage(dl);ae.setAttribute("position",Ee);const be=new wi({color:"#ff6935",depthTest:!1,depthWrite:!1}),Le=new an(ae,be);Le.name=`Editor link ${C.id}`,Le.userData.editorLinkId=C.id,Le.userData.editorTools=!0,Le.renderOrder=1e3,Le.frustumCulled=!1,me={line:Le,position:Ee,coordinates:[NaN,NaN,NaN,NaN,NaN,NaN]},c.set(C.id,me),a.add(Le)}const he=de.get(C.fromUnitId)?.position,Re=(C.to.kind==="unit"?de.get(C.to.id):Q.get(C.to.id))?.position;me.line.visible=C.visible!==!1&&di(he)&&di(Re);const pe=ha(C.color)?C.color.toLowerCase():"#ff6935";if(`#${me.line.material.color.getHexString()}`!==pe&&me.line.material.color.set(pe),!di(he)||!di(Re))continue;let Ve=!1;for(let ae=0;ae<6;ae++){const Ee=ae<3?he:Re,be=ae%3,Le=(be===0?Ee.x:be===1?Ee.y:Ee.z)*tt;me.coordinates[ae]!==Le&&(me.coordinates[ae]=Le,me.position.array[ae]=Le,Ve=!0)}Ve&&(me.position.needsUpdate=!0)}for(const[C,me]of c)ee.has(C)||(te(me),c.delete(C))}function oe(){if(e)return;const ne=n.read(),de=n.readUnits(),Q=(ne.links??[]).slice(0,da);t&&(!n.editable()||!de.some(A=>A.id===t&&di(A.position)))&&Te();const ee=ge(de),C=de.find(A=>A.id===ee),me=R.value,he=[p("跟随选中单位",""),...de.filter(A=>di(A.position)).map(A=>p(A.label,A.id))];L.replaceChildren(...he),L.value=he.some(A=>A.value===ee)?ee:"";const Re=[p("选择目标","")];for(const A of de)A.id!==ee&&di(A.position)&&Re.push(p(`单位：${A.label}`,Vd({kind:"unit",id:A.id})));for(const A of ne.markers)di(A.position)&&Re.push(p(`标记：${A.label}`,Vd({kind:"marker",id:A.id})));R.replaceChildren(...Re),R.value=Re.some(A=>A.value===me)?me:"",Q.some(A=>A.id===r)||(r=Q[0]?.id??""),I.replaceChildren(...Q.map(A=>{const x=de.find(K=>K.id===A.fromUnitId)?.label??A.fromUnitId,z=(A.to.kind==="unit"?de:ne.markers).find(K=>K.id===A.to.id)?.label??A.to.id;return p(`${x} → ${z}${A.visible===!1?" · 隐藏":""}`,A.id)})),I.value=r;const pe=Q.find(A=>A.id===r),Ve=pe?`${pe.id}|${pe.color}|${pe.visible!==!1}`:"";Ve!==s&&(s=Ve,pe?(b.value=ha(pe.color)?pe.color.toLowerCase():"#ff6935",N.value=ua.find(([A])=>A===b.value)?.[0]??"custom",k.checked=pe.visible!==!1):k.checked=!0);const ae=q(),Ee=di(C?.position);y.disabled=!t&&(!ae||!Ee||Q.length>=da),y.setAttribute("aria-pressed",String(!!t)),v.disabled=!t,L.disabled=!ae||!!t,R.disabled=!ae,N.disabled=b.disabled=!ae,M.disabled=!ae||!Ee||!R.value||Q.length>=da,k.disabled=G.disabled=$.disabled=!ae||!pe,D.textContent=`源：${C?.label??"未选择"}${t?" · 连线中":""}`;const be=_p(R.value),Le=be&&(be.kind==="unit"?de:ne.markers).find(A=>A.id===be.id)?.label;j.textContent=o||(Le?`目标：${Le}`:""),Ae()}function Ke(){if(!e){Te(),e=!0,typeof removeEventListener=="function"&&removeEventListener("keydown",re);for(const ne of u)ne.element.removeEventListener(ne.event,ne.run);for(const ne of c.values())te(ne);c.clear(),n.world.remove(a),d.remove()}}return oe(),{sync:oe,update:Ae,active:()=>!e&&!!t,pick:yt,cancel:ze,dispose:Ke}}function Im(n,e){const t=e.x-n.x,i=n.z-e.z;return!Number.isFinite(t)||!Number.isFinite(i)||t===0&&i===0?void 0:(Math.atan2(t,i)*180/Math.PI%360+360)%360}function Nm(n,e){const t=Im(n,e);return t===void 0?"方位角未定义（起终点水平重合，N=0°）":`方位角 ${Math.round(t*100)/100%360}° (N=0°)`}const fw=.12,pw=1e5,mw=1e3,Oa=n=>({x:n.x,y:n.y,z:n.z}),Um=n=>({pitch:n.pitch,yaw:n.yaw,roll:n.roll});function vl(n){if(!n||!["x","y","z"].every(e=>{const t=n[e];return Number.isFinite(t)&&Math.abs(t)<=pw}))throw new RangeError("Marker coordinates must be finite and within +/-100000 km")}function km(n){if(!Number.isFinite(n)||n<=0||n>mw)throw new RangeError("Marker size must be positive and at most 1000 km")}function Fm(n){if(!n||![n.pitch,n.yaw,n.roll].every(Number.isFinite))throw new RangeError("Marker attitude must contain finite radians")}function Li(n){return["line","arrow","circle","square","sphere"].includes(n.symbol)}function za(n){const e=n.attitude??{pitch:0,yaw:0,roll:0};return Fm(e),new cn().setFromEuler(new In(e.pitch,e.yaw,e.roll,"YXZ"))}function Om(n){const e=new S((n.sizeKm??fw)/2,0,0).applyQuaternion(za(n)),t=n.position;return[{x:t.x-e.x,y:t.y-e.y,z:t.z-e.z},{x:t.x+e.x,y:t.y+e.y,z:t.z+e.z}]}function Ss(n){if(n.controlPoints!==void 0){if(n.controlPoints.length!==2)throw new RangeError("Marker control points must contain exactly two points");return[Oa(n.controlPoints[0]),Oa(n.controlPoints[1])]}return Om(n)}function rl(n,e){if(!Array.isArray(e)||e.length!==2)throw new RangeError("Marker control points must contain exactly two points");const[t,i]=e;vl(t),vl(i);const r=i.x-t.x,s=i.y-t.y,o=i.z-t.z,a=Math.hypot(r,s,o);km(a);const c=za(n),l=new S(1,0,0).applyQuaternion(c).normalize(),d=new S(r/a,s/a,o/a);let f;if(n.attitude!==void 0&&l.distanceTo(d)<=16*Number.EPSILON)f=Um(n.attitude);else{const u=new cn().setFromUnitVectors(l,d).multiply(c).normalize(),h=new In().setFromQuaternion(u,"YXZ");f={pitch:h.x,yaw:h.y,roll:h.z}}return{...n,position:{x:(t.x+i.x)/2,y:(t.y+i.y)/2,z:(t.z+i.z)/2},attitude:f,sizeKm:a,controlPoints:[Oa(t),Oa(i)]}}function zm(n,e,t,i){vl(e),Fm(t),km(i);const r={...n,position:Oa(e),attitude:Um(t),sizeKm:i};return n.controlPoints!==void 0&&(r.controlPoints=Om(r),r.controlPoints.forEach(vl)),r}const ni=n=>({x:n.x,y:n.y,z:n.z}),$n=n=>new S(n.x,n.y,n.z).multiplyScalar(tt),Es=(n,e)=>Math.hypot(e.x-n.x,e.y-n.y,e.z-n.z),$r=n=>`${n}-${crypto.randomUUID()}`,Ar=n=>Number(n.toFixed(5)).toString(),Gd=n=>[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=1e5),gw=(n,e)=>({horizontal:Math.hypot(e.x-n.x,e.z-n.z),deltaY:e.y-n.y,slant:Es(n,e)}),Bm=(n,e)=>{const t=gw(n,e);return`水平 ${Ar(t.horizontal)} km · 高差 ${t.deltaY>=0?"+":""}${Ar(t.deltaY)} km · 斜距 ${Ar(t.slant)} km`},Rn=n=>n==="measure"||n==="bearing",Yc=n=>({measure:"测距",bearing:"方位角",circle:"圆规",sphere:"范围球"})[n],fa=n=>n.kind==="bearing"?Nm(n.points[0],n.points[1]):Bm(n.points[0],n.points[1]),vp=(n,e,t,i)=>t==="sphere"?Es(n,e):i==="xz"?Math.hypot(e.x-n.x,e.z-n.z):i==="xy"?Math.hypot(e.x-n.x,e.y-n.y):Math.hypot(e.y-n.y,e.z-n.z);function _w(n){let e=!1,t="",i="",r="",s=null,o=!1,a,c="",l=n.editable(),d=!1,f=null,u=null;const h=new wn,m=new wn;h.name="Editor markers and drawings",m.name="Editor tool preview",h.userData.editorTools=!0,m.userData.editorTools=!0,n.world.add(h,m);const _=document.createElement("div");_.className="editor-tools-labels",_.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;",n.labelRoot.append(_);const g=[],p=[],w=document.createElement("style");w.textContent=`
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
  `,n.markersPanel.append(w);const y=(T,P="")=>{const F=document.createElement(T);return F.textContent=P,F},v=(T,P)=>{T.classList.add("scene-tool-panel"),T.append(y("h3",P))};v(n.markersPanel,"自定义标记点"),v(n.drawingsPanel,"标尺与圆规");const L=y("p"),D=y("p");L.id="marker-status",D.id="drawing-status";for(const T of[L,D])T.className="tool-status",T.setAttribute("role","status");const R=(T,P=f?.kind==="marker"?"markers":"drawing")=>{(P==="markers"?L:D).textContent=T},N=T=>(p.push(T),T),b=T=>{const P=y("div");return P.className="tool-actions",T.append(P),P},M=[];let I=null;const k=()=>{for(const T of M)T.setAttribute("aria-pressed",String(T===I))},O=(T,P,F,B,Y=!0)=>{const ce=y("button",F);return ce.type="button",ce.id=P,ce.addEventListener("click",()=>{if(!(e||Y&&!n.editable()))try{B()}catch(ue){R(ue instanceof Error?ue.message:String(ue),P.startsWith("marker-")?"markers":"drawing")}}),T.append(ce),Y&&N(ce),ce},G=(T,P,F,B=!0)=>{const Y=y("details");return Y.id=P,Y.open=B,Y.append(y("summary",F)),T.append(Y),Y},$=(T,P,F,B,Y="text")=>{const ce=y("label");ce.className="tool-row",ce.append(y("span",F));const ue=N(y("input"));return ue.id=P,ue.type=Y,ue.value=B,Y==="number"?ue.step="any":Y==="text"&&(ue.maxLength=128),ce.append(ue),T.append(ce),ue},j=(T,P,F,B,Y=!0)=>{const ce=y("label");ce.className="tool-row",ce.append(y("span",F));const ue=y("select");return ue.id=P,ue.setAttribute("aria-label",F),B.forEach(([nt,Oe])=>ue.add(new Option(Oe,nt))),ce.append(ue),T.append(ce),Y&&N(ue),ue},re=T=>{if(!T.value.trim()||!Number.isFinite(T.valueAsNumber))throw new Error("请填写有效数值");return T.valueAsNumber},q=(T,P,F,B)=>{const Y=y("div");Y.className="tool-xyz",T.append(y("p",F),Y);const ce={};for(const ue of["x","z","y"]){const nt=ue==="y"?"Z":ue==="z"?"Y":"X",Oe=y("label",`${nt}（km）`),Lt=N(y("input"));Lt.id=`${P}-${ue}`,Lt.type="number",Lt.step="any",Lt.value=String(B[ue]),Lt.setAttribute("aria-label",`${F} ${nt}（km）`),Oe.append(Lt),Y.append(Oe),ce[ue]=Lt}return{row:Y,fields:ce,read:()=>{const ue={x:re(ce.x),y:re(ce.y),z:re(ce.z)};if(!Gd(ue))throw new Error("点位坐标须为有限数值，绝对值不超过100000 km");return ue},set:ue=>{for(const nt of["x","y","z"])ce[nt].value=String(ue[nt])}}},ge=T=>/^#[0-9a-f]{6}$/i.test(T.value)?T.value.toLowerCase():"#ffd84a",Te=(T,P)=>T.value.trim().slice(0,128)||P,ze=T=>{for(const P of[...T.children])T.remove(P),P.traverse(F=>{(F instanceof we||F instanceof an||F instanceof am)&&(F.geometry.dispose(),(Array.isArray(F.material)?F.material:[F.material]).forEach(Y=>Y.dispose()))})},He=(T,P,F=1)=>new an(new Ft().setFromPoints(T),new wi({color:P,transparent:!0,opacity:F,depthWrite:!1})),at=(T,P,F,B=.045)=>{const Y=new we(new ts(B*tt,10,8),new Mn({color:F,depthWrite:!1}));return Y.position.copy($n(P)),T.add(Y),Y},yt=(T,P)=>{P==="xz"?T.rotation.x=-Math.PI/2:P==="yz"&&(T.rotation.y=Math.PI/2)},te=(T,P)=>Array.from({length:129},(F,B)=>{const Y=B/128*Math.PI*2,ce=Math.cos(Y)*T,ue=Math.sin(Y)*T;return P==="xy"?new S(ce,ue,0):P==="yz"?new S(0,ce,ue):new S(ce,0,ue)}),Ae=(T,P,F=!1)=>{const B=new wn;B.position.copy($n(P.position)),B.quaternion.copy(za(P)),T.add(B),B.userData.markerSize=P.sizeKm??.12;const Y=tt*(P.sizeKm??.12),ce=P.color,ue=F?.65:1,nt=ue*Math.min(.6,Math.max(.02,P.opacity??.12));if(P.symbol==="cross")B.add(He([new S(-Y,.4,-Y),new S(Y,.4,Y)],ce,ue)),B.add(He([new S(-Y,.4,Y),new S(Y,.4,-Y)],ce,ue));else if(P.symbol==="flag"){B.add(He([new S(0,.2,0),new S(0,Y*3,0)],ce,ue));const Oe=new we(new is(Y*1.6,Y),new Mn({color:ce,transparent:!0,opacity:.5,side:pn,depthWrite:!1}));Oe.position.set(Y*.8,Y*2.5,0),B.add(Oe)}else if(P.symbol==="pin"){B.add(He([new S(0,.2,0),new S(0,Y*2.5,0)],ce,ue));const Oe=new we(new Rs(Y*.6),new Mn({color:ce,transparent:F,opacity:ue,depthWrite:!1}));Oe.position.y=Y*2.5,B.add(Oe),B.add(He(te(Y*.7,"xz"),ce,ue))}else if(P.symbol==="line"||P.symbol==="arrow")B.add(He([new S(-Y/2,0,0),new S(Y/2,0,0)],ce,ue)),P.symbol==="arrow"&&B.add(He([new S(Y*.25,0,-Y*.2),new S(Y/2,0,0),new S(Y*.25,0,Y*.2)],ce,ue));else if(P.symbol==="circle"){const Oe=new we(new Ia(Y/2,64),new Mn({color:ce,transparent:!0,opacity:nt,side:pn,depthWrite:!1}));yt(Oe,"xz"),B.add(Oe,He(te(Y/2,"xz"),ce,ue))}else if(P.symbol==="square"){const Oe=Y/2,Lt=new we(new is(Y,Y),new Mn({color:ce,transparent:!0,opacity:nt,side:pn,depthWrite:!1}));yt(Lt,"xz"),B.add(Lt,He([new S(-Oe,0,-Oe),new S(Oe,0,-Oe),new S(Oe,0,Oe),new S(-Oe,0,Oe),new S(-Oe,0,-Oe)],ce,ue))}else if(P.symbol==="sphere"){B.add(new we(new ts(Y/2,32,20),new Mn({color:ce,transparent:!0,opacity:nt,side:pn,depthWrite:!1})));for(const Oe of["xz","xy","yz"])B.add(He(te(Y/2,Oe),ce,ue*.7))}else B.add(He([new S(-Y*.6,.4,0),new S(Y*.6,.4,0)],ce,ue));return["circle","square","sphere"].includes(P.symbol)&&B.children.filter(Oe=>Oe instanceof we).forEach(Oe=>{Oe.visible=P.filled!==!1}),F||B.traverse(Oe=>{Oe.userData.editorTool={kind:"marker",id:P.id}}),!F&&P.id===t&&Li(P)&&Ss(P).forEach((Oe,Lt)=>{const qt=$n(Oe).sub($n(P.position)).applyQuaternion(B.quaternion.clone().invert()),fr=at(B,{x:qt.x/tt,y:qt.y/tt,z:qt.z/tt},ce);fr.userData.editorTool={kind:"marker",id:P.id,pointIndex:Lt}}),B},oe=(T,P)=>{const[F,B]=P.points;if(!F||!B)return;T.position.copy($n(F)),T.position.y+=.3;const Y=(B.x-F.x)*tt,ce=(B.z-F.z)*tt,ue=Math.hypot(Y,ce),nt=Im(F,B),Oe=Math.min(.6*tt,Math.max(.1*tt,ue*.25)),Lt=(nt??0)*Math.PI/180;for(const qt of T.children)if(qt instanceof an){let fr;if(qt.name==="bearing-direction")fr=[new S,new S(Y,0,ce)];else if(qt.name==="bearing-north-reference")fr=[new S,new S(0,0,-Oe*1.3)];else if(qt.name==="bearing-arc")fr=Array.from({length:65},(Gi,Ks)=>{const ds=Lt*Ks/64;return new S(Math.sin(ds)*Oe,0,-Math.cos(ds)*Oe)}),qt.visible=nt!==void 0&&nt>0;else{const Gi=Math.min(Oe*.3,ue*.2),Ks=ue?Y/ue:0,ds=ue?ce/ue:0;fr=[new S(Y-Ks*Gi-ds*Gi*.5,0,ce-ds*Gi+Ks*Gi*.5),new S(Y,0,ce),new S(Y-Ks*Gi+ds*Gi*.5,0,ce-ds*Gi-Ks*Gi*.5)],qt.visible=nt!==void 0}qt.geometry.setFromPoints(fr),qt.geometry.computeBoundingSphere(),qt.material instanceof _f&&(qt.material.dashSize=Oe*.12,qt.material.gapSize=Oe*.09,qt.computeLineDistances())}else qt.userData.bearingEndpoint!==void 0&&qt.position.set(qt.userData.bearingEndpoint===1?Y:0,0,qt.userData.bearingEndpoint===1?ce:0)},Ke=(T,P,F=!1)=>{const B=new wn;T.add(B),F||(B.userData.editorTool={kind:"drawing",id:P.id});const Y=P.color,ce=Math.min(.6,Math.max(.02,P.opacity??.12));if(P.kind==="bearing"){if(P.points.length<2)return B;const ue=He([new S,new S],Y,F?.65:.95);ue.name="bearing-direction";const nt=new an(new Ft().setFromPoints([new S,new S]),new _f({color:Y,transparent:!0,opacity:F?.5:.75,depthWrite:!1,depthTest:!1}));nt.name="bearing-north-reference";const Oe=He(Array.from({length:65},()=>new S),Y,F?.55:.85);Oe.name="bearing-arc";const Lt=He([new S,new S,new S],Y,F?.65:.95);Lt.name="bearing-arrow",B.add(ue,nt,Oe,Lt),P.points.forEach((qt,fr)=>{const Gi=at(B,{x:0,y:0,z:0},Y);Gi.userData.bearingEndpoint=fr,F||(Gi.userData.editorTool={kind:"drawing",id:P.id,pointIndex:fr})}),B.traverse(qt=>{(qt instanceof an||qt instanceof we)&&(qt.material.depthTest=!1,qt.renderOrder=40)}),oe(B,P)}else if(P.kind==="measure"){if(P.points.length<2)return B;B.add(He(P.points.map($n),Y,F?.65:.9)),P.points.forEach((ue,nt)=>{const Oe=at(B,ue,Y);F||(Oe.userData.editorTool={kind:"drawing",id:P.id,pointIndex:nt})})}else{const ue=P.points[0],nt=(P.radiusKm??0)*tt;if(!ue||nt<=0)return B;B.position.copy($n(ue));const Oe=P.plane??"xz";if(P.kind==="circle"){const Lt=new we(new Ia(nt,96),new Mn({color:Y,transparent:!0,opacity:F?ce/2:ce,side:pn,depthWrite:!1}));yt(Lt,Oe),Oe==="xz"&&(Lt.position.y=.3),Lt.visible=P.filled!==!1,B.add(Lt,He(te(nt,Oe),Y,F?.55:.8)),at(B,{x:0,y:0,z:0},Y)}else{const Lt=new we(new ts(nt,40,24),new Mn({color:Y,transparent:!0,opacity:F?ce/2:ce,side:pn,depthWrite:!1}));Lt.visible=P.filled!==!1,B.add(Lt);for(const qt of["xz","xy","yz"])B.add(He(te(nt,qt),Y,F?.35:.5));at(B,{x:0,y:0,z:0},Y)}}return B},ne=(T,P,F,B,Y,ce,ue)=>{const nt=new xn;nt.position.copy(P),T.add(nt);const Oe=y("button",F);return Oe.type="button",Oe.title=Y,Oe.style.setProperty("--tool-color",B),Oe.addEventListener("click",Lt=>{Lt.stopPropagation(),ce()}),Oe.addEventListener("dblclick",Lt=>{Lt.stopPropagation(),ue()}),_.append(Oe),g.push({object:nt,element:Oe}),Oe},de=j(n.markersPanel,"marker-list","标记列表",[],!1);de.size=5;const Q=b(n.markersPanel);O(Q,"marker-focus","定位",()=>{const T=ci();T&&n.focus(ni(T.position))},!1);const ee=j(n.markersPanel,"marker-endpoint","移动目标",[["whole","整体"],["a","端点 A"],["b","端点 B"]],!1),C=O(Q,"marker-move","三轴移动",()=>{ci()&&(zt(t,!0,a),n.onTransformMode?.("translate"))}),me=O(Q,"marker-rotate","旋转",()=>{ci()&&(zt(t),n.onTransformMode?.("rotate"))}),he=O(Q,"marker-scale","缩放",()=>{ci()&&(zt(t),n.onTransformMode?.("scale"))});O(Q,"marker-copy","复制",()=>{const T=ci();if(!T)throw new Error("请先选择标记");const P={...T,...T.attitude?{attitude:{...T.attitude}}:{},id:$r("marker"),label:`${T.label.slice(0,122)} 副本`,position:{...T.position,x:T.position.x+.2,z:T.position.z+.2}};P.controlPoints&&(P.controlPoints=P.controlPoints.map(F=>({...F,x:F.x+.2,z:F.z+.2}))),Pe("复制标记",F=>F.markers.push(P),"markers",()=>{Z("marker",P.id)})}),O(Q,"marker-delete","删除",()=>{const T=t;if(!T)throw new Error("请先选择标记");Pe("删除标记",P=>{P.markers=P.markers.filter(F=>F.id!==T),P.links&&(P.links=P.links.filter(F=>F.to.kind!=="marker"||F.to.id!==T))},"markers",()=>{Z("marker","")})});const Re=G(n.markersPanel,"marker-properties","标记属性与位置"),pe=$(Re,"marker-label","名称","标记"),Ve=$(Re,"marker-color","颜色","#ffd84a","color"),ae=j(Re,"marker-symbol","符号",[["pin","定位针"],["cross","十字"],["flag","旗帜"],["text","文字"],["line","线段（长度）"],["arrow","箭头（长度）"],["circle","圆（直径）"],["square","正方形（边长）"],["sphere","球（直径）"]]),Ee=$(Re,"marker-size","尺寸（km）",".12","number");Ee.min=".00001",Ee.max="1000";const be=$(Re,"marker-filled","填充","","checkbox");be.checked=!0;const Le=$(Re,"marker-opacity","填充透明度",".12","number");Le.min=".02",Le.max=".6",Le.step=".01";const A=$(Re,"marker-visible","显示标记","","checkbox");A.checked=!0;const x={pitch:$(Re,"marker-pitch","俯仰 X°","0","number"),yaw:$(Re,"marker-yaw","方向 Z°","0","number"),roll:$(Re,"marker-roll","翻滚 Y°","0","number")},z=q(Re,"marker-position","位置",{x:0,y:0,z:0}),K=$(Re,"marker-height","高度（m）","0","number"),X=()=>{K.value=z.fields.y.value.trim()?String(z.fields.y.valueAsNumber*1e3):""},W=q(Re,"marker-a","端点 A",{x:-.06,y:0,z:0}),Ie=q(Re,"marker-b","端点 B",{x:.06,y:0,z:0}),xe=$(Re,"marker-a-height","端点 A 高度（m）","0","number"),Ge=$(Re,"marker-b-height","端点 B 高度（m）","0","number"),Xe=y("label");Xe.className="tool-row",Xe.append(y("span","说明"));const _e=N(y("textarea"));_e.id="marker-description",_e.maxLength=4096,Xe.append(_e),Re.append(Xe);const Ne=b(Re),Je=O(Ne,"marker-apply","应用所选标记",()=>{const T=t;if(!T)throw new Error("请先选择标记");const P=V(T);Pe("修改标记",F=>{const B=F.markers.findIndex(Y=>Y.id===T);if(B<0)throw new Error("标记已被移除");F.markers[B]=P},"markers")});O(Ne,"marker-ground","坐标贴地",()=>{const T=z.read();T.y=n.sampleHeightKm(T.x,T.z),z.set(T),X(),R("地形高度已填入","markers")});const Qe=G(n.markersPanel,"marker-create","新增标记"),Ce=b(Qe),dt=(T,P,F,B)=>{const Y=O(T,P,F,()=>B(Y));return M.push(Y),Y};dt(Ce,"marker-pick","点地图放置",T=>{const P=V($r("marker"),{x:0,y:0,z:0});hr({kind:"marker",marker:P},T),n.onOpenPanel?.("markers"),R("标记放置中","markers")}),dt(Ce,"marker-pick-two","两点确认方向与尺寸",T=>{const P=V($r("marker"),{x:0,y:0,z:0});if(!Li(P))throw new Error("请选择线段、箭头、圆、正方形或球");hr({kind:"marker",marker:P,twoPoint:!0},T),n.onOpenPanel?.("markers"),R("端点 A 选择中","markers")}),O(Ce,"marker-add-position","按坐标新增",()=>{const T=V($r("marker"));Pe("新增标记",P=>P.markers.push(T),"markers",()=>{Z("marker",T.id)})}),O(Ce,"marker-new","清空选择／新标记",()=>{Z("marker",""),je(),Nt(),Ut(),Yt(),H()},!1),O(Ce,"marker-cancel","取消放置",bn,!1),n.markersPanel.append(L);const U=j(n.drawingsPanel,"drawing-list","标尺／图形列表",[],!1);U.size=5;const ye=b(n.drawingsPanel);O(ye,"drawing-focus","定位",()=>{const T=Ci();T&&sn(T)},!1);const Se=j(n.drawingsPanel,"drawing-endpoint","移动目标",[["whole","整体"],["a","端点 A"],["b","端点 B"]],!1),qe=O(ye,"drawing-move","三轴移动",()=>{Ci()?.points[0]&&Bt(i,!0,a)});O(ye,"drawing-copy","复制",()=>{const T=Ci();if(!T)throw new Error("请先选择标尺或图形");const P={...T,id:$r("drawing"),label:`${T.label.slice(0,122)} 副本`,points:T.points.map(F=>({...F,x:F.x+.2,z:F.z+.2}))};Pe("复制制图标尺",F=>F.drawings.push(P),"drawing",()=>{Z("drawing",P.id)})}),O(ye,"drawing-delete","删除",()=>{const T=i;if(!T)throw new Error("请先选择标尺或图形");Pe("删除制图标尺",P=>{P.drawings=P.drawings.filter(F=>F.id!==T)},"drawing",()=>{Z("drawing","")})});const le=G(n.drawingsPanel,"drawing-properties","标尺属性与坐标"),se=$(le,"drawing-label","名称","测距"),$e=j(le,"drawing-kind","类型",[["measure","自由测距"],["bearing","水平方位角（N=0°）"],["circle","平面圆规"],["sphere","立体半透明球"]]),ie=$(le,"drawing-color","颜色","#2d8cff","color"),Ye=$(le,"drawing-visible","显示图形","","checkbox");Ye.checked=!0;const Ue=$(le,"drawing-filled","填充","","checkbox");Ue.checked=!0;const mt=$(le,"drawing-opacity","填充透明度",".12","number");mt.min=".02",mt.max=".6",mt.step=".01";const St=j(le,"drawing-plane","圆规平面",[["xz","XY 水平"],["xy","XZ 垂直"],["yz","YZ 垂直"]]),oi=q(le,"drawing-a","起点／中心",{x:0,y:0,z:0}),Zi=$(le,"drawing-height","高度（m）","0","number"),Jn=q(le,"drawing-b","终点",{x:1,y:0,z:0}),as=$(le,"drawing-b-height","终点高度（m）","0","number"),Ko=()=>{Zi.value=oi.fields.y.value.trim()?String(oi.fields.y.valueAsNumber*1e3):"",as.value=Jn.fields.y.value.trim()?String(Jn.fields.y.valueAsNumber*1e3):""},ai=$(le,"drawing-radius","半径（km）","2","number");ai.min=".00001",ai.max="1000";const cs=y("p");cs.id="drawing-readout",le.append(cs);const ls=b(le),Jo=O(ls,"drawing-apply","应用所选图形",()=>{const T=i;if(!T)throw new Error("请先选择标尺或图形");const P=Me(T);Pe("修改制图标尺",F=>{const B=F.drawings.findIndex(Y=>Y.id===T);if(B<0)throw new Error("图形已被移除");F.drawings[B]=P},"drawing")});O(ls,"drawing-ground","起点／中心贴地",()=>{const T=oi.read();T.y=n.sampleHeightKm(T.x,T.z),oi.set(T),xt(),R("地形高度已填入","drawing")});const $s=G(n.drawingsPanel,"drawing-create","测距与制图"),Ys=b($s);dt(Ys,"drawing-pick-measure","点选两点测距",T=>Zt("measure",T)),dt(Ys,"drawing-pick-bearing","点选两点测方位角",T=>Zt("bearing",T));const $l=y("p","方位角：正北 N=0°，顺时针 E=90°、S=180°、W=270°；仅按水平位置计算。");$s.append($l),dt(Ys,"drawing-pick-circle","圆规：中心＋半径点",T=>Zt("circle",T)),dt(Ys,"drawing-pick-sphere","球体：中心＋半径点",T=>Zt("sphere",T));const js=b($s);O(js,"drawing-add-position","按坐标／半径新增",()=>{const T=Me($r("drawing"));Pe("新增制图标尺",P=>P.drawings.push(T),"drawing",()=>{Z("drawing",T.id)})}),dt(js,"drawing-pick-center","点地图定中心＋输入半径",T=>{const P=$e.value;if(Rn(P))throw new Error("请选择平面圆规或球体，再使用输入半径方式");const F=Me($r("drawing"),!0),B=re(ai);if(B<=0||B>1e3)throw new Error("半径须大于0且不超过1000 km");F.radiusKm=B,hr({kind:P,drawing:F},T),ur=!0,R("中心点放置中","drawing")}),O(js,"drawing-new","清空选择／新图形",()=>{Z("drawing",""),ht(),Nt(),Yt(),H()},!1),O(js,"drawing-cancel","取消作图",bn,!1),n.drawingsPanel.append(D);let ur=!1;function ci(){return n.read().markers.find(T=>T.id===t)}function Ci(){return n.read().drawings.find(T=>T.id===i)}function E(){if(e||!s)return null;const T=n.read(),P=s==="marker"?t:i,F=s==="drawing"?T.drawings.find(ue=>ue.id===P):void 0,B=s==="marker"?T.markers.find(ue=>ue.id===P):void 0,Y=Rn(F?.kind)||B&&Li(B)?a:void 0,ce=B?Y===void 0?B.position:Ss(B)[Y]:F?.points[Y??0];return P&&ce?{kind:s,id:P,position:ni(ce),...Y===void 0?{}:{pointIndex:Y}}:null}function H(T=!1){if(e||d)return;const P=E(),F=P?JSON.stringify([P.kind,P.id,P.pointIndex]):"",B=n.editable(),Y=F!==c||!!P&&B!==l;if(c=F,l=B,!(!Y&&!T)){d=!0;try{n.onSelectionChange?.(P)}finally{d=!1}}}function Z(T,P,F){T==="marker"?t=P:i=P,a=F,P?s=T:s===T&&(s=null)}function J(){e||(t="",i="",a=void 0,s=null,je(),ht(),Nt(),Ut(),Yt(),H())}function V(T,P){const F=re(Ee);if(F<=0||F>1e3)throw new Error("尺寸须大于0且不超过1000 km");const B={id:T,label:Te(pe,"标记"),position:P??z.read(),color:ge(Ve),symbol:ae.value,sizeKm:F,visible:A.checked};if(["circle","square","sphere"].includes(B.symbol)){const ue=re(Le);if(ue<.02||ue>.6)throw new Error("透明度范围为0.02–0.6");const nt=n.read().markers.find(Oe=>Oe.id===T);(!nt||nt.filled!==void 0||!be.checked)&&(B.filled=be.checked),(!nt||nt.opacity!==void 0||ue!==.12)&&(B.opacity=ue)}const Y=_e.value.trim().slice(0,4096);Y&&(B.description=Y);const ce=n.read().markers.find(ue=>ue.id===T);if(Li(B)){ce?.controlPoints&&(B.controlPoints=ce.controlPoints.map(ni));const ue={pitch:0,yaw:0,roll:0};for(const nt of["pitch","yaw","roll"]){const Oe=ce?.attitude?.[nt]??0;ue[nt]=x[nt].value===String(jt.radToDeg(Oe))?Oe:jt.degToRad(re(x[nt]))}if((ce?.attitude||Object.values(ue).some(nt=>nt!==0))&&(B.attitude=ue),o&&!P)return rl(B,[W.read(),Ie.read()]);if(B.controlPoints&&ce&&(Es(ce.position,B.position)>0||B.sizeKm!==ce.sizeKm||JSON.stringify(B.attitude)!==JSON.stringify(ce.attitude)))return zm(B,B.position,ue,F)}return B}function Me(T,P=!1){const F=$e.value,B=P?{x:0,y:0,z:0}:oi.read(),Y={id:T,label:Te(se,Yc(F)),kind:F,points:Rn(F)?[B,P?ni(B):Jn.read()]:[B],color:ge(ie),visible:Ye.checked};if(!Rn(F)){const ce=P?1:re(ai),ue=re(mt);if(ce<=0||ce>1e3)throw new Error("半径须大于0且不超过1000 km");if(ue<.02||ue>.6)throw new Error("透明度范围为0.02–0.6");Y.radiusKm=ce,Y.opacity=ue,Y.plane=St.value;const nt=n.read().drawings.find(Oe=>Oe.id===T);(!nt||nt.filled!==void 0||!Ue.checked)&&(Y.filled=Ue.checked)}return Y}function Pe(T,P,F,B){if(!n.editable())return R("只读",F),!1;try{const Y=n.change(T,P);return Y?(B?.(),B&&(r=""),Tn(),R(`${T}已保存`,F)):R("操作未保存或内容没有变化",F),Y}catch(Y){return R(Y instanceof Error?Y.message:String(Y),F),!1}}function et(T,P,F,B){const Y=f,ce=u,ue=ur,nt=I;f=null,I=null,n.onPickingChange(!1);const Oe=Pe(T,P,F,B);if(Oe)u=null,ur=!1,ze(m);else if(Y&&n.editable()&&!e){const Lt=(F==="markers"?L:D).textContent;f=Y,u=ce,ur=ue,I=nt,n.onPickingChange(!0),Xn(),R(Lt||"未保存",F)}return k(),Oe}function je(){const T=ci();pe.value=T?.label??"标记",Ve.value=T?.color??"#ffd84a",ae.value=T?.symbol??"pin",A.checked=T?.visible!==!1,_e.value=T?.description??"",Ee.value=String(T?.sizeKm??.12),be.checked=T?.filled!==!1,Le.value=String(T?.opacity??.12),lt(),z.set(T?.position??{x:0,y:0,z:0}),X(),o=!1;for(const F of["pitch","yaw","roll"])x[F].value=String(jt.radToDeg(T?.attitude?.[F]??0));const P=Ss(T??{position:{x:0,y:0,z:0}});W.set(P[0]),Ie.set(P[1]),Ki(),s==="marker"&&(!T||!Li(T))&&(a=void 0),ee.value=s==="marker"&&a===0?"a":s==="marker"&&a===1?"b":"whole",ee.closest("label").hidden=!T||!Li(T),Je.disabled=!n.editable()||!T,C.disabled=!n.editable()||!T,me.disabled=he.disabled=!n.editable()||!T||!Li(T)}function ht(){const T=Ci();se.value=T?.label??"测距",$e.value=T?.kind??"measure",ie.value=T?.color??"#2d8cff",Ue.checked=T?.filled!==!1,Ye.checked=T?.visible!==!1,mt.value=String(T?.opacity??.12),St.value=T?.plane??"xz",ai.value=String(T?.radiusKm??2),oi.set(T?.points[0]??{x:0,y:0,z:0}),Jn.set(T?.points[1]??{x:1,y:0,z:0}),_t(),Ko(),Jo.disabled=!n.editable()||!T,qe.disabled=!n.editable()||!T?.points[0],xt()}function _t(){const T=Ci();s==="drawing"&&(!Rn(T?.kind)||a!==void 0&&!T?.points[a])&&(a=void 0),Se.value=s==="drawing"&&a===0?"a":s==="drawing"&&a===1?"b":"whole",Se.closest("label").hidden=!Rn(T?.kind),Se.disabled=!Rn(T?.kind)}function lt(){const T=["line","arrow","circle","square","sphere"].includes(ae.value),P=["circle","square","sphere"].includes(ae.value);be.closest("label").hidden=!P;for(const F of Object.values(x))F.closest("label").hidden=!T;for(const F of[W.row,Ie.row])F.hidden=!T;xe.closest("label").hidden=!T,Ge.closest("label").hidden=!T,Le.closest("label").hidden=!P,Le.disabled=!n.editable()||!be.checked}function xt(){const T=$e.value,P=Rn(T);Jn.row.hidden=!P;const F=Jn.row.previousElementSibling;F&&(F.hidden=!P),ai.closest("label").hidden=P,mt.closest("label").hidden=P,St.closest("label").hidden=T!=="circle",Ue.closest("label").hidden=P,as.closest("label").hidden=!P,mt.disabled=!n.editable()||!Ue.checked,Ko();try{cs.textContent=T==="bearing"?Nm(oi.read(),Jn.read()):T==="measure"?Bm(oi.read(),Jn.read()):`半径 ${Ar(re(ai))} km · 直径 ${Ar(re(ai)*2)} km${T==="circle"?` · ${{xz:"XY",xy:"XZ",yz:"YZ"}[St.value]}平面`:" · 3D范围"}`}catch{cs.textContent="—"}}function Nt(){const T=n.read();de.replaceChildren(...T.markers.map(P=>new Option(`${P.visible===!1?"隐藏 · ":""}${P.label}`,P.id))),de.value=t,U.replaceChildren(...T.drawings.map(P=>new Option(`${P.visible===!1?"隐藏 · ":""}${Yc(P.kind)} · ${P.label}${Rn(P.kind)&&P.points[1]?` · ${fa(P)}`:` · R ${Ar(P.radiusKm??0)} km`}`,P.id))),U.value=i}function Yt(){for(const T of g)T.element.setAttribute("aria-pressed",String(T.element.dataset.markerId?T.element.dataset.markerId===t:T.element.dataset.drawingId===i))}function zt(T,P=!0,F){if(n.read().markers.some(Y=>Y.id===T)&&n.onMarkerPick?.(T)){Nt();return}const B=n.read().markers.find(Y=>Y.id===T);Z("marker",B?T:"",B&&Li(B)?F:void 0),je(),Nt(),Ut(),Yt(),H(P&&!!t),n.onOpenPanel?.("markers")}function Bt(T,P=!0,F){const B=n.read().drawings.find(Y=>Y.id===T);Z("drawing",B?T:"",Rn(B?.kind)&&F!==void 0&&B?.points[F]?F:void 0),ht(),Nt(),Yt(),H(P&&!!i),n.onOpenPanel?.("drawing")}function pt(T){if(e)return!1;let P=T;for(;P&&P!==h;)P=P.parent;if(!P)return!1;for(let F=T;F&&F!==h;F=F.parent){const B=F.userData.editorTool;if(B?.id){if(B.kind==="marker"&&n.read().markers.some(Y=>Y.id===B.id))return zt(B.id,!0,B.pointIndex),!0;if(B.kind==="drawing"&&n.read().drawings.some(Y=>Y.id===B.id))return Bt(B.id,!0,B.pointIndex),!0}}return!1}function sn(T){const P=T.points[0];if(!P)return;const F=T.points[1];Rn(T.kind)&&F?n.focus({x:(P.x+F.x)/2,y:T.kind==="bearing"?P.y:(P.y+F.y)/2,z:(P.z+F.z)/2},Math.max(.2,(T.kind==="bearing"?Math.hypot(F.x-P.x,F.z-P.z):Es(P,F))/2)):n.focus(ni(P),T.radiusKm)}function Ut(){for(const T of h.children){if(T.userData.editorTool?.kind!=="marker")continue;for(const F of[...T.children])F.userData.editorTool?.pointIndex!==void 0&&(F.traverse(B=>{B instanceof we&&(B.geometry.dispose(),B.material.dispose())}),T.remove(F));const P=n.read().markers.find(F=>F.id===T.userData.editorTool.id);!P||P.id!==t||!Li(P)||Ss(P).forEach((F,B)=>{const Y=$n(F).sub(T.position).applyQuaternion(T.quaternion.clone().invert()).divideScalar(T.scale.x),ce=at(T,{x:Y.x/tt,y:Y.y/tt,z:Y.z/tt},P.color);ce.userData.editorTool={kind:"marker",id:P.id,pointIndex:B}})}}function li(){ze(h),g.length=0,_.replaceChildren();const T=n.read();for(const P of T.markers){if(P.visible===!1)continue;const F=Ae(h,P);ne(F,new S(0,tt*.4,0),P.label,P.color,P.description||"",()=>zt(P.id),()=>n.focus(ni(P.position))).dataset.markerId=P.id}for(const P of T.drawings){if(P.visible===!1||!P.points.length)continue;const F=Ke(h,P),B=P.points[0],Y=P.points[1],ce=Rn(P.kind)&&Y?`${P.label} · ${fa(P)}`:`${P.label} · 半径 ${Ar(P.radiusKm??0)} km`,ue=P.kind==="measure"&&Y?$n({x:(B.x+Y.x)/2,y:(B.y+Y.y)/2+.1,z:(B.z+Y.z)/2}):new S(0,tt*.12,0);ne(F,ue,ce,P.color,"",()=>Bt(P.id),()=>sn(P)).dataset.drawingId=P.id}Yt()}function zr(){if(e)return;if(!n.editable()){Tn();return}const T=n.read();for(const B of h.children){const Y=B.userData.editorTool;if(Y.kind==="marker"){const ce=T.markers.find(Lt=>Lt.id===Y.id);if(!ce||ce.visible===!1){Tn();return}B.position.copy($n(ce.position)),B.quaternion.copy(za(ce));const ue=ce.sizeKm??.12,nt=B.userData.markerSize??ue;B.scale.setScalar(ue/nt);const Oe=B.quaternion.clone().invert();for(const Lt of B.children)if(Lt.userData.editorTool?.pointIndex!==void 0){const qt=Ss(ce)[Lt.userData.editorTool.pointIndex];Lt.position.copy($n(qt).sub(B.position).applyQuaternion(Oe).divideScalar(B.scale.x))}}else{const ce=T.drawings.find(ue=>ue.id===Y.id);if(!ce||ce.visible===!1||!ce.points[0]){Tn();return}if(ce.kind==="bearing")oe(B,ce);else if(ce.kind!=="measure")B.position.copy($n(ce.points[0]));else for(const ue of B.children)if(ue instanceof an)ue.geometry.setFromPoints(ce.points.map($n)),ue.geometry.computeBoundingSphere();else if(ue.userData.editorTool?.pointIndex!==void 0){const nt=ce.points[ue.userData.editorTool.pointIndex];nt&&ue.position.copy($n(nt))}}}for(const B of g){const Y=B.element.dataset.drawingId;if(!Y)continue;const ce=T.drawings.find(Oe=>Oe.id===Y),ue=ce?.points[0],nt=ce?.points[1];!ce||!Rn(ce.kind)||!ue||!nt||(ce.kind==="measure"&&B.object.position.copy($n({x:(ue.x+nt.x)/2,y:(ue.y+nt.y)/2+.1,z:(ue.z+nt.z)/2})),B.element.textContent=`${ce.label} · ${fa(ce)}`)}const P=ci(),F=Ci();if(P){z.set(P.position),X(),Ee.value=String(P.sizeKm??.12);const B=Ss(P);W.set(B[0]),Ie.set(B[1]),Ki();for(const Y of["pitch","yaw","roll"])x[Y].value=String(jt.radToDeg(P.attitude?.[Y]??0))}F&&(oi.set(F.points[0]??{x:0,y:0,z:0}),Jn.set(F.points[1]??{x:1,y:0,z:0}),xt())}function Tn(){if(e)return;f&&!n.editable()&&bn();const T=n.read(),P=JSON.stringify({markers:T.markers,drawings:T.drawings}),F=n.editable();p.forEach(B=>{B.disabled=!F}),t&&!T.markers.some(B=>B.id===t)&&Z("marker",""),i&&!T.drawings.some(B=>B.id===i)&&Z("drawing",""),r!==P&&(r=P,Nt(),je(),ht(),li()),Je.disabled=!F||!ci(),Jo.disabled=!F||!Ci(),C.disabled=!F||!ci(),qe.disabled=!F||!Ci()?.points[0],me.disabled=he.disabled=!F||!ci()||!Li(ci()),lt(),xt(),k(),!F&&!f?(L.textContent="只读",D.textContent="只读"):F&&!f&&(L.textContent==="只读"&&(L.textContent=""),D.textContent==="只读"&&(D.textContent="")),H()}function hr(T,P=null){bn(),n.editable()&&(f=T,I=P,ur=!1,n.onPickingChange(!0),k())}function Zt(T,P=null){$e.value=T,(!i||["测距","方位角","圆规","范围球"].includes(se.value))&&(se.value=Yc(T)),xt();const F=Me($r("drawing"),!0);hr({kind:T,drawing:F},P),n.onOpenPanel?.("drawing"),R(Rn(T)?"起点选择中":"中心点选择中","drawing")}function bn(){const T=f;f=null,I=null,u=null,ur=!1,ze(m),k(),T&&(n.onPickingChange(!1),R("已退出地图点选",T.kind==="marker"?"markers":"drawing"))}function Xn(){ze(m);const T=f,P=u;if(!(!T||!P))if(T.kind==="marker")T.twoPoint?T.first?(at(m,T.first,T.marker.color,.08),at(m,P,T.marker.color,.08),Es(T.first,P)>0&&Es(T.first,P)<=1e3&&Ae(m,rl(T.marker,[T.first,P]),!0)):at(m,P,T.marker.color,.08):Ae(m,{...T.marker,position:P},!0);else if(!T.first)at(m,P,T.drawing.color,.08),ur&&Ke(m,{...T.drawing,points:[P]},!0);else if(Rn(T.kind)){const F={...T.drawing,points:[T.first,P]};Ke(m,F,!0),R(fa(F),"drawing")}else{const F=vp(T.first,P,T.kind,T.drawing.plane??"xz");at(m,T.first,T.drawing.color,.08),m.add(He([$n(T.first),$n(P)],T.drawing.color,.6)),F>0&&F<=1e3&&Ke(m,{...T.drawing,points:[T.first],radiusKm:F},!0),R(`半径 ${Ar(F)} km${F>1e3?"（超出1000 km）":""}`,"drawing")}}function qn(T){e||!f||T&&!Gd(T)||!T&&!u||T&&u&&Es(T,u)<1e-5||(u=T?ni(T):null,Xn())}function Qn(T){const P=f;if(e||!P||!n.editable()){n.editable()||bn();return}if(!Gd(T)){R("点位坐标超出有效范围");return}try{if(P.kind==="marker"){if(P.twoPoint&&!P.first){P.first=ni(T),u=ni(T),Xn(),R("端点 B 选择中","markers");return}const F=P.twoPoint?rl(P.marker,[P.first,T]):{...P.marker,position:ni(T)};et("地图放置标记",B=>B.markers.push(F),"markers",()=>{Z("marker",F.id)})&&R("标记已放置并保存","markers")}else if(ur){const F={...P.drawing,points:[ni(T)]};et("地图放置范围图形",B=>B.drawings.push(F),"drawing",()=>{Z("drawing",F.id)})&&R("图形已放置并保存","drawing")}else if(!P.first)P.first=ni(T),u=ni(T),Xn(),R(Rn(P.kind)?"终点选择中":"半径点选择中","drawing");else{const F={...P.drawing,points:Rn(P.kind)?[ni(P.first),ni(T)]:[ni(P.first)]};if(!Rn(P.kind)){const B=vp(P.first,T,P.kind,P.drawing.plane??"xz");if(B<=0||B>1e3)throw new Error("半径须大于0且不超过1000 km，请重新选择半径点");F.radiusKm=B}et("地图作图",B=>B.drawings.push(F),"drawing",()=>{Z("drawing",F.id)})&&R(Rn(F.kind)?`${Yc(F.kind)}已保存：${fa(F)}`:`图形已保存：半径 ${Ar(F.radiusKm)} km`,"drawing")}}catch(F){R(F instanceof Error?F.message:String(F),P.kind==="marker"?"markers":"drawing")}}const Zs=T=>{T.key==="Escape"&&f&&(bn(),T.preventDefault())};addEventListener("keydown",Zs),de.addEventListener("change",()=>zt(de.value)),U.addEventListener("change",()=>Bt(U.value)),Se.addEventListener("change",()=>{if(e||!Rn(Ci()?.kind))return;const T=Se.value==="a"?0:Se.value==="b"?1:void 0;Bt(i,!1,T)}),z.fields.y.addEventListener("input",X),K.addEventListener("input",()=>{z.fields.y.value=K.value.trim()?String(K.valueAsNumber/1e3):""}),ee.addEventListener("change",()=>zt(t,!1,ee.value==="a"?0:ee.value==="b"?1:void 0)),ae.addEventListener("input",lt),be.addEventListener("input",lt),Ue.addEventListener("input",xt);for(const T of[K,Ee,...Object.values(z.fields),...Object.values(x)])T.addEventListener("input",()=>{o=!1});function Ki(){xe.value=W.fields.y.value.trim()?String(W.fields.y.valueAsNumber*1e3):"",Ge.value=Ie.fields.y.value.trim()?String(Ie.fields.y.valueAsNumber*1e3):""}for(const T of[...Object.values(W.fields),...Object.values(Ie.fields)])T.addEventListener("input",()=>{o=!0,Ki()});for(const[T,P]of[[xe,W],[Ge,Ie],[Zi,oi],[as,Jn]])T.addEventListener("input",()=>{P.fields.y.value=T.value.trim()?String(T.valueAsNumber/1e3):"",T===xe||T===Ge?o=!0:xt()});for(const T of[...Object.values(oi.fields),...Object.values(Jn.fields),ai,St,$e])T.addEventListener("input",xt);const Lh=(T,P)=>{for(const F of T)F.addEventListener("change",()=>{if(!(f||!n.editable()||e||!(P==="markers"?ci():Ci())))try{const B=P==="markers"?t:i,Y=P==="markers"?V(B):Me(B),ce=P==="markers"?ci():Ci();if(JSON.stringify(ce)===JSON.stringify(Y))return;Pe(P==="markers"?"修改标记":"修改制图标尺",ue=>{if(P==="markers"){const nt=ue.markers.findIndex(Oe=>Oe.id===B);nt>=0&&(ue.markers[nt]=Y)}else{const nt=ue.drawings.findIndex(Oe=>Oe.id===B);nt>=0&&(ue.drawings[nt]=Y)}},P)}catch(B){R(B instanceof Error?B.message:String(B),P)}})};return Lh([pe,Ve,ae,Ee,be,Le,A,_e,K,xe,Ge,...Object.values(x),...Object.values(z.fields),...Object.values(W.fields),...Object.values(Ie.fields)],"markers"),Lh([se,$e,ie,Ye,Ue,mt,St,Zi,as,ai,...Object.values(oi.fields),...Object.values(Jn.fields)],"drawing"),je(),ht(),R("","markers"),R("","drawing"),Tn(),{sync:Tn,syncPosition:zr,selectObject:pt,selection:E,clearSelection:J,isPicking:()=>!!f,pick:Qn,preview:qn,cancel:bn,updateLabels(T,P,F){if(e)return;T.updateMatrixWorld(),h.updateWorldMatrix(!0,!0);const B=new S;for(const Y of g){const ce=Y.object.getWorldPosition(B).project(T),ue=ce.z>=-1&&ce.z<=1&&Math.abs(ce.x)<=1.08&&Math.abs(ce.y)<=1.08;Y.element.hidden=!ue,ue&&(Y.element.style.left=`${(ce.x+1)*P/2}px`,Y.element.style.top=`${(1-ce.y)*F/2}px`)}},dispose(){e||(bn(),e=!0,removeEventListener("keydown",Zs),ze(h),ze(m),n.world.remove(h,m),_.remove(),w.remove(),g.length=0,p.length=0,n.markersPanel.replaceChildren(),n.drawingsPanel.replaceChildren(),n.markersPanel.classList.remove("scene-tool-panel"),n.drawingsPanel.classList.remove("scene-tool-panel"))}}}function vw(n,e,t,i,r=360,s=1440){const o=i*Math.PI/180,a=Math.max(.25,1-r/Math.max(1,s)),c=2*Math.atan(Math.tan(o/2)*Math.max(.1,t)*a),l=Math.hypot(Math.max(1,n),Math.max(1,e)),d=l/Math.sin(Math.min(o,c)/2)*1.12,f=Math.max(1e4,d*10);return{distance:d,maxDistance:f,far:Math.max(5e4,f*3),near:Math.max(.1,l/1e5)}}const Eo=n=>({id:n.id,revision:n.revision});function _h(n,e){const t=n.sessions.find(i=>i.id===e);if(!t)throw new Error(`Unknown session: ${e}`);if(t.workflow||t.status==="finished")throw new Error("Active authoring session required");return t}function Hm(n){if(typeof n!="string"||!n.trim()||n.trim().length>128)throw new Error("Name must contain 1..128 characters");return n.trim()}function Vm(n,e,t,i,r,s){const o=qu(e);Pg(n,o);const a=_h(o,t);return{project:o,sessionId:t,selection:{kind:i,ref:Eo(r)},mapRef:Eo(s),taskRef:Eo(a.taskRef)}}function xw(n,e,t,i){const r=qu(n);if(!_h(r,e).mapEditRef)throw new Error("Terrain editing session required");const o=Lp(r,e,t,Hm(i)),a={id:t,revision:1};return o.sessions.find(c=>c.id===e).mapEditRef=Eo(a),Vm(r,o,e,"map",a,a)}function yw(n,e,t,i){const r=qu(n);if(_h(r,e).mapEditRef)throw new Error("Task authoring session required");if(!t||typeof t!="object")throw new Error("New map and task IDs required");const o=Hm(i),a={id:t.mapId,revision:1},c={id:t.taskId,revision:1};let l=Lp(r,e,t.mapId,`${o} MAP`.slice(0,128));l=Cg(l,e,a,t.taskId,o);const d=l.sessions.find(f=>f.id===e);return d.taskRef=Eo(c),d.mapRef=Eo(a),Vm(r,l,e,"task",c,a)}function Sw(n,e){return n===void 0||e<n?"active":e===n?"destroyed":"wreck"}const bw=2800,xp=180,Mw=3,yp="ac-notice-host";function ww(n=document){const e=n.defaultView,t=()=>!!e?.matchMedia?.("(prefers-reduced-motion: reduce)").matches,i=new Map;let r=null;const s=()=>{if(r?.isConnected)return r;const c=n.getElementById(yp);if(c)return r=c,r;const l=n.createElement("div");return l.id=yp,l.className="ac-notice-host",l.setAttribute("role","status"),l.setAttribute("aria-live","polite"),n.body.append(l),r=l,l},o=c=>{const l=i.get(c);l!==void 0&&(e?.clearTimeout(l),i.delete(c)),c.remove()};return{notify:(c,l="ok")=>{const d=String(c??"").trim();if(!d)return;const f=s(),u=n.createElement("div");for(u.className="ac-notice",u.dataset.tone=l,u.textContent=d,u.addEventListener("click",()=>o(u)),f.append(u);f.children.length>Mw;){const _=f.firstElementChild;if(!_)break;o(_)}const h=typeof u.animate=="function";h&&!t()&&u.animate([{opacity:0,transform:"translateY(6px)"},{opacity:1,transform:"none"}],{duration:xp,easing:"cubic-bezier(.2,.9,.2,1)"});const m=e?.setTimeout(()=>{if(i.delete(u),!h||t()){u.remove();return}u.animate([{opacity:1},{opacity:0,transform:"translateY(-4px)"}],{duration:xp,easing:"cubic-bezier(.2,.9,.2,1)"}).addEventListener("finish",()=>u.remove())},bw);m!==void 0&&i.set(u,m)},dispose(){for(const c of i.values())e?.clearTimeout(c);i.clear(),r?.remove(),r=null}}}let Sp;function Lr(n,e="ok"){Sp??=ww(),Sp.notify(n,e)}const Ea={squadron:2155134,friendly:2985215,neutral:16767050,enemy:16738613,white:15332072,terrain:6062736},Gm={squadron:"中队",friendly:"友军",neutral:"中立",enemy:"敌军"},Bu={active:"在编",destroyed:"已击落",wreck:"残骸"},os=new A_;os.background=new kt(133653);const bt=new Ii(42,innerWidth/innerHeight,.1,5e3);bt.position.set(0,240,410);const vt=new eM({antialias:!0,powerPreference:"high-performance"});vt.setPixelRatio(Math.min(devicePixelRatio,2));vt.setSize(innerWidth,innerHeight);vt.outputColorSpace=pi;vt.domElement.setAttribute("aria-label","三维地图画布");vt.domElement.setAttribute("role","img");vt.domElement.tabIndex=0;document.querySelector("#scene").appendChild(vt.domElement);const It=new nM(bt,vt.domElement);It.target.set(0,0,0);It.enableDamping=!0;It.dampingFactor=.08;It.minDistance=35;It.maxDistance=1e4;It.maxPolarAngle=Math.PI*.49;const Wm=new mv(1588299,30,850);Wm.position.set(0,140,0);os.add(Wm);const rn=new wn;os.add(rn);let Yr;function Xm(n,e){Yr&&(rn.remove(Yr),Yr.geometry.dispose(),Yr.material.dispose()),Yr=LM(n,e),rn.add(Yr),Rm(Yr,bt.position.distanceTo(It.target))}Xm(750,750);function Ta(n,e,t=1,i=1){const r=new Ft().setFromPoints(n),s=new wi({color:e,transparent:!0,opacity:i});return new an(r,s)}let gt=new Ip,Dn=new Up,Ba=42,Ls=0;function Et(n,e){return gt.sample(n,e)}function qm(){const n=document.querySelector("#terrain-contour-smooth").checked;return TM(gt,{smoothing:n})}const jc=32,xl=new Map,Ew=new Mn({vertexColors:!0,transparent:!0,opacity:.64,side:pn,depthWrite:!1}),Tw=new om({color:14477547,size:.45,transparent:!0,opacity:.65,depthWrite:!1}),Aw=(n,e)=>`${n},${e}`;function $m(n){const e=Dn.buildings(gt,Ba,Ls,n),t=[],i=[],r=[],s=Math.cos(Ls),o=Math.sin(Ls);for(const d of e){const f=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([u,h])=>{const m=u*d.width/2,_=h*d.depth/2,g=d.x+m*s-_*o,p=d.z+m*o+_*s;return new S(g,Et(g,p)+.32,p)});for(const u of[0,1,2,0,2,3]){const h=f[u];t.push(h.x,h.y,h.z),i.push(d.shade*.82,d.shade*.91,d.shade)}for(let u=0;u<3;u++){const h=d.x+(u-1)*d.width*.26*s,m=d.z+(u-1)*d.width*.26*o;r.push(h,Et(h,m)+.36,m)}}for(const d of[...n.group.children])d.geometry?.dispose(),n.group.remove(d);const a=new Ft;a.setAttribute("position",new Dt(t,3)),a.setAttribute("color",new Dt(i,3));const c=new we(a,Ew);c.renderOrder=-1;const l=new am(new Ft().setAttribute("position",new Dt(r,3)),Tw);l.renderOrder=-1,n.group.add(c),n.group.add(l),n.group.userData.count=e.length}function Ym(){let n=0;for(const e of xl.values())n+=e.group.userData.count;return n}function jm(){const n=new wn;xl.clear();for(let e=0;e<Dn.size;e+=jc)for(let t=0;t<Dn.size;t+=jc){const i={minX:t,minZ:e,maxX:Math.min(Dn.size-1,t+jc-1),maxZ:Math.min(Dn.size-1,e+jc-1),group:new wn};$m(i),xl.set(Aw(t,e),i),n.add(i.group)}return n.userData.count=Ym(),n}function Rw(n){for(const e of xl.values())n&&(e.maxX<n.minX||e.minX>n.maxX||e.maxZ<n.minZ||e.minZ>n.maxZ)||$m(e);Cs.userData.count=Ym()}function Cw(n){n.traverse(e=>{e.geometry?.dispose()}),rn.remove(n),n.clear()}let To=null;function Pw(n,e){const t=Math.max(0,Math.floor((n.x-e+Dn.extent)/Dn.spacing)),i=Math.min(Dn.size-1,Math.ceil((n.x+e+Dn.extent)/Dn.spacing)),r=Math.max(0,Math.floor((n.z-e+Dn.extentZ)/Dn.spacingZ)),s=Math.min(Dn.size-1,Math.ceil((n.z+e+Dn.extentZ)/Dn.spacingZ)),o=To;To=o?{minX:Math.min(o.minX,t),maxX:Math.max(o.maxX,i),minZ:Math.min(o.minZ,r),maxZ:Math.max(o.maxZ,s)}:{minX:t,maxX:i,minZ:r,maxZ:s}}function Dw(){if(!To)return;const n=To;To=null,Rw(n)}let Cs=jm();rn.add(Cs);let _i=qm();rn.add(_i);let kr=!1,on=null,yl=null,Ha=!0,Is=null;function Zm(){!on||yl!==gt?(on&&(rn.remove(on.root),on.dispose()),on=Am(gt,{smoothing:!!document.querySelector("#terrain-contour-smooth")?.checked}),yl=gt,rn.add(on.root)):Ha&&on.update();const n=on.root.children[0]?.material,e=!!document.querySelector("#terrain-contour-smooth")?.checked;n?.userData.terrainContours&&n.userData.contourSmoothing!==e&&(n.userData.contourSmoothing=e,n.needsUpdate=!0),Ha=!1,on.root.visible=_i===on.root||!!Pt?.height}function Km(){Is&&(Zm(),on.update(Is),Is=null,_i!==on.root&&(_i.visible=!1))}function Lw(n,e){const t=Math.max(0,Math.floor((n.x-e+gt.extent)/gt.spacing)),i=Math.min(gt.size-1,Math.ceil((n.x+e+gt.extent)/gt.spacing)),r=Math.max(0,Math.floor((n.z-e+gt.extentZ)/gt.spacingZ)),s=Math.min(gt.size-1,Math.ceil((n.z+e+gt.extentZ)/gt.spacingZ));if(t>i||r>s)return;const o=Is;Is=o?{minX:Math.min(o.minX,t),maxX:Math.max(o.maxX,i),minZ:Math.min(o.minZ,r),maxZ:Math.max(o.maxZ,s)}:{minX:t,maxX:i,minZ:r,maxZ:s}}function kl(n=!1){cc();const e=n&&on&&yl===gt;Ha=!e,Is=null,on&&(on.root.visible=!!e),e?(_i!==on.root&&Oo(_i),_i=on.root,_i.visible=!0):(_i===on?.root?(rn.remove(on.root),on.dispose(),on=null):Oo(_i),_i=qm(),rn.add(_i)),kr=!1,Cw(Cs),Cs=jm(),rn.add(Cs);const t=Or(De);t.units.forEach(r=>{Sh(r,t.turn),(r.unit.icon==="ground"||r.unit.icon==="ship")&&Al(r.unit)}),Ro();const i=gt.data.reduce((r,s)=>Math.max(r,s),0);document.querySelector("#terrain-state").textContent=`${gt.extent*2/25} × ${gt.extentZ*2/25} km / 最高 ${(i/25).toFixed(2)} km / 建筑 ${Cs.userData.count}`}const st=[{id:"rex",label:"REX",faction:"squadron",kind:"F-16C",icon:"air-filled",positions:[new S(-250,60,250),new S(-170,85,180),new S(-70,108,140),new S(30,125,130),new S(130,138,150)]},{id:"tasha",label:"TASHA",faction:"friendly",kind:"MIRAGE 2000-5",icon:"air-outline",positions:[new S(-210,84,270),new S(-120,88,185),new S(-20,94,130),new S(65,90,80),new S(150,96,30)]},{id:"professor",label:"PROFESSOR",faction:"neutral",kind:"EA-6B",icon:"air-outline",positions:[new S(-275,52,300),new S(-190,55,215),new S(-90,61,165),new S(10,65,125),new S(105,68,85)]},{id:"mig29",label:"MIG-29A",faction:"enemy",kind:"MIG-29",icon:"air-outline",destroyedAtTurn:3,positions:[new S(300,120,-220),new S(195,100,-150),new S(100,78,-70),new S(20,55,10),new S(20,55,10)]},{id:"sam",label:"SAM",faction:"enemy",kind:"SAM",icon:"ground",tgt:!0,positions:[new S(160,0,-150),new S(160,0,-150),new S(160,0,-150),new S(160,0,-150),new S(160,0,-150)]},{id:"frigate",label:"FRIGATE",faction:"enemy",kind:"FRIGATE",icon:"ship",tgt:!0,positions:[new S(245,0,-40),new S(230,0,-30),new S(215,0,-20),new S(200,0,-10),new S(185,0,0)]}],Yn=[{summary:"FORMATION / INITIAL CONTACT",events:[]},{summary:"TACTICAL MOVEMENT / CONTACT",events:[{kind:"attack",attacker:"mig29",target:"rex",weapon:"2AAM"}]},{summary:"ENGAGEMENT / RANGE CLOSING",events:[{kind:"attack",attacker:"rex",target:"mig29",weapon:"QAAM"}]},{summary:"LOSSES / RESULT PENDING",events:[{kind:"destroy",target:"mig29"}]},{summary:"FINAL POSITION / RESULT",events:[]}];function Kn(){return Yn.length}function Ti(){return Yn.length-1}function Jm(){return typeof Ct<"u"&&Ct?Bl:Ti()}function Xs(n,e){return Sw(n.destroyedAtTurn,e)}function Wd(n){return st.find(e=>e.id===n)?.label??n.toUpperCase()}function Iw(n){return n.kind==="attack"?`${Wd(n.attacker)} → ${Wd(n.target)} / ${n.weapon}`:`${Wd(n.target)} 被击落`}function Or(n){const e=Math.max(0,Math.min(n,Ti())),t=Yn[e];return{turn:e,summary:t.summary,events:t.events,units:st.map(i=>({unit:i,position:tc(i,i.positions[Math.min(e,i.positions.length-1)],Et),status:Xs(i,e)}))}}st.forEach(n=>{n.positions.length!==Kn()&&console.warn(`[scenario] ${n.label} has ${n.positions.length} keyframes but the scenario declares ${Kn()} turns`)});let De=0,fe=null;const Ai=new Map,zs=new Map,Ns=new Map;let sl,mo=null,Hu=-1/0,ol="",Xd=[];const Nw=.675,qd=new cn().setFromEuler(new In(-Math.PI/2,0,0)),Qm=22,si=1.5,bp=7.2;function Uw(){const n=[];for(let e=0;e<=64;e++){const t=e/64*Math.PI*2;n.push(new S(Math.cos(t)*bp,Math.sin(t)*bp,0))}return n}function kw(n,e){const t=YM(n.icon,e);return t.scale.setScalar(Nw),t.traverse(i=>{i.userData.unit=n}),t}function vh(n,e){const t=n.icon==="ground"?Math.PI:0;if(Sn())return ns(kp({...n,destroyedAtTurn:n.attitudes?.[e]?void 0:n.destroyedAtTurn},e,{epsilon:.001}).yaw+t);const i=Math.min(e,n.positions.length-1),r=n.attitudes?.[i];if(r)return ns(r.yaw+t);const s=n.positions[Math.max(0,i-1)],o=n.positions[Math.min(n.positions.length-1,i+1)],a=o.x-s.x,c=o.z-s.z;return Math.hypot(a,c)<.001?null:ns(Math.atan2(-a,-c)+t)}function xh(n,e){const t=n.routeBinding;if(!t||Sn())return null;const i=Math.min(e,n.positions.length-1);if(i<=t.startTurn)return null;const r=n.positions.length-1,s=n.icon==="ground"?Math.PI:0,o=(c,l)=>{const d=l.x-c.x,f=l.z-c.z;return Math.hypot(d,f)<.001?null:Math.atan2(-d,-f)+s},a=o(n.positions[Math.max(t.startTurn,i-1)],n.positions[Math.min(r,i+1)]);if(a!==null)return ns(a);for(let c=i;c>t.startTurn;c--){const l=o(n.positions[c-1],n.positions[c]);if(l!==null)return ns(l)}return null}const $d=.6,Mp=2,wp=new S(0,1,0),Fw=new S(1,0,0),Ow=new S(0,0,1);function ns(n){return Math.atan2(Math.sin(n),Math.cos(n))}function Ep(n,e){const t=n.positions[e],i=n.positions[e+1];if(!t||!i)return null;const r=i.x-t.x,s=i.z-t.z;return Math.hypot(r,s)<.001?null:Math.atan2(r,s)}function yh(n,e){if(n.icon!=="air-filled"&&n.icon!=="air-outline")return null;if(Sn())return kp({...n,destroyedAtTurn:n.attitudes?.[e]?void 0:n.destroyedAtTurn},e,{epsilon:.001,maxBank:$d,rollGain:Mp});const t=Math.min(e,n.positions.length-1),i=n.attitudes?.[t];if(i)return i;const r=n.positions[Math.max(0,t-1)],s=n.positions[Math.min(n.positions.length-1,t+1)],o=s.x-r.x,a=s.y-r.y,c=s.z-r.z,l=Math.hypot(o,c);if(l<.001&&Math.abs(a)<.001)return null;const d=Math.atan2(-o,-c),f=Math.atan2(a,Math.max(l,.001)),u=Ep(n,t-1),h=Ep(n,t),m=u===null||h===null?0:jt.clamp(Mp*ns(h-u),-$d,$d);return{yaw:d,pitch:f,roll:m}}function qo(n){const e=new wn;e.userData.unit=n,e.userData.pickable=!0;const t=Ea[n.faction],i=n.icon==="ground"||n.icon==="ship";let r=null;i||(r=new we(new Il(2.2,3.3,20),new Mn({color:t,transparent:!0,opacity:.8,side:pn})),r.rotation.x=-Math.PI/2,r.userData.unit=n,e.add(r));const s=new an(new Ft,new wi({color:t,transparent:!0,opacity:.8}));s.userData.unit=n,e.add(s);const o=kw(n,t),a=new an(new Ft().setFromPoints(Uw()),new wi({color:t,transparent:!0,opacity:.9,depthTest:!1}));a.visible=!1,a.userData.unit=n,o.add(a);const c=Cm(t);c.userData.unit=n,o.add(c),e.add(o);const l=2.6,d=new wi({color:t,transparent:!0,opacity:.9,depthTest:!1}),f=new wn;f.add(new an(new Ft().setFromPoints([new S(-l,0,-l),new S(l,0,l)]),d)),f.add(new an(new Ft().setFromPoints([new S(-l,0,l),new S(l,0,-l)]),d)),f.visible=!1,e.add(f);const u=[];o.traverse(g=>{const p=g.material;!p||Array.isArray(p)||u.push({material:p,baseOpacity:p.opacity})});const h=document.createElement("div");h.className=`world-label ${n.faction}`,h.textContent=n.label,h.style.cssText=`position:absolute; left:0; top:0; transform:translate(0, 0); color:#${t.toString(16).padStart(6,"0")}; text-shadow:0 0 7px #${t.toString(16).padStart(6,"0")}; font:14px 'Share Tech Mono',monospace; white-space:nowrap; pointer-events:none;`;const m=new xn;m.userData.dom=h,e.add(m),e.userData.parts={base:r,pole:s,icon:o,label:m,wreck:f,tgtRing:a,escortMarker:c,iconMaterials:u,labelFade:1};const _=VM(t);_.root.traverse(g=>{g.userData.unit=n}),e.add(_.root),zs.set(n.id,_),rn.add(e),Ai.set(n.id,e)}function Sh(n,e){const{unit:t,status:i}=n,r=Ai.get(t.id),s=r.userData.parts,o=i==="wreck",a=!(typeof Ct<"u"&&Ct)&&!Sn()&&o&&t.destroyedAtTurn!==void 0,c=tc(t,a?t.positions[Math.min(t.destroyedAtTurn,t.positions.length-1)]:n.position,Et),l=t.intangible?c.y:Et(c.x,c.z);r.position.set(c.x,l,c.z);const d=Math.max(0,c.y-l),f=Ul(t,c,Et,si).y-l,u=s.base===null?f+Qm-si:Math.max(d,.6);if(s.base&&(s.base.visible=!o),s.icon.visible=!o,s.pole.visible=!o,s.wreck.visible=i!=="active",s.wreck.position.y=f,s.tgtRing.visible=t.tgt===!0&&i==="active",s.escortMarker.visible=t.escort===!0&&t.faction!=="enemy"&&i==="active",!o){let p=s.pole.geometry.getAttribute("position");p?(p.setXYZ(0,0,.2,0),p.setXYZ(1,0,u,0),p.needsUpdate=!0):(p=new Dt([0,.2,0,0,u,0],3),s.pole.geometry.setAttribute("position",p)),s.pole.geometry.computeBoundingSphere(),s.pole.geometry.boundingBox&&s.pole.geometry.computeBoundingBox()}const h=s.icon;h.position.y=f;const m=yh(t,e),_=xh(t,e);if(m===null||_!==null){const p=_??vh(t,e);p===null?h.quaternion.copy(qd):h.quaternion.setFromAxisAngle(wp,p).multiply(qd)}else h.quaternion.setFromAxisAngle(wp,m.yaw).multiply(new cn().setFromAxisAngle(Fw,m.pitch)).multiply(new cn().setFromAxisAngle(Ow,m.roll)).multiply(qd);const g=i==="destroyed";s.iconMaterials.forEach(({material:p,baseOpacity:w})=>{p.transparent||(p.transparent=!0,p.needsUpdate=!0),p.userData.baseDepthTest??=p.depthTest,p.depthTest=t.intangible?!1:p.userData.baseDepthTest,p.opacity=w*(g?.3:1)*(t.hidden?.35:1)});for(const p of[s.base,s.pole,...s.wreck.children]){const w=p?.material;!w||Array.isArray(w)||(w.userData.hiddenBaseOpacity??=w.opacity,w.opacity=w.userData.hiddenBaseOpacity*(t.hidden?.35:1))}s.labelFade=(o?0:g?.5:1)*(t.hidden?.5:1),s.label.position.y=u}function eg(n,e){const t=new wn;if(t.userData.trail=!0,n.length<2)return t;const i=[],r=2.3;n.forEach((c,l)=>{const d=n[Math.max(0,l-1)],f=n[Math.min(n.length-1,l+1)],u=new S().subVectors(f,d).normalize(),h=new S(-u.z,0,u.x).normalize().multiplyScalar(r*(.45+l/n.length*.55));i.push(c.x+h.x,c.y+.5,c.z+h.z,c.x-h.x,c.y+.5,c.z-h.z)});const s=[];for(let c=0;c<n.length-1;c++)s.push(c*2,c*2+1,c*2+2,c*2+1,c*2+3,c*2+2);const o=new Ft;o.setAttribute("position",new Dt(i,3)),o.setIndex(s),o.computeVertexNormals();const a=new Mn({color:e,transparent:!0,opacity:.28,side:pn,depthWrite:!1,blending:jd});return t.add(new we(o,a)),t}function bh(n,e){return Sn()?Tt()?.sealedScenes?.find(t=>t.turn<=e&&t.units.some(i=>i.id===n.id))?.turn??e:0}function Mh(n,e,t){const i=Fp(n.positions,n.trackPoints??[],e,t).map(a=>new S(a.x,a.y,a.z));if(i.length<2)return[];const r=new uh(i,!1,"centripetal"),s=[];let o=0;for(let a=e;a<t;a++){const c=(n.trackPoints??[]).filter(m=>m.segment===a).length+1,l=o/(i.length-1),d=(o+c)/(i.length-1),f=Math.max(24,c*16),u=i.slice(o,o+c+1).every(m=>m.distanceToSquared(i[o])<1e-12),h=Array.from({length:f+1},(m,_)=>u?i[o].clone():r.getPoint(jt.lerp(l,d,_/f)));s.push({segment:a,points:h,start:l,end:d,curve:r}),o+=c}return s}function tg(n,e){const{unit:t,status:i}=n;if(i==="wreck"||document.querySelector("#trail-display").value==="none")return;const r=t.destroyedAtTurn===void 0?e:Math.min(e,t.destroyedAtTurn),s=document.querySelector("#trail-display").value==="recent",o=Math.max(1,Math.floor(Number(document.querySelector("#trail-turns").value)||1)),a=bh(t,e),c=Math.max(a,s?Math.max(0,r-o):0),l=Mh(t,a,r).filter(f=>f.segment>=c).flatMap((f,u)=>u?f.points.slice(1):f.points);!t.intangible&&(t.icon==="ground"||t.icon==="ship")&&l.forEach(f=>{f.y=Et(f.x,f.z)+si});const d=eg(l,Ea[t.faction]);d.userData.trail=t.id,rn.add(d)}const $o=document.createElement("div");$o.className="labels";$o.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;contain:strict;";document.querySelector("#app").appendChild($o);function Yo(){for(const[,n]of Ai){const e=n.userData.parts.label,t=e.userData.dom;t.dataset.unitId=n.userData.unit.id,$o.appendChild(t),e.userData.domObject=t}}let Fe=!1,Ht=!1;const vn=[{id:"route-1",name:"ROUTE 1",waypoints:[]}];let Nn="route-1",Va=2,Sl=1,xi="",Ni="",un=null,Ga=[],Ln=new wn;rn.add(Ln);const Ui=new Map;function bl(){return vn.find(n=>n.id===Nn)??vn[0]}function Uo(){return bl()?.waypoints??[]}const Ml=document.createElement("div");Ml.className="waypoint-labels";document.querySelector("#app").appendChild(Ml);const Vu=[];let wl=1,El=1,Xt=!1,Fn=!1,Vt=!1,it=null,tr=new wn;rn.add(tr);let Pt=null,rs=1;const ft=new Set;function Bi(){return st.filter(n=>ft.has(n.id))}function Ei(){return Bi().filter(n=>nc(n))}function ko(){const n=Ei();return n.reduce((e,t)=>e.add(Wn(t)),new S).divideScalar(n.length||1)}function jn(n){Mt?.clearSelection(),it?.kind==="track"&&(it=null),Vt=!1,ft.clear(),n.forEach(e=>ft.add(e.id)),fe=n[n.length-1]??null,ot(),rt()}function Fl(n,e=!1){typeof nn<"u"&&nn?.pick("unit",n.id)||(e?(ft.has(n.id)?ft.delete(n.id):ft.add(n.id),jn(Bi())):jn([n]))}function ng(n,e){const t=n.routeBinding;!t||Sn()||!ct()||!e.length||(t.startTurn=Math.min(...e))}function Wa(n){if(!mi()||!Fe)return;const e=Ei();if(!e.length)return;const t=qs();if(n.lengthSq()<1e-12&&!e.some(r=>Ws(r)&&t.some(s=>{const o=r.positions[s];return o.y!==Et(o.x,o.z)})))return;const i=e.filter(r=>Un(r)&&!r.intangible);i.length&&(n.y=Math.max(n.y,...i.flatMap(r=>t.map(s=>{const o=r.positions[s];return Math.max(0,Et(o.x+n.x,o.z+n.z))-o.y})))),En("draft")&&(e.forEach(r=>{ng(r,t),t.forEach(s=>r.positions[s].add(n)),ct()&&r.trackPoints?.forEach(s=>{t.includes(s.segment)&&t.includes(s.segment+1)&&(s.x+=n.x,s.y+=n.y,s.z+=n.z)}),$a(r,t)}),e.some(r=>r.routeBinding)&&Vi(),ot(),rt())}let Zn;const Ol=()=>({groups:[],markers:[],drawings:[]}),Oi=()=>Zn??Ol();let Hn,ig,Mt,nn,Gu,Zr,Tl="",qi=null;const zl=document.createElement("div");zl.className="editor-tool-labels";document.querySelector("#app").appendChild(zl);const zw=NM(zl);let ve=null,Ct=!1,al=null,Xa=null,qa=null,Bl=0,cl={edit:!1,terrain:!1};const Us=new Map;let Ir=null,Jr=null;function Tt(){if(!ve)return;if(Jr?.store===ve&&Jr.revision===ve.revision)return Jr.session;const n=ve.read(),e=n.project.sessions.find(t=>t.id===(n.editor.sessionId??"session-working"));return Jr={store:ve,revision:ve.revision,session:e},e}function Sn(){return Tt()?.workflow?.mode==="formal"}function ct(){if(typeof Ct<"u"&&Ct)return!1;const n=Tt();return n?.status!=="finished"&&(!n?.workflow||ki())}function Si(){return typeof Ct<"u"&&Ct||ct()}function ki(){const n=Tt();return!!n?.workflow&&n.status!=="finished"&&n.turns.length===n.workflow.committedTurns+1&&De===n.workflow.committedTurns}function mi(){return ct()||ki()}function Wt(){return!!Ze||ke.dragging||!!Pt||!!gn||!!yi||!!Mt?.isPicking()}function Yd(n,e){if(!Si()||!Fe||Ze||ke.dragging||Pt||gn||yi||!En("tools"))return!1;Zn??=Ol(),e(Zn,st);const t=dn(n);return ot("tools"),rt(),t}function Bw(n){const e=st.filter(s=>s.groupId===n.id);if(!ct()||!Fe||!e.length||Wt()||!En())return;Zn??=Ol();const t={...n,id:`group-${crypto.randomUUID()}`,name:`${n.name} 副本`.slice(0,128)};Zn.groups.push(t);const i=Th().spacing,r=e.map(s=>{const o=rc(ic(s)),a=rs++;return o.id=`unit-${a}`,o.groupId=t.id,o.routeBinding=void 0,delete o.player,delete o.playerActions,o.positions.forEach(c=>{c.x+=i,c.z+=i}),o.trackPoints?.forEach(c=>{c.x+=i,c.z+=i}),st.push(o),qo(o),o});Yo(),jn(r),Bs("translate")}function wh(n,e=.5){const t=new S(n.x,n.y,n.z).multiplyScalar(tt),i=bt.position.clone().sub(It.target).normalize();i.lengthSq()<.1&&i.set(0,.6,1).normalize();const r=Math.max(90,e*tt/Math.sin(jt.degToRad(bt.fov)/2)*1.4);It.target.copy(t),bt.position.copy(t).addScaledVector(i,Math.min(r,It.maxDistance)),It.update()}function Tp(n){const e=st.filter(r=>n.includes(r.id)).map(r=>Wn(r));if(!e.length)return;const t=e.reduce((r,s)=>r.add(s),new S).divideScalar(e.length),i=Math.max(15,...e.map(r=>r.distanceTo(t)))/tt;wh({x:t.x/tt,y:t.y/tt,z:t.z/tt},i)}function nc(n){return mi()&&(ki()||Xs(n,De)==="active")}function Eh(n){return mi()&&(ct()||n.destroyedAtTurn===void 0||n.destroyedAtTurn===De)}function dn(n="Edit scenario",e=Ir){if(!ve||!e)return!0;if(ke.dragging||Pt)return!1;try{const t=rg();return Ir=null,ve.commit(t,n,e),!0}catch(t){return Ir=null,lr(ve.read()),fe=st.find(i=>ft.has(i.id))??null,console.error("Scenario transaction rolled back",t),tn("编辑未保存："+(t instanceof Error?t.message:String(t))),!1}}function Fo(n,e){if(n===e)return!0;if(n===null||e===null||typeof n!="object"||typeof e!="object")return!1;if(Array.isArray(n)||Array.isArray(e))return!Array.isArray(n)||!Array.isArray(e)||n.length!==e.length?!1:n.every((s,o)=>Fo(s??null,e[o]??null));const t=n,i=e,r=Object.keys(t).filter(s=>t[s]!==void 0);return r.length!==Object.keys(i).filter(s=>i[s]!==void 0).length?!1:r.every(s=>Object.prototype.hasOwnProperty.call(i,s)&&Fo(t[s],i[s]))}function Hw(n,e){const t={...n,editor:{...n.editor,currentTurn:e.currentTurn}},i=Zu(t,ju(t));if(i.layout=e.layout,!Fo(e,i))throw new Error("已提交回合保留原样；请在末尾草稿编辑场景");return{...n,editor:{...t.editor,activeRouteId:e.activeRouteId}}}function rg(n=Hl()){if(typeof Ct<"u"&&Ct&&ve){const u=ve.read(),h=u.project.sessions.find(m=>m.id===u.editor.sessionId);return h.sceneTools=structuredClone(n.sceneTools??Ol()),u}if(ve&&(Tt()?.status==="finished"||Sn()&&!ki()))return Hw(ve.read(),n);const e=Ug(n,n.layout??{size:gt.size,extent:gt.extent,extentZ:gt.extentZ});if(!ve)return e;const t=ve.read(),i=t.project,r=t.editor.sessionId??"session-working",s=i.sessions.find(u=>u.id===r),o=i.maps.find(u=>u.id===s.mapRef.id&&u.revision===s.mapRef.revision),a=e.project.sessions[0];if(a.id=s.id,a.name=s.name,a.taskRef=s.taskRef,a.mapRef=s.mapRef,a.resourceSnapshot=s.resourceSnapshot,a.rulesRevision=s.rulesRevision,a.status=s.status,s.rulesRef&&(a.rulesRef={...s.rulesRef}),s.rulesSnapshot&&(a.rulesSnapshot=structuredClone(s.rulesSnapshot)),a.workflow=s.workflow,a.mapEditRef=s.mapEditRef,s.workflow){a.sealedScenes=kg(s),a.turns=s.turns.map((h,m)=>m===De?a.turns[m]:h);const u=Zu(t,ju(t));a.units.forEach(h=>{const m=s.units.find(g=>g.id===h.id),_=u.units.find(g=>g.id===h.id);if(m){for(let g=0;g<De;g++)h.positions[g]=m.positions[g],h.attitudes&&(h.attitudes[g]=m.attitudes?.[g]??null);_&&Fo(n.units.find(g=>g.id===h.id)?.positions[De],_.positions[De])&&(h.positions[De]=m.positions[De])}})}const c=e.project.maps[0];c.id=o.id,c.revision=o.revision,c.name=o.name;const l=u=>u.id===o.id&&u.revision===o.revision,d=c.terrain.size!==o.terrain.size||c.terrain.widthKm!==(o.terrain.widthKm??o.terrain.extentKm*2)||c.terrain.heightKm!==(o.terrain.heightKm??o.terrain.extentKm*2)||!Fo(c.urban,o.urban)||c.terrain.heightsKm.some((u,h)=>Math.abs(u-o.terrain.heightsKm[h])>1e-7),f=!!s.workflow||i.tasks.some(u=>l(u.mapRef))||i.sessions.some(u=>u.id!==r&&l(u.mapRef));return d&&f&&(c.revision=Math.max(...i.maps.filter(u=>u.id===o.id).map(u=>u.revision))+1,a.mapRef={id:c.id,revision:c.revision}),e.project={...i,maps:d?f?[...i.maps,c]:i.maps.map(u=>l(u)?c:u):i.maps,sessions:i.sessions.map(u=>u.id===r?a:u)},e.editor.sessionId=r,e}function lr(n){const e=ju(n);(gt.size!==e.size||gt.extent!==e.extent||gt.extentZ!==e.extentZ)&&(gt=new Ip(e.size,e.extent,e.extentZ),Dn=new Up(e.size,e.extent,e.extentZ),Xm(e.extent,e.extentZ??e.extent),sc(),Rh()),Vw(Zu(n,e))}function ic(n){return{id:n.id,label:n.label,faction:n.faction,kind:n.kind,icon:n.icon,positions:n.positions.map(e=>({x:e.x,y:e.y,z:e.z})),attitudes:n.attitudes?.map(e=>e?{...e}:null),destroyedAtTurn:n.destroyedAtTurn,tgt:n.tgt,...n.escort===void 0?{}:{escort:n.escort},...n.hidden===void 0?{}:{hidden:n.hidden},...n.intangible===void 0?{}:{intangible:n.intangible},groupId:n.groupId,aircraftRef:n.aircraftRef?{...n.aircraftRef}:void 0,spRefs:n.spRefs?.map(e=>({...e})),...n.loadout===void 0?{}:{loadout:n.loadout.map(e=>({slot:e.slot,weaponRef:{...e.weaponRef}}))},...n.player===void 0?{}:{player:{...n.player}},...n.playerActions===void 0?{}:{playerActions:structuredClone(n.playerActions)},routeBinding:n.routeBinding?{...n.routeBinding,offset:n.routeBinding.offset?{...n.routeBinding.offset}:void 0}:void 0,trackPoints:n.trackPoints?.map(e=>({...e}))}}function rc(n){return{id:n.id,label:n.label,faction:n.faction,kind:n.kind,icon:n.icon,positions:n.positions.map(e=>new S(e.x,e.y,e.z)),attitudes:n.attitudes?.map(e=>e?{...e}:null),destroyedAtTurn:n.destroyedAtTurn,tgt:n.tgt,...n.escort===void 0?{}:{escort:n.escort},...n.hidden===void 0?{}:{hidden:n.hidden},...n.intangible===void 0?{}:{intangible:n.intangible},groupId:n.groupId,aircraftRef:n.aircraftRef?{...n.aircraftRef}:void 0,spRefs:n.spRefs?.map(e=>({...e})),...n.loadout===void 0?{}:{loadout:n.loadout.map(e=>({slot:e.slot,weaponRef:{...e.weaponRef}}))},...n.player===void 0?{}:{player:{...n.player}},...n.playerActions===void 0?{}:{playerActions:structuredClone(n.playerActions)},routeBinding:n.routeBinding?{...n.routeBinding,offset:n.routeBinding.offset?{...n.routeBinding.offset}:void 0}:void 0,trackPoints:n.trackPoints?.map(e=>({...e}))}}function Hl(){return{units:st.map(ic),turns:Yn.map(n=>({summary:n.summary,events:n.events.map(e=>({...e}))})),currentTurn:De,...Zn?{sceneTools:structuredClone(Zn)}:{},layout:{size:gt.size,extent:gt.extent,extentZ:gt.extentZ},terrain:gt.data.slice(),urban:Dn.data.slice(),urbanSeed:Ba,urbanAngle:Ls,routes:vn.map(n=>({...n,waypoints:n.waypoints.map(e=>({...e}))})),activeRouteId:Nn}}function Oo(n){n.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i&&i.dispose()}),rn.remove(n)}function sg(n){const e=Ai.get(n.id);if(!e)return;e.userData.parts.label.userData.dom.remove(),Oo(e),Ai.delete(n.id),zs.delete(n.id),Ns.delete(n.id),cc()}function Vw(n){Zn=n.sceneTools?structuredClone(n.sceneTools):void 0,vn.splice(0,vn.length,...n.routes.map(e=>({...e,waypoints:e.waypoints.map(t=>({...t}))}))),Nn=n.activeRouteId,it=null,Xt=!1,Vt=!1,gt.data.set(n.terrain),Dn.data.set(n.urban),Ba=n.urbanSeed,Ls=n.urbanAngle,kr=!0,ut("#urban-seed").value=String(Ba),ut("#urban-angle").value=String(jt.radToDeg(Ls)),Yn.splice(0,Yn.length,...n.turns.map(e=>({summary:e.summary,events:e.events.map(t=>({...t}))}))),De=Math.min(n.currentTurn,Ti());for(const e of[...Ai.values()])Oo(e);Ai.clear(),zs.clear(),Ns.clear(),cc(),$o.replaceChildren(),st.length=0,n.units.forEach(e=>st.push(rc(e))),st.forEach(qo),Yo()}function En(n="author"){return!Fe||(n==="tools"?!Si():n==="author"?!ct():!mi())||!dn()?!1:(Ir=ve?.read()??null,!0)}function og(n){if(!ve||ke.dragging||Pt||Ze||!ct()&&!(ki()&&n.type==="set-turn-summary"&&n.turn===De&&n.sessionId===Tt()?.id)||!dn())return;const e=[...ft];ve.dispatch(n),lr(ve.read()),ft.clear(),e.filter(t=>st.some(i=>i.id===t)).forEach(t=>ft.add(t)),fe=Bi().at(-1)??null,ot(),rt()}function Vl(){if(Ze||ke.dragging||Pt)return;dn();const n=ve?.undo();if(!n)return;const e=[...ft];lr(n),ft.clear(),e.filter(t=>st.some(i=>i.id===t)).forEach(t=>ft.add(t)),fe=Bi().at(-1)??null,ot(),rt()}function Gl(){if(Ze||ke.dragging||Pt)return;dn();const n=ve?.redo();if(!n)return;const e=[...ft];lr(n),ft.clear(),e.filter(t=>st.some(i=>i.id===t)).forEach(t=>ft.add(t)),fe=Bi().at(-1)??null,ot(),rt()}function Gw(n){sg(n),qo(n),Yo()}function Al(n){cc();const e={unit:n,position:Wn(n),status:Xs(n,De)};Sh(e,De),rn.children.filter(t=>t.userData.trail===n.id).forEach(t=>Oo(t)),tg(e,De),fe===n&&ft.size<=1&&dg(e,Or(De))}function Wn(n,e=!1){const t=n.positions[Math.min(De,n.positions.length-1)];return e?t:tc(n,t,Et)}function $a(n,e=qs()){Ws(n)&&(e.forEach(t=>{const i=n.positions[t];i.y=Et(i.x,i.z)}),ct()&&n.trackPoints?.forEach(t=>{e.includes(t.segment)&&e.includes(t.segment+1)&&(t.y=Et(t.x,t.z))}))}function Ww(){!ct()||Tt()?.mapEditRef||!Fe||ke.dragging||(Ri(!0),hn=!1,ss(),ft.clear(),fe=null,Ze={id:`unit-${rs}`,label:`NEW-${String(rs).padStart(2,"0")}`,faction:"enemy",kind:"UNKNOWN",icon:"air-outline",tgt:!1,positions:Array.from({length:Kn()},()=>new S(0,60,0)),attitudes:Array.from({length:Kn()},()=>({yaw:0,pitch:0,roll:0}))},Xl(),rt())}function Xw(){if(!ct()||!Fe)return;const n=Bi();if(!n.length||Ze||ke.dragging||!En())return;const e=new Set(n.map(t=>t.id));Zn?.links&&(Zn.links=Zn.links.filter(t=>!e.has(t.fromUnitId)&&!(t.to.kind==="unit"&&e.has(t.to.id)))),n.forEach(t=>{sg(t),st.splice(st.indexOf(t),1)}),Yn.forEach((t,i)=>{(!Sn()||i===De)&&(t.events=t.events.filter(r=>!e.has(r.target)&&(r.kind!=="attack"||!e.has(r.attacker))))}),jn([])}function Th(){const n=Math.floor(Number(ut("#create-count").value)),e=Number(ut("#create-spacing").value);return{count:Number.isFinite(n)?jt.clamp(n,1,100):1,spacing:Number.isFinite(e)?jt.clamp(e,1,1e3):20}}function ag(){if(!ct()||!Fe)return;const n=Bi();if(!n.length||Ze||ke.dragging)return;const{count:e,spacing:t}=Th();if(!En())return;const i=[];for(let r=0;r<e;r++)for(const s of n){const o=rc(ic(s)),a=rs++;o.id=`unit-${a}`,delete o.player,delete o.playerActions,o.routeBinding=void 0,o.trackPoints?.forEach(c=>{c.x+=t*(r+1),c.z+=t*(r+1)}),o.positions.forEach(c=>{c.x+=t*(r+1),c.z+=t*(r+1)}),i.push(o),st.push(o),qo(o)}Yo(),jn(i),Bs("translate")}st.forEach(qo);Yo();function ot(n){cc(),dn(),ve&&!Ir&&!ke.dragging&&!Pt&&ve.setEditor({currentTurn:De,activeRouteId:Nn,sessionId:ve.read().editor.sessionId??"session-working"}),n!=="tools"&&Ch(),cg();const e=Or(De);Mt?.sync(),typeof nn<"u"&&(ke.dragging?nn?.update():nn?.sync()),n!=="tools"&&(rn.children.filter(i=>i.userData.trail).forEach(i=>{rn.remove(i),i.traverse(r=>{(r instanceof we||r instanceof an)&&(r.geometry.dispose(),Array.isArray(r.material)?r.material.forEach(s=>s.dispose()):r.material.dispose())})}),e.units.forEach(i=>{Sh(i,e.turn),tg(i,e.turn)})),document.querySelector("#turn-title").textContent=`TURN ${String(e.turn+1).padStart(2,"0")}`,document.querySelector("#turn-indicator").textContent=`${String(e.turn+1).padStart(2,"0")} / ${String(Jm()+1).padStart(2,"0")}`,document.querySelector("#turn-summary").textContent=e.summary,document.querySelector("#unit-count").textContent=String(e.units.length).padStart(2,"0"),document.querySelector("#event-list").textContent=e.events.length===0?"无接触":e.events.map(Iw).join(`
`);const t=e.units.find(i=>i.unit===fe);t?dg(t,e):(fe=null,Xl()),ft.size>1&&(document.querySelector("#selected-name").textContent=`${ft.size} UNITS`,document.querySelector("#selected-detail").textContent=Bi().map(i=>i.label).join(" / "),document.querySelector("#distance-readout").textContent=`${Ei().length} 个可移动单位 / 编队移动`,document.querySelector("#attitude-readout").textContent="");for(const[i,r]of Ai)r.userData.parts.label.userData.dom.classList.toggle("unit-selected",Fe&&ft.has(i))}function Wu(){const n=Or(De),e=n.units.find(s=>s.unit.id===xi),t=n.units.find(s=>s.unit.id===Ni),i=Ln.userData.rangeCenters;if(i)for(const[s,o]of i){const a=n.units.find(l=>l.unit.id===s);if(!a)continue;const c=a.position.clone().sub(o);for(const l of Ln.children)l.userData.rangeUnitId===s&&l.position.add(c);o.copy(a.position)}Ln.userData.rangeCenter=i?.get(xi);const r=Ln.children.find(s=>s.userData.rangeConnector);if(e&&t&&e.unit.id!==t.unit.id&&r){const s=r.geometry.getAttribute("position");s.setXYZ(0,e.position.x,e.position.y,e.position.z),s.setXYZ(1,t.position.x,t.position.y,t.position.z),s.needsUpdate=!0,r.geometry.computeBoundingSphere();const o=Yu(e.position,t.position,"slant",Ah());document.querySelector("#range-result").textContent=`${o.band} / 斜距
水平 ${o.horizontalKm.toFixed(2)} km
高差 ${o.altitudeDeltaKm.toFixed(2)} km
斜距 ${o.slantKm.toFixed(2)} km${e.status!=="active"||t.status!=="active"?`
已失效单位 / 仅供参考`:""}`}}function Ah(){const n=Tt(),e=n?.sealedScenes?.find(t=>t.turn===De);return Fg(e?e.rulesSnapshot:n?.rulesSnapshot)}function Wl(n){xi=n;const e=Ui.get(n);e&&(document.querySelector("#range-rings").checked=e.rings,document.querySelector("#range-fill").checked=e.fill,document.querySelector("#range-fill-band").value=e.band,document.querySelector("#range-fill-opacity").value=String(e.opacity))}function qw(n){Ui.delete(n),xi===n&&(xi=""),Gn(),ot()}function $w(n,e){for(const a of Ui.keys())n.units.some(c=>c.unit.id===a)||Ui.delete(a);const t=Ln.userData.rangeLayerKeys??new Map,i=Ln.userData.rangeCenters??new Map;Ln.userData.rangeLayerKeys=t,Ln.userData.rangeCenters=i;const r=a=>{for(const c of[...Ln.children])if(c.userData.rangeUnitId===a){const l=c;l.geometry.dispose(),Array.isArray(l.material)?l.material.forEach(d=>d.dispose()):l.material.dispose(),Ln.remove(c)}t.delete(a),i.delete(a)};for(const a of t.keys())Ui.has(a)||r(a);for(const[a,c]of Ui){const l=n.units.find(u=>u.unit.id===a),d=e.find(u=>u.name===c.band)??e[0],f=JSON.stringify([c,e]);if(t.get(a)!==f){if(r(a),t.set(a,f),i.set(a,l.position.clone()),c.fill){const u=new we(new ts(d.maxKm*tt,48,32),new Mn({color:d.color,transparent:!0,opacity:c.opacity,depthWrite:!1,side:Nr}));u.position.copy(l.position),u.userData.rangeFill={band:d.name,radiusKm:d.maxKm},u.userData.rangeCentered=!0,u.userData.rangeUnitId=a,Ln.add(u)}if(c.rings)for(const u of e){const h=u.maxKm*tt,m=Array.from({length:129},(g,p)=>{const w=p/128*Math.PI*2;return new S(l.position.x+Math.cos(w)*h,l.position.y,l.position.z+Math.sin(w)*h)}),_=Ta(m,u.color,1,.5);_.userData.rangeCentered=!0,_.userData.rangeUnitId=a,Ln.add(_)}}}const s=document.querySelector("#range-layer-list");s&&s.replaceChildren(...Array.from(Ui,([a,c])=>{const l=n.units.find(_=>_.unit.id===a),d=document.createElement("div");d.className="range-layer-row",d.dataset.rangeUnitId=a;const f=document.createElement("div");f.textContent=`${l.unit.label} [${a}] · ${c.rings?"截面环":""}${c.rings&&c.fill?" + ":""}${c.fill?`${c.band}球体`:""}`;const u=document.createElement("div");u.className="edit-actions";const h=document.createElement("button");h.type="button",h.textContent="调整",h.setAttribute("aria-label",`调整${l.unit.label}的范围`),h.addEventListener("click",()=>{Wl(a),Gn(),ot()});const m=document.createElement("button");return m.type="button",m.textContent="移除",m.setAttribute("aria-label",`移除${l.unit.label}的范围`),m.addEventListener("click",()=>qw(a)),u.appendChild(h),u.appendChild(m),d.appendChild(f),d.appendChild(u),d}));const o=document.querySelector("#range-layer-count");o&&(o.textContent=`常驻范围：${Ui.size} 个单位`)}function cg(){const n=Tt()?.id,e=Ln.userData.rangeSessionId;e&&e!==n&&(Ui.clear(),xi=Ni=""),Ln.userData.rangeSessionId=n;const t=Ah(),i=Or(De);i.units.some(m=>m.unit.id===xi)||(xi=""),i.units.some(m=>m.unit.id===Ni)||(Ni="");for(const[m,_]of[["#range-attacker-name",xi],["#range-target-name",Ni]]){const g=i.units.find(p=>p.unit.id===_);document.querySelector(m).textContent=g?`${g.unit.label} [${g.unit.id}] / ${Bu[g.status]}`:"尚未选择"}for(const[m,_]of[["#range-attacker-select",xi],["#range-target-select",Ni]]){const g=document.querySelector(m);g&&(g.replaceChildren(...["",...i.units.map(p=>p.unit.id)].map(p=>{const w=document.createElement("option");w.value=p;const y=i.units.find(v=>v.unit.id===p);return w.textContent=y?`${y.unit.label} · ${y.unit.kind}`:"选择单位",w})),g.value=_)}document.querySelector("#range-pick-state").textContent=un?`${un==="attacker"?"攻击方":"目标"}选择中`:"";for(const m of["attacker","target"])document.querySelector(`#range-pick-${m}`).setAttribute("aria-pressed",String(un===m));const r=document.querySelector("#range-candidates");r.hidden=!Ga.length,r.replaceChildren(...Ga.flatMap(m=>{const _=i.units.find(p=>p.unit.id===m);if(!_)return[];const g=document.createElement("button");return g.textContent=`${_.unit.label} [${m}] / ${_.unit.kind} / ${Gm[_.unit.faction]} / ${Bu[_.status]}`,g.addEventListener("click",()=>lg(_.unit)),[g]}));const s="slant";document.querySelector("#range-mode-readout").textContent=s.toUpperCase();const o=i.units.find(m=>m.unit.id===xi),a=i.units.find(m=>m.unit.id===Ni),c=document.querySelector("#range-result"),l=document.querySelector("#range-fill").checked,d=document.querySelector("#range-rings").checked,f=t.find(m=>m.name===document.querySelector("#range-fill-band").value)??t[0],u=jt.clamp(Number(document.querySelector("#range-fill-opacity").value)||.12,.02,.6);o&&(l||d?Ui.set(o.unit.id,{fill:l,rings:d,band:f.name,opacity:u}):Ui.delete(o.unit.id)),$w(i,t);const h=JSON.stringify([o?.unit.id,a?.unit.id]);if(!o||!a)c.textContent="请选择攻击方与目标";else if(o===a)c.textContent="攻击方与目标不能相同";else{const m=Yu(o.position,a.position,s,t);c.textContent=`${m.band} / 斜距
水平 ${m.horizontalKm.toFixed(2)} km
高差 ${m.altitudeDeltaKm.toFixed(2)} km
斜距 ${m.slantKm.toFixed(2)} km${o.status!=="active"||a.status!=="active"?`
已失效单位 / 仅供参考`:""}`}if(o&&l&&!a&&(c.textContent=`${f.name} / 3D填充半径 ${f.maxKm} km`),Ln.userData.rangeVisualKey===h){Wu();return}for(const m of[...Ln.children])if(m.userData.rangeConnector){const _=m;_.geometry.dispose(),Array.isArray(_.material)?_.material.forEach(g=>g.dispose()):_.material.dispose(),Ln.remove(_)}if(Ln.userData.rangeVisualKey=h,o&&a&&o!==a){const m=Ta([o.position,a.position],15332072,1,.75);m.userData.rangeConnector=!0,Ln.add(m)}Wu()}function Gn(){un=null,Ga=[],It.enabled=!0,vt.domElement.style.cursor=Ht?"crosshair":"",Ro()}function lg(n){!un||!st.includes(n)||(un==="attacker"?Wl(n.id):Ni=n.id,Gn(),ot())}function Yw(n){if(!(ke.dragging||Pt||Ze)){if(Mt?.cancel(),un===n){Gn(),ot();return}Ri(!0),hn=!1,Ht&&Yi(!1),Xt=Vt=Fn=!1,it=null,un=n,Ga=[],ke.detach(),It.enabled=!0,vt.domElement.style.cursor="crosshair",ot(),rt()}}function jw(n,e){Wt()||ln||e&&!Or(De).units.some(t=>t.unit.id===e)||(n==="attacker"?Wl(e):Ni=e,Gn(),ot())}for(const n of["attacker","target"])document.querySelector(`#range-pick-${n}`).addEventListener("click",()=>Yw(n)),document.querySelector(`#range-${n}-select`).addEventListener("change",e=>jw(n,e.target.value));document.querySelector("#range-use-selected").addEventListener("click",()=>{!fe||ke.dragging||(Wl(fe.id),Gn(),ot())});document.querySelector("#range-clear").addEventListener("click",()=>{Ui.clear(),xi=Ni="",Gn(),ot()});for(const n of["#range-rings","#range-fill","#range-fill-band","#range-fill-opacity"])document.querySelector(n).addEventListener("change",()=>ot());document.querySelector("#edit-panel").addEventListener("click",n=>{const e=n.target instanceof Element?n.target:null;un&&!e?.closest(".range-panel")&&(Gn(),ot())},!0);function Xl(){document.querySelector("#selected-name").textContent="未选择",document.querySelector("#selected-detail").textContent="",document.querySelector("#distance-readout").textContent="—",document.querySelector("#attitude-readout").textContent="—"}function dg(n,e){const{unit:t,status:i}=n;fe=t;const r=n.position,s=[Gm[t.faction],Bu[i]],o=Oi().groups.find(_=>_.id===t.groupId);o&&s.push(`编组:${o.name}`),t.tgt&&s.push("目标"),t.escort&&t.faction!=="enemy"&&s.push("护卫目标"),document.querySelector("#selected-name").textContent=t.label,document.querySelector("#selected-detail").textContent=`${t.kind} / ${s.join(" / ")}`;const a=e.units.find(_=>_.unit.id===Ni),l=a&&a.unit!==t?Yu(r,a.position,"slant",Ah()):null;document.querySelector("#distance-readout").textContent=l?`至 ${a.unit.label}：${l.distanceKm.toFixed(2)} km / ${l.band}`:"—";const d=yh(t,e.turn),f=_=>_*180/Math.PI,u=_=>`${f(_)>=0?"+":""}${f(_).toFixed(1)}°`,h=document.querySelector("#attitude-readout"),m=xh(t,e.turn);if(m!==null)h.textContent=`偏航 ${u(m)}  俯仰 ${u(d?.pitch??0)}  横滚 ${u(d?.roll??0)}  （航路）`;else if(d===null){const _=vh(t,e.turn);h.textContent=_===null?"朝向  固定":`朝向 ${u(_)}  （水平）`}else h.textContent=`偏航 ${u(d.yaw)}  俯仰 ${u(d.pitch)}  横滚 ${u(d.roll)}`}function xo(n){if(Mt?.cancel(),typeof Ct<"u"&&Ct){_E(n);return}const e=Math.max(0,Math.min(n,Ti()));e!==De&&(ke.dragging||Pt||dn()&&(Mt?.clearSelection(),lc="",Ja(),Ri(!0),ss(),De=e,Sn()&&ve&&(ve.setEditor({...ve.read().editor,currentTurn:e}),lr(ve.read()),ft.clear(),fe=null,Fe=ki()),ot(),rt()))}function sc(){const{width:n,height:e}=Zo(),t=vw(gt.extent,gt.extentZ,n/e,bt.fov,360,n);return It.maxDistance=t.maxDistance,bt.far=t.far,bt.near=t.near,bt.updateProjectionMatrix(),t}function Rh(){const n=sc();It.target.set(0,0,0),bt.position.copy(new S(0,.65,1).normalize().multiplyScalar(n.distance)),It.update()}function Zw(){const n=sc();It.target.set(0,0,0),bt.position.set(0,n.distance,.001),It.maxPolarAngle=Math.PI*.499,It.update()}const yn=()=>({label:document.querySelector("#edit-label"),kind:document.querySelector("#edit-kind"),faction:document.querySelector("#edit-faction"),icon:document.querySelector("#edit-icon"),tgt:document.querySelector("#edit-tgt"),escort:document.querySelector("#edit-escort"),hidden:document.querySelector("#edit-hidden"),intangible:document.querySelector("#edit-intangible"),lost:document.querySelector("#edit-lost"),remove:document.querySelector("#edit-delete"),undo:document.querySelector("#edit-undo"),redo:document.querySelector("#edit-redo")});let Ze=null,ji=!1,Cr="translate",Ao="translate";const Kw=new S,en=new xn;os.add(en);const ke=new mM(bt,vt.domElement);ke.setSize(.85);os.add(ke.getHelper());const ut=n=>document.querySelector(n),Un=n=>n.icon==="air-filled"||n.icon==="air-outline";function jo(n){const e=yh(n,De),t=xh(n,De);return t!==null?{yaw:ns(t-(n.icon==="ground"?Math.PI:0)),pitch:e?.pitch??0,roll:e?.roll??0}:e??{yaw:ns((vh(n,De)??0)-(n.icon==="ground"?Math.PI:0)),pitch:0,roll:0}}function qs(){return mi()?Sn()?[De]:Array.from({length:ut("#apply-later").checked?Kn()-De:1},(n,e)=>De+e):[]}function ug(n,e){nc(n)&&(n.attitudes??=Array.from({length:Kn()},()=>null),qs().forEach(t=>{n.attitudes[t]={...e}}))}function hg(n){if(Sn()||!ct()||Tt()?.mapEditRef||!Fe||Ze||ke.dragging||Pt||(Ri(!0),!En()))return;const e=De,t=e+1,i=new Map(st.map(s=>[s.id,{...jo(s)}])),r=Yn[e];Yn.splice(t,0,{summary:n?r.summary:"TACTICAL MOVEMENT / NEW TURN",events:n?r.events.map(s=>({...s})):[]}),st.forEach(s=>{if(s.trackPoints=zp(s.trackPoints??[],t,!0),s.routeBinding&&s.routeBinding.startTurn>=t&&s.routeBinding.startTurn++,s.playerActions?.forEach(o=>{o.turn>=t&&o.turn++,o.recordedTurn>=t&&o.recordedTurn++}),s.positions.splice(t,0,s.positions[e].clone()),n)s.attitudes??=Array.from({length:Kn()-1},()=>null),s.attitudes.splice(t,0,i.get(s.id));else if(s.attitudes){const o=s.attitudes[e];s.attitudes.splice(t,0,o?{...o}:null)}s.destroyedAtTurn!==void 0&&s.destroyedAtTurn>=t&&(s.destroyedAtTurn+=1)}),Yn[t].events=Yn[t].events.filter(s=>s.kind!=="destroy"),Vi(),it=null,De=t,ot(),rt()}function Jw(){if(Sn()||!ct()||Tt()?.mapEditRef||!Fe||Kn()<=1||Ze||ke.dragging||(Ri(!0),!En()))return;const n=De;Yn.splice(n,1),st.forEach(e=>{e.trackPoints=zp(e.trackPoints??[],n,!1),e.routeBinding&&(e.routeBinding.startTurn=Math.max(0,e.routeBinding.startTurn>=n?e.routeBinding.startTurn-1:e.routeBinding.startTurn)),e.positions.splice(n,1),e.attitudes?.splice(n,1),e.playerActions&&(e.playerActions=e.playerActions.filter(t=>t.turn!==n&&t.recordedTurn!==n).map(t=>({...t,turn:t.turn>n?t.turn-1:t.turn,recordedTurn:t.recordedTurn>n?t.recordedTurn-1:t.recordedTurn}))),e.destroyedAtTurn===n?e.destroyedAtTurn=void 0:e.destroyedAtTurn!==void 0&&e.destroyedAtTurn>n&&(e.destroyedAtTurn-=1)}),Vi(),it=null,De=Math.min(n,Ti()),ot(),rt()}function Ro(){if(typeof nn<"u"&&nn?.active()){ke.detach();return}if(!mi()&&!Si()){ke.detach();return}if(un||Mt?.isPicking()){ke.detach();return}if(ke.dragging)return;const n=Mt?.selection();if(n&&Si()&&Fe&&!Ht&&!Ze&&!hn){en.position.set(n.position.x,n.position.y,n.position.z).multiplyScalar(tt);const r=n.kind==="marker"?Oi().markers.find(o=>o.id===n.id):void 0,s=r&&Li(r)&&n.pointIndex===void 0?Ao:"translate";en.scale.setScalar(1),en.quaternion.copy(r&&s!=="translate"?za(r):new cn),ke.setMode(s),ke.setSpace(s==="translate"?"world":"local"),ke.showX=ke.showY=ke.showZ=!0,ke.attach(en);return}en.scale.setScalar(1);const e=oc();if(ct()&&Fe&&!Ht&&e){const r=it?.kind==="track"?st.find(o=>o.id===it.unitId):void 0,s=!!r&&!Un(r)&&!r.intangible;en.position.copy(va(e,s)),en.quaternion.identity(),ke.setMode("translate"),ke.setSpace("world"),ke.showX=ke.showZ=!0,ke.showY=!s,ke.attach(en);return}if(Xt||Vt||Fn){ke.detach();return}if(!Fe||Ht||!fe||Ze||hn||!Ei().length){ke.detach();return}const t=ft.size>1?ko():Wn(fe);if(en.position.copy(t),ft.size===1&&en.position.copy(Ul(fe,t,Et,si)),Kw.subVectors(en.position,t),ft.size>1)en.quaternion.identity();else{const r=jo(fe);en.quaternion.setFromEuler(new In(r.pitch,r.yaw,r.roll,"YXZ"))}ke.setMode(Cr),ke.setSpace(Cr==="translate"?"world":"local");const i=Ei().some(Un);ke.showX=Cr==="translate"||i,ke.showY=!0,ke.showZ=Cr==="translate"||i,ke.attach(en)}let Aa="";function Qw(){const n=Hn?.panels.equipment;if(!n||!ve)return;if(Ct){n.replaceChildren(),Aa="";return}const e=Tt(),t=JSON.stringify([ve.revision,e?.id,De,fe?.id,Fe,ct(),Wt(),fe?ic(fe):null]);if(t===Aa&&n.childElementCount)return;Aa=t,n.replaceChildren();const i=document.createElement("label");i.className="equipment-unit-choice",i.textContent="配置单位";const r=document.createElement("select");r.id="equipment-unit",r.setAttribute("aria-label","配置装备的单位"),r.add(new Option("请选择单位",""));for(const l of st)r.add(new Option(l.label,l.id));r.value=fe?.id??"",r.disabled=Wt(),i.append(r),n.append(i),r.addEventListener("change",()=>{if(Wt()||!r.isConnected)return;const l=st.find(d=>d.id===r.value);jn(l?[l]:[])});const s=document.createElement("div");if(s.id="equipment-editor-body",n.append(s),!e||!fe||Ze){s.textContent=Ze?"待落位":"未选择单位";return}const o=e.id,a=fe.id,c=De;Ng(s,{read:()=>rg().project,busy:()=>ln||Wt()||fe?.id!==a||Tt()?.id!==o||De!==c,report:tn,commit:(l,d)=>{if(!ve||!ct()||!Fe||Wt()||fe?.id!==a||Tt()?.id!==o||De!==c)throw new Error("单位或编辑状态已变化，请重新选择装备。");if(!dn())throw new Error("请先完成当前编辑。");const f=ve.read();ve.commit({...f,project:l},d,f),dr(),Vn(!0),Hn?.select("equipment")}},{mode:"session",sessionId:o,unitId:a,turn:c,editable:ct()&&Fe&&!Wt()})}function eE(n){if(!ve||!ct()||Tt()?.mapEditRef||ln||Wt())throw new Error("请先完成当前操作，再新建玩家。");if(!dn())throw new Error("当前编辑尚未保存。");const e=ve.read(),t=Tt().id,i=`player-unit-${crypto.randomUUID()}`,s=Op(e.project,t,i,n.playerId,n.aircraftRef,n.loadout,{x:0,y:2.4,z:0},De).sessions.find(o=>o.id===t).units.find(o=>o.id===i);Vn(!0),Yi(!1),Ri(!0),hn=!1,Gn(),Mt?.cancel(),Mt?.clearSelection(),Xt=Vt=Fn=!1,it=null,ft.clear(),fe=null,Xl(),Ze=rc({...s,trackPoints:void 0,positions:s.positions.map(o=>({x:o.x*tt,y:o.y*tt,z:o.z*tt}))}),qi={input:structuredClone(n),player:{...s.player},sessionId:t,turn:De,revision:ve.revision},ji=!1,It.enabled=!0,vt.domElement.style.cursor="",ot(),rt()}function tE(){const n=qi;!n||!Ze||!ve||n.sessionId!==Tt()?.id||n.turn!==De||n.revision!==ve.revision||!ct()||(ji=!0,It.enabled=!1,vt.domElement.style.cursor="crosshair",rt())}function nE(n){const e=qi,t=Ze;if(!e||!t||!ve)return!1;if(!ct()||!Fe||ln||ke.dragging||Pt||e.sessionId!==Tt()?.id||e.turn!==De||e.revision!==ve.revision)return tn("玩家放置状态已变化，请取消后重新创建。"),!1;const i=ve.read(),r=n.clone();r.y=t.intangible?Wn(t).y:Un(t)?Math.max(Wn(t).y,Et(r.x,r.z)+si):Et(r.x,r.z);try{const s=Op(i.project,e.sessionId,t.id,e.input.playerId,e.input.aircraftRef,e.input.loadout,{x:r.x/tt,y:r.y/tt,z:r.z/tt},De),o=s.sessions.find(c=>c.id===e.sessionId).units.find(c=>c.id===t.id);o.icon=t.icon,o.faction=t.faction;const a=o.id;return ve.commit({...i,project:s},"创建玩家单位",i),dr(),Vn(!0),jn(st.filter(c=>c.id===a)),tn(`${e.player.callsign} 已放置`),!0}catch(s){return tn(s instanceof Error?s.message:String(s)),!1}}function iE(n,e,t){if(!ve||!ct()||Tt()?.mapEditRef||ln||Wt())throw new Error("当前回合为只读或仍有操作待完成。");if(Fe||Vn(!0),!dn())throw new Error("当前编辑尚未保存。");const i=ve.read(),r=Tt().id,s=Zg(i.project,r,n,De,e,t==="drop"?"jettison":"use",`player-action-${crypto.randomUUID()}`);ve.commit({...i,project:s},t==="drop"?"登记上一回合抛弃":"登记上一回合使用",i),dr(),Vn(!0),tn(`已登记${t==="drop"?"抛弃":"使用"}`)}function fg(){if(!Gu||!Zr||!ve)return;const n=Tt(),e=!!n?.mapEditRef;Zr.hidden=!Fr||e;const t=JSON.stringify([ve.revision,n?.id,De,fe?.id,ct(),Fe,Fr,ln,Wt(),qi,ji]);t!==Tl&&(Tl=t,Gu.sync({project:ve.read().project,revision:ve.revision,sessionId:n?.id??"",turn:De,selectedUnitId:fe?.id,editable:ct()&&!ln&&(qi!==null||!Wt()),mapOnly:e,...qi?{pending:{player:{...qi.player},aircraftRef:{...qi.input.aircraftRef},loadout:structuredClone(qi.input.loadout),armed:ji}}:{}}))}function Ap(){const n=Ze??fe,e=oc();if(e)for(const s of["x","y","z"])ut(`#path-${s}`).value=e[s].toFixed(2);if(!n)return;const t=ft.size>1?ko():Wn(n),i=jo(n);for(const s of["x","y","z"])ut(`#edit-${s}`).value=t[s].toFixed(2);const r=document.querySelector("#edit-height");r&&(r.value=(t.y*1e3/tt).toFixed(1));for(const s of["pitch","yaw","roll"])ut(`#edit-${s}`).value=jt.radToDeg(i[s]).toFixed(2)}function rt(){for(const c of Array.from(document.querySelectorAll('#edit-panel [data-mode-disabled="true"]')))c.disabled=!1,delete c.dataset.modeDisabled;pg(),lE();const n=yn();ut("#canvas-width").value=String(gt.extent*2/tt),ut("#canvas-height").value=String(gt.extentZ*2/tt),ut("#canvas-samples").value=String(gt.size),Hn||(document.querySelector("#terrain-editor").toggleAttribute("hidden",!Ht),document.querySelector("#unit-editor").toggleAttribute("hidden",Ht)),document.querySelector("#tab-terrain").setAttribute("aria-pressed",String(Ht)),document.querySelector("#tab-units").setAttribute("aria-pressed",String(!Ht)),document.querySelector("#terrain-undo").disabled=!ve?.canUndo||!!Pt,document.querySelector("#terrain-redo").disabled=!ve?.canRedo||!!Pt;const e=Ze??fe;ut("#turn-summary-edit").value=Yn[De].summary,ut("#turn-summary-edit").disabled=!!Ze,ut("#edit-lost").max=String(Kn());for(const c of["#turn-add","#turn-copy","#turn-delete"])document.querySelector(c).disabled=!!Ze||ke.dragging||c==="#turn-delete"&&Kn()===1;n.undo.disabled=!ve?.canUndo||!!Ze,n.redo.disabled=!ve?.canRedo||!!Ze,n.remove.disabled=fe===null||!!Ze,document.querySelector("#edit-copy").disabled=!ft.size||!!Ze,document.querySelector("#selection-count").textContent=`已选 ${ft.size} / 可移动 ${Ei().length}`,document.querySelector("#tool-box").setAttribute("aria-pressed",String(hn)),document.querySelector("#edit-add").setAttribute("aria-pressed",String(!!Ze)),document.querySelector("#unit-picker").replaceChildren(...st.map(c=>{const l=document.createElement("button"),d=Oi().groups.find(f=>f.id===c.groupId);return l.textContent=d?`${c.label} · ${d.name}`:c.label,d&&(l.style.borderColor=d.color),l.setAttribute("aria-pressed",String(ft.has(c.id))),l.disabled=!!Ze,l.addEventListener("click",f=>Fl(c,f.shiftKey||f.ctrlKey||f.metaKey||ut("#select-additive").checked)),l}));const i=["urban","erase-urban"].includes(document.querySelector("#terrain-brush").value);for(const c of["#urban-density","#urban-angle","#urban-seed"])ut(c).closest("label").toggleAttribute("hidden",!i);ut("#terrain-strength").closest("label").toggleAttribute("hidden",i),ut("#terrain-flat").closest("label").toggleAttribute("hidden",i),[n.label,n.kind,n.faction,n.icon,n.tgt,n.escort,n.hidden,n.intangible,n.lost].filter(Boolean).forEach(c=>{c.disabled=!e}),n.label.value=e?.label??"",n.kind.value=e?.kind??"",n.faction.value=e?.faction??"enemy",n.icon.value=e?.icon??"air-outline",n.tgt.checked=e?.tgt===!0,n.hidden&&(n.hidden.checked=e?.hidden===!0),n.intangible&&(n.intangible.checked=e?.intangible===!0),n.escort.checked=e?.escort===!0&&e.faction!=="enemy",n.lost.value=e?.destroyedAtTurn===void 0?"":String(e.destroyedAtTurn+1),document.querySelector("#placement-actions").toggleAttribute("hidden",!Ze),document.querySelector("#edit-state").textContent=Ze?ji?"点选中":"待落位":ft.size>1?`编队移动 / 主单位 ${fe?.label??"-"} / 回合 ${De+1}`:fe?`回合 ${De+1} / ${fe.attitudes?.[De]?"手动姿态":"自动姿态"}`:"未选择",document.querySelector("#edit-place").disabled=ji,document.querySelector("#edit-auto").disabled=!fe||!!Ze||ft.size>1;const r=!Ze&&ft.size>1?ko():e?Wn(e):new S,s=e?jo(e):{yaw:0,pitch:0,roll:0};for(const c of["x","y","z"]){const l=ut(`#edit-${c}`);l.disabled=!e||!!Ze&&c!=="y",l.value=e?r[c].toFixed(2):""}for(const c of["pitch","yaw","roll"]){const l=ut(`#edit-${c}`);l.disabled=!e||!Ze&&ft.size>1||c!=="yaw"&&!Un(e),l.value=e?jt.radToDeg(s[c]).toFixed(2):""}const o=document.querySelector("#edit-height");o&&(o.value=e?(r.y*1e3/tt).toFixed(1):"",o.disabled=!e),document.querySelector("#tool-move").setAttribute("aria-pressed",String(Cr==="translate")),document.querySelector("#tool-rotate").setAttribute("aria-pressed",String(Cr==="rotate"));const a=!!Tt()?.mapEditRef;document.querySelector("#tab-units").toggleAttribute("hidden",a),a&&!Hn&&document.querySelector("#unit-editor").setAttribute("hidden","");for(const c of["#turn-add","#turn-copy","#turn-delete"])Sn()&&(document.querySelector(c).disabled=!0);Sn()&&(ut("#apply-later").disabled=!0),oE(),zi(),Ro(),Hn?.sync({editing:Fe,editable:Si(),mapOnly:a,active:Fr,playerView:Ct,viewerCanUndo:!!ve?.canUndo,viewerCanRedo:!!ve?.canRedo}),ig?.sync(),Mt?.sync(),typeof nn<"u"&&nn?.sync(),Qw(),fg()}function pg(){!mi()&&!Si()&&(Fe=!1),ct()||(Ht=Xt=Fn=Vt=!1,it=null),Hn||document.querySelector("#edit-panel").toggleAttribute("hidden",!Fe),document.querySelector("#mode-readout").textContent=Fe?Sn()?"草稿编辑":"EDIT":"VIEW"}const rE=new Set(["edit-x","edit-y","edit-z","edit-height","edit-pitch","edit-yaw","edit-roll","edit-auto","edit-lost","turn-summary-edit","select-clear","select-additive","tool-box","tool-move","tool-rotate","move-snap","rotate-snap","trail-display","trail-turns","edit-undo","edit-redo","tab-units"]);function Rp(n){return rE.has(n.id)||!!n.closest("#unit-picker")}function mg(n){return!!n.closest(".sidebar-header,.sidebar-nav,.range-panel,.trail-panel,.archive-panel,.selection-panel,.sidebar-bound-list,#unit-picker,#route-list,#track-list")||["route-select","route-group-select","route-select-bound","route-visible","route-labels","select-clear","select-additive"].includes(n.id)}function sE(n,e){const t=yn().escort;t.disabled=!n||!e||n.faction==="enemy",t.checked=n?.escort===!0&&n.faction!=="enemy"}function oE(){const n=mi()&&Fe,e=ct()&&Fe;for(const r of Array.from(document.querySelectorAll("#unit-editor input, #unit-editor button, #unit-editor select, #unit-editor textarea, #terrain-editor input, #terrain-editor button, #terrain-editor select, #route-section input, #route-section button, #route-section select, #turn-summary-edit")))mg(r)||(!e&&(!n||!Rp(r))?r.disabled=!0:e&&r.dataset.modeDisabled==="true"&&(r.disabled=!1),r.dataset.modeDisabled=String(!e&&(!n||!Rp(r))));const t=Ze??fe;for(const r of["edit-x","edit-y","edit-z","edit-height","edit-pitch","edit-yaw","edit-roll","edit-auto"]){const s=document.getElementById(r);(!n||t&&!Ze&&!nc(t))&&(s.disabled=!0)}const i=yn().lost;sE(t,e),i.disabled=!t||!n||!e&&!Eh(t),i.min=String(e?1:De+1),i.max=String(e?Kn():De+1),i.step="1"}for(const n of["click","change","input","keydown","pointerdown"])document.querySelector("#edit-panel").addEventListener(n,e=>{const t=e.target instanceof Element?e.target.closest("button, input, select, textarea"):null;!t||mg(t)||t.closest("#workflow-panel")||t.closest('[data-sidebar-panel="groups"],[data-sidebar-panel="markers"],[data-sidebar-panel="drawing"],[data-sidebar-panel="equipment"],[data-sidebar-panel="links"]')||ct()&&Fe||(e.preventDefault(),e.stopImmediatePropagation())},!0);function ss(){qi=null,Ze=null,ji=!1,vt.domElement.style.cursor="",It.enabled=!0,rt()}function Vn(n){if(n&&!mi()&&!Si()){pg(),zi();return}dn()&&(Mt?.cancel(),typeof nn<"u"&&nn?.cancel(),un&&Gn(),Fe=n,Hn||document.querySelector("#edit-panel").toggleAttribute("hidden",!n),document.querySelector("#mode-readout").textContent=n?"EDIT":"VIEW",vt.domElement.style.cursor=n&&Ht?"crosshair":"",n||(Xt=Vt=!1,it=null,Ch(),ac(),Ht=!1,$i.visible=!1,Ri(!0),hn=!1,ss()),ot(),rt())}function Hi(n,e=!1,t="metadata"){if(!mi()||!Fe||t==="metadata"&&!ct()||fe&&!Ze&&(t==="pose"&&!nc(fe)||t==="loss"&&!Eh(fe)))return;if(Ze){n(Ze),$a(Ze,Ze.positions.map((s,o)=>o)),rt();return}if(!fe)return;const i=fe.icon,r=fe.intangible;En(t==="metadata"?"author":"draft")&&(n(fe),Ws(fe)&&(t==="pose"||fe.icon!==i||fe.intangible!==r)&&$a(fe),e&&Gw(fe),ot(),rt())}function Bs(n){!mi()||!Fe||(hn=!1,Cr=n,rt())}ke.addEventListener("dragging-changed",n=>{if(It.enabled=!n.value,n.value){zi();return}gn?.units.some(e=>st.find(t=>t.id===e.id)?.routeBinding)&&(Vi(),ot()),dn("Transform units / path"),rt()});let gn=null,Ya=null,ja=!1,vi=null;function aE(n,e,t){if(!Zn)return;const i=r=>({x:r.x+t.x/tt,y:r.y+t.y/tt,z:r.z+t.z/tt});if(e.kind==="marker"){const r=n.markers.find(o=>o.id===e.id),s=Zn.markers.find(o=>o.id===e.id);if(r&&s)if(Li(r)&&e.pointIndex!==void 0){const o=Ss(r);o[e.pointIndex]=i(o[e.pointIndex]);const a=rl(r,o);Object.assign(s,a)}else s.position=i(r.position),r.controlPoints&&(s.controlPoints=r.controlPoints.map(i))}else{const r=n.drawings.find(o=>o.id===e.id),s=Zn.drawings.find(o=>o.id===e.id);r&&s&&(s.points=r.points.map((o,a)=>e.pointIndex===void 0||a===e.pointIndex?i(o):{...o}))}}const zo=new Map;let ir=[];const Ps=new S,gg=new cn;ke.addEventListener("mouseDown",()=>{if(!mi()&&!(Si()&&Mt?.selection())||!Fe||!ct()&&it){ke.detach();return}ja=!1,Ya=Ir??ve?.read()??null,gn=Hl(),vi=Mt?.selection()??null,Ps.copy(en.position),gg.copy(en.quaternion),ir=qs(),zo.clear(),Ei().forEach(n=>zo.set(n.id,n.positions.map(e=>e.clone())))});ke.addEventListener("mouseUp",()=>{gn&&!Fo(vi?gn.sceneTools:gn,vi?Zn:Hl())&&(Ir=Ya),gn=null,Ya=null,ja=!1,vi=null});ke.addEventListener("objectChange",()=>{if(!mi()&&!(Si()&&vi)||!Fe||!gn||ja)return;if(vi&&gn.sceneTools){if(!Si())return;try{const e=gn.sceneTools.markers.find(i=>i.id===vi.id),t=Zn?.markers.find(i=>i.id===vi.id);if(vi.kind==="marker"&&vi.pointIndex===void 0&&e&&t&&Li(e)&&Ao!=="translate"){const i=new In().setFromQuaternion(en.quaternion,"YXZ"),r=Ao==="rotate"?{pitch:i.x,yaw:i.y,roll:i.z}:e.attitude??{pitch:0,yaw:0,roll:0},s=ke.axis??"XYZ",o=s.includes("X")?"x":s.includes("Y")?"y":"z",a=(e.sizeKm??.12)*(Ao==="scale"?Math.abs(en.scale[o]):1);Object.assign(t,zm(e,e.position,r,a))}else aE(gn.sceneTools,vi,en.position.clone().sub(Ps))}catch(e){tn(e instanceof Error?e.message:String(e));return}Mt?.syncPosition?Mt.syncPosition():Mt?.sync(),typeof nn<"u"&&nn?.update();return}const n=oc();if(n){if(!ct())return;const e=it?.kind==="track"?st.find(t=>t.id===it.unitId):void 0;n.x=en.position.x,n.y=e?.intangible?en.position.y:Math.max(0,en.position.y),n.z=en.position.z,e&&!Un(e)&&!e.intangible&&(n.y=Et(n.x,n.z)),it?.kind==="waypoint"&&Vi(),ot(),Ap();return}if(fe){if(Cr==="translate"){const e=en.position.clone().sub(Ps),t=Ei().filter(i=>Un(i)&&!i.intangible).map(i=>zo.get(i.id)).filter(Boolean);t.length&&(e.y=Math.max(e.y,...t.flatMap(i=>ir.map(r=>{const s=i[r];return Math.max(0,Et(s.x+e.x,s.z+e.z))-s.y})))),Ei().forEach(i=>{const r=zo.get(i.id);if(r){ng(i,ir),ir.forEach(o=>i.positions[o].copy(r[o]).add(e));const s=gn?.units.find(o=>o.id===i.id)?.trackPoints;ct()&&s&&(i.trackPoints=s.map(o=>ir.includes(o.segment)&&ir.includes(o.segment+1)?{...o,x:o.x+e.x,y:o.y+e.y,z:o.z+e.z}:{...o})),$a(i,ir),Al(i)}})}else if(ft.size>1)cE();else{const e=new In().setFromQuaternion(en.quaternion,"YXZ");ug(fe,{yaw:e.y,pitch:Un(fe)?e.x:0,roll:Un(fe)?e.z:0})}Cr!=="translate"&&(ft.size>1?Ei():[fe]).forEach(e=>Al(e)),Wu(),Ap()}});function cE(){const n=gg.clone().invert().premultiply(en.quaternion),e=new In().setFromQuaternion(n,"YXZ"),t=new cn().setFromEuler(new In(0,e.y,0,"YXZ")),i=(r,s)=>gn?.units.find(o=>o.id===r.id)?.attitudes?.[s]??jo(r);Ei().forEach(r=>{const s=zo.get(r.id);if(!s)return;ct()&&!Sn()&&(r.routeBinding=void 0);const o=Un(r),a=o?n:t;ir.forEach(l=>{r.positions[l].copy(s[l].clone().sub(Ps).applyQuaternion(a).add(Ps));const d=i(r,l),f=new In(0,0,0,"YXZ").setFromQuaternion(new cn().setFromEuler(new In(d.pitch,d.yaw,d.roll,"YXZ")).premultiply(a),"YXZ");r.attitudes??=Array.from({length:Kn()},()=>null),r.attitudes[l]={yaw:f.y,pitch:o?f.x:0,roll:o?f.z:0}});const c=gn?.units.find(l=>l.id===r.id)?.trackPoints;ct()&&c&&(r.trackPoints=c.map(l=>{if(!(ir.includes(l.segment)&&ir.includes(l.segment+1)))return{...l};const d=new S(l.x,l.y,l.z).sub(Ps).applyQuaternion(a).add(Ps);return{...l,x:d.x,y:d.y,z:d.z}})),$a(r,ir),Al(r)})}function Bo(n){cr.x=n.clientX/innerWidth*2-1,cr.y=-(n.clientY/innerHeight)*2+1,or.setFromCamera(cr,bt);let e=0;const t=new S;for(let i=2;i<bt.far;i+=2){const r=or.ray.at(i,t);if(r.y<=Et(r.x,r.z)){let s=e,o=i;for(let c=0;c<18;c++){const l=(s+o)/2,d=or.ray.at(l,t);d.y>Et(d.x,d.z)?s=l:o=l}const a=or.ray.at(o,new S);return a.y=Et(a.x,a.z),a}e=i}return null}let hn=!1,yi=null;const Hs=document.createElement("div");Hs.className="selection-box";Hs.hidden=!0;document.querySelector("#app").appendChild(Hs);function Ri(n=!1,e){if(!yi)return;const t=yi;if(yi=null,Hs.hidden=!0,It.enabled=!ji,vt.domElement.hasPointerCapture(t.pointerId)&&vt.domElement.releasePointerCapture(t.pointerId),n||!e)return;const i=Math.min(t.x,e.clientX),r=Math.max(t.x,e.clientX),s=Math.min(t.y,e.clientY),o=Math.max(t.y,e.clientY);os.updateMatrixWorld(!0),bt.updateMatrixWorld(!0);const a=st.filter(c=>{if(Xs(c,De)==="wreck")return!1;const d=Ai.get(c.id).userData.parts.icon.getWorldPosition(new S).project(bt),f=(d.x+1)*innerWidth/2,u=(1-d.y)*innerHeight/2;return d.z>=-1&&d.z<=1&&f>=i&&f<=r&&u>=s&&u<=o});jn(t.additive?[...new Set([...Bi(),...a])]:a),rt()}function Rl(n){cr.x=n.clientX/innerWidth*2-1,cr.y=-(n.clientY/innerHeight)*2+1,or.setFromCamera(cr,bt);const e=or.intersectObjects(rn.children.filter(t=>t.userData.editorTools),!0).filter(t=>Cl(t.object)).filter(t=>{for(let i=t.object;i;i=i.parent)if(i.userData.editorTool)return!0;return!1});return e.find(t=>t.object.userData.editorTool?.pointIndex!==void 0)??e[0]}vt.domElement.addEventListener("pointerdown",n=>{if(n.button!==0||!Fr||n.altKey||Ze||Ht||ke.dragging||ke.axis!==null||Pt||un||Mt?.isPicking())return;if(nn?.active()){n.preventDefault(),n.stopImmediatePropagation();const t=ql(n)[0];for(let r=t?.object??null;r;r=r.parent){const s=r.userData.unit;if(s){nn.pick("unit",s.id);return}}const i=Rl(n);for(let r=i?.object??null;r;r=r.parent)if(r.userData.editorTool?.kind==="marker"){Mt?.selectObject?.(i.object);return}return}if(!Fe||hn||Xt||Vt||Fn)return;const e=Rl(n);e&&Mt?.selectObject?.(e.object)&&(n.preventDefault(),n.stopImmediatePropagation())},!0);vt.domElement.addEventListener("dblclick",n=>{n.button!==0||!Fr||Wt()||un||Xt||Vt||Fn||Ht||hn||ke.axis!==null||ql(n).length||typeof Rl<"u"&&Rl(n)||or.intersectObject(tr,!0).some(t=>t.object.userData.pathPoint)||jn([])});vt.domElement.addEventListener("pointerdown",n=>{if(Ct||Mt?.isPicking()||un||!Fe||Ht||Xt||Fn||it||Ze||n.button!==0||!(hn||n.shiftKey))return;n.stopImmediatePropagation(),n.preventDefault();const e=ql(n)[0]?.object.userData.unit;if(e&&!hn){Fl(e,!0);return}It.enabled=!1,ke.axis=null,yi={x:n.clientX,y:n.clientY,additive:n.shiftKey||n.ctrlKey||n.metaKey||ut("#select-additive").checked,pointerId:n.pointerId},Hs.hidden=!1,Hs.style.cssText=`left:${n.clientX}px;top:${n.clientY}px;width:0;height:0`,vt.domElement.setPointerCapture(n.pointerId)},!0);vt.domElement.addEventListener("pointermove",n=>{yi&&(n.stopImmediatePropagation(),Hs.style.cssText=`left:${Math.min(yi.x,n.clientX)}px;top:${Math.min(yi.y,n.clientY)}px;width:${Math.abs(n.clientX-yi.x)}px;height:${Math.abs(n.clientY-yi.y)}px`)},!0);vt.domElement.addEventListener("pointerup",n=>{yi&&(n.stopImmediatePropagation(),Ri(!1,n))},!0);vt.domElement.addEventListener("pointercancel",()=>Ri(!0));vt.domElement.addEventListener("pointerdown",n=>{if(Mt?.isPicking()||un||n.button!==0||Ht||Xt||Vt||Fn||it)return;if(Ze&&ji){if(!ct()||!Fe)return;const t=Bo(n);if(!t)return;if(qi){n.stopImmediatePropagation(),nE(t);return}const i=Ze,{count:r,spacing:s}=Th(),o=Math.ceil(Math.sqrt(r)),a=[];if(!En())return;for(let c=0;c<r;c++){const l=rc(ic(i)),d=rs++;l.id=`unit-${d}`,l.label=r===1?i.label:`${i.label}-${String(c+1).padStart(2,"0")}`;const f=t.clone();f.x+=c%o*s,f.z+=Math.floor(c/o)*s;const u=Et(f.x,f.z);f.y=l.intangible?Wn(i).y:Un(l)?Math.max(Wn(i).y,u+si):u,l.positions=Array.from({length:Kn()},()=>f.clone()),st.push(l),a.push(l),qo(l)}Ze=null,ji=!1,It.enabled=!0,vt.domElement.style.cursor="",Yo(),jn(a),Bs("translate");return}if(Ze||ke.dragging||Fe&&ke.axis!==null)return;const e=ql(n)[0]?.object.userData.unit;e&&Fl(e,Fe&&(n.ctrlKey||n.metaKey||ut("#select-additive").checked))});document.querySelector("#edit-place").addEventListener("click",()=>{Ze&&(ji=!0,It.enabled=!1,vt.domElement.style.cursor="crosshair",rt())});document.querySelector("#edit-cancel").addEventListener("click",ss);document.querySelector("#tool-move").addEventListener("click",()=>Bs("translate"));document.querySelector("#tool-rotate").addEventListener("click",()=>Bs("rotate"));for(const n of["x","y","z"])ut(`#edit-${n}`).addEventListener("change",()=>{const e=Number(ut(`#edit-${n}`).value);if(Number.isFinite(e)){if(!Ze&&ft.size>1){const t=new S;t[n]=e-ko()[n],Wa(t)}else if(Ze)Hi(t=>{Wn(t,!0)[n]=n==="y"&&!t.intangible?Math.max(0,e):e});else if(fe){const t=new S;t[n]=e-Wn(fe)[n],Wa(t)}}});document.querySelector("#edit-height")?.addEventListener("change",()=>{const n=ut("#edit-height"),e=Number(n.value);if(!n.value.trim()||!Number.isFinite(e)){rt();return}const t=Ze?Wn(Ze).y:fe?ft.size>1?ko().y:Wn(fe).y:void 0,i=(Ze?[Ze]:Ei()).some(s=>Ws(s)&&(Ze?s.positions:qs().map(o=>s.positions[o])).some(o=>o.y!==Et(o.x,o.z)));if(t!==void 0&&n.value===(t*1e3/tt).toFixed(1)&&!i)return;const r=e*tt/1e3;if(Ze)Hi(s=>{Wn(s,!0).y=s.intangible?r:Math.max(0,r)});else if(fe){const s=new S(0,r-(ft.size>1?ko().y:Wn(fe).y),0);Wa(s)}});for(const n of["pitch","yaw","roll"])ut(`#edit-${n}`).addEventListener("change",()=>{const e=Number(ut(`#edit-${n}`).value);Number.isFinite(e)&&Hi(t=>{const i={...jo(t),[n]:jt.degToRad(e)};Ze?t.attitudes=Array.from({length:Kn()},()=>({...i})):ug(t,i)},!1,"pose")});document.querySelector("#edit-auto").addEventListener("click",()=>Hi(n=>{n.attitudes&&qs().forEach(e=>{n.attitudes[e]=null})},!1,"pose"));document.querySelector("#turn-add").addEventListener("click",()=>hg(!1));document.querySelector("#turn-copy").addEventListener("click",()=>hg(!0));document.querySelector("#turn-delete").addEventListener("click",Jw);ut("#turn-summary-edit").addEventListener("change",()=>{if(!mi()||!Fe)return;const n=ut("#turn-summary-edit").value.trim();n===Yn[De].summary||Ze||og({type:"set-turn-summary",sessionId:ve?.read().editor.sessionId??"session-working",turn:De,summary:n||"UNTITLED TURN"})});ut("#move-snap").addEventListener("change",()=>ke.setTranslationSnap(Number(ut("#move-snap").value)>0?Number(ut("#move-snap").value):null));ut("#rotate-snap").addEventListener("change",()=>ke.setRotationSnap(Number(ut("#rotate-snap").value)>0?jt.degToRad(Number(ut("#rotate-snap").value)):null));document.querySelector("#edit-copy").addEventListener("click",ag);document.querySelector("#select-clear").addEventListener("click",()=>jn([]));document.querySelector("#tool-box").addEventListener("click",()=>{hn=!hn,rt()});document.querySelector("#edit-add").addEventListener("click",Ww);document.querySelector("#edit-delete").addEventListener("click",Xw);document.querySelector("#edit-undo").addEventListener("click",Vl);document.querySelector("#edit-redo").addEventListener("click",Gl);yn().label.addEventListener("change",()=>{if(Ze){Hi(n=>{n.label=yn().label.value||n.id});return}fe&&og({type:"rename-unit",sessionId:ve?.read().editor.sessionId??"session-working",unitId:fe.id,label:yn().label.value||fe.id})});yn().kind.addEventListener("change",()=>Hi(n=>{n.kind=yn().kind.value||"UNKNOWN"}));yn().faction.addEventListener("change",()=>Hi(n=>{n.faction=yn().faction.value,n.faction==="enemy"&&delete n.escort},!0));yn().icon.addEventListener("change",()=>Hi(n=>{n.icon=yn().icon.value},!0));yn().tgt.addEventListener("change",()=>Hi(n=>{n.tgt=yn().tgt.checked}));yn().escort.addEventListener("change",()=>{const n=Ze??fe;if(!n||n.faction==="enemy"||!ct()||!Fe){rt();return}Hi(e=>{e.escort=yn().escort.checked})});yn().hidden?.addEventListener("change",()=>Hi(n=>{n.hidden=yn().hidden.checked}));yn().intangible?.addEventListener("change",()=>Hi(n=>{if(n.intangible=yn().intangible.checked,!n.intangible){const e=Ze===n?n.positions.map((t,i)=>i):qs();e.forEach(t=>{const i=n.positions[t];i.y=Un(n)?Math.max(i.y,Et(i.x,i.z),0):Et(i.x,i.z)}),n.trackPoints?.forEach(t=>{e.includes(t.segment)&&e.includes(t.segment+1)&&(t.y=Un(n)?Math.max(t.y,Et(t.x,t.z),0):Et(t.x,t.z))})}}));yn().lost.addEventListener("change",()=>{if(!mi()||!Fe||fe&&!Eh(fe))return;const n=yn().lost.value.trim();if(Sn()&&n!==""&&Number(n)!==De+1){tn("损失回合仅可留空或填写当前草稿回合"),rt();return}Hi(e=>{const t=Number(n),i=e.destroyedAtTurn;e.destroyedAtTurn=n===""||Number.isNaN(t)?void 0:Math.max(0,Math.min(t-1,Ti())),Sn()&&i!==e.destroyedAtTurn&&(Yn[De].events=Yn[De].events.filter(r=>r.kind!=="destroy"||r.target!==e.id),e.destroyedAtTurn===De&&Yn[De].events.push({kind:"destroy",target:e.id})),Vi()},!0,"loss")});document.querySelector("#prev-turn").addEventListener("click",()=>xo(De-1));document.querySelector("#next-turn").addEventListener("click",()=>xo(De+1));addEventListener("keydown",n=>{const e=n.key.toLowerCase();if(typeof nn<"u"&&nn?.active()&&n.key==="Escape"){nn.cancel(),rt(),n.preventDefault();return}if(Mt?.isPicking()){n.key==="Escape"&&(Mt.cancel(),ot(),n.preventDefault());return}if(un&&n.key==="Escape"){Gn(),ot(),n.preventDefault();return}if(!(un&&["e","t","b","w","q","d","a","pageup","pagedown"].includes(e))){if(n.key==="Escape"&&ke.dragging&&vi){ke.reset(),gn&&(Zn=gn.sceneTools?structuredClone(gn.sceneTools):void 0),gn=null,Ya=null,ja=!0,vi=null,Mt?.sync(),n.preventDefault();return}if(n.key==="Escape"&&ke.dragging&&it){if(ke.reset(),gn){const t=gn;vn.splice(0,vn.length,...t.routes.map(i=>({...i,waypoints:i.waypoints.map(r=>({...r}))}))),Nn=t.activeRouteId,st.forEach(i=>{const r=t.units.find(s=>s.id===i.id);r&&(i.positions=r.positions.map(s=>new S(s.x,s.y,s.z)),i.trackPoints=r.trackPoints?.map(s=>({...s})))}),gn=null,ja=!0,ot(),rt()}n.preventDefault();return}if(n.key==="Escape"&&(Xt||Vt||it)){Xt=Vt=!1,it=null,ot(),rt();return}if(n.key==="Escape"&&Pt){ac(!0);return}if(n.key==="Escape"&&Ze){ss();return}if(!n.target?.matches("input, select, textarea, [contenteditable]")&&document.querySelector("#manager-panel").hidden&&!(typeof Ct<"u"&&Ct&&["t","b","w","q","d","a","pageup","pagedown"].includes(e))){if(e==="t"&&Fe){Hn?Hn.select(Ht?"units":"terrain"):Yi(!Ht);return}if(!((Ht||it||Xt||Vt)&&["b","w","q","d","a","pageup","pagedown"].includes(e))){if(n.key==="Escape"){yi?Ri(!0):ke.dragging?ke.reset():(hn=!1,jn([]));return}if(Fe&&e==="b"&&(hn=!hn,rt()),Fe&&(n.ctrlKey||n.metaKey)&&e==="d"){n.preventDefault(),ag();return}if(Fe&&(n.ctrlKey||n.metaKey)&&e==="a"){n.preventDefault(),Ze||jn(st.filter(t=>Xs(t,De)==="active"));return}if(Fe&&e==="w"&&Bs("translate"),Fe&&e==="q"&&Bs("rotate"),(n.ctrlKey||n.metaKey)&&e==="z"){n.preventDefault(),Vl();return}if((n.ctrlKey||n.metaKey)&&e==="y"){n.preventDefault(),Gl();return}if(n.key==="ArrowLeft"&&xo(De-1),n.key==="ArrowRight"&&xo(De+1),n.key==="Home"&&xo(0),n.key==="End"&&xo(Jm()),e==="r"&&Rh(),e==="e"&&Vn(!Fe),n.key==="PageUp"&&Fe&&fe&&(n.preventDefault(),Wa(new S(0,10,0))),n.key==="PageDown"&&Fe&&fe&&(n.preventDefault(),Wa(new S(0,-10,0))),e==="f"&&fe){const t=Or(De).units.find(i=>i.unit===fe);t&&(It.target.set(t.position.x,t.position.y*.35,t.position.z),It.update())}}}}});function oc(){if(!ct()||!it)return null;if(it.kind==="waypoint")return vn.flatMap(e=>e.waypoints).find(e=>e.id===it.id)??null;const n=it;return st.find(e=>e.id===n.unitId)?.trackPoints?.find(e=>e.id===n.id)??null}function Vi(){if(Sn()||!ct())return;const n=new Set;for(const e of st){const t=e.routeBinding,i=vn.find(a=>a.id===t?.routeId);if(!t||!i?.waypoints.length)continue;const r=t.offset??{x:0,y:0,z:0},s=i.waypoints.map(a=>({x:a.x+r.x,y:a.y+r.y,z:a.z+r.z})),o=Og(e.positions,s,t.startTurn,e.destroyedAtTurn);e.positions=o.map((a,c)=>new S(a.x,c<=t.startTurn||e.intangible?a.y:Un(e)?Math.max(a.y,Et(a.x,a.z)+si):Et(a.x,a.z),a.z)),n.add(e.id)}for(let e=1;e<Kn();e++){const t=new Map;st.filter(s=>n.has(s.id)&&s.routeBinding?.formationId&&e>s.routeBinding.startTurn&&(s.destroyedAtTurn===void 0||e<=s.destroyedAtTurn)).forEach(s=>{const o=s.routeBinding.formationId;t.set(o,[...t.get(o)??[],s])});for(const s of t.values()){const o=s.filter(c=>Un(c)&&!c.intangible);let a=0;o.forEach(c=>{const l=c.routeBinding,d=vn.find(m=>m.id===l.routeId),f=d.waypoints[Math.min(e-l.startTurn-1,d.waypoints.length-1)],u=c.positions[e],h=f.y+(l.offset?.y??0);u.y=h,a=Math.max(a,Et(u.x,u.z)+si-h)}),o.forEach(c=>{c.positions[e].y+=a})}const i=st.filter(s=>!s.intangible).map(s=>({id:s.id,point:s.positions[e],fixed:!n.has(s.id)||!!s.routeBinding?.formationId||e<=(s.routeBinding?.startTurn??Ti())||s.destroyedAtTurn!==void 0&&e>s.destroyedAtTurn})),r=zg(i,8);for(const s of st){if(!n.has(s.id))continue;const o=s.routeBinding;if(!(e<=o.startTurn)){if(s.destroyedAtTurn!==void 0&&e>s.destroyedAtTurn)s.positions[e].copy(s.positions[s.destroyedAtTurn]);else if(!o.formationId){const a=r.get(s.id)??s.positions[e];s.positions[e].set(a.x,s.intangible?a.y:Un(s)?Math.max(a.y,Et(a.x,a.z)+si):Et(a.x,a.z),a.z)}}}}}function va(n,e=!1){return new S(n.x,e?Et(n.x,n.z)+si:n.y,n.z)}function Ch(){if(Oo(tr),tr=new wn,rn.add(tr),Ml.replaceChildren(),Vu.length=0,typeof Ct<"u"&&Ct)return;const n=(i,r,s,o=!1)=>{const a=it?.id===r.id&&it.kind===r.kind&&(r.kind!=="waypoint"||it.kind==="waypoint"&&(!r.routeId||it.routeId===r.routeId||Nn===r.routeId)),c=new we(new ts(a?4:2.8,10,8),new Mn({color:a?16777215:s,depthTest:!1}));c.position.copy(va(i,o)),c.userData.pathPoint=r,c.renderOrder=10,tr.add(c)},e=document.querySelector("#route-visible")?.checked??!0,t=document.querySelector("#route-labels")?.checked??!0;if(e)for(const i of vn){const r=st.filter(l=>l.routeBinding?.routeId===i.id),s=[...new Set(r.map(l=>Oi().groups.find(d=>d.id===l.groupId)?.name).filter(Boolean))],o=r.filter(l=>!l.groupId||!Oi().groups.some(d=>d.id===l.groupId)).map(l=>l.label),a=[...s.map(l=>`编组:${l}`),...o].join(" / ")||"未绑定",c=i.id===Nn?16767050:7649492;i.waypoints.length>1&&tr.add(Ta(i.waypoints.map(l=>va(l)),c,1,i.id===Nn?.7:.4)),i.waypoints.forEach((l,d)=>{n(l,{kind:"waypoint",id:l.id,routeId:i.id},c);const f=new S(l.x,Et(l.x,l.z)+.35,l.z);if(tr.add(Ta([f,va(l)],c,1,.5)),tr.add(Ta([new S(l.x-4,f.y,l.z),new S(l.x+4,f.y,l.z),f.clone(),new S(l.x,f.y,l.z-4),new S(l.x,f.y,l.z+4)],c,1,.7)),!t)return;const u=document.createElement("button");u.className="waypoint-label",u.textContent=`${i.name} · ${d+1} · ${a}`,u.title=`${i.name} / 航路点 ${d+1}
绑定单位：${r.map(h=>h.label).join("、")||"无"}
${a}`,u.addEventListener("click",()=>{ke.dragging||Pt||Mt?.isPicking()||(Nn=i.id,Xt=Vt=!1,it=ct()&&Fe?{kind:"waypoint",id:l.id,routeId:i.id}:null,Hn?.select("routes"),ot(),rt())}),Ml.appendChild(u),Vu.push({dom:u,position:va(l).add(new S(0,5,0))})})}if(!(!ct()||!Fe||Ht)&&Fn&&fe&&ft.size===1&&Xs(fe,De)!=="wreck"&&document.querySelector("#trail-display").value!=="none"){const i=!Un(fe)&&!fe.intangible,r=Math.min(Ti(),fe.destroyedAtTurn??Ti());fe.trackPoints?.filter(o=>o.segment<r).forEach(o=>n(o,{kind:"track",unitId:fe.id,id:o.id},Ea[fe.faction],i));const s=bh(fe,De);for(const o of Mh(fe,s,r)){const{segment:a,points:c}=o;i&&c.forEach(d=>{d.y=Et(d.x,d.z)+si});const l=eg(c,Ea[fe.faction]);l.userData.editSegment=a,l.userData.trackPart=o,l.traverse(d=>{d.userData.editSegment=a,d instanceof we&&(d.material.dispose(),d.material=new Mn({color:Ea[fe.faction],transparent:!0,opacity:.65,side:pn,depthTest:!1}))}),tr.add(l)}}}function lE(){const n=Uo(),e=document.querySelector("#route-select");e.replaceChildren(...vn.map(h=>{const m=document.createElement("option");return m.value=h.id,m.textContent=h.name,m})),e.value=Nn,ut("#route-name").value=bl()?.name??"";const t=(h,m)=>{const _=document.createElement("button");return _.textContent=h,_.setAttribute("aria-pressed",String(it?.id===m.id)),_.addEventListener("click",()=>{if(ke.dragging||Pt||Mt?.isPicking())return;Xt=Vt=!1,it=ct()&&Fe?m:null;const g=m.kind==="waypoint"?Uo().find(p=>p.id===m.id):fe?.trackPoints?.find(p=>p.id===m.id);g&&!ct()&&wh({x:g.x/tt,y:g.y/tt,z:g.z/tt}),ot(),rt()}),_};document.querySelector("#route-list").replaceChildren(...n.map((h,m)=>t(`WP ${m+1}`,{kind:"waypoint",id:h.id})));const i=fe&&ft.size===1?fe.trackPoints??[]:[];document.querySelector("#track-list").replaceChildren(...i.map((h,m)=>t(`P${m+1} / ${h.segment+1}-${h.segment+2}`,{kind:"track",unitId:fe.id,id:h.id})));const r=oc(),s=it?.kind==="track"?st.find(h=>h.id===it.unitId):void 0,o=!!s&&!Un(s)&&!s.intangible;for(const h of["x","y","z"]){const m=ut(`#path-${h}`);m.disabled=!r||o&&h==="y",m.value=r?r[h].toFixed(2):""}document.querySelector("#route-bind").disabled=!Ei().length||!n.length,document.querySelector("#route-unbind").disabled=!Bi().some(h=>h.routeBinding),document.querySelector("#path-delete").disabled=!r;for(const h of["#route-up","#route-down"])document.querySelector(h).disabled=it?.kind!=="waypoint";document.querySelector("#route-pick").setAttribute("aria-pressed",String(Xt)),document.querySelector("#track-edit").setAttribute("aria-pressed",String(Fn)),document.querySelector("#track-add").setAttribute("aria-pressed",String(Vt));for(const h of["#track-add","#track-midpoint"])document.querySelector(h).disabled=!fe||ft.size!==1||Kn()<2;it?.kind==="track"&&fe&&(Xs(fe,De)==="wreck"||document.querySelector("#trail-display").value==="none")&&(it=null),ut("#track-segment").max=String(Math.max(1,Ti())),document.querySelector("#path-state").textContent=Xt?"航路点放置中":Vt?"控制点放置中":`${bl()?.name??"-"} / ${n.length} 个航路点 / ${Bi().map(h=>`${h.label}:${vn.find(m=>m.id===h.routeBinding?.routeId)?.name??"未绑定"}${h.routeBinding?.formationId?"(编队)":""}`).join(" / ")} / ${i.length} 个航迹控制点`;const c=st.filter(h=>h.routeBinding?.routeId===Nn),l=document.querySelector("#route-bindings");l&&l.replaceChildren(...c.map(h=>{const m=document.createElement("button"),_=Oi().groups.find(g=>g.id===h.groupId);return m.textContent=`${h.label}${_?` · ${_.name}`:""} / 从第 ${h.routeBinding.startTurn+1} 回合`,m.addEventListener("click",()=>jn([h])),m}));const d=document.querySelector("#route-group-select");if(d){const h=d.value;d.replaceChildren(...Oi().groups.map(m=>new Option(`${m.name} (${st.filter(_=>_.groupId===m.id).length})`,m.id))),Oi().groups.some(m=>m.id===h)&&(d.value=h)}const f=document.querySelector("#route-select-bound");f&&(f.disabled=!c.length);const u=document.querySelector("#route-bind-group");u&&(u.disabled=!ct()||!Fe||!n.length||!d?.value)}function _g(n,e){const t=[0,...(fe?.trackPoints??[]).filter(s=>s.segment===n).sort((s,o)=>s.t-o.t).map(s=>s.t),1],i=jt.clamp(e,0,.999999)*(t.length-1),r=Math.floor(i);return jt.lerp(t[r],t[r+1],i-r)}function vg(n,e,t=.5){if(!ct()||!Fe||!fe||ft.size!==1||!En())return;fe.trackPoints??=[];const i={id:`control-${El++}`,segment:n,t:jt.clamp(t,.01,.99),x:e.x,y:e.y,z:e.z};fe.trackPoints.push(i),it={kind:"track",unitId:fe.id,id:i.id},Vt=!1,ot(),rt()}vt.domElement.addEventListener("pointerdown",n=>{if(Mt?.isPicking()||!ct()||un||!Fe||Ht||n.button!==0||n.altKey||Ze)return;if(Xt){n.stopImmediatePropagation(),n.preventDefault();const i=Bo(n);if(!i||!En())return;Uo().push({id:`wp-${wl++}`,x:i.x,y:Math.max(Number(ut("#route-height").value)||0,i.y+si),z:i.z}),Vi(),ot(),rt();return}cr.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),or.setFromCamera(cr,bt);const e=or.intersectObjects(tr.children,!0),t=e.find(i=>i.object.userData.pathPoint);if(t&&ke.axis===null){n.stopImmediatePropagation(),n.preventDefault(),it=t.object.userData.pathPoint,it?.kind==="waypoint"&&it.routeId&&(Nn=it.routeId),Vt=!1,Hn?.select("routes"),ot(),rt();return}if(Vt&&ke.axis===null){n.stopImmediatePropagation(),n.preventDefault();const i=e.find(r=>r.object.userData.editSegment!==void 0);if(i){const r=i.object.userData.editSegment,s=Mh(fe,bh(fe,De),Math.min(Ti(),fe.destroyedAtTurn??Ti())).find(l=>l.segment===r);if(!s)return;let o=0,a=1/0;for(let l=0;l<=300;l++){const d=s.curve.getPoint(jt.lerp(s.start,s.end,l/300));!Un(fe)&&!fe.intangible&&(d.y=Et(d.x,d.z)+si);const f=d.distanceToSquared(i.point);f<a&&(a=f,o=l/300)}const c=s.curve.getPoint(jt.lerp(s.start,s.end,o));vg(r,c,_g(r,o))}}},!0);document.querySelector("#route-select").addEventListener("change",()=>{ke.dragging||Pt||Mt?.isPicking()||(Nn=document.querySelector("#route-select").value,it=null,Xt=Vt=!1,ot(),rt())});ut("#route-name").addEventListener("change",()=>{ke.dragging||En()&&(bl().name=ut("#route-name").value.trim()||"UNTITLED ROUTE",ot(),rt())});document.querySelector("#route-new").addEventListener("click",()=>{if(ke.dragging||Ze||!En())return;const n=Va++,e={id:`route-${n}`,name:`ROUTE ${n}`,waypoints:[]};vn.push(e),Nn=e.id,it=null,Xt=Vt=!1,ot(),rt()});document.querySelector("#route-remove").addEventListener("click",()=>{if(!(ke.dragging||Ze)&&En()){if(st.filter(n=>n.routeBinding?.routeId===Nn).forEach(n=>{n.routeBinding=void 0}),vn.splice(vn.findIndex(n=>n.id===Nn),1),!vn.length){const n=Va++;vn.push({id:`route-${n}`,name:`ROUTE ${n}`,waypoints:[]})}Nn=vn[0].id,it=null,Xt=Vt=!1,Vi(),ot(),rt()}});document.querySelector("#route-pick").addEventListener("click",()=>{!ct()||!Fe||Ze||ke.dragging||(Xt=!Xt,Vt=!1,it=null,hn=!1,ot(),rt())});function xg(n){if(!ct()||!Fe||Ze||ke.dragging||!Uo().length||!n.length)return;const e=Bg(n.map(i=>Wn(i))),t=n.length>1?`formation-${Sl++}`:void 0;En()&&(n.forEach((i,r)=>{i.routeBinding={startTurn:De,routeId:Nn,offset:t?e[r]:{x:0,y:0,z:0},formationId:t},i.trackPoints=(i.trackPoints??[]).filter(s=>s.segment<De)}),Vi(),ot(),rt())}document.querySelector("#route-bind").addEventListener("click",()=>xg(Ei()));document.querySelector("#route-unbind").addEventListener("click",()=>{En()&&(Bi().forEach(n=>{n.routeBinding=void 0}),Vi(),ot(),rt())});for(const[n,e]of[["#route-up",-1],["#route-down",1]])document.querySelector(n).addEventListener("click",()=>{if(it?.kind!=="waypoint")return;const t=Uo(),i=t.findIndex(s=>s.id===it.id),r=i+e;r<0||r>=t.length||En()&&([t[i],t[r]]=[t[r],t[i]],Vi(),ot(),rt())});document.querySelector("#path-delete").addEventListener("click",()=>{if(it&&En()){if(it.kind==="waypoint"){const n=Uo();n.splice(n.findIndex(e=>e.id===it.id),1),n.length||st.filter(e=>e.routeBinding?.routeId===Nn).forEach(e=>{e.routeBinding=void 0})}else{const n=it,e=st.find(t=>t.id===n.unitId);e.trackPoints=e.trackPoints?.filter(t=>t.id!==n.id)}it=null,Vi(),ot(),rt()}});document.querySelector("#track-edit").addEventListener("click",()=>{!ct()||!Fe||(Fn=!Fn,Vt=Xt=!1,it=null,hn=!1,ot(),rt())});document.querySelector("#track-add").addEventListener("click",()=>{!ct()||!Fe||(Fn=!0,Vt=!Vt,Xt=!1,it=null,hn=!1,ot(),rt())});document.querySelector("#track-midpoint").addEventListener("click",()=>{if(!ct()||!Fe||!fe||ft.size!==1||Kn()<2)return;const n=jt.clamp(Math.floor(Number(ut("#track-segment").value)||1)-1,0,Ti()-1),e=Fp(fe.positions,fe.trackPoints??[],n,n+1).map(i=>new S(i.x,i.y,i.z)),t=new uh(e).getPoint(.5);Fn=!0,vg(n,t,_g(n,.5))});ut("#track-segment").addEventListener("change",()=>{ut("#track-segment").value=String(jt.clamp(Math.floor(Number(ut("#track-segment").value)||1),1,Math.max(1,Ti())))});for(const n of["x","y","z"])ut(`#path-${n}`).addEventListener("change",()=>{const e=oc(),t=Number(ut(`#path-${n}`).value);if(!e||!Number.isFinite(t))return;const i=it?.kind==="track"?it.unitId:void 0;if(!En())return;const r=st.find(s=>s.id===i);e[n]=n==="y"&&!r?.intangible?Math.max(0,t):t,r&&Ws(r)&&(e.y=Et(e.x,e.z)),it?.kind==="waypoint"&&Vi(),ot(),rt()});for(const n of["#trail-display","#trail-turns"])document.querySelector(n).addEventListener("change",()=>ot());function yg(){const n=(e,t,i,r)=>{const s=Number(ut(e).value);return Number.isFinite(s)?jt.clamp(s,t,i):r};return{radius:n("#terrain-radius",8,240,50),strength:n("#terrain-strength",.1,30,6),target:n("#terrain-flat",0,180,20),density:n("#urban-density",1,100,70)/100,mode:document.querySelector("#terrain-brush").value}}const $i=new L_(new Ft,new wi({color:7143340,depthTest:!1,transparent:!0,opacity:.9}));$i.visible=!1;os.add($i);function Sg(n){if($i.visible=!!n&&Ht&&Fe,!n)return;const{radius:e}=yg();let t=$i.geometry.getAttribute("position");t||(t=new Dt(new Float32Array(240),3),t.setUsage(dl),$i.geometry.setAttribute("position",t));for(let i=0;i<80;i++){const r=i/80*Math.PI*2,s=n.x+Math.cos(r)*e,o=n.z+Math.sin(r)*e;t.setXYZ(i,s,Et(s,o)+.6,o)}t.needsUpdate=!0,$i.geometry.computeBoundingSphere()}function bg(n){if(!ct()||!Fe||!Pt)return;const e=yg(),t=Pt.last,i=t?t.distanceTo(n):0;if(t&&i<gt.spacing*.4)return;const r=t?Math.ceil(i/Math.max(gt.spacing,e.radius/4)):1;for(let s=1;s<=r;s++){const o=t?t.clone().lerp(n,s/r):n,a=e.mode==="smooth"||e.mode==="flatten"?e.strength/30:e.strength;(e.mode==="urban"||e.mode==="erase-urban"?Dn.paint(o.x,o.z,e.radius,e.density,e.mode==="erase-urban"):gt.brush(o.x,o.z,e.radius,a,e.mode,e.target))&&(Pt.changed=!0,kr=!0,e.mode==="urban"||e.mode==="erase-urban"?Pw(o,e.radius):Lw(o,e.radius))}Pt.last=n.clone()}function ac(n=!1){if(!Pt)return;const e=Pt;!n&&e.height&&Km(),Pt=null,To=null,n?(gt.data.set(e.before.terrain),Dn.data.set(e.before.urban),kr=!0):e.changed&&(Ir=e.checkpoint),vt.domElement.hasPointerCapture(e.pointerId)&&vt.domElement.releasePointerCapture(e.pointerId),It.enabled=!0,kr?(kl(!n),!n&&on&&yl===gt&&(Ha=!1)):(_i.visible=!0,Cs.visible=!0,on&&(on.root.visible=_i===on.root),Is=null),ot(),rt()}function Yi(n){n&&!ct()||!n&&Tt()?.mapEditRef||(un&&Gn(),!ke.dragging&&(ac(),Ri(!0),ss(),hn=!1,Ht=n,Xt=Vt=!1,it=null,Ch(),$i.visible=!1,n&&!Fe&&Vn(!0),vt.domElement.style.cursor=n?"crosshair":"",rt()))}vt.domElement.addEventListener("pointerdown",n=>{if(Mt?.isPicking()||!ct()||!Fe||!Ht||n.button!==0||n.altKey)return;n.stopImmediatePropagation(),n.preventDefault();const e=Bo(n);!e||Math.abs(e.x)>gt.extent||Math.abs(e.z)>gt.extentZ||dn()&&(Pt={before:Hl(),checkpoint:ve?.read()??null,pointerId:n.pointerId,changed:!1,last:null,height:!["urban","erase-urban"].includes(document.querySelector("#terrain-brush").value)},It.enabled=!1,vt.domElement.setPointerCapture(n.pointerId),bg(e),Sg(e))},!0);vt.domElement.addEventListener("pointermove",n=>{if(!ct()||!Fe||!Ht)return;const e=Bo(n);Sg(e),Pt&&(n.stopImmediatePropagation(),e&&bg(e))},!0);vt.domElement.addEventListener("pointerup",n=>{Pt&&(n.stopImmediatePropagation(),ac())},!0);vt.domElement.addEventListener("pointercancel",()=>ac(!0));vt.domElement.addEventListener("pointerleave",()=>{Pt||($i.visible=!1)});document.querySelector("#tab-terrain").addEventListener("click",()=>Yi(!0));document.querySelector("#tab-units").addEventListener("click",()=>Yi(!1));for(const[n,e]of[["#terrain-reset",()=>gt.reset()],["#terrain-generate",()=>gt.generate(Number(ut("#terrain-seed").value)||0,document.querySelector("#terrain-preset").value)]])document.querySelector(n).addEventListener("click",()=>{Pt||En()&&(e(),kr=!0,kl(),ot(),rt())});document.querySelector("#terrain-brush").addEventListener("change",rt);for(const n of["#urban-angle","#urban-seed"])ut(n).addEventListener("change",()=>{Pt||En()&&(Ls=jt.degToRad(jt.clamp(Number(ut("#urban-angle").value)||0,-180,180)),Ba=Number(ut("#urban-seed").value)|0,kr=!0,kl(),ot(),rt())});document.querySelector("#terrain-contour-smooth").addEventListener("change",()=>{kr=!0});document.querySelector("#terrain-undo").addEventListener("click",Vl);document.querySelector("#terrain-redo").addEventListener("click",Gl);const or=new vm,cr=new Be;function Zo(){const n=vt.domElement.getBoundingClientRect?.();return n&&n.width>0&&n.height>0?{left:n.left,top:n.top,width:n.width,height:n.height}:{left:0,top:0,width:innerWidth,height:innerHeight}}function Za(){return typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches}function Ph(n,e,t){const i=Zo(),r=[];bt.updateMatrixWorld(),rn.updateMatrixWorld(!0);for(const s of Ai.values()){const o=s.userData.parts,a=s.userData.unit;if(!o||!a||!Cl(s))continue;const c=typeof zs<"u"?zs.get(a.id):void 0,l=o.label.userData.dom,d=!l.hidden&&Number(l.style.opacity||"1")>0&&ow(l.getBoundingClientRect(),n,e,t>14?6:0),f=[o.icon,...c?.root.visible?[c.base]:[],...o.wreck.visible?[o.wreck]:[]];let u=1/0,h;for(const m of f.filter(Cl)){const _=sw(m.getWorldPosition(new S).project(bt),i,n,e,d?Math.max(i.width,i.height):t);_!==null&&_<u&&(u=_,h=m)}h&&(u<=t||d)&&r.push({unit:a,distance:d?Math.min(u,t):u,object:h})}return r.sort((s,o)=>s.distance-o.distance||s.unit.id.localeCompare(o.unit.id))}function dE(n,e,t=14){const i=[],r=Or(De);for(const s of Ph(n,e,t)){const o=Ns.get(s.unit.id);if(sl!==void 0&&!o)continue;const a=new Set(o??[s.unit.id]);r.units.filter(c=>a.has(c.unit.id)).forEach(c=>i.push({unit:c.unit,distance:s.distance}))}return i.sort((s,o)=>s.distance-o.distance||s.unit.id.localeCompare(o.unit.id)).map(s=>s.unit)}function Mg(n,e,t=14){const i=dE(n,e,t);i.length===1?lg(i[0]):(Ga=i.map(r=>r.id),cg())}vt.domElement.addEventListener("pointerdown",n=>{!un||n.button!==0||n.altKey||(n.stopImmediatePropagation(),n.preventDefault(),Mg(n.clientX,n.clientY,gh(n.pointerType,Za())))},!0);$o.addEventListener("pointerdown",n=>{if(n.button!==0||!Fr||n.altKey||Wt())return;const e=gh(n.pointerType,Za());if(un){n.stopPropagation(),n.preventDefault(),Mg(n.clientX,n.clientY,e);return}const t=(n.target instanceof Element?n.target.closest("[data-unit-id]"):null)?.dataset.unitId,i=Ph(n.clientX,n.clientY,e),r=i.find(s=>s.unit.id===t)??i[0];r&&(n.stopPropagation(),n.preventDefault(),Fl(r.unit))});function Cl(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function ql(n){const e=Zo();cr.x=(n.clientX-e.left)/e.width*2-1,cr.y=-((n.clientY-e.top)/e.height)*2+1,or.setFromCamera(cr,bt);const t=or.intersectObjects([...Ai.values()].flatMap(r=>r.children),!0).filter(r=>Cl(r.object));if(t.length||!Za()&&n.pointerType!=="touch"&&n.pointerType!=="pen")return t;const i=Ph(n.clientX,n.clientY,gh(n.pointerType,Za()))[0];return i?[{distance:bt.position.distanceTo(i.object.getWorldPosition(new S)),point:i.object.getWorldPosition(new S),object:i.object}]:[]}function cc(){mo=null,Hu=-1/0,ol=""}function uE(n=performance.now()){const e=bt.position.distanceTo(It.target),t=kM(e,sl),i=t!==sl;sl=t;const r=document.querySelector("#camera-readout");r&&(r.textContent=`FREE 3D / ${t}档`);const{width:s,height:o}=Zo(),a=[t,s,o,...bt.position.toArray(),...bt.quaternion.toArray(),Fe,un].join("|"),c=mo===null;if(!c&&!i&&a===ol)return;if(bt.updateMatrixWorld(),rn.updateMatrixWorld(!0),mo??=Or(De),c||i||a!==ol&&n-Hu>=100){const f=mo.units.map(u=>{const h=Ai.get(u.unit.id),m=h.userData.parts,g=(t===3?h.position.clone():m.icon.getWorldPosition(new S)).project(bt),p=Fe&&ft.has(u.unit.id),w=Ct?void 0:Oi().groups.find(y=>y.id===u.unit.groupId)?.name;return{id:u.unit.id,label:w?`${u.unit.label} · ${w}`:u.unit.label,faction:u.unit.faction,icon:u.unit.icon,tgt:u.unit.tgt,escort:u.unit.escort,status:u.status,position:{x:u.position.x/tt,y:u.position.y/tt,z:u.position.z/tt},screenX:(g.x+1)*s/2,screenY:(1-g.y)*o/2,onScreen:!p&&!u.unit.hidden&&!u.unit.intangible&&g.z>-1&&g.z<1&&Math.abs(g.x)<=1&&Math.abs(g.y)<=1}});Xd=zM(f,t),Ns.clear();for(const u of Xd)Ns.set(u.representativeId,u.memberIds);ol=a,Hu=n}const l=new Map(mo.units.map(f=>[f.unit.id,f])),d=new Map(Xd.map(f=>[f.representativeId,f]));for(const f of mo.units){const u=Ai.get(f.unit.id),h=u.userData.parts,m=zs.get(f.unit.id),_=d.get(f.unit.id),p=(_?.airRepresentativeId?l.get(_.airRepresentativeId):void 0)??(Un(f.unit)?f:void 0),w=tc(f.unit,f.position,Et),y=Math.max(0,w.y-u.position.y),v=Ul(f.unit,w,Et,si).y-u.position.y,L=h.base===null?v+Qm-si:Math.max(y,.6),D=new S(u.position.x,u.position.y+v,u.position.z),N=2*Math.max(bt.near,-D.applyMatrix4(bt.matrixWorldInverse).z)*Math.tan(jt.degToRad(bt.fov)/2)/Math.max(1,o),b=Ud(t,N),M=Math.max(bt.near,-new S(u.position.x,u.position.y,u.position.z).applyMatrix4(bt.matrixWorldInverse).z),I=Math.max(bt.near,-new S(u.position.x,u.position.y+1.5,u.position.z).applyMatrix4(bt.matrixWorldInverse).z),k=2*Math.tan(jt.degToRad(bt.fov)/2)/Math.max(1,o),O=Ud(t,M*k),G=Ud(t,I*k);h.tgtRing.visible=!!_?.hasTgt&&f.status==="active",h.escortMarker.visible=!!_?.hasEscort&&f.status==="active"&&f.unit.faction!=="enemy",GM(h,m,{tier:f.unit.intangible?1:t,representative:!!_,status:f.status,faction:f.unit.faction,label:_?.label??f.unit.label,scale:b,baseScale:O,farBaseScale:G,hasAir:!!p,airAltitude:p?Math.max(0,p.position.y-u.position.y):0,hasTgt:!!_?.hasTgt,hasEscort:!!_?.hasEscort,iconHeight:v,poleHeight:L}),m.root.traverse($=>{const j=$.material;!j||Array.isArray(j)||(j.userData.hiddenBaseOpacity??=j.opacity,j.opacity=j.userData.hiddenBaseOpacity*(f.unit.hidden?.35:1))})}for(const f of rn.children)typeof f.userData.trail=="string"&&(f.visible=t===1||Ns.has(f.userData.trail))}function hE(){const{width:n,height:e}=Zo();for(const{dom:t,position:i}of Vu){const r=i.clone().project(bt);t.hidden=r.z<-1||r.z>1,t.style.left=`${(r.x+1)*n/2}px`,t.style.top=`${(1-r.y)*e/2}px`}rn.updateMatrixWorld(!0);for(const t of Ai.values()){const i=t.userData.parts,r=i.label.userData.dom,s=i.label.userData.displayVisible!==!1,o=zs.get(t.userData.unit.id),a=o?.root.visible?o.pole:i.pole,c=rw({camera:bt,width:n,height:e,group:t,icon:i.wreck.visible?i.wreck:i.icon,pole:a,dom:r,isAir:i.base!==null,naturalTop:a.userData.naturalTop??i.label.position.y,isMerged:(Ns.get(t.userData.unit.id)?.length??1)>1,decorated:i.tgtRing.visible||i.escortMarker.visible,visible:s})!==!1&&s,l=Oi().groups.find(f=>f.id===t.userData.unit?.groupId);r.title=l?`编组: ${l.name}`:"",r.style.borderLeft=l?`3px solid ${l.color}`:"",r.style.opacity=c?String(i.labelFade):"0";const d=c&&!r.hidden&&(un||typeof nn<"u"&&nn?.active()||Za());r.style.pointerEvents=d?"auto":"none",r.style.cursor=un?"crosshair":d?"pointer":"",r.classList.toggle("range-attacker-label",t.userData.unit.id===xi),r.classList.toggle("range-target-label",t.userData.unit.id===Ni)}}let Fr=!1;function wg(){if(requestAnimationFrame(wg),!Fr)return;Pt?(Km(),Dw()):kr&&kl(),Ht&&!Pt&&(!on||Ha)&&Zm(),It.update(),Rm(Yr,bt.position.distanceTo(It.target)),uE(),hE();const n=Zo();zw.update(bt,n.width,n.height,gt.extent,gt.extentZ),Mt?.updateLabels(bt,n.width,n.height),nn?.update(),vt.render(os,bt)}function Pl(){const n=document.querySelector("#scene")?.getBoundingClientRect(),e=Math.floor(n?.width??0),t=Math.floor(n?.height??0);return e<1||t<1?!1:(bt.aspect=e/t,sc(),vt.setSize(e,t,!1),!0)}addEventListener("resize",()=>{Pl()});const Cp=document.querySelector("#scene");Cp&&typeof ResizeObserver=="function"&&new ResizeObserver(()=>{Pl()}).observe(Cp);function fE(n){Ig(n,{size:gt.size,extent:gt.extent})}function pE(n){fE(n),Ct&&Dh(!1);const e=ve.read();try{Ho(),Gn(),ft.clear(),fe=null,ve.reset(n.checkpoint),lr(n.checkpoint);const t=(i,r)=>Math.max(0,...i.filter(s=>s.startsWith(r)).map(s=>Number(s.slice(r.length))).filter(Number.isSafeInteger))+1;rs=t(st.map(i=>i.id),"unit-"),Va=t(vn.map(i=>i.id),"route-"),wl=t(vn.flatMap(i=>i.waypoints.map(r=>r.id)),"wp-"),El=t(st.flatMap(i=>(i.trackPoints??[]).map(r=>r.id)),"control-"),Sl=t(st.flatMap(i=>i.routeBinding?.formationId?[i.routeBinding.formationId]:[]),"formation-"),Ui.clear(),xi=Ni="",ot(),rt()}catch(t){throw lr(e),ve.reset(e),ot(),rt(),t}}let Dl,Ka,Pp="",ln=!1,lc="",Ds=null;function tn(n){lc=n;const e=document.querySelector("#workflow-state");e&&(e.textContent=n)}function Ja(){Ds=null,document.querySelector("#workflow-confirm")?.setAttribute("hidden","")}function zi(){const n=Tt(),e=n?.workflow?.mode==="formal",t=document.querySelector("#workflow-panel");if(!t)return;if(typeof Ct<"u"&&Ct){t.hidden=!0;for(const m of Array.from(t.querySelectorAll("button")))m.disabled=!0;return}t.hidden=!1;const i=e&&n.turns.length===n.workflow.committedTurns+1,r=Wt()||ln,s=n?.status==="finished";t.dataset.mode=s?"finished":e?ki()?"draft":"history":n?.mapEditRef?"map-editor":"authoring";const o=document.querySelector("#task-editor-save");o&&(o.hidden=!!e||!!n?.mapEditRef||n?.turns.length!==1,o.disabled=r||s);const a=document.querySelector("#map-editor-save");a&&(a.hidden=!n?.mapEditRef,a.disabled=r||s);const c=document.querySelector("#workflow-reopen");c&&(c.hidden=!e,c.disabled=!e||r||!!Ds||!!i||!n.workflow.committedTurns||!!n.workflow?.branchFrom&&n.workflow.committedTurns-1<n.workflow.branchFrom.turn);const l=document.querySelector("#workflow-save-draft");l&&(l.hidden=!e,l.disabled=r||s||!ki()||!!Ds||!Dl);const d=document.querySelector("#workflow-snapshot");d&&(d.hidden=!e,d.disabled=r||!!Ds||!n?.workflow?.committedTurns||typeof Ka>"u"||!Ka);const f=document.querySelector("#editor-save-as-controls");f&&(f.hidden=!!e||s);for(const m of["map","task"]){const _=document.querySelector(`#${m}-editor-save-as`);_&&(_.hidden=!!e||(m==="map"?!n?.mapEditRef:!!n?.mapEditRef),_.disabled=r||s)}const u=document.querySelector("#editor-save-as-name");u&&(u.disabled=r||s,n&&Pp!==n.id&&(Pp=n.id,u.value=`${n.name.replace(/ 制作副本$/,"").slice(0,123)} COPY`));const h=document.querySelector("#workflow-state");h&&(h.textContent=lc||(s?"已结束":e?ki()?`第 ${De+1} 回合 · 草稿`:`第 ${De+1} 回合 · 只读 · 已提交 ${n.workflow.committedTurns} 回合`:n?.mapEditRef?`地图制作 · r${n.mapEditRef.revision}`:"场景制作"));for(const m of["begin","advance","commit","discard"]){const _=document.querySelector(`#workflow-${m}`);_&&(_.hidden=!e,m==="discard"&&(_.textContent=n?.workflow?.committedTurns===0?"重置第一回合草稿…":"丢弃草稿…"),_.disabled=!e||s||r||!!Ds||(m==="begin"?!!i:!ki()))}}function Xu(n,e){if(typeof Ct<"u"&&Ct)return;if(!ve||ln||Wt()){tn("请先结束当前放置、拖动或笔刷操作");return}if(e&&(e.revision!==ve.revision||e.sessionId!==Tt()?.id||e.turn!==De)){Ja(),tn("会话或回合已变化，请重新选择操作"),zi();return}if(!dn())return;const t=ve.read(),i=t.editor.sessionId??"session-working",r=t.project.sessions.find(s=>s.id===i);if(!r?.workflow||(n==="reopen"?r.turns.length!==r.workflow.committedTurns||!r.workflow.committedTurns:r.status==="finished"||n!=="begin"&&!ki()||n==="begin"&&r.turns.length!==r.workflow.committedTurns)){tn("当前状态不适用此操作，请刷新回合状态"),zi();return}ln=!0,lc="",Ja(),zi();try{if(n==="reopen"){ve.reopenLastCommittedTurn(i,ve.revision),dr(),Vn(!0),tn("最近回合已恢复为草稿");return}const o={begin:$g,advance:qg,commit:Xg,discard:Wg}[n](t.project,i),a=o.sessions.find(d=>d.id===i),c={project:o,editor:{...t.editor,currentTurn:a.turns.length-1}},l={begin:"开始回合草稿",advance:"按航路推进草稿",commit:"提交回合",discard:"丢弃回合草稿"};ve.commit(c,l[n],t),dr(),(n==="begin"||n==="advance"||n==="discard"&&a.workflow?.committedTurns===0)&&Vn(!0)}catch(s){tn(s instanceof Error?s.message:String(s))}finally{ln=!1,rt()}}function mE(n){if(Ct)return;if(n!=="commit"&&n!=="discard"&&n!=="reopen"){Xu(n);return}if(!ve||Wt()||ln||(n==="reopen"?!Sn()||Tt().turns.length!==Tt().workflow.committedTurns||!Tt().workflow.committedTurns:!ki())||!dn())return;const e=n==="reopen"?"取消最近回合提交？":n==="commit"?"提交当前回合？":Tt()?.workflow?.committedTurns===0?"重置第一回合草稿？":"丢弃当前草稿？",t={action:n,revision:ve.revision,sessionId:Tt().id,turn:De},i=document.querySelector("#workflow-confirm");if(!i){window.confirm(e)&&Xu(n,t);return}Ds=t,i.hidden=!1;const r=document.querySelector("#workflow-confirm-text");r&&(r.textContent=e),zi()}for(const n of["begin","advance","commit","discard","reopen"])document.querySelector(`#workflow-${n}`)?.addEventListener("click",()=>mE(n));document.querySelector("#workflow-confirm-yes")?.addEventListener("click",()=>{const n=Ds;n&&Xu(n.action,n)});document.querySelector("#workflow-confirm-cancel")?.addEventListener("click",()=>{Ja(),zi()});document.querySelector("#canvas-resize")?.addEventListener("click",()=>{if(!ve||!ct()||Wt())return;const n=Number(ut("#canvas-width").value),e=Number(ut("#canvas-height").value),t=Number(ut("#canvas-samples").value);if(dn())try{const i=ve.read(),r=i.project.sessions.find(a=>a.id===i.editor.sessionId),s=Hg(i.project,r.mapRef,n,e,t),o=s.maps.at(-1);s.sessions.find(a=>a.id===r.id).mapRef={id:o.id,revision:o.revision},ve.commit({...i,project:s},"调整画布尺寸",i),dr(),Vn(!0),Yi(!0),tn(`画布 ${n} × ${e} km`)}catch(i){tn(i instanceof Error?i.message:String(i))}});document.querySelector("#task-editor-save")?.addEventListener("click",()=>{if(!(Ct||!ve||Wt()||Sn()||Tt()?.mapEditRef)&&dn())try{const n=ve.read(),e=Tt(),t=n.project.tasks.find(s=>s.id===e.taskRef.id&&s.revision===e.taskRef.revision),i=Vg(n.project,e.id,t?.name??e.name.replace(/ 制作副本$/,""));ve.commit({...n,project:i},"保存任务新修订",n),dr(),Vn(!0);const r=i.sessions.find(s=>s.id===e.id).taskRef;tn(`任务已保存 · r${r.revision}`),Lr(`任务已保存 · r${r.revision}`)}catch(n){const e=n instanceof Error?n.message:String(n);tn(e),Lr(e,"error")}});document.querySelector("#map-editor-save")?.addEventListener("click",()=>{if(Ct||!ve||Wt()||ln||!Tt()?.mapEditRef||!dn())return;const n=ve.read(),e=Tt().id;try{const t=Gg(n.project,e),i=t.sessions.find(s=>s.id===e).mapEditRef,r=ve.commit({...n,project:t},"保存地图新修订",n);dr(),Yi(!0),tn(r?`地图已保存 · r${i.revision}`:`无修改 · r${i.revision}`),Lr(r?`地图已保存 · r${i.revision}`:`无修改 · r${i.revision}`),zi()}catch(t){const i=t instanceof Error?t.message:String(t);tn(i),Lr(i,"error")}});document.querySelector("#workflow-save-draft")?.addEventListener("click",async()=>{if(!ve||Wt()||ln||!ki()||!Dl||!dn())return;const n=document.querySelector("#workflow-save-draft");n.disabled=!0;try{const e=await Dl();tn(e?"草稿已保存":"草稿保存失败"),Lr(e?"草稿已保存":"草稿保存失败",e?"ok":"error")}catch(e){const t=e instanceof Error?e.message:String(e);tn(t),Lr(t,"error")}finally{zi()}});document.querySelector("#workflow-snapshot")?.addEventListener("click",async()=>{if(!(Ct||!ve||Wt()||ln||!Tt()?.workflow?.committedTurns||!Ka)&&dn()){ln=!0,zi();try{await Ka(),tn("回合快照已发送到管理器快照仓库")}catch(n){tn(n instanceof Error?n.message:String(n))}finally{ln=!1,zi(),rt()}}});for(const n of["map","task"])document.querySelector(`#${n}-editor-save-as`)?.addEventListener("click",()=>{if(Ct||!ve||Wt()||ln||Sn()||!!Tt()?.mapEditRef!=(n==="map")||!dn())return;const e=document.querySelector("#editor-save-as-name").value.trim();if(!e){tn("请填写副本名称"),Lr("请填写副本名称","error");return}try{const t=ve.read(),i=Tt(),r=`map-${crypto.randomUUID()}`,s=n==="map"?xw(t.project,i.id,r,e):yw(t.project,i.id,{mapId:r,taskId:`task-${crypto.randomUUID()}`},e);ve.commit({...t,project:s.project},n==="map"?"另存为新地图":"另存为新任务",t),dr(),Vn(!0),n==="map"&&Yi(!0),tn(`${n==="map"?"地图":"任务"}已另存为「${e}」r1`),Lr(`${n==="map"?"地图":"任务"}已另存为「${e}」r1`)}catch(t){const i=t instanceof Error?t.message:String(t);tn(i),Lr(i,"error")}});function Dh(n){if(n!==Ct){if(Wt()||ln||!dn())throw new Error("请先完成当前编辑操作");if(n){const e=ve.read(),t=Lg(e),i=Np(e),r=new $u(i);cl={edit:Fe,terrain:Ht},Ho(),ft.clear(),fe=null,al=ve,Xa=e,Bl=t,Us.clear(),Us.set(i.editor.currentTurn,r),Ct=!0,ve=r}else Ho(),ft.clear(),fe=null,ve=al,Ct=!1,al=null,Xa=null,typeof qa<"u"&&(qa=null),Us.clear(),Fe=cl.edit,Ht=cl.terrain;Jr=null,Tl="",Aa="",lr(ve.read()),document.querySelector("#app").dataset.playerView=String(Ct),document.querySelector("#player-viewer-open").hidden=Ct,document.querySelector("#player-viewer-exit").hidden=!Ct,ot(),rt()}}function gE(n){const e=Dg(n);if(Wt()||ln||!dn())throw new Error("请先完成当前编辑操作");Ct&&Dh(!1);const t=ve.read();cl={edit:Fe,terrain:Ht},Ho(),ft.clear(),fe=null,al=ve,Xa=t,qa=e,Bl=e.turns.length-1;const i=new $u(e.turns[0]);Us.clear(),Us.set(0,i),ve=i,Ct=!0,Jr=null,Tl="",Aa="",lr(i.read()),document.querySelector("#app").dataset.playerView="true",document.querySelector("#player-viewer-open").hidden=!0,document.querySelector("#player-viewer-exit").hidden=!1,ot(),rt()}function _E(n){if(!Xa||Wt()||ln)return;const e=Math.max(0,Math.min(n,Bl));if(e===De||!dn())return;const t=Fe,i=typeof qa<"u"?qa:null,r=Us.get(e)??new $u(i?i.turns[e]:Np(Xa,e));Us.set(e,r),Ho(),ft.clear(),fe=null,ve=r,Jr=null,lr(r.read()),Fe=t,ot(),rt()}function vE(){if(!Ct||Wt()||ln||!dn())return;const n=ve.read(),e=n.project.sessions.find(s=>s.id===n.editor.sessionId);e.routes=[{id:"player-viewer-route",name:"Viewer",waypoints:[]}],n.editor.activeRouteId="player-viewer-route";const t=Yg(jg(n,n.editor.sessionId)),i=URL.createObjectURL(new Blob([t],{type:"application/json"})),r=document.createElement("a");r.href=i,r.download=`player-view-turn-${De+1}.json`,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function Ho(){Mt?.cancel(),Mt?.clearSelection(),vi=null,typeof nn<"u"&&nn?.cancel(),Fe=Ht=Xt=Fn=Vt=hn=!1,it=null,Ze=null,qi=null,ji=!1,Ir=null,gn=null,Ya=null,zo.clear(),ke.detach(),$i.visible=!1,Pt&&vt.domElement.hasPointerCapture(Pt.pointerId)&&vt.domElement.releasePointerCapture(Pt.pointerId),Pt=null,Ri(!0),It.enabled=!0,vt.domElement.style.cursor="",Ja(),lc=""}function dr(){Jr=null,Ho();const n=[...ft];lr(ve.read()),ft.clear(),n.filter(t=>st.some(i=>i.id===t)).forEach(t=>ft.add(t)),fe=Bi().at(-1)??null;const e=(t,i,r)=>Math.max(r,...t.filter(s=>s.startsWith(i)).map(s=>Number(s.slice(i.length))+1).filter(Number.isSafeInteger));rs=e(st.map(t=>t.id),"unit-",rs),Va=e(vn.map(t=>t.id),"route-",Va),wl=e(vn.flatMap(t=>t.waypoints.map(i=>i.id)),"wp-",wl),El=e(st.flatMap(t=>(t.trackPoints??[]).map(i=>i.id)),"control-",El),Sl=e(st.flatMap(t=>t.routeBinding?.formationId?[t.routeBinding.formationId]:[]),"formation-",Sl),ot(),rt()}let Dp=!1;function yE(n,e){if(Dp)throw new Error("Workspace already mounted");Dp=!0,ve=n,Dl=e?.saveDraft,Ka=e?.generateSnapshot,Hn=aw({fitMap:Rh,topView:Zw,toggleEdit:()=>Vn(!Fe),viewerExport:vE,viewerUndo:Vl,viewerRedo:Gl,chooseTool:t=>{ke.dragging||Pt||yi||(Mt?.cancel(),t!=="links"&&t!=="markers"&&nn?.cancel(),["markers","drawing"].includes(t)||Mt?.clearSelection(),Ze&&t!=="units"&&ss(),t==="terrain"&&ct()?(Vn(!0),Yi(!0)):Ht&&(Tt()?.mapEditRef?(Ht=!1,$i.visible=!1):Yi(!1)),["routes"].includes(t)||(Xt=Vt=Fn=!1,it=null),(["markers","drawing","links"].includes(t)?Si():ct())&&["groups","markers","drawing","routes","units","equipment","links"].includes(t)&&!Fe&&Vn(!0),t!=="range"&&un&&Gn(),ot(),rt())}}),Zr=document.createElement("aside"),Zr.id="player-roster-panel",Zr.hidden=!0,Zr.setAttribute("aria-label","玩家资料卡"),document.querySelector("#app").append(Zr),document.querySelector("#app").classList.add("player-roster-mounted"),Gu=dw(Zr,{readRevision:()=>ve.revision,read:()=>ve.read().project,busy:()=>ln||Wt(),report:tn,beginCreate:eE,armPlacement:tE,cancelPlacement:ss,selectUnit:(t,i)=>{if(ln||Wt())return;const r=st.find(s=>s.id===t);r&&(jn([r]),i&&Tp([t]))},recordAction:iE}),ig=cw(Hn.panels.groups,{read:Oi,units:()=>st,selectedIds:()=>[...ft],editable:()=>ct()&&Fe&&!Tt()?.mapEditRef,change:Yd,select:t=>jn(st.filter(i=>t.includes(i.id))),copy:Bw,focus:Tp}),Mt=_w({markersPanel:Hn.panels.markers,drawingsPanel:Hn.panels.drawing,world:rn,labelRoot:zl,read:Oi,change:(t,i)=>Yd(t,r=>i(r)),editable:()=>Si()&&Fe,focus:wh,sampleHeightKm:(t,i)=>Et(t*tt,i*tt)/tt,onMarkerPick:t=>nn?.pick("marker",t)??!1,onTransformMode:t=>{Ao=t,Ro()},onOpenPanel:t=>{document.querySelector("#edit-panel").dataset.activeTab!==t&&Hn?.select(t)},onSelectionChange:t=>{t&&(Ao="translate",Gn(),it=null,Xt=Vt=Fn=hn=!1,ft.clear(),fe=null,Xl(),ot(),rt()),Ro()},onPickingChange:t=>{document.querySelector("#app").dataset.mapPicking=String(t),t&&(Gn(),Ri(!0),hn=!1,Xt=Vt=Fn=Ht=!1,it=null,$i.visible=!1,ke.detach()),It.enabled=Fr,vt.domElement.style.cursor=t?"crosshair":"",zi()}}),nn=hw({panel:Hn.panels.links,world:rn,read:Oi,readUnits:()=>st.map(t=>{const i=Ul(t,Wn(t),Et,si);return{id:t.id,label:t.label,position:{x:i.x/tt,y:i.y/tt,z:i.z/tt}}}),selectedUnitId:()=>fe?.id,editable:()=>Si()&&Fe&&!Tt()?.mapEditRef,busy:()=>ln||Wt(),change:(t,i)=>Yd(t,r=>i(r)),onModeChange:t=>{t&&(Mt?.cancel(),Mt?.clearSelection(),Gn(),Ri(!0),hn=Xt=Vt=Fn=!1,it=null,ke.detach()),vt.domElement.style.cursor=t?"crosshair":"",Ro()}}),document.querySelector("#route-select-bound").addEventListener("click",()=>jn(st.filter(t=>t.routeBinding?.routeId===Nn))),document.querySelector("#route-bind-group").addEventListener("click",()=>{const t=document.querySelector("#route-group-select").value;xg(st.filter(i=>i.groupId===t&&nc(i)))});for(const t of["#route-visible","#route-labels"])document.querySelector(t).addEventListener("change",()=>ot());return vt.domElement.addEventListener("pointerdown",t=>{if(!Mt?.isPicking()||t.button!==0||t.altKey)return;t.stopImmediatePropagation(),t.preventDefault();const i=Bo(t);i&&Mt.pick({x:i.x/tt,y:i.y/tt,z:i.z/tt})},!0),vt.domElement.addEventListener("pointermove",t=>{if(!Mt?.isPicking())return;const i=Bo(t);Mt.preview(i?{x:i.x/tt,y:i.y/tt,z:i.z/tt}:null)}),dr(),sc(),Vn(!1),ot(),wg(),{flush:()=>{if(!dn())throw new Error("当前编辑尚未保存")},open:pE,sync:dr,busy:()=>ln||Wt(),selectedUnitId:()=>fe?.id,editTerrain:()=>{ct()&&(Vn(!0),Yi(!0))},editScenario:()=>{ct()&&(Vn(!0),Yi(!1))},playerView:Dh,snapshot:gE,activate:t=>{Fr=t,It.enabled=t,Hn?.sync({editing:Fe,editable:Si(),mapOnly:!!Tt()?.mapEditRef,active:t,playerView:Ct,viewerCanUndo:!!ve?.canUndo,viewerCanRedo:!!ve?.canRedo}),t?(Pl()||requestAnimationFrame(()=>{Pl()}),ot(),rt()):(Mt?.cancel(),nn?.cancel(),Gn(),ke.detach(),fg())}}}export{yE as mountWorkspace};
