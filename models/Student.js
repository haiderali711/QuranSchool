const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
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
	personalnumber: {
		type: Integer,
		required: true,
		min: 10,
		max: 12
	},
    phoneNumber: {
		type: Integer,
		required: true,
		min: 10,
		max: 15
	},
    parentNumber: {
		type: Integer,
		required: true,
		min: 10,
		max: 15
	},
	dateRegistration: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', UserSchema);