(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["twitch"],{"100a":function(t,e,s){"use strict";s.r(e);var a,i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("header",{staticClass:"card-header"},[s("p",{staticClass:"card-header-title"},[t._v("\n      Previous Streams\n    ")]),s("a",{staticClass:"card-header-icon",attrs:{"aria-label":"more options"},on:{click:t.showHide}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fas",class:t.show?"fa-angle-down":"fa-angle-up",attrs:{"aria-hidden":"true"}})])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"card-content"},[s("div",{staticClass:"content"},[s("div",{staticClass:"columns"},[t._l(t.posts,function(t,e){return[s("div",{key:e,staticClass:"column is-half"},[s("div",{staticClass:"aspect-ratio"},[s("iframe",{staticClass:"aspect-ratio",attrs:{src:"https://player.twitch.tv/?video=v"+t._data.url.replace("https://www.twitch.tv/videos/","")+"&autoplay=false",allowfullscreen:"true",scrolling:"no"}})])])]})],2)])])])},n=[],r=(s("96cf"),s("3b8d")),c=s("bb36").default,o={name:"TwitchFeed",props:["channel"],data:function(){var t=this.$cookie.get("twitch");return t=null===t||"true"===t,{posts:[],show:t}},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.withCredentials("brspq2ex0gjwd2a9xejoh1mf5594e1");case 2:return a=t.sent,t.next=5,a.helix.users.getUserByName(this.channel);case 5:return e=t.sent,t.next=8,a.helix.videos.getVideosByUser(e.id,{type:"archive",first:2}).getAll();case 8:this.posts=t.sent,this.posts.length=2;case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{showHide:function(){this.show=!this.show,this.$cookie.set("twitch",this.show,{expires:"1M"})}}},l=o,h=s("2877"),u=Object(h["a"])(l,i,n,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=twitch.b4238fd2.js.map