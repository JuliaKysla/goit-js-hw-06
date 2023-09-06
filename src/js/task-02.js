const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function task2 (array) {
const ulElem = document.querySelector('#ingredients');

array.forEach((element) => {
  const li = document.createElement('li');
  li.textContent = element;

  li.classList.add("item");
  ulElem.append(li);
});
}
task2(ingredients);


// function task2(array) {
//   const ulElem = document.querySelector('#ingredients');
//   const liElements = [];

//   array.forEach((element) => {
//     const li = document.createElement('li');
//     li.textContent = element;
//     li.classList.add("item");
//     liElements.push(li);
//   });

//   return liElements;
// }

// const liElements = task2(ingredients);
// const ulElem = document.querySelector('#ingredients');

// liElements.forEach((li) => {
//   ulElem.append(li);
// });
