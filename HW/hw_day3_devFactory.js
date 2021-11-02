"use strict";
// -------------------------------- Version 1 --------------------------------
let devFactory = function(name, salary){
    let obj = {};
    let _name = name
    let _salary = salary;

    // Set methods
    obj.setName = function(_name) {
        (_name.length <= 1) ? (console.log('can not have 1 letter name')) :
            (_name = _name); };
    obj.setSalary = function(_salary) {
        (_salary != 0) ? (_salary = _salary) :
            ( _salary = 0); };

    // Get methods
    obj.getName   = function () { return _name;   };
    obj.getSalary = function () { return _salary; };

    // Increase salary method
    obj.increaseSalary = function(incrValue, pass) {
        (pass == 'abracadabra') ? _salary = obj.getSalary() + incrValue :
            console.log(`Wrong password! ${obj.getName()} salary will not be increased!`);
    };

	return obj;
}
// -------------------------------- Version 2 --------------------------------
class Person {
    #name;
    #salary;

    // Constructor
    constructor(name, salary) {
        this.#name = name;
        this.#salary = salary;
    }

    // Set methods
    setName(name) {
        (name.length <= 1) ? (console.log('can not have 1 letter name')) :
            (this.#name = name); };
    setSalary(salary) {
        (salary != 0) ? (this.#salary = salary) :
            (this.#salary = 0); };

    // Increase salary method
    increaseSalary(incrValue, pass) {
        (pass == 'abracadabra') ? (this.#salary = this.getSalary() + incrValue) : 
            (console.log(`Wrong password! ${this.getName()} salary will not be increased!`));
    }

    // Get methods
    getName()   { return this.#name;   };
    getSalary() { return this.#salary; };
}

// -------------------------------- Version 1 example --------------------------------
let dev1 = devFactory('Peter', 1000);
let dev2 = devFactory('Maria', 1200);

console.log(`${dev1.getName()} salary is ${dev1.getSalary()}`);
console.log(`${dev2.getName()} salary is ${dev2.getSalary()}`);

dev1.increaseSalary(500, 'abracadabra');
dev2.increaseSalary(100, '123');

console.log(`${dev1.getName()} salary after promotion is ${dev1.getSalary()}.`);
console.log(`${dev2.getName()} salary after promotion is ${dev2.getSalary()}.`);
console.log();
// -------------------------------- Version 2 example --------------------------------
let peter = new Person('Peter', 1000);
let maria = new Person('Maria', 1200);

console.log(`${peter.getName()} salary is ${peter.getSalary()}`);
console.log(`${maria.getName()} salary is ${maria.getSalary()}`);

peter.increaseSalary(500, '123');
maria.increaseSalary(100, 'abracadabra');

console.log(`${peter.getName()} salary after promotion is ${peter.getSalary()}.`);
console.log(`${maria.getName()} salary after promotion is ${maria.getSalary()}.`);
// ----------------------------------------------------------------------------------