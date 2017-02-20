/**********************************************************************************
 * Default parameters
 *
 * Default function parameters allow formal parameters to be initialized with default
 * values if no value or undefined is passed.
 **********************************************************************************/

function registerPerson(name, age = 25) {
  console.log(`${name} is ${age} years old.`);
}

/* Output: John is 25 years old. */
registerPerson("John");

/* Output: Suzy is 22 years old. */
registerPerson("Suzy", 22);

/**********************************************************************************
 * Rest parameters
 *
 * The rest parameter syntax allows us to represent an indefinite number of arguments
 * as an array - basically varargs?
 **********************************************************************************/

function registerPersonHobbies(name, ...hobbies) {
  console.log(`${name} has the following hobbies: ${hobbies}`);
}

registerPersonHobbies("John", "Football", "Reading", "Jogging");

/**********************************************************************************
 * Rest parameters
 *
 * The spread syntax allows an expression to be expanded in places where multiple
 * arguments (for function calls) or multiple elements (for array literals) or
 * multiple variables  (for destructuring assignment) are expected.
 **********************************************************************************/

function sumOf(x, y, z) {
  return x + y + z;
}

const myArgs = [1, 2, 3];

/* Output: Assertion passes. */
console.assert(sumOf(...myArgs) === 6, "Should be 6.");

const basicColors = ['red', 'green', 'blue'];
const advancedColors = ['purple', 'orange', 'cyan'];

const allColors = [...basicColors, ...advancedColors];

/* Output: [ 'red', 'green', 'blue', 'purple', 'orange', 'cyan' ] */
console.log(allColors);

