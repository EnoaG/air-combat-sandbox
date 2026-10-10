import{W as it,G as Cm,R as qu,p as Pm,v as Lm,w as Dm,d as au,c as Bf,a as Im,b as Um,H as Hf,e as Nm,P as cu,f as km,g as Vf,m as lu,h as du,U as Gf,r as uu,i as Fm,j as Om,k as zm,l as Bm,n as Hm,o as Wf,t as Xf,q as Vm,s as Gm,u as Wm,x as Xm,y as qm,z as Ym,A as $m,B as qf,C as Yf,D as jm,E as Zm,F as Km,I as Jm,J as Qm,K as eg,L as tg}from"./index-Bnw4gLQh.js";const hu="179",Ks={ROTATE:0,DOLLY:1,PAN:2},$s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ng=0,Yu=1,ig=2,$f=1,rg=2,ur=3,gr=0,li=1,ln=2,Fr=0,Js=1,ad=2,$u=3,ju=4,sg=5,as=100,og=101,ag=102,cg=103,lg=104,dg=200,ug=201,hg=202,fg=203,cd=204,ld=205,pg=206,mg=207,gg=208,_g=209,vg=210,xg=211,yg=212,Sg=213,Mg=214,dd=0,ud=1,hd=2,oo=3,fd=4,pd=5,md=6,gd=7,jf=0,bg=1,Eg=2,Or=0,wg=1,Tg=2,Ag=3,Rg=4,Cg=5,Pg=6,Lg=7,Zf=300,ao=301,co=302,_d=303,vd=304,$c=306,xd=1e3,us=1001,yd=1002,Wi=1003,Dg=1004,Fa=1005,Ji=1006,al=1007,hs=1008,ir=1009,Kf=1010,Jf=1011,na=1012,fu=1013,Ss=1014,fr=1015,wa=1016,pu=1017,mu=1018,ia=1020,Qf=35902,ep=1021,tp=1022,Vi=1023,ra=1026,sa=1027,np=1028,gu=1029,ip=1030,_u=1031,vu=1033,xc=33776,yc=33777,Sc=33778,Mc=33779,Sd=35840,Md=35841,bd=35842,Ed=35843,wd=36196,Td=37492,Ad=37496,Rd=37808,Cd=37809,Pd=37810,Ld=37811,Dd=37812,Id=37813,Ud=37814,Nd=37815,kd=37816,Fd=37817,Od=37818,zd=37819,Bd=37820,Hd=37821,bc=36492,Vd=36494,Gd=36495,rp=36283,Wd=36284,Xd=36285,qd=36286,Ig=3200,Ug=3201,Ng=0,kg=1,Ur="",ni="srgb",lo="srgb-linear",Pc="linear",qt="srgb",Ls=7680,Zu=519,Fg=512,Og=513,zg=514,sp=515,Bg=516,Hg=517,Vg=518,Gg=519,Ku=35044,Lc=35048,Ju="300 es",Qi=2e3,Dc=2001;class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qu=1234567;const qo=Math.PI/180,oa=180/Math.PI;function Rs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bn[n&255]+Bn[n>>8&255]+Bn[n>>16&255]+Bn[n>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[t&63|128]+Bn[t>>8&255]+"-"+Bn[t>>16&255]+Bn[t>>24&255]+Bn[i&255]+Bn[i>>8&255]+Bn[i>>16&255]+Bn[i>>24&255]).toLowerCase()}function Et(n,e,t){return Math.max(e,Math.min(t,n))}function xu(n,e){return(n%e+e)%e}function Wg(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Xg(n,e,t){return n!==e?(t-n)/(e-n):0}function Yo(n,e,t){return(1-t)*n+t*e}function qg(n,e,t,i){return Yo(n,e,1-Math.exp(-t*i))}function Yg(n,e=1){return e-Math.abs(xu(n,e*2)-e)}function $g(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function jg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Zg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Kg(n,e){return n+Math.random()*(e-n)}function Jg(n){return n*(.5-Math.random())}function Qg(n){n!==void 0&&(Qu=n);let e=Qu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function e0(n){return n*qo}function t0(n){return n*oa}function n0(n){return(n&n-1)===0&&n!==0}function i0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function r0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function s0(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),d=o((e+i)/2),u=s((e-i)/2),h=o((e-i)/2),f=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*d,c*u,c*h,a*l);break;case"YZY":n.set(c*h,a*d,c*u,a*l);break;case"ZXZ":n.set(c*u,c*h,a*d,a*l);break;case"XZX":n.set(a*d,c*m,c*f,a*l);break;case"YXY":n.set(c*f,a*d,c*m,a*l);break;case"ZYZ":n.set(c*m,c*f,a*d,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Jn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const $t={DEG2RAD:qo,RAD2DEG:oa,generateUUID:Rs,clamp:Et,euclideanModulo:xu,mapLinear:Wg,inverseLerp:Xg,lerp:Yo,damp:qg,pingpong:Yg,smoothstep:$g,smootherstep:jg,randInt:Zg,randFloat:Kg,randFloatSpread:Jg,seededRandom:Qg,degToRad:e0,radToDeg:t0,isPowerOfTwo:n0,ceilPowerOfTwo:i0,floorPowerOfTwo:r0,setQuaternionFromProperEuler:s0,normalize:Jn,denormalize:qs};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],d=i[r+2],u=i[r+3];const h=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(u!==_||c!==h||l!==f||d!==m){let g=1-a;const p=c*h+l*f+d*m+u*_,E=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),C=Math.atan2(A,p*E);g=Math.sin(g*C)/A,a=Math.sin(a*C)/A}const v=a*E;if(c=c*g+h*v,l=l*g+f*v,d=d*g+m*v,u=u*g+_*v,g===1-a){const A=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=A,l*=A,d*=A,u*=A}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],d=i[r+3],u=s[o],h=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+d*u+c*f-l*h,e[t+1]=c*m+d*h+l*u-a*f,e[t+2]=l*m+d*f+a*h-c*u,e[t+3]=d*m-a*u-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),d=a(r/2),u=a(s/2),h=c(i/2),f=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=h*d*u+l*f*m,this._y=l*f*u-h*d*m,this._z=l*d*m+h*f*u,this._w=l*d*u-h*f*m;break;case"YXZ":this._x=h*d*u+l*f*m,this._y=l*f*u-h*d*m,this._z=l*d*m-h*f*u,this._w=l*d*u+h*f*m;break;case"ZXY":this._x=h*d*u-l*f*m,this._y=l*f*u+h*d*m,this._z=l*d*m+h*f*u,this._w=l*d*u-h*f*m;break;case"ZYX":this._x=h*d*u-l*f*m,this._y=l*f*u+h*d*m,this._z=l*d*m-h*f*u,this._w=l*d*u+h*f*m;break;case"YZX":this._x=h*d*u+l*f*m,this._y=l*f*u+h*d*m,this._z=l*d*m-h*f*u,this._w=l*d*u-h*f*m;break;case"XZY":this._x=h*d*u-l*f*m,this._y=l*f*u-h*d*m,this._z=l*d*m+h*f*u,this._w=l*d*u+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],d=t[6],u=t[10],h=i+a+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(d-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,d=t._w;return this._x=i*d+o*a+r*l-s*c,this._y=r*d+o*c+s*a-i*l,this._z=s*d+o*l+i*c-r*a,this._w=o*d-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,a),u=Math.sin((1-t)*d)/l,h=Math.sin(t*d)/l;return this._w=o*u+this._w*h,this._x=i*u+this._x*h,this._y=r*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,i=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),d=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+c*l+o*u-a*d,this.y=i+c*d+a*l-s*u,this.z=r+c*u+s*d-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cl.copy(this).projectOnVector(e),this.sub(cl)}reflect(e){return this.sub(cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cl=new b,eh=new fn;class Mt{constructor(e,t,i,r,s,o,a,c,l){Mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=c,d[6]=i,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],d=i[4],u=i[7],h=i[2],f=i[5],m=i[8],_=r[0],g=r[3],p=r[6],E=r[1],x=r[4],v=r[7],A=r[2],C=r[5],P=r[8];return s[0]=o*_+a*E+c*A,s[3]=o*g+a*x+c*C,s[6]=o*p+a*v+c*P,s[1]=l*_+d*E+u*A,s[4]=l*g+d*x+u*C,s[7]=l*p+d*v+u*P,s[2]=h*_+f*E+m*A,s[5]=h*g+f*x+m*C,s[8]=h*p+f*v+m*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8];return t*o*d-t*a*l-i*s*d+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],u=d*o-a*l,h=a*c-d*s,f=l*s-o*c,m=t*u+i*h+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(r*l-d*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(d*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ll.makeScale(e,t)),this}rotate(e){return this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new Mt;function op(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ic(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function o0(){const n=Ic("canvas");return n.style.display="block",n}const th={};function Qs(n){n in th||(th[n]=!0,console.warn(n))}function a0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const nh=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ih=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function c0(){const n={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===qt&&(r.r=pr(r.r),r.g=pr(r.g),r.b=pr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===qt&&(r.r=eo(r.r),r.g=eo(r.g),r.b=eo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ur?Pc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Qs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Qs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[lo]:{primaries:e,whitePoint:i,transfer:Pc,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:i,transfer:qt,toXYZ:nh,fromXYZ:ih,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),n}const zt=c0();function pr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function eo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ds;class l0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ds===void 0&&(Ds=Ic("canvas")),Ds.width=e.width,Ds.height=e.height;const r=Ds.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ds}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ic("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=pr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pr(t[i]/255)*255):t[i]=pr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let d0=0;class yu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(dl(r[o].image)):s.push(dl(r[o]))}else s=dl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function dl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?l0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let u0=0;const ul=new b;class di extends As{constructor(e=di.DEFAULT_IMAGE,t=di.DEFAULT_MAPPING,i=us,r=us,s=Ji,o=hs,a=Vi,c=ir,l=di.DEFAULT_ANISOTROPY,d=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Rs(),this.name="",this.source=new yu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ul).x}get height(){return this.source.getSize(ul).y}get depth(){return this.source.getSize(ul).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xd:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xd:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}di.DEFAULT_IMAGE=null;di.DEFAULT_MAPPING=Zf;di.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,i=0,r=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],d=c[4],u=c[8],h=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(d-h)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(f+1)/2,A=(p+1)/2,C=(d+h)/4,P=(u+_)/4,I=(m+g)/4;return x>v&&x>A?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=P/i):v>A?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=C/r,s=I/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=P/s,r=I/s),this.set(i,r,s,t),this}let E=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(h-d)*(h-d));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(u-_)/E,this.z=(h-d)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class h0 extends As{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new di(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ji,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new yu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends h0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ap extends di{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wi,this.minFilter=Wi,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class f0 extends di{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wi,this.minFilter=Wi,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _o{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ki):ki.fromBufferAttribute(s,o),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),za.subVectors(this.max,Ao),Is.subVectors(e.a,Ao),Us.subVectors(e.b,Ao),Ns.subVectors(e.c,Ao),br.subVectors(Us,Is),Er.subVectors(Ns,Us),Zr.subVectors(Is,Ns);let t=[0,-br.z,br.y,0,-Er.z,Er.y,0,-Zr.z,Zr.y,br.z,0,-br.x,Er.z,0,-Er.x,Zr.z,0,-Zr.x,-br.y,br.x,0,-Er.y,Er.x,0,-Zr.y,Zr.x,0];return!hl(t,Is,Us,Ns,za)||(t=[1,0,0,0,1,0,0,0,1],!hl(t,Is,Us,Ns,za))?!1:(Ba.crossVectors(br,Er),t=[Ba.x,Ba.y,Ba.z],hl(t,Is,Us,Ns,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const or=[new b,new b,new b,new b,new b,new b,new b,new b],ki=new b,Oa=new _o,Is=new b,Us=new b,Ns=new b,br=new b,Er=new b,Zr=new b,Ao=new b,za=new b,Ba=new b,Kr=new b;function hl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Kr.fromArray(n,s);const a=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),c=e.dot(Kr),l=t.dot(Kr),d=i.dot(Kr);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const p0=new _o,Ro=new b,fl=new b;class vo{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):p0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const t=Ro.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ro,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(fl)),this.expandByPoint(Ro.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ar=new b,pl=new b,Ha=new b,wr=new b,ml=new b,Va=new b,gl=new b;class Ta{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){pl.copy(e).add(t).multiplyScalar(.5),Ha.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(pl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ha),a=wr.dot(this.direction),c=-wr.dot(Ha),l=wr.lengthSq(),d=Math.abs(1-o*o);let u,h,f,m;if(d>0)if(u=o*c-a,h=o*a-c,m=s*d,u>=0)if(h>=-m)if(h<=m){const _=1/d;u*=_,h*=_,f=u*(u+o*h+2*a)+h*(o*u+h+2*c)+l}else h=s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+l;else h=-s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+l;else h<=-m?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+h*(h+2*c)+l):h<=m?(u=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+h*(h+2*c)+l);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(pl).addScaledVector(Ha,h),f}intersectSphere(e,t){ar.subVectors(e.center,this.origin);const i=ar.dot(this.direction),r=ar.dot(ar)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,i,r,s){ml.subVectors(t,e),Va.subVectors(i,e),gl.crossVectors(ml,Va);let o=this.direction.dot(gl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wr.subVectors(this.origin,e);const c=a*this.direction.dot(Va.crossVectors(wr,Va));if(c<0)return null;const l=a*this.direction.dot(ml.cross(wr));if(l<0||c+l>o)return null;const d=-a*wr.dot(gl);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,i,r,s,o,a,c,l,d,u,h,f,m,_,g){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,d,u,h,f,m,_,g)}set(e,t,i,r,s,o,a,c,l,d,u,h,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ks.setFromMatrixColumn(e,0).length(),s=1/ks.setFromMatrixColumn(e,1).length(),o=1/ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=o*d,f=o*u,m=a*d,_=a*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*d,f=c*u,m=l*d,_=l*u;t[0]=h+_*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=f*a-m,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*d,f=c*u,m=l*d,_=l*u;t[0]=h-_*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*d,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*d,f=o*u,m=a*d,_=a*u;t[0]=c*d,t[4]=m*l-f,t[8]=h*l+_,t[1]=c*u,t[5]=_*l+h,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*d,t[4]=_-h*u,t[8]=m*u+f,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-l*d,t[6]=f*u+m,t[10]=h-_*u}else if(e.order==="XZY"){const h=o*c,f=o*l,m=a*c,_=a*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=h*u+_,t[5]=o*d,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*d,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m0,e,g0)}lookAt(e,t,i){const r=this.elements;return _i.subVectors(e,t),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Tr.crossVectors(i,_i),Tr.lengthSq()===0&&(Math.abs(i.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Tr.crossVectors(i,_i)),Tr.normalize(),Ga.crossVectors(_i,Tr),r[0]=Tr.x,r[4]=Ga.x,r[8]=_i.x,r[1]=Tr.y,r[5]=Ga.y,r[9]=_i.y,r[2]=Tr.z,r[6]=Ga.z,r[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],d=i[1],u=i[5],h=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],E=i[3],x=i[7],v=i[11],A=i[15],C=r[0],P=r[4],I=r[8],M=r[12],y=r[1],U=r[5],F=r[9],W=r[13],V=r[2],ne=r[6],Z=r[10],de=r[14],X=r[3],oe=r[7],we=r[11],Be=r[15];return s[0]=o*C+a*y+c*V+l*X,s[4]=o*P+a*U+c*ne+l*oe,s[8]=o*I+a*F+c*Z+l*we,s[12]=o*M+a*W+c*de+l*Be,s[1]=d*C+u*y+h*V+f*X,s[5]=d*P+u*U+h*ne+f*oe,s[9]=d*I+u*F+h*Z+f*we,s[13]=d*M+u*W+h*de+f*Be,s[2]=m*C+_*y+g*V+p*X,s[6]=m*P+_*U+g*ne+p*oe,s[10]=m*I+_*F+g*Z+p*we,s[14]=m*M+_*W+g*de+p*Be,s[3]=E*C+x*y+v*V+A*X,s[7]=E*P+x*U+v*ne+A*oe,s[11]=E*I+x*F+v*Z+A*we,s[15]=E*M+x*W+v*de+A*Be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],d=e[2],u=e[6],h=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*c*u-r*l*u-s*a*h+i*l*h+r*a*f-i*c*f)+_*(+t*c*f-t*l*h+s*o*h-r*o*f+r*l*d-s*c*d)+g*(+t*l*u-t*a*f-s*o*u+i*o*f+s*a*d-i*l*d)+p*(-r*a*d-t*c*u+t*a*h+r*o*u-i*o*h+i*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],d=e[8],u=e[9],h=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],E=u*g*l-_*h*l+_*c*f-a*g*f-u*c*p+a*h*p,x=m*h*l-d*g*l-m*c*f+o*g*f+d*c*p-o*h*p,v=d*_*l-m*u*l+m*a*f-o*_*f-d*a*p+o*u*p,A=m*u*c-d*_*c-m*a*h+o*_*h+d*a*g-o*u*g,C=t*E+i*x+r*v+s*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=E*P,e[1]=(_*h*s-u*g*s-_*r*f+i*g*f+u*r*p-i*h*p)*P,e[2]=(a*g*s-_*c*s+_*r*l-i*g*l-a*r*p+i*c*p)*P,e[3]=(u*c*s-a*h*s-u*r*l+i*h*l+a*r*f-i*c*f)*P,e[4]=x*P,e[5]=(d*g*s-m*h*s+m*r*f-t*g*f-d*r*p+t*h*p)*P,e[6]=(m*c*s-o*g*s-m*r*l+t*g*l+o*r*p-t*c*p)*P,e[7]=(o*h*s-d*c*s+d*r*l-t*h*l-o*r*f+t*c*f)*P,e[8]=v*P,e[9]=(m*u*s-d*_*s-m*i*f+t*_*f+d*i*p-t*u*p)*P,e[10]=(o*_*s-m*a*s+m*i*l-t*_*l-o*i*p+t*a*p)*P,e[11]=(d*a*s-o*u*s-d*i*l+t*u*l+o*i*f-t*a*f)*P,e[12]=A*P,e[13]=(d*_*r-m*u*r+m*i*h-t*_*h-d*i*g+t*u*g)*P,e[14]=(m*a*r-o*_*r-m*i*c+t*_*c+o*i*g-t*a*g)*P,e[15]=(o*u*r-d*a*r+d*i*c-t*u*c-o*i*h+t*a*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,d=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,d*a+i,d*c-r*o,0,l*c-r*a,d*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,d=o+o,u=a+a,h=s*l,f=s*d,m=s*u,_=o*d,g=o*u,p=a*u,E=c*l,x=c*d,v=c*u,A=i.x,C=i.y,P=i.z;return r[0]=(1-(_+p))*A,r[1]=(f+v)*A,r[2]=(m-x)*A,r[3]=0,r[4]=(f-v)*C,r[5]=(1-(h+p))*C,r[6]=(g+E)*C,r[7]=0,r[8]=(m+x)*P,r[9]=(g-E)*P,r[10]=(1-(h+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ks.set(r[0],r[1],r[2]).length();const o=ks.set(r[4],r[5],r[6]).length(),a=ks.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fi.copy(this);const l=1/s,d=1/o,u=1/a;return Fi.elements[0]*=l,Fi.elements[1]*=l,Fi.elements[2]*=l,Fi.elements[4]*=d,Fi.elements[5]*=d,Fi.elements[6]*=d,Fi.elements[8]*=u,Fi.elements[9]*=u,Fi.elements[10]*=u,t.setFromRotationMatrix(Fi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Qi,c=!1){const l=this.elements,d=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let m,_;if(c)m=s/(o-s),_=o*s/(o-s);else if(a===Qi)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Dc)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Qi,c=!1){const l=this.elements,d=2/(t-e),u=2/(i-r),h=-(t+e)/(t-e),f=-(i+r)/(i-r);let m,_;if(c)m=1/(o-s),_=o/(o-s);else if(a===Qi)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===Dc)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ks=new b,Fi=new Gt,m0=new b(0,0,0),g0=new b(1,1,1),Tr=new b,Ga=new b,_i=new b,rh=new Gt,sh=new fn;class $n{constructor(e=0,t=0,i=0,r=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],d=r[9],u=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sh.setFromEuler(this),this.setFromQuaternion(sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class Su{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _0=0;const oh=new b,Fs=new fn,cr=new Gt,Wa=new b,Co=new b,v0=new b,x0=new fn,ah=new b(1,0,0),ch=new b(0,1,0),lh=new b(0,0,1),dh={type:"added"},y0={type:"removed"},Os={type:"childadded",child:null},_l={type:"childremoved",child:null};class gn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new b,t=new $n,i=new fn,r=new b(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Mt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(ah,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(lh,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ah,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wa.copy(e):Wa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(Co,Wa,this.up):cr.lookAt(Wa,Co,this.up),this.quaternion.setFromRotationMatrix(cr),r&&(cr.extractRotation(r.matrixWorld),Fs.setFromRotationMatrix(cr),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dh),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(y0),_l.child=e,this.dispatchEvent(_l),_l.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dh),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,v0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,x0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gn.DEFAULT_UP=new b(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oi=new b,lr=new b,vl=new b,dr=new b,zs=new b,Bs=new b,uh=new b,xl=new b,yl=new b,Sl=new b,Ml=new Wt,bl=new Wt,El=new Wt;class Hi{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Oi.subVectors(e,t),r.cross(Oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Oi.subVectors(r,t),lr.subVectors(i,t),vl.subVectors(e,t);const o=Oi.dot(Oi),a=Oi.dot(lr),c=Oi.dot(vl),l=lr.dot(lr),d=lr.dot(vl),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const h=1/u,f=(l*c-a*d)*h,m=(o*d-a*c)*h;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,dr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,dr.x),c.addScaledVector(o,dr.y),c.addScaledVector(a,dr.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ml.setScalar(0),bl.setScalar(0),El.setScalar(0),Ml.fromBufferAttribute(e,t),bl.fromBufferAttribute(e,i),El.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ml,s.x),o.addScaledVector(bl,s.y),o.addScaledVector(El,s.z),o}static isFrontFacing(e,t,i,r){return Oi.subVectors(i,t),lr.subVectors(e,t),Oi.cross(lr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),Oi.cross(lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Hi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;zs.subVectors(r,i),Bs.subVectors(s,i),xl.subVectors(e,i);const c=zs.dot(xl),l=Bs.dot(xl);if(c<=0&&l<=0)return t.copy(i);yl.subVectors(e,r);const d=zs.dot(yl),u=Bs.dot(yl);if(d>=0&&u<=d)return t.copy(r);const h=c*u-d*l;if(h<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(i).addScaledVector(zs,o);Sl.subVectors(e,s);const f=zs.dot(Sl),m=Bs.dot(Sl);if(m>=0&&f<=m)return t.copy(s);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(Bs,a);const g=d*m-f*u;if(g<=0&&u-d>=0&&f-m>=0)return uh.subVectors(s,r),a=(u-d)/(u-d+(f-m)),t.copy(r).addScaledVector(uh,a);const p=1/(g+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(zs,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function wl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class It{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=zt.workingColorSpace){return this.r=e,this.g=t,this.b=i,zt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=zt.workingColorSpace){if(e=xu(e,1),t=Et(t,0,1),i=Et(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=wl(o,s,e+1/3),this.g=wl(o,s,e),this.b=wl(o,s,e-1/3)}return zt.colorSpaceToWorking(this,r),this}setStyle(e,t=ni){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const i=cp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return zt.workingToColorSpace(Hn.copy(this),e),Math.round(Et(Hn.r*255,0,255))*65536+Math.round(Et(Hn.g*255,0,255))*256+Math.round(Et(Hn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.workingToColorSpace(Hn.copy(this),t);const i=Hn.r,r=Hn.g,s=Hn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=d<=.5?u/(o+a):u/(2-o-a),o){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=zt.workingColorSpace){return zt.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=ni){zt.workingToColorSpace(Hn.copy(this),e);const t=Hn.r,i=Hn.g,r=Hn.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+t,Ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(Xa);const i=Yo(Ar.h,Xa.h,t),r=Yo(Ar.s,Xa.s,t),s=Yo(Ar.l,Xa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new It;It.NAMES=cp;let S0=0;class xo extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=Js,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ld,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cd&&(i.blendSrc=this.blendSrc),this.blendDst!==ld&&(i.blendDst=this.blendDst),this.blendEquation!==as&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vn extends xo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=jf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mn=new b,qa=new Oe;let M0=0;class Mi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:M0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ku,this.updateRanges=[],this.gpuType=fr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qa.fromBufferAttribute(this,t),qa.applyMatrix3(e),this.setXY(t,qa.x,qa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix3(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),i=Jn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),i=Jn(i,this.array),r=Jn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),i=Jn(i,this.array),r=Jn(r,this.array),s=Jn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ku&&(e.usage=this.usage),e}}class lp extends Mi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class dp extends Mi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Tt extends Mi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let b0=0;const Ai=new Gt,Tl=new gn,Hs=new b,vi=new _o,Po=new _o,Ln=new b;class Ut extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(op(e)?dp:lp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Mt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,t,i){return Ai.makeTranslation(e,t,i),this.applyMatrix4(Ai),this}scale(e,t,i){return Ai.makeScale(e,t,i),this.applyMatrix4(Ai),this}lookAt(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];vi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const i=this.boundingSphere.center;if(vi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(Ln.addVectors(vi.min,Po.min),vi.expandByPoint(Ln),Ln.addVectors(vi.max,Po.max),vi.expandByPoint(Ln)):(vi.expandByPoint(Po.min),vi.expandByPoint(Po.max))}vi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ln.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ln));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)Ln.fromBufferAttribute(a,l),c&&(Hs.fromBufferAttribute(e,l),Ln.add(Hs)),r=Math.max(r,i.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<i.count;I++)a[I]=new b,c[I]=new b;const l=new b,d=new b,u=new b,h=new Oe,f=new Oe,m=new Oe,_=new b,g=new b;function p(I,M,y){l.fromBufferAttribute(i,I),d.fromBufferAttribute(i,M),u.fromBufferAttribute(i,y),h.fromBufferAttribute(s,I),f.fromBufferAttribute(s,M),m.fromBufferAttribute(s,y),d.sub(l),u.sub(l),f.sub(h),m.sub(h);const U=1/(f.x*m.y-m.x*f.y);isFinite(U)&&(_.copy(d).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(U),g.copy(u).multiplyScalar(f.x).addScaledVector(d,-m.x).multiplyScalar(U),a[I].add(_),a[M].add(_),a[y].add(_),c[I].add(g),c[M].add(g),c[y].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let I=0,M=E.length;I<M;++I){const y=E[I],U=y.start,F=y.count;for(let W=U,V=U+F;W<V;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const x=new b,v=new b,A=new b,C=new b;function P(I){A.fromBufferAttribute(r,I),C.copy(A);const M=a[I];x.copy(M),x.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(C,M);const U=v.dot(c[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,U)}for(let I=0,M=E.length;I<M;++I){const y=E[I],U=y.start,F=y.count;for(let W=U,V=U+F;W<V;W+=3)P(e.getX(W+0)),P(e.getX(W+1)),P(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new b,s=new b,o=new b,a=new b,c=new b,l=new b,d=new b,u=new b;if(e)for(let h=0,f=e.count;h<f;h+=3){const m=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),a.add(d),c.add(d),l.add(d),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ln.fromBufferAttribute(e,t),Ln.normalize(),e.setXYZ(t,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(a,c){const l=a.array,d=a.itemSize,u=a.normalized,h=new l.constructor(c.length*d);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*d;for(let p=0;p<d;p++)h[m++]=l[f++]}return new Mi(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let d=0,u=l.length;d<u;d++){const h=l[d],f=e(h,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,h=l.length;u<h;u++){const f=l[u];d.push(f.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],u=s[l];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,d=o.length;l<d;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hh=new Gt,Jr=new Ta,Ya=new vo,fh=new b,$a=new b,ja=new b,Za=new b,Al=new b,Ka=new b,ph=new b,Ja=new b;class Ae extends gn{constructor(e=new Ut,t=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ka.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=a[c],u=s[c];d!==0&&(Al.fromBufferAttribute(u,e),o?Ka.addScaledVector(Al,d):Ka.addScaledVector(Al.sub(t),d))}t.add(Ka)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(s),Jr.copy(e.ray).recast(e.near),!(Ya.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Ya,fh)===null||Jr.origin.distanceToSquared(fh)>(e.far-e.near)**2))&&(hh.copy(s).invert(),Jr.copy(e.ray).applyMatrix4(hh),!(i.boundingBox!==null&&Jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[g.materialIndex],E=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=E,A=x;v<A;v+=3){const C=a.getX(v),P=a.getX(v+1),I=a.getX(v+2);r=Qa(this,p,e,i,l,d,u,C,P,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const E=a.getX(g),x=a.getX(g+1),v=a.getX(g+2);r=Qa(this,o,e,i,l,d,u,E,x,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[g.materialIndex],E=Math.max(g.start,f.start),x=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=E,A=x;v<A;v+=3){const C=v,P=v+1,I=v+2;r=Qa(this,p,e,i,l,d,u,C,P,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const E=g,x=g+1,v=g+2;r=Qa(this,o,e,i,l,d,u,E,x,v),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function E0(n,e,t,i,r,s,o,a){let c;if(e.side===li?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===gr,a),c===null)return null;Ja.copy(a),Ja.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ja);return l<t.near||l>t.far?null:{distance:l,point:Ja.clone(),object:n}}function Qa(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,$a),n.getVertexPosition(c,ja),n.getVertexPosition(l,Za);const d=E0(n,e,t,i,$a,ja,Za,ph);if(d){const u=new b;Hi.getBarycoord(ph,$a,ja,Za,u),r&&(d.uv=Hi.getInterpolatedAttribute(r,a,c,l,u,new Oe)),s&&(d.uv1=Hi.getInterpolatedAttribute(s,a,c,l,u,new Oe)),o&&(d.normal=Hi.getInterpolatedAttribute(o,a,c,l,u,new b),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new b,materialIndex:0};Hi.getNormal($a,ja,Za,h.normal),d.face=h,d.barycoord=u}return d}class bn extends Ut{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],d=[],u=[];let h=0,f=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(u,2));function m(_,g,p,E,x,v,A,C,P,I,M){const y=v/P,U=A/I,F=v/2,W=A/2,V=C/2,ne=P+1,Z=I+1;let de=0,X=0;const oe=new b;for(let we=0;we<Z;we++){const Be=we*U-W;for(let Ye=0;Ye<ne;Ye++){const yt=Ye*y-F;oe[_]=yt*E,oe[g]=Be*x,oe[p]=V,l.push(oe.x,oe.y,oe.z),oe[_]=0,oe[g]=0,oe[p]=C>0?1:-1,d.push(oe.x,oe.y,oe.z),u.push(Ye/P),u.push(1-we/I),de+=1}}for(let we=0;we<I;we++)for(let Be=0;Be<P;Be++){const Ye=h+Be+ne*we,yt=h+Be+ne*(we+1),vt=h+(Be+1)+ne*(we+1),Y=h+(Be+1)+ne*we;c.push(Ye,yt,Y),c.push(yt,vt,Y),X+=6}a.addGroup(f,X,M),f+=X,h+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function uo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Qn(n){const e={};for(let t=0;t<n.length;t++){const i=uo(n[t]);for(const r in i)e[r]=i[r]}return e}function w0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function up(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:zt.workingColorSpace}const T0={clone:uo,merge:Qn};var A0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends xo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A0,this.fragmentShader=R0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=w0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hp extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new b,mh=new Oe,gh=new Oe;class yi extends hp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,mh,gh),t.subVectors(gh,mh)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vs=-90,Gs=1;class C0 extends gn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yi(Vs,Gs,e,t);r.layers=this.layers,this.add(r);const s=new yi(Vs,Gs,e,t);s.layers=this.layers,this.add(s);const o=new yi(Vs,Gs,e,t);o.layers=this.layers,this.add(o);const a=new yi(Vs,Gs,e,t);a.layers=this.layers,this.add(a);const c=new yi(Vs,Gs,e,t);c.layers=this.layers,this.add(c);const l=new yi(Vs,Gs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Dc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class fp extends di{constructor(e=[],t=ao,i,r,s,o,a,c,l,d){super(e,t,i,r,s,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class P0 extends Ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new bn(5,5,5),s=new _r({name:"CubemapFromEquirect",uniforms:uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:li,blending:Fr});s.uniforms.tEquirect.value=t;const o=new Ae(r,s),a=t.minFilter;return t.minFilter===hs&&(t.minFilter=Ji),new C0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class xn extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L0={type:"move"};class Rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&h>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L0)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new xn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class D0 extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Cl=new b,I0=new b,U0=new Mt;class Dr{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Cl.subVectors(i,t).cross(I0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Cl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||U0.getNormalMatrix(e),r=this.coplanarPoint(Cl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new vo,N0=new Oe(.5,.5),ec=new b;class Mu{constructor(e=new Dr,t=new Dr,i=new Dr,r=new Dr,s=new Dr,o=new Dr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],d=s[4],u=s[5],h=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],E=s[12],x=s[13],v=s[14],A=s[15];if(r[0].setComponents(l-o,f-d,p-m,A-E).normalize(),r[1].setComponents(l+o,f+d,p+m,A+E).normalize(),r[2].setComponents(l+a,f+u,p+_,A+x).normalize(),r[3].setComponents(l-a,f-u,p-_,A-x).normalize(),i)r[4].setComponents(c,h,g,v).normalize(),r[5].setComponents(l-c,f-h,p-g,A-v).normalize();else if(r[4].setComponents(l-c,f-h,p-g,A-v).normalize(),t===Qi)r[5].setComponents(l+c,f+h,p+g,A+v).normalize();else if(t===Dc)r[5].setComponents(c,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){Qr.center.set(0,0,0);const t=N0.distanceTo(e.center);return Qr.radius=.7071067811865476+t,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ec.x=r.normal.x>0?e.max.x:e.min.x,ec.y=r.normal.y>0?e.max.y:e.min.y,ec.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ui extends xo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uc=new b,Nc=new b,_h=new Gt,Lo=new Ta,tc=new vo,Pl=new b,vh=new b;class hn extends gn{constructor(e=new Ut,t=new ui){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Uc.fromBufferAttribute(t,r-1),Nc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Uc.distanceTo(Nc);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tc.copy(i.boundingSphere),tc.applyMatrix4(r),tc.radius+=s,e.ray.intersectsSphere(tc)===!1)return;_h.copy(r).invert(),Lo.copy(e.ray).applyMatrix4(_h);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=d.getX(_),E=d.getX(_+1),x=nc(this,e,Lo,c,p,E,_);x&&t.push(x)}if(this.isLineLoop){const _=d.getX(m-1),g=d.getX(f),p=nc(this,e,Lo,c,_,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=nc(this,e,Lo,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=nc(this,e,Lo,c,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function nc(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Uc.fromBufferAttribute(a,r),Nc.fromBufferAttribute(a,s),t.distanceSqToSegment(Uc,Nc,Pl,vh)>i)return;Pl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Pl);if(!(l<e.near||l>e.far))return{distance:l,point:vh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const xh=new b,yh=new b;class pp extends hn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)xh.fromBufferAttribute(t,r),yh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+xh.distanceTo(yh);e.setAttribute("lineDistance",new Tt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class k0 extends hn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class mp extends xo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sh=new Gt,Yd=new Ta,ic=new vo,rc=new b;class gp extends gn{constructor(e=new Ut,t=new mp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(r),ic.radius+=s,e.ray.intersectsSphere(ic)===!1)return;Sh.copy(r).invert(),Yd.copy(e.ray).applyMatrix4(Sh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=h,_=f;m<_;m++){const g=l.getX(m);rc.fromBufferAttribute(u,g),Mh(rc,g,c,r,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=h,_=f;m<_;m++)rc.fromBufferAttribute(u,m),Mh(rc,m,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Mh(n,e,t,i,r,s,o){const a=Yd.distanceSqToPoint(n);if(a<t){const c=new b;Yd.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class _p extends di{constructor(e,t,i=Ss,r,s,o,a=Wi,c=Wi,l,d=ra,u=1){if(d!==ra&&d!==sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,r,s,o,a,c,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class aa extends Ut{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new b,d=new Oe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const f=i+u/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,c.push(d.x,d.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wn extends Ut{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const d=[],u=[],h=[],f=[];let m=0;const _=[],g=i/2;let p=0;E(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(f,2));function E(){const v=new b,A=new b;let C=0;const P=(t-e)/i;for(let I=0;I<=s;I++){const M=[],y=I/s,U=y*(t-e)+e;for(let F=0;F<=r;F++){const W=F/r,V=W*c+a,ne=Math.sin(V),Z=Math.cos(V);A.x=U*ne,A.y=-y*i+g,A.z=U*Z,u.push(A.x,A.y,A.z),v.set(ne,P,Z).normalize(),h.push(v.x,v.y,v.z),f.push(W,1-y),M.push(m++)}_.push(M)}for(let I=0;I<r;I++)for(let M=0;M<s;M++){const y=_[M][I],U=_[M+1][I],F=_[M+1][I+1],W=_[M][I+1];(e>0||M!==0)&&(d.push(y,U,W),C+=3),(t>0||M!==s-1)&&(d.push(U,F,W),C+=3)}l.addGroup(p,C,0),p+=C}function x(v){const A=m,C=new Oe,P=new b;let I=0;const M=v===!0?e:t,y=v===!0?1:-1;for(let F=1;F<=r;F++)u.push(0,g*y,0),h.push(0,y,0),f.push(.5,.5),m++;const U=m;for(let F=0;F<=r;F++){const V=F/r*c+a,ne=Math.cos(V),Z=Math.sin(V);P.x=M*Z,P.y=g*y,P.z=M*ne,u.push(P.x,P.y,P.z),h.push(0,y,0),C.x=ne*.5+.5,C.y=Z*.5*y+.5,f.push(C.x,C.y),m++}for(let F=0;F<r;F++){const W=A+F,V=U+F;v===!0?d.push(V,V+1,W):d.push(V+1,V,W),I+=3}l.addGroup(p,I,v===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bu extends Ut{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),d(),this.setAttribute("position",new Tt(s,3)),this.setAttribute("normal",new Tt(s.slice(),3)),this.setAttribute("uv",new Tt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const x=new b,v=new b,A=new b;for(let C=0;C<t.length;C+=3)f(t[C+0],x),f(t[C+1],v),f(t[C+2],A),c(x,v,A,E)}function c(E,x,v,A){const C=A+1,P=[];for(let I=0;I<=C;I++){P[I]=[];const M=E.clone().lerp(v,I/C),y=x.clone().lerp(v,I/C),U=C-I;for(let F=0;F<=U;F++)F===0&&I===C?P[I][F]=M:P[I][F]=M.clone().lerp(y,F/U)}for(let I=0;I<C;I++)for(let M=0;M<2*(C-I)-1;M++){const y=Math.floor(M/2);M%2===0?(h(P[I][y+1]),h(P[I+1][y]),h(P[I][y])):(h(P[I][y+1]),h(P[I+1][y+1]),h(P[I+1][y]))}}function l(E){const x=new b;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(E),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function d(){const E=new b;for(let x=0;x<s.length;x+=3){E.x=s[x+0],E.y=s[x+1],E.z=s[x+2];const v=g(E)/2/Math.PI+.5,A=p(E)/Math.PI+.5;o.push(v,1-A)}m(),u()}function u(){for(let E=0;E<o.length;E+=6){const x=o[E+0],v=o[E+2],A=o[E+4],C=Math.max(x,v,A),P=Math.min(x,v,A);C>.9&&P<.1&&(x<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),A<.2&&(o[E+4]+=1))}}function h(E){s.push(E.x,E.y,E.z)}function f(E,x){const v=E*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function m(){const E=new b,x=new b,v=new b,A=new b,C=new Oe,P=new Oe,I=new Oe;for(let M=0,y=0;M<s.length;M+=9,y+=6){E.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),C.set(o[y+0],o[y+1]),P.set(o[y+2],o[y+3]),I.set(o[y+4],o[y+5]),A.copy(E).add(x).add(v).divideScalar(3);const U=g(A);_(C,y+0,E,U),_(P,y+2,x,U),_(I,y+4,v,U)}}function _(E,x,v,A){A<0&&E.x===1&&(o[x]=E.x-1),v.x===0&&v.z===0&&(o[x]=A/2/Math.PI+.5)}function g(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bu(e.vertices,e.indices,e.radius,e.details)}}class sr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const d=i[r],h=i[r+1]-d,f=(o-d)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new Oe:new b);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new b,r=[],s=[],o=[],a=new b,c=new Gt;for(let f=0;f<=e;f++){const m=f/e;r[f]=this.getTangentAt(m,new b)}s[0]=new b,o[0]=new b;let l=Number.MAX_VALUE;const d=Math.abs(r[0].x),u=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=l&&(l=d,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Et(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Et(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(r[m],f*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Eu extends sr{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Oe){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*d-f*u+this.aX,l=h*u+f*d+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class F0 extends Eu{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function wu(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,d,u){let h=(o-s)/l-(a-s)/(l+d)+(a-o)/d,f=(a-o)/d-(c-o)/(d+u)+(c-a)/u;h*=d,f*=d,r(o,a,h,f)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const sc=new b,Ll=new wu,Dl=new wu,Il=new wu;class Tu extends sr{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new b){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,d;this.closed||a>0?l=r[(a-1)%s]:(sc.subVectors(r[0],r[1]).add(r[0]),l=sc);const u=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(sc.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=sc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Ll.initNonuniformCatmullRom(l.x,u.x,h.x,d.x,m,_,g),Dl.initNonuniformCatmullRom(l.y,u.y,h.y,d.y,m,_,g),Il.initNonuniformCatmullRom(l.z,u.z,h.z,d.z,m,_,g)}else this.curveType==="catmullrom"&&(Ll.initCatmullRom(l.x,u.x,h.x,d.x,this.tension),Dl.initCatmullRom(l.y,u.y,h.y,d.y,this.tension),Il.initCatmullRom(l.z,u.z,h.z,d.z,this.tension));return i.set(Ll.calc(c),Dl.calc(c),Il.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new b().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function bh(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function O0(n,e){const t=1-n;return t*t*e}function z0(n,e){return 2*(1-n)*n*e}function B0(n,e){return n*n*e}function $o(n,e,t,i){return O0(n,e)+z0(n,t)+B0(n,i)}function H0(n,e){const t=1-n;return t*t*t*e}function V0(n,e){const t=1-n;return 3*t*t*n*e}function G0(n,e){return 3*(1-n)*n*n*e}function W0(n,e){return n*n*n*e}function jo(n,e,t,i,r){return H0(n,e)+V0(n,t)+G0(n,i)+W0(n,r)}class vp extends sr{constructor(e=new Oe,t=new Oe,i=new Oe,r=new Oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Oe){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(jo(e,r.x,s.x,o.x,a.x),jo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class X0 extends sr{constructor(e=new b,t=new b,i=new b,r=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new b){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(jo(e,r.x,s.x,o.x,a.x),jo(e,r.y,s.y,o.y,a.y),jo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xp extends sr{constructor(e=new Oe,t=new Oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Oe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class q0 extends sr{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yp extends sr{constructor(e=new Oe,t=new Oe,i=new Oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Oe){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set($o(e,r.x,s.x,o.x),$o(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y0 extends sr{constructor(e=new b,t=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set($o(e,r.x,s.x,o.x),$o(e,r.y,s.y,o.y),$o(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sp extends sr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],d=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(bh(a,c.x,l.x,d.x,u.x),bh(a,c.y,l.y,d.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Oe().fromArray(r))}return this}}var Eh=Object.freeze({__proto__:null,ArcCurve:F0,CatmullRomCurve3:Tu,CubicBezierCurve:vp,CubicBezierCurve3:X0,EllipseCurve:Eu,LineCurve:xp,LineCurve3:q0,QuadraticBezierCurve:yp,QuadraticBezierCurve3:Y0,SplineCurve:Sp});class $0 extends sr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eh[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const d=c[l];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Eh[r.type]().fromJSON(r))}return this}}class wh extends $0{constructor(e){super(),this.type="Path",this.currentPoint=new Oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new xp(this.currentPoint.clone(),new Oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new yp(this.currentPoint.clone(),new Oe(e,t),new Oe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new vp(this.currentPoint.clone(),new Oe(e,t),new Oe(i,r),new Oe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Sp(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+l,t+d,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new Eu(e,t,i,r,s,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const d=l.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Mp extends wh{constructor(e){super(e),this.uuid=Rs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new wh().fromJSON(r))}return this}}function j0(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=bp(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=e_(n,e,s,t)),n.length>80*t){a=1/0,c=1/0;let d=-1/0,u=-1/0;for(let h=t;h<r;h+=t){const f=n[h],m=n[h+1];f<a&&(a=f),m<c&&(c=m),f>d&&(d=f),m>u&&(u=m)}l=Math.max(d-a,u-c),l=l!==0?32767/l:0}return ca(s,o,t,a,c,l,0),o}function bp(n,e,t,i,r){let s;if(r===u_(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Th(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Th(o/i|0,n[o],n[o+1],s);return s&&ho(s,s.next)&&(da(s),s=s.next),s}function bs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ho(t,t.next)||pn(t.prev,t,t.next)===0)){if(da(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ca(n,e,t,i,r,s,o){if(!n)return;!o&&s&&s_(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?K0(n,i,r,s):Z0(n)){e.push(c.i,n.i,l.i),da(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=J0(bs(n),e),ca(n,e,t,i,r,s,2)):o===2&&Q0(n,e,t,i,r,s):ca(bs(n),e,t,i,r,s,1);break}}}function Z0(n){const e=n.prev,t=n,i=n.next;if(pn(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,d=Math.min(r,s,o),u=Math.min(a,c,l),h=Math.max(r,s,o),f=Math.max(a,c,l);let m=i.next;for(;m!==e;){if(m.x>=d&&m.x<=h&&m.y>=u&&m.y<=f&&Bo(r,a,s,c,o,l,m.x,m.y)&&pn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function K0(n,e,t,i){const r=n.prev,s=n,o=n.next;if(pn(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,d=r.y,u=s.y,h=o.y,f=Math.min(a,c,l),m=Math.min(d,u,h),_=Math.max(a,c,l),g=Math.max(d,u,h),p=$d(f,m,e,t,i),E=$d(_,g,e,t,i);let x=n.prevZ,v=n.nextZ;for(;x&&x.z>=p&&v&&v.z<=E;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&Bo(a,d,c,u,l,h,x.x,x.y)&&pn(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&Bo(a,d,c,u,l,h,v.x,v.y)&&pn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&Bo(a,d,c,u,l,h,x.x,x.y)&&pn(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=E;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&Bo(a,d,c,u,l,h,v.x,v.y)&&pn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function J0(n,e){let t=n;do{const i=t.prev,r=t.next.next;!ho(i,r)&&wp(i,t,t.next,r)&&la(i,r)&&la(r,i)&&(e.push(i.i,t.i,r.i),da(t),da(t.next),t=n=r),t=t.next}while(t!==n);return bs(t)}function Q0(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&c_(o,a)){let c=Tp(o,a);o=bs(o,o.next),c=bs(c,c.next),ca(o,e,t,i,r,s,0),ca(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function e_(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=bp(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(a_(l))}r.sort(t_);for(let s=0;s<r.length;s++)t=n_(r[s],t);return t}function t_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function n_(n,e){const t=i_(n,e);if(!t)return e;const i=Tp(t,n);return bs(i,i.next),bs(t,t.next)}function i_(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(ho(n,t))return t;do{if(ho(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let d=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Ep(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const u=Math.abs(r-t.y)/(i-t.x);la(t,n)&&(u<d||u===d&&(t.x>o.x||t.x===o.x&&r_(o,t)))&&(o=t,d=u)}t=t.next}while(t!==a);return o}function r_(n,e){return pn(n.prev,n,e.prev)<0&&pn(e.next,n,n.next)<0}function s_(n,e,t,i){let r=n;do r.z===0&&(r.z=$d(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,o_(r)}function o_(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function $d(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function a_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ep(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Bo(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&Ep(n,e,t,i,r,s,o,a)}function c_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!l_(n,e)&&(la(n,e)&&la(e,n)&&d_(n,e)&&(pn(n.prev,n,e.prev)||pn(n,e.prev,e))||ho(n,e)&&pn(n.prev,n,n.next)>0&&pn(e.prev,e,e.next)>0)}function pn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ho(n,e){return n.x===e.x&&n.y===e.y}function wp(n,e,t,i){const r=ac(pn(n,e,t)),s=ac(pn(n,e,i)),o=ac(pn(t,i,n)),a=ac(pn(t,i,e));return!!(r!==s&&o!==a||r===0&&oc(n,t,e)||s===0&&oc(n,i,e)||o===0&&oc(t,n,i)||a===0&&oc(t,e,i))}function oc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ac(n){return n>0?1:n<0?-1:0}function l_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&wp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function la(n,e){return pn(n.prev,n,n.next)<0?pn(n,e,n.next)>=0&&pn(n,n.prev,e)>=0:pn(n,e,n.prev)<0||pn(n,n.next,e)<0}function d_(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Tp(n,e){const t=jd(n.i,n.x,n.y),i=jd(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Th(n,e,t,i){const r=jd(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function da(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function jd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function u_(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class h_{static triangulate(e,t,i=2){return j0(e,t,i)}}class Zo{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Zo.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Ah(e),Rh(i,e);let o=e.length;t.forEach(Ah);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,Rh(i,t[c]);const a=h_.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Ah(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Rh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class fs extends bu{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fs(e.radius,e.detail)}}class Br extends Ut{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,d=c+1,u=e/a,h=t/c,f=[],m=[],_=[],g=[];for(let p=0;p<d;p++){const E=p*h-o;for(let x=0;x<l;x++){const v=x*u-s;m.push(v,-E,0),_.push(0,0,1),g.push(x/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){const x=E+l*p,v=E+l*(p+1),A=E+1+l*(p+1),C=E+1+l*p;f.push(x,v,C),f.push(v,A,C)}this.setIndex(f),this.setAttribute("position",new Tt(m,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.widthSegments,e.heightSegments)}}class jc extends Ut{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],d=[];let u=e;const h=(t-e)/r,f=new b,m=new Oe;for(let _=0;_<=r;_++){for(let g=0;g<=i;g++){const p=s+g/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,d.push(m.x,m.y)}u+=h}for(let _=0;_<r;_++){const g=_*(i+1);for(let p=0;p<i;p++){const E=p+g,x=E,v=E+i+1,A=E+i+2,C=E+1;a.push(x,v,C),a.push(v,A,C)}}this.setIndex(a),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Au extends Ut{constructor(e=new Mp([new Oe(0,.5),new Oe(-.5,-.5),new Oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let d=0;d<e.length;d++)l(e[d]),this.addGroup(a,c,d),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(s,3)),this.setAttribute("uv",new Tt(o,2));function l(d){const u=r.length/3,h=d.extractPoints(t);let f=h.shape;const m=h.holes;Zo.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const E=m[g];Zo.isClockWise(E)===!0&&(m[g]=E.reverse())}const _=Zo.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const E=m[g];f=f.concat(E)}for(let g=0,p=f.length;g<p;g++){const E=f[g];r.push(E.x,E.y,0),s.push(0,0,1),o.push(E.x,E.y)}for(let g=0,p=_.length;g<p;g++){const E=_[g],x=E[0]+u,v=E[1]+u,A=E[2]+u;i.push(x,v,A),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return f_(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new Au(i,e.curveSegments)}}function f_(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class zr extends Ut{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const d=[],u=new b,h=new b,f=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const E=[],x=p/i;let v=0;p===0&&o===0?v=.5/t:p===i&&c===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const C=A/t;u.x=-e*Math.cos(r+C*s)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(r+C*s)*Math.sin(o+x*a),m.push(u.x,u.y,u.z),h.copy(u).normalize(),_.push(h.x,h.y,h.z),g.push(C+v,1-x),E.push(l++)}d.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){const x=d[p][E+1],v=d[p][E],A=d[p+1][E],C=d[p+1][E+1];(p!==0||o>0)&&f.push(x,v,C),(p!==i-1||c<Math.PI)&&f.push(v,A,C)}this.setIndex(f),this.setAttribute("position",new Tt(m,3)),this.setAttribute("normal",new Tt(_,3)),this.setAttribute("uv",new Tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cs extends Ut{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],d=new b,u=new b,h=new b;for(let f=0;f<=i;f++)for(let m=0;m<=r;m++){const _=m/r*s,g=f/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),h.subVectors(u,d).normalize(),c.push(h.x,h.y,h.z),l.push(m/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=r;m++){const _=(r+1)*f+m-1,g=(r+1)*(f-1)+m-1,p=(r+1)*(f-1)+m,E=(r+1)*f+m;o.push(_,g,E),o.push(g,p,E)}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class p_ extends xo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m_ extends xo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class g_ extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new It(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ul=new Gt,Ch=new b,Ph=new b;class __{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=ir,this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mu,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ch.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ch),Ph.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ph),t.updateMatrixWorld(),Ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Lh=new Gt,Do=new b,Nl=new b;class v_ extends __{constructor(){super(new yi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Do.setFromMatrixPosition(e.matrixWorld),i.position.copy(Do),Nl.copy(i.position),Nl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Nl),i.updateMatrixWorld(),r.makeTranslation(-Do.x,-Do.y,-Do.z),Lh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh,i.coordinateSystem,i.reversedDepth)}}class x_ extends g_{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new v_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class y_ extends hp{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class S_ extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Dh=new Gt;class Ap{constructor(e,t,i=0,r=1/0){this.ray=new Ta(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Su,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dh),this}intersectObject(e,t=!0,i=[]){return Zd(e,this,i,t),i.sort(Ih),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Zd(e[r],this,i,t);return i.sort(Ih),i}}function Ih(n,e){return n.distance-e.distance}function Zd(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Zd(s[o],e,t,!0)}}class Uh{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Rp extends As{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Nh(n,e,t,i){const r=M_(i);switch(t){case ep:return n*e;case np:return n*e/r.components*r.byteLength;case gu:return n*e/r.components*r.byteLength;case ip:return n*e*2/r.components*r.byteLength;case _u:return n*e*2/r.components*r.byteLength;case tp:return n*e*3/r.components*r.byteLength;case Vi:return n*e*4/r.components*r.byteLength;case vu:return n*e*4/r.components*r.byteLength;case xc:case yc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sc:case Mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Md:case Ed:return Math.max(n,16)*Math.max(e,8)/4;case Sd:case bd:return Math.max(n,8)*Math.max(e,8)/2;case wd:case Td:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ad:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Id:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case kd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Od:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case bc:case Vd:case Gd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case rp:case Wd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xd:case qd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function M_(n){switch(n){case ir:case Kf:return{byteLength:1,components:1};case na:case Jf:case wa:return{byteLength:2,components:1};case pu:case mu:return{byteLength:2,components:4};case Ss:case fu:case fr:return{byteLength:4,components:1};case Qf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hu);function Cp(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function b_(n){const e=new WeakMap;function t(a,c){const l=a.array,d=a.usage,u=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,d),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const d=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,d);else{u.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<u.length;f++){const m=u[h],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,u[h]=_)}u.length=h+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];n.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var E_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w_=`#ifdef USE_ALPHAHASH
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
#endif`,T_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,P_=`#ifdef USE_AOMAP
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
#endif`,L_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D_=`#ifdef USE_BATCHING
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
#endif`,I_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F_=`#ifdef USE_IRIDESCENCE
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
#endif`,O_=`#ifdef USE_BUMPMAP
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
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,q_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Y_=`#define PI 3.141592653589793
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
} // validated`,$_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,j_=`vec3 transformedNormal = objectNormal;
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
#endif`,Z_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ev="gl_FragColor = linearToOutputTexel( gl_FragColor );",tv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nv=`#ifdef USE_ENVMAP
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
#endif`,iv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rv=`#ifdef USE_ENVMAP
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
#endif`,sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ov=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uv=`#ifdef USE_GRADIENTMAP
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
}`,hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mv=`uniform bool receiveShadow;
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
#endif`,gv=`#ifdef USE_ENVMAP
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
#endif`,_v=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sv=`PhysicalMaterial material;
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
#endif`,Mv=`struct PhysicalMaterial {
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
}`,bv=`
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
#endif`,Ev=`#if defined( RE_IndirectDiffuse )
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
#endif`,wv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Av=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iv=`#if defined( USE_POINTS_UV )
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
#endif`,Uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ov=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zv=`#ifdef USE_MORPHTARGETS
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
#endif`,Bv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qv=`#ifdef USE_NORMALMAP
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
#endif`,Yv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$v=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cx=`float getShadowMask() {
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
}`,lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dx=`#ifdef USE_SKINNING
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
#endif`,ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hx=`#ifdef USE_SKINNING
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
#endif`,fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_x=`#ifdef USE_TRANSMISSION
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
#endif`,vx=`#ifdef USE_TRANSMISSION
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
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ex=`uniform sampler2D t2D;
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`#include <common>
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
}`,Px=`#if DEPTH_PACKING == 3200
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
}`,Lx=`#define DISTANCE
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
}`,Dx=`#define DISTANCE
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`uniform float scale;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Fx=`#include <common>
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
}`,Ox=`uniform vec3 diffuse;
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
}`,zx=`#define LAMBERT
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
}`,Bx=`#define LAMBERT
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
}`,Hx=`#define MATCAP
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
}`,Vx=`#define MATCAP
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
}`,Gx=`#define NORMAL
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
}`,Wx=`#define NORMAL
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
}`,Xx=`#define PHONG
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
}`,qx=`#define PHONG
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
}`,Yx=`#define STANDARD
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
}`,$x=`#define STANDARD
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
}`,jx=`#define TOON
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
}`,Zx=`#define TOON
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
}`,Kx=`uniform float size;
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
}`,Jx=`uniform vec3 diffuse;
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
}`,Qx=`#include <common>
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
}`,ey=`uniform vec3 color;
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
}`,ty=`uniform float rotation;
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
}`,ny=`uniform vec3 diffuse;
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
}`,bt={alphahash_fragment:E_,alphahash_pars_fragment:w_,alphamap_fragment:T_,alphamap_pars_fragment:A_,alphatest_fragment:R_,alphatest_pars_fragment:C_,aomap_fragment:P_,aomap_pars_fragment:L_,batching_pars_vertex:D_,batching_vertex:I_,begin_vertex:U_,beginnormal_vertex:N_,bsdfs:k_,iridescence_fragment:F_,bumpmap_pars_fragment:O_,clipping_planes_fragment:z_,clipping_planes_pars_fragment:B_,clipping_planes_pars_vertex:H_,clipping_planes_vertex:V_,color_fragment:G_,color_pars_fragment:W_,color_pars_vertex:X_,color_vertex:q_,common:Y_,cube_uv_reflection_fragment:$_,defaultnormal_vertex:j_,displacementmap_pars_vertex:Z_,displacementmap_vertex:K_,emissivemap_fragment:J_,emissivemap_pars_fragment:Q_,colorspace_fragment:ev,colorspace_pars_fragment:tv,envmap_fragment:nv,envmap_common_pars_fragment:iv,envmap_pars_fragment:rv,envmap_pars_vertex:sv,envmap_physical_pars_fragment:gv,envmap_vertex:ov,fog_vertex:av,fog_pars_vertex:cv,fog_fragment:lv,fog_pars_fragment:dv,gradientmap_pars_fragment:uv,lightmap_pars_fragment:hv,lights_lambert_fragment:fv,lights_lambert_pars_fragment:pv,lights_pars_begin:mv,lights_toon_fragment:_v,lights_toon_pars_fragment:vv,lights_phong_fragment:xv,lights_phong_pars_fragment:yv,lights_physical_fragment:Sv,lights_physical_pars_fragment:Mv,lights_fragment_begin:bv,lights_fragment_maps:Ev,lights_fragment_end:wv,logdepthbuf_fragment:Tv,logdepthbuf_pars_fragment:Av,logdepthbuf_pars_vertex:Rv,logdepthbuf_vertex:Cv,map_fragment:Pv,map_pars_fragment:Lv,map_particle_fragment:Dv,map_particle_pars_fragment:Iv,metalnessmap_fragment:Uv,metalnessmap_pars_fragment:Nv,morphinstance_vertex:kv,morphcolor_vertex:Fv,morphnormal_vertex:Ov,morphtarget_pars_vertex:zv,morphtarget_vertex:Bv,normal_fragment_begin:Hv,normal_fragment_maps:Vv,normal_pars_fragment:Gv,normal_pars_vertex:Wv,normal_vertex:Xv,normalmap_pars_fragment:qv,clearcoat_normal_fragment_begin:Yv,clearcoat_normal_fragment_maps:$v,clearcoat_pars_fragment:jv,iridescence_pars_fragment:Zv,opaque_fragment:Kv,packing:Jv,premultiplied_alpha_fragment:Qv,project_vertex:ex,dithering_fragment:tx,dithering_pars_fragment:nx,roughnessmap_fragment:ix,roughnessmap_pars_fragment:rx,shadowmap_pars_fragment:sx,shadowmap_pars_vertex:ox,shadowmap_vertex:ax,shadowmask_pars_fragment:cx,skinbase_vertex:lx,skinning_pars_vertex:dx,skinning_vertex:ux,skinnormal_vertex:hx,specularmap_fragment:fx,specularmap_pars_fragment:px,tonemapping_fragment:mx,tonemapping_pars_fragment:gx,transmission_fragment:_x,transmission_pars_fragment:vx,uv_pars_fragment:xx,uv_pars_vertex:yx,uv_vertex:Sx,worldpos_vertex:Mx,background_vert:bx,background_frag:Ex,backgroundCube_vert:wx,backgroundCube_frag:Tx,cube_vert:Ax,cube_frag:Rx,depth_vert:Cx,depth_frag:Px,distanceRGBA_vert:Lx,distanceRGBA_frag:Dx,equirect_vert:Ix,equirect_frag:Ux,linedashed_vert:Nx,linedashed_frag:kx,meshbasic_vert:Fx,meshbasic_frag:Ox,meshlambert_vert:zx,meshlambert_frag:Bx,meshmatcap_vert:Hx,meshmatcap_frag:Vx,meshnormal_vert:Gx,meshnormal_frag:Wx,meshphong_vert:Xx,meshphong_frag:qx,meshphysical_vert:Yx,meshphysical_frag:$x,meshtoon_vert:jx,meshtoon_frag:Zx,points_vert:Kx,points_frag:Jx,shadow_vert:Qx,shadow_frag:ey,sprite_vert:ty,sprite_frag:ny},ze={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},Ki={basic:{uniforms:Qn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:Qn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new It(0)}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:Qn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:Qn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:Qn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new It(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:Qn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:Qn([ze.points,ze.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:Qn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:Qn([ze.common,ze.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:Qn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:Qn([ze.sprite,ze.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distanceRGBA:{uniforms:Qn([ze.common,ze.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distanceRGBA_vert,fragmentShader:bt.distanceRGBA_frag},shadow:{uniforms:Qn([ze.lights,ze.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};Ki.physical={uniforms:Qn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const cc={r:0,b:0,g:0},es=new $n,iy=new Gt;function ry(n,e,t,i,r,s,o){const a=new It(0);let c=s===!0?0:1,l,d,u=null,h=0,f=null;function m(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const A=m(x);A===null?p(a,c):A&&A.isColor&&(p(A,1),v=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(x,v){const A=m(v);A&&(A.isCubeTexture||A.mapping===$c)?(d===void 0&&(d=new Ae(new bn(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:uo(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),es.copy(v.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(iy.makeRotationFromEuler(es)),d.material.toneMapped=zt.getTransfer(A.colorSpace)!==qt,(u!==A||h!==A.version||f!==n.toneMapping)&&(d.material.needsUpdate=!0,u=A,h=A.version,f=n.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Ae(new Br(2,2),new _r({name:"BackgroundMaterial",uniforms:uo(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=zt.getTransfer(A.colorSpace)!==qt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||h!==A.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=A,h=A.version,f=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,v){x.getRGB(cc,up(n)),i.buffers.color.setClear(cc.r,cc.g,cc.b,v,o)}function E(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:_,addToRenderList:g,dispose:E}}function sy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,U,F,W,V){let ne=!1;const Z=u(W,F,U);s!==Z&&(s=Z,l(s.object)),ne=f(y,W,F,V),ne&&m(y,W,F,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,v(y,U,F,W),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function d(y){return n.deleteVertexArray(y)}function u(y,U,F){const W=F.wireframe===!0;let V=i[y.id];V===void 0&&(V={},i[y.id]=V);let ne=V[U.id];ne===void 0&&(ne={},V[U.id]=ne);let Z=ne[W];return Z===void 0&&(Z=h(c()),ne[W]=Z),Z}function h(y){const U=[],F=[],W=[];for(let V=0;V<t;V++)U[V]=0,F[V]=0,W[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:W,object:y,attributes:{},index:null}}function f(y,U,F,W){const V=s.attributes,ne=U.attributes;let Z=0;const de=F.getAttributes();for(const X in de)if(de[X].location>=0){const we=V[X];let Be=ne[X];if(Be===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(Be=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(Be=y.instanceColor)),we===void 0||we.attribute!==Be||Be&&we.data!==Be.data)return!0;Z++}return s.attributesNum!==Z||s.index!==W}function m(y,U,F,W){const V={},ne=U.attributes;let Z=0;const de=F.getAttributes();for(const X in de)if(de[X].location>=0){let we=ne[X];we===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(we=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(we=y.instanceColor));const Be={};Be.attribute=we,we&&we.data&&(Be.data=we.data),V[X]=Be,Z++}s.attributes=V,s.attributesNum=Z,s.index=W}function _(){const y=s.newAttributes;for(let U=0,F=y.length;U<F;U++)y[U]=0}function g(y){p(y,0)}function p(y,U){const F=s.newAttributes,W=s.enabledAttributes,V=s.attributeDivisors;F[y]=1,W[y]===0&&(n.enableVertexAttribArray(y),W[y]=1),V[y]!==U&&(n.vertexAttribDivisor(y,U),V[y]=U)}function E(){const y=s.newAttributes,U=s.enabledAttributes;for(let F=0,W=U.length;F<W;F++)U[F]!==y[F]&&(n.disableVertexAttribArray(F),U[F]=0)}function x(y,U,F,W,V,ne,Z){Z===!0?n.vertexAttribIPointer(y,U,F,V,ne):n.vertexAttribPointer(y,U,F,W,V,ne)}function v(y,U,F,W){_();const V=W.attributes,ne=F.getAttributes(),Z=U.defaultAttributeValues;for(const de in ne){const X=ne[de];if(X.location>=0){let oe=V[de];if(oe===void 0&&(de==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),de==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor)),oe!==void 0){const we=oe.normalized,Be=oe.itemSize,Ye=e.get(oe);if(Ye===void 0)continue;const yt=Ye.buffer,vt=Ye.type,Y=Ye.bytesPerElement,Te=vt===n.INT||vt===n.UNSIGNED_INT||oe.gpuType===fu;if(oe.isInterleavedBufferAttribute){const G=oe.data,le=G.stride,Se=oe.offset;if(G.isInstancedInterleavedBuffer){for(let $=0;$<X.locationSize;$++)p(X.location+$,G.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let $=0;$<X.locationSize;$++)g(X.location+$);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let $=0;$<X.locationSize;$++)x(X.location+$,Be/X.locationSize,vt,we,le*Y,(Se+Be/X.locationSize*$)*Y,Te)}else{if(oe.isInstancedBufferAttribute){for(let G=0;G<X.locationSize;G++)p(X.location+G,oe.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let G=0;G<X.locationSize;G++)g(X.location+G);n.bindBuffer(n.ARRAY_BUFFER,yt);for(let G=0;G<X.locationSize;G++)x(X.location+G,Be/X.locationSize,vt,we,Be*Y,Be/X.locationSize*G*Y,Te)}}else if(Z!==void 0){const we=Z[de];if(we!==void 0)switch(we.length){case 2:n.vertexAttrib2fv(X.location,we);break;case 3:n.vertexAttrib3fv(X.location,we);break;case 4:n.vertexAttrib4fv(X.location,we);break;default:n.vertexAttrib1fv(X.location,we)}}}}E()}function A(){I();for(const y in i){const U=i[y];for(const F in U){const W=U[F];for(const V in W)d(W[V].object),delete W[V];delete U[F]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const U=i[y.id];for(const F in U){const W=U[F];for(const V in W)d(W[V].object),delete W[V];delete U[F]}delete i[y.id]}function P(y){for(const U in i){const F=i[U];if(F[y.id]===void 0)continue;const W=F[y.id];for(const V in W)d(W[V].object),delete W[V];delete F[y.id]}}function I(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:E}}function oy(n,e,t){let i;function r(l){i=l}function s(l,d){n.drawArrays(i,l,d),t.update(d,i,1)}function o(l,d,u){u!==0&&(n.drawArraysInstanced(i,l,d,u),t.update(d,i,u))}function a(l,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,u);let f=0;for(let m=0;m<u;m++)f+=d[m];t.update(f,i,1)}function c(l,d,u,h){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],d[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,d,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=d[_]*h[_];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ay(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Vi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const I=P===wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ir&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==fr&&!I)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:A,maxSamples:C}}function cy(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Dr,a=new Mt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||i!==0||r;return r=h,i=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=n.get(u);if(!r||m===null||m.length===0||s&&!g)s?d(null):l();else{const E=s?0:i,x=E*4;let v=p.clippingState||null;c.value=v,v=d(m,h,x,f);for(let A=0;A!==x;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(E,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function ly(n){let e=new WeakMap;function t(o,a){return a===_d?o.mapping=ao:a===vd&&(o.mapping=co),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===_d||a===vd)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new P0(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const js=4,kh=[.125,.215,.35,.446,.526,.582],ls=20,kl=new y_,Fh=new It;let Fl=null,Ol=0,zl=0,Bl=!1;const rs=(1+Math.sqrt(5))/2,Ws=1/rs,Oh=[new b(-rs,Ws,0),new b(rs,Ws,0),new b(-Ws,0,rs),new b(Ws,0,rs),new b(0,rs,-Ws),new b(0,rs,Ws),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],dy=new b;class zh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=dy}=s;Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fl,Ol,zl),this._renderer.xr.enabled=Bl,e.scissorTest=!1,lc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ao||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ji,minFilter:Ji,generateMipmaps:!1,type:wa,format:Vi,colorSpace:lo,depthBuffer:!1},r=Bh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uy(s)),this._blurMaterial=hy(s,e,t)}return r}_compileMaterial(e){const t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,kl)}_sceneToCubeUV(e,t,i,r,s){const c=new yi(90,1,t,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Fh),u.toneMapping=Or,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const _=new vn({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1}),g=new Ae(new bn,_);let p=!1;const E=e.background;E?E.isColor&&(_.color.copy(E),e.background=null,p=!0):(_.color.copy(Fh),p=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[x],s.y,s.z)):v===1?(c.up.set(0,0,l[x]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[x],s.z)):(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[x]));const A=this._cubeSize;lc(r,v*A,x>2?A:0,A,A),u.setRenderTarget(r),p&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ao||e.mapping===co;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;lc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,kl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Oh[(r-s-1)%Oh.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Ae(this._lodPlanes[r],l),h=l.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ls-1),_=s/m,g=isFinite(s)?1+Math.floor(d*_):ls;g>ls&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ls}`);const p=[];let E=0;for(let P=0;P<ls;++P){const I=P/_,M=Math.exp(-I*I/2);p.push(M),P===0?E+=M:P<g&&(E+=2*M)}for(let P=0;P<p.length;P++)p[P]=p[P]/E;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=m,h.mipInt.value=x-i;const v=this._sizeLods[r],A=3*v*(r>x-js?r-x+js:0),C=4*(this._cubeSize-v);lc(t,A,C,3*v,2*v),c.setRenderTarget(t),c.render(u,kl)}}function uy(n){const e=[],t=[],i=[];let r=n;const s=n-js+1+kh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-js?c=kh[o-n+js-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),d=-l,u=1+l,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,m=6,_=3,g=2,p=1,E=new Float32Array(_*m*f),x=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let C=0;C<f;C++){const P=C%3*2/3-1,I=C>2?0:-1,M=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];E.set(M,_*m*C),x.set(h,g*m*C);const y=[C,C,C,C,C,C];v.set(y,p*m*C)}const A=new Ut;A.setAttribute("position",new Mi(E,_)),A.setAttribute("uv",new Mi(x,g)),A.setAttribute("faceIndex",new Mi(v,p)),e.push(A),r>js&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bh(n,e,t){const i=new Ms(n,e,t);return i.texture.mapping=$c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function hy(n,e,t){const i=new Float32Array(ls),r=new b(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function Hh(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function Vh(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function Ru(){return`

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
	`}function fy(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===_d||c===vd,d=c===ao||c===co;if(l||d){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new zh(n)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||d&&f&&r(f)?(t===null&&(t=new zh(n)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0;const l=6;for(let d=0;d<l;d++)a[d]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function py(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Qs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function my(n,e,t,i){const r={},s=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(u){const h=u.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function l(u){const h=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let x=0,v=E.length;x<v;x+=3){const A=E[x+0],C=E[x+1],P=E[x+2];h.push(A,C,C,P,P,A)}}else if(m!==void 0){const E=m.array;_=m.version;for(let x=0,v=E.length/3-1;x<v;x+=3){const A=x+0,C=x+1,P=x+2;h.push(A,C,C,P,P,A)}}else return;const g=new(op(h)?dp:lp)(h,1);g.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,g)}function d(u){const h=s.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:d}}function gy(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function l(h,f,m){m!==0&&(n.drawElementsInstanced(i,f,s,h*o,m),t.update(f,i,m))}function d(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,i,1)}function u(h,f,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,_,0,m);let p=0;for(let E=0;E<m;E++)p+=f[E]*_[E];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function _y(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vy(n,e,t){const i=new WeakMap,r=new Wt;function s(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==u){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),m===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const C=new Float32Array(v*A*4*u),P=new ap(C,v,A,u);P.type=fr,P.needsUpdate=!0;const I=x*4;for(let y=0;y<u;y++){const U=g[y],F=p[y],W=E[y],V=v*A*4*y;for(let ne=0;ne<U.count;ne++){const Z=ne*I;f===!0&&(r.fromBufferAttribute(U,ne),C[V+Z+0]=r.x,C[V+Z+1]=r.y,C[V+Z+2]=r.z,C[V+Z+3]=0),m===!0&&(r.fromBufferAttribute(F,ne),C[V+Z+4]=r.x,C[V+Z+5]=r.y,C[V+Z+6]=r.z,C[V+Z+7]=0),_===!0&&(r.fromBufferAttribute(W,ne),C[V+Z+8]=r.x,C[V+Z+9]=r.y,C[V+Z+10]=r.z,C[V+Z+11]=W.itemSize===4?r.w:1)}}h={count:u,texture:P,size:new Oe(v,A)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function xy(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return u}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Pp=new di,Gh=new _p(1,1),Lp=new ap,Dp=new f0,Ip=new fp,Wh=[],Xh=[],qh=new Float32Array(16),Yh=new Float32Array(9),$h=new Float32Array(4);function yo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Wh[r];if(s===void 0&&(s=new Float32Array(r),Wh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Rn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Cn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Zc(n,e){let t=Xh[e];t===void 0&&(t=new Int32Array(e),Xh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Sy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;n.uniform2fv(this.addr,e),Cn(t,e)}}function My(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rn(t,e))return;n.uniform3fv(this.addr,e),Cn(t,e)}}function by(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;n.uniform4fv(this.addr,e),Cn(t,e)}}function Ey(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,i))return;$h.set(i),n.uniformMatrix2fv(this.addr,!1,$h),Cn(t,i)}}function wy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,i))return;Yh.set(i),n.uniformMatrix3fv(this.addr,!1,Yh),Cn(t,i)}}function Ty(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Cn(t,e)}else{if(Rn(t,i))return;qh.set(i),n.uniformMatrix4fv(this.addr,!1,qh),Cn(t,i)}}function Ay(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;n.uniform2iv(this.addr,e),Cn(t,e)}}function Cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;n.uniform3iv(this.addr,e),Cn(t,e)}}function Py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;n.uniform4iv(this.addr,e),Cn(t,e)}}function Ly(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Dy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;n.uniform2uiv(this.addr,e),Cn(t,e)}}function Iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;n.uniform3uiv(this.addr,e),Cn(t,e)}}function Uy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;n.uniform4uiv(this.addr,e),Cn(t,e)}}function Ny(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Gh.compareFunction=sp,s=Gh):s=Pp,t.setTexture2D(e||s,r)}function ky(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Dp,r)}function Fy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ip,r)}function Oy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Lp,r)}function zy(n){switch(n){case 5126:return yy;case 35664:return Sy;case 35665:return My;case 35666:return by;case 35674:return Ey;case 35675:return wy;case 35676:return Ty;case 5124:case 35670:return Ay;case 35667:case 35671:return Ry;case 35668:case 35672:return Cy;case 35669:case 35673:return Py;case 5125:return Ly;case 36294:return Dy;case 36295:return Iy;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ny;case 35679:case 36299:case 36307:return ky;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return Oy}}function By(n,e){n.uniform1fv(this.addr,e)}function Hy(n,e){const t=yo(e,this.size,2);n.uniform2fv(this.addr,t)}function Vy(n,e){const t=yo(e,this.size,3);n.uniform3fv(this.addr,t)}function Gy(n,e){const t=yo(e,this.size,4);n.uniform4fv(this.addr,t)}function Wy(n,e){const t=yo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Xy(n,e){const t=yo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qy(n,e){const t=yo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Yy(n,e){n.uniform1iv(this.addr,e)}function $y(n,e){n.uniform2iv(this.addr,e)}function jy(n,e){n.uniform3iv(this.addr,e)}function Zy(n,e){n.uniform4iv(this.addr,e)}function Ky(n,e){n.uniform1uiv(this.addr,e)}function Jy(n,e){n.uniform2uiv(this.addr,e)}function Qy(n,e){n.uniform3uiv(this.addr,e)}function eS(n,e){n.uniform4uiv(this.addr,e)}function tS(n,e,t){const i=this.cache,r=e.length,s=Zc(t,r);Rn(i,s)||(n.uniform1iv(this.addr,s),Cn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Pp,s[o])}function nS(n,e,t){const i=this.cache,r=e.length,s=Zc(t,r);Rn(i,s)||(n.uniform1iv(this.addr,s),Cn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Dp,s[o])}function iS(n,e,t){const i=this.cache,r=e.length,s=Zc(t,r);Rn(i,s)||(n.uniform1iv(this.addr,s),Cn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ip,s[o])}function rS(n,e,t){const i=this.cache,r=e.length,s=Zc(t,r);Rn(i,s)||(n.uniform1iv(this.addr,s),Cn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Lp,s[o])}function sS(n){switch(n){case 5126:return By;case 35664:return Hy;case 35665:return Vy;case 35666:return Gy;case 35674:return Wy;case 35675:return Xy;case 35676:return qy;case 5124:case 35670:return Yy;case 35667:case 35671:return $y;case 35668:case 35672:return jy;case 35669:case 35673:return Zy;case 5125:return Ky;case 36294:return Jy;case 36295:return Qy;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return nS;case 35680:case 36300:case 36308:case 36293:return iS;case 36289:case 36303:case 36311:case 36292:return rS}}class oS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zy(t.type)}}class aS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sS(t.type)}}class cS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Hl=/(\w+)(\])?(\[|\.)?/g;function jh(n,e){n.seq.push(e),n.map[e.id]=e}function lS(n,e,t){const i=n.name,r=i.length;for(Hl.lastIndex=0;;){const s=Hl.exec(i),o=Hl.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){jh(t,l===void 0?new oS(a,n,e):new aS(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new cS(a),jh(t,u)),t=u}}}class Ec{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);lS(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Zh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const dS=37297;let uS=0;function hS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Kh=new Mt;function fS(n){zt._getMatrix(Kh,zt.workingColorSpace,n);const e=`mat3( ${Kh.elements.map(t=>t.toFixed(4))} )`;switch(zt.getTransfer(n)){case Pc:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Jh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+hS(n.getShaderSource(e),a)}else return s}function pS(n,e){const t=fS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mS(n,e){let t;switch(e){case wg:t="Linear";break;case Tg:t="Reinhard";break;case Ag:t="Cineon";break;case Rg:t="ACESFilmic";break;case Pg:t="AgX";break;case Lg:t="Neutral";break;case Cg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const dc=new b;function gS(){zt.getLuminanceCoefficients(dc);const n=dc.x.toFixed(4),e=dc.y.toFixed(4),t=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _S(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function vS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ho(n){return n!==""}function Qh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ef(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(n){return n.replace(yS,MS)}const SS=new Map;function MS(n,e){let t=bt[e];if(t===void 0){const i=SS.get(e);if(i!==void 0)t=bt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kd(t)}const bS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tf(n){return n.replace(bS,ES)}function ES(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function wS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$f?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===rg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ur&&(e="SHADOWMAP_TYPE_VSM"),e}function TS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ao:case co:e="ENVMAP_TYPE_CUBE";break;case $c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AS(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===co&&(e="ENVMAP_MODE_REFRACTION"),e}function RS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jf:e="ENVMAP_BLENDING_MULTIPLY";break;case bg:e="ENVMAP_BLENDING_MIX";break;case Eg:e="ENVMAP_BLENDING_ADD";break}return e}function CS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function PS(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=wS(t),l=TS(t),d=AS(t),u=RS(t),h=CS(t),f=_S(t),m=vS(s),_=r.createProgram();let g,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ho).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ho).join(`
`),p.length>0&&(p+=`
`)):(g=[nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),p=[nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Or?"#define TONE_MAPPING":"",t.toneMapping!==Or?bt.tonemapping_pars_fragment:"",t.toneMapping!==Or?mS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,pS("linearToOutputTexel",t.outputColorSpace),gS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ho).join(`
`)),o=Kd(o),o=Qh(o,t),o=ef(o,t),a=Kd(a),a=Qh(a,t),a=ef(a,t),o=tf(o),a=tf(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=E+g+o,v=E+p+a,A=Zh(r,r.VERTEX_SHADER,x),C=Zh(r,r.FRAGMENT_SHADER,v);r.attachShader(_,A),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(U){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(_)||"",W=r.getShaderInfoLog(A)||"",V=r.getShaderInfoLog(C)||"",ne=F.trim(),Z=W.trim(),de=V.trim();let X=!0,oe=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,C);else{const we=Jh(r,A,"vertex"),Be=Jh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+ne+`
`+we+`
`+Be)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(Z===""||de==="")&&(oe=!1);oe&&(U.diagnostics={runnable:X,programLog:ne,vertexShader:{log:Z,prefix:g},fragmentShader:{log:de,prefix:p}})}r.deleteShader(A),r.deleteShader(C),I=new Ec(r,_),M=xS(r,_)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,dS)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=C,this}let LS=0;class DS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new IS(e),t.set(e,i)),i}}class IS{constructor(e){this.id=LS++,this.code=e,this.usedTimes=0}}function US(n,e,t,i,r,s,o){const a=new Su,c=new DS,l=new Set,d=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,y,U,F,W){const V=F.fog,ne=W.geometry,Z=M.isMeshStandardMaterial?F.environment:null,de=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),X=de&&de.mapping===$c?de.image.height:null,oe=m[M.type];M.precision!==null&&(f=r.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const we=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Be=we!==void 0?we.length:0;let Ye=0;ne.morphAttributes.position!==void 0&&(Ye=1),ne.morphAttributes.normal!==void 0&&(Ye=2),ne.morphAttributes.color!==void 0&&(Ye=3);let yt,vt,Y,Te;if(oe){const Le=Ki[oe];yt=Le.vertexShader,vt=Le.fragmentShader}else yt=M.vertexShader,vt=M.fragmentShader,c.update(M),Y=c.getVertexShaderID(M),Te=c.getFragmentShaderID(M);const G=n.getRenderTarget(),le=n.state.buffers.depth.getReversed(),Se=W.isInstancedMesh===!0,$=W.isBatchedMesh===!0,te=!!M.map,ue=!!M.matcap,L=!!de,Pe=!!M.aoMap,Me=!!M.lightMap,$e=!!M.bumpMap,ie=!!M.normalMap,Ze=!!M.displacementMap,xe=!!M.emissiveMap,ae=!!M.metalnessMap,ce=!!M.roughnessMap,be=M.anisotropy>0,R=M.clearcoat>0,S=M.dispersion>0,O=M.iridescence>0,ee=M.sheen>0,Q=M.transmission>0,J=be&&!!M.anisotropyMap,He=R&&!!M.clearcoatMap,ge=R&&!!M.clearcoatNormalMap,We=R&&!!M.clearcoatRoughnessMap,Ke=O&&!!M.iridescenceMap,_e=O&&!!M.iridescenceThicknessMap,Re=ee&&!!M.sheenColorMap,rt=ee&&!!M.sheenRoughnessMap,Fe=!!M.specularMap,De=!!M.specularColorMap,Qe=!!M.specularIntensityMap,N=Q&&!!M.transmissionMap,ye=Q&&!!M.thicknessMap,Ce=!!M.gradientMap,Ve=!!M.alphaMap,he=M.alphaTest>0,se=!!M.alphaHash,Xe=!!M.extensions;let re=Or;M.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(re=n.toneMapping);const qe={shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:yt,fragmentShader:vt,defines:M.defines,customVertexShaderID:Y,customFragmentShaderID:Te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:$,batchingColor:$&&W._colorsTexture!==null,instancing:Se,instancingColor:Se&&W.instanceColor!==null,instancingMorph:Se&&W.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:G===null?n.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:lo,alphaToCoverage:!!M.alphaToCoverage,map:te,matcap:ue,envMap:L,envMapMode:L&&de.mapping,envMapCubeUVHeight:X,aoMap:Pe,lightMap:Me,bumpMap:$e,normalMap:ie,displacementMap:h&&Ze,emissiveMap:xe,normalMapObjectSpace:ie&&M.normalMapType===kg,normalMapTangentSpace:ie&&M.normalMapType===Ng,metalnessMap:ae,roughnessMap:ce,anisotropy:be,anisotropyMap:J,clearcoat:R,clearcoatMap:He,clearcoatNormalMap:ge,clearcoatRoughnessMap:We,dispersion:S,iridescence:O,iridescenceMap:Ke,iridescenceThicknessMap:_e,sheen:ee,sheenColorMap:Re,sheenRoughnessMap:rt,specularMap:Fe,specularColorMap:De,specularIntensityMap:Qe,transmission:Q,transmissionMap:N,thicknessMap:ye,gradientMap:Ce,opaque:M.transparent===!1&&M.blending===Js&&M.alphaToCoverage===!1,alphaMap:Ve,alphaTest:he,alphaHash:se,combine:M.combine,mapUv:te&&_(M.map.channel),aoMapUv:Pe&&_(M.aoMap.channel),lightMapUv:Me&&_(M.lightMap.channel),bumpMapUv:$e&&_(M.bumpMap.channel),normalMapUv:ie&&_(M.normalMap.channel),displacementMapUv:Ze&&_(M.displacementMap.channel),emissiveMapUv:xe&&_(M.emissiveMap.channel),metalnessMapUv:ae&&_(M.metalnessMap.channel),roughnessMapUv:ce&&_(M.roughnessMap.channel),anisotropyMapUv:J&&_(M.anisotropyMap.channel),clearcoatMapUv:He&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ge&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:rt&&_(M.sheenRoughnessMap.channel),specularMapUv:Fe&&_(M.specularMap.channel),specularColorMapUv:De&&_(M.specularColorMap.channel),specularIntensityMapUv:Qe&&_(M.specularIntensityMap.channel),transmissionMapUv:N&&_(M.transmissionMap.channel),thicknessMapUv:ye&&_(M.thicknessMap.channel),alphaMapUv:Ve&&_(M.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(ie||be),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ne.attributes.uv&&(te||Ve),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:le,skinning:W.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:Ye,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:te&&M.map.isVideoTexture===!0&&zt.getTransfer(M.map.colorSpace)===qt,decodeVideoTextureEmissive:xe&&M.emissiveMap.isVideoTexture===!0&&zt.getTransfer(M.emissiveMap.colorSpace)===qt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ln,flipSided:M.side===li,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Xe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&M.extensions.multiDraw===!0||$)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)y.push(U),y.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(E(y,M),x(y,M),y.push(n.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function E(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const y=m[M.type];let U;if(y){const F=Ki[y];U=T0.clone(F.uniforms)}else U=M.uniforms;return U}function A(M,y){let U;for(let F=0,W=d.length;F<W;F++){const V=d[F];if(V.cacheKey===y){U=V,++U.usedTimes;break}}return U===void 0&&(U=new PS(n,y,M,s),d.push(U)),U}function C(M){if(--M.usedTimes===0){const y=d.indexOf(M);d[y]=d[d.length-1],d.pop(),M.destroy()}}function P(M){c.remove(M)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:C,releaseShaderCache:P,programs:d,dispose:I}}function NS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function kS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function rf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,h,f,m,_,g){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},n[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function a(u,h,f,m,_,g){const p=o(u,h,f,m,_,g);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(u,h,f,m,_,g){const p=o(u,h,f,m,_,g);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(u,h){t.length>1&&t.sort(u||kS),i.length>1&&i.sort(h||rf),r.length>1&&r.sort(h||rf)}function d(){for(let u=e,h=n.length;u<h;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:d,sort:l}}function FS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new sf,n.set(i,[o])):r>=s.length?(o=new sf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function OS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new It};break;case"SpotLight":t={position:new b,direction:new b,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new It,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new It,groundColor:new It};break;case"RectAreaLight":t={color:new It,position:new b,halfWidth:new b,halfHeight:new b};break}return n[e.id]=t,t}}}function zS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let BS=0;function HS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function VS(n){const e=new OS,t=zS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new b);const r=new b,s=new Gt,o=new Gt;function a(l){let d=0,u=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,E=0,x=0,v=0,A=0,C=0,P=0;l.sort(HS);for(let M=0,y=l.length;M<y;M++){const U=l[M],F=U.color,W=U.intensity,V=U.distance,ne=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=F.r*W,u+=F.g*W,h+=F.b*W;else if(U.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(U.sh.coefficients[Z],W);P++}else if(U.isDirectionalLight){const Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const de=U.shadow,X=t.get(U);X.shadowIntensity=de.intensity,X.shadowBias=de.bias,X.shadowNormalBias=de.normalBias,X.shadowRadius=de.radius,X.shadowMapSize=de.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=ne,i.directionalShadowMatrix[f]=U.shadow.matrix,E++}i.directional[f]=Z,f++}else if(U.isSpotLight){const Z=e.get(U);Z.position.setFromMatrixPosition(U.matrixWorld),Z.color.copy(F).multiplyScalar(W),Z.distance=V,Z.coneCos=Math.cos(U.angle),Z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Z.decay=U.decay,i.spot[_]=Z;const de=U.shadow;if(U.map&&(i.spotLightMap[A]=U.map,A++,de.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[_]=de.matrix,U.castShadow){const X=t.get(U);X.shadowIntensity=de.intensity,X.shadowBias=de.bias,X.shadowNormalBias=de.normalBias,X.shadowRadius=de.radius,X.shadowMapSize=de.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=ne,v++}_++}else if(U.isRectAreaLight){const Z=e.get(U);Z.color.copy(F).multiplyScalar(W),Z.halfWidth.set(U.width*.5,0,0),Z.halfHeight.set(0,U.height*.5,0),i.rectArea[g]=Z,g++}else if(U.isPointLight){const Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),Z.distance=U.distance,Z.decay=U.decay,U.castShadow){const de=U.shadow,X=t.get(U);X.shadowIntensity=de.intensity,X.shadowBias=de.bias,X.shadowNormalBias=de.normalBias,X.shadowRadius=de.radius,X.shadowMapSize=de.mapSize,X.shadowCameraNear=de.camera.near,X.shadowCameraFar=de.camera.far,i.pointShadow[m]=X,i.pointShadowMap[m]=ne,i.pointShadowMatrix[m]=U.shadow.matrix,x++}i.point[m]=Z,m++}else if(U.isHemisphereLight){const Z=e.get(U);Z.skyColor.copy(U.color).multiplyScalar(W),Z.groundColor.copy(U.groundColor).multiplyScalar(W),i.hemi[p]=Z,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_FLOAT_1,i.rectAreaLTC2=ze.LTC_FLOAT_2):(i.rectAreaLTC1=ze.LTC_HALF_1,i.rectAreaLTC2=ze.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;const I=i.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==E||I.numPointShadows!==x||I.numSpotShadows!==v||I.numSpotMaps!==A||I.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,I.directionalLength=f,I.pointLength=m,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=E,I.numPointShadows=x,I.numSpotShadows=v,I.numSpotMaps=A,I.numLightProbes=P,i.version=BS++)}function c(l,d){let u=0,h=0,f=0,m=0,_=0;const g=d.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const x=l[p];if(x.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),u++}else if(x.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),h++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:i}}function of(n){const e=new VS(n),t=[],i=[];function r(d){l.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function GS(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new of(n),e.set(r,[a])):s>=o.length?(a=new of(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const WS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XS=`uniform sampler2D shadow_pass;
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
}`;function qS(n,e,t){let i=new Mu;const r=new Oe,s=new Oe,o=new Wt,a=new p_({depthPacking:Ug}),c=new m_,l={},d=t.maxTextureSize,u={[gr]:li,[li]:gr,[ln]:ln},h=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:WS,fragmentShader:XS}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ut;m.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ae(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$f;let p=this.type;this.render=function(C,P,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const M=n.getRenderTarget(),y=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Fr),F.buffers.depth.getReversed()?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=p!==ur&&this.type===ur,V=p===ur&&this.type!==ur;for(let ne=0,Z=C.length;ne<Z;ne++){const de=C[ne],X=de.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const oe=X.getFrameExtents();if(r.multiply(oe),s.copy(X.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/oe.x),r.x=s.x*oe.x,X.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/oe.y),r.y=s.y*oe.y,X.mapSize.y=s.y)),X.map===null||W===!0||V===!0){const Be=this.type!==ur?{minFilter:Wi,magFilter:Wi}:{};X.map!==null&&X.map.dispose(),X.map=new Ms(r.x,r.y,Be),X.map.texture.name=de.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const we=X.getViewportCount();for(let Be=0;Be<we;Be++){const Ye=X.getViewport(Be);o.set(s.x*Ye.x,s.y*Ye.y,s.x*Ye.z,s.y*Ye.w),F.viewport(o),X.updateMatrices(de,Be),i=X.getFrustum(),v(P,I,X.camera,de,this.type)}X.isPointLightShadow!==!0&&this.type===ur&&E(X,I),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(M,y,U)};function E(C,P){const I=e.update(_);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ms(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,I,h,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,I,f,_,null)}function x(C,P,I,M){let y=null;const U=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)y=U;else if(y=I.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=y.uuid,W=P.uuid;let V=l[F];V===void 0&&(V={},l[F]=V);let ne=V[W];ne===void 0&&(ne=y.clone(),V[W]=ne,P.addEventListener("dispose",A)),y=ne}if(y.visible=P.visible,y.wireframe=P.wireframe,M===ur?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:u[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=n.properties.get(y);F.light=I}return y}function v(C,P,I,M,y){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===ur)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const W=e.update(C),V=C.material;if(Array.isArray(V)){const ne=W.groups;for(let Z=0,de=ne.length;Z<de;Z++){const X=ne[Z],oe=V[X.materialIndex];if(oe&&oe.visible){const we=x(C,oe,M,y);C.onBeforeShadow(n,C,P,I,W,we,X),n.renderBufferDirect(I,null,W,we,C,X),C.onAfterShadow(n,C,P,I,W,we,X)}}}else if(V.visible){const ne=x(C,V,M,y);C.onBeforeShadow(n,C,P,I,W,ne,null),n.renderBufferDirect(I,null,W,ne,C,null),C.onAfterShadow(n,C,P,I,W,ne,null)}}const F=C.children;for(let W=0,V=F.length;W<V;W++)v(F[W],P,I,M,y)}function A(C){C.target.removeEventListener("dispose",A);for(const I in l){const M=l[I],y=C.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const YS={[dd]:ud,[hd]:md,[fd]:gd,[oo]:pd,[ud]:dd,[md]:hd,[gd]:fd,[pd]:oo};function $S(n,e){function t(){let N=!1;const ye=new Wt;let Ce=null;const Ve=new Wt(0,0,0,0);return{setMask:function(he){Ce!==he&&!N&&(n.colorMask(he,he,he,he),Ce=he)},setLocked:function(he){N=he},setClear:function(he,se,Xe,re,qe){qe===!0&&(he*=re,se*=re,Xe*=re),ye.set(he,se,Xe,re),Ve.equals(ye)===!1&&(n.clearColor(he,se,Xe,re),Ve.copy(ye))},reset:function(){N=!1,Ce=null,Ve.set(-1,0,0,0)}}}function i(){let N=!1,ye=!1,Ce=null,Ve=null,he=null;return{setReversed:function(se){if(ye!==se){const Xe=e.get("EXT_clip_control");se?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),ye=se;const re=he;he=null,this.setClear(re)}},getReversed:function(){return ye},setTest:function(se){se?G(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(se){Ce!==se&&!N&&(n.depthMask(se),Ce=se)},setFunc:function(se){if(ye&&(se=YS[se]),Ve!==se){switch(se){case dd:n.depthFunc(n.NEVER);break;case ud:n.depthFunc(n.ALWAYS);break;case hd:n.depthFunc(n.LESS);break;case oo:n.depthFunc(n.LEQUAL);break;case fd:n.depthFunc(n.EQUAL);break;case pd:n.depthFunc(n.GEQUAL);break;case md:n.depthFunc(n.GREATER);break;case gd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ve=se}},setLocked:function(se){N=se},setClear:function(se){he!==se&&(ye&&(se=1-se),n.clearDepth(se),he=se)},reset:function(){N=!1,Ce=null,Ve=null,he=null,ye=!1}}}function r(){let N=!1,ye=null,Ce=null,Ve=null,he=null,se=null,Xe=null,re=null,qe=null;return{setTest:function(Le){N||(Le?G(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(Le){ye!==Le&&!N&&(n.stencilMask(Le),ye=Le)},setFunc:function(Le,gt,At){(Ce!==Le||Ve!==gt||he!==At)&&(n.stencilFunc(Le,gt,At),Ce=Le,Ve=gt,he=At)},setOp:function(Le,gt,At){(se!==Le||Xe!==gt||re!==At)&&(n.stencilOp(Le,gt,At),se=Le,Xe=gt,re=At)},setLocked:function(Le){N=Le},setClear:function(Le){qe!==Le&&(n.clearStencil(Le),qe=Le)},reset:function(){N=!1,ye=null,Ce=null,Ve=null,he=null,se=null,Xe=null,re=null,qe=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let d={},u={},h=new WeakMap,f=[],m=null,_=!1,g=null,p=null,E=null,x=null,v=null,A=null,C=null,P=new It(0,0,0),I=0,M=!1,y=null,U=null,F=null,W=null,V=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,de=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=de>=1):X.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=de>=2);let oe=null,we={};const Be=n.getParameter(n.SCISSOR_BOX),Ye=n.getParameter(n.VIEWPORT),yt=new Wt().fromArray(Be),vt=new Wt().fromArray(Ye);function Y(N,ye,Ce,Ve){const he=new Uint8Array(4),se=n.createTexture();n.bindTexture(N,se),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<Ce;Xe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,Ve,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(ye+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return se}const Te={};Te[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),G(n.DEPTH_TEST),o.setFunc(oo),$e(!1),ie(Yu),G(n.CULL_FACE),Pe(Fr);function G(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function le(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function Se(N,ye){return u[N]!==ye?(n.bindFramebuffer(N,ye),u[N]=ye,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ye),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function $(N,ye){let Ce=f,Ve=!1;if(N){Ce=h.get(ye),Ce===void 0&&(Ce=[],h.set(ye,Ce));const he=N.textures;if(Ce.length!==he.length||Ce[0]!==n.COLOR_ATTACHMENT0){for(let se=0,Xe=he.length;se<Xe;se++)Ce[se]=n.COLOR_ATTACHMENT0+se;Ce.length=he.length,Ve=!0}}else Ce[0]!==n.BACK&&(Ce[0]=n.BACK,Ve=!0);Ve&&n.drawBuffers(Ce)}function te(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const ue={[as]:n.FUNC_ADD,[og]:n.FUNC_SUBTRACT,[ag]:n.FUNC_REVERSE_SUBTRACT};ue[cg]=n.MIN,ue[lg]=n.MAX;const L={[dg]:n.ZERO,[ug]:n.ONE,[hg]:n.SRC_COLOR,[cd]:n.SRC_ALPHA,[vg]:n.SRC_ALPHA_SATURATE,[gg]:n.DST_COLOR,[pg]:n.DST_ALPHA,[fg]:n.ONE_MINUS_SRC_COLOR,[ld]:n.ONE_MINUS_SRC_ALPHA,[_g]:n.ONE_MINUS_DST_COLOR,[mg]:n.ONE_MINUS_DST_ALPHA,[xg]:n.CONSTANT_COLOR,[yg]:n.ONE_MINUS_CONSTANT_COLOR,[Sg]:n.CONSTANT_ALPHA,[Mg]:n.ONE_MINUS_CONSTANT_ALPHA};function Pe(N,ye,Ce,Ve,he,se,Xe,re,qe,Le){if(N===Fr){_===!0&&(le(n.BLEND),_=!1);return}if(_===!1&&(G(n.BLEND),_=!0),N!==sg){if(N!==g||Le!==M){if((p!==as||v!==as)&&(n.blendEquation(n.FUNC_ADD),p=as,v=as),Le)switch(N){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ad:n.blendFunc(n.ONE,n.ONE);break;case $u:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ju:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ad:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $u:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ju:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,x=null,A=null,C=null,P.set(0,0,0),I=0,g=N,M=Le}return}he=he||ye,se=se||Ce,Xe=Xe||Ve,(ye!==p||he!==v)&&(n.blendEquationSeparate(ue[ye],ue[he]),p=ye,v=he),(Ce!==E||Ve!==x||se!==A||Xe!==C)&&(n.blendFuncSeparate(L[Ce],L[Ve],L[se],L[Xe]),E=Ce,x=Ve,A=se,C=Xe),(re.equals(P)===!1||qe!==I)&&(n.blendColor(re.r,re.g,re.b,qe),P.copy(re),I=qe),g=N,M=!1}function Me(N,ye){N.side===ln?le(n.CULL_FACE):G(n.CULL_FACE);let Ce=N.side===li;ye&&(Ce=!Ce),$e(Ce),N.blending===Js&&N.transparent===!1?Pe(Fr):Pe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const Ve=N.stencilWrite;a.setTest(Ve),Ve&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),xe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?G(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function $e(N){y!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),y=N)}function ie(N){N!==ng?(G(n.CULL_FACE),N!==U&&(N===Yu?n.cullFace(n.BACK):N===ig?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),U=N}function Ze(N){N!==F&&(Z&&n.lineWidth(N),F=N)}function xe(N,ye,Ce){N?(G(n.POLYGON_OFFSET_FILL),(W!==ye||V!==Ce)&&(n.polygonOffset(ye,Ce),W=ye,V=Ce)):le(n.POLYGON_OFFSET_FILL)}function ae(N){N?G(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function ce(N){N===void 0&&(N=n.TEXTURE0+ne-1),oe!==N&&(n.activeTexture(N),oe=N)}function be(N,ye,Ce){Ce===void 0&&(oe===null?Ce=n.TEXTURE0+ne-1:Ce=oe);let Ve=we[Ce];Ve===void 0&&(Ve={type:void 0,texture:void 0},we[Ce]=Ve),(Ve.type!==N||Ve.texture!==ye)&&(oe!==Ce&&(n.activeTexture(Ce),oe=Ce),n.bindTexture(N,ye||Te[N]),Ve.type=N,Ve.texture=ye)}function R(){const N=we[oe];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function He(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function We(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ke(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(N){yt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),yt.copy(N))}function rt(N){vt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),vt.copy(N))}function Fe(N,ye){let Ce=l.get(ye);Ce===void 0&&(Ce=new WeakMap,l.set(ye,Ce));let Ve=Ce.get(N);Ve===void 0&&(Ve=n.getUniformBlockIndex(ye,N.name),Ce.set(N,Ve))}function De(N,ye){const Ve=l.get(ye).get(N);c.get(ye)!==Ve&&(n.uniformBlockBinding(ye,Ve,N.__bindingPointIndex),c.set(ye,Ve))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},oe=null,we={},u={},h=new WeakMap,f=[],m=null,_=!1,g=null,p=null,E=null,x=null,v=null,A=null,C=null,P=new It(0,0,0),I=0,M=!1,y=null,U=null,F=null,W=null,V=null,yt.set(0,0,n.canvas.width,n.canvas.height),vt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:G,disable:le,bindFramebuffer:Se,drawBuffers:$,useProgram:te,setBlending:Pe,setMaterial:Me,setFlipSided:$e,setCullFace:ie,setLineWidth:Ze,setPolygonOffset:xe,setScissorTest:ae,activeTexture:ce,bindTexture:be,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:O,texImage2D:Ke,texImage3D:_e,updateUBOMapping:Fe,uniformBlockBinding:De,texStorage2D:ge,texStorage3D:We,texSubImage2D:ee,texSubImage3D:Q,compressedTexSubImage2D:J,compressedTexSubImage3D:He,scissor:Re,viewport:rt,reset:Qe}}function jS(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,S){return f?new OffscreenCanvas(R,S):Ic("canvas")}function _(R,S,O){let ee=1;const Q=be(R);if((Q.width>O||Q.height>O)&&(ee=O/Math.max(Q.width,Q.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(ee*Q.width),He=Math.floor(ee*Q.height);u===void 0&&(u=m(J,He));const ge=S?m(J,He):u;return ge.width=J,ge.height=He,ge.getContext("2d").drawImage(R,0,0,J,He),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+He+")."),ge}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,S,O,ee,Q=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=S;if(S===n.RED&&(O===n.FLOAT&&(J=n.R32F),O===n.HALF_FLOAT&&(J=n.R16F),O===n.UNSIGNED_BYTE&&(J=n.R8)),S===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(J=n.R8UI),O===n.UNSIGNED_SHORT&&(J=n.R16UI),O===n.UNSIGNED_INT&&(J=n.R32UI),O===n.BYTE&&(J=n.R8I),O===n.SHORT&&(J=n.R16I),O===n.INT&&(J=n.R32I)),S===n.RG&&(O===n.FLOAT&&(J=n.RG32F),O===n.HALF_FLOAT&&(J=n.RG16F),O===n.UNSIGNED_BYTE&&(J=n.RG8)),S===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(J=n.RG8UI),O===n.UNSIGNED_SHORT&&(J=n.RG16UI),O===n.UNSIGNED_INT&&(J=n.RG32UI),O===n.BYTE&&(J=n.RG8I),O===n.SHORT&&(J=n.RG16I),O===n.INT&&(J=n.RG32I)),S===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(J=n.RGB8UI),O===n.UNSIGNED_SHORT&&(J=n.RGB16UI),O===n.UNSIGNED_INT&&(J=n.RGB32UI),O===n.BYTE&&(J=n.RGB8I),O===n.SHORT&&(J=n.RGB16I),O===n.INT&&(J=n.RGB32I)),S===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),O===n.UNSIGNED_INT&&(J=n.RGBA32UI),O===n.BYTE&&(J=n.RGBA8I),O===n.SHORT&&(J=n.RGBA16I),O===n.INT&&(J=n.RGBA32I)),S===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),S===n.RGBA){const He=Q?Pc:zt.getTransfer(ee);O===n.FLOAT&&(J=n.RGBA32F),O===n.HALF_FLOAT&&(J=n.RGBA16F),O===n.UNSIGNED_BYTE&&(J=He===qt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(R,S){let O;return R?S===null||S===Ss||S===ia?O=n.DEPTH24_STENCIL8:S===fr?O=n.DEPTH32F_STENCIL8:S===na&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ss||S===ia?O=n.DEPTH_COMPONENT24:S===fr?O=n.DEPTH_COMPONENT32F:S===na&&(O=n.DEPTH_COMPONENT16),O}function A(R,S){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Wi&&R.minFilter!==Ji?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function C(R){const S=R.target;S.removeEventListener("dispose",C),I(S),S.isVideoTexture&&d.delete(S)}function P(R){const S=R.target;S.removeEventListener("dispose",P),y(S)}function I(R){const S=i.get(R);if(S.__webglInit===void 0)return;const O=R.source,ee=h.get(O);if(ee){const Q=ee[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(R),Object.keys(ee).length===0&&h.delete(O)}i.remove(R)}function M(R){const S=i.get(R);n.deleteTexture(S.__webglTexture);const O=R.source,ee=h.get(O);delete ee[S.__cacheKey],o.memory.textures--}function y(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(S.__webglFramebuffer[ee]))for(let Q=0;Q<S.__webglFramebuffer[ee].length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[ee][Q]);else n.deleteFramebuffer(S.__webglFramebuffer[ee]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[ee])}else{if(Array.isArray(S.__webglFramebuffer))for(let ee=0;ee<S.__webglFramebuffer.length;ee++)n.deleteFramebuffer(S.__webglFramebuffer[ee]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ee=0;ee<S.__webglColorRenderbuffer.length;ee++)S.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[ee]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=R.textures;for(let ee=0,Q=O.length;ee<Q;ee++){const J=i.get(O[ee]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(O[ee])}i.remove(R)}let U=0;function F(){U=0}function W(){const R=U;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),U+=1,R}function V(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function ne(R,S){const O=i.get(R);if(R.isVideoTexture&&ae(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(O,R,S);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+S)}function Z(R,S){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){Te(O,R,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+S)}function de(R,S){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){Te(O,R,S);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+S)}function X(R,S){const O=i.get(R);if(R.version>0&&O.__version!==R.version){G(O,R,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+S)}const oe={[xd]:n.REPEAT,[us]:n.CLAMP_TO_EDGE,[yd]:n.MIRRORED_REPEAT},we={[Wi]:n.NEAREST,[Dg]:n.NEAREST_MIPMAP_NEAREST,[Fa]:n.NEAREST_MIPMAP_LINEAR,[Ji]:n.LINEAR,[al]:n.LINEAR_MIPMAP_NEAREST,[hs]:n.LINEAR_MIPMAP_LINEAR},Be={[Fg]:n.NEVER,[Gg]:n.ALWAYS,[Og]:n.LESS,[sp]:n.LEQUAL,[zg]:n.EQUAL,[Vg]:n.GEQUAL,[Bg]:n.GREATER,[Hg]:n.NOTEQUAL};function Ye(R,S){if(S.type===fr&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ji||S.magFilter===al||S.magFilter===Fa||S.magFilter===hs||S.minFilter===Ji||S.minFilter===al||S.minFilter===Fa||S.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,oe[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,oe[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,oe[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,we[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,we[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Be[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wi||S.minFilter!==Fa&&S.minFilter!==hs||S.type===fr&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function yt(R,S){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C));const ee=S.source;let Q=h.get(ee);Q===void 0&&(Q={},h.set(ee,Q));const J=V(S);if(J!==R.__cacheKey){Q[J]===void 0&&(Q[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[J].usedTimes++;const He=Q[R.__cacheKey];He!==void 0&&(Q[R.__cacheKey].usedTimes--,He.usedTimes===0&&M(S)),R.__cacheKey=J,R.__webglTexture=Q[J].texture}return O}function vt(R,S,O){return Math.floor(Math.floor(R/O)/S)}function Y(R,S,O,ee){const J=R.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,O,ee,S.data);else{J.sort((_e,Re)=>_e.start-Re.start);let He=0;for(let _e=1;_e<J.length;_e++){const Re=J[He],rt=J[_e],Fe=Re.start+Re.count,De=vt(rt.start,S.width,4),Qe=vt(Re.start,S.width,4);rt.start<=Fe+1&&De===Qe&&vt(rt.start+rt.count-1,S.width,4)===De?Re.count=Math.max(Re.count,rt.start+rt.count-Re.start):(++He,J[He]=rt)}J.length=He+1;const ge=n.getParameter(n.UNPACK_ROW_LENGTH),We=n.getParameter(n.UNPACK_SKIP_PIXELS),Ke=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let _e=0,Re=J.length;_e<Re;_e++){const rt=J[_e],Fe=Math.floor(rt.start/4),De=Math.ceil(rt.count/4),Qe=Fe%S.width,N=Math.floor(Fe/S.width),ye=De,Ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,Qe,N,ye,Ce,O,ee,S.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ge),n.pixelStorei(n.UNPACK_SKIP_PIXELS,We),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ke)}}function Te(R,S,O){let ee=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ee=n.TEXTURE_3D);const Q=yt(R,S),J=S.source;t.bindTexture(ee,R.__webglTexture,n.TEXTURE0+O);const He=i.get(J);if(J.version!==He.__version||Q===!0){t.activeTexture(n.TEXTURE0+O);const ge=zt.getPrimaries(zt.workingColorSpace),We=S.colorSpace===Ur?null:zt.getPrimaries(S.colorSpace),Ke=S.colorSpace===Ur||ge===We?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let _e=_(S.image,!1,r.maxTextureSize);_e=ce(S,_e);const Re=s.convert(S.format,S.colorSpace),rt=s.convert(S.type);let Fe=x(S.internalFormat,Re,rt,S.colorSpace,S.isVideoTexture);Ye(ee,S);let De;const Qe=S.mipmaps,N=S.isVideoTexture!==!0,ye=He.__version===void 0||Q===!0,Ce=J.dataReady,Ve=A(S,_e);if(S.isDepthTexture)Fe=v(S.format===sa,S.type),ye&&(N?t.texStorage2D(n.TEXTURE_2D,1,Fe,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Re,rt,null));else if(S.isDataTexture)if(Qe.length>0){N&&ye&&t.texStorage2D(n.TEXTURE_2D,Ve,Fe,Qe[0].width,Qe[0].height);for(let he=0,se=Qe.length;he<se;he++)De=Qe[he],N?Ce&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,De.width,De.height,Re,rt,De.data):t.texImage2D(n.TEXTURE_2D,he,Fe,De.width,De.height,0,Re,rt,De.data);S.generateMipmaps=!1}else N?(ye&&t.texStorage2D(n.TEXTURE_2D,Ve,Fe,_e.width,_e.height),Ce&&Y(S,_e,Re,rt)):t.texImage2D(n.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Re,rt,_e.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){N&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,Fe,Qe[0].width,Qe[0].height,_e.depth);for(let he=0,se=Qe.length;he<se;he++)if(De=Qe[he],S.format!==Vi)if(Re!==null)if(N){if(Ce)if(S.layerUpdates.size>0){const Xe=Nh(De.width,De.height,S.format,S.type);for(const re of S.layerUpdates){const qe=De.data.subarray(re*Xe/De.data.BYTES_PER_ELEMENT,(re+1)*Xe/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,re,De.width,De.height,1,Re,qe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,De.width,De.height,_e.depth,Re,De.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,Fe,De.width,De.height,_e.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?Ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,De.width,De.height,_e.depth,Re,rt,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,Fe,De.width,De.height,_e.depth,0,Re,rt,De.data)}else{N&&ye&&t.texStorage2D(n.TEXTURE_2D,Ve,Fe,Qe[0].width,Qe[0].height);for(let he=0,se=Qe.length;he<se;he++)De=Qe[he],S.format!==Vi?Re!==null?N?Ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,De.width,De.height,Re,De.data):t.compressedTexImage2D(n.TEXTURE_2D,he,Fe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?Ce&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,De.width,De.height,Re,rt,De.data):t.texImage2D(n.TEXTURE_2D,he,Fe,De.width,De.height,0,Re,rt,De.data)}else if(S.isDataArrayTexture)if(N){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ve,Fe,_e.width,_e.height,_e.depth),Ce)if(S.layerUpdates.size>0){const he=Nh(_e.width,_e.height,S.format,S.type);for(const se of S.layerUpdates){const Xe=_e.data.subarray(se*he/_e.data.BYTES_PER_ELEMENT,(se+1)*he/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,_e.width,_e.height,1,Re,rt,Xe)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Re,rt,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,_e.width,_e.height,_e.depth,0,Re,rt,_e.data);else if(S.isData3DTexture)N?(ye&&t.texStorage3D(n.TEXTURE_3D,Ve,Fe,_e.width,_e.height,_e.depth),Ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Re,rt,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,_e.width,_e.height,_e.depth,0,Re,rt,_e.data);else if(S.isFramebufferTexture){if(ye)if(N)t.texStorage2D(n.TEXTURE_2D,Ve,Fe,_e.width,_e.height);else{let he=_e.width,se=_e.height;for(let Xe=0;Xe<Ve;Xe++)t.texImage2D(n.TEXTURE_2D,Xe,Fe,he,se,0,Re,rt,null),he>>=1,se>>=1}}else if(Qe.length>0){if(N&&ye){const he=be(Qe[0]);t.texStorage2D(n.TEXTURE_2D,Ve,Fe,he.width,he.height)}for(let he=0,se=Qe.length;he<se;he++)De=Qe[he],N?Ce&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,Re,rt,De):t.texImage2D(n.TEXTURE_2D,he,Fe,Re,rt,De);S.generateMipmaps=!1}else if(N){if(ye){const he=be(_e);t.texStorage2D(n.TEXTURE_2D,Ve,Fe,he.width,he.height)}Ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,rt,_e)}else t.texImage2D(n.TEXTURE_2D,0,Fe,Re,rt,_e);g(S)&&p(ee),He.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function G(R,S,O){if(S.image.length!==6)return;const ee=yt(R,S),Q=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+O);const J=i.get(Q);if(Q.version!==J.__version||ee===!0){t.activeTexture(n.TEXTURE0+O);const He=zt.getPrimaries(zt.workingColorSpace),ge=S.colorSpace===Ur?null:zt.getPrimaries(S.colorSpace),We=S.colorSpace===Ur||He===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const Ke=S.isCompressedTexture||S.image[0].isCompressedTexture,_e=S.image[0]&&S.image[0].isDataTexture,Re=[];for(let se=0;se<6;se++)!Ke&&!_e?Re[se]=_(S.image[se],!0,r.maxCubemapSize):Re[se]=_e?S.image[se].image:S.image[se],Re[se]=ce(S,Re[se]);const rt=Re[0],Fe=s.convert(S.format,S.colorSpace),De=s.convert(S.type),Qe=x(S.internalFormat,Fe,De,S.colorSpace),N=S.isVideoTexture!==!0,ye=J.__version===void 0||ee===!0,Ce=Q.dataReady;let Ve=A(S,rt);Ye(n.TEXTURE_CUBE_MAP,S);let he;if(Ke){N&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,Qe,rt.width,rt.height);for(let se=0;se<6;se++){he=Re[se].mipmaps;for(let Xe=0;Xe<he.length;Xe++){const re=he[Xe];S.format!==Vi?Fe!==null?N?Ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Xe,0,0,re.width,re.height,Fe,re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Xe,Qe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Xe,0,0,re.width,re.height,Fe,De,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Xe,Qe,re.width,re.height,0,Fe,De,re.data)}}}else{if(he=S.mipmaps,N&&ye){he.length>0&&Ve++;const se=be(Re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,Qe,se.width,se.height)}for(let se=0;se<6;se++)if(_e){N?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Re[se].width,Re[se].height,Fe,De,Re[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,Re[se].width,Re[se].height,0,Fe,De,Re[se].data);for(let Xe=0;Xe<he.length;Xe++){const qe=he[Xe].image[se].image;N?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Xe+1,0,0,qe.width,qe.height,Fe,De,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Xe+1,Qe,qe.width,qe.height,0,Fe,De,qe.data)}}else{N?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Fe,De,Re[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,Fe,De,Re[se]);for(let Xe=0;Xe<he.length;Xe++){const re=he[Xe];N?Ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Xe+1,0,0,Fe,De,re.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Xe+1,Qe,Fe,De,re.image[se])}}}g(S)&&p(n.TEXTURE_CUBE_MAP),J.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function le(R,S,O,ee,Q,J){const He=s.convert(O.format,O.colorSpace),ge=s.convert(O.type),We=x(O.internalFormat,He,ge,O.colorSpace),Ke=i.get(S),_e=i.get(O);if(_e.__renderTarget=S,!Ke.__hasExternalTextures){const Re=Math.max(1,S.width>>J),rt=Math.max(1,S.height>>J);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,J,We,Re,rt,S.depth,0,He,ge,null):t.texImage2D(Q,J,We,Re,rt,0,He,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),xe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,Q,_e.__webglTexture,0,Ze(S)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,Q,_e.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Se(R,S,O){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){const ee=S.depthTexture,Q=ee&&ee.isDepthTexture?ee.type:null,J=v(S.stencilBuffer,Q),He=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=Ze(S);xe(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,J,S.width,S.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,J,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,J,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,He,n.RENDERBUFFER,R)}else{const ee=S.textures;for(let Q=0;Q<ee.length;Q++){const J=ee[Q],He=s.convert(J.format,J.colorSpace),ge=s.convert(J.type),We=x(J.internalFormat,He,ge,J.colorSpace),Ke=Ze(S);O&&xe(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,We,S.width,S.height):xe(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke,We,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,We,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function $(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(S.depthTexture);ee.__renderTarget=S,(!ee.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ne(S.depthTexture,0);const Q=ee.__webglTexture,J=Ze(S);if(S.depthTexture.format===ra)xe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(S.depthTexture.format===sa)xe(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function te(R){const S=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const ee=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ee){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ee.removeEventListener("dispose",Q)};ee.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=ee}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const ee=R.texture.mipmaps;ee&&ee.length>0?$(S.__webglFramebuffer[0],R):$(S.__webglFramebuffer,R)}else if(O){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]===void 0)S.__webglDepthbuffer[ee]=n.createRenderbuffer(),Se(S.__webglDepthbuffer[ee],R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,J)}}else{const ee=R.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Se(S.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(R,S,O){const ee=i.get(R);S!==void 0&&le(ee.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&te(R)}function L(R){const S=R.texture,O=i.get(R),ee=i.get(S);R.addEventListener("dispose",P);const Q=R.textures,J=R.isWebGLCubeRenderTarget===!0,He=Q.length>1;if(He||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=S.version,o.memory.textures++),J){O.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[ge]=[];for(let We=0;We<S.mipmaps.length;We++)O.__webglFramebuffer[ge][We]=n.createFramebuffer()}else O.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let ge=0;ge<S.mipmaps.length;ge++)O.__webglFramebuffer[ge]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(He)for(let ge=0,We=Q.length;ge<We;ge++){const Ke=i.get(Q[ge]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&xe(R)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ge=0;ge<Q.length;ge++){const We=Q[ge];O.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ge]);const Ke=s.convert(We.format,We.colorSpace),_e=s.convert(We.type),Re=x(We.internalFormat,Ke,_e,We.colorSpace,R.isXRRenderTarget===!0),rt=Ze(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,Re,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,O.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Ye(n.TEXTURE_CUBE_MAP,S);for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0)for(let We=0;We<S.mipmaps.length;We++)le(O.__webglFramebuffer[ge][We],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We);else le(O.__webglFramebuffer[ge],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(S)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let ge=0,We=Q.length;ge<We;ge++){const Ke=Q[ge],_e=i.get(Ke);let Re=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Re=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Re,_e.__webglTexture),Ye(Re,Ke),le(O.__webglFramebuffer,R,Ke,n.COLOR_ATTACHMENT0+ge,Re,0),g(Ke)&&p(Re)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ge=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,ee.__webglTexture),Ye(ge,S),S.mipmaps&&S.mipmaps.length>0)for(let We=0;We<S.mipmaps.length;We++)le(O.__webglFramebuffer[We],R,S,n.COLOR_ATTACHMENT0,ge,We);else le(O.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,ge,0);g(S)&&p(ge),t.unbindTexture()}R.depthBuffer&&te(R)}function Pe(R){const S=R.textures;for(let O=0,ee=S.length;O<ee;O++){const Q=S[O];if(g(Q)){const J=E(R),He=i.get(Q).__webglTexture;t.bindTexture(J,He),p(J),t.unbindTexture()}}}const Me=[],$e=[];function ie(R){if(R.samples>0){if(xe(R)===!1){const S=R.textures,O=R.width,ee=R.height;let Q=n.COLOR_BUFFER_BIT;const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,He=i.get(R),ge=S.length>1;if(ge)for(let Ke=0;Ke<S.length;Ke++)t.bindFramebuffer(n.FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,He.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const We=R.texture.mipmaps;We&&We.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Ke=0;Ke<S.length;Ke++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,He.__webglColorRenderbuffer[Ke]);const _e=i.get(S[Ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,O,ee,0,0,O,ee,Q,n.NEAREST),c===!0&&(Me.length=0,$e.length=0,Me.push(n.COLOR_ATTACHMENT0+Ke),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Me.push(J),$e.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$e)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Ke=0;Ke<S.length;Ke++){t.bindFramebuffer(n.FRAMEBUFFER,He.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.RENDERBUFFER,He.__webglColorRenderbuffer[Ke]);const _e=i.get(S[Ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,He.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ke,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Ze(R){return Math.min(r.maxSamples,R.samples)}function xe(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ae(R){const S=o.render.frame;d.get(R)!==S&&(d.set(R,S),R.update())}function ce(R,S){const O=R.colorSpace,ee=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==lo&&O!==Ur&&(zt.getTransfer(O)===qt?(ee!==Vi||Q!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=F,this.setTexture2D=ne,this.setTexture2DArray=Z,this.setTexture3D=de,this.setTextureCube=X,this.rebindTextures=ue,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=le,this.useMultisampledRTT=xe}function ZS(n,e){function t(i,r=Ur){let s;const o=zt.getTransfer(r);if(i===ir)return n.UNSIGNED_BYTE;if(i===pu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===mu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kf)return n.BYTE;if(i===Jf)return n.SHORT;if(i===na)return n.UNSIGNED_SHORT;if(i===fu)return n.INT;if(i===Ss)return n.UNSIGNED_INT;if(i===fr)return n.FLOAT;if(i===wa)return n.HALF_FLOAT;if(i===ep)return n.ALPHA;if(i===tp)return n.RGB;if(i===Vi)return n.RGBA;if(i===ra)return n.DEPTH_COMPONENT;if(i===sa)return n.DEPTH_STENCIL;if(i===np)return n.RED;if(i===gu)return n.RED_INTEGER;if(i===ip)return n.RG;if(i===_u)return n.RG_INTEGER;if(i===vu)return n.RGBA_INTEGER;if(i===xc||i===yc||i===Sc||i===Mc)if(o===qt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sd||i===Md||i===bd||i===Ed)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Md)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ed)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wd||i===Td||i===Ad)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wd||i===Td)return o===qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ad)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rd||i===Cd||i===Pd||i===Ld||i===Dd||i===Id||i===Ud||i===Nd||i===kd||i===Fd||i===Od||i===zd||i===Bd||i===Hd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rd)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cd)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pd)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ld)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dd)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Id)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ud)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nd)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kd)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fd)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Od)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zd)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bd)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hd)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bc||i===Vd||i===Gd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bc)return o===qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rp||i===Wd||i===Xd||i===qd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ia?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Up extends di{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const KS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JS=`
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

}`;class QS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Up(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new _r({vertexShader:KS,fragmentShader:JS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new Br(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eM extends As{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,d=null,u=null,h=null,f=null,m=null;const _=new QS,g={},p=t.getContextAttributes();let E=null,x=null;const v=[],A=[],C=new Oe;let P=null;const I=new yi;I.viewport=new Wt;const M=new yi;M.viewport=new Wt;const y=[I,M],U=new S_;let F=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Te=v[Y];return Te===void 0&&(Te=new Rl,v[Y]=Te),Te.getTargetRaySpace()},this.getControllerGrip=function(Y){let Te=v[Y];return Te===void 0&&(Te=new Rl,v[Y]=Te),Te.getGripSpace()},this.getHand=function(Y){let Te=v[Y];return Te===void 0&&(Te=new Rl,v[Y]=Te),Te.getHandSpace()};function V(Y){const Te=A.indexOf(Y.inputSource);if(Te===-1)return;const G=v[Te];G!==void 0&&(G.update(Y.inputSource,Y.frame,l||o),G.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ne(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<v.length;Y++){const Te=A[Y];Te!==null&&(A[Y]=null,v[Y].disconnect(Te))}F=null,W=null,_.reset();for(const Y in g)delete g[Y];e.setRenderTarget(E),f=null,h=null,u=null,r=null,x=null,vt.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(r,t)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let G=null,le=null,Se=null;p.depth&&(Se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=p.stencil?sa:ra,le=p.stencil?ia:Ss);const $={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};h=u.createProjectionLayer($),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Ms(h.textureWidth,h.textureHeight,{format:Vi,type:ir,depthTexture:new _p(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const G={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,G),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ms(f.framebufferWidth,f.framebufferHeight,{format:Vi,type:ir,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),vt.setContext(r),vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(Y){for(let Te=0;Te<Y.removed.length;Te++){const G=Y.removed[Te],le=A.indexOf(G);le>=0&&(A[le]=null,v[le].disconnect(G))}for(let Te=0;Te<Y.added.length;Te++){const G=Y.added[Te];let le=A.indexOf(G);if(le===-1){for(let $=0;$<v.length;$++)if($>=A.length){A.push(G),le=$;break}else if(A[$]===null){A[$]=G,le=$;break}if(le===-1)break}const Se=v[le];Se&&Se.connect(G)}}const de=new b,X=new b;function oe(Y,Te,G){de.setFromMatrixPosition(Te.matrixWorld),X.setFromMatrixPosition(G.matrixWorld);const le=de.distanceTo(X),Se=Te.projectionMatrix.elements,$=G.projectionMatrix.elements,te=Se[14]/(Se[10]-1),ue=Se[14]/(Se[10]+1),L=(Se[9]+1)/Se[5],Pe=(Se[9]-1)/Se[5],Me=(Se[8]-1)/Se[0],$e=($[8]+1)/$[0],ie=te*Me,Ze=te*$e,xe=le/(-Me+$e),ae=xe*-Me;if(Te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ae),Y.translateZ(xe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Se[10]===-1)Y.projectionMatrix.copy(Te.projectionMatrix),Y.projectionMatrixInverse.copy(Te.projectionMatrixInverse);else{const ce=te+xe,be=ue+xe,R=ie-ae,S=Ze+(le-ae),O=L*ue/be*ce,ee=Pe*ue/be*ce;Y.projectionMatrix.makePerspective(R,S,O,ee,ce,be),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function we(Y,Te){Te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let Te=Y.near,G=Y.far;_.texture!==null&&(_.depthNear>0&&(Te=_.depthNear),_.depthFar>0&&(G=_.depthFar)),U.near=M.near=I.near=Te,U.far=M.far=I.far=G,(F!==U.near||W!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),F=U.near,W=U.far),U.layers.mask=Y.layers.mask|6,I.layers.mask=U.layers.mask&3,M.layers.mask=U.layers.mask&5;const le=Y.parent,Se=U.cameras;we(U,le);for(let $=0;$<Se.length;$++)we(Se[$],le);Se.length===2?oe(U,I,M):U.projectionMatrix.copy(I.projectionMatrix),Be(Y,U,le)};function Be(Y,Te,G){G===null?Y.matrix.copy(Te.matrixWorld):(Y.matrix.copy(G.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Te.projectionMatrix),Y.projectionMatrixInverse.copy(Te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=oa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Y){c=Y,h!==null&&(h.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(U)},this.getCameraTexture=function(Y){return g[Y]};let Ye=null;function yt(Y,Te){if(d=Te.getViewerPose(l||o),m=Te,d!==null){const G=d.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let le=!1;G.length!==U.cameras.length&&(U.cameras.length=0,le=!0);for(let ue=0;ue<G.length;ue++){const L=G[ue];let Pe=null;if(f!==null)Pe=f.getViewport(L);else{const $e=u.getViewSubImage(h,L);Pe=$e.viewport,ue===0&&(e.setRenderTargetTextures(x,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(x))}let Me=y[ue];Me===void 0&&(Me=new yi,Me.layers.enable(ue),Me.viewport=new Wt,y[ue]=Me),Me.matrix.fromArray(L.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(L.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ue===0&&(U.matrix.copy(Me.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),le===!0&&U.cameras.push(Me)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const ue=u.getDepthInformation(G[0]);ue&&ue.isValid&&ue.texture&&_.init(ue,r.renderState)}if(Se&&Se.includes("camera-access")&&(e.state.unbindTexture(),u))for(let ue=0;ue<G.length;ue++){const L=G[ue].camera;if(L){let Pe=g[L];Pe||(Pe=new Up,g[L]=Pe);const Me=u.getCameraImage(L);Pe.sourceTexture=Me}}}for(let G=0;G<v.length;G++){const le=A[G],Se=v[G];le!==null&&Se!==void 0&&Se.update(le,Te,l||o)}Ye&&Ye(Y,Te),Te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Te}),m=null}const vt=new Cp;vt.setAnimationLoop(yt),this.setAnimationLoop=function(Y){Ye=Y},this.dispose=function(){}}}const ts=new $n,tM=new Gt;function nM(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,up(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,E,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),d(g,p)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,E,x):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===li&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===li&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const E=e.get(p),x=E.envMap,v=E.envMapRotation;x&&(g.envMap.value=x,ts.copy(v),ts.x*=-1,ts.y*=-1,ts.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),g.envMapRotation.value.setFromMatrix4(tM.makeRotationFromEuler(ts)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,E,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===li&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const E=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,x){const v=x.program;i.uniformBlockBinding(E,v)}function l(E,x){let v=r[E.id];v===void 0&&(m(E),v=d(E),r[E.id]=v,E.addEventListener("dispose",g));const A=x.program;i.updateUBOMapping(E,A);const C=e.render.frame;s[E.id]!==C&&(h(E),s[E.id]=C)}function d(E){const x=u();E.__bindingPointIndex=x;const v=n.createBuffer(),A=E.__size,C=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,A,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const x=r[E.id],v=E.uniforms,A=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,P=v.length;C<P;C++){const I=Array.isArray(v[C])?v[C]:[v[C]];for(let M=0,y=I.length;M<y;M++){const U=I[M];if(f(U,C,M,A)===!0){const F=U.__offset,W=Array.isArray(U.value)?U.value:[U.value];let V=0;for(let ne=0;ne<W.length;ne++){const Z=W[ne],de=_(Z);typeof Z=="number"||typeof Z=="boolean"?(U.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,F+V,U.__data)):Z.isMatrix3?(U.__data[0]=Z.elements[0],U.__data[1]=Z.elements[1],U.__data[2]=Z.elements[2],U.__data[3]=0,U.__data[4]=Z.elements[3],U.__data[5]=Z.elements[4],U.__data[6]=Z.elements[5],U.__data[7]=0,U.__data[8]=Z.elements[6],U.__data[9]=Z.elements[7],U.__data[10]=Z.elements[8],U.__data[11]=0):(Z.toArray(U.__data,V),V+=de.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,x,v,A){const C=E.value,P=x+"_"+v;if(A[P]===void 0)return typeof C=="number"||typeof C=="boolean"?A[P]=C:A[P]=C.clone(),!0;{const I=A[P];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return A[P]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function m(E){const x=E.uniforms;let v=0;const A=16;for(let P=0,I=x.length;P<I;P++){const M=Array.isArray(x[P])?x[P]:[x[P]];for(let y=0,U=M.length;y<U;y++){const F=M[y],W=Array.isArray(F.value)?F.value:[F.value];for(let V=0,ne=W.length;V<ne;V++){const Z=W[V],de=_(Z),X=v%A,oe=X%de.boundary,we=X+oe;v+=oe,we!==0&&A-we<de.storage&&(v+=A-we),F.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=de.storage}}}const C=v%A;return C>0&&(v+=A-C),E.__size=v,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function g(E){const x=E.target;x.removeEventListener("dispose",g);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class rM{constructor(e={}){const{canvas:t=o0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const E=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=ni;let C=0,P=0,I=null,M=-1,y=null;const U=new Wt,F=new Wt;let W=null;const V=new It(0);let ne=0,Z=t.width,de=t.height,X=1,oe=null,we=null;const Be=new Wt(0,0,Z,de),Ye=new Wt(0,0,Z,de);let yt=!1;const vt=new Mu;let Y=!1,Te=!1;const G=new Gt,le=new b,Se=new Wt,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function ue(){return I===null?X:1}let L=i;function Pe(w,z){return t.getContext(w,z)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hu}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",he,!1),L===null){const z="webgl2";if(L=Pe(z,w),L===null)throw Pe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Me,$e,ie,Ze,xe,ae,ce,be,R,S,O,ee,Q,J,He,ge,We,Ke,_e,Re,rt,Fe,De,Qe;function N(){Me=new py(L),Me.init(),Fe=new ZS(L,Me),$e=new ay(L,Me,e,Fe),ie=new $S(L,Me),$e.reversedDepthBuffer&&h&&ie.buffers.depth.setReversed(!0),Ze=new _y(L),xe=new NS,ae=new jS(L,Me,ie,xe,$e,Fe,Ze),ce=new ly(v),be=new fy(v),R=new b_(L),De=new sy(L,R),S=new my(L,R,Ze,De),O=new xy(L,S,R,Ze),_e=new vy(L,$e,ae),ge=new cy(xe),ee=new US(v,ce,be,Me,$e,De,ge),Q=new nM(v,xe),J=new FS,He=new GS(Me),Ke=new ry(v,ce,be,ie,O,f,c),We=new qS(v,O,$e),Qe=new iM(L,Ze,$e,ie),Re=new oy(L,Me,Ze),rt=new gy(L,Me,Ze),Ze.programs=ee.programs,v.capabilities=$e,v.extensions=Me,v.properties=xe,v.renderLists=J,v.shadowMap=We,v.state=ie,v.info=Ze}N();const ye=new eM(v,L);this.xr=ye,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(Z,de,!1))},this.getSize=function(w){return w.set(Z,de)},this.setSize=function(w,z,j=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,de=z,t.width=Math.floor(w*X),t.height=Math.floor(z*X),j===!0&&(t.style.width=w+"px",t.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(Z*X,de*X).floor()},this.setDrawingBufferSize=function(w,z,j){Z=w,de=z,X=j,t.width=Math.floor(w*j),t.height=Math.floor(z*j),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(Be)},this.setViewport=function(w,z,j,K){w.isVector4?Be.set(w.x,w.y,w.z,w.w):Be.set(w,z,j,K),ie.viewport(U.copy(Be).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(Ye)},this.setScissor=function(w,z,j,K){w.isVector4?Ye.set(w.x,w.y,w.z,w.w):Ye.set(w,z,j,K),ie.scissor(F.copy(Ye).multiplyScalar(X).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(w){ie.setScissorTest(yt=w)},this.setOpaqueSort=function(w){oe=w},this.setTransparentSort=function(w){we=w},this.getClearColor=function(w){return w.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(w=!0,z=!0,j=!0){let K=0;if(w){let B=!1;if(I!==null){const Ee=I.texture.format;B=Ee===vu||Ee===_u||Ee===gu}if(B){const Ee=I.texture.type,Ie=Ee===ir||Ee===Ss||Ee===na||Ee===ia||Ee===pu||Ee===mu,je=Ke.getClearColor(),Ge=Ke.getClearAlpha(),at=je.r,pt=je.g,ft=je.b;Ie?(m[0]=at,m[1]=pt,m[2]=ft,m[3]=Ge,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=at,_[1]=pt,_[2]=ft,_[3]=Ge,L.clearBufferiv(L.COLOR,0,_))}else K|=L.COLOR_BUFFER_BIT}z&&(K|=L.DEPTH_BUFFER_BIT),j&&(K|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Ke.dispose(),J.dispose(),He.dispose(),xe.dispose(),ce.dispose(),be.dispose(),O.dispose(),De.dispose(),Qe.dispose(),ee.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",At),ye.removeEventListener("sessionend",mi),Ti.stop()};function Ce(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=Ze.autoReset,z=We.enabled,j=We.autoUpdate,K=We.needsUpdate,B=We.type;N(),Ze.autoReset=w,We.enabled=z,We.autoUpdate=j,We.needsUpdate=K,We.type=B}function he(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function se(w){const z=w.target;z.removeEventListener("dispose",se),Xe(z)}function Xe(w){re(w),xe.remove(w)}function re(w){const z=xe.get(w).programs;z!==void 0&&(z.forEach(function(j){ee.releaseProgram(j)}),w.isShaderMaterial&&ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,j,K,B,Ee){z===null&&(z=$);const Ie=B.isMesh&&B.matrixWorld.determinant()<0,je=ka(w,z,j,K,B);ie.setMaterial(K,Ie);let Ge=j.index,at=1;if(K.wireframe===!0){if(Ge=S.getWireframeAttribute(j),Ge===void 0)return;at=2}const pt=j.drawRange,ft=j.attributes.position;let Rt=pt.start*at,Ot=(pt.start+pt.count)*at;Ee!==null&&(Rt=Math.max(Rt,Ee.start*at),Ot=Math.min(Ot,(Ee.start+Ee.count)*at)),Ge!==null?(Rt=Math.max(Rt,0),Ot=Math.min(Ot,Ge.count)):ft!=null&&(Rt=Math.max(Rt,0),Ot=Math.min(Ot,ft.count));const on=Ot-Rt;if(on<0||on===1/0)return;De.setup(B,K,je,j,Ge);let jt,Nt=Re;if(Ge!==null&&(jt=R.get(Ge),Nt=rt,Nt.setIndex(jt)),B.isMesh)K.wireframe===!0?(ie.setLineWidth(K.wireframeLinewidth*ue()),Nt.setMode(L.LINES)):Nt.setMode(L.TRIANGLES);else if(B.isLine){let lt=K.linewidth;lt===void 0&&(lt=1),ie.setLineWidth(lt*ue()),B.isLineSegments?Nt.setMode(L.LINES):B.isLineLoop?Nt.setMode(L.LINE_LOOP):Nt.setMode(L.LINE_STRIP)}else B.isPoints?Nt.setMode(L.POINTS):B.isSprite&&Nt.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Qs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Nt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const lt=B._multiDrawStarts,Zt=B._multiDrawCounts,St=B._multiDrawCount,Pn=Ge?R.get(Ge).bytesPerElement:1,Sr=xe.get(K).currentProgram.getUniforms();for(let Zn=0;Zn<St;Zn++)Sr.setValue(L,"_gl_DrawID",Zn),Nt.render(lt[Zn]/Pn,Zt[Zn])}else if(B.isInstancedMesh)Nt.renderInstances(Rt,on,B.count);else if(j.isInstancedBufferGeometry){const lt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Zt=Math.min(j.instanceCount,lt);Nt.renderInstances(Rt,on,Zt)}else Nt.render(Rt,on)};function qe(w,z,j){w.transparent===!0&&w.side===ln&&w.forceSinglePass===!1?(w.side=li,w.needsUpdate=!0,gi(w,z,j),w.side=gr,w.needsUpdate=!0,gi(w,z,j),w.side=ln):gi(w,z,j)}this.compile=function(w,z,j=null){j===null&&(j=w),p=He.get(j),p.init(z),x.push(p),j.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==j&&w.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const K=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const Ee=B.material;if(Ee)if(Array.isArray(Ee))for(let Ie=0;Ie<Ee.length;Ie++){const je=Ee[Ie];qe(je,j,B),K.add(je)}else qe(Ee,j,B),K.add(Ee)}),p=x.pop(),K},this.compileAsync=function(w,z,j=null){const K=this.compile(w,z,j);return new Promise(B=>{function Ee(){if(K.forEach(function(Ie){xe.get(Ie).currentProgram.isReady()&&K.delete(Ie)}),K.size===0){B(w);return}setTimeout(Ee,10)}Me.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Le=null;function gt(w){Le&&Le(w)}function At(){Ti.stop()}function mi(){Ti.start()}const Ti=new Cp;Ti.setAnimationLoop(gt),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(w){Le=w,ye.setAnimationLoop(w),w===null?Ti.stop():Ti.start()},ye.addEventListener("sessionstart",At),ye.addEventListener("sessionend",mi),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(z),z=ye.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,z,I),p=He.get(w,x.length),p.init(z),x.push(p),G.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),vt.setFromProjectionMatrix(G,Qi,z.reversedDepth),Te=this.localClippingEnabled,Y=ge.init(this.clippingPlanes,Te),g=J.get(w,E.length),g.init(),E.push(g),ye.enabled===!0&&ye.isPresenting===!0){const Ee=v.xr.getDepthSensingMesh();Ee!==null&&Ps(Ee,z,-1/0,v.sortObjects)}Ps(w,z,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(oe,we),te=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,te&&Ke.addToRenderList(g,w),this.info.render.frame++,Y===!0&&ge.beginShadows();const j=p.state.shadowsArray;We.render(j,w,z),Y===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=g.opaque,B=g.transmissive;if(p.setupLights(),z.isArrayCamera){const Ee=z.cameras;if(B.length>0)for(let Ie=0,je=Ee.length;Ie<je;Ie++){const Ge=Ee[Ie];To(K,B,w,Ge)}te&&Ke.render(w);for(let Ie=0,je=Ee.length;Ie<je;Ie++){const Ge=Ee[Ie];wo(g,w,Ge,Ge.viewport)}}else B.length>0&&To(K,B,w,z),te&&Ke.render(w),wo(g,w,z);I!==null&&P===0&&(ae.updateMultisampleRenderTarget(I),ae.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(v,w,z),De.resetDefaultState(),M=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],Y===!0&&ge.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function Ps(w,z,j,K){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||vt.intersectsSprite(w)){K&&Se.setFromMatrixPosition(w.matrixWorld).applyMatrix4(G);const Ie=O.update(w),je=w.material;je.visible&&g.push(w,Ie,je,j,Se.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||vt.intersectsObject(w))){const Ie=O.update(w),je=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Se.copy(w.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Se.copy(Ie.boundingSphere.center)),Se.applyMatrix4(w.matrixWorld).applyMatrix4(G)),Array.isArray(je)){const Ge=Ie.groups;for(let at=0,pt=Ge.length;at<pt;at++){const ft=Ge[at],Rt=je[ft.materialIndex];Rt&&Rt.visible&&g.push(w,Ie,Rt,j,Se.z,ft)}}else je.visible&&g.push(w,Ie,je,j,Se.z,null)}}const Ee=w.children;for(let Ie=0,je=Ee.length;Ie<je;Ie++)Ps(Ee[Ie],z,j,K)}function wo(w,z,j,K){const B=w.opaque,Ee=w.transmissive,Ie=w.transparent;p.setupLightsView(j),Y===!0&&ge.setGlobalState(v.clippingPlanes,j),K&&ie.viewport(U.copy(K)),B.length>0&&xr(B,z,j),Ee.length>0&&xr(Ee,z,j),Ie.length>0&&xr(Ie,z,j),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function To(w,z,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Ms(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?wa:ir,minFilter:hs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace}));const Ee=p.state.transmissionRenderTarget[K.id],Ie=K.viewport||U;Ee.setSize(Ie.z*v.transmissionResolutionScale,Ie.w*v.transmissionResolutionScale);const je=v.getRenderTarget(),Ge=v.getActiveCubeFace(),at=v.getActiveMipmapLevel();v.setRenderTarget(Ee),v.getClearColor(V),ne=v.getClearAlpha(),ne<1&&v.setClearColor(16777215,.5),v.clear(),te&&Ke.render(j);const pt=v.toneMapping;v.toneMapping=Or;const ft=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),Y===!0&&ge.setGlobalState(v.clippingPlanes,K),xr(w,j,K),ae.updateMultisampleRenderTarget(Ee),ae.updateRenderTargetMipmap(Ee),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Ot=0,on=z.length;Ot<on;Ot++){const jt=z[Ot],Nt=jt.object,lt=jt.geometry,Zt=jt.material,St=jt.group;if(Zt.side===ln&&Nt.layers.test(K.layers)){const Pn=Zt.side;Zt.side=li,Zt.needsUpdate=!0,qr(Nt,j,K,lt,Zt,St),Zt.side=Pn,Zt.needsUpdate=!0,Rt=!0}}Rt===!0&&(ae.updateMultisampleRenderTarget(Ee),ae.updateRenderTargetMipmap(Ee))}v.setRenderTarget(je,Ge,at),v.setClearColor(V,ne),ft!==void 0&&(K.viewport=ft),v.toneMapping=pt}function xr(w,z,j){const K=z.isScene===!0?z.overrideMaterial:null;for(let B=0,Ee=w.length;B<Ee;B++){const Ie=w[B],je=Ie.object,Ge=Ie.geometry,at=Ie.group;let pt=Ie.material;pt.allowOverride===!0&&K!==null&&(pt=K),je.layers.test(j.layers)&&qr(je,z,j,Ge,pt,at)}}function qr(w,z,j,K,B,Ee){w.onBeforeRender(v,z,j,K,B,Ee),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(v,z,j,K,w,Ee),B.transparent===!0&&B.side===ln&&B.forceSinglePass===!1?(B.side=li,B.needsUpdate=!0,v.renderBufferDirect(j,z,K,B,w,Ee),B.side=gr,B.needsUpdate=!0,v.renderBufferDirect(j,z,K,B,w,Ee),B.side=ln):v.renderBufferDirect(j,z,K,B,w,Ee),w.onAfterRender(v,z,j,K,B,Ee)}function gi(w,z,j){z.isScene!==!0&&(z=$);const K=xe.get(w),B=p.state.lights,Ee=p.state.shadowsArray,Ie=B.state.version,je=ee.getParameters(w,B.state,Ee,z,j),Ge=ee.getProgramCacheKey(je);let at=K.programs;K.environment=w.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(w.isMeshStandardMaterial?be:ce).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,at===void 0&&(w.addEventListener("dispose",se),at=new Map,K.programs=at);let pt=at.get(Ge);if(pt!==void 0){if(K.currentProgram===pt&&K.lightsStateVersion===Ie)return si(w,je),pt}else je.uniforms=ee.getUniforms(w),w.onBeforeCompile(je,v),pt=ee.acquireProgram(je,Ge),at.set(Ge,pt),K.uniforms=je.uniforms;const ft=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ft.clippingPlanes=ge.uniform),si(w,je),K.needsLights=kn(w),K.lightsStateVersion=Ie,K.needsLights&&(ft.ambientLightColor.value=B.state.ambient,ft.lightProbe.value=B.state.probe,ft.directionalLights.value=B.state.directional,ft.directionalLightShadows.value=B.state.directionalShadow,ft.spotLights.value=B.state.spot,ft.spotLightShadows.value=B.state.spotShadow,ft.rectAreaLights.value=B.state.rectArea,ft.ltc_1.value=B.state.rectAreaLTC1,ft.ltc_2.value=B.state.rectAreaLTC2,ft.pointLights.value=B.state.point,ft.pointLightShadows.value=B.state.pointShadow,ft.hemisphereLights.value=B.state.hemi,ft.directionalShadowMap.value=B.state.directionalShadowMap,ft.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ft.spotShadowMap.value=B.state.spotShadowMap,ft.spotLightMatrix.value=B.state.spotLightMatrix,ft.spotLightMap.value=B.state.spotLightMap,ft.pointShadowMap.value=B.state.pointShadowMap,ft.pointShadowMatrix.value=B.state.pointShadowMatrix),K.currentProgram=pt,K.uniformsList=null,pt}function zn(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=Ec.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function si(w,z){const j=xe.get(w);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function ka(w,z,j,K,B){z.isScene!==!0&&(z=$),ae.resetTextureUnits();const Ee=z.fog,Ie=K.isMeshStandardMaterial?z.environment:null,je=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:lo,Ge=(K.isMeshStandardMaterial?be:ce).get(K.envMap||Ie),at=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pt=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ft=!!j.morphAttributes.position,Rt=!!j.morphAttributes.normal,Ot=!!j.morphAttributes.color;let on=Or;K.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(on=v.toneMapping);const jt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Nt=jt!==void 0?jt.length:0,lt=xe.get(K),Zt=p.state.lights;if(Y===!0&&(Te===!0||w!==y)){const D=w===y&&K.id===M;ge.setState(K,w,D)}let St=!1;K.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==Zt.state.version||lt.outputColorSpace!==je||B.isBatchedMesh&&lt.batching===!1||!B.isBatchedMesh&&lt.batching===!0||B.isBatchedMesh&&lt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&lt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&lt.instancing===!1||!B.isInstancedMesh&&lt.instancing===!0||B.isSkinnedMesh&&lt.skinning===!1||!B.isSkinnedMesh&&lt.skinning===!0||B.isInstancedMesh&&lt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&lt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&lt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&lt.instancingMorph===!1&&B.morphTexture!==null||lt.envMap!==Ge||K.fog===!0&&lt.fog!==Ee||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==ge.numPlanes||lt.numIntersection!==ge.numIntersection)||lt.vertexAlphas!==at||lt.vertexTangents!==pt||lt.morphTargets!==ft||lt.morphNormals!==Rt||lt.morphColors!==Ot||lt.toneMapping!==on||lt.morphTargetsCount!==Nt)&&(St=!0):(St=!0,lt.__version=K.version);let Pn=lt.currentProgram;St===!0&&(Pn=gi(K,z,B));let Sr=!1,Zn=!1,Mr=!1;const Kt=Pn.getUniforms(),Kn=lt.uniforms;if(ie.useProgram(Pn.program)&&(Sr=!0,Zn=!0,Mr=!0),K.id!==M&&(M=K.id,Zn=!0),Sr||y!==w){ie.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Kt.setValue(L,"projectionMatrix",w.projectionMatrix),Kt.setValue(L,"viewMatrix",w.matrixWorldInverse);const k=Kt.map.cameraPosition;k!==void 0&&k.setValue(L,le.setFromMatrixPosition(w.matrixWorld)),$e.logarithmicDepthBuffer&&Kt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Kt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Zn=!0,Mr=!0)}if(B.isSkinnedMesh){Kt.setOptional(L,B,"bindMatrix"),Kt.setOptional(L,B,"bindMatrixInverse");const D=B.skeleton;D&&(D.boneTexture===null&&D.computeBoneTexture(),Kt.setValue(L,"boneTexture",D.boneTexture,ae))}B.isBatchedMesh&&(Kt.setOptional(L,B,"batchingTexture"),Kt.setValue(L,"batchingTexture",B._matricesTexture,ae),Kt.setOptional(L,B,"batchingIdTexture"),Kt.setValue(L,"batchingIdTexture",B._indirectTexture,ae),Kt.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&Kt.setValue(L,"batchingColorTexture",B._colorsTexture,ae));const T=j.morphAttributes;if((T.position!==void 0||T.normal!==void 0||T.color!==void 0)&&_e.update(B,j,Pn),(Zn||lt.receiveShadow!==B.receiveShadow)&&(lt.receiveShadow=B.receiveShadow,Kt.setValue(L,"receiveShadow",B.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Kn.envMap.value=Ge,Kn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(Kn.envMapIntensity.value=z.environmentIntensity),Zn&&(Kt.setValue(L,"toneMappingExposure",v.toneMappingExposure),lt.needsLights&&yr(Kn,Mr),Ee&&K.fog===!0&&Q.refreshFogUniforms(Kn,Ee),Q.refreshMaterialUniforms(Kn,K,X,de,p.state.transmissionRenderTarget[w.id]),Ec.upload(L,zn(lt),Kn,ae)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ec.upload(L,zn(lt),Kn,ae),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Kt.setValue(L,"center",B.center),Kt.setValue(L,"modelViewMatrix",B.modelViewMatrix),Kt.setValue(L,"normalMatrix",B.normalMatrix),Kt.setValue(L,"modelMatrix",B.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const D=K.uniformsGroups;for(let k=0,H=D.length;k<H;k++){const q=D[k];Qe.update(q,Pn),Qe.bind(q,Pn)}}return Pn}function yr(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function kn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,z,j){const K=xe.get(w);K.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),xe.get(w.texture).__webglTexture=z,xe.get(w.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,z){const j=xe.get(w);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0};const ol=L.createFramebuffer();this.setRenderTarget=function(w,z=0,j=0){I=w,C=z,P=j;let K=!0,B=null,Ee=!1,Ie=!1;if(w){const Ge=xe.get(w);if(Ge.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(L.FRAMEBUFFER,null),K=!1;else if(Ge.__webglFramebuffer===void 0)ae.setupRenderTarget(w);else if(Ge.__hasExternalTextures)ae.rebindTextures(w,xe.get(w.texture).__webglTexture,xe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ft=w.depthTexture;if(Ge.__boundDepthTexture!==ft){if(ft!==null&&xe.has(ft)&&(w.width!==ft.image.width||w.height!==ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(w)}}const at=w.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ie=!0);const pt=xe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(pt[z])?B=pt[z][j]:B=pt[z],Ee=!0):w.samples>0&&ae.useMultisampledRTT(w)===!1?B=xe.get(w).__webglMultisampledFramebuffer:Array.isArray(pt)?B=pt[j]:B=pt,U.copy(w.viewport),F.copy(w.scissor),W=w.scissorTest}else U.copy(Be).multiplyScalar(X).floor(),F.copy(Ye).multiplyScalar(X).floor(),W=yt;if(j!==0&&(B=ol),ie.bindFramebuffer(L.FRAMEBUFFER,B)&&K&&ie.drawBuffers(w,B),ie.viewport(U),ie.scissor(F),ie.setScissorTest(W),Ee){const Ge=xe.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ge.__webglTexture,j)}else if(Ie){const Ge=z;for(let at=0;at<w.textures.length;at++){const pt=xe.get(w.textures[at]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+at,pt.__webglTexture,j,Ge)}}else if(w!==null&&j!==0){const Ge=xe.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ge.__webglTexture,j)}M=-1},this.readRenderTargetPixels=function(w,z,j,K,B,Ee,Ie,je=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ge=Ge[Ie]),Ge){ie.bindFramebuffer(L.FRAMEBUFFER,Ge);try{const at=w.textures[je],pt=at.format,ft=at.type;if(!$e.textureFormatReadable(pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-K&&j>=0&&j<=w.height-B&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+je),L.readPixels(z,j,K,B,Fe.convert(pt),Fe.convert(ft),Ee))}finally{const at=I!==null?xe.get(I).__webglFramebuffer:null;ie.bindFramebuffer(L.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(w,z,j,K,B,Ee,Ie,je=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ge=Ge[Ie]),Ge)if(z>=0&&z<=w.width-K&&j>=0&&j<=w.height-B){ie.bindFramebuffer(L.FRAMEBUFFER,Ge);const at=w.textures[je],pt=at.format,ft=at.type;if(!$e.textureFormatReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Rt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Rt),L.bufferData(L.PIXEL_PACK_BUFFER,Ee.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+je),L.readPixels(z,j,K,B,Fe.convert(pt),Fe.convert(ft),0);const Ot=I!==null?xe.get(I).__webglFramebuffer:null;ie.bindFramebuffer(L.FRAMEBUFFER,Ot);const on=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await a0(L,on,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Rt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ee),L.deleteBuffer(Rt),L.deleteSync(on),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,z=null,j=0){const K=Math.pow(2,-j),B=Math.floor(w.image.width*K),Ee=Math.floor(w.image.height*K),Ie=z!==null?z.x:0,je=z!==null?z.y:0;ae.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,Ie,je,B,Ee),ie.unbindTexture()};const Yr=L.createFramebuffer(),$r=L.createFramebuffer();this.copyTextureToTexture=function(w,z,j=null,K=null,B=0,Ee=null){Ee===null&&(B!==0?(Qs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=B,B=0):Ee=0);let Ie,je,Ge,at,pt,ft,Rt,Ot,on;const jt=w.isCompressedTexture?w.mipmaps[Ee]:w.image;if(j!==null)Ie=j.max.x-j.min.x,je=j.max.y-j.min.y,Ge=j.isBox3?j.max.z-j.min.z:1,at=j.min.x,pt=j.min.y,ft=j.isBox3?j.min.z:0;else{const T=Math.pow(2,-B);Ie=Math.floor(jt.width*T),je=Math.floor(jt.height*T),w.isDataArrayTexture?Ge=jt.depth:w.isData3DTexture?Ge=Math.floor(jt.depth*T):Ge=1,at=0,pt=0,ft=0}K!==null?(Rt=K.x,Ot=K.y,on=K.z):(Rt=0,Ot=0,on=0);const Nt=Fe.convert(z.format),lt=Fe.convert(z.type);let Zt;z.isData3DTexture?(ae.setTexture3D(z,0),Zt=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ae.setTexture2DArray(z,0),Zt=L.TEXTURE_2D_ARRAY):(ae.setTexture2D(z,0),Zt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const St=L.getParameter(L.UNPACK_ROW_LENGTH),Pn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Sr=L.getParameter(L.UNPACK_SKIP_PIXELS),Zn=L.getParameter(L.UNPACK_SKIP_ROWS),Mr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,jt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,jt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,at),L.pixelStorei(L.UNPACK_SKIP_ROWS,pt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ft);const Kt=w.isDataArrayTexture||w.isData3DTexture,Kn=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){const T=xe.get(w),D=xe.get(z),k=xe.get(T.__renderTarget),H=xe.get(D.__renderTarget);ie.bindFramebuffer(L.READ_FRAMEBUFFER,k.__webglFramebuffer),ie.bindFramebuffer(L.DRAW_FRAMEBUFFER,H.__webglFramebuffer);for(let q=0;q<Ge;q++)Kt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.get(w).__webglTexture,B,ft+q),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.get(z).__webglTexture,Ee,on+q)),L.blitFramebuffer(at,pt,Ie,je,Rt,Ot,Ie,je,L.DEPTH_BUFFER_BIT,L.NEAREST);ie.bindFramebuffer(L.READ_FRAMEBUFFER,null),ie.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||xe.has(w)){const T=xe.get(w),D=xe.get(z);ie.bindFramebuffer(L.READ_FRAMEBUFFER,Yr),ie.bindFramebuffer(L.DRAW_FRAMEBUFFER,$r);for(let k=0;k<Ge;k++)Kt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,T.__webglTexture,B,ft+k):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,T.__webglTexture,B),Kn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,D.__webglTexture,Ee,on+k):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,D.__webglTexture,Ee),B!==0?L.blitFramebuffer(at,pt,Ie,je,Rt,Ot,Ie,je,L.COLOR_BUFFER_BIT,L.NEAREST):Kn?L.copyTexSubImage3D(Zt,Ee,Rt,Ot,on+k,at,pt,Ie,je):L.copyTexSubImage2D(Zt,Ee,Rt,Ot,at,pt,Ie,je);ie.bindFramebuffer(L.READ_FRAMEBUFFER,null),ie.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Kn?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Zt,Ee,Rt,Ot,on,Ie,je,Ge,Nt,lt,jt.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(Zt,Ee,Rt,Ot,on,Ie,je,Ge,Nt,jt.data):L.texSubImage3D(Zt,Ee,Rt,Ot,on,Ie,je,Ge,Nt,lt,jt):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ee,Rt,Ot,Ie,je,Nt,lt,jt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ee,Rt,Ot,jt.width,jt.height,Nt,jt.data):L.texSubImage2D(L.TEXTURE_2D,Ee,Rt,Ot,Ie,je,Nt,lt,jt);L.pixelStorei(L.UNPACK_ROW_LENGTH,St),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Sr),L.pixelStorei(L.UNPACK_SKIP_ROWS,Zn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Mr),Ee===0&&z.generateMipmaps&&L.generateMipmap(Zt),ie.unbindTexture()},this.copyTextureToTexture3D=function(w,z,j=null,K=null,B=0){return Qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,z,j,K,B)},this.initRenderTarget=function(w){xe.get(w).__webglFramebuffer===void 0&&ae.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ae.setTextureCube(w,0):w.isData3DTexture?ae.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ae.setTexture2DArray(w,0):ae.setTexture2D(w,0),ie.unbindTexture()},this.resetState=function(){C=0,P=0,I=null,ie.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=zt._getUnpackColorSpace()}}const af={type:"change"},Cu={type:"start"},Np={type:"end"},uc=new Ta,cf=new Dr,sM=Math.cos(70*$t.DEG2RAD),wn=new b,oi=2*Math.PI,Yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vl=1e-6;class oM extends Rp{constructor(e,t=null){super(e,t),this.state=Yt.NONE,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ks.ROTATE,MIDDLE:Ks.DOLLY,RIGHT:Ks.PAN},this.touches={ONE:$s.ROTATE,TWO:$s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new b,this._lastQuaternion=new fn,this._lastTargetPosition=new b,this._quat=new fn().setFromUnitVectors(e.up,new b(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Uh,this._sphericalDelta=new Uh,this._scale=1,this._panOffset=new b,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new b,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cM.bind(this),this._onPointerDown=aM.bind(this),this._onPointerUp=lM.bind(this),this._onContextMenu=gM.bind(this),this._onMouseWheel=hM.bind(this),this._onKeyDown=fM.bind(this),this._onTouchStart=pM.bind(this),this._onTouchMove=mM.bind(this),this._onMouseDown=dM.bind(this),this._onMouseMove=uM.bind(this),this._interceptControlDown=_M.bind(this),this._interceptControlUp=vM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(af),this.update(),this.state=Yt.NONE}update(e=null){const t=this.object.position;wn.copy(t).sub(this.target),wn.applyQuaternion(this._quat),this._spherical.setFromVector3(wn),this.autoRotate&&this.state===Yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=oi:i>Math.PI&&(i-=oi),r<-Math.PI?r+=oi:r>Math.PI&&(r-=oi),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(wn.setFromSpherical(this._spherical),wn.applyQuaternion(this._quatInverse),t.copy(this.target).add(wn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=wn.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const a=new b(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new b(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=wn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(uc.origin.copy(this.object.position),uc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uc.direction))<sM?this.object.lookAt(this.target):(cf.setFromNormalAndCoplanarPoint(this.object.up,this.target),uc.intersectPlane(cf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Vl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vl||this._lastTargetPosition.distanceToSquared(this.target)>Vl?(this.dispatchEvent(af),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?oi/60*this.autoRotateSpeed*e:oi/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wn.setFromMatrixColumn(t,0),wn.multiplyScalar(-e),this._panOffset.add(wn)}_panUp(e,t){this.screenSpacePanning===!0?wn.setFromMatrixColumn(t,1):(wn.setFromMatrixColumn(t,0),wn.crossVectors(this.object.up,wn)),wn.multiplyScalar(e),this._panOffset.add(wn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;wn.copy(r).sub(this.target);let s=wn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(oi*this._rotateDelta.x/t.clientHeight),this._rotateUp(oi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(oi*this._rotateDelta.x/t.clientHeight),this._rotateUp(oi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function aM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function cM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function lM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Np),this.state=Yt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function dM(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Yt.DOLLY;break;case Ks.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Yt.ROTATE}break;case Ks.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Yt.PAN}break;default:this.state=Yt.NONE}this.state!==Yt.NONE&&this.dispatchEvent(Cu)}function uM(n){switch(this.state){case Yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function hM(n){this.enabled===!1||this.enableZoom===!1||this.state!==Yt.NONE||(n.preventDefault(),this.dispatchEvent(Cu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Np))}function fM(n){this.enabled!==!1&&this._handleKeyDown(n)}function pM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case $s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Yt.TOUCH_ROTATE;break;case $s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Yt.TOUCH_PAN;break;default:this.state=Yt.NONE}break;case 2:switch(this.touches.TWO){case $s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Yt.TOUCH_DOLLY_PAN;break;case $s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Yt.TOUCH_DOLLY_ROTATE;break;default:this.state=Yt.NONE}break;default:this.state=Yt.NONE}this.state!==Yt.NONE&&this.dispatchEvent(Cu)}function mM(n){switch(this._trackPointer(n),this.state){case Yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Yt.NONE}}function gM(n){this.enabled!==!1&&n.preventDefault()}function _M(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ns=new Ap,Xn=new b,Cr=new b,an=new fn,lf={X:new b(1,0,0),Y:new b(0,1,0),Z:new b(0,0,1)},Gl={type:"change"},df={type:"mouseDown",mode:null},uf={type:"mouseUp",mode:null},hf={type:"objectChange"};class xM extends Rp{constructor(e,t=null){super(void 0,t);const i=new wM(this);this._root=i;const r=new TM;this._gizmo=r,i.add(r);const s=new AM;this._plane=s,i.add(s);const o=this;function a(x,v){let A=v;Object.defineProperty(o,x,{get:function(){return A!==void 0?A:v},set:function(C){A!==C&&(A=C,s[x]=C,r[x]=C,o.dispatchEvent({type:x+"-changed",value:C}),o.dispatchEvent(Gl))}}),o[x]=v,s[x]=v,r[x]=v}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const c=new b,l=new b,d=new fn,u=new fn,h=new b,f=new fn,m=new b,_=new b,g=new b,p=0,E=new b;a("worldPosition",c),a("worldPositionStart",l),a("worldQuaternion",d),a("worldQuaternionStart",u),a("cameraPosition",h),a("cameraQuaternion",f),a("pointStart",m),a("pointEnd",_),a("rotationAxis",g),a("rotationAngle",p),a("eye",E),this._offset=new b,this._startNorm=new b,this._endNorm=new b,this._cameraScale=new b,this._parentPosition=new b,this._parentQuaternion=new fn,this._parentQuaternionInv=new fn,this._parentScale=new b,this._worldScaleStart=new b,this._worldQuaternionInv=new fn,this._worldScale=new b,this._positionStart=new b,this._quaternionStart=new fn,this._scaleStart=new b,this._getPointer=yM.bind(this),this._onPointerDown=MM.bind(this),this._onPointerHover=SM.bind(this),this._onPointerMove=bM.bind(this),this._onPointerUp=EM.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&ns.setFromCamera(e,this.camera);const t=Wl(this._gizmo.picker[this.mode],ns);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&ns.setFromCamera(e,this.camera);const t=Wl(this._plane,ns,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,df.mode=this.mode,this.dispatchEvent(df)}}pointerMove(e){const t=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&ns.setFromCamera(e,this.camera);const o=Wl(this._plane,ns,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(an.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(Xn.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(Xn.setFromMatrixPosition(r.parent.matrixWorld)))),r.position.x=Math.max(this.minX,Math.min(this.maxX,r.position.x)),r.position.y=Math.max(this.minY,Math.min(this.maxY,r.position.y)),r.position.z=Math.max(this.minZ,Math.min(this.maxZ,r.position.z));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Cr.set(a,a,a)}else Xn.copy(this.pointStart),Cr.copy(this.pointEnd),Xn.applyQuaternion(this._worldQuaternionInv),Cr.applyQuaternion(this._worldQuaternionInv),Cr.divide(Xn),t.search("X")===-1&&(Cr.x=1),t.search("Y")===-1&&(Cr.y=1),t.search("Z")===-1&&(Cr.z=1);r.scale.copy(this._scaleStart).multiply(Cr),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Xn.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Xn.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(lf[t]),Xn.copy(lf[t]),s==="local"&&Xn.applyQuaternion(this.worldQuaternion),Xn.cross(this.eye),Xn.length()===0?c=!0:this.rotationAngle=this._offset.dot(Xn.normalize())*a),(t==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(an.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(an.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Gl),this.dispatchEvent(hf)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(uf.mode=this.mode,this.dispatchEvent(uf)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Gl),this.dispatchEvent(hf),this.pointStart.copy(this.pointEnd))}getRaycaster(){return ns}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,i,r){const s=this._gizmo.materialLib;s.xAxis.color.set(e),s.yAxis.color.set(t),s.zAxis.color.set(i),s.active.color.set(r),s.xAxisTransparent.color.set(e),s.yAxisTransparent.color.set(t),s.zAxisTransparent.color.set(i),s.activeTransparent.color.set(r),s.xAxis._color&&s.xAxis._color.set(e),s.yAxis._color&&s.yAxis._color.set(t),s.zAxis._color&&s.zAxis._color.set(i),s.active._color&&s.active._color.set(r),s.xAxisTransparent._color&&s.xAxisTransparent._color.set(e),s.yAxisTransparent._color&&s.yAxisTransparent._color.set(t),s.zAxisTransparent._color&&s.zAxisTransparent._color.set(i),s.activeTransparent._color&&s.activeTransparent._color.set(r)}}function yM(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{const e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function SM(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function MM(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function bM(n){this.enabled&&this.pointerMove(this._getPointer(n))}function EM(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function Wl(n,e,t){const i=e.intersectObject(n,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||t)return i[r];return!1}const hc=new $n,Jt=new b(0,1,0),ff=new b(0,0,0),pf=new Gt,fc=new fn,wc=new fn,ji=new b,mf=new Gt,Vo=new b(1,0,0),ss=new b(0,1,0),Go=new b(0,0,1),pc=new b,Io=new b,Uo=new b;class wM extends gn{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class TM extends gn{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new vn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new ui({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const l=e.clone();l.color.setHex(65280),l.opacity=.5;const d=e.clone();d.color.setHex(255),d.opacity=.5;const u=e.clone();u.opacity=.25;const h=e.clone();h.color.setHex(16776960),h.opacity=.25;const f=e.clone();f.color.setHex(16776960);const m=e.clone();m.color.setHex(7895160),this.materialLib={xAxis:s,yAxis:o,zAxis:a,active:f,xAxisTransparent:c,yAxisTransparent:l,zAxisTransparent:d,activeTransparent:h};const _=new Wn(0,.04,.1,12);_.translate(0,.05,0);const g=new bn(.08,.08,.08);g.translate(0,.04,0);const p=new Ut;p.setAttribute("position",new Tt([0,0,0,1,0,0],3));const E=new Wn(.0075,.0075,.5,3);E.translate(0,.25,0);function x(ne,Z){const de=new cs(ne,.0075,3,64,Z*Math.PI*2);return de.rotateY(Math.PI/2),de.rotateX(Math.PI/2),de}function v(){const ne=new Ut;return ne.setAttribute("position",new Tt([0,0,0,1,1,1],3)),ne}const A={X:[[new Ae(_,s),[.5,0,0],[0,0,-Math.PI/2]],[new Ae(_,s),[-.5,0,0],[0,0,Math.PI/2]],[new Ae(E,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Ae(_,o),[0,.5,0]],[new Ae(_,o),[0,-.5,0],[Math.PI,0,0]],[new Ae(E,o)]],Z:[[new Ae(_,a),[0,0,.5],[Math.PI/2,0,0]],[new Ae(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new Ae(E,a),null,[Math.PI/2,0,0]]],XYZ:[[new Ae(new fs(.1,0),u),[0,0,0]]],XY:[[new Ae(new bn(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new Ae(new bn(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ae(new bn(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},C={X:[[new Ae(new Wn(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new Ae(new Wn(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ae(new Wn(.2,0,.6,4),i),[0,.3,0]],[new Ae(new Wn(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ae(new Wn(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new Ae(new Wn(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Ae(new fs(.2,0),i)]],XY:[[new Ae(new bn(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new Ae(new bn(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ae(new bn(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},P={START:[[new Ae(new fs(.01,2),r),null,null,null,"helper"]],END:[[new Ae(new fs(.01,2),r),null,null,null,"helper"]],DELTA:[[new hn(v(),r),null,null,null,"helper"]],X:[[new hn(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new hn(p,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new hn(p,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},I={XYZE:[[new Ae(x(.5,1),m),null,[0,Math.PI/2,0]]],X:[[new Ae(x(.5,.5),s)]],Y:[[new Ae(x(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new Ae(x(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new Ae(x(.75,1),h),null,[0,Math.PI/2,0]]]},M={AXIS:[[new hn(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]]},y={XYZE:[[new Ae(new zr(.25,10,8),i)]],X:[[new Ae(new cs(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Ae(new cs(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Ae(new cs(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Ae(new cs(.75,.1,2,24),i)]]},U={X:[[new Ae(g,s),[.5,0,0],[0,0,-Math.PI/2]],[new Ae(E,s),[0,0,0],[0,0,-Math.PI/2]],[new Ae(g,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Ae(g,o),[0,.5,0]],[new Ae(E,o)],[new Ae(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Ae(g,a),[0,0,.5],[Math.PI/2,0,0]],[new Ae(E,a),[0,0,0],[Math.PI/2,0,0]],[new Ae(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Ae(new bn(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new Ae(new bn(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ae(new bn(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ae(new bn(.1,.1,.1),u)]]},F={X:[[new Ae(new Wn(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new Ae(new Wn(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Ae(new Wn(.2,0,.6,4),i),[0,.3,0]],[new Ae(new Wn(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Ae(new Wn(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new Ae(new Wn(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Ae(new bn(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new Ae(new bn(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Ae(new bn(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Ae(new bn(.2,.2,.2),i),[0,0,0]]]},W={X:[[new hn(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new hn(p,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new hn(p,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function V(ne){const Z=new gn;for(const de in ne)for(let X=ne[de].length;X--;){const oe=ne[de][X][0].clone(),we=ne[de][X][1],Be=ne[de][X][2],Ye=ne[de][X][3],yt=ne[de][X][4];oe.name=de,oe.tag=yt,we&&oe.position.set(we[0],we[1],we[2]),Be&&oe.rotation.set(Be[0],Be[1],Be[2]),Ye&&oe.scale.set(Ye[0],Ye[1],Ye[2]),oe.updateMatrix();const vt=oe.geometry.clone();vt.applyMatrix4(oe.matrix),oe.geometry=vt,oe.renderOrder=1/0,oe.position.set(0,0,0),oe.rotation.set(0,0,0),oe.scale.set(1,1,1),Z.add(oe)}return Z}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=V(A)),this.add(this.gizmo.rotate=V(I)),this.add(this.gizmo.scale=V(U)),this.add(this.picker.translate=V(C)),this.add(this.picker.rotate=V(y)),this.add(this.picker.scale=V(F)),this.add(this.helper.translate=V(P)),this.add(this.helper.rotate=V(M)),this.add(this.helper.scale=V(W)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:wc;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(an.setFromEuler(hc.set(0,0,0)),o.quaternion.copy(i).multiply(an),Math.abs(Jt.copy(Vo).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(an.setFromEuler(hc.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(an),Math.abs(Jt.copy(ss).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(an.setFromEuler(hc.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(an),Math.abs(Jt.copy(Go).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(an.setFromEuler(hc.set(0,Math.PI/2,0)),Jt.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(pf.lookAt(ff,Jt,ss)),o.quaternion.multiply(an),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Xn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Xn.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Xn),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Jt.copy(Vo).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Jt.copy(ss).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Jt.copy(Go).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Jt.copy(Go).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Jt.copy(Vo).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Jt.copy(ss).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(fc.copy(i),Jt.copy(this.eye).applyQuaternion(an.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(pf.lookAt(this.eye,ff,ss)),o.name==="X"&&(an.setFromAxisAngle(Vo,Math.atan2(-Jt.y,Jt.z)),an.multiplyQuaternions(fc,an),o.quaternion.copy(an)),o.name==="Y"&&(an.setFromAxisAngle(ss,Math.atan2(Jt.x,Jt.z)),an.multiplyQuaternions(fc,an),o.quaternion.copy(an)),o.name==="Z"&&(an.setFromAxisAngle(Go,Math.atan2(Jt.y,Jt.x)),an.multiplyQuaternions(fc,an),o.quaternion.copy(an))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(c){return o.name===c})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}}class AM extends Ae{constructor(){super(new Br(1e5,1e5,2,2),new vn({visible:!1,wireframe:!0,side:ln,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),pc.copy(Vo).applyQuaternion(t==="local"?this.worldQuaternion:wc),Io.copy(ss).applyQuaternion(t==="local"?this.worldQuaternion:wc),Uo.copy(Go).applyQuaternion(t==="local"?this.worldQuaternion:wc),Jt.copy(Io),this.mode){case"translate":case"scale":switch(this.axis){case"X":Jt.copy(this.eye).cross(pc),ji.copy(pc).cross(Jt);break;case"Y":Jt.copy(this.eye).cross(Io),ji.copy(Io).cross(Jt);break;case"Z":Jt.copy(this.eye).cross(Uo),ji.copy(Uo).cross(Jt);break;case"XY":ji.copy(Uo);break;case"YZ":ji.copy(pc);break;case"XZ":Jt.copy(Uo),ji.copy(Io);break;case"XYZ":case"E":ji.set(0,0,0);break}break;default:ji.set(0,0,0)}ji.length()===0?this.quaternion.copy(this.cameraQuaternion):(mf.lookAt(Xn.set(0,0,0),ji,Jt),this.quaternion.setFromRotationMatrix(mf)),super.updateMatrixWorld(e)}}const mc=32,Zi=.4;function kp(n,e){const t=new xn,i=new vn({vertexColors:!0,transparent:!0,opacity:.88,side:ln,depthWrite:!0}),r=[],s=new It,o=new It(.55,.68,.74),a=new Float32Array(n.size*n.size*3),c=new Uint32Array(n.size*n.size);let l=0,d=!1;for(let m=0;m<n.size-1;m+=mc)for(let _=0;_<n.size-1;_+=mc){const g=Math.min(n.size-1,_+mc),p=Math.min(n.size-1,m+mc),E=(g-_)*(p-m)*12*3,x=new Mi(new Float32Array(E),3).setUsage(Lc),v=new Mi(new Float32Array(E),3).setUsage(Lc),A=new Ut;A.setAttribute("position",x),A.setAttribute("color",v);const C=-n.extent+_*n.spacing,P=-n.extent+g*n.spacing,I=-n.extentZ+m*n.spacingZ,M=-n.extentZ+p*n.spacingZ;A.boundingBox=new _o(new b(C,0,I),new b(P,180,M)),A.boundingSphere=A.boundingBox.getBoundingSphere(new vo);const y=new Ae(A,i);y.userData.terrainChunk={minX:_,maxX:g,minZ:m,maxZ:p},r.push({minX:_,maxX:g,minZ:m,maxZ:p,mesh:y,position:x,color:v}),t.add(y)}const u=(m,_)=>{const g=-n.extent+m*n.spacing,p=-n.extentZ+_*n.spacingZ;let E=0;if(e){const A=Math.round((g+e.extent)/e.spacing),C=Math.round((p+e.extentZ)/e.spacingZ);A>=0&&A<e.size&&C>=0&&C<e.size&&(E=e.data[C*e.size+A]/255)}const x=_*n.size+m,v=n.data[x];if(c[x]!==l){const A=Math.pow($t.clamp(v/180,0,1),.65);s.setHSL(.57,.35*(1-A)+.06,.06+A*.68,ni),E&&s.lerp(o,E*.45),a[x*3]=s.r,a[x*3+1]=s.g,a[x*3+2]=s.b,c[x]=l}return{x:g,y:v,z:p,density:E,r:a[x*3],g:a[x*3+1],b:a[x*3+2]}},h=m=>{let _=0;const g=E=>{m.position.setXYZ(_,E.x,E.y,E.z),m.color.setXYZ(_++,E.r,E.g,E.b)},p=(E,x,v)=>{if(E.y>=Zi&&x.y>=Zi&&v.y>=Zi){g(E),g(x),g(v);return}const A=[E,x,v],C=[];for(let P=0;P<3;P++){const I=A[P],M=A[(P+1)%3];if(I.y>=Zi&&C.push(I),I.y>=Zi!=M.y>=Zi){const y=(Zi-I.y)/(M.y-I.y),U=I.density+(M.density-I.density)*y,F=Math.pow(Zi/180,.65);s.setHSL(.57,.35*(1-F)+.06,.06+F*.68,ni),U&&s.lerp(o,U*.45),C.push({x:I.x+(M.x-I.x)*y,y:Zi,z:I.z+(M.z-I.z)*y,density:U,r:s.r,g:s.g,b:s.b})}}for(let P=1;P<C.length-1;P++)g(C[0]),g(C[P]),g(C[P+1])};for(let E=m.minZ;E<m.maxZ;E++)for(let x=m.minX;x<m.maxX;x++){const v=u(x,E),A=u(x+1,E),C=u(x+1,E+1),P=u(x,E+1);Math.max(v.y,A.y,C.y,P.y)<Zi||(p(v,A,C),p(v,C,P))}m.mesh.geometry.setDrawRange(0,_),m.mesh.visible=_>0;for(const E of[m.position,m.color])_&&E.addUpdateRange(0,_*3),E.needsUpdate=!0},f=m=>{if(!d&&!(m&&![m.minX,m.maxX,m.minZ,m.maxZ].every(Number.isFinite))&&!(m&&(m.minX>m.maxX||m.minZ>m.maxZ))){l=l+1>>>0,l||(c.fill(0),l=1);for(const _ of r)m&&(_.maxX<m.minX||_.minX>m.maxX||_.maxZ<m.minZ||_.minZ>m.maxZ)||h(_)}};return f(),{root:t,update:f,dispose(){if(!d){d=!0;for(const m of r)m.mesh.geometry.dispose();i.dispose(),t.removeFromParent(),t.clear()}}}}function RM(n){const e=kp(n);for(const t of e.root.children){const i=t,r=i.geometry.drawRange.count;for(const s of["position","color"]){const o=i.geometry.getAttribute(s);i.geometry.setAttribute(s,new Mi(o.array.slice(0,r*3),3))}i.geometry.setDrawRange(0,r)}return e.root}const CM=5,PM=Cm,Xl=40,gf=65;function LM(n){if(n<=Xl*it)return 1;if(n>=gf*it)return 0;const e=(n/it-Xl)/(gf-Xl);return 1-e*e*(3-2*e)}const DM=`
  varying vec2 vMapPosition;
  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vMapPosition = worldPosition.xz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,IM=`
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
`;function UM(n,e){const t=new Br(n*2,e*2);t.rotateX(-Math.PI/2);const i=new _r({uniforms:{majorColor:{value:new It(16777215)},minorColor:{value:new It(16777215)},majorStep:{value:CM*it},minorStep:{value:PM*it},minorOpacity:{value:1}},vertexShader:DM,fragmentShader:IM,transparent:!0,depthWrite:!1,side:ln}),r=new Ae(t,i);return r.position.y=-2,r.renderOrder=-1,r}function Fp(n,e){n.material.uniforms.minorOpacity.value=LM(e)}const ql=21,NM=7,_f=14;function Op(n){const e=[],t=(r,s,o,a)=>{e.push(new b(r,s,0),new b(o,a,0))};for(const r of[ql,NM])t(-r,-r,r,-r),t(r,-r,r,r),t(r,r,-r,r),t(-r,r,-r,-r);for(const r of[-1,1])for(const s of[-1,1])t(r*ql,s*ql,r*_f,s*_f);const i=new pp(new Ut().setFromPoints(e),new ui({color:n,transparent:!0,opacity:.9,depthTest:!1}));return i.name="escort-marker",i.visible=!1,i}const gc=25,_c=80,No=1;function kM(n,e){if(Number.isNaN(n))return e??1;const t=Math.max(0,n/it);return e===1?t>=_c+6?3:t>=gc+2?2:1:e===2?t<=gc-2?1:t>=_c+6?3:2:e===3?t<=gc-2?1:t<=_c-6?2:3:t<gc?1:t<_c?2:3}const Ko=(n,e)=>n<e?-1:n>e?1:0,FM=new Intl.Collator("en",{sensitivity:"variant"}),OM=n=>n.icon==="air-filled"||n.icon==="air-outline",zp=n=>n.status==="active"&&n.tgt===!0,Bp=n=>n.status==="active"&&n.escort===!0&&n.faction!=="enemy",vf=n=>zp(n)||Bp(n)?1:0;function xf(n){const e={x:0,y:0,z:0};for(const h of n)e.x+=h.position.x/n.length,e.y+=h.position.y/n.length,e.z+=h.position.z/n.length;const t=h=>Math.hypot(h.position.x-e.x,h.position.y-e.y,h.position.z-e.z);let i=n[0],r=t(i),s,o=1/0;const a=new Map;let c=!1,l=!1;for(const h of n){const f=t(h),m=vf(h)-vf(i);(m>0||m===0&&(f<r||f===r&&Ko(h.id,i.id)<0))&&(i=h,r=f),OM(h)&&(!s||f<o||f===o&&Ko(h.id,s.id)<0)&&(s=h,o=f),a.set(h.label,(a.get(h.label)??0)+1),c||=zp(h),l||=Bp(h)}const d=[...a.keys()].filter(h=>h!==i.label).sort((h,f)=>FM.compare(h,f)||Ko(h,f)),u=[i.label,...d].map(h=>{const f=a.get(h);return f>1?`${h} ×${f}`:h}).join(`
`);return{representativeId:i.id,memberIds:n.map(h=>h.id),label:u,hasTgt:c,hasEscort:l,...s?{airRepresentativeId:s.id}:{}}}function zM(n,e){const t=[...n].sort((d,u)=>Ko(d.id,u.id));if(e===1)return t.map(d=>xf([d]));const i=e===2?54:68,r=i*i,s=No*No,o=new Map,a=[],c=(d,u,h,f)=>`${d}:${u}:${h}:${f}`,l=(d,u)=>`${d}:${u}`;for(const d of t){if(d.status!=="active"||!d.onScreen||!Number.isFinite(d.screenX)||!Number.isFinite(d.screenY)||!Number.isFinite(d.position.x)||!Number.isFinite(d.position.y)||!Number.isFinite(d.position.z)){a.push({seed:d,members:[d]});continue}const u=Math.floor(d.position.x/No),h=Math.floor(d.position.y/No),f=Math.floor(d.position.z/No),m=Math.floor(d.screenX/i),_=Math.floor(d.screenY/i);let g;for(let p=-1;p<=1;p++)for(let E=-1;E<=1;E++)for(let x=-1;x<=1;x++){const v=o.get(c(d.faction,u+p,h+E,f+x));if(v)for(let A=-1;A<=1;A++)for(let C=-1;C<=1;C++){const P=v.get(l(m+A,_+C));if(P)for(const I of P){const M=d.position.x-I.seed.position.x,y=d.position.y-I.seed.position.y,U=d.position.z-I.seed.position.z;if(M*M+y*y+U*U>s)continue;const F=d.screenX-I.seed.screenX,W=d.screenY-I.seed.screenY;F*F+W*W<=r&&(!g||Ko(I.seed.id,g.seed.id)<0)&&(g=I)}}}if(g)g.members.push(d);else{const p={seed:d,members:[d]};a.push(p);const E=c(d.faction,u,h,f);let x=o.get(E);x||(x=new Map,o.set(E,x));const v=l(m,_),A=x.get(v);A?A.push(p):x.set(v,[p])}}return a.map(d=>xf(d.members))}const vc=12,yf=.675,BM=.15,HM=5e3;function VM(n,e){const t=Number.isFinite(e)&&e>0?e:vc*yf/12,i=n===1?Math.min(24*t/vc,Math.max(10*t/vc,yf)):(n===2?15:17)*t/vc;return Math.min(HM,Math.max(BM,i))}function GM(n){const e=new xn;e.name="far-air-display",e.visible=!1;const t=new Ae(new jc(2.2,3.3,20),new vn({color:n,transparent:!0,opacity:.8,side:ln,depthTest:!1}));t.rotation.x=-Math.PI/2;const i=new hn(new Ut().setFromPoints([new b(0,.2,0),new b(0,1,0)]),new ui({color:n,transparent:!0,opacity:.8,depthTest:!1})),r=Array.from({length:65},(a,c)=>{const l=c/64*Math.PI*2;return new b(Math.cos(l)*7.2,Math.sin(l)*7.2,0)}),s=new hn(new Ut().setFromPoints(r),new ui({color:n,transparent:!0,opacity:.9,depthTest:!1})),o=Op(n);return t.add(s,o),e.add(t,i),{root:e,base:t,pole:i,tgt:s,escort:o}}function WM(n,e,t){const{tier:i,representative:r,status:s,scale:o}=t,a=s!=="wreck",c=n.base!==null;n.base&&(n.base.visible=r&&a&&i!==3,n.base.scale.setScalar(o/.675)),n.icon.visible=r&&a,n.icon.scale.setScalar(o),n.icon.position.y=t.iconHeight,n.pole.visible=r&&a&&i!==3,n.pole.userData.naturalTop=t.poleHeight,n.wreck.visible=r&&s!=="active",n.wreck.scale.setScalar(o/.675),e.root.visible=r&&s==="active"&&i===3&&t.hasAir,e.base.scale.setScalar(o/.675),e.base.position.y=1.5,e.tgt.scale.setScalar(.675),e.escort.scale.setScalar(.675),e.tgt.visible=t.hasTgt&&!c,e.escort.visible=t.hasEscort&&!c&&t.faction!=="enemy";const l=e.pole.geometry.getAttribute("position"),d=Math.max(t.airAltitude,.6);e.pole.userData.naturalTop=d,l.getY(1)!==d&&(l.setY(1,d),l.needsUpdate=!0,e.pole.geometry.computeBoundingSphere()),n.label.position.y=i===3?t.hasAir?d:1.5:t.poleHeight;const u=n.label.userData.dom;u.textContent!==t.label&&(u.textContent=t.label),u.style.whiteSpace="pre",u.style.fontSize=i===1?"14px":i===2?"13px":"12px",u.style.lineHeight="1.15";const h=r&&n.labelFade>0&&(i!==3||t.faction==="squadron");u.hidden=!h,n.label.userData.displayVisible=h}const XM=[[-5,-5],[0,7],[5,-5]],qM=[[-4,-4],[-4,2],[0,6],[4,2],[4,-4]],YM=[[-4,-4],[-4,4],[4,4],[4,-4]],$M=[[0,5.8],[-3.25,-3.1],[3.25,-3.1]];function Sf(n){const e=new Mp;e.moveTo(n[0][0],n[0][1]);for(const[t,i]of n.slice(1))e.lineTo(t,i);return e.closePath(),new Au(e)}function Yl(n,e){return new vn({color:n,transparent:!0,opacity:e,side:ln,depthTest:!1,depthWrite:!1})}function jM(n,e){const t=new xn,i=n==="ground"?YM:n==="ship"?qM:XM,r=new hn(new Ut().setFromPoints(i.map(([o,a])=>new b(o,a,0))),new ui({color:e,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1}));if(r.name="outline",t.add(r),n==="air-filled"){const o=new Ae(Sf($M),Yl(e,.9));o.name="filledinner",t.add(o)}else if(n==="air-outline"){const o=new Ae(new aa(.65,32),Yl(e,.9));o.name="dot",o.position.y=-.3,t.add(o)}const s=new Ae(Sf(i),Yl(e,0));return s.name="pickmesh",t.add(s),t}const ZM=8,kc=1e-9,Mf=new b,Nr=new b,ei=new b,$l=new b,Fc=new b,is=new b,jl=new b,Zl=new Wt,Kl=new Gt,bf=new Gt;function Jd(n){return Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z)}function ps(n,e){const{camera:t,width:i,height:r}=e;jl.copy(n).applyMatrix4(t.matrixWorldInverse);const s=-jl.z;if(!Jd(jl)||s<t.near||s>t.far||(is.copy(n).project(t),!Jd(is)||is.z<-1-kc||is.z>1+kc))return null;const o=(is.x+1)*i/2,a=(1-is.y)*r/2;return Number.isFinite(o)&&Number.isFinite(a)?{x:o,y:a,z:is.z}:null}function Hp(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function Vp(n){if(!n)return!1;const e=t=>t.visible&&t.opacity>0;return Array.isArray(n)?n.some(e):e(n)}function KM(n,e){let t=e;return Hp(n.icon)&&n.icon.traverseVisible(i=>{const r=i;if(!r.geometry||!Vp(r.material))return;const s=r.geometry;s.boundingBox||s.computeBoundingBox();const o=s.boundingBox;if(!(!o||o.isEmpty()))for(let a=0;a<2;a++)for(let c=0;c<2;c++)for(let l=0;l<2;l++){Fc.set(a?o.max.x:o.min.x,c?o.max.y:o.min.y,l?o.max.z:o.min.z).applyMatrix4(i.matrixWorld);const d=ps(Fc,n);d&&(t=Math.max(t,d.x))}}),t}function JM(n){const e=typeof getComputedStyle=="function"?getComputedStyle(n):n.style,t=c=>{const l=Number.parseFloat(c??"");return Number.isFinite(l)?l:0},i=t(e.fontSize)||t(n.style.fontSize)||14,r=e.lineHeight||n.style.lineHeight,s=t(r),o=s>0?/^[\d.]+$/.test(r)?s*i:s:i*1.15;let a=Number(n.offsetHeight);if(!Number.isFinite(a)||a<=0){const c=typeof n.getBoundingClientRect=="function"?n.getBoundingClientRect():null;a=c?Number(c.height??c.bottom-c.top):0}return(!Number.isFinite(a)||a<=0)&&(a=Math.max(1,(n.textContent??"").split(`
`).length)*o+t(e.paddingTop)+t(e.paddingBottom)),{height:a,lineHeight:o}}function Ef(n,e){const t=n.geometry.getAttribute("position");if(!t||t.count<2||!Jd(e))return;const i=t.array instanceof Float32Array?Math.fround:a=>a,r=i(e.x),s=i(e.y),o=i(e.z);t.getX(1)===r&&t.getY(1)===s&&t.getZ(1)===o||(t.setXYZ(1,r,s,o),t.needsUpdate=!0,n.geometry.boundingBox&&n.geometry.computeBoundingBox(),n.geometry.computeBoundingSphere())}function QM(n,e){Kl.multiplyMatrices(n.camera.projectionMatrix,n.camera.matrixWorldInverse),Zl.set(Nr.x,Nr.y,Nr.z,1).applyMatrix4(Kl);const t=Kl.elements,i=1-e*2/n.height,r=t[5]-i*t[7];if(!Number.isFinite(r)||Math.abs(r)<kc)return!1;const s=(i*Zl.w-Zl.y)/r;if(!Number.isFinite(s)||s<=0||s>1e12)return!1;ei.copy(Nr),ei.y+=s;const o=ps(ei,n);return!!o&&Math.abs(o.y-e)<.01}function eb(n,e,t){ei.set(e.x*2/n.width-1,1-t*2/n.height,e.z).unproject(n.camera);const i=ps(ei,n);return!!i&&Math.abs(i.y-t)<.01}function tb(n){const{camera:e,width:t,height:i,group:r,icon:s,pole:o,dom:a,isAir:c,isMerged:l,visible:d}=n,u=Number.isFinite(n.naturalTop)?n.naturalTop:.6;Mf.set(0,.2,0).applyMatrix4(r.matrixWorld),Nr.set(0,u,0).applyMatrix4(r.matrixWorld),ei.copy(Nr),a.style.transform="translate(0, 0)";const h=Number.isFinite(t)&&t>0&&Number.isFinite(i)&&i>0,f=h?ps(Mf,n):null,m=h?ps(Nr,n):null,_=JM(a),g=o.geometry.getAttribute("position"),p=Hp(o)&&Vp(o.material);if(d&&!a.hidden&&l&&p&&g&&g.count>=2&&f&&m&&Math.abs(f.y-m.y)<_.height){const M=f.y-_.height-.1;!QM(n,M)&&!eb(n,m,M)&&ei.copy(Nr)}const E=o.matrixWorld.determinant();Number.isFinite(E)&&Math.abs(E)>kc?(bf.copy(o.matrixWorld).invert(),$l.copy(ei).applyMatrix4(bf),Ef(o,$l)):Ef(o,$l.set(0,u,0));const x=o.userData.labelDisplayTop;if(x?(x.x=ei.x,x.y=ei.y,x.z=ei.z):o.userData.labelDisplayTop={x:ei.x,y:ei.y,z:ei.z},!h){a.style.left="0px",a.style.top="0px";return}const v=ps(ei,n)??m;Fc.setFromMatrixPosition(s.matrixWorld);const A=ps(Fc,n),C=A?.x??v?.x??f?.x??t/2;let P=KM(n,C);(p||!Number.isFinite(P))&&(f&&(P=Math.max(P,f.x)),v&&(P=Math.max(P,v.x))),Number.isFinite(P)||(P=C);let I=v?.y??A?.y??f?.y??i/2;l&&p&&f&&v?I=Math.min(f.y,v.y):c&&!l&&(I=(A?.y??I)-_.lineHeight/2),a.style.left=`${P+ZM}px`,a.style.top=`${I}px`}const wf=new Set(["markers","drawing","links","range","layers"]),Tf=new Set(["units","equipment","groups","routes","links"]),Jl=[{id:"units",label:"单位",title:"单位与空间编辑"},{id:"equipment",label:"装备",title:"机体与武器挂载"},{id:"groups",label:"编组",title:"编组与批量调度"},{id:"routes",label:"航路",title:"航路、绑定与航迹"},{id:"markers",label:"标记",title:"自定义地图点位"},{id:"drawing",label:"作图",title:"标尺、圆规与范围规划"},{id:"links",label:"连线",title:"单位与标记连线"},{id:"terrain",label:"地形",title:"画布、地形与城区"},{id:"range",label:"距离",title:"距离判定与三维范围"},{id:"turns",label:"回合",title:"回合草稿与战斗结果"},{id:"layers",label:"图层",title:"地图显示与航迹图层"},{id:"project",label:"存档",title:"工程保存、导入与恢复"}];function nb(n){const e=document.querySelector("#app"),t=document.querySelector("#edit-panel");if(!e||!t)throw new Error("Editor sidebar requires the existing workspace shell");if(t.dataset.sidebarMounted)throw new Error("Editor sidebar is already mounted");const i=(re,qe="")=>{const Le=document.createElement(re);return Le.textContent=qe,Le},r=(re,qe,Le)=>{const gt=i("button",re);return gt.type="button",Le&&(gt.id=Le),gt.addEventListener("click",qe),gt},s=re=>{const qe=document.querySelector(re);if(!qe)throw new Error(`Missing sidebar source control: ${re}`);return qe},o=s("#unit-editor"),a=s("#terrain-editor"),c=s("#route-section"),l=s("#archive-panel"),d=s("#workflow-panel"),u=s("#tab-units").parentElement,h=s(".selection-panel"),f=s(".event-panel"),m=s(".range-panel"),_=s(".trail-panel"),g=document.createComment("archive-manager-portal");l.before(g);const p=i("div"),x=s("#edit-add").closest(".edit-actions").previousElementSibling;for(;o.firstChild&&o.firstChild!==x;)p.append(o.firstChild);c.remove(),o.querySelectorAll(":scope > .rule").forEach(re=>re.remove());const v=Array.from(o.children),A=s("#edit-label").closest("label"),C=s("#tool-move").closest(".edit-actions"),P=v.indexOf(A),I=v.indexOf(C),M=(re,qe,Le)=>{const gt=i("details");return gt.className="sidebar-submenu",gt.open=Le,gt.append(i("summary",re)),gt.append(...qe),gt};o.replaceChildren(M("单位与选择",v.slice(0,P),!0),M("属性与战损",v.slice(P,I),!1),M("位置、姿态与吸附",v.slice(I),!0)),a.querySelector(":scope > .eyebrow")?.remove();const y=Array.from(a.children),U=y.indexOf(s("#terrain-brush").closest("label")),F=y.indexOf(s("#terrain-preset").closest("label")),W=s("#terrain-undo").closest(".edit-actions"),V=y.indexOf(W);a.replaceChildren(M("画布尺寸与采样",y.slice(0,U),!1),M("笔刷、城区与等高线",y.slice(U,F),!0),M("地形生成与重置",y.slice(F,V),!1),...y.slice(V)),t.replaceChildren(),t.classList.add("editor-sidebar"),t.dataset.sidebarMounted="true",t.hidden=!1,e.classList.add("editor-sidebar-mounted"),t.setAttribute("aria-label","场景编辑器");const ne=i("header");ne.className="sidebar-header";const Z=i("div");Z.className="sidebar-title-row";const de=i("strong","场景编辑器"),X=i("span","浏览");X.id="editor-sidebar-state",X.className="sidebar-state",X.setAttribute("role","status"),Z.append(de,X);const oe=i("div");oe.className="sidebar-toolbar";const we=r("进入编辑",()=>{ce.editable&&n.toggleEdit()},"sidebar-toggle-edit"),Be=r("全图",()=>n.fitMap(),"sidebar-fit-map");Be.title="适配整个地图及当前单位";const Ye=r("俯视",()=>n.topView(),"sidebar-top-view");Ye.title="切换地图俯视视角";let yt=!1;const vt=r("收起",()=>he(!yt),"sidebar-collapse");oe.append(we,Be,Ye,vt);const Y=i("div");Y.className="sidebar-quick-actions";const Te=r("保存修订",()=>{if(ce.playerView)return;const re=ye();re&&!re.disabled&&re.click()},"sidebar-quick-save"),G=r("提交回合",()=>{if(ce.playerView)return;se("turns");const re=document.querySelector("#workflow-commit");re&&!re.disabled&&re.click()},"sidebar-quick-commit"),le=r("另存为…",()=>{ce.playerView||(se("turns"),document.querySelector("#editor-save-as-name")?.focus())},"sidebar-quick-save-as"),Se=r("生成快照",()=>{if(ce.playerView)return;const re=document.querySelector("#workflow-snapshot");re&&!re.disabled&&!re.hidden&&re.click()},"sidebar-quick-snapshot");Y.append(Te,le,G,Se);const $=i("div");$.className="sidebar-viewer-toolbar";const te=r("导出查看器",()=>{ce.playerView&&n.viewerExport?.()},"sidebar-viewer-export"),ue=r("撤销",()=>{ce.playerView&&ce.editable&&ce.viewerCanUndo&&n.viewerUndo?.()},"sidebar-viewer-undo"),L=r("重做",()=>{ce.playerView&&ce.editable&&ce.viewerCanRedo&&n.viewerRedo?.()},"sidebar-viewer-redo");$.append(te,ue,L),ne.append(Z,oe,Y,$);const Pe=i("nav");Pe.className="sidebar-nav",Pe.setAttribute("role","tablist"),Pe.setAttribute("aria-label","编辑工具菜单"),Pe.setAttribute("aria-orientation","vertical");const Me=i("div");Me.className="sidebar-content",Me.id="editor-sidebar-content";const $e=new Map,ie=new Map,Ze=new Map,xe=new Map;let ae="units",ce={editing:!1,editable:!0,mapOnly:!1},be,R=!1,S=0;const O=re=>ce.playerView?wf.has(re):!(ce.mapOnly&&Tf.has(re));for(const re of Jl){const qe=r(re.label,()=>se(re.id),`sidebar-tab-${re.id}`);qe.title=re.title,qe.setAttribute("role","tab"),qe.setAttribute("aria-controls",`sidebar-panel-${re.id}`),qe.dataset.sidebarTab=re.id,Ze.set(re.id,qe),Pe.append(qe);const Le=i("section");Le.id=`sidebar-panel-${re.id}`,Le.className="sidebar-tab-panel",Le.setAttribute("role","tabpanel"),Le.setAttribute("aria-labelledby",qe.id);const gt=i("h2",re.title);gt.className="sidebar-panel-heading";const At=i("div");At.className="sidebar-panel-body",At.dataset.sidebarPanel=re.id,Le.append(gt,At),$e.set(re.id,Le),ie.set(re.id,At),Me.append(Le)}o.hidden=!1,a.hidden=!1,ie.get("units").append(h,o),ie.get("terrain").append(a),ie.get("turns").append(d,p,f),c.open=!0;const ee=c.querySelector(":scope > summary"),Q=Array.from(c.children).filter(re=>re!==ee),J=Q.indexOf(c.querySelector("#route-list")),He=Q.indexOf(c.querySelector("#track-edit").closest(".edit-actions"));c.replaceChildren(ee,M("航路设置与选中单位绑定",Q.slice(0,J),!0),M("航路点与顺序",Q.slice(J,He),!0),M("航迹曲线与控制点",Q.slice(He),!1)),ie.get("routes").append(c);const ge=i("section");ge.className="sidebar-card",ge.append(i("h3","当前航路的绑定对象"));const We=i("div");We.id="route-bindings",We.className="sidebar-bound-list",We.setAttribute("aria-live","polite"),We.textContent="当前航路暂无绑定对象";const Ke=i("div");Ke.className="edit-actions";const _e=i("button","选中全部绑定单位");_e.type="button",_e.id="route-select-bound",Ke.append(_e);const Re=i("label");Re.className="edit-row",Re.append(i("span","编组"));const rt=i("select");rt.id="route-group-select",rt.setAttribute("aria-label","绑定至当前航路的编组"),rt.add(new Option("选择编组","")),Re.append(rt);const Fe=i("button","将编组绑定当前航路");Fe.type="button",Fe.id="route-bind-group";const De=i("div");De.className="edit-actions",De.append(Fe),ge.append(We,Ke,Re,De),ie.get("routes").append(ge),ie.get("range").append(m),ie.get("layers").append(_);const Qe=i("section");Qe.className="sidebar-card",Qe.append(i("h3","航路显示"));const N=(re,qe)=>{const Le=i("label");Le.className="check-row";const gt=i("input");return gt.id=re,gt.type="checkbox",gt.checked=!0,Le.append(gt,document.createTextNode(qe)),Le};Qe.append(N("route-visible","显示所有航路与航路点"),N("route-labels","显示航路点名称与绑定对象")),ie.get("layers").append(Qe),ie.get("project").append(l),u.hidden=!0,u.classList.add("sidebar-legacy-tabs"),t.append(ne,Pe,Me,u);function ye(){return["#task-editor-save","#map-editor-save","#workflow-save-draft"].map(re=>document.querySelector(re)).find(re=>re&&!re.hidden)}function Ce(){if(ce.playerView){Y.hidden=!0;for(const At of[Te,le,G,Se])At.hidden=!0,At.disabled=!0;return}const re=ye(),qe=document.querySelector("#workflow-commit");Te.hidden=!re,Te.disabled=!re||re.disabled,Te.textContent=re?.id==="workflow-save-draft"?"保存草稿":re?.id==="map-editor-save"?"保存地图修订":"保存任务修订",G.hidden=!qe||qe.hidden||qe.disabled,G.disabled=!qe||qe.disabled;const Le=["#map-editor-save-as","#task-editor-save-as"].map(At=>document.querySelector(At)).find(At=>At&&!At.hidden);le.hidden=!Le,le.disabled=!Le||Le.disabled;const gt=document.querySelector("#workflow-snapshot");Se.hidden=!gt||gt.hidden,Se.disabled=!gt||gt.disabled,Y.hidden=Te.hidden&&le.hidden&&G.hidden&&Se.hidden}function Ve(){for(const qe of Jl){const Le=O(qe.id),gt=Le&&qe.id===ae,At=Ze.get(qe.id);At.hidden=!!ce.playerView&&!Le,At.disabled=!Le,At.setAttribute("aria-selected",String(gt)),At.tabIndex=gt?0:-1,$e.get(qe.id).hidden=!gt}const re=ce.playerView?"玩家查看器":"场景编辑器";de.textContent=re,t.setAttribute("aria-label",re),Pe.setAttribute("aria-label",ce.playerView?"标注工具菜单":"编辑工具菜单"),t.dataset.activeTab=ae,t.dataset.playerView=String(!!ce.playerView),t.dataset.editing=String(ce.editing),t.dataset.editable=String(ce.editable),t.dataset.active=String(ce.active!==!1),X.textContent=ce.playerView?ce.editing?"标注中":"浏览":ce.editable?ce.editing?"编辑中":"浏览":"只读历史",we.textContent=ce.playerView?ce.editing?"结束标注":"编辑标注":ce.editing?"退出编辑":"进入编辑",we.disabled=!ce.editable,Qe.hidden=!!ce.playerView,te.hidden=!ce.playerView,te.disabled=!ce.playerView||!n.viewerExport,ue.hidden=!ce.playerView||!n.viewerUndo,L.hidden=!ce.playerView||!n.viewerRedo,ue.disabled=!ce.playerView||!ce.editable||!ce.viewerCanUndo||!n.viewerUndo,L.disabled=!ce.playerView||!ce.editable||!ce.viewerCanRedo||!n.viewerRedo,$.hidden=!ce.playerView,Ce()}function he(re){yt=re,t.dataset.collapsed=String(re),vt.textContent=re?"展开":"收起",vt.setAttribute("aria-expanded",String(!re))}function se(re){const Le={unit:"units",route:"routes",group:"groups",marker:"markers",draw:"drawing",turn:"turns",archive:"project"}[re]??re;!$e.has(Le)||!O(Le)||(xe.set(ae,Me.scrollTop),ae=Le,he(!1),Ve(),Me.scrollTop=xe.get(Le)??0,n.chooseTool(Le))}Pe.addEventListener("keydown",re=>{if(!["ArrowUp","ArrowDown","Home","End"].includes(re.key))return;const qe=Jl.filter(At=>O(At.id)&&!Ze.get(At.id).hidden&&!Ze.get(At.id).disabled),Le=qe.findIndex(At=>Ze.get(At.id)===document.activeElement);if(Le<0)return;re.preventDefault();const gt=re.key==="Home"?qe[0]:re.key==="End"?qe.at(-1):qe[(Le+(re.key==="ArrowDown"?1:-1)+qe.length)%qe.length];se(gt.id),Ze.get(gt.id).focus()});const Xe=()=>{!ce.playerView&&e.dataset.workspace==="manager"?l.parentNode!==e&&(g.parentNode===e?e.insertBefore(l,g.nextSibling):e.append(l),l.open=!1):(l.parentNode!==ie.get("project")&&ie.get("project").append(l),l.open=!0)};return new MutationObserver(Xe).observe(e,{attributes:!0,attributeFilter:["data-workspace"]}),new MutationObserver(Ce).observe(d,{subtree:!0,attributes:!0,attributeFilter:["hidden","disabled"]}),he(!1),Ve(),Xe(),{panels:{groups:ie.get("groups"),markers:ie.get("markers"),drawing:ie.get("drawing"),equipment:ie.get("equipment"),links:ie.get("links")},select:se,sync(re){const qe=!!re.playerView&&!ce.playerView,Le=!re.playerView&&!!ce.playerView,gt=Pe.contains(document.activeElement),At=Le?be:void 0;qe&&(be=ae,R=yt,S=Me.scrollTop,xe.set(ae,Me.scrollTop)),ce={...re},t.hidden=!1,Le&&(xe.set(ae,Me.scrollTop),ae=be??"units",be=void 0,he(R)),ce.playerView&&!wf.has(ae)?(ae="markers",he(!1)):!ce.playerView&&ce.mapOnly&&Tf.has(ae)&&(ae="terrain"),Ve(),Xe(),(qe||Le)&&(Me.scrollTop=Le&&ae===At?S:xe.get(ae)??0,xe.set(ae,Me.scrollTop)),gt&&!O(document.activeElement.dataset.sidebarTab)&&Ze.get(ae).focus()}}}function ib(n,e){let t="";const i=(A,C="")=>{const P=document.createElement(A);return P.textContent=C,P};n.append(i("h3","编组 / 批量操作"));const r=i("div");r.id="group-list",r.className="unit-picker",n.append(r);const s=i("label","编组名称");s.className="edit-row";const o=i("input");o.id="group-name",o.maxLength=128,s.append(o),n.append(s);const a=i("label","编组颜色");a.className="edit-row";const c=i("input");c.type="color",c.id="group-color",c.value="#62ffa8",a.append(c),n.append(a);const l=i("div");l.className="edit-actions",n.append(l);const d=[],u=(A,C,P,I=l)=>{const M=i("button",C);return M.type="button",M.id=A,M.addEventListener("click",P),I.append(M),d.push(M),M},h=i("div");h.id="group-state",h.className="edit-hint",h.setAttribute("role","status");const f=()=>e.read().groups.find(A=>A.id===t),m=()=>e.units().filter(A=>A.groupId===t).map(A=>A.id),_=(A,C)=>{e.change(A,C)&&v()};u("group-create","新建并分配所选",()=>{if(!e.editable())return;const A=o.value.trim()||`编组 ${e.read().groups.length+1}`,C=c.value,P=new Set(e.selectedIds()),I=`group-${crypto.randomUUID()}`;_("新建编组",(M,y)=>{M.groups.push({id:I,name:A,color:C}),y.filter(U=>P.has(U.id)).forEach(U=>{U.groupId=I}),t=I})}),u("group-save","保存名称 / 颜色",()=>{if(!f()||!o.value.trim())return;const A=o.value.trim(),C=c.value;_("修改编组",P=>{const I=P.groups.find(M=>M.id===t);I.name=A,I.color=C})});const g=i("div");g.className="edit-actions",n.append(g),u("group-assign","所选加入编组",()=>{if(!f())return;const A=new Set(e.selectedIds());_("分配编组",(C,P)=>P.filter(I=>A.has(I.id)).forEach(I=>{I.groupId=t}))},g),u("group-unassign","所选退出编组",()=>{const A=new Set(e.selectedIds());_("移除编组归属",(C,P)=>P.filter(I=>A.has(I.id)).forEach(I=>{delete I.groupId}))},g);const p=i("div");p.className="edit-actions",n.append(p),u("group-select","选中整组",()=>{f()&&e.select(m())},p),u("group-focus","定位整组",()=>{f()&&e.focus(m())},p),u("group-copy","复制整组",()=>{const A=f();A&&e.copy(A)},p);const E=i("div");E.className="edit-actions",n.append(E),u("group-delete","删除编组 / 保留单位",()=>{f()&&_("删除编组",(A,C)=>{A.groups=A.groups.filter(P=>P.id!==t),C.filter(P=>P.groupId===t).forEach(P=>{delete P.groupId}),t=""})},E);const x=i("div");x.id="group-members",x.className="unit-picker",n.append(x,h);function v(){const A=e.read(),C=e.units(),P=e.selectedIds(),I=e.editable();A.groups.some(y=>y.id===t)||(t=A.groups[0]?.id??""),r.replaceChildren(...A.groups.map(y=>{const U=C.filter(W=>W.groupId===y.id).length,F=i("button",`${y.name} (${U})`);return F.style.borderColor=y.color,F.setAttribute("aria-pressed",String(y.id===t)),F.addEventListener("click",()=>{t=y.id,o.value=y.name,c.value=y.color,v()}),F.addEventListener("dblclick",()=>e.select(C.filter(W=>W.groupId===y.id).map(W=>W.id))),F}));const M=f();document.activeElement!==o&&(o.value=M?.name??""),document.activeElement!==c&&(c.value=M?.color??"#62ffa8"),o.disabled=c.disabled=!I;for(const y of d)y.disabled=!I;for(const y of["group-select","group-focus"])n.querySelector(`#${y}`).disabled=!M||!m().length;for(const y of["group-save","group-assign","group-copy","group-delete"])n.querySelector(`#${y}`).disabled=!I||!M;n.querySelector("#group-assign").disabled||=!P.length,n.querySelector("#group-copy").disabled||=!m().length,n.querySelector("#group-unassign").disabled=!I||!C.some(y=>P.includes(y.id)&&y.groupId),x.replaceChildren(...C.filter(y=>y.groupId===t).map(y=>{const U=i("button",y.label);return U.setAttribute("aria-pressed",String(P.includes(y.id))),U.addEventListener("click",()=>e.select([y.id])),U})),h.textContent=`${M?`${M.name} · ${m().length} 个单位`:"暂无编组"} / 当前选择 ${P.length} 个${I?"":" / 只读"}`}return v(),{sync:v}}const ko=new WeakMap,un=n=>JSON.stringify([n.id,n.revision]),Ql=n=>({id:n.id,revision:n.revision}),rb=n=>({L:"轻型",M:"中型",H:"重型"})[n];function Af(n,e,t){const i=n.sessions.find(s=>s.id===e),r=i?.sealedScenes?.find(s=>s.turn===t);return JSON.stringify([n.id,n.players,n.aircraft,n.sp,i?.status,i?.workflow,r?.resourceSnapshot??i?.resourceSnapshot,r?.rulesSnapshot??i?.rulesSnapshot,(r?.units??i?.units??[]).map(s=>({id:s.id,player:s.player,aircraftRef:s.aircraftRef,loadout:s.loadout,spRefs:s.spRefs,playerActions:s.playerActions}))])}function Rf(n,e){const t=new Map;for(const i of[...n,...e])t.has(un(i))||t.set(un(i),i);return[...t.values()].sort((i,r)=>i.id===r.id?r.revision-i.revision:i.id.localeCompare(r.id))}function sb(n,e){const t={};ko.set(n,t);const i=($,te="",ue="")=>{const L=document.createElement($);return L.textContent=te,L.id=ue,L},r=i("section");r.className="player-roster";const s=i("div");s.className="player-roster-header";const o=i("button","新建玩家","player-roster-new");o.type="button";const a=i("button","收起","player-roster-collapse");a.type="button",a.setAttribute("aria-expanded","true"),s.append(i("h3","玩家"),o,a);const c=i("div","","player-roster-form-area");c.hidden=!0;const l=i("div","","player-roster-pending");l.hidden=!0;const d=i("div","","player-roster-list");d.className="player-roster-list";const u=i("p","","player-roster-feedback");u.setAttribute("role","status"),u.hidden=!0,r.append(s,c,l,d,u),n.replaceChildren(r);let h,f,m,_="",g=-1,p="",E=[],x=[],v=[],A=qu,C="",P="",I="",M=0,y=0,U=0,F,W,V,ne;const Z=[],de=[],X=new Map,oe=[],we=$=>{const te=$ instanceof Error?$.message:String($);u.textContent=te,u.hidden=!1,e.report(te)},Be=()=>{if(ko.get(n)!==t||!n.isConnected||!r.isConnected||!h)throw new Error("玩家栏已变化，请使用当前面板。");if(e.readRevision&&h.revision!==void 0){if(e.readRevision()!==h.revision)throw new Error("工程已变化，请等待玩家栏同步。")}else if(e.read&&Af(e.read(),h.sessionId,h.turn)!==p)throw new Error("工程已变化，请等待玩家栏同步。");if(h.mapOnly)throw new Error("地图模式下玩家栏为只读。");return h},Ye=$=>{try{Be(),$()}catch(te){we(te)}},yt=()=>{const $=Be();if(!$.editable)throw new Error("历史回合或当前场景为只读。");if($.pending||e.busy?.())throw new Error("请先完成或取消当前放置。");return $},vt=($,te,ue,L,Pe)=>{const Me=i("label",ue);Me.htmlFor=te;const $e=i("select","",te);for(const[ie,Ze]of L){const xe=i("option",Ze);xe.value=ie,$e.append(xe)}return $e.value=Pe,Me.append($e),$.append(Me),Z.push($e),$e},Y=($,te,ue)=>{const L=$.spSlots?.[ue];return!!L&&!!te.weapon&&te.weapon.kind!=="normal"&&(!A.config.enforceWeight||!!te.weapon.weight&&Dm(L,te.weapon.weight))&&(te.weapon.kind==="universal"||!!$.allowedWeapons?.includes(te.name))},Te=()=>{const $=!!h?.editable&&!h.mapOnly&&!h.pending;o.disabled=!$;for(const te of Z)te.disabled=!$;V&&(V.disabled=!$||!F?.playerId),ne&&(ne.disabled=!$||!F?.playerId||!F?.aircraftKey);for(const te of oe)te.node.disabled=!$||!te.available;for(const[te,ue]of X)ue.setAttribute("aria-selected",String(te===h?.selectedUnitId)),ue.setAttribute("data-selected",String(te===h?.selectedUnitId))},G=()=>{c.replaceChildren(),Z.length=0,de.length=0,W=void 0,V=void 0,ne=void 0;const $=++y;if(c.hidden=!F,!F||!h)return;const te=F,ue=()=>{if(F!==te||$!==y||!c.isConnected)throw new Error("玩家创建表单已变化。")},L=i("form","","player-roster-form");L.className="player-form",L.append(i("h4","呼号"));const Pe=new Set(E.map(ce=>ce.player?.id).filter(Boolean)),Me=(h.project.players??[]).filter(ce=>!Pe.has(ce.id));Me.some(ce=>ce.id===te.playerId)||(te.playerId=""),W=vt(L,"player-roster-player","玩家呼号",[["","请选择玩家"],...Me.map(ce=>[ce.id,ce.callsign])],te.playerId),Me.length||L.append(i("p","暂无可用呼号")),L.append(i("h4","装备")),V=vt(L,"player-roster-aircraft","机体",[["","请选择机体"],...x.map(ce=>[un(ce),`${ce.name} · 修订 ${ce.revision}`])],te.aircraftKey);const $e=i("div","GUN / MSL / FLR","player-roster-inherent");$e.className="player-chips",L.append($e);const ie=i("div","","player-roster-slots");ie.className="player-slots",L.append(ie);const Ze=x.find(ce=>un(ce)===te.aircraftKey);Ze&&(te.loadout=te.loadout.filter(ce=>{const be=v.find(R=>un(R)===un(ce.weaponRef));return be&&Y(Ze,be,ce.slot)}),Ze.spSlots?.length||ie.append(i("p","无 SP 槽")),Ze.spSlots?.forEach((ce,be)=>{const R=i("div");R.className="player-slot";const S=v.filter(Q=>Y(Ze,Q,be)),O=te.loadout.find(Q=>Q.slot===be)?.weaponRef,ee=vt(R,`player-roster-slot-${be}`,`SP${be+1} · ${rb(ce)} ${ce}`,[["","空槽"],...S.map(Q=>[un(Q),`${Q.name} · ${Q.weapon?.weight??""} · 修订 ${Q.revision}`])],O?un(O):"");de.push({slot:be,node:ee,choices:S}),ee.addEventListener("change",()=>Ye(()=>{if(ue(),!ee.isConnected)throw new Error("SP 槽位已变化。");if(ee.value&&!S.some(J=>un(J)===ee.value))throw new Error("所选 SP 的重量或机体许可不匹配。");te.loadout=te.loadout.filter(J=>J.slot!==be);const Q=S.find(J=>un(J)===ee.value);Q&&te.loadout.push({slot:be,weaponRef:Ql(Q)}),te.loadout.sort((J,He)=>J.slot-He.slot)})),ie.append(R)}));const xe=i("div");xe.className="player-actions",ne=i("button","完成配置","player-roster-create"),ne.type="submit";const ae=i("button","取消","player-roster-create-cancel");ae.type="button",xe.append(ne,ae),L.append(xe),c.append(L),W.addEventListener("change",()=>Ye(()=>{ue(),te.playerId=W.value,Te()})),V.addEventListener("change",()=>Ye(()=>{if(ue(),!te.playerId)throw new Error("请先选择玩家呼号。");if(V.value&&!x.some(ce=>un(ce)===V.value))throw new Error("机体修订已变化。");te.aircraftKey=V.value,G()})),ae.addEventListener("click",()=>Ye(()=>{ue(),F=void 0,G()})),L.addEventListener("submit",ce=>{ce.preventDefault(),Ye(()=>{ue();const be=yt();if(te.projectId!==be.project.id||te.sessionId!==be.sessionId||te.turn!==be.turn)throw new Error("创建场景或回合已变化，请取消后重新新建。");if(!(be.project.players??[]).some(Q=>Q.id===te.playerId)||E.some(Q=>Q.player?.id===te.playerId))throw new Error("请选择尚未加入当前场景的玩家。");const R=x.find(Q=>un(Q)===te.aircraftKey);if(!R)throw new Error("请选择有效机体。");const S=de.filter(Q=>Q.node.value).map(Q=>{const J=Q.choices.find(He=>un(He)===Q.node.value);if(!J)throw new Error("所选 SP 的重量或机体许可不匹配。");return{slot:Q.slot,weaponRef:Ql(J)}}),O=Lm(R,v,S,A);if(O.length)throw new Error(O.join("；"));const ee={playerId:te.playerId,aircraftRef:Ql(R),loadout:S};F=void 0,++y;try{e.beginCreate(ee)}catch(Q){throw F=te,G(),Q}G()})}),Te()},le=()=>{l.replaceChildren();const $=++U,te=h?.pending;if(l.hidden=!te,!te||!h)return;const ue=i("article");ue.className="player-card player-pending-card";const L=x.find(R=>un(R)===un(te.aircraftRef));ue.append(i("h4",`${te.player.callsign} · 待落位`),i("p",L?.name??"已配置机体"));const Pe=te.loadout.map(R=>`SP${R.slot+1} ${v.find(S=>un(S)===un(R.weaponRef))?.name??"已配置 SP"}`).join(" / "),Me=h,ie=Me.project.sessions.find(R=>R.id===Me.sessionId)?.resourceSnapshot.sp.find(R=>R.name==="FLR")??Me.project.sp.find(R=>R.name==="FLR");ue.append(i("p",`FLR 剩余 ${ie?ie.weapon?.usageLimit??"—":4} 次`),i("p",Pe||"空 SP 挂载"));for(const R of te.loadout){const S=v.find(O=>un(O)===un(R.weaponRef));ue.append(i("p",`SP${R.slot+1} · ${S?.name??"已配置 SP"} · 冷却 0 回合 · ${S?.weapon?.usageLimit===void 0?"已用 0 次":`剩余 ${S.weapon.usageLimit} 次`}`))}const Ze=i("div");Ze.className="player-actions";const xe=i("button",te.armed?"等待地图落位":"生成位置","player-roster-arm");xe.type="button",xe.disabled=te.armed||!h.editable;const ae=i("button","取消创建","player-roster-placement-cancel");ae.type="button",Ze.append(xe,ae),ue.append(Ze),l.append(ue);const ce={projectId:Me.project.id,sessionId:Me.sessionId,turn:Me.turn},be=()=>{const R=Be();if($!==U||!ue.isConnected||R.project.id!==ce.projectId||R.sessionId!==ce.sessionId||R.turn!==ce.turn||!R.pending||un(R.pending.aircraftRef)!==un(te.aircraftRef)||R.pending.player.id!==te.player.id)throw new Error("待落位配置已变化。");return R};xe.addEventListener("click",()=>Ye(()=>{const R=be();!R.editable||R.pending?.armed||e.armPlacement()})),ae.addEventListener("click",()=>Ye(()=>{be(),e.cancelPlacement()}))},Se=()=>{d.replaceChildren(),X.clear(),oe.length=0;const $=++M;if(!h)return;const te={projectId:h.project.id,sessionId:h.sessionId,turn:h.turn},ue=E.filter(L=>L.player);ue.length||d.append(i("p","暂无玩家"));for(const L of ue){const Pe=i("article","",`player-roster-unit-${L.id}`);Pe.className="player-card",Pe.tabIndex=0,Pe.setAttribute("role","group"),Pe.setAttribute("aria-label",`玩家 ${L.player.callsign}`);const Me=i("h4",L.player.callsign),$e=x.find(be=>L.aircraftRef&&un(be)===un(L.aircraftRef));Pe.append(Me,i("p",$e?.name??"未绑定机体"));const ie=Pm(h.project,h.sessionId,L.id,h.turn),Ze=ie.find(be=>be.name==="FLR");Pe.append(i("p",`FLR 剩余 ${Ze?.remaining??"—"} 次`));const xe=()=>{const be=Be();if($!==M||!Pe.isConnected||be.project.id!==te.projectId||be.sessionId!==te.sessionId||be.turn!==te.turn||!E.some(R=>R.id===L.id))throw new Error("玩家单位或回合已变化。");return be},ae=be=>["BUTTON","SELECT","INPUT"].includes(be.target?.tagName?.toUpperCase()??"");Pe.addEventListener("click",be=>Ye(()=>{ae(be)||(xe(),e.selectUnit(L.id,!1))})),Pe.addEventListener("dblclick",be=>Ye(()=>{ae(be)||(xe(),e.selectUnit(L.id,!0))})),Pe.addEventListener("keydown",be=>{be.target!==Pe||!["Enter"," "].includes(be.key)||(be.preventDefault(),Ye(()=>{xe(),e.selectUnit(L.id,be.key==="Enter")}))});const ce=i("div");ce.className="player-weapon-list",Pe.append(ce);for(const be of ie){const R=i("div");R.className="player-weapon-row";const S=be.slot===void 0?be.name:`SP${be.slot+1} · ${be.name}`,O=be.durationRemaining>0?`效果剩余 ${be.durationRemaining} 回合 · 冷却 ${be.profile?.cooldownTurns??0}T`:`冷却 ${be.cooldownRemaining} 回合`;R.append(i("strong",S),i("span",be.jettisoned?"已抛弃":`${O} · ${be.remaining===void 0?`已用 ${be.uses} 次`:`剩余 ${be.remaining} 次`}`));const ee=i("div");ee.className="player-actions";const Q=i("button","使用");Q.type="button",Q.setAttribute("data-action","use"),Q.setAttribute("data-weapon-key",be.key),ee.append(Q),oe.push({node:Q,available:be.canUse&&h.turn>0});let J=!1;const He=(ge,We,Ke)=>Ye(()=>{xe();const _e=yt();if(!Ke.isConnected||!We||J||_e.turn<1)throw new Error("上一回合的此项行动当前不可记录。");J=!0,Ke.disabled=!0;const Re=oe.filter(Fe=>Fe.node.getAttribute("data-weapon-key")===be.key&&Pe.contains(Fe.node)),rt=Re.map(Fe=>Fe.available);for(const Fe of Re)Fe.available=!1;try{e.recordAction(L.id,be.key,ge)}catch(Fe){throw J=!1,Re.forEach((De,Qe)=>{De.available=rt[Qe]}),Te(),Fe}});if(Q.addEventListener("click",ge=>{ge.stopPropagation(),He("use",be.canUse,Q)}),be.slot!==void 0||be.profile?.kind&&be.profile.kind!=="normal"){const ge=i("button","抛弃");ge.type="button",ge.setAttribute("data-action","drop"),ge.setAttribute("data-weapon-key",be.key),ee.append(ge),oe.push({node:ge,available:be.canJettison&&h.turn>0}),ge.addEventListener("click",We=>{We.stopPropagation(),He("drop",be.canJettison,ge)})}R.append(ee),ce.append(R)}d.append(Pe),X.set(L.id,Pe)}};return a.addEventListener("click",()=>Ye(()=>{const $=n.getAttribute("data-collapsed")!=="true";n.setAttribute("data-collapsed",String($)),a.textContent=$?"展开":"收起",a.setAttribute("aria-expanded",String(!$))})),o.addEventListener("click",()=>Ye(()=>{const $=yt();if(F){e.report("请先完成或取消当前玩家配置。");return}F={playerId:"",aircraftKey:"",loadout:[],projectId:$.project.id,sessionId:$.sessionId,turn:$.turn},G()})),{sync($){if(ko.get(n)!==t||!r.isConnected)return;if(h={...$,pending:$.pending?structuredClone($.pending):void 0},($.revision===void 0?$.project!==f:$.revision!==m||$.project.id!==f?.id)||$.sessionId!==_||$.turn!==g){f=$.project,m=$.revision,_=$.sessionId,g=$.turn,p=e.readRevision&&$.revision!==void 0?"":Af($.project,$.sessionId,$.turn);const L=$.project.sessions.find(ie=>ie.id===$.sessionId),Pe=L?.sealedScenes?.find(ie=>ie.turn===$.turn);E=Pe?.units??L?.units??[],x=Rf(Pe?.resourceSnapshot.aircraft??L?.resourceSnapshot.aircraft??[],$.project.aircraft),v=Rf(Pe?.resourceSnapshot.sp??L?.resourceSnapshot.sp??[],$.project.sp),A=Pe?.rulesSnapshot??L?.rulesSnapshot??qu;const Me=JSON.stringify([$.project.id,$.project.players,x,v,A,E.map(ie=>ie.player?.id)]);P!==Me&&(P=Me,F&&G());const $e=JSON.stringify([$.project.id,$.sessionId,$.turn,x,v,A,E.filter(ie=>ie.player).map(ie=>({id:ie.id,player:ie.player,aircraftRef:ie.aircraftRef,loadout:ie.loadout,spRefs:ie.spRefs,playerActions:ie.playerActions}))]);if(C!==$e){C=$e;try{Se()}catch(ie){we(ie)}}}const ue=JSON.stringify([$.project.id,$.sessionId,$.turn,$.editable,$.pending]);I!==ue&&(I=ue,le()),Te()},destroy(){ko.get(n)===t&&(ko.delete(n),++M,++y,++U,n.replaceChildren())}}}const Fo=512,Oo=[["#ff6935","橙"],["#2d8cff","蓝"],["#ffd84a","黄"],["#20e27e","绿"],["#ff4d5a","红"]],Ri=n=>!!n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=1e5),zo=n=>/^#[0-9a-f]{6}$/i.test(n),ed=n=>`${n.kind}:${n.id}`,Cf=n=>{const e=n.indexOf(":"),t=n.slice(0,e),i=n.slice(e+1);return e>0&&i&&(t==="unit"||t==="marker")?{kind:t,id:i}:null},ob=(n,e,t)=>n.some(i=>i.fromUnitId===e&&i.to.kind===t.kind&&i.to.id===t.id||t.kind==="unit"&&i.to.kind==="unit"&&i.fromUnitId===t.id&&i.to.id===e);function ab(n){let e=!1,t="",i="",r="",s="";const o=new xn,a=new Map;o.name="Editor links",o.userData.editorLinks=!0,o.renderOrder=1e3,n.world.add(o);const c=(G,le="")=>{const Se=document.createElement(G);return Se.textContent=le,Se},l=c("div");l.className="scene-tool-panel editor-links-panel",n.panel.append(l);const d=c("style");d.textContent=`
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
  `,l.append(d,c("h3","连线"));const u=[],h=(G,le,Se)=>{const $=()=>{e||Se()};G.addEventListener(le,$),u.push({element:G,event:le,run:$})},f=()=>{const G=c("div");return G.className="tool-actions",l.append(G),G},m=(G,le,Se,$)=>{const te=c("button",Se);return te.id=le,te.type="button",h(te,"click",$),G.append(te),te},_=(G,le,Se)=>{const $=c("label");$.className="tool-row",$.append(c("span",Se));const te=c(G);return te.id=le,te.setAttribute("aria-label",Se),$.append(te),l.append($),te},g=(G,le)=>{const Se=c("option",G);return Se.value=le,Se},p=f(),E=m(p,"link-mode","连线模式",()=>{if(t){oe();return}if(!Z()){Y();return}const G=n.selectedUnitId();if(!G||!n.readUnits().some(le=>le.id===G&&Ri(le.position))){s="请选择源单位",Y();return}t=G,s="",A.value="",n.onModeChange(!0),Y()}),x=m(p,"link-cancel","取消",oe),v=c("p");v.id="link-source",l.append(v);const A=_("select","link-target","目标"),C=_("select","link-style","颜色");C.replaceChildren(...Oo.map(([G,le])=>g(le,G)),g("自定义","custom")),C.value=Oo[0][0];const P=_("input","link-color","自定义颜色");P.type="color",P.value=Oo[0][0];const I=m(f(),"link-add","添加连线",()=>{const G=Cf(A.value),le=de();if(!Z()){Y();return}if(!le||!G){s="请选择源与目标",Y();return}Be(le,G)}),M=_("select","link-list","连线列表");M.size=5;const y=_("input","link-visible","显示");y.type="checkbox",y.checked=!0;const U=f(),F=m(U,"link-apply","修改颜色 / 显示",()=>{const G=i,le=P.value,Se=y.checked;if(!Z()){Y();return}if(!zo(le)){s="请选择有效颜色",Y();return}we("修改连线",$=>{const te=$.links?.find(ue=>ue.id===G);if(!te)throw new Error("连线已移除");te.color=le.toLowerCase(),te.visible=Se})}),W=m(U,"link-delete","删除连线",()=>{const G=i;if(!Z()){Y();return}we("删除连线",le=>{if(!le.links?.some(Se=>Se.id===G))throw new Error("连线已移除");le.links=le.links.filter(Se=>Se.id!==G)})}),V=c("p");V.id="link-state",V.setAttribute("role","status"),l.append(V),h(A,"change",()=>{s="",Y()}),h(C,"change",()=>{if(!Z()){Y();return}zo(C.value)&&(P.value=C.value)}),h(P,"input",()=>{if(!Z()){Y();return}C.value=Oo.find(([G])=>G===P.value.toLowerCase())?.[0]??"custom"}),h(M,"change",()=>{i=M.value,r="",s="",Y()});const ne=G=>{!e&&t&&G.key==="Escape"&&(oe(),G.preventDefault())};typeof addEventListener=="function"&&addEventListener("keydown",ne);function Z(){return!e&&n.editable()&&!n.busy()}function de(){return t||n.selectedUnitId()||""}function X(){t&&(t="",A.value="",n.onModeChange(!1))}function oe(){e||(X(),A.value="",s="",Y())}function we(G,le){if(!Z())return Y(),!1;let Se=!1;try{Se=n.change(G,$=>{if(!Z())throw new Error("当前状态已变化");le($)}),s=Se?"已保存":"未保存"}catch($){s=$ instanceof Error?$.message:String($)}return Y(),Se}function Be(G,le){const Se=P.value,$=L=>{const Pe=n.readUnits(),Me=Pe.find(ie=>ie.id===G),$e=le.kind==="unit"?Pe.find(ie=>ie.id===le.id):L.markers.find(ie=>ie.id===le.id);if(!Ri(Me?.position)||!Ri($e?.position))throw new Error("源或目标已移除");if(le.kind==="unit"&&le.id===G)throw new Error("源与目标相同");if((L.links?.length??0)>=Fo)throw new Error("连线已达上限 512");if(ob(L.links??[],G,le))throw new Error("连线已存在");if(!zo(Se))throw new Error("请选择有效颜色")};try{$(n.read())}catch(L){return s=L instanceof Error?L.message:String(L),Y(),!1}const te=`link-${crypto.randomUUID()}`,ue=we("添加连线",L=>{$(L),(L.links??=[]).push({id:te,fromUnitId:G,to:{...le},color:Se.toLowerCase(),visible:!0})});return ue&&(i=te,r="",Y()),ue}function Ye(G,le){if(e||!t)return!1;if(!Z())return Y(),!0;const Se={kind:G,id:le};return A.value=ed(Se),Be(t,Se),!0}function yt(G){o.remove(G.line),G.line.geometry.dispose(),G.line.material.dispose()}function vt(){if(e)return;const G=n.read();if(!G.links?.length&&!t){for(const te of a.values())yt(te);a.clear();return}const le=new Map(n.readUnits().map(te=>[te.id,te])),Se=new Map(G.markers.map(te=>[te.id,te]));if(t&&(!n.editable()||!Ri(le.get(t)?.position))){X(),s="",Y();return}const $=new Set;for(const te of(G.links??[]).slice(0,Fo)){if($.has(te.id))continue;$.add(te.id);let ue=a.get(te.id);if(!ue){const ie=new Ut,Ze=new Tt(new Float32Array(6),3).setUsage(Lc);ie.setAttribute("position",Ze);const xe=new ui({color:"#ff6935",depthTest:!1,depthWrite:!1}),ae=new hn(ie,xe);ae.name=`Editor link ${te.id}`,ae.userData.editorLinkId=te.id,ae.userData.editorTools=!0,ae.renderOrder=1e3,ae.frustumCulled=!1,ue={line:ae,position:Ze,coordinates:[NaN,NaN,NaN,NaN,NaN,NaN]},a.set(te.id,ue),o.add(ae)}const L=le.get(te.fromUnitId)?.position,Pe=(te.to.kind==="unit"?le.get(te.to.id):Se.get(te.to.id))?.position;ue.line.visible=te.visible!==!1&&Ri(L)&&Ri(Pe);const Me=zo(te.color)?te.color.toLowerCase():"#ff6935";if(`#${ue.line.material.color.getHexString()}`!==Me&&ue.line.material.color.set(Me),!Ri(L)||!Ri(Pe))continue;let $e=!1;for(let ie=0;ie<6;ie++){const Ze=ie<3?L:Pe,xe=ie%3,ae=(xe===0?Ze.x:xe===1?Ze.y:Ze.z)*it;ue.coordinates[ie]!==ae&&(ue.coordinates[ie]=ae,ue.position.array[ie]=ae,$e=!0)}$e&&(ue.position.needsUpdate=!0)}for(const[te,ue]of a)$.has(te)||(yt(ue),a.delete(te))}function Y(){if(e)return;const G=n.read(),le=n.readUnits(),Se=(G.links??[]).slice(0,Fo);t&&(!n.editable()||!le.some(ae=>ae.id===t&&Ri(ae.position)))&&X();const $=de(),te=le.find(ae=>ae.id===$),ue=A.value,L=[g("选择目标","")];for(const ae of le)ae.id!==$&&Ri(ae.position)&&L.push(g(`单位：${ae.label}`,ed({kind:"unit",id:ae.id})));for(const ae of G.markers)Ri(ae.position)&&L.push(g(`标记：${ae.label}`,ed({kind:"marker",id:ae.id})));A.replaceChildren(...L),A.value=L.some(ae=>ae.value===ue)?ue:"",Se.some(ae=>ae.id===i)||(i=Se[0]?.id??""),M.replaceChildren(...Se.map(ae=>{const ce=le.find(R=>R.id===ae.fromUnitId)?.label??ae.fromUnitId,be=(ae.to.kind==="unit"?le:G.markers).find(R=>R.id===ae.to.id)?.label??ae.to.id;return g(`${ce} → ${be}${ae.visible===!1?" · 隐藏":""}`,ae.id)})),M.value=i;const Pe=Se.find(ae=>ae.id===i),Me=Pe?`${Pe.id}|${Pe.color}|${Pe.visible!==!1}`:"";Me!==r&&(r=Me,Pe?(P.value=zo(Pe.color)?Pe.color.toLowerCase():"#ff6935",C.value=Oo.find(([ae])=>ae===P.value)?.[0]??"custom",y.checked=Pe.visible!==!1):y.checked=!0);const $e=Z(),ie=Ri(te?.position);E.disabled=!t&&(!$e||!ie||Se.length>=Fo),E.setAttribute("aria-pressed",String(!!t)),x.disabled=!t,A.disabled=!$e,C.disabled=P.disabled=!$e,I.disabled=!$e||!ie||!A.value||Se.length>=Fo,y.disabled=F.disabled=W.disabled=!$e||!Pe,v.textContent=`源：${te?.label??"未选择"}${t?" · 连线中":""}`;const Ze=Cf(A.value),xe=Ze&&(Ze.kind==="unit"?le:G.markers).find(ae=>ae.id===Ze.id)?.label;V.textContent=s||(xe?`目标：${xe}`:""),vt()}function Te(){if(!e){X(),e=!0,typeof removeEventListener=="function"&&removeEventListener("keydown",ne);for(const G of u)G.element.removeEventListener(G.event,G.run);for(const G of a.values())yt(G);a.clear(),n.world.remove(o),l.remove()}}return Y(),{sync:Y,update:vt,active:()=>!e&&!!t,pick:Ye,cancel:oe,dispose:Te}}const cb=.12,lb=1e5,db=1e3,ua=n=>({x:n.x,y:n.y,z:n.z}),Gp=n=>({pitch:n.pitch,yaw:n.yaw,roll:n.roll});function Oc(n){if(!n||!["x","y","z"].every(e=>{const t=n[e];return Number.isFinite(t)&&Math.abs(t)<=lb}))throw new RangeError("Marker coordinates must be finite and within +/-100000 km")}function Wp(n){if(!Number.isFinite(n)||n<=0||n>db)throw new RangeError("Marker size must be positive and at most 1000 km")}function Xp(n){if(!n||![n.pitch,n.yaw,n.roll].every(Number.isFinite))throw new RangeError("Marker attitude must contain finite radians")}function xi(n){return["line","arrow","circle","square","sphere"].includes(n.symbol)}function ha(n){const e=n.attitude??{pitch:0,yaw:0,roll:0};return Xp(e),new fn().setFromEuler(new $n(e.pitch,e.yaw,e.roll,"YXZ"))}function qp(n){const e=new b((n.sizeKm??cb)/2,0,0).applyQuaternion(ha(n)),t=n.position;return[{x:t.x-e.x,y:t.y-e.y,z:t.z-e.z},{x:t.x+e.x,y:t.y+e.y,z:t.z+e.z}]}function os(n){if(n.controlPoints!==void 0){if(n.controlPoints.length!==2)throw new RangeError("Marker control points must contain exactly two points");return[ua(n.controlPoints[0]),ua(n.controlPoints[1])]}return qp(n)}function Tc(n,e){if(!Array.isArray(e)||e.length!==2)throw new RangeError("Marker control points must contain exactly two points");const[t,i]=e;Oc(t),Oc(i);const r=i.x-t.x,s=i.y-t.y,o=i.z-t.z,a=Math.hypot(r,s,o);Wp(a);const c=ha(n),l=new b(1,0,0).applyQuaternion(c).normalize(),d=new b(r/a,s/a,o/a);let u;if(n.attitude!==void 0&&l.distanceTo(d)<=16*Number.EPSILON)u=Gp(n.attitude);else{const h=new fn().setFromUnitVectors(l,d).multiply(c).normalize(),f=new $n().setFromQuaternion(h,"YXZ");u={pitch:f.x,yaw:f.y,roll:f.z}}return{...n,position:{x:(t.x+i.x)/2,y:(t.y+i.y)/2,z:(t.z+i.z)/2},attitude:u,sizeKm:a,controlPoints:[ua(t),ua(i)]}}function Yp(n,e,t,i){Oc(e),Xp(t),Wp(i);const r={...n,position:ua(e),attitude:Gp(t),sizeKm:i};return n.controlPoints!==void 0&&(r.controlPoints=qp(r),r.controlPoints.forEach(Oc)),r}const Vn=n=>({x:n.x,y:n.y,z:n.z}),Gn=n=>new b(n.x,n.y,n.z).multiplyScalar(it),ds=(n,e)=>Math.hypot(e.x-n.x,e.y-n.y,e.z-n.z),Pr=n=>`${n}-${crypto.randomUUID()}`,hr=n=>Number(n.toFixed(5)).toString(),td=n=>[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=1e5),ub=(n,e)=>({horizontal:Math.hypot(e.x-n.x,e.z-n.z),deltaY:e.y-n.y,slant:ds(n,e)}),Xs=(n,e)=>{const t=ub(n,e);return`水平 ${hr(t.horizontal)} km · 高差 ${t.deltaY>=0?"+":""}${hr(t.deltaY)} km · 斜距 ${hr(t.slant)} km`},Pf=(n,e,t,i)=>t==="sphere"?ds(n,e):i==="xz"?Math.hypot(e.x-n.x,e.z-n.z):i==="xy"?Math.hypot(e.x-n.x,e.y-n.y):Math.hypot(e.y-n.y,e.z-n.z);function hb(n){let e=!1,t="",i="",r="",s=null,o=!1,a,c="",l=n.editable(),d=!1,u=null,h=null;const f=new xn,m=new xn;f.name="Editor markers and drawings",m.name="Editor tool preview",f.userData.editorTools=!0,m.userData.editorTools=!0,n.world.add(f,m);const _=document.createElement("div");_.className="editor-tools-labels",_.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;",n.labelRoot.append(_);const g=[],p=[],E=document.createElement("style");E.textContent=`
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
  `,n.markersPanel.append(E);const x=(T,D="")=>{const k=document.createElement(T);return k.textContent=D,k},v=(T,D)=>{T.classList.add("scene-tool-panel"),T.append(x("h3",D))};v(n.markersPanel,"自定义标记点"),v(n.drawingsPanel,"标尺与圆规");const A=x("p"),C=x("p");A.id="marker-status",C.id="drawing-status";for(const T of[A,C])T.className="tool-status",T.setAttribute("role","status");const P=(T,D=u?.kind==="marker"?"markers":"drawing")=>{(D==="markers"?A:C).textContent=T},I=T=>(p.push(T),T),M=T=>{const D=x("div");return D.className="tool-actions",T.append(D),D},y=(T,D,k,H,q=!0)=>{const me=x("button",k);return me.type="button",me.id=D,me.addEventListener("click",()=>{if(!(e||q&&!n.editable()))try{H()}catch(pe){P(pe instanceof Error?pe.message:String(pe),D.startsWith("marker-")?"markers":"drawing")}}),T.append(me),q&&I(me),me},U=(T,D,k,H=!0)=>{const q=x("details");return q.id=D,q.open=H,q.append(x("summary",k)),T.append(q),q},F=(T,D,k,H,q="text")=>{const me=x("label");me.className="tool-row",me.append(x("span",k));const pe=I(x("input"));return pe.id=D,pe.type=q,pe.value=H,q==="number"?pe.step="any":q==="text"&&(pe.maxLength=128),me.append(pe),T.append(me),pe},W=(T,D,k,H,q=!0)=>{const me=x("label");me.className="tool-row",me.append(x("span",k));const pe=x("select");return pe.id=D,pe.setAttribute("aria-label",k),H.forEach(([ot,Je])=>pe.add(new Option(Je,ot))),me.append(pe),T.append(me),q&&I(pe),pe},V=T=>{if(!T.value.trim()||!Number.isFinite(T.valueAsNumber))throw new Error("请填写有效数值");return T.valueAsNumber},ne=(T,D,k,H)=>{const q=x("div");q.className="tool-xyz",T.append(x("p",k),q);const me={};for(const pe of["x","z","y"]){const ot=pe==="y"?"Z":pe==="z"?"Y":"X",Je=x("label",`${ot}（km）`),Vt=I(x("input"));Vt.id=`${D}-${pe}`,Vt.type="number",Vt.step="any",Vt.value=String(H[pe]),Vt.setAttribute("aria-label",`${k} ${ot}（km）`),Je.append(Vt),q.append(Je),me[pe]=Vt}return{row:q,fields:me,read:()=>{const pe={x:V(me.x),y:V(me.y),z:V(me.z)};if(!td(pe))throw new Error("点位坐标须为有限数值，绝对值不超过100000 km");return pe},set:pe=>{for(const ot of["x","y","z"])me[ot].value=String(pe[ot])}}},Z=T=>/^#[0-9a-f]{6}$/i.test(T.value)?T.value.toLowerCase():"#ffd84a",de=(T,D)=>T.value.trim().slice(0,128)||D,X=T=>{for(const D of[...T.children])T.remove(D),D.traverse(k=>{(k instanceof Ae||k instanceof hn||k instanceof gp)&&(k.geometry.dispose(),(Array.isArray(k.material)?k.material:[k.material]).forEach(q=>q.dispose()))})},oe=(T,D,k=1)=>new hn(new Ut().setFromPoints(T),new ui({color:D,transparent:!0,opacity:k,depthWrite:!1})),we=(T,D,k,H=.045)=>{const q=new Ae(new zr(H*it,10,8),new vn({color:k,depthWrite:!1}));return q.position.copy(Gn(D)),T.add(q),q},Be=(T,D)=>{D==="xz"?T.rotation.x=-Math.PI/2:D==="yz"&&(T.rotation.y=Math.PI/2)},Ye=(T,D)=>Array.from({length:129},(k,H)=>{const q=H/128*Math.PI*2,me=Math.cos(q)*T,pe=Math.sin(q)*T;return D==="xy"?new b(me,pe,0):D==="yz"?new b(0,me,pe):new b(me,0,pe)}),yt=(T,D,k=!1)=>{const H=new xn;H.position.copy(Gn(D.position)),H.quaternion.copy(ha(D)),T.add(H),H.userData.markerSize=D.sizeKm??.12;const q=it*(D.sizeKm??.12),me=D.color,pe=k?.65:1,ot=pe*Math.min(.6,Math.max(.02,D.opacity??.12));if(D.symbol==="cross")H.add(oe([new b(-q,.4,-q),new b(q,.4,q)],me,pe)),H.add(oe([new b(-q,.4,q),new b(q,.4,-q)],me,pe));else if(D.symbol==="flag"){H.add(oe([new b(0,.2,0),new b(0,q*3,0)],me,pe));const Je=new Ae(new Br(q*1.6,q),new vn({color:me,transparent:!0,opacity:.5,side:ln,depthWrite:!1}));Je.position.set(q*.8,q*2.5,0),H.add(Je)}else if(D.symbol==="pin"){H.add(oe([new b(0,.2,0),new b(0,q*2.5,0)],me,pe));const Je=new Ae(new fs(q*.6),new vn({color:me,transparent:k,opacity:pe,depthWrite:!1}));Je.position.y=q*2.5,H.add(Je),H.add(oe(Ye(q*.7,"xz"),me,pe))}else if(D.symbol==="line"||D.symbol==="arrow")H.add(oe([new b(-q/2,0,0),new b(q/2,0,0)],me,pe)),D.symbol==="arrow"&&H.add(oe([new b(q*.25,0,-q*.2),new b(q/2,0,0),new b(q*.25,0,q*.2)],me,pe));else if(D.symbol==="circle"){const Je=new Ae(new aa(q/2,64),new vn({color:me,transparent:!0,opacity:ot,side:ln,depthWrite:!1}));Be(Je,"xz"),H.add(Je,oe(Ye(q/2,"xz"),me,pe))}else if(D.symbol==="square"){const Je=q/2,Vt=new Ae(new Br(q,q),new vn({color:me,transparent:!0,opacity:ot,side:ln,depthWrite:!1}));Be(Vt,"xz"),H.add(Vt,oe([new b(-Je,0,-Je),new b(Je,0,-Je),new b(Je,0,Je),new b(-Je,0,Je),new b(-Je,0,-Je)],me,pe))}else if(D.symbol==="sphere"){H.add(new Ae(new zr(q/2,32,20),new vn({color:me,transparent:!0,opacity:ot,side:ln,depthWrite:!1})));for(const Je of["xz","xy","yz"])H.add(oe(Ye(q/2,Je),me,pe*.7))}else H.add(oe([new b(-q*.6,.4,0),new b(q*.6,.4,0)],me,pe));return["circle","square","sphere"].includes(D.symbol)&&H.children.filter(Je=>Je instanceof Ae).forEach(Je=>{Je.visible=D.filled!==!1}),k||H.traverse(Je=>{Je.userData.editorTool={kind:"marker",id:D.id}}),!k&&D.id===t&&xi(D)&&os(D).forEach((Je,Vt)=>{const jr=Gn(Je).sub(Gn(D.position)).applyQuaternion(H.quaternion.clone().invert()),Rm=we(H,{x:jr.x/it,y:jr.y/it,z:jr.z/it},me);Rm.userData.editorTool={kind:"marker",id:D.id,pointIndex:Vt}}),H},vt=(T,D,k=!1)=>{const H=new xn;T.add(H),k||(H.userData.editorTool={kind:"drawing",id:D.id});const q=D.color,me=Math.min(.6,Math.max(.02,D.opacity??.12));if(D.kind==="measure"){if(D.points.length<2)return H;H.add(oe(D.points.map(Gn),q,k?.65:.9)),D.points.forEach((pe,ot)=>{const Je=we(H,pe,q);k||(Je.userData.editorTool={kind:"drawing",id:D.id,pointIndex:ot})})}else{const pe=D.points[0],ot=(D.radiusKm??0)*it;if(!pe||ot<=0)return H;H.position.copy(Gn(pe));const Je=D.plane??"xz";if(D.kind==="circle"){const Vt=new Ae(new aa(ot,96),new vn({color:q,transparent:!0,opacity:k?me/2:me,side:ln,depthWrite:!1}));Be(Vt,Je),Je==="xz"&&(Vt.position.y=.3),Vt.visible=D.filled!==!1,H.add(Vt,oe(Ye(ot,Je),q,k?.55:.8)),we(H,{x:0,y:0,z:0},q)}else{const Vt=new Ae(new zr(ot,40,24),new vn({color:q,transparent:!0,opacity:k?me/2:me,side:ln,depthWrite:!1}));Vt.visible=D.filled!==!1,H.add(Vt);for(const jr of["xz","xy","yz"])H.add(oe(Ye(ot,jr),q,k?.35:.5));we(H,{x:0,y:0,z:0},q)}}return H},Y=(T,D,k,H,q,me,pe)=>{const ot=new gn;ot.position.copy(D),T.add(ot);const Je=x("button",k);return Je.type="button",Je.title=q,Je.style.setProperty("--tool-color",H),Je.addEventListener("click",Vt=>{Vt.stopPropagation(),me()}),Je.addEventListener("dblclick",Vt=>{Vt.stopPropagation(),pe()}),_.append(Je),g.push({object:ot,element:Je}),Je},Te=W(n.markersPanel,"marker-list","标记列表",[],!1);Te.size=5;const G=M(n.markersPanel);y(G,"marker-focus","定位",()=>{const T=zn();T&&n.focus(Vn(T.position))},!1);const le=W(n.markersPanel,"marker-endpoint","移动目标",[["whole","整体"],["a","端点 A"],["b","端点 B"]],!1),Se=y(G,"marker-move","三轴移动",()=>{zn()&&(at(t,!0,a),n.onTransformMode?.("translate"))}),$=y(G,"marker-rotate","旋转",()=>{zn()&&(at(t),n.onTransformMode?.("rotate"))}),te=y(G,"marker-scale","缩放",()=>{zn()&&(at(t),n.onTransformMode?.("scale"))});y(G,"marker-copy","复制",()=>{const T=zn();if(!T)throw new Error("请先选择标记");const D={...T,...T.attitude?{attitude:{...T.attitude}}:{},id:Pr("marker"),label:`${T.label.slice(0,122)} 副本`,position:{...T.position,x:T.position.x+.2,z:T.position.z+.2}};D.controlPoints&&(D.controlPoints=D.controlPoints.map(k=>({...k,x:k.x+.2,z:k.z+.2}))),w("复制标记",k=>k.markers.push(D),"markers",()=>{kn("marker",D.id)})}),y(G,"marker-delete","删除",()=>{const T=t;if(!T)throw new Error("请先选择标记");w("删除标记",D=>{D.markers=D.markers.filter(k=>k.id!==T),D.links&&(D.links=D.links.filter(k=>k.to.kind!=="marker"||k.to.id!==T))},"markers",()=>{kn("marker","")})});const ue=U(n.markersPanel,"marker-properties","标记属性与位置"),L=F(ue,"marker-label","名称","标记"),Pe=F(ue,"marker-color","颜色","#ffd84a","color"),Me=W(ue,"marker-symbol","符号",[["pin","定位针"],["cross","十字"],["flag","旗帜"],["text","文字"],["line","线段（长度）"],["arrow","箭头（长度）"],["circle","圆（直径）"],["square","正方形（边长）"],["sphere","球（直径）"]]),$e=F(ue,"marker-size","尺寸（km）",".12","number");$e.min=".00001",$e.max="1000";const ie=F(ue,"marker-filled","填充","","checkbox");ie.checked=!0;const Ze=F(ue,"marker-opacity","填充透明度",".12","number");Ze.min=".02",Ze.max=".6",Ze.step=".01";const xe=F(ue,"marker-visible","显示标记","","checkbox");xe.checked=!0;const ae={pitch:F(ue,"marker-pitch","俯仰 X°","0","number"),yaw:F(ue,"marker-yaw","方向 Z°","0","number"),roll:F(ue,"marker-roll","翻滚 Y°","0","number")},ce=ne(ue,"marker-position","位置",{x:0,y:0,z:0}),be=F(ue,"marker-height","高度（m）","0","number"),R=()=>{be.value=ce.fields.y.value.trim()?String(ce.fields.y.valueAsNumber*1e3):""},S=ne(ue,"marker-a","端点 A",{x:-.06,y:0,z:0}),O=ne(ue,"marker-b","端点 B",{x:.06,y:0,z:0}),ee=F(ue,"marker-a-height","端点 A 高度（m）","0","number"),Q=F(ue,"marker-b-height","端点 B 高度（m）","0","number"),J=x("label");J.className="tool-row",J.append(x("span","说明"));const He=I(x("textarea"));He.id="marker-description",He.maxLength=4096,J.append(He),ue.append(J);const ge=M(ue),We=y(ge,"marker-apply","应用所选标记",()=>{const T=t;if(!T)throw new Error("请先选择标记");const D=Yr(T);w("修改标记",k=>{const H=k.markers.findIndex(q=>q.id===T);if(H<0)throw new Error("标记已被移除");k.markers[H]=D},"markers")});y(ge,"marker-ground","坐标贴地",()=>{const T=ce.read();T.y=n.sampleHeightKm(T.x,T.z),ce.set(T),R(),P("地形高度已填入","markers")});const Ke=U(n.markersPanel,"marker-create","新增标记"),_e=M(Ke);y(_e,"marker-pick","点地图放置",()=>{const T=Yr(Pr("marker"),{x:0,y:0,z:0});lt({kind:"marker",marker:T}),n.onOpenPanel?.("markers"),P("标记放置中","markers")}),y(_e,"marker-pick-two","两点确认方向与尺寸",()=>{const T=Yr(Pr("marker"),{x:0,y:0,z:0});if(!xi(T))throw new Error("请选择线段、箭头、圆、正方形或球");lt({kind:"marker",marker:T,twoPoint:!0}),n.onOpenPanel?.("markers"),P("端点 A 选择中","markers")}),y(_e,"marker-add-position","按坐标新增",()=>{const T=Yr(Pr("marker"));w("新增标记",D=>D.markers.push(T),"markers",()=>{kn("marker",T.id)})}),y(_e,"marker-new","清空选择／新标记",()=>{kn("marker",""),j(),je(),Ot(),Ge(),yr()},!1),y(_e,"marker-cancel","取消放置",St,!1),n.markersPanel.append(A);const Re=W(n.drawingsPanel,"drawing-list","标尺／图形列表",[],!1);Re.size=5;const rt=M(n.drawingsPanel);y(rt,"drawing-focus","定位",()=>{const T=si();T&&Rt(T)},!1);const Fe=W(n.drawingsPanel,"drawing-endpoint","移动目标",[["whole","整体"],["a","端点 A"],["b","端点 B"]],!1),De=y(rt,"drawing-move","三轴移动",()=>{si()?.points[0]&&pt(i,!0,a)});y(rt,"drawing-copy","复制",()=>{const T=si();if(!T)throw new Error("请先选择标尺或图形");const D={...T,id:Pr("drawing"),label:`${T.label.slice(0,122)} 副本`,points:T.points.map(k=>({...k,x:k.x+.2,z:k.z+.2}))};w("复制制图标尺",k=>k.drawings.push(D),"drawing",()=>{kn("drawing",D.id)})}),y(rt,"drawing-delete","删除",()=>{const T=i;if(!T)throw new Error("请先选择标尺或图形");w("删除制图标尺",D=>{D.drawings=D.drawings.filter(k=>k.id!==T)},"drawing",()=>{kn("drawing","")})});const Qe=U(n.drawingsPanel,"drawing-properties","标尺属性与坐标"),N=F(Qe,"drawing-label","名称","测距"),ye=W(Qe,"drawing-kind","类型",[["measure","自由测距"],["circle","平面圆规"],["sphere","立体半透明球"]]),Ce=F(Qe,"drawing-color","颜色","#2d8cff","color"),Ve=F(Qe,"drawing-visible","显示图形","","checkbox");Ve.checked=!0;const he=F(Qe,"drawing-filled","填充","","checkbox");he.checked=!0;const se=F(Qe,"drawing-opacity","填充透明度",".12","number");se.min=".02",se.max=".6",se.step=".01";const Xe=W(Qe,"drawing-plane","圆规平面",[["xz","XY 水平"],["xy","XZ 垂直"],["yz","YZ 垂直"]]),re=ne(Qe,"drawing-a","起点／中心",{x:0,y:0,z:0}),qe=F(Qe,"drawing-height","高度（m）","0","number"),Le=ne(Qe,"drawing-b","测距终点",{x:1,y:0,z:0}),gt=F(Qe,"drawing-b-height","终点高度（m）","0","number"),At=()=>{qe.value=re.fields.y.value.trim()?String(re.fields.y.valueAsNumber*1e3):"",gt.value=Le.fields.y.value.trim()?String(Le.fields.y.valueAsNumber*1e3):""},mi=F(Qe,"drawing-radius","半径（km）","2","number");mi.min=".00001",mi.max="1000";const Ti=x("p");Ti.id="drawing-readout",Qe.append(Ti);const Ps=M(Qe),wo=y(Ps,"drawing-apply","应用所选图形",()=>{const T=i;if(!T)throw new Error("请先选择标尺或图形");const D=$r(T);w("修改制图标尺",k=>{const H=k.drawings.findIndex(q=>q.id===T);if(H<0)throw new Error("图形已被移除");k.drawings[H]=D},"drawing")});y(Ps,"drawing-ground","起点／中心贴地",()=>{const T=re.read();T.y=n.sampleHeightKm(T.x,T.z),re.set(T),Ie(),P("地形高度已填入","drawing")});const To=U(n.drawingsPanel,"drawing-create","测距与制图"),xr=M(To);y(xr,"drawing-pick-measure","点选两点测距",()=>Zt("measure")),y(xr,"drawing-pick-circle","圆规：中心＋半径点",()=>Zt("circle")),y(xr,"drawing-pick-sphere","球体：中心＋半径点",()=>Zt("sphere"));const qr=M(To);y(qr,"drawing-add-position","按坐标／半径新增",()=>{const T=$r(Pr("drawing"));w("新增制图标尺",D=>D.drawings.push(T),"drawing",()=>{kn("drawing",T.id)})}),y(qr,"drawing-pick-center","点地图定中心＋输入半径",()=>{const T=ye.value;if(T==="measure")throw new Error("请选择平面圆规或球体，再使用输入半径方式");const D=$r(Pr("drawing"),!0),k=V(mi);if(k<=0||k>1e3)throw new Error("半径须大于0且不超过1000 km");D.radiusKm=k,lt({kind:T,drawing:D}),gi=!0,P("中心点放置中","drawing")}),y(qr,"drawing-new","清空选择／新图形",()=>{kn("drawing",""),K(),je(),Ge(),yr()},!1),y(qr,"drawing-cancel","取消作图",St,!1),n.drawingsPanel.append(C);let gi=!1;function zn(){return n.read().markers.find(T=>T.id===t)}function si(){return n.read().drawings.find(T=>T.id===i)}function ka(){if(e||!s)return null;const T=n.read(),D=s==="marker"?t:i,k=s==="drawing"?T.drawings.find(pe=>pe.id===D):void 0,H=s==="marker"?T.markers.find(pe=>pe.id===D):void 0,q=k?.kind==="measure"||H&&xi(H)?a:void 0,me=H?q===void 0?H.position:os(H)[q]:k?.points[q??0];return D&&me?{kind:s,id:D,position:Vn(me),...q===void 0?{}:{pointIndex:q}}:null}function yr(T=!1){if(e||d)return;const D=ka(),k=D?JSON.stringify([D.kind,D.id,D.pointIndex]):"",H=n.editable(),q=k!==c||!!D&&H!==l;if(c=k,l=H,!(!q&&!T)){d=!0;try{n.onSelectionChange?.(D)}finally{d=!1}}}function kn(T,D,k){T==="marker"?t=D:i=D,a=k,D?s=T:s===T&&(s=null)}function ol(){e||(t="",i="",a=void 0,s=null,j(),K(),je(),Ot(),Ge(),yr())}function Yr(T,D){const k=V($e);if(k<=0||k>1e3)throw new Error("尺寸须大于0且不超过1000 km");const H={id:T,label:de(L,"标记"),position:D??ce.read(),color:Z(Pe),symbol:Me.value,sizeKm:k,visible:xe.checked};if(["circle","square","sphere"].includes(H.symbol)){const pe=V(Ze);if(pe<.02||pe>.6)throw new Error("透明度范围为0.02–0.6");const ot=n.read().markers.find(Je=>Je.id===T);(!ot||ot.filled!==void 0||!ie.checked)&&(H.filled=ie.checked),(!ot||ot.opacity!==void 0||pe!==.12)&&(H.opacity=pe)}const q=He.value.trim().slice(0,4096);q&&(H.description=q);const me=n.read().markers.find(pe=>pe.id===T);if(xi(H)){me?.controlPoints&&(H.controlPoints=me.controlPoints.map(Vn));const pe={pitch:0,yaw:0,roll:0};for(const ot of["pitch","yaw","roll"]){const Je=me?.attitude?.[ot]??0;pe[ot]=ae[ot].value===String($t.radToDeg(Je))?Je:$t.degToRad(V(ae[ot]))}if((me?.attitude||Object.values(pe).some(ot=>ot!==0))&&(H.attitude=pe),o&&!D)return Tc(H,[S.read(),O.read()]);if(H.controlPoints&&me&&(ds(me.position,H.position)>0||H.sizeKm!==me.sizeKm||JSON.stringify(H.attitude)!==JSON.stringify(me.attitude)))return Yp(H,H.position,pe,k)}return H}function $r(T,D=!1){const k=ye.value,H=D?{x:0,y:0,z:0}:re.read(),q={id:T,label:de(N,k==="measure"?"测距":k==="circle"?"圆规":"范围球"),kind:k,points:k==="measure"?[H,D?Vn(H):Le.read()]:[H],color:Z(Ce),visible:Ve.checked};if(k!=="measure"){const me=D?1:V(mi),pe=V(se);if(me<=0||me>1e3)throw new Error("半径须大于0且不超过1000 km");if(pe<.02||pe>.6)throw new Error("透明度范围为0.02–0.6");q.radiusKm=me,q.opacity=pe,q.plane=Xe.value;const ot=n.read().drawings.find(Je=>Je.id===T);(!ot||ot.filled!==void 0||!he.checked)&&(q.filled=he.checked)}return q}function w(T,D,k,H){if(!n.editable())return P("只读",k),!1;try{const q=n.change(T,D);return q?(H?.(),H&&(r=""),Nt(),P(`${T}已保存`,k)):P("操作未保存或内容没有变化",k),q}catch(q){return P(q instanceof Error?q.message:String(q),k),!1}}function z(T,D,k,H){const q=u,me=h,pe=gi;u=null,n.onPickingChange(!1);const ot=w(T,D,k,H);if(ot)h=null,gi=!1,X(m);else if(q&&n.editable()&&!e){const Je=(k==="markers"?A:C).textContent;u=q,h=me,gi=pe,n.onPickingChange(!0),Pn(),P(Je||"未保存",k)}return ot}function j(){const T=zn();L.value=T?.label??"标记",Pe.value=T?.color??"#ffd84a",Me.value=T?.symbol??"pin",xe.checked=T?.visible!==!1,He.value=T?.description??"",$e.value=String(T?.sizeKm??.12),ie.checked=T?.filled!==!1,Ze.value=String(T?.opacity??.12),Ee(),ce.set(T?.position??{x:0,y:0,z:0}),R(),o=!1;for(const k of["pitch","yaw","roll"])ae[k].value=String($t.radToDeg(T?.attitude?.[k]??0));const D=os(T??{position:{x:0,y:0,z:0}});S.set(D[0]),O.set(D[1]),Kt(),s==="marker"&&(!T||!xi(T))&&(a=void 0),le.value=s==="marker"&&a===0?"a":s==="marker"&&a===1?"b":"whole",le.closest("label").hidden=!T||!xi(T),We.disabled=!n.editable()||!T,Se.disabled=!n.editable()||!T,$.disabled=te.disabled=!n.editable()||!T||!xi(T)}function K(){const T=si();N.value=T?.label??"测距",ye.value=T?.kind??"measure",Ce.value=T?.color??"#2d8cff",he.checked=T?.filled!==!1,Ve.checked=T?.visible!==!1,se.value=String(T?.opacity??.12),Xe.value=T?.plane??"xz",mi.value=String(T?.radiusKm??2),re.set(T?.points[0]??{x:0,y:0,z:0}),Le.set(T?.points[1]??{x:1,y:0,z:0}),B(),At(),wo.disabled=!n.editable()||!T,De.disabled=!n.editable()||!T?.points[0],Ie()}function B(){const T=si();s==="drawing"&&(T?.kind!=="measure"||a!==void 0&&!T.points[a])&&(a=void 0),Fe.value=s==="drawing"&&a===0?"a":s==="drawing"&&a===1?"b":"whole",Fe.closest("label").hidden=T?.kind!=="measure",Fe.disabled=T?.kind!=="measure"}function Ee(){const T=["line","arrow","circle","square","sphere"].includes(Me.value),D=["circle","square","sphere"].includes(Me.value);ie.closest("label").hidden=!D;for(const k of Object.values(ae))k.closest("label").hidden=!T;for(const k of[S.row,O.row])k.hidden=!T;ee.closest("label").hidden=!T,Q.closest("label").hidden=!T,Ze.closest("label").hidden=!D,Ze.disabled=!n.editable()||!ie.checked}function Ie(){const T=ye.value;Le.row.hidden=T!=="measure";const D=Le.row.previousElementSibling;D&&(D.hidden=T!=="measure"),mi.closest("label").hidden=T==="measure",se.closest("label").hidden=T==="measure",Xe.closest("label").hidden=T!=="circle",he.closest("label").hidden=T==="measure",gt.closest("label").hidden=T!=="measure",se.disabled=!n.editable()||!he.checked,At();try{Ti.textContent=T==="measure"?Xs(re.read(),Le.read()):`半径 ${hr(V(mi))} km · 直径 ${hr(V(mi)*2)} km${T==="circle"?` · ${{xz:"XY",xy:"XZ",yz:"YZ"}[Xe.value]}平面`:" · 3D范围"}`}catch{Ti.textContent="—"}}function je(){const T=n.read();Te.replaceChildren(...T.markers.map(D=>new Option(`${D.visible===!1?"隐藏 · ":""}${D.label}`,D.id))),Te.value=t,Re.replaceChildren(...T.drawings.map(D=>new Option(`${D.visible===!1?"隐藏 · ":""}${D.kind==="measure"?"测距":D.kind==="circle"?"圆规":"球体"} · ${D.label}${D.kind==="measure"&&D.points[1]?` · ${Xs(D.points[0],D.points[1])}`:` · R ${hr(D.radiusKm??0)} km`}`,D.id))),Re.value=i}function Ge(){for(const T of g)T.element.setAttribute("aria-pressed",String(T.element.dataset.markerId?T.element.dataset.markerId===t:T.element.dataset.drawingId===i))}function at(T,D=!0,k){if(n.read().markers.some(q=>q.id===T)&&n.onMarkerPick?.(T)){je();return}const H=n.read().markers.find(q=>q.id===T);kn("marker",H?T:"",H&&xi(H)?k:void 0),j(),je(),Ot(),Ge(),yr(D&&!!t),n.onOpenPanel?.("markers")}function pt(T,D=!0,k){const H=n.read().drawings.find(q=>q.id===T);kn("drawing",H?T:"",H?.kind==="measure"&&k!==void 0&&H.points[k]?k:void 0),K(),je(),Ge(),yr(D&&!!i),n.onOpenPanel?.("drawing")}function ft(T){if(e)return!1;let D=T;for(;D&&D!==f;)D=D.parent;if(!D)return!1;for(let k=T;k&&k!==f;k=k.parent){const H=k.userData.editorTool;if(H?.id){if(H.kind==="marker"&&n.read().markers.some(q=>q.id===H.id))return at(H.id,!0,H.pointIndex),!0;if(H.kind==="drawing"&&n.read().drawings.some(q=>q.id===H.id))return pt(H.id,!0,H.pointIndex),!0}}return!1}function Rt(T){const D=T.points[0];if(!D)return;const k=T.points[1];T.kind==="measure"&&k?n.focus({x:(D.x+k.x)/2,y:(D.y+k.y)/2,z:(D.z+k.z)/2},Math.max(.2,ds(D,k)/2)):n.focus(Vn(D),T.radiusKm)}function Ot(){for(const T of f.children){if(T.userData.editorTool?.kind!=="marker")continue;for(const k of[...T.children])k.userData.editorTool?.pointIndex!==void 0&&(k.traverse(H=>{H instanceof Ae&&(H.geometry.dispose(),H.material.dispose())}),T.remove(k));const D=n.read().markers.find(k=>k.id===T.userData.editorTool.id);!D||D.id!==t||!xi(D)||os(D).forEach((k,H)=>{const q=Gn(k).sub(T.position).applyQuaternion(T.quaternion.clone().invert()).divideScalar(T.scale.x),me=we(T,{x:q.x/it,y:q.y/it,z:q.z/it},D.color);me.userData.editorTool={kind:"marker",id:D.id,pointIndex:H}})}}function on(){X(f),g.length=0,_.replaceChildren();const T=n.read();for(const D of T.markers){if(D.visible===!1)continue;const k=yt(f,D);Y(k,new b(0,it*.4,0),D.label,D.color,D.description||"",()=>at(D.id),()=>n.focus(Vn(D.position))).dataset.markerId=D.id}for(const D of T.drawings){if(D.visible===!1||!D.points.length)continue;const k=vt(f,D),H=D.points[0],q=D.points[1],me=D.kind==="measure"&&q?`${D.label} · ${Xs(H,q)}`:`${D.label} · 半径 ${hr(D.radiusKm??0)} km`,pe=D.kind==="measure"&&q?Gn({x:(H.x+q.x)/2,y:(H.y+q.y)/2+.1,z:(H.z+q.z)/2}):new b(0,it*.12,0);Y(k,pe,me,D.color,"",()=>pt(D.id),()=>Rt(D)).dataset.drawingId=D.id}Ge()}function jt(){if(e)return;if(!n.editable()){Nt();return}const T=n.read();for(const H of f.children){const q=H.userData.editorTool;if(q.kind==="marker"){const me=T.markers.find(Vt=>Vt.id===q.id);if(!me||me.visible===!1){Nt();return}H.position.copy(Gn(me.position)),H.quaternion.copy(ha(me));const pe=me.sizeKm??.12,ot=H.userData.markerSize??pe;H.scale.setScalar(pe/ot);const Je=H.quaternion.clone().invert();for(const Vt of H.children)if(Vt.userData.editorTool?.pointIndex!==void 0){const jr=os(me)[Vt.userData.editorTool.pointIndex];Vt.position.copy(Gn(jr).sub(H.position).applyQuaternion(Je).divideScalar(H.scale.x))}}else{const me=T.drawings.find(pe=>pe.id===q.id);if(!me||me.visible===!1||!me.points[0]){Nt();return}if(me.kind!=="measure")H.position.copy(Gn(me.points[0]));else for(const pe of H.children)if(pe instanceof hn)pe.geometry.setFromPoints(me.points.map(Gn)),pe.geometry.computeBoundingSphere();else if(pe.userData.editorTool?.pointIndex!==void 0){const ot=me.points[pe.userData.editorTool.pointIndex];ot&&pe.position.copy(Gn(ot))}}}for(const H of g){const q=H.element.dataset.drawingId;if(!q)continue;const me=T.drawings.find(Je=>Je.id===q),pe=me?.points[0],ot=me?.points[1];me?.kind!=="measure"||!pe||!ot||(H.object.position.copy(Gn({x:(pe.x+ot.x)/2,y:(pe.y+ot.y)/2+.1,z:(pe.z+ot.z)/2})),H.element.textContent=`${me.label} · ${Xs(pe,ot)}`)}const D=zn(),k=si();if(D){ce.set(D.position),R(),$e.value=String(D.sizeKm??.12);const H=os(D);S.set(H[0]),O.set(H[1]),Kt();for(const q of["pitch","yaw","roll"])ae[q].value=String($t.radToDeg(D.attitude?.[q]??0))}k&&(re.set(k.points[0]??{x:0,y:0,z:0}),Le.set(k.points[1]??{x:1,y:0,z:0}),Ie())}function Nt(){if(e)return;u&&!n.editable()&&St();const T=n.read(),D=JSON.stringify({markers:T.markers,drawings:T.drawings}),k=n.editable();p.forEach(H=>{H.disabled=!k}),t&&!T.markers.some(H=>H.id===t)&&kn("marker",""),i&&!T.drawings.some(H=>H.id===i)&&kn("drawing",""),r!==D&&(r=D,je(),j(),K(),on()),We.disabled=!k||!zn(),wo.disabled=!k||!si(),Se.disabled=!k||!zn(),De.disabled=!k||!si()?.points[0],$.disabled=te.disabled=!k||!zn()||!xi(zn()),Ee(),Ie(),!k&&!u?(A.textContent="只读",C.textContent="只读"):k&&!u&&(A.textContent==="只读"&&(A.textContent=""),C.textContent==="只读"&&(C.textContent="")),yr()}function lt(T){St(),n.editable()&&(u=T,gi=!1,n.onPickingChange(!0))}function Zt(T){ye.value=T,(!i||N.value==="测距"||N.value==="圆规"||N.value==="范围球")&&(N.value=T==="measure"?"测距":T==="circle"?"圆规":"范围球"),Ie();const D=$r(Pr("drawing"),!0);lt({kind:T,drawing:D}),n.onOpenPanel?.("drawing"),P(T==="measure"?"起点选择中":"中心点选择中","drawing")}function St(){const T=u;u=null,h=null,gi=!1,X(m),T&&(n.onPickingChange(!1),P("已退出地图点选",T.kind==="marker"?"markers":"drawing"))}function Pn(){X(m);const T=u,D=h;if(!(!T||!D))if(T.kind==="marker")T.twoPoint?T.first?(we(m,T.first,T.marker.color,.08),we(m,D,T.marker.color,.08),ds(T.first,D)>0&&ds(T.first,D)<=1e3&&yt(m,Tc(T.marker,[T.first,D]),!0)):we(m,D,T.marker.color,.08):yt(m,{...T.marker,position:D},!0);else if(!T.first)we(m,D,T.drawing.color,.08),gi&&vt(m,{...T.drawing,points:[D]},!0);else if(T.kind==="measure")vt(m,{...T.drawing,points:[T.first,D]},!0),P(Xs(T.first,D),"drawing");else{const k=Pf(T.first,D,T.kind,T.drawing.plane??"xz");we(m,T.first,T.drawing.color,.08),m.add(oe([Gn(T.first),Gn(D)],T.drawing.color,.6)),k>0&&k<=1e3&&vt(m,{...T.drawing,points:[T.first],radiusKm:k},!0),P(`半径 ${hr(k)} km${k>1e3?"（超出1000 km）":""}`,"drawing")}}function Sr(T){e||!u||T&&!td(T)||!T&&!h||T&&h&&ds(T,h)<1e-5||(h=T?Vn(T):null,Pn())}function Zn(T){const D=u;if(e||!D||!n.editable()){n.editable()||St();return}if(!td(T)){P("点位坐标超出有效范围");return}try{if(D.kind==="marker"){if(D.twoPoint&&!D.first){D.first=Vn(T),h=Vn(T),Pn(),P("端点 B 选择中","markers");return}const k=D.twoPoint?Tc(D.marker,[D.first,T]):{...D.marker,position:Vn(T)};z("地图放置标记",H=>H.markers.push(k),"markers",()=>{kn("marker",k.id)})&&P("标记已放置并保存","markers")}else if(gi){const k={...D.drawing,points:[Vn(T)]};z("地图放置范围图形",H=>H.drawings.push(k),"drawing",()=>{kn("drawing",k.id)})&&P("图形已放置并保存","drawing")}else if(!D.first)D.first=Vn(T),h=Vn(T),Pn(),P(D.kind==="measure"?"终点选择中":"半径点选择中","drawing");else{const k={...D.drawing,points:D.kind==="measure"?[Vn(D.first),Vn(T)]:[Vn(D.first)]};if(D.kind!=="measure"){const H=Pf(D.first,T,D.kind,D.drawing.plane??"xz");if(H<=0||H>1e3)throw new Error("半径须大于0且不超过1000 km，请重新选择半径点");k.radiusKm=H}z("地图作图",H=>H.drawings.push(k),"drawing",()=>{kn("drawing",k.id)})&&P(k.kind==="measure"?`测距已保存：${Xs(k.points[0],k.points[1])}`:`图形已保存：半径 ${hr(k.radiusKm)} km`,"drawing")}}catch(k){P(k instanceof Error?k.message:String(k),D.kind==="marker"?"markers":"drawing")}}const Mr=T=>{T.key==="Escape"&&u&&(St(),T.preventDefault())};addEventListener("keydown",Mr),Te.addEventListener("change",()=>at(Te.value)),Re.addEventListener("change",()=>pt(Re.value)),Fe.addEventListener("change",()=>{if(e||si()?.kind!=="measure")return;const T=Fe.value==="a"?0:Fe.value==="b"?1:void 0;pt(i,!1,T)}),ce.fields.y.addEventListener("input",R),be.addEventListener("input",()=>{ce.fields.y.value=be.value.trim()?String(be.valueAsNumber/1e3):""}),le.addEventListener("change",()=>at(t,!1,le.value==="a"?0:le.value==="b"?1:void 0)),Me.addEventListener("input",Ee),ie.addEventListener("input",Ee),he.addEventListener("input",Ie);for(const T of[be,$e,...Object.values(ce.fields),...Object.values(ae)])T.addEventListener("input",()=>{o=!1});function Kt(){ee.value=S.fields.y.value.trim()?String(S.fields.y.valueAsNumber*1e3):"",Q.value=O.fields.y.value.trim()?String(O.fields.y.valueAsNumber*1e3):""}for(const T of[...Object.values(S.fields),...Object.values(O.fields)])T.addEventListener("input",()=>{o=!0,Kt()});for(const[T,D]of[[ee,S],[Q,O],[qe,re],[gt,Le]])T.addEventListener("input",()=>{D.fields.y.value=T.value.trim()?String(T.valueAsNumber/1e3):"",T===ee||T===Q?o=!0:Ie()});for(const T of[...Object.values(re.fields),...Object.values(Le.fields),mi,Xe,ye])T.addEventListener("input",Ie);const Kn=(T,D)=>{for(const k of T)k.addEventListener("change",()=>{if(!(u||!n.editable()||e||!(D==="markers"?zn():si())))try{const H=D==="markers"?t:i,q=D==="markers"?Yr(H):$r(H),me=D==="markers"?zn():si();if(JSON.stringify(me)===JSON.stringify(q))return;w(D==="markers"?"修改标记":"修改制图标尺",pe=>{if(D==="markers"){const ot=pe.markers.findIndex(Je=>Je.id===H);ot>=0&&(pe.markers[ot]=q)}else{const ot=pe.drawings.findIndex(Je=>Je.id===H);ot>=0&&(pe.drawings[ot]=q)}},D)}catch(H){P(H instanceof Error?H.message:String(H),D)}})};return Kn([L,Pe,Me,$e,ie,Ze,xe,He,be,ee,Q,...Object.values(ae),...Object.values(ce.fields),...Object.values(S.fields),...Object.values(O.fields)],"markers"),Kn([N,ye,Ce,Ve,he,se,Xe,qe,gt,mi,...Object.values(re.fields),...Object.values(Le.fields)],"drawing"),j(),K(),P("","markers"),P("","drawing"),Nt(),{sync:Nt,syncPosition:jt,selectObject:ft,selection:ka,clearSelection:ol,isPicking:()=>!!u,pick:Zn,preview:Sr,cancel:St,updateLabels(T,D,k){if(e)return;T.updateMatrixWorld(),f.updateWorldMatrix(!0,!0);const H=new b;for(const q of g){const me=q.object.getWorldPosition(H).project(T),pe=me.z>=-1&&me.z<=1&&Math.abs(me.x)<=1.08&&Math.abs(me.y)<=1.08;q.element.hidden=!pe,pe&&(q.element.style.left=`${(me.x+1)*D/2}px`,q.element.style.top=`${(1-me.y)*k/2}px`)}},dispose(){e||(St(),e=!0,removeEventListener("keydown",Mr),X(f),X(m),n.world.remove(f,m),_.remove(),E.remove(),g.length=0,p.length=0,n.markersPanel.replaceChildren(),n.drawingsPanel.replaceChildren(),n.markersPanel.classList.remove("scene-tool-panel"),n.drawingsPanel.classList.remove("scene-tool-panel"))}}}function fb(n,e,t,i,r=360,s=1440){const o=i*Math.PI/180,a=Math.max(.25,1-r/Math.max(1,s)),c=2*Math.atan(Math.tan(o/2)*Math.max(.1,t)*a),l=Math.hypot(Math.max(1,n),Math.max(1,e)),d=l/Math.sin(Math.min(o,c)/2)*1.12,u=Math.max(1e4,d*10);return{distance:d,maxDistance:u,far:Math.max(5e4,u*3),near:Math.max(.1,l/1e5)}}const to=n=>({id:n.id,revision:n.revision});function Pu(n,e){const t=n.sessions.find(i=>i.id===e);if(!t)throw new Error(`Unknown session: ${e}`);if(t.workflow||t.status==="finished")throw new Error("Active authoring session required");return t}function $p(n){if(typeof n!="string"||!n.trim()||n.trim().length>128)throw new Error("Name must contain 1..128 characters");return n.trim()}function jp(n,e,t,i,r,s){const o=au(e);Um(n,o);const a=Pu(o,t);return{project:o,sessionId:t,selection:{kind:i,ref:to(r)},mapRef:to(s),taskRef:to(a.taskRef)}}function pb(n,e,t,i){const r=au(n);if(!Pu(r,e).mapEditRef)throw new Error("Terrain editing session required");const o=Bf(r,e,t,$p(i)),a={id:t,revision:1};return o.sessions.find(c=>c.id===e).mapEditRef=to(a),jp(r,o,e,"map",a,a)}function mb(n,e,t,i){const r=au(n);if(Pu(r,e).mapEditRef)throw new Error("Task authoring session required");if(!t||typeof t!="object")throw new Error("New map and task IDs required");const o=$p(i),a={id:t.mapId,revision:1},c={id:t.taskId,revision:1};let l=Bf(r,e,t.mapId,`${o} MAP`.slice(0,128));l=Im(l,e,a,t.taskId,o);const d=l.sessions.find(u=>u.id===e);return d.taskRef=to(c),d.mapRef=to(a),jp(r,l,e,"task",c,a)}function gb(n,e){return n===void 0||e<n?"active":e===n?"destroyed":"wreck"}const no={squadron:2155134,friendly:2985215,neutral:16767050,enemy:16738613,white:15332072,terrain:6062736},Zp={squadron:"SQUADRON",friendly:"FRIENDLY",neutral:"NEUTRAL",enemy:"ENEMY"},Wr=new D0;Wr.background=new It(133653);const Dt=new yi(42,innerWidth/innerHeight,.1,5e3);Dt.position.set(0,240,410);const _t=new rM({antialias:!0,powerPreference:"high-performance"});_t.setPixelRatio(Math.min(devicePixelRatio,2));_t.setSize(innerWidth,innerHeight);_t.outputColorSpace=ni;_t.domElement.setAttribute("aria-label","三维地图画布");_t.domElement.setAttribute("role","img");_t.domElement.tabIndex=0;document.querySelector("#scene").appendChild(_t.domElement);const Lt=new oM(Dt,_t.domElement);Lt.target.set(0,0,0);Lt.enableDamping=!0;Lt.dampingFactor=.08;Lt.minDistance=35;Lt.maxDistance=1e4;Lt.maxPolarAngle=Math.PI*.49;const Kp=new x_(1588299,30,850);Kp.position.set(0,140,0);Wr.add(Kp);const dn=new xn;Wr.add(dn);let Lr;function Jp(n,e){Lr&&(dn.remove(Lr),Lr.geometry.dispose(),Lr.material.dispose()),Lr=UM(n,e),dn.add(Lr),Fp(Lr,Dt.position.distanceTo(Lt.target))}Jp(750,750);function Jo(n,e,t=1,i=1){const r=new Ut().setFromPoints(n),s=new ui({color:e,transparent:!0,opacity:i});return new hn(r,s)}let mt=new Hf,nr=new Gf,fa=42,_s=0;function Bt(n,e){return mt.sample(n,e)}function Qp(){const n=RM(mt);let e=0;for(const i of mt.data)e=Math.max(e,i);const t=document.querySelector("#terrain-contour-smooth").checked;for(const i of[.4,...Array.from({length:Math.floor(e/5)},(r,s)=>(s+1)*5)]){const r=[];for(const s of mt.contours(i)){const o=s[0],a=s[s.length-1],c=t?$m(s,Math.hypot(o.x-a.x,o.z-a.z)<1e-6):s;for(let l=1;l<c.length;l++){const d=c[l-1],u=c[l];r.push(d.x,t?Bt(d.x,d.z)+.18:i+.18,d.z,u.x,t?Bt(u.x,u.z)+.18:i+.18,u.z)}}if(r.length){const s=new Ut;s.setAttribute("position",new Tt(r,3)),n.add(new pp(s,new ui({color:no.white,transparent:!0,opacity:i===.4?.95:.65})))}}return n}function em(){const n=new xn,e=nr.buildings(mt,fa,_s),t=[],i=[],r=[],s=Math.cos(_s),o=Math.sin(_s);for(const c of e){const l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([d,u])=>{const h=d*c.width/2,f=u*c.depth/2,m=c.x+h*s-f*o,_=c.z+h*o+f*s;return new b(m,Bt(m,_)+.32,_)});for(const d of[0,1,2,0,2,3]){const u=l[d];t.push(u.x,u.y,u.z),i.push(c.shade*.82,c.shade*.91,c.shade)}for(let d=0;d<3;d++){const u=c.x+(d-1)*c.width*.26*s,h=c.z+(d-1)*c.width*.26*o;r.push(u,Bt(u,h)+.36,h)}}const a=new Ut;return a.setAttribute("position",new Tt(t,3)),a.setAttribute("color",new Tt(i,3)),n.add(new Ae(a,new vn({vertexColors:!0,transparent:!0,opacity:.64,side:ln,depthWrite:!1}))),n.add(new gp(new Ut().setAttribute("position",new Tt(r,3)),new mp({color:14477547,size:.45,transparent:!0,opacity:.65,depthWrite:!1}))),n.userData.count=e.length,n}let ms=em();dn.add(ms);let io=Qp();dn.add(io);let vr=!1,ti=null,Qd=null,eu=null,pa=!0,vs=null;function tm(){!ti||Qd!==mt||eu!==nr?(ti&&(dn.remove(ti.root),ti.dispose()),ti=kp(mt,nr),Qd=mt,eu=nr,dn.add(ti.root)):pa&&ti.update(),pa=!1,ti.root.visible=!!Pt}function nm(){vs&&(tm(),ti.update(vs),vs=null,io.visible=!1,ms.visible=!1)}function _b(n,e){const t=Math.max(0,Math.floor((n.x-e+mt.extent)/mt.spacing)),i=Math.min(mt.size-1,Math.ceil((n.x+e+mt.extent)/mt.spacing)),r=Math.max(0,Math.floor((n.z-e+mt.extentZ)/mt.spacingZ)),s=Math.min(mt.size-1,Math.ceil((n.z+e+mt.extentZ)/mt.spacingZ));if(t>i||r>s)return;const o=vs;vs=o?{minX:Math.min(o.minX,t),maxX:Math.max(o.maxX,i),minZ:Math.min(o.minZ,r),maxZ:Math.max(o.maxZ,s)}:{minX:t,maxX:i,minZ:r,maxZ:s}}function Kc(){Ua(),pa=!0,vs=null,ti&&(ti.root.visible=!1),Es(io),io=Qp(),dn.add(io),vr=!1,Es(ms),ms=em(),dn.add(ms);const n=Xr(Ne);n.units.forEach(t=>{Iu(t,n.turn),(t.unit.icon==="ground"||t.unit.icon==="ship")&&ru(t.unit)}),so();const e=mt.data.reduce((t,i)=>Math.max(t,i),0);document.querySelector("#terrain-state").textContent=`${mt.extent*2/25} × ${mt.extentZ*2/25} km / MAX HEIGHT ${(e/25).toFixed(2)} km / BUILDINGS ${ms.userData.count}`}const st=[{id:"rex",label:"REX",faction:"squadron",kind:"F-16C",icon:"air-filled",positions:[new b(-250,60,250),new b(-170,85,180),new b(-70,108,140),new b(30,125,130),new b(130,138,150)]},{id:"tasha",label:"TASHA",faction:"friendly",kind:"MIRAGE 2000-5",icon:"air-outline",positions:[new b(-210,84,270),new b(-120,88,185),new b(-20,94,130),new b(65,90,80),new b(150,96,30)]},{id:"professor",label:"PROFESSOR",faction:"neutral",kind:"EA-6B",icon:"air-outline",positions:[new b(-275,52,300),new b(-190,55,215),new b(-90,61,165),new b(10,65,125),new b(105,68,85)]},{id:"mig29",label:"MIG-29A",faction:"enemy",kind:"MIG-29",icon:"air-outline",destroyedAtTurn:3,positions:[new b(300,120,-220),new b(195,100,-150),new b(100,78,-70),new b(20,55,10),new b(20,55,10)]},{id:"sam",label:"SAM",faction:"enemy",kind:"SAM",icon:"ground",tgt:!0,positions:[new b(160,0,-150),new b(160,0,-150),new b(160,0,-150),new b(160,0,-150),new b(160,0,-150)]},{id:"frigate",label:"FRIGATE",faction:"enemy",kind:"FRIGATE",icon:"ship",tgt:!0,positions:[new b(245,0,-40),new b(230,0,-30),new b(215,0,-20),new b(200,0,-10),new b(185,0,0)]}],Fn=[{summary:"FORMATION / INITIAL CONTACT",events:[]},{summary:"TACTICAL MOVEMENT / CONTACT",events:[{kind:"attack",attacker:"mig29",target:"rex",weapon:"2AAM"}]},{summary:"ENGAGEMENT / RANGE CLOSING",events:[{kind:"attack",attacker:"rex",target:"mig29",weapon:"QAAM"}]},{summary:"LOSSES / RESULT PENDING",events:[{kind:"destroy",target:"mig29"}]},{summary:"FINAL POSITION / RESULT",events:[]}];function jn(){return Fn.length}function hi(){return Fn.length-1}function im(){return typeof Ct<"u"&&Ct?Qc:hi()}function Cs(n,e){return gb(n.destroyedAtTurn,e)}function nd(n){return st.find(e=>e.id===n)?.label??n.toUpperCase()}function vb(n){return n.kind==="attack"?`${nd(n.attacker)} -> ${nd(n.target)} / ${n.weapon}`:`${nd(n.target)} DESTROYED`}function Xr(n){const e=Math.max(0,Math.min(n,hi())),t=Fn[e];return{turn:e,summary:t.summary,events:t.events,units:st.map(i=>({unit:i,position:i.positions[Math.min(e,i.positions.length-1)],status:Cs(i,e)}))}}st.forEach(n=>{n.positions.length!==jn()&&console.warn(`[scenario] ${n.label} has ${n.positions.length} keyframes but the scenario declares ${jn()} turns`)});let Ne=0,fe=null;const fi=new Map,So=new Map,xs=new Map;let Qo,Ys=null,tu=-1/0,Ac="",id=[];const xb=.675,rd=new fn().setFromEuler(new $n(-Math.PI/2,0,0)),rm=22,qn=1.5,Lf=7.2;function yb(){const n=[];for(let e=0;e<=64;e++){const t=e/64*Math.PI*2;n.push(new b(Math.cos(t)*Lf,Math.sin(t)*Lf,0))}return n}function Sb(n,e){const t=jM(n.icon,e);return t.scale.setScalar(xb),t.traverse(i=>{i.userData.unit=n}),t}function Lu(n,e){const t=n.icon==="ground"?Math.PI:0;if(yn())return ea(Wf({...n,destroyedAtTurn:n.attitudes?.[e]?void 0:n.destroyedAtTurn},e,{epsilon:.001}).yaw+t);const i=Math.min(e,n.positions.length-1),r=n.attitudes?.[i];if(r)return ea(r.yaw+t);const s=n.positions[Math.max(0,i-1)],o=n.positions[Math.min(n.positions.length-1,i+1)],a=o.x-s.x,c=o.z-s.z;return Math.hypot(a,c)<.001?null:ea(Math.atan2(-a,-c)+t)}const sd=.6,Df=2,If=new b(0,1,0),Mb=new b(1,0,0),bb=new b(0,0,1);function ea(n){return Math.atan2(Math.sin(n),Math.cos(n))}function Uf(n,e){const t=n.positions[e],i=n.positions[e+1];if(!t||!i)return null;const r=i.x-t.x,s=i.z-t.z;return Math.hypot(r,s)<.001?null:Math.atan2(r,s)}function Du(n,e){if(n.icon!=="air-filled"&&n.icon!=="air-outline")return null;if(yn())return Wf({...n,destroyedAtTurn:n.attitudes?.[e]?void 0:n.destroyedAtTurn},e,{epsilon:.001,maxBank:sd,rollGain:Df});const t=Math.min(e,n.positions.length-1),i=n.attitudes?.[t];if(i)return i;const r=n.positions[Math.max(0,t-1)],s=n.positions[Math.min(n.positions.length-1,t+1)],o=s.x-r.x,a=s.y-r.y,c=s.z-r.z,l=Math.hypot(o,c);if(l<.001&&Math.abs(a)<.001)return null;const d=Math.atan2(-o,-c),u=Math.atan2(a,Math.max(l,.001)),h=Uf(n,t-1),f=Uf(n,t),m=h===null||f===null?0:$t.clamp(Df*ea(f-h),-sd,sd);return{yaw:d,pitch:u,roll:m}}function Mo(n){const e=new xn;e.userData.unit=n,e.userData.pickable=!0;const t=no[n.faction],i=n.icon==="ground"||n.icon==="ship";let r=null;i||(r=new Ae(new jc(2.2,3.3,20),new vn({color:t,transparent:!0,opacity:.8,side:ln})),r.rotation.x=-Math.PI/2,r.userData.unit=n,e.add(r));const s=new hn(new Ut,new ui({color:t,transparent:!0,opacity:.8}));s.userData.unit=n,e.add(s);const o=Sb(n,t),a=new hn(new Ut().setFromPoints(yb()),new ui({color:t,transparent:!0,opacity:.9,depthTest:!1}));a.visible=!1,a.userData.unit=n,o.add(a);const c=Op(t);c.userData.unit=n,o.add(c),e.add(o);const l=2.6,d=new ui({color:t,transparent:!0,opacity:.9,depthTest:!1}),u=new xn;u.add(new hn(new Ut().setFromPoints([new b(-l,0,-l),new b(l,0,l)]),d)),u.add(new hn(new Ut().setFromPoints([new b(-l,0,l),new b(l,0,-l)]),d)),u.visible=!1,e.add(u);const h=[];o.traverse(g=>{const p=g.material;!p||Array.isArray(p)||h.push({material:p,baseOpacity:p.opacity})});const f=document.createElement("div");f.className=`world-label ${n.faction}`,f.textContent=n.label,f.style.cssText=`position:absolute; left:0; top:0; transform:translate(0, 0); color:#${t.toString(16).padStart(6,"0")}; text-shadow:0 0 7px #${t.toString(16).padStart(6,"0")}; font:14px 'Share Tech Mono',monospace; white-space:nowrap; pointer-events:none;`;const m=new gn;m.userData.dom=f,e.add(m),e.userData.parts={base:r,pole:s,icon:o,label:m,wreck:u,tgtRing:a,escortMarker:c,iconMaterials:h,labelFade:1};const _=GM(t);_.root.traverse(g=>{g.userData.unit=n}),e.add(_.root),So.set(n.id,_),dn.add(e),fi.set(n.id,e)}function Iu(n,e){const{unit:t,status:i}=n,r=fi.get(t.id),s=r.userData.parts,o=i==="wreck",c=!(typeof Ct<"u"&&Ct)&&!yn()&&o&&t.destroyedAtTurn!==void 0?t.positions[Math.min(t.destroyedAtTurn,t.positions.length-1)]:n.position,l=t.intangible?c.y:Bt(c.x,c.z);r.position.set(c.x,l,c.z);const d=Math.max(0,c.y-l),u=t.intangible?0:Math.max(qn,d),h=s.base===null?u+rm-qn:Math.max(d,.6);if(s.base&&(s.base.visible=!o),s.icon.visible=!o,s.pole.visible=!o,s.wreck.visible=i!=="active",s.wreck.position.y=u,s.tgtRing.visible=t.tgt===!0&&i==="active",s.escortMarker.visible=t.escort===!0&&t.faction!=="enemy"&&i==="active",!o){let g=s.pole.geometry.getAttribute("position");g?(g.setXYZ(0,0,.2,0),g.setXYZ(1,0,h,0),g.needsUpdate=!0):(g=new Tt([0,.2,0,0,h,0],3),s.pole.geometry.setAttribute("position",g)),s.pole.geometry.computeBoundingSphere(),s.pole.geometry.boundingBox&&s.pole.geometry.computeBoundingBox()}const f=s.icon;f.position.y=u;const m=Du(t,e);if(m===null){const g=Lu(t,e);g===null?f.quaternion.copy(rd):f.quaternion.setFromAxisAngle(If,g).multiply(rd)}else f.quaternion.setFromAxisAngle(If,m.yaw).multiply(new fn().setFromAxisAngle(Mb,m.pitch)).multiply(new fn().setFromAxisAngle(bb,m.roll)).multiply(rd);const _=i==="destroyed";s.iconMaterials.forEach(({material:g,baseOpacity:p})=>{g.transparent||(g.transparent=!0,g.needsUpdate=!0),g.userData.baseDepthTest??=g.depthTest,g.depthTest=t.intangible?!1:g.userData.baseDepthTest,g.opacity=p*(_?.3:1)*(t.hidden?.35:1)});for(const g of[s.base,s.pole,...s.wreck.children]){const p=g?.material;!p||Array.isArray(p)||(p.userData.hiddenBaseOpacity??=p.opacity,p.opacity=p.userData.hiddenBaseOpacity*(t.hidden?.35:1))}s.labelFade=(o?0:_?.5:1)*(t.hidden?.5:1),s.label.position.y=h}function sm(n,e){const t=new xn;if(t.userData.trail=!0,n.length<2)return t;const i=[],r=2.3;n.forEach((c,l)=>{const d=n[Math.max(0,l-1)],u=n[Math.min(n.length-1,l+1)],h=new b().subVectors(u,d).normalize(),f=new b(-h.z,0,h.x).normalize().multiplyScalar(r*(.45+l/n.length*.55));i.push(c.x+f.x,c.y+.5,c.z+f.z,c.x-f.x,c.y+.5,c.z-f.z)});const s=[];for(let c=0;c<n.length-1;c++)s.push(c*2,c*2+1,c*2+2,c*2+1,c*2+3,c*2+2);const o=new Ut;o.setAttribute("position",new Tt(i,3)),o.setIndex(s),o.computeVertexNormals();const a=new vn({color:e,transparent:!0,opacity:.28,side:ln,depthWrite:!1,blending:ad});return t.add(new Ae(o,a)),t}function Uu(n,e){return yn()?wt()?.sealedScenes?.find(t=>t.turn<=e&&t.units.some(i=>i.id===n.id))?.turn??e:0}function Nu(n,e,t){const i=Xf(n.positions,n.trackPoints??[],e,t).map(a=>new b(a.x,a.y,a.z));if(i.length<2)return[];const r=new Tu(i,!1,"centripetal"),s=[];let o=0;for(let a=e;a<t;a++){const c=(n.trackPoints??[]).filter(m=>m.segment===a).length+1,l=o/(i.length-1),d=(o+c)/(i.length-1),u=Math.max(24,c*16),h=i.slice(o,o+c+1).every(m=>m.distanceToSquared(i[o])<1e-12),f=Array.from({length:u+1},(m,_)=>h?i[o].clone():r.getPoint($t.lerp(l,d,_/u)));s.push({segment:a,points:f,start:l,end:d,curve:r}),o+=c}return s}function om(n,e){const{unit:t,status:i}=n;if(i==="wreck"||document.querySelector("#trail-display").value==="none")return;const r=t.destroyedAtTurn===void 0?e:Math.min(e,t.destroyedAtTurn),s=document.querySelector("#trail-display").value==="recent",o=Math.max(1,Math.floor(Number(document.querySelector("#trail-turns").value)||1)),a=Uu(t,e),c=Math.max(a,s?Math.max(0,r-o):0),l=Nu(t,a,r).filter(u=>u.segment>=c).flatMap((u,h)=>h?u.points.slice(1):u.points);!t.intangible&&(t.icon==="ground"||t.icon==="ship")&&l.forEach(u=>{u.y=Bt(u.x,u.z)+qn});const d=sm(l,no[t.faction]);d.userData.trail=t.id,dn.add(d)}const bo=document.createElement("div");bo.className="labels";bo.style.cssText="position:absolute;inset:0;pointer-events:none;";document.querySelector("#app").appendChild(bo);function Eo(){for(const[,n]of fi){const e=n.userData.parts.label,t=e.userData.dom;bo.appendChild(t),e.userData.domObject=t}}let ke=!1,kt=!1;const mn=[{id:"route-1",name:"ROUTE 1",waypoints:[]}];let En="route-1",ma=2,zc=1,er="",tr="",rn=null,ga=[],Bi=new xn;dn.add(Bi);function Bc(){return mn.find(n=>n.id===En)??mn[0]}function fo(){return Bc()?.waypoints??[]}const Hc=document.createElement("div");Hc.className="waypoint-labels";document.querySelector("#app").appendChild(Hc);const nu=[];let Vc=1,Gc=1,Ht=!1,An=!1,Ft=!1,tt=null,zi=new xn;dn.add(zi);let Pt=null,Hr=1;const ut=new Set;function Ei(){return st.filter(n=>ut.has(n.id))}function rr(){return Ei().filter(n=>Aa(n))}function po(){const n=rr();return n.reduce((e,t)=>e.add(Un(t)),new b).divideScalar(n.length||1)}function On(n){xt?.clearSelection(),tt=null,Ft=!1,ut.clear(),n.forEach(e=>ut.add(e.id)),fe=n[n.length-1]??null,n.length>1&&(Li="translate"),ht(),nt()}function ku(n,e=!1){typeof tn<"u"&&tn?.pick("unit",n.id)||(e?(ut.has(n.id)?ut.delete(n.id):ut.add(n.id),On(Ei())):On([n]))}function _a(n){if(!ri()||!ke)return;const e=rr();if(!e.length||n.lengthSq()<1e-12)return;const t=rl(),i=e.filter(r=>!r.intangible);i.length&&(n.y=Math.max(n.y,...i.flatMap(r=>t.map(s=>{const o=r.positions[s];return Math.max(0,Bt(o.x+n.x,o.z+n.z))-o.y})))),Sn("draft")&&(e.forEach(r=>{ct()&&!yn()&&(r.routeBinding=void 0),t.forEach(s=>r.positions[s].add(n)),ct()&&r.trackPoints?.forEach(s=>{t.includes(s.segment)&&t.includes(s.segment+1)&&(s.x+=n.x,s.y+=n.y,s.z+=n.z)})}),ht(),nt())}let Yn;const Jc=()=>({groups:[],markers:[],drawings:[]}),Ui=()=>Yn??Jc();let Dn,am,xt,tn,iu,Ir,Wc="",Pi=null;const Fu=document.createElement("div");Fu.className="editor-tool-labels";document.querySelector("#app").appendChild(Fu);let ve=null,Ct=!1,Rc=null,va=null,xa=null,Qc=0,Cc={edit:!1,terrain:!1};const ys=new Map;let mr=null,kr=null;function wt(){if(!ve)return;if(kr?.store===ve&&kr.revision===ve.revision)return kr.session;const n=ve.read(),e=n.project.sessions.find(t=>t.id===(n.editor.sessionId??"session-working"));return kr={store:ve,revision:ve.revision,session:e},e}function yn(){return wt()?.workflow?.mode==="formal"}function ct(){if(typeof Ct<"u"&&Ct)return!1;const n=wt();return n?.status!=="finished"&&(!n?.workflow||Si())}function ci(){return typeof Ct<"u"&&Ct||ct()}function Si(){const n=wt();return!!n?.workflow&&n.status!=="finished"&&n.turns.length===n.workflow.committedTurns+1&&Ne===n.workflow.committedTurns}function ri(){return ct()||Si()}function Xt(){return!!et||Ue.dragging||!!Pt||!!Tn||!!ai||!!xt?.isPicking()}function od(n,e){if(!ci()||!ke||et||Ue.dragging||Pt||Tn||ai||!Sn("tools"))return!1;Yn??=Jc(),e(Yn,st);const t=en(n);return ht(),nt(),t}function Eb(n){const e=st.filter(s=>s.groupId===n.id);if(!ct()||!ke||!e.length||Xt()||!Sn())return;Yn??=Jc();const t={...n,id:`group-${crypto.randomUUID()}`,name:`${n.name} 副本`.slice(0,128)};Yn.groups.push(t);const i=Bu().spacing,r=e.map(s=>{const o=Ca(Ra(s)),a=Hr++;return o.id=`unit-${a}`,o.label=`${s.label}-COPY-${a}`,o.groupId=t.id,o.routeBinding=void 0,delete o.player,delete o.playerActions,o.positions.forEach(c=>{c.x+=i,c.z+=i}),o.trackPoints?.forEach(c=>{c.x+=i,c.z+=i}),st.push(o),Mo(o),o});Eo(),On(r),ws("translate")}function Ou(n,e=.5){const t=new b(n.x,n.y,n.z).multiplyScalar(it),i=Dt.position.clone().sub(Lt.target).normalize();i.lengthSq()<.1&&i.set(0,.6,1).normalize();const r=Math.max(90,e*it/Math.sin($t.degToRad(Dt.fov)/2)*1.4);Lt.target.copy(t),Dt.position.copy(t).addScaledVector(i,Math.min(r,Lt.maxDistance)),Lt.update()}function Nf(n){const e=st.filter(r=>n.includes(r.id)).map(Un);if(!e.length)return;const t=e.reduce((r,s)=>r.add(s),new b).divideScalar(e.length),i=Math.max(15,...e.map(r=>r.distanceTo(t)))/it;Ou({x:t.x/it,y:t.y/it,z:t.z/it},i)}function Aa(n){return ri()&&(Si()||Cs(n,Ne)==="active")}function zu(n){return ri()&&(ct()||n.destroyedAtTurn===void 0||n.destroyedAtTurn===Ne)}function en(n="Edit scenario",e=mr){if(!ve||!e)return!0;if(Ue.dragging||Pt)return!1;try{const t=cm();return mr=null,ve.commit(t,n,e),!0}catch(t){return mr=null,qi(ve.read()),fe=st.find(i=>ut.has(i.id))??null,console.error("Scenario transaction rolled back",t),Qt("编辑未保存："+(t instanceof Error?t.message:String(t))),!1}}function Xc(n,e){const t=i=>JSON.stringify(i,(r,s)=>s&&typeof s=="object"&&!Array.isArray(s)?Object.fromEntries(Object.entries(s).sort(([o],[a])=>o.localeCompare(a))):s);return t(n)===t(e)}function wb(n,e){const t={...n,editor:{...n.editor,currentTurn:e.currentTurn}},i=uu(t,du(t));if(i.layout=e.layout,!Xc(e,i))throw new Error("已提交回合保留原样；请在末尾草稿编辑场景");return{...n,editor:{...t.editor,activeRouteId:e.activeRouteId}}}function cm(n=el()){if(typeof Ct<"u"&&Ct&&ve){const h=ve.read(),f=h.project.sessions.find(m=>m.id===h.editor.sessionId);return f.sceneTools=structuredClone(n.sceneTools??Jc()),h}if(ve&&(wt()?.status==="finished"||yn()&&!Si()))return wb(ve.read(),n);const e=zm(n,n.layout??{size:mt.size,extent:mt.extent,extentZ:mt.extentZ});if(!ve)return e;const t=ve.read(),i=t.project,r=t.editor.sessionId??"session-working",s=i.sessions.find(h=>h.id===r),o=i.maps.find(h=>h.id===s.mapRef.id&&h.revision===s.mapRef.revision),a=e.project.sessions[0];if(a.id=s.id,a.name=s.name,a.taskRef=s.taskRef,a.mapRef=s.mapRef,a.resourceSnapshot=s.resourceSnapshot,a.rulesRevision=s.rulesRevision,a.status=s.status,s.rulesRef&&(a.rulesRef={...s.rulesRef}),s.rulesSnapshot&&(a.rulesSnapshot=structuredClone(s.rulesSnapshot)),a.workflow=s.workflow,a.mapEditRef=s.mapEditRef,s.workflow){a.sealedScenes=Bm(s),a.turns=s.turns.map((f,m)=>m===Ne?a.turns[m]:f);const h=uu(t,du(t));a.units.forEach(f=>{const m=s.units.find(g=>g.id===f.id),_=h.units.find(g=>g.id===f.id);if(m){for(let g=0;g<Ne;g++)f.positions[g]=m.positions[g],f.attitudes&&(f.attitudes[g]=m.attitudes?.[g]??null);_&&Xc(n.units.find(g=>g.id===f.id)?.positions[Ne],_.positions[Ne])&&(f.positions[Ne]=m.positions[Ne])}})}const c=e.project.maps[0];c.id=o.id,c.revision=o.revision,c.name=o.name;const l=h=>h.id===o.id&&h.revision===o.revision,d=c.terrain.size!==o.terrain.size||c.terrain.widthKm!==(o.terrain.widthKm??o.terrain.extentKm*2)||c.terrain.heightKm!==(o.terrain.heightKm??o.terrain.extentKm*2)||!Xc(c.urban,o.urban)||c.terrain.heightsKm.some((h,f)=>Math.abs(h-o.terrain.heightsKm[f])>1e-7),u=!!s.workflow||i.tasks.some(h=>l(h.mapRef))||i.sessions.some(h=>h.id!==r&&l(h.mapRef));return d&&u&&(c.revision=Math.max(...i.maps.filter(h=>h.id===o.id).map(h=>h.revision))+1,a.mapRef={id:c.id,revision:c.revision}),e.project={...i,maps:d?u?[...i.maps,c]:i.maps.map(h=>l(h)?c:h):i.maps,sessions:i.sessions.map(h=>h.id===r?a:h)},e.editor.sessionId=r,e}function qi(n){const e=du(n);(mt.size!==e.size||mt.extent!==e.extent||mt.extentZ!==e.extentZ)&&(mt=new Hf(e.size,e.extent,e.extentZ),nr=new Gf(e.size,e.extent,e.extentZ),Jp(e.extent,e.extentZ??e.extent),Pa(),Vu()),Tb(uu(n,e))}function Ra(n){return{id:n.id,label:n.label,faction:n.faction,kind:n.kind,icon:n.icon,positions:n.positions.map(e=>({x:e.x,y:e.y,z:e.z})),attitudes:n.attitudes?.map(e=>e?{...e}:null),destroyedAtTurn:n.destroyedAtTurn,tgt:n.tgt,...n.escort===void 0?{}:{escort:n.escort},...n.hidden===void 0?{}:{hidden:n.hidden},...n.intangible===void 0?{}:{intangible:n.intangible},groupId:n.groupId,aircraftRef:n.aircraftRef?{...n.aircraftRef}:void 0,spRefs:n.spRefs?.map(e=>({...e})),...n.loadout===void 0?{}:{loadout:n.loadout.map(e=>({slot:e.slot,weaponRef:{...e.weaponRef}}))},...n.player===void 0?{}:{player:{...n.player}},...n.playerActions===void 0?{}:{playerActions:structuredClone(n.playerActions)},routeBinding:n.routeBinding?{...n.routeBinding,offset:n.routeBinding.offset?{...n.routeBinding.offset}:void 0}:void 0,trackPoints:n.trackPoints?.map(e=>({...e}))}}function Ca(n){return{id:n.id,label:n.label,faction:n.faction,kind:n.kind,icon:n.icon,positions:n.positions.map(e=>new b(e.x,e.y,e.z)),attitudes:n.attitudes?.map(e=>e?{...e}:null),destroyedAtTurn:n.destroyedAtTurn,tgt:n.tgt,...n.escort===void 0?{}:{escort:n.escort},...n.hidden===void 0?{}:{hidden:n.hidden},...n.intangible===void 0?{}:{intangible:n.intangible},groupId:n.groupId,aircraftRef:n.aircraftRef?{...n.aircraftRef}:void 0,spRefs:n.spRefs?.map(e=>({...e})),...n.loadout===void 0?{}:{loadout:n.loadout.map(e=>({slot:e.slot,weaponRef:{...e.weaponRef}}))},...n.player===void 0?{}:{player:{...n.player}},...n.playerActions===void 0?{}:{playerActions:structuredClone(n.playerActions)},routeBinding:n.routeBinding?{...n.routeBinding,offset:n.routeBinding.offset?{...n.routeBinding.offset}:void 0}:void 0,trackPoints:n.trackPoints?.map(e=>({...e}))}}function el(){return{units:st.map(Ra),turns:Fn.map(n=>({summary:n.summary,events:n.events.map(e=>({...e}))})),currentTurn:Ne,...Yn?{sceneTools:structuredClone(Yn)}:{},layout:{size:mt.size,extent:mt.extent,extentZ:mt.extentZ},terrain:mt.data.slice(),urban:nr.data.slice(),urbanSeed:fa,urbanAngle:_s,routes:mn.map(n=>({...n,waypoints:n.waypoints.map(e=>({...e}))})),activeRouteId:En}}function Es(n){n.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i&&i.dispose()}),dn.remove(n)}function lm(n){const e=fi.get(n.id);if(!e)return;e.userData.parts.label.userData.dom.remove(),Es(e),fi.delete(n.id),So.delete(n.id),xs.delete(n.id),Ua()}function Tb(n){Yn=n.sceneTools?structuredClone(n.sceneTools):void 0,mn.splice(0,mn.length,...n.routes.map(e=>({...e,waypoints:e.waypoints.map(t=>({...t}))}))),En=n.activeRouteId,tt=null,Ht=!1,Ft=!1,mt.data.set(n.terrain),nr.data.set(n.urban),fa=n.urbanSeed,_s=n.urbanAngle,vr=!0,dt("#urban-seed").value=String(fa),dt("#urban-angle").value=String($t.radToDeg(_s)),Fn.splice(0,Fn.length,...n.turns.map(e=>({summary:e.summary,events:e.events.map(t=>({...t}))}))),Ne=Math.min(n.currentTurn,hi());for(const e of[...fi.values()])Es(e);fi.clear(),So.clear(),xs.clear(),Ua(),bo.replaceChildren(),st.length=0,n.units.forEach(e=>st.push(Ca(e))),st.forEach(Mo),Eo()}function Sn(n="author"){return!ke||(n==="tools"?!ci():n==="author"?!ct():!ri())||!en()?!1:(mr=ve?.read()??null,!0)}function dm(n){if(!ve||Ue.dragging||Pt||et||!ct()&&!(Si()&&n.type==="set-turn-summary"&&n.turn===Ne&&n.sessionId===wt()?.id)||!en())return;const e=[...ut];ve.dispatch(n),qi(ve.read()),ut.clear(),e.filter(t=>st.some(i=>i.id===t)).forEach(t=>ut.add(t)),fe=Ei().at(-1)??null,ht(),nt()}function tl(){if(et||Ue.dragging||Pt)return;en();const n=ve?.undo();if(!n)return;const e=[...ut];qi(n),ut.clear(),e.filter(t=>st.some(i=>i.id===t)).forEach(t=>ut.add(t)),fe=Ei().at(-1)??null,ht(),nt()}function nl(){if(et||Ue.dragging||Pt)return;en();const n=ve?.redo();if(!n)return;const e=[...ut];qi(n),ut.clear(),e.filter(t=>st.some(i=>i.id===t)).forEach(t=>ut.add(t)),fe=Ei().at(-1)??null,ht(),nt()}function Ab(n){lm(n),Mo(n),Eo()}function ru(n){Ua();const e={unit:n,position:Un(n),status:Cs(n,Ne)};Iu(e,Ne),dn.children.filter(t=>t.userData.trail===n.id).forEach(t=>Es(t)),om(e,Ne),fe===n&&ut.size<=1&&pm(e,Xr(Ne))}function Un(n){return n.positions[Math.min(Ne,n.positions.length-1)]}function Rb(){!ct()||wt()?.mapEditRef||!ke||Ue.dragging||(pi(!0),sn=!1,Vr(),ut.clear(),fe=null,et={id:`unit-${Hr}`,label:`NEW-${String(Hr).padStart(2,"0")}`,faction:"enemy",kind:"UNKNOWN",icon:"air-outline",tgt:!1,positions:Array.from({length:jn()},()=>new b(0,60,0)),attitudes:Array.from({length:jn()},()=>({yaw:0,pitch:0,roll:0}))},il(),nt())}function Cb(){if(!ct()||!ke)return;const n=Ei();if(!n.length||et||Ue.dragging||!Sn())return;const e=new Set(n.map(t=>t.id));Yn?.links&&(Yn.links=Yn.links.filter(t=>!e.has(t.fromUnitId)&&!(t.to.kind==="unit"&&e.has(t.to.id)))),n.forEach(t=>{lm(t),st.splice(st.indexOf(t),1)}),Fn.forEach((t,i)=>{(!yn()||i===Ne)&&(t.events=t.events.filter(r=>!e.has(r.target)&&(r.kind!=="attack"||!e.has(r.attacker))))}),On([])}function Bu(){const n=Math.floor(Number(dt("#create-count").value)),e=Number(dt("#create-spacing").value);return{count:Number.isFinite(n)?$t.clamp(n,1,100):1,spacing:Number.isFinite(e)?$t.clamp(e,1,1e3):20}}function um(){if(!ct()||!ke)return;const n=Ei();if(!n.length||et||Ue.dragging)return;const{count:e,spacing:t}=Bu();if(!Sn())return;const i=[];for(let r=0;r<e;r++)for(const s of n){const o=Ca(Ra(s)),a=Hr++;o.id=`unit-${a}`,o.label=`${s.label}-COPY-${a}`,delete o.player,delete o.playerActions,o.routeBinding=void 0,o.trackPoints?.forEach(c=>{c.x+=t*(r+1),c.z+=t*(r+1)}),o.positions.forEach(c=>{c.x+=t*(r+1),c.z+=t*(r+1)}),i.push(o),st.push(o),Mo(o)}Eo(),On(i),ws("translate")}st.forEach(Mo);Eo();function ht(){Ua(),en(),ve&&!mr&&!Ue.dragging&&!Pt&&ve.setEditor({currentTurn:Ne,activeRouteId:En,sessionId:ve.read().editor.sessionId??"session-working"}),Gu(),hm();const n=Xr(Ne);xt?.sync(),typeof tn<"u"&&(Ue.dragging?tn?.update():tn?.sync()),dn.children.filter(t=>t.userData.trail).forEach(t=>{dn.remove(t),t.traverse(i=>{(i instanceof Ae||i instanceof hn)&&(i.geometry.dispose(),Array.isArray(i.material)?i.material.forEach(r=>r.dispose()):i.material.dispose())})}),n.units.forEach(t=>{Iu(t,n.turn),om(t,n.turn)}),document.querySelector("#turn-title").textContent=`TURN ${String(n.turn+1).padStart(2,"0")}`,document.querySelector("#turn-indicator").textContent=`${String(n.turn+1).padStart(2,"0")} / ${String(im()+1).padStart(2,"0")}`,document.querySelector("#turn-summary").textContent=n.summary,document.querySelector("#unit-count").textContent=String(n.units.length).padStart(2,"0"),document.querySelector("#event-list").textContent=n.events.length===0?"NO CONTACT":n.events.map(vb).join(`
`);const e=n.units.find(t=>t.unit===fe);e?pm(e,n):(fe=null,il()),ut.size>1&&(document.querySelector("#selected-name").textContent=`${ut.size} UNITS`,document.querySelector("#selected-detail").textContent=Ei().map(t=>t.label).join(" / "),document.querySelector("#distance-readout").textContent=`${rr().length} MOVABLE / FORMATION MOVE`,document.querySelector("#attitude-readout").textContent="");for(const[t,i]of fi)i.userData.parts.label.userData.dom.classList.toggle("unit-selected",ke&&ut.has(t))}function Pb(){const n=Xr(Ne),e=n.units.find(s=>s.unit.id===er),t=n.units.find(s=>s.unit.id===tr),i=Bi.userData.rangeCenter;if(e&&i){const s=e.position.clone().sub(i);for(const o of Bi.children)o.userData.rangeCentered&&o.position.add(s);i.copy(e.position)}const r=Bi.children.find(s=>s.userData.rangeConnector);if(e&&t&&e.unit.id!==t.unit.id&&r){const s=r.geometry.getAttribute("position");s.setXYZ(0,e.position.x,e.position.y,e.position.z),s.setXYZ(1,t.position.x,t.position.y,t.position.z),s.needsUpdate=!0,r.geometry.computeBoundingSphere();const o=lu(e.position,t.position,"slant",Hu());document.querySelector("#range-result").textContent=`${o.band} / SLANT
HORIZONTAL ${o.horizontalKm.toFixed(2)} km
DELTA ALT ${o.altitudeDeltaKm.toFixed(2)} km
SLANT ${o.slantKm.toFixed(2)} km${e.status!=="active"||t.status!=="active"?`
LOST UNIT / MEASUREMENT ONLY`:""}`}}function Hu(){const n=wt(),e=n?.sealedScenes?.find(t=>t.turn===Ne);return Hm(e?e.rulesSnapshot:n?.rulesSnapshot)}function hm(){const n=Hu(),e=Xr(Ne);e.units.some(a=>a.unit.id===er)||(er=""),e.units.some(a=>a.unit.id===tr)||(tr="");for(const[a,c]of[["#range-attacker-name",er],["#range-target-name",tr]]){const l=e.units.find(d=>d.unit.id===c);document.querySelector(a).textContent=l?`${l.unit.label} [${l.unit.id}] / ${l.status.toUpperCase()}`:"尚未选择"}document.querySelector("#range-pick-state").textContent=rn?`${rn==="attacker"?"攻击方":"目标"}选择中`:"";for(const a of["attacker","target"])document.querySelector(`#range-pick-${a}`).setAttribute("aria-pressed",String(rn===a));const t=document.querySelector("#range-candidates");t.hidden=!ga.length,t.replaceChildren(...ga.flatMap(a=>{const c=e.units.find(d=>d.unit.id===a);if(!c)return[];const l=document.createElement("button");return l.textContent=`${c.unit.label} [${a}] / ${c.unit.kind} / ${Zp[c.unit.faction]} / ${c.status.toUpperCase()}`,l.addEventListener("click",()=>fm(c.unit)),[l]}));const i="slant";document.querySelector("#range-mode-readout").textContent=i.toUpperCase();const r=e.units.find(a=>a.unit.id===er),s=e.units.find(a=>a.unit.id===tr),o=document.querySelector("#range-result");if(Es(Bi),Bi=new xn,dn.add(Bi),!r||!s)o.textContent="SELECT ATTACKER AND TARGET";else if(r===s)o.textContent="ATTACKER AND TARGET MUST DIFFER";else{const a=lu(r.position,s.position,i,n);o.textContent=`${a.band} / ${i.toUpperCase()}
HORIZONTAL ${a.horizontalKm.toFixed(2)} km
DELTA ALT ${a.altitudeDeltaKm.toFixed(2)} km
SLANT ${a.slantKm.toFixed(2)} km${r.status!=="active"||s.status!=="active"?`
LOST UNIT / MEASUREMENT ONLY`:""}`;const c=Jo([r.position,s.position],15332072,1,.75);c.userData.rangeConnector=!0,Bi.add(c)}if(r&&document.querySelector("#range-fill").checked){const a=n.find(d=>d.name===document.querySelector("#range-fill-band").value)??n[0],c=$t.clamp(Number(document.querySelector("#range-fill-opacity").value)||.12,.02,.6),l=new Ae(new zr(a.maxKm*it,48,32),new vn({color:a.color,transparent:!0,opacity:c,depthWrite:!1,side:gr}));l.position.copy(r.position),l.userData.rangeFill={band:a.name,radiusKm:a.maxKm},l.userData.rangeCentered=!0,Bi.add(l),s||(o.textContent=`${a.name} / 3D填充半径 ${a.maxKm} km`)}if(r&&document.querySelector("#range-rings").checked)for(const a of n){const c=a.maxKm*it,l=Array.from({length:129},(u,h)=>{const f=h/128*Math.PI*2;return new b(r.position.x+Math.cos(f)*c,r.position.y,r.position.z+Math.sin(f)*c)}),d=Jo(l,a.color,1,.5);d.userData.rangeCentered=!0,Bi.add(d)}r&&(Bi.userData.rangeCenter=r.position.clone())}function ii(){rn=null,ga=[],Lt.enabled=!0,_t.domElement.style.cursor=kt?"crosshair":"",so()}function fm(n){!rn||!st.includes(n)||(rn==="attacker"?er=n.id:tr=n.id,ii(),ht())}function Lb(n){if(!(Ue.dragging||Pt||et)){if(xt?.cancel(),rn===n){ii(),ht();return}pi(!0),sn=!1,kt&&Ii(!1),Ht=Ft=An=!1,tt=null,rn=n,ga=[],Ue.detach(),Lt.enabled=!0,_t.domElement.style.cursor="crosshair",ht(),nt()}}for(const n of["attacker","target"])document.querySelector(`#range-pick-${n}`).addEventListener("click",()=>Lb(n));document.querySelector("#range-use-selected").addEventListener("click",()=>{!fe||Ue.dragging||(er=fe.id,ii(),ht())});document.querySelector("#range-clear").addEventListener("click",()=>{er=tr="",ii(),ht()});for(const n of["#range-rings","#range-fill","#range-fill-band","#range-fill-opacity"])document.querySelector(n).addEventListener("change",ht);document.querySelector("#edit-panel").addEventListener("click",n=>{const e=n.target instanceof Element?n.target:null;rn&&!e?.closest(".range-panel")&&(ii(),ht())},!0);function il(){document.querySelector("#selected-name").textContent="NONE",document.querySelector("#selected-detail").textContent="",document.querySelector("#distance-readout").textContent="—",document.querySelector("#attitude-readout").textContent="—"}function pm(n,e){const{unit:t,status:i}=n;fe=t;const r=n.position,s=[Zp[t.faction],i.toUpperCase()],o=Ui().groups.find(m=>m.id===t.groupId);o&&s.push(`编组:${o.name}`),t.tgt&&s.push("TGT"),t.escort&&t.faction!=="enemy"&&s.push("ESCORT / 护卫目标"),document.querySelector("#selected-name").textContent=t.label,document.querySelector("#selected-detail").textContent=`${t.kind} / ${s.join(" / ")}`;const a=e.units.find(m=>m.unit.id===tr),l=a&&a.unit!==t?lu(r,a.position,"slant",Hu()):null;document.querySelector("#distance-readout").textContent=l?`TO ${a.unit.label}: ${l.distanceKm.toFixed(2)} km / ${l.band}`:"—";const d=Du(t,e.turn),u=m=>m*180/Math.PI,h=m=>`${u(m)>=0?"+":""}${u(m).toFixed(1)}°`,f=document.querySelector("#attitude-readout");if(d===null){const m=Lu(t,e.turn);f.textContent=m===null?"FACING  FIXED":`FACING ${h(m)}  (FLAT)`}else f.textContent=`YAW ${h(d.yaw)}  PITCH ${h(d.pitch)}  ROLL ${h(d.roll)}`}function Zs(n){if(xt?.cancel(),typeof Ct<"u"&&Ct){Jb(n);return}const e=Math.max(0,Math.min(n,hi()));e!==Ne&&(Ue.dragging||Pt||en()&&(xt?.clearSelection(),Na="",Ea(),pi(!0),Vr(),Ne=e,yn()&&ve&&(ve.setEditor({...ve.read().editor,currentTurn:e}),qi(ve.read()),ut.clear(),fe=null,ke=Si()),ht(),nt()))}function Pa(){const n=fb(mt.extent,mt.extentZ,innerWidth/innerHeight,Dt.fov,360,innerWidth);return Lt.maxDistance=n.maxDistance,Dt.far=n.far,Dt.near=n.near,Dt.updateProjectionMatrix(),n}function Vu(){const n=Pa();Lt.target.set(0,0,0),Dt.position.copy(new b(0,.65,1).normalize().multiplyScalar(n.distance)),Lt.update()}function Db(){const n=Pa();Lt.target.set(0,0,0),Dt.position.set(0,n.distance,.001),Lt.maxPolarAngle=Math.PI*.499,Lt.update()}const _n=()=>({label:document.querySelector("#edit-label"),kind:document.querySelector("#edit-kind"),faction:document.querySelector("#edit-faction"),icon:document.querySelector("#edit-icon"),tgt:document.querySelector("#edit-tgt"),escort:document.querySelector("#edit-escort"),hidden:document.querySelector("#edit-hidden"),intangible:document.querySelector("#edit-intangible"),lost:document.querySelector("#edit-lost"),remove:document.querySelector("#edit-delete"),undo:document.querySelector("#edit-undo"),redo:document.querySelector("#edit-redo")});let et=null,Ni=!1,Li="translate",ro="translate";const Ib=new b,cn=new gn;Wr.add(cn);const Ue=new xM(Dt,_t.domElement);Ue.setSize(.85);Wr.add(Ue.getHelper());const dt=n=>document.querySelector(n),Nn=n=>n.icon==="air-filled"||n.icon==="air-outline";function La(n){return Du(n,Ne)??{yaw:ea((Lu(n,Ne)??0)-(n.icon==="ground"?Math.PI:0)),pitch:0,roll:0}}function rl(){return ri()?yn()?[Ne]:Array.from({length:dt("#apply-later").checked?jn()-Ne:1},(n,e)=>Ne+e):[]}function mm(n,e){Aa(n)&&(n.attitudes??=Array.from({length:jn()},()=>null),rl().forEach(t=>{n.attitudes[t]={...e}}))}function gm(n){if(yn()||!ct()||wt()?.mapEditRef||!ke||et||Ue.dragging||Pt||(pi(!0),!Sn()))return;const e=Ne,t=e+1,i=new Map(st.map(s=>[s.id,{...La(s)}])),r=Fn[e];Fn.splice(t,0,{summary:n?r.summary:"TACTICAL MOVEMENT / NEW TURN",events:n?r.events.map(s=>({...s})):[]}),st.forEach(s=>{if(s.trackPoints=Yf(s.trackPoints??[],t,!0),s.routeBinding&&s.routeBinding.startTurn>=t&&s.routeBinding.startTurn++,s.playerActions?.forEach(o=>{o.turn>=t&&o.turn++,o.recordedTurn>=t&&o.recordedTurn++}),s.positions.splice(t,0,s.positions[e].clone()),n)s.attitudes??=Array.from({length:jn()-1},()=>null),s.attitudes.splice(t,0,i.get(s.id));else if(s.attitudes){const o=s.attitudes[e];s.attitudes.splice(t,0,o?{...o}:null)}s.destroyedAtTurn!==void 0&&s.destroyedAtTurn>=t&&(s.destroyedAtTurn+=1)}),Fn[t].events=Fn[t].events.filter(s=>s.kind!=="destroy"),$i(),tt=null,Ne=t,ht(),nt()}function Ub(){if(yn()||!ct()||wt()?.mapEditRef||!ke||jn()<=1||et||Ue.dragging||(pi(!0),!Sn()))return;const n=Ne;Fn.splice(n,1),st.forEach(e=>{e.trackPoints=Yf(e.trackPoints??[],n,!1),e.routeBinding&&(e.routeBinding.startTurn=Math.max(0,e.routeBinding.startTurn>=n?e.routeBinding.startTurn-1:e.routeBinding.startTurn)),e.positions.splice(n,1),e.attitudes?.splice(n,1),e.playerActions&&(e.playerActions=e.playerActions.filter(t=>t.turn!==n&&t.recordedTurn!==n).map(t=>({...t,turn:t.turn>n?t.turn-1:t.turn,recordedTurn:t.recordedTurn>n?t.recordedTurn-1:t.recordedTurn}))),e.destroyedAtTurn===n?e.destroyedAtTurn=void 0:e.destroyedAtTurn!==void 0&&e.destroyedAtTurn>n&&(e.destroyedAtTurn-=1)}),$i(),tt=null,Ne=Math.min(n,hi()),ht(),nt()}function so(){if(typeof tn<"u"&&tn?.active()){Ue.detach();return}if(!ri()&&!ci()){Ue.detach();return}if(rn||xt?.isPicking()){Ue.detach();return}if(Ue.dragging)return;const n=xt?.selection();if(n&&ci()&&ke&&!kt&&!et&&!sn){cn.position.set(n.position.x,n.position.y,n.position.z).multiplyScalar(it);const r=n.kind==="marker"?Ui().markers.find(o=>o.id===n.id):void 0,s=r&&xi(r)&&n.pointIndex===void 0?ro:"translate";cn.scale.setScalar(1),cn.quaternion.copy(r&&s!=="translate"?ha(r):new fn),Ue.setMode(s),Ue.setSpace(s==="translate"?"world":"local"),Ue.showX=Ue.showY=Ue.showZ=!0,Ue.attach(cn);return}cn.scale.setScalar(1);const e=Da();if(ct()&&ke&&!kt&&e){const r=tt?.kind==="track"?st.find(o=>o.id===tt.unitId):void 0,s=!!r&&!Nn(r)&&!r.intangible;cn.position.copy(Xo(e,s)),cn.quaternion.identity(),Ue.setMode("translate"),Ue.setSpace("world"),Ue.showX=Ue.showZ=!0,Ue.showY=!s,Ue.attach(cn);return}if(Ht||Ft||An){Ue.detach();return}if(!ke||kt||!fe||et||sn||!rr().length||ut.size>1&&Li==="rotate"){Ue.detach();return}const t=ut.size>1?po():Un(fe);cn.position.copy(t),ut.size===1&&!fe.intangible&&(cn.position.y=Math.max(t.y,Bt(t.x,t.z)+qn)),Ib.subVectors(cn.position,t);const i=La(fe);cn.quaternion.setFromEuler(new $n(i.pitch,i.yaw,i.roll,"YXZ")),Ue.setMode(Li),Ue.setSpace(Li==="translate"?"world":"local"),Ue.showX=Li==="translate"||Nn(fe),Ue.showY=!0,Ue.showZ=Li==="translate"||Nn(fe),Ue.attach(cn)}let ta="";function Nb(){const n=Dn?.panels.equipment;if(!n||!ve)return;if(Ct){n.replaceChildren(),ta="";return}const e=wt(),t=JSON.stringify([ve.revision,e?.id,Ne,fe?.id,ke,ct(),Xt(),fe?Ra(fe):null]);if(t===ta&&n.childElementCount)return;ta=t,n.replaceChildren();const i=document.createElement("label");i.className="equipment-unit-choice",i.textContent="配置单位";const r=document.createElement("select");r.id="equipment-unit",r.setAttribute("aria-label","配置装备的单位"),r.add(new Option("请选择单位",""));for(const l of st)r.add(new Option(l.label,l.id));r.value=fe?.id??"",r.disabled=Xt(),i.append(r),n.append(i),r.addEventListener("change",()=>{if(Xt()||!r.isConnected)return;const l=st.find(d=>d.id===r.value);On(l?[l]:[])});const s=document.createElement("div");if(s.id="equipment-editor-body",n.append(s),!e||!fe||et){s.textContent=et?"待落位":"未选择单位";return}const o=e.id,a=fe.id,c=Ne;Om(s,{read:()=>cm().project,busy:()=>nn||Xt()||fe?.id!==a||wt()?.id!==o||Ne!==c,report:Qt,commit:(l,d)=>{if(!ve||!ct()||!ke||Xt()||fe?.id!==a||wt()?.id!==o||Ne!==c)throw new Error("单位或编辑状态已变化，请重新选择装备。");if(!en())throw new Error("请先完成当前编辑。");const u=ve.read();ve.commit({...u,project:l},d,u),Yi(),In(!0),Dn?.select("equipment")}},{mode:"session",sessionId:o,unitId:a,turn:c,editable:ct()&&ke&&!Xt()})}function kb(n){if(!ve||!ct()||wt()?.mapEditRef||nn||Xt())throw new Error("请先完成当前操作，再新建玩家。");if(!en())throw new Error("当前编辑尚未保存。");const e=ve.read(),t=wt().id,i=`player-unit-${crypto.randomUUID()}`,s=qf(e.project,t,i,n.playerId,n.aircraftRef,n.loadout,{x:0,y:2.4,z:0},Ne).sessions.find(o=>o.id===t).units.find(o=>o.id===i);In(!0),Ii(!1),pi(!0),sn=!1,ii(),xt?.cancel(),xt?.clearSelection(),Ht=Ft=An=!1,tt=null,ut.clear(),fe=null,il(),et=Ca({...s,trackPoints:void 0,positions:s.positions.map(o=>({x:o.x*it,y:o.y*it,z:o.z*it}))}),Pi={input:structuredClone(n),player:{...s.player},sessionId:t,turn:Ne,revision:ve.revision},Ni=!1,Lt.enabled=!0,_t.domElement.style.cursor="",ht(),nt()}function Fb(){const n=Pi;!n||!et||!ve||n.sessionId!==wt()?.id||n.turn!==Ne||n.revision!==ve.revision||!ct()||(Ni=!0,Lt.enabled=!1,_t.domElement.style.cursor="crosshair",nt())}function Ob(n){const e=Pi,t=et;if(!e||!t||!ve)return!1;if(!ct()||!ke||nn||Ue.dragging||Pt||e.sessionId!==wt()?.id||e.turn!==Ne||e.revision!==ve.revision)return Qt("玩家放置状态已变化，请取消后重新创建。"),!1;const i=ve.read(),r=n.clone();r.y=t.intangible?Un(t).y:Nn(t)?Math.max(Un(t).y,Bt(r.x,r.z)+qn):Bt(r.x,r.z);try{const s=qf(i.project,e.sessionId,t.id,e.input.playerId,e.input.aircraftRef,e.input.loadout,{x:r.x/it,y:r.y/it,z:r.z/it},Ne),o=s.sessions.find(c=>c.id===e.sessionId).units.find(c=>c.id===t.id);o.icon=t.icon,o.faction=t.faction;const a=o.id;return ve.commit({...i,project:s},"创建玩家单位",i),Yi(),In(!0),On(st.filter(c=>c.id===a)),Qt(`${e.player.callsign} 已放置`),!0}catch(s){return Qt(s instanceof Error?s.message:String(s)),!1}}function zb(n,e,t){if(!ve||!ct()||wt()?.mapEditRef||nn||Xt())throw new Error("当前回合为只读或仍有操作待完成。");if(ke||In(!0),!en())throw new Error("当前编辑尚未保存。");const i=ve.read(),r=wt().id,s=tg(i.project,r,n,Ne,e,t==="drop"?"jettison":"use",`player-action-${crypto.randomUUID()}`);ve.commit({...i,project:s},t==="drop"?"登记上一回合抛弃":"登记上一回合使用",i),Yi(),In(!0),Qt(`已登记${t==="drop"?"抛弃":"使用"}`)}function _m(){if(!iu||!Ir||!ve)return;const n=wt(),e=!!n?.mapEditRef;Ir.hidden=!Gr||e;const t=JSON.stringify([ve.revision,n?.id,Ne,fe?.id,ct(),ke,Gr,nn,Xt(),Pi,Ni]);t!==Wc&&(Wc=t,iu.sync({project:ve.read().project,revision:ve.revision,sessionId:n?.id??"",turn:Ne,selectedUnitId:fe?.id,editable:ct()&&!nn&&(Pi!==null||!Xt()),mapOnly:e,...Pi?{pending:{player:{...Pi.player},aircraftRef:{...Pi.input.aircraftRef},loadout:structuredClone(Pi.input.loadout),armed:Ni}}:{}}))}function kf(){const n=et??fe,e=Da();if(e)for(const s of["x","y","z"])dt(`#path-${s}`).value=e[s].toFixed(2);if(!n)return;const t=ut.size>1?po():Un(n),i=La(n);for(const s of["x","y","z"])dt(`#edit-${s}`).value=t[s].toFixed(2);const r=document.querySelector("#edit-height");r&&(r.value=(t.y*1e3/it).toFixed(1));for(const s of["pitch","yaw","roll"])dt(`#edit-${s}`).value=$t.radToDeg(i[s]).toFixed(2)}function nt(){for(const c of Array.from(document.querySelectorAll('#edit-panel [data-mode-disabled="true"]')))c.disabled=!1,delete c.dataset.modeDisabled;vm(),Wb();const n=_n();dt("#canvas-width").value=String(mt.extent*2/it),dt("#canvas-height").value=String(mt.extentZ*2/it),dt("#canvas-samples").value=String(mt.size),Dn||(document.querySelector("#terrain-editor").toggleAttribute("hidden",!kt),document.querySelector("#unit-editor").toggleAttribute("hidden",kt)),document.querySelector("#tab-terrain").setAttribute("aria-pressed",String(kt)),document.querySelector("#tab-units").setAttribute("aria-pressed",String(!kt)),document.querySelector("#terrain-undo").disabled=!ve?.canUndo||!!Pt,document.querySelector("#terrain-redo").disabled=!ve?.canRedo||!!Pt;const e=et??fe;dt("#turn-summary-edit").value=Fn[Ne].summary,dt("#turn-summary-edit").disabled=!!et,dt("#edit-lost").max=String(jn());for(const c of["#turn-add","#turn-copy","#turn-delete"])document.querySelector(c).disabled=!!et||Ue.dragging||c==="#turn-delete"&&jn()===1;n.undo.disabled=!ve?.canUndo||!!et,n.redo.disabled=!ve?.canRedo||!!et,n.remove.disabled=fe===null||!!et,document.querySelector("#edit-copy").disabled=!ut.size||!!et,document.querySelector("#tool-rotate").disabled=ut.size>1,document.querySelector("#selection-count").textContent=`SELECTED ${ut.size} / MOVABLE ${rr().length}`,document.querySelector("#tool-box").setAttribute("aria-pressed",String(sn)),document.querySelector("#unit-picker").replaceChildren(...st.map(c=>{const l=document.createElement("button"),d=Ui().groups.find(u=>u.id===c.groupId);return l.textContent=d?`${c.label} · ${d.name}`:c.label,d&&(l.style.borderColor=d.color),l.setAttribute("aria-pressed",String(ut.has(c.id))),l.disabled=!!et,l.addEventListener("click",u=>ku(c,u.shiftKey||u.ctrlKey||u.metaKey||dt("#select-additive").checked)),l}));const i=["urban","erase-urban"].includes(document.querySelector("#terrain-brush").value);for(const c of["#urban-density","#urban-angle","#urban-seed"])dt(c).closest("label").toggleAttribute("hidden",!i);dt("#terrain-strength").closest("label").toggleAttribute("hidden",i),dt("#terrain-flat").closest("label").toggleAttribute("hidden",i),[n.label,n.kind,n.faction,n.icon,n.tgt,n.escort,n.hidden,n.intangible,n.lost].filter(Boolean).forEach(c=>{c.disabled=!e}),n.label.value=e?.label??"",n.kind.value=e?.kind??"",n.faction.value=e?.faction??"enemy",n.icon.value=e?.icon??"air-outline",n.tgt.checked=e?.tgt===!0,n.hidden&&(n.hidden.checked=e?.hidden===!0),n.intangible&&(n.intangible.checked=e?.intangible===!0),n.escort.checked=e?.escort===!0&&e.faction!=="enemy",n.lost.value=e?.destroyedAtTurn===void 0?"":String(e.destroyedAtTurn+1),document.querySelector("#placement-actions").toggleAttribute("hidden",!et),document.querySelector("#edit-state").textContent=et?Ni?"PLACING":"PENDING":ut.size>1?`GROUP MOVE / PRIMARY ${fe?.label??"-"} / TURN ${Ne+1}`:fe?`TURN ${Ne+1} / ${fe.attitudes?.[Ne]?"MANUAL ATTITUDE":"AUTO ATTITUDE"}`:"NONE",document.querySelector("#edit-place").disabled=Ni,document.querySelector("#edit-auto").disabled=!fe||!!et||ut.size>1;const r=!et&&ut.size>1?po():e?Un(e):new b,s=e?La(e):{yaw:0,pitch:0,roll:0};for(const c of["x","y","z"]){const l=dt(`#edit-${c}`);l.disabled=!e||!!et&&c!=="y",l.value=e?r[c].toFixed(2):""}for(const c of["pitch","yaw","roll"]){const l=dt(`#edit-${c}`);l.disabled=!e||!et&&ut.size>1||c!=="yaw"&&!Nn(e),l.value=e?$t.radToDeg(s[c]).toFixed(2):""}const o=document.querySelector("#edit-height");o&&(o.value=e?(r.y*1e3/it).toFixed(1):"",o.disabled=!e),document.querySelector("#tool-move").setAttribute("aria-pressed",String(Li==="translate")),document.querySelector("#tool-rotate").setAttribute("aria-pressed",String(Li==="rotate"));const a=!!wt()?.mapEditRef;document.querySelector("#tab-units").toggleAttribute("hidden",a),a&&!Dn&&document.querySelector("#unit-editor").setAttribute("hidden","");for(const c of["#turn-add","#turn-copy","#turn-delete"])yn()&&(document.querySelector(c).disabled=!0);yn()&&(dt("#apply-later").disabled=!0),Vb(),bi(),so(),Dn?.sync({editing:ke,editable:ci(),mapOnly:a,active:Gr,playerView:Ct,viewerCanUndo:!!ve?.canUndo,viewerCanRedo:!!ve?.canRedo}),am?.sync(),xt?.sync(),typeof tn<"u"&&tn?.sync(),Nb(),_m()}function vm(){!ri()&&!ci()&&(ke=!1),ct()||(kt=Ht=An=Ft=!1,tt=null),Dn||document.querySelector("#edit-panel").toggleAttribute("hidden",!ke),document.querySelector("#mode-readout").textContent=ke?yn()?"草稿编辑":"EDIT":"VIEW"}const Bb=new Set(["edit-x","edit-y","edit-z","edit-height","edit-pitch","edit-yaw","edit-roll","edit-auto","edit-lost","turn-summary-edit","select-clear","select-additive","tool-box","tool-move","tool-rotate","move-snap","rotate-snap","trail-display","trail-turns","edit-undo","edit-redo","tab-units"]);function Ff(n){return Bb.has(n.id)||!!n.closest("#unit-picker")}function xm(n){return!!n.closest(".sidebar-header,.sidebar-nav,.range-panel,.trail-panel,.archive-panel,.selection-panel,.sidebar-bound-list,#unit-picker,#route-list,#track-list")||["route-select","route-group-select","route-select-bound","route-visible","route-labels","select-clear","select-additive"].includes(n.id)}function Hb(n,e){const t=_n().escort;t.disabled=!n||!e||n.faction==="enemy",t.checked=n?.escort===!0&&n.faction!=="enemy"}function Vb(){const n=ri()&&ke,e=ct()&&ke;for(const r of Array.from(document.querySelectorAll("#unit-editor input, #unit-editor button, #unit-editor select, #unit-editor textarea, #terrain-editor input, #terrain-editor button, #terrain-editor select, #route-section input, #route-section button, #route-section select, #turn-summary-edit")))xm(r)||(!e&&(!n||!Ff(r))?r.disabled=!0:e&&r.dataset.modeDisabled==="true"&&(r.disabled=!1),r.dataset.modeDisabled=String(!e&&(!n||!Ff(r))));const t=et??fe;for(const r of["edit-x","edit-y","edit-z","edit-height","edit-pitch","edit-yaw","edit-roll","edit-auto"]){const s=document.getElementById(r);(!n||t&&!et&&!Aa(t))&&(s.disabled=!0)}const i=_n().lost;Hb(t,e),i.disabled=!t||!n||!e&&!zu(t),i.min=String(e?1:Ne+1),i.max=String(e?jn():Ne+1),i.step="1"}for(const n of["click","change","input","keydown","pointerdown"])document.querySelector("#edit-panel").addEventListener(n,e=>{const t=e.target instanceof Element?e.target.closest("button, input, select, textarea"):null;!t||xm(t)||t.closest("#workflow-panel")||t.closest('[data-sidebar-panel="groups"],[data-sidebar-panel="markers"],[data-sidebar-panel="drawing"],[data-sidebar-panel="equipment"],[data-sidebar-panel="links"]')||ct()&&ke||(e.preventDefault(),e.stopImmediatePropagation())},!0);function Vr(){Pi=null,et=null,Ni=!1,_t.domElement.style.cursor="",Lt.enabled=!0,nt()}function In(n){if(n&&!ri()&&!ci()){vm(),bi();return}en()&&(xt?.cancel(),typeof tn<"u"&&tn?.cancel(),rn&&ii(),ke=n,Dn||document.querySelector("#edit-panel").toggleAttribute("hidden",!n),document.querySelector("#mode-readout").textContent=n?"EDIT":"VIEW",_t.domElement.style.cursor=n&&kt?"crosshair":"",n||(Ht=Ft=!1,tt=null,Gu(),Ia(),kt=!1,Di.visible=!1,pi(!0),sn=!1,Vr()),ht(),nt())}function wi(n,e=!1,t="metadata"){if(!(!ri()||!ke||t==="metadata"&&!ct())&&!(fe&&!et&&(t==="pose"&&!Aa(fe)||t==="loss"&&!zu(fe)))){if(et){n(et),nt();return}fe&&Sn(t==="metadata"?"author":"draft")&&(n(fe),e&&Ab(fe),ht(),nt())}}function ws(n){!ri()||!ke||n==="rotate"&&ut.size>1||(sn=!1,Li=n,nt())}Ue.addEventListener("dragging-changed",n=>{if(Lt.enabled=!n.value,n.value){bi();return}en("Transform units / path"),nt()});let Tn=null,ya=null,Sa=!1,Ci=null;function Gb(n,e,t){if(!Yn)return;const i=r=>({x:r.x+t.x/it,y:r.y+t.y/it,z:r.z+t.z/it});if(e.kind==="marker"){const r=n.markers.find(o=>o.id===e.id),s=Yn.markers.find(o=>o.id===e.id);if(r&&s)if(xi(r)&&e.pointIndex!==void 0){const o=os(r);o[e.pointIndex]=i(o[e.pointIndex]);const a=Tc(r,o);Object.assign(s,a)}else s.position=i(r.position),r.controlPoints&&(s.controlPoints=r.controlPoints.map(i))}else{const r=n.drawings.find(o=>o.id===e.id),s=Yn.drawings.find(o=>o.id===e.id);r&&s&&(s.points=r.points.map((o,a)=>e.pointIndex===void 0||a===e.pointIndex?i(o):{...o}))}}const Ma=new Map;let Wo=[];const su=new b;Ue.addEventListener("mouseDown",()=>{if(!ri()&&!(ci()&&xt?.selection())||!ke||!ct()&&tt){Ue.detach();return}Sa=!1,ya=mr??ve?.read()??null,Tn=el(),Ci=xt?.selection()??null,su.copy(cn.position),Wo=rl(),Ma.clear(),rr().forEach(n=>Ma.set(n.id,n.positions.map(e=>e.clone())))});Ue.addEventListener("mouseUp",()=>{Tn&&!Xc(Tn,el())&&(mr=ya),Tn=null,ya=null,Sa=!1,Ci=null});Ue.addEventListener("objectChange",()=>{if(!ri()&&!(ci()&&Ci)||!ke||!Tn||Sa)return;if(Ci&&Tn.sceneTools){if(!ci())return;try{const e=Tn.sceneTools.markers.find(i=>i.id===Ci.id),t=Yn?.markers.find(i=>i.id===Ci.id);if(Ci.kind==="marker"&&Ci.pointIndex===void 0&&e&&t&&xi(e)&&ro!=="translate"){const i=new $n().setFromQuaternion(cn.quaternion,"YXZ"),r=ro==="rotate"?{pitch:i.x,yaw:i.y,roll:i.z}:e.attitude??{pitch:0,yaw:0,roll:0},s=Ue.axis??"XYZ",o=s.includes("X")?"x":s.includes("Y")?"y":"z",a=(e.sizeKm??.12)*(ro==="scale"?Math.abs(cn.scale[o]):1);Object.assign(t,Yp(e,e.position,r,a))}else Gb(Tn.sceneTools,Ci,cn.position.clone().sub(su))}catch(e){Qt(e instanceof Error?e.message:String(e));return}xt?.syncPosition?xt.syncPosition():xt?.sync(),typeof tn<"u"&&tn?.update();return}const n=Da();if(n){if(!ct())return;const e=tt?.kind==="track"?st.find(t=>t.id===tt.unitId):void 0;n.x=cn.position.x,n.y=e?.intangible?cn.position.y:Math.max(0,cn.position.y),n.z=cn.position.z,e&&!Nn(e)&&!e.intangible&&(n.y=Bt(n.x,n.z)),tt?.kind==="waypoint"&&$i(),ht(),kf();return}if(fe){if(Li==="translate"){const e=cn.position.clone().sub(su),t=rr().filter(i=>!i.intangible).map(i=>Ma.get(i.id)).filter(Boolean);t.length&&(e.y=Math.max(e.y,...t.flatMap(i=>Wo.map(r=>{const s=i[r];return Math.max(0,Bt(s.x+e.x,s.z+e.z))-s.y})))),rr().forEach(i=>{const r=Ma.get(i.id);if(r){ct()&&!yn()&&(i.routeBinding=void 0),Wo.forEach(o=>i.positions[o].copy(r[o]).add(e));const s=Tn?.units.find(o=>o.id===i.id)?.trackPoints;ct()&&s&&(i.trackPoints=s.map(o=>Wo.includes(o.segment)&&Wo.includes(o.segment+1)?{...o,x:o.x+e.x,y:o.y+e.y,z:o.z+e.z}:{...o})),ru(i)}})}else{const e=new $n().setFromQuaternion(cn.quaternion,"YXZ");mm(fe,{yaw:e.y,pitch:Nn(fe)?e.x:0,roll:Nn(fe)?e.z:0})}Li!=="translate"&&ru(fe),Pb(),kf()}});function mo(n){Xi.x=n.clientX/innerWidth*2-1,Xi.y=-(n.clientY/innerHeight)*2+1,Gi.setFromCamera(Xi,Dt);let e=0;const t=new b;for(let i=2;i<Dt.far;i+=2){const r=Gi.ray.at(i,t);if(r.y<=Bt(r.x,r.z)){let s=e,o=i;for(let c=0;c<18;c++){const l=(s+o)/2,d=Gi.ray.at(l,t);d.y>Bt(d.x,d.z)?s=l:o=l}const a=Gi.ray.at(o,new b);return a.y=Bt(a.x,a.z),a}e=i}return null}let sn=!1,ai=null;const Ts=document.createElement("div");Ts.className="selection-box";Ts.hidden=!0;document.querySelector("#app").appendChild(Ts);function pi(n=!1,e){if(!ai)return;const t=ai;if(ai=null,Ts.hidden=!0,Lt.enabled=!Ni,_t.domElement.hasPointerCapture(t.pointerId)&&_t.domElement.releasePointerCapture(t.pointerId),n||!e)return;const i=Math.min(t.x,e.clientX),r=Math.max(t.x,e.clientX),s=Math.min(t.y,e.clientY),o=Math.max(t.y,e.clientY);Wr.updateMatrixWorld(!0),Dt.updateMatrixWorld(!0);const a=st.filter(c=>{if(Cs(c,Ne)==="wreck")return!1;const d=fi.get(c.id).userData.parts.icon.getWorldPosition(new b).project(Dt),u=(d.x+1)*innerWidth/2,h=(1-d.y)*innerHeight/2;return d.z>=-1&&d.z<=1&&u>=i&&u<=r&&h>=s&&h<=o});On(t.additive?[...new Set([...Ei(),...a])]:a),ut.size>1&&(Li="translate"),nt()}function qc(n){Xi.x=n.clientX/innerWidth*2-1,Xi.y=-(n.clientY/innerHeight)*2+1,Gi.setFromCamera(Xi,Dt);const e=Gi.intersectObjects(dn.children.filter(t=>t.userData.editorTools),!0).filter(t=>Wu(t.object)).filter(t=>{for(let i=t.object;i;i=i.parent)if(i.userData.editorTool)return!0;return!1});return e.find(t=>t.object.userData.editorTool?.pointIndex!==void 0)??e[0]}_t.domElement.addEventListener("pointerdown",n=>{if(n.button!==0||!Gr||n.altKey||et||kt||Ue.dragging||Ue.axis!==null||Pt||rn||xt?.isPicking())return;if(tn?.active()){n.preventDefault(),n.stopImmediatePropagation();const t=sl(n)[0];for(let r=t?.object??null;r;r=r.parent){const s=r.userData.unit;if(s){tn.pick("unit",s.id);return}}const i=qc(n);for(let r=i?.object??null;r;r=r.parent)if(r.userData.editorTool?.kind==="marker"){xt?.selectObject?.(i.object);return}return}if(!ke||sn||Ht||Ft||An)return;const e=qc(n);e&&xt?.selectObject?.(e.object)&&(n.preventDefault(),n.stopImmediatePropagation())},!0);_t.domElement.addEventListener("dblclick",n=>{n.button!==0||!Gr||Xt()||rn||Ht||Ft||An||kt||sn||Ue.axis!==null||sl(n).length||typeof qc<"u"&&qc(n)||Gi.intersectObject(zi,!0).some(t=>t.object.userData.pathPoint)||On([])});_t.domElement.addEventListener("pointerdown",n=>{if(Ct||xt?.isPicking()||rn||!ke||kt||Ht||An||tt||et||n.button!==0||!(sn||n.shiftKey))return;n.stopImmediatePropagation(),n.preventDefault();const e=sl(n)[0]?.object.userData.unit;if(e&&!sn){ku(e,!0);return}Lt.enabled=!1,Ue.axis=null,ai={x:n.clientX,y:n.clientY,additive:n.shiftKey||n.ctrlKey||n.metaKey||dt("#select-additive").checked,pointerId:n.pointerId},Ts.hidden=!1,Ts.style.cssText=`left:${n.clientX}px;top:${n.clientY}px;width:0;height:0`,_t.domElement.setPointerCapture(n.pointerId)},!0);_t.domElement.addEventListener("pointermove",n=>{ai&&(n.stopImmediatePropagation(),Ts.style.cssText=`left:${Math.min(ai.x,n.clientX)}px;top:${Math.min(ai.y,n.clientY)}px;width:${Math.abs(n.clientX-ai.x)}px;height:${Math.abs(n.clientY-ai.y)}px`)},!0);_t.domElement.addEventListener("pointerup",n=>{ai&&(n.stopImmediatePropagation(),pi(!1,n))},!0);_t.domElement.addEventListener("pointercancel",()=>pi(!0));_t.domElement.addEventListener("pointerdown",n=>{if(xt?.isPicking()||rn||n.button!==0||kt||Ht||Ft||An||tt)return;if(et&&Ni){if(!ct()||!ke)return;const t=mo(n);if(!t)return;if(Pi){n.stopImmediatePropagation(),Ob(t);return}const i=et,{count:r,spacing:s}=Bu(),o=Math.ceil(Math.sqrt(r)),a=[];if(!Sn())return;for(let c=0;c<r;c++){const l=Ca(Ra(i)),d=Hr++;l.id=`unit-${d}`,l.label=r===1?i.label:`${i.label}-${String(c+1).padStart(2,"0")}`;const u=t.clone();u.x+=c%o*s,u.z+=Math.floor(c/o)*s;const h=Bt(u.x,u.z);u.y=l.intangible?Un(i).y:Nn(l)?Math.max(Un(i).y,h+qn):h,l.positions=Array.from({length:jn()},()=>u.clone()),st.push(l),a.push(l),Mo(l)}et=null,Ni=!1,Lt.enabled=!0,_t.domElement.style.cursor="",Eo(),On(a),ws("translate");return}if(et||Ue.dragging||ke&&Ue.axis!==null)return;const e=sl(n)[0]?.object.userData.unit;e&&ku(e,ke&&(n.ctrlKey||n.metaKey||dt("#select-additive").checked))});document.querySelector("#edit-place").addEventListener("click",()=>{et&&(Ni=!0,Lt.enabled=!1,_t.domElement.style.cursor="crosshair",nt())});document.querySelector("#edit-cancel").addEventListener("click",Vr);document.querySelector("#tool-move").addEventListener("click",()=>ws("translate"));document.querySelector("#tool-rotate").addEventListener("click",()=>ws("rotate"));for(const n of["x","y","z"])dt(`#edit-${n}`).addEventListener("change",()=>{const e=Number(dt(`#edit-${n}`).value);if(Number.isFinite(e)){if(!et&&ut.size>1){const t=new b;t[n]=e-po()[n],_a(t)}else if(et)wi(t=>{Un(t)[n]=n==="y"&&!t.intangible?Math.max(0,e):e});else if(fe){const t=new b;t[n]=e-Un(fe)[n],_a(t)}}});document.querySelector("#edit-height")?.addEventListener("change",()=>{const n=dt("#edit-height"),e=Number(n.value);if(!n.value.trim()||!Number.isFinite(e)){nt();return}const t=et?Un(et).y:fe?ut.size>1?po().y:Un(fe).y:void 0;if(t!==void 0&&n.value===(t*1e3/it).toFixed(1))return;const i=e*it/1e3;if(et)wi(r=>{Un(r).y=r.intangible?i:Math.max(0,i)});else if(fe){const r=new b(0,i-(ut.size>1?po().y:Un(fe).y),0);_a(r)}});for(const n of["pitch","yaw","roll"])dt(`#edit-${n}`).addEventListener("change",()=>{const e=Number(dt(`#edit-${n}`).value);Number.isFinite(e)&&wi(t=>{const i={...La(t),[n]:$t.degToRad(e)};et?t.attitudes=Array.from({length:jn()},()=>({...i})):mm(t,i)},!1,"pose")});document.querySelector("#edit-auto").addEventListener("click",()=>wi(n=>{n.attitudes&&rl().forEach(e=>{n.attitudes[e]=null})},!1,"pose"));document.querySelector("#turn-add").addEventListener("click",()=>gm(!1));document.querySelector("#turn-copy").addEventListener("click",()=>gm(!0));document.querySelector("#turn-delete").addEventListener("click",Ub);dt("#turn-summary-edit").addEventListener("change",()=>{if(!ri()||!ke)return;const n=dt("#turn-summary-edit").value.trim();n===Fn[Ne].summary||et||dm({type:"set-turn-summary",sessionId:ve?.read().editor.sessionId??"session-working",turn:Ne,summary:n||"UNTITLED TURN"})});dt("#move-snap").addEventListener("change",()=>Ue.setTranslationSnap(Number(dt("#move-snap").value)>0?Number(dt("#move-snap").value):null));dt("#rotate-snap").addEventListener("change",()=>Ue.setRotationSnap(Number(dt("#rotate-snap").value)>0?$t.degToRad(Number(dt("#rotate-snap").value)):null));document.querySelector("#edit-copy").addEventListener("click",um);document.querySelector("#select-clear").addEventListener("click",()=>On([]));document.querySelector("#tool-box").addEventListener("click",()=>{sn=!sn,nt()});document.querySelector("#edit-add").addEventListener("click",Rb);document.querySelector("#edit-delete").addEventListener("click",Cb);document.querySelector("#edit-undo").addEventListener("click",tl);document.querySelector("#edit-redo").addEventListener("click",nl);_n().label.addEventListener("change",()=>{if(et){wi(n=>{n.label=_n().label.value||n.id});return}fe&&dm({type:"rename-unit",sessionId:ve?.read().editor.sessionId??"session-working",unitId:fe.id,label:_n().label.value||fe.id})});_n().kind.addEventListener("change",()=>wi(n=>{n.kind=_n().kind.value||"UNKNOWN"}));_n().faction.addEventListener("change",()=>wi(n=>{n.faction=_n().faction.value,n.faction==="enemy"&&delete n.escort},!0));_n().icon.addEventListener("change",()=>wi(n=>{n.icon=_n().icon.value},!0));_n().tgt.addEventListener("change",()=>wi(n=>{n.tgt=_n().tgt.checked}));_n().escort.addEventListener("change",()=>{const n=et??fe;if(!n||n.faction==="enemy"||!ct()||!ke){nt();return}wi(e=>{e.escort=_n().escort.checked})});_n().hidden?.addEventListener("change",()=>wi(n=>{n.hidden=_n().hidden.checked}));_n().intangible?.addEventListener("change",()=>wi(n=>{n.intangible=_n().intangible.checked,n.intangible||(n.positions.forEach(e=>{e.y=Nn(n)?Math.max(e.y,Bt(e.x,e.z),0):Bt(e.x,e.z)}),n.trackPoints?.forEach(e=>{e.y=Nn(n)?Math.max(e.y,Bt(e.x,e.z),0):Bt(e.x,e.z)}))}));_n().lost.addEventListener("change",()=>{if(!ri()||!ke||fe&&!zu(fe))return;const n=_n().lost.value.trim();if(yn()&&n!==""&&Number(n)!==Ne+1){Qt("损失回合仅可留空或填写当前草稿回合"),nt();return}wi(e=>{const t=Number(n),i=e.destroyedAtTurn;e.destroyedAtTurn=n===""||Number.isNaN(t)?void 0:Math.max(0,Math.min(t-1,hi())),yn()&&i!==e.destroyedAtTurn&&(Fn[Ne].events=Fn[Ne].events.filter(r=>r.kind!=="destroy"||r.target!==e.id),e.destroyedAtTurn===Ne&&Fn[Ne].events.push({kind:"destroy",target:e.id})),$i()},!0,"loss")});document.querySelector("#prev-turn").addEventListener("click",()=>Zs(Ne-1));document.querySelector("#next-turn").addEventListener("click",()=>Zs(Ne+1));addEventListener("keydown",n=>{const e=n.key.toLowerCase();if(typeof tn<"u"&&tn?.active()&&n.key==="Escape"){tn.cancel(),nt(),n.preventDefault();return}if(xt?.isPicking()){n.key==="Escape"&&(xt.cancel(),ht(),n.preventDefault());return}if(rn&&n.key==="Escape"){ii(),ht(),n.preventDefault();return}if(!(rn&&["e","t","b","w","q","d","a","pageup","pagedown"].includes(e))){if(n.key==="Escape"&&Ue.dragging&&Ci){Ue.reset(),Tn&&(Yn=Tn.sceneTools?structuredClone(Tn.sceneTools):void 0),Tn=null,ya=null,Sa=!0,Ci=null,xt?.sync(),n.preventDefault();return}if(n.key==="Escape"&&Ue.dragging&&tt){if(Ue.reset(),Tn){const t=Tn;mn.splice(0,mn.length,...t.routes.map(i=>({...i,waypoints:i.waypoints.map(r=>({...r}))}))),En=t.activeRouteId,st.forEach(i=>{const r=t.units.find(s=>s.id===i.id);r&&(i.positions=r.positions.map(s=>new b(s.x,s.y,s.z)),i.trackPoints=r.trackPoints?.map(s=>({...s})))}),Tn=null,Sa=!0,ht(),nt()}n.preventDefault();return}if(n.key==="Escape"&&(Ht||Ft||tt)){Ht=Ft=!1,tt=null,ht(),nt();return}if(n.key==="Escape"&&Pt){Ia(!0);return}if(n.key==="Escape"&&et){Vr();return}if(!n.target?.matches("input, select, textarea, [contenteditable]")&&document.querySelector("#manager-panel").hidden&&!(typeof Ct<"u"&&Ct&&["t","b","w","q","d","a","pageup","pagedown"].includes(e))){if(e==="t"&&ke){Dn?Dn.select(kt?"units":"terrain"):Ii(!kt);return}if(!((kt||tt||Ht||Ft)&&["b","w","q","d","a","pageup","pagedown"].includes(e))){if(n.key==="Escape"){ai?pi(!0):Ue.dragging?Ue.reset():(sn=!1,On([]));return}if(ke&&e==="b"&&(sn=!sn,nt()),ke&&(n.ctrlKey||n.metaKey)&&e==="d"){n.preventDefault(),um();return}if(ke&&(n.ctrlKey||n.metaKey)&&e==="a"){n.preventDefault(),et||On(st.filter(t=>Cs(t,Ne)==="active"));return}if(ke&&e==="w"&&ws("translate"),ke&&e==="q"&&ws("rotate"),(n.ctrlKey||n.metaKey)&&e==="z"){n.preventDefault(),tl();return}if((n.ctrlKey||n.metaKey)&&e==="y"){n.preventDefault(),nl();return}if(n.key==="ArrowLeft"&&Zs(Ne-1),n.key==="ArrowRight"&&Zs(Ne+1),n.key==="Home"&&Zs(0),n.key==="End"&&Zs(im()),e==="r"&&Vu(),e==="e"&&In(!ke),n.key==="PageUp"&&ke&&fe&&(n.preventDefault(),_a(new b(0,10,0))),n.key==="PageDown"&&ke&&fe&&(n.preventDefault(),_a(new b(0,-10,0))),e==="f"&&fe){const t=Xr(Ne).units.find(i=>i.unit===fe);t&&(Lt.target.set(t.position.x,t.position.y*.35,t.position.z),Lt.update())}}}}});function Da(){if(!ct()||!tt)return null;if(tt.kind==="waypoint")return mn.flatMap(e=>e.waypoints).find(e=>e.id===tt.id)??null;const n=tt;return st.find(e=>e.id===n.unitId)?.trackPoints?.find(e=>e.id===n.id)??null}function $i(){if(yn()||!ct())return;const n=new Set;for(const e of st){const t=e.routeBinding,i=mn.find(a=>a.id===t?.routeId);if(!t||!i?.waypoints.length)continue;const r=t.offset??{x:0,y:0,z:0},s=i.waypoints.map(a=>({x:a.x+r.x,y:a.y+r.y,z:a.z+r.z})),o=Vm(e.positions,s,t.startTurn,e.destroyedAtTurn);e.positions=o.map((a,c)=>new b(a.x,c<=t.startTurn||e.intangible?a.y:Nn(e)?Math.max(a.y,Bt(a.x,a.z)+qn):Bt(a.x,a.z),a.z)),n.add(e.id)}for(let e=1;e<jn();e++){const t=new Map;st.filter(s=>n.has(s.id)&&s.routeBinding?.formationId&&e>s.routeBinding.startTurn&&(s.destroyedAtTurn===void 0||e<=s.destroyedAtTurn)).forEach(s=>{const o=s.routeBinding.formationId;t.set(o,[...t.get(o)??[],s])});for(const s of t.values()){const o=s.filter(c=>Nn(c)&&!c.intangible);let a=0;o.forEach(c=>{const l=c.routeBinding,d=mn.find(m=>m.id===l.routeId),u=d.waypoints[Math.min(e-l.startTurn-1,d.waypoints.length-1)],h=c.positions[e],f=u.y+(l.offset?.y??0);h.y=f,a=Math.max(a,Bt(h.x,h.z)+qn-f)}),o.forEach(c=>{c.positions[e].y+=a})}const i=st.filter(s=>!s.intangible).map(s=>({id:s.id,point:s.positions[e],fixed:!n.has(s.id)||!!s.routeBinding?.formationId||e<=(s.routeBinding?.startTurn??hi())||s.destroyedAtTurn!==void 0&&e>s.destroyedAtTurn})),r=Gm(i,8);for(const s of st){if(!n.has(s.id))continue;const o=s.routeBinding;if(!(e<=o.startTurn)){if(s.destroyedAtTurn!==void 0&&e>s.destroyedAtTurn)s.positions[e].copy(s.positions[s.destroyedAtTurn]);else if(!o.formationId){const a=r.get(s.id);s.positions[e].set(a.x,s.intangible?a.y:Nn(s)?Math.max(a.y,Bt(a.x,a.z)+qn):Bt(a.x,a.z),a.z)}}}}}function Xo(n,e=!1){return new b(n.x,e?Bt(n.x,n.z)+qn:n.y,n.z)}function Gu(){if(Es(zi),zi=new xn,dn.add(zi),Hc.replaceChildren(),nu.length=0,typeof Ct<"u"&&Ct)return;const n=(i,r,s,o=!1)=>{const a=tt?.id===r.id&&tt.kind===r.kind&&(r.kind!=="waypoint"||tt.kind==="waypoint"&&(!r.routeId||tt.routeId===r.routeId||En===r.routeId)),c=new Ae(new zr(a?4:2.8,10,8),new vn({color:a?16777215:s,depthTest:!1}));c.position.copy(Xo(i,o)),c.userData.pathPoint=r,c.renderOrder=10,zi.add(c)},e=document.querySelector("#route-visible")?.checked??!0,t=document.querySelector("#route-labels")?.checked??!0;if(e)for(const i of mn){const r=st.filter(l=>l.routeBinding?.routeId===i.id),s=[...new Set(r.map(l=>Ui().groups.find(d=>d.id===l.groupId)?.name).filter(Boolean))],o=r.filter(l=>!l.groupId||!Ui().groups.some(d=>d.id===l.groupId)).map(l=>l.label),a=[...s.map(l=>`编组:${l}`),...o].join(" / ")||"未绑定",c=i.id===En?16767050:7649492;i.waypoints.length>1&&zi.add(Jo(i.waypoints.map(l=>Xo(l)),c,1,i.id===En?.7:.4)),i.waypoints.forEach((l,d)=>{n(l,{kind:"waypoint",id:l.id,routeId:i.id},c);const u=new b(l.x,Bt(l.x,l.z)+.35,l.z);if(zi.add(Jo([u,Xo(l)],c,1,.5)),zi.add(Jo([new b(l.x-4,u.y,l.z),new b(l.x+4,u.y,l.z),u.clone(),new b(l.x,u.y,l.z-4),new b(l.x,u.y,l.z+4)],c,1,.7)),!t)return;const h=document.createElement("button");h.className="waypoint-label",h.textContent=`${i.name} · ${d+1} · ${a}`,h.title=`${i.name} / 航路点 ${d+1}
绑定单位：${r.map(f=>f.label).join("、")||"无"}
${a}`,h.addEventListener("click",()=>{Ue.dragging||Pt||xt?.isPicking()||(En=i.id,Ht=Ft=!1,tt=ct()&&ke?{kind:"waypoint",id:l.id,routeId:i.id}:null,Dn?.select("routes"),ht(),nt())}),Hc.appendChild(h),nu.push({dom:h,position:Xo(l).add(new b(0,5,0))})})}if(!(!ct()||!ke||kt)&&An&&fe&&ut.size===1&&Cs(fe,Ne)!=="wreck"&&document.querySelector("#trail-display").value!=="none"){const i=!Nn(fe)&&!fe.intangible,r=Math.min(hi(),fe.destroyedAtTurn??hi());fe.trackPoints?.filter(o=>o.segment<r).forEach(o=>n(o,{kind:"track",unitId:fe.id,id:o.id},no[fe.faction],i));const s=Uu(fe,Ne);for(const o of Nu(fe,s,r)){const{segment:a,points:c}=o;i&&c.forEach(d=>{d.y=Bt(d.x,d.z)+qn});const l=sm(c,no[fe.faction]);l.userData.editSegment=a,l.userData.trackPart=o,l.traverse(d=>{d.userData.editSegment=a,d instanceof Ae&&(d.material.dispose(),d.material=new vn({color:no[fe.faction],transparent:!0,opacity:.65,side:ln,depthTest:!1}))}),zi.add(l)}}}function Wb(){const n=fo(),e=document.querySelector("#route-select");e.replaceChildren(...mn.map(f=>{const m=document.createElement("option");return m.value=f.id,m.textContent=f.name,m})),e.value=En,dt("#route-name").value=Bc()?.name??"";const t=(f,m)=>{const _=document.createElement("button");return _.textContent=f,_.setAttribute("aria-pressed",String(tt?.id===m.id)),_.addEventListener("click",()=>{if(Ue.dragging||Pt||xt?.isPicking())return;Ht=Ft=!1,tt=ct()&&ke?m:null;const g=m.kind==="waypoint"?fo().find(p=>p.id===m.id):fe?.trackPoints?.find(p=>p.id===m.id);g&&!ct()&&Ou({x:g.x/it,y:g.y/it,z:g.z/it}),ht(),nt()}),_};document.querySelector("#route-list").replaceChildren(...n.map((f,m)=>t(`WP ${m+1}`,{kind:"waypoint",id:f.id})));const i=fe&&ut.size===1?fe.trackPoints??[]:[];document.querySelector("#track-list").replaceChildren(...i.map((f,m)=>t(`P${m+1} / ${f.segment+1}-${f.segment+2}`,{kind:"track",unitId:fe.id,id:f.id})));const r=Da(),s=tt?.kind==="track"?st.find(f=>f.id===tt.unitId):void 0,o=!!s&&!Nn(s)&&!s.intangible;for(const f of["x","y","z"]){const m=dt(`#path-${f}`);m.disabled=!r||o&&f==="y",m.value=r?r[f].toFixed(2):""}document.querySelector("#route-bind").disabled=!rr().length||!n.length,document.querySelector("#route-unbind").disabled=!Ei().some(f=>f.routeBinding),document.querySelector("#path-delete").disabled=!r;for(const f of["#route-up","#route-down"])document.querySelector(f).disabled=tt?.kind!=="waypoint";document.querySelector("#route-pick").setAttribute("aria-pressed",String(Ht)),document.querySelector("#track-edit").setAttribute("aria-pressed",String(An)),document.querySelector("#track-add").setAttribute("aria-pressed",String(Ft));for(const f of["#track-add","#track-midpoint"])document.querySelector(f).disabled=!fe||ut.size!==1||jn()<2;tt?.kind==="track"&&fe&&(Cs(fe,Ne)==="wreck"||document.querySelector("#trail-display").value==="none")&&(tt=null),dt("#track-segment").max=String(Math.max(1,hi())),document.querySelector("#path-state").textContent=Ht?"航路点放置中":Ft?"控制点放置中":`${Bc()?.name??"-"} / ${n.length} WP / ${Ei().map(f=>`${f.label}:${mn.find(m=>m.id===f.routeBinding?.routeId)?.name??"未绑定"}${f.routeBinding?.formationId?"(编队)":""}`).join(" / ")} / ${i.length} TRACK POINTS`;const c=st.filter(f=>f.routeBinding?.routeId===En),l=document.querySelector("#route-bindings");l&&l.replaceChildren(...c.map(f=>{const m=document.createElement("button"),_=Ui().groups.find(g=>g.id===f.groupId);return m.textContent=`${f.label}${_?` · ${_.name}`:""} / 从第 ${f.routeBinding.startTurn+1} 回合`,m.addEventListener("click",()=>On([f])),m}));const d=document.querySelector("#route-group-select");if(d){const f=d.value;d.replaceChildren(...Ui().groups.map(m=>new Option(`${m.name} (${st.filter(_=>_.groupId===m.id).length})`,m.id))),Ui().groups.some(m=>m.id===f)&&(d.value=f)}const u=document.querySelector("#route-select-bound");u&&(u.disabled=!c.length);const h=document.querySelector("#route-bind-group");h&&(h.disabled=!ct()||!ke||!n.length||!d?.value)}function ym(n,e){const t=[0,...(fe?.trackPoints??[]).filter(s=>s.segment===n).sort((s,o)=>s.t-o.t).map(s=>s.t),1],i=$t.clamp(e,0,.999999)*(t.length-1),r=Math.floor(i);return $t.lerp(t[r],t[r+1],i-r)}function Sm(n,e,t=.5){if(!ct()||!ke||!fe||ut.size!==1||!Sn())return;fe.trackPoints??=[];const i={id:`control-${Gc++}`,segment:n,t:$t.clamp(t,.01,.99),x:e.x,y:e.y,z:e.z};fe.trackPoints.push(i),tt={kind:"track",unitId:fe.id,id:i.id},Ft=!1,ht(),nt()}_t.domElement.addEventListener("pointerdown",n=>{if(xt?.isPicking()||!ct()||rn||!ke||kt||n.button!==0||n.altKey||et)return;if(Ht){n.stopImmediatePropagation(),n.preventDefault();const i=mo(n);if(!i||!Sn())return;fo().push({id:`wp-${Vc++}`,x:i.x,y:Math.max(Number(dt("#route-height").value)||0,i.y+qn),z:i.z}),$i(),ht(),nt();return}Xi.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),Gi.setFromCamera(Xi,Dt);const e=Gi.intersectObjects(zi.children,!0),t=e.find(i=>i.object.userData.pathPoint);if(t&&Ue.axis===null){n.stopImmediatePropagation(),n.preventDefault(),tt=t.object.userData.pathPoint,tt?.kind==="waypoint"&&tt.routeId&&(En=tt.routeId),Ft=!1,Dn?.select("routes"),ht(),nt();return}if(Ft&&Ue.axis===null){n.stopImmediatePropagation(),n.preventDefault();const i=e.find(r=>r.object.userData.editSegment!==void 0);if(i){const r=i.object.userData.editSegment,s=Nu(fe,Uu(fe,Ne),Math.min(hi(),fe.destroyedAtTurn??hi())).find(l=>l.segment===r);if(!s)return;let o=0,a=1/0;for(let l=0;l<=300;l++){const d=s.curve.getPoint($t.lerp(s.start,s.end,l/300));!Nn(fe)&&!fe.intangible&&(d.y=Bt(d.x,d.z)+qn);const u=d.distanceToSquared(i.point);u<a&&(a=u,o=l/300)}const c=s.curve.getPoint($t.lerp(s.start,s.end,o));Sm(r,c,ym(r,o))}}},!0);document.querySelector("#route-select").addEventListener("change",()=>{Ue.dragging||Pt||xt?.isPicking()||(En=document.querySelector("#route-select").value,tt=null,Ht=Ft=!1,ht(),nt())});dt("#route-name").addEventListener("change",()=>{Ue.dragging||Sn()&&(Bc().name=dt("#route-name").value.trim()||"UNTITLED ROUTE",ht(),nt())});document.querySelector("#route-new").addEventListener("click",()=>{if(Ue.dragging||et||!Sn())return;const n=ma++,e={id:`route-${n}`,name:`ROUTE ${n}`,waypoints:[]};mn.push(e),En=e.id,tt=null,Ht=Ft=!1,ht(),nt()});document.querySelector("#route-remove").addEventListener("click",()=>{if(!(Ue.dragging||et)&&Sn()){if(st.filter(n=>n.routeBinding?.routeId===En).forEach(n=>{n.routeBinding=void 0}),mn.splice(mn.findIndex(n=>n.id===En),1),!mn.length){const n=ma++;mn.push({id:`route-${n}`,name:`ROUTE ${n}`,waypoints:[]})}En=mn[0].id,tt=null,Ht=Ft=!1,$i(),ht(),nt()}});document.querySelector("#route-pick").addEventListener("click",()=>{!ct()||!ke||et||Ue.dragging||(Ht=!Ht,Ft=!1,tt=null,sn=!1,ht(),nt())});function Mm(n){if(!ct()||!ke||et||Ue.dragging||!fo().length||!n.length)return;const e=Wm(n.map(i=>Un(i))),t=n.length>1?`formation-${zc++}`:void 0;Sn()&&(n.forEach((i,r)=>{i.routeBinding={startTurn:Ne,routeId:En,offset:t?e[r]:{x:0,y:0,z:0},formationId:t},i.trackPoints=(i.trackPoints??[]).filter(s=>s.segment<Ne)}),$i(),ht(),nt())}document.querySelector("#route-bind").addEventListener("click",()=>Mm(rr()));document.querySelector("#route-unbind").addEventListener("click",()=>{Sn()&&(Ei().forEach(n=>{n.routeBinding=void 0}),$i(),ht(),nt())});for(const[n,e]of[["#route-up",-1],["#route-down",1]])document.querySelector(n).addEventListener("click",()=>{if(tt?.kind!=="waypoint")return;const t=fo(),i=t.findIndex(s=>s.id===tt.id),r=i+e;r<0||r>=t.length||Sn()&&([t[i],t[r]]=[t[r],t[i]],$i(),ht(),nt())});document.querySelector("#path-delete").addEventListener("click",()=>{if(tt&&Sn()){if(tt.kind==="waypoint"){const n=fo();n.splice(n.findIndex(e=>e.id===tt.id),1),n.length||st.filter(e=>e.routeBinding?.routeId===En).forEach(e=>{e.routeBinding=void 0})}else{const n=tt,e=st.find(t=>t.id===n.unitId);e.trackPoints=e.trackPoints?.filter(t=>t.id!==n.id)}tt=null,$i(),ht(),nt()}});document.querySelector("#track-edit").addEventListener("click",()=>{!ct()||!ke||(An=!An,Ft=Ht=!1,tt=null,sn=!1,ht(),nt())});document.querySelector("#track-add").addEventListener("click",()=>{!ct()||!ke||(An=!0,Ft=!Ft,Ht=!1,tt=null,sn=!1,ht(),nt())});document.querySelector("#track-midpoint").addEventListener("click",()=>{if(!ct()||!ke||!fe||ut.size!==1||jn()<2)return;const n=$t.clamp(Math.floor(Number(dt("#track-segment").value)||1)-1,0,hi()-1),e=Xf(fe.positions,fe.trackPoints??[],n,n+1).map(i=>new b(i.x,i.y,i.z)),t=new Tu(e).getPoint(.5);An=!0,Sm(n,t,ym(n,.5))});dt("#track-segment").addEventListener("change",()=>{dt("#track-segment").value=String($t.clamp(Math.floor(Number(dt("#track-segment").value)||1),1,Math.max(1,hi())))});for(const n of["x","y","z"])dt(`#path-${n}`).addEventListener("change",()=>{const e=Da(),t=Number(dt(`#path-${n}`).value);if(!e||!Number.isFinite(t))return;const i=tt?.kind==="track"?tt.unitId:void 0;Sn()&&(e[n]=n==="y"&&!st.find(r=>r.id===i)?.intangible?Math.max(0,t):t,tt?.kind==="waypoint"&&$i(),ht(),nt())});for(const n of["#trail-display","#trail-turns"])document.querySelector(n).addEventListener("change",ht);function bm(){const n=(e,t,i,r)=>{const s=Number(dt(e).value);return Number.isFinite(s)?$t.clamp(s,t,i):r};return{radius:n("#terrain-radius",8,240,50),strength:n("#terrain-strength",.1,30,6),target:n("#terrain-flat",0,180,20),density:n("#urban-density",1,100,70)/100,mode:document.querySelector("#terrain-brush").value}}const Di=new k0(new Ut,new ui({color:7143340,depthTest:!1,transparent:!0,opacity:.9}));Di.visible=!1;Wr.add(Di);function Em(n){if(Di.visible=!!n&&kt&&ke,!n)return;const{radius:e}=bm();let t=Di.geometry.getAttribute("position");t||(t=new Tt(new Float32Array(240),3),t.setUsage(Lc),Di.geometry.setAttribute("position",t));for(let i=0;i<80;i++){const r=i/80*Math.PI*2,s=n.x+Math.cos(r)*e,o=n.z+Math.sin(r)*e;t.setXYZ(i,s,Bt(s,o)+.6,o)}t.needsUpdate=!0,Di.geometry.computeBoundingSphere()}function wm(n){if(!ct()||!ke||!Pt)return;const e=bm(),t=Pt.last,i=t?t.distanceTo(n):0;if(t&&i<mt.spacing*.4)return;const r=t?Math.ceil(i/Math.max(mt.spacing,e.radius/4)):1;for(let s=1;s<=r;s++){const o=t?t.clone().lerp(n,s/r):n,a=e.mode==="smooth"||e.mode==="flatten"?e.strength/30:e.strength;(e.mode==="urban"||e.mode==="erase-urban"?nr.paint(o.x,o.z,e.radius,e.density,e.mode==="erase-urban"):mt.brush(o.x,o.z,e.radius,a,e.mode,e.target))&&(Pt.changed=!0,vr=!0,_b(o,e.radius))}Pt.last=n.clone()}function Ia(n=!1){if(!Pt)return;const e=Pt;n||nm(),Pt=null,n?(mt.data.set(e.before.terrain),nr.data.set(e.before.urban),vr=!0):e.changed&&(mr=e.checkpoint),_t.domElement.hasPointerCapture(e.pointerId)&&_t.domElement.releasePointerCapture(e.pointerId),Lt.enabled=!0,vr?(Kc(),!n&&ti&&Qd===mt&&eu===nr&&(pa=!1)):(io.visible=!0,ms.visible=!0,ti&&(ti.root.visible=!1),vs=null),ht(),nt()}function Ii(n){n&&!ct()||!n&&wt()?.mapEditRef||(rn&&ii(),!Ue.dragging&&(Ia(),pi(!0),Vr(),sn=!1,kt=n,Ht=Ft=!1,tt=null,Gu(),Di.visible=!1,n&&!ke&&In(!0),_t.domElement.style.cursor=n?"crosshair":"",nt()))}_t.domElement.addEventListener("pointerdown",n=>{if(xt?.isPicking()||!ct()||!ke||!kt||n.button!==0||n.altKey)return;n.stopImmediatePropagation(),n.preventDefault();const e=mo(n);!e||Math.abs(e.x)>mt.extent||Math.abs(e.z)>mt.extentZ||en()&&(Pt={before:el(),checkpoint:ve?.read()??null,pointerId:n.pointerId,changed:!1,last:null},Lt.enabled=!1,_t.domElement.setPointerCapture(n.pointerId),wm(e),Em(e))},!0);_t.domElement.addEventListener("pointermove",n=>{if(!ct()||!ke||!kt)return;const e=mo(n);Em(e),Pt&&(n.stopImmediatePropagation(),e&&wm(e))},!0);_t.domElement.addEventListener("pointerup",n=>{Pt&&(n.stopImmediatePropagation(),Ia())},!0);_t.domElement.addEventListener("pointercancel",()=>Ia(!0));_t.domElement.addEventListener("pointerleave",()=>{Pt||(Di.visible=!1)});document.querySelector("#tab-terrain").addEventListener("click",()=>Ii(!0));document.querySelector("#tab-units").addEventListener("click",()=>Ii(!1));for(const[n,e]of[["#terrain-reset",()=>mt.reset()],["#terrain-generate",()=>mt.generate(Number(dt("#terrain-seed").value)||0,document.querySelector("#terrain-preset").value)]])document.querySelector(n).addEventListener("click",()=>{Pt||Sn()&&(e(),vr=!0,Kc(),ht(),nt())});document.querySelector("#terrain-brush").addEventListener("change",nt);for(const n of["#urban-angle","#urban-seed"])dt(n).addEventListener("change",()=>{Pt||Sn()&&(_s=$t.degToRad($t.clamp(Number(dt("#urban-angle").value)||0,-180,180)),fa=Number(dt("#urban-seed").value)|0,vr=!0,Kc(),ht(),nt())});document.querySelector("#terrain-contour-smooth").addEventListener("change",()=>{vr=!0});document.querySelector("#terrain-undo").addEventListener("click",tl);document.querySelector("#terrain-redo").addEventListener("click",nl);const Gi=new Ap,Xi=new Oe;function Xb(n,e){const t=[],i=Xr(Ne);for(const r of i.units){const s=fi.get(r.unit.id)?.userData.parts;if(!s)continue;const o=xs.get(r.unit.id);if(Qo!==void 0&&!o)continue;const a=So.get(r.unit.id),l=[s.icon,...Qo===3&&a?.root.visible?[a.base]:[]].filter(Wu).map(f=>f.getWorldPosition(new b).project(Dt)).filter(f=>f.z>=-1&&f.z<=1).map(f=>Math.hypot((f.x+1)*innerWidth/2-n,(1-f.y)*innerHeight/2-e));if(!l.length)continue;const d=Math.min(...l),u=s.label.userData.dom,h=u.getBoundingClientRect();if(d<=14||!u.hidden&&n>=h.left&&n<=h.right&&e>=h.top&&e<=h.bottom){const f=new Set(o??[r.unit.id]);i.units.filter(m=>f.has(m.unit.id)).forEach(m=>t.push({unit:m.unit,distance:d}))}}return t.sort((r,s)=>r.distance-s.distance||r.unit.id.localeCompare(s.unit.id)).map(r=>r.unit)}function Tm(n,e){const t=Xb(n,e);t.length===1?fm(t[0]):(ga=t.map(i=>i.id),hm())}_t.domElement.addEventListener("pointerdown",n=>{!rn||n.button!==0||n.altKey||(n.stopImmediatePropagation(),n.preventDefault(),Tm(n.clientX,n.clientY))},!0);bo.addEventListener("pointerdown",n=>{rn&&n.button===0&&(n.stopPropagation(),n.preventDefault(),Tm(n.clientX,n.clientY))});function Wu(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function sl(n){return Xi.x=n.clientX/innerWidth*2-1,Xi.y=-(n.clientY/innerHeight)*2+1,Gi.setFromCamera(Xi,Dt),Gi.intersectObjects([...fi.values()].flatMap(e=>e.children),!0).filter(e=>Wu(e.object))}function Ua(){Ys=null,tu=-1/0,Ac=""}function qb(n=performance.now()){const e=Dt.position.distanceTo(Lt.target),t=kM(e,Qo),i=t!==Qo;Qo=t;const r=document.querySelector("#camera-readout");r&&(r.textContent=`FREE 3D / ${t}档`);const s=[t,innerWidth,innerHeight,...Dt.position.toArray(),...Dt.quaternion.toArray(),ke,rn].join("|"),o=Ys===null;if(!o&&!i&&s===Ac)return;if(Dt.updateMatrixWorld(),dn.updateMatrixWorld(!0),Ys??=Xr(Ne),o||i||s!==Ac&&n-tu>=100){const l=Ys.units.map(d=>{const u=fi.get(d.unit.id),h=u.userData.parts,m=(t===3?u.position.clone():h.icon.getWorldPosition(new b)).project(Dt),_=ke&&ut.has(d.unit.id);return{id:d.unit.id,label:d.unit.label,faction:d.unit.faction,icon:d.unit.icon,tgt:d.unit.tgt,escort:d.unit.escort,status:d.status,position:{x:d.position.x/it,y:d.position.y/it,z:d.position.z/it},screenX:(m.x+1)*innerWidth/2,screenY:(1-m.y)*innerHeight/2,onScreen:!_&&!d.unit.hidden&&!d.unit.intangible&&m.z>-1&&m.z<1&&Math.abs(m.x)<=1&&Math.abs(m.y)<=1}});id=zM(l,t),xs.clear();for(const d of id)xs.set(d.representativeId,d.memberIds);Ac=s,tu=n}const a=new Map(Ys.units.map(l=>[l.unit.id,l])),c=new Map(id.map(l=>[l.representativeId,l]));for(const l of Ys.units){const d=fi.get(l.unit.id),u=d.userData.parts,h=So.get(l.unit.id),f=c.get(l.unit.id),_=(f?.airRepresentativeId?a.get(f.airRepresentativeId):void 0)??(Nn(l.unit)?l:void 0),g=Math.max(0,l.position.y-d.position.y),p=l.unit.intangible?0:Math.max(qn,g),E=u.base===null?p+rm-qn:Math.max(g,.6),x=new b(d.position.x,d.position.y+p,d.position.z),A=2*Math.max(Dt.near,-x.applyMatrix4(Dt.matrixWorldInverse).z)*Math.tan($t.degToRad(Dt.fov)/2)/Math.max(1,innerHeight),C=VM(t,A);u.tgtRing.visible=!!f?.hasTgt&&l.status==="active",u.escortMarker.visible=!!f?.hasEscort&&l.status==="active"&&l.unit.faction!=="enemy",WM(u,h,{tier:l.unit.intangible?1:t,representative:!!f,status:l.status,faction:l.unit.faction,label:f?.label??l.unit.label,scale:C,hasAir:!!_,airAltitude:_?Math.max(0,_.position.y-d.position.y):0,hasTgt:!!f?.hasTgt,hasEscort:!!f?.hasEscort,iconHeight:p,poleHeight:E}),h.root.traverse(P=>{const I=P.material;!I||Array.isArray(I)||(I.userData.hiddenBaseOpacity??=I.opacity,I.opacity=I.userData.hiddenBaseOpacity*(l.unit.hidden?.35:1))})}for(const l of dn.children)typeof l.userData.trail=="string"&&(l.visible=t===1||xs.has(l.userData.trail))}function Yb(){for(const{dom:n,position:e}of nu){const t=e.clone().project(Dt);n.hidden=t.z<-1||t.z>1,n.style.left=`${(t.x+1)*innerWidth/2}px`,n.style.top=`${(1-t.y)*innerHeight/2}px`}for(const n of fi.values()){const e=n.userData.parts,t=e.label.userData.dom,i=new b;e.label.getWorldPosition(i),i.project(Dt);const r=e.label.userData.displayVisible!==!1&&i.z>-1&&i.z<1,s=So.get(n.userData.unit.id),o=s?.root.visible?s.pole:e.pole;tb({camera:Dt,width:innerWidth,height:innerHeight,group:n,icon:e.icon,pole:o,dom:t,isAir:e.base!==null,naturalTop:o.userData.naturalTop??e.label.position.y,isMerged:(xs.get(n.userData.unit.id)?.length??1)>1,decorated:e.tgtRing.visible||e.escortMarker.visible,visible:r});const a=Ui().groups.find(c=>c.id===n.userData.unit?.groupId);t.title=a?`编组: ${a.name}`:"",t.style.borderLeft=a?`3px solid ${a.color}`:"",t.style.opacity=r?String(e.labelFade):"0",t.style.pointerEvents=rn&&r?"auto":"none",t.style.cursor=rn?"crosshair":"",t.classList.toggle("range-attacker-label",n.userData.unit.id===er),t.classList.toggle("range-target-label",n.userData.unit.id===tr)}}let Gr=!1;function Am(){requestAnimationFrame(Am),Gr&&(Pt?nm():vr&&Kc(),kt&&!Pt&&(!ti||pa)&&tm(),Lt.update(),Fp(Lr,Dt.position.distanceTo(Lt.target)),qb(),Yb(),xt?.updateLabels(Dt,innerWidth,innerHeight),tn?.update(),_t.render(Wr,Dt))}addEventListener("resize",()=>{Dt.aspect=innerWidth/innerHeight,Pa(),_t.setSize(innerWidth,innerHeight)});function $b(n){Fm(n,{size:mt.size,extent:mt.extent})}function jb(n){$b(n),Ct&&Xu(!1);const e=ve.read();try{go(),ii(),ut.clear(),fe=null,ve.reset(n.checkpoint),qi(n.checkpoint);const t=(i,r)=>Math.max(0,...i.filter(s=>s.startsWith(r)).map(s=>Number(s.slice(r.length))).filter(Number.isSafeInteger))+1;Hr=t(st.map(i=>i.id),"unit-"),ma=t(mn.map(i=>i.id),"route-"),Vc=t(mn.flatMap(i=>i.waypoints.map(r=>r.id)),"wp-"),Gc=t(st.flatMap(i=>(i.trackPoints??[]).map(r=>r.id)),"control-"),zc=t(st.flatMap(i=>i.routeBinding?.formationId?[i.routeBinding.formationId]:[]),"formation-"),er=tr="",ht(),nt()}catch(t){throw qi(e),ve.reset(e),ht(),nt(),t}}let Yc,ba,Of="",nn=!1,Na="",gs=null;function Qt(n){Na=n;const e=document.querySelector("#workflow-state");e&&(e.textContent=n)}function Ea(){gs=null,document.querySelector("#workflow-confirm")?.setAttribute("hidden","")}function bi(){const n=wt(),e=n?.workflow?.mode==="formal",t=document.querySelector("#workflow-panel");if(!t)return;if(typeof Ct<"u"&&Ct){t.hidden=!0;for(const m of Array.from(t.querySelectorAll("button")))m.disabled=!0;return}t.hidden=!1;const i=e&&n.turns.length===n.workflow.committedTurns+1,r=Xt()||nn,s=n?.status==="finished";t.dataset.mode=s?"finished":e?Si()?"draft":"history":n?.mapEditRef?"map-editor":"authoring";const o=document.querySelector("#task-editor-save");o&&(o.hidden=!!e||!!n?.mapEditRef||n?.turns.length!==1,o.disabled=r||s);const a=document.querySelector("#map-editor-save");a&&(a.hidden=!n?.mapEditRef,a.disabled=r||s);const c=document.querySelector("#workflow-reopen");c&&(c.hidden=!e,c.disabled=!e||r||!!gs||!!i||!n.workflow.committedTurns||!!n.workflow?.branchFrom&&n.workflow.committedTurns-1<n.workflow.branchFrom.turn);const l=document.querySelector("#workflow-save-draft");l&&(l.hidden=!e,l.disabled=r||s||!Si()||!!gs||!Yc);const d=document.querySelector("#workflow-snapshot");d&&(d.hidden=!e,d.disabled=r||!!gs||!n?.workflow?.committedTurns||typeof ba>"u"||!ba);const u=document.querySelector("#editor-save-as-controls");u&&(u.hidden=!!e||s);for(const m of["map","task"]){const _=document.querySelector(`#${m}-editor-save-as`);_&&(_.hidden=!!e||(m==="map"?!n?.mapEditRef:!!n?.mapEditRef),_.disabled=r||s)}const h=document.querySelector("#editor-save-as-name");h&&(h.disabled=r||s,n&&Of!==n.id&&(Of=n.id,h.value=`${n.name.replace(/ 制作副本$/,"").slice(0,123)} COPY`));const f=document.querySelector("#workflow-state");f&&(f.textContent=Na||(s?"已结束":e?Si()?`第 ${Ne+1} 回合 · 草稿`:`第 ${Ne+1} 回合 · 只读 · 已提交 ${n.workflow.committedTurns} 回合`:n?.mapEditRef?`地图制作 · r${n.mapEditRef.revision}`:"场景制作"));for(const m of["begin","advance","commit","discard"]){const _=document.querySelector(`#workflow-${m}`);_&&(_.hidden=!e,m==="discard"&&(_.textContent=n?.workflow?.committedTurns===0?"重置第一回合草稿…":"丢弃草稿…"),_.disabled=!e||s||r||!!gs||(m==="begin"?!!i:!Si()))}}function ou(n,e){if(typeof Ct<"u"&&Ct)return;if(!ve||nn||Xt()){Qt("请先结束当前放置、拖动或笔刷操作");return}if(e&&(e.revision!==ve.revision||e.sessionId!==wt()?.id||e.turn!==Ne)){Ea(),Qt("会话或回合已变化，请重新选择操作"),bi();return}if(!en())return;const t=ve.read(),i=t.editor.sessionId??"session-working",r=t.project.sessions.find(s=>s.id===i);if(!r?.workflow||(n==="reopen"?r.turns.length!==r.workflow.committedTurns||!r.workflow.committedTurns:r.status==="finished"||n!=="begin"&&!Si()||n==="begin"&&r.turns.length!==r.workflow.committedTurns)){Qt("当前状态不适用此操作，请刷新回合状态"),bi();return}nn=!0,Na="",Ea(),bi();try{if(n==="reopen"){ve.reopenLastCommittedTurn(i,ve.revision),Yi(),In(!0),Qt("最近回合已恢复为草稿");return}const o={begin:Jm,advance:Km,commit:Zm,discard:jm}[n](t.project,i),a=o.sessions.find(d=>d.id===i),c={project:o,editor:{...t.editor,currentTurn:a.turns.length-1}},l={begin:"开始回合草稿",advance:"按航路推进草稿",commit:"提交回合",discard:"丢弃回合草稿"};ve.commit(c,l[n],t),Yi(),(n==="begin"||n==="advance"||n==="discard"&&a.workflow?.committedTurns===0)&&In(!0)}catch(s){Qt(s instanceof Error?s.message:String(s))}finally{nn=!1,nt()}}function Zb(n){if(Ct)return;if(n!=="commit"&&n!=="discard"&&n!=="reopen"){ou(n);return}if(!ve||Xt()||nn||(n==="reopen"?!yn()||wt().turns.length!==wt().workflow.committedTurns||!wt().workflow.committedTurns:!Si())||!en())return;const e=n==="reopen"?"取消最近回合提交？":n==="commit"?"提交当前回合？":wt()?.workflow?.committedTurns===0?"重置第一回合草稿？":"丢弃当前草稿？",t={action:n,revision:ve.revision,sessionId:wt().id,turn:Ne},i=document.querySelector("#workflow-confirm");if(!i){window.confirm(e)&&ou(n,t);return}gs=t,i.hidden=!1;const r=document.querySelector("#workflow-confirm-text");r&&(r.textContent=e),bi()}for(const n of["begin","advance","commit","discard","reopen"])document.querySelector(`#workflow-${n}`)?.addEventListener("click",()=>Zb(n));document.querySelector("#workflow-confirm-yes")?.addEventListener("click",()=>{const n=gs;n&&ou(n.action,n)});document.querySelector("#workflow-confirm-cancel")?.addEventListener("click",()=>{Ea(),bi()});document.querySelector("#canvas-resize")?.addEventListener("click",()=>{if(!ve||!ct()||Xt())return;const n=Number(dt("#canvas-width").value),e=Number(dt("#canvas-height").value),t=Number(dt("#canvas-samples").value);if(en())try{const i=ve.read(),r=i.project.sessions.find(a=>a.id===i.editor.sessionId),s=Xm(i.project,r.mapRef,n,e,t),o=s.maps.at(-1);s.sessions.find(a=>a.id===r.id).mapRef={id:o.id,revision:o.revision},ve.commit({...i,project:s},"调整画布尺寸",i),Yi(),In(!0),Ii(!0),Qt(`画布 ${n} × ${e} km`)}catch(i){Qt(i instanceof Error?i.message:String(i))}});document.querySelector("#task-editor-save")?.addEventListener("click",()=>{if(!(Ct||!ve||Xt()||yn()||wt()?.mapEditRef)&&en())try{const n=ve.read(),e=wt(),t=n.project.tasks.find(s=>s.id===e.taskRef.id&&s.revision===e.taskRef.revision),i=qm(n.project,e.id,t?.name??e.name.replace(/ 制作副本$/,""),`map-${crypto.randomUUID()}`);ve.commit({...n,project:i},"保存任务新修订",n),Yi(),In(!0);const r=i.sessions.find(s=>s.id===e.id).taskRef;Qt(`任务已保存 · r${r.revision}`)}catch(n){Qt(n instanceof Error?n.message:String(n))}});document.querySelector("#map-editor-save")?.addEventListener("click",()=>{if(Ct||!ve||Xt()||nn||!wt()?.mapEditRef||!en())return;const n=ve.read(),e=wt().id;try{const t=Ym(n.project,e),i=t.sessions.find(s=>s.id===e).mapEditRef,r=ve.commit({...n,project:t},"保存地图新修订",n);Yi(),Ii(!0),Qt(r?`地图已保存 · r${i.revision}`:`无修改 · r${i.revision}`),bi()}catch(t){Qt(t instanceof Error?t.message:String(t))}});document.querySelector("#workflow-save-draft")?.addEventListener("click",async()=>{if(!ve||Xt()||nn||!Si()||!Yc||!en())return;const n=document.querySelector("#workflow-save-draft");n.disabled=!0;try{Qt(await Yc()?"草稿已保存":"草稿保存失败")}catch(e){Qt(e instanceof Error?e.message:String(e))}finally{bi()}});document.querySelector("#workflow-snapshot")?.addEventListener("click",async()=>{if(!(Ct||!ve||Xt()||nn||!wt()?.workflow?.committedTurns||!ba)&&en()){nn=!0,bi();try{await ba(),Qt("回合快照已发送到管理器快照仓库")}catch(n){Qt(n instanceof Error?n.message:String(n))}finally{nn=!1,bi(),nt()}}});for(const n of["map","task"])document.querySelector(`#${n}-editor-save-as`)?.addEventListener("click",()=>{if(Ct||!ve||Xt()||nn||yn()||!!wt()?.mapEditRef!=(n==="map")||!en())return;const e=document.querySelector("#editor-save-as-name").value.trim();if(!e){Qt("请填写副本名称");return}try{const t=ve.read(),i=wt(),r=`map-${crypto.randomUUID()}`,s=n==="map"?pb(t.project,i.id,r,e):mb(t.project,i.id,{mapId:r,taskId:`task-${crypto.randomUUID()}`},e);ve.commit({...t,project:s.project},n==="map"?"另存为新地图":"另存为新任务",t),Yi(),In(!0),n==="map"&&Ii(!0),Qt(`${n==="map"?"地图":"任务"}已另存为「${e}」r1`)}catch(t){Qt(t instanceof Error?t.message:String(t))}});function Xu(n){if(n!==Ct){if(Xt()||nn||!en())throw new Error("请先完成当前编辑操作");if(n){const e=ve.read(),t=km(e),i=Vf(e),r=new cu(i);Cc={edit:ke,terrain:kt},go(),ut.clear(),fe=null,Rc=ve,va=e,Qc=t,ys.clear(),ys.set(i.editor.currentTurn,r),Ct=!0,ve=r}else go(),ut.clear(),fe=null,ve=Rc,Ct=!1,Rc=null,va=null,typeof xa<"u"&&(xa=null),ys.clear(),ke=Cc.edit,kt=Cc.terrain;kr=null,Wc="",ta="",qi(ve.read()),document.querySelector("#app").dataset.playerView=String(Ct),document.querySelector("#player-viewer-open").hidden=Ct,document.querySelector("#player-viewer-exit").hidden=!Ct,ht(),nt()}}function Kb(n){const e=Nm(n);if(Xt()||nn||!en())throw new Error("请先完成当前编辑操作");Ct&&Xu(!1);const t=ve.read();Cc={edit:ke,terrain:kt},go(),ut.clear(),fe=null,Rc=ve,va=t,xa=e,Qc=e.turns.length-1;const i=new cu(e.turns[0]);ys.clear(),ys.set(0,i),ve=i,Ct=!0,kr=null,Wc="",ta="",qi(i.read()),document.querySelector("#app").dataset.playerView="true",document.querySelector("#player-viewer-open").hidden=!0,document.querySelector("#player-viewer-exit").hidden=!1,ht(),nt()}function Jb(n){if(!va||Xt()||nn)return;const e=Math.max(0,Math.min(n,Qc));if(e===Ne||!en())return;const t=ke,i=typeof xa<"u"?xa:null,r=ys.get(e)??new cu(i?i.turns[e]:Vf(va,e));ys.set(e,r),go(),ut.clear(),fe=null,ve=r,kr=null,qi(r.read()),ke=t,ht(),nt()}function Qb(){if(!Ct||Xt()||nn||!en())return;const n=ve.read(),e=n.project.sessions.find(s=>s.id===n.editor.sessionId);e.routes=[{id:"player-viewer-route",name:"Viewer",waypoints:[]}],n.editor.activeRouteId="player-viewer-route";const t=Qm(eg(n,n.editor.sessionId)),i=URL.createObjectURL(new Blob([t],{type:"application/json"})),r=document.createElement("a");r.href=i,r.download=`player-view-turn-${Ne+1}.json`,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function go(){xt?.cancel(),xt?.clearSelection(),Ci=null,typeof tn<"u"&&tn?.cancel(),ke=kt=Ht=An=Ft=sn=!1,tt=null,et=null,Pi=null,Ni=!1,mr=null,Tn=null,ya=null,Ma.clear(),Ue.detach(),Di.visible=!1,Pt&&_t.domElement.hasPointerCapture(Pt.pointerId)&&_t.domElement.releasePointerCapture(Pt.pointerId),Pt=null,pi(!0),Lt.enabled=!0,_t.domElement.style.cursor="",Ea(),Na=""}function Yi(){kr=null,go();const n=[...ut];qi(ve.read()),ut.clear(),n.filter(t=>st.some(i=>i.id===t)).forEach(t=>ut.add(t)),fe=Ei().at(-1)??null;const e=(t,i,r)=>Math.max(r,...t.filter(s=>s.startsWith(i)).map(s=>Number(s.slice(i.length))+1).filter(Number.isSafeInteger));Hr=e(st.map(t=>t.id),"unit-",Hr),ma=e(mn.map(t=>t.id),"route-",ma),Vc=e(mn.flatMap(t=>t.waypoints.map(i=>i.id)),"wp-",Vc),Gc=e(st.flatMap(t=>(t.trackPoints??[]).map(i=>i.id)),"control-",Gc),zc=e(st.flatMap(t=>t.routeBinding?.formationId?[t.routeBinding.formationId]:[]),"formation-",zc),ht(),nt()}let zf=!1;function tE(n,e){if(zf)throw new Error("Workspace already mounted");zf=!0,ve=n,Yc=e?.saveDraft,ba=e?.generateSnapshot,Dn=nb({fitMap:Vu,topView:Db,toggleEdit:()=>In(!ke),viewerExport:Qb,viewerUndo:tl,viewerRedo:nl,chooseTool:t=>{Ue.dragging||Pt||ai||(xt?.cancel(),t!=="links"&&t!=="markers"&&tn?.cancel(),["markers","drawing"].includes(t)||xt?.clearSelection(),et&&t!=="units"&&Vr(),t==="terrain"&&ct()?(In(!0),Ii(!0)):kt&&(wt()?.mapEditRef?(kt=!1,Di.visible=!1):Ii(!1)),["routes"].includes(t)||(Ht=Ft=An=!1,tt=null),(["markers","drawing","links"].includes(t)?ci():ct())&&["groups","markers","drawing","routes","units","equipment","links"].includes(t)&&!ke&&In(!0),t!=="range"&&rn&&ii(),ht(),nt())}}),Ir=document.createElement("aside"),Ir.id="player-roster-panel",Ir.hidden=!0,Ir.setAttribute("aria-label","玩家资料卡"),document.querySelector("#app").append(Ir),document.querySelector("#app").classList.add("player-roster-mounted"),iu=sb(Ir,{readRevision:()=>ve.revision,read:()=>ve.read().project,busy:()=>nn||Xt(),report:Qt,beginCreate:kb,armPlacement:Fb,cancelPlacement:Vr,selectUnit:(t,i)=>{if(nn||Xt())return;const r=st.find(s=>s.id===t);r&&(On([r]),i&&Nf([t]))},recordAction:zb}),am=ib(Dn.panels.groups,{read:Ui,units:()=>st,selectedIds:()=>[...ut],editable:()=>ct()&&ke&&!wt()?.mapEditRef,change:od,select:t=>On(st.filter(i=>t.includes(i.id))),copy:Eb,focus:Nf}),xt=hb({markersPanel:Dn.panels.markers,drawingsPanel:Dn.panels.drawing,world:dn,labelRoot:Fu,read:Ui,change:(t,i)=>od(t,r=>i(r)),editable:()=>ci()&&ke,focus:Ou,sampleHeightKm:(t,i)=>Bt(t*it,i*it)/it,onMarkerPick:t=>tn?.pick("marker",t)??!1,onTransformMode:t=>{ro=t,so()},onOpenPanel:t=>{document.querySelector("#edit-panel").dataset.activeTab!==t&&Dn?.select(t)},onSelectionChange:t=>{t&&(ro="translate",ii(),tt=null,Ht=Ft=An=sn=!1,ut.clear(),fe=null,il(),ht(),nt()),so()},onPickingChange:t=>{document.querySelector("#app").dataset.mapPicking=String(t),t&&(ii(),pi(!0),sn=!1,Ht=Ft=An=kt=!1,tt=null,Di.visible=!1,Ue.detach()),Lt.enabled=Gr,_t.domElement.style.cursor=t?"crosshair":"",bi()}}),tn=ab({panel:Dn.panels.links,world:dn,read:Ui,readUnits:()=>st.map(t=>{const i=Un(t),r=t.intangible?i.y:Math.max(i.y,Bt(i.x,i.z)+qn);return{id:t.id,label:t.label,position:{x:i.x/it,y:r/it,z:i.z/it}}}),selectedUnitId:()=>fe?.id,editable:()=>ci()&&ke&&!wt()?.mapEditRef,busy:()=>nn||Xt(),change:(t,i)=>od(t,r=>i(r)),onModeChange:t=>{t&&(xt?.cancel(),xt?.clearSelection(),ii(),pi(!0),sn=Ht=Ft=An=!1,tt=null,Ue.detach()),_t.domElement.style.cursor=t?"crosshair":"",so()}}),document.querySelector("#route-select-bound").addEventListener("click",()=>On(st.filter(t=>t.routeBinding?.routeId===En))),document.querySelector("#route-bind-group").addEventListener("click",()=>{const t=document.querySelector("#route-group-select").value;Mm(st.filter(i=>i.groupId===t&&Aa(i)))});for(const t of["#route-visible","#route-labels"])document.querySelector(t).addEventListener("change",ht);return _t.domElement.addEventListener("pointerdown",t=>{if(!xt?.isPicking()||t.button!==0||t.altKey)return;t.stopImmediatePropagation(),t.preventDefault();const i=mo(t);i&&xt.pick({x:i.x/it,y:i.y/it,z:i.z/it})},!0),_t.domElement.addEventListener("pointermove",t=>{if(!xt?.isPicking())return;const i=mo(t);xt.preview(i?{x:i.x/it,y:i.y/it,z:i.z/it}:null)}),Yi(),Pa(),In(!1),ht(),Am(),{flush:()=>{if(!en())throw new Error("当前编辑尚未保存")},open:jb,sync:Yi,busy:()=>nn||Xt(),selectedUnitId:()=>fe?.id,editTerrain:()=>{ct()&&(In(!0),Ii(!0))},editScenario:()=>{ct()&&(In(!0),Ii(!1))},playerView:Xu,snapshot:Kb,activate:t=>{Gr=t,Lt.enabled=t,Dn?.sync({editing:ke,editable:ci(),mapOnly:!!wt()?.mapEditRef,active:t,playerView:Ct,viewerCanUndo:!!ve?.canUndo,viewerCanRedo:!!ve?.canRedo}),t?(ht(),nt()):(xt?.cancel(),tn?.cancel(),ii(),Ue.detach(),_m())}}}export{tE as mountWorkspace};
