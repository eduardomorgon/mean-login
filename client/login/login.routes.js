(function() {
  'use strict';
  angular
  .module('Login')
  .config(config);
  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/login', {
          templateUrl: 'login/login.html',
          controller: 'LoginController',
          controllerAs: 'vm'
        })
        .when('/logout', {
          resolve : {
            logout : function (auth) {
              auth.logout();
            }
          }
        })
        
  }

  

})();

