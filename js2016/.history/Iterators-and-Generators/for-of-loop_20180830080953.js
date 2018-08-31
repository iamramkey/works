// doc: for of loop internally uses iterator which is built into array, string, set, map, etc..
// doc: an inbuilt iterator can be retreived by calling the Symbol.iterator value of a variable

var items = [1, 2, 3, 4, 5, 6];
for (var item of items) {
	console.log('TCL: item in for-of loop ', item);
}

var inBuiltIterator = items[Symbol.iterator]();
console.log('TCL: inBuiltIterator.next()', inBuiltIterator.next()); // TCL: inBuiltIterator.next() { value: 1, done: false }
console.log('TCL: inBuiltIterator.next()', inBuiltIterator.next()); // TCL: inBuiltIterator.next() { value: 2, done: false }
console.log('TCL: inBuiltIterator.next()', inBuiltIterator.next()); // TCL: inBuiltIterator.next() { value: 3, done: false }
console.log('TCL: inBuiltIterator.next()', inBuiltIterator.next()); // TCL: inBuiltIterator.next() { value: 4, done: false }
console.log('TCL: inBuiltIterator.next()', inBuiltIterator.next()); // TCL: inBuiltIterator.next() { value: 5, done: false }
console.log('TCL: inBuiltIterator.next()', inBuiltIterator.next()); // TCL: inBuiltIterator.next() { value: 6, done: false }
console.log('TCL: inBuiltIterator.next()', inBuiltIterator.next()); // TCL: inBuiltIterator.next() { value: undefined, done: rue }

// doc: simple utitility function to check whether an variable is iterable or not

function isIterable(variable) {
	return typeof variable[Symbol.iterator] === 'function';
}

console.log('TCL: isIterable([])', isIterable([])); // TCL: isIterable([]) true
console.log('TCL: isIterable({})', isIterable({})); // TCL: isIterable({}) false
console.log('TCL: isIterable("")', isIterable('')); // TCL: isIterable("") true
console.log('TCL: isIterable(new Set())', isIterable(new Set())); // TCL: isIterable(new Set()) true
console.log('TCL: isIterable(new WeakSet())', isIterable(new WeakSet())); // TCL: isIterable(new WeakSet()) false
console.log('TCL: isIterable(new Map())', isIterable(new Map())); // TCL: isIterable(new Map()) true
console.log('TCL: isIterable(new WeakMap())', isIterable(new WeakMap())); // TCL: isIterable(new WeakMap()) false


