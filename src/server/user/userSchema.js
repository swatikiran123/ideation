'use strict';

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  shortId: String,
  firstname: String,
  lastname: String,
  pwdHash: String
});

module.exports = mongoose.model('userModel', userSchema);
