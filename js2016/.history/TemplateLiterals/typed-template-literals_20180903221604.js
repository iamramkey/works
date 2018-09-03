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

const position = '10th';
const number = 5;

function getMessage(literals, name, position, number) {
	console.log(literals);
	console.log(name);
	console.log(position);
	console.log(number);

	return (
		literals[0] +
		name +
		literals[1] +
		position +
		literals[2] +
		number +
		literals[3]
	);
}

const message = getMessage`Hello ${name}, you are ${position} in queue ${number}.`;
console.log(message);
