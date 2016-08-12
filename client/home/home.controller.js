(function() {
    'use strict';
    angular
        .module('Home')
        .controller('HomeController', HomeController);
    HomeController.$inject = ['auth'];
    /* @ngInject */
    function HomeController(auth) {
        var vm = this;
        vm.usuario = auth.getUsuario();
        activate();
        ////////////////
        function activate() {
        }
    }
})();