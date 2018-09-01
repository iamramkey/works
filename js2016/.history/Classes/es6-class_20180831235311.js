class Person {
	
	constructor(name) {
		this.name = name;
	}

	sayHi() {
		console.log('my name is ', this.name);
	}
}

let person = new Person('rama');
person.sayHi();

console.log(person instanceof Person);
console.log(person instanceof Object);
console.log(typeof Person);
console.log(typeof Person.prototype.sayHi);
