var express = require('express');
var router = express.Router();

//getting index page
router.get('/', function(req, res) {
	res.render('pageLogin/index', { title: 'The World of Mystery'});
});

module.exports = router;