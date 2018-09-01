let numbers = [44, 48, 29, 23, 50, 34, 49, 24, 04, 18];

// fill the numbers array array with 6
console.log('TCL: numbers.fill(6)', numbers.fill(6)); // TCL: numbers.fill(6) [ 6, 6, 6, 6, 6, 6, 6, 6, 6, 6 ]

// doc:: fill takes 3 parameters 1. number to fill with, 2. start index, exclusive end index

numbers = [1, 2, 3, 4, 5, 6, 7];
console.log('TCL: numbers.fill(1, 2)', numbers.fill(1, 9)); // TCL: numbers.fill(1, 2) [ 1, 2, 9, 9, 9, 9, 9 ]
// doc:: start filling the array from index "2" with value 9 so output is like above
console.log('TCL: numbers.fill(0, 1, 3)', numbers.fill(0, 1, 3));
