const mongoose = require('mongoose');
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
		max: 12
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

module.exports = mongoose.model('Student', StudentSchema);