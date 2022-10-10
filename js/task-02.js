const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const list = document.querySelector('#ingredients');
const listElements = [];
for (const ingredient of ingredients) {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  listElements.push(item.outerHTML);
}
list.innerHTML = listElements.join('');
console.log(list);
