function Rectangle(length, breadth) {
	this.length = length;
	this.breadth = breadth;
}

Rectangle.prototype.getArea = function() {
	return this.length * this.breadth;
};

function Square(length) {
	Rectangle.call(this, length, length);
}

Square.prototype = Object.create(Rectangle.prototype, {
	constructor: {
		value: Square,
		enumerable: true,
		writable: true,
		configurable: true
	}
});

var square = new Square(10);
console.log('TCL: square.getArea()', square.getArea());
console.log('TCL: square instanceof Square', square instanceof Square);
console.log('TCL: square instanceof Rectangle', square instanceof Rectangle);
