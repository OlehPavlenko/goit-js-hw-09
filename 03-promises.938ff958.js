var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var i=n("iQIUW");function r(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>{o?n({position:e,delay:t}):i({position:e,delay:t})}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();let{elements:{delay:t,step:o,amount:n}}=e.target;const l=Number(t.value),a=Number(o.value);for(let e=1,t=l;e<=n.value;e+=1,t+=a)setTimeout((()=>{r(e,t).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}),t)}));
//# sourceMappingURL=03-promises.938ff958.js.map
