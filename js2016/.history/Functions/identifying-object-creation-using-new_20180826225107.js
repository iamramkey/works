function Person(name) {
	this.name = name;
}
var john = new Person('John'); // doc : this will create a new instanceof Person and assign it to john
var papa = Person('papa'); // doc : this will return undefined as function call is returning nothing

// we can create a new function object using call/apply/bind mechanism
var doe = Person.call(john, 'Doe'); // doc : this will have a john's object with name as 'Doe'
console.log(doe === john);
