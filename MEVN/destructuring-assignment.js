// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 쉽게 담는 것

// swap
let numberA = 1;
let numberB = 2;
[numberA, numberB] = [numberB, numberA];
console.log(numberA, numberB); // 2 1

// temp에 임시적으로 값을 할당해 순서를 바꾸는 방법
numberA = 1;
numberB = 2;
let temp;

temp = numberA;
numberA = numberB;
numberB = temp;
console.log(numberA, numberB);

// 구조분해 할당을 통해 한 줄에 바꿀 수 있다.

// 배열의 요소 담기
const f = () => [1, 2, 3, 4];
const [a, b, c, d, e] = f();
console.log(a, b, c, d, e); //1 2 3 4 undefined

// 객체의 value 담기
// ex) 1
const objectFunction = () => {
  return { name: 'sunkeydokey', age: 26 };
};

const { name } = objectFunction();
console.log(name); // sunkeydokey

// ex) 2
const exampleList = [1, 2];
const [willBe1, willBe2] = exampleList;
console.log(willBe1, willBe2);

// ex) 3
const objFunction = () => {
  return { nickname: 'sunkeydokey', isNice: true };
};

const { nickname, isNice } = objFunction();
console.log(nickname, isNice); // sunkeydokey true
