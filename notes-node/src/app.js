console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

console.log('Result: ', notes.add(4, 7));

// var user = os.userInfo();
// fs.appendFileSync('../out/greetings.txt',`Hello ${user.username}! You are ${notes.age}.`);