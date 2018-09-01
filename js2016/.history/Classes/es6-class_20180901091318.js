class Person {
	constructor(name) {

    // doc: this is only place where we create all the class variables which are initialized or may be created

		this.name = name;
	}

	sayHi() {
		console.log('my name is ', this.name);
	}
}

let person = new Person('rama');
person.sayHi(); // my name is rama

console.log(person instanceof Person); // true
console.log(person instanceof Object); // true
console.log(typeof Person); // function
console.log(typeof Person.prototype.sayHi); // function
