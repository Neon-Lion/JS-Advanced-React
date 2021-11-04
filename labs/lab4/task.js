"use strict";

function Constructor() {
	this.objectsCount = 0;

	function countObjects(that) {
		that.objectsCount++;
	};

	this.sayHello = function () {
		countObjects(this);
		if(this.objectsCount === 1)
			console.log(`I'm new obj.`);
		console.log(`I'm obj ${this.objectsCount}.`);
	};
}


var obj1 = new Constructor();
var obj2 = new Constructor();

obj1.sayHello();
obj1.sayHello();
obj1.sayHello();
obj1.sayHello();
obj1.sayHello();
obj1.sayHello();
obj2.sayHello();

// console.log(window.objectsCount);