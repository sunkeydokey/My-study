// 제너레이터 : 이터레이터를 쉽게 만들 수 있는 함수. 함수 자체가 이터러블하고 커스텀한 이터러블을 만드는 데 사용

const log = console.log;
function* gen() {
  // 제너레이터 함수를 통해 이터레이터를 만듦
  yield 10;
  if (false) yield 20;
  yield 30;
  return 90; // 함수 종료. 이후 yield를 하면 value -> undefined, done -> true
  yield 30;
}

let iter = gen();
log(iter);
log(iter.next()); // next 메서드로 yield의 값을 value에 담음
log(iter.next());
log(iter.next());
log(iter.next());

/*
Object [Generator] {}
{ value: 10, done: false }
{ value: 30, done: false }
{ value: 90, done: true }
{ value: undefined, done: true }
*/

log([...gen()]); // [ 10, 30 ]

// 제너레이터로 Array.prototype.map 구현
// map
const add = (num) => num + 10;
const numList = [1, 2, 3];
const newArray = numList.map(add);
log(newArray); // [ 11, 12, 13 ]

// 제너레이터
function* mapLike(func, list) {
  for (const element of list) {
    yield func(element);
  }
}
log(mapLike(add, numList)); // Object [Generator] {}
log([...mapLike(add, numList)]); // [ 11, 12, 13 ]

// 제너레이터 코루틴 (함수의 작동시점을 자유롭게 구현할 수 있음)
const customGenerator = mapLike(add, numList);
log(customGenerator.next());
log('Logic 1');
log(customGenerator.next());
log('Logic 2');
log(customGenerator.next());

/*
{ value: 11, done: false }
Logic 1
{ value: 12, done: false }
Logic 2
{ value: 13, done: false }

작동원리 : 
1. yield문이 있는 해당 값을 제너레이터 객체가 그 부분에 해당하는 스택 프레임을 복사해 저장
2. 동시에 자바스크립트 콜스택에서 해당 스택프레임 제거
3. next() 메서드 호출에 의해 스택프레임을 복원해 실행

이 제너레이터는 한 방향으로만 넘겨줄 수 있어 정확히는 세미 코루틴
*/

// 제너레이터를 이용한 지연평가
// 지연평가를 통해 파이프라인에서 제너레이터로 연결된 함수들이 합쳐지는 듯한 효과를 내서 성능 향상에 도움
const _ = require('fxjs/Strict');
const L = require('fxjs/Lazy');
const C = require('fxjs/Concurrency');

const numArray = [1, 2, 3, 4, 5, 6, 7, 8];
const returnStrict = _.go(
  // 즉시실행 pipe 함수
  numArray,
  _.map((element) => element), //새로운 배열 반환
  _.filter((element) => element % 2), // 홀수 요소들만의 배열 생성
  _.take(2) // 2개 추출
);
console.log(returnStrict); // [1, 3]

const returnLazy = _.go(
  numArray,
  L.map((element) => element),
  L.filter((element) => element % 2),
  L.take(2)
);
console.log([...returnLazy]); // [1, 3]
