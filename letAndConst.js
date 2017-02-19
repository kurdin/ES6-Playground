/**
 * From MDN:
 *
 * Let: Declare variables that are limited in scope to the block, statement or expression on
 * which they are used. This is unlike the var keyword, which defines a variable globally, or locally to an
 * entire function, regardless of block scope.
 */

function myFunction() {
  let x = "This is the outer X.";
  {
    let x = "This is the inner X.";
    console.log(x)
  }
  console.log(x)
}

/**
 * Output:
 * This is the inner X.
 * This is the outer X.
 */
myFunction();

/**
 * From MDN:
 *
 * Const: Constants are block-scoped, much like variables defined using the let statement.
 * The value of a constant cannot change through re-assignment, and it can't be re-declared.
 */

const MAGIC_VALUE = 5;

export function myOtherFunction() {
  {
    const MAGIC_VALUE = 3;
    console.assert(MAGIC_VALUE === 3, "(Block) Magic value should be 3.")
  }
  console.assert(MAGIC_VALUE === 5, "(Global) Magic value should be 5.")
}

/**
 * Output:
 * Both assertions pass.
 */
myOtherFunction();

