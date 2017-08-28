console.log('Starting Apps.');

const fs   = require('fs');
const os   = require('os');
const note = require('./note.js'); 
const _    = require('lodash');

var user = os.userInfo();

//fs.appendFile('filedemo.txt',`hello  ${user.username} My name ${note.name} Hii `);

// console.log("Sum Are :" + note.add(45,7));

// console.log(_.isString('arg'));


var  fileterArray = _.uniq(['Vipul',2,3,4,5,6,5,4,6]);

console.log(fileterArray);