/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojdataprovideradapter-base","ojs/ojmap"],(function(e,t,n,r){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(l,t);var n,a,s,c=u(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=c.call(this,e)).treeDataSource=e,t._addTreeDataSourceEventListeners(),t._parentKey=null,t._parentInfoMap=new r,t}return n=l,(a=[{key:"destroy",value:function(){this._removeTreeDataSourceEventListeners()}},{key:"getChildDataProvider",value:function(e){if(this._parentInfoMap.has(e)){var t=new l(this.treeDataSource);return t._parentKey=e,t._parentInfoMap=this._parentInfoMap,t}return null}},{key:"fetchFirst",value:function(e){return new this.AsyncIterable(new this.AsyncIterator(this._getFetchFunc(e),e))}},{key:"getTotalSize",value:function(){return Promise.resolve(this.treeDataSource.getChildCount(this._parentKey))}},{key:"isEmpty",value:function(){var e=this.treeDataSource.getChildCount();return-1===e?"unknown":e>0?"no":"yes"}},{key:"getCapability",value:function(e){return e==l._SORT&&"full"==this.treeDataSource.getCapability(e)?{attributes:"multiple"}:"fetchByKeys"==e||"fetchByOffset"==e?{implementation:"iteration"}:null}},{key:"_getFetchFunc",value:function(e){var t=this;return null!=e&&null!=e[l._SORTCRITERIA]?function(e,n){return function(r,a){if(a){var i={};return i[l._KEY]=e,i[l._DIRECTION]=n,new Promise((function(e,n){t.treeDataSource.sort(i,{success:function(){e(t._getTreeDataSourceFetch(r)(r))},error:function(e){n(e)}})}))}return t._getTreeDataSourceFetch(r)(r)}}(e[l._SORTCRITERIA][0][l._ATTRIBUTE],e[l._SORTCRITERIA][0][l._DIRECTION]):this._getTreeDataSourceFetch(e)}},{key:"_getTreeDataSourceFetch",value:function(e){var t=this;return function(e,n){var r=t.treeDataSource.getSortCriteria();if(null!=r&&"none"!=r[l._DIRECTION]&&null==e[l._SORTCRITERIA]){e[l._SORTCRITERIA]=[];var a=new t.SortCriterion(t,r[l._KEY],r[l._DIRECTION]);e[l._SORTCRITERIA].push(a)}return t._isFetching=!0,new Promise((function(n,r){t.treeDataSource.fetchChildren(t._parentKey,{start:0,end:-1},{success:function(r){t._isFetching=!1;var a,i,o,u=[],s=[],c=r.getStart(),h=r.getCount();for(a=0;a<h;a++)i=r.getData(c+a),u.push(i),(o=r.getMetadata(c+a))[l._LEAF]||t._parentInfoMap.set(o[l._KEY],o),s.push(new t.ItemMetadata(t,o[l._KEY]));n(new t.AsyncIteratorReturnResult(t,new t.FetchListResult(t,e,u,s)))},error:function(e){t._isFetching=!1,r(e)}})}))}}},{key:"_addTreeDataSourceEventListeners",value:function(){this.removeAllListeners(),this.addListener("change",this._handleChange),this.addListener("refresh",this._handleRefresh)}},{key:"_removeTreeDataSourceEventListeners",value:function(){this.removeListener("change"),this.removeListener("refresh")}},{key:"_handleChange",value:function(e){var t=e[l._OPERATION];"insert"===t?this._handleInsert(e):"delete"===t?this._handleDelete(e):"update"===t&&this._handleUpdate(e)}},{key:"_handleInsert",value:function(t){var n=t[l._DATA],r=t[l._INDEX],a=t[l._KEY],i=t[l._PARENT],o=new this.ItemMetadata(this,a),u=new Set;u.add(a);var s=t[l._METADATA];null!=s&&s[l._LEAF]&&this._parentInfoMap.set(a,s);var c=new this.DataProviderAddOperationEventDetail(this,u,null,null,[i],[o],[n],[r]),h=new this.DataProviderMutationEventDetail(this,c,null,null);this.dispatchEvent(new e.DataProviderMutationEvent(h))}},{key:"_handleDelete",value:function(t){var n=t[l._DATA],r=t[l._INDEX],a=t[l._KEY],i=new this.ItemMetadata(this,a),o=new Set;o.add(a),this._parentInfoMap.delete(a);var u=new this.DataProviderOperationEventDetail(this,o,[i],[n],[r]),s=new this.DataProviderMutationEventDetail(this,null,u,null);this.dispatchEvent(new e.DataProviderMutationEvent(s))}},{key:"_handleUpdate",value:function(t){var n=t[l._DATA],r=t[l._INDEX],a=t[l._KEY],i=new this.ItemMetadata(this,a),o=new Set;o.add(a);var u=new this.DataProviderOperationEventDetail(this,o,[i],[n],[r]),s=new this.DataProviderMutationEventDetail(this,null,null,u);self.dispatchEvent(new e.DataProviderMutationEvent(s))}},{key:"_handleRefresh",value:function(t){this._isFetching||(this._parentInfoMap.clear(),this.dispatchEvent(new e.DataProviderRefreshEvent))}}])&&i(n.prototype,a),s&&i(n,s),l}(n);return l._SORTCRITERIA="sortCriteria",l._INDEX="index",l._PARENT="parent",l._LEAF="leaf",l._OPERATION="operation",e.TreeDataSourceAdapter=l,e.TreeDataSourceAdapter=l,e.FetchByKeysMixin.applyMixin(l),e.FetchByOffsetMixin.applyMixin(l),l}));