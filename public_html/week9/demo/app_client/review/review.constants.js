(function() {
    'use strict';

    angular
        .module('app.review')
        .constant('REQUEST', {
            'Reviews' : '/api/v1/reviews'
        });
})();