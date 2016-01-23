var express = require('express');
var app = express();
var spath = __dirname + '/builds/dev';
console.log('* SERVER: static: ', spath);

app.use(express.static(spath));
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

var router 		= express.Router();
router.get('/', function(req, res) {
	console.log('* ROUTER: Request for root.');

	res.render('index');
}); // Root

app.listen(3000, function(){
	console.log('PICTUREST server listening on port 3000 ...');
});
