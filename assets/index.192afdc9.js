var yf=Object.defineProperty;var bf=(i,e,t)=>e in i?yf(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Oe=(i,e,t)=>(bf(i,typeof e!="symbol"?e+"":e,t),t);const Mf=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};Mf();function dl(i,e){const t=Object.create(null),n=i.split(",");for(let s=0;s<n.length;s++)t[n[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const Sf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wf=dl(Sf);function vh(i){return!!i||i===""}function vr(i){if(De(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=pt(n)?Af(n):vr(n);if(s)for(const r in s)e[r]=s[r]}return e}else{if(pt(i))return i;if(dt(i))return i}}const Tf=/;(?![^(]*\))/g,Ef=/:(.+)/;function Af(i){const e={};return i.split(Tf).forEach(t=>{if(t){const n=t.split(Ef);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Mo(i){let e="";if(pt(i))e=i;else if(De(i))for(let t=0;t<i.length;t++){const n=Mo(i[t]);n&&(e+=n+" ")}else if(dt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Ti=i=>pt(i)?i:i==null?"":De(i)||dt(i)&&(i.toString===Sh||!ke(i.toString))?JSON.stringify(i,yh,2):String(i),yh=(i,e)=>e&&e.__v_isRef?yh(i,e.value):ls(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,s])=>(t[`${n} =>`]=s,t),{})}:bh(e)?{[`Set(${e.size})`]:[...e.values()]}:dt(e)&&!De(e)&&!wh(e)?String(e):e,st={},as=[],Jt=()=>{},Cf=()=>!1,Rf=/^on[^a-z]/,So=i=>Rf.test(i),fl=i=>i.startsWith("onUpdate:"),Et=Object.assign,pl=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Lf=Object.prototype.hasOwnProperty,Ge=(i,e)=>Lf.call(i,e),De=Array.isArray,ls=i=>wo(i)==="[object Map]",bh=i=>wo(i)==="[object Set]",ke=i=>typeof i=="function",pt=i=>typeof i=="string",ml=i=>typeof i=="symbol",dt=i=>i!==null&&typeof i=="object",Mh=i=>dt(i)&&ke(i.then)&&ke(i.catch),Sh=Object.prototype.toString,wo=i=>Sh.call(i),If=i=>wo(i).slice(8,-1),wh=i=>wo(i)==="[object Object]",gl=i=>pt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,io=dl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),To=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Pf=/-(\w)/g,_n=To(i=>i.replace(Pf,(e,t)=>t?t.toUpperCase():"")),Df=/\B([A-Z])/g,ws=To(i=>i.replace(Df,"-$1").toLowerCase()),Eo=To(i=>i.charAt(0).toUpperCase()+i.slice(1)),Wo=To(i=>i?`on${Eo(i)}`:""),sr=(i,e)=>!Object.is(i,e),jo=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},ho=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Ff=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Ql;const Nf=()=>Ql||(Ql=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let hn;class Of{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&hn&&(this.parent=hn,this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=hn;try{return hn=this,e()}finally{hn=t}}}on(){hn=this}off(){hn=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function kf(i,e=hn){e&&e.active&&e.effects.push(i)}const _l=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Th=i=>(i.w&ni)>0,Eh=i=>(i.n&ni)>0,Uf=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=ni},Bf=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const s=e[n];Th(s)&&!Eh(s)?s.delete(i):e[t++]=s,s.w&=~ni,s.n&=~ni}e.length=t}},Pa=new WeakMap;let qs=0,ni=1;const Da=30;let Kt;const yi=Symbol(""),Fa=Symbol("");class xl{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,kf(this,n)}run(){if(!this.active)return this.fn();let e=Kt,t=Jn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Kt,Kt=this,Jn=!0,ni=1<<++qs,qs<=Da?Uf(this):ec(this),this.fn()}finally{qs<=Da&&Bf(this),ni=1<<--qs,Kt=this.parent,Jn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Kt===this?this.deferStop=!0:this.active&&(ec(this),this.onStop&&this.onStop(),this.active=!1)}}function ec(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Jn=!0;const Ah=[];function Ts(){Ah.push(Jn),Jn=!1}function Es(){const i=Ah.pop();Jn=i===void 0?!0:i}function Ut(i,e,t){if(Jn&&Kt){let n=Pa.get(i);n||Pa.set(i,n=new Map);let s=n.get(t);s||n.set(t,s=_l()),Ch(s)}}function Ch(i,e){let t=!1;qs<=Da?Eh(i)||(i.n|=ni,t=!Th(i)):t=!i.has(Kt),t&&(i.add(Kt),Kt.deps.push(i))}function Nn(i,e,t,n,s,r){const o=Pa.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&De(i))o.forEach((l,c)=>{(c==="length"||c>=n)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":De(i)?gl(t)&&a.push(o.get("length")):(a.push(o.get(yi)),ls(i)&&a.push(o.get(Fa)));break;case"delete":De(i)||(a.push(o.get(yi)),ls(i)&&a.push(o.get(Fa)));break;case"set":ls(i)&&a.push(o.get(yi));break}if(a.length===1)a[0]&&Na(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Na(_l(l))}}function Na(i,e){const t=De(i)?i:[...i];for(const n of t)n.computed&&tc(n);for(const n of t)n.computed||tc(n)}function tc(i,e){(i!==Kt||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const zf=dl("__proto__,__v_isRef,__isVue"),Rh=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(ml)),Vf=vl(),Hf=vl(!1,!0),Gf=vl(!0),nc=Wf();function Wf(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Ye(this);for(let r=0,o=this.length;r<o;r++)Ut(n,"get",r+"");const s=n[e](...t);return s===-1||s===!1?n[e](...t.map(Ye)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){Ts();const n=Ye(this)[e].apply(this,t);return Es(),n}}),i}function vl(i=!1,e=!1){return function(n,s,r){if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(i?e?op:Fh:e?Dh:Ph).get(n))return n;const o=De(n);if(!i&&o&&Ge(nc,s))return Reflect.get(nc,s,r);const a=Reflect.get(n,s,r);return(ml(s)?Rh.has(s):zf(s))||(i||Ut(n,"get",s),e)?a:vt(a)?o&&gl(s)?a:a.value:dt(a)?i?Nh(a):yr(a):a}}const jf=Lh(),qf=Lh(!0);function Lh(i=!1){return function(t,n,s,r){let o=t[n];if(rr(o)&&vt(o)&&!vt(s))return!1;if(!i&&!rr(s)&&(Oa(s)||(s=Ye(s),o=Ye(o)),!De(t)&&vt(o)&&!vt(s)))return o.value=s,!0;const a=De(t)&&gl(n)?Number(n)<t.length:Ge(t,n),l=Reflect.set(t,n,s,r);return t===Ye(r)&&(a?sr(s,o)&&Nn(t,"set",n,s):Nn(t,"add",n,s)),l}}function Xf(i,e){const t=Ge(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&Nn(i,"delete",e,void 0),n}function $f(i,e){const t=Reflect.has(i,e);return(!ml(e)||!Rh.has(e))&&Ut(i,"has",e),t}function Kf(i){return Ut(i,"iterate",De(i)?"length":yi),Reflect.ownKeys(i)}const Ih={get:Vf,set:jf,deleteProperty:Xf,has:$f,ownKeys:Kf},Yf={get:Gf,set(i,e){return!0},deleteProperty(i,e){return!0}},Zf=Et({},Ih,{get:Hf,set:qf}),yl=i=>i,Ao=i=>Reflect.getPrototypeOf(i);function Cr(i,e,t=!1,n=!1){i=i.__v_raw;const s=Ye(i),r=Ye(e);t||(e!==r&&Ut(s,"get",e),Ut(s,"get",r));const{has:o}=Ao(s),a=n?yl:t?Sl:or;if(o.call(s,e))return a(i.get(e));if(o.call(s,r))return a(i.get(r));i!==s&&i.get(e)}function Rr(i,e=!1){const t=this.__v_raw,n=Ye(t),s=Ye(i);return e||(i!==s&&Ut(n,"has",i),Ut(n,"has",s)),i===s?t.has(i):t.has(i)||t.has(s)}function Lr(i,e=!1){return i=i.__v_raw,!e&&Ut(Ye(i),"iterate",yi),Reflect.get(i,"size",i)}function ic(i){i=Ye(i);const e=Ye(this);return Ao(e).has.call(e,i)||(e.add(i),Nn(e,"add",i,i)),this}function sc(i,e){e=Ye(e);const t=Ye(this),{has:n,get:s}=Ao(t);let r=n.call(t,i);r||(i=Ye(i),r=n.call(t,i));const o=s.call(t,i);return t.set(i,e),r?sr(e,o)&&Nn(t,"set",i,e):Nn(t,"add",i,e),this}function rc(i){const e=Ye(this),{has:t,get:n}=Ao(e);let s=t.call(e,i);s||(i=Ye(i),s=t.call(e,i)),n&&n.call(e,i);const r=e.delete(i);return s&&Nn(e,"delete",i,void 0),r}function oc(){const i=Ye(this),e=i.size!==0,t=i.clear();return e&&Nn(i,"clear",void 0,void 0),t}function Ir(i,e){return function(n,s){const r=this,o=r.__v_raw,a=Ye(o),l=e?yl:i?Sl:or;return!i&&Ut(a,"iterate",yi),o.forEach((c,u)=>n.call(s,l(c),l(u),r))}}function Pr(i,e,t){return function(...n){const s=this.__v_raw,r=Ye(s),o=ls(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=t?yl:e?Sl:or;return!e&&Ut(r,"iterate",l?Fa:yi),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Un(i){return function(...e){return i==="delete"?!1:this}}function Jf(){const i={get(r){return Cr(this,r)},get size(){return Lr(this)},has:Rr,add:ic,set:sc,delete:rc,clear:oc,forEach:Ir(!1,!1)},e={get(r){return Cr(this,r,!1,!0)},get size(){return Lr(this)},has:Rr,add:ic,set:sc,delete:rc,clear:oc,forEach:Ir(!1,!0)},t={get(r){return Cr(this,r,!0)},get size(){return Lr(this,!0)},has(r){return Rr.call(this,r,!0)},add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear"),forEach:Ir(!0,!1)},n={get(r){return Cr(this,r,!0,!0)},get size(){return Lr(this,!0)},has(r){return Rr.call(this,r,!0)},add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear"),forEach:Ir(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=Pr(r,!1,!1),t[r]=Pr(r,!0,!1),e[r]=Pr(r,!1,!0),n[r]=Pr(r,!0,!0)}),[i,t,e,n]}const[Qf,ep,tp,np]=Jf();function bl(i,e){const t=e?i?np:tp:i?ep:Qf;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(Ge(t,s)&&s in n?t:n,s,r)}const ip={get:bl(!1,!1)},sp={get:bl(!1,!0)},rp={get:bl(!0,!1)},Ph=new WeakMap,Dh=new WeakMap,Fh=new WeakMap,op=new WeakMap;function ap(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lp(i){return i.__v_skip||!Object.isExtensible(i)?0:ap(If(i))}function yr(i){return rr(i)?i:Ml(i,!1,Ih,ip,Ph)}function cp(i){return Ml(i,!1,Zf,sp,Dh)}function Nh(i){return Ml(i,!0,Yf,rp,Fh)}function Ml(i,e,t,n,s){if(!dt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const o=lp(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return s.set(i,a),a}function cs(i){return rr(i)?cs(i.__v_raw):!!(i&&i.__v_isReactive)}function rr(i){return!!(i&&i.__v_isReadonly)}function Oa(i){return!!(i&&i.__v_isShallow)}function Oh(i){return cs(i)||rr(i)}function Ye(i){const e=i&&i.__v_raw;return e?Ye(e):i}function kh(i){return ho(i,"__v_skip",!0),i}const or=i=>dt(i)?yr(i):i,Sl=i=>dt(i)?Nh(i):i;function Uh(i){Jn&&Kt&&(i=Ye(i),Ch(i.dep||(i.dep=_l())))}function Bh(i,e){i=Ye(i),i.dep&&Na(i.dep)}function vt(i){return!!(i&&i.__v_isRef===!0)}function Xs(i){return zh(i,!1)}function up(i){return zh(i,!0)}function zh(i,e){return vt(i)?i:new hp(i,e)}class hp{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ye(e),this._value=t?e:or(e)}get value(){return Uh(this),this._value}set value(e){e=this.__v_isShallow?e:Ye(e),sr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:or(e),Bh(this))}}function Pn(i){return vt(i)?i.value:i}const dp={get:(i,e,t)=>Pn(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return vt(s)&&!vt(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function Vh(i){return cs(i)?i:new Proxy(i,dp)}class fp{constructor(e,t,n,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new xl(e,()=>{this._dirty||(this._dirty=!0,Bh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const e=Ye(this);return Uh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function pp(i,e,t=!1){let n,s;const r=ke(i);return r?(n=i,s=Jt):(n=i.get,s=i.set),new fp(n,s,r||!s,t)}function Qn(i,e,t,n){let s;try{s=n?i(...n):i()}catch(r){Co(r,e,t)}return s}function Qt(i,e,t,n){if(ke(i)){const r=Qn(i,e,t,n);return r&&Mh(r)&&r.catch(o=>{Co(o,e,t)}),r}const s=[];for(let r=0;r<i.length;r++)s.push(Qt(i[r],e,t,n));return s}function Co(i,e,t,n=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Qn(l,null,10,[i,o,a]);return}}mp(i,t,s,n)}function mp(i,e,t,n=!0){console.error(i)}let fo=!1,ka=!1;const Nt=[];let Rn=0;const Zs=[];let $s=null,Qi=0;const Js=[];let $n=null,es=0;const Hh=Promise.resolve();let wl=null,Ua=null;function Gh(i){const e=wl||Hh;return i?e.then(this?i.bind(this):i):e}function gp(i){let e=Rn+1,t=Nt.length;for(;e<t;){const n=e+t>>>1;ar(Nt[n])<i?e=n+1:t=n}return e}function Wh(i){(!Nt.length||!Nt.includes(i,fo&&i.allowRecurse?Rn+1:Rn))&&i!==Ua&&(i.id==null?Nt.push(i):Nt.splice(gp(i.id),0,i),jh())}function jh(){!fo&&!ka&&(ka=!0,wl=Hh.then($h))}function _p(i){const e=Nt.indexOf(i);e>Rn&&Nt.splice(e,1)}function qh(i,e,t,n){De(i)?t.push(...i):(!e||!e.includes(i,i.allowRecurse?n+1:n))&&t.push(i),jh()}function xp(i){qh(i,$s,Zs,Qi)}function vp(i){qh(i,$n,Js,es)}function Ro(i,e=null){if(Zs.length){for(Ua=e,$s=[...new Set(Zs)],Zs.length=0,Qi=0;Qi<$s.length;Qi++)$s[Qi]();$s=null,Qi=0,Ua=null,Ro(i,e)}}function Xh(i){if(Ro(),Js.length){const e=[...new Set(Js)];if(Js.length=0,$n){$n.push(...e);return}for($n=e,$n.sort((t,n)=>ar(t)-ar(n)),es=0;es<$n.length;es++)$n[es]();$n=null,es=0}}const ar=i=>i.id==null?1/0:i.id;function $h(i){ka=!1,fo=!0,Ro(i),Nt.sort((t,n)=>ar(t)-ar(n));const e=Jt;try{for(Rn=0;Rn<Nt.length;Rn++){const t=Nt[Rn];t&&t.active!==!1&&Qn(t,null,14)}}finally{Rn=0,Nt.length=0,Xh(),fo=!1,wl=null,(Nt.length||Zs.length||Js.length)&&$h(i)}}function yp(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||st;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=n[u]||st;d&&(s=t.map(p=>p.trim())),h&&(s=t.map(Ff))}let a,l=n[a=Wo(e)]||n[a=Wo(_n(e))];!l&&r&&(l=n[a=Wo(ws(e))]),l&&Qt(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Qt(c,i,6,s)}}function Kh(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!ke(i)){const l=c=>{const u=Kh(c,e,!0);u&&(a=!0,Et(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(n.set(i,null),null):(De(r)?r.forEach(l=>o[l]=null):Et(o,r),n.set(i,o),o)}function Lo(i,e){return!i||!So(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ge(i,e[0].toLowerCase()+e.slice(1))||Ge(i,ws(e))||Ge(i,e))}let mn=null,Io=null;function po(i){const e=mn;return mn=i,Io=i&&i.type.__scopeId||null,e}function br(i){Io=i}function Mr(){Io=null}function pn(i,e=mn,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&gc(-1);const r=po(e),o=i(...s);return po(r),n._d&&gc(1),o};return n._n=!0,n._c=!0,n._d=!0,n}function qo(i){const{type:e,vnode:t,proxy:n,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:m}=i;let f,_;const M=po(i);try{if(t.shapeFlag&4){const T=s||n;f=dn(u.call(T,T,h,r,p,d,g)),_=l}else{const T=e;f=dn(T.length>1?T(r,{attrs:l,slots:a,emit:c}):T(r,null)),_=e.props?l:bp(l)}}catch(T){Qs.length=0,Co(T,i,1),f=Ne(Ei)}let E=f;if(_&&m!==!1){const T=Object.keys(_),{shapeFlag:w}=E;T.length&&w&7&&(o&&T.some(fl)&&(_=Mp(_,o)),E=ds(E,_))}return t.dirs&&(E=ds(E),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&(E.transition=t.transition),f=E,po(M),f}const bp=i=>{let e;for(const t in i)(t==="class"||t==="style"||So(t))&&((e||(e={}))[t]=i[t]);return e},Mp=(i,e)=>{const t={};for(const n in i)(!fl(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Sp(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?ac(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==n[d]&&!Lo(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?ac(n,o,c):!0:!!o;return!1}function ac(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!Lo(t,r))return!0}return!1}function wp({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const Tp=i=>i.__isSuspense;function Ep(i,e){e&&e.pendingBranch?De(i)?e.effects.push(...i):e.effects.push(i):vp(i)}function so(i,e){if(gt){let t=gt.provides;const n=gt.parent&&gt.parent.provides;n===t&&(t=gt.provides=Object.create(n)),t[i]=e}}function ei(i,e,t=!1){const n=gt||mn;if(n){const s=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(s&&i in s)return s[i];if(arguments.length>1)return t&&ke(e)?e.call(n.proxy):e}}const lc={};function ro(i,e,t){return Yh(i,e,t)}function Yh(i,e,{immediate:t,deep:n,flush:s,onTrack:r,onTrigger:o}=st){const a=gt;let l,c=!1,u=!1;if(vt(i)?(l=()=>i.value,c=Oa(i)):cs(i)?(l=()=>i,n=!0):De(i)?(u=!0,c=i.some(_=>cs(_)||Oa(_)),l=()=>i.map(_=>{if(vt(_))return _.value;if(cs(_))return is(_);if(ke(_))return Qn(_,a,2)})):ke(i)?e?l=()=>Qn(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Qt(i,a,3,[d])}:l=Jt,e&&n){const _=l;l=()=>is(_())}let h,d=_=>{h=f.onStop=()=>{Qn(_,a,4)}};if(ur)return d=Jt,e?t&&Qt(e,a,3,[l(),u?[]:void 0,d]):l(),Jt;let p=u?[]:lc;const g=()=>{if(!!f.active)if(e){const _=f.run();(n||c||(u?_.some((M,E)=>sr(M,p[E])):sr(_,p)))&&(h&&h(),Qt(e,a,3,[_,p===lc?void 0:p,d]),p=_)}else f.run()};g.allowRecurse=!!e;let m;s==="sync"?m=g:s==="post"?m=()=>Lt(g,a&&a.suspense):m=()=>xp(g);const f=new xl(l,m);return e?t?g():p=f.run():s==="post"?Lt(f.run.bind(f),a&&a.suspense):f.run(),()=>{f.stop(),a&&a.scope&&pl(a.scope.effects,f)}}function Ap(i,e,t){const n=this.proxy,s=pt(i)?i.includes(".")?Zh(n,i):()=>n[i]:i.bind(n,n);let r;ke(e)?r=e:(r=e.handler,t=e);const o=gt;fs(this);const a=Yh(s,r.bind(n),t);return o?fs(o):bi(),a}function Zh(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}function is(i,e){if(!dt(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),vt(i))is(i.value,e);else if(De(i))for(let t=0;t<i.length;t++)is(i[t],e);else if(bh(i)||ls(i))i.forEach(t=>{is(t,e)});else if(wh(i))for(const t in i)is(i[t],e);return i}function sn(i){return ke(i)?{setup:i,name:i.name}:i}const oo=i=>!!i.type.__asyncLoader,Jh=i=>i.type.__isKeepAlive;function Cp(i,e){Qh(i,"a",e)}function Rp(i,e){Qh(i,"da",e)}function Qh(i,e,t=gt){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(Po(e,n,t),t){let s=t.parent;for(;s&&s.parent;)Jh(s.parent.vnode)&&Lp(n,e,t,s),s=s.parent}}function Lp(i,e,t,n){const s=Po(e,i,n,!0);El(()=>{pl(n[e],s)},t)}function Po(i,e,t=gt,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ts(),fs(t);const a=Qt(e,t,i,o);return bi(),Es(),a});return n?s.unshift(r):s.push(r),r}}const On=i=>(e,t=gt)=>(!ur||i==="sp")&&Po(i,e,t),Ip=On("bm"),Tl=On("m"),Pp=On("bu"),Dp=On("u"),Fp=On("bum"),El=On("um"),Np=On("sp"),Op=On("rtg"),kp=On("rtc");function Up(i,e=gt){Po("ec",i,e)}function si(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(Ts(),Qt(l,t,8,[i.el,a,i,e]),Es())}}const ed="components";function Al(i,e){return zp(ed,i,!0,e)||i}const Bp=Symbol();function zp(i,e,t=!0,n=!1){const s=mn||gt;if(s){const r=s.type;if(i===ed){const a=mm(r,!1);if(a&&(a===e||a===_n(e)||a===Eo(_n(e))))return r}const o=cc(s[i]||r[i],e)||cc(s.appContext[i],e);return!o&&n?r:o}}function cc(i,e){return i&&(i[e]||i[_n(e)]||i[Eo(_n(e))])}function mo(i,e,t,n){let s;const r=t&&t[n];if(De(i)||pt(i)){s=new Array(i.length);for(let o=0,a=i.length;o<a;o++)s[o]=e(i[o],o,void 0,r&&r[o])}else if(typeof i=="number"){s=new Array(i);for(let o=0;o<i;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(dt(i))if(i[Symbol.iterator])s=Array.from(i,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(i);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(i[c],c,a,r&&r[a])}}else s=[];return t&&(t[n]=s),s}const Ba=i=>i?dd(i)?Il(i)||i.proxy:Ba(i.parent):null,go=Et(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Ba(i.parent),$root:i=>Ba(i.root),$emit:i=>i.emit,$options:i=>nd(i),$forceUpdate:i=>i.f||(i.f=()=>Wh(i.update)),$nextTick:i=>i.n||(i.n=Gh.bind(i.proxy)),$watch:i=>Ap.bind(i)}),Vp={get({_:i},e){const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(n!==st&&Ge(n,e))return o[e]=1,n[e];if(s!==st&&Ge(s,e))return o[e]=2,s[e];if((c=i.propsOptions[0])&&Ge(c,e))return o[e]=3,r[e];if(t!==st&&Ge(t,e))return o[e]=4,t[e];za&&(o[e]=0)}}const u=go[e];let h,d;if(u)return e==="$attrs"&&Ut(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==st&&Ge(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,Ge(d,e))return d[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return s!==st&&Ge(s,e)?(s[e]=t,!0):n!==st&&Ge(n,e)?(n[e]=t,!0):Ge(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},o){let a;return!!t[o]||i!==st&&Ge(i,o)||e!==st&&Ge(e,o)||(a=r[0])&&Ge(a,o)||Ge(n,o)||Ge(go,o)||Ge(s.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Ge(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let za=!0;function Hp(i){const e=nd(i),t=i.proxy,n=i.ctx;za=!1,e.beforeCreate&&uc(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:m,deactivated:f,beforeDestroy:_,beforeUnmount:M,destroyed:E,unmounted:T,render:w,renderTracked:I,renderTriggered:F,errorCaptured:b,serverPrefetch:C,expose:X,inheritAttrs:z,components:de,directives:oe,filters:O}=e;if(c&&Gp(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const j in o){const q=o[j];ke(q)&&(n[j]=q.bind(t))}if(s){const j=s.call(t,t);dt(j)&&(i.data=yr(j))}if(za=!0,r)for(const j in r){const q=r[j],G=ke(q)?q.bind(t,t):ke(q.get)?q.get.bind(t,t):Jt,Z=!ke(q)&&ke(q.set)?q.set.bind(t):Jt,le=Ot({get:G,set:Z});Object.defineProperty(n,j,{enumerable:!0,configurable:!0,get:()=>le.value,set:ie=>le.value=ie})}if(a)for(const j in a)td(a[j],n,t,j);if(l){const j=ke(l)?l.call(t):l;Reflect.ownKeys(j).forEach(q=>{so(q,j[q])})}u&&uc(u,i,"c");function V(j,q){De(q)?q.forEach(G=>j(G.bind(t))):q&&j(q.bind(t))}if(V(Ip,h),V(Tl,d),V(Pp,p),V(Dp,g),V(Cp,m),V(Rp,f),V(Up,b),V(kp,I),V(Op,F),V(Fp,M),V(El,T),V(Np,C),De(X))if(X.length){const j=i.exposed||(i.exposed={});X.forEach(q=>{Object.defineProperty(j,q,{get:()=>t[q],set:G=>t[q]=G})})}else i.exposed||(i.exposed={});w&&i.render===Jt&&(i.render=w),z!=null&&(i.inheritAttrs=z),de&&(i.components=de),oe&&(i.directives=oe)}function Gp(i,e,t=Jt,n=!1){De(i)&&(i=Va(i));for(const s in i){const r=i[s];let o;dt(r)?"default"in r?o=ei(r.from||s,r.default,!0):o=ei(r.from||s):o=ei(r),vt(o)&&n?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function uc(i,e,t){Qt(De(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function td(i,e,t,n){const s=n.includes(".")?Zh(t,n):()=>t[n];if(pt(i)){const r=e[i];ke(r)&&ro(s,r)}else if(ke(i))ro(s,i.bind(t));else if(dt(i))if(De(i))i.forEach(r=>td(r,e,t,n));else{const r=ke(i.handler)?i.handler.bind(t):e[i.handler];ke(r)&&ro(s,r,i)}}function nd(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>_o(l,c,o,!0)),_o(l,e,o)),r.set(e,l),l}function _o(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&_o(i,r,t,!0),s&&s.forEach(o=>_o(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Wp[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Wp={data:hc,props:ui,emits:ui,methods:ui,computed:ui,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:ui,directives:ui,watch:qp,provide:hc,inject:jp};function hc(i,e){return e?i?function(){return Et(ke(i)?i.call(this,this):i,ke(e)?e.call(this,this):e)}:e:i}function jp(i,e){return ui(Va(i),Va(e))}function Va(i){if(De(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function St(i,e){return i?[...new Set([].concat(i,e))]:e}function ui(i,e){return i?Et(Et(Object.create(null),i),e):e}function qp(i,e){if(!i)return e;if(!e)return i;const t=Et(Object.create(null),i);for(const n in e)t[n]=St(i[n],e[n]);return t}function Xp(i,e,t,n=!1){const s={},r={};ho(r,Do,1),i.propsDefaults=Object.create(null),id(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:cp(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function $p(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=Ye(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Lo(i.emitsOptions,d))continue;const p=e[d];if(l)if(Ge(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=_n(d);s[g]=Ha(l,a,g,p,i,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{id(i,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Ge(e,h)&&((u=ws(h))===h||!Ge(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Ha(l,a,h,void 0,i,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Ge(e,h)&&!0)&&(delete r[h],c=!0)}c&&Nn(i,"set","$attrs")}function id(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(io(l))continue;const c=e[l];let u;s&&Ge(s,u=_n(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Lo(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=Ye(t),c=a||st;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Ha(s,l,h,c[h],i,!Ge(c,h))}}return o}function Ha(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=Ge(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&ke(l)){const{propsDefaults:c}=s;t in c?n=c[t]:(fs(s),n=c[t]=l.call(null,e),bi())}else n=l}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===ws(t))&&(n=!0))}return n}function sd(i,e,t=!1){const n=e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!ke(i)){const u=h=>{l=!0;const[d,p]=sd(h,e,!0);Et(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return n.set(i,as),as;if(De(r))for(let u=0;u<r.length;u++){const h=_n(r[u]);dc(h)&&(o[h]=st)}else if(r)for(const u in r){const h=_n(u);if(dc(h)){const d=r[u],p=o[h]=De(d)||ke(d)?{type:d}:d;if(p){const g=mc(Boolean,p.type),m=mc(String,p.type);p[0]=g>-1,p[1]=m<0||g<m,(g>-1||Ge(p,"default"))&&a.push(h)}}}const c=[o,a];return n.set(i,c),c}function dc(i){return i[0]!=="$"}function fc(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function pc(i,e){return fc(i)===fc(e)}function mc(i,e){return De(e)?e.findIndex(t=>pc(t,i)):ke(e)&&pc(e,i)?0:-1}const rd=i=>i[0]==="_"||i==="$stable",Cl=i=>De(i)?i.map(dn):[dn(i)],Kp=(i,e,t)=>{if(e._n)return e;const n=pn((...s)=>Cl(e(...s)),t);return n._c=!1,n},od=(i,e,t)=>{const n=i._ctx;for(const s in i){if(rd(s))continue;const r=i[s];if(ke(r))e[s]=Kp(s,r,n);else if(r!=null){const o=Cl(r);e[s]=()=>o}}},ad=(i,e)=>{const t=Cl(e);i.slots.default=()=>t},Yp=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Ye(e),ho(e,"_",t)):od(e,i.slots={})}else i.slots={},e&&ad(i,e);ho(i.slots,Do,1)},Zp=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=st;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(Et(s,e),!t&&a===1&&delete s._):(r=!e.$stable,od(e,s)),o=e}else e&&(ad(i,e),o={default:1});if(r)for(const a in s)!rd(a)&&!(a in o)&&delete s[a]};function ld(){return{app:null,config:{isNativeTag:Cf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jp=0;function Qp(i,e){return function(n,s=null){ke(n)||(n=Object.assign({},n)),s!=null&&!dt(s)&&(s=null);const r=ld(),o=new Set;let a=!1;const l=r.app={_uid:Jp++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:_m,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ke(c.install)?(o.add(c),c.install(l,...u)):ke(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Ne(n,s);return d.appContext=r,u&&e?e(d,c):i(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Il(d.component)||d.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Ga(i,e,t,n,s=!1){if(De(i)){i.forEach((d,p)=>Ga(d,e&&(De(e)?e[p]:e),t,n,s));return}if(oo(n)&&!s)return;const r=n.shapeFlag&4?Il(n.component)||n.component.proxy:n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,u=a.refs===st?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(pt(c)?(u[c]=null,Ge(h,c)&&(h[c]=null)):vt(c)&&(c.value=null)),ke(l))Qn(l,a,12,[o,u]);else{const d=pt(l),p=vt(l);if(d||p){const g=()=>{if(i.f){const m=d?u[l]:l.value;s?De(m)&&pl(m,r):De(m)?m.includes(r)||m.push(r):d?(u[l]=[r],Ge(h,l)&&(h[l]=u[l])):(l.value=[r],i.k&&(u[i.k]=l.value))}else d?(u[l]=o,Ge(h,l)&&(h[l]=o)):p&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Lt(g,t)):g()}}}const Lt=Ep;function em(i){return tm(i)}function tm(i,e){const t=Nf();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Jt,cloneNode:g,insertStaticContent:m}=i,f=(y,A,U,J=null,Q=null,ne=null,re=!1,ce=null,fe=!!A.dynamicChildren)=>{if(y===A)return;y&&!Us(y,A)&&(J=ue(y),se(y,Q,ne,!0),y=null),A.patchFlag===-2&&(fe=!1,A.dynamicChildren=null);const{type:v,ref:x,shapeFlag:P}=A;switch(v){case Rl:_(y,A,U,J);break;case Ei:M(y,A,U,J);break;case ao:y==null&&E(A,U,J,re);break;case Ft:oe(y,A,U,J,Q,ne,re,ce,fe);break;default:P&1?I(y,A,U,J,Q,ne,re,ce,fe):P&6?O(y,A,U,J,Q,ne,re,ce,fe):(P&64||P&128)&&v.process(y,A,U,J,Q,ne,re,ce,fe,he)}x!=null&&Q&&Ga(x,y&&y.ref,ne,A||y,!A)},_=(y,A,U,J)=>{if(y==null)n(A.el=a(A.children),U,J);else{const Q=A.el=y.el;A.children!==y.children&&c(Q,A.children)}},M=(y,A,U,J)=>{y==null?n(A.el=l(A.children||""),U,J):A.el=y.el},E=(y,A,U,J)=>{[y.el,y.anchor]=m(y.children,A,U,J,y.el,y.anchor)},T=({el:y,anchor:A},U,J)=>{let Q;for(;y&&y!==A;)Q=d(y),n(y,U,J),y=Q;n(A,U,J)},w=({el:y,anchor:A})=>{let U;for(;y&&y!==A;)U=d(y),s(y),y=U;s(A)},I=(y,A,U,J,Q,ne,re,ce,fe)=>{re=re||A.type==="svg",y==null?F(A,U,J,Q,ne,re,ce,fe):X(y,A,Q,ne,re,ce,fe)},F=(y,A,U,J,Q,ne,re,ce)=>{let fe,v;const{type:x,props:P,shapeFlag:H,transition:K,patchFlag:te,dirs:Se}=y;if(y.el&&g!==void 0&&te===-1)fe=y.el=g(y.el);else{if(fe=y.el=o(y.type,ne,P&&P.is,P),H&8?u(fe,y.children):H&16&&C(y.children,fe,null,J,Q,ne&&x!=="foreignObject",re,ce),Se&&si(y,null,J,"created"),P){for(const _e in P)_e!=="value"&&!io(_e)&&r(fe,_e,null,P[_e],ne,y.children,J,Q,ae);"value"in P&&r(fe,"value",null,P.value),(v=P.onVnodeBeforeMount)&&cn(v,J,y)}b(fe,y,y.scopeId,re,J)}Se&&si(y,null,J,"beforeMount");const k=(!Q||Q&&!Q.pendingBranch)&&K&&!K.persisted;k&&K.beforeEnter(fe),n(fe,A,U),((v=P&&P.onVnodeMounted)||k||Se)&&Lt(()=>{v&&cn(v,J,y),k&&K.enter(fe),Se&&si(y,null,J,"mounted")},Q)},b=(y,A,U,J,Q)=>{if(U&&p(y,U),J)for(let ne=0;ne<J.length;ne++)p(y,J[ne]);if(Q){let ne=Q.subTree;if(A===ne){const re=Q.vnode;b(y,re,re.scopeId,re.slotScopeIds,Q.parent)}}},C=(y,A,U,J,Q,ne,re,ce,fe=0)=>{for(let v=fe;v<y.length;v++){const x=y[v]=ce?Kn(y[v]):dn(y[v]);f(null,x,A,U,J,Q,ne,re,ce)}},X=(y,A,U,J,Q,ne,re)=>{const ce=A.el=y.el;let{patchFlag:fe,dynamicChildren:v,dirs:x}=A;fe|=y.patchFlag&16;const P=y.props||st,H=A.props||st;let K;U&&ri(U,!1),(K=H.onVnodeBeforeUpdate)&&cn(K,U,A,y),x&&si(A,y,U,"beforeUpdate"),U&&ri(U,!0);const te=Q&&A.type!=="foreignObject";if(v?z(y.dynamicChildren,v,ce,U,J,te,ne):re||G(y,A,ce,null,U,J,te,ne,!1),fe>0){if(fe&16)de(ce,A,P,H,U,J,Q);else if(fe&2&&P.class!==H.class&&r(ce,"class",null,H.class,Q),fe&4&&r(ce,"style",P.style,H.style,Q),fe&8){const Se=A.dynamicProps;for(let k=0;k<Se.length;k++){const _e=Se[k],be=P[_e],Me=H[_e];(Me!==be||_e==="value")&&r(ce,_e,be,Me,Q,y.children,U,J,ae)}}fe&1&&y.children!==A.children&&u(ce,A.children)}else!re&&v==null&&de(ce,A,P,H,U,J,Q);((K=H.onVnodeUpdated)||x)&&Lt(()=>{K&&cn(K,U,A,y),x&&si(A,y,U,"updated")},J)},z=(y,A,U,J,Q,ne,re)=>{for(let ce=0;ce<A.length;ce++){const fe=y[ce],v=A[ce],x=fe.el&&(fe.type===Ft||!Us(fe,v)||fe.shapeFlag&70)?h(fe.el):U;f(fe,v,x,null,J,Q,ne,re,!0)}},de=(y,A,U,J,Q,ne,re)=>{if(U!==J){for(const ce in J){if(io(ce))continue;const fe=J[ce],v=U[ce];fe!==v&&ce!=="value"&&r(y,ce,v,fe,re,A.children,Q,ne,ae)}if(U!==st)for(const ce in U)!io(ce)&&!(ce in J)&&r(y,ce,U[ce],null,re,A.children,Q,ne,ae);"value"in J&&r(y,"value",U.value,J.value)}},oe=(y,A,U,J,Q,ne,re,ce,fe)=>{const v=A.el=y?y.el:a(""),x=A.anchor=y?y.anchor:a("");let{patchFlag:P,dynamicChildren:H,slotScopeIds:K}=A;K&&(ce=ce?ce.concat(K):K),y==null?(n(v,U,J),n(x,U,J),C(A.children,U,x,Q,ne,re,ce,fe)):P>0&&P&64&&H&&y.dynamicChildren?(z(y.dynamicChildren,H,U,Q,ne,re,ce),(A.key!=null||Q&&A===Q.subTree)&&cd(y,A,!0)):G(y,A,U,x,Q,ne,re,ce,fe)},O=(y,A,U,J,Q,ne,re,ce,fe)=>{A.slotScopeIds=ce,y==null?A.shapeFlag&512?Q.ctx.activate(A,U,J,re,fe):Y(A,U,J,Q,ne,re,fe):V(y,A,fe)},Y=(y,A,U,J,Q,ne,re)=>{const ce=y.component=um(y,J,Q);if(Jh(y)&&(ce.ctx.renderer=he),hm(ce),ce.asyncDep){if(Q&&Q.registerDep(ce,j),!y.el){const fe=ce.subTree=Ne(Ei);M(null,fe,A,U)}return}j(ce,y,A,U,Q,ne,re)},V=(y,A,U)=>{const J=A.component=y.component;if(Sp(y,A,U))if(J.asyncDep&&!J.asyncResolved){q(J,A,U);return}else J.next=A,_p(J.update),J.update();else A.el=y.el,J.vnode=A},j=(y,A,U,J,Q,ne,re)=>{const ce=()=>{if(y.isMounted){let{next:x,bu:P,u:H,parent:K,vnode:te}=y,Se=x,k;ri(y,!1),x?(x.el=te.el,q(y,x,re)):x=te,P&&jo(P),(k=x.props&&x.props.onVnodeBeforeUpdate)&&cn(k,K,x,te),ri(y,!0);const _e=qo(y),be=y.subTree;y.subTree=_e,f(be,_e,h(be.el),ue(be),y,Q,ne),x.el=_e.el,Se===null&&wp(y,_e.el),H&&Lt(H,Q),(k=x.props&&x.props.onVnodeUpdated)&&Lt(()=>cn(k,K,x,te),Q)}else{let x;const{el:P,props:H}=A,{bm:K,m:te,parent:Se}=y,k=oo(A);if(ri(y,!1),K&&jo(K),!k&&(x=H&&H.onVnodeBeforeMount)&&cn(x,Se,A),ri(y,!0),P&&xe){const _e=()=>{y.subTree=qo(y),xe(P,y.subTree,y,Q,null)};k?A.type.__asyncLoader().then(()=>!y.isUnmounted&&_e()):_e()}else{const _e=y.subTree=qo(y);f(null,_e,U,J,y,Q,ne),A.el=_e.el}if(te&&Lt(te,Q),!k&&(x=H&&H.onVnodeMounted)){const _e=A;Lt(()=>cn(x,Se,_e),Q)}(A.shapeFlag&256||Se&&oo(Se.vnode)&&Se.vnode.shapeFlag&256)&&y.a&&Lt(y.a,Q),y.isMounted=!0,A=U=J=null}},fe=y.effect=new xl(ce,()=>Wh(v),y.scope),v=y.update=()=>fe.run();v.id=y.uid,ri(y,!0),v()},q=(y,A,U)=>{A.component=y;const J=y.vnode.props;y.vnode=A,y.next=null,$p(y,A.props,J,U),Zp(y,A.children,U),Ts(),Ro(void 0,y.update),Es()},G=(y,A,U,J,Q,ne,re,ce,fe=!1)=>{const v=y&&y.children,x=y?y.shapeFlag:0,P=A.children,{patchFlag:H,shapeFlag:K}=A;if(H>0){if(H&128){le(v,P,U,J,Q,ne,re,ce,fe);return}else if(H&256){Z(v,P,U,J,Q,ne,re,ce,fe);return}}K&8?(x&16&&ae(v,Q,ne),P!==v&&u(U,P)):x&16?K&16?le(v,P,U,J,Q,ne,re,ce,fe):ae(v,Q,ne,!0):(x&8&&u(U,""),K&16&&C(P,U,J,Q,ne,re,ce,fe))},Z=(y,A,U,J,Q,ne,re,ce,fe)=>{y=y||as,A=A||as;const v=y.length,x=A.length,P=Math.min(v,x);let H;for(H=0;H<P;H++){const K=A[H]=fe?Kn(A[H]):dn(A[H]);f(y[H],K,U,null,Q,ne,re,ce,fe)}v>x?ae(y,Q,ne,!0,!1,P):C(A,U,J,Q,ne,re,ce,fe,P)},le=(y,A,U,J,Q,ne,re,ce,fe)=>{let v=0;const x=A.length;let P=y.length-1,H=x-1;for(;v<=P&&v<=H;){const K=y[v],te=A[v]=fe?Kn(A[v]):dn(A[v]);if(Us(K,te))f(K,te,U,null,Q,ne,re,ce,fe);else break;v++}for(;v<=P&&v<=H;){const K=y[P],te=A[H]=fe?Kn(A[H]):dn(A[H]);if(Us(K,te))f(K,te,U,null,Q,ne,re,ce,fe);else break;P--,H--}if(v>P){if(v<=H){const K=H+1,te=K<x?A[K].el:J;for(;v<=H;)f(null,A[v]=fe?Kn(A[v]):dn(A[v]),U,te,Q,ne,re,ce,fe),v++}}else if(v>H)for(;v<=P;)se(y[v],Q,ne,!0),v++;else{const K=v,te=v,Se=new Map;for(v=te;v<=H;v++){const Ce=A[v]=fe?Kn(A[v]):dn(A[v]);Ce.key!=null&&Se.set(Ce.key,v)}let k,_e=0;const be=H-te+1;let Me=!1,R=0;const me=new Array(be);for(v=0;v<be;v++)me[v]=0;for(v=K;v<=P;v++){const Ce=y[v];if(_e>=be){se(Ce,Q,ne,!0);continue}let ye;if(Ce.key!=null)ye=Se.get(Ce.key);else for(k=te;k<=H;k++)if(me[k-te]===0&&Us(Ce,A[k])){ye=k;break}ye===void 0?se(Ce,Q,ne,!0):(me[ye-te]=v+1,ye>=R?R=ye:Me=!0,f(Ce,A[ye],U,null,Q,ne,re,ce,fe),_e++)}const ge=Me?nm(me):as;for(k=ge.length-1,v=be-1;v>=0;v--){const Ce=te+v,ye=A[Ce],Re=Ce+1<x?A[Ce+1].el:J;me[v]===0?f(null,ye,U,Re,Q,ne,re,ce,fe):Me&&(k<0||v!==ge[k]?ie(ye,U,Re,2):k--)}}},ie=(y,A,U,J,Q=null)=>{const{el:ne,type:re,transition:ce,children:fe,shapeFlag:v}=y;if(v&6){ie(y.component.subTree,A,U,J);return}if(v&128){y.suspense.move(A,U,J);return}if(v&64){re.move(y,A,U,he);return}if(re===Ft){n(ne,A,U);for(let P=0;P<fe.length;P++)ie(fe[P],A,U,J);n(y.anchor,A,U);return}if(re===ao){T(y,A,U);return}if(J!==2&&v&1&&ce)if(J===0)ce.beforeEnter(ne),n(ne,A,U),Lt(()=>ce.enter(ne),Q);else{const{leave:P,delayLeave:H,afterLeave:K}=ce,te=()=>n(ne,A,U),Se=()=>{P(ne,()=>{te(),K&&K()})};H?H(ne,te,Se):Se()}else n(ne,A,U)},se=(y,A,U,J=!1,Q=!1)=>{const{type:ne,props:re,ref:ce,children:fe,dynamicChildren:v,shapeFlag:x,patchFlag:P,dirs:H}=y;if(ce!=null&&Ga(ce,null,U,y,!0),x&256){A.ctx.deactivate(y);return}const K=x&1&&H,te=!oo(y);let Se;if(te&&(Se=re&&re.onVnodeBeforeUnmount)&&cn(Se,A,y),x&6)D(y.component,U,J);else{if(x&128){y.suspense.unmount(U,J);return}K&&si(y,null,A,"beforeUnmount"),x&64?y.type.remove(y,A,U,Q,he,J):v&&(ne!==Ft||P>0&&P&64)?ae(v,A,U,!1,!0):(ne===Ft&&P&384||!Q&&x&16)&&ae(fe,A,U),J&&Ee(y)}(te&&(Se=re&&re.onVnodeUnmounted)||K)&&Lt(()=>{Se&&cn(Se,A,y),K&&si(y,null,A,"unmounted")},U)},Ee=y=>{const{type:A,el:U,anchor:J,transition:Q}=y;if(A===Ft){N(U,J);return}if(A===ao){w(y);return}const ne=()=>{s(U),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(y.shapeFlag&1&&Q&&!Q.persisted){const{leave:re,delayLeave:ce}=Q,fe=()=>re(U,ne);ce?ce(y.el,ne,fe):fe()}else ne()},N=(y,A)=>{let U;for(;y!==A;)U=d(y),s(y),y=U;s(A)},D=(y,A,U)=>{const{bum:J,scope:Q,update:ne,subTree:re,um:ce}=y;J&&jo(J),Q.stop(),ne&&(ne.active=!1,se(re,y,A,U)),ce&&Lt(ce,A),Lt(()=>{y.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},ae=(y,A,U,J=!1,Q=!1,ne=0)=>{for(let re=ne;re<y.length;re++)se(y[re],A,U,J,Q)},ue=y=>y.shapeFlag&6?ue(y.component.subTree):y.shapeFlag&128?y.suspense.next():d(y.anchor||y.el),we=(y,A,U)=>{y==null?A._vnode&&se(A._vnode,null,null,!0):f(A._vnode||null,y,A,null,null,null,U),Xh(),A._vnode=y},he={p:f,um:se,m:ie,r:Ee,mt:Y,mc:C,pc:G,pbc:z,n:ue,o:i};let Te,xe;return e&&([Te,xe]=e(he)),{render:we,hydrate:Te,createApp:Qp(we,Te)}}function ri({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function cd(i,e,t=!1){const n=i.children,s=e.children;if(De(n)&&De(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Kn(s[r]),a.el=o.el),t||cd(o,a))}}function nm(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const im=i=>i.__isTeleport,Ft=Symbol(void 0),Rl=Symbol(void 0),Ei=Symbol(void 0),ao=Symbol(void 0),Qs=[];let Yt=null;function it(i=!1){Qs.push(Yt=i?null:[])}function sm(){Qs.pop(),Yt=Qs[Qs.length-1]||null}let lr=1;function gc(i){lr+=i}function ud(i){return i.dynamicChildren=lr>0?Yt||as:null,sm(),lr>0&&Yt&&Yt.push(i),i}function at(i,e,t,n,s,r){return ud(Ae(i,e,t,n,s,r,!0))}function cr(i,e,t,n,s){return ud(Ne(i,e,t,n,s,!0))}function Wa(i){return i?i.__v_isVNode===!0:!1}function Us(i,e){return i.type===e.type&&i.key===e.key}const Do="__vInternal",hd=({key:i})=>i!=null?i:null,lo=({ref:i,ref_key:e,ref_for:t})=>i!=null?pt(i)||vt(i)||ke(i)?{i:mn,r:i,k:e,f:!!t}:i:null;function Ae(i,e=null,t=null,n=0,s=null,r=i===Ft?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&hd(e),ref:e&&lo(e),scopeId:Io,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ll(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=pt(t)?8:16),lr>0&&!o&&Yt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Yt.push(l),l}const Ne=rm;function rm(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===Bp)&&(i=Ei),Wa(i)){const a=ds(i,e,!0);return t&&Ll(a,t),lr>0&&!r&&Yt&&(a.shapeFlag&6?Yt[Yt.indexOf(i)]=a:Yt.push(a)),a.patchFlag|=-2,a}if(gm(i)&&(i=i.__vccOpts),e){e=om(e);let{class:a,style:l}=e;a&&!pt(a)&&(e.class=Mo(a)),dt(l)&&(Oh(l)&&!De(l)&&(l=Et({},l)),e.style=vr(l))}const o=pt(i)?1:Tp(i)?128:im(i)?64:dt(i)?4:ke(i)?2:0;return Ae(i,e,t,n,s,o,r,!0)}function om(i){return i?Oh(i)||Do in i?Et({},i):i:null}function ds(i,e,t=!1){const{props:n,ref:s,patchFlag:r,children:o}=i,a=e?am(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&hd(a),ref:e&&e.ref?t&&s?De(s)?s.concat(lo(e)):[s,lo(e)]:lo(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Ft?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&ds(i.ssContent),ssFallback:i.ssFallback&&ds(i.ssFallback),el:i.el,anchor:i.anchor}}function Sr(i=" ",e=0){return Ne(Rl,null,i,e)}function Fo(i,e){const t=Ne(ao,null,i);return t.staticCount=e,t}function oi(i="",e=!1){return e?(it(),cr(Ei,null,i)):Ne(Ei,null,i)}function dn(i){return i==null||typeof i=="boolean"?Ne(Ei):De(i)?Ne(Ft,null,i.slice()):typeof i=="object"?Kn(i):Ne(Rl,null,String(i))}function Kn(i){return i.el===null||i.memo?i:ds(i)}function Ll(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(De(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),Ll(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Do in e)?e._ctx=mn:s===3&&mn&&(mn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:mn},t=32):(e=String(e),n&64?(t=16,e=[Sr(e)]):t=8);i.children=e,i.shapeFlag|=t}function am(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=Mo([e.class,n.class]));else if(s==="style")e.style=vr([e.style,n.style]);else if(So(s)){const r=e[s],o=n[s];o&&r!==o&&!(De(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function cn(i,e,t,n=null){Qt(i,e,7,[t,n])}const lm=ld();let cm=0;function um(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||lm,r={uid:cm++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Of(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sd(n,s),emitsOptions:Kh(n,s),emit:null,emitted:null,propsDefaults:st,inheritAttrs:n.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=yp.bind(null,r),i.ce&&i.ce(r),r}let gt=null;const fs=i=>{gt=i,i.scope.on()},bi=()=>{gt&&gt.scope.off(),gt=null};function dd(i){return i.vnode.shapeFlag&4}let ur=!1;function hm(i,e=!1){ur=e;const{props:t,children:n}=i.vnode,s=dd(i);Xp(i,t,s,e),Yp(i,n);const r=s?dm(i,e):void 0;return ur=!1,r}function dm(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=kh(new Proxy(i.ctx,Vp));const{setup:n}=t;if(n){const s=i.setupContext=n.length>1?pm(i):null;fs(i),Ts();const r=Qn(n,i,0,[i.props,s]);if(Es(),bi(),Mh(r)){if(r.then(bi,bi),e)return r.then(o=>{_c(i,o,e)}).catch(o=>{Co(o,i,0)});i.asyncDep=r}else _c(i,r,e)}else fd(i,e)}function _c(i,e,t){ke(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:dt(e)&&(i.setupState=Vh(e)),fd(i,t)}let xc;function fd(i,e,t){const n=i.type;if(!i.render){if(!e&&xc&&!n.render){const s=n.template;if(s){const{isCustomElement:r,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Et(Et({isCustomElement:r,delimiters:a},o),l);n.render=xc(s,c)}}i.render=n.render||Jt}fs(i),Ts(),Hp(i),Es(),bi()}function fm(i){return new Proxy(i.attrs,{get(e,t){return Ut(i,"get","$attrs"),e[t]}})}function pm(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=fm(i))},slots:i.slots,emit:i.emit,expose:e}}function Il(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Vh(kh(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in go)return go[t](i)}}))}function mm(i,e=!0){return ke(i)?i.displayName||i.name:i.name||e&&i.__name}function gm(i){return ke(i)&&"__vccOpts"in i}const Ot=(i,e)=>pp(i,e,ur);function pd(i,e,t){const n=arguments.length;return n===2?dt(e)&&!De(e)?Wa(e)?Ne(i,null,[e]):Ne(i,e):Ne(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Wa(t)&&(t=[t]),Ne(i,e,t))}const _m="3.2.37",xm="http://www.w3.org/2000/svg",pi=typeof document<"u"?document:null,vc=pi&&pi.createElement("template"),vm={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e?pi.createElementNS(xm,i):pi.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>pi.createTextNode(i),createComment:i=>pi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>pi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},cloneNode(i){const e=i.cloneNode(!0);return"_value"in i&&(e._value=i._value),e},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{vc.innerHTML=n?`<svg>${i}</svg>`:i;const a=vc.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function ym(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function bm(i,e,t){const n=i.style,s=pt(t);if(t&&!s){for(const r in t)ja(n,r,t[r]);if(e&&!pt(e))for(const r in e)t[r]==null&&ja(n,r,"")}else{const r=n.display;s?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=r)}}const yc=/\s*!important$/;function ja(i,e,t){if(De(t))t.forEach(n=>ja(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=Mm(i,e);yc.test(t)?i.setProperty(ws(n),t.replace(yc,""),"important"):i[n]=t}}const bc=["Webkit","Moz","ms"],Xo={};function Mm(i,e){const t=Xo[e];if(t)return t;let n=_n(e);if(n!=="filter"&&n in i)return Xo[e]=n;n=Eo(n);for(let s=0;s<bc.length;s++){const r=bc[s]+n;if(r in i)return Xo[e]=r}return e}const Mc="http://www.w3.org/1999/xlink";function Sm(i,e,t,n,s){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Mc,e.slice(6,e.length)):i.setAttributeNS(Mc,e,t);else{const r=wf(e);t==null||r&&!vh(t)?i.removeAttribute(e):i.setAttribute(e,r?"":t)}}function wm(i,e,t,n,s,r,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,s,r),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t==null?"":t;(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=vh(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}const[md,Tm]=(()=>{let i=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(i=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[i,e]})();let qa=0;const Em=Promise.resolve(),Am=()=>{qa=0},Cm=()=>qa||(Em.then(Am),qa=md());function Rm(i,e,t,n){i.addEventListener(e,t,n)}function Lm(i,e,t,n){i.removeEventListener(e,t,n)}function Im(i,e,t,n,s=null){const r=i._vei||(i._vei={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=Pm(e);if(n){const c=r[e]=Dm(n,s);Rm(i,a,c,l)}else o&&(Lm(i,a,o,l),r[e]=void 0)}}const Sc=/(?:Once|Passive|Capture)$/;function Pm(i){let e;if(Sc.test(i)){e={};let t;for(;t=i.match(Sc);)i=i.slice(0,i.length-t[0].length),e[t[0].toLowerCase()]=!0}return[ws(i.slice(2)),e]}function Dm(i,e){const t=n=>{const s=n.timeStamp||md();(Tm||s>=t.attached-1)&&Qt(Fm(n,t.value),e,5,[n])};return t.value=i,t.attached=Cm(),t}function Fm(i,e){if(De(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const wc=/^on[a-z]/,Nm=(i,e,t,n,s=!1,r,o,a,l)=>{e==="class"?ym(i,n,s):e==="style"?bm(i,t,n):So(e)?fl(e)||Im(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Om(i,e,n,s))?wm(i,e,n,r,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Sm(i,e,n,s))};function Om(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&wc.test(e)&&ke(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||wc.test(e)&&pt(t)?!1:e in i}const km=["ctrl","shift","alt","meta"],Um={stop:i=>i.stopPropagation(),prevent:i=>i.preventDefault(),self:i=>i.target!==i.currentTarget,ctrl:i=>!i.ctrlKey,shift:i=>!i.shiftKey,alt:i=>!i.altKey,meta:i=>!i.metaKey,left:i=>"button"in i&&i.button!==0,middle:i=>"button"in i&&i.button!==1,right:i=>"button"in i&&i.button!==2,exact:(i,e)=>km.some(t=>i[`${t}Key`]&&!e.includes(t))},Bm=(i,e)=>(t,...n)=>{for(let s=0;s<e.length;s++){const r=Um[e[s]];if(r&&r(t,e))return}return i(t,...n)},zm=Et({patchProp:Nm},vm);let Tc;function Vm(){return Tc||(Tc=em(zm))}const Hm=(...i)=>{const e=Vm().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=Gm(n);if(!s)return;const r=e._component;!ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Gm(i){return pt(i)?document.querySelector(i):i}/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ts=typeof window<"u";function Wm(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const nt=Object.assign;function $o(i,e){const t={};for(const n in e){const s=e[n];t[n]=nn(s)?s.map(i):i(s)}return t}const er=()=>{},nn=Array.isArray,jm=/\/$/,qm=i=>i.replace(jm,"");function Ko(i,e,t="/"){let n,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=i(r)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=Ym(n!=null?n:e,t),{fullPath:n+(r&&"?")+r+o,path:n,query:s,hash:o}}function Xm(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Ec(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function $m(i,e,t){const n=e.matched.length-1,s=t.matched.length-1;return n>-1&&n===s&&ps(e.matched[n],t.matched[s])&&gd(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function ps(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function gd(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!Km(i[t],e[t]))return!1;return!0}function Km(i,e){return nn(i)?Ac(i,e):nn(e)?Ac(e,i):i===e}function Ac(i,e){return nn(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function Ym(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/");let s=t.length-1,r,o;for(r=0;r<n.length;r++)if(o=n[r],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+n.slice(r-(r===n.length?1:0)).join("/")}var hr;(function(i){i.pop="pop",i.push="push"})(hr||(hr={}));var tr;(function(i){i.back="back",i.forward="forward",i.unknown=""})(tr||(tr={}));function Zm(i){if(!i)if(ts){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),qm(i)}const Jm=/^[^#]+#/;function Qm(i,e){return i.replace(Jm,"#")+e}function eg(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const No=()=>({left:window.pageXOffset,top:window.pageYOffset});function tg(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=eg(s,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Cc(i,e){return(history.state?history.state.position-e:-1)+i}const Xa=new Map;function ng(i,e){Xa.set(i,e)}function ig(i){const e=Xa.get(i);return Xa.delete(i),e}let sg=()=>location.protocol+"//"+location.host;function _d(i,e){const{pathname:t,search:n,hash:s}=e,r=i.indexOf("#");if(r>-1){let a=s.includes(i.slice(r))?i.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Ec(l,"")}return Ec(t,i)+n+s}function rg(i,e,t,n){let s=[],r=[],o=null;const a=({state:d})=>{const p=_d(i,location),g=t.value,m=e.value;let f=0;if(d){if(t.value=p,e.value=d,o&&o===g){o=null;return}f=m?d.position-m.position:0}else n(p);s.forEach(_=>{_(t.value,g,{delta:f,type:hr.pop,direction:f?f>0?tr.forward:tr.back:tr.unknown})})};function l(){o=t.value}function c(d){s.push(d);const p=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return r.push(p),p}function u(){const{history:d}=window;!d.state||d.replaceState(nt({},d.state,{scroll:No()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Rc(i,e,t,n=!1,s=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:s?No():null}}function og(i){const{history:e,location:t}=window,n={value:_d(i,t)},s={value:e.state};s.value||r(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=i.indexOf("#"),d=h>-1?(t.host&&document.querySelector("base")?i:i.slice(h))+l:sg()+i+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){console.error(p),t[u?"replace":"assign"](d)}}function o(l,c){const u=nt({},e.state,Rc(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),n.value=l}function a(l,c){const u=nt({},s.value,e.state,{forward:l,scroll:No()});r(u.current,u,!0);const h=nt({},Rc(n.value,l,null),{position:u.position+1},c);r(l,h,!1),n.value=l}return{location:n,state:s,push:a,replace:o}}function ag(i){i=Zm(i);const e=og(i),t=rg(i,e.state,e.location,e.replace);function n(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=nt({location:"",base:i,go:n,createHref:Qm.bind(null,i)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function lg(i){return i=location.host?i||location.pathname+location.search:"",i.includes("#")||(i+="#"),ag(i)}function cg(i){return typeof i=="string"||i&&typeof i=="object"}function xd(i){return typeof i=="string"||typeof i=="symbol"}const Bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vd=Symbol("");var Lc;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(Lc||(Lc={}));function ms(i,e){return nt(new Error,{type:i,[vd]:!0},e)}function yn(i,e){return i instanceof Error&&vd in i&&(e==null||!!(i.type&e))}const Ic="[^/]+?",ug={sensitive:!1,strict:!1,start:!0,end:!0},hg=/[.+*?^${}()[\]/\\]/g;function dg(i,e){const t=nt({},ug,e),n=[];let s=t.start?"^":"";const r=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(t.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(hg,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:m,optional:f,regexp:_}=d;r.push({name:g,repeatable:m,optional:f});const M=_||Ic;if(M!==Ic){p+=10;try{new RegExp(`(${M})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+T.message)}}let E=m?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(E=f&&c.length<2?`(?:/${E})`:"/"+E),f&&(E+="?"),s+=E,p+=20,f&&(p+=-8),m&&(p+=-20),M===".*"&&(p+=-50)}u.push(p)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=r[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of i){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:m,optional:f}=p,_=g in c?c[g]:"";if(nn(_)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=nn(_)?_.join("/"):_;if(!M)if(f)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:n,keys:r,parse:a,stringify:l}}function fg(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===40+40?-1:1:i.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function pg(i,e){let t=0;const n=i.score,s=e.score;for(;t<n.length&&t<s.length;){const r=fg(n[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-n.length)===1){if(Pc(n))return 1;if(Pc(s))return-1}return s.length-n.length}function Pc(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const mg={type:0,value:""},gg=/[a-zA-Z0-9_]/;function _g(i){if(!i)return[[]];if(i==="/")return[[mg]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,n=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){!c||(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):d();break;case 4:d(),t=n;break;case 1:l==="("?t=2:gg.test(l)?d():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function xg(i,e,t){const n=dg(_g(i.path),t),s=nt(n,{record:i,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function vg(i,e){const t=[],n=new Map;e=Fc({strict:!1,end:!0,sensitive:!1},e);function s(u){return n.get(u)}function r(u,h,d){const p=!d,g=bg(u);g.aliasOf=d&&d.record;const m=Fc(e,u),f=[g];if("alias"in u){const E=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of E)f.push(nt({},g,{components:d?d.record.components:g.components,path:T,aliasOf:d?d.record:g}))}let _,M;for(const E of f){const{path:T}=E;if(h&&T[0]!=="/"){const w=h.record.path,I=w[w.length-1]==="/"?"":"/";E.path=h.record.path+(T&&I+T)}if(_=xg(E,h,m),d?d.alias.push(_):(M=M||_,M!==_&&M.alias.push(_),p&&u.name&&!Dc(_)&&o(u.name)),g.children){const w=g.children;for(let I=0;I<w.length;I++)r(w[I],_,d&&d.children[I])}d=d||_,l(_)}return M?()=>{o(M)}:er}function o(u){if(xd(u)){const h=n.get(u);h&&(n.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&pg(u,t[h])>=0&&(u.record.path!==t[h].record.path||!yd(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!Dc(u)&&n.set(u.record.name,u)}function c(u,h){let d,p={},g,m;if("name"in u&&u.name){if(d=n.get(u.name),!d)throw ms(1,{location:u});m=d.record.name,p=nt(yg(h.params,d.keys.filter(M=>!M.optional).map(M=>M.name)),u.params),g=d.stringify(p)}else if("path"in u)g=u.path,d=t.find(M=>M.re.test(g)),d&&(p=d.parse(g),m=d.record.name);else{if(d=h.name?n.get(h.name):t.find(M=>M.re.test(h.path)),!d)throw ms(1,{location:u,currentLocation:h});m=d.record.name,p=nt({},h.params,u.params),g=d.stringify(p)}const f=[];let _=d;for(;_;)f.unshift(_.record),_=_.parent;return{name:m,path:g,params:p,matched:f,meta:Sg(f)}}return i.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function yg(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function bg(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:Mg(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function Mg(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="boolean"?t:t[n];return e}function Dc(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function Sg(i){return i.reduce((e,t)=>nt(e,t.meta),{})}function Fc(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function yd(i,e){return e.children.some(t=>t===i||yd(i,t))}const bd=/#/g,wg=/&/g,Tg=/\//g,Eg=/=/g,Ag=/\?/g,Md=/\+/g,Cg=/%5B/g,Rg=/%5D/g,Sd=/%5E/g,Lg=/%60/g,wd=/%7B/g,Ig=/%7C/g,Td=/%7D/g,Pg=/%20/g;function Pl(i){return encodeURI(""+i).replace(Ig,"|").replace(Cg,"[").replace(Rg,"]")}function Dg(i){return Pl(i).replace(wd,"{").replace(Td,"}").replace(Sd,"^")}function $a(i){return Pl(i).replace(Md,"%2B").replace(Pg,"+").replace(bd,"%23").replace(wg,"%26").replace(Lg,"`").replace(wd,"{").replace(Td,"}").replace(Sd,"^")}function Fg(i){return $a(i).replace(Eg,"%3D")}function Ng(i){return Pl(i).replace(bd,"%23").replace(Ag,"%3F")}function Og(i){return i==null?"":Ng(i).replace(Tg,"%2F")}function xo(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function kg(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(Md," "),o=r.indexOf("="),a=xo(o<0?r:r.slice(0,o)),l=o<0?null:xo(r.slice(o+1));if(a in e){let c=e[a];nn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Nc(i){let e="";for(let t in i){const n=i[t];if(t=Fg(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(nn(n)?n.map(r=>r&&$a(r)):[n&&$a(n)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function Ug(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=nn(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return e}const Bg=Symbol(""),Oc=Symbol(""),Dl=Symbol(""),Ed=Symbol(""),Ka=Symbol("");function Bs(){let i=[];function e(n){return i.push(n),()=>{const s=i.indexOf(n);s>-1&&i.splice(s,1)}}function t(){i=[]}return{add:e,list:()=>i,reset:t}}function Yn(i,e,t,n,s){const r=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(ms(4,{from:t,to:e})):h instanceof Error?a(h):cg(h)?a(ms(2,{from:e,to:h})):(r&&n.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=i.call(n&&n.instances[s],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Yo(i,e,t,n){const s=[];for(const r of i)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(zg(a)){const c=(a.__vccOpts||a)[e];c&&s.push(Yn(c,t,n,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Wm(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Yn(d,t,n,r,o)()}))}}return s}function zg(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function kc(i){const e=ei(Dl),t=ei(Ed),n=Ot(()=>e.resolve(Pn(i.to))),s=Ot(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const d=h.findIndex(ps.bind(null,u));if(d>-1)return d;const p=Uc(l[c-2]);return c>1&&Uc(u)===p&&h[h.length-1].path!==p?h.findIndex(ps.bind(null,l[c-2])):d}),r=Ot(()=>s.value>-1&&Wg(t.params,n.value.params)),o=Ot(()=>s.value>-1&&s.value===t.matched.length-1&&gd(t.params,n.value.params));function a(l={}){return Gg(l)?e[Pn(i.replace)?"replace":"push"](Pn(i.to)).catch(er):Promise.resolve()}return{route:n,href:Ot(()=>n.value.href),isActive:r,isExactActive:o,navigate:a}}const Vg=sn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:kc,setup(i,{slots:e}){const t=yr(kc(i)),{options:n}=ei(Dl),s=Ot(()=>({[Bc(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[Bc(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return i.custom?r:pd("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),Hg=Vg;function Gg(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function Wg(i,e){for(const t in e){const n=e[t],s=i[t];if(typeof n=="string"){if(n!==s)return!1}else if(!nn(s)||s.length!==n.length||n.some((r,o)=>r!==s[o]))return!1}return!0}function Uc(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const Bc=(i,e,t)=>i!=null?i:e!=null?e:t,jg=sn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=ei(Ka),s=Ot(()=>i.route||n.value),r=ei(Oc,0),o=Ot(()=>{let c=Pn(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ot(()=>s.value.matched[o.value]);so(Oc,Ot(()=>o.value+1)),so(Bg,a),so(Ka,s);const l=Xs();return ro(()=>[l.value,a.value,i.name],([c,u,h],[d,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ps(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=i.name,h=a.value,d=h&&h.components[u];if(!d)return zc(t.default,{Component:d,route:c});const p=h.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,f=pd(d,nt({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return zc(t.default,{Component:f,route:c})||f}}});function zc(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const qg=jg;function Xg(i){const e=vg(i.routes,i),t=i.parseQuery||kg,n=i.stringifyQuery||Nc,s=i.history,r=Bs(),o=Bs(),a=Bs(),l=up(Bn);let c=Bn;ts&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=$o.bind(null,N=>""+N),h=$o.bind(null,Og),d=$o.bind(null,xo);function p(N,D){let ae,ue;return xd(N)?(ae=e.getRecordMatcher(N),ue=D):ue=N,e.addRoute(ue,ae)}function g(N){const D=e.getRecordMatcher(N);D&&e.removeRoute(D)}function m(){return e.getRoutes().map(N=>N.record)}function f(N){return!!e.getRecordMatcher(N)}function _(N,D){if(D=nt({},D||l.value),typeof N=="string"){const xe=Ko(t,N,D.path),y=e.resolve({path:xe.path},D),A=s.createHref(xe.fullPath);return nt(xe,y,{params:d(y.params),hash:xo(xe.hash),redirectedFrom:void 0,href:A})}let ae;if("path"in N)ae=nt({},N,{path:Ko(t,N.path,D.path).path});else{const xe=nt({},N.params);for(const y in xe)xe[y]==null&&delete xe[y];ae=nt({},N,{params:h(N.params)}),D.params=h(D.params)}const ue=e.resolve(ae,D),we=N.hash||"";ue.params=u(d(ue.params));const he=Xm(n,nt({},N,{hash:Dg(we),path:ue.path})),Te=s.createHref(he);return nt({fullPath:he,hash:we,query:n===Nc?Ug(N.query):N.query||{}},ue,{redirectedFrom:void 0,href:Te})}function M(N){return typeof N=="string"?Ko(t,N,l.value.path):nt({},N)}function E(N,D){if(c!==N)return ms(8,{from:D,to:N})}function T(N){return F(N)}function w(N){return T(nt(M(N),{replace:!0}))}function I(N){const D=N.matched[N.matched.length-1];if(D&&D.redirect){const{redirect:ae}=D;let ue=typeof ae=="function"?ae(N):ae;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=M(ue):{path:ue},ue.params={}),nt({query:N.query,hash:N.hash,params:"path"in ue?{}:N.params},ue)}}function F(N,D){const ae=c=_(N),ue=l.value,we=N.state,he=N.force,Te=N.replace===!0,xe=I(ae);if(xe)return F(nt(M(xe),{state:we,force:he,replace:Te}),D||ae);const y=ae;y.redirectedFrom=D;let A;return!he&&$m(n,ue,ae)&&(A=ms(16,{to:y,from:ue}),Z(ue,ue,!0,!1)),(A?Promise.resolve(A):C(y,ue)).catch(U=>yn(U)?yn(U,2)?U:G(U):j(U,y,ue)).then(U=>{if(U){if(yn(U,2))return F(nt({replace:Te},M(U.to),{state:we,force:he}),D||y)}else U=z(y,ue,!0,Te,we);return X(y,ue,U),U})}function b(N,D){const ae=E(N,D);return ae?Promise.reject(ae):Promise.resolve()}function C(N,D){let ae;const[ue,we,he]=$g(N,D);ae=Yo(ue.reverse(),"beforeRouteLeave",N,D);for(const xe of ue)xe.leaveGuards.forEach(y=>{ae.push(Yn(y,N,D))});const Te=b.bind(null,N,D);return ae.push(Te),Ui(ae).then(()=>{ae=[];for(const xe of r.list())ae.push(Yn(xe,N,D));return ae.push(Te),Ui(ae)}).then(()=>{ae=Yo(we,"beforeRouteUpdate",N,D);for(const xe of we)xe.updateGuards.forEach(y=>{ae.push(Yn(y,N,D))});return ae.push(Te),Ui(ae)}).then(()=>{ae=[];for(const xe of N.matched)if(xe.beforeEnter&&!D.matched.includes(xe))if(nn(xe.beforeEnter))for(const y of xe.beforeEnter)ae.push(Yn(y,N,D));else ae.push(Yn(xe.beforeEnter,N,D));return ae.push(Te),Ui(ae)}).then(()=>(N.matched.forEach(xe=>xe.enterCallbacks={}),ae=Yo(he,"beforeRouteEnter",N,D),ae.push(Te),Ui(ae))).then(()=>{ae=[];for(const xe of o.list())ae.push(Yn(xe,N,D));return ae.push(Te),Ui(ae)}).catch(xe=>yn(xe,8)?xe:Promise.reject(xe))}function X(N,D,ae){for(const ue of a.list())ue(N,D,ae)}function z(N,D,ae,ue,we){const he=E(N,D);if(he)return he;const Te=D===Bn,xe=ts?history.state:{};ae&&(ue||Te?s.replace(N.fullPath,nt({scroll:Te&&xe&&xe.scroll},we)):s.push(N.fullPath,we)),l.value=N,Z(N,D,ae,Te),G()}let de;function oe(){de||(de=s.listen((N,D,ae)=>{if(!Ee.listening)return;const ue=_(N),we=I(ue);if(we){F(nt(we,{replace:!0}),ue).catch(er);return}c=ue;const he=l.value;ts&&ng(Cc(he.fullPath,ae.delta),No()),C(ue,he).catch(Te=>yn(Te,12)?Te:yn(Te,2)?(F(Te.to,ue).then(xe=>{yn(xe,20)&&!ae.delta&&ae.type===hr.pop&&s.go(-1,!1)}).catch(er),Promise.reject()):(ae.delta&&s.go(-ae.delta,!1),j(Te,ue,he))).then(Te=>{Te=Te||z(ue,he,!1),Te&&(ae.delta&&!yn(Te,8)?s.go(-ae.delta,!1):ae.type===hr.pop&&yn(Te,20)&&s.go(-1,!1)),X(ue,he,Te)}).catch(er)}))}let O=Bs(),Y=Bs(),V;function j(N,D,ae){G(N);const ue=Y.list();return ue.length?ue.forEach(we=>we(N,D,ae)):console.error(N),Promise.reject(N)}function q(){return V&&l.value!==Bn?Promise.resolve():new Promise((N,D)=>{O.add([N,D])})}function G(N){return V||(V=!N,oe(),O.list().forEach(([D,ae])=>N?ae(N):D()),O.reset()),N}function Z(N,D,ae,ue){const{scrollBehavior:we}=i;if(!ts||!we)return Promise.resolve();const he=!ae&&ig(Cc(N.fullPath,0))||(ue||!ae)&&history.state&&history.state.scroll||null;return Gh().then(()=>we(N,D,he)).then(Te=>Te&&tg(Te)).catch(Te=>j(Te,N,D))}const le=N=>s.go(N);let ie;const se=new Set,Ee={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:f,getRoutes:m,resolve:_,options:i,push:T,replace:w,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Y.add,isReady:q,install(N){const D=this;N.component("RouterLink",Hg),N.component("RouterView",qg),N.config.globalProperties.$router=D,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Pn(l)}),ts&&!ie&&l.value===Bn&&(ie=!0,T(s.location).catch(we=>{}));const ae={};for(const we in Bn)ae[we]=Ot(()=>l.value[we]);N.provide(Dl,D),N.provide(Ed,yr(ae)),N.provide(Ka,l);const ue=N.unmount;se.add(N),N.unmount=function(){se.delete(N),se.size<1&&(c=Bn,de&&de(),de=null,l.value=Bn,ie=!1,V=!1),ue()}}};return Ee}function Ui(i){return i.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function $g(i,e){const t=[],n=[],s=[],r=Math.max(e.matched.length,i.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(i.matched.find(c=>ps(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>ps(c,l))||s.push(l))}return[t,n,s]}const As=i=>(br("data-v-03618473"),i=i(),Mr(),i),Kg={class:"navbar"},Yg=As(()=>Ae("div",{class:"name"},"Chris Lokhorst",-1)),Zg=As(()=>Ae("div",{class:"toggle-button"},[Ae("span",{class:"bar"}),Ae("span",{class:"bar"}),Ae("span",{class:"bar"})],-1)),Jg={class:"buttons"},Qg=As(()=>Ae("li",null,"Home",-1)),e_=As(()=>Ae("li",null,"About",-1)),t_=As(()=>Ae("li",null,"Projects",-1)),n_=As(()=>Ae("li",null,"Contact",-1)),i_=sn({__name:"NavigationBar",setup(i){return Tl(()=>{const e=document.getElementsByClassName("toggle-button")[0],t=document.getElementsByClassName("buttons")[0];e.addEventListener("click",()=>{t.classList.toggle("active")})}),(e,t)=>{const n=Al("router-link");return it(),at("nav",Kg,[Yg,Ne(n,{to:""},{default:pn(()=>[Zg]),_:1}),Ae("div",Jg,[Ne(n,{to:"/"},{default:pn(()=>[Qg]),_:1}),Ne(n,{to:"/about"},{default:pn(()=>[e_]),_:1}),Ne(n,{to:"/projects"},{default:pn(()=>[t_]),_:1}),Ne(n,{to:"/contact"},{default:pn(()=>[n_]),_:1})])])}}});const Wt=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},s_=Wt(i_,[["__scopeId","data-v-03618473"]]);const r_={},o_=i=>(br("data-v-5971ba95"),i=i(),Mr(),i),a_={id:"footer"},l_={class:"max-width"},c_={class:"content"},u_=Fo('<div class="contact" data-v-5971ba95><div class="name" data-v-5971ba95>Chris Lokhorst</div><a href="https://www.linkedin.com/in/chris-lokhorst-7304b7210/" target="_blank" data-v-5971ba95><img class="icon" src="https://img.icons8.com/ios/100/FFFFFF/linkedin-circled--v1.png" data-v-5971ba95></a><a href="https://github.com/ChrisPis-bit?tab=repositories" target="_blank" data-v-5971ba95><img class="icon" src="https://img.icons8.com/ios11/512/FFFFFF/github.png" data-v-5971ba95></a><div class="contact-info" data-v-5971ba95><div data-v-5971ba95><a href="mailto:chris.lokhorst@kpnmail.nl?body=Message%20body%20text%20" class="link" data-v-5971ba95>chris.lokhorst@kpnmail.nl</a></div></div></div>',1),h_={class:"pages"},d_=o_(()=>Ae("div",{class:"seperator"},null,-1)),f_=Sr("Home"),p_=Sr("About"),m_=Sr("Projects"),g_=Sr("Contact");function __(i,e){const t=Al("router-link");return it(),at("footer",a_,[Ae("div",l_,[Ae("div",c_,[u_,Ae("div",h_,[d_,Ae("ul",null,[Ae("li",null,[Ne(t,{to:"/",class:"link"},{default:pn(()=>[f_]),_:1})]),Ae("li",null,[Ne(t,{to:"/about",class:"link"},{default:pn(()=>[p_]),_:1})]),Ae("li",null,[Ne(t,{to:"/projects",class:"link"},{default:pn(()=>[m_]),_:1})]),Ae("li",null,[Ne(t,{to:"/contact",class:"link"},{default:pn(()=>[g_]),_:1})])])])])])])}const x_=Wt(r_,[["render",__],["__scopeId","data-v-5971ba95"]]),v_={class:"page-container"},y_={class:"content-wrap"},b_=sn({__name:"App",setup(i){return(e,t)=>{const n=Al("router-view");return it(),at("div",v_,[Ae("div",y_,[Ae("header",null,[Ne(s_)]),Ae("main",null,[Ne(n)])]),Ne(x_)])}}});const M_=Wt(b_,[["__scopeId","data-v-459864a7"]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fl="142",S_=0,Vc=1,w_=2,Ad=1,T_=2,Ks=3,gs=0,en=1,Ai=2,E_=1,ti=0,us=1,Hc=2,Gc=3,Wc=4,A_=5,ns=100,C_=101,R_=102,jc=103,qc=104,L_=200,I_=201,P_=202,D_=203,Cd=204,Rd=205,F_=206,N_=207,O_=208,k_=209,U_=210,B_=0,z_=1,V_=2,Ya=3,H_=4,G_=5,W_=6,j_=7,Ld=0,q_=1,X_=2,Dn=0,$_=1,K_=2,Y_=3,Z_=4,J_=5,Id=300,_s=301,xs=302,Za=303,Ja=304,Oo=306,vs=1e3,zt=1001,vo=1002,mt=1003,Qa=1004,el=1005,It=1006,Pd=1007,Cs=1008,Ci=1009,Q_=1010,e0=1011,Dd=1012,t0=1013,gi=1014,Zn=1015,dr=1016,n0=1017,i0=1018,hs=1020,s0=1021,r0=1022,Zt=1023,o0=1024,a0=1025,Mi=1026,ys=1027,l0=1028,c0=1029,u0=1030,h0=1031,d0=1033,Zo=33776,Jo=33777,Qo=33778,ea=33779,Xc=35840,$c=35841,Kc=35842,Yc=35843,f0=36196,Zc=37492,Jc=37496,Qc=37808,eu=37809,tu=37810,nu=37811,iu=37812,su=37813,ru=37814,ou=37815,au=37816,lu=37817,cu=37818,uu=37819,hu=37820,du=37821,fu=36492,p0=2200,m0=2201,g0=2202,fr=2300,bs=2301,ta=2302,ss=2400,rs=2401,yo=2402,Nl=2500,Fd=2501,_0=1,Nd=2,Ri=3e3,et=3001,x0=3200,v0=3201,Ol=0,y0=1,Cn="srgb",_i="srgb-linear",na=7680,b0=519,tl=35044,pu="300 es",nl=1035;class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mu=1234567;const nr=Math.PI/180,pr=180/Math.PI;function tn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function kl(i,e){return(i%e+e)%e}function M0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function S0(i,e,t){return i!==e?(t-i)/(e-i):0}function ir(i,e,t){return(1-t)*i+t*e}function w0(i,e,t,n){return ir(i,e,1-Math.exp(-t*n))}function T0(i,e=1){return e-Math.abs(kl(i,e*2)-e)}function E0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function A0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function C0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function R0(i,e){return i+Math.random()*(e-i)}function L0(i){return i*(.5-Math.random())}function I0(i){i!==void 0&&(mu=i);let e=mu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P0(i){return i*nr}function D0(i){return i*pr}function il(i){return(i&i-1)===0&&i!==0}function Od(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function F0(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function N0(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function O0(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ln=Object.freeze({__proto__:null,DEG2RAD:nr,RAD2DEG:pr,generateUUID:tn,clamp:wt,euclideanModulo:kl,mapLinear:M0,inverseLerp:S0,lerp:ir,damp:w0,pingpong:T0,smoothstep:E0,smootherstep:A0,randInt:C0,randFloat:R0,randFloatSpread:L0,seededRandom:I0,degToRad:P0,radToDeg:D0,isPowerOfTwo:il,ceilPowerOfTwo:Od,floorPowerOfTwo:bo,setQuaternionFromProperEuler:F0,normalize:O0,denormalize:N0});class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],m=s[0],f=s[3],_=s[6],M=s[1],E=s[4],T=s[7],w=s[2],I=s[5],F=s[8];return r[0]=o*m+a*M+l*w,r[3]=o*f+a*E+l*I,r[6]=o*_+a*T+l*F,r[1]=c*m+u*M+h*w,r[4]=c*f+u*E+h*I,r[7]=c*_+u*T+h*F,r[2]=d*m+p*M+g*w,r[5]=d*f+p*E+g*I,r[8]=d*_+p*T+g*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=t*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(s*c-u*n)*m,e[2]=(a*n-s*o)*m,e[3]=d*m,e[4]=(u*t-s*l)*m,e[5]=(s*r-a*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),s=this.elements,r=s[0],o=s[3],a=s[6],l=s[1],c=s[4],u=s[7];return s[0]=t*r+n*l,s[3]=t*o+n*c,s[6]=t*a+n*u,s[1]=-n*r+t*l,s[4]=-n*o+t*c,s[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function kd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function co(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ia={[Cn]:{[_i]:Si},[_i]:{[Cn]:co}},jt={legacyMode:!0,get workingColorSpace(){return _i},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(ia[e]&&ia[e][t]!==void 0){const n=ia[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ht={r:0,g:0,b:0},qt={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function sa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Fr(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=_i){return this.r=e,this.g=t,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=_i){if(e=kl(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=sa(o,r,e+1/3),this.g=sa(o,r,e),this.b=sa(o,r,e-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(e,t=Cn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,jt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,jt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,jt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,jt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Cn){const n=Ud[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return jt.fromWorkingColorSpace(Fr(this,ht),e),wt(ht.r*255,0,255)<<16^wt(ht.g*255,0,255)<<8^wt(ht.b*255,0,255)<<0}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_i){jt.fromWorkingColorSpace(Fr(this,ht),t);const n=ht.r,s=ht.g,r=ht.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_i){return jt.fromWorkingColorSpace(Fr(this,ht),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=Cn){return jt.fromWorkingColorSpace(Fr(this,ht),e),e!==Cn?`color(${e} ${ht.r} ${ht.g} ${ht.b})`:`rgb(${ht.r*255|0},${ht.g*255|0},${ht.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(qt),qt.h+=e,qt.s+=t,qt.l+=n,this.setHSL(qt.h,qt.s,qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qt),e.getHSL(Dr);const n=ir(qt.h,Dr.h,t),s=ir(qt.s,Dr.s,t),r=ir(qt.l,Dr.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Pe.NAMES=Ud;let Bi;class Bd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=mr("canvas")),Bi.width=e.width,Bi.height=e.height;const n=Bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class zd{constructor(e=null){this.isSource=!0,this.uuid=tn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ra(s[o].image)):r.push(ra(s[o]))}else r=ra(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let k0=0;class At extends Di{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=zt,s=zt,r=It,o=Cs,a=Zt,l=Ci,c=1,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=tn(),this.name="",this.source=new zd(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vs:e.x=e.x-Math.floor(e.x);break;case zt:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vs:e.y=e.y-Math.floor(e.y);break;case zt:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Id;class tt{constructor(e=0,t=0,n=0,s=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],m=l[2],f=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+m)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,T=(p+1)/2,w=(_+1)/2,I=(u+d)/4,F=(h+m)/4,b=(g+f)/4;return E>T&&E>w?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=I/n,r=F/n):T>w?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=I/s,r=b/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=F/r,s=b/r),this.set(n,s,r,t),this}let M=Math.sqrt((f-g)*(f-g)+(h-m)*(h-m)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(f-g)/M,this.y=(h-m)/M,this.z=(d-u)/M,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Li extends Di{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new At(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:It,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vd extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mt,this.minFilter=mt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class U0 extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mt,this.minFilter=mt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerp(e,t,n,s){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,s)}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==d||c!==p||u!==g){let f=1-a;const _=l*d+c*p+u*g+h*m,M=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const w=Math.sqrt(E),I=Math.atan2(w,_*M);f=Math.sin(f*I)/w,a=Math.sin(a*I)/w}const T=a*M;if(l=l*f+d*T,c=c*f+p*T,u=u*f+g*T,h=h*f+m*T,f===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*n,u=l*n+a*t-r*s,h=l*s+r*n-o*t,d=-r*t-o*n-a*s;return this.x=c*l+d*-r+u*-a-h*-o,this.y=u*l+d*-o+h*-r-c*-a,this.z=h*l+d*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new L,gu=new Gt;class Rs{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<s&&(s=d),u>r&&(r=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<s&&(s=d),u>r&&(r=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)ai.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ai)}else n.boundingBox===null&&n.computeBoundingBox(),aa.copy(n.boundingBox),aa.applyMatrix4(e.matrixWorld),this.union(aa);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zs),Nr.subVectors(this.max,zs),zi.subVectors(e.a,zs),Vi.subVectors(e.b,zs),Hi.subVectors(e.c,zs),zn.subVectors(Vi,zi),Vn.subVectors(Hi,Vi),li.subVectors(zi,Hi);let t=[0,-zn.z,zn.y,0,-Vn.z,Vn.y,0,-li.z,li.y,zn.z,0,-zn.x,Vn.z,0,-Vn.x,li.z,0,-li.x,-zn.y,zn.x,0,-Vn.y,Vn.x,0,-li.y,li.x,0];return!la(t,zi,Vi,Hi,Nr)||(t=[1,0,0,0,1,0,0,0,1],!la(t,zi,Vi,Hi,Nr))?!1:(Or.crossVectors(zn,Vn),t=[Or.x,Or.y,Or.z],la(t,zi,Vi,Hi,Nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ai.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new L,new L,new L,new L,new L,new L,new L,new L],ai=new L,aa=new Rs,zi=new L,Vi=new L,Hi=new L,zn=new L,Vn=new L,li=new L,zs=new L,Nr=new L,Or=new L,ci=new L;function la(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ci.fromArray(i,r);const a=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),l=e.dot(ci),c=t.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const B0=new Rs,_u=new L,kr=new L,ca=new L;class Ls{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):B0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ca.subVectors(e,this.center);const t=ca.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.add(ca.multiplyScalar(s/n)),this.radius+=s}return this}union(e){return this.center.equals(e.center)===!0?kr.set(0,0,1).multiplyScalar(e.radius):kr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(_u.copy(e.center).add(kr)),this.expandByPoint(_u.copy(e.center).sub(kr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new L,ua=new L,Ur=new L,Hn=new L,ha=new L,Br=new L,da=new L;class ko{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.direction).multiplyScalar(t).add(this.origin),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ua.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(ua);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ur),a=Hn.dot(this.direction),l=-Hn.dot(Ur),c=Hn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const m=1/u;h*=m,d*=m,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy(Ur).multiplyScalar(d).add(ua),p}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||n!==n)&&(n=r),(o<s||s!==s)&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,s,r){ha.subVectors(t,e),Br.subVectors(n,e),da.crossVectors(ha,Br);let o=this.direction.dot(da),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hn.subVectors(this.origin,e);const l=a*this.direction.dot(Br.crossVectors(Hn,Br));if(l<0)return null;const c=a*this.direction.dot(ha.cross(Hn));if(c<0||l+c>o)return null;const u=-a*Hn.dot(da);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,s,r,o,a,l,c,u,h,d,p,g,m,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=p,_[7]=g,_[11]=m,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-m*c,t[9]=-a*l,t[2]=m-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,m=c*h;t[0]=d+m*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=m+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,m=c*h;t[0]=d-m*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=m-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+m,t[1]=l*h,t[5]=m*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-m*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+m,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=m*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z0,e,V0)}lookAt(e,t,n){const s=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),Gn.crossVectors(n,Pt),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),Gn.crossVectors(n,Pt)),Gn.normalize(),zr.crossVectors(Pt,Gn),s[0]=Gn.x,s[4]=zr.x,s[8]=Pt.x,s[1]=Gn.y,s[5]=zr.y,s[9]=Pt.y,s[2]=Gn.z,s[6]=zr.z,s[10]=Pt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],m=n[6],f=n[10],_=n[14],M=n[3],E=n[7],T=n[11],w=n[15],I=s[0],F=s[4],b=s[8],C=s[12],X=s[1],z=s[5],de=s[9],oe=s[13],O=s[2],Y=s[6],V=s[10],j=s[14],q=s[3],G=s[7],Z=s[11],le=s[15];return r[0]=o*I+a*X+l*O+c*q,r[4]=o*F+a*z+l*Y+c*G,r[8]=o*b+a*de+l*V+c*Z,r[12]=o*C+a*oe+l*j+c*le,r[1]=u*I+h*X+d*O+p*q,r[5]=u*F+h*z+d*Y+p*G,r[9]=u*b+h*de+d*V+p*Z,r[13]=u*C+h*oe+d*j+p*le,r[2]=g*I+m*X+f*O+_*q,r[6]=g*F+m*z+f*Y+_*G,r[10]=g*b+m*de+f*V+_*Z,r[14]=g*C+m*oe+f*j+_*le,r[3]=M*I+E*X+T*O+w*q,r[7]=M*F+E*z+T*Y+w*G,r[11]=M*b+E*de+T*V+w*Z,r[15]=M*C+E*oe+T*j+w*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],m=e[7],f=e[11],_=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*p-n*l*p)+m*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+f*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+_*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],m=e[13],f=e[14],_=e[15],M=h*f*c-m*d*c+m*l*p-a*f*p-h*l*_+a*d*_,E=g*d*c-u*f*c-g*l*p+o*f*p+u*l*_-o*d*_,T=u*m*c-g*h*c+g*a*p-o*m*p-u*a*_+o*h*_,w=g*h*l-u*m*l-g*a*d+o*m*d+u*a*f-o*h*f,I=t*M+n*E+s*T+r*w;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return e[0]=M*F,e[1]=(m*d*r-h*f*r-m*s*p+n*f*p+h*s*_-n*d*_)*F,e[2]=(a*f*r-m*l*r+m*s*c-n*f*c-a*s*_+n*l*_)*F,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*p-n*l*p)*F,e[4]=E*F,e[5]=(u*f*r-g*d*r+g*s*p-t*f*p-u*s*_+t*d*_)*F,e[6]=(g*l*r-o*f*r-g*s*c+t*f*c+o*s*_-t*l*_)*F,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*p+t*l*p)*F,e[8]=T*F,e[9]=(g*h*r-u*m*r-g*n*p+t*m*p+u*n*_-t*h*_)*F,e[10]=(o*m*r-g*a*r+g*n*c-t*m*c-o*n*_+t*a*_)*F,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*p-t*a*p)*F,e[12]=w*F,e[13]=(u*m*s-g*h*s+g*n*d-t*m*d-u*n*f+t*h*f)*F,e[14]=(g*a*s-o*m*s-g*n*l+t*m*l+o*n*f-t*a*f)*F,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*F,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,g=r*h,m=o*u,f=o*h,_=a*h,M=l*c,E=l*u,T=l*h,w=n.x,I=n.y,F=n.z;return s[0]=(1-(m+_))*w,s[1]=(p+T)*w,s[2]=(g-E)*w,s[3]=0,s[4]=(p-T)*I,s[5]=(1-(d+_))*I,s[6]=(f+M)*I,s[7]=0,s[8]=(g+E)*F,s[9]=(f-M)*F,s[10]=(1-(d+m))*F,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Gi.set(s[0],s[1],s[2]).length();const o=Gi.set(s[4],s[5],s[6]).length(),a=Gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xt.copy(this);const c=1/r,u=1/o,h=1/a;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=u,Xt.elements[5]*=u,Xt.elements[6]*=u,Xt.elements[8]*=h,Xt.elements[9]*=h,Xt.elements[10]*=h,t.setFromRotationMatrix(Xt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s),d=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o){const a=this.elements,l=1/(t-e),c=1/(n-s),u=1/(o-r),h=(t+e)*l,d=(n+s)*c,p=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gi=new L,Xt=new Xe,z0=new L(0,0,0),V0=new L(1,1,1),Gn=new L,zr=new L,Pt=new L,xu=new Xe,vu=new Gt;class wr{constructor(e=0,t=0,n=0,s=wr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vu.setFromEuler(this),this.setFromQuaternion(vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}wr.DefaultOrder="XYZ";wr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ul{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let H0=0;const yu=new L,Wi=new Gt,Sn=new Xe,Vr=new L,Vs=new L,G0=new L,W0=new Gt,bu=new L(1,0,0),Mu=new L(0,1,0),Su=new L(0,0,1),j0={type:"added"},wu={type:"removed"};class ut extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DefaultUp.clone();const e=new L,t=new wr,n=new Gt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Vt}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=ut.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(bu,e)}rotateY(e){return this.rotateOnAxis(Mu,e)}rotateZ(e){return this.rotateOnAxis(Su,e)}translateOnAxis(e,t){return yu.copy(e).applyQuaternion(this.quaternion),this.position.add(yu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bu,e)}translateY(e){return this.translateOnAxis(Mu,e)}translateZ(e){return this.translateOnAxis(Su,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vr.copy(e):Vr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Vs,Vr,this.up):Sn.lookAt(Vr,Vs,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Sn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(j0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(wu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,G0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,W0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ut.DefaultUp=new L(0,1,0);ut.DefaultMatrixAutoUpdate=!0;const $t=new L,wn=new L,fa=new L,Tn=new L,ji=new L,qi=new L,Tu=new L,pa=new L,ma=new L,ga=new L;class In{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$t.subVectors(e,t),s.cross($t);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$t.subVectors(s,t),wn.subVectors(n,t),fa.subVectors(e,t);const o=$t.dot($t),a=$t.dot(wn),l=$t.dot(fa),c=wn.dot(wn),u=wn.dot(fa),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Tn),Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Tn),l.set(0,0),l.addScaledVector(r,Tn.x),l.addScaledVector(o,Tn.y),l.addScaledVector(a,Tn.z),l}static isFrontFacing(e,t,n,s){return $t.subVectors(n,t),wn.subVectors(e,t),$t.cross(wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),$t.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return In.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ji.subVectors(s,n),qi.subVectors(r,n),pa.subVectors(e,n);const l=ji.dot(pa),c=qi.dot(pa);if(l<=0&&c<=0)return t.copy(n);ma.subVectors(e,s);const u=ji.dot(ma),h=qi.dot(ma);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ji,o);ga.subVectors(e,r);const p=ji.dot(ga),g=qi.dot(ga);if(g>=0&&p<=g)return t.copy(r);const m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(qi,a);const f=u*g-p*h;if(f<=0&&h-u>=0&&p-g>=0)return Tu.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Tu,a);const _=1/(f+m+d);return o=m*_,a=d*_,t.copy(n).addScaledVector(ji,o).addScaledVector(qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let q0=0;class gn extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=tn(),this.name="",this.type="Material",this.blending=us,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Cd,this.blendDst=Rd,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=b0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=na,this.stencilZFail=na,this.stencilZPass=na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===E_;continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==gs&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xi extends gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new L,Hr=new He;class kt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=tl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",s),o=new Pe),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",s),o=new He),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",s),o=new L),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let s=0,r=e.length;s<r;s++){let o=e[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",s),o=new tt),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Hd extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gd extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Fn extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let X0=0;const Bt=new Xe,_a=new ut,Xi=new L,Dt=new Rs,Hs=new Rs,ft=new L;class xn extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=tn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kd(e)?Gd:Hd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Fn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Dt.setFromBufferAttribute(r),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Dt.min,Hs.min),Dt.expandByPoint(ft),ft.addVectors(Dt.max,Hs.max),Dt.expandByPoint(ft)):(Dt.expandByPoint(Hs.min),Dt.expandByPoint(Hs.max))}Dt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ft));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ft.fromBufferAttribute(a,c),l&&(Xi.fromBufferAttribute(e,c),ft.add(Xi)),s=Math.max(s,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let X=0;X<a;X++)c[X]=new L,u[X]=new L;const h=new L,d=new L,p=new L,g=new He,m=new He,f=new He,_=new L,M=new L;function E(X,z,de){h.fromArray(s,X*3),d.fromArray(s,z*3),p.fromArray(s,de*3),g.fromArray(o,X*2),m.fromArray(o,z*2),f.fromArray(o,de*2),d.sub(h),p.sub(h),m.sub(g),f.sub(g);const oe=1/(m.x*f.y-f.x*m.y);!isFinite(oe)||(_.copy(d).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(oe),M.copy(p).multiplyScalar(m.x).addScaledVector(d,-f.x).multiplyScalar(oe),c[X].add(_),c[z].add(_),c[de].add(_),u[X].add(M),u[z].add(M),u[de].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let X=0,z=T.length;X<z;++X){const de=T[X],oe=de.start,O=de.count;for(let Y=oe,V=oe+O;Y<V;Y+=3)E(n[Y+0],n[Y+1],n[Y+2])}const w=new L,I=new L,F=new L,b=new L;function C(X){F.fromArray(r,X*3),b.copy(F);const z=c[X];w.copy(z),w.sub(F.multiplyScalar(F.dot(z))).normalize(),I.crossVectors(b,z);const oe=I.dot(u[X])<0?-1:1;l[X*4]=w.x,l[X*4+1]=w.y,l[X*4+2]=w.z,l[X*4+3]=oe}for(let X=0,z=T.length;X<z;++X){const de=T[X],oe=de.start,O=de.count;for(let Y=oe,V=oe+O;Y<V;Y+=3)C(n[Y+0]),C(n[Y+1]),C(n[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),m=e.getX(d+1),f=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,f),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const s in n){if(e.attributes[s]===void 0)continue;const o=n[s].array,a=e.attributes[s],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,d=c;h<u;h++,d++)o[d]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let m=0,f=l.length;m<f;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*u;for(let _=0;_<u;_++)d[g++]=c[p++]}return new kt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eu=new Xe,$i=new ko,xa=new Ls,Wn=new L,jn=new L,qn=new L,va=new L,ya=new L,ba=new L,Gr=new L,Wr=new L,jr=new L,qr=new He,Xr=new He,$r=new He,Ma=new L,Kr=new L;class Ht extends ut{constructor(e=new xn,t=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),e.ray.intersectsSphere(xa)===!1)||(Eu.copy(r).invert(),$i.copy(e.ray).applyMatrix4(Eu),n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,f=p.length;m<f;m++){const _=p[m],M=s[_.materialIndex],E=Math.max(_.start,g.start),T=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let w=E,I=T;w<I;w+=3){const F=a.getX(w),b=a.getX(w+1),C=a.getX(w+2);o=Yr(this,M,e,$i,l,c,u,h,d,F,b,C),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),f=Math.min(a.count,g.start+g.count);for(let _=m,M=f;_<M;_+=3){const E=a.getX(_),T=a.getX(_+1),w=a.getX(_+2);o=Yr(this,s,e,$i,l,c,u,h,d,E,T,w),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,f=p.length;m<f;m++){const _=p[m],M=s[_.materialIndex],E=Math.max(_.start,g.start),T=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let w=E,I=T;w<I;w+=3){const F=w,b=w+1,C=w+2;o=Yr(this,M,e,$i,l,c,u,h,d,F,b,C),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let _=m,M=f;_<M;_+=3){const E=_,T=_+1,w=_+2;o=Yr(this,s,e,$i,l,c,u,h,d,E,T,w),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function $0(i,e,t,n,s,r,o,a){let l;if(e.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side!==Ai,a),l===null)return null;Kr.copy(a),Kr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Kr);return c<t.near||c>t.far?null:{distance:c,point:Kr.clone(),object:i}}function Yr(i,e,t,n,s,r,o,a,l,c,u,h){Wn.fromBufferAttribute(s,c),jn.fromBufferAttribute(s,u),qn.fromBufferAttribute(s,h);const d=i.morphTargetInfluences;if(r&&d){Gr.set(0,0,0),Wr.set(0,0,0),jr.set(0,0,0);for(let g=0,m=r.length;g<m;g++){const f=d[g],_=r[g];f!==0&&(va.fromBufferAttribute(_,c),ya.fromBufferAttribute(_,u),ba.fromBufferAttribute(_,h),o?(Gr.addScaledVector(va,f),Wr.addScaledVector(ya,f),jr.addScaledVector(ba,f)):(Gr.addScaledVector(va.sub(Wn),f),Wr.addScaledVector(ya.sub(jn),f),jr.addScaledVector(ba.sub(qn),f)))}Wn.add(Gr),jn.add(Wr),qn.add(jr)}i.isSkinnedMesh&&(i.boneTransform(c,Wn),i.boneTransform(u,jn),i.boneTransform(h,qn));const p=$0(i,e,t,n,Wn,jn,qn,Ma);if(p){a&&(qr.fromBufferAttribute(a,c),Xr.fromBufferAttribute(a,u),$r.fromBufferAttribute(a,h),p.uv=In.getUV(Ma,Wn,jn,qn,qr,Xr,$r,new He)),l&&(qr.fromBufferAttribute(l,c),Xr.fromBufferAttribute(l,u),$r.fromBufferAttribute(l,h),p.uv2=In.getUV(Ma,Wn,jn,qn,qr,Xr,$r,new He));const g={a:c,b:u,c:h,normal:new L,materialIndex:0};In.getNormal(Wn,jn,qn,g.normal),p.face=g}return p}class Is extends xn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Fn(c,3)),this.setAttribute("normal",new Fn(u,3)),this.setAttribute("uv",new Fn(h,2));function g(m,f,_,M,E,T,w,I,F,b,C){const X=T/F,z=w/b,de=T/2,oe=w/2,O=I/2,Y=F+1,V=b+1;let j=0,q=0;const G=new L;for(let Z=0;Z<V;Z++){const le=Z*z-oe;for(let ie=0;ie<Y;ie++){const se=ie*X-de;G[m]=se*M,G[f]=le*E,G[_]=O,c.push(G.x,G.y,G.z),G[m]=0,G[f]=0,G[_]=I>0?1:-1,u.push(G.x,G.y,G.z),h.push(ie/F),h.push(1-Z/b),j+=1}}for(let Z=0;Z<b;Z++)for(let le=0;le<F;le++){const ie=d+le+Y*Z,se=d+le+Y*(Z+1),Ee=d+(le+1)+Y*(Z+1),N=d+(le+1)+Y*Z;l.push(ie,se,N),l.push(se,Ee,N),q+=6}a.addGroup(p,q,C),p+=q,d+=j}}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function xt(i){const e={};for(let t=0;t<i.length;t++){const n=Ms(i[t]);for(const s in n)e[s]=n[s]}return e}const K0={clone:Ms,merge:xt};var Y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Y0,this.fragmentShader=Z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wd extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tt extends Wd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ki=90,Yi=1;class J0 extends ut{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const s=new Tt(Ki,Yi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(1,0,0)),this.add(s);const r=new Tt(Ki,Yi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new L(-1,0,0)),this.add(r);const o=new Tt(Ki,Yi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new L(0,1,0)),this.add(o);const a=new Tt(Ki,Yi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new L(0,-1,0)),this.add(a);const l=new Tt(Ki,Yi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);const c=new Tt(Ki,Yi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=Dn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class jd extends At{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:_s,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Q0 extends Li{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new jd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Is(5,5,5),r=new Ii({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:ti});r.uniforms.tEquirect.value=t;const o=new Ht(s,r),a=t.minFilter;return t.minFilter===Cs&&(t.minFilter=It),new J0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Sa=new L,ex=new L,tx=new Vt;class hi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Sa.subVectors(n,t).cross(ex.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Sa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tx.getNormalMatrix(e),s=this.coplanarPoint(Sa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new Ls,Zr=new L;class Bl{constructor(e=new hi,t=new hi,n=new hi,s=new hi,r=new hi,o=new hi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],p=n[9],g=n[10],m=n[11],f=n[12],_=n[13],M=n[14],E=n[15];return t[0].setComponents(a-s,h-l,m-d,E-f).normalize(),t[1].setComponents(a+s,h+l,m+d,E+f).normalize(),t[2].setComponents(a+r,h+c,m+p,E+_).normalize(),t[3].setComponents(a-r,h-c,m-p,E-_).normalize(),t[4].setComponents(a-o,h-u,m-g,E-M).normalize(),t[5].setComponents(a+o,h+u,m+g,E+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Zr.x=s.normal.x>0?e.max.x:e.min.x,Zr.y=s.normal.y>0?e.max.y:e.min.y,Zr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function nx(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,d=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,p=u.updateRange;i.bindBuffer(h,c),p.count===-1?i.bufferSubData(h,0,d):(t?i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Uo extends xn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],m=[],f=[];for(let _=0;_<u;_++){const M=_*d-o;for(let E=0;E<c;E++){const T=E*h-r;g.push(T,-M,0),m.push(0,0,1),f.push(E/a),f.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<a;M++){const E=M+c*_,T=M+c*(_+1),w=M+1+c*(_+1),I=M+1+c*_;p.push(E,T,I),p.push(T,w,I)}this.setIndex(p),this.setAttribute("position",new Fn(g,3)),this.setAttribute("normal",new Fn(m,3)),this.setAttribute("uv",new Fn(f,2))}static fromJSON(e){return new Uo(e.width,e.height,e.widthSegments,e.heightSegments)}}var ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ox=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ax=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cx="vec3 transformed = vec3( position );",ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,dx=`#ifdef USE_IRIDESCENCE
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
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
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
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,fx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Mx=`#define PI 3.141592653589793
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
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Sx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,wx=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lx=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ix=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,Px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
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
#endif`,Ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Vx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gx=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Wx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,jx=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,$x=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Yx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Zx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Jx=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ev=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,tv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ov=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,fv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,pv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,gv=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_v=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,bv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Mv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Sv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,wv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ev=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Av=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Fv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nv=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Ov=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Bv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zv=`#ifdef USE_SKINNING
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
#endif`,Vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jv=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,qv=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Xv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,$v=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Kv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Yv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Zv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Jv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Qv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ey=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ty=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sy=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,ry=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,oy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,ay=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
}`,cy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,uy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
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
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dy=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,fy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,py=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,my=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,_y=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Sy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ey=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Ay=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cy=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ry=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ly=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Iy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ze={alphamap_fragment:ix,alphamap_pars_fragment:sx,alphatest_fragment:rx,alphatest_pars_fragment:ox,aomap_fragment:ax,aomap_pars_fragment:lx,begin_vertex:cx,beginnormal_vertex:ux,bsdfs:hx,iridescence_fragment:dx,bumpmap_pars_fragment:fx,clipping_planes_fragment:px,clipping_planes_pars_fragment:mx,clipping_planes_pars_vertex:gx,clipping_planes_vertex:_x,color_fragment:xx,color_pars_fragment:vx,color_pars_vertex:yx,color_vertex:bx,common:Mx,cube_uv_reflection_fragment:Sx,defaultnormal_vertex:wx,displacementmap_pars_vertex:Tx,displacementmap_vertex:Ex,emissivemap_fragment:Ax,emissivemap_pars_fragment:Cx,encodings_fragment:Rx,encodings_pars_fragment:Lx,envmap_fragment:Ix,envmap_common_pars_fragment:Px,envmap_pars_fragment:Dx,envmap_pars_vertex:Fx,envmap_physical_pars_fragment:jx,envmap_vertex:Nx,fog_vertex:Ox,fog_pars_vertex:kx,fog_fragment:Ux,fog_pars_fragment:Bx,gradientmap_pars_fragment:zx,lightmap_fragment:Vx,lightmap_pars_fragment:Hx,lights_lambert_vertex:Gx,lights_pars_begin:Wx,lights_toon_fragment:qx,lights_toon_pars_fragment:Xx,lights_phong_fragment:$x,lights_phong_pars_fragment:Kx,lights_physical_fragment:Yx,lights_physical_pars_fragment:Zx,lights_fragment_begin:Jx,lights_fragment_maps:Qx,lights_fragment_end:ev,logdepthbuf_fragment:tv,logdepthbuf_pars_fragment:nv,logdepthbuf_pars_vertex:iv,logdepthbuf_vertex:sv,map_fragment:rv,map_pars_fragment:ov,map_particle_fragment:av,map_particle_pars_fragment:lv,metalnessmap_fragment:cv,metalnessmap_pars_fragment:uv,morphcolor_vertex:hv,morphnormal_vertex:dv,morphtarget_pars_vertex:fv,morphtarget_vertex:pv,normal_fragment_begin:mv,normal_fragment_maps:gv,normal_pars_fragment:_v,normal_pars_vertex:xv,normal_vertex:vv,normalmap_pars_fragment:yv,clearcoat_normal_fragment_begin:bv,clearcoat_normal_fragment_maps:Mv,clearcoat_pars_fragment:Sv,iridescence_pars_fragment:wv,output_fragment:Tv,packing:Ev,premultiplied_alpha_fragment:Av,project_vertex:Cv,dithering_fragment:Rv,dithering_pars_fragment:Lv,roughnessmap_fragment:Iv,roughnessmap_pars_fragment:Pv,shadowmap_pars_fragment:Dv,shadowmap_pars_vertex:Fv,shadowmap_vertex:Nv,shadowmask_pars_fragment:Ov,skinbase_vertex:kv,skinning_pars_vertex:Uv,skinning_vertex:Bv,skinnormal_vertex:zv,specularmap_fragment:Vv,specularmap_pars_fragment:Hv,tonemapping_fragment:Gv,tonemapping_pars_fragment:Wv,transmission_fragment:jv,transmission_pars_fragment:qv,uv_pars_fragment:Xv,uv_pars_vertex:$v,uv_vertex:Kv,uv2_pars_fragment:Yv,uv2_pars_vertex:Zv,uv2_vertex:Jv,worldpos_vertex:Qv,background_vert:ey,background_frag:ty,cube_vert:ny,cube_frag:iy,depth_vert:sy,depth_frag:ry,distanceRGBA_vert:oy,distanceRGBA_frag:ay,equirect_vert:ly,equirect_frag:cy,linedashed_vert:uy,linedashed_frag:hy,meshbasic_vert:dy,meshbasic_frag:fy,meshlambert_vert:py,meshlambert_frag:my,meshmatcap_vert:gy,meshmatcap_frag:_y,meshnormal_vert:xy,meshnormal_frag:vy,meshphong_vert:yy,meshphong_frag:by,meshphysical_vert:My,meshphysical_frag:Sy,meshtoon_vert:wy,meshtoon_frag:Ty,points_vert:Ey,points_frag:Ay,shadow_vert:Cy,shadow_frag:Ry,sprite_vert:Ly,sprite_frag:Iy},ve={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Vt},uv2Transform:{value:new Vt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vt}}},fn={basic:{uniforms:xt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:xt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.fog,ve.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:xt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:xt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:xt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:xt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:xt([ve.points,ve.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:xt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:xt([ve.common,ve.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:xt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:xt([ve.sprite,ve.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},cube:{uniforms:xt([ve.envmap,{opacity:{value:1}}]),vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:xt([ve.common,ve.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:xt([ve.lights,ve.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};fn.physical={uniforms:xt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new He(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};function Py(i,e,t,n,s,r){const o=new Pe(0);let a=s===!0?0:1,l,c,u=null,h=0,d=null;function p(m,f){let _=!1,M=f.isScene===!0?f.background:null;M&&M.isTexture&&(M=e.get(M));const E=i.xr,T=E.getSession&&E.getSession();T&&T.environmentBlendMode==="additive"&&(M=null),M===null?g(o,a):M&&M.isColor&&(g(M,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Oo)?(c===void 0&&(c=new Ht(new Is(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Ms(fn.cube.uniforms),vertexShader:fn.cube.vertexShader,fragmentShader:fn.cube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,(u!==M||h!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ht(new Uo(2,2),new Ii({name:"BackgroundMaterial",uniforms:Ms(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,f){t.buffers.color.setClear(m.r,m.g,m.b,f,r)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),a=f,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:p}}function Dy(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=f(null);let c=l,u=!1;function h(O,Y,V,j,q){let G=!1;if(o){const Z=m(j,V,Y);c!==Z&&(c=Z,p(c.object)),G=_(O,j,V,q),G&&M(O,j,V,q)}else{const Z=Y.wireframe===!0;(c.geometry!==j.id||c.program!==V.id||c.wireframe!==Z)&&(c.geometry=j.id,c.program=V.id,c.wireframe=Z,G=!0)}q!==null&&t.update(q,34963),(G||u)&&(u=!1,b(O,Y,V,j),q!==null&&i.bindBuffer(34963,t.get(q).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(O){return n.isWebGL2?i.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?i.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function m(O,Y,V){const j=V.wireframe===!0;let q=a[O.id];q===void 0&&(q={},a[O.id]=q);let G=q[Y.id];G===void 0&&(G={},q[Y.id]=G);let Z=G[j];return Z===void 0&&(Z=f(d()),G[j]=Z),Z}function f(O){const Y=[],V=[],j=[];for(let q=0;q<s;q++)Y[q]=0,V[q]=0,j[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:V,attributeDivisors:j,object:O,attributes:{},index:null}}function _(O,Y,V,j){const q=c.attributes,G=Y.attributes;let Z=0;const le=V.getAttributes();for(const ie in le)if(le[ie].location>=0){const Ee=q[ie];let N=G[ie];if(N===void 0&&(ie==="instanceMatrix"&&O.instanceMatrix&&(N=O.instanceMatrix),ie==="instanceColor"&&O.instanceColor&&(N=O.instanceColor)),Ee===void 0||Ee.attribute!==N||N&&Ee.data!==N.data)return!0;Z++}return c.attributesNum!==Z||c.index!==j}function M(O,Y,V,j){const q={},G=Y.attributes;let Z=0;const le=V.getAttributes();for(const ie in le)if(le[ie].location>=0){let Ee=G[ie];Ee===void 0&&(ie==="instanceMatrix"&&O.instanceMatrix&&(Ee=O.instanceMatrix),ie==="instanceColor"&&O.instanceColor&&(Ee=O.instanceColor));const N={};N.attribute=Ee,Ee&&Ee.data&&(N.data=Ee.data),q[ie]=N,Z++}c.attributes=q,c.attributesNum=Z,c.index=j}function E(){const O=c.newAttributes;for(let Y=0,V=O.length;Y<V;Y++)O[Y]=0}function T(O){w(O,0)}function w(O,Y){const V=c.newAttributes,j=c.enabledAttributes,q=c.attributeDivisors;V[O]=1,j[O]===0&&(i.enableVertexAttribArray(O),j[O]=1),q[O]!==Y&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,Y),q[O]=Y)}function I(){const O=c.newAttributes,Y=c.enabledAttributes;for(let V=0,j=Y.length;V<j;V++)Y[V]!==O[V]&&(i.disableVertexAttribArray(V),Y[V]=0)}function F(O,Y,V,j,q,G){n.isWebGL2===!0&&(V===5124||V===5125)?i.vertexAttribIPointer(O,Y,V,q,G):i.vertexAttribPointer(O,Y,V,j,q,G)}function b(O,Y,V,j){if(n.isWebGL2===!1&&(O.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const q=j.attributes,G=V.getAttributes(),Z=Y.defaultAttributeValues;for(const le in G){const ie=G[le];if(ie.location>=0){let se=q[le];if(se===void 0&&(le==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),le==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),se!==void 0){const Ee=se.normalized,N=se.itemSize,D=t.get(se);if(D===void 0)continue;const ae=D.buffer,ue=D.type,we=D.bytesPerElement;if(se.isInterleavedBufferAttribute){const he=se.data,Te=he.stride,xe=se.offset;if(he.isInstancedInterleavedBuffer){for(let y=0;y<ie.locationSize;y++)w(ie.location+y,he.meshPerAttribute);O.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let y=0;y<ie.locationSize;y++)T(ie.location+y);i.bindBuffer(34962,ae);for(let y=0;y<ie.locationSize;y++)F(ie.location+y,N/ie.locationSize,ue,Ee,Te*we,(xe+N/ie.locationSize*y)*we)}else{if(se.isInstancedBufferAttribute){for(let he=0;he<ie.locationSize;he++)w(ie.location+he,se.meshPerAttribute);O.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let he=0;he<ie.locationSize;he++)T(ie.location+he);i.bindBuffer(34962,ae);for(let he=0;he<ie.locationSize;he++)F(ie.location+he,N/ie.locationSize,ue,Ee,N*we,N/ie.locationSize*he*we)}}else if(Z!==void 0){const Ee=Z[le];if(Ee!==void 0)switch(Ee.length){case 2:i.vertexAttrib2fv(ie.location,Ee);break;case 3:i.vertexAttrib3fv(ie.location,Ee);break;case 4:i.vertexAttrib4fv(ie.location,Ee);break;default:i.vertexAttrib1fv(ie.location,Ee)}}}}I()}function C(){de();for(const O in a){const Y=a[O];for(const V in Y){const j=Y[V];for(const q in j)g(j[q].object),delete j[q];delete Y[V]}delete a[O]}}function X(O){if(a[O.id]===void 0)return;const Y=a[O.id];for(const V in Y){const j=Y[V];for(const q in j)g(j[q].object),delete j[q];delete Y[V]}delete a[O.id]}function z(O){for(const Y in a){const V=a[Y];if(V[O.id]===void 0)continue;const j=V[O.id];for(const q in j)g(j[q].object),delete j[q];delete V[O.id]}}function de(){oe(),u=!0,c!==l&&(c=l,p(c.object))}function oe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:de,resetDefaultState:oe,dispose:C,releaseStatesOfGeometry:X,releaseStatesOfProgram:z,initAttributes:E,enableAttribute:T,disableUnusedAttributes:I}}function Fy(i,e,t,n){const s=n.isWebGL2;let r;function o(c){r=c}function a(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,p;if(s)d=i,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Ny(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(F){if(F==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),d=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),f=i.getParameter(36347),_=i.getParameter(36348),M=i.getParameter(36349),E=d>0,T=o||e.has("OES_texture_float"),w=E&&T,I=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:E,floatFragmentTextures:T,floatVertexTextures:w,maxSamples:I}}function Oy(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new hi,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,p){const g=h.length!==0||d||n!==0||s;return s=d,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,d,p){const g=h.clippingPlanes,m=h.clipIntersection,f=h.clipShadows,_=i.get(h);if(!s||g===null||g.length===0||r&&!f)r?u(null):c();else{const M=r?0:n,E=M*4;let T=_.clippingState||null;l.value=T,T=u(g,d,E,p);for(let w=0;w!==E;++w)T[w]=t[w];_.clippingState=T,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const m=h!==null?h.length:0;let f=null;if(m!==0){if(f=l.value,g!==!0||f===null){const _=p+m*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(f===null||f.length<_)&&(f=new Float32Array(_));for(let E=0,T=p;E!==m;++E,T+=4)o.copy(h[E]).applyMatrix4(M,a),o.normal.toArray(f,T),f[T+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,f}}function ky(i){let e=new WeakMap;function t(o,a){return a===Za?o.mapping=_s:a===Ja&&(o.mapping=xs),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Za||a===Ja)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Q0(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class zl extends Wd{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const os=4,Au=[.125,.215,.35,.446,.526,.582],mi=20,wa=new zl,Cu=new Pe;let Ta=null;const di=(1+Math.sqrt(5))/2,Ji=1/di,Ru=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,di,Ji),new L(0,di,-Ji),new L(Ji,0,di),new L(-Ji,0,di),new L(di,Ji,0),new L(-di,Ji,0)];class Lu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ta=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ta),e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ta=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:dr,format:Zt,encoding:Ri,depthBuffer:!1},s=Iu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uy(r)),this._blurMaterial=By(r,e,t)}return s}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,s){const a=new Tt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Cu),u.toneMapping=Dn,u.autoClear=!1;const p=new xi({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new Ht(new Is,p);let m=!1;const f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,m=!0):(p.color.copy(Cu),m=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):M===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const E=this._cubeSize;Jr(s,M*E,_>2?E:0,E,E),u.setRenderTarget(s),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===_s||e.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Jr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ru[(s-1)%Ru.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ht(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*mi-1),m=r/g,f=isFinite(r)?1+Math.floor(u*m):mi;f>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${mi}`);const _=[];let M=0;for(let F=0;F<mi;++F){const b=F/m,C=Math.exp(-b*b/2);_.push(C),F===0?M+=C:F<f&&(M+=2*C)}for(let F=0;F<_.length;F++)_[F]=_[F]/M;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const T=this._sizeLods[s],w=3*T*(s>E-os?s-E+os:0),I=4*(this._cubeSize-T);Jr(t,w,I,3*T,2*T),l.setRenderTarget(t),l.render(h,wa)}}function Uy(i){const e=[],t=[],n=[];let s=i;const r=i-os+1+Au.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-os?l=Au[o-i+os-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,m=3,f=2,_=1,M=new Float32Array(m*g*p),E=new Float32Array(f*g*p),T=new Float32Array(_*g*p);for(let I=0;I<p;I++){const F=I%3*2/3-1,b=I>2?0:-1,C=[F,b,0,F+2/3,b,0,F+2/3,b+1,0,F,b,0,F+2/3,b+1,0,F,b+1,0];M.set(C,m*g*I),E.set(d,f*g*I);const X=[I,I,I,I,I,I];T.set(X,_*g*I)}const w=new xn;w.setAttribute("position",new kt(M,m)),w.setAttribute("uv",new kt(E,f)),w.setAttribute("faceIndex",new kt(T,_)),e.push(w),s>os&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Iu(i,e,t){const n=new Li(i,e,t);return n.texture.mapping=Oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function By(i,e,t){const n=new Float32Array(mi),s=new L(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Pu(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Du(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Vl(){return`

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
	`}function zy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Za||l===Ja,u=l===_s||l===xs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Lu(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Lu(i));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Vy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Hy(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const p=h.morphAttributes;for(const g in p){const m=p[g];for(let f=0,_=m.length;f<_;f++)e.update(m[f],34962)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let m=0;if(p!==null){const M=p.array;m=p.version;for(let E=0,T=M.length;E<T;E+=3){const w=M[E+0],I=M[E+1],F=M[E+2];d.push(w,I,I,F,F,w)}}else{const M=g.array;m=g.version;for(let E=0,T=M.length/3-1;E<T;E+=3){const w=E+0,I=E+1,F=E+2;d.push(w,I,I,F,F,w)}}const f=new(kd(d)?Gd:Hd)(d,1);f.version=m;const _=r.get(h);_&&e.remove(_),r.set(h,f)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Gy(i,e,t,n){const s=n.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,p){i.drawElements(r,p,a,d*l),t.update(p,r,1)}function h(d,p,g){if(g===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,p,a,d*l,g),t.update(p,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Wy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function jy(i,e){return i[0]-e[0]}function qy(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Ea(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function Xy(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new tt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,f=m!==void 0?m.length:0;let _=r.get(u);if(_===void 0||_.count!==f){let V=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",V)};var g=V;_!==void 0&&_.texture.dispose();const T=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,F=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let X=0;T===!0&&(X=1),w===!0&&(X=2),I===!0&&(X=3);let z=u.attributes.position.count*X,de=1;z>e.maxTextureSize&&(de=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const oe=new Float32Array(z*de*4*f),O=new Vd(oe,z,de,f);O.type=Zn,O.needsUpdate=!0;const Y=X*4;for(let j=0;j<f;j++){const q=F[j],G=b[j],Z=C[j],le=z*de*4*j;for(let ie=0;ie<q.count;ie++){const se=ie*Y;T===!0&&(o.fromBufferAttribute(q,ie),q.normalized===!0&&Ea(o,q),oe[le+se+0]=o.x,oe[le+se+1]=o.y,oe[le+se+2]=o.z,oe[le+se+3]=0),w===!0&&(o.fromBufferAttribute(G,ie),G.normalized===!0&&Ea(o,G),oe[le+se+4]=o.x,oe[le+se+5]=o.y,oe[le+se+6]=o.z,oe[le+se+7]=0),I===!0&&(o.fromBufferAttribute(Z,ie),Z.normalized===!0&&Ea(o,Z),oe[le+se+8]=o.x,oe[le+se+9]=o.y,oe[le+se+10]=o.z,oe[le+se+11]=Z.itemSize===4?o.w:1)}}_={count:f,texture:O,size:new He(z,de)},r.set(u,_),u.addEventListener("dispose",V)}let M=0;for(let T=0;T<p.length;T++)M+=p[T];const E=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(i,"morphTargetBaseInfluence",E),d.getUniforms().setValue(i,"morphTargetInfluences",p),d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let f=n[u.id];if(f===void 0||f.length!==m){f=[];for(let w=0;w<m;w++)f[w]=[w,0];n[u.id]=f}for(let w=0;w<m;w++){const I=f[w];I[0]=w,I[1]=p[w]}f.sort(qy);for(let w=0;w<8;w++)w<m&&f[w][1]?(a[w][0]=f[w][0],a[w][1]=f[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(jy);const _=u.morphAttributes.position,M=u.morphAttributes.normal;let E=0;for(let w=0;w<8;w++){const I=a[w],F=I[0],b=I[1];F!==Number.MAX_SAFE_INTEGER&&b?(_&&u.getAttribute("morphTarget"+w)!==_[F]&&u.setAttribute("morphTarget"+w,_[F]),M&&u.getAttribute("morphNormal"+w)!==M[F]&&u.setAttribute("morphNormal"+w,M[F]),s[w]=b,E+=b):(_&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),M&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),s[w]=0)}const T=u.morphTargetsRelative?1:1-E;d.getUniforms().setValue(i,"morphTargetBaseInfluence",T),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function $y(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Xd=new At,$d=new Vd,Kd=new U0,Yd=new jd,Fu=[],Nu=[],Ou=new Float32Array(16),ku=new Float32Array(9),Uu=new Float32Array(4);function Ps(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Fu[s];if(r===void 0&&(r=new Float32Array(s),Fu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Bo(i,e){let t=Nu[e];t===void 0&&(t=new Int32Array(e),Nu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ky(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Yy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function Zy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function Jy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function Qy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;Uu.set(n),i.uniformMatrix2fv(this.addr,!1,Uu),Rt(t,n)}}function eb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;ku.set(n),i.uniformMatrix3fv(this.addr,!1,ku),Rt(t,n)}}function tb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;Ou.set(n),i.uniformMatrix4fv(this.addr,!1,Ou),Rt(t,n)}}function nb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ib(i,e){const t=this.cache;Ct(t,e)||(i.uniform2iv(this.addr,e),Rt(t,e))}function sb(i,e){const t=this.cache;Ct(t,e)||(i.uniform3iv(this.addr,e),Rt(t,e))}function rb(i,e){const t=this.cache;Ct(t,e)||(i.uniform4iv(this.addr,e),Rt(t,e))}function ob(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ab(i,e){const t=this.cache;Ct(t,e)||(i.uniform2uiv(this.addr,e),Rt(t,e))}function lb(i,e){const t=this.cache;Ct(t,e)||(i.uniform3uiv(this.addr,e),Rt(t,e))}function cb(i,e){const t=this.cache;Ct(t,e)||(i.uniform4uiv(this.addr,e),Rt(t,e))}function ub(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||Xd,s)}function hb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Kd,s)}function db(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Yd,s)}function fb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||$d,s)}function pb(i){switch(i){case 5126:return Ky;case 35664:return Yy;case 35665:return Zy;case 35666:return Jy;case 35674:return Qy;case 35675:return eb;case 35676:return tb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return sb;case 35669:case 35673:return rb;case 5125:return ob;case 36294:return ab;case 36295:return lb;case 36296:return cb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return hb;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return fb}}function mb(i,e){i.uniform1fv(this.addr,e)}function gb(i,e){const t=Ps(e,this.size,2);i.uniform2fv(this.addr,t)}function _b(i,e){const t=Ps(e,this.size,3);i.uniform3fv(this.addr,t)}function xb(i,e){const t=Ps(e,this.size,4);i.uniform4fv(this.addr,t)}function vb(i,e){const t=Ps(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function yb(i,e){const t=Ps(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function bb(i,e){const t=Ps(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Mb(i,e){i.uniform1iv(this.addr,e)}function Sb(i,e){i.uniform2iv(this.addr,e)}function wb(i,e){i.uniform3iv(this.addr,e)}function Tb(i,e){i.uniform4iv(this.addr,e)}function Eb(i,e){i.uniform1uiv(this.addr,e)}function Ab(i,e){i.uniform2uiv(this.addr,e)}function Cb(i,e){i.uniform3uiv(this.addr,e)}function Rb(i,e){i.uniform4uiv(this.addr,e)}function Lb(i,e,t){const n=e.length,s=Bo(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Xd,s[r])}function Ib(i,e,t){const n=e.length,s=Bo(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Kd,s[r])}function Pb(i,e,t){const n=e.length,s=Bo(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Yd,s[r])}function Db(i,e,t){const n=e.length,s=Bo(t,n);i.uniform1iv(this.addr,s);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||$d,s[r])}function Fb(i){switch(i){case 5126:return mb;case 35664:return gb;case 35665:return _b;case 35666:return xb;case 35674:return vb;case 35675:return yb;case 35676:return bb;case 5124:case 35670:return Mb;case 35667:case 35671:return Sb;case 35668:case 35672:return wb;case 35669:case 35673:return Tb;case 5125:return Eb;case 36294:return Ab;case 36295:return Cb;case 36296:return Rb;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Db}}class Nb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=pb(t.type)}}class Ob{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Fb(t.type)}}class kb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function Bu(i,e){i.seq.push(e),i.map[e.id]=e}function Ub(i,e,t){const n=i.name,s=n.length;for(Aa.lastIndex=0;;){const r=Aa.exec(n),o=Aa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bu(t,c===void 0?new Nb(a,i,e):new Ob(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new kb(a),Bu(t,h)),t=h}}}class uo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Ub(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function zu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Bb=0;function zb(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Vb(i){switch(i){case Ri:return["Linear","( value )"];case et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Vu(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+zb(i.getShaderSource(e),o)}else return s}function Hb(i,e){const t=Vb(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Gb(i,e){let t;switch(e){case $_:t="Linear";break;case K_:t="Reinhard";break;case Y_:t="OptimizedCineon";break;case Z_:t="ACESFilmic";break;case J_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wb(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ys).join(`
`)}function jb(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qb(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ys(i){return i!==""}function Hu(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xb=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(i){return i.replace(Xb,$b)}function $b(i,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return sl(t)}const Kb=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(i){return i.replace(Yb,Zd).replace(Kb,Zb)}function Zb(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Zd(i,e,t,n)}function Zd(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ju(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ad?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===T_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ks&&(e="SHADOWMAP_TYPE_VSM"),e}function Qb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case xs:e="ENVMAP_TYPE_CUBE";break;case Oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function tM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ld:e="ENVMAP_BLENDING_MULTIPLY";break;case q_:e="ENVMAP_BLENDING_MIX";break;case X_:e="ENVMAP_BLENDING_ADD";break}return e}function nM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function iM(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Jb(t),c=Qb(t),u=eM(t),h=tM(t),d=nM(t),p=t.isWebGL2?"":Wb(t),g=jb(r),m=s.createProgram();let f,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(Ys).join(`
`),f.length>0&&(f+=`
`),_=[p,g].filter(Ys).join(`
`),_.length>0&&(_+=`
`)):(f=[ju(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),_=[p,ju(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Dn?Gb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,Hb("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),o=sl(o),o=Hu(o,t),o=Gu(o,t),a=sl(a),a=Hu(a,t),a=Gu(a,t),o=Wu(o),a=Wu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=M+f+o,T=M+_+a,w=zu(s,35633,E),I=zu(s,35632,T);if(s.attachShader(m,w),s.attachShader(m,I),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),i.debug.checkShaderErrors){const C=s.getProgramInfoLog(m).trim(),X=s.getShaderInfoLog(w).trim(),z=s.getShaderInfoLog(I).trim();let de=!0,oe=!0;if(s.getProgramParameter(m,35714)===!1){de=!1;const O=Vu(s,w,"vertex"),Y=Vu(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+C+`
`+O+`
`+Y)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(X===""||z==="")&&(oe=!1);oe&&(this.diagnostics={runnable:de,programLog:C,vertexShader:{log:X,prefix:f},fragmentShader:{log:z,prefix:_}})}s.deleteShader(w),s.deleteShader(I);let F;this.getUniforms=function(){return F===void 0&&(F=new uo(s,m)),F};let b;return this.getAttributes=function(){return b===void 0&&(b=qb(s,m)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Bb++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=I,this}let sM=0;class rM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new oM(e);t.set(e,n)}return t.get(e)}}class oM{constructor(e){this.id=sM++,this.code=e,this.usedTimes=0}}function aM(i,e,t,n,s,r,o){const a=new Ul,l=new rM,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b,C,X,z,de){const oe=z.fog,O=de.geometry,Y=b.isMeshStandardMaterial?z.environment:null,V=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),j=!!V&&V.mapping===Oo?V.image.height:null,q=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const G=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Z=G!==void 0?G.length:0;let le=0;O.morphAttributes.position!==void 0&&(le=1),O.morphAttributes.normal!==void 0&&(le=2),O.morphAttributes.color!==void 0&&(le=3);let ie,se,Ee,N;if(q){const Te=fn[q];ie=Te.vertexShader,se=Te.fragmentShader}else ie=b.vertexShader,se=b.fragmentShader,l.update(b),Ee=l.getVertexShaderID(b),N=l.getFragmentShaderID(b);const D=i.getRenderTarget(),ae=b.alphaTest>0,ue=b.clearcoat>0,we=b.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:b.type,vertexShader:ie,fragmentShader:se,defines:b.defines,customVertexShaderID:Ee,customFragmentShaderID:N,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,instancing:de.isInstancedMesh===!0,instancingColor:de.isInstancedMesh===!0&&de.instanceColor!==null,supportsVertexTextures:d,outputEncoding:D===null?i.outputEncoding:D.isXRRenderTarget===!0?D.texture.encoding:Ri,map:!!b.map,matcap:!!b.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:j,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===y0,tangentSpaceNormalMap:b.normalMapType===Ol,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===et,clearcoat:ue,clearcoatMap:ue&&!!b.clearcoatMap,clearcoatRoughnessMap:ue&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:ue&&!!b.clearcoatNormalMap,iridescence:we,iridescenceMap:we&&!!b.iridescenceMap,iridescenceThicknessMap:we&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===us,alphaMap:!!b.alphaMap,alphaTest:ae,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!O.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!oe,useFog:b.fog===!0,fogExp2:oe&&oe.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:h,skinning:de.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:le,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&X.length>0,shadowMapType:i.shadowMap.type,toneMapping:b.toneMapped?i.toneMapping:Dn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ai,flipSided:b.side===en,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const X in b.defines)C.push(X),C.push(b.defines[X]);return b.isRawShaderMaterial===!1&&(_(C,b),M(C,b),C.push(i.outputEncoding)),C.push(b.customProgramCacheKey),C.join()}function _(b,C){b.push(C.precision),b.push(C.outputEncoding),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.combine),b.push(C.vertexUvs),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function M(b,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),C.fog&&a.enable(33),b.push(a.mask),a.disableAll(),C.useFog&&a.enable(0),C.flatShading&&a.enable(1),C.logarithmicDepthBuffer&&a.enable(2),C.skinning&&a.enable(3),C.morphTargets&&a.enable(4),C.morphNormals&&a.enable(5),C.morphColors&&a.enable(6),C.premultipliedAlpha&&a.enable(7),C.shadowMapEnabled&&a.enable(8),C.physicallyCorrectLights&&a.enable(9),C.doubleSided&&a.enable(10),C.flipSided&&a.enable(11),C.useDepthPacking&&a.enable(12),C.dithering&&a.enable(13),C.specularIntensityMap&&a.enable(14),C.specularColorMap&&a.enable(15),C.transmission&&a.enable(16),C.transmissionMap&&a.enable(17),C.thicknessMap&&a.enable(18),C.sheen&&a.enable(19),C.sheenColorMap&&a.enable(20),C.sheenRoughnessMap&&a.enable(21),C.decodeVideoTexture&&a.enable(22),C.opaque&&a.enable(23),b.push(a.mask)}function E(b){const C=g[b.type];let X;if(C){const z=fn[C];X=K0.clone(z.uniforms)}else X=b.uniforms;return X}function T(b,C){let X;for(let z=0,de=c.length;z<de;z++){const oe=c[z];if(oe.cacheKey===C){X=oe,++X.usedTimes;break}}return X===void 0&&(X=new iM(i,C,b,r),c.push(X)),X}function w(b){if(--b.usedTimes===0){const C=c.indexOf(b);c[C]=c[c.length-1],c.pop(),b.destroy()}}function I(b){l.remove(b)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:T,releaseProgram:w,releaseShaderCache:I,programs:c,dispose:F}}function lM(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function cM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,p,g,m,f){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:m,group:f},i[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=f),e++,_}function a(h,d,p,g,m,f){const _=o(h,d,p,g,m,f);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):t.push(_)}function l(h,d,p,g,m,f){const _=o(h,d,p,g,m,f);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function c(h,d){t.length>1&&t.sort(h||cM),n.length>1&&n.sort(d||qu),s.length>1&&s.sort(d||qu)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function uM(){let i=new WeakMap;function e(n,s){let r;return i.has(n)===!1?(r=new Xu,i.set(n,[r])):s>=i.get(n).length?(r=new Xu,i.get(n).push(r)):r=i.get(n)[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function hM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Pe};break;case"SpotLight":t={position:new L,direction:new L,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function dM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let fM=0;function pM(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function mM(i,e){const t=new hM,n=dM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)s.probe.push(new L);const r=new L,o=new Xe,a=new Xe;function l(u,h){let d=0,p=0,g=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let m=0,f=0,_=0,M=0,E=0,T=0,w=0,I=0;u.sort(pM);const F=h!==!0?Math.PI:1;for(let C=0,X=u.length;C<X;C++){const z=u[C],de=z.color,oe=z.intensity,O=z.distance,Y=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=de.r*oe*F,p+=de.g*oe*F,g+=de.b*oe*F;else if(z.isLightProbe)for(let V=0;V<9;V++)s.probe[V].addScaledVector(z.sh.coefficients[V],oe);else if(z.isDirectionalLight){const V=t.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity*F),z.castShadow){const j=z.shadow,q=n.get(z);q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,s.directionalShadow[m]=q,s.directionalShadowMap[m]=Y,s.directionalShadowMatrix[m]=z.shadow.matrix,T++}s.directional[m]=V,m++}else if(z.isSpotLight){const V=t.get(z);if(V.position.setFromMatrixPosition(z.matrixWorld),V.color.copy(de).multiplyScalar(oe*F),V.distance=O,V.coneCos=Math.cos(z.angle),V.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),V.decay=z.decay,z.castShadow){const j=z.shadow,q=n.get(z);q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,s.spotShadow[_]=q,s.spotShadowMap[_]=Y,s.spotShadowMatrix[_]=z.shadow.matrix,I++}s.spot[_]=V,_++}else if(z.isRectAreaLight){const V=t.get(z);V.color.copy(de).multiplyScalar(oe),V.halfWidth.set(z.width*.5,0,0),V.halfHeight.set(0,z.height*.5,0),s.rectArea[M]=V,M++}else if(z.isPointLight){const V=t.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity*F),V.distance=z.distance,V.decay=z.decay,z.castShadow){const j=z.shadow,q=n.get(z);q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,s.pointShadow[f]=q,s.pointShadowMap[f]=Y,s.pointShadowMatrix[f]=z.shadow.matrix,w++}s.point[f]=V,f++}else if(z.isHemisphereLight){const V=t.get(z);V.skyColor.copy(z.color).multiplyScalar(oe*F),V.groundColor.copy(z.groundColor).multiplyScalar(oe*F),s.hemi[E]=V,E++}}M>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_FLOAT_1,s.rectAreaLTC2=ve.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_HALF_1,s.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==m||b.pointLength!==f||b.spotLength!==_||b.rectAreaLength!==M||b.hemiLength!==E||b.numDirectionalShadows!==T||b.numPointShadows!==w||b.numSpotShadows!==I)&&(s.directional.length=m,s.spot.length=_,s.rectArea.length=M,s.point.length=f,s.hemi.length=E,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=I,s.spotShadowMap.length=I,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=w,s.spotShadowMatrix.length=I,b.directionalLength=m,b.pointLength=f,b.spotLength=_,b.rectAreaLength=M,b.hemiLength=E,b.numDirectionalShadows=T,b.numPointShadows=w,b.numSpotShadows=I,s.version=fM++)}function c(u,h){let d=0,p=0,g=0,m=0,f=0;const _=h.matrixWorldInverse;for(let M=0,E=u.length;M<E;M++){const T=u[M];if(T.isDirectionalLight){const w=s.directional[d];w.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),d++}else if(T.isSpotLight){const w=s.spot[g];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),g++}else if(T.isRectAreaLight){const w=s.rectArea[m];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(_),a.identity(),o.copy(T.matrixWorld),o.premultiply(_),a.extractRotation(o),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),m++}else if(T.isPointLight){const w=s.point[p];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(_),p++}else if(T.isHemisphereLight){const w=s.hemi[f];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(_),f++}}}return{setup:l,setupView:c,state:s}}function $u(i,e){const t=new mM(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(h){n.push(h)}function a(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function gM(i,e){let t=new WeakMap;function n(r,o=0){let a;return t.has(r)===!1?(a=new $u(i,e),t.set(r,[a])):o>=t.get(r).length?(a=new $u(i,e),t.get(r).push(a)):a=t.get(r)[o],a}function s(){t=new WeakMap}return{get:n,dispose:s}}class _M extends gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=x0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xM extends gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yM=`uniform sampler2D shadow_pass;
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
}`;function bM(i,e,t){let n=new Bl;const s=new He,r=new He,o=new tt,a=new _M({depthPacking:v0}),l=new xM,c={},u=t.maxTextureSize,h={0:en,1:gs,2:Ai},d=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:vM,fragmentShader:yM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new xn;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ht(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ad,this.render=function(T,w,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;const F=i.getRenderTarget(),b=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),X=i.state;X.setBlending(ti),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);for(let z=0,de=T.length;z<de;z++){const oe=T[z],O=oe.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const Y=O.getFrameExtents();if(s.multiply(Y),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,O.mapSize.y=r.y)),O.map===null){const j=this.type!==Ks?{minFilter:mt,magFilter:mt}:{};O.map=new Li(s.x,s.y,j),O.map.texture.name=oe.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const V=O.getViewportCount();for(let j=0;j<V;j++){const q=O.getViewport(j);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),X.viewport(o),O.updateMatrices(oe,j),n=O.getFrustum(),E(w,I,O.camera,oe,this.type)}O.isPointLightShadow!==!0&&this.type===Ks&&_(O,I),O.needsUpdate=!1}f.needsUpdate=!1,i.setRenderTarget(F,b,C)};function _(T,w){const I=e.update(m);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Li(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,I,d,m,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,I,p,m,null)}function M(T,w,I,F,b,C){let X=null;const z=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(z!==void 0?X=z:X=I.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const de=X.uuid,oe=w.uuid;let O=c[de];O===void 0&&(O={},c[de]=O);let Y=O[oe];Y===void 0&&(Y=X.clone(),O[oe]=Y),X=Y}return X.visible=w.visible,X.wireframe=w.wireframe,C===Ks?X.side=w.shadowSide!==null?w.shadowSide:w.side:X.side=w.shadowSide!==null?w.shadowSide:h[w.side],X.alphaMap=w.alphaMap,X.alphaTest=w.alphaTest,X.clipShadows=w.clipShadows,X.clippingPlanes=w.clippingPlanes,X.clipIntersection=w.clipIntersection,X.displacementMap=w.displacementMap,X.displacementScale=w.displacementScale,X.displacementBias=w.displacementBias,X.wireframeLinewidth=w.wireframeLinewidth,X.linewidth=w.linewidth,I.isPointLight===!0&&X.isMeshDistanceMaterial===!0&&(X.referencePosition.setFromMatrixPosition(I.matrixWorld),X.nearDistance=F,X.farDistance=b),X}function E(T,w,I,F,b){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Ks)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const z=e.update(T),de=T.material;if(Array.isArray(de)){const oe=z.groups;for(let O=0,Y=oe.length;O<Y;O++){const V=oe[O],j=de[V.materialIndex];if(j&&j.visible){const q=M(T,j,F,I.near,I.far,b);i.renderBufferDirect(I,null,z,q,T,V)}}}else if(de.visible){const oe=M(T,de,F,I.near,I.far,b);i.renderBufferDirect(I,null,z,oe,T,null)}}const X=T.children;for(let z=0,de=X.length;z<de;z++)E(X[z],w,I,F,b)}}function MM(i,e,t){const n=t.isWebGL2;function s(){let R=!1;const me=new tt;let ge=null;const Ce=new tt(0,0,0,0);return{setMask:function(ye){ge!==ye&&!R&&(i.colorMask(ye,ye,ye,ye),ge=ye)},setLocked:function(ye){R=ye},setClear:function(ye,Re,pe,Ie,Ze){Ze===!0&&(ye*=Ie,Re*=Ie,pe*=Ie),me.set(ye,Re,pe,Ie),Ce.equals(me)===!1&&(i.clearColor(ye,Re,pe,Ie),Ce.copy(me))},reset:function(){R=!1,ge=null,Ce.set(-1,0,0,0)}}}function r(){let R=!1,me=null,ge=null,Ce=null;return{setTest:function(ye){ye?N(2929):D(2929)},setMask:function(ye){me!==ye&&!R&&(i.depthMask(ye),me=ye)},setFunc:function(ye){if(ge!==ye){if(ye)switch(ye){case B_:i.depthFunc(512);break;case z_:i.depthFunc(519);break;case V_:i.depthFunc(513);break;case Ya:i.depthFunc(515);break;case H_:i.depthFunc(514);break;case G_:i.depthFunc(518);break;case W_:i.depthFunc(516);break;case j_:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);ge=ye}},setLocked:function(ye){R=ye},setClear:function(ye){Ce!==ye&&(i.clearDepth(ye),Ce=ye)},reset:function(){R=!1,me=null,ge=null,Ce=null}}}function o(){let R=!1,me=null,ge=null,Ce=null,ye=null,Re=null,pe=null,Ie=null,Ze=null;return{setTest:function(Je){R||(Je?N(2960):D(2960))},setMask:function(Je){me!==Je&&!R&&(i.stencilMask(Je),me=Je)},setFunc:function(Je,yt,rn){(ge!==Je||Ce!==yt||ye!==rn)&&(i.stencilFunc(Je,yt,rn),ge=Je,Ce=yt,ye=rn)},setOp:function(Je,yt,rn){(Re!==Je||pe!==yt||Ie!==rn)&&(i.stencilOp(Je,yt,rn),Re=Je,pe=yt,Ie=rn)},setLocked:function(Je){R=Je},setClear:function(Je){Ze!==Je&&(i.clearStencil(Je),Ze=Je)},reset:function(){R=!1,me=null,ge=null,Ce=null,ye=null,Re=null,pe=null,Ie=null,Ze=null}}}const a=new s,l=new r,c=new o;let u={},h={},d=new WeakMap,p=[],g=null,m=!1,f=null,_=null,M=null,E=null,T=null,w=null,I=null,F=!1,b=null,C=null,X=null,z=null,de=null;const oe=i.getParameter(35661);let O=!1,Y=0;const V=i.getParameter(7938);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=Y>=2);let j=null,q={};const G=i.getParameter(3088),Z=i.getParameter(2978),le=new tt().fromArray(G),ie=new tt().fromArray(Z);function se(R,me,ge){const Ce=new Uint8Array(4),ye=i.createTexture();i.bindTexture(R,ye),i.texParameteri(R,10241,9728),i.texParameteri(R,10240,9728);for(let Re=0;Re<ge;Re++)i.texImage2D(me+Re,0,6408,1,1,0,6408,5121,Ce);return ye}const Ee={};Ee[3553]=se(3553,3553,1),Ee[34067]=se(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),N(2929),l.setFunc(Ya),A(!1),U(Vc),N(2884),xe(ti);function N(R){u[R]!==!0&&(i.enable(R),u[R]=!0)}function D(R){u[R]!==!1&&(i.disable(R),u[R]=!1)}function ae(R,me){return h[R]!==me?(i.bindFramebuffer(R,me),h[R]=me,n&&(R===36009&&(h[36160]=me),R===36160&&(h[36009]=me)),!0):!1}function ue(R,me){let ge=p,Ce=!1;if(R)if(ge=d.get(me),ge===void 0&&(ge=[],d.set(me,ge)),R.isWebGLMultipleRenderTargets){const ye=R.texture;if(ge.length!==ye.length||ge[0]!==36064){for(let Re=0,pe=ye.length;Re<pe;Re++)ge[Re]=36064+Re;ge.length=ye.length,Ce=!0}}else ge[0]!==36064&&(ge[0]=36064,Ce=!0);else ge[0]!==1029&&(ge[0]=1029,Ce=!0);Ce&&(t.isWebGL2?i.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function we(R){return g!==R?(i.useProgram(R),g=R,!0):!1}const he={[ns]:32774,[C_]:32778,[R_]:32779};if(n)he[jc]=32775,he[qc]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(he[jc]=R.MIN_EXT,he[qc]=R.MAX_EXT)}const Te={[L_]:0,[I_]:1,[P_]:768,[Cd]:770,[U_]:776,[O_]:774,[F_]:772,[D_]:769,[Rd]:771,[k_]:775,[N_]:773};function xe(R,me,ge,Ce,ye,Re,pe,Ie){if(R===ti){m===!0&&(D(3042),m=!1);return}if(m===!1&&(N(3042),m=!0),R!==A_){if(R!==f||Ie!==F){if((_!==ns||T!==ns)&&(i.blendEquation(32774),_=ns,T=ns),Ie)switch(R){case us:i.blendFuncSeparate(1,771,1,771);break;case Hc:i.blendFunc(1,1);break;case Gc:i.blendFuncSeparate(0,769,0,1);break;case Wc:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case us:i.blendFuncSeparate(770,771,1,771);break;case Hc:i.blendFunc(770,1);break;case Gc:i.blendFuncSeparate(0,769,0,1);break;case Wc:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}M=null,E=null,w=null,I=null,f=R,F=Ie}return}ye=ye||me,Re=Re||ge,pe=pe||Ce,(me!==_||ye!==T)&&(i.blendEquationSeparate(he[me],he[ye]),_=me,T=ye),(ge!==M||Ce!==E||Re!==w||pe!==I)&&(i.blendFuncSeparate(Te[ge],Te[Ce],Te[Re],Te[pe]),M=ge,E=Ce,w=Re,I=pe),f=R,F=null}function y(R,me){R.side===Ai?D(2884):N(2884);let ge=R.side===en;me&&(ge=!ge),A(ge),R.blending===us&&R.transparent===!1?xe(ti):xe(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const Ce=R.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Q(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?N(32926):D(32926)}function A(R){b!==R&&(R?i.frontFace(2304):i.frontFace(2305),b=R)}function U(R){R!==S_?(N(2884),R!==C&&(R===Vc?i.cullFace(1029):R===w_?i.cullFace(1028):i.cullFace(1032))):D(2884),C=R}function J(R){R!==X&&(O&&i.lineWidth(R),X=R)}function Q(R,me,ge){R?(N(32823),(z!==me||de!==ge)&&(i.polygonOffset(me,ge),z=me,de=ge)):D(32823)}function ne(R){R?N(3089):D(3089)}function re(R){R===void 0&&(R=33984+oe-1),j!==R&&(i.activeTexture(R),j=R)}function ce(R,me){j===null&&re();let ge=q[j];ge===void 0&&(ge={type:void 0,texture:void 0},q[j]=ge),(ge.type!==R||ge.texture!==me)&&(i.bindTexture(R,me||Ee[R]),ge.type=R,ge.texture=me)}function fe(){const R=q[j];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function v(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function x(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function P(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function H(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Se(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function k(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _e(R){le.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),le.copy(R))}function be(R){ie.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),ie.copy(R))}function Me(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,q={},h={},d=new WeakMap,p=[],g=null,m=!1,f=null,_=null,M=null,E=null,T=null,w=null,I=null,F=!1,b=null,C=null,X=null,z=null,de=null,le.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:N,disable:D,bindFramebuffer:ae,drawBuffers:ue,useProgram:we,setBlending:xe,setMaterial:y,setFlipSided:A,setCullFace:U,setLineWidth:J,setPolygonOffset:Q,setScissorTest:ne,activeTexture:re,bindTexture:ce,unbindTexture:fe,compressedTexImage2D:v,texImage2D:Se,texImage3D:k,texStorage2D:K,texStorage3D:te,texSubImage2D:x,texSubImage3D:P,compressedTexSubImage2D:H,scissor:_e,viewport:be,reset:Me}}function SM(i,e,t,n,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(v,x){return _?new OffscreenCanvas(v,x):mr("canvas")}function E(v,x,P,H){let K=1;if((v.width>H||v.height>H)&&(K=H/Math.max(v.width,v.height)),K<1||x===!0)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap){const te=x?bo:Math.floor,Se=te(K*v.width),k=te(K*v.height);m===void 0&&(m=M(Se,k));const _e=P?M(Se,k):m;return _e.width=Se,_e.height=k,_e.getContext("2d").drawImage(v,0,0,Se,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+v.width+"x"+v.height+") to ("+Se+"x"+k+")."),_e}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+v.width+"x"+v.height+")."),v;return v}function T(v){return il(v.width)&&il(v.height)}function w(v){return a?!1:v.wrapS!==zt||v.wrapT!==zt||v.minFilter!==mt&&v.minFilter!==It}function I(v,x){return v.generateMipmaps&&x&&v.minFilter!==mt&&v.minFilter!==It}function F(v){i.generateMipmap(v)}function b(v,x,P,H,K=!1){if(a===!1)return x;if(v!==null){if(i[v]!==void 0)return i[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let te=x;return x===6403&&(P===5126&&(te=33326),P===5131&&(te=33325),P===5121&&(te=33321)),x===33319&&(P===5126&&(te=33328),P===5131&&(te=33327),P===5121&&(te=33323)),x===6408&&(P===5126&&(te=34836),P===5131&&(te=34842),P===5121&&(te=H===et&&K===!1?35907:32856),P===32819&&(te=32854),P===32820&&(te=32855)),(te===33325||te===33326||te===33327||te===33328||te===34842||te===34836)&&e.get("EXT_color_buffer_float"),te}function C(v,x,P){return I(v,P)===!0||v.isFramebufferTexture&&v.minFilter!==mt&&v.minFilter!==It?Math.log2(Math.max(x.width,x.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?x.mipmaps.length:1}function X(v){return v===mt||v===Qa||v===el?9728:9729}function z(v){const x=v.target;x.removeEventListener("dispose",z),oe(x),x.isVideoTexture&&g.delete(x)}function de(v){const x=v.target;x.removeEventListener("dispose",de),Y(x)}function oe(v){const x=n.get(v);if(x.__webglInit===void 0)return;const P=v.source,H=f.get(P);if(H){const K=H[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&O(v),Object.keys(H).length===0&&f.delete(P)}n.remove(v)}function O(v){const x=n.get(v);i.deleteTexture(x.__webglTexture);const P=v.source,H=f.get(P);delete H[x.__cacheKey],o.memory.textures--}function Y(v){const x=v.texture,P=n.get(v),H=n.get(x);if(H.__webglTexture!==void 0&&(i.deleteTexture(H.__webglTexture),o.memory.textures--),v.depthTexture&&v.depthTexture.dispose(),v.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)i.deleteFramebuffer(P.__webglFramebuffer[K]),P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[K]);else{if(i.deleteFramebuffer(P.__webglFramebuffer),P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let K=0;K<P.__webglColorRenderbuffer.length;K++)P.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[K]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}if(v.isWebGLMultipleRenderTargets)for(let K=0,te=x.length;K<te;K++){const Se=n.get(x[K]);Se.__webglTexture&&(i.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(x[K])}n.remove(x),n.remove(v)}let V=0;function j(){V=0}function q(){const v=V;return v>=l&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+l),V+=1,v}function G(v){const x=[];return x.push(v.wrapS),x.push(v.wrapT),x.push(v.magFilter),x.push(v.minFilter),x.push(v.anisotropy),x.push(v.internalFormat),x.push(v.format),x.push(v.type),x.push(v.generateMipmaps),x.push(v.premultiplyAlpha),x.push(v.flipY),x.push(v.unpackAlignment),x.push(v.encoding),x.join()}function Z(v,x){const P=n.get(v);if(v.isVideoTexture&&ce(v),v.isRenderTargetTexture===!1&&v.version>0&&P.__version!==v.version){const H=v.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(P,v,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,P.__webglTexture)}function le(v,x){const P=n.get(v);if(v.version>0&&P.__version!==v.version){ue(P,v,x);return}t.activeTexture(33984+x),t.bindTexture(35866,P.__webglTexture)}function ie(v,x){const P=n.get(v);if(v.version>0&&P.__version!==v.version){ue(P,v,x);return}t.activeTexture(33984+x),t.bindTexture(32879,P.__webglTexture)}function se(v,x){const P=n.get(v);if(v.version>0&&P.__version!==v.version){we(P,v,x);return}t.activeTexture(33984+x),t.bindTexture(34067,P.__webglTexture)}const Ee={[vs]:10497,[zt]:33071,[vo]:33648},N={[mt]:9728,[Qa]:9984,[el]:9986,[It]:9729,[Pd]:9985,[Cs]:9987};function D(v,x,P){if(P?(i.texParameteri(v,10242,Ee[x.wrapS]),i.texParameteri(v,10243,Ee[x.wrapT]),(v===32879||v===35866)&&i.texParameteri(v,32882,Ee[x.wrapR]),i.texParameteri(v,10240,N[x.magFilter]),i.texParameteri(v,10241,N[x.minFilter])):(i.texParameteri(v,10242,33071),i.texParameteri(v,10243,33071),(v===32879||v===35866)&&i.texParameteri(v,32882,33071),(x.wrapS!==zt||x.wrapT!==zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(v,10240,X(x.magFilter)),i.texParameteri(v,10241,X(x.minFilter)),x.minFilter!==mt&&x.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");if(x.type===Zn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===dr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(v,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function ae(v,x){let P=!1;v.__webglInit===void 0&&(v.__webglInit=!0,x.addEventListener("dispose",z));const H=x.source;let K=f.get(H);K===void 0&&(K={},f.set(H,K));const te=G(x);if(te!==v.__cacheKey){K[te]===void 0&&(K[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),K[te].usedTimes++;const Se=K[v.__cacheKey];Se!==void 0&&(K[v.__cacheKey].usedTimes--,Se.usedTimes===0&&O(x)),v.__cacheKey=te,v.__webglTexture=K[te].texture}return P}function ue(v,x,P){let H=3553;x.isDataArrayTexture&&(H=35866),x.isData3DTexture&&(H=32879);const K=ae(v,x),te=x.source;if(t.activeTexture(33984+P),t.bindTexture(H,v.__webglTexture),te.version!==te.__currentVersion||K===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const Se=w(x)&&T(x.image)===!1;let k=E(x.image,Se,!1,u);k=fe(x,k);const _e=T(k)||a,be=r.convert(x.format,x.encoding);let Me=r.convert(x.type),R=b(x.internalFormat,be,Me,x.encoding,x.isVideoTexture);D(H,x,_e);let me;const ge=x.mipmaps,Ce=a&&x.isVideoTexture!==!0,ye=te.__currentVersion===void 0||K===!0,Re=C(x,k,_e);if(x.isDepthTexture)R=6402,a?x.type===Zn?R=36012:x.type===gi?R=33190:x.type===hs?R=35056:R=33189:x.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Mi&&R===6402&&x.type!==Dd&&x.type!==gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=gi,Me=r.convert(x.type)),x.format===ys&&R===6402&&(R=34041,x.type!==hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=hs,Me=r.convert(x.type))),ye&&(Ce?t.texStorage2D(3553,1,R,k.width,k.height):t.texImage2D(3553,0,R,k.width,k.height,0,be,Me,null));else if(x.isDataTexture)if(ge.length>0&&_e){Ce&&ye&&t.texStorage2D(3553,Re,R,ge[0].width,ge[0].height);for(let pe=0,Ie=ge.length;pe<Ie;pe++)me=ge[pe],Ce?t.texSubImage2D(3553,pe,0,0,me.width,me.height,be,Me,me.data):t.texImage2D(3553,pe,R,me.width,me.height,0,be,Me,me.data);x.generateMipmaps=!1}else Ce?(ye&&t.texStorage2D(3553,Re,R,k.width,k.height),t.texSubImage2D(3553,0,0,0,k.width,k.height,be,Me,k.data)):t.texImage2D(3553,0,R,k.width,k.height,0,be,Me,k.data);else if(x.isCompressedTexture){Ce&&ye&&t.texStorage2D(3553,Re,R,ge[0].width,ge[0].height);for(let pe=0,Ie=ge.length;pe<Ie;pe++)me=ge[pe],x.format!==Zt?be!==null?Ce?t.compressedTexSubImage2D(3553,pe,0,0,me.width,me.height,be,me.data):t.compressedTexImage2D(3553,pe,R,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?t.texSubImage2D(3553,pe,0,0,me.width,me.height,be,Me,me.data):t.texImage2D(3553,pe,R,me.width,me.height,0,be,Me,me.data)}else if(x.isDataArrayTexture)Ce?(ye&&t.texStorage3D(35866,Re,R,k.width,k.height,k.depth),t.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,be,Me,k.data)):t.texImage3D(35866,0,R,k.width,k.height,k.depth,0,be,Me,k.data);else if(x.isData3DTexture)Ce?(ye&&t.texStorage3D(32879,Re,R,k.width,k.height,k.depth),t.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,be,Me,k.data)):t.texImage3D(32879,0,R,k.width,k.height,k.depth,0,be,Me,k.data);else if(x.isFramebufferTexture){if(ye)if(Ce)t.texStorage2D(3553,Re,R,k.width,k.height);else{let pe=k.width,Ie=k.height;for(let Ze=0;Ze<Re;Ze++)t.texImage2D(3553,Ze,R,pe,Ie,0,be,Me,null),pe>>=1,Ie>>=1}}else if(ge.length>0&&_e){Ce&&ye&&t.texStorage2D(3553,Re,R,ge[0].width,ge[0].height);for(let pe=0,Ie=ge.length;pe<Ie;pe++)me=ge[pe],Ce?t.texSubImage2D(3553,pe,0,0,be,Me,me):t.texImage2D(3553,pe,R,be,Me,me);x.generateMipmaps=!1}else Ce?(ye&&t.texStorage2D(3553,Re,R,k.width,k.height),t.texSubImage2D(3553,0,0,0,be,Me,k)):t.texImage2D(3553,0,R,be,Me,k);I(x,_e)&&F(H),te.__currentVersion=te.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function we(v,x,P){if(x.image.length!==6)return;const H=ae(v,x),K=x.source;if(t.activeTexture(33984+P),t.bindTexture(34067,v.__webglTexture),K.version!==K.__currentVersion||H===!0){i.pixelStorei(37440,x.flipY),i.pixelStorei(37441,x.premultiplyAlpha),i.pixelStorei(3317,x.unpackAlignment),i.pixelStorei(37443,0);const te=x.isCompressedTexture||x.image[0].isCompressedTexture,Se=x.image[0]&&x.image[0].isDataTexture,k=[];for(let pe=0;pe<6;pe++)!te&&!Se?k[pe]=E(x.image[pe],!1,!0,c):k[pe]=Se?x.image[pe].image:x.image[pe],k[pe]=fe(x,k[pe]);const _e=k[0],be=T(_e)||a,Me=r.convert(x.format,x.encoding),R=r.convert(x.type),me=b(x.internalFormat,Me,R,x.encoding),ge=a&&x.isVideoTexture!==!0,Ce=K.__currentVersion===void 0||H===!0;let ye=C(x,_e,be);D(34067,x,be);let Re;if(te){ge&&Ce&&t.texStorage2D(34067,ye,me,_e.width,_e.height);for(let pe=0;pe<6;pe++){Re=k[pe].mipmaps;for(let Ie=0;Ie<Re.length;Ie++){const Ze=Re[Ie];x.format!==Zt?Me!==null?ge?t.compressedTexSubImage2D(34069+pe,Ie,0,0,Ze.width,Ze.height,Me,Ze.data):t.compressedTexImage2D(34069+pe,Ie,me,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ge?t.texSubImage2D(34069+pe,Ie,0,0,Ze.width,Ze.height,Me,R,Ze.data):t.texImage2D(34069+pe,Ie,me,Ze.width,Ze.height,0,Me,R,Ze.data)}}}else{Re=x.mipmaps,ge&&Ce&&(Re.length>0&&ye++,t.texStorage2D(34067,ye,me,k[0].width,k[0].height));for(let pe=0;pe<6;pe++)if(Se){ge?t.texSubImage2D(34069+pe,0,0,0,k[pe].width,k[pe].height,Me,R,k[pe].data):t.texImage2D(34069+pe,0,me,k[pe].width,k[pe].height,0,Me,R,k[pe].data);for(let Ie=0;Ie<Re.length;Ie++){const Je=Re[Ie].image[pe].image;ge?t.texSubImage2D(34069+pe,Ie+1,0,0,Je.width,Je.height,Me,R,Je.data):t.texImage2D(34069+pe,Ie+1,me,Je.width,Je.height,0,Me,R,Je.data)}}else{ge?t.texSubImage2D(34069+pe,0,0,0,Me,R,k[pe]):t.texImage2D(34069+pe,0,me,Me,R,k[pe]);for(let Ie=0;Ie<Re.length;Ie++){const Ze=Re[Ie];ge?t.texSubImage2D(34069+pe,Ie+1,0,0,Me,R,Ze.image[pe]):t.texImage2D(34069+pe,Ie+1,me,Me,R,Ze.image[pe])}}}I(x,be)&&F(34067),K.__currentVersion=K.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function he(v,x,P,H,K){const te=r.convert(P.format,P.encoding),Se=r.convert(P.type),k=b(P.internalFormat,te,Se,P.encoding);n.get(x).__hasExternalTextures||(K===32879||K===35866?t.texImage3D(K,0,k,x.width,x.height,x.depth,0,te,Se,null):t.texImage2D(K,0,k,x.width,x.height,0,te,Se,null)),t.bindFramebuffer(36160,v),re(x)?d.framebufferTexture2DMultisampleEXT(36160,H,K,n.get(P).__webglTexture,0,ne(x)):i.framebufferTexture2D(36160,H,K,n.get(P).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(v,x,P){if(i.bindRenderbuffer(36161,v),x.depthBuffer&&!x.stencilBuffer){let H=33189;if(P||re(x)){const K=x.depthTexture;K&&K.isDepthTexture&&(K.type===Zn?H=36012:K.type===gi&&(H=33190));const te=ne(x);re(x)?d.renderbufferStorageMultisampleEXT(36161,te,H,x.width,x.height):i.renderbufferStorageMultisample(36161,te,H,x.width,x.height)}else i.renderbufferStorage(36161,H,x.width,x.height);i.framebufferRenderbuffer(36160,36096,36161,v)}else if(x.depthBuffer&&x.stencilBuffer){const H=ne(x);P&&re(x)===!1?i.renderbufferStorageMultisample(36161,H,35056,x.width,x.height):re(x)?d.renderbufferStorageMultisampleEXT(36161,H,35056,x.width,x.height):i.renderbufferStorage(36161,34041,x.width,x.height),i.framebufferRenderbuffer(36160,33306,36161,v)}else{const H=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let K=0;K<H.length;K++){const te=H[K],Se=r.convert(te.format,te.encoding),k=r.convert(te.type),_e=b(te.internalFormat,Se,k,te.encoding),be=ne(x);P&&re(x)===!1?i.renderbufferStorageMultisample(36161,be,_e,x.width,x.height):re(x)?d.renderbufferStorageMultisampleEXT(36161,be,_e,x.width,x.height):i.renderbufferStorage(36161,_e,x.width,x.height)}}i.bindRenderbuffer(36161,null)}function xe(v,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,v),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);const H=n.get(x.depthTexture).__webglTexture,K=ne(x);if(x.depthTexture.format===Mi)re(x)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,H,0,K):i.framebufferTexture2D(36160,36096,3553,H,0);else if(x.depthTexture.format===ys)re(x)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,H,0,K):i.framebufferTexture2D(36160,33306,3553,H,0);else throw new Error("Unknown depthTexture format")}function y(v){const x=n.get(v),P=v.isWebGLCubeRenderTarget===!0;if(v.depthTexture&&!x.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");xe(x.__webglFramebuffer,v)}else if(P){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)t.bindFramebuffer(36160,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]=i.createRenderbuffer(),Te(x.__webglDepthbuffer[H],v,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),Te(x.__webglDepthbuffer,v,!1);t.bindFramebuffer(36160,null)}function A(v,x,P){const H=n.get(v);x!==void 0&&he(H.__webglFramebuffer,v,v.texture,36064,3553),P!==void 0&&y(v)}function U(v){const x=v.texture,P=n.get(v),H=n.get(x);v.addEventListener("dispose",de),v.isWebGLMultipleRenderTargets!==!0&&(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=x.version,o.memory.textures++);const K=v.isWebGLCubeRenderTarget===!0,te=v.isWebGLMultipleRenderTargets===!0,Se=T(v)||a;if(K){P.__webglFramebuffer=[];for(let k=0;k<6;k++)P.__webglFramebuffer[k]=i.createFramebuffer()}else{if(P.__webglFramebuffer=i.createFramebuffer(),te)if(s.drawBuffers){const k=v.texture;for(let _e=0,be=k.length;_e<be;_e++){const Me=n.get(k[_e]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&v.samples>0&&re(v)===!1){const k=te?x:[x];P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer);for(let _e=0;_e<k.length;_e++){const be=k[_e];P.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(36161,P.__webglColorRenderbuffer[_e]);const Me=r.convert(be.format,be.encoding),R=r.convert(be.type),me=b(be.internalFormat,Me,R,be.encoding),ge=ne(v);i.renderbufferStorageMultisample(36161,ge,me,v.width,v.height),i.framebufferRenderbuffer(36160,36064+_e,36161,P.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(36161,null),v.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(P.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(36160,null)}}if(K){t.bindTexture(34067,H.__webglTexture),D(34067,x,Se);for(let k=0;k<6;k++)he(P.__webglFramebuffer[k],v,x,36064,34069+k);I(x,Se)&&F(34067),t.unbindTexture()}else if(te){const k=v.texture;for(let _e=0,be=k.length;_e<be;_e++){const Me=k[_e],R=n.get(Me);t.bindTexture(3553,R.__webglTexture),D(3553,Me,Se),he(P.__webglFramebuffer,v,Me,36064+_e,3553),I(Me,Se)&&F(3553)}t.unbindTexture()}else{let k=3553;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(a?k=v.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(k,H.__webglTexture),D(k,x,Se),he(P.__webglFramebuffer,v,x,36064,k),I(x,Se)&&F(k),t.unbindTexture()}v.depthBuffer&&y(v)}function J(v){const x=T(v)||a,P=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let H=0,K=P.length;H<K;H++){const te=P[H];if(I(te,x)){const Se=v.isWebGLCubeRenderTarget?34067:3553,k=n.get(te).__webglTexture;t.bindTexture(Se,k),F(Se),t.unbindTexture()}}}function Q(v){if(a&&v.samples>0&&re(v)===!1){const x=v.isWebGLMultipleRenderTargets?v.texture:[v.texture],P=v.width,H=v.height;let K=16384;const te=[],Se=v.stencilBuffer?33306:36096,k=n.get(v),_e=v.isWebGLMultipleRenderTargets===!0;if(_e)for(let be=0;be<x.length;be++)t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+be,36161,null),t.bindFramebuffer(36160,k.__webglFramebuffer),i.framebufferTexture2D(36009,36064+be,3553,null,0);t.bindFramebuffer(36008,k.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,k.__webglFramebuffer);for(let be=0;be<x.length;be++){te.push(36064+be),v.depthBuffer&&te.push(Se);const Me=k.__ignoreDepthValues!==void 0?k.__ignoreDepthValues:!1;if(Me===!1&&(v.depthBuffer&&(K|=256),v.stencilBuffer&&(K|=1024)),_e&&i.framebufferRenderbuffer(36008,36064,36161,k.__webglColorRenderbuffer[be]),Me===!0&&(i.invalidateFramebuffer(36008,[Se]),i.invalidateFramebuffer(36009,[Se])),_e){const R=n.get(x[be]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,R,0)}i.blitFramebuffer(0,0,P,H,0,0,P,H,K,9728),p&&i.invalidateFramebuffer(36008,te)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),_e)for(let be=0;be<x.length;be++){t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+be,36161,k.__webglColorRenderbuffer[be]);const Me=n.get(x[be]).__webglTexture;t.bindFramebuffer(36160,k.__webglFramebuffer),i.framebufferTexture2D(36009,36064+be,3553,Me,0)}t.bindFramebuffer(36009,k.__webglMultisampledFramebuffer)}}function ne(v){return Math.min(h,v.samples)}function re(v){const x=n.get(v);return a&&v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ce(v){const x=o.render.frame;g.get(v)!==x&&(g.set(v,x),v.update())}function fe(v,x){const P=v.encoding,H=v.format,K=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||v.format===nl||P!==Ri&&(P===et?a===!1?e.has("EXT_sRGB")===!0&&H===Zt?(v.format=nl,v.minFilter=It,v.generateMipmaps=!1):x=Bd.sRGBToLinear(x):(H!==Zt||K!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",P)),x}this.allocateTextureUnit=q,this.resetTextureUnits=j,this.setTexture2D=Z,this.setTexture2DArray=le,this.setTexture3D=ie,this.setTextureCube=se,this.rebindTextures=A,this.setupRenderTarget=U,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=y,this.setupFrameBufferTexture=he,this.useMultisampledRTT=re}function wM(i,e,t){const n=t.isWebGL2;function s(r,o=null){let a;if(r===Ci)return 5121;if(r===n0)return 32819;if(r===i0)return 32820;if(r===Q_)return 5120;if(r===e0)return 5122;if(r===Dd)return 5123;if(r===t0)return 5124;if(r===gi)return 5125;if(r===Zn)return 5126;if(r===dr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===s0)return 6406;if(r===Zt)return 6408;if(r===o0)return 6409;if(r===a0)return 6410;if(r===Mi)return 6402;if(r===ys)return 34041;if(r===l0)return 6403;if(r===r0)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===nl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===c0)return 36244;if(r===u0)return 33319;if(r===h0)return 33320;if(r===d0)return 36249;if(r===Zo||r===Jo||r===Qo||r===ea)if(o===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Zo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Zo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ea)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xc||r===$c||r===Kc||r===Yc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Xc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$c)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===f0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Zc||r===Jc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Zc)return o===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Jc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Qc||r===eu||r===tu||r===nu||r===iu||r===su||r===ru||r===ou||r===au||r===lu||r===cu||r===uu||r===hu||r===du)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Qc)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===eu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===tu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===nu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===iu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===su)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ru)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ou)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===au)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===lu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===cu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===uu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===hu)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===du)return o===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===fu)return o===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===hs?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class TM extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vi extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EM={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const f=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const M=new vi;M.matrixAutoUpdate=!1,M.visible=!1,c.joints[m.jointName]=M,c.add(M)}const _=c.joints[m.jointName];f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(EM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class AM extends At{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:Mi,u!==Mi&&u!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Mi&&(n=gi),n===void 0&&u===ys&&(n=hs),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:mt,this.minFilter=l!==void 0?l:mt,this.flipY=!1,this.generateMipmaps=!1}}class CM extends Di{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,d=null,p=null;const g=t.getContextAttributes();let m=null,f=null;const _=[],M=[],E=new Tt;E.layers.enable(1),E.viewport=new tt;const T=new Tt;T.layers.enable(2),T.viewport=new tt;const w=[E,T],I=new TM;I.layers.enable(1),I.layers.enable(2);let F=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=_[G];return Z===void 0&&(Z=new Ca,_[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=_[G];return Z===void 0&&(Z=new Ca,_[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=_[G];return Z===void 0&&(Z=new Ca,_[G]=Z),Z.getHandSpace()};function C(G){const Z=M.indexOf(G.inputSource);if(Z===-1)return;const le=_[Z];le!==void 0&&le.dispatchEvent({type:G.type,data:G.inputSource})}function X(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",z);for(let G=0;G<_.length;G++){const Z=M[G];Z!==null&&(M[G]=null,_[G].disconnect(Z))}F=null,b=null,e.setRenderTarget(m),d=null,h=null,u=null,s=null,f=null,q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",X),s.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:d}),f=new Li(d.framebufferWidth,d.framebufferHeight,{format:Zt,type:Ci,encoding:e.outputEncoding})}else{let Z=null,le=null,ie=null;g.depth&&(ie=g.stencil?35056:33190,Z=g.stencil?ys:Mi,le=g.stencil?hs:gi);const se={colorFormat:32856,depthFormat:ie,scaleFactor:r};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(se),s.updateRenderState({layers:[h]}),f=new Li(h.textureWidth,h.textureHeight,{format:Zt,type:Ci,depthTexture:new AM(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Ee=e.properties.get(f);Ee.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await s.requestReferenceSpace(a),q.setContext(s),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(G){for(let Z=0;Z<G.removed.length;Z++){const le=G.removed[Z],ie=M.indexOf(le);ie>=0&&(M[ie]=null,_[ie].dispatchEvent({type:"disconnected",data:le}))}for(let Z=0;Z<G.added.length;Z++){const le=G.added[Z];let ie=M.indexOf(le);if(ie===-1){for(let Ee=0;Ee<_.length;Ee++)if(Ee>=M.length){M.push(le),ie=Ee;break}else if(M[Ee]===null){M[Ee]=le,ie=Ee;break}if(ie===-1)break}const se=_[ie];se&&se.dispatchEvent({type:"connected",data:le})}}const de=new L,oe=new L;function O(G,Z,le){de.setFromMatrixPosition(Z.matrixWorld),oe.setFromMatrixPosition(le.matrixWorld);const ie=de.distanceTo(oe),se=Z.projectionMatrix.elements,Ee=le.projectionMatrix.elements,N=se[14]/(se[10]-1),D=se[14]/(se[10]+1),ae=(se[9]+1)/se[5],ue=(se[9]-1)/se[5],we=(se[8]-1)/se[0],he=(Ee[8]+1)/Ee[0],Te=N*we,xe=N*he,y=ie/(-we+he),A=y*-we;Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(A),G.translateZ(y),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const U=N+y,J=D+y,Q=Te-A,ne=xe+(ie-A),re=ae*D/J*U,ce=ue*D/J*U;G.projectionMatrix.makePerspective(Q,ne,re,ce,U,J)}function Y(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;I.near=T.near=E.near=G.near,I.far=T.far=E.far=G.far,(F!==I.near||b!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,b=I.far);const Z=G.parent,le=I.cameras;Y(I,Z);for(let se=0;se<le.length;se++)Y(le[se],Z);I.matrixWorld.decompose(I.position,I.quaternion,I.scale),G.position.copy(I.position),G.quaternion.copy(I.quaternion),G.scale.copy(I.scale),G.matrix.copy(I.matrix),G.matrixWorld.copy(I.matrixWorld);const ie=G.children;for(let se=0,Ee=ie.length;se<Ee;se++)ie[se].updateMatrixWorld(!0);le.length===2?O(I,E,T):I.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return I},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(G){h!==null&&(h.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)};let V=null;function j(G,Z){if(c=Z.getViewerPose(l||o),p=Z,c!==null){const le=c.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let ie=!1;le.length!==I.cameras.length&&(I.cameras.length=0,ie=!0);for(let se=0;se<le.length;se++){const Ee=le[se];let N=null;if(d!==null)N=d.getViewport(Ee);else{const ae=u.getViewSubImage(h,Ee);N=ae.viewport,se===0&&(e.setRenderTargetTextures(f,ae.colorTexture,h.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(f))}let D=w[se];D===void 0&&(D=new Tt,D.layers.enable(se),D.viewport=new tt,w[se]=D),D.matrix.fromArray(Ee.transform.matrix),D.projectionMatrix.fromArray(Ee.projectionMatrix),D.viewport.set(N.x,N.y,N.width,N.height),se===0&&I.matrix.copy(D.matrix),ie===!0&&I.cameras.push(D)}}for(let le=0;le<_.length;le++){const ie=M[le],se=_[le];ie!==null&&se!==void 0&&se.update(ie,Z,l||o)}V&&V(G,Z),p=null}const q=new qd;q.setAnimationLoop(j),this.setAnimationLoop=function(G){V=G},this.dispose=function(){}}}function RM(i,e){function t(m,f){m.fogColor.value.copy(f.color),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,_,M,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&d(m,f,E)):f.isMeshMatcapMaterial?(s(m,f),p(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?a(m,f,_,M):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===en&&(m.bumpScale.value*=-1)),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===en&&m.normalScale.value.negate()),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const T=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*T}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let M;f.map?M=f.map:f.specularMap?M=f.specularMap:f.displacementMap?M=f.displacementMap:f.normalMap?M=f.normalMap:f.bumpMap?M=f.bumpMap:f.roughnessMap?M=f.roughnessMap:f.metalnessMap?M=f.metalnessMap:f.alphaMap?M=f.alphaMap:f.emissiveMap?M=f.emissiveMap:f.clearcoatMap?M=f.clearcoatMap:f.clearcoatNormalMap?M=f.clearcoatNormalMap:f.clearcoatRoughnessMap?M=f.clearcoatRoughnessMap:f.iridescenceMap?M=f.iridescenceMap:f.iridescenceThicknessMap?M=f.iridescenceThicknessMap:f.specularIntensityMap?M=f.specularIntensityMap:f.specularColorMap?M=f.specularColorMap:f.transmissionMap?M=f.transmissionMap:f.thicknessMap?M=f.thicknessMap:f.sheenColorMap?M=f.sheenColorMap:f.sheenRoughnessMap&&(M=f.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix));let E;f.aoMap?E=f.aoMap:f.lightMap&&(E=f.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uv2Transform.value.copy(E.matrix))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function a(m,f,_,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=M*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let E;f.map?E=f.map:f.alphaMap&&(E=f.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uvTransform.value.copy(E.matrix))}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===en&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function LM(){const i=mr("canvas");return i.style.display="block",i}function Jd(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:LM(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,d=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ri,this.physicallyCorrectLights=!1,this.toneMapping=Dn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let f=!1,_=0,M=0,E=null,T=-1,w=null;const I=new tt,F=new tt;let b=null,C=e.width,X=e.height,z=1,de=null,oe=null;const O=new tt(0,0,C,X),Y=new tt(0,0,C,X);let V=!1;const j=new Bl;let q=!1,G=!1,Z=null;const le=new Xe,ie=new He,se=new L,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function N(){return E===null?z:1}let D=t;function ae(S,B){for(let $=0;$<S.length;$++){const W=S[$],ee=e.getContext(W,B);if(ee!==null)return ee}return null}try{const S={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fl}`),e.addEventListener("webglcontextlost",R,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",ge,!1),D===null){const B=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&B.shift(),D=ae(B,S),D===null)throw ae(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ue,we,he,Te,xe,y,A,U,J,Q,ne,re,ce,fe,v,x,P,H,K,te,Se,k,_e;function be(){ue=new Vy(D),we=new Ny(D,ue,i),ue.init(we),k=new wM(D,ue,we),he=new MM(D,ue,we),Te=new Wy,xe=new lM,y=new SM(D,ue,he,xe,we,k,Te),A=new ky(m),U=new zy(m),J=new nx(D,we),_e=new Dy(D,ue,J,we),Q=new Hy(D,J,Te,_e),ne=new $y(D,Q,J,Te),K=new Xy(D,we,y),x=new Oy(xe),re=new aM(m,A,U,ue,we,_e,x),ce=new RM(m,xe),fe=new uM,v=new gM(ue,we),H=new Py(m,A,he,ne,u,o),P=new bM(m,ne,we),te=new Fy(D,ue,Te,we),Se=new Gy(D,ue,Te,we),Te.programs=re.programs,m.capabilities=we,m.extensions=ue,m.properties=xe,m.renderLists=fe,m.shadowMap=P,m.state=he,m.info=Te}be();const Me=new CM(m,D);this.xr=Me,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=ue.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ue.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(S){S!==void 0&&(z=S,this.setSize(C,X,!1))},this.getSize=function(S){return S.set(C,X)},this.setSize=function(S,B,$){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=S,X=B,e.width=Math.floor(S*z),e.height=Math.floor(B*z),$!==!1&&(e.style.width=S+"px",e.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(C*z,X*z).floor()},this.setDrawingBufferSize=function(S,B,$){C=S,X=B,z=$,e.width=Math.floor(S*$),e.height=Math.floor(B*$),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(O)},this.setViewport=function(S,B,$,W){S.isVector4?O.set(S.x,S.y,S.z,S.w):O.set(S,B,$,W),he.viewport(I.copy(O).multiplyScalar(z).floor())},this.getScissor=function(S){return S.copy(Y)},this.setScissor=function(S,B,$,W){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,B,$,W),he.scissor(F.copy(Y).multiplyScalar(z).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(S){he.setScissorTest(V=S)},this.setOpaqueSort=function(S){de=S},this.setTransparentSort=function(S){oe=S},this.getClearColor=function(S){return S.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(S=!0,B=!0,$=!0){let W=0;S&&(W|=16384),B&&(W|=256),$&&(W|=1024),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",R,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),fe.dispose(),v.dispose(),xe.dispose(),A.dispose(),U.dispose(),ne.dispose(),_e.dispose(),re.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Ze),Me.removeEventListener("sessionend",Je),Z&&(Z.dispose(),Z=null),yt.stop()};function R(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const S=Te.autoReset,B=P.enabled,$=P.autoUpdate,W=P.needsUpdate,ee=P.type;be(),Te.autoReset=S,P.enabled=B,P.autoUpdate=$,P.needsUpdate=W,P.type=ee}function ge(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ce(S){const B=S.target;B.removeEventListener("dispose",Ce),ye(B)}function ye(S){Re(S),xe.remove(S)}function Re(S){const B=xe.get(S).programs;B!==void 0&&(B.forEach(function($){re.releaseProgram($)}),S.isShaderMaterial&&re.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,$,W,ee,Le){B===null&&(B=Ee);const Fe=ee.isMesh&&ee.matrixWorld.determinant()<0,Be=_f(S,B,$,W,ee);he.setMaterial(W,Fe);let Ue=$.index;const Qe=$.attributes.position;if(Ue===null){if(Qe===void 0||Qe.count===0)return}else if(Ue.count===0)return;let We=1;W.wireframe===!0&&(Ue=Q.getWireframeAttribute($),We=2),_e.setup(ee,W,Be,$,Ue);let je,ot=te;Ue!==null&&(je=J.get(Ue),ot=Se,ot.setIndex(je));const ii=Ue!==null?Ue.count:Qe.count,Ni=$.drawRange.start*We,Oi=$.drawRange.count*We,on=Le!==null?Le.start*We:0,$e=Le!==null?Le.count*We:1/0,ki=Math.max(Ni,on),lt=Math.min(ii,Ni+Oi,on+$e)-1,an=Math.max(0,lt-ki+1);if(an!==0){if(ee.isMesh)W.wireframe===!0?(he.setLineWidth(W.wireframeLinewidth*N()),ot.setMode(1)):ot.setMode(4);else if(ee.isLine){let kn=W.linewidth;kn===void 0&&(kn=1),he.setLineWidth(kn*N()),ee.isLineSegments?ot.setMode(1):ee.isLineLoop?ot.setMode(2):ot.setMode(3)}else ee.isPoints?ot.setMode(0):ee.isSprite&&ot.setMode(4);if(ee.isInstancedMesh)ot.renderInstances(ki,an,ee.count);else if($.isInstancedBufferGeometry){const kn=Math.min($.instanceCount,$._maxInstanceCount);ot.renderInstances(ki,an,kn)}else ot.render(ki,an)}},this.compile=function(S,B){d=v.get(S),d.init(),g.push(d),S.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(d.pushLight($),$.castShadow&&d.pushShadow($))}),d.setupLights(m.physicallyCorrectLights),S.traverse(function($){const W=$.material;if(W)if(Array.isArray(W))for(let ee=0;ee<W.length;ee++){const Le=W[ee];Vo(Le,S,$)}else Vo(W,S,$)}),g.pop(),d=null};let pe=null;function Ie(S){pe&&pe(S)}function Ze(){yt.stop()}function Je(){yt.start()}const yt=new qd;yt.setAnimationLoop(Ie),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(S){pe=S,Me.setAnimationLoop(S),S===null?yt.stop():yt.start()},Me.addEventListener("sessionstart",Ze),Me.addEventListener("sessionend",Je),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;S.autoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(B),B=Me.getCamera()),S.isScene===!0&&S.onBeforeRender(m,S,B,E),d=v.get(S,g.length),d.init(),g.push(d),le.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(le),G=this.localClippingEnabled,q=x.init(this.clippingPlanes,G,B),h=fe.get(S,p.length),h.init(),p.push(h),rn(S,B,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(de,oe),q===!0&&x.beginShadows();const $=d.state.shadowsArray;if(P.render($,S,B),q===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(h,S),d.setupLights(m.physicallyCorrectLights),B.isArrayCamera){const W=B.cameras;for(let ee=0,Le=W.length;ee<Le;ee++){const Fe=W[ee];Zl(h,S,Fe,Fe.viewport)}}else Zl(h,S,B);E!==null&&(y.updateMultisampleRenderTarget(E),y.updateRenderTargetMipmap(E)),S.isScene===!0&&S.onAfterRender(m,S,B),_e.resetDefaultState(),T=-1,w=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function rn(S,B,$,W){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||j.intersectsSprite(S)){W&&se.setFromMatrixPosition(S.matrixWorld).applyMatrix4(le);const Fe=ne.update(S),Be=S.material;Be.visible&&h.push(S,Fe,Be,$,se.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Te.render.frame&&(S.skeleton.update(),S.skeleton.frame=Te.render.frame),!S.frustumCulled||j.intersectsObject(S))){W&&se.setFromMatrixPosition(S.matrixWorld).applyMatrix4(le);const Fe=ne.update(S),Be=S.material;if(Array.isArray(Be)){const Ue=Fe.groups;for(let Qe=0,We=Ue.length;Qe<We;Qe++){const je=Ue[Qe],ot=Be[je.materialIndex];ot&&ot.visible&&h.push(S,Fe,ot,$,se.z,je)}}else Be.visible&&h.push(S,Fe,Be,$,se.z,null)}}const Le=S.children;for(let Fe=0,Be=Le.length;Fe<Be;Fe++)rn(Le[Fe],B,$,W)}function Zl(S,B,$,W){const ee=S.opaque,Le=S.transmissive,Fe=S.transparent;d.setupLightsView($),Le.length>0&&mf(ee,B,$),W&&he.viewport(I.copy(W)),ee.length>0&&Ar(ee,B,$),Le.length>0&&Ar(Le,B,$),Fe.length>0&&Ar(Fe,B,$),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function mf(S,B,$){const W=we.isWebGL2;Z===null&&(Z=new Li(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?dr:Ci,minFilter:Cs,samples:W&&r===!0?4:0})),m.getDrawingBufferSize(ie),W?Z.setSize(ie.x,ie.y):Z.setSize(bo(ie.x),bo(ie.y));const ee=m.getRenderTarget();m.setRenderTarget(Z),m.clear();const Le=m.toneMapping;m.toneMapping=Dn,Ar(S,B,$),m.toneMapping=Le,y.updateMultisampleRenderTarget(Z),y.updateRenderTargetMipmap(Z),m.setRenderTarget(ee)}function Ar(S,B,$){const W=B.isScene===!0?B.overrideMaterial:null;for(let ee=0,Le=S.length;ee<Le;ee++){const Fe=S[ee],Be=Fe.object,Ue=Fe.geometry,Qe=W===null?Fe.material:W,We=Fe.group;Be.layers.test($.layers)&&gf(Be,B,$,Ue,Qe,We)}}function gf(S,B,$,W,ee,Le){S.onBeforeRender(m,B,$,W,ee,Le),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),ee.onBeforeRender(m,B,$,W,S,Le),ee.transparent===!0&&ee.side===Ai?(ee.side=en,ee.needsUpdate=!0,m.renderBufferDirect($,B,W,ee,S,Le),ee.side=gs,ee.needsUpdate=!0,m.renderBufferDirect($,B,W,ee,S,Le),ee.side=Ai):m.renderBufferDirect($,B,W,ee,S,Le),S.onAfterRender(m,B,$,W,ee,Le)}function Vo(S,B,$){B.isScene!==!0&&(B=Ee);const W=xe.get(S),ee=d.state.lights,Le=d.state.shadowsArray,Fe=ee.state.version,Be=re.getParameters(S,ee.state,Le,B,$),Ue=re.getProgramCacheKey(Be);let Qe=W.programs;W.environment=S.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(S.isMeshStandardMaterial?U:A).get(S.envMap||W.environment),Qe===void 0&&(S.addEventListener("dispose",Ce),Qe=new Map,W.programs=Qe);let We=Qe.get(Ue);if(We!==void 0){if(W.currentProgram===We&&W.lightsStateVersion===Fe)return Jl(S,Be),We}else Be.uniforms=re.getUniforms(S),S.onBuild($,Be,m),S.onBeforeCompile(Be,m),We=re.acquireProgram(Be,Ue),Qe.set(Ue,We),W.uniforms=Be.uniforms;const je=W.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(je.clippingPlanes=x.uniform),Jl(S,Be),W.needsLights=vf(S),W.lightsStateVersion=Fe,W.needsLights&&(je.ambientLightColor.value=ee.state.ambient,je.lightProbe.value=ee.state.probe,je.directionalLights.value=ee.state.directional,je.directionalLightShadows.value=ee.state.directionalShadow,je.spotLights.value=ee.state.spot,je.spotLightShadows.value=ee.state.spotShadow,je.rectAreaLights.value=ee.state.rectArea,je.ltc_1.value=ee.state.rectAreaLTC1,je.ltc_2.value=ee.state.rectAreaLTC2,je.pointLights.value=ee.state.point,je.pointLightShadows.value=ee.state.pointShadow,je.hemisphereLights.value=ee.state.hemi,je.directionalShadowMap.value=ee.state.directionalShadowMap,je.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,je.spotShadowMap.value=ee.state.spotShadowMap,je.spotShadowMatrix.value=ee.state.spotShadowMatrix,je.pointShadowMap.value=ee.state.pointShadowMap,je.pointShadowMatrix.value=ee.state.pointShadowMatrix);const ot=We.getUniforms(),ii=uo.seqWithValue(ot.seq,je);return W.currentProgram=We,W.uniformsList=ii,We}function Jl(S,B){const $=xe.get(S);$.outputEncoding=B.outputEncoding,$.instancing=B.instancing,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function _f(S,B,$,W,ee){B.isScene!==!0&&(B=Ee),y.resetTextureUnits();const Le=B.fog,Fe=W.isMeshStandardMaterial?B.environment:null,Be=E===null?m.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:Ri,Ue=(W.isMeshStandardMaterial?U:A).get(W.envMap||Fe),Qe=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,We=!!W.normalMap&&!!$.attributes.tangent,je=!!$.morphAttributes.position,ot=!!$.morphAttributes.normal,ii=!!$.morphAttributes.color,Ni=W.toneMapped?m.toneMapping:Dn,Oi=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,on=Oi!==void 0?Oi.length:0,$e=xe.get(W),ki=d.state.lights;if(q===!0&&(G===!0||S!==w)){const ln=S===w&&W.id===T;x.setState(W,S,ln)}let lt=!1;W.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==ki.state.version||$e.outputEncoding!==Be||ee.isInstancedMesh&&$e.instancing===!1||!ee.isInstancedMesh&&$e.instancing===!0||ee.isSkinnedMesh&&$e.skinning===!1||!ee.isSkinnedMesh&&$e.skinning===!0||$e.envMap!==Ue||W.fog===!0&&$e.fog!==Le||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==x.numPlanes||$e.numIntersection!==x.numIntersection)||$e.vertexAlphas!==Qe||$e.vertexTangents!==We||$e.morphTargets!==je||$e.morphNormals!==ot||$e.morphColors!==ii||$e.toneMapping!==Ni||we.isWebGL2===!0&&$e.morphTargetsCount!==on)&&(lt=!0):(lt=!0,$e.__version=W.version);let an=$e.currentProgram;lt===!0&&(an=Vo(W,B,ee));let kn=!1,Os=!1,Ho=!1;const bt=an.getUniforms(),ks=$e.uniforms;if(he.useProgram(an.program)&&(kn=!0,Os=!0,Ho=!0),W.id!==T&&(T=W.id,Os=!0),kn||w!==S){if(bt.setValue(D,"projectionMatrix",S.projectionMatrix),we.logarithmicDepthBuffer&&bt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),w!==S&&(w=S,Os=!0,Ho=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const ln=bt.map.cameraPosition;ln!==void 0&&ln.setValue(D,se.setFromMatrixPosition(S.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&bt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||ee.isSkinnedMesh)&&bt.setValue(D,"viewMatrix",S.matrixWorldInverse)}if(ee.isSkinnedMesh){bt.setOptional(D,ee,"bindMatrix"),bt.setOptional(D,ee,"bindMatrixInverse");const ln=ee.skeleton;ln&&(we.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),bt.setValue(D,"boneTexture",ln.boneTexture,y),bt.setValue(D,"boneTextureSize",ln.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Go=$.morphAttributes;return(Go.position!==void 0||Go.normal!==void 0||Go.color!==void 0&&we.isWebGL2===!0)&&K.update(ee,$,W,an),(Os||$e.receiveShadow!==ee.receiveShadow)&&($e.receiveShadow=ee.receiveShadow,bt.setValue(D,"receiveShadow",ee.receiveShadow)),Os&&(bt.setValue(D,"toneMappingExposure",m.toneMappingExposure),$e.needsLights&&xf(ks,Ho),Le&&W.fog===!0&&ce.refreshFogUniforms(ks,Le),ce.refreshMaterialUniforms(ks,W,z,X,Z),uo.upload(D,$e.uniformsList,ks,y)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(uo.upload(D,$e.uniformsList,ks,y),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&bt.setValue(D,"center",ee.center),bt.setValue(D,"modelViewMatrix",ee.modelViewMatrix),bt.setValue(D,"normalMatrix",ee.normalMatrix),bt.setValue(D,"modelMatrix",ee.matrixWorld),an}function xf(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function vf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,B,$){xe.get(S.texture).__webglTexture=B,xe.get(S.depthTexture).__webglTexture=$;const W=xe.get(S);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=$===void 0,W.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,B){const $=xe.get(S);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,$=0){E=S,_=B,M=$;let W=!0;if(S){const Ue=xe.get(S);Ue.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),W=!1):Ue.__webglFramebuffer===void 0?y.setupRenderTarget(S):Ue.__hasExternalTextures&&y.rebindTextures(S,xe.get(S.texture).__webglTexture,xe.get(S.depthTexture).__webglTexture)}let ee=null,Le=!1,Fe=!1;if(S){const Ue=S.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture)&&(Fe=!0);const Qe=xe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(ee=Qe[B],Le=!0):we.isWebGL2&&S.samples>0&&y.useMultisampledRTT(S)===!1?ee=xe.get(S).__webglMultisampledFramebuffer:ee=Qe,I.copy(S.viewport),F.copy(S.scissor),b=S.scissorTest}else I.copy(O).multiplyScalar(z).floor(),F.copy(Y).multiplyScalar(z).floor(),b=V;if(he.bindFramebuffer(36160,ee)&&we.drawBuffers&&W&&he.drawBuffers(S,ee),he.viewport(I),he.scissor(F),he.setScissorTest(b),Le){const Ue=xe.get(S.texture);D.framebufferTexture2D(36160,36064,34069+B,Ue.__webglTexture,$)}else if(Fe){const Ue=xe.get(S.texture),Qe=B||0;D.framebufferTextureLayer(36160,36064,Ue.__webglTexture,$||0,Qe)}T=-1},this.readRenderTargetPixels=function(S,B,$,W,ee,Le,Fe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=xe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be){he.bindFramebuffer(36160,Be);try{const Ue=S.texture,Qe=Ue.format,We=Ue.type;if(Qe!==Zt&&k.convert(Qe)!==D.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=We===dr&&(ue.has("EXT_color_buffer_half_float")||we.isWebGL2&&ue.has("EXT_color_buffer_float"));if(We!==Ci&&k.convert(We)!==D.getParameter(35738)&&!(We===Zn&&(we.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-W&&$>=0&&$<=S.height-ee&&D.readPixels(B,$,W,ee,k.convert(Qe),k.convert(We),Le)}finally{const Ue=E!==null?xe.get(E).__webglFramebuffer:null;he.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(S,B,$=0){const W=Math.pow(2,-$),ee=Math.floor(B.image.width*W),Le=Math.floor(B.image.height*W);y.setTexture2D(B,0),D.copyTexSubImage2D(3553,$,0,0,S.x,S.y,ee,Le),he.unbindTexture()},this.copyTextureToTexture=function(S,B,$,W=0){const ee=B.image.width,Le=B.image.height,Fe=k.convert($.format),Be=k.convert($.type);y.setTexture2D($,0),D.pixelStorei(37440,$.flipY),D.pixelStorei(37441,$.premultiplyAlpha),D.pixelStorei(3317,$.unpackAlignment),B.isDataTexture?D.texSubImage2D(3553,W,S.x,S.y,ee,Le,Fe,Be,B.image.data):B.isCompressedTexture?D.compressedTexSubImage2D(3553,W,S.x,S.y,B.mipmaps[0].width,B.mipmaps[0].height,Fe,B.mipmaps[0].data):D.texSubImage2D(3553,W,S.x,S.y,Fe,Be,B.image),W===0&&$.generateMipmaps&&D.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(S,B,$,W,ee=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=S.max.x-S.min.x+1,Fe=S.max.y-S.min.y+1,Be=S.max.z-S.min.z+1,Ue=k.convert(W.format),Qe=k.convert(W.type);let We;if(W.isData3DTexture)y.setTexture3D(W,0),We=32879;else if(W.isDataArrayTexture)y.setTexture2DArray(W,0),We=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(37440,W.flipY),D.pixelStorei(37441,W.premultiplyAlpha),D.pixelStorei(3317,W.unpackAlignment);const je=D.getParameter(3314),ot=D.getParameter(32878),ii=D.getParameter(3316),Ni=D.getParameter(3315),Oi=D.getParameter(32877),on=$.isCompressedTexture?$.mipmaps[0]:$.image;D.pixelStorei(3314,on.width),D.pixelStorei(32878,on.height),D.pixelStorei(3316,S.min.x),D.pixelStorei(3315,S.min.y),D.pixelStorei(32877,S.min.z),$.isDataTexture||$.isData3DTexture?D.texSubImage3D(We,ee,B.x,B.y,B.z,Le,Fe,Be,Ue,Qe,on.data):$.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(We,ee,B.x,B.y,B.z,Le,Fe,Be,Ue,on.data)):D.texSubImage3D(We,ee,B.x,B.y,B.z,Le,Fe,Be,Ue,Qe,on),D.pixelStorei(3314,je),D.pixelStorei(32878,ot),D.pixelStorei(3316,ii),D.pixelStorei(3315,Ni),D.pixelStorei(32877,Oi),ee===0&&W.generateMipmaps&&D.generateMipmap(We),he.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?y.setTextureCube(S,0):S.isData3DTexture?y.setTexture3D(S,0):S.isDataArrayTexture?y.setTexture2DArray(S,0):y.setTexture2D(S,0),he.unbindTexture()},this.resetState=function(){_=0,M=0,E=null,he.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class IM extends Jd{}IM.prototype.isWebGL1Renderer=!0;class PM extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class DM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mt=new L;class Hl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ku=new L,Yu=new tt,Zu=new tt,FM=new L,Ju=new Xe;class NM extends Ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,s=this.geometry;Yu.fromBufferAttribute(s.attributes.skinIndex,e),Zu.fromBufferAttribute(s.attributes.skinWeight,e),Ku.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Zu.getComponent(r);if(o!==0){const a=Yu.getComponent(r);Ju.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(FM.copy(Ku).applyMatrix4(Ju),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Qd extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class OM extends At{constructor(e=null,t=1,n=1,s,r,o,a,l,c=mt,u=mt,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qu=new Xe,kM=new Xe;class Gl{constructor(e=[],t=[]){this.uuid=tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:kM;Qu.multiplyMatrices(a,t[r]),Qu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Gl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Od(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new OM(t,e,e,Zt,Zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Qd),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class ef extends gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const eh=new L,th=new L,nh=new Xe,Ra=new ko,Qr=new Ls;class Wl extends ut{constructor(e=new xn,t=new ef){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)eh.fromBufferAttribute(t,s-1),th.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=eh.distanceTo(th);e.setAttribute("lineDistance",new Fn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,e.ray.intersectsSphere(Qr)===!1)return;nh.copy(s).invert(),Ra.copy(e.ray).applyMatrix4(nh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,u=new L,h=new L,d=new L,p=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let E=_,T=M-1;E<T;E+=p){const w=g.getX(E),I=g.getX(E+1);if(c.fromBufferAttribute(f,w),u.fromBufferAttribute(f,I),Ra.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),M=Math.min(f.count,o.start+o.count);for(let E=_,T=M-1;E<T;E+=p){if(c.fromBufferAttribute(f,E),u.fromBufferAttribute(f,E+1),Ra.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const ih=new L,sh=new L;class UM extends Wl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ih.fromBufferAttribute(t,s),sh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ih.distanceTo(sh);e.setAttribute("lineDistance",new Fn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class BM extends Wl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class tf extends gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rh=new Xe,rl=new ko,eo=new Ls,to=new L;class zM extends ut{constructor(e=new xn,t=new tf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;rh.copy(s).invert(),rl.copy(e.ray).applyMatrix4(rh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,m=p;g<m;g++){const f=c.getX(g);to.fromBufferAttribute(h,f),oh(to,f,l,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,m=p;g<m;g++)to.fromBufferAttribute(h,g),oh(to,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function oh(i,e,t,n,s,r,o){const a=rl.distanceSqToPoint(i);if(a<t){const l=new L;rl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Ds extends gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fi extends Ds{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const rt={arraySlice:function(i,e,t){return rt.isTypedArray(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)},convertArray:function(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)},isTypedArray:function(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)},getKeyframeOrder:function(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n},sortedArray:function(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s},flattenJSON:function(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)},subclip:function(i,e,t,n,s=30){const r=i.clone();r.name=e;const o=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],u=c.getValueSize(),h=[],d=[];for(let p=0;p<c.times.length;++p){const g=c.times[p]*s;if(!(g<t||g>=n)){h.push(c.times[p]);for(let m=0;m<u;++m)d.push(c.values[p*u+m])}}h.length!==0&&(c.times=rt.convertArray(h,c.times.constructor),c.values=rt.convertArray(d,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r},makeClipAdditive:function(i,e=0,t=i,n=30){n<=0&&(n=30);const s=t.tracks.length,r=e/n;for(let o=0;o<s;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(_){return _.name===a.name&&_.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);const g=a.times.length-1;let m;if(r<=a.times[0]){const _=u,M=h-u;m=rt.arraySlice(a.values,_,M)}else if(r>=a.times[g]){const _=g*h+u,M=_+h-u;m=rt.arraySlice(a.values,_,M)}else{const _=a.createInterpolant(),M=u,E=h-u;_.evaluate(r),m=rt.arraySlice(_.resultBuffer,M,E)}l==="quaternion"&&new Gt().fromArray(m).normalize().conjugate().toArray(m);const f=c.times.length;for(let _=0;_<f;++_){const M=_*p+d;if(l==="quaternion")Gt.multiplyQuaternionsFlat(c.values,M,m,0,c.values,M);else{const E=p-d*2;for(let T=0;T<E;++T)c.values[M+T]-=m[T]}}}return i.blendMode=Fd,i}};class Tr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class VM extends Tr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ss,endingEnd:ss}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case rs:r=e,a=2*t-n;break;case yo:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rs:o=e,l=2*n-t;break;case yo:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),m=g*g,f=m*g,_=-d*f+2*d*m-d*g,M=(1+d)*f+(-1.5-2*d)*m+(-.5+d)*g+1,E=(-1-p)*f+(1.5+p)*m+.5*g,T=p*f-p*m;for(let w=0;w!==a;++w)r[w]=_*o[u+w]+M*o[c+w]+E*o[l+w]+T*o[h+w];return r}}class nf extends Tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class HM extends Tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class vn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rt.convertArray(t,this.TimeBufferType),this.values=rt.convertArray(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:rt.convertArray(e.times,Array),values:rt.convertArray(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new HM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new VM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fr:t=this.InterpolantFactoryMethodDiscrete;break;case bs:t=this.InterpolantFactoryMethodLinear;break;case ta:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fr;case this.InterpolantFactoryMethodLinear:return bs;case this.InterpolantFactoryMethodSmooth:return ta}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=rt.arraySlice(n,r,o),this.values=rt.arraySlice(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&rt.isTypedArray(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=rt.arraySlice(this.times),t=rt.arraySlice(this.values),n=this.getValueSize(),s=this.getInterpolation()===ta,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const m=t[h+g];if(m!==t[d+g]||m!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=rt.arraySlice(e,0,o),this.values=rt.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=rt.arraySlice(this.times,0),t=rt.arraySlice(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=bs;class Fs extends vn{}Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=fr;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class sf extends vn{}sf.prototype.ValueTypeName="color";class gr extends vn{}gr.prototype.ValueTypeName="number";class GM extends Tr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Gt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Pi extends vn{InterpolantFactoryMethodLinear(e){return new GM(this.times,this.values,this.getValueSize(),e)}}Pi.prototype.ValueTypeName="quaternion";Pi.prototype.DefaultInterpolation=bs;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends vn{}Ns.prototype.ValueTypeName="string";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=fr;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class _r extends vn{}_r.prototype.ValueTypeName="vector";class ol{constructor(e,t=-1,n,s=Nl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=tn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(jM(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(vn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=rt.getKeyframeOrder(l);l=rt.sortedArray(l,1,u),c=rt.sortedArray(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new gr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,m){if(p.length!==0){const f=[],_=[];rt.flattenJSON(p,f,_,g),f.length!==0&&m.push(new h(d,f,_))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let m=0;m<d[g].morphTargets.length;m++)p[d[g].morphTargets[m]]=-1;for(const m in p){const f=[],_=[];for(let M=0;M!==d[g].morphTargets.length;++M){const E=d[g];f.push(E.time),_.push(E.morphTarget===m?1:0)}s.push(new gr(".morphTargetInfluence["+m+"]",f,_))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(_r,p+".position",d,"pos",s),n(Pi,p+".quaternion",d,"rot",s),n(_r,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function WM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return gr;case"vector":case"vector2":case"vector3":case"vector4":return _r;case"color":return sf;case"quaternion":return Pi;case"bool":case"boolean":return Fs;case"string":return Ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function jM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=WM(i.type);if(i.times===void 0){const t=[],n=[];rt.flattenJSON(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ss={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class qM{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const XM=new qM;class Er{constructor(e){this.manager=e!==void 0?e:XM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const En={};class rf extends Er{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ss.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(En[e]!==void 0){En[e].push({onLoad:t,onProgress:n,onError:s});return}En[e]=[],En[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=En[e],h=c.body.getReader(),d=c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let m=0;const f=new ReadableStream({start(_){M();function M(){h.read().then(({done:E,value:T})=>{if(E)_.close();else{m+=T.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let I=0,F=u.length;I<F;I++){const b=u[I];b.onProgress&&b.onProgress(w)}_.enqueue(T),M()}})}}});return new Response(f)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ss.add(e,c);const u=En[e];delete En[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=En[e];if(u===void 0)throw this.manager.itemError(e),c;delete En[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $M extends Er{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ss.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=mr("img");function l(){u(),Ss.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class KM extends Er{constructor(e){super(e)}load(e,t,n,s){const r=new At,o=new $M(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class zo extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ah=new Xe,lh=new L,ch=new L;class jl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bl,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;lh.setFromMatrixPosition(e.matrixWorld),t.position.copy(lh),ch.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ch),t.updateMatrixWorld(),ah.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ah),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class YM extends jl{constructor(){super(new Tt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=pr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class of extends zo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DefaultUp),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.shadow=new YM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const uh=new Xe,Gs=new L,La=new L;class ZM extends jl{constructor(){super(new Tt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gs),La.copy(n.position),La.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(La),n.updateMatrixWorld(),s.makeTranslation(-Gs.x,-Gs.y,-Gs.z),uh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uh)}}class JM extends zo{constructor(e,t,n=0,s=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ZM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class QM extends jl{constructor(){super(new zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eS extends zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DefaultUp),this.updateMatrix(),this.target=new ut,this.shadow=new QM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tS extends zo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class wi{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class nS extends Er{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ss.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Ss.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class iS{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Gt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;Gt.multiplyQuaternionsFlat(e,o,e,t,e,n),Gt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const ql="\\[\\]\\.:\\/",sS=new RegExp("["+ql+"]","g"),Xl="[^"+ql+"]",rS="[^"+ql.replace("\\.","")+"]",oS=/((?:WC+[\/:])*)/.source.replace("WC",Xl),aS=/(WCOD+)?/.source.replace("WCOD",rS),lS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xl),cS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xl),uS=new RegExp("^"+oS+aS+lS+cS+"$"),hS=["material","materials","bones"];class dS{constructor(e,t,n){const s=n||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ke{constructor(e,t,n){this.path=t,this.parsedPath=n||Ke.parseTrackName(t),this.node=Ke.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ke.Composite(e,t,n):new Ke(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sS,"")}static parseTrackName(e){const t=uS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);hS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Ke.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=dS;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class fS{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:ss,endingEnd:ss};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=m0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Fd:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Nl:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===g0;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===p0){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=rs,s.endingEnd=rs):(e?s.endingStart=this.zeroSlopeAtStart?rs:ss:s.endingStart=yo,t?s.endingEnd=this.zeroSlopeAtEnd?rs:ss:s.endingEnd=yo)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const pS=new Float32Array(1);class mS extends Di{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const d=s[h],p=d.name;let g=u[p];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const m=t&&t._propertyBindings[h].binding.parsedPath;g=new iS(Ke.create(n,p,m),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new nf(new Float32Array(2),new Float32Array(2),1,pS),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?ol.findByName(s,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Nl),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new fS(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?ol.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class gS{constructor(e,t,n=0,s=1/0){this.ray=new ko(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ul,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return al(e,this,n,t),n.sort(hh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)al(e[s],this,n,t);return n.sort(hh),n}}function hh(i,e){return i.distance-e.distance}function al(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)al(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);class ll{constructor(){Oe(this,"_callbacks",[])}addListener(e){this._callbacks.push(e)}removeListener(e){this._callbacks.forEach((t,n)=>{t===e&&this._callbacks.splice(n,1)})}clear(){this._callbacks=[]}trigger(e){this._callbacks.forEach(t=>{t(e)})}}class _S{constructor(){Oe(this,"onClickedObject",new ll);Oe(this,"onClickedObjects",new ll);Oe(this,"raycaster");this.raycaster=new gS}pick(e,t,n){this.raycaster.setFromCamera(e,n);const s=this.raycaster.intersectObjects(t.children);s.length!=0&&(this.onClickedObjects.trigger(s),this.onClickedObject.trigger(s[0]))}}class xS{constructor(e,t,n){Oe(this,"pickHandler");Oe(this,"scene");Oe(this,"renderer");Oe(this,"camera");Oe(this,"onClickEvent",new ll);Oe(this,"_time",0);Oe(this,"_deltaTime",0);Oe(this,"_sceneObjects",[]);this.scene=e,this.renderer=n,this.camera=t,this.pickHandler=new _S,this.renderer.domElement.addEventListener("click",s=>this.onMouseClick(s),!1)}get time(){return this._time}get deltaTime(){return this._deltaTime}get sceneObjects(){return this._sceneObjects}addObject(e){!e||this._sceneObjects.push(e)}update(e){const t=e*.001;if(this._deltaTime=t-this._time,this._time=t,this.resizeRendererToDisplaySize(this.renderer)){const n=this.renderer.domElement;this.camera.aspect=n.clientWidth/n.clientHeight,this.camera.updateProjectionMatrix()}this._sceneObjects.forEach(n=>{n.update()}),this.render()}render(){this.renderer.render(this.scene,this.camera)}dispose(){this._sceneObjects.forEach(e=>{e.dispose()}),this.pickHandler.onClickedObject.clear(),this.pickHandler.onClickedObjects.clear()}onMouseClick(e){var t=new He;const n=this.renderer.domElement.getBoundingClientRect();t.x=(e.clientX-n.left)*this.renderer.domElement.width/n.width,t.y=(e.clientY-n.top)*this.renderer.domElement.height/n.height;const s=new He;s.x=t.x/this.renderer.domElement.width*2-1,s.y=t.y/this.renderer.domElement.height*-2+1,this.pickHandler.pick(s,this.scene,this.camera)}resizeRendererToDisplaySize(e){const t=e.domElement,n=window.devicePixelRatio,s=t.clientWidth*n|0,r=t.clientHeight*n|0,o=t.width!==s||t.height!==r;return o&&e.setSize(s,r,!1),o}}class af{constructor(e){Oe(this,"_scene");this._scene=e}get scene(){return this._scene}}function vS(i){const e=new Map,t=new Map,n=i.clone();return lf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function lf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)lf(i.children[n],e.children[n],t)}class yS extends af{constructor(t,n){super(t);Oe(this,"hitBox");Oe(this,"lifetime",30);Oe(this,"jitterScale",.2);Oe(this,"jitterAcceleration",1e-4);Oe(this,"maxJitterSpeed",.5);Oe(this,"directionChangeTime",1);Oe(this,"mixer");Oe(this,"activeAction");Oe(this,"_currentLifetime",0);Oe(this,"_currentJitterWaitTime",this.directionChangeTime);Oe(this,"_model");Oe(this,"_speed",5);Oe(this,"_mainDirection",new L);Oe(this,"_direction",new L);Oe(this,"_directionGoal",new L);Oe(this,"_directionVelocity",new L);Oe(this,"_velocity",new L);const s=vS(n.scene),r=new Is(4,3.5,4),o=new Ds;o.opacity=0,o.transparent=!0,this.hitBox=new Ht(r,o),this._model=s,this._model.add(this.hitBox),this.mixer=new mS(this._model),this.activeAction=this.mixer.clipAction(n.animations[0]),this.activeAction.play(),t.scene.add(this._model),t.pickHandler.onClickedObject.addListener(a=>this.onClicked(this,a))}get isReusable(){return this._currentLifetime>=this.lifetime}update(){this.mixer.update(this.scene.deltaTime),this._currentLifetime+=this.scene.deltaTime,this._currentJitterWaitTime+=this.scene.deltaTime;const t=new L(0);if(t.copy(this._model.position),this._currentJitterWaitTime>=this.directionChangeTime){this._currentJitterWaitTime=0;const s=new L(Ln.randFloat(-1,1),Ln.randFloat(-1,1),Ln.randFloat(-1,1)).normalize().multiplyScalar(this.jitterScale);this._directionGoal.copy(this._mainDirection).add(s).normalize()}const n=new L;n.subVectors(this._directionGoal,this._direction).normalize().multiplyScalar(this.jitterAcceleration),this._directionVelocity.add(n),this._directionVelocity.length()>this.maxJitterSpeed&&this._directionVelocity.normalize().multiplyScalar(this.maxJitterSpeed),this._direction.add(this._directionVelocity),this._direction.normalize(),this._velocity.copy(this._direction).multiplyScalar(this._speed*this.scene.deltaTime),t.add(this._velocity),this._model.lookAt(t),this._model.position.copy(t)}dispose(){this._model.children.forEach(t=>{this._model.remove(t)})}reset(t,n,s,r){this._currentLifetime=0,this._currentJitterWaitTime=this.directionChangeTime,this._model.position.copy(r),this._mainDirection.copy(t),this._direction=new L().copy(this._mainDirection),this._directionGoal=new L().copy(this._direction),this._model.scale.set(n,n,n),this._speed=s,this._velocity.setLength(0),this._directionVelocity.setLength(0)}onClicked(t,n){n.object.id===t.hitBox.id&&console.log("clidck ")}}class bS extends Er{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ES(t)}),this.register(function(t){return new DS(t)}),this.register(function(t){return new FS(t)}),this.register(function(t){return new CS(t)}),this.register(function(t){return new RS(t)}),this.register(function(t){return new LS(t)}),this.register(function(t){return new IS(t)}),this.register(function(t){return new TS(t)}),this.register(function(t){return new PS(t)}),this.register(function(t){return new AS(t)}),this.register(function(t){return new SS(t)}),this.register(function(t){return new NS(t)})}load(e,t,n,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=wi.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new rf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={};if(typeof e=="string")r=e;else if(wi.decodeText(new Uint8Array(e,0,4))===cf){try{o[Ve.KHR_BINARY_GLTF]=new OS(e)}catch(h){s&&s(h);return}r=o[Ve.KHR_BINARY_GLTF].content}else r=wi.decodeText(new Uint8Array(e));const l=JSON.parse(r);if(l.asset===void 0||l.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new KS(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,o[h.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const h=l.extensionsUsed[u],d=l.extensionsRequired||[];switch(h){case Ve.KHR_MATERIALS_UNLIT:o[h]=new wS;break;case Ve.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[h]=new BS;break;case Ve.KHR_DRACO_MESH_COMPRESSION:o[h]=new kS(l,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:o[h]=new US;break;case Ve.KHR_MESH_QUANTIZATION:o[h]=new zS;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function MS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class SS{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Pe(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new eS(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new JM(u),c.distance=h;break;case"spot":c=new of(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class wS{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return xi}extendParams(e,t,n){const s=[];e.color=new Pe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,et))}return Promise.all(s)}}class TS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class ES{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(a,a)}return Promise.all(r)}}class AS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class CS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,et)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class RS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class LS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Pe(a[0],a[1],a[2]),Promise.all(r)}}class IS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class PS{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Pe(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,et)),Promise.all(r)}}class DS{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class FS{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class NS{constructor(e){this.name=Ve.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([r,o.ready]).then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new ArrayBuffer(u*h),p=new Uint8Array(a[0],l,c);return o.decodeGltfBuffer(new Uint8Array(d),u,h,p,s.mode,s.filter),d})}else return null}}const cf="glTF",Ws=12,dh={JSON:1313821514,BIN:5130562};class OS{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ws);if(this.header={magic:wi.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Ws,s=new DataView(e,Ws);let r=0;for(;r<n;){const o=s.getUint32(r,!0);r+=4;const a=s.getUint32(r,!0);if(r+=4,a===dh.JSON){const l=new Uint8Array(e,Ws+r,o);this.content=wi.decodeText(l)}else if(a===dh.BIN){const l=Ws+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class kS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=ul[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=ul[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],p=xr[d.componentType];c[h]=p,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){s.decodeDracoFile(u,function(d){for(const p in d.attributes){const g=d.attributes[p],m=l[p];m!==void 0&&(g.normalized=m)}h(d)},a,c)})})}}class US{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class cl extends Ds{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),s=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new Pe().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",s).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class BS{constructor(){this.name=Ve.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return cl}extendParams(e,t,n){const s=t.extensions[this.name];e.color=new Pe(1,1,1),e.opacity=1;const r=[];if(Array.isArray(s.diffuseFactor)){const o=s.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(s.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",s.diffuseTexture,et)),e.emissive=new Pe(0,0,0),e.glossiness=s.glossinessFactor!==void 0?s.glossinessFactor:1,e.specular=new Pe(1,1,1),Array.isArray(s.specularFactor)&&e.specular.fromArray(s.specularFactor),s.specularGlossinessTexture!==void 0){const o=s.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",o)),r.push(n.assignTexture(e,"specularMap",o,et))}return Promise.all(r)}createMaterial(e){const t=new cl(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Ol,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class zS{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class uf extends Tr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,p=d*h,g=e*c,m=g-c,f=-2*p+3*d,_=p-d,M=1-f,E=_-d+h;for(let T=0;T!==a;T++){const w=o[m+T+a],I=o[m+T+l]*u,F=o[g+T+a],b=o[g+T]*u;r[T]=M*w+E*I+f*F+_*b}return r}}const VS=new Gt;class HS extends uf{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return VS.fromArray(r).normalize().toArray(r),r}}const An={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fh={9728:mt,9729:It,9984:Qa,9985:Pd,9986:el,9987:Cs},ph={33071:zt,33648:vo,10497:vs},mh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ul={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},GS={CUBICSPLINE:void 0,LINEAR:bs,STEP:fr},Ia={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function WS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ds({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gs})),i.DefaultMaterial}function js(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function jS(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function qS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function XS(i){const e=i.extensions&&i.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+gh(e.attributes):t=i.indices+":"+gh(i.attributes)+":"+i.mode,t}function gh(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function hl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $S(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class KS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new MS,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new KM(this.options.manager):this.textureLoader=new nS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};js(r,a,s),fi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this.loadNode(t);break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(wi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0)return Promise.resolve(null);const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=mh[s.type],c=xr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let m,f;if(p&&p!==h){const _=Math.floor(d/p),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+_+":"+s.count;let E=t.cache.get(M);E||(m=new c(a,_*p,s.count*p/u),E=new DM(m,p/u),t.cache.add(M,E)),f=new Hl(E,l,d%p/u,g)}else a===null?m=new c(s.count*l):m=new c(a,d,s.count*l),f=new kt(m,l,g);if(s.sparse!==void 0){const _=mh.SCALAR,M=xr[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,T=s.sparse.values.byteOffset||0,w=new M(o[1],E,s.sparse.count*_),I=new c(o[2],T,s.sparse.count*l);a!==null&&(f=new kt(f.array.slice(),f.itemSize,f.normalized));for(let F=0,b=w.length;F<b;F++){const C=w[F];if(f.setX(C,I[F*l]),l>=2&&f.setY(C,I[F*l+1]),l>=3&&f.setZ(C,I[F*l+2]),l>=4&&f.setW(C,I[F*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,o.name&&(u.name=o.name);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=fh[d.magFilter]||It,u.minFilter=fh[d.minFilter]||Cs,u.wrapS=ph[d.wrapS]||vs,u.wrapT=ph[d.wrapT]||vs,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(m){const f=new At(m);f.needsUpdate=!0,d(f)}),t.load(wi.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||$S(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.encoding=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new tf,gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ef,gn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Ds}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const h=s[Ve.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else if(l[Ve.KHR_MATERIALS_UNLIT]){const h=s[Ve.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,et)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ai);const u=r.alphaMode||Ia.OPAQUE;if(u===Ia.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ia.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==xi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&o!==xi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==xi&&(a.emissive=new Pe().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==xi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,et)),Promise.all(c).then(function(){let h;return o===cl?h=s[Ve.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):h=new o(a),r.name&&(h.name=r.name),fi(h,r),t.associations.set(h,{materials:e}),r.extensions&&js(s,h,r),h})}createUniqueName(e){const t=Ke.sanitizeNodeName(e||"");let n=t;for(let s=1;this.nodeNamesUsed[n];++s)n=t+"_"+s;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return _h(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=XS(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=_h(new xn,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?WS(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const m=u[p],f=o[p];let _;const M=c[p];if(f.mode===An.TRIANGLES||f.mode===An.TRIANGLE_STRIP||f.mode===An.TRIANGLE_FAN||f.mode===void 0)_=r.isSkinnedMesh===!0?new NM(m,M):new Ht(m,M),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),f.mode===An.TRIANGLE_STRIP?_.geometry=xh(_.geometry,_0):f.mode===An.TRIANGLE_FAN&&(_.geometry=xh(_.geometry,Nd));else if(f.mode===An.LINES)_=new UM(m,M);else if(f.mode===An.LINE_STRIP)_=new Wl(m,M);else if(f.mode===An.LINE_LOOP)_=new BM(m,M);else if(f.mode===An.POINTS)_=new zM(m,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(_.geometry.morphAttributes).length>0&&qS(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),fi(_,r),f.extensions&&js(s,_,f),t.assignFinalMaterial(_),h.push(_)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];const d=new vi;t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Tt(Ln.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new zl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(s){return n.inverseBindMatrices=s,n})}loadAnimation(e){const n=this.json.animations[e],s=[],r=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],d=n.samplers[h.sampler],p=h.target,g=p.node!==void 0?p.node:p.id,m=n.parameters!==void 0?n.parameters[d.input]:d.input,f=n.parameters!==void 0?n.parameters[d.output]:d.output;s.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",f)),a.push(d),l.push(p)}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2],p=c[3],g=c[4],m=[];for(let _=0,M=u.length;_<M;_++){const E=u[_],T=h[_],w=d[_],I=p[_],F=g[_];if(E===void 0)continue;E.updateMatrix(),E.matrixAutoUpdate=!0;let b;switch(Xn[F.path]){case Xn.weights:b=gr;break;case Xn.rotation:b=Pi;break;case Xn.position:case Xn.scale:default:b=_r;break}const C=E.name?E.name:E.uuid,X=I.interpolation!==void 0?GS[I.interpolation]:bs,z=[];Xn[F.path]===Xn.weights?E.traverse(function(oe){oe.morphTargetInfluences&&z.push(oe.name?oe.name:oe.uuid)}):z.push(C);let de=w.array;if(w.normalized){const oe=hl(de.constructor),O=new Float32Array(de.length);for(let Y=0,V=de.length;Y<V;Y++)O[Y]=de[Y]*oe;de=O}for(let oe=0,O=z.length;oe<O;oe++){const Y=new b(z[oe]+"."+Xn[F.path],T.array,de,X);I.interpolation==="CUBICSPLINE"&&(Y.createInterpolant=function(j){const q=this instanceof Pi?HS:uf;return new q(this.times,this.values,this.getValueSize()/3,j)},Y.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(Y)}}const f=n.name?n.name:"animation_"+e;return new ol(f,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,s=this,r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"";return function(){const a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(r.isBone===!0?l=new Qd:a.length>1?l=new vi:a.length===1?l=a[0]:l=new ut,l!==a[0])for(let c=0,u=a.length;c<u;c++)l.add(a[c]);if(r.name&&(l.userData.name=r.name,l.name=o),fi(l,r),r.extensions&&js(n,l,r),r.matrix!==void 0){const c=new Xe;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return s.associations.has(l)||s.associations.set(l,{}),s.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,s=this.json.scenes[e],r=this,o=new vi;s.name&&(o.name=r.createUniqueName(s.name)),fi(o,s),s.extensions&&js(n,o,s);const a=s.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(hf(a[c],o,t,r));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[d,p]of r.associations)(d instanceof gn||d instanceof At)&&h.set(d,p);return u.traverse(d=>{const p=r.associations.get(d);p!=null&&h.set(d,p)}),h};return r.associations=c(o),o})}}function hf(i,e,t,n){const s=t.nodes[i];return n.getDependency("node",i).then(function(r){if(s.skin===void 0)return r;let o;return n.getDependency("skin",s.skin).then(function(a){o=a;const l=[];for(let c=0,u=o.joints.length;c<u;c++)l.push(n.getDependency("node",o.joints[c]));return Promise.all(l)}).then(function(a){return r.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let h=0,d=a.length;h<d;h++){const p=a[h];if(p){c.push(p);const g=new Xe;o.inverseBindMatrices!==void 0&&g.fromArray(o.inverseBindMatrices.array,h*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[h])}l.bind(new Gl(c,u),l.matrixWorld)}),r})}).then(function(r){e.add(r);const o=[];if(s.children){const a=s.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];o.push(hf(u,r,t,n))}}return Promise.all(o)})}function YS(i,e,t){const n=e.attributes,s=new Rs;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const u=hl(xr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,l=new L;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const m=hl(xr[d.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Ls;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function _h(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=ul[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return fi(i,e),YS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?jS(i,e.targets,t):i})}function xh(i,e){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Nd)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r}class ZS extends af{constructor(t){super(t);Oe(this,"maxButterflies",20);Oe(this,"butterflySpawnRate",.7);Oe(this,"loader");Oe(this,"mainDirection",new L(-1,.3,.05));Oe(this,"_currentTime",0);Oe(this,"_butterflies",[]);Oe(this,"_reusableButterflies",[]);Oe(this,"_modelLoaded",!1);Oe(this,"_gltf");this.loader=new bS,this.loader.load("src/assets/models/Butterfly.glb",n=>{this._gltf=n,this._modelLoaded=!0,this.spawnInitial()})}update(){if(!!this._modelLoaded){this._currentTime+=this.scene.deltaTime,this._currentTime>=this.butterflySpawnRate&&(this._currentTime=0,this.spawnButterfly());for(let t=0;t<this._butterflies.length;t++)this._butterflies[t].isReusable&&(this._reusableButterflies.push(this._butterflies[t]),this._butterflies.splice(t,1),t--)}}dispose(){this._butterflies=[],this._reusableButterflies=[]}spawnButterfly(){if(!this._gltf)return;var t;this._reusableButterflies.length>0?t=this._reusableButterflies.pop():(t=new yS(this.scene,this._gltf),this.scene.addObject(t)),this._butterflies.push(t);const n=new L(Ln.randFloat(-1,1),Ln.randFloat(-1,1),Ln.randFloat(-1,1)).multiplyScalar(.3),s=new L().copy(this.mainDirection).add(n).normalize();t.reset(s,Ln.randFloat(.7,1.5),Ln.randFloat(9,12),new L(80,-15,-10))}spawnInitial(){for(let t=0;t<5;t++)this.spawnButterfly()}}const JS=Fo('<canvas id="bg" data-v-3618e52f></canvas><div class="max-width" data-v-3618e52f><div class="name-container" data-v-3618e52f><div data-v-3618e52f><div class="name-1" data-v-3618e52f>Hello, I&#39;m</div><div class="name-2" data-v-3618e52f>Chris Lokhorst</div></div></div></div>',2),QS=sn({__name:"Home",setup(i){let e=!1,t,n;return Tl(()=>{n=document.getElementById("footer"),n&&(n.style.display="none"),e=!0;const s=document.getElementById("bg");if(!s)return;const r=new PM,o=new Tt(75,s.offsetWidth/s.offsetHeight,.1,1e3),a=new Jd({canvas:s,alpha:!0});a.setPixelRatio(window.devicePixelRatio),o.position.setZ(30),o.position.setX(0),t=new xS(r,o,a);const l=new of(16777215),c=new tS(16777215,.1);l.position.set(30,10,30),l.rotation.x=-90,l.rotation.y=45,l.angle=10,l.decay=2,t.scene.add(l),t.scene.add(c),t.addObject(new ZS(t));const u=new Uo(1e3,1e3,200,200),h=new Ds({color:new Pe(.7,.1,.7)}),d=new Ht(u,h);d.rotateX(-Math.PI/2),h.wireframe=!0,d.scale.setX(20),d.scale.setY(20),d.position.setY(-30),t.scene.add(d),t.update(0);function p(g){!e||(t.update(g),requestAnimationFrame(p))}p(0)}),El(()=>{e=!1,t.dispose(),n&&(n.style.display="block")}),(s,r)=>JS}});const ew=Wt(QS,[["__scopeId","data-v-3618e52f"]]),tw="/assets/CroppedMe.18fe97ab.png",nw={props:["title","date","description","image","link"]};const iw={class:"content"},sw=["href"],rw=["src"],ow={class:"description-content"},aw={class:"title"},lw={class:"date"},cw=["innerHTML"];function uw(i,e,t,n,s,r){return it(),at("div",iw,[Ae("a",{href:t.link,target:"_blank"},[Ae("img",{src:t.image},null,8,rw)],8,sw),Ae("div",ow,[Ae("div",aw,Ti(t.title),1),Ae("div",lw,Ti(t.date),1),Ae("div",{class:"description main-text",innerHTML:t.description},null,8,cw)])])}const no=Wt(nw,[["render",uw],["__scopeId","data-v-b187629c"]]),hw=sn({props:["icon","percentage"],mounted(){const i=this.$refs.span;i!=null&&(i.style.width=this.percentage)}});const dw={class:"content"},fw=["src"],pw={class:"progress-bar"},mw={ref:"span"};function gw(i,e,t,n,s,r){return it(),at("div",dw,[Ae("img",{src:i.icon},null,8,fw),Ae("div",pw,[Ae("span",mw,null,512)])])}const un=Wt(hw,[["render",gw],["__scopeId","data-v-60247759"]]),df=i=>(br("data-v-ca2e65cc"),i=i(),Mr(),i),_w={class:"max-width"},xw={class:"container fade-in-animation"},vw=Fo('<div class="top-content" data-v-ca2e65cc><div class="description" data-v-ca2e65cc><div class="title" data-v-ca2e65cc> Hi </div><div class="main-text" data-v-ca2e65cc> I&#39;m Chris, and welcome to my portfolio page! In this section, I&#39;ll talk a bit about what I do, my skills, and my work experience. <br data-v-ca2e65cc><br data-v-ca2e65cc> Ever since I was a child, I loved playing games. So naturally, I was interest in how they were made, but never got to learn how to program. Eventually when I had to choose what to study, I decided to pursue game development to see if I would enjoy it. Ever since then, I&#39;ve been extremely motivated to learn more about developing game systems, shaders and overall software development, to the point that I like to spent some of my free time programming things that I&#39;m interested in. </div></div><img class="visual" src="'+tw+'" data-v-ca2e65cc></div><div class="title" data-v-ca2e65cc> Education </div>',2),yw={class:"experiences"},bw=df(()=>Ae("div",{class:"title"}," Experience ",-1)),Mw={class:"experiences"},Sw={class:"experiences"},ww=df(()=>Ae("div",{class:"title"}," Skills ",-1)),Tw={class:"skills"},Ew=sn({__name:"About",setup(i){return(e,t)=>(it(),at("div",_w,[Ae("div",xw,[vw,Ae("div",yw,[Ne(no,{title:"UU Game and Media Technology Master's degree",date:"4-9-2023 - now",description:"I'm currently pursuing a master's degree at the Utrecht University.",image:"https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Utrecht_University_logo.svg/1200px-Utrecht_University_logo.svg.png",link:"https://www.uu.nl/"}),Ne(no,{title:"HvA HBO-ICT Bachelor's degree - Cum Laude",date:"2-9-2019 - 30-6-2023",description:`I graduated with honors from the Amsterdam University of Applied Sciences (HvA) and received a bachelor's degree in game development. During my time at the HvA, I learned how to program in languages like C# and java, \r
        and learned how to develop 2D and 3D applications using Unity.`,image:"src/assets/images/SocialMedia-HvA.png",link:"https://www.hva.nl/"})]),bw,Ae("div",Mw,[Ne(no,{title:"KLM Graduation Internship",date:"6-2-2023 - 30-6-2023",description:`For my graduation internship, I worked at the <a href='https://www.linkedin.com/in/klm-xr-center-of-excellence/' target='_blank'>KLM-XR Center of Excellence</a>. Here, I developed a multiplayer VR experience for the Oculus Quest 2 where users could inspect and hold discussions about the new Flying-V plane model, designed by the TU delft.\r
        I learned how to setup a multiplayer environment for VR using Photon Fusion, how to animate full-body avatars using Ready Player Me and FinalIK, and how to improve the performance of scenes with high-detail models, without affecting the visual quality.`,image:"https://media.licdn.com/dms/image/v2/D4E0BAQEbQeKTEGibgQ/company-logo_200_200/company-logo_200_200/0/1719834830856/klm_logo?e=1740614400&v=beta&t=FILRvyH9hhKsZfmkqJRZBV155SAJVSoOv_qlTcNQMrY",link:"https://www.linkedin.com/in/klm-xr-center-of-excellence/"})]),Ae("div",Sw,[Ne(no,{title:"DTT Internship / Summerjob",date:"23-8-2021 - 4-2-2022 \xA0 & \xA0 11-7-2022 - 25-8-2022",description:`My first internship was at the multimedia company <a href='https://www.d-tt.nl/' target='_blank'>DTT</a>. I got to work on many different Unity projects. \r
        I worked on projects such as <a href='https://www.d-tt.nl/en/apps/edu-play-book' target='_blank'>Education Play Book</a>, <a href='https://www.d-tt.nl/apps/fly-me-to-the-stars' target='_blank'>Fly me to the stars</a>, \r
        and worked on <a href='https://assetstore.unity.com/publishers/35054' target='_blank'>packages</a> for the Unity asset store. <br>\r
        Since my internship went well, I was allowed to work again as a Unity developer during the summer vacation of 2022. I also got to work on web projects like <a href='https://www.kiesmbo.nl/ontdek-mbo' target='_blank'>kiesMBO</a>, \r
        where I got to learn javascript, typescript, Vue.js and Three.js.`,image:"https://s3-eu-west-1.amazonaws.com/sortlist-core-api/x5RpFNJ1g7owYPVUqhSdsZTd",link:"https://www.d-tt.nl/"})]),ww,Ae("div",Tw,[Ne(un,{icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/256px-Logo_C_sharp.svg.png",percentage:"90%"}),Ne(un,{icon:"https://i.redd.it/tu3gt6ysfxq71.png",percentage:"100%"}),Ne(un,{icon:"https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png",percentage:"80%"}),Ne(un,{icon:"https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945099.png?f=webp&w=256",percentage:"80%"}),Ne(un,{icon:"https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",percentage:"60%"}),Ne(un,{icon:"https://www.svgrepo.com/show/184143/java.svg",percentage:"60%"}),Ne(un,{icon:"https://cdn.freebiesupply.com/logos/large/2x/opengl-1-logo-png-transparent.png",percentage:"70%"}),Ne(un,{icon:"https://icon-library.com/images/blender-3d-icon/blender-3d-icon-9.jpg",percentage:"60%"}),Ne(un,{icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png",percentage:"50%"}),Ne(un,{icon:"https://user-images.githubusercontent.com/2678654/32683174-3e4fc48e-c647-11e7-98c0-96477a44bfa2.png",percentage:"40%"})])])]))}});const Aw=Wt(Ew,[["__scopeId","data-v-ca2e65cc"]]);var qe=(i=>(i.PERSONAL="PERSONAL",i.SCHOOL="SCHOOL",i.INTERNSHIP="INTERNSHIP",i.C_SHARP="C#",i.CPP="C++",i.C="C",i.RUST="Rust",i.JAVA="JAVA",i.OPENGL="OpenGL",i.SHADER="Shaders",i.UNITY="Unity",i.VR="VR",i))(qe||{});const Cw=Object.freeze({PERSONAL:{color:"rgb(0, 165, 0)",text:"Personal"},SCHOOL:{color:"rgb(0, 123, 255)",text:"School"},INTERNSHIP:{color:"rgb(255, 165, 0)",text:"Internship"},["C#"]:{color:"rgb(165, 100, 165)",text:"C#"},["C++"]:{color:"rgb(0, 100, 255)",text:"C++"},C:{color:"rgb(0, 50, 255)",text:"C"},Rust:{color:"rgb(255, 69, 0)",text:"Rust"},JAVA:{color:"rgb(220, 140, 0)",text:"Java"},OpenGL:{color:"rgb(0, 255, 255)",text:"OpenGL"},Unity:{color:"rgb(100, 100, 100)",text:"Unity"},Shaders:{color:"rgb(255, 105, 180)",text:"Shaders"},VR:{color:"rgb(200,130,90)",text:"VR"}}),Rw=sn({__name:"Tag",props:{tag:null,clickable:{type:Boolean},selected:{type:Boolean}},emits:["tag-toggled"],setup(i,{emit:e}){const t=i,n=Cw[t.tag],s=()=>{!t.clickable||e("tag-toggled",{tag:t.tag})};return(r,o)=>(it(),at("div",{class:Mo(["tag-item"]),style:vr({backgroundColor:Pn(n).color,filter:i.selected?"none":"brightness(50%)",cursor:i.clickable?"pointer":"default"}),onClick:s},Ti(Pn(n).text),5))}});const $l=Wt(Rw,[["__scopeId","data-v-79cd6750"]]);function ff(i){const e=/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|(?:[^\/\n\s]+)\/?\S*?\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,t=i.match(e);return t?t[1]:null}function Lw(i){return`https://img.youtube.com/vi/${i}/maxresdefault.jpg`}const Iw={class:"item_content"},Pw=["src"],Dw={class:"title"},Fw={class:"description"},Nw={class:"tag-container"},Ow=sn({__name:"Card",props:{tags:null,title:null,media:null,description:null,git_link:null,additional_link:null},emits:["card-clicked"],setup(i,{emit:e}){const t=i,n=250,s=()=>{if(t.description.length<n)return t.description;let a=t.description.slice(0,n);const l=a.lastIndexOf(" ");return l===-1?a:a.slice(0,l)+"..."},r=()=>{let a=t.media,l=ff(a);return l&&(a=Lw(l)),a},o=()=>{e("card-clicked",{title:t.title,description:t.description,media:t.media,tags:t.tags,git_link:t.git_link,additional_link:t.additional_link})};return(a,l)=>(it(),at("div",{class:"item",onClick:o},[Ae("div",Iw,[Ae("img",{class:"media",src:r()},null,8,Pw),Ae("div",Dw,Ti(t.title),1),Ae("div",Fw,Ti(s()),1),Ae("div",Nw,[(it(!0),at(Ft,null,mo(t.tags,(c,u)=>(it(),cr($l,{key:u,tag:c,clickable:!1,selected:!0},null,8,["tag"]))),128))])])]))}});const kw=Wt(Ow,[["__scopeId","data-v-e1f8e443"]]);const Kl=i=>(br("data-v-3bd558a1"),i=i(),Mr(),i),Uw={class:"flex"},Bw={class:"visual"},zw=["src"],Vw=["href"],Hw=["src"],Gw=["src"],Ww={class:"tag-container"},jw={class:"fixed-bottom-visual"},qw=["href"],Xw=Kl(()=>Ae("img",{class:"icon",src:"https://img.icons8.com/ios11/512/FFFFFF/github.png"},null,-1)),$w=[Xw],Kw=["href"],Yw=Kl(()=>Ae("img",{class:"icon",src:"https://img.icons8.com/ios11/512/FFFFFF/link.png"},null,-1)),Zw=[Yw],Jw=Kl(()=>Ae("div",{class:"seperator seperate"},null,-1)),Qw={class:"description"},e1={class:"title"},t1={class:"main-text"},n1=sn({__name:"CardOverlay",props:{visible:null,title:null,description:null,media:null,tags:null,git_link:null,additional_link:null},emits:["close"],setup(i,{emit:e}){const t=i,n=()=>{e("close")},s=()=>ff(t.media)!=null;return(r,o)=>i.visible?(it(),at("div",{key:0,class:"overlay fade-in-animation",onClick:n},[Ae("div",{class:"max-width content",onClick:o[0]||(o[0]=Bm(()=>{},["stop"]))},[Ae("img",{class:"close",src:"https://img.icons8.com/ios11/512/FFFFFF/cancel.png",onClick:n}),Ae("div",Uw,[Ae("div",Bw,[s()?(it(),at("iframe",{key:0,class:"media media-video",src:i.media},null,8,zw)):oi("",!0),i.git_link||i.additional_link?(it(),at("a",{key:1,href:i.git_link?i.git_link:i.additional_link,target:"_blank"},[s()?oi("",!0):(it(),at("img",{key:0,class:"media",src:i.media},null,8,Hw))],8,Vw)):oi("",!0),!i.git_link&&!i.additional_link&&!s()?(it(),at("img",{key:2,class:"media",src:i.media},null,8,Gw)):oi("",!0),Ae("div",Ww,[(it(!0),at(Ft,null,mo(t.tags,(a,l)=>(it(),cr($l,{key:l,tag:a,clickable:!1,selected:!0},null,8,["tag"]))),128))]),Ae("div",jw,[i.git_link!=null?(it(),at("a",{key:0,href:i.git_link,target:"_blank"},$w,8,qw)):oi("",!0),i.additional_link!=null?(it(),at("a",{key:1,href:i.additional_link,target:"_blank"},Zw,8,Kw)):oi("",!0)])]),Jw,Ae("div",Qw,[Ae("div",e1,Ti(i.title),1),Ae("div",t1,Ti(i.description),1)])])])])):oi("",!0)}});const i1=Wt(n1,[["__scopeId","data-v-3bd558a1"]]),Yl=i=>(br("data-v-3da62d5f"),i=i(),Mr(),i),s1={class:"max-width"},r1={class:"container fade-in-animation"},o1=Yl(()=>Ae("div",{class:"title"}," Projects ",-1)),a1=Yl(()=>Ae("div",{class:"seperator-hor"},null,-1)),l1=Yl(()=>Ae("div",{class:"sub-text"},"Filter by toggling tags",-1)),c1={class:"filters"},u1={class:"cards"},h1=sn({__name:"Projects",setup(i){const e=Xs([{title:"FMorgana",description:`Next to my regular courses at the UU, I decided to participate in a project at the HKU. Game students at the HKU are required to create a finished game for an external client within half a year. I was assigned to a group tasked with creating a game experience for the Imagine Film Festival, a film festival focused on fiction-themed movies that changes its theme every year. This year's theme was 'Escape,' encompassing ideas of dystopias and utopias.
Our goal was to create an experience that could be enjoyed by people of all ages and gaming backgrounds, while aligning with the theme. 

 We designed a VR game set in a dystopian world controlled by a megacorporation. The player's objective was to follow a digital cat that leads them to a utopia. Eventually, it is revealed that the utopia is a digital projection, forcing the player to confront a dilemma: stay in a real dystopia, or escape to a false utopia.

 I worked as a gameplay engineer and technical artist on the team. I created most of the shaders, including a custom lighting model for the dystopian and utopian environments. I also handled the majority of the VFX, such as a simple boids system for a flock of butterflies that the player eventually needs to follow. In addition, I worked on VR interactions, such as interacting with the cat and throwing objects. My contributions were highly valued by my teammates.`,media:"https://www.youtube.com/embed/uOESkckacEk",tags:[qe.SCHOOL,qe.UNITY,qe.C_SHARP,qe.VR,qe.SHADER]},{title:"Procedural Planets",description:`For a school research assignment, I decided to create procedurally generated planets in Unity. My goal was to generate miniture planets in the style of the game Outer Wilds, while making the terrain destructable. 

During this project, I learned how to properly use compute shaders for large complex calculations, write custom shaders with simple diffuse and specular light, implement an octree LOD-system, and render realistic atmospheres. Because of the effort and passion I put into this project, I received a 10/10 from my teachers. 

By clicking on the link on the bottom left, you can access the blog post I wrote about this project. It goes in depth on how I implemented the systems needed to render these planets!`,media:"https://www.youtube.com/embed/aMZN_k85PA4",tags:[qe.SCHOOL,qe.PERSONAL,qe.UNITY,qe.C_SHARP,qe.SHADER],additional_link:"https://summit-2223-sem1.game-lab.nl/?p=64"},{title:"Flying-V VR",description:`For my graduation internship, I developed an Oculus Quest 2 VR application for KLM in which users could inspect the Flying-V plane model. The application was developed in Unity, using Photon Fusion for multiplayer and Ready Player Me for avatars. 

 Through this project, I learned how to properly setup a multiplayer game in Unity, and learned different optimization techniques for rendering multiple high-quality models.`,media:"/src/assets/images/Screenshot 2023-05-23 103204.png",tags:[qe.INTERNSHIP,qe.UNITY,qe.C_SHARP,qe.VR]},{title:"Path Tracer",description:"During my master's program, I followed a course in Advanced Graphics where I learned about real-time raytracing. After finishing the course with a 8.9/10, I decided to use what I learned to develop my own raytracer. The current progress of my raytracer can be seen on the github page linked in the bottom left.",media:"https://github.com/user-attachments/assets/ac4bf908-e621-4eea-acb3-033fa143c486",tags:[qe.PERSONAL,qe.RUST],git_link:"https://github.com/ChrisPis-bit/MyTracer"},{title:"Magicise VR",description:"During my study at the HvA, I followed the minor 'Virtual Reality'. During this minor, each group was tasked with solving a problem for a company using a VR application My group was tasked with creating a VR application that motivates athletes to perform workouts in a virtual environment. During this project, I mainly worked on creating visual effects using custom written shaders and the VFX graph in Unity. I also implemented the ability to use an XSense motion capture suit in the application, created many of the 3d models and textures in blender, and served as the group lead.",media:"https://www.youtube.com/embed/SMg9Urwz5fs",tags:[qe.SCHOOL,qe.UNITY,qe.C_SHARP,qe.VR]},{title:"Endless Terrain Generator",description:"In my free time, I like to pick up small projects in subjects that interest me. One of these projects is an endless terrain generator. Using the marching cubes algorithm and 3D noise, I am able to generate an endless randomized terrain. By working on this project, I learned what compute shaders are, how to optimize code with Unity's job system, and how to procedurally generating meshes. There is still a lot that can be added to this system, like adding foliage, biomes, terraforming and an improved editor. ",media:"https://www.youtube.com/embed/_nPeMuDrUjA",tags:[qe.PERSONAL,qe.UNITY,qe.C_SHARP],git_link:"https://gitlab.com/ChrisPis/terrain-generation"},{title:"DTT - Unity Packages",description:"During my internship at the multimedia company DTT, I worked on a project called the Unity Core Packages (UCP) project. The goals of this project was to convert systems used in existing DTT apps into Unity assets, which can then be sold on the Unity asset store. I was tasked with creating some assets from scratch, and checking if assets are ready for release. I worked on assets like Word Finder, Anagram Finder, Analytic events and A/B testing, and added functionalities to many of the other published assets.",media:"/src/assets/images/DTTAssetStore.png",tags:[qe.INTERNSHIP,qe.UNITY,qe.C_SHARP],additional_link:"https://assetstore.unity.com/publishers/35054"},{title:"Slime Dash",description:"In the first year at the HvA, we were tasked with making a simple 2d game that could be played on the consoles in planes. With no prior coding experience, I worked together with 3 other students to create the game Slime Dash. The game is a 2D infinite side scroller in which you have to dash through enemies and gain as many points as you can. We were able to finish this project in a single semester, during which I learned the basics of programming in Processing. Our game was a part of the top 3 rated games of that semester.",media:"https://www.youtube.com/embed/gVGPEba4fYc",tags:[qe.SCHOOL,qe.JAVA]},{title:"Global Game Jams",description:"As of now, I have participated in 2 global game jams with a group of 2 other fellow students. So far I've completed each of the jams and delivered functioning games in the given 2 days. The jams had taught me how to quickly prototype games, and also gave me a better idea on how long it can take to fine tune a game. I mainly worked on the gameplay programming and art of the games. The games can be found on my itch.io page, which can be accessed through the link in the bottom-left of this page.",media:"https://globalgamejam.nl/wp-content/uploads/2021/12/ggjnl-2022-banner.png",tags:[qe.PERSONAL],additional_link:"https://chrispis.itch.io/"}]),t=Ot(()=>(console.log("TEST"),e.value.filter(d=>d.tags.some(p=>{var g;return(g=l.value.find(m=>p===m.value))==null?void 0:g.enabled})))),n=Xs(!1),s=Xs({title:"",description:"",media:"",tags:[],git_link:void 0,additional_link:void 0}),r=d=>{s.value.title=d.title,s.value.description=d.description,s.value.media=d.media,s.value.tags=d.tags,s.value.git_link=d.git_link,s.value.additional_link=d.additional_link,n.value=!0},o=()=>{n.value=!1},a=Object.keys(qe).map(d=>qe[d]),l=Xs(a.map(d=>({value:d,enabled:!0}))),c=d=>{const p=l.value.find(g=>g.value===d.tag);p&&(p.enabled=!p.enabled)},u=()=>l.value.some(d=>d.enabled),h=()=>{const d=u();l.value.forEach(p=>p.enabled=!d)};return(d,p)=>(it(),at("div",s1,[Ae("div",r1,[o1,a1,l1,Ae("div",c1,[(it(!0),at(Ft,null,mo(l.value,g=>(it(),cr($l,{tag:g.value,clickable:!0,selected:g.enabled,onTagToggled:c},null,8,["tag","selected"]))),256)),Ae("div",{class:"filters-toggle",onClick:p[0]||(p[0]=g=>h()),style:vr({filter:u()?"none":"brightness(50%)"})},"X",4)]),Ae("div",u1,[(it(!0),at(Ft,null,mo(Pn(t),g=>(it(),cr(kw,{key:g.title,title:g.title,media:g.media,tags:g.tags,description:g.description,git_link:g.git_link,additional_link:g.additional_link,onCardClicked:r},null,8,["title","media","tags","description","git_link","additional_link"]))),128))]),Ne(i1,{visible:n.value,title:s.value.title,description:s.value.description,media:s.value.media,git_link:s.value.git_link,tags:s.value.tags,additional_link:s.value.additional_link,onClose:o},null,8,["visible","title","description","media","git_link","tags","additional_link"])])]))}});const d1=Wt(h1,[["__scopeId","data-v-3da62d5f"]]);const f1={},p1={class:"max-width"},m1=Fo('<div class="container fade-in-animation" data-v-d8ee332a><div class="center-content" data-v-d8ee332a><div class="title" data-v-d8ee332a> Contact Me </div><div class="seperator" data-v-d8ee332a></div><div class="icons" data-v-d8ee332a><a href="mailto:chris.lokhorst@kpnmail.nl?body=Message%20body%20text%20" data-v-d8ee332a><img src="https://img.icons8.com/ios/100/FFFFFF/mail.png" data-v-d8ee332a></a><a href="https://www.linkedin.com/in/chris-lokhorst-7304b7210/" target="_blank" data-v-d8ee332a><img src="https://img.icons8.com/ios/100/FFFFFF/linkedin-circled--v1.png" data-v-d8ee332a></a><a href="https://github.com/ChrisPis-bit?tab=repositories" target="_blank" data-v-d8ee332a><img class="icon" src="https://img.icons8.com/ios11/100/FFFFFF/github.png" data-v-d8ee332a></a></div></div></div>',1),g1=[m1];function _1(i,e){return it(),at("div",p1,g1)}const x1=Wt(f1,[["render",_1],["__scopeId","data-v-d8ee332a"]]);const v1=[{path:"/",component:ew},{path:"/about",component:Aw},{path:"/projects",component:d1},{path:"/contact",component:x1}],y1=Xg({history:lg(),routes:v1}),pf=Hm(M_);pf.use(y1);pf.mount("#app");
