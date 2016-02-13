var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pictSchema = new Schema({
	pict: {
		title: String,
		url: String
	},
	user: {
		userId: String,
		userName: String,
		twitterName: String
	},
	created: {
		type: Date,
		'default': Date.now
	}
});

var Pict = mongoose.model('Pict', pictSchema);

module.exports = Pict;
