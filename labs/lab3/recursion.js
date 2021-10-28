let tries = 5;

function foo(x) {
	// x++;
	console.log(`x = ${x}`);
	x++;
	tries--;

	if (tries) {
		foo(x);
	}
	// foo(5)
	console.log(`tries = ${tries}`);
}

foo(1);

// x = 1
// x = 2
