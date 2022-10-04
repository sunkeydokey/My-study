# css selector

## 1. Intro
CSS는 HTML 요소의 style을 정의하기 때문에 style을 적용하고자 하는 HTML 요소를 특정할 필요가 있다.<br>
selector를 통해 style을 적용하고자 하는 HTML요소를 특정하고 선언블럭 내의 프로퍼티와 값으로 스타일을 정의한다.
```css
h1 {
    color: red;
    font-size: 12px;
}
```
, 를 통해 복수의 요소를 지정할 수 있다.
```css
h1, h2 {
    color: red;
    font-size: 12px;
}
```

## 2. 요소를 지정하는 여러 방법들
- `*` : 전체 셀렉터 (Universal Selector). HTML문서 내의 모든 요소를 선택한다. (head 포함)
- `<tag>` : 태그 셀렉터 (Type Selector). 지정된 태그명을 가지는 요소를 선택한다.
- `#id` : ID 셀렉터 (ID Selector). id 어트리뷰트 값을 지정하여 일치하는 요소를 선택한다.
- `.class` : 클래스 셀렉터 (Class Selector). class 어트리뷰트 값을 지정하여 일치하는 요소를 선택한다.

## 3. 어트리뷰트 셀렉터
- `selector[Attribute]` : 지정된 어트리뷰트를 갖는 요소 모두를 선택한다.
- `selector[Attribute=”value”]` : 지정된 값과 어트리뷰트가 일치하는 요소 모두를 선택한다.
- `selector[Attribute~=”value”]` : 어트리뷰트의 값이 지정된 값을 공백으로 분리된 단어로 포함하는 요소를 선택한다.
- `selector[Attribute|=”value”]` : 지정된 어트리뷰트의 값과 일치하거나 지정 어트리뷰트 값 뒤 연이은 하이픈(“value-“)으로 시작하는 요소를 선택한다.
- `selector[Attribute^=”value”]` : 지정된 어트리뷰트 값으로 시작하는 요소를 선택한다.
- `selector[Attribute$=”value”]` : 지정된 어트리뷰트 값으로 끝나는 요소를 선택한다.
- `selector[Attribute*=”value”]` : 	지정된 어트리뷰트 값을 포함하는 요소를 선택한다.

## 4. 복합 셀렉터
- `후손 셀렉터 (Descendant Combinator)` : 공백을 통해 자손 요소를 선택할 수 있다.
```css 
/* div 요소의 후손요소 중 p 요소를 선택 */
div p {
    color:red;
    }
```
- `자식 셀렉터 (Child Combinator)` : 1 level 하위에 속하는 요소 중 일치하는 요소를 선택할 수 있다.
```css 
/* div 요소의 자식요소 중 p 요소를 선택 */
div > p {
    color:red;
    }
```
- `형제(동위) 셀렉터 (Sibling Combinator)` : 형제관계에서 뒤에 위치하는 요소를 선택할 때 사용한다.
```css 
/* h1 요소의 형제요소 중 p 요소를 선택 */
h1 ~ p {
    color:red;
    }
```
- `인접 형제 셀렉터(Adjacent Sibling Combinator)` : 형제 요소 중 바로 뒤에 위치하는 요소를 선택한다. 사이에 다른 요소가 존재하면 선택되지 않는다.
```css 
/* h1 요소의 형제요소 중 바로 뒤에 오는 p 요소를 선택 */
h1 + p {
    color:red;
    }
```
- `일반 형제 셀렉터(General Sibling Combinator)` : 형제 요소 중 뒤에 위치하는 요소를 모두 선택한다.
```css 
/* h1 요소의 형제요소 중 뒤에 오는 p 요소를 모두 선택 */
h1 + p {
    color:red;
    }
```

## 5. 가상클래스 셀렉터 (Pseudo-Class Selector)
`마우스가 올라와 있을 때`, `링크를 방문했을 때와 방문하지 않았을 때`, `포커스가 들어와 있을 때` 등 특정 상태일 때의 스타일을 정의할 때 사용한다. 이러한 상태에서는 원래 클래스가 존재하지 않지만 가상클래스를 임의로 지정하여 선택하는 방법이다. `:`을 사용하고, css표준에 의해 미리 정의된 이름이 있다.

### 5.1 링크 셀렉터(Link pseudo-classes), 동적 셀렉터(User action pseudo-classes)
- `:link` : 셀렉터가 방문하지 않은 링크일 때
- `:visited` : 셀렉터가 방문한 링크일 때
- `:hover` : 셀렉터에 마우스가 올라와 있을 때
- `:active` : 셀렉터가 클릭된 상태일 때
- `:focus` : 셀렉터에 포커스가 들어와 있을 때

### 5.2 UI 요소 상태 셀렉터(UI element states pseudo-classes)
- `:checked` : 셀렉터가 체크 상태일 때
- `:enabled` : 셀렉터가 사용 가능한 상태일 때
- `:disabled` : 셀렉터가 사용 불가능한 상태일 때

### 5.3 구조 가상 클래스 셀렉터(Structural pseudo-classes)
- `:first-child` : 셀렉터에 해당하는 모든 요소 중 첫번째 자식인 요소를 선택한다.
- `:last-child` : 셀렉터에 해당하는 모든 요소 중 마지막 자식인 요소를 선택한다.
- `:nth-child(n)` : 셀렉터에 해당하는 모든 요소 중 앞에서 n번째 자식인 요소를 선택한다.
- `:nth-last-child(n)` : 셀렉터에 해당하는 모든 요소 중 뒤에서 n번째 자식인 요소를 선택한다.
- `:first-of-type` : 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 첫번째 등장하는 요소를 선택한다.
- `:last-of-type` : 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 마지막에 등장하는 요소를 선택한다.
- `:nth-of-type(n)`	: 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 앞에서 n번째에 등장하는 요소를 선택한다.
- `:nth-last-of-type(n)` : 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 뒤에서 n번째에 등장하는 요소를 선택한다.

### 5.4 부정 셀렉터(Negation pseudo-class)
`:not(셀렉터)` : 셀렉터에 해당하지 않는 모든 요소를 선택한다.

### 5.5 정합성 체크 셀렉터(validity pseudo-class)
- `:valid(셀렉터)` : 정합성 검증이 성공한 input 요소 또는 form 요소를 선택한다.
- `:invalid(셀렉터)` : 정합성 검증이 실패한 input 요소 또는 form 요소를 선택한다.

## 6. 가상 요소 셀렉터 (Pseudo-Element Selector)
`콘텐츠의 첫 글자 또는 첫 줄`, `콘텐츠의 앞 또는 뒤` 등 요소의 특정 부분에 스타일을 적용하기 위하여 사용된다. `::` 을 사용하고, css표준에 의해 미리 정의된 이름이 있다.
- `::first-letter` : 콘텐츠의 첫글자를 선택한다.
- `::first-line` : 콘텐츠의 첫줄을 선택한다. 블록 요소에만 적용할 수 있다.
- `::after`	콘텐츠의 뒤에 위치하는 공간을 선택한다. 일반적으로 content 프로퍼티와 함께 사용된다.
- `::before` : 콘텐츠의 앞에 위치하는 공간을 선택한다. 일반적으로 content 프로퍼티와 함께 사용된다.
- `::selection` : 드래그한 콘텐츠를 선택한다. iOS Safari 등 일부 브라우저에서 동작하지 않는다.