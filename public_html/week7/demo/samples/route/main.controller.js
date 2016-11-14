(function() {

    'use strict';
    angular
        .module('app.route')
        .controller('MainController', MainController);

    MainController.$inject = ['$route', '$routeParams', '$location'];
    
    function MainController($route, $routeParams, $location) {
        var vm = this;

        vm.$route = $route;
        vm.$location = $location;
        vm.$routeParams = $routeParams;
     
        activate();

        ////////////
        
        function activate() {}
        
    }

})();