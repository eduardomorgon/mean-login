const bcrypt = require('bcrypt');
const beautifyUnique = require('mongoose-beautiful-unique-validation');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Usuario = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatorio!']
    },
    login: {
        type: String,
        required: [true, 'Login é obrigatorio!'], 
		unique: 'Login já está sendo ultilizado.'
    },
    senha: {
        type: String,
        required: [true, 'Senha é obrigatorio!']
    },
    email: {
        type: String,
        required: [true, 'Email é obrigatorio!'],
        validate: {
                validator: (value)=> {
                    return /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}/.test(value);
                },  
                message: 'Não é um email valido.'
        }
    },
    data_cadastro: {
        type: Date,
        default: Date.now
    }
});

Usuario.plugin(beautifyUnique);

Usuario.pre('save', function (next) {
    var user = this;
    if (this.isModified('senha') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.senha, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.senha = hash;
                next();
            });
        });
    } else {
        return next();
    }
});


 
Usuario.methods.comparaSenha = function (senha, cb) {
    bcrypt.compare(senha, this.senha, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

// console.log(usuario);

module.exports = mongoose.model("Usuarios", Usuario, "Usuarios");