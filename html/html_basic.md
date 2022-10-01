# HTML
HTML(HyperText Markup Language) 은 웹페이지의 내용과 구조를 담당하는 마크업 언어(프로그래밍 언어가 아니다.)이다.<br>
HTML태그를 통해 브라우저 웹페이지의 구조를 알 수 있다.<br>
HTML은 요소(element)들로 구성되어 있다.

# HTML의 기본 구조
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>html문서의 제목</title>
  </head>
  <body>
    <h1>가장 큰 제목</h1>
    <h2>다음으로 큰 제목</h2>
    <h6>6까지 있다.</h6>
    <p>p는 paragraph(단락)</p>
  </body>
</html>
```

- HTML5 문서는 `<!DOCTYPE html>`로 시작하여 문서의 형식을 지정할 수 있다.
- 실질적인 문서의 시작은 2행인 `<html>`부터이며, `<html>`과 `</html>`사이에 작성한다.
- `<head>` 태그에는 문서 제목, 외부 파일 참조, 메타데이터의 설정 등을 작성하며, 이들은 브라우저에 표시되지 않는다.
- 그래서 웹브라우저에 출력되는 요소들은 `<body>`태그 안에 작성한다.

# HTML의 기본 문법
## 요소(Element)
HTML요소는 대개 시작 태그와 종료 태그, 그리고 그 사이의 콘텐츠로 구성된다.<br>
HTML문서는 요소들의 집합으로 이루어는 것이다.
```HTML
    <p>p 태그 사이의 콘텐츠1</p>
    <P>content2</P>    
```
태그는 대소문자를 구분하지 않는다.<br>
W3C: World Wide Web Consortium에서는 HTML4의 경우 소문자를 추천하고 있으므로 HTML5에서도 소문자를 사용하는 것이 일반적이라 한다.

### 요소의 중첩(Nested Element)
```html
    <div>
      <h1>요소의 중첩</h1>
      <ul>
        <li>div의 자식인 ul의 자식인 li 1</li>
        <li>div의 자식인 ul의 자식인 li 2</li>
      </ul>
    </div>
```
요소는 다른 요소를 포함할 수 있으며, 포함하게 되면 부자관계가 성립된다. 이러한 부자관계로 정보를 구조화할 수 있다.

### 빈 요소(Empty Element)
content를 가지지 않는 요소를 빈 요소(Empty element or Self-Closing element)라고 한다.<br>
이들은 content가 필요없으며, 속성(Attribute)만을 가진다.
```html
  <meta charset="utf-8">
```
대표적인 빈 요소는 다음과 같다.
- br
- hr
- img
- input
- link
- meta

### 블럭 레벨 요소와 인라인 요소
- 블럭 레벨 요소는 앞뒤 요소 사이에 새로운 줄을 만들고 표시된다. 일반적으로 웹페이지의 구조적 요소를 나타낼 때 사용된다. 그리고 블럭 레벨 요소는 인라인 요소 안에 중첩될 수 없으나, 다른 블럭 레벨 요소에 중첩될 수 있다.

- 인라인 요소는 항상 블럭 레벨 요소 안에 포함되어 있다. 인라인 요소는 문장, 단어처럼 작은 부분에 대해서 적용될 수 있다. 인라인 요소를 작성하면 작성한 단락 내에 나타난다.

## 어트리뷰트(Attribute)
어트리뷰트(속성)는 요소의 성질, 특징을 정의한다. 어트리뷰트(속성) 통해 요소에 추가적인 정보를 제공할 수 있다.<br>
어트리뷰트는 시작 태그에 위치하며(빈 요소의 경우 빈 요소 안에 넣는다.), 어트리뷰트명과 어트리뷰트값이 쌍을 이룬다.

```html
  <img src="image.jpg" width="50" height="50">
```
어트리뷰트의 값은 큰 따옴표나 작은 따옴표 안에 작성해야 한다.

### 글로벌 어트리뷰트
글로벌 어트리뷰트는 모든 HTML요소가 공통으로 사용할 수 있다.<br>
자주 사용되는 글로벌 어트리뷰트는 다음과 같다.
- id : 식별자(id)를 요소에 지정한다. 중복 지정해도 오류는 나지 않지만 고유한 id를 사용해야 한다.
- class : 스타일시트에 정의된 class를 요소에 지정한다. 중복 지정이 가능하다.
- hidden : 브라우저에 노출되지 않게 된다.
- lang : 지정된 요소의 언어. 검색엔진의 크롤링 시 웹페이지의 언어를 인식할 수 있게 한다.
- style : 요소에 인라인 스타일을 부여한다.
- tableindex : 사용자가 키보드로 페이지를 네비게이션 시 이동 순서를 지정한다.
- title : 요소에 관한 제목

# Reference

[MDN](https://developer.mozilla.org/ko/)<br>
[Poiemaweb](https://poiemaweb.com/)<br>
[TCPSchool](http://www.tcpschool.com/html/intro)
