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

  /*----------     Add questions to the database   --------------  */

  // const questionsArray = [
  //   { "id": "1", "questions": "Social Media Marketing", "type": "digital_marketing" },
  //   { "id": "2", "questions": "Social Media Optimization", "type": "digital_marketing" },
  //   { "id": "3", "questions": "Affiliate Marketing Training", "type": "digital_marketing" },
  //   { "id": "4", "questions": "Sales Marketing Training", "type": "digital_marketing" },
  //   { "id": "5", "questions": "Content Marketing", "type": "digital_marketing" },
  //   { "id": "6", "questions": "Pay Per Click", "type": "digital_marketing" },
  //   { "id": "7", "questions": "Local Business Marketing", "type": "digital_marketing" },
  //   { "id": "8", "questions": "Facebook Marketing Training", "type": "digital_marketing" },
  //   { "id": "9", "questions": "Ecommerce Marketing Training", "type": "digital_marketing" },
  //   { "id": "10", "questions": "YouTube Marketing Training", "type": "digital_marketing" },
  //   { "id": "11", "questions": "AdSense Training", "type": "digital_marketing" },
  //   { "id": "12", "questions": "Online Present Analysis", "type": "digital_marketing" },
  //   { "id": "13", "questions": "Word press Website", "type": "digital_marketing" }
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
app.get("/digital_marketing", (req, res) => {
  var getUsers;
  questionsModel.find({ type: "digital_marketing" }).then((data) => {
    getUsers = data;
  res.json(getUsers);

  }).catch((error) => {
    console.error('Error fetching user:', error);
  });
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
