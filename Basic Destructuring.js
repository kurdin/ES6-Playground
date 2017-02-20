/**********************************************************************************
 * Basic Destructuring
 *
 * Destructuring is a convenient way of extracting multiple values from data stored
 * in (possibly nested) objects and Arrays.
 **********************************************************************************/

/* ----- Object destructuring ----- */

const colors = { black: '#000000', white: '#FFFFFF' };
const { black, white } = colors;

console.log(black); // #000000
console.log(white); // #FFFFFF

const { A } = { A: 7, B: 20 };
/* A === 7 */
console.assert(A === 7);

const { A: aaa } =  { A: 7, B: 20 };
/* aaa === 7 */
console.assert(aaa === 7);

/* ----- Array destructuring ----- */

const myArray = ['red', 'green', 'blue'];
/**
 * Output:
 * Index 0 -> red
 * Index 1 -> green
 * Index 2 -> blue
 */
for (const [index, value] of myArray.entries()) {
  console.log(`Index ${index} -> ${value}`);
}

const [first, second] = myArray;

/* Output: Both assertions pass. */
console.assert(first === 'red');
console.assert(second === 'green');

