(this["webpackJsonpconcurrent-mode"]=this["webpackJsonpconcurrent-mode"]||[]).push([[0],[,,,function(e,n,t){e.exports=t(10)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),c=t(2),a=t.n(c),l=(t(8),t(9),function(){return r.a.createElement("div",{className:"lds-ripple"},r.a.createElement("div",null),r.a.createElement("div",null))}),i=function(e){var n,t="pending",o=e.then((function(e){t="success",n=e})).catch((function(e){t="error",n=e}));return{read:function(){if("pending"===t)throw o;if("error"===t)throw n;if("success"===t)return n}}},s=function(){var e=(console.log("fetching user"),fetch("https://jsonplaceholder.typicode.com/users/1").then((function(e){return e.json()})).catch((function(e){return console.trace(e)}))),n=(console.log("fetching posts"),fetch("https://jsonplaceholder.typicode.com/posts?_limit=10").then((function(e){return e.json()})).catch((function(e){return console.trace(e)})));return{user:i(e),posts:i(n)}}(),u=r.a.lazy((function(){return t.e(4).then(t.bind(null,11))})),f=r.a.lazy((function(){return t.e(3).then(t.bind(null,12))})),h=function(){return r.a.createElement("div",{className:"container my-5"},r.a.createElement(o.Suspense,{fallback:r.a.createElement(l,null)},r.a.createElement(u,{resource:s})),r.a.createElement(o.Suspense,{fallback:r.a.createElement(l,null)},r.a.createElement(f,{resource:s})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.createRoot(document.getElementById("root")).render(r.a.createElement(h,null)),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[3,1,2]]]);
//# sourceMappingURL=main.38177831.chunk.js.map