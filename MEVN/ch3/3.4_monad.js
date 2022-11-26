const parsingJson = JSON.parse;
const temperature = (k) => k.temp;
const concatenateedFunc = (x) => new Promise((resolve, reject) => resolve(x)).then(parsingJson).then(temperature);

const log = (x) => console.log(x);

concatenateedFunc('{temp:36.5')
  .catch((_) => 'JSON PARSE is not working')
  .then(log);
