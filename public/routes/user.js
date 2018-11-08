var express = require('express');
var router = express.Router();
var DB = require('../db');

router.get('/user/:id', function(req, res, next) {
 	res.render('pageLogin/user',{ title: 'user', status: '200', message : '', alertClass : '' });
});
module.exports = router;