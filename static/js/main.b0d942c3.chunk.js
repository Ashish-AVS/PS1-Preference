(this.webpackJsonpps1_pref=this.webpackJsonpps1_pref||[]).push([[0],{135:function(e,t,n){},180:function(e,t,n){},280:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(31),r=n.n(a),i=(n(180),n(8)),s=n(6),o=(n(135),n(286)),j=n(283),l=n(69),d=n(285),u=n(288),b=n(41),h=n(289),O=n(123),f=n(159),x=n.n(f),p=n(129),m=n(287),A=n(284),C=n(21);function g(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(["Sphagetti Code"]),o=Object(s.a)(i,2),j=o[0],l=o[1],d=[{title:"Name",dataIndex:"name",key:"name",render:function(t){return Object(C.jsx)("span",{onClick:function(){return function(t){r(!0),e.data.map((function(e){e.name===t&&l(e.projects)})),console.log(e)}(t)},children:t})}},{title:"Industry",dataIndex:"industry",key:"industry"},{title:"location",dataIndex:"location",key:"location"},{title:"Branches",dataIndex:"branches",key:"branches",render:function(e){return Object(C.jsx)("div",{children:e.map((function(e){var t="pink";return"A7"===e&&(t="geekblue"),"A3"===e&&(t="gold"),"A8"===e&&(t="lime"),"AA"===e&&(t="green"),"Any"===e&&(t="cyan"),"A4"===e&&(t="orange"),"A1"===e&&(t="red"),"A2"===e&&(t="magenta"),Object(C.jsx)(u.a,{color:t,children:e.toUpperCase()},e)}))})}}],b=["#ff9c6e","#ffa940","#ffc53d","#ffec3d","#f759ab","#9254de"];return Object(C.jsxs)("div",{children:[Object(C.jsx)(m.a,{title:"Project Description",visible:a,onOk:function(){r(!1)},onCancel:function(){r(!1)},children:Object(C.jsx)("div",{children:j.map((function(e,t){var n=Object.keys(e);return Object(C.jsxs)("div",{style:{textAlign:"left"},children:[Object(C.jsxs)(u.a,{color:b[t],children:["#",t+1]}),n.map((function(t){return Object(C.jsxs)("div",{children:[Object(C.jsx)("b",{children:t.toUpperCase()})," : ",e[t]]})})),Object(C.jsx)("br",{})]})}))})}),Object(C.jsx)(A.a,{columns:d,dataSource:e.data})]})}var E=n(167);var y=function(){var e=o.a.Search,t=j.a.Header,n=j.a.Footer,a=j.a.Sider,r=j.a.Content,f=(l.a.SubMenu,Object(c.useState)([])),m=Object(s.a)(f,2),A=m[0],y=m[1],k=Object(c.useState)(""),v=Object(s.a)(k,2),S=v[0],I=v[1],T=Object(c.useState)([]),B=Object(s.a)(T,2),R=(B[0],B[1],Object(c.useState)([])),N=Object(s.a)(R,2),L=N[0],H=N[1];Object(c.useEffect)((function(){x.a.get("https://raw.githubusercontent.com/bitsacm/ps1data/master/src/data/ps1_data.json").then((function(e){return y(e.data)}))}),[]);var w,M=new p.a(A,{keys:["branches","industry"],tokenize:!1,threshold:.6});L.map((function(e){w=M.search(e)}));var U=L.length?w.map((function(e){return e.item})):A,F=new p.a(U,{threshold:.2,tokenize:!0,matchAllTokens:!0,keys:["name","industry","location","branches"]}).search(S),z=S?F.map((function(e){return e.item})):U,D=["magenta","red","orange","gold","lime","green","cyan","blue","geekblue","purple"],P=function(e){H((function(t){return[].concat(Object(i.a)(t),[e])})),console.log(L)};return Object(C.jsx)("div",{children:Object(C.jsxs)(j.a,{children:[Object(C.jsx)(t,{className:"header",children:Object(C.jsx)("h1",{style:{color:"#fffbe6"},children:"PS1 HELPER"})}),Object(C.jsxs)(j.a,{children:[Object(C.jsxs)(a,{width:300,style:{backgroundColor:"#fff"},children:[Object(C.jsx)(d.a,{title:"FILTER BY BRANCH",children:["ANY","B1","B2","B3","B4","B5","AA","A1","A2","A3","A4","A5","A7","A8","C6"].map((function(e,t){return Object(C.jsx)(u.a,{onClick:function(){return P(e)},color:D[t],style:{marginBottom:"10px"},children:e},t)}))}),Object(C.jsx)(d.a,{title:"FILTER BY INDUSTRY",children:["ELECTRONICS","FINANCE AND MGMT","MECHANICAL","CHEMICAL"," CEMENT","INFRASTRUCTURE","IT","COMPUTER SCIENCE","HEALTH CARE","GOVT RESEARCH LAB","STEEL","OTHERS"].map((function(e,t){return Object(C.jsx)(u.a,{color:D[t]+"-inverse",style:{marginBottom:"10px"},onClick:function(){return P(e)},children:e},t)}))}),Object(C.jsx)(b.a,{type:"primary",icon:Object(C.jsx)(h.a,{}),size:"large",children:Object(C.jsx)(E.CSVLink,{data:z,children:Object(C.jsx)("span",{style:{color:"#fff"},children:"Download as CSV"})})})]}),Object(C.jsxs)(r,{children:[Object(C.jsx)(e,{placeholder:"Eg: Machine Learning",width:300,size:"large",enterButton:!0,prefix:Object(C.jsx)(O.a,{}),onChange:function(e){var t=e.currentTarget,n=(void 0===t?{}:t).value;I(n)},value:S}),Object(C.jsx)(g,{data:z})]})]}),Object(C.jsx)(n,{})]})})};r.a.render(Object(C.jsx)(y,{}),document.getElementById("root"))}},[[280,1,2]]]);
//# sourceMappingURL=main.b0d942c3.chunk.js.map