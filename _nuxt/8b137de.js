(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{601:function(e,t,n){"use strict";n.r(t);var r,o=n(18),c=(n(60),{components:{Myimage:n(159).default},data:function(){return{page:1,thelist:Object(),loading:!0}},methods:{isbottom:(r=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(Math.round(window.scrollY+window.innerHeight+5)>=Math.round(document.body.scrollHeight))){e.next=4;break}return e.next=4,this.load();case 4:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)}),load:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading=!0,t.prev=1,e.thelist.results){t.next=8;break}return t.next=5,e.$store.dispatch("getpouplarmovies",e.page);case 5:e.thelist=t.sent,t.next=12;break;case 8:return t.next=10,e.$store.dispatch("getpouplarmovies",e.page);case 10:n=t.sent,e.thelist.results.push.apply(e.thelist.results,n.results);case 12:e.page++,t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),alert(t.t0);case 18:return t.prev=18,e.loading=!1,t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[1,15,18,21]])})))()}},destroyed:function(){document.removeEventListener("scroll",this.isbottom)},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.load();case 2:document.addEventListener("scroll",e.isbottom);case 3:case"end":return t.stop()}}),t)})))()}}),l=c,d=n(50),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mycontainer"},[n("div",{staticClass:"py-3"}),e._v(" "),n("h3",[e._v("Trending Movies")]),e._v(" "),n("div",{staticClass:"py-2"}),e._v(" "),e.thelist.results?n("div",{staticClass:"mygrid"},e._l(e.thelist.results,(function(t){return n("div",[n("nuxt-link",{attrs:{to:"/movies/"+t.id}},[n("myimage",{attrs:{imagelink:e.$getimgurl(t.poster_path),info:t.overview,rating:t.vote_average}})],1)],1)})),0):e._e(),e._v(" "),e.loading?n("div",{staticStyle:{"text-align":"center"}},[n("b-spinner")],1):e._e(),e._v(" "),n("div",{staticClass:"py-2"})])}),[],!1,null,"52834f94",null);t.default=component.exports;installComponents(component,{Myimage:n(159).default})}}]);