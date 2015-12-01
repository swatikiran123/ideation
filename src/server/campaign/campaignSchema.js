'use strict';

var mongoose = require('mongoose');

var campaignSchema = new mongoose.Schema({
  title: 		{ type: String, required: true, trim: true },
  objective: 	{ type: String, required: true, trim: true },
  startDate: 	{ type: Date, required: true },
  endDate: 		{ type: Date, required: true },
  sponsor: 		{ type: String },
  businessUnit: { type: String }
});

module.exports = mongoose.model('campaigns', campaignSchema);

console.log("Campaign schema defined")
