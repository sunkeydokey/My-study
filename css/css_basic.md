# CSS
## 개념
CSS(Cascading Style Sheets)는 HTML, XML같은 구조화된 문서를 어떻게 렌더링할 것인지를 정의하는 언어이다.<br>
CSS를 통해 요소들의 디자인이나 레이아웃을 정의하여 화면 등에 어떻게 렌더링할 것인지 브라우저에게 설명할 수 있다.<br>
한편 JavaScript와 연계해 동적인 콘텐츠 표현이나 디자인을 적용할 수 있다.<br>
HTML과 CSS는 별개의 언어이지만 HTML은 CSS를 포함할 수 있고, HTML없이 CSS만 있다면 아무런 의미가 없다.

## 중요성
웹문서의 내용과 상관없이 디자인만 변경하거나, 디자인을 그대로 두고 웹문서의 내용을 변경하는 데 용이하다.<br>
반응형 디자인을 통해 다양한 기기나, 화면 크기에 맞게 콘텐츠를 유동적으로 바꿀 수 있다.

# 기본 문법
## 셀렉터 (Selector, 선택자)
HTML 요소의 스타일을 정의하기 위해서는 스타일을 적용하고자 하는 `요소`를 선택해야 한다.<br>
셀렉터는 스타일을 적용하고자 하는 요소를 선택하기 위해 CSS에서 제공하는 수단인 것이다.
```css
h1 {
    color: red;
    font-size: 12px;
}
```
이는 Rule set이라 하며 셀렉터에 의해 선택된 요소를 렌더링할 방법을 브라우저에 지시한다.<br>
위의 Rule set은 셀렉터를 통해 HTML문서의 모든 h1요소를 선택하였다.<br>
<br>
이러한 Rule set 들의 집합을 스타일시트(Style sheet)라고 한다.

## 프로퍼티(Property / 속성)와 값(Value / 속성값)
```css
selector {
    Property: Value;
    Property: Value;
}
```
속성의 선언은 세미콜론`(;)`으로 끝내며 선언블럭 중괄호`({ })`로 묶는다.<br>
값에 공백이 있는 경우
```css
p {
  font-family: 'font with space';
}
```
와 같이 큰 따옴표 또는 작은 따옴표와 함께 선언한다.

# HTML에 CSS를 적용하는 방법
## HTML에서 외부에 있는 CSS파일을 로드하는 방법 (Linking Style Sheet)
```html
    <!DOCTYPE html>
    <html>
    <head>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <h1>링크를 통해 외부의 css파일을 로드하는 방법</h1>
        <p>가장 일반적이다</p>
    </body>
    </html>
```
## HTML 내부에 CSS를 포함시키는 방법 (Internal Style Sheet)
```html
    <!DOCTYPE html>
    <html>
    <head>
        <style>
        h1 { color: blue; }
        p  { background: green; }
        </style>
    </head>
    <body>
        <h1>HTML 내부에 CSS를 포함시키는 방법</h1>
        <p>다른 HTML 문서에 적용할 수 없다</p>
    </body>
    </html>
```

## HTML태그의 style 어트리뷰트에 CSS를 작성하는 방법 (Inline Style Sheet)
```html
    <!DOCTYPE html>
    <html>
    <body>
        <h1 style="color: blue">HTML태그의 style 어트리뷰트에 CSS를 작성하는 방법</h1>
        <p style="background: green">일관된 디자인 체계를 유지하기 어렵다. 재사용이 불가능하다.</p>
    </body>
    </html>
```

## 적용의 우선순위
`Inline Style Sheet` -> `Internal Style Sheet` -> `Linking Style Sheet`
Inline Style Sheet. 태그의 style어트리뷰트에 css를 작성하는 방법이 우선순위가 가장 높다.

# Cascading
cascading은 `위에서 아래로 흐르는`, `종속하는` 이란 의미를 가진다. <br>
이는 상위 요소에서 선언된 디자인 속성이 하위 요소에 상속되는 것을 의미한다.
```html
    <style>
    div { color: blue; }
    </style>
    <div>
        <p>LoremIpsum</p>
    </div>
```
css가 div 요소의 color 프로퍼티를 blue로 선언하면, color는 상속하는 속성이므로 자식 요소에도 적용된다.<br>
다만 border, padding 등 상속하지 않는 속성과, button처럼 상속을 받지 않는 속성도 있다.

# Reference

[codingfactory](https://www.codingfactory.net/)
[Poiemaweb](https://poiemaweb.com/)
[짧굵배](https://dinfree.com/)
