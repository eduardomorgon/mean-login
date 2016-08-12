'use strict';

const Usuario = require('./usuario');
const expect = require('chai').expect;

describe('Validação Model Usuario.', () => {
	describe('Campo nome.', () => {
		describe('Deve ser validado caso campo nome.', () => {
			it('Seja vazio', (done) => {
				let usuario = new Usuario();
				usuario.nome = '';
				usuario.validate((err) => {
					expect(err.errors.nome.properties.type).to.be.eq('required');
					done();
				});
			});
		});
	});
	describe('Campo login.', () => {
		describe('Deve ser validado caso campo login.', () => {
			it('Seja vazio', (done) => {
				let usuario = new Usuario();
				usuario.login = '';
				usuario.validate((err) => {
					expect(err.errors.login.properties.type).to.be.eq('required');
					done();
				});
			});
			// it('Seja unico', (done) => {
			// 	let usuario = new Usuario();
			// 	usuario.login = 'teste';
			// 	usuario.validate((err) => {
			// 		console.log(err.errors.login);
			// 		//expect(err.errors.login.properties.type).to.be.eq('required');
			// 		done();
			// 	});
			// });
		});
	});
	describe('Campo senha.', () => {
		describe('Deve ser validado caso campo senha.', () => {
			it('Seja vazio', (done) => {
				let usuario = new Usuario();
				usuario.senha = '';
				usuario.validate((err) => {
					expect(err.errors.senha.properties.type).to.be.eq('required');
					done();
				});
			});
		});
	});
	describe('Campo email.', () => {
		describe('Deve ser validado caso campo email.', () => {
			it('Seja vazio', (done) => {
				let usuario = new Usuario();
				usuario.email = '';
				usuario.validate((err) => {
					expect(err.errors.email.properties.type).to.be.eq('required');
					done();
				});
			});
			it('Seja email valido', (done) => {
				let usuario = new Usuario();
				usuario.email = 'teste@teste.com';
				usuario.validate((err) => {
					expect(err.errors.email).to.be.undefined;
					done();
				});
			});
		});
	});
});