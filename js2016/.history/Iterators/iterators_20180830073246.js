// doc: Why Iterators?
// doc: tracking the variables will get complex under nested for loops
// doc: we will be getting array index out of bounds exception
// doc: checking conditions to check whether the increment variable is less than the array we are looping over etc...

// doc: What iterators are?
// doc: Iterators are an specific object which are only used for iterating over loops
// doc: all iterators will have next method which will give us the next element value
// doc: next method gives us the result object which contains 1. value of array at that index 2.  done property if will be true once array length is equal to the increment variable element and false for all others

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
console.log(iterator.next()); // { done: false, value: 1 }
console.log(iterator.next()); // { done: false, value: 2 }
console.log(iterator.next()); // { done: false, value: 3 }
console.log(iterator.next()); // { done: false, value: 4 }
console.log(iterator.next()); // { done: false, value: 5 }
console.log(iterator.next()); // { done: false, value: 6 }
console.log(iterator.next()); // { done: true, value: undefined }

// doc: rather creating our own iterator in ES5, ES6 has introduced a new concept called genertor, which will create an iterator and give it to us.
// doc: generator functions are indicated by a star character after the function keyword, inside the generator function we will have yeild

function* myNewIterator(items) {
	/*
  
  doc: yield will return its value for each and every next call and it doesnot execute all at once, In first next call it will return it will return 1, then 2, then 3 like that
  
  yield 1;
  yield 2;
  yield 3;
  
  doc: yield can used directly without nesting under any function, If you write it under any function it doesnot work

  doc: like items.forEach(item => yield item); :: it doesnot work
  */

	for (var i = 0; i < items.length; i++) yield items[i];
}

var es6Iterator = myNewIterator([1, 2, 3, 4, 5, 6]);
console.log(es6Iterator.next()); // { done: false, value: 1 }
console.log(es6Iterator.next()); // { done: false, value: 2 }
console.log(es6Iterator.next()); // { done: false, value: 3 }
console.log(es6Iterator.next()); // { done: false, value: 4 }
console.log(es6Iterator.next()); // { done: false, value: 5 }
console.log(es6Iterator.next()); // { done: false, value: 6 }
console.log(es6Iterator.next()); // { done: true, value: undefined }
