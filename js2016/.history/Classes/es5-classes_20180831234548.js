function Person(name) {
	this.name = name;
}

Person.prototype.sayHi = function() {
	console.log('Hi this is ', this.name);
};

let rama = new Person('rama');
rama.sayHi();
