const { map, filter, pipe, values, go } = require('fxjs');
const L = require('fxjs');
const streamers = [
  {
    name: '김계란',
    platform: '유튜브',
  },
  {
    name: '동수칸',
    platform: '트위치',
  },
  {
    name: '꽈뚜룹',
    platform: '유튜브',
  },
  {
    name: '쫀득이',
    platform: '트위치',
  },
];

const t = streamers.map((e) => (e.platform === '트위치' ? e : null)).filter((e) => e);

const prop = (key) => (obj) => obj[key];
const propEqual = (value) => (key) => (obj) => prop(key)(obj) === value;
console.log(t); // [ { name: '동수칸', platform: '트위치' }, { name: '쫀득이', platform: '트위치' } ]

const t2 = go(streamers, L.filter(propEqual('트위치')('platform')), L.takeAll);
console.log(t2); // [ { name: '동수칸', platform: '트위치' }, { name: '쫀득이', platform: '트위치' } ]
