(function() {
	angular
		.module('App')
		.value('config', {
		baseUrl: 'http://localhost:3000',
		get baseUrlUsuario () {
			return this.baseUrl+'/api/usuarios/';
		}
	});
})();
