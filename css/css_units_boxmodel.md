# CSS 프로퍼티 값의 단위

## 1. 크기 단위
CSS에서 사용하는 대표적인 크기 단위로는 `px`, `em`, `%` 가 있다.<br>
px는 절대값이고 em, %는 상대값이다. 대부분의 브라우저의 폰트 사이즈 기본값은 16px, 1em, 100%이다.

### 1.1 px
픽셀(화소) 단위. 1px는 화소 1개 크기를 의미한다.<br>
픽셀은 디바이스 해상도에 따라 상대적인 크기를 갖는다. 이 때문에 픽셀을 기준으로 하는 단위는 명확할 수 없다. 따라서 대부분의 브라우저는 1 px을 1/96인치의 절대단위로 인식한다.<br>
px은 요소나 이미지의 크기 지정에 주로 사용된다.

## 1.2 %
%는 백분율 단위의 상대 단위이다. 상속이나 디폴트로 인해 요소에 지정된 사이즈에 상대적인 사이즈를 설정한다.

## 1.3 em
em은 배수 단위로 상대 단위이다. 폰트 사이즈 설정이나 콘텐츠를 포함하는 컨테이너의 크기 설정에 사용하면 상대적인 설정이 가능하다.

## 1.4 rem
em의 기준은 상속의 영향으로 바뀌는 반면, rem은 최상위 요소의 사이즈를 기준으로 삼는다. 브라우저의 기본 폰트 크기를 변경하더라도 이에 따라 웹사이트의 레이아웃을 적절히 조정할 수 있다. 따라서 콘텐츠의 크기에 따라 가변적으로 대응하여야 하는 wrapper 요소(container) 등에 적합하다.

## 1.5 Viewport 단위 (vh, vw, vmin vmax)
브라우저 창 크기를 기준으로 한 상대적 사이즈를 의미한다. %단위는 em과 같이 상속에 의해 부모 요소에 상대적 영향을 받는 반면, viewport는 창의 크기의 영향만 받는다.
IE 8 이하는 지원하지 않으며, IE9~11, Edge는 지원이 완전하지 않다.
- vw : viewport 너비의 1/100
- vh : viewport 높이의 1/100
- vmin : viewport 너비 또는 높이 중 작은 쪽의 1/100
- vmax : viewport 너비 또는 높이 중 큰 쪽의 1/100

## 2. 색상 표현 단위
색상을 지정하기 위해 키워드를 사용할 수 있다. 이 방법은 사용이 간편하지만 표현 가능한 색상의 수는 제한된다.
색상을 표현할 수 있는 키워드 리스트는 [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/#colorunits)에서 확인할 수 있다.<br>
더 다양한 색상의 표현을 위해서 HEX코드, RGB, RGBA 등의 단위를 사용할 수 있다. [참조](https://htmlcolorcodes.com/)

# 박스 모델
모든 HTML요소는 Box형태의 영역을 가진다.
Box는 콘텐트(Content), 패딩(Padding), 테두리(Border), 마진으로(Margin)로 구성된다.<br>
박스모델 관련 프로퍼티(margin, padding, border, box-sizing 등)는 상속되지 않는다.

## 1. width / height
콘텐츠 영역의 너비와 높이를 지정한다. 만일 width와 height로 지정한 콘텐츠 영역보다 실제 콘텐츠가 크면 콘텐츠 영역을 넘치게 된다. 이 경우 `overflow: hidden;`을 지정하면 넘친 콘텐츠를 감출 수 있다.

## 2. margin / padding
- margin : 테두리(Border) 바깥에 위치하는 요소의 외부 여백 영역
- padding : 테두리(Border) 안쪽에 위치하는 요소의 내부 여백 영역
<br>
content의 4개 방향(top, right, left, bottom)에 대하여 지정이 가능하다.

## 3. border

### 3.1 border-style
테두리 선의 스타일을 지정한다. 4개 방향에 대하여 따로 지정이 가능하다.<br>
[프로퍼티 값](https://developer.mozilla.org/ko/docs/Web/CSS/border-style)으로는 solid, dotted, dashed, double 등이 있다.

### 3.2 border-width
테두리의 두께를 지정한다. style과 마찬가지로 4개 방향에 대하여 따로 지정이 가능하다.<br>
[border-width 프로퍼티](https://developer.mozilla.org/ko/docs/Web/CSS/border-width)는 border-style과 함께 사용하지 않으면 적용되지 않는다.

### 3.3 border-color
테두리의 색상을 지정한다. 마찬가지로 4개 방향에 대하여 따로 지정이 가능하다.<br>
[border-color 프로퍼티](https://developer.mozilla.org/ko/docs/Web/CSS/border-color) 역시 border-style과 함께 사용하지 않으면 적용되지 않는다.

### 3.4 border-radius
테두리 모서리를 둥글게 표현하도록 정의한다. 값으로 길이를 나타내는 단위나 %를 사용한다.

### 3.5 border
```css
border: border-width border-style border-color;
```
와 같은 방식으로 테두리 두께, 선 스타일, 색상을 한번에 설정할 수 있따.

## 4. box-sizing
width, height 프로퍼티의 대상 영역을 변경할 수 있다.<br>
box의 크기는 기본적으로 콘텐츠 영역에 적용된다. 그러나 실제 박스의 크기는 border, margin, padding을 모두 더한 값이다.<br>
box-sizing 프로퍼티의 값을 border-box로 지정함으로써 마진을 내부의 박스를 width, height 프로퍼티의 대상 영역으로 지정할 수 있어서 박스 크기 계산을 편하게 한다.