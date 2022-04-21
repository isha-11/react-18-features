import{r as u,j as b,a as m,s as H,F as re,G as ae}from"./jsx-runtime.8eeb6005.js";import{c as ie}from"./client.149ace9b.js";import{F as N}from"./react-styled-flex.esm.3a6005d6.js";const z=m("div",{}),oe=()=>{const[e,n]=u.exports.useTransition(),[t,r]=u.exports.useState(""),[a,i]=u.exports.useState(z),o=s=>{r(s.target.value)};return u.exports.useEffect(()=>{if(t==="")i(z);else{const s=Array.from({length:5e3},(v,g)=>b(se,{children:[m("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",alt:"logo",height:200,width:200}),m(ce,{children:t})]},g));n(()=>{i(m(N,{center:!0,column:!0,gap:"1rem",children:s}))})}},[t]),b(N,{as:"section",column:!0,gap:"1rem",padding:"2rem 0",children:[m(le,{type:"text",value:t,onChange:o}),b("div",{children:[e&&b("div",{children:[m("br",{}),m("span",{children:"Loading..."})]}),!e&&a]})]})},le=H.input.withConfig({displayName:"StyledInput"})(["padding:0.5rem;"]),se=H(N).attrs({center:!0,column:!0,padding:"1rem",width:"100%"}).withConfig({displayName:"Card"})(["background-color:#20232a;color:#61dafb;"]),ce=H.div.withConfig({displayName:"StyledQuery"})(["word-wrap:break-word;white-space:pre-wrap;word-break:break-word;"]);function A(){return A=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},A.apply(this,arguments)}var S;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(S||(S={}));var Y=function(e){return e},D="beforeunload",ue="hashchange",he="popstate";function pe(e){e===void 0&&(e={});var n=e,t=n.window,r=t===void 0?document.defaultView:t,a=r.history;function i(){var l=L(r.location.hash.substr(1)),c=l.pathname,p=c===void 0?"/":c,y=l.search,P=y===void 0?"":y,C=l.hash,j=C===void 0?"":C,I=a.state||{};return[I.idx,Y({pathname:p,search:P,hash:j,state:I.usr||null,key:I.key||"default"})]}var o=null;function s(){if(o)x.call(o),o=null;else{var l=S.Pop,c=i(),p=c[0],y=c[1];if(x.length){if(p!=null){var P=h-p;P&&(o={action:l,location:y,retry:function(){B(P*-1)}},B(P))}}else M(l)}}r.addEventListener(he,s),r.addEventListener(ue,function(){var l=i(),c=l[1];$(c)!==$(f)&&s()});var v=S.Pop,g=i(),h=g[0],f=g[1],d=K(),x=K();h==null&&(h=0,a.replaceState(A({},a.state,{idx:h}),""));function k(){var l=document.querySelector("base"),c="";if(l&&l.getAttribute("href")){var p=r.location.href,y=p.indexOf("#");c=y===-1?p:p.slice(0,y)}return c}function E(l){return k()+"#"+(typeof l=="string"?l:$(l))}function O(l,c){return c===void 0&&(c=null),Y(A({pathname:f.pathname,hash:"",search:""},typeof l=="string"?L(l):l,{state:c,key:fe()}))}function W(l,c){return[{usr:l.state,key:l.key,idx:c},E(l)]}function _(l,c,p){return!x.length||(x.call({action:l,location:c,retry:p}),!1)}function M(l){v=l;var c=i();h=c[0],f=c[1],d.call({action:v,location:f})}function U(l,c){var p=S.Push,y=O(l,c);function P(){U(l,c)}if(_(p,y,P)){var C=W(y,h+1),j=C[0],I=C[1];try{a.pushState(j,"",I)}catch{r.location.assign(I)}M(p)}}function V(l,c){var p=S.Replace,y=O(l,c);function P(){V(l,c)}if(_(p,y,P)){var C=W(y,h),j=C[0],I=C[1];a.replaceState(j,"",I),M(p)}}function B(l){a.go(l)}var ne={get action(){return v},get location(){return f},createHref:E,push:U,replace:V,go:B,back:function(){B(-1)},forward:function(){B(1)},listen:function(c){return d.push(c)},block:function(c){var p=x.push(c);return x.length===1&&r.addEventListener(D,J),function(){p(),x.length||r.removeEventListener(D,J)}}};return ne}function J(e){e.preventDefault(),e.returnValue=""}function K(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter(function(r){return r!==t})}},call:function(t){e.forEach(function(r){return r&&r(t)})}}}function fe(){return Math.random().toString(36).substr(2,8)}function $(e){var n=e.pathname,t=n===void 0?"/":n,r=e.search,a=r===void 0?"":r,i=e.hash,o=i===void 0?"":i;return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function L(e){var n={};if(e){var t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));var r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const de=u.exports.createContext(null),Z=u.exports.createContext(null),X=u.exports.createContext({outlet:null,matches:[]});function w(e,n){if(!e)throw new Error(n)}function me(e,n,t){t===void 0&&(t="/");let r=typeof n=="string"?L(n):n,a=ee(r.pathname||"/",t);if(a==null)return null;let i=q(e);ve(i);let o=null;for(let s=0;o==null&&s<i.length;++s)o=be(i[s],a);return o}function q(e,n,t,r){return n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r=""),e.forEach((a,i)=>{let o={relativePath:a.path||"",caseSensitive:a.caseSensitive===!0,childrenIndex:i,route:a};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||w(!1),o.relativePath=o.relativePath.slice(r.length));let s=R([r,o.relativePath]),v=t.concat(o);a.children&&a.children.length>0&&(a.index===!0&&w(!1),q(a.children,n,v,s)),!(a.path==null&&!a.index)&&n.push({path:s,score:we(s,a.index),routesMeta:v})}),n}function ve(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Se(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const ge=/^:\w+$/,ye=3,xe=2,Pe=1,Ce=10,Ie=-2,Q=e=>e==="*";function we(e,n){let t=e.split("/"),r=t.length;return t.some(Q)&&(r+=Ie),n&&(r+=xe),t.filter(a=>!Q(a)).reduce((a,i)=>a+(ge.test(i)?ye:i===""?Pe:Ce),r)}function Se(e,n){return e.length===n.length&&e.slice(0,-1).every((r,a)=>r===n[a])?e[e.length-1]-n[n.length-1]:0}function be(e,n){let{routesMeta:t}=e,r={},a="/",i=[];for(let o=0;o<t.length;++o){let s=t[o],v=o===t.length-1,g=a==="/"?n:n.slice(a.length)||"/",h=Re({path:s.relativePath,caseSensitive:s.caseSensitive,end:v},g);if(!h)return null;Object.assign(r,h.params);let f=s.route;i.push({params:r,pathname:R([a,h.pathname]),pathnameBase:te(R([a,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(a=R([a,h.pathnameBase]))}return i}function Re(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Ee(e.path,e.caseSensitive,e.end),a=n.match(t);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((g,h,f)=>{if(h==="*"){let d=s[f]||"";o=i.slice(0,i.length-d.length).replace(/(.)\/+$/,"$1")}return g[h]=Be(s[f]||""),g},{}),pathname:i,pathnameBase:o,pattern:e}}function Ee(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,s)=>(r.push(s),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a+=t?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(a,n?void 0:"i"),r]}function Be(e,n){try{return decodeURIComponent(e)}catch{return e}}function ee(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=e.charAt(n.length);return t&&t!=="/"?null:e.slice(n.length)||"/"}const R=e=>e.join("/").replace(/\/\/+/g,"/"),te=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function F(){return u.exports.useContext(Z)!=null}function je(){return F()||w(!1),u.exports.useContext(Z).location}function Le(e,n){F()||w(!1);let{matches:t}=u.exports.useContext(X),r=t[t.length-1],a=r?r.params:{};r&&r.pathname;let i=r?r.pathnameBase:"/";r&&r.route;let o=je(),s;if(n){var v;let d=typeof n=="string"?L(n):n;i==="/"||((v=d.pathname)==null?void 0:v.startsWith(i))||w(!1),s=d}else s=o;let g=s.pathname||"/",h=i==="/"?g:g.slice(i.length)||"/",f=me(e,{pathname:h});return ke(f&&f.map(d=>Object.assign({},d,{params:Object.assign({},a,d.params),pathname:R([i,d.pathname]),pathnameBase:d.pathnameBase==="/"?i:R([i,d.pathnameBase])})),t)}function ke(e,n){return n===void 0&&(n=[]),e==null?null:e.reduceRight((t,r,a)=>u.exports.createElement(X.Provider,{children:r.route.element!==void 0?r.route.element:t,value:{outlet:t,matches:n.concat(e.slice(0,a+1))}}),null)}function T(e){w(!1)}function Ae(e){let{basename:n="/",children:t=null,location:r,navigationType:a=S.Pop,navigator:i,static:o=!1}=e;F()&&w(!1);let s=te(n),v=u.exports.useMemo(()=>({basename:s,navigator:i,static:o}),[s,i,o]);typeof r=="string"&&(r=L(r));let{pathname:g="/",search:h="",hash:f="",state:d=null,key:x="default"}=r,k=u.exports.useMemo(()=>{let E=ee(g,s);return E==null?null:{pathname:E,search:h,hash:f,state:d,key:x}},[s,g,h,f,d,x]);return k==null?null:u.exports.createElement(de.Provider,{value:v},u.exports.createElement(Z.Provider,{children:t,value:{location:k,navigationType:a}}))}function Me(e){let{children:n,location:t}=e;return Le(G(n),t)}function G(e){let n=[];return u.exports.Children.forEach(e,t=>{if(!u.exports.isValidElement(t))return;if(t.type===u.exports.Fragment){n.push.apply(n,G(t.props.children));return}t.type!==T&&w(!1);let r={caseSensitive:t.props.caseSensitive,element:t.props.element,index:t.props.index,path:t.props.path};t.props.children&&(r.children=G(t.props.children)),n.push(r)}),n}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $e(e){let{basename:n,children:t,window:r}=e,a=u.exports.useRef();a.current==null&&(a.current=pe({window:r}));let i=a.current,[o,s]=u.exports.useState({action:i.action,location:i.location});return u.exports.useLayoutEffect(()=>i.listen(s),[i]),u.exports.createElement(Ae,{basename:n,children:t,location:o.location,navigationType:o.action,navigator:i})}const Ne=()=>(console.log("react18 app"),b(re,{children:[m(ae,{}),m("main",{className:"App",children:m($e,{children:b(Me,{children:[m(T,{path:"/transition",element:m(oe,{})}),m(T,{path:"/new",element:m("div",{children:"new"})})]})})})]})),Te=document.getElementById("root"),Ge=ie(Te);Ge.render(m(u.exports.StrictMode,{children:m(Ne,{})}));
