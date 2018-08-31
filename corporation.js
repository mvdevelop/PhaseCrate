'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CorporationSchema = new Schema({
	name: String,
	addressLine1: String,
	addressLine2: String,
	city: String,
	state: String,
	zip: String,
	phone: String,
	email: String
});

module.exports = mongoose.model('Corporation', CorporationSchema);