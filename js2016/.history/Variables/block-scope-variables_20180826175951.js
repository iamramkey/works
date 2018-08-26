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
  * var localVariable;
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
