import{r as l,j as s,F as o,a as e,c as b,t as D,G as B,H as T,R as w,d as i,f as d,h as F}from"./theme.78295ea3.js";import{S as h,C as p,R as g,a as f,u as Q,B as m,T as $,Q as k,q as I,b as A,L,I as _,F as j}from"./useFetch.11926eed.js";const E=()=>{const[t,r]=l.exports.useState("");return s(o,{as:"section",column:!0,gap:"1rem",padding:"2rem 0",children:[e(h,{type:"text",value:t,onChange:a=>{r(a.target.value)}}),e(N,{query:t})]})},N=({query:t})=>{if(t==="")return e("div",{});{const r=Array.from({length:5e3},(n,a)=>s(p,{children:[e(g,{}),e(f,{children:t})]},a));return e(o,{center:!0,column:!0,gap:"1rem",children:r})}},q=()=>{const[t,r]=l.exports.useState(!0),[n,a]=l.exports.useState(0),[c,u]=l.exports.useState(()=>Date.now()),[C,S]=l.exports.useState([]),x=Q([t,n,c]),y=()=>{r(!t),a(n+1),u(Date.now())},R=()=>{setTimeout(()=>{r(!t),a(n+1),u(Date.now())},0)};return l.exports.useEffect(()=>{S(v=>[...v,s("tr",{children:[e("td",{children:x}),e("td",{children:t.toString()}),e("td",{children:n}),e("td",{children:new Date(c).toISOString()})]},`${c}_${n}_${t}`)])},[t,n,c]),s(o,{column:!0,gap:"1rem",children:[s(o,{gap:"1rem",children:[e(m,{onClick:y,children:"setState in event handler"}),e(m,{onClick:R,children:"setState in setTimeout"})]}),s($,{cellSpacing:0,children:[e("thead",{children:s("tr",{children:[e("th",{children:"Render Count"}),e("th",{children:"Boolean"}),e("th",{children:"Number"}),e("th",{children:"Date"})]})}),e("tbody",{children:C})]})]})},G=()=>{const[t,r]=l.exports.useState("");return s(o,{as:"section",column:!0,gap:"1rem",padding:"2rem 0",children:[e(h,{type:"text",value:t,onChange:a=>{r(a.target.value)}}),e(H,{query:t})]})},H=({query:t})=>{if(t==="")return e("div",{});{const r=Array.from({length:5e3},(n,a)=>s(p,{children:[e(g,{}),e(f,{children:t})]},a));return e(o,{center:!0,column:!0,gap:"1rem",children:r})}},O=()=>{const[t,r]=l.exports.useState("");return e(k,{client:I,children:s(o,{as:"section",column:!0,gap:"1rem",padding:"2rem 0",children:[e(h,{type:"text",value:t,onChange:a=>{r(a.target.value)}}),e(l.exports.Suspense,{fallback:"Loading...",children:e(V,{query:t})})]})})},V=({query:t})=>{const r=A(t?`https://restcountries.com/v3.1/name/${t}`:"https://restcountries.com/v3.1/all");return e(L,{children:r.sort((n,a)=>n.name.official.localeCompare(a.name.official)).map(n=>s(_,{children:[e(j,{src:n.flags.png}),e("span",{children:n.name.official})]},n.name.official))})},M=()=>s(b,{theme:D,children:[e(B,{}),s("main",{className:"App",children:[e("h2",{children:"React 17"}),e(T,{children:s(w,{children:[e(i,{path:d("transition"),element:e(E,{})}),e(i,{path:d("batching"),element:e(q,{})}),e(i,{path:d("deferredValue"),element:e(G,{})}),e(i,{path:d("suspense"),element:e(O,{})})]})})]})]});F.render(e(M,{}),document.getElementById("root"));