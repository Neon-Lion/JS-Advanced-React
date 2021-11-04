"use strict";

// Animal constructor
var Animal = function(food){
    this.food = food;
};

// Version 1
Animal.prototype.eat = function () {
    console.log(`${this.name} is eating ${this.food}.`);
};
// Version 2 - Not a good way to do that
// Animal.prototype = {
//     eat() { console.log(`${this.name} is eating ${this.food}.`); }
// };
  
// Cat constructor
var Cat = function(name, food) {
    // reuse the Animal Constructor
    Animal.call(this, food);
    this.name = name || 'Tom';
}

// Cat objects will inherit from Animal.prototype
Cat.prototype = Object.create(Animal.prototype);
  
// Cat instance
var tom = new Cat('Tom', 'cheese');
tom.eat();