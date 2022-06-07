/*! For license information please see main.9b8f57ad.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{117:function(e,t,a){e.exports=a(148)},122:function(e,t,a){},123:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),l=a.n(o),c=(a(122),a(123),a(49)),i=a(8),u=a(92),s=a(6),d=a(177),m=a(187),h=a(182),f=a(96),p=a(186),g=a(174),v=a(190),y=a(184),b=a(180),E=a(181),w=a(91),O=a.n(w),j=a(178),x=a(189),N=a(87),S=a.n(N).a.create({baseURL:"https://find-my-patient-8370f-default-rtdb.firebaseio.com/"}),P=[{nameTag:"",password:""}],L=function(e){var t=e.handleChange,a=Object(i.f)(),o=Object(n.useState)(),l=Object(s.a)(o,2),c=l[0],u=l[1],m=Object(n.useState)(),h=Object(s.a)(m,2),p=h[0],w=h[1],N=Object(n.useState)(),L=Object(s.a)(N,2),k=L[0],C=L[1],B=Object(n.useState)(!1),D=Object(s.a)(B,2),A=D[0],_=D[1],G=Object(n.useState)(localStorage.getItem("password")),I=Object(s.a)(G,2),W=I[0],F=I[1],H=Object(n.useState)(localStorage.getItem("userName")),M=Object(s.a)(H,2),q=M[0],T=M[1],U=0;return r.a.createElement(g.a,null,r.a.createElement(d.a,{style:{padding:20,width:300,margin:"0 auto"}},r.a.createElement(g.a,{align:"center"},r.a.createElement(v.a,{style:{backgroundColor:"#1bbd7e"}},r.a.createElement(O.a,null)),r.a.createElement("h2",null,"Sign In")),r.a.createElement("div",{className:"center"},k),r.a.createElement(y.a,{label:"Username",error:p,placeholder:"Enter username",value:q,name:"{userName}",fullWidth:!0,onChange:function(e){T(e.target.value)},required:!0}),p,r.a.createElement(y.a,{label:"Password",error:c,placeholder:"Enter password",value:W,name:"{password}",onChange:function(e){F(e.target.value)},type:"password",fullWidth:!0,required:!0}),c,r.a.createElement(j.a,{control:r.a.createElement(x.a,{name:"checkedA",onChange:function(){_(!A)}}),label:"Remember me"}),r.a.createElement(b.a,{onClick:function(){q.length<3&&(P.nameTag="Invalid Name"),""===q?w(!0):q.length<3?w(r.a.createElement("div",{style:{color:"red"}},"Name must have atleast 3 characters")):Number.isNaN(Number(q))?(w(""),U=1):w(r.a.createElement("div",{style:{color:"red"}},"Name should not be a number")),""===W?u(!0):W.length<6?u(r.a.createElement("div",{style:{color:"red"}},"Password must have atleast 6 characters")):(u(""),U+=1),U>=2?S.get("/results.json").then((function(e){for(var t in e.data)e.data[t].userName===q&&e.data[t].password===W&&(C(r.a.createElement("div",{style:{color:"green"}},"Successfully Logged ")),!0===A?(localStorage.setItem("userName",q),localStorage.setItem("password",W)):(localStorage.setItem("userName",""),localStorage.setItem("password","")),localStorage.setItem("PatientName",q),localStorage.setItem("PatientPassword",W),document.getElementById("background-image").style.backgroundImage="",a("/Find-My-Patient/patient"));C(r.a.createElement("div",{style:{color:"red"}},"Invalid Username or Password"))})).catch((function(){C(r.a.createElement("div",{colSpan:10,style:{textAlign:"center",color:"red",fontSize:"20px"}},"Something went wrong!!!"))})):C("")},type:"submit",color:"primary",variant:"contained",style:{margin:"8px 0"},fullWidth:!0},"Sign in"),r.a.createElement(f.a,null," ","Do you have an account ?",r.a.createElement(E.a,{href:"#",onClick:function(){t("event",1)}},"Sign Up"))))},k=a(61),C=a.n(k),B=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(),c=Object(s.a)(l,2),i=c[0],u=c[1],m=Object(n.useState)(),h=Object(s.a)(m,2),p=h[0],E=h[1],w=Object(n.useState)(),O=Object(s.a)(w,2),N=O[0],P=O[1],L=Object(n.useState)(),k=Object(s.a)(L,2),B=k[0],D=k[1],A=Object(n.useState)(),_=Object(s.a)(A,2),G=_[0],I=_[1],W=Object(n.useState)(null),F=Object(s.a)(W,2),H=F[0],M=F[1],q=Object(n.useState)(""),T=Object(s.a)(q,2),U=T[0],V=T[1],Y=Object(n.useState)(""),z=Object(s.a)(Y,2),R=z[0],J=z[1],K=Object(n.useState)(""),Q=Object(s.a)(K,2),X=Q[0],$=Q[1],Z=0,ee=function(e){var t={userName:R,password:U,phone:X};Z<=3?u(r.a.createElement("div",{style:{color:"red"}},"Please accept the terms & conditions")):Z>=4?!1===G?u(r.a.createElement("div",{style:{color:"red"}},"Please accept the terms & conditions")):S.get("/results.json").then((function(a){for(var n in a.data)if(a.data[n].phone===X)return D(r.a.createElement("div",{style:{color:"red"}},"User already exists  ")),void e.preventDefault();S.post("/results.json",t).then((function(){D(r.a.createElement("div",{style:{color:"green"}},"Successfully Signed up "))}))})).catch((function(){D(r.a.createElement("div",{colSpan:10,style:{textAlign:"center",color:"red",fontSize:"20px"}},"Something went wrong!!!"))})):D(""),G&&u("")};return r.a.createElement(g.a,{Onsubmit:ee},r.a.createElement(d.a,{style:{padding:20,width:300,margin:"0 auto"}},r.a.createElement(g.a,{align:"center"},r.a.createElement(v.a,{style:{backgroundColor:"#1bbd7e"}},r.a.createElement(C.a,null)),r.a.createElement("h2",{style:{margin:0}},"Sign Up"),B,r.a.createElement(f.a,{variant:"caption",gutterBottom:!0},"Please fill this form to create an account !")),r.a.createElement("form",null,r.a.createElement(y.a,{fullWidth:!0,label:"Name",name:"userName",error:a,onChange:function(e){J(e.target.value)},placeholder:"Enter your name"}),a,r.a.createElement(y.a,{fullWidth:!0,label:"Phone Number",name:"phone",error:p,onChange:function(e){$(e.target.value)},placeholder:"Enter your phone number"}),p,r.a.createElement(y.a,{fullWidth:!0,label:"Password",name:"password",error:N,onChange:function(e){V(e.target.value)},placeholder:"Enter your password",type:"password"}),r.a.createElement(y.a,{fullWidth:!0,label:"Confirm Password",name:"passwordSecond",error:N,onChange:function(e){M(e.target.value)},placeholder:"Confirm your password",type:"password"}),N,r.a.createElement(j.a,{control:r.a.createElement(x.a,{name:"checkedA",onChange:function(){I(!0)},checked:G}),label:"I accept the terms and conditions."}),i,r.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),""===R?o(!0):R.length<3?o(r.a.createElement("div",{style:{color:"red"}},"Name must have atleast 3 characters")):Number.isNaN(Number(R))?(o(""),Z=1):o(r.a.createElement("div",{style:{color:"red"}},"Name should not be a number")),""===X?E(!0):10!==X.length?E(r.a.createElement("div",{style:{color:"red"}},"Please provide 10 digits phone number")):Number.isNaN(Number(X))&&10===X.length?E(r.a.createElement("div",{style:{color:"red"}},"Phone No.should be a number")):(E(""),Z+=1),""===U||""===H?P(!0):U.length<6?P(r.a.createElement("div",{style:{color:"red"}},"Password must have atleast 6 characters")):U!==H?P(r.a.createElement("div",{style:{color:"red"}},"Password is not matching")):(P(""),Z+=1),3===Z&&!0===G&&(Z+=1),ee(e)},fullWidth:!0},"Sign up"))))},D=["children","value","index"],A=function(){document.getElementById("background-image").style.backgroundImage="url(https://t4.ftcdn.net/jpg/00/83/83/63/240_F_83836356_nfYi9d7pg9qFHrQKcAX61MNrSP4dOdW2.jpg)",document.getElementById("background-image").style.opacity="0.9";var e=Object(n.useState)(0),t=Object(s.a)(e,2),a=t[0],o=t[1],l=function(e,t){o(t)};function c(e){var t=e.children,a=e.value,n=e.index,o=Object(u.a)(e,D);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},o),a===n&&r.a.createElement(p.a,null,r.a.createElement(f.a,null,t)))}return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(d.a,{elevation:20,style:{width:340,margin:"20px auto"}},r.a.createElement(m.a,{value:a,indicatorColor:"primary",textColor:"primary",onChange:l,"aria-label":"disabled tabs example"},r.a.createElement(h.a,{label:"Sign In"}),r.a.createElement(h.a,{label:"Sign Up"})),r.a.createElement(c,{value:a,index:0},r.a.createElement(L,{handleChange:l})),r.a.createElement(c,{value:a,index:1},r.a.createElement(B,null)))))},_=a(62),G=(a(86),a(192)),I=a(63),W=a(19),F=a(183),H=(a(145),[{value:"A+",label:"A+"},{value:"A-",label:"A-"},{value:"AB+",label:"AB+"},{value:"AB-",label:"AB-"},{value:"B+",label:"B+"},{value:"B-",label:"B-"},{value:"O+",label:"O+"},{value:"O-",label:"O-"}]),M=[{value:"male",label:"Male"},{value:"female",label:"Female"},{value:"others",label:"Others"}],q=function(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(),c=Object(s.a)(l,2),i=c[0],u=c[1],m=Object(n.useState)(),h=Object(s.a)(m,2),p=h[0],E=h[1],w=Object(n.useState)(),O=Object(s.a)(w,2),j=O[0],x=O[1],N=Object(n.useState)(),P=Object(s.a)(N,2),L=P[0],k=P[1],B=Object(n.useState)(),D=Object(s.a)(B,2),A=D[0],_=D[1],q=Object(n.useState)(),T=Object(s.a)(q,2),U=T[0],V=T[1],Y=Object(n.useState)(new Date),z=Object(s.a)(Y,2),R=z[0],J=z[1],K=Object(n.useState)(""),Q=Object(s.a)(K,2),X=Q[0],$=Q[1],Z=Object(n.useState)(""),ee=Object(s.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(""),re=Object(s.a)(ne,2),oe=re[0],le=re[1],ce=Object(n.useState)(""),ie=Object(s.a)(ce,2),ue=ie[0],se=ie[1],de=Object(n.useState)(""),me=Object(s.a)(de,2),he=me[0],fe=me[1],pe=Object(n.useState)(""),ge=Object(s.a)(pe,2),ve=ge[0],ye=ge[1];return r.a.createElement(g.a,{align:"center"},r.a.createElement(d.a,{style:{padding:20,width:300,margin:"0 auto",backgroundColor:"rgba(239, 237, 236, 0.5)",boxShadow:"1px 5px 10px black"},className:"popup"},r.a.createElement(g.a,{align:"center"},r.a.createElement(v.a,{style:{backgroundColor:"#1bbd7e"}},r.a.createElement(C.a,null)),r.a.createElement("h2",{style:{margin:0}},"Add Patient"),U,r.a.createElement(f.a,{variant:"caption",gutterBottom:!0})),r.a.createElement("form",null,r.a.createElement(y.a,{fullWidth:!0,required:!0,label:"Name",error:L,name:"PatientName",onChange:function(e){$(e.target.value)},placeholder:"Enter your name"}),r.a.createElement(y.a,{fullWidth:!0,required:!0,error:A,label:"Phone Number",name:"PatientPhone",onChange:function(e){ae(e.target.value)},placeholder:"Enter your phone number"}),A,r.a.createElement(W.a,{utils:I.a},r.a.createElement(F.a,{required:!0,value:R,format:"dd/MM/yyyy",onChange:function(e){J(e)},label:"Birth Date",showTodayButton:!0,fullWidth:!0,error:j})),r.a.createElement(y.a,{fullWidth:!0,required:!0,id:"gender",select:!0,label:"Gender",value:ve,onChange:function(e){ye(e.target.value)},variant:"standard",align:"left",error:p},M.map((function(e){return r.a.createElement(G.a,{key:e.value,value:e.value},e.label)}))),r.a.createElement("br",null),r.a.createElement(y.a,{fullWidth:!0,required:!0,id:"blood",select:!0,label:"Blood Group",value:he,onChange:function(e){fe(e.target.value)},variant:"standard",align:"left",error:i},H.map((function(e){return r.a.createElement(G.a,{key:e.value,value:e.value},e.label)}))),r.a.createElement(y.a,{fullWidth:!0,label:"Address",id:"address",onChange:function(e){se(e.target.value)},type:"text"}),r.a.createElement(y.a,{fullWidth:!0,error:a,required:!0,label:"Disease Name",id:"disease",onChange:function(e){le(e.target.value)},type:"text"}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"caption",gutterBottom:!0},r.a.createElement("br",null)),r.a.createElement(b.a,{type:"submit",variant:"contained",color:"primary",onClick:function(e){!function(e){var t=1;if(e.preventDefault(),""===X?(t=0,k(r.a.createElement("div",{style:{color:"red"}},"Name is required"))):X.length<3?(t=0,k(r.a.createElement("div",{style:{color:"red"}},"Name must have atleast 3 characters"))):Number.isNaN(Number(X))?k(""):(t=0,k(r.a.createElement("div",{style:{color:"red"}},"Name should not be a number"))),""===te?(t=0,_(!0)):10!==te.length?(t=0,_(r.a.createElement("div",{style:{color:"red"}},"Please provide 10 digits phone number"))):Number.isNaN(Number(te))&&10===te.length?(t=0,_(r.a.createElement("div",{style:{color:"red"}},"Phone No.should be a number"))):_(""),0===oe.length?(t=0,o(!0)):o(""),""===R?(t=0,x(!0)):x(""),""===ve?(t=0,E(!0)):E(""),""===he?(t=0,u(!0)):u(""),1===t){var a="".concat(String(R.getDate()),"-").concat(String(parseInt(R.getMonth())+1),"-").concat(String(R.getFullYear())),n={PatientName:X,PatientPhone:te,Address:ue,gender:ve,DateOfBirth:a,bloodGroup:he,Disease:oe};S.get("/patients.json").then((function(t){for(var a in t.data)if(t.data[a].phone===te)return V(r.a.createElement("div",{style:{color:"red"}},"User already exists  ")),void e.preventDefault();S.post("/patients.json",n).then((function(){V(r.a.createElement("div",{style:{color:"green"}},"Successfully Added "))})).catch((function(){V(r.a.createElement("div",{style:{color:"red"}},"Sorry... Something went wrong"))}))})).catch((function(){V(r.a.createElement("div",{colSpan:"10",style:{textAlign:"center",color:"red",fontSize:"20px"}},"Something went wrong!!!"))}))}}(e)}},"Add"))))},T=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Home Content"),"Hii"," ",localStorage.getItem("PatientName"),".!",r.a.createElement("br",null),"Here You can add and update patient details.")};function U(){U=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,a){return e[t]=a}}function i(e,t,a,n){var r=t&&t.prototype instanceof d?t:d,o=Object.create(r.prototype),l=new j(n||[]);return o._invoke=function(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return N()}for(a.method=r,a.arg=o;;){var l=a.delegate;if(l){var c=E(l,a);if(c){if(c===s)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var i=u(e,t,a);if("normal"===i.type){if(n=a.done?"completed":"suspendedYield",i.arg===s)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(n="completed",a.method="throw",a.arg=i.arg)}}}(e,a,l),o}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(S){return{type:"throw",arg:S}}}e.wrap=i;var s={};function d(){}function m(){}function h(){}var f={};c(f,r,(function(){return this}));var p=Object.getPrototypeOf,g=p&&p(p(x([])));g&&g!==t&&a.call(g,r)&&(f=g);var v=h.prototype=d.prototype=Object.create(f);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(r,o){function l(){return new t((function(n,l){!function n(r,o,l,c){var i=u(e[r],e,o);if("throw"!==i.type){var s=i.arg,d=s.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,l,c)}),(function(e){n("throw",e,l,c)})):t.resolve(d).then((function(e){s.value=e,l(s)}),(function(e){return n("throw",e,l,c)}))}c(i.arg)}(r,o,n,l)}))}return n=n?n.then(l,l):l()}}function E(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function x(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return m.prototype=h,c(v,"constructor",h),c(h,"constructor",m),m.displayName=c(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,l,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var l=new b(i(t,a,n,r),o);return e.isGeneratorFunction(a)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},y(v),c(v,l,"Generator"),c(v,r,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=x,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return l.type="throw",l.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],l=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),i=a.call(o,"finallyLoc");if(c&&i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),O(a),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;O(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:x(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),s}},e}var V=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(""),c=Object(s.a)(l,2),i=c[0],u=c[1],d=Object(n.useState)(""),m=Object(s.a)(d,2),h=m[0],f=m[1];function p(e){S.get("/patients/".concat(e,".json")).then((function(t){var a=[];if(200===t.status){for(var n in t.data)a[n]=t.data[n];var o=t.data.DateOfBirth.split("-"),l=Object(s.a)(o,3),c=l[0],i=l[1],u=l[2],d="".concat(u,"-").concat(i,"-").concat(c);a.DateOfBirth=new Date(d),f(r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form-container form-popup",id:"myForm"},r.a.createElement("center",null,r.a.createElement("h2",null,"Update")),r.a.createElement(y.a,{fullWidth:!0,required:!0,label:"Name",defaultValue:a.PatientName,name:"PatientName",onChange:function(e){a.PatientName=e.target.value},placeholder:"Enter your name"}),r.a.createElement(y.a,{fullWidth:!0,required:!0,defaultValue:a.PatientPhone,label:"Phone Number",name:"PatientPhone",onChange:function(e){a.PatientPhone=e.target.value},placeholder:"Enter your phone number"}),r.a.createElement(W.a,{utils:I.a},r.a.createElement(F.a,{required:!0,defaultValue:new Date(d),format:"dd/MM/yyyy",onChange:function(e){a.DateOfBirth=e},label:"Birth Date",showTodayButton:!0,fullWidth:!0})),r.a.createElement(y.a,{fullWidth:!0,required:!0,id:"blood",select:!0,label:"Blood Group",defaultValue:a.bloodGroup,onChange:function(e){a.bloodGroup=e.target.value,function(e){a.bloodGroup=e.target.value}(e)},variant:"standard",align:"left"},H.map((function(e){return r.a.createElement(G.a,{key:e.value,value:e.value},e.label)}))),r.a.createElement(y.a,{fullWidth:!0,required:!0,id:"gender",select:!0,label:"Gender",defaultValue:a.gender,onChange:function(e){a.gender=e.target.value,function(e){a.gender=e.target.value}(e)},variant:"standard",align:"left"},M.map((function(e){return r.a.createElement(G.a,{key:e.value,value:e.value},e.label)}))),r.a.createElement(y.a,{fullWidth:!0,label:"Address",defaultValue:a.Address,id:"address",onChange:function(e){a.Address=e.target.value},type:"text"}),r.a.createElement(y.a,{fullWidth:!0,defaultValue:a.Disease,required:!0,label:"Disease Name",id:"disease",onChange:function(e){a.Disease=e.target.value},type:"text"}),r.a.createElement("button",{onClick:function(t){t.preventDefault(),f(""),function(e,t){var a="".concat(String(t.DateOfBirth.getDate()),"-").concat(String(parseInt(t.DateOfBirth.getMonth())+1),"-").concat(String(t.DateOfBirth.getFullYear()));S.put("/patients/".concat(e,".json"),{PatientName:t.PatientName,Address:t.Address,DateOfBirth:a,Disease:t.Disease,PatientPhone:t.PatientPhone,bloodGroup:t.bloodGroup,gender:t.gender}).then((function(e){return 200!==e.status&&alert("Something went Wrong"),e.status})).catch((function(){alert("Something went Wrong")})),g()}(e,a)},className:"btn"},"Update")," ",r.a.createElement("button",{className:"btn cancel",onClick:function(e){f(""),e.preventDefault()}},"Close"))))}}))}var g=function e(){S.get("/patients.json").then((function(t){var a=[],n=0;function l(){return(l=Object(_.a)(U().mark((function t(a,n){return U().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,S.delete("/patients/".concat(a,".json")).then((function(){})).catch((function(){alert("Something went Wrong")}));case 3:e();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o([]);var c=function(e){n+=1,(String(t.data[e].PatientName).toLowerCase().includes(i.toLowerCase())||""===i)&&a.push(r.a.createElement("tr",{id:e,style:{padding:"15px",minHeight:"50px"},className:"trow"},r.a.createElement("td",{className:"searchtd",style:{width:"10px"}},n),r.a.createElement("td",{className:"searchtd"},t.data[e].PatientName),r.a.createElement("td",{className:"searchtd"},t.data[e].PatientPhone),r.a.createElement("td",{className:"searchtd"},t.data[e].DateOfBirth),r.a.createElement("td",{className:"searchtd",style:{width:"15px"}},t.data[e].bloodGroup),r.a.createElement("td",{className:"searchtd",style:{width:"20px"}},t.data[e].gender),r.a.createElement("td",{className:"searchtd"},t.data[e].Address),r.a.createElement("td",{className:"searchtd"},t.data[e].Disease),r.a.createElement("td",{className:"searchtd"},r.a.createElement("form",{action:"/patient"},r.a.createElement(b.a,{fullWidth:!0,onClick:function(){p(e)},id:"updateBtn"},"Update"))),r.a.createElement("td",{className:"searchtd"},r.a.createElement("form",{action:"/patient"},r.a.createElement(b.a,{fullWidth:!0,onClick:function(t){return function(e,t){return l.apply(this,arguments)}(e,t)},id:"deleteBtn"},"Delete")))))};for(var u in t.data)c(u);a!==[]&&0!==a.length||a.push(r.a.createElement("tr",null,r.a.createElement("td",{colSpan:10,style:{textAlign:"center",color:"red",fontSize:"20px"}},"Result not found"))),o(a)})).catch((function(){o(r.a.createElement("tr",null,r.a.createElement("td",{colSpan:10,style:{textAlign:"center",color:"red",fontSize:"20px"}},"Something went wrong!!!")))}))};var v=Object(n.useState)(1),E=Object(s.a)(v,2),w=E[0],O=E[1];return""===i&&1===w&&(g(),O(0)),r.a.createElement("div",null,r.a.createElement("div",{className:"nav-content-no right"},r.a.createElement("input",{style:{height:"25px"},onChange:function(e){O(1),u(e.target.value),g(e.target.value)},className:"searchbar",type:"text",placeholder:"Search",id:"searchbar"}),r.a.createElement(r.a.Fragment,null)," ",r.a.createElement("i",{className:"fa fa-search",style:{color:"black"}}),r.a.createElement("br",null)),r.a.createElement("table",{id:"3",className:"searchtable"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"searchthead"},r.a.createElement("td",{style:{padding:"15px",minHeight:"50px"}},"Sl No"),r.a.createElement("td",{style:{padding:"15px",minHeight:"50px"}},"Name"),r.a.createElement("td",{style:{padding:"15px",minHeight:"50px"}},"Phone"),r.a.createElement("td",{style:{padding:"15px",minHeight:"50px"}},"Date of Birth"),r.a.createElement("td",{style:{padding:"15px",minHeight:"50px"}},"Blood Group"),r.a.createElement("td",{style:{padding:"15px",minHeight:"50px"}},"Gender"),r.a.createElement("td",{style:{padding:"15px",minHeight:"50px"}},"Address"),r.a.createElement("td",{style:{padding:"15px",minHeight:"50px"}},"Disease"),r.a.createElement("td",{style:{padding:"15px",minHeight:"50px"}},"Update"),r.a.createElement("td",{style:{padding:"15px",minHeight:"50px"}},"Remove")),a)),h)};function Y(){Y=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,a){return e[t]=a}}function i(e,t,a,n){var r=t&&t.prototype instanceof d?t:d,o=Object.create(r.prototype),l=new j(n||[]);return o._invoke=function(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return N()}for(a.method=r,a.arg=o;;){var l=a.delegate;if(l){var c=E(l,a);if(c){if(c===s)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var i=u(e,t,a);if("normal"===i.type){if(n=a.done?"completed":"suspendedYield",i.arg===s)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(n="completed",a.method="throw",a.arg=i.arg)}}}(e,a,l),o}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(S){return{type:"throw",arg:S}}}e.wrap=i;var s={};function d(){}function m(){}function h(){}var f={};c(f,r,(function(){return this}));var p=Object.getPrototypeOf,g=p&&p(p(x([])));g&&g!==t&&a.call(g,r)&&(f=g);var v=h.prototype=d.prototype=Object.create(f);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(r,o){function l(){return new t((function(n,l){!function n(r,o,l,c){var i=u(e[r],e,o);if("throw"!==i.type){var s=i.arg,d=s.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,l,c)}),(function(e){n("throw",e,l,c)})):t.resolve(d).then((function(e){s.value=e,l(s)}),(function(e){return n("throw",e,l,c)}))}c(i.arg)}(r,o,n,l)}))}return n=n?n.then(l,l):l()}}function E(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function x(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return m.prototype=h,c(v,"constructor",h),c(h,"constructor",m),m.displayName=c(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,l,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var l=new b(i(t,a,n,r),o);return e.isGeneratorFunction(a)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},y(v),c(v,l,"Generator"),c(v,r,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=x,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return l.type="throw",l.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],l=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),i=a.call(o,"finallyLoc");if(c&&i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),O(a),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;O(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:x(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),s}},e}var z=function(){var e=Object(i.f)(),t=localStorage.getItem("PatientName"),a=Object(n.useState)(r.a.createElement(T,null)),o=Object(s.a)(a,2),l=o[0],c=o[1];function u(e){return d.apply(this,arguments)}function d(){return(d=Object(_.a)(Y().mark((function e(t){return Y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===t?c(r.a.createElement(T,null)):1===t?c(r.a.createElement(q,null)):2===t&&c(r.a.createElement(V,null));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}void 0!==t&&null!==t||(window.location.href="/Find-My-Patient");return r.a.createElement("div",null,r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),r.a.createElement("div",{className:"nav-bar"},r.a.createElement("div",{className:"nav"},r.a.createElement("div",{className:"nav-item"},r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"nav-content left",onClick:function(){u(0)}},r.a.createElement("i",{className:"fa fa-home"})," ","Home"),r.a.createElement("div",{className:"nav-content left ",onClick:function(){u(1)}},r.a.createElement("i",{className:"fa fa-plus"})," ","Add Patient"),r.a.createElement("div",{className:"nav-content left",onClick:function(){u(2)}},r.a.createElement("i",{className:"fa fa-edit"})," ","View/Update Patient")),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"nav-content right",onClick:function(){return localStorage.removeItem("PatientName"),void e("/Find-My-Patient")}},r.a.createElement("i",{className:"fa fa-lock"})," ","| Logout"))))),r.a.createElement("hr",null),r.a.createElement("div",{className:"content"},l,r.a.createElement("br",null)))},R=function(){var e=Object(i.f)();return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("h1",null,"404 - Page Not Found...!"),r.a.createElement(b.a,{onClick:function(){e("/Find-My-Patient")}}," Goto Home")))},J=function(){var e=Object(i.f)();return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("h1",null,"Sorry, Something went wrong!"),r.a.createElement(b.a,{onClick:function(){e("/Find-My-Patient")}}," Goto Home")))},K=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/Find-My-Patient",element:r.a.createElement(A,null)}),r.a.createElement(i.a,{exact:!0,path:"/Find-My-Patient/patient",element:r.a.createElement(z,null)}),r.a.createElement(i.a,{exact:!0,path:"/Find-My-Patient/Error",element:r.a.createElement(J,null)}),r.a.createElement(i.a,{path:"/Find-My-Patient/*",element:r.a.createElement(R,null)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.9b8f57ad.chunk.js.map