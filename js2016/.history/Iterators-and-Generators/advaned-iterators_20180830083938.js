function* customIterator() {
	let first = yield 1;
	let second = yield first + 2;
	yield second + 5;
}

var iterator = customIterator();
console.log('iterator.next(10)', iterator.next(10));
console.log('iterator.next(6)', iterator.next(6));
console.log('iterator.next(9)', iterator.next(9));
