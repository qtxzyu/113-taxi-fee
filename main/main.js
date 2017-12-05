module.exports = function main(input) {
	var price;
	var kilo = input[0];
	var time = input[1];
	price = time * 0.25;
	if (kilo === 0) {
		price = 0;
	} else if (kilo <= 2) {
		price += 6;
	} else if (kilo <= 8) {
		price += 6 + (kilo - 2) * 0.8;
		price = Math.round(price);
	} else {
		price += 10.8 + (kilo - 8) * 1.2;
		price = Math.round(price);
	}
    return price;
};