// create 'car' object
var car = {
    manufacturer: undefined,
    speed: 100,
    drive: function() {
        if (this.wings >= 2) {
            console.log(`Flying with ${this.speed} km/h.`);
        }
        else {
            console.log(`Driving with ${this.speed} km/h.`);
        }
    }
};

// create 'renault' and make it to inherit from 'car'
var renault = Object.create(car, {});

// create 'ford' and make it to inherit from 'car'
var ford = Object.create(car, {
    manufacturer: { value: "Ford", writable: false },
    speed: { value: 200, writable: true },
});

// create 'theFordOfPesho' and make it to inherit from 'ford'
var theFordOfPesho = Object.create(ford, {
    wings: { value: 2, writable: false },
    speed: { value: 300, writable: true },
});

renault.drive();
ford.drive();
theFordOfPesho.drive();