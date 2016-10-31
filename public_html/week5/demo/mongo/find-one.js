/* 
 * These examples do not work as is, they are just code examples on how to do so.
 */

var Review = require('../models/review');

/* this params needs to be from the request object in express */
 var id = req.params.id;

 Review
    .findOne({ '_id': id })
    .exec(function(err, results){
        /* a way to send the results to the view if found */
         if ( results ) {
            res.render('update', { 
                message: 'Update Results',
                results : results
            });
        } else {
             res.render('notfound', { 
                message: 'Sorry ID not found'
            });
        }
           
    });