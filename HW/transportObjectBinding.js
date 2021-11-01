"use strict";

// Mock transport object
var transport = {
    on: function(event, callback) {
        setTimeout(callback, 3000);
    }
};

// ---------------------------------------------- Version 1 ----------------------------------------------
// Store a reference to context/this inside another variable
function MyConstructor(data, transport) {
    this.data = data;
    var self = this;
    transport.on('data', function () { console.log(self.data); });
}
// ---------------------------------------------- Version 2 - Use the bind() function --------------------
// ---------------------------------------------- Example 1 ----------------------------------------------
function MyConstructor2(data, transport) {
    this.data = data;
    transport.on('data', (function () {
        console.log(this.data); 
    }).bind(this));
}
// ---------------------------------------------- Example 2 ----------------------------------------------
function MyConstructor3(data, transport) {
    this.data = data;
    var boundFunction1 = (function () {
        console.log(this.data);
    }).bind(this);
    transport.on('data', boundFunction1);
}
// ---------------------------------------------- Example 3 ----------------------------------------------
function MyConstructor4(data, transport) {
    this.data = data;
    var boundFunction2 = function () { console.log(this.data); };
    transport.on('data', boundFunction2.bind(this));
}
// ---------------------------------------------- Version 3 - Arrow function -----------------------------
function MyConstructor5(data, transport) {
    this.data = data;
    transport.on('data', () => { console.log(this.data); });
}

// called as
var foo1 = new MyConstructor('foo1', transport);
var foo2 = new MyConstructor2('foo2', transport);
var foo3 = new MyConstructor3('foo3', transport);
var foo4 = new MyConstructor4('foo4', transport);
var foo5 = new MyConstructor5('foo5', transport);