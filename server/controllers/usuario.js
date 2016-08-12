'uses strict';

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Usuario = require('./../models/usuario');
const erroObject = require('./../midlewares/erroObject');

let Controller = {

    alterar : (request, response) => {
        let usuario = request.body;
        if(usuario.senha) {
            usuario.senha = bcrypt.hashSync(usuario.senha, bcrypt.genSaltSync(10));
        }
        Usuario.update({'_id' : usuario._id}, usuario, { runValidators: true }, (err, data) => {
            if(err) {
                let erro = erroObject(err);
                return response.status(400).json(erro);
            } 
            response.status(200).end();   
        })
    },

    buscarId: (request, response) => {
        let _id = request.params.id;
        Usuario.findOne({_id:_id}, (err, data) => {
            console.log(data);
            if(err || !data) {
                return response.status(400).json(err);
            }
            let usuario = data.toObject();
            delete usuario.senha;
            response.status(200).json(usuario);
        });
    },

    excluir: (request, response) => {
        let _id = request.params.id;
        console.log('ID: ',_id);
        Usuario.remove({'_id': _id}, (err, data) => {
            if(err) {
                return response.status(400).json(err);
            }
            response.status(200).end();   
        });

    },

    listar: (request, response) => {
        Usuario.find((err, data) => {
            if(err) {
                return response.status(400).json(err);
            }
            response.status(200).json(data);
        }).sort({ 'nome' : 'asc'});
    },
    
    salvar: (request, response) => {
        let usuario = request.body;
        console.log(usuario);
        Usuario.create(usuario, (err, data) => {
            if(err) {
                let erro = erroObject(err);
                return response.status(400).json(erro);
            }
            response.status(200).json(data);
        });
    }
    
}

module.exports = Controller;