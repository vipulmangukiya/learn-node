const expect = require('expect');
const util = require('./utils');

// console.log("sum Are:", util.add(10,10));

it('Should Add Two Numbers', () =>{
	var res = util.add(11,9);

	expect(res).toBe(20);

	// if(res !==20) {
	// 	throw new Error(`Expected 20, but got ${res}.`)
	// }
});

it('Should async add two numbers', (done) => {

	util.asyncAdd(11,9, (sum) => {
		expect(sum).toBe(20);
		done();
	});
});

it('Should Square a number', () => {
	var res= util.squre(9);

	// expect(res).toBe(81);

	// expect({name:'Vipul'}).toEqual({name:'Vipul'});

	// expect({name:'vipul'}).toNotEqual({name:'Vipul'});


	// expect([1,2,3,4]).toInclude(5);
	// expect([1,2,3,4]).toExclude(5);

	// if(res !== 81){
	// 	throw new Error(`Expected 81, but got ${res}.`)
	// } 
});