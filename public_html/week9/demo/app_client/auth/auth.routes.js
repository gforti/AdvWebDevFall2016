 (function() {

    'use strict'; 
    angular
        .module('app.auth')
        .config(config);
  
    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
      $routeProvider.
          when('/login', {
              templateUrl: '/auth/login.view.html',
              controller: 'LoginController',
              controllerAs: 'vm'
          }).
          when('/register', {
              templateUrl: '/auth/register.view.html',
              controller: 'RegisterController',
              controllerAs: 'vm'
          });
    }

})();