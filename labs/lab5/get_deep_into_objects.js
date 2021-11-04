"use strict";

// const obj1 = {
// 	id: 2
// }
// obj1.name = 'test';

// const obj2 = new Object();

// console.dir(obj1);


// function foo(){}

// foo.prototype.id = 1;
// console.dir(foo);
// console.log(typeof(foo.prototype));
// console.log(typeof(foo));


// const arr1 = [1,2,3];
// const arr2 = new Array(1,2,3);
// console.dir(arr1);
// console.dir(arr2);

// const car = {
// 	speed: 100,
// 	drive() {
// 		console.log(`Car is driving with ${this.speed}.`);
// 	}
// }


// const ford = {};
// console.log( ford.toString() );

// console.dir(ford.__proto__ );
// ford.__proto__ = car;
// console.dir(ford.__proto__.speed);

// ford.drive();


// function Car(manufacturer, speed) {
// 	// this = {}
// 	this.manufacturer = manufacturer;
// 	this.speed = speed;
// 	this.drive = function () {
// 		console.log(`${this.manufacturer} is driving with ${this.speed}.`);
// 	}
// 	// return this;
// }


// const car = new Car('ford', 200);
// car.__proto__  = Car.prototype
// console.dir(car);
// console.dir({})

function carFactory(manufacturer, speed) {
	let obj = {}
	obj.manufacturer = manufacturer;
	obj.speed = speed;
	obj.drive = function () {
		console.log(`${this.manufacturer} is driving with ${this.speed}.`);
	};
	return obj
}

const car = carFactory('ford', 200);
// car.__proto__  = Car.prototype
console.dir(car);
console.dir({});
car.drive();