const R = require('ramda');

// const a = R.add(1);
// const b = a(2);
// console.log(b); // 3

// const addFourNumbers = (a, b, c, d) => a + b + c + d;
// const curriedAddFourNumbers = R.curry(addFourNumbers);
// const third = curriedAddFourNumbers(1, 2);
// const fourth = third(4);
// console.log(bfourth(6));

// const f_1 = R.map((a) => a + 1);
// const f_2 = R.filter((a) => a % 2);
// const ret = f_2(f_1([1, 2, 3, 4]));
// console.log(ret);

const composeFunc = R.compose(Math.abs, R.add(1), R.multiply(2))(-4);
console.log(composeFunc); // 7

const pipeFunc = R.pipe(R.negate, R.inc);
console.log(pipeFunc(3)); // -2
