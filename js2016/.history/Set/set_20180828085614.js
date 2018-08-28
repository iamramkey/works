let set = new Set();

set.add(9);
set.add('9');

console.log(set.size); // 2

//doc: unlike javascript objects any key will be converted to string and then stored into object. Here set will not store like an object but it contains disctinct values without allowing us to add same element again

set.add(+0);
set.add(-0);
console.log(set.size); // 3
//doc: In set +0 & -0 are treated as equal unlike Object.is method

//doc: if you put any variable as a key into an object it will be stringifed and used for storing or retreiving the value.
//doc: Unlike in sets if you store 2 new empty objects it doesnt update to same key. for example
set.add({});
set.add({});
console.log(set.size); // 5
set.delete(9);
console.log(set.size) // 4