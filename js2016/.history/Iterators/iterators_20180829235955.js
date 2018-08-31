// doc: Why Iterators?
// doc: tracking the variables will get complex under nested for loops
// doc: we will be getting array index out of bounds exception
// doc: checking conditions to check whether the increment variable is less than the array we are looping over etc...

// doc: What iterators are?
// doc: Iterators are an specific object which are only used for iterating over loops
// doc: all iterators will have next method which will give us the next element value
// doc: next method gives us the result object which contains 1. value of array at that index 2.  done property if will be true for last element and false for all others

function createOwnIterator(arr) {
	let i = 0;
	return {
		next() {
			var done = i >= arr.length;
			var value = !done ? arr[i++] : undefined;
			return { done, value };
		}
	};
}

var iterator = createOwnIterator([1, 2, 3, 4, 5, 6]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
