/**
 * @module     App
 * @desc       Main NodeJS App Configuration
 * @author     Kevin Blanco <mail@kevinblanco.io>
 */


/**
 * Variables and Modules declaration
 */
var express = require("express"),
    app     = express(),
    httpS   = require('http').createServer(),
    socket  = require('socket.io'),
    port    = process.env.PORT || 3000,
    server  = app.listen(port);

app.use(express.logger());


app.get('/', function(request, response) {
    response.send('NodeJS Server Running');
});


/**
 * Socket.io Configuration
 */
var io = socket.listen(server);
require('./sockets.js')(io);


app.listen(port, function() {
    console.log("Listening on " + port);
});

exports = module.exports = app
