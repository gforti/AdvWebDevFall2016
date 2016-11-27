(function() {

    'use strict';
    angular
        .module('app.review')
        .controller('ReviewAddController', ReviewAddController);

    ReviewAddController.$inject = ['ReviewService'];
    
    function ReviewAddController(ReviewService) {
        var vm = this;

        vm.data = {
            'author' : '',
            'rating' : '',
            'reviewText' : ''
        };
        vm.submit = submit;
        vm.message = '';
        vm.title = 'Add Review';
        
        activate();

        ////////////
        
        function activate() {}   
        
        function submit() {
            ReviewService.addReview(vm.data)
                .then(function(data) {
                    vm.message = data;
                });
        }
        
       
    }

})();