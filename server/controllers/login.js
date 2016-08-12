'uses strict';

const mongoose = require('mongoose');
const Usuario = require('./../models/usuario');
const jwt = require('jsonwebtoken');
const config = require('../config/app');

let Controller = {
    autenticacao : (request, response) => {
        console.log('login:', request.body);
        Usuario.findOne({
            login: request.body.login
        }, function(err, data) {
            if (err) {
                throw err;
            }
            if (!data) {
                response.status(401).send({ success: false, message: 'Falha na autenticação.' });
            } else {
            // Check if password matches
                data.comparaSenha(request.body.senha, function(err, isMatch) {
                    if (isMatch && !err) {
                    // Create token if the password matched and no error was thrown
                        let usuario = data.toObject();
                        delete usuario.senha;

                        let token = jwt.sign(usuario, config.secret,{
                                expiresIn: '10h' // in seconds
                            });
                        response.json({ success: true, token: 'JWT ' + token });
                    } else {
                        response.status(403).json({ success: false, message: 'Falha na autenticação, usuário/senha está incorreto.' });
                    }
                });
            }
        });
    }
};

module.exports = Controller;