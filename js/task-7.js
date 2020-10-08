const refs = {
  input: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

refs.input.addEventListener('input', onInputScroll);

function onInputScroll(event) {
  refs.textEl.style.fontSize = event.currentTarget.value + 'px';
}
