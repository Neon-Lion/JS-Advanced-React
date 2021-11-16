"use strict";

const products = [
	{
		code:1,
		name:"product1",
		category: "music",
		price:1
	},
	{
		code:2,
		name:"product2",
		category: "books",
		price:2
	},
	{
		code:3,
		name:"product3",
		category: "books",
		price:3
	},
	{
		code:4,
		name:"product4",
		category: "music",
		price:4
	}
]

/* -------------------------------------------------------------------------- */
/*                                   TASK1:                                   */
/* -------------------------------------------------------------------------- */
// Total price of all products
function calcTotalPrice(products) {
    // Version 1 - using only reduce() method
    let totalPrice = products.reduce((acc, curr) => acc + curr.price, 0);
    
	// Version 2 - using map() and reduce() methods
    // let prices = products.map(product => product.price);
    // let totalPrice = prices.reduce((acc, curr) => acc + curr);
    
	return totalPrice;
}

// TEST
let totalPrice = calcTotalPrice(products);
console.log(`The sum of all products prices: ${totalPrice}.`);

// EXPECTED OUTPUT:
// 10

/* -------------------------------------------------------------------------- */
/*                                   TASK2:                                   */
/* -------------------------------------------------------------------------- */
function calcTotalPriceByCategory(products, category) {
	// Version 1 - return the total price
	return products
	.filter(product => product.category === category)
	.reduce((acc, curr) => acc + curr.price, 0);

	// Version 2 - using variable for the products from selected category and variable for the total price
	// let productsFromSelectedCategory = products.filter(product => product.category === category);
	// let totalPriceByCategory = productsFromSelectedCategory.reduce((acc, curr) => acc + curr.price, 0);
	// return totalPriceByCategory;
}

// TEST
let totalPriceByCategoryMusic = calcTotalPriceByCategory(products, 'music');
let totalPriceByCategoryBooks = calcTotalPriceByCategory(products, 'books');

console.log(`Total price by category \`music\` ${totalPriceByCategoryMusic}.`);
console.log(`Total price by category \`books\` ${totalPriceByCategoryBooks}.`);

// EXPECTED OUTPUT:
// 5
// 5