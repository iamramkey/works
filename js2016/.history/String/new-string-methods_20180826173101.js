// * Trim method
// Which removes the trailing spaces around the main string  and gives us a new string without trailing spaces.

// * Includes method
// Which returns tru if given text is anywhere with in the  main string

// * StartsWith method
// It returns true if the given text is  in the beginning of the string
// It takes 2 arguments
// 1. text to search for
// 2. [Optional] index from which you start the search

// *EndsWith method
// It retuns the true if the given string is at the end of the text
// It takes 2 arguments
// 1. text to search for
// 2. [Optional] index from which you start the search

var string = `A Sample String !`;

// positive scenarios
console.log(`string.startsWith("A")`, string.startsWith(`A`)); // true
console.log(`string.endsWith("!")`, string.endsWith(`!`)); // true
console.log(`string.includes("e")`, string.includes(`e`)); // true

// negative scenarios
console.log(`string.startsWith("Sample")`, string.startsWith(`Sample`)); // false
console.log(`string.endsWith('String')`, string.endsWith('String')); // false
console.log(`string.includes('w')`, string.includes('w')); // false

// with optional arguments - positive scenarios
console.log(`string.startsWith("a", 3))`, string.startsWith(`a`, 3)); //true
console.log(`string.endsWith("i", 13)`, string.endsWith(`i`, 13)); //true
console.log(`string.includes("r",9)`, string.includes(`r`, 9)); //true

// * Repeat mthod
// which repeats the given string number of times passed to it.
// this method is particularly usefull in code formatting text &

console.log(`string.repeat(4)`, string.repeat(4)); //A Sample String !A Sample String !A Sample String !A Sample String !

var indent = ` `.repeat(4); // create a starting indentation of 4 spaces
var indentLevel = 0;

for (var i = 0; i < 4; i++) {
	var newIndent = indent.repeat(++indentLevel);
	console.log(
		`if(true)
  `,
		newIndent + `//executableStatement with incremental indentation`
	);
}
