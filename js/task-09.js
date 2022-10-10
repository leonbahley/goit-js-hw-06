function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorCode = document.querySelector('.color');
const switcher = document.querySelector('.change-color');
switcher.addEventListener('click', () => {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  colorCode.textContent = document.body.style.backgroundColor;
});
