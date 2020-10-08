const categoriesEl = document.querySelectorAll('.item')
console.log(`В списке ${categoriesEl.length} категории.`)

categoriesEl.forEach((categoryEl) => {
  const nameCategory = categoryEl.querySelector(`h2`)
  const quantityEl = categoryEl.querySelectorAll('li')
  console.log(`Категория: ${nameCategory.textContent}`)
  console.log(`Количество элементов: ${quantityEl.length}`)
})
