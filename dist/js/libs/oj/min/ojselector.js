define(["exports","ojs/ojtranslation","ojs/ojvcomponent","ojs/ojdomutils"],(function(e,t,l,o){"use strict";
/**
     * @license
     * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
     * The Universal Permissive License (UPL), Version 1.0
     * as shown at https://oss.oracle.com/licenses/upl/
     * @ignore
     */var s=function(e,t,l,o){var s,c=arguments.length,r=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,l):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,l,o);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(r=(c<3?s(r):c>3?s(t,l,r):s(t,l))||r);return c>3&&r&&Object.defineProperty(t,l,r),r};e.Selector=class extends l.VComponent{constructor(e){super(e),this.state={focus:!1}}render(){const{rowKey:e}=this.props,s=this._isSelected(e),c={"oj-selector-wrapper":!0,"oj-selected":s,"oj-focus-highlight":this.state.focus&&!o.recentPointer(),"oj-component-icon":!0},r=this.props["aria-labelledby"]||null,n=this.props["aria-label"]||t.getTranslatedString("oj-ojSelector.checkboxAriaLabel",{rowKey:e});return l.h("oj-selector",{class:"oj-selector"},l.h("span",{class:c},l.h("input",{type:"checkbox",class:"oj-selectorbox oj-clickthrough-disabled","aria-label":n,"aria-labelledby":r,checked:s,onFocusin:this._handleFocusin,onFocusout:this._handleFocusout,onClick:this._checkboxListener})))}_checkboxListener(e){const{selectedKeys:t,rowKey:l,selectionMode:o}=this.props;let s;null!=t&&(s=e.target.checked?"single"===o?t.clear().add([l]):"all"===o?t.addAll():t.add([l]):"all"===o?t.clear():t.delete([l]),this._updateProperty("selectedKeys",s,!0)),e.stopPropagation()}_handleFocusin(e){this.updateState({focus:!0})}_handleFocusout(e){this.updateState({focus:!1})}_isSelected(e){const{selectedKeys:t,selectionMode:l}=this.props;return!!t&&("all"===l?t.isAddAll():t.has(e))}},e.Selector.metadata={extension:{_DEFAULTS:class{constructor(){this.rowKey=null,this.selectedKeys=null,this.selectionMode="multiple"}},_ROOT_PROPS_MAP:{"aria-label":!0,"aria-labelledby":!0}},properties:{rowKey:{type:"any",value:null},selectedKeys:{type:"object|null",value:null,writeback:!0,readOnly:!1},selectionMode:{type:"string",enumValues:["all","multiple","single"],value:"multiple"}}},s([l.listener()],e.Selector.prototype,"_checkboxListener",null),s([l.listener()],e.Selector.prototype,"_handleFocusin",null),s([l.listener()],e.Selector.prototype,"_handleFocusout",null),e.Selector=s([l.customElement("oj-selector")],e.Selector),Object.defineProperty(e,"__esModule",{value:!0})}));