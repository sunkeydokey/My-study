[조건부 렌더링](https://ko.reactjs.org/docs/conditional-rendering.html)

# React에서의 조건부 렌더링

React에서의 조건부 렌더링은 JS에서의 처리와 같이 동작한다.

```JS
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={false} />);
```

위의 코드는 `isLoggedIn` props를 받아 Boolean 값에 따라 다른 컴포넌트를 렌더링한다.

# 엘리먼트 변수

엘리먼트를 저장하기 위해 변수를 사용할 수 있다.

```JS
function Button() {
  return (
    <button>
      Button
    </button>
  );
}

function Paragraph() {
  return (
    <p>
      Paragraph
    </p>
  );
}

const Parent = () => {
  let someComponent;

  if (button) {
    someComponent = <Button />;
  } else {
    someComponent = <Paragraph />;
  }

  return (
    <div>
      {someComponent}
    </div>
  );
}
```

# 조건부 연산자로 If-Else구문 인라인으로 표현하기

위의 코드를 중괄호 안에 더 짧은 구문의 표현식을 넣어 수정할 수 있다.

```JS
function Button() {
  return (
    <button>
      Button
    </button>
  );
}

function Paragraph() {
  return (
    <p>
      Paragraph
    </p>
  );
}

const Parent = () => {
  return (
    <div>
      {button ? <Button /> : <Paragraph />}
    </div>
  );
}
```

# 논리 && 연산자로 If를 인라인으로 표현하기

만약 button이 true일 때 button 컴포넌트를 렌더링하고 싶다면

```JS
function Button() {
  return (
    <button>
      Button
    </button>
  );
}

const Parent = () => {
  return (
    <div>
      {button && <Button />}
    </div>
  );
}
```

`true && 표현식`은 언제나 표현식의 값으로 평가되는 것을 이용한다.

# 컴포넌트가 렌더링하는 것을 막기

null을 반환하면 렌더링 결과를 출력하는 대신 컴포넌트를 숨길 수 있다. null을 반환하면 생명주기 메서드 호출에 영향을 받지 않는다.
