'uses strict';

const dbConfig = require("./config/database");
const mongoose = require('mongoose');
const Usuario = require('./models/usuario');
const config = require('./config/app');

dbConfig(config.db);


let usuario = {login:'admin', nome:'Administrador', email:'admin@admin.com', senha:'admin'};

Usuario.create(usuario, (err, data) => {

    if(err) {
        console.log('Erro ao dar carga no usuario', err);
        return process.exit(0);
    }
    console.log('Usuario inserido com sucesso', data);
    return process.exit(0);
});

