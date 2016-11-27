
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

function reviewsReadOne(id) {
    
    var promise = new Promise(function (resolve, reject) { 
        
        if ( !id ) {
             reject('reviewid not found'); 
        }
            Review
            .findById(id)
            .exec(function(err, results){
                if ( err ) {
                    reject(err);                    
                } else {
                    results = fixData(results);
                    resolve(results);
                }
            });           

    });
    
    return promise;
       
    
}

function fixReviewData(results) {
    
    var finalData = [];    
    results.forEach(function(doc) {
        finalData.push(fixData(doc));        
    });
    return finalData;
}

function fixData(doc) {
    
    var createdDate = new Date(doc.createdOn).toJSON().slice(0,10);    
    return {
        "_id" : doc._id,
        "author" : doc.author,
        "rating" : doc.rating,
        "reviewText" : doc.reviewText,
        "createdOn" : createdDate.replace(/^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})$/, "$2/$3/$1")
    };
    
}



module.exports.reviewsReadAll = reviewsReadAll;
module.exports.reviewsReadOne = reviewsReadOne;

