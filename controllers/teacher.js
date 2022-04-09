const Teacher = require("../models/Teacher");

const createTeacher = async (req, res) => {
    let teacher = new Teacher(req.body);
    await teacher
        .save((err, data) => {
            if (data) {
                res.status(201).json(data);
                return;
            }
            if (err) console.log(err)
            res.status(400).json({message: 'Teacher already exists'})
        })
};

const findTeacherWithId = (req , res) => {
    let id = req.params.id;
    Teacher.findById(id)
        .then(result => {
            if (result !== null)
                res.send(result);
            else
                res.status(404).send({Message: "No such teacher is in database."})
        })
        .catch (err => {
            console.log("error", err )
        });
};

const updateTeacherWithId = (req,res) => {
    let id = req.params.id;
    let updatedBody =  req.body;
    if (updatedBody.students == null) {
        Teacher.findByIdAndUpdate(id, updatedBody)
            .then(result => {
                if (result !== null)
                    res.send({Message: "Teacher Info Updated"});
                else
                    res.status(404).send({Message: "No Teacher with a similar id was found."});
            })
            .catch(err => {
                console.log("Error UpdateTeacherWithId", err);
            });
    }
};

const addStudentToTeacher = (req, res) => {
    let tid = req.params.tid;
    let sid = req.params.sid;

    Teacher.findByIdAndUpdate(tid, {'$push' : {students : sid}})
        .then(result => {
            if (result !== null)
                res.send({Message: "Student Added to the teacher"});
            else
                res.status(404).send({Message: "No Teacher with a similar id was found."});
        })
        .catch(err => {
            console.log("Error addStudentToTeacher", err);
        });
};

const removeStudentFromTeacher = (req, res) => {
    let tid = req.params.tid;
    let sid = req.params.sid;

    Teacher.findByIdAndUpdate(tid, {'$pull' : {students : sid}})
        .then(result => {
            if (result !== null)
                res.send({Message: "Student Removed to the teacher"});
            else
                res.status(404).send({Message: "No Teacher with a similar id was found."});
        })
        .catch(err => {
            console.log("Error removeStudentFromTeacher", err);
        });
};

module.exports = {
    createTeacher,
    findTeacherWithId,
    updateTeacherWithId,
    addStudentToTeacher,
    removeStudentFromTeacher
};