(function() {	
	'use strict';
	angular
		.module("Usuario")
		.controller('ListarController', ListarController);
	ListarController.$inject = ['listaUsuarios', 'usuarioApi', 'auth'];

	function ListarController (listaUsuarios, usuarioApi, auth) {

		var vm = this;
		vm.listaUsuarios = listaUsuarios;
		vm.idUsuario = auth.getUsuario()._id;

		function activate() {
			return getUsuarios().then(function () {
				console.log('Lista Usuarios Carregada');
			})
		}

		function getUsuarios() {
			return usuarioApi.getUsuarios()
				.then(getUsuariosComplete)
				.catch(getUsuariosFailed);
			function getUsuariosComplete(data) {
				vm.listaUsuarios = data;
	         	return vm.listaUsuarios;
			}
			function getUsuariosFailed(error) {
				console.log('error', error.status);
			}
		}

		vm.excluir = excluir;
		function excluir(id) {
			if(window.confirm('Deseja excluir?') ) {
				usuarioApi.excluirUsuario(id)
					.then(excluirUsuarioComplete)
					.catch(excluirUsuarioFailed);
				function excluirUsuarioComplete(response) {
					if(response.status === 200) {
						activate();
					}
				}
				function excluirUsuarioFailed(err) {
					console.log('error', error);
				}
			}
		}
	}
})();