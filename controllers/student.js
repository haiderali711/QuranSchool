const Student = require("../models/Student");

const createStudent = (req, res) => {
  var emailU = req.body.email;

  Student.findOne({ email: emailU }, (err, foundUser) => {
    if (foundUser === null) {
      var student = null;
      student = new Student(req.body);

      student.save(function (err) {
        if (err) {
          return next(err);
        }
        res.status(201).json(student);
      });
    } else {
      res.status(201).json({ emailAready: true });
    }
  }).catch((error) => {
    if (error === 401) 
        res.status(404).json();
    else 
        res.status(500).json({ error: error });
  });
};

module.exports = {
    createStudent,
  };