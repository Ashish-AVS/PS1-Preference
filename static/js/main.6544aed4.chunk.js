(this.webpackJsonpps1_pref=this.webpackJsonpps1_pref||[]).push([[0],{134:function(e,t,n){},180:function(e,t,n){},280:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(31),r=n.n(a),i=(n(180),n(6)),s=(n(134),n(286)),o=n(283),j=n(69),l=n(285),d=n(288),b=n(41),u=n(289),O=n(123),h=n(158),x=n.n(h),f=n(159),p=n(287),A=n(284),m=n(21);function g(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(["Notjing"]),o=Object(i.a)(s,2),j=o[0],l=o[1],b=[{title:"Name",dataIndex:"name",key:"name",render:function(t){return Object(m.jsx)("span",{onClick:function(){return function(t){r(!0),e.data.map((function(e){e.name===t&&l(e.projects)})),console.log(e)}(t)},children:t})}},{title:"Industry",dataIndex:"industry",key:"industry"},{title:"location",dataIndex:"location",key:"location"},{title:"Branches",dataIndex:"branches",key:"branches",render:function(e){return Object(m.jsx)(m.Fragment,{children:e.map((function(e){var t="pink";return"A7"===e&&(t="geekblue"),"A3"===e&&(t="gold"),"A8"===e&&(t="lime"),"AA"===e&&(t="green"),"Any"===e&&(t="cyan"),"A4"===e&&(t="orange"),"A1"===e&&(t="red"),"A2"===e&&(t="magenta"),Object(m.jsx)(d.a,{color:t,children:e.toUpperCase()},e)}))})}}];return Object(m.jsxs)("div",{children:[Object(m.jsx)(p.a,{title:"Project Description",visible:a,onOk:function(){r(!1)},onCancel:function(){r(!1)},children:Object(m.jsx)("div",{children:j.map((function(e,t){var n=Object.keys(e);return Object(m.jsxs)("div",{style:{textAlign:"left"},children:[Object(m.jsxs)(d.a,{color:"#2db7f5",children:["#",t+1]}),n.map((function(t){return Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:t.toUpperCase()})," : ",e[t]]})})),Object(m.jsx)("br",{})]})}))})}),Object(m.jsx)(A.a,{columns:b,dataSource:e.data})]})}var C=n(167);var E=function(){var e=s.a.Search,t=o.a.Header,n=o.a.Footer,a=o.a.Sider,r=o.a.Content,h=(j.a.SubMenu,Object(c.useState)([])),p=Object(i.a)(h,2),A=p[0],E=p[1],y=Object(c.useState)(""),S=Object(i.a)(y,2),v=S[0],I=S[1],k=Object(c.useState)([]),T=Object(i.a)(k,2);T[0],T[1],Object(c.useEffect)((function(){x.a.get("https://raw.githubusercontent.com/bitsacm/ps1data/master/src/data/ps1_data.json").then((function(e){return E(e.data)}))}),[]);var B=new f.a(A,{keys:["name","industry","location","branches"]}).search(v),N=v?B.map((function(e){return e.item})):A,R=["magenta","red","orange","gold","lime","green","cyan","blue","geekblue","purple"];return Object(m.jsx)("div",{children:Object(m.jsxs)(o.a,{children:[Object(m.jsx)(t,{className:"header",children:Object(m.jsx)("h1",{style:{color:"#fffbe6"},children:"PS1 HELPER"})}),Object(m.jsxs)(o.a,{children:[Object(m.jsxs)(a,{width:300,style:{backgroundColor:"#fff"},children:[Object(m.jsx)(l.a,{title:"FILTER BY BRANCH",children:["ANY","B1","B2","B3","B4","B5","AA","A1","A2","A3","A4","A5","A7","A8","C6"].map((function(e,t){return Object(m.jsx)(d.a,{onClick:function(e){console.log("HOW DO I DO THIS??")},color:R[t],style:{marginBottom:"10px"},children:e},t)}))}),Object(m.jsx)(l.a,{title:"FILTER BY INDUSTRY",children:["ELECTRONICS","FINANCE AND MGMT","MECHANICAL","CHEMICAL"," CEMENT","INFRASTRUCTURE","IT","COMPUTER SCIENCE","HEALTH CARE","GOVT RESEARCH LAB","STEEL","OTHERS"].map((function(e,t){return Object(m.jsx)(d.a,{color:R[t]+"-inverse",style:{marginBottom:"10px"},children:e},t)}))}),Object(m.jsx)(b.a,{type:"primary",icon:Object(m.jsx)(u.a,{}),size:"large",children:Object(m.jsx)(C.CSVLink,{data:N,children:Object(m.jsx)("span",{style:{color:"#fff"},children:"Download as CSV"})})})]}),Object(m.jsxs)(r,{children:[Object(m.jsx)(e,{placeholder:"Eg: Machine Learning",width:300,size:"large",enterButton:!0,prefix:Object(m.jsx)(O.a,{}),onChange:function(e){var t=e.currentTarget,n=(void 0===t?{}:t).value;I(n)}}),Object(m.jsx)(g,{data:N})]})]}),Object(m.jsx)(n,{})]})})};r.a.render(Object(m.jsx)(E,{}),document.getElementById("root"))}},[[280,1,2]]]);
//# sourceMappingURL=main.6544aed4.chunk.js.map