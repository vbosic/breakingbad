(this.webpackJsonpbreakingbad=this.webpackJsonpbreakingbad||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(15),s=c.n(a),i=c(6),j=c.n(i),o=c(16),u=c(3),l=c(17),d=c.n(l),b=c.p+"static/media/logo.e6ecab44.png",O=c(0),h=function(){return Object(O.jsx)("header",{className:"center",children:Object(O.jsx)("img",{src:b,alt:""})})},m=function(e){var t=e.item;return console.log(t),Object(O.jsx)("div",{className:"card",children:Object(O.jsxs)("div",{className:"card-inner",children:[Object(O.jsx)("div",{className:"card-front",children:Object(O.jsx)("img",{src:t.img,alt:""})}),Object(O.jsxs)("div",{className:"card-back",children:[Object(O.jsx)("h1",{children:t.name}),Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Actor Name:"})," ",t.portrayed]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Nickname:"})," ",t.nickname]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"DOB:"})," ",t.birthday]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("strong",{children:"Status:"})," ",t.status]})]})]})]})})},x=c.p+"static/media/spinner.11d9cde8.gif",g=function(){return Object(O.jsx)("img",{src:x,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading"})},f=function(e){var t=e.items;return e.isLoading?Object(O.jsx)(g,{}):Object(O.jsx)("section",{className:"cards",children:t.map((function(e){return Object(O.jsx)(m,{item:e},e.char_id)}))})},p=function(e){var t=e.getQuery,c=Object(n.useState)(""),r=Object(u.a)(c,2),a=r[0],s=r[1],i=Object(n.useRef)(null);return Object(O.jsx)("section",{className:"search",children:Object(O.jsx)("input",{type:"text",className:"form-control",placeholder:"Search characters",value:a,onChange:function(e){var c,n=e.target;return c=n.value,s(c),void(c&&c.length>2?(i.current&&clearTimeout(i.current),i.current=setTimeout((function(){t(c)}),500)):(c&&c.length<=2||!c)&&a.length>2&&(i.current&&clearTimeout(i.current),i.current=setTimeout((function(){t("")}),500)))},autoFocus:!0})})},v=(c(43),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!0),s=Object(u.a)(a,2),i=s[0],l=s[1],b=Object(n.useState)(""),m=Object(u.a)(b,2),x=m[0],v=m[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,d()("https://www.breakingbadapi.com/api/characters?name=".concat(x));case 3:t=e.sent,console.log(t.data),r(t.data),l(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[x]),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(h,{}),Object(O.jsx)(p,{getQuery:function(e){return v(e)}}),i?Object(O.jsx)(g,{}):Object(O.jsx)(f,{isLoading:i,items:c})]})});s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.dd1e52c5.chunk.js.map