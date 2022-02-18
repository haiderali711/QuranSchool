const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const StudentSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 6,
		max: 255
	},
	email: {
		type: String,
		required: true,
		min: 6,
		max: 255
	},
	personalNumber: {
		type: String,
		required: true,
		min: 10,
		max: 12,
		unique: true
	},
    phoneNumber: {
		type: String,
		required: true,
		min: 10,
		max: 15
	},
    parentNumber: {
		type: String,
		required: true,
		min: 10,
		max: 15
	},
	dateRegistration: {
		type: Date,
		default: Date.now
	}
});

StudentSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Student', StudentSchema);