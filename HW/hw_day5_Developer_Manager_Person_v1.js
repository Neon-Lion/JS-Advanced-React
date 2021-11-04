"use strict";
// --------------------------- Person constructor ----------------------------
function Person(name, age) {
    this.name = name || undefined;
    this.age = age || 0;
}

Person.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};
// --------------------------- Developer constructor --------------------------
function Developer(name, age, skillset) {
    // reuse the Person Constructor
    Person.call(this, name, age);
    // this.name = name || 'Anonymous';
    // this.age = age || 0;
    this.skillset = skillset || "none";
}
// --------------------------- Manager constructor ---------------------------
function Manager (name, age, managed) {
    // reuse the Person Constructor
    Person.call(this, name, age);
    // this.name = name || 'Anonymous';
    // this.age = age || 0;
    this.managed = managed || "not managed";
}
// --------------------------- Inherit from Person.prototype -----------------
// Developer objects will inherit from Person.prototype
Developer.prototype = Object.create(Person.prototype);
// Manager objects will inherit from Person.prototype
Manager.prototype = Object.create(Person.prototype);
// --------------------------- Create Objects --------------------------------
// Developer instances
const maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
const pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);

// Manager instances
const gates = new Manager('Bill Gates', 43, [maria, pesho]);
// --------------------------- Use the objects -------------------------------
maria.greet();
pesho.greet();
gates.greet();