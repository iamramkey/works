class Rectangle {
	constructor(length, breadth) {
		this.length = length;
		this.breadth = breadth;
	}

	getArea() {
		return this.length * this.breadth;
	}
}

class Square extends Rectangle {
	constructor(length) {
		super(length, length);
	}
}

let square = new Square(10);
console.log('TCL: square.getArea()', square.getArea()); // TCL: square.getArea() 100

console.log('TCL: square instanceof Square', square instanceof Square); // TCL: square instanceof Square true
console.log('TCL: square instanceof Rectangle', square instanceof Rectangle); // TCL: square instanceof Rectangle true
