var express = require('express');
var router = express.Router();

var Pict = require('../models/pict');

// All routes relative to host/api
router.get('/user', function(req, res) {
	// If we're logged in
	if (req.user) {
		// Return full user object, but without password hash
		var user = {
			_id: req.user._id,
			firstName: req.user.firstName,
			lastName: req.user.lastName,
			username: req.user.username
		};
		res.status(200)
			.json(user);
	} else {
		res.status(200)
			.json(null);
	}
});

router.post('/pict', function(req, res) {
	var newPict = new Pict({pict: req.body, user: req.user});

	newPict.save(function(err, pict) {
		if (err) {
			res.status(500)
				.json(err);
		}
		res.status(200)
			.json(pict);
	});
});

router.delete('/pict', function(req, res) {
	console.log('DELETE: ', req.body._id);

	Pict.remove({'_id': req.body._id}, function(err, picts) {
		if (err) {
			console.log('API Error deleting pict: ', err);
		} else {
			return res.status(200)
				.json(picts);
		}
	});
});

// Get all picts for current user
router.get('/mypicts', function(req, res) {
	Pict.find({'user.userId': req.user.userId}, function(err, picts) {
		if (err) {
			console.log('API Error getting picts: ', err);
		} else {
			return res.status(200)
				.json(picts);
		}
	});
});

module.exports = router;
