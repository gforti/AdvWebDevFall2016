var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/home');

/* Locations pages */
router.all('/', ctrlHome.home);
router.all('/view', ctrlHome.view);
router.all('/update/:id', ctrlHome.update);


module.exports = router;
