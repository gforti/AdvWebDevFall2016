(function() {

    'use strict';
    angular
        .module('app.route')
        .controller('BookController', BookController);

    BookController.$inject = ['$routeParams'];
    
    function BookController($routeParams) {
        var vm = this;

        vm.name = "BookController";
        vm.params = $routeParams;
      
        activate();

        ////////////
        
        function activate() {}  
       
    }

})();