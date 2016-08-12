(function() {
  'use strict';
  angular
  .module('Home')
  .config(config);
  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
        .when('/home', {
          templateUrl : 'home/home.html',
          controller : 'HomeController',
          controllerAs : 'vm',
          authorize : true
        });
  }

})();

