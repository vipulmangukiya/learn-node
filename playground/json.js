// var obj = {
// 	name:'Vipul'
// };


// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);

// console.log(stringObj);



// var personString = '{"name": "Vipul","age":"23"}';
// var person  	 = JSON.parse(personString);

// console.log(typeof personString);

// console.log(person);


const fs = require('fs');

var originalNotes = {
	title: "Title By Vipul",
	body : "Vipul Mangukiy"
};

var  originalNoteString = JSON.stringify(originalNotes); 
fs.writeFileSync('note.json', originalNoteString);

var noteString  = fs.readFileSync('note.json');
var note = JSON.parse(noteString);

console.log( typeof note);
console.log(note.title);