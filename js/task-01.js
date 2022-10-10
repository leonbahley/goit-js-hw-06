const list = document.querySelector('ul#categories');
console.log('Number of categories:', list.children.length);
for (const item of list.children) {
  console.log('Category:', item.firstElementChild.innerHTML);
  console.log('Elements:', item.querySelectorAll('li').length);
}
