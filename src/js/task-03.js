const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

function task3 (array){
  const ulElem = document.querySelector('.gallery');
  ulElem.style.display = 'flex';
  ulElem.style.flexDirection = 'raw';
  ulElem.style.listStyle = 'none';
  ulElem.style.color = 'purple';
  const galleryMarkup = array.map((element) => `<li><img src="${element.url}" alt="${element.alt}"</li>`).join("");
ulElem.insertAdjacentHTML("beforeend", galleryMarkup);

const li = [...ulElem.children];
console.log(li);
li.forEach(el => {

  el.classList.add('item-img');
  el.childNodes.style.wigth = '300px';
});

}
task3(images);




