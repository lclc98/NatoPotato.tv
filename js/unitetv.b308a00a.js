(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["unitetv"],{"02f4":function(t,e,n){var i=n("4588"),r=n("be13");t.exports=function(t){return function(e,n){var s,a,o=String(r(e)),c=i(n),u=o.length;return c<0||c>=u?t?"":void 0:(s=o.charCodeAt(c),s<55296||s>56319||c+1===u||(a=o.charCodeAt(c+1))<56320||a>57343?t?o.charAt(c):s:t?o.slice(c,c+2):a-56320+(s-55296<<10)+65536)}}},"11e9":function(t,e,n){var i=n("52a7"),r=n("4630"),s=n("6821"),a=n("6a99"),o=n("69a8"),c=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=s(t),e=a(e,!0),c)try{return u(t,e)}catch(n){}if(o(t,e))return r(!i.f.call(t,e),t[e])}},"1c4c":function(t,e,n){"use strict";var i=n("9b43"),r=n("5ca1"),s=n("4bf8"),a=n("1fa8"),o=n("33a4"),c=n("9def"),u=n("f1ae"),l=n("27ee");r(r.S+r.F*!n("5cc5")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,r,f,d=s(t),v="function"==typeof this?this:Array,h=arguments.length,p=h>1?arguments[1]:void 0,m=void 0!==p,g=0,y=l(d);if(m&&(p=i(p,h>2?arguments[2]:void 0,2)),void 0==y||v==Array&&o(y))for(e=c(d.length),n=new v(e);e>g;g++)u(n,g,m?p(d[g],g):d[g]);else for(f=y.call(d),n=new v;!(r=f.next()).done;g++)u(n,g,m?a(f,p,[r.value,g],!0):r.value);return n.length=g,n}})},"2dfa":function(t,e,n){},"2f21":function(t,e,n){"use strict";var i=n("79e5");t.exports=function(t,e){return!!t&&i(function(){e?t.call(null,function(){},1):t.call(null)})}},"456d":function(t,e,n){var i=n("4bf8"),r=n("0d58");n("5eda")("keys",function(){return function(t){return r(i(t))}})},5407:function(t,e,n){"use strict";var i=n("2dfa"),r=n.n(i);r.a},"55dd":function(t,e,n){"use strict";var i=n("5ca1"),r=n("d8e8"),s=n("4bf8"),a=n("79e5"),o=[].sort,c=[1,2,3];i(i.P+i.F*(a(function(){c.sort(void 0)})||!a(function(){c.sort(null)})||!n("2f21")(o)),"Array",{sort:function(t){return void 0===t?o.call(s(this)):o.call(s(this),r(t))}})},"5dbc":function(t,e,n){var i=n("d3f4"),r=n("8b97").set;t.exports=function(t,e,n){var s,a=e.constructor;return a!==n&&"function"==typeof a&&(s=a.prototype)!==n.prototype&&i(s)&&r&&r(t,s),t}},"5df3":function(t,e,n){"use strict";var i=n("02f4")(!0);n("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})},"5eda":function(t,e,n){var i=n("5ca1"),r=n("8378"),s=n("79e5");t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],a={};a[t]=e(n),i(i.S+i.F*s(function(){n(1)}),"Object",a)}},"67ab":function(t,e,n){var i=n("ca5a")("meta"),r=n("d3f4"),s=n("69a8"),a=n("86cc").f,o=0,c=Object.isExtensible||function(){return!0},u=!n("79e5")(function(){return c(Object.preventExtensions({}))}),l=function(t){a(t,i,{value:{i:"O"+ ++o,w:{}}})},f=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,i)){if(!c(t))return"F";if(!e)return"E";l(t)}return t[i].i},d=function(t,e){if(!s(t,i)){if(!c(t))return!0;if(!e)return!1;l(t)}return t[i].w},v=function(t){return u&&h.NEED&&c(t)&&!s(t,i)&&l(t),t},h=t.exports={KEY:i,NEED:!1,fastKey:f,getWeak:d,onFreeze:v}},"7f7f":function(t,e,n){var i=n("86cc").f,r=Function.prototype,s=/^\s*function ([^ (]*)/,a="name";a in r||n("9e1e")&&i(r,a,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},"8b97":function(t,e,n){var i=n("d3f4"),r=n("cb7c"),s=function(t,e){if(r(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,n){return s(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:s}},ac6a:function(t,e,n){for(var i=n("cadf"),r=n("0d58"),s=n("2aba"),a=n("7726"),o=n("32e9"),c=n("84f2"),u=n("2b4c"),l=u("iterator"),f=u("toStringTag"),d=c.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=r(v),p=0;p<h.length;p++){var m,g=h[p],y=v[g],_=a[g],b=_&&_.prototype;if(b&&(b[l]||o(b,l,d),b[f]||o(b,f,g),c[g]=d,y))for(m in i)b[m]||s(b,m,i[m],!0)}},b39a:function(t,e,n){var i=n("d3f4");t.exports=function(t,e){if(!i(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},c26b:function(t,e,n){"use strict";var i=n("86cc").f,r=n("2aeb"),s=n("dcbc"),a=n("9b43"),o=n("f605"),c=n("4a59"),u=n("01f9"),l=n("d53b"),f=n("7a56"),d=n("9e1e"),v=n("67ab").fastKey,h=n("b39a"),p=d?"_s":"size",m=function(t,e){var n,i=v(e);if("F"!==i)return t._i[i];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,u){var l=t(function(t,i){o(t,l,e,"_i"),t._t=e,t._i=r(null),t._f=void 0,t._l=void 0,t[p]=0,void 0!=i&&c(i,n,t[u],t)});return s(l.prototype,{clear:function(){for(var t=h(this,e),n=t._i,i=t._f;i;i=i.n)i.r=!0,i.p&&(i.p=i.p.n=void 0),delete n[i.i];t._f=t._l=void 0,t[p]=0},delete:function(t){var n=h(this,e),i=m(n,t);if(i){var r=i.n,s=i.p;delete n._i[i.i],i.r=!0,s&&(s.n=r),r&&(r.p=s),n._f==i&&(n._f=r),n._l==i&&(n._l=s),n[p]--}return!!i},forEach:function(t){h(this,e);var n,i=a(t,arguments.length>1?arguments[1]:void 0,3);while(n=n?n.n:this._f){i(n.v,n.k,this);while(n&&n.r)n=n.p}},has:function(t){return!!m(h(this,e),t)}}),d&&i(l.prototype,"size",{get:function(){return h(this,e)[p]}}),l},def:function(t,e,n){var i,r,s=m(t,e);return s?s.v=n:(t._l=s={i:r=v(e,!0),k:e,v:n,p:i=t._l,n:void 0,r:!1},t._f||(t._f=s),i&&(i.n=s),t[p]++,"F"!==r&&(t._i[r]=s)),t},getEntry:m,setStrong:function(t,e,n){u(t,e,function(t,n){this._t=h(t,e),this._k=n,this._l=void 0},function(){var t=this,e=t._k,n=t._l;while(n&&n.r)n=n.p;return t._t&&(t._l=n=n?n.n:t._t._f)?l(0,"keys"==e?n.k:"values"==e?n.v:[n.k,n.v]):(t._t=void 0,l(1))},n?"entries":"values",!n,!0),f(e)}}},e0b8:function(t,e,n){"use strict";var i=n("7726"),r=n("5ca1"),s=n("2aba"),a=n("dcbc"),o=n("67ab"),c=n("4a59"),u=n("f605"),l=n("d3f4"),f=n("79e5"),d=n("5cc5"),v=n("7f20"),h=n("5dbc");t.exports=function(t,e,n,p,m,g){var y=i[t],_=y,b=m?"set":"add",w=_&&_.prototype,C={},x=function(t){var e=w[t];s(w,t,"delete"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!l(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof _&&(g||w.forEach&&!f(function(){(new _).entries().next()}))){var S=new _,k=S[b](g?{}:-0,1)!=S,L=f(function(){S.has(1)}),T=d(function(t){new _(t)}),j=!g&&f(function(){var t=new _,e=5;while(e--)t[b](e,e);return!t.has(-0)});T||(_=e(function(e,n){u(e,_,t);var i=h(new y,e,_);return void 0!=n&&c(n,m,i[b],i),i}),_.prototype=w,w.constructor=_),(L||j)&&(x("delete"),x("has"),m&&x("get")),(j||k)&&x(b),g&&w.clear&&delete w.clear}else _=p.getConstructor(e,t,m,b),a(_.prototype,n),o.NEED=!0;return v(_,t),C[t]=_,r(r.G+r.W+r.F*(_!=y),C),g||p.setStrong(_,t,m),_}},f068:function(t,e,n){"use strict";n.r(e);var i,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section"},[n("div",{staticClass:"columns is-centered"},[n("div",{staticClass:"column is-one-fifth-desktop"},[n("div",{staticClass:"card",staticStyle:{height:"100%","overflow-y":"auto"}},[n("div",{staticClass:"card-content",staticStyle:{position:"absolute",width:"100%"}},[t._l(t.users,function(e,i){return[n("div",{key:i,staticClass:"box has-pointer",class:i===t.selected?"has-box-select":"",on:{click:function(e){return t.onUserClick(i)}}},[n("article",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("figure",{staticClass:"image is-32x32"},[n("img",{staticClass:"is-rounded",attrs:{src:e.logo,alt:"Image"}})])]),n("div",{staticClass:"level-item"},[n("strong",[t._v(t._s(e.displayName))])])]),e.live?n("div",{staticClass:"level-right"},[n("div",{staticClass:"level-item"},[t._m(0,!0),t._v(" "+t._s(e.viewers)+"\n                  ")])]):t._e()])])]})],2)])]),t.selected>-1?n("div",{staticClass:"column is-two-fifths-desktop"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("article",{staticClass:"level"},[n("a",{attrs:{href:"https://www.twitch.tv/"+t.users[t.selected].username}},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("figure",{staticClass:"image is-32x32"},[n("img",{staticClass:"is-rounded",attrs:{src:t.users[t.selected].logo,alt:"Image"}})])]),n("div",{staticClass:"level-item"},[n("h1",{staticClass:"title"},[t._v(t._s(this.users[t.selected].displayName))])])])])]),n("div",{staticClass:"aspect-ratio"},[n("iframe",{staticClass:"aspect-ratio",attrs:{src:"https://player.twitch.tv/?channel="+t.users[t.selected].username,allowfullscreen:"true"}})]),n("br"),n("h6",{staticClass:"title is-3"},[t._v("UniteTV")]),t._m(1)])])]):t._e()]),n("br")])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon has-text-danger"},[n("i",{staticClass:"fas fa-circle"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{staticClass:"preline is-family-primary"},[t._v("            Welcome to UniteTV, we are more than a stream team, we are an established loving\n            community of friends and family, run by you guys!\n\n            I have created UniteTV for the soul purpose to give back to you all and to provide\n            you a place where you can make friends, grow your channel with like minded streamers\n            and most importantly, belong.\n\n            "),n("a",{staticClass:"is-size-6 has-text-weight-bold",attrs:{href:"https://goo.gl/forms/DRbjdL3ZjrM0G7hB3"}},[t._v("APPLY")]),t._v("\n\n            UniteTV is run through Nato’s discord which you can find "),n("a",{staticClass:"is-size-6 has-text-weight-bold",attrs:{href:"https://discord.gg/rTHmTdz"}},[t._v("here")]),t._v("\n\n            Thank you all for absolutely everything you do, it means the world to me!\n\n            Love NatoPotato.\n          ")])}],a=(n("55dd"),n("1c4c"),n("5df3"),n("f400"),n("7f7f"),n("ac6a"),n("456d"),n("96cf"),n("3b8d")),o=n("bb36"),c=n.n(o),u={name:"UniteTV",metaInfo:{title:"UniteTV",meta:[{vmid:"description",name:"description",content:"Welcome to UniteTV, we are more than a stream team, we are an established loving community of friends and family, run by you guys!"}],htmlAttrs:{lang:"en"}},data:function(){return{users:{},selected:-1}},mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,n,r,s,a,o,u,l;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=[],t.next=3,fetch("https://api.twitch.tv/kraken/teams/unitetv",{headers:{"Client-Id":"brspq2ex0gjwd2a9xejoh1mf5594e1",accept:"application/vnd.twitchtv.v5+json"}}).then(function(t){return t.json().then(function(t){e=t.users})}).catch(function(t){return console.log(t)});case 3:return n=Object.keys(e).map(function(t){var n=e[t];return{userId:n._id,username:n.name,displayName:n.display_name,logo:n.logo,live:!1}}),r=Object.keys(n).map(function(t){return n[t].userId}),t.next=7,c.a.withCredentials("brspq2ex0gjwd2a9xejoh1mf5594e1");case 7:return i=t.sent,t.next=10,i.helix.streams.getStreams({userId:r}).getAll();case 10:s=t.sent,a=Object.keys(s).map(function(t){var e=s[t];return{userId:e.userId,live:!0,viewers:e.viewers}}),o=a.length,u=new Map,n.concat(a).forEach(function(t){u.set(t.userId,Object.assign(u.get(t.userId)||{},t))}),l=Array.from(u.values()),l.sort(function(t,e){return t.live===e.live?t.live?e.viewers-t.viewers:0:t.live?-1:1}),this.users=l,o>0&&(this.selected=Math.floor(Math.random()*o));case 19:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{onUserClick:function(t){var e=this.users[t];e.live?this.selected=t:window.location.href="https://www.twitch.tv/".concat(e.username)}}},l=u,f=(n("5407"),n("2877")),d=Object(f["a"])(l,r,s,!1,null,"6352c48e",null);e["default"]=d.exports},f1ae:function(t,e,n){"use strict";var i=n("86cc"),r=n("4630");t.exports=function(t,e,n){e in t?i.f(t,e,r(0,n)):t[e]=n}},f400:function(t,e,n){"use strict";var i=n("c26b"),r=n("b39a"),s="Map";t.exports=n("e0b8")(s,function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=i.getEntry(r(this,s),t);return e&&e.v},set:function(t,e){return i.def(r(this,s),0===t?0:t,e)}},i,!0)}}]);
//# sourceMappingURL=unitetv.b308a00a.js.map