var map = new Map();

var key1 = {},
	key2 = {};

map.add('name', 'IamRamKey');
map.add('username', 'iamramkey');

console.log(map.size); // 2

map.add(key1, 10);
map.add(key2, 6);

console.log(map.size); // 4

console.log(map.has(key1)); // true
console.log(map.has('nonExistingKey')); // false
console.log(map.get(key1)); // 10
console.log(map.get('nonExistingKey')); // undefined

map.delete(key1);
console.log(map.size); // 3

map.clear(); // clear everything in map
console.log(map.size); // 0

var mapWithIntialValues = new Map([
	['name', 'IamRamKey'],
	['username', 'iamramkey'],
	[key1, 10],
	[key2, 6]
]);

console.log(mapWithIntialValues.size); // 4
console.log(mapWithIntialValues.get('name')); // IamRamKey
console.log(mapWithIntialValues.get('username')); // iamramkey
console.log(mapWithIntialValues.get(key1)); // 10
console.log(mapWithIntialValues.get(key2)); // 6
