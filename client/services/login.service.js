(function() {
    'use strict';
    angular
        .module('Login')
        .service('loginApi', loginApi);

    loginApi.$inject = ['$http', 'config'];

    function loginApi($http, config) {

        var service = {
        	login : login
        }
        return service;

        function login(credencial) {
			return $http.post(config.baseUrl + '/api/login', credencial);
		}

    }
})();