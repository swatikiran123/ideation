'use strict';

var mongoose = require('mongoose');

var ideaSchema = new mongoose.Schema({
  title: String,
  desc: String,
  submittedBy: { type: String, default: 'sankar' },
  postedOn:  { type: Date, default: Date.now },
  updatedOn:  { type: Date, default: Date.now }, 
  status: { type: String, default: 'New' }
});

module.exports = mongoose.model('ideaModel', ideaSchema);
