(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{797:function(t,e,n){"use strict";n.r(e);var r=n(798),o=n.n(r);for(var c in r)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},798:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(0));e.default=o.default.extend({name:"Page",props:{pageTitle:{type:String,required:!0}},created(){this.changeTitle(this.pageTitle)},watch:{pageTitle(t,e){t!==e&&this.changeTitle(t)}},methods:{changeTitle(title){this.$store.commit("pages/changeTitle",title)}}})},801:function(t,e,n){var content=n(825);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("43a2e728",content,!0,{sourceMap:!1})},824:function(t,e,n){"use strict";n(801)},825:function(t,e,n){var r=n(10)((function(i){return i[1]}));r.push([t.i,".page-container[data-v-5af0206f]{\n  margin-left:auto;\n  margin-right:auto;\n  max-width:960px;\n  height:100%\n}",""]),t.exports=r},832:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{staticClass:"page-container relative z-10"},[t._t("default")],2)},o=[]},835:function(t,e,n){"use strict";n.r(e);var r=n(832),o=n(797);for(var c in o)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n(824);var f=n(3),component=Object(f.a)(o.default,r.a,r.b,!1,null,"5af0206f",null);e.default=component.exports}}]);