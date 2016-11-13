(function() {
    
    'use strict';
    angular
        .module('app.sampleDirectiveScope')
        .directive('widget', widget);

    function widget() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'template.html',
            scope: {
                title: '@', //Value only
                spice: '=', // two way value bind
                spicy: '&' //reference to function
            },
            link: link

        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

})();