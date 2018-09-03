var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('TCL: numbers.copyWithin(2, 0)', numbers.copyWithin(2, 0)); // TCL: numbers.copyWithin(2, 0) [ 1, 2, 1, 2, 3, 4, 5, 6, 7 ]
// doc: copy the values after "2"nd index while taking the replacement values from "0"th index. so, taking the "0"th value 1 and pasting those values from "2"nd index i.e., from 3

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('TCL: numbers.copyWithin(2, 0, 4)', numbers.copyWithin(2, 0, 4)); // TCL: numbers.copyWithin(2, 0, 4) [ 1, 2, 1, 2, 3, 4, 7, 8, 9 ]
// doc: copy the values after "2"nd index while taking the replacement values from "0"th index and pasting them till (start index + exclusive last index) = 2+4 = 6

function a(x){
  console.log(x);
  return 'rama';
}

const b = a 'hi';
console.log(b);