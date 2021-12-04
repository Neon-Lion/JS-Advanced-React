"use strict";

class Person {
    _name;
    _age;

    // Constructor
    constructor(name, age) {
        this._name = name || "Anonymous";
        this._age  = age  || undefined;
        Person.counter();
    }

    // Setters
    set name(name) { this._name = name; }
    set age(age)   {
        // Version 1
        // if(age > 0) 
        //     this._age  = age;
        // else
        //     this._age = this._age;

        // Version 2
        // (age > 0) ? (this._age = age) : (this._age = this._age)
        
        // Version 3
        this._age = (age > 0) ? age : this._age;
    }
    
    // Getters
    get name() { return this._name; }
    get age()  { return this._age;  }

    // static method
    static counter() {
        Person.count += 1;
        console.log(`${Person.count} objects were created.`);
    }

    greet() {
        console.log(`I'm ${this.name}, ${this.age} years old.`);
    }
}

class Developer extends Person {
    constructor(name, age, skills) {
      // call the parent constructor:
      super(name, age)
      this.skills = skills
    }
  
    greet() {
      // call the parent greet() method:
      super.greet();
      console.log(`My skills are: ${this.skills.join()}`);
    }
}

// static (class) property
Person.count = 0;

// Create Objects of class Person
let john = new Person('John', 23);
let mary = new Person('Mary', 20);
let anonymous = new Person();

// Use the objects
john.greet();
mary.age = -20;     // use the age setter
mary.greet();
anonymous.greet();
console.dir(john);

// // Create Objects of class Developer
let dev1 = new Developer('Larry', 25, ['JS','React','Vue'])
dev1.greet();