(function() {
    'use strict';
    angular
        .module('App', [
            'angular-jwt',
            'Usuario',
            'Login',
            'Home',
            'angularUtils.directives.dirPagination'
        ])
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push("authInterceptor");
        });
})();
