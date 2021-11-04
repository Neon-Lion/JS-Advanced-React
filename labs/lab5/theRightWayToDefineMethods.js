"use strict";
/* --------------------------- with Constructor Function --------------------------------------------------------- */
// function Car(model, speed) {
// 	this.model = model;
// 	this.speed = speed;
// 	// this.drive(){}
// }
// --------------------------- Methods defined on Car's prototype property ---------------------------------------
// Car.prototype = {
// 	'drive': function () {
// 		console.log(`${this.model} is driving with ${this.speed}.`);
// 	},
// 	'stop': function () {
// 		console.log(`${this.model} stop!!!`);
// 	}
// };

// Car.prototype.drive = function () {
// 	console.log(`${this.model} is driving with ${this.speed}.`);
// };
// Car.prototype.stop = function () {
// 	console.log(`${this.model} stopped!!!`);
// };
// --------------------------- Create Objects -------------------------------------------------------------------
// let car1 = new Car('car1', 100);
// let car2 = new Car('car2', 200);
// let car3 = new Car('car3', 300);
// console.dir(car1.__proto__);
// --------------------------------------------------------------------------------------------------------------
// console.log( car1.drive === car2.drive ); // true
// console.log( { id:1 } === { id:1 } ); // false
// --------------------------- Use the objects ------------------------------------------------------------------
// car1.drive();
// car2.drive();
// car3.drive();
// car1.stop();
// car2.stop();
// car3.stop();
/* --------------------------- with Factory Function ------------------------------------------------------------ */
function carFactory(model, speed) {
	let obj = {};
	obj.model = model;
	obj.speed = speed;
	obj.__proto__ = carFactory.prototype;
	return obj;
}
// --------------------------- Methods defined on carFactory's prototype property -------------------------------
carFactory.prototype.drive = function () {
	console.log(`${this.model} is driving with ${this.speed}`);
};
// --------------------------- Create Objects -------------------------------------------------------------------
let car1 = carFactory('car1', 100);
let car2 = carFactory('car2', 200);
let car3 = carFactory('car3', 300);
// --------------------------------------------------------------------------------------------------------------
console.dir(car1.__proto__);

console.log( car1.drive === car2.drive ); // true
console.log( { id:1 } === { id:1 } ); // false
// --------------------------- Use the objects ------------------------------------------------------------------
car1.drive();
car2.drive();
car3.drive();