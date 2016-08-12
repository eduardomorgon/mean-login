'uses strict';

const express = require('express');
const router = express.Router();
const controller = require('./../controllers/usuario');

const passport	= require('passport');
const auth = require('../config/passport')(passport);

//mesmos parametros usados, nao precisa passar na function. ele entendi.
router.get('/', auth.authenticate(), controller.listar);
router.get('/:id', auth.authenticate(), controller.buscarId);
router.post('/', auth.authenticate(),  controller.salvar);
router.put('/', auth.authenticate(), controller.alterar);
router.delete('/:id', auth.authenticate(), controller.excluir);



module.exports = router;

