parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Fv9P":[function(require,module,exports) {
function t(){var t=document.getElementById("footer__text"),e=new Date;t.textContent="Current date & time: "+e.getDate().toString().padStart(2,"0")+"/"+(e.getMonth()+1).toString().padStart(2,"0")+"/"+e.getFullYear()+"  "+e.getHours().toString().padStart(2,"0")+":"+e.getMinutes().toString().padStart(2,"0")+":"+e.getSeconds().toString().padStart(2,"0")}function e(t){var e=t.elements,n=[],u=[],a=t.querySelector("ul").lastElementChild.lastElementChild;a.value>=0&&(a.value=""),Array.from(e).forEach(function(t){""!==t.value&&n.push(t.value)}),(n=n.map(function(t){return Number(t)})).forEach(function(t){t<50&&u.push(0),t>49&&t<55&&u.push(1),t>54&&t<60&&u.push(1.3),t>59&&t<64&&u.push(1.7),t>63&&t<67&&u.push(2),t>66&&t<70&&u.push(2.3),t>69&&t<73&&u.push(2.7),t>72&&t<76&&u.push(3),t>75&&t<80&&u.push(3.3),t>79&&t<85&&u.push(3.7),t>84&&u.push(4)});var r=u.reduce(function(t,e){return t+e})/n.length;r=Number((100*Math.abs(r)).toPrecision(15)),r=Math.round(r)/100*Math.sign(r),t.querySelector("ul").lastElementChild.lastElementChild.value=r}function n(t){t.reset()}window.onload=function(){setInterval(t,1e3)};var u=document.getElementById("finalGpaBtn");u.onclick=function(){var t=[],e=document.getElementsByClassName("yearGpa");Array.from(e).forEach(function(e){"0"==e.value&&t.push(5),"0"!=e.value&&t.push(e.value)}),(t=t.map(function(t){return Number(t)}).filter(function(t){return 0!==t})).forEach(function(e,n){5===e&&(t[n]=0)}),console.log(t);var n=document.getElementById("totalGpa"),u=t.reduce(function(t,e){return t+e})/t.length;u=Number((100*Math.abs(u)).toPrecision(15)),n.value=Math.round(u)/100*Math.sign(u)};
},{}]},{},["Fv9P"], null)
//# sourceMappingURL=/app.bc6b0af6.js.map