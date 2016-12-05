var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/home');

/* Locations pages */
router.all('/', ctrlHome.angularApp);

module.exports = router;
