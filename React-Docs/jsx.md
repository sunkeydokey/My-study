[JSX 소개](https://ko.reactjs.org/docs/introducing-jsx.html)

# JSX란?

```JS
const element = <h1>Hello, world!</h1>;
```

JSX는 React 엘리먼트를 생성하는 문법이다.  
React는 JS파일 내에서 마크업과 로직을 포함하는 `컴포넌트`라는 느슨하게 연결된 유닛으로 관심사를 분리한다.

# JSX에 표현식 포함하기

JSX의 중괄호 안에는 모든 JS 표현식을 넣을 수 있다.

```JS
function sayHello(name) {
    return 'Hello, ' + name + '!';
}

const name = 'sunkeydokey';
const element = <h1>Hello, {name}!</h1>;
const elementWithFunction = <h1>{sayHello(name)}</h1>;
```

# JSX도 표현식입니다.

JSX 표현식은 컴파일 후에 정규 JS 함수 호출이 되고 JS객체로 인식된다. 따라서 JSX를 조건문이나 반복문 안에 사용하고, 변수에 할당하고, 인자로 넣고, 함수에서 반환받을 수 있다.

# JSX 속성 정의

어트리뷰트에 따옴표를 이용해 문자열 리터럴을 정의할 수 있고, 중괄호를 사용하여 JS표현식을 입력할 수도 있다.

```JS
const blogUrl = 'https://velog.io/@sunkeydokey';

const sunkeydokeyVelog = <a href="https://velog.io/@sunkeydokey">MY BLOG</a>;
const velogUrl = <a href={blogUrl}>MY BLOG</a>;
```

> JS표현식을 어트리뷰트에 삽입할 때 중괄호를 따옴표로 감싸면 안 된다.

# JSX로 자식 정의

태그가 비어있다면 `/>` 를 이용해 바로 닫아주어야 한다.

```JS
const inputElement = <input type="text" />
```

그리고 JSX 태그는 자식을 포함할 수 있다.

```JS
const parentElemntWithChild = (
    <div className="parent">
      <h1 className="child-title">Title</h1>
      <h2>Description</h2>
    </div>
);
```

# JSX는 주입 공격을 방지합니다.

React DOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 이스케이프하기 때문에 명시적으로 작성하지 않은 내용은 주입되지 않는다. 모든 항목은 렌더링 전에 문자열로 반환된다. 이로 인해 XSS 공격을 방지할 수 있다.

# JSX는 객체를 표현한다.

Bable은 JSX를 `React.createElement()` 호출을 통해 컴파일한다.

```JS
const element = (
  <h1 className="example">
    Hello, world!
  </h1>
);
```

```JS
const element = React.createElement(
  'h1',
  {className: 'example'},
  'Hello, world!'
);
```

위의 두 코드는 동일한 h1이다. `React.createElement()`는 다음과 같은 객체를 생성한다.

```JS
const element = {
  type: 'h1',
  props: {
    className: 'example',
    children: 'Hello, world!'
  }
};
```

이러한 객체를 React 엘리먼트라고 하며, 화면에서 표시할 것을 나타낸다. React는 이 객체를 통해 DOM을 구성하고 최신 상태로 유지한다.
