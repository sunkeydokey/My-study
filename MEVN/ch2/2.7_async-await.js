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

// then 으로 하는 에러핸들링 1
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
      console.log(`${reason}로 인한 Promise 종료.`);
    }
  ); //에러로 인한 Promise 종료.

// then 으로 하는 에러핸들링 2
const async3 = (param) => {
  return new Promise((resolve, reject) => {
    resolve(param * 2);
  });
};

const async4 = (param) => {
  return new Promise((resolve, reject) => {
    resolve(param * 2);
  });
};

async3(1)
  .then(async4)
  .then(
    (result) => {
      throw '에러';
      console.log(result);
    },
    (reason) => {
      console.log(`${reason}로 인한 Promise 종료.`);
    }
  ); //[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "에러".]

// catch로 하는 에러핸들링

const async5 = (param) => {
  return new Promise((resolve, reject) => {
    resolve(param * 2);
  });
};

const async6 = (param) => {
  return new Promise((resolve, reject) => {
    resolve(param * 2);
  });
};

async5(1)
  .then(async6)
  .then((result) => {
    throw '에러';
    console.log(result);
  })
  .catch((reason) => {
    console.log(`${reason}로 인한 Promise 종료.`);
  })
  .finally(() => {
    console.log('Promise 이후에 무조건 실행되는 로직.');
  });

// 여러가지 Promise를 한 번에 해결하는 Promise.all
const async7 = (message, ret) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      console.log(new Date());
      resolve(ret);
    }, 2000);
  });
};

const promises = [async7('비동기함수 1 호출', 1), async7('비동기함수 2 호출', 2)];
Promise.all(promises).then((data) => {
  console.log(data);
});
/*
비동기함수 1 호출
2022-11-04T13:39:28.027Z
비동기함수 2 호출
2022-11-04T13:39:28.028Z
[ 1, 2 ]
*/
