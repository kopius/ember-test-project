"use strict";define("ember-test-project/app",["exports","ember","ember-test-project/resolver","ember-load-initializers","ember-test-project/config/environment"],function(e,t,r,a,i){var n=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,n=t.default.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:r.default}),(0,a.default)(n,i.default.modulePrefix),e.default=n}),define("ember-test-project/application/adapter",["exports","ember-test-project/config/environment","active-model-adapter"],function(e,t,r){e.default=r.default.extend({host:t.default.apiHost})}),define("ember-test-project/application/serializer",["exports","active-model-adapter"],function(e,t){e.default=t.ActiveModelSerializer.extend({})}),define("ember-test-project/application/template",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.3",loc:{source:null,start:{line:1,column:0},end:{line:8,column:0}},moduleName:"ember-test-project/application/template.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("h1"),a=e.createTextNode(" Welcome to Ember Test Project! ");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createElement("h2"),a=e.createTextNode("If you're seeing this, you had a successful deployment.");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createElement("br");e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createElement("h4"),a=e.createTextNode("Good for you.");e.appendChild(r,a),e.appendChild(t,r);var r=e.createTextNode("\n\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var a=new Array(1);return a[0]=e.createMorphAt(t,8,8,r),a},statements:[["content","outlet",["loc",[null,[7,0],[7,10]]],0,0,0,0]],locals:[],templates:[]}}())}),define("ember-test-project/components/app-version",["exports","ember-cli-app-version/components/app-version","ember-test-project/config/environment"],function(e,t,r){var a=r.default.APP.name,i=r.default.APP.version;e.default=t.default.extend({version:i,name:a})}),define("ember-test-project/controllers/array",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("ember-test-project/controllers/object",["exports","ember"],function(e,t){e.default=t.default.Controller}),define("ember-test-project/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("ember-test-project/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("ember-test-project/initializers/active-model-adapter",["exports","active-model-adapter","active-model-adapter/active-model-serializer"],function(e,t,r){e.default={name:"active-model-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("adapter:-active-model",t.default),e.register("serializer:-active-model",r.default)}}}),define("ember-test-project/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-test-project/config/environment"],function(e,t,r){e.default={name:"App Version",initialize:(0,t.default)(r.default.APP.name,r.default.APP.version)}}),define("ember-test-project/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ember-test-project/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("ember-test-project/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,r){e.default={name:"ember-data",initialize:t.default}}),define("ember-test-project/initializers/export-application-global",["exports","ember","ember-test-project/config/environment"],function(e,t,r){function a(){var e=arguments[1]||arguments[0];if(r.default.exportApplicationGlobal!==!1){var a;if("undefined"!=typeof window)a=window;else if("undefined"!=typeof global)a=global;else{if("undefined"==typeof self)return;a=self}var i,n=r.default.exportApplicationGlobal;i="string"==typeof n?n:t.default.String.classify(r.default.modulePrefix),a[i]||(a[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[i]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("ember-test-project/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("ember-test-project/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("ember-test-project/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("ember-test-project/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("ember-test-project/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("ember-test-project/router",["exports","ember","ember-test-project/config/environment"],function(e,t,r){var a=t.default.Router.extend({location:r.default.locationType});a.map(function(){}),e.default=a}),define("ember-test-project/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-test-project/config/environment",["ember"],function(e){var t="ember-test-project";try{var r=t+"/config/environment",a=document.querySelector('meta[name="'+r+'"]').getAttribute("content"),i=JSON.parse(unescape(a)),n={default:i};return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(e){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests||require("ember-test-project/app").default.create({name:"ember-test-project",version:"0.0.0+f96bb0b0"});