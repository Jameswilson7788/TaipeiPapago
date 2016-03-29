var express    =  require('express'),
	mongoose   =  require('mongoose'),
	ejs        =  require('ejs'),
	ejsMate    =  require('ejs-mate'),
	morgan     =  require('morgan'),
	bodyParser =  require('body-parser');

//var User       =  require('./models/user');


var app = express();

	//TODO:Create a WEB API engine
	app.use(morgan('dev'));
	app.use(bodyParser.json());
	app.engine('ejs',ejsMate);
	app.set('view engine','ejs');
	
	//TODO:reset Web app Route,Create a template
	app.get('/' , function(req,res){
		res.render('home');
	})
	app.get('/start',function(req,res){
		res.render('start');
	})
	
	
	
//	WARAING:Test Port
	app.listen(3000,function(err){
		if(err) throw err;
		console.log('Hello 3000');
	})
	
	
