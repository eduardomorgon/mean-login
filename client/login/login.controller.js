(function() {
    'use strict';
    angular
        .module("Login")
        .controller('LoginController', LoginController);
    LoginController.$inject = ['$location', 'loginApi', 'auth', '$scope'];

    function LoginController($location, loginApi, auth, $scope) {
        var vm = this;
        vm.fazerLogin = fazerLogin;
        vm.usuarioLogado = {};

        function activate() {
            if ($location.hash() && $location.hash() === '401') vm.erro = {
                message: 'Favor fazer o login.'
            };
        }

        function fazerLogin() {

            loginApi.login(vm.form)
                .then(
                    function(response) {
                        auth.setToken(response.data.token);
                        vm.form = {};
                        if (response.status === 200) {
                            $location.hash('').path('/home');
                        }
                    }
            )
                .catch(
                    function(err, status) {
                        vm.erro = {
                            message: (err.status < 0 ? 'Não foi possivel se comunicar com o servidor.' : err.data.message)
                        };
                        auth.clear();
                        vm.form = {};
                    }
            );
        }

        activate();

    }
})();