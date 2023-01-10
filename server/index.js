const express = require('express');
const myApp = express();
const connectToDB = require('./db');
const PORT = 8000;
const Usersrouter = require('./route/users.route');
const Loginrouter = require('./route/login.route');


//Database Connecting
connectToDB();

//Allowing JSON Objects
myApp.use(express.json());

myApp.use('/users',Usersrouter);
myApp.use('/login',Loginrouter);

myApp.listen(PORT, console.log("Server Is Running On Port",PORT));