(window.webpackJsonp=window.webpackJsonp||[]).push([[2,4,5,7,8],{857:function(t,e,n){"use strict";n.r(e);var r=n(858),c=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=c.a},858:function(t,e,n){"use strict";n(35);var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=r(n(0));e.default=c.default.extend({name:"PictureWrapper",props:{src:{type:String,required:!0},alt:{type:String,default:""},"img-class":{type:String,default:""}},computed:{imgtype:function(){var t=this.src.split(".")[1];return t="jpg"===t?"jpeg":t},imgWebp:function(){return n(867)("./".concat(this.src,""))},defaultImg:function(){return n(874)("./".concat(this.src,""))}}})},859:function(t,e,n){"use strict";n.r(e);var r=n(860),c=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=c.a},860:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Tags",props:{tags:{type:Array,default:function(){return[]}}}}},863:function(t,e,n){"use strict";n.r(e);var r=n(864),c=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=c.a},864:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=r(n(0));e.default=c.default.extend({name:"PostCard",props:{lang:{type:String,required:!0},post:{type:Object,default:function(){return{}}}}})},866:function(t,e,n){var content=n(893);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("415eb75c",content,!0,{sourceMap:!1})},867:function(t,e,n){var map={"./avatar.png":868,"./cover-images/cover-hello-world.jpg":869,"./cover-images/post-cover-image-mobile.jpg":870,"./cover-images/post-cover-image-vert.jpg":871,"./cover-images/post-cover-image.jpg":872,"./icon.png":873};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=c,t.exports=r,r.id=867},868:function(t,e,n){t.exports={srcSet:n.p+"img/41ca066-375.webp 375w,"+n.p+"img/6f7050e-387.webp 387w",images:[{path:n.p+"img/41ca066-375.webp",width:375,height:496},{path:n.p+"img/6f7050e-387.webp",width:387,height:512}],src:n.p+"img/41ca066-375.webp",toString:function(){return n.p+"img/41ca066-375.webp"},width:375,height:496}},869:function(t,e,n){t.exports={srcSet:n.p+"img/b861776-375.webp 375w,"+n.p+"img/9562292-448.webp 448w,"+n.p+"img/169dd6d-600.webp 600w,"+n.p+"img/6ae9c40-960.webp 960w",images:[{path:n.p+"img/b861776-375.webp",width:375,height:264},{path:n.p+"img/9562292-448.webp",width:448,height:315},{path:n.p+"img/169dd6d-600.webp",width:600,height:422},{path:n.p+"img/6ae9c40-960.webp",width:960,height:676}],src:n.p+"img/b861776-375.webp",toString:function(){return n.p+"img/b861776-375.webp"},width:375,height:264}},870:function(t,e,n){t.exports={srcSet:n.p+"img/0825ec8-375.webp 375w,"+n.p+"img/4be1bac-448.webp 448w,"+n.p+"img/3988fae-490.webp 490w",images:[{path:n.p+"img/0825ec8-375.webp",width:375,height:180},{path:n.p+"img/4be1bac-448.webp",width:448,height:215},{path:n.p+"img/3988fae-490.webp",width:490,height:235}],src:n.p+"img/0825ec8-375.webp",toString:function(){return n.p+"img/0825ec8-375.webp"},width:375,height:180}},871:function(t,e,n){t.exports={srcSet:n.p+"img/ad28b54-70.webp 70w",images:[{path:n.p+"img/ad28b54-70.webp",width:70,height:165}],src:n.p+"img/ad28b54-70.webp",toString:function(){return n.p+"img/ad28b54-70.webp"},width:70,height:165}},872:function(t,e,n){t.exports={srcSet:n.p+"img/1022b3a-375.webp 375w,"+n.p+"img/1e772b1-448.webp 448w,"+n.p+"img/d92abd4-600.webp 600w,"+n.p+"img/63b8486-900.webp 900w",images:[{path:n.p+"img/1022b3a-375.webp",width:375,height:180},{path:n.p+"img/1e772b1-448.webp",width:448,height:215},{path:n.p+"img/d92abd4-600.webp",width:600,height:288},{path:n.p+"img/63b8486-900.webp",width:900,height:432}],src:n.p+"img/1022b3a-375.webp",toString:function(){return n.p+"img/1022b3a-375.webp"},width:375,height:180}},873:function(t,e,n){t.exports={srcSet:n.p+"img/de5053f-375.webp 375w,"+n.p+"img/a4048fa-448.webp 448w,"+n.p+"img/0b2263a-600.webp 600w,"+n.p+"img/b1d79a1-960.webp 960w",images:[{path:n.p+"img/de5053f-375.webp",width:375,height:234},{path:n.p+"img/a4048fa-448.webp",width:448,height:279},{path:n.p+"img/0b2263a-600.webp",width:600,height:374},{path:n.p+"img/b1d79a1-960.webp",width:960,height:598}],src:n.p+"img/de5053f-375.webp",toString:function(){return n.p+"img/de5053f-375.webp"},width:375,height:234}},874:function(t,e,n){var map={"./avatar.png":875,"./cover-images/cover-hello-world.jpg":876,"./cover-images/post-cover-image-mobile.jpg":877,"./cover-images/post-cover-image-vert.jpg":878,"./cover-images/post-cover-image.jpg":879,"./icon.png":880};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=c,t.exports=r,r.id=874},875:function(t,e,n){t.exports={srcSet:n.p+"img/69bf5fc-375.png 375w,"+n.p+"img/fddecfd-387.png 387w",images:[{path:n.p+"img/69bf5fc-375.png",width:375,height:496},{path:n.p+"img/fddecfd-387.png",width:387,height:512}],src:n.p+"img/69bf5fc-375.png",toString:function(){return n.p+"img/69bf5fc-375.png"},width:375,height:496}},876:function(t,e,n){t.exports={srcSet:n.p+"img/b8ec37a-375.jpg 375w,"+n.p+"img/4938ac1-448.jpg 448w,"+n.p+"img/025726a-600.jpg 600w,"+n.p+"img/46111f2-960.jpg 960w",images:[{path:n.p+"img/b8ec37a-375.jpg",width:375,height:264},{path:n.p+"img/4938ac1-448.jpg",width:448,height:315},{path:n.p+"img/025726a-600.jpg",width:600,height:422},{path:n.p+"img/46111f2-960.jpg",width:960,height:676}],src:n.p+"img/b8ec37a-375.jpg",toString:function(){return n.p+"img/b8ec37a-375.jpg"},width:375,height:264}},877:function(t,e,n){t.exports={srcSet:n.p+"img/2ff6b67-375.jpg 375w,"+n.p+"img/35cd550-448.jpg 448w,"+n.p+"img/10d96d0-490.jpg 490w",images:[{path:n.p+"img/2ff6b67-375.jpg",width:375,height:180},{path:n.p+"img/35cd550-448.jpg",width:448,height:215},{path:n.p+"img/10d96d0-490.jpg",width:490,height:235}],src:n.p+"img/2ff6b67-375.jpg",toString:function(){return n.p+"img/2ff6b67-375.jpg"},width:375,height:180}},878:function(t,e,n){t.exports={srcSet:n.p+"img/c3a5013-70.jpg 70w",images:[{path:n.p+"img/c3a5013-70.jpg",width:70,height:165}],src:n.p+"img/c3a5013-70.jpg",toString:function(){return n.p+"img/c3a5013-70.jpg"},width:70,height:165}},879:function(t,e,n){t.exports={srcSet:n.p+"img/4db60d0-375.jpg 375w,"+n.p+"img/c126247-448.jpg 448w,"+n.p+"img/d7f06aa-600.jpg 600w,"+n.p+"img/fe2a6ff-900.jpg 900w",images:[{path:n.p+"img/4db60d0-375.jpg",width:375,height:180},{path:n.p+"img/c126247-448.jpg",width:448,height:215},{path:n.p+"img/d7f06aa-600.jpg",width:600,height:288},{path:n.p+"img/fe2a6ff-900.jpg",width:900,height:432}],src:n.p+"img/4db60d0-375.jpg",toString:function(){return n.p+"img/4db60d0-375.jpg"},width:375,height:180}},880:function(t,e,n){t.exports={srcSet:n.p+"img/01e267d-375.png 375w,"+n.p+"img/f7447d0-448.png 448w,"+n.p+"img/dc46f00-600.png 600w,"+n.p+"img/b37c98d-960.png 960w",images:[{path:n.p+"img/01e267d-375.png",width:375,height:234},{path:n.p+"img/f7447d0-448.png",width:448,height:279},{path:n.p+"img/dc46f00-600.png",width:600,height:374},{path:n.p+"img/b37c98d-960.png",width:960,height:598}],src:n.p+"img/01e267d-375.png",toString:function(){return n.p+"img/01e267d-375.png"},width:375,height:234}},881:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",{staticClass:"picture"},[n("source",{staticClass:"source",attrs:{"data-srcset":t.imgWebp.srcSet,type:"image/webp",sizes:"(max-width: 480px) 100vw, (max-width: 1024px) 448px, 960px"}}),t._v(" "),n("source",{staticClass:"source",attrs:{"data-srcset":t.defaultImg.srcSet,type:"image/"+t.imgtype,sizes:"(max-width: 480px) 100vw, (max-width: 1024px) 448px, 960px"}}),t._v(" "),n("img",{staticClass:"img lazyload",class:t.imgClass,attrs:{"data-src":t.defaultImg.src,alt:t.alt,height:t.defaultImg.height,width:t.defaultImg.width,sizes:"(max-width: 480px) 100vw, (max-width: 1024px) 448px, 960px"}}),t._v(" "),t._t("default")],2)},c=[]},882:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("client-only",t._l(t.tags,(function(e){return n("NuxtLink",{key:e,staticClass:"mr-2 inline-block rounded-full px-2 py-px text-xs font-semibold bg-theme-200 text-theme-500 hover:bg-theme-500 hover:text-theme-100 dark:bg-theme-500 dark:text-theme-100 dark-hover:text-theme-500 dark-hover:bg-theme-100",attrs:{to:t.localePath("/blog/tag/"+e)}},[t._v("#"+t._s(e))])})),1)],1)},c=[]},883:function(t,e,n){"use strict";n.r(e);var r=n(881),c=n(857);for(var o in c)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return c[t]}))}(o);var d=n(4),component=Object(d.a)(c.default,r.a,r.b,!1,null,null,null);e.default=component.exports},884:function(t,e,n){"use strict";n.r(e);var r=n(882),c=n(859);for(var o in c)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return c[t]}))}(o);var d=n(4),component=Object(d.a)(c.default,r.a,r.b,!1,null,null,null);e.default=component.exports},885:function(t,e,n){"use strict";n.r(e);n(205);var r={name:"ReadingTime",props:{readingTime:{type:Number,default:1}},computed:{readingTimeFn:function(){var t;return t=this.readingTime>1?this.readingTime:1,Math.round(t)}}},c=n(4),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.readingTimeFn)+" "+t._s(t.$t("min-read")))])}),[],!1,null,null,null);e.default=component.exports},890:function(t,e,n){"use strict";n.r(e);var r=n(891),c=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=c.a},891:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"BlogPosts",props:{lang:{type:String,required:!0},blogPosts:{type:Array,default:function(){return[]}}}}},892:function(t,e,n){"use strict";n(866)},893:function(t,e,n){var r=n(24)((function(i){return i[1]}));r.push([t.i,".card-title[data-v-46ae788d]{\n  font-size:22px\n}\n.card-description[data-v-46ae788d]{\n  line-height:20px;\n  font-size:20px\n}\n.picture[data-v-46ae788d] .img, .picture[data-v-46ae788d] .source{\n  height:13rem;\n  -o-object-fit:cover;\n     object-fit:cover;\n  -o-object-position:center;\n     object-position:center;\n  width:100%\n}",""]),t.exports=r},897:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"max-w-md min-h-full rounded overflow-hidden flex-col shadow-md flex hover:shadow-2xl dark:shadow-md-light dark-hover:shadow-xl-light mb-4 bg-white dark:bg-theme-700"},[n("figure",[n("picture-wrapper",{attrs:{src:"cover-images/"+t.post.coverImage,alt:"Post comer image"}})],1),t._v(" "),n("div",{staticClass:"px-6 py-4 pb-2 flex-grow"},[n("header",[n("h1",{staticClass:"card-title mt-2"},[t._v("\n        "+t._s(t.post.title)+"\n      ")])]),t._v(" "),n("p",{staticClass:"card-description text-theme-400 text-left mt-6 mb-2"},[t._v("\n      "+t._s(t.post.description)+"\n    ")])]),t._v(" "),n("footer",{staticClass:"px-6 py-4"},[n("div",{staticClass:"text-sm"},[n("time",{staticClass:"text-center mr-3 border-r pr-3"},[t._v(t._s(t.i18nFormatDate(t.post.createdAt)))]),t._v(" "),n("reading-time",{attrs:{"reading-time":t.post.readingTime}})],1),t._v(" "),n("div",{staticClass:"pt-3"},[n("tags",{attrs:{tags:t.post.tags}})],1)])])},c=[]},900:function(t,e,n){"use strict";n.r(e);var r=n(897),c=n(863);for(var o in c)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return c[t]}))}(o);n(892);var d=n(4),component=Object(d.a)(c.default,r.a,r.b,!1,null,"46ae788d",null);e.default=component.exports,installComponents(component,{PictureWrapper:n(883).default,ReadingTime:n(885).default,Tags:n(884).default})},920:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid sm:grid-cols-1 md:grid-cols-2 gap-4"},t._l(t.blogPosts,(function(e){return n("NuxtLink",{key:e.slug,staticClass:"has-text-dark",attrs:{to:{name:"blog-slug___"+t.lang,params:{slug:e.slug}}}},[n("post-card",{attrs:{post:e,lang:t.lang}})],1)})),1)},c=[]},923:function(t,e,n){"use strict";n.r(e);var r=n(920),c=n(890);for(var o in c)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return c[t]}))}(o);var d=n(4),component=Object(d.a)(c.default,r.a,r.b,!1,null,null,null);e.default=component.exports,installComponents(component,{PostCard:n(900).default})}}]);