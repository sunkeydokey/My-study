// 이터러블은 어떤 요소들을 순회하며 쉽게 탐색할 수 있는 자료구조. 자바스크립트에서는 이터러블 프로토콜이라는 규칙을 준수한 객체를 말한다. 규칙이란 어떤 객체가 Symbol.iterator 메서드를 가짐을 뜻한다.

const fruitList = ['사과', '딸기', '포도', '바나나'];
console.log(Symbol.iterator in fruitList); // true / 배열은 Symbol.iterator 메서드를 가지므로 true 반환
for (const fruit of fruitList) {
  console.log(fruit);
} //사과 딸기 포도 바나나 / 이러한 규칙을 가진 객체는 for element of array 형식으로 객체를 탐색할 수 있음

// Map : key와 value를 할당해 key를 통해 value를 꺼내는 자료구조
let mp = new Map();
mp.set('사과', '딸기');
mp.set('포도', '배');
console.log(mp.get('사과'));
for (const element of mp) console.log(element);
console.log(Symbol.iterator in mp);
/*
딸기
[ '사과', '딸기' ]
[ '포도', '배' ]
true
*/
