function* customIterator(a) {
	let first = yield 1;
	let second = yield first + 2;
	yield second + 5;
}

var iterator = customIterator();
console.log('iterator.next(10)', iterator.next(10)); // iterator.next(10) { value: 1, done: false }
console.log('iterator.next(6)', iterator.next(6)); // iterator.next(6) { value: 8, done: false }
console.log('iterator.next(9)', iterator.next(9)); // iterator.next(9) { value: 14, done: false }

// doc: for the first next the passed value is not considering in yield
