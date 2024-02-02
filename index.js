const express = require("express");
require("dotenv").config(); //added so we can access .env variables
const questionsModel = require("./Questions");
const cors = require('cors');
const mongoConnect = require("./db");

//mail

var app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// const users = [{ email: "asdf@ds.com", password: 3234234 }]; //u have to link with mongoose
var users;

  // questionsModel.find().then((data) => {
  //   users = data;
  //   console.log(users);
  // }).catch((error) => {
  //   console.error('Error fetching users:', error);
  // });

  //Add uestions to the database

  // const questionsArray = [
  //   {"id": "1", "questions": "Introduction To Java", "type": "core_java"},
  //   {"id": "2", "questions": "Java Fundamentals", "type": "core_java"},
  //   {"id": "3", "questions": "Essentials of Object-Oriented Programming", "type": "core_java"},
  //   {"id": "4", "questions": "Writing Java Classes", "type": "core_java"},
  //   {"id": "5", "questions": "Packages", "type": "core_java"},
  //   {"id": "6", "questions": "Exception Handling", "type": "core_java"},
  //   {"id": "7", "questions": "I/O Operations in Java", "type": "core_java"},
  //   {"id": "8", "questions": "Multithreaded Programming", "type": "core_java"},
  //   {"id": "9", "questions": "Java Util Package / Collections Framework", "type": "core_java"},
  //   {"id": "10", "questions": "Generics", "type": "core_java"},
  //   {"id": "11", "questions": "Inner Classes", "type": "core_java"},
  //   {"id": "12", "questions": "Abstract Window Toolkit", "type": "core_java"},
  //   {"id": "13", "questions": "Collection of Framework", "type": "core_java"}
  // ];
  
  // questionsModel.insertMany(questionsArray)
  //   .then((data) => {
  //     console.log('Questions inserted successfully:', data);
  //   })
  //   .catch((error) => {
  //     console.error('Error inserting questions:', error);
  //   });


app.get("/questions", (req, res) => {
  var getUsers;
  questionsModel.find().then((data) => {
    getUsers = data;
  res.json(getUsers);

  }).catch((error) => {
    console.error('Error fetching user:', error);
  });
});
app.get("/core_java_questions", (req, res) => {
  var getUsers;
  questionsModel.find({ type: "core_java" }).then((data) => {
    getUsers = data;
  res.json(getUsers);

  }).catch((error) => {
    console.error('Error fetching user:', error);
  });
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
