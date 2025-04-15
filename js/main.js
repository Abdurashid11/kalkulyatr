import { add as plus, subtract as minus, multiply as times } from './math.js';
import divideFunction from './divide.js';

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

document.getElementById('addBtn').onclick = () => {
  result.textContent = plus(Number(num1.value), Number(num2.value));
};

document.getElementById('subBtn').onclick = () => {
  result.textContent = minus(Number(num1.value), Number(num2.value));
};

document.getElementById('mulBtn').onclick = () => {
  result.textContent = times(Number(num1.value), Number(num2.value));
};

document.getElementById('divBtn').onclick = () => {
  result.textContent = divideFunction(Number(num1.value), Number(num2.value));
};