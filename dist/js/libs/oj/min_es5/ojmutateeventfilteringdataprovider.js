/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojdataprovider","ojs/ojcachediteratorresultsdataprovider","ojs/ojdedupdataprovider","ojs/ojcomponentcore","ojs/ojeventtarget"],(function(e,t,a,i,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,a){return t&&s(e.prototype,t),a&&s(e,a),e}var c=function(){function e(t){n(this,e),this.dataProvider=t,this.MutateEventFilteringAsyncIterable=function(){return function e(t,a,i,r){var s=this;n(this,e),this._parent=t,this.params=a,this.dataProviderAsyncIterator=i,this.cache=r,this[Symbol.asyncIterator]=function(){return new s._parent.MutateEventFilteringAsyncIterator(s._parent,s.params,s.dataProviderAsyncIterator,s.cache)}}}(),this.MutateEventFilteringAsyncIterator=function(){function e(t,a,i,r){n(this,e),this._parent=t,this.params=a,this.asyncIterator=i,this.cache=r}return o(e,[{key:"next",value:function(){var e=this;return this.asyncIterator.next().then((function(t){return e._parent.dataProvider instanceof i||e._parent.dataProvider instanceof r||e._parent.cache.addListResult(t),t}))}}]),e}(),this.DataProviderMutationEventDetail=function(){return function t(a,i,r){n(this,t),this.add=a,this.remove=i,this.update=r,this[e._ADD]=a,this[e._REMOVE]=i,this[e._UPDATE]=r}}();var s=this;this.cache=t instanceof i||t instanceof r?t.cache:new a.DataCache,t.createOptimizedKeyMap&&(this.createOptimizedKeyMap=function(e){return t.createOptimizedKeyMap(e)}),t.createOptimizedKeySet&&(this.createOptimizedKeySet=function(e){return t.createOptimizedKeySet(e)}),t.addEventListener(e._MUTATE,(function(e){if(e.detail){var t=s._processMutations(e.detail.remove),a=s._processMutations(e.detail.update);if(t&&t.keys&&t.keys.size>0||a&&a.keys&&a.keys.size>0||e.detail.add&&e.detail.add.keys&&e.detail.add.keys.size>0){var i=new s.DataProviderMutationEventDetail(e.detail.add,t,a),r=Object.assign({},e);r.detail=i,s.dispatchEvent(r)}}else s.dispatchEvent(e)})),t.addEventListener(e._REFRESH,(function(e){s.cache.reset(),s.dispatchEvent(e)}))}return o(e,[{key:"containsKeys",value:function(e){return this.dataProvider.containsKeys(e)}},{key:"fetchByKeys",value:function(e){return this.dataProvider.fetchByKeys(e)}},{key:"fetchByOffset",value:function(e){return this.dataProvider.fetchByOffset(e)}},{key:"fetchFirst",value:function(e){var t=this.dataProvider.fetchFirst(e);return new this.MutateEventFilteringAsyncIterable(this,e,t[Symbol.asyncIterator](),this.cache)}},{key:"getCapability",value:function(e){var t=this.dataProvider.getCapability(e);return"eventFiltering"===e?{type:"iterator"}:t}},{key:"getTotalSize",value:function(){return this.dataProvider.getTotalSize()}},{key:"isEmpty",value:function(){return this.dataProvider.isEmpty()}},{key:"_processMutations",value:function(t){if(t){var a=t[e._KEYS];if(a&&a.size>0){var i=new Set,r=this.cache.getDataByKeys({keys:a});a.forEach((function(e){r.results.has(e)||i.add(e)}));var n=Object.assign({},t);return i.forEach((function(e){var t=[];n.keys.forEach((function(e){t.push(e)}));var a=t.indexOf(e);n.keys.delete(e),delete n.data[a],delete n.indexes[a],delete n.metadata[a]})),n}}return t}}]),e}();
/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
return c._KEY="key",c._KEYS="keys",c._DATA="data",c._METADATA="metadata",c._ITEMS="items",c._FROM="from",c._OFFSET="offset",c._REFRESH="refresh",c._MUTATE="mutate",c._SIZE="size",c._FETCHPARAMETERS="fetchParameters",c._VALUE="value",c._DONE="done",c._RESULTS="results",c._ADD="add",c._UPDATE="update",c._REMOVE="remove",c._INDEXES="indexes",e.MutateEventFilteringDataProvider=c,e.MutateEventFilteringDataProvider=c,e.EventTargetMixin.applyMixin(c),c}));