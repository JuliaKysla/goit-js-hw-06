function o(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}console.log(o());const t=document.querySelector(".widget").parentNode;console.log(t);const e=document.querySelector(".color");document.querySelector(".change-color").addEventListener("click",(n=>{const c=o();t.style.backgroundColor=c,e.textContent=c}));
//# sourceMappingURL=task-09.b9194ab4.js.map
