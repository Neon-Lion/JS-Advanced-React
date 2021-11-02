// create 'Car' constructor
var Car = function(manufacturer, speed){
    this.manufacturer = manufacturer || undefined;
    this.speed = speed || 100;
};

Car.prototype = {
    drive: function(){
        if (this.wings >= 2) {
            console.log(`Flying wiht ${this.speed} km/h`);
        }
        else {
            console.log(`Driving wiht ${this.speed} km/h`);
        }
    }
};
  
// create 'Ford' constructor
var Ford = function(speed){
    var manufacturer = 'Ford';
    // use the parent constructor
    Car.apply(this, [manufacturer, speed]);
};

// set the prototype chain
Ford.prototype.__proto__ = Car.prototype;

// create 'ford' object
var ford = new Ford(200);
ford.drive();

// create 'theFordOfPesho' object
var theFordOfPesho = new Ford(300);
theFordOfPesho.wings = 2;
theFordOfPesho.drive();