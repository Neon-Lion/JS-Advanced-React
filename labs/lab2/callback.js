"use strict";

function caller(callback, x, y) {
    console.log(`I will call your callbackunction`);
    callback(x, y);
}

function sum(x, y) {
    console.log(`sum of f{x} and {y} is ${x + y}.`);
}

caller(sum, 2, 3);