var express = require('express');
var router = express.Router();
var DB = require('../db');

//get the login page
router.get('/login', function(req, res) {
 	res.render('pageLogin/login', { title: 'Login', status: '200', message : '', alertClass : '' });
});

//posting login page data
router.post('/login', function(req, res) {
	var credentials = req.body;
	var users = DB.getUsers();
	for (var i = 0; i < users.length; i++) {
		var usr = users[i];
		if(usr.password == credentials.password && usr.username == credentials.username ){
			return res.redirect('/account/' + usr.id);		
		}
	};
	res.status(401).render('pageLogin/login', { title: 'Login', status: '401', message : 'Check your credentials', alertClass : 'alert alert-danger' });
});
//signout
router.get('/signout', function(req, res){
	res.redirect('/');
});
module.exports = router;