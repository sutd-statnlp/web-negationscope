webpackJsonp([1],{"+GRh":function(e,t){},"7zck":function(e,t){},KXH3:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("7zck");var r=n("7+uW"),a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"m-navbar"},[t("h1",[this._v("Navbar")])])}]};var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"m-footer"},[t("h1",[this._v("Footer")])])}]};var i={components:{Navbar:n("VU/8")({name:"Navbar",data:function(){return{}}},a,!1,function(e){n("WuoM")},"data-v-3d2beb32",null).exports,Footer:n("VU/8")({name:"Footer",data:function(){return{}}},s,!1,function(e){n("gtea")},"data-v-fedbd306",null).exports},name:"App"},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("v-app",{attrs:{id:"inspire"}},[t("v-content",[t("router-view")],1)],1)],1)},staticRenderFns:[]};var o=n("VU/8")(i,c,!1,function(e){n("mUdy")},null,null).exports,u=n("/ocq"),l=n("Dd8w"),d=n.n(l),v=n("Zrlr"),f=n.n(v),h=n("wxAW"),m=n.n(h),p=/[!@#$%^&*(),.?":{}|<>]/,y=new(function(){function e(){f()(this,e)}return m()(e,[{key:"isOrContainSpecialChar",value:function(e){return e.match(p)}},{key:"seperateSpecialChar",value:function(e){var t=this,n="";return e.forEach(function(e){n+=t.convertWordBySpecialChar(e)+" "}),n.trim().split(" ")}},{key:"convertWordBySpecialChar",value:function(e){if(!this.isOrContainSpecialChar(e))return e;for(var t="",n=e.split(""),r=0;r<n.length;r++){var a=n[r];this.isOrContainSpecialChar(a)?t+=" "+a:t+=a}return t}},{key:"convertWordByMatching",value:function(e,t,n,r){return t?""+n+e+" "+r:e+" "}},{key:"convertWordByCue",value:function(e,t,n,r){if(!e.includes(t)||!e||!t)return e;for(var a="",s=e.split(""),i=t.split(""),c=!1,o=0;o<s.length;o++){var u=s[o];i[o]&&!c?(c=!0,a+=""+n+u):!i[o]&&c?(c=!1,a+=""+r+u):a+=u}return a}}]),e}()),g={name:"Form",data:function(){return{validForm:!1,loading:!1,sentence:"",currentSentence:{content:"This person is alone and can not be approached by letter without a breach of that absolute secrecy.",matchingWords:[],cues:[]}}},computed:{samples:function(){return this.$store.getters["sentence/getSamples"]},cues:function(){var e=this.currentSentence.content.trim().split(" ");e=y.seperateSpecialChar(e);var t=[];return this.currentSentence.cues.length>0?t=this.currentSentence.cues:e.forEach(function(e){t.push("")}),{words:e,values:t}}},methods:{chooseSample:function(e){this.currentSentence=d()({},e)},submitAnalysis:function(){var e=this;this.loading=!0,setTimeout(function(){e.currentSentence.cues=e.cues.values,e.$store.dispatch("sentence/analyze",{sentence:e.currentSentence}),e.loading=!1},1e3)},isSpecialChar:function(e){return null!==y.isOrContainSpecialChar(e)}},mounted:function(){}},_={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"elevation-6"},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.validForm,callback:function(t){e.validForm=t},expression:"validForm"}},[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-toolbar-title",[e._v("Negation Scope")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{attrs:{slot:"activator",id:"btn-samples",color:"white blue--text"},slot:"activator"},[e._v(" Samples ")]),e._v(" "),n("v-list",e._l(e.samples,function(t,r){return n("v-list-tile",{key:r,on:{click:function(n){e.chooseSample(t)}}},[n("v-list-tile-title",[e._v(e._s("Sample "+(r+1)))])],1)}))],1)],1),e._v(" "),n("v-card-text",[n("v-textarea",{attrs:{rows:"3",required:"","auto-grow":"","prepend-icon":"translate",name:"sentence",label:"Sentence",type:"text"},model:{value:e.currentSentence.content,callback:function(t){e.$set(e.currentSentence,"content",t)},expression:"currentSentence.content"}}),e._v(" "),n("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},e._l(e.cues.words,function(t,r){return n("v-flex",{key:r,staticClass:"ml-3",class:e.isSpecialChar(t)?"hidden-sm-and-up hidden-sm-and-down":"",attrs:{xs3:"",md1:""}},[n("v-text-field",{attrs:{counter:t.length,label:t,required:""},model:{value:e.cues.values[r],callback:function(t){e.$set(e.cues.values,r,t)},expression:"cues.values[index]"}})],1)}))],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{id:"btn-submit",color:"primary",loading:e.loading,disabled:!e.validForm||e.loading},on:{click:e.submitAnalysis}},[e._v("Analyze")])],1)],1)],1)},staticRenderFns:[]};var b={name:"Panel",data:function(){return{}},methods:{convertWordByCue:function(e,t,n){return e=y.convertWordByCue(e,t,'<span class="cyan--text text--darken-2">',"</span>")},convertWordByMatching:function(e,t,n){return e=y.convertWordByMatching(e,n,'<span class="orange--text text--darken-3">',"</span>")},convertWord:function(e,t,n,r,a){var s=e+" ";return r&&(s=this.convertWordByCue(s,t,n)),a&&(s=this.convertWordByMatching(s,t,n)),s}},computed:{sentence:function(){var e=this.$store.getters["sentence/getResult"];if(!e)return null;var t="",n=e.content.split(" ");n=y.seperateSpecialChar(n);for(var r=e.matchingWords.length>0,a=e.cues.length>0,s=0;s<n.length;s++){var i=n[s],c=e.cues[s],o=e.matchingWords[s];t+=this.convertWord(i,c,o,a,r)}return t}}},S={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"panel"},[this.sentence?t("v-card",{staticClass:"elevation-6"},[t("v-layout",{attrs:{row:"",wrap:"","pa-4":""}},[t("h2",[t("span",{domProps:{innerHTML:this._s(this.sentence)}})])])],1):this._e()],1)},staticRenderFns:[]};var x={components:{Form:n("VU/8")(g,_,!1,function(e){n("KXH3")},"data-v-0a9cc2e2",null).exports,Panel:n("VU/8")(b,S,!1,function(e){n("+GRh")},"data-v-53f80446",null).exports},name:"HomePage",data:function(){return{}},created:function(){},computed:{}},C={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"m-home"},[t("v-container",{attrs:{fluid:""}},[t("v-layout",{attrs:{"align-center":"","justify-center":""}},[t("v-flex",{attrs:{xs12:"",sm8:"",md12:""}},[t("Form")],1)],1),this._v(" "),t("v-layout",{attrs:{"mt-3":"","align-center":"","justify-center":""}},[t("v-flex",{attrs:{xs12:"",sm8:"",md12:""}},[t("Panel")],1)],1)],1)],1)},staticRenderFns:[]};var w=n("VU/8")(x,C,!1,function(e){n("YO2v")},"data-v-fdda0f12",null).exports;r.default.use(u.a);var W=new u.a({mode:"history",routes:[{path:"/",name:"HomePage",component:w}]}),k=n("NYxO");r.default.use(k.a);var F=new k.a.Store({modules:{sentence:{namespaced:!0,state:{result:null,samples:[{content:"He declares that he heard cries but is unable to state from what direction they came.",matchingWords:[!0,!1,!1,!1,!1,!1,!1,!0,!0,!0,!0,!0,!0,!0,!0,!0,!1],cues:["","","","","","","","","un","","","","","","","",""]},{content:"There is neither money nor credit in it, and yet one would wish to tidy it up.",matchingWords:[!0,!0,!0,!0,!0,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],cues:["","","neither","","nor","","","","","","","","","","","","","","",""]}]},getters:{getSamples:function(e){return e.samples},getResult:function(e){return e.result}},mutations:{analyze:function(e,t){e.result=t.result}},actions:{analyze:function(e,t){var n=t.sentence;e.commit("analyze",{result:n})}}}},state:{},getters:{},mutations:{},actions:{}}),$=function(e){return e.toUpperCase()},E=function(e,t,n){return void 0===n&&(n=""),void 0===e&&(e=""),e.toString().substring(0,t)+n},B={install:function(e){e.filter("uppercase",$),e.filter("limit",E)}},R=n("3EgV"),U=n.n(R);r.default.use(U.a),r.default.use(B),r.default.config.productionTip=!1,new r.default({el:"#app",router:W,store:F,components:{App:o},template:"<App/>"})},WuoM:function(e,t){},YO2v:function(e,t){},gtea:function(e,t){},mUdy:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c37e78dd398f2e5271df.js.map