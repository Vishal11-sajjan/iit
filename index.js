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

  const questionsArray = [
    { "id": "1", "questions": "Introduction to Figma", "type": "figma_training" },
    { "id": "2", "questions": "Figma Basics: Navigation and Tools", "type": "figma_training" },
    { "id": "3", "questions": "Working with Frames and Shapes in Figma", "type": "figma_training" },
    { "id": "4", "questions": "Using Figma for UI/UX Design", "type": "figma_training" },
    { "id": "5", "questions": "Collaborating in Figma: Teams and Prototyping", "type": "figma_training" },
    { "id": "6", "questions": "Advanced Techniques in Figma: Components and Variants", "type": "figma_training" },
    { "id": "7", "questions": "Figma for Web Design: Responsive Design and Layouts", "type": "figma_training" },
    { "id": "8", "questions": "Figma for Mobile App Design: Prototyping and Assets", "type": "figma_training" },
    { "id": "9", "questions": "Design Systems in Figma: Creating and Managing Libraries", "type": "figma_training" },
    { "id": "10", "questions": "Figma for Graphic Design: Vector Illustration and Image Editing", "type": "figma_training" },
    { "id": "11", "questions": "Figma for UX Research: Wireframing and User Flows", "type": "figma_training" },
    { "id": "12", "questions": "Animating Designs in Figma: Prototyping Interactions", "type": "figma_training" },
    { "id": "13", "questions": "Figma Plugins: Extending Functionality and Workflow Automation", "type": "figma_training" }
];

  
  questionsModel.insertMany(questionsArray)
    .then((data) => {
      console.log('Questions inserted successfully:', data);
    })
    .catch((error) => {
      console.error('Error inserting questions:', error);
    });


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
app.get("/figma_training", (req, res) => {
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
