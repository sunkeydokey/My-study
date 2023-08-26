function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 가장 작은 원소의 인덱스
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        // i 다음 원소들을 검사하며 arr[i]보다 작은 원소가 있다면 minIndex 교체
        minIndex = j;
      }
    }
    // 교체
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}
arr = [
  3, 4, 34, 23, 32, 32, 3, 34, 45, 45, 34, 24, 23, 23, 21, 3, 35, 436, 4564,
  5534,
];
selectionSort(arr);
console.log(arr);
[
  3, 3, 3, 4, 21, 23, 23, 23, 24, 32, 32, 34, 34, 34, 35, 45, 45, 436, 4564,
  5534,
];
