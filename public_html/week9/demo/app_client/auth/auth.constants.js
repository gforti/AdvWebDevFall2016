(function() {
    'use strict';

    angular
        .module('app.auth')
        .constant('AUTH_REQUEST', {
            'Register' : '/api/v1/register/',
            'Login' : '/api/v1/login/'
        });
})();