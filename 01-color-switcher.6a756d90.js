!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.querySelector("body");e.disabled=!0,t.addEventListener("click",(function(){t.setAttribute("disabled","true"),e.removeAttribute("disabled"),r=setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(){clearInterval(r),e.disabled=!0,t.disabled=!1}));var r=null}();
//# sourceMappingURL=01-color-switcher.6a756d90.js.map
