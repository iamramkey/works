function sample(...args) {
	console.log('TCL: sample -> args', args);
	return 'returnString';
}

let str = sample `function parameter 1`;
console.log('TCL: str', str);
