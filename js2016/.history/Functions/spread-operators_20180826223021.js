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

var crucialJoints = ['shoulders', 'knees'];
var parts = ['head', ...crucialJoints, 'toes'];
crucialJoints.push('elbow'); // doc: this change in value of crucial joints doesnt adjust into parts array as "spread operator shallow copies the values and use them"
console.log(parts);

let newArray = [...parts];
newArray.push('6th finger');
console.log('parts', parts); //this doesnot contain the newly added item into newArray as parts is duplicated and used while assigning the values to newArray
console.log('newArray', newArray);

let oldConcatArray = newArray.concat(parts);
let newConcatArray = [...newArray, ...parts];
