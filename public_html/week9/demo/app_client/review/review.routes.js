 (function() {

    'use strict'; 
    angular
        .module('app.review')
        .config(config);
  
    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
      $routeProvider.
          when('/review', {
              templateUrl: '/review/review-home.view.html',
              controller: 'ReviewHomeController',
              controllerAs: 'vm'
          }).
          when('/add', {
              templateUrl: '/review/review-form.view.html',
              controller: 'ReviewCreateController',
              controllerAs: 'vm'
          }).
          when('/update/:id', {
              templateUrl: '/review/review-form.view.html',
              controller: 'ReviewUpdateController',
              controllerAs: 'vm'
          }).
          otherwise({
            redirectTo: '/review'
          });
    }

})();