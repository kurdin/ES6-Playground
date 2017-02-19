/**
 * From MDN:
 *
 * The function* declaration (function keyword followed by an asterisk) defines a generator function,
 * which returns a Generator object.
 */

function* colorsGenerator() {
  yield 'red';
  yield 'green';
  console.log("Now it will be blue...");
  yield 'blue';
}

const colorGenObject = colorsGenerator();

console.log(colorGenObject.next().value); // red
console.log(colorGenObject.next().value); // green
console.log(colorGenObject.next().value); // Now it will be blue... blue

console.log(colorGenObject.next().value); // undefined!

