(function() {

    /* we have our service handler here to access the reviews API*/
    
    'use strict';
    angular
        .module('app.review')
        .factory('ReviewService', ReviewService);

    ReviewService.$inject = ['$http', 'REQUEST', 'AuthenticationService'];

    function ReviewService($http, REQUEST, AuthenticationService) {

        var url = REQUEST.Reviews;
        var service = {
            'getReviews' : getReviews,
            'getReview' : getReview,
            'deleteReview' : deleteReview,
            'addReview' : addReview,
            'updateReview' : updateReview,
        };
        return service;

        ////////////

        function getReviews() {
            return $http.get(url, tokenHeader())
                    .then(getComplete, getFailed);                    

            function getComplete(response) { 
                return response.data;
            }

            function getFailed(error) {
                return [];
            }
        }
        
         function getReview(_id) {
            var oneUrl = url + '/' + _id;
            return $http.get(oneUrl, tokenHeader() ).then(getComplete, getFailed);                    

            function getComplete(response) { 
                return response.data;
            }

            function getFailed(error) {
                return [];
            }
        }
        
        function deleteReview(_id) {
            var delUrl = url + '/' + _id;
            
            return $http.delete(delUrl, tokenHeader() )
                    .then(getComplete, getFailed);                    

            function getComplete(response) { 
                return 'Delete Completed';
            }

            function getFailed(error) {
                return 'Delete Failed';
            }
        }
        
        
        function addReview(data) {            
            return $http.post(url, data, tokenHeader() )
                    .then(getComplete, getFailed);                    

            function getComplete(response) { 
                return 'Review Added';
            }

            function getFailed(error) {
                return 'Review Add Failed';
            }
        }
        
        function updateReview(_id, data) {
            var updateUrl = url + '/' + _id;
            
            return $http.put(updateUrl, data, tokenHeader() )
                    .then(getComplete, getFailed);                    

            function getComplete(response) { 
                return 'Review Updated';
            }

            function getFailed(error) {
                return 'Review Update Failed';
            }
        }
        
        
        function tokenHeader() {
            return {
                'headers': {
                  'Authorization': 'Bearer '+ AuthenticationService.getToken()
                }
            };
        }
        

    }
    
})();