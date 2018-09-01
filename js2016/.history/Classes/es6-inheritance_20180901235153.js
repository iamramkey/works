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
square.sayHi();
console.log(
	'TCL: square.someOverridableMethod()',
	square.someOverridableMethod()
);

// doc:: Rectangle is called as Parent Class
// doc:: Square is called as Derived Class
// doc:: if you are writing a constructor to the Derived Class you need to call super
//
