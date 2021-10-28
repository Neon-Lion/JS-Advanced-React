"use strict";
// ---------------------------------------------------------
// Primitives are immutable

// Objects are mutable
let xArr = [1];
let yArr = xArr;

console.log(xArr, yArr);

yArr[0] = 5;

console.log(xArr, yArr);
// ---------------------------------------------------------
const prices = [2, 3, 4];
const backup = prices;
console.log(`backup: ${backup}`); // backup = [2, 3, 4]

prices.splice(1, 1);

console.log(`prices: ${prices}`); // prices = [2, 4]
console.log(`backup: ${backup}`); // backup = [2, 4]
// ---------------------------------------------------------
function foo(y) {
    y[0] = 5;
    console.log(`y in main: ${y}`); // y in main: 5
}

let x = [1];
foo(x);
console.log(`x in main: ${x}`); // x in main: 5
// ---------------------------------------------------------