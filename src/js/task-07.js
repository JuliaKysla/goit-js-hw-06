// const sizeInputEl = document.querySelector('#font-size-control');
// const spanTextEl = document.querySelector('#text');


// sizeInputEl.addEventListener("input", () => {
//     spanTextEl.style.fontSize = progress.value.toString() + 'px';
// })


function changeFontSize() {
    const inputElement = document.querySelector('#font-size-control');
    const textToChange = document.querySelector('#text');
    
  
    inputElement.addEventListener('input', () => {
           textToChange.style.fontSize = inputElement.value + 'px';
    });
  }
  changeFontSize();
