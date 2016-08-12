'uses strict';

const express = require('express');
const router = express.Router();

const controller = require('./../controllers/login');

router.post('/', controller.autenticacao);

module.exports = router;