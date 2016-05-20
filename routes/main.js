var router = require('express').Router();

	
	router.get('/start',function(req,res){
		res.render('start');
	});
	router.get('/about',function(req,res){
		res.render('main/about');
	});
	
module.exports = router;