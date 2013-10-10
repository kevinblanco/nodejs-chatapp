/**
 * @module     Socket.io
 * @desc       Socket.io Configuration
 * @author     Kevin Blanco <mail@kevinblanco.io>
 */


var _ = require('lodash');

module.exports = function (io) {

    var socket_list = {},
        CHAT_KEY = 'CHAT';

    /**
     * On connection with the Socket.io
     */
    io.sockets.on('connection', function(socket) {
        socket.join(CHAT_KEY);

        //On registering...
        socket.on('chat:register',function(userName,callback){
            socket.nickname = userName;
            callback(true);
            socket_list[socket.nickname] = socket;
            //... emit the users list
            socket.emit('chat:list',Object.keys(socket_list));
        });

        //On Wispering...
        socket.on('chat:whispering',function(data){
            socket_list[data.destinateUser].emit('chat:whisper',
                {
                    body    : '['+socket.nickname+']' + data.menssageToUser,
                    user    : socket.nickname,
                    date    : new Date()
                });
        });

        //On Chat all send a message to everyone on the chat
        socket.on('chat:all',function(data){
            io.sockets.emit('chat:message',
                {
                    body: data.menssageToUser,
                    user: data.userName,
                    date: new Date()
                });
        });

        //On Chat List
        socket.on('chat:list',function(callback){
            callback(Object.keys(socket_list));
        });
    });
}