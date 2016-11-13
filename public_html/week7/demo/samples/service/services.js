(function() {

    'use strict';
    angular
        .module('app.service')
        .factory('PhonesService', PhonesService);

    PhonesService.$inject = ['$http', 'REQUEST'];

    function PhonesService($http, REQUEST) {

        var url = REQUEST.Phones;
        var service = {
            'getPhones': getPhones
        };
        return service;

        ////////////

        function getPhones() {
            return $http.get(url)
                    .then(getPhonesComplete, getPhonesFailed);                    

            function getPhonesComplete(response) { 
                console.log('HTTP Call Complete for getPhones.' , response);
                return response.data;
            }

            function getPhonesFailed(error) {
                console.error('HTTP Call Failed for getPhones.' , error);
                return [];
            }
        }

    }
    
})();