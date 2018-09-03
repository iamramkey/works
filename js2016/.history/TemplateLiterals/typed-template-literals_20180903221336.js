function sample(...args) {
	console.log('TCL: sample -> args', args);
	return 'returnString';
}

let str = sample `function parameter 1` & `rama`;
console.log('TCL: str', str);
