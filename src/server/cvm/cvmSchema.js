'use strict';

var mongoose = require('mongoose');

var cvmSchema = new mongoose.Schema({
visitOrganization: 	{ type: String },
visitAgenda: 	{ type: String },
accountManager: 	{ type: String },
visitCoordinator: 	{ type: String },
schedules: [{
	dateStart: { type:String },
	locationHere: { type: String }
}]
});


 
module.exports = mongoose.model('visit', cvmSchema);

console.log("visit schema defined")
