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
console.log('iterator1.next()', iterator1.next());
