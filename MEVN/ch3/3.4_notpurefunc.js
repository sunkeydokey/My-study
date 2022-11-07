const list = [1, 2, 3, 4, 5];
let slicedList = list.slice(1);
console.log(list, slicedList); // [ 1, 2, 3, 4, 5 ] [ 2, 3, 4, 5 ]
let splicedList = list.splice(1);
console.log(list, splicedList); // [ 1 ][ 2, 3, 4, 5 ]
