function restParametersDemo(a, b, c, ...restOfTheArguments) {
	/*
  here a,b & c are named parameters, and restOfTheArguments is the container to hold all the remaining values passed to that function. 
  previously we are using "arguments" which is by default available in every function to read all the passed values to a function
  It is not mandatory to specify named parameters to a function, you can directly expect the rest parameter to handle every value passed to that function

  * restrictions : 
  *  1. Only one rest parameter can be defined to any function  
  *  2. It has to be the last argument to the declared function
  *  3. It cannot be used in setters of an object or variable
  */
}
