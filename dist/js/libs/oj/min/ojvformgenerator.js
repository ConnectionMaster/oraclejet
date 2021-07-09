/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","preact","ojs/ojthemeutils","ojs/ojlabel","ojs/ojcustomelement-utils","ojs/ojdomutils"],function(t,e,o,l,s,n){"use strict";function r(t){const l=function(t,e){let l=t;if(e>1){const s=/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/,n=t.match(s),r=parseFloat(n[1]);switch(n[2]){case"vw":case"vmin":case"vmax":case"%":if(e>1){let s=o.parseJSONFromFontFamily("oj-form-layout-option-defaults").columnGap;l="calc((("+t+" / "+e+") - (("+s+" * ("+(e-1)+") * "+r/e/100+")))"}}}return l}(t.labelWidth,t.colspan),s="calc(100% - "+l+")",n={flexGrow:"0",flexShrink:"0",flexBasis:l,width:l,maxWidth:l},r={flexGrow:"1",flexShrink:"1",flexBasis:s,width:s,maxWidth:s};return Array.isArray(t.children)||(t.children.props["label-edge"]="provided"),e.h(e.Fragment,null,e.h("div",{class:"oj-formlayout-inline-label",style:n},e.h("oj-label",{for:t.forid},t.labelText)),e.h("div",{class:"oj-formlayout-inline-value",style:r},t.children))}function a(t){return Array.isArray(t.children)||(t.children.props["label-edge"]="provided"),e.h(e.Fragment,null,e.h("oj-label",{for:t.forid},t.labelText),t.children)}function i(t){let o;if(t.children){const l=!Array.isArray(t.children);return l&&(o=s.ElementUtils.getUniqueId(t.children.props.id)),"start"===t.labelEdge?e.h(r,Object.assign({forid:o},t)):"top"===t.labelEdge?e.h(a,Object.assign({forid:o},t)):(l&&("inside"===t.labelEdge?(t.children.props["label-edge"]=t.labelEdge,t.children.props["label-hint"]=t.labelText):t.children.props["label-edge"]="none"),e.h(e.Fragment,null,t.children))}return null}class c extends e.Component{render(t){let o="oj-flex-item";const l=this._getFullFlexItemWidth(this.props.colspan,this.props.totalColumns);let s={flexGrow:"1",flexShrink:"1",flexBasis:l,width:l,maxWidth:l};return"start"==this.props.labelEdge&&(s.display="flex"),"formLayout"===this.props.contentType&&(o+=" oj-formlayout-nested-formlayout"),e.h("div",{class:o,style:s},e.h(i,{labelText:this.props.labelText,labelEdge:this.props.labelEdge,labelWidth:this.props.labelWidth,colspan:this.props.colspan,totalColumns:this.props.totalColumns},this.props.children))}_getFullFlexItemWidth(t,e){if(t===e)return"100%";let l=(o.parseJSONFromFontFamily("oj-form-layout-option-defaults")||{}).columnGap,s=(this.props.totalColumns,"calc(((100% / "+e+") - (("+l+" * ("+(e-1)+") / "+e+")))");return t>1&&(s+=" * "+t+" + ("+l+" * "+(t-1)+")"),s+=")",s}}c.defaultProps={colspan:1,totalColumns:1,labelEdge:"inside",labelWidth:"33%",labelText:""};class m extends e.Component{render(t){this._columns=t.columns>0?t.columns:t.maxColumns;const o="oj-form-layout oj-formlayout-max-cols-"+this._columns,l=this._getColumnFormContent(t.formControls,t.columns);return e.h("div",{class:o},l)}_getColumnFormContent(t,l){let s,n,r,a=[];for(const l of t)n="function"==typeof l.content?l.content():l.content,r=l.labelEdge,r||(this._themeDefault||(this._themeDefault=o.parseJSONFromFontFamily("oj-form-layout-option-defaults")||{}),r=this._themeDefault.labelEdge),s=e.h(c,{totalColumns:1,labelText:l.labelText,labelEdge:r,labelWidth:l.labelWidth,contentType:l.contentType},n),a.push(e.h("div",{class:"oj-flex","data-oj-internal":!0},s));const i=this._getColumnStyling(l);return e.h("div",{class:i.formClassName,style:i.formStyle,"data-oj-context":!0,"data-oj-internal":!0},a)}_getColumnStyling(t){let e="oj-form";return this.props.readonly||(e+=" oj-enabled"),"efficient"===this.props.userAssistanceDensity&&(e+=" oj-efficient"),"truncate"===this.props.labelWrapping&&(e+=" oj-formlayout-labels-nowrap"),t>0&&(e+=" oj-form-layout-no-min-column-width"),e+=" oj-form-cols",{formClassName:e,formStyle:{columnCount:this._columns,webkitColumnCount:this._columns,MozColumnCount:this._columns}}}}m.defaultProps={colspanWrap:"nowrap",formControls:[],labelWrapping:"wrap",columns:0,maxColumns:1,readonly:!1,userAssistanceDensity:"efficient"};class u extends e.Component{constructor(){super(...arguments),this.formDivRef=e.createRef(),this._resizeListener=this._resizeHandler.bind(this),this.state={columns:this.props.columns}}render(t){let o="oj-form-layout oj-formlayout-max-cols-"+(t.columns>0?t.columns+" oj-form-layout-no-min-column-width":t.maxColumns);if(0===this.state.columns){const t=this._getRowFormContent([]);return e.h("div",{class:o,ref:this.formDivRef},t)}{const t=this._getRowFormContent(this.props.formControls);return e.h("div",{class:o,ref:this.formDivRef},t)}}componentDidMount(){0===this.state.columns&&(this.setState({columns:this._calculateColumns(this.formDivRef.current)}),n.addResizeListener(this.formDivRef.current,this._resizeListener,25))}componentWillUnmount(){n.removeResizeListener(this.formDivRef.current,this._resizeListener)}_resizeHandler(){const t=this._calculateColumns(this.formDivRef.current);this.state.columns!==t&&this.setState({columns:t})}_calculateColumns(t){let e=Math.max(this.props.maxColumns,1);const o=this.props.columns;if(o>0)e=o;else if(e>1){let o=parseFloat(window.getComputedStyle(t.querySelector(".oj-form")).columnWidth);if(!isNaN(o)){let l=t.getBoundingClientRect().width,s=Math.max(Math.floor(l/o),1);s<e&&(e=s)}}return e}_getRowFormContent(t){let l,s=[];const n=this.state.columns;let r,a,i,m,u=0,d=!1;for(const h of t){if(r=1,a=n,i="function"==typeof h.content?h.content():h.content,u%n==0&&(l&&this._addRowToForm(s,l,u),l=[]),h.colspan&&h.colspan>1){const t=u%n;let e=n-t;r=Math.floor(h.colspan),"wrap"===this.props.colspanWrap&&e<r&&t>0&&(this._addRowToForm(s,l,u),u+=e,l=[],e=n),r=Math.min(r,e),d=n>1}m=h.labelEdge,m||(this._themeDefault||(this._themeDefault=o.parseJSONFromFontFamily("oj-form-layout-option-defaults")||{}),m=this._themeDefault.labelEdge),l.push(e.h(c,{colspan:r,totalColumns:a,labelText:h.labelText,labelEdge:m,labelWidth:h.labelWidth,contentType:h.contentType},i)),u+=r,u%n!=0&&this._addColumnGutter(l)}this._addRowToForm(s,l,u);const h=this._getRowStyling(d);return e.h("div",{class:h.formClassName,style:h.formStyle,"data-oj-context":!0,"data-oj-internal":!0},s)}_addColumnGutter(t){t.push(e.h("div",{class:"oj-formlayout-column-gutter"}))}_addRowToForm(t,o,l){this._addPaddingCells(o,l),t.push(e.h("div",{class:"oj-flex","data-oj-internal":!0},o))}_addPaddingCells(t,o){const l=this.state.columns,s=o%l;if(t&&s>0)for(let o=s;o<l;o++)o!==s&&this._addColumnGutter(t),t.push(e.h(c,{colspan:1,totalColumns:l,labelEdge:"none"}))}_getRowStyling(t){let e="oj-form";this.props.readonly||(e+=" oj-enabled"),"efficient"===this.props.userAssistanceDensity&&(e+=" oj-efficient"),"truncate"===this.props.labelWrapping&&(e+=" oj-formlayout-labels-nowrap"),t&&(e+=" oj-form-control-full-width"),e+=" oj-form-cols";return e+=" oj-formlayout-form-across",{formClassName:e,formStyle:{columnCount:1,webkitColumnCount:1,MozColumnCount:1}}}}u.defaultProps={colspanWrap:"nowrap",formControls:[],labelWrapping:"wrap",columns:0,maxColumns:1,readonly:!1,userAssistanceDensity:"efficient"};var d=function(t,e){var o={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&e.indexOf(l)<0&&(o[l]=t[l]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(l=Object.getOwnPropertySymbols(t);s<l.length;s++)e.indexOf(l[s])<0&&Object.prototype.propertyIsEnumerable.call(t,l[s])&&(o[l[s]]=t[l[s]])}return o};class h extends e.Component{render(t){const{direction:o}=t,l=d(t,["direction"]);return"column"===o?e.h(m,Object.assign({},l)):e.h(u,Object.assign({},l))}}h.defaultProps={colspanWrap:"nowrap",direction:"row",formControls:[],labelWrapping:"wrap",columns:0,maxColumns:1,readonly:!1,userAssistanceDensity:"efficient"},t.VFormGenerator=h,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ojvformgenerator.js.map