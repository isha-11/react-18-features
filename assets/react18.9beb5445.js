import{r as o,j as r,F as c,a as e,s,e as u,c as w,t as b,G as v,H as P,R as j,d as h,f as m}from"./theme.2e2504fc.js";import{c as A}from"./client.4f63c254.js";import{B as y,T as N}from"./styled.88b5f3d9.js";const G=()=>{const[t,a]=o.exports.useState(""),[n,i]=o.exports.useTransition(),[d,l]=o.exports.useState("");return r(c,{as:"section",column:!0,gap:"1rem",padding:"2rem 0",children:[e(Z,{type:"text",value:t,onChange:g=>{a(g.target.value),i(()=>l(g.target.value))}}),r("div",{children:[n&&r("div",{children:[e("br",{}),e("span",{children:"Loading..."})]}),!n&&e(f,{query:d})]})]})},f=({query:t})=>{if(t==="")return e("div",{});{const a=Array.from({length:5e3},(n,i)=>r(B,{children:[e("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",alt:"logo",height:200,width:200}),e(M,{children:t})]},i));return e(c,{center:!0,column:!0,gap:"1rem",children:a})}},Z=s.input.withConfig({displayName:"StyledInput"})(["padding:0.5rem;"]),B=s(c).attrs({center:!0,column:!0,padding:"1rem",width:"100%"}).withConfig({displayName:"Card"})(["background-color:",";color:",";"],t=>t.theme.color.secondary,t=>t.theme.color.primary),M=s.div.withConfig({displayName:"StyledQuery"})(["word-wrap:break-word;white-space:pre-wrap;word-break:break-word;"]),R=()=>{const[t,a]=o.exports.useState(!0),[n,i]=o.exports.useState(0),[d,l]=o.exports.useState(()=>new Date().toLocaleString()),[I,g]=o.exports.useState([]),p=()=>{a(!t),i(n+1),l(new Date().toLocaleString())},C=()=>{setTimeout(()=>{a(!t),i(n+1),l(new Date().toLocaleString())},0)},S=()=>{u.exports.flushSync(()=>a(!t)),u.exports.flushSync(()=>i(n+1)),u.exports.flushSync(()=>l(new Date().toLocaleString()))};return o.exports.useEffect(()=>{g(x=>[...x,r("tr",{children:[e("td",{children:t.toString()}),e("td",{children:n}),e("td",{children:d})]},`${d}_${n}_${t}`)])},[t,n,d]),r(c,{column:!0,gap:"1rem",children:[r(c,{gap:"1rem",children:[e(y,{onClick:p,children:"setState in Event handler"}),e(y,{onClick:C,children:"setState in setTimeout"}),e(y,{onClick:S,children:"setState in flushSync"})]}),r(N,{cellSpacing:0,children:[e("thead",{children:r("tr",{children:[e("th",{children:"Boolean"}),e("th",{children:"Number"}),e("th",{children:"Date"})]})}),e("tbody",{children:I})]})]})},k=()=>{const[t,a]=o.exports.useState(""),n=o.exports.useDeferredValue(t),i=t!==n;return r(c,{as:"section",column:!0,gap:"1rem",padding:"2rem 0",children:[e(E,{type:"text",value:t,onChange:l=>{a(l.target.value)}}),r("div",{children:[i&&r("div",{children:[e("br",{}),e("span",{children:"Loading..."})]}),!i&&e(D,{query:n})]})]})},D=({query:t})=>{if(t==="")return e("div",{});{const a=Array.from({length:5e3},(n,i)=>r(H,{children:[e("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",alt:"logo",height:200,width:200}),e(L,{children:t})]},i));return e(c,{center:!0,column:!0,gap:"1rem",children:a})}},E=s.input.withConfig({displayName:"StyledInput"})(["padding:0.5rem;"]),H=s(c).attrs({center:!0,column:!0,padding:"1rem",width:"100%"}).withConfig({displayName:"Card"})(["background-color:",";color:",";"],t=>t.theme.color.secondary,t=>t.theme.color.primary),L=s.div.withConfig({displayName:"StyledQuery"})(["word-wrap:break-word;white-space:pre-wrap;word-break:break-word;"]),T=()=>r(w,{theme:b,children:[e(v,{}),r("main",{className:"App",children:[e("h2",{children:"React 18"}),e(P,{children:r(j,{children:[e(h,{path:m("transition"),element:e(G,{})}),e(h,{path:m("batching"),element:e(R,{})}),e(h,{path:m("deferredValue"),element:e(k,{})})]})})]})]}),z=document.getElementById("root"),W=A(z);W.render(e(T,{}));