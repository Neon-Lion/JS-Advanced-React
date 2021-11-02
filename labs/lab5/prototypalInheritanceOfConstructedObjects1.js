function CarConstructor(){};

CarConstructor.prototype.sayHello = function () {
  console.log(`Hello from CarConstructor.prototype`);
}
// creating objects with Constructor will set the "__proto__" to the Constructor.prototype
var constructedCar = new CarConstructor();

constructedCar.sayHello();
// Hello from CarConstructor.prototype
// ----------------------------------------------------------------------------------------------------------
var Car = function(manufacturer, speed){
  this.manufacturer = manufacturer || undefined;
  this.speed = speed || 100;
};

Car.prototype = {
  showInfo() {
    console.log(`This car\'s manufacturer is ${this.manufacturer}.`);
    console.log(`This car\'s speed is ${this.speed}.`);
  }
};

// create 'FabricatedCar' constructor
var FabricatedCar = function () {
  console.log(`New car was fabricated.`);
};

// set the prototype chain
FabricatedCar.prototype.__proto__ = Car.prototype;

// create 'ford' object
var ford = new FabricatedCar();
ford.manufacturer = "Ford";
ford.speed = 250;
ford.showInfo();
console.log();

// create 'renault' object
var renault = new FabricatedCar();
renault.manufacturer = "Renault";
renault.speed = 300;
renault.showInfo();