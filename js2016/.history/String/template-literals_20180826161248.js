// Now we will see how to create a new string with backticks
var message = `Hello World!`;
console.log(message); // Hello World!
console.log(typeof message); // string
console.log(message.length); // 12

// Noe we will implement how to include backticks in a string created using backticks
var stringWithBackTicks = `Hello \` World!`;
console.log(stringWithBackTicks); // Hello ` World!

// From the initial version of the javascript developers are trying to create a string in multiple lines, using backticks without any extra effort you are able to create multi line strings.
// *caution: if you use using indenation as tabs/spaces it will increase the string length where as in IDE it may be an indentation.
// In javascript there is a work around to achieve multiple lines before ES6 version.
var workAroundMultipleLineString =
	'This string \
is going to span for \
multiple line \
without getting any javascript compilation issue';

// * this is not a recommended way to implement multi line string
// * this could potentially a bug that is allowing to do it.
// * But javascript is not itended to do it.

var recommendedMultiLineString = `This string
                                  is going to span for
                                  multiple lines
                                  without requiring of
                                  extra backslash at the end of
                                  each line ending`;

console.log(recommendedMultiLineString);
/*
This string
                                  is going to span for
                                  multiple lines
                                  without requiring of
                                  extra backslash at the end of
                                  each line ending
*/

// * this is very important if you use indentation tabs/spaces inside a multiline string it will become a part of the string rather than for visibility purposes in IDE

// We can write HTML inside an backtick string as HTML enclosing HTML in a string is a common in javascript

var html = `
  <div>
    <h1>Example Title</h1>
    <p>lorem ipsum large text</p>
  </div>
`;

// * Substitution : It allows you to embed any valid javascript expression inside a template literal string & the output results in a string with the parsed values(after evaluating expressions inside). Any expression with in '${' and '}' will be the substitution part

var greeting = 'Hello';
var name = 'Iamramkey';
var greetingMessage = `${greeting + ', ' + name}`;
console.log(greetingMessage); // Hello, Iamramkey