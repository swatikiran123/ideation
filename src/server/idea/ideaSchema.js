'use strict';

var mongoose = require('mongoose');

var ideaSchema = new mongoose.Schema({
  title: String,
  desc: String,
  submittedBy: String,
  postedOn:  String,
  updatedOn: String,
  status: String
});

module.exports = mongoose.model('idea', ideaSchema);
