class Rectangle {
	constructor(length, breadth) {
		this.length = length;
		this.breadth = breadth;
	}

	getArea() {
		return this.length * this.breadth;
	}

	sayHi() {
		console.log('Hi from Rectangle');
	}

	someOverridableMethod() {
		return 'from Parent Class';
	}

	static createInstance(length, breadth) {
		return new Rectangle(length, breadth);
	}
}

class Square extends Rectangle {
	// doc::: below is the case for our own constructor
	constructor(length) {
		super(length, length);
	}

	// doc::: what if javascript's default constructor look like
	/* constructor(...args ){
    super(...args);
  } */

	sayHi() {
		console.log('Hi from Square');
	}

	someOverridableMethod() {
		// we can call the parent method from childrens method also
		console.log(
			'TCL: Square -> someOverridableMethod -> super.someOverridableMethod()',
			super.someOverridableMethod()
		);
		console.log('From Children Class');
	}
}

let square = new Square(10);
console.log('TCL: square.getArea()', square.getArea()); // TCL: square.getArea() 100
console.log('TCL: square instanceof Square', square instanceof Square); // TCL: square instanceof Square true
console.log('TCL: square instanceof Rectangle', square instanceof Rectangle); // TCL: square instanceof Rectangle true
square.sayHi(); // Hi from Square
square.someOverridableMethod(); /* TCL: Square -> someOverridableMethod -> super.someOverridableMethod() from Parent Class
From Children Class
TCL: square.someOverridableMethod() undefined */

// doc:: Rectangle is called as Parent Class
// doc:: Square is called as Derived Class
// doc:: if you are writing a constructor to the Derived Class you need to call super

let rect = Rectangle.createInstance(4, 4); // rect is created using static method
let rSquare = Square.createInstance(5, 5); // rSquare is created using Rectangle's static method

console.log('TCL: rSquare instanceof Square', rSquare instanceof Square); // false
console.log('TCL: rSquare instanceof Rectangle', rSquare instanceof Rectangle); // true

// doc::: rSquare is created using new Rectangle so, it is not an instance of Square
// doc::: using static methods of parent class will lead to these problems
