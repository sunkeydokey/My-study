# 타입 추론

타입스크립트는 타입을 지정해주지 않아도 `1. 초기화된 변수`나 `2. 기본값이 설정된 매개변수`, `3. 반환값이 있는 함수` 등을 통해 타입을 추론할 수 있다.

# 초기화된 변수

```ts
let num = 12;
num = 'hello world.'; // 'string' 형식은 'number' 형식에 할당할 수 없습니다.

/*
타입이 지정되지 않은 변수 num은 number 타입 변수를 할당받았다.
타입스크립트는 num의 타입을 number로 추론해 다른 타입의 값 할당을 방지한다.
*/
```

# 기본값이 지정된 매개변수 & 반환값이 있는 함수

```ts
function double(a: number, b = 2) {
  return a * b;
}

const doubled = double(7, 'b');
// 'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다.

// 매개변수 b 는 2를 기본값으로 한다. 따라서 함수를 호출할 때 b의 인수로 number 타입이 아닌 값을 넣을 수 없다.

const error: string = double(7, 2);
// 'number' 형식은 'string' 형식에 할당할 수 없습니다.

// double 함수의 반환값 타입을 지정하지 않았지만 number로 추론되어 string타입을 지정한 변수에 할당할 수 없다.
```
