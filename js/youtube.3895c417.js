(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["youtube"],{"36f6":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("header",{staticClass:"card-header"},[s("p",{staticClass:"card-header-title"},[t._v("\n      Youtube Videos\n    ")]),s("a",{staticClass:"card-header-icon",attrs:{"aria-label":"more options"},on:{click:t.showHide}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fas",class:t.show?"fa-angle-down":"fa-angle-up",attrs:{"aria-hidden":"true"}})])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"card-content"},[s("div",{staticClass:"content"},[0===t.youtubePlaylist.length?s("div",[t._v("\n        Loading videos...\n      ")]):t._e(),t._l(t.youtubePlaylist,function(e,a){return s("div",{key:a},[s("div",{staticClass:"aspect-ratio"},[s("iframe",{staticClass:"aspect-ratio",attrs:{src:"https://www.youtube.com/embed/"+e.contentDetails.videoId,frameborder:"0",allowfullscreen:""}})]),a<2?s("br"):t._e()])})],2)])])},i=[],o={name:"YoutubeVideos",data:function(){var t=this.$cookie.get("youtube");return t=null===t||"true"===t,{youtubePlaylist:[],show:t}},mounted:function(){var t=this;fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=UURuM4_srnCdgGN50IlJxNBQ&key=".concat("AIzaSyDbZzRM_rD0lwl32MSwR7oREnuyNDaSl8I")).then(function(e){return e.json().then(function(e){e.items&&(t.youtubePlaylist=e.items,t.youtubePlaylist.length=3)})})},methods:{showHide:function(){this.show=!this.show,this.$cookie.set("youtube",this.show,{expires:"1M"})}}},n=o,l=s("2877"),u=Object(l["a"])(n,a,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=youtube.3895c417.js.map