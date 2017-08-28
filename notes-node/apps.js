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
	console.log("Listing Data");
} else if(command === 'read') {
	console.log("Reading Note");
} else if (command === 'remove') { 
	console.log('Remove Note')
} else {
	console.log("Command not recognized");
}


