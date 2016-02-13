var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  userId: String,
  userName: String,
  twitterName: String,
  created: { type: Date, 'default': Date.now }
});

var User = mongoose.model('User', userSchema);
module.exports = User;
