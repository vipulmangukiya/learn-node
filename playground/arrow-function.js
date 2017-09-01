var square = (x) => x * x;


console.log(square(9));


var user = {
	name: "Vipul",
	sayHi: () => {
		// console.log(arguments); it no take argument 
		// console.log(`Hi ${this.name} Mangukiya`); // it not refer this  keyword to current object 
		// those case use the below function arrow function doesn't support this way 
	},
	sayHiAlt () {
		console.log(arguments);
		console.log(`I'm ${this.name}`);
	}
}; 


user.sayHiAlt(1,2,3);