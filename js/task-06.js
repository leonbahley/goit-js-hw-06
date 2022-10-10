const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  if (input.value.length < input.dataset.length) {
    input.classList.add('invalid');
  } else if (input.value.length >= input.dataset.length) {
    input.classList.replace('invalid', 'valid');
  }
});
