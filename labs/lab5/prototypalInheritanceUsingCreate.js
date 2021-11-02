// create 'car' object
var car = {
    manufacturer: undefined,
    speed: 100,
    drive: function() {
        if (this.wings >= 2) {
            console.log(`Flying wiht ${this.speed} km/h`);
        }
        else {
            console.log(`Driving wiht ${this.speed} km/h`);
        }
    }
};

// create 'renault' and make it to inherit from 'car'
var renault = Object.create(car, {});

// create 'ford' and make it to inherit from 'car'
var ford = Object.create(car, {
    manufacturer: {value: "Ford"},
    speed: {value: 200},
});

// create 'theFordOfPesho' and make it to inherit from 'ford'
var theFordOfPesho = Object.create(ford, {
    wings: { value: 2 },
    speed: { value: 300 },
});

renault.drive();
ford.drive();
theFordOfPesho.drive();