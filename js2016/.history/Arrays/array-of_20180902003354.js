var items = new Array(2);
console.log('TCL: items.length', items.length); // 2
console.log('TCL: items[0]', items[0]); // undefined
console.log('TCL: items[1]', items[1]); // undefined

items = new Array('2');
console.log('TCL: items.length', items.length); // 1
console.log('TCL: items[0]', items[0]); // '2'
console.log('TCL: items[1]', items[1]); // undefined

items = new Array(1, 2);
console.log('TCL: items.length', items.length); // 2
console.log('TCL: items[0]', items[0]); // 1
console.log('TCL: items[1]', items[1]); // 2

items = new Array(3, '2');
console.log('TCL: items.length', items.length); // 2
console.log('TCL: items[0]', items[0]); // 3
console.log('TCL: items[1]', items[1]); // '2'

items = Array.of(1, 2);
console.log('TCL: items.length', items.length); // 2
console.log('TCL: items[0]', items[0]); // 1
console.log('TCL: items[1]', items[1]); // 2

items = Array.of(2);
console.log('TCL: items.length', items.length); // 1
console.log('TCL: items[0]', items[0]); // 2
console.log('TCL: items[1]', items[1]); // undefined

items = Array.of('2');
console.log('TCL: items.length', items.length); // 1
console.log('TCL: items[0]', items[0]); // '2'
console.log('TCL: items[1]', items[1]); // undefined
