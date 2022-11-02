const { couldStartTrivia } = require('typescript');

// rest 매개변수
const rest = (b, ...rest) => {
  console.log(rest);
};

rest(1, 2, 3); // [ 2, 3 ]

const listToBeSpread = [1, 2, 3];
const spread = (a, b, c) => console.log(a, b, c);
spread(...listToBeSpread); // 1 2 3

const willBeRested = [1, 2, 3, 4, 5];
const [head, ...rested] = willBeRested;
console.log(head, rested); //1 [ 2, 3, 4, 5 ]

// 배열 통합 concat과는 배열 크기에 따른 성능을 비교해봐야 함
const listA = [1, 2, 3];
const listB = [4, 5, 6];

const listC = [...listA, ...listB];
console.log(listC); //[ 1, 2, 3, 4, 5, 6 ]

// Max 함수 매개변수
const findGreatest = [1, 323, 12312, 4214124, 4564234, 212313, 12313, 23123];
const greatest = Math.max(...findGreatest);
console.log(greatest); //4564234

// 객체복사
const objectWillBeCopied = { name: 'sunkeydokey', age: 26 };
const shallowCopiedObject = { ...objectWillBeCopied, key: 1 };
console.log(shallowCopiedObject); // { name: 'sunkeydokey', age: 26, key: 1 }
