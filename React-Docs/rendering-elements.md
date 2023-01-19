[엘리먼트 렌더링](https://ko.reactjs.org/docs/rendering-elements.html)

# 엘리먼트 렌더링

엘리먼트는 React 앱의 가장 작은 단위이며 화면에 표시할 내용을 기술한다.  
브라우저의 DOM 엘리먼트와 달리 React 엘리먼트는 일반 객체이며 쉽게 생성할 수 있다. ReactDOM은 React 엘리먼트와 일치하도록 DOM을 업데이트한다.

# DOM에 엘리먼트 렌더링하기

```HTML
<div id="root"></div>
```

위의 div 안에 들어가는 모든 엘리먼트를 React DOM에서 관리한다. 따라서 이 노드를 루트 DOM노드라고 부른다.  
React로 구현된 애플리케이션은 일반적으로 하나의 루트 DOM노드가 있다.  
React엘리먼트를 렌더링하기 위해서는 우선 DOM 엘리먼트를 `ReactDOM.createRoot()`에 전달한 후 React 엘리먼트를 `root.render()`에 전달해야 한다.

```JS
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const element = <h1>Hello, world</h1>;
root.render(element);
```

# 렌더링 된 엘리먼트 업데이트하기

React 엘리먼트는 불변객체로 생성 이후에 해당 엘리먼트의 자식이나 어트리뷰트를 변경할 수 없다.  
UI를 업데이트하기 위해서는 새 엘리먼트를 생성하여 이를 `root.render()`로 전달해야 한다.

```JS
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
```

위 코드는 setInterval의 콜백으로 tick함수를 둠으로써 `root.render()`를 호출해 매 초마다 시간을 업데이트한다.

# 변경된 부분만 업데이트하기

React DOM은 해당 엘리먼트와 그 자식 엘리먼트를 이전과 비교하고 필요한 경우에만 DOM을 업데이트한다. 위의 코드에서 `root.render()`를 1초마다 호출하지만 개발자 도구를 통해 보면 시간을 나타내는 h2 요소만 업데이트되는 것을 확인할 수 있다.
