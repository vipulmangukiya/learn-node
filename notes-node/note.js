
const fs = require('fs');

//module.exports.name ="Vipul Mangukiya";

// module.exports.add = (a,b) => {

// 	return a + b; 
// }

var fetchNote = () => {
	try{

		var noteString = fs.readFileSync('node-data.json'); // if file not exists it will file error with out try case
		return JSON.parse(noteString);

	}catch(e){
		return [];
	}
};

var saveNote = (notes) => {
	fs.writeFileSync('node-data.json', JSON.stringify(notes));	///save file
};

var addNote = (title,body) => {
	var notes = fetchNote();
	var note = {
		title,
		body
	};
	
	var dupalicateNotes = notes.filter((note) => note.title === title); // check title already or not in JOSN filr
	
	if(dupalicateNotes.length === 0) {
		notes.push(note);
		saveNote(notes);
		return note;	
	}  
};

var getAll = () => {
	return fetchNote();
}

var getNote = (title) => {
	var notes = fetchNote();

	var filterNotes = notes.filter((note) => note.title === title);

	return filterNotes[0];
}

var removeNote = (title) => {
	var notes = fetchNote();
	var filterNotes = notes.filter((note) => note.title !==title);
	saveNote(filterNotes);

	return notes.length !== filterNotes.lenght;
}
var logNote = (note) => {
	debugger;
	console.log("---------------");
	console.log(`Title : ${note.title}`);
	console.log(`Body : ${note.body}`);	
};

module.exports = {
	addNote,	 //addNote:addNote;
	getAll,
	getNote,
	removeNote,
	logNote
};