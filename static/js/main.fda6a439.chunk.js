(window["webpackJsonpreact-hooks-todoapp"]=window["webpackJsonpreact-hooks-todoapp"]||[]).push([[0],[,,,,,function(e,t,o){e.exports=o(12)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(4),c=o.n(r),i=(o(10),o(2)),l=o(1);function d(e){var t=e.addTodo,o=Object(n.useState)(""),r=Object(l.a)(o,2),c=r[0],i=r[1];return a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c&&(t(c),i(""))}},a.a.createElement("input",{type:"text",className:"input",value:c,placeholder:"Add Todo",onChange:function(e){return i(e.target.value)}}))}var u=function(e){var t=e.todo,o=e.index,n=e.completeTodo,r=e.removeTodo;return a.a.createElement("div",{className:"todo",style:{textDecoration:t.isCompleted?"line-through":""}},t.text,a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return n(o)}},"Complete"),a.a.createElement("button",{onClick:function(){return r(o)}},"x")))};o(11);var m=function(){var e=Object(n.useState)([{text:"Learn about React",isCompleted:!1},{text:"Meet friend for lunch",isCompleted:!1},{text:"Build really cool todo app",isCompleted:!1}]),t=Object(l.a)(e,2),o=t[0],r=t[1],c=function(e){var t=Object(i.a)(o);t[e].isCompleted=!0,r(t)},m=function(e){var t=Object(i.a)(o);t.splice(e,1),r(t)};return a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"todo-list"},o.map(function(e,t){return a.a.createElement(u,{key:t,index:t,todo:e,completeTodo:c,removeTodo:m})}),a.a.createElement(d,{addTodo:function(e){var t=[].concat(Object(i.a)(o),[{text:e}]);r(t)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.fda6a439.chunk.js.map