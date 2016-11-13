(function() {

    'use strict';
    angular
        .module('app.sampleDirectiveScope')
        .controller('SampleDirectiveScopeController', SampleDirectiveScopeController);

    SampleDirectiveScopeController.$inject = [];
    
    function SampleDirectiveScopeController() {
        var vm = this;

        vm.title = "Widget title";
        vm.spice = 'very';
        vm.spicy = function(spice) {
            vm.spice = spice;
        };

    }

})();