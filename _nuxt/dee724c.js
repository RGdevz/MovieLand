(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(t,e,r){"use strict";r.r(e);var n=r(226),o={computed:{theinfo:function(){return this.$screen.mobile?"":this.info.length>250?this.info.substr(0,250)+"...":this.info}},name:"myimage",props:{imagelink:{default:String,required:!0},info:{type:String,default:String,required:!0},rating:{default:String}},data:function(){return{spinner:n.a,tooltip:{disabled:this.$screen.mobile},svgicon:r(364)}}},c=(r(527),r(50)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"topdiv zoom "},[r("div",{staticStyle:{position:"relative"}},[r("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.topright",value:t.tooltip,expression:"tooltip",modifiers:{topright:!0}}],staticClass:"innercontainer",attrs:{title:t.theinfo}},[r("div",{staticClass:"insidecontent myrounded"},[t.rating?r("div",{staticClass:"rating"},[t._v("\n   ⭐ "+t._s(t.rating)+"\n    ")]):t._e(),t._v(" "),r("img",{staticClass:"playicon",attrs:{src:t.svgicon}})])]),t._v(" "),r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imagelink,expression:"imagelink"}],staticClass:"myimage myrounded",attrs:{src:t.spinner}})])])}),[],!1,null,"7657c3fb",null);e.default=component.exports},214:function(t,e,r){"use strict";r.r(e);var n,o=r(18),c=(r(60),r(41),{components:{Myimage:r(159).default},data:function(){return{debouncequery:"",searchquery:"",showmodal:!1,searchresultmovie:Object(),debouncetimeout:null,loading:!1}},methods:{move:function(path){this.$router.push(path),this.showmodal=!1},close:function(){this.showmodal=!1},open:function(){this.showmodal=!0}},destroyed:function(){this.$showoverflow(),this.$nuxt.$off("open",this.open)},mounted:function(){this.$nuxt.$on("open",this.open)},watch:{showmodal:function(t){t?this.$hideoverflow():(this.debouncequery="",this.$showoverflow())},debouncequery:function(t,e){var r=this;clearTimeout(this.debouncetimeout),this.debouncetimeout=setTimeout((function(){return r.searchquery=t}),550)},searchquery:(n=Object(o.a)(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=3;break}return this.searchresultmovie=Object(),t.abrupt("return");case 3:return this.loading=!0,this.searchresultmovie=Object(),t.prev=5,t.next=8,this.$store.dispatch("searchmovie",e);case 8:this.searchresultmovie=t.sent,t.next=13;break;case 11:t.prev=11,t.t0=t.catch(5);case 13:return t.prev=13,this.loading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,this,[[5,11,13,16]])}))),function(t,e){return n.apply(this,arguments)})},name:"searchstuff"}),d=c,l=(r(529),r(50)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{color:"black","text-align":"start"}},[t.showmodal?r("div",{staticClass:"mymodal"},[r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.close,expression:"close"}],staticClass:" themodal"},[r("b-button",{staticStyle:{position:"absolute",right:"15px",top:"10px",cursor:"pointer"},on:{click:function(e){t.showmodal=!1}}},[t._v("\n\n     X\n\n    ")]),t._v(" "),r("div",{staticClass:"py-1"}),t._v(" "),r("b-input",{staticClass:"myrounded shadow",staticStyle:{"max-width":"20rem"},style:t.$screen.mobile?"":"margin-left: 20px",attrs:{autofocus:"",placeholder:"Type to search"},model:{value:t.debouncequery,callback:function(e){t.debouncequery=e},expression:"debouncequery"}}),t._v(" "),r("div",{staticClass:"py-2"}),t._v(" "),t.loading?r("div",{staticStyle:{"text-align":"center"}},[r("b-spinner")],1):t._e(),t._v(" "),t.searchresultmovie.results?r("div",{staticClass:"mygrid",staticStyle:{height:"90%",overflow:"auto",padding:"20px","place-items":"start !important"}},t._l(t.searchresultmovie.results,(function(e){return r("div",[r("div",{staticStyle:{cursor:"pointer"},on:{click:function(r){return t.move("tv"==e.media_type?"/tvshow/"+e.id:"/movies/"+e.id)}}},[r("myimage",{attrs:{imagelink:t.$getimgurl(e.poster_path),info:e.overview,rating:e.vote_average}})],1)])})),0):t._e()],1)]):t._e()])}),[],!1,null,"60671f04",null);e.default=component.exports;installComponents(component,{Myimage:r(159).default})},215:function(t,e,r){"use strict";r.r(e);var n={name:"navbar",data:function(){return{loaded:!1}},mounted:function(){this.loaded=!0}},o=(r(409),r(50)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mynavbar ",staticStyle:{height:"50px",width:"100%","background-color":"rgba(62,62,62,0.62)"}},[t.loaded?r("div",{staticStyle:{height:"100%"}},[t.$screen.mobile?r("div",{staticClass:"myflex",staticStyle:{"padding-left":"10px","padding-right":"10px","justify-content":"space-between"}},[r("div",{staticStyle:{"margin-top":"auto","margin-bottom":"auto"}},[r("b-dropdown",{attrs:{variant:"dark"}},[r("b-dropdown-item",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$router.push("/movies/trending")}}},[t._v(" Movies")]),t._v(" "),r("b-dropdown-item",{on:{click:function(e){return t.$router.push("/tvshow/trending")}}},[t._v("TV Shows")])],1)],1),t._v(" "),r("div",{staticStyle:{"margin-top":"auto","margin-bottom":"auto"}},[r("NuxtLink",{attrs:{to:"/"}},[t._v("MovieLand")])],1),t._v(" "),r("div",{staticStyle:{"margin-top":"auto","margin-bottom":"auto",cursor:"pointer",color:"#a7a0a0"},on:{click:function(e){return t.$nuxt.$emit("open")}}},[t._v("\n    Search\n   ")])]):r("div",{staticClass:"mygridonerowbruh"},[r("div",{staticStyle:{display:"flex"}},[r("NuxtLink",{attrs:{to:"/movies/trending"}},[t._v("Movies")]),t._v(" "),r("NuxtLink",{staticStyle:{"padding-left":"15px"},attrs:{to:"/tvshow/trending"}},[t._v("TV Shows")])],1),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("MovieLand")]),t._v(" "),r("input",{staticClass:"myrounded input-group",staticStyle:{"max-width":"15rem",margin:"auto",padding:"1px","text-align":"center"},attrs:{placeholder:"Type to search"},on:{input:function(t){return t.target.value=""},click:function(e){return t.$nuxt.$emit("open")}}})],1)]):t._e()])}),[],!1,null,"730307a1",null);e.default=component.exports},221:function(t,e,r){"use strict";var n=r(7),o=r(570),c=r(571),d=r(157);r(568);d.SwiperCore.use([o.a,c.a]),n.default.component("Swiper",d.Swiper),n.default.component("SwiperSlide",d.SwiperSlide)},222:function(t,e,r){"use strict";function n(path){return"https://image.tmdb.org/t/p/w500".concat(path)}function o(path){return"https://image.tmdb.org/t/p/w780".concat(path)}function c(path){return"https://image.tmdb.org/t/p/original".concat(path)}function d(){document.body.style.overflowY="hidden"}function l(){document.body.style.overflowY="unset"}e.a=function(t,e){t.app;e("getimgurl",n),e("getimgurlbig",c),e("getimgurlmedium",o),e("showoverflow",l),e("hideoverflow",d),e("emptyimage","data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==")}},223:function(t,e,r){"use strict";var n=r(7),o=r(359);n.default.use(o.a,{md:768,lg:992,xl:1200,mobile:function(t){return!t.md}})},224:function(t,e,r){"use strict";var n=r(7),o=r(360);n.default.use(o.a,{lazyComponent:!0,observer:!0,error:r(365),attempt:2,observerOptions:{threshold:.01,rootMargin:"-5px"},adapter:{error:function(t){t.bindType;var e=t.el;t.naturalHeight,t.naturalWidth,t.$parent,t.src,t.loading,t.error,t.Init;e.classList.add("imgerrorclass")}}})},225:function(t,e,r){"use strict";var n=r(7),o=r(361),c=r.n(o);n.default.use(c.a)},226:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(18),r(60),r(22),r(353);var n="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNCAzNCIgd2lkdGg9IjM0IiBoZWlnaHQ9IjM0IiBmaWxsPSJibGFjayI+CiAgPHBhdGggb3BhY2l0eT0iLjI1IiBkPSJNMTYgMCBBMTYgMTYgMCAwIDAgMTYgMzIgQTE2IDE2IDAgMCAwIDE2IDAgTTE2IDQgQTEyIDEyIDAgMCAxIDE2IDI4IEExMiAxMiAwIDAgMSAxNiA0Ii8+CiAgPHBhdGggZD0iTTE2IDAgQTE2IDE2IDAgMCAxIDMyIDE2IEwyOCAxNiBBMTIgMTIgMCAwIDAgMTYgNHoiIHRyYW5zZm9ybT0icm90YXRlKDE0NC4xNTUgMTYgMTYpIj4KICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBmcm9tPSIwIDE2IDE2IiB0bz0iMzYwIDE2IDE2IiBkdXI9IjAuOHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiAgPC9wYXRoPgo8L3N2Zz4K"},270:function(t,e,r){var content=r(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("785f8107",content,!0,{sourceMap:!1})},332:function(t,e,r){var content=r(528);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("585ab572",content,!0,{sourceMap:!1})},333:function(t,e,r){var content=r(530);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("f0b6e3b6",content,!0,{sourceMap:!1})},334:function(t,e,r){var content=r(532);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("2f61aa80",content,!0,{sourceMap:!1})},363:function(t,e,r){"use strict";var n=r(215),o={components:{Searchstuff:r(214).default,Navbar:n.default},data:function(){return{}}},c=(r(531),r(50)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("navbar"),t._v(" "),r("searchstuff"),t._v(" "),r("Nuxt",{staticClass:"nooverflow",attrs:{"keep-alive":"","keep-alive-props":{include:["pages/index.vue"]}}})],1)}),[],!1,null,"4bf69c8f",null);e.a=component.exports;installComponents(component,{Navbar:r(215).default,Searchstuff:r(214).default})},364:function(t,e,r){t.exports=r.p+"img/playicon.5f19522.svg"},365:function(t,e,r){t.exports=r.p+"img/errorimage.79b14ff.svg"},366:function(t,e,r){r(367),t.exports=r(368)},407:function(t,e,r){var content=r(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("41aece88",content,!0,{sourceMap:!1})},408:function(t,e,r){var n=r(58)(!1);n.push([t.i,".swiper-slide{flex-shrink:unset!important;max-width:200px;height:100%;position:relative;transition-property:transform}.myrounded{border-radius:1rem}.loader,.loader:after{border-radius:50%;width:10em;height:10em}.loader{margin:60px auto;font-size:10px;position:relative;text-indent:-9999em;border:1.1em solid rgba(0,0,0,.2);border-left-color:rgba(102,137,100,.95);transform:translateZ(0);-webkit-animation:load8 1.1s linear infinite;animation:load8 1.1s linear infinite}@-webkit-keyframes load8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes load8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.mygrid{align-items:center;justify-items:center;place-items:center;display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:1rem}.textlength{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px}.mygridonerow{max-width:1500px;height:350px;overflow-x:auto;align-items:center;justify-items:center;place-items:center;display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));grid-gap:1rem;grid-auto-flow:column}a,a:visited{color:#a7a0a0}a:link{text-decoration:none}.mygridonerowbruh{margin-top:12px;display:grid;align-items:center;justify-items:center;place-items:center;grid-template-columns:repeat(3,minmax(190px,1fr));grid-gap:1rem;grid-auto-flow:column}.mycontainer{padding-top:50px;margin:auto;padding-left:5%;padding-right:5%}.background{opacity:1;transition:opacity 1s ease;height:100%}.background,.backgroundopacity{background-size:cover;background-repeat:no-repeat;z-index:-10;width:100%;padding:0;margin:0;position:absolute}.backgroundopacity{opacity:0;transition:opacity 2s ease;height:100vh}.backgroundopacity[lazy=loaded]{opacity:1}.overlaygradient{width:100%;height:100vh;padding:0;margin:0;position:absolute;background:linear-gradient(180deg,rgba(25,29,27,0) -79%,#1b1c1d 86%)}@media screen and (min-width:2400px){.mycontainer{max-width:1600px;padding-left:0;padding-right:0}}@media screen and (max-width:1000px){.mycontainer{padding-left:4%;padding-right:4%}}.myimage{max-width:200px;min-height:300px;width:200px;-o-object-fit:scale-down;object-fit:scale-down;background-color:#252828}.myimage[lazy=loaded]{-o-object-fit:cover;object-fit:cover}.myflex{display:flex;height:100%;width:100%}.imgerrorclass{min-height:300px;-o-object-fit:scale-down!important;object-fit:scale-down!important}@media screen and (max-width:700px){.imgerrorclass,.myimage{min-height:255px}.myimage{max-width:170px;width:170px}.mycontainer{padding-left:3%;padding-right:3%}.mygrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));grid-gap:1rem}}::-webkit-scrollbar{height:12px;width:12px;background:#000}::-webkit-scrollbar-thumb{background:#403d3d;-webkit-border-radius:1ex;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.75)}::-webkit-scrollbar-corner{background:#000}.slide-fade-enter-active,.slide-fade-leave-active{transition:all .2s ease}.slide-fade-enter,.slide-fade-leave-to{transform:translateX(50px);opacity:0}",""]),t.exports=n},409:function(t,e,r){"use strict";r(270)},410:function(t,e,r){var n=r(58)(!1);n.push([t.i,".Absolute-Center[data-v-730307a1]{height:100%;width:100%;position:absolute}.mynavbar[data-v-730307a1]{position:fixed;top:0;z-index:100;-webkit-backdrop-filter:saturate(180%) blur(10px);backdrop-filter:saturate(180%) blur(10px)}",""]),t.exports=n},414:function(t,e){},416:function(t,e){},428:function(t,e){},430:function(t,e){},458:function(t,e){},460:function(t,e){},461:function(t,e){},466:function(t,e){},468:function(t,e){},474:function(t,e){},476:function(t,e){},495:function(t,e){},507:function(t,e){},510:function(t,e){},527:function(t,e,r){"use strict";r(332)},528:function(t,e,r){var n=r(58)(!1);n.push([t.i,".topdiv[data-v-7657c3fb]{max-width:200px;display:flex;transition:.5s ease}.rating[data-v-7657c3fb]{font-weight:700;padding-right:2px;position:absolute;display:table-cell;background-color:#404040;color:#fff;padding-left:2px;right:0}.zoom[data-v-7657c3fb]:hover{transform:scale(1.05)}.playicon[data-v-7657c3fb]{margin:auto;height:50px;opacity:0;width:50px;transition:.5s ease}.insidecontent:hover .playicon[data-v-7657c3fb]{opacity:1}.innercontainer[data-v-7657c3fb]{position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%}.insidecontent[data-v-7657c3fb]:hover{background-color:hsla(0,0%,100%,.5)}.insidecontent[data-v-7657c3fb]{display:flex;height:100%;width:100%;transition:.5s ease}@media screen and (max-width:700px){.topdiv[data-v-7657c3fb]{max-width:170px}}",""]),t.exports=n},529:function(t,e,r){"use strict";r(333)},530:function(t,e,r){var n=r(58)(!1);n.push([t.i,".mymodal[data-v-60671f04]{position:fixed;display:flex;top:0;left:0;background-color:rgba(27,28,29,.71);bottom:0;width:100%;height:100%;z-index:200}.themodal[data-v-60671f04]{margin:auto;background-color:hsla(0,0%,100%,.7);-webkit-backdrop-filter:saturate(180%) blur(10px);backdrop-filter:saturate(180%) blur(10px);height:800px;border-radius:2rem;z-index:250;width:1200px}@media screen and (max-width:1000px){.themodal[data-v-60671f04]{border-radius:0;height:100%;width:100%}}",""]),t.exports=n},531:function(t,e,r){"use strict";r(334)},532:function(t,e,r){var n=r(58)(!1);n.push([t.i,".nooverflow{position:relative;height:100%;width:100%}body{color:#fff;transition:background-color .3s;overflow-x:hidden;background-color:#1b1c1d}#__layout,#__layout>div,#app,body,div#__nuxt,html{height:100%}.fadein{-webkit-animation:appear .5s;animation:appear .5s;margin:auto}@-webkit-keyframes appear{0%{opacity:0;transform:translateX(50px)}}.fadein2{-webkit-animation:appear .8s;animation:appear .8s}@keyframes appear{0%{opacity:0}}",""]),t.exports=n},533:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return d})),r.d(e,"actions",(function(){return l})),r.d(e,"mutations",(function(){return m}));var n=r(68),o=r(18),c=(r(60),r(14),"34142515d9d23817496eeb4ff1d223d0"),d=function(){return{}},l={getmoviebyid:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return Object(n.a)(t),o.abrupt("return",r.$axios.$get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c,"&language=en-US&append_to_response=videos,credits")));case 2:case"end":return o.stop()}}),o)})))()},getshowbyid:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return Object(n.a)(t),o.abrupt("return",r.$axios.$get("https://api.themoviedb.org/3/tv/".concat(e,"?api_key=").concat(c,"&language=en-US&append_to_response=videos,credits,external_ids")));case 2:case"end":return o.stop()}}),o)})))()},getsimilarmovies:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return Object(n.a)(t),o.abrupt("return",r.$axios.$get("https://api.themoviedb.org/3/movie/".concat(e,"/similar?api_key=").concat(c,"&language=en-US&page=1")));case 2:case"end":return o.stop()}}),o)})))()},getsimilartvshows:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return Object(n.a)(t),o.abrupt("return",r.$axios.$get("https://api.themoviedb.org/3/tv/".concat(e,"/similar?api_key=").concat(c,"&language=en-US&page=1")));case 2:case"end":return o.stop()}}),o)})))()},getepisodes:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var d,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return Object(n.a)(t),d=e.id,l=e.seassonnumber,o.abrupt("return",r.$axios.$get("https://api.themoviedb.org/3/tv/".concat(d,"/season/").concat(l,"?api_key=").concat(c,"&language=en-US")));case 3:case"end":return o.stop()}}),o)})))()},getpouplarmovies:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return Object(n.a)(t),o.abrupt("return",r.$axios.$get("https://api.themoviedb.org/3/movie/popular?api_key=".concat(c,"&language=en-US&page=").concat(e)));case 2:case"end":return o.stop()}}),o)})))()},searchmovie:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return Object(n.a)(t),o.abrupt("return",r.$axios.$get("https://api.themoviedb.org/3/search/multi?api_key=".concat(c,"&query=").concat(e,"&language=en-US")));case 2:case"end":return o.stop()}}),o)})))()},getpouplarshows:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return Object(n.a)(t),o.abrupt("return",r.$axios.$get("https://api.themoviedb.org/3/tv/popular?api_key=".concat(c,"&language=en-US&page=").concat(e)));case 2:case"end":return o.stop()}}),o)})))()}},m={}}},[[366,13,1,14]]]);