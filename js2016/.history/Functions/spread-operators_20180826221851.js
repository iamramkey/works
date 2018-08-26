/*
doc: sperad operator is a close relative to the rest parameters operator
doc: It will be most use full for function calls & assignments & duplication of values
doc: Rest Parameter allows you to specify multiple independednt parameters and combine them into an  array
doc: Spread operator allows you to  specify an array that should be splitten into items and into multiple different arguments to pass in a function call
*/

// spread operator implementation on Math.max in old way
console.log(Math.max.apply(null, [1, 2, 3, 4, 5, 6, 7, 8, 9.1]));
