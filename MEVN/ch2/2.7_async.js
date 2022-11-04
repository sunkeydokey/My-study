/* 자바스크립트에서의 비동기
Node.js, 브라우저와 같은 자바스크립트 실행환경은 싱글스레드이자 논블로킹한 성질을 가지며
I/O bound 작업(DB, 파일시스템, 네트워크 등을 다루는 작업) 등은 동기적으로 작업순서가 순차적으로 완료되지 않고 비동기적으로 일어난다.
*/

// ex) 1
const workA = () => {
  const randomTime = Math.random() * 100;
  setTimeout(() => {
    console.log('A done.');
  }, randomTime);
};

const workB = () => {
  const randomTime = Math.random() * 100;
  setTimeout(() => {
    console.log('B done.');
  }, randomTime);
};

const workC = () => {
  const randomTime = Math.random() * 100;
  setTimeout(() => {
    console.log('C done.');
  }, randomTime);
};

workA();
workB();
workC();

/*
  1st     2nd     3rd     4th
B done. A done. A done. C done.
A done. B done. C done. A done.
C done. C done. B done. B done.

setTimeout은 비동기적으로 작동되는 함수. 
따라서 호출은 순차적으로 되지만 호출순서와는 상관 없이 랜덤시간에 의해 작업이 완료되는 순서대로 출력된다.
*/

// ex) 2
console.log('Hello!');
setTimeout(function timeout() {
  console.log('async function 1 complete');
}, 1000);
setTimeout(function timeout() {
  console.log('async function 2 complete');
}, 1000);
console.log(`I'm sunkeydokey`);
/*
Hello!
I'm sunkeydokey
async function 1 complete
async function 2 complete

setTimeout은 콜스택에 쌓인 다음 바로 wep APIs의 백그라운드 공간으로 넘어간다.
이후 비동기적으로 완료되면 콜백큐에 쌓이고 이벤트 루프를 이용해 다시 콜스택에 쌓여 호출된다.
따라서 Hello!와 I'm sunkeydokey가 출력된 후에 async function 1 과 async function 2가 순차적으로 출력된다.
*/
