function Person(name) {
	this.name = name;
}

Person.prototype.sayHi = function() {
	console.log('Hi this is ', this.name);
};

let rama = new Person('rama');
rama.sayHi(); // Hi this is  rama

console.log('TCL: rama instanceof Person', rama instanceof Person); // TCL: rama instanceof Person true

console.log('TCL: rama instanceof Object', rama instanceof Object); // TCL: rama instanceof Object true
