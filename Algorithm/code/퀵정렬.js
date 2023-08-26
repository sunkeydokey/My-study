function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];

  const left = arr.filter((data) => data < pivot);
  const center = arr.filter((data) => data == pivot);
  const right = arr.filter((data) => data > pivot);

  return [...quickSort(left), ...center, ...quickSort(right)];
}

arr = quickSort([23, 3432, 4, 35, 23, 3254354, 35, 435, 544234]);
console.log(arr);
[4, 23, 23, 35, 35, 435, 3432, 544234, 3254354];
