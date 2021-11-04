"use strict";
// ---------------------------------------------------------
let pesho = {
    "name": "Neon-Lion",
    age: 23,
    "a-b": "aaabbb",
    1: "one",
    2: function () { console.log(`Hi`); },
    3: function () { return 5; }
}

let arr = ["Pesho", 23, "one"];

console.dir(pesho);
console.dir(arr);
console.dir(pesho["a-b"]);
console.dir(pesho.age);
console.dir(pesho[1]);
let res1 = pesho[2]();
let res2 = pesho[3]();
console.log(`res1 = ${res1}`); // res1 = undefined
console.log(`res2 = ${res2}`); // res2 = 5
// ---------------------------------------------------------
// let arr1 = [5, 2];
// let arr2 = new Array(5, 2);
// console.dir(arr1, arr2);
const foo = function () { return 5; }
console.dir(foo); // [Function: foo]
// ---------------------------------------------------------
let fruits = {
    banana: 1,
    orange: 2,
    apple: 4
}

console.dir(fruits);
// ---------------------------------------------------------
let myArr = [1, 2, 1, 1];
let set = new Set(myArr);
let arr2 = new Array(...set);
console.dir(myArr);
console.dir(set);
console.dir(arr2);
// ---------------------------------------------------------