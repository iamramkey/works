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

// doc: we can use Symbol.iterator to create our own iterator

// our own collection with iterator
var collection = {
	items: [],
	*[Symbol.iterator]() {
		for (let item of this.items) {
			yield item;
		}
	}
};

collection.items.push(1);
collection.items.push(2);
collection.items.push(3);
collection.items.push(4);
collection.items.push(5);
collection.items.push(6);

for (let item of collection) {
	console.log('TCL: own collection with iterator item', item);
}
 /*
  *Output:
  TCL: own collection with iterator item 1
  TCL: own collection with iterator item 2
  TCL: own collection with iterator item 3
  TCL: own collection with iterator item 4
  TCL: own collection with iterator item 5
  TCL: own collection with iterator item 6
 */