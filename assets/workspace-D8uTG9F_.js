import{U as rc,W as tt,G as Hg,R as Yh,p as Vg,v as Gg,w as Wg,d as ih,c as Yp,a as Xg,b as qg,H as jp,e as $g,P as rh,f as Yg,g as Zp,m as sh,h as oh,i as Kp,r as ah,j as jg,k as Zg,l as Kg,n as Jg,o as Qg,q as Jp,t as Qp,s as Ma,u as e0,x as t0,y as n0,z as i0,A as jh,B as Zh,C as em,D as r0,E as s0,F as Dr,I as o0,J as tm,K as nm,L as a0,M as c0,N as l0,O as u0,Q as d0,S as h0,T as f0}from"./index-DjZ9TK1u.js";const ch="179",wo={ROTATE:0,DOLLY:1,PAN:2},yo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},p0=0,Kh=1,m0=2,im=1,g0=2,Rr=3,Ur=0,wi=1,mn=2,es=0,Eo=1,rd=2,Jh=3,Qh=4,_0=5,Es=100,v0=101,x0=102,y0=103,S0=104,b0=200,M0=201,w0=202,E0=203,sd=204,od=205,T0=206,A0=207,R0=208,C0=209,P0=210,D0=211,L0=212,I0=213,N0=214,ad=0,cd=1,ld=2,Io=3,ud=4,dd=5,hd=6,fd=7,rm=0,U0=1,k0=2,ts=0,F0=1,O0=2,z0=3,B0=4,H0=5,V0=6,G0=7,sm=300,No=301,Uo=302,pd=303,md=304,Hl=306,gd=1e3,Cs=1001,_d=1002,Oi=1003,W0=1004,_c=1005,_r=1006,nu=1007,Ps=1008,yr=1009,om=1010,am=1011,Ia=1012,lh=1013,Os=1014,vr=1015,sc=1016,uh=1017,dh=1018,Na=1020,cm=35902,lm=1021,um=1022,or=1023,Ua=1026,ka=1027,hh=1028,fh=1029,dm=1030,ph=1031,mh=1033,rl=33776,sl=33777,ol=33778,al=33779,vd=35840,xd=35841,yd=35842,Sd=35843,bd=36196,Md=37492,wd=37496,Ed=37808,Td=37809,Ad=37810,Rd=37811,Cd=37812,Pd=37813,Dd=37814,Ld=37815,Id=37816,Nd=37817,Ud=37818,kd=37819,Fd=37820,Od=37821,cl=36492,zd=36494,Bd=36495,hm=36283,Hd=36284,Vd=36285,Gd=36286,X0=3200,q0=3201,$0=0,Y0=1,Kr="",pi="srgb",ko="srgb-linear",vl="linear",Jt="srgb",to=7680,ef=519,j0=512,Z0=513,K0=514,fm=515,J0=516,Q0=517,e_=518,t_=519,tf=35044,xl=35048,nf="300 es",xr=2e3,yl=2001;class Xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rf=1234567;const wa=Math.PI/180,Fa=180/Math.PI;function qs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ei[n&255]+ei[n>>8&255]+ei[n>>16&255]+ei[n>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[t&63|128]+ei[t>>8&255]+"-"+ei[t>>16&255]+ei[t>>24&255]+ei[i&255]+ei[i>>8&255]+ei[i>>16&255]+ei[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function gh(n,e){return(n%e+e)%e}function n_(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function i_(n,e,t){return n!==e?(t-n)/(e-n):0}function Ea(n,e,t){return(1-t)*n+t*e}function r_(n,e,t,i){return Ea(n,e,1-Math.exp(-t*i))}function s_(n,e=1){return e-Math.abs(gh(n,e*2)-e)}function o_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function a_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function c_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function l_(n,e){return n+Math.random()*(e-n)}function u_(n){return n*(.5-Math.random())}function d_(n){n!==void 0&&(rf=n);let e=rf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function h_(n){return n*wa}function f_(n){return n*Fa}function p_(n){return(n&n-1)===0&&n!==0}function m_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function g_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function __(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),f=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*m,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*m,a*l);break;case"ZYZ":n.set(c*m,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _o(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function di(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Zt={DEG2RAD:wa,RAD2DEG:Fa,generateUUID:qs,clamp:Ct,euclideanModulo:gh,mapLinear:n_,inverseLerp:i_,lerp:Ea,damp:r_,pingpong:s_,smoothstep:o_,smootherstep:a_,randInt:c_,randFloat:l_,randFloatSpread:u_,seededRandom:d_,degToRad:h_,radToDeg:f_,isPowerOfTwo:p_,ceilPowerOfTwo:m_,floorPowerOfTwo:g_,setQuaternionFromProperEuler:__,normalize:di,denormalize:_o};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(d!==_||c!==h||l!==f||u!==m){let g=1-a;const p=c*h+l*f+u*m+d*_,w=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const L=Math.sqrt(y),D=Math.atan2(L,p*w);g=Math.sin(g*D)/L,a=Math.sin(a*D)/L}const v=a*w;if(c=c*g+h*v,l=l*g+f*v,u=u*g+m*v,d=d*g+_*v,g===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=L,l*=L,u*=L,d*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+u*d+c*f-l*h,e[t+1]=c*m+u*h+l*d-a*f,e[t+2]=l*m+u*f+a*h-c*d,e[t+3]=u*m-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),f=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*f*m,this._y=l*f*d-h*u*m,this._z=l*u*m+h*f*d,this._w=l*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+l*f*m,this._y=l*f*d-h*u*m,this._z=l*u*m-h*f*d,this._w=l*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-l*f*m,this._y=l*f*d+h*u*m,this._z=l*u*m+h*f*d,this._w=l*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-l*f*m,this._y=l*f*d+h*u*m,this._z=l*u*m-h*f*d,this._w=l*u*d+h*f*m;break;case"YZX":this._x=h*u*d+l*f*m,this._y=l*f*d+h*u*m,this._z=l*u*m-h*f*d,this._w=l*u*d-h*f*m;break;case"XZY":this._x=h*u*d-l*f*m,this._y=l*f*d-h*u*m,this._z=l*u*m+h*f*d,this._w=l*u*d+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(e=0,t=0,i=0){S.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return iu.copy(this).projectOnVector(e),this.sub(iu)}reflect(e){return this.sub(iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const iu=new S,sf=new nn;class wt{constructor(e,t,i,r,s,o,a,c,l){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],m=i[8],_=r[0],g=r[3],p=r[6],w=r[1],y=r[4],v=r[7],L=r[2],D=r[5],R=r[8];return s[0]=o*_+a*w+c*L,s[3]=o*g+a*y+c*D,s[6]=o*p+a*v+c*R,s[1]=l*_+u*w+d*L,s[4]=l*g+u*y+d*D,s[7]=l*p+u*v+d*R,s[2]=h*_+f*w+m*L,s[5]=h*g+f*y+m*D,s[8]=h*p+f*v+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,f=l*s-o*c,m=t*d+i*h+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=d*_,e[1]=(r*l-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ru.makeScale(e,t)),this}rotate(e){return this.premultiply(ru.makeRotation(-e)),this}translate(e,t){return this.premultiply(ru.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ru=new wt;function pm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Sl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function v_(){const n=Sl("canvas");return n.style.display="block",n}const of={};function To(n){n in of||(of[n]=!0,console.warn(n))}function x_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const af=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cf=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y_(){const n={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Jt&&(r.r=Lr(r.r),r.g=Lr(r.g),r.b=Lr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Jt&&(r.r=Ao(r.r),r.g=Ao(r.g),r.b=Ao(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Kr?vl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return To("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return To("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ko]:{primaries:e,whitePoint:i,transfer:vl,toXYZ:af,fromXYZ:cf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:i,transfer:Jt,toXYZ:af,fromXYZ:cf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),n}const Xt=y_();function Lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ao(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let no;class S_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{no===void 0&&(no=Sl("canvas")),no.width=e.width,no.height=e.height;const r=no.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=no}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Lr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Lr(t[i]/255)*255):t[i]=Lr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let b_=0;class _h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=qs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(su(r[o].image)):s.push(su(r[o]))}else s=su(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function su(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?S_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let M_=0;const ou=new S;class mi extends Xs{constructor(e=mi.DEFAULT_IMAGE,t=mi.DEFAULT_MAPPING,i=Cs,r=Cs,s=_r,o=Ps,a=or,c=yr,l=mi.DEFAULT_ANISOTROPY,u=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=qs(),this.name="",this.source=new _h(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ou).x}get height(){return this.source.getSize(ou).y}get depth(){return this.source.getSize(ou).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gd:e.x=e.x-Math.floor(e.x);break;case Cs:e.x=e.x<0?0:1;break;case _d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gd:e.y=e.y-Math.floor(e.y);break;case Cs:e.y=e.y<0?0:1;break;case _d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mi.DEFAULT_IMAGE=null;mi.DEFAULT_MAPPING=sm;mi.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(f+1)/2,L=(p+1)/2,D=(u+h)/4,R=(d+_)/4,N=(m+g)/4;return y>v&&y>L?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=D/i,s=R/i):v>L?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=D/r,s=N/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=R/s,r=N/s),this.set(i,r,s,t),this}let w=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(d-_)/w,this.z=(h-u)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class w_ extends Xs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_r,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new mi(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:_r,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new _h(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zs extends w_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class mm extends mi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class E_ extends mi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=Cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class as{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qi):Qi.fromBufferAttribute(s,o),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vc.copy(i.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),xc.subVectors(this.max,ta),io.subVectors(e.a,ta),ro.subVectors(e.b,ta),so.subVectors(e.c,ta),Br.subVectors(ro,io),Hr.subVectors(so,ro),ps.subVectors(io,so);let t=[0,-Br.z,Br.y,0,-Hr.z,Hr.y,0,-ps.z,ps.y,Br.z,0,-Br.x,Hr.z,0,-Hr.x,ps.z,0,-ps.x,-Br.y,Br.x,0,-Hr.y,Hr.x,0,-ps.y,ps.x,0];return!au(t,io,ro,so,xc)||(t=[1,0,0,0,1,0,0,0,1],!au(t,io,ro,so,xc))?!1:(yc.crossVectors(Br,Hr),t=[yc.x,yc.y,yc.z],au(t,io,ro,so,xc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mr=[new S,new S,new S,new S,new S,new S,new S,new S],Qi=new S,vc=new as,io=new S,ro=new S,so=new S,Br=new S,Hr=new S,ps=new S,ta=new S,xc=new S,yc=new S,ms=new S;function au(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ms.fromArray(n,s);const a=r.x*Math.abs(ms.x)+r.y*Math.abs(ms.y)+r.z*Math.abs(ms.z),c=e.dot(ms),l=t.dot(ms),u=i.dot(ms);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const T_=new as,na=new S,cu=new S;class cs{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):T_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const t=na.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(na,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(cu)),this.expandByPoint(na.copy(e.center).sub(cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wr=new S,lu=new S,Sc=new S,Vr=new S,uu=new S,bc=new S,du=new S;class oc{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wr.copy(this.origin).addScaledVector(this.direction,t),wr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){lu.copy(e).add(t).multiplyScalar(.5),Sc.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(lu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Sc),a=Vr.dot(this.direction),c=-Vr.dot(Sc),l=Vr.lengthSq(),u=Math.abs(1-o*o);let d,h,f,m;if(u>0)if(d=o*c-a,h=o*a-c,m=s*u,d>=0)if(h>=-m)if(h<=m){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-m?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=m?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(lu).addScaledVector(Sc,h),f}intersectSphere(e,t){wr.subVectors(e.center,this.origin);const i=wr.dot(this.direction),r=wr.dot(wr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,wr)!==null}intersectTriangle(e,t,i,r,s){uu.subVectors(t,e),bc.subVectors(i,e),du.crossVectors(uu,bc);let o=this.direction.dot(du),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vr.subVectors(this.origin,e);const c=a*this.direction.dot(bc.crossVectors(Vr,bc));if(c<0)return null;const l=a*this.direction.dot(uu.cross(Vr));if(l<0||c+l>o)return null;const u=-a*Vr.dot(du);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,i,r,s,o,a,c,l,u,d,h,f,m,_,g){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,f,m,_,g)}set(e,t,i,r,s,o,a,c,l,u,d,h,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/oo.setFromMatrixColumn(e,0).length(),s=1/oo.setFromMatrixColumn(e,1).length(),o=1/oo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,f=o*d,m=a*u,_=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+m*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,m=l*u,_=l*d;t[0]=h+_*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,m=l*u,_=l*d;t[0]=h-_*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,f=o*d,m=a*u,_=a*d;t[0]=c*u,t[4]=m*l-f,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=_-h*d,t[8]=m*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+m,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+_,t[5]=o*u,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(A_,e,R_)}lookAt(e,t,i){const r=this.elements;return Di.subVectors(e,t),Di.lengthSq()===0&&(Di.z=1),Di.normalize(),Gr.crossVectors(i,Di),Gr.lengthSq()===0&&(Math.abs(i.z)===1?Di.x+=1e-4:Di.z+=1e-4,Di.normalize(),Gr.crossVectors(i,Di)),Gr.normalize(),Mc.crossVectors(Di,Gr),r[0]=Gr.x,r[4]=Mc.x,r[8]=Di.x,r[1]=Gr.y,r[5]=Mc.y,r[9]=Di.y,r[2]=Gr.z,r[6]=Mc.z,r[10]=Di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],w=i[3],y=i[7],v=i[11],L=i[15],D=r[0],R=r[4],N=r[8],b=r[12],M=r[1],I=r[5],k=r[9],O=r[13],G=r[2],$=r[6],j=r[10],re=r[14],q=r[3],ge=r[7],Te=r[11],ze=r[15];return s[0]=o*D+a*M+c*G+l*q,s[4]=o*R+a*I+c*$+l*ge,s[8]=o*N+a*k+c*j+l*Te,s[12]=o*b+a*O+c*re+l*ze,s[1]=u*D+d*M+h*G+f*q,s[5]=u*R+d*I+h*$+f*ge,s[9]=u*N+d*k+h*j+f*Te,s[13]=u*b+d*O+h*re+f*ze,s[2]=m*D+_*M+g*G+p*q,s[6]=m*R+_*I+g*$+p*ge,s[10]=m*N+_*k+g*j+p*Te,s[14]=m*b+_*O+g*re+p*ze,s[3]=w*D+y*M+v*G+L*q,s[7]=w*R+y*I+v*$+L*ge,s[11]=w*N+y*k+v*j+L*Te,s[15]=w*b+y*O+v*re+L*ze,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*f-i*c*f)+_*(+t*c*f-t*l*h+s*o*h-r*o*f+r*l*u-s*c*u)+g*(+t*l*d-t*a*f-s*o*d+i*o*f+s*a*u-i*l*u)+p*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],w=d*g*l-_*h*l+_*c*f-a*g*f-d*c*p+a*h*p,y=m*h*l-u*g*l-m*c*f+o*g*f+u*c*p-o*h*p,v=u*_*l-m*d*l+m*a*f-o*_*f-u*a*p+o*d*p,L=m*d*c-u*_*c-m*a*h+o*_*h+u*a*g-o*d*g,D=t*w+i*y+r*v+s*L;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/D;return e[0]=w*R,e[1]=(_*h*s-d*g*s-_*r*f+i*g*f+d*r*p-i*h*p)*R,e[2]=(a*g*s-_*c*s+_*r*l-i*g*l-a*r*p+i*c*p)*R,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*f-i*c*f)*R,e[4]=y*R,e[5]=(u*g*s-m*h*s+m*r*f-t*g*f-u*r*p+t*h*p)*R,e[6]=(m*c*s-o*g*s-m*r*l+t*g*l+o*r*p-t*c*p)*R,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*f+t*c*f)*R,e[8]=v*R,e[9]=(m*d*s-u*_*s-m*i*f+t*_*f+u*i*p-t*d*p)*R,e[10]=(o*_*s-m*a*s+m*i*l-t*_*l-o*i*p+t*a*p)*R,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*f-t*a*f)*R,e[12]=L*R,e[13]=(u*_*r-m*d*r+m*i*h-t*_*h-u*i*g+t*d*g)*R,e[14]=(m*a*r-o*_*r-m*i*c+t*_*c+o*i*g-t*a*g)*R,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,f=s*u,m=s*d,_=o*u,g=o*d,p=a*d,w=c*l,y=c*u,v=c*d,L=i.x,D=i.y,R=i.z;return r[0]=(1-(_+p))*L,r[1]=(f+v)*L,r[2]=(m-y)*L,r[3]=0,r[4]=(f-v)*D,r[5]=(1-(h+p))*D,r[6]=(g+w)*D,r[7]=0,r[8]=(m+y)*R,r[9]=(g-w)*R,r[10]=(1-(h+_))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=oo.set(r[0],r[1],r[2]).length();const o=oo.set(r[4],r[5],r[6]).length(),a=oo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],er.copy(this);const l=1/s,u=1/o,d=1/a;return er.elements[0]*=l,er.elements[1]*=l,er.elements[2]*=l,er.elements[4]*=u,er.elements[5]*=u,er.elements[6]*=u,er.elements[8]*=d,er.elements[9]*=d,er.elements[10]*=d,t.setFromRotationMatrix(er),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=xr,c=!1){const l=this.elements,u=2*s/(t-e),d=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let m,_;if(c)m=s/(o-s),_=o*s/(o-s);else if(a===xr)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===yl)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=xr,c=!1){const l=this.elements,u=2/(t-e),d=2/(i-r),h=-(t+e)/(t-e),f=-(i+r)/(i-r);let m,_;if(c)m=1/(o-s),_=o/(o-s);else if(a===xr)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===yl)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const oo=new S,er=new Bt,A_=new S(0,0,0),R_=new S(1,1,1),Gr=new S,Mc=new S,Di=new S,lf=new Bt,uf=new nn;class In{constructor(e=0,t=0,i=0,r=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uf.setFromEuler(this),this.setFromQuaternion(uf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class vh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let C_=0;const df=new S,ao=new nn,Er=new Bt,wc=new S,ia=new S,P_=new S,D_=new nn,hf=new S(1,0,0),ff=new S(0,1,0),pf=new S(0,0,1),mf={type:"added"},L_={type:"removed"},co={type:"childadded",child:null},hu={type:"childremoved",child:null};class Sn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new S,t=new In,i=new nn,r=new S(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new wt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.multiply(ao),this}rotateOnWorldAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.premultiply(ao),this}rotateX(e){return this.rotateOnAxis(hf,e)}rotateY(e){return this.rotateOnAxis(ff,e)}rotateZ(e){return this.rotateOnAxis(pf,e)}translateOnAxis(e,t){return df.copy(e).applyQuaternion(this.quaternion),this.position.add(df.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hf,e)}translateY(e){return this.translateOnAxis(ff,e)}translateZ(e){return this.translateOnAxis(pf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wc.copy(e):wc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(ia,wc,this.up):Er.lookAt(wc,ia,this.up),this.quaternion.setFromRotationMatrix(Er),r&&(Er.extractRotation(r.matrixWorld),ao.setFromRotationMatrix(Er),this.quaternion.premultiply(ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mf),co.child=e,this.dispatchEvent(co),co.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(L_),hu.child=e,this.dispatchEvent(hu),hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Er.multiply(e.parent.matrixWorld)),e.applyMatrix4(Er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mf),co.child=e,this.dispatchEvent(co),co.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,P_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,D_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Sn.DEFAULT_UP=new S(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tr=new S,Tr=new S,fu=new S,Ar=new S,lo=new S,uo=new S,gf=new S,pu=new S,mu=new S,gu=new S,_u=new Ot,vu=new Ot,xu=new Ot;class sr{constructor(e=new S,t=new S,i=new S){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),tr.subVectors(e,t),r.cross(tr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){tr.subVectors(r,t),Tr.subVectors(i,t),fu.subVectors(e,t);const o=tr.dot(tr),a=tr.dot(Tr),c=tr.dot(fu),l=Tr.dot(Tr),u=Tr.dot(fu),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,m=(o*u-a*c)*h;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ar)===null?!1:Ar.x>=0&&Ar.y>=0&&Ar.x+Ar.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Ar)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ar.x),c.addScaledVector(o,Ar.y),c.addScaledVector(a,Ar.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return _u.setScalar(0),vu.setScalar(0),xu.setScalar(0),_u.fromBufferAttribute(e,t),vu.fromBufferAttribute(e,i),xu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(_u,s.x),o.addScaledVector(vu,s.y),o.addScaledVector(xu,s.z),o}static isFrontFacing(e,t,i,r){return tr.subVectors(i,t),Tr.subVectors(e,t),tr.cross(Tr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tr.subVectors(this.c,this.b),Tr.subVectors(this.a,this.b),tr.cross(Tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return sr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return sr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;lo.subVectors(r,i),uo.subVectors(s,i),pu.subVectors(e,i);const c=lo.dot(pu),l=uo.dot(pu);if(c<=0&&l<=0)return t.copy(i);mu.subVectors(e,r);const u=lo.dot(mu),d=uo.dot(mu);if(u>=0&&d<=u)return t.copy(r);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(lo,o);gu.subVectors(e,s);const f=lo.dot(gu),m=uo.dot(gu);if(m>=0&&f<=m)return t.copy(s);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(uo,a);const g=u*m-f*d;if(g<=0&&d-u>=0&&f-m>=0)return gf.subVectors(s,r),a=(d-u)/(d-u+(f-m)),t.copy(r).addScaledVector(gf,a);const p=1/(g+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(lo,o).addScaledVector(uo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function yu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class kt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Xt.workingColorSpace){if(e=gh(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=yu(o,s,e+1/3),this.g=yu(o,s,e),this.b=yu(o,s,e-1/3)}return Xt.colorSpaceToWorking(this,r),this}setStyle(e,t=pi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pi){const i=gm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Xt.workingToColorSpace(ti.copy(this),e),Math.round(Ct(ti.r*255,0,255))*65536+Math.round(Ct(ti.g*255,0,255))*256+Math.round(Ct(ti.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xt.workingColorSpace){Xt.workingToColorSpace(ti.copy(this),t);const i=ti.r,r=ti.g,s=ti.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Xt.workingColorSpace){return Xt.workingToColorSpace(ti.copy(this),t),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=pi){Xt.workingToColorSpace(ti.copy(this),e);const t=ti.r,i=ti.g,r=ti.b;return e!==pi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+t,Wr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wr),e.getHSL(Ec);const i=Ea(Wr.h,Ec.h,t),r=Ea(Wr.s,Ec.s,t),s=Ea(Wr.l,Ec.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ti=new kt;kt.NAMES=gm;let I_=0;class qo extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Eo,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sd,this.blendDst=od,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Eo&&(i.blending=this.blending),this.side!==Ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sd&&(i.blendSrc=this.blendSrc),this.blendDst!==od&&(i.blendDst=this.blendDst),this.blendEquation!==Es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ef&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==to&&(i.stencilFail=this.stencilFail),this.stencilZFail!==to&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==to&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yn extends qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=rm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cn=new S,Tc=new Be;let N_=0;class gi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:N_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tf,this.updateRanges=[],this.gpuType=vr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Tc.fromBufferAttribute(this,t),Tc.applyMatrix3(e),this.setXY(t,Tc.x,Tc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix3(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_o(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=di(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_o(t,this.array)),t}setX(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_o(t,this.array)),t}setY(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_o(t,this.array)),t}setZ(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_o(t,this.array)),t}setW(e,t){return this.normalized&&(t=di(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),i=di(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),i=di(i,this.array),r=di(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=di(t,this.array),i=di(i,this.array),r=di(r,this.array),s=di(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tf&&(e.usage=this.usage),e}}class _m extends gi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vm extends gi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Dt extends gi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let U_=0;const Xi=new Bt,Su=new Sn,ho=new S,Li=new as,ra=new as,Bn=new S;class zt extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pm(e)?vm:_m)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new wt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xi.makeRotationFromQuaternion(e),this.applyMatrix4(Xi),this}rotateX(e){return Xi.makeRotationX(e),this.applyMatrix4(Xi),this}rotateY(e){return Xi.makeRotationY(e),this.applyMatrix4(Xi),this}rotateZ(e){return Xi.makeRotationZ(e),this.applyMatrix4(Xi),this}translate(e,t,i){return Xi.makeTranslation(e,t,i),this.applyMatrix4(Xi),this}scale(e,t,i){return Xi.makeScale(e,t,i),this.applyMatrix4(Xi),this}lookAt(e){return Su.lookAt(e),Su.updateMatrix(),this.applyMatrix4(Su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Li.setFromBufferAttribute(s),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,Li.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,Li.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(Li.min),this.boundingBox.expandByPoint(Li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(e){const i=this.boundingSphere.center;if(Li.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ra.setFromBufferAttribute(a),this.morphTargetsRelative?(Bn.addVectors(Li.min,ra.min),Li.expandByPoint(Bn),Bn.addVectors(Li.max,ra.max),Li.expandByPoint(Bn)):(Li.expandByPoint(ra.min),Li.expandByPoint(ra.max))}Li.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Bn.fromBufferAttribute(a,l),c&&(ho.fromBufferAttribute(e,l),Bn.add(ho)),r=Math.max(r,i.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let N=0;N<i.count;N++)a[N]=new S,c[N]=new S;const l=new S,u=new S,d=new S,h=new Be,f=new Be,m=new Be,_=new S,g=new S;function p(N,b,M){l.fromBufferAttribute(i,N),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,M),h.fromBufferAttribute(s,N),f.fromBufferAttribute(s,b),m.fromBufferAttribute(s,M),u.sub(l),d.sub(l),f.sub(h),m.sub(h);const I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(I),a[N].add(_),a[b].add(_),a[M].add(_),c[N].add(g),c[b].add(g),c[M].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,b=w.length;N<b;++N){const M=w[N],I=M.start,k=M.count;for(let O=I,G=I+k;O<G;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new S,v=new S,L=new S,D=new S;function R(N){L.fromBufferAttribute(r,N),D.copy(L);const b=a[N];y.copy(b),y.sub(L.multiplyScalar(L.dot(b))).normalize(),v.crossVectors(D,b);const I=v.dot(c[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,I)}for(let N=0,b=w.length;N<b;++N){const M=w[N],I=M.start,k=M.count;for(let O=I,G=I+k;O<G;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new S,s=new S,o=new S,a=new S,c=new S,l=new S,u=new S,d=new S;if(e)for(let h=0,f=e.count;h<f;h+=3){const m=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bn.fromBufferAttribute(e,t),Bn.normalize(),e.setXYZ(t,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)h[m++]=l[f++]}return new gi(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _f=new Bt,gs=new oc,Ac=new cs,vf=new S,Rc=new S,Cc=new S,Pc=new S,bu=new S,Dc=new S,xf=new S,Lc=new S;class we extends Sn{constructor(e=new zt,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Dc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(bu.fromBufferAttribute(d,e),o?Dc.addScaledVector(bu,u):Dc.addScaledVector(bu.sub(t),u))}t.add(Dc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ac.copy(i.boundingSphere),Ac.applyMatrix4(s),gs.copy(e.ray).recast(e.near),!(Ac.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Ac,vf)===null||gs.origin.distanceToSquared(vf)>(e.far-e.near)**2))&&(_f.copy(s).invert(),gs.copy(e.ray).applyMatrix4(_f),!(i.boundingBox!==null&&gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[g.materialIndex],w=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=w,L=y;v<L;v+=3){const D=a.getX(v),R=a.getX(v+1),N=a.getX(v+2);r=Ic(this,p,e,i,l,u,d,D,R,N),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const w=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);r=Ic(this,o,e,i,l,u,d,w,y,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[g.materialIndex],w=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=w,L=y;v<L;v+=3){const D=v,R=v+1,N=v+2;r=Ic(this,p,e,i,l,u,d,D,R,N),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const w=g,y=g+1,v=g+2;r=Ic(this,o,e,i,l,u,d,w,y,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function k_(n,e,t,i,r,s,o,a){let c;if(e.side===wi?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Ur,a),c===null)return null;Lc.copy(a),Lc.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Lc);return l<t.near||l>t.far?null:{distance:l,point:Lc.clone(),object:n}}function Ic(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Rc),n.getVertexPosition(c,Cc),n.getVertexPosition(l,Pc);const u=k_(n,e,t,i,Rc,Cc,Pc,xf);if(u){const d=new S;sr.getBarycoord(xf,Rc,Cc,Pc,d),r&&(u.uv=sr.getInterpolatedAttribute(r,a,c,l,d,new Be)),s&&(u.uv1=sr.getInterpolatedAttribute(s,a,c,l,d,new Be)),o&&(u.normal=sr.getInterpolatedAttribute(o,a,c,l,d,new S),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new S,materialIndex:0};sr.getNormal(Rc,Cc,Pc,h.normal),u.face=h,u.barycoord=d}return u}class Tn extends zt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(d,2));function m(_,g,p,w,y,v,L,D,R,N,b){const M=v/R,I=L/N,k=v/2,O=L/2,G=D/2,$=R+1,j=N+1;let re=0,q=0;const ge=new S;for(let Te=0;Te<j;Te++){const ze=Te*I-O;for(let He=0;He<$;He++){const at=He*M-k;ge[_]=at*w,ge[g]=ze*y,ge[p]=G,l.push(ge.x,ge.y,ge.z),ge[_]=0,ge[g]=0,ge[p]=D>0?1:-1,u.push(ge.x,ge.y,ge.z),d.push(He/R),d.push(1-Te/N),re+=1}}for(let Te=0;Te<N;Te++)for(let ze=0;ze<R;ze++){const He=h+ze+$*Te,at=h+ze+$*(Te+1),yt=h+(ze+1)+$*(Te+1),te=h+(ze+1)+$*Te;c.push(He,at,te),c.push(at,yt,te),q+=6}a.addGroup(f,q,b),f+=q,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function hi(n){const e={};for(let t=0;t<n.length;t++){const i=Fo(n[t]);for(const r in i)e[r]=i[r]}return e}function F_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xt.workingColorSpace}const O_={clone:Fo,merge:hi};var z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z_,this.fragmentShader=B_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=F_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ym extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=xr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xr=new S,yf=new Be,Sf=new Be;class Ni extends ym{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,yf,Sf),t.subVectors(Sf,yf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fo=-90,po=1;class H_ extends Sn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ni(fo,po,e,t);r.layers=this.layers,this.add(r);const s=new Ni(fo,po,e,t);s.layers=this.layers,this.add(s);const o=new Ni(fo,po,e,t);o.layers=this.layers,this.add(o);const a=new Ni(fo,po,e,t);a.layers=this.layers,this.add(a);const c=new Ni(fo,po,e,t);c.layers=this.layers,this.add(c);const l=new Ni(fo,po,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===xr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===yl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Sm extends mi{constructor(e=[],t=No,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V_ extends zs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sm(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Tn(5,5,5),s=new kr({name:"CubemapFromEquirect",uniforms:Fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wi,blending:es});s.uniforms.tEquirect.value=t;const o=new we(r,s),a=t.minFilter;return t.minFilter===Ps&&(t.minFilter=_r),new H_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class An extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const G_={type:"move"};class Mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;l.inputState.pinching&&h>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(G_)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new An;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class W_ extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class X_ extends mi{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Oi,u=Oi,d,h){super(null,o,a,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wd extends gi{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mo=new Bt,bf=new Bt,Nc=[],Mf=new as,q_=new Bt,sa=new we,oa=new cs;class $_ extends we{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,q_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new as),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mo),Mf.copy(e.boundingBox).applyMatrix4(mo),this.boundingBox.union(Mf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,mo),oa.copy(e.boundingSphere).applyMatrix4(mo),this.boundingSphere.union(oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(sa.geometry=this.geometry,sa.material=this.material,sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(i),e.ray.intersectsSphere(oa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,mo),bf.multiplyMatrices(i,mo),sa.matrixWorld=bf,sa.raycast(e,Nc);for(let o=0,a=Nc.length;o<a;o++){const c=Nc[o];c.instanceId=s,c.object=this,t.push(c)}Nc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new X_(new Float32Array(r*this.count),r,this.count,hh,vr));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wu=new S,Y_=new S,j_=new wt;class jr{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=wu.subVectors(i,t).cross(Y_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||j_.getNormalMatrix(e),r=this.coplanarPoint(wu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new cs,Z_=new Be(.5,.5),Uc=new S;class xh{constructor(e=new jr,t=new jr,i=new jr,r=new jr,s=new jr,o=new jr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],w=s[12],y=s[13],v=s[14],L=s[15];if(r[0].setComponents(l-o,f-u,p-m,L-w).normalize(),r[1].setComponents(l+o,f+u,p+m,L+w).normalize(),r[2].setComponents(l+a,f+d,p+_,L+y).normalize(),r[3].setComponents(l-a,f-d,p-_,L-y).normalize(),i)r[4].setComponents(c,h,g,v).normalize(),r[5].setComponents(l-c,f-h,p-g,L-v).normalize();else if(r[4].setComponents(l-c,f-h,p-g,L-v).normalize(),t===xr)r[5].setComponents(l+c,f+h,p+g,L+v).normalize();else if(t===yl)r[5].setComponents(c,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);const t=Z_.distanceTo(e.center);return _s.radius=.7071067811865476+t,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Uc.x=r.normal.x>0?e.max.x:e.min.x,Uc.y=r.normal.y>0?e.max.y:e.min.y,Uc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ei extends qo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bl=new S,Ml=new S,wf=new Bt,aa=new oc,kc=new cs,Eu=new S,Ef=new S;class ln extends Sn{constructor(e=new zt,t=new Ei){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)bl.fromBufferAttribute(t,r-1),Ml.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=bl.distanceTo(Ml);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kc.copy(i.boundingSphere),kc.applyMatrix4(r),kc.radius+=s,e.ray.intersectsSphere(kc)===!1)return;wf.copy(r).invert(),aa.copy(e.ray).applyMatrix4(wf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=u.getX(_),w=u.getX(_+1),y=Fc(this,e,aa,c,p,w,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(f),p=Fc(this,e,aa,c,_,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=Fc(this,e,aa,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Fc(this,e,aa,c,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fc(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(bl.fromBufferAttribute(a,r),Ml.fromBufferAttribute(a,s),t.distanceSqToSegment(bl,Ml,Eu,Ef)>i)return;Eu.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Eu);if(!(l<e.near||l>e.far))return{distance:l,point:Ef.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Tf=new S,Af=new S;class K_ extends ln{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Tf.fromBufferAttribute(t,r),Af.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Tf.distanceTo(Af);e.setAttribute("lineDistance",new Dt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class J_ extends ln{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Q_ extends qo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rf=new Bt,Xd=new oc,Oc=new cs,zc=new S;class ev extends Sn{constructor(e=new zt,t=new Q_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oc.copy(i.boundingSphere),Oc.applyMatrix4(r),Oc.radius+=s,e.ray.intersectsSphere(Oc)===!1)return;Rf.copy(r).invert(),Xd.copy(e.ray).applyMatrix4(Rf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=h,_=f;m<_;m++){const g=l.getX(m);zc.fromBufferAttribute(d,g),Cf(zc,g,c,r,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=h,_=f;m<_;m++)zc.fromBufferAttribute(d,m),Cf(zc,m,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Cf(n,e,t,i,r,s,o){const a=Xd.distanceSqToPoint(n);if(a<t){const c=new S;Xd.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class bm extends mi{constructor(e,t,i=Os,r,s,o,a=Oi,c=Oi,l,u=Ua,d=1){if(u!==Ua&&u!==ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Oa extends zt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new S,u=new Be;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=i+d/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(a,3)),this.setAttribute("uv",new Dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ii extends zt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],f=[];let m=0;const _=[],g=i/2;let p=0;w(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Dt(d,3)),this.setAttribute("normal",new Dt(h,3)),this.setAttribute("uv",new Dt(f,2));function w(){const v=new S,L=new S;let D=0;const R=(t-e)/i;for(let N=0;N<=s;N++){const b=[],M=N/s,I=M*(t-e)+e;for(let k=0;k<=r;k++){const O=k/r,G=O*c+a,$=Math.sin(G),j=Math.cos(G);L.x=I*$,L.y=-M*i+g,L.z=I*j,d.push(L.x,L.y,L.z),v.set($,R,j).normalize(),h.push(v.x,v.y,v.z),f.push(O,1-M),b.push(m++)}_.push(b)}for(let N=0;N<r;N++)for(let b=0;b<s;b++){const M=_[b][N],I=_[b+1][N],k=_[b+1][N+1],O=_[b][N+1];(e>0||b!==0)&&(u.push(M,I,O),D+=3),(t>0||b!==s-1)&&(u.push(I,k,O),D+=3)}l.addGroup(p,D,0),p+=D}function y(v){const L=m,D=new Be,R=new S;let N=0;const b=v===!0?e:t,M=v===!0?1:-1;for(let k=1;k<=r;k++)d.push(0,g*M,0),h.push(0,M,0),f.push(.5,.5),m++;const I=m;for(let k=0;k<=r;k++){const G=k/r*c+a,$=Math.cos(G),j=Math.sin(G);R.x=b*j,R.y=g*M,R.z=b*$,d.push(R.x,R.y,R.z),h.push(0,M,0),D.x=$*.5+.5,D.y=j*.5*M+.5,f.push(D.x,D.y),m++}for(let k=0;k<r;k++){const O=L+k,G=I+k;v===!0?u.push(G,G+1,O):u.push(G+1,G,O),N+=3}l.addGroup(p,N,v===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yh extends zt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new Dt(s,3)),this.setAttribute("normal",new Dt(s.slice(),3)),this.setAttribute("uv",new Dt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const y=new S,v=new S,L=new S;for(let D=0;D<t.length;D+=3)f(t[D+0],y),f(t[D+1],v),f(t[D+2],L),c(y,v,L,w)}function c(w,y,v,L){const D=L+1,R=[];for(let N=0;N<=D;N++){R[N]=[];const b=w.clone().lerp(v,N/D),M=y.clone().lerp(v,N/D),I=D-N;for(let k=0;k<=I;k++)k===0&&N===D?R[N][k]=b:R[N][k]=b.clone().lerp(M,k/I)}for(let N=0;N<D;N++)for(let b=0;b<2*(D-N)-1;b++){const M=Math.floor(b/2);b%2===0?(h(R[N][M+1]),h(R[N+1][M]),h(R[N][M])):(h(R[N][M+1]),h(R[N+1][M+1]),h(R[N+1][M]))}}function l(w){const y=new S;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(w),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function u(){const w=new S;for(let y=0;y<s.length;y+=3){w.x=s[y+0],w.y=s[y+1],w.z=s[y+2];const v=g(w)/2/Math.PI+.5,L=p(w)/Math.PI+.5;o.push(v,1-L)}m(),d()}function d(){for(let w=0;w<o.length;w+=6){const y=o[w+0],v=o[w+2],L=o[w+4],D=Math.max(y,v,L),R=Math.min(y,v,L);D>.9&&R<.1&&(y<.2&&(o[w+0]+=1),v<.2&&(o[w+2]+=1),L<.2&&(o[w+4]+=1))}}function h(w){s.push(w.x,w.y,w.z)}function f(w,y){const v=w*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function m(){const w=new S,y=new S,v=new S,L=new S,D=new Be,R=new Be,N=new Be;for(let b=0,M=0;b<s.length;b+=9,M+=6){w.set(s[b+0],s[b+1],s[b+2]),y.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),D.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),N.set(o[M+4],o[M+5]),L.copy(w).add(y).add(v).divideScalar(3);const I=g(L);_(D,M+0,w,I),_(R,M+2,y,I),_(N,M+4,v,I)}}function _(w,y,v,L){L<0&&w.x===1&&(o[y]=w.x-1),v.x===0&&v.z===0&&(o[y]=L/2/Math.PI+.5)}function g(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yh(e.vertices,e.indices,e.radius,e.details)}}class br{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,f=(o-u)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new Be:new S);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new S,r=[],s=[],o=[],a=new S,c=new Bt;for(let f=0;f<=e;f++){const m=f/e;r[f]=this.getTangentAt(m,new S)}s[0]=new S,o[0]=new S;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Ct(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Ct(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(r[m],f*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sh extends br{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Be){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class tv extends Sh{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function bh(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,d){let h=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,r(o,a,h,f)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Bc=new S,Tu=new bh,Au=new bh,Ru=new bh;class Mh extends br{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new S){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Bc.subVectors(r[0],r[1]).add(r[0]),l=Bc);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Bc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Bc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Tu.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,m,_,g),Au.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,m,_,g),Ru.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(Tu.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Au.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Ru.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(Tu.calc(c),Au.calc(c),Ru.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new S().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Pf(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function nv(n,e){const t=1-n;return t*t*e}function iv(n,e){return 2*(1-n)*n*e}function rv(n,e){return n*n*e}function Ta(n,e,t,i){return nv(n,e)+iv(n,t)+rv(n,i)}function sv(n,e){const t=1-n;return t*t*t*e}function ov(n,e){const t=1-n;return 3*t*t*n*e}function av(n,e){return 3*(1-n)*n*n*e}function cv(n,e){return n*n*n*e}function Aa(n,e,t,i,r){return sv(n,e)+ov(n,t)+av(n,i)+cv(n,r)}class Mm extends br{constructor(e=new Be,t=new Be,i=new Be,r=new Be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Be){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Aa(e,r.x,s.x,o.x,a.x),Aa(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lv extends br{constructor(e=new S,t=new S,i=new S,r=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new S){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Aa(e,r.x,s.x,o.x,a.x),Aa(e,r.y,s.y,o.y,a.y),Aa(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wm extends br{constructor(e=new Be,t=new Be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Be){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uv extends br{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Em extends br{constructor(e=new Be,t=new Be,i=new Be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Be){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ta(e,r.x,s.x,o.x),Ta(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dv extends br{constructor(e=new S,t=new S,i=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new S){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ta(e,r.x,s.x,o.x),Ta(e,r.y,s.y,o.y),Ta(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tm extends br{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Be){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Pf(a,c.x,l.x,u.x,d.x),Pf(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Be().fromArray(r))}return this}}var Df=Object.freeze({__proto__:null,ArcCurve:tv,CatmullRomCurve3:Mh,CubicBezierCurve:Mm,CubicBezierCurve3:lv,EllipseCurve:Sh,LineCurve:wm,LineCurve3:uv,QuadraticBezierCurve:Em,QuadraticBezierCurve3:dv,SplineCurve:Tm});class hv extends br{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Df[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Df[r.type]().fromJSON(r))}return this}}class Lf extends hv{constructor(e){super(),this.type="Path",this.currentPoint=new Be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new wm(this.currentPoint.clone(),new Be(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Em(this.currentPoint.clone(),new Be(e,t),new Be(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Mm(this.currentPoint.clone(),new Be(e,t),new Be(i,r),new Be(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Tm(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new Sh(e,t,i,r,s,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Am extends Lf{constructor(e){super(e),this.uuid=qs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Lf().fromJSON(r))}return this}}function fv(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Rm(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=vv(n,e,s,t)),n.length>80*t){a=1/0,c=1/0;let u=-1/0,d=-1/0;for(let h=t;h<r;h+=t){const f=n[h],m=n[h+1];f<a&&(a=f),m<c&&(c=m),f>u&&(u=f),m>d&&(d=m)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return za(s,o,t,a,c,l,0),o}function Rm(n,e,t,i,r){let s;if(r===Cv(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=If(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=If(o/i|0,n[o],n[o+1],s);return s&&Oo(s,s.next)&&(Ha(s),s=s.next),s}function Bs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Oo(t,t.next)||vn(t.prev,t,t.next)===0)){if(Ha(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function za(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Mv(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?mv(n,i,r,s):pv(n)){e.push(c.i,n.i,l.i),Ha(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=gv(Bs(n),e),za(n,e,t,i,r,s,2)):o===2&&_v(n,e,t,i,r,s):za(Bs(n),e,t,i,r,s,1);break}}}function pv(n){const e=n.prev,t=n,i=n.next;if(vn(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(r,s,o),d=Math.min(a,c,l),h=Math.max(r,s,o),f=Math.max(a,c,l);let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=f&&va(r,a,s,c,o,l,m.x,m.y)&&vn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function mv(n,e,t,i){const r=n.prev,s=n,o=n.next;if(vn(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,d=s.y,h=o.y,f=Math.min(a,c,l),m=Math.min(u,d,h),_=Math.max(a,c,l),g=Math.max(u,d,h),p=qd(f,m,e,t,i),w=qd(_,g,e,t,i);let y=n.prevZ,v=n.nextZ;for(;y&&y.z>=p&&v&&v.z<=w;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&va(a,u,c,d,l,h,y.x,y.y)&&vn(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&va(a,u,c,d,l,h,v.x,v.y)&&vn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&va(a,u,c,d,l,h,y.x,y.y)&&vn(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=w;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&va(a,u,c,d,l,h,v.x,v.y)&&vn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function gv(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Oo(i,r)&&Pm(i,t,t.next,r)&&Ba(i,r)&&Ba(r,i)&&(e.push(i.i,t.i,r.i),Ha(t),Ha(t.next),t=n=r),t=t.next}while(t!==n);return Bs(t)}function _v(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Tv(o,a)){let c=Dm(o,a);o=Bs(o,o.next),c=Bs(c,c.next),za(o,e,t,i,r,s,0),za(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function vv(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=Rm(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(Ev(l))}r.sort(xv);for(let s=0;s<r.length;s++)t=yv(r[s],t);return t}function xv(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function yv(n,e){const t=Sv(n,e);if(!t)return e;const i=Dm(t,n);return Bs(i,i.next),Bs(t,t.next)}function Sv(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(Oo(n,t))return t;do{if(Oo(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s&&(s=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Cm(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const d=Math.abs(r-t.y)/(i-t.x);Ba(t,n)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&bv(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function bv(n,e){return vn(n.prev,n,e.prev)<0&&vn(e.next,n,n.next)<0}function Mv(n,e,t,i){let r=n;do r.z===0&&(r.z=qd(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,wv(r)}function wv(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function qd(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Ev(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Cm(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function va(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&Cm(n,e,t,i,r,s,o,a)}function Tv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Av(n,e)&&(Ba(n,e)&&Ba(e,n)&&Rv(n,e)&&(vn(n.prev,n,e.prev)||vn(n,e.prev,e))||Oo(n,e)&&vn(n.prev,n,n.next)>0&&vn(e.prev,e,e.next)>0)}function vn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Oo(n,e){return n.x===e.x&&n.y===e.y}function Pm(n,e,t,i){const r=Vc(vn(n,e,t)),s=Vc(vn(n,e,i)),o=Vc(vn(t,i,n)),a=Vc(vn(t,i,e));return!!(r!==s&&o!==a||r===0&&Hc(n,t,e)||s===0&&Hc(n,i,e)||o===0&&Hc(t,n,i)||a===0&&Hc(t,e,i))}function Hc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Vc(n){return n>0?1:n<0?-1:0}function Av(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Pm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ba(n,e){return vn(n.prev,n,n.next)<0?vn(n,e,n.next)>=0&&vn(n,n.prev,e)>=0:vn(n,e,n.prev)<0||vn(n,n.next,e)<0}function Rv(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Dm(n,e){const t=$d(n.i,n.x,n.y),i=$d(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function If(n,e,t,i){const r=$d(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ha(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function $d(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cv(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Pv{static triangulate(e,t,i=2){return fv(e,t,i)}}class Ra{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ra.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Nf(e),Uf(i,e);let o=e.length;t.forEach(Nf);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,Uf(i,t[c]);const a=Pv.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Nf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Uf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ds extends yh{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ds(e.radius,e.detail)}}class rs extends zt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const w=p*h-o;for(let y=0;y<l;y++){const v=y*d-s;m.push(v,-w,0),_.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const y=w+l*p,v=w+l*(p+1),L=w+1+l*(p+1),D=w+1+l*p;f.push(y,v,D),f.push(v,L,D)}this.setIndex(f),this.setAttribute("position",new Dt(m,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vl extends zt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let d=e;const h=(t-e)/r,f=new S,m=new Be;for(let _=0;_<=r;_++){for(let g=0;g<=i;g++){const p=s+g/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}d+=h}for(let _=0;_<r;_++){const g=_*(i+1);for(let p=0;p<i;p++){const w=p+g,y=w,v=w+i+1,L=w+i+2,D=w+1;a.push(y,v,D),a.push(v,L,D)}}this.setIndex(a),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(l,3)),this.setAttribute("uv",new Dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wh extends zt{constructor(e=new Am([new Be(0,.5),new Be(-.5,-.5),new Be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Dt(r,3)),this.setAttribute("normal",new Dt(s,3)),this.setAttribute("uv",new Dt(o,2));function l(u){const d=r.length/3,h=u.extractPoints(t);let f=h.shape;const m=h.holes;Ra.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const w=m[g];Ra.isClockWise(w)===!0&&(m[g]=w.reverse())}const _=Ra.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const w=m[g];f=f.concat(w)}for(let g=0,p=f.length;g<p;g++){const w=f[g];r.push(w.x,w.y,0),s.push(0,0,1),o.push(w.x,w.y)}for(let g=0,p=_.length;g<p;g++){const w=_[g],y=w[0]+d,v=w[1]+d,L=w[2]+d;i.push(y,v,L),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Dv(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new wh(i,e.curveSegments)}}function Dv(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class ns extends zt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new S,h=new S,f=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const w=[],y=p/i;let v=0;p===0&&o===0?v=.5/t:p===i&&c===Math.PI&&(v=-.5/t);for(let L=0;L<=t;L++){const D=L/t;d.x=-e*Math.cos(r+D*s)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(r+D*s)*Math.sin(o+y*a),m.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),g.push(D+v,1-y),w.push(l++)}u.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const y=u[p][w+1],v=u[p][w],L=u[p+1][w],D=u[p+1][w+1];(p!==0||o>0)&&f.push(y,v,D),(p!==i-1||c<Math.PI)&&f.push(v,L,D)}this.setIndex(f),this.setAttribute("position",new Dt(m,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ts extends zt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new S,d=new S,h=new S;for(let f=0;f<=i;f++)for(let m=0;m<=r;m++){const _=m/r*s,g=f/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(_),d.y=(e+t*Math.cos(g))*Math.sin(_),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(m/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=r;m++){const _=(r+1)*f+m-1,g=(r+1)*(f-1)+m-1,p=(r+1)*(f-1)+m,w=(r+1)*f+m;o.push(_,g,w),o.push(g,p,w)}this.setIndex(o),this.setAttribute("position",new Dt(a,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Lv extends qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=X0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Iv extends qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class kf extends Ei{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Nv extends Sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Cu=new Bt,Ff=new S,Of=new S;class Uv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=yr,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xh,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ff.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ff),Of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Of),t.updateMatrixWorld(),Cu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zf=new Bt,ca=new S,Pu=new S;class kv extends Uv{constructor(){super(new Ni(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ca.setFromMatrixPosition(e.matrixWorld),i.position.copy(ca),Pu.copy(i.position),Pu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Pu),i.updateMatrixWorld(),r.makeTranslation(-ca.x,-ca.y,-ca.z),zf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zf,i.coordinateSystem,i.reversedDepth)}}class Fv extends Nv{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new kv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ov extends ym{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zv extends Ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Bf=new Bt;class Lm{constructor(e,t,i=0,r=1/0){this.ray=new oc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new vh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bf),this}intersectObject(e,t=!0,i=[]){return Yd(e,this,i,t),i.sort(Hf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Yd(e[r],this,i,t);return i.sort(Hf),i}}function Hf(n,e){return n.distance-e.distance}function Yd(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Yd(s[o],e,t,!0)}}class Vf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Im extends Xs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Gf(n,e,t,i){const r=Bv(i);switch(t){case lm:return n*e;case hh:return n*e/r.components*r.byteLength;case fh:return n*e/r.components*r.byteLength;case dm:return n*e*2/r.components*r.byteLength;case ph:return n*e*2/r.components*r.byteLength;case um:return n*e*3/r.components*r.byteLength;case or:return n*e*4/r.components*r.byteLength;case mh:return n*e*4/r.components*r.byteLength;case rl:case sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ol:case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xd:case Sd:return Math.max(n,16)*Math.max(e,8)/4;case vd:case yd:return Math.max(n,8)*Math.max(e,8)/2;case bd:case Md:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Id:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Od:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case cl:case zd:case Bd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case hm:case Hd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Vd:case Gd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bv(n){switch(n){case yr:case om:return{byteLength:1,components:1};case Ia:case am:case sc:return{byteLength:2,components:1};case uh:case dh:return{byteLength:2,components:4};case Os:case lh:case vr:return{byteLength:4,components:1};case cm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ch);function Nm(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Hv(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){const m=d[h],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){const _=d[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gv=`#ifdef USE_ALPHAHASH
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
#endif`,Wv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$v=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yv=`#ifdef USE_AOMAP
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
#endif`,jv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zv=`#ifdef USE_BATCHING
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
#endif`,Kv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ex=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tx=`#ifdef USE_IRIDESCENCE
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
#endif`,nx=`#ifdef USE_BUMPMAP
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
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dx=`#define PI 3.141592653589793
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
} // validated`,hx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fx=`vec3 transformedNormal = objectNormal;
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
#endif`,px=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_x=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vx="gl_FragColor = linearToOutputTexel( gl_FragColor );",xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yx=`#ifdef USE_ENVMAP
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
#endif`,Sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wx=`#ifdef USE_ENVMAP
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
#endif`,Ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cx=`#ifdef USE_GRADIENTMAP
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
}`,Px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ix=`uniform bool receiveShadow;
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
#endif`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zx=`PhysicalMaterial material;
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
#endif`,Bx=`struct PhysicalMaterial {
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
}`,Hx=`
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
#endif`,Vx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kx=`#if defined( USE_POINTS_UV )
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
#endif`,Jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ey=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ty=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ny=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iy=`#ifdef USE_MORPHTARGETS
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
#endif`,ry=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uy=`#ifdef USE_NORMALMAP
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
#endif`,dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,my=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_y=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,by=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,My=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ey=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ty=`float getShadowMask() {
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
}`,Ay=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ry=`#ifdef USE_SKINNING
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
#endif`,Cy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Py=`#ifdef USE_SKINNING
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
#endif`,Dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ly=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ny=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uy=`#ifdef USE_TRANSMISSION
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
#endif`,ky=`#ifdef USE_TRANSMISSION
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
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,By=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vy=`uniform sampler2D t2D;
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
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$y=`#include <common>
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
}`,Yy=`#if DEPTH_PACKING == 3200
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
}`,jy=`#define DISTANCE
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
}`,Zy=`#define DISTANCE
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
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`uniform float scale;
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
}`,eS=`uniform vec3 diffuse;
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
}`,tS=`#include <common>
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
}`,nS=`uniform vec3 diffuse;
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
}`,iS=`#define LAMBERT
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
}`,rS=`#define LAMBERT
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
}`,sS=`#define MATCAP
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
}`,oS=`#define MATCAP
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
}`,aS=`#define NORMAL
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
}`,cS=`#define NORMAL
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
}`,lS=`#define PHONG
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
}`,uS=`#define PHONG
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
}`,dS=`#define STANDARD
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
}`,hS=`#define STANDARD
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
}`,fS=`#define TOON
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
}`,pS=`#define TOON
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
}`,mS=`uniform float size;
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
}`,gS=`uniform vec3 diffuse;
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
}`,_S=`#include <common>
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
}`,vS=`uniform vec3 color;
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
}`,xS=`uniform float rotation;
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
}`,yS=`uniform vec3 diffuse;
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
}`,Rt={alphahash_fragment:Vv,alphahash_pars_fragment:Gv,alphamap_fragment:Wv,alphamap_pars_fragment:Xv,alphatest_fragment:qv,alphatest_pars_fragment:$v,aomap_fragment:Yv,aomap_pars_fragment:jv,batching_pars_vertex:Zv,batching_vertex:Kv,begin_vertex:Jv,beginnormal_vertex:Qv,bsdfs:ex,iridescence_fragment:tx,bumpmap_pars_fragment:nx,clipping_planes_fragment:ix,clipping_planes_pars_fragment:rx,clipping_planes_pars_vertex:sx,clipping_planes_vertex:ox,color_fragment:ax,color_pars_fragment:cx,color_pars_vertex:lx,color_vertex:ux,common:dx,cube_uv_reflection_fragment:hx,defaultnormal_vertex:fx,displacementmap_pars_vertex:px,displacementmap_vertex:mx,emissivemap_fragment:gx,emissivemap_pars_fragment:_x,colorspace_fragment:vx,colorspace_pars_fragment:xx,envmap_fragment:yx,envmap_common_pars_fragment:Sx,envmap_pars_fragment:bx,envmap_pars_vertex:Mx,envmap_physical_pars_fragment:Nx,envmap_vertex:wx,fog_vertex:Ex,fog_pars_vertex:Tx,fog_fragment:Ax,fog_pars_fragment:Rx,gradientmap_pars_fragment:Cx,lightmap_pars_fragment:Px,lights_lambert_fragment:Dx,lights_lambert_pars_fragment:Lx,lights_pars_begin:Ix,lights_toon_fragment:Ux,lights_toon_pars_fragment:kx,lights_phong_fragment:Fx,lights_phong_pars_fragment:Ox,lights_physical_fragment:zx,lights_physical_pars_fragment:Bx,lights_fragment_begin:Hx,lights_fragment_maps:Vx,lights_fragment_end:Gx,logdepthbuf_fragment:Wx,logdepthbuf_pars_fragment:Xx,logdepthbuf_pars_vertex:qx,logdepthbuf_vertex:$x,map_fragment:Yx,map_pars_fragment:jx,map_particle_fragment:Zx,map_particle_pars_fragment:Kx,metalnessmap_fragment:Jx,metalnessmap_pars_fragment:Qx,morphinstance_vertex:ey,morphcolor_vertex:ty,morphnormal_vertex:ny,morphtarget_pars_vertex:iy,morphtarget_vertex:ry,normal_fragment_begin:sy,normal_fragment_maps:oy,normal_pars_fragment:ay,normal_pars_vertex:cy,normal_vertex:ly,normalmap_pars_fragment:uy,clearcoat_normal_fragment_begin:dy,clearcoat_normal_fragment_maps:hy,clearcoat_pars_fragment:fy,iridescence_pars_fragment:py,opaque_fragment:my,packing:gy,premultiplied_alpha_fragment:_y,project_vertex:vy,dithering_fragment:xy,dithering_pars_fragment:yy,roughnessmap_fragment:Sy,roughnessmap_pars_fragment:by,shadowmap_pars_fragment:My,shadowmap_pars_vertex:wy,shadowmap_vertex:Ey,shadowmask_pars_fragment:Ty,skinbase_vertex:Ay,skinning_pars_vertex:Ry,skinning_vertex:Cy,skinnormal_vertex:Py,specularmap_fragment:Dy,specularmap_pars_fragment:Ly,tonemapping_fragment:Iy,tonemapping_pars_fragment:Ny,transmission_fragment:Uy,transmission_pars_fragment:ky,uv_pars_fragment:Fy,uv_pars_vertex:Oy,uv_vertex:zy,worldpos_vertex:By,background_vert:Hy,background_frag:Vy,backgroundCube_vert:Gy,backgroundCube_frag:Wy,cube_vert:Xy,cube_frag:qy,depth_vert:$y,depth_frag:Yy,distanceRGBA_vert:jy,distanceRGBA_frag:Zy,equirect_vert:Ky,equirect_frag:Jy,linedashed_vert:Qy,linedashed_frag:eS,meshbasic_vert:tS,meshbasic_frag:nS,meshlambert_vert:iS,meshlambert_frag:rS,meshmatcap_vert:sS,meshmatcap_frag:oS,meshnormal_vert:aS,meshnormal_frag:cS,meshphong_vert:lS,meshphong_frag:uS,meshphysical_vert:dS,meshphysical_frag:hS,meshtoon_vert:fS,meshtoon_frag:pS,points_vert:mS,points_frag:gS,shadow_vert:_S,shadow_frag:vS,sprite_vert:xS,sprite_frag:yS},We={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},gr={basic:{uniforms:hi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:hi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new kt(0)}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:hi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:hi([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:hi([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new kt(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:hi([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:hi([We.points,We.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:hi([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:hi([We.common,We.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:hi([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:hi([We.sprite,We.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distanceRGBA:{uniforms:hi([We.common,We.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distanceRGBA_vert,fragmentShader:Rt.distanceRGBA_frag},shadow:{uniforms:hi([We.lights,We.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};gr.physical={uniforms:hi([gr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const Gc={r:0,b:0,g:0},vs=new In,SS=new Bt;function bS(n,e,t,i,r,s,o){const a=new kt(0);let c=s===!0?0:1,l,u,d=null,h=0,f=null;function m(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const L=m(y);L===null?p(a,c):L&&L.isColor&&(p(L,1),v=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(y,v){const L=m(v);L&&(L.isCubeTexture||L.mapping===Hl)?(u===void 0&&(u=new we(new Tn(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:Fo(gr.backgroundCube.uniforms),vertexShader:gr.backgroundCube.vertexShader,fragmentShader:gr.backgroundCube.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),vs.copy(v.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(SS.makeRotationFromEuler(vs)),u.material.toneMapped=Xt.getTransfer(L.colorSpace)!==Jt,(d!==L||h!==L.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=L,h=L.version,f=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new we(new rs(2,2),new kr({name:"BackgroundMaterial",uniforms:Fo(gr.background.uniforms),vertexShader:gr.background.vertexShader,fragmentShader:gr.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(L.colorSpace)!==Jt,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||h!==L.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=L,h=L.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(Gc,xm(n)),i.buffers.color.setClear(Gc.r,Gc.g,Gc.b,v,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:g,dispose:w}}function MS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,I,k,O,G){let $=!1;const j=d(O,k,I);s!==j&&(s=j,l(s.object)),$=f(M,O,k,G),$&&m(M,O,k,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,v(M,I,k,O),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,I,k){const O=k.wireframe===!0;let G=i[M.id];G===void 0&&(G={},i[M.id]=G);let $=G[I.id];$===void 0&&($={},G[I.id]=$);let j=$[O];return j===void 0&&(j=h(c()),$[O]=j),j}function h(M){const I=[],k=[],O=[];for(let G=0;G<t;G++)I[G]=0,k[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,I,k,O){const G=s.attributes,$=I.attributes;let j=0;const re=k.getAttributes();for(const q in re)if(re[q].location>=0){const Te=G[q];let ze=$[q];if(ze===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ze=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ze=M.instanceColor)),Te===void 0||Te.attribute!==ze||ze&&Te.data!==ze.data)return!0;j++}return s.attributesNum!==j||s.index!==O}function m(M,I,k,O){const G={},$=I.attributes;let j=0;const re=k.getAttributes();for(const q in re)if(re[q].location>=0){let Te=$[q];Te===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor));const ze={};ze.attribute=Te,Te&&Te.data&&(ze.data=Te.data),G[q]=ze,j++}s.attributes=G,s.attributesNum=j,s.index=O}function _(){const M=s.newAttributes;for(let I=0,k=M.length;I<k;I++)M[I]=0}function g(M){p(M,0)}function p(M,I){const k=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;k[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),G[M]!==I&&(n.vertexAttribDivisor(M,I),G[M]=I)}function w(){const M=s.newAttributes,I=s.enabledAttributes;for(let k=0,O=I.length;k<O;k++)I[k]!==M[k]&&(n.disableVertexAttribArray(k),I[k]=0)}function y(M,I,k,O,G,$,j){j===!0?n.vertexAttribIPointer(M,I,k,G,$):n.vertexAttribPointer(M,I,k,O,G,$)}function v(M,I,k,O){_();const G=O.attributes,$=k.getAttributes(),j=I.defaultAttributeValues;for(const re in $){const q=$[re];if(q.location>=0){let ge=G[re];if(ge===void 0&&(re==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),re==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ge!==void 0){const Te=ge.normalized,ze=ge.itemSize,He=e.get(ge);if(He===void 0)continue;const at=He.buffer,yt=He.type,te=He.bytesPerElement,Ae=yt===n.INT||yt===n.UNSIGNED_INT||ge.gpuType===lh;if(ge.isInterleavedBufferAttribute){const oe=ge.data,Ke=oe.stride,ne=ge.offset;if(oe.isInstancedInterleavedBuffer){for(let ue=0;ue<q.locationSize;ue++)p(q.location+ue,oe.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ue=0;ue<q.locationSize;ue++)g(q.location+ue);n.bindBuffer(n.ARRAY_BUFFER,at);for(let ue=0;ue<q.locationSize;ue++)y(q.location+ue,ze/q.locationSize,yt,Te,Ke*te,(ne+ze/q.locationSize*ue)*te,Ae)}else{if(ge.isInstancedBufferAttribute){for(let oe=0;oe<q.locationSize;oe++)p(q.location+oe,ge.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let oe=0;oe<q.locationSize;oe++)g(q.location+oe);n.bindBuffer(n.ARRAY_BUFFER,at);for(let oe=0;oe<q.locationSize;oe++)y(q.location+oe,ze/q.locationSize,yt,Te,ze*te,ze/q.locationSize*oe*te,Ae)}}else if(j!==void 0){const Te=j[re];if(Te!==void 0)switch(Te.length){case 2:n.vertexAttrib2fv(q.location,Te);break;case 3:n.vertexAttrib3fv(q.location,Te);break;case 4:n.vertexAttrib4fv(q.location,Te);break;default:n.vertexAttrib1fv(q.location,Te)}}}}w()}function L(){N();for(const M in i){const I=i[M];for(const k in I){const O=I[k];for(const G in O)u(O[G].object),delete O[G];delete I[k]}delete i[M]}}function D(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const k in I){const O=I[k];for(const G in O)u(O[G].object),delete O[G];delete I[k]}delete i[M.id]}function R(M){for(const I in i){const k=i[I];if(k[M.id]===void 0)continue;const O=k[M.id];for(const G in O)u(O[G].object),delete O[G];delete k[M.id]}}function N(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:w}}function wS(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let f=0;for(let m=0;m<d;m++)f+=u[m];t.update(f,i,1)}function c(l,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],u[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_]*h[_];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ES(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==or&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const N=R===sc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==yr&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==vr&&!N)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:L,maxSamples:D}}function TS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new jr,a=new wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!r||m===null||m.length===0||s&&!g)s?u(null):l();else{const w=s?0:i,y=w*4;let v=p.clippingState||null;c.value=v,v=u(m,h,y,f);for(let L=0;L!==y;++L)v[L]=t[L];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)o.copy(d[y]).applyMatrix4(w,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function AS(n){let e=new WeakMap;function t(o,a){return a===pd?o.mapping=No:a===md&&(o.mapping=Uo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===pd||a===md)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new V_(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const So=4,Wf=[.125,.215,.35,.446,.526,.582],As=20,Du=new Ov,Xf=new kt;let Lu=null,Iu=0,Nu=0,Uu=!1;const bs=(1+Math.sqrt(5))/2,go=1/bs,qf=[new S(-bs,go,0),new S(bs,go,0),new S(-go,0,bs),new S(go,0,bs),new S(0,bs,-go),new S(0,bs,go),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],RS=new S;class $f{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=RS}=s;Lu=this._renderer.getRenderTarget(),Iu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lu,Iu,Nu),this._renderer.xr.enabled=Uu,e.scissorTest=!1,Wc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===No||e.mapping===Uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lu=this._renderer.getRenderTarget(),Iu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_r,minFilter:_r,generateMipmaps:!1,type:sc,format:or,colorSpace:ko,depthBuffer:!1},r=Yf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CS(s)),this._blurMaterial=PS(s,e,t)}return r}_compileMaterial(e){const t=new we(this._lodPlanes[0],e);this._renderer.compile(t,Du)}_sceneToCubeUV(e,t,i,r,s){const c=new Ni(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Xf),d.toneMapping=ts,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const _=new yn({name:"PMREM.Background",side:wi,depthWrite:!1,depthTest:!1}),g=new we(new Tn,_);let p=!1;const w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,p=!0):(_.color.copy(Xf),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const L=this._cubeSize;Wc(r,v*L,y>2?L:0,L,L),d.setRenderTarget(r),p&&d.render(g,c),d.render(e,c)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===No||e.mapping===Uo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new we(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Wc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Du)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qf[(r-s-1)%qf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new we(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*As-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):As;g>As&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${As}`);const p=[];let w=0;for(let R=0;R<As;++R){const N=R/_,b=Math.exp(-N*N/2);p.push(b),R===0?w+=b:R<g&&(w+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/w;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=m,h.mipInt.value=y-i;const v=this._sizeLods[r],L=3*v*(r>y-So?r-y+So:0),D=4*(this._cubeSize-v);Wc(t,L,D,3*v,2*v),c.setRenderTarget(t),c.render(d,Du)}}function CS(n){const e=[],t=[],i=[];let r=n;const s=n-So+1+Wf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-So?c=Wf[o-n+So-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,m=6,_=3,g=2,p=1,w=new Float32Array(_*m*f),y=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let D=0;D<f;D++){const R=D%3*2/3-1,N=D>2?0:-1,b=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];w.set(b,_*m*D),y.set(h,g*m*D);const M=[D,D,D,D,D,D];v.set(M,p*m*D)}const L=new zt;L.setAttribute("position",new gi(w,_)),L.setAttribute("uv",new gi(y,g)),L.setAttribute("faceIndex",new gi(v,p)),e.push(L),r>So&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Yf(n,e,t){const i=new zs(n,e,t);return i.texture.mapping=Hl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function PS(n,e,t){const i=new Float32Array(As),r=new S(0,1,0);return new kr({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function jf(){return new kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function Zf(){return new kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Eh(){return`

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
	`}function DS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===pd||c===md,u=c===No||c===Uo;if(l||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new $f(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new $f(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function LS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&To("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function IS(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,m=d.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let y=0,v=w.length;y<v;y+=3){const L=w[y+0],D=w[y+1],R=w[y+2];h.push(L,D,D,R,R,L)}}else if(m!==void 0){const w=m.array;_=m.version;for(let y=0,v=w.length/3-1;y<v;y+=3){const L=y+0,D=y+1,R=y+2;h.push(L,D,D,R,R,L)}}else return;const g=new(pm(h)?vm:_m)(h,1);g.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,g)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function NS(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function l(h,f,m){m!==0&&(n.drawElementsInstanced(i,f,s,h*o,m),t.update(f,i,m))}function u(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,i,1)}function d(h,f,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,_,0,m);let p=0;for(let w=0;w<m;w++)p+=f[w]*_[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function US(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function kS(n,e,t){const i=new WeakMap,r=new Ot;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let b=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let v=a.attributes.position.count*y,L=1;v>e.maxTextureSize&&(L=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const D=new Float32Array(v*L*4*d),R=new mm(D,v,L,d);R.type=vr,R.needsUpdate=!0;const N=y*4;for(let M=0;M<d;M++){const I=g[M],k=p[M],O=w[M],G=v*L*4*M;for(let $=0;$<I.count;$++){const j=$*N;f===!0&&(r.fromBufferAttribute(I,$),D[G+j+0]=r.x,D[G+j+1]=r.y,D[G+j+2]=r.z,D[G+j+3]=0),m===!0&&(r.fromBufferAttribute(k,$),D[G+j+4]=r.x,D[G+j+5]=r.y,D[G+j+6]=r.z,D[G+j+7]=0),_===!0&&(r.fromBufferAttribute(O,$),D[G+j+8]=r.x,D[G+j+9]=r.y,D[G+j+10]=r.z,D[G+j+11]=O.itemSize===4?r.w:1)}}h={count:d,texture:R,size:new Be(v,L)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function FS(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Um=new mi,Kf=new bm(1,1),km=new mm,Fm=new E_,Om=new Sm,Jf=[],Qf=[],ep=new Float32Array(16),tp=new Float32Array(9),np=new Float32Array(4);function $o(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Jf[r];if(s===void 0&&(s=new Float32Array(r),Jf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function On(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gl(n,e){let t=Qf[e];t===void 0&&(t=new Int32Array(e),Qf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function OS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;n.uniform2fv(this.addr,e),zn(t,e)}}function BS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(On(t,e))return;n.uniform3fv(this.addr,e),zn(t,e)}}function HS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;n.uniform4fv(this.addr,e),zn(t,e)}}function VS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(On(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zn(t,e)}else{if(On(t,i))return;np.set(i),n.uniformMatrix2fv(this.addr,!1,np),zn(t,i)}}function GS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(On(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zn(t,e)}else{if(On(t,i))return;tp.set(i),n.uniformMatrix3fv(this.addr,!1,tp),zn(t,i)}}function WS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(On(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zn(t,e)}else{if(On(t,i))return;ep.set(i),n.uniformMatrix4fv(this.addr,!1,ep),zn(t,i)}}function XS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;n.uniform2iv(this.addr,e),zn(t,e)}}function $S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;n.uniform3iv(this.addr,e),zn(t,e)}}function YS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;n.uniform4iv(this.addr,e),zn(t,e)}}function jS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ZS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;n.uniform2uiv(this.addr,e),zn(t,e)}}function KS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;n.uniform3uiv(this.addr,e),zn(t,e)}}function JS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;n.uniform4uiv(this.addr,e),zn(t,e)}}function QS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Kf.compareFunction=fm,s=Kf):s=Um,t.setTexture2D(e||s,r)}function eb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Fm,r)}function tb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Om,r)}function nb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||km,r)}function ib(n){switch(n){case 5126:return OS;case 35664:return zS;case 35665:return BS;case 35666:return HS;case 35674:return VS;case 35675:return GS;case 35676:return WS;case 5124:case 35670:return XS;case 35667:case 35671:return qS;case 35668:case 35672:return $S;case 35669:case 35673:return YS;case 5125:return jS;case 36294:return ZS;case 36295:return KS;case 36296:return JS;case 35678:case 36198:case 36298:case 36306:case 35682:return QS;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return nb}}function rb(n,e){n.uniform1fv(this.addr,e)}function sb(n,e){const t=$o(e,this.size,2);n.uniform2fv(this.addr,t)}function ob(n,e){const t=$o(e,this.size,3);n.uniform3fv(this.addr,t)}function ab(n,e){const t=$o(e,this.size,4);n.uniform4fv(this.addr,t)}function cb(n,e){const t=$o(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lb(n,e){const t=$o(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ub(n,e){const t=$o(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function db(n,e){n.uniform1iv(this.addr,e)}function hb(n,e){n.uniform2iv(this.addr,e)}function fb(n,e){n.uniform3iv(this.addr,e)}function pb(n,e){n.uniform4iv(this.addr,e)}function mb(n,e){n.uniform1uiv(this.addr,e)}function gb(n,e){n.uniform2uiv(this.addr,e)}function _b(n,e){n.uniform3uiv(this.addr,e)}function vb(n,e){n.uniform4uiv(this.addr,e)}function xb(n,e,t){const i=this.cache,r=e.length,s=Gl(t,r);On(i,s)||(n.uniform1iv(this.addr,s),zn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Um,s[o])}function yb(n,e,t){const i=this.cache,r=e.length,s=Gl(t,r);On(i,s)||(n.uniform1iv(this.addr,s),zn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Fm,s[o])}function Sb(n,e,t){const i=this.cache,r=e.length,s=Gl(t,r);On(i,s)||(n.uniform1iv(this.addr,s),zn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Om,s[o])}function bb(n,e,t){const i=this.cache,r=e.length,s=Gl(t,r);On(i,s)||(n.uniform1iv(this.addr,s),zn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||km,s[o])}function Mb(n){switch(n){case 5126:return rb;case 35664:return sb;case 35665:return ob;case 35666:return ab;case 35674:return cb;case 35675:return lb;case 35676:return ub;case 5124:case 35670:return db;case 35667:case 35671:return hb;case 35668:case 35672:return fb;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return _b;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return yb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return bb}}class wb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ib(t.type)}}class Eb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mb(t.type)}}class Tb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ku=/(\w+)(\])?(\[|\.)?/g;function ip(n,e){n.seq.push(e),n.map[e.id]=e}function Ab(n,e,t){const i=n.name,r=i.length;for(ku.lastIndex=0;;){const s=ku.exec(i),o=ku.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){ip(t,l===void 0?new wb(a,n,e):new Eb(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Tb(a),ip(t,d)),t=d}}}class ll{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Ab(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function rp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Rb=37297;let Cb=0;function Pb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const sp=new wt;function Db(n){Xt._getMatrix(sp,Xt.workingColorSpace,n);const e=`mat3( ${sp.elements.map(t=>t.toFixed(4))} )`;switch(Xt.getTransfer(n)){case vl:return[e,"LinearTransferOETF"];case Jt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function op(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Pb(n.getShaderSource(e),a)}else return s}function Lb(n,e){const t=Db(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ib(n,e){let t;switch(e){case F0:t="Linear";break;case O0:t="Reinhard";break;case z0:t="Cineon";break;case B0:t="ACESFilmic";break;case V0:t="AgX";break;case G0:t="Neutral";break;case H0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xc=new S;function Nb(){Xt.getLuminanceCoefficients(Xc);const n=Xc.x.toFixed(4),e=Xc.y.toFixed(4),t=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ub(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function kb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Fb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function xa(n){return n!==""}function ap(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function jd(n){return n.replace(Ob,Bb)}const zb=new Map;function Bb(n,e){let t=Rt[e];if(t===void 0){const i=zb.get(e);if(i!==void 0)t=Rt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jd(t)}const Hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lp(n){return n.replace(Hb,Vb)}function Vb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function up(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Gb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===im?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===g0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rr&&(e="SHADOWMAP_TYPE_VSM"),e}function Wb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case No:case Uo:e="ENVMAP_TYPE_CUBE";break;case Hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xb(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Uo&&(e="ENVMAP_MODE_REFRACTION"),e}function qb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rm:e="ENVMAP_BLENDING_MULTIPLY";break;case U0:e="ENVMAP_BLENDING_MIX";break;case k0:e="ENVMAP_BLENDING_ADD";break}return e}function $b(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Yb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Gb(t),l=Wb(t),u=Xb(t),d=qb(t),h=$b(t),f=Ub(t),m=kb(s),_=r.createProgram();let g,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xa).join(`
`),p.length>0&&(p+=`
`)):(g=[up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),p=[up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ts?"#define TONE_MAPPING":"",t.toneMapping!==ts?Rt.tonemapping_pars_fragment:"",t.toneMapping!==ts?Ib("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,Lb("linearToOutputTexel",t.outputColorSpace),Nb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),o=jd(o),o=ap(o,t),o=cp(o,t),a=jd(a),a=ap(a,t),a=cp(a,t),o=lp(o),a=lp(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===nf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=w+g+o,v=w+p+a,L=rp(r,r.VERTEX_SHADER,y),D=rp(r,r.FRAGMENT_SHADER,v);r.attachShader(_,L),r.attachShader(_,D),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(I){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(_)||"",O=r.getShaderInfoLog(L)||"",G=r.getShaderInfoLog(D)||"",$=k.trim(),j=O.trim(),re=G.trim();let q=!0,ge=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,L,D);else{const Te=op(r,L,"vertex"),ze=op(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+$+`
`+Te+`
`+ze)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(j===""||re==="")&&(ge=!1);ge&&(I.diagnostics={runnable:q,programLog:$,vertexShader:{log:j,prefix:g},fragmentShader:{log:re,prefix:p}})}r.deleteShader(L),r.deleteShader(D),N=new ll(r,_),b=Fb(r,_)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Rb)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=D,this}let jb=0;class Zb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Kb(e),t.set(e,i)),i}}class Kb{constructor(e){this.id=jb++,this.code=e,this.usedTimes=0}}function Jb(n,e,t,i,r,s,o){const a=new vh,c=new Zb,l=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,M,I,k,O){const G=k.fog,$=O.geometry,j=b.isMeshStandardMaterial?k.environment:null,re=(b.isMeshStandardMaterial?t:e).get(b.envMap||j),q=re&&re.mapping===Hl?re.image.height:null,ge=m[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const Te=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ze=Te!==void 0?Te.length:0;let He=0;$.morphAttributes.position!==void 0&&(He=1),$.morphAttributes.normal!==void 0&&(He=2),$.morphAttributes.color!==void 0&&(He=3);let at,yt,te,Ae;if(ge){const Ue=gr[ge];at=Ue.vertexShader,yt=Ue.fragmentShader}else at=b.vertexShader,yt=b.fragmentShader,c.update(b),te=c.getVertexShaderID(b),Ae=c.getFragmentShaderID(b);const oe=n.getRenderTarget(),Ke=n.state.buffers.depth.getReversed(),ne=O.isInstancedMesh===!0,ue=O.isBatchedMesh===!0,Q=!!b.map,ee=!!b.matcap,C=!!re,me=!!b.aoMap,he=!!b.lightMap,Re=!!b.bumpMap,pe=!!b.normalMap,Ve=!!b.displacementMap,ae=!!b.emissiveMap,Ee=!!b.metalnessMap,be=!!b.roughnessMap,Le=b.anisotropy>0,A=b.clearcoat>0,x=b.dispersion>0,z=b.iridescence>0,K=b.sheen>0,X=b.transmission>0,W=Le&&!!b.anisotropyMap,Ie=A&&!!b.clearcoatMap,xe=A&&!!b.clearcoatNormalMap,Ge=A&&!!b.clearcoatRoughnessMap,Xe=z&&!!b.iridescenceMap,_e=z&&!!b.iridescenceThicknessMap,Ne=K&&!!b.sheenColorMap,Je=K&&!!b.sheenRoughnessMap,Qe=!!b.specularMap,Ce=!!b.specularColorMap,ut=!!b.specularIntensityMap,U=X&&!!b.transmissionMap,ye=X&&!!b.thicknessMap,Se=!!b.gradientMap,qe=!!b.alphaMap,le=b.alphaTest>0,se=!!b.alphaHash,$e=!!b.extensions;let ie=ts;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ie=n.toneMapping);const Ye={shaderID:ge,shaderType:b.type,shaderName:b.name,vertexShader:at,fragmentShader:yt,defines:b.defines,customVertexShaderID:te,customFragmentShaderID:Ae,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ue,batchingColor:ue&&O._colorsTexture!==null,instancing:ne,instancingColor:ne&&O.instanceColor!==null,instancingMorph:ne&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ko,alphaToCoverage:!!b.alphaToCoverage,map:Q,matcap:ee,envMap:C,envMapMode:C&&re.mapping,envMapCubeUVHeight:q,aoMap:me,lightMap:he,bumpMap:Re,normalMap:pe,displacementMap:h&&Ve,emissiveMap:ae,normalMapObjectSpace:pe&&b.normalMapType===Y0,normalMapTangentSpace:pe&&b.normalMapType===$0,metalnessMap:Ee,roughnessMap:be,anisotropy:Le,anisotropyMap:W,clearcoat:A,clearcoatMap:Ie,clearcoatNormalMap:xe,clearcoatRoughnessMap:Ge,dispersion:x,iridescence:z,iridescenceMap:Xe,iridescenceThicknessMap:_e,sheen:K,sheenColorMap:Ne,sheenRoughnessMap:Je,specularMap:Qe,specularColorMap:Ce,specularIntensityMap:ut,transmission:X,transmissionMap:U,thicknessMap:ye,gradientMap:Se,opaque:b.transparent===!1&&b.blending===Eo&&b.alphaToCoverage===!1,alphaMap:qe,alphaTest:le,alphaHash:se,combine:b.combine,mapUv:Q&&_(b.map.channel),aoMapUv:me&&_(b.aoMap.channel),lightMapUv:he&&_(b.lightMap.channel),bumpMapUv:Re&&_(b.bumpMap.channel),normalMapUv:pe&&_(b.normalMap.channel),displacementMapUv:Ve&&_(b.displacementMap.channel),emissiveMapUv:ae&&_(b.emissiveMap.channel),metalnessMapUv:Ee&&_(b.metalnessMap.channel),roughnessMapUv:be&&_(b.roughnessMap.channel),anisotropyMapUv:W&&_(b.anisotropyMap.channel),clearcoatMapUv:Ie&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:xe&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Je&&_(b.sheenRoughnessMap.channel),specularMapUv:Qe&&_(b.specularMap.channel),specularColorMapUv:Ce&&_(b.specularColorMap.channel),specularIntensityMapUv:ut&&_(b.specularIntensityMap.channel),transmissionMapUv:U&&_(b.transmissionMap.channel),thicknessMapUv:ye&&_(b.thicknessMap.channel),alphaMapUv:qe&&_(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(pe||Le),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(Q||qe),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ke,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ze,morphTextureStride:He,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:Q&&b.map.isVideoTexture===!0&&Xt.getTransfer(b.map.colorSpace)===Jt,decodeVideoTextureEmissive:ae&&b.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(b.emissiveMap.colorSpace)===Jt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===mn,flipSided:b.side===wi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:$e&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&b.extensions.multiDraw===!0||ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(w(M,b),y(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function w(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const M=m[b.type];let I;if(M){const k=gr[M];I=O_.clone(k.uniforms)}else I=b.uniforms;return I}function L(b,M){let I;for(let k=0,O=u.length;k<O;k++){const G=u[k];if(G.cacheKey===M){I=G,++I.usedTimes;break}}return I===void 0&&(I=new Yb(n,M,b,s),u.push(I)),I}function D(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function R(b){c.remove(b)}function N(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:L,releaseProgram:D,releaseShaderCache:R,programs:u,dispose:N}}function Qb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function eM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function dp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,f,m,_,g){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:m,renderOrder:d.renderOrder,z:_,group:g},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=_,p.group=g),e++,p}function a(d,h,f,m,_,g){const p=o(d,h,f,m,_,g);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(d,h,f,m,_,g){const p=o(d,h,f,m,_,g);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,h){t.length>1&&t.sort(d||eM),i.length>1&&i.sort(h||dp),r.length>1&&r.sort(h||dp)}function u(){for(let d=e,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function tM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new hp,n.set(i,[o])):r>=s.length?(o=new hp,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function nM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new kt};break;case"SpotLight":t={position:new S,direction:new S,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new kt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":t={color:new kt,position:new S,halfWidth:new S,halfHeight:new S};break}return n[e.id]=t,t}}}function iM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rM=0;function sM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function oM(n){const e=new nM,t=iM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new S);const r=new S,s=new Bt,o=new Bt;function a(l){let u=0,d=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,w=0,y=0,v=0,L=0,D=0,R=0;l.sort(sM);for(let b=0,M=l.length;b<M;b++){const I=l[b],k=I.color,O=I.intensity,G=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=k.r*O,d+=k.g*O,h+=k.b*O;else if(I.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(I.sh.coefficients[j],O);R++}else if(I.isDirectionalLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const re=I.shadow,q=t.get(I);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=$,i.directionalShadowMatrix[f]=I.shadow.matrix,w++}i.directional[f]=j,f++}else if(I.isSpotLight){const j=e.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(k).multiplyScalar(O),j.distance=G,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,i.spot[_]=j;const re=I.shadow;if(I.map&&(i.spotLightMap[L]=I.map,L++,re.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[_]=re.matrix,I.castShadow){const q=t.get(I);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=$,v++}_++}else if(I.isRectAreaLight){const j=e.get(I);j.color.copy(k).multiplyScalar(O),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=j,g++}else if(I.isPointLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),j.distance=I.distance,j.decay=I.decay,I.castShadow){const re=I.shadow,q=t.get(I);q.shadowIntensity=re.intensity,q.shadowBias=re.bias,q.shadowNormalBias=re.normalBias,q.shadowRadius=re.radius,q.shadowMapSize=re.mapSize,q.shadowCameraNear=re.camera.near,q.shadowCameraFar=re.camera.far,i.pointShadow[m]=q,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=I.shadow.matrix,y++}i.point[m]=j,m++}else if(I.isHemisphereLight){const j=e.get(I);j.skyColor.copy(I.color).multiplyScalar(O),j.groundColor.copy(I.groundColor).multiplyScalar(O),i.hemi[p]=j,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==f||N.pointLength!==m||N.spotLength!==_||N.rectAreaLength!==g||N.hemiLength!==p||N.numDirectionalShadows!==w||N.numPointShadows!==y||N.numSpotShadows!==v||N.numSpotMaps!==L||N.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+L-D,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=R,N.directionalLength=f,N.pointLength=m,N.spotLength=_,N.rectAreaLength=g,N.hemiLength=p,N.numDirectionalShadows=w,N.numPointShadows=y,N.numSpotShadows=v,N.numSpotMaps=L,N.numLightProbes=R,i.version=rM++)}function c(l,u){let d=0,h=0,f=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const y=l[p];if(y.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),d++}else if(y.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:i}}function fp(n){const e=new oM(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function aM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new fp(n),e.set(r,[a])):s>=o.length?(a=new fp(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const cM=`void main() {
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
}`;function uM(n,e,t){let i=new xh;const r=new Be,s=new Be,o=new Ot,a=new Lv({depthPacking:q0}),c=new Iv,l={},u=t.maxTextureSize,d={[Ur]:wi,[wi]:Ur,[mn]:mn},h=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:cM,fragmentShader:lM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new zt;m.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new we(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=im;let p=this.type;this.render=function(D,R,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),k=n.state;k.setBlending(es),k.buffers.depth.getReversed()?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=p!==Rr&&this.type===Rr,G=p===Rr&&this.type!==Rr;for(let $=0,j=D.length;$<j;$++){const re=D[$],q=re.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ge=q.getFrameExtents();if(r.multiply(ge),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,q.mapSize.y=s.y)),q.map===null||O===!0||G===!0){const ze=this.type!==Rr?{minFilter:Oi,magFilter:Oi}:{};q.map!==null&&q.map.dispose(),q.map=new zs(r.x,r.y,ze),q.map.texture.name=re.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const Te=q.getViewportCount();for(let ze=0;ze<Te;ze++){const He=q.getViewport(ze);o.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),k.viewport(o),q.updateMatrices(re,ze),i=q.getFrustum(),v(R,N,q.camera,re,this.type)}q.isPointLightShadow!==!0&&this.type===Rr&&w(q,N),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(b,M,I)};function w(D,R){const N=e.update(_);h.defines.VSM_SAMPLES!==D.blurSamples&&(h.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new zs(r.x,r.y)),h.uniforms.shadow_pass.value=D.map.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(R,null,N,h,_,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(R,null,N,f,_,null)}function y(D,R,N,b){let M=null;const I=N.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(I!==void 0)M=I;else if(M=N.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=M.uuid,O=R.uuid;let G=l[k];G===void 0&&(G={},l[k]=G);let $=G[O];$===void 0&&($=M.clone(),G[O]=$,R.addEventListener("dispose",L)),M=$}if(M.visible=R.visible,M.wireframe=R.wireframe,b===Rr?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=n.properties.get(M);k.light=N}return M}function v(D,R,N,b,M){if(D.visible===!1)return;if(D.layers.test(R.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===Rr)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,D.matrixWorld);const O=e.update(D),G=D.material;if(Array.isArray(G)){const $=O.groups;for(let j=0,re=$.length;j<re;j++){const q=$[j],ge=G[q.materialIndex];if(ge&&ge.visible){const Te=y(D,ge,b,M);D.onBeforeShadow(n,D,R,N,O,Te,q),n.renderBufferDirect(N,null,O,Te,D,q),D.onAfterShadow(n,D,R,N,O,Te,q)}}}else if(G.visible){const $=y(D,G,b,M);D.onBeforeShadow(n,D,R,N,O,$,null),n.renderBufferDirect(N,null,O,$,D,null),D.onAfterShadow(n,D,R,N,O,$,null)}}const k=D.children;for(let O=0,G=k.length;O<G;O++)v(k[O],R,N,b,M)}function L(D){D.target.removeEventListener("dispose",L);for(const N in l){const b=l[N],M=D.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const dM={[ad]:cd,[ld]:hd,[ud]:fd,[Io]:dd,[cd]:ad,[hd]:ld,[fd]:ud,[dd]:Io};function hM(n,e){function t(){let U=!1;const ye=new Ot;let Se=null;const qe=new Ot(0,0,0,0);return{setMask:function(le){Se!==le&&!U&&(n.colorMask(le,le,le,le),Se=le)},setLocked:function(le){U=le},setClear:function(le,se,$e,ie,Ye){Ye===!0&&(le*=ie,se*=ie,$e*=ie),ye.set(le,se,$e,ie),qe.equals(ye)===!1&&(n.clearColor(le,se,$e,ie),qe.copy(ye))},reset:function(){U=!1,Se=null,qe.set(-1,0,0,0)}}}function i(){let U=!1,ye=!1,Se=null,qe=null,le=null;return{setReversed:function(se){if(ye!==se){const $e=e.get("EXT_clip_control");se?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),ye=se;const ie=le;le=null,this.setClear(ie)}},getReversed:function(){return ye},setTest:function(se){se?oe(n.DEPTH_TEST):Ke(n.DEPTH_TEST)},setMask:function(se){Se!==se&&!U&&(n.depthMask(se),Se=se)},setFunc:function(se){if(ye&&(se=dM[se]),qe!==se){switch(se){case ad:n.depthFunc(n.NEVER);break;case cd:n.depthFunc(n.ALWAYS);break;case ld:n.depthFunc(n.LESS);break;case Io:n.depthFunc(n.LEQUAL);break;case ud:n.depthFunc(n.EQUAL);break;case dd:n.depthFunc(n.GEQUAL);break;case hd:n.depthFunc(n.GREATER);break;case fd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}qe=se}},setLocked:function(se){U=se},setClear:function(se){le!==se&&(ye&&(se=1-se),n.clearDepth(se),le=se)},reset:function(){U=!1,Se=null,qe=null,le=null,ye=!1}}}function r(){let U=!1,ye=null,Se=null,qe=null,le=null,se=null,$e=null,ie=null,Ye=null;return{setTest:function(Ue){U||(Ue?oe(n.STENCIL_TEST):Ke(n.STENCIL_TEST))},setMask:function(Ue){ye!==Ue&&!U&&(n.stencilMask(Ue),ye=Ue)},setFunc:function(Ue,mt,St){(Se!==Ue||qe!==mt||le!==St)&&(n.stencilFunc(Ue,mt,St),Se=Ue,qe=mt,le=St)},setOp:function(Ue,mt,St){(se!==Ue||$e!==mt||ie!==St)&&(n.stencilOp(Ue,mt,St),se=Ue,$e=mt,ie=St)},setLocked:function(Ue){U=Ue},setClear:function(Ue){Ye!==Ue&&(n.clearStencil(Ue),Ye=Ue)},reset:function(){U=!1,ye=null,Se=null,qe=null,le=null,se=null,$e=null,ie=null,Ye=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,f=[],m=null,_=!1,g=null,p=null,w=null,y=null,v=null,L=null,D=null,R=new kt(0,0,0),N=0,b=!1,M=null,I=null,k=null,O=null,G=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,re=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=re>=1):q.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=re>=2);let ge=null,Te={};const ze=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),at=new Ot().fromArray(ze),yt=new Ot().fromArray(He);function te(U,ye,Se,qe){const le=new Uint8Array(4),se=n.createTexture();n.bindTexture(U,se),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<Se;$e++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,qe,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(ye+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return se}const Ae={};Ae[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(Io),Re(!1),pe(Kh),oe(n.CULL_FACE),me(es);function oe(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Ke(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function ne(U,ye){return d[U]!==ye?(n.bindFramebuffer(U,ye),d[U]=ye,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ye),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function ue(U,ye){let Se=f,qe=!1;if(U){Se=h.get(ye),Se===void 0&&(Se=[],h.set(ye,Se));const le=U.textures;if(Se.length!==le.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let se=0,$e=le.length;se<$e;se++)Se[se]=n.COLOR_ATTACHMENT0+se;Se.length=le.length,qe=!0}}else Se[0]!==n.BACK&&(Se[0]=n.BACK,qe=!0);qe&&n.drawBuffers(Se)}function Q(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const ee={[Es]:n.FUNC_ADD,[v0]:n.FUNC_SUBTRACT,[x0]:n.FUNC_REVERSE_SUBTRACT};ee[y0]=n.MIN,ee[S0]=n.MAX;const C={[b0]:n.ZERO,[M0]:n.ONE,[w0]:n.SRC_COLOR,[sd]:n.SRC_ALPHA,[P0]:n.SRC_ALPHA_SATURATE,[R0]:n.DST_COLOR,[T0]:n.DST_ALPHA,[E0]:n.ONE_MINUS_SRC_COLOR,[od]:n.ONE_MINUS_SRC_ALPHA,[C0]:n.ONE_MINUS_DST_COLOR,[A0]:n.ONE_MINUS_DST_ALPHA,[D0]:n.CONSTANT_COLOR,[L0]:n.ONE_MINUS_CONSTANT_COLOR,[I0]:n.CONSTANT_ALPHA,[N0]:n.ONE_MINUS_CONSTANT_ALPHA};function me(U,ye,Se,qe,le,se,$e,ie,Ye,Ue){if(U===es){_===!0&&(Ke(n.BLEND),_=!1);return}if(_===!1&&(oe(n.BLEND),_=!0),U!==_0){if(U!==g||Ue!==b){if((p!==Es||v!==Es)&&(n.blendEquation(n.FUNC_ADD),p=Es,v=Es),Ue)switch(U){case Eo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rd:n.blendFunc(n.ONE,n.ONE);break;case Jh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Eo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,y=null,L=null,D=null,R.set(0,0,0),N=0,g=U,b=Ue}return}le=le||ye,se=se||Se,$e=$e||qe,(ye!==p||le!==v)&&(n.blendEquationSeparate(ee[ye],ee[le]),p=ye,v=le),(Se!==w||qe!==y||se!==L||$e!==D)&&(n.blendFuncSeparate(C[Se],C[qe],C[se],C[$e]),w=Se,y=qe,L=se,D=$e),(ie.equals(R)===!1||Ye!==N)&&(n.blendColor(ie.r,ie.g,ie.b,Ye),R.copy(ie),N=Ye),g=U,b=!1}function he(U,ye){U.side===mn?Ke(n.CULL_FACE):oe(n.CULL_FACE);let Se=U.side===wi;ye&&(Se=!Se),Re(Se),U.blending===Eo&&U.transparent===!1?me(es):me(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const qe=U.stencilWrite;a.setTest(qe),qe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function Re(U){M!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),M=U)}function pe(U){U!==p0?(oe(n.CULL_FACE),U!==I&&(U===Kh?n.cullFace(n.BACK):U===m0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ke(n.CULL_FACE),I=U}function Ve(U){U!==k&&(j&&n.lineWidth(U),k=U)}function ae(U,ye,Se){U?(oe(n.POLYGON_OFFSET_FILL),(O!==ye||G!==Se)&&(n.polygonOffset(ye,Se),O=ye,G=Se)):Ke(n.POLYGON_OFFSET_FILL)}function Ee(U){U?oe(n.SCISSOR_TEST):Ke(n.SCISSOR_TEST)}function be(U){U===void 0&&(U=n.TEXTURE0+$-1),ge!==U&&(n.activeTexture(U),ge=U)}function Le(U,ye,Se){Se===void 0&&(ge===null?Se=n.TEXTURE0+$-1:Se=ge);let qe=Te[Se];qe===void 0&&(qe={type:void 0,texture:void 0},Te[Se]=qe),(qe.type!==U||qe.texture!==ye)&&(ge!==Se&&(n.activeTexture(Se),ge=Se),n.bindTexture(U,ye||Ae[U]),qe.type=U,qe.texture=ye)}function A(){const U=Te[ge];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ge(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xe(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(U){at.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),at.copy(U))}function Je(U){yt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),yt.copy(U))}function Qe(U,ye){let Se=l.get(ye);Se===void 0&&(Se=new WeakMap,l.set(ye,Se));let qe=Se.get(U);qe===void 0&&(qe=n.getUniformBlockIndex(ye,U.name),Se.set(U,qe))}function Ce(U,ye){const qe=l.get(ye).get(U);c.get(ye)!==qe&&(n.uniformBlockBinding(ye,qe,U.__bindingPointIndex),c.set(ye,qe))}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ge=null,Te={},d={},h=new WeakMap,f=[],m=null,_=!1,g=null,p=null,w=null,y=null,v=null,L=null,D=null,R=new kt(0,0,0),N=0,b=!1,M=null,I=null,k=null,O=null,G=null,at.set(0,0,n.canvas.width,n.canvas.height),yt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Ke,bindFramebuffer:ne,drawBuffers:ue,useProgram:Q,setBlending:me,setMaterial:he,setFlipSided:Re,setCullFace:pe,setLineWidth:Ve,setPolygonOffset:ae,setScissorTest:Ee,activeTexture:be,bindTexture:Le,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:z,texImage2D:Xe,texImage3D:_e,updateUBOMapping:Qe,uniformBlockBinding:Ce,texStorage2D:xe,texStorage3D:Ge,texSubImage2D:K,texSubImage3D:X,compressedTexSubImage2D:W,compressedTexSubImage3D:Ie,scissor:Ne,viewport:Je,reset:ut}}function fM(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,x){return f?new OffscreenCanvas(A,x):Sl("canvas")}function _(A,x,z){let K=1;const X=Le(A);if((X.width>z||X.height>z)&&(K=z/Math.max(X.width,X.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const W=Math.floor(K*X.width),Ie=Math.floor(K*X.height);d===void 0&&(d=m(W,Ie));const xe=x?m(W,Ie):d;return xe.width=W,xe.height=Ie,xe.getContext("2d").drawImage(A,0,0,W,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+W+"x"+Ie+")."),xe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(A,x,z,K,X=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=x;if(x===n.RED&&(z===n.FLOAT&&(W=n.R32F),z===n.HALF_FLOAT&&(W=n.R16F),z===n.UNSIGNED_BYTE&&(W=n.R8)),x===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(W=n.R8UI),z===n.UNSIGNED_SHORT&&(W=n.R16UI),z===n.UNSIGNED_INT&&(W=n.R32UI),z===n.BYTE&&(W=n.R8I),z===n.SHORT&&(W=n.R16I),z===n.INT&&(W=n.R32I)),x===n.RG&&(z===n.FLOAT&&(W=n.RG32F),z===n.HALF_FLOAT&&(W=n.RG16F),z===n.UNSIGNED_BYTE&&(W=n.RG8)),x===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(W=n.RG8UI),z===n.UNSIGNED_SHORT&&(W=n.RG16UI),z===n.UNSIGNED_INT&&(W=n.RG32UI),z===n.BYTE&&(W=n.RG8I),z===n.SHORT&&(W=n.RG16I),z===n.INT&&(W=n.RG32I)),x===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(W=n.RGB8UI),z===n.UNSIGNED_SHORT&&(W=n.RGB16UI),z===n.UNSIGNED_INT&&(W=n.RGB32UI),z===n.BYTE&&(W=n.RGB8I),z===n.SHORT&&(W=n.RGB16I),z===n.INT&&(W=n.RGB32I)),x===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),z===n.UNSIGNED_INT&&(W=n.RGBA32UI),z===n.BYTE&&(W=n.RGBA8I),z===n.SHORT&&(W=n.RGBA16I),z===n.INT&&(W=n.RGBA32I)),x===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),x===n.RGBA){const Ie=X?vl:Xt.getTransfer(K);z===n.FLOAT&&(W=n.RGBA32F),z===n.HALF_FLOAT&&(W=n.RGBA16F),z===n.UNSIGNED_BYTE&&(W=Ie===Jt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function v(A,x){let z;return A?x===null||x===Os||x===Na?z=n.DEPTH24_STENCIL8:x===vr?z=n.DEPTH32F_STENCIL8:x===Ia&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Os||x===Na?z=n.DEPTH_COMPONENT24:x===vr?z=n.DEPTH_COMPONENT32F:x===Ia&&(z=n.DEPTH_COMPONENT16),z}function L(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Oi&&A.minFilter!==_r?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function D(A){const x=A.target;x.removeEventListener("dispose",D),N(x),x.isVideoTexture&&u.delete(x)}function R(A){const x=A.target;x.removeEventListener("dispose",R),M(x)}function N(A){const x=i.get(A);if(x.__webglInit===void 0)return;const z=A.source,K=h.get(z);if(K){const X=K[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&b(A),Object.keys(K).length===0&&h.delete(z)}i.remove(A)}function b(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const z=A.source,K=h.get(z);delete K[x.__cacheKey],o.memory.textures--}function M(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let X=0;X<x.__webglFramebuffer[K].length;X++)n.deleteFramebuffer(x.__webglFramebuffer[K][X]);else n.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)n.deleteFramebuffer(x.__webglFramebuffer[K]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=A.textures;for(let K=0,X=z.length;K<X;K++){const W=i.get(z[K]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(z[K])}i.remove(A)}let I=0;function k(){I=0}function O(){const A=I;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),I+=1,A}function G(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function $(A,x){const z=i.get(A);if(A.isVideoTexture&&Ee(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(z,A,x);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+x)}function j(A,x){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Ae(z,A,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+x)}function re(A,x){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Ae(z,A,x);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+x)}function q(A,x){const z=i.get(A);if(A.version>0&&z.__version!==A.version){oe(z,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+x)}const ge={[gd]:n.REPEAT,[Cs]:n.CLAMP_TO_EDGE,[_d]:n.MIRRORED_REPEAT},Te={[Oi]:n.NEAREST,[W0]:n.NEAREST_MIPMAP_NEAREST,[_c]:n.NEAREST_MIPMAP_LINEAR,[_r]:n.LINEAR,[nu]:n.LINEAR_MIPMAP_NEAREST,[Ps]:n.LINEAR_MIPMAP_LINEAR},ze={[j0]:n.NEVER,[t_]:n.ALWAYS,[Z0]:n.LESS,[fm]:n.LEQUAL,[K0]:n.EQUAL,[e_]:n.GEQUAL,[J0]:n.GREATER,[Q0]:n.NOTEQUAL};function He(A,x){if(x.type===vr&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===_r||x.magFilter===nu||x.magFilter===_c||x.magFilter===Ps||x.minFilter===_r||x.minFilter===nu||x.minFilter===_c||x.minFilter===Ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,ge[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ge[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ge[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Te[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Te[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ze[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Oi||x.minFilter!==_c&&x.minFilter!==Ps||x.type===vr&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function at(A,x){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",D));const K=x.source;let X=h.get(K);X===void 0&&(X={},h.set(K,X));const W=G(x);if(W!==A.__cacheKey){X[W]===void 0&&(X[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),X[W].usedTimes++;const Ie=X[A.__cacheKey];Ie!==void 0&&(X[A.__cacheKey].usedTimes--,Ie.usedTimes===0&&b(x)),A.__cacheKey=W,A.__webglTexture=X[W].texture}return z}function yt(A,x,z){return Math.floor(Math.floor(A/z)/x)}function te(A,x,z,K){const W=A.updateRanges;if(W.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,z,K,x.data);else{W.sort((_e,Ne)=>_e.start-Ne.start);let Ie=0;for(let _e=1;_e<W.length;_e++){const Ne=W[Ie],Je=W[_e],Qe=Ne.start+Ne.count,Ce=yt(Je.start,x.width,4),ut=yt(Ne.start,x.width,4);Je.start<=Qe+1&&Ce===ut&&yt(Je.start+Je.count-1,x.width,4)===Ce?Ne.count=Math.max(Ne.count,Je.start+Je.count-Ne.start):(++Ie,W[Ie]=Je)}W.length=Ie+1;const xe=n.getParameter(n.UNPACK_ROW_LENGTH),Ge=n.getParameter(n.UNPACK_SKIP_PIXELS),Xe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let _e=0,Ne=W.length;_e<Ne;_e++){const Je=W[_e],Qe=Math.floor(Je.start/4),Ce=Math.ceil(Je.count/4),ut=Qe%x.width,U=Math.floor(Qe/x.width),ye=Ce,Se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ut),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,ut,U,ye,Se,z,K,x.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,xe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,Xe)}}function Ae(A,x,z){let K=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=n.TEXTURE_3D);const X=at(A,x),W=x.source;t.bindTexture(K,A.__webglTexture,n.TEXTURE0+z);const Ie=i.get(W);if(W.version!==Ie.__version||X===!0){t.activeTexture(n.TEXTURE0+z);const xe=Xt.getPrimaries(Xt.workingColorSpace),Ge=x.colorSpace===Kr?null:Xt.getPrimaries(x.colorSpace),Xe=x.colorSpace===Kr||xe===Ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let _e=_(x.image,!1,r.maxTextureSize);_e=be(x,_e);const Ne=s.convert(x.format,x.colorSpace),Je=s.convert(x.type);let Qe=y(x.internalFormat,Ne,Je,x.colorSpace,x.isVideoTexture);He(K,x);let Ce;const ut=x.mipmaps,U=x.isVideoTexture!==!0,ye=Ie.__version===void 0||X===!0,Se=W.dataReady,qe=L(x,_e);if(x.isDepthTexture)Qe=v(x.format===ka,x.type),ye&&(U?t.texStorage2D(n.TEXTURE_2D,1,Qe,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Qe,_e.width,_e.height,0,Ne,Je,null));else if(x.isDataTexture)if(ut.length>0){U&&ye&&t.texStorage2D(n.TEXTURE_2D,qe,Qe,ut[0].width,ut[0].height);for(let le=0,se=ut.length;le<se;le++)Ce=ut[le],U?Se&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ce.width,Ce.height,Ne,Je,Ce.data):t.texImage2D(n.TEXTURE_2D,le,Qe,Ce.width,Ce.height,0,Ne,Je,Ce.data);x.generateMipmaps=!1}else U?(ye&&t.texStorage2D(n.TEXTURE_2D,qe,Qe,_e.width,_e.height),Se&&te(x,_e,Ne,Je)):t.texImage2D(n.TEXTURE_2D,0,Qe,_e.width,_e.height,0,Ne,Je,_e.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,Qe,ut[0].width,ut[0].height,_e.depth);for(let le=0,se=ut.length;le<se;le++)if(Ce=ut[le],x.format!==or)if(Ne!==null)if(U){if(Se)if(x.layerUpdates.size>0){const $e=Gf(Ce.width,Ce.height,x.format,x.type);for(const ie of x.layerUpdates){const Ye=Ce.data.subarray(ie*$e/Ce.data.BYTES_PER_ELEMENT,(ie+1)*$e/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,ie,Ce.width,Ce.height,1,Ne,Ye)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ce.width,Ce.height,_e.depth,Ne,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Qe,Ce.width,Ce.height,_e.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?Se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Ce.width,Ce.height,_e.depth,Ne,Je,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Qe,Ce.width,Ce.height,_e.depth,0,Ne,Je,Ce.data)}else{U&&ye&&t.texStorage2D(n.TEXTURE_2D,qe,Qe,ut[0].width,ut[0].height);for(let le=0,se=ut.length;le<se;le++)Ce=ut[le],x.format!==or?Ne!==null?U?Se&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Ce.width,Ce.height,Ne,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Qe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?Se&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ce.width,Ce.height,Ne,Je,Ce.data):t.texImage2D(n.TEXTURE_2D,le,Qe,Ce.width,Ce.height,0,Ne,Je,Ce.data)}else if(x.isDataArrayTexture)if(U){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,Qe,_e.width,_e.height,_e.depth),Se)if(x.layerUpdates.size>0){const le=Gf(_e.width,_e.height,x.format,x.type);for(const se of x.layerUpdates){const $e=_e.data.subarray(se*le/_e.data.BYTES_PER_ELEMENT,(se+1)*le/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,_e.width,_e.height,1,Ne,Je,$e)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ne,Je,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Qe,_e.width,_e.height,_e.depth,0,Ne,Je,_e.data);else if(x.isData3DTexture)U?(ye&&t.texStorage3D(n.TEXTURE_3D,qe,Qe,_e.width,_e.height,_e.depth),Se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ne,Je,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Qe,_e.width,_e.height,_e.depth,0,Ne,Je,_e.data);else if(x.isFramebufferTexture){if(ye)if(U)t.texStorage2D(n.TEXTURE_2D,qe,Qe,_e.width,_e.height);else{let le=_e.width,se=_e.height;for(let $e=0;$e<qe;$e++)t.texImage2D(n.TEXTURE_2D,$e,Qe,le,se,0,Ne,Je,null),le>>=1,se>>=1}}else if(ut.length>0){if(U&&ye){const le=Le(ut[0]);t.texStorage2D(n.TEXTURE_2D,qe,Qe,le.width,le.height)}for(let le=0,se=ut.length;le<se;le++)Ce=ut[le],U?Se&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Ne,Je,Ce):t.texImage2D(n.TEXTURE_2D,le,Qe,Ne,Je,Ce);x.generateMipmaps=!1}else if(U){if(ye){const le=Le(_e);t.texStorage2D(n.TEXTURE_2D,qe,Qe,le.width,le.height)}Se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ne,Je,_e)}else t.texImage2D(n.TEXTURE_2D,0,Qe,Ne,Je,_e);g(x)&&p(K),Ie.__version=W.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function oe(A,x,z){if(x.image.length!==6)return;const K=at(A,x),X=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);const W=i.get(X);if(X.version!==W.__version||K===!0){t.activeTexture(n.TEXTURE0+z);const Ie=Xt.getPrimaries(Xt.workingColorSpace),xe=x.colorSpace===Kr?null:Xt.getPrimaries(x.colorSpace),Ge=x.colorSpace===Kr||Ie===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const Xe=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,Ne=[];for(let se=0;se<6;se++)!Xe&&!_e?Ne[se]=_(x.image[se],!0,r.maxCubemapSize):Ne[se]=_e?x.image[se].image:x.image[se],Ne[se]=be(x,Ne[se]);const Je=Ne[0],Qe=s.convert(x.format,x.colorSpace),Ce=s.convert(x.type),ut=y(x.internalFormat,Qe,Ce,x.colorSpace),U=x.isVideoTexture!==!0,ye=W.__version===void 0||K===!0,Se=X.dataReady;let qe=L(x,Je);He(n.TEXTURE_CUBE_MAP,x);let le;if(Xe){U&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,ut,Je.width,Je.height);for(let se=0;se<6;se++){le=Ne[se].mipmaps;for(let $e=0;$e<le.length;$e++){const ie=le[$e];x.format!==or?Qe!==null?U?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e,0,0,ie.width,ie.height,Qe,ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e,ut,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e,0,0,ie.width,ie.height,Qe,Ce,ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e,ut,ie.width,ie.height,0,Qe,Ce,ie.data)}}}else{if(le=x.mipmaps,U&&ye){le.length>0&&qe++;const se=Le(Ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,ut,se.width,se.height)}for(let se=0;se<6;se++)if(_e){U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ne[se].width,Ne[se].height,Qe,Ce,Ne[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ut,Ne[se].width,Ne[se].height,0,Qe,Ce,Ne[se].data);for(let $e=0;$e<le.length;$e++){const Ye=le[$e].image[se].image;U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e+1,0,0,Ye.width,Ye.height,Qe,Ce,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e+1,ut,Ye.width,Ye.height,0,Qe,Ce,Ye.data)}}else{U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Qe,Ce,Ne[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ut,Qe,Ce,Ne[se]);for(let $e=0;$e<le.length;$e++){const ie=le[$e];U?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e+1,0,0,Qe,Ce,ie.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e+1,ut,Qe,Ce,ie.image[se])}}}g(x)&&p(n.TEXTURE_CUBE_MAP),W.__version=X.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ke(A,x,z,K,X,W){const Ie=s.convert(z.format,z.colorSpace),xe=s.convert(z.type),Ge=y(z.internalFormat,Ie,xe,z.colorSpace),Xe=i.get(x),_e=i.get(z);if(_e.__renderTarget=x,!Xe.__hasExternalTextures){const Ne=Math.max(1,x.width>>W),Je=Math.max(1,x.height>>W);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,W,Ge,Ne,Je,x.depth,0,Ie,xe,null):t.texImage2D(X,W,Ge,Ne,Je,0,Ie,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ae(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,X,_e.__webglTexture,0,Ve(x)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,X,_e.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(A,x,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){const K=x.depthTexture,X=K&&K.isDepthTexture?K.type:null,W=v(x.stencilBuffer,X),Ie=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=Ve(x);ae(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,W,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,W,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,W,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,A)}else{const K=x.textures;for(let X=0;X<K.length;X++){const W=K[X],Ie=s.convert(W.format,W.colorSpace),xe=s.convert(W.type),Ge=y(W.internalFormat,Ie,xe,W.colorSpace),Xe=Ve(x);z&&ae(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Ge,x.width,x.height):ae(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe,Ge,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ge,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const X=K.__webglTexture,W=Ve(x);if(x.depthTexture.format===Ua)ae(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(x.depthTexture.format===ka)ae(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Q(A){const x=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const X=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",X)};K.addEventListener("dispose",X),x.__depthDisposeCallback=X}x.__boundDepthTexture=K}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const K=A.texture.mipmaps;K&&K.length>0?ue(x.__webglFramebuffer[0],A):ue(x.__webglFramebuffer,A)}else if(z){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=n.createRenderbuffer(),ne(x.__webglDepthbuffer[K],A,!1);else{const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,W)}}else{const K=A.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ne(x.__webglDepthbuffer,A,!1);else{const X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(A,x,z){const K=i.get(A);x!==void 0&&Ke(K.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Q(A)}function C(A){const x=A.texture,z=i.get(A),K=i.get(x);A.addEventListener("dispose",R);const X=A.textures,W=A.isWebGLCubeRenderTarget===!0,Ie=X.length>1;if(Ie||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=x.version,o.memory.textures++),W){z.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[xe]=[];for(let Ge=0;Ge<x.mipmaps.length;Ge++)z.__webglFramebuffer[xe][Ge]=n.createFramebuffer()}else z.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let xe=0;xe<x.mipmaps.length;xe++)z.__webglFramebuffer[xe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let xe=0,Ge=X.length;xe<Ge;xe++){const Xe=i.get(X[xe]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&ae(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xe=0;xe<X.length;xe++){const Ge=X[xe];z.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[xe]);const Xe=s.convert(Ge.format,Ge.colorSpace),_e=s.convert(Ge.type),Ne=y(Ge.internalFormat,Xe,_e,Ge.colorSpace,A.isXRRenderTarget===!0),Je=Ve(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,Ne,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,z.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),He(n.TEXTURE_CUBE_MAP,x);for(let xe=0;xe<6;xe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ge=0;Ge<x.mipmaps.length;Ge++)Ke(z.__webglFramebuffer[xe][Ge],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ge);else Ke(z.__webglFramebuffer[xe],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);g(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let xe=0,Ge=X.length;xe<Ge;xe++){const Xe=X[xe],_e=i.get(Xe);let Ne=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ne=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ne,_e.__webglTexture),He(Ne,Xe),Ke(z.__webglFramebuffer,A,Xe,n.COLOR_ATTACHMENT0+xe,Ne,0),g(Xe)&&p(Ne)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,K.__webglTexture),He(xe,x),x.mipmaps&&x.mipmaps.length>0)for(let Ge=0;Ge<x.mipmaps.length;Ge++)Ke(z.__webglFramebuffer[Ge],A,x,n.COLOR_ATTACHMENT0,xe,Ge);else Ke(z.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,xe,0);g(x)&&p(xe),t.unbindTexture()}A.depthBuffer&&Q(A)}function me(A){const x=A.textures;for(let z=0,K=x.length;z<K;z++){const X=x[z];if(g(X)){const W=w(A),Ie=i.get(X).__webglTexture;t.bindTexture(W,Ie),p(W),t.unbindTexture()}}}const he=[],Re=[];function pe(A){if(A.samples>0){if(ae(A)===!1){const x=A.textures,z=A.width,K=A.height;let X=n.COLOR_BUFFER_BIT;const W=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(A),xe=x.length>1;if(xe)for(let Xe=0;Xe<x.length;Xe++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Ge=A.texture.mipmaps;Ge&&Ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Xe=0;Xe<x.length;Xe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),xe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Xe]);const _e=i.get(x[Xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,z,K,0,0,z,K,X,n.NEAREST),c===!0&&(he.length=0,Re.length=0,he.push(n.COLOR_ATTACHMENT0+Xe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(he.push(W),Re.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let Xe=0;Xe<x.length;Xe++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Xe]);const _e=i.get(x[Xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Ve(A){return Math.min(r.maxSamples,A.samples)}function ae(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ee(A){const x=o.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function be(A,x){const z=A.colorSpace,K=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==ko&&z!==Kr&&(Xt.getTransfer(z)===Jt?(K!==or||X!==yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function Le(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=j,this.setTexture3D=re,this.setTextureCube=q,this.rebindTextures=ee,this.setupRenderTarget=C,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=ae}function pM(n,e){function t(i,r=Kr){let s;const o=Xt.getTransfer(r);if(i===yr)return n.UNSIGNED_BYTE;if(i===uh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===dh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===cm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===om)return n.BYTE;if(i===am)return n.SHORT;if(i===Ia)return n.UNSIGNED_SHORT;if(i===lh)return n.INT;if(i===Os)return n.UNSIGNED_INT;if(i===vr)return n.FLOAT;if(i===sc)return n.HALF_FLOAT;if(i===lm)return n.ALPHA;if(i===um)return n.RGB;if(i===or)return n.RGBA;if(i===Ua)return n.DEPTH_COMPONENT;if(i===ka)return n.DEPTH_STENCIL;if(i===hh)return n.RED;if(i===fh)return n.RED_INTEGER;if(i===dm)return n.RG;if(i===ph)return n.RG_INTEGER;if(i===mh)return n.RGBA_INTEGER;if(i===rl||i===sl||i===ol||i===al)if(o===Jt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===rl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===rl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vd||i===xd||i===yd||i===Sd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bd||i===Md||i===wd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===bd||i===Md)return o===Jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===wd)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ed||i===Td||i===Ad||i===Rd||i===Cd||i===Pd||i===Dd||i===Ld||i===Id||i===Nd||i===Ud||i===kd||i===Fd||i===Od)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ed)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Td)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ad)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rd)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cd)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pd)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dd)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ld)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Id)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nd)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ud)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kd)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fd)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Od)return o===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cl||i===zd||i===Bd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===cl)return o===Jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hm||i===Hd||i===Vd||i===Gd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===cl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Hd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Gd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Na?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class zm extends mi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const mM=`
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

}`;class _M{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new zm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new kr({vertexShader:mM,fragmentShader:gM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new rs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vM extends Xs{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,m=null;const _=new _M,g={},p=t.getContextAttributes();let w=null,y=null;const v=[],L=[],D=new Be;let R=null;const N=new Ni;N.viewport=new Ot;const b=new Ni;b.viewport=new Ot;const M=[N,b],I=new zv;let k=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let Ae=v[te];return Ae===void 0&&(Ae=new Mu,v[te]=Ae),Ae.getTargetRaySpace()},this.getControllerGrip=function(te){let Ae=v[te];return Ae===void 0&&(Ae=new Mu,v[te]=Ae),Ae.getGripSpace()},this.getHand=function(te){let Ae=v[te];return Ae===void 0&&(Ae=new Mu,v[te]=Ae),Ae.getHandSpace()};function G(te){const Ae=L.indexOf(te.inputSource);if(Ae===-1)return;const oe=v[Ae];oe!==void 0&&(oe.update(te.inputSource,te.frame,l||o),oe.dispatchEvent({type:te.type,data:te.inputSource}))}function $(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",j);for(let te=0;te<v.length;te++){const Ae=L[te];Ae!==null&&(L[te]=null,v[te].disconnect(Ae))}k=null,O=null,_.reset();for(const te in g)delete g[te];e.setRenderTarget(w),f=null,h=null,d=null,r=null,y=null,yt.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",$),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(r,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ke=null,ne=null;p.depth&&(ne=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=p.stencil?ka:Ua,Ke=p.stencil?Na:Os);const ue={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};h=d.createProjectionLayer(ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new zs(h.textureWidth,h.textureHeight,{format:or,type:yr,depthTexture:new bm(h.textureWidth,h.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const oe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new zs(f.framebufferWidth,f.framebufferHeight,{format:or,type:yr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),yt.setContext(r),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(te){for(let Ae=0;Ae<te.removed.length;Ae++){const oe=te.removed[Ae],Ke=L.indexOf(oe);Ke>=0&&(L[Ke]=null,v[Ke].disconnect(oe))}for(let Ae=0;Ae<te.added.length;Ae++){const oe=te.added[Ae];let Ke=L.indexOf(oe);if(Ke===-1){for(let ue=0;ue<v.length;ue++)if(ue>=L.length){L.push(oe),Ke=ue;break}else if(L[ue]===null){L[ue]=oe,Ke=ue;break}if(Ke===-1)break}const ne=v[Ke];ne&&ne.connect(oe)}}const re=new S,q=new S;function ge(te,Ae,oe){re.setFromMatrixPosition(Ae.matrixWorld),q.setFromMatrixPosition(oe.matrixWorld);const Ke=re.distanceTo(q),ne=Ae.projectionMatrix.elements,ue=oe.projectionMatrix.elements,Q=ne[14]/(ne[10]-1),ee=ne[14]/(ne[10]+1),C=(ne[9]+1)/ne[5],me=(ne[9]-1)/ne[5],he=(ne[8]-1)/ne[0],Re=(ue[8]+1)/ue[0],pe=Q*he,Ve=Q*Re,ae=Ke/(-he+Re),Ee=ae*-he;if(Ae.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ee),te.translateZ(ae),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ne[10]===-1)te.projectionMatrix.copy(Ae.projectionMatrix),te.projectionMatrixInverse.copy(Ae.projectionMatrixInverse);else{const be=Q+ae,Le=ee+ae,A=pe-Ee,x=Ve+(Ke-Ee),z=C*ee/Le*be,K=me*ee/Le*be;te.projectionMatrix.makePerspective(A,x,z,K,be,Le),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Te(te,Ae){Ae===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(Ae.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let Ae=te.near,oe=te.far;_.texture!==null&&(_.depthNear>0&&(Ae=_.depthNear),_.depthFar>0&&(oe=_.depthFar)),I.near=b.near=N.near=Ae,I.far=b.far=N.far=oe,(k!==I.near||O!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),k=I.near,O=I.far),I.layers.mask=te.layers.mask|6,N.layers.mask=I.layers.mask&3,b.layers.mask=I.layers.mask&5;const Ke=te.parent,ne=I.cameras;Te(I,Ke);for(let ue=0;ue<ne.length;ue++)Te(ne[ue],Ke);ne.length===2?ge(I,N,b):I.projectionMatrix.copy(N.projectionMatrix),ze(te,I,Ke)};function ze(te,Ae,oe){oe===null?te.matrix.copy(Ae.matrixWorld):(te.matrix.copy(oe.matrixWorld),te.matrix.invert(),te.matrix.multiply(Ae.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(Ae.projectionMatrix),te.projectionMatrixInverse.copy(Ae.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Fa*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(te){c=te,h!==null&&(h.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(I)},this.getCameraTexture=function(te){return g[te]};let He=null;function at(te,Ae){if(u=Ae.getViewerPose(l||o),m=Ae,u!==null){const oe=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ke=!1;oe.length!==I.cameras.length&&(I.cameras.length=0,Ke=!0);for(let ee=0;ee<oe.length;ee++){const C=oe[ee];let me=null;if(f!==null)me=f.getViewport(C);else{const Re=d.getViewSubImage(h,C);me=Re.viewport,ee===0&&(e.setRenderTargetTextures(y,Re.colorTexture,Re.depthStencilTexture),e.setRenderTarget(y))}let he=M[ee];he===void 0&&(he=new Ni,he.layers.enable(ee),he.viewport=new Ot,M[ee]=he),he.matrix.fromArray(C.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(C.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(me.x,me.y,me.width,me.height),ee===0&&(I.matrix.copy(he.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ke===!0&&I.cameras.push(he)}const ne=r.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const ee=d.getDepthInformation(oe[0]);ee&&ee.isValid&&ee.texture&&_.init(ee,r.renderState)}if(ne&&ne.includes("camera-access")&&(e.state.unbindTexture(),d))for(let ee=0;ee<oe.length;ee++){const C=oe[ee].camera;if(C){let me=g[C];me||(me=new zm,g[C]=me);const he=d.getCameraImage(C);me.sourceTexture=he}}}for(let oe=0;oe<v.length;oe++){const Ke=L[oe],ne=v[oe];Ke!==null&&ne!==void 0&&ne.update(Ke,Ae,l||o)}He&&He(te,Ae),Ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ae}),m=null}const yt=new Nm;yt.setAnimationLoop(at),this.setAnimationLoop=function(te){He=te},this.dispose=function(){}}}const xs=new In,xM=new Bt;function yM(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,xm(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,w,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,w,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===wi&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===wi&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const w=e.get(p),y=w.envMap,v=w.envMapRotation;y&&(g.envMap.value=y,xs.copy(v),xs.x*=-1,xs.y*=-1,xs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),g.envMapRotation.value.setFromMatrix4(xM.makeRotationFromEuler(xs)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,w,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wi&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const w=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function SM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,y){const v=y.program;i.uniformBlockBinding(w,v)}function l(w,y){let v=r[w.id];v===void 0&&(m(w),v=u(w),r[w.id]=v,w.addEventListener("dispose",g));const L=y.program;i.updateUBOMapping(w,L);const D=e.render.frame;s[w.id]!==D&&(h(w),s[w.id]=D)}function u(w){const y=d();w.__bindingPointIndex=y;const v=n.createBuffer(),L=w.__size,D=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,L,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const y=r[w.id],v=w.uniforms,L=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let D=0,R=v.length;D<R;D++){const N=Array.isArray(v[D])?v[D]:[v[D]];for(let b=0,M=N.length;b<M;b++){const I=N[b];if(f(I,D,b,L)===!0){const k=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let G=0;for(let $=0;$<O.length;$++){const j=O[$],re=_(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,k+G,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,G),G+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,y,v,L){const D=w.value,R=y+"_"+v;if(L[R]===void 0)return typeof D=="number"||typeof D=="boolean"?L[R]=D:L[R]=D.clone(),!0;{const N=L[R];if(typeof D=="number"||typeof D=="boolean"){if(N!==D)return L[R]=D,!0}else if(N.equals(D)===!1)return N.copy(D),!0}return!1}function m(w){const y=w.uniforms;let v=0;const L=16;for(let R=0,N=y.length;R<N;R++){const b=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,I=b.length;M<I;M++){const k=b[M],O=Array.isArray(k.value)?k.value:[k.value];for(let G=0,$=O.length;G<$;G++){const j=O[G],re=_(j),q=v%L,ge=q%re.boundary,Te=q+ge;v+=ge,Te!==0&&L-Te<re.storage&&(v+=L-Te),k.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=re.storage}}}const D=v%L;return D>0&&(v+=L-D),w.__size=v,w.__cache={},this}function _(w){const y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function g(w){const y=w.target;y.removeEventListener("dispose",g);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class bM{constructor(e={}){const{canvas:t=v_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const w=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ts,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let L=!1;this._outputColorSpace=pi;let D=0,R=0,N=null,b=-1,M=null;const I=new Ot,k=new Ot;let O=null;const G=new kt(0);let $=0,j=t.width,re=t.height,q=1,ge=null,Te=null;const ze=new Ot(0,0,j,re),He=new Ot(0,0,j,re);let at=!1;const yt=new xh;let te=!1,Ae=!1;const oe=new Bt,Ke=new S,ne=new Ot,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function ee(){return N===null?q:1}let C=i;function me(E,H){return t.getContext(E,H)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ch}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",le,!1),C===null){const H="webgl2";if(C=me(H,E),C===null)throw me(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let he,Re,pe,Ve,ae,Ee,be,Le,A,x,z,K,X,W,Ie,xe,Ge,Xe,_e,Ne,Je,Qe,Ce,ut;function U(){he=new LS(C),he.init(),Qe=new pM(C,he),Re=new ES(C,he,e,Qe),pe=new hM(C,he),Re.reversedDepthBuffer&&h&&pe.buffers.depth.setReversed(!0),Ve=new US(C),ae=new Qb,Ee=new fM(C,he,pe,ae,Re,Qe,Ve),be=new AS(v),Le=new DS(v),A=new Hv(C),Ce=new MS(C,A),x=new IS(C,A,Ve,Ce),z=new FS(C,x,A,Ve),_e=new kS(C,Re,Ee),xe=new TS(ae),K=new Jb(v,be,Le,he,Re,Ce,xe),X=new yM(v,ae),W=new tM,Ie=new aM(he),Xe=new bS(v,be,Le,pe,z,f,c),Ge=new uM(v,z,Re),ut=new SM(C,Ve,Re,pe),Ne=new wS(C,he,Ve),Je=new NS(C,he,Ve),Ve.programs=K.programs,v.capabilities=Re,v.extensions=he,v.properties=ae,v.renderLists=W,v.shadowMap=Ge,v.state=pe,v.info=Ve}U();const ye=new vM(v,C);this.xr=ye,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=he.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=he.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(j,re,!1))},this.getSize=function(E){return E.set(j,re)},this.setSize=function(E,H,Z=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,re=H,t.width=Math.floor(E*q),t.height=Math.floor(H*q),Z===!0&&(t.style.width=E+"px",t.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(j*q,re*q).floor()},this.setDrawingBufferSize=function(E,H,Z){j=E,re=H,q=Z,t.width=Math.floor(E*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(ze)},this.setViewport=function(E,H,Z,J){E.isVector4?ze.set(E.x,E.y,E.z,E.w):ze.set(E,H,Z,J),pe.viewport(I.copy(ze).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(He)},this.setScissor=function(E,H,Z,J){E.isVector4?He.set(E.x,E.y,E.z,E.w):He.set(E,H,Z,J),pe.scissor(k.copy(He).multiplyScalar(q).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(E){pe.setScissorTest(at=E)},this.setOpaqueSort=function(E){ge=E},this.setTransparentSort=function(E){Te=E},this.getClearColor=function(E){return E.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,Z=!0){let J=0;if(E){let V=!1;if(N!==null){const Me=N.texture.format;V=Me===mh||Me===ph||Me===fh}if(V){const Me=N.texture.type,Pe=Me===yr||Me===Os||Me===Ia||Me===Na||Me===uh||Me===dh,et=Xe.getClearColor(),je=Xe.getClearAlpha(),ht=et.r,_t=et.g,lt=et.b;Pe?(m[0]=ht,m[1]=_t,m[2]=lt,m[3]=je,C.clearBufferuiv(C.COLOR,0,m)):(_[0]=ht,_[1]=_t,_[2]=lt,_[3]=je,C.clearBufferiv(C.COLOR,0,_))}else J|=C.COLOR_BUFFER_BIT}H&&(J|=C.DEPTH_BUFFER_BIT),Z&&(J|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Xe.dispose(),W.dispose(),Ie.dispose(),ae.dispose(),be.dispose(),Le.dispose(),z.dispose(),Ce.dispose(),ut.dispose(),K.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",St),ye.removeEventListener("sessionend",oi),Ki.stop()};function Se(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function qe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=Ve.autoReset,H=Ge.enabled,Z=Ge.autoUpdate,J=Ge.needsUpdate,V=Ge.type;U(),Ve.autoReset=E,Ge.enabled=H,Ge.autoUpdate=Z,Ge.needsUpdate=J,Ge.type=V}function le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function se(E){const H=E.target;H.removeEventListener("dispose",se),$e(H)}function $e(E){ie(E),ae.remove(E)}function ie(E){const H=ae.get(E).programs;H!==void 0&&(H.forEach(function(Z){K.releaseProgram(Z)}),E.isShaderMaterial&&K.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,Z,J,V,Me){H===null&&(H=ue);const Pe=V.isMesh&&V.matrixWorld.determinant()<0,et=Ks(E,H,Z,J,V);pe.setMaterial(J,Pe);let je=Z.index,ht=1;if(J.wireframe===!0){if(je=x.getWireframeAttribute(Z),je===void 0)return;ht=2}const _t=Z.drawRange,lt=Z.attributes.position;let xt=_t.start*ht,Nt=(_t.start+_t.count)*ht;Me!==null&&(xt=Math.max(xt,Me.start*ht),Nt=Math.min(Nt,(Me.start+Me.count)*ht)),je!==null?(xt=Math.max(xt,0),Nt=Math.min(Nt,je.count)):lt!=null&&(xt=Math.max(xt,0),Nt=Math.min(Nt,lt.count));const jt=Nt-xt;if(jt<0||jt===1/0)return;Ce.setup(V,J,et,Z,je);let Ht,Vt=Ne;if(je!==null&&(Ht=A.get(je),Vt=Je,Vt.setIndex(Ht)),V.isMesh)J.wireframe===!0?(pe.setLineWidth(J.wireframeLinewidth*ee()),Vt.setMode(C.LINES)):Vt.setMode(C.TRIANGLES);else if(V.isLine){let pt=J.linewidth;pt===void 0&&(pt=1),pe.setLineWidth(pt*ee()),V.isLineSegments?Vt.setMode(C.LINES):V.isLineLoop?Vt.setMode(C.LINE_LOOP):Vt.setMode(C.LINE_STRIP)}else V.isPoints?Vt.setMode(C.POINTS):V.isSprite&&Vt.setMode(C.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)To("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Vt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))Vt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const pt=V._multiDrawStarts,an=V._multiDrawCounts,Ut=V._multiDrawCount,li=je?A.get(je).bytesPerElement:1,zr=ae.get(J).currentProgram.getUniforms();for(let Rn=0;Rn<Ut;Rn++)zr.setValue(C,"_gl_DrawID",Rn),Vt.render(pt[Rn]/li,an[Rn])}else if(V.isInstancedMesh)Vt.renderInstances(xt,jt,V.count);else if(Z.isInstancedBufferGeometry){const pt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,an=Math.min(Z.instanceCount,pt);Vt.renderInstances(xt,jt,an)}else Vt.render(xt,jt)};function Ye(E,H,Z){E.transparent===!0&&E.side===mn&&E.forceSinglePass===!1?(E.side=wi,E.needsUpdate=!0,hs(E,H,Z),E.side=Ur,E.needsUpdate=!0,hs(E,H,Z),E.side=mn):hs(E,H,Z)}this.compile=function(E,H,Z=null){Z===null&&(Z=E),p=Ie.get(Z),p.init(H),y.push(p),Z.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),E!==Z&&E.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const J=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Me=V.material;if(Me)if(Array.isArray(Me))for(let Pe=0;Pe<Me.length;Pe++){const et=Me[Pe];Ye(et,Z,V),J.add(et)}else Ye(Me,Z,V),J.add(Me)}),p=y.pop(),J},this.compileAsync=function(E,H,Z=null){const J=this.compile(E,H,Z);return new Promise(V=>{function Me(){if(J.forEach(function(Pe){ae.get(Pe).currentProgram.isReady()&&J.delete(Pe)}),J.size===0){V(E);return}setTimeout(Me,10)}he.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Ue=null;function mt(E){Ue&&Ue(E)}function St(){Ki.stop()}function oi(){Ki.start()}const Ki=new Nm;Ki.setAnimationLoop(mt),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(E){Ue=E,ye.setAnimationLoop(E),E===null?Ki.stop():Ki.start()},ye.addEventListener("sessionstart",St),ye.addEventListener("sessionend",oi),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(H),H=ye.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,H,N),p=Ie.get(E,y.length),p.init(H),y.push(p),oe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),yt.setFromProjectionMatrix(oe,xr,H.reversedDepth),Ae=this.localClippingEnabled,te=xe.init(this.clippingPlanes,Ae),g=W.get(E,w.length),g.init(),w.push(g),ye.enabled===!0&&ye.isPresenting===!0){const Me=v.xr.getDepthSensingMesh();Me!==null&&Jn(Me,H,-1/0,v.sortObjects)}Jn(E,H,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ge,Te),Q=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Q&&Xe.addToRenderList(g,E),this.info.render.frame++,te===!0&&xe.beginShadows();const Z=p.state.shadowsArray;Ge.render(Z,E,H),te===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=g.opaque,V=g.transmissive;if(p.setupLights(),H.isArrayCamera){const Me=H.cameras;if(V.length>0)for(let Pe=0,et=Me.length;Pe<et;Pe++){const je=Me[Pe];Qo(J,V,E,je)}Q&&Xe.render(E);for(let Pe=0,et=Me.length;Pe<et;Pe++){const je=Me[Pe];us(g,E,je,je.viewport)}}else V.length>0&&Qo(J,V,E,H),Q&&Xe.render(E),us(g,E,H);N!==null&&R===0&&(Ee.updateMultisampleRenderTarget(N),Ee.updateRenderTargetMipmap(N)),E.isScene===!0&&E.onAfterRender(v,E,H),Ce.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],te===!0&&xe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function Jn(E,H,Z,J){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||yt.intersectsSprite(E)){J&&ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(oe);const Pe=z.update(E),et=E.material;et.visible&&g.push(E,Pe,et,Z,ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||yt.intersectsObject(E))){const Pe=z.update(E),et=E.material;if(J&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ne.copy(E.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ne.copy(Pe.boundingSphere.center)),ne.applyMatrix4(E.matrixWorld).applyMatrix4(oe)),Array.isArray(et)){const je=Pe.groups;for(let ht=0,_t=je.length;ht<_t;ht++){const lt=je[ht],xt=et[lt.materialIndex];xt&&xt.visible&&g.push(E,Pe,xt,Z,ne.z,lt)}}else et.visible&&g.push(E,Pe,et,Z,ne.z,null)}}const Me=E.children;for(let Pe=0,et=Me.length;Pe<et;Pe++)Jn(Me[Pe],H,Z,J)}function us(E,H,Z,J){const V=E.opaque,Me=E.transmissive,Pe=E.transparent;p.setupLightsView(Z),te===!0&&xe.setGlobalState(v.clippingPlanes,Z),J&&pe.viewport(I.copy(J)),V.length>0&&ai(V,H,Z),Me.length>0&&ai(Me,H,Z),Pe.length>0&&ai(Pe,H,Z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Qo(E,H,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new zs(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?sc:yr,minFilter:Ps,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const Me=p.state.transmissionRenderTarget[J.id],Pe=J.viewport||I;Me.setSize(Pe.z*v.transmissionResolutionScale,Pe.w*v.transmissionResolutionScale);const et=v.getRenderTarget(),je=v.getActiveCubeFace(),ht=v.getActiveMipmapLevel();v.setRenderTarget(Me),v.getClearColor(G),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),Q&&Xe.render(Z);const _t=v.toneMapping;v.toneMapping=ts;const lt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),te===!0&&xe.setGlobalState(v.clippingPlanes,J),ai(E,Z,J),Ee.updateMultisampleRenderTarget(Me),Ee.updateRenderTargetMipmap(Me),he.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Nt=0,jt=H.length;Nt<jt;Nt++){const Ht=H[Nt],Vt=Ht.object,pt=Ht.geometry,an=Ht.material,Ut=Ht.group;if(an.side===mn&&Vt.layers.test(J.layers)){const li=an.side;an.side=wi,an.needsUpdate=!0,ds(Vt,Z,J,pt,an,Ut),an.side=li,an.needsUpdate=!0,xt=!0}}xt===!0&&(Ee.updateMultisampleRenderTarget(Me),Ee.updateRenderTargetMipmap(Me))}v.setRenderTarget(et,je,ht),v.setClearColor(G,$),lt!==void 0&&(J.viewport=lt),v.toneMapping=_t}function ai(E,H,Z){const J=H.isScene===!0?H.overrideMaterial:null;for(let V=0,Me=E.length;V<Me;V++){const Pe=E[V],et=Pe.object,je=Pe.geometry,ht=Pe.group;let _t=Pe.material;_t.allowOverride===!0&&J!==null&&(_t=J),et.layers.test(Z.layers)&&ds(et,H,Z,je,_t,ht)}}function ds(E,H,Z,J,V,Me){E.onBeforeRender(v,H,Z,J,V,Me),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(v,H,Z,J,E,Me),V.transparent===!0&&V.side===mn&&V.forceSinglePass===!1?(V.side=wi,V.needsUpdate=!0,v.renderBufferDirect(Z,H,J,V,E,Me),V.side=Ur,V.needsUpdate=!0,v.renderBufferDirect(Z,H,J,V,E,Me),V.side=mn):v.renderBufferDirect(Z,H,J,V,E,Me),E.onAfterRender(v,H,Z,J,V,Me)}function hs(E,H,Z){H.isScene!==!0&&(H=ue);const J=ae.get(E),V=p.state.lights,Me=p.state.shadowsArray,Pe=V.state.version,et=K.getParameters(E,V.state,Me,H,Z),je=K.getProgramCacheKey(et);let ht=J.programs;J.environment=E.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(E.isMeshStandardMaterial?Le:be).get(E.envMap||J.environment),J.envMapRotation=J.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,ht===void 0&&(E.addEventListener("dispose",se),ht=new Map,J.programs=ht);let _t=ht.get(je);if(_t!==void 0){if(J.currentProgram===_t&&J.lightsStateVersion===Pe)return Zs(E,et),_t}else et.uniforms=K.getUniforms(E),E.onBeforeCompile(et,v),_t=K.acquireProgram(et,je),ht.set(je,_t),J.uniforms=et.uniforms;const lt=J.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(lt.clippingPlanes=xe.uniform),Zs(E,et),J.needsLights=Js(E),J.lightsStateVersion=Pe,J.needsLights&&(lt.ambientLightColor.value=V.state.ambient,lt.lightProbe.value=V.state.probe,lt.directionalLights.value=V.state.directional,lt.directionalLightShadows.value=V.state.directionalShadow,lt.spotLights.value=V.state.spot,lt.spotLightShadows.value=V.state.spotShadow,lt.rectAreaLights.value=V.state.rectArea,lt.ltc_1.value=V.state.rectAreaLTC1,lt.ltc_2.value=V.state.rectAreaLTC2,lt.pointLights.value=V.state.point,lt.pointLightShadows.value=V.state.pointShadow,lt.hemisphereLights.value=V.state.hemi,lt.directionalShadowMap.value=V.state.directionalShadowMap,lt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,lt.spotShadowMap.value=V.state.spotShadowMap,lt.spotLightMatrix.value=V.state.spotLightMatrix,lt.spotLightMap.value=V.state.spotLightMap,lt.pointShadowMap.value=V.state.pointShadowMap,lt.pointShadowMatrix.value=V.state.pointShadowMatrix),J.currentProgram=_t,J.uniformsList=null,_t}function ea(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=ll.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function Zs(E,H){const Z=ae.get(E);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function Ks(E,H,Z,J,V){H.isScene!==!0&&(H=ue),Ee.resetTextureUnits();const Me=H.fog,Pe=J.isMeshStandardMaterial?H.environment:null,et=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ko,je=(J.isMeshStandardMaterial?Le:be).get(J.envMap||Pe),ht=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,_t=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),lt=!!Z.morphAttributes.position,xt=!!Z.morphAttributes.normal,Nt=!!Z.morphAttributes.color;let jt=ts;J.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(jt=v.toneMapping);const Ht=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Vt=Ht!==void 0?Ht.length:0,pt=ae.get(J),an=p.state.lights;if(te===!0&&(Ae===!0||E!==M)){const qn=E===M&&J.id===b;xe.setState(J,E,qn)}let Ut=!1;J.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==an.state.version||pt.outputColorSpace!==et||V.isBatchedMesh&&pt.batching===!1||!V.isBatchedMesh&&pt.batching===!0||V.isBatchedMesh&&pt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&pt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&pt.instancing===!1||!V.isInstancedMesh&&pt.instancing===!0||V.isSkinnedMesh&&pt.skinning===!1||!V.isSkinnedMesh&&pt.skinning===!0||V.isInstancedMesh&&pt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&pt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&pt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&pt.instancingMorph===!1&&V.morphTexture!==null||pt.envMap!==je||J.fog===!0&&pt.fog!==Me||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==xe.numPlanes||pt.numIntersection!==xe.numIntersection)||pt.vertexAlphas!==ht||pt.vertexTangents!==_t||pt.morphTargets!==lt||pt.morphNormals!==xt||pt.morphColors!==Nt||pt.toneMapping!==jt||pt.morphTargetsCount!==Vt)&&(Ut=!0):(Ut=!0,pt.__version=J.version);let li=pt.currentProgram;Ut===!0&&(li=hs(J,H,V));let zr=!1,Rn=!1,hr=!1;const Kt=li.getUniforms(),En=pt.uniforms;if(pe.useProgram(li.program)&&(zr=!0,Rn=!0,hr=!0),J.id!==b&&(b=J.id,Rn=!0),zr||M!==E){pe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Kt.setValue(C,"projectionMatrix",E.projectionMatrix),Kt.setValue(C,"viewMatrix",E.matrixWorldInverse);const Qn=Kt.map.cameraPosition;Qn!==void 0&&Qn.setValue(C,Ke.setFromMatrixPosition(E.matrixWorld)),Re.logarithmicDepthBuffer&&Kt.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Kt.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Rn=!0,hr=!0)}if(V.isSkinnedMesh){Kt.setOptional(C,V,"bindMatrix"),Kt.setOptional(C,V,"bindMatrixInverse");const qn=V.skeleton;qn&&(qn.boneTexture===null&&qn.computeBoneTexture(),Kt.setValue(C,"boneTexture",qn.boneTexture,Ee))}V.isBatchedMesh&&(Kt.setOptional(C,V,"batchingTexture"),Kt.setValue(C,"batchingTexture",V._matricesTexture,Ee),Kt.setOptional(C,V,"batchingIdTexture"),Kt.setValue(C,"batchingIdTexture",V._indirectTexture,Ee),Kt.setOptional(C,V,"batchingColorTexture"),V._colorsTexture!==null&&Kt.setValue(C,"batchingColorTexture",V._colorsTexture,Ee));const Xn=Z.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&_e.update(V,Z,li),(Rn||pt.receiveShadow!==V.receiveShadow)&&(pt.receiveShadow=V.receiveShadow,Kt.setValue(C,"receiveShadow",V.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(En.envMap.value=je,En.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&H.environment!==null&&(En.envMapIntensity.value=H.environmentIntensity),Rn&&(Kt.setValue(C,"toneMappingExposure",v.toneMappingExposure),pt.needsLights&&tu(En,hr),Me&&J.fog===!0&&X.refreshFogUniforms(En,Me),X.refreshMaterialUniforms(En,J,q,re,p.state.transmissionRenderTarget[E.id]),ll.upload(C,ea(pt),En,Ee)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ll.upload(C,ea(pt),En,Ee),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Kt.setValue(C,"center",V.center),Kt.setValue(C,"modelViewMatrix",V.modelViewMatrix),Kt.setValue(C,"normalMatrix",V.normalMatrix),Kt.setValue(C,"modelMatrix",V.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const qn=J.uniformsGroups;for(let Qn=0,Qs=qn.length;Qn<Qs;Qn++){const Ji=qn[Qn];ut.update(Ji,li),ut.bind(Ji,li)}}return li}function tu(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function Js(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,H,Z){const J=ae.get(E);J.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ae.get(E.texture).__webglTexture=H,ae.get(E.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Z,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){const Z=ae.get(E);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0};const dr=C.createFramebuffer();this.setRenderTarget=function(E,H=0,Z=0){N=E,D=H,R=Z;let J=!0,V=null,Me=!1,Pe=!1;if(E){const je=ae.get(E);if(je.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(C.FRAMEBUFFER,null),J=!1;else if(je.__webglFramebuffer===void 0)Ee.setupRenderTarget(E);else if(je.__hasExternalTextures)Ee.rebindTextures(E,ae.get(E.texture).__webglTexture,ae.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const lt=E.depthTexture;if(je.__boundDepthTexture!==lt){if(lt!==null&&ae.has(lt)&&(E.width!==lt.image.width||E.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ee.setupDepthRenderbuffer(E)}}const ht=E.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(Pe=!0);const _t=ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(_t[H])?V=_t[H][Z]:V=_t[H],Me=!0):E.samples>0&&Ee.useMultisampledRTT(E)===!1?V=ae.get(E).__webglMultisampledFramebuffer:Array.isArray(_t)?V=_t[Z]:V=_t,I.copy(E.viewport),k.copy(E.scissor),O=E.scissorTest}else I.copy(ze).multiplyScalar(q).floor(),k.copy(He).multiplyScalar(q).floor(),O=at;if(Z!==0&&(V=dr),pe.bindFramebuffer(C.FRAMEBUFFER,V)&&J&&pe.drawBuffers(E,V),pe.viewport(I),pe.scissor(k),pe.setScissorTest(O),Me){const je=ae.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+H,je.__webglTexture,Z)}else if(Pe){const je=H;for(let ht=0;ht<E.textures.length;ht++){const _t=ae.get(E.textures[ht]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ht,_t.__webglTexture,Z,je)}}else if(E!==null&&Z!==0){const je=ae.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,je.__webglTexture,Z)}b=-1},this.readRenderTargetPixels=function(E,H,Z,J,V,Me,Pe,et=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(je=je[Pe]),je){pe.bindFramebuffer(C.FRAMEBUFFER,je);try{const ht=E.textures[et],_t=ht.format,lt=ht.type;if(!Re.textureFormatReadable(_t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-J&&Z>=0&&Z<=E.height-V&&(E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+et),C.readPixels(H,Z,J,V,Qe.convert(_t),Qe.convert(lt),Me))}finally{const ht=N!==null?ae.get(N).__webglFramebuffer:null;pe.bindFramebuffer(C.FRAMEBUFFER,ht)}}},this.readRenderTargetPixelsAsync=async function(E,H,Z,J,V,Me,Pe,et=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(je=je[Pe]),je)if(H>=0&&H<=E.width-J&&Z>=0&&Z<=E.height-V){pe.bindFramebuffer(C.FRAMEBUFFER,je);const ht=E.textures[et],_t=ht.format,lt=ht.type;if(!Re.textureFormatReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,xt),C.bufferData(C.PIXEL_PACK_BUFFER,Me.byteLength,C.STREAM_READ),E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+et),C.readPixels(H,Z,J,V,Qe.convert(_t),Qe.convert(lt),0);const Nt=N!==null?ae.get(N).__webglFramebuffer:null;pe.bindFramebuffer(C.FRAMEBUFFER,Nt);const jt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await x_(C,jt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,xt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Me),C.deleteBuffer(xt),C.deleteSync(jt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,H=null,Z=0){const J=Math.pow(2,-Z),V=Math.floor(E.image.width*J),Me=Math.floor(E.image.height*J),Pe=H!==null?H.x:0,et=H!==null?H.y:0;Ee.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,Z,0,0,Pe,et,V,Me),pe.unbindTexture()};const ci=C.createFramebuffer(),Pi=C.createFramebuffer();this.copyTextureToTexture=function(E,H,Z=null,J=null,V=0,Me=null){Me===null&&(V!==0?(To("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=V,V=0):Me=0);let Pe,et,je,ht,_t,lt,xt,Nt,jt;const Ht=E.isCompressedTexture?E.mipmaps[Me]:E.image;if(Z!==null)Pe=Z.max.x-Z.min.x,et=Z.max.y-Z.min.y,je=Z.isBox3?Z.max.z-Z.min.z:1,ht=Z.min.x,_t=Z.min.y,lt=Z.isBox3?Z.min.z:0;else{const Xn=Math.pow(2,-V);Pe=Math.floor(Ht.width*Xn),et=Math.floor(Ht.height*Xn),E.isDataArrayTexture?je=Ht.depth:E.isData3DTexture?je=Math.floor(Ht.depth*Xn):je=1,ht=0,_t=0,lt=0}J!==null?(xt=J.x,Nt=J.y,jt=J.z):(xt=0,Nt=0,jt=0);const Vt=Qe.convert(H.format),pt=Qe.convert(H.type);let an;H.isData3DTexture?(Ee.setTexture3D(H,0),an=C.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Ee.setTexture2DArray(H,0),an=C.TEXTURE_2D_ARRAY):(Ee.setTexture2D(H,0),an=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);const Ut=C.getParameter(C.UNPACK_ROW_LENGTH),li=C.getParameter(C.UNPACK_IMAGE_HEIGHT),zr=C.getParameter(C.UNPACK_SKIP_PIXELS),Rn=C.getParameter(C.UNPACK_SKIP_ROWS),hr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ht.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ht.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ht),C.pixelStorei(C.UNPACK_SKIP_ROWS,_t),C.pixelStorei(C.UNPACK_SKIP_IMAGES,lt);const Kt=E.isDataArrayTexture||E.isData3DTexture,En=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){const Xn=ae.get(E),qn=ae.get(H),Qn=ae.get(Xn.__renderTarget),Qs=ae.get(qn.__renderTarget);pe.bindFramebuffer(C.READ_FRAMEBUFFER,Qn.__webglFramebuffer),pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,Qs.__webglFramebuffer);for(let Ji=0;Ji<je;Ji++)Kt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ae.get(E).__webglTexture,V,lt+Ji),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ae.get(H).__webglTexture,Me,jt+Ji)),C.blitFramebuffer(ht,_t,Pe,et,xt,Nt,Pe,et,C.DEPTH_BUFFER_BIT,C.NEAREST);pe.bindFramebuffer(C.READ_FRAMEBUFFER,null),pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||ae.has(E)){const Xn=ae.get(E),qn=ae.get(H);pe.bindFramebuffer(C.READ_FRAMEBUFFER,ci),pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,Pi);for(let Qn=0;Qn<je;Qn++)Kt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Xn.__webglTexture,V,lt+Qn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Xn.__webglTexture,V),En?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,qn.__webglTexture,Me,jt+Qn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,qn.__webglTexture,Me),V!==0?C.blitFramebuffer(ht,_t,Pe,et,xt,Nt,Pe,et,C.COLOR_BUFFER_BIT,C.NEAREST):En?C.copyTexSubImage3D(an,Me,xt,Nt,jt+Qn,ht,_t,Pe,et):C.copyTexSubImage2D(an,Me,xt,Nt,ht,_t,Pe,et);pe.bindFramebuffer(C.READ_FRAMEBUFFER,null),pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else En?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(an,Me,xt,Nt,jt,Pe,et,je,Vt,pt,Ht.data):H.isCompressedArrayTexture?C.compressedTexSubImage3D(an,Me,xt,Nt,jt,Pe,et,je,Vt,Ht.data):C.texSubImage3D(an,Me,xt,Nt,jt,Pe,et,je,Vt,pt,Ht):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Me,xt,Nt,Pe,et,Vt,pt,Ht.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Me,xt,Nt,Ht.width,Ht.height,Vt,Ht.data):C.texSubImage2D(C.TEXTURE_2D,Me,xt,Nt,Pe,et,Vt,pt,Ht);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ut),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,li),C.pixelStorei(C.UNPACK_SKIP_PIXELS,zr),C.pixelStorei(C.UNPACK_SKIP_ROWS,Rn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,hr),Me===0&&H.generateMipmaps&&C.generateMipmap(an),pe.unbindTexture()},this.copyTextureToTexture3D=function(E,H,Z=null,J=null,V=0){return To('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,H,Z,J,V)},this.initRenderTarget=function(E){ae.get(E).__webglFramebuffer===void 0&&Ee.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ee.setTextureCube(E,0):E.isData3DTexture?Ee.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ee.setTexture2DArray(E,0):Ee.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){D=0,R=0,N=null,pe.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xt._getUnpackColorSpace()}}const pp={type:"change"},Th={type:"start"},Bm={type:"end"},qc=new oc,mp=new jr,MM=Math.cos(70*Zt.DEG2RAD),kn=new S,vi=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fu=1e-6;class wM extends Im{constructor(e,t=null){super(e,t),this.state=Qt.NONE,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wo.ROTATE,MIDDLE:wo.DOLLY,RIGHT:wo.PAN},this.touches={ONE:yo.ROTATE,TWO:yo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new S,this._lastQuaternion=new nn,this._lastTargetPosition=new S,this._quat=new nn().setFromUnitVectors(e.up,new S(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vf,this._sphericalDelta=new Vf,this._scale=1,this._panOffset=new S,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new S,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=TM.bind(this),this._onPointerDown=EM.bind(this),this._onPointerUp=AM.bind(this),this._onContextMenu=NM.bind(this),this._onMouseWheel=PM.bind(this),this._onKeyDown=DM.bind(this),this._onTouchStart=LM.bind(this),this._onTouchMove=IM.bind(this),this._onMouseDown=RM.bind(this),this._onMouseMove=CM.bind(this),this._interceptControlDown=UM.bind(this),this._interceptControlUp=kM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pp),this.update(),this.state=Qt.NONE}update(e=null){const t=this.object.position;kn.copy(t).sub(this.target),kn.applyQuaternion(this._quat),this._spherical.setFromVector3(kn),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=vi:i>Math.PI&&(i-=vi),r<-Math.PI?r+=vi:r>Math.PI&&(r-=vi),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(kn.setFromSpherical(this._spherical),kn.applyQuaternion(this._quatInverse),t.copy(this.target).add(kn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=kn.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new S(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new S(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=kn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(qc.origin.copy(this.object.position),qc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qc.direction))<MM?this.object.lookAt(this.target):(mp.setFromNormalAndCoplanarPoint(this.object.up,this.target),qc.intersectPlane(mp,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Fu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fu||this._lastTargetPosition.distanceToSquared(this.target)>Fu?(this.dispatchEvent(pp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vi/60*this.autoRotateSpeed*e:vi/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){kn.setFromMatrixColumn(t,0),kn.multiplyScalar(-e),this._panOffset.add(kn)}_panUp(e,t){this.screenSpacePanning===!0?kn.setFromMatrixColumn(t,1):(kn.setFromMatrixColumn(t,0),kn.crossVectors(this.object.up,kn)),kn.multiplyScalar(e),this._panOffset.add(kn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;kn.copy(r).sub(this.target);let s=kn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vi*this._rotateDelta.x/t.clientHeight),this._rotateUp(vi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vi*this._rotateDelta.x/t.clientHeight),this._rotateUp(vi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function EM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function TM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function AM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bm),this.state=Qt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function RM(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case wo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Qt.DOLLY;break;case wo.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Qt.ROTATE}break;case wo.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(Th)}function CM(n){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function PM(n){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(n.preventDefault(),this.dispatchEvent(Th),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Bm))}function DM(n){this.enabled!==!1&&this._handleKeyDown(n)}function LM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case yo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Qt.TOUCH_ROTATE;break;case yo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case yo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Qt.TOUCH_DOLLY_PAN;break;case yo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(Th)}function IM(n){switch(this._trackPointer(n),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Qt.NONE}}function NM(n){this.enabled!==!1&&n.preventDefault()}function UM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ys=new Lm,ri=new S,qr=new S,pn=new nn,gp={X:new S(1,0,0),Y:new S(0,1,0),Z:new S(0,0,1)},Ou={type:"change"},_p={type:"mouseDown",mode:null},vp={type:"mouseUp",mode:null},xp={type:"objectChange"};class FM extends Im{constructor(e,t=null){super(void 0,t);const i=new GM(this);this._root=i;const r=new WM;this._gizmo=r,i.add(r);const s=new XM;this._plane=s,i.add(s);const o=this;function a(y,v){let L=v;Object.defineProperty(o,y,{get:function(){return L!==void 0?L:v},set:function(D){L!==D&&(L=D,s[y]=D,r[y]=D,o.dispatchEvent({type:y+"-changed",value:D}),o.dispatchEvent(Ou))}}),o[y]=v,s[y]=v,r[y]=v}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const c=new S,l=new S,u=new nn,d=new nn,h=new S,f=new nn,m=new S,_=new S,g=new S,p=0,w=new S;a("worldPosition",c),a("worldPositionStart",l),a("worldQuaternion",u),a("worldQuaternionStart",d),a("cameraPosition",h),a("cameraQuaternion",f),a("pointStart",m),a("pointEnd",_),a("rotationAxis",g),a("rotationAngle",p),a("eye",w),this._offset=new S,this._startNorm=new S,this._endNorm=new S,this._cameraScale=new S,this._parentPosition=new S,this._parentQuaternion=new nn,this._parentQuaternionInv=new nn,this._parentScale=new S,this._worldScaleStart=new S,this._worldQuaternionInv=new nn,this._worldScale=new S,this._positionStart=new S,this._quaternionStart=new nn,this._scaleStart=new S,this._getPointer=OM.bind(this),this._onPointerDown=BM.bind(this),this._onPointerHover=zM.bind(this),this._onPointerMove=HM.bind(this),this._onPointerUp=VM.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&ys.setFromCamera(e,this.camera);const t=zu(this._gizmo.picker[this.mode],ys);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&ys.setFromCamera(e,this.camera);const t=zu(this._plane,ys,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,_p.mode=this.mode,this.dispatchEvent(_p)}}pointerMove(e){const t=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&ys.setFromCamera(e,this.camera);const o=zu(this._plane,ys,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(pn.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(ri.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(ri.setFromMatrixPosition(r.parent.matrixWorld)))),r.position.x=Math.max(this.minX,Math.min(this.maxX,r.position.x)),r.position.y=Math.max(this.minY,Math.min(this.maxY,r.position.y)),r.position.z=Math.max(this.minZ,Math.min(this.maxZ,r.position.z));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),qr.set(a,a,a)}else ri.copy(this.pointStart),qr.copy(this.pointEnd),ri.applyQuaternion(this._worldQuaternionInv),qr.applyQuaternion(this._worldQuaternionInv),qr.divide(ri),t.search("X")===-1&&(qr.x=1),t.search("Y")===-1&&(qr.y=1),t.search("Z")===-1&&(qr.z=1);r.scale.copy(this._scaleStart).multiply(qr),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(ri.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(ri.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(gp[t]),ri.copy(gp[t]),s==="local"&&ri.applyQuaternion(this.worldQuaternion),ri.cross(this.eye),ri.length()===0?c=!0:this.rotationAngle=this._offset.dot(ri.normalize())*a),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(pn.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(pn.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Ou),this.dispatchEvent(xp)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(vp.mode=this.mode,this.dispatchEvent(vp)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Ou),this.dispatchEvent(xp),this.pointStart.copy(this.pointEnd))}getRaycaster(){return ys}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,i,r){const s=this._gizmo.materialLib;s.xAxis.color.set(e),s.yAxis.color.set(t),s.zAxis.color.set(i),s.active.color.set(r),s.xAxisTransparent.color.set(e),s.yAxisTransparent.color.set(t),s.zAxisTransparent.color.set(i),s.activeTransparent.color.set(r),s.xAxis._color&&s.xAxis._color.set(e),s.yAxis._color&&s.yAxis._color.set(t),s.zAxis._color&&s.zAxis._color.set(i),s.active._color&&s.active._color.set(r),s.xAxisTransparent._color&&s.xAxisTransparent._color.set(e),s.yAxisTransparent._color&&s.yAxisTransparent._color.set(t),s.zAxisTransparent._color&&s.zAxisTransparent._color.set(i),s.activeTransparent._color&&s.activeTransparent._color.set(r)}}function OM(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{const e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function zM(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function BM(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function HM(n){this.enabled&&this.pointerMove(this._getPointer(n))}function VM(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function zu(n,e,t){const i=e.intersectObject(n,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||t)return i[r];return!1}const $c=new In,en=new S(0,1,0),yp=new S(0,0,0),Sp=new Bt,Yc=new nn,ul=new nn,pr=new S,bp=new Bt,ya=new S(1,0,0),Ms=new S(0,1,0),Sa=new S(0,0,1),jc=new S,la=new S,ua=new S;class GM extends Sn{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class WM extends Sn{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new yn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Ei({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const l=e.clone();l.color.setHex(65280),l.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const d=e.clone();d.opacity=.25;const h=e.clone();h.color.setHex(16776960),h.opacity=.25;const f=e.clone();f.color.setHex(16776960);const m=e.clone();m.color.setHex(7895160),this.materialLib={xAxis:s,yAxis:o,zAxis:a,active:f,xAxisTransparent:c,yAxisTransparent:l,zAxisTransparent:u,activeTransparent:h};const _=new ii(0,.04,.1,12);_.translate(0,.05,0);const g=new Tn(.08,.08,.08);g.translate(0,.04,0);const p=new zt;p.setAttribute("position",new Dt([0,0,0,1,0,0],3));const w=new ii(.0075,.0075,.5,3);w.translate(0,.25,0);function y($,j){const re=new Ts($,.0075,3,64,j*Math.PI*2);return re.rotateY(Math.PI/2),re.rotateX(Math.PI/2),re}function v(){const $=new zt;return $.setAttribute("position",new Dt([0,0,0,1,1,1],3)),$}const L={X:[[new we(_,s),[.5,0,0],[0,0,-Math.PI/2]],[new we(_,s),[-.5,0,0],[0,0,Math.PI/2]],[new we(w,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new we(_,o),[0,.5,0]],[new we(_,o),[0,-.5,0],[Math.PI,0,0]],[new we(w,o)]],Z:[[new we(_,a),[0,0,.5],[Math.PI/2,0,0]],[new we(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new we(w,a),null,[Math.PI/2,0,0]]],XYZ:[[new we(new Ds(.1,0),d),[0,0,0]]],XY:[[new we(new Tn(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new we(new Tn(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new we(new Tn(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},D={X:[[new we(new ii(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new we(new ii(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new we(new ii(.2,0,.6,4),i),[0,.3,0]],[new we(new ii(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new we(new ii(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new we(new ii(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new we(new Ds(.2,0),i)]],XY:[[new we(new Tn(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new we(new Tn(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new we(new Tn(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},R={START:[[new we(new Ds(.01,2),r),null,null,null,"helper"]],END:[[new we(new Ds(.01,2),r),null,null,null,"helper"]],DELTA:[[new ln(v(),r),null,null,null,"helper"]],X:[[new ln(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ln(p,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ln(p,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},N={XYZE:[[new we(y(.5,1),m),null,[0,Math.PI/2,0]]],X:[[new we(y(.5,.5),s)]],Y:[[new we(y(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new we(y(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new we(y(.75,1),h),null,[0,Math.PI/2,0]]]},b={AXIS:[[new ln(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new we(new ns(.25,10,8),i)]],X:[[new we(new Ts(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new we(new Ts(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new we(new Ts(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new we(new Ts(.75,.1,2,24),i)]]},I={X:[[new we(g,s),[.5,0,0],[0,0,-Math.PI/2]],[new we(w,s),[0,0,0],[0,0,-Math.PI/2]],[new we(g,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new we(g,o),[0,.5,0]],[new we(w,o)],[new we(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new we(g,a),[0,0,.5],[Math.PI/2,0,0]],[new we(w,a),[0,0,0],[Math.PI/2,0,0]],[new we(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new we(new Tn(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new we(new Tn(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new we(new Tn(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new we(new Tn(.1,.1,.1),d)]]},k={X:[[new we(new ii(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new we(new ii(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new we(new ii(.2,0,.6,4),i),[0,.3,0]],[new we(new ii(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new we(new ii(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new we(new ii(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new we(new Tn(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new we(new Tn(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new we(new Tn(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new we(new Tn(.2,.2,.2),i),[0,0,0]]]},O={X:[[new ln(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ln(p,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ln(p,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function G($){const j=new Sn;for(const re in $)for(let q=$[re].length;q--;){const ge=$[re][q][0].clone(),Te=$[re][q][1],ze=$[re][q][2],He=$[re][q][3],at=$[re][q][4];ge.name=re,ge.tag=at,Te&&ge.position.set(Te[0],Te[1],Te[2]),ze&&ge.rotation.set(ze[0],ze[1],ze[2]),He&&ge.scale.set(He[0],He[1],He[2]),ge.updateMatrix();const yt=ge.geometry.clone();yt.applyMatrix4(ge.matrix),ge.geometry=yt,ge.renderOrder=1/0,ge.position.set(0,0,0),ge.rotation.set(0,0,0),ge.scale.set(1,1,1),j.add(ge)}return j}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=G(L)),this.add(this.gizmo.rotate=G(N)),this.add(this.gizmo.scale=G(I)),this.add(this.picker.translate=G(D)),this.add(this.picker.rotate=G(M)),this.add(this.picker.scale=G(k)),this.add(this.helper.translate=G(R)),this.add(this.helper.rotate=G(b)),this.add(this.helper.scale=G(O)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:ul;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(pn.setFromEuler($c.set(0,0,0)),o.quaternion.copy(i).multiply(pn),Math.abs(en.copy(ya).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(pn.setFromEuler($c.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(pn),Math.abs(en.copy(Ms).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(pn.setFromEuler($c.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(pn),Math.abs(en.copy(Sa).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(pn.setFromEuler($c.set(0,Math.PI/2,0)),en.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Sp.lookAt(yp,en,Ms)),o.quaternion.multiply(pn),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),ri.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),ri.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(ri),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(en.copy(ya).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(en.copy(Ms).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(en.copy(Sa).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(en.copy(Sa).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(en.copy(ya).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(en.copy(Ms).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Yc.copy(i),en.copy(this.eye).applyQuaternion(pn.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Sp.lookAt(this.eye,yp,Ms)),o.name==="X"&&(pn.setFromAxisAngle(ya,Math.atan2(-en.y,en.z)),pn.multiplyQuaternions(Yc,pn),o.quaternion.copy(pn)),o.name==="Y"&&(pn.setFromAxisAngle(Ms,Math.atan2(en.x,en.z)),pn.multiplyQuaternions(Yc,pn),o.quaternion.copy(pn)),o.name==="Z"&&(pn.setFromAxisAngle(Sa,Math.atan2(en.y,en.x)),pn.multiplyQuaternions(Yc,pn),o.quaternion.copy(pn))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(c){return o.name===c})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}}class XM extends we{constructor(){super(new rs(1e5,1e5,2,2),new yn({visible:!1,wireframe:!0,side:mn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),jc.copy(ya).applyQuaternion(t==="local"?this.worldQuaternion:ul),la.copy(Ms).applyQuaternion(t==="local"?this.worldQuaternion:ul),ua.copy(Sa).applyQuaternion(t==="local"?this.worldQuaternion:ul),en.copy(la),this.mode){case"translate":case"scale":switch(this.axis){case"X":en.copy(this.eye).cross(jc),pr.copy(jc).cross(en);break;case"Y":en.copy(this.eye).cross(la),pr.copy(la).cross(en);break;case"Z":en.copy(this.eye).cross(ua),pr.copy(ua).cross(en);break;case"XY":pr.copy(ua);break;case"YZ":pr.copy(jc);break;case"XZ":en.copy(ua),pr.copy(la);break;case"XYZ":case"E":pr.set(0,0,0);break}break;default:pr.set(0,0,0)}pr.length()===0?this.quaternion.copy(this.cameraQuaternion):(bp.lookAt(ri.set(0,0,0),pr,en),this.quaternion.setFromRotationMatrix(bp)),super.updateMatrixWorld(e)}}const Hm=.32,Vm=n=>Math.max(0,Math.min(1,n));function qM(n,e){const t=e.shadeMax-e.shadeMin;return t>1e-6?Vm((n.shade-e.shadeMin)/t):.5}function $M(n,e=rc){const t=Math.pow(Vm(n.density),e.heightRise),i=1-e.heightJitter+e.heightJitter*qM(n,e);return e.heightMin+(e.heightMax-e.heightMin)*t*i}const YM=[.78,.48,1,.3,.9,.6];function jM(){const n=new Tn(1,1,1);n.translate(0,.5,0);const e=new Float32Array(72);for(let t=0;t<24;t++){const i=YM[Math.floor(t/4)];e[t*3]=i,e[t*3+1]=i,e[t*3+2]=i}return n.setAttribute("color",new gi(e,3)),n}function ZM(n,e,t,i=rc){const r=new Float32Array(n.length*16),s=new Float32Array(n.length*3),o=new Bt,a=new nn().setFromAxisAngle(new S(0,1,0),t),c=new S,l=new S;for(let u=0;u<n.length;u++){const d=n[u];c.set(d.x,e(d.x,d.z)+Hm,d.z),l.set(d.width,$M(d,i),d.depth),o.compose(c,a,l).toArray(r,u*16),s[u*3]=d.shade*.82,s[u*3+1]=d.shade*.91,s[u*3+2]=d.shade}return{matrices:r,colors:s,count:n.length}}function KM(n,e=!0){n.userData.terrainContours=!0,n.userData.contourSmoothing=e,n.onBeforeCompile=t=>{t.uniforms.contourWidth={value:n.userData.contourSmoothing?1.2:.8},t.vertexShader=`varying float vContourHeight;
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
    `)},n.customProgramCacheKey=()=>`terrain-contours-hillshade-${n.userData.contourSmoothing?1:0}`}const Zc=32,JM=.025,mr=JM;function Gm(n,e){const t=new An,i=new yn({vertexColors:!0,transparent:!0,opacity:.88,side:mn,depthWrite:!0});e&&KM(i,e.smoothing);const r=[],s=new kt,o=new Float32Array(n.size*n.size*3),a=new Uint32Array(n.size*n.size);let c=0,l=!1;for(let f=0;f<n.size-1;f+=Zc)for(let m=0;m<n.size-1;m+=Zc){const _=Math.min(n.size-1,m+Zc),g=Math.min(n.size-1,f+Zc),p=(_-m)*(g-f)*12*3,w=new gi(new Float32Array(p),3).setUsage(xl),y=new gi(new Float32Array(p),3).setUsage(xl),v=new zt;v.setAttribute("position",w),v.setAttribute("color",y);const L=-n.extent+m*n.spacing,D=-n.extent+_*n.spacing,R=-n.extentZ+f*n.spacingZ,N=-n.extentZ+g*n.spacingZ;v.boundingBox=new as(new S(L,0,R),new S(D,180,N)),v.boundingSphere=v.boundingBox.getBoundingSphere(new cs);const b=new we(v,i);b.userData.terrainChunk={minX:m,maxX:_,minZ:f,maxZ:g},b.renderOrder=-2,r.push({minX:m,maxX:_,minZ:f,maxZ:g,mesh:b,position:w,color:y}),t.add(b)}const u=(f,m)=>{const _=-n.extent+f*n.spacing,g=-n.extentZ+m*n.spacingZ,p=m*n.size+f,w=n.data[p];if(a[p]!==c){const y=Math.pow(Zt.clamp(w/180,0,1),.65);s.setHSL(.57,.35*(1-y)+.06,.06+y*.68,pi),o[p*3]=s.r,o[p*3+1]=s.g,o[p*3+2]=s.b,a[p]=c}return{x:_,y:w,z:g,r:o[p*3],g:o[p*3+1],b:o[p*3+2]}},d=f=>{let m=0;const _=p=>{f.position.setXYZ(m,p.x,p.y,p.z),f.color.setXYZ(m++,p.r,p.g,p.b)},g=(p,w,y)=>{if(p.y>=mr&&w.y>=mr&&y.y>=mr){_(p),_(w),_(y);return}const v=[p,w,y],L=[];for(let D=0;D<3;D++){const R=v[D],N=v[(D+1)%3];if(R.y>=mr&&L.push(R),R.y>=mr!=N.y>=mr){const b=(mr-R.y)/(N.y-R.y),M=Math.pow(mr/180,.65);s.setHSL(.57,.35*(1-M)+.06,.06+M*.68,pi),L.push({x:R.x+(N.x-R.x)*b,y:mr,z:R.z+(N.z-R.z)*b,r:s.r,g:s.g,b:s.b})}}for(let D=1;D<L.length-1;D++)_(L[0]),_(L[D]),_(L[D+1])};for(let p=f.minZ;p<f.maxZ;p++)for(let w=f.minX;w<f.maxX;w++){const y=u(w,p),v=u(w+1,p),L=u(w+1,p+1),D=u(w,p+1);Math.max(y.y,v.y,L.y,D.y)<mr||(g(y,v,L),g(y,L,D))}f.mesh.geometry.setDrawRange(0,m),f.mesh.visible=m>0;for(const p of[f.position,f.color])m&&p.addUpdateRange(0,m*3),p.needsUpdate=!0},h=f=>{if(!l&&!(f&&![f.minX,f.maxX,f.minZ,f.maxZ].every(Number.isFinite))&&!(f&&(f.minX>f.maxX||f.minZ>f.maxZ))){c=c+1>>>0,c||(a.fill(0),c=1);for(const m of r)f&&(m.maxX<f.minX||m.minX>f.maxX||m.maxZ<f.minZ||m.minZ>f.maxZ)||d(m)}};return h(),{root:t,update:h,dispose(){if(!l){l=!0;for(const f of r)f.mesh.geometry.dispose();i.dispose(),t.removeFromParent(),t.clear()}}}}function QM(n,e){const t=Gm(n,e);for(const i of t.root.children){const r=i,s=r.geometry.drawRange.count;for(const o of["position","color"]){const a=r.geometry.getAttribute(o);r.geometry.setAttribute(o,new gi(a.array.slice(0,s*3),3))}r.geometry.setDrawRange(0,s)}return t.root}const ew=5,tw=Hg,Bu=40,Mp=65;function nw(n){if(n<=Bu*tt)return 1;if(n>=Mp*tt)return 0;const e=(n/tt-Bu)/(Mp-Bu);return 1-e*e*(3-2*e)}const iw=`
  varying vec2 vMapPosition;
  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vMapPosition = worldPosition.xz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,rw=`
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
`;function sw(n,e){const t=new rs(n*2,e*2);t.rotateX(-Math.PI/2);const i=new kr({uniforms:{majorColor:{value:new kt(16777215)},minorColor:{value:new kt(16777215)},majorStep:{value:ew*tt},minorStep:{value:tw*tt},minorOpacity:{value:1}},vertexShader:iw,fragmentShader:rw,transparent:!0,depthWrite:!1,side:mn}),r=new we(t,i);return r.position.y=-2,r.renderOrder=-1,r}function Wm(n,e){n.material.uniforms.minorOpacity.value=nw(e)}const Hu=[{label:"N",degrees:0,x:0,z:-1},{label:"E",degrees:90,x:1,z:0},{label:"S",degrees:180,x:0,z:1},{label:"W",degrees:270,x:-1,z:0}];function ow(n){const e=new S(0,0,-1).transformDirection(n.matrixWorldInverse);return Math.atan2(-e.y,e.x)+Math.PI/2}function aw(n){const e=document.createElement("div");e.className="map-compass",e.setAttribute("aria-label","地图方向：正北0度，东90度，南180度，西270度");const t=document.createElement("div");t.className="map-compass-dial",e.append(t);const i=Hu.map(c=>{const l=document.createElement("span");return l.className=`compass-${c.label.toLowerCase()}`,l.textContent=c.label,l.title=`${c.label} ${c.degrees}°`,t.append(l),l}),r=document.createElement("small");r.textContent="N = 0°",e.append(r),n.append(e);const s=Hu.map(c=>{const l=document.createElement("span");return l.className="map-cardinal",l.textContent=c.label,l.setAttribute("aria-label",`${c.label} ${c.degrees}°`),n.append(l),l}),o=new S;let a=NaN;return{update(c,l,u,d,h){c.updateMatrixWorld();const f=ow(c);(Math.abs(f-a)>1e-4||!Number.isFinite(a))&&(t.style.transform=`rotate(${f}rad)`,i.forEach(m=>{m.style.transform=`translate(-50%,-50%) rotate(${-f}rad)`}),a=f),Hu.forEach((m,_)=>{const g=s[_];o.set(m.x*d,.2,m.z*h).project(c);const p=Number.isFinite(o.x)&&Number.isFinite(o.y)&&o.z>=-1&&o.z<=1&&Math.abs(o.x)<1.1&&Math.abs(o.y)<1.1;g.hidden=!p,p&&(g.style.left=`${Math.max(14,Math.min(l-14,(o.x+1)*l/2))}px`,g.style.top=`${Math.max(14,Math.min(u-14,(1-o.y)*u/2))}px`)})},dispose(){e.remove(),s.forEach(c=>c.remove())}}}const Vu=21,cw=7,wp=14;function Xm(n){const e=[],t=(r,s,o,a)=>{e.push(new S(r,s,0),new S(o,a,0))};for(const r of[Vu,cw])t(-r,-r,r,-r),t(r,-r,r,r),t(r,r,-r,r),t(-r,r,-r,-r);for(const r of[-1,1])for(const s of[-1,1])t(r*Vu,s*Vu,r*wp,s*wp);const i=new K_(new zt().setFromPoints(e),new Ei({color:n,transparent:!0,opacity:.9,depthTest:!1}));return i.name="escort-marker",i.visible=!1,i}const Kc=25,Jc=80,da=1;function lw(n,e){if(Number.isNaN(n))return e??1;const t=Math.max(0,n/tt);return e===1?t>=Jc+6?3:t>=Kc+2?2:1:e===2?t<=Kc-2?1:t>=Jc+6?3:2:e===3?t<=Kc-2?1:t<=Jc-6?2:3:t<Kc?1:t<Jc?2:3}const Ca=(n,e)=>n<e?-1:n>e?1:0,uw=new Intl.Collator("en",{sensitivity:"variant"}),dw=n=>n.icon==="air-filled"||n.icon==="air-outline",qm=n=>n.status==="active"&&n.tgt===!0,$m=n=>n.status==="active"&&n.escort===!0&&n.faction!=="enemy",Ep=n=>qm(n)||$m(n)?1:0;function Tp(n){const e={x:0,y:0,z:0};for(const h of n)e.x+=h.position.x/n.length,e.y+=h.position.y/n.length,e.z+=h.position.z/n.length;const t=h=>Math.hypot(h.position.x-e.x,h.position.y-e.y,h.position.z-e.z);let i=n[0],r=t(i),s,o=1/0;const a=new Map;let c=!1,l=!1;for(const h of n){const f=t(h),m=Ep(h)-Ep(i);(m>0||m===0&&(f<r||f===r&&Ca(h.id,i.id)<0))&&(i=h,r=f),dw(h)&&(!s||f<o||f===o&&Ca(h.id,s.id)<0)&&(s=h,o=f),a.set(h.label,(a.get(h.label)??0)+1),c||=qm(h),l||=$m(h)}const u=[...a.keys()].filter(h=>h!==i.label).sort((h,f)=>uw.compare(h,f)||Ca(h,f)),d=[i.label,...u].map(h=>{const f=a.get(h);return f>1?`${h} ×${f}`:h}).join(`
`);return{representativeId:i.id,memberIds:n.map(h=>h.id),label:d,hasTgt:c,hasEscort:l,...s?{airRepresentativeId:s.id}:{}}}function hw(n,e){const t=[...n].sort((u,d)=>Ca(u.id,d.id));if(e===1)return t.map(u=>Tp([u]));const i=e===2?54:68,r=i*i,s=da*da,o=new Map,a=[],c=(u,d,h,f)=>`${u}:${d}:${h}:${f}`,l=(u,d)=>`${u}:${d}`;for(const u of t){if(u.status!=="active"||!u.onScreen||!Number.isFinite(u.screenX)||!Number.isFinite(u.screenY)||!Number.isFinite(u.position.x)||!Number.isFinite(u.position.y)||!Number.isFinite(u.position.z)){a.push({seed:u,members:[u]});continue}const d=Math.floor(u.position.x/da),h=Math.floor(u.position.y/da),f=Math.floor(u.position.z/da),m=Math.floor(u.screenX/i),_=Math.floor(u.screenY/i);let g;for(let p=-1;p<=1;p++)for(let w=-1;w<=1;w++)for(let y=-1;y<=1;y++){const v=o.get(c(u.faction,d+p,h+w,f+y));if(v)for(let L=-1;L<=1;L++)for(let D=-1;D<=1;D++){const R=v.get(l(m+L,_+D));if(R)for(const N of R){const b=u.position.x-N.seed.position.x,M=u.position.y-N.seed.position.y,I=u.position.z-N.seed.position.z;if(b*b+M*M+I*I>s)continue;const k=u.screenX-N.seed.screenX,O=u.screenY-N.seed.screenY;k*k+O*O<=r&&(!g||Ca(N.seed.id,g.seed.id)<0)&&(g=N)}}}if(g)g.members.push(u);else{const p={seed:u,members:[u]};a.push(p);const w=c(u.faction,d,h,f);let y=o.get(w);y||(y=new Map,o.set(w,y));const v=l(m,_),L=y.get(v);L?L.push(p):y.set(v,[p])}}return a.map(u=>Tp(u.members))}const Qc=12,Ap=.675,fw=.15,pw=5e3;function Gu(n,e){const t=Number.isFinite(e)&&e>0?e:Qc*Ap/12,i=n===1?Math.min(24*t/Qc,Math.max(10*t/Qc,Ap)):(n===2?15:17)*t/Qc;return Math.min(pw,Math.max(fw,i))}function mw(n){const e=new An;e.name="far-air-display",e.visible=!1;const t=new we(new Vl(2.2,3.3,20),new yn({color:n,transparent:!0,opacity:.8,side:mn,depthTest:!1}));t.rotation.x=-Math.PI/2;const i=new ln(new zt().setFromPoints([new S(0,.2,0),new S(0,1,0)]),new Ei({color:n,transparent:!0,opacity:.8,depthTest:!1})),r=Array.from({length:65},(a,c)=>{const l=c/64*Math.PI*2;return new S(Math.cos(l)*7.2,Math.sin(l)*7.2,0)}),s=new ln(new zt().setFromPoints(r),new Ei({color:n,transparent:!0,opacity:.9,depthTest:!1})),o=Xm(n);return t.add(s,o),e.add(t,i),{root:e,base:t,pole:i,tgt:s,escort:o}}function gw(n,e,t){const{tier:i,representative:r,status:s,scale:o}=t,a=s!=="wreck",c=n.base!==null;n.base&&(n.base.visible=r&&a&&i!==3,n.base.scale.setScalar((t.baseScale??o)/.675)),n.icon.visible=r&&a,n.icon.scale.setScalar(o),n.icon.position.y=t.iconHeight,n.pole.visible=r&&a&&i!==3,n.pole.userData.naturalTop=t.poleHeight,n.wreck.visible=r&&s!=="active",n.wreck.scale.setScalar(o/.675),e.root.visible=r&&s==="active"&&i===3&&t.hasAir,e.base.scale.setScalar((t.farBaseScale??o)/.675),e.base.position.y=1.5,e.tgt.scale.setScalar(.675),e.escort.scale.setScalar(.675),e.tgt.visible=t.hasTgt&&!c,e.escort.visible=t.hasEscort&&!c&&t.faction!=="enemy";const l=e.pole.geometry.getAttribute("position"),u=Math.max(t.airAltitude,.6);e.pole.userData.naturalTop=u,l.getY(1)!==u&&(l.setY(1,u),l.needsUpdate=!0,e.pole.geometry.computeBoundingSphere()),n.label.position.y=i===3?t.hasAir?u:1.5:t.poleHeight;const d=n.label.userData.dom;d.textContent!==t.label&&(d.textContent=t.label),d.style.whiteSpace="pre",d.style.fontSize=i===1?"14px":i===2?"13px":"12px",d.style.lineHeight="1.15";const h=r&&n.labelFade>0&&(i!==3||t.faction==="squadron");d.hidden=!h,n.label.userData.displayVisible=h}const _w=[[-5,-5],[0,7],[5,-5]],vw=[[-4,-4],[-4,2],[0,6],[4,2],[4,-4]],xw=[[-4,-4],[-4,4],[4,4],[4,-4]],yw=[[0,5.8],[-3.25,-3.1],[3.25,-3.1]];function Rp(n){const e=new Am;e.moveTo(n[0][0],n[0][1]);for(const[t,i]of n.slice(1))e.lineTo(t,i);return e.closePath(),new wh(e)}function Wu(n,e){return new yn({color:n,transparent:!0,opacity:e,side:mn,depthTest:!1,depthWrite:!1})}function Sw(n,e){const t=new An,i=n==="ground"?xw:n==="ship"?vw:_w,r=new ln(new zt().setFromPoints(i.map(([o,a])=>new S(o,a,0))),new Ei({color:e,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1}));if(r.name="outline",t.add(r),n==="air-filled"){const o=new we(Rp(yw),Wu(e,.9));o.name="filledinner",t.add(o)}else if(n==="air-outline"){const o=new we(new Oa(.65,32),Wu(e,.9));o.name="dot",o.position.y=-.3,t.add(o)}const s=new we(Rp(i),Wu(e,0));return s.name="pickmesh",t.add(s),t}function $s(n){return!n.intangible&&(n.icon==="ground"||n.icon==="ship")}function ac(n,e,t){return new S(e.x,$s(n)?t(e.x,e.z):e.y,e.z)}function Wl(n,e,t,i){const r=ac(n,e,t);return n.intangible||(r.y=$s(n)?r.y+i:Math.max(r.y,t(r.x,r.z)+i)),r}const dl=8,wl=1e-9,vo=new S,qi=new S,Dn=new S,ha=new S,fi=new S,Ss=new S,Xu=new S,ir=new Ot,Ir=new Bt,qu=new Bt,Ro=Array.from({length:8},()=>new Ot),bw=Array.from({length:16},()=>new Ot),Mw=Array.from({length:16},()=>new Ot),ww=[0,1,2],Cp=[0,1],Ew=[0],el=new Ot,tl=new Ot;function Va(n,e){switch(e){case 0:return n.w+n.x;case 1:return n.w-n.x;case 2:return n.w+n.y;case 3:return n.w-n.y;case 4:return n.w+n.z;default:return n.w-n.z}}function El(n,e,t){if(!Number.isFinite(e.w)||e.w<=0)return;const i=(e.x/e.w+1)*t.width/2,r=(1-e.y/e.w)*t.height/2;!Number.isFinite(i)||!Number.isFinite(r)||(n.left=Math.min(n.left,i),n.right=Math.max(n.right,i),n.top=Math.min(n.top,r),n.bottom=Math.max(n.bottom,r))}function Pp(n,e,t){let i=bw,r=Mw,s=n.length;n.forEach((o,a)=>i[a].copy(Ro[o]));for(let o=0;o<6&&s;o++){let a=0;for(let c=0;c<s;c++){const l=i[(c+s-1)%s],u=i[c],d=Va(l,o),h=Va(u,o);d>=0!=h>=0&&r[a++].copy(l).lerp(u,d/(d-h)),h>=0&&r[a++].copy(u)}s=a,[i,r]=[r,i]}for(let o=0;o<s;o++)El(e,i[o],t)}function Dp(n,e,t){el.set(n.x,n.y,n.z,1).applyMatrix4(Ir),tl.set(e.x,e.y,e.z,1).applyMatrix4(Ir);let i=0,r=1;for(let o=0;o<6;o++){const a=Va(el,o),c=Va(tl,o);if(!Number.isFinite(a)||!Number.isFinite(c)||a<0&&c<0)return null;if(a>=0!=c>=0){const l=a/(a-c);a<0?i=Math.max(i,l):r=Math.min(r,l)}}if(i>r)return null;const s={left:1/0,right:-1/0,top:1/0,bottom:-1/0};return ir.copy(el).lerp(tl,i),El(s,ir,t),ir.copy(el).lerp(tl,r),El(s,ir,t),Number.isFinite(s.right)?s:null}function Tl(n){return Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z)}function bo(n,e){const{camera:t,width:i,height:r}=e;Xu.copy(n).applyMatrix4(t.matrixWorldInverse);const s=-Xu.z;if(!Tl(Xu)||s<t.near||s>t.far||(Ss.copy(n).project(t),!Tl(Ss)||Ss.z<-1-wl||Ss.z>1+wl))return null;const o=(Ss.x+1)*i/2,a=(1-Ss.y)*r/2;return Number.isFinite(o)&&Number.isFinite(a)?{x:o,y:a,z:Ss.z}:null}function Ym(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function Ah(n){if(!n)return!1;const e=t=>t.visible&&t.opacity>0;return Array.isArray(n)?n.some(e):e(n)}function Tw(n,e,t){const i=n.geometry,r=i.getAttribute("position"),s=i.index;if(!r)return;const o=s?.count??r.count,a=n.isMesh,c=n.isPoints,l=a?ww:c?Ew:Cp,u=a?3:c||!n.isLineSegments?1:2,d=Array.isArray(n.material)?i.groups:[{start:0,count:o,materialIndex:0}];for(const h of d){const f=Array.isArray(n.material)?n.material[h.materialIndex??0]:n.material;if(!Ah(f))continue;const m=Math.max(h.start,i.drawRange.start),_=Math.min(o,h.start+h.count,i.drawRange.start+i.drawRange.count);for(let g=m;g+l.length<=_;g+=u){let p=!0;for(let w=0;w<l.length;w++){fi.fromBufferAttribute(r,s?s.getX(g+w):g+w).applyMatrix4(n.matrixWorld);const y=Ro[w].set(fi.x,fi.y,fi.z,1).applyMatrix4(Ir);if(!Number.isFinite(y.x)||!Number.isFinite(y.y)||!Number.isFinite(y.z)||!Number.isFinite(y.w)){p=!1;break}}p&&Pp(l,e,t)}}if(n.isLineLoop&&o>1&&!Array.isArray(n.material)&&i.drawRange.start===0&&i.drawRange.count>=o){let h=!0;for(const[f,m]of[[0,o-1],[1,0]]){fi.fromBufferAttribute(r,s?s.getX(m):m).applyMatrix4(n.matrixWorld);const _=Ro[f].set(fi.x,fi.y,fi.z,1).applyMatrix4(Ir);(!Number.isFinite(_.x)||!Number.isFinite(_.y)||!Number.isFinite(_.z)||!Number.isFinite(_.w))&&(h=!1)}h&&Pp(Cp,e,t)}}function Aw(n){if(!Ym(n.icon))return null;const e={left:1/0,right:-1/0,top:1/0,bottom:-1/0};return n.icon.traverseVisible(t=>{const i=t;if(!i.geometry||!Ah(i.material))return;const r=i.geometry;r.boundingBox||r.computeBoundingBox();const s=r.boundingBox;if(!s||s.isEmpty())return;for(let a=0;a<8;a++){if(fi.set(a&1?s.max.x:s.min.x,a&2?s.max.y:s.min.y,a&4?s.max.z:s.min.z).applyMatrix4(t.matrixWorld),!Tl(fi))return;const c=Ro[a].set(fi.x,fi.y,fi.z,1).applyMatrix4(Ir);if(!Number.isFinite(c.x)||!Number.isFinite(c.y)||!Number.isFinite(c.z)||!Number.isFinite(c.w))return}let o=!0;for(let a=0;a<6;a++){let c=0;for(const l of Ro)Va(l,a)>=0&&c++;if(!c)return;c<8&&(o=!1)}if(o)for(const a of Ro)El(e,a,n);else Tw(i,e,n)}),Number.isFinite(e.right)?e:null}function Rw(n){const e=typeof getComputedStyle=="function"?getComputedStyle(n):n.style,t=u=>{const d=Number.parseFloat(u??"");return Number.isFinite(d)?d:0},i=t(e.fontSize)||t(n.style.fontSize),r=i>0?i:14,s=e.lineHeight||n.style.lineHeight,o=t(s),a=o>0?/^[\d.]+$/.test(s)?o*r:o:r*1.15,c=Number.isFinite(a)&&a>0?a:14*1.15;let l=Number(n.offsetHeight);if(!Number.isFinite(l)||l<=0){const u=typeof n.getBoundingClientRect=="function"?n.getBoundingClientRect():null;l=u?Number(u.height??u.bottom-u.top):0}return(!Number.isFinite(l)||l<=0)&&(l=Math.max(1,(n.textContent??"").split(`
`).length)*c+t(e.paddingTop)+t(e.paddingBottom)),{height:Number.isFinite(l)&&l>0?l:c,lineHeight:c}}function $u(n,e){const t=n.geometry.getAttribute("position");if(!t||t.count<2||!Tl(e))return!1;const i=t.array instanceof Float32Array?Math.fround:a=>a,r=i(e.x),s=i(e.y),o=i(e.z);return!Number.isFinite(r)||!Number.isFinite(s)||!Number.isFinite(o)?!1:(t.getX(1)===r&&t.getY(1)===s&&t.getZ(1)===o||(t.setXYZ(1,r,s,o),t.needsUpdate=!0,n.geometry.boundingBox&&n.geometry.computeBoundingBox(),n.geometry.computeBoundingSphere()),!0)}function Cw(n,e,t){ir.set(qi.x,qi.y,qi.z,1).applyMatrix4(Ir);const i=ir.w,r=Ir.elements,s=1-t*2/n.height,o=r[5]-s*r[7];if(!Number.isFinite(o)||Math.abs(o)<wl)return!1;const a=(s*ir.w-ir.y)/o,c=e.y-t,l=2*i/(n.camera.projectionMatrix.elements[5]*n.height),u=Math.max(qi.distanceTo(vo),l*Math.max(1,c))*4;if(!Number.isFinite(a)||a<=0||a>u||(Dn.copy(qi),Dn.y+=a,ir.set(Dn.x,Dn.y,Dn.z,1).applyMatrix4(Ir),ir.w<i/2||ir.w>i*2))return!1;const d=bo(Dn,n),h=Math.max(dl,Math.min(n.width/4,c));return!!d&&Math.abs(d.y-t)<.01&&Math.abs(d.x-e.x)<=h}function Pw(n,e,t){Dn.set(e.x*2/n.width-1,1-t*2/n.height,e.z).unproject(n.camera);const i=bo(Dn,n);return!!i&&Math.abs(i.y-t)<.01}function Dw(n){const{camera:e,width:t,height:i,group:r,icon:s,pole:o,dom:a,isAir:c,isMerged:l,visible:u}=n,d=Number.isFinite(n.naturalTop)?n.naturalTop:.6,h=o.geometry.getAttribute("position");h&&h.count>0?vo.fromBufferAttribute(h,0).applyMatrix4(o.matrixWorld):vo.set(0,.2,0).applyMatrix4(r.matrixWorld),qi.set(0,d,0).applyMatrix4(r.matrixWorld),Dn.copy(qi),a.style.transform="translate(0, 0)";const f=Number.isFinite(t)&&t>0&&Number.isFinite(i)&&i>0;Ir.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse);const m=f?bo(vo,n):null,_=f?bo(qi,n):null,g=Rw(a),p=Ym(o)&&Ah(o.material)&&!!h&&h.count>=2,w=f?Aw(n):null,y=f&&p?Dp(vo,qi,n):null,v=u&&!a.hidden&&!!(w||y);if(v&&l&&p&&h&&h.count>=2&&m&&_&&Math.abs(m.y-_.y)<g.height){const re=m.y-g.height-.1;!Cw(n,_,re)&&!Pw(n,_,re)&&Dn.copy(qi)}const L=o.matrixWorld.determinant();Number.isFinite(L)&&Math.abs(L)>wl?(qu.copy(o.matrixWorld).invert(),ha.copy(Dn).applyMatrix4(qu),$u(o,ha)||(Dn.copy(qi),ha.copy(qi).applyMatrix4(qu),$u(o,ha))):$u(o,ha.set(0,d,0));const D=o.userData.labelDisplayTop;if(D?(D.x=Dn.x,D.y=Dn.y,D.z=Dn.z):o.userData.labelDisplayTop={x:Dn.x,y:Dn.y,z:Dn.z},!f)return a.style.left="0px",a.style.top="0px",!1;const R=bo(Dn,n)??_;fi.setFromMatrixPosition(s.matrixWorld);const N=bo(fi,n),b=N?.x??R?.x??m?.x??t/2,M=p?Dp(vo,Dn,n):null;let I=w?.right??M?.right??b;M&&(I=Math.max(I,M.right)),Number.isFinite(I)||(I=b);let k=R?.y??N?.y??m?.y??i/2;l&&p&&m&&R?k=Math.min(m.y,R.y):c&&!l&&(k=(N?.y??k)-g.lineHeight/2);const O=w??M;v&&O&&(!Number.isFinite(k)||k<0||k>i-g.height)&&(k=O.top);const G=Number(a.offsetWidth),$=Number.isFinite(G)&&G>0?G:0,j=v?Math.max(0,Math.min(t-$-dl,I+dl)):I+dl;return v&&(k=Math.max(0,Math.min(i-g.height,k))),a.style.left=`${j}px`,a.style.top=`${k}px`,v}function Rh(n="mouse",e=!1){return n==="touch"||n==="pen"||e?32:14}function Lw(n,e,t,i,r){if(![n.x,n.y,n.z,e.left,e.top,e.width,e.height,t,i,r].every(Number.isFinite)||e.width<=0||e.height<=0||r<0||n.z<-1||n.z>1)return null;const s=e.left+(n.x+1)*e.width/2,o=e.top+(1-n.y)*e.height/2;return s<e.left-r||s>e.left+e.width+r||o<e.top-r||o>e.top+e.height+r?null:Math.hypot(s-t,o-i)}function Iw(n,e,t,i=0){return[n.left,n.right,n.top,n.bottom,e,t,i].every(Number.isFinite)&&n.right>n.left&&n.bottom>n.top&&i>=0&&e>=n.left-i&&e<=n.right+i&&t>=n.top-i&&t<=n.bottom+i}const Lp=new Set(["markers","drawing","links","range","layers"]),Ip=new Set(["units","equipment","groups","routes","links"]),Yu=[{id:"units",label:"单位",title:"单位与空间编辑"},{id:"equipment",label:"装备",title:"机体与武器挂载"},{id:"groups",label:"编组",title:"编组与批量调度"},{id:"routes",label:"航路",title:"航路、绑定与航迹"},{id:"markers",label:"标记",title:"自定义地图点位"},{id:"drawing",label:"作图",title:"标尺、圆规与范围规划"},{id:"links",label:"连线",title:"单位与标记连线"},{id:"terrain",label:"地形",title:"画布、地形与城区"},{id:"range",label:"距离",title:"距离判定与三维范围"},{id:"turns",label:"回合",title:"回合草稿与战斗结果"},{id:"layers",label:"图层",title:"地图显示与航迹图层"},{id:"project",label:"存档",title:"工程保存、导入与恢复"}];function Nw(n){const e=document.querySelector("#app"),t=document.querySelector("#edit-panel");if(!e||!t)throw new Error("Editor sidebar requires the existing workspace shell");if(t.dataset.sidebarMounted)throw new Error("Editor sidebar is already mounted");const i=(ie,Ye="")=>{const Ue=document.createElement(ie);return Ue.textContent=Ye,Ue},r=(ie,Ye,Ue)=>{const mt=i("button",ie);return mt.type="button",Ue&&(mt.id=Ue),mt.addEventListener("click",Ye),mt},s=ie=>{const Ye=document.querySelector(ie);if(!Ye)throw new Error(`Missing sidebar source control: ${ie}`);return Ye},o=s("#unit-editor"),a=s("#terrain-editor"),c=s("#route-section"),l=s("#archive-panel"),u=s("#workflow-panel"),d=s("#tab-units").parentElement,h=s(".selection-panel"),f=s(".event-panel"),m=s(".range-panel"),_=s(".trail-panel"),g=document.createComment("archive-manager-portal");l.before(g);const p=i("div"),y=s("#edit-add").closest(".edit-actions").previousElementSibling;for(;o.firstChild&&o.firstChild!==y;)p.append(o.firstChild);c.remove(),o.querySelectorAll(":scope > .rule").forEach(ie=>ie.remove());const v=Array.from(o.children),L=s("#edit-label").closest("label"),D=s("#tool-move").closest(".edit-actions"),R=v.indexOf(L),N=v.indexOf(D),b=(ie,Ye,Ue)=>{const mt=i("details");return mt.className="sidebar-submenu",mt.open=Ue,mt.append(i("summary",ie)),mt.append(...Ye),mt};o.replaceChildren(b("单位与选择",v.slice(0,R),!0),b("属性与战损",v.slice(R,N),!1),b("位置、姿态与吸附",v.slice(N),!0)),a.querySelector(":scope > .eyebrow")?.remove();const M=Array.from(a.children),I=M.indexOf(s("#terrain-brush").closest("label")),k=M.indexOf(s("#terrain-preset").closest("label")),O=s("#terrain-undo").closest(".edit-actions"),G=M.indexOf(O);a.replaceChildren(b("画布尺寸与采样",M.slice(0,I),!1),b("笔刷、城区与等高线",M.slice(I,k),!0),b("地形生成与重置",M.slice(k,G),!1),...M.slice(G)),t.replaceChildren(),t.classList.add("editor-sidebar"),t.dataset.sidebarMounted="true",t.hidden=!1,e.classList.add("editor-sidebar-mounted"),t.setAttribute("aria-label","场景编辑器");const $=i("header");$.className="sidebar-header";const j=i("div");j.className="sidebar-title-row";const re=i("strong","场景编辑器"),q=i("span","浏览");q.id="editor-sidebar-state",q.className="sidebar-state",q.setAttribute("role","status"),j.append(re,q);const ge=i("div");ge.className="sidebar-toolbar";const Te=r("进入编辑",()=>{be.editable&&n.toggleEdit()},"sidebar-toggle-edit"),ze=r("全图",()=>n.fitMap(),"sidebar-fit-map");ze.title="适配整个地图及当前单位";const He=r("俯视",()=>n.topView(),"sidebar-top-view");He.title="切换地图俯视视角";let at=!1;const yt=r("收起",()=>le(!at),"sidebar-collapse");ge.append(Te,ze,He,yt);const te=i("div");te.className="sidebar-quick-actions";const Ae=r("保存修订",()=>{if(be.playerView)return;const ie=ye();ie&&!ie.disabled&&ie.click()},"sidebar-quick-save"),oe=r("提交回合",()=>{if(be.playerView)return;se("turns");const ie=document.querySelector("#workflow-commit");ie&&!ie.disabled&&ie.click()},"sidebar-quick-commit"),Ke=r("另存为…",()=>{be.playerView||(se("turns"),document.querySelector("#editor-save-as-name")?.focus())},"sidebar-quick-save-as"),ne=r("生成快照",()=>{if(be.playerView)return;const ie=document.querySelector("#workflow-snapshot");ie&&!ie.disabled&&!ie.hidden&&ie.click()},"sidebar-quick-snapshot");te.append(Ae,Ke,oe,ne);const ue=i("div");ue.className="sidebar-viewer-toolbar";const Q=r("导出查看器",()=>{be.playerView&&n.viewerExport?.()},"sidebar-viewer-export"),ee=r("撤销",()=>{be.playerView&&be.editable&&be.viewerCanUndo&&n.viewerUndo?.()},"sidebar-viewer-undo"),C=r("重做",()=>{be.playerView&&be.editable&&be.viewerCanRedo&&n.viewerRedo?.()},"sidebar-viewer-redo");ue.append(Q,ee,C),$.append(j,ge,te,ue);const me=i("nav");me.className="sidebar-nav",me.setAttribute("role","tablist"),me.setAttribute("aria-label","编辑工具菜单"),me.setAttribute("aria-orientation","vertical");const he=i("div");he.className="sidebar-content",he.id="editor-sidebar-content";const Re=new Map,pe=new Map,Ve=new Map,ae=new Map;let Ee="units",be={editing:!1,editable:!0,mapOnly:!1},Le,A=!1,x=0;const z=ie=>be.playerView?Lp.has(ie):!(be.mapOnly&&Ip.has(ie));for(const ie of Yu){const Ye=r(ie.label,()=>se(ie.id),`sidebar-tab-${ie.id}`);Ye.title=ie.title,Ye.setAttribute("role","tab"),Ye.setAttribute("aria-controls",`sidebar-panel-${ie.id}`),Ye.dataset.sidebarTab=ie.id,Ve.set(ie.id,Ye),me.append(Ye);const Ue=i("section");Ue.id=`sidebar-panel-${ie.id}`,Ue.className="sidebar-tab-panel",Ue.setAttribute("role","tabpanel"),Ue.setAttribute("aria-labelledby",Ye.id);const mt=i("h2",ie.title);mt.className="sidebar-panel-heading";const St=i("div");St.className="sidebar-panel-body",St.dataset.sidebarPanel=ie.id,Ue.append(mt,St),Re.set(ie.id,Ue),pe.set(ie.id,St),he.append(Ue)}o.hidden=!1,a.hidden=!1,pe.get("units").append(h,o),pe.get("terrain").append(a),pe.get("turns").append(u,p,f),c.open=!0;const K=c.querySelector(":scope > summary"),X=Array.from(c.children).filter(ie=>ie!==K),W=X.indexOf(c.querySelector("#route-list")),Ie=X.indexOf(c.querySelector("#track-edit").closest(".edit-actions"));c.replaceChildren(K,b("航路设置与选中单位绑定",X.slice(0,W),!0),b("航路点与顺序",X.slice(W,Ie),!0),b("航迹曲线与控制点",X.slice(Ie),!1)),pe.get("routes").append(c);const xe=i("section");xe.className="sidebar-card",xe.append(i("h3","当前航路的绑定对象"));const Ge=i("div");Ge.id="route-bindings",Ge.className="sidebar-bound-list",Ge.setAttribute("aria-live","polite"),Ge.textContent="当前航路暂无绑定对象";const Xe=i("div");Xe.className="edit-actions";const _e=i("button","选中全部绑定单位");_e.type="button",_e.id="route-select-bound",Xe.append(_e);const Ne=i("label");Ne.className="edit-row",Ne.append(i("span","编组"));const Je=i("select");Je.id="route-group-select",Je.setAttribute("aria-label","绑定至当前航路的编组"),Je.add(new Option("选择编组","")),Ne.append(Je);const Qe=i("button","将编组绑定当前航路");Qe.type="button",Qe.id="route-bind-group";const Ce=i("div");Ce.className="edit-actions",Ce.append(Qe),xe.append(Ge,Xe,Ne,Ce),pe.get("routes").append(xe),pe.get("range").append(m),pe.get("layers").append(_);const ut=i("section");ut.className="sidebar-card",ut.append(i("h3","航路显示"));const U=(ie,Ye)=>{const Ue=i("label");Ue.className="check-row";const mt=i("input");return mt.id=ie,mt.type="checkbox",mt.checked=!0,Ue.append(mt,document.createTextNode(Ye)),Ue};ut.append(U("route-visible","显示所有航路与航路点"),U("route-labels","显示航路点名称与绑定对象")),pe.get("layers").append(ut),pe.get("project").append(l),d.hidden=!0,d.classList.add("sidebar-legacy-tabs"),t.append($,me,he,d);function ye(){return["#task-editor-save","#map-editor-save","#workflow-save-draft"].map(ie=>document.querySelector(ie)).find(ie=>ie&&!ie.hidden)}function Se(){if(be.playerView){te.hidden=!0;for(const St of[Ae,Ke,oe,ne])St.hidden=!0,St.disabled=!0;return}const ie=ye(),Ye=document.querySelector("#workflow-commit");Ae.hidden=!ie,Ae.disabled=!ie||ie.disabled,Ae.textContent=ie?.id==="workflow-save-draft"?"保存草稿":ie?.id==="map-editor-save"?"保存地图修订":"保存任务修订",oe.hidden=!Ye||Ye.hidden||Ye.disabled,oe.disabled=!Ye||Ye.disabled;const Ue=["#map-editor-save-as","#task-editor-save-as"].map(St=>document.querySelector(St)).find(St=>St&&!St.hidden);Ke.hidden=!Ue,Ke.disabled=!Ue||Ue.disabled;const mt=document.querySelector("#workflow-snapshot");ne.hidden=!mt||mt.hidden,ne.disabled=!mt||mt.disabled,te.hidden=Ae.hidden&&Ke.hidden&&oe.hidden&&ne.hidden}function qe(){for(const Ye of Yu){const Ue=z(Ye.id),mt=Ue&&Ye.id===Ee,St=Ve.get(Ye.id);St.hidden=!!be.playerView&&!Ue,St.disabled=!Ue,St.setAttribute("aria-selected",String(mt)),St.tabIndex=mt?0:-1,Re.get(Ye.id).hidden=!mt}const ie=be.playerView?"玩家查看器":"场景编辑器";re.textContent=ie,t.setAttribute("aria-label",ie),me.setAttribute("aria-label",be.playerView?"标注工具菜单":"编辑工具菜单"),t.dataset.activeTab=Ee,t.dataset.playerView=String(!!be.playerView),t.dataset.editing=String(be.editing),t.dataset.editable=String(be.editable),t.dataset.active=String(be.active!==!1),q.textContent=be.playerView?be.editing?"标注中":"浏览":be.editable?be.editing?"编辑中":"浏览":"只读历史",Te.textContent=be.playerView?be.editing?"结束标注":"编辑标注":be.editing?"退出编辑":"进入编辑",Te.disabled=!be.editable,ut.hidden=!!be.playerView,Q.hidden=!be.playerView,Q.disabled=!be.playerView||!n.viewerExport,ee.hidden=!be.playerView||!n.viewerUndo,C.hidden=!be.playerView||!n.viewerRedo,ee.disabled=!be.playerView||!be.editable||!be.viewerCanUndo||!n.viewerUndo,C.disabled=!be.playerView||!be.editable||!be.viewerCanRedo||!n.viewerRedo,ue.hidden=!be.playerView,Se()}function le(ie){at=ie,t.dataset.collapsed=String(ie),yt.textContent=ie?"展开":"收起",yt.setAttribute("aria-expanded",String(!ie))}function se(ie){const Ue={unit:"units",route:"routes",group:"groups",marker:"markers",draw:"drawing",turn:"turns",archive:"project"}[ie]??ie;!Re.has(Ue)||!z(Ue)||(ae.set(Ee,he.scrollTop),Ee=Ue,le(!1),qe(),he.scrollTop=ae.get(Ue)??0,n.chooseTool(Ue))}me.addEventListener("keydown",ie=>{if(!["ArrowUp","ArrowDown","Home","End"].includes(ie.key))return;const Ye=Yu.filter(St=>z(St.id)&&!Ve.get(St.id).hidden&&!Ve.get(St.id).disabled),Ue=Ye.findIndex(St=>Ve.get(St.id)===document.activeElement);if(Ue<0)return;ie.preventDefault();const mt=ie.key==="Home"?Ye[0]:ie.key==="End"?Ye.at(-1):Ye[(Ue+(ie.key==="ArrowDown"?1:-1)+Ye.length)%Ye.length];se(mt.id),Ve.get(mt.id).focus()});const $e=()=>{!be.playerView&&e.dataset.workspace==="manager"?l.parentNode!==e&&(g.parentNode===e?e.insertBefore(l,g.nextSibling):e.append(l),l.open=!1):(l.parentNode!==pe.get("project")&&pe.get("project").append(l),l.open=!0)};return new MutationObserver($e).observe(e,{attributes:!0,attributeFilter:["data-workspace"]}),new MutationObserver(Se).observe(u,{subtree:!0,attributes:!0,attributeFilter:["hidden","disabled"]}),le(!1),qe(),$e(),{panels:{groups:pe.get("groups"),markers:pe.get("markers"),drawing:pe.get("drawing"),equipment:pe.get("equipment"),links:pe.get("links")},select:se,sync(ie){const Ye=!!ie.playerView&&!be.playerView,Ue=!ie.playerView&&!!be.playerView,mt=me.contains(document.activeElement),St=Ue?Le:void 0;Ye&&(Le=Ee,A=at,x=he.scrollTop,ae.set(Ee,he.scrollTop)),be={...ie},t.hidden=!1,Ue&&(ae.set(Ee,he.scrollTop),Ee=Le??"units",Le=void 0,le(A)),be.playerView&&!Lp.has(Ee)?(Ee="markers",le(!1)):!be.playerView&&be.mapOnly&&Ip.has(Ee)&&(Ee="terrain"),qe(),$e(),(Ye||Ue)&&(he.scrollTop=Ue&&Ee===St?x:ae.get(Ee)??0,ae.set(Ee,he.scrollTop)),mt&&!z(document.activeElement.dataset.sidebarTab)&&Ve.get(Ee).focus()}}}function Uw(n,e){let t="";const i=(R,N="")=>{const b=document.createElement(R);return b.textContent=N,b};n.append(i("h3","编组 / 批量操作"));const r=i("div");r.id="group-list",r.className="unit-picker",n.append(r);const s=i("label","编组名称（回车即改名）");s.className="edit-row";const o=i("input");o.id="group-name",o.maxLength=128,s.append(o),n.append(s);const a=i("label","编组颜色");a.className="edit-row";const c=i("input");c.type="color",c.id="group-color",c.value="#62ffa8",a.append(c),n.append(a);const l=i("div");l.className="edit-actions",n.append(l);const u=[],d=(R,N,b,M=l)=>{const I=i("button",N);return I.type="button",I.id=R,I.addEventListener("click",b),M.append(I),u.push(I),I},h=i("div");h.id="group-state",h.className="edit-hint",h.setAttribute("role","status");const f=()=>e.read().groups.find(R=>R.id===t),m=()=>e.units().filter(R=>R.groupId===t).map(R=>R.id),_=(R,N)=>{e.change(R,N)&&D()};d("group-create","新建并分配所选",()=>{if(!e.editable())return;const R=o.value.trim()||`编组 ${e.read().groups.length+1}`,N=c.value,b=new Set(e.selectedIds()),M=`group-${crypto.randomUUID()}`;_("新建编组",(I,k)=>{I.groups.push({id:M,name:R,color:N}),k.filter(O=>b.has(O.id)).forEach(O=>{O.groupId=M}),t=M})});const g=()=>{if(!f()||!o.value.trim())return;const R=o.value.trim(),N=c.value;_("修改编组",b=>{const M=b.groups.find(I=>I.id===t);M.name=R,M.color=N})};d("group-save","保存名称 / 颜色",g),o.addEventListener("keydown",R=>{R.key==="Enter"&&(R.preventDefault(),g())});const p=i("div");p.className="edit-actions",n.append(p),d("group-assign","所选加入编组",()=>{if(!f())return;const R=new Set(e.selectedIds());_("分配编组",(N,b)=>b.filter(M=>R.has(M.id)).forEach(M=>{M.groupId=t}))},p),d("group-unassign","所选退出编组",()=>{const R=new Set(e.selectedIds());_("移除编组归属",(N,b)=>b.filter(M=>R.has(M.id)).forEach(M=>{delete M.groupId}))},p);const w=i("div");w.className="edit-actions",n.append(w);const y=o;d("group-rename","改名",()=>{y.focus(),y.select()},w),d("group-select","选中整组",()=>{f()&&e.select(m())},w),d("group-focus","定位整组",()=>{f()&&e.focus(m())},w),d("group-copy","复制整组",()=>{const R=f();R&&e.copy(R)},w);const v=i("div");v.className="edit-actions",n.append(v),d("group-delete","删除编组 / 保留单位",()=>{f()&&_("删除编组",(R,N)=>{R.groups=R.groups.filter(b=>b.id!==t),N.filter(b=>b.groupId===t).forEach(b=>{delete b.groupId}),t=""})},v);const L=i("div");L.id="group-members",L.className="unit-picker",n.append(L,h);function D(){const R=e.read(),N=e.units(),b=e.selectedIds(),M=e.editable();R.groups.some(k=>k.id===t)||(t=R.groups[0]?.id??""),r.replaceChildren(...R.groups.map(k=>{const O=N.filter($=>$.groupId===k.id).length,G=i("button",`${k.name} (${O})`);return G.style.borderColor=k.color,G.setAttribute("aria-pressed",String(k.id===t)),G.addEventListener("click",()=>{t=k.id,o.value=k.name,c.value=k.color,D()}),G.addEventListener("dblclick",()=>e.select(N.filter($=>$.groupId===k.id).map($=>$.id))),G}));const I=f();document.activeElement!==o&&(o.value=I?.name??""),document.activeElement!==c&&(c.value=I?.color??"#62ffa8"),o.disabled=c.disabled=!M;for(const k of u)k.disabled=!M;for(const k of["group-select","group-focus"])n.querySelector(`#${k}`).disabled=!I||!m().length;for(const k of["group-save","group-rename","group-assign","group-copy","group-delete"])n.querySelector(`#${k}`).disabled=!M||!I;n.querySelector("#group-assign").disabled||=!b.length,n.querySelector("#group-copy").disabled||=!m().length,n.querySelector("#group-unassign").disabled=!M||!N.some(k=>b.includes(k.id)&&k.groupId),L.replaceChildren(...N.filter(k=>k.groupId===t).map(k=>{const O=i("button",k.label);return O.setAttribute("aria-pressed",String(b.includes(k.id))),O.addEventListener("click",()=>e.select([k.id])),O})),h.textContent=`${I?`${I.name} · ${m().length} 个单位`:"暂无编组"} / 当前选择 ${b.length} 个${M?"":" / 只读"}`}return D(),{sync:D}}const fa=new WeakMap,gn=n=>JSON.stringify([n.id,n.revision]),ju=n=>({id:n.id,revision:n.revision}),kw=n=>({L:"轻型",M:"中型",H:"重型"})[n];function Np(n,e,t){const i=n.sessions.find(s=>s.id===e),r=i?.sealedScenes?.find(s=>s.turn===t);return JSON.stringify([n.id,n.players,n.aircraft,n.sp,i?.status,i?.workflow,r?.resourceSnapshot??i?.resourceSnapshot,r?.rulesSnapshot??i?.rulesSnapshot,(r?.units??i?.units??[]).map(s=>({id:s.id,player:s.player,aircraftRef:s.aircraftRef,loadout:s.loadout,spRefs:s.spRefs,playerActions:s.playerActions}))])}function Up(n,e){const t=new Map;for(const i of[...n,...e])t.has(gn(i))||t.set(gn(i),i);return[...t.values()].sort((i,r)=>i.id===r.id?r.revision-i.revision:i.id.localeCompare(r.id))}function Fw(n,e){const t={};fa.set(n,t);const i=(Q,ee="",C="")=>{const me=document.createElement(Q);return me.textContent=ee,me.id=C,me},r=i("section");r.className="player-roster";const s=i("div");s.className="player-roster-header";const o=i("button","新建玩家","player-roster-new");o.type="button",n.getAttribute("data-collapsed")===null&&typeof matchMedia=="function"&&matchMedia("(max-width: 600px) and (pointer: coarse)").matches&&n.setAttribute("data-collapsed","true");const a=n.getAttribute("data-collapsed")==="true",c=i("button",a?"展开":"收起","player-roster-collapse");c.type="button",c.setAttribute("aria-expanded",String(!a)),s.append(i("h3","玩家"),o,c);const l=i("div","","player-roster-form-area");l.hidden=!0;const u=i("div","","player-roster-pending");u.hidden=!0;const d=i("div","","player-roster-list");d.className="player-roster-list";const h=i("p","","player-roster-feedback");h.setAttribute("role","status"),h.hidden=!0,r.append(s,l,u,d,h),n.replaceChildren(r);let f,m,_,g="",p=-1,w="",y=[],v=[],L=[],D=Yh,R="",N="",b="",M=0,I=0,k=0,O,G,$,j;const re=[],q=[],ge=new Map,Te=[],ze=Q=>{const ee=Q instanceof Error?Q.message:String(Q);h.textContent=ee,h.hidden=!1,e.report(ee)},He=()=>{if(fa.get(n)!==t||!n.isConnected||!r.isConnected||!f)throw new Error("玩家栏已变化，请使用当前面板。");if(e.readRevision&&f.revision!==void 0){if(e.readRevision()!==f.revision)throw new Error("工程已变化，请等待玩家栏同步。")}else if(e.read&&Np(e.read(),f.sessionId,f.turn)!==w)throw new Error("工程已变化，请等待玩家栏同步。");if(f.mapOnly)throw new Error("地图模式下玩家栏为只读。");return f},at=Q=>{try{He(),Q()}catch(ee){ze(ee)}},yt=()=>{const Q=He();if(!Q.editable)throw new Error("历史回合或当前场景为只读。");if(Q.pending||e.busy?.())throw new Error("请先完成或取消当前放置。");return Q},te=(Q,ee,C,me,he)=>{const Re=i("label",C);Re.htmlFor=ee;const pe=i("select","",ee);for(const[Ve,ae]of me){const Ee=i("option",ae);Ee.value=Ve,pe.append(Ee)}return pe.value=he,Re.append(pe),Q.append(Re),re.push(pe),pe},Ae=(Q,ee,C)=>{const me=Q.spSlots?.[C];return!!me&&!!ee.weapon&&ee.weapon.kind!=="normal"&&(!D.config.enforceWeight||!!ee.weapon.weight&&Wg(me,ee.weapon.weight))&&(ee.weapon.kind==="universal"||!!Q.allowedWeapons?.includes(ee.name))},oe=()=>{const Q=!!f?.editable&&!f.mapOnly&&!f.pending;o.disabled=!Q;for(const ee of re)ee.disabled=!Q;$&&($.disabled=!Q||!O?.playerId),j&&(j.disabled=!Q||!O?.playerId||!O?.aircraftKey);for(const ee of Te)ee.node.disabled=!Q||!ee.available;for(const[ee,C]of ge)C.setAttribute("aria-selected",String(ee===f?.selectedUnitId)),C.setAttribute("data-selected",String(ee===f?.selectedUnitId))},Ke=()=>{l.replaceChildren(),re.length=0,q.length=0,G=void 0,$=void 0,j=void 0;const Q=++I;if(l.hidden=!O,!O||!f)return;const ee=O,C=()=>{if(O!==ee||Q!==I||!l.isConnected)throw new Error("玩家创建表单已变化。")},me=i("form","","player-roster-form");me.className="player-form",me.append(i("h4","呼号"));const he=new Set(y.map(Le=>Le.player?.id).filter(Boolean)),Re=(f.project.players??[]).filter(Le=>!he.has(Le.id));Re.some(Le=>Le.id===ee.playerId)||(ee.playerId=""),G=te(me,"player-roster-player","玩家呼号",[["","请选择玩家"],...Re.map(Le=>[Le.id,Le.callsign])],ee.playerId),Re.length||me.append(i("p","暂无可用呼号")),me.append(i("h4","装备")),$=te(me,"player-roster-aircraft","机体",[["","请选择机体"],...v.map(Le=>[gn(Le),`${Le.name} · 修订 ${Le.revision}`])],ee.aircraftKey);const pe=i("div","GUN / MSL / FLR","player-roster-inherent");pe.className="player-chips",me.append(pe);const Ve=i("div","","player-roster-slots");Ve.className="player-slots",me.append(Ve);const ae=v.find(Le=>gn(Le)===ee.aircraftKey);ae&&(ee.loadout=ee.loadout.filter(Le=>{const A=L.find(x=>gn(x)===gn(Le.weaponRef));return A&&Ae(ae,A,Le.slot)}),ae.spSlots?.length||Ve.append(i("p","无 SP 槽")),ae.spSlots?.forEach((Le,A)=>{const x=i("div");x.className="player-slot";const z=L.filter(W=>Ae(ae,W,A)),K=ee.loadout.find(W=>W.slot===A)?.weaponRef,X=te(x,`player-roster-slot-${A}`,`SP${A+1} · ${kw(Le)} ${Le}`,[["","空槽"],...z.map(W=>[gn(W),`${W.name} · ${W.weapon?.weight??""} · 修订 ${W.revision}`])],K?gn(K):"");q.push({slot:A,node:X,choices:z}),X.addEventListener("change",()=>at(()=>{if(C(),!X.isConnected)throw new Error("SP 槽位已变化。");if(X.value&&!z.some(Ie=>gn(Ie)===X.value))throw new Error("所选 SP 的重量或机体许可不匹配。");ee.loadout=ee.loadout.filter(Ie=>Ie.slot!==A);const W=z.find(Ie=>gn(Ie)===X.value);W&&ee.loadout.push({slot:A,weaponRef:ju(W)}),ee.loadout.sort((Ie,xe)=>Ie.slot-xe.slot)})),Ve.append(x)}));const Ee=i("div");Ee.className="player-actions",j=i("button","完成配置","player-roster-create"),j.type="submit";const be=i("button","取消","player-roster-create-cancel");be.type="button",Ee.append(j,be),me.append(Ee),l.append(me),G.addEventListener("change",()=>at(()=>{C(),ee.playerId=G.value,oe()})),$.addEventListener("change",()=>at(()=>{if(C(),!ee.playerId)throw new Error("请先选择玩家呼号。");if($.value&&!v.some(Le=>gn(Le)===$.value))throw new Error("机体修订已变化。");ee.aircraftKey=$.value,Ke()})),be.addEventListener("click",()=>at(()=>{C(),O=void 0,Ke()})),me.addEventListener("submit",Le=>{Le.preventDefault(),at(()=>{C();const A=yt();if(ee.projectId!==A.project.id||ee.sessionId!==A.sessionId||ee.turn!==A.turn)throw new Error("创建场景或回合已变化，请取消后重新新建。");if(!(A.project.players??[]).some(W=>W.id===ee.playerId)||y.some(W=>W.player?.id===ee.playerId))throw new Error("请选择尚未加入当前场景的玩家。");const x=v.find(W=>gn(W)===ee.aircraftKey);if(!x)throw new Error("请选择有效机体。");const z=q.filter(W=>W.node.value).map(W=>{const Ie=W.choices.find(xe=>gn(xe)===W.node.value);if(!Ie)throw new Error("所选 SP 的重量或机体许可不匹配。");return{slot:W.slot,weaponRef:ju(Ie)}}),K=Gg(x,L,z,D);if(K.length)throw new Error(K.join("；"));const X={playerId:ee.playerId,aircraftRef:ju(x),loadout:z};O=void 0,++I;try{e.beginCreate(X)}catch(W){throw O=ee,Ke(),W}Ke()})}),oe()},ne=()=>{u.replaceChildren();const Q=++k,ee=f?.pending;if(u.hidden=!ee,!ee||!f)return;const C=i("article");C.className="player-card player-pending-card";const me=v.find(x=>gn(x)===gn(ee.aircraftRef));C.append(i("h4",`${ee.player.callsign} · 待落位`),i("p",me?.name??"已配置机体"));const he=ee.loadout.map(x=>`SP${x.slot+1} ${L.find(z=>gn(z)===gn(x.weaponRef))?.name??"已配置 SP"}`).join(" / "),Re=f,Ve=Re.project.sessions.find(x=>x.id===Re.sessionId)?.resourceSnapshot.sp.find(x=>x.name==="FLR")??Re.project.sp.find(x=>x.name==="FLR");C.append(i("p",`FLR 剩余 ${Ve?Ve.weapon?.usageLimit??"—":4} 次`),i("p",he||"空 SP 挂载"));for(const x of ee.loadout){const z=L.find(K=>gn(K)===gn(x.weaponRef));C.append(i("p",`SP${x.slot+1} · ${z?.name??"已配置 SP"} · 冷却 0 回合 · ${z?.weapon?.usageLimit===void 0?"已用 0 次":`剩余 ${z.weapon.usageLimit} 次`}`))}const ae=i("div");ae.className="player-actions";const Ee=i("button",ee.armed?"等待地图落位":"生成位置","player-roster-arm");Ee.type="button",Ee.disabled=ee.armed||!f.editable,Ee.setAttribute("aria-pressed",String(ee.armed));const be=i("button","取消创建","player-roster-placement-cancel");be.type="button",ae.append(Ee,be),C.append(ae),u.append(C);const Le={projectId:Re.project.id,sessionId:Re.sessionId,turn:Re.turn},A=()=>{const x=He();if(Q!==k||!C.isConnected||x.project.id!==Le.projectId||x.sessionId!==Le.sessionId||x.turn!==Le.turn||!x.pending||gn(x.pending.aircraftRef)!==gn(ee.aircraftRef)||x.pending.player.id!==ee.player.id)throw new Error("待落位配置已变化。");return x};Ee.addEventListener("click",()=>at(()=>{const x=A();!x.editable||x.pending?.armed||e.armPlacement()})),be.addEventListener("click",()=>at(()=>{A(),e.cancelPlacement()}))},ue=()=>{d.replaceChildren(),ge.clear(),Te.length=0;const Q=++M;if(!f)return;const ee={projectId:f.project.id,sessionId:f.sessionId,turn:f.turn},C=y.filter(me=>me.player);C.length||d.append(i("p","暂无玩家"));for(const me of C){const he=i("article","",`player-roster-unit-${me.id}`);he.className="player-card",he.tabIndex=0,he.setAttribute("role","group"),he.setAttribute("aria-label",`玩家 ${me.player.callsign}`);const Re=i("h4",me.player.callsign),pe=v.find(X=>me.aircraftRef&&gn(X)===gn(me.aircraftRef)),Ve=Vg(f.project,f.sessionId,me.id,f.turn),ae=i("div");ae.className="player-card-head";const Ee=i("span");Ee.className="player-faction-block",Ee.setAttribute("aria-hidden","true"),Ee.setAttribute("data-faction",me.faction);const be=Ve.filter(X=>X.slot!==void 0).length,Le=i("span",`${be} 装备`);Le.className="player-equipment-count",ae.append(Ee,Re,Le),he.append(ae,i("p",pe?.name??"未绑定机体"));const A=Ve.find(X=>X.name==="FLR");he.append(i("p",`FLR 剩余 ${A?.remaining??"—"} 次`));const x=()=>{const X=He();if(Q!==M||!he.isConnected||X.project.id!==ee.projectId||X.sessionId!==ee.sessionId||X.turn!==ee.turn||!y.some(W=>W.id===me.id))throw new Error("玩家单位或回合已变化。");return X},z=X=>["BUTTON","SELECT","INPUT"].includes(X.target?.tagName?.toUpperCase()??"");he.addEventListener("click",X=>at(()=>{z(X)||(x(),e.selectUnit(me.id,!1))})),he.addEventListener("dblclick",X=>at(()=>{z(X)||(x(),e.selectUnit(me.id,!0))})),he.addEventListener("keydown",X=>{X.target!==he||!["Enter"," "].includes(X.key)||(X.preventDefault(),at(()=>{x(),e.selectUnit(me.id,X.key==="Enter")}))});const K=i("div");K.className="player-weapon-list",he.append(K);for(const X of Ve){const W=i("div");W.className="player-weapon-row";const Ie=X.slot===void 0?X.name:`SP${X.slot+1} · ${X.name}`,xe=X.durationRemaining>0?`效果剩余 ${X.durationRemaining} 回合 · 冷却 ${X.profile?.cooldownTurns??0}T`:`冷却 ${X.cooldownRemaining} 回合`;W.append(i("strong",Ie),i("span",X.jettisoned?"已抛弃":`${xe} · ${X.remaining===void 0?`已用 ${X.uses} 次`:`剩余 ${X.remaining} 次`}`));const Ge=i("div");Ge.className="player-actions";const Xe=i("button","使用");Xe.type="button",Xe.setAttribute("data-action","use"),Xe.setAttribute("data-weapon-key",X.key),Ge.append(Xe),Te.push({node:Xe,available:X.canUse&&f.turn>0});let _e=!1;const Ne=(Je,Qe,Ce)=>at(()=>{x();const ut=yt();if(!Ce.isConnected||!Qe||_e||ut.turn<1)throw new Error("上一回合的此项行动当前不可记录。");_e=!0,Ce.disabled=!0;const U=Te.filter(Se=>Se.node.getAttribute("data-weapon-key")===X.key&&he.contains(Se.node)),ye=U.map(Se=>Se.available);for(const Se of U)Se.available=!1;try{e.recordAction(me.id,X.key,Je)}catch(Se){throw _e=!1,U.forEach((qe,le)=>{qe.available=ye[le]}),oe(),Se}});if(Xe.addEventListener("click",Je=>{Je.stopPropagation(),Ne("use",X.canUse,Xe)}),X.slot!==void 0||X.profile?.kind&&X.profile.kind!=="normal"){const Je=i("button","抛弃");Je.type="button",Je.setAttribute("data-action","drop"),Je.setAttribute("data-weapon-key",X.key),Ge.append(Je),Te.push({node:Je,available:X.canJettison&&f.turn>0}),Je.addEventListener("click",Qe=>{Qe.stopPropagation(),Ne("drop",X.canJettison,Je)})}W.append(Ge),K.append(W)}d.append(he),ge.set(me.id,he)}};return c.addEventListener("click",()=>at(()=>{const Q=n.getAttribute("data-collapsed")!=="true";n.setAttribute("data-collapsed",String(Q)),c.textContent=Q?"展开":"收起",c.setAttribute("aria-expanded",String(!Q))})),o.addEventListener("click",()=>at(()=>{const Q=yt();if(O){e.report("请先完成或取消当前玩家配置。");return}O={playerId:"",aircraftKey:"",loadout:[],projectId:Q.project.id,sessionId:Q.sessionId,turn:Q.turn},Ke()})),{sync(Q){if(fa.get(n)!==t||!r.isConnected)return;if(f={...Q,pending:Q.pending?structuredClone(Q.pending):void 0},(Q.revision===void 0?Q.project!==m:Q.revision!==_||Q.project.id!==m?.id)||Q.sessionId!==g||Q.turn!==p){m=Q.project,_=Q.revision,g=Q.sessionId,p=Q.turn,w=e.readRevision&&Q.revision!==void 0?"":Np(Q.project,Q.sessionId,Q.turn);const me=Q.project.sessions.find(Ve=>Ve.id===Q.sessionId),he=me?.sealedScenes?.find(Ve=>Ve.turn===Q.turn);y=he?.units??me?.units??[],v=Up(he?.resourceSnapshot.aircraft??me?.resourceSnapshot.aircraft??[],Q.project.aircraft),L=Up(he?.resourceSnapshot.sp??me?.resourceSnapshot.sp??[],Q.project.sp),D=he?.rulesSnapshot??me?.rulesSnapshot??Yh;const Re=JSON.stringify([Q.project.id,Q.project.players,v,L,D,y.map(Ve=>Ve.player?.id)]);N!==Re&&(N=Re,O&&Ke());const pe=JSON.stringify([Q.project.id,Q.sessionId,Q.turn,v,L,D,y.filter(Ve=>Ve.player).map(Ve=>({id:Ve.id,player:Ve.player,aircraftRef:Ve.aircraftRef,loadout:Ve.loadout,spRefs:Ve.spRefs,playerActions:Ve.playerActions}))]);if(R!==pe){R=pe;try{ue()}catch(Ve){ze(Ve)}}}const C=JSON.stringify([Q.project.id,Q.sessionId,Q.turn,Q.editable,Q.pending]);b!==C&&(b=C,ne()),oe()},destroy(){fa.get(n)===t&&(fa.delete(n),++M,++I,++k,n.replaceChildren())}}}const pa=512,ma=[["#ff6935","橙"],["#2d8cff","蓝"],["#ffd84a","黄"],["#20e27e","绿"],["#ff4d5a","红"]],ui=n=>!!n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=1e5),ga=n=>/^#[0-9a-f]{6}$/i.test(n),Zu=n=>`${n.kind}:${n.id}`,kp=n=>{const e=n.indexOf(":"),t=n.slice(0,e),i=n.slice(e+1);return e>0&&i&&(t==="unit"||t==="marker")?{kind:t,id:i}:null},Ow=(n,e,t)=>n.some(i=>i.fromUnitId===e&&i.to.kind===t.kind&&i.to.id===t.id||t.kind==="unit"&&i.to.kind==="unit"&&i.fromUnitId===t.id&&i.to.id===e);function zw(n){let e=!1,t="",i="",r="",s="",o="";const a=new An,c=new Map;a.name="Editor links",a.userData.editorLinks=!0,a.renderOrder=1e3,n.world.add(a);const l=(ne,ue="")=>{const Q=document.createElement(ne);return Q.textContent=ue,Q},u=l("div");u.className="scene-tool-panel editor-links-panel",n.panel.append(u);const d=l("style");d.textContent=`
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
  `,u.append(d,l("h3","连线"));const h=[],f=(ne,ue,Q)=>{const ee=()=>{e||Q()};ne.addEventListener(ue,ee),h.push({element:ne,event:ue,run:ee})},m=()=>{const ne=l("div");return ne.className="tool-actions",u.append(ne),ne},_=(ne,ue,Q,ee)=>{const C=l("button",Q);return C.id=ue,C.type="button",f(C,"click",ee),ne.append(C),C},g=(ne,ue,Q)=>{const ee=l("label");ee.className="tool-row",ee.append(l("span",Q));const C=l(ne);return C.id=ue,C.setAttribute("aria-label",Q),ee.append(C),u.append(ee),C},p=(ne,ue)=>{const Q=l("option",ne);return Q.value=ue,Q},w=m(),y=_(w,"link-mode","连线模式",()=>{if(t){ze();return}if(!q()){oe();return}const ne=ge();if(!ne||!n.readUnits().some(ue=>ue.id===ne&&ui(ue.position))){o="请选择源单位",oe();return}t=ne,o="",R.value="",n.onModeChange(!0),oe()}),v=_(w,"link-cancel","取消",ze),L=g("select","link-source-unit","源单位");L.title="默认跟随选中单位；手动选择后固定源单位，连线模式中保持不变";const D=l("p");D.id="link-source",u.append(D);const R=g("select","link-target","目标"),N=g("select","link-style","颜色");N.replaceChildren(...ma.map(([ne,ue])=>p(ue,ne)),p("自定义","custom")),N.value=ma[0][0];const b=g("input","link-color","自定义颜色");b.type="color",b.value=ma[0][0];const M=_(m(),"link-add","添加连线",()=>{const ne=ge(),ue=kp(R.value);if(!q()){oe();return}if(!ne||!ue){o="请选择源与目标",oe();return}at(ne,ue)}),I=g("select","link-list","连线列表");I.size=5;const k=g("input","link-visible","显示");k.type="checkbox",k.checked=!0;const O=m(),G=_(O,"link-apply","修改颜色 / 显示",()=>{const ne=r,ue=b.value,Q=k.checked;if(!q()){oe();return}if(!ga(ue)){o="请选择有效颜色",oe();return}He("修改连线",ee=>{const C=ee.links?.find(me=>me.id===ne);if(!C)throw new Error("连线已移除");C.color=ue.toLowerCase(),C.visible=Q})}),$=_(O,"link-delete","删除连线",()=>{const ne=r;if(!q()){oe();return}He("删除连线",ue=>{if(!ue.links?.some(Q=>Q.id===ne))throw new Error("连线已移除");ue.links=ue.links.filter(Q=>Q.id!==ne)})}),j=l("p");j.id="link-state",j.setAttribute("role","status"),u.append(j),f(L,"change",()=>{if(!q()||t){oe();return}const ne=L.value;i=ne&&n.readUnits().some(ue=>ue.id===ne&&ui(ue.position))?ne:"",R.value="",o="",oe()}),f(R,"change",()=>{o="",oe()}),f(N,"change",()=>{if(!q()){oe();return}ga(N.value)&&(b.value=N.value)}),f(b,"input",()=>{if(!q()){oe();return}N.value=ma.find(([ne])=>ne===b.value.toLowerCase())?.[0]??"custom"}),f(I,"change",()=>{r=I.value,s="",o="",oe()});const re=ne=>{!e&&t&&ne.key==="Escape"&&(ze(),ne.preventDefault())};typeof addEventListener=="function"&&addEventListener("keydown",re);function q(){return!e&&n.editable()&&!n.busy()}function ge(ne){return i&&!(ne??n.readUnits()).some(ue=>ue.id===i&&ui(ue.position))&&(i="",R.value=""),t||i||n.selectedUnitId()||""}function Te(){t&&(t="",R.value="",n.onModeChange(!1))}function ze(){e||(Te(),R.value="",o="",oe())}function He(ne,ue){if(!q())return oe(),!1;let Q=!1;try{Q=n.change(ne,ee=>{if(!q())throw new Error("当前状态已变化");ue(ee)}),o=Q?"已保存":"未保存"}catch(ee){o=ee instanceof Error?ee.message:String(ee)}return oe(),Q}function at(ne,ue){const Q=b.value,ee=he=>{const Re=n.readUnits(),pe=Re.find(ae=>ae.id===ne),Ve=ue.kind==="unit"?Re.find(ae=>ae.id===ue.id):he.markers.find(ae=>ae.id===ue.id);if(!ui(pe?.position)||!ui(Ve?.position))throw new Error("源或目标已移除");if(ue.kind==="unit"&&ue.id===ne)throw new Error("源与目标相同");if((he.links?.length??0)>=pa)throw new Error("连线已达上限 512");if(Ow(he.links??[],ne,ue))throw new Error("连线已存在");if(!ga(Q))throw new Error("请选择有效颜色")};try{ee(n.read())}catch(he){return o=he instanceof Error?he.message:String(he),oe(),!1}const C=`link-${crypto.randomUUID()}`,me=He("添加连线",he=>{ee(he),(he.links??=[]).push({id:C,fromUnitId:ne,to:{...ue},color:Q.toLowerCase(),visible:!0})});return me&&(r=C,s="",oe()),me}function yt(ne,ue){if(e||!t)return!1;if(!q())return oe(),!0;const Q={kind:ne,id:ue};return R.value=Zu(Q),at(t,Q),!0}function te(ne){a.remove(ne.line),ne.line.geometry.dispose(),ne.line.material.dispose()}function Ae(){if(e)return;const ne=n.read();if(!ne.links?.length&&!t){for(const C of c.values())te(C);c.clear();return}const ue=new Map(n.readUnits().map(C=>[C.id,C])),Q=new Map(ne.markers.map(C=>[C.id,C]));if(t&&(!n.editable()||!ui(ue.get(t)?.position))){Te(),o="",oe();return}const ee=new Set;for(const C of(ne.links??[]).slice(0,pa)){if(ee.has(C.id))continue;ee.add(C.id);let me=c.get(C.id);if(!me){const ae=new zt,Ee=new Dt(new Float32Array(6),3).setUsage(xl);ae.setAttribute("position",Ee);const be=new Ei({color:"#ff6935",depthTest:!1,depthWrite:!1}),Le=new ln(ae,be);Le.name=`Editor link ${C.id}`,Le.userData.editorLinkId=C.id,Le.userData.editorTools=!0,Le.renderOrder=1e3,Le.frustumCulled=!1,me={line:Le,position:Ee,coordinates:[NaN,NaN,NaN,NaN,NaN,NaN]},c.set(C.id,me),a.add(Le)}const he=ue.get(C.fromUnitId)?.position,Re=(C.to.kind==="unit"?ue.get(C.to.id):Q.get(C.to.id))?.position;me.line.visible=C.visible!==!1&&ui(he)&&ui(Re);const pe=ga(C.color)?C.color.toLowerCase():"#ff6935";if(`#${me.line.material.color.getHexString()}`!==pe&&me.line.material.color.set(pe),!ui(he)||!ui(Re))continue;let Ve=!1;for(let ae=0;ae<6;ae++){const Ee=ae<3?he:Re,be=ae%3,Le=(be===0?Ee.x:be===1?Ee.y:Ee.z)*tt;me.coordinates[ae]!==Le&&(me.coordinates[ae]=Le,me.position.array[ae]=Le,Ve=!0)}Ve&&(me.position.needsUpdate=!0)}for(const[C,me]of c)ee.has(C)||(te(me),c.delete(C))}function oe(){if(e)return;const ne=n.read(),ue=n.readUnits(),Q=(ne.links??[]).slice(0,pa);t&&(!n.editable()||!ue.some(A=>A.id===t&&ui(A.position)))&&Te();const ee=ge(ue),C=ue.find(A=>A.id===ee),me=R.value,he=[p("跟随选中单位",""),...ue.filter(A=>ui(A.position)).map(A=>p(A.label,A.id))];L.replaceChildren(...he),L.value=he.some(A=>A.value===ee)?ee:"";const Re=[p("选择目标","")];for(const A of ue)A.id!==ee&&ui(A.position)&&Re.push(p(`单位：${A.label}`,Zu({kind:"unit",id:A.id})));for(const A of ne.markers)ui(A.position)&&Re.push(p(`标记：${A.label}`,Zu({kind:"marker",id:A.id})));R.replaceChildren(...Re),R.value=Re.some(A=>A.value===me)?me:"",Q.some(A=>A.id===r)||(r=Q[0]?.id??""),I.replaceChildren(...Q.map(A=>{const x=ue.find(K=>K.id===A.fromUnitId)?.label??A.fromUnitId,z=(A.to.kind==="unit"?ue:ne.markers).find(K=>K.id===A.to.id)?.label??A.to.id;return p(`${x} → ${z}${A.visible===!1?" · 隐藏":""}`,A.id)})),I.value=r;const pe=Q.find(A=>A.id===r),Ve=pe?`${pe.id}|${pe.color}|${pe.visible!==!1}`:"";Ve!==s&&(s=Ve,pe?(b.value=ga(pe.color)?pe.color.toLowerCase():"#ff6935",N.value=ma.find(([A])=>A===b.value)?.[0]??"custom",k.checked=pe.visible!==!1):k.checked=!0);const ae=q(),Ee=ui(C?.position);y.disabled=!t&&(!ae||!Ee||Q.length>=pa),y.setAttribute("aria-pressed",String(!!t)),v.disabled=!t,L.disabled=!ae||!!t,R.disabled=!ae,N.disabled=b.disabled=!ae,M.disabled=!ae||!Ee||!R.value||Q.length>=pa,k.disabled=G.disabled=$.disabled=!ae||!pe,D.textContent=`源：${C?.label??"未选择"}${t?" · 连线中":""}`;const be=kp(R.value),Le=be&&(be.kind==="unit"?ue:ne.markers).find(A=>A.id===be.id)?.label;j.textContent=o||(Le?`目标：${Le}`:""),Ae()}function Ke(){if(!e){Te(),e=!0,typeof removeEventListener=="function"&&removeEventListener("keydown",re);for(const ne of h)ne.element.removeEventListener(ne.event,ne.run);for(const ne of c.values())te(ne);c.clear(),n.world.remove(a),u.remove()}}return oe(),{sync:oe,update:Ae,active:()=>!e&&!!t,pick:yt,cancel:ze,dispose:Ke}}function jm(n,e){const t=e.x-n.x,i=n.z-e.z;return!Number.isFinite(t)||!Number.isFinite(i)||t===0&&i===0?void 0:(Math.atan2(t,i)*180/Math.PI%360+360)%360}function Zm(n,e){const t=jm(n,e);return t===void 0?"方位角未定义（起终点水平重合，N=0°）":`方位角 ${Math.round(t*100)/100%360}° (N=0°)`}const Bw=.12,Hw=1e5,Vw=1e3,Ga=n=>({x:n.x,y:n.y,z:n.z}),Km=n=>({pitch:n.pitch,yaw:n.yaw,roll:n.roll});function Al(n){if(!n||!["x","y","z"].every(e=>{const t=n[e];return Number.isFinite(t)&&Math.abs(t)<=Hw}))throw new RangeError("Marker coordinates must be finite and within +/-100000 km")}function Jm(n){if(!Number.isFinite(n)||n<=0||n>Vw)throw new RangeError("Marker size must be positive and at most 1000 km")}function Qm(n){if(!n||![n.pitch,n.yaw,n.roll].every(Number.isFinite))throw new RangeError("Marker attitude must contain finite radians")}function Ii(n){return["line","arrow","circle","square","sphere"].includes(n.symbol)}function Wa(n){const e=n.attitude??{pitch:0,yaw:0,roll:0};return Qm(e),new nn().setFromEuler(new In(e.pitch,e.yaw,e.roll,"YXZ"))}function eg(n){const e=new S((n.sizeKm??Bw)/2,0,0).applyQuaternion(Wa(n)),t=n.position;return[{x:t.x-e.x,y:t.y-e.y,z:t.z-e.z},{x:t.x+e.x,y:t.y+e.y,z:t.z+e.z}]}function ws(n){if(n.controlPoints!==void 0){if(n.controlPoints.length!==2)throw new RangeError("Marker control points must contain exactly two points");return[Ga(n.controlPoints[0]),Ga(n.controlPoints[1])]}return eg(n)}function hl(n,e){if(!Array.isArray(e)||e.length!==2)throw new RangeError("Marker control points must contain exactly two points");const[t,i]=e;Al(t),Al(i);const r=i.x-t.x,s=i.y-t.y,o=i.z-t.z,a=Math.hypot(r,s,o);Jm(a);const c=Wa(n),l=new S(1,0,0).applyQuaternion(c).normalize(),u=new S(r/a,s/a,o/a);let d;if(n.attitude!==void 0&&l.distanceTo(u)<=16*Number.EPSILON)d=Km(n.attitude);else{const h=new nn().setFromUnitVectors(l,u).multiply(c).normalize(),f=new In().setFromQuaternion(h,"YXZ");d={pitch:f.x,yaw:f.y,roll:f.z}}return{...n,position:{x:(t.x+i.x)/2,y:(t.y+i.y)/2,z:(t.z+i.z)/2},attitude:d,sizeKm:a,controlPoints:[Ga(t),Ga(i)]}}function tg(n,e,t,i){Al(e),Qm(t),Jm(i);const r={...n,position:Ga(e),attitude:Km(t),sizeKm:i};return n.controlPoints!==void 0&&(r.controlPoints=eg(r),r.controlPoints.forEach(Al)),r}const ni=n=>({x:n.x,y:n.y,z:n.z}),$n=n=>new S(n.x,n.y,n.z).multiplyScalar(tt),Rs=(n,e)=>Math.hypot(e.x-n.x,e.y-n.y,e.z-n.z),$r=n=>`${n}-${crypto.randomUUID()}`,Cr=n=>Number(n.toFixed(5)).toString(),Ku=n=>[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=1e5),Gw=(n,e)=>({horizontal:Math.hypot(e.x-n.x,e.z-n.z),deltaY:e.y-n.y,slant:Rs(n,e)}),ng=(n,e)=>{const t=Gw(n,e);return`水平 ${Cr(t.horizontal)} km · 高差 ${t.deltaY>=0?"+":""}${Cr(t.deltaY)} km · 斜距 ${Cr(t.slant)} km`},Pn=n=>n==="measure"||n==="bearing",nl=n=>({measure:"测距",bearing:"方位角",circle:"圆规",sphere:"范围球"})[n],_a=n=>n.kind==="bearing"?Zm(n.points[0],n.points[1]):ng(n.points[0],n.points[1]),Fp=(n,e,t,i)=>t==="sphere"?Rs(n,e):i==="xz"?Math.hypot(e.x-n.x,e.z-n.z):i==="xy"?Math.hypot(e.x-n.x,e.y-n.y):Math.hypot(e.y-n.y,e.z-n.z);function Ww(n){let e=!1,t="",i="",r="",s=null,o=!1,a,c="",l=n.editable(),u=!1,d=null,h=null;const f=new An,m=new An;f.name="Editor markers and drawings",m.name="Editor tool preview",f.userData.editorTools=!0,m.userData.editorTools=!0,n.world.add(f,m);const _=document.createElement("div");_.className="editor-tools-labels",_.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;",n.labelRoot.append(_);const g=[],p=[],w=document.createElement("style");w.textContent=`
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
  `,n.markersPanel.append(w);const y=(T,P="")=>{const F=document.createElement(T);return F.textContent=P,F},v=(T,P)=>{T.classList.add("scene-tool-panel"),T.append(y("h3",P))};v(n.markersPanel,"自定义标记点"),v(n.drawingsPanel,"标尺与圆规");const L=y("p"),D=y("p");L.id="marker-status",D.id="drawing-status";for(const T of[L,D])T.className="tool-status",T.setAttribute("role","status");const R=(T,P=d?.kind==="marker"?"markers":"drawing")=>{(P==="markers"?L:D).textContent=T},N=T=>(p.push(T),T),b=T=>{const P=y("div");return P.className="tool-actions",T.append(P),P},M=[];let I=null;const k=()=>{for(const T of M)T.setAttribute("aria-pressed",String(T===I))},O=(T,P,F,B,Y=!0)=>{const ce=y("button",F);return ce.type="button",ce.id=P,ce.addEventListener("click",()=>{if(!(e||Y&&!n.editable()))try{B()}catch(de){R(de instanceof Error?de.message:String(de),P.startsWith("marker-")?"markers":"drawing")}}),T.append(ce),Y&&N(ce),ce},G=(T,P,F,B=!0)=>{const Y=y("details");return Y.id=P,Y.open=B,Y.append(y("summary",F)),T.append(Y),Y},$=(T,P,F,B,Y="text")=>{const ce=y("label");ce.className="tool-row",ce.append(y("span",F));const de=N(y("input"));return de.id=P,de.type=Y,de.value=B,Y==="number"?de.step="any":Y==="text"&&(de.maxLength=128),ce.append(de),T.append(ce),de},j=(T,P,F,B,Y=!0)=>{const ce=y("label");ce.className="tool-row",ce.append(y("span",F));const de=y("select");return de.id=P,de.setAttribute("aria-label",F),B.forEach(([nt,Oe])=>de.add(new Option(Oe,nt))),ce.append(de),T.append(ce),Y&&N(de),de},re=T=>{if(!T.value.trim()||!Number.isFinite(T.valueAsNumber))throw new Error("请填写有效数值");return T.valueAsNumber},q=(T,P,F,B)=>{const Y=y("div");Y.className="tool-xyz",T.append(y("p",F),Y);const ce={};for(const de of["x","z","y"]){const nt=de==="y"?"Z":de==="z"?"Y":"X",Oe=y("label",`${nt}（km）`),Lt=N(y("input"));Lt.id=`${P}-${de}`,Lt.type="number",Lt.step="any",Lt.value=String(B[de]),Lt.setAttribute("aria-label",`${F} ${nt}（km）`),Oe.append(Lt),Y.append(Oe),ce[de]=Lt}return{row:Y,fields:ce,read:()=>{const de={x:re(ce.x),y:re(ce.y),z:re(ce.z)};if(!Ku(de))throw new Error("点位坐标须为有限数值，绝对值不超过100000 km");return de},set:de=>{for(const nt of["x","y","z"])ce[nt].value=String(de[nt])}}},ge=T=>/^#[0-9a-f]{6}$/i.test(T.value)?T.value.toLowerCase():"#ffd84a",Te=(T,P)=>T.value.trim().slice(0,128)||P,ze=T=>{for(const P of[...T.children])T.remove(P),P.traverse(F=>{(F instanceof we||F instanceof ln||F instanceof ev)&&(F.geometry.dispose(),(Array.isArray(F.material)?F.material:[F.material]).forEach(Y=>Y.dispose()))})},He=(T,P,F=1)=>new ln(new zt().setFromPoints(T),new Ei({color:P,transparent:!0,opacity:F,depthWrite:!1})),at=(T,P,F,B=.045)=>{const Y=new we(new ns(B*tt,10,8),new yn({color:F,transparent:!0,depthWrite:!1}));return Y.position.copy($n(P)),T.add(Y),Y},yt=(T,P)=>{P==="xz"?T.rotation.x=-Math.PI/2:P==="yz"&&(T.rotation.y=Math.PI/2)},te=(T,P)=>Array.from({length:129},(F,B)=>{const Y=B/128*Math.PI*2,ce=Math.cos(Y)*T,de=Math.sin(Y)*T;return P==="xy"?new S(ce,de,0):P==="yz"?new S(0,ce,de):new S(ce,0,de)}),Ae=(T,P,F=!1)=>{const B=new An;B.position.copy($n(P.position)),B.quaternion.copy(Wa(P)),T.add(B),B.userData.markerSize=P.sizeKm??.12;const Y=tt*(P.sizeKm??.12),ce=P.color,de=F?.65:1,nt=de*Math.min(.6,Math.max(.02,P.opacity??.12));if(P.symbol==="cross")B.add(He([new S(-Y,.4,-Y),new S(Y,.4,Y)],ce,de)),B.add(He([new S(-Y,.4,Y),new S(Y,.4,-Y)],ce,de));else if(P.symbol==="flag"){B.add(He([new S(0,.2,0),new S(0,Y*3,0)],ce,de));const Oe=new we(new rs(Y*1.6,Y),new yn({color:ce,transparent:!0,opacity:.5,side:mn,depthWrite:!1}));Oe.position.set(Y*.8,Y*2.5,0),B.add(Oe)}else if(P.symbol==="pin"){B.add(He([new S(0,.2,0),new S(0,Y*2.5,0)],ce,de));const Oe=new we(new Ds(Y*.6),new yn({color:ce,transparent:!0,opacity:de,depthWrite:!1}));Oe.position.y=Y*2.5,B.add(Oe),B.add(He(te(Y*.7,"xz"),ce,de))}else if(P.symbol==="line"||P.symbol==="arrow")B.add(He([new S(-Y/2,0,0),new S(Y/2,0,0)],ce,de)),P.symbol==="arrow"&&B.add(He([new S(Y*.25,0,-Y*.2),new S(Y/2,0,0),new S(Y*.25,0,Y*.2)],ce,de));else if(P.symbol==="circle"){const Oe=new we(new Oa(Y/2,64),new yn({color:ce,transparent:!0,opacity:nt,side:mn,depthWrite:!1}));yt(Oe,"xz"),B.add(Oe,He(te(Y/2,"xz"),ce,de))}else if(P.symbol==="square"){const Oe=Y/2,Lt=new we(new rs(Y,Y),new yn({color:ce,transparent:!0,opacity:nt,side:mn,depthWrite:!1}));yt(Lt,"xz"),B.add(Lt,He([new S(-Oe,0,-Oe),new S(Oe,0,-Oe),new S(Oe,0,Oe),new S(-Oe,0,Oe),new S(-Oe,0,-Oe)],ce,de))}else if(P.symbol==="sphere"){B.add(new we(new ns(Y/2,32,20),new yn({color:ce,transparent:!0,opacity:nt,side:mn,depthWrite:!1})));for(const Oe of["xz","xy","yz"])B.add(He(te(Y/2,Oe),ce,de*.7))}else B.add(He([new S(-Y*.6,.4,0),new S(Y*.6,.4,0)],ce,de));return["circle","square","sphere"].includes(P.symbol)&&B.children.filter(Oe=>Oe instanceof we).forEach(Oe=>{Oe.visible=P.filled!==!1}),F||B.traverse(Oe=>{Oe.userData.editorTool={kind:"marker",id:P.id}}),!F&&P.id===t&&Ii(P)&&ws(P).forEach((Oe,Lt)=>{const Yt=$n(Oe).sub($n(P.position)).applyQuaternion(B.quaternion.clone().invert()),fr=at(B,{x:Yt.x/tt,y:Yt.y/tt,z:Yt.z/tt},ce);fr.userData.editorTool={kind:"marker",id:P.id,pointIndex:Lt}}),B},oe=(T,P)=>{const[F,B]=P.points;if(!F||!B)return;T.position.copy($n(F)),T.position.y+=.3;const Y=(B.x-F.x)*tt,ce=(B.z-F.z)*tt,de=Math.hypot(Y,ce),nt=jm(F,B),Oe=Math.min(.6*tt,Math.max(.1*tt,de*.25)),Lt=(nt??0)*Math.PI/180;for(const Yt of T.children)if(Yt instanceof ln){let fr;if(Yt.name==="bearing-direction")fr=[new S,new S(Y,0,ce)];else if(Yt.name==="bearing-north-reference")fr=[new S,new S(0,0,-Oe*1.3)];else if(Yt.name==="bearing-arc")fr=Array.from({length:65},(Wi,eo)=>{const fs=Lt*eo/64;return new S(Math.sin(fs)*Oe,0,-Math.cos(fs)*Oe)}),Yt.visible=nt!==void 0&&nt>0;else{const Wi=Math.min(Oe*.3,de*.2),eo=de?Y/de:0,fs=de?ce/de:0;fr=[new S(Y-eo*Wi-fs*Wi*.5,0,ce-fs*Wi+eo*Wi*.5),new S(Y,0,ce),new S(Y-eo*Wi+fs*Wi*.5,0,ce-fs*Wi-eo*Wi*.5)],Yt.visible=nt!==void 0}Yt.geometry.setFromPoints(fr),Yt.geometry.computeBoundingSphere(),Yt.material instanceof kf&&(Yt.material.dashSize=Oe*.12,Yt.material.gapSize=Oe*.09,Yt.computeLineDistances())}else Yt.userData.bearingEndpoint!==void 0&&Yt.position.set(Yt.userData.bearingEndpoint===1?Y:0,0,Yt.userData.bearingEndpoint===1?ce:0)},Ke=(T,P,F=!1)=>{const B=new An;T.add(B),F||(B.userData.editorTool={kind:"drawing",id:P.id});const Y=P.color,ce=Math.min(.6,Math.max(.02,P.opacity??.12));if(P.kind==="bearing"){if(P.points.length<2)return B;const de=He([new S,new S],Y,F?.65:.95);de.name="bearing-direction";const nt=new ln(new zt().setFromPoints([new S,new S]),new kf({color:Y,transparent:!0,opacity:F?.5:.75,depthWrite:!1,depthTest:!1}));nt.name="bearing-north-reference";const Oe=He(Array.from({length:65},()=>new S),Y,F?.55:.85);Oe.name="bearing-arc";const Lt=He([new S,new S,new S],Y,F?.65:.95);Lt.name="bearing-arrow",B.add(de,nt,Oe,Lt),P.points.forEach((Yt,fr)=>{const Wi=at(B,{x:0,y:0,z:0},Y);Wi.userData.bearingEndpoint=fr,F||(Wi.userData.editorTool={kind:"drawing",id:P.id,pointIndex:fr})}),B.traverse(Yt=>{(Yt instanceof ln||Yt instanceof we)&&(Yt.material.depthTest=!1,Yt.renderOrder=40)}),oe(B,P)}else if(P.kind==="measure"){if(P.points.length<2)return B;B.add(He(P.points.map($n),Y,F?.65:.9)),P.points.forEach((de,nt)=>{const Oe=at(B,de,Y);F||(Oe.userData.editorTool={kind:"drawing",id:P.id,pointIndex:nt})})}else{const de=P.points[0],nt=(P.radiusKm??0)*tt;if(!de||nt<=0)return B;B.position.copy($n(de));const Oe=P.plane??"xz";if(P.kind==="circle"){const Lt=new we(new Oa(nt,96),new yn({color:Y,transparent:!0,opacity:F?ce/2:ce,side:mn,depthWrite:!1}));yt(Lt,Oe),Oe==="xz"&&(Lt.position.y=.3),Lt.visible=P.filled!==!1,B.add(Lt,He(te(nt,Oe),Y,F?.55:.8)),at(B,{x:0,y:0,z:0},Y)}else{const Lt=new we(new ns(nt,40,24),new yn({color:Y,transparent:!0,opacity:F?ce/2:ce,side:mn,depthWrite:!1}));Lt.visible=P.filled!==!1,B.add(Lt);for(const Yt of["xz","xy","yz"])B.add(He(te(nt,Yt),Y,F?.35:.5));at(B,{x:0,y:0,z:0},Y)}}return B},ne=(T,P,F,B,Y,ce,de)=>{const nt=new Sn;nt.position.copy(P),T.add(nt);const Oe=y("button",F);return Oe.type="button",Oe.title=Y,Oe.style.setProperty("--tool-color",B),Oe.addEventListener("click",Lt=>{Lt.stopPropagation(),ce()}),Oe.addEventListener("dblclick",Lt=>{Lt.stopPropagation(),de()}),_.append(Oe),g.push({object:nt,element:Oe}),Oe},ue=j(n.markersPanel,"marker-list","标记列表",[],!1);ue.size=5;const Q=b(n.markersPanel);O(Q,"marker-focus","定位",()=>{const T=ci();T&&n.focus(ni(T.position))},!1);const ee=j(n.markersPanel,"marker-endpoint","移动目标",[["whole","整体"],["a","端点 A"],["b","端点 B"]],!1),C=O(Q,"marker-move","三轴移动",()=>{ci()&&(Ht(t,!0,a),n.onTransformMode?.("translate"))}),me=O(Q,"marker-rotate","旋转",()=>{ci()&&(Ht(t),n.onTransformMode?.("rotate"))}),he=O(Q,"marker-scale","缩放",()=>{ci()&&(Ht(t),n.onTransformMode?.("scale"))});O(Q,"marker-copy","复制",()=>{const T=ci();if(!T)throw new Error("请先选择标记");const P={...T,...T.attitude?{attitude:{...T.attitude}}:{},id:$r("marker"),label:`${T.label.slice(0,122)} 副本`,position:{...T.position,x:T.position.x+.2,z:T.position.z+.2}};P.controlPoints&&(P.controlPoints=P.controlPoints.map(F=>({...F,x:F.x+.2,z:F.z+.2}))),Pe("复制标记",F=>F.markers.push(P),"markers",()=>{Z("marker",P.id)})}),O(Q,"marker-delete","删除",()=>{const T=t;if(!T)throw new Error("请先选择标记");Pe("删除标记",P=>{P.markers=P.markers.filter(F=>F.id!==T),P.links&&(P.links=P.links.filter(F=>F.to.kind!=="marker"||F.to.id!==T))},"markers",()=>{Z("marker","")})});const Re=G(n.markersPanel,"marker-properties","标记属性与位置"),pe=$(Re,"marker-label","名称","标记"),Ve=$(Re,"marker-color","颜色","#ffd84a","color"),ae=j(Re,"marker-symbol","符号",[["pin","定位针"],["cross","十字"],["flag","旗帜"],["text","文字"],["line","线段（长度）"],["arrow","箭头（长度）"],["circle","圆（直径）"],["square","正方形（边长）"],["sphere","球（直径）"]]),Ee=$(Re,"marker-size","尺寸（km）",".12","number");Ee.min=".00001",Ee.max="1000";const be=$(Re,"marker-filled","填充","","checkbox");be.checked=!0;const Le=$(Re,"marker-opacity","填充透明度",".12","number");Le.min=".02",Le.max=".6",Le.step=".01";const A=$(Re,"marker-visible","显示标记","","checkbox");A.checked=!0;const x={pitch:$(Re,"marker-pitch","俯仰 X°","0","number"),yaw:$(Re,"marker-yaw","方向 Z°","0","number"),roll:$(Re,"marker-roll","翻滚 Y°","0","number")},z=q(Re,"marker-position","位置",{x:0,y:0,z:0}),K=$(Re,"marker-height","高度（m）","0","number"),X=()=>{K.value=z.fields.y.value.trim()?String(z.fields.y.valueAsNumber*1e3):""},W=q(Re,"marker-a","端点 A",{x:-.06,y:0,z:0}),Ie=q(Re,"marker-b","端点 B",{x:.06,y:0,z:0}),xe=$(Re,"marker-a-height","端点 A 高度（m）","0","number"),Ge=$(Re,"marker-b-height","端点 B 高度（m）","0","number"),Xe=y("label");Xe.className="tool-row",Xe.append(y("span","说明"));const _e=N(y("textarea"));_e.id="marker-description",_e.maxLength=4096,Xe.append(_e),Re.append(Xe);const Ne=b(Re),Je=O(Ne,"marker-apply","应用所选标记",()=>{const T=t;if(!T)throw new Error("请先选择标记");const P=V(T);Pe("修改标记",F=>{const B=F.markers.findIndex(Y=>Y.id===T);if(B<0)throw new Error("标记已被移除");F.markers[B]=P},"markers")});O(Ne,"marker-ground","坐标贴地",()=>{const T=z.read();T.y=n.sampleHeightKm(T.x,T.z),z.set(T),X(),R("地形高度已填入","markers")});const Qe=G(n.markersPanel,"marker-create","新增标记"),Ce=b(Qe),ut=(T,P,F,B)=>{const Y=O(T,P,F,()=>B(Y));return M.push(Y),Y};ut(Ce,"marker-pick","点地图放置",T=>{const P=V($r("marker"),{x:0,y:0,z:0});hr({kind:"marker",marker:P},T),n.onOpenPanel?.("markers"),R("标记放置中","markers")}),ut(Ce,"marker-pick-two","两点确认方向与尺寸",T=>{const P=V($r("marker"),{x:0,y:0,z:0});if(!Ii(P))throw new Error("请选择线段、箭头、圆、正方形或球");hr({kind:"marker",marker:P,twoPoint:!0},T),n.onOpenPanel?.("markers"),R("端点 A 选择中","markers")}),O(Ce,"marker-add-position","按坐标新增",()=>{const T=V($r("marker"));Pe("新增标记",P=>P.markers.push(T),"markers",()=>{Z("marker",T.id)})}),O(Ce,"marker-new","清空选择／新标记",()=>{Z("marker",""),je(),Nt(),Ut(),jt(),H()},!1),O(Ce,"marker-cancel","取消放置",En,!1),n.markersPanel.append(L);const U=j(n.drawingsPanel,"drawing-list","标尺／图形列表",[],!1);U.size=5;const ye=b(n.drawingsPanel);O(ye,"drawing-focus","定位",()=>{const T=Pi();T&&an(T)},!1);const Se=j(n.drawingsPanel,"drawing-endpoint","移动目标",[["whole","整体"],["a","端点 A"],["b","端点 B"]],!1),qe=O(ye,"drawing-move","三轴移动",()=>{Pi()?.points[0]&&Vt(i,!0,a)});O(ye,"drawing-copy","复制",()=>{const T=Pi();if(!T)throw new Error("请先选择标尺或图形");const P={...T,id:$r("drawing"),label:`${T.label.slice(0,122)} 副本`,points:T.points.map(F=>({...F,x:F.x+.2,z:F.z+.2}))};Pe("复制制图标尺",F=>F.drawings.push(P),"drawing",()=>{Z("drawing",P.id)})}),O(ye,"drawing-delete","删除",()=>{const T=i;if(!T)throw new Error("请先选择标尺或图形");Pe("删除制图标尺",P=>{P.drawings=P.drawings.filter(F=>F.id!==T)},"drawing",()=>{Z("drawing","")})});const le=G(n.drawingsPanel,"drawing-properties","标尺属性与坐标"),se=$(le,"drawing-label","名称","测距"),$e=j(le,"drawing-kind","类型",[["measure","自由测距"],["bearing","水平方位角（N=0°）"],["circle","平面圆规"],["sphere","立体半透明球"]]),ie=$(le,"drawing-color","颜色","#2d8cff","color"),Ye=$(le,"drawing-visible","显示图形","","checkbox");Ye.checked=!0;const Ue=$(le,"drawing-filled","填充","","checkbox");Ue.checked=!0;const mt=$(le,"drawing-opacity","填充透明度",".12","number");mt.min=".02",mt.max=".6",mt.step=".01";const St=j(le,"drawing-plane","圆规平面",[["xz","XY 水平"],["xy","XZ 垂直"],["yz","YZ 垂直"]]),oi=q(le,"drawing-a","起点／中心",{x:0,y:0,z:0}),Ki=$(le,"drawing-height","高度（m）","0","number"),Jn=q(le,"drawing-b","终点",{x:1,y:0,z:0}),us=$(le,"drawing-b-height","终点高度（m）","0","number"),Qo=()=>{Ki.value=oi.fields.y.value.trim()?String(oi.fields.y.valueAsNumber*1e3):"",us.value=Jn.fields.y.value.trim()?String(Jn.fields.y.valueAsNumber*1e3):""},ai=$(le,"drawing-radius","半径（km）","2","number");ai.min=".00001",ai.max="1000";const ds=y("p");ds.id="drawing-readout",le.append(ds);const hs=b(le),ea=O(hs,"drawing-apply","应用所选图形",()=>{const T=i;if(!T)throw new Error("请先选择标尺或图形");const P=Me(T);Pe("修改制图标尺",F=>{const B=F.drawings.findIndex(Y=>Y.id===T);if(B<0)throw new Error("图形已被移除");F.drawings[B]=P},"drawing")});O(hs,"drawing-ground","起点／中心贴地",()=>{const T=oi.read();T.y=n.sampleHeightKm(T.x,T.z),oi.set(T),xt(),R("地形高度已填入","drawing")});const Zs=G(n.drawingsPanel,"drawing-create","测距与制图"),Ks=b(Zs);ut(Ks,"drawing-pick-measure","点选两点测距",T=>Kt("measure",T)),ut(Ks,"drawing-pick-bearing","点选两点测方位角",T=>Kt("bearing",T));const tu=y("p","方位角：正北 N=0°，顺时针 E=90°、S=180°、W=270°；仅按水平位置计算。");Zs.append(tu),ut(Ks,"drawing-pick-circle","圆规：中心＋半径点",T=>Kt("circle",T)),ut(Ks,"drawing-pick-sphere","球体：中心＋半径点",T=>Kt("sphere",T));const Js=b(Zs);O(Js,"drawing-add-position","按坐标／半径新增",()=>{const T=Me($r("drawing"));Pe("新增制图标尺",P=>P.drawings.push(T),"drawing",()=>{Z("drawing",T.id)})}),ut(Js,"drawing-pick-center","点地图定中心＋输入半径",T=>{const P=$e.value;if(Pn(P))throw new Error("请选择平面圆规或球体，再使用输入半径方式");const F=Me($r("drawing"),!0),B=re(ai);if(B<=0||B>1e3)throw new Error("半径须大于0且不超过1000 km");F.radiusKm=B,hr({kind:P,drawing:F},T),dr=!0,R("中心点放置中","drawing")}),O(Js,"drawing-new","清空选择／新图形",()=>{Z("drawing",""),ht(),Nt(),jt(),H()},!1),O(Js,"drawing-cancel","取消作图",En,!1),n.drawingsPanel.append(D);let dr=!1;function ci(){return n.read().markers.find(T=>T.id===t)}function Pi(){return n.read().drawings.find(T=>T.id===i)}function E(){if(e||!s)return null;const T=n.read(),P=s==="marker"?t:i,F=s==="drawing"?T.drawings.find(de=>de.id===P):void 0,B=s==="marker"?T.markers.find(de=>de.id===P):void 0,Y=Pn(F?.kind)||B&&Ii(B)?a:void 0,ce=B?Y===void 0?B.position:ws(B)[Y]:F?.points[Y??0];return P&&ce?{kind:s,id:P,position:ni(ce),...Y===void 0?{}:{pointIndex:Y}}:null}function H(T=!1){if(e||u)return;const P=E(),F=P?JSON.stringify([P.kind,P.id,P.pointIndex]):"",B=n.editable(),Y=F!==c||!!P&&B!==l;if(c=F,l=B,!(!Y&&!T)){u=!0;try{n.onSelectionChange?.(P)}finally{u=!1}}}function Z(T,P,F){T==="marker"?t=P:i=P,a=F,P?s=T:s===T&&(s=null)}function J(){e||(t="",i="",a=void 0,s=null,je(),ht(),Nt(),Ut(),jt(),H())}function V(T,P){const F=re(Ee);if(F<=0||F>1e3)throw new Error("尺寸须大于0且不超过1000 km");const B={id:T,label:Te(pe,"标记"),position:P??z.read(),color:ge(Ve),symbol:ae.value,sizeKm:F,visible:A.checked};if(["circle","square","sphere"].includes(B.symbol)){const de=re(Le);if(de<.02||de>.6)throw new Error("透明度范围为0.02–0.6");const nt=n.read().markers.find(Oe=>Oe.id===T);(!nt||nt.filled!==void 0||!be.checked)&&(B.filled=be.checked),(!nt||nt.opacity!==void 0||de!==.12)&&(B.opacity=de)}const Y=_e.value.trim().slice(0,4096);Y&&(B.description=Y);const ce=n.read().markers.find(de=>de.id===T);if(Ii(B)){ce?.controlPoints&&(B.controlPoints=ce.controlPoints.map(ni));const de={pitch:0,yaw:0,roll:0};for(const nt of["pitch","yaw","roll"]){const Oe=ce?.attitude?.[nt]??0;de[nt]=x[nt].value===String(Zt.radToDeg(Oe))?Oe:Zt.degToRad(re(x[nt]))}if((ce?.attitude||Object.values(de).some(nt=>nt!==0))&&(B.attitude=de),o&&!P)return hl(B,[W.read(),Ie.read()]);if(B.controlPoints&&ce&&(Rs(ce.position,B.position)>0||B.sizeKm!==ce.sizeKm||JSON.stringify(B.attitude)!==JSON.stringify(ce.attitude)))return tg(B,B.position,de,F)}return B}function Me(T,P=!1){const F=$e.value,B=P?{x:0,y:0,z:0}:oi.read(),Y={id:T,label:Te(se,nl(F)),kind:F,points:Pn(F)?[B,P?ni(B):Jn.read()]:[B],color:ge(ie),visible:Ye.checked};if(!Pn(F)){const ce=P?1:re(ai),de=re(mt);if(ce<=0||ce>1e3)throw new Error("半径须大于0且不超过1000 km");if(de<.02||de>.6)throw new Error("透明度范围为0.02–0.6");Y.radiusKm=ce,Y.opacity=de,Y.plane=St.value;const nt=n.read().drawings.find(Oe=>Oe.id===T);(!nt||nt.filled!==void 0||!Ue.checked)&&(Y.filled=Ue.checked)}return Y}function Pe(T,P,F,B){if(!n.editable())return R("只读",F),!1;try{const Y=n.change(T,P);return Y?(B?.(),B&&(r=""),Rn(),R(`${T}已保存`,F)):R("操作未保存或内容没有变化",F),Y}catch(Y){return R(Y instanceof Error?Y.message:String(Y),F),!1}}function et(T,P,F,B){const Y=d,ce=h,de=dr,nt=I;d=null,I=null,n.onPickingChange(!1);const Oe=Pe(T,P,F,B);if(Oe)h=null,dr=!1,ze(m);else if(Y&&n.editable()&&!e){const Lt=(F==="markers"?L:D).textContent;d=Y,h=ce,dr=de,I=nt,n.onPickingChange(!0),Xn(),R(Lt||"未保存",F)}return k(),Oe}function je(){const T=ci();pe.value=T?.label??"标记",Ve.value=T?.color??"#ffd84a",ae.value=T?.symbol??"pin",A.checked=T?.visible!==!1,_e.value=T?.description??"",Ee.value=String(T?.sizeKm??.12),be.checked=T?.filled!==!1,Le.value=String(T?.opacity??.12),lt(),z.set(T?.position??{x:0,y:0,z:0}),X(),o=!1;for(const F of["pitch","yaw","roll"])x[F].value=String(Zt.radToDeg(T?.attitude?.[F]??0));const P=ws(T??{position:{x:0,y:0,z:0}});W.set(P[0]),Ie.set(P[1]),Ji(),s==="marker"&&(!T||!Ii(T))&&(a=void 0),ee.value=s==="marker"&&a===0?"a":s==="marker"&&a===1?"b":"whole",ee.closest("label").hidden=!T||!Ii(T),Je.disabled=!n.editable()||!T,C.disabled=!n.editable()||!T,me.disabled=he.disabled=!n.editable()||!T||!Ii(T)}function ht(){const T=Pi();se.value=T?.label??"测距",$e.value=T?.kind??"measure",ie.value=T?.color??"#2d8cff",Ue.checked=T?.filled!==!1,Ye.checked=T?.visible!==!1,mt.value=String(T?.opacity??.12),St.value=T?.plane??"xz",ai.value=String(T?.radiusKm??2),oi.set(T?.points[0]??{x:0,y:0,z:0}),Jn.set(T?.points[1]??{x:1,y:0,z:0}),_t(),Qo(),ea.disabled=!n.editable()||!T,qe.disabled=!n.editable()||!T?.points[0],xt()}function _t(){const T=Pi();s==="drawing"&&(!Pn(T?.kind)||a!==void 0&&!T?.points[a])&&(a=void 0),Se.value=s==="drawing"&&a===0?"a":s==="drawing"&&a===1?"b":"whole",Se.closest("label").hidden=!Pn(T?.kind),Se.disabled=!Pn(T?.kind)}function lt(){const T=["line","arrow","circle","square","sphere"].includes(ae.value),P=["circle","square","sphere"].includes(ae.value);be.closest("label").hidden=!P;for(const F of Object.values(x))F.closest("label").hidden=!T;for(const F of[W.row,Ie.row])F.hidden=!T;xe.closest("label").hidden=!T,Ge.closest("label").hidden=!T,Le.closest("label").hidden=!P,Le.disabled=!n.editable()||!be.checked}function xt(){const T=$e.value,P=Pn(T);Jn.row.hidden=!P;const F=Jn.row.previousElementSibling;F&&(F.hidden=!P),ai.closest("label").hidden=P,mt.closest("label").hidden=P,St.closest("label").hidden=T!=="circle",Ue.closest("label").hidden=P,us.closest("label").hidden=!P,mt.disabled=!n.editable()||!Ue.checked,Qo();try{ds.textContent=T==="bearing"?Zm(oi.read(),Jn.read()):T==="measure"?ng(oi.read(),Jn.read()):`半径 ${Cr(re(ai))} km · 直径 ${Cr(re(ai)*2)} km${T==="circle"?` · ${{xz:"XY",xy:"XZ",yz:"YZ"}[St.value]}平面`:" · 3D范围"}`}catch{ds.textContent="—"}}function Nt(){const T=n.read();ue.replaceChildren(...T.markers.map(P=>new Option(`${P.visible===!1?"隐藏 · ":""}${P.label}`,P.id))),ue.value=t,U.replaceChildren(...T.drawings.map(P=>new Option(`${P.visible===!1?"隐藏 · ":""}${nl(P.kind)} · ${P.label}${Pn(P.kind)&&P.points[1]?` · ${_a(P)}`:` · R ${Cr(P.radiusKm??0)} km`}`,P.id))),U.value=i}function jt(){for(const T of g)T.element.setAttribute("aria-pressed",String(T.element.dataset.markerId?T.element.dataset.markerId===t:T.element.dataset.drawingId===i))}function Ht(T,P=!0,F){if(n.read().markers.some(Y=>Y.id===T)&&n.onMarkerPick?.(T)){Nt();return}const B=n.read().markers.find(Y=>Y.id===T);Z("marker",B?T:"",B&&Ii(B)?F:void 0),je(),Nt(),Ut(),jt(),H(P&&!!t),n.onOpenPanel?.("markers")}function Vt(T,P=!0,F){const B=n.read().drawings.find(Y=>Y.id===T);Z("drawing",B?T:"",Pn(B?.kind)&&F!==void 0&&B?.points[F]?F:void 0),ht(),Nt(),jt(),H(P&&!!i),n.onOpenPanel?.("drawing")}function pt(T){if(e)return!1;let P=T;for(;P&&P!==f;)P=P.parent;if(!P)return!1;for(let F=T;F&&F!==f;F=F.parent){const B=F.userData.editorTool;if(B?.id){if(B.kind==="marker"&&n.read().markers.some(Y=>Y.id===B.id))return Ht(B.id,!0,B.pointIndex),!0;if(B.kind==="drawing"&&n.read().drawings.some(Y=>Y.id===B.id))return Vt(B.id,!0,B.pointIndex),!0}}return!1}function an(T){const P=T.points[0];if(!P)return;const F=T.points[1];Pn(T.kind)&&F?n.focus({x:(P.x+F.x)/2,y:T.kind==="bearing"?P.y:(P.y+F.y)/2,z:(P.z+F.z)/2},Math.max(.2,(T.kind==="bearing"?Math.hypot(F.x-P.x,F.z-P.z):Rs(P,F))/2)):n.focus(ni(P),T.radiusKm)}function Ut(){for(const T of f.children){if(T.userData.editorTool?.kind!=="marker")continue;for(const F of[...T.children])F.userData.editorTool?.pointIndex!==void 0&&(F.traverse(B=>{B instanceof we&&(B.geometry.dispose(),B.material.dispose())}),T.remove(F));const P=n.read().markers.find(F=>F.id===T.userData.editorTool.id);!P||P.id!==t||!Ii(P)||ws(P).forEach((F,B)=>{const Y=$n(F).sub(T.position).applyQuaternion(T.quaternion.clone().invert()).divideScalar(T.scale.x),ce=at(T,{x:Y.x/tt,y:Y.y/tt,z:Y.z/tt},P.color);ce.userData.editorTool={kind:"marker",id:P.id,pointIndex:B}})}}function li(){ze(f),g.length=0,_.replaceChildren();const T=n.read();for(const P of T.markers){if(P.visible===!1)continue;const F=Ae(f,P);ne(F,new S(0,tt*.4,0),P.label,P.color,P.description||"",()=>Ht(P.id),()=>n.focus(ni(P.position))).dataset.markerId=P.id}for(const P of T.drawings){if(P.visible===!1||!P.points.length)continue;const F=Ke(f,P),B=P.points[0],Y=P.points[1],ce=Pn(P.kind)&&Y?`${P.label} · ${_a(P)}`:`${P.label} · 半径 ${Cr(P.radiusKm??0)} km`,de=P.kind==="measure"&&Y?$n({x:(B.x+Y.x)/2,y:(B.y+Y.y)/2+.1,z:(B.z+Y.z)/2}):new S(0,tt*.12,0);ne(F,de,ce,P.color,"",()=>Vt(P.id),()=>an(P)).dataset.drawingId=P.id}jt()}function zr(){if(e)return;if(!n.editable()){Rn();return}const T=n.read();for(const B of f.children){const Y=B.userData.editorTool;if(Y.kind==="marker"){const ce=T.markers.find(Lt=>Lt.id===Y.id);if(!ce||ce.visible===!1){Rn();return}B.position.copy($n(ce.position)),B.quaternion.copy(Wa(ce));const de=ce.sizeKm??.12,nt=B.userData.markerSize??de;B.scale.setScalar(de/nt);const Oe=B.quaternion.clone().invert();for(const Lt of B.children)if(Lt.userData.editorTool?.pointIndex!==void 0){const Yt=ws(ce)[Lt.userData.editorTool.pointIndex];Lt.position.copy($n(Yt).sub(B.position).applyQuaternion(Oe).divideScalar(B.scale.x))}}else{const ce=T.drawings.find(de=>de.id===Y.id);if(!ce||ce.visible===!1||!ce.points[0]){Rn();return}if(ce.kind==="bearing")oe(B,ce);else if(ce.kind!=="measure")B.position.copy($n(ce.points[0]));else for(const de of B.children)if(de instanceof ln)de.geometry.setFromPoints(ce.points.map($n)),de.geometry.computeBoundingSphere();else if(de.userData.editorTool?.pointIndex!==void 0){const nt=ce.points[de.userData.editorTool.pointIndex];nt&&de.position.copy($n(nt))}}}for(const B of g){const Y=B.element.dataset.drawingId;if(!Y)continue;const ce=T.drawings.find(Oe=>Oe.id===Y),de=ce?.points[0],nt=ce?.points[1];!ce||!Pn(ce.kind)||!de||!nt||(ce.kind==="measure"&&B.object.position.copy($n({x:(de.x+nt.x)/2,y:(de.y+nt.y)/2+.1,z:(de.z+nt.z)/2})),B.element.textContent=`${ce.label} · ${_a(ce)}`)}const P=ci(),F=Pi();if(P){z.set(P.position),X(),Ee.value=String(P.sizeKm??.12);const B=ws(P);W.set(B[0]),Ie.set(B[1]),Ji();for(const Y of["pitch","yaw","roll"])x[Y].value=String(Zt.radToDeg(P.attitude?.[Y]??0))}F&&(oi.set(F.points[0]??{x:0,y:0,z:0}),Jn.set(F.points[1]??{x:1,y:0,z:0}),xt())}function Rn(){if(e)return;d&&!n.editable()&&En();const T=n.read(),P=JSON.stringify({markers:T.markers,drawings:T.drawings}),F=n.editable();p.forEach(B=>{B.disabled=!F}),t&&!T.markers.some(B=>B.id===t)&&Z("marker",""),i&&!T.drawings.some(B=>B.id===i)&&Z("drawing",""),r!==P&&(r=P,Nt(),je(),ht(),li()),Je.disabled=!F||!ci(),ea.disabled=!F||!Pi(),C.disabled=!F||!ci(),qe.disabled=!F||!Pi()?.points[0],me.disabled=he.disabled=!F||!ci()||!Ii(ci()),lt(),xt(),k(),!F&&!d?(L.textContent="只读",D.textContent="只读"):F&&!d&&(L.textContent==="只读"&&(L.textContent=""),D.textContent==="只读"&&(D.textContent="")),H()}function hr(T,P=null){En(),n.editable()&&(d=T,I=P,dr=!1,n.onPickingChange(!0),k())}function Kt(T,P=null){$e.value=T,(!i||["测距","方位角","圆规","范围球"].includes(se.value))&&(se.value=nl(T)),xt();const F=Me($r("drawing"),!0);hr({kind:T,drawing:F},P),n.onOpenPanel?.("drawing"),R(Pn(T)?"起点选择中":"中心点选择中","drawing")}function En(){const T=d;d=null,I=null,h=null,dr=!1,ze(m),k(),T&&(n.onPickingChange(!1),R("已退出地图点选",T.kind==="marker"?"markers":"drawing"))}function Xn(){ze(m);const T=d,P=h;if(!(!T||!P))if(T.kind==="marker")T.twoPoint?T.first?(at(m,T.first,T.marker.color,.08),at(m,P,T.marker.color,.08),Rs(T.first,P)>0&&Rs(T.first,P)<=1e3&&Ae(m,hl(T.marker,[T.first,P]),!0)):at(m,P,T.marker.color,.08):Ae(m,{...T.marker,position:P},!0);else if(!T.first)at(m,P,T.drawing.color,.08),dr&&Ke(m,{...T.drawing,points:[P]},!0);else if(Pn(T.kind)){const F={...T.drawing,points:[T.first,P]};Ke(m,F,!0),R(_a(F),"drawing")}else{const F=Fp(T.first,P,T.kind,T.drawing.plane??"xz");at(m,T.first,T.drawing.color,.08),m.add(He([$n(T.first),$n(P)],T.drawing.color,.6)),F>0&&F<=1e3&&Ke(m,{...T.drawing,points:[T.first],radiusKm:F},!0),R(`半径 ${Cr(F)} km${F>1e3?"（超出1000 km）":""}`,"drawing")}}function qn(T){e||!d||T&&!Ku(T)||!T&&!h||T&&h&&Rs(T,h)<1e-5||(h=T?ni(T):null,Xn())}function Qn(T){const P=d;if(e||!P||!n.editable()){n.editable()||En();return}if(!Ku(T)){R("点位坐标超出有效范围");return}try{if(P.kind==="marker"){if(P.twoPoint&&!P.first){P.first=ni(T),h=ni(T),Xn(),R("端点 B 选择中","markers");return}const F=P.twoPoint?hl(P.marker,[P.first,T]):{...P.marker,position:ni(T)};et("地图放置标记",B=>B.markers.push(F),"markers",()=>{Z("marker",F.id)})&&R("标记已放置并保存","markers")}else if(dr){const F={...P.drawing,points:[ni(T)]};et("地图放置范围图形",B=>B.drawings.push(F),"drawing",()=>{Z("drawing",F.id)})&&R("图形已放置并保存","drawing")}else if(!P.first)P.first=ni(T),h=ni(T),Xn(),R(Pn(P.kind)?"终点选择中":"半径点选择中","drawing");else{const F={...P.drawing,points:Pn(P.kind)?[ni(P.first),ni(T)]:[ni(P.first)]};if(!Pn(P.kind)){const B=Fp(P.first,T,P.kind,P.drawing.plane??"xz");if(B<=0||B>1e3)throw new Error("半径须大于0且不超过1000 km，请重新选择半径点");F.radiusKm=B}et("地图作图",B=>B.drawings.push(F),"drawing",()=>{Z("drawing",F.id)})&&R(Pn(F.kind)?`${nl(F.kind)}已保存：${_a(F)}`:`图形已保存：半径 ${Cr(F.radiusKm)} km`,"drawing")}}catch(F){R(F instanceof Error?F.message:String(F),P.kind==="marker"?"markers":"drawing")}}const Qs=T=>{T.key==="Escape"&&d&&(En(),T.preventDefault())};addEventListener("keydown",Qs),ue.addEventListener("change",()=>Ht(ue.value)),U.addEventListener("change",()=>Vt(U.value)),Se.addEventListener("change",()=>{if(e||!Pn(Pi()?.kind))return;const T=Se.value==="a"?0:Se.value==="b"?1:void 0;Vt(i,!1,T)}),z.fields.y.addEventListener("input",X),K.addEventListener("input",()=>{z.fields.y.value=K.value.trim()?String(K.valueAsNumber/1e3):""}),ee.addEventListener("change",()=>Ht(t,!1,ee.value==="a"?0:ee.value==="b"?1:void 0)),ae.addEventListener("input",lt),be.addEventListener("input",lt),Ue.addEventListener("input",xt);for(const T of[K,Ee,...Object.values(z.fields),...Object.values(x)])T.addEventListener("input",()=>{o=!1});function Ji(){xe.value=W.fields.y.value.trim()?String(W.fields.y.valueAsNumber*1e3):"",Ge.value=Ie.fields.y.value.trim()?String(Ie.fields.y.valueAsNumber*1e3):""}for(const T of[...Object.values(W.fields),...Object.values(Ie.fields)])T.addEventListener("input",()=>{o=!0,Ji()});for(const[T,P]of[[xe,W],[Ge,Ie],[Ki,oi],[us,Jn]])T.addEventListener("input",()=>{P.fields.y.value=T.value.trim()?String(T.valueAsNumber/1e3):"",T===xe||T===Ge?o=!0:xt()});for(const T of[...Object.values(oi.fields),...Object.values(Jn.fields),ai,St,$e])T.addEventListener("input",xt);const $h=(T,P)=>{for(const F of T)F.addEventListener("change",()=>{if(!(d||!n.editable()||e||!(P==="markers"?ci():Pi())))try{const B=P==="markers"?t:i,Y=P==="markers"?V(B):Me(B),ce=P==="markers"?ci():Pi();if(JSON.stringify(ce)===JSON.stringify(Y))return;Pe(P==="markers"?"修改标记":"修改制图标尺",de=>{if(P==="markers"){const nt=de.markers.findIndex(Oe=>Oe.id===B);nt>=0&&(de.markers[nt]=Y)}else{const nt=de.drawings.findIndex(Oe=>Oe.id===B);nt>=0&&(de.drawings[nt]=Y)}},P)}catch(B){R(B instanceof Error?B.message:String(B),P)}})};return $h([pe,Ve,ae,Ee,be,Le,A,_e,K,xe,Ge,...Object.values(x),...Object.values(z.fields),...Object.values(W.fields),...Object.values(Ie.fields)],"markers"),$h([se,$e,ie,Ye,Ue,mt,St,Ki,us,ai,...Object.values(oi.fields),...Object.values(Jn.fields)],"drawing"),je(),ht(),R("","markers"),R("","drawing"),Rn(),{sync:Rn,syncPosition:zr,selectObject:pt,selection:E,clearSelection:J,isPicking:()=>!!d,pick:Qn,preview:qn,cancel:En,updateLabels(T,P,F){if(e)return;T.updateMatrixWorld(),f.updateWorldMatrix(!0,!0);const B=new S;for(const Y of g){const ce=Y.object.getWorldPosition(B).project(T),de=ce.z>=-1&&ce.z<=1&&Math.abs(ce.x)<=1.08&&Math.abs(ce.y)<=1.08;Y.element.hidden=!de,de&&(Y.element.style.left=`${(ce.x+1)*P/2}px`,Y.element.style.top=`${(1-ce.y)*F/2}px`)}},dispose(){e||(En(),e=!0,removeEventListener("keydown",Qs),ze(f),ze(m),n.world.remove(f,m),_.remove(),w.remove(),g.length=0,p.length=0,n.markersPanel.replaceChildren(),n.drawingsPanel.replaceChildren(),n.markersPanel.classList.remove("scene-tool-panel"),n.drawingsPanel.classList.remove("scene-tool-panel"))}}}function Xw(n,e,t,i,r=360,s=1440){const o=i*Math.PI/180,a=Math.max(.25,1-r/Math.max(1,s)),c=2*Math.atan(Math.tan(o/2)*Math.max(.1,t)*a),l=Math.hypot(Math.max(1,n),Math.max(1,e)),u=l/Math.sin(Math.min(o,c)/2)*1.12,d=Math.max(1e4,u*10);return{distance:u,maxDistance:d,far:Math.max(5e4,d*3),near:Math.max(.1,l/1e5)}}const Co=n=>({id:n.id,revision:n.revision});function Ch(n,e){const t=n.sessions.find(i=>i.id===e);if(!t)throw new Error(`Unknown session: ${e}`);if(t.workflow||t.status==="finished")throw new Error("Active authoring session required");return t}function ig(n){if(typeof n!="string"||!n.trim()||n.trim().length>128)throw new Error("Name must contain 1..128 characters");return n.trim()}function rg(n,e,t,i,r,s){const o=ih(e);qg(n,o);const a=Ch(o,t);return{project:o,sessionId:t,selection:{kind:i,ref:Co(r)},mapRef:Co(s),taskRef:Co(a.taskRef)}}function qw(n,e,t,i){const r=ih(n);if(!Ch(r,e).mapEditRef)throw new Error("Terrain editing session required");const o=Yp(r,e,t,ig(i)),a={id:t,revision:1};return o.sessions.find(c=>c.id===e).mapEditRef=Co(a),rg(r,o,e,"map",a,a)}function $w(n,e,t,i){const r=ih(n);if(Ch(r,e).mapEditRef)throw new Error("Task authoring session required");if(!t||typeof t!="object")throw new Error("New map and task IDs required");const o=ig(i),a={id:t.mapId,revision:1},c={id:t.taskId,revision:1};let l=Yp(r,e,t.mapId,`${o} MAP`.slice(0,128));l=Xg(l,e,a,t.taskId,o);const u=l.sessions.find(d=>d.id===e);return u.taskRef=Co(c),u.mapRef=Co(a),rg(r,l,e,"task",c,a)}function Yw(n,e){return n===void 0||e<n?"active":e===n?"destroyed":"wreck"}const Pa={squadron:2155134,friendly:2985215,neutral:16767050,enemy:16738613,white:15332072,terrain:6062736},sg={squadron:"中队",friendly:"友军",neutral:"中立",enemy:"敌军"},Zd={active:"在编",destroyed:"已击落",wreck:"残骸"},ls=new W_;ls.background=new kt(133653);const bt=new Ni(42,innerWidth/innerHeight,.1,5e3);bt.position.set(0,240,410);const vt=new bM({antialias:!0,powerPreference:"high-performance"});vt.setPixelRatio(Math.min(devicePixelRatio,2));vt.setSize(innerWidth,innerHeight);vt.outputColorSpace=pi;vt.domElement.setAttribute("aria-label","三维地图画布");vt.domElement.setAttribute("role","img");vt.domElement.tabIndex=0;document.querySelector("#scene").appendChild(vt.domElement);const It=new wM(bt,vt.domElement);It.target.set(0,0,0);It.enableDamping=!0;It.dampingFactor=.08;It.minDistance=35;It.maxDistance=1e4;It.maxPolarAngle=Math.PI*.49;const og=new Fv(1588299,30,850);og.position.set(0,140,0);ls.add(og);const on=new An;ls.add(on);let Yr;function ag(n,e){Yr&&(on.remove(Yr),Yr.geometry.dispose(),Yr.material.dispose()),Yr=sw(n,e),on.add(Yr),Wm(Yr,bt.position.distanceTo(It.target))}ag(750,750);function Da(n,e,t=1,i=1){const r=new zt().setFromPoints(n),s=new Ei({color:e,transparent:!0,opacity:i});return new ln(r,s)}let gt=new jp,Ft=new Kp,Xa=42,Jr=0,Hs={...rc};function Et(n,e){return gt.sample(n,e)}function cg(){const n=document.querySelector("#terrain-contour-smooth").checked;return QM(gt,{smoothing:n})}const il=32,Rl=new Map,jw=new yn({vertexColors:!0,transparent:!0,opacity:.64,side:mn,depthWrite:!1}),Kd=jM(),Zw=new yn({vertexColors:!0}),Kw=(n,e)=>`${n},${e}`;function lg(n){const e=Ft.buildings(gt,Xa,Jr,n),t=[],i=[],r=Math.cos(Jr),s=Math.sin(Jr);for(const l of e){const u=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([d,h])=>{const f=d*l.width/2,m=h*l.depth/2,_=l.x+f*r-m*s,g=l.z+f*s+m*r;return new S(_,Et(_,g)+Hm,g)});for(const d of[0,1,2,0,2,3]){const h=u[d];t.push(h.x,h.y,h.z),i.push(l.shade*.82,l.shade*.91,l.shade)}}for(const l of[...n.group.children]){const u=l;u.geometry&&u.geometry!==Kd&&u.geometry.dispose(),l.isInstancedMesh&&l.dispose(),n.group.remove(l)}const o=new zt;o.setAttribute("position",new Dt(t,3)),o.setAttribute("color",new Dt(i,3));const a=new we(o,jw);a.renderOrder=-1,n.group.add(a);const c=new Map;for(const l of e){const u=c.get(l.zone);u?u.push(l):c.set(l.zone,[l])}for(const[l,u]of c){const d=ZM(u,(f,m)=>Et(f,m),Jr,Ft.styleFor(l));if(!d.count)continue;const h=new $_(Kd,Zw,d.count);h.instanceMatrix.array.set(d.matrices),h.instanceMatrix.needsUpdate=!0,h.instanceColor=new Wd(d.colors,3),h.instanceColor.needsUpdate=!0,n.group.add(h)}n.group.userData.count=e.length}function Ph(){let n=0;for(const e of Rl.values())n+=e.group.userData.count;return n}function ug(){const n=new An;Rl.clear();for(let e=0;e<Ft.size;e+=il)for(let t=0;t<Ft.size;t+=il){const i={minX:t,minZ:e,maxX:Math.min(Ft.size-1,t+il-1),maxZ:Math.min(Ft.size-1,e+il-1),group:new An};lg(i),Rl.set(Kw(t,e),i),n.add(i.group)}return n.userData.count=Ph(),n}function Jw(n){for(const e of Rl.values())n&&(e.maxX<n.minX||e.minX>n.maxX||e.maxZ<n.minZ||e.minZ>n.maxZ)||lg(e);Ls.userData.count=Ph()}function Qw(n){n.traverse(e=>{const t=e;t.geometry&&t.geometry!==Kd&&t.geometry.dispose(),e.isInstancedMesh&&e.dispose()}),on.remove(n),n.clear()}let Po=null;function eE(n,e){const t=Math.max(0,Math.floor((n.x-e+Ft.extent)/Ft.spacing)),i=Math.min(Ft.size-1,Math.ceil((n.x+e+Ft.extent)/Ft.spacing)),r=Math.max(0,Math.floor((n.z-e+Ft.extentZ)/Ft.spacingZ)),s=Math.min(Ft.size-1,Math.ceil((n.z+e+Ft.extentZ)/Ft.spacingZ)),o=Po;Po=o?{minX:Math.min(o.minX,t),maxX:Math.max(o.maxX,i),minZ:Math.min(o.minZ,r),maxZ:Math.max(o.maxZ,s)}:{minX:t,maxX:i,minZ:r,maxZ:s}}function tE(){if(!Po)return;const n=Po;Po=null,Jw(n)}let Ls=ug();on.add(Ls);let xi=cg();on.add(xi);let Sr=!1,cn=null,Cl=null,qa=!0,Us=null;function dg(){!cn||Cl!==gt?(cn&&(on.remove(cn.root),cn.dispose()),cn=Gm(gt,{smoothing:!!document.querySelector("#terrain-contour-smooth")?.checked}),Cl=gt,on.add(cn.root)):qa&&cn.update();const n=cn.root.children[0]?.material,e=!!document.querySelector("#terrain-contour-smooth")?.checked;n?.userData.terrainContours&&n.userData.contourSmoothing!==e&&(n.userData.contourSmoothing=e,n.needsUpdate=!0),qa=!1,cn.root.visible=xi===cn.root||!!At?.height}function hg(){Us&&(dg(),cn.update(Us),Us=null,xi!==cn.root&&(xi.visible=!1))}function nE(n,e){const t=Math.max(0,Math.floor((n.x-e+gt.extent)/gt.spacing)),i=Math.min(gt.size-1,Math.ceil((n.x+e+gt.extent)/gt.spacing)),r=Math.max(0,Math.floor((n.z-e+gt.extentZ)/gt.spacingZ)),s=Math.min(gt.size-1,Math.ceil((n.z+e+gt.extentZ)/gt.spacingZ));if(t>i||r>s)return;const o=Us;Us=o?{minX:Math.min(o.minX,t),maxX:Math.max(o.maxX,i),minZ:Math.min(o.minZ,r),maxZ:Math.max(o.maxZ,s)}:{minX:t,maxX:i,minZ:r,maxZ:s}}function cc(n=!1){mc();const e=n&&cn&&Cl===gt;qa=!e,Us=null,cn&&(cn.root.visible=!!e),e?(xi!==cn.root&&Vo(xi),xi=cn.root,xi.visible=!0):(xi===cn?.root?(on.remove(cn.root),cn.dispose(),cn=null):Vo(xi),xi=cg(),on.add(xi)),Sr=!1,Qw(Ls),Ls=ug(),on.add(Ls);const t=Or(De);t.units.forEach(r=>{Nh(r,t.turn),(r.unit.icon==="ground"||r.unit.icon==="ship")&&kl(r.unit)}),Lo();const i=gt.data.reduce((r,s)=>Math.max(r,s),0);document.querySelector("#terrain-state").textContent=`${gt.extent*2/25} × ${gt.extentZ*2/25} km / 最高 ${(i/25).toFixed(2)} km / 建筑 ${Ls.userData.count}`}const st=[{id:"rex",label:"REX",faction:"squadron",kind:"F-16C",icon:"air-filled",positions:[new S(-250,60,250),new S(-170,85,180),new S(-70,108,140),new S(30,125,130),new S(130,138,150)]},{id:"tasha",label:"TASHA",faction:"friendly",kind:"MIRAGE 2000-5",icon:"air-outline",positions:[new S(-210,84,270),new S(-120,88,185),new S(-20,94,130),new S(65,90,80),new S(150,96,30)]},{id:"professor",label:"PROFESSOR",faction:"neutral",kind:"EA-6B",icon:"air-outline",positions:[new S(-275,52,300),new S(-190,55,215),new S(-90,61,165),new S(10,65,125),new S(105,68,85)]},{id:"mig29",label:"MIG-29A",faction:"enemy",kind:"MIG-29",icon:"air-outline",destroyedAtTurn:3,positions:[new S(300,120,-220),new S(195,100,-150),new S(100,78,-70),new S(20,55,10),new S(20,55,10)]},{id:"sam",label:"SAM",faction:"enemy",kind:"SAM",icon:"ground",tgt:!0,positions:[new S(160,0,-150),new S(160,0,-150),new S(160,0,-150),new S(160,0,-150),new S(160,0,-150)]},{id:"frigate",label:"FRIGATE",faction:"enemy",kind:"FRIGATE",icon:"ship",tgt:!0,positions:[new S(245,0,-40),new S(230,0,-30),new S(215,0,-20),new S(200,0,-10),new S(185,0,0)]}],Yn=[{summary:"FORMATION / INITIAL CONTACT",events:[]},{summary:"TACTICAL MOVEMENT / CONTACT",events:[{kind:"attack",attacker:"mig29",target:"rex",weapon:"2AAM"}]},{summary:"ENGAGEMENT / RANGE CLOSING",events:[{kind:"attack",attacker:"rex",target:"mig29",weapon:"QAAM"}]},{summary:"LOSSES / RESULT PENDING",events:[{kind:"destroy",target:"mig29"}]},{summary:"FINAL POSITION / RESULT",events:[]}];function Kn(){return Yn.length}function Ai(){return Yn.length-1}function fg(){return typeof Pt<"u"&&Pt?Yl:Ai()}function Ys(n,e){return Yw(n.destroyedAtTurn,e)}function Ju(n){return st.find(e=>e.id===n)?.label??n.toUpperCase()}function iE(n){return n.kind==="attack"?`${Ju(n.attacker)} → ${Ju(n.target)} / ${n.weapon}`:`${Ju(n.target)} 被击落`}function Or(n){const e=Math.max(0,Math.min(n,Ai())),t=Yn[e];return{turn:e,summary:t.summary,events:t.events,units:st.map(i=>({unit:i,position:ac(i,i.positions[Math.min(e,i.positions.length-1)],Et),status:Ys(i,e)}))}}st.forEach(n=>{n.positions.length!==Kn()&&console.warn(`[scenario] ${n.label} has ${n.positions.length} keyframes but the scenario declares ${Kn()} turns`)});let De=0,fe=null;const Ri=new Map,Vs=new Map,ks=new Map;let fl,xo=null,Jd=-1/0,pl="",Qu=[];const rE=.675,ed=new nn().setFromEuler(new In(-Math.PI/2,0,0)),pg=22,si=1.5,Op=7.2;function sE(){const n=[];for(let e=0;e<=64;e++){const t=e/64*Math.PI*2;n.push(new S(Math.cos(t)*Op,Math.sin(t)*Op,0))}return n}function oE(n,e){const t=Sw(n.icon,e);return t.scale.setScalar(rE),t.traverse(i=>{i.userData.unit=n}),t}function Dh(n,e){const t=n.icon==="ground"?Math.PI:0;if(Mn())return is(Jp({...n,destroyedAtTurn:n.attitudes?.[e]?void 0:n.destroyedAtTurn},e,{epsilon:.001}).yaw+t);const i=Math.min(e,n.positions.length-1),r=n.attitudes?.[i];if(r)return is(r.yaw+t);const s=n.positions[Math.max(0,i-1)],o=n.positions[Math.min(n.positions.length-1,i+1)],a=o.x-s.x,c=o.z-s.z;return Math.hypot(a,c)<.001?null:is(Math.atan2(-a,-c)+t)}function Lh(n,e){const t=n.routeBinding;if(!t||Mn())return null;const i=Math.min(e,n.positions.length-1);if(i<=t.startTurn)return null;const r=n.positions.length-1,s=n.icon==="ground"?Math.PI:0,o=(c,l)=>{const u=l.x-c.x,d=l.z-c.z;return Math.hypot(u,d)<.001?null:Math.atan2(-u,-d)+s},a=o(n.positions[Math.max(t.startTurn,i-1)],n.positions[Math.min(r,i+1)]);if(a!==null)return is(a);for(let c=i;c>t.startTurn;c--){const l=o(n.positions[c-1],n.positions[c]);if(l!==null)return is(l)}return null}const td=.6,zp=2,Bp=new S(0,1,0),aE=new S(1,0,0),cE=new S(0,0,1);function is(n){return Math.atan2(Math.sin(n),Math.cos(n))}function Hp(n,e){const t=n.positions[e],i=n.positions[e+1];if(!t||!i)return null;const r=i.x-t.x,s=i.z-t.z;return Math.hypot(r,s)<.001?null:Math.atan2(r,s)}function Ih(n,e){if(n.icon!=="air-filled"&&n.icon!=="air-outline")return null;if(Mn())return Jp({...n,destroyedAtTurn:n.attitudes?.[e]?void 0:n.destroyedAtTurn},e,{epsilon:.001,maxBank:td,rollGain:zp});const t=Math.min(e,n.positions.length-1),i=n.attitudes?.[t];if(i)return i;const r=n.positions[Math.max(0,t-1)],s=n.positions[Math.min(n.positions.length-1,t+1)],o=s.x-r.x,a=s.y-r.y,c=s.z-r.z,l=Math.hypot(o,c);if(l<.001&&Math.abs(a)<.001)return null;const u=Math.atan2(-o,-c),d=Math.atan2(a,Math.max(l,.001)),h=Hp(n,t-1),f=Hp(n,t),m=h===null||f===null?0:Zt.clamp(zp*is(f-h),-td,td);return{yaw:u,pitch:d,roll:m}}function Yo(n){const e=new An;e.userData.unit=n,e.userData.pickable=!0;const t=Pa[n.faction],i=n.icon==="ground"||n.icon==="ship";let r=null;i||(r=new we(new Vl(2.2,3.3,20),new yn({color:t,transparent:!0,opacity:.8,side:mn})),r.rotation.x=-Math.PI/2,r.userData.unit=n,e.add(r));const s=new ln(new zt,new Ei({color:t,transparent:!0,opacity:.8}));s.userData.unit=n,e.add(s);const o=oE(n,t),a=new ln(new zt().setFromPoints(sE()),new Ei({color:t,transparent:!0,opacity:.9,depthTest:!1}));a.visible=!1,a.userData.unit=n,o.add(a);const c=Xm(t);c.userData.unit=n,o.add(c),e.add(o);const l=2.6,u=new Ei({color:t,transparent:!0,opacity:.9,depthTest:!1}),d=new An;d.add(new ln(new zt().setFromPoints([new S(-l,0,-l),new S(l,0,l)]),u)),d.add(new ln(new zt().setFromPoints([new S(-l,0,l),new S(l,0,-l)]),u)),d.visible=!1,e.add(d);const h=[];o.traverse(g=>{const p=g.material;!p||Array.isArray(p)||h.push({material:p,baseOpacity:p.opacity})});const f=document.createElement("div");f.className=`world-label ${n.faction}`,f.textContent=n.label,f.style.cssText=`position:absolute; left:0; top:0; transform:translate(0, 0); color:#${t.toString(16).padStart(6,"0")}; text-shadow:0 0 7px #${t.toString(16).padStart(6,"0")}; font:14px 'Share Tech Mono',monospace; white-space:nowrap; pointer-events:none;`;const m=new Sn;m.userData.dom=f,e.add(m),e.userData.parts={base:r,pole:s,icon:o,label:m,wreck:d,tgtRing:a,escortMarker:c,iconMaterials:h,labelFade:1};const _=mw(t);_.root.traverse(g=>{g.userData.unit=n}),e.add(_.root),Vs.set(n.id,_),on.add(e),Ri.set(n.id,e)}function Nh(n,e){const{unit:t,status:i}=n,r=Ri.get(t.id),s=r.userData.parts,o=i==="wreck",a=!(typeof Pt<"u"&&Pt)&&!Mn()&&o&&t.destroyedAtTurn!==void 0,c=ac(t,a?t.positions[Math.min(t.destroyedAtTurn,t.positions.length-1)]:n.position,Et),l=t.intangible?c.y:Et(c.x,c.z);r.position.set(c.x,l,c.z);const u=Math.max(0,c.y-l),d=Wl(t,c,Et,si).y-l,h=s.base===null?d+pg-si:Math.max(u,.6);if(s.base&&(s.base.visible=!o),s.icon.visible=!o,s.pole.visible=!o,s.wreck.visible=i!=="active",s.wreck.position.y=d,s.tgtRing.visible=t.tgt===!0&&i==="active",s.escortMarker.visible=t.escort===!0&&t.faction!=="enemy"&&i==="active",!o){let p=s.pole.geometry.getAttribute("position");p?(p.setXYZ(0,0,.2,0),p.setXYZ(1,0,h,0),p.needsUpdate=!0):(p=new Dt([0,.2,0,0,h,0],3),s.pole.geometry.setAttribute("position",p)),s.pole.geometry.computeBoundingSphere(),s.pole.geometry.boundingBox&&s.pole.geometry.computeBoundingBox()}const f=s.icon;f.position.y=d;const m=Ih(t,e),_=Lh(t,e);if(m===null||_!==null){const p=_??Dh(t,e);p===null?f.quaternion.copy(ed):f.quaternion.setFromAxisAngle(Bp,p).multiply(ed)}else f.quaternion.setFromAxisAngle(Bp,m.yaw).multiply(new nn().setFromAxisAngle(aE,m.pitch)).multiply(new nn().setFromAxisAngle(cE,m.roll)).multiply(ed);const g=i==="destroyed";s.iconMaterials.forEach(({material:p,baseOpacity:w})=>{p.transparent||(p.transparent=!0,p.needsUpdate=!0),p.userData.baseDepthTest??=p.depthTest,p.depthTest=t.intangible?!1:p.userData.baseDepthTest,p.opacity=w*(g?.3:1)*(t.hidden?.35:1)});for(const p of[s.base,s.pole,...s.wreck.children]){const w=p?.material;!w||Array.isArray(w)||(w.userData.hiddenBaseOpacity??=w.opacity,w.opacity=w.userData.hiddenBaseOpacity*(t.hidden?.35:1))}s.labelFade=(o?0:g?.5:1)*(t.hidden?.5:1),s.label.position.y=h}function mg(n,e){const t=new An;if(t.userData.trail=!0,n.length<2)return t;const i=[],r=2.3;n.forEach((c,l)=>{const u=n[Math.max(0,l-1)],d=n[Math.min(n.length-1,l+1)],h=new S().subVectors(d,u).normalize(),f=new S(-h.z,0,h.x).normalize().multiplyScalar(r*(.45+l/n.length*.55));i.push(c.x+f.x,c.y+.5,c.z+f.z,c.x-f.x,c.y+.5,c.z-f.z)});const s=[];for(let c=0;c<n.length-1;c++)s.push(c*2,c*2+1,c*2+2,c*2+1,c*2+3,c*2+2);const o=new zt;o.setAttribute("position",new Dt(i,3)),o.setIndex(s),o.computeVertexNormals();const a=new yn({color:e,transparent:!0,opacity:.28,side:mn,depthWrite:!1,blending:rd});return t.add(new we(o,a)),t}function Uh(n,e){return Mn()?Tt()?.sealedScenes?.find(t=>t.turn<=e&&t.units.some(i=>i.id===n.id))?.turn??e:0}function kh(n,e,t){const i=Qp(n.positions,n.trackPoints??[],e,t).map(a=>new S(a.x,a.y,a.z));if(i.length<2)return[];const r=new Mh(i,!1,"centripetal"),s=[];let o=0;for(let a=e;a<t;a++){const c=(n.trackPoints??[]).filter(m=>m.segment===a).length+1,l=o/(i.length-1),u=(o+c)/(i.length-1),d=Math.max(24,c*16),h=i.slice(o,o+c+1).every(m=>m.distanceToSquared(i[o])<1e-12),f=Array.from({length:d+1},(m,_)=>h?i[o].clone():r.getPoint(Zt.lerp(l,u,_/d)));s.push({segment:a,points:f,start:l,end:u,curve:r}),o+=c}return s}function gg(n,e){const{unit:t,status:i}=n;if(i==="wreck"||document.querySelector("#trail-display").value==="none")return;const r=t.destroyedAtTurn===void 0?e:Math.min(e,t.destroyedAtTurn),s=document.querySelector("#trail-display").value==="recent",o=Math.max(1,Math.floor(Number(document.querySelector("#trail-turns").value)||1)),a=Uh(t,e),c=Math.max(a,s?Math.max(0,r-o):0),l=kh(t,a,r).filter(d=>d.segment>=c).flatMap((d,h)=>h?d.points.slice(1):d.points);!t.intangible&&(t.icon==="ground"||t.icon==="ship")&&l.forEach(d=>{d.y=Et(d.x,d.z)+si});const u=mg(l,Pa[t.faction]);u.userData.trail=t.id,on.add(u)}const jo=document.createElement("div");jo.className="labels";jo.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;contain:strict;";document.querySelector("#app").appendChild(jo);function Zo(){for(const[,n]of Ri){const e=n.userData.parts.label,t=e.userData.dom;t.dataset.unitId=n.userData.unit.id,jo.appendChild(t),e.userData.domObject=t}}let Fe=!1,Gt=!1;const xn=[{id:"route-1",name:"ROUTE 1",waypoints:[]}];let Nn="route-1",$a=2,Pl=1,Si="",Ui="",hn=null,Ya=[],Ln=new An;on.add(Ln);const ki=new Map;function Dl(){return xn.find(n=>n.id===Nn)??xn[0]}function zo(){return Dl()?.waypoints??[]}const Ll=document.createElement("div");Ll.className="waypoint-labels";document.querySelector("#app").appendChild(Ll);const Qd=[];let Il=1,Nl=1,$t=!1,Fn=!1,Wt=!1,it=null,nr=new An;on.add(nr);let At=null,ss=1;const ft=new Set;function Hi(){return st.filter(n=>ft.has(n.id))}function Ti(){return Hi().filter(n=>lc(n))}function Bo(){const n=Ti();return n.reduce((e,t)=>e.add(Wn(t)),new S).divideScalar(n.length||1)}function jn(n){Mt?.clearSelection(),it?.kind==="track"&&(it=null),Wt=!1,ft.clear(),n.forEach(e=>ft.add(e.id)),fe=n[n.length-1]??null,ot(),rt()}function Xl(n,e=!1){typeof sn<"u"&&sn?.pick("unit",n.id)||(e?(ft.has(n.id)?ft.delete(n.id):ft.add(n.id),jn(Hi())):jn([n]))}function _g(n,e){const t=n.routeBinding;!t||Mn()||!ct()||!e.length||(t.startTurn=Math.min(...e))}function ja(n){if(!_i()||!Fe)return;const e=Ti();if(!e.length)return;const t=js();if(n.lengthSq()<1e-12&&!e.some(r=>$s(r)&&t.some(s=>{const o=r.positions[s];return o.y!==Et(o.x,o.z)})))return;const i=e.filter(r=>Un(r)&&!r.intangible);i.length&&(n.y=Math.max(n.y,...i.flatMap(r=>t.map(s=>{const o=r.positions[s];return Math.max(0,Et(o.x+n.x,o.z+n.z))-o.y})))),wn("draft")&&(e.forEach(r=>{_g(r,t),t.forEach(s=>r.positions[s].add(n)),ct()&&r.trackPoints?.forEach(s=>{t.includes(s.segment)&&t.includes(s.segment+1)&&(s.x+=n.x,s.y+=n.y,s.z+=n.z)}),Ja(r,t)}),e.some(r=>r.routeBinding)&&Gi(),ot(),rt())}let Zn;const ql=()=>({groups:[],markers:[],drawings:[]}),zi=()=>Zn??ql();let Hn,vg,Mt,sn,eh,Zr,Ul="",$i=null;const $l=document.createElement("div");$l.className="editor-tool-labels";document.querySelector("#app").appendChild($l);const lE=aw($l);let ve=null,Pt=!1,ml=null,Za=null,Ka=null,Yl=0,gl={edit:!1,terrain:!1};const Fs=new Map;let Nr=null,Qr=null;function Tt(){if(!ve)return;if(Qr?.store===ve&&Qr.revision===ve.revision)return Qr.session;const n=ve.read(),e=n.project.sessions.find(t=>t.id===(n.editor.sessionId??"session-working"));return Qr={store:ve,revision:ve.revision,session:e},e}function Mn(){return Tt()?.workflow?.mode==="formal"}function ct(){if(typeof Pt<"u"&&Pt)return!1;const n=Tt();return n?.status!=="finished"&&(!n?.workflow||Fi())}function Mi(){return typeof Pt<"u"&&Pt||ct()}function Fi(){const n=Tt();return!!n?.workflow&&n.status!=="finished"&&n.turns.length===n.workflow.committedTurns+1&&De===n.workflow.committedTurns}function _i(){return ct()||Fi()}function qt(){return!!Ze||ke.dragging||!!At||!!_n||!!bi||!!Mt?.isPicking()}function nd(n,e){if(!Mi()||!Fe||Ze||ke.dragging||At||_n||bi||!wn("tools"))return!1;Zn??=ql(),e(Zn,st);const t=dn(n);return ot("tools"),rt(),t}function uE(n){const e=st.filter(s=>s.groupId===n.id);if(!ct()||!Fe||!e.length||qt()||!wn())return;Zn??=ql();const t={...n,id:`group-${crypto.randomUUID()}`,name:`${n.name} 副本`.slice(0,128)};Zn.groups.push(t);const i=zh().spacing,r=e.map(s=>{const o=dc(uc(s)),a=ss++;return o.id=`unit-${a}`,o.groupId=t.id,o.routeBinding=void 0,delete o.player,delete o.playerActions,o.positions.forEach(c=>{c.x+=i,c.z+=i}),o.trackPoints?.forEach(c=>{c.x+=i,c.z+=i}),st.push(o),Yo(o),o});Zo(),jn(r),Gs("translate")}function Fh(n,e=.5){const t=new S(n.x,n.y,n.z).multiplyScalar(tt),i=bt.position.clone().sub(It.target).normalize();i.lengthSq()<.1&&i.set(0,.6,1).normalize();const r=Math.max(90,e*tt/Math.sin(Zt.degToRad(bt.fov)/2)*1.4);It.target.copy(t),bt.position.copy(t).addScaledVector(i,Math.min(r,It.maxDistance)),It.update()}function Vp(n){const e=st.filter(r=>n.includes(r.id)).map(r=>Wn(r));if(!e.length)return;const t=e.reduce((r,s)=>r.add(s),new S).divideScalar(e.length),i=Math.max(15,...e.map(r=>r.distanceTo(t)))/tt;Fh({x:t.x/tt,y:t.y/tt,z:t.z/tt},i)}function lc(n){return _i()&&(Fi()||Ys(n,De)==="active")}function Oh(n){return _i()&&(ct()||n.destroyedAtTurn===void 0||n.destroyedAtTurn===De)}function dn(n="Edit scenario",e=Nr){if(!ve||!e)return!0;if(ke.dragging||At)return!1;try{const t=xg();return Nr=null,ve.commit(t,n,e),!0}catch(t){return Nr=null,lr(ve.read()),fe=st.find(i=>ft.has(i.id))??null,console.error("Scenario transaction rolled back",t),rn("编辑未保存："+(t instanceof Error?t.message:String(t))),!1}}function Ho(n,e){if(n===e)return!0;if(n===null||e===null||typeof n!="object"||typeof e!="object")return!1;if(Array.isArray(n)||Array.isArray(e))return!Array.isArray(n)||!Array.isArray(e)||n.length!==e.length?!1:n.every((s,o)=>Ho(s??null,e[o]??null));const t=n,i=e,r=Object.keys(t).filter(s=>t[s]!==void 0);return r.length!==Object.keys(i).filter(s=>i[s]!==void 0).length?!1:r.every(s=>Object.prototype.hasOwnProperty.call(i,s)&&Ho(t[s],i[s]))}function dE(n,e){const t={...n,editor:{...n.editor,currentTurn:e.currentTurn}},i=ah(t,oh(t));if(i.layout=e.layout,!Ho(e,i))throw new Error("已提交回合保留原样；请在末尾草稿编辑场景");return{...n,editor:{...t.editor,activeRouteId:e.activeRouteId}}}function xg(n=jl()){if(typeof Pt<"u"&&Pt&&ve){const h=ve.read(),f=h.project.sessions.find(m=>m.id===h.editor.sessionId);return f.sceneTools=structuredClone(n.sceneTools??ql()),h}if(ve&&(Tt()?.status==="finished"||Mn()&&!Fi()))return dE(ve.read(),n);const e=Kg(n,n.layout??{size:gt.size,extent:gt.extent,extentZ:gt.extentZ});if(!ve)return e;const t=ve.read(),i=t.project,r=t.editor.sessionId??"session-working",s=i.sessions.find(h=>h.id===r),o=i.maps.find(h=>h.id===s.mapRef.id&&h.revision===s.mapRef.revision),a=e.project.sessions[0];if(a.id=s.id,a.name=s.name,a.taskRef=s.taskRef,a.mapRef=s.mapRef,a.resourceSnapshot=s.resourceSnapshot,a.rulesRevision=s.rulesRevision,a.status=s.status,s.rulesRef&&(a.rulesRef={...s.rulesRef}),s.rulesSnapshot&&(a.rulesSnapshot=structuredClone(s.rulesSnapshot)),a.workflow=s.workflow,a.mapEditRef=s.mapEditRef,s.workflow){a.sealedScenes=Jg(s),a.turns=s.turns.map((f,m)=>m===De?a.turns[m]:f);const h=ah(t,oh(t));a.units.forEach(f=>{const m=s.units.find(g=>g.id===f.id),_=h.units.find(g=>g.id===f.id);if(m){for(let g=0;g<De;g++)f.positions[g]=m.positions[g],f.attitudes&&(f.attitudes[g]=m.attitudes?.[g]??null);_&&Ho(n.units.find(g=>g.id===f.id)?.positions[De],_.positions[De])&&(f.positions[De]=m.positions[De])}})}const c=e.project.maps[0];c.id=o.id,c.revision=o.revision,c.name=o.name;const l=h=>h.id===o.id&&h.revision===o.revision,u=c.terrain.size!==o.terrain.size||c.terrain.widthKm!==(o.terrain.widthKm??o.terrain.extentKm*2)||c.terrain.heightKm!==(o.terrain.heightKm??o.terrain.extentKm*2)||!Ho(c.urban,o.urban)||c.terrain.heightsKm.some((h,f)=>Math.abs(h-o.terrain.heightsKm[f])>1e-7),d=!!s.workflow||i.tasks.some(h=>l(h.mapRef))||i.sessions.some(h=>h.id!==r&&l(h.mapRef));return u&&d&&(c.revision=Math.max(...i.maps.filter(h=>h.id===o.id).map(h=>h.revision))+1,a.mapRef={id:c.id,revision:c.revision}),e.project={...i,maps:u?d?[...i.maps,c]:i.maps.map(h=>l(h)?c:h):i.maps,sessions:i.sessions.map(h=>h.id===r?a:h)},e.editor.sessionId=r,e}function lr(n){const e=oh(n);(gt.size!==e.size||gt.extent!==e.extent||gt.extentZ!==e.extentZ)&&(gt=new jp(e.size,e.extent,e.extentZ),Ft=new Kp(e.size,e.extent,e.extentZ),ag(e.extent,e.extentZ??e.extent),hc(),Hh()),hE(ah(n,e))}function uc(n){return{id:n.id,label:n.label,faction:n.faction,kind:n.kind,icon:n.icon,positions:n.positions.map(e=>({x:e.x,y:e.y,z:e.z})),attitudes:n.attitudes?.map(e=>e?{...e}:null),destroyedAtTurn:n.destroyedAtTurn,tgt:n.tgt,...n.escort===void 0?{}:{escort:n.escort},...n.hidden===void 0?{}:{hidden:n.hidden},...n.intangible===void 0?{}:{intangible:n.intangible},groupId:n.groupId,aircraftRef:n.aircraftRef?{...n.aircraftRef}:void 0,spRefs:n.spRefs?.map(e=>({...e})),...n.loadout===void 0?{}:{loadout:n.loadout.map(e=>({slot:e.slot,weaponRef:{...e.weaponRef}}))},...n.player===void 0?{}:{player:{...n.player}},...n.playerActions===void 0?{}:{playerActions:structuredClone(n.playerActions)},routeBinding:n.routeBinding?{...n.routeBinding,offset:n.routeBinding.offset?{...n.routeBinding.offset}:void 0}:void 0,trackPoints:n.trackPoints?.map(e=>({...e}))}}function dc(n){return{id:n.id,label:n.label,faction:n.faction,kind:n.kind,icon:n.icon,positions:n.positions.map(e=>new S(e.x,e.y,e.z)),attitudes:n.attitudes?.map(e=>e?{...e}:null),destroyedAtTurn:n.destroyedAtTurn,tgt:n.tgt,...n.escort===void 0?{}:{escort:n.escort},...n.hidden===void 0?{}:{hidden:n.hidden},...n.intangible===void 0?{}:{intangible:n.intangible},groupId:n.groupId,aircraftRef:n.aircraftRef?{...n.aircraftRef}:void 0,spRefs:n.spRefs?.map(e=>({...e})),...n.loadout===void 0?{}:{loadout:n.loadout.map(e=>({slot:e.slot,weaponRef:{...e.weaponRef}}))},...n.player===void 0?{}:{player:{...n.player}},...n.playerActions===void 0?{}:{playerActions:structuredClone(n.playerActions)},routeBinding:n.routeBinding?{...n.routeBinding,offset:n.routeBinding.offset?{...n.routeBinding.offset}:void 0}:void 0,trackPoints:n.trackPoints?.map(e=>({...e}))}}function jl(){return{units:st.map(uc),turns:Yn.map(n=>({summary:n.summary,events:n.events.map(e=>({...e}))})),currentTurn:De,...Zn?{sceneTools:structuredClone(Zn)}:{},layout:{size:gt.size,extent:gt.extent,extentZ:gt.extentZ},terrain:gt.data.slice(),urban:Ft.data.slice(),urbanSeed:Xa,urbanAngle:Jr,urbanStyle:{...Ft.styles[0]??rc},urbanStyles:Ft.styles.map(n=>({...n})),urbanZones:Ft.zones.slice(),routes:xn.map(n=>({...n,waypoints:n.waypoints.map(e=>({...e}))})),activeRouteId:Nn}}function Vo(n){n.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i&&i.dispose()}),on.remove(n)}function yg(n){const e=Ri.get(n.id);if(!e)return;e.userData.parts.label.userData.dom.remove(),Vo(e),Ri.delete(n.id),Vs.delete(n.id),ks.delete(n.id),mc()}function hE(n){Zn=n.sceneTools?structuredClone(n.sceneTools):void 0,xn.splice(0,xn.length,...n.routes.map(t=>({...t,waypoints:t.waypoints.map(i=>({...i}))}))),Nn=n.activeRouteId,it=null,$t=!1,Wt=!1,gt.data.set(n.terrain),Ft.data.set(n.urban),Xa=n.urbanSeed,Jr=n.urbanAngle;const e=n.urbanStyles?.length?n.urbanStyles.map(t=>Ma(t)):[Ma(n.urbanStyle)];e[0]=Ma({...e[0],...n.urbanStyle??{}}),Ft.styles=e,n.urbanZones?.length===Ft.zones.length?Ft.zones.set(n.urbanZones):Ft.zones.fill(0),Hs={...e[e.length-1]},Sr=!0,dt("#urban-seed").value=String(Xa),dt("#urban-angle").value=String(Zt.radToDeg(Jr)),Og(),Yn.splice(0,Yn.length,...n.turns.map(t=>({summary:t.summary,events:t.events.map(i=>({...i}))}))),De=Math.min(n.currentTurn,Ai());for(const t of[...Ri.values()])Vo(t);Ri.clear(),Vs.clear(),ks.clear(),mc(),jo.replaceChildren(),st.length=0,n.units.forEach(t=>st.push(dc(t))),st.forEach(Yo),Zo()}function wn(n="author"){return!Fe||(n==="tools"?!Mi():n==="author"?!ct():!_i())||!dn()?!1:(Nr=ve?.read()??null,!0)}function Sg(n){if(!ve||ke.dragging||At||Ze||!ct()&&!(Fi()&&n.type==="set-turn-summary"&&n.turn===De&&n.sessionId===Tt()?.id)||!dn())return;const e=[...ft];ve.dispatch(n),lr(ve.read()),ft.clear(),e.filter(t=>st.some(i=>i.id===t)).forEach(t=>ft.add(t)),fe=Hi().at(-1)??null,ot(),rt()}function Zl(){if(Ze||ke.dragging||At)return;dn();const n=ve?.undo();if(!n)return;const e=[...ft];lr(n),ft.clear(),e.filter(t=>st.some(i=>i.id===t)).forEach(t=>ft.add(t)),fe=Hi().at(-1)??null,ot(),rt()}function Kl(){if(Ze||ke.dragging||At)return;dn();const n=ve?.redo();if(!n)return;const e=[...ft];lr(n),ft.clear(),e.filter(t=>st.some(i=>i.id===t)).forEach(t=>ft.add(t)),fe=Hi().at(-1)??null,ot(),rt()}function fE(n){yg(n),Yo(n),Zo()}function kl(n){mc();const e={unit:n,position:Wn(n),status:Ys(n,De)};Nh(e,De),on.children.filter(t=>t.userData.trail===n.id).forEach(t=>Vo(t)),gg(e,De),fe===n&&ft.size<=1&&Eg(e,Or(De))}function Wn(n,e=!1){const t=n.positions[Math.min(De,n.positions.length-1)];return e?t:ac(n,t,Et)}function Ja(n,e=js()){$s(n)&&(e.forEach(t=>{const i=n.positions[t];i.y=Et(i.x,i.z)}),ct()&&n.trackPoints?.forEach(t=>{e.includes(t.segment)&&e.includes(t.segment+1)&&(t.y=Et(t.x,t.z))}))}function pE(){!ct()||Tt()?.mapEditRef||!Fe||ke.dragging||(Ci(!0),fn=!1,os(),ft.clear(),fe=null,Ze={id:`unit-${ss}`,label:`NEW-${String(ss).padStart(2,"0")}`,faction:"enemy",kind:"UNKNOWN",icon:"air-outline",tgt:!1,positions:Array.from({length:Kn()},()=>new S(0,60,0)),attitudes:Array.from({length:Kn()},()=>({yaw:0,pitch:0,roll:0}))},Ql(),rt())}function mE(){if(!ct()||!Fe)return;const n=Hi();if(!n.length||Ze||ke.dragging||!wn())return;const e=new Set(n.map(t=>t.id));Zn?.links&&(Zn.links=Zn.links.filter(t=>!e.has(t.fromUnitId)&&!(t.to.kind==="unit"&&e.has(t.to.id)))),n.forEach(t=>{yg(t),st.splice(st.indexOf(t),1)}),Yn.forEach((t,i)=>{(!Mn()||i===De)&&(t.events=t.events.filter(r=>!e.has(r.target)&&(r.kind!=="attack"||!e.has(r.attacker))))}),jn([])}function zh(){const n=Math.floor(Number(dt("#create-count").value)),e=Number(dt("#create-spacing").value);return{count:Number.isFinite(n)?Zt.clamp(n,1,100):1,spacing:Number.isFinite(e)?Zt.clamp(e,1,1e3):20}}function bg(){if(!ct()||!Fe)return;const n=Hi();if(!n.length||Ze||ke.dragging)return;const{count:e,spacing:t}=zh();if(!wn())return;const i=[];for(let r=0;r<e;r++)for(const s of n){const o=dc(uc(s)),a=ss++;o.id=`unit-${a}`,delete o.player,delete o.playerActions,o.routeBinding=void 0,o.trackPoints?.forEach(c=>{c.x+=t*(r+1),c.z+=t*(r+1)}),o.positions.forEach(c=>{c.x+=t*(r+1),c.z+=t*(r+1)}),i.push(o),st.push(o),Yo(o)}Zo(),jn(i),Gs("translate")}st.forEach(Yo);Zo();function ot(n){mc(),dn(),ve&&!Nr&&!ke.dragging&&!At&&ve.setEditor({currentTurn:De,activeRouteId:Nn,sessionId:ve.read().editor.sessionId??"session-working"}),n!=="tools"&&Vh(),Mg();const e=Or(De);Mt?.sync(),typeof sn<"u"&&(ke.dragging?sn?.update():sn?.sync()),n!=="tools"&&(on.children.filter(i=>i.userData.trail).forEach(i=>{on.remove(i),i.traverse(r=>{(r instanceof we||r instanceof ln)&&(r.geometry.dispose(),Array.isArray(r.material)?r.material.forEach(s=>s.dispose()):r.material.dispose())})}),e.units.forEach(i=>{Nh(i,e.turn),gg(i,e.turn)})),document.querySelector("#turn-title").textContent=`TURN ${String(e.turn+1).padStart(2,"0")}`,document.querySelector("#turn-indicator").textContent=`${String(e.turn+1).padStart(2,"0")} / ${String(fg()+1).padStart(2,"0")}`,document.querySelector("#turn-summary").textContent=e.summary,document.querySelector("#unit-count").textContent=String(e.units.length).padStart(2,"0"),document.querySelector("#event-list").textContent=e.events.length===0?"无接触":e.events.map(iE).join(`
`);const t=e.units.find(i=>i.unit===fe);t?Eg(t,e):(fe=null,Ql()),ft.size>1&&(document.querySelector("#selected-name").textContent=`${ft.size} UNITS`,document.querySelector("#selected-detail").textContent=Hi().map(i=>i.label).join(" / "),document.querySelector("#distance-readout").textContent=`${Ti().length} 个可移动单位 / 编队移动`,document.querySelector("#attitude-readout").textContent="");for(const[i,r]of Ri)r.userData.parts.label.userData.dom.classList.toggle("unit-selected",Fe&&ft.has(i))}function th(){const n=Or(De),e=n.units.find(s=>s.unit.id===Si),t=n.units.find(s=>s.unit.id===Ui),i=Ln.userData.rangeCenters;if(i)for(const[s,o]of i){const a=n.units.find(l=>l.unit.id===s);if(!a)continue;const c=a.position.clone().sub(o);for(const l of Ln.children)l.userData.rangeUnitId===s&&l.position.add(c);o.copy(a.position)}Ln.userData.rangeCenter=i?.get(Si);const r=Ln.children.find(s=>s.userData.rangeConnector);if(e&&t&&e.unit.id!==t.unit.id&&r){const s=r.geometry.getAttribute("position");s.setXYZ(0,e.position.x,e.position.y,e.position.z),s.setXYZ(1,t.position.x,t.position.y,t.position.z),s.needsUpdate=!0,r.geometry.computeBoundingSphere();const o=sh(e.position,t.position,"slant",Bh());document.querySelector("#range-result").textContent=`${o.band} / 斜距
水平 ${o.horizontalKm.toFixed(2)} km
高差 ${o.altitudeDeltaKm.toFixed(2)} km
斜距 ${o.slantKm.toFixed(2)} km${e.status!=="active"||t.status!=="active"?`
已失效单位 / 仅供参考`:""}`}}function Bh(){const n=Tt(),e=n?.sealedScenes?.find(t=>t.turn===De);return Qg(e?e.rulesSnapshot:n?.rulesSnapshot)}function Jl(n){Si=n;const e=ki.get(n);e&&(document.querySelector("#range-rings").checked=e.rings,document.querySelector("#range-fill").checked=e.fill,document.querySelector("#range-fill-band").value=e.band,document.querySelector("#range-fill-opacity").value=String(e.opacity))}function gE(n){ki.delete(n),Si===n&&(Si=""),Gn(),ot()}function _E(n,e){for(const a of ki.keys())n.units.some(c=>c.unit.id===a)||ki.delete(a);const t=Ln.userData.rangeLayerKeys??new Map,i=Ln.userData.rangeCenters??new Map;Ln.userData.rangeLayerKeys=t,Ln.userData.rangeCenters=i;const r=a=>{for(const c of[...Ln.children])if(c.userData.rangeUnitId===a){const l=c;l.geometry.dispose(),Array.isArray(l.material)?l.material.forEach(u=>u.dispose()):l.material.dispose(),Ln.remove(c)}t.delete(a),i.delete(a)};for(const a of t.keys())ki.has(a)||r(a);for(const[a,c]of ki){const l=n.units.find(h=>h.unit.id===a),u=e.find(h=>h.name===c.band)??e[0],d=JSON.stringify([c,e]);if(t.get(a)!==d){if(r(a),t.set(a,d),i.set(a,l.position.clone()),c.fill){const h=new we(new ns(u.maxKm*tt,48,32),new yn({color:u.color,transparent:!0,opacity:c.opacity,depthWrite:!1,side:Ur}));h.position.copy(l.position),h.userData.rangeFill={band:u.name,radiusKm:u.maxKm},h.userData.rangeCentered=!0,h.userData.rangeUnitId=a,Ln.add(h)}if(c.rings)for(const h of e){const f=h.maxKm*tt,m=Array.from({length:129},(g,p)=>{const w=p/128*Math.PI*2;return new S(l.position.x+Math.cos(w)*f,l.position.y,l.position.z+Math.sin(w)*f)}),_=Da(m,h.color,1,.5);_.userData.rangeCentered=!0,_.userData.rangeUnitId=a,Ln.add(_)}}}const s=document.querySelector("#range-layer-list");s&&s.replaceChildren(...Array.from(ki,([a,c])=>{const l=n.units.find(_=>_.unit.id===a),u=document.createElement("div");u.className="range-layer-row",u.dataset.rangeUnitId=a;const d=document.createElement("div");d.textContent=`${l.unit.label} [${a}] · ${c.rings?"截面环":""}${c.rings&&c.fill?" + ":""}${c.fill?`${c.band}球体`:""}`;const h=document.createElement("div");h.className="edit-actions";const f=document.createElement("button");f.type="button",f.textContent="调整",f.setAttribute("aria-label",`调整${l.unit.label}的范围`),f.addEventListener("click",()=>{Jl(a),Gn(),ot()});const m=document.createElement("button");return m.type="button",m.textContent="移除",m.setAttribute("aria-label",`移除${l.unit.label}的范围`),m.addEventListener("click",()=>gE(a)),h.appendChild(f),h.appendChild(m),u.appendChild(d),u.appendChild(h),u}));const o=document.querySelector("#range-layer-count");o&&(o.textContent=`常驻范围：${ki.size} 个单位`)}function Mg(){const n=Tt()?.id,e=Ln.userData.rangeSessionId;e&&e!==n&&(ki.clear(),Si=Ui=""),Ln.userData.rangeSessionId=n;const t=Bh(),i=Or(De);i.units.some(m=>m.unit.id===Si)||(Si=""),i.units.some(m=>m.unit.id===Ui)||(Ui="");for(const[m,_]of[["#range-attacker-name",Si],["#range-target-name",Ui]]){const g=i.units.find(p=>p.unit.id===_);document.querySelector(m).textContent=g?`${g.unit.label} [${g.unit.id}] / ${Zd[g.status]}`:"尚未选择"}for(const[m,_]of[["#range-attacker-select",Si],["#range-target-select",Ui]]){const g=document.querySelector(m);g&&(g.replaceChildren(...["",...i.units.map(p=>p.unit.id)].map(p=>{const w=document.createElement("option");w.value=p;const y=i.units.find(v=>v.unit.id===p);return w.textContent=y?`${y.unit.label} · ${y.unit.kind}`:"选择单位",w})),g.value=_)}document.querySelector("#range-pick-state").textContent=hn?`${hn==="attacker"?"攻击方":"目标"}选择中`:"";for(const m of["attacker","target"])document.querySelector(`#range-pick-${m}`).setAttribute("aria-pressed",String(hn===m));const r=document.querySelector("#range-candidates");r.hidden=!Ya.length,r.replaceChildren(...Ya.flatMap(m=>{const _=i.units.find(p=>p.unit.id===m);if(!_)return[];const g=document.createElement("button");return g.textContent=`${_.unit.label} [${m}] / ${_.unit.kind} / ${sg[_.unit.faction]} / ${Zd[_.status]}`,g.addEventListener("click",()=>wg(_.unit)),[g]}));const s="slant";document.querySelector("#range-mode-readout").textContent=s.toUpperCase();const o=i.units.find(m=>m.unit.id===Si),a=i.units.find(m=>m.unit.id===Ui),c=document.querySelector("#range-result"),l=document.querySelector("#range-fill").checked,u=document.querySelector("#range-rings").checked,d=t.find(m=>m.name===document.querySelector("#range-fill-band").value)??t[0],h=Zt.clamp(Number(document.querySelector("#range-fill-opacity").value)||.12,.02,.6);o&&(l||u?ki.set(o.unit.id,{fill:l,rings:u,band:d.name,opacity:h}):ki.delete(o.unit.id)),_E(i,t);const f=JSON.stringify([o?.unit.id,a?.unit.id]);if(!o||!a)c.textContent="请选择攻击方与目标";else if(o===a)c.textContent="攻击方与目标不能相同";else{const m=sh(o.position,a.position,s,t);c.textContent=`${m.band} / 斜距
水平 ${m.horizontalKm.toFixed(2)} km
高差 ${m.altitudeDeltaKm.toFixed(2)} km
斜距 ${m.slantKm.toFixed(2)} km${o.status!=="active"||a.status!=="active"?`
已失效单位 / 仅供参考`:""}`}if(o&&l&&!a&&(c.textContent=`${d.name} / 3D填充半径 ${d.maxKm} km`),Ln.userData.rangeVisualKey===f){th();return}for(const m of[...Ln.children])if(m.userData.rangeConnector){const _=m;_.geometry.dispose(),Array.isArray(_.material)?_.material.forEach(g=>g.dispose()):_.material.dispose(),Ln.remove(_)}if(Ln.userData.rangeVisualKey=f,o&&a&&o!==a){const m=Da([o.position,a.position],15332072,1,.75);m.userData.rangeConnector=!0,Ln.add(m)}th()}function Gn(){hn=null,Ya=[],It.enabled=!0,vt.domElement.style.cursor=Gt?"crosshair":"",Lo()}function wg(n){!hn||!st.includes(n)||(hn==="attacker"?Jl(n.id):Ui=n.id,Gn(),ot())}function vE(n){if(!(ke.dragging||At||Ze)){if(Mt?.cancel(),hn===n){Gn(),ot();return}Ci(!0),fn=!1,Gt&&ji(!1),$t=Wt=Fn=!1,it=null,hn=n,Ya=[],ke.detach(),It.enabled=!0,vt.domElement.style.cursor="crosshair",ot(),rt()}}function xE(n,e){qt()||un||e&&!Or(De).units.some(t=>t.unit.id===e)||(n==="attacker"?Jl(e):Ui=e,Gn(),ot())}for(const n of["attacker","target"])document.querySelector(`#range-pick-${n}`).addEventListener("click",()=>vE(n)),document.querySelector(`#range-${n}-select`).addEventListener("change",e=>xE(n,e.target.value));document.querySelector("#range-use-selected").addEventListener("click",()=>{!fe||ke.dragging||(Jl(fe.id),Gn(),ot())});document.querySelector("#range-clear").addEventListener("click",()=>{ki.clear(),Si=Ui="",Gn(),ot()});for(const n of["#range-rings","#range-fill","#range-fill-band","#range-fill-opacity"])document.querySelector(n).addEventListener("change",()=>ot());document.querySelector("#edit-panel").addEventListener("click",n=>{const e=n.target instanceof Element?n.target:null;hn&&!e?.closest(".range-panel")&&(Gn(),ot())},!0);function Ql(){document.querySelector("#selected-name").textContent="未选择",document.querySelector("#selected-detail").textContent="",document.querySelector("#distance-readout").textContent="—",document.querySelector("#attitude-readout").textContent="—"}function Eg(n,e){const{unit:t,status:i}=n;fe=t;const r=n.position,s=[sg[t.faction],Zd[i]],o=zi().groups.find(_=>_.id===t.groupId);o&&s.push(`编组:${o.name}`),t.tgt&&s.push("目标"),t.escort&&t.faction!=="enemy"&&s.push("护卫目标"),document.querySelector("#selected-name").textContent=t.label,document.querySelector("#selected-detail").textContent=`${t.kind} / ${s.join(" / ")}`;const a=e.units.find(_=>_.unit.id===Ui),l=a&&a.unit!==t?sh(r,a.position,"slant",Bh()):null;document.querySelector("#distance-readout").textContent=l?`至 ${a.unit.label}：${l.distanceKm.toFixed(2)} km / ${l.band}`:"—";const u=Ih(t,e.turn),d=_=>_*180/Math.PI,h=_=>`${d(_)>=0?"+":""}${d(_).toFixed(1)}°`,f=document.querySelector("#attitude-readout"),m=Lh(t,e.turn);if(m!==null)f.textContent=`偏航 ${h(m)}  俯仰 ${h(u?.pitch??0)}  横滚 ${h(u?.roll??0)}  （航路）`;else if(u===null){const _=Dh(t,e.turn);f.textContent=_===null?"朝向  固定":`朝向 ${h(_)}  （水平）`}else f.textContent=`偏航 ${h(u.yaw)}  俯仰 ${h(u.pitch)}  横滚 ${h(u.roll)}`}function Mo(n){if(Mt?.cancel(),typeof Pt<"u"&&Pt){WE(n);return}const e=Math.max(0,Math.min(n,Ai()));e!==De&&(ke.dragging||At||dn()&&(Mt?.clearSelection(),gc="",ic(),Ci(!0),os(),De=e,Mn()&&ve&&(ve.setEditor({...ve.read().editor,currentTurn:e}),lr(ve.read()),ft.clear(),fe=null,Fe=Fi()),ot(),rt()))}function hc(){const{width:n,height:e}=Jo(),t=Xw(gt.extent,gt.extentZ,n/e,bt.fov,360,n);return It.maxDistance=t.maxDistance,bt.far=t.far,bt.near=t.near,bt.updateProjectionMatrix(),t}function Hh(){const n=hc();It.target.set(0,0,0),bt.position.copy(new S(0,.65,1).normalize().multiplyScalar(n.distance)),It.update()}function yE(){const n=hc();It.target.set(0,0,0),bt.position.set(0,n.distance,.001),It.maxPolarAngle=Math.PI*.499,It.update()}const bn=()=>({label:document.querySelector("#edit-label"),kind:document.querySelector("#edit-kind"),faction:document.querySelector("#edit-faction"),icon:document.querySelector("#edit-icon"),tgt:document.querySelector("#edit-tgt"),escort:document.querySelector("#edit-escort"),hidden:document.querySelector("#edit-hidden"),intangible:document.querySelector("#edit-intangible"),lost:document.querySelector("#edit-lost"),remove:document.querySelector("#edit-delete"),undo:document.querySelector("#edit-undo"),redo:document.querySelector("#edit-redo")});let Ze=null,Zi=!1,Pr="translate",Do="translate";const SE=new S,tn=new Sn;ls.add(tn);const ke=new FM(bt,vt.domElement);ke.setSize(.85);ls.add(ke.getHelper());const dt=n=>document.querySelector(n),Un=n=>n.icon==="air-filled"||n.icon==="air-outline";function Ko(n){const e=Ih(n,De),t=Lh(n,De);return t!==null?{yaw:is(t-(n.icon==="ground"?Math.PI:0)),pitch:e?.pitch??0,roll:e?.roll??0}:e??{yaw:is((Dh(n,De)??0)-(n.icon==="ground"?Math.PI:0)),pitch:0,roll:0}}function js(){return _i()?Mn()?[De]:Array.from({length:dt("#apply-later").checked?Kn()-De:1},(n,e)=>De+e):[]}function Tg(n,e){lc(n)&&(n.attitudes??=Array.from({length:Kn()},()=>null),js().forEach(t=>{n.attitudes[t]={...e}}))}function Ag(n){if(Mn()||!ct()||Tt()?.mapEditRef||!Fe||Ze||ke.dragging||At||(Ci(!0),!wn()))return;const e=De,t=e+1,i=new Map(st.map(s=>[s.id,{...Ko(s)}])),r=Yn[e];Yn.splice(t,0,{summary:n?r.summary:"TACTICAL MOVEMENT / NEW TURN",events:n?r.events.map(s=>({...s})):[]}),st.forEach(s=>{if(s.trackPoints=nm(s.trackPoints??[],t,!0),s.routeBinding&&s.routeBinding.startTurn>=t&&s.routeBinding.startTurn++,s.playerActions?.forEach(o=>{o.turn>=t&&o.turn++,o.recordedTurn>=t&&o.recordedTurn++}),s.positions.splice(t,0,s.positions[e].clone()),n)s.attitudes??=Array.from({length:Kn()-1},()=>null),s.attitudes.splice(t,0,i.get(s.id));else if(s.attitudes){const o=s.attitudes[e];s.attitudes.splice(t,0,o?{...o}:null)}s.destroyedAtTurn!==void 0&&s.destroyedAtTurn>=t&&(s.destroyedAtTurn+=1)}),Yn[t].events=Yn[t].events.filter(s=>s.kind!=="destroy"),Gi(),it=null,De=t,ot(),rt()}function bE(){if(Mn()||!ct()||Tt()?.mapEditRef||!Fe||Kn()<=1||Ze||ke.dragging||(Ci(!0),!wn()))return;const n=De;Yn.splice(n,1),st.forEach(e=>{e.trackPoints=nm(e.trackPoints??[],n,!1),e.routeBinding&&(e.routeBinding.startTurn=Math.max(0,e.routeBinding.startTurn>=n?e.routeBinding.startTurn-1:e.routeBinding.startTurn)),e.positions.splice(n,1),e.attitudes?.splice(n,1),e.playerActions&&(e.playerActions=e.playerActions.filter(t=>t.turn!==n&&t.recordedTurn!==n).map(t=>({...t,turn:t.turn>n?t.turn-1:t.turn,recordedTurn:t.recordedTurn>n?t.recordedTurn-1:t.recordedTurn}))),e.destroyedAtTurn===n?e.destroyedAtTurn=void 0:e.destroyedAtTurn!==void 0&&e.destroyedAtTurn>n&&(e.destroyedAtTurn-=1)}),Gi(),it=null,De=Math.min(n,Ai()),ot(),rt()}function Lo(){if(typeof sn<"u"&&sn?.active()){ke.detach();return}if(!_i()&&!Mi()){ke.detach();return}if(hn||Mt?.isPicking()){ke.detach();return}if(ke.dragging)return;const n=Mt?.selection();if(n&&Mi()&&Fe&&!Gt&&!Ze&&!fn){tn.position.set(n.position.x,n.position.y,n.position.z).multiplyScalar(tt);const r=n.kind==="marker"?zi().markers.find(o=>o.id===n.id):void 0,s=r&&Ii(r)&&n.pointIndex===void 0?Do:"translate";tn.scale.setScalar(1),tn.quaternion.copy(r&&s!=="translate"?Wa(r):new nn),ke.setMode(s),ke.setSpace(s==="translate"?"world":"local"),ke.showX=ke.showY=ke.showZ=!0,ke.attach(tn);return}tn.scale.setScalar(1);const e=fc();if(ct()&&Fe&&!Gt&&e){const r=it?.kind==="track"?st.find(o=>o.id===it.unitId):void 0,s=!!r&&!Un(r)&&!r.intangible;tn.position.copy(ba(e,s)),tn.quaternion.identity(),ke.setMode("translate"),ke.setSpace("world"),ke.showX=ke.showZ=!0,ke.showY=!s,ke.attach(tn);return}if($t||Wt||Fn){ke.detach();return}if(!Fe||Gt||!fe||Ze||fn||!Ti().length){ke.detach();return}const t=ft.size>1?Bo():Wn(fe);if(tn.position.copy(t),ft.size===1&&tn.position.copy(Wl(fe,t,Et,si)),SE.subVectors(tn.position,t),ft.size>1)tn.quaternion.identity();else{const r=Ko(fe);tn.quaternion.setFromEuler(new In(r.pitch,r.yaw,r.roll,"YXZ"))}ke.setMode(Pr),ke.setSpace(Pr==="translate"?"world":"local");const i=Ti().some(Un);ke.showX=Pr==="translate"||i,ke.showY=!0,ke.showZ=Pr==="translate"||i,ke.attach(tn)}let La="";function ME(){const n=Hn?.panels.equipment;if(!n||!ve)return;if(Pt){n.replaceChildren(),La="";return}const e=Tt(),t=JSON.stringify([ve.revision,e?.id,De,fe?.id,Fe,ct(),qt(),fe?uc(fe):null]);if(t===La&&n.childElementCount)return;La=t,n.replaceChildren();const i=document.createElement("label");i.className="equipment-unit-choice",i.textContent="配置单位";const r=document.createElement("select");r.id="equipment-unit",r.setAttribute("aria-label","配置装备的单位"),r.add(new Option("请选择单位",""));for(const l of st)r.add(new Option(l.label,l.id));r.value=fe?.id??"",r.disabled=qt(),i.append(r),n.append(i),r.addEventListener("change",()=>{if(qt()||!r.isConnected)return;const l=st.find(u=>u.id===r.value);jn(l?[l]:[])});const s=document.createElement("div");if(s.id="equipment-editor-body",n.append(s),!e||!fe||Ze){s.textContent=Ze?"待落位":"未选择单位";return}const o=e.id,a=fe.id,c=De;Zg(s,{read:()=>xg().project,busy:()=>un||qt()||fe?.id!==a||Tt()?.id!==o||De!==c,report:rn,commit:(l,u)=>{if(!ve||!ct()||!Fe||qt()||fe?.id!==a||Tt()?.id!==o||De!==c)throw new Error("单位或编辑状态已变化，请重新选择装备。");if(!dn())throw new Error("请先完成当前编辑。");const d=ve.read();ve.commit({...d,project:l},u,d),ur(),Vn(!0),Hn?.select("equipment")}},{mode:"session",sessionId:o,unitId:a,turn:c,editable:ct()&&Fe&&!qt()})}function wE(n){if(!ve||!ct()||Tt()?.mapEditRef||un||qt())throw new Error("请先完成当前操作，再新建玩家。");if(!dn())throw new Error("当前编辑尚未保存。");const e=ve.read(),t=Tt().id,i=`player-unit-${crypto.randomUUID()}`,s=tm(e.project,t,i,n.playerId,n.aircraftRef,n.loadout,{x:0,y:2.4,z:0},De).sessions.find(o=>o.id===t).units.find(o=>o.id===i);Vn(!0),ji(!1),Ci(!0),fn=!1,Gn(),Mt?.cancel(),Mt?.clearSelection(),$t=Wt=Fn=!1,it=null,ft.clear(),fe=null,Ql(),Ze=dc({...s,trackPoints:void 0,positions:s.positions.map(o=>({x:o.x*tt,y:o.y*tt,z:o.z*tt}))}),$i={input:structuredClone(n),player:{...s.player},sessionId:t,turn:De,revision:ve.revision},Zi=!1,It.enabled=!0,vt.domElement.style.cursor="",ot(),rt()}function EE(){const n=$i;!n||!Ze||!ve||n.sessionId!==Tt()?.id||n.turn!==De||n.revision!==ve.revision||!ct()||(Zi=!0,It.enabled=!1,vt.domElement.style.cursor="crosshair",rt())}function TE(n){const e=$i,t=Ze;if(!e||!t||!ve)return!1;if(!ct()||!Fe||un||ke.dragging||At||e.sessionId!==Tt()?.id||e.turn!==De||e.revision!==ve.revision)return rn("玩家放置状态已变化，请取消后重新创建。"),!1;const i=ve.read(),r=n.clone();r.y=t.intangible?Wn(t).y:Un(t)?Math.max(Wn(t).y,Et(r.x,r.z)+si):Et(r.x,r.z);try{const s=tm(i.project,e.sessionId,t.id,e.input.playerId,e.input.aircraftRef,e.input.loadout,{x:r.x/tt,y:r.y/tt,z:r.z/tt},De),o=s.sessions.find(c=>c.id===e.sessionId).units.find(c=>c.id===t.id);o.icon=t.icon,o.faction=t.faction;const a=o.id;return ve.commit({...i,project:s},"创建玩家单位",i),ur(),Vn(!0),jn(st.filter(c=>c.id===a)),rn(`${e.player.callsign} 已放置`),!0}catch(s){return rn(s instanceof Error?s.message:String(s)),!1}}function AE(n,e,t){if(!ve||!ct()||Tt()?.mapEditRef||un||qt())throw new Error("当前回合为只读或仍有操作待完成。");if(Fe||Vn(!0),!dn())throw new Error("当前编辑尚未保存。");const i=ve.read(),r=Tt().id,s=f0(i.project,r,n,De,e,t==="drop"?"jettison":"use",`player-action-${crypto.randomUUID()}`);ve.commit({...i,project:s},t==="drop"?"登记上一回合抛弃":"登记上一回合使用",i),ur(),Vn(!0),rn(`已登记${t==="drop"?"抛弃":"使用"}`)}function Rg(){if(!eh||!Zr||!ve)return;const n=Tt(),e=!!n?.mapEditRef;Zr.hidden=!Fr||e;const t=JSON.stringify([ve.revision,n?.id,De,fe?.id,ct(),Fe,Fr,un,qt(),$i,Zi]);t!==Ul&&(Ul=t,eh.sync({project:ve.read().project,revision:ve.revision,sessionId:n?.id??"",turn:De,selectedUnitId:fe?.id,editable:ct()&&!un&&($i!==null||!qt()),mapOnly:e,...$i?{pending:{player:{...$i.player},aircraftRef:{...$i.input.aircraftRef},loadout:structuredClone($i.input.loadout),armed:Zi}}:{}}))}function Gp(){const n=Ze??fe,e=fc();if(e)for(const s of["x","y","z"])dt(`#path-${s}`).value=e[s].toFixed(2);if(!n)return;const t=ft.size>1?Bo():Wn(n),i=Ko(n);for(const s of["x","y","z"])dt(`#edit-${s}`).value=t[s].toFixed(2);const r=document.querySelector("#edit-height");r&&(r.value=(t.y*1e3/tt).toFixed(1));for(const s of["pitch","yaw","roll"])dt(`#edit-${s}`).value=Zt.radToDeg(i[s]).toFixed(2)}function rt(){for(const c of Array.from(document.querySelectorAll('#edit-panel [data-mode-disabled="true"]')))c.disabled=!1,delete c.dataset.modeDisabled;Cg(),IE();const n=bn();dt("#canvas-width").value=String(gt.extent*2/tt),dt("#canvas-height").value=String(gt.extentZ*2/tt),dt("#canvas-samples").value=String(gt.size),Hn||(document.querySelector("#terrain-editor").toggleAttribute("hidden",!Gt),document.querySelector("#unit-editor").toggleAttribute("hidden",Gt)),document.querySelector("#tab-terrain").setAttribute("aria-pressed",String(Gt)),document.querySelector("#tab-units").setAttribute("aria-pressed",String(!Gt)),document.querySelector("#terrain-undo").disabled=!ve?.canUndo||!!At,document.querySelector("#terrain-redo").disabled=!ve?.canRedo||!!At;const e=Ze??fe;dt("#turn-summary-edit").value=Yn[De].summary,dt("#turn-summary-edit").disabled=!!Ze,dt("#edit-lost").max=String(Kn());for(const c of["#turn-add","#turn-copy","#turn-delete"])document.querySelector(c).disabled=!!Ze||ke.dragging||c==="#turn-delete"&&Kn()===1;n.undo.disabled=!ve?.canUndo||!!Ze,n.redo.disabled=!ve?.canRedo||!!Ze,n.remove.disabled=fe===null||!!Ze,document.querySelector("#edit-copy").disabled=!ft.size||!!Ze,document.querySelector("#selection-count").textContent=`已选 ${ft.size} / 可移动 ${Ti().length}`,document.querySelector("#tool-box").setAttribute("aria-pressed",String(fn)),document.querySelector("#edit-add").setAttribute("aria-pressed",String(!!Ze)),document.querySelector("#unit-picker").replaceChildren(...st.map(c=>{const l=document.createElement("button"),u=zi().groups.find(d=>d.id===c.groupId);return l.textContent=u?`${c.label} · ${u.name}`:c.label,u&&(l.style.borderColor=u.color),l.setAttribute("aria-pressed",String(ft.has(c.id))),l.disabled=!!Ze,l.addEventListener("click",d=>Xl(c,d.shiftKey||d.ctrlKey||d.metaKey||dt("#select-additive").checked)),l}));const i=["urban","erase-urban"].includes(document.querySelector("#terrain-brush").value);for(const c of["#urban-density","#urban-angle","#urban-seed"])dt(c).closest("label").toggleAttribute("hidden",!i);dt("#terrain-strength").closest("label").toggleAttribute("hidden",i),dt("#terrain-flat").closest("label").toggleAttribute("hidden",i),[n.label,n.kind,n.faction,n.icon,n.tgt,n.escort,n.hidden,n.intangible,n.lost].filter(Boolean).forEach(c=>{c.disabled=!e}),n.label.value=e?.label??"",n.kind.value=e?.kind??"",n.faction.value=e?.faction??"enemy",n.icon.value=e?.icon??"air-outline",n.tgt.checked=e?.tgt===!0,n.hidden&&(n.hidden.checked=e?.hidden===!0),n.intangible&&(n.intangible.checked=e?.intangible===!0),n.escort.checked=e?.escort===!0&&e.faction!=="enemy",n.lost.value=e?.destroyedAtTurn===void 0?"":String(e.destroyedAtTurn+1),document.querySelector("#placement-actions").toggleAttribute("hidden",!Ze),document.querySelector("#edit-state").textContent=Ze?Zi?"点选中":"待落位":ft.size>1?`编队移动 / 主单位 ${fe?.label??"-"} / 回合 ${De+1}`:fe?`回合 ${De+1} / ${fe.attitudes?.[De]?"手动姿态":"自动姿态"}`:"未选择",document.querySelector("#edit-place").disabled=Zi,document.querySelector("#edit-auto").disabled=!fe||!!Ze||ft.size>1;const r=!Ze&&ft.size>1?Bo():e?Wn(e):new S,s=e?Ko(e):{yaw:0,pitch:0,roll:0};for(const c of["x","y","z"]){const l=dt(`#edit-${c}`);l.disabled=!e||!!Ze&&c!=="y",l.value=e?r[c].toFixed(2):""}for(const c of["pitch","yaw","roll"]){const l=dt(`#edit-${c}`);l.disabled=!e||!Ze&&ft.size>1||c!=="yaw"&&!Un(e),l.value=e?Zt.radToDeg(s[c]).toFixed(2):""}const o=document.querySelector("#edit-height");o&&(o.value=e?(r.y*1e3/tt).toFixed(1):"",o.disabled=!e),document.querySelector("#tool-move").setAttribute("aria-pressed",String(Pr==="translate")),document.querySelector("#tool-rotate").setAttribute("aria-pressed",String(Pr==="rotate"));const a=!!Tt()?.mapEditRef;document.querySelector("#tab-units").toggleAttribute("hidden",a),a&&!Hn&&document.querySelector("#unit-editor").setAttribute("hidden","");for(const c of["#turn-add","#turn-copy","#turn-delete"])Mn()&&(document.querySelector(c).disabled=!0);Mn()&&(dt("#apply-later").disabled=!0),PE(),Bi(),Lo(),Hn?.sync({editing:Fe,editable:Mi(),mapOnly:a,active:Fr,playerView:Pt,viewerCanUndo:!!ve?.canUndo,viewerCanRedo:!!ve?.canRedo}),vg?.sync(),Mt?.sync(),typeof sn<"u"&&sn?.sync(),ME(),Rg()}function Cg(){!_i()&&!Mi()&&(Fe=!1),ct()||(Gt=$t=Fn=Wt=!1,it=null),Hn||document.querySelector("#edit-panel").toggleAttribute("hidden",!Fe),document.querySelector("#mode-readout").textContent=Fe?Mn()?"草稿编辑":"EDIT":"VIEW"}const RE=new Set(["edit-x","edit-y","edit-z","edit-height","edit-pitch","edit-yaw","edit-roll","edit-auto","edit-lost","turn-summary-edit","select-clear","select-additive","tool-box","tool-move","tool-rotate","move-snap","rotate-snap","trail-display","trail-turns","edit-undo","edit-redo","tab-units"]);function Wp(n){return RE.has(n.id)||!!n.closest("#unit-picker")}function Pg(n){return!!n.closest(".sidebar-header,.sidebar-nav,.range-panel,.trail-panel,.archive-panel,.selection-panel,.sidebar-bound-list,#unit-picker,#route-list,#track-list")||["route-select","route-group-select","route-select-bound","route-visible","route-labels","select-clear","select-additive"].includes(n.id)}function CE(n,e){const t=bn().escort;t.disabled=!n||!e||n.faction==="enemy",t.checked=n?.escort===!0&&n.faction!=="enemy"}function PE(){const n=_i()&&Fe,e=ct()&&Fe;for(const r of Array.from(document.querySelectorAll("#unit-editor input, #unit-editor button, #unit-editor select, #unit-editor textarea, #terrain-editor input, #terrain-editor button, #terrain-editor select, #route-section input, #route-section button, #route-section select, #turn-summary-edit")))Pg(r)||(!e&&(!n||!Wp(r))?r.disabled=!0:e&&r.dataset.modeDisabled==="true"&&(r.disabled=!1),r.dataset.modeDisabled=String(!e&&(!n||!Wp(r))));const t=Ze??fe;for(const r of["edit-x","edit-y","edit-z","edit-height","edit-pitch","edit-yaw","edit-roll","edit-auto"]){const s=document.getElementById(r);(!n||t&&!Ze&&!lc(t))&&(s.disabled=!0)}const i=bn().lost;CE(t,e),i.disabled=!t||!n||!e&&!Oh(t),i.min=String(e?1:De+1),i.max=String(e?Kn():De+1),i.step="1"}for(const n of["click","change","input","keydown","pointerdown"])document.querySelector("#edit-panel").addEventListener(n,e=>{const t=e.target instanceof Element?e.target.closest("button, input, select, textarea"):null;!t||Pg(t)||t.closest("#workflow-panel")||t.closest('[data-sidebar-panel="groups"],[data-sidebar-panel="markers"],[data-sidebar-panel="drawing"],[data-sidebar-panel="equipment"],[data-sidebar-panel="links"]')||ct()&&Fe||(e.preventDefault(),e.stopImmediatePropagation())},!0);function os(){$i=null,Ze=null,Zi=!1,vt.domElement.style.cursor="",It.enabled=!0,rt()}function Vn(n){if(n&&!_i()&&!Mi()){Cg(),Bi();return}dn()&&(Mt?.cancel(),typeof sn<"u"&&sn?.cancel(),hn&&Gn(),Fe=n,Hn||document.querySelector("#edit-panel").toggleAttribute("hidden",!n),document.querySelector("#mode-readout").textContent=n?"EDIT":"VIEW",vt.domElement.style.cursor=n&&Gt?"crosshair":"",n||($t=Wt=!1,it=null,Vh(),pc(),Gt=!1,Yi.visible=!1,Ci(!0),fn=!1,os()),ot(),rt())}function Vi(n,e=!1,t="metadata"){if(!_i()||!Fe||t==="metadata"&&!ct()||fe&&!Ze&&(t==="pose"&&!lc(fe)||t==="loss"&&!Oh(fe)))return;if(Ze){n(Ze),Ja(Ze,Ze.positions.map((s,o)=>o)),rt();return}if(!fe)return;const i=fe.icon,r=fe.intangible;wn(t==="metadata"?"author":"draft")&&(n(fe),$s(fe)&&(t==="pose"||fe.icon!==i||fe.intangible!==r)&&Ja(fe),e&&fE(fe),ot(),rt())}function Gs(n){!_i()||!Fe||(fn=!1,Pr=n,rt())}ke.addEventListener("dragging-changed",n=>{if(It.enabled=!n.value,n.value){Bi();return}_n?.units.some(e=>st.find(t=>t.id===e.id)?.routeBinding)&&(Gi(),ot()),dn("Transform units / path"),rt()});let _n=null,Qa=null,ec=!1,yi=null;function DE(n,e,t){if(!Zn)return;const i=r=>({x:r.x+t.x/tt,y:r.y+t.y/tt,z:r.z+t.z/tt});if(e.kind==="marker"){const r=n.markers.find(o=>o.id===e.id),s=Zn.markers.find(o=>o.id===e.id);if(r&&s)if(Ii(r)&&e.pointIndex!==void 0){const o=ws(r);o[e.pointIndex]=i(o[e.pointIndex]);const a=hl(r,o);Object.assign(s,a)}else s.position=i(r.position),r.controlPoints&&(s.controlPoints=r.controlPoints.map(i))}else{const r=n.drawings.find(o=>o.id===e.id),s=Zn.drawings.find(o=>o.id===e.id);r&&s&&(s.points=r.points.map((o,a)=>e.pointIndex===void 0||a===e.pointIndex?i(o):{...o}))}}const Go=new Map;let rr=[];const Is=new S,Dg=new nn;ke.addEventListener("mouseDown",()=>{if(!_i()&&!(Mi()&&Mt?.selection())||!Fe||!ct()&&it){ke.detach();return}ec=!1,Qa=Nr??ve?.read()??null,_n=jl(),yi=Mt?.selection()??null,Is.copy(tn.position),Dg.copy(tn.quaternion),rr=js(),Go.clear(),Ti().forEach(n=>Go.set(n.id,n.positions.map(e=>e.clone())))});ke.addEventListener("mouseUp",()=>{_n&&!Ho(yi?_n.sceneTools:_n,yi?Zn:jl())&&(Nr=Qa),_n=null,Qa=null,ec=!1,yi=null});ke.addEventListener("objectChange",()=>{if(!_i()&&!(Mi()&&yi)||!Fe||!_n||ec)return;if(yi&&_n.sceneTools){if(!Mi())return;try{const e=_n.sceneTools.markers.find(i=>i.id===yi.id),t=Zn?.markers.find(i=>i.id===yi.id);if(yi.kind==="marker"&&yi.pointIndex===void 0&&e&&t&&Ii(e)&&Do!=="translate"){const i=new In().setFromQuaternion(tn.quaternion,"YXZ"),r=Do==="rotate"?{pitch:i.x,yaw:i.y,roll:i.z}:e.attitude??{pitch:0,yaw:0,roll:0},s=ke.axis??"XYZ",o=s.includes("X")?"x":s.includes("Y")?"y":"z",a=(e.sizeKm??.12)*(Do==="scale"?Math.abs(tn.scale[o]):1);Object.assign(t,tg(e,e.position,r,a))}else DE(_n.sceneTools,yi,tn.position.clone().sub(Is))}catch(e){rn(e instanceof Error?e.message:String(e));return}Mt?.syncPosition?Mt.syncPosition():Mt?.sync(),typeof sn<"u"&&sn?.update();return}const n=fc();if(n){if(!ct())return;const e=it?.kind==="track"?st.find(t=>t.id===it.unitId):void 0;n.x=tn.position.x,n.y=e?.intangible?tn.position.y:Math.max(0,tn.position.y),n.z=tn.position.z,e&&!Un(e)&&!e.intangible&&(n.y=Et(n.x,n.z)),it?.kind==="waypoint"&&Gi(),ot(),Gp();return}if(fe){if(Pr==="translate"){const e=tn.position.clone().sub(Is),t=Ti().filter(i=>Un(i)&&!i.intangible).map(i=>Go.get(i.id)).filter(Boolean);t.length&&(e.y=Math.max(e.y,...t.flatMap(i=>rr.map(r=>{const s=i[r];return Math.max(0,Et(s.x+e.x,s.z+e.z))-s.y})))),Ti().forEach(i=>{const r=Go.get(i.id);if(r){_g(i,rr),rr.forEach(o=>i.positions[o].copy(r[o]).add(e));const s=_n?.units.find(o=>o.id===i.id)?.trackPoints;ct()&&s&&(i.trackPoints=s.map(o=>rr.includes(o.segment)&&rr.includes(o.segment+1)?{...o,x:o.x+e.x,y:o.y+e.y,z:o.z+e.z}:{...o})),Ja(i,rr),kl(i)}})}else if(ft.size>1)LE();else{const e=new In().setFromQuaternion(tn.quaternion,"YXZ");Tg(fe,{yaw:e.y,pitch:Un(fe)?e.x:0,roll:Un(fe)?e.z:0})}Pr!=="translate"&&(ft.size>1?Ti():[fe]).forEach(e=>kl(e)),th(),Gp()}});function LE(){const n=Dg.clone().invert().premultiply(tn.quaternion),e=new In().setFromQuaternion(n,"YXZ"),t=new nn().setFromEuler(new In(0,e.y,0,"YXZ")),i=(r,s)=>_n?.units.find(o=>o.id===r.id)?.attitudes?.[s]??Ko(r);Ti().forEach(r=>{const s=Go.get(r.id);if(!s)return;ct()&&!Mn()&&(r.routeBinding=void 0);const o=Un(r),a=o?n:t;rr.forEach(l=>{r.positions[l].copy(s[l].clone().sub(Is).applyQuaternion(a).add(Is));const u=i(r,l),d=new In(0,0,0,"YXZ").setFromQuaternion(new nn().setFromEuler(new In(u.pitch,u.yaw,u.roll,"YXZ")).premultiply(a),"YXZ");r.attitudes??=Array.from({length:Kn()},()=>null),r.attitudes[l]={yaw:d.y,pitch:o?d.x:0,roll:o?d.z:0}});const c=_n?.units.find(l=>l.id===r.id)?.trackPoints;ct()&&c&&(r.trackPoints=c.map(l=>{if(!(rr.includes(l.segment)&&rr.includes(l.segment+1)))return{...l};const u=new S(l.x,l.y,l.z).sub(Is).applyQuaternion(a).add(Is);return{...l,x:u.x,y:u.y,z:u.z}})),Ja(r,rr),kl(r)})}function Wo(n){cr.x=n.clientX/innerWidth*2-1,cr.y=-(n.clientY/innerHeight)*2+1,ar.setFromCamera(cr,bt);let e=0;const t=new S;for(let i=2;i<bt.far;i+=2){const r=ar.ray.at(i,t);if(r.y<=Et(r.x,r.z)){let s=e,o=i;for(let c=0;c<18;c++){const l=(s+o)/2,u=ar.ray.at(l,t);u.y>Et(u.x,u.z)?s=l:o=l}const a=ar.ray.at(o,new S);return a.y=Et(a.x,a.z),a}e=i}return null}let fn=!1,bi=null;const Ws=document.createElement("div");Ws.className="selection-box";Ws.hidden=!0;document.querySelector("#app").appendChild(Ws);function Ci(n=!1,e){if(!bi)return;const t=bi;if(bi=null,Ws.hidden=!0,It.enabled=!Zi,vt.domElement.hasPointerCapture(t.pointerId)&&vt.domElement.releasePointerCapture(t.pointerId),n||!e)return;const i=Math.min(t.x,e.clientX),r=Math.max(t.x,e.clientX),s=Math.min(t.y,e.clientY),o=Math.max(t.y,e.clientY);ls.updateMatrixWorld(!0),bt.updateMatrixWorld(!0);const a=st.filter(c=>{if(Ys(c,De)==="wreck")return!1;const u=Ri.get(c.id).userData.parts.icon.getWorldPosition(new S).project(bt),d=(u.x+1)*innerWidth/2,h=(1-u.y)*innerHeight/2;return u.z>=-1&&u.z<=1&&d>=i&&d<=r&&h>=s&&h<=o});jn(t.additive?[...new Set([...Hi(),...a])]:a),rt()}function Fl(n){cr.x=n.clientX/innerWidth*2-1,cr.y=-(n.clientY/innerHeight)*2+1,ar.setFromCamera(cr,bt);const e=ar.intersectObjects(on.children.filter(t=>t.userData.editorTools),!0).filter(t=>Ol(t.object)).filter(t=>{for(let i=t.object;i;i=i.parent)if(i.userData.editorTool)return!0;return!1});return e.find(t=>t.object.userData.editorTool?.pointIndex!==void 0)??e[0]}vt.domElement.addEventListener("pointerdown",n=>{if(n.button!==0||!Fr||n.altKey||Ze||Gt||ke.dragging||ke.axis!==null||At||hn||Mt?.isPicking())return;if(sn?.active()){n.preventDefault(),n.stopImmediatePropagation();const t=eu(n)[0];for(let r=t?.object??null;r;r=r.parent){const s=r.userData.unit;if(s){sn.pick("unit",s.id);return}}const i=Fl(n);for(let r=i?.object??null;r;r=r.parent)if(r.userData.editorTool?.kind==="marker"){Mt?.selectObject?.(i.object);return}return}if(!Fe||fn||$t||Wt||Fn)return;const e=Fl(n);e&&Mt?.selectObject?.(e.object)&&(n.preventDefault(),n.stopImmediatePropagation())},!0);vt.domElement.addEventListener("dblclick",n=>{n.button!==0||!Fr||qt()||hn||$t||Wt||Fn||Gt||fn||ke.axis!==null||eu(n).length||typeof Fl<"u"&&Fl(n)||ar.intersectObject(nr,!0).some(t=>t.object.userData.pathPoint)||jn([])});vt.domElement.addEventListener("pointerdown",n=>{if(Pt||Mt?.isPicking()||hn||!Fe||Gt||$t||Fn||it||Ze||n.button!==0||!(fn||n.shiftKey))return;n.stopImmediatePropagation(),n.preventDefault();const e=eu(n)[0]?.object.userData.unit;if(e&&!fn){Xl(e,!0);return}It.enabled=!1,ke.axis=null,bi={x:n.clientX,y:n.clientY,additive:n.shiftKey||n.ctrlKey||n.metaKey||dt("#select-additive").checked,pointerId:n.pointerId},Ws.hidden=!1,Ws.style.cssText=`left:${n.clientX}px;top:${n.clientY}px;width:0;height:0`,vt.domElement.setPointerCapture(n.pointerId)},!0);vt.domElement.addEventListener("pointermove",n=>{bi&&(n.stopImmediatePropagation(),Ws.style.cssText=`left:${Math.min(bi.x,n.clientX)}px;top:${Math.min(bi.y,n.clientY)}px;width:${Math.abs(n.clientX-bi.x)}px;height:${Math.abs(n.clientY-bi.y)}px`)},!0);vt.domElement.addEventListener("pointerup",n=>{bi&&(n.stopImmediatePropagation(),Ci(!1,n))},!0);vt.domElement.addEventListener("pointercancel",()=>Ci(!0));vt.domElement.addEventListener("pointerdown",n=>{if(Mt?.isPicking()||hn||n.button!==0||Gt||$t||Wt||Fn||it)return;if(Ze&&Zi){if(!ct()||!Fe)return;const t=Wo(n);if(!t)return;if($i){n.stopImmediatePropagation(),TE(t);return}const i=Ze,{count:r,spacing:s}=zh(),o=Math.ceil(Math.sqrt(r)),a=[];if(!wn())return;for(let c=0;c<r;c++){const l=dc(uc(i)),u=ss++;l.id=`unit-${u}`,l.label=r===1?i.label:`${i.label}-${String(c+1).padStart(2,"0")}`;const d=t.clone();d.x+=c%o*s,d.z+=Math.floor(c/o)*s;const h=Et(d.x,d.z);d.y=l.intangible?Wn(i).y:Un(l)?Math.max(Wn(i).y,h+si):h,l.positions=Array.from({length:Kn()},()=>d.clone()),st.push(l),a.push(l),Yo(l)}Ze=null,Zi=!1,It.enabled=!0,vt.domElement.style.cursor="",Zo(),jn(a),Gs("translate");return}if(Ze||ke.dragging||Fe&&ke.axis!==null)return;const e=eu(n)[0]?.object.userData.unit;e&&Xl(e,Fe&&(n.ctrlKey||n.metaKey||dt("#select-additive").checked))});document.querySelector("#edit-place").addEventListener("click",()=>{Ze&&(Zi=!0,It.enabled=!1,vt.domElement.style.cursor="crosshair",rt())});document.querySelector("#edit-cancel").addEventListener("click",os);document.querySelector("#tool-move").addEventListener("click",()=>Gs("translate"));document.querySelector("#tool-rotate").addEventListener("click",()=>Gs("rotate"));for(const n of["x","y","z"])dt(`#edit-${n}`).addEventListener("change",()=>{const e=Number(dt(`#edit-${n}`).value);if(Number.isFinite(e)){if(!Ze&&ft.size>1){const t=new S;t[n]=e-Bo()[n],ja(t)}else if(Ze)Vi(t=>{Wn(t,!0)[n]=n==="y"&&!t.intangible?Math.max(0,e):e});else if(fe){const t=new S;t[n]=e-Wn(fe)[n],ja(t)}}});document.querySelector("#edit-height")?.addEventListener("change",()=>{const n=dt("#edit-height"),e=Number(n.value);if(!n.value.trim()||!Number.isFinite(e)){rt();return}const t=Ze?Wn(Ze).y:fe?ft.size>1?Bo().y:Wn(fe).y:void 0,i=(Ze?[Ze]:Ti()).some(s=>$s(s)&&(Ze?s.positions:js().map(o=>s.positions[o])).some(o=>o.y!==Et(o.x,o.z)));if(t!==void 0&&n.value===(t*1e3/tt).toFixed(1)&&!i)return;const r=e*tt/1e3;if(Ze)Vi(s=>{Wn(s,!0).y=s.intangible?r:Math.max(0,r)});else if(fe){const s=new S(0,r-(ft.size>1?Bo().y:Wn(fe).y),0);ja(s)}});for(const n of["pitch","yaw","roll"])dt(`#edit-${n}`).addEventListener("change",()=>{const e=Number(dt(`#edit-${n}`).value);Number.isFinite(e)&&Vi(t=>{const i={...Ko(t),[n]:Zt.degToRad(e)};Ze?t.attitudes=Array.from({length:Kn()},()=>({...i})):Tg(t,i)},!1,"pose")});document.querySelector("#edit-auto").addEventListener("click",()=>Vi(n=>{n.attitudes&&js().forEach(e=>{n.attitudes[e]=null})},!1,"pose"));document.querySelector("#turn-add").addEventListener("click",()=>Ag(!1));document.querySelector("#turn-copy").addEventListener("click",()=>Ag(!0));document.querySelector("#turn-delete").addEventListener("click",bE);dt("#turn-summary-edit").addEventListener("change",()=>{if(!_i()||!Fe)return;const n=dt("#turn-summary-edit").value.trim();n===Yn[De].summary||Ze||Sg({type:"set-turn-summary",sessionId:ve?.read().editor.sessionId??"session-working",turn:De,summary:n||"UNTITLED TURN"})});dt("#move-snap").addEventListener("change",()=>ke.setTranslationSnap(Number(dt("#move-snap").value)>0?Number(dt("#move-snap").value):null));dt("#rotate-snap").addEventListener("change",()=>ke.setRotationSnap(Number(dt("#rotate-snap").value)>0?Zt.degToRad(Number(dt("#rotate-snap").value)):null));document.querySelector("#edit-copy").addEventListener("click",bg);document.querySelector("#select-clear").addEventListener("click",()=>jn([]));document.querySelector("#tool-box").addEventListener("click",()=>{fn=!fn,rt()});document.querySelector("#edit-add").addEventListener("click",pE);document.querySelector("#edit-delete").addEventListener("click",mE);document.querySelector("#edit-undo").addEventListener("click",Zl);document.querySelector("#edit-redo").addEventListener("click",Kl);bn().label.addEventListener("change",()=>{if(Ze){Vi(n=>{n.label=bn().label.value||n.id});return}fe&&Sg({type:"rename-unit",sessionId:ve?.read().editor.sessionId??"session-working",unitId:fe.id,label:bn().label.value||fe.id})});bn().kind.addEventListener("change",()=>Vi(n=>{n.kind=bn().kind.value||"UNKNOWN"}));bn().faction.addEventListener("change",()=>Vi(n=>{n.faction=bn().faction.value,n.faction==="enemy"&&delete n.escort},!0));bn().icon.addEventListener("change",()=>Vi(n=>{n.icon=bn().icon.value},!0));bn().tgt.addEventListener("change",()=>Vi(n=>{n.tgt=bn().tgt.checked}));bn().escort.addEventListener("change",()=>{const n=Ze??fe;if(!n||n.faction==="enemy"||!ct()||!Fe){rt();return}Vi(e=>{e.escort=bn().escort.checked})});bn().hidden?.addEventListener("change",()=>Vi(n=>{n.hidden=bn().hidden.checked}));bn().intangible?.addEventListener("change",()=>Vi(n=>{if(n.intangible=bn().intangible.checked,!n.intangible){const e=Ze===n?n.positions.map((t,i)=>i):js();e.forEach(t=>{const i=n.positions[t];i.y=Un(n)?Math.max(i.y,Et(i.x,i.z),0):Et(i.x,i.z)}),n.trackPoints?.forEach(t=>{e.includes(t.segment)&&e.includes(t.segment+1)&&(t.y=Un(n)?Math.max(t.y,Et(t.x,t.z),0):Et(t.x,t.z))})}}));bn().lost.addEventListener("change",()=>{if(!_i()||!Fe||fe&&!Oh(fe))return;const n=bn().lost.value.trim();if(Mn()&&n!==""&&Number(n)!==De+1){rn("损失回合仅可留空或填写当前草稿回合"),rt();return}Vi(e=>{const t=Number(n),i=e.destroyedAtTurn;e.destroyedAtTurn=n===""||Number.isNaN(t)?void 0:Math.max(0,Math.min(t-1,Ai())),Mn()&&i!==e.destroyedAtTurn&&(Yn[De].events=Yn[De].events.filter(r=>r.kind!=="destroy"||r.target!==e.id),e.destroyedAtTurn===De&&Yn[De].events.push({kind:"destroy",target:e.id})),Gi()},!0,"loss")});document.querySelector("#prev-turn").addEventListener("click",()=>Mo(De-1));document.querySelector("#next-turn").addEventListener("click",()=>Mo(De+1));addEventListener("keydown",n=>{const e=n.key.toLowerCase();if(typeof sn<"u"&&sn?.active()&&n.key==="Escape"){sn.cancel(),rt(),n.preventDefault();return}if(Mt?.isPicking()){n.key==="Escape"&&(Mt.cancel(),ot(),n.preventDefault());return}if(hn&&n.key==="Escape"){Gn(),ot(),n.preventDefault();return}if(!(hn&&["e","t","b","w","q","d","a","pageup","pagedown"].includes(e))){if(n.key==="Escape"&&ke.dragging&&yi){ke.reset(),_n&&(Zn=_n.sceneTools?structuredClone(_n.sceneTools):void 0),_n=null,Qa=null,ec=!0,yi=null,Mt?.sync(),n.preventDefault();return}if(n.key==="Escape"&&ke.dragging&&it){if(ke.reset(),_n){const t=_n;xn.splice(0,xn.length,...t.routes.map(i=>({...i,waypoints:i.waypoints.map(r=>({...r}))}))),Nn=t.activeRouteId,st.forEach(i=>{const r=t.units.find(s=>s.id===i.id);r&&(i.positions=r.positions.map(s=>new S(s.x,s.y,s.z)),i.trackPoints=r.trackPoints?.map(s=>({...s})))}),_n=null,ec=!0,ot(),rt()}n.preventDefault();return}if(n.key==="Escape"&&($t||Wt||it)){$t=Wt=!1,it=null,ot(),rt();return}if(n.key==="Escape"&&At){pc(!0);return}if(n.key==="Escape"&&Ze){os();return}if(!n.target?.matches("input, select, textarea, [contenteditable]")&&document.querySelector("#manager-panel").hidden&&!(typeof Pt<"u"&&Pt&&["t","b","w","q","d","a","pageup","pagedown"].includes(e))){if(e==="t"&&Fe){Hn?Hn.select(Gt?"units":"terrain"):ji(!Gt);return}if(!((Gt||it||$t||Wt)&&["b","w","q","d","a","pageup","pagedown"].includes(e))){if(n.key==="Escape"){bi?Ci(!0):ke.dragging?ke.reset():(fn=!1,jn([]));return}if(Fe&&e==="b"&&(fn=!fn,rt()),Fe&&(n.ctrlKey||n.metaKey)&&e==="d"){n.preventDefault(),bg();return}if(Fe&&(n.ctrlKey||n.metaKey)&&e==="a"){n.preventDefault(),Ze||jn(st.filter(t=>Ys(t,De)==="active"));return}if(Fe&&e==="w"&&Gs("translate"),Fe&&e==="q"&&Gs("rotate"),(n.ctrlKey||n.metaKey)&&e==="z"){n.preventDefault(),Zl();return}if((n.ctrlKey||n.metaKey)&&e==="y"){n.preventDefault(),Kl();return}if(n.key==="ArrowLeft"&&Mo(De-1),n.key==="ArrowRight"&&Mo(De+1),n.key==="Home"&&Mo(0),n.key==="End"&&Mo(fg()),e==="r"&&Hh(),e==="e"&&Vn(!Fe),n.key==="PageUp"&&Fe&&fe&&(n.preventDefault(),ja(new S(0,10,0))),n.key==="PageDown"&&Fe&&fe&&(n.preventDefault(),ja(new S(0,-10,0))),e==="f"&&fe){const t=Or(De).units.find(i=>i.unit===fe);t&&(It.target.set(t.position.x,t.position.y*.35,t.position.z),It.update())}}}}});function fc(){if(!ct()||!it)return null;if(it.kind==="waypoint")return xn.flatMap(e=>e.waypoints).find(e=>e.id===it.id)??null;const n=it;return st.find(e=>e.id===n.unitId)?.trackPoints?.find(e=>e.id===n.id)??null}function Gi(){if(Mn()||!ct())return;const n=new Set;for(const e of st){const t=e.routeBinding,i=xn.find(a=>a.id===t?.routeId);if(!t||!i?.waypoints.length)continue;const r=t.offset??{x:0,y:0,z:0},s=i.waypoints.map(a=>({x:a.x+r.x,y:a.y+r.y,z:a.z+r.z})),o=t0(e.positions,s,t.startTurn,e.destroyedAtTurn);e.positions=o.map((a,c)=>new S(a.x,c<=t.startTurn||e.intangible?a.y:Un(e)?Math.max(a.y,Et(a.x,a.z)+si):Et(a.x,a.z),a.z)),n.add(e.id)}for(let e=1;e<Kn();e++){const t=new Map;st.filter(s=>n.has(s.id)&&s.routeBinding?.formationId&&e>s.routeBinding.startTurn&&(s.destroyedAtTurn===void 0||e<=s.destroyedAtTurn)).forEach(s=>{const o=s.routeBinding.formationId;t.set(o,[...t.get(o)??[],s])});for(const s of t.values()){const o=s.filter(c=>Un(c)&&!c.intangible);let a=0;o.forEach(c=>{const l=c.routeBinding,u=xn.find(m=>m.id===l.routeId),d=u.waypoints[Math.min(e-l.startTurn-1,u.waypoints.length-1)],h=c.positions[e],f=d.y+(l.offset?.y??0);h.y=f,a=Math.max(a,Et(h.x,h.z)+si-f)}),o.forEach(c=>{c.positions[e].y+=a})}const i=st.filter(s=>!s.intangible).map(s=>({id:s.id,point:s.positions[e],fixed:!n.has(s.id)||!!s.routeBinding?.formationId||e<=(s.routeBinding?.startTurn??Ai())||s.destroyedAtTurn!==void 0&&e>s.destroyedAtTurn})),r=n0(i,8);for(const s of st){if(!n.has(s.id))continue;const o=s.routeBinding;if(!(e<=o.startTurn)){if(s.destroyedAtTurn!==void 0&&e>s.destroyedAtTurn)s.positions[e].copy(s.positions[s.destroyedAtTurn]);else if(!o.formationId){const a=r.get(s.id)??s.positions[e];s.positions[e].set(a.x,s.intangible?a.y:Un(s)?Math.max(a.y,Et(a.x,a.z)+si):Et(a.x,a.z),a.z)}}}}}function ba(n,e=!1){return new S(n.x,e?Et(n.x,n.z)+si:n.y,n.z)}function Vh(){if(Vo(nr),nr=new An,on.add(nr),Ll.replaceChildren(),Qd.length=0,typeof Pt<"u"&&Pt)return;const n=(i,r,s,o=!1)=>{const a=it?.id===r.id&&it.kind===r.kind&&(r.kind!=="waypoint"||it.kind==="waypoint"&&(!r.routeId||it.routeId===r.routeId||Nn===r.routeId)),c=new we(new ns(a?4:2.8,10,8),new yn({color:a?16777215:s,depthTest:!1}));c.position.copy(ba(i,o)),c.userData.pathPoint=r,c.renderOrder=10,nr.add(c)},e=document.querySelector("#route-visible")?.checked??!0,t=document.querySelector("#route-labels")?.checked??!0;if(e)for(const i of xn){const r=st.filter(l=>l.routeBinding?.routeId===i.id),s=[...new Set(r.map(l=>zi().groups.find(u=>u.id===l.groupId)?.name).filter(Boolean))],o=r.filter(l=>!l.groupId||!zi().groups.some(u=>u.id===l.groupId)).map(l=>l.label),a=[...s.map(l=>`编组:${l}`),...o].join(" / ")||"未绑定",c=i.id===Nn?16767050:7649492;i.waypoints.length>1&&nr.add(Da(i.waypoints.map(l=>ba(l)),c,1,i.id===Nn?.7:.4)),i.waypoints.forEach((l,u)=>{n(l,{kind:"waypoint",id:l.id,routeId:i.id},c);const d=new S(l.x,Et(l.x,l.z)+.35,l.z);if(nr.add(Da([d,ba(l)],c,1,.5)),nr.add(Da([new S(l.x-4,d.y,l.z),new S(l.x+4,d.y,l.z),d.clone(),new S(l.x,d.y,l.z-4),new S(l.x,d.y,l.z+4)],c,1,.7)),!t)return;const h=document.createElement("button");h.className="waypoint-label",h.textContent=`${i.name} · ${u+1} · ${a}`,h.title=`${i.name} / 航路点 ${u+1}
绑定单位：${r.map(f=>f.label).join("、")||"无"}
${a}`,h.addEventListener("click",()=>{ke.dragging||At||Mt?.isPicking()||(Nn=i.id,$t=Wt=!1,it=ct()&&Fe?{kind:"waypoint",id:l.id,routeId:i.id}:null,Hn?.select("routes"),ot(),rt())}),Ll.appendChild(h),Qd.push({dom:h,position:ba(l).add(new S(0,5,0))})})}if(!(!ct()||!Fe||Gt)&&Fn&&fe&&ft.size===1&&Ys(fe,De)!=="wreck"&&document.querySelector("#trail-display").value!=="none"){const i=!Un(fe)&&!fe.intangible,r=Math.min(Ai(),fe.destroyedAtTurn??Ai());fe.trackPoints?.filter(o=>o.segment<r).forEach(o=>n(o,{kind:"track",unitId:fe.id,id:o.id},Pa[fe.faction],i));const s=Uh(fe,De);for(const o of kh(fe,s,r)){const{segment:a,points:c}=o;i&&c.forEach(u=>{u.y=Et(u.x,u.z)+si});const l=mg(c,Pa[fe.faction]);l.userData.editSegment=a,l.userData.trackPart=o,l.traverse(u=>{u.userData.editSegment=a,u instanceof we&&(u.material.dispose(),u.material=new yn({color:Pa[fe.faction],transparent:!0,opacity:.65,side:mn,depthTest:!1}))}),nr.add(l)}}}function IE(){const n=zo(),e=document.querySelector("#route-select");e.replaceChildren(...xn.map(f=>{const m=document.createElement("option");return m.value=f.id,m.textContent=f.name,m})),e.value=Nn,dt("#route-name").value=Dl()?.name??"";const t=(f,m)=>{const _=document.createElement("button");return _.textContent=f,_.setAttribute("aria-pressed",String(it?.id===m.id)),_.addEventListener("click",()=>{if(ke.dragging||At||Mt?.isPicking())return;$t=Wt=!1,it=ct()&&Fe?m:null;const g=m.kind==="waypoint"?zo().find(p=>p.id===m.id):fe?.trackPoints?.find(p=>p.id===m.id);g&&!ct()&&Fh({x:g.x/tt,y:g.y/tt,z:g.z/tt}),ot(),rt()}),_};document.querySelector("#route-list").replaceChildren(...n.map((f,m)=>t(`WP ${m+1}`,{kind:"waypoint",id:f.id})));const i=fe&&ft.size===1?fe.trackPoints??[]:[];document.querySelector("#track-list").replaceChildren(...i.map((f,m)=>t(`P${m+1} / ${f.segment+1}-${f.segment+2}`,{kind:"track",unitId:fe.id,id:f.id})));const r=fc(),s=it?.kind==="track"?st.find(f=>f.id===it.unitId):void 0,o=!!s&&!Un(s)&&!s.intangible;for(const f of["x","y","z"]){const m=dt(`#path-${f}`);m.disabled=!r||o&&f==="y",m.value=r?r[f].toFixed(2):""}document.querySelector("#route-bind").disabled=!Ti().length||!n.length,document.querySelector("#route-unbind").disabled=!Hi().some(f=>f.routeBinding),document.querySelector("#path-delete").disabled=!r;for(const f of["#route-up","#route-down"])document.querySelector(f).disabled=it?.kind!=="waypoint";document.querySelector("#route-pick").setAttribute("aria-pressed",String($t)),document.querySelector("#track-edit").setAttribute("aria-pressed",String(Fn)),document.querySelector("#track-add").setAttribute("aria-pressed",String(Wt));for(const f of["#track-add","#track-midpoint"])document.querySelector(f).disabled=!fe||ft.size!==1||Kn()<2;it?.kind==="track"&&fe&&(Ys(fe,De)==="wreck"||document.querySelector("#trail-display").value==="none")&&(it=null),dt("#track-segment").max=String(Math.max(1,Ai())),document.querySelector("#path-state").textContent=$t?"航路点放置中":Wt?"控制点放置中":`${Dl()?.name??"-"} / ${n.length} 个航路点 / ${Hi().map(f=>`${f.label}:${xn.find(m=>m.id===f.routeBinding?.routeId)?.name??"未绑定"}${f.routeBinding?.formationId?"(编队)":""}`).join(" / ")} / ${i.length} 个航迹控制点`;const c=st.filter(f=>f.routeBinding?.routeId===Nn),l=document.querySelector("#route-bindings");l&&l.replaceChildren(...c.map(f=>{const m=document.createElement("button"),_=zi().groups.find(g=>g.id===f.groupId);return m.textContent=`${f.label}${_?` · ${_.name}`:""} / 从第 ${f.routeBinding.startTurn+1} 回合`,m.addEventListener("click",()=>jn([f])),m}));const u=document.querySelector("#route-group-select");if(u){const f=u.value;u.replaceChildren(...zi().groups.map(m=>new Option(`${m.name} (${st.filter(_=>_.groupId===m.id).length})`,m.id))),zi().groups.some(m=>m.id===f)&&(u.value=f)}const d=document.querySelector("#route-select-bound");d&&(d.disabled=!c.length);const h=document.querySelector("#route-bind-group");h&&(h.disabled=!ct()||!Fe||!n.length||!u?.value)}function Lg(n,e){const t=[0,...(fe?.trackPoints??[]).filter(s=>s.segment===n).sort((s,o)=>s.t-o.t).map(s=>s.t),1],i=Zt.clamp(e,0,.999999)*(t.length-1),r=Math.floor(i);return Zt.lerp(t[r],t[r+1],i-r)}function Ig(n,e,t=.5){if(!ct()||!Fe||!fe||ft.size!==1||!wn())return;fe.trackPoints??=[];const i={id:`control-${Nl++}`,segment:n,t:Zt.clamp(t,.01,.99),x:e.x,y:e.y,z:e.z};fe.trackPoints.push(i),it={kind:"track",unitId:fe.id,id:i.id},Wt=!1,ot(),rt()}vt.domElement.addEventListener("pointerdown",n=>{if(Mt?.isPicking()||!ct()||hn||!Fe||Gt||n.button!==0||n.altKey||Ze)return;if($t){n.stopImmediatePropagation(),n.preventDefault();const i=Wo(n);if(!i||!wn())return;zo().push({id:`wp-${Il++}`,x:i.x,y:Math.max(Number(dt("#route-height").value)||0,i.y+si),z:i.z}),Gi(),ot(),rt();return}cr.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),ar.setFromCamera(cr,bt);const e=ar.intersectObjects(nr.children,!0),t=e.find(i=>i.object.userData.pathPoint);if(t&&ke.axis===null){n.stopImmediatePropagation(),n.preventDefault(),it=t.object.userData.pathPoint,it?.kind==="waypoint"&&it.routeId&&(Nn=it.routeId),Wt=!1,Hn?.select("routes"),ot(),rt();return}if(Wt&&ke.axis===null){n.stopImmediatePropagation(),n.preventDefault();const i=e.find(r=>r.object.userData.editSegment!==void 0);if(i){const r=i.object.userData.editSegment,s=kh(fe,Uh(fe,De),Math.min(Ai(),fe.destroyedAtTurn??Ai())).find(l=>l.segment===r);if(!s)return;let o=0,a=1/0;for(let l=0;l<=300;l++){const u=s.curve.getPoint(Zt.lerp(s.start,s.end,l/300));!Un(fe)&&!fe.intangible&&(u.y=Et(u.x,u.z)+si);const d=u.distanceToSquared(i.point);d<a&&(a=d,o=l/300)}const c=s.curve.getPoint(Zt.lerp(s.start,s.end,o));Ig(r,c,Lg(r,o))}}},!0);document.querySelector("#route-select").addEventListener("change",()=>{ke.dragging||At||Mt?.isPicking()||(Nn=document.querySelector("#route-select").value,it=null,$t=Wt=!1,ot(),rt())});dt("#route-name").addEventListener("change",()=>{ke.dragging||wn()&&(Dl().name=dt("#route-name").value.trim()||"UNTITLED ROUTE",ot(),rt())});document.querySelector("#route-new").addEventListener("click",()=>{if(ke.dragging||Ze||!wn())return;const n=$a++,e={id:`route-${n}`,name:`ROUTE ${n}`,waypoints:[]};xn.push(e),Nn=e.id,it=null,$t=Wt=!1,ot(),rt()});document.querySelector("#route-remove").addEventListener("click",()=>{if(!(ke.dragging||Ze)&&wn()){if(st.filter(n=>n.routeBinding?.routeId===Nn).forEach(n=>{n.routeBinding=void 0}),xn.splice(xn.findIndex(n=>n.id===Nn),1),!xn.length){const n=$a++;xn.push({id:`route-${n}`,name:`ROUTE ${n}`,waypoints:[]})}Nn=xn[0].id,it=null,$t=Wt=!1,Gi(),ot(),rt()}});document.querySelector("#route-pick").addEventListener("click",()=>{!ct()||!Fe||Ze||ke.dragging||($t=!$t,Wt=!1,it=null,fn=!1,ot(),rt())});function Ng(n){if(!ct()||!Fe||Ze||ke.dragging||!zo().length||!n.length)return;const e=i0(n.map(i=>Wn(i))),t=n.length>1?`formation-${Pl++}`:void 0;wn()&&(n.forEach((i,r)=>{i.routeBinding={startTurn:De,routeId:Nn,offset:t?e[r]:{x:0,y:0,z:0},formationId:t},i.trackPoints=(i.trackPoints??[]).filter(s=>s.segment<De)}),Gi(),ot(),rt())}document.querySelector("#route-bind").addEventListener("click",()=>Ng(Ti()));document.querySelector("#route-unbind").addEventListener("click",()=>{wn()&&(Hi().forEach(n=>{n.routeBinding=void 0}),Gi(),ot(),rt())});for(const[n,e]of[["#route-up",-1],["#route-down",1]])document.querySelector(n).addEventListener("click",()=>{if(it?.kind!=="waypoint")return;const t=zo(),i=t.findIndex(s=>s.id===it.id),r=i+e;r<0||r>=t.length||wn()&&([t[i],t[r]]=[t[r],t[i]],Gi(),ot(),rt())});document.querySelector("#path-delete").addEventListener("click",()=>{if(it&&wn()){if(it.kind==="waypoint"){const n=zo();n.splice(n.findIndex(e=>e.id===it.id),1),n.length||st.filter(e=>e.routeBinding?.routeId===Nn).forEach(e=>{e.routeBinding=void 0})}else{const n=it,e=st.find(t=>t.id===n.unitId);e.trackPoints=e.trackPoints?.filter(t=>t.id!==n.id)}it=null,Gi(),ot(),rt()}});document.querySelector("#track-edit").addEventListener("click",()=>{!ct()||!Fe||(Fn=!Fn,Wt=$t=!1,it=null,fn=!1,ot(),rt())});document.querySelector("#track-add").addEventListener("click",()=>{!ct()||!Fe||(Fn=!0,Wt=!Wt,$t=!1,it=null,fn=!1,ot(),rt())});document.querySelector("#track-midpoint").addEventListener("click",()=>{if(!ct()||!Fe||!fe||ft.size!==1||Kn()<2)return;const n=Zt.clamp(Math.floor(Number(dt("#track-segment").value)||1)-1,0,Ai()-1),e=Qp(fe.positions,fe.trackPoints??[],n,n+1).map(i=>new S(i.x,i.y,i.z)),t=new Mh(e).getPoint(.5);Fn=!0,Ig(n,t,Lg(n,.5))});dt("#track-segment").addEventListener("change",()=>{dt("#track-segment").value=String(Zt.clamp(Math.floor(Number(dt("#track-segment").value)||1),1,Math.max(1,Ai())))});for(const n of["x","y","z"])dt(`#path-${n}`).addEventListener("change",()=>{const e=fc(),t=Number(dt(`#path-${n}`).value);if(!e||!Number.isFinite(t))return;const i=it?.kind==="track"?it.unitId:void 0;if(!wn())return;const r=st.find(s=>s.id===i);e[n]=n==="y"&&!r?.intangible?Math.max(0,t):t,r&&$s(r)&&(e.y=Et(e.x,e.z)),it?.kind==="waypoint"&&Gi(),ot(),rt()});for(const n of["#trail-display","#trail-turns"])document.querySelector(n).addEventListener("change",()=>ot());function Ug(){const n=(e,t,i,r)=>{const s=Number(dt(e).value);return Number.isFinite(s)?Zt.clamp(s,t,i):r};return{radius:n("#terrain-radius",8,240,50),strength:n("#terrain-strength",.1,30,6),target:n("#terrain-flat",0,180,20),density:n("#urban-density",1,100,70)/100,mode:document.querySelector("#terrain-brush").value}}const Yi=new J_(new zt,new Ei({color:7143340,depthTest:!1,transparent:!0,opacity:.9}));Yi.visible=!1;ls.add(Yi);function kg(n){if(Yi.visible=!!n&&Gt&&Fe,!n)return;const{radius:e}=Ug();let t=Yi.geometry.getAttribute("position");t||(t=new Dt(new Float32Array(240),3),t.setUsage(xl),Yi.geometry.setAttribute("position",t));for(let i=0;i<80;i++){const r=i/80*Math.PI*2,s=n.x+Math.cos(r)*e,o=n.z+Math.sin(r)*e;t.setXYZ(i,s,Et(s,o)+.6,o)}t.needsUpdate=!0,Yi.geometry.computeBoundingSphere()}function Fg(n){if(!ct()||!Fe||!At)return;const e=Ug(),t=At.last,i=t?t.distanceTo(n):0;if(t&&i<gt.spacing*.4)return;const r=t?Math.ceil(i/Math.max(gt.spacing,e.radius/4)):1;for(let s=1;s<=r;s++){const o=t?t.clone().lerp(n,s/r):n,a=e.mode==="smooth"||e.mode==="flatten"?e.strength/30:e.strength;(e.mode==="urban"||e.mode==="erase-urban"?Ft.paint(o.x,o.z,e.radius,e.density,e.mode==="erase-urban",em(Ft.styles,Hs)):gt.brush(o.x,o.z,e.radius,a,e.mode,e.target))&&(At.changed=!0,Sr=!0,e.mode==="urban"||e.mode==="erase-urban"?eE(o,e.radius):nE(o,e.radius))}At.last=n.clone()}function pc(n=!1){if(!At)return;const e=At;!n&&e.height&&hg(),At=null,Po=null,n?(gt.data.set(e.before.terrain),Ft.data.set(e.before.urban),Sr=!0):e.changed&&(Nr=e.checkpoint),vt.domElement.hasPointerCapture(e.pointerId)&&vt.domElement.releasePointerCapture(e.pointerId),It.enabled=!0,Sr?(cc(!n),!n&&cn&&Cl===gt&&(qa=!1)):(xi.visible=!0,Ls.visible=!0,cn&&(cn.root.visible=xi===cn.root),Us=null),ot(),rt()}function ji(n){n&&!ct()||!n&&Tt()?.mapEditRef||(hn&&Gn(),!ke.dragging&&(pc(),Ci(!0),os(),fn=!1,Gt=n,$t=Wt=!1,it=null,Vh(),Yi.visible=!1,n&&!Fe&&Vn(!0),vt.domElement.style.cursor=n?"crosshair":"",rt()))}vt.domElement.addEventListener("pointerdown",n=>{if(Mt?.isPicking()||!ct()||!Fe||!Gt||n.button!==0||n.altKey)return;n.stopImmediatePropagation(),n.preventDefault();const e=Wo(n);!e||Math.abs(e.x)>gt.extent||Math.abs(e.z)>gt.extentZ||dn()&&(At={before:jl(),checkpoint:ve?.read()??null,pointerId:n.pointerId,changed:!1,last:null,height:!["urban","erase-urban"].includes(document.querySelector("#terrain-brush").value)},It.enabled=!1,vt.domElement.setPointerCapture(n.pointerId),Fg(e),kg(e))},!0);vt.domElement.addEventListener("pointermove",n=>{if(!ct()||!Fe||!Gt)return;const e=Wo(n);kg(e),At&&(n.stopImmediatePropagation(),e&&Fg(e))},!0);vt.domElement.addEventListener("pointerup",n=>{At&&(n.stopImmediatePropagation(),pc())},!0);vt.domElement.addEventListener("pointercancel",()=>pc(!0));vt.domElement.addEventListener("pointerleave",()=>{At||(Yi.visible=!1)});document.querySelector("#tab-terrain").addEventListener("click",()=>ji(!0));document.querySelector("#tab-units").addEventListener("click",()=>ji(!1));for(const[n,e]of[["#terrain-reset",()=>gt.reset()],["#terrain-generate",()=>gt.generate(Number(dt("#terrain-seed").value)||0,document.querySelector("#terrain-preset").value)]])document.querySelector(n).addEventListener("click",()=>{At||wn()&&(e(),Sr=!0,cc(),ot(),rt())});document.querySelector("#terrain-brush").addEventListener("change",rt);for(const n of["#urban-angle","#urban-seed"])dt(n).addEventListener("change",()=>{At||wn()&&(Jr=Zt.degToRad(Zt.clamp(Number(dt("#urban-angle").value)||0,-180,180)),Xa=Number(dt("#urban-seed").value)|0,Sr=!0,cc(),ot(),rt())});document.querySelector("#terrain-contour-smooth").addEventListener("change",()=>{Sr=!0});const NE={spacing:"街区间距",blockCells:"街区格数",emptyBlockChance:"空街区比例",widthMin:"面宽最小",widthMax:"面宽最大",depthMin:"进深最小",depthMax:"进深最大",heightMin:"高度最低",heightMax:"高度最高",heightRise:"高度随密度",heightJitter:"高度随机",footprintTighten:"密集收紧",shadeMin:"明暗最暗",shadeMax:"明暗最亮"},Gh=new Map,_l=document.querySelector("#urban-preset");{const n=document.querySelector("#urban-style-rows");for(const e of Object.keys(jh)){const t=jh[e],i=document.createElement("label");i.className="edit-row";const r=document.createElement("span");r.textContent=NE[e];const s=document.createElement("input");s.type="number",s.id=`urban-style-${e}`,s.min=String(t.min),s.max=String(t.max),s.step=String(t.step),s.addEventListener("change",()=>id(UE())),i.append(r,s),n.append(i),Gh.set(e,s)}_l.replaceChildren(...Zh.map(e=>new Option(e.name,e.id)),new Option("自定义","custom")),_l.addEventListener("change",()=>{const e=Zh.find(t=>t.id===_l.value);e&&id(e.style)}),document.querySelector("#urban-style-reset").addEventListener("click",()=>id(rc)),document.querySelector("#urban-style-apply-all").addEventListener("click",kE),Wh()}function UE(){const n={};for(const[e,t]of Gh)n[e]=Number(t.value);return Ma(n)}function Og(){for(const[n,e]of Gh)e.value=String(Hs[n]);_l.value=e0(Hs)?.id??"custom"}function id(n){At||(Hs=Ma(n),Og(),Wh())}function kE(){if(At||!wn())return;Ft.styles[0]={...Hs};const n=em(Ft.styles,Hs);for(let e=0;e<Ft.zones.length;e++)Ft.data[e]&&(Ft.zones[e]=n);Sr=!0,cc(),ot(),rt(),Wh()}function Wh(){document.querySelector("#urban-style-count").textContent=`当前 ${Ph()} 栋建筑`}document.querySelector("#terrain-undo").addEventListener("click",Zl);document.querySelector("#terrain-redo").addEventListener("click",Kl);const ar=new Lm,cr=new Be;function Jo(){const n=vt.domElement.getBoundingClientRect?.();return n&&n.width>0&&n.height>0?{left:n.left,top:n.top,width:n.width,height:n.height}:{left:0,top:0,width:innerWidth,height:innerHeight}}function tc(){return typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches}function Xh(n,e,t){const i=Jo(),r=[];bt.updateMatrixWorld(),on.updateMatrixWorld(!0);for(const s of Ri.values()){const o=s.userData.parts,a=s.userData.unit;if(!o||!a||!Ol(s))continue;const c=typeof Vs<"u"?Vs.get(a.id):void 0,l=o.label.userData.dom,u=!l.hidden&&Number(l.style.opacity||"1")>0&&Iw(l.getBoundingClientRect(),n,e,t>14?6:0),d=[o.icon,...c?.root.visible?[c.base]:[],...o.wreck.visible?[o.wreck]:[]];let h=1/0,f;for(const m of d.filter(Ol)){const _=Lw(m.getWorldPosition(new S).project(bt),i,n,e,u?Math.max(i.width,i.height):t);_!==null&&_<h&&(h=_,f=m)}f&&(h<=t||u)&&r.push({unit:a,distance:u?Math.min(h,t):h,object:f})}return r.sort((s,o)=>s.distance-o.distance||s.unit.id.localeCompare(o.unit.id))}function FE(n,e,t=14){const i=[],r=Or(De);for(const s of Xh(n,e,t)){const o=ks.get(s.unit.id);if(fl!==void 0&&!o)continue;const a=new Set(o??[s.unit.id]);r.units.filter(c=>a.has(c.unit.id)).forEach(c=>i.push({unit:c.unit,distance:s.distance}))}return i.sort((s,o)=>s.distance-o.distance||s.unit.id.localeCompare(o.unit.id)).map(s=>s.unit)}function zg(n,e,t=14){const i=FE(n,e,t);i.length===1?wg(i[0]):(Ya=i.map(r=>r.id),Mg())}vt.domElement.addEventListener("pointerdown",n=>{!hn||n.button!==0||n.altKey||(n.stopImmediatePropagation(),n.preventDefault(),zg(n.clientX,n.clientY,Rh(n.pointerType,tc())))},!0);jo.addEventListener("pointerdown",n=>{if(n.button!==0||!Fr||n.altKey||qt())return;const e=Rh(n.pointerType,tc());if(hn){n.stopPropagation(),n.preventDefault(),zg(n.clientX,n.clientY,e);return}const t=(n.target instanceof Element?n.target.closest("[data-unit-id]"):null)?.dataset.unitId,i=Xh(n.clientX,n.clientY,e),r=i.find(s=>s.unit.id===t)??i[0];r&&(n.stopPropagation(),n.preventDefault(),Xl(r.unit))});function Ol(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function eu(n){const e=Jo();cr.x=(n.clientX-e.left)/e.width*2-1,cr.y=-((n.clientY-e.top)/e.height)*2+1,ar.setFromCamera(cr,bt);const t=ar.intersectObjects([...Ri.values()].flatMap(r=>r.children),!0).filter(r=>Ol(r.object));if(t.length||!tc()&&n.pointerType!=="touch"&&n.pointerType!=="pen")return t;const i=Xh(n.clientX,n.clientY,Rh(n.pointerType,tc()))[0];return i?[{distance:bt.position.distanceTo(i.object.getWorldPosition(new S)),point:i.object.getWorldPosition(new S),object:i.object}]:[]}function mc(){xo=null,Jd=-1/0,pl=""}function OE(n=performance.now()){const e=bt.position.distanceTo(It.target),t=lw(e,fl),i=t!==fl;fl=t;const r=document.querySelector("#camera-readout");r&&(r.textContent=`FREE 3D / ${t}档`);const{width:s,height:o}=Jo(),a=[t,s,o,...bt.position.toArray(),...bt.quaternion.toArray(),Fe,hn].join("|"),c=xo===null;if(!c&&!i&&a===pl)return;if(bt.updateMatrixWorld(),on.updateMatrixWorld(!0),xo??=Or(De),c||i||a!==pl&&n-Jd>=100){const d=xo.units.map(h=>{const f=Ri.get(h.unit.id),m=f.userData.parts,g=(t===3?f.position.clone():m.icon.getWorldPosition(new S)).project(bt),p=Fe&&ft.has(h.unit.id),w=Pt?void 0:zi().groups.find(y=>y.id===h.unit.groupId)?.name;return{id:h.unit.id,label:w?`${h.unit.label} · ${w}`:h.unit.label,faction:h.unit.faction,icon:h.unit.icon,tgt:h.unit.tgt,escort:h.unit.escort,status:h.status,position:{x:h.position.x/tt,y:h.position.y/tt,z:h.position.z/tt},screenX:(g.x+1)*s/2,screenY:(1-g.y)*o/2,onScreen:!p&&!h.unit.hidden&&!h.unit.intangible&&g.z>-1&&g.z<1&&Math.abs(g.x)<=1&&Math.abs(g.y)<=1}});Qu=hw(d,t),ks.clear();for(const h of Qu)ks.set(h.representativeId,h.memberIds);pl=a,Jd=n}const l=new Map(xo.units.map(d=>[d.unit.id,d])),u=new Map(Qu.map(d=>[d.representativeId,d]));for(const d of xo.units){const h=Ri.get(d.unit.id),f=h.userData.parts,m=Vs.get(d.unit.id),_=u.get(d.unit.id),p=(_?.airRepresentativeId?l.get(_.airRepresentativeId):void 0)??(Un(d.unit)?d:void 0),w=ac(d.unit,d.position,Et),y=Math.max(0,w.y-h.position.y),v=Wl(d.unit,w,Et,si).y-h.position.y,L=f.base===null?v+pg-si:Math.max(y,.6),D=new S(h.position.x,h.position.y+v,h.position.z),N=2*Math.max(bt.near,-D.applyMatrix4(bt.matrixWorldInverse).z)*Math.tan(Zt.degToRad(bt.fov)/2)/Math.max(1,o),b=Gu(t,N),M=Math.max(bt.near,-new S(h.position.x,h.position.y,h.position.z).applyMatrix4(bt.matrixWorldInverse).z),I=Math.max(bt.near,-new S(h.position.x,h.position.y+1.5,h.position.z).applyMatrix4(bt.matrixWorldInverse).z),k=2*Math.tan(Zt.degToRad(bt.fov)/2)/Math.max(1,o),O=Gu(t,M*k),G=Gu(t,I*k);f.tgtRing.visible=!!_?.hasTgt&&d.status==="active",f.escortMarker.visible=!!_?.hasEscort&&d.status==="active"&&d.unit.faction!=="enemy",gw(f,m,{tier:d.unit.intangible?1:t,representative:!!_,status:d.status,faction:d.unit.faction,label:_?.label??d.unit.label,scale:b,baseScale:O,farBaseScale:G,hasAir:!!p,airAltitude:p?Math.max(0,p.position.y-h.position.y):0,hasTgt:!!_?.hasTgt,hasEscort:!!_?.hasEscort,iconHeight:v,poleHeight:L}),m.root.traverse($=>{const j=$.material;!j||Array.isArray(j)||(j.userData.hiddenBaseOpacity??=j.opacity,j.opacity=j.userData.hiddenBaseOpacity*(d.unit.hidden?.35:1))})}for(const d of on.children)typeof d.userData.trail=="string"&&(d.visible=t===1||ks.has(d.userData.trail))}function zE(){const{width:n,height:e}=Jo();for(const{dom:t,position:i}of Qd){const r=i.clone().project(bt);t.hidden=r.z<-1||r.z>1,t.style.left=`${(r.x+1)*n/2}px`,t.style.top=`${(1-r.y)*e/2}px`}on.updateMatrixWorld(!0);for(const t of Ri.values()){const i=t.userData.parts,r=i.label.userData.dom,s=i.label.userData.displayVisible!==!1,o=Vs.get(t.userData.unit.id),a=o?.root.visible?o.pole:i.pole,c=Dw({camera:bt,width:n,height:e,group:t,icon:i.wreck.visible?i.wreck:i.icon,pole:a,dom:r,isAir:i.base!==null,naturalTop:a.userData.naturalTop??i.label.position.y,isMerged:(ks.get(t.userData.unit.id)?.length??1)>1,decorated:i.tgtRing.visible||i.escortMarker.visible,visible:s})!==!1&&s,l=zi().groups.find(d=>d.id===t.userData.unit?.groupId);r.title=l?`编组: ${l.name}`:"",r.style.borderLeft=l?`3px solid ${l.color}`:"",r.style.opacity=c?String(i.labelFade):"0";const u=c&&!r.hidden&&(hn||typeof sn<"u"&&sn?.active()||tc());r.style.pointerEvents=u?"auto":"none",r.style.cursor=hn?"crosshair":u?"pointer":"",r.classList.toggle("range-attacker-label",t.userData.unit.id===Si),r.classList.toggle("range-target-label",t.userData.unit.id===Ui)}}let Fr=!1;function Bg(){if(requestAnimationFrame(Bg),!Fr)return;At?(hg(),tE()):Sr&&cc(),Gt&&!At&&(!cn||qa)&&dg(),It.update(),Wm(Yr,bt.position.distanceTo(It.target)),OE(),zE();const n=Jo();lE.update(bt,n.width,n.height,gt.extent,gt.extentZ),Mt?.updateLabels(bt,n.width,n.height),sn?.update(),vt.render(ls,bt)}function zl(){const n=document.querySelector("#scene")?.getBoundingClientRect(),e=Math.floor(n?.width??0),t=Math.floor(n?.height??0);return e<1||t<1?!1:(bt.aspect=e/t,hc(),vt.setSize(e,t,!1),!0)}addEventListener("resize",()=>{zl()});const Xp=document.querySelector("#scene");Xp&&typeof ResizeObserver=="function"&&new ResizeObserver(()=>{zl()}).observe(Xp);function BE(n){jg(n,{size:gt.size,extent:gt.extent})}function HE(n){BE(n),Pt&&qh(!1);const e=ve.read();try{Xo(),Gn(),ft.clear(),fe=null,ve.reset(n.checkpoint),lr(n.checkpoint);const t=(i,r)=>Math.max(0,...i.filter(s=>s.startsWith(r)).map(s=>Number(s.slice(r.length))).filter(Number.isSafeInteger))+1;ss=t(st.map(i=>i.id),"unit-"),$a=t(xn.map(i=>i.id),"route-"),Il=t(xn.flatMap(i=>i.waypoints.map(r=>r.id)),"wp-"),Nl=t(st.flatMap(i=>(i.trackPoints??[]).map(r=>r.id)),"control-"),Pl=t(st.flatMap(i=>i.routeBinding?.formationId?[i.routeBinding.formationId]:[]),"formation-"),ki.clear(),Si=Ui="",ot(),rt()}catch(t){throw lr(e),ve.reset(e),ot(),rt(),t}}let Bl,nc,qp="",un=!1,gc="",Ns=null;function rn(n){gc=n;const e=document.querySelector("#workflow-state");e&&(e.textContent=n)}function ic(){Ns=null,document.querySelector("#workflow-confirm")?.setAttribute("hidden","")}function Bi(){const n=Tt(),e=n?.workflow?.mode==="formal",t=document.querySelector("#workflow-panel");if(!t)return;if(typeof Pt<"u"&&Pt){t.hidden=!0;for(const m of Array.from(t.querySelectorAll("button")))m.disabled=!0;return}t.hidden=!1;const i=e&&n.turns.length===n.workflow.committedTurns+1,r=qt()||un,s=n?.status==="finished";t.dataset.mode=s?"finished":e?Fi()?"draft":"history":n?.mapEditRef?"map-editor":"authoring";const o=document.querySelector("#task-editor-save");o&&(o.hidden=!!e||!!n?.mapEditRef||n?.turns.length!==1,o.disabled=r||s);const a=document.querySelector("#map-editor-save");a&&(a.hidden=!n?.mapEditRef,a.disabled=r||s);const c=document.querySelector("#workflow-reopen");c&&(c.hidden=!e,c.disabled=!e||r||!!Ns||!!i||!n.workflow.committedTurns||!!n.workflow?.branchFrom&&n.workflow.committedTurns-1<n.workflow.branchFrom.turn);const l=document.querySelector("#workflow-save-draft");l&&(l.hidden=!e,l.disabled=r||s||!Fi()||!!Ns||!Bl);const u=document.querySelector("#workflow-snapshot");u&&(u.hidden=!e,u.disabled=r||!!Ns||!n?.workflow?.committedTurns||typeof nc>"u"||!nc);const d=document.querySelector("#editor-save-as-controls");d&&(d.hidden=!!e||s);for(const m of["map","task"]){const _=document.querySelector(`#${m}-editor-save-as`);_&&(_.hidden=!!e||(m==="map"?!n?.mapEditRef:!!n?.mapEditRef),_.disabled=r||s)}const h=document.querySelector("#editor-save-as-name");h&&(h.disabled=r||s,n&&qp!==n.id&&(qp=n.id,h.value=`${n.name.replace(/ 制作副本$/,"").slice(0,123)} COPY`));const f=document.querySelector("#workflow-state");f&&(f.textContent=gc||(s?"已结束":e?Fi()?`第 ${De+1} 回合 · 草稿`:`第 ${De+1} 回合 · 只读 · 已提交 ${n.workflow.committedTurns} 回合`:n?.mapEditRef?`地图制作 · r${n.mapEditRef.revision}`:"场景制作"));for(const m of["begin","advance","commit","discard"]){const _=document.querySelector(`#workflow-${m}`);_&&(_.hidden=!e,m==="discard"&&(_.textContent=n?.workflow?.committedTurns===0?"重置第一回合草稿…":"丢弃草稿…"),_.disabled=!e||s||r||!!Ns||(m==="begin"?!!i:!Fi()))}}function nh(n,e){if(typeof Pt<"u"&&Pt)return;if(!ve||un||qt()){rn("请先结束当前放置、拖动或笔刷操作");return}if(e&&(e.revision!==ve.revision||e.sessionId!==Tt()?.id||e.turn!==De)){ic(),rn("会话或回合已变化，请重新选择操作"),Bi();return}if(!dn())return;const t=ve.read(),i=t.editor.sessionId??"session-working",r=t.project.sessions.find(s=>s.id===i);if(!r?.workflow||(n==="reopen"?r.turns.length!==r.workflow.committedTurns||!r.workflow.committedTurns:r.status==="finished"||n!=="begin"&&!Fi()||n==="begin"&&r.turns.length!==r.workflow.committedTurns)){rn("当前状态不适用此操作，请刷新回合状态"),Bi();return}un=!0,gc="",ic(),Bi();try{if(n==="reopen"){ve.reopenLastCommittedTurn(i,ve.revision),ur(),Vn(!0),rn("最近回合已恢复为草稿");return}const o={begin:u0,advance:l0,commit:c0,discard:a0}[n](t.project,i),a=o.sessions.find(u=>u.id===i),c={project:o,editor:{...t.editor,currentTurn:a.turns.length-1}},l={begin:"开始回合草稿",advance:"按航路推进草稿",commit:"提交回合",discard:"丢弃回合草稿"};ve.commit(c,l[n],t),ur(),(n==="begin"||n==="advance"||n==="discard"&&a.workflow?.committedTurns===0)&&Vn(!0)}catch(s){rn(s instanceof Error?s.message:String(s))}finally{un=!1,rt()}}function VE(n){if(Pt)return;if(n!=="commit"&&n!=="discard"&&n!=="reopen"){nh(n);return}if(!ve||qt()||un||(n==="reopen"?!Mn()||Tt().turns.length!==Tt().workflow.committedTurns||!Tt().workflow.committedTurns:!Fi())||!dn())return;const e=n==="reopen"?"取消最近回合提交？":n==="commit"?"提交当前回合？":Tt()?.workflow?.committedTurns===0?"重置第一回合草稿？":"丢弃当前草稿？",t={action:n,revision:ve.revision,sessionId:Tt().id,turn:De},i=document.querySelector("#workflow-confirm");if(!i){window.confirm(e)&&nh(n,t);return}Ns=t,i.hidden=!1;const r=document.querySelector("#workflow-confirm-text");r&&(r.textContent=e),Bi()}for(const n of["begin","advance","commit","discard","reopen"])document.querySelector(`#workflow-${n}`)?.addEventListener("click",()=>VE(n));document.querySelector("#workflow-confirm-yes")?.addEventListener("click",()=>{const n=Ns;n&&nh(n.action,n)});document.querySelector("#workflow-confirm-cancel")?.addEventListener("click",()=>{ic(),Bi()});document.querySelector("#canvas-resize")?.addEventListener("click",()=>{if(!ve||!ct()||qt())return;const n=Number(dt("#canvas-width").value),e=Number(dt("#canvas-height").value),t=Number(dt("#canvas-samples").value);if(dn())try{const i=ve.read(),r=i.project.sessions.find(a=>a.id===i.editor.sessionId),s=r0(i.project,r.mapRef,n,e,t),o=s.maps.at(-1);s.sessions.find(a=>a.id===r.id).mapRef={id:o.id,revision:o.revision},ve.commit({...i,project:s},"调整画布尺寸",i),ur(),Vn(!0),ji(!0),rn(`画布 ${n} × ${e} km`)}catch(i){rn(i instanceof Error?i.message:String(i))}});document.querySelector("#task-editor-save")?.addEventListener("click",()=>{if(!(Pt||!ve||qt()||Mn()||Tt()?.mapEditRef)&&dn())try{const n=ve.read(),e=Tt(),t=n.project.tasks.find(s=>s.id===e.taskRef.id&&s.revision===e.taskRef.revision),i=s0(n.project,e.id,t?.name??e.name.replace(/ 制作副本$/,""));ve.commit({...n,project:i},"保存任务新修订",n),ur(),Vn(!0);const r=i.sessions.find(s=>s.id===e.id).taskRef;rn(`任务已保存 · r${r.revision}`),Dr(`任务已保存 · r${r.revision}`)}catch(n){const e=n instanceof Error?n.message:String(n);rn(e),Dr(e,"error")}});document.querySelector("#map-editor-save")?.addEventListener("click",()=>{if(Pt||!ve||qt()||un||!Tt()?.mapEditRef||!dn())return;const n=ve.read(),e=Tt().id;try{const t=o0(n.project,e),i=t.sessions.find(s=>s.id===e).mapEditRef,r=ve.commit({...n,project:t},"保存地图新修订",n);ur(),ji(!0),rn(r?`地图已保存 · r${i.revision}`:`无修改 · r${i.revision}`),Dr(r?`地图已保存 · r${i.revision}`:`无修改 · r${i.revision}`),Bi()}catch(t){const i=t instanceof Error?t.message:String(t);rn(i),Dr(i,"error")}});document.querySelector("#workflow-save-draft")?.addEventListener("click",async()=>{if(!ve||qt()||un||!Fi()||!Bl||!dn())return;const n=document.querySelector("#workflow-save-draft");n.disabled=!0;try{const e=await Bl();rn(e?"草稿已保存":"草稿保存失败"),Dr(e?"草稿已保存":"草稿保存失败",e?"ok":"error")}catch(e){const t=e instanceof Error?e.message:String(e);rn(t),Dr(t,"error")}finally{Bi()}});document.querySelector("#workflow-snapshot")?.addEventListener("click",async()=>{if(!(Pt||!ve||qt()||un||!Tt()?.workflow?.committedTurns||!nc)&&dn()){un=!0,Bi();try{await nc(),rn("回合快照已发送到管理器快照仓库")}catch(n){rn(n instanceof Error?n.message:String(n))}finally{un=!1,Bi(),rt()}}});for(const n of["map","task"])document.querySelector(`#${n}-editor-save-as`)?.addEventListener("click",()=>{if(Pt||!ve||qt()||un||Mn()||!!Tt()?.mapEditRef!=(n==="map")||!dn())return;const e=document.querySelector("#editor-save-as-name").value.trim();if(!e){rn("请填写副本名称"),Dr("请填写副本名称","error");return}try{const t=ve.read(),i=Tt(),r=`map-${crypto.randomUUID()}`,s=n==="map"?qw(t.project,i.id,r,e):$w(t.project,i.id,{mapId:r,taskId:`task-${crypto.randomUUID()}`},e);ve.commit({...t,project:s.project},n==="map"?"另存为新地图":"另存为新任务",t),ur(),Vn(!0),n==="map"&&ji(!0),rn(`${n==="map"?"地图":"任务"}已另存为「${e}」r1`),Dr(`${n==="map"?"地图":"任务"}已另存为「${e}」r1`)}catch(t){const i=t instanceof Error?t.message:String(t);rn(i),Dr(i,"error")}});function qh(n){if(n!==Pt){if(qt()||un||!dn())throw new Error("请先完成当前编辑操作");if(n){const e=ve.read(),t=Yg(e),i=Zp(e),r=new rh(i);gl={edit:Fe,terrain:Gt},Xo(),ft.clear(),fe=null,ml=ve,Za=e,Yl=t,Fs.clear(),Fs.set(i.editor.currentTurn,r),Pt=!0,ve=r}else Xo(),ft.clear(),fe=null,ve=ml,Pt=!1,ml=null,Za=null,typeof Ka<"u"&&(Ka=null),Fs.clear(),Fe=gl.edit,Gt=gl.terrain;Qr=null,Ul="",La="",lr(ve.read()),document.querySelector("#app").dataset.playerView=String(Pt),document.querySelector("#player-viewer-open").hidden=Pt,document.querySelector("#player-viewer-exit").hidden=!Pt,ot(),rt()}}function GE(n){const e=$g(n);if(qt()||un||!dn())throw new Error("请先完成当前编辑操作");Pt&&qh(!1);const t=ve.read();gl={edit:Fe,terrain:Gt},Xo(),ft.clear(),fe=null,ml=ve,Za=t,Ka=e,Yl=e.turns.length-1;const i=new rh(e.turns[0]);Fs.clear(),Fs.set(0,i),ve=i,Pt=!0,Qr=null,Ul="",La="",lr(i.read()),document.querySelector("#app").dataset.playerView="true",document.querySelector("#player-viewer-open").hidden=!0,document.querySelector("#player-viewer-exit").hidden=!1,ot(),rt()}function WE(n){if(!Za||qt()||un)return;const e=Math.max(0,Math.min(n,Yl));if(e===De||!dn())return;const t=Fe,i=typeof Ka<"u"?Ka:null,r=Fs.get(e)??new rh(i?i.turns[e]:Zp(Za,e));Fs.set(e,r),Xo(),ft.clear(),fe=null,ve=r,Qr=null,lr(r.read()),Fe=t,ot(),rt()}function XE(){if(!Pt||qt()||un||!dn())return;const n=ve.read(),e=n.project.sessions.find(s=>s.id===n.editor.sessionId);e.routes=[{id:"player-viewer-route",name:"Viewer",waypoints:[]}],n.editor.activeRouteId="player-viewer-route";const t=d0(h0(n,n.editor.sessionId)),i=URL.createObjectURL(new Blob([t],{type:"application/json"})),r=document.createElement("a");r.href=i,r.download=`player-view-turn-${De+1}.json`,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function Xo(){Mt?.cancel(),Mt?.clearSelection(),yi=null,typeof sn<"u"&&sn?.cancel(),Fe=Gt=$t=Fn=Wt=fn=!1,it=null,Ze=null,$i=null,Zi=!1,Nr=null,_n=null,Qa=null,Go.clear(),ke.detach(),Yi.visible=!1,At&&vt.domElement.hasPointerCapture(At.pointerId)&&vt.domElement.releasePointerCapture(At.pointerId),At=null,Ci(!0),It.enabled=!0,vt.domElement.style.cursor="",ic(),gc=""}function ur(){Qr=null,Xo();const n=[...ft];lr(ve.read()),ft.clear(),n.filter(t=>st.some(i=>i.id===t)).forEach(t=>ft.add(t)),fe=Hi().at(-1)??null;const e=(t,i,r)=>Math.max(r,...t.filter(s=>s.startsWith(i)).map(s=>Number(s.slice(i.length))+1).filter(Number.isSafeInteger));ss=e(st.map(t=>t.id),"unit-",ss),$a=e(xn.map(t=>t.id),"route-",$a),Il=e(xn.flatMap(t=>t.waypoints.map(i=>i.id)),"wp-",Il),Nl=e(st.flatMap(t=>(t.trackPoints??[]).map(i=>i.id)),"control-",Nl),Pl=e(st.flatMap(t=>t.routeBinding?.formationId?[t.routeBinding.formationId]:[]),"formation-",Pl),ot(),rt()}let $p=!1;function $E(n,e){if($p)throw new Error("Workspace already mounted");$p=!0,ve=n,Bl=e?.saveDraft,nc=e?.generateSnapshot,Hn=Nw({fitMap:Hh,topView:yE,toggleEdit:()=>Vn(!Fe),viewerExport:XE,viewerUndo:Zl,viewerRedo:Kl,chooseTool:t=>{ke.dragging||At||bi||(Mt?.cancel(),t!=="links"&&t!=="markers"&&sn?.cancel(),["markers","drawing"].includes(t)||Mt?.clearSelection(),Ze&&t!=="units"&&os(),t==="terrain"&&ct()?(Vn(!0),ji(!0)):Gt&&(Tt()?.mapEditRef?(Gt=!1,Yi.visible=!1):ji(!1)),["routes"].includes(t)||($t=Wt=Fn=!1,it=null),(["markers","drawing","links"].includes(t)?Mi():ct())&&["groups","markers","drawing","routes","units","equipment","links"].includes(t)&&!Fe&&Vn(!0),t!=="range"&&hn&&Gn(),ot(),rt())}}),Zr=document.createElement("aside"),Zr.id="player-roster-panel",Zr.hidden=!0,Zr.setAttribute("aria-label","玩家资料卡"),document.querySelector("#app").append(Zr),document.querySelector("#app").classList.add("player-roster-mounted"),eh=Fw(Zr,{readRevision:()=>ve.revision,read:()=>ve.read().project,busy:()=>un||qt(),report:rn,beginCreate:wE,armPlacement:EE,cancelPlacement:os,selectUnit:(t,i)=>{if(un||qt())return;const r=st.find(s=>s.id===t);r&&(jn([r]),i&&Vp([t]))},recordAction:AE}),vg=Uw(Hn.panels.groups,{read:zi,units:()=>st,selectedIds:()=>[...ft],editable:()=>ct()&&Fe&&!Tt()?.mapEditRef,change:nd,select:t=>jn(st.filter(i=>t.includes(i.id))),copy:uE,focus:Vp}),Mt=Ww({markersPanel:Hn.panels.markers,drawingsPanel:Hn.panels.drawing,world:on,labelRoot:$l,read:zi,change:(t,i)=>nd(t,r=>i(r)),editable:()=>Mi()&&Fe,focus:Fh,sampleHeightKm:(t,i)=>Et(t*tt,i*tt)/tt,onMarkerPick:t=>sn?.pick("marker",t)??!1,onTransformMode:t=>{Do=t,Lo()},onOpenPanel:t=>{document.querySelector("#edit-panel").dataset.activeTab!==t&&Hn?.select(t)},onSelectionChange:t=>{t&&(Do="translate",Gn(),it=null,$t=Wt=Fn=fn=!1,ft.clear(),fe=null,Ql(),ot(),rt()),Lo()},onPickingChange:t=>{document.querySelector("#app").dataset.mapPicking=String(t),t&&(Gn(),Ci(!0),fn=!1,$t=Wt=Fn=Gt=!1,it=null,Yi.visible=!1,ke.detach()),It.enabled=Fr,vt.domElement.style.cursor=t?"crosshair":"",Bi()}}),sn=zw({panel:Hn.panels.links,world:on,read:zi,readUnits:()=>st.map(t=>{const i=Wl(t,Wn(t),Et,si);return{id:t.id,label:t.label,position:{x:i.x/tt,y:i.y/tt,z:i.z/tt}}}),selectedUnitId:()=>fe?.id,editable:()=>Mi()&&Fe&&!Tt()?.mapEditRef,busy:()=>un||qt(),change:(t,i)=>nd(t,r=>i(r)),onModeChange:t=>{t&&(Mt?.cancel(),Mt?.clearSelection(),Gn(),Ci(!0),fn=$t=Wt=Fn=!1,it=null,ke.detach()),vt.domElement.style.cursor=t?"crosshair":"",Lo()}}),document.querySelector("#route-select-bound").addEventListener("click",()=>jn(st.filter(t=>t.routeBinding?.routeId===Nn))),document.querySelector("#route-bind-group").addEventListener("click",()=>{const t=document.querySelector("#route-group-select").value;Ng(st.filter(i=>i.groupId===t&&lc(i)))});for(const t of["#route-visible","#route-labels"])document.querySelector(t).addEventListener("change",()=>ot());return vt.domElement.addEventListener("pointerdown",t=>{if(!Mt?.isPicking()||t.button!==0||t.altKey)return;t.stopImmediatePropagation(),t.preventDefault();const i=Wo(t);i&&Mt.pick({x:i.x/tt,y:i.y/tt,z:i.z/tt})},!0),vt.domElement.addEventListener("pointermove",t=>{if(!Mt?.isPicking())return;const i=Wo(t);Mt.preview(i?{x:i.x/tt,y:i.y/tt,z:i.z/tt}:null)}),ur(),hc(),Vn(!1),ot(),Bg(),{flush:()=>{if(!dn())throw new Error("当前编辑尚未保存")},open:HE,sync:ur,busy:()=>un||qt(),selectedUnitId:()=>fe?.id,editTerrain:()=>{ct()&&(Vn(!0),ji(!0))},editScenario:()=>{ct()&&(Vn(!0),ji(!1))},playerView:qh,snapshot:GE,activate:t=>{Fr=t,It.enabled=t,Hn?.sync({editing:Fe,editable:Mi(),mapOnly:!!Tt()?.mapEditRef,active:t,playerView:Pt,viewerCanUndo:!!ve?.canUndo,viewerCanRedo:!!ve?.canRedo}),t?(zl()||requestAnimationFrame(()=>{zl()}),ot(),rt()):(Mt?.cancel(),sn?.cancel(),Gn(),ke.detach(),Rg())}}}export{$E as mountWorkspace};
