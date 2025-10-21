console.log('-- 네이밍 방식 --');

import { PI, add, subtract } from './calculator.mjs';

console.log(PI);
console.log(add(3, 9));


console.log('-- 디폴트 방식 --');

import calcul from './calculator_ver2.mjs';

console.log(calcul.PI);
console.log(calcul.add(10, 15));
