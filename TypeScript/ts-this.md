# 명시적 this

## 암시적 any

```ts
interface Cat {
  name: string;
  age: number;
}

const cat: Cat = {
  name: 'Bob',
  age: 3,
};

function hello(msg: string): void {
  console.log(`Hello ${this.name}, ${msg}`);
} // 'this'에는 형식 주석이 없으므로 암시적으로 'any' 형식이 포함됩니다.

hello.call(cat, 'My cute Cat!');
// Hello Bob, 'My cute Cat!'
```

call 메소드를 활용해 hello함수에 cat 객체를 넣어주면 콘솔에는 정상적으로 메세지가 출력된다. 이는 함수 내부의 this 키워드에 암시적으로 any 타입이 지정되었기 때문이다. 하지만 정적언어를 사용하는 이상 any 타입은 지양해야 한다.

## 명시적 this의 활용

```ts
interface Cat {
  name: string;
  age: number;
}

const cat: Cat = {
  name: 'Bob',
  age: 3,
};

function hello(this: Cat, msg: string): void {
  console.log(`Hello ${this.name}, ${msg}`);
}

hello.call(cat, 'My cute Cat!'); // Hello Bob, 'My cute Cat!'
```

함수의 매개변수처럼 this가 Cat 인터페이스를 따르는 객체를 가리킬 것이라 알려주면 `'this'에는 형식 주석이 없으므로 암시적으로 'any' 형식이 포함됩니다.` 라는 메세지는 출력되지 않는다. 이러한 문법은 매개변수에 this를 포함시키는 것처럼 보이지만, 매개변수로 활용되지는 않고 단지 타입스크립트의 문법적 지원으로 보면 된다.
