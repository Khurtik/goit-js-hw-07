'use strict';

const categories = document.querySelectorAll('li.item');
const title = document.querySelector('h2');
const numberElem = document.querySelectorAll('ul');
console.log(`'В списке ${categories.length} категории.'`);
console.log(`Категория: ${title.textContent}`);
console.log(`Количество элементов: ${numberElem.length}`);
