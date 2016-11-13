(function() {

    'use strict';
    angular
        .module('app.service')
        .factory('PhonesService', PhonesService);

    PhonesService.$inject = ['$http'];

    function PhonesService($http) {

        var url = '../../data/phones.json';
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