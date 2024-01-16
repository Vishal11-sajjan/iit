const express = require("express");
require("dotenv").config(); //added so we can access .env variables
const questionsModel = require("./models/Questions");
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




app.get("/questions", (req, res) => {
  var getUsers;
  questionsModel.find().then((data) => {
    getUsers = data;
  res.json(getUsers);

  }).catch((error) => {
    console.error('Error fetching user:', error);
  });
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
