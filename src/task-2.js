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

for (let i = 0; i < ingredients.length; i++) {
  const createLi = document.createElement('li');
  createLi.append(ingredients[i]);
  listIngredients.appendChild(createLi);
}
console.log(listIngredients);
