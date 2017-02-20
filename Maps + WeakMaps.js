/**********************************************************************************
 * Map
 *
 * The Map object is a simple key/value map.
 * Any value (both objects and primitive values) may be used as either a key or a value.
 **********************************************************************************/

const myMap = new Map();
myMap.set('white', '#ffffff');
myMap.set('A', 12);

/* Output: All assertions pass. */
console.assert(myMap.size === 2);
console.assert(myMap.has('white'));
myMap.delete('white');
console.assert(!myMap.has('white'));

/* Output: MapIterator { ['A', 12] } */
console.log(myMap.entries());
/* Output: ['A', 12] */
console.log(...myMap);

// TODO: WeakMaps

