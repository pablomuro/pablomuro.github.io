(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{269:function(e,t,n){var content=n(274);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("083745fe",content,!0,{sourceMap:!1})},273:function(e,t,n){"use strict";n(269)},274:function(e,t,n){(t=n(53)(!1)).push([e.i,".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center;flex-direction:column}.logo{width:50px;height:100%;margin-left:2%;margin-top:2%}",""]),e.exports=t},293:function(e,t,n){"use strict";n.r(t);n(23);var r=n(3),c=n(1).default.extend({asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,article;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,r=e.params,c=e.app,t.prev=1,t.next=4,n(c.i18n.locale,r.slug).fetch();case 4:article=t.sent,t.next=12;break;case 7:return t.prev=7,t.t0=t.catch(1),t.next=11,n("en",r.slug).fetch();case 11:article=t.sent;case 12:return t.abrupt("return",{article:article});case 13:case"end":return t.stop()}}),t,null,[[1,7]])})))()},methods:{formatDate:function(e){return new Date(e).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})},changeLang:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$i18n.locale,r="en"===n?"pt-br":"en",t.next=4,e.$i18n.setLocale(r);case 4:e.$nuxt.refresh();case 5:case"end":return t.stop()}}),t)})))()}}}),o=(n(273),n(49)),component=Object(o.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("nuxt-content",{attrs:{document:this.article}}),this._v(" "),t("button",{on:{click:this.changeLang}},[this._v("TROCA")])],1)}),[],!1,null,null,null);t.default=component.exports}}]);