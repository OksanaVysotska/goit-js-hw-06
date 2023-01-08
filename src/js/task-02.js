const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')

const listLi = ingredients.map((item) => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = item;

  return itemEl;
}) 

ulEl.append(...listLi);
 
console.log(listLi);
console.log(ulEl);

