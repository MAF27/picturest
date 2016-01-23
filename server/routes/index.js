var express 	= require('express');
var restrict 	= require('../auth/restrict');
var router 		= express.Router();

// UNRESTRICTED version, dev
router.get('/', function(req, res) {
	var vm = { user: req.user ? req.user.firstName : null };
	res.render('index', vm);
});

// RESTRICTED version, prod
router.get('/', restrict, function(req, res) {
	var vm = { user: req.user ? req.user.firstName : null };
	res.render('index', vm);
});

router.get('/success', restrict, function(req, res) {
	var vm = { user: req.user.firstName };
	res.render('success', vm);
});

module.exports = router;
