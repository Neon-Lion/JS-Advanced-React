"use strict";

function update(name, age){
    this.name = name;
    this.age  = age;
}

let maria = {
	name: "Maria",
	age: 18
};

let pesho = {
	name: "Pesho",
	age:13
};

// func.apply(thisArg, [argsArray])
// func.call(thisArg, arg1, arg2, ...)

// Using apply() and call() function
update.apply(maria, ["Maria Popova", 20]);
update.call(pesho, "Petar Popov", 15);

// Using bind() function
const updateMaria = update.bind(maria);
const updatePetar = update.bind(pesho);
updateMaria("Maria Popova", 25);
updatePetar("Petar Popov", 20);

console.dir(maria);
console.dir(pesho);