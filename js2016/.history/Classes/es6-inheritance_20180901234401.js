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
  // doc::: below is the case for our own constructor
  constructor(length) {
		super(length, length);
  }
  
  // doc::: what if javascript's default constructor look like
  /* constructor(...args ){
    super(...args);
  } */
}

let square = new Square(10);
console.log('TCL: square.getArea()', square.getArea()); // TCL: square.getArea() 100

console.log('TCL: square instanceof Square', square instanceof Square); // TCL: square instanceof Square true 
console.log('TCL: square instanceof Rectangle', square instanceof Rectangle); // TCL: square instanceof Rectangle true


// doc:: Rectangle is called as Parent Class
// doc:: Square is called as Derived Class
// doc:: if you are writing a constructor to the Derived Class you need to call super
//