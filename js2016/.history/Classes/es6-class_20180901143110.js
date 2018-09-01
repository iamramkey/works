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

// doc:: difference between es5 way of creating a class & es6 way of creating a class
// doc:: class keyword is just a syntactic sugar on top of es5 way & more look like a proper class
// doc:: class delcaration itself is completely different from the es5 way when compared with es6 way
// doc:: class declarations are not hoisted, unlike function declarations class declaration is not hoisted. So, its similiar to let declaration.
// doc:: class declaration exist in the "TDZ" temporal dead zone
// doc:: Complete description about "TDZ" http://jsrocks.org/2015/01/temporal-dead-zone-tdz-demystified
// doc:: all code inside the class runs under strict ode, there is no way of avoiding it
// doc:: all the methods inside a class are non-enumrable.
// doc:: all the methods inside a class lacks of construct method, which means when you try to create an object using new keyword from class methods you will get an error
// doc:: calling the class constructor without the new keyword will also throw an error
// doc:: attempting to override the name of the class will also throw error /?

let Human = class {
	constructor(name) {
		this.name = name;
	}
	sayHi() {
		console.log('Human Says: ', this.name);
	}
};

let human = new Human('AnyHumanName');
human.sayHi(); // Human Says:  AnyHumanName

console.log('TCL: human instanceof Human', human instanceof Human); // TCL: human instanceof Human true
console.log('TCL: human instanceof Object', human instanceof Object); // TCL: human instanceof Object true
console.log('TCL: typeof Human', typeof Human); // TCL: typeof Human function
console.log('TCL: typeof Human.prototype.sayHi', typeof Human.prototype.sayHi); // TCL: typeof Human.prototype.sayHi function

let Dog = class Pug {
	constructor(name) {
		this.name = name;
	}
	bark() {
		console.log('Bhow! Bhow! ', this.name);
	}
};

let dog1 = new Dog('Hutch Dog');
dog1.bark();

console.log('TCL: typeof Dog', typeof Dog);
console.log('TCL: typeof Pug', typeof Pug);
