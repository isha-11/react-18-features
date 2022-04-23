import{r as o,j as n,F as i,a as e,e as u,c as D,t as T,G as B,H as L,R as k,d as h,f as m}from"./theme.2e2504fc.js";import{c as w}from"./client.4f63c254.js";import{S,C as y,R as f,a as x,B as p,T as Q}from"./styled.09e3fed5.js";const E=()=>{const[t,a]=o.exports.useState(""),[r,s]=o.exports.useTransition(),[l,c]=o.exports.useState("");return n(i,{as:"section",column:!0,gap:"1rem",padding:"2rem 0",children:[e(S,{type:"text",value:t,onChange:d=>{a(d.target.value),s(()=>c(d.target.value))}}),n("div",{children:[r&&n("div",{children:[e("br",{}),e("span",{children:"Loading..."})]}),!r&&e(A,{query:l})]})]})},A=({query:t})=>{if(t==="")return e("div",{});{const a=Array.from({length:5e3},(r,s)=>n(y,{children:[e(f,{}),e(x,{children:t})]},s));return e(i,{center:!0,column:!0,gap:"1rem",children:a})}},F=()=>{const[t,a]=o.exports.useState(!0),[r,s]=o.exports.useState(0),[l,c]=o.exports.useState(()=>new Date().toLocaleString()),[g,d]=o.exports.useState([]),C=()=>{a(!t),s(r+1),c(new Date().toLocaleString())},v=()=>{setTimeout(()=>{a(!t),s(r+1),c(new Date().toLocaleString())},0)},R=()=>{u.exports.flushSync(()=>a(!t)),u.exports.flushSync(()=>s(r+1)),u.exports.flushSync(()=>c(new Date().toLocaleString()))};return o.exports.useEffect(()=>{d(b=>[...b,n("tr",{children:[e("td",{children:t.toString()}),e("td",{children:r}),e("td",{children:l})]},`${l}_${r}_${t}`)])},[t,r,l]),n(i,{column:!0,gap:"1rem",children:[n(i,{gap:"1rem",children:[e(p,{onClick:C,children:"setState in Event handler"}),e(p,{onClick:v,children:"setState in setTimeout"}),e(p,{onClick:R,children:"setState in flushSync"})]}),n(Q,{cellSpacing:0,children:[e("thead",{children:n("tr",{children:[e("th",{children:"Boolean"}),e("th",{children:"Number"}),e("th",{children:"Date"})]})}),e("tbody",{children:g})]})]})},_=()=>{const[t,a]=o.exports.useState(""),r=o.exports.useDeferredValue(t),s=t!==r;return n(i,{as:"section",column:!0,gap:"1rem",padding:"2rem 0",children:[e(S,{type:"text",value:t,onChange:c=>{a(c.target.value)}}),n("div",{children:[s&&n("div",{children:[e("br",{}),e("span",{children:"Loading..."})]}),!s&&e($,{query:r})]})]})},$=({query:t})=>{if(t==="")return e("div",{});{const a=Array.from({length:5e3},(r,s)=>n(y,{children:[e(f,{}),e(x,{children:t})]},s));return e(i,{center:!0,column:!0,gap:"1rem",children:a})}},j=()=>n(D,{theme:T,children:[e(B,{}),n("main",{className:"App",children:[e("h2",{children:"React 18"}),e(L,{children:n(k,{children:[e(h,{path:m("transition"),element:e(E,{})}),e(h,{path:m("batching"),element:e(F,{})}),e(h,{path:m("deferredValue"),element:e(_,{})})]})})]})]}),N=document.getElementById("root"),V=w(N);V.render(e(j,{}));
