const objLevel1 = { first: 1 };
let a = { ...objLevel1 };
let b = Object.assign({}, objLevel1);

a.first = 3;
b.first = 3;
console.log(objLevel1); // { one: 1 }

const objLevel2 = {
  first: 1,
  second: {
    inner: 2,
  },
};

let c = { ...objLevel2 };
let d = Object.assign({}, objLevel2);
d.second.inner = 3;
console.log(objLevel2); // { first: 1, second: { inner: 3 } }
