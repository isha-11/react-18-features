import{r as o,j as n,F as i,a as e,e as u,c as T,t as B,G as L,H as k,R as w,d as h,f as m}from"./theme.2e2504fc.js";import{c as Q}from"./client.4f63c254.js";import{S,C as y,R as f,a as x,u as E,B as p,T as A}from"./useRenderCount.284fb8d9.js";const F=()=>{const[t,a]=o.exports.useState(""),[r,s]=o.exports.useTransition(),[c,l]=o.exports.useState("");return n(i,{as:"section",column:!0,gap:"1rem",padding:"2rem 0",children:[e(S,{type:"text",value:t,onChange:d=>{a(d.target.value),s(()=>l(d.target.value))}}),n("div",{children:[r&&n("div",{children:[e("br",{}),e("span",{children:"Loading..."})]}),!r&&e(_,{query:c})]})]})},_=({query:t})=>{if(t==="")return e("div",{});{const a=Array.from({length:5e3},(r,s)=>n(y,{children:[e(f,{}),e(x,{children:t})]},s));return e(i,{center:!0,column:!0,gap:"1rem",children:a})}},$=()=>{const[t,a]=o.exports.useState(!0),[r,s]=o.exports.useState(0),[c,l]=o.exports.useState(()=>new Date().toLocaleString()),[g,d]=o.exports.useState([]),C=E([t,r,c]),R=()=>{a(!t),s(r+1),l(new Date().toLocaleString())},v=()=>{setTimeout(()=>{a(!t),s(r+1),l(new Date().toLocaleString())},0)},b=()=>{u.exports.flushSync(()=>a(!t)),u.exports.flushSync(()=>s(r+1)),u.exports.flushSync(()=>l(new Date().toLocaleString()))};return o.exports.useEffect(()=>{d(D=>[...D,n("tr",{children:[e("td",{children:C}),e("td",{children:t.toString()}),e("td",{children:r}),e("td",{children:c})]},`${c}_${r}_${t}`)])},[t,r,c]),n(i,{column:!0,gap:"1rem",children:[n(i,{gap:"1rem",children:[e(p,{onClick:R,children:"setState in Event handler"}),e(p,{onClick:v,children:"setState in setTimeout"}),e(p,{onClick:b,children:"setState in flushSync"})]}),n(A,{cellSpacing:0,children:[e("thead",{children:n("tr",{children:[e("th",{children:"Render Count"}),e("th",{children:"Boolean"}),e("th",{children:"Number"}),e("th",{children:"Date"})]})}),e("tbody",{children:g})]})]})},j=()=>{const[t,a]=o.exports.useState(""),r=o.exports.useDeferredValue(t),s=t!==r;return n(i,{as:"section",column:!0,gap:"1rem",padding:"2rem 0",children:[e(S,{type:"text",value:t,onChange:l=>{a(l.target.value)}}),n("div",{children:[s&&n("div",{children:[e("br",{}),e("span",{children:"Loading..."})]}),!s&&e(N,{query:r})]})]})},N=({query:t})=>{if(t==="")return e("div",{});{const a=Array.from({length:5e3},(r,s)=>n(y,{children:[e(f,{}),e(x,{children:t})]},s));return e(i,{center:!0,column:!0,gap:"1rem",children:a})}},V=()=>n(T,{theme:B,children:[e(L,{}),n("main",{className:"App",children:[e("h2",{children:"React 18"}),e(k,{children:n(w,{children:[e(h,{path:m("transition"),element:e(F,{})}),e(h,{path:m("batching"),element:e($,{})}),e(h,{path:m("deferredValue"),element:e(j,{})})]})})]})]}),q=document.getElementById("root"),G=Q(q);G.render(e(V,{}));
