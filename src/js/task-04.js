let counterValue = 0;

const decrementButton = document.querySelector("[data-action='decrement']");
const incrementButton = document.querySelector("[data-action='increment']");
const spanValue = document.querySelector('#value');

decrementButton.addEventListener('click', event =>{
    counterValue -=1;
    console.log(counterValue);
    updateCounterValue();
});

incrementButton.addEventListener('click', event =>{
    counterValue +=1;
    console.log(counterValue);
    updateCounterValue();
});

function updateCounterValue () {
    spanValue.textContent = counterValue;
}

updateCounterValue();
