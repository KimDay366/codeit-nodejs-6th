const PI = 3.14;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const calculator = {
  PI,
  add,
  subtract,
  multiply,
  divide,
}; 
// 상단의 변수,함수들을 모두 하나의 객체로 저장하기 

export default calculator;