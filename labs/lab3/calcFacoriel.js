"use strict";

// 5! = 5 * 4 * 3 * 2 * 1
// 5! = 5 * 4!

// factoriel(n) = n * factoriel( (n-1) ), n > 0
// factoriel(0) = 1

function factoriel(n) {
	if(n > 0) {
		return n * factoriel(n-1)
	}
	else {
		return 1;
	}
}

console.log( factoriel(5) );
console.log( factoriel(3) );
console.log(3 * factoriel(2));
console.log(2 * factoriel(1));

// f(3) = ?
// a = 3* f(2)?
// b = 2*f(1)