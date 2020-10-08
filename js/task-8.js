const refs = {
  inputEl: document.querySelector('input'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  boxesEl: document.querySelector('#boxes'),
};

refs.inputEl.addEventListener('click', createBoxes);
function createBoxes(amount) {}
function destroyBoxes() {}
