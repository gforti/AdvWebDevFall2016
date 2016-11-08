
var mongoose = require('mongoose');
var Review = mongoose.model('Review');


function reviewsReadAll() {
    
    var promise = new Promise(function (resolve, reject) { 
            Review
            .find()
            .exec(function(err, results){
                if ( err ) {
                    reject(err);                    
                } else {
                    results = fixReviewData(results);
                    resolve(results);
                }
            });           

    });
    
    return promise;
       
    
}

function fixReviewData(results) {
    
    var finalData = [];
    
    results.forEach(function(row) {
        var createdDate = new Date(row.createdOn).toJSON().slice(0,10);
        finalData.push({
            "_id" : row._id,
            "author" : row.author,
            "rating" : row.rating,
            "reviewText" : row.reviewText,
            "createdOn" : createdDate.replace(/^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})$/, "$2/$3/$1")
        });
        
    });
    return finalData;
}



module.exports.reviewsReadAll = reviewsReadAll;

