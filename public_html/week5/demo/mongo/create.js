/* 
 * These examples do not work as is, they are just code examples on how to do so.
 */

var Review = require('../models/review');


  Review.create({
    data1: 'data1',
    data2: 'data2',
    data3: 'data3'
  },function (err) {           
     /* saved! Callbacks are optional */
     successCB();
  });