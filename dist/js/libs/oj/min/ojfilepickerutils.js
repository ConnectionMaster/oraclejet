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
     * Copyright (c) 2017 2021, Oracle and/or its affiliates.
     * The Universal Permissive License (UPL), Version 1.0
     * as shown at https://oss.oracle.com/licenses/upl/
     * @ignore
     */e.pickFiles=function(e,t){const n=document.createElement("input");n.type="file",(null==t?void 0:t.capture)&&"none"!=t.capture&&(n.capture=t.capture);const c=null==t?void 0:t.accept,l=c&&c.length?c.join(","):null;n.accept=l,n.multiple="multiple"==(null==t?void 0:t.selectionMode),n.onchange=function(){e(n.files)},n.click()},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojfilepickerutils.js.map