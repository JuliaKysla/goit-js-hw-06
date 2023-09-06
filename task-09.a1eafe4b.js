function o(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}console.log(o());const e=document.querySelector(".widget").parentNode;console.log(e);const t=document.querySelector(".color");document.querySelector(".change-color").addEventListener("click",(n=>{e.style.backgroundColor=o(),t.textContent=o()}));
//# sourceMappingURL=task-09.a1eafe4b.js.map
