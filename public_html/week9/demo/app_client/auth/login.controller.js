(function() {

    'use strict';
    angular
        .module('app.auth')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['AuthenticationService', '$location'];
    
    function LoginController(AuthenticationService, $location) {
        var vm = this;

        vm.credentials = {
            email : '',
            password : ''
        };
        vm.onSubmit = onSubmit;
        
       
        ////////////
        
        function activate() {
            
        }   
        
       function onSubmit() {
            vm.formError = '';
            if ( !vm.credentials.email.length || !vm.credentials.password.length ) {
                vm.formError = 'All fields required, please try again';
                return false;
            } else {
                login();
            }
        };
        
        function login() {
           AuthenticationService.login(vm.credentials)
                .then(function(data) {
                    if ( data === true ) {
                        $location.path('/review');
                    } else {
                     vm.formError = data;
                    }
                });
        }
        
       
       
    }

})();