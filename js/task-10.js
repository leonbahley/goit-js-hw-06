function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxesWrapper = document.querySelector('#boxes');
function createBoxes(amount) {
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i++) {
    const element = document.createElement('div');

    element.style.width = width + 'px';
    element.style.height = height + 'px';
    element.style.backgroundColor = getRandomHexColor();
    width += 10;
    height += 10;
    boxesWrapper.appendChild(element);
  }
}
function destroyBoxes() {
  const boxes = boxesWrapper.querySelectorAll('div');
  for (const item of boxes) {
    item.remove();
  }
}

const number = document.querySelector('[type="number"]');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
createButton.addEventListener('click', () => createBoxes(number.value));
destroyButton.addEventListener('click', () => destroyBoxes());
