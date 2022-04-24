import{r as a,j as r,F as i,a as e,e as u,c as T,t as w,G as B,H as Q,R as k,d as h,f as m}from"./theme.5b386eb5.js";import{c as A}from"./client.4d2cc0b5.js";import{S,C as y,R as x,a as f,u as E,B as g,T as F}from"./useRenderCount.a7364e20.js";const N=()=>{const[t,s]=a.exports.useState(""),[n,o]=a.exports.useState(""),[c,l]=a.exports.useTransition();return r(i,{as:"section",column:!0,gap:"1rem",padding:"2rem 0",children:[e(S,{type:"text",value:t,onChange:d=>{s(d.target.value),l(()=>o(d.target.value))}}),c?e("div",{children:"Loading..."}):e(_,{query:n})]})},_=({query:t})=>{if(t==="")return e("div",{});{const s=Array.from({length:5e3},(n,o)=>r(y,{children:[e(x,{}),e(f,{children:t})]},o));return e(i,{center:!0,column:!0,gap:"1rem",children:s})}},$=()=>{const[t,s]=a.exports.useState(!0),[n,o]=a.exports.useState(0),[c,l]=a.exports.useState(()=>Date.now()),[p,d]=a.exports.useState([]),C=E([t,n,c]),R=()=>{s(!t),o(n+1),l(Date.now())},v=()=>{setTimeout(()=>{s(!t),o(n+1),l(Date.now())},0)},D=()=>{u.exports.flushSync(()=>s(!t)),u.exports.flushSync(()=>o(n+1)),u.exports.flushSync(()=>l(Date.now()))};return a.exports.useEffect(()=>{d(b=>[...b,r("tr",{children:[e("td",{children:C}),e("td",{children:t.toString()}),e("td",{children:n}),e("td",{children:new Date(c).toISOString()})]},`${c}_${n}_${t}`)])},[t,n,c]),r(i,{column:!0,gap:"1rem",children:[r(i,{gap:"1rem",children:[e(g,{onClick:R,children:"setState in event handler"}),e(g,{onClick:v,children:"setState in setTimeout"}),e(g,{onClick:D,children:"setState in flushSync"})]}),r(F,{cellSpacing:0,children:[e("thead",{children:r("tr",{children:[e("th",{children:"Render Count"}),e("th",{children:"Boolean"}),e("th",{children:"Number"}),e("th",{children:"Date"})]})}),e("tbody",{children:p})]})]})},j=()=>{const[t,s]=a.exports.useState(""),n=a.exports.useDeferredValue(t);return r(i,{as:"section",column:!0,gap:"1rem",padding:"2rem 0",children:[e(S,{type:"text",value:t,onChange:l=>{s(l.target.value)}}),t!==n?e("div",{children:"Loading..."}):e(I,{query:n})]})},I=({query:t})=>{if(t==="")return e("div",{});{const s=Array.from({length:5e3},(n,o)=>r(y,{children:[e(x,{}),e(f,{children:t})]},o));return e(i,{center:!0,column:!0,gap:"1rem",children:s})}},L=()=>r(T,{theme:w,children:[e(B,{}),r("main",{className:"App",children:[e("h2",{children:"React 18"}),e(Q,{children:r(k,{children:[e(h,{path:m("transition"),element:e(N,{})}),e(h,{path:m("batching"),element:e($,{})}),e(h,{path:m("deferredValue"),element:e(j,{})})]})})]})]}),P=document.getElementById("root"),U=A(P);U.render(e(L,{}));
