const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]

const ingredientsElContainer = document.querySelector('#ingredients')
console.log(ingredientsElContainer)

const elementsEl = ingredients.map((option) => {
  const itemEl = document.createElement('li')
  itemEl.textContent = option
  return itemEl
})
console.log(elementsEl)
ingredientsElContainer.append(...elementsEl)
