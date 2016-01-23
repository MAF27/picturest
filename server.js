var express = require('express');
var path = require('path');

var app = express();
var spath = __dirname + '/builds/dev';
console.log('* SERVER: static: ', spath);

app.use(express.static(spath));
app.get('*', function(request, response) {
	response.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

app.listen(3000, function(){
	console.log('PICTUREST server listening on port 3000 ...');
});
