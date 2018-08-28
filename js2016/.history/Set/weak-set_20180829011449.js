let set = new Set();
let item = {};

set.add(item);
console.log('Set', set.size); // 1

//setting item = null
item = null;
console.log('Set', set.size); // 1
//as set has that item where variable value is null we can re populate from set
item = [...set][0];
//as we have value from set assigned back to item now you will get item value
console.log('Set', item); // {}
// doc: we can retrieve the value back from the dead variable/nullified variable
// doc: this should be avoided because whenever variable reference set to null we need to have the same operation in set because set also has same reference.
// doc: this is the problem of basic set or "Strong Set"
// doc: so we have a new datatype called weakset
// doc: WeakSet donot accept primitive values, they only accept any object/reference
// doc: has, delete methods on weakset will always return false for primitive values
// doc: weakset is not iterable, so you cannot use them in for of loop / foreach loop so, there is no way to programatically print out the contents of a weak set
// doc: weakset donot have the size property as well, if you try to get the size it will return undefined

let weakSet = new WeakSet();
let weakItem = {};

weakSet.add(weakItem);
console.log('WeakSet', weakSet.size); // undefined
console.log('WeakSet', weakSet.has(weakItem)); // true
//setting item = null
weakItem = null;
console.log('WeakSet', weakSet.size); // undefined
console.log('WeakSet', weakSet.has(weakItem)); // false
// doc: as the memory reference to the weakItem is set to null, the value in the weakset mark for deletion, and javascript internally handles it.
// doc: there is no way to seek through the process of deletion
// doc: after weakItem is set to null, that item is also is deleted from weakSet, so weakSet dont have that value so it will return false if you try to check for existence.
