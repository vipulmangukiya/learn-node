var getUser = (id,callback) => {
	var user = {
		id:id,
		name: "Vipul Mangukiya"
	};

	callback(user);
};


getUser(85,(userObject) => {
	console.log(userObject);
});
