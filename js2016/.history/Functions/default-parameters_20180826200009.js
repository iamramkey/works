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
