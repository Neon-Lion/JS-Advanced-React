"use strict";

let tries = 5;

function foo(x) {
	// x++;
	console.log(`tries = ${tries}`);
	console.log(`x = ${x}`);
	x++;
	tries--;

	if (tries) {
		foo(x);
	}
}

foo(1);

// x = 1
// x = 2