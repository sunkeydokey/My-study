const highFuncForMap = (element) => {
  return element + 10;
};

const newArrayByMap = [1, 2, 3].map(highFuncForMap);
console.log(newArrayByMap); // [ 11, 12, 13 ]

const _call = (a, b) => func1() + func2();

const funcReturnsFunc = (val) => () => val;
const lazy = funcReturnsFunc(12010);
console.log(lazy()); // 12010
