'use strict';

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  handle: String,
  firstname: String,
  lastname: String,
  pwdHash: String
});

module.exports = mongoose.model('users', userSchema);
