var router = require('express').Router();
var User = require('../models/user');
var passport = require('passport');
var passportConf = require('../config/passport');

	router.get('/',function(req,res){
		if(req.user) return res.redirect('/profile');
		res.render('accounts/login',{message:req.flash('loginMessage')});
	});
	
	router.post('/',passport.authenticate('local-login',{
		successRedirect:'/profile',
		failureRedirect: '/',
		failureFlash: true
	}));
	
	router.get('/profile',function(req,res,next){
		User.findOne({_id:req.user._id},function(err,user){
			if(err) return next(err);
			res.render('accounts/profile',{user:user});
		});
	});


	router.get('/signup', function(req, res, next) {
	  res.render('accounts/signup', {
	    errors: req.flash('errors')
	  });
	});

	router.post('/signup', function(req, res, next) {
	  var user = new User();
	
	  user.profile.name = req.body.name;
	  user.email = req.body.email;
	  user.password = req.body.password;
	  user.profile.picture = user.gravatar();
	
	  User.findOne({ email: req.body.email }, function(err, existingUser) {
	
	    if (existingUser) {
	      req.flash('errors', '電子信箱有人使用');
	      return res.redirect('/signup');
	    } else {
	      user.save(function(err, user) {
	        if (err) return next(err);
	
	        req.logIn(user, function(err) {
	          if (err) return next(err);
	          res.redirect('/profile');
	
	        })
	      });
	    }
	  });
	});
	
	router.get('/logout',function(req,res,next){
		req.logout();
		res.redirect('/');
	});
	
	router.get('/edit-profile',function(req,res,next){
		res.render('accounts/edit-profile',{message:req.flash('sucessful')});	
	});
	router.post('/edit-profile',function(req,res,next){
		User.findOne({_id:req.user._id},function(err,user){
			if(err) return next(err);
			if(req.body.name) user.profile.name = req.body.name;
			user.save(function(err){
				if(err) return next(err);
				req.flash('sucess','修改資料成功');
			})
		});
	});
	
module.exports = router;