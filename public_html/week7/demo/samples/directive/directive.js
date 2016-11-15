(function() {
    
    'use strict';
    angular
        .module('app.sampleDirective')
        .directive('myClickable', myClickable);

    myClickable.$inject = [];
     
    function myClickable() {
        var directive = {
            restrict: 'EA',
            scope: {},
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
           
            element.css({
             border: '1px solid red',
             backgroundColor: 'lightgrey',
             cursor: 'pointer'
            });

            element.on('click', function(event) {
              // Prevent default function of selected content
              event.preventDefault();
              element.append('<p>Element Clicked on</p>');
            });

        }
    }
  
})();