(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{268:function(t,e,r){var content=r(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("ce11cc14",content,!0,{sourceMap:!1})},271:function(t,e,r){"use strict";r(268)},272:function(t,e,r){(e=r(53)(!1)).push([t.i,".article-card,.article-card a{border-radius:8px}.article-card a{background-color:#fff}.article-card img div{border-radius:8px 0 0 8px}",""]),t.exports=e},292:function(t,e,r){"use strict";r.r(e);r(23);var n=r(3),c=r(1).default.extend({asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.app,e.next=3,r(n.i18n.locale).only(["title","description","img","slug","author"]).sortBy("createdAt","desc").fetch();case 3:return c=e.sent,e.abrupt("return",{articles:c});case 5:case"end":return e.stop()}}),e)})))()}}),o=(r(271),r(49)),component=Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-8"},[e("h1",{},[this._v("Blog Posts")]),this._v(" "),e("ul",{staticClass:"flex flex-wrap"},this._l(this.articles,(function(article){return e("li",{key:article.slug,staticClass:"a"})})),0),this._v(" "),this._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"flex justify-center border-gray-500 border-t-2"},[e("p",{staticClass:"mt-4"},[this._v("\n      Created by\n      "),e("a",{staticClass:"font-bold hover:underline",attrs:{href:"https://twitter.com/debs_obrien"}},[this._v("Debbie O'Brien")]),this._v("\n      at NuxtJS. See the\n      "),e("a",{staticClass:"font-bold hover:underline",attrs:{href:"https://nuxtjs.org/blog/creating-blog-with-nuxt-content"}},[this._v("tutorial")]),this._v("\n      for how to build it.\n    ")])])}],!1,null,null,null);e.default=component.exports}}]);