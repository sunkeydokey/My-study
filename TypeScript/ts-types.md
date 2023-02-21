# string

```ts
let str: string;
// 값을 할당하지 않더라도 추후에 할당할 타입을 지정할 수 있다.

let red: string = 'Red';
let green: string = 'Green';

let myColor: string = `My color is ${red}.`;
// 템플릿 리터럴 사용 가능

let yourColor: string = 'Your color is' + green + '.';
// 문자열 결합 가능
```

# number

```ts
let num: number;
let integer: number = 6;
let float: number = 3.14;
let infinity: number = Infinity;
let nan: number = NaN;
// Infinity, NaN 과 같은 값도 number type에 해당
```

# boolean

```ts
let isBoolean: boolean;
let isDone: boolean = false;
let isGood: boolean = true;
```

# Null / Undefined

```ts
let nu: null;
let undef: undefined;
nul = null;
// 지정은 가능하지만 활용할 일이 거의 없음
```

# 배열

```ts
const fruits: string[] = ['Apple', 'Banana', 'Cherry'];
const numbers: number[] = [1, 2, 3, 4, 5, 6];

const union: (string | number)[] = ['Apple', 1, 'Banana', 2, 3, 'Cherry'];
// 위와 같이 작성하면 배열 안의 데이터 타입을 함께 사용할 수 있다.

const onlyOne: ['only'] = ['only'];
// 타입을 지정할 때 배열안에 값을 넣으면 할당하는 배열도 그 값만을 가져야 한다.
```

# 객체

```ts
const obj: object = {};
const arr: object = [];
const func: object = function () {};
// typeof DATA === 'object'인 경우 오류가 발생하지 않는다.

const userA: {
  name: string;
  age: number;
  isValid: boolean;
} = {
  name: 'sunkeydokey',
  age: 26,
  isValid: true,
};
// 그래서 객체데이터의 각 속성에 타입을 지정해주는 방식으로 활용한다.

// 같은 타입의 속성들을 가지는 객체를 더 만들고 싶은 경우 interface를 활용할 수 있다.
interface User {
  name: string;
  age: number;
  isValid: boolean;
}

const userB: User = {
  name: 'sunny',
  age: 23,
  isValid: false,
};

const userC: User = {
  name: 'sun',
  age: 33,
  isValid: false,
};
```

# 함수

```ts
const add: (x: number, y: number) => number = function (x, y) {
  return x + y;
};
// (타입 지정된 매개변수) => 반환할 값의 타입

const newAdd = function (x: number, y: number): number {
  return x + y;
};
function addThree(x: number, y: number, z: number): number {
  return x + y + z;
}
// function (타입 지정된 매개변수): 반환할 값의 타입 {함수코드}

const result: number = add(1, 2);

const sayHello: () => void = function () {
  console.log('Hello');
};

const hello: void = sayHello();
```

# Any

```ts
let anything: any = 'anything';
anything = 123;
anything = false;
anything = true;
anything = {};
anything = [];
anything = function () {};
// 모든 타입이 가능하지만 남용한다면 정적언어인 타입스크립트를 사용할 이유가 없다.
const a: any = 123;

const any: any = a;
const boo: boolean = a;
const num: number = a;
const arr: string[] = a;
const obj: { x: string; y: number } = a;
```

# Unknown

```ts
const u: unknown = 123;

const any: any = u;
const boo: boolean = u; // unknown' 형식은 'number' 형식에 할당할 수 없습니다.
const num: number = u; // unknown' 형식은 'number' 형식에 할당할 수 없습니다.
const arr: string[] = u; // unknown' 형식은 'number' 형식에 할당할 수 없습니다.
const obj: { x: string; y: number } = u; // unknown' 형식은 'number' 형식에 할당할 수 없습니다.

// unknown은 any보다 엄격하다.
```

# Tuple

```ts
const tuple: [string, number, boolean] = ['a', 1, false];
const users: [number, string, boolean][] = [
  [1, 'Lee', true],
  [2, 'Kim', false],
  [3, 'Park', true],
];

// 배열 데이터 내부 아이템의 순서와 타입, 개수를 엄격하게 검사한다.
```

# Void

```ts
function helloWithMessage(msg: string): void {
  console.log(`hello ${msg}`);
}

const hi: void = helloWithMessage('world');
// return 키워드가 없는 함수에서의 반환값 타입
```

# Never

```ts
const nev: [] = [];
nev.push(3); // number' 형식의 인수는 'never' 형식의 매개 변수에 할당될 수 없습니다.
```

# Union

```ts
let union: string | number;
union = 'Hi';
union = 12345;

// |를 이용해 여러개의 데이터 타입을 지정할 수 있다.
```

# Intersection

```ts
interface Customer {
  name: string;
  age: number;
}

interface Grade {
  isVip: boolean;
}

const customerA: Customer & Grade = {
  name: 'Kim',
  age: 52,
  isVip: true,
};
```
