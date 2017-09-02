var getUser = (id,callback) => {
	var user = {
		id:id,
		name: "Vipul Mangukiya"
	};
	setTimeout(() => {
		callback(user);
	},2000);
};


getUser(85,(userObject) => {
	console.log(userObject);
});
