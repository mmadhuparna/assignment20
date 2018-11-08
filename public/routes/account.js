
var express = require('express');
var router = express.Router();
var DB = require('../db');


//getting account page of user
router.get('/account/:id', function (req, res, next) {	
	var userid = req.params.id;
	var user = DB.getUser(userid);
	 res.render('pageLogin/account', { title: 'login Details', user : user}); 
		 	
});

module.exports = router;

