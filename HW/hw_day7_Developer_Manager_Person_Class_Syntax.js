// --------------------------- class Person ----------------------------------
class Person {
    constructor(name, age) {
        this._name = name || undefined;
        this._age  = age  || 0;
    }

    // Setters
    set name(name) { this._name = name; }
    set age(age)   { this._age  = age;  }

    // Getters
    get name() { return this._name; }
    get age()  { return this._age;  }

    greet() {
        console.log(`Hi, I'm ${this._name} and I'm ${this._age} years old.`);
    }
}
// --------------------------- class Developer -------------------------------
class Developer extends Person {
    constructor(name, age, skillset) {
        // call the parent constructor:
        super(name, age);
        this.skillset = skillset || "none";
    }

    greet() {
        super.greet();
        console.log(`I know ${this.skillset}.`);
    }
}
// --------------------------- class Manager ---------------------------------
class Manager extends Person {
    constructor(name, age, managed) {
        super(name, age);
        this.managed = managed || "not managed";
    }

    greet() {
        super.greet();
        console.log(`I manage ${this.managed.map(e => e.name)}.`);
    }
}
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