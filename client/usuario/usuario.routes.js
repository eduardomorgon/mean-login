(function() {
  'use strict';
  angular
  .module('Usuario')
  .config(config);
  config.$inject = ['$routeProvider', '$locationProvider'];

  function config($routeProvider, $locationProvider) {
    
    
    $routeProvider
        
        .when('/usuario/listar', {
          templateUrl: 'usuario/listar.html',
          controller: 'ListarController',
          controllerAs: 'vm',
          resolve: {
            listaUsuarios : getUsuarios
          },
          authorize : true
        })
        .when('/usuario/novo', {
          templateUrl: 'usuario/form.html',
          controller: 'FormController',
          controllerAs: 'vm',
          resolve: {
            usuario : ()=>{return {}}
          },
          authorize : true
        })
        .when('/usuario/editar/:id', {
          templateUrl: 'usuario/form.html',
          controller: 'FormController',
          controllerAs: 'vm',
          resolve: {
            usuario : getUsuario
          },
          authorize : true
        });
  }



  getUsuario.$inject =  ['usuarioApi', '$route'];
  function getUsuario(usuarioApi, $route) {
    return usuarioApi.getUsuario($route.current.params.id).then(function (data) {
      return data;
    });
  }

  getUsuarios.$inject =  ['usuarioApi', '$route'];
  function getUsuarios(usuarioApi) {
    return usuarioApi.getUsuarios().then(function (data) {
      return data;
    });
  }


})();

