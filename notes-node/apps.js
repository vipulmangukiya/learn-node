
const fs 	= require('fs');
const _  	= require('lodash');
const yargs = require('yargs'); 

const notes 	= require('./note.js');

var command = process.argv[2];
const argv 	= yargs.argv;


// console.log("Command: ",command);
// console.log("Yargs: ",argv);


if(command === 'add') {
	
	var note = notes.addNote(argv.title, argv.body);

	if(note) {
		console.log("Note Created Successfully..");
		notes.logNote(note);
	} else {
		console.log("Note Title Taken");
	}

} else if(command === 'list') {
	
	notes.getAll();

} else if(command === 'read') {
	
	var note = notes.getNote(argv.title);

	if(note) {
		console.log("Note was find Successfully..");
		notes.logNote(note);
	} else {
		console.log("Note Title not found");
	}

} else if (command === 'remove') { 

	var noteRemove = notes.removeNote(argv.title);
	var message = noteRemove ? 'Note Was Remove' : 'Note waa not found'
	
	console.log(message);



} else {
	console.log("Command not recognized");
}


