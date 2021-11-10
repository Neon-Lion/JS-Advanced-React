"use strict";
// --------------------------- Sort array of strings ------------------------
let users = ["Maria", "Ada", "Ivan"];

let usersSortedAlphabetically = JSON.parse(JSON.stringify(users));
usersSortedAlphabetically.sort();

console.log(`users:\n\t${users}\n`);
console.log(`usersSortedAlphabetically:\n\t${usersSortedAlphabetically}`);

/* -------------------------------------------------------------------------- */
/*                              EXPECTED OUTPUT:                              */
/* -------------------------------------------------------------------------- */
/* 
    users:
        Maria,Ada,Ivan
    usersSortedAlphabetically:
        Ada,Ivan,Maria
*/