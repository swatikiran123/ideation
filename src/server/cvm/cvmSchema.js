'use strict';

var mongoose = require('mongoose');

var cvmSchema = new mongoose.Schema({
visitOrganization: 	{ type: String },
visitAgenda: 	{ type: String },
accountManager: 	{ type: String },
visitCoordinator: 	{ type: String },
Schedule:[{ type: mongoose.Schema.Types.ObjectId, ref: 'schedule'  }]
});

 
module.exports = mongoose.model('visit', cvmSchema);

console.log("visit schema defined")

var scheduleSchema = new mongoose.Schema({
	dateStart: {type: String, ref: 'visit'},
	locationHere: {type: String, ref: 'visit'}
});
module.exports = mongoose.model('schedule', scheduleSchema);

console.log("schedule schema defined")
