// doc: weakmaps are used to store weak object references
// doc: In weak map every key must be a object ( not primitive )
// doc: An error is thrown if you try to use a non object key
// doc: WeakMaps are the collection of object references which are held weakly so that they could not interfere with the garbage collection
// doc: when there are no references for a key value pair outside the weakmap that key-value pair removed from the weakmap
// doc: Usage:: When you are creating a particular DOM element by using a plugin, plugin internally creates a cache object with key as unique selector & value is DOM object. If that dom element is no longer available in DOM that object reference needs to be removed from cache memory of that plugin. And looking for existence of all the key value pairs in the plugin cache is a tough task.
// doc: WeakMap doesnt have any clear function to clear the itmes

var weakMap = new WeakMap();

var element = {
	name: 'IamRamKey'
};

weakMap.set(element, 'One Object');

console.log(weakMap.get(element)); // pritns the object
console.log(weakMap.has(element)); // true

// if you set the element to null, the reference in weakmap also removed off internally.
// doc: there is no way to check whether the weakmap has value existing or not but you can think of that javascript engine will remove that key

element = null;

// doc: weak map with initial values

var key1 = {};
var key2 = {};
var weakMapWithInitialValues = new WeakMap([
	[key1, 'IamRamKey'],
	[key2, 'iamramkey']
]);
console.log(weakMapWithInitialValues.has(key1)); // true
console.log(weakMapWithInitialValues.get(key1)); // IamRamKey
console.log(weakMapWithInitialValues.has(key2)); // true
console.log(weakMapWithInitialValues.get(key2)); // iamramkey

weakMapWithInitialValues.delete(key1);
console.log(weakMapWithInitialValues.has(key1)); // false
