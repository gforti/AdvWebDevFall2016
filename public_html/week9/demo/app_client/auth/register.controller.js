(function() {

    'use strict';
    angular
        .module('app.auth')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['AuthenticationService', '$location'];
    
    function RegisterController(AuthenticationService, $location) {
        var vm = this;

        vm.credentials = {
            name : '',
            email : '',
            password : ''
        };
        vm.onSubmit = onSubmit;
        
       
        ////////////
        
        function activate() {
            
        }   
        
       function onSubmit() {
            vm.formError = '';
            if (!vm.credentials.name.length || !vm.credentials.email.length || !vm.credentials.password.length ) {
                vm.formError = 'All fields required, please try again';
                return false;
            } else {
                console.log('register');
                register();
            }
        };
        
        function register() {
           AuthenticationService.register(vm.credentials)
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