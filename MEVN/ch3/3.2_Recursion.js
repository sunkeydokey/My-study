const copy = (obj) => {
  let out = {};
  let value, key;
  for (key in obj) {
    value = obj[key];
    out[key] = typeof value === 'object' && value != null ? copy(value) : value;
  }
  return out;
};

const targetObject = {
  first: 1,
  outer: {
    inner: 2,
  },
};

let copiedTarget = copy(targetObject);
copiedTarget.outer.inner = 5;
console.log(targetObject); // { first: 1, outer: { inner: 2 } }
