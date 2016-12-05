(function() {

    /* we have our service handler here to access the reviews API*/
    
    'use strict';
    angular
        .module('app.auth')
        .factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['$http', 'AUTH_REQUEST', '$window'];

    function AuthenticationService($http, AUTH_REQUEST, $window) {

        var loginUrl = AUTH_REQUEST.Login,
            registerUrl = AUTH_REQUEST.Register;
    
        var service = {
            'currentUser' : currentUser,
            'saveToken' : saveToken,
            'getToken' : getToken,
            'isLoggedIn' : isLoggedIn,
            'register' : register,
            'login' : login,
            'logout' : logout
        };
        return service;

        ////////////

        function saveToken(token) {
            $window.localStorage.setItem('loc8r-token', token);
        }

        function getToken() {
            return $window.localStorage.getItem('loc8r-token');
        }
        
        function logout() {
            $window.localStorage.removeItem('loc8r-token');
        }
        
        function isLoggedIn() {
            var token = getToken();

            if(token){
              var payload = JSON.parse($window.atob(token.split('.')[1]));
              return payload.exp > Date.now() / 1000;
            } else {
              return false;
            }
        }
        
        function currentUser() {
            if( isLoggedIn() ){
              var token = getToken();
              var payload = JSON.parse($window.atob(token.split('.')[1]));
              return {
                email : payload.email,
                name : payload.name
              };
            }
        }

        function register(user) {
            return $http.post(registerUrl, user)
                    .then(success, failed);                    

            function success(response) {
                saveToken(response.data.token);
                return true;
            }

            function failed(error) {
                return 'Sorry could not Register this user';
            }
        }
        
        function login(user) {
            return $http.post(loginUrl, user)
                    .then(success, failed);                    

            function success(response) {
                saveToken(response.data.token);
                return true;
            }

            function failed(error) {
                return 'Sorry could not Login';
            }
        }

    }
    
})();