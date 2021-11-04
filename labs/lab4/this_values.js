"use strict";

const userName = "Larry";

function setSalary(newSalary){
	this._salary =newSalary;
}

function getSalary() {
	console.dir(this._salary);
}

let firstDev = {
	userName,
	"_salary": 1000,
    setSalary,
	getSalary
};

firstDev.getSalary(); // 1000
firstDev.setSalary(1200);
firstDev.getSalary(); // 1200

// console.log(window._salary);

function foo() {
	console.log(`This in Foo: ${this}`);
	return 90;
}

let testObj = new foo(); // This in Foo: [object Object]
console.log(`testObj:`); // testObj:
console.dir(testObj); // foo {}
console.dir({}); // {}

function Constructor(id) {
	this.id = id;
	console.log(`this in constructor: ${this}`); // obj1

	this.showID = function () {
		console.log(`ID: ${id}`);
		console.log(`this in a method: ${this}`);
	};
};

var obj1 = new Constructor(1); // this in constructor: [object Object]
obj1.showID();  // ID: 1
                // this in a method: [object Object]
// Constructor.showID();

class A {
    method1() {
        console.log(`this in method: ${this}`);
    }
    static staticMethod() {
        console.log(`this in static method: \n${this}`);
    }
}

let obj = new A();

obj.method1();    // this in method: [object Object]
A.staticMethod(); // this in static method: