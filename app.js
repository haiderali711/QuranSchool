const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

app.use(cors())
app.use(bodyParser.json())

// // Import Routes
// const teacherRoute = require('./routes/teachers');
// const studentRoute = require('./routes/students');

// app.use('/api/teachers', teacherRoute);
// app.use('/api/user', studentRoute);
// app.use("/api/*", function (req, res) {
//     res.status(404).json({ message: "Endpoint Not Found!!!" });
//   });

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



mongoose.connect("mongodb+srv://school:<quran123456789>@cluster0.lbg1u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true  }, () => {
	console.log("Connected to DB")
});

app.listen(3000);