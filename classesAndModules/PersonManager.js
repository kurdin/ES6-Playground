import Person from 'Person';

class PersonManager {

  constructor() {
    this._person1 = new Person("John", 30, ["Football", "Basketball"]);
    this._person2 = new Person("Jenny", 28, ["Reading", "Cinema"]);
    this._allPersons = [this._person1, this._person2];
  }

  addPerson(person) {
    this._allPersons.push(person);
  }

  printPersonNames() {
    this._allPersons.forEach(person => {
      return console.log(person.getName());
    });
  }
}

const _manager = new PersonManager();
_manager.printPersonNames();


