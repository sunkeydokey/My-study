exports.greeting = (name) => `안녕하세요, ${name}입니다.`;
exports.answer = (name) => {
  console.log(this.greeting('수박'));
  return `${name}씨 반갑습니다.`;
};

exports.value = 1;
