// "use strict";

function foo() {
    let x = 0;
    console.log(x);
}

foo(); // 0

class A {}

let x = 5;

// x = "a";

// Check the data type
console.log(typeof x);   // number
console.log(typeof foo); // function
console.log(typeof A);   // function

let student1 = {
    "name": "Neon-Lion",
    "age": 23,
    "foo": function foo() {
        console.log("Foo");
    }
}

// Using object
student1.id = 1;
student1.foo();           // Foo
console.log(student1);    // { name: 'Neon-Lion', age: 23, foo: [Function: foo], id: 1 }
console.log(student1.id); // 1

// Using string
let str = "a";
str.id = 1;
console.log(str.id); // undefined or Cannot create property 'id' on string 'a' at Object.<anonymous> when using strict

// Using String object
let strObj = new String("a");
let res  = strObj.repeat(5);
let res2 = str.repeat(5);
let res3 = (new String("a")).repeat(5);
let res4 = "a".repeat(5);

console.log(res, res2, res3, res4); // aaaaa aaaaa aaaaa aaaaa
console.log(typeof str);            // string
console.log(typeof strObj);         // object

let y = "5";

console.log(x + 5);   // 10
console.log(y + 5);   // 55 as string
console.log(5 * "5"); // 25
console.log(5 * "a"); // NaN
console.log("a".toUpperCase()); // A