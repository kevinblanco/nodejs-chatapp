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



