"use strict";

function foo() {}

// foo.prototype.id = '1';

foo.prototype = {
	id: 1
}

console.dir(foo.prototype);
console.dir({});