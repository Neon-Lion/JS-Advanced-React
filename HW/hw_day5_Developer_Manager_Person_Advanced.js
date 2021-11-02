// --------------------------- Person constructor ---------------------------
function Person(name, age){
    this.name = name || undefined;
    this.age = age || 0;
}

Person.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
};
// --------------------------- Developer constructor --------------------------
function Developer(name, age, skillset) {
    Person.call(this, name, age);
    this.name = name || 'Anonymous';
    this.age = age || 0;
    this.skillset = skillset || "none";
}
// --------------------------- Manager constructor ---------------------------
function Manager (name, age, managed) {
    Person.call(this, name, age);
    this.name = name || 'Anonymous';
    this.age = age || 0;
    this.managed = managed || "not managed";
}
// --------------------------- Inherit from Person.prototype -----------------
// Developer objects will inherit from Person.prototype
Developer.prototype = Object.create(Person.prototype);
// Manager objects will inherit from Person.prototype
Manager.prototype = Object.create(Person.prototype);
// --------------------------- Override greet() method -----------------------
// for Developer objects
Developer.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    console.log(`I know ${this.skillset}.`);
};
// for Manager objects
Manager.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    process.stdout.write(`I manage `);
    for(let i = 0; i < Developer.length - 1; i++) {
        if(i == Developer.length - 2) {
            process.stdout.write(`${this.managed[i].name}.\n`);
        }
        else {
            process.stdout.write(`${this.managed[i].name}, `);
        }
    }
};
// --------------------------- Create Objects -------------------------------
// Developer instances
const maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
const pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);

// Manager instances
const gates = new Manager('Bill Gates', 43, [maria, pesho]);
// --------------------------- Use the objects -------------------------------
maria.greet();
pesho.greet();
gates.greet();