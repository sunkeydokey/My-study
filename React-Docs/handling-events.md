[이벤트 처리하기](https://ko.reactjs.org/docs/handling-events.html)

# React 엘리먼트의 이벤트 처리 방식

React 엘리먼트에서의 이벤트 처리방식은 DOM 엘리먼트에서의 방식과 유사하다. 다만

- React는 camelCase를 사용한다.
- JSX를 통해 문자열이 아닌 함수로 이벤트핸들러를 전달한다.
- 기본 동작을 방지할 때 preventDefault를 명시적으로 호출해야 한다.

```HTML
<button onclick="eventhandler()">
  Action
</button>
```

HTML

```JS
const eventhandler = () => {};

return (
    <button onClick={eventhandler}>
      Action
    </button>
)
```

React

# this

ON, OFF 상태를 토글할 수 있는 컴포넌트

```JS
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

JS에서 클래스 메서드는 바인딩되어 있지 않다. bind없이 onClick에 handleClick을 전달하면 this는 undefined가 된다. `onClick={this.handleClick}`과 같이 뒤에 ()를 사용하지 않고 메서드를 참조할 경우, 해당 메서드를 바인딩 해야 한다.

```JS
class LoggingButton extends React.Component {
  // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
  // 주의: 이 문법은 *실험적인* 문법입니다.
  handleClick = () => {
    console.log('this is:', this);
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

bind 호출을 원치 않는다면 퍼블릭 클래스 문법을 사용하거나,

```JS
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

콜백에 화살표함수를 사용하는 방법이 있다.<br/>

하지만 이 문법은 LoggingButton 컴포넌트가 렌더링될 때마다 다른 콜백이 생성된다. 콜백이 props로 전달되는 경우 하위 컴포넌트들이 추가로 렌더링을 수행하면서 성능 문제가 생길 수 있다. 그래서 생성자 안에서 바인딩하거나 퍼블릭 클래스 문법을 사용하는 것을 권장한다.

# 이벤트 핸들러에 인자 전달하기

루프 내부에서는 이벤트 핸들러에 추가적인 매개변수를 전달하는 것이 일반적이다.
