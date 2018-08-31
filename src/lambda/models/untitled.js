'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JobSchema = new Schema({
	name: String,
	addressLine1: String,
	addressLine2: String,
	zip: String,
	city: String,
	state: String,
	community: String,
	phone: String,
	email: String
});

module.exports = mongoose.model('Job', JobSchema);