(function() {

    'use strict';
    angular
        .module('app.route')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$routeParams'];
    
    function HomeController($routeParams) {
        var vm = this;

        vm.name = "HomeController";
        vm.params = $routeParams;

        activate();

        ////////////
        
        function activate() {}
        
    }

})();