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
    username: {
		type: String,
		required: true,
		min: 6,
		max: 255
	},
	password: {
		type: String,
		required: true,
		min: 6,
		max: 1024
	},
    student: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Student' 
    }],
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', UserSchema);