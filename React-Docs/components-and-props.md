[Components와 Props](https://ko.reactjs.org/docs/components-and-props.html)

# Components와 Props

컴포넌트는 props라는 임의의 입력을 받아 화면에 어떻게 표시될 지 기술하는 React 엘리먼트를 반환한다.

# 함수 컴포넌트와 클래스 컴포넌트

클래스 컴포넌트에는 몇 가지 추가 기능이 있다. 다만 함수 컴포넌트가 더 간결하다.

## 함수 컴포넌트

컴포넌트를 정의하는 가장 간단한 방법

```JS
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

위 함수는 데이터를 가진 하나의 props 객체 인자를 받아 React 엘리먼트를 반환한다.

## 클래스 컴포넌트

```JS
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

함수 컴포넌트와 클래스 컴포넌트는 동일한 React 엘리먼트를 반환한다.

# 컴포넌트 렌더링

```JS
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="sunkeydokey" />;
```

React 엘리먼트는 사용자 정의 컴포넌트로도 나타낼 수 있다.  
React가 사용자 정의 컴포넌트로 작성한 엘리먼트를 발견하면 JSX 어트리뷰트와 자식을 해당 컴포넌트에 단일 객체로 전달하는데, 이 객체를 `props` 라고 한다.

```JS
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="sunkeydokey" />;
root.render(element);
```

1. `<Welcome name="sunkeydokey" />` 엘리먼트를 저장한 변수 `element`가 `root.render()`를 호출한다.
2. React는 `{name: 'sunkeydokey}`를 props 객체로 하여 `Welcome` 컴포넌트를 호출한다.
3. `Welcome` 컴포넌트는 `props.name`으로 'sunkeydokey'를 받아 `<h1>Hello, sunkeydokey</h1>`엘리먼트를 반환한다.
4. ReactDOM은 DOM이 `<h1>Hello, sunkeydokey</h1>`엘리먼트와 일치하도록 업데이트한다.

# 컴포넌트 합성

컴포넌트는 자신의 출력에 다른 컴포넌트를 참조할 수 있어 모든 세부 단계에서 동일한 추상 컴포넌트를 사용할 수 있다.

# 컴포넌트 추출

컴포넌트를 추출하면 개별적으로 재사용할 수 있고, 변경이 쉬워진다.

```JS
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

```JS
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

Avatar 컴포넌트는 Comment 내에서 렌더링되는 것을 알 필요가 없다.  
그래서 props의 이름을 author가 아닌 user로 변경한다.  
React 공식문서는 props의 이름은 컴포넌트 자체의 관점에서 짓는 것을 권장한다.

```JS
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

Comment 컴포넌트가 조금은 단순해졌다.

```JS
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```

Avatar 컴포넌트의 부모 div로 UserInfo 컴포넌트를 추출한다.

```JS
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

Comment 컴포넌트가 상당히 단순해졌다.  
<br/>

재사용 가능한 컴포넌트를 만들면 후에 더 큰 규모의 앱을 작업할 때 효과를 볼 수 있다. 여러 번 사용되는 UI나 자체적으로 복잡한 UI는 별도의 컴포넌트로 만드는 것이 좋다.

# props는 읽기 전용입니다.

컴포넌트는 절대로 컴포넌트의 자체 props를 수정해서는 안 된다. 모든 React 컴포넌트는 자신의 props를 다룰 때 순수 함수처럼 동작해야 한다.
