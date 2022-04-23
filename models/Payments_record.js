const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const {Schema} = require("mongoose");

const PaymentsRecordSchema = mongoose.Schema({
    termName: {
        type: String,
        required: true,
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Student',
        unique: true
    }],
});

PaymentsRecordSchema.plugin(uniqueValidator)

module.exports = mongoose.model('PaymentsRecord', PaymentsRecordSchema);