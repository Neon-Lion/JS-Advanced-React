// console.log(x); // Can not access 'x' before initialization

// foo(); // Can not access 'foo' before initialization when using const
// foo(); // foo is not a function when using var
bar();

const  foo = function () {
	console.log('foo');
}

function bar() {
	console.log('bar');
}

// let x = 1;

// const baz = new Function() {}