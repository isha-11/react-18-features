import{j as a,B as n,a as t,F as d,m as l,s as o,L as c,u as m,b as h,g as p,c as g,d as u,t as x,G as f,H as b,R as y,e as r,r as F}from"./theme.e524a142.js";import{c as R}from"./client.c2dd3607.js";const w=()=>a(n,{className:"App",maxWidth:"60rem",margin:"auto",padding:"1.5rem",children:[t("h1",{children:"React 18 features"}),t(d,{gap:"1rem",column:!0,children:l(({route:e,title:s})=>t(B,{to:e,children:s},e))})]}),B=o(c).withConfig({displayName:"Feature"})(["display:block;background-color:",";color:",";text-decoration:none;padding:1rem;font-weight:bold;&:hover{background-color:",";}"],e=>e.theme.color.primary,e=>e.theme.color.secondary,e=>e.theme.color.primary15),k=()=>{const{demoPath:e}=m();return a(P,{children:[t(h,{}),e?t("h1",{children:p(`/${e}`)}):null,a(g,{box:!0,center:!0,flex:1,gap:"3rem",height:"100%","aria-label":"content",children:[t(i,{title:"React 17",src:`/react-18-features/pages/react-17.html#/${e}`}),t(i,{title:"React 18",src:`/react-18-features/pages/react-18.html#/${e}`})]})]})},P=o.div.withConfig({displayName:"Page"})(["display:grid;grid-template-rows:auto 1fr;height:100%;padding:",";padding-top:0;@media (max-width:64rem){height:200%;padding:",";padding-top:0;[aria-label='content']{flex-direction:column;}}"],e=>e.theme.padding.app.desktop,e=>e.theme.padding.app.mobile),i=o.iframe.withConfig({displayName:"Frame"})(["flex:1;height:100%;width:100%;border:none;box-shadow:1px 1px 1rem 1px ",";"],e=>e.theme.color.shadow),N=()=>a(u,{theme:x,children:[t(f,{}),t(b,{children:t(n,{as:"main",height:"100%",children:a(y,{children:[t(r,{path:"/",element:t(w,{})}),t(r,{path:"/:demoPath",element:t(k,{})})]})})})]}),j=document.getElementById("root"),C=R(j);C.render(t(F.exports.StrictMode,{children:t(N,{})}));
