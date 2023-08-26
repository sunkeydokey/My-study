function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      // 인덱스 j부터 1까지 감소하며 반복
      if (arr[j] < arr[j - 1]) {
        // 현재 원소가 왼쪽 원소보다 작으면 그 원소의 왼쪽으로 삽입
        // 제 위치를 찾을 때까지 j가 감소하며 반복됨
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        // 작지 않을 경우 break
        break;
      }
    }
  }
}

arr = [
  3, 4, 34, 23, 32, 32, 3, 34, 45, 45, 34, 24, 23, 23, 21, 3, 35, 436, 4564,
  5534,
];
insertSort(arr);
console.log(arr);
[
  3, 3, 3, 4, 21, 23, 23, 23, 24, 32, 32, 34, 34, 34, 35, 45, 45, 436, 4564,
  5534,
];
