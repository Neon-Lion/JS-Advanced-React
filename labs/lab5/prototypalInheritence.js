"use strict";
/* ----------------------- Object literals inheritence ---------------------------------------------------- */
// const car = {
// 	speed: 200,
// 	drive() {
// 		console.log(`${this.manufacturer} is driving with ${this.speed}.`);
// 	}
// }

// const ford2 = {
// 	manufacturer: 'ford',
// 	speed: 100,
// }

// ford2.__proto__ = car;

// ford2.drive();
/* ------------------------- Constructor inheritence ------------------------------------------------------ */
// --------------------------- Car constructor ------------------------------------------------------------
function Car(manufacturer, speed) {
	console.log(`A car: ${manufacturer} with ${speed} is constructed!`);
	this.manufacturer = manufacturer;
	this.speed = speed;
}
// ----------------------------- Methods defined on Car's prototype property ------------------------------
Car.prototype.drive = function () {
	console.log(`${this.manufacturer} is driving with ${this.speed}.`);
};
// ----------------------------- Ford constructor ---------------------------------------------------------
function Ford(manufacturer, speed) {
	Car.call(this, manufacturer, speed);
}
// ----------------------------- Methods defined on Ford's prototype property -----------------------------
Ford.prototype = Object.create(Car.prototype);

// Not a good way to do that
// Ford.prototype = {
// 	'stop': function () {
// 		console.log(`${this.model} stopped!!!`);
// 	}
// };

Ford.prototype.stop = function () {
	console.log(`Stopped!!`);
};
// ----------------------------- BMW constructor ---------------------------------------------------------
function BMW(manufacturer, speed, color) {
	Car.call(this, manufacturer, speed)
	this.color = color;
}
BMW.prototype = Object.create(Car.prototype);
// --------------------------- Create Objects ------------------------------------------------------------
const ford1 = new Ford('ford', 200);
const bmw1  = new BMW('bmw', 200, 'red');
// --------------------------- Use the objects -----------------------------------------------------------
ford1.drive();
bmw1.drive();
ford1.stop();