(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["79f6cf4a"],{"45ab":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-input",{directives:[{name:"select-all",rawName:"v-select-all"}],staticClass:"col bg-grey-1",attrs:{outlined:"",label:"Search"},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null;e.searchField=""}},scopedSlots:e._u([{key:"append",fn:function(){return[""!==e.searchField?n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.searchField=""}}}):e._e(),n("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.searchField,callback:function(t){e.searchField=t},expression:"searchField"}})},c=[],s=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("386d"),n("c47a")),a=n.n(s),i=n("2f62"),o=n("5c3a");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={directives:{selectAll:o["a"]},computed:u({},Object(i["d"])("index",["search"]),{searchField:{get:function(){return this.search},set:function(e){this.setSearch(e)}}}),methods:u({},Object(i["b"])("index",["setSearch"]))},d=p,f=n("2877"),b=n("fe09"),m=Object(f["a"])(d,r,c,!1,null,null,null);t["default"]=m.exports;m.options.components=Object.assign({QInput:b["q"],QIcon:b["o"]},m.options.components||{})},"5c3a":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={inserted:function(e){var t=e.querySelector(".q-field__native");t.addEventListener("focus",(function(){t.value.length&&t.select()}))}}},a3f3:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"q-pa-md",staticStyle:{"padding-left":"5%","padding-right":"5%"}},[n("div",{staticClass:"row q-pa-md"},[n("search",{staticStyle:{"max-width":"220px"}}),n("div",{staticStyle:{"margin-left":"40px"}},[n("q-tooltip",{attrs:{anchor:"top middle"}},[e._v("搜尋類型")]),n("q-btn-toggle",{attrs:{spread:"","no-caps":"","toggle-color":"blue-6","text-color":"black",color:"grey-2",options:[{label:"使用者",value:"auth"},{label:"日期",value:"date"},{label:"食材或料理",value:"whom"}]},model:{value:e.searchType,callback:function(t){e.searchType=t},expression:"searchType"}})],1)],1),n("q-list",{staticStyle:{"font-size":"16px"},attrs:{separator:"",bordered:""}},e._l(e.tracks,(function(t,r){return n("q-item",{key:r,staticClass:"bg-green-1"},[n("q-item-section",{staticStyle:{"max-width":"220px"}},[n("q-item-label",[n("q-icon",{attrs:{name:"account_circle"}}),e._v("\n          "+e._s(t.auth)+"\n        ")],1)],1),n("q-item-section",[n("q-item-label",[e._v("\n          "+e._s(e._f("mean")(t.what))+"\n        ")])],1),n("q-item-section",[n("q-item-label",[e._v("\n          "+e._s(t.whom)+"\n        ")])],1),n("q-item-section",{attrs:{side:""}},[n("div",{staticClass:"row"},[n("div",{staticClass:"column justify-center"},[n("q-icon",{staticClass:"row q-mr-xs",attrs:{name:"event",size:"18px"}})],1),n("div",{staticClass:"col"},[n("q-item-label",{staticClass:"justify-end"},[e._v("\n              "+e._s(t.date)+"\n            ")]),n("q-item-label",{staticClass:"row justify-end",attrs:{caption:""}},[e._v("\n              "+e._s(t.time)+"\n            ")])],1)])])],1)})),1)],1)},c=[],s=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),a=n.n(s),i=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={data:function(){return{}},computed:l({},Object(i["d"])("track",["type"]),{},Object(i["c"])("track",["tracks"]),{searchType:{get:function(){return this.type},set:function(e){this.setType(e)}}}),methods:l({},Object(i["b"])("track",["setType"])),filters:{mean:function(e){return"add_dish"==e?"新增料理：":"edit_dish"==e?"更改料理：":"edit_six"==e?"更改食材的六大類：":"edit_nut"==e?"更改食材的其他營養素：":"login"==e?"登入":"register"==e?"註冊":"logout"==e?"登出":void 0}},components:{search:n("45ab").default}},p=u,d=n("2877"),f=n("fe09"),b=Object(d["a"])(p,r,c,!1,null,null,null);t["default"]=b.exports;b.options.components=Object.assign({QTooltip:f["L"],QBtnToggle:f["f"],QList:f["v"],QItem:f["r"],QItemSection:f["t"],QItemLabel:f["s"],QIcon:f["o"]},b.options.components||{})}}]);