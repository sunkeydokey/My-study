# 함수 오버로딩

## 기본 함수

```ts
function addStrings(a: string, b: string) {
  return a + b;
}

function addNumbers(a: number, b: number) {
  return a + b;
}

addStrings('Hello ', 'world.'); // Hello world.
addNumbers(2, 3); // 5
```

엄격하게 함수를 선언하면 string 끼리만 더하는 함수와 number 끼리만 더하는 함수를 따로 만들 수 있다. 반면 자바스크립트는

```js
function add(a, b) {
  return a + b;
}
```

이렇게만 작성해도 add함수만으로 string, number를 모두 더하도록 할 수 있다.

## 오버로딩

```ts
function add(a: string, b: string): string;
// 타입 선언
function add(a: number, b: number): number;
// 타입 선언
function add(a: number | string, b: number | string): string;
// 타입 선언
function add(a: any, b: any) {
  // 함수 구현
  if (typeof a !== typeof b && typeof a === 'string') {
    return a + b.toString();
  } else if (typeof a !== typeof b && typeof b === 'string') {
    return a.toString() + b;
  } else {
    return a + b;
  }
}

console.log(add('Hello ', 'world.')); // Hello world.
console.log(add(1, 2)); // 3
console.log(add('HELLO ', 255705)); // HELLO 255705
```

이런 식으로 짜면 자바스크립트의 함수와 같은 역할을 할 수 있다. 하지만 유니온 타입을 통해 더 좋은 코드를 짤 수 있다.

```ts
function add(a: number | string, b: number | string): string | number {
  return typeof a === 'string' || //
    typeof b === 'string'
    ? `${a}${b}`
    : a + b;
}
// a, b 중 하나라도 string인 경우 템플릿 리터럴을 활용해 문자열로 결합
// 둘 다 stiring이 아니라면 (number라면) 더하기
```
