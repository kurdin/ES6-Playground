/**
 * From MDN:
 *
 * Arrows are a function shorthand using the "=>" syntax.
 * They support both statement block bodies as well as expression bodies which return the value of the expression.
 * Unlike functions, arrows share the same lexical "this" as their surrounding code.
 *
 * Two factors influenced the introduction of arrow functions: shorter functions and non-binding of this.
 */

/* --- Shorter functions --- */

const italianMenu = [
  'Pasta',
  'Lasagna',
  'Pizza'
];

const frenchMenu = [
  'Bagguette',
  'Fromage',
  'Croissant'
];

let menuFoodCharacters = (menu) => menu.map(food => console.log(food.length));

/**
 * Output:
 * 5, 7, 5
 */
menuFoodCharacters(italianMenu);

/**
 * Output:
 * 9, 7, 9
 */
menuFoodCharacters(frenchMenu);

/** --- No binding of 'this' --- */

/* - Before the fat arrow functions - */

let person = {
  _name: "John",
  _hobbies: ['football', 'reading', 'jogging'],
  sayHobbies() {
    this._hobbies.map(function(hobby) {
      console.log(`${this._name} likes to do ${hobby}.`);
    });
  }
};

/**
 * Output:
 * undefined likes to do football.
 * undefined likes to do reading.
 * undefined likes to do jogging.
 */
person.sayHobbies();

/* - With ES6' fat arrows - */

let person2 = {
  _name: "John",
  _hobbies: ['football', 'reading', 'jogging'],
  sayHobbies() {
    this._hobbies.map(hobby => console.log(`${this._name} likes to do ${hobby}.`));
  }
};

/**
 * Output:
 * John likes to do football.
 * John likes to do reading.
 * John likes to do jogging.
 */
person2.sayHobbies();

