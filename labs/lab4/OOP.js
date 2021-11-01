let obj = {
	name : "Joe",
	"user-age" : 23
}

console.log(obj.name);
console.log(obj["user-age"]);

/* ------------------------ Shorthand property names: ----------------------- */
// First dev
let firstDevName = "Larry";
let firstDevAge = 20;

let firstDev = { firstDevName, firstDevAge };
// Second dev
let secondDev = {
	secondDevName : "Mary",
	secondDevAge : 25
};
/* --------------------------------- Methods -------------------------------- */
// Third dev
let thirdDevName = "Mark";
let thirdDevAge = 30;

let thirdDev = {
	thirdDevName,
	thirdDevAge,
	greet() { console.log(`Hello, ${this.thirdDevName}!`); }
};

console.log(firstDev);
console.log(secondDev);
console.log(thirdDev);
thirdDev.greet();