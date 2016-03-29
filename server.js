var express  =  require('express'),
	mongoose =  require('mongoose'),
	ejs      = 	require('ejs'),
	ejsMate  =  require('ejs-mate'),
	morgan   =  require('morgan');
	
//	TODO:Create a WEB API engine
	
	
	//TODO:reset Web app Route,Create a template
	app.get('/' , function(req,res){
		res.render();
	})
	
	
	
//	WARAING:Test Port
	app.listen(3000,function(err){
		if(err) throw err;
		
	})
	
	
