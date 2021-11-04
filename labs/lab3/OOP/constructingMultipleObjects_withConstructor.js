"use strict";

// const pesho = {
// 	"name" : "Peter Petrov",
// 	"age" : 23,
// 	"sayHello": function () {
// 		console.log(`name: ${this.name}`);
// 	}
// }

/* ----------------------------- student factory ---------------------------- */
function Student(name, age) {
	// let this={};
	this.name = name;
	this.age = age;
	// return this;
}

const pesho =  new Student("Peter Petrov", 23);
console.log(pesho);