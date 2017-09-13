module.exports.add = (a,b) => a + b ;

module.exports.squre = (x) => x * x; 

module.exports.asyncAdd = (a,b, callback) => {

	setTimeout(() => {
		callback( a + b);

	},1000);
};

module.exports.setName = (user,fullName) => {
	var names = fullname.split(' ');

	user.firstName = names[0];
	user.lastname  = name[1];

	return user;
};