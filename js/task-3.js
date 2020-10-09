const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery');
galleryEl.classList.add('img');
galleryEl.style.display = 'flex';
galleryEl.style.listStyle = 'none';
console.log(galleryEl);

const imagesEl = images.map(image => {
  galleryEl.insertAdjacentHTML(
    'beforeEnd',
    `<li><img src="${image.url}" alt="${image.alt}" width = 200 height = 150></li>`,
  );
});
const itemEl = document.querySelectorAll('li');
itemEl.classList.add('item');
// console.log(itemEl);
