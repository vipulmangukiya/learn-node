console.log('Starting Apps.');

const fs   = require('fs');
const os   = require('os');
const note = require('./note.js'); 

var user = os.userInfo();

//fs.appendFile('filedemo.txt',`hello  ${user.username} My name ${note.name} Hii `);

console.log("Sum Are :" + note.add(45,7));