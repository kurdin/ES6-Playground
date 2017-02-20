/**
 * Only ONE 'export default' per module.
 */

export default class Person {

  constructor(name, age, interests) {
    this._name = name;
    this._age = age;
    this._interests = interests;
  }

  getName() {
    return this._name;
  }

  getAge() {
    return this._age;
  }

  getInterests() {
    return this._interests;
  }

  addInterest(interest) {
    this._interests.push(interest);
  }
}
