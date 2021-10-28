/* ------------------------------- Scope demo ------------------------------- */
// let x = 1;

// function foo() {
// 	let x = 2;
// 	function bar() {
// 		let x = 3;
// 		console.log(`x in bar: ${x}`); // 3
// 	}

// 	bar();
// 	console.log(`x in foo: ${x}`); // 2
// }

// foo();
// console.log(`x in Global: ${x}`); // 1

/* ------------------------------ Closures demo ----------------------------- */
function foo() {
	let x = 2;
	function bar() {
		console.log(`x in bar: ${x}`); // 2
	}

	return bar;
}

// Call bar in main:
// let f = bar(); // bar is not defined
// f();

let x = function () {
	console.log(`x in bar: ${2}`); // 2
}

x();