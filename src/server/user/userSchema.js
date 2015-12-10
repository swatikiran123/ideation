'use strict';

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  handle		: { type: String, required: true, trim: true },
  firstname		: { type: String, required: true, trim: true },
  lastname		: { type: String, required: true, trim: true },
  contactNo		: { type: String, required: false, trim: true },
  pwdHash		: { type: String, required: true, trim: true },
  createdOn		: { type: Date, required: true },
  lastLogin		: { type: String, required: false, trim: true },

  // statusFlag enum to represent account status
  //   Unconfirmed: User created but email confirmation not complete
  //   Active: User active for regular operations
  //   Locked: User locked by admin or unsuccessful login attempts
  //   Inactive: Deactivated due to certain reasons like not used for long time
  statusFlag	: { type: String, required: true } 					
});

module.exports = mongoose.model('users', userSchema);
