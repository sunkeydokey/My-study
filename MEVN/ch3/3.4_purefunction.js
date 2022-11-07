const num1 = 7;
const pureFunc = (num1, num2) => {
  return num1 + num2;
};

const notPure = (num) => {
  return num + num1;
};

console.log(pureFunc(1, 4)); //5
console.log(notPure(3)); // 10
