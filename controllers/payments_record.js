const Payments_record = require("../models/Payments_record");

const createPaymentTermRecord = async (req, res) => {
    let paymentsRecord = new Payments_record(req.body);
    await paymentsRecord
        .save((err, data) => {
            if (data) {
                res.status(201).json(data);
                return;
            }
            if (err) console.log(err)
            res.status(400).json({message: 'A term with this Name already exists'})
        })
};

const deletePaymentTermRecordById = (req,res) =>{
    let termId = req.params.id;
    Payments_record.findByIdAndDelete(termId)
        .then(result => {
            if (result !== null)
                res.send(result);
            else
                res.status(404).send({Message: "No Payment Term with a similar id was found."});
        })
        .catch(err => {
            console.log("error", err);
        });
};

const addStudentAsPayingToTerm = (req, res) => {
    let termId = req.params.termId;
    let sid = req.params.sid;
    Payments_record.findByIdAndUpdate(termId, {'$push' : {students : sid}})
        .then(result => {
            if (result !== null)
                res.send({Message: "Student Added as Paying student"});
            else
                res.status(404).send({Message: "No Term with a similar id was found."});
        })
        .catch(err => {
            console.log("Error addStudentAsPaidToTerm", err);
        });
};

const removeStudentAsPayingToTerm = (req, res) => {
    let termId = req.params.termId;
    let sid = req.params.sid;

    Payments_record.findByIdAndUpdate(termId, {'$pull' : {students : sid}})
        .then(result => {
            if (result !== null)
                res.send({Message: "Student Removed as Paying from the term"});
            else
                res.status(404).send({Message: "No Term with a similar id was found."});
        })
        .catch(err => {
            console.log("Error removeStudentAsPayingToTerm", err);
        });
};

module.exports = {
    createPaymentTermRecord,
    deletePaymentTermRecordById,
    addStudentAsPayingToTerm,
    removeStudentAsPayingToTerm

};