(this["webpackJsonpchatting-app"]=this["webpackJsonpchatting-app"]||[]).push([[0],{115:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(10),s=n.n(i),j=(n(115),n(11)),r=n(32),o=n(201),b=n(210),l=n(205),u=n(166),d=n(29),O=n(3);var x,h=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(r.a)(i,2);return s[0],s[1],Object(O.jsx)(o.a,{container:!0,justifyContent:"center",style:{padding:"1em",marginTop:"10px"},children:Object(O.jsx)(o.a,{item:!0,xs:6,children:Object(O.jsx)(u.a,{children:Object(O.jsxs)(o.a,{container:!0,direction:"column",alignItems:"center",spacing:3,children:[Object(O.jsx)(o.a,{item:!0,children:"\uc774\ub984\uc744 \uc785\ub825\ud558\uace0 \uc785\uc7a5\uc744 \ud558\uc2dc\uc624."}),Object(O.jsx)(o.a,{item:!0,children:Object(O.jsx)(b.a,{name:"userName",onChange:function(e){a(e.target.value)},variant:"outlined"})}),Object(O.jsx)(o.a,{item:!0,children:Object(O.jsx)(l.a,{variant:"contained",component:d.b,to:"/room?name=".concat(n),children:"\uc785\uc7a5"})})]})})})})},m=n(99),f=n(96),g=n.n(f),p=n(97),v=n.n(p);var C=function(e){var t=e.location,n=Object(c.useState)(""),a=Object(r.a)(n,2),i=a[0],s=a[1],j=Object(c.useState)(""),d=Object(r.a)(j,2),h=(d[0],d[1]),f=Object(c.useState)(""),p=Object(r.a)(f,2),C=p[0],y=p[1],S=Object(c.useState)([]),F=Object(r.a)(S,2),I=F[0],k=F[1],E=Object(c.useState)([]),M=Object(r.a)(E,2),P=M[0],T=M[1];return Object(c.useEffect)((function(){x=v()("/");var e=g.a.parse(t.search),n=e.name,c=e.room;return s(n),h(c),x.emit("join",{name:n,room:c}),x.on("usersInfo",(function(e){T(e)})),function(){x.disconnect()}}),["/",t.search]),Object(c.useEffect)((function(){x.on("message",(function(e){k((function(t){return[].concat(Object(m.a)(t),[e])}))}))}),[]),Object(O.jsxs)(o.a,{container:!0,justifyContent:"center",direction:"column",spacing:3,style:{padding:"1em"},children:[Object(O.jsx)(o.a,{item:!0,xs:6,children:Object(O.jsx)(u.a,{children:Object(O.jsxs)(o.a,{container:!0,direction:"column",children:[Object(O.jsx)(o.a,{container:!0,children:Object(O.jsx)(o.a,{children:"\uc811\uc18d\uc790 \ub9ac\uc2a4\ud2b8"})}),P.map((function(e,t){return Object(O.jsx)(o.a,{container:!0,justifyContent:"flex-end",children:Object(O.jsxs)(o.a,{children:[e.name," "]})},t)}))]})})}),Object(O.jsx)(o.a,{item:!0,xs:6,children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(o.a,{container:!0,direction:"column",children:I.map((function(e,t){return i===e.name?Object(O.jsxs)(o.a,{container:!0,justifyContent:"flex-end",children:[Object(O.jsxs)(o.a,{children:[e.name,": "]}),Object(O.jsx)(o.a,{children:e.message})]},t):"admin"===e.name?Object(O.jsxs)(o.a,{container:!0,direction:"column",alignItems:"center",justifyContent:"flex-start",children:[Object(O.jsx)(o.a,{children:e.name}),Object(O.jsx)(o.a,{children:e.message})]},t):Object(O.jsxs)(o.a,{container:!0,justifyContent:"flex-start",children:[Object(O.jsxs)(o.a,{children:[e.name,": "]}),Object(O.jsx)(o.a,{children:e.message})]},t)}))}),Object(O.jsxs)(o.a,{container:!0,justifyContent:"center",children:[Object(O.jsx)(b.a,{variant:"outlined",value:C,onChange:function(e){y(e.target.value)},onKeyPress:function(e){!function(e){C&&"Enter"===e.key&&x.emit("sendMessage",i,C,(function(){y("")}))}(e)}}),Object(O.jsx)(l.a,{variant:"contained",onClick:function(){x.emit("sendMessage",i,C,(function(){y("")}))},children:"\uc804\uc1a1"})]})]})})]})},y=n(206),S=n(207),F=n(209),I=n(208),k=n(98),E=n.n(k),M=n(212);var P=function(){return Object(O.jsx)(y.a,{position:"static",children:Object(O.jsxs)(S.a,{children:[Object(O.jsx)(M.a,{smUp:!0,children:Object(O.jsx)(I.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(O.jsx)(E.a,{})})}),Object(O.jsx)(F.a,{variant:"h6",children:"\ucc44\ud305 \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158"})]})})};n(213);var T=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(P,{}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",component:h}),Object(O.jsx)(j.a,{path:"/room",component:C})]})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,215)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(O.jsx)(d.a,{children:Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(T,{})})}),document.getElementById("root")),w()}},[[164,1,2]]]);
//# sourceMappingURL=main.095a0ecf.chunk.js.map