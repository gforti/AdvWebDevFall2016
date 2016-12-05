(function() {

    'use strict';
    angular
        .module('app.review')
        .controller('ReviewUpdateController', ReviewUpdateController);

    ReviewUpdateController.$inject = ['ReviewService', '$routeParams'];
    
    function ReviewUpdateController(ReviewService, $routeParams) {
        var vm = this;

        vm.data = {
            'author' : '',
            'rating' : '',
            'reviewText' : ''
        };
        vm.submit = submit;
        vm.message = '';
        vm.title = 'Update Review';
        
        var _id = $routeParams.id;
        
        activate();

        ////////////
        
        function activate() {
            getReview();
        }   
        /* we can use the same form as the add-controller by updating the data model
         * so it will display on the form as an update form
         */
        function getReview() {
            ReviewService.getReview(_id)
                .then(function(data) {
                    vm.data.author = data.author;
                    vm.data.rating = data.rating;
                    vm.data.reviewText = data.reviewText;
                });
        }
        
        function submit() {
            ReviewService.updateReview(_id, vm.data)
                .then(function(data) {
                    vm.message = data;
                });
        }
        
       
    }

})();

