module.exports = function() {
	var passport 				= require('passport');
	var passportTwitter = require('passport-twitter');

	var userService = require('../services/user-service');

	// Twitter Authentication
	passport.use(new passportTwitter.Strategy({
			consumerKey: 'crj0aykPqH3N2Aoqn4Mm90Dcf',
			consumerSecret: 'V8VjaYZPpAwd5ZaRrDMYOM28Gp9xn2jSqA9qHH03B2NgvouVs3',
			callbackURL: 'http://127.0.0.1:3000/users/twitter/callback'
		},
		function(token, tokenSecrect, profile, done) {
			process.nextTick(function() {
				userService.findById(profile.id, function(err, user) {

					// if there is an error connecting to the database, stop everything and return error
					if (err) {
						return done(err);
					}

					// if the user is found then log them in
					if (user) {
						return done(null, user); // user found, return that user
					} else {
						// if there is no user, create them
						var newUser = { // set all of the user data that we need
							userId: profile.id,
							userName: profile.username,
							twitterName: profile.displayName
						};
						// save our user into the database
						userService.add(newUser, function(err, user) {
							if (err) {
								throw err;
							}
							return done(null, user);
						});
					}
				});

			});

			return (done(null, {
				userId: profile.id,
				userName: profile.username,
				twitterName: profile.displayName
			}));
		}));

	passport.serializeUser(function(user, next) {
		// Minimum version, store user directly in session
		next(null, user);
	});

	passport.deserializeUser(function(user, next) {
		// Minimum version, store user directly in session
		next(null, user);
	});
};
