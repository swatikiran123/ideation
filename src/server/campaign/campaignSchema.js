'use strict';

var mongoose = require('mongoose');

var campaignSchema = new mongoose.Schema({
  title: String,
  desc: { type: String, default: '' },
  startDate: { type: String, default: '1 Jan 1900' },
  endDate: { type: String, default: '1 Jan 1900' },
  sponsor: { type: String, default: 'sankarvema' }
});

module.exports = mongoose.model('campaigns', campaignSchema);

console.log("Campaign schema defined")
