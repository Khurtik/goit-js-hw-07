'use strict';

const categories = document.querySelectorAll('li.item');
const title = document.querySelector('h2');
const numberElem = document.querySelectorAll('ul');
console.log(`'В списке ${categories.length} категории.'`);

categories.forEach(item => {
  console.log(`Категория : ${item.firstElementChild.innerHTML}`);
  console.log(`Количество элементов: ${item.lastElementChild.children.length}`);
});
