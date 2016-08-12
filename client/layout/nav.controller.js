(function() {
    'use strict';
	angular
		.module("Usuario")
		.controller('NavController', NavController);
	NavController.$inject = ['auth'];

	function NavController (auth) {
		var vm = this
		vm.usuario = auth.getUsuario();
	}
})();