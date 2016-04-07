"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a,r){var l=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),(0,a["default"])(l,r["default"].modulePrefix),e["default"]=l}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n["default"].APP.name,r=n["default"].APP.version;e["default"]=t["default"].extend({version:r,name:a})}),define("dummy/components/ivy-tree-group",["exports","ivy-tree/components/ivy-tree-group"],function(e,t){e["default"]=t["default"]}),define("dummy/components/ivy-tree-item",["exports","ivy-tree/components/ivy-tree-item"],function(e,t){e["default"]=t["default"]}),define("dummy/components/ivy-tree",["exports","ivy-tree/components/ivy-tree"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){}),e["default"]=a}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.4.4",loc:{source:null,start:{line:1,column:0},end:{line:7,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1");e.setAttribute(n,"class","page-header");var a=e.createTextNode("ivy-tree");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("hr");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("View source on ");e.appendChild(n,a);var a=e.createElement("a");e.setAttribute(a,"href","https://github.com/IvyApp/ivy-tree");var r=e.createTextNode("GitHub");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode(".");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,2,2,n),a},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:9,column:6},end:{line:9,column:52}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Oranges");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:10,column:6},end:{line:10,column:55}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Pineapples");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:16,column:10},end:{line:16,column:59}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Macintosh");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:21,column:14},end:{line:21,column:70}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Washington State");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:22,column:14},end:{line:22,column:62}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Michigan");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:23,column:14},end:{line:23,column:62}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("New York");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:20,column:12},end:{line:24,column:12}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("              ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n              ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n              ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(3);return a[0]=e.createMorphAt(t,1,1,n),a[1]=e.createMorphAt(t,3,3,n),a[2]=e.createMorphAt(t,5,5,n),a},statements:[["block","group2.item",[],["class","list-group-item"],0,null,["loc",[null,[21,14],[21,86]]]],["block","group2.item",[],["class","list-group-item"],1,null,["loc",[null,[22,14],[22,78]]]],["block","group2.item",[],["class","list-group-item"],2,null,["loc",[null,[23,14],[23,78]]]]],locals:["group2"],templates:[e,t,n]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:17,column:10},end:{line:25,column:10}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("            ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","badge");var a=e.createTextNode("3");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n            ");e.appendChild(t,n);var n=e.createElement("span"),a=e.createTextNode("Granny Smith");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,5,5,n),e.insertBoundary(t,null),a},statements:[["block","item2.group",[],["class","list-group"],0,null,["loc",[null,[20,12],[24,28]]]]],locals:["item2"],templates:[e]}}(),n=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:26,column:10},end:{line:26,column:54}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Fuji");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:15,column:8},end:{line:27,column:8}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(3);return a[0]=e.createMorphAt(t,1,1,n),a[1]=e.createMorphAt(t,3,3,n),a[2]=e.createMorphAt(t,5,5,n),a},statements:[["block","group1.item",[],["class","list-group-item"],0,null,["loc",[null,[16,10],[16,75]]]],["block","group1.item",[],["class","list-group-item"],1,null,["loc",[null,[17,10],[25,26]]]],["block","group1.item",[],["class","list-group-item"],2,null,["loc",[null,[26,10],[26,70]]]]],locals:["group1"],templates:[e,t,n]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:11,column:6},end:{line:28,column:6}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","badge");var a=e.createTextNode("3");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","caret"),e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createElement("span"),a=e.createTextNode("Apples");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[3]),r=new Array(2);return r[0]=e.createAttrMorph(a,"onclick"),r[1]=e.createMorphAt(t,7,7,n),e.insertBoundary(t,null),r},statements:[["attribute","onclick",["subexpr","action",[["get","item1.toggle",["loc",[null,[13,45],[13,57]]]]],[],["loc",[null,[13,36],[13,59]]]]],["block","item1.group",[],["class","list-group"],0,null,["loc",[null,[15,8],[27,24]]]]],locals:["item1"],templates:[e]}}(),a=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:29,column:6},end:{line:29,column:52}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Bananas");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),r=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:30,column:6},end:{line:30,column:50}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Pears");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:8,column:4},end:{line:31,column:4}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n      ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n      ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(5);return a[0]=e.createMorphAt(t,1,1,n),a[1]=e.createMorphAt(t,3,3,n),a[2]=e.createMorphAt(t,5,5,n),a[3]=e.createMorphAt(t,7,7,n),a[4]=e.createMorphAt(t,9,9,n),a},statements:[["block","group.item",[],["class","list-group-item"],0,null,["loc",[null,[9,6],[9,67]]]],["block","group.item",[],["class","list-group-item"],1,null,["loc",[null,[10,6],[10,70]]]],["block","group.item",[],["class","list-group-item"],2,null,["loc",[null,[11,6],[28,21]]]],["block","group.item",[],["class","list-group-item"],3,null,["loc",[null,[29,6],[29,67]]]],["block","group.item",[],["class","list-group-item"],4,null,["loc",[null,[30,6],[30,65]]]]],locals:["group"],templates:[e,t,n,a,r]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:5,column:2},end:{line:32,column:2}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","badge");var a=e.createTextNode("5");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n    ");e.appendChild(t,n);var n=e.createElement("span"),a=e.createTextNode("Fruits");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,5,5,n),e.insertBoundary(t,null),a},statements:[["block","item.group",[],["class","list-group"],0,null,["loc",[null,[8,4],[31,19]]]]],locals:["item"],templates:[e]}}(),t=function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:37,column:6},end:{line:37,column:53}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Broccoli");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:38,column:6},end:{line:38,column:52}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Carrots");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:43,column:10},end:{line:43,column:57}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Romaine");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:44,column:10},end:{line:44,column:57}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Iceberg");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:45,column:10},end:{line:45,column:60}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Butterhead");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:42,column:8},end:{line:46,column:8}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(3);return a[0]=e.createMorphAt(t,1,1,n),a[1]=e.createMorphAt(t,3,3,n),a[2]=e.createMorphAt(t,5,5,n),a},statements:[["block","group1.item",[],["class","list-group-item"],0,null,["loc",[null,[43,10],[43,73]]]],["block","group1.item",[],["class","list-group-item"],1,null,["loc",[null,[44,10],[44,73]]]],["block","group1.item",[],["class","list-group-item"],2,null,["loc",[null,[45,10],[45,76]]]]],locals:["group1"],templates:[e,t,n]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:39,column:6},end:{line:47,column:6}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","badge");var a=e.createTextNode("3");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createElement("span"),a=e.createTextNode("Lettuce");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,5,5,n),e.insertBoundary(t,null),a},statements:[["block","item1.group",[],["class","list-group"],0,null,["loc",[null,[42,8],[46,24]]]]],locals:["item1"],templates:[e]}}(),a=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:48,column:6},end:{line:48,column:52}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Spinach");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),r=function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:53,column:10},end:{line:53,column:55}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Acorn");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:54,column:10},end:{line:54,column:58}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Ambercup");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:55,column:10},end:{line:55,column:60}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Autumn Cup");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),a=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:56,column:10},end:{line:56,column:57}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Hubbard");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),r=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:57,column:10},end:{line:57,column:57}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Kabocha");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),l=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:58,column:10},end:{line:58,column:59}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Butternut");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),i=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:59,column:10},end:{line:59,column:59}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Spaghetti");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),o=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:60,column:10},end:{line:60,column:64}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Sweet Dumpling");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),d=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:61,column:10},end:{line:61,column:56}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("Turban");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:52,column:8},end:{line:62,column:8}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(9);return a[0]=e.createMorphAt(t,1,1,n),a[1]=e.createMorphAt(t,3,3,n),a[2]=e.createMorphAt(t,5,5,n),a[3]=e.createMorphAt(t,7,7,n),a[4]=e.createMorphAt(t,9,9,n),a[5]=e.createMorphAt(t,11,11,n),a[6]=e.createMorphAt(t,13,13,n),a[7]=e.createMorphAt(t,15,15,n),a[8]=e.createMorphAt(t,17,17,n),a},statements:[["block","group1.item",[],["class","list-group-item"],0,null,["loc",[null,[53,10],[53,71]]]],["block","group1.item",[],["class","list-group-item"],1,null,["loc",[null,[54,10],[54,74]]]],["block","group1.item",[],["class","list-group-item"],2,null,["loc",[null,[55,10],[55,76]]]],["block","group1.item",[],["class","list-group-item"],3,null,["loc",[null,[56,10],[56,73]]]],["block","group1.item",[],["class","list-group-item"],4,null,["loc",[null,[57,10],[57,73]]]],["block","group1.item",[],["class","list-group-item"],5,null,["loc",[null,[58,10],[58,75]]]],["block","group1.item",[],["class","list-group-item"],6,null,["loc",[null,[59,10],[59,75]]]],["block","group1.item",[],["class","list-group-item"],7,null,["loc",[null,[60,10],[60,80]]]],["block","group1.item",[],["class","list-group-item"],8,null,["loc",[null,[61,10],[61,72]]]]],locals:["group1"],templates:[e,t,n,a,r,l,i,o,d]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:49,column:6},end:{line:63,column:6}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","badge");var a=e.createTextNode("9");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n        ");e.appendChild(t,n);var n=e.createElement("span"),a=e.createTextNode("Squash");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,5,5,n),e.insertBoundary(t,null),a},statements:[["block","item1.group",[],["class","list-group"],0,null,["loc",[null,[52,8],[62,24]]]]],locals:["item1"],templates:[e]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:36,column:4},end:{line:64,column:4}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n      ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(5);return a[0]=e.createMorphAt(t,1,1,n),a[1]=e.createMorphAt(t,3,3,n),a[2]=e.createMorphAt(t,5,5,n),a[3]=e.createMorphAt(t,7,7,n),a[4]=e.createMorphAt(t,9,9,n),e.insertBoundary(t,null),a},statements:[["block","group.item",[],["class","list-group-item"],0,null,["loc",[null,[37,6],[37,68]]]],["block","group.item",[],["class","list-group-item"],1,null,["loc",[null,[38,6],[38,67]]]],["block","group.item",[],["class","list-group-item"],2,null,["loc",[null,[39,6],[47,21]]]],["block","group.item",[],["class","list-group-item"],3,null,["loc",[null,[48,6],[48,67]]]],["block","group.item",[],["class","list-group-item"],4,null,["loc",[null,[49,6],[63,21]]]]],locals:["group"],templates:[e,t,n,a,r]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:33,column:2},end:{line:65,column:2}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","badge");var a=e.createTextNode("5");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n    ");e.appendChild(t,n);var n=e.createElement("span"),a=e.createTextNode("Vegetables");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,5,5,n),e.insertBoundary(t,null),a},statements:[["block","item.group",[],["class","list-group"],0,null,["loc",[null,[36,4],[64,19]]]]],locals:["item"],templates:[e]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.4.4",loc:{source:null,start:{line:4,column:0},end:{line:66,column:0}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(t,0,0,n),a[1]=e.createMorphAt(t,1,1,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","tree.item",[],["class","list-group-item"],0,null,["loc",[null,[5,2],[32,16]]]],["block","tree.item",[],["class","list-group-item"],1,null,["loc",[null,[33,2],[65,16]]]]],locals:["tree"],templates:[e,t]}}();return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.4.4",loc:{source:null,start:{line:1,column:0},end:{line:69,column:0}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"id","application"),e.setAttribute(n,"role","application");var a=e.createTextNode("\n\n");e.appendChild(n,a);var a=e.createElement("h2");
e.setAttribute(a,"id","foods");var r=e.createTextNode("Foods");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[0]),3,3),a},statements:[["block","ivy-tree",[],["class","list-group","aria-labelledby","foods"],0,null,["loc",[null,[4,0],[66,13]]]]],locals:[],templates:[e]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(l){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ivy-tree",version:"0.0.0+0f9bcecb"});