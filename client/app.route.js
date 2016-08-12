(function() {
  'use strict';
  angular
  .module('App')
  .config(config)
  .run(run);
  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
          redirectTo : '/login'
        })
        .when('/404', {
          templateUrl: 'erro/404.html'
        })
        .otherwise({
          redirectTo: '/404'
        });
  }

  function run ($rootScope, $location, auth) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      if (next.authorize) {
        //verificar se ele existe e se é valido
        if (!auth.getToken() || auth.isTokenExirado()) {
          auth.clear();
          event.preventDefault();//cancela o evento
          $rootScope.$evalAsync(function () {
            $location.hash('401').path('/login');
          })
        }
      }
    });
  }

})();

