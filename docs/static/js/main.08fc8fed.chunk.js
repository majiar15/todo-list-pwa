(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),r=n(8),i=n.n(r),a=n(4),s=n(2),l=n(9),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(l.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":case"toggle-old":return e.map((function(e){return e.id===t.payload?Object(s.a)(Object(s.a)({},e),{},{done:!e.done}):e}));default:return e}},u=n(6),h=(n(14),n(0)),g=function(e){var t=e.todo,n=e.index,o=e.handleToggle,c=e.handleDelete;return Object(h.jsxs)("li",{className:"list-group-item",children:[Object(h.jsxs)("p",{className:"".concat(t.done&&"complete"),onClick:function(){o(t.id)},children:[" ",n+1,".",t.desc]}),Object(h.jsx)("button",{onClick:function(){c(t.id)},className:"btn btn-danger",children:"Borrar"})]})},f=function(e){var t=e.todos,n=e.handleDelete,o=e.handleToggle;return Object(h.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(e,t){return Object(h.jsx)(g,{todo:e,index:t,handleDelete:n,handleToggle:o},e.id)}))})},j=function(){return JSON.parse(localStorage.getItem("todos"))||[]},b=function(){var e=Object(o.useReducer)(d,[],j),t=Object(a.a)(e,2),n=t[0],c=t[1],r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(o.useState)(e),n=Object(a.a)(t,2),c=n[0],r=n[1];return[c,function(e){var t=e.target;r(Object(s.a)(Object(s.a)({},c),{},Object(u.a)({},t.name,t.value)))},function(){r(e)}]}({description:""}),i=Object(a.a)(r,3),l=i[0].description,g=i[1],b=i[2];Object(o.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h1",{children:["CositasApp (",n.length,")"]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-7 mb-5",children:Object(h.jsx)(f,{todos:n,handleDelete:function(e){c({type:"delete",payload:e})},handleToggle:function(e){c({type:"toggle",payload:e})}})}),Object(h.jsxs)("div",{className:"col-md-5 ",children:[Object(h.jsx)("h4",{children:"Agregar Cositas Por Hacer"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!(l.trim().length<=1)){var t={id:(new Date).getTime(),desc:l,done:!1};c({type:"add",payload:t}),b(),console.log(n)}},children:[Object(h.jsx)("input",{type:"text",name:"description",className:"form-control",value:l,onChange:g,placeholder:"Aprender ...",autoComplete:"off"}),Object(h.jsx)("div",{className:"d-grid gap-2",children:Object(h.jsx)("button",{type:"submit",className:"btn btn-outline-primary mt-1 btn-block",children:"Agregar"})})]})]})]})]})},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):v(t,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.08fc8fed.chunk.js.map