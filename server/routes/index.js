var express 	= require('express');
var router 		= express.Router();

// UNRESTRICTED version
router.get('/', function(req, res) {
	var vm = { user: req.user ? req.user.twitterName : null };
	res.render('index', vm);
});

module.exports = router;
