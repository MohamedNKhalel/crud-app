"use strict";(self.webpackChunkuser=self.webpackChunkuser||[]).push([[732],{9732:(f,g,a)=>{a.r(g),a.d(g,{BlankComponent:()=>m});var r=a(6814),s=a(8437),c=a(32),d=a(9862),i=a(5717),t=a(8926),h=a(9515);let p=(()=>{class e{constructor(n){this._AuthService=n,this.lang=""}ngOnInit(){this.lang=localStorage.getItem("language")}logout(){this._AuthService.logout()}changeLanguage(){"en"==localStorage.getItem("language")?localStorage.setItem("language","ar"):localStorage.setItem("language","en"),window.location.reload()}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(c.e))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-nav-blank"]],standalone:!0,features:[t._Bn([c.e]),t.jDz],decls:20,vars:7,consts:[[1,"navbar","navbar-expand-sm","navbar-light","bg-light"],[1,"container","d-flex"],[1,"navbar-brand","text-danger","text-uppercase","fw-bolder"],[1,"fa","fa-tasks","me-1"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapsibleNavId","aria-controls","collapsibleNavId","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","d-lg-none"],[1,"navbar-toggler-icon"],["id","collapsibleNavId",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mt-2","mt-lg-0"],[1,"nav-item"],["routerLinkActive","bg-main","routerLink","home",1,"nav-link"],[1,"navbar-nav","ms-auto","mt-2","mt-lg-0"],[1,"nav-item","d-flex"],[1,"nav-link","cursor-pointer",3,"click"],[1,"nav-link","text-primary","cursor-pointer",3,"click"]],template:function(o,u){1&o&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),t._UZ(3,"i",3),t._uU(4,"Crud"),t.qZA(),t.TgZ(5,"button",4),t._UZ(6,"span",5),t.qZA(),t.TgZ(7,"div",6)(8,"ul",7)(9,"li",8)(10,"a",9),t._uU(11),t.ALo(12,"translate"),t.qZA()()(),t.TgZ(13,"ul",10)(14,"li",11)(15,"a",12),t.NdJ("click",function(){return u.logout()}),t._uU(16),t.ALo(17,"translate"),t.qZA(),t.TgZ(18,"a",13),t.NdJ("click",function(){return u.changeLanguage()}),t._uU(19),t.qZA()()()()()()),2&o&&(t.xp6(11),t.Oqu(t.lcZ(12,3,"navbar.alltasks")),t.xp6(5),t.Oqu(t.lcZ(17,5,"navbar.logout")),t.xp6(3),t.Oqu("en"==u.lang?"\u0639\u0631\u0628\u064a":"English"))},dependencies:[d.JF,r.ez,s.rH,s.Od,i.m,h.X$]})}return e})(),m=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-blank"]],standalone:!0,features:[t.jDz],decls:3,vars:0,consts:[[1,"container","my-auto"]],template:function(o,u){1&o&&(t._UZ(0,"app-nav-blank"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet"),t.qZA())},dependencies:[r.ez,s.lC,p],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100vh;background-color:beige}"]})}return e})()},5717:(f,g,a)=>{a.d(g,{m:()=>d});var r=a(6814),s=a(9515),c=a(8926);let d=(()=>{class i{static#t=this.\u0275fac=function(p){return new(p||i)};static#e=this.\u0275mod=c.oAB({type:i});static#a=this.\u0275inj=c.cJS({imports:[r.ez,s.aw.forChild({extend:!0}),s.aw]})}return i})()},32:(f,g,a)=>{a.d(g,{e:()=>m});class r extends Error{}r.prototype.name="InvalidTokenError";var i=a(5619),t=a(8926),h=a(9862),p=a(8437);let m=(()=>{class e{constructor(n,o){this._HttpClient=n,this._Router=o,this.userData=new i.X(null),this.baseUrl="https://crud-8xac.onrender.com"}loginApi(n){return this._HttpClient.post(`${this.baseUrl}/auth/login`,n)}registerApi(n){return this._HttpClient.post(`${this.baseUrl}/auth/createAccount`,n)}logout(){localStorage.removeItem("userToken"),localStorage.removeItem("language"),this._Router.navigate(["/login"])}getUserData(){this.userData.next(localStorage.getItem("userToken")),this.userData.next(function d(e,l){if("string"!=typeof e)throw new r("Invalid token specified: must be a string");l||(l={});const n=!0===l.header?0:1,o=e.split(".")[n];if("string"!=typeof o)throw new r(`Invalid token specified: missing part #${n+1}`);let u;try{u=function c(e){let l=e.replace(/-/g,"+").replace(/_/g,"/");switch(l.length%4){case 0:break;case 2:l+="==";break;case 3:l+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function s(e){return decodeURIComponent(atob(e).replace(/(.)/g,(l,n)=>{let o=n.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}(l)}catch{return atob(l)}}(o)}catch(v){throw new r(`Invalid token specified: invalid base64 for part #${n+1} (${v.message})`)}try{return JSON.parse(u)}catch(v){throw new r(`Invalid token specified: invalid json for part #${n+1} (${v.message})`)}}(this.userData.getValue())),console.log(this.userData.getValue())}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(h.eN),t.LFG(p.F0))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()}}]);