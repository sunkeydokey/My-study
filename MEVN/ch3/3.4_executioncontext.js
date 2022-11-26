const logginThisArrow = () => {
  console.log(this);
};

logginThisArrow();

function logginThisDefine() {
  console.log(this);
}
logginThisDefine();

function Person() {
  this.age = 0;

  setTimeout(() => {
    this.age++;
    console.log(this, this.age);
  }, 1000);
}

var person = new Person();

function Person() {
  this.age = 0;

  setTimeout(function () {
    this.age++;
    console.log(this, this.age);
  }, 1000);
}

var person = new Person();

function add_(num1, num2, func) {
  return func(num1 + num2);
}

let user = {
  firstNumber: 2,
  secondNumber: 3,
  add() {
    console.log(this);
    add_(this.firstNumber, this.secondNumber, function (total) {
      console.log(this);
    });
  },
};

user.add();

function Person() {
  this.value = 'sunkeydokey';
  this.printThis = function () {
    console.log(this);
  };
}

var person = new Person();
var print = person.printThis;
person.printThis();
print();

function Person() {
  let age = 0;
  function up() {
    return ++age;
  }
  function down() {
    return --age;
  }
  return Object.freeze({
    up,
    down,
  });
}

const newPerson = new Person();
const firstResult = newPerson.up();
console.log(firstResult);
const secondResult = newPerson.up();
console.log(secondResult);

var obj = {
  value: 'hi',
  printThis: function () {
    console.log(this);
  },
};

var print = obj.printThis;
obj.printThis();
print();

function makeSentence(personName, personAction) {
  const sentence = [this.name, '는', this.action, '하고 있습니다.', personName, '도 함께 ', personAction, '합니다.'].join(' ');
  return sentence;
}

const sunkeydokey = {
  name: 'sunkeydokey',
  action: '공부',
};

console.log(makeSentence.apply(sunkeydokey, ['james', '독서']));
console.log(makeSentence.call(sunkeydokey, 'richard', '필기'));
