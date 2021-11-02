// create 'car' object
var car = {
    manufacturer: undefined,
    speed: 100,
    drive: function () {
        if (this.wings >= 2) {
            console.log(`Flying with ${this.speed} km/h.`);
        }
        else {
            console.log(`Driving with ${this.speed} km/h.`);
        }
    }
};
  
// create the 'ford' object
var ford = {
    // make 'ford' to inherit from 'car'
    __proto__: car,
    manufacturer: "Ford",
    speed: 200,
};
  
// create 'theFordOfPesho' object
var theFordOfPesho = {
    // make 'theFordOfPesho' to inherit from 'ford'
    __proto__ : ford,
    wings: 2,
    speed: 300,
};
  
ford.drive();
theFordOfPesho.drive();