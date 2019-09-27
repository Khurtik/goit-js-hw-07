'use strict';
let inputValue;
const controls = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');
const btnRender = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');
const input = document.querySelector('.input-value');

input.addEventListener('input', event => {
  inputValue = event.target.value;
});

btnRender.addEventListener('click', () => createBoxes(Number(inputValue)));

btnDestroy.addEventListener('click', event => {
  boxes.remove();
  input.value = '';
});

function createBoxes(amount) {
  const width = 30;
  const step = 10;
  let arr = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    boxes.append(div);
    div.style.width = width + i * step + 'px';
    div.style.height = div.style.width;
    div.style.marginBottom = '3px';
    div.style.backgroundColor =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';
    arr.push(div.outerHTML);
  }
  arr = arr.join('');
}
