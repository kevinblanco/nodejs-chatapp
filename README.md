# NodeJS Backend for a Chat App with Socket.io #

Sourcecode of the backend for the chatapp using NodeJS, Socket.io and Express. The front-end is on a separate repositoty using AngularJS.

## Sockets ##


	connection
###### Main socket to init a connection ######


---

	register
###### Register on the chat list, it should receive an username. `emit` an Object with the list of all users registered on the chat room. ######

---

	all
###### `emit` a message to everyone registered on the chat room  ######

---

	whispering
###### `emit` a private message to an specific registered user  ######

---

	list
###### `emit` an Object with all the users registered on the chat room  ######

---

### Note ###

This app is hosted at Nodejistu, so the implementation is according the Jitsu guideliness. To host this app on another service (such as Heroku) you might need to change a bit the code to work properly. Heroku does not support websockets natively so read the docummentation depending on the service you are using.
