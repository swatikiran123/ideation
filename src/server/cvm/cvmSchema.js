'use strict';

var mongoose = require('mongoose');

var cvmSchema = new mongoose.Schema({
visitOrganization: 	{ type: String },
visitAgenda: 	{ type: String },
accountManager: 	{ type: String },
visitCoordinator: 	{ type: String }
  
});

 
module.exports = mongoose.model('cvms', cvmSchema);

console.log("visit schema defined")
/*
var cvmSchedule = new mongoose.Schema({
location: 	{ type: String },
date: 	{ type: String },
});

 
module.exports = mongoose.model('cvmSchedule', cvmSchedule);

console.log("visitSchedule schema  defined")
*/