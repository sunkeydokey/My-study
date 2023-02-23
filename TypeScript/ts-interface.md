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
