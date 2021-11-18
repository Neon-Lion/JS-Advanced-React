"use strict";

let input = "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.";
let words = input.split(" "); // "words" variable is used in global scope
// --------------------------- Version 1 - using filter() method ---------------------------
console.log(`Version 1 - using filter() method`);

// Version 1.1
// let outputUsingFilter = words.filter(word => word.lastIndexOf('t', 0) === 0 && word.length > 2);

// Version 1.2
let outputUsingFilter = words.filter(word => word.startsWith('t') && word.length > 2);

outputUsingFilter.forEach(word => console.log(word));
// --------------------------- Version 2 - using map() method ------------------------------
console.log(`\nVersion 2 - using map() method`);

// Version 2.1
// let outputUsingMap = words
//                     .filter(word => word.lastIndexOf('t', 0) === 0 && word.length > 2)
//                     .map( word => word );

// Version 2.2
let outputUsingMap = words
                    .filter(word => word.startsWith('t') && word.length > 2)
                    .map(word => word);

outputUsingMap.forEach(word => console.log(word) );
// --------------------------- Version 3 - using forEach method ----------------------------
console.log(`\nVersion 3 - using forEach method`);
function words_starting_with_letter(array, letter) {
    let words = array.split(" "); // "words" variable is used in local scope

    words.forEach(word => {
        // Version 3.1
        // if(word.lastIndexOf(letter, 0) === 0 && word.length > 2) {
        //     console.log(word);
        // }

        // Version 3.2
        if(word.startsWith(letter) && word.length > 2) {
            console.log(word);
        }
    });
}

words_starting_with_letter(input, 't');