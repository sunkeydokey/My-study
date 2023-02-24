# 타입 별칭

## 필요한 이유

```ts
const tupA: [string, number, boolean] = ['str', 123, true];
const tupB: [string, number, boolean] = ['num', 323, false];
const tupC: [string, number, boolean] = ['bool', 312323, false];

type MyTuple = [string, number, boolean];
const tupD: MyTuple = ['string', 12412412, false];
```

변수마다 같은 튜플 타입을 지정하고 있다. 반복된 코드 작성이며, 더 많은 타입이나 배열의 길이가 길어진다면 비효율 적일 것이다. 타입 별칭을 통해 사용자 정의 타입을 만들면 한번에 타입을 지정할 수 있다.

## 타입 별칭

`type 별칭 = 타입` 을 통해 미리 타입 정보를 선언할 수 있다.

```ts
type TypeA = string | number | boolean;

type User =
  | {
      name: string;
      age: number;
      isValid: boolean;
    }
  | [string, number, boolean];

const userA: User = {
  name: 'Lee',
  age: 26,
  isValid: true,
};

const userB: User = ['Kim', 26, false];

const someFunc = (param: unknown): TypeA => {
  switch (typeof param) {
    case 'string':
      return param.toUpperCase();
    case 'number':
      return param.toFixed(2);
    default:
      return true;
  }
};

console.log(someFunc('world')); // WORLD
```

# interface와의 차이점

```ts
interface Person {
  name: string;
  age: number;
  phone: string;
}

type Info = {
  name: string;
  age: number;
  phone: string;
};

const userA: Person = {
  name: 'A',
  age: 20,
  phone: '010-1234-5678',
};

const userB: Info = {
  name: 'B',
  age: 22,
  phone: '010-4321-8765',
};
```

사용자 정의 타입 Info와 인터페이스 Person은 기능적으로 같은 역할을 한다. 타입스크립트 그룹에서 이중 무엇을 사용할 지에 대한 질문의 답변은 다음과 같다고 한다.

> 취향 차이이지만 타입 별칭은 사용 범위가 더 넓고, interface가 객체데이터를 만들 때를 전제하기 때문에 굳이 따지자면 interface를 고를 수 있겠다.
