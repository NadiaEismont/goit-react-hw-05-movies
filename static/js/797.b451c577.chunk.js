"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[797],{197:function(e,r,t){t.d(r,{au:function(){return f},fh:function(){return p},q5:function(){return l},vw:function(){return s},z1:function(){return u}});var n=t(5861),o=t(4687),c=t.n(o),i=t(1044);i.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var a="92dbc0754448974a4268873a5b560372",s=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/trending/movie/day?api_key=".concat(a));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/search/movie/?api_key=".concat(a,"&query=").concat(r,"&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(r,"?api_key=").concat(a,"&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(r,"/credits?api_key=").concat(a));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("/movie/".concat(r,"/reviews?api_key=").concat(a,"&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},1797:function(e,r,t){t.r(r),t.d(r,{Reviews:function(){return m}});var n=t(5861),o=t(885),c=t(4687),i=t.n(c),a=t(2791),s=t(197),u=t(2007),p=function(e){var r=(0,a.useState)([]),t=(0,o.Z)(r,2),c=t[0],u=t[1],p=(0,a.useState)(null),f=(0,o.Z)(p,2),l=f[0],v=f[1],y=(0,a.useState)(!1),O=(0,o.Z)(y,2),b=O[0],m=O[1];return(0,a.useEffect)((function(){m(!0);var r=function(){var r=(0,n.Z)(i().mark((function r(){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,s.q5)(e);case 3:t=r.sent,u(t),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0),v(r.t0.message);case 11:return r.prev=11,m(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,7,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),{reviews:c,error:l,isLoading:b}};p.propTypes={movieId:t.n(u)().number.isRequired};var f=t(7689),l=t(313),v=t(4963),y=t(2404),O=t(9433),b=t(184),m=function(){var e=(0,f.UO)().movieId,r=p(e).reviews;return(0,b.jsxs)(l.Z,{children:[r.map((function(e){var r=e.id,t=e.author,n=e.content;return(0,b.jsxs)(v.Z,{children:[(0,b.jsxs)(y.Z,{size:800,children:["Author: ",t]}),(0,b.jsx)(O.Z,{size:600,children:n})]},r)})),0===r.length&&(0,b.jsx)("p",{children:"Sorry, we haven't reviews yet"})]})}},2404:function(e,r,t){var n=t(4942),o=t(7462),c=t(4925),i=t(2791),a=t(1694),s=t.n(a),u=t(2007),p=t.n(u),f=t(8246),l=t.n(f),v=t(1629),y=["className","size"],O=["className"];function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d={},h={},g=(0,i.memo)((0,i.forwardRef)((function(e,r){var t=e.className,n=e.size,a=void 0===n?500:n,u=(0,c.Z)(e,y),p=(0,v.m)("Heading",{size:a},d,h),f=p.className,b=(0,c.Z)(p,O);return i.createElement(l(),(0,o.Z)({is:"h2",ref:r,className:s()(f,t),marginTop:0,marginBottom:0},b,u))})));g.propTypes=m(m({},l().propTypes),{},{size:p().oneOf([100,200,300,400,500,600,700,800,900])}),r.Z=g},4963:function(e,r,t){t.d(r,{Z:function(){return b}});var n=t(4942),o=t(7462),c=t(4925),i=t(2791),a=t(2007),s=t.n(a),u=t(5900);function p(e){if(!Number.isInteger(e))throw new TypeError("minorScale only accepts integers as input, instead ".concat(e," was passed."));return 4*e}var f=t(9433),l=["children","icon","iconColor","size"];function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var O=(0,i.memo)((0,i.forwardRef)((function(e,r){var t,n,a,s=e.children,v=e.icon,y=e.iconColor,O=e.size,b=(0,c.Z)(e,l);300===O&&(t=p(1)),400===O&&(t=p(2)),500===O&&(t=p(2)),600===O&&(t=p(3)),300===O&&(n=1),400===O&&(n=3),500===O&&(n=3),600===O&&(n=4),300===O&&(a=12),400===O&&(a=14),500===O&&(a=14),600===O&&(a=16);var m=-a-4;return 600===O&&(m=-a),i.createElement(f.Z,(0,o.Z)({is:"li",position:"relative",marginY:"0.5em",size:O,listStyleType:v?"none":void 0,paddingLeft:v?t:void 0,ref:r},b),v&&i.createElement(u.a,{icon:v,color:y,position:"absolute",size:a,left:m,top:n}),s)})));O.propTypes=y(y({},f.Z.propTypes),{},{icon:s().oneOfType([s().elementType,s().element]),iconColor:s().string});var b=O},313:function(e,r,t){t.d(r,{Z:function(){return P}});var n=t(7462),o=t(4942),c=t(4925),i=t(2791),a=t(1694),s=t.n(a),u=t(2007),p=t.n(u),f=t(8246),l=t.n(f),v=t(1629);function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var b=["children","className","icon","iconColor","size"],m=["className"];function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g={},w={margin:0,marginLeft:"1.1em",padding:0,listStyle:"disc"},j=(0,i.memo)((0,i.forwardRef)((function(e,r){var t=e.children,o=e.className,a=e.icon,u=e.iconColor,p=e.size,f=void 0===p?400:p,y=(0,c.Z)(e,b),d=(0,v.m)("List",{size:f},g,w),j=d.className,P=(0,c.Z)(d,m),Z=i.Children.map(t,(function(e){return i.isValidElement(e)?i.cloneElement(e,function(){var e=O({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{});return Object.keys(e).forEach((function(r){void 0===e[r]&&delete e[r]})),e}(h({icon:a,size:f,iconColor:u},e.props))):e}));return i.createElement(l(),(0,n.Z)({is:"ul",className:s()(o,j)},P,y,{ref:r}),Z)})));j.propTypes=h(h({},l().propTypes),{},{size:p().oneOf([300,400,500,600]),icon:p().oneOfType([p().elementType,p().element]),iconColor:p().string});var P=j}}]);
//# sourceMappingURL=797.b451c577.chunk.js.map