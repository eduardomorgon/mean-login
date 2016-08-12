(function() {
    'use strict';
	angular
		.module('Usuario')
		.factory('usuarioApi', usuarioApi); 
	usuarioApi.$inject = ['$http', 'config'];

	function usuarioApi($http, config) {
		var service = {
			getUsuarios: getUsuarios,
			salvarUsuario: salvarUsuario,
			excluirUsuario: excluirUsuario,
			getUsuario : getUsuario,
			alterarUsuario : alterarUsuario,
			novoUsuario : novoUsuario
		};

		return service;

		function novoUsuario() {
			var user = {};
			return user ;
		}

		function getUsuarios() {
			return $http.get(config.baseUrlUsuario)
			.then(getUsuariosComplete)
			.catch(getUsuariosFailed);
			function getUsuariosComplete(response) {
				return response.data;
			}
			function getUsuariosFailed(error) {
				console.log('Erro: ', error.data);
			}
		};

		function salvarUsuario (usuario) {
			return $http.post(config.baseUrlUsuario, usuario);
		};

		function excluirUsuario(id) {
			return $http.delete(config.baseUrlUsuario+id);
		}

		function getUsuario(id) {
			return $http.get(config.baseUrlUsuario+id)
			.then(getUsuarioComplete)
			.catch(getUsuarioFailed);
			function getUsuarioComplete(response) {
				return response.data;
			}
			function getUsuarioFailed(error) {
				console.log('Erro: ', error.data);
			};
		}

		function alterarUsuario(usuario) {
			return $http.put(config.baseUrlUsuario, usuario);
		}
	};
})();