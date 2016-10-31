/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Review = require('../models/review');

var id = req.params.id;

Review.remove({ _id: id }, function(err) {
            if (!err) {
                /* Document Deleted */
            }
            else {
                /* Document NOT Deleted */
            }
});