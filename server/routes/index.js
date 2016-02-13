var express 	= require('express');
var restrict 	= require('../auth/restrict');
var router 		= express.Router();

// UNRESTRICTED version, dev
router.get('/', function(req, res) {
	var vm = { user: req.user ? req.user.twitterName : null };
	res.render('index', vm);
});

module.exports = router;
