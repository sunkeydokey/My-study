// ex) 1
const a = (c = 'naver') => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${c}!!!`);
    }, 1 * 1000);
  });
};

a()
  .then((ret) => {
    console.log(ret);
    return a('next is kakao');
  })
  .then((ret) => {
    console.log(ret);
  });
/*
naver!!!
next is kakao!!!
*/

// ex) 2
const workA = () => {
  return new Promise((resolve, reject) => {
    const randomTime = Math.random() * 100;
    setTimeout(() => {
      console.log('A done.');
      resolve('A');
    }, randomTime);
  });
};

const workB = () => {
  return new Promise((resolve, reject) => {
    const randomTime = Math.random() * 100;
    setTimeout(() => {
      console.log('B done.');
      resolve('B');
    }, randomTime);
  });
};

const workC = () => {
  return new Promise((resolve, reject) => {
    const randomTime = Math.random() * 100;
    setTimeout(() => {
      console.log('C done.');
      resolve('C');
    }, randomTime);
  });
};

// workA()
//   .then((ret) => workB())
//   .then((ret) => workC());

workA().then(workB).then(workC);
