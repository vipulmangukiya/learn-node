
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
		console.log("---------------");
		console.log(`Title : ${note.title}`);
		console.log(`Body : ${note.body}`);	
	} else {
		console.log("Note Title Taken");
	}

} else if(command === 'list') {
	
	notes.getAll();

} else if(command === 'read') {
	
	notes.getNote(argv.title);

} else if (command === 'remove') { 

	notes.removeNote(argv.title);

} else {
	console.log("Command not recognized");
}


