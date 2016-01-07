'use strict';

var mongoose = require('mongoose');

var visitSchema = new mongoose.Schema({
visitOrganization: 	{ type: String },
visitAgenda: 	{ type: String },
accountManager: 	{ type: String },
visitCoordinator: 	{ type: String },
schedules: [{
	dateStart: { type:String },
	locationHere: { type: String }
}]
});


 
module.exports = mongoose.model('visit', visitSchema);

console.log("visit schema defined")
