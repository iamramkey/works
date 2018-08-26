// doc arrow function cannot be called by new keyword
// doc arrow function cannot be used as a constructors
// doc arrow function doesnot have a prototype as it cannot be called by new keyword prototype if there also makes no sense
// doc value of this inside the arrow function is cannot be modified
// doc we donot have the arguments object here
// doc no duplicate name parameters. In normal functions we can declare with duplicate name parameters in strict or non-strict mode
// doc arrow functions also have a name parameter
// doc arrow function doesnot have their own this,super,new.target values.

// doc why arrows functions are creted
/*
  1. this binding is the first and commmon source of errors in javascript
  2. by limiting arrow functions to execute the code with single this value,  javascript engines can more easily optimize these operations
  */
