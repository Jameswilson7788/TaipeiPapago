var router = require('express').Router();
var User = require('../models/user');

	router.get('/signup',function(req,res){
		res.render('accounts/signup',{
			errors:req.flash('errors')
		});
	});

	router.post('/signup',function(req,res){
		var user = new User();
		
		user.profile.name = req.body.name;
		user.email = req.body.email;
		user.password = req.body.password;
		User.findOne({email:req.body.email},function(err,existingUser){
			if(existingUser){
				req.flash('errors','該電子郵件已經被使用');
				return res.redirect('/signup');
			}else{
				user.save(function(err){
					if(err) return next(err);
					return res.redirect('/');
				});
			}
		});
	});
	
module.exports = router;