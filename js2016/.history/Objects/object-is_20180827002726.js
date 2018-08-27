console.log('+0 == -0', +0 == -0); // true
console.log('+0 === -0', +0 === -0); // true
console.log('Object.is(+0, -0)', +0 === -0); //false

console.log('NaN == NaN', NaN == NaN); // false
console.log('NaN === NaN', NaN === NaN); // false
console.log('Object.is(NaN, NaN', Object.is(NaN, NaN)); // true

// doc: In each and every other case Object.is similiar to === operator

let person = {
	sayHi() {
		return 'Hello !';
	}
};

let dog = {
	sayHi() {
		return 'WaaW !';
	}
};

let friend = Object.create(person);
console.log(friend.sayHi()); // Hello !
console.log(Object.getPrototypeOf(friend) === person); // true

Object.setPrototypeOf(friend, dog);
console.log(friend.sayHi()); // WaaW!
console.log(Object.getPrototypeOf(friend) === person); // false

let dosth = {
	sayHi() {
		return Object.getPrototypeOf(this).sayHi.call(this) + ' dosth';
	}
};

Object.setPrototypeOf(dosth, person);
console.log(dosth.sayHi());

Object.setPrototypeOf(dosth, dog);
console.log(dosth.sayHi());
