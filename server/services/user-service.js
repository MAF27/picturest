var User = require('../models/user');

exports.add = function(user, next) {
console.log('* addUser: ', user);
		var newUser = new User(user);
		newUser.save(function(err, user) {
			if (err) {
				return next(err, null);
			}
			next(null, user);
		});
};

exports.findById = function(id, next) {
	User.findOne({
		userId: id
	}, function(err, user) {
		next(err, user);
	});
};
