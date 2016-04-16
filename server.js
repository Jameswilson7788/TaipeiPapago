var express    =  require('express'),
	mongoose   =  require('mongoose'),
	ejs        =  require('ejs'),
	ejsMate    =  require('ejs-mate'),
	morgan     =  require('morgan'),
	bodyParser =  require('body-parser');
	
var User       =  require('./models/user');


var app = express();

	mongoose.connect('mongodb://root:weigo123@ds023078.mlab.com:23078/papago',function(err){
		if(err){
			console.log(err);
		}else{
			console.log('successfully Connecting Database');
		}
	});
	

//  TODO:Remove to Routes,Reset Router.
	app.post('/create-user',function(req,res,next){
		var user = new User();
		user.profile.name = req.body.name;
		user.password = req.body.password;
		user.email = req.body.email;
		
		user.save(function(err){
			if(err) next(err);
			res.json('Successfully create a new user');
		});
		
	});
	
	
	
	
	//TODO:Create a WEB API engine
	app.use(morgan('dev'));
	app.use(bodyParser.json());
	app.engine('ejs',ejsMate);
	app.set('view engine','ejs');
	
	//TODO:Reset Router
	app.get('/' , function(req,res){
		res.render('main/home');
	})
	app.get('/start',function(req,res){
		res.render('start');
	})
	app.get('/about',function(req,res){
		res.render('main/about');
	})
	
	
	
//	WARAING:Test Port
	app.listen(3000,function(err){
		if(err) throw err;
		console.log('Hello 3000');
	})
	

//TODO:Add a views/main folder.
//TODO:move home,start to main folder.
//TODO:Create a good boilerplate

	
