"use strict";

// const pesho = {
// 	"name" : "Peter Petrov",
// 	"age" : 23,
// 	"sayHello": function () {
// 		console.log(`name: ${this.name}`);
// 	}
// }

/* ----------------------------- student factory ---------------------------- */
function studentFactory(name, age) {
	let obj = {};

	// make "name" private property
	let _name = name;

	obj.age = age;

	obj.setName = function(name) {
		if(name.length <= 1){
			console.log('can not have 1 letter name');
		}
		else {
			_name = name;
		}
	}

	obj.getName = function () {
		return _name;
	}

	return obj;
}

const pesho = studentFactory("Peter Petrov", 23)

// pesho.setName('Asen')
pesho.name = "Asen"


console.log(pesho.getName());