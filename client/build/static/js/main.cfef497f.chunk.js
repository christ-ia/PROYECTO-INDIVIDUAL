(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(18),s=n.n(r),o=n(10),A=(n(30),n(2)),i=n(1),g=function(){return Object(i.jsx)("div",{children:"About"})},l=n(3),j=n.p+"static/media/pokeinfo.059abd50.png",u=(n(32),n(7)),p=(n(38),function(){var e=Object(u.b)(),t=function(){var e=Object(u.c)((function(e){return e})).allPokemons,t=Object(u.b)(),n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(!1),A=Object(l.a)(o,2),i=A[0],g=A[1];return{input:r,found:i,onChangeInput:function(e){s(e.target.value)},handleSubmit:function(n){n.preventDefault();var c=e.filter((function(e){return e.name.toLowerCase()===r.toLowerCase()}));c.length?(t({type:"FILTER_BY_NAME",payload:c}),s("")):(g(!0),setTimeout((function(){g(!1),s("")}),1500))}}}(),n=t.input,a=t.onChangeInput,r=t.handleSubmit,s=t.found;return Object(i.jsxs)("div",{className:"search-container",children:[Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYEAYAAACw5+G7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAB3RJTUUH5gkXFS8Nuld6IwAAA4ZJREFUWMPtV11IVEEUnr27moFERvhQD0IErfQDJSr04pNJ9GBFZELog0oQW0IPBT340oNSEkIQUZFJUIpQSJBEUhg+CFog0kKI/Sv0c+9c15k7c39mTg/TTbvburmtLkEfXA5zmTnznW/OnJlB6D9+BQAAQCgEEiTIvLxc88kwgJ4eZXVdBRKLKRuJ5JpfauI/CCri4+PwW8Tjql91da75/iBcXq6I9fUpOz8Py8LAgPJTUrLyhAEAIBxWE166pNpCLI9wMkSd7Jf9w8OrFMDNm39L2IfnCSEEwNwHO2F9kxKP2ResfbW1y+WVdlMpxZubVaupKVU/xxHC8xCKRDRN0xDStFBI04ICIMSY5zkOQrat+qMHoVhol66H++RoqHBmJsuKr12r7OxsUEEp1ZdI2DZjAIbBGCEA7qj46L1a2AuMua7jAGDMGKUAxlX2gjxxHKOSbaZHurpM0zRNs6gom9myKIDa2lQpQKnjcA6Aj7F+0mlZxha2nhQfPUqOgyTHi4vNd9ykX6T0A8Pl7Dp5OTj4bcy+Nr8nGv11hfPzldfbt5WdmPDnzzwACRLk5cvJyksp5YLiGKwWq+XgweB4fI9N0k0NDTrjo3RnTc3SQtXVJc2jA0jdNDM+EJWb3t6gY9cVwvMAcIRHaefISHZWur09qToJJRR+yt7QeFtbqvHa0u6npoJ/XFdKIRCCXrQVZrNV/qqqgn/UHkMINYfOotOlpctXRoIEuWaN1eo+s7vn5ih1HNteSB0/55ceX1Oj9Gxs/L3yhw+n2mOW5bq2DYAv8vs0v7MzY238+my8ZjHCJyaMHWyG3Lt1K5ibatpoVNnBwaSaJUGCLCxU7fp6v0alqm4Yc04pgGHY2+nwgQPZWekkBYuKlO3qUtZxlj6+3r+HNPBXGm/jW8jIp09vAQCgoCB7xCVIkBUVyn79mo7Qn4Jzz3OcRdVtkn2mlcmplyXl/fMh87uQnyrBvYXPsyHSeuNG1okHkRi3W/jG589dV91p0kFdNRaliJ/jY2yWTAuB1/Fz5GFHh+qtaX/PMA3weTbEhkpKjDvsEIkNDBCiTma/fgfhXyXwBtZBTyYSuIDvp2V375ompZSWla044XTQz/ArZLq6Glexbro3HvfL4M/cPsXPkYf+QycczjXflPBfZvgE/0C2xmLGI95Kd+u6sZ8lyOPu7lzzyzCgf/Bxv1r4DgEh6HbuWs5XAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA5LTIzVDIxOjQ3OjEzKzAwOjAwksR5SgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wOS0yM1QyMTo0NzoxMyswMDowMOOZwfYAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjItMDktMjNUMjE6NDc6MTMrMDA6MDC0jOApAAAAAElFTkSuQmCC",alt:"refresh",className:"search-refresh-icon",onClick:function(){return e({type:"GET_ALL_POKEMONS"})}}),Object(i.jsxs)("form",{onSubmit:r,className:"search-form",children:[Object(i.jsx)("input",{type:"text",value:n,onChange:a,placeholder:"Search pokemon by name"}),Object(i.jsx)("input",{type:"submit"})]}),s&&Object(i.jsx)("h5",{className:"pokemon-not-found",children:"pokemon : ".concat(n," not found!")})]})}),O=function(){return Object(i.jsxs)("nav",{className:"nav-bar",children:[Object(i.jsxs)("div",{className:"nav-bar-links",children:[Object(i.jsx)("img",{className:"nav-bar__logo",src:j,alt:"pokeinfo logo"}),Object(i.jsxs)("div",{children:[Object(i.jsx)(o.c,{className:function(e){var t=e.isActive;return"link".concat(t?"-active":"")},to:"pokemons",children:" Home "}),Object(i.jsx)(o.c,{className:function(e){var t=e.isActive;return"link".concat(t?"-active":"")},to:"/about",children:" About "})]})]}),Object(i.jsx)("div",{children:Object(i.jsx)(p,{})})]})},b=n.p+"static/media/whoIs.ec8ffb7a.png",d=function(e){var t=e.name,n=e.types,c=e.id,a=e.imgArt,r=void 0===a?b:a,s=e.attack;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"container__card-container",children:Object(i.jsxs)("div",{className:"container__card-container__card-".concat(n[0].name),children:[Object(i.jsxs)("div",{className:"container__card-container__card-head",children:["number"===typeof c?Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("p",{className:"container__card-container__card-head-pokedex",children:["N\xba:",Object(i.jsxs)("span",{className:"span-card",children:["  ",c]})]})}):Object(i.jsx)("p",{className:"container__card-container__card-head-pokedex",children:"not-official"}),Object(i.jsxs)("p",{className:"container__card-container__card-head-pokedex",children:["ATK",Object(i.jsxs)("span",{className:"span-card",children:["  ",s]})]})]}),Object(i.jsx)(o.b,{to:"/pokemon/".concat(c),children:Object(i.jsx)("img",{onError:function(e){e.target.src=b},src:r,alt:t})}),Object(i.jsx)("h2",{className:"container__card-container__card-name",children:t.replace(/^\w/,(function(e){return e.toUpperCase()}))}),Object(i.jsx)("div",{className:"container__card-container__card-types",children:n.map((function(e,t){return Object(i.jsxs)("span",{className:"span-types-".concat(e.name),children:[" ",e.name," "]},t)}))})]})})})},m=(n(39),function(e){var t=e.pokemonsPage;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"container",children:t.map((function(e){return Object(i.jsx)(d,{attack:e.attack,name:e.name,types:e.Types,id:e.id,imgArt:e.imgArt},e.id)}))})})}),C=n(5),h=n(9),f=function(){var e=Object(h.a)(Object(C.a)().mark((function e(){var t;return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/pokemons");case 2:return e.next=4,e.sent.json();case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(h.a)(Object(C.a)().mark((function e(t){var n,c,a,r,s,o,A,i,g;return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://pokeapi.co/api/v2/pokemon/".concat(t,"/"),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:return a=e.sent,r=a.name,s=a.types,o=a.id,A=a.stats,i="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(t,".png"),g=A[1].base_stat,e.abrupt("return",{name:r,types:s,id:o,imgArt:i,atk:g});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(h.a)(Object(C.a)().mark((function e(){var t,n,c,a;return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/type/");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,c=n.results,a=["All"].concat(c.map((function(e){return e.name.replace(/^\w/,(function(e){return e.toUpperCase()}))}))),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(c.useState)({}),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(A.g)().pokeid;Object(c.useEffect)((function(){var e=function(){var e=Object(h.a)(Object(C.a)().mark((function e(){var t;return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(r);case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r]);var s=n.name,g=n.id,j=n.imgArt;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"container__card-container",children:Object(i.jsxs)("div",{className:"container__card-container__card",children:[Object(i.jsxs)("p",{className:"container__card-container__card-pokedex",children:["P\xd3KEDEX",Object(i.jsxs)("span",{className:"span-card",children:["  ",g]})]}),Object(i.jsx)(o.b,{to:"/pokemon/".concat(g),children:Object(i.jsx)("img",{onError:function(e){e.target.src=b},src:j,alt:s})}),Object(i.jsx)("h2",{className:"container__card-container__card-name",children:s}),Object(i.jsx)("div",{className:"container__card-container__card-types"})]})})})},v=function(e,t){return t?{type:"ORDER_POKEMONS_ASC",payload:{key:e}}:{type:"ORDER_POKEMONS_DESC",payload:{key:e}}},w=(n(40),function(e){var t=e.setCurrentPage,n=Object(u.b)(),a=function(e){var t=Object(u.b)(),n=Object(c.useState)("id"),a=Object(l.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)(!0),A=Object(l.a)(o,2),i=A[0],g=A[1],j=Object(c.useState)([]),p=Object(l.a)(j,2),O=p[0],b=p[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(h.a)(Object(C.a)().mark((function e(){var t;return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),{key:r,setKey:s,order:i,setOrder:g,types:O,setTypes:b,onChangeFilterType:function(n){var c;t((c=n.target.value,function(e,t){var n=t().allPokemons;return e("All"===c?{type:"FILTER_BY_TYPE",payload:n}:{type:"FILTER_BY_TYPE",payload:n.filter((function(e){return e.Types.map((function(e){return e.name.toLowerCase()})).find((function(e){return e===c.toLowerCase()}))}))})})),e(1)},onChangeOrderKey:function(n){t(v(n.target.value,i)),s(n.target.value),e(1)}}}(t),r=a.key,s=a.order,o=a.setOrder,A=a.types,g=a.onChangeFilterType,j=a.onChangeOrderKey;return Object(i.jsxs)("div",{className:"container-orders",children:[Object(i.jsx)("p",{children:"Order by:    "}),Object(i.jsxs)("select",{onChange:j,children:[Object(i.jsx)("option",{value:"id",children:"Pokedex"},"id"),Object(i.jsx)("option",{value:"attack",children:"Attack"},"attack"),Object(i.jsx)("option",{value:"name",children:"Name"},"name")]}),Object(i.jsxs)("div",{className:"container-orders__asc-desc-buttons",children:[Object(i.jsx)("button",{onClick:function(){o(!0),n(v(r,!0)),t(1)},className:"container-orders__asc-desc-buttons__btn".concat(s?"-active":""),children:"\u2191"}),Object(i.jsx)("button",{onClick:function(){o(!1),n(v(r,!1)),t(1)},className:"container-orders__asc-desc-buttons__btn".concat(s?"":"-active"),children:"\u2193"})]}),Object(i.jsx)("p",{children:"Filter by:    "}),Object(i.jsx)("select",{onChange:g,children:A.map((function(e,t){return Object(i.jsx)("option",{value:e,children:e},t)}))})]})}),Q=(n(41),function(){return Object(i.jsx)("div",{className:"isLoading-container",children:Object(i.jsx)("img",{src:"data:image/gif;base64,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",alt:"Loading"})})}),B=(n(42),function(e){for(var t=e.currentPage,n=e.setCurrentPage,c=e.totalPokemons,a=Math.ceil(c/12),r=[],s=1;s<=a;s++)r.push(s);return Object(i.jsx)("div",{className:"container-pagination",children:Object(i.jsxs)("ul",{className:"pagination",children:[Object(i.jsx)("li",{onClick:function(){return n(t-1)},className:"li-".concat(1===t?"disabled":""),children:"\xab"}),r.map((function(e){return Object(i.jsx)("li",{onClick:function(){return n(e)},className:"li-".concat(t===e?"active":""),children:e},e)})),Object(i.jsx)("li",{onClick:function(){return n(t+1)},className:"li-".concat(t===a?"disabled":""),children:"\xbb"})]})})}),E=(n(43),function(){var e=Object(u.c)((function(e){return e})).pokemons,t=Object(c.useState)(1),n=Object(l.a)(t,2),a=n[0],r=n[1],s=12*a,o=s-12,A=e.slice(o,s),g=Object(u.b)(),j=Object(u.c)((function(e){return e})).isLoading;return Object(c.useEffect)((function(){g(function(){var e=Object(h.a)(Object(C.a)().mark((function e(t){var n;return Object(C.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCH_INIT_POKEMONS"}),e.prev=1,e.next=4,f();case 4:n=e.sent,t({type:"SUCCESS_FETCH_INIT_POKEMONS",payload:n}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"ERROR_FETCH_INIT_POKEMONS",payload:e.t0}),console.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[g]),j?Object(i.jsx)(Q,{}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container-head",children:[Object(i.jsx)("h2",{children:"Pokedex"}),Object(i.jsx)(w,{setCurrentPage:r})]}),Object(i.jsx)("hr",{}),e.length>24&&Object(i.jsx)(B,{currentPage:a,setCurrentPage:r,totalPokemons:e.length}),Object(i.jsx)(m,{pokemonsPage:A}),e.length>24&&Object(i.jsx)(B,{currentPage:a,setCurrentPage:r,totalPokemons:e.length})]})}),N=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(O,{}),Object(i.jsxs)(A.c,{children:[Object(i.jsx)(A.a,{path:"about",element:Object(i.jsx)(g,{})}),Object(i.jsx)(A.a,{path:"pokemons",element:Object(i.jsx)(E,{})}),Object(i.jsx)(A.a,{path:"pokemon/:pokeid",element:Object(i.jsx)(D,{})}),Object(i.jsx)(A.a,{path:"/*",element:Object(i.jsx)(E,{})})]})]})},y=n(13),I=n(22),K=n(21),S=n(4),G={pokemons:[],allPokemons:[],isLoading:!0},P=Object(y.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_INIT_POKEMONS":return Object(S.a)(Object(S.a)({},e),{},{isLoading:!0});case"SUCCESS_FETCH_INIT_POKEMONS":return Object(S.a)(Object(S.a)({},e),{},{pokemons:t.payload,allPokemons:t.payload,isLoading:!1});case"ERROR_FETCH_INIT_POKEMONS":return Object(S.a)(Object(S.a)({},e),{},{error:t.payload,isLoading:!1});case"GET_ALL_POKEMONS":return Object(S.a)(Object(S.a)({},e),{},{pokemons:e.allPokemons});case"ORDER_POKEMONS_ASC":var n=t.payload.key;return Object(S.a)(Object(S.a)({},e),{},{pokemons:e.pokemons.sort((function(e,t){return e[n]>t[n]?1:e[n]<t[n]?-1:0}))});case"ORDER_POKEMONS_DESC":var c=t.payload.key;return Object(S.a)(Object(S.a)({},e),{},{pokemons:e.pokemons.sort((function(e,t){return t[c]>e[c]?1:t[c]<e[c]?-1:0}))});case"FILTER_BY_TYPE":case"FILTER_BY_NAME":return Object(S.a)(Object(S.a)({},e),{},{pokemons:t.payload});default:return e}}),Object(K.composeWithDevTools)(Object(y.applyMiddleware)(I.a)));s.a.createRoot(document.getElementById("root")).render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(u.a,{store:P,children:Object(i.jsx)(o.a,{children:Object(i.jsx)(N,{})})})}))}},[[44,1,2]]]);
//# sourceMappingURL=main.cfef497f.chunk.js.map