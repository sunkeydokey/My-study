function solution(n, arr) {
  let start = 0;
  let end = n - 1;
  let mid;

  while (start <= end) {
    if (start > end) return -1;
    mid = parseInt((start + end) / 2);
    if (mid == arr[mid]) return mid;
    if (mid < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

// 0   1   2   3   4   5   6   7   8   9  mid
// -4 -3  -2   3   5   6                  arr[mid]
console.log(solution(5, [-15, -6, 1, 3, 7]));
console.log(solution(7, [-15, -4, 2, 8, 9, 13, 15]));
console.log(solution(7, [-15, -4, 3, 8, 9, 13, 15]));
