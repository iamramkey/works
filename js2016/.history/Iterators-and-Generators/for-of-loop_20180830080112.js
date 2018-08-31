// doc: for of loop internally uses iterator which is built into array, string, set, map, etc..
// doc: an inbuilt iterator can be retreived by calling the Symbol.iterator value of a variable

var items = [1, 2, 3, 4, 5, 6];
for (var item of items) {
	console.log('TCL: item in for-of loop ', item);
}

var inBuiltIterator = items[Symbol.iterator]();
console.log('TCL: inBuiltIterator.next()', inBuiltIterator.next());
console.log('TCL: inBuiltIterator.next()', inBuiltIterator.next());
console.log('TCL: inBuiltIterator.next()', inBuiltIterator.next());
console.log('TCL: inBuiltIterator.next()', inBuiltIterator.next());
console.log('TCL: inBuiltIterator.next()', inBuiltIterator.next());
console.log('TCL: inBuiltIterator.next()', inBuiltIterator.next());
