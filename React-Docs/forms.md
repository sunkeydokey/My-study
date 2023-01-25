[폼](https://ko.reactjs.org/docs/forms.html)

# 제어 컴포넌트 (Controlled Component)

HTML의 폼 엘리먼트들은 사용자의 입력을 기반으로 자신의 상태를 관리한다. 반면 React는 state에 의해 유지되고 `setState()`를 통해 업데이트 된다.  
폼 엘리먼트를 제어 컴포넌트로 만들어 React 의 state가 `신뢰가능한 단일 출처`가 되면 두 요소를 결합할 수 있다.  
`value` 어트리뷰트를 React 컴포넌트의 state에서 설정한 value 값으로 두고 setState를 통해 입력값으로 업데이트하면 폼 엘리먼트의 value 는 항상 React의 state에 의해 제어된다.

# textarea 태그

HTML의 `<textarea>` 엘리먼트는 내부의 텍스트를 자식으로 정의한다. React는 대신 value 어트리뷰트를 사용해 다른 폼 엘리먼트를 사용할 때와 유사하게 작성할 수 있다.

# select 태그

React에서는 selected 어트리뷰트를 사용하지 않고 최상단 select 태그에 value 어트리뷰트를 사용해 선택될 드롭다운을 지정할 수 있다.

# file input 태그

읽기 전용이기 때문에 React에서는 비제어 컴포넌트이다.
