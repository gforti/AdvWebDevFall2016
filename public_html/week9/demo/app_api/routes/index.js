var express = require('express');
var router = express.Router();

var jwt = require('express-jwt');
var auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

var ctrlReviews = require('../controllers/reviews');
var ctrlAuth = require('../controllers/authentication');

// reviews
router.get('/reviews', auth, ctrlReviews.reviewsReadAll);
router.get('/reviews/:reviewid', auth, ctrlReviews.reviewsReadOne);
router.post('/reviews', auth, ctrlReviews.reviewsCreate);
router.put('/reviews/:reviewid', auth, ctrlReviews.reviewsUpdateOne);
router.delete('/reviews/:reviewid', auth, ctrlReviews.reviewsDeleteOne);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);


module.exports = router;
