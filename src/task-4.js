'use strict';

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

increment.addEventListener('click', event => {
  value.innerHTML = counterValue++;
});
decrement.addEventListener('click', event => {
  value.innerHTML = counterValue--;
});
