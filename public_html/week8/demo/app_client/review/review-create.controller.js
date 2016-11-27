(function() {

    'use strict';
    angular
        .module('app.review')
        .controller('ReviewCreateController', ReviewCreateController);

    ReviewCreateController.$inject = ['ReviewService'];
    
    function ReviewCreateController(ReviewService) {
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