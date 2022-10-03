# 입력양식 form 

## 1. form 태그
form 태그는 사용자가 입력한 데이터를 수집하기 위해 사용된다. form 태그는 input, textarea, button, select, checkbox, radio button, submit button 등의 입력 양식 태그를 포함할 수 있다. 회원가입이나 게시글 포스팅 등 무언가를 입력해서 서버로 전송하거나 상품 주문시 옵션을 선택하고 주소를 입력하고 주문버튼을 누르는 등의 모든 화면들이 입력 양식에 해당한다.

## 2. 입력 양식
입력 양식은 웹에서 사용자에게 정보를 입력 받을 때 사용하는 사용자 인터페이스(UI)를 말한다.

## 3. 동작 구조
form 태그를 통해 작성된 입력 양식은 최종적으로 입력 데이터를 서버로 전송해야 한다. 이때 어트리뷰트로 method와 action을 사용한다. method 어트리뷰트는 입력된 데이터를 전달하는 방법을 지정하고, action 어트리뷰트는 입력 받은 값을 전송할 서버의 프로그램 URL을 지정한다.
```html
<form action="데이터를 전송할 URL" method="전송방법. GET or POST">
  <input type="text"> 
  ...
</form>
```
## 4. GET vs POST
```
GET
    전송 URL에 입력 데이터를 쿼리스트링 형태로 전송한다.
    전송 URL 바로 뒤에 '?'를 통해 데이터의 시작을 알려주고, KEY=VALUE형태의 데이터를 추가한다.
    1개 이상의 전송 데이터는 &으로 구분한다.
    URL에 데이터가 모두 노출되어 보안상 문제가 있으며 최대 255자의 길이 제한이 있다.
    검색엔진에 검색 단어를 전송하는 것 같이 서버 프로그램을 호출할 때 파라미터 형태로 사용한다.
    REST API에서 GET 메소드는 모든 또는 특정 리소스의 조회를 요청한다.
```

```
POST
    Request Body에 담아 보내는 방식이다.
    URL에 전송 데이터가 모두 노출되지 않지만 GET에 비해 속도가 느리다.
    전송할 form데이터에 중요 정보나 개인 정보가 포함되어 있을 때 사용한다.
    크기 제한이 없어 많은 양의 데이터를 보낼 수 있다.
    파일전송은 multipart/form-data 로 전송해야 하며 일반적인 텍스트 데이터 전송과는 다르다.
    REST API에서 POST 메소드는 특정 리소스의 생성을 요청한다.
```

## 5. 입력 양식 태그
기본적으로는 input 태그를 사용하고 type 어트리뷰트로 다양한 입력 양식을 정의할 수 있다.

### 5.1 input 태그
```html
<input type="입력 양식 유형" name="입력값 이름" placeholder="설명">
```

가장 많이 사용하는 입력 양식 태그로 대부분의 입력 기능을 제공한다. form 태그 내에 존재하여야 입력 데이터를 전송할 수 있으나 ajax를 사용할 시에는 form 태그 내에 존재하지 않아도 된다. 어트리뷰트는 다음과 같다.
- type : 반드시 포함해야 한다. 입력 양식의 종류를 나타낸다.
    - text : 텍스트 입력 필드
    - password : 비밀번호 입력필드
    - checkbox : 복수 선택 가능한 체크 박스
    - radio : 복수 선택 불가능한 라디오 버튼 생성
    - submit : 입력양식을 서버로 전송하기 위한 버튼
    - reset : 리셋 버튼
    - button : 일반 버튼
    - color, date, datetime, email...etc.
- name : 입력값에 붙이는 이름. 서버에 name 어트리뷰트를 키로, value 어트리뷰트를 값으로하여 key=value의 형태로 전송된다.
```html
<input type="text" name="userid">
<input type="password" name="pw">
```

### 5.2 select 태그
드롭다운 목록을 제공하는 태그로 화면 공간을 절약할 수 있다. 여러 항목 중 하나 또는 여러개를 선택할 수 있도록 해준다. 데이터는 select 요소의 name 어트리뷰트를 키로, option 요소의 value 어트리뷰트를 값으로하여 key=value의 형태로 서버에 전송된다.
```html
<select name="lunchmenu">
    <option value ="한식" selected></option>
    <option value ="일식"></option>
    <option value ="중식">짜장면</option>
    <option value ="라면"></option>
    <option value ="도시락" disabled>도시락 먹지마</option>
</select>

<select multiple name="lunchmenu2" size="5">
    <option value ="한식" selected></option>
    <option value ="일식"></option>
    <option value ="중식">짜장면</option>
    <option value ="라면"></option>
    <option value ="도시락" disabled>도시락 먹지마</option>
</select>
```
- 입력항목들은 option 태그로 정의된다.
- value 어트리뷰트의 값으로 서버에 전송되지만 화면에 보여지는 컨텐츠는 따로 태그사이에 기술할 수 있다.
- 다중 선택을 위해서는 select multiple을 해주면 된다. 이 경우 Ctrl 키를 누른 채로 선택해야 다중 선택이 된다.

### 5.3 button 태그
클릭할 수 있는 버튼을 생성한다.
버튼의 생성만으로는 아무런 동작을 하지 않지만 자바스크립트를 연계해 별도의 이벤트 처리를 할 수 있다.
type 어트리뷰트는 반드시 지정하는 것이 바람직하고 어트리뷰트의 값으로 button, reset, submitdmf 지정할 수 있다. type 어트리뷰트를 지정하지 않는 경우 submit이 default이다.
`<input type="button">`과 유사하지만 input 태그는 빈 태그인 반면 button 태그는 그렇지 않다. 따라서 button 요소에는 텍스트나 이미지 같은 콘텐츠를 사용할 수 있다. CSS사용시 별도의 디자인 적용이 편리하다.

### 5.4 fieldset / legend
fieldset 태그는 관련된 입력 양식들을 그룹화할 때 사용한다. legend 태그는 fieldset 태그 내에서 사용되야 하며 그룹화된 fieldset의 제목을 정의한다.
```html
<fieldset>
  <legend>Login</legend>
  Username <input type="text" name="username">
  Password <input type="text" name="password">
</fieldset>
```