function varScopeMisconception(condition) {
	if (condition) {
		var localVariable = 'sampleValue';
		return localVariable;
	} else {
		console.log('in else block');
		console.log('localVariable value is : ', localVariable);
		return null;
	}
}

console.log(varScopeMisconception(true)); // sampleValue
console.log(varScopeMisconception(false)); // in other languages this will throw an exception that localVariable is notdefind but used. // * localVariable value is : undefined
/*
  * But here in javascript scopes are different from other languages
  * so the above block will be modifed in the compiling phase
  * function varScopeMisconception(condition) {
  * var localVariable; // due to the function scope all the variable delcarations will be moved to the first of everything in the function
  * if (condition) {
  * 	localVariable = 'sampleValue';
  * 	return localVariable;
  * } else {
  * 	console.log('in else block');
  * 	console.log('localVariable value is : ', localVariable);
  * 	return null;
  * 	}
  * }
*/

let loopFuncs = [];

for (var i = 0; i < 10; i++) {
	loopFuncs.push(function() {
		console.log('var declaration loop value : ', i);
	});
}
loopFuncs.forEach(i => i()); // print all 10's

loopFuncs = [];
for (var i = 0; i < 10; i++) {
	loopFuncs.push(
		(function(num) {
			return function() {
				console.log('var declaration after fixing loop value : ', num);
			};
		})(i)
	);
}

loopFuncs.forEach(i => i()); // print proper loop value like 0.1.2.3....

loopFuncs = [];
for (let i = 0; i < 10; i++) {
	loopFuncs.push(function() {
		console.log('loopFunc', i);
	});
}

loopFuncs.forEach(i => i()); // print everything perfectly, without any extra effort. this feature added to let recently (not while creating the let variable)