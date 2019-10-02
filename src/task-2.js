'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector('#ingredients');
ingredients.map(item => {
  const createLi = document.createElement('li');
  createLi.insertAdjacentHTML('afterbegin', item);
  listIngredients.appendChild(createLi);
});
