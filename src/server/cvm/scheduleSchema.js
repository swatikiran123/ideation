'use strict';

var mongoose = require('mongoose');

var scheduleSchema = new mongoose.Schema({
	dateStart: {type: String, ref: 'visit'},
	locationHere: {type: String, ref: 'visit'}
});
module.exports = mongoose.model('schedule', scheduleSchema);

console.log("schedule schema defined")
