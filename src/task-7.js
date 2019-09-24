'use strict';

const range = document.querySelector('#font-size-slider');
console.log(range);
const BASE_FONT_SIZE = 5;
const FONT_SIZE_GAP = 20;
range.addEventListener('input', e => {
  const fontSize = BASE_FONT_SIZE + (FONT_SIZE_GAP * range.value) / 100;
  text.style.fontSize = `${fontSize}px`;
  console.log(range.value);
});
