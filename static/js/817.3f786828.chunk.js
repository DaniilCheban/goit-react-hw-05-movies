"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[817],{35:function(e,t,r){r.d(t,{Hg:function(){return s},TP:function(){return i},Z6:function(){return o},qF:function(){return p},tx:function(){return f}});var n=r(861),a=r(757),u=r.n(a),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"09c19d7ce5a3381da6cc74d65419a492",language:"en-US"};var s=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/all/day");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?query=".concat(t,"&include_adult=false&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},487:function(e,t,r){r.d(t,{O:function(){return c}});var n=r(689),a=r(87),u=r(184),c=function(e){var t=e.arrey,r=e.query,c=(0,n.TH)();return(0,u.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.title,s=e.name;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movie/".concat(t),state:{from:r?"/movie?query=".concat(r):c.pathname},children:n||s})},t)}))})}},817:function(e,t,r){r.r(t);var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(35),i=r(487),o=r(791),f=r(87),p=r(968),l=r.n(p),d=r(184);t.default=function(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),r=t[0],u=t[1],p=(0,o.useState)([]),v=(0,a.Z)(p,2),h=v[0],m=v[1],x=(0,o.useState)(!1),b=(0,a.Z)(x,2),y=b[0],w=b[1],g=(0,o.useState)(!1),Z=(0,a.Z)(g,2),k=Z[0],j=Z[1],q=(0,f.lr)(),S=(0,a.Z)(q,2),_=S[0],C=S[1],N=_.get("query")||"";(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!N){e.next=16;break}return j(!0),e.prev=2,e.next=5,(0,s.qF)(N);case 5:t=e.sent,m(t.results.length>0?t.results:[]),t.results.length?w(!1):w(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),w(!0);case 13:return e.prev=13,j(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[N]);return(0,d.jsxs)("div",{children:[(0,d.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=r.trim();if(!t)return alert("Please write a search word"),m([]),C(""),void w(!1);C({query:t}),u("")},children:(0,d.jsxs)("div",{className:"input-group my-3",children:[(0,d.jsx)("input",{onChange:function(e){return u(e.target.value)},type:"text",className:"form-control",placeholder:"Write the name of the movie","aria-label":"Recipient's username","aria-describedby":"button-addon2",value:r}),(0,d.jsx)("button",{className:"btn btn-outline-secondary",type:"submit",id:"button-addon2",children:"Search"})]})}),k&&(0,d.jsx)(l(),{type:"spin",color:"black"}),h.length>0&&(0,d.jsx)(i.O,{arrey:h,query:N}),y&&(0,d.jsx)("h3",{children:"Something went wrong ...."})]})}}}]);
//# sourceMappingURL=817.3f786828.chunk.js.map