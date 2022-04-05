const Student = require("../models/Student");

// Create a new user
const createStudent = async (req, res) => {
    var alreadyExisting = false;
    let student = new Student(req.body);
    await student
        .save((err, data) => {
            if (data) {
                res.status(201).json(data);
            }

            res.status(400).json({message: 'Student already exists'})
        })
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
    findStudentWithPersonalNumber
};