(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6900135a"],{"014b":function(t,e,n){"use strict";var r=n("e53d"),o=n("07e3"),c=n("8e60"),i=n("63b6"),a=n("9138"),f=n("ebfd").KEY,u=n("294c"),s=n("dbdb"),l=n("45f2"),b=n("62a0"),p=n("5168"),y=n("ccb9"),d=n("6718"),h=n("47ee"),v=n("9003"),m=n("e4ae"),g=n("f772"),w=n("241e"),O=n("36c3"),S=n("1bc3"),j=n("aebd"),P=n("a159"),x=n("0395"),_=n("bf0b"),k=n("9aa9"),C=n("d9f6"),E=n("c3a1"),N=_.f,F=C.f,J=x.f,D=r.Symbol,A=r.JSON,I=A&&A.stringify,T="prototype",z=p("_hidden"),M=p("toPrimitive"),W={}.propertyIsEnumerable,G=s("symbol-registry"),H=s("symbols"),K=s("op-symbols"),Q=Object[T],V="function"==typeof D&&!!k.f,Y=r.QObject,$=!Y||!Y[T]||!Y[T].findChild,q=c&&u(function(){return 7!=P(F({},"a",{get:function(){return F(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=N(Q,e);r&&delete Q[e],F(t,e,n),r&&t!==Q&&F(Q,e,r)}:F,B=function(t){var e=H[t]=P(D[T]);return e._k=t,e},L=V&&"symbol"==typeof D.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof D},R=function(t,e,n){return t===Q&&R(K,e,n),m(t),e=S(e,!0),m(n),o(H,e)?(n.enumerable?(o(t,z)&&t[z][e]&&(t[z][e]=!1),n=P(n,{enumerable:j(0,!1)})):(o(t,z)||F(t,z,j(1,{})),t[z][e]=!0),q(t,e,n)):F(t,e,n)},U=function(t,e){m(t);var n,r=h(e=O(e)),o=0,c=r.length;while(c>o)R(t,n=r[o++],e[n]);return t},X=function(t,e){return void 0===e?P(t):U(P(t),e)},Z=function(t){var e=W.call(this,t=S(t,!0));return!(this===Q&&o(H,t)&&!o(K,t))&&(!(e||!o(this,t)||!o(H,t)||o(this,z)&&this[z][t])||e)},tt=function(t,e){if(t=O(t),e=S(e,!0),t!==Q||!o(H,e)||o(K,e)){var n=N(t,e);return!n||!o(H,e)||o(t,z)&&t[z][e]||(n.enumerable=!0),n}},et=function(t){var e,n=J(O(t)),r=[],c=0;while(n.length>c)o(H,e=n[c++])||e==z||e==f||r.push(e);return r},nt=function(t){var e,n=t===Q,r=J(n?K:O(t)),c=[],i=0;while(r.length>i)!o(H,e=r[i++])||n&&!o(Q,e)||c.push(H[e]);return c};V||(D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var t=b(arguments.length>0?arguments[0]:void 0),e=function(n){this===Q&&e.call(K,n),o(this,z)&&o(this[z],t)&&(this[z][t]=!1),q(this,t,j(1,n))};return c&&$&&q(Q,t,{configurable:!0,set:e}),B(t)},a(D[T],"toString",function(){return this._k}),_.f=tt,C.f=R,n("6abf").f=x.f=et,n("355d").f=Z,k.f=nt,c&&!n("b8e3")&&a(Q,"propertyIsEnumerable",Z,!0),y.f=function(t){return B(p(t))}),i(i.G+i.W+i.F*!V,{Symbol:D});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ot=0;rt.length>ot;)p(rt[ot++]);for(var ct=E(p.store),it=0;ct.length>it;)d(ct[it++]);i(i.S+i.F*!V,"Symbol",{for:function(t){return o(G,t+="")?G[t]:G[t]=D(t)},keyFor:function(t){if(!L(t))throw TypeError(t+" is not a symbol!");for(var e in G)if(G[e]===t)return e},useSetter:function(){$=!0},useSimple:function(){$=!1}}),i(i.S+i.F*!V,"Object",{create:X,defineProperty:R,defineProperties:U,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:nt});var at=u(function(){k.f(1)});i(i.S+i.F*at,"Object",{getOwnPropertySymbols:function(t){return k.f(w(t))}}),A&&i(i.S+i.F*(!V||u(function(){var t=D();return"[null]"!=I([t])||"{}"!=I({a:t})||"{}"!=I(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!L(t))return v(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!L(e))return e}),r[1]=e,I.apply(A,r)}}),D[T][M]||n("35e8")(D[T],M,D[T].valueOf),l(D,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},"0395":function(t,e,n){var r=n("36c3"),o=n("6abf").f,c={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==c.call(t)?a(t):o(r(t))}},"268f":function(t,e,n){t.exports=n("fde4")},"32a6":function(t,e,n){var r=n("241e"),o=n("c3a1");n("ce7e")("keys",function(){return function(t){return o(r(t))}})},"355d":function(t,e){e.f={}.propertyIsEnumerable},"47ee":function(t,e,n){var r=n("c3a1"),o=n("9aa9"),c=n("355d");t.exports=function(t){var e=r(t),n=o.f;if(n){var i,a=n(t),f=c.f,u=0;while(a.length>u)f.call(t,i=a[u++])&&e.push(i)}return e}},6718:function(t,e,n){var r=n("e53d"),o=n("584a"),c=n("b8e3"),i=n("ccb9"),a=n("d9f6").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=c?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:i.f(t)})}},"6abf":function(t,e,n){var r=n("e6f3"),o=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},9003:function(t,e,n){var r=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a4bb:function(t,e,n){t.exports=n("8aae")},acca:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projects"},[n("h1",{staticClass:"subheading grey--text"},[t._v("Projects")]),n("v-container",{staticClass:"my-5"},[n("v-expansion-panel",t._l(t.myProjects,function(e){return n("v-expansion-panel-content",{key:e.title},[n("div",{staticClass:"py-1",attrs:{slot:"header"},slot:"header"},[t._v(t._s(e.title))]),n("v-card",[n("v-card-text",{staticClass:"px-4 grey--text"},[n("div",{staticClass:"font-weight-bold"},[t._v("Due by "+t._s(e.due))]),n("div",[t._v(t._s(e.content))])])],1)],1)}),1)],1)],1)},o=[],c=n("268f"),i=n.n(c),a=n("e265"),f=n.n(a),u=n("a4bb"),s=n.n(u),l=n("bd86");function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=s()(n);"function"===typeof f.a&&(r=r.concat(f()(n).filter(function(t){return i()(n,t).enumerable}))),r.forEach(function(e){Object(l["a"])(t,e,n[e])})}return t}n("ac6a");var p={data:function(){return{projects:[]}},computed:{myProjects:function(){return this.projects.filter(function(t){return"Hezekiah Valdez"===t.person&&"complete"!=t.status})}},created:function(){var t=this;db.collection("projects").onSnapshot(function(e){var n=e.docChanges();n.forEach(function(e){"added"===e.type&&t.projects.push(b({},e.doc.data(),{id:e.doc.id}))})})}},y=p,d=n("2877"),h=Object(d["a"])(y,r,o,!1,null,null,null);e["default"]=h.exports},bf0b:function(t,e,n){var r=n("355d"),o=n("aebd"),c=n("36c3"),i=n("1bc3"),a=n("07e3"),f=n("794b"),u=Object.getOwnPropertyDescriptor;e.f=n("8e60")?u:function(t,e){if(t=c(t),e=i(e,!0),f)try{return u(t,e)}catch(n){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},bf90:function(t,e,n){var r=n("36c3"),o=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return o(r(t),e)}})},ccb9:function(t,e,n){e.f=n("5168")},e265:function(t,e,n){t.exports=n("ed33")},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},fde4:function(t,e,n){n("bf90");var r=n("584a").Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-6900135a.js.map