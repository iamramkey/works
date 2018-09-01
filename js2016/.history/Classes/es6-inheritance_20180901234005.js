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
console.log('TCL: square.getArea()', square.getArea());
