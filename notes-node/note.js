console.log("Starting notes JS");

module.exports.name ="Vipul Mangukiya";

module.exports.add = (a,b) => {

	return a + b; 
}

var addNote = (title,body) => {
	console.log('Adding note :',title, body);
};

module.exports = {
	addNote	
	//addNote:addNote;
};