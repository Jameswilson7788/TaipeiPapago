var router = require('express').Router();

	router.get('/' , function(req,res){
		res.render('accounts/login');
	});
	router.get('/start',function(req,res){
		res.render('start');
	});
	router.get('/about',function(req,res){
		res.render('main/about');
	});
	
module.exports = router;