class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let idxOfParent = Math.floor((idx - 1) / 2);
      let parent = this.values[idxOfParent];
      if (element <= parent) break;
      this.values[idxOfParent] = element;
      this.values[idx] = parent;
      idx = idxOfParent;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let idxOfParent = Math.floor((idx - 1) / 2);
      let parent = this.values[idxOfParent];
      if (element >= parent) break;
      this.values[idxOfParent] = element;
      this.values[idx] = parent;
      idx = idxOfParent;
    }
  }
}

const heap = new MinBinaryHeap();
heap.insert(1);
heap.insert(4);
heap.insert(5);
heap.insert(32);
heap.insert(45);
heap.insert(37);
heap.insert(34);
heap.insert(14);
console.log(heap.values);
