# 인터페이스

인터페이스를 통해 객체의 스펙(속성과 속성의 타입), 함수의 파라미터, 함수의 스펙(파라미터, 반환 타입 등), 배열과 객체를 접근하는 방식, 클래스에 대한 약속을 정할 수 있다.

# 객체의 스펙

```ts
interface User {
  name: string;
  age: number;
  isValid: boolean;
}

const userA: User = {
  name: 'Lee',
  age: 25,
  isValid: true,
};
```

## 선택적 속성

```ts
interface User {
  name: string;
  age: number;
  isValid?: boolean;
}

const userA: User = {
  name: 'Lee',
  age: 25,
  isValid: true,
};
```

`?` 를 통해 객체의 속성을 선택사항으로 만들 수 있다.

## 읽기 전용 속성

```ts
interface User {
  name: string;
  readonly age: number;
  isValid: boolean;
}

const userA: User = {
  name: 'Lee',
  age: 25,
  isValid: true,
};

userA.age = 26; // 읽기 전용 속성이므로 'age'에 할당할 수 없습니다.
```

`readonly`를 통해 읽기 전용 속성으로 지정할 수 있다.

# 함수 타입

```ts
interface GetMessage {
  (param: string): string;
}

interface User {
  name: string;
  age: number;
  getMessage: GetMessage;
}

const userA: User = {
  name: 'Lee',
  age: 25,
  getMessage(message: string) {
    return `'${message}' to ${this.name}.`;
  },
};

userA.getMessage('Hello!'); // 'Hello!' to Lee.
```

```ts
interface ConsoleLog {
  (message: string): void;
}

const consoleLogging: ConsoleLog = (message: string) => {
  console.log(message);
};
```

인터페이스를 통해 함수의 인자의 타입과 반환 값의 타입을 지정할 수 있다.

# 인덱스 시그니처

## 인덱스 가능 타입

배열데이터나 객체데이터의 타입을 지정할 수 있다.

## 배열

```ts
interface Fruits {
  [index: number]: string;
}

const fruits: Fruits = ['Apple', 'Banana', 'Kiwi'];
```

인터페이스에서 인덱스 시그니처를 지정해 인덱스의 타입이 number로 지정할 수 있다.

## 객체

```ts
interface Person {
  name: string;
  age: number;
  [key: string]: string | number;
}

let person: Person = {
  name: 'Lee',
  age: 26,
  address: 'Seoul',
  phone: '010-1234-5678',
};

person['email'] = 'sunkeydokey@gmail.com';
person['isValid'] = true; // 'boolean' 형식은 'string | number' 형식에 할당할 수 없습니다.
```

객체의 속성과 값의 타입을 지정하는 인터페이스에 인덱스 시그니처를 지정하면 그 타입에 맞는 속성과 값을 동적으로 추가할 수 있다.

## 주의할 점

```ts
interface Data {
  [key: string]: unknown;
}

function logKeyValues(data: Data) {
  for (const key in data) {
    console.log(`${key}: ${data[key]}`);
  }
}

interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: 'Lee',
  age: 26,
};

logKeyValues(person);
// 'Person' 형식의 인수는 'Data' 형식의 매개 변수에 할당될 수 없습니다.
// 'Person' 형식에 인덱스 시그니처 유형 'string'이(가) 없습니다.
```

person 객체가 따르는 Person 인터페이스에 인덱스 시그니처가 없다. 즉 인덱스 가능 타입이 아니다. 때문에 인덱스 시그니처가 지정된 Data 인터페이스를 따르는 data에 person을 인수로 할당할 수 없다.

```ts
interface Person {
  name: string;
  age: number;
  [key: string]: string | number | boolean;
}

let person: Person = {
  name: 'Lee',
  age: 26,
  isValid: true,
};

logKeyValues(person);
```

Person 인터페이스에도 인덱스 시그니처를 지정해 인덱스 가능 타입으로 만들어주면 에러 없이 작동된다.

# 인터페이스의 상속

인터페이스도 확장이 가능하다.

## 상속

```ts
interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  school: string;
  grade: number;
}

const sudentA: Person = {
  name: 'Lee',
  age: 15,
  school: 'highschool',
  // '{ name: string; age: number; school: string; }' 형식은 'Person' 형식에 할당할 수 없습니다.
  // 객체 리터럴은 알려진 속성만 지정할 수 있으며 'Person' 형식에 'school'이(가) 없습니다.
};

const studentB: Student = {
  name: 'Kim',
  age: 17,
  school: 'highschool',
  grade: 3,
};
```

## 같은 이름의 인터페이스

같은 이름의 인터페이스를 한번 더 선언해 새로운 속성을 추가할 수 있다. 다만 기존에 존재하는 속성을 다시 쓰는 경우 같은 타입을 지정하지 않으면 에러가 발생한다.

```ts
interface Info {
  name: string;
  job: string;
  age: number;
}

interface Info {
  married: boolean;
  job: string;
  age: string;
  // 후속 속성 선언에 같은 형식이 있어야 합니다.
  // 'age' 속성이 'number' 형식이어야 하는데 여기에는 'string' 형식이 있습니다.
}
```
