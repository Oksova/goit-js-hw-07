const refs = {
  input: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange)
refs.nameOutput.setAttribute('style', 'color:red')

function onInputFocus() {
  console.log('Изменено содержание инпута')
}

function onInputChange(event) {
  refs.nameOutput.textContent = event.currentTarget.value
}
