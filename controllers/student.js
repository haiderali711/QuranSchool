const Student = require("../models/Student");

// Create a new user
const createStudent = async (req, res) => {
    let student = new Student(req.body);
    await student
        .save((err, data) => {
            if (data) {
                res.status(201).json(data);
                return;
            }

            res.status(400).json({message: 'Student already exists'})
        });
};

const findStudentWithPersonalNumber = (req, res) => {
    let personalNumber = req.params.personalNumber;

    Student.findOne({personalNumber: personalNumber})
        .then(result => {
            if (result !== null)
                res.send(result);
            else
                res.status(404).send({Message: "No student with this Personal Number is registered."})
        })
        .catch (err => {
            console.log("error", err )
        });

};

const findStudentWithId = (req, res) => {
    let id = req.params.id;

    Student.findById(id)
        .then(result => {
            if (result !== null)
                res.send(result);
            else
                res.status(404).send({Message: "No such student is registered."})
        })
        .catch (err => {
            console.log("error", err )
        });
};

const updateStudentWithId = (req, res) => {
    let studentId = req.params.id;
    let updatedBody = req.body;
    Student.findByIdAndUpdate(studentId, updatedBody)
        .then(result => {
            if (result !== null)
                res.send({Message: "Student Info Updated"});
            else
                res.status(404).send({Message: "No Student with a similar id was found."});
        })
        .catch(err => {
            console.log("error", err);
        });
};

const deleteStudentWithId = (req,res) =>{
    let studentId = req.params.id;
    Student.findByIdAndDelete(studentId)
        .then(result => {
            if (result !== null)
                res.send(result);
            else
                res.status(404).send({Message: "No Student with a similar id was found."});
        })
        .catch(err => {
            console.log("error", err);
        });
};

// con st createNewComment = (req, res) => {
//     const student = new Student(req.body);
//
//     student
//         .save()
//         .then(result => {
//             res.status(201).json(result);
//         })
//         .catch(error => {
//             res.status(500).json({ error: error });
//         });
// };

module.exports = {
    createStudent,
    findStudentWithPersonalNumber,
    findStudentWithId,
    updateStudentWithId,
    deleteStudentWithId
};