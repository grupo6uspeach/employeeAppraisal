(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-220b7d63"],{"49d2":function(t,o,e){"use strict";var s=e("b645"),r=e.n(s);r.a},"8dac":function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.show?e("div",{staticClass:"vertical-center mainWrapper pl-5 pr-5"},[t._m(0),e("div",{staticClass:"row mb-5"},[e("div",{staticClass:"col-auto"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.nome,expression:"nome"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nome"},domProps:{value:t.nome},on:{input:function(o){o.target.composing||(t.nome=o.target.value)}}})]),t._m(1)]),t._m(2),t._l(t.projetosAchados,(function(o,s){return e("div",{key:s,staticClass:"row mb-3"},[e("button",{staticClass:"btn btn-outline-info",on:{click:function(e){return t.projetoDetails(o)}}},[t._v(t._s(o))])])}))],2):t._e()},r=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"row mb-2"},[e("p",{staticClass:"mainText"},[t._v("\n      Buscar Projetos\n      \n    ")])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"col-auto"},[e("button",{staticClass:"btn btn-outline-info"},[t._v("Buscar")])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"row mb-5"},[e("h4",[t._v("Projetos:")])])}],n={components:{},mounted(){console.log(this.$route.params),this.scrollToTop(),this.$store.getters.vw<1023?1==this.$store.getters.sidebar&&this.$store.commit("toggleSidebar"):this.$store.getters.sidebar||this.$store.commit("toggleSidebar")},data(){return{show:!0,nome:"",projetos:["Catálogo de Produtos","Automatização do Processo X"]}},computed:{projetosAchados(){return this.projetos.filter(t=>{return t.toString().includes(this.nome)})}},methods:{projetoDetails(t){this.$router.push({path:`/Projetos/${t}`})},scrollToTop(){window.scrollTo(0,0)}},watch:{}},i=n,a=(e("49d2"),e("cc2b"),e("2877")),c=Object(a["a"])(i,s,r,!1,null,"6d5f3928",null);o["default"]=c.exports},9035:function(t,o,e){},b645:function(t,o,e){},cc2b:function(t,o,e){"use strict";var s=e("9035"),r=e.n(s);r.a}}]);
//# sourceMappingURL=chunk-220b7d63.9d19971e.js.map