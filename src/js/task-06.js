const userNameInputEl = document.querySelector('#validation-input');




userNameInputEl.addEventListener('blur', () =>{
     if (userNameInputEl.dataset.length === userNameInputEl.value.length.toString()) {
      userNameInputEl.classList.remove('invalid');
      userNameInputEl.classList.add('valid');
     } else {
      userNameInputEl.classList.remove('valid');
      userNameInputEl.classList.add('invalid');   
     }
});
console.log(userNameInputEl);



// const textInput = document.querySelector("#validation-input");

// textInput.addEventListener('blur', () => {
    
//     if (textInput.dataset.length === textInput.value.length.toString()) {
//         textInput.classList.remove('invalid');
//         textInput.classList.add('valid');
//     } else {
//         textInput.classList.remove('valid');
//         textInput.classList.add('invalid');
//     }
// });



// const checkInputLength = check =>

// function validationInput() {
//    const inputElement = document.querySelector('#validation-input');
//    const validationNumber = +inputElement.dataset.length;
 
//    inputElement.addEventListener('blur', () => {
//      const lengthOfInputValue = inputElement.value.length;
//      inputElement.classList.remove('valid', 'invalid');
//      if (lengthOfInputValue === validationNumber) {
//        inputElement.classList.add('valid');
//      } else {
//        inputElement.classList.add('invalid');
//      }
//    });
//  }
 
//  validationInput();