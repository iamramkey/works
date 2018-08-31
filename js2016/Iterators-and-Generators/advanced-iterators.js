function* customIterator(a) {
	let first = yield 1;
	let second = yield first + 2;
	yield second + 5;
}

var iterator = customIterator();
console.log('iterator.next(10)', iterator.next(10)); // iterator.next(10) { value: 1, done: false } // doc:: 10 is not considered
console.log('iterator.next(6)', iterator.next(6)); // iterator.next(6) { value: 8, done: false } // doc:: 6 + 2
console.log('iterator.next(9)', iterator.next(9)); // iterator.next(9) { value: 14, done: false } // doc:: 9 + 5

// doc: for the first time next is called the passed value is not considering in yield because it is directly mentioned as 1
// doc: and the second time and next you are taking value as passed value & doing operations on it.

function* customIteratorWithTryCatch() {
	let first = yield 9;
	let second;
	try {
		yield first + 9;
	} catch (e) {
		second = 6;
	}
	yield second + 9;
}

var iterator1 = customIteratorWithTryCatch();
console.log('iterator1.next()', iterator1.next()); // iterator1.next() { value: 9, done: false }
console.log('iterator1.next()', iterator1.next(9)); // iterator1.next() { value: 18, done: false }
console.log(
	'iterator1.throw("Big Bang")',
	iterator1.throw(new Error('Big Bang'))
); // iterator1.throw("Big Bang") { value: 15, done: false }
// doc: if you dont throw and call next you will be able to get the passed value + yeild expression evaluated value
// doc: if you dont pass any value to the subsequent next calls you will get NaN because number operations with undefined always returns NaN
console.log('iterator1.next()', iterator1.next()); // iterator1.next() { value: undefined, done: true }

// doc:: calling the next method after the array size is completed is returning non required undefined value & done to true, so we can avoid explicitly if you use return keyword in a generartor function it will by default set the done to "true" & assigns the value key of returned object with the value next to the return statement.

function* customGeneratorWithReturnStatement() {
	yield 10;
	yield 20;
	yield 30;
	return 40;
	yield 50;
	return 60;
}

var iterator2 = customGeneratorWithReturnStatement();
console.log('iterator2.next()', iterator2.next()); // iterator2.next() { value: 10, done: false }
console.log('iterator2.next()', iterator2.next()); // iterator2.next() { value: 20, done: false }
console.log('iterator2.next()', iterator2.next()); // iterator2.next() { value: 30, done: false }
console.log('iterator2.next()', iterator2.next()); // iterator2.next() { value: 40, done: true }
console.log('iterator2.next()', iterator2.next()); // iterator2.next() { value: undefined, done: true }
console.log('iterator2.next()', iterator2.next()); // iterator2.next() { value: undefined, done: true }
console.log('iterator2.next()', iterator2.next()); // iterator2.next() { value: undefined, done: true }
// doc: we can clearly observe that once the done is tru you do any operation is saying value is undefined and done as true.

// doc:: combining iterators in a single generator function
function* numberGenerator() {
	yield 10;
	yield 20;
	yield 30;
}

function* colorGenerator() {
	yield 'red';
	yield 'green';
	yield 'blue';
}

function* combinedGenerator() {
	yield* numberGenerator();
	yield* colorGenerator();
	yield 'myCustomValue';
}

let iterator3 = combinedGenerator();

console.log('TCL: iterator3.next()', iterator3.next()); //  TCL: iterator3.next() { value: 10, done: false }
console.log('TCL: iterator3.next()', iterator3.next()); //  TCL: iterator3.next() { value: 20, done: false }
console.log('TCL: iterator3.next()', iterator3.next()); //  TCL: iterator3.next() { value: 30, done: false }
console.log('TCL: iterator3.next()', iterator3.next()); //  TCL: iterator3.next() { value: 'red', done: false }
console.log('TCL: iterator3.next()', iterator3.next()); //  TCL: iterator3.next() { value: 'green', done: false }
console.log('TCL: iterator3.next()', iterator3.next()); //  TCL: iterator3.next() { value: 'blue', done: false }
console.log('TCL: iterator3.next()', iterator3.next()); //  TCL: iterator3.next() { value: 'myCustomValue', done: false }
console.log('TCL: iterator3.next()', iterator3.next()); //  TCL: iterator3.next() { value: undefined, done: true }

function* anotherNumberGenerator() {
	yield 1;
	yield 2;
	return 3;
}

function* generatorUsingForLoop(count) {
	for (let i = 0; i < count; i++) {
		yield 'looping generator : ' + count + ' i : ' + i;
	}
}

function* anotherCombinedGenerator() {
	let count = yield* anotherNumberGenerator();
	yield* generatorUsingForLoop(count);
	yield 'final value';
}

let iterator4 = anotherCombinedGenerator();

console.log('TCL: iterator4.next()', iterator4.next()); // TCL: iterator4.next() { value: 1, done: false }
console.log('TCL: iterator4.next()', iterator4.next()); // TCL: iterator4.next() { value: 2, done: false }
console.log('TCL: iterator4.next()', iterator4.next()); // TCL: iterator4.next() { value: 'looping generator : 3 i : 0', done: false }
console.log('TCL: iterator4.next()', iterator4.next()); // TCL: iterator4.next() { value: 'looping generator : 3 i : 1', done: false }
console.log('TCL: iterator4.next()', iterator4.next()); // TCL: iterator4.next() { value: 'looping generator : 3 i : 2', done: false }
console.log('TCL: iterator4.next()', iterator4.next()); // TCL: iterator4.next() { value: 'final value', done: false }
console.log('TCL: iterator4.next()', iterator4.next()); // TCL: iterator4.next() { value: undefined, done: true }
