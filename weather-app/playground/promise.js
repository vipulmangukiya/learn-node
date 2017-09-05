var asyncAdd = (a, b) => {
	return new Promise((resolve, reject )=>{
		setTimeout(() =>{
			if(typeof a ==='number' && typeof b ==='number') {
				resolve(a + b);
			} else {
				reject('Areguments must be numbers');
			}
		},1500);	
	});
};

asyncAdd(5,8).then((message) => {
	console.log('Sum Are :' ,message);
}, (errorMessage) => {
	console.log(errorMessage);
});

// var somePromise = new Promise( (resolve, reject) => {
	
// 	setTimeout(()=> {

// 	// resolve('Hey  It Worked !');
// 	reject('Unable to Error handle');
// 	},2000);
// });

// somePromise.then( (message) => {
// 	console.log('Success: ',message);
// }, (errorMessage) => {
// 	console.log('Error: ', errorMessage);
// }); 