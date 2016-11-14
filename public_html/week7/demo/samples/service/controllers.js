(function() {

    'use strict';
    angular
        .module('app.service')
        .controller('MyController', MyController);

    MyController.$inject = ['PhonesService'];
    
    function MyController(PhonesService) {
        var vm = this;
        vm.phones = [];
        
        activate();

        ////////////
       
        function activate() {
           console.log('activate Started');
           
            PhonesService.getPhones()
                .then(function(data) {
                    vm.phones = data;
                    console.log('Activated phones');
                    console.log(vm.phones);
                });            
        }   
           
    }

})();