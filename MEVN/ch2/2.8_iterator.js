// 이터레이터 : 순회에 쓰이는 포인터로 이터러블에서 값을 뽑아낼 때 사용
const fruitList = ['사과', '딸기', '포도', '바나나'];
const it = fruitList[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

/*
{ value: '사과', done: false }
{ value: '딸기', done: false }
{ value: '포도', done: false }
{ value: '바나나', done: false }
{ value: undefined, done: true }
{ value: undefined, done: true }
*/
