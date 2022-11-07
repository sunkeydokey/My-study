const target = {
  first: 1,
  outer: {
    inner: 2,
  },
};
let copy = JSON.parse(JSON.stringify(target));
copy.outer.inner = 5;
console.log(target); // { first: 1, outer: { inner: 2 } }

const profile = {
  name: 'sunkeydokey',
  height: 181,
  weight: 71,
};

const strFilter = (key, value) => {
  return typeof value === 'string' ? undefined : value;
};

const result = JSON.stringify(profile, strFilter, 3);
console.log(result);
/*
{
   "height": 181,
   "weight": 71
}
*/

let jsonExample = '{"name": "sun"}';
console.log(typeof jsonExample);
console.log(jsonExample.name);
jsonExample = JSON.parse(jsonExample);
console.log(jsonExample);
console.log(jsonExample.name);
