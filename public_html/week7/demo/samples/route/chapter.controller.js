(function() {

    'use strict';
    angular
        .module('app.route')
        .controller('ChapterController', ChapterController);

    ChapterController.$inject = ['$routeParams'];
    
    function ChapterController($routeParams) {
        var vm = this;

        vm.name = "ChapterController";
        vm.params = $routeParams;

        activate();

        ////////////
        
        function activate() {}  
    }

})();