(()=>{"use strict";var e={56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},i=[],a=0;a<e.length;a++){var s=e[a],l=o.base?s[0]+o.base:s[0],u=c[l]||0,d="".concat(l," ").concat(u);c[l]=u+1;var f=n(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var v=r(p,o);o.byIndex=a,t.splice(a,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function r(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<c.length;i++){var a=n(c[i]);t[a].references--}for(var s=o(e,r),l=0;l<c.length;l++){var u=n(c[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}c=s}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},208:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(601),r=n.n(o),c=n(314),i=n.n(c)()(r());i.push([e.id,".hello-world-message {\n    color: blue;\n}",""]);const a=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&i[u[0]]||(void 0!==c&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=c),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},601:e=>{e.exports=function(e){return e[1]}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var o=n(72),r=n.n(o),c=n(825),i=n.n(c),a=n(659),s=n.n(a),l=n(56),u=n.n(l),d=n(540),f=n.n(d),p=n(113),v=n.n(p),h=n(208),y={};y.styleTagTransform=v(),y.setAttributes=u(),y.insert=s().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=f();r()(h.A,y);h.A&&h.A.locals&&h.A.locals;var g=function(e,t,n,o){return new(n||(n=Promise))((function(r,c){function i(e){try{s(o.next(e))}catch(e){c(e)}}function a(e){try{s(o.throw(e))}catch(e){c(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}s((o=o.apply(e,t||[])).next())}))};const{Popup:m}=globalThis.SillyTavern.getContext(),{getContext:x}=globalThis.SillyTavern;let w=10;const b="ST-Coyote",S=`scripts/extensions/third-party/${b}`,C=[176,15,10,10,10,10,20,30,0,5,10,50,10,10,20,30,0,5,10,50];function A(){const e=document.getElementById("power_scale_input");if(e){const t=Number(e.value);!isNaN(t)&&t>0&&(w=t,function(){const e={powerScale:w};localStorage.setItem(`${b}_settings`,JSON.stringify(e))}(),console.log(`Power scale updated to: ${w}`),m.show.text(`Power scale updated to: ${w}`))}}function _(e){return g(this,void 0,void 0,(function*(){if(!e)return void console.log("蓝牙未连接");const t=yield x();let n=function(e){const t=/<device>([\s\S]*?)<\/device>/g,n=[];let o;const r=e.indexOf("</thinking>");for(-1!==r&&(e=e.slice(r));null!==(o=t.exec(e));)try{let e=JSON.parse(o[1]);if(void 0===e.power)continue;if(!Array.isArray(e.freq)||4!==e.freq.length)continue;if(!Array.isArray(e.level)||4!==e.level.length)continue;n.push(e)}catch(e){continue}return n}(t.chat[t.chat.length-1].mes);if(n.length>0){let t=n[n.length-1];console.log(`Coyote: ${t.power}`),console.log(`Coyote: ${t.freq}`),console.log(`Coyote: ${t.level}`);let o=t.power>200?200:t.power,r=Math.floor(o/w),c=C;return c[2]=r,c[4]=t.freq[0],c[5]=t.freq[1],c[6]=t.freq[2],c[7]=t.freq[3],c[8]=t.level[0],c[9]=t.level[1],c[10]=t.level[2],c[11]=t.level[3],yield function(e,t){return g(this,void 0,void 0,(function*(){return console.log(new Uint8Array(t)),yield e.writeValue(new Uint8Array(t))}))}(e,c),0}}))}let N;function T(){return g(this,void 0,void 0,(function*(){var e;const t=document.getElementById("coyote_connection_status");try{t&&(t.textContent="Connecting...",t.className="connection-status disconnected");const n=yield navigator.bluetooth.requestDevice({filters:[{namePrefix:"47L121000"}],optionalServices:["0000180c-0000-1000-8000-00805f9b34fb"]});n.addEventListener("gattserverdisconnected",I);const o=yield null===(e=null==n?void 0:n.gatt)||void 0===e?void 0:e.connect(),r=yield null==o?void 0:o.getPrimaryService("0000180c-0000-1000-8000-00805f9b34fb");if(!r)throw new Error("Service not found");N=yield r.getCharacteristic("0000150a-0000-1000-8000-00805f9b34fb"),console.log("蓝牙连接成功"),m.show.text("蓝牙连接成功"),t&&(t.textContent="Connected",t.className="connection-status connected"),setInterval(_,1e3,N)}catch(e){console.log("蓝牙连接失败",e),m.show.text("蓝牙连接失败"),t&&(t.textContent="Disconnected",t.className="connection-status disconnected"),N=void 0}}))}function I(){console.log("蓝牙设备已断开连接"),m.show.text("蓝牙设备已断开连接");const e=document.getElementById("coyote_connection_status");e&&(e.textContent="Disconnected",e.className="connection-status disconnected"),N=void 0}jQuery((()=>g(void 0,void 0,void 0,(function*(){const e=yield $.get(`${S}/src/index.html`);$("#extensions_settings").append(e),$("#my_button").on("click",T),$("#power_scale_input").on("change",A),function(){const e=localStorage.getItem(`${b}_settings`);if(e)try{const t=JSON.parse(e);if(void 0!==t.powerScale){w=Number(t.powerScale);const e=document.getElementById("power_scale_input");e&&(e.value=w.toString())}}catch(e){console.error("Failed to load settings:",e)}}()}))))})();