//'use strict';

if (true) {
	console.log(typeof myFunction); // this will print "function" it is in strict mode
	// the above statement will print "function" when not in strict mode

	var myFunction1 = function myFunction() {};
}

console.log(typeof myFunction); // this will print "undefined" if it is in strict mode
// the above statement will print "function" when not in strict mode as function declarations are moved to the top while the compilation phase. So this functin is created on global scope & available outside the if block also

//doc In ES3 or earlier function declaration inside a block / block level function  was technically a syntax error. but all browsers still supported it.
//doc Unfortunately each browser that allowed that syntax behave in a sligtly different way
//doc It is considered as a best practise to avoid a function declaration in a block
//doc just to get rid this issues ES5 strict mode introduced an error whenever a function is declared inside a block
// doc but in ES6 it does not give you any error under strict mode
