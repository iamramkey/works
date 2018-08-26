function Person(name) {
	this.name = name;
}
var john = new Person('John'); // doc : this will create a new instanceof Person and assign it to john
var papa = Person('papa'); // doc : this will return undefined as function call is returning nothing

// we can create a new function object using call/apply/bind mechanism
var doe = Person.call(john, 'Doe'); // doc : this will have a john's object with name as 'Doe'
console.log(doe === john); // it will print false as javascript is bad at object comparison & doe is created on john but not equal to john

function MandatoryNewPerson(name) {
	if (this instanceof MandatoryNewPerson) {
		this.name = name;
	} else {
		throw 'you are calling a function rather than creating a new object for name : ' +
			name;
	}
}

var rama = new MandatoryNewPerson('rama');
try {
	var sam = MandatoryNewPerson('Sam');
} catch (e) {
	console.log(e);
} finally {
}
var venkat = MandatoryNewPerson.call(rama, 'Venkat'); // doc: this will create without any error. To Overcome this situation ES6 has a new property called "new.target"

/* 
doc: Javascript internally calls any function in 2 ways
doc 1. function call (this will be instantiated when any function is called by using 
  doc a. parantheses
  doc b. call
  doc c. bind
  doc d. apply
doc )
doc 2. constructor call (this will be instantiated when any function is invoked with new operator)

  to differentiate between these 2 calls ES6 has added a new property 
  doc new.target
  which will set to "Function" to which you are calling with new. otherwise it will be undefined
*/

function Animal() {
	if (new.target == arguments.callee) {
		// this function is instantiated using new keyword
	}
	// or
	if (!(new.target === undefined)) {
		// this function is instantiated using new keyword
	}
	// doc new.target contains the variable after the new keyword. so this will have the whole function which you are trying to create object on
}
