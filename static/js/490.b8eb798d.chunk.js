"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[490],{35:function(t,r,e){e.d(r,{Hg:function(){return s},TP:function(){return i},Z6:function(){return o},qF:function(){return p},tx:function(){return f}});var n=e(861),a=e(757),u=e.n(a),c=e(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"09c19d7ce5a3381da6cc74d65419a492",language:"en-US"};var s=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/all/day");case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/credits"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/reviews"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(r,"&include_adult=false&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},487:function(t,r,e){e.d(r,{O:function(){return c}});var n=e(689),a=e(87),u=e(184),c=function(t){var r=t.arrey,e=t.query,c=(0,n.TH)();return(0,u.jsx)("ul",{children:r.map((function(t){var r=t.id,n=t.title,s=t.name;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movie/".concat(r),state:{from:e?"/movie?query=".concat(e):c.pathname},children:n||s})},r)}))})}},490:function(t,r,e){e.r(r);var n=e(861),a=e(439),u=e(757),c=e.n(u),s=e(35),i=e(791),o=e(968),f=e.n(o),p=e(487),v=e(184);r.default=function(){var t=(0,i.useState)([]),r=(0,a.Z)(t,2),e=r[0],u=r[1],o=(0,i.useState)(!1),d=(0,a.Z)(o,2),l=d[0],h=d[1],m=(0,i.useState)(!1),x=(0,a.Z)(m,2),w=x[0],Z=x[1],g=function(){var t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Z(!0),t.prev=1,t.next=4,(0,s.Hg)();case 4:r=t.sent,u(r.results),r.results?h(!1):h(!0),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),h(!0);case 12:return t.prev=12,Z(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();return(0,i.useEffect)((function(){g()}),[]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:"Trending today"})," ",w&&(0,v.jsx)(f(),{type:"spin",color:"black"}),e.length>0&&(0,v.jsx)(p.O,{arrey:e}),l&&(0,v.jsx)("h3",{children:"Something went wrong ...."})]})}}}]);
//# sourceMappingURL=490.b8eb798d.chunk.js.map