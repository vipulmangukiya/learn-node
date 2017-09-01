
const fs 	= require('fs');
const _  	= require('lodash');
const yargs = require('yargs'); 

const notes 	= require('./note.js');

var command = process.argv[2];

const titleOptions = {
		describe: 'Title of note',
		demand: true,
		alias: 't'
	};
const bodyOptions =  { 
		describe: 'Body of the note',
		demand: true,
		alias: 'b'	
	};
const argv 	= yargs
				.command('add','Add a new note',{
					title:titleOptions,
					body:bodyOptions
				})
				.command('list','List all notes')
				.command('remove','Remove a note',{
					title:titleOptions
				})
				.command('read','Reading a note',{
					title:titleOptions
				})
				.help()
				.argv;


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
	
	var allNotes = notes.getAll();

	console.log(`Printing ${allNotes.length} nods(s).`);

	allNotes.forEach((note) => notes.logNote(note));

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
	var message = noteRemove ? 'Note Was Remove' : 'Note was not found'
	
	console.log(message);


} else {
	console.log("Command not recognized");
}


 