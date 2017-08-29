console.log("Starting  apps.js");

const fs 	= require('fs');
const _  	= require('lodash');
const yargs = require('yargs'); 

const note 	= require('./note.js');

var command = process.argv[2];
const argv 	= yargs.argv;


console.log("Command: ",command);
console.log("Yargs: ",argv);


if(command === 'add') {
	
	note.addNote(argv.title, argv.body);

} else if(command === 'list') {
	
	note.getAll();

} else if(command === 'read') {
	
	note.getNote(argv.title);

} else if (command === 'remove') { 

	note.removeNote(argv.title);

} else {
	console.log("Command not recognized");
}


