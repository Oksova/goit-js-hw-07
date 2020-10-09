const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (input.value.length === Number(input.getAttribute(`data-length`))) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.replace('valid', 'invalid');
  }
}
