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
console.log(`string.startsWith("A")`, string.startsWith(`A`));
console.log(`string.endsWith("!")`, string.endsWith(`!`));
console.log(`string.includes("e")`, string.includes(`e`));

// negative scenarios
console.log(`string.startsWith("Sample")`, string.startsWith(`Sample`));
console.log(`string.endsWith('String')`, string.endsWith('String'));
console.log(`string.includes('w')`, string.includes('w'));

// with optional arguments - positive scenarios
console.log(`string.startsWith("a", 3))`, string.startsWith(`a`, 3));
console.log(`string.endsWith("i", 5)`, string.endsWith(`i`, 5));
console.log(`string.includes("r",9)`, string.includes(`r`, 9));
/* 
console.log(`string.startsWith("Sample")`, string.startsWith(`Sample`));
console.log(`string.endsWith('String')`, string.endsWith('String'));
console.log(`string.includes('w')`, string.includes('w'));
 */

console.log(string.substr(0, -5));
