//before ES6
function oldWayOfDeclaringDefaultParameters(url, timeOut, callback) {
	timeOut = timeOut || 0; // basic way of setting defaulg paramters
	callback = callback || function() {}; // basic way of setting default parameters

	timeOut = typeof timeOut === 'number' ? timeOut : 0;
	callback = typeof callback === 'function' ? callback : function() {};

	//rest of the code & logic goes in here
}

function functionDeclarationWithDefaultParameters(
	url,
	timeOut = 3000,
	callback = function() {}
) {
	//rest of the code & logic goes in here
}

function oldWayOfDefaultParametersUsingArguments(first, second) {
	console.log('first === arguments[0]', first === arguments[0]);
	console.log('second === arguments[1]', second === arguments[1]);
	//after changing the values to the parameters arguments also gets updated and will allways stay eqaul
	first = 'c';
	second = 'd';
	console.log('first === arguments[0]', first === arguments[0]);
	console.log('second === arguments[1]', second === arguments[1]);
}

oldWayOfDefaultParametersUsingArguments('a', 'b');

// once we set strict mode in the functio aruments object is going to update according to the changes in parameter values
function oldWayOfDefaultParametersUsingArgumentsStrictMode(first, second) {
	'use strict';
	console.log('first === arguments[0]', first === arguments[0]);
	console.log('second === arguments[1]', second === arguments[1]);
	//after changing the values to the parameters arguments also gets updated and will allways stay eqaul
	first = 'c';
	second = 'd';
	console.log('first === arguments[0]', first === arguments[0]);
	console.log('second === arguments[1]', second === arguments[1]);
}

oldWayOfDefaultParametersUsingArgumentsStrictMode('a', 'b');

function oldWayOfDefaultParametersUsingArguments(first, second = 'b') {
	//if default arguments are used the arguments are not going to update like in the strict mode according to the changes in the parameter values
	console.log('arguments.length', arguments.length);
	console.log('first === arguments[0]', first === arguments[0]);
	console.log('second === arguments[1]', second === arguments[1]);
	//after changing the values to the parameters arguments also gets updated and will allways stay eqaul
	first = 'c';
	second = 'd';
	console.log('first === arguments[0]', first === arguments[0]);
	console.log('second === arguments[1]', second === arguments[1]);
}

oldWayOfDefaultParametersUsingArguments('a');

function getValue(a, arg) {
	console.log('arg.length', arg.length, arg);
	return a + 1;
}

// we can use the previous arguments in the default value location & also arguments of the called function are also available and can be passed to defaultValueGetting functions
function defaultParametersComplex(a, b = getValue(a, arguments)) {
	return a + b;
}

console.log('sum is : ', defaultParametersComplex(1));

function defaultParameterWithWrongAssignment(first = second, second) {
	console.log('defaultParameterWithWrongAssignment', first, second);
}

// defaultParameterWithWrongAssignment(undefined, 3);
/* 

* the above function declaration will not throw any error but once you call it you will get `second is not defined` in this case
* for default parameters to work we need to avoid or pass undefined to set the default value to that variable. other than undefined if we pass any value it is being assigned to it.

*/
