/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports"],function(e){"use strict";
/**
   * @license
   * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
   * The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   * @ignore
   */var t={stringToNodeArray:function(e){var t,r,n,o,a,i=["table","caption","colgroup","col","thead","tfoot","th","tbody","tr","td","template","p"];for(t=0;t<i.length;t++)r=i[t],n=e,o=void 0,a=void 0,o=new RegExp("<"+r+"(?=\\s|>)","gi"),a=new RegExp("</"+r+"(?=\\s|>)","gi"),e=n.replace(o,"<oj-bind-replace-"+r).replace(a,"</oj-bind-replace-"+r);var l=document.createElement("div");l.innerHTML=e,-1!==e.indexOf("<oj-bind-replace-")&&function e(t){for(var r=t.childNodes,n=r.length,o=0;o<n;o++){var a=r[o];e(a);var i,l,d,c=a.nodeName.toLowerCase();if("oj-bind-replace-"===c.substr(0,16)){var p=c.substr(16);for(d=document.createElement(p),i=0;i<a.attributes.length;i++)l=a.attributes[i],d.setAttribute(l.name,l.value);var s=d.content?d.content:d;for(i=0;a.childNodes.length>0;)s.appendChild(a.childNodes[0]);t.replaceChild(d,a)}else if("script"===c||"style"===c){for(d=document.createElement(c),i=0;i<a.attributes.length;i++)l=a.attributes[i],d.setAttribute(l.name,l.value);var u=a.innerHTML;d.innerHTML=u.replace(new RegExp("oj-bind-replace-","g"),""),t.replaceChild(d,a)}else if(8===a.nodeType){var f=a.nodeValue;a.nodeValue=f.replace(new RegExp("oj-bind-replace-","g"),"")}}}(l);for(var d=[];l.firstChild;)d.push(l.firstChild),l.removeChild(l.firstChild);return d},getTemplateContent:function(e){var t=[];if(1!==e.nodeType||"template"!==e.tagName.toLowerCase())throw new Error("Invalid template node "+e);var r=e.content;return r?t.push(document.importNode(r,!0)):Array.prototype.forEach.call(e.childNodes,function(e){t.push(e.cloneNode(!0))}),t}},r=t.stringToNodeArray,n=t.getTemplateContent;e.getTemplateContent=n,e.stringToNodeArray=r,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojhtmlutils.js.map