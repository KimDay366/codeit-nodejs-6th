export const PI = 3.14;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

console.log(add(7, 8));
// 파일이 연동되면 console을 별도로 ex & im 하지 않아도 같이 연동 됨

for (let i = 0; i < 5; i++) {
  console.log(i);
}

const bool = true;
if (bool) console.log('hello world');
