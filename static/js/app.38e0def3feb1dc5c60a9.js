webpackJsonp([1],{"7zck":function(e,t){},"9arS":function(e,t){},BHvm:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("7zck"),n("gI8x"),n("bKQP");var r=n("7+uW"),a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"m-navbar"},[t("h1",[this._v("Navbar")])])}]};var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"m-footer"},[t("h1",[this._v("Footer")])])}]};var o={components:{Navbar:n("VU/8")({name:"Navbar",data:function(){return{}}},a,!1,function(e){n("WuoM")},"data-v-3d2beb32",null).exports,Footer:n("VU/8")({name:"Footer",data:function(){return{}}},s,!1,function(e){n("gtea")},"data-v-fedbd306",null).exports},name:"App"},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("v-app",{attrs:{id:"inspire"}},[t("v-content",[t("router-view")],1)],1)],1)},staticRenderFns:[]};var c=n("VU/8")(o,i,!1,function(e){n("mUdy")},null,null).exports,u=n("/ocq"),l=n("Dd8w"),d=n.n(l),v=n("iGUu"),p=n.n(v),f=n("Zrlr"),h=n.n(f),m=n("wxAW"),g=n.n(m),y=/[!@#$%^&*(),.?":{}|<>]/,_=new(function(){function e(){h()(this,e)}return g()(e,[{key:"isOrContainSpecialChar",value:function(e){return e.match(y)}},{key:"seperateSpecialChar",value:function(e){var t=this,n="";return e.forEach(function(e){n+=t.convertWordBySpecialChar(e)+" "}),n.trim().split(" ")}},{key:"convertWordBySpecialChar",value:function(e){if(!this.isOrContainSpecialChar(e))return e;for(var t="",n=e.split(""),r=0;r<n.length;r++){var a=n[r];this.isOrContainSpecialChar(a)?t+=" "+a:t+=a}return t}},{key:"convertWordByScope",value:function(e,t,n,r){return t?""+n+e+" "+r:e+" "}},{key:"convertWordByCue",value:function(e,t,n,r){if(!e.includes(t)||!e||!t)return e;for(var a="",s=e.split(""),o=t.split(""),i=!1,c=0;c<s.length;c++){var u=s[c];o[c]&&!i?(i=!0,a+=""+n+u):!o[c]&&i?(i=!1,a+=""+r+u):a+=u}return a}}]),e}()),S={name:"Form",data:function(){return{validForm:!1,loading:!1,sentence:"",currentSentence:{content:"This person is alone and can not be approached by letter without a breach of that absolute secrecy.",scopes:[],cues:[]},currentSampleIndex:-1}},computed:{samples:function(){return this.$store.getters["sentence/getSamples"]},cues:function(){var e=this.currentSentence.content.trim().split(" ");e=_.seperateSpecialChar(e);var t=[];return this.currentSentence.cues.length>0?t=this.currentSentence.cues:e.forEach(function(e){t.push("")}),{words:e,values:t}}},methods:{chooseSample:function(e,t){this.currentSampleIndex=t,this.currentSentence=d()({},e)},submitAnalysis:function(){var e=this;this.loading=!0,this.currentSentence.cues=this.cues.values,this.$store.dispatch("sentence/analyze",{sentence:this.currentSentence}).then(function(){e.loading=!1})},isSpecialChar:function(e){return null!==_.isOrContainSpecialChar(e)},chooseHelp:function(){p()().start()}},mounted:function(){}},x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"elevation-6"},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.validForm,callback:function(t){e.validForm=t},expression:"validForm"}},[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-toolbar-title",[e._v("Negation Scope")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{attrs:{slot:"activator","data-step":"3","data-intro":"Start detecting",id:"btn-samples",flat:"",outline:"",color:"white"},slot:"activator"},[e._v("\n        "+e._s(e.currentSampleIndex>=0?"Sample "+(e.currentSampleIndex+1):"Samples")+"\n      ")]),e._v(" "),n("v-list",e._l(e.samples,function(t,r){return n("v-list-tile",{key:r,on:{click:function(n){e.chooseSample(t,r)}}},[n("v-list-tile-title",[e._v(e._s("Sample "+(r+1)))])],1)}))],1),e._v(" "),n("v-btn",{attrs:{flat:"",icon:"",color:"white"},on:{click:e.chooseHelp}},[n("v-icon",[e._v("help")])],1)],1),e._v(" "),n("v-card-text",[n("v-textarea",{attrs:{"data-intro":"The sentence for detecting negation scope","data-step":"1",rows:"2",required:"","auto-grow":"","prepend-icon":"translate",name:"sentence",label:"Sentence",type:"text"},model:{value:e.currentSentence.content,callback:function(t){e.$set(e.currentSentence,"content",t)},expression:"currentSentence.content"}}),e._v(" "),n("div",{attrs:{"data-step":"2","data-intro":"Negation cues for the sentence"}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},e._l(e.cues.words,function(t,r){return n("v-flex",{key:r,staticClass:"ml-3",class:e.isSpecialChar(t)||!t?"hidden-sm-and-up hidden-sm-and-down":"",attrs:{xs3:"",md1:""}},[n("v-text-field",{attrs:{counter:t.length,label:t,required:""},model:{value:e.cues.values[r],callback:function(t){e.$set(e.cues.values,r,t)},expression:"cues.values[index]"}})],1)}))],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{"data-step":"3","data-intro":"Start Detecting",id:"btn-submit",color:"primary",loading:e.loading,disabled:!e.validForm||e.loading},on:{click:e.submitAnalysis}},[e._v("Detect")])],1)],1)],1)},staticRenderFns:[]};var b={name:"Panel",data:function(){return{}},methods:{convertWordByCue:function(e,t,n){return e=_.convertWordByCue(e,t,'<span class="cyan--text text--darken-2">',"</span>")},convertWordByScope:function(e,t,n){return e=_.convertWordByScope(e,n,'<span class="orange--text text--darken-3">',"</span>")},convertWord:function(e,t,n,r,a){var s=e+" ";return r&&(s=this.convertWordByCue(s,t,n)),a&&(s=this.convertWordByScope(s,t,n)),s}},computed:{sentence:function(){var e=this.$store.getters["sentence/getResult"];if(!e)return null;for(var t="",n=e.words,r=e.scopes.length>0,a=e.cues.length>0,s=0;s<n.length;s++){var o=n[s],i=e.cues[s],c=e.scopes[s];t+=this.convertWord(o,i,c,a,r)}return t}}},w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel"},[e.sentence?n("v-card",{staticClass:"elevation-6"},[n("v-layout",{attrs:{row:"",wrap:"","pa-4":""}},[n("v-flex",{attrs:{xs12:""}},[n("h2",[n("span",{domProps:{innerHTML:e._s(e.sentence)}})])]),e._v(" "),n("h4",{staticClass:"font-weight-regular font-italic"},[e._v("\n      Negation scope (partial scopes) in "),n("span",{staticClass:"orange--text text--darken-3"},[e._v("orange")]),e._v(",\n      negation cue in "),n("span",{staticClass:"cyan--text text--darken-2"},[e._v("blue")]),e._v(",\n      gaps as non-orange spans\n    ")])],1)],1):e._e()],1)},staticRenderFns:[]};var C={components:{Form:n("VU/8")(S,x,!1,function(e){n("9arS")},null,null).exports,Panel:n("VU/8")(b,w,!1,function(e){n("BHvm")},"data-v-0ae3d7e0",null).exports},name:"HomePage",data:function(){return{}},created:function(){},computed:{}},k={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"m-home"},[t("v-container",{attrs:{fluid:""}},[t("v-layout",{attrs:{"align-center":"","justify-center":""}},[t("v-flex",{attrs:{xs12:"",sm8:"",md12:""}},[t("Form")],1)],1),this._v(" "),t("v-layout",{attrs:{"mt-3":"","align-center":"","justify-center":""}},[t("v-flex",{attrs:{xs12:"",sm8:"",md12:""}},[t("Panel")],1)],1)],1)],1)},staticRenderFns:[]};var F=n("VU/8")(C,k,!1,function(e){n("YO2v")},"data-v-fdda0f12",null).exports;r.default.use(u.a);var W=new u.a({mode:"history",routes:[{path:"/",name:"HomePage",component:F}]}),E=n("NYxO"),$=n("//Fk"),B=n.n($),U=n("mtWM"),H=n.n(U),N=new(function(){function e(){h()(this,e),this.apiUrl="http://172.17.240.117:8230/api"}return g()(e,[{key:"getApiEndpoint",value:function(){return this.apiUrl}},{key:"getDetectEndpoint",value:function(){return this.getApiEndpoint()+"/detect"}}]),e}()),P=function(e,t){var n=N.getDetectEndpoint();return H.a.post(n,{words:e,cues:t})},A={namespaced:!0,state:{result:null,samples:[{content:"He declares that he heard cries but is unable to state from what direction they came.",scopes:[!0,!1,!1,!1,!1,!1,!1,!0,!0,!0,!0,!0,!0,!0,!0,!0,!1],cues:["","","","","","","","","un","","","","","","","",""],words:["He","declares","that","he","heard","cries","but","is","unable","to","state","from","what","direction","they","came","."]},{content:"There is neither money nor credit in it, and yet one would wish to tidy it up.",scopes:[!0,!0,!0,!0,!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],cues:["","","neither","","nor","","","","","","","","","","","","","","",""]}]},getters:{getSamples:function(e){return e.samples},getResult:function(e){return e.result}},mutations:{analyze:function(e,t){e.result=t.result}},actions:{analyze:function(e,t){var n=t.sentence,r=n.content.split(" ");r=_.seperateSpecialChar(r);var a=n.cues;return new B.a(function(t,n){P(r,a).then(function(n){var s={words:r,cues:a,scopes:n.data};e.commit("analyze",{result:s}),t("success")}).catch(function(e){console.error(e),n(e)})})}}};r.default.use(E.a);var O=new E.a.Store({modules:{sentence:A},state:{},getters:{},mutations:{},actions:{}}),R=function(e){return e.toUpperCase()},z=function(e,t,n){return void 0===n&&(n=""),void 0===e&&(e=""),e.toString().substring(0,t)+n},V={install:function(e){e.filter("uppercase",R),e.filter("limit",z)}},I=n("3EgV"),D=n.n(I);r.default.use(D.a),r.default.use(V),r.default.config.productionTip=!1,new r.default({el:"#app",router:W,store:O,components:{App:c},template:"<App/>"})},WuoM:function(e,t){},YO2v:function(e,t){},bKQP:function(e,t){},gI8x:function(e,t){},gtea:function(e,t){},mUdy:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.38e0def3feb1dc5c60a9.js.map