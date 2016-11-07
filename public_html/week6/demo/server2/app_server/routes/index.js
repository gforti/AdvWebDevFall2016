var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/home');

/* Locations pages */
router.get('/', ctrlLocations.homePage);

module.exports = router;
