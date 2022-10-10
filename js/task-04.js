let counterValue = 0;
const buttonDown = document.querySelector(`[data-action='decrement']`);
const buttonUp = document.querySelector(`[data-action='increment']`);
const result = document.querySelector('#value');
buttonDown.addEventListener('click', () => {
  counterValue--;
  result.innerHTML = counterValue;
});
buttonUp.addEventListener('click', () => {
  counterValue++;
  result.innerHTML = counterValue;
});
