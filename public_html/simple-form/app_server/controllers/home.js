/* GET 'home info' page */


var Review = require('../models/review');;

module.exports.home = function(req, res){
    
    var msg = '';
    function successCB(){
         res.render('index', { 
            title: 'home',
            message : 'Review Saved'
        });        
    }
    if (req.method === 'POST') {
        console.log(req.body);
        
        Review.create({
          author: req.body.name,
          rating: req.body.rating,
          reviewText: req.body.review
        },function (err) {           
           // saved!
           successCB();
           console.log(global.Promise);
        });
       // msg = 'Review Saved';
       
    } else {
         res.render('index', { 
            title: 'home',
            message : msg
        });
    }   
    
 
};

module.exports.view = function(req, res){
    
     var id = req.params.id,
         removed = '',
         message = {};
     if ( id ) {
        Review.remove({ _id: id }, function(err) {
            if (!err) {
                message.type = 'notification!';
            }
            else {
                message.type = 'error';
            }
        });
        removed = id + ' has been removed';
        console.log(message);
     }
     
     
    Review
    .find()
    .exec(function(err, results){
    
            res.render('view', { 
                title: 'View Results',
                results : results,
                removed : removed
            });
    });
};



module.exports.update = function(req, res){
    
    var id = req.params.id;
    if (req.method === 'POST') {
         
         id = req.body._id;
         var query = { '_id': req.body._id };
         var update = {
          author: req.body.name,
          rating: req.body.rating,
          reviewText: req.body.review
        };
        var options = {};
        var callback = function(){};
        Review.update(query, update, options, callback);
         
     }
    
    
    Review
    .findOne({ '_id': id })
    .exec(function(err, results){
    
         if ( results ) {
            res.render('update', { 
                title: 'Update Results',
                results : results
            });
        } else {
             res.render('notfound', { 
                message: 'Sorry ID not found'
            });
        }
           
    });
};


