(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,a,i){e.exports=i("2f39")},"0047":function(e,a,i){},"2d5d":function(e,a){e.exports={apiKey:"AIzaSyDXYYj4b_0eEZF2Dk0rjXftzM6q0E_uyWE",authDomain:"cc-site-fe313.firebaseapp.com",databaseURL:"https://cc-site-fe313.firebaseio.com",projectId:"cc-site-fe313",storageBucket:"cc-site-fe313.appspot.com",messagingSenderId:"291214071666",appId:"1:291214071666:web:1b76edcba4794b289b2feb",measurementId:"G-PHED3C4GBX"}},"2f39":function(e,a,i){"use strict";i.r(a);var t=i("967e"),n=i.n(t),o=(i("a481"),i("96cf"),i("fa84")),l=i.n(o),r=(i("7d6e"),i("e54f"),i("985d"),i("0047"),i("2b0e")),d=i("b05d"),c=i("2a19");r["a"].use(d["a"],{config:{},plugins:{Notify:c["a"]}});var s=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{attrs:{id:"q-app"}},[i("router-view")],1)},f=[],m={name:"App"},u=m,h=i("2877"),b=Object(h["a"])(u,s,f,!1,null,null,null),p=b.exports,g=i("2f62"),_=(i("6762"),i("2fdb"),i("dad6")),v=i.n(_),y=(i("f751"),i("386d"),i("7f7f"),i("1732")),B=i("59ca"),w=i.n(B),S=(i("e71f"),i("cab7")),E={dish_nutrient:[{name:"name",required:!0,label:"名稱",align:"center",field:function(e){return e.name},format:function(e){return"".concat(e)},sortable:!0},{name:"person",label:"人份",field:"person"},{name:"restaurant_id",align:"left",label:"餐廳",field:"restaurant_id"},{name:"number",align:"right",label:"編號",field:"number"},{name:"dish_photo",align:"center",label:"照片",field:"dish_photo"},{name:"grains",label:"全穀雜糧類",field:"grains"},{name:"meat_low",label:"蛋豆魚肉類（低脂）",field:"meat_low"},{name:"meat_med",label:"蛋豆魚肉類（中脂）",field:"meat_med"},{name:"meat_high",label:"蛋豆魚肉類（高脂）",field:"meat_high"},{name:"meat_max",label:"蛋豆魚肉類（超高脂）",field:"meat_max"},{name:"vegetables",label:"蔬菜類",field:"vegetables"},{name:"fruits",label:"水果類",field:"fruits"},{name:"dairy_all",label:"乳品類（全脂）",field:"dairy_all"},{name:"dairy_low",label:"乳品類（低脂）",field:"dairy_low"},{name:"dairy_de",label:"乳品類（脫脂）",field:"dairy_de"},{name:"oils",label:"油脂與堅果種子類",field:"oils"},{name:"calories",label:"熱量 (kcal)",field:"calories",sortable:!0},{name:"protein",label:"蛋白質 (g)",field:"protein",sortable:!0},{name:"fat",label:"脂肪 (g)",field:"fat",sortable:!0},{name:"carbs",label:"糖類 (g)",field:"carbs",sortable:!0},{name:"dietary_fiber",label:"膳食纖維 (g)",field:"dietary_fiber",sortable:!0},{name:"total_sugar",label:"糖質總量 (g)",field:"total_sugar",sortable:!0},{name:"sodium",label:"鈉 (mg)",field:"sodium",sortable:!0},{name:"potassium",label:"鉀 (mg)",field:"potassium",sortable:!0},{name:"calcium",label:"鈣 (mg)",field:"calcium",sortable:!0},{name:"magnesium",label:"鎂 (mg)",field:"magnesium",sortable:!0},{name:"iron",label:"鐵 (mg)",field:"iron",sortable:!0},{name:"zinc",label:"鋅 (mg)",field:"zinc",sortable:!0},{name:"phosphorus",label:"磷 (mg)",field:"phosphorus",sortable:!0},{name:"vitaminA",label:"維生素Ａ (IU)",field:"vitaminA",sortable:!0},{name:"vision_alcohol",label:"視網醇 (ug)",field:"vision_alcohol",sortable:!0},{name:"vitaminE",label:"a-維生素E (mg)",field:"vitaminE",sortable:!0},{name:"vitaminB1",label:"維生素B1 (mg)",field:"vitaminB1",sortable:!0},{name:"vitaminB2",label:"維生素B2 (mg)",field:"vitaminB2",sortable:!0},{name:"nicotin",label:"菸鹼素 (mg)",field:"nicotin",sortable:!0},{name:"vitaminB6",label:"維生素B6 (mg)",field:"vitaminB6",sortable:!0},{name:"vitaminB12",label:"維生素B12 (mg)",field:"vitaminB12",sortable:!0},{name:"folic_acid",label:"葉酸 (ug)",field:"folic_acid",sortable:!0},{name:"vitaminC",label:"維生素C (mg)",field:"vitaminC",sortable:!0},{name:"fatty_acidS",label:"脂肪酸S (mg)",field:"fatty_acidS",sortable:!0},{name:"fatty_acidM",label:"脂肪酸M (mg)",field:"fatty_acidM",sortable:!0},{name:"fatty_acidP",label:"脂肪酸P (mg)",field:"fatty_acidP",sortable:!0},{name:"cholesterol",label:"膽固醇 (mg)",field:"cholesterol",sortable:!0}],food_nutrient:[{name:"name",required:!0,label:"名稱",align:"center",field:function(e){return e.name},format:function(e){return"".concat(e)},sortable:!0},{name:"quantity",label:"份量 (100g)",field:"quantity",sortable:!0},{name:"trash",label:"廢棄率 (%)",field:"trash",sortable:!0},{name:"grains",label:"全穀雜糧類",field:"grains"},{name:"meat_low",label:"蛋豆魚肉類（低脂）",field:"meat_low"},{name:"meat_med",label:"蛋豆魚肉類（中脂）",field:"meat_med"},{name:"meat_high",label:"蛋豆魚肉類（高脂）",field:"meat_high"},{name:"meat_max",label:"蛋豆魚肉類（超高脂）",field:"meat_max"},{name:"vegetables",label:"蔬菜類",field:"vegetables"},{name:"fruits",label:"水果類",field:"fruits"},{name:"dairy_all",label:"乳品類（全脂）",field:"dairy_all"},{name:"dairy_low",label:"乳品類（低脂）",field:"dairy_low"},{name:"dairy_de",label:"乳品類（脫脂）",field:"dairy_de"},{name:"oils",label:"油脂與堅果類",field:"oils"},{name:"calories",label:"熱量 (kcal)",field:"calories",sortable:!0},{name:"protein",label:"蛋白質 (g)",field:"protein",sortable:!0},{name:"fat",label:"脂肪 (g)",field:"fat",sortable:!0},{name:"carbs",label:"糖類 (g)",field:"carbs",sortable:!0},{name:"dietary_fiber",label:"膳食纖維 (g)",field:"dietary_fiber",sortable:!0},{name:"total_sugar",label:"糖質總量 (g)",field:"total_sugar",sortable:!0},{name:"sodium",label:"鈉 (mg)",field:"sodium",sortable:!0},{name:"potassium",label:"鉀 (mg)",field:"potassium",sortable:!0},{name:"calcium",label:"鈣 (mg)",field:"calcium",sortable:!0},{name:"magnesium",label:"鎂 (mg)",field:"magnesium",sortable:!0},{name:"iron",label:"鐵 (mg)",field:"iron",sortable:!0},{name:"zinc",label:"鋅 (mg)",field:"zinc",sortable:!0},{name:"phosphorus",label:"磷 (mg)",field:"phosphorus",sortable:!0},{name:"vitaminA",label:"維生素Ａ (IU)",field:"vitaminA",sortable:!0},{name:"vision_alcohol",label:"視網醇 (ug)",field:"vision_alcohol",sortable:!0},{name:"vitaminE",label:"a-維生素E (mg)",field:"vitaminE",sortable:!0},{name:"vitaminB1",label:"維生素B1 (mg)",field:"vitaminB1",sortable:!0},{name:"vitaminB2",label:"維生素B2 (mg)",field:"vitaminB2",sortable:!0},{name:"nicotin",label:"菸鹼素 (mg)",field:"nicotin",sortable:!0},{name:"vitaminB6",label:"維生素B6 (mg)",field:"vitaminB6",sortable:!0},{name:"vitaminB12",label:"維生素B12 (mg)",field:"vitaminB12",sortable:!0},{name:"folic_acid",label:"葉酸 (ug)",field:"folic_acid",sortable:!0},{name:"vitaminC",label:"維生素C (mg)",field:"vitaminC",sortable:!0},{name:"fatty_acidS",label:"脂肪酸S (mg)",field:"fatty_acidS",sortable:!0},{name:"fatty_acidM",label:"脂肪酸M (mg)",field:"fatty_acidM",sortable:!0},{name:"fatty_acidP",label:"脂肪酸P (mg)",field:"fatty_acidP",sortable:!0},{name:"cholesterol",label:"膽固醇 (mg)",field:"cholesterol",sortable:!0}],nutrient:{calories:"calories",fat:"fat",protein:"protein",carbs:"carbs",dietary_fiber:"dietary_fiber",total_sugar:"total_sugar",sodium:"sodium",potassium:"potassium",calcium:"calcium",magnesium:"magnesium",iron:"iron",zinc:"zinc",phosphorus:"phosphorus",vitaminA:"vitaminA",vision_alcohol:"vision_alcohol",vitaminE:"vitaminE",vitaminB1:"vitaminB1",vitaminB2:"vitaminB2",vitaminB6:"vitaminB6",vitaminB12:"vitaminB12",vitaminC:"vitaminC",nicotin:"nicotin",folic_acid:"folic_acid",fatty_acidS:"fatty_acidS",fatty_acidM:"fatty_acidM",fatty_acidP:"fatty_acidP",cholesterol:"cholesterol"},nutrientChinese:{calories:"熱量(kcal)",fat:"脂肪(g)",protein:"蛋白質(g)",carbs:"糖類(g)",dietary_fiber:"膳食纖維(g)",total_sugar:"糖值總量(g)",sodium:"鈉(mg)",potassium:"鉀(mg)",calcium:"鈣(mg)",magnesium:"鎂(mg)",iron:"鐵(mg)",zinc:"鋅(mg)",phosphorus:"磷(mg)",vitaminA:"維生素Ａ(IU)",vision_alcohol:"視網醇(ug)",vitaminE:"a-維生素E(mg)",vitaminB1:"維生素B1(mg)",vitaminB2:"維生素B2(mg)",vitaminB6:"維生素B6(mg)",vitaminB12:"維生素B12(mg)",vitaminC:"維生素C(mg)",nicotin:"菸鹼素(mg)",folic_acid:"葉酸(ug)",fatty_acidS:"脂肪酸S(mg)",fatty_acidM:"脂肪酸M(mg)",fatty_acidP:"脂肪酸P(mg)",cholesterol:"膽固醇(mg)"},dish:[],food:[],restaurant:[],contain:[],recipe:[],editor:[{dish:"",user:"",time:""}],dish_id:"",dish_photo:"無",recipe_photo:"無",search:"",searchType:"dish",select:""},C={clear:function(e){e.dish_id="",e.dish_photo="無",e.recipe_photo="無",e.search="",e.searchType="",e.select=""},setSearch:function(e,a){e.search=a},clearSearch:function(e){e.search=""},setSelect:function(e,a){e.select=a},setSearchType:function(e,a){e.searchType=a},setDishReadyToUpdate:function(e,a){e.dishReadyToUpdate=a},addFood:function(e,a){e.food.push(a)},addDish:function(e,a){e.dish.push(a)},setDishId:function(e,a){e.dish_id=a},addRestaurant:function(e,a){e.restaurant.push(a)},addContain:function(e,a){e.contain.push(a)},addRecipe:function(e,a){e.recipe.push(a)},addDishPhoto:function(e,a){e.dish_photo=a},addRecipePhoto:function(e,a){e.recipe_photo=a},updateFood:function(e,a){for(var i=0;i<e.food.length;i++)e.food[i].id==a.id&&Object.assign(e.food[i],a)},updateDish:function(e,a){for(var i=0;i<e.dish.length;i++)e.dish[i].id==a.id&&Object.assign(e.dish[i],a)},updateRecipe:function(e,a){for(var i=0;i<e.recipe.length;i++)e.recipe[i].id==a.id&&Object.assign(e.recipe[i],a)},deleteContain:function(e,a){for(var i=0;i<e.contain.length;i++)e.contain[i].dish==a.dish&&(r["a"].delete(e.contain,i),i=e.contain.length)}},D={clear:function(e){var a=e.commit;a("clear")},setSearch:function(e,a){var i=e.commit;i("setSearch",a)},clearSearch:function(e){var a=e.commit;a("clearSearch")},setSelect:function(e,a){var i=e.commit;i("setSelect",a)},setSearchType:function(e,a){var i=e.commit;i("setSearchType",a)},setDishReadyToUpdate:function(e,a){var i=e.commit;i("setDishReadyToUpdate",a)},addDish:function(e,a){var i=e.commit,t=e.dispatch,n=Object(y["a"])(),o=a;o.id=n,i("setDishId",o.id),t("fbAddDish",o)},addRestaurant:function(e,a){var i=e.dispatch,t={name:a};i("fbAddRestaurant",t)},addContain:function(e,a){for(var i=e.dispatch,t=0;t<a.length;t++)i("fbAddContain",a[t])},addRecipe:function(e,a){var i=e.dispatch,t=Object(y["a"])(),n=a;n.id=t,i("fbAddRecipe",n)},addDownloadURL:function(e,a){var i=e.commit;"dishs"==a.type?i("addDishPhoto",a.url):"recipes"==a.type&&i("addRecipePhoto",a.url)},updateSix:function(e,a){var i=e.dispatch;i("fbUpdateSix",a)},updateNutrient:function(e,a){var i=e.dispatch;i("fbUpdateNutrient",a)},updateDish:function(e,a){var i=e.dispatch;i("fbUpdateDish",a)},updateRecipe:function(e,a){var i=e.dispatch;i("fbUpdateRecipe",a)},deleteContain:function(e,a){var i=e.dispatch;i("fbDeleteContain",a)},fbReadData:function(e){var a=e.commit,i=w.a.firestore();i.collection("foods").onSnapshot((function(e){e.docChanges().forEach((function(e){"added"===e.type&&a("addFood",e.doc.data()),"modified"===e.type&&a("updateFood",e.doc.data())}))})),i.collection("dishs").onSnapshot((function(e){e.docChanges().forEach((function(e){"added"===e.type&&a("addDish",e.doc.data()),"modified"===e.type&&a("updateDish",e.doc.data())}))})),i.collection("restaurants").onSnapshot((function(e){e.docChanges().forEach((function(e){"added"===e.type&&a("addRestaurant",e.doc.data().name)}))})),i.collection("recipes").onSnapshot((function(e){e.docChanges().forEach((function(e){"added"===e.type&&a("addRecipe",e.doc.data()),"modified"===e.type&&a("updateRecipe",e.doc.data())}))})),i.collection("contains").onSnapshot((function(e){e.docChanges().forEach((function(e){"added"===e.type&&a("addContain",e.doc.data()),"removed"===e.type&&a("deleteContain",e.doc.data())}))}))},fbAddDish:function(e,a){v()(e);var i=w.a.firestore().collection("dishs");i.add(a).then((function(){})).catch((function(e){console.error("Error adding dish: ",e)}))},fbAddRestaurant:function(e,a){v()(e);var i=w.a.firestore().collection("restaurants");i.add(a).then((function(){})).catch((function(e){console.error("Error adding restaurant: ",e)}))},fbAddRecipe:function(e,a){v()(e);var i=w.a.firestore().collection("recipes");i.add(a).then((function(){})).catch((function(e){console.error("Error adding recipe: ",e)}))},fbAddContain:function(e,a){v()(e);var i=w.a.firestore().collection("contains");i.add(a).then((function(){})).catch((function(e){console.error("Error adding document: ",e)}))},fbUpdateSix:function(e,a){v()(e);var i=w.a.firestore().collection("foods");i.get().then((function(e){e.forEach((function(e){e.data().id==a.id&&i.doc(e.id).update({grains:a.grains,fruits:a.fruits,vegetables:a.vegetables,oils:a.oils,dairy_all:a.dairy_all,dairy_low:a.dairy_low,dairy_de:a.dairy_de,meat_low:a.meat_low,meat_med:a.meat_med,meat_high:a.meat_high,meat_max:a.meat_max})}))}))},fbUpdateNutrient:function(e,a){v()(e);var i=w.a.firestore().collection("foods");i.get().then((function(e){e.forEach((function(e){e.data().id==a.id&&i.doc(e.id).update(a)}))}))},fbUpdateDish:function(e,a){v()(e);var i=w.a.firestore().collection("dishs");i.get().then((function(e){e.forEach((function(e){e.data().id==a.id&&i.doc(e.id).update(a)}))}))},fbUpdateRecipe:function(e,a){v()(e);var i=w.a.firestore().collection("recipes");i.get().then((function(e){e.forEach((function(e){e.data().id==a.id&&i.doc(e.id).update(a)}))}))},fbDeleteContain:function(e,a){v()(e);var i=w.a.firestore().collection("contains");i.get().then((function(e){e.forEach((function(e){e.data().dish==a&&i.doc(e.id).delete()}))}))}},x={contain:function(e,a){for(var i=[],t=0;t<e.contain.length;t++)e.contain[t].dish==e.select&&i.push(e.contain[t]);return i},dishFiltered:function(e,a){var i=[],t=0;for(t;t<e.dish.length;t++)e.dish[t].name.includes(e.search)&&i.push(e.dish[t]);return i},dish:function(e,a){var i=[];return i=a.dishFiltered,i},foodMakeDish:function(e,a){var i;return i=Object(S["a"])(a.contain,e.food),i},foodFiltered:function(e,a){for(var i=[],t=0;t<e.food.length;t++)e.food[t].name.includes(e.search)&&i.push(e.food[t]);return i},food:function(e,a){return e.select?a.foodMakeDish:a.foodFiltered},recipeMakeDish:function(e,a){for(var i={id:"",dish:"",photo:"無",text:""},t=0;t<e.recipe.length;t++)e.select==e.recipe[t].dish&&(i=e.recipe[t]);return i},recipe:function(e,a){return a.recipeMakeDish}},R={namespaced:!0,state:E,mutations:C,actions:D,getters:x};r["a"].use(g["a"]);var P=function(){var e=new g["a"].Store({modules:{index:R},strict:!1});return e},A=i("8c4f"),k=[{path:"/",component:function(){return Promise.all([i.e("66960ae1"),i.e("02c7f755")]).then(i.bind(null,"f241"))},children:[{path:"",component:function(){return Promise.all([i.e("66960ae1"),i.e("c432d9c8")]).then(i.bind(null,"8b24"))}},{path:"/auth",component:function(){return Promise.all([i.e("66960ae1"),i.e("196ba2fa")]).then(i.bind(null,"21f3"))}},{path:"/settings",component:function(){return i.e("2d20f6dd").then(i.bind(null,"b41f"))}}]}];k.push({path:"*",component:function(){return Promise.all([i.e("66960ae1"),i.e("4b47640d")]).then(i.bind(null,"e51e"))}});var M=k;r["a"].use(A["a"]);var U=function(){var e=new A["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:M,mode:"hash",base:""});return e},z=function(){var e="function"===typeof P?P({Vue:r["a"]}):P,a="function"===typeof U?U({Vue:r["a"],store:e}):U;e.$router=a;var i={el:"#q-app",router:a,store:e,render:function(e){return e(p)}};return{app:i,store:e,router:a}},j=(i("ea7b"),i("66ce"),i("2d5d")),q=i.n(j),I=function(e){var a=e.Vue;w.a.initializeApp(q.a),a.prototype.$firebase=w.a},T=z(),F=T.app,O=T.store,N=T.router;function V(){return X.apply(this,arguments)}function X(){return X=l()(n.a.mark((function e(){var a,i,t,o,l;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=!0,i=function(e){a=!1,window.location.href=e},t=window.location.href.replace(window.location.origin,""),o=[I],l=0;case 5:if(!(!0===a&&l<o.length)){e.next=23;break}if("function"===typeof o[l]){e.next=8;break}return e.abrupt("continue",20);case 8:return e.prev=8,e.next=11,o[l]({app:F,router:N,store:O,Vue:r["a"],ssrContext:null,redirect:i,urlPath:t});case 11:e.next=20;break;case 13:if(e.prev=13,e.t0=e["catch"](8),!e.t0||!e.t0.url){e.next=18;break}return window.location.href=e.t0.url,e.abrupt("return");case 18:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 20:l++,e.next=5;break;case 23:if(!1!==a){e.next=25;break}return e.abrupt("return");case 25:new r["a"](F);case 26:case"end":return e.stop()}}),e,null,[[8,13]])}))),X.apply(this,arguments)}V()},cab7:function(e,a,i){"use strict";i.d(a,"a",(function(){return t}));i("ac6a"),i("cadf"),i("06db"),i("456d");function t(e,a){for(var i=[],t={name:"總和",quantity:0,calories:0,fat:0,protein:0,carbs:0,grains:0,fruits:0,vegetables:0,oils:0,dairy_all:0,dairy_low:0,dairy_de:0,meat_low:0,meat_med:0,meat_high:0,meat_max:0,dietary_fiber:0,total_sugar:0,sodium:0,potassium:0,calcium:0,magnesium:0,iron:0,zinc:0,phosphorus:0,vitaminA:0,vision_alcohol:0,vitaminE:0,vitaminB1:0,vitaminB2:0,vitaminB6:0,vitaminB12:0,vitaminC:0,nicotin:0,folic_acid:0,fatty_acidS:0,fatty_acidM:0,fatty_acidP:0,cholesterol:0},n=function(t){for(var n=function(n){if(a[n].id==e[t].food){var l={id:""};Object.keys(a[n]).forEach((function(i){l[i]="id"==i||"name"==i||"trash"==i||"description"==i?a[n][i]:a[n][i]*e[t].quantity})),i.push(l),n=a.length}o=n},o=0;o<a.length;o++)n(o)},o=0;o<e.length;o++)n(o);for(var l=0;l<i.length;l++)t.quantity+=i[l].quantity,t.calories+=i[l].calories,t.fat+=i[l].fat,t.protein+=i[l].protein,t.carbs+=i[l].carbs,t.grains+=i[l].grains,t.fruits+=i[l].fruits,t.vegetables+=i[l].vegetables,t.oils+=i[l].oils,t.dairy_all+=i[l].dairy_all,t.dairy_low+=i[l].dairy_low,t.dairy_de+=i[l].dairy_de,t.meat_low+=i[l].meat_low,t.meat_med+=i[l].meat_med,t.meat_high+=i[l].meat_high,t.meat_max+=i[l].meat_max,t.dietary_fiber+=i[l].dietary_fiber,t.total_sugar+=i[l].total_sugar,t.sodium+=i[l].sodium,t.potassium+=i[l].potassium,t.calcium+=i[l].calcium,t.magnesium+=i[l].magnesium,t.iron+=i[l].iron,t.zinc+=i[l].zinc,t.phosphorus+=i[l].phosphorus,t.vitaminA+=i[l].vitaminA,t.vision_alcohol+=i[l].vision_alcohol,t.vitaminE+=i[l].vitaminE,t.vitaminB1+=i[l].vitaminB1,t.vitaminB2+=i[l].vitaminB2,t.vitaminB6+=i[l].vitaminB6,t.vitaminB12+=i[l].vitaminB12,t.vitaminC+=i[l].vitaminC,t.nicotin+=i[l].nicotin,t.folic_acid+=i[l].folic_acid,t.fatty_acidS+=i[l].fatty_acidS,t.fatty_acidM+=i[l].fatty_acidM,t.fatty_acidP+=i[l].fatty_acidP,t.cholesterol+=i[l].cholesterol;return i.push(t),i}}},[[0,"runtime","vendor"]]]);