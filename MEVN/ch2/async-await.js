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

const main = async () => {
  await workA();
  await workB();
  await workC();
};

main();

// await 을 통해 work A, B, C를 동기적으로 출력. await은 반드시 async안에 써야 하고 async는 Promise의 resolved 값을 반환.

// Promise를 활용한 에러핸들링
const beError = (word = 'banana') => {
  return new Promise((resolve, reject) => {
    throw new Error('에러');
    reject(new Error('에러'));
    reject('에러');
    setTimeout(() => {
      resolve(`Where is ${word}?`);
    }, 1 * 1000);
  });
};

beError()
  .then((ret) => {
    return beError('apple');
  })
  .then((ret) => {
    console.log(ret);
  })
  .catch((error) => {
    console.log(`${error} 발생!`);
  }); //Error: 에러 발생!

// then 으로 하는 에러핸들링
const async1 = (param) => {
  return new Promise((resolve, reject) => {
    resolve(param * 2);
  });
};

const async2 = (param) => {
  return new Promise((resolve, reject) => {
    throw '에러';
    resolve(param * 2);
  });
};

async1(1)
  .then(async2)
  .then(
    (result) => {
      console.log(result);
    },
    (reason) => {
      console.log(`${reason}으로 인한 Promise 종료.`);
    }
  );
