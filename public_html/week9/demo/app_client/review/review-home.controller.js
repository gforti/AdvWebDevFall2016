(function() {

    'use strict';
    angular
        .module('app.review')
        .controller('ReviewHomeController', ReviewHomeController);

    ReviewHomeController.$inject = ['ReviewService', '$window', 'AuthenticationService'];
    
    function ReviewHomeController(ReviewService, $window, AuthenticationService) {
        var vm = this;

        vm.reviews = [];
        vm.deleteReview = deleteReview;
        vm.message = '';
        vm.isLoggedIn = AuthenticationService.isLoggedIn();
        activate();

        ////////////
        
        function activate() {
            
            getReviews();
            
        }   
        
        function getReviews() {
            ReviewService.getReviews()
                .then(function(data) {
                    vm.reviews = data;
                });
        }
        
        /* This is a simple way but the popup can be disabled so be aware */
        function deleteReview(_id) {
            var confirm = $window.confirm('are you sure?');
            if ( confirm ) {
                ReviewService.deleteReview(_id)
                    .then(function(msg) {
                         vm.message = msg;
                         getReviews();
                    });
            }
        }
       
    }

})();