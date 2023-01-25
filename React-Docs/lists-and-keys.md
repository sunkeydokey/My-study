[리스트와 Key](https://ko.reactjs.org/docs/lists-and-keys.html)

# 여러개의 컴포넌트 렌더링 하기

엘리먼트 집합을 만들고 중괄호를 통해 JSX에 포함시킬 수 있다.

```JS
const UnorderedList = () => {
  const dummyList = [1, 2, 3, 4, 5]

  const listItems = dummyList.map((item) =>
    <li>{item}</li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
```

이 코드는 리스트를 렌더링하지만 콘솔에 key에 관한 경고를 출력한다.

```JS
const UnorderedList = () => {
  const dummyList = [1, 2, 3, 4, 5]

  const listItems = dummyList.map((item) =>
    <li key={item.toString()}>{item}</li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
```

li 요소에 key를 할당하여 이를 해결할 수 있다.

# Key

Key는 React가 항목을 식별할 수 있도록 돕는다. 따라서 배열 내부의 엘리먼트에 key를 지정하여 고유성을 부여해야 한다.
<br/>
데이터의 ID를 사용하거나 고유하게 식별할 수 있는 문자열 등을 사용하는 것이 좋다.

# Key로 컴포넌트 추출하기

키는 주변 배열의 context에서만 의미가 있다. 따라서 배열 안에 key를 지정해야 한다.

# Key는 형제 사이에서만 고유한 값이어야 한다.

key는 배열 안에서만 고유하면 되고 전역에서 고유할 필요는 없다.<br/>
key는 힌트만 제공할 뿐 컴포넌트로 전달하지 않는다. 따라서 key와 동일한 값을 전달하려는 경우 다른 이름의 prop을 통해 명시적으로 전달해야 한다.

# JSX에 map() 포함시키기

JSX에서 중괄호 안에 모든 표현식을 포함시킬 수 있다. map() 함수도 마찬가지이다.

```JS
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}
```

다만 가독성을 위해 변수로 추출할지 인라인으로 넣을지 직접 판단해야한다.
