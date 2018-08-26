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
