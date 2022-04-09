const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const {Schema} = require("mongoose");

const TeacherSchema = mongoose.Schema({
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
		max: 255,
		unique: true
	},
    username: {
		type: String,
		required: true,
		min: 6,
		max: 255,
		unique: true
	},
	password: {
		type: String,
		required: true,
		min: 6,
		max: 1024
	},
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Student',
		unique: true
    }],
	date: {
		type: Date,
		default: Date.now
	}
});
TeacherSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Teacher', TeacherSchema);