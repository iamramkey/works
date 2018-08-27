console.log('+0 == -0', +0 == -0); // true
console.log('+0 === -0', +0 === -0); // true
console.log('Object.is(+0, -0)', +0 === -0); //false

console.log('NaN == NaN', NaN == NaN); // false
console.log('NaN === NaN', NaN === NaN); // false
console.log('Object.is(NaN, NaN', Object.is(NaN, NaN)); // true
