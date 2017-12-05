const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
	
	it('the input data is zero',function() {
		var inputs = [0,0];
		var result = main(inputs);
		expect(result).toEqual(0);
	});
	it('the input data kilometer is less than 2',function() {
		var inputs = [2,0];
		var result = main(inputs);
		expect(result).toEqual(6);
	});
	it('the input data kilometer is more than 2 but less tha 8',function() {
		var inputs = [5,0];
		var result = main(inputs);
		expect(result).toEqual(8);
	});
	it('the input data kilometer is more than 8',function() {
		var inputs = [10,0];
		var result = main(inputs);
		expect(result).toEqual(13);
	});
	it('the input data kilometer is more than 8 and waiting time is 5 minutes ',function() {
		var inputs = [10,5];
		var result = main(inputs);
		expect(result).toEqual(14);
	});
});
