function binarySearchRecursion(target, arr) {
  let start = 0;
  let end = arr.length - 1;
  if (start > end) return undefined;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == target) return mid;

  if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
  else return binarySearch(arr, target, mid + 1, end);
}

console.log('binarySearch: ', binarySearch(3, [2, 2, 6, 4, 3, 4, 5]));
