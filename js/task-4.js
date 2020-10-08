const counterEl = document.querySelector('#value')

const incrementBtn = document.querySelector('[data-action="increment"]')

const decrementBtn = document.querySelector('[data-action="decrement"]')

let counterValue = counterEl.textContent
counterValue = 0

incrementBtn.addEventListener('click', () => {
  counterValue += 1
  counterEl.textContent = counterValue
})

decrementBtn.addEventListener('click', () => {
  counterValue -= 1
  counterEl.textContent = counterValue
})
