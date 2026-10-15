import{U as Sl,W as Ke,G as A0,R as Mf,p as R0,v as C0,w as P0,d as Rh,c as Cm,a as D0,b as I0,H as Pm,e as L0,P as Ch,f as N0,g as Dm,n as Jn,m as Ph,h as Dh,i as Im,r as Ih,j as U0,k as k0,l as F0,o as O0,q as z0,s as Lm,t as Nm,u as za,x as B0,y as H0,z as V0,A as G0,B as wf,C as Ef,D as Um,E as W0,F as X0,I as q0,J as km,K as Fm,L as $0,M as Y0,N as j0,O as Z0,Q as K0,S as J0,T as Q0}from"./index-4l1ZPswb.js";const Lh="179",Uo={ROTATE:0,DOLLY:1,PAN:2},Po={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ev=0,Tf=1,tv=2,Om=1,nv=2,Nr=3,zr=0,Ci=1,pn=2,ss=0,ko=1,Ru=2,Af=3,Rf=4,iv=5,Cs=100,rv=101,sv=102,ov=103,av=104,lv=200,cv=201,dv=202,uv=203,Cu=204,Pu=205,hv=206,fv=207,pv=208,mv=209,gv=210,vv=211,_v=212,xv=213,yv=214,Du=0,Iu=1,Lu=2,Xo=3,Nu=4,Uu=5,ku=6,Fu=7,zm=0,bv=1,Sv=2,os=0,Mv=1,wv=2,Ev=3,Tv=4,Av=5,Rv=6,Cv=7,Bm=300,qo=301,$o=302,Ou=303,zu=304,sd=306,Bu=1e3,Ls=1001,Hu=1002,Xi=1003,Pv=1004,Nl=1005,wr=1006,bd=1007,Ns=1008,Ar=1009,Hm=1010,Vm=1011,Za=1012,Nh=1013,Ws=1014,Er=1015,Ml=1016,Uh=1017,kh=1018,Ka=1020,Gm=35902,Wm=1021,Xm=1022,fr=1023,Ja=1026,Qa=1027,Fh=1028,Oh=1029,qm=1030,zh=1031,Bh=1033,bc=33776,Sc=33777,Mc=33778,wc=33779,Vu=35840,Gu=35841,Wu=35842,Xu=35843,qu=36196,$u=37492,Yu=37496,ju=37808,Zu=37809,Ku=37810,Ju=37811,Qu=37812,eh=37813,th=37814,nh=37815,ih=37816,rh=37817,sh=37818,oh=37819,ah=37820,lh=37821,Ec=36492,ch=36494,dh=36495,$m=36283,uh=36284,hh=36285,fh=36286,Dv=3200,Iv=3201,Lv=0,Nv=1,ns="",yi="srgb",Yo="srgb-linear",kc="linear",tn="srgb",ho=7680,Cf=519,Uv=512,kv=513,Fv=514,Ym=515,Ov=516,zv=517,Bv=518,Hv=519,Pf=35044,Fc=35048,Df="300 es",Tr=2e3,Oc=2001;class to{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let If=1234567;const Ba=Math.PI/180,el=180/Math.PI;function no(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ri[n&255]+ri[n>>8&255]+ri[n>>16&255]+ri[n>>24&255]+"-"+ri[e&255]+ri[e>>8&255]+"-"+ri[e>>16&15|64]+ri[e>>24&255]+"-"+ri[t&63|128]+ri[t>>8&255]+"-"+ri[t>>16&255]+ri[t>>24&255]+ri[i&255]+ri[i>>8&255]+ri[i>>16&255]+ri[i>>24&255]).toLowerCase()}function Pt(n,e,t){return Math.max(e,Math.min(t,n))}function Hh(n,e){return(n%e+e)%e}function Vv(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Gv(n,e,t){return n!==e?(t-n)/(e-n):0}function Ha(n,e,t){return(1-t)*n+t*e}function Wv(n,e,t,i){return Ha(n,e,1-Math.exp(-t*i))}function Xv(n,e=1){return e-Math.abs(Hh(n,e*2)-e)}function qv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $v(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Yv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function jv(n,e){return n+Math.random()*(e-n)}function Zv(n){return n*(.5-Math.random())}function Kv(n){n!==void 0&&(If=n);let e=If+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jv(n){return n*Ba}function Qv(n){return n*el}function e_(n){return(n&n-1)===0&&n!==0}function t_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function n_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function i_(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),d=o((e+i)/2),u=s((e-i)/2),h=o((e-i)/2),f=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*d,l*u,l*h,a*c);break;case"YZY":n.set(l*h,a*d,l*u,a*c);break;case"ZXZ":n.set(l*u,l*h,a*d,a*c);break;case"XZX":n.set(a*d,l*m,l*f,a*c);break;case"YXY":n.set(l*f,a*d,l*m,a*c);break;case"ZYZ":n.set(l*m,l*f,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ao(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function vi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Qt={DEG2RAD:Ba,RAD2DEG:el,generateUUID:no,clamp:Pt,euclideanModulo:Hh,mapLinear:Vv,inverseLerp:Gv,lerp:Ha,damp:Wv,pingpong:Xv,smoothstep:qv,smootherstep:$v,randInt:Yv,randFloat:jv,randFloatSpread:Zv,seededRandom:Kv,degToRad:Jv,radToDeg:Qv,isPowerOfTwo:e_,ceilPowerOfTwo:t_,floorPowerOfTwo:n_,setQuaternionFromProperEuler:i_,normalize:vi,denormalize:Ao};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],u=i[r+3];const h=s[o+0],f=s[o+1],m=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(u!==v||l!==h||c!==f||d!==m){let g=1-a;const p=l*h+c*f+d*m+u*v,w=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const I=Math.sqrt(_),D=Math.atan2(I,p*w);g=Math.sin(g*D)/I,a=Math.sin(a*D)/I}const x=a*w;if(l=l*g+h*x,c=c*g+f*x,d=d*g+m*x,u=u*g+v*x,g===1-a){const I=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=I,c*=I,d*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],u=s[o],h=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+d*u+l*f-c*h,e[t+1]=l*m+d*h+c*u-a*f,e[t+2]=c*m+d*f+a*h-l*u,e[t+3]=d*m-a*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),u=a(s/2),h=l(i/2),f=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=h*d*u+c*f*m,this._y=c*f*u-h*d*m,this._z=c*d*m+h*f*u,this._w=c*d*u-h*f*m;break;case"YXZ":this._x=h*d*u+c*f*m,this._y=c*f*u-h*d*m,this._z=c*d*m-h*f*u,this._w=c*d*u+h*f*m;break;case"ZXY":this._x=h*d*u-c*f*m,this._y=c*f*u+h*d*m,this._z=c*d*m+h*f*u,this._w=c*d*u-h*f*m;break;case"ZYX":this._x=h*d*u-c*f*m,this._y=c*f*u+h*d*m,this._z=c*d*m-h*f*u,this._w=c*d*u+h*f*m;break;case"YZX":this._x=h*d*u+c*f*m,this._y=c*f*u+h*d*m,this._z=c*d*m-h*f*u,this._w=c*d*u-h*f*m;break;case"XZY":this._x=h*d*u-c*f*m,this._y=c*f*u-h*d*m,this._z=c*d*m+h*f*u,this._w=c*d*u+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=i+a+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(d-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=o*u+this._w*h,this._x=i*u+this._x*h,this._y=r*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,i=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+l*c+o*u-a*d,this.y=i+l*d+a*c-s*u,this.z=r+l*u+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sd.copy(this).projectOnVector(e),this.sub(Sd)}reflect(e){return this.sub(Sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sd=new b,Lf=new rn;class At{constructor(e,t,i,r,s,o,a,l,c){At.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],u=i[7],h=i[2],f=i[5],m=i[8],v=r[0],g=r[3],p=r[6],w=r[1],_=r[4],x=r[7],I=r[2],D=r[5],R=r[8];return s[0]=o*v+a*w+l*I,s[3]=o*g+a*_+l*D,s[6]=o*p+a*x+l*R,s[1]=c*v+d*w+u*I,s[4]=c*g+d*_+u*D,s[7]=c*p+d*x+u*R,s[2]=h*v+f*w+m*I,s[5]=h*g+f*_+m*D,s[8]=h*p+f*x+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,h=a*l-d*s,f=c*s-o*l,m=t*u+i*h+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(r*c-d*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(d*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Md.makeScale(e,t)),this}rotate(e){return this.premultiply(Md.makeRotation(-e)),this}translate(e,t){return this.premultiply(Md.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Md=new At;function jm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function r_(){const n=zc("canvas");return n.style.display="block",n}const Nf={};function Fo(n){n in Nf||(Nf[n]=!0,console.warn(n))}function s_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Uf=new At().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kf=new At().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function o_(){const n={enabled:!0,workingColorSpace:Yo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===tn&&(r.r=Fr(r.r),r.g=Fr(r.g),r.b=Fr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tn&&(r.r=Oo(r.r),r.g=Oo(r.g),r.b=Oo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ns?kc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Fo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Fo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Yo]:{primaries:e,whitePoint:i,transfer:kc,toXYZ:Uf,fromXYZ:kf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:e,whitePoint:i,transfer:tn,toXYZ:Uf,fromXYZ:kf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),n}const $t=o_();function Fr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Oo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fo;class a_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fo===void 0&&(fo=zc("canvas")),fo.width=e.width,fo.height=e.height;const r=fo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=fo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fr(t[i]/255)*255):t[i]=Fr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let l_=0;class Vh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=no(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wd(r[o].image)):s.push(wd(r[o]))}else s=wd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function wd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?a_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let c_=0;const Ed=new b;class Si extends to{constructor(e=Si.DEFAULT_IMAGE,t=Si.DEFAULT_MAPPING,i=Ls,r=Ls,s=wr,o=Ns,a=fr,l=Ar,c=Si.DEFAULT_ANISOTROPY,d=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=no(),this.name="",this.source=new Vh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ed).x}get height(){return this.source.getSize(Ed).y}get depth(){return this.source.getSize(Ed).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bu:e.x=e.x-Math.floor(e.x);break;case Ls:e.x=e.x<0?0:1;break;case Hu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bu:e.y=e.y-Math.floor(e.y);break;case Ls:e.y=e.y<0?0:1;break;case Hu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Si.DEFAULT_IMAGE=null;Si.DEFAULT_MAPPING=Bm;Si.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,i=0,r=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(f+1)/2,I=(p+1)/2,D=(d+h)/4,R=(u+v)/4,N=(m+g)/4;return _>x&&_>I?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=D/i,s=R/i):x>I?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=D/r,s=N/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=R/s,r=N/s),this.set(i,r,s,t),this}let w=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(u-v)/w,this.z=(h-d)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class d_ extends to{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Si(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:wr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Vh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xs extends d_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Zm extends Si{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xi,this.minFilter=Xi,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u_ extends Si{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xi,this.minFilter=Xi,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(or.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(or.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=or.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,or):or.fromBufferAttribute(s,o),or.applyMatrix4(e.matrixWorld),this.expandByPoint(or);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ul.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ul.copy(i.boundingBox)),Ul.applyMatrix4(e.matrixWorld),this.union(Ul)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,or),or.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),kl.subVectors(this.max,va),po.subVectors(e.a,va),mo.subVectors(e.b,va),go.subVectors(e.c,va),Xr.subVectors(mo,po),qr.subVectors(go,mo),_s.subVectors(po,go);let t=[0,-Xr.z,Xr.y,0,-qr.z,qr.y,0,-_s.z,_s.y,Xr.z,0,-Xr.x,qr.z,0,-qr.x,_s.z,0,-_s.x,-Xr.y,Xr.x,0,-qr.y,qr.x,0,-_s.y,_s.x,0];return!Td(t,po,mo,go,kl)||(t=[1,0,0,0,1,0,0,0,1],!Td(t,po,mo,go,kl))?!1:(Fl.crossVectors(Xr,qr),t=[Fl.x,Fl.y,Fl.z],Td(t,po,mo,go,kl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,or).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(or).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cr=[new b,new b,new b,new b,new b,new b,new b,new b],or=new b,Ul=new hs,po=new b,mo=new b,go=new b,Xr=new b,qr=new b,_s=new b,va=new b,kl=new b,Fl=new b,xs=new b;function Td(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){xs.fromArray(n,s);const a=r.x*Math.abs(xs.x)+r.y*Math.abs(xs.y)+r.z*Math.abs(xs.z),l=e.dot(xs),c=t.dot(xs),d=i.dot(xs);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const h_=new hs,_a=new b,Ad=new b;class fs{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):h_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const t=_a.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_a,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(Ad)),this.expandByPoint(_a.copy(e.center).sub(Ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pr=new b,Rd=new b,Ol=new b,$r=new b,Cd=new b,zl=new b,Pd=new b;class wl{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pr.copy(this.origin).addScaledVector(this.direction,t),Pr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Rd.copy(e).add(t).multiplyScalar(.5),Ol.copy(t).sub(e).normalize(),$r.copy(this.origin).sub(Rd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ol),a=$r.dot(this.direction),l=-$r.dot(Ol),c=$r.lengthSq(),d=Math.abs(1-o*o);let u,h,f,m;if(d>0)if(u=o*l-a,h=o*a-l,m=s*d,u>=0)if(h>=-m)if(h<=m){const v=1/d;u*=v,h*=v,f=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h<=-m?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c):h<=m?(u=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Rd).addScaledVector(Ol,h),f}intersectSphere(e,t){Pr.subVectors(e.center,this.origin);const i=Pr.dot(this.direction),r=Pr.dot(Pr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pr)!==null}intersectTriangle(e,t,i,r,s){Cd.subVectors(t,e),zl.subVectors(i,e),Pd.crossVectors(Cd,zl);let o=this.direction.dot(Pd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$r.subVectors(this.origin,e);const l=a*this.direction.dot(zl.crossVectors($r,zl));if(l<0)return null;const c=a*this.direction.dot(Cd.cross($r));if(c<0||l+c>o)return null;const d=-a*$r.dot(Pd);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,i,r,s,o,a,l,c,d,u,h,f,m,v,g){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,d,u,h,f,m,v,g)}set(e,t,i,r,s,o,a,l,c,d,u,h,f,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/vo.setFromMatrixColumn(e,0).length(),s=1/vo.setFromMatrixColumn(e,1).length(),o=1/vo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=o*d,f=o*u,m=a*d,v=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*d,f=l*u,m=c*d,v=c*u;t[0]=h+v*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=f*a-m,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*d,f=l*u,m=c*d,v=c*u;t[0]=h-v*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*d,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*d,f=o*u,m=a*d,v=a*u;t[0]=l*d,t[4]=m*c-f,t[8]=h*c+v,t[1]=l*u,t[5]=v*c+h,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*d,t[4]=v-h*u,t[8]=m*u+f,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*u+m,t[10]=h-v*u}else if(e.order==="XZY"){const h=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+v,t[5]=o*d,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*d,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f_,e,p_)}lookAt(e,t,i){const r=this.elements;return Fi.subVectors(e,t),Fi.lengthSq()===0&&(Fi.z=1),Fi.normalize(),Yr.crossVectors(i,Fi),Yr.lengthSq()===0&&(Math.abs(i.z)===1?Fi.x+=1e-4:Fi.z+=1e-4,Fi.normalize(),Yr.crossVectors(i,Fi)),Yr.normalize(),Bl.crossVectors(Fi,Yr),r[0]=Yr.x,r[4]=Bl.x,r[8]=Fi.x,r[1]=Yr.y,r[5]=Bl.y,r[9]=Fi.y,r[2]=Yr.z,r[6]=Bl.z,r[10]=Fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],u=i[5],h=i[9],f=i[13],m=i[2],v=i[6],g=i[10],p=i[14],w=i[3],_=i[7],x=i[11],I=i[15],D=r[0],R=r[4],N=r[8],S=r[12],M=r[1],L=r[5],F=r[9],k=r[13],W=r[2],q=r[6],j=r[10],re=r[14],X=r[3],me=r[7],Te=r[11],Be=r[15];return s[0]=o*D+a*M+l*W+c*X,s[4]=o*R+a*L+l*q+c*me,s[8]=o*N+a*F+l*j+c*Te,s[12]=o*S+a*k+l*re+c*Be,s[1]=d*D+u*M+h*W+f*X,s[5]=d*R+u*L+h*q+f*me,s[9]=d*N+u*F+h*j+f*Te,s[13]=d*S+u*k+h*re+f*Be,s[2]=m*D+v*M+g*W+p*X,s[6]=m*R+v*L+g*q+p*me,s[10]=m*N+v*F+g*j+p*Te,s[14]=m*S+v*k+g*re+p*Be,s[3]=w*D+_*M+x*W+I*X,s[7]=w*R+_*L+x*q+I*me,s[11]=w*N+_*F+x*j+I*Te,s[15]=w*S+_*k+x*re+I*Be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+s*l*u-r*c*u-s*a*h+i*c*h+r*a*f-i*l*f)+v*(+t*l*f-t*c*h+s*o*h-r*o*f+r*c*d-s*l*d)+g*(+t*c*u-t*a*f-s*o*u+i*o*f+s*a*d-i*c*d)+p*(-r*a*d-t*l*u+t*a*h+r*o*u-i*o*h+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],w=u*g*c-v*h*c+v*l*f-a*g*f-u*l*p+a*h*p,_=m*h*c-d*g*c-m*l*f+o*g*f+d*l*p-o*h*p,x=d*v*c-m*u*c+m*a*f-o*v*f-d*a*p+o*u*p,I=m*u*l-d*v*l-m*a*h+o*v*h+d*a*g-o*u*g,D=t*w+i*_+r*x+s*I;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/D;return e[0]=w*R,e[1]=(v*h*s-u*g*s-v*r*f+i*g*f+u*r*p-i*h*p)*R,e[2]=(a*g*s-v*l*s+v*r*c-i*g*c-a*r*p+i*l*p)*R,e[3]=(u*l*s-a*h*s-u*r*c+i*h*c+a*r*f-i*l*f)*R,e[4]=_*R,e[5]=(d*g*s-m*h*s+m*r*f-t*g*f-d*r*p+t*h*p)*R,e[6]=(m*l*s-o*g*s-m*r*c+t*g*c+o*r*p-t*l*p)*R,e[7]=(o*h*s-d*l*s+d*r*c-t*h*c-o*r*f+t*l*f)*R,e[8]=x*R,e[9]=(m*u*s-d*v*s-m*i*f+t*v*f+d*i*p-t*u*p)*R,e[10]=(o*v*s-m*a*s+m*i*c-t*v*c-o*i*p+t*a*p)*R,e[11]=(d*a*s-o*u*s-d*i*c+t*u*c+o*i*f-t*a*f)*R,e[12]=I*R,e[13]=(d*v*r-m*u*r+m*i*h-t*v*h-d*i*g+t*u*g)*R,e[14]=(m*a*r-o*v*r-m*i*l+t*v*l+o*i*g-t*a*g)*R,e[15]=(o*u*r-d*a*r+d*i*l-t*u*l-o*i*h+t*a*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,u=a+a,h=s*c,f=s*d,m=s*u,v=o*d,g=o*u,p=a*u,w=l*c,_=l*d,x=l*u,I=i.x,D=i.y,R=i.z;return r[0]=(1-(v+p))*I,r[1]=(f+x)*I,r[2]=(m-_)*I,r[3]=0,r[4]=(f-x)*D,r[5]=(1-(h+p))*D,r[6]=(g+w)*D,r[7]=0,r[8]=(m+_)*R,r[9]=(g-w)*R,r[10]=(1-(h+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=vo.set(r[0],r[1],r[2]).length();const o=vo.set(r[4],r[5],r[6]).length(),a=vo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ar.copy(this);const c=1/s,d=1/o,u=1/a;return ar.elements[0]*=c,ar.elements[1]*=c,ar.elements[2]*=c,ar.elements[4]*=d,ar.elements[5]*=d,ar.elements[6]*=d,ar.elements[8]*=u,ar.elements[9]*=u,ar.elements[10]*=u,t.setFromRotationMatrix(ar),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Tr,l=!1){const c=this.elements,d=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let m,v;if(l)m=s/(o-s),v=o*s/(o-s);else if(a===Tr)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Oc)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Tr,l=!1){const c=this.elements,d=2/(t-e),u=2/(i-r),h=-(t+e)/(t-e),f=-(i+r)/(i-r);let m,v;if(l)m=1/(o-s),v=o/(o-s);else if(a===Tr)m=-2/(o-s),v=-(o+s)/(o-s);else if(a===Oc)m=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const vo=new b,ar=new zt,f_=new b(0,0,0),p_=new b(1,1,1),Yr=new b,Bl=new b,Fi=new b,Ff=new zt,Of=new rn;class En{constructor(e=0,t=0,i=0,r=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],u=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ff.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ff,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Of.setFromEuler(this),this.setFromQuaternion(Of,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class Gh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let m_=0;const zf=new b,_o=new rn,Dr=new zt,Hl=new b,xa=new b,g_=new b,v_=new rn,Bf=new b(1,0,0),Hf=new b(0,1,0),Vf=new b(0,0,1),Gf={type:"added"},__={type:"removed"},xo={type:"childadded",child:null},Dd={type:"childremoved",child:null};class Tn extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new b,t=new En,i=new rn,r=new b(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new zt},normalMatrix:{value:new At}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.multiply(_o),this}rotateOnWorldAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.premultiply(_o),this}rotateX(e){return this.rotateOnAxis(Bf,e)}rotateY(e){return this.rotateOnAxis(Hf,e)}rotateZ(e){return this.rotateOnAxis(Vf,e)}translateOnAxis(e,t){return zf.copy(e).applyQuaternion(this.quaternion),this.position.add(zf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bf,e)}translateY(e){return this.translateOnAxis(Hf,e)}translateZ(e){return this.translateOnAxis(Vf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hl.copy(e):Hl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dr.lookAt(xa,Hl,this.up):Dr.lookAt(Hl,xa,this.up),this.quaternion.setFromRotationMatrix(Dr),r&&(Dr.extractRotation(r.matrixWorld),_o.setFromRotationMatrix(Dr),this.quaternion.premultiply(_o.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gf),xo.child=e,this.dispatchEvent(xo),xo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(__),Dd.child=e,this.dispatchEvent(Dd),Dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gf),xo.child=e,this.dispatchEvent(xo),xo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,e,g_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,v_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tn.DEFAULT_UP=new b(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const lr=new b,Ir=new b,Id=new b,Lr=new b,yo=new b,bo=new b,Wf=new b,Ld=new b,Nd=new b,Ud=new b,kd=new Vt,Fd=new Vt,Od=new Vt;class hr{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),lr.subVectors(e,t),r.cross(lr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){lr.subVectors(r,t),Ir.subVectors(i,t),Id.subVectors(e,t);const o=lr.dot(lr),a=lr.dot(Ir),l=lr.dot(Id),c=Ir.dot(Ir),d=Ir.dot(Id),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const h=1/u,f=(c*l-a*d)*h,m=(o*d-a*l)*h;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Lr)===null?!1:Lr.x>=0&&Lr.y>=0&&Lr.x+Lr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Lr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Lr.x),l.addScaledVector(o,Lr.y),l.addScaledVector(a,Lr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return kd.setScalar(0),Fd.setScalar(0),Od.setScalar(0),kd.fromBufferAttribute(e,t),Fd.fromBufferAttribute(e,i),Od.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(kd,s.x),o.addScaledVector(Fd,s.y),o.addScaledVector(Od,s.z),o}static isFrontFacing(e,t,i,r){return lr.subVectors(i,t),Ir.subVectors(e,t),lr.cross(Ir).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return lr.subVectors(this.c,this.b),Ir.subVectors(this.a,this.b),lr.cross(Ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return hr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return hr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;yo.subVectors(r,i),bo.subVectors(s,i),Ld.subVectors(e,i);const l=yo.dot(Ld),c=bo.dot(Ld);if(l<=0&&c<=0)return t.copy(i);Nd.subVectors(e,r);const d=yo.dot(Nd),u=bo.dot(Nd);if(d>=0&&u<=d)return t.copy(r);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(yo,o);Ud.subVectors(e,s);const f=yo.dot(Ud),m=bo.dot(Ud);if(m>=0&&f<=m)return t.copy(s);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(bo,a);const g=d*m-f*u;if(g<=0&&u-d>=0&&f-m>=0)return Wf.subVectors(s,r),a=(u-d)/(u-d+(f-m)),t.copy(r).addScaledVector(Wf,a);const p=1/(g+v+h);return o=v*p,a=h*p,t.copy(i).addScaledVector(yo,o).addScaledVector(bo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jr={h:0,s:0,l:0},Vl={h:0,s:0,l:0};function zd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$t.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=$t.workingColorSpace){return this.r=e,this.g=t,this.b=i,$t.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=$t.workingColorSpace){if(e=Hh(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=zd(o,s,e+1/3),this.g=zd(o,s,e),this.b=zd(o,s,e-1/3)}return $t.colorSpaceToWorking(this,r),this}setStyle(e,t=yi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yi){const i=Km[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}copyLinearToSRGB(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return $t.workingToColorSpace(si.copy(this),e),Math.round(Pt(si.r*255,0,255))*65536+Math.round(Pt(si.g*255,0,255))*256+Math.round(Pt(si.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$t.workingColorSpace){$t.workingToColorSpace(si.copy(this),t);const i=si.r,r=si.g,s=si.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=$t.workingColorSpace){return $t.workingToColorSpace(si.copy(this),t),e.r=si.r,e.g=si.g,e.b=si.b,e}getStyle(e=yi){$t.workingToColorSpace(si.copy(this),e);const t=si.r,i=si.g,r=si.b;return e!==yi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(jr),this.setHSL(jr.h+e,jr.s+t,jr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jr),e.getHSL(Vl);const i=Ha(jr.h,Vl.h,t),r=Ha(jr.s,Vl.s,t),s=Ha(jr.l,Vl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const si=new Ot;Ot.NAMES=Km;let x_=0;class oa extends to{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=no(),this.name="",this.type="Material",this.blending=ko,this.side=zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cu,this.blendDst=Pu,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ko&&(i.blending=this.blending),this.side!==zr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cu&&(i.blendSrc=this.blendSrc),this.blendDst!==Pu&&(i.blendDst=this.blendDst),this.blendEquation!==Cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ho&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ho&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ho&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bn extends oa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=zm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nn=new b,Gl=new ze;let y_=0;class $n{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:y_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pf,this.updateRanges=[],this.gpuType=Er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gl.fromBufferAttribute(this,t),Gl.applyMatrix3(e),this.setXY(t,Gl.x,Gl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix3(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ao(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ao(t,this.array)),t}setX(e,t){return this.normalized&&(t=vi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ao(t,this.array)),t}setY(e,t){return this.normalized&&(t=vi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ao(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ao(t,this.array)),t}setW(e,t){return this.normalized&&(t=vi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vi(t,this.array),i=vi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=vi(t,this.array),i=vi(i,this.array),r=vi(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=vi(t,this.array),i=vi(i,this.array),r=vi(r,this.array),s=vi(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pf&&(e.usage=this.usage),e}}class Jm extends $n{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qm extends $n{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Lt extends $n{constructor(e,t,i){super(new Float32Array(e),t,i)}}let b_=0;const Ji=new zt,Bd=new Tn,So=new b,Oi=new hs,ya=new hs,Wn=new b;class Bt extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jm(e)?Qm:Jm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new At().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ji.makeRotationFromQuaternion(e),this.applyMatrix4(Ji),this}rotateX(e){return Ji.makeRotationX(e),this.applyMatrix4(Ji),this}rotateY(e){return Ji.makeRotationY(e),this.applyMatrix4(Ji),this}rotateZ(e){return Ji.makeRotationZ(e),this.applyMatrix4(Ji),this}translate(e,t,i){return Ji.makeTranslation(e,t,i),this.applyMatrix4(Ji),this}scale(e,t,i){return Ji.makeScale(e,t,i),this.applyMatrix4(Ji),this}lookAt(e){return Bd.lookAt(e),Bd.updateMatrix(),this.applyMatrix4(Bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(So).negate(),this.translate(So.x,So.y,So.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Lt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Oi.setFromBufferAttribute(s),this.morphTargetsRelative?(Wn.addVectors(this.boundingBox.min,Oi.min),this.boundingBox.expandByPoint(Wn),Wn.addVectors(this.boundingBox.max,Oi.max),this.boundingBox.expandByPoint(Wn)):(this.boundingBox.expandByPoint(Oi.min),this.boundingBox.expandByPoint(Oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const i=this.boundingSphere.center;if(Oi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ya.setFromBufferAttribute(a),this.morphTargetsRelative?(Wn.addVectors(Oi.min,ya.min),Oi.expandByPoint(Wn),Wn.addVectors(Oi.max,ya.max),Oi.expandByPoint(Wn)):(Oi.expandByPoint(ya.min),Oi.expandByPoint(ya.max))}Oi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Wn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Wn.fromBufferAttribute(a,c),l&&(So.fromBufferAttribute(e,c),Wn.add(So)),r=Math.max(r,i.distanceToSquared(Wn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new b,l[N]=new b;const c=new b,d=new b,u=new b,h=new ze,f=new ze,m=new ze,v=new b,g=new b;function p(N,S,M){c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),h.fromBufferAttribute(s,N),f.fromBufferAttribute(s,S),m.fromBufferAttribute(s,M),d.sub(c),u.sub(c),f.sub(h),m.sub(h);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(v.copy(d).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(d,-m.x).multiplyScalar(L),a[N].add(v),a[S].add(v),a[M].add(v),l[N].add(g),l[S].add(g),l[M].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,S=w.length;N<S;++N){const M=w[N],L=M.start,F=M.count;for(let k=L,W=L+F;k<W;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const _=new b,x=new b,I=new b,D=new b;function R(N){I.fromBufferAttribute(r,N),D.copy(I);const S=a[N];_.copy(S),_.sub(I.multiplyScalar(I.dot(S))).normalize(),x.crossVectors(D,S);const L=x.dot(l[N])<0?-1:1;o.setXYZW(N,_.x,_.y,_.z,L)}for(let N=0,S=w.length;N<S;++N){const M=w[N],L=M.start,F=M.count;for(let k=L,W=L+F;k<W;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new b,s=new b,o=new b,a=new b,l=new b,c=new b,d=new b,u=new b;if(e)for(let h=0,f=e.count;h<f;h+=3){const m=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(d),l.add(d),c.add(d),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wn.fromBufferAttribute(e,t),Wn.normalize(),e.setXYZ(t,Wn.x,Wn.y,Wn.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d);let f=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*d;for(let p=0;p<d;p++)h[m++]=c[f++]}return new $n(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],u=s[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xf=new zt,ys=new wl,Wl=new fs,qf=new b,Xl=new b,ql=new b,$l=new b,Hd=new b,Yl=new b,$f=new b,jl=new b;class we extends Tn{constructor(e=new Bt,t=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Yl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],u=s[l];d!==0&&(Hd.fromBufferAttribute(u,e),o?Yl.addScaledVector(Hd,d):Yl.addScaledVector(Hd.sub(t),d))}t.add(Yl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wl.copy(i.boundingSphere),Wl.applyMatrix4(s),ys.copy(e.ray).recast(e.near),!(Wl.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Wl,qf)===null||ys.origin.distanceToSquared(qf)>(e.far-e.near)**2))&&(Xf.copy(s).invert(),ys.copy(e.ray).applyMatrix4(Xf),!(i.boundingBox!==null&&ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const g=h[m],p=o[g.materialIndex],w=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=w,I=_;x<I;x+=3){const D=a.getX(x),R=a.getX(x+1),N=a.getX(x+2);r=Zl(this,p,e,i,c,d,u,D,R,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const w=a.getX(g),_=a.getX(g+1),x=a.getX(g+2);r=Zl(this,o,e,i,c,d,u,w,_,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const g=h[m],p=o[g.materialIndex],w=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=w,I=_;x<I;x+=3){const D=x,R=x+1,N=x+2;r=Zl(this,p,e,i,c,d,u,D,R,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const w=g,_=g+1,x=g+2;r=Zl(this,o,e,i,c,d,u,w,_,x),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function S_(n,e,t,i,r,s,o,a){let l;if(e.side===Ci?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zr,a),l===null)return null;jl.copy(a),jl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(jl);return c<t.near||c>t.far?null:{distance:c,point:jl.clone(),object:n}}function Zl(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Xl),n.getVertexPosition(l,ql),n.getVertexPosition(c,$l);const d=S_(n,e,t,i,Xl,ql,$l,$f);if(d){const u=new b;hr.getBarycoord($f,Xl,ql,$l,u),r&&(d.uv=hr.getInterpolatedAttribute(r,a,l,c,u,new ze)),s&&(d.uv1=hr.getInterpolatedAttribute(s,a,l,c,u,new ze)),o&&(d.normal=hr.getInterpolatedAttribute(o,a,l,c,u,new b),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new b,materialIndex:0};hr.getNormal(Xl,ql,$l,h.normal),d.face=h,d.barycoord=u}return d}class Pn extends Bt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],u=[];let h=0,f=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(u,2));function m(v,g,p,w,_,x,I,D,R,N,S){const M=x/R,L=I/N,F=x/2,k=I/2,W=D/2,q=R+1,j=N+1;let re=0,X=0;const me=new b;for(let Te=0;Te<j;Te++){const Be=Te*L-k;for(let He=0;He<q;He++){const lt=He*M-F;me[v]=lt*w,me[g]=Be*_,me[p]=W,c.push(me.x,me.y,me.z),me[v]=0,me[g]=0,me[p]=D>0?1:-1,d.push(me.x,me.y,me.z),u.push(He/R),u.push(1-Te/N),re+=1}}for(let Te=0;Te<N;Te++)for(let Be=0;Be<R;Be++){const He=h+Be+q*Te,lt=h+Be+q*(Te+1),Mt=h+(Be+1)+q*(Te+1),te=h+(Be+1)+q*Te;l.push(He,lt,te),l.push(lt,Mt,te),X+=6}a.addGroup(f,X,S),f+=X,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function _i(n){const e={};for(let t=0;t<n.length;t++){const i=jo(n[t]);for(const r in i)e[r]=i[r]}return e}function M_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function eg(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$t.workingColorSpace}const w_={clone:jo,merge:_i};var E_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Br extends oa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E_,this.fragmentShader=T_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jo(e.uniforms),this.uniformsGroups=M_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class tg extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Tr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zr=new b,Yf=new ze,jf=new ze;class Bi extends tg{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=el*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return el*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z)}getViewSize(e,t){return this.getViewBounds(e,Yf,jf),t.subVectors(jf,Yf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ba*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mo=-90,wo=1;class A_ extends Tn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bi(Mo,wo,e,t);r.layers=this.layers,this.add(r);const s=new Bi(Mo,wo,e,t);s.layers=this.layers,this.add(s);const o=new Bi(Mo,wo,e,t);o.layers=this.layers,this.add(o);const a=new Bi(Mo,wo,e,t);a.layers=this.layers,this.add(a);const l=new Bi(Mo,wo,e,t);l.layers=this.layers,this.add(l);const c=new Bi(Mo,wo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Tr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class ng extends Si{constructor(e=[],t=qo,i,r,s,o,a,l,c,d){super(e,t,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class R_ extends Xs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ng(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pn(5,5,5),s=new Br({name:"CubemapFromEquirect",uniforms:jo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ci,blending:ss});s.uniforms.tEquirect.value=t;const o=new we(r,s),a=t.minFilter;return t.minFilter===Ns&&(t.minFilter=wr),new A_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class In extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const C_={type:"move"};class Vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(C_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new In;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class P_ extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class D_ extends Si{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Xi,d=Xi,u,h){super(null,o,a,l,c,d,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ph extends $n{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Eo=new zt,Zf=new zt,Kl=[],Kf=new hs,I_=new zt,ba=new we,Sa=new fs;class ig extends we{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ph(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,I_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Eo),Kf.copy(e.boundingBox).applyMatrix4(Eo),this.boundingBox.union(Kf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Eo),Sa.copy(e.boundingSphere).applyMatrix4(Eo),this.boundingSphere.union(Sa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sa.copy(this.boundingSphere),Sa.applyMatrix4(i),e.ray.intersectsSphere(Sa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Eo),Zf.multiplyMatrices(i,Eo),ba.matrixWorld=Zf,ba.raycast(e,Kl);for(let o=0,a=Kl.length;o<a;o++){const l=Kl[o];l.instanceId=s,l.object=this,t.push(l)}Kl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ph(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new D_(new Float32Array(r*this.count),r,this.count,Fh,Er));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Gd=new b,L_=new b,N_=new At;class es{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Gd.subVectors(i,t).cross(L_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Gd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||N_.getNormalMatrix(e),r=this.coplanarPoint(Gd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new fs,U_=new ze(.5,.5),Jl=new b;class Wh{constructor(e=new es,t=new es,i=new es,r=new es,s=new es,o=new es){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],u=s[5],h=s[6],f=s[7],m=s[8],v=s[9],g=s[10],p=s[11],w=s[12],_=s[13],x=s[14],I=s[15];if(r[0].setComponents(c-o,f-d,p-m,I-w).normalize(),r[1].setComponents(c+o,f+d,p+m,I+w).normalize(),r[2].setComponents(c+a,f+u,p+v,I+_).normalize(),r[3].setComponents(c-a,f-u,p-v,I-_).normalize(),i)r[4].setComponents(l,h,g,x).normalize(),r[5].setComponents(c-l,f-h,p-g,I-x).normalize();else if(r[4].setComponents(c-l,f-h,p-g,I-x).normalize(),t===Tr)r[5].setComponents(c+l,f+h,p+g,I+x).normalize();else if(t===Oc)r[5].setComponents(l,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){bs.center.set(0,0,0);const t=U_.distanceTo(e.center);return bs.radius=.7071067811865476+t,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Jl.x=r.normal.x>0?e.max.x:e.min.x,Jl.y=r.normal.y>0?e.max.y:e.min.y,Jl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pi extends oa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bc=new b,Hc=new b,Jf=new zt,Ma=new wl,Ql=new fs,Wd=new b,Qf=new b;class hn extends Tn{constructor(e=new Bt,t=new Pi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Bc.fromBufferAttribute(t,r-1),Hc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Bc.distanceTo(Hc);e.setAttribute("lineDistance",new Lt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ql.copy(i.boundingSphere),Ql.applyMatrix4(r),Ql.radius+=s,e.ray.intersectsSphere(Ql)===!1)return;Jf.copy(r).invert(),Ma.copy(e.ray).applyMatrix4(Jf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=c){const p=d.getX(v),w=d.getX(v+1),_=ec(this,e,Ma,l,p,w,v);_&&t.push(_)}if(this.isLineLoop){const v=d.getX(m-1),g=d.getX(f),p=ec(this,e,Ma,l,v,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=c){const p=ec(this,e,Ma,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=ec(this,e,Ma,l,m-1,f,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ec(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Bc.fromBufferAttribute(a,r),Hc.fromBufferAttribute(a,s),t.distanceSqToSegment(Bc,Hc,Wd,Qf)>i)return;Wd.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Wd);if(!(c<e.near||c>e.far))return{distance:c,point:Qf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const ep=new b,tp=new b;class k_ extends hn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)ep.fromBufferAttribute(t,r),tp.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ep.distanceTo(tp);e.setAttribute("lineDistance",new Lt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class F_ extends hn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class O_ extends oa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const np=new zt,mh=new wl,tc=new fs,nc=new b;class z_ extends Tn{constructor(e=new Bt,t=new O_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tc.copy(i.boundingSphere),tc.applyMatrix4(r),tc.radius+=s,e.ray.intersectsSphere(tc)===!1)return;np.copy(r).invert(),mh.copy(e.ray).applyMatrix4(np);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=h,v=f;m<v;m++){const g=c.getX(m);nc.fromBufferAttribute(u,g),ip(nc,g,l,r,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=h,v=f;m<v;m++)nc.fromBufferAttribute(u,m),ip(nc,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ip(n,e,t,i,r,s,o){const a=mh.distanceSqToPoint(n);if(a<t){const l=new b;mh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class rg extends Si{constructor(e,t,i=Ws,r,s,o,a=Xi,l=Xi,c,d=Ja,u=1){if(d!==Ja&&d!==Qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class tl extends Bt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new b,d=new ze;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const f=i+u/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(a,3)),this.setAttribute("uv",new Lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ai extends Bt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],u=[],h=[],f=[];let m=0;const v=[],g=i/2;let p=0;w(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new Lt(u,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(f,2));function w(){const x=new b,I=new b;let D=0;const R=(t-e)/i;for(let N=0;N<=s;N++){const S=[],M=N/s,L=M*(t-e)+e;for(let F=0;F<=r;F++){const k=F/r,W=k*l+a,q=Math.sin(W),j=Math.cos(W);I.x=L*q,I.y=-M*i+g,I.z=L*j,u.push(I.x,I.y,I.z),x.set(q,R,j).normalize(),h.push(x.x,x.y,x.z),f.push(k,1-M),S.push(m++)}v.push(S)}for(let N=0;N<r;N++)for(let S=0;S<s;S++){const M=v[S][N],L=v[S+1][N],F=v[S+1][N+1],k=v[S][N+1];(e>0||S!==0)&&(d.push(M,L,k),D+=3),(t>0||S!==s-1)&&(d.push(L,F,k),D+=3)}c.addGroup(p,D,0),p+=D}function _(x){const I=m,D=new ze,R=new b;let N=0;const S=x===!0?e:t,M=x===!0?1:-1;for(let F=1;F<=r;F++)u.push(0,g*M,0),h.push(0,M,0),f.push(.5,.5),m++;const L=m;for(let F=0;F<=r;F++){const W=F/r*l+a,q=Math.cos(W),j=Math.sin(W);R.x=S*j,R.y=g*M,R.z=S*q,u.push(R.x,R.y,R.z),h.push(0,M,0),D.x=q*.5+.5,D.y=j*.5*M+.5,f.push(D.x,D.y),m++}for(let F=0;F<r;F++){const k=I+F,W=L+F;x===!0?d.push(W,W+1,k):d.push(W+1,W,k),N+=3}c.addGroup(p,N,x===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xh extends Bt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new Lt(s,3)),this.setAttribute("normal",new Lt(s.slice(),3)),this.setAttribute("uv",new Lt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const _=new b,x=new b,I=new b;for(let D=0;D<t.length;D+=3)f(t[D+0],_),f(t[D+1],x),f(t[D+2],I),l(_,x,I,w)}function l(w,_,x,I){const D=I+1,R=[];for(let N=0;N<=D;N++){R[N]=[];const S=w.clone().lerp(x,N/D),M=_.clone().lerp(x,N/D),L=D-N;for(let F=0;F<=L;F++)F===0&&N===D?R[N][F]=S:R[N][F]=S.clone().lerp(M,F/L)}for(let N=0;N<D;N++)for(let S=0;S<2*(D-N)-1;S++){const M=Math.floor(S/2);S%2===0?(h(R[N][M+1]),h(R[N+1][M]),h(R[N][M])):(h(R[N][M+1]),h(R[N+1][M+1]),h(R[N+1][M]))}}function c(w){const _=new b;for(let x=0;x<s.length;x+=3)_.x=s[x+0],_.y=s[x+1],_.z=s[x+2],_.normalize().multiplyScalar(w),s[x+0]=_.x,s[x+1]=_.y,s[x+2]=_.z}function d(){const w=new b;for(let _=0;_<s.length;_+=3){w.x=s[_+0],w.y=s[_+1],w.z=s[_+2];const x=g(w)/2/Math.PI+.5,I=p(w)/Math.PI+.5;o.push(x,1-I)}m(),u()}function u(){for(let w=0;w<o.length;w+=6){const _=o[w+0],x=o[w+2],I=o[w+4],D=Math.max(_,x,I),R=Math.min(_,x,I);D>.9&&R<.1&&(_<.2&&(o[w+0]+=1),x<.2&&(o[w+2]+=1),I<.2&&(o[w+4]+=1))}}function h(w){s.push(w.x,w.y,w.z)}function f(w,_){const x=w*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function m(){const w=new b,_=new b,x=new b,I=new b,D=new ze,R=new ze,N=new ze;for(let S=0,M=0;S<s.length;S+=9,M+=6){w.set(s[S+0],s[S+1],s[S+2]),_.set(s[S+3],s[S+4],s[S+5]),x.set(s[S+6],s[S+7],s[S+8]),D.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),N.set(o[M+4],o[M+5]),I.copy(w).add(_).add(x).divideScalar(3);const L=g(I);v(D,M+0,w,L),v(R,M+2,_,L),v(N,M+4,x,L)}}function v(w,_,x,I){I<0&&w.x===1&&(o[_]=w.x-1),x.x===0&&x.z===0&&(o[_]=I/2/Math.PI+.5)}function g(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xh(e.vertices,e.indices,e.radius,e.details)}}class Rr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const d=i[r],h=i[r+1]-d,f=(o-d)/h;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new ze:new b);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new b,r=[],s=[],o=[],a=new b,l=new zt;for(let f=0;f<=e;f++){const m=f/e;r[f]=this.getTangentAt(m,new b)}s[0]=new b,o[0]=new b;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),u=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Pt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Pt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],f*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class qh extends Rr{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ze){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*d-f*u+this.aX,c=h*u+f*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class B_ extends qh{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function $h(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,u){let h=(o-s)/c-(a-s)/(c+d)+(a-o)/d,f=(a-o)/d-(l-o)/(d+u)+(l-a)/u;h*=d,f*=d,r(o,a,h,f)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const ic=new b,Xd=new $h,qd=new $h,$d=new $h;class Yh extends Rr{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new b){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(ic.subVectors(r[0],r[1]).add(r[0]),c=ic);const u=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(ic.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=ic),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Xd.initNonuniformCatmullRom(c.x,u.x,h.x,d.x,m,v,g),qd.initNonuniformCatmullRom(c.y,u.y,h.y,d.y,m,v,g),$d.initNonuniformCatmullRom(c.z,u.z,h.z,d.z,m,v,g)}else this.curveType==="catmullrom"&&(Xd.initCatmullRom(c.x,u.x,h.x,d.x,this.tension),qd.initCatmullRom(c.y,u.y,h.y,d.y,this.tension),$d.initCatmullRom(c.z,u.z,h.z,d.z,this.tension));return i.set(Xd.calc(l),qd.calc(l),$d.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new b().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function rp(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function H_(n,e){const t=1-n;return t*t*e}function V_(n,e){return 2*(1-n)*n*e}function G_(n,e){return n*n*e}function Va(n,e,t,i){return H_(n,e)+V_(n,t)+G_(n,i)}function W_(n,e){const t=1-n;return t*t*t*e}function X_(n,e){const t=1-n;return 3*t*t*n*e}function q_(n,e){return 3*(1-n)*n*n*e}function $_(n,e){return n*n*n*e}function Ga(n,e,t,i,r){return W_(n,e)+X_(n,t)+q_(n,i)+$_(n,r)}class sg extends Rr{constructor(e=new ze,t=new ze,i=new ze,r=new ze){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ze){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ga(e,r.x,s.x,o.x,a.x),Ga(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Y_ extends Rr{constructor(e=new b,t=new b,i=new b,r=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new b){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ga(e,r.x,s.x,o.x,a.x),Ga(e,r.y,s.y,o.y,a.y),Ga(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class og extends Rr{constructor(e=new ze,t=new ze){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ze){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ze){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j_ extends Rr{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ag extends Rr{constructor(e=new ze,t=new ze,i=new ze){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ze){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Va(e,r.x,s.x,o.x),Va(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Z_ extends Rr{constructor(e=new b,t=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Va(e,r.x,s.x,o.x),Va(e,r.y,s.y,o.y),Va(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lg extends Rr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ze){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(rp(a,l.x,c.x,d.x,u.x),rp(a,l.y,c.y,d.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ze().fromArray(r))}return this}}var sp=Object.freeze({__proto__:null,ArcCurve:B_,CatmullRomCurve3:Yh,CubicBezierCurve:sg,CubicBezierCurve3:Y_,EllipseCurve:qh,LineCurve:og,LineCurve3:j_,QuadraticBezierCurve:ag,QuadraticBezierCurve3:Z_,SplineCurve:lg});class K_ extends Rr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sp[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const d=l[c];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new sp[r.type]().fromJSON(r))}return this}}class op extends K_{constructor(e){super(),this.type="Path",this.currentPoint=new ze,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new og(this.currentPoint.clone(),new ze(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new ag(this.currentPoint.clone(),new ze(e,t),new ze(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new sg(this.currentPoint.clone(),new ze(e,t),new ze(i,r),new ze(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new lg(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new qh(e,t,i,r,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class cg extends op{constructor(e){super(e),this.uuid=no(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new op().fromJSON(r))}return this}}function J_(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=dg(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=ix(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let d=-1/0,u=-1/0;for(let h=t;h<r;h+=t){const f=n[h],m=n[h+1];f<a&&(a=f),m<l&&(l=m),f>d&&(d=f),m>u&&(u=m)}c=Math.max(d-a,u-l),c=c!==0?32767/c:0}return nl(s,o,t,a,l,c,0),o}function dg(n,e,t,i,r){let s;if(r===px(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=ap(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=ap(o/i|0,n[o],n[o+1],s);return s&&Zo(s,s.next)&&(rl(s),s=s.next),s}function qs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Zo(t,t.next)||Sn(t.prev,t,t.next)===0)){if(rl(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function nl(n,e,t,i,r,s,o){if(!n)return;!o&&s&&lx(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?ex(n,i,r,s):Q_(n)){e.push(l.i,n.i,c.i),rl(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=tx(qs(n),e),nl(n,e,t,i,r,s,2)):o===2&&nx(n,e,t,i,r,s):nl(qs(n),e,t,i,r,s,1);break}}}function Q_(n){const e=n.prev,t=n,i=n.next;if(Sn(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,d=Math.min(r,s,o),u=Math.min(a,l,c),h=Math.max(r,s,o),f=Math.max(a,l,c);let m=i.next;for(;m!==e;){if(m.x>=d&&m.x<=h&&m.y>=u&&m.y<=f&&Na(r,a,s,l,o,c,m.x,m.y)&&Sn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ex(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Sn(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,d=r.y,u=s.y,h=o.y,f=Math.min(a,l,c),m=Math.min(d,u,h),v=Math.max(a,l,c),g=Math.max(d,u,h),p=gh(f,m,e,t,i),w=gh(v,g,e,t,i);let _=n.prevZ,x=n.nextZ;for(;_&&_.z>=p&&x&&x.z<=w;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==r&&_!==o&&Na(a,d,l,u,c,h,_.x,_.y)&&Sn(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&Na(a,d,l,u,c,h,x.x,x.y)&&Sn(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==r&&_!==o&&Na(a,d,l,u,c,h,_.x,_.y)&&Sn(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=w;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&Na(a,d,l,u,c,h,x.x,x.y)&&Sn(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function tx(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Zo(i,r)&&hg(i,t,t.next,r)&&il(i,r)&&il(r,i)&&(e.push(i.i,t.i,r.i),rl(t),rl(t.next),t=n=r),t=t.next}while(t!==n);return qs(t)}function nx(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ux(o,a)){let l=fg(o,a);o=qs(o,o.next),l=qs(l,l.next),nl(o,e,t,i,r,s,0),nl(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function ix(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=dg(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(dx(c))}r.sort(rx);for(let s=0;s<r.length;s++)t=sx(r[s],t);return t}function rx(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function sx(n,e){const t=ox(n,e);if(!t)return e;const i=fg(t,n);return qs(i,i.next),qs(t,t.next)}function ox(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(Zo(n,t))return t;do{if(Zo(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let d=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&ug(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const u=Math.abs(r-t.y)/(i-t.x);il(t,n)&&(u<d||u===d&&(t.x>o.x||t.x===o.x&&ax(o,t)))&&(o=t,d=u)}t=t.next}while(t!==a);return o}function ax(n,e){return Sn(n.prev,n,e.prev)<0&&Sn(e.next,n,n.next)<0}function lx(n,e,t,i){let r=n;do r.z===0&&(r.z=gh(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,cx(r)}function cx(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function gh(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function dx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ug(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Na(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&ug(n,e,t,i,r,s,o,a)}function ux(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!hx(n,e)&&(il(n,e)&&il(e,n)&&fx(n,e)&&(Sn(n.prev,n,e.prev)||Sn(n,e.prev,e))||Zo(n,e)&&Sn(n.prev,n,n.next)>0&&Sn(e.prev,e,e.next)>0)}function Sn(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Zo(n,e){return n.x===e.x&&n.y===e.y}function hg(n,e,t,i){const r=sc(Sn(n,e,t)),s=sc(Sn(n,e,i)),o=sc(Sn(t,i,n)),a=sc(Sn(t,i,e));return!!(r!==s&&o!==a||r===0&&rc(n,t,e)||s===0&&rc(n,i,e)||o===0&&rc(t,n,i)||a===0&&rc(t,e,i))}function rc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function sc(n){return n>0?1:n<0?-1:0}function hx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&hg(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function il(n,e){return Sn(n.prev,n,n.next)<0?Sn(n,e,n.next)>=0&&Sn(n,n.prev,e)>=0:Sn(n,e,n.prev)<0||Sn(n,n.next,e)<0}function fx(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function fg(n,e){const t=vh(n.i,n.x,n.y),i=vh(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function ap(n,e,t,i){const r=vh(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function rl(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function vh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function px(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class mx{static triangulate(e,t,i=2){return J_(e,t,i)}}class Wa{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Wa.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];lp(e),cp(i,e);let o=e.length;t.forEach(lp);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,cp(i,t[l]);const a=mx.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function lp(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function cp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Us extends Xh{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Us(e.radius,e.detail)}}class cs extends Bt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,u=e/a,h=t/l,f=[],m=[],v=[],g=[];for(let p=0;p<d;p++){const w=p*h-o;for(let _=0;_<c;_++){const x=_*u-s;m.push(x,-w,0),v.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const _=w+c*p,x=w+c*(p+1),I=w+1+c*(p+1),D=w+1+c*p;f.push(_,x,D),f.push(x,I,D)}this.setIndex(f),this.setAttribute("position",new Lt(m,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.widthSegments,e.heightSegments)}}class od extends Bt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],d=[];let u=e;const h=(t-e)/r,f=new b,m=new ze;for(let v=0;v<=r;v++){for(let g=0;g<=i;g++){const p=s+g/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,d.push(m.x,m.y)}u+=h}for(let v=0;v<r;v++){const g=v*(i+1);for(let p=0;p<i;p++){const w=p+g,_=w,x=w+i+1,I=w+i+2,D=w+1;a.push(_,x,D),a.push(x,I,D)}}this.setIndex(a),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new od(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class jh extends Bt{constructor(e=new cg([new ze(0,.5),new ze(-.5,-.5),new ze(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(a,l,d),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Lt(r,3)),this.setAttribute("normal",new Lt(s,3)),this.setAttribute("uv",new Lt(o,2));function c(d){const u=r.length/3,h=d.extractPoints(t);let f=h.shape;const m=h.holes;Wa.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const w=m[g];Wa.isClockWise(w)===!0&&(m[g]=w.reverse())}const v=Wa.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const w=m[g];f=f.concat(w)}for(let g=0,p=f.length;g<p;g++){const w=f[g];r.push(w.x,w.y,0),s.push(0,0,1),o.push(w.x,w.y)}for(let g=0,p=v.length;g<p;g++){const w=v[g],_=w[0]+u,x=w[1]+u,I=w[2]+u;i.push(_,x,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return gx(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new jh(i,e.curveSegments)}}function gx(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class as extends Bt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],u=new b,h=new b,f=[],m=[],v=[],g=[];for(let p=0;p<=i;p++){const w=[],_=p/i;let x=0;p===0&&o===0?x=.5/t:p===i&&l===Math.PI&&(x=-.5/t);for(let I=0;I<=t;I++){const D=I/t;u.x=-e*Math.cos(r+D*s)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(r+D*s)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),g.push(D+x,1-_),w.push(c++)}d.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const _=d[p][w+1],x=d[p][w],I=d[p+1][w],D=d[p+1][w+1];(p!==0||o>0)&&f.push(_,x,D),(p!==i-1||l<Math.PI)&&f.push(x,I,D)}this.setIndex(f),this.setAttribute("position",new Lt(m,3)),this.setAttribute("normal",new Lt(v,3)),this.setAttribute("uv",new Lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ps extends Bt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new b,u=new b,h=new b;for(let f=0;f<=i;f++)for(let m=0;m<=r;m++){const v=m/r*s,g=f/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),h.subVectors(u,d).normalize(),l.push(h.x,h.y,h.z),c.push(m/r),c.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=r;m++){const v=(r+1)*f+m-1,g=(r+1)*(f-1)+m-1,p=(r+1)*(f-1)+m,w=(r+1)*f+m;o.push(v,g,w),o.push(g,p,w)}this.setIndex(o),this.setAttribute("position",new Lt(a,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vx extends oa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _x extends oa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dp extends Pi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class xx extends Tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Yd=new zt,up=new b,hp=new b;class yx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=Ar,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wh,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;up.setFromMatrixPosition(e.matrixWorld),t.position.copy(up),hp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hp),t.updateMatrixWorld(),Yd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const fp=new zt,wa=new b,jd=new b;class bx extends yx{constructor(){super(new Bi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new Vt(2,1,1,1),new Vt(0,1,1,1),new Vt(3,1,1,1),new Vt(1,1,1,1),new Vt(3,0,1,1),new Vt(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),wa.setFromMatrixPosition(e.matrixWorld),i.position.copy(wa),jd.copy(i.position),jd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(jd),i.updateMatrixWorld(),r.makeTranslation(-wa.x,-wa.y,-wa.z),fp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fp,i.coordinateSystem,i.reversedDepth)}}class Sx extends xx{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new bx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Mx extends tg{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wx extends Bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const pp=new zt;class Zh{constructor(e,t,i=0,r=1/0){this.ray=new wl(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Gh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pp),this}intersectObject(e,t=!0,i=[]){return _h(e,this,i,t),i.sort(mp),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)_h(e[r],this,i,t);return i.sort(mp),i}}function mp(n,e){return n.distance-e.distance}function _h(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)_h(s[o],e,t,!0)}}class gp{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class pg extends to{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function vp(n,e,t,i){const r=Ex(i);switch(t){case Wm:return n*e;case Fh:return n*e/r.components*r.byteLength;case Oh:return n*e/r.components*r.byteLength;case qm:return n*e*2/r.components*r.byteLength;case zh:return n*e*2/r.components*r.byteLength;case Xm:return n*e*3/r.components*r.byteLength;case fr:return n*e*4/r.components*r.byteLength;case Bh:return n*e*4/r.components*r.byteLength;case bc:case Sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Mc:case wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gu:case Xu:return Math.max(n,16)*Math.max(e,8)/4;case Vu:case Wu:return Math.max(n,8)*Math.max(e,8)/2;case qu:case $u:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ju:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ku:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ju:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Qu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case eh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case th:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ih:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case oh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ah:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ec:case ch:case dh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case $m:case uh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case hh:case fh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ex(n){switch(n){case Ar:case Hm:return{byteLength:1,components:1};case Za:case Vm:case Ml:return{byteLength:2,components:1};case Uh:case kh:return{byteLength:2,components:4};case Ws:case Nh:case Er:return{byteLength:4,components:1};case Gm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lh);function mg(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Tx(n){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const d=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,d);else{u.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<u.length;f++){const m=u[h],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];n.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rx=`#ifdef USE_ALPHAHASH
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
#endif`,Cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ix=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lx=`#ifdef USE_AOMAP
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
#endif`,Nx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ux=`#ifdef USE_BATCHING
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
#endif`,kx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ox=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bx=`#ifdef USE_IRIDESCENCE
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
#endif`,Hx=`#ifdef USE_BUMPMAP
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
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zx=`#define PI 3.141592653589793
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
} // validated`,Kx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jx=`vec3 transformedNormal = objectNormal;
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
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ey=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ty=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ny=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iy="gl_FragColor = linearToOutputTexel( gl_FragColor );",ry=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sy=`#ifdef USE_ENVMAP
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
#endif`,oy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ay=`#ifdef USE_ENVMAP
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
#endif`,ly=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
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
#endif`,dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,py=`#ifdef USE_GRADIENTMAP
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
}`,my=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_y=`uniform bool receiveShadow;
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
#endif`,xy=`#ifdef USE_ENVMAP
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
#endif`,yy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,by=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,My=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wy=`PhysicalMaterial material;
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
#endif`,Ey=`struct PhysicalMaterial {
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
}`,Ty=`
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
#endif`,Ay=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ry=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Py=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ly=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ny=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ky=`#if defined( USE_POINTS_UV )
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
#endif`,Fy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Oy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,By=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vy=`#ifdef USE_MORPHTARGETS
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
#endif`,Gy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jy=`#ifdef USE_NORMALMAP
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
#endif`,Zy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ky=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,db=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ub=`float getShadowMask() {
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
}`,hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fb=`#ifdef USE_SKINNING
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
#endif`,pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mb=`#ifdef USE_SKINNING
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
#endif`,gb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yb=`#ifdef USE_TRANSMISSION
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
#endif`,bb=`#ifdef USE_TRANSMISSION
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
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ab=`uniform sampler2D t2D;
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
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Db=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`#include <common>
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
}`,Lb=`#if DEPTH_PACKING == 3200
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
}`,Nb=`#define DISTANCE
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
}`,Ub=`#define DISTANCE
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
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`uniform float scale;
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
}`,zb=`uniform vec3 diffuse;
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
}`,Bb=`#include <common>
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
}`,Hb=`uniform vec3 diffuse;
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
}`,Vb=`#define LAMBERT
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
}`,Gb=`#define LAMBERT
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
}`,Wb=`#define MATCAP
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
}`,Xb=`#define MATCAP
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
}`,qb=`#define NORMAL
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
}`,$b=`#define NORMAL
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
}`,Yb=`#define PHONG
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
}`,jb=`#define PHONG
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
}`,Zb=`#define STANDARD
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
}`,Kb=`#define STANDARD
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
}`,Jb=`#define TOON
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
}`,Qb=`#define TOON
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
}`,eS=`uniform float size;
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
}`,tS=`uniform vec3 diffuse;
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
}`,nS=`#include <common>
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
}`,iS=`uniform vec3 color;
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
}`,rS=`uniform float rotation;
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
}`,sS=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:Ax,alphahash_pars_fragment:Rx,alphamap_fragment:Cx,alphamap_pars_fragment:Px,alphatest_fragment:Dx,alphatest_pars_fragment:Ix,aomap_fragment:Lx,aomap_pars_fragment:Nx,batching_pars_vertex:Ux,batching_vertex:kx,begin_vertex:Fx,beginnormal_vertex:Ox,bsdfs:zx,iridescence_fragment:Bx,bumpmap_pars_fragment:Hx,clipping_planes_fragment:Vx,clipping_planes_pars_fragment:Gx,clipping_planes_pars_vertex:Wx,clipping_planes_vertex:Xx,color_fragment:qx,color_pars_fragment:$x,color_pars_vertex:Yx,color_vertex:jx,common:Zx,cube_uv_reflection_fragment:Kx,defaultnormal_vertex:Jx,displacementmap_pars_vertex:Qx,displacementmap_vertex:ey,emissivemap_fragment:ty,emissivemap_pars_fragment:ny,colorspace_fragment:iy,colorspace_pars_fragment:ry,envmap_fragment:sy,envmap_common_pars_fragment:oy,envmap_pars_fragment:ay,envmap_pars_vertex:ly,envmap_physical_pars_fragment:xy,envmap_vertex:cy,fog_vertex:dy,fog_pars_vertex:uy,fog_fragment:hy,fog_pars_fragment:fy,gradientmap_pars_fragment:py,lightmap_pars_fragment:my,lights_lambert_fragment:gy,lights_lambert_pars_fragment:vy,lights_pars_begin:_y,lights_toon_fragment:yy,lights_toon_pars_fragment:by,lights_phong_fragment:Sy,lights_phong_pars_fragment:My,lights_physical_fragment:wy,lights_physical_pars_fragment:Ey,lights_fragment_begin:Ty,lights_fragment_maps:Ay,lights_fragment_end:Ry,logdepthbuf_fragment:Cy,logdepthbuf_pars_fragment:Py,logdepthbuf_pars_vertex:Dy,logdepthbuf_vertex:Iy,map_fragment:Ly,map_pars_fragment:Ny,map_particle_fragment:Uy,map_particle_pars_fragment:ky,metalnessmap_fragment:Fy,metalnessmap_pars_fragment:Oy,morphinstance_vertex:zy,morphcolor_vertex:By,morphnormal_vertex:Hy,morphtarget_pars_vertex:Vy,morphtarget_vertex:Gy,normal_fragment_begin:Wy,normal_fragment_maps:Xy,normal_pars_fragment:qy,normal_pars_vertex:$y,normal_vertex:Yy,normalmap_pars_fragment:jy,clearcoat_normal_fragment_begin:Zy,clearcoat_normal_fragment_maps:Ky,clearcoat_pars_fragment:Jy,iridescence_pars_fragment:Qy,opaque_fragment:eb,packing:tb,premultiplied_alpha_fragment:nb,project_vertex:ib,dithering_fragment:rb,dithering_pars_fragment:sb,roughnessmap_fragment:ob,roughnessmap_pars_fragment:ab,shadowmap_pars_fragment:lb,shadowmap_pars_vertex:cb,shadowmap_vertex:db,shadowmask_pars_fragment:ub,skinbase_vertex:hb,skinning_pars_vertex:fb,skinning_vertex:pb,skinnormal_vertex:mb,specularmap_fragment:gb,specularmap_pars_fragment:vb,tonemapping_fragment:_b,tonemapping_pars_fragment:xb,transmission_fragment:yb,transmission_pars_fragment:bb,uv_pars_fragment:Sb,uv_pars_vertex:Mb,uv_vertex:wb,worldpos_vertex:Eb,background_vert:Tb,background_frag:Ab,backgroundCube_vert:Rb,backgroundCube_frag:Cb,cube_vert:Pb,cube_frag:Db,depth_vert:Ib,depth_frag:Lb,distanceRGBA_vert:Nb,distanceRGBA_frag:Ub,equirect_vert:kb,equirect_frag:Fb,linedashed_vert:Ob,linedashed_frag:zb,meshbasic_vert:Bb,meshbasic_frag:Hb,meshlambert_vert:Vb,meshlambert_frag:Gb,meshmatcap_vert:Wb,meshmatcap_frag:Xb,meshnormal_vert:qb,meshnormal_frag:$b,meshphong_vert:Yb,meshphong_frag:jb,meshphysical_vert:Zb,meshphysical_frag:Kb,meshtoon_vert:Jb,meshtoon_frag:Qb,points_vert:eS,points_frag:tS,shadow_vert:nS,shadow_frag:iS,sprite_vert:rS,sprite_frag:sS},We={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},Mr={basic:{uniforms:_i([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:_i([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:_i([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:_i([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:_i([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:_i([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:_i([We.points,We.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:_i([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:_i([We.common,We.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:_i([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:_i([We.sprite,We.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:_i([We.common,We.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:_i([We.lights,We.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};Mr.physical={uniforms:_i([Mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const oc={r:0,b:0,g:0},Ss=new En,oS=new zt;function aS(n,e,t,i,r,s,o){const a=new Ot(0);let l=s===!0?0:1,c,d,u=null,h=0,f=null;function m(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function v(_){let x=!1;const I=m(_);I===null?p(a,l):I&&I.isColor&&(p(I,1),x=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(_,x){const I=m(x);I&&(I.isCubeTexture||I.mapping===sd)?(d===void 0&&(d=new we(new Pn(1,1,1),new Br({name:"BackgroundCubeMaterial",uniforms:jo(Mr.backgroundCube.uniforms),vertexShader:Mr.backgroundCube.vertexShader,fragmentShader:Mr.backgroundCube.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Ss.copy(x.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),d.material.uniforms.envMap.value=I,d.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(oS.makeRotationFromEuler(Ss)),d.material.toneMapped=$t.getTransfer(I.colorSpace)!==tn,(u!==I||h!==I.version||f!==n.toneMapping)&&(d.material.needsUpdate=!0,u=I,h=I.version,f=n.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new we(new cs(2,2),new Br({name:"BackgroundMaterial",uniforms:jo(Mr.background.uniforms),vertexShader:Mr.background.vertexShader,fragmentShader:Mr.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=$t.getTransfer(I.colorSpace)!==tn,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||h!==I.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=I,h=I.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,x){_.getRGB(oc,eg(n)),i.buffers.color.setClear(oc.r,oc.g,oc.b,x,o)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:v,addToRenderList:g,dispose:w}}function lS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,L,F,k,W){let q=!1;const j=u(k,F,L);s!==j&&(s=j,c(s.object)),q=f(M,k,F,W),q&&m(M,k,F,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(M,L,F,k),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function d(M){return n.deleteVertexArray(M)}function u(M,L,F){const k=F.wireframe===!0;let W=i[M.id];W===void 0&&(W={},i[M.id]=W);let q=W[L.id];q===void 0&&(q={},W[L.id]=q);let j=q[k];return j===void 0&&(j=h(l()),q[k]=j),j}function h(M){const L=[],F=[],k=[];for(let W=0;W<t;W++)L[W]=0,F[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,L,F,k){const W=s.attributes,q=L.attributes;let j=0;const re=F.getAttributes();for(const X in re)if(re[X].location>=0){const Te=W[X];let Be=q[X];if(Be===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(Be=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(Be=M.instanceColor)),Te===void 0||Te.attribute!==Be||Be&&Te.data!==Be.data)return!0;j++}return s.attributesNum!==j||s.index!==k}function m(M,L,F,k){const W={},q=L.attributes;let j=0;const re=F.getAttributes();for(const X in re)if(re[X].location>=0){let Te=q[X];Te===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor));const Be={};Be.attribute=Te,Te&&Te.data&&(Be.data=Te.data),W[X]=Be,j++}s.attributes=W,s.attributesNum=j,s.index=k}function v(){const M=s.newAttributes;for(let L=0,F=M.length;L<F;L++)M[L]=0}function g(M){p(M,0)}function p(M,L){const F=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;F[M]=1,k[M]===0&&(n.enableVertexAttribArray(M),k[M]=1),W[M]!==L&&(n.vertexAttribDivisor(M,L),W[M]=L)}function w(){const M=s.newAttributes,L=s.enabledAttributes;for(let F=0,k=L.length;F<k;F++)L[F]!==M[F]&&(n.disableVertexAttribArray(F),L[F]=0)}function _(M,L,F,k,W,q,j){j===!0?n.vertexAttribIPointer(M,L,F,W,q):n.vertexAttribPointer(M,L,F,k,W,q)}function x(M,L,F,k){v();const W=k.attributes,q=F.getAttributes(),j=L.defaultAttributeValues;for(const re in q){const X=q[re];if(X.location>=0){let me=W[re];if(me===void 0&&(re==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),re==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),me!==void 0){const Te=me.normalized,Be=me.itemSize,He=e.get(me);if(He===void 0)continue;const lt=He.buffer,Mt=He.type,te=He.bytesPerElement,Re=Mt===n.INT||Mt===n.UNSIGNED_INT||me.gpuType===Nh;if(me.isInterleavedBufferAttribute){const oe=me.data,Je=oe.stride,ne=me.offset;if(oe.isInstancedInterleavedBuffer){for(let de=0;de<X.locationSize;de++)p(X.location+de,oe.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<X.locationSize;de++)g(X.location+de);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let de=0;de<X.locationSize;de++)_(X.location+de,Be/X.locationSize,Mt,Te,Je*te,(ne+Be/X.locationSize*de)*te,Re)}else{if(me.isInstancedBufferAttribute){for(let oe=0;oe<X.locationSize;oe++)p(X.location+oe,me.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let oe=0;oe<X.locationSize;oe++)g(X.location+oe);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let oe=0;oe<X.locationSize;oe++)_(X.location+oe,Be/X.locationSize,Mt,Te,Be*te,Be/X.locationSize*oe*te,Re)}}else if(j!==void 0){const Te=j[re];if(Te!==void 0)switch(Te.length){case 2:n.vertexAttrib2fv(X.location,Te);break;case 3:n.vertexAttrib3fv(X.location,Te);break;case 4:n.vertexAttrib4fv(X.location,Te);break;default:n.vertexAttrib1fv(X.location,Te)}}}}w()}function I(){N();for(const M in i){const L=i[M];for(const F in L){const k=L[F];for(const W in k)d(k[W].object),delete k[W];delete L[F]}delete i[M]}}function D(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const F in L){const k=L[F];for(const W in k)d(k[W].object),delete k[W];delete L[F]}delete i[M.id]}function R(M){for(const L in i){const F=i[L];if(F[M.id]===void 0)continue;const k=F[M.id];for(const W in k)d(k[W].object),delete k[W];delete F[M.id]}}function N(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:w}}function cS(n,e,t){let i;function r(c){i=c}function s(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function o(c,d,u){u!==0&&(n.drawArraysInstanced(i,c,d,u),t.update(d,i,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,u);let f=0;for(let m=0;m<u;m++)f+=d[m];t.update(f,i,1)}function l(c,d,u,h){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],d[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,u);let m=0;for(let v=0;v<u;v++)m+=d[v]*h[v];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==fr&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const N=R===Ml&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ar&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Er&&!N)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=m>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:I,maxSamples:D}}function uS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new es,a=new At,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||i!==0||r;return r=h,i=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=n.get(u);if(!r||m===null||m.length===0||s&&!g)s?d(null):c();else{const w=s?0:i,_=w*4;let x=p.clippingState||null;l.value=x,x=d(m,h,_,f);for(let I=0;I!==_;++I)x[I]=t[I];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,f,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=f+v*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,x=f;_!==v;++_,x+=4)o.copy(u[_]).applyMatrix4(w,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function hS(n){let e=new WeakMap;function t(o,a){return a===Ou?o.mapping=qo:a===zu&&(o.mapping=$o),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ou||a===zu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new R_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Do=4,_p=[.125,.215,.35,.446,.526,.582],Ds=20,Zd=new Mx,xp=new Ot;let Kd=null,Jd=0,Qd=0,eu=!1;const Ts=(1+Math.sqrt(5))/2,To=1/Ts,yp=[new b(-Ts,To,0),new b(Ts,To,0),new b(-To,0,Ts),new b(To,0,Ts),new b(0,Ts,-To),new b(0,Ts,To),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],fS=new b;class bp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=fS}=s;Kd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kd,Jd,Qd),this._renderer.xr.enabled=eu,e.scissorTest=!1,ac(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qo||e.mapping===$o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kd=this._renderer.getRenderTarget(),Jd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wr,minFilter:wr,generateMipmaps:!1,type:Ml,format:fr,colorSpace:Yo,depthBuffer:!1},r=Sp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sp(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pS(s)),this._blurMaterial=mS(s,e,t)}return r}_compileMaterial(e){const t=new we(this._lodPlanes[0],e);this._renderer.compile(t,Zd)}_sceneToCubeUV(e,t,i,r,s){const l=new Bi(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(xp),u.toneMapping=os,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const v=new bn({name:"PMREM.Background",side:Ci,depthWrite:!1,depthTest:!1}),g=new we(new Pn,v);let p=!1;const w=e.background;w?w.isColor&&(v.color.copy(w),e.background=null,p=!0):(v.color.copy(xp),p=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[_],s.y,s.z)):x===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[_]));const I=this._cubeSize;ac(r,x*I,_>2?I:0,I,I),u.setRenderTarget(r),p&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qo||e.mapping===$o;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new we(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ac(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Zd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yp[(r-s-1)%yp.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new we(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ds-1),v=s/m,g=isFinite(s)?1+Math.floor(d*v):Ds;g>Ds&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ds}`);const p=[];let w=0;for(let R=0;R<Ds;++R){const N=R/v,S=Math.exp(-N*N/2);p.push(S),R===0?w+=S:R<g&&(w+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/w;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=m,h.mipInt.value=_-i;const x=this._sizeLods[r],I=3*x*(r>_-Do?r-_+Do:0),D=4*(this._cubeSize-x);ac(t,I,D,3*x,2*x),l.setRenderTarget(t),l.render(u,Zd)}}function pS(n){const e=[],t=[],i=[];let r=n;const s=n-Do+1+_p.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Do?l=_p[o-n+Do-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,m=6,v=3,g=2,p=1,w=new Float32Array(v*m*f),_=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let D=0;D<f;D++){const R=D%3*2/3-1,N=D>2?0:-1,S=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];w.set(S,v*m*D),_.set(h,g*m*D);const M=[D,D,D,D,D,D];x.set(M,p*m*D)}const I=new Bt;I.setAttribute("position",new $n(w,v)),I.setAttribute("uv",new $n(_,g)),I.setAttribute("faceIndex",new $n(x,p)),e.push(I),r>Do&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Sp(n,e,t){const i=new Xs(n,e,t);return i.texture.mapping=sd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ac(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function mS(n,e,t){const i=new Float32Array(Ds),r=new b(0,1,0);return new Br({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Mp(){return new Br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kh(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function wp(){return new Br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function Kh(){return`

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
	`}function gS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ou||l===zu,d=l===qo||l===$o;if(c||d){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new bp(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||d&&f&&r(f)?(t===null&&(t=new bp(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function vS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Fo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _S(n,e,t,i){const r={},s=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(u){const h=[],f=u.index,m=u.attributes.position;let v=0;if(f!==null){const w=f.array;v=f.version;for(let _=0,x=w.length;_<x;_+=3){const I=w[_+0],D=w[_+1],R=w[_+2];h.push(I,D,D,R,R,I)}}else if(m!==void 0){const w=m.array;v=m.version;for(let _=0,x=w.length/3-1;_<x;_+=3){const I=_+0,D=_+1,R=_+2;h.push(I,D,D,R,R,I)}}else return;const g=new(jm(h)?Qm:Jm)(h,1);g.version=v;const p=s.get(u);p&&e.remove(p),s.set(u,g)}function d(u){const h=s.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function xS(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function c(h,f,m){m!==0&&(n.drawElementsInstanced(i,f,s,h*o,m),t.update(f,i,m))}function d(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,i,1)}function u(h,f,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)c(h[p]/o,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,v,0,m);let p=0;for(let w=0;w<m;w++)p+=f[w]*v[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function yS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function bS(n,e,t){const i=new WeakMap,r=new Vt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==u){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let _=0;f===!0&&(_=1),m===!0&&(_=2),v===!0&&(_=3);let x=a.attributes.position.count*_,I=1;x>e.maxTextureSize&&(I=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const D=new Float32Array(x*I*4*u),R=new Zm(D,x,I,u);R.type=Er,R.needsUpdate=!0;const N=_*4;for(let M=0;M<u;M++){const L=g[M],F=p[M],k=w[M],W=x*I*4*M;for(let q=0;q<L.count;q++){const j=q*N;f===!0&&(r.fromBufferAttribute(L,q),D[W+j+0]=r.x,D[W+j+1]=r.y,D[W+j+2]=r.z,D[W+j+3]=0),m===!0&&(r.fromBufferAttribute(F,q),D[W+j+4]=r.x,D[W+j+5]=r.y,D[W+j+6]=r.z,D[W+j+7]=0),v===!0&&(r.fromBufferAttribute(k,q),D[W+j+8]=r.x,D[W+j+9]=r.y,D[W+j+10]=r.z,D[W+j+11]=k.itemSize===4?r.w:1)}}h={count:u,texture:R,size:new ze(x,I)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function SS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const gg=new Si,Ep=new rg(1,1),vg=new Zm,_g=new u_,xg=new ng,Tp=[],Ap=[],Rp=new Float32Array(16),Cp=new Float32Array(9),Pp=new Float32Array(4);function aa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Tp[r];if(s===void 0&&(s=new Float32Array(r),Tp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Vn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ad(n,e){let t=Ap[e];t===void 0&&(t=new Int32Array(e),Ap[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function MS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vn(t,e))return;n.uniform2fv(this.addr,e),Gn(t,e)}}function ES(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vn(t,e))return;n.uniform3fv(this.addr,e),Gn(t,e)}}function TS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vn(t,e))return;n.uniform4fv(this.addr,e),Gn(t,e)}}function AS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gn(t,e)}else{if(Vn(t,i))return;Pp.set(i),n.uniformMatrix2fv(this.addr,!1,Pp),Gn(t,i)}}function RS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gn(t,e)}else{if(Vn(t,i))return;Cp.set(i),n.uniformMatrix3fv(this.addr,!1,Cp),Gn(t,i)}}function CS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gn(t,e)}else{if(Vn(t,i))return;Rp.set(i),n.uniformMatrix4fv(this.addr,!1,Rp),Gn(t,i)}}function PS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function DS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vn(t,e))return;n.uniform2iv(this.addr,e),Gn(t,e)}}function IS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vn(t,e))return;n.uniform3iv(this.addr,e),Gn(t,e)}}function LS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vn(t,e))return;n.uniform4iv(this.addr,e),Gn(t,e)}}function NS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function US(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vn(t,e))return;n.uniform2uiv(this.addr,e),Gn(t,e)}}function kS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vn(t,e))return;n.uniform3uiv(this.addr,e),Gn(t,e)}}function FS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vn(t,e))return;n.uniform4uiv(this.addr,e),Gn(t,e)}}function OS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ep.compareFunction=Ym,s=Ep):s=gg,t.setTexture2D(e||s,r)}function zS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||_g,r)}function BS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||xg,r)}function HS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||vg,r)}function VS(n){switch(n){case 5126:return MS;case 35664:return wS;case 35665:return ES;case 35666:return TS;case 35674:return AS;case 35675:return RS;case 35676:return CS;case 5124:case 35670:return PS;case 35667:case 35671:return DS;case 35668:case 35672:return IS;case 35669:case 35673:return LS;case 5125:return NS;case 36294:return US;case 36295:return kS;case 36296:return FS;case 35678:case 36198:case 36298:case 36306:case 35682:return OS;case 35679:case 36299:case 36307:return zS;case 35680:case 36300:case 36308:case 36293:return BS;case 36289:case 36303:case 36311:case 36292:return HS}}function GS(n,e){n.uniform1fv(this.addr,e)}function WS(n,e){const t=aa(e,this.size,2);n.uniform2fv(this.addr,t)}function XS(n,e){const t=aa(e,this.size,3);n.uniform3fv(this.addr,t)}function qS(n,e){const t=aa(e,this.size,4);n.uniform4fv(this.addr,t)}function $S(n,e){const t=aa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function YS(n,e){const t=aa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jS(n,e){const t=aa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ZS(n,e){n.uniform1iv(this.addr,e)}function KS(n,e){n.uniform2iv(this.addr,e)}function JS(n,e){n.uniform3iv(this.addr,e)}function QS(n,e){n.uniform4iv(this.addr,e)}function eM(n,e){n.uniform1uiv(this.addr,e)}function tM(n,e){n.uniform2uiv(this.addr,e)}function nM(n,e){n.uniform3uiv(this.addr,e)}function iM(n,e){n.uniform4uiv(this.addr,e)}function rM(n,e,t){const i=this.cache,r=e.length,s=ad(t,r);Vn(i,s)||(n.uniform1iv(this.addr,s),Gn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||gg,s[o])}function sM(n,e,t){const i=this.cache,r=e.length,s=ad(t,r);Vn(i,s)||(n.uniform1iv(this.addr,s),Gn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||_g,s[o])}function oM(n,e,t){const i=this.cache,r=e.length,s=ad(t,r);Vn(i,s)||(n.uniform1iv(this.addr,s),Gn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||xg,s[o])}function aM(n,e,t){const i=this.cache,r=e.length,s=ad(t,r);Vn(i,s)||(n.uniform1iv(this.addr,s),Gn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||vg,s[o])}function lM(n){switch(n){case 5126:return GS;case 35664:return WS;case 35665:return XS;case 35666:return qS;case 35674:return $S;case 35675:return YS;case 35676:return jS;case 5124:case 35670:return ZS;case 35667:case 35671:return KS;case 35668:case 35672:return JS;case 35669:case 35673:return QS;case 5125:return eM;case 36294:return tM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return oM;case 36289:case 36303:case 36311:case 36292:return aM}}class cM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=VS(t.type)}}class dM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lM(t.type)}}class uM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const tu=/(\w+)(\])?(\[|\.)?/g;function Dp(n,e){n.seq.push(e),n.map[e.id]=e}function hM(n,e,t){const i=n.name,r=i.length;for(tu.lastIndex=0;;){const s=tu.exec(i),o=tu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Dp(t,c===void 0?new cM(a,n,e):new dM(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new uM(a),Dp(t,u)),t=u}}}class Tc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);hM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ip(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const fM=37297;let pM=0;function mM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Lp=new At;function gM(n){$t._getMatrix(Lp,$t.workingColorSpace,n);const e=`mat3( ${Lp.elements.map(t=>t.toFixed(4))} )`;switch($t.getTransfer(n)){case kc:return[e,"LinearTransferOETF"];case tn:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Np(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+mM(n.getShaderSource(e),a)}else return s}function vM(n,e){const t=gM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _M(n,e){let t;switch(e){case Mv:t="Linear";break;case wv:t="Reinhard";break;case Ev:t="Cineon";break;case Tv:t="ACESFilmic";break;case Rv:t="AgX";break;case Cv:t="Neutral";break;case Av:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lc=new b;function xM(){$t.getLuminanceCoefficients(lc);const n=lc.x.toFixed(4),e=lc.y.toFixed(4),t=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function bM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function SM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ua(n){return n!==""}function Up(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MM=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(n){return n.replace(MM,EM)}const wM=new Map;function EM(n,e){let t=Ct[e];if(t===void 0){const i=wM.get(e);if(i!==void 0)t=Ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xh(t)}const TM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fp(n){return n.replace(TM,AM)}function AM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Op(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function RM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Om?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===nv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nr&&(e="SHADOWMAP_TYPE_VSM"),e}function CM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qo:case $o:e="ENVMAP_TYPE_CUBE";break;case sd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PM(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===$o&&(e="ENVMAP_MODE_REFRACTION"),e}function DM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case zm:e="ENVMAP_BLENDING_MULTIPLY";break;case bv:e="ENVMAP_BLENDING_MIX";break;case Sv:e="ENVMAP_BLENDING_ADD";break}return e}function IM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function LM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=RM(t),c=CM(t),d=PM(t),u=DM(t),h=IM(t),f=yM(t),m=bM(s),v=r.createProgram();let g,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ua).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ua).join(`
`),p.length>0&&(p+=`
`)):(g=[Op(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),p=[Op(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==os?"#define TONE_MAPPING":"",t.toneMapping!==os?Ct.tonemapping_pars_fragment:"",t.toneMapping!==os?_M("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,vM("linearToOutputTexel",t.outputColorSpace),xM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ua).join(`
`)),o=xh(o),o=Up(o,t),o=kp(o,t),a=xh(a),a=Up(a,t),a=kp(a,t),o=Fp(o),a=Fp(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Df?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=w+g+o,x=w+p+a,I=Ip(r,r.VERTEX_SHADER,_),D=Ip(r,r.FRAGMENT_SHADER,x);r.attachShader(v,I),r.attachShader(v,D),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(L){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(v)||"",k=r.getShaderInfoLog(I)||"",W=r.getShaderInfoLog(D)||"",q=F.trim(),j=k.trim(),re=W.trim();let X=!0,me=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,I,D);else{const Te=Np(r,I,"vertex"),Be=Np(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+q+`
`+Te+`
`+Be)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(j===""||re==="")&&(me=!1);me&&(L.diagnostics={runnable:X,programLog:q,vertexShader:{log:j,prefix:g},fragmentShader:{log:re,prefix:p}})}r.deleteShader(I),r.deleteShader(D),N=new Tc(r,v),S=SM(r,v)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,fM)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=D,this}let NM=0;class UM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kM(e),t.set(e,i)),i}}class kM{constructor(e){this.id=NM++,this.code=e,this.usedTimes=0}}function FM(n,e,t,i,r,s,o){const a=new Gh,l=new UM,c=new Set,d=[],u=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,L,F,k){const W=F.fog,q=k.geometry,j=S.isMeshStandardMaterial?F.environment:null,re=(S.isMeshStandardMaterial?t:e).get(S.envMap||j),X=re&&re.mapping===sd?re.image.height:null,me=m[S.type];S.precision!==null&&(f=r.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const Te=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Be=Te!==void 0?Te.length:0;let He=0;q.morphAttributes.position!==void 0&&(He=1),q.morphAttributes.normal!==void 0&&(He=2),q.morphAttributes.color!==void 0&&(He=3);let lt,Mt,te,Re;if(me){const Fe=Mr[me];lt=Fe.vertexShader,Mt=Fe.fragmentShader}else lt=S.vertexShader,Mt=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),Re=l.getFragmentShaderID(S);const oe=n.getRenderTarget(),Je=n.state.buffers.depth.getReversed(),ne=k.isInstancedMesh===!0,de=k.isBatchedMesh===!0,Q=!!S.map,ee=!!S.matcap,C=!!re,ge=!!S.aoMap,he=!!S.lightMap,Ce=!!S.bumpMap,pe=!!S.normalMap,Ve=!!S.displacementMap,ae=!!S.emissiveMap,Ae=!!S.metalnessMap,Se=!!S.roughnessMap,Ne=S.anisotropy>0,A=S.clearcoat>0,y=S.dispersion>0,z=S.iridescence>0,K=S.sheen>0,$=S.transmission>0,G=Ne&&!!S.anisotropyMap,Ue=A&&!!S.clearcoatMap,xe=A&&!!S.clearcoatNormalMap,Ge=A&&!!S.clearcoatRoughnessMap,Xe=z&&!!S.iridescenceMap,_e=z&&!!S.iridescenceThicknessMap,ke=K&&!!S.sheenColorMap,Qe=K&&!!S.sheenRoughnessMap,et=!!S.specularMap,Pe=!!S.specularColorMap,ut=!!S.specularIntensityMap,U=$&&!!S.transmissionMap,ye=$&&!!S.thicknessMap,be=!!S.gradientMap,qe=!!S.alphaMap,ce=S.alphaTest>0,se=!!S.alphaHash,$e=!!S.extensions;let ie=os;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ie=n.toneMapping);const Ye={shaderID:me,shaderType:S.type,shaderName:S.name,vertexShader:lt,fragmentShader:Mt,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:Re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:de,batchingColor:de&&k._colorsTexture!==null,instancing:ne,instancingColor:ne&&k.instanceColor!==null,instancingMorph:ne&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Yo,alphaToCoverage:!!S.alphaToCoverage,map:Q,matcap:ee,envMap:C,envMapMode:C&&re.mapping,envMapCubeUVHeight:X,aoMap:ge,lightMap:he,bumpMap:Ce,normalMap:pe,displacementMap:h&&Ve,emissiveMap:ae,normalMapObjectSpace:pe&&S.normalMapType===Nv,normalMapTangentSpace:pe&&S.normalMapType===Lv,metalnessMap:Ae,roughnessMap:Se,anisotropy:Ne,anisotropyMap:G,clearcoat:A,clearcoatMap:Ue,clearcoatNormalMap:xe,clearcoatRoughnessMap:Ge,dispersion:y,iridescence:z,iridescenceMap:Xe,iridescenceThicknessMap:_e,sheen:K,sheenColorMap:ke,sheenRoughnessMap:Qe,specularMap:et,specularColorMap:Pe,specularIntensityMap:ut,transmission:$,transmissionMap:U,thicknessMap:ye,gradientMap:be,opaque:S.transparent===!1&&S.blending===ko&&S.alphaToCoverage===!1,alphaMap:qe,alphaTest:ce,alphaHash:se,combine:S.combine,mapUv:Q&&v(S.map.channel),aoMapUv:ge&&v(S.aoMap.channel),lightMapUv:he&&v(S.lightMap.channel),bumpMapUv:Ce&&v(S.bumpMap.channel),normalMapUv:pe&&v(S.normalMap.channel),displacementMapUv:Ve&&v(S.displacementMap.channel),emissiveMapUv:ae&&v(S.emissiveMap.channel),metalnessMapUv:Ae&&v(S.metalnessMap.channel),roughnessMapUv:Se&&v(S.roughnessMap.channel),anisotropyMapUv:G&&v(S.anisotropyMap.channel),clearcoatMapUv:Ue&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:xe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&v(S.sheenRoughnessMap.channel),specularMapUv:et&&v(S.specularMap.channel),specularColorMapUv:Pe&&v(S.specularColorMap.channel),specularIntensityMapUv:ut&&v(S.specularIntensityMap.channel),transmissionMapUv:U&&v(S.transmissionMap.channel),thicknessMapUv:ye&&v(S.thicknessMap.channel),alphaMapUv:qe&&v(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(pe||Ne),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Q||qe),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Je,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:He,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ie,decodeVideoTexture:Q&&S.map.isVideoTexture===!0&&$t.getTransfer(S.map.colorSpace)===tn,decodeVideoTextureEmissive:ae&&S.emissiveMap.isVideoTexture===!0&&$t.getTransfer(S.emissiveMap.colorSpace)===tn,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pn,flipSided:S.side===Ci,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:$e&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&S.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(w(M,S),_(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function w(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=m[S.type];let L;if(M){const F=Mr[M];L=w_.clone(F.uniforms)}else L=S.uniforms;return L}function I(S,M){let L;for(let F=0,k=d.length;F<k;F++){const W=d[F];if(W.cacheKey===M){L=W,++L.usedTimes;break}}return L===void 0&&(L=new LM(n,M,S,s),d.push(L)),L}function D(S){if(--S.usedTimes===0){const M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function R(S){l.remove(S)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:I,releaseProgram:D,releaseShaderCache:R,programs:d,dispose:N}}function OM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function zM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,h,f,m,v,g){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},n[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),e++,p}function a(u,h,f,m,v,g){const p=o(u,h,f,m,v,g);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(u,h,f,m,v,g){const p=o(u,h,f,m,v,g);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(u,h){t.length>1&&t.sort(u||zM),i.length>1&&i.sort(h||zp),r.length>1&&r.sort(h||zp)}function d(){for(let u=e,h=n.length;u<h;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function BM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Bp,n.set(i,[o])):r>=s.length?(o=new Bp,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function HM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Ot};break;case"SpotLight":t={position:new b,direction:new b,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":t={color:new Ot,position:new b,halfWidth:new b,halfHeight:new b};break}return n[e.id]=t,t}}}function VM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let GM=0;function WM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function XM(n){const e=new HM,t=VM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new b);const r=new b,s=new zt,o=new zt;function a(c){let d=0,u=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,w=0,_=0,x=0,I=0,D=0,R=0;c.sort(WM);for(let S=0,M=c.length;S<M;S++){const L=c[S],F=L.color,k=L.intensity,W=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=F.r*k,u+=F.g*k,h+=F.b*k;else if(L.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(L.sh.coefficients[j],k);R++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const re=L.shadow,X=t.get(L);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=q,i.directionalShadowMatrix[f]=L.shadow.matrix,w++}i.directional[f]=j,f++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(F).multiplyScalar(k),j.distance=W,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,i.spot[v]=j;const re=L.shadow;if(L.map&&(i.spotLightMap[I]=L.map,I++,re.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[v]=re.matrix,L.castShadow){const X=t.get(L);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=q,x++}v++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(F).multiplyScalar(k),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=j,g++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){const re=L.shadow,X=t.get(L);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,X.shadowCameraNear=re.camera.near,X.shadowCameraFar=re.camera.far,i.pointShadow[m]=X,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=L.shadow.matrix,_++}i.point[m]=j,m++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(k),j.groundColor.copy(L.groundColor).multiplyScalar(k),i.hemi[p]=j,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==f||N.pointLength!==m||N.spotLength!==v||N.rectAreaLength!==g||N.hemiLength!==p||N.numDirectionalShadows!==w||N.numPointShadows!==_||N.numSpotShadows!==x||N.numSpotMaps!==I||N.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+I-D,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=R,N.directionalLength=f,N.pointLength=m,N.spotLength=v,N.rectAreaLength=g,N.hemiLength=p,N.numDirectionalShadows=w,N.numPointShadows=_,N.numSpotShadows=x,N.numSpotMaps=I,N.numLightProbes=R,i.version=GM++)}function l(c,d){let u=0,h=0,f=0,m=0,v=0;const g=d.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const _=c[p];if(_.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),u++}else if(_.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),f++}else if(_.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),h++}else if(_.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function Hp(n){const e=new XM(n),t=[],i=[];function r(d){c.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function qM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Hp(n),e.set(r,[a])):s>=o.length?(a=new Hp(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const $M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YM=`uniform sampler2D shadow_pass;
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
}`;function jM(n,e,t){let i=new Wh;const r=new ze,s=new ze,o=new Vt,a=new vx({depthPacking:Iv}),l=new _x,c={},d=t.maxTextureSize,u={[zr]:Ci,[Ci]:zr,[pn]:pn},h=new Br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:$M,fragmentShader:YM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new Bt;m.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new we(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Om;let p=this.type;this.render=function(D,R,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ss),F.buffers.depth.getReversed()?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=p!==Nr&&this.type===Nr,W=p===Nr&&this.type!==Nr;for(let q=0,j=D.length;q<j;q++){const re=D[q],X=re.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const me=X.getFrameExtents();if(r.multiply(me),s.copy(X.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/me.x),r.x=s.x*me.x,X.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/me.y),r.y=s.y*me.y,X.mapSize.y=s.y)),X.map===null||k===!0||W===!0){const Be=this.type!==Nr?{minFilter:Xi,magFilter:Xi}:{};X.map!==null&&X.map.dispose(),X.map=new Xs(r.x,r.y,Be),X.map.texture.name=re.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const Te=X.getViewportCount();for(let Be=0;Be<Te;Be++){const He=X.getViewport(Be);o.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),F.viewport(o),X.updateMatrices(re,Be),i=X.getFrustum(),x(R,N,X.camera,re,this.type)}X.isPointLightShadow!==!0&&this.type===Nr&&w(X,N),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(S,M,L)};function w(D,R){const N=e.update(v);h.defines.VSM_SAMPLES!==D.blurSamples&&(h.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Xs(r.x,r.y)),h.uniforms.shadow_pass.value=D.map.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(R,null,N,h,v,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(R,null,N,f,v,null)}function _(D,R,N,S){let M=null;const L=N.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(L!==void 0)M=L;else if(M=N.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=M.uuid,k=R.uuid;let W=c[F];W===void 0&&(W={},c[F]=W);let q=W[k];q===void 0&&(q=M.clone(),W[k]=q,R.addEventListener("dispose",I)),M=q}if(M.visible=R.visible,M.wireframe=R.wireframe,S===Nr?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=n.properties.get(M);F.light=N}return M}function x(D,R,N,S,M){if(D.visible===!1)return;if(D.layers.test(R.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===Nr)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,D.matrixWorld);const k=e.update(D),W=D.material;if(Array.isArray(W)){const q=k.groups;for(let j=0,re=q.length;j<re;j++){const X=q[j],me=W[X.materialIndex];if(me&&me.visible){const Te=_(D,me,S,M);D.onBeforeShadow(n,D,R,N,k,Te,X),n.renderBufferDirect(N,null,k,Te,D,X),D.onAfterShadow(n,D,R,N,k,Te,X)}}}else if(W.visible){const q=_(D,W,S,M);D.onBeforeShadow(n,D,R,N,k,q,null),n.renderBufferDirect(N,null,k,q,D,null),D.onAfterShadow(n,D,R,N,k,q,null)}}const F=D.children;for(let k=0,W=F.length;k<W;k++)x(F[k],R,N,S,M)}function I(D){D.target.removeEventListener("dispose",I);for(const N in c){const S=c[N],M=D.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const ZM={[Du]:Iu,[Lu]:ku,[Nu]:Fu,[Xo]:Uu,[Iu]:Du,[ku]:Lu,[Fu]:Nu,[Uu]:Xo};function KM(n,e){function t(){let U=!1;const ye=new Vt;let be=null;const qe=new Vt(0,0,0,0);return{setMask:function(ce){be!==ce&&!U&&(n.colorMask(ce,ce,ce,ce),be=ce)},setLocked:function(ce){U=ce},setClear:function(ce,se,$e,ie,Ye){Ye===!0&&(ce*=ie,se*=ie,$e*=ie),ye.set(ce,se,$e,ie),qe.equals(ye)===!1&&(n.clearColor(ce,se,$e,ie),qe.copy(ye))},reset:function(){U=!1,be=null,qe.set(-1,0,0,0)}}}function i(){let U=!1,ye=!1,be=null,qe=null,ce=null;return{setReversed:function(se){if(ye!==se){const $e=e.get("EXT_clip_control");se?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),ye=se;const ie=ce;ce=null,this.setClear(ie)}},getReversed:function(){return ye},setTest:function(se){se?oe(n.DEPTH_TEST):Je(n.DEPTH_TEST)},setMask:function(se){be!==se&&!U&&(n.depthMask(se),be=se)},setFunc:function(se){if(ye&&(se=ZM[se]),qe!==se){switch(se){case Du:n.depthFunc(n.NEVER);break;case Iu:n.depthFunc(n.ALWAYS);break;case Lu:n.depthFunc(n.LESS);break;case Xo:n.depthFunc(n.LEQUAL);break;case Nu:n.depthFunc(n.EQUAL);break;case Uu:n.depthFunc(n.GEQUAL);break;case ku:n.depthFunc(n.GREATER);break;case Fu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}qe=se}},setLocked:function(se){U=se},setClear:function(se){ce!==se&&(ye&&(se=1-se),n.clearDepth(se),ce=se)},reset:function(){U=!1,be=null,qe=null,ce=null,ye=!1}}}function r(){let U=!1,ye=null,be=null,qe=null,ce=null,se=null,$e=null,ie=null,Ye=null;return{setTest:function(Fe){U||(Fe?oe(n.STENCIL_TEST):Je(n.STENCIL_TEST))},setMask:function(Fe){ye!==Fe&&!U&&(n.stencilMask(Fe),ye=Fe)},setFunc:function(Fe,_t,Et){(be!==Fe||qe!==_t||ce!==Et)&&(n.stencilFunc(Fe,_t,Et),be=Fe,qe=_t,ce=Et)},setOp:function(Fe,_t,Et){(se!==Fe||$e!==_t||ie!==Et)&&(n.stencilOp(Fe,_t,Et),se=Fe,$e=_t,ie=Et)},setLocked:function(Fe){U=Fe},setClear:function(Fe){Ye!==Fe&&(n.clearStencil(Fe),Ye=Fe)},reset:function(){U=!1,ye=null,be=null,qe=null,ce=null,se=null,$e=null,ie=null,Ye=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,f=[],m=null,v=!1,g=null,p=null,w=null,_=null,x=null,I=null,D=null,R=new Ot(0,0,0),N=0,S=!1,M=null,L=null,F=null,k=null,W=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,re=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(X)[1]),j=re>=1):X.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),j=re>=2);let me=null,Te={};const Be=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),lt=new Vt().fromArray(Be),Mt=new Vt().fromArray(He);function te(U,ye,be,qe){const ce=new Uint8Array(4),se=n.createTexture();n.bindTexture(U,se),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<be;$e++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,qe,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(ye+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return se}const Re={};Re[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(Xo),Ce(!1),pe(Tf),oe(n.CULL_FACE),ge(ss);function oe(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function Je(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function ne(U,ye){return u[U]!==ye?(n.bindFramebuffer(U,ye),u[U]=ye,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ye),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function de(U,ye){let be=f,qe=!1;if(U){be=h.get(ye),be===void 0&&(be=[],h.set(ye,be));const ce=U.textures;if(be.length!==ce.length||be[0]!==n.COLOR_ATTACHMENT0){for(let se=0,$e=ce.length;se<$e;se++)be[se]=n.COLOR_ATTACHMENT0+se;be.length=ce.length,qe=!0}}else be[0]!==n.BACK&&(be[0]=n.BACK,qe=!0);qe&&n.drawBuffers(be)}function Q(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const ee={[Cs]:n.FUNC_ADD,[rv]:n.FUNC_SUBTRACT,[sv]:n.FUNC_REVERSE_SUBTRACT};ee[ov]=n.MIN,ee[av]=n.MAX;const C={[lv]:n.ZERO,[cv]:n.ONE,[dv]:n.SRC_COLOR,[Cu]:n.SRC_ALPHA,[gv]:n.SRC_ALPHA_SATURATE,[pv]:n.DST_COLOR,[hv]:n.DST_ALPHA,[uv]:n.ONE_MINUS_SRC_COLOR,[Pu]:n.ONE_MINUS_SRC_ALPHA,[mv]:n.ONE_MINUS_DST_COLOR,[fv]:n.ONE_MINUS_DST_ALPHA,[vv]:n.CONSTANT_COLOR,[_v]:n.ONE_MINUS_CONSTANT_COLOR,[xv]:n.CONSTANT_ALPHA,[yv]:n.ONE_MINUS_CONSTANT_ALPHA};function ge(U,ye,be,qe,ce,se,$e,ie,Ye,Fe){if(U===ss){v===!0&&(Je(n.BLEND),v=!1);return}if(v===!1&&(oe(n.BLEND),v=!0),U!==iv){if(U!==g||Fe!==S){if((p!==Cs||x!==Cs)&&(n.blendEquation(n.FUNC_ADD),p=Cs,x=Cs),Fe)switch(U){case ko:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ru:n.blendFunc(n.ONE,n.ONE);break;case Af:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ko:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ru:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Af:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,_=null,I=null,D=null,R.set(0,0,0),N=0,g=U,S=Fe}return}ce=ce||ye,se=se||be,$e=$e||qe,(ye!==p||ce!==x)&&(n.blendEquationSeparate(ee[ye],ee[ce]),p=ye,x=ce),(be!==w||qe!==_||se!==I||$e!==D)&&(n.blendFuncSeparate(C[be],C[qe],C[se],C[$e]),w=be,_=qe,I=se,D=$e),(ie.equals(R)===!1||Ye!==N)&&(n.blendColor(ie.r,ie.g,ie.b,Ye),R.copy(ie),N=Ye),g=U,S=!1}function he(U,ye){U.side===pn?Je(n.CULL_FACE):oe(n.CULL_FACE);let be=U.side===Ci;ye&&(be=!be),Ce(be),U.blending===ko&&U.transparent===!1?ge(ss):ge(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const qe=U.stencilWrite;a.setTest(qe),qe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Je(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(U){M!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),M=U)}function pe(U){U!==ev?(oe(n.CULL_FACE),U!==L&&(U===Tf?n.cullFace(n.BACK):U===tv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Je(n.CULL_FACE),L=U}function Ve(U){U!==F&&(j&&n.lineWidth(U),F=U)}function ae(U,ye,be){U?(oe(n.POLYGON_OFFSET_FILL),(k!==ye||W!==be)&&(n.polygonOffset(ye,be),k=ye,W=be)):Je(n.POLYGON_OFFSET_FILL)}function Ae(U){U?oe(n.SCISSOR_TEST):Je(n.SCISSOR_TEST)}function Se(U){U===void 0&&(U=n.TEXTURE0+q-1),me!==U&&(n.activeTexture(U),me=U)}function Ne(U,ye,be){be===void 0&&(me===null?be=n.TEXTURE0+q-1:be=me);let qe=Te[be];qe===void 0&&(qe={type:void 0,texture:void 0},Te[be]=qe),(qe.type!==U||qe.texture!==ye)&&(me!==be&&(n.activeTexture(be),me=be),n.bindTexture(U,ye||Re[U]),qe.type=U,qe.texture=ye)}function A(){const U=Te[me];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ge(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xe(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(U){lt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),lt.copy(U))}function Qe(U){Mt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Mt.copy(U))}function et(U,ye){let be=c.get(ye);be===void 0&&(be=new WeakMap,c.set(ye,be));let qe=be.get(U);qe===void 0&&(qe=n.getUniformBlockIndex(ye,U.name),be.set(U,qe))}function Pe(U,ye){const qe=c.get(ye).get(U);l.get(ye)!==qe&&(n.uniformBlockBinding(ye,qe,U.__bindingPointIndex),l.set(ye,qe))}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},me=null,Te={},u={},h=new WeakMap,f=[],m=null,v=!1,g=null,p=null,w=null,_=null,x=null,I=null,D=null,R=new Ot(0,0,0),N=0,S=!1,M=null,L=null,F=null,k=null,W=null,lt.set(0,0,n.canvas.width,n.canvas.height),Mt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Je,bindFramebuffer:ne,drawBuffers:de,useProgram:Q,setBlending:ge,setMaterial:he,setFlipSided:Ce,setCullFace:pe,setLineWidth:Ve,setPolygonOffset:ae,setScissorTest:Ae,activeTexture:Se,bindTexture:Ne,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:z,texImage2D:Xe,texImage3D:_e,updateUBOMapping:et,uniformBlockBinding:Pe,texStorage2D:xe,texStorage3D:Ge,texSubImage2D:K,texSubImage3D:$,compressedTexSubImage2D:G,compressedTexSubImage3D:Ue,scissor:ke,viewport:Qe,reset:ut}}function JM(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,y){return f?new OffscreenCanvas(A,y):zc("canvas")}function v(A,y,z){let K=1;const $=Ne(A);if(($.width>z||$.height>z)&&(K=z/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const G=Math.floor(K*$.width),Ue=Math.floor(K*$.height);u===void 0&&(u=m(G,Ue));const xe=y?m(G,Ue):u;return xe.width=G,xe.height=Ue,xe.getContext("2d").drawImage(A,0,0,G,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+G+"x"+Ue+")."),xe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(A,y,z,K,$=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let G=y;if(y===n.RED&&(z===n.FLOAT&&(G=n.R32F),z===n.HALF_FLOAT&&(G=n.R16F),z===n.UNSIGNED_BYTE&&(G=n.R8)),y===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(G=n.R8UI),z===n.UNSIGNED_SHORT&&(G=n.R16UI),z===n.UNSIGNED_INT&&(G=n.R32UI),z===n.BYTE&&(G=n.R8I),z===n.SHORT&&(G=n.R16I),z===n.INT&&(G=n.R32I)),y===n.RG&&(z===n.FLOAT&&(G=n.RG32F),z===n.HALF_FLOAT&&(G=n.RG16F),z===n.UNSIGNED_BYTE&&(G=n.RG8)),y===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(G=n.RG8UI),z===n.UNSIGNED_SHORT&&(G=n.RG16UI),z===n.UNSIGNED_INT&&(G=n.RG32UI),z===n.BYTE&&(G=n.RG8I),z===n.SHORT&&(G=n.RG16I),z===n.INT&&(G=n.RG32I)),y===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(G=n.RGB8UI),z===n.UNSIGNED_SHORT&&(G=n.RGB16UI),z===n.UNSIGNED_INT&&(G=n.RGB32UI),z===n.BYTE&&(G=n.RGB8I),z===n.SHORT&&(G=n.RGB16I),z===n.INT&&(G=n.RGB32I)),y===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),z===n.UNSIGNED_INT&&(G=n.RGBA32UI),z===n.BYTE&&(G=n.RGBA8I),z===n.SHORT&&(G=n.RGBA16I),z===n.INT&&(G=n.RGBA32I)),y===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),y===n.RGBA){const Ue=$?kc:$t.getTransfer(K);z===n.FLOAT&&(G=n.RGBA32F),z===n.HALF_FLOAT&&(G=n.RGBA16F),z===n.UNSIGNED_BYTE&&(G=Ue===tn?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function x(A,y){let z;return A?y===null||y===Ws||y===Ka?z=n.DEPTH24_STENCIL8:y===Er?z=n.DEPTH32F_STENCIL8:y===Za&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ws||y===Ka?z=n.DEPTH_COMPONENT24:y===Er?z=n.DEPTH_COMPONENT32F:y===Za&&(z=n.DEPTH_COMPONENT16),z}function I(A,y){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xi&&A.minFilter!==wr?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function D(A){const y=A.target;y.removeEventListener("dispose",D),N(y),y.isVideoTexture&&d.delete(y)}function R(A){const y=A.target;y.removeEventListener("dispose",R),M(y)}function N(A){const y=i.get(A);if(y.__webglInit===void 0)return;const z=A.source,K=h.get(z);if(K){const $=K[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(A),Object.keys(K).length===0&&h.delete(z)}i.remove(A)}function S(A){const y=i.get(A);n.deleteTexture(y.__webglTexture);const z=A.source,K=h.get(z);delete K[y.__cacheKey],o.memory.textures--}function M(A){const y=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let $=0;$<y.__webglFramebuffer[K].length;$++)n.deleteFramebuffer(y.__webglFramebuffer[K][$]);else n.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)n.deleteFramebuffer(y.__webglFramebuffer[K]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=A.textures;for(let K=0,$=z.length;K<$;K++){const G=i.get(z[K]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(z[K])}i.remove(A)}let L=0;function F(){L=0}function k(){const A=L;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function W(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function q(A,y){const z=i.get(A);if(A.isVideoTexture&&Ae(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(z,A,y);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+y)}function j(A,y){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Re(z,A,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+y)}function re(A,y){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Re(z,A,y);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+y)}function X(A,y){const z=i.get(A);if(A.version>0&&z.__version!==A.version){oe(z,A,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+y)}const me={[Bu]:n.REPEAT,[Ls]:n.CLAMP_TO_EDGE,[Hu]:n.MIRRORED_REPEAT},Te={[Xi]:n.NEAREST,[Pv]:n.NEAREST_MIPMAP_NEAREST,[Nl]:n.NEAREST_MIPMAP_LINEAR,[wr]:n.LINEAR,[bd]:n.LINEAR_MIPMAP_NEAREST,[Ns]:n.LINEAR_MIPMAP_LINEAR},Be={[Uv]:n.NEVER,[Hv]:n.ALWAYS,[kv]:n.LESS,[Ym]:n.LEQUAL,[Fv]:n.EQUAL,[Bv]:n.GEQUAL,[Ov]:n.GREATER,[zv]:n.NOTEQUAL};function He(A,y){if(y.type===Er&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===wr||y.magFilter===bd||y.magFilter===Nl||y.magFilter===Ns||y.minFilter===wr||y.minFilter===bd||y.minFilter===Nl||y.minFilter===Ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,me[y.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,me[y.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,me[y.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Te[y.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Te[y.minFilter]),y.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Be[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Xi||y.minFilter!==Nl&&y.minFilter!==Ns||y.type===Er&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function lt(A,y){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",D));const K=y.source;let $=h.get(K);$===void 0&&($={},h.set(K,$));const G=W(y);if(G!==A.__cacheKey){$[G]===void 0&&($[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),$[G].usedTimes++;const Ue=$[A.__cacheKey];Ue!==void 0&&($[A.__cacheKey].usedTimes--,Ue.usedTimes===0&&S(y)),A.__cacheKey=G,A.__webglTexture=$[G].texture}return z}function Mt(A,y,z){return Math.floor(Math.floor(A/z)/y)}function te(A,y,z,K){const G=A.updateRanges;if(G.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,z,K,y.data);else{G.sort((_e,ke)=>_e.start-ke.start);let Ue=0;for(let _e=1;_e<G.length;_e++){const ke=G[Ue],Qe=G[_e],et=ke.start+ke.count,Pe=Mt(Qe.start,y.width,4),ut=Mt(ke.start,y.width,4);Qe.start<=et+1&&Pe===ut&&Mt(Qe.start+Qe.count-1,y.width,4)===Pe?ke.count=Math.max(ke.count,Qe.start+Qe.count-ke.start):(++Ue,G[Ue]=Qe)}G.length=Ue+1;const xe=n.getParameter(n.UNPACK_ROW_LENGTH),Ge=n.getParameter(n.UNPACK_SKIP_PIXELS),Xe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let _e=0,ke=G.length;_e<ke;_e++){const Qe=G[_e],et=Math.floor(Qe.start/4),Pe=Math.ceil(Qe.count/4),ut=et%y.width,U=Math.floor(et/y.width),ye=Pe,be=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ut),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,ut,U,ye,be,z,K,y.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,xe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,Xe)}}function Re(A,y,z){let K=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=n.TEXTURE_3D);const $=lt(A,y),G=y.source;t.bindTexture(K,A.__webglTexture,n.TEXTURE0+z);const Ue=i.get(G);if(G.version!==Ue.__version||$===!0){t.activeTexture(n.TEXTURE0+z);const xe=$t.getPrimaries($t.workingColorSpace),Ge=y.colorSpace===ns?null:$t.getPrimaries(y.colorSpace),Xe=y.colorSpace===ns||xe===Ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let _e=v(y.image,!1,r.maxTextureSize);_e=Se(y,_e);const ke=s.convert(y.format,y.colorSpace),Qe=s.convert(y.type);let et=_(y.internalFormat,ke,Qe,y.colorSpace,y.isVideoTexture);He(K,y);let Pe;const ut=y.mipmaps,U=y.isVideoTexture!==!0,ye=Ue.__version===void 0||$===!0,be=G.dataReady,qe=I(y,_e);if(y.isDepthTexture)et=x(y.format===Qa,y.type),ye&&(U?t.texStorage2D(n.TEXTURE_2D,1,et,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,et,_e.width,_e.height,0,ke,Qe,null));else if(y.isDataTexture)if(ut.length>0){U&&ye&&t.texStorage2D(n.TEXTURE_2D,qe,et,ut[0].width,ut[0].height);for(let ce=0,se=ut.length;ce<se;ce++)Pe=ut[ce],U?be&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,ke,Qe,Pe.data):t.texImage2D(n.TEXTURE_2D,ce,et,Pe.width,Pe.height,0,ke,Qe,Pe.data);y.generateMipmaps=!1}else U?(ye&&t.texStorage2D(n.TEXTURE_2D,qe,et,_e.width,_e.height),be&&te(y,_e,ke,Qe)):t.texImage2D(n.TEXTURE_2D,0,et,_e.width,_e.height,0,ke,Qe,_e.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,et,ut[0].width,ut[0].height,_e.depth);for(let ce=0,se=ut.length;ce<se;ce++)if(Pe=ut[ce],y.format!==fr)if(ke!==null)if(U){if(be)if(y.layerUpdates.size>0){const $e=vp(Pe.width,Pe.height,y.format,y.type);for(const ie of y.layerUpdates){const Ye=Pe.data.subarray(ie*$e/Pe.data.BYTES_PER_ELEMENT,(ie+1)*$e/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,ie,Pe.width,Pe.height,1,ke,Ye)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,_e.depth,ke,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,et,Pe.width,Pe.height,_e.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,_e.depth,ke,Qe,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,et,Pe.width,Pe.height,_e.depth,0,ke,Qe,Pe.data)}else{U&&ye&&t.texStorage2D(n.TEXTURE_2D,qe,et,ut[0].width,ut[0].height);for(let ce=0,se=ut.length;ce<se;ce++)Pe=ut[ce],y.format!==fr?ke!==null?U?be&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,ke,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,et,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?be&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,ke,Qe,Pe.data):t.texImage2D(n.TEXTURE_2D,ce,et,Pe.width,Pe.height,0,ke,Qe,Pe.data)}else if(y.isDataArrayTexture)if(U){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,qe,et,_e.width,_e.height,_e.depth),be)if(y.layerUpdates.size>0){const ce=vp(_e.width,_e.height,y.format,y.type);for(const se of y.layerUpdates){const $e=_e.data.subarray(se*ce/_e.data.BYTES_PER_ELEMENT,(se+1)*ce/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,_e.width,_e.height,1,ke,Qe,$e)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,ke,Qe,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,et,_e.width,_e.height,_e.depth,0,ke,Qe,_e.data);else if(y.isData3DTexture)U?(ye&&t.texStorage3D(n.TEXTURE_3D,qe,et,_e.width,_e.height,_e.depth),be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,ke,Qe,_e.data)):t.texImage3D(n.TEXTURE_3D,0,et,_e.width,_e.height,_e.depth,0,ke,Qe,_e.data);else if(y.isFramebufferTexture){if(ye)if(U)t.texStorage2D(n.TEXTURE_2D,qe,et,_e.width,_e.height);else{let ce=_e.width,se=_e.height;for(let $e=0;$e<qe;$e++)t.texImage2D(n.TEXTURE_2D,$e,et,ce,se,0,ke,Qe,null),ce>>=1,se>>=1}}else if(ut.length>0){if(U&&ye){const ce=Ne(ut[0]);t.texStorage2D(n.TEXTURE_2D,qe,et,ce.width,ce.height)}for(let ce=0,se=ut.length;ce<se;ce++)Pe=ut[ce],U?be&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ke,Qe,Pe):t.texImage2D(n.TEXTURE_2D,ce,et,ke,Qe,Pe);y.generateMipmaps=!1}else if(U){if(ye){const ce=Ne(_e);t.texStorage2D(n.TEXTURE_2D,qe,et,ce.width,ce.height)}be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ke,Qe,_e)}else t.texImage2D(n.TEXTURE_2D,0,et,ke,Qe,_e);g(y)&&p(K),Ue.__version=G.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function oe(A,y,z){if(y.image.length!==6)return;const K=lt(A,y),$=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);const G=i.get($);if($.version!==G.__version||K===!0){t.activeTexture(n.TEXTURE0+z);const Ue=$t.getPrimaries($t.workingColorSpace),xe=y.colorSpace===ns?null:$t.getPrimaries(y.colorSpace),Ge=y.colorSpace===ns||Ue===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const Xe=y.isCompressedTexture||y.image[0].isCompressedTexture,_e=y.image[0]&&y.image[0].isDataTexture,ke=[];for(let se=0;se<6;se++)!Xe&&!_e?ke[se]=v(y.image[se],!0,r.maxCubemapSize):ke[se]=_e?y.image[se].image:y.image[se],ke[se]=Se(y,ke[se]);const Qe=ke[0],et=s.convert(y.format,y.colorSpace),Pe=s.convert(y.type),ut=_(y.internalFormat,et,Pe,y.colorSpace),U=y.isVideoTexture!==!0,ye=G.__version===void 0||K===!0,be=$.dataReady;let qe=I(y,Qe);He(n.TEXTURE_CUBE_MAP,y);let ce;if(Xe){U&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,ut,Qe.width,Qe.height);for(let se=0;se<6;se++){ce=ke[se].mipmaps;for(let $e=0;$e<ce.length;$e++){const ie=ce[$e];y.format!==fr?et!==null?U?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e,0,0,ie.width,ie.height,et,ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e,ut,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e,0,0,ie.width,ie.height,et,Pe,ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e,ut,ie.width,ie.height,0,et,Pe,ie.data)}}}else{if(ce=y.mipmaps,U&&ye){ce.length>0&&qe++;const se=Ne(ke[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,qe,ut,se.width,se.height)}for(let se=0;se<6;se++)if(_e){U?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ke[se].width,ke[se].height,et,Pe,ke[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ut,ke[se].width,ke[se].height,0,et,Pe,ke[se].data);for(let $e=0;$e<ce.length;$e++){const Ye=ce[$e].image[se].image;U?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e+1,0,0,Ye.width,Ye.height,et,Pe,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e+1,ut,Ye.width,Ye.height,0,et,Pe,Ye.data)}}else{U?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,et,Pe,ke[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ut,et,Pe,ke[se]);for(let $e=0;$e<ce.length;$e++){const ie=ce[$e];U?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e+1,0,0,et,Pe,ie.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,$e+1,ut,et,Pe,ie.image[se])}}}g(y)&&p(n.TEXTURE_CUBE_MAP),G.__version=$.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Je(A,y,z,K,$,G){const Ue=s.convert(z.format,z.colorSpace),xe=s.convert(z.type),Ge=_(z.internalFormat,Ue,xe,z.colorSpace),Xe=i.get(y),_e=i.get(z);if(_e.__renderTarget=y,!Xe.__hasExternalTextures){const ke=Math.max(1,y.width>>G),Qe=Math.max(1,y.height>>G);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,G,Ge,ke,Qe,y.depth,0,Ue,xe,null):t.texImage2D($,G,Ge,ke,Qe,0,Ue,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ae(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,$,_e.__webglTexture,0,Ve(y)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,$,_e.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(A,y,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),y.depthBuffer){const K=y.depthTexture,$=K&&K.isDepthTexture?K.type:null,G=x(y.stencilBuffer,$),Ue=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=Ve(y);ae(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,G,y.width,y.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,G,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,G,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ue,n.RENDERBUFFER,A)}else{const K=y.textures;for(let $=0;$<K.length;$++){const G=K[$],Ue=s.convert(G.format,G.colorSpace),xe=s.convert(G.type),Ge=_(G.internalFormat,Ue,xe,G.colorSpace),Xe=Ve(y);z&&ae(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Ge,y.width,y.height):ae(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe,Ge,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Ge,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q(y.depthTexture,0);const $=K.__webglTexture,G=Ve(y);if(y.depthTexture.format===Ja)ae(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(y.depthTexture.format===Qa)ae(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Q(A){const y=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=K}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const K=A.texture.mipmaps;K&&K.length>0?de(y.__webglFramebuffer[0],A):de(y.__webglFramebuffer,A)}else if(z){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=n.createRenderbuffer(),ne(y.__webglDepthbuffer[K],A,!1);else{const $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,G)}}else{const K=A.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ne(y.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,G)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(A,y,z){const K=i.get(A);y!==void 0&&Je(K.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Q(A)}function C(A){const y=A.texture,z=i.get(A),K=i.get(y);A.addEventListener("dispose",R);const $=A.textures,G=A.isWebGLCubeRenderTarget===!0,Ue=$.length>1;if(Ue||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=y.version,o.memory.textures++),G){z.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[xe]=[];for(let Ge=0;Ge<y.mipmaps.length;Ge++)z.__webglFramebuffer[xe][Ge]=n.createFramebuffer()}else z.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let xe=0;xe<y.mipmaps.length;xe++)z.__webglFramebuffer[xe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ue)for(let xe=0,Ge=$.length;xe<Ge;xe++){const Xe=i.get($[xe]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&ae(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xe=0;xe<$.length;xe++){const Ge=$[xe];z.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[xe]);const Xe=s.convert(Ge.format,Ge.colorSpace),_e=s.convert(Ge.type),ke=_(Ge.internalFormat,Xe,_e,Ge.colorSpace,A.isXRRenderTarget===!0),Qe=Ve(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,ke,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,z.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),He(n.TEXTURE_CUBE_MAP,y);for(let xe=0;xe<6;xe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ge=0;Ge<y.mipmaps.length;Ge++)Je(z.__webglFramebuffer[xe][Ge],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ge);else Je(z.__webglFramebuffer[xe],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);g(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let xe=0,Ge=$.length;xe<Ge;xe++){const Xe=$[xe],_e=i.get(Xe);let ke=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ke=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ke,_e.__webglTexture),He(ke,Xe),Je(z.__webglFramebuffer,A,Xe,n.COLOR_ATTACHMENT0+xe,ke,0),g(Xe)&&p(ke)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,K.__webglTexture),He(xe,y),y.mipmaps&&y.mipmaps.length>0)for(let Ge=0;Ge<y.mipmaps.length;Ge++)Je(z.__webglFramebuffer[Ge],A,y,n.COLOR_ATTACHMENT0,xe,Ge);else Je(z.__webglFramebuffer,A,y,n.COLOR_ATTACHMENT0,xe,0);g(y)&&p(xe),t.unbindTexture()}A.depthBuffer&&Q(A)}function ge(A){const y=A.textures;for(let z=0,K=y.length;z<K;z++){const $=y[z];if(g($)){const G=w(A),Ue=i.get($).__webglTexture;t.bindTexture(G,Ue),p(G),t.unbindTexture()}}}const he=[],Ce=[];function pe(A){if(A.samples>0){if(ae(A)===!1){const y=A.textures,z=A.width,K=A.height;let $=n.COLOR_BUFFER_BIT;const G=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ue=i.get(A),xe=y.length>1;if(xe)for(let Xe=0;Xe<y.length;Xe++)t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Ge=A.texture.mipmaps;Ge&&Ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Xe=0;Xe<y.length;Xe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),xe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Xe]);const _e=i.get(y[Xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,z,K,0,0,z,K,$,n.NEAREST),l===!0&&(he.length=0,Ce.length=0,he.push(n.COLOR_ATTACHMENT0+Xe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(he.push(G),Ce.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let Xe=0;Xe<y.length;Xe++){t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Xe]);const _e=i.get(y[Xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ve(A){return Math.min(r.maxSamples,A.samples)}function ae(A){const y=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ae(A){const y=o.render.frame;d.get(A)!==y&&(d.set(A,y),A.update())}function Se(A,y){const z=A.colorSpace,K=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Yo&&z!==ns&&($t.getTransfer(z)===tn?(K!==fr||$!==Ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function Ne(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=j,this.setTexture3D=re,this.setTextureCube=X,this.rebindTextures=ee,this.setupRenderTarget=C,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=ae}function QM(n,e){function t(i,r=ns){let s;const o=$t.getTransfer(r);if(i===Ar)return n.UNSIGNED_BYTE;if(i===Uh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===kh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hm)return n.BYTE;if(i===Vm)return n.SHORT;if(i===Za)return n.UNSIGNED_SHORT;if(i===Nh)return n.INT;if(i===Ws)return n.UNSIGNED_INT;if(i===Er)return n.FLOAT;if(i===Ml)return n.HALF_FLOAT;if(i===Wm)return n.ALPHA;if(i===Xm)return n.RGB;if(i===fr)return n.RGBA;if(i===Ja)return n.DEPTH_COMPONENT;if(i===Qa)return n.DEPTH_STENCIL;if(i===Fh)return n.RED;if(i===Oh)return n.RED_INTEGER;if(i===qm)return n.RG;if(i===zh)return n.RG_INTEGER;if(i===Bh)return n.RGBA_INTEGER;if(i===bc||i===Sc||i===Mc||i===wc)if(o===tn)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vu||i===Gu||i===Wu||i===Xu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qu||i===$u||i===Yu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===qu||i===$u)return o===tn?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yu)return o===tn?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ju||i===Zu||i===Ku||i===Ju||i===Qu||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===lh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ju)return o===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zu)return o===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ku)return o===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ju)return o===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qu)return o===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===eh)return o===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===th)return o===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nh)return o===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ih)return o===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rh)return o===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sh)return o===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oh)return o===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ah)return o===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lh)return o===tn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ec||i===ch||i===dh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ec)return o===tn?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ch)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$m||i===uh||i===hh||i===fh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ec)return s.COMPRESSED_RED_RGTC1_EXT;if(i===uh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ka?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class yg extends Si{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const ew=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tw=`
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

}`;class nw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new yg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Br({vertexShader:ew,fragmentShader:tw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iw extends to{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,m=null;const v=new nw,g={},p=t.getContextAttributes();let w=null,_=null;const x=[],I=[],D=new ze;let R=null;const N=new Bi;N.viewport=new Vt;const S=new Bi;S.viewport=new Vt;const M=[N,S],L=new wx;let F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let Re=x[te];return Re===void 0&&(Re=new Vd,x[te]=Re),Re.getTargetRaySpace()},this.getControllerGrip=function(te){let Re=x[te];return Re===void 0&&(Re=new Vd,x[te]=Re),Re.getGripSpace()},this.getHand=function(te){let Re=x[te];return Re===void 0&&(Re=new Vd,x[te]=Re),Re.getHandSpace()};function W(te){const Re=I.indexOf(te.inputSource);if(Re===-1)return;const oe=x[Re];oe!==void 0&&(oe.update(te.inputSource,te.frame,c||o),oe.dispatchEvent({type:te.type,data:te.inputSource}))}function q(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",j);for(let te=0;te<x.length;te++){const Re=I[te];Re!==null&&(I[te]=null,x[te].disconnect(Re))}F=null,k=null,v.reset();for(const te in g)delete g[te];e.setRenderTarget(w),f=null,h=null,u=null,r=null,_=null,Mt.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",q),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(r,t)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Je=null,ne=null;p.depth&&(ne=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=p.stencil?Qa:Ja,Je=p.stencil?Ka:Ws);const de={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};h=u.createProjectionLayer(de),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Xs(h.textureWidth,h.textureHeight,{format:fr,type:Ar,depthTexture:new rg(h.textureWidth,h.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const oe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Xs(f.framebufferWidth,f.framebufferHeight,{format:fr,type:Ar,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Mt.setContext(r),Mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(te){for(let Re=0;Re<te.removed.length;Re++){const oe=te.removed[Re],Je=I.indexOf(oe);Je>=0&&(I[Je]=null,x[Je].disconnect(oe))}for(let Re=0;Re<te.added.length;Re++){const oe=te.added[Re];let Je=I.indexOf(oe);if(Je===-1){for(let de=0;de<x.length;de++)if(de>=I.length){I.push(oe),Je=de;break}else if(I[de]===null){I[de]=oe,Je=de;break}if(Je===-1)break}const ne=x[Je];ne&&ne.connect(oe)}}const re=new b,X=new b;function me(te,Re,oe){re.setFromMatrixPosition(Re.matrixWorld),X.setFromMatrixPosition(oe.matrixWorld);const Je=re.distanceTo(X),ne=Re.projectionMatrix.elements,de=oe.projectionMatrix.elements,Q=ne[14]/(ne[10]-1),ee=ne[14]/(ne[10]+1),C=(ne[9]+1)/ne[5],ge=(ne[9]-1)/ne[5],he=(ne[8]-1)/ne[0],Ce=(de[8]+1)/de[0],pe=Q*he,Ve=Q*Ce,ae=Je/(-he+Ce),Ae=ae*-he;if(Re.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ae),te.translateZ(ae),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ne[10]===-1)te.projectionMatrix.copy(Re.projectionMatrix),te.projectionMatrixInverse.copy(Re.projectionMatrixInverse);else{const Se=Q+ae,Ne=ee+ae,A=pe-Ae,y=Ve+(Je-Ae),z=C*ee/Ne*Se,K=ge*ee/Ne*Se;te.projectionMatrix.makePerspective(A,y,z,K,Se,Ne),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Te(te,Re){Re===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(Re.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let Re=te.near,oe=te.far;v.texture!==null&&(v.depthNear>0&&(Re=v.depthNear),v.depthFar>0&&(oe=v.depthFar)),L.near=S.near=N.near=Re,L.far=S.far=N.far=oe,(F!==L.near||k!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,k=L.far),L.layers.mask=te.layers.mask|6,N.layers.mask=L.layers.mask&3,S.layers.mask=L.layers.mask&5;const Je=te.parent,ne=L.cameras;Te(L,Je);for(let de=0;de<ne.length;de++)Te(ne[de],Je);ne.length===2?me(L,N,S):L.projectionMatrix.copy(N.projectionMatrix),Be(te,L,Je)};function Be(te,Re,oe){oe===null?te.matrix.copy(Re.matrixWorld):(te.matrix.copy(oe.matrixWorld),te.matrix.invert(),te.matrix.multiply(Re.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(Re.projectionMatrix),te.projectionMatrixInverse.copy(Re.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=el*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(L)},this.getCameraTexture=function(te){return g[te]};let He=null;function lt(te,Re){if(d=Re.getViewerPose(c||o),m=Re,d!==null){const oe=d.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Je=!1;oe.length!==L.cameras.length&&(L.cameras.length=0,Je=!0);for(let ee=0;ee<oe.length;ee++){const C=oe[ee];let ge=null;if(f!==null)ge=f.getViewport(C);else{const Ce=u.getViewSubImage(h,C);ge=Ce.viewport,ee===0&&(e.setRenderTargetTextures(_,Ce.colorTexture,Ce.depthStencilTexture),e.setRenderTarget(_))}let he=M[ee];he===void 0&&(he=new Bi,he.layers.enable(ee),he.viewport=new Vt,M[ee]=he),he.matrix.fromArray(C.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(C.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ge.x,ge.y,ge.width,ge.height),ee===0&&(L.matrix.copy(he.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Je===!0&&L.cameras.push(he)}const ne=r.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const ee=u.getDepthInformation(oe[0]);ee&&ee.isValid&&ee.texture&&v.init(ee,r.renderState)}if(ne&&ne.includes("camera-access")&&(e.state.unbindTexture(),u))for(let ee=0;ee<oe.length;ee++){const C=oe[ee].camera;if(C){let ge=g[C];ge||(ge=new yg,g[C]=ge);const he=u.getCameraImage(C);ge.sourceTexture=he}}}for(let oe=0;oe<x.length;oe++){const Je=I[oe],ne=x[oe];Je!==null&&ne!==void 0&&ne.update(Je,Re,c||o)}He&&He(te,Re),Re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Re}),m=null}const Mt=new mg;Mt.setAnimationLoop(lt),this.setAnimationLoop=function(te){He=te},this.dispose=function(){}}}const Ms=new En,rw=new zt;function sw(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,eg(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,w,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),d(g,p)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,w,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ci&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ci&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const w=e.get(p),_=w.envMap,x=w.envMapRotation;_&&(g.envMap.value=_,Ms.copy(x),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),g.envMapRotation.value.setFromMatrix4(rw.makeRotationFromEuler(Ms)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,w,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ci&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const w=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ow(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,_){const x=_.program;i.uniformBlockBinding(w,x)}function c(w,_){let x=r[w.id];x===void 0&&(m(w),x=d(w),r[w.id]=x,w.addEventListener("dispose",g));const I=_.program;i.updateUBOMapping(w,I);const D=e.render.frame;s[w.id]!==D&&(h(w),s[w.id]=D)}function d(w){const _=u();w.__bindingPointIndex=_;const x=n.createBuffer(),I=w.__size,D=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,I,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,x),x}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const _=r[w.id],x=w.uniforms,I=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let D=0,R=x.length;D<R;D++){const N=Array.isArray(x[D])?x[D]:[x[D]];for(let S=0,M=N.length;S<M;S++){const L=N[S];if(f(L,D,S,I)===!0){const F=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let q=0;q<k.length;q++){const j=k[q],re=v(j);typeof j=="number"||typeof j=="boolean"?(L.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,F+W,L.__data)):j.isMatrix3?(L.__data[0]=j.elements[0],L.__data[1]=j.elements[1],L.__data[2]=j.elements[2],L.__data[3]=0,L.__data[4]=j.elements[3],L.__data[5]=j.elements[4],L.__data[6]=j.elements[5],L.__data[7]=0,L.__data[8]=j.elements[6],L.__data[9]=j.elements[7],L.__data[10]=j.elements[8],L.__data[11]=0):(j.toArray(L.__data,W),W+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,_,x,I){const D=w.value,R=_+"_"+x;if(I[R]===void 0)return typeof D=="number"||typeof D=="boolean"?I[R]=D:I[R]=D.clone(),!0;{const N=I[R];if(typeof D=="number"||typeof D=="boolean"){if(N!==D)return I[R]=D,!0}else if(N.equals(D)===!1)return N.copy(D),!0}return!1}function m(w){const _=w.uniforms;let x=0;const I=16;for(let R=0,N=_.length;R<N;R++){const S=Array.isArray(_[R])?_[R]:[_[R]];for(let M=0,L=S.length;M<L;M++){const F=S[M],k=Array.isArray(F.value)?F.value:[F.value];for(let W=0,q=k.length;W<q;W++){const j=k[W],re=v(j),X=x%I,me=X%re.boundary,Te=X+me;x+=me,Te!==0&&I-Te<re.storage&&(x+=I-Te),F.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=re.storage}}}const D=x%I;return D>0&&(x+=I-D),w.__size=x,w.__cache={},this}function v(w){const _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function g(w){const _=w.target;_.removeEventListener("dispose",g);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class aw{constructor(e={}){const{canvas:t=r_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const w=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=os,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let I=!1;this._outputColorSpace=yi;let D=0,R=0,N=null,S=-1,M=null;const L=new Vt,F=new Vt;let k=null;const W=new Ot(0);let q=0,j=t.width,re=t.height,X=1,me=null,Te=null;const Be=new Vt(0,0,j,re),He=new Vt(0,0,j,re);let lt=!1;const Mt=new Wh;let te=!1,Re=!1;const oe=new zt,Je=new b,ne=new Vt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function ee(){return N===null?X:1}let C=i;function ge(E,H){return t.getContext(E,H)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lh}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",ce,!1),C===null){const H="webgl2";if(C=ge(H,E),C===null)throw ge(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let he,Ce,pe,Ve,ae,Ae,Se,Ne,A,y,z,K,$,G,Ue,xe,Ge,Xe,_e,ke,Qe,et,Pe,ut;function U(){he=new vS(C),he.init(),et=new QM(C,he),Ce=new dS(C,he,e,et),pe=new KM(C,he),Ce.reversedDepthBuffer&&h&&pe.buffers.depth.setReversed(!0),Ve=new yS(C),ae=new OM,Ae=new JM(C,he,pe,ae,Ce,et,Ve),Se=new hS(x),Ne=new gS(x),A=new Tx(C),Pe=new lS(C,A),y=new _S(C,A,Ve,Pe),z=new SS(C,y,A,Ve),_e=new bS(C,Ce,Ae),xe=new uS(ae),K=new FM(x,Se,Ne,he,Ce,Pe,xe),$=new sw(x,ae),G=new BM,Ue=new qM(he),Xe=new aS(x,Se,Ne,pe,z,f,l),Ge=new jM(x,z,Ce),ut=new ow(C,Ve,Ce,pe),ke=new cS(C,he,Ve),Qe=new xS(C,he,Ve),Ve.programs=K.programs,x.capabilities=Ce,x.extensions=he,x.properties=ae,x.renderLists=G,x.shadowMap=Ge,x.state=pe,x.info=Ve}U();const ye=new iw(x,C);this.xr=ye,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=he.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=he.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(j,re,!1))},this.getSize=function(E){return E.set(j,re)},this.setSize=function(E,H,Z=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,re=H,t.width=Math.floor(E*X),t.height=Math.floor(H*X),Z===!0&&(t.style.width=E+"px",t.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(j*X,re*X).floor()},this.setDrawingBufferSize=function(E,H,Z){j=E,re=H,X=Z,t.width=Math.floor(E*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(Be)},this.setViewport=function(E,H,Z,J){E.isVector4?Be.set(E.x,E.y,E.z,E.w):Be.set(E,H,Z,J),pe.viewport(L.copy(Be).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(He)},this.setScissor=function(E,H,Z,J){E.isVector4?He.set(E.x,E.y,E.z,E.w):He.set(E,H,Z,J),pe.scissor(F.copy(He).multiplyScalar(X).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(E){pe.setScissorTest(lt=E)},this.setOpaqueSort=function(E){me=E},this.setTransparentSort=function(E){Te=E},this.getClearColor=function(E){return E.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,Z=!0){let J=0;if(E){let V=!1;if(N!==null){const Me=N.texture.format;V=Me===Bh||Me===zh||Me===Oh}if(V){const Me=N.texture.type,Ie=Me===Ar||Me===Ws||Me===Za||Me===Ka||Me===Uh||Me===kh,nt=Xe.getClearColor(),Ze=Xe.getClearAlpha(),pt=nt.r,xt=nt.g,ct=nt.b;Ie?(m[0]=pt,m[1]=xt,m[2]=ct,m[3]=Ze,C.clearBufferuiv(C.COLOR,0,m)):(v[0]=pt,v[1]=xt,v[2]=ct,v[3]=Ze,C.clearBufferiv(C.COLOR,0,v))}else J|=C.COLOR_BUFFER_BIT}H&&(J|=C.DEPTH_BUFFER_BIT),Z&&(J|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Xe.dispose(),G.dispose(),Ue.dispose(),ae.dispose(),Se.dispose(),Ne.dispose(),z.dispose(),Pe.dispose(),ut.dispose(),K.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Et),ye.removeEventListener("sessionend",hi),rr.stop()};function be(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function qe(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const E=Ve.autoReset,H=Ge.enabled,Z=Ge.autoUpdate,J=Ge.needsUpdate,V=Ge.type;U(),Ve.autoReset=E,Ge.enabled=H,Ge.autoUpdate=Z,Ge.needsUpdate=J,Ge.type=V}function ce(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function se(E){const H=E.target;H.removeEventListener("dispose",se),$e(H)}function $e(E){ie(E),ae.remove(E)}function ie(E){const H=ae.get(E).programs;H!==void 0&&(H.forEach(function(Z){K.releaseProgram(Z)}),E.isShaderMaterial&&K.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,Z,J,V,Me){H===null&&(H=de);const Ie=V.isMesh&&V.matrixWorld.determinant()<0,nt=ao(E,H,Z,J,V);pe.setMaterial(J,Ie);let Ze=Z.index,pt=1;if(J.wireframe===!0){if(Ze=y.getWireframeAttribute(Z),Ze===void 0)return;pt=2}const xt=Z.drawRange,ct=Z.attributes.position;let yt=xt.start*pt,kt=(xt.start+xt.count)*pt;Me!==null&&(yt=Math.max(yt,Me.start*pt),kt=Math.min(kt,(Me.start+Me.count)*pt)),Ze!==null?(yt=Math.max(yt,0),kt=Math.min(kt,Ze.count)):ct!=null&&(yt=Math.max(yt,0),kt=Math.min(kt,ct.count));const Jt=kt-yt;if(Jt<0||Jt===1/0)return;Pe.setup(V,J,nt,Z,Ze);let Xt,qt=ke;if(Ze!==null&&(Xt=A.get(Ze),qt=Qe,qt.setIndex(Xt)),V.isMesh)J.wireframe===!0?(pe.setLineWidth(J.wireframeLinewidth*ee()),qt.setMode(C.LINES)):qt.setMode(C.TRIANGLES);else if(V.isLine){let vt=J.linewidth;vt===void 0&&(vt=1),pe.setLineWidth(vt*ee()),V.isLineSegments?qt.setMode(C.LINES):V.isLineLoop?qt.setMode(C.LINE_LOOP):qt.setMode(C.LINE_STRIP)}else V.isPoints?qt.setMode(C.POINTS):V.isSprite&&qt.setMode(C.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Fo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),qt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))qt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const vt=V._multiDrawStarts,dn=V._multiDrawCounts,Ft=V._multiDrawCount,mi=Ze?A.get(Ze).bytesPerElement:1,Wr=ae.get(J).currentProgram.getUniforms();for(let Ln=0;Ln<Ft;Ln++)Wr.setValue(C,"_gl_DrawID",Ln),qt.render(vt[Ln]/mi,dn[Ln])}else if(V.isInstancedMesh)qt.renderInstances(yt,Jt,V.count);else if(Z.isInstancedBufferGeometry){const vt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,dn=Math.min(Z.instanceCount,vt);qt.renderInstances(yt,Jt,dn)}else qt.render(yt,Jt)};function Ye(E,H,Z){E.transparent===!0&&E.side===pn&&E.forceSinglePass===!1?(E.side=Ci,E.needsUpdate=!0,gs(E,H,Z),E.side=zr,E.needsUpdate=!0,gs(E,H,Z),E.side=pn):gs(E,H,Z)}this.compile=function(E,H,Z=null){Z===null&&(Z=E),p=Ue.get(Z),p.init(H),_.push(p),Z.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),E!==Z&&E.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const J=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Me=V.material;if(Me)if(Array.isArray(Me))for(let Ie=0;Ie<Me.length;Ie++){const nt=Me[Ie];Ye(nt,Z,V),J.add(nt)}else Ye(Me,Z,V),J.add(Me)}),p=_.pop(),J},this.compileAsync=function(E,H,Z=null){const J=this.compile(E,H,Z);return new Promise(V=>{function Me(){if(J.forEach(function(Ie){ae.get(Ie).currentProgram.isReady()&&J.delete(Ie)}),J.size===0){V(E);return}setTimeout(Me,10)}he.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Fe=null;function _t(E){Fe&&Fe(E)}function Et(){rr.stop()}function hi(){rr.start()}const rr=new mg;rr.setAnimationLoop(_t),typeof self<"u"&&rr.setContext(self),this.setAnimationLoop=function(E){Fe=E,ye.setAnimationLoop(E),E===null?rr.stop():rr.start()},ye.addEventListener("sessionstart",Et),ye.addEventListener("sessionend",hi),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(H),H=ye.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,H,N),p=Ue.get(E,_.length),p.init(H),_.push(p),oe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Mt.setFromProjectionMatrix(oe,Tr,H.reversedDepth),Re=this.localClippingEnabled,te=xe.init(this.clippingPlanes,Re),g=G.get(E,w.length),g.init(),w.push(g),ye.enabled===!0&&ye.isPresenting===!0){const Me=x.xr.getDepthSensingMesh();Me!==null&&ni(Me,H,-1/0,x.sortObjects)}ni(E,H,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(me,Te),Q=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Q&&Xe.addToRenderList(g,E),this.info.render.frame++,te===!0&&xe.beginShadows();const Z=p.state.shadowsArray;Ge.render(Z,E,H),te===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=g.opaque,V=g.transmissive;if(p.setupLights(),H.isArrayCamera){const Me=H.cameras;if(V.length>0)for(let Ie=0,nt=Me.length;Ie<nt;Ie++){const Ze=Me[Ie];ma(J,V,E,Ze)}Q&&Xe.render(E);for(let Ie=0,nt=Me.length;Ie<nt;Ie++){const Ze=Me[Ie];ps(g,E,Ze,Ze.viewport)}}else V.length>0&&ma(J,V,E,H),Q&&Xe.render(E),ps(g,E,H);N!==null&&R===0&&(Ae.updateMultisampleRenderTarget(N),Ae.updateRenderTargetMipmap(N)),E.isScene===!0&&E.onAfterRender(x,E,H),Pe.resetDefaultState(),S=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],te===!0&&xe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function ni(E,H,Z,J){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Mt.intersectsSprite(E)){J&&ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(oe);const Ie=z.update(E),nt=E.material;nt.visible&&g.push(E,Ie,nt,Z,ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Mt.intersectsObject(E))){const Ie=z.update(E),nt=E.material;if(J&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ne.copy(E.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ne.copy(Ie.boundingSphere.center)),ne.applyMatrix4(E.matrixWorld).applyMatrix4(oe)),Array.isArray(nt)){const Ze=Ie.groups;for(let pt=0,xt=Ze.length;pt<xt;pt++){const ct=Ze[pt],yt=nt[ct.materialIndex];yt&&yt.visible&&g.push(E,Ie,yt,Z,ne.z,ct)}}else nt.visible&&g.push(E,Ie,nt,Z,ne.z,null)}}const Me=E.children;for(let Ie=0,nt=Me.length;Ie<nt;Ie++)ni(Me[Ie],H,Z,J)}function ps(E,H,Z,J){const V=E.opaque,Me=E.transmissive,Ie=E.transparent;p.setupLightsView(Z),te===!0&&xe.setGlobalState(x.clippingPlanes,Z),J&&pe.viewport(L.copy(J)),V.length>0&&fi(V,H,Z),Me.length>0&&fi(Me,H,Z),Ie.length>0&&fi(Ie,H,Z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function ma(E,H,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Xs(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?Ml:Ar,minFilter:Ns,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const Me=p.state.transmissionRenderTarget[J.id],Ie=J.viewport||L;Me.setSize(Ie.z*x.transmissionResolutionScale,Ie.w*x.transmissionResolutionScale);const nt=x.getRenderTarget(),Ze=x.getActiveCubeFace(),pt=x.getActiveMipmapLevel();x.setRenderTarget(Me),x.getClearColor(W),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Q&&Xe.render(Z);const xt=x.toneMapping;x.toneMapping=os;const ct=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),te===!0&&xe.setGlobalState(x.clippingPlanes,J),fi(E,Z,J),Ae.updateMultisampleRenderTarget(Me),Ae.updateRenderTargetMipmap(Me),he.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let kt=0,Jt=H.length;kt<Jt;kt++){const Xt=H[kt],qt=Xt.object,vt=Xt.geometry,dn=Xt.material,Ft=Xt.group;if(dn.side===pn&&qt.layers.test(J.layers)){const mi=dn.side;dn.side=Ci,dn.needsUpdate=!0,ms(qt,Z,J,vt,dn,Ft),dn.side=mi,dn.needsUpdate=!0,yt=!0}}yt===!0&&(Ae.updateMultisampleRenderTarget(Me),Ae.updateRenderTargetMipmap(Me))}x.setRenderTarget(nt,Ze,pt),x.setClearColor(W,q),ct!==void 0&&(J.viewport=ct),x.toneMapping=xt}function fi(E,H,Z){const J=H.isScene===!0?H.overrideMaterial:null;for(let V=0,Me=E.length;V<Me;V++){const Ie=E[V],nt=Ie.object,Ze=Ie.geometry,pt=Ie.group;let xt=Ie.material;xt.allowOverride===!0&&J!==null&&(xt=J),nt.layers.test(Z.layers)&&ms(nt,H,Z,Ze,xt,pt)}}function ms(E,H,Z,J,V,Me){E.onBeforeRender(x,H,Z,J,V,Me),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(x,H,Z,J,E,Me),V.transparent===!0&&V.side===pn&&V.forceSinglePass===!1?(V.side=Ci,V.needsUpdate=!0,x.renderBufferDirect(Z,H,J,V,E,Me),V.side=zr,V.needsUpdate=!0,x.renderBufferDirect(Z,H,J,V,E,Me),V.side=pn):x.renderBufferDirect(Z,H,J,V,E,Me),E.onAfterRender(x,H,Z,J,V,Me)}function gs(E,H,Z){H.isScene!==!0&&(H=de);const J=ae.get(E),V=p.state.lights,Me=p.state.shadowsArray,Ie=V.state.version,nt=K.getParameters(E,V.state,Me,H,Z),Ze=K.getProgramCacheKey(nt);let pt=J.programs;J.environment=E.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(E.isMeshStandardMaterial?Ne:Se).get(E.envMap||J.environment),J.envMapRotation=J.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,pt===void 0&&(E.addEventListener("dispose",se),pt=new Map,J.programs=pt);let xt=pt.get(Ze);if(xt!==void 0){if(J.currentProgram===xt&&J.lightsStateVersion===Ie)return oo(E,nt),xt}else nt.uniforms=K.getUniforms(E),E.onBeforeCompile(nt,x),xt=K.acquireProgram(nt,Ze),pt.set(Ze,xt),J.uniforms=nt.uniforms;const ct=J.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ct.clippingPlanes=xe.uniform),oo(E,nt),J.needsLights=lo(E),J.lightsStateVersion=Ie,J.needsLights&&(ct.ambientLightColor.value=V.state.ambient,ct.lightProbe.value=V.state.probe,ct.directionalLights.value=V.state.directional,ct.directionalLightShadows.value=V.state.directionalShadow,ct.spotLights.value=V.state.spot,ct.spotLightShadows.value=V.state.spotShadow,ct.rectAreaLights.value=V.state.rectArea,ct.ltc_1.value=V.state.rectAreaLTC1,ct.ltc_2.value=V.state.rectAreaLTC2,ct.pointLights.value=V.state.point,ct.pointLightShadows.value=V.state.pointShadow,ct.hemisphereLights.value=V.state.hemi,ct.directionalShadowMap.value=V.state.directionalShadowMap,ct.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ct.spotShadowMap.value=V.state.spotShadowMap,ct.spotLightMatrix.value=V.state.spotLightMatrix,ct.spotLightMap.value=V.state.spotLightMap,ct.pointShadowMap.value=V.state.pointShadowMap,ct.pointShadowMatrix.value=V.state.pointShadowMatrix),J.currentProgram=xt,J.uniformsList=null,xt}function ga(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=Tc.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function oo(E,H){const Z=ae.get(E);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function ao(E,H,Z,J,V){H.isScene!==!0&&(H=de),Ae.resetTextureUnits();const Me=H.fog,Ie=J.isMeshStandardMaterial?H.environment:null,nt=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Yo,Ze=(J.isMeshStandardMaterial?Ne:Se).get(J.envMap||Ie),pt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,xt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ct=!!Z.morphAttributes.position,yt=!!Z.morphAttributes.normal,kt=!!Z.morphAttributes.color;let Jt=os;J.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Jt=x.toneMapping);const Xt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,qt=Xt!==void 0?Xt.length:0,vt=ae.get(J),dn=p.state.lights;if(te===!0&&(Re===!0||E!==M)){const jn=E===M&&J.id===S;xe.setState(J,E,jn)}let Ft=!1;J.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==dn.state.version||vt.outputColorSpace!==nt||V.isBatchedMesh&&vt.batching===!1||!V.isBatchedMesh&&vt.batching===!0||V.isBatchedMesh&&vt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&vt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&vt.instancing===!1||!V.isInstancedMesh&&vt.instancing===!0||V.isSkinnedMesh&&vt.skinning===!1||!V.isSkinnedMesh&&vt.skinning===!0||V.isInstancedMesh&&vt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&vt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&vt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&vt.instancingMorph===!1&&V.morphTexture!==null||vt.envMap!==Ze||J.fog===!0&&vt.fog!==Me||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==xe.numPlanes||vt.numIntersection!==xe.numIntersection)||vt.vertexAlphas!==pt||vt.vertexTangents!==xt||vt.morphTargets!==ct||vt.morphNormals!==yt||vt.morphColors!==kt||vt.toneMapping!==Jt||vt.morphTargetsCount!==qt)&&(Ft=!0):(Ft=!0,vt.__version=J.version);let mi=vt.currentProgram;Ft===!0&&(mi=gs(J,H,V));let Wr=!1,Ln=!1,xr=!1;const en=mi.getUniforms(),Cn=vt.uniforms;if(pe.useProgram(mi.program)&&(Wr=!0,Ln=!0,xr=!0),J.id!==S&&(S=J.id,Ln=!0),Wr||M!==E){pe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),en.setValue(C,"projectionMatrix",E.projectionMatrix),en.setValue(C,"viewMatrix",E.matrixWorldInverse);const ii=en.map.cameraPosition;ii!==void 0&&ii.setValue(C,Je.setFromMatrixPosition(E.matrixWorld)),Ce.logarithmicDepthBuffer&&en.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&en.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Ln=!0,xr=!0)}if(V.isSkinnedMesh){en.setOptional(C,V,"bindMatrix"),en.setOptional(C,V,"bindMatrixInverse");const jn=V.skeleton;jn&&(jn.boneTexture===null&&jn.computeBoneTexture(),en.setValue(C,"boneTexture",jn.boneTexture,Ae))}V.isBatchedMesh&&(en.setOptional(C,V,"batchingTexture"),en.setValue(C,"batchingTexture",V._matricesTexture,Ae),en.setOptional(C,V,"batchingIdTexture"),en.setValue(C,"batchingIdTexture",V._indirectTexture,Ae),en.setOptional(C,V,"batchingColorTexture"),V._colorsTexture!==null&&en.setValue(C,"batchingColorTexture",V._colorsTexture,Ae));const Yn=Z.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&_e.update(V,Z,mi),(Ln||vt.receiveShadow!==V.receiveShadow)&&(vt.receiveShadow=V.receiveShadow,en.setValue(C,"receiveShadow",V.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Cn.envMap.value=Ze,Cn.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&H.environment!==null&&(Cn.envMapIntensity.value=H.environmentIntensity),Ln&&(en.setValue(C,"toneMappingExposure",x.toneMappingExposure),vt.needsLights&&yd(Cn,xr),Me&&J.fog===!0&&$.refreshFogUniforms(Cn,Me),$.refreshMaterialUniforms(Cn,J,X,re,p.state.transmissionRenderTarget[E.id]),Tc.upload(C,ga(vt),Cn,Ae)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Tc.upload(C,ga(vt),Cn,Ae),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&en.setValue(C,"center",V.center),en.setValue(C,"modelViewMatrix",V.modelViewMatrix),en.setValue(C,"normalMatrix",V.normalMatrix),en.setValue(C,"modelMatrix",V.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const jn=J.uniformsGroups;for(let ii=0,co=jn.length;ii<co;ii++){const sr=jn[ii];ut.update(sr,mi),ut.bind(sr,mi)}}return mi}function yd(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function lo(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,H,Z){const J=ae.get(E);J.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),ae.get(E.texture).__webglTexture=H,ae.get(E.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Z,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){const Z=ae.get(E);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0};const _r=C.createFramebuffer();this.setRenderTarget=function(E,H=0,Z=0){N=E,D=H,R=Z;let J=!0,V=null,Me=!1,Ie=!1;if(E){const Ze=ae.get(E);if(Ze.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(C.FRAMEBUFFER,null),J=!1;else if(Ze.__webglFramebuffer===void 0)Ae.setupRenderTarget(E);else if(Ze.__hasExternalTextures)Ae.rebindTextures(E,ae.get(E.texture).__webglTexture,ae.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ct=E.depthTexture;if(Ze.__boundDepthTexture!==ct){if(ct!==null&&ae.has(ct)&&(E.width!==ct.image.width||E.height!==ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ae.setupDepthRenderbuffer(E)}}const pt=E.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(Ie=!0);const xt=ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(xt[H])?V=xt[H][Z]:V=xt[H],Me=!0):E.samples>0&&Ae.useMultisampledRTT(E)===!1?V=ae.get(E).__webglMultisampledFramebuffer:Array.isArray(xt)?V=xt[Z]:V=xt,L.copy(E.viewport),F.copy(E.scissor),k=E.scissorTest}else L.copy(Be).multiplyScalar(X).floor(),F.copy(He).multiplyScalar(X).floor(),k=lt;if(Z!==0&&(V=_r),pe.bindFramebuffer(C.FRAMEBUFFER,V)&&J&&pe.drawBuffers(E,V),pe.viewport(L),pe.scissor(F),pe.setScissorTest(k),Me){const Ze=ae.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ze.__webglTexture,Z)}else if(Ie){const Ze=H;for(let pt=0;pt<E.textures.length;pt++){const xt=ae.get(E.textures[pt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+pt,xt.__webglTexture,Z,Ze)}}else if(E!==null&&Z!==0){const Ze=ae.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ze.__webglTexture,Z)}S=-1},this.readRenderTargetPixels=function(E,H,Z,J,V,Me,Ie,nt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ze=Ze[Ie]),Ze){pe.bindFramebuffer(C.FRAMEBUFFER,Ze);try{const pt=E.textures[nt],xt=pt.format,ct=pt.type;if(!Ce.textureFormatReadable(xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-J&&Z>=0&&Z<=E.height-V&&(E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+nt),C.readPixels(H,Z,J,V,et.convert(xt),et.convert(ct),Me))}finally{const pt=N!==null?ae.get(N).__webglFramebuffer:null;pe.bindFramebuffer(C.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(E,H,Z,J,V,Me,Ie,nt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ze=Ze[Ie]),Ze)if(H>=0&&H<=E.width-J&&Z>=0&&Z<=E.height-V){pe.bindFramebuffer(C.FRAMEBUFFER,Ze);const pt=E.textures[nt],xt=pt.format,ct=pt.type;if(!Ce.textureFormatReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const yt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,yt),C.bufferData(C.PIXEL_PACK_BUFFER,Me.byteLength,C.STREAM_READ),E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+nt),C.readPixels(H,Z,J,V,et.convert(xt),et.convert(ct),0);const kt=N!==null?ae.get(N).__webglFramebuffer:null;pe.bindFramebuffer(C.FRAMEBUFFER,kt);const Jt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await s_(C,Jt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,yt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Me),C.deleteBuffer(yt),C.deleteSync(Jt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,H=null,Z=0){const J=Math.pow(2,-Z),V=Math.floor(E.image.width*J),Me=Math.floor(E.image.height*J),Ie=H!==null?H.x:0,nt=H!==null?H.y:0;Ae.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,Z,0,0,Ie,nt,V,Me),pe.unbindTexture()};const pi=C.createFramebuffer(),ki=C.createFramebuffer();this.copyTextureToTexture=function(E,H,Z=null,J=null,V=0,Me=null){Me===null&&(V!==0?(Fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=V,V=0):Me=0);let Ie,nt,Ze,pt,xt,ct,yt,kt,Jt;const Xt=E.isCompressedTexture?E.mipmaps[Me]:E.image;if(Z!==null)Ie=Z.max.x-Z.min.x,nt=Z.max.y-Z.min.y,Ze=Z.isBox3?Z.max.z-Z.min.z:1,pt=Z.min.x,xt=Z.min.y,ct=Z.isBox3?Z.min.z:0;else{const Yn=Math.pow(2,-V);Ie=Math.floor(Xt.width*Yn),nt=Math.floor(Xt.height*Yn),E.isDataArrayTexture?Ze=Xt.depth:E.isData3DTexture?Ze=Math.floor(Xt.depth*Yn):Ze=1,pt=0,xt=0,ct=0}J!==null?(yt=J.x,kt=J.y,Jt=J.z):(yt=0,kt=0,Jt=0);const qt=et.convert(H.format),vt=et.convert(H.type);let dn;H.isData3DTexture?(Ae.setTexture3D(H,0),dn=C.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Ae.setTexture2DArray(H,0),dn=C.TEXTURE_2D_ARRAY):(Ae.setTexture2D(H,0),dn=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);const Ft=C.getParameter(C.UNPACK_ROW_LENGTH),mi=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Wr=C.getParameter(C.UNPACK_SKIP_PIXELS),Ln=C.getParameter(C.UNPACK_SKIP_ROWS),xr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Xt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Xt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,pt),C.pixelStorei(C.UNPACK_SKIP_ROWS,xt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ct);const en=E.isDataArrayTexture||E.isData3DTexture,Cn=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){const Yn=ae.get(E),jn=ae.get(H),ii=ae.get(Yn.__renderTarget),co=ae.get(jn.__renderTarget);pe.bindFramebuffer(C.READ_FRAMEBUFFER,ii.__webglFramebuffer),pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,co.__webglFramebuffer);for(let sr=0;sr<Ze;sr++)en&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ae.get(E).__webglTexture,V,ct+sr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ae.get(H).__webglTexture,Me,Jt+sr)),C.blitFramebuffer(pt,xt,Ie,nt,yt,kt,Ie,nt,C.DEPTH_BUFFER_BIT,C.NEAREST);pe.bindFramebuffer(C.READ_FRAMEBUFFER,null),pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||ae.has(E)){const Yn=ae.get(E),jn=ae.get(H);pe.bindFramebuffer(C.READ_FRAMEBUFFER,pi),pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,ki);for(let ii=0;ii<Ze;ii++)en?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Yn.__webglTexture,V,ct+ii):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Yn.__webglTexture,V),Cn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,jn.__webglTexture,Me,Jt+ii):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,jn.__webglTexture,Me),V!==0?C.blitFramebuffer(pt,xt,Ie,nt,yt,kt,Ie,nt,C.COLOR_BUFFER_BIT,C.NEAREST):Cn?C.copyTexSubImage3D(dn,Me,yt,kt,Jt+ii,pt,xt,Ie,nt):C.copyTexSubImage2D(dn,Me,yt,kt,pt,xt,Ie,nt);pe.bindFramebuffer(C.READ_FRAMEBUFFER,null),pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Cn?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(dn,Me,yt,kt,Jt,Ie,nt,Ze,qt,vt,Xt.data):H.isCompressedArrayTexture?C.compressedTexSubImage3D(dn,Me,yt,kt,Jt,Ie,nt,Ze,qt,Xt.data):C.texSubImage3D(dn,Me,yt,kt,Jt,Ie,nt,Ze,qt,vt,Xt):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Me,yt,kt,Ie,nt,qt,vt,Xt.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Me,yt,kt,Xt.width,Xt.height,qt,Xt.data):C.texSubImage2D(C.TEXTURE_2D,Me,yt,kt,Ie,nt,qt,vt,Xt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ft),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,mi),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Wr),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ln),C.pixelStorei(C.UNPACK_SKIP_IMAGES,xr),Me===0&&H.generateMipmaps&&C.generateMipmap(dn),pe.unbindTexture()},this.copyTextureToTexture3D=function(E,H,Z=null,J=null,V=0){return Fo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,H,Z,J,V)},this.initRenderTarget=function(E){ae.get(E).__webglFramebuffer===void 0&&Ae.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ae.setTextureCube(E,0):E.isData3DTexture?Ae.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ae.setTexture2DArray(E,0):Ae.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){D=0,R=0,N=null,pe.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(e),t.unpackColorSpace=$t._getUnpackColorSpace()}}const Vp={type:"change"},Jh={type:"start"},bg={type:"end"},cc=new wl,Gp=new es,lw=Math.cos(70*Qt.DEG2RAD),Bn=new b,wi=2*Math.PI,nn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nu=1e-6;class cw extends pg{constructor(e,t=null){super(e,t),this.state=nn.NONE,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Uo.ROTATE,MIDDLE:Uo.DOLLY,RIGHT:Uo.PAN},this.touches={ONE:Po.ROTATE,TWO:Po.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new b,this._lastQuaternion=new rn,this._lastTargetPosition=new b,this._quat=new rn().setFromUnitVectors(e.up,new b(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new gp,this._sphericalDelta=new gp,this._scale=1,this._panOffset=new b,this._rotateStart=new ze,this._rotateEnd=new ze,this._rotateDelta=new ze,this._panStart=new ze,this._panEnd=new ze,this._panDelta=new ze,this._dollyStart=new ze,this._dollyEnd=new ze,this._dollyDelta=new ze,this._dollyDirection=new b,this._mouse=new ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=uw.bind(this),this._onPointerDown=dw.bind(this),this._onPointerUp=hw.bind(this),this._onContextMenu=xw.bind(this),this._onMouseWheel=mw.bind(this),this._onKeyDown=gw.bind(this),this._onTouchStart=vw.bind(this),this._onTouchMove=_w.bind(this),this._onMouseDown=fw.bind(this),this._onMouseMove=pw.bind(this),this._interceptControlDown=yw.bind(this),this._interceptControlUp=bw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vp),this.update(),this.state=nn.NONE}update(e=null){const t=this.object.position;Bn.copy(t).sub(this.target),Bn.applyQuaternion(this._quat),this._spherical.setFromVector3(Bn),this.autoRotate&&this.state===nn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=wi:i>Math.PI&&(i-=wi),r<-Math.PI?r+=wi:r>Math.PI&&(r-=wi),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Bn.setFromSpherical(this._spherical),Bn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Bn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Bn.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new b(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new b(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Bn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(cc.origin.copy(this.object.position),cc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cc.direction))<lw?this.object.lookAt(this.target):(Gp.setFromNormalAndCoplanarPoint(this.object.up,this.target),cc.intersectPlane(Gp,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>nu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nu||this._lastTargetPosition.distanceToSquared(this.target)>nu?(this.dispatchEvent(Vp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?wi/60*this.autoRotateSpeed*e:wi/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Bn.setFromMatrixColumn(t,0),Bn.multiplyScalar(-e),this._panOffset.add(Bn)}_panUp(e,t){this.screenSpacePanning===!0?Bn.setFromMatrixColumn(t,1):(Bn.setFromMatrixColumn(t,0),Bn.crossVectors(this.object.up,Bn)),Bn.multiplyScalar(e),this._panOffset.add(Bn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Bn.copy(r).sub(this.target);let s=Bn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(wi*this._rotateDelta.x/t.clientHeight),this._rotateUp(wi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(wi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-wi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(wi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-wi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(wi*this._rotateDelta.x/t.clientHeight),this._rotateUp(wi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function dw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function uw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function hw(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bg),this.state=nn.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function fw(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Uo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=nn.DOLLY;break;case Uo.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=nn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=nn.ROTATE}break;case Uo.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=nn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=nn.PAN}break;default:this.state=nn.NONE}this.state!==nn.NONE&&this.dispatchEvent(Jh)}function pw(n){switch(this.state){case nn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case nn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case nn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function mw(n){this.enabled===!1||this.enableZoom===!1||this.state!==nn.NONE||(n.preventDefault(),this.dispatchEvent(Jh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(bg))}function gw(n){this.enabled!==!1&&this._handleKeyDown(n)}function vw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Po.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=nn.TOUCH_ROTATE;break;case Po.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=nn.TOUCH_PAN;break;default:this.state=nn.NONE}break;case 2:switch(this.touches.TWO){case Po.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=nn.TOUCH_DOLLY_PAN;break;case Po.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=nn.TOUCH_DOLLY_ROTATE;break;default:this.state=nn.NONE}break;default:this.state=nn.NONE}this.state!==nn.NONE&&this.dispatchEvent(Jh)}function _w(n){switch(this._trackPointer(n),this.state){case nn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case nn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case nn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case nn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=nn.NONE}}function xw(n){this.enabled!==!1&&n.preventDefault()}function yw(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bw(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ws=new Zh,li=new b,Kr=new b,vn=new rn,Wp={X:new b(1,0,0),Y:new b(0,1,0),Z:new b(0,0,1)},iu={type:"change"},Xp={type:"mouseDown",mode:null},qp={type:"mouseUp",mode:null},$p={type:"objectChange"};class Sw extends pg{constructor(e,t=null){super(void 0,t);const i=new Rw(this);this._root=i;const r=new Cw;this._gizmo=r,i.add(r);const s=new Pw;this._plane=s,i.add(s);const o=this;function a(_,x){let I=x;Object.defineProperty(o,_,{get:function(){return I!==void 0?I:x},set:function(D){I!==D&&(I=D,s[_]=D,r[_]=D,o.dispatchEvent({type:_+"-changed",value:D}),o.dispatchEvent(iu))}}),o[_]=x,s[_]=x,r[_]=x}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const l=new b,c=new b,d=new rn,u=new rn,h=new b,f=new rn,m=new b,v=new b,g=new b,p=0,w=new b;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",d),a("worldQuaternionStart",u),a("cameraPosition",h),a("cameraQuaternion",f),a("pointStart",m),a("pointEnd",v),a("rotationAxis",g),a("rotationAngle",p),a("eye",w),this._offset=new b,this._startNorm=new b,this._endNorm=new b,this._cameraScale=new b,this._parentPosition=new b,this._parentQuaternion=new rn,this._parentQuaternionInv=new rn,this._parentScale=new b,this._worldScaleStart=new b,this._worldQuaternionInv=new rn,this._worldScale=new b,this._positionStart=new b,this._quaternionStart=new rn,this._scaleStart=new b,this._getPointer=Mw.bind(this),this._onPointerDown=Ew.bind(this),this._onPointerHover=ww.bind(this),this._onPointerMove=Tw.bind(this),this._onPointerUp=Aw.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&ws.setFromCamera(e,this.camera);const t=ru(this._gizmo.picker[this.mode],ws);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&ws.setFromCamera(e,this.camera);const t=ru(this._plane,ws,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Xp.mode=this.mode,this.dispatchEvent(Xp)}}pointerMove(e){const t=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&ws.setFromCamera(e,this.camera);const o=ru(this._plane,ws,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(vn.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(li.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(li.setFromMatrixPosition(r.parent.matrixWorld)))),r.position.x=Math.max(this.minX,Math.min(this.maxX,r.position.x)),r.position.y=Math.max(this.minY,Math.min(this.maxY,r.position.y)),r.position.z=Math.max(this.minZ,Math.min(this.maxZ,r.position.z));else if(i==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Kr.set(a,a,a)}else li.copy(this.pointStart),Kr.copy(this.pointEnd),li.applyQuaternion(this._worldQuaternionInv),Kr.applyQuaternion(this._worldQuaternionInv),Kr.divide(li),t.search("X")===-1&&(Kr.x=1),t.search("Y")===-1&&(Kr.y=1),t.search("Z")===-1&&(Kr.z=1);r.scale.copy(this._scaleStart).multiply(Kr),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(li.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(li.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Wp[t]),li.copy(Wp[t]),s==="local"&&li.applyQuaternion(this.worldQuaternion),li.cross(this.eye),li.length()===0?l=!0:this.rotationAngle=this._offset.dot(li.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(vn.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(vn.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(iu),this.dispatchEvent($p)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(qp.mode=this.mode,this.dispatchEvent(qp)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(iu),this.dispatchEvent($p),this.pointStart.copy(this.pointEnd))}getRaycaster(){return ws}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,i,r){const s=this._gizmo.materialLib;s.xAxis.color.set(e),s.yAxis.color.set(t),s.zAxis.color.set(i),s.active.color.set(r),s.xAxisTransparent.color.set(e),s.yAxisTransparent.color.set(t),s.zAxisTransparent.color.set(i),s.activeTransparent.color.set(r),s.xAxis._color&&s.xAxis._color.set(e),s.yAxis._color&&s.yAxis._color.set(t),s.zAxis._color&&s.zAxis._color.set(i),s.active._color&&s.active._color.set(r),s.xAxisTransparent._color&&s.xAxisTransparent._color.set(e),s.yAxisTransparent._color&&s.yAxisTransparent._color.set(t),s.zAxisTransparent._color&&s.zAxisTransparent._color.set(i),s.activeTransparent._color&&s.activeTransparent._color.set(r)}}function Mw(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{const e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function ww(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function Ew(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function Tw(n){this.enabled&&this.pointerMove(this._getPointer(n))}function Aw(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function ru(n,e,t){const i=e.intersectObject(n,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||t)return i[r];return!1}const dc=new En,sn=new b(0,1,0),Yp=new b(0,0,0),jp=new zt,uc=new rn,Ac=new rn,br=new b,Zp=new zt,ka=new b(1,0,0),As=new b(0,1,0),Fa=new b(0,0,1),hc=new b,Ea=new b,Ta=new b;class Rw extends Tn{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class Cw extends Tn{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new bn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Pi({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const d=e.clone();d.color.setHex(255),d.opacity=.5;const u=e.clone();u.opacity=.25;const h=e.clone();h.color.setHex(16776960),h.opacity=.25;const f=e.clone();f.color.setHex(16776960);const m=e.clone();m.color.setHex(7895160),this.materialLib={xAxis:s,yAxis:o,zAxis:a,active:f,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:d,activeTransparent:h};const v=new ai(0,.04,.1,12);v.translate(0,.05,0);const g=new Pn(.08,.08,.08);g.translate(0,.04,0);const p=new Bt;p.setAttribute("position",new Lt([0,0,0,1,0,0],3));const w=new ai(.0075,.0075,.5,3);w.translate(0,.25,0);function _(q,j){const re=new Ps(q,.0075,3,64,j*Math.PI*2);return re.rotateY(Math.PI/2),re.rotateX(Math.PI/2),re}function x(){const q=new Bt;return q.setAttribute("position",new Lt([0,0,0,1,1,1],3)),q}const I={X:[[new we(v,s),[.5,0,0],[0,0,-Math.PI/2]],[new we(v,s),[-.5,0,0],[0,0,Math.PI/2]],[new we(w,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new we(v,o),[0,.5,0]],[new we(v,o),[0,-.5,0],[Math.PI,0,0]],[new we(w,o)]],Z:[[new we(v,a),[0,0,.5],[Math.PI/2,0,0]],[new we(v,a),[0,0,-.5],[-Math.PI/2,0,0]],[new we(w,a),null,[Math.PI/2,0,0]]],XYZ:[[new we(new Us(.1,0),u),[0,0,0]]],XY:[[new we(new Pn(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new we(new Pn(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new we(new Pn(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},D={X:[[new we(new ai(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new we(new ai(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new we(new ai(.2,0,.6,4),i),[0,.3,0]],[new we(new ai(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new we(new ai(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new we(new ai(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new we(new Us(.2,0),i)]],XY:[[new we(new Pn(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new we(new Pn(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new we(new Pn(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},R={START:[[new we(new Us(.01,2),r),null,null,null,"helper"]],END:[[new we(new Us(.01,2),r),null,null,null,"helper"]],DELTA:[[new hn(x(),r),null,null,null,"helper"]],X:[[new hn(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new hn(p,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new hn(p,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},N={XYZE:[[new we(_(.5,1),m),null,[0,Math.PI/2,0]]],X:[[new we(_(.5,.5),s)]],Y:[[new we(_(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new we(_(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new we(_(.75,1),h),null,[0,Math.PI/2,0]]]},S={AXIS:[[new hn(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new we(new as(.25,10,8),i)]],X:[[new we(new Ps(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new we(new Ps(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new we(new Ps(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new we(new Ps(.75,.1,2,24),i)]]},L={X:[[new we(g,s),[.5,0,0],[0,0,-Math.PI/2]],[new we(w,s),[0,0,0],[0,0,-Math.PI/2]],[new we(g,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new we(g,o),[0,.5,0]],[new we(w,o)],[new we(g,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new we(g,a),[0,0,.5],[Math.PI/2,0,0]],[new we(w,a),[0,0,0],[Math.PI/2,0,0]],[new we(g,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new we(new Pn(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new we(new Pn(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new we(new Pn(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new we(new Pn(.1,.1,.1),u)]]},F={X:[[new we(new ai(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new we(new ai(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new we(new ai(.2,0,.6,4),i),[0,.3,0]],[new we(new ai(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new we(new ai(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new we(new ai(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new we(new Pn(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new we(new Pn(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new we(new Pn(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new we(new Pn(.2,.2,.2),i),[0,0,0]]]},k={X:[[new hn(p,r),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new hn(p,r),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new hn(p,r),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function W(q){const j=new Tn;for(const re in q)for(let X=q[re].length;X--;){const me=q[re][X][0].clone(),Te=q[re][X][1],Be=q[re][X][2],He=q[re][X][3],lt=q[re][X][4];me.name=re,me.tag=lt,Te&&me.position.set(Te[0],Te[1],Te[2]),Be&&me.rotation.set(Be[0],Be[1],Be[2]),He&&me.scale.set(He[0],He[1],He[2]),me.updateMatrix();const Mt=me.geometry.clone();Mt.applyMatrix4(me.matrix),me.geometry=Mt,me.renderOrder=1/0,me.position.set(0,0,0),me.rotation.set(0,0,0),me.scale.set(1,1,1),j.add(me)}return j}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=W(I)),this.add(this.gizmo.rotate=W(N)),this.add(this.gizmo.scale=W(L)),this.add(this.picker.translate=W(D)),this.add(this.picker.rotate=W(M)),this.add(this.picker.scale=W(F)),this.add(this.helper.translate=W(R)),this.add(this.helper.rotate=W(S)),this.add(this.helper.scale=W(k)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Ac;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(vn.setFromEuler(dc.set(0,0,0)),o.quaternion.copy(i).multiply(vn),Math.abs(sn.copy(ka).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(vn.setFromEuler(dc.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(vn),Math.abs(sn.copy(As).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(vn.setFromEuler(dc.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(vn),Math.abs(sn.copy(Fa).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(vn.setFromEuler(dc.set(0,Math.PI/2,0)),sn.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(jp.lookAt(Yp,sn,As)),o.quaternion.multiply(vn),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),li.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),li.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(li),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(sn.copy(ka).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(sn.copy(As).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(sn.copy(Fa).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(sn.copy(Fa).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(sn.copy(ka).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(sn.copy(As).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(uc.copy(i),sn.copy(this.eye).applyQuaternion(vn.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(jp.lookAt(this.eye,Yp,As)),o.name==="X"&&(vn.setFromAxisAngle(ka,Math.atan2(-sn.y,sn.z)),vn.multiplyQuaternions(uc,vn),o.quaternion.copy(vn)),o.name==="Y"&&(vn.setFromAxisAngle(As,Math.atan2(sn.x,sn.z)),vn.multiplyQuaternions(uc,vn),o.quaternion.copy(vn)),o.name==="Z"&&(vn.setFromAxisAngle(Fa,Math.atan2(sn.y,sn.x)),vn.multiplyQuaternions(uc,vn),o.quaternion.copy(vn))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}}class Pw extends we{constructor(){super(new cs(1e5,1e5,2,2),new bn({visible:!1,wireframe:!0,side:pn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),hc.copy(ka).applyQuaternion(t==="local"?this.worldQuaternion:Ac),Ea.copy(As).applyQuaternion(t==="local"?this.worldQuaternion:Ac),Ta.copy(Fa).applyQuaternion(t==="local"?this.worldQuaternion:Ac),sn.copy(Ea),this.mode){case"translate":case"scale":switch(this.axis){case"X":sn.copy(this.eye).cross(hc),br.copy(hc).cross(sn);break;case"Y":sn.copy(this.eye).cross(Ea),br.copy(Ea).cross(sn);break;case"Z":sn.copy(this.eye).cross(Ta),br.copy(Ta).cross(sn);break;case"XY":br.copy(Ta);break;case"YZ":br.copy(hc);break;case"XZ":sn.copy(Ta),br.copy(Ea);break;case"XYZ":case"E":br.set(0,0,0);break}break;default:br.set(0,0,0)}br.length()===0?this.quaternion.copy(this.cameraQuaternion):(Zp.lookAt(li.set(0,0,0),br,sn),this.quaternion.setFromRotationMatrix(Zp)),super.updateMatrixWorld(e)}}const Qh=.32,Sg=n=>Math.max(0,Math.min(1,n));function Dw(n,e){const t=e.shadeMax-e.shadeMin;return t>1e-6?Sg((n.shade-e.shadeMin)/t):.5}function Iw(n,e=Sl){const t=Math.pow(Sg(n.density),e.heightRise),i=1-e.heightJitter+e.heightJitter*Dw(n,e);return e.heightMin+(e.heightMax-e.heightMin)*t*i}const Lw=[.78,.48,1,.3,.9,.6];function Nw(){const n=new Pn(1,1,1);n.translate(0,.5,0);const e=new Float32Array(72);for(let t=0;t<24;t++){const i=Lw[Math.floor(t/4)];e[t*3]=i,e[t*3+1]=i,e[t*3+2]=i}return n.setAttribute("color",new $n(e,3)),n}function Uw(n,e,t,i=Sl){const r=new Float32Array(n.length*16),s=new Float32Array(n.length*3),o=new zt,a=new rn().setFromAxisAngle(new b(0,1,0),t),l=new b,c=new b;for(let d=0;d<n.length;d++){const u=n[d];l.set(u.x,e(u.x,u.z)+Qh,u.z),c.set(u.width,Iw(u,i),u.depth),o.compose(l,a,c).toArray(r,d*16),s[d*3]=u.shade*.82,s[d*3+1]=u.shade*.91,s[d*3+2]=u.shade}return{matrices:r,colors:s,count:n.length}}function kw(n,e=!0){n.userData.terrainContours=!0,n.userData.contourSmoothing=e,n.onBeforeCompile=t=>{t.uniforms.contourWidth={value:n.userData.contourSmoothing?1.2:.8},t.vertexShader=`varying float vContourHeight;
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
    `)},n.customProgramCacheKey=()=>`terrain-contours-hillshade-${n.userData.contourSmoothing?1:0}`}const fc=32,Fw=.025,Sr=Fw;function Mg(n,e){const t=new In,i=new bn({vertexColors:!0,transparent:!0,opacity:.88,side:pn,depthWrite:!0});e&&kw(i,e.smoothing);const r=[],s=new Ot,o=new Float32Array(n.size*n.size*3),a=new Uint32Array(n.size*n.size);let l=0,c=!1;for(let f=0;f<n.size-1;f+=fc)for(let m=0;m<n.size-1;m+=fc){const v=Math.min(n.size-1,m+fc),g=Math.min(n.size-1,f+fc),p=(v-m)*(g-f)*12*3,w=new $n(new Float32Array(p),3).setUsage(Fc),_=new $n(new Float32Array(p),3).setUsage(Fc),x=new Bt;x.setAttribute("position",w),x.setAttribute("color",_);const I=-n.extent+m*n.spacing,D=-n.extent+v*n.spacing,R=-n.extentZ+f*n.spacingZ,N=-n.extentZ+g*n.spacingZ;x.boundingBox=new hs(new b(I,0,R),new b(D,180,N)),x.boundingSphere=x.boundingBox.getBoundingSphere(new fs);const S=new we(x,i);S.userData.terrainChunk={minX:m,maxX:v,minZ:f,maxZ:g},S.renderOrder=-2,r.push({minX:m,maxX:v,minZ:f,maxZ:g,mesh:S,position:w,color:_}),t.add(S)}const d=(f,m)=>{const v=-n.extent+f*n.spacing,g=-n.extentZ+m*n.spacingZ,p=m*n.size+f,w=n.data[p];if(a[p]!==l){const _=Math.pow(Qt.clamp(w/180,0,1),.65);s.setHSL(.57,.35*(1-_)+.06,.06+_*.68,yi),o[p*3]=s.r,o[p*3+1]=s.g,o[p*3+2]=s.b,a[p]=l}return{x:v,y:w,z:g,r:o[p*3],g:o[p*3+1],b:o[p*3+2]}},u=f=>{let m=0;const v=p=>{f.position.setXYZ(m,p.x,p.y,p.z),f.color.setXYZ(m++,p.r,p.g,p.b)},g=(p,w,_)=>{if(p.y>=Sr&&w.y>=Sr&&_.y>=Sr){v(p),v(w),v(_);return}const x=[p,w,_],I=[];for(let D=0;D<3;D++){const R=x[D],N=x[(D+1)%3];if(R.y>=Sr&&I.push(R),R.y>=Sr!=N.y>=Sr){const S=(Sr-R.y)/(N.y-R.y),M=Math.pow(Sr/180,.65);s.setHSL(.57,.35*(1-M)+.06,.06+M*.68,yi),I.push({x:R.x+(N.x-R.x)*S,y:Sr,z:R.z+(N.z-R.z)*S,r:s.r,g:s.g,b:s.b})}}for(let D=1;D<I.length-1;D++)v(I[0]),v(I[D]),v(I[D+1])};for(let p=f.minZ;p<f.maxZ;p++)for(let w=f.minX;w<f.maxX;w++){const _=d(w,p),x=d(w+1,p),I=d(w+1,p+1),D=d(w,p+1);Math.max(_.y,x.y,I.y,D.y)<Sr||(g(_,x,I),g(_,I,D))}f.mesh.geometry.setDrawRange(0,m),f.mesh.visible=m>0;for(const p of[f.position,f.color])m&&p.addUpdateRange(0,m*3),p.needsUpdate=!0},h=f=>{if(!c&&!(f&&![f.minX,f.maxX,f.minZ,f.maxZ].every(Number.isFinite))&&!(f&&(f.minX>f.maxX||f.minZ>f.maxZ))){l=l+1>>>0,l||(a.fill(0),l=1);for(const m of r)f&&(m.maxX<f.minX||m.minX>f.maxX||m.maxZ<f.minZ||m.minZ>f.maxZ)||u(m)}};return h(),{root:t,update:h,dispose(){if(!c){c=!0;for(const f of r)f.mesh.geometry.dispose();i.dispose(),t.removeFromParent(),t.clear()}}}}function Ow(n,e){const t=Mg(n,e);for(const i of t.root.children){const r=i,s=r.geometry.drawRange.count;for(const o of["position","color"]){const a=r.geometry.getAttribute(o);r.geometry.setAttribute(o,new $n(a.array.slice(0,s*3),3))}r.geometry.setDrawRange(0,s)}return t.root}const zw=5,Bw=A0,su=40,Kp=65;function Hw(n){if(n<=su*Ke)return 1;if(n>=Kp*Ke)return 0;const e=(n/Ke-su)/(Kp-su);return 1-e*e*(3-2*e)}const Vw=`
  varying vec2 vMapPosition;
  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vMapPosition = worldPosition.xz;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,Gw=`
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
`;function Ww(n,e){const t=new cs(n*2,e*2);t.rotateX(-Math.PI/2);const i=new Br({uniforms:{majorColor:{value:new Ot(16777215)},minorColor:{value:new Ot(16777215)},majorStep:{value:zw*Ke},minorStep:{value:Bw*Ke},minorOpacity:{value:1}},vertexShader:Vw,fragmentShader:Gw,transparent:!0,depthWrite:!1,side:pn}),r=new we(t,i);return r.position.y=-2,r.renderOrder=-1,r}function wg(n,e){n.material.uniforms.minorOpacity.value=Hw(e)}const ou=[{label:"N",degrees:0,x:0,z:-1},{label:"E",degrees:90,x:1,z:0},{label:"S",degrees:180,x:0,z:1},{label:"W",degrees:270,x:-1,z:0}];function Xw(n){const e=new b(0,0,-1).transformDirection(n.matrixWorldInverse);return Math.atan2(-e.y,e.x)+Math.PI/2}function qw(n){const e=document.createElement("div");e.className="map-compass",e.setAttribute("aria-label","地图方向：正北0度，东90度，南180度，西270度");const t=document.createElement("div");t.className="map-compass-dial",e.append(t);const i=ou.map(l=>{const c=document.createElement("span");return c.className=`compass-${l.label.toLowerCase()}`,c.textContent=l.label,c.title=`${l.label} ${l.degrees}°`,t.append(c),c}),r=document.createElement("small");r.textContent="N = 0°",e.append(r),n.append(e);const s=ou.map(l=>{const c=document.createElement("span");return c.className="map-cardinal",c.textContent=l.label,c.setAttribute("aria-label",`${l.label} ${l.degrees}°`),n.append(c),c}),o=new b;let a=NaN;return{update(l,c,d,u,h){l.updateMatrixWorld();const f=Xw(l);(Math.abs(f-a)>1e-4||!Number.isFinite(a))&&(t.style.transform=`rotate(${f}rad)`,i.forEach(m=>{m.style.transform=`translate(-50%,-50%) rotate(${-f}rad)`}),a=f),ou.forEach((m,v)=>{const g=s[v];o.set(m.x*u,.2,m.z*h).project(l);const p=Number.isFinite(o.x)&&Number.isFinite(o.y)&&o.z>=-1&&o.z<=1&&Math.abs(o.x)<1.1&&Math.abs(o.y)<1.1;g.hidden=!p,p&&(g.style.left=`${Math.max(14,Math.min(c-14,(o.x+1)*c/2))}px`,g.style.top=`${Math.max(14,Math.min(d-14,(1-o.y)*d/2))}px`)})},dispose(){e.remove(),s.forEach(l=>l.remove())}}}const au=21,$w=7,Jp=14;function Eg(n){const e=[],t=(r,s,o,a)=>{e.push(new b(r,s,0),new b(o,a,0))};for(const r of[au,$w])t(-r,-r,r,-r),t(r,-r,r,r),t(r,r,-r,r),t(-r,r,-r,-r);for(const r of[-1,1])for(const s of[-1,1])t(r*au,s*au,r*Jp,s*Jp);const i=new k_(new Bt().setFromPoints(e),new Pi({color:n,transparent:!0,opacity:.9,depthTest:!1}));return i.name="escort-marker",i.visible=!1,i}const pc=25,mc=80,Aa=1;function Yw(n,e){if(Number.isNaN(n))return e??1;const t=Math.max(0,n/Ke);return e===1?t>=mc+6?3:t>=pc+2?2:1:e===2?t<=pc-2?1:t>=mc+6?3:2:e===3?t<=pc-2?1:t<=mc-6?2:3:t<pc?1:t<mc?2:3}const Xa=(n,e)=>n<e?-1:n>e?1:0,jw=new Intl.Collator("en",{sensitivity:"variant"}),Zw=n=>n.icon==="air-filled"||n.icon==="air-outline",Tg=n=>n.status==="active"&&n.tgt===!0,Ag=n=>n.status==="active"&&n.escort===!0&&n.faction!=="enemy",Qp=n=>Tg(n)||Ag(n)?1:0;function em(n){const e={x:0,y:0,z:0};for(const h of n)e.x+=h.position.x/n.length,e.y+=h.position.y/n.length,e.z+=h.position.z/n.length;const t=h=>Math.hypot(h.position.x-e.x,h.position.y-e.y,h.position.z-e.z);let i=n[0],r=t(i),s,o=1/0;const a=new Map;let l=!1,c=!1;for(const h of n){const f=t(h),m=Qp(h)-Qp(i);(m>0||m===0&&(f<r||f===r&&Xa(h.id,i.id)<0))&&(i=h,r=f),Zw(h)&&(!s||f<o||f===o&&Xa(h.id,s.id)<0)&&(s=h,o=f),a.set(h.label,(a.get(h.label)??0)+1),l||=Tg(h),c||=Ag(h)}const d=[...a.keys()].filter(h=>h!==i.label).sort((h,f)=>jw.compare(h,f)||Xa(h,f)),u=[i.label,...d].map(h=>{const f=a.get(h);return f>1?`${h} ×${f}`:h}).join(`
`);return{representativeId:i.id,memberIds:n.map(h=>h.id),label:u,hasTgt:l,hasEscort:c,...s?{airRepresentativeId:s.id}:{}}}function Kw(n,e){const t=[...n].sort((d,u)=>Xa(d.id,u.id));if(e===1)return t.map(d=>em([d]));const i=e===2?54:68,r=i*i,s=Aa*Aa,o=new Map,a=[],l=(d,u,h,f)=>`${d}:${u}:${h}:${f}`,c=(d,u)=>`${d}:${u}`;for(const d of t){if(d.status!=="active"||!d.onScreen||!Number.isFinite(d.screenX)||!Number.isFinite(d.screenY)||!Number.isFinite(d.position.x)||!Number.isFinite(d.position.y)||!Number.isFinite(d.position.z)){a.push({seed:d,members:[d]});continue}const u=Math.floor(d.position.x/Aa),h=Math.floor(d.position.y/Aa),f=Math.floor(d.position.z/Aa),m=Math.floor(d.screenX/i),v=Math.floor(d.screenY/i);let g;for(let p=-1;p<=1;p++)for(let w=-1;w<=1;w++)for(let _=-1;_<=1;_++){const x=o.get(l(d.faction,u+p,h+w,f+_));if(x)for(let I=-1;I<=1;I++)for(let D=-1;D<=1;D++){const R=x.get(c(m+I,v+D));if(R)for(const N of R){const S=d.position.x-N.seed.position.x,M=d.position.y-N.seed.position.y,L=d.position.z-N.seed.position.z;if(S*S+M*M+L*L>s)continue;const F=d.screenX-N.seed.screenX,k=d.screenY-N.seed.screenY;F*F+k*k<=r&&(!g||Xa(N.seed.id,g.seed.id)<0)&&(g=N)}}}if(g)g.members.push(d);else{const p={seed:d,members:[d]};a.push(p);const w=l(d.faction,u,h,f);let _=o.get(w);_||(_=new Map,o.set(w,_));const x=c(m,v),I=_.get(x);I?I.push(p):_.set(x,[p])}}return a.map(d=>em(d.members))}const gc=12,tm=.675,Jw=.15,Qw=5e3;function lu(n,e){const t=Number.isFinite(e)&&e>0?e:gc*tm/12,i=n===1?Math.min(24*t/gc,Math.max(10*t/gc,tm)):(n===2?15:17)*t/gc;return Math.min(Qw,Math.max(Jw,i))}function eE(n){const e=new In;e.name="far-air-display",e.visible=!1;const t=new we(new od(2.2,3.3,20),new bn({color:n,transparent:!0,opacity:.8,side:pn,depthTest:!1}));t.rotation.x=-Math.PI/2;const i=new hn(new Bt().setFromPoints([new b(0,.2,0),new b(0,1,0)]),new Pi({color:n,transparent:!0,opacity:.8,depthTest:!1})),r=Array.from({length:65},(a,l)=>{const c=l/64*Math.PI*2;return new b(Math.cos(c)*7.2,Math.sin(c)*7.2,0)}),s=new hn(new Bt().setFromPoints(r),new Pi({color:n,transparent:!0,opacity:.9,depthTest:!1})),o=Eg(n);return t.add(s,o),e.add(t,i),{root:e,base:t,pole:i,tgt:s,escort:o}}function tE(n,e,t){const{tier:i,representative:r,status:s,scale:o}=t,a=s!=="wreck",l=n.base!==null;n.base&&(n.base.visible=r&&a&&i!==3,n.base.scale.setScalar((t.baseScale??o)/.675)),n.icon.visible=r&&a,n.icon.scale.setScalar(o),n.icon.position.y=t.iconHeight,n.pole.visible=r&&a&&i!==3,n.pole.userData.naturalTop=t.poleHeight,n.wreck.visible=r&&s!=="active",n.wreck.scale.setScalar(o/.675),e.root.visible=r&&s==="active"&&i===3&&t.hasAir,e.base.scale.setScalar((t.farBaseScale??o)/.675),e.base.position.y=1.5,e.tgt.scale.setScalar(.675),e.escort.scale.setScalar(.675),e.tgt.visible=t.hasTgt&&!l,e.escort.visible=t.hasEscort&&!l&&t.faction!=="enemy";const c=e.pole.geometry.getAttribute("position"),d=Math.max(t.airAltitude,.6);e.pole.userData.naturalTop=d,c.getY(1)!==d&&(c.setY(1,d),c.needsUpdate=!0,e.pole.geometry.computeBoundingSphere()),n.label.position.y=i===3?t.hasAir?d:1.5:t.poleHeight;const u=n.label.userData.dom;u.textContent!==t.label&&(u.textContent=t.label),u.style.whiteSpace!=="pre"&&(u.style.whiteSpace="pre");const h=i===1?"14px":i===2?"13px":"12px";u.style.fontSize!==h&&(u.style.fontSize=h),u.style.lineHeight!=="1.15"&&(u.style.lineHeight="1.15");const f=r&&n.labelFade>0&&(i!==3||t.faction==="squadron");u.hidden=!f,n.label.userData.displayVisible=f}const nE=[[-5,-5],[0,7],[5,-5]],iE=[[-4,-4],[-4,2],[0,6],[4,2],[4,-4]],rE=[[-4,-4],[-4,4],[4,4],[4,-4]],sE=[[0,5.8],[-3.25,-3.1],[3.25,-3.1]];function nm(n){const e=new cg;e.moveTo(n[0][0],n[0][1]);for(const[t,i]of n.slice(1))e.lineTo(t,i);return e.closePath(),new jh(e)}function cu(n,e){return new bn({color:n,transparent:!0,opacity:e,side:pn,depthTest:!1,depthWrite:!1})}function oE(n,e){const t=new In,i=n==="ground"?rE:n==="ship"?iE:nE,r=new hn(new Bt().setFromPoints(i.map(([o,a])=>new b(o,a,0))),new Pi({color:e,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1}));if(r.name="outline",t.add(r),n==="air-filled"){const o=new we(nm(sE),cu(e,.9));o.name="filledinner",t.add(o)}else if(n==="air-outline"){const o=new we(new tl(.65,32),cu(e,.9));o.name="dot",o.position.y=-.3,t.add(o)}const s=new we(nm(i),cu(e,0));return s.name="pickmesh",t.add(s),t}function io(n){return!n.intangible&&(n.icon==="ground"||n.icon==="ship")}function El(n,e,t){return new b(e.x,io(n)?t(e.x,e.z):e.y,e.z)}function ld(n,e,t,i){const r=El(n,e,t);return n.intangible||(r.y=io(n)?r.y+i:Math.max(r.y,t(r.x,r.z)+i)),r}const Rc=8,Vc=1e-9,Ro=new b,Qi=new b,kn=new b,Ra=new b,xi=new b,Es=new b,du=new b,dr=new Vt,Or=new zt,uu=new zt,zo=Array.from({length:8},()=>new Vt),aE=Array.from({length:16},()=>new Vt),lE=Array.from({length:16},()=>new Vt),cE=[0,1,2],im=[0,1],dE=[0],vc=new Vt,_c=new Vt;function sl(n,e){switch(e){case 0:return n.w+n.x;case 1:return n.w-n.x;case 2:return n.w+n.y;case 3:return n.w-n.y;case 4:return n.w+n.z;default:return n.w-n.z}}function Gc(n,e,t){if(!Number.isFinite(e.w)||e.w<=0)return;const i=(e.x/e.w+1)*t.width/2,r=(1-e.y/e.w)*t.height/2;!Number.isFinite(i)||!Number.isFinite(r)||(n.left=Math.min(n.left,i),n.right=Math.max(n.right,i),n.top=Math.min(n.top,r),n.bottom=Math.max(n.bottom,r))}function rm(n,e,t){let i=aE,r=lE,s=n.length;n.forEach((o,a)=>i[a].copy(zo[o]));for(let o=0;o<6&&s;o++){let a=0;for(let l=0;l<s;l++){const c=i[(l+s-1)%s],d=i[l],u=sl(c,o),h=sl(d,o);u>=0!=h>=0&&r[a++].copy(c).lerp(d,u/(u-h)),h>=0&&r[a++].copy(d)}s=a,[i,r]=[r,i]}for(let o=0;o<s;o++)Gc(e,i[o],t)}function sm(n,e,t){vc.set(n.x,n.y,n.z,1).applyMatrix4(Or),_c.set(e.x,e.y,e.z,1).applyMatrix4(Or);let i=0,r=1;for(let o=0;o<6;o++){const a=sl(vc,o),l=sl(_c,o);if(!Number.isFinite(a)||!Number.isFinite(l)||a<0&&l<0)return null;if(a>=0!=l>=0){const c=a/(a-l);a<0?i=Math.max(i,c):r=Math.min(r,c)}}if(i>r)return null;const s={left:1/0,right:-1/0,top:1/0,bottom:-1/0};return dr.copy(vc).lerp(_c,i),Gc(s,dr,t),dr.copy(vc).lerp(_c,r),Gc(s,dr,t),Number.isFinite(s.right)?s:null}function Wc(n){return Number.isFinite(n.x)&&Number.isFinite(n.y)&&Number.isFinite(n.z)}function Io(n,e){const{camera:t,width:i,height:r}=e;du.copy(n).applyMatrix4(t.matrixWorldInverse);const s=-du.z;if(!Wc(du)||s<t.near||s>t.far||(Es.copy(n).project(t),!Wc(Es)||Es.z<-1-Vc||Es.z>1+Vc))return null;const o=(Es.x+1)*i/2,a=(1-Es.y)*r/2;return Number.isFinite(o)&&Number.isFinite(a)?{x:o,y:a,z:Es.z}:null}function Rg(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function ef(n){if(!n)return!1;const e=t=>t.visible&&t.opacity>0;return Array.isArray(n)?n.some(e):e(n)}function uE(n,e,t){const i=n.geometry,r=i.getAttribute("position"),s=i.index;if(!r)return;const o=s?.count??r.count,a=n.isMesh,l=n.isPoints,c=a?cE:l?dE:im,d=a?3:l||!n.isLineSegments?1:2,u=Array.isArray(n.material)?i.groups:[{start:0,count:o,materialIndex:0}];for(const h of u){const f=Array.isArray(n.material)?n.material[h.materialIndex??0]:n.material;if(!ef(f))continue;const m=Math.max(h.start,i.drawRange.start),v=Math.min(o,h.start+h.count,i.drawRange.start+i.drawRange.count);for(let g=m;g+c.length<=v;g+=d){let p=!0;for(let w=0;w<c.length;w++){xi.fromBufferAttribute(r,s?s.getX(g+w):g+w).applyMatrix4(n.matrixWorld);const _=zo[w].set(xi.x,xi.y,xi.z,1).applyMatrix4(Or);if(!Number.isFinite(_.x)||!Number.isFinite(_.y)||!Number.isFinite(_.z)||!Number.isFinite(_.w)){p=!1;break}}p&&rm(c,e,t)}}if(n.isLineLoop&&o>1&&!Array.isArray(n.material)&&i.drawRange.start===0&&i.drawRange.count>=o){let h=!0;for(const[f,m]of[[0,o-1],[1,0]]){xi.fromBufferAttribute(r,s?s.getX(m):m).applyMatrix4(n.matrixWorld);const v=zo[f].set(xi.x,xi.y,xi.z,1).applyMatrix4(Or);(!Number.isFinite(v.x)||!Number.isFinite(v.y)||!Number.isFinite(v.z)||!Number.isFinite(v.w))&&(h=!1)}h&&rm(im,e,t)}}function hE(n){if(!Rg(n.icon))return null;const e={left:1/0,right:-1/0,top:1/0,bottom:-1/0};return n.icon.traverseVisible(t=>{const i=t;if(!i.geometry||!ef(i.material))return;const r=i.geometry;r.boundingBox||r.computeBoundingBox();const s=r.boundingBox;if(!s||s.isEmpty())return;for(let a=0;a<8;a++){if(xi.set(a&1?s.max.x:s.min.x,a&2?s.max.y:s.min.y,a&4?s.max.z:s.min.z).applyMatrix4(t.matrixWorld),!Wc(xi))return;const l=zo[a].set(xi.x,xi.y,xi.z,1).applyMatrix4(Or);if(!Number.isFinite(l.x)||!Number.isFinite(l.y)||!Number.isFinite(l.z)||!Number.isFinite(l.w))return}let o=!0;for(let a=0;a<6;a++){let l=0;for(const c of zo)sl(c,a)>=0&&l++;if(!l)return;l<8&&(o=!1)}if(o)for(const a of zo)Gc(e,a,n);else uE(i,e,n)}),Number.isFinite(e.right)?e:null}function Cg(n){const e=typeof getComputedStyle=="function"?getComputedStyle(n):n.style,t=d=>{const u=Number.parseFloat(d??"");return Number.isFinite(u)?u:0},i=t(e.fontSize)||t(n.style.fontSize),r=i>0?i:14,s=e.lineHeight||n.style.lineHeight,o=t(s),a=o>0?/^[\d.]+$/.test(s)?o*r:o:r*1.15,l=Number.isFinite(a)&&a>0?a:14*1.15;let c=Number(n.offsetHeight);if(!Number.isFinite(c)||c<=0){const d=typeof n.getBoundingClientRect=="function"?n.getBoundingClientRect():null;c=d?Number(d.height??d.bottom-d.top):0}return(!Number.isFinite(c)||c<=0)&&(c=Math.max(1,(n.textContent??"").split(`
`).length)*l+t(e.paddingTop)+t(e.paddingBottom)),{height:Number.isFinite(c)&&c>0?c:l,lineHeight:l}}function hu(n,e){const t=n.geometry.getAttribute("position");if(!t||t.count<2||!Wc(e))return!1;const i=t.array instanceof Float32Array?Math.fround:a=>a,r=i(e.x),s=i(e.y),o=i(e.z);return!Number.isFinite(r)||!Number.isFinite(s)||!Number.isFinite(o)?!1:(t.getX(1)===r&&t.getY(1)===s&&t.getZ(1)===o||(t.setXYZ(1,r,s,o),t.needsUpdate=!0,n.geometry.boundingBox&&n.geometry.computeBoundingBox(),n.geometry.computeBoundingSphere()),!0)}function fE(n,e,t){dr.set(Qi.x,Qi.y,Qi.z,1).applyMatrix4(Or);const i=dr.w,r=Or.elements,s=1-t*2/n.height,o=r[5]-s*r[7];if(!Number.isFinite(o)||Math.abs(o)<Vc)return!1;const a=(s*dr.w-dr.y)/o,l=e.y-t,c=2*i/(n.camera.projectionMatrix.elements[5]*n.height),d=Math.max(Qi.distanceTo(Ro),c*Math.max(1,l))*4;if(!Number.isFinite(a)||a<=0||a>d||(kn.copy(Qi),kn.y+=a,dr.set(kn.x,kn.y,kn.z,1).applyMatrix4(Or),dr.w<i/2||dr.w>i*2))return!1;const u=Io(kn,n),h=Math.max(Rc,Math.min(n.width/4,l));return!!u&&Math.abs(u.y-t)<.01&&Math.abs(u.x-e.x)<=h}function pE(n,e,t){kn.set(e.x*2/n.width-1,1-t*2/n.height,e.z).unproject(n.camera);const i=Io(kn,n);return!!i&&Math.abs(i.y-t)<.01}function mE(n){const{camera:e,width:t,height:i,group:r,icon:s,pole:o,dom:a,isAir:l,isMerged:c,visible:d}=n,u=Number.isFinite(n.naturalTop)?n.naturalTop:.6,h=o.geometry.getAttribute("position");h&&h.count>0?Ro.fromBufferAttribute(h,0).applyMatrix4(o.matrixWorld):Ro.set(0,.2,0).applyMatrix4(r.matrixWorld),Qi.set(0,u,0).applyMatrix4(r.matrixWorld),kn.copy(Qi),a.style.transform!=="translate(0, 0)"&&(a.style.transform="translate(0, 0)");const f=Number.isFinite(t)&&t>0&&Number.isFinite(i)&&i>0;Or.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse);const m=f?Io(Ro,n):null,v=f?Io(Qi,n):null,g=n.measurement??Cg(a),p=Rg(o)&&ef(o.material)&&!!h&&h.count>=2,w=f?hE(n):null,_=f&&p?sm(Ro,Qi,n):null,x=!l,I=d&&!a.hidden&&!!(w||x&&_);if(I&&c&&p&&h&&h.count>=2&&m&&v&&Math.abs(m.y-v.y)<g.height){const Te=m.y-g.height-.1;!fE(n,v,Te)&&!pE(n,v,Te)&&kn.copy(Qi)}const D=o.matrixWorld.determinant();Number.isFinite(D)&&Math.abs(D)>Vc?(uu.copy(o.matrixWorld).invert(),Ra.copy(kn).applyMatrix4(uu),hu(o,Ra)||(kn.copy(Qi),Ra.copy(Qi).applyMatrix4(uu),hu(o,Ra))):hu(o,Ra.set(0,u,0));const R=o.userData.labelDisplayTop;if(R?(R.x=kn.x,R.y=kn.y,R.z=kn.z):o.userData.labelDisplayTop={x:kn.x,y:kn.y,z:kn.z},!f)return a.style.left="0px",a.style.top="0px",!1;const N=Io(kn,n)??v;xi.setFromMatrixPosition(s.matrixWorld);const S=Io(xi,n),M=S?.x??N?.x??m?.x??t/2,L=p?sm(Ro,kn,n):null;let F=w?.right??(x?L?.right:void 0)??M;x?L&&(F=Math.max(F,L.right)):N&&(F=Math.max(F,N.x)),Number.isFinite(F)||(F=M);let k=N?.y??S?.y??m?.y??i/2;c&&p&&m&&N?k=Math.min(m.y,N.y):l&&!c&&(k=(S?.y??k)-g.lineHeight/2);const W=w??(x?L:null);I&&W&&(!Number.isFinite(k)||k<0||k>i-g.height)&&(k=W.top);const q=Number(a.offsetWidth),j=Number.isFinite(q)&&q>0?q:0,re=I?Math.max(0,Math.min(t-j-Rc,F+Rc)):F+Rc;I&&(k=Math.max(0,Math.min(i-g.height,k)));const X=`${re}px`,me=`${k}px`;return a.style.left!==X&&(a.style.left=X),a.style.top!==me&&(a.style.top=me),I}function tf(n="mouse",e=!1){return n==="touch"||n==="pen"||e?32:14}function gE(n,e,t,i,r){if(![n.x,n.y,n.z,e.left,e.top,e.width,e.height,t,i,r].every(Number.isFinite)||e.width<=0||e.height<=0||r<0||n.z<-1||n.z>1)return null;const s=e.left+(n.x+1)*e.width/2,o=e.top+(1-n.y)*e.height/2;return s<e.left-r||s>e.left+e.width+r||o<e.top-r||o>e.top+e.height+r?null:Math.hypot(s-t,o-i)}function vE(n,e,t,i=0){return[n.left,n.right,n.top,n.bottom,e,t,i].every(Number.isFinite)&&n.right>n.left&&n.bottom>n.top&&i>=0&&e>=n.left-i&&e<=n.right+i&&t>=n.top-i&&t<=n.bottom+i}const om=new Set(["markers","drawing","links","range","layers"]),am=new Set(["units","equipment","groups","routes","links"]),fu=[{id:"units",label:"单位",title:"单位与空间编辑"},{id:"equipment",label:"装备",title:"机体与武器挂载"},{id:"groups",label:"编组",title:"编组与批量调度"},{id:"routes",label:"航路",title:"航路、绑定与航迹"},{id:"markers",label:"标记",title:"自定义地图点位"},{id:"drawing",label:"作图",title:"标尺、圆规与范围规划"},{id:"links",label:"连线",title:"单位与标记连线"},{id:"terrain",label:"地形",title:"画布、地形与城区"},{id:"prefabs",label:"预制件",title:"预制件摆放与地形整平"},{id:"range",label:"距离",title:"距离判定与三维范围"},{id:"turns",label:"回合",title:"回合草稿与战斗结果"},{id:"layers",label:"图层",title:"地图显示与航迹图层"},{id:"project",label:"存档",title:"工程保存、导入与恢复"}];function _E(n){const e=document.querySelector("#app"),t=document.querySelector("#edit-panel");if(!e||!t)throw new Error("Editor sidebar requires the existing workspace shell");if(t.dataset.sidebarMounted)throw new Error("Editor sidebar is already mounted");const i=(ie,Ye="")=>{const Fe=document.createElement(ie);return Fe.textContent=Ye,Fe},r=(ie,Ye,Fe)=>{const _t=i("button",ie);return _t.type="button",Fe&&(_t.id=Fe),_t.addEventListener("click",Ye),_t},s=ie=>{const Ye=document.querySelector(ie);if(!Ye)throw new Error(`Missing sidebar source control: ${ie}`);return Ye},o=s("#unit-editor"),a=s("#terrain-editor"),l=s("#route-section"),c=s("#archive-panel"),d=s("#workflow-panel"),u=s("#tab-units").parentElement,h=s(".selection-panel"),f=s(".event-panel"),m=s(".range-panel"),v=s(".trail-panel"),g=document.createComment("archive-manager-portal");c.before(g);const p=i("div"),_=s("#edit-add").closest(".edit-actions").previousElementSibling;for(;o.firstChild&&o.firstChild!==_;)p.append(o.firstChild);l.remove(),o.querySelectorAll(":scope > .rule").forEach(ie=>ie.remove());const x=Array.from(o.children),I=s("#edit-label").closest("label"),D=s("#tool-move").closest(".edit-actions"),R=x.indexOf(I),N=x.indexOf(D),S=(ie,Ye,Fe)=>{const _t=i("details");return _t.className="sidebar-submenu",_t.open=Fe,_t.append(i("summary",ie)),_t.append(...Ye),_t};o.replaceChildren(S("单位与选择",x.slice(0,R),!0),S("属性与战损",x.slice(R,N),!1),S("位置、姿态与吸附",x.slice(N),!0)),a.querySelector(":scope > .eyebrow")?.remove();const M=Array.from(a.children),L=M.indexOf(s("#terrain-brush").closest("label")),F=M.indexOf(s("#terrain-preset").closest("label")),k=s("#terrain-undo").closest(".edit-actions"),W=M.indexOf(k);a.replaceChildren(S("画布尺寸与采样",M.slice(0,L),!1),S("笔刷、城区与等高线",M.slice(L,F),!0),S("地形生成与重置",M.slice(F,W),!1),...M.slice(W)),t.replaceChildren(),t.classList.add("editor-sidebar"),t.dataset.sidebarMounted="true",t.hidden=!1,e.classList.add("editor-sidebar-mounted"),t.setAttribute("aria-label","场景编辑器");const q=i("header");q.className="sidebar-header";const j=i("div");j.className="sidebar-title-row";const re=i("strong","场景编辑器"),X=i("span","浏览");X.id="editor-sidebar-state",X.className="sidebar-state",X.setAttribute("role","status"),j.append(re,X);const me=i("div");me.className="sidebar-toolbar";const Te=r("进入编辑",()=>{Se.editable&&n.toggleEdit()},"sidebar-toggle-edit"),Be=r("全图",()=>n.fitMap(),"sidebar-fit-map");Be.title="适配整个地图及当前单位";const He=r("俯视",()=>n.topView(),"sidebar-top-view");He.title="切换地图俯视视角";let lt=!1;const Mt=r("收起",()=>ce(!lt),"sidebar-collapse");me.append(Te,Be,He,Mt);const te=i("div");te.className="sidebar-quick-actions";const Re=r("保存修订",()=>{if(Se.playerView)return;const ie=ye();ie&&!ie.disabled&&ie.click()},"sidebar-quick-save"),oe=r("提交回合",()=>{if(Se.playerView)return;se("turns");const ie=document.querySelector("#workflow-commit");ie&&!ie.disabled&&ie.click()},"sidebar-quick-commit"),Je=r("另存为…",()=>{Se.playerView||(se("turns"),document.querySelector("#editor-save-as-name")?.focus())},"sidebar-quick-save-as"),ne=r("生成快照",()=>{if(Se.playerView)return;const ie=document.querySelector("#workflow-snapshot");ie&&!ie.disabled&&!ie.hidden&&ie.click()},"sidebar-quick-snapshot");te.append(Re,Je,oe,ne);const de=i("div");de.className="sidebar-viewer-toolbar";const Q=r("导出查看器",()=>{Se.playerView&&n.viewerExport?.()},"sidebar-viewer-export"),ee=r("撤销",()=>{Se.playerView&&Se.editable&&Se.viewerCanUndo&&n.viewerUndo?.()},"sidebar-viewer-undo"),C=r("重做",()=>{Se.playerView&&Se.editable&&Se.viewerCanRedo&&n.viewerRedo?.()},"sidebar-viewer-redo");de.append(Q,ee,C),q.append(j,me,te,de);const ge=i("nav");ge.className="sidebar-nav",ge.setAttribute("role","tablist"),ge.setAttribute("aria-label","编辑工具菜单"),ge.setAttribute("aria-orientation","vertical");const he=i("div");he.className="sidebar-content",he.id="editor-sidebar-content";const Ce=new Map,pe=new Map,Ve=new Map,ae=new Map;let Ae="units",Se={editing:!1,editable:!0,mapOnly:!1},Ne,A=!1,y=0;const z=ie=>Se.playerView?om.has(ie):!(Se.mapOnly&&am.has(ie));for(const ie of fu){const Ye=r(ie.label,()=>se(ie.id),`sidebar-tab-${ie.id}`);Ye.title=ie.title,Ye.setAttribute("role","tab"),Ye.setAttribute("aria-controls",`sidebar-panel-${ie.id}`),Ye.dataset.sidebarTab=ie.id,Ve.set(ie.id,Ye),ge.append(Ye);const Fe=i("section");Fe.id=`sidebar-panel-${ie.id}`,Fe.className="sidebar-tab-panel",Fe.setAttribute("role","tabpanel"),Fe.setAttribute("aria-labelledby",Ye.id);const _t=i("h2",ie.title);_t.className="sidebar-panel-heading";const Et=i("div");Et.className="sidebar-panel-body",Et.dataset.sidebarPanel=ie.id,Fe.append(_t,Et),Ce.set(ie.id,Fe),pe.set(ie.id,Et),he.append(Fe)}o.hidden=!1,a.hidden=!1,pe.get("units").append(h,o),pe.get("terrain").append(a),pe.get("turns").append(d,p,f),l.open=!0;const K=l.querySelector(":scope > summary"),$=Array.from(l.children).filter(ie=>ie!==K),G=$.indexOf(l.querySelector("#route-list")),Ue=$.indexOf(l.querySelector("#track-edit").closest(".edit-actions"));l.replaceChildren(K,S("航路设置与选中单位绑定",$.slice(0,G),!0),S("航路点与顺序",$.slice(G,Ue),!0),S("航迹曲线与控制点",$.slice(Ue),!1)),pe.get("routes").append(l);const xe=i("section");xe.className="sidebar-card",xe.append(i("h3","当前航路的绑定对象"));const Ge=i("div");Ge.id="route-bindings",Ge.className="sidebar-bound-list",Ge.setAttribute("aria-live","polite"),Ge.textContent="当前航路暂无绑定对象";const Xe=i("div");Xe.className="edit-actions";const _e=i("button","选中全部绑定单位");_e.type="button",_e.id="route-select-bound",Xe.append(_e);const ke=i("label");ke.className="edit-row",ke.append(i("span","编组"));const Qe=i("select");Qe.id="route-group-select",Qe.setAttribute("aria-label","绑定至当前航路的编组"),Qe.add(new Option("选择编组","")),ke.append(Qe);const et=i("button","将编组绑定当前航路");et.type="button",et.id="route-bind-group";const Pe=i("div");Pe.className="edit-actions",Pe.append(et),xe.append(Ge,Xe,ke,Pe),pe.get("routes").append(xe),pe.get("range").append(m),pe.get("layers").append(v);const ut=i("section");ut.className="sidebar-card",ut.append(i("h3","航路显示"));const U=(ie,Ye)=>{const Fe=i("label");Fe.className="check-row";const _t=i("input");return _t.id=ie,_t.type="checkbox",_t.checked=!0,Fe.append(_t,document.createTextNode(Ye)),Fe};ut.append(U("route-visible","显示所有航路与航路点"),U("route-labels","显示航路点名称与绑定对象")),pe.get("layers").append(ut),pe.get("project").append(c),u.hidden=!0,u.classList.add("sidebar-legacy-tabs"),t.append(q,ge,he,u);function ye(){return["#task-editor-save","#map-editor-save","#workflow-save-draft"].map(ie=>document.querySelector(ie)).find(ie=>ie&&!ie.hidden)}function be(){if(Se.playerView){te.hidden=!0;for(const Et of[Re,Je,oe,ne])Et.hidden=!0,Et.disabled=!0;return}const ie=ye(),Ye=document.querySelector("#workflow-commit");Re.hidden=!ie,Re.disabled=!ie||ie.disabled,Re.textContent=ie?.id==="workflow-save-draft"?"保存草稿":ie?.id==="map-editor-save"?"保存地图修订":"保存任务修订",oe.hidden=!Ye||Ye.hidden||Ye.disabled,oe.disabled=!Ye||Ye.disabled;const Fe=["#map-editor-save-as","#task-editor-save-as"].map(Et=>document.querySelector(Et)).find(Et=>Et&&!Et.hidden);Je.hidden=!Fe,Je.disabled=!Fe||Fe.disabled;const _t=document.querySelector("#workflow-snapshot");ne.hidden=!_t||_t.hidden,ne.disabled=!_t||_t.disabled,te.hidden=Re.hidden&&Je.hidden&&oe.hidden&&ne.hidden}function qe(){for(const Ye of fu){const Fe=z(Ye.id),_t=Fe&&Ye.id===Ae,Et=Ve.get(Ye.id);Et.hidden=!!Se.playerView&&!Fe,Et.disabled=!Fe,Et.setAttribute("aria-selected",String(_t)),Et.tabIndex=_t?0:-1,Ce.get(Ye.id).hidden=!_t}const ie=Se.playerView?"玩家查看器":"场景编辑器";re.textContent=ie,t.setAttribute("aria-label",ie),ge.setAttribute("aria-label",Se.playerView?"标注工具菜单":"编辑工具菜单"),t.dataset.activeTab=Ae,t.dataset.playerView=String(!!Se.playerView),t.dataset.editing=String(Se.editing),t.dataset.editable=String(Se.editable),t.dataset.active=String(Se.active!==!1),X.textContent=Se.playerView?Se.editing?"标注中":"浏览":Se.editable?Se.editing?"编辑中":"浏览":"只读历史",Te.textContent=Se.playerView?Se.editing?"结束标注":"编辑标注":Se.editing?"退出编辑":"进入编辑",Te.disabled=!Se.editable,ut.hidden=!!Se.playerView,Q.hidden=!Se.playerView,Q.disabled=!Se.playerView||!n.viewerExport,ee.hidden=!Se.playerView||!n.viewerUndo,C.hidden=!Se.playerView||!n.viewerRedo,ee.disabled=!Se.playerView||!Se.editable||!Se.viewerCanUndo||!n.viewerUndo,C.disabled=!Se.playerView||!Se.editable||!Se.viewerCanRedo||!n.viewerRedo,de.hidden=!Se.playerView,be()}function ce(ie){lt=ie,t.dataset.collapsed=String(ie),Mt.textContent=ie?"展开":"收起",Mt.setAttribute("aria-expanded",String(!ie))}function se(ie){const Fe={unit:"units",route:"routes",group:"groups",marker:"markers",draw:"drawing",turn:"turns",archive:"project"}[ie]??ie;!Ce.has(Fe)||!z(Fe)||(ae.set(Ae,he.scrollTop),Ae=Fe,ce(!1),qe(),he.scrollTop=ae.get(Fe)??0,n.chooseTool(Fe))}ge.addEventListener("keydown",ie=>{if(!["ArrowUp","ArrowDown","Home","End"].includes(ie.key))return;const Ye=fu.filter(Et=>z(Et.id)&&!Ve.get(Et.id).hidden&&!Ve.get(Et.id).disabled),Fe=Ye.findIndex(Et=>Ve.get(Et.id)===document.activeElement);if(Fe<0)return;ie.preventDefault();const _t=ie.key==="Home"?Ye[0]:ie.key==="End"?Ye.at(-1):Ye[(Fe+(ie.key==="ArrowDown"?1:-1)+Ye.length)%Ye.length];se(_t.id),Ve.get(_t.id).focus()});const $e=()=>{!Se.playerView&&e.dataset.workspace==="manager"?c.parentNode!==e&&(g.parentNode===e?e.insertBefore(c,g.nextSibling):e.append(c),c.open=!1):(c.parentNode!==pe.get("project")&&pe.get("project").append(c),c.open=!0)};return new MutationObserver($e).observe(e,{attributes:!0,attributeFilter:["data-workspace"]}),new MutationObserver(be).observe(d,{subtree:!0,attributes:!0,attributeFilter:["hidden","disabled"]}),ce(!1),qe(),$e(),{panels:{groups:pe.get("groups"),markers:pe.get("markers"),drawing:pe.get("drawing"),equipment:pe.get("equipment"),links:pe.get("links"),prefabs:pe.get("prefabs")},select:se,sync(ie){const Ye=!!ie.playerView&&!Se.playerView,Fe=!ie.playerView&&!!Se.playerView,_t=ge.contains(document.activeElement),Et=Fe?Ne:void 0;Ye&&(Ne=Ae,A=lt,y=he.scrollTop,ae.set(Ae,he.scrollTop)),Se={...ie},t.hidden=!1,Fe&&(ae.set(Ae,he.scrollTop),Ae=Ne??"units",Ne=void 0,ce(A)),Se.playerView&&!om.has(Ae)?(Ae="markers",ce(!1)):!Se.playerView&&Se.mapOnly&&am.has(Ae)&&(Ae="terrain"),qe(),$e(),(Ye||Fe)&&(he.scrollTop=Fe&&Ae===Et?y:ae.get(Ae)??0,ae.set(Ae,he.scrollTop)),_t&&!z(document.activeElement.dataset.sidebarTab)&&Ve.get(Ae).focus()}}}function xE(n,e){let t="";const i=(R,N="")=>{const S=document.createElement(R);return S.textContent=N,S};n.append(i("h3","编组 / 批量操作"));const r=i("div");r.id="group-list",r.className="unit-picker",n.append(r);const s=i("label","编组名称（回车即改名）");s.className="edit-row";const o=i("input");o.id="group-name",o.maxLength=128,s.append(o),n.append(s);const a=i("label","编组颜色");a.className="edit-row";const l=i("input");l.type="color",l.id="group-color",l.value="#62ffa8",a.append(l),n.append(a);const c=i("div");c.className="edit-actions",n.append(c);const d=[],u=(R,N,S,M=c)=>{const L=i("button",N);return L.type="button",L.id=R,L.addEventListener("click",S),M.append(L),d.push(L),L},h=i("div");h.id="group-state",h.className="edit-hint",h.setAttribute("role","status");const f=()=>e.read().groups.find(R=>R.id===t),m=()=>e.units().filter(R=>R.groupId===t).map(R=>R.id),v=(R,N)=>{e.change(R,N)&&D()};u("group-create","新建并分配所选",()=>{if(!e.editable())return;const R=o.value.trim()||`编组 ${e.read().groups.length+1}`,N=l.value,S=new Set(e.selectedIds()),M=`group-${crypto.randomUUID()}`;v("新建编组",(L,F)=>{L.groups.push({id:M,name:R,color:N}),F.filter(k=>S.has(k.id)).forEach(k=>{k.groupId=M}),t=M})});const g=()=>{if(!f()||!o.value.trim())return;const R=o.value.trim(),N=l.value;v("修改编组",S=>{const M=S.groups.find(L=>L.id===t);M.name=R,M.color=N})};u("group-save","保存名称 / 颜色",g),o.addEventListener("keydown",R=>{R.key==="Enter"&&(R.preventDefault(),g())});const p=i("div");p.className="edit-actions",n.append(p),u("group-assign","所选加入编组",()=>{if(!f())return;const R=new Set(e.selectedIds());v("分配编组",(N,S)=>S.filter(M=>R.has(M.id)).forEach(M=>{M.groupId=t}))},p),u("group-unassign","所选退出编组",()=>{const R=new Set(e.selectedIds());v("移除编组归属",(N,S)=>S.filter(M=>R.has(M.id)).forEach(M=>{delete M.groupId}))},p);const w=i("div");w.className="edit-actions",n.append(w);const _=o;u("group-rename","改名",()=>{_.focus(),_.select()},w),u("group-select","选中整组",()=>{f()&&e.select(m())},w),u("group-focus","定位整组",()=>{f()&&e.focus(m())},w),u("group-copy","复制整组",()=>{const R=f();R&&e.copy(R)},w);const x=i("div");x.className="edit-actions",n.append(x),u("group-delete","删除编组 / 保留单位",()=>{f()&&v("删除编组",(R,N)=>{R.groups=R.groups.filter(S=>S.id!==t),N.filter(S=>S.groupId===t).forEach(S=>{delete S.groupId}),t=""})},x);const I=i("div");I.id="group-members",I.className="unit-picker",n.append(I,h);function D(){const R=e.read(),N=e.units(),S=e.selectedIds(),M=e.editable();R.groups.some(F=>F.id===t)||(t=R.groups[0]?.id??""),r.replaceChildren(...R.groups.map(F=>{const k=N.filter(q=>q.groupId===F.id).length,W=i("button",`${F.name} (${k})`);return W.style.borderColor=F.color,W.setAttribute("aria-pressed",String(F.id===t)),W.addEventListener("click",()=>{t=F.id,o.value=F.name,l.value=F.color,D()}),W.addEventListener("dblclick",()=>e.select(N.filter(q=>q.groupId===F.id).map(q=>q.id))),W}));const L=f();document.activeElement!==o&&(o.value=L?.name??""),document.activeElement!==l&&(l.value=L?.color??"#62ffa8"),o.disabled=l.disabled=!M;for(const F of d)F.disabled=!M;for(const F of["group-select","group-focus"])n.querySelector(`#${F}`).disabled=!L||!m().length;for(const F of["group-save","group-rename","group-assign","group-copy","group-delete"])n.querySelector(`#${F}`).disabled=!M||!L;n.querySelector("#group-assign").disabled||=!S.length,n.querySelector("#group-copy").disabled||=!m().length,n.querySelector("#group-unassign").disabled=!M||!N.some(F=>S.includes(F.id)&&F.groupId),I.replaceChildren(...N.filter(F=>F.groupId===t).map(F=>{const k=i("button",F.label);return k.setAttribute("aria-pressed",String(S.includes(F.id))),k.addEventListener("click",()=>e.select([F.id])),k})),h.textContent=`${L?`${L.name} · ${m().length} 个单位`:"暂无编组"} / 当前选择 ${S.length} 个${M?"":" / 只读"}`}return D(),{sync:D}}const Ca=new WeakMap,yn=n=>JSON.stringify([n.id,n.revision]),pu=n=>({id:n.id,revision:n.revision}),yE=n=>({L:"轻型",M:"中型",H:"重型"})[n];function lm(n,e,t){const i=n.sessions.find(s=>s.id===e),r=i?.sealedScenes?.find(s=>s.turn===t);return JSON.stringify([n.id,n.players,n.aircraft,n.sp,i?.status,i?.workflow,r?.resourceSnapshot??i?.resourceSnapshot,r?.rulesSnapshot??i?.rulesSnapshot,(r?.units??i?.units??[]).map(s=>({id:s.id,player:s.player,aircraftRef:s.aircraftRef,loadout:s.loadout,spRefs:s.spRefs,playerActions:s.playerActions}))])}function cm(n,e){const t=new Map;for(const i of[...n,...e])t.has(yn(i))||t.set(yn(i),i);return[...t.values()].sort((i,r)=>i.id===r.id?r.revision-i.revision:i.id.localeCompare(r.id))}function bE(n,e){const t={};Ca.set(n,t);const i=(Q,ee="",C="")=>{const ge=document.createElement(Q);return ge.textContent=ee,ge.id=C,ge},r=i("section");r.className="player-roster";const s=i("div");s.className="player-roster-header";const o=i("button","新建玩家","player-roster-new");o.type="button",n.getAttribute("data-collapsed")===null&&typeof matchMedia=="function"&&matchMedia("(max-width: 600px) and (pointer: coarse)").matches&&n.setAttribute("data-collapsed","true");const a=n.getAttribute("data-collapsed")==="true",l=i("button",a?"展开":"收起","player-roster-collapse");l.type="button",l.setAttribute("aria-expanded",String(!a)),s.append(i("h3","玩家"),o,l);const c=i("div","","player-roster-form-area");c.hidden=!0;const d=i("div","","player-roster-pending");d.hidden=!0;const u=i("div","","player-roster-list");u.className="player-roster-list";const h=i("p","","player-roster-feedback");h.setAttribute("role","status"),h.hidden=!0,r.append(s,c,d,u,h),n.replaceChildren(r);let f,m,v,g="",p=-1,w="",_=[],x=[],I=[],D=Mf,R="",N="",S="",M=0,L=0,F=0,k,W,q,j;const re=[],X=[],me=new Map,Te=[],Be=Q=>{const ee=Q instanceof Error?Q.message:String(Q);h.textContent=ee,h.hidden=!1,e.report(ee)},He=()=>{if(Ca.get(n)!==t||!n.isConnected||!r.isConnected||!f)throw new Error("玩家栏已变化，请使用当前面板。");if(e.readRevision&&f.revision!==void 0){if(e.readRevision()!==f.revision)throw new Error("工程已变化，请等待玩家栏同步。")}else if(e.read&&lm(e.read(),f.sessionId,f.turn)!==w)throw new Error("工程已变化，请等待玩家栏同步。");if(f.mapOnly)throw new Error("地图模式下玩家栏为只读。");return f},lt=Q=>{try{He(),Q()}catch(ee){Be(ee)}},Mt=()=>{const Q=He();if(!Q.editable)throw new Error("历史回合或当前场景为只读。");if(Q.pending||e.busy?.())throw new Error("请先完成或取消当前放置。");return Q},te=(Q,ee,C,ge,he)=>{const Ce=i("label",C);Ce.htmlFor=ee;const pe=i("select","",ee);for(const[Ve,ae]of ge){const Ae=i("option",ae);Ae.value=Ve,pe.append(Ae)}return pe.value=he,Ce.append(pe),Q.append(Ce),re.push(pe),pe},Re=(Q,ee,C)=>{const ge=Q.spSlots?.[C];return!!ge&&!!ee.weapon&&ee.weapon.kind!=="normal"&&(!D.config.enforceWeight||!!ee.weapon.weight&&P0(ge,ee.weapon.weight))&&(ee.weapon.kind==="universal"||!!Q.allowedWeapons?.includes(ee.name))},oe=()=>{const Q=!!f?.editable&&!f.mapOnly&&!f.pending;o.disabled=!Q;for(const ee of re)ee.disabled=!Q;q&&(q.disabled=!Q||!k?.playerId),j&&(j.disabled=!Q||!k?.playerId||!k?.aircraftKey);for(const ee of Te)ee.node.disabled=!Q||!ee.available;for(const[ee,C]of me)C.setAttribute("aria-selected",String(ee===f?.selectedUnitId)),C.setAttribute("data-selected",String(ee===f?.selectedUnitId))},Je=()=>{c.replaceChildren(),re.length=0,X.length=0,W=void 0,q=void 0,j=void 0;const Q=++L;if(c.hidden=!k,!k||!f)return;const ee=k,C=()=>{if(k!==ee||Q!==L||!c.isConnected)throw new Error("玩家创建表单已变化。")},ge=i("form","","player-roster-form");ge.className="player-form",ge.append(i("h4","呼号"));const he=new Set(_.map(Ne=>Ne.player?.id).filter(Boolean)),Ce=(f.project.players??[]).filter(Ne=>!he.has(Ne.id));Ce.some(Ne=>Ne.id===ee.playerId)||(ee.playerId=""),W=te(ge,"player-roster-player","玩家呼号",[["","请选择玩家"],...Ce.map(Ne=>[Ne.id,Ne.callsign])],ee.playerId),Ce.length||ge.append(i("p","暂无可用呼号")),ge.append(i("h4","装备")),q=te(ge,"player-roster-aircraft","机体",[["","请选择机体"],...x.map(Ne=>[yn(Ne),`${Ne.name} · 修订 ${Ne.revision}`])],ee.aircraftKey);const pe=i("div","GUN / MSL / FLR","player-roster-inherent");pe.className="player-chips",ge.append(pe);const Ve=i("div","","player-roster-slots");Ve.className="player-slots",ge.append(Ve);const ae=x.find(Ne=>yn(Ne)===ee.aircraftKey);ae&&(ee.loadout=ee.loadout.filter(Ne=>{const A=I.find(y=>yn(y)===yn(Ne.weaponRef));return A&&Re(ae,A,Ne.slot)}),ae.spSlots?.length||Ve.append(i("p","无 SP 槽")),ae.spSlots?.forEach((Ne,A)=>{const y=i("div");y.className="player-slot";const z=I.filter(G=>Re(ae,G,A)),K=ee.loadout.find(G=>G.slot===A)?.weaponRef,$=te(y,`player-roster-slot-${A}`,`SP${A+1} · ${yE(Ne)} ${Ne}`,[["","空槽"],...z.map(G=>[yn(G),`${G.name} · ${G.weapon?.weight??""} · 修订 ${G.revision}`])],K?yn(K):"");X.push({slot:A,node:$,choices:z}),$.addEventListener("change",()=>lt(()=>{if(C(),!$.isConnected)throw new Error("SP 槽位已变化。");if($.value&&!z.some(Ue=>yn(Ue)===$.value))throw new Error("所选 SP 的重量或机体许可不匹配。");ee.loadout=ee.loadout.filter(Ue=>Ue.slot!==A);const G=z.find(Ue=>yn(Ue)===$.value);G&&ee.loadout.push({slot:A,weaponRef:pu(G)}),ee.loadout.sort((Ue,xe)=>Ue.slot-xe.slot)})),Ve.append(y)}));const Ae=i("div");Ae.className="player-actions",j=i("button","完成配置","player-roster-create"),j.type="submit";const Se=i("button","取消","player-roster-create-cancel");Se.type="button",Ae.append(j,Se),ge.append(Ae),c.append(ge),W.addEventListener("change",()=>lt(()=>{C(),ee.playerId=W.value,oe()})),q.addEventListener("change",()=>lt(()=>{if(C(),!ee.playerId)throw new Error("请先选择玩家呼号。");if(q.value&&!x.some(Ne=>yn(Ne)===q.value))throw new Error("机体修订已变化。");ee.aircraftKey=q.value,Je()})),Se.addEventListener("click",()=>lt(()=>{C(),k=void 0,Je()})),ge.addEventListener("submit",Ne=>{Ne.preventDefault(),lt(()=>{C();const A=Mt();if(ee.projectId!==A.project.id||ee.sessionId!==A.sessionId||ee.turn!==A.turn)throw new Error("创建场景或回合已变化，请取消后重新新建。");if(!(A.project.players??[]).some(G=>G.id===ee.playerId)||_.some(G=>G.player?.id===ee.playerId))throw new Error("请选择尚未加入当前场景的玩家。");const y=x.find(G=>yn(G)===ee.aircraftKey);if(!y)throw new Error("请选择有效机体。");const z=X.filter(G=>G.node.value).map(G=>{const Ue=G.choices.find(xe=>yn(xe)===G.node.value);if(!Ue)throw new Error("所选 SP 的重量或机体许可不匹配。");return{slot:G.slot,weaponRef:pu(Ue)}}),K=C0(y,I,z,D);if(K.length)throw new Error(K.join("；"));const $={playerId:ee.playerId,aircraftRef:pu(y),loadout:z};k=void 0,++L;try{e.beginCreate($)}catch(G){throw k=ee,Je(),G}Je()})}),oe()},ne=()=>{d.replaceChildren();const Q=++F,ee=f?.pending;if(d.hidden=!ee,!ee||!f)return;const C=i("article");C.className="player-card player-pending-card";const ge=x.find(y=>yn(y)===yn(ee.aircraftRef));C.append(i("h4",`${ee.player.callsign} · 待落位`),i("p",ge?.name??"已配置机体"));const he=ee.loadout.map(y=>`SP${y.slot+1} ${I.find(z=>yn(z)===yn(y.weaponRef))?.name??"已配置 SP"}`).join(" / "),Ce=f,Ve=Ce.project.sessions.find(y=>y.id===Ce.sessionId)?.resourceSnapshot.sp.find(y=>y.name==="FLR")??Ce.project.sp.find(y=>y.name==="FLR");C.append(i("p",`FLR 剩余 ${Ve?Ve.weapon?.usageLimit??"—":4} 次`),i("p",he||"空 SP 挂载"));for(const y of ee.loadout){const z=I.find(K=>yn(K)===yn(y.weaponRef));C.append(i("p",`SP${y.slot+1} · ${z?.name??"已配置 SP"} · 冷却 0 回合 · ${z?.weapon?.usageLimit===void 0?"已用 0 次":`剩余 ${z.weapon.usageLimit} 次`}`))}const ae=i("div");ae.className="player-actions";const Ae=i("button",ee.armed?"等待地图落位":"生成位置","player-roster-arm");Ae.type="button",Ae.disabled=ee.armed||!f.editable,Ae.setAttribute("aria-pressed",String(ee.armed));const Se=i("button","取消创建","player-roster-placement-cancel");Se.type="button",ae.append(Ae,Se),C.append(ae),d.append(C);const Ne={projectId:Ce.project.id,sessionId:Ce.sessionId,turn:Ce.turn},A=()=>{const y=He();if(Q!==F||!C.isConnected||y.project.id!==Ne.projectId||y.sessionId!==Ne.sessionId||y.turn!==Ne.turn||!y.pending||yn(y.pending.aircraftRef)!==yn(ee.aircraftRef)||y.pending.player.id!==ee.player.id)throw new Error("待落位配置已变化。");return y};Ae.addEventListener("click",()=>lt(()=>{const y=A();!y.editable||y.pending?.armed||e.armPlacement()})),Se.addEventListener("click",()=>lt(()=>{A(),e.cancelPlacement()}))},de=()=>{u.replaceChildren(),me.clear(),Te.length=0;const Q=++M;if(!f)return;const ee={projectId:f.project.id,sessionId:f.sessionId,turn:f.turn},C=_.filter(ge=>ge.player);C.length||u.append(i("p","暂无玩家"));for(const ge of C){const he=i("article","",`player-roster-unit-${ge.id}`);he.className="player-card",he.tabIndex=0,he.setAttribute("role","group"),he.setAttribute("aria-label",`玩家 ${ge.player.callsign}`);const Ce=i("h4",ge.player.callsign),pe=x.find($=>ge.aircraftRef&&yn($)===yn(ge.aircraftRef)),Ve=R0(f.project,f.sessionId,ge.id,f.turn),ae=i("div");ae.className="player-card-head";const Ae=i("span");Ae.className="player-faction-block",Ae.setAttribute("aria-hidden","true"),Ae.setAttribute("data-faction",ge.faction);const Se=Ve.filter($=>$.slot!==void 0).length,Ne=i("span",`${Se} 装备`);Ne.className="player-equipment-count",ae.append(Ae,Ce,Ne),he.append(ae,i("p",pe?.name??"未绑定机体"));const A=Ve.find($=>$.name==="FLR");he.append(i("p",`FLR 剩余 ${A?.remaining??"—"} 次`));const y=()=>{const $=He();if(Q!==M||!he.isConnected||$.project.id!==ee.projectId||$.sessionId!==ee.sessionId||$.turn!==ee.turn||!_.some(G=>G.id===ge.id))throw new Error("玩家单位或回合已变化。");return $},z=$=>["BUTTON","SELECT","INPUT"].includes($.target?.tagName?.toUpperCase()??"");he.addEventListener("click",$=>lt(()=>{z($)||(y(),e.selectUnit(ge.id,!1))})),he.addEventListener("dblclick",$=>lt(()=>{z($)||(y(),e.selectUnit(ge.id,!0))})),he.addEventListener("keydown",$=>{$.target!==he||!["Enter"," "].includes($.key)||($.preventDefault(),lt(()=>{y(),e.selectUnit(ge.id,$.key==="Enter")}))});const K=i("div");K.className="player-weapon-list",he.append(K);for(const $ of Ve){const G=i("div");G.className="player-weapon-row";const Ue=$.slot===void 0?$.name:`SP${$.slot+1} · ${$.name}`,xe=$.durationRemaining>0?`效果剩余 ${$.durationRemaining} 回合 · 冷却 ${$.profile?.cooldownTurns??0}T`:`冷却 ${$.cooldownRemaining} 回合`;G.append(i("strong",Ue),i("span",$.jettisoned?"已抛弃":`${xe} · ${$.remaining===void 0?`已用 ${$.uses} 次`:`剩余 ${$.remaining} 次`}`));const Ge=i("div");Ge.className="player-actions";const Xe=i("button","使用");Xe.type="button",Xe.setAttribute("data-action","use"),Xe.setAttribute("data-weapon-key",$.key),Ge.append(Xe),Te.push({node:Xe,available:$.canUse&&f.turn>0});let _e=!1;const ke=(Qe,et,Pe)=>lt(()=>{y();const ut=Mt();if(!Pe.isConnected||!et||_e||ut.turn<1)throw new Error("上一回合的此项行动当前不可记录。");_e=!0,Pe.disabled=!0;const U=Te.filter(be=>be.node.getAttribute("data-weapon-key")===$.key&&he.contains(be.node)),ye=U.map(be=>be.available);for(const be of U)be.available=!1;try{e.recordAction(ge.id,$.key,Qe)}catch(be){throw _e=!1,U.forEach((qe,ce)=>{qe.available=ye[ce]}),oe(),be}});if(Xe.addEventListener("click",Qe=>{Qe.stopPropagation(),ke("use",$.canUse,Xe)}),$.slot!==void 0||$.profile?.kind&&$.profile.kind!=="normal"){const Qe=i("button","抛弃");Qe.type="button",Qe.setAttribute("data-action","drop"),Qe.setAttribute("data-weapon-key",$.key),Ge.append(Qe),Te.push({node:Qe,available:$.canJettison&&f.turn>0}),Qe.addEventListener("click",et=>{et.stopPropagation(),ke("drop",$.canJettison,Qe)})}G.append(Ge),K.append(G)}u.append(he),me.set(ge.id,he)}};return l.addEventListener("click",()=>lt(()=>{const Q=n.getAttribute("data-collapsed")!=="true";n.setAttribute("data-collapsed",String(Q)),l.textContent=Q?"展开":"收起",l.setAttribute("aria-expanded",String(!Q))})),o.addEventListener("click",()=>lt(()=>{const Q=Mt();if(k){e.report("请先完成或取消当前玩家配置。");return}k={playerId:"",aircraftKey:"",loadout:[],projectId:Q.project.id,sessionId:Q.sessionId,turn:Q.turn},Je()})),{sync(Q){if(Ca.get(n)!==t||!r.isConnected)return;if(f={...Q,pending:Q.pending?structuredClone(Q.pending):void 0},(Q.revision===void 0?Q.project!==m:Q.revision!==v||Q.project.id!==m?.id)||Q.sessionId!==g||Q.turn!==p){m=Q.project,v=Q.revision,g=Q.sessionId,p=Q.turn,w=e.readRevision&&Q.revision!==void 0?"":lm(Q.project,Q.sessionId,Q.turn);const ge=Q.project.sessions.find(Ve=>Ve.id===Q.sessionId),he=ge?.sealedScenes?.find(Ve=>Ve.turn===Q.turn);_=he?.units??ge?.units??[],x=cm(he?.resourceSnapshot.aircraft??ge?.resourceSnapshot.aircraft??[],Q.project.aircraft),I=cm(he?.resourceSnapshot.sp??ge?.resourceSnapshot.sp??[],Q.project.sp),D=he?.rulesSnapshot??ge?.rulesSnapshot??Mf;const Ce=JSON.stringify([Q.project.id,Q.project.players,x,I,D,_.map(Ve=>Ve.player?.id)]);N!==Ce&&(N=Ce,k&&Je());const pe=JSON.stringify([Q.project.id,Q.sessionId,Q.turn,x,I,D,_.filter(Ve=>Ve.player).map(Ve=>({id:Ve.id,player:Ve.player,aircraftRef:Ve.aircraftRef,loadout:Ve.loadout,spRefs:Ve.spRefs,playerActions:Ve.playerActions}))]);if(R!==pe){R=pe;try{de()}catch(Ve){Be(Ve)}}}const C=JSON.stringify([Q.project.id,Q.sessionId,Q.turn,Q.editable,Q.pending]);S!==C&&(S=C,ne()),oe()},destroy(){Ca.get(n)===t&&(Ca.delete(n),++M,++L,++F,n.replaceChildren())}}}const Pa=512,Da=[["#ff6935","橙"],["#2d8cff","蓝"],["#ffd84a","黄"],["#20e27e","绿"],["#ff4d5a","红"]],gi=n=>!!n&&[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=1e5),Ia=n=>/^#[0-9a-f]{6}$/i.test(n),mu=n=>`${n.kind}:${n.id}`,dm=n=>{const e=n.indexOf(":"),t=n.slice(0,e),i=n.slice(e+1);return e>0&&i&&(t==="unit"||t==="marker")?{kind:t,id:i}:null},SE=(n,e,t)=>n.some(i=>i.fromUnitId===e&&i.to.kind===t.kind&&i.to.id===t.id||t.kind==="unit"&&i.to.kind==="unit"&&i.fromUnitId===t.id&&i.to.id===e);function ME(n){let e=!1,t="",i="",r="",s="",o="";const a=new In,l=new Map;a.name="Editor links",a.userData.editorLinks=!0,a.renderOrder=1e3,n.world.add(a);const c=(ne,de="")=>{const Q=document.createElement(ne);return Q.textContent=de,Q},d=c("div");d.className="scene-tool-panel editor-links-panel",n.panel.append(d);const u=c("style");u.textContent=`
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
  `,d.append(u,c("h3","连线"));const h=[],f=(ne,de,Q)=>{const ee=()=>{e||Q()};ne.addEventListener(de,ee),h.push({element:ne,event:de,run:ee})},m=()=>{const ne=c("div");return ne.className="tool-actions",d.append(ne),ne},v=(ne,de,Q,ee)=>{const C=c("button",Q);return C.id=de,C.type="button",f(C,"click",ee),ne.append(C),C},g=(ne,de,Q)=>{const ee=c("label");ee.className="tool-row",ee.append(c("span",Q));const C=c(ne);return C.id=de,C.setAttribute("aria-label",Q),ee.append(C),d.append(ee),C},p=(ne,de)=>{const Q=c("option",ne);return Q.value=de,Q},w=m(),_=v(w,"link-mode","连线模式",()=>{if(t){Be();return}if(!X()){oe();return}const ne=me();if(!ne||!n.readUnits().some(de=>de.id===ne&&gi(de.position))){o="请选择源单位",oe();return}t=ne,o="",R.value="",n.onModeChange(!0),oe()}),x=v(w,"link-cancel","取消",Be),I=g("select","link-source-unit","源单位");I.title="默认跟随选中单位；手动选择后固定源单位，连线模式中保持不变";const D=c("p");D.id="link-source",d.append(D);const R=g("select","link-target","目标"),N=g("select","link-style","颜色");N.replaceChildren(...Da.map(([ne,de])=>p(de,ne)),p("自定义","custom")),N.value=Da[0][0];const S=g("input","link-color","自定义颜色");S.type="color",S.value=Da[0][0];const M=v(m(),"link-add","添加连线",()=>{const ne=me(),de=dm(R.value);if(!X()){oe();return}if(!ne||!de){o="请选择源与目标",oe();return}lt(ne,de)}),L=g("select","link-list","连线列表");L.size=5;const F=g("input","link-visible","显示");F.type="checkbox",F.checked=!0;const k=m(),W=v(k,"link-apply","修改颜色 / 显示",()=>{const ne=r,de=S.value,Q=F.checked;if(!X()){oe();return}if(!Ia(de)){o="请选择有效颜色",oe();return}He("修改连线",ee=>{const C=ee.links?.find(ge=>ge.id===ne);if(!C)throw new Error("连线已移除");C.color=de.toLowerCase(),C.visible=Q})}),q=v(k,"link-delete","删除连线",()=>{const ne=r;if(!X()){oe();return}He("删除连线",de=>{if(!de.links?.some(Q=>Q.id===ne))throw new Error("连线已移除");de.links=de.links.filter(Q=>Q.id!==ne)})}),j=c("p");j.id="link-state",j.setAttribute("role","status"),d.append(j),f(I,"change",()=>{if(!X()||t){oe();return}const ne=I.value;i=ne&&n.readUnits().some(de=>de.id===ne&&gi(de.position))?ne:"",R.value="",o="",oe()}),f(R,"change",()=>{o="",oe()}),f(N,"change",()=>{if(!X()){oe();return}Ia(N.value)&&(S.value=N.value)}),f(S,"input",()=>{if(!X()){oe();return}N.value=Da.find(([ne])=>ne===S.value.toLowerCase())?.[0]??"custom"}),f(L,"change",()=>{r=L.value,s="",o="",oe()});const re=ne=>{!e&&t&&ne.key==="Escape"&&(Be(),ne.preventDefault())};typeof addEventListener=="function"&&addEventListener("keydown",re);function X(){return!e&&n.editable()&&!n.busy()}function me(ne){return i&&!(ne??n.readUnits()).some(de=>de.id===i&&gi(de.position))&&(i="",R.value=""),t||i||n.selectedUnitId()||""}function Te(){t&&(t="",R.value="",n.onModeChange(!1))}function Be(){e||(Te(),R.value="",o="",oe())}function He(ne,de){if(!X())return oe(),!1;let Q=!1;try{Q=n.change(ne,ee=>{if(!X())throw new Error("当前状态已变化");de(ee)}),o=Q?"已保存":"未保存"}catch(ee){o=ee instanceof Error?ee.message:String(ee)}return oe(),Q}function lt(ne,de){const Q=S.value,ee=he=>{const Ce=n.readUnits(),pe=Ce.find(ae=>ae.id===ne),Ve=de.kind==="unit"?Ce.find(ae=>ae.id===de.id):he.markers.find(ae=>ae.id===de.id);if(!gi(pe?.position)||!gi(Ve?.position))throw new Error("源或目标已移除");if(de.kind==="unit"&&de.id===ne)throw new Error("源与目标相同");if((he.links?.length??0)>=Pa)throw new Error("连线已达上限 512");if(SE(he.links??[],ne,de))throw new Error("连线已存在");if(!Ia(Q))throw new Error("请选择有效颜色")};try{ee(n.read())}catch(he){return o=he instanceof Error?he.message:String(he),oe(),!1}const C=`link-${crypto.randomUUID()}`,ge=He("添加连线",he=>{ee(he),(he.links??=[]).push({id:C,fromUnitId:ne,to:{...de},color:Q.toLowerCase(),visible:!0})});return ge&&(r=C,s="",oe()),ge}function Mt(ne,de){if(e||!t)return!1;if(!X())return oe(),!0;const Q={kind:ne,id:de};return R.value=mu(Q),lt(t,Q),!0}function te(ne){a.remove(ne.line),ne.line.geometry.dispose(),ne.line.material.dispose()}function Re(){if(e)return;const ne=n.read();if(!ne.links?.length&&!t){for(const C of l.values())te(C);l.clear();return}const de=new Map(n.readUnits().map(C=>[C.id,C])),Q=new Map(ne.markers.map(C=>[C.id,C]));if(t&&(!n.editable()||!gi(de.get(t)?.position))){Te(),o="",oe();return}const ee=new Set;for(const C of(ne.links??[]).slice(0,Pa)){if(ee.has(C.id))continue;ee.add(C.id);let ge=l.get(C.id);if(!ge){const ae=new Bt,Ae=new Lt(new Float32Array(6),3).setUsage(Fc);ae.setAttribute("position",Ae);const Se=new Pi({color:"#ff6935",depthTest:!1,depthWrite:!1}),Ne=new hn(ae,Se);Ne.name=`Editor link ${C.id}`,Ne.userData.editorLinkId=C.id,Ne.userData.editorTools=!0,Ne.renderOrder=1e3,Ne.frustumCulled=!1,ge={line:Ne,position:Ae,coordinates:[NaN,NaN,NaN,NaN,NaN,NaN]},l.set(C.id,ge),a.add(Ne)}const he=de.get(C.fromUnitId)?.position,Ce=(C.to.kind==="unit"?de.get(C.to.id):Q.get(C.to.id))?.position;ge.line.visible=C.visible!==!1&&gi(he)&&gi(Ce);const pe=Ia(C.color)?C.color.toLowerCase():"#ff6935";if(`#${ge.line.material.color.getHexString()}`!==pe&&ge.line.material.color.set(pe),!gi(he)||!gi(Ce))continue;let Ve=!1;for(let ae=0;ae<6;ae++){const Ae=ae<3?he:Ce,Se=ae%3,Ne=(Se===0?Ae.x:Se===1?Ae.y:Ae.z)*Ke;ge.coordinates[ae]!==Ne&&(ge.coordinates[ae]=Ne,ge.position.array[ae]=Ne,Ve=!0)}Ve&&(ge.position.needsUpdate=!0)}for(const[C,ge]of l)ee.has(C)||(te(ge),l.delete(C))}function oe(){if(e)return;const ne=n.read(),de=n.readUnits(),Q=(ne.links??[]).slice(0,Pa);t&&(!n.editable()||!de.some(A=>A.id===t&&gi(A.position)))&&Te();const ee=me(de),C=de.find(A=>A.id===ee),ge=R.value,he=[p("跟随选中单位",""),...de.filter(A=>gi(A.position)).map(A=>p(A.label,A.id))];I.replaceChildren(...he),I.value=he.some(A=>A.value===ee)?ee:"";const Ce=[p("选择目标","")];for(const A of de)A.id!==ee&&gi(A.position)&&Ce.push(p(`单位：${A.label}`,mu({kind:"unit",id:A.id})));for(const A of ne.markers)gi(A.position)&&Ce.push(p(`标记：${A.label}`,mu({kind:"marker",id:A.id})));R.replaceChildren(...Ce),R.value=Ce.some(A=>A.value===ge)?ge:"",Q.some(A=>A.id===r)||(r=Q[0]?.id??""),L.replaceChildren(...Q.map(A=>{const y=de.find(K=>K.id===A.fromUnitId)?.label??A.fromUnitId,z=(A.to.kind==="unit"?de:ne.markers).find(K=>K.id===A.to.id)?.label??A.to.id;return p(`${y} → ${z}${A.visible===!1?" · 隐藏":""}`,A.id)})),L.value=r;const pe=Q.find(A=>A.id===r),Ve=pe?`${pe.id}|${pe.color}|${pe.visible!==!1}`:"";Ve!==s&&(s=Ve,pe?(S.value=Ia(pe.color)?pe.color.toLowerCase():"#ff6935",N.value=Da.find(([A])=>A===S.value)?.[0]??"custom",F.checked=pe.visible!==!1):F.checked=!0);const ae=X(),Ae=gi(C?.position);_.disabled=!t&&(!ae||!Ae||Q.length>=Pa),_.setAttribute("aria-pressed",String(!!t)),x.disabled=!t,I.disabled=!ae||!!t,R.disabled=!ae,N.disabled=S.disabled=!ae,M.disabled=!ae||!Ae||!R.value||Q.length>=Pa,F.disabled=W.disabled=q.disabled=!ae||!pe,D.textContent=`源：${C?.label??"未选择"}${t?" · 连线中":""}`;const Se=dm(R.value),Ne=Se&&(Se.kind==="unit"?de:ne.markers).find(A=>A.id===Se.id)?.label;j.textContent=o||(Ne?`目标：${Ne}`:""),Re()}function Je(){if(!e){Te(),e=!0,typeof removeEventListener=="function"&&removeEventListener("keydown",re);for(const ne of h)ne.element.removeEventListener(ne.event,ne.run);for(const ne of l.values())te(ne);l.clear(),n.world.remove(a),d.remove()}}return oe(),{sync:oe,update:Re,active:()=>!e&&!!t,pick:Mt,cancel:Be,dispose:Je}}function Pg(n,e){const t=e.x-n.x,i=n.z-e.z;return!Number.isFinite(t)||!Number.isFinite(i)||t===0&&i===0?void 0:(Math.atan2(t,i)*180/Math.PI%360+360)%360}function Dg(n,e){const t=Pg(n,e);return t===void 0?"方位角未定义（起终点水平重合，N=0°）":`方位角 ${Math.round(t*100)/100%360}° (N=0°)`}const wE=.12,EE=1e5,TE=1e3,ol=n=>({x:n.x,y:n.y,z:n.z}),Ig=n=>({pitch:n.pitch,yaw:n.yaw,roll:n.roll});function Xc(n){if(!n||!["x","y","z"].every(e=>{const t=n[e];return Number.isFinite(t)&&Math.abs(t)<=EE}))throw new RangeError("Marker coordinates must be finite and within +/-100000 km")}function Lg(n){if(!Number.isFinite(n)||n<=0||n>TE)throw new RangeError("Marker size must be positive and at most 1000 km")}function Ng(n){if(!n||![n.pitch,n.yaw,n.roll].every(Number.isFinite))throw new RangeError("Marker attitude must contain finite radians")}function zi(n){return["line","arrow","circle","square","sphere"].includes(n.symbol)}function al(n){const e=n.attitude??{pitch:0,yaw:0,roll:0};return Ng(e),new rn().setFromEuler(new En(e.pitch,e.yaw,e.roll,"YXZ"))}function Ug(n){const e=new b((n.sizeKm??wE)/2,0,0).applyQuaternion(al(n)),t=n.position;return[{x:t.x-e.x,y:t.y-e.y,z:t.z-e.z},{x:t.x+e.x,y:t.y+e.y,z:t.z+e.z}]}function Rs(n){if(n.controlPoints!==void 0){if(n.controlPoints.length!==2)throw new RangeError("Marker control points must contain exactly two points");return[ol(n.controlPoints[0]),ol(n.controlPoints[1])]}return Ug(n)}function Cc(n,e){if(!Array.isArray(e)||e.length!==2)throw new RangeError("Marker control points must contain exactly two points");const[t,i]=e;Xc(t),Xc(i);const r=i.x-t.x,s=i.y-t.y,o=i.z-t.z,a=Math.hypot(r,s,o);Lg(a);const l=al(n),c=new b(1,0,0).applyQuaternion(l).normalize(),d=new b(r/a,s/a,o/a);let u;if(n.attitude!==void 0&&c.distanceTo(d)<=16*Number.EPSILON)u=Ig(n.attitude);else{const h=new rn().setFromUnitVectors(c,d).multiply(l).normalize(),f=new En().setFromQuaternion(h,"YXZ");u={pitch:f.x,yaw:f.y,roll:f.z}}return{...n,position:{x:(t.x+i.x)/2,y:(t.y+i.y)/2,z:(t.z+i.z)/2},attitude:u,sizeKm:a,controlPoints:[ol(t),ol(i)]}}function kg(n,e,t,i){Xc(e),Ng(t),Lg(i);const r={...n,position:ol(e),attitude:Ig(t),sizeKm:i};return n.controlPoints!==void 0&&(r.controlPoints=Ug(r),r.controlPoints.forEach(Xc)),r}const oi=n=>({x:n.x,y:n.y,z:n.z}),Zn=n=>new b(n.x,n.y,n.z).multiplyScalar(Ke),Is=(n,e)=>Math.hypot(e.x-n.x,e.y-n.y,e.z-n.z),Jr=n=>`${n}-${crypto.randomUUID()}`,Ur=n=>Number(n.toFixed(5)).toString(),gu=n=>[n.x,n.y,n.z].every(e=>Number.isFinite(e)&&Math.abs(e)<=1e5),AE=(n,e)=>({horizontal:Math.hypot(e.x-n.x,e.z-n.z),deltaY:e.y-n.y,slant:Is(n,e)}),Fg=(n,e)=>{const t=AE(n,e);return`水平 ${Ur(t.horizontal)} km · 高差 ${t.deltaY>=0?"+":""}${Ur(t.deltaY)} km · 斜距 ${Ur(t.slant)} km`},Un=n=>n==="measure"||n==="bearing",xc=n=>({measure:"测距",bearing:"方位角",circle:"圆规",sphere:"范围球"})[n],La=n=>n.kind==="bearing"?Dg(n.points[0],n.points[1]):Fg(n.points[0],n.points[1]),um=(n,e,t,i)=>t==="sphere"?Is(n,e):i==="xz"?Math.hypot(e.x-n.x,e.z-n.z):i==="xy"?Math.hypot(e.x-n.x,e.y-n.y):Math.hypot(e.y-n.y,e.z-n.z);function RE(n){let e=!1,t="",i="",r="",s=null,o=!1,a,l="",c=n.editable(),d=!1,u=null,h=null;const f=new In,m=new In;f.name="Editor markers and drawings",m.name="Editor tool preview",f.userData.editorTools=!0,m.userData.editorTools=!0,n.world.add(f,m);const v=document.createElement("div");v.className="editor-tools-labels",v.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;",n.labelRoot.append(v);const g=[],p=[],w=document.createElement("style");w.textContent=`
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
  `,n.markersPanel.append(w);const _=(T,P="")=>{const O=document.createElement(T);return O.textContent=P,O},x=(T,P)=>{T.classList.add("scene-tool-panel"),T.append(_("h3",P))};x(n.markersPanel,"自定义标记点"),x(n.drawingsPanel,"标尺与圆规");const I=_("p"),D=_("p");I.id="marker-status",D.id="drawing-status";for(const T of[I,D])T.className="tool-status",T.setAttribute("role","status");const R=(T,P=u?.kind==="marker"?"markers":"drawing")=>{(P==="markers"?I:D).textContent=T},N=T=>(p.push(T),T),S=T=>{const P=_("div");return P.className="tool-actions",T.append(P),P},M=[];let L=null;const F=()=>{for(const T of M)T.setAttribute("aria-pressed",String(T===L))},k=(T,P,O,B,Y=!0)=>{const le=_("button",O);return le.type="button",le.id=P,le.addEventListener("click",()=>{if(!(e||Y&&!n.editable()))try{B()}catch(ue){R(ue instanceof Error?ue.message:String(ue),P.startsWith("marker-")?"markers":"drawing")}}),T.append(le),Y&&N(le),le},W=(T,P,O,B=!0)=>{const Y=_("details");return Y.id=P,Y.open=B,Y.append(_("summary",O)),T.append(Y),Y},q=(T,P,O,B,Y="text")=>{const le=_("label");le.className="tool-row",le.append(_("span",O));const ue=N(_("input"));return ue.id=P,ue.type=Y,ue.value=B,Y==="number"?ue.step="any":Y==="text"&&(ue.maxLength=128),le.append(ue),T.append(le),ue},j=(T,P,O,B,Y=!0)=>{const le=_("label");le.className="tool-row",le.append(_("span",O));const ue=_("select");return ue.id=P,ue.setAttribute("aria-label",O),B.forEach(([rt,Oe])=>ue.add(new Option(Oe,rt))),le.append(ue),T.append(le),Y&&N(ue),ue},re=T=>{if(!T.value.trim()||!Number.isFinite(T.valueAsNumber))throw new Error("请填写有效数值");return T.valueAsNumber},X=(T,P,O,B)=>{const Y=_("div");Y.className="tool-xyz",T.append(_("p",O),Y);const le={};for(const ue of["x","z","y"]){const rt=ue==="y"?"Z":ue==="z"?"Y":"X",Oe=_("label",`${rt}（km）`),Nt=N(_("input"));Nt.id=`${P}-${ue}`,Nt.type="number",Nt.step="any",Nt.value=String(B[ue]),Nt.setAttribute("aria-label",`${O} ${rt}（km）`),Oe.append(Nt),Y.append(Oe),le[ue]=Nt}return{row:Y,fields:le,read:()=>{const ue={x:re(le.x),y:re(le.y),z:re(le.z)};if(!gu(ue))throw new Error("点位坐标须为有限数值，绝对值不超过100000 km");return ue},set:ue=>{for(const rt of["x","y","z"])le[rt].value=String(ue[rt])}}},me=T=>/^#[0-9a-f]{6}$/i.test(T.value)?T.value.toLowerCase():"#ffd84a",Te=(T,P)=>T.value.trim().slice(0,128)||P,Be=T=>{for(const P of[...T.children])T.remove(P),P.traverse(O=>{(O instanceof we||O instanceof hn||O instanceof z_)&&(O.geometry.dispose(),(Array.isArray(O.material)?O.material:[O.material]).forEach(Y=>Y.dispose()))})},He=(T,P,O=1)=>new hn(new Bt().setFromPoints(T),new Pi({color:P,transparent:!0,opacity:O,depthWrite:!1})),lt=(T,P,O,B=.045)=>{const Y=new we(new as(B*Ke,10,8),new bn({color:O,transparent:!0,depthWrite:!1}));return Y.position.copy(Zn(P)),T.add(Y),Y},Mt=(T,P)=>{P==="xz"?T.rotation.x=-Math.PI/2:P==="yz"&&(T.rotation.y=Math.PI/2)},te=(T,P)=>Array.from({length:129},(O,B)=>{const Y=B/128*Math.PI*2,le=Math.cos(Y)*T,ue=Math.sin(Y)*T;return P==="xy"?new b(le,ue,0):P==="yz"?new b(0,le,ue):new b(le,0,ue)}),Re=(T,P,O=!1)=>{const B=new In;B.position.copy(Zn(P.position)),B.quaternion.copy(al(P)),T.add(B),B.userData.markerSize=P.sizeKm??.12;const Y=Ke*(P.sizeKm??.12),le=P.color,ue=O?.65:1,rt=ue*Math.min(.6,Math.max(.02,P.opacity??.12));if(P.symbol==="cross")B.add(He([new b(-Y,.4,-Y),new b(Y,.4,Y)],le,ue)),B.add(He([new b(-Y,.4,Y),new b(Y,.4,-Y)],le,ue));else if(P.symbol==="flag"){B.add(He([new b(0,.2,0),new b(0,Y*3,0)],le,ue));const Oe=new we(new cs(Y*1.6,Y),new bn({color:le,transparent:!0,opacity:.5,side:pn,depthWrite:!1}));Oe.position.set(Y*.8,Y*2.5,0),B.add(Oe)}else if(P.symbol==="pin"){B.add(He([new b(0,.2,0),new b(0,Y*2.5,0)],le,ue));const Oe=new we(new Us(Y*.6),new bn({color:le,transparent:!0,opacity:ue,depthWrite:!1}));Oe.position.y=Y*2.5,B.add(Oe),B.add(He(te(Y*.7,"xz"),le,ue))}else if(P.symbol==="line"||P.symbol==="arrow")B.add(He([new b(-Y/2,0,0),new b(Y/2,0,0)],le,ue)),P.symbol==="arrow"&&B.add(He([new b(Y*.25,0,-Y*.2),new b(Y/2,0,0),new b(Y*.25,0,Y*.2)],le,ue));else if(P.symbol==="circle"){const Oe=new we(new tl(Y/2,64),new bn({color:le,transparent:!0,opacity:rt,side:pn,depthWrite:!1}));Mt(Oe,"xz"),B.add(Oe,He(te(Y/2,"xz"),le,ue))}else if(P.symbol==="square"){const Oe=Y/2,Nt=new we(new cs(Y,Y),new bn({color:le,transparent:!0,opacity:rt,side:pn,depthWrite:!1}));Mt(Nt,"xz"),B.add(Nt,He([new b(-Oe,0,-Oe),new b(Oe,0,-Oe),new b(Oe,0,Oe),new b(-Oe,0,Oe),new b(-Oe,0,-Oe)],le,ue))}else if(P.symbol==="sphere"){B.add(new we(new as(Y/2,32,20),new bn({color:le,transparent:!0,opacity:rt,side:pn,depthWrite:!1})));for(const Oe of["xz","xy","yz"])B.add(He(te(Y/2,Oe),le,ue*.7))}else B.add(He([new b(-Y*.6,.4,0),new b(Y*.6,.4,0)],le,ue));return["circle","square","sphere"].includes(P.symbol)&&B.children.filter(Oe=>Oe instanceof we).forEach(Oe=>{Oe.visible=P.filled!==!1}),O||B.traverse(Oe=>{Oe.userData.editorTool={kind:"marker",id:P.id}}),!O&&P.id===t&&zi(P)&&Rs(P).forEach((Oe,Nt)=>{const Zt=Zn(Oe).sub(Zn(P.position)).applyQuaternion(B.quaternion.clone().invert()),yr=lt(B,{x:Zt.x/Ke,y:Zt.y/Ke,z:Zt.z/Ke},le);yr.userData.editorTool={kind:"marker",id:P.id,pointIndex:Nt}}),B},oe=(T,P)=>{const[O,B]=P.points;if(!O||!B)return;T.position.copy(Zn(O)),T.position.y+=.3;const Y=(B.x-O.x)*Ke,le=(B.z-O.z)*Ke,ue=Math.hypot(Y,le),rt=Pg(O,B),Oe=Math.min(.6*Ke,Math.max(.1*Ke,ue*.25)),Nt=(rt??0)*Math.PI/180;for(const Zt of T.children)if(Zt instanceof hn){let yr;if(Zt.name==="bearing-direction")yr=[new b,new b(Y,0,le)];else if(Zt.name==="bearing-north-reference")yr=[new b,new b(0,0,-Oe*1.3)];else if(Zt.name==="bearing-arc")yr=Array.from({length:65},(Ki,uo)=>{const vs=Nt*uo/64;return new b(Math.sin(vs)*Oe,0,-Math.cos(vs)*Oe)}),Zt.visible=rt!==void 0&&rt>0;else{const Ki=Math.min(Oe*.3,ue*.2),uo=ue?Y/ue:0,vs=ue?le/ue:0;yr=[new b(Y-uo*Ki-vs*Ki*.5,0,le-vs*Ki+uo*Ki*.5),new b(Y,0,le),new b(Y-uo*Ki+vs*Ki*.5,0,le-vs*Ki-uo*Ki*.5)],Zt.visible=rt!==void 0}Zt.geometry.setFromPoints(yr),Zt.geometry.computeBoundingSphere(),Zt.material instanceof dp&&(Zt.material.dashSize=Oe*.12,Zt.material.gapSize=Oe*.09,Zt.computeLineDistances())}else Zt.userData.bearingEndpoint!==void 0&&Zt.position.set(Zt.userData.bearingEndpoint===1?Y:0,0,Zt.userData.bearingEndpoint===1?le:0)},Je=(T,P,O=!1)=>{const B=new In;T.add(B),O||(B.userData.editorTool={kind:"drawing",id:P.id});const Y=P.color,le=Math.min(.6,Math.max(.02,P.opacity??.12));if(P.kind==="bearing"){if(P.points.length<2)return B;const ue=He([new b,new b],Y,O?.65:.95);ue.name="bearing-direction";const rt=new hn(new Bt().setFromPoints([new b,new b]),new dp({color:Y,transparent:!0,opacity:O?.5:.75,depthWrite:!1,depthTest:!1}));rt.name="bearing-north-reference";const Oe=He(Array.from({length:65},()=>new b),Y,O?.55:.85);Oe.name="bearing-arc";const Nt=He([new b,new b,new b],Y,O?.65:.95);Nt.name="bearing-arrow",B.add(ue,rt,Oe,Nt),P.points.forEach((Zt,yr)=>{const Ki=lt(B,{x:0,y:0,z:0},Y);Ki.userData.bearingEndpoint=yr,O||(Ki.userData.editorTool={kind:"drawing",id:P.id,pointIndex:yr})}),B.traverse(Zt=>{(Zt instanceof hn||Zt instanceof we)&&(Zt.material.depthTest=!1,Zt.renderOrder=40)}),oe(B,P)}else if(P.kind==="measure"){if(P.points.length<2)return B;B.add(He(P.points.map(Zn),Y,O?.65:.9)),P.points.forEach((ue,rt)=>{const Oe=lt(B,ue,Y);O||(Oe.userData.editorTool={kind:"drawing",id:P.id,pointIndex:rt})})}else{const ue=P.points[0],rt=(P.radiusKm??0)*Ke;if(!ue||rt<=0)return B;B.position.copy(Zn(ue));const Oe=P.plane??"xz";if(P.kind==="circle"){const Nt=new we(new tl(rt,96),new bn({color:Y,transparent:!0,opacity:O?le/2:le,side:pn,depthWrite:!1}));Mt(Nt,Oe),Oe==="xz"&&(Nt.position.y=.3),Nt.visible=P.filled!==!1,B.add(Nt,He(te(rt,Oe),Y,O?.55:.8)),lt(B,{x:0,y:0,z:0},Y)}else{const Nt=new we(new as(rt,40,24),new bn({color:Y,transparent:!0,opacity:O?le/2:le,side:pn,depthWrite:!1}));Nt.visible=P.filled!==!1,B.add(Nt);for(const Zt of["xz","xy","yz"])B.add(He(te(rt,Zt),Y,O?.35:.5));lt(B,{x:0,y:0,z:0},Y)}}return B},ne=(T,P,O,B,Y,le,ue)=>{const rt=new Tn;rt.position.copy(P),T.add(rt);const Oe=_("button",O);return Oe.type="button",Oe.title=Y,Oe.style.setProperty("--tool-color",B),Oe.addEventListener("click",Nt=>{Nt.stopPropagation(),le()}),Oe.addEventListener("dblclick",Nt=>{Nt.stopPropagation(),ue()}),v.append(Oe),g.push({object:rt,element:Oe}),Oe},de=j(n.markersPanel,"marker-list","标记列表",[],!1);de.size=5;const Q=S(n.markersPanel);k(Q,"marker-focus","定位",()=>{const T=pi();T&&n.focus(oi(T.position))},!1);const ee=j(n.markersPanel,"marker-endpoint","移动目标",[["whole","整体"],["a","端点 A"],["b","端点 B"]],!1),C=k(Q,"marker-move","三轴移动",()=>{pi()&&(Xt(t,!0,a),n.onTransformMode?.("translate"))}),ge=k(Q,"marker-rotate","旋转",()=>{pi()&&(Xt(t),n.onTransformMode?.("rotate"))}),he=k(Q,"marker-scale","缩放",()=>{pi()&&(Xt(t),n.onTransformMode?.("scale"))});k(Q,"marker-copy","复制",()=>{const T=pi();if(!T)throw new Error("请先选择标记");const P={...T,...T.attitude?{attitude:{...T.attitude}}:{},id:Jr("marker"),label:`${T.label.slice(0,122)} 副本`,position:{...T.position,x:T.position.x+.2,z:T.position.z+.2}};P.controlPoints&&(P.controlPoints=P.controlPoints.map(O=>({...O,x:O.x+.2,z:O.z+.2}))),Ie("复制标记",O=>O.markers.push(P),"markers",()=>{Z("marker",P.id)})}),k(Q,"marker-delete","删除",()=>{const T=t;if(!T)throw new Error("请先选择标记");Ie("删除标记",P=>{P.markers=P.markers.filter(O=>O.id!==T),P.links&&(P.links=P.links.filter(O=>O.to.kind!=="marker"||O.to.id!==T))},"markers",()=>{Z("marker","")})});const Ce=W(n.markersPanel,"marker-properties","标记属性与位置"),pe=q(Ce,"marker-label","名称","标记"),Ve=q(Ce,"marker-color","颜色","#ffd84a","color"),ae=j(Ce,"marker-symbol","符号",[["pin","定位针"],["cross","十字"],["flag","旗帜"],["text","文字"],["line","线段（长度）"],["arrow","箭头（长度）"],["circle","圆（直径）"],["square","正方形（边长）"],["sphere","球（直径）"]]),Ae=q(Ce,"marker-size","尺寸（km）",".12","number");Ae.min=".00001",Ae.max="1000";const Se=q(Ce,"marker-filled","填充","","checkbox");Se.checked=!0;const Ne=q(Ce,"marker-opacity","填充透明度",".12","number");Ne.min=".02",Ne.max=".6",Ne.step=".01";const A=q(Ce,"marker-visible","显示标记","","checkbox");A.checked=!0;const y={pitch:q(Ce,"marker-pitch","俯仰 X°","0","number"),yaw:q(Ce,"marker-yaw","方向 Z°","0","number"),roll:q(Ce,"marker-roll","翻滚 Y°","0","number")},z=X(Ce,"marker-position","位置",{x:0,y:0,z:0}),K=q(Ce,"marker-height","高度（m）","0","number"),$=()=>{K.value=z.fields.y.value.trim()?String(z.fields.y.valueAsNumber*1e3):""},G=X(Ce,"marker-a","端点 A",{x:-.06,y:0,z:0}),Ue=X(Ce,"marker-b","端点 B",{x:.06,y:0,z:0}),xe=q(Ce,"marker-a-height","端点 A 高度（m）","0","number"),Ge=q(Ce,"marker-b-height","端点 B 高度（m）","0","number"),Xe=_("label");Xe.className="tool-row",Xe.append(_("span","说明"));const _e=N(_("textarea"));_e.id="marker-description",_e.maxLength=4096,Xe.append(_e),Ce.append(Xe);const ke=S(Ce),Qe=k(ke,"marker-apply","应用所选标记",()=>{const T=t;if(!T)throw new Error("请先选择标记");const P=V(T);Ie("修改标记",O=>{const B=O.markers.findIndex(Y=>Y.id===T);if(B<0)throw new Error("标记已被移除");O.markers[B]=P},"markers")});k(ke,"marker-ground","坐标贴地",()=>{const T=z.read();T.y=n.sampleHeightKm(T.x,T.z),z.set(T),$(),R("地形高度已填入","markers")});const et=W(n.markersPanel,"marker-create","新增标记"),Pe=S(et),ut=(T,P,O,B)=>{const Y=k(T,P,O,()=>B(Y));return M.push(Y),Y};ut(Pe,"marker-pick","点地图放置",T=>{const P=V(Jr("marker"),{x:0,y:0,z:0});xr({kind:"marker",marker:P},T),n.onOpenPanel?.("markers"),R("标记放置中","markers")}),ut(Pe,"marker-pick-two","两点确认方向与尺寸",T=>{const P=V(Jr("marker"),{x:0,y:0,z:0});if(!zi(P))throw new Error("请选择线段、箭头、圆、正方形或球");xr({kind:"marker",marker:P,twoPoint:!0},T),n.onOpenPanel?.("markers"),R("端点 A 选择中","markers")}),k(Pe,"marker-add-position","按坐标新增",()=>{const T=V(Jr("marker"));Ie("新增标记",P=>P.markers.push(T),"markers",()=>{Z("marker",T.id)})}),k(Pe,"marker-new","清空选择／新标记",()=>{Z("marker",""),Ze(),kt(),Ft(),Jt(),H()},!1),k(Pe,"marker-cancel","取消放置",Cn,!1),n.markersPanel.append(I);const U=j(n.drawingsPanel,"drawing-list","标尺／图形列表",[],!1);U.size=5;const ye=S(n.drawingsPanel);k(ye,"drawing-focus","定位",()=>{const T=ki();T&&dn(T)},!1);const be=j(n.drawingsPanel,"drawing-endpoint","移动目标",[["whole","整体"],["a","端点 A"],["b","端点 B"]],!1),qe=k(ye,"drawing-move","三轴移动",()=>{ki()?.points[0]&&qt(i,!0,a)});k(ye,"drawing-copy","复制",()=>{const T=ki();if(!T)throw new Error("请先选择标尺或图形");const P={...T,id:Jr("drawing"),label:`${T.label.slice(0,122)} 副本`,points:T.points.map(O=>({...O,x:O.x+.2,z:O.z+.2}))};Ie("复制制图标尺",O=>O.drawings.push(P),"drawing",()=>{Z("drawing",P.id)})}),k(ye,"drawing-delete","删除",()=>{const T=i;if(!T)throw new Error("请先选择标尺或图形");Ie("删除制图标尺",P=>{P.drawings=P.drawings.filter(O=>O.id!==T)},"drawing",()=>{Z("drawing","")})});const ce=W(n.drawingsPanel,"drawing-properties","标尺属性与坐标"),se=q(ce,"drawing-label","名称","测距"),$e=j(ce,"drawing-kind","类型",[["measure","自由测距"],["bearing","水平方位角（N=0°）"],["circle","平面圆规"],["sphere","立体半透明球"]]),ie=q(ce,"drawing-color","颜色","#2d8cff","color"),Ye=q(ce,"drawing-visible","显示图形","","checkbox");Ye.checked=!0;const Fe=q(ce,"drawing-filled","填充","","checkbox");Fe.checked=!0;const _t=q(ce,"drawing-opacity","填充透明度",".12","number");_t.min=".02",_t.max=".6",_t.step=".01";const Et=j(ce,"drawing-plane","圆规平面",[["xz","XY 水平"],["xy","XZ 垂直"],["yz","YZ 垂直"]]),hi=X(ce,"drawing-a","起点／中心",{x:0,y:0,z:0}),rr=q(ce,"drawing-height","高度（m）","0","number"),ni=X(ce,"drawing-b","终点",{x:1,y:0,z:0}),ps=q(ce,"drawing-b-height","终点高度（m）","0","number"),ma=()=>{rr.value=hi.fields.y.value.trim()?String(hi.fields.y.valueAsNumber*1e3):"",ps.value=ni.fields.y.value.trim()?String(ni.fields.y.valueAsNumber*1e3):""},fi=q(ce,"drawing-radius","半径（km）","2","number");fi.min=".00001",fi.max="1000";const ms=_("p");ms.id="drawing-readout",ce.append(ms);const gs=S(ce),ga=k(gs,"drawing-apply","应用所选图形",()=>{const T=i;if(!T)throw new Error("请先选择标尺或图形");const P=Me(T);Ie("修改制图标尺",O=>{const B=O.drawings.findIndex(Y=>Y.id===T);if(B<0)throw new Error("图形已被移除");O.drawings[B]=P},"drawing")});k(gs,"drawing-ground","起点／中心贴地",()=>{const T=hi.read();T.y=n.sampleHeightKm(T.x,T.z),hi.set(T),yt(),R("地形高度已填入","drawing")});const oo=W(n.drawingsPanel,"drawing-create","测距与制图"),ao=S(oo);ut(ao,"drawing-pick-measure","点选两点测距",T=>en("measure",T)),ut(ao,"drawing-pick-bearing","点选两点测方位角",T=>en("bearing",T));const yd=_("p","方位角：正北 N=0°，顺时针 E=90°、S=180°、W=270°；仅按水平位置计算。");oo.append(yd),ut(ao,"drawing-pick-circle","圆规：中心＋半径点",T=>en("circle",T)),ut(ao,"drawing-pick-sphere","球体：中心＋半径点",T=>en("sphere",T));const lo=S(oo);k(lo,"drawing-add-position","按坐标／半径新增",()=>{const T=Me(Jr("drawing"));Ie("新增制图标尺",P=>P.drawings.push(T),"drawing",()=>{Z("drawing",T.id)})}),ut(lo,"drawing-pick-center","点地图定中心＋输入半径",T=>{const P=$e.value;if(Un(P))throw new Error("请选择平面圆规或球体，再使用输入半径方式");const O=Me(Jr("drawing"),!0),B=re(fi);if(B<=0||B>1e3)throw new Error("半径须大于0且不超过1000 km");O.radiusKm=B,xr({kind:P,drawing:O},T),_r=!0,R("中心点放置中","drawing")}),k(lo,"drawing-new","清空选择／新图形",()=>{Z("drawing",""),pt(),kt(),Jt(),H()},!1),k(lo,"drawing-cancel","取消作图",Cn,!1),n.drawingsPanel.append(D);let _r=!1;function pi(){return n.read().markers.find(T=>T.id===t)}function ki(){return n.read().drawings.find(T=>T.id===i)}function E(){if(e||!s)return null;const T=n.read(),P=s==="marker"?t:i,O=s==="drawing"?T.drawings.find(ue=>ue.id===P):void 0,B=s==="marker"?T.markers.find(ue=>ue.id===P):void 0,Y=Un(O?.kind)||B&&zi(B)?a:void 0,le=B?Y===void 0?B.position:Rs(B)[Y]:O?.points[Y??0];return P&&le?{kind:s,id:P,position:oi(le),...Y===void 0?{}:{pointIndex:Y}}:null}function H(T=!1){if(e||d)return;const P=E(),O=P?JSON.stringify([P.kind,P.id,P.pointIndex]):"",B=n.editable(),Y=O!==l||!!P&&B!==c;if(l=O,c=B,!(!Y&&!T)){d=!0;try{n.onSelectionChange?.(P)}finally{d=!1}}}function Z(T,P,O){T==="marker"?t=P:i=P,a=O,P?s=T:s===T&&(s=null)}function J(){e||(t="",i="",a=void 0,s=null,Ze(),pt(),kt(),Ft(),Jt(),H())}function V(T,P){const O=re(Ae);if(O<=0||O>1e3)throw new Error("尺寸须大于0且不超过1000 km");const B={id:T,label:Te(pe,"标记"),position:P??z.read(),color:me(Ve),symbol:ae.value,sizeKm:O,visible:A.checked};if(["circle","square","sphere"].includes(B.symbol)){const ue=re(Ne);if(ue<.02||ue>.6)throw new Error("透明度范围为0.02–0.6");const rt=n.read().markers.find(Oe=>Oe.id===T);(!rt||rt.filled!==void 0||!Se.checked)&&(B.filled=Se.checked),(!rt||rt.opacity!==void 0||ue!==.12)&&(B.opacity=ue)}const Y=_e.value.trim().slice(0,4096);Y&&(B.description=Y);const le=n.read().markers.find(ue=>ue.id===T);if(zi(B)){le?.controlPoints&&(B.controlPoints=le.controlPoints.map(oi));const ue={pitch:0,yaw:0,roll:0};for(const rt of["pitch","yaw","roll"]){const Oe=le?.attitude?.[rt]??0;ue[rt]=y[rt].value===String(Qt.radToDeg(Oe))?Oe:Qt.degToRad(re(y[rt]))}if((le?.attitude||Object.values(ue).some(rt=>rt!==0))&&(B.attitude=ue),o&&!P)return Cc(B,[G.read(),Ue.read()]);if(B.controlPoints&&le&&(Is(le.position,B.position)>0||B.sizeKm!==le.sizeKm||JSON.stringify(B.attitude)!==JSON.stringify(le.attitude)))return kg(B,B.position,ue,O)}return B}function Me(T,P=!1){const O=$e.value,B=P?{x:0,y:0,z:0}:hi.read(),Y={id:T,label:Te(se,xc(O)),kind:O,points:Un(O)?[B,P?oi(B):ni.read()]:[B],color:me(ie),visible:Ye.checked};if(!Un(O)){const le=P?1:re(fi),ue=re(_t);if(le<=0||le>1e3)throw new Error("半径须大于0且不超过1000 km");if(ue<.02||ue>.6)throw new Error("透明度范围为0.02–0.6");Y.radiusKm=le,Y.opacity=ue,Y.plane=Et.value;const rt=n.read().drawings.find(Oe=>Oe.id===T);(!rt||rt.filled!==void 0||!Fe.checked)&&(Y.filled=Fe.checked)}return Y}function Ie(T,P,O,B){if(!n.editable())return R("只读",O),!1;try{const Y=n.change(T,P);return Y?(B?.(),B&&(r=""),Ln(),R(`${T}已保存`,O)):R("操作未保存或内容没有变化",O),Y}catch(Y){return R(Y instanceof Error?Y.message:String(Y),O),!1}}function nt(T,P,O,B){const Y=u,le=h,ue=_r,rt=L;u=null,L=null,n.onPickingChange(!1);const Oe=Ie(T,P,O,B);if(Oe)h=null,_r=!1,Be(m);else if(Y&&n.editable()&&!e){const Nt=(O==="markers"?I:D).textContent;u=Y,h=le,_r=ue,L=rt,n.onPickingChange(!0),Yn(),R(Nt||"未保存",O)}return F(),Oe}function Ze(){const T=pi();pe.value=T?.label??"标记",Ve.value=T?.color??"#ffd84a",ae.value=T?.symbol??"pin",A.checked=T?.visible!==!1,_e.value=T?.description??"",Ae.value=String(T?.sizeKm??.12),Se.checked=T?.filled!==!1,Ne.value=String(T?.opacity??.12),ct(),z.set(T?.position??{x:0,y:0,z:0}),$(),o=!1;for(const O of["pitch","yaw","roll"])y[O].value=String(Qt.radToDeg(T?.attitude?.[O]??0));const P=Rs(T??{position:{x:0,y:0,z:0}});G.set(P[0]),Ue.set(P[1]),sr(),s==="marker"&&(!T||!zi(T))&&(a=void 0),ee.value=s==="marker"&&a===0?"a":s==="marker"&&a===1?"b":"whole",ee.closest("label").hidden=!T||!zi(T),Qe.disabled=!n.editable()||!T,C.disabled=!n.editable()||!T,ge.disabled=he.disabled=!n.editable()||!T||!zi(T)}function pt(){const T=ki();se.value=T?.label??"测距",$e.value=T?.kind??"measure",ie.value=T?.color??"#2d8cff",Fe.checked=T?.filled!==!1,Ye.checked=T?.visible!==!1,_t.value=String(T?.opacity??.12),Et.value=T?.plane??"xz",fi.value=String(T?.radiusKm??2),hi.set(T?.points[0]??{x:0,y:0,z:0}),ni.set(T?.points[1]??{x:1,y:0,z:0}),xt(),ma(),ga.disabled=!n.editable()||!T,qe.disabled=!n.editable()||!T?.points[0],yt()}function xt(){const T=ki();s==="drawing"&&(!Un(T?.kind)||a!==void 0&&!T?.points[a])&&(a=void 0),be.value=s==="drawing"&&a===0?"a":s==="drawing"&&a===1?"b":"whole",be.closest("label").hidden=!Un(T?.kind),be.disabled=!Un(T?.kind)}function ct(){const T=["line","arrow","circle","square","sphere"].includes(ae.value),P=["circle","square","sphere"].includes(ae.value);Se.closest("label").hidden=!P;for(const O of Object.values(y))O.closest("label").hidden=!T;for(const O of[G.row,Ue.row])O.hidden=!T;xe.closest("label").hidden=!T,Ge.closest("label").hidden=!T,Ne.closest("label").hidden=!P,Ne.disabled=!n.editable()||!Se.checked}function yt(){const T=$e.value,P=Un(T);ni.row.hidden=!P;const O=ni.row.previousElementSibling;O&&(O.hidden=!P),fi.closest("label").hidden=P,_t.closest("label").hidden=P,Et.closest("label").hidden=T!=="circle",Fe.closest("label").hidden=P,ps.closest("label").hidden=!P,_t.disabled=!n.editable()||!Fe.checked,ma();try{ms.textContent=T==="bearing"?Dg(hi.read(),ni.read()):T==="measure"?Fg(hi.read(),ni.read()):`半径 ${Ur(re(fi))} km · 直径 ${Ur(re(fi)*2)} km${T==="circle"?` · ${{xz:"XY",xy:"XZ",yz:"YZ"}[Et.value]}平面`:" · 3D范围"}`}catch{ms.textContent="—"}}function kt(){const T=n.read();de.replaceChildren(...T.markers.map(P=>new Option(`${P.visible===!1?"隐藏 · ":""}${P.label}`,P.id))),de.value=t,U.replaceChildren(...T.drawings.map(P=>new Option(`${P.visible===!1?"隐藏 · ":""}${xc(P.kind)} · ${P.label}${Un(P.kind)&&P.points[1]?` · ${La(P)}`:` · R ${Ur(P.radiusKm??0)} km`}`,P.id))),U.value=i}function Jt(){for(const T of g)T.element.setAttribute("aria-pressed",String(T.element.dataset.markerId?T.element.dataset.markerId===t:T.element.dataset.drawingId===i))}function Xt(T,P=!0,O){if(n.read().markers.some(Y=>Y.id===T)&&n.onMarkerPick?.(T)){kt();return}const B=n.read().markers.find(Y=>Y.id===T);Z("marker",B?T:"",B&&zi(B)?O:void 0),Ze(),kt(),Ft(),Jt(),H(P&&!!t),n.onOpenPanel?.("markers")}function qt(T,P=!0,O){const B=n.read().drawings.find(Y=>Y.id===T);Z("drawing",B?T:"",Un(B?.kind)&&O!==void 0&&B?.points[O]?O:void 0),pt(),kt(),Jt(),H(P&&!!i),n.onOpenPanel?.("drawing")}function vt(T){if(e)return!1;let P=T;for(;P&&P!==f;)P=P.parent;if(!P)return!1;for(let O=T;O&&O!==f;O=O.parent){const B=O.userData.editorTool;if(B?.id){if(B.kind==="marker"&&n.read().markers.some(Y=>Y.id===B.id))return Xt(B.id,!0,B.pointIndex),!0;if(B.kind==="drawing"&&n.read().drawings.some(Y=>Y.id===B.id))return qt(B.id,!0,B.pointIndex),!0}}return!1}function dn(T){const P=T.points[0];if(!P)return;const O=T.points[1];Un(T.kind)&&O?n.focus({x:(P.x+O.x)/2,y:T.kind==="bearing"?P.y:(P.y+O.y)/2,z:(P.z+O.z)/2},Math.max(.2,(T.kind==="bearing"?Math.hypot(O.x-P.x,O.z-P.z):Is(P,O))/2)):n.focus(oi(P),T.radiusKm)}function Ft(){for(const T of f.children){if(T.userData.editorTool?.kind!=="marker")continue;for(const O of[...T.children])O.userData.editorTool?.pointIndex!==void 0&&(O.traverse(B=>{B instanceof we&&(B.geometry.dispose(),B.material.dispose())}),T.remove(O));const P=n.read().markers.find(O=>O.id===T.userData.editorTool.id);!P||P.id!==t||!zi(P)||Rs(P).forEach((O,B)=>{const Y=Zn(O).sub(T.position).applyQuaternion(T.quaternion.clone().invert()).divideScalar(T.scale.x),le=lt(T,{x:Y.x/Ke,y:Y.y/Ke,z:Y.z/Ke},P.color);le.userData.editorTool={kind:"marker",id:P.id,pointIndex:B}})}}function mi(){Be(f),g.length=0,v.replaceChildren();const T=n.read();for(const P of T.markers){if(P.visible===!1)continue;const O=Re(f,P);ne(O,new b(0,Ke*.4,0),P.label,P.color,P.description||"",()=>Xt(P.id),()=>n.focus(oi(P.position))).dataset.markerId=P.id}for(const P of T.drawings){if(P.visible===!1||!P.points.length)continue;const O=Je(f,P),B=P.points[0],Y=P.points[1],le=Un(P.kind)&&Y?`${P.label} · ${La(P)}`:`${P.label} · 半径 ${Ur(P.radiusKm??0)} km`,ue=P.kind==="measure"&&Y?Zn({x:(B.x+Y.x)/2,y:(B.y+Y.y)/2+.1,z:(B.z+Y.z)/2}):new b(0,Ke*.12,0);ne(O,ue,le,P.color,"",()=>qt(P.id),()=>dn(P)).dataset.drawingId=P.id}Jt()}function Wr(){if(e)return;if(!n.editable()){Ln();return}const T=n.read();for(const B of f.children){const Y=B.userData.editorTool;if(Y.kind==="marker"){const le=T.markers.find(Nt=>Nt.id===Y.id);if(!le||le.visible===!1){Ln();return}B.position.copy(Zn(le.position)),B.quaternion.copy(al(le));const ue=le.sizeKm??.12,rt=B.userData.markerSize??ue;B.scale.setScalar(ue/rt);const Oe=B.quaternion.clone().invert();for(const Nt of B.children)if(Nt.userData.editorTool?.pointIndex!==void 0){const Zt=Rs(le)[Nt.userData.editorTool.pointIndex];Nt.position.copy(Zn(Zt).sub(B.position).applyQuaternion(Oe).divideScalar(B.scale.x))}}else{const le=T.drawings.find(ue=>ue.id===Y.id);if(!le||le.visible===!1||!le.points[0]){Ln();return}if(le.kind==="bearing")oe(B,le);else if(le.kind!=="measure")B.position.copy(Zn(le.points[0]));else for(const ue of B.children)if(ue instanceof hn)ue.geometry.setFromPoints(le.points.map(Zn)),ue.geometry.computeBoundingSphere();else if(ue.userData.editorTool?.pointIndex!==void 0){const rt=le.points[ue.userData.editorTool.pointIndex];rt&&ue.position.copy(Zn(rt))}}}for(const B of g){const Y=B.element.dataset.drawingId;if(!Y)continue;const le=T.drawings.find(Oe=>Oe.id===Y),ue=le?.points[0],rt=le?.points[1];!le||!Un(le.kind)||!ue||!rt||(le.kind==="measure"&&B.object.position.copy(Zn({x:(ue.x+rt.x)/2,y:(ue.y+rt.y)/2+.1,z:(ue.z+rt.z)/2})),B.element.textContent=`${le.label} · ${La(le)}`)}const P=pi(),O=ki();if(P){z.set(P.position),$(),Ae.value=String(P.sizeKm??.12);const B=Rs(P);G.set(B[0]),Ue.set(B[1]),sr();for(const Y of["pitch","yaw","roll"])y[Y].value=String(Qt.radToDeg(P.attitude?.[Y]??0))}O&&(hi.set(O.points[0]??{x:0,y:0,z:0}),ni.set(O.points[1]??{x:1,y:0,z:0}),yt())}function Ln(){if(e)return;u&&!n.editable()&&Cn();const T=n.read(),P=JSON.stringify({markers:T.markers,drawings:T.drawings}),O=n.editable();p.forEach(B=>{B.disabled=!O}),t&&!T.markers.some(B=>B.id===t)&&Z("marker",""),i&&!T.drawings.some(B=>B.id===i)&&Z("drawing",""),r!==P&&(r=P,kt(),Ze(),pt(),mi()),Qe.disabled=!O||!pi(),ga.disabled=!O||!ki(),C.disabled=!O||!pi(),qe.disabled=!O||!ki()?.points[0],ge.disabled=he.disabled=!O||!pi()||!zi(pi()),ct(),yt(),F(),!O&&!u?(I.textContent="只读",D.textContent="只读"):O&&!u&&(I.textContent==="只读"&&(I.textContent=""),D.textContent==="只读"&&(D.textContent="")),H()}function xr(T,P=null){Cn(),n.editable()&&(u=T,L=P,_r=!1,n.onPickingChange(!0),F())}function en(T,P=null){$e.value=T,(!i||["测距","方位角","圆规","范围球"].includes(se.value))&&(se.value=xc(T)),yt();const O=Me(Jr("drawing"),!0);xr({kind:T,drawing:O},P),n.onOpenPanel?.("drawing"),R(Un(T)?"起点选择中":"中心点选择中","drawing")}function Cn(){const T=u;u=null,L=null,h=null,_r=!1,Be(m),F(),T&&(n.onPickingChange(!1),R("已退出地图点选",T.kind==="marker"?"markers":"drawing"))}function Yn(){Be(m);const T=u,P=h;if(!(!T||!P))if(T.kind==="marker")T.twoPoint?T.first?(lt(m,T.first,T.marker.color,.08),lt(m,P,T.marker.color,.08),Is(T.first,P)>0&&Is(T.first,P)<=1e3&&Re(m,Cc(T.marker,[T.first,P]),!0)):lt(m,P,T.marker.color,.08):Re(m,{...T.marker,position:P},!0);else if(!T.first)lt(m,P,T.drawing.color,.08),_r&&Je(m,{...T.drawing,points:[P]},!0);else if(Un(T.kind)){const O={...T.drawing,points:[T.first,P]};Je(m,O,!0),R(La(O),"drawing")}else{const O=um(T.first,P,T.kind,T.drawing.plane??"xz");lt(m,T.first,T.drawing.color,.08),m.add(He([Zn(T.first),Zn(P)],T.drawing.color,.6)),O>0&&O<=1e3&&Je(m,{...T.drawing,points:[T.first],radiusKm:O},!0),R(`半径 ${Ur(O)} km${O>1e3?"（超出1000 km）":""}`,"drawing")}}function jn(T){e||!u||T&&!gu(T)||!T&&!h||T&&h&&Is(T,h)<1e-5||(h=T?oi(T):null,Yn())}function ii(T){const P=u;if(e||!P||!n.editable()){n.editable()||Cn();return}if(!gu(T)){R("点位坐标超出有效范围");return}try{if(P.kind==="marker"){if(P.twoPoint&&!P.first){P.first=oi(T),h=oi(T),Yn(),R("端点 B 选择中","markers");return}const O=P.twoPoint?Cc(P.marker,[P.first,T]):{...P.marker,position:oi(T)};nt("地图放置标记",B=>B.markers.push(O),"markers",()=>{Z("marker",O.id)})&&R("标记已放置并保存","markers")}else if(_r){const O={...P.drawing,points:[oi(T)]};nt("地图放置范围图形",B=>B.drawings.push(O),"drawing",()=>{Z("drawing",O.id)})&&R("图形已放置并保存","drawing")}else if(!P.first)P.first=oi(T),h=oi(T),Yn(),R(Un(P.kind)?"终点选择中":"半径点选择中","drawing");else{const O={...P.drawing,points:Un(P.kind)?[oi(P.first),oi(T)]:[oi(P.first)]};if(!Un(P.kind)){const B=um(P.first,T,P.kind,P.drawing.plane??"xz");if(B<=0||B>1e3)throw new Error("半径须大于0且不超过1000 km，请重新选择半径点");O.radiusKm=B}nt("地图作图",B=>B.drawings.push(O),"drawing",()=>{Z("drawing",O.id)})&&R(Un(O.kind)?`${xc(O.kind)}已保存：${La(O)}`:`图形已保存：半径 ${Ur(O.radiusKm)} km`,"drawing")}}catch(O){R(O instanceof Error?O.message:String(O),P.kind==="marker"?"markers":"drawing")}}const co=T=>{T.key==="Escape"&&u&&(Cn(),T.preventDefault())};addEventListener("keydown",co),de.addEventListener("change",()=>Xt(de.value)),U.addEventListener("change",()=>qt(U.value)),be.addEventListener("change",()=>{if(e||!Un(ki()?.kind))return;const T=be.value==="a"?0:be.value==="b"?1:void 0;qt(i,!1,T)}),z.fields.y.addEventListener("input",$),K.addEventListener("input",()=>{z.fields.y.value=K.value.trim()?String(K.valueAsNumber/1e3):""}),ee.addEventListener("change",()=>Xt(t,!1,ee.value==="a"?0:ee.value==="b"?1:void 0)),ae.addEventListener("input",ct),Se.addEventListener("input",ct),Fe.addEventListener("input",yt);for(const T of[K,Ae,...Object.values(z.fields),...Object.values(y)])T.addEventListener("input",()=>{o=!1});function sr(){xe.value=G.fields.y.value.trim()?String(G.fields.y.valueAsNumber*1e3):"",Ge.value=Ue.fields.y.value.trim()?String(Ue.fields.y.valueAsNumber*1e3):""}for(const T of[...Object.values(G.fields),...Object.values(Ue.fields)])T.addEventListener("input",()=>{o=!0,sr()});for(const[T,P]of[[xe,G],[Ge,Ue],[rr,hi],[ps,ni]])T.addEventListener("input",()=>{P.fields.y.value=T.value.trim()?String(T.valueAsNumber/1e3):"",T===xe||T===Ge?o=!0:yt()});for(const T of[...Object.values(hi.fields),...Object.values(ni.fields),fi,Et,$e])T.addEventListener("input",yt);const Sf=(T,P)=>{for(const O of T)O.addEventListener("change",()=>{if(!(u||!n.editable()||e||!(P==="markers"?pi():ki())))try{const B=P==="markers"?t:i,Y=P==="markers"?V(B):Me(B),le=P==="markers"?pi():ki();if(JSON.stringify(le)===JSON.stringify(Y))return;Ie(P==="markers"?"修改标记":"修改制图标尺",ue=>{if(P==="markers"){const rt=ue.markers.findIndex(Oe=>Oe.id===B);rt>=0&&(ue.markers[rt]=Y)}else{const rt=ue.drawings.findIndex(Oe=>Oe.id===B);rt>=0&&(ue.drawings[rt]=Y)}},P)}catch(B){R(B instanceof Error?B.message:String(B),P)}})};return Sf([pe,Ve,ae,Ae,Se,Ne,A,_e,K,xe,Ge,...Object.values(y),...Object.values(z.fields),...Object.values(G.fields),...Object.values(Ue.fields)],"markers"),Sf([se,$e,ie,Ye,Fe,_t,Et,rr,ps,fi,...Object.values(hi.fields),...Object.values(ni.fields)],"drawing"),Ze(),pt(),R("","markers"),R("","drawing"),Ln(),{sync:Ln,syncPosition:Wr,selectObject:vt,selection:E,clearSelection:J,isPicking:()=>!!u,pick:ii,preview:jn,cancel:Cn,updateLabels(T,P,O){if(e)return;T.updateMatrixWorld(),f.updateWorldMatrix(!0,!0);const B=new b;for(const Y of g){const le=Y.object.getWorldPosition(B).project(T),ue=le.z>=-1&&le.z<=1&&Math.abs(le.x)<=1.08&&Math.abs(le.y)<=1.08;Y.element.hidden=!ue,ue&&(Y.element.style.left=`${(le.x+1)*P/2}px`,Y.element.style.top=`${(1-le.y)*O/2}px`)}},dispose(){e||(Cn(),e=!0,removeEventListener("keydown",co),Be(f),Be(m),n.world.remove(f,m),v.remove(),w.remove(),g.length=0,p.length=0,n.markersPanel.replaceChildren(),n.drawingsPanel.replaceChildren(),n.markersPanel.classList.remove("scene-tool-panel"),n.drawingsPanel.classList.remove("scene-tool-panel"))}}}function CE(n,e,t,i,r=360,s=1440){const o=i*Math.PI/180,a=Math.max(.25,1-r/Math.max(1,s)),l=2*Math.atan(Math.tan(o/2)*Math.max(.1,t)*a),c=Math.hypot(Math.max(1,n),Math.max(1,e)),d=c/Math.sin(Math.min(o,l)/2)*1.12,u=Math.max(1e4,d*10);return{distance:d,maxDistance:u,far:Math.max(5e4,u*3),near:Math.max(.1,c/1e5)}}const Bo=n=>({id:n.id,revision:n.revision});function nf(n,e){const t=n.sessions.find(i=>i.id===e);if(!t)throw new Error(`Unknown session: ${e}`);if(t.workflow||t.status==="finished")throw new Error("Active authoring session required");return t}function Og(n){if(typeof n!="string"||!n.trim()||n.trim().length>128)throw new Error("Name must contain 1..128 characters");return n.trim()}function zg(n,e,t,i,r,s){const o=Rh(e);I0(n,o);const a=nf(o,t);return{project:o,sessionId:t,selection:{kind:i,ref:Bo(r)},mapRef:Bo(s),taskRef:Bo(a.taskRef)}}function PE(n,e,t,i){const r=Rh(n);if(!nf(r,e).mapEditRef)throw new Error("Terrain editing session required");const o=Cm(r,e,t,Og(i)),a={id:t,revision:1};return o.sessions.find(l=>l.id===e).mapEditRef=Bo(a),zg(r,o,e,"map",a,a)}function DE(n,e,t,i){const r=Rh(n);if(nf(r,e).mapEditRef)throw new Error("Task authoring session required");if(!t||typeof t!="object")throw new Error("New map and task IDs required");const o=Og(i),a={id:t.mapId,revision:1},l={id:t.taskId,revision:1};let c=Cm(r,e,t.mapId,`${o} MAP`.slice(0,128));c=D0(c,e,a,t.taskId,o);const d=c.sessions.find(u=>u.id===e);return d.taskRef=Bo(l),d.mapRef=Bo(a),zg(r,c,e,"task",l,a)}function IE(n,e){return n===void 0||e<n?"active":e===n?"destroyed":"wreck"}function LE(n,e){let t=n/255*2-1,i=e/255*2-1;const r=1-Math.abs(t)-Math.abs(i);if(r<0){const o=t,a=i;t=(1-Math.abs(a))*(o>=0?1:-1),i=(1-Math.abs(o))*(a>=0?1:-1)}const s=Math.sqrt(t*t+i*i+r*r);return[t/s,i/s,r/s]}const NE=1e3,yh=n=>n/NE,Pc=n=>n*Ke,Ho=n=>n/Ke,UE=n=>Pc(yh(n));function kE(n){return[Ho(n.x),Ho(n.y),Ho(n.z)]}const vu=new b(.35,.86,.37).normalize(),hm=.45;function FE(n){const e=new Bt,t=n.mesh.vertexCount,i=new Float32Array(t*3);for(let a=0;a<i.length;a++){const l=a%3,c=n.mesh.positions[a]/65535*n.bounds.extent[l]+n.bounds.min[l];i[a]=UE(c)}e.setAttribute("position",new $n(i,3));const r=new Float32Array(t*3),s=new Float32Array(t*3);for(let a=0;a<t;a++){const[l,c,d]=LE(n.mesh.normals[a*2],n.mesh.normals[a*2+1]);r[a*3]=l,r[a*3+1]=c,r[a*3+2]=d;const u=Math.max(0,l*vu.x+c*vu.y+d*vu.z),h=hm+(1-hm)*u;s[a*3]=h,s[a*3+1]=h,s[a*3+2]=h}e.setAttribute("normal",new $n(r,3)),e.setAttribute("color",new $n(s,3)),e.setIndex(Array.from(n.mesh.indices));const o=n.mesh.indices.length/3;if(n.mesh.groups.length===o){let a=0,l=n.mesh.groups[0];for(let c=1;c<=o;c++){const d=c<o?n.mesh.groups[c]:-1;d!==l&&(e.addGroup(a*3,(c-a)*3,l),a=c,l=d)}}else o>0&&e.addGroup(0,o*3,0);return e.computeBoundingBox(),e.computeBoundingSphere(),e}function OE(n){return n.map(([e,t,i])=>new bn({color:new Ot(e/255,t/255,i/255),vertexColors:!0,side:pn,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}))}const Bg=Qh;class zE{batches=new Map;dirty=!0;matricesDirty=!0;scene;constructor(e){this.scene=e}markDirty(){this.dirty=!0,this.matricesDirty=!0}markMatrices(){this.matricesDirty=!0}sync(e,t){this.dirty?this.rebuild(e,t):this.matricesDirty&&this.updateMatrices(t)}rebuild(e,t){if(this.dirty=!1,this.matricesDirty=!1,this.disposeBatches(),!t?.length)return;const i=new Map;t.forEach((r,s)=>{const o=`${r.prefabId}@${r.revision}`,a=i.get(o);a?a.push(s):i.set(o,[s])});for(const[r,s]of i){const o=r.lastIndexOf("@"),a=r.slice(0,o),l=Number(r.slice(o+1)),c=e.find(d=>d.id===a&&d.revision===l);if(!c){console.warn(`Prefab ${r} is referenced by a placement but missing from the library`);continue}try{const d=FE(c),u=OE(c.mesh.materials),h=new ig(d,u,s.length),f=new zt;s.forEach((m,v)=>{const g=t[m];g&&h.setMatrixAt(v,fm(g,f))}),h.instanceMatrix.needsUpdate=!0,h.castShadow=!0,h.receiveShadow=!0,h.userData.prefabKey=r,this.scene.add(h),this.batches.set(r,{key:r,mesh:h,geometry:d,materials:u,placementIndices:s})}catch(d){console.error(`Failed to render prefab ${r}`,d)}}}updateMatrices(e){if(this.matricesDirty=!1,!e?.length)return;const t=new zt;for(const i of this.batches.values())i.placementIndices.forEach((r,s)=>{const o=e[r];o&&i.mesh.setMatrixAt(s,fm(o,t))}),i.mesh.instanceMatrix.needsUpdate=!0,i.mesh.computeBoundingSphere()}pickTargets(){return[...this.batches.values()].map(e=>e.mesh)}placementIndexForHit(e){const t=e.instanceId;if(t===void 0)return null;for(const i of this.batches.values())if(i.mesh===e.object)return i.placementIndices[t]??null;return null}getInstanceCount(){let e=0;for(const t of this.batches.values())e+=t.mesh.count;return e}getResourceStats(){let e=0;for(const t of this.batches.values())e+=t.materials.length;return{geometries:this.batches.size,materials:e,instances:this.getInstanceCount()}}disposeBatches(){for(const e of this.batches.values()){this.scene.remove(e.mesh),e.geometry.dispose();for(const t of e.materials)t.dispose();e.mesh.dispose()}this.batches.clear()}dispose(){this.disposeBatches(),this.dirty=!0,this.matricesDirty=!0}}function fm(n,e){const t=Hg(n,new b),i=new rn().setFromEuler(new En(n.rotation[0],n.rotation[1],n.rotation[2])),r=new b(n.scale[0],n.scale[1],n.scale[2]);return e.compose(t,i,r)}function Hg(n,e){return e.set(Pc(n.position[0]),Pc(n.position[1])+Bg,Pc(n.position[2]))}function BE(n){return[Ho(n.x),Ho(n.y-Bg),Ho(n.z)]}const Vg=n=>n.terrain.widthKm??n.terrain.extentKm*2,Gg=n=>n.terrain.heightKm??n.terrain.extentKm*2;function _u(n,e,t,i){const r=Math.cos(t[1]),s=Math.sin(t[1]);return n.map(([o,a])=>{const l=o*i[0],c=a*i[2],d=l*r-c*s,u=l*s+c*r;return[e[0]+yh(d),e[2]+yh(u)]})}function HE(n,e){const t=n.terrain.size,i=Vg(n),r=Gg(n),s=i/(t-1),o=r/(t-1);let a=1/0,l=-1/0,c=1/0,d=-1/0;for(const[u,h]of e)u<a&&(a=u),u>l&&(l=u),h<c&&(c=h),h>d&&(d=h);return{iMin:Math.max(0,Math.floor((a+i/2)/s)),iMax:Math.min(t-1,Math.ceil((l+i/2)/s)),jMin:Math.max(0,Math.floor((c+r/2)/o)),jMax:Math.min(t-1,Math.ceil((d+r/2)/o))}}function ks(n,e){const t=n.terrain.size;if(e.length<3||t<2)return[];const i=Vg(n),r=Gg(n),s=i/(t-1),o=r/(t-1),a=HE(n,e),l=Math.max(0,a.iMin-1),c=Math.min(t-1,a.iMax+1),d=Math.max(0,a.jMin-1),u=Math.min(t-1,a.jMax+1),h=s/2,f=o/2,m=[];for(let v=d;v<=u;v++){const g=v*o-r/2;for(let p=l;p<=c;p++){const w=p*s-i/2;VE(e,w,g,h,f)&&m.push(v*t+p)}}return m}function VE(n,e,t,i,r){if(WE(e,t,n))return!0;const s=e-i,o=e+i,a=t-r,l=t+r,c=[[s,a],[o,a],[o,l],[s,l]];for(const[d,u]of n)if(d>=s&&d<=o&&u>=a&&u<=l)return!0;for(let d=0,u=n.length-1;d<n.length;u=d++){const h=n[u],f=n[d];for(let m=0,v=3;m<4;v=m++)if(GE(h,f,c[v],c[m]))return!0}return!1}function GE(n,e,t,i){const r=(c,d,u)=>(d[0]-c[0])*(u[1]-c[1])-(d[1]-c[1])*(u[0]-c[0]),s=r(t,i,n),o=r(t,i,e),a=r(n,e,t),l=r(n,e,i);return(s>0&&o<0||s<0&&o>0)&&(a>0&&l<0||a<0&&l>0)}function WE(n,e,t){let i=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){const[o,a]=t[r],[l,c]=t[s];a>e!=c>e&&n<(l-o)*(e-a)/(c-a)+o&&(i=!i)}return i}function XE(n,e,t,i){const r=[...e],s=new Map;for(const o of i)for(const a of ks(n,o.footprintKm))s.set(a,o.heightKm);for(const o of ks(n,t.footprintKm)){const a=t.terrainBefore.get(o);r[o]=s.get(o)??(a===void 0?r[o]:a)}return r}function xu(n,e,t){const i=new Map;for(const r of ks(n,t))i.set(r,e[r]);return i}const qE=50;class $E{entries=[];armed=null;selected=null;undoStack=[];redoStack=[];map=null;heights=[];prefabs=[];placementView=[];viewStale=!0;renderer;constructor(e){this.renderer=new zE(e)}arm(e,t){this.armed={prefabId:e,revision:t},this.selected=null}disarm(){this.armed=null}armedPrefab(){return this.armed?{...this.armed}:null}isArmed(e,t){return this.armed?.prefabId===e&&this.armed.revision===t}select(e){this.selected=e!==null&&e>=0&&e<this.entries.length?e:null}selectedIndex(){return this.selected}selectedPlacement(){return this.selected===null?null:this.entries[this.selected]?.placement??null}placements(){return this.entries.map(e=>pm(e.placement))}count(){return this.entries.length}heightsKm(){return[...this.heights]}load(e,t){this.prefabs=t,this.map=e,this.heights=e?[...e.terrain.heightsKm]:[],this.entries=[],this.undoStack=[],this.redoStack=[],this.selected=null,this.armed=null;for(const i of e?.prefabPlacements??[]){const r=yu(t,i.prefabId,i.revision),s=r?_u(r.footprint,i.position,i.rotation,i.scale):i.flattenedFootprint??[];this.entries.push({placement:pm(i),footprintKm:s.map(o=>[o[0],o[1]]),terrainBefore:YE(i.terrainBefore)})}this.invalidate()}adoptTerrain(e){this.heights=[...e]}relevelAll(){if(this.map){for(const e of this.entries){e.terrainBefore.size||(e.terrainBefore=xu(this.map,this.heights,e.footprintKm),this.persistTerrainBefore(e));for(const t of ks(this.map,e.footprintKm))this.heights[t]=e.placement.position[1]}this.invalidate()}}place(e,t,i,r){if(!this.map)return null;const s=yu(e,t,i);if(!s)return console.warn(`Cannot place ${t}@${i}: not in the prefab library`),null;const o={prefabId:t,revision:i,position:[r[0],r[1],r[2]],rotation:[0,0,0],scale:[1,1,1]},a=_u(s.footprint,o.position,o.rotation,o.scale);o.flattenedFootprint=a.map(d=>[d[0],d[1]]);const l={placement:o,footprintKm:o.flattenedFootprint,terrainBefore:new Map},c=this.entries.length;return this.insert(l,c),this.pushOperation({kind:"place",index:c,entry:l}),this.invalidate(),c}remove(e){if(e<0||e>=this.entries.length)return!1;const t=this.entries[e];return this.entries.splice(e,1),this.applyRemoval(t),this.pushOperation({kind:"remove",index:e,entry:t}),this.selected!==null&&(this.selected=this.selected===e?null:this.selected>e?this.selected-1:this.selected),this.invalidate(),!0}removeSelected(){return this.selected===null?!1:this.remove(this.selected)}beginTransform(e){const t=this.entries[e];return t?mm(t.placement):null}previewTransform(e,t){const i=this.entries[e];if(!i)return!1;i.placement.position=[t.position[0],t.position[1],t.position[2]],i.placement.rotation=[0,t.rotation[1],0];const r=t.scale[0];return i.placement.scale=[r,r,r],this.renderer.markMatrices(),!0}endTransform(e,t){const i=this.entries[e];if(!i||!t||jE(t,i.placement))return!1;const r={placement:t,footprintKm:i.footprintKm.map(s=>[s[0],s[1]]),flattenedFootprint:i.placement.flattenedFootprint?.map(s=>[s[0],s[1]]),terrainBefore:new Map(i.terrainBefore)};return this.applyRemoval(i),this.relevel(i),this.pushOperation({kind:"transform",index:e,before:r,after:this.recordOf(i)}),this.invalidate(),!0}relevel(e){const t=yu(this.prefabs,e.placement.prefabId,e.placement.revision),i=t?_u(t.footprint,e.placement.position,e.placement.rotation,e.placement.scale):e.placement.flattenedFootprint??[];if(e.footprintKm=i.map(r=>[r[0],r[1]]),e.placement.flattenedFootprint=e.footprintKm,!!this.map){e.terrainBefore=xu(this.map,this.heights,e.footprintKm),this.persistTerrainBefore(e);for(const r of ks(this.map,e.footprintKm))this.heights[r]=e.placement.position[1]}}recordOf(e){return{placement:mm(e.placement),footprintKm:e.footprintKm.map(t=>[t[0],t[1]]),flattenedFootprint:e.placement.flattenedFootprint?.map(t=>[t[0],t[1]]),terrainBefore:new Map(e.terrainBefore)}}applyRecord(e,t){e.placement.position=[t.placement.position[0],t.placement.position[1],t.placement.position[2]],e.placement.rotation=[0,t.placement.rotation[1],0];const i=t.placement.scale[0];e.placement.scale=[i,i,i],e.footprintKm=t.footprintKm.map(r=>[r[0],r[1]]),t.flattenedFootprint?e.placement.flattenedFootprint=t.flattenedFootprint.map(r=>[r[0],r[1]]):delete e.placement.flattenedFootprint,e.terrainBefore=new Map(t.terrainBefore),this.persistTerrainBefore(e)}canUndo(){return this.undoStack.length>0}canRedo(){return this.redoStack.length>0}undo(){const e=this.undoStack.pop();return e?(this.invert(e),this.redoStack.push(e),!0):!1}redo(){const e=this.redoStack.pop();return e?(this.reapply(e),this.undoStack.push(e),!0):!1}pushOperation(e){this.undoStack.push(e),this.undoStack.length>qE&&this.undoStack.shift(),this.redoStack=[]}invert(e){if(e.kind==="transform"){const t=this.entries[e.index];if(!t)return;this.applyRemoval(t),this.applyRecord(t,e.before),this.relevelFromRecord(e.before),this.renderer.markMatrices()}else if(e.kind==="place"){const t=this.entries[e.index];if(!t)return;this.entries.splice(e.index,1),this.applyRemoval(t)}else this.insert(e.entry,e.index);this.clampSelection(),this.invalidate()}reapply(e){if(e.kind==="transform"){const t=this.entries[e.index];if(!t)return;this.applyRemoval(t),this.applyRecord(t,e.after),this.relevelFromRecord(e.after),this.renderer.markMatrices()}else if(e.kind==="place")this.insert(e.entry,e.index);else{const t=this.entries[e.index];if(!t)return;this.entries.splice(e.index,1),this.applyRemoval(t)}this.clampSelection(),this.invalidate()}relevelFromRecord(e){if(this.map)for(const t of ks(this.map,e.footprintKm))this.heights[t]=e.placement.position[1]}insert(e,t){if(e.terrainBefore=this.map?xu(this.map,this.heights,e.footprintKm):new Map,this.persistTerrainBefore(e),this.entries.splice(t,0,e),!!this.map)for(const i of ks(this.map,e.footprintKm))this.heights[i]=e.placement.position[1]}persistTerrainBefore(e){if(!e.terrainBefore.size){delete e.placement.terrainBefore;return}const t=[],i=[];for(const[r,s]of e.terrainBefore)t.push(r),i.push(s);e.placement.terrainBefore={cells:t,heightsKm:i}}applyRemoval(e){if(!this.map)return;const t=this.entries.filter(i=>i!==e).map(i=>({footprintKm:i.footprintKm,heightKm:i.placement.position[1]}));this.heights=XE(this.map,this.heights,e,t)}clampSelection(){this.selected!==null&&this.selected>=this.entries.length&&(this.selected=this.entries.length?this.entries.length-1:null)}syncRenderer(){this.renderer.sync(this.prefabs,this.view())}invalidate(){this.viewStale=!0,this.renderer.markDirty()}view(){return this.viewStale&&(this.placementView=this.entries.map(e=>e.placement),this.viewStale=!1),this.placementView}get rendererInstance(){return this.renderer}stats(){return{placements:this.entries.length,...this.renderer.getResourceStats()}}dispose(){this.renderer.dispose(),this.entries=[],this.undoStack=[],this.redoStack=[]}}function yu(n,e,t){return n.find(i=>i.id===e&&i.revision===t)}function pm(n){return{prefabId:n.prefabId,revision:n.revision,position:[n.position[0],n.position[1],n.position[2]],rotation:[n.rotation[0],n.rotation[1],n.rotation[2]],scale:[n.scale[0],n.scale[1],n.scale[2]],...n.flattenedFootprint?{flattenedFootprint:n.flattenedFootprint.map(e=>[e[0],e[1]])}:{},...n.terrainBefore?{terrainBefore:{cells:[...n.terrainBefore.cells],heightsKm:[...n.terrainBefore.heightsKm]}}:{}}}function YE(n){const e=new Map;return n&&n.cells.forEach((t,i)=>e.set(t,n.heightsKm[i])),e}function mm(n){return{position:[n.position[0],n.position[1],n.position[2]],rotation:[n.rotation[0],n.rotation[1],n.rotation[2]],scale:[n.scale[0],n.scale[1],n.scale[2]]}}function jE(n,e){return((i,r)=>Math.abs(i[0]-r[0])<1e-9&&Math.abs(i[1]-r[1])<1e-9&&Math.abs(i[2]-r[2])<1e-9)(n.position,e.position)&&Math.abs(n.rotation[1]-e.rotation[1])<1e-9&&Math.abs(n.scale[0]-e.scale[0])<1e-9}const gm="prefab-panel-style",ZE=`
.prefab-panel { display:flex; flex-direction:column; gap:10px; font-size:12px; color:#d8e6ee; }
.prefab-panel.is-floating { position:absolute; right:calc(5.4vw + 326px); top:72px; width:286px;
  max-height:calc(100% - 96px); padding:12px; overflow:auto; z-index:40;
  background:#0b1a26; border:1px solid #41657a; box-shadow:0 6px 22px rgba(0,0,0,.5); }
.prefab-panel h3 { margin:0; font-size:13px; letter-spacing:.04em; }
.prefab-panel .prefab-head { display:flex; align-items:center; justify-content:space-between; gap:8px; }
.prefab-panel .prefab-close { background:none; border:0; color:#8fb4c8; font-size:16px; line-height:1; cursor:pointer; padding:2px 4px; }
.prefab-panel .prefab-hint { margin:0; line-height:1.6; color:#9dbccd; }
.prefab-panel .prefab-empty { border:1px dashed #3c5c70; padding:10px; line-height:1.7; color:#9dbccd; }
.prefab-panel .prefab-list { display:flex; flex-direction:column; gap:7px; }
.prefab-panel .prefab-card { display:block; width:100%; text-align:left; padding:8px 9px; cursor:pointer;
  background:#11293a; border:1px solid #33566b; color:#d8e6ee; font:inherit; }
.prefab-panel .prefab-card:hover { border-color:#5d8ba6; background:#16344a; }
.prefab-panel .prefab-card[aria-pressed="true"] { border-color:#37b6ff; background:#143c56; }
.prefab-panel .prefab-card strong { display:block; font-size:12px; margin-bottom:3px; }
.prefab-panel .prefab-card span { display:block; color:#8fb0c2; font-size:11px; }
.prefab-panel .prefab-selected { border:1px solid #37b6ff; background:#12334a; padding:9px; display:flex;
  flex-direction:column; gap:7px; }
.prefab-panel .prefab-selected p { margin:0; line-height:1.5; white-space:pre-line; }
.prefab-panel .prefab-actions { display:flex; gap:7px; }
.prefab-panel .prefab-modes { display:flex; gap:6px; }
.prefab-panel button.prefab-mode { flex:1; padding:6px 4px; font:inherit; cursor:pointer;
  background:#122b3c; border:1px solid #3f6478; color:#cfe2ec; }
.prefab-panel button.prefab-mode[aria-pressed="true"] { border-color:#37b6ff; background:#143c56; color:#eaf6ff; }
.prefab-panel button.prefab-mode:hover:not([disabled]) { background:#1b3d53; }
.prefab-panel button.prefab-action { flex:1; padding:6px; font:inherit; cursor:pointer;
  background:#1d3f56; border:1px solid #4b7691; color:#d8e6ee; }
.prefab-panel button.prefab-action:hover:not([disabled]) { background:#255471; }
.prefab-panel button.prefab-danger { border-color:#8d4a4a; background:#4a2323; }
.prefab-panel button.prefab-danger:hover:not([disabled]) { background:#63302f; }
.prefab-panel button[disabled] { opacity:.5; cursor:default; }
`;class KE{root=null;list=null;selectedBox=null;selectedText=null;deleteButton=null;armedKey=null;selection=null;modeButtons=new Map;transformMode="translate";host;constructor(e){this.host=e}get visible(){return this.root!==null}show(){if(this.root)return;JE();const e=document.createElement("div");e.className=this.host.floating?"prefab-panel is-floating":"prefab-panel";const t=document.createElement("div");t.className="prefab-head";const i=document.createElement("h3");i.textContent="预制件库";const r=document.createElement("button");r.className="prefab-close",r.type="button",r.textContent="✕",r.setAttribute("aria-label","关闭预制件面板"),r.addEventListener("click",()=>this.host.onClose()),t.append(i,r),this.host.floating||(r.hidden=!0),e.append(t);const s=document.createElement("p");s.className="prefab-hint",s.textContent="点卡片选择预制件后，点击空地放置；点击已放置的实例即可选中它（无需先取消放置）。Esc 取消放置。",e.append(s);const o=document.createElement("div");o.className="prefab-list",e.append(o),this.list=o;const a=document.createElement("div");a.className="prefab-selected",a.hidden=!0;const l=document.createElement("p"),c=document.createElement("div");c.className="prefab-modes";for(const[h,f]of[["translate","移动"],["rotate","旋转"],["scale","缩放"]]){const m=document.createElement("button");m.type="button",m.className="prefab-mode",m.dataset.prefabMode=h,m.textContent=f,m.addEventListener("click",()=>this.host.onTransformMode?.(h)),c.append(m),this.modeButtons.set(h,m)}const d=document.createElement("div");d.className="prefab-actions";const u=document.createElement("button");u.type="button",u.className="prefab-action prefab-danger",u.textContent="删除该实例",u.addEventListener("click",()=>this.host.onDeleteSelected()),d.append(u),a.append(l,c,d),e.append(a),this.selectedBox=a,this.selectedText=l,this.deleteButton=u,this.host.container.append(e),this.root=e,this.renderList(),this.renderSelection()}hide(){this.root?.remove(),this.root=null,this.list=null,this.selectedBox=null,this.selectedText=null,this.deleteButton=null}setPrefabs(e){this.host={...this.host,prefabs:e},this.renderList()}setArmed(e,t=0){this.armedKey=e===null?null:`${e}@${t}`,this.renderList()}setSelection(e){this.selection=e,this.renderSelection()}setTransformMode(e){this.transformMode=e,this.renderModes()}renderModes(){for(const[e,t]of this.modeButtons)t.setAttribute("aria-pressed",String(e===this.transformMode))}renderList(){const e=this.list;if(e){if(e.replaceChildren(),this.host.prefabs.length===0){const t=document.createElement("div");t.className="prefab-empty",t.textContent="项目里还没有预制件。请到管理器的「预制件库」标签页导入预制件 JSON（例如仓库根目录的 test-runway.prefab.json），再回到此处放置。",e.append(t);return}for(const t of this.host.prefabs){const i=`${t.id}@${t.revision}`,r=this.armedKey===i,s=document.createElement("button");s.type="button",s.className="prefab-card",s.setAttribute("aria-pressed",String(r));const o=document.createElement("strong");o.textContent=t.name;const a=document.createElement("span"),l=Math.floor(t.mesh.indices.length/3),[c,d,u]=t.bounds.extent;a.textContent=`${l.toLocaleString()} 三角形 · ${t.mesh.materials.length} 材质`;const h=document.createElement("span");h.textContent=`${(c/1e3).toFixed(3)} × ${(d/1e3).toFixed(3)} × ${(u/1e3).toFixed(3)} km`,s.append(o,a,h),s.addEventListener("click",()=>{r?this.host.onDisarm():this.host.onArm(t.id,t.revision)}),e.append(s)}}}renderSelection(){!this.selectedBox||!this.selectedText||(this.selectedBox.hidden=this.selection===null,this.selectedText.textContent=this.selection??"",this.deleteButton&&(this.deleteButton.disabled=this.selection===null),this.renderModes())}}function JE(){if(document.getElementById(gm))return;const n=document.createElement("style");n.id=gm,n.textContent=ZE,document.head.append(n)}const qa={squadron:2155134,friendly:2985215,neutral:16767050,enemy:16738613,white:15332072,terrain:6062736},Wg={squadron:"中队",friendly:"友军",neutral:"中立",enemy:"敌军"},bh={active:"在编",destroyed:"已击落",wreck:"残骸"};let dt=null,ci=null;const Vr=new P_;Vr.background=new Ot(133653);const wt=new Bi(42,innerWidth/innerHeight,.1,5e3);wt.position.set(0,240,410);const ft=new aw({antialias:!0,powerPreference:"high-performance"});ft.setPixelRatio(Math.min(devicePixelRatio,2));ft.setSize(innerWidth,innerHeight);ft.outputColorSpace=yi;ft.domElement.setAttribute("aria-label","三维地图画布");ft.domElement.setAttribute("role","img");ft.domElement.tabIndex=0;document.querySelector("#scene").appendChild(ft.domElement);const Ut=new cw(wt,ft.domElement);Ut.target.set(0,0,0);Ut.enableDamping=!0;Ut.dampingFactor=.08;Ut.minDistance=35;Ut.maxDistance=1e4;Ut.maxPolarAngle=Math.PI*.49;const Xg=new Sx(1588299,30,850);Xg.position.set(0,140,0);Vr.add(Xg);const cn=new In;Vr.add(cn);dt=new $E(Vr);let Qr;function qg(n,e){Qr&&(cn.remove(Qr),Qr.geometry.dispose(),Qr.material.dispose()),Qr=Ww(n,e),cn.add(Qr),wg(Qr,wt.position.distanceTo(Ut.target))}qg(750,750);function $a(n,e,t=1,i=1){const r=new Bt().setFromPoints(n),s=new Pi({color:e,transparent:!0,opacity:i});return new hn(r,s)}let gt=new Pm,Ht=new Im,ll=42,is=0,$s={...Sl},rf=!1;function Rt(n,e){return gt.sample(n,e)}function $g(){const n=document.querySelector("#terrain-contour-smooth").checked;return Ow(gt,{smoothing:n})}const yc=32,qc=new Map,QE=new bn({vertexColors:!0,transparent:!0,opacity:.64,side:pn,depthWrite:!1}),Sh=Nw(),eT=new bn({vertexColors:!0}),tT=(n,e)=>`${n},${e}`;function Yg(n){const e=Ht.buildings(gt,ll,is,n),t=[],i=[],r=Math.cos(is),s=Math.sin(is);for(const c of e){const d=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([u,h])=>{const f=u*c.width/2,m=h*c.depth/2,v=c.x+f*r-m*s,g=c.z+f*s+m*r;return new b(v,Rt(v,g)+Qh,g)});for(const u of[0,1,2,0,2,3]){const h=d[u];t.push(h.x,h.y,h.z),i.push(c.shade*.82,c.shade*.91,c.shade)}}for(const c of[...n.group.children]){const d=c;d.geometry&&d.geometry!==Sh&&d.geometry.dispose(),c.isInstancedMesh&&c.dispose(),n.group.remove(c)}const o=new Bt;o.setAttribute("position",new Lt(t,3)),o.setAttribute("color",new Lt(i,3));const a=new we(o,QE);a.renderOrder=-1,n.group.add(a);const l=new Map;for(const c of e){const d=l.get(c.zone);d?d.push(c):l.set(c.zone,[c])}for(const[c,d]of l){const u=Uw(d,(f,m)=>Rt(f,m),is,Ht.styleFor(c));if(!u.count)continue;const h=new ig(Sh,eT,u.count);h.instanceMatrix.array.set(u.matrices),h.instanceMatrix.needsUpdate=!0,h.instanceColor=new ph(u.colors,3),h.instanceColor.needsUpdate=!0,n.group.add(h)}n.group.userData.count=e.length}function sf(){let n=0;for(const e of qc.values())n+=e.group.userData.count;return n}function jg(){const n=new In;qc.clear();for(let e=0;e<Ht.size;e+=yc)for(let t=0;t<Ht.size;t+=yc){const i={minX:t,minZ:e,maxX:Math.min(Ht.size-1,t+yc-1),maxZ:Math.min(Ht.size-1,e+yc-1),group:new In};Yg(i),qc.set(tT(t,e),i),n.add(i.group)}return n.userData.count=sf(),n}function nT(n){for(const e of qc.values())n&&(e.maxX<n.minX||e.minX>n.maxX||e.maxZ<n.minZ||e.minZ>n.maxZ)||Yg(e);Fs.userData.count=sf()}function iT(n){n.traverse(e=>{const t=e;t.geometry&&t.geometry!==Sh&&t.geometry.dispose(),e.isInstancedMesh&&e.dispose()}),cn.remove(n),n.clear()}let Vo=null;function rT(n,e){const t=Math.max(0,Math.floor((n.x-e+Ht.extent)/Ht.spacing)),i=Math.min(Ht.size-1,Math.ceil((n.x+e+Ht.extent)/Ht.spacing)),r=Math.max(0,Math.floor((n.z-e+Ht.extentZ)/Ht.spacingZ)),s=Math.min(Ht.size-1,Math.ceil((n.z+e+Ht.extentZ)/Ht.spacingZ)),o=Vo;Vo=o?{minX:Math.min(o.minX,t),maxX:Math.max(o.maxX,i),minZ:Math.min(o.minZ,r),maxZ:Math.max(o.maxZ,s)}:{minX:t,maxX:i,minZ:r,maxZ:s}}function sT(){if(!Vo)return;const n=Vo;Vo=null,nT(n)}let Fs=jg();cn.add(Fs);let Ei=$g();cn.add(Ei);let nr=!1,un=null,$c=null,cl=!0,Bs=null;function Zg(){!un||$c!==gt?(un&&(cn.remove(un.root),un.dispose()),un=Mg(gt,{smoothing:!!document.querySelector("#terrain-contour-smooth")?.checked}),$c=gt,cn.add(un.root)):cl&&un.update();const n=un.root.children[0]?.material,e=!!document.querySelector("#terrain-contour-smooth")?.checked;n?.userData.terrainContours&&n.userData.contourSmoothing!==e&&(n.userData.contourSmoothing=e,n.needsUpdate=!0),cl=!1,un.root.visible=Ei===un.root||!!Tt?.height}function Kg(){Bs&&(Zg(),un.update(Bs),Bs=null,Ei!==un.root&&(Ei.visible=!1))}function oT(n,e){const t=Math.max(0,Math.floor((n.x-e+gt.extent)/gt.spacing)),i=Math.min(gt.size-1,Math.ceil((n.x+e+gt.extent)/gt.spacing)),r=Math.max(0,Math.floor((n.z-e+gt.extentZ)/gt.spacingZ)),s=Math.min(gt.size-1,Math.ceil((n.z+e+gt.extentZ)/gt.spacingZ));if(t>i||r>s)return;const o=Bs;Bs=o?{minX:Math.min(o.minX,t),maxX:Math.max(o.maxX,i),minZ:Math.min(o.minZ,r),maxZ:Math.max(o.maxZ,s)}:{minX:t,maxX:i,minZ:r,maxZ:s}}function la(n=!1){Il();const e=n&&un&&$c===gt;cl=!e,Bs=null,un&&(un.root.visible=!!e),e?(Ei!==un.root&&ea(Ei),Ei=un.root,Ei.visible=!0):(Ei===un?.root?(cn.remove(un.root),un.dispose(),un=null):ea(Ei),Ei=$g(),cn.add(Ei)),nr=!1,iT(Fs),Fs=jg(),cn.add(Fs);const t=Gr(Le);t.units.forEach(r=>{cf(r,t.turn),(r.unit.icon==="ground"||r.unit.icon==="ship")&&ed(r.unit)}),Wo();const i=gt.data.reduce((r,s)=>Math.max(r,s),0);document.querySelector("#terrain-state").textContent=`${gt.extent*2/25} × ${gt.extentZ*2/25} km / 最高 ${(i/25).toFixed(2)} km / 建筑 ${Fs.userData.count}`}const ot=[{id:"rex",label:"REX",faction:"squadron",kind:"F-16C",icon:"air-filled",positions:[new b(-250,60,250),new b(-170,85,180),new b(-70,108,140),new b(30,125,130),new b(130,138,150)]},{id:"tasha",label:"TASHA",faction:"friendly",kind:"MIRAGE 2000-5",icon:"air-outline",positions:[new b(-210,84,270),new b(-120,88,185),new b(-20,94,130),new b(65,90,80),new b(150,96,30)]},{id:"professor",label:"PROFESSOR",faction:"neutral",kind:"EA-6B",icon:"air-outline",positions:[new b(-275,52,300),new b(-190,55,215),new b(-90,61,165),new b(10,65,125),new b(105,68,85)]},{id:"mig29",label:"MIG-29A",faction:"enemy",kind:"MIG-29",icon:"air-outline",destroyedAtTurn:3,positions:[new b(300,120,-220),new b(195,100,-150),new b(100,78,-70),new b(20,55,10),new b(20,55,10)]},{id:"sam",label:"SAM",faction:"enemy",kind:"SAM",icon:"ground",tgt:!0,positions:[new b(160,0,-150),new b(160,0,-150),new b(160,0,-150),new b(160,0,-150),new b(160,0,-150)]},{id:"frigate",label:"FRIGATE",faction:"enemy",kind:"FRIGATE",icon:"ship",tgt:!0,positions:[new b(245,0,-40),new b(230,0,-30),new b(215,0,-20),new b(200,0,-10),new b(185,0,0)]}],Kn=[{summary:"FORMATION / INITIAL CONTACT",events:[]},{summary:"TACTICAL MOVEMENT / CONTACT",events:[{kind:"attack",attacker:"mig29",target:"rex",weapon:"2AAM"}]},{summary:"ENGAGEMENT / RANGE CLOSING",events:[{kind:"attack",attacker:"rex",target:"mig29",weapon:"QAAM"}]},{summary:"LOSSES / RESULT PENDING",events:[{kind:"destroy",target:"mig29"}]},{summary:"FINAL POSITION / RESULT",events:[]}];function ti(){return Kn.length}function Li(){return Kn.length-1}function Jg(){return typeof Dt<"u"&&Dt?hd:Li()}function ro(n,e){return IE(n.destroyedAtTurn,e)}function bu(n){return ot.find(e=>e.id===n)?.label??n.toUpperCase()}function aT(n){return n.kind==="attack"?`${bu(n.attacker)} → ${bu(n.target)} / ${n.weapon}`:`${bu(n.target)} 被击落`}function Gr(n){const e=Math.max(0,Math.min(n,Li())),t=Kn[e];return{turn:e,summary:t.summary,events:t.events,units:ot.map(i=>({unit:i,position:El(i,i.positions[Math.min(e,i.positions.length-1)],Rt),status:ro(i,e)}))}}ot.forEach(n=>{n.positions.length!==ti()&&console.warn(`[scenario] ${n.label} has ${n.positions.length} keyframes but the scenario declares ${ti()} turns`)});let Le=0,fe=null;const Ni=new Map,Ys=new Map,Hs=new Map;let Dc,Co=null,Mh=-1/0,Ic="",Su=[];const lT=.675,Mu=new rn().setFromEuler(new En(-Math.PI/2,0,0)),Qg=22,di=1.5,vm=7.2;function cT(){const n=[];for(let e=0;e<=64;e++){const t=e/64*Math.PI*2;n.push(new b(Math.cos(t)*vm,Math.sin(t)*vm,0))}return n}function dT(n,e){const t=oE(n.icon,e);return t.scale.setScalar(lT),t.traverse(i=>{i.userData.unit=n}),t}function of(n,e){const t=n.icon==="ground"?Math.PI:0;if(Rn())return ls(Lm({...n,destroyedAtTurn:n.attitudes?.[e]?void 0:n.destroyedAtTurn},e,{epsilon:.001}).yaw+t);const i=Math.min(e,n.positions.length-1),r=n.attitudes?.[i];if(r)return ls(r.yaw+t);const s=n.positions[Math.max(0,i-1)],o=n.positions[Math.min(n.positions.length-1,i+1)],a=o.x-s.x,l=o.z-s.z;return Math.hypot(a,l)<.001?null:ls(Math.atan2(-a,-l)+t)}function af(n,e){const t=n.routeBinding;if(!t||Rn())return null;const i=Math.min(e,n.positions.length-1);if(i<=t.startTurn)return null;const r=n.positions.length-1,s=n.icon==="ground"?Math.PI:0,o=(l,c)=>{const d=c.x-l.x,u=c.z-l.z;return Math.hypot(d,u)<.001?null:Math.atan2(-d,-u)+s},a=o(n.positions[Math.max(t.startTurn,i-1)],n.positions[Math.min(r,i+1)]);if(a!==null)return ls(a);for(let l=i;l>t.startTurn;l--){const c=o(n.positions[l-1],n.positions[l]);if(c!==null)return ls(c)}return null}const wu=.6,_m=2,xm=new b(0,1,0),uT=new b(1,0,0),hT=new b(0,0,1);function ls(n){return Math.atan2(Math.sin(n),Math.cos(n))}function ym(n,e){const t=n.positions[e],i=n.positions[e+1];if(!t||!i)return null;const r=i.x-t.x,s=i.z-t.z;return Math.hypot(r,s)<.001?null:Math.atan2(r,s)}function lf(n,e){if(n.icon!=="air-filled"&&n.icon!=="air-outline")return null;if(Rn())return Lm({...n,destroyedAtTurn:n.attitudes?.[e]?void 0:n.destroyedAtTurn},e,{epsilon:.001,maxBank:wu,rollGain:_m});const t=Math.min(e,n.positions.length-1),i=n.attitudes?.[t];if(i)return i;const r=n.positions[Math.max(0,t-1)],s=n.positions[Math.min(n.positions.length-1,t+1)],o=s.x-r.x,a=s.y-r.y,l=s.z-r.z,c=Math.hypot(o,l);if(c<.001&&Math.abs(a)<.001)return null;const d=Math.atan2(-o,-l),u=Math.atan2(a,Math.max(c,.001)),h=ym(n,t-1),f=ym(n,t),m=h===null||f===null?0:Qt.clamp(_m*ls(f-h),-wu,wu);return{yaw:d,pitch:u,roll:m}}function ca(n){const e=new In;e.userData.unit=n,e.userData.pickable=!0;const t=qa[n.faction],i=n.icon==="ground"||n.icon==="ship";let r=null;i||(r=new we(new od(2.2,3.3,20),new bn({color:t,transparent:!0,opacity:.8,side:pn})),r.rotation.x=-Math.PI/2,r.userData.unit=n,e.add(r));const s=new hn(new Bt,new Pi({color:t,transparent:!0,opacity:.8}));s.userData.unit=n,e.add(s);const o=dT(n,t),a=new hn(new Bt().setFromPoints(cT()),new Pi({color:t,transparent:!0,opacity:.9,depthTest:!1}));a.visible=!1,a.userData.unit=n,o.add(a);const l=Eg(t);l.userData.unit=n,o.add(l),e.add(o);const c=2.6,d=new Pi({color:t,transparent:!0,opacity:.9,depthTest:!1}),u=new In;u.add(new hn(new Bt().setFromPoints([new b(-c,0,-c),new b(c,0,c)]),d)),u.add(new hn(new Bt().setFromPoints([new b(-c,0,c),new b(c,0,-c)]),d)),u.visible=!1,e.add(u);const h=[];o.traverse(g=>{const p=g.material;!p||Array.isArray(p)||h.push({material:p,baseOpacity:p.opacity})});const f=document.createElement("div");f.className=`world-label ${n.faction}`,f.textContent=n.label,f.style.cssText=`position:absolute; left:0; top:0; transform:translate(0, 0); color:#${t.toString(16).padStart(6,"0")}; text-shadow:0 0 7px #${t.toString(16).padStart(6,"0")}; font:14px 'Share Tech Mono',monospace; white-space:nowrap; pointer-events:none;`;const m=new Tn;m.userData.dom=f,e.add(m),e.userData.parts={base:r,pole:s,icon:o,label:m,wreck:u,tgtRing:a,escortMarker:l,iconMaterials:h,labelFade:1};const v=eE(t);v.root.traverse(g=>{g.userData.unit=n}),e.add(v.root),Ys.set(n.id,v),cn.add(e),Ni.set(n.id,e)}function cf(n,e){const{unit:t,status:i}=n,r=Ni.get(t.id),s=r.userData.parts,o=i==="wreck",a=!(typeof Dt<"u"&&Dt)&&!Rn()&&o&&t.destroyedAtTurn!==void 0,l=El(t,a?t.positions[Math.min(t.destroyedAtTurn,t.positions.length-1)]:n.position,Rt),c=t.intangible?l.y:Rt(l.x,l.z);r.position.set(l.x,c,l.z);const d=Math.max(0,l.y-c),u=ld(t,l,Rt,di).y-c,h=s.base===null?u+Qg-di:Math.max(d,.6);if(s.base&&(s.base.visible=!o),s.icon.visible=!o,s.pole.visible=!o,s.wreck.visible=i!=="active",s.wreck.position.y=u,s.tgtRing.visible=t.tgt===!0&&i==="active",s.escortMarker.visible=t.escort===!0&&t.faction!=="enemy"&&i==="active",!o){let p=s.pole.geometry.getAttribute("position");p?(p.setXYZ(0,0,.2,0),p.setXYZ(1,0,h,0),p.needsUpdate=!0):(p=new Lt([0,.2,0,0,h,0],3),s.pole.geometry.setAttribute("position",p)),s.pole.geometry.computeBoundingSphere(),s.pole.geometry.boundingBox&&s.pole.geometry.computeBoundingBox()}const f=s.icon;f.position.y=u;const m=lf(t,e),v=af(t,e);if(m===null||v!==null){const p=v??of(t,e);p===null?f.quaternion.copy(Mu):f.quaternion.setFromAxisAngle(xm,p).multiply(Mu)}else f.quaternion.setFromAxisAngle(xm,m.yaw).multiply(new rn().setFromAxisAngle(uT,m.pitch)).multiply(new rn().setFromAxisAngle(hT,m.roll)).multiply(Mu);const g=i==="destroyed";s.iconMaterials.forEach(({material:p,baseOpacity:w})=>{p.transparent||(p.transparent=!0,p.needsUpdate=!0),p.userData.baseDepthTest??=p.depthTest,p.depthTest=t.intangible?!1:p.userData.baseDepthTest,p.opacity=w*(g?.3:1)*(t.hidden?.35:1)});for(const p of[s.base,s.pole,...s.wreck.children]){const w=p?.material;!w||Array.isArray(w)||(w.userData.hiddenBaseOpacity??=w.opacity,w.opacity=w.userData.hiddenBaseOpacity*(t.hidden?.35:1))}s.labelFade=(o?0:g?.5:1)*(t.hidden?.5:1),s.label.position.y=h}function e0(n,e){const t=new In;if(t.userData.trail=!0,n.length<2)return t;const i=[],r=2.3;n.forEach((l,c)=>{const d=n[Math.max(0,c-1)],u=n[Math.min(n.length-1,c+1)],h=new b().subVectors(u,d).normalize(),f=new b(-h.z,0,h.x).normalize().multiplyScalar(r*(.45+c/n.length*.55));i.push(l.x+f.x,l.y+.5,l.z+f.z,l.x-f.x,l.y+.5,l.z-f.z)});const s=[];for(let l=0;l<n.length-1;l++)s.push(l*2,l*2+1,l*2+2,l*2+1,l*2+3,l*2+2);const o=new Bt;o.setAttribute("position",new Lt(i,3)),o.setIndex(s),o.computeVertexNormals();const a=new bn({color:e,transparent:!0,opacity:.28,side:pn,depthWrite:!1,blending:Ru});return t.add(new we(o,a)),t}function df(n,e){return Rn()?St()?.sealedScenes?.find(t=>t.turn<=e&&t.units.some(i=>i.id===n.id))?.turn??e:0}function uf(n,e,t){const i=Nm(n.positions,n.trackPoints??[],e,t).map(a=>new b(a.x,a.y,a.z));if(i.length<2)return[];const r=new Yh(i,!1,"centripetal"),s=[];let o=0;for(let a=e;a<t;a++){const l=(n.trackPoints??[]).filter(m=>m.segment===a).length+1,c=o/(i.length-1),d=(o+l)/(i.length-1),u=Math.max(24,l*16),h=i.slice(o,o+l+1).every(m=>m.distanceToSquared(i[o])<1e-12),f=Array.from({length:u+1},(m,v)=>h?i[o].clone():r.getPoint(Qt.lerp(c,d,v/u)));s.push({segment:a,points:f,start:c,end:d,curve:r}),o+=l}return s}function t0(n,e){const{unit:t,status:i}=n;if(i==="wreck"||document.querySelector("#trail-display").value==="none")return;const r=t.destroyedAtTurn===void 0?e:Math.min(e,t.destroyedAtTurn),s=document.querySelector("#trail-display").value==="recent",o=Math.max(1,Math.floor(Number(document.querySelector("#trail-turns").value)||1)),a=df(t,e),l=Math.max(a,s?Math.max(0,r-o):0),c=uf(t,a,r).filter(u=>u.segment>=l).flatMap((u,h)=>h?u.points.slice(1):u.points);!t.intangible&&(t.icon==="ground"||t.icon==="ship")&&c.forEach(u=>{u.y=Rt(u.x,u.z)+di});const d=e0(c,qa[t.faction]);d.userData.trail=t.id,cn.add(d)}const da=document.createElement("div");da.className="labels";da.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;contain:strict;";document.querySelector("#app").appendChild(da);function ua(){for(const[,n]of Ni){const e=n.userData.parts.label,t=e.userData.dom;t.dataset.unitId=n.userData.unit.id,da.appendChild(t),e.userData.domObject=t}}let De=!1,Gt=!1,fn=!1;const Mn=[{id:"route-1",name:"ROUTE 1",waypoints:[]}];let On="route-1",dl=2,Yc=1,Ai="",Hi="",mn=null,ul=[],Fn=new In;cn.add(Fn);const Vi=new Map;function jc(){return Mn.find(n=>n.id===On)??Mn[0]}function Ko(){return jc()?.waypoints??[]}const Zc=document.createElement("div");Zc.className="waypoint-labels";document.querySelector("#app").appendChild(Zc);const wh=[];let Kc=1,Jc=1,Yt=!1,Hn=!1,Wt=!1,it=null,cr=new In;cn.add(cr);let Tt=null,ds=1;const mt=new Set;function Yi(){return ot.filter(n=>mt.has(n.id))}function Di(){return Yi().filter(n=>Tl(n))}function Jo(){const n=Di();return n.reduce((e,t)=>e.add(qn(t)),new b).divideScalar(n.length||1)}function Qn(n){bt?.clearSelection(),it?.kind==="track"&&(it=null),Wt=!1,mt.clear(),n.forEach(e=>mt.add(e.id)),fe=n[n.length-1]??null,at(),tt()}function cd(n,e=!1){typeof an<"u"&&an?.pick("unit",n.id)||(e?(mt.has(n.id)?mt.delete(n.id):mt.add(n.id),Qn(Yi())):Qn([n]))}function n0(n,e){const t=n.routeBinding;!t||Rn()||!st()||!e.length||(t.startTurn=Math.min(...e))}function hl(n){if(!Mi()||!De)return;const e=Di();if(!e.length)return;const t=so();if(n.lengthSq()<1e-12&&!e.some(r=>io(r)&&t.some(s=>{const o=r.positions[s];return o.y!==Rt(o.x,o.z)})))return;const i=e.filter(r=>zn(r)&&!r.intangible);i.length&&(n.y=Math.max(n.y,...i.flatMap(r=>t.map(s=>{const o=r.positions[s];return Math.max(0,Rt(o.x+n.x,o.z+n.z))-o.y})))),xn("draft")&&(e.forEach(r=>{n0(r,t),t.forEach(s=>r.positions[s].add(n)),st()&&r.trackPoints?.forEach(s=>{t.includes(s.segment)&&t.includes(s.segment+1)&&(s.x+=n.x,s.y+=n.y,s.z+=n.z)}),ml(r,t)}),e.some(r=>r.routeBinding)&&Zi(),at(),tt())}let ei;const dd=()=>({groups:[],markers:[],drawings:[]}),qi=()=>ei??dd();let wn,i0,bt,an,Eh,ts,Qc="",er=null;const ud=document.createElement("div");ud.className="editor-tool-labels";document.querySelector("#app").appendChild(ud);const fT=qw(ud);let ve=null,Dt=!1,Lc=null,fl=null,pl=null,hd=0,Nc={edit:!1,terrain:!1};const Vs=new Map;let Ii=null,rs=null;function St(){if(!ve)return;if(rs?.store===ve&&rs.revision===ve.revision)return rs.session;const n=ve.read(),e=n.project.sessions.find(t=>t.id===(n.editor.sessionId??"session-working"));return rs={store:ve,revision:ve.revision,session:e},e}function Rn(){return St()?.workflow?.mode==="formal"}function st(){if(typeof Dt<"u"&&Dt)return!1;const n=St();return n?.status!=="finished"&&(!n?.workflow||Gi())}function Ri(){return typeof Dt<"u"&&Dt||st()}function Gi(){const n=St();return!!n?.workflow&&n.status!=="finished"&&n.turns.length===n.workflow.committedTurns+1&&Le===n.workflow.committedTurns}function Mi(){return st()||Gi()}function bm(){return je?"单位放置":Ee.dragging?"对象变换":Tt?"地形笔刷":_n?"路径或标记拖动":bi?"框选":bt?.isPicking()?"地图工具取点":null}function jt(){return!!je||Ee.dragging||!!Tt||!!_n||!!bi||!!bt?.isPicking()}function Eu(n,e){if(!Ri()||!De||je||Ee.dragging||Tt||_n||bi||!xn("tools"))return!1;ei??=dd(),e(ei,ot);const t=Kt(n);return at("tools"),tt(),t}function pT(n){const e=ot.filter(s=>s.groupId===n.id);if(!st()||!De||!e.length||jt()||!xn())return;ei??=dd();const t={...n,id:`group-${crypto.randomUUID()}`,name:`${n.name} 副本`.slice(0,128)};ei.groups.push(t);const i=pf().spacing,r=e.map(s=>{const o=Rl(Al(s)),a=ds++;return o.id=`unit-${a}`,o.groupId=t.id,o.routeBinding=void 0,delete o.player,delete o.playerActions,o.positions.forEach(l=>{l.x+=i,l.z+=i}),o.trackPoints?.forEach(l=>{l.x+=i,l.z+=i}),ot.push(o),ca(o),o});ua(),Qn(r),js("translate")}function hf(n,e=.5){const t=new b(n.x,n.y,n.z).multiplyScalar(Ke),i=wt.position.clone().sub(Ut.target).normalize();i.lengthSq()<.1&&i.set(0,.6,1).normalize();const r=Math.max(90,e*Ke/Math.sin(Qt.degToRad(wt.fov)/2)*1.4);Ut.target.copy(t),wt.position.copy(t).addScaledVector(i,Math.min(r,Ut.maxDistance)),Ut.update()}function Sm(n){const e=ot.filter(r=>n.includes(r.id)).map(r=>qn(r));if(!e.length)return;const t=e.reduce((r,s)=>r.add(s),new b).divideScalar(e.length),i=Math.max(15,...e.map(r=>r.distanceTo(t)))/Ke;hf({x:t.x/Ke,y:t.y/Ke,z:t.z/Ke},i)}function Tl(n){return Mi()&&(Gi()||ro(n,Le)==="active")}function ff(n){return Mi()&&(st()||n.destroyedAtTurn===void 0||n.destroyedAtTurn===Le)}function Kt(n="Edit scenario",e=Ii){if(!ve||!e)return!0;if(Ee.dragging||Tt)return!1;try{const t=r0();return Ii=null,ve.commit(t,n,e),!0}catch(t){Ii=null,gr(ve.read()),fe=ot.find(r=>mt.has(r.id))??null,console.error("Scenario transaction rolled back",t);const i="编辑未保存："+(t instanceof Error?t.message:String(t));return on(i),Jn(i,"error"),!1}}function Qo(n,e){if(n===e)return!0;if(n===null||e===null||typeof n!="object"||typeof e!="object")return!1;if(ArrayBuffer.isView(n)||ArrayBuffer.isView(e)){if(!ArrayBuffer.isView(n)||!ArrayBuffer.isView(e))return!1;const s=n,o=e;if(s.length!==o.length)return!1;for(let a=0;a<s.length;a++)if(s[a]!==o[a])return!1;return!0}if(Array.isArray(n)||Array.isArray(e))return!Array.isArray(n)||!Array.isArray(e)||n.length!==e.length?!1:n.every((s,o)=>Qo(s??null,e[o]??null));const t=n,i=e,r=Object.keys(t).filter(s=>t[s]!==void 0);return r.length!==Object.keys(i).filter(s=>i[s]!==void 0).length?!1:r.every(s=>Object.prototype.hasOwnProperty.call(i,s)&&Qo(t[s],i[s]))}function mT(n,e){const t={...n,editor:{...n.editor,currentTurn:e.currentTurn}},i=Ih(t,Dh(t));if(i.layout=e.layout,!Qo(e,i))throw new Error("已提交回合保留原样；请在末尾草稿编辑场景");return{...n,editor:{...t.editor,activeRouteId:e.activeRouteId}}}function r0(n=fd()){if(typeof Dt<"u"&&Dt&&ve){const v=ve.read(),g=v.project.sessions.find(p=>p.id===v.editor.sessionId);return g.sceneTools=structuredClone(n.sceneTools??dd()),v}if(ve&&(St()?.status==="finished"||Rn()&&!Gi()))return mT(ve.read(),n);const e=F0(n,n.layout??{size:gt.size,extent:gt.extent,extentZ:gt.extentZ});if(!ve)return e;const t=ve.read(),i=t.project,r=t.editor.sessionId??"session-working",s=i.sessions.find(v=>v.id===r),o=i.maps.find(v=>v.id===s.mapRef.id&&v.revision===s.mapRef.revision),a=e.project.sessions[0];if(a.id=s.id,a.name=s.name,a.taskRef=s.taskRef,a.mapRef=s.mapRef,a.resourceSnapshot=s.resourceSnapshot,a.rulesRevision=s.rulesRevision,a.status=s.status,s.rulesRef&&(a.rulesRef={...s.rulesRef}),s.rulesSnapshot&&(a.rulesSnapshot=structuredClone(s.rulesSnapshot)),a.workflow=s.workflow,a.mapEditRef=s.mapEditRef,s.workflow){a.sealedScenes=O0(s),a.turns=s.turns.map((g,p)=>p===Le?a.turns[p]:g);const v=Ih(t,Dh(t));a.units.forEach(g=>{const p=s.units.find(_=>_.id===g.id),w=v.units.find(_=>_.id===g.id);if(p){for(let _=0;_<Le;_++)g.positions[_]=p.positions[_],g.attitudes&&(g.attitudes[_]=p.attitudes?.[_]??null);w&&Qo(n.units.find(_=>_.id===g.id)?.positions[Le],w.positions[Le])&&(g.positions[Le]=p.positions[Le])}})}const l=e.project.maps[0];l.id=o.id,l.revision=o.revision,l.name=o.name,typeof ja<"u"&&ja&&typeof dt<"u"&&dt&&ja===(St()?.mapRef?.id??"")?l.prefabPlacements=dt.placements():o.prefabPlacements&&(l.prefabPlacements=structuredClone(o.prefabPlacements));const c=v=>v.id===o.id&&v.revision===o.revision,d=l.terrain.size!==o.terrain.size||l.terrain.widthKm!==(o.terrain.widthKm??o.terrain.extentKm*2)||l.terrain.heightKm!==(o.terrain.heightKm??o.terrain.extentKm*2)||!Qo(l.urban,o.urban)||l.terrain.heightsKm.some((v,g)=>Math.abs(v-o.terrain.heightsKm[g])>1e-7)||JSON.stringify(l.prefabPlacements??null)!==JSON.stringify(o.prefabPlacements??null),u=!!s.workflow||i.tasks.some(v=>c(v.mapRef))||i.sessions.some(v=>v.id!==r&&c(v.mapRef));d&&u&&(l.revision=Math.max(...i.maps.filter(v=>v.id===o.id).map(v=>v.revision))+1,a.mapRef={id:l.id,revision:l.revision});const h=d?u?[...i.maps,l]:i.maps.map(v=>c(v)?l:v):i.maps,f=(v,g)=>!!g&&g.id===v.id&&g.revision===v.revision,m=h.filter(v=>v.id!==o.id||v.revision===l.revision||i.tasks.some(g=>f(v,g.mapRef))||i.sessions.some(g=>f(v,g.mapEditRef)||!!g.sealedScenes?.some(p=>f(v,p.mapRef))||g.id!==r&&f(v,g.mapRef)));return e.project={...i,maps:m,sessions:i.sessions.map(v=>v.id===r?a:v)},e.editor.sessionId=r,e}function gr(n){const e=Dh(n);(gt.size!==e.size||gt.extent!==e.extent||gt.extentZ!==e.extentZ)&&(gt=new Pm(e.size,e.extent,e.extentZ),Ht=new Im(e.size,e.extent,e.extentZ),qg(e.extent,e.extentZ??e.extent),Cl(),gf()),gT(Ih(n,e)),typeof vl<"u"&&vl&&fa(!0)}function Al(n){return{id:n.id,label:n.label,faction:n.faction,kind:n.kind,icon:n.icon,positions:n.positions.map(e=>({x:e.x,y:e.y,z:e.z})),attitudes:n.attitudes?.map(e=>e?{...e}:null),destroyedAtTurn:n.destroyedAtTurn,tgt:n.tgt,...n.escort===void 0?{}:{escort:n.escort},...n.hidden===void 0?{}:{hidden:n.hidden},...n.intangible===void 0?{}:{intangible:n.intangible},groupId:n.groupId,aircraftRef:n.aircraftRef?{...n.aircraftRef}:void 0,spRefs:n.spRefs?.map(e=>({...e})),...n.loadout===void 0?{}:{loadout:n.loadout.map(e=>({slot:e.slot,weaponRef:{...e.weaponRef}}))},...n.player===void 0?{}:{player:{...n.player}},...n.playerActions===void 0?{}:{playerActions:structuredClone(n.playerActions)},routeBinding:n.routeBinding?{...n.routeBinding,offset:n.routeBinding.offset?{...n.routeBinding.offset}:void 0}:void 0,trackPoints:n.trackPoints?.map(e=>({...e}))}}function Rl(n){return{id:n.id,label:n.label,faction:n.faction,kind:n.kind,icon:n.icon,positions:n.positions.map(e=>new b(e.x,e.y,e.z)),attitudes:n.attitudes?.map(e=>e?{...e}:null),destroyedAtTurn:n.destroyedAtTurn,tgt:n.tgt,...n.escort===void 0?{}:{escort:n.escort},...n.hidden===void 0?{}:{hidden:n.hidden},...n.intangible===void 0?{}:{intangible:n.intangible},groupId:n.groupId,aircraftRef:n.aircraftRef?{...n.aircraftRef}:void 0,spRefs:n.spRefs?.map(e=>({...e})),...n.loadout===void 0?{}:{loadout:n.loadout.map(e=>({slot:e.slot,weaponRef:{...e.weaponRef}}))},...n.player===void 0?{}:{player:{...n.player}},...n.playerActions===void 0?{}:{playerActions:structuredClone(n.playerActions)},routeBinding:n.routeBinding?{...n.routeBinding,offset:n.routeBinding.offset?{...n.routeBinding.offset}:void 0}:void 0,trackPoints:n.trackPoints?.map(e=>({...e}))}}function fd(){return{units:ot.map(Al),turns:Kn.map(n=>({summary:n.summary,events:n.events.map(e=>({...e}))})),currentTurn:Le,...ei?{sceneTools:structuredClone(ei)}:{},layout:{size:gt.size,extent:gt.extent,extentZ:gt.extentZ},terrain:gt.data.slice(),urban:Ht.data.slice(),urbanSeed:ll,urbanAngle:is,urbanStyle:rf?{...Ht.styles[0]??Sl}:void 0,urbanStyles:Ht.styles.map(n=>({...n})),urbanZones:Ht.zones.slice(),routes:Mn.map(n=>({...n,waypoints:n.waypoints.map(e=>({...e}))})),activeRouteId:On}}function ea(n){n.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(r=>r.dispose()):i&&i.dispose()}),cn.remove(n)}function s0(n){const e=Ni.get(n.id);if(!e)return;e.userData.parts.label.userData.dom.remove(),ea(e),Ni.delete(n.id),Ys.delete(n.id),Hs.delete(n.id),Il()}function gT(n){ei=n.sceneTools?structuredClone(n.sceneTools):void 0,Mn.splice(0,Mn.length,...n.routes.map(t=>({...t,waypoints:t.waypoints.map(i=>({...i}))}))),On=n.activeRouteId,it=null,Yt=!1,Wt=!1,gt.data.set(n.terrain),Ht.data.set(n.urban),ll=n.urbanSeed,is=n.urbanAngle;const e=n.urbanStyles?.length?n.urbanStyles.map(t=>za(t)):[za(n.urbanStyle)];e[0]=za({...e[0],...n.urbanStyle??{}}),Ht.styles=e,rf=n.urbanStyle!==void 0,n.urbanZones?.length===Ht.zones.length?Ht.zones.set(n.urbanZones):Ht.zones.fill(0),$s={...e[e.length-1]},nr=!0,ht("#urban-seed").value=String(ll),ht("#urban-angle").value=String(Qt.radToDeg(is)),w0(),Kn.splice(0,Kn.length,...n.turns.map(t=>({summary:t.summary,events:t.events.map(i=>({...i}))}))),Le=Math.min(n.currentTurn,Li());for(const t of[...Ni.values()])ea(t);Ni.clear(),Ys.clear(),Hs.clear(),Il(),da.replaceChildren(),ot.length=0,n.units.forEach(t=>ot.push(Rl(t))),ot.forEach(ca),ua()}function xn(n="author"){return!De||(n==="tools"?!Ri():n==="author"?!st():!Mi())||!Kt()?!1:(Ii=ve?.read()??null,!0)}function o0(n){if(!ve||Ee.dragging||Tt||je||!st()&&!(Gi()&&n.type==="set-turn-summary"&&n.turn===Le&&n.sessionId===St()?.id)||!Kt())return;const e=[...mt];ve.dispatch(n),gr(ve.read()),mt.clear(),e.filter(t=>ot.some(i=>i.id===t)).forEach(t=>mt.add(t)),fe=Yi().at(-1)??null,at(),tt()}function pd(){if(je||Ee.dragging||Tt)return;Kt();const n=ve?.undo();if(!n)return;const e=[...mt];gr(n),mt.clear(),e.filter(t=>ot.some(i=>i.id===t)).forEach(t=>mt.add(t)),fe=Yi().at(-1)??null,at(),tt()}function md(){if(je||Ee.dragging||Tt)return;Kt();const n=ve?.redo();if(!n)return;const e=[...mt];gr(n),mt.clear(),e.filter(t=>ot.some(i=>i.id===t)).forEach(t=>mt.add(t)),fe=Yi().at(-1)??null,at(),tt()}function vT(n){s0(n),ca(n),ua()}function ed(n){Il();const e={unit:n,position:qn(n),status:ro(n,Le)};cf(e,Le),cn.children.filter(t=>t.userData.trail===n.id).forEach(t=>ea(t)),t0(e,Le),fe===n&&mt.size<=1&&d0(e,Gr(Le))}function qn(n,e=!1){const t=n.positions[Math.min(Le,n.positions.length-1)];return e?t:El(n,t,Rt)}function ml(n,e=so()){io(n)&&(e.forEach(t=>{const i=n.positions[t];i.y=Rt(i.x,i.z)}),st()&&n.trackPoints?.forEach(t=>{e.includes(t.segment)&&e.includes(t.segment+1)&&(t.y=Rt(t.x,t.z))}))}function _T(){!st()||St()?.mapEditRef||!De||Ee.dragging||(Ui(!0),gn=!1,us(),mt.clear(),fe=null,je={id:`unit-${ds}`,label:`NEW-${String(ds).padStart(2,"0")}`,faction:"enemy",kind:"UNKNOWN",icon:"air-outline",tgt:!1,positions:Array.from({length:ti()},()=>new b(0,60,0)),attitudes:Array.from({length:ti()},()=>({yaw:0,pitch:0,roll:0}))},vd(),tt())}function xT(){if(!st()||!De)return;const n=Yi();if(!n.length||je||Ee.dragging||!xn())return;const e=new Set(n.map(t=>t.id));ei?.links&&(ei.links=ei.links.filter(t=>!e.has(t.fromUnitId)&&!(t.to.kind==="unit"&&e.has(t.to.id)))),n.forEach(t=>{s0(t),ot.splice(ot.indexOf(t),1)}),Kn.forEach((t,i)=>{(!Rn()||i===Le)&&(t.events=t.events.filter(r=>!e.has(r.target)&&(r.kind!=="attack"||!e.has(r.attacker))))}),Qn([])}function pf(){const n=Math.floor(Number(ht("#create-count").value)),e=Number(ht("#create-spacing").value);return{count:Number.isFinite(n)?Qt.clamp(n,1,100):1,spacing:Number.isFinite(e)?Qt.clamp(e,1,1e3):20}}function a0(){if(!st()||!De)return;const n=Yi();if(!n.length||je||Ee.dragging)return;const{count:e,spacing:t}=pf();if(!xn())return;const i=[];for(let r=0;r<e;r++)for(const s of n){const o=Rl(Al(s)),a=ds++;o.id=`unit-${a}`,delete o.player,delete o.playerActions,o.routeBinding=void 0,o.trackPoints?.forEach(l=>{l.x+=t*(r+1),l.z+=t*(r+1)}),o.positions.forEach(l=>{l.x+=t*(r+1),l.z+=t*(r+1)}),i.push(o),ot.push(o),ca(o)}ua(),Qn(i),js("translate")}ot.forEach(ca);ua();function at(n){Il(),Kt(),ve&&!Ii&&!Ee.dragging&&!Tt&&ve.setEditor({currentTurn:Le,activeRouteId:On,sessionId:ve.read().editor.sessionId??"session-working"}),n!=="tools"&&_d(),l0();const e=Gr(Le);bt?.sync(),typeof an<"u"&&(Ee.dragging?an?.update():an?.sync()),n!=="tools"&&(cn.children.filter(i=>i.userData.trail).forEach(i=>{cn.remove(i),i.traverse(r=>{(r instanceof we||r instanceof hn)&&(r.geometry.dispose(),Array.isArray(r.material)?r.material.forEach(s=>s.dispose()):r.material.dispose())})}),e.units.forEach(i=>{cf(i,e.turn),t0(i,e.turn)})),document.querySelector("#turn-title").textContent=`TURN ${String(e.turn+1).padStart(2,"0")}`,document.querySelector("#turn-indicator").textContent=`${String(e.turn+1).padStart(2,"0")} / ${String(Jg()+1).padStart(2,"0")}`,document.querySelector("#turn-summary").textContent=e.summary,document.querySelector("#unit-count").textContent=String(e.units.length).padStart(2,"0"),document.querySelector("#event-list").textContent=e.events.length===0?"无接触":e.events.map(aT).join(`
`);const t=e.units.find(i=>i.unit===fe);t?d0(t,e):(fe=null,vd()),mt.size>1&&(document.querySelector("#selected-name").textContent=`${mt.size} UNITS`,document.querySelector("#selected-detail").textContent=Yi().map(i=>i.label).join(" / "),document.querySelector("#distance-readout").textContent=`${Di().length} 个可移动单位 / 编队移动`,document.querySelector("#attitude-readout").textContent="");for(const[i,r]of Ni)r.userData.parts.label.userData.dom.classList.toggle("unit-selected",De&&mt.has(i))}function Th(){const n=Gr(Le),e=n.units.find(s=>s.unit.id===Ai),t=n.units.find(s=>s.unit.id===Hi),i=Fn.userData.rangeCenters;if(i)for(const[s,o]of i){const a=n.units.find(c=>c.unit.id===s);if(!a)continue;const l=a.position.clone().sub(o);for(const c of Fn.children)c.userData.rangeUnitId===s&&c.position.add(l);o.copy(a.position)}Fn.userData.rangeCenter=i?.get(Ai);const r=Fn.children.find(s=>s.userData.rangeConnector);if(e&&t&&e.unit.id!==t.unit.id&&r){const s=r.geometry.getAttribute("position");s.setXYZ(0,e.position.x,e.position.y,e.position.z),s.setXYZ(1,t.position.x,t.position.y,t.position.z),s.needsUpdate=!0,r.geometry.computeBoundingSphere();const o=Ph(e.position,t.position,"slant",mf());document.querySelector("#range-result").textContent=`${o.band} / 斜距
水平 ${o.horizontalKm.toFixed(2)} km
高差 ${o.altitudeDeltaKm.toFixed(2)} km
斜距 ${o.slantKm.toFixed(2)} km${e.status!=="active"||t.status!=="active"?`
已失效单位 / 仅供参考`:""}`}}function mf(){const n=St(),e=n?.sealedScenes?.find(t=>t.turn===Le);return z0(e?e.rulesSnapshot:n?.rulesSnapshot)}function gd(n){Ai=n;const e=Vi.get(n);e&&(document.querySelector("#range-rings").checked=e.rings,document.querySelector("#range-fill").checked=e.fill,document.querySelector("#range-fill-band").value=e.band,document.querySelector("#range-fill-opacity").value=String(e.opacity))}function yT(n){Vi.delete(n),Ai===n&&(Ai=""),Xn(),at()}function bT(n,e){for(const a of Vi.keys())n.units.some(l=>l.unit.id===a)||Vi.delete(a);const t=Fn.userData.rangeLayerKeys??new Map,i=Fn.userData.rangeCenters??new Map;Fn.userData.rangeLayerKeys=t,Fn.userData.rangeCenters=i;const r=a=>{for(const l of[...Fn.children])if(l.userData.rangeUnitId===a){const c=l;c.geometry.dispose(),Array.isArray(c.material)?c.material.forEach(d=>d.dispose()):c.material.dispose(),Fn.remove(l)}t.delete(a),i.delete(a)};for(const a of t.keys())Vi.has(a)||r(a);for(const[a,l]of Vi){const c=n.units.find(h=>h.unit.id===a),d=e.find(h=>h.name===l.band)??e[0],u=JSON.stringify([l,e]);if(t.get(a)!==u){if(r(a),t.set(a,u),i.set(a,c.position.clone()),l.fill){const h=new we(new as(d.maxKm*Ke,48,32),new bn({color:d.color,transparent:!0,opacity:l.opacity,depthWrite:!1,side:zr}));h.position.copy(c.position),h.userData.rangeFill={band:d.name,radiusKm:d.maxKm},h.userData.rangeCentered=!0,h.userData.rangeUnitId=a,Fn.add(h)}if(l.rings)for(const h of e){const f=h.maxKm*Ke,m=Array.from({length:129},(g,p)=>{const w=p/128*Math.PI*2;return new b(c.position.x+Math.cos(w)*f,c.position.y,c.position.z+Math.sin(w)*f)}),v=$a(m,h.color,1,.5);v.userData.rangeCentered=!0,v.userData.rangeUnitId=a,Fn.add(v)}}}const s=document.querySelector("#range-layer-list");s&&s.replaceChildren(...Array.from(Vi,([a,l])=>{const c=n.units.find(v=>v.unit.id===a),d=document.createElement("div");d.className="range-layer-row",d.dataset.rangeUnitId=a;const u=document.createElement("div");u.textContent=`${c.unit.label} [${a}] · ${l.rings?"截面环":""}${l.rings&&l.fill?" + ":""}${l.fill?`${l.band}球体`:""}`;const h=document.createElement("div");h.className="edit-actions";const f=document.createElement("button");f.type="button",f.textContent="调整",f.setAttribute("aria-label",`调整${c.unit.label}的范围`),f.addEventListener("click",()=>{gd(a),Xn(),at()});const m=document.createElement("button");return m.type="button",m.textContent="移除",m.setAttribute("aria-label",`移除${c.unit.label}的范围`),m.addEventListener("click",()=>yT(a)),h.appendChild(f),h.appendChild(m),d.appendChild(u),d.appendChild(h),d}));const o=document.querySelector("#range-layer-count");o&&(o.textContent=`常驻范围：${Vi.size} 个单位`)}function l0(){const n=St()?.id,e=Fn.userData.rangeSessionId;e&&e!==n&&(Vi.clear(),Ai=Hi=""),Fn.userData.rangeSessionId=n;const t=mf(),i=Gr(Le);i.units.some(m=>m.unit.id===Ai)||(Ai=""),i.units.some(m=>m.unit.id===Hi)||(Hi="");for(const[m,v]of[["#range-attacker-name",Ai],["#range-target-name",Hi]]){const g=i.units.find(p=>p.unit.id===v);document.querySelector(m).textContent=g?`${g.unit.label} [${g.unit.id}] / ${bh[g.status]}`:"尚未选择"}for(const[m,v]of[["#range-attacker-select",Ai],["#range-target-select",Hi]]){const g=document.querySelector(m);g&&(g.replaceChildren(...["",...i.units.map(p=>p.unit.id)].map(p=>{const w=document.createElement("option");w.value=p;const _=i.units.find(x=>x.unit.id===p);return w.textContent=_?`${_.unit.label} · ${_.unit.kind}`:"选择单位",w})),g.value=v)}document.querySelector("#range-pick-state").textContent=mn?`${mn==="attacker"?"攻击方":"目标"}选择中`:"";for(const m of["attacker","target"])document.querySelector(`#range-pick-${m}`).setAttribute("aria-pressed",String(mn===m));const r=document.querySelector("#range-candidates");r.hidden=!ul.length,r.replaceChildren(...ul.flatMap(m=>{const v=i.units.find(p=>p.unit.id===m);if(!v)return[];const g=document.createElement("button");return g.textContent=`${v.unit.label} [${m}] / ${v.unit.kind} / ${Wg[v.unit.faction]} / ${bh[v.status]}`,g.addEventListener("click",()=>c0(v.unit)),[g]}));const s="slant";document.querySelector("#range-mode-readout").textContent=s.toUpperCase();const o=i.units.find(m=>m.unit.id===Ai),a=i.units.find(m=>m.unit.id===Hi),l=document.querySelector("#range-result"),c=document.querySelector("#range-fill").checked,d=document.querySelector("#range-rings").checked,u=t.find(m=>m.name===document.querySelector("#range-fill-band").value)??t[0],h=Qt.clamp(Number(document.querySelector("#range-fill-opacity").value)||.12,.02,.6);o&&(c||d?Vi.set(o.unit.id,{fill:c,rings:d,band:u.name,opacity:h}):Vi.delete(o.unit.id)),bT(i,t);const f=JSON.stringify([o?.unit.id,a?.unit.id]);if(!o||!a)l.textContent="请选择攻击方与目标";else if(o===a)l.textContent="攻击方与目标不能相同";else{const m=Ph(o.position,a.position,s,t);l.textContent=`${m.band} / 斜距
水平 ${m.horizontalKm.toFixed(2)} km
高差 ${m.altitudeDeltaKm.toFixed(2)} km
斜距 ${m.slantKm.toFixed(2)} km${o.status!=="active"||a.status!=="active"?`
已失效单位 / 仅供参考`:""}`}if(o&&c&&!a&&(l.textContent=`${u.name} / 3D填充半径 ${u.maxKm} km`),Fn.userData.rangeVisualKey===f){Th();return}for(const m of[...Fn.children])if(m.userData.rangeConnector){const v=m;v.geometry.dispose(),Array.isArray(v.material)?v.material.forEach(g=>g.dispose()):v.material.dispose(),Fn.remove(v)}if(Fn.userData.rangeVisualKey=f,o&&a&&o!==a){const m=$a([o.position,a.position],15332072,1,.75);m.userData.rangeConnector=!0,Fn.add(m)}Th()}function Xn(){mn=null,ul=[],Ut.enabled=!0,ft.domElement.style.cursor=Gt?"crosshair":"",Wo()}function c0(n){!mn||!ot.includes(n)||(mn==="attacker"?gd(n.id):Hi=n.id,Xn(),at())}function ST(n){if(!(Ee.dragging||Tt||je)){if(bt?.cancel(),mn===n){Xn(),at();return}Ui(!0),gn=!1,Gt&&tr(!1),Yt=Wt=Hn=!1,it=null,mn=n,ul=[],Ee.detach(),Ut.enabled=!0,ft.domElement.style.cursor="crosshair",at(),tt()}}function MT(n,e){jt()||ln||e&&!Gr(Le).units.some(t=>t.unit.id===e)||(n==="attacker"?gd(e):Hi=e,Xn(),at())}for(const n of["attacker","target"])document.querySelector(`#range-pick-${n}`).addEventListener("click",()=>ST(n)),document.querySelector(`#range-${n}-select`).addEventListener("change",e=>MT(n,e.target.value));document.querySelector("#range-use-selected").addEventListener("click",()=>{!fe||Ee.dragging||(gd(fe.id),Xn(),at())});document.querySelector("#range-clear").addEventListener("click",()=>{Vi.clear(),Ai=Hi="",Xn(),at()});for(const n of["#range-rings","#range-fill","#range-fill-band","#range-fill-opacity"])document.querySelector(n).addEventListener("change",()=>at());document.querySelector("#edit-panel").addEventListener("click",n=>{const e=n.target instanceof Element?n.target:null;mn&&!e?.closest(".range-panel")&&(Xn(),at())},!0);function vd(){document.querySelector("#selected-name").textContent="未选择",document.querySelector("#selected-detail").textContent="",document.querySelector("#distance-readout").textContent="—",document.querySelector("#attitude-readout").textContent="—"}function d0(n,e){const{unit:t,status:i}=n;fe=t;const r=n.position,s=[Wg[t.faction],bh[i]],o=qi().groups.find(v=>v.id===t.groupId);o&&s.push(`编组:${o.name}`),t.tgt&&s.push("目标"),t.escort&&t.faction!=="enemy"&&s.push("护卫目标"),document.querySelector("#selected-name").textContent=t.label,document.querySelector("#selected-detail").textContent=`${t.kind} / ${s.join(" / ")}`;const a=e.units.find(v=>v.unit.id===Hi),c=a&&a.unit!==t?Ph(r,a.position,"slant",mf()):null;document.querySelector("#distance-readout").textContent=c?`至 ${a.unit.label}：${c.distanceKm.toFixed(2)} km / ${c.band}`:"—";const d=lf(t,e.turn),u=v=>v*180/Math.PI,h=v=>`${u(v)>=0?"+":""}${u(v).toFixed(1)}°`,f=document.querySelector("#attitude-readout"),m=af(t,e.turn);if(m!==null)f.textContent=`偏航 ${h(m)}  俯仰 ${h(d?.pitch??0)}  横滚 ${h(d?.roll??0)}  （航路）`;else if(d===null){const v=of(t,e.turn);f.textContent=v===null?"朝向  固定":`朝向 ${h(v)}  （水平）`}else f.textContent=`偏航 ${h(d.yaw)}  俯仰 ${h(d.pitch)}  横滚 ${h(d.roll)}`}function Lo(n){if(bt?.cancel(),typeof Dt<"u"&&Dt){rA(n);return}const e=Math.max(0,Math.min(n,Li()));e!==Le&&(Ee.dragging||Tt||Kt()&&(bt?.clearSelection(),Ll="",bl(),Ui(!0),us(),Le=e,Rn()&&ve&&(ve.setEditor({...ve.read().editor,currentTurn:e}),gr(ve.read()),mt.clear(),fe=null,De=Gi()),at(),tt()))}function Cl(){const{width:n,height:e}=pa(),t=CE(gt.extent,gt.extentZ,n/e,wt.fov,360,n);return Ut.maxDistance=t.maxDistance,wt.far=t.far,wt.near=t.near,wt.updateProjectionMatrix(),t}function gf(){const n=Cl();Ut.target.set(0,0,0),wt.position.copy(new b(0,.65,1).normalize().multiplyScalar(n.distance)),Ut.update()}function wT(){const n=Cl();Ut.target.set(0,0,0),wt.position.set(0,n.distance,.001),Ut.maxPolarAngle=Math.PI*.499,Ut.update()}const An=()=>({label:document.querySelector("#edit-label"),kind:document.querySelector("#edit-kind"),faction:document.querySelector("#edit-faction"),icon:document.querySelector("#edit-icon"),tgt:document.querySelector("#edit-tgt"),escort:document.querySelector("#edit-escort"),hidden:document.querySelector("#edit-hidden"),intangible:document.querySelector("#edit-intangible"),lost:document.querySelector("#edit-lost"),remove:document.querySelector("#edit-delete"),undo:document.querySelector("#edit-undo"),redo:document.querySelector("#edit-redo")});let je=null,ir=!1,kr="translate",Go="translate";const ET=new b,It=new Tn;Vr.add(It);const Ee=new Sw(wt,ft.domElement);Ee.setSize(.85);Vr.add(Ee.getHelper());const ht=n=>document.querySelector(n),zn=n=>n.icon==="air-filled"||n.icon==="air-outline";function ha(n){const e=lf(n,Le),t=af(n,Le);return t!==null?{yaw:ls(t-(n.icon==="ground"?Math.PI:0)),pitch:e?.pitch??0,roll:e?.roll??0}:e??{yaw:ls((of(n,Le)??0)-(n.icon==="ground"?Math.PI:0)),pitch:0,roll:0}}function so(){return Mi()?Rn()?[Le]:Array.from({length:ht("#apply-later").checked?ti()-Le:1},(n,e)=>Le+e):[]}function u0(n,e){Tl(n)&&(n.attitudes??=Array.from({length:ti()},()=>null),so().forEach(t=>{n.attitudes[t]={...e}}))}function h0(n){if(Rn()||!st()||St()?.mapEditRef||!De||je||Ee.dragging||Tt||(Ui(!0),!xn()))return;const e=Le,t=e+1,i=new Map(ot.map(s=>[s.id,{...ha(s)}])),r=Kn[e];Kn.splice(t,0,{summary:n?r.summary:"TACTICAL MOVEMENT / NEW TURN",events:n?r.events.map(s=>({...s})):[]}),ot.forEach(s=>{if(s.trackPoints=Fm(s.trackPoints??[],t,!0),s.routeBinding&&s.routeBinding.startTurn>=t&&s.routeBinding.startTurn++,s.playerActions?.forEach(o=>{o.turn>=t&&o.turn++,o.recordedTurn>=t&&o.recordedTurn++}),s.positions.splice(t,0,s.positions[e].clone()),n)s.attitudes??=Array.from({length:ti()-1},()=>null),s.attitudes.splice(t,0,i.get(s.id));else if(s.attitudes){const o=s.attitudes[e];s.attitudes.splice(t,0,o?{...o}:null)}s.destroyedAtTurn!==void 0&&s.destroyedAtTurn>=t&&(s.destroyedAtTurn+=1)}),Kn[t].events=Kn[t].events.filter(s=>s.kind!=="destroy"),Zi(),it=null,Le=t,at(),tt()}function TT(){if(Rn()||!st()||St()?.mapEditRef||!De||ti()<=1||je||Ee.dragging||(Ui(!0),!xn()))return;const n=Le;Kn.splice(n,1),ot.forEach(e=>{e.trackPoints=Fm(e.trackPoints??[],n,!1),e.routeBinding&&(e.routeBinding.startTurn=Math.max(0,e.routeBinding.startTurn>=n?e.routeBinding.startTurn-1:e.routeBinding.startTurn)),e.positions.splice(n,1),e.attitudes?.splice(n,1),e.playerActions&&(e.playerActions=e.playerActions.filter(t=>t.turn!==n&&t.recordedTurn!==n).map(t=>({...t,turn:t.turn>n?t.turn-1:t.turn,recordedTurn:t.recordedTurn>n?t.recordedTurn-1:t.recordedTurn}))),e.destroyedAtTurn===n?e.destroyedAtTurn=void 0:e.destroyedAtTurn!==void 0&&e.destroyedAtTurn>n&&(e.destroyedAtTurn-=1)}),Zi(),it=null,Le=Math.min(n,Li()),at(),tt()}function Wo(){if(typeof an<"u"&&an?.active()){Ee.detach();return}if(!Mi()&&!Ri()){Ee.detach();return}if(mn||bt?.isPicking()){Ee.detach();return}if(typeof fn<"u"&&fn){eo();return}if(Ee.dragging)return;const n=bt?.selection();if(n&&Ri()&&De&&!Gt&&!je&&!gn){It.position.set(n.position.x,n.position.y,n.position.z).multiplyScalar(Ke);const r=n.kind==="marker"?qi().markers.find(o=>o.id===n.id):void 0,s=r&&zi(r)&&n.pointIndex===void 0?Go:"translate";It.scale.setScalar(1),It.quaternion.copy(r&&s!=="translate"?al(r):new rn),Ee.setMode(s),Ee.setSpace(s==="translate"?"world":"local"),Ee.showX=Ee.showY=Ee.showZ=!0,Ee.attach(It);return}It.scale.setScalar(1);const e=Pl();if(st()&&De&&!Gt&&e){const r=it?.kind==="track"?ot.find(o=>o.id===it.unitId):void 0,s=!!r&&!zn(r)&&!r.intangible;It.position.copy(Oa(e,s)),It.quaternion.identity(),Ee.setMode("translate"),Ee.setSpace("world"),Ee.showX=Ee.showZ=!0,Ee.showY=!s,Ee.attach(It);return}if(Yt||Wt||Hn){Ee.detach();return}if(!De||Gt||!fe||je||gn||!Di().length){Ee.detach();return}const t=mt.size>1?Jo():qn(fe);if(It.position.copy(t),mt.size===1&&It.position.copy(ld(fe,t,Rt,di)),ET.subVectors(It.position,t),mt.size>1)It.quaternion.identity();else{const r=ha(fe);It.quaternion.setFromEuler(new En(r.pitch,r.yaw,r.roll,"YXZ"))}Ee.setMode(kr),Ee.setSpace(kr==="translate"?"world":"local");const i=Di().some(zn);Ee.showX=kr==="translate"||i,Ee.showY=!0,Ee.showZ=kr==="translate"||i,Ee.attach(It)}let Ya="";function AT(){const n=wn?.panels.equipment;if(!n||!ve)return;if(Dt){n.replaceChildren(),Ya="";return}const e=St(),t=JSON.stringify([ve.revision,e?.id,Le,fe?.id,De,st(),jt(),fe?Al(fe):null]);if(t===Ya&&n.childElementCount)return;Ya=t,n.replaceChildren();const i=document.createElement("label");i.className="equipment-unit-choice",i.textContent="配置单位";const r=document.createElement("select");r.id="equipment-unit",r.setAttribute("aria-label","配置装备的单位"),r.add(new Option("请选择单位",""));for(const c of ot)r.add(new Option(c.label,c.id));r.value=fe?.id??"",r.disabled=jt(),i.append(r),n.append(i),r.addEventListener("change",()=>{if(jt()||!r.isConnected)return;const c=ot.find(d=>d.id===r.value);Qn(c?[c]:[])});const s=document.createElement("div");if(s.id="equipment-editor-body",n.append(s),!e||!fe||je){s.textContent=je?"待落位":"未选择单位";return}const o=e.id,a=fe.id,l=Le;k0(s,{read:()=>r0().project,busy:()=>ln||jt()||fe?.id!==a||St()?.id!==o||Le!==l,report:on,commit:(c,d)=>{if(!ve||!st()||!De||jt()||fe?.id!==a||St()?.id!==o||Le!==l)throw new Error("单位或编辑状态已变化，请重新选择装备。");if(!Kt())throw new Error("请先完成当前编辑。");const u=ve.read();ve.commit({...u,project:c},d,u),vr(),Dn(!0),wn?.select("equipment")}},{mode:"session",sessionId:o,unitId:a,turn:l,editable:st()&&De&&!jt()})}function RT(n){if(!ve||!st()||St()?.mapEditRef||ln||jt())throw new Error("请先完成当前操作，再新建玩家。");if(!Kt())throw new Error("当前编辑尚未保存。");const e=ve.read(),t=St().id,i=`player-unit-${crypto.randomUUID()}`,s=km(e.project,t,i,n.playerId,n.aircraftRef,n.loadout,{x:0,y:2.4,z:0},Le).sessions.find(o=>o.id===t).units.find(o=>o.id===i);Dn(!0),tr(!1),Ui(!0),gn=!1,Xn(),bt?.cancel(),bt?.clearSelection(),Yt=Wt=Hn=!1,it=null,mt.clear(),fe=null,vd(),je=Rl({...s,trackPoints:void 0,positions:s.positions.map(o=>({x:o.x*Ke,y:o.y*Ke,z:o.z*Ke}))}),er={input:structuredClone(n),player:{...s.player},sessionId:t,turn:Le,revision:ve.revision},ir=!1,Ut.enabled=!0,ft.domElement.style.cursor="",at(),tt()}function CT(){const n=er;!n||!je||!ve||n.sessionId!==St()?.id||n.turn!==Le||n.revision!==ve.revision||!st()||(ir=!0,Ut.enabled=!1,ft.domElement.style.cursor="crosshair",tt())}function PT(n){const e=er,t=je;if(!e||!t||!ve)return!1;if(!st()||!De||ln||Ee.dragging||Tt||e.sessionId!==St()?.id||e.turn!==Le||e.revision!==ve.revision)return on("玩家放置状态已变化，请取消后重新创建。"),!1;const i=ve.read(),r=n.clone();r.y=t.intangible?qn(t).y:zn(t)?Math.max(qn(t).y,Rt(r.x,r.z)+di):Rt(r.x,r.z);try{const s=km(i.project,e.sessionId,t.id,e.input.playerId,e.input.aircraftRef,e.input.loadout,{x:r.x/Ke,y:r.y/Ke,z:r.z/Ke},Le),o=s.sessions.find(l=>l.id===e.sessionId).units.find(l=>l.id===t.id);o.icon=t.icon,o.faction=t.faction;const a=o.id;return ve.commit({...i,project:s},"创建玩家单位",i),vr(),Dn(!0),Qn(ot.filter(l=>l.id===a)),on(`${e.player.callsign} 已放置`),!0}catch(s){return on(s instanceof Error?s.message:String(s)),!1}}function DT(n,e,t){if(!ve||!st()||St()?.mapEditRef||ln||jt())throw new Error("当前回合为只读或仍有操作待完成。");if(De||Dn(!0),!Kt())throw new Error("当前编辑尚未保存。");const i=ve.read(),r=St().id,s=Q0(i.project,r,n,Le,e,t==="drop"?"jettison":"use",`player-action-${crypto.randomUUID()}`);ve.commit({...i,project:s},t==="drop"?"登记上一回合抛弃":"登记上一回合使用",i),vr(),Dn(!0),on(`已登记${t==="drop"?"抛弃":"使用"}`)}function f0(){if(!Eh||!ts||!ve)return;const n=St(),e=!!n?.mapEditRef;ts.hidden=!Hr||e;const t=JSON.stringify([ve.revision,n?.id,Le,fe?.id,st(),De,Hr,ln,jt(),er,ir]);t!==Qc&&(Qc=t,Eh.sync({project:ve.read().project,revision:ve.revision,sessionId:n?.id??"",turn:Le,selectedUnitId:fe?.id,editable:st()&&!ln&&(er!==null||!jt()),mapOnly:e,...er?{pending:{player:{...er.player},aircraftRef:{...er.input.aircraftRef},loadout:structuredClone(er.input.loadout),armed:ir}}:{}}))}function Mm(){const n=je??fe,e=Pl();if(e)for(const s of["x","y","z"])ht(`#path-${s}`).value=e[s].toFixed(2);if(!n)return;const t=mt.size>1?Jo():qn(n),i=ha(n);for(const s of["x","y","z"])ht(`#edit-${s}`).value=t[s].toFixed(2);const r=document.querySelector("#edit-height");r&&(r.value=(t.y*1e3/Ke).toFixed(1));for(const s of["pitch","yaw","roll"])ht(`#edit-${s}`).value=Qt.radToDeg(i[s]).toFixed(2)}function tt(){for(const l of Array.from(document.querySelectorAll('#edit-panel [data-mode-disabled="true"]')))l.disabled=!1,delete l.dataset.modeDisabled;p0(),FT();const n=An();ht("#canvas-width").value=String(gt.extent*2/Ke),ht("#canvas-height").value=String(gt.extentZ*2/Ke),ht("#canvas-samples").value=String(gt.size),wn||(document.querySelector("#terrain-editor").toggleAttribute("hidden",!Gt),document.querySelector("#unit-editor").toggleAttribute("hidden",Gt)),document.querySelector("#tab-terrain").setAttribute("aria-pressed",String(Gt)),document.querySelector("#tab-units").setAttribute("aria-pressed",String(!Gt)),typeof fn<"u"&&document.querySelector("#tab-prefabs")?.setAttribute("aria-pressed",String(fn)),document.querySelector("#terrain-undo").disabled=!ve?.canUndo||!!Tt,document.querySelector("#terrain-redo").disabled=!ve?.canRedo||!!Tt;const e=je??fe;ht("#turn-summary-edit").value=Kn[Le].summary,ht("#turn-summary-edit").disabled=!!je,ht("#edit-lost").max=String(ti());for(const l of["#turn-add","#turn-copy","#turn-delete"])document.querySelector(l).disabled=!!je||Ee.dragging||l==="#turn-delete"&&ti()===1;n.undo.disabled=!ve?.canUndo||!!je,n.redo.disabled=!ve?.canRedo||!!je,n.remove.disabled=fe===null||!!je,document.querySelector("#edit-copy").disabled=!mt.size||!!je,document.querySelector("#selection-count").textContent=`已选 ${mt.size} / 可移动 ${Di().length}`,document.querySelector("#tool-box").setAttribute("aria-pressed",String(gn)),document.querySelector("#edit-add").setAttribute("aria-pressed",String(!!je)),document.querySelector("#unit-picker").replaceChildren(...ot.map(l=>{const c=document.createElement("button"),d=qi().groups.find(u=>u.id===l.groupId);return c.textContent=d?`${l.label} · ${d.name}`:l.label,d&&(c.style.borderColor=d.color),c.setAttribute("aria-pressed",String(mt.has(l.id))),c.disabled=!!je,c.addEventListener("click",u=>cd(l,u.shiftKey||u.ctrlKey||u.metaKey||ht("#select-additive").checked)),c}));const i=["urban","erase-urban"].includes(document.querySelector("#terrain-brush").value);for(const l of["#urban-density","#urban-angle","#urban-seed"])ht(l).closest("label").toggleAttribute("hidden",!i);ht("#terrain-strength").closest("label").toggleAttribute("hidden",i),ht("#terrain-flat").closest("label").toggleAttribute("hidden",i),[n.label,n.kind,n.faction,n.icon,n.tgt,n.escort,n.hidden,n.intangible,n.lost].filter(Boolean).forEach(l=>{l.disabled=!e}),n.label.value=e?.label??"",n.kind.value=e?.kind??"",n.faction.value=e?.faction??"enemy",n.icon.value=e?.icon??"air-outline",n.tgt.checked=e?.tgt===!0,n.hidden&&(n.hidden.checked=e?.hidden===!0),n.intangible&&(n.intangible.checked=e?.intangible===!0),n.escort.checked=e?.escort===!0&&e.faction!=="enemy",n.lost.value=e?.destroyedAtTurn===void 0?"":String(e.destroyedAtTurn+1),document.querySelector("#placement-actions").toggleAttribute("hidden",!je),document.querySelector("#edit-state").textContent=je?ir?"点选中":"待落位":mt.size>1?`编队移动 / 主单位 ${fe?.label??"-"} / 回合 ${Le+1}`:fe?`回合 ${Le+1} / ${fe.attitudes?.[Le]?"手动姿态":"自动姿态"}`:"未选择",document.querySelector("#edit-place").disabled=ir,document.querySelector("#edit-auto").disabled=!fe||!!je||mt.size>1;const r=!je&&mt.size>1?Jo():e?qn(e):new b,s=e?ha(e):{yaw:0,pitch:0,roll:0};for(const l of["x","y","z"]){const c=ht(`#edit-${l}`);c.disabled=!e||!!je&&l!=="y",c.value=e?r[l].toFixed(2):""}for(const l of["pitch","yaw","roll"]){const c=ht(`#edit-${l}`);c.disabled=!e||!je&&mt.size>1||l!=="yaw"&&!zn(e),c.value=e?Qt.radToDeg(s[l]).toFixed(2):""}const o=document.querySelector("#edit-height");o&&(o.value=e?(r.y*1e3/Ke).toFixed(1):"",o.disabled=!e),document.querySelector("#tool-move").setAttribute("aria-pressed",String(kr==="translate")),document.querySelector("#tool-rotate").setAttribute("aria-pressed",String(kr==="rotate"));const a=!!St()?.mapEditRef;document.querySelector("#tab-units").toggleAttribute("hidden",a),a&&!wn&&document.querySelector("#unit-editor").setAttribute("hidden","");for(const l of["#turn-add","#turn-copy","#turn-delete"])Rn()&&(document.querySelector(l).disabled=!0);Rn()&&(ht("#apply-later").disabled=!0),NT(),$i(),Wo(),wn?.sync({editing:De,editable:Ri(),mapOnly:a,active:Hr,playerView:Dt,viewerCanUndo:!!ve?.canUndo,viewerCanRedo:!!ve?.canRedo}),i0?.sync(),bt?.sync(),typeof an<"u"&&an?.sync(),AT(),f0()}function p0(){!Mi()&&!Ri()&&(De=!1),st()||(Gt=Yt=Hn=Wt=!1,it=null),wn||document.querySelector("#edit-panel").toggleAttribute("hidden",!De),document.querySelector("#mode-readout").textContent=De?Rn()?"草稿编辑":"EDIT":"VIEW"}const IT=new Set(["edit-x","edit-y","edit-z","edit-height","edit-pitch","edit-yaw","edit-roll","edit-auto","edit-lost","turn-summary-edit","select-clear","select-additive","tool-box","tool-move","tool-rotate","move-snap","rotate-snap","trail-display","trail-turns","edit-undo","edit-redo","tab-units"]);function wm(n){return IT.has(n.id)||!!n.closest("#unit-picker")}function m0(n){return!!n.closest(".sidebar-header,.sidebar-nav,.range-panel,.trail-panel,.archive-panel,.selection-panel,.sidebar-bound-list,#unit-picker,#route-list,#track-list")||["route-select","route-group-select","route-select-bound","route-visible","route-labels","select-clear","select-additive"].includes(n.id)}function LT(n,e){const t=An().escort;t.disabled=!n||!e||n.faction==="enemy",t.checked=n?.escort===!0&&n.faction!=="enemy"}function NT(){const n=Mi()&&De,e=st()&&De;for(const r of Array.from(document.querySelectorAll("#unit-editor input, #unit-editor button, #unit-editor select, #unit-editor textarea, #terrain-editor input, #terrain-editor button, #terrain-editor select, #route-section input, #route-section button, #route-section select, #turn-summary-edit")))m0(r)||(!e&&(!n||!wm(r))?r.disabled=!0:e&&r.dataset.modeDisabled==="true"&&(r.disabled=!1),r.dataset.modeDisabled=String(!e&&(!n||!wm(r))));const t=je??fe;for(const r of["edit-x","edit-y","edit-z","edit-height","edit-pitch","edit-yaw","edit-roll","edit-auto"]){const s=document.getElementById(r);(!n||t&&!je&&!Tl(t))&&(s.disabled=!0)}const i=An().lost;LT(t,e),i.disabled=!t||!n||!e&&!ff(t),i.min=String(e?1:Le+1),i.max=String(e?ti():Le+1),i.step="1"}for(const n of["click","change","input","keydown","pointerdown"])document.querySelector("#edit-panel").addEventListener(n,e=>{const t=e.target instanceof Element?e.target.closest("button, input, select, textarea"):null;!t||m0(t)||t.closest("#workflow-panel")||t.closest('[data-sidebar-panel="groups"],[data-sidebar-panel="markers"],[data-sidebar-panel="drawing"],[data-sidebar-panel="equipment"],[data-sidebar-panel="links"]')||st()&&De||(e.preventDefault(),e.stopImmediatePropagation())},!0);function us(){er=null,je=null,ir=!1,ft.domElement.style.cursor="",Ut.enabled=!0,tt()}function Dn(n){if(n&&!Mi()&&!Ri()){p0(),$i();return}Kt()&&(bt?.cancel(),typeof an<"u"&&an?.cancel(),mn&&Xn(),De=n,wn||document.querySelector("#edit-panel").toggleAttribute("hidden",!n),document.querySelector("#mode-readout").textContent=n?"EDIT":"VIEW",ft.domElement.style.cursor=n&&Gt?"crosshair":"",n||(Yt=Wt=!1,it=null,_d(),Dl(),Gt=!1,Wi.visible=!1,Ui(!0),gn=!1,us(),typeof fn<"u"&&fn&&ia(!1)),at(),tt())}function ji(n,e=!1,t="metadata"){if(!Mi()||!De||t==="metadata"&&!st()||fe&&!je&&(t==="pose"&&!Tl(fe)||t==="loss"&&!ff(fe)))return;if(je){n(je),ml(je,je.positions.map((s,o)=>o)),tt();return}if(!fe)return;const i=fe.icon,r=fe.intangible;xn(t==="metadata"?"author":"draft")&&(n(fe),io(fe)&&(t==="pose"||fe.icon!==i||fe.intangible!==r)&&ml(fe),e&&vT(fe),at(),tt())}function js(n){!Mi()||!De||(gn=!1,kr=n,tt())}Ee.addEventListener("dragging-changed",n=>{if(Ut.enabled=!n.value,n.value){$i();return}if(typeof ui<"u"&&ui!==null){WT(),tt();return}_n?.units.some(e=>ot.find(t=>t.id===e.id)?.routeBinding)&&(Zi(),at()),Kt("Transform units / path"),tt()});let _n=null,gl=null,ta=!1,Ti=null;function UT(n,e,t){if(!ei)return;const i=r=>({x:r.x+t.x/Ke,y:r.y+t.y/Ke,z:r.z+t.z/Ke});if(e.kind==="marker"){const r=n.markers.find(o=>o.id===e.id),s=ei.markers.find(o=>o.id===e.id);if(r&&s)if(zi(r)&&e.pointIndex!==void 0){const o=Rs(r);o[e.pointIndex]=i(o[e.pointIndex]);const a=Cc(r,o);Object.assign(s,a)}else s.position=i(r.position),r.controlPoints&&(s.controlPoints=r.controlPoints.map(i))}else{const r=n.drawings.find(o=>o.id===e.id),s=ei.drawings.find(o=>o.id===e.id);r&&s&&(s.points=r.points.map((o,a)=>e.pointIndex===void 0||a===e.pointIndex?i(o):{...o}))}}const na=new Map;let ur=[];const Os=new b,g0=new rn;Ee.addEventListener("mouseDown",()=>{if(typeof fn<"u"&&fn&&typeof dt<"u"&&dt){const n=dt.selectedIndex();if(n===null){Ee.detach();return}if(ra=dt.beginTransform(n),ui=ra?n:null,ui===null)return;ta=!1;return}if(!Mi()&&!(Ri()&&bt?.selection())||!De||!st()&&it){Ee.detach();return}ta=!1,gl=Ii??ve?.read()??null,_n=fd(),Ti=bt?.selection()??null,Os.copy(It.position),g0.copy(It.quaternion),ur=so(),na.clear(),Di().forEach(n=>na.set(n.id,n.positions.map(e=>e.clone())))});Ee.addEventListener("mouseUp",()=>{_n&&!Qo(Ti?_n.sceneTools:_n,Ti?ei:fd())&&(Ii=gl),_n=null,gl=null,ta=!1,Ti=null});Ee.addEventListener("objectChange",()=>{if(typeof ui<"u"&&ui!==null){GT();return}if(!Mi()&&!(Ri()&&Ti)||!De||!_n||ta)return;if(Ti&&_n.sceneTools){if(!Ri())return;try{const e=_n.sceneTools.markers.find(i=>i.id===Ti.id),t=ei?.markers.find(i=>i.id===Ti.id);if(Ti.kind==="marker"&&Ti.pointIndex===void 0&&e&&t&&zi(e)&&Go!=="translate"){const i=new En().setFromQuaternion(It.quaternion,"YXZ"),r=Go==="rotate"?{pitch:i.x,yaw:i.y,roll:i.z}:e.attitude??{pitch:0,yaw:0,roll:0},s=Ee.axis??"XYZ",o=s.includes("X")?"x":s.includes("Y")?"y":"z",a=(e.sizeKm??.12)*(Go==="scale"?Math.abs(It.scale[o]):1);Object.assign(t,kg(e,e.position,r,a))}else UT(_n.sceneTools,Ti,It.position.clone().sub(Os))}catch(e){on(e instanceof Error?e.message:String(e));return}bt?.syncPosition?bt.syncPosition():bt?.sync(),typeof an<"u"&&an?.update();return}const n=Pl();if(n){if(!st())return;const e=it?.kind==="track"?ot.find(t=>t.id===it.unitId):void 0;n.x=It.position.x,n.y=e?.intangible?It.position.y:Math.max(0,It.position.y),n.z=It.position.z,e&&!zn(e)&&!e.intangible&&(n.y=Rt(n.x,n.z)),it?.kind==="waypoint"&&Zi(),at(),Mm();return}if(fe){if(kr==="translate"){const e=It.position.clone().sub(Os),t=Di().filter(i=>zn(i)&&!i.intangible).map(i=>na.get(i.id)).filter(Boolean);t.length&&(e.y=Math.max(e.y,...t.flatMap(i=>ur.map(r=>{const s=i[r];return Math.max(0,Rt(s.x+e.x,s.z+e.z))-s.y})))),Di().forEach(i=>{const r=na.get(i.id);if(r){n0(i,ur),ur.forEach(o=>i.positions[o].copy(r[o]).add(e));const s=_n?.units.find(o=>o.id===i.id)?.trackPoints;st()&&s&&(i.trackPoints=s.map(o=>ur.includes(o.segment)&&ur.includes(o.segment+1)?{...o,x:o.x+e.x,y:o.y+e.y,z:o.z+e.z}:{...o})),ml(i,ur),ed(i)}})}else if(mt.size>1)kT();else{const e=new En().setFromQuaternion(It.quaternion,"YXZ");u0(fe,{yaw:e.y,pitch:zn(fe)?e.x:0,roll:zn(fe)?e.z:0})}kr!=="translate"&&(mt.size>1?Di():[fe]).forEach(e=>ed(e)),Th(),Mm()}});function kT(){const n=g0.clone().invert().premultiply(It.quaternion),e=new En().setFromQuaternion(n,"YXZ"),t=new rn().setFromEuler(new En(0,e.y,0,"YXZ")),i=(r,s)=>_n?.units.find(o=>o.id===r.id)?.attitudes?.[s]??ha(r);Di().forEach(r=>{const s=na.get(r.id);if(!s)return;st()&&!Rn()&&(r.routeBinding=void 0);const o=zn(r),a=o?n:t;ur.forEach(c=>{r.positions[c].copy(s[c].clone().sub(Os).applyQuaternion(a).add(Os));const d=i(r,c),u=new En(0,0,0,"YXZ").setFromQuaternion(new rn().setFromEuler(new En(d.pitch,d.yaw,d.roll,"YXZ")).premultiply(a),"YXZ");r.attitudes??=Array.from({length:ti()},()=>null),r.attitudes[c]={yaw:u.y,pitch:o?u.x:0,roll:o?u.z:0}});const l=_n?.units.find(c=>c.id===r.id)?.trackPoints;st()&&l&&(r.trackPoints=l.map(c=>{if(!(ur.includes(c.segment)&&ur.includes(c.segment+1)))return{...c};const d=new b(c.x,c.y,c.z).sub(Os).applyQuaternion(a).add(Os);return{...c,x:d.x,y:d.y,z:d.z}})),ml(r,ur),ed(r)})}function Zs(n){mr.x=n.clientX/innerWidth*2-1,mr.y=-(n.clientY/innerHeight)*2+1,pr.setFromCamera(mr,wt);let e=0;const t=new b;for(let i=2;i<wt.far;i+=2){const r=pr.ray.at(i,t);if(r.y<=Rt(r.x,r.z)){let s=e,o=i;for(let l=0;l<18;l++){const c=(s+o)/2,d=pr.ray.at(c,t);d.y>Rt(d.x,d.z)?s=c:o=c}const a=pr.ray.at(o,new b);return a.y=Rt(a.x,a.z),a}e=i}return null}let gn=!1,bi=null;const Ks=document.createElement("div");Ks.className="selection-box";Ks.hidden=!0;document.querySelector("#app").appendChild(Ks);function Ui(n=!1,e){if(!bi)return;const t=bi;if(bi=null,Ks.hidden=!0,Ut.enabled=!ir,ft.domElement.hasPointerCapture(t.pointerId)&&ft.domElement.releasePointerCapture(t.pointerId),n||!e)return;const i=Math.min(t.x,e.clientX),r=Math.max(t.x,e.clientX),s=Math.min(t.y,e.clientY),o=Math.max(t.y,e.clientY);Vr.updateMatrixWorld(!0),wt.updateMatrixWorld(!0);const a=ot.filter(l=>{if(ro(l,Le)==="wreck")return!1;const d=Ni.get(l.id).userData.parts.icon.getWorldPosition(new b).project(wt),u=(d.x+1)*innerWidth/2,h=(1-d.y)*innerHeight/2;return d.z>=-1&&d.z<=1&&u>=i&&u<=r&&h>=s&&h<=o});Qn(t.additive?[...new Set([...Yi(),...a])]:a),tt()}function td(n){mr.x=n.clientX/innerWidth*2-1,mr.y=-(n.clientY/innerHeight)*2+1,pr.setFromCamera(mr,wt);const e=pr.intersectObjects(cn.children.filter(t=>t.userData.editorTools),!0).filter(t=>nd(t.object)).filter(t=>{for(let i=t.object;i;i=i.parent)if(i.userData.editorTool)return!0;return!1});return e.find(t=>t.object.userData.editorTool?.pointIndex!==void 0)??e[0]}ft.domElement.addEventListener("pointerdown",n=>{if(typeof fn<"u"&&fn||n.button!==0||!Hr||n.altKey||je||Gt||Ee.dragging||Ee.axis!==null||Tt||mn||bt?.isPicking())return;if(an?.active()){n.preventDefault(),n.stopImmediatePropagation();const t=xd(n)[0];for(let r=t?.object??null;r;r=r.parent){const s=r.userData.unit;if(s){an.pick("unit",s.id);return}}const i=td(n);for(let r=i?.object??null;r;r=r.parent)if(r.userData.editorTool?.kind==="marker"){bt?.selectObject?.(i.object);return}return}if(!De||gn||Yt||Wt||Hn)return;const e=td(n);e&&bt?.selectObject?.(e.object)&&(n.preventDefault(),n.stopImmediatePropagation())},!0);ft.domElement.addEventListener("dblclick",n=>{n.button!==0||!Hr||jt()||mn||Yt||Wt||Hn||Gt||gn||Ee.axis!==null||xd(n).length||typeof td<"u"&&td(n)||pr.intersectObject(cr,!0).some(t=>t.object.userData.pathPoint)||Qn([])});ft.domElement.addEventListener("pointerdown",n=>{if(Dt||bt?.isPicking()||mn||!De||Gt||Yt||Hn||it||je||n.button!==0||!(gn||n.shiftKey)||typeof fn<"u"&&fn)return;n.stopImmediatePropagation(),n.preventDefault();const e=xd(n)[0]?.object.userData.unit;if(e&&!gn){cd(e,!0);return}Ut.enabled=!1,Ee.axis=null,bi={x:n.clientX,y:n.clientY,additive:n.shiftKey||n.ctrlKey||n.metaKey||ht("#select-additive").checked,pointerId:n.pointerId},Ks.hidden=!1,Ks.style.cssText=`left:${n.clientX}px;top:${n.clientY}px;width:0;height:0`,ft.domElement.setPointerCapture(n.pointerId)},!0);ft.domElement.addEventListener("pointermove",n=>{bi&&(n.stopImmediatePropagation(),Ks.style.cssText=`left:${Math.min(bi.x,n.clientX)}px;top:${Math.min(bi.y,n.clientY)}px;width:${Math.abs(n.clientX-bi.x)}px;height:${Math.abs(n.clientY-bi.y)}px`)},!0);ft.domElement.addEventListener("pointerup",n=>{bi&&(n.stopImmediatePropagation(),Ui(!1,n))},!0);ft.domElement.addEventListener("pointercancel",()=>Ui(!0));ft.domElement.addEventListener("pointerdown",n=>{if(bt?.isPicking()||mn||n.button!==0||Gt||Yt||Wt||Hn||it)return;if(je&&ir){if(!st()||!De)return;const t=Zs(n);if(!t)return;if(er){n.stopImmediatePropagation(),PT(t);return}const i=je,{count:r,spacing:s}=pf(),o=Math.ceil(Math.sqrt(r)),a=[];if(!xn())return;for(let l=0;l<r;l++){const c=Rl(Al(i)),d=ds++;c.id=`unit-${d}`,c.label=r===1?i.label:`${i.label}-${String(l+1).padStart(2,"0")}`;const u=t.clone();u.x+=l%o*s,u.z+=Math.floor(l/o)*s;const h=Rt(u.x,u.z);u.y=c.intangible?qn(i).y:zn(c)?Math.max(qn(i).y,h+di):h,c.positions=Array.from({length:ti()},()=>u.clone()),ot.push(c),a.push(c),ca(c)}je=null,ir=!1,Ut.enabled=!0,ft.domElement.style.cursor="",ua(),Qn(a),js("translate");return}if(je||Ee.dragging||De&&Ee.axis!==null)return;const e=xd(n)[0]?.object.userData.unit;e&&cd(e,De&&(n.ctrlKey||n.metaKey||ht("#select-additive").checked))});document.querySelector("#edit-place").addEventListener("click",()=>{je&&(ir=!0,Ut.enabled=!1,ft.domElement.style.cursor="crosshair",tt())});document.querySelector("#edit-cancel").addEventListener("click",us);document.querySelector("#tool-move").addEventListener("click",()=>js("translate"));document.querySelector("#tool-rotate").addEventListener("click",()=>js("rotate"));for(const n of["x","y","z"])ht(`#edit-${n}`).addEventListener("change",()=>{const e=Number(ht(`#edit-${n}`).value);if(Number.isFinite(e)){if(!je&&mt.size>1){const t=new b;t[n]=e-Jo()[n],hl(t)}else if(je)ji(t=>{qn(t,!0)[n]=n==="y"&&!t.intangible?Math.max(0,e):e});else if(fe){const t=new b;t[n]=e-qn(fe)[n],hl(t)}}});document.querySelector("#edit-height")?.addEventListener("change",()=>{const n=ht("#edit-height"),e=Number(n.value);if(!n.value.trim()||!Number.isFinite(e)){tt();return}const t=je?qn(je).y:fe?mt.size>1?Jo().y:qn(fe).y:void 0,i=(je?[je]:Di()).some(s=>io(s)&&(je?s.positions:so().map(o=>s.positions[o])).some(o=>o.y!==Rt(o.x,o.z)));if(t!==void 0&&n.value===(t*1e3/Ke).toFixed(1)&&!i)return;const r=e*Ke/1e3;if(je)ji(s=>{qn(s,!0).y=s.intangible?r:Math.max(0,r)});else if(fe){const s=new b(0,r-(mt.size>1?Jo().y:qn(fe).y),0);hl(s)}});for(const n of["pitch","yaw","roll"])ht(`#edit-${n}`).addEventListener("change",()=>{const e=Number(ht(`#edit-${n}`).value);Number.isFinite(e)&&ji(t=>{const i={...ha(t),[n]:Qt.degToRad(e)};je?t.attitudes=Array.from({length:ti()},()=>({...i})):u0(t,i)},!1,"pose")});document.querySelector("#edit-auto").addEventListener("click",()=>ji(n=>{n.attitudes&&so().forEach(e=>{n.attitudes[e]=null})},!1,"pose"));document.querySelector("#turn-add").addEventListener("click",()=>h0(!1));document.querySelector("#turn-copy").addEventListener("click",()=>h0(!0));document.querySelector("#turn-delete").addEventListener("click",TT);ht("#turn-summary-edit").addEventListener("change",()=>{if(!Mi()||!De)return;const n=ht("#turn-summary-edit").value.trim();n===Kn[Le].summary||je||o0({type:"set-turn-summary",sessionId:ve?.read().editor.sessionId??"session-working",turn:Le,summary:n||"UNTITLED TURN"})});ht("#move-snap").addEventListener("change",()=>Ee.setTranslationSnap(Number(ht("#move-snap").value)>0?Number(ht("#move-snap").value):null));ht("#rotate-snap").addEventListener("change",()=>Ee.setRotationSnap(Number(ht("#rotate-snap").value)>0?Qt.degToRad(Number(ht("#rotate-snap").value)):null));document.querySelector("#edit-copy").addEventListener("click",a0);document.querySelector("#select-clear").addEventListener("click",()=>Qn([]));document.querySelector("#tool-box").addEventListener("click",()=>{gn=!gn,tt()});document.querySelector("#edit-add").addEventListener("click",_T);document.querySelector("#edit-delete").addEventListener("click",xT);document.querySelector("#edit-undo").addEventListener("click",pd);document.querySelector("#edit-redo").addEventListener("click",md);An().label.addEventListener("change",()=>{if(je){ji(n=>{n.label=An().label.value||n.id});return}fe&&o0({type:"rename-unit",sessionId:ve?.read().editor.sessionId??"session-working",unitId:fe.id,label:An().label.value||fe.id})});An().kind.addEventListener("change",()=>ji(n=>{n.kind=An().kind.value||"UNKNOWN"}));An().faction.addEventListener("change",()=>ji(n=>{n.faction=An().faction.value,n.faction==="enemy"&&delete n.escort},!0));An().icon.addEventListener("change",()=>ji(n=>{n.icon=An().icon.value},!0));An().tgt.addEventListener("change",()=>ji(n=>{n.tgt=An().tgt.checked}));An().escort.addEventListener("change",()=>{const n=je??fe;if(!n||n.faction==="enemy"||!st()||!De){tt();return}ji(e=>{e.escort=An().escort.checked})});An().hidden?.addEventListener("change",()=>ji(n=>{n.hidden=An().hidden.checked}));An().intangible?.addEventListener("change",()=>ji(n=>{if(n.intangible=An().intangible.checked,!n.intangible){const e=je===n?n.positions.map((t,i)=>i):so();e.forEach(t=>{const i=n.positions[t];i.y=zn(n)?Math.max(i.y,Rt(i.x,i.z),0):Rt(i.x,i.z)}),n.trackPoints?.forEach(t=>{e.includes(t.segment)&&e.includes(t.segment+1)&&(t.y=zn(n)?Math.max(t.y,Rt(t.x,t.z),0):Rt(t.x,t.z))})}}));An().lost.addEventListener("change",()=>{if(!Mi()||!De||fe&&!ff(fe))return;const n=An().lost.value.trim();if(Rn()&&n!==""&&Number(n)!==Le+1){on("损失回合仅可留空或填写当前草稿回合"),tt();return}ji(e=>{const t=Number(n),i=e.destroyedAtTurn;e.destroyedAtTurn=n===""||Number.isNaN(t)?void 0:Math.max(0,Math.min(t-1,Li())),Rn()&&i!==e.destroyedAtTurn&&(Kn[Le].events=Kn[Le].events.filter(r=>r.kind!=="destroy"||r.target!==e.id),e.destroyedAtTurn===Le&&Kn[Le].events.push({kind:"destroy",target:e.id})),Zi()},!0,"loss")});document.querySelector("#prev-turn").addEventListener("click",()=>Lo(Le-1));document.querySelector("#next-turn").addEventListener("click",()=>Lo(Le+1));addEventListener("keydown",n=>{const e=n.key.toLowerCase();if(typeof an<"u"&&an?.active()&&n.key==="Escape"){an.cancel(),tt(),n.preventDefault();return}if(bt?.isPicking()){n.key==="Escape"&&(bt.cancel(),at(),n.preventDefault());return}if(mn&&n.key==="Escape"){Xn(),at(),n.preventDefault();return}if(!(mn&&["e","t","b","w","q","d","a","pageup","pagedown"].includes(e))){if(n.key==="Escape"&&Ee.dragging&&typeof ui<"u"&&ui!==null){Ee.reset(),XT(),n.preventDefault();return}if(n.key==="Escape"&&Ee.dragging&&Ti){Ee.reset(),_n&&(ei=_n.sceneTools?structuredClone(_n.sceneTools):void 0),_n=null,gl=null,ta=!0,Ti=null,bt?.sync(),n.preventDefault();return}if(n.key==="Escape"&&Ee.dragging&&it){if(Ee.reset(),_n){const t=_n;Mn.splice(0,Mn.length,...t.routes.map(i=>({...i,waypoints:i.waypoints.map(r=>({...r}))}))),On=t.activeRouteId,ot.forEach(i=>{const r=t.units.find(s=>s.id===i.id);r&&(i.positions=r.positions.map(s=>new b(s.x,s.y,s.z)),i.trackPoints=r.trackPoints?.map(s=>({...s})))}),_n=null,ta=!0,at(),tt()}n.preventDefault();return}if(n.key==="Escape"&&(Yt||Wt||it)){Yt=Wt=!1,it=null,at(),tt();return}if(n.key==="Escape"&&Tt){Dl(!0);return}if(n.key==="Escape"&&je){us();return}if(typeof fn<"u"&&fn&&typeof dt<"u"&&dt&&st()){if(n.key==="Escape"&&dt.armedPrefab()){dt.disarm(),ft.domElement.style.cursor="",Gs(),n.preventDefault();return}const t=n.target?.matches("input, select, textarea, [contenteditable]");if((n.key==="Delete"||n.key==="Backspace")&&!t&&dt.selectedIndex()!==null){n.preventDefault(),M0();return}}if(!n.target?.matches("input, select, textarea, [contenteditable]")&&document.querySelector("#manager-panel").hidden&&!(typeof Dt<"u"&&Dt&&["t","b","w","q","d","a","pageup","pagedown"].includes(e))){if(e==="t"&&De){wn?wn.select(Gt?"units":"terrain"):tr(!Gt);return}if(!((Gt||it||Yt||Wt)&&["b","w","q","d","a","pageup","pagedown"].includes(e))){if(n.key==="Escape"){bi?Ui(!0):Ee.dragging?Ee.reset():(gn=!1,Qn([]));return}if(De&&e==="b"&&(gn=!gn,tt()),De&&(n.ctrlKey||n.metaKey)&&e==="d"){n.preventDefault(),a0();return}if(De&&(n.ctrlKey||n.metaKey)&&e==="a"){n.preventDefault(),je||Qn(ot.filter(t=>ro(t,Le)==="active"));return}if(De&&e==="w"&&js("translate"),De&&e==="q"&&js("rotate"),(n.ctrlKey||n.metaKey)&&e==="z"){n.preventDefault(),pd();return}if((n.ctrlKey||n.metaKey)&&e==="y"){n.preventDefault(),md();return}if(n.key==="ArrowLeft"&&Lo(Le-1),n.key==="ArrowRight"&&Lo(Le+1),n.key==="Home"&&Lo(0),n.key==="End"&&Lo(Jg()),e==="r"&&gf(),e==="e"&&Dn(!De),n.key==="PageUp"&&De&&fe&&(n.preventDefault(),hl(new b(0,10,0))),n.key==="PageDown"&&De&&fe&&(n.preventDefault(),hl(new b(0,-10,0))),e==="f"&&fe){const t=Gr(Le).units.find(i=>i.unit===fe);t&&(Ut.target.set(t.position.x,t.position.y*.35,t.position.z),Ut.update())}}}}});function Pl(){if(!st()||!it)return null;if(it.kind==="waypoint")return Mn.flatMap(e=>e.waypoints).find(e=>e.id===it.id)??null;const n=it;return ot.find(e=>e.id===n.unitId)?.trackPoints?.find(e=>e.id===n.id)??null}function Zi(){if(Rn()||!st())return;const n=new Set;for(const e of ot){const t=e.routeBinding,i=Mn.find(a=>a.id===t?.routeId);if(!t||!i?.waypoints.length)continue;const r=t.offset??{x:0,y:0,z:0},s=i.waypoints.map(a=>({x:a.x+r.x,y:a.y+r.y,z:a.z+r.z})),o=H0(e.positions,s,t.startTurn,e.destroyedAtTurn);e.positions=o.map((a,l)=>new b(a.x,l<=t.startTurn||e.intangible?a.y:zn(e)?Math.max(a.y,Rt(a.x,a.z)+di):Rt(a.x,a.z),a.z)),n.add(e.id)}for(let e=1;e<ti();e++){const t=new Map;ot.filter(s=>n.has(s.id)&&s.routeBinding?.formationId&&e>s.routeBinding.startTurn&&(s.destroyedAtTurn===void 0||e<=s.destroyedAtTurn)).forEach(s=>{const o=s.routeBinding.formationId;t.set(o,[...t.get(o)??[],s])});for(const s of t.values()){const o=s.filter(l=>zn(l)&&!l.intangible);let a=0;o.forEach(l=>{const c=l.routeBinding,d=Mn.find(m=>m.id===c.routeId),u=d.waypoints[Math.min(e-c.startTurn-1,d.waypoints.length-1)],h=l.positions[e],f=u.y+(c.offset?.y??0);h.y=f,a=Math.max(a,Rt(h.x,h.z)+di-f)}),o.forEach(l=>{l.positions[e].y+=a})}const i=ot.filter(s=>!s.intangible).map(s=>({id:s.id,point:s.positions[e],fixed:!n.has(s.id)||!!s.routeBinding?.formationId||e<=(s.routeBinding?.startTurn??Li())||s.destroyedAtTurn!==void 0&&e>s.destroyedAtTurn})),r=V0(i,8);for(const s of ot){if(!n.has(s.id))continue;const o=s.routeBinding;if(!(e<=o.startTurn)){if(s.destroyedAtTurn!==void 0&&e>s.destroyedAtTurn)s.positions[e].copy(s.positions[s.destroyedAtTurn]);else if(!o.formationId){const a=r.get(s.id)??s.positions[e];s.positions[e].set(a.x,s.intangible?a.y:zn(s)?Math.max(a.y,Rt(a.x,a.z)+di):Rt(a.x,a.z),a.z)}}}}}function Oa(n,e=!1){return new b(n.x,e?Rt(n.x,n.z)+di:n.y,n.z)}function _d(){if(ea(cr),cr=new In,cn.add(cr),Zc.replaceChildren(),wh.length=0,typeof Dt<"u"&&Dt)return;const n=(i,r,s,o=!1)=>{const a=it?.id===r.id&&it.kind===r.kind&&(r.kind!=="waypoint"||it.kind==="waypoint"&&(!r.routeId||it.routeId===r.routeId||On===r.routeId)),l=new we(new as(a?4:2.8,10,8),new bn({color:a?16777215:s,depthTest:!1}));l.position.copy(Oa(i,o)),l.userData.pathPoint=r,l.renderOrder=10,cr.add(l)},e=document.querySelector("#route-visible")?.checked??!0,t=document.querySelector("#route-labels")?.checked??!0;if(e)for(const i of Mn){const r=ot.filter(c=>c.routeBinding?.routeId===i.id),s=[...new Set(r.map(c=>qi().groups.find(d=>d.id===c.groupId)?.name).filter(Boolean))],o=r.filter(c=>!c.groupId||!qi().groups.some(d=>d.id===c.groupId)).map(c=>c.label),a=[...s.map(c=>`编组:${c}`),...o].join(" / ")||"未绑定",l=i.id===On?16767050:7649492;i.waypoints.length>1&&cr.add($a(i.waypoints.map(c=>Oa(c)),l,1,i.id===On?.7:.4)),i.waypoints.forEach((c,d)=>{n(c,{kind:"waypoint",id:c.id,routeId:i.id},l);const u=new b(c.x,Rt(c.x,c.z)+.35,c.z);if(cr.add($a([u,Oa(c)],l,1,.5)),cr.add($a([new b(c.x-4,u.y,c.z),new b(c.x+4,u.y,c.z),u.clone(),new b(c.x,u.y,c.z-4),new b(c.x,u.y,c.z+4)],l,1,.7)),!t)return;const h=document.createElement("button");h.className="waypoint-label",h.textContent=`${i.name} · ${d+1} · ${a}`,h.title=`${i.name} / 航路点 ${d+1}
绑定单位：${r.map(f=>f.label).join("、")||"无"}
${a}`,h.addEventListener("click",()=>{Ee.dragging||Tt||bt?.isPicking()||(On=i.id,Yt=Wt=!1,it=st()&&De?{kind:"waypoint",id:c.id,routeId:i.id}:null,wn?.select("routes"),at(),tt())}),Zc.appendChild(h),wh.push({dom:h,position:Oa(c).add(new b(0,5,0))})})}if(!(!st()||!De||Gt)&&Hn&&fe&&mt.size===1&&ro(fe,Le)!=="wreck"&&document.querySelector("#trail-display").value!=="none"){const i=!zn(fe)&&!fe.intangible,r=Math.min(Li(),fe.destroyedAtTurn??Li());fe.trackPoints?.filter(o=>o.segment<r).forEach(o=>n(o,{kind:"track",unitId:fe.id,id:o.id},qa[fe.faction],i));const s=df(fe,Le);for(const o of uf(fe,s,r)){const{segment:a,points:l}=o;i&&l.forEach(d=>{d.y=Rt(d.x,d.z)+di});const c=e0(l,qa[fe.faction]);c.userData.editSegment=a,c.userData.trackPart=o,c.traverse(d=>{d.userData.editSegment=a,d instanceof we&&(d.material.dispose(),d.material=new bn({color:qa[fe.faction],transparent:!0,opacity:.65,side:pn,depthTest:!1}))}),cr.add(c)}}}function FT(){const n=Ko(),e=document.querySelector("#route-select");e.replaceChildren(...Mn.map(f=>{const m=document.createElement("option");return m.value=f.id,m.textContent=f.name,m})),e.value=On,ht("#route-name").value=jc()?.name??"";const t=(f,m)=>{const v=document.createElement("button");return v.textContent=f,v.setAttribute("aria-pressed",String(it?.id===m.id)),v.addEventListener("click",()=>{if(Ee.dragging||Tt||bt?.isPicking())return;Yt=Wt=!1,it=st()&&De?m:null;const g=m.kind==="waypoint"?Ko().find(p=>p.id===m.id):fe?.trackPoints?.find(p=>p.id===m.id);g&&!st()&&hf({x:g.x/Ke,y:g.y/Ke,z:g.z/Ke}),at(),tt()}),v};document.querySelector("#route-list").replaceChildren(...n.map((f,m)=>t(`WP ${m+1}`,{kind:"waypoint",id:f.id})));const i=fe&&mt.size===1?fe.trackPoints??[]:[];document.querySelector("#track-list").replaceChildren(...i.map((f,m)=>t(`P${m+1} / ${f.segment+1}-${f.segment+2}`,{kind:"track",unitId:fe.id,id:f.id})));const r=Pl(),s=it?.kind==="track"?ot.find(f=>f.id===it.unitId):void 0,o=!!s&&!zn(s)&&!s.intangible;for(const f of["x","y","z"]){const m=ht(`#path-${f}`);m.disabled=!r||o&&f==="y",m.value=r?r[f].toFixed(2):""}document.querySelector("#route-bind").disabled=!Di().length||!n.length,document.querySelector("#route-unbind").disabled=!Yi().some(f=>f.routeBinding),document.querySelector("#path-delete").disabled=!r;for(const f of["#route-up","#route-down"])document.querySelector(f).disabled=it?.kind!=="waypoint";document.querySelector("#route-pick").setAttribute("aria-pressed",String(Yt)),document.querySelector("#track-edit").setAttribute("aria-pressed",String(Hn)),document.querySelector("#track-add").setAttribute("aria-pressed",String(Wt));for(const f of["#track-add","#track-midpoint"])document.querySelector(f).disabled=!fe||mt.size!==1||ti()<2;it?.kind==="track"&&fe&&(ro(fe,Le)==="wreck"||document.querySelector("#trail-display").value==="none")&&(it=null),ht("#track-segment").max=String(Math.max(1,Li())),document.querySelector("#path-state").textContent=Yt?"航路点放置中":Wt?"控制点放置中":`${jc()?.name??"-"} / ${n.length} 个航路点 / ${Yi().map(f=>`${f.label}:${Mn.find(m=>m.id===f.routeBinding?.routeId)?.name??"未绑定"}${f.routeBinding?.formationId?"(编队)":""}`).join(" / ")} / ${i.length} 个航迹控制点`;const l=ot.filter(f=>f.routeBinding?.routeId===On),c=document.querySelector("#route-bindings");c&&c.replaceChildren(...l.map(f=>{const m=document.createElement("button"),v=qi().groups.find(g=>g.id===f.groupId);return m.textContent=`${f.label}${v?` · ${v.name}`:""} / 从第 ${f.routeBinding.startTurn+1} 回合`,m.addEventListener("click",()=>Qn([f])),m}));const d=document.querySelector("#route-group-select");if(d){const f=d.value;d.replaceChildren(...qi().groups.map(m=>new Option(`${m.name} (${ot.filter(v=>v.groupId===m.id).length})`,m.id))),qi().groups.some(m=>m.id===f)&&(d.value=f)}const u=document.querySelector("#route-select-bound");u&&(u.disabled=!l.length);const h=document.querySelector("#route-bind-group");h&&(h.disabled=!st()||!De||!n.length||!d?.value)}function v0(n,e){const t=[0,...(fe?.trackPoints??[]).filter(s=>s.segment===n).sort((s,o)=>s.t-o.t).map(s=>s.t),1],i=Qt.clamp(e,0,.999999)*(t.length-1),r=Math.floor(i);return Qt.lerp(t[r],t[r+1],i-r)}function _0(n,e,t=.5){if(!st()||!De||!fe||mt.size!==1||!xn())return;fe.trackPoints??=[];const i={id:`control-${Jc++}`,segment:n,t:Qt.clamp(t,.01,.99),x:e.x,y:e.y,z:e.z};fe.trackPoints.push(i),it={kind:"track",unitId:fe.id,id:i.id},Wt=!1,at(),tt()}ft.domElement.addEventListener("pointerdown",n=>{if(bt?.isPicking()||!st()||mn||!De||Gt||n.button!==0||n.altKey||je||typeof fn<"u"&&fn)return;if(Yt){n.stopImmediatePropagation(),n.preventDefault();const i=Zs(n);if(!i||!xn())return;Ko().push({id:`wp-${Kc++}`,x:i.x,y:Math.max(Number(ht("#route-height").value)||0,i.y+di),z:i.z}),Zi(),at(),tt();return}mr.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),pr.setFromCamera(mr,wt);const e=pr.intersectObjects(cr.children,!0),t=e.find(i=>i.object.userData.pathPoint);if(t&&Ee.axis===null){n.stopImmediatePropagation(),n.preventDefault(),it=t.object.userData.pathPoint,it?.kind==="waypoint"&&it.routeId&&(On=it.routeId),Wt=!1,wn?.select("routes"),at(),tt();return}if(Wt&&Ee.axis===null){n.stopImmediatePropagation(),n.preventDefault();const i=e.find(r=>r.object.userData.editSegment!==void 0);if(i){const r=i.object.userData.editSegment,s=uf(fe,df(fe,Le),Math.min(Li(),fe.destroyedAtTurn??Li())).find(c=>c.segment===r);if(!s)return;let o=0,a=1/0;for(let c=0;c<=300;c++){const d=s.curve.getPoint(Qt.lerp(s.start,s.end,c/300));!zn(fe)&&!fe.intangible&&(d.y=Rt(d.x,d.z)+di);const u=d.distanceToSquared(i.point);u<a&&(a=u,o=c/300)}const l=s.curve.getPoint(Qt.lerp(s.start,s.end,o));_0(r,l,v0(r,o))}}},!0);document.querySelector("#route-select").addEventListener("change",()=>{Ee.dragging||Tt||bt?.isPicking()||(On=document.querySelector("#route-select").value,it=null,Yt=Wt=!1,at(),tt())});ht("#route-name").addEventListener("change",()=>{Ee.dragging||xn()&&(jc().name=ht("#route-name").value.trim()||"UNTITLED ROUTE",at(),tt())});document.querySelector("#route-new").addEventListener("click",()=>{if(Ee.dragging||je||!xn())return;const n=dl++,e={id:`route-${n}`,name:`ROUTE ${n}`,waypoints:[]};Mn.push(e),On=e.id,it=null,Yt=Wt=!1,at(),tt()});document.querySelector("#route-remove").addEventListener("click",()=>{if(!(Ee.dragging||je)&&xn()){if(ot.filter(n=>n.routeBinding?.routeId===On).forEach(n=>{n.routeBinding=void 0}),Mn.splice(Mn.findIndex(n=>n.id===On),1),!Mn.length){const n=dl++;Mn.push({id:`route-${n}`,name:`ROUTE ${n}`,waypoints:[]})}On=Mn[0].id,it=null,Yt=Wt=!1,Zi(),at(),tt()}});document.querySelector("#route-pick").addEventListener("click",()=>{!st()||!De||je||Ee.dragging||(Yt=!Yt,Wt=!1,it=null,gn=!1,at(),tt())});function x0(n){if(!st()||!De||je||Ee.dragging||!Ko().length||!n.length)return;const e=G0(n.map(i=>qn(i))),t=n.length>1?`formation-${Yc++}`:void 0;xn()&&(n.forEach((i,r)=>{i.routeBinding={startTurn:Le,routeId:On,offset:t?e[r]:{x:0,y:0,z:0},formationId:t},i.trackPoints=(i.trackPoints??[]).filter(s=>s.segment<Le)}),Zi(),at(),tt())}document.querySelector("#route-bind").addEventListener("click",()=>x0(Di()));document.querySelector("#route-unbind").addEventListener("click",()=>{xn()&&(Yi().forEach(n=>{n.routeBinding=void 0}),Zi(),at(),tt())});for(const[n,e]of[["#route-up",-1],["#route-down",1]])document.querySelector(n).addEventListener("click",()=>{if(it?.kind!=="waypoint")return;const t=Ko(),i=t.findIndex(s=>s.id===it.id),r=i+e;r<0||r>=t.length||xn()&&([t[i],t[r]]=[t[r],t[i]],Zi(),at(),tt())});document.querySelector("#path-delete").addEventListener("click",()=>{if(it&&xn()){if(it.kind==="waypoint"){const n=Ko();n.splice(n.findIndex(e=>e.id===it.id),1),n.length||ot.filter(e=>e.routeBinding?.routeId===On).forEach(e=>{e.routeBinding=void 0})}else{const n=it,e=ot.find(t=>t.id===n.unitId);e.trackPoints=e.trackPoints?.filter(t=>t.id!==n.id)}it=null,Zi(),at(),tt()}});document.querySelector("#track-edit").addEventListener("click",()=>{!st()||!De||(Hn=!Hn,Wt=Yt=!1,it=null,gn=!1,at(),tt())});document.querySelector("#track-add").addEventListener("click",()=>{!st()||!De||(Hn=!0,Wt=!Wt,Yt=!1,it=null,gn=!1,at(),tt())});document.querySelector("#track-midpoint").addEventListener("click",()=>{if(!st()||!De||!fe||mt.size!==1||ti()<2)return;const n=Qt.clamp(Math.floor(Number(ht("#track-segment").value)||1)-1,0,Li()-1),e=Nm(fe.positions,fe.trackPoints??[],n,n+1).map(i=>new b(i.x,i.y,i.z)),t=new Yh(e).getPoint(.5);Hn=!0,_0(n,t,v0(n,.5))});ht("#track-segment").addEventListener("change",()=>{ht("#track-segment").value=String(Qt.clamp(Math.floor(Number(ht("#track-segment").value)||1),1,Math.max(1,Li())))});for(const n of["x","y","z"])ht(`#path-${n}`).addEventListener("change",()=>{const e=Pl(),t=Number(ht(`#path-${n}`).value);if(!e||!Number.isFinite(t))return;const i=it?.kind==="track"?it.unitId:void 0;if(!xn())return;const r=ot.find(s=>s.id===i);e[n]=n==="y"&&!r?.intangible?Math.max(0,t):t,r&&io(r)&&(e.y=Rt(e.x,e.z)),it?.kind==="waypoint"&&Zi(),at(),tt()});for(const n of["#trail-display","#trail-turns"])document.querySelector(n).addEventListener("change",()=>at());function y0(){const n=(e,t,i,r)=>{const s=Number(ht(e).value);return Number.isFinite(s)?Qt.clamp(s,t,i):r};return{radius:n("#terrain-radius",8,240,50),strength:n("#terrain-strength",.1,30,6),target:n("#terrain-flat",0,180,20),density:n("#urban-density",1,100,70)/100,mode:document.querySelector("#terrain-brush").value}}const Wi=new F_(new Bt,new Pi({color:7143340,depthTest:!1,transparent:!0,opacity:.9}));Wi.visible=!1;Vr.add(Wi);function b0(n){if(Wi.visible=!!n&&Gt&&De,!n)return;const{radius:e}=y0();let t=Wi.geometry.getAttribute("position");t||(t=new Lt(new Float32Array(240),3),t.setUsage(Fc),Wi.geometry.setAttribute("position",t));for(let i=0;i<80;i++){const r=i/80*Math.PI*2,s=n.x+Math.cos(r)*e,o=n.z+Math.sin(r)*e;t.setXYZ(i,s,Rt(s,o)+.6,o)}t.needsUpdate=!0,Wi.geometry.computeBoundingSphere()}function S0(n){if(!st()||!De||!Tt)return;const e=y0(),t=Tt.last,i=t?t.distanceTo(n):0;if(t&&i<gt.spacing*.4)return;const r=t?Math.ceil(i/Math.max(gt.spacing,e.radius/4)):1;for(let s=1;s<=r;s++){const o=t?t.clone().lerp(n,s/r):n,a=e.mode==="smooth"||e.mode==="flatten"?e.strength/30:e.strength;(e.mode==="urban"||e.mode==="erase-urban"?Ht.paint(o.x,o.z,e.radius,e.density,e.mode==="erase-urban",Um(Ht.styles,$s)):gt.brush(o.x,o.z,e.radius,a,e.mode,e.target))&&(Tt.changed=!0,nr=!0,e.mode==="urban"||e.mode==="erase-urban"?rT(o,e.radius):oT(o,e.radius))}Tt.last=n.clone()}function Dl(n=!1){if(!Tt)return;const e=Tt;!n&&e.height&&Kg(),Tt=null,Vo=null,n?(gt.data.set(e.before.terrain),Ht.data.set(e.before.urban),nr=!0):e.changed&&(Ii=e.checkpoint,OT()),ft.domElement.hasPointerCapture(e.pointerId)&&ft.domElement.releasePointerCapture(e.pointerId),Ut.enabled=!0,nr?(la(!n),!n&&un&&$c===gt&&(cl=!1)):(Ei.visible=!0,Fs.visible=!0,un&&(un.root.visible=Ei===un.root),Bs=null),at(),tt()}function tr(n){n&&!st()||!n&&St()?.mapEditRef||(mn&&Xn(),!Ee.dragging&&(Dl(),Ui(!0),us(),gn=!1,Gt=n,Yt=Wt=!1,it=null,_d(),Wi.visible=!1,n&&!De&&Dn(!0),ft.domElement.style.cursor=n?"crosshair":"",tt()))}let Js=[];function vf(){dt&&(gt.data.set(Float32Array.from(dt.heightsKm(),n=>n*Ke)),nr=!0,la())}function OT(){dt?.adoptTerrain(Array.from(gt.data,n=>n/Ke))}function Qs(){if(!ci)return;const n=dt?.selectedPlacement()??null;if(!n){ci.setSelection(null);return}const e=dt.selectedIndex(),t=Js.find(o=>o.id===n.prefabId&&o.revision===n.revision),[i,r,s]=n.position;ci.setSelection(`已选中 #${e+1} ${t?.name??n.prefabId}
位置 ${i.toFixed(2)}, ${r.toFixed(2)}, ${s.toFixed(2)} km`)}function Gs(){if(!ci)return;ci.setPrefabs(Js);const n=dt?.armedPrefab()??null;ci.setArmed(n?.prefabId??null,n?.revision??0),ci.setTransformMode(No),Qs()}let ja="",vl="";function zT(){const e=St()?.mapRef;return e?`${e.id}@${e.revision}`:""}function BT(n){if(!n)return null;const e=St()?.mapRef;return e?n.maps.find(t=>t.id===e.id&&t.revision===e.revision)??null:null}function fa(n=!1){if(!dt)return;const e=ve?.read().project??null;Js=e?.prefabs??[];const t=zT();if(!n&&t===vl){Gs();return}const i=BT(e);dt.load(i,Js),i&&(dt.adoptTerrain(Array.from(gt.data,r=>r/Ke)),dt.relevelAll(),gt.data.set(Float32Array.from(dt.heightsKm(),r=>r*Ke)),nr=!0),ja=St()?.mapRef?.id??"",vl=t,dt.syncRenderer(),Gs()}function ia(n){if(st()||(n=!1),fn=n,n){if(Gt=!1,Yt=Wt=!1,it=null,_d(),Wi.visible=!1,De||Dn(!0),!De){Jn("需要编辑权限才能摆放预制件","error"),fn=!1,tt();return}if(dt?.disarm(),fa(),ci===null){const e=wn?.panels.prefabs??document.querySelector("#scene");ci=new KE({container:e,floating:!wn,prefabs:Js,onArm:(t,i)=>{if(!Js.some(r=>r.id===t&&r.revision===i)){Jn("该预制件在当前项目中不存在","error");return}dt?.arm(t,i),ft.domElement.style.cursor="crosshair",Gs()},onDisarm:()=>{dt?.disarm(),ft.domElement.style.cursor="",Gs()},onDeleteSelected:()=>M0(),onTransformMode:t=>qT(t),onClose:()=>{wn&&wn.select("terrain"),ia(!1)}}),ci.show()}Gs(),De||Dn(!0)}else dt?.disarm(),dt?.select(null),ci?.hide(),ci=null,ft.domElement.style.cursor="";tt()}let No="translate",ui=null,ra=null;function HT(){return ui!==null}function eo(){const n=dt?.selectedPlacement()??null;if(!n){Ee.detach();return}ui===null&&(Hg(n,It.position),It.rotation.set(0,n.rotation[1],0),It.scale.setScalar(n.scale[0]),Ee.setMode(No),Ee.setSpace(No==="rotate"?"local":"world"),Ee.showX=No!=="rotate",Ee.showY=!0,Ee.showZ=No!=="rotate",Ee.attach(It))}function VT(){const n=Ee.axis??"XYZ",e=n.includes("X")?It.scale.x:n.includes("Y")?It.scale.y:It.scale.z;return Math.max(.01,Math.abs(e))}function GT(){if(ui===null||!dt||!fn)return;const n=new En().setFromQuaternion(It.quaternion,"YXZ").y,e=VT();dt.previewTransform(ui,{position:BE(It.position),rotation:[0,n,0],scale:[e,e,e]}),It.scale.setScalar(e),It.rotation.set(0,n,0),dt.syncRenderer()}function WT(){const n=ui,e=ra;if(ui=null,ra=null,n===null||!dt)return;Kt();const t=ve?.read()??null,i=ve?.revision??0;if(!dt.endTransform(n,e)){Ii=null,dt.selectedPlacement()&&eo(),Qs();return}if(vf(),dt.syncRenderer(),Ii=t,Kt("变换预制件"),ve&&ve.revision===i){Jn("该变换未能记入历史，已按当前文档恢复","error"),fa(!0);return}eo(),Qs()}function XT(){const n=ui,e=ra;ui=null,ra=null,Ii=null,n!==null&&e&&dt&&(dt.previewTransform(n,e),dt.syncRenderer()),eo(),Qs()}function qT(n){No=n,ci?.setTransformMode(n),eo(),Qs()}function M0(){return!dt||dt.selectedIndex()===null||!xn()?!1:dt.removeSelected()?(vf(),dt.syncRenderer(),Kt("删除预制件实例"),Gs(),Jn("已删除预制件实例"),!0):(Ii=null,!1)}ft.domElement.addEventListener("pointerdown",n=>{if(bt?.isPicking()||!st()||!De||!Gt||n.button!==0||n.altKey)return;n.stopImmediatePropagation(),n.preventDefault();const e=Zs(n);!e||Math.abs(e.x)>gt.extent||Math.abs(e.z)>gt.extentZ||Kt()&&(Tt={before:fd(),checkpoint:ve?.read()??null,pointerId:n.pointerId,changed:!1,last:null,height:!["urban","erase-urban"].includes(document.querySelector("#terrain-brush").value)},Ut.enabled=!1,ft.domElement.setPointerCapture(n.pointerId),S0(e),b0(e))},!0);ft.domElement.addEventListener("pointermove",n=>{if(!st()||!De||!Gt)return;const e=Zs(n);b0(e),Tt&&(n.stopImmediatePropagation(),e&&S0(e))},!0);ft.domElement.addEventListener("pointerup",n=>{Tt&&(n.stopImmediatePropagation(),Dl())},!0);ft.domElement.addEventListener("pointercancel",()=>Dl(!0));ft.domElement.addEventListener("pointerleave",()=>{Tt||(Wi.visible=!1)});let _l=null;const $T=5;ft.domElement.addEventListener("pointerdown",n=>{_l=null,!(bt?.isPicking()||!st()||!De||!fn||!dt||n.button!==0||n.altKey)&&(_l={x:n.clientX,y:n.clientY})},!0);ft.domElement.addEventListener("pointercancel",()=>{_l=null},!0);ft.domElement.addEventListener("pointerup",n=>{const e=_l;if(_l=null,!e||!st()||!De||!fn||!dt||n.button!==0||HT()||Ee.dragging||Math.hypot(n.clientX-e.x,n.clientY-e.y)>$T)return;const t=new Zh,i=ft.domElement.getBoundingClientRect();t.setFromCamera(new ze((n.clientX-i.left)/i.width*2-1,-((n.clientY-i.top)/i.height)*2+1),wt);const r=dt.armedPrefab(),s=dt.rendererInstance.pickTargets(),o=s.length?t.intersectObjects(s,!1):[],a=o.length?dt.rendererInstance.placementIndexForHit(o[0]):null;if(!r||a!==null){dt.select(a),eo(),Qs();return}const l=Zs(n);if(!l||!xn())return;const c=dt.place(Js,r.prefabId,r.revision,kE(l));if(c===null){Ii=null,Jn("放置失败：预制件不在库中","error");return}vf(),dt.syncRenderer(),dt.select(c),Kt("放置预制件"),eo(),Qs()},!0);document.querySelector("#tab-terrain").addEventListener("click",()=>tr(!0));document.querySelector("#tab-units").addEventListener("click",()=>tr(!1));document.querySelector("#tab-prefabs")?.addEventListener("click",()=>{De&&ia(!fn)});for(const[n,e]of[["#terrain-reset",()=>gt.reset()],["#terrain-generate",()=>gt.generate(Number(ht("#terrain-seed").value)||0,document.querySelector("#terrain-preset").value)]])document.querySelector(n).addEventListener("click",()=>{Tt||xn()&&(e(),nr=!0,la(),at(),tt())});document.querySelector("#terrain-brush").addEventListener("change",tt);for(const n of["#urban-angle","#urban-seed"])ht(n).addEventListener("change",()=>{Tt||xn()&&(is=Qt.degToRad(Qt.clamp(Number(ht("#urban-angle").value)||0,-180,180)),ll=Number(ht("#urban-seed").value)|0,nr=!0,la(),at(),tt())});document.querySelector("#terrain-contour-smooth").addEventListener("change",()=>{nr=!0});const YT={spacing:"街区间距",blockCells:"街区格数",emptyBlockChance:"空街区比例",widthMin:"面宽最小",widthMax:"面宽最大",depthMin:"进深最小",depthMax:"进深最大",heightMin:"高度最低",heightMax:"高度最高",heightRise:"高度随密度",heightJitter:"高度随机",footprintTighten:"密集收紧",shadeMin:"明暗最暗",shadeMax:"明暗最亮"},_f=new Map,Uc=document.querySelector("#urban-preset");{const n=document.querySelector("#urban-style-rows");for(const e of Object.keys(wf)){const t=wf[e],i=document.createElement("label");i.className="edit-row";const r=document.createElement("span");r.textContent=YT[e];const s=document.createElement("input");s.type="number",s.id=`urban-style-${e}`,s.min=String(t.min),s.max=String(t.max),s.step=String(t.step),s.addEventListener("change",()=>Tu(jT())),i.append(r,s),n.append(i),_f.set(e,s)}Uc.replaceChildren(...Ef.map(e=>new Option(e.name,e.id)),new Option("自定义","custom")),Uc.addEventListener("change",()=>{const e=Ef.find(t=>t.id===Uc.value);e&&Tu(e.style)}),document.querySelector("#urban-style-reset").addEventListener("click",()=>Tu(Sl)),document.querySelector("#urban-style-apply-all").addEventListener("click",ZT),xf()}function jT(){const n={};for(const[e,t]of _f)n[e]=Number(t.value);return za(n)}function w0(){for(const[n,e]of _f)e.value=String($s[n]);Uc.value=B0($s)?.id??"custom"}function Tu(n){Tt||($s=za(n),w0(),xf())}function ZT(){if(Tt||!xn())return;Ht.styles[0]={...$s},rf=!0;const n=Um(Ht.styles,$s);for(let e=0;e<Ht.zones.length;e++)Ht.data[e]&&(Ht.zones[e]=n);nr=!0,la(),at(),tt(),xf()}function xf(){document.querySelector("#urban-style-count").textContent=`当前 ${sf()} 栋建筑`}document.querySelector("#terrain-undo").addEventListener("click",pd);document.querySelector("#terrain-redo").addEventListener("click",md);const pr=new Zh,mr=new ze;function pa(){const n=ft.domElement.getBoundingClientRect?.();return n&&n.width>0&&n.height>0?{left:n.left,top:n.top,width:n.width,height:n.height}:{left:0,top:0,width:innerWidth,height:innerHeight}}function xl(){return typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches}function yf(n,e,t){const i=pa(),r=[];wt.updateMatrixWorld(),cn.updateMatrixWorld(!0);for(const s of Ni.values()){const o=s.userData.parts,a=s.userData.unit;if(!o||!a||!nd(s))continue;const l=typeof Ys<"u"?Ys.get(a.id):void 0,c=o.label.userData.dom,d=!c.hidden&&Number(c.style.opacity||"1")>0&&vE(c.getBoundingClientRect(),n,e,t>14?6:0),u=[o.icon,...l?.root.visible?[l.base]:[],...o.wreck.visible?[o.wreck]:[]];let h=1/0,f;for(const m of u.filter(nd)){const v=gE(m.getWorldPosition(new b).project(wt),i,n,e,d?Math.max(i.width,i.height):t);v!==null&&v<h&&(h=v,f=m)}f&&(h<=t||d)&&r.push({unit:a,distance:d?Math.min(h,t):h,object:f})}return r.sort((s,o)=>s.distance-o.distance||s.unit.id.localeCompare(o.unit.id))}function KT(n,e,t=14){const i=[],r=Gr(Le);for(const s of yf(n,e,t)){const o=Hs.get(s.unit.id);if(Dc!==void 0&&!o)continue;const a=new Set(o??[s.unit.id]);r.units.filter(l=>a.has(l.unit.id)).forEach(l=>i.push({unit:l.unit,distance:s.distance}))}return i.sort((s,o)=>s.distance-o.distance||s.unit.id.localeCompare(o.unit.id)).map(s=>s.unit)}function E0(n,e,t=14){const i=KT(n,e,t);i.length===1?c0(i[0]):(ul=i.map(r=>r.id),l0())}ft.domElement.addEventListener("pointerdown",n=>{!mn||n.button!==0||n.altKey||(n.stopImmediatePropagation(),n.preventDefault(),E0(n.clientX,n.clientY,tf(n.pointerType,xl())))},!0);da.addEventListener("pointerdown",n=>{if(n.button!==0||!Hr||n.altKey||jt())return;const e=tf(n.pointerType,xl());if(mn){n.stopPropagation(),n.preventDefault(),E0(n.clientX,n.clientY,e);return}const t=(n.target instanceof Element?n.target.closest("[data-unit-id]"):null)?.dataset.unitId,i=yf(n.clientX,n.clientY,e),r=i.find(s=>s.unit.id===t)??i[0];r&&(n.stopPropagation(),n.preventDefault(),cd(r.unit))});function nd(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function xd(n){const e=pa();mr.x=(n.clientX-e.left)/e.width*2-1,mr.y=-((n.clientY-e.top)/e.height)*2+1,pr.setFromCamera(mr,wt);const t=pr.intersectObjects([...Ni.values()].flatMap(r=>r.children),!0).filter(r=>nd(r.object));if(t.length||!xl()&&n.pointerType!=="touch"&&n.pointerType!=="pen")return t;const i=yf(n.clientX,n.clientY,tf(n.pointerType,xl()))[0];return i?[{distance:wt.position.distanceTo(i.object.getWorldPosition(new b)),point:i.object.getWorldPosition(new b),object:i.object}]:[]}function Il(){Co=null,Mh=-1/0,Ic=""}function JT(n=performance.now()){const e=wt.position.distanceTo(Ut.target),t=Yw(e,Dc),i=t!==Dc;Dc=t;const r=document.querySelector("#camera-readout");r&&(r.textContent=`FREE 3D / ${t}档`);const{width:s,height:o}=pa(),a=[t,s,o,...wt.position.toArray(),...wt.quaternion.toArray(),De,mn].join("|"),l=Co===null;if(!l&&!i&&a===Ic)return;if(wt.updateMatrixWorld(),cn.updateMatrixWorld(!0),Co??=Gr(Le),l||i||a!==Ic&&n-Mh>=100){const u=Co.units.map(h=>{const f=Ni.get(h.unit.id),m=f.userData.parts,g=(t===3?f.position.clone():m.icon.getWorldPosition(new b)).project(wt),p=De&&mt.has(h.unit.id),w=Dt?void 0:qi().groups.find(_=>_.id===h.unit.groupId)?.name;return{id:h.unit.id,label:w?`${h.unit.label} · ${w}`:h.unit.label,faction:h.unit.faction,icon:h.unit.icon,tgt:h.unit.tgt,escort:h.unit.escort,status:h.status,position:{x:h.position.x/Ke,y:h.position.y/Ke,z:h.position.z/Ke},screenX:(g.x+1)*s/2,screenY:(1-g.y)*o/2,onScreen:!p&&!h.unit.hidden&&!h.unit.intangible&&g.z>-1&&g.z<1&&Math.abs(g.x)<=1&&Math.abs(g.y)<=1}});Su=Kw(u,t),Hs.clear();for(const h of Su)Hs.set(h.representativeId,h.memberIds);Ic=a,Mh=n}const c=new Map(Co.units.map(u=>[u.unit.id,u])),d=new Map(Su.map(u=>[u.representativeId,u]));for(const u of Co.units){const h=Ni.get(u.unit.id),f=h.userData.parts,m=Ys.get(u.unit.id),v=d.get(u.unit.id),p=(v?.airRepresentativeId?c.get(v.airRepresentativeId):void 0)??(zn(u.unit)?u:void 0),w=El(u.unit,u.position,Rt),_=Math.max(0,w.y-h.position.y),x=ld(u.unit,w,Rt,di).y-h.position.y,I=f.base===null?x+Qg-di:Math.max(_,.6),D=new b(h.position.x,h.position.y+x,h.position.z),N=2*Math.max(wt.near,-D.applyMatrix4(wt.matrixWorldInverse).z)*Math.tan(Qt.degToRad(wt.fov)/2)/Math.max(1,o),S=lu(t,N),M=Math.max(wt.near,-new b(h.position.x,h.position.y,h.position.z).applyMatrix4(wt.matrixWorldInverse).z),L=Math.max(wt.near,-new b(h.position.x,h.position.y+1.5,h.position.z).applyMatrix4(wt.matrixWorldInverse).z),F=2*Math.tan(Qt.degToRad(wt.fov)/2)/Math.max(1,o),k=lu(t,M*F),W=lu(t,L*F);f.tgtRing.visible=!!v?.hasTgt&&u.status==="active",f.escortMarker.visible=!!v?.hasEscort&&u.status==="active"&&u.unit.faction!=="enemy",tE(f,m,{tier:u.unit.intangible?1:t,representative:!!v,status:u.status,faction:u.unit.faction,label:v?.label??u.unit.label,scale:S,baseScale:k,farBaseScale:W,hasAir:!!p,airAltitude:p?Math.max(0,p.position.y-h.position.y):0,hasTgt:!!v?.hasTgt,hasEscort:!!v?.hasEscort,iconHeight:x,poleHeight:I}),m.root.traverse(q=>{const j=q.material;!j||Array.isArray(j)||(j.userData.hiddenBaseOpacity??=j.opacity,j.opacity=j.userData.hiddenBaseOpacity*(u.unit.hidden?.35:1))})}for(const u of cn.children)typeof u.userData.trail=="string"&&(u.visible=t===1||Hs.has(u.userData.trail))}const Au=[],Em={height:0,lineHeight:0};function QT(){const{width:n,height:e}=pa();for(const{dom:i,position:r}of wh){const s=r.clone().project(wt);i.hidden=s.z<-1||s.z>1,i.style.left=`${(s.x+1)*n/2}px`,i.style.top=`${(1-s.y)*e/2}px`}cn.updateMatrixWorld(!0);let t=0;for(const i of Ni.values()){const r=i.userData.parts,s=r.label.userData.dom,o=r.label.userData.displayVisible!==!1,a=Ys.get(i.userData.unit.id),l=a?.root.visible?a.pole:r.pole,c=Au[t++]??={group:i,parts:r,dom:s,pole:l,measurement:Em,naturalTop:0,isAir:!1,isMerged:!1,decorated:!1,visible:!1,groupKey:""};c.group=i,c.parts=r,c.dom=s,c.pole=l,c.visible=o,c.naturalTop=l.userData.naturalTop??r.label.position.y,c.isAir=r.base!==null,c.isMerged=(Hs.get(i.userData.unit.id)?.length??1)>1,c.decorated=r.tgtRing.visible||r.escortMarker.visible,c.measurement=o&&!s.hidden?Cg(s):Em}Au.length=t;for(const i of Au){const{group:r,parts:s,dom:o}=i,a=mE({camera:wt,width:n,height:e,group:r,icon:s.wreck.visible?s.wreck:s.icon,pole:i.pole,dom:o,isAir:i.isAir,naturalTop:i.naturalTop,isMerged:i.isMerged,decorated:i.decorated,visible:i.visible,measurement:i.measurement})!==!1&&i.visible,l=qi().groups.find(m=>m.id===r.userData.unit?.groupId),c=l?`${l.name}|${l.color}`:"";c!==i.groupKey&&(i.groupKey=c,o.title=l?`编组: ${l.name}`:"",o.style.borderLeft=l?`3px solid ${l.color}`:"");const d=a?String(s.labelFade):"0";o.style.opacity!==d&&(o.style.opacity=d);const u=a&&!o.hidden&&(mn||typeof an<"u"&&an?.active()||xl()),h=u?"auto":"none",f=mn?"crosshair":u?"pointer":"";o.style.pointerEvents!==h&&(o.style.pointerEvents=h),o.style.cursor!==f&&(o.style.cursor=f),o.classList.toggle("range-attacker-label",r.userData.unit.id===Ai),o.classList.toggle("range-target-label",r.userData.unit.id===Hi)}}let Hr=!1;function T0(){if(requestAnimationFrame(T0),!Hr)return;Tt?(Kg(),sT()):nr&&la(),Gt&&!Tt&&(!un||cl)&&Zg(),Ut.update(),wg(Qr,wt.position.distanceTo(Ut.target)),JT(),QT();const n=pa();fT.update(wt,n.width,n.height,gt.extent,gt.extentZ),bt?.updateLabels(wt,n.width,n.height),an?.update(),dt?.syncRenderer(),ft.render(Vr,wt)}function id(){const n=document.querySelector("#scene")?.getBoundingClientRect(),e=Math.floor(n?.width??0),t=Math.floor(n?.height??0);return e<1||t<1?!1:(wt.aspect=e/t,Cl(),ft.setSize(e,t,!1),!0)}addEventListener("resize",()=>{id()});const Tm=document.querySelector("#scene");Tm&&typeof ResizeObserver=="function"&&new ResizeObserver(()=>{id()}).observe(Tm);function eA(n){U0(n,{size:gt.size,extent:gt.extent})}function tA(n){eA(n),Dt&&bf(!1);const e=ve.read();try{sa(),Xn(),mt.clear(),fe=null,ve.reset(n.checkpoint),gr(n.checkpoint);const t=(i,r)=>Math.max(0,...i.filter(s=>s.startsWith(r)).map(s=>Number(s.slice(r.length))).filter(Number.isSafeInteger))+1;ds=t(ot.map(i=>i.id),"unit-"),dl=t(Mn.map(i=>i.id),"route-"),Kc=t(Mn.flatMap(i=>i.waypoints.map(r=>r.id)),"wp-"),Jc=t(ot.flatMap(i=>(i.trackPoints??[]).map(r=>r.id)),"control-"),Yc=t(ot.flatMap(i=>i.routeBinding?.formationId?[i.routeBinding.formationId]:[]),"formation-"),Vi.clear(),Ai=Hi="",at(),tt(),fa()}catch(t){throw gr(e),ve.reset(e),at(),tt(),t}}let rd,yl,Am="",ln=!1,Ll="",zs=null;function on(n){Ll=n;const e=document.querySelector("#workflow-state");e&&(e.textContent=n)}function bl(){zs=null,document.querySelector("#workflow-confirm")?.setAttribute("hidden","")}function $i(){const n=St(),e=n?.workflow?.mode==="formal",t=document.querySelector("#workflow-panel");if(!t)return;if(typeof Dt<"u"&&Dt){t.hidden=!0;for(const m of Array.from(t.querySelectorAll("button")))m.disabled=!0;return}t.hidden=!1;const i=e&&n.turns.length===n.workflow.committedTurns+1,r=jt()||ln,s=n?.status==="finished";t.dataset.mode=s?"finished":e?Gi()?"draft":"history":n?.mapEditRef?"map-editor":"authoring";const o=document.querySelector("#task-editor-save");o&&(o.hidden=!!e||!!n?.mapEditRef||n?.turns.length!==1,o.disabled=r||s);const a=document.querySelector("#map-editor-save");a&&(a.hidden=!n?.mapEditRef,a.disabled=r||s);const l=document.querySelector("#workflow-reopen");l&&(l.hidden=!e,l.disabled=!e||r||!!zs||!!i||!n.workflow.committedTurns||!!n.workflow?.branchFrom&&n.workflow.committedTurns-1<n.workflow.branchFrom.turn);const c=document.querySelector("#workflow-save-draft");c&&(c.hidden=!e,c.disabled=r||s||!Gi()||!!zs||!rd);const d=document.querySelector("#workflow-snapshot");d&&(d.hidden=!e,d.disabled=r||!!zs||!n?.workflow?.committedTurns||typeof yl>"u"||!yl);const u=document.querySelector("#editor-save-as-controls");u&&(u.hidden=!!e||s);for(const m of["map","task"]){const v=document.querySelector(`#${m}-editor-save-as`);v&&(v.hidden=!!e||(m==="map"?!n?.mapEditRef:!!n?.mapEditRef),v.disabled=r||s)}const h=document.querySelector("#editor-save-as-name");h&&(h.disabled=r||s,n&&Am!==n.id&&(Am=n.id,h.value=`${n.name.replace(/ 制作副本$/,"").slice(0,123)} COPY`));const f=document.querySelector("#workflow-state");f&&(f.textContent=Ll||(s?"已结束":e?Gi()?`第 ${Le+1} 回合 · 草稿`:`第 ${Le+1} 回合 · 只读 · 已提交 ${n.workflow.committedTurns} 回合`:n?.mapEditRef?`地图制作 · r${n.mapEditRef.revision}`:"场景制作"));for(const m of["begin","advance","commit","discard"]){const v=document.querySelector(`#workflow-${m}`);v&&(v.hidden=!e,m==="discard"&&(v.textContent=n?.workflow?.committedTurns===0?"重置第一回合草稿…":"丢弃草稿…"),v.disabled=!e||s||r||!!zs||(m==="begin"?!!i:!Gi()))}}function Ah(n,e){if(typeof Dt<"u"&&Dt)return;if(!ve||ln||jt()){on("请先结束当前放置、拖动或笔刷操作");return}if(e&&(e.revision!==ve.revision||e.sessionId!==St()?.id||e.turn!==Le)){bl(),on("会话或回合已变化，请重新选择操作"),$i();return}if(!Kt())return;const t=ve.read(),i=t.editor.sessionId??"session-working",r=t.project.sessions.find(s=>s.id===i);if(!r?.workflow||(n==="reopen"?r.turns.length!==r.workflow.committedTurns||!r.workflow.committedTurns:r.status==="finished"||n!=="begin"&&!Gi()||n==="begin"&&r.turns.length!==r.workflow.committedTurns)){on("当前状态不适用此操作，请刷新回合状态"),$i();return}ln=!0,Ll="",bl(),$i();try{if(n==="reopen"){ve.reopenLastCommittedTurn(i,ve.revision),vr(),Dn(!0),on("最近回合已恢复为草稿");return}const o={begin:Z0,advance:j0,commit:Y0,discard:$0}[n](t.project,i),a=o.sessions.find(d=>d.id===i),l={project:o,editor:{...t.editor,currentTurn:a.turns.length-1}},c={begin:"开始回合草稿",advance:"按航路推进草稿",commit:"提交回合",discard:"丢弃回合草稿"};ve.commit(l,c[n],t),vr(),(n==="begin"||n==="advance"||n==="discard"&&a.workflow?.committedTurns===0)&&Dn(!0)}catch(s){on(s instanceof Error?s.message:String(s))}finally{ln=!1,tt()}}function nA(n){if(Dt)return;if(n!=="commit"&&n!=="discard"&&n!=="reopen"){Ah(n);return}if(!ve||jt()||ln||(n==="reopen"?!Rn()||St().turns.length!==St().workflow.committedTurns||!St().workflow.committedTurns:!Gi())){const s=typeof bm<"u"?bm():null;s?Jn(`请先完成当前操作：${s}`,"error"):ln&&Jn("上一个操作仍在处理中，请稍候","error");return}if(!Kt())return;const e=n==="reopen"?"取消最近回合提交？":n==="commit"?"提交当前回合？":St()?.workflow?.committedTurns===0?"重置第一回合草稿？":"丢弃当前草稿？",t={action:n,revision:ve.revision,sessionId:St().id,turn:Le},i=document.querySelector("#workflow-confirm");if(!i){window.confirm(e)&&Ah(n,t);return}zs=t,i.hidden=!1;const r=document.querySelector("#workflow-confirm-text");r&&(r.textContent=e),$i()}for(const n of["begin","advance","commit","discard","reopen"])document.querySelector(`#workflow-${n}`)?.addEventListener("click",()=>nA(n));document.querySelector("#workflow-confirm-yes")?.addEventListener("click",()=>{const n=zs;n&&Ah(n.action,n)});document.querySelector("#workflow-confirm-cancel")?.addEventListener("click",()=>{bl(),$i()});document.querySelector("#canvas-resize")?.addEventListener("click",()=>{if(!ve||!st()||jt())return;const n=Number(ht("#canvas-width").value),e=Number(ht("#canvas-height").value),t=Number(ht("#canvas-samples").value);if(Kt())try{const i=ve.read(),r=i.project.sessions.find(a=>a.id===i.editor.sessionId),s=W0(i.project,r.mapRef,n,e,t),o=s.maps.at(-1);s.sessions.find(a=>a.id===r.id).mapRef={id:o.id,revision:o.revision},ve.commit({...i,project:s},"调整画布尺寸",i),vr(),Dn(!0),tr(!0),on(`画布 ${n} × ${e} km`)}catch(i){on(i instanceof Error?i.message:String(i))}});document.querySelector("#task-editor-save")?.addEventListener("click",()=>{if(!(Dt||!ve||jt()||Rn()||St()?.mapEditRef)&&Kt())try{const n=ve.read(),e=St(),t=n.project.tasks.find(s=>s.id===e.taskRef.id&&s.revision===e.taskRef.revision),i=X0(n.project,e.id,t?.name??e.name.replace(/ 制作副本$/,""));ve.commit({...n,project:i},"保存任务新修订",n),vr(),Dn(!0);const r=i.sessions.find(s=>s.id===e.id).taskRef;on(`任务已保存 · r${r.revision}`),Jn(`任务已保存 · r${r.revision}`)}catch(n){const e=n instanceof Error?n.message:String(n);on(e),Jn(e,"error")}});document.querySelector("#map-editor-save")?.addEventListener("click",()=>{if(Dt||!ve||jt()||ln||!St()?.mapEditRef||!Kt())return;const n=ve.read(),e=St().id;try{const t=dt?.placements(),i=q0(n.project,e,t),r=i.sessions.find(a=>a.id===e).mapEditRef,s=ve.commit({...n,project:i},"保存地图新修订",n),o=fn;vr(),o?ia(!0):(tr(!0),fa()),on(s?`地图已保存 · r${r.revision}`:`无修改 · r${r.revision}`),Jn(s?`地图已保存 · r${r.revision}`:`无修改 · r${r.revision}`),$i()}catch(t){const i=t instanceof Error?t.message:String(t);on(i),Jn(i,"error")}});document.querySelector("#workflow-save-draft")?.addEventListener("click",async()=>{if(!ve||jt()||ln||!Gi()||!rd||!Kt())return;const n=document.querySelector("#workflow-save-draft");n.disabled=!0;try{const e=await rd();on(e?"草稿已保存":"草稿保存失败"),Jn(e?"草稿已保存":"草稿保存失败",e?"ok":"error")}catch(e){const t=e instanceof Error?e.message:String(e);on(t),Jn(t,"error")}finally{$i()}});document.querySelector("#workflow-snapshot")?.addEventListener("click",async()=>{if(!(Dt||!ve||jt()||ln||!St()?.workflow?.committedTurns||!yl)&&Kt()){ln=!0,$i();try{await yl(),on("回合快照已发送到管理器快照仓库")}catch(n){on(n instanceof Error?n.message:String(n))}finally{ln=!1,$i(),tt()}}});for(const n of["map","task"])document.querySelector(`#${n}-editor-save-as`)?.addEventListener("click",()=>{if(Dt||!ve||jt()||ln||Rn()||!!St()?.mapEditRef!=(n==="map")||!Kt())return;const e=document.querySelector("#editor-save-as-name").value.trim();if(!e){on("请填写副本名称"),Jn("请填写副本名称","error");return}try{const t=ve.read(),i=St(),r=`map-${crypto.randomUUID()}`,s=n==="map"?PE(t.project,i.id,r,e):DE(t.project,i.id,{mapId:r,taskId:`task-${crypto.randomUUID()}`},e);ve.commit({...t,project:s.project},n==="map"?"另存为新地图":"另存为新任务",t),vr(),Dn(!0),n==="map"&&tr(!0),on(`${n==="map"?"地图":"任务"}已另存为「${e}」r1`),Jn(`${n==="map"?"地图":"任务"}已另存为「${e}」r1`)}catch(t){const i=t instanceof Error?t.message:String(t);on(i),Jn(i,"error")}});function bf(n){if(n!==Dt){if(jt()||ln||!Kt())throw new Error("请先完成当前编辑操作");if(n){const e=ve.read(),t=N0(e),i=Dm(e),r=new Ch(i);Nc={edit:De,terrain:Gt},sa(),mt.clear(),fe=null,Lc=ve,fl=e,hd=t,Vs.clear(),Vs.set(i.editor.currentTurn,r),Dt=!0,ve=r}else sa(),mt.clear(),fe=null,ve=Lc,Dt=!1,Lc=null,fl=null,typeof pl<"u"&&(pl=null),Vs.clear(),De=Nc.edit,Gt=Nc.terrain;rs=null,Qc="",Ya="",gr(ve.read()),document.querySelector("#app").dataset.playerView=String(Dt),document.querySelector("#player-viewer-open").hidden=Dt,document.querySelector("#player-viewer-exit").hidden=!Dt,at(),tt()}}function iA(n){const e=L0(n);if(jt()||ln||!Kt())throw new Error("请先完成当前编辑操作");Dt&&bf(!1);const t=ve.read();Nc={edit:De,terrain:Gt},sa(),mt.clear(),fe=null,Lc=ve,fl=t,pl=e,hd=e.turns.length-1;const i=new Ch(e.turns[0]);Vs.clear(),Vs.set(0,i),ve=i,Dt=!0,rs=null,Qc="",Ya="",gr(i.read()),document.querySelector("#app").dataset.playerView="true",document.querySelector("#player-viewer-open").hidden=!0,document.querySelector("#player-viewer-exit").hidden=!1,at(),tt()}function rA(n){if(!fl||jt()||ln)return;const e=Math.max(0,Math.min(n,hd));if(e===Le||!Kt())return;const t=De,i=typeof pl<"u"?pl:null,r=Vs.get(e)??new Ch(i?i.turns[e]:Dm(fl,e));Vs.set(e,r),sa(),mt.clear(),fe=null,ve=r,rs=null,gr(r.read()),De=t,at(),tt()}function sA(){if(!Dt||jt()||ln||!Kt())return;const n=ve.read(),e=n.project.sessions.find(s=>s.id===n.editor.sessionId);e.routes=[{id:"player-viewer-route",name:"Viewer",waypoints:[]}],n.editor.activeRouteId="player-viewer-route";const t=K0(J0(n,n.editor.sessionId)),i=URL.createObjectURL(new Blob([t],{type:"application/json"})),r=document.createElement("a");r.href=i,r.download=`player-view-turn-${Le+1}.json`,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function sa(){bt?.cancel(),bt?.clearSelection(),Ti=null,typeof an<"u"&&an?.cancel(),De=Gt=Yt=Hn=Wt=gn=!1,typeof fn<"u"&&(fn=!1,ci&&(ci.hide(),ci=null),dt?.disarm(),dt?.select(null),ja="",vl=""),it=null,je=null,er=null,ir=!1,Ii=null,_n=null,gl=null,na.clear(),Ee.detach(),Wi.visible=!1,Tt&&ft.domElement.hasPointerCapture(Tt.pointerId)&&ft.domElement.releasePointerCapture(Tt.pointerId),Tt=null,Ui(!0),Ut.enabled=!0,ft.domElement.style.cursor="",bl(),Ll=""}function vr(){rs=null,sa();const n=[...mt];gr(ve.read()),mt.clear(),n.filter(t=>ot.some(i=>i.id===t)).forEach(t=>mt.add(t)),fe=Yi().at(-1)??null;const e=(t,i,r)=>Math.max(r,...t.filter(s=>s.startsWith(i)).map(s=>Number(s.slice(i.length))+1).filter(Number.isSafeInteger));ds=e(ot.map(t=>t.id),"unit-",ds),dl=e(Mn.map(t=>t.id),"route-",dl),Kc=e(Mn.flatMap(t=>t.waypoints.map(i=>i.id)),"wp-",Kc),Jc=e(ot.flatMap(t=>(t.trackPoints??[]).map(i=>i.id)),"control-",Jc),Yc=e(ot.flatMap(t=>t.routeBinding?.formationId?[t.routeBinding.formationId]:[]),"formation-",Yc),at(),tt()}let Rm=!1;function aA(n,e){if(Rm)throw new Error("Workspace already mounted");Rm=!0,ve=n,rd=e?.saveDraft,yl=e?.generateSnapshot,wn=_E({fitMap:gf,topView:wT,toggleEdit:()=>Dn(!De),viewerExport:sA,viewerUndo:pd,viewerRedo:md,chooseTool:t=>{Ee.dragging||Tt||bi||(bt?.cancel(),t!=="links"&&t!=="markers"&&an?.cancel(),["markers","drawing"].includes(t)||bt?.clearSelection(),je&&t!=="units"&&us(),t==="terrain"&&st()?(Dn(!0),tr(!0)):Gt&&(St()?.mapEditRef?(Gt=!1,Wi.visible=!1):tr(!1)),t==="prefabs"?st()&&(Dn(!0),ia(!0)):fn&&ia(!1),["routes"].includes(t)||(Yt=Wt=Hn=!1,it=null),(["markers","drawing","links"].includes(t)?Ri():st())&&["groups","markers","drawing","routes","units","equipment","links"].includes(t)&&!De&&Dn(!0),t!=="range"&&mn&&Xn(),at(),tt())}}),ts=document.createElement("aside"),ts.id="player-roster-panel",ts.hidden=!0,ts.setAttribute("aria-label","玩家资料卡"),document.querySelector("#app").append(ts),document.querySelector("#app").classList.add("player-roster-mounted"),Eh=bE(ts,{readRevision:()=>ve.revision,read:()=>ve.read().project,busy:()=>ln||jt(),report:on,beginCreate:RT,armPlacement:CT,cancelPlacement:us,selectUnit:(t,i)=>{if(ln||jt())return;const r=ot.find(s=>s.id===t);r&&(Qn([r]),i&&Sm([t]))},recordAction:DT}),i0=xE(wn.panels.groups,{read:qi,units:()=>ot,selectedIds:()=>[...mt],editable:()=>st()&&De&&!St()?.mapEditRef,change:Eu,select:t=>Qn(ot.filter(i=>t.includes(i.id))),copy:pT,focus:Sm}),bt=RE({markersPanel:wn.panels.markers,drawingsPanel:wn.panels.drawing,world:cn,labelRoot:ud,read:qi,change:(t,i)=>Eu(t,r=>i(r)),editable:()=>Ri()&&De,focus:hf,sampleHeightKm:(t,i)=>Rt(t*Ke,i*Ke)/Ke,onMarkerPick:t=>an?.pick("marker",t)??!1,onTransformMode:t=>{Go=t,Wo()},onOpenPanel:t=>{document.querySelector("#edit-panel").dataset.activeTab!==t&&wn?.select(t)},onSelectionChange:t=>{t&&(Go="translate",Xn(),it=null,Yt=Wt=Hn=gn=!1,mt.clear(),fe=null,vd(),at(),tt()),Wo()},onPickingChange:t=>{document.querySelector("#app").dataset.mapPicking=String(t),t&&(Xn(),Ui(!0),gn=!1,Yt=Wt=Hn=Gt=!1,it=null,Wi.visible=!1,Ee.detach()),Ut.enabled=Hr,ft.domElement.style.cursor=t?"crosshair":"",$i()}}),an=ME({panel:wn.panels.links,world:cn,read:qi,readUnits:()=>ot.map(t=>{const i=ld(t,qn(t),Rt,di);return{id:t.id,label:t.label,position:{x:i.x/Ke,y:i.y/Ke,z:i.z/Ke}}}),selectedUnitId:()=>fe?.id,editable:()=>Ri()&&De&&!St()?.mapEditRef,busy:()=>ln||jt(),change:(t,i)=>Eu(t,r=>i(r)),onModeChange:t=>{t&&(bt?.cancel(),bt?.clearSelection(),Xn(),Ui(!0),gn=Yt=Wt=Hn=!1,it=null,Ee.detach()),ft.domElement.style.cursor=t?"crosshair":"",Wo()}}),document.querySelector("#route-select-bound").addEventListener("click",()=>Qn(ot.filter(t=>t.routeBinding?.routeId===On))),document.querySelector("#route-bind-group").addEventListener("click",()=>{const t=document.querySelector("#route-group-select").value;x0(ot.filter(i=>i.groupId===t&&Tl(i)))});for(const t of["#route-visible","#route-labels"])document.querySelector(t).addEventListener("change",()=>at());return ft.domElement.addEventListener("pointerdown",t=>{if(!bt?.isPicking()||t.button!==0||t.altKey)return;t.stopImmediatePropagation(),t.preventDefault();const i=Zs(t);i&&bt.pick({x:i.x/Ke,y:i.y/Ke,z:i.z/Ke})},!0),ft.domElement.addEventListener("pointermove",t=>{if(!bt?.isPicking())return;const i=Zs(t);bt.preview(i?{x:i.x/Ke,y:i.y/Ke,z:i.z/Ke}:null)}),vr(),Cl(),Dn(!1),at(),T0(),{flush:()=>{if(!Kt())throw new Error("当前编辑尚未保存")},open:tA,sync:vr,busy:()=>ln||jt(),selectedUnitId:()=>fe?.id,editTerrain:()=>{st()&&(Dn(!0),tr(!0))},editScenario:()=>{st()&&(Dn(!0),tr(!1))},playerView:bf,snapshot:iA,activate:t=>{Hr=t,Ut.enabled=t,wn?.sync({editing:De,editable:Ri(),mapOnly:!!St()?.mapEditRef,active:t,playerView:Dt,viewerCanUndo:!!ve?.canUndo,viewerCanRedo:!!ve?.canRedo}),t?(id()||requestAnimationFrame(()=>{id()}),at(),tt(),fa()):(bt?.cancel(),an?.cancel(),Xn(),Ee.detach(),f0())}}}export{aA as mountWorkspace};
