'use strict';
let inputValue;
let randomColor =
  'rgb(' +
  Math.floor(Math.random() * 256) +
  ',' +
  Math.floor(Math.random() * 256) +
  ',' +
  Math.floor(Math.random() * 256) +
  ')';
// let color = getRandomColor();
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
    console.log(boxes);
    div.style.width = width + i * step + 'px';
    div.style.height = div.style.width;
    div.style.backgroundColor = randomColor;
    arr.push(div.outerHTML);
  }
  arr = arr.join('');
}
// console.log(boxes);

// function getRandomColor() {
//   let letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
