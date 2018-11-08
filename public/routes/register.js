var express = require('express');
var router = express.Router();
var DB = require('../db');

/*getting registration page*/ 
router.get('/register', function(req, res) {
	var errors = "";
	 res.render('pageLogin/register', { title: 'Register', errors : errors,});
});
/*postin registration page*/
router.post('/register', function(req, res) {
	var newUser =
	{
		username: req.body.username,
		firstname: req.body.firstname,
		lastname:req.body.lastname,
		email: req.body.email,
		password:req.body.password
	  };
  /*validation*/
	req.checkBody('firstname','First Name is required').notEmpty();
  req.checkBody('lastname','Last Name is required').notEmpty();
  req.checkBody('username','Username is required').notEmpty();
  req.checkBody('email','Email is required').notEmpty();
  req.checkBody('email','Email is not valid').isEmail();
  req.checkBody('password','Password is required').notEmpty();
  req.checkBody('password', 'Password should be 8 to 20 characters').len(8, 20);
 

  var errors = req.validationErrors();
  if (errors){
	var msg = errors.msg;
  
	res.render('pageLogin/register', {title: 'Register',
	  errors : errors,
	  msg : msg,
	 
	});
  console.log(errors);
  }
  else {
	var user = DB.createUser(newUser);
	res.redirect('/user/' + user.id);
  
}
});

module.exports = router;