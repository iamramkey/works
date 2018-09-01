// doc:: es5 way of doing a non array or array like value to an array
function makeArray(nonArray) {
	let res = [];
	for (let i = 0; i < nonArray.length; i++) {
		res.push(nonArray[i]);
	}
	return res;
}

function doSomething() {
	let arr = makeArray(arguments);
	console.log(arr);
}

function doSomethingNew() {
	let arr = Array.from(arguments);
	console.log('doSomethingNew', arr);
}

// doc::: array.from method works for both array like objects & iterables

// lets create an iterable and find what array.from does

let numbers = {
	*[Symbol.iterator]() {
		yield 1;
		yield 2;
		yield 3;
	}
};

let modifiedNumbers = Array.from(numbers);
console.log('TCL: modifiedNumbers', modifiedNumbers);
