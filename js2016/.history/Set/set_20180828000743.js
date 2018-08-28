let set = new Set();

set.add(9);
set.add("9");

console.log(set.size); // 2

//doc : unlike javascript objects any key will be converted to string and then stored into object. Here set will not store like an object but it contains disctinct values without allowing us to add same element again

set.add(+0);
set.add(-0);
console.log(set.size); // 3
//doc: In set +0 & -0 are treated as equal unlike Object.is method