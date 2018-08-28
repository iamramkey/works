let set = new Set();

set.add(9);
set.add("9");

console.log(set.size); // 2

//doc : unlike javascript objects any key will be converted to string and then stored into object. Here set will not store like an object but it contains disctinct values without allowing us to add same element again