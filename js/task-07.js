const switcher = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');
switcher.addEventListener('input', () => (textElement.style.fontSize = switcher.value + 'px'));
