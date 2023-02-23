# 타입 가드

```html
<!-- html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script defer type="module" src="./src/main.ts"></script>
  </head>
  <body></body>
</html>
```

```ts
function logText(element: Element) {
  console.log(element.textContent);
}

const h1Element = document.querySelector('h1') as HTMLHeadingElement;
logText(h1Element);
```

> `TypeError: Cannot read properties of null (reading 'textContent')`

타입 단언을 통해 h1 엘리먼트를 찾게 하면 html문서에는 h1요소가 없기 때문에 에러메세지가 출력된다.

```ts
function logText(element: Element) {
  console.log(element.textContent);
}

const h1Element = document.querySelector('h1');
if (h1Element instanceof HTMLHeadingElement) {
  logText(h1Element);
}
```

if 문을 통해 h1 엘리먼트가 존재할 경우에만 h1 엘리먼트와 관련된 동작을 하도록 코드를 작성하면 에러가 발생하지 않는다.

```ts
function add(val: string | number) {
  let res = 'Result => ';
  if (typeof val === 'number') {
    res += val.toFixed(2);
  } else {
    res += val.toUpperCase();
  }

  console.log(res);
}

add(3.141592); // Result => 3.14
add('hello world'); // Result => HELLO WORLD
```

이렇게 조건문과 `instanceof` 또는 `typeof`를 사용하여 타입을 줄여나가는 것을 `타입가드` 라고 한다.
