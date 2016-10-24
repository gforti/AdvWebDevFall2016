var express = require('express');
var router = express.Router();
var ctrlForm = require('../controllers/form');

/* GET form page. */
router.get('/', ctrlForm.formView);
router.post('/', ctrlForm.formPost);

module.exports = router;