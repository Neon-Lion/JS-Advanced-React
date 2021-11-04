"use strict";

const car = {
	speed: 200,
	drive() {
		console.log(`${this.manufacturer} is driving with ${this.speed}.`);
	}
};

let ford1 = Object.create(car, {
		manufacturer: {
		  value: 'ford',
		  writable: true
		},
		speed: {
			value: 100,
			writable: false
		}
	}
);

// ford1.speed = 100;
// console.dir(ford1);

ford1 = {
	manufacturer: 'ford',
	speed: 100,
	__proto__: car
};
// ford1.__proto__ = car;

ford1.drive();
ford1.speed = 700;
ford1.drive();