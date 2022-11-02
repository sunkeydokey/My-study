// 큐(queue) : 선입선출의 자료구조

class Queue {
  constructor() {
    this.e = [];
  }
  front() {
    if (this.e.length === 0) {
      console.log('empty.');
      return;
    } else return this.e[0];
  }
  enqueue(value) {
    this.e.push(value);
  }
  dequeue() {
    if (this.e.length === 0) {
      console.log('empty');
      return;
    }
    this.e.shift();
  }
}
const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

for (let i = 0; i < 4; i++) {
  console.log(q.front());
  q.dequeue();
}
