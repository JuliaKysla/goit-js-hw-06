const userNameInputEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

userNameInputEl.addEventListener('focus', event =>{
    userNameInputEl.style.outlineColor = 'yellowgreen';
})

userNameInputEl.addEventListener('input', event =>{
    if(userNameInputEl.value === ""){
        outputNameEl.textContent = 'Anonymous';
        return;
    }

outputNameEl.textContent = userNameInputEl.value;

});