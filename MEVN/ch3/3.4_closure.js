const test = (function () {
  let count = 0;
  return {
    increase() {
      count++;
    },
    decrease() {
      count--;
    },
    getValue() {
      console.log(count);
    },
  };
})();

test.increase();
test.increase();
test.increase();
test.getValue();

const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

console.log([add(), add(), add()]);
console.log(add());
