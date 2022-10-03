# Hyperlink

HyperText 의 Hyper는 정보가 다중으로 연결되어 있는 상태를 의미한다.<br>
hyperlink를 통해 기존 문서나 텍스트의 선형성, 고정성의 제약에서 벗어나 사용자가 원하는 대로 정보를 건너뛰어 읽을 수 있다.<br>
a(anchor) 태그를 통해 hyperlink를 생성할 수 있다.
```
<!DOCTYPE html>
<html>
  <body>
    <a href="https://github.com/sunkeydokey">Visit my github.</a>
  </body>
</html>
```
[Visit my github.](https://github.com/sunkeydokey)

## 1. href 어트리뷰트
href 어트리뷰트의 값을 통해 이동하고자 하는 경로를 지정할 수 있다. href 어트리뷰트에 사용 가능한 값은 다음과 같다.
- 절대 URL : 웹사이트 URL
- 상대 URL : 자신의 위치를 기준으로 한 대상의 URL
- fragment identifier : 페이지 내의 특정 id를 갖는 요소의 링크
- 메일 
- script

## 2. target 어트리뷰트
링크를 클릭했을 때 윈도우를 어떻게 열 지 지정한다.
- _self : 현재 윈도우에서 연결문서를 연다. (default)
- _blank : 새 탭이나 새 창에서 연결문서를 연다.

# List (목록)
네비게이션 메뉴를 만들 때 자주 사용한다.

# 1. Unordered List (ul)
```html
<!DOCTYPE html>
<html>
  <body>
    <ul>
      <li>Unordered 1</li>
      <li>Unordered 2</li>
      <li>Unordered 3</li>
    </ul>
  </body>
</html>
```
- Unordered 1
- Unordered 2
- Unordered 3

# 2. Ordered List (ol)
```html
<!DOCTYPE html>
<html>
  <body>
    <ol>
      <li>ordered 1</li>
      <li>ordered 2</li>
      <li>ordered 3</li>
    </ol>
  </body>
</html>
```
1. ordered 1
2. ordered 2
3. ordered 3

# 3. Attributes
- type : 순서를 나타내는 문자타입을 지정할 수 있다.
    - “1” :	숫자 (기본값)
    - “A” :	대문자 알파벳
    - “a” :	소문자 알파벳
    - “I” :	대문자 로마숫자
    - “i” :	소문자 로마숫자
- start : 리스트의 시작값을 지정할 수 있다.
- reversed : 순서값을 역으로 표현한다.

# 테이블
표를 만들 수 있다. 과거에는 테이블 태그를 통해 레이아웃을 구성하였으나 모던웹에서는 div를 통해 레이아웃을 구성한다.

- table	: 표를 감싸는 태그
- tr : 표 내부의 행 (table row)
- th :행 내부의 제목 셀 (table heading)
- td : 행 내부의 일반 셀 (table data)

```html
<!DOCTYPE html>
<html>
  <body>
    <table>
      <tr>
        <th>col_1</th>
        <th>col_2</th>
        <th>col_3</th>
      </tr>
      <tr>
        <td>row_1, col_1</td>
        <td>row_1, col_2</td>
        <td>row_1, col_3</td>
      </tr>
      <tr>
        <td>row_2, col_1</td>
        <td>row_2, col_2</td>
        <td>row_2, col_3</td>
      </tr>
      <tr>
        <td>row_3, col_1</td>
        <td>row_3, col_2</td>
        <td>row_3, col_3</td>
      </tr>
    </table>
  </body>
</html>
```
col_1 | col_2 | col_3
---|:---:|---:
row_1, col_1 | row_1, col_2 | row_1, col_3
row_2, col_1 | row_2, col_2 | row_2, col_3
row_3, col_1 | row_3, col_2 | row_3, col_3

## Attributes
- border : 표 테두리 두께 (CSS border property를 사용하는 것이 더 나은 방법이다.)
- rowspan	: 해당 셀이 점유하는 행의 수 지정
- colspan	: 해당 셀이 점유하는 열의 수 지정
