# 타입 단언

```ts
const el = document.querySelector('body');
el.textContent = 'Hello World!';
// 'el'은(는) 'null'일 수 있습니다.
```

el 변수에 body 엘리먼트를 할당했으나, 타입스크립트는 body 엘리먼트가 없을 상황도 예상하여 null일 수 있다고 알려준다.

```ts
const el = document.querySelector('body') as HTMLBodyElement;
el.textContent = 'Hello World!';
```

as 키워드와 함께 el이 body 엘리먼트로 사용될 것을 알려주어 타입 단언을 하면 타입스크립트가 인지하게 된다.

# 주의할 점

```ts
function getNumber(x: number | null | undefined) {
  return Number((x as number).toFixed(2));
}

getNumber(3.141592);
getNumber(null);
```

getNumber 함수에 null을 인수로 넣어도 개발 환경에서 오류메세지가 나오지는 않는다. 하지만 코드를 동작시키고 콘솔을 보면

`TypeError: Cannot read properties of null (reading 'toFixed')` 라는 에러를 볼 수 있다.
null에 toFixed 메소드를 적용할 수 없기 때문이다.

타입 단언을 잘못 사용하면 코드를 동작시키기 전까지 오류를 알 수 없다.

# 타입 단언이 필요한 경우

```ts
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number(x.toFixed(2));
  }
  // 'string | number' 형식에 'toFixed' 속성이 없습니다.
  // 'string' 형식에 'toFixed' 속성이 없습니다.

  return x.toUpperCase();
  // 'string | number' 형식에 'toUpperCase' 속성이 없습니다.
  // 'number' 형식에 'toUpperCase' 속성이 없습니다.
}
```

union 타입을 지정한 경우 하나의 타입에서만 사용할 수 있는 메소드를 활용할 수 없다.

```ts
function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number((x as number).toFixed(2));
  }
  return (x as string).toUpperCase();
}
```

각각의 케이스에서 타입 단언을 통해 어떤 타입을 가지게 될 지 지정해주어야 한다.

# Non-null 단언

```ts
const el = document.querySelector('body');
el!.textContent = 'Hello World!';
```

`!` 기호를 통해 null 타입이 아님을 단언할 수 있다.

# 할당 단언

```ts
let num!: number;
console.log(num); // undefined

num = 123;
```

타입만 지정하고 변수를 할당하지 않은 채 num을 사용하면
`'num' 변수가 할당되기 전에 사용되었습니다.` 라는 오류 메세지가 출력된다.
`!: type` 을 통해 할당 단언을 하면 오류 메세지를 가릴 수 있다.
