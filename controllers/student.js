const Student = require("../models/Student");

// Create a new user
const createStudent = (req, res, next) => {
    var alreadyExisting = false;
    let student = new Student(req.body);
    student
        .save((err, data) => {
            if (data) {
                res.status(201).json(data);
            } else {
                if (err.body.name === "ValidationError") alreadyExisting = true;
            }
        }).then(r => {})
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
};