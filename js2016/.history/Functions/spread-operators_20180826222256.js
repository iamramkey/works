/*
doc: sperad operator is a close relative to the rest parameters operator
doc: It will be most use full for function calls & assignments & duplication of values
doc: Rest Parameter allows you to specify multiple independednt parameters and combine them into an  array
doc: Spread operator allows you to  specify an array that should be splitten into items and into multiple different arguments to pass in a function call
doc: you can pass extra arguments to a function while passing spread operator as an argument
*/

// spread operator implementation on Math.max in old way
console.log(Math.max.apply(null, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// by using spread operator the above code reduced to ...
console.log(Math.max(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// passing extra arguments to a function along with spread operator
console.log(Math.max(11, 12, ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 13, 14, 15));
