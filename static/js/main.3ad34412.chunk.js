(this["webpackJsonpreact-agenda"]=this["webpackJsonpreact-agenda"]||[]).push([[0],{13:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(6),c=t.n(r),o=t(7),s=t(1),m=function(){return n.a.createElement("header",null,n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},n.a.createElement("a",{className:"navbar-brand",href:"!#"},"Navbar"),n.a.createElement("button",{className:"navbar-toggler d-lg-none",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation"}),n.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavId"},n.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement("a",{className:"nav-link",href:"!#"},"Home ",n.a.createElement("span",{className:"sr-only"},"(current)"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"!#"},"Link")),n.a.createElement("li",{className:"nav-item dropdown"},n.a.createElement("a",{className:"nav-link dropdown-toggle",href:"!#",id:"dropdownId","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Dropdown"),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownId"},n.a.createElement("a",{className:"dropdown-item",href:"!#"},"Action 1"),n.a.createElement("a",{className:"dropdown-item",href:"!#"},"Action 2")))),n.a.createElement("form",{className:"form-inline my-2 my-lg-0"},n.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search"}),n.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")))))},i=t(4),d=t(15),u=function(e){var a=e.agregarContacto,t=Object(l.useState)({nombres:"",apellidos:"",fechaNac:"",direccion:"",telCasa:"",telCelular:"",observaciones:""}),r=Object(s.a)(t,2),c=r[0],o=r[1],m=Object(l.useState)(!1),u=Object(s.a)(m,2),p=u[0],E=u[1],b=function(e){var a=Object(i.a)({},c);a[e.target.name]=e.target.value,o(a)};return n.a.createElement(l.Fragment,null,n.a.createElement("form",{className:"row",onSubmit:function(e){e.preventDefault();var t=c.nombres,l=c.apellidos,n=c.fechaNac,r=c.telCelular,s=c.direccion,m=c.observaciones,u=c.telCasa;if(""!==t.trim()&&""!==l.trim()&&""!==n.trim()&&""!==r.trim()&&""!==s.trim()&&""!==m.trim()&&""!==u.trim()){E(!1);var p=Object(i.a)({},c);p.id=Object(d.a)(),a(p),o({nombres:"",apellidos:"",fechaNac:"",direccion:"",telCasa:"",telCelular:"",observaciones:""})}else E(!0)}},p?n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},n.a.createElement("strong",null,"Error!")," Todos los campos, deben estar debidamente llenados")):null,n.a.createElement("div",{className:"form-group col-md-3"},n.a.createElement("label",{htmlFor:"inputNombre"},"Nombres:"),n.a.createElement("input",{type:"text",id:"inputNombre",className:"form-control",name:"nombres",onChange:b,value:c.nombres})),n.a.createElement("div",{className:"form-group col-md-3"},n.a.createElement("label",{htmlFor:"inputApellidos"},"Apellidos:"),n.a.createElement("input",{type:"text",id:"inputApellidos",className:"form-control",name:"apellidos",onChange:b,value:c.apellidos})),n.a.createElement("div",{className:"form-group col-md-3"},n.a.createElement("label",{htmlFor:"inputFecha"},"Fecha de Nacimiento:"),n.a.createElement("input",{type:"date",id:"inputFecha",className:"form-control",name:"fechaNac",onChange:b,value:c.fechaNac})),n.a.createElement("div",{className:"form-group col-md-3"},n.a.createElement("label",{htmlFor:"inputDireccion"},"Direcci\xf3n:"),n.a.createElement("input",{type:"text",id:"inputDireccion",className:"form-control",name:"direccion",onChange:b,value:c.direccion})),n.a.createElement("div",{className:"form-group col-md-3"},n.a.createElement("label",{htmlFor:"inputTelCasa"},"Tel\xe9fono de Casa:"),n.a.createElement("input",{type:"text",id:"inputTelCasa",className:"form-control",name:"telCasa",onChange:b,value:c.telCasa})),n.a.createElement("div",{className:"form-group col-md-3"},n.a.createElement("label",{htmlFor:"inputTelCelular"},"Telefono Celular:"),n.a.createElement("input",{type:"text",id:"inputTelCelular",className:"form-control",name:"telCelular",onChange:b,value:c.telCelular})),n.a.createElement("div",{className:"form-group col-md-6"},n.a.createElement("label",{htmlFor:"inputObservaciones"},"Observaciones:"),n.a.createElement("textarea",{cols:"30",id:"inputObservaciones",rows:"2",className:"form-control",name:"observaciones",onChange:b,value:c.observaciones})),n.a.createElement("div",{className:"form-group col-12"},n.a.createElement("button",{type:"submit",className:"btn btn-block btn-outline-primary"},"Agregar Contacto"))))},p=function(e){var a=e.contacto,t=e.setContactoSelec;return n.a.createElement("li",{className:"list-group-item",onClick:function(){t(a)}},n.a.createElement("img",{src:"https://api.adorable.io/avatars/45/abott@adorable.png",className:"rounded-circle",alt:""}),n.a.createElement("span",{className:"ml-5"},a.nombres," ",a.apellidos))},E=function(e){var a=e.contactos,t=e.setContactoSelec;return n.a.createElement("ul",{className:"list-group list-group-flush"},a.map((function(e){return n.a.createElement(p,{contacto:e,setContactoSelec:t})})))},b=function(e){var a=e.contactoselec;return n.a.createElement("div",{className:"card shadow"},n.a.createElement("div",{className:"card-header bg-dark"},n.a.createElement("h3",{className:"card-title text-center text-light"},"Informaci\xf3n de Contacto")),n.a.createElement("div",{className:"card-body"},a.nombres?n.a.createElement(l.Fragment,null,n.a.createElement("img",{src:"https://api.adorable.io/avatars/150/abott@adorable.png",alt:"",className:"rounded-circle d-block m-auto"}),n.a.createElement("p",{className:"card-text"},n.a.createElement("strong",null,"Nombres: "),a.nombres),n.a.createElement("p",{className:"card-text"},n.a.createElement("strong",null,"Apellidos: "),a.apellidos),n.a.createElement("p",{className:"card-text"},n.a.createElement("strong",null,"Fecha de Nacimiento: "),a.fechaNac),n.a.createElement("p",{className:"card-text"},n.a.createElement("strong",null,"Direcci\xf3n: ")," ",a.direccion),n.a.createElement("p",{className:"card-text"},n.a.createElement("strong",null,"Tel\xe9fono de casa: "),a.telCasa),n.a.createElement("p",{className:"card-text"},n.a.createElement("strong",null,"Tel\xe9fono celular: "),a.telCelular),n.a.createElement("p",{className:"card-text"},n.a.createElement("strong",null,"Observaciones: "),a.observaciones)):n.a.createElement("p",{className:"card-text text-center"}," ","=("," No has seleccionado ning\xfan contacto.")))};var N=function(){var e=JSON.parse(localStorage.getItem("contactos"));e||(e=[]);var a=Object(l.useState)(e),t=Object(s.a)(a,2),r=t[0],c=t[1],i=Object(l.useState)({}),d=Object(s.a)(i,2),p=d[0],N=d[1];return n.a.createElement(l.Fragment,null,n.a.createElement(m,null),n.a.createElement("main",{className:"container-fluid"},n.a.createElement("h1",{className:"display-3 text-center"},"Agenda",n.a.createElement("span",{className:"text-danger"},"APP")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement(u,{agregarContacto:function(e){var a=[].concat(Object(o.a)(r),[e]);localStorage.setItem("contactos",JSON.stringify(a)),c(a)}}))),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(E,{contactos:r,setContactoSelec:N})),n.a.createElement("div",{className:"col-md-6"},n.a.createElement(b,{contactoselec:p})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.3ad34412.chunk.js.map