var mongoose = require('mongoose');

// create a user model
var GoogleUser = mongoose.model('Google User', {
  oauthID: Number,
  name: String,
  created: Date
});


module.exports = GoogleUser;
