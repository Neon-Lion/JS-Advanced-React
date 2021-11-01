"use strict";

const counter = {
	currentCount : 0,
	tick() {
		this.currentCount++;
		console.log(this.currentCount);
	}
}

// ------------------------------------- Version 1 - Use a wrapping function -------------------------------------
// ------------------------------------- Version 1.1 -------------------------------------------------------------
function countdownByOneSec(times) {
	const delay = 1000;
	let x = function () { counter.tick() }
	
	while(times) {
		setTimeout(x, delay * times);
		times--;
	}
}
// ------------------------------------- Version 1.2 - The same as version 1.1, but shorter ----------------------
function countdownByTwoSecs(times) {
	const delay = 2000;
	let counterTick = () => counter.tick();
	
	while(times) {
		setTimeout(counterTick, delay * times);
		times--;
	}
}
// ------------------------------------- Version 2 - Use the bind() function -------------------------------------
function countdownByThreeSecs(times) {
	const delay = 3000;
	const boundCounterTick = counter.tick.bind(counter);
	
	while(times) {
		setTimeout(boundCounterTick, delay * times);
		times--;
	}
}

countdownByOneSec(2);
countdownByTwoSecs(3)
countdownByThreeSecs(4);