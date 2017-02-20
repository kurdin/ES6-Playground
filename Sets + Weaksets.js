/**********************************************************************************
 * Set
 *
 * The Set object lets you store unique values of any type, whether primitive values
 * or object references.
 **********************************************************************************/

const mySet = new Set();
mySet.add('red').add(12).add(25.7);

/* Output: Both assertion pass. */
console.assert(mySet.size === 3);
console.assert(mySet.has('red'));

/* Output: red, 12, 25.7 */
console.log(...mySet);


// TODO: WeakSets