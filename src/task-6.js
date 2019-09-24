'use strict';

const input = document.querySelector('#validation-input');
const dataLength = document.querySelector('#validation-input[data-length]');

input.addEventListener('blur', event => {
  if (input.value.length == input.dataset.length) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
});

input.addEventListener('focus', event => {
  if (input.value.length == input.dataset.length) {
    input.classList.remove('valid');
  } else {
    input.classList.remove('invalid');
  }
});
