function Person(name) {
	this.name = name;
}

Person.prototype.sayHi = function() {
	console.log('Hi this is ', this.name);
};

let rama = new Person('rama');
rama.sayHi();

console.log('TCL: rama instanceof Person', rama instanceof Person);

console.log('TCL: rama instanceof Object', rama instanceof Object);
