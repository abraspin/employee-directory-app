(this["webpackJsonpemployee-directory-app"]=this["webpackJsonpemployee-directory-app"]||[]).push([[0],{26:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),a=n(17),i=n.n(a),o=n(3);n(26);var l=function(e){var t=e.title,n=e.icon;return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"row bg-dark  ",children:Object(r.jsxs)("h1",{className:"mx-auto text-light",children:[" ",t,Object(r.jsxs)("span",{children:[" ",Object(r.jsx)("i",{className:n})]})]})})})},u=(n(8),n(7)),d=n.n(u),j=n(18),h=n(19),b=n.n(h),m={getUsers:function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://randomuser.me/api/?nat=us&inc=name,email,picture,phone&results="+t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var x=function(e){var t=e.name,n=e.email,c=e.phone,s=e.picture;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("img",{src:s,alt:t})}),Object(r.jsx)("td",{children:t}),Object(r.jsx)("td",{children:n}),Object(r.jsx)("td",{children:c})]})},p=n(20),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=s.a.useState(t),r=Object(o.a)(n,2),c=r[0],a=r[1],i=s.a.useMemo((function(){var t=Object(p.a)(e);return console.log("\ud83d\ude80------ ~ file: index.js ~ line 15 ~ //sortedItems ~ sortableItems",t),null!==c&&t.sort((function(e,t){return e[c.key]<t[c.key]?"ascending"===c.direction?-1:1:e[c.key]>t[c.key]?"ascending"===c.direction?1:-1:0})),t}),[e,c]),l=function(e){console.log("\ud83d\ude80 ~ file: index.js ~ line 50 ~ requestSort ~ key",e);var t="ascending";c&&c.key===e&&"ascending"===c.direction?(console.log("I flipped to descending!"),t="descending"):t="ascending",a({key:e,direction:t}),console.log("I just tried to setSortConfig to: ",c)};return{items:i,requestSort:l,sortConfig:c}},f=function(e){var t=O(e.userList),n=t.items,c=t.requestSort,s=t.sortConfig,a=function(e){if(s)return s.key===e?s.direction:void 0};return Object(r.jsx)("div",{children:Object(r.jsxs)("table",{className:"table table-striped table-bordered text-center ",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"User"}),Object(r.jsx)("th",{children:Object(r.jsx)("button",{type:"button",onClick:function(){return c("name")},className:a("name"),children:"Name"})}),Object(r.jsx)("th",{children:Object(r.jsx)("button",{type:"button",onClick:function(){return c("email")},className:a("email"),children:"Email"})}),Object(r.jsx)("th",{children:"Phone"})]})}),Object(r.jsx)("tbody",{children:n.map((function(e){return Object(r.jsx)(x,{name:e.name,email:e.email,phone:e.phone,picture:e.picture})}))})]})})},v=function(e){var t=e.placeholder,n=e.searchHandler,c=s.a.useState(""),a=Object(o.a)(c,2),i=a[0],l=a[1];return Object(r.jsx)("input",{value:i,className:"searchBox",type:"search",placeholder:t,onChange:function(e){l(e.target.value),n(i)}})};var g=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(),i=Object(o.a)(a,2),u=i[0],d=i[1];return Object(c.useEffect)((function(){m.getUsers(20).then((function(e){for(var t=[],n=0;n<e.data.results.length;n++){var r={name:e.data.results[n].name.first+" "+e.data.results[n].name.last,email:e.data.results[n].email,phone:e.data.results[n].phone,picture:e.data.results[n].picture.medium};t.push(r)}s(t),d(t)}))}),[]),Object(r.jsxs)("div",{children:[Object(r.jsxs)("header",{children:[Object(r.jsx)(l,{title:"Employee Directory",icon:"fas fa-user"}),Object(r.jsxs)("div",{className:"row bg-dark",children:[Object(r.jsx)("div",{className:"col md-8",children:Object(r.jsx)("h3",{className:"text-secondary mx-auto py-4 px-4",children:"Click on the column header to sort users"})}),Object(r.jsx)("div",{className:"col md-4",children:Object(r.jsxs)("h3",{className:"text-secondary mx-auto py-4 px-2",children:["Or search by name: ",Object(r.jsx)(v,{placeholder:"enter name...",searchHandler:function(e){var t=u.filter((function(t){return t.name.toLowerCase().includes(e)}));s(t)}})]})})]})]}),Object(r.jsx)("section",{children:Object(r.jsx)(f,{userList:n})})]})};n(45);i.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.33a9f3fb.chunk.js.map