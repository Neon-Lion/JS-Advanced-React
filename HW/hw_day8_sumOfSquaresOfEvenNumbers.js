"use strict";

let input = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const firstReducer  = (previousValue, currentValue) => previousValue + currentValue;
const secondReducer = (previousValue, currentValue) => previousValue + currentValue**2;

// --------------------------- Version 1.1 -------------------------------------------
let evenNumbers = input.filter( x => x % 2 === 0 ); // array for even numbers
let evenNumbersSquared = evenNumbers.map( x => x**2 ); // array for squares of even numbers
let sumOfSquaresOfEvenNumbers = evenNumbersSquared.reduce(firstReducer); // array for the sum of squares of even numbers

console.log(`Version 1`);
console.log(`Even numbers: ${evenNumbers}.`);
console.log(`Squares of even numbers: ${evenNumbersSquared}.`);
console.log(`The sum of squares of even numbers is ${sumOfSquaresOfEvenNumbers}.\n`);
// --------------------------- Version 1.2 -------------------------------------------
let result1 = input
.filter( x => x % 2 === 0 )
.map( x => x**2 )
.reduce(firstReducer); // array for the sum of squares of even numbers

console.log(`Version 2`);
console.log(`Result using reduce method without initialValue: ${result1}.\n`);
// --------------------------- Version 2 -------------------------------------------
let result2 = input
.filter( x => x % 2 === 0 )
.reduce(secondReducer, 0); // array for the sum of squares of even numbers

console.log(`Version 3`);
console.log(`Result using reduce method with initialValue: ${result2}.`);