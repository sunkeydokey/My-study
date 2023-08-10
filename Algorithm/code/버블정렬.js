function bubbleSortDescending(arr) {
  // 내림차순
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j + 1]) {
        // arr[j]는 이번 단계의 첫번째 원소
        // arr[j]가 다음 원소보다 작다면 다음 원소와 교체
        // 다음 단계에서 첫번째 원소가 될 것임
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

function bubbleSortAscending(arr) {
  // 오름차순
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // arr[j]는 이번 단계의 첫번째 원소
        // arr[j]가 다음 원소보다 크다면 다음 원소와 교체
        // 다음 단계에서 첫번째 원소가 될 것임
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

let arrTobeSortedAscending = [44, 343, 24, 34, 32, 423, 4, 23];
bubbleSortAscending(arrTobeSortedAscending);
let arrTobeSortedDescending = [44, 343, 24, 34, 32, 423, 4, 23];
bubbleSortDescending(arrTobeSortedDescending);
console.log(arrTobeSortedAscending);
console.log(arrTobeSortedDescending);
