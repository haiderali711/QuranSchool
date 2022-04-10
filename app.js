const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://school:quran123456789@cluster0.lbg1u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", () => {
    console.log("Connected to DB")
});


app.use(cors())
app.use(bodyParser.json())

// // Import Routes
const studentRoute = require('./routes/student');
const teacherRoute = require('./routes/teacher');

const {func} = require("joi");

app.use('/api/teacher', teacherRoute);
app.use('/api/student', studentRoute);
app.use("/api/*", function (req, res) {
    res.status(404).json({ message: "Endpoint Not Found!!!" });
});
app.use('/api/', (req, res) => {
    res.status(405).json({message: '/api not allowed'})
})

//Routes
app.get('/', (req, res) => {
	res.send('We are in QuranSchool Api')
});


// Connect MongoDB
// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://school:<quran123456789>@cluster0.lbg1u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


app.listen(PORT);