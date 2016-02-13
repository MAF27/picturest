var Pict = require('../models/pict');

exports.addPict = function(pict, next) {
	var newPict = new Pict(pict);


console.log('* addPict: ', pict);
	newPict.save(function(err) {
		if (err) {
			return next(err);
		}
		next(null);
	});
};

exports.findByUserId = function(id, next) {
	Pict.find({'user.userId': id}, function(err, picts) {
		next(err, picts);
	});
};
