const express = require('express');
const { loginGet, loginPost, loginPut, loginDelete } = require('../controller/login.controller');
const Loginrouter = express.Router();

Loginrouter.post('/add',loginPost);
Loginrouter.get('/data',loginGet);
Loginrouter.put('/edit/:id',loginPut);
Loginrouter.delete('/new-data/:id',loginDelete);

module.exports = Loginrouter;
