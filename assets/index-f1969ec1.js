(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();function _(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Te=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),ue=Te,V=()=>Math.random().toString(36).substring(7).split("").join("."),ke={INIT:`@@redux/INIT${V()}`,REPLACE:`@@redux/REPLACE${V()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${V()}`},L=ke;function ne(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function me(e,t,r){if(typeof e!="function")throw new Error(_(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(_(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(_(1));return r(me)(e,t)}let n=e,o=t,i=new Map,c=i,u=0,s=!1;function f(){c===i&&(c=new Map,i.forEach((h,g)=>{c.set(g,h)}))}function a(){if(s)throw new Error(_(3));return o}function d(h){if(typeof h!="function")throw new Error(_(4));if(s)throw new Error(_(5));let g=!0;f();const j=u++;return c.set(j,h),function(){if(g){if(s)throw new Error(_(6));g=!1,f(),c.delete(j),i=null}}}function y(h){if(!ne(h))throw new Error(_(7));if(typeof h.type>"u")throw new Error(_(8));if(typeof h.type!="string")throw new Error(_(17));if(s)throw new Error(_(9));try{s=!0,o=n(o,h)}finally{s=!1}return(i=c).forEach(g=>{g()}),h}function m(h){if(typeof h!="function")throw new Error(_(10));n=h,y({type:L.REPLACE})}function I(){const h=d;return{subscribe(g){if(typeof g!="object"||g===null)throw new Error(_(11));function j(){const l=g;l.next&&l.next(a())}return j(),{unsubscribe:h(j)}},[ue](){return this}}}return y({type:L.INIT}),{dispatch:y,subscribe:d,getState:a,replaceReducer:m,[ue]:I}}function Me(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:L.INIT})>"u")throw new Error(_(12));if(typeof r(void 0,{type:L.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(_(13))})}function ze(e){const t=Object.keys(e),r={};for(let i=0;i<t.length;i++){const c=t[i];typeof e[c]=="function"&&(r[c]=e[c])}const n=Object.keys(r);let o;try{Me(r)}catch(i){o=i}return function(i={},c){if(o)throw o;let u=!1;const s={};for(let f=0;f<n.length;f++){const a=n[f],d=r[a],y=i[a],m=d(y,c);if(typeof m>"u")throw c&&c.type,new Error(_(14));s[a]=m,u=u||m!==y}return u=u||n.length!==Object.keys(i).length,u?s:i}}function B(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function xe(...e){return t=>(r,n)=>{const o=t(r,n);let i=()=>{throw new Error(_(15))};const c={getState:o.getState,dispatch:(s,...f)=>i(s,...f)},u=e.map(s=>s(c));return i=B(...u)(o.dispatch),{...o,dispatch:i}}}function De(e){return ne(e)&&"type"in e&&typeof e.type=="string"}var we=Symbol.for("immer-nothing"),se=Symbol.for("immer-draftable"),v=Symbol.for("immer-state");function P(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var k=Object.getPrototypeOf;function R(e){return!!e&&!!e[v]}function C(e){var t;return e?be(e)||Array.isArray(e)||!!e[se]||!!((t=e.constructor)!=null&&t[se])||q(e)||H(e):!1}var Ie=Object.prototype.constructor.toString();function be(e){if(!e||typeof e!="object")return!1;const t=k(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===Ie}function K(e,t){U(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function U(e){const t=e[v];return t?t.type_:Array.isArray(e)?1:q(e)?2:H(e)?3:0}function J(e,t){return U(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function ge(e,t,r){const n=U(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Fe(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function q(e){return e instanceof Map}function H(e){return e instanceof Set}function A(e){return e.copy_||e.base_}function Y(e,t){if(q(e))return new Map(e);if(H(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=be(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[v];let o=Reflect.ownKeys(n);for(let i=0;i<o.length;i++){const c=o[i],u=n[c];u.writable===!1&&(u.writable=!0,u.configurable=!0),(u.get||u.set)&&(n[c]={configurable:!0,writable:!0,enumerable:u.enumerable,value:e[c]})}return Object.create(k(e),n)}else{const n=k(e);if(n!==null&&r)return{...e};const o=Object.create(n);return Object.assign(o,e)}}function oe(e,t=!1){return X(e)||R(e)||!C(e)||(U(e)>1&&(e.set=e.add=e.clear=e.delete=Le),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>oe(n,!0))),e}function Le(){P(2)}function X(e){return Object.isFrozen(e)}var Be={};function T(e){const t=Be[e];return t||P(0,e),t}var x;function ve(){return x}function Ke(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function ae(e,t){t&&(T("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Z(e){ee(e),e.drafts_.forEach($e),e.drafts_=null}function ee(e){e===x&&(x=e.parent_)}function fe(e){return x=Ke(x,e)}function $e(e){const t=e[v];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function le(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[v].modified_&&(Z(t),P(4)),C(e)&&(e=$(t,e),t.parent_||W(t,e)),t.patches_&&T("Patches").generateReplacementPatches_(r[v].base_,e,t.patches_,t.inversePatches_)):e=$(t,r,[]),Z(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==we?e:void 0}function $(e,t,r){if(X(t))return t;const n=t[v];if(!n)return K(t,(o,i)=>de(e,n,t,o,i,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return W(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const o=n.copy_;let i=o,c=!1;n.type_===3&&(i=new Set(o),o.clear(),c=!0),K(i,(u,s)=>de(e,n,o,u,s,r,c)),W(e,o,!1),r&&e.patches_&&T("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function de(e,t,r,n,o,i,c){if(R(o)){const u=i&&t&&t.type_!==3&&!J(t.assigned_,n)?i.concat(n):void 0,s=$(e,o,u);if(ge(r,n,s),R(s))e.canAutoFreeze_=!1;else return}else c&&r.add(o);if(C(o)&&!X(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;$(e,o),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&W(e,o)}}function W(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&oe(t,r)}function We(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:ve(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=ie;r&&(o=[n],i=D);const{revoke:c,proxy:u}=Proxy.revocable(o,i);return n.draft_=u,n.revoke_=c,u}var ie={get(e,t){if(t===v)return e;const r=A(e);if(!J(r,t))return Ue(e,r,t);const n=r[t];return e.finalized_||!C(n)?n:n===Q(e.base_,t)?(G(e),e.copy_[t]=re(n,e)):n},has(e,t){return t in A(e)},ownKeys(e){return Reflect.ownKeys(A(e))},set(e,t,r){const n=Oe(A(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const o=Q(A(e),t),i=o==null?void 0:o[v];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(Fe(r,o)&&(r!==void 0||J(e.base_,t)))return!0;G(e),te(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Q(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,G(e),te(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=A(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){P(11)},getPrototypeOf(e){return k(e.base_)},setPrototypeOf(){P(12)}},D={};K(ie,(e,t)=>{D[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});D.deleteProperty=function(e,t){return D.set.call(this,e,t,void 0)};D.set=function(e,t,r){return ie.set.call(this,e[0],t,r,e[0])};function Q(e,t){const r=e[v];return(r?A(r):e)[t]}function Ue(e,t,r){var n;const o=Oe(t,r);return o?"value"in o?o.value:(n=o.get)==null?void 0:n.call(e.draft_):void 0}function Oe(e,t){if(!(t in e))return;let r=k(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=k(r)}}function te(e){e.modified_||(e.modified_=!0,e.parent_&&te(e.parent_))}function G(e){e.copy_||(e.copy_=Y(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var qe=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const i=r;r=t;const c=this;return function(u=i,...s){return c.produce(u,f=>r.call(this,f,...s))}}typeof r!="function"&&P(6),n!==void 0&&typeof n!="function"&&P(7);let o;if(C(t)){const i=fe(this),c=re(t,void 0);let u=!0;try{o=r(c),u=!1}finally{u?Z(i):ee(i)}return ae(i,n),le(o,i)}else if(!t||typeof t!="object"){if(o=r(t),o===void 0&&(o=t),o===we&&(o=void 0),this.autoFreeze_&&oe(o,!0),n){const i=[],c=[];T("Patches").generateReplacementPatches_(t,o,i,c),n(i,c)}return o}else P(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(i,...c)=>this.produceWithPatches(i,u=>t(u,...c));let n,o;return[this.produce(t,r,(i,c)=>{n=i,o=c}),n,o]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){C(e)||P(8),R(e)&&(e=He(e));const t=fe(this),r=re(e,void 0);return r[v].isManual_=!0,ee(t),r}finishDraft(e,t){const r=e&&e[v];(!r||!r.isManual_)&&P(9);const{scope_:n}=r;return ae(n,t),le(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const o=t[r];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}r>-1&&(t=t.slice(r+1));const n=T("Patches").applyPatches_;return R(e)?n(e,t):this.produce(e,o=>n(o,t))}};function re(e,t){const r=q(e)?T("MapSet").proxyMap_(e,t):H(e)?T("MapSet").proxySet_(e,t):We(e,t);return(t?t.scope_:ve()).drafts_.push(r),r}function He(e){return R(e)||P(10,e),Pe(e)}function Pe(e){if(!C(e)||X(e))return e;const t=e[v];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=Y(e,t.scope_.immer_.useStrictShallowCopy_)}else r=Y(e,!0);return K(r,(n,o)=>{ge(r,n,Pe(o))}),t&&(t.finalized_=!1),r}var O=new qe,Se=O.produce;O.produceWithPatches.bind(O);O.setAutoFreeze.bind(O);O.setUseStrictShallowCopy.bind(O);O.applyPatches.bind(O);O.createDraft.bind(O);O.finishDraft.bind(O);function Ee(e){return({dispatch:t,getState:r})=>n=>o=>typeof o=="function"?o(t,r,e):n(o)}var Xe=Ee(),Ve=Ee,Qe=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?B:B.apply(null,arguments)};function pe(e,t){function r(...n){if(t){let o=t(...n);if(!o)throw new Error(E(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>De(n)&&n.type===e,r}var Ce=class z extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,z.prototype)}static get[Symbol.species](){return z}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new z(...t[0].concat(this)):new z(...t.concat(this))}};function ye(e){return C(e)?Se(e,()=>{}):e}function he(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}function Ge(e){return typeof e=="boolean"}var Je=()=>function(e){const{thunk:t=!0,immutableCheck:r=!0,serializableCheck:n=!0,actionCreatorCheck:o=!0}=e??{};let i=new Ce;return t&&(Ge(t)?i.push(Xe):i.push(Ve(t.extraArgument))),i},Ye="RTK_autoBatch",_e=e=>t=>{setTimeout(t,e)},Ze=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let o=!0,i=!1,c=!1;const u=new Set,s=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:_e(10):e.type==="callback"?e.queueNotification:_e(e.timeout),f=()=>{c=!1,i&&(i=!1,u.forEach(a=>a()))};return Object.assign({},n,{subscribe(a){const d=()=>o&&a(),y=n.subscribe(d);return u.add(a),()=>{y(),u.delete(a)}},dispatch(a){var d;try{return o=!((d=a==null?void 0:a.meta)!=null&&d[Ye]),i=!o,i&&(c||(c=!0,s(f))),n.dispatch(a)}finally{o=!0}}})},et=e=>function(t){const{autoBatch:r=!0}=t??{};let n=new Ce(e);return r&&n.push(Ze(typeof r=="object"?r:void 0)),n};function tt(e){const t=Je(),{reducer:r=void 0,middleware:n,devTools:o=!0,preloadedState:i=void 0,enhancers:c=void 0}=e||{};let u;if(typeof r=="function")u=r;else if(ne(r))u=ze(r);else throw new Error(E(1));let s;typeof n=="function"?s=n(t):s=t();let f=B;o&&(f=Qe({trace:!1,...typeof o=="object"&&o}));const a=xe(...s),d=et(a);let y=typeof c=="function"?c(d):d();const m=f(...y);return me(u,i,m)}function je(e){const t={},r=[];let n;const o={addCase(i,c){const u=typeof i=="string"?i:i.type;if(!u)throw new Error(E(28));if(u in t)throw new Error(E(29));return t[u]=c,o},addMatcher(i,c){return r.push({matcher:i,reducer:c}),o},addDefaultCase(i){return n=i,o}};return e(o),[t,r,n]}function rt(e){return typeof e=="function"}function nt(e,t){let[r,n,o]=je(t),i;if(rt(e))i=()=>ye(e());else{const u=ye(e);i=()=>u}function c(u=i(),s){let f=[r[s.type],...n.filter(({matcher:a})=>a(s)).map(({reducer:a})=>a)];return f.filter(a=>!!a).length===0&&(f=[o]),f.reduce((a,d)=>{if(d)if(R(a)){const y=d(a,s);return y===void 0?a:y}else{if(C(a))return Se(a,y=>d(y,s));{const y=d(a,s);if(y===void 0){if(a===null)return a;throw Error("A case reducer on a non-draftable value must not return undefined")}return y}}return a},u)}return c.getInitialState=i,c}var ot=Symbol.for("rtk-slice-createasyncthunk");function it(e,t){return`${e}/${t}`}function ct({creators:e}={}){var t;const r=(t=e==null?void 0:e.asyncThunk)==null?void 0:t[ot];return function(n){const{name:o,reducerPath:i=o}=n;if(!o)throw new Error(E(11));const c=(typeof n.reducers=="function"?n.reducers(at()):n.reducers)||{},u=Object.keys(c),s={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},f={addCase(l,p){const w=typeof l=="string"?l:l.type;if(!w)throw new Error(E(12));if(w in s.sliceCaseReducersByType)throw new Error(E(13));return s.sliceCaseReducersByType[w]=p,f},addMatcher(l,p){return s.sliceMatchers.push({matcher:l,reducer:p}),f},exposeAction(l,p){return s.actionCreators[l]=p,f},exposeCaseReducer(l,p){return s.sliceCaseReducersByName[l]=p,f}};u.forEach(l=>{const p=c[l],w={reducerName:l,type:it(o,l),createNotation:typeof n.reducers=="function"};lt(p)?pt(w,p,f,r):ft(w,p,f)});function a(){const[l={},p=[],w=void 0]=typeof n.extraReducers=="function"?je(n.extraReducers):[n.extraReducers],N={...l,...s.sliceCaseReducersByType};return nt(n.initialState,S=>{for(let b in N)S.addCase(b,N[b]);for(let b of s.sliceMatchers)S.addMatcher(b.matcher,b.reducer);for(let b of p)S.addMatcher(b.matcher,b.reducer);w&&S.addDefaultCase(w)})}const d=l=>l,y=new Map;let m;function I(l,p){return m||(m=a()),m(l,p)}function h(){return m||(m=a()),m.getInitialState()}function g(l,p=!1){function w(S){let b=S[l];return typeof b>"u"&&p&&(b=h()),b}function N(S=d){const b=he(y,p,()=>new WeakMap);return he(b,S,()=>{const ce={};for(const[Ae,Re]of Object.entries(n.selectors??{}))ce[Ae]=ut(Re,S,h,p);return ce})}return{reducerPath:l,getSelectors:N,get selectors(){return N(w)},selectSlice:w}}const j={name:o,reducer:I,actions:s.actionCreators,caseReducers:s.sliceCaseReducersByName,getInitialState:h,...g(i),injectInto(l,{reducerPath:p,...w}={}){const N=p??i;return l.inject({reducerPath:N,reducer:I},w),{...j,...g(N,!0)}}};return j}}function ut(e,t,r,n){function o(i,...c){let u=t(i);return typeof u>"u"&&n&&(u=r()),e(u,...c)}return o.unwrapped=e,o}var st=ct();function at(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function ft({type:e,reducerName:t,createNotation:r},n,o){let i,c;if("reducer"in n){if(r&&!dt(n))throw new Error(E(17));i=n.reducer,c=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,c?pe(e,c):pe(e))}function lt(e){return e._reducerDefinitionType==="asyncThunk"}function dt(e){return e._reducerDefinitionType==="reducerWithPrepare"}function pt({type:e,reducerName:t},r,n,o){if(!o)throw new Error(E(18));const{payloadCreator:i,fulfilled:c,pending:u,rejected:s,settled:f,options:a}=r,d=o(e,i,a);n.exposeAction(t,d),c&&n.addCase(d.fulfilled,c),u&&n.addCase(d.pending,u),s&&n.addCase(d.rejected,s),f&&n.addMatcher(d.settled,f),n.exposeCaseReducer(t,{fulfilled:c||F,pending:u||F,rejected:s||F,settled:f||F})}function F(){}function E(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Ne=st({name:"yeeHonk",initialState:{isPaused:!1},reducers:{togglePause:e=>{e.isPaused=!e.isPaused}}}),{togglePause:yt}=Ne.actions,ht=Ne.reducer,M=tt({reducer:{yeeHonk:ht}});jQuery(document).ready(function(e){var t=e(document).width(),r=e("#animate");function n(){M.getState().yeeHonk.isPaused||r.animate({left:t},500,function(){setTimeout(o,50)})}function o(){M.getState().yeeHonk.isPaused||r.animate({left:0},500,function(){setTimeout(n,50)})}setTimeout(n,50),M.subscribe(()=>{const{isPaused:i}=M.getState().yeeHonk;i?r.stop():n()}),e(document).click(function(){M.dispatch(yt())})});
