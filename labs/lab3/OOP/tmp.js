const pesho = {
	"name" : "Peter Petrov",
	"age" : 23,
	"sayHello": function() {
		console.log(`name: ${this.name}`);
	}
}


const menager1 = {
	"name": "Ivan Ivanov",
	"orderStudent": function () {
		pesho.sayHello()
	}
}

menager1.orderStudent()