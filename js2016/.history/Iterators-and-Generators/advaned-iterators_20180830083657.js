function *customIterator() {
	let first = yield 1;
	let second = yield first + 2;
	yield second + 5;
}

var iterator = customIterator();
console.log('' , );