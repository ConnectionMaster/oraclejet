/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojexpparser","ojs/ojkoshared"],function(n,r){"use strict";
/**
   * @license
   * Copyright (c) 2019 2021, Oracle and/or its affiliates.
   * Licensed under The Universal Permissive License (UPL), Version 1.0
   * as shown at https://oss.oracle.com/licenses/upl/
   *
   * @license
   * Based on the Expression Evaluator 2.0.0
   * https://github.com/donmccurdy/expression-eval
   * under MIT License
   * @ignore
   */return function(r){var e=new n.ExpParser,t=Object.assign({},r);t.globalScope&&t.globalScope.Object||(t.globalScope=Object.assign({Object:Object},t.globalScope)),this.createEvaluator=function(n){var r;try{r=e.parse(n)}catch(r){l(r,n)}var u=t.globalScope;return{evaluate:function(e){var t,o=e;u&&(o=e.concat([u]));try{t=a(r,o)}catch(r){l(r,n)}return t}}},this.evaluate=function(n,r){return a(n,[r])};var u={"||":function(n,r){return n||r()},"&&":function(n,r){return n&&r()},"|":function(n,r){return n|r},"^":function(n,r){return n^r},"&":function(n,r){return n&r},"==":function(n,r){return n==r},"!=":function(n,r){return n!=r},"===":function(n,r){return n===r},"!==":function(n,r){return n!==r},"<":function(n,r){return n<r},">":function(n,r){return n>r},"<=":function(n,r){return n<=r},">=":function(n,r){return n>=r},"<<":function(n,r){return n<<r},">>":function(n,r){return n>>r},">>>":function(n,r){return n>>>r},"+":function(n,r){return n+r},"-":function(n,r){return n-r},"*":function(n,r){return n*r},"/":function(n,r){return n/r},"%":function(n,r){return n%r}},o={"-":function(n){return-n},"+":function(n){return n},"~":function(n){return~n},"!":function(n){return!n},"...":function(n){return new c(n)}};function c(n){this.items=function(){return n}}function a(n,r){switch(n.type){case 1:return function(n,r){var e=s(n,r);if(e)return e[r];throw new Error("Variable "+r+" is undefined")}(r,n.name);case 2:return f(n,r)[1];case 3:return n.value;case 4:var e,t,c;switch(n.callee.type){case 1:c=function(n,r){var e=s(n,r);if(e)return[e,e[r]];throw new Error("Variable "+r+" is undefined")}(r,n.callee.name);break;case 2:c=f(n.callee,r);break;default:t=a(n.callee,r)}return!t&&Array.isArray(c)&&(e=c[0],t=c[1]),"function"!=typeof t&&p("Expression is not a function"),t.apply(e,i(n.arguments,r));case 5:return o[n.operator](a(n.argument,r));case 6:return"="===n.operator?function(n,r,e){switch(n.type){case 1:var t=n.name,u=s(r,t);u||p("Cannot assign value to undefined variable "+t),u[t]=e;break;case 2:var o=n.computed?a(n.property,r):n.property.name;f(n,r)[0][o]=e;break;default:p("Expression of type: "+n.type+" not supported for assignment")}return e}(n.left,r,a(n.right,r)):u[n.operator](a(n.left,r),a(n.right,r));case 7:return u[n.operator](a(n.left,r),function(){return a(n.right,r)});case 8:return a(n.test,r)?a(n.consequent,r):a(n.alternate,r);case 9:return i(n.elements,r);case 10:return function(n,r){return n.properties.reduce(function(n,e){return n[e.key]=a(e.value,r),n},{})}(n,r);case 11:return function(n,r){return function(){var e=arguments,t=n.arguments.reduce(function(n,r,t){return n[r.name]=e[t],n},{});t.this=this;try{var u=a(n.body,[t].concat(r));if(n.return)return u}catch(r){l(r,n.expr)}}}(n,r);case 12:return function(n,r){var e=a(n.callee,r);e instanceof Function||p("Node of type "+n.callee.type+" is not evaluated into a constructor");return new(Function.prototype.bind.apply(e,[null].concat(i(n.arguments,r))))}(n,r);default:throw new Error("Unsupported expression type: "+n.type)}}function i(n,r){return n.reduce((n,e)=>{const t=a(e,r);return t instanceof c?n.push(...t.items()):n.push(t),n},[])}function f(n,r){var e=a(n.object,r);return!e&&n.conditional?[]:n.computed?[e,e[a(n.property,r)]]:[e,e[n.property.name]]}function s(n,r){for(var e=0;e<n.length;e++){var t=n[e];if(t instanceof Object&&r in t)return t}return null}function p(n){throw new Error(n)}function l(n,r){throw new Error(n.message+' in expression "'+r+'"')}}});
//# sourceMappingURL=ojcspexpressionevaluator.js.map