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


let decFuncs = [];
let loopFuncs = [];
for(let i = 0, decFuncs.push(function(){ console.log('decFunc', i); }); i < 10; i ++){
  loopFuncs.push(function() {console.log('loopFunc', i) });
}

decFuncs.forEach(i => i());
loopFuncs.forEach(i => i());