var express = require('express');
var passport = require('passport');
// var restrict = require('../auth/restrict');
var router = express.Router();

// var UserService = require('../services/user-service');

router.get('/twitter', passport.authenticate('twitter'));
router.get('/twitter/callback', passport.authenticate('twitter', {
		// failureRedirect: '/users/login'
		// On failure redirect to home as usual, but without user
	}),
	function(req, res) {
		// Successful authentication, redirect home.
		res.redirect('/');
	});

	router.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

module.exports = router;
