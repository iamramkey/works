var map = new Map();

var key1 = {},
	key2 = {};

map.set('name', 'IamRamKey');
map.set('username', 'iamramkey');

console.log(map.size); // 2

map.set(key1, 10);
map.set(key2, 6);

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

// doc: forEach method will print out the way you insert into the map. for example, name -> username -> key1 -> key2

mapWithIntialValues.forEach((value, key, ownerMap) => {
	console.log(
		'value: ',
		value,
		'key: ',
		key,
		'ownerMap === mapWithInitialValues : ',
		ownerMap === mapWithIntialValues
	);
});
