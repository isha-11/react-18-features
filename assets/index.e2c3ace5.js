import{j as r,B as s,a as t,F as c,m,s as n,L as h,u as i,g as d,b as u,c as p,t as g,G as x,H as f,R as y,d as a,r as R}from"./theme.191fda07.js";import{c as b}from"./client.fc57aad8.js";const F=()=>r(s,{className:"App",maxWidth:"60rem",margin:"auto",children:[t("h1",{children:"React 18 features"}),t(c,{gap:"1rem",column:!0,children:m(({route:e,title:l})=>t(w,{to:e,children:l},e))})]}),w=n(h).withConfig({displayName:"Feature"})(["display:block;background-color:",";color:",";text-decoration:none;padding:1rem;font-weight:bold;&:hover{background-color:",";}"],e=>e.theme.color.primary,e=>e.theme.color.secondary,e=>e.theme.color.primary15),B=()=>{const{demoPath:e}=i();return r(c,{column:!0,height:"100%",padding:"0 3rem 3rem 3rem",children:[e?t("h1",{children:d(`/${e}`)}):null,r(u,{box:!0,center:!0,flex:1,gap:"3rem",height:"100%",children:[t(o,{title:"React 17",src:`/react-18-features/pages/react-17.html#/${e}`,height:"100%"}),t(o,{title:"React 18",src:`/react-18-features/pages/react-18.html#/${e}`,height:"100%"})]})]})},o=n.iframe.withConfig({displayName:"Frame"})(["flex:1;border:none;box-shadow:1px 1px 1rem 1px ",";"],e=>e.theme.color.shadow),k=()=>r(p,{theme:g,children:[t(x,{}),t(f,{children:t(s,{as:"main",height:"100%",children:r(y,{children:[t(a,{path:"/",element:t(F,{})}),t(a,{path:"/:demoPath",element:t(B,{})})]})})})]}),j=document.getElementById("root"),L=b(j);L.render(t(R.exports.StrictMode,{children:t(k,{})}));
