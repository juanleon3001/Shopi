/**
 * this function calculates total price of a new order
 * @param {array} products cartProduct: array of objects
 * @returns {number} Total Price
 */

export const totalPrice = (products) => {
	let sum = 0;
	products.forEach((product) => (sum += product.price));
	return sum;
};
