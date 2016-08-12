(function() {
    'use strict';
	angular
		.module('App')
		.factory('auth', auth);
	auth.$inject = ['$location', '$window', 'config', 'jwtHelper'];
	function auth ($location, $window, config, jwtHelper) {

		var service = {
			 clear : clear
			,getToken: getToken
			,getUsuario : getUsuario
			,isTokenExirado : isTokenExirado
			,logout : logout
			,setToken: setToken
		}

		return service;

		function clear() {
			$window.localStorage.clear();
		}

		function getToken() {
			return $window.localStorage.accessToken;
		}

		function getUsuario() {
			var decode = jwtHelper.decodeToken(getToken());
			return decode;
		}
		
		function isTokenExirado() {
			if(getToken()) {
				return jwtHelper.isTokenExpired(getToken());
			}
			return false;
		}

		function logout () {
			clear();
			$location.path('/login');
		}

		function setToken(token) {
			$window.localStorage.accessToken = token; // manten o token ate ele expirar
			//$window.sessionStorage.accessToken;//manten o token ate a aba fechar
		}
	};
})();