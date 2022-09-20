(window["webpackJsonpmy-app2"]=window["webpackJsonpmy-app2"]||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(6),a(1));a(7);function o(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{className:"navbar-brand  ",href:"#"},e.title),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active ","aria-current":"page",href:"#"},"Home"))),r.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},r.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode")))))}function c(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},r.a.createElement("h2",null,e.heading),r.a.createElement("div",{className:"mb-3"},r.a.createElement("textarea",{className:"form-control",value:o,onChange:function(e){console.log("On changed"),c(e.target.value)},style:{backgroudColor:"dark"===e.mode?"grey":"white"},id:"myBox",rows:"5"})),r.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=o.toUpperCase();c(t),e.showAlert("Converted to uppercase!","success")}},"Convert to uppercase"),r.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=o.toLowerCase();c(t),e.showAlert("Converted to lowercase!","success")}},"Convert to Lowercase"),r.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){c(""),e.showAlert("Text cleard!","success")}},"Clear Text"),r.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text copied to clipboard!","success")}},"Copy Text"),r.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=o.split(/[ ]+/);c(t.join(" ")),e.showAlert("Extra space removed!","success")}},"Remove Extra Spaces")),r.a.createElement("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"#042743"}},r.a.createElement("h2",null,"Your text summary"),r.a.createElement("p",null,o&&0!==o.trim().length?o.split(" ").length:0," words and  ",o.length," characters "),r.a.createElement("p",null," ",.008*o.split(" ").length," Minutes To read"),r.a.createElement("h3",null,"Preview"),r.a.createElement("p",null,o.length>0?o:"Enter something in textbox to preview it here")))}o.defaultProps={title:"set title here",aboutText:"About text here"};var s=function(e){return e.alert&&r.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},r.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type))," :",e.alert.msg)};var m=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),a=t[0],m=t[1],i=Object(n.useState)(null),u=Object(l.a)(i,2),d=u[0],b=u[1],p=function(e,t){b({msg:e,type:t}),setTimeout((function(){b(null)}),2e3)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{title:"MyApp",aboutText:"About MyApp",mode:a,toggleMode:function(){"light"===a?(m("dark"),document.body.style.backgroundColor="#042743",p("Dark Mode has been Enabled","success"),document.title="MyApp - Dark Mode"):(m("light"),document.body.style.backgroundColor="white",p("Light Mode has been Enabled","success"),document.title="MyApp - Light Mode")}}),r.a.createElement(s,{alert:d}),r.a.createElement("div",{className:"container my-3"},r.a.createElement(c,{showAlert:p,heading:"Enter The text to analyze below",mode:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(3),u=document.getElementById("root");Object(i.createRoot)(u).render(r.a.createElement(m,null)),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,a){e.exports=a(15)},6:function(e,t,a){},7:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.40dd7968.chunk.js.map