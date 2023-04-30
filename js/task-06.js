const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', () => {
  const length = validationInput.dataset.length;
  const valueLength = validationInput.value.length;

  if (valueLength === +length) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});