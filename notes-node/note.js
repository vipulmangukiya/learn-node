console.log("Starting notes JS");

module.exports.name ="Vipul Mangukiya";

module.exports.add = (a,b) => {

	return a + b; 
}

var addNote = (title,body) => {
	console.log('Adding note :',title, body);
};

var getAll = () => {
	console.log("GetAll notes");
}

var getNote = (title) => {
	console.log("Getting Notes ", title);
}

var removeNote = (title) => {
	console.log("REmoving Note",title);
}

module.exports = {
	addNote,	 //addNote:addNote;
	getAll,
	getNote,
	removeNote
};