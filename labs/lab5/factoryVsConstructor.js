function CarConstructor(){};

CarConstructor.prototype.sayHello=function () {
  console.log(`Hello from CarConstructor.prototype.`);
}
// creating objects with Constructor will set the "__proto__" to the Constructor.prototype
var constructedCar = new CarConstructor();

constructedCar.sayHello();
//Hello from CarConstructor.prototype

function CarFactory(){
  return {}
};

CarFactory.prototype.sayHello = function () {
  console.log(`Hello from CarFactory.prototype.`);
};

// creating objects with factory will NOT set the "__proto__" to the Factory.prototype
var fabricatedCar = CarFactory();

fabricatedCar.sayHello();
//TypeError: fabricatedCar.sayHello is not a function