(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["twitch"],{"100a":function(t,s,e){"use strict";e.r(s);var a,i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card"},[e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t._v(" Previous Streams ")]),e("a",{staticClass:"card-header-icon",attrs:{"aria-label":"more options"},on:{click:t.showHide}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas",class:t.show?"fa-angle-down":"fa-angle-up",attrs:{"aria-hidden":"true"}})])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"card-content"},[e("div",{staticClass:"content"},[e("div",{staticClass:"columns"},[t._l(t.posts,(function(t,s){return[e("div",{key:s,staticClass:"column is-half"},[e("div",{staticClass:"aspect-ratio"},[e("iframe",{staticClass:"aspect-ratio",attrs:{src:"https://player.twitch.tv/?video=v"+t._data.url.replace("https://www.twitch.tv/videos/","")+"&autoplay=false",allowfullscreen:"true",scrolling:"no"}})])])]}))],2)])])])},n=[],r=(e("96cf"),e("89ba")),c=e("2040"),o=e.n(c),l={name:"TwitchFeed",props:["channel"],data:function(){var t=!0;return this.$cookies.isKey("twitch")&&(t="true"===this.$cookies.get("twitch")),{posts:[],show:t}},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.a.withCredentials("brspq2ex0gjwd2a9xejoh1mf5594e1");case 2:return a=t.sent,t.next=5,a.helix.users.getUserByName(this.channel);case 5:return s=t.sent,t.next=8,a.helix.videos.getVideosByUserPaginated(s.id,{type:"archive",first:2}).getAll();case 8:this.posts=t.sent,this.posts.length=2;case 10:case"end":return t.stop()}}),t,this)})));function s(){return t.apply(this,arguments)}return s}(),methods:{showHide:function(){this.show=!this.show,this.$cookies.set("twitch",this.show,"1m")}}},h=l,u=e("2877"),d=Object(u["a"])(h,i,n,!1,null,null,null);s["default"]=d.exports}}]);
//# sourceMappingURL=twitch.a6af82b5.js.map