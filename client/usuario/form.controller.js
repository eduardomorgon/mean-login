(function()	{
	'use strict';
	angular.module("Usuario")
	.controller('FormController', FormController);
	FormController.$inject = ['usuario', 'usuarioApi', '$location'];

	function FormController (usuario, usuarioApi, $location) {
		var vm = this;
		vm.erro = undefined;
		vm.user = usuario;
		if(!usuario) {
            vm.null = {message: 'Não foi possível encontrar o usuário pesquisado!'};
        }

		vm.salvar = salvar;
		function salvar () {
			var usuario = angular.copy(vm.user);
			var funcao = usuario._id ? 'alterarUsuario' : 'salvarUsuario';
			if(usuario._id && usuario.senha || usuario.senha === ''){
				delete usuario.con_senha;
				delete usuario.senha;
			}
			usuarioApi[funcao](usuario)
			.then(alterarUsuarioComplete)
			.catch(alterarUsuarioFailed);
			function alterarUsuarioComplete(response) {
				if(response.status === 200) {
					$location.path('/usuario/listar');
				}
			}
			function alterarUsuarioFailed(err) {
				console.log(err.data);
				vm.erro = err.data;
			}
		}
	}
})();