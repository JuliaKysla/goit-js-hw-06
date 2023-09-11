const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


function task2() {
  const ulElem = document.querySelector('#ingredients');
  const ingredientsArr = [];
  ingredients.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = el;
    ingredientsArr.push(li);
  });
  ulElem.append(...ingredientsArr);
}
task2();