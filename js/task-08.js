const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);
const userData = {};
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Fill all lines');
  } else {
    userData.email = email.value;
    userData.password = password.value;
  }
  console.log(userData);
  event.currentTarget.reset();
}
