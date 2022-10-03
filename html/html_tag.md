# 웹페이지를 구성하는 기본 태그

## 1. 문서 형식 정의 tag
문서 형식 정의 (Doctype definition) 태그는 출력할 웹페이지 형식을 브라우저에 전달한다.문서의 최상위에 위치해야 하며 대소문자의 구별이 없다.<br>

`HTML5` 에서는 다음과 같이 정의한다.
```html
<!DOCTYPE html>
```

## 2. html tag
html 태그는 모든 HTML 요소의 부모요소이며 웹페이지에 단 하나만 존재한다. `<!Doctype>`을 제외한 모든 요소는 html요소의 자식 요소이므로 html요소 내부에 기술해야 한다.

## 3. head tag
head 요소는 메타데이터를 포함하기 위한 요소로 웹페이지에 단 하나만 존재한다. 메타데이터란 HTML문서의 title, style, link, script에 대한 정보로 화면에는 표시되지 않는다.

### 3.1 title tag
문서의 제목을 정의한다. 정의된 제목은 브라우저 탭에 표시된다.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>문서 제목</title>
  </head>
  <body>
  </body>
</html>
```

### 3.2 style tag
HTML문서의 style 정보를 정의한다.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>문서 제목</title>
    <style>
        body {
            background-color: yellow;
            color: blue;
        }
    </style>
  </head>
  <body>
  </body>
</html>
```

### 3.3 link tag
외부 리소스와의 연계를 정의한다. 주로 외부 CSS파일 연계에 사용된다.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>문서 제목</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
  </body>
</html>
```

### 3.4 script tag
클라이언트 사이드 자바스크립트를 정의한다.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script>
      document.addEventListener('click', function () {
        alert('Clicked!');
      });
    </script>
  </head>
  <body>
  </body>
</html>
```
src 어트리뷰트를 통해 외부 자바스크립트 파일을 연계할 수 있다.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script src="script.js"></script>
  </head>
  <body>
  </body>
</html>
```

### 3.5 meta tag
description, keywords, author, 기타 메타 데이터 정의에 사용된다.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="keywords" content="SEO, 검색엔진, 최적화를, 위해서, 검색엔진이, 사용할, keyword, 정의">
    <meta name="description" content="웹페이지의 설명을 정의한다.">
    <meta name="author" content="author 웹페이지의 저자를 작성한다.">
  </head>
  <body>
  </body>
</html>
```

## 4. body tag
HTML문서의 내용을 나타내며 웹페이지에 단 하나만 존재한다. 메타데이터를 제외한 웹페이지를 구성하는 대부분의 요소가 작성된다.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <h1>웹페이지 문서의 제목</h1>
    <p>문단</p>
  </body>
</html>
```

# 텍스트 관련 태그

## 1. 제목 (Headings)
제목을 나타낼 때 사용하며 h1(가장 큼) 부터 h6(가장 작음)까지의 태그가 있다. 검색엔진이 제목 태그를 중요한 의미로 받아들일 가능성이 있어 제목 이외에는 사용하는 것이 좋다.
```html
<!DOCTYPE html>
<html>
  <body>
    <h1>제목 1</h1>
    <h2>제목 2</h2>
    <h3>제목 3</h3>
    <h4>제목 4</h4>
    <h5>제목 5</h5>
    <h6>제목 6</h6>
  </body>
</html>
```

## 2. 글자 형태 (Text Formatting)

### 2.1 볼드와 스트롱
`<b>` 태그와 `<strong>`태그로 감싼 문자는 볼드체가 된다. 효과는 같으나 stong이 b보다 더 시맨틱하므로 strong을 사용하는 것이 바람직하다.
```html
<!DOCTYPE html>
<html>
  <body>
    <b>단순 볼드체 지정</b>
    <strong>태그를 통해 강조한다는 의미를 알 수 있다.</strong>
  </body>
</html>
```
<b>단순 볼드체 지정</b><br>
<strong>태그를 통해 강조한다는 의미를 알 수 있다.</strong>

### 2.2 이탤릭체와 강조
`<i>` 태그와 `<em>`태그로 감싼 문자는 이탤릭체가 된다. em 이 i 보다 시맨틱하다.
```html
<!DOCTYPE html>
<html>
  <body>
    <i>단순 이탤릭체 지정</i>
    <em>em 은 emphasized(강조). 태그를 통해 강조함을 알 수 있다.</em>
  </body>
</html>
```
<i>단순 이탤릭체 지정</i><br>
<em>em 은 emphasized(강조). 태그를 통해 강조함을 알 수 있다.</em>

### 2.3 small
감싼 문자를 작아지게 한다.
```html
<!DOCTYPE html>
<html>
  <body>
    <h1>글자가 <small>작아</small> 진다.</h1>
  </body>
</html>
```
### 2.4 mark
문자를 하이라이팅한다.
```html
<!DOCTYPE html>
<html>
  <body>
    <p>문자가 <mark>하이라이팅</mark> 된다.</p>
  </body>
</html>
```

### 2.5 del
~~취소선~~을 만든다.
```html
<!DOCTYPE html>
<html>
  <body>
    <p>문자에 <del>취소선이</del> 생긴다.</p>
  </body>
</html>
```

### 2.6 ins
언더바를 만든다.
```html
<!DOCTYPE html>
<html>
  <body>
    <p>문자에 <ins>밑줄이</ins> 생긴다.</p>
  </body>
</html>
```

### 2.7 sub / sup
글자가 가라앉거나 (sub) 떠오른다(sup).
```html
<!DOCTYPE html>
<html>
  <body>
    <p>글자가 <sub>가라앉거</sub>나 <sup>떠오</sup>른다.</p>
  </body>
</html>
```

## 3. 본문 태그
- p : 단락을 지정한다.
- br : 강제 개행. 빈 요소이다. `&nbsp;`으로 연속 공백을 삽입할 수 있다.
- pre : 태그 내의 콘텐츠가 작성된 그대로 표시되게 한다.
- hr : 수평줄 삽입. 빈 요소이다.
- q : 짧은 인용문. 큰따옴표로 q 요소 내부의 콘텐츠를 감싼다.
- blockquote : 긴 인용문 블럭을 지정한다. css를 이용해 다양한 스타일을 적용할 수 있다.