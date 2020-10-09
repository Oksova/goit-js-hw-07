const refs = {
  input: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);
refs.nameOutput.setAttribute('style', 'color:red');

function onInputChange(event) {
  if ((refs.nameOutput.textContent = event.currentTarget.value)) {
  } else {
    refs.nameOutput.textContent = `незнакомец`;
  }
}
