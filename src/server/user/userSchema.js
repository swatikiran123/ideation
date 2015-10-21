'use strict';

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  shortId: String,
  firstname: String,
  lastname: String,
  pwdHash: String,
  registeredOn:  { type: Date, default: Date.now },
  lastLogin:  { type: Date, default: Date.now }, 
  status: { type: String, default: 'New' }
});

module.exports = mongoose.model('userModel', userSchema);
