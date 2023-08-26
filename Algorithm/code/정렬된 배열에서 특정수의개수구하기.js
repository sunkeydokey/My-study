function solution(N, x, arr) {
  let start = 0;
  let end = N - 1;
  let mid;
  let count = 0;
  let result = [...arr];

  while (start <= end) {
    mid = parseInt((start + end) / 2);
    if (result[mid] == x) {
      count++;
      result = [...result.slice(0, mid), ...result.slice(mid + 1)];
      start = 0;
      end = N - 1 - count;
      continue;
    }
    if (result[mid] < x) start = mid + 1;
    else end = mid - 1;
  }
  return count === 0 ? -1 : count;
}

console.log(solution(7, 2, [1, 1, 2, 2, 2, 2, 3]));
console.log(solution(7, 4, [1, 1, 2, 2, 2, 2, 3]));
