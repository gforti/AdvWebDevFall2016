 (function() {

    'use strict'; 
    angular
        .module('app.route', ['ngRoute'])
        .config(config);
  
    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
      $routeProvider.
          when('/', {
              templateUrl: 'partials/home.html',
              controller: 'HomeController',
              controllerAs: 'vm'
          }).
          when('/Book/:bookId', {
              templateUrl: 'partials/book.html',
              controller: 'BookController',
              controllerAs: 'vm'
          }).
          when('/Book/:bookId/ch/:chapterId', {
              templateUrl: 'partials/chapter.html',
              controller: 'ChapterController',
              controllerAs: 'vm'
          }).
          otherwise({
            redirectTo: '/'
          });
    }

})();