var express      =  require('express'),
	mongoose     =  require('mongoose'),
	ejs          =  require('ejs'),
	ejsMate      =  require('ejs-mate'),
	morgan       =  require('morgan'),
	bodyParser   =  require('body-parser'),
	session      =  require('express-session'),
	cookieParser =  require('cookie-parser'),
	flash        =  require('express-flash'),
	passport     =  require('passport'),
	MongoStore   =  require('connect-mongo/es5')(session);
	
var User             =  require('./models/user'),
	mainRoutes   =  require('./routes/main'),
	userRoutes   =  require('./routes/user'),
	secret       =  require('./config/secret');


var app = express();

	mongoose.connect(secret.database,function(err){
		if(err){
			console.log(err);
		}else{
			console.log('successfully Connecting Database');
		}
	});
	
	//TODO:Create a WEB API engine
	//MiddleWare
	app.use(express.static(__dirname + '/public'));
	app.use(morgan('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(cookieParser());
	app.use(session({
		resave:true,
		saveUninitialized: true,
		secret:secret.secretKey,
		store:new MongoStore({url:secret.database,autoReconnect:true})
	}));
	app.use(flash());
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(function(req,res,next){
		res.locals.user = req.user;
		next();
	});
	app.engine('ejs',ejsMate);
	app.set('view engine','ejs');
	app.use(mainRoutes);
	app.use(userRoutes);
	
	
//	WARAING:Test Port
	app.listen(secret.port,function(err){
		if(err) throw err;
		console.log('Hello 3000');
	})
	

//TODO:Add a views/main folder.
//TODO:move home,start to main folder.
//TODO:Create a good boilerplate
//TODO:routes/user
	
