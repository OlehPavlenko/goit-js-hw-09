!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i");document.querySelector(".form").addEventListener("submit",(function(e){var n=function(e,n){setTimeout((function(){var o,t,r;(o=e,t=n,r=Math.random()>.3,new Promise((function(e,n){r?e({position:o,delay:t}):n({position:o,delay:t})}))).then((function(e){var n=e.position,o=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}),n)};e.preventDefault();for(var o=e.target.elements,t=o.delay,r=o.step,a=o.amount,l=Number(t.value),u=Number(r.value),c=1,f=l;c<=a.value;c+=1,f+=u)n(c,f)}))}();
//# sourceMappingURL=03-promises.4a9bdad3.js.map
