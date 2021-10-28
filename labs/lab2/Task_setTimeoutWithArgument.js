function greet(userName) {
    return function() { console.log(`Hello, ${userName}!`); }
}

setTimeout(function () { console.log('Hello'); }, 2000);

// Version 1
setTimeout(greet("Ada"), 2000);
setTimeout(greet("Pesho"), 2000);

// Version 2
setTimeout(greet, 2000, "Ada");
setTimeout(greet, 2000, "Pesho");