(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,3,4,5],{590:function(e,t,n){var content=n(594);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(59).default)("bfa16792",content,!0,{sourceMap:!1})},591:function(e,t,n){var content=n(599);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(59).default)("2cabca63",content,!0,{sourceMap:!1})},592:function(e,t,n){"use strict";n.r(t);var r={name:"circleload",props:{overlay:{default:!0}}},o=(n(593),n(50)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"fadein",class:e.overlay?"overlay":""},[e._m(0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"loadercustom"},[t("div",{staticClass:"loader ",attrs:{size:"lg"}})])}],!1,null,"c0b208de",null);t.default=component.exports},593:function(e,t,n){"use strict";n(590)},594:function(e,t,n){var r=n(58)(!1);r.push([e.i,".loadercustom[data-v-c0b208de]{z-index:250;transform:translate(calc(50vw - 50%),calc(45vh - 50%));opacity:.5}.loadercustom[data-v-c0b208de],.overlay[data-v-c0b208de]{position:fixed;top:0;left:0}.overlay[data-v-c0b208de]{bottom:0;width:100vw;height:100vh;background-color:rgba(87,87,87,.7);z-index:200}",""]),e.exports=r},595:function(e,t,n){"use strict";n.r(t);var r={name:"myswiper",components:{Myimage:n(160).default},data:function(){return{}},methods:{onSwiper:function(e){console.log(e)},onSlideChange:function(){console.log("slide change")}}},o=(n(598),n(50)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("swiper",{staticStyle:{padding:"30px 50px 50px 0px"},attrs:{"space-between":10,"slides-per-view":"auto","free-mode":!0,loop:!1,pagination:!1,navigation:!0}},[e._t("default")],2)],1)}),[],!1,null,"affb9e48",null);t.default=component.exports},596:function(e,t,n){var content=n(603);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(59).default)("2ff85a9b",content,!0,{sourceMap:!1})},597:function(e,t,n){var content=n(605);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(59).default)("33516d04",content,!0,{sourceMap:!1})},598:function(e,t,n){"use strict";n(591)},599:function(e,t,n){var r=n(58)(!1);r.push([e.i,".img-fluid[data-v-affb9e48]{max-width:100%;height:auto}.w-100[data-v-affb9e48]{width:100%}.ml-auto[data-v-affb9e48],.mx-auto[data-v-affb9e48]{margin-left:auto}.mr-auto[data-v-affb9e48],.mx-auto[data-v-affb9e48]{margin-right:auto}",""]),e.exports=r},600:function(e,t,n){"use strict";n.r(t);var r={name:"myfetch",components:{Circleload:n(592).default},props:{fetchobject:{default:null,required:!0}}},o=(n(602),n(50)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return null!=e.fetchobject?n("div",[e.fetchobject.pending?n("circleload"):e._e(),e._v(" "),e.fetchobject.error?n("div",{staticClass:"overlayerror"},[n("div",{staticStyle:{display:"flex",height:"100%",width:"100%"}},[n("div",{staticStyle:{margin:"auto",color:"white"}},[e._v("\r\n\r\n  "+e._s(e.fetchobject.error.message)+"\r\n\r\n   ")])])]):e._e()],1):e._e()}),[],!1,null,"a8c42bf0",null);t.default=component.exports;installComponents(component,{Circleload:n(592).default})},601:function(e,t,n){"use strict";n.r(t);var r=n(227),o={name:"myimage2",props:{imagelink:{default:String,required:!0},info:{default:String,required:!1},rating:{default:String}},data:function(){return{spinner:r.a,tooltip:{disabled:this.$screen.mobile},svgicon:n(369)}}},c=(n(604),n(50)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.topright",modifiers:{topright:!0}}],staticClass:"topdiv shadow",attrs:{title:e.info}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imagelink,expression:"imagelink"}],staticClass:"myimage myrounded",attrs:{src:e.spinner}})])}),[],!1,null,"7d106d3f",null);t.default=component.exports},602:function(e,t,n){"use strict";n(596)},603:function(e,t,n){var r=n(58)(!1);r.push([e.i,".overlayerror[data-v-a8c42bf0]{position:fixed;top:0;left:0;bottom:0;width:100vw;height:100vh;background-color:#000;z-index:400}",""]),e.exports=r},604:function(e,t,n){"use strict";n(597)},605:function(e,t,n){var r=n(58)(!1);r.push([e.i,".topdiv[data-v-7d106d3f]{max-width:200px;display:flex;transition:.5s ease}@media screen and (max-width:700px){.topdiv[data-v-7d106d3f]{max-width:170px}}",""]),e.exports=r},606:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNCAzNCIgd2lkdGg9IjM0IiBoZWlnaHQ9IjM0IiBmaWxsPSJibGFjayI+CiAgPHBhdGggb3BhY2l0eT0iLjI1IiBkPSJNMTYgMCBBMTYgMTYgMCAwIDAgMTYgMzIgQTE2IDE2IDAgMCAwIDE2IDAgTTE2IDQgQTEyIDEyIDAgMCAxIDE2IDI4IEExMiAxMiAwIDAgMSAxNiA0Ii8+CiAgPHBhdGggZD0iTTE2IDAgQTE2IDE2IDAgMCAxIDMyIDE2IEwyOCAxNiBBMTIgMTIgMCAwIDAgMTYgNHoiIHRyYW5zZm9ybT0icm90YXRlKDE0NC4xNTUgMTYgMTYpIj4KICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBmcm9tPSIwIDE2IDE2IiB0bz0iMzYwIDE2IDE2IiBkdXI9IjAuOHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiAgPC9wYXRoPgo8L3N2Zz4K"},608:function(e,t,n){var content=n(613);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(59).default)("3bd7dbf8",content,!0,{sourceMap:!1})},612:function(e,t,n){"use strict";n(608)},613:function(e,t,n){var r=n(58)(!1);r.push([e.i,"ul[data-v-3e92fa9e]{padding:0;list-style-type:none}.myposter[data-v-3e92fa9e]{max-height:400px;height:400px}.contentmargin[data-v-3e92fa9e]{margin:0 10%}.displayflexcoluminmobile[data-v-3e92fa9e]{flex-direction:row}.paddingoverview[data-v-3e92fa9e]{padding-left:50px}@media screen and (max-width:768px){.paddingoverview[data-v-3e92fa9e]{padding-left:0}.contentmargin[data-v-3e92fa9e]{margin:0}.displayflexcoluminmobile[data-v-3e92fa9e]{flex-direction:column;text-align:center}.myposter[data-v-3e92fa9e]{width:280px;margin:auto}}",""]),e.exports=r},620:function(e,t,n){"use strict";n.r(t);var r=n(18),o=(n(1),n(127),n(128),n(28),n(60),n(600)),c=n(595),l=n(160),d={components:{Myimage2:n(601).default,Myimage:l.default,Myswiper:c.default,Myfetch:o.default},watch:{pickedseassonnumber:function(e,t){var n=this;this.episodelist=Object(),this.loadingepisodes=!0,this.$nextTick(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.$store.dispatch("getepisodes",{seassonnumber:e,id:n.id});case 3:n.episodelist=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:return t.prev=8,n.loadingepisodes=!1,t.finish(8);case 11:case"end":return t.stop()}}),t,null,[[0,6,8,11]])}))))}},data:function(){return{loadingepisodes:!0,episodelist:Object(),pickedseassonnumber:1,spinner:n(606),movie:Object(),similar:Object(),id:String("")}},computed:{theseassons:function(){return this.movie.seasons?this.movie.seasons.filter((function(e){return!e.name.toLowerCase().includes("specials")})):[Object()]},youtubesvideos:function(){return this.movie.id?this.movie.videos.results.filter((function(e){return e.site.toLowerCase().includes("youtube")})):[Object()]},poster:function(){return this.movie.id?this.movie.poster_path?this.$getimgurlbig(this.movie.poster_path):n(370):"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="},backgroundimage:function(){return this.movie.id?'background-image: url("'.concat(this.$getimgurlbig(this.movie.backdrop_path),'") '):""}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.id||(e.id=e.$route.query.id),e.id){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,t.next=6,e.$store.dispatch("getsimilartvshows",e.id);case 6:e.similar=t.sent,t.next=11;break;case 9:t.prev=9,t.t0=t.catch(3);case 11:return t.prev=11,t.next=14,e.$store.dispatch("getepisodes",{seassonnumber:e.pickedseassonnumber,id:e.id});case 14:e.episodelist=t.sent,t.next=19;break;case 17:t.prev=17,t.t1=t.catch(11);case 19:return t.prev=19,e.loadingepisodes=!1,t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[3,9],[11,17,19,22]])})))()},methods:{},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.id=e.$route.params.id,e.id){t.next=4;break}return e.$nuxt.error("No ID"),t.abrupt("return");case 4:return t.next=6,e.$store.dispatch("getshowbyid",e.id);case 6:if(e.movie=t.sent,e.movie.id){t.next=9;break}return t.abrupt("return");case 9:case"end":return t.stop()}}),t)})))()}},v=(n(612),n(50)),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"background fadein",style:e.backgroundimage}),e._v(" "),n("myfetch",{attrs:{fetchobject:e.$fetchState}}),e._v(" "),n("div",{staticClass:"overlaygradient"},[n("div",{staticClass:"mycontainer"},[n("div",{staticClass:"py-3"}),e._v(" "),n("div",{staticClass:"contentmargin"},[n("section",{staticClass:"displayflexcoluminmobile",staticStyle:{display:"flex"}},[n("div",{staticStyle:{display:"flex","flex-direction":"column"}},[n("img",{staticClass:"myrounded myposter",attrs:{src:e.poster}}),e._v(" "),n("div",{staticClass:"py-2"}),e._v(" "),n("div",{staticClass:"py-1"}),e._v(" "),e.$screen.mobile?n("div",{staticClass:"py-2"}):e._e()]),e._v(" "),n("div",{staticClass:"paddingoverview"},[n("h3",[e._v(e._s(e.movie.name)+"   "+e._s(e.movie.vote_average?"⭐"+e.movie.vote_average:""))]),e._v(" "),n("div",{staticClass:"py-1"}),e._v(" "),e._l(e.movie.genres,(function(t){return n("span",[n("b-button",{staticClass:"rounded-pill",staticStyle:{"background-color":"black"}},[e._v(e._s(t.name))])],1)})),e._v(" "),n("div",{staticClass:"py-3"}),e._v(" "),n("h3",[e._v(e._s(e.movie.overview?"Synopsis":""))]),e._v(" "),n("p",[e._v(e._s(e.movie.overview))])],2)]),e._v(" "),n("div",{staticClass:"py-4"}),e._v(" "),e.theseassons[0].name?n("section",[n("h3",{staticClass:"py-1"},[e._v("Seassons")]),e._v(" "),n("myswiper",e._l(e.theseassons,(function(s){return n("swiper-slide",[n("div",{staticStyle:{cursor:"pointer"},on:{click:function(t){e.pickedseassonnumber=s.season_number}}},[n("myimage2",{attrs:{imagelink:e.$getimgurl(s.poster_path)}}),e._v(" "),n("p",[e._v(e._s("Seasson "+s.season_number))])],1)])})),1),e._v(" "),n("div",{staticStyle:{"min-height":"400px"}},[e.loadingepisodes?n("div",[n("b-spinner")],1):e._e(),e._v(" "),e.episodelist.episodes?n("div",[n("h4",[e._v("Seasson "+e._s(e.pickedseassonnumber))]),e._v(" "),n("ul",{staticClass:"fadein rounded-bottom",staticStyle:{"max-height":"400px",overflow:"auto"}},e._l(e.episodelist.episodes,(function(t){return n("li",{staticClass:"list-group-item ",staticStyle:{"background-color":"#272828"}},[n("nuxt-link",{attrs:{to:"/watch?id="+e.movie.external_ids.imdb_id+"&seasson="+t.season_number+"&episode="+t.episode_number}},[e._v("\n         "+e._s(t.name)+" - "+e._s("Episode "+t.episode_number)+" - Air Date: "+e._s(t.air_date)+"\n         ")])],1)})),0)]):e._e()]),e._v(" "),n("div",{staticClass:"py-3"})],1):e._e(),e._v(" "),n("div",{staticClass:"py-3"}),e._v(" "),e.movie.credits&&e.movie.credits.cast[0]?n("section",[n("h3",[e._v("Cast")]),e._v(" "),n("myswiper",e._l(e.movie.credits.cast,(function(t){return n("swiper-slide",[n("myimage2",{attrs:{imagelink:e.$getimgurl(t.profile_path),info:t.character}}),e._v(" "),n("p",{staticClass:"textlength",staticStyle:{"padding-top":"2px"}},[e._v(e._s(t.name))])],1)})),1)],1):e._e(),e._v(" "),e.similar.results&&e.similar.results[0]?n("section",[n("h3",[e._v("Similar TV Shows")]),e._v(" "),n("myswiper",e._l(e.similar.results,(function(t){return n("swiper-slide",[n("nuxt-link",{attrs:{to:"/tvshow/"+t.id}},[n("myimage",{attrs:{rating:""+Math.round(t.vote_average),imagelink:e.$getimgurl(t.poster_path),info:t.overview}})],1)],1)})),1)],1):e._e()])])])],1)}),[],!1,null,"3e92fa9e",null);t.default=component.exports;installComponents(component,{Myfetch:n(600).default,Myimage2:n(601).default,Myswiper:n(595).default,Myimage:n(160).default})}}]);