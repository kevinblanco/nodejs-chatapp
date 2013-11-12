/**
 * @module     App
 * @desc       Main NodeJS App Configuration
 * @author     Kevin Blanco <mail@kevinblanco.io>
 */


var express = require('express')
    ,fs     = require('fs')
    ,socket = require('socket.io');


var app = express()

// Start the app by listening on <port>
var port = process.env.PORT || 3000,
    server = app.listen(port);

//Setting up socket.io
var io = socket.listen(server);
require('./sockets.js')(io);

console.log('OK! We are running at '+ port);

// expose app
exports = module.exports = app