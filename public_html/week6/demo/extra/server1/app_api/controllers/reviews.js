var mongoose = require('mongoose');
var Review = mongoose.model('Review');
var reviewDAO = require('../service/reviewsDAO');

function sendJSONresponse(res, status, content) {
    res.status(status);
    res.json(content);
};


module.exports.reviewsReadAll = function(req, res) {
        
     reviewDAO.reviewsReadAll().then(function(results) {
         sendJSONresponse(res, 200, results);
     }, function(err){
        sendJSONresponse(res, 404, err);
     });
        
    console.log('Getting all reviews');
        
};



module.exports.reviewsReadOne = function(req, res) {
    
    
    reviewDAO.reviewsReadOne(req.params.reviewid).then(function(results) {
         sendJSONresponse(res, 200, results);
     }, function(err){
        sendJSONresponse(res, 404, {
            "message": "reviewid not found"
        });
     });
    
    
   
};




/*   POST a new review
 *   /api/v1/reviews 
 */
module.exports.reviewsCreate = function(req, res) {
    
    console.log('Creating a review with data ', req.body);
    
    Review.create({
          author: req.body.author,
          rating: req.body.rating,
          reviewText: req.body.reviewText
    }, function(err, dataSaved) {
        if (err) {
          console.log(err);
          sendJSONresponse(res, 400, err);
        } else {
          console.log(dataSaved);
          sendJSONresponse(res, 201, dataSaved);
        }
    });
  
  
};



module.exports.reviewsUpdateOne = function(req, res) {
    
  if ( !req.params.reviewid ) {
    sendJSONresponse(res, 404, {
      "message": "Not found, reviewid is required"
    });
    return;
  }
  Review
    .findById(req.params.reviewid)
    .exec( function(err, reviewData) {
        if (!reviewData) {
          sendJSONresponse(res, 404, {
            "message": "reviewid not found"
          });
          return;
        } else if (err) {
            sendJSONresponse(res, 400, err);
            return;
        }
        reviewData.author = req.body.author;
        reviewData.rating = req.body.rating;
        reviewData.reviewText = req.body.reviewText;

        reviewData.save(function(err, data) {
          if (err) {
            sendJSONresponse(res, 404, err);
          } else {
            sendJSONresponse(res, 200, data);
          }
        });
    });
    
};


module.exports.reviewsDeleteOne = function(req, res) {
  if ( !req.params.reviewid ) {
    sendJSONresponse(res, 404, {
      "message": "Not found, reviewid is required"
    });
    return;
  }
  Review
    .findByIdAndRemove(req.params.reviewid)
    .exec( function(err, reviewData) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
        }
          console.log("Review id " + req.params.reviewid + " deleted");
          sendJSONresponse(res, 204, null);
                
    });
};
