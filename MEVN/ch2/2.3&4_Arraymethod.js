// forEach
const func1 = (e, index) => {
  console.log(`${index + 1}번째 요소는 ${e}.`);
};
const a = [1, 2, 3, 4, 5].forEach(func1);
// 1번째 요소는 1.
// 2번째 요소는 2.
// 3번째 요소는 3.
// 4번째 요소는 4.
// 5번째 요소는 5.

console.log(a, 'console.log'); // undefined

// map
const func2 = (e, index) => e * 2;
const b = [1, 2, 3, 4, 5].map(func2);

console.log(b); //[ 2, 4, 6, 8, 10 ]

// reduce
const func3 = (prev, curr, index) => prev + curr;
const c = [1, 2, 3, 4, 5].reduce(func3);

console.log(c); // 15

// filter
const func4 = (e) => e % 2;
const d = [1, 2, 3, 4, 5].filter(func4);

console.log(d); // [ 1, 3, 5 ]

// every, some
const numbers = [1, 3, 5, 4];
const isAllOdd = numbers.every((e) => e % 2);
const isAnyOdd = numbers.some((e) => e % 2);
console.log(isAllOdd, isAnyOdd); // false true

// find, findIndex
const condition = (e) => e.height >= 180;
const friends = [
  { name: '김계란', height: 176 },
  { name: '꽈뚜룹', height: 183 },
  { name: '하승진', height: 208 },
  { name: '이천수', height: 171 },
];
const tallFriend = friends.find(condition);
console.log(tallFriend); // { name: '꽈뚜룹', height: 183 }

const indexOfTallFriend = friends.findIndex(condition);
console.log(indexOfTallFriend); // 1 / ! 보통 findIndex가 indexOf보다 빠르다

// includes
const listForIncludes = [1, 2, 3, 4, 5];
console.log(listForIncludes.includes(3)); //true
