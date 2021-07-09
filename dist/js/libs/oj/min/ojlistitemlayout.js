/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojvcomponent","preact"],function(t,e,a){"use strict";var i=function(t,e,a,i){var o,n=arguments.length,l=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(l=(n<3?o(l):n>3?o(e,a,l):o(e,a))||l);return n>3&&l&&Object.defineProperty(e,a,l),l};t.ListItemLayout=class extends a.Component{constructor(){super(...arguments),this._hasContent=t=>Array.isArray(t)&&t.length>0||t}_getWrappedSlotContent(t,e){return this._hasContent(t)?e&&e.length>0?a.h("div",{class:e},t):a.h("div",null,t):null}_getWrappedSlotContentWithClickThroughDisabled(t,e){return this._hasContent(t)?e&&e.length>0?a.h("div",{"data-oj-clickthrough":"disabled",class:e},t):a.h("div",{"data-oj-clickthrough":"disabled"},t):null}render(t){const e=this._hasContent(t.metadata)||this._hasContent(t.action)||this._hasContent(t.trailing);let i="";this._hasContent(t.secondary)&&this._hasContent(t.tertiary)&&(i="oj-listitemlayout-tertiary");let o="oj-listitemlayout-leading";this._hasContent(t.selector)&&this._hasContent(t.leading)&&(o+=" oj-listitemlayout-start-padding");let n="oj-listitemlayout-quaternary",l="oj-listitemlayout-textslots";return(this._hasContent(t.selector)||this._hasContent(t.leading))&&(l+=" oj-listitemlayout-start-padding",n+=" oj-listitemlayout-start-padding"),a.h("div",{class:"oj-listitemlayout-grid"},this._getWrappedSlotContent(t.selector,"oj-listitemlayout-selector"),this._getWrappedSlotContent(t.leading,o),a.h("div",{class:l},this._getWrappedSlotContent(t.overline),this._getWrappedSlotContent(t.children),this._getWrappedSlotContent(t.secondary),this._getWrappedSlotContent(t.tertiary,i)),e?a.h("div",{class:"oj-listitemlayout-extra"},this._getWrappedSlotContent(t.metadata,"oj-listitemlayout-metadata oj-listitemlayout-start-padding"),this._getWrappedSlotContent(t.trailing,"oj-listitemlayout-trailing oj-listitemlayout-image oj-listitemlayout-start-padding"),this._getWrappedSlotContentWithClickThroughDisabled(t.action,"oj-listitemlayout-action oj-listitemlayout-start-padding")):null,this._getWrappedSlotContent(t.quaternary,n),this._getWrappedSlotContentWithClickThroughDisabled(t.navigation,"oj-listitemlayout-navigation"))}},t.ListItemLayout.metadata={slots:{"":{},overline:{},selector:{},leading:{},secondary:{},tertiary:{},metadata:{},trailing:{},action:{},quaternary:{},navigation:{}}},t.ListItemLayout=i([e.customElement("oj-list-item-layout")],t.ListItemLayout),Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ojlistitemlayout.js.map