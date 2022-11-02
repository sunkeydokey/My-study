function arrow() {
  setTimeout(() => {
    console.log('화살표 함수를 쓴 경우');
    console.log(this);
  }, 1000);
}

function notArrow() {
  setTimeout(function () {
    console.log('화살표 함수를 쓰지 않은 경우');
    console.log(this);
  }, 1000);
}

new notArrow();

new arrow();
