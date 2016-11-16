console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');



// console.log(_.isString(true));
// console.log(_.isString('Sam'));

var filteredArray = _.uniq(['Sam', 1, 'Sam', 1, 2, 3, 4]);
console.log(filteredArray);

//console.log('Result: ', notes.add(4, 7));

// var user = os.userInfo();
// fs.appendFileSync('../out/greetings.txt',`Hello ${user.username}! You are ${notes.age}.`);
