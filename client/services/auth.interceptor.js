(function() {
    'use strict';
	angular
		.module('App')
		.factory('authInterceptor', authInterceptor);
	authInterceptor.$inject = ['$location', 'auth', '$q'];
	function authInterceptor ($location, auth, $q) {
		return {
			request: function(config) {
				config.headers = config.headers || {};
				if (auth.getToken() && !auth.isTokenExirado()) {
					config.headers['Authorization'] = auth.getToken();
				}
				return config;
			},
			responseError: function(response) {
				if (response.status === 401 || response.status === 403) {
					$location.path('/login');
				}
				return $q.reject(response);
			}
		}
	}
})();
