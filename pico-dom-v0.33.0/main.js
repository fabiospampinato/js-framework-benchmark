!function(){"use strict";function t(t,e,n,i){for(var o=0,s=Object.keys(t);o<s.length;++o)n=e.call(i,n,t[s[o]],s[o],t);return n}function e(t,e,n){for(var i=0,o=Object.keys(t);i<o.length;++i)e.call(n,t[o[i]],o[i],t)}function n(t,e){if("object"==typeof t)for(var n=0,i=Object.keys(t);n<i.length;++n)"_"!==i[n][0]&&(this[i[n]]=t[i[n]]);else"_"!==t[0]&&(this[t]=e);return this}function i(t,e){if(t[x]||t.parentNode)throw Error("node already used");this.node=t,"#text"===t.nodeName&&(this.update=this.text),"value"in t&&(this.update=this.value);for(var n=0;n<e.length;++n){var i=e[n];Array.isArray(i.arg)?i.fcn.apply(this,i.arg):i.fcn.call(this,i.arg)}t[x]=this.update?this:null}function o(t,e,n){for(var i=this.node.firstChild;i;){var o=i[x];o?(o.update(t,e,n),i=(o.foot||i).nextSibling):i=i.nextSibling}}function s(t,e){this.node=t,this._ops=e||[]}function a(t,e){this._init(t,e)}function r(t){for(var e=this.foot,n=e.parentNode||this.moveTo(k.createDocumentFragment()).foot.parentNode,i=this.head.nextSibling,o=this._items,s={},a=0;a<t.length;++a){var r=this.getKey(t[a],a,t),l=this._template,c=s[r]=o[r]||(l.cloneNode?l.cloneNode(!0):l.defaults({common:this.common,key:r}).create());c&&(c.update&&c.update(t[a],a,t),i=this._placeItem(n,c,i).nextSibling)}if(this._items=s,i!==e)for(;i!==n.removeChild(e.previousSibling););return this}function l(t,e,n){return n?e===n.nextSibling?t.removeChild(n):e!==n&&t.insertBefore(e,n):t.appendChild(e),e}function c(t,e,n){if(!n)return e.moveTo(t);var i=e.head;return i===n.nextSibling?t.removeChild(n):i!==n&&e.moveTo(t,n),e}function d(t,e){this._init(t,e);for(var n=0,i=Object.keys(t);n<i.length;++n){var o=i[n],s=t[i[n]];this._items[i[n]]=s.cloneNode?s.cloneNode(!0):s.defaults({common:this.common,key:o}).create()}}function h(t,e,n){for(var i=this.foot,o=i.parentNode||this.moveTo(k.createDocumentFragment()).foot.parentNode,s=this.head.nextSibling,a=this._items,r=this.select(t,e,n),l=0;l<r.length;++l){var c=a[r[l]];c&&(c.update&&c.update(t,e,n),s=this._placeItem(o,c,s).nextSibling)}if(s!==i)for(;s!==o.removeChild(i.previousSibling););return this}function u(t,e){this._template=t,e&&this._assign(e)}function f(t,e){for(var n=new s(k.createElement(t)),i=1;i<arguments.length;++i)n._config(arguments[i]);return n}function p(t){if(t.cloneNode)return t.cloneNode(!0);if("number"==typeof t||"string"==typeof t)return k.createTextNode(""+t);if(t.create)return t.create().node;if(t.node)return t.node.cloneNode(!0);throw Error("invalid node source"+typeof t)}function m(e){return Array.isArray(e)?e.map(m):e.constructor===Object?t(e,g,{}):e.create?e:p(e)}function g(t,e,n){return t[n]=m(e),t}function v(t,e,n){for(var i=t.node||t.head||t,o=n?n.node||n.foot||n:null,s=i[x];!s||e&&!e(s);){if(i===o)return null;var a=i.firstChild;if(!a)for(;!(a=i.nextSibling);)if(null===(i=i.parentNode))return null;s=(i=a)[x]}return s}function b(t){var e=t.target.id,n=this.common.store;if(e){switch(t.preventDefault(),A.start(e),e){case"run":n.clear(),n.run();break;case"add":n.add();break;case"runlots":n.clear(),n.runLots();break;case"update":n.update();break;case"clear":n.clear();break;case"swaprows":n.data.length>10&&n.swapRows()}this.common.table.update(),A.stop()}}function y(t){var e=this.key,n=v(t.target),i=n&&n.key;if(i){switch(t.preventDefault(),A.start(i),i){case"select":this.common.store.select(e);break;case"delete":this.common.store.delete(e)}this.common.table.update(),A.stop()}}function _(t){return Math.round(1e3*Math.random())%t}function w(){this.data=[],this.backup=null,this.selected=null,this.id=1}var k="undefined"!=typeof document?document:null,x="_pico",C=i.prototype={constructor:i,common:null,call:function(t){return t(this),this},assign:n,text:function(t){var e=this.node.firstChild;return e&&!e.nextSibling?e.nodeValue!==t&&(e.nodeValue=t):this.node.textContent=t,this},attr:function(t,e){return!1===e?this.node.removeAttribute(t):this.node.setAttribute(t,!0===e?"":e),this},prop:function(t,e){return this.node[t]!==e&&(this.node[t]=e),this},class:function(t){return this.node.setAttribute("class",t),this},value:function(t){return this.node.value!==t&&(this.node.value=t),this},attrs:function(t){for(var e=0,n=Object.keys(t);e<n.length;++e)this.attr(n[e],t[n[e]]);return this},props:function(t){for(var e=0,n=Object.keys(t);e<n.length;++e)this.prop(n[e],t[n[e]]);return this},append:function(){for(var t=0;t<arguments.length;++t){var e=arguments[t];null!=e&&(Array.isArray(e)?this.append.apply(this,e):e.create?e.defaults({common:this.common}).create().moveTo(this.node):e.moveTo?e.moveTo(this.node):this.node.appendChild(p(e)))}return this},moveTo:function(t,e){return this.onmove&&this.onmove(this.node.parentNode,t),(t.node||t).insertBefore(this.node,e||null),this},update:o,updateChildren:o,handleEvent:function(t){var e=this._on,n=e&&e[t.type];n&&n.call(this,t)},on:function(t,n){return"object"==typeof t?e(t,this.registerHandler,this):this.registerHandler(n,t),this},registerHandler:function(t,e){t?(this._on||(this._on={}),this._on[e]=t,this.node.addEventListener(e,this,!1)):this._on&&this._on[e]&&(delete this._on[e],this.node.removeEventListener(e,this,!1))}};s.prototype={constructor:s,config:function(t){return new s(this.node,this._ops.slice())._config(t)},assign:function(t,e){return new s(this.node,this._ops.concat({fcn:C.assign,arg:void 0===e?t:[t,e]}))},defaults:function(t,e){return new s(this.node,Array.prototype.concat({fcn:C.assign,arg:void 0===e?t:[t,e]},this._ops))},create:function(t){return new i(this.node.cloneNode(!0),(t?this.config(t):this)._ops)},_config:function(t){return null!=t&&("function"==typeof t?this._ops.push({fcn:C.call,arg:t}):t.constructor===Object?e(t,this.addTransform,this):this._ops.push({fcn:C.append,arg:t})),this},addTransform:function(t,e,n){var i=this._ops;return"u"===e[0]&&"p"===e[1]||"function"!=typeof C[e]?"defaults"===e?i.unshift({fcn:C.assign,arg:t}):"common"===e?i.unshift({fcn:C.assign,arg:n}):i.push({fcn:C.assign,arg:[e,t]}):i.push({fcn:C[e],arg:t}),i}},a.prototype={constructor:a,common:null,assign:n,_init:function(t,e){this._template=t,this._items={},this.head=k.createComment("^"),this.foot=k.createComment("$"),this.assign(e),this.head[x]=this.update?this:null},moveTo:function(t,e){var n=this.foot,i=this.head,o=i.parentNode,s=t.node||t,a=e||null;if(this.onmove&&this.onmove(o,s),a===n||o===s&&a===n.nextSibling)return this;if(o)if(s)do{i=(a=i).nextSibling}while(s.insertBefore(a,e)!==n);else do{i=(a=i).nextSibling}while(o.removeChild(a)!==n);else s&&(s.insertBefore(i,e),s.insertBefore(n,e));return this},getKey:function(t,e){return e},update:r,updateChildren:r,_placeItem:function(t,e,n){return e.node?l(t,e.node,n):e.head?c(t,e,n).foot:l(t,e,n)}},d.prototype={constructor:d,common:null,assign:n,_init:a.prototype._init,moveTo:a.prototype.moveTo,select:function(t){return Object.keys(this._items)},update:h,updateChildren:h,_placeItem:a.prototype._placeItem};var N=u.prototype;N.config=function(t){return new u(this._template,this)._config(t)},N.assign=function(t,e){return new u(this._template,this)._assign(t,e)},N.defaults=function(t,e){return new u(this._template,this._assign.call(void 0===e?this._assign.call({},t):{key:e},this))},N.create=function(t){var e=t?this.config(t):this;return new(e._template.create||e._template.cloneNode?a:d)(e._template,e)},N._assign=n,N._config=function(t){if(null!=t)if("function"==typeof t)t(this);else if(t.constructor===Object)for(var e=0,n=Object.keys(t);e<n.length;++e){var i=n[e],o=t[i],s=this[i];"function"==typeof s?Array.isArray(o)?s.apply(this,o):s(o):this._assign(i,o)}return this};var S,T,A={start:function(t){S=performance.now(),T=t},stop:function(){var t=T;T&&window.setTimeout(function(){T=null;var e=performance.now();console.log(t+" took "+(e-S))},0)}},j=f("button",{attrs:{class:"btn btn-primary btn-block",type:"button"}}),O=f("div",{class:"row",on:{click:b}},f("div",{attrs:{class:"col-sm-6 smallpad"}},j.config({attr:["id","run"],append:"Create 1,000 rows"})),f("div",{attrs:{class:"col-sm-6 smallpad"}},j.config({attr:["id","runlots"],append:"Create 10,000 rows"})),f("div",{attrs:{class:"col-sm-6 smallpad"}},j.config({attr:["id","add"],append:"Append 1,000 rows"})),f("div",{attrs:{class:"col-sm-6 smallpad"}},j.config({attr:["id","update"],append:"Update every 10th row"})),f("div",{attrs:{class:"col-sm-6 smallpad"}},j.config({attr:["id","clear"],append:"Clear"})),f("div",{attrs:{class:"col-sm-6 smallpad"}},j.config({attr:["id","swaprows"],append:"Swap Rows"}))),D=f("table",{class:"table table-hover table-striped test-data"},f("tbody",{attr:["id","tbody"],update:function(){this.updateChildren(this.common.store.data)}},function(t,e){var n=m(t);if(!n)throw Error("invalid list template: "+typeof t);for(var i=new u(n),o=1;o<arguments.length;++o)i._config(arguments[o]);return i}(f("tr",{on:{click:y},update:function(t){this.node.className=this.key===this.common.store.selected?"danger":"",this.updateChildren(t)}},f("td",{class:"col-md-1",update:function(t){this.text(t.id)}}),f("td",{class:"col-md-4"},f("a",{class:"lbl",key:"select",update:function(t){this.text(t.label)}})),f("td",{class:"col-md-1"},f("a",{class:"remove"},f("span",{class:"glyphicon glyphicon-remove remove",attr:"aria-hidden",key:"delete"}))),f("td",{class:"col-md-6"})),{getKey:function(t){return t.id}})));w.prototype={constructor:w,buildData:function(t){t>=0||(t=1e3);for(var e=["pretty","large","big","small","tall","short","long","handsome","plain","quaint","clean","elegant","easy","angry","crazy","helpful","mushy","odd","unsightly","adorable","important","inexpensive","cheap","expensive","fancy"],n=["red","yellow","blue","green","pink","brown","purple","brown","white","black","orange"],i=["table","chair","house","bbq","desk","car","pony","cookie","sandwich","burger","pizza","mouse","keyboard"],o=[],s=0;s<t;++s)o.push({id:this.id++,label:e[_(e.length)]+" "+n[_(n.length)]+" "+i[_(i.length)]});return o},updateData:function(t){t>=0||(t=1e3);for(var e=0;e<this.data.length;e+=10)this.data[e].label+=" !!!"},delete:function(t){var e=this.data.findIndex(function(e){return e.id==t});return this.data=this.data.filter(function(t,n){return n!=e}),this},run:function(){this.data=this.buildData(),this.selected=null},add:function(){this.data=this.data.concat(this.buildData(1e3)),this.selected=null},update:function(){this.updateData(),this.selected=null},select:function(t){this.selected=t},hideAll:function(){this.backup=this.data,this.data=[],this.selected=null},showAll:function(){this.data=this.backup,this.backup=null,this.selected=null},runLots:function(){this.data=this.buildData(1e4),this.selected=null},clear:function(){this.data=[],this.selected=null},swapRows:function(){if(this.data.length>10){var t=this.data[4];this.data[4]=this.data[9],this.data[9]=t}}};var E={common:{store:new w}},I=D.create(E);E.common.table=I,I.update(),f("div",{attr:["id","main"]},f("div",{class:"container"},f("div",{class:"jumbotron"},f("div",{class:"row"},f("div",{class:"col-md-6"},f("h1","picoDOM v0.33.0")),f("div",{class:"col-md-6"},O.create(E)))),I,f("span",{class:"preloadicon glyphicon glyphicon-remove",attr:"aria-hidden"}))).create().moveTo(document.body)}();