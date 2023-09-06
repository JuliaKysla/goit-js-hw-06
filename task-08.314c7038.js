const e=document.querySelector(".login-form");e.addEventListener("submit",(function(l){l.preventDefault();const t=e.elements.email.value,s=e.elements.password.value;if(""===t||""===s)return alert("Please fill in all the fields!");const n={email:e.elements.email.value,password:e.elements.password.value};return e.reset(),console.log(n)}));
//# sourceMappingURL=task-08.314c7038.js.map
