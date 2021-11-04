"use strict";

const counter = {
	currentCount : 0,
	tick() {
		this.currentCount++;
		console.log(this.currentCount);
	}
};

// ------------------------------------- Version 1 - Use a wrapping function -------------------------------------
// ------------------------------------- Version 1.1 -------------------------------------------------------------
function countdown1(times) {
	const delay = 1000;
	let x = function () { counter.tick() };
	
	while(times) {
		setTimeout(x, delay * times);
		times--;
	}
}
// ------------------------------------- Version 1.2 - The same as version 1.1, but shorter ----------------------
function countdown2(times) {
	const delay = 1000;
	let counterTick = () => counter.tick();
	
	while(times) {
		setTimeout(counterTick, delay * times);
		times--;
	}
}
// ------------------------------------- Version 2 - Use the apply() function -------------------------------------
function countdown3(times) {
    const delay = 1000;
    while(times) {
        setTimeout(function () { counter.tick.apply(counter) }, delay * times);
		times--;
	}
}
// ------------------------------------- Version 3 - Use the call() function --------------------------------------
function countdown4(times) {
    const delay = 1000;
    while(times) {
        setTimeout(function () { counter.tick.call(counter) }, delay * times);
		times--;
	}
}
// ------------------------------------- Version 4 - Use the bind() function -------------------------------------
// ------------------------------------- Version 4.1 -------------------------------------------------------------
function countdown5(times) {
	const delay = 1000;
	const boundCounterTick = counter.tick.bind(counter);
	
	while(times) {
		setTimeout(boundCounterTick, delay * times);
		times--;
	}
}
// ------------------------------------- Version 4.2 -------------------------------------------------------------
function countdown6(times) {
	const delay = 1000;
	
	while(times) {
		setTimeout(counter.tick.bind(counter), delay * times);
		times--;
	}
}
// ---------------------------------------------------------------------------------------------------------------
countdown1(3);
countdown2(3)
countdown3(3);
countdown4(3);
countdown5(3);
countdown6(3);