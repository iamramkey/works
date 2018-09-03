function sample(...args) {
	console.log('TCL: sample -> args', args);
	return 'returnString';
}

let str = sample`function parameter 1` & `rama`;
console.log('TCL: str', str);

const name = 'Dave';

function tag(literals, name) {
	console.log('TCL: tag -> literals, name', literals, name);
	return literals[0] + name + literals[1];
}

const welcome = tag`Hello ${name}.`;

console.log(welcome);
