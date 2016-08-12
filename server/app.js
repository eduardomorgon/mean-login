'use strict';

const bodyParser = require('body-parser');
const config = require('../config/app');
const dbConfig = require("./config/database");
const express = require('express');
const logger = require('morgan');
const passport	= require('passport');


let app = express();

//Conectar ao banco de dados mongodb
//dbConfig('mongodb://localhost/dbusuario');
dbConfig(config.db);

app.use(logger('dev'));
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
       
let loginApiRota = require('./routes/login');
app.use('/api/login', loginApiRota);

let usuarioApiRota = require('./routes/usuario');
app.use('/api/usuarios', usuarioApiRota);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

let server = app.listen(3000);
console.log('Servidor Express iniciado na porta %s', server.address().port);

