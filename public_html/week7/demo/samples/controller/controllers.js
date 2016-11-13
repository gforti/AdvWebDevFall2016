(function() {

    'use strict';
    angular
        .module('app.sampleController')
        .controller('MyController', MyController);

    MyController.$inject = [];
    
    function MyController() {
        var vm = this;

        vm.customSpice = "wasabi";
        vm.spice = 'very';
        vm.spicy = function(spice) {
            vm.spice = spice;
        };

    }

})();