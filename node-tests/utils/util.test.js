const util = require('./utils');

// console.log("sum Are:", util.add(10,10));

it('Should Add Twi Numbers', () =>{
	var res = util.add(11,9);

	if(res !==20) {
		throw new Error(`Expected 20, but got ${res}.`)
	}
});

it('Should Square a number', () => {
	var res= util.	squre(9);

	if(res !== 81){
		throw new Error(`Expected 81, but got ${res}.`)
	} 
});