function myFunction() {}

console.log(myFunction.name); // "myFunction"

var myFunction1 = function() {};

console.log(myFunction1.name); // "myFunction1"

var myFunction2 = function myFunction3() {};

console.log(myFunction2.name); //"myFunction3"

var person = {
	get firstName() {
		return 'firstName';
	},
	sayName: function() {
		return this.firstName;
	}
};

console.log(person.sayName.name); // "sayName"

var descriptor = Object.getOwnPropertyDescriptor(person, 'firstname');
console.log(descriptor.get.name); // "get firstName"

console.log(myFunction1.bind().name); // "bound myFunction1 "


class InnerHTMLModifier{
	
	constructor(element){
		this.element = element;
	}
	get html{
		return this.element.innerHTML;
	}

	set html(str){
		this.element.innerHTML = str;
	}
}

let descriptor = Object.getOwnPropertyDescriptor(InnerHTMLModifier, 'html');

console.log(`TCL: 'get' in descriptor`, 'get' in descriptor);
console.log(`TCL: 'set' in descriptor`, 'set' in descriptor);
