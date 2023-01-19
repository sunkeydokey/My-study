[State and Lifecycle](https://ko.reactjs.org/docs/state-and-lifecycle.html)

# State and Lifecycle

# 함수에서 클래스로 변환하기

```JS
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  root.render(<Clock date={new Date()} />);
}

setInterval(tick, 1000);
```

# 클래스에 로컬 State 추가하기

```JS
    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
```

`render()` 메서드의 this.props.date 를 `this.state.date`로 수정

```JS
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
```

초기 `this.state`를 지정하는 `constructor` 추가 <br/>

클래스 컴포넌트는 항상 `props`로 기본 constructor를 호출해야 한다.

```JS
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);
```

`date` prop 제거

# 생명주기 메서드를 클래스에 추가하기

컴포넌트가 삭제될 때 해당 컴포넌트가 사용 중이던 리소스를 확보해야 한다.

```JS
  componentDidMount() {
  }

  componentWillUnmount() {
  }
```

- `componentDidMount`: Clock이 처음 DOM에 렌더링될 때 마다 타이머를 설정한다.
- `componentWillUnmount`: Clock에 의해 생성된 DOM이 삭제될 때마다 타이머를 해제한다.

```JS
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
```

`componentDidMount`는 컴포넌트 출력물이 DOM에 렌더링된 후에 실행된다.

```JS
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
```

생명주기 메서드 안에 있는 타이머를 분해한다.

```JS
  tick() {
    this.setState({
      date: new Date()
    });
  }
```

```JS
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);
```

1. `<Clock />` 컴포넌트가 `root.render()`로 전달
2. React가 Clock 컴포넌트의 생성자 호출
3. `Clock`이 현재 시각을 표시해야 하기 때문에 현재 시각이 포함된 객체로 this.state를 초기화
4. React가 Clock의 `render()`메서드 호출
5. React가 화면에 표시될 내용을 알게 되어 DOM과 Clock의 rendering 출력값을 일치시키기 위해 DOM업데이트
6. Clock 출력값이 DOM에 삽입되면 React가 생명주기 메서드를 호출. 그 안에서 Clock 컴포넌트는 매 초마다 `tick()` 메서드를 호출하기 위한 타이머를 설정하도록 브라우저에 요청
7. 매 초 브라우저가 `tick()`메서드 호출 그 안에서 Clock 컴포넌트는 setState()에 현재 시각을 포함하는 객체를 호출하면서 UI업데이트를 진행.
8. setState() 호출로 인해 React는 state의 변경을 인지하고 render()를 다시 호출하여 화면에 표시될 내용을 검사
9. this.state.date가 달라졌기 때문에 DOM업데이트
10. Clock 컴포넌트가 한번이라도 삭제된 적이 있다면 React는 타이머를 멈추기 위해 `componentWillUnmount()`호출

# State를 올바르게 사용하기

## 직접 State를 수정하지 마세요

this.state를 지정할 수 있는 유일한 공가는 constructor 내부이다.  
state의 값을 수정하려면 setState()를 사용한다.

## State 업데이트는 비동기적일 수 있다

React는 성능을 위해 여러 setState() 호출을 단일 업데이트로 한꺼번에 처리할 수 있다. <br/>

this.props와 this.state가 비동기적으로 업데이트될 수 있어 다음 state를 계산할 때 해당 값에 의존해서는 안 된다.

## State 업데이트는 병합됩니다

setState()를 호출하면 React는 제공한 객체를 현재 state로 병합한다.

```JS
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
```

state는 다양한 독립적인 변수를 포함할 수 있다.  
병합은 얕게 이루어지기 때문에 `this.setState({comments: ~~~})`는 this.state.posts에 영향을 주진 않으나, `this.state.comments`는 완전히 대체된다.

# 데이터는 아래로 흐릅니다

컴포넌트는 자신의 state를 자식 컴포넌트에 props로 전달할 수 있다.

```JS
<Child name={this.state.name} />
```

`Child` 컴포넌트는 name을 자신의 props로 받는다. Child는 이 name 이 어디서 왔는지 알지 못한다.  
<br/>

일반적으로 이를 `하향식` 또는 `단방향식` 데이터 흐름이라고 한다. 모든 state는 항상 특정 컴포넌트가 소유하고 그 state로부터 파생된 UI 또는 데이터는 트리 구조에서 자신 아래의 컴포넌트에만 영향을 미친다.
