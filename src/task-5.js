'use strict';

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', event => {
  if (input.value.length > 0) {
    output.innerHTML = input.value;
  } else {
    output.innerHTML = 'незнакомец';
  }
});
