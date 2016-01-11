'use strict';

var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
Name: 	{ type: String }
});


 
module.exports = mongoose.model('customer', customerSchema);

console.log("customer schema defined")
