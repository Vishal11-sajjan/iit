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

//   const questionsArray = [
//     { "id": "1", "questions": "Introduction to Illustration Software", "type": "illustration_training" },
//     { "id": "2", "questions": "Basic Tools and Techniques in Illustration", "type": "illustration_training" },
//     { "id": "3", "questions": "Color Theory and Composition for Illustration", "type": "illustration_training" },
//     { "id": "4", "questions": "Creating Vector Graphics in Illustration Software", "type": "illustration_training" },
//     { "id": "5", "questions": "Digital Painting and Rendering Techniques", "type": "illustration_training" },
//     { "id": "6", "questions": "Illustrating Characters and Creatures", "type": "illustration_training" },
//     { "id": "7", "questions": "Illustration for Web and Print Design", "type": "illustration_training" },
//     { "id": "8", "questions": "Advanced Illustration Techniques and Effects", "type": "illustration_training" },
//     { "id": "9", "questions": "Creating Illustration Assets and Libraries", "type": "illustration_training" },
//     { "id": "10", "questions": "Illustration Workflows and Collaboration Tools", "type": "illustration_training" },
// ];

//   questionsModel.insertMany(questionsArray)
//     .then((data) => {
//       console.log('Questions inserted successfully:', data);
//     })
//     .catch((error) => {
//       console.error('Error inserting questions:', error);
//     });


app.get("/questions", (req, res) => {
  var getUsers;
  questionsModel.find({ type: "questions" }).then((data) => {
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
  questionsModel.find({ type: "figma_training" }).then((data) => {
    getUsers = data;
  res.json(getUsers);

  }).catch((error) => {
    console.error('Error fetching user:', error);
  });
});
app.get("/illustration_training", (req, res) => {
  var getUsers;
  questionsModel.find({ type: "illustration_training" }).then((data) => {
    getUsers = data;
  res.json(getUsers);

  }).catch((error) => {
    console.error('Error fetching user:', error);
  });
});

app.get("/photoshop_training", (req, res) => {
  var getUsers;
  questionsModel.find({ type: "photoshop_training" }).then((data) => {
    getUsers = data;
  res.json(getUsers);

  }).catch((error) => {
    console.error('Error fetching user:', error);
  });
});
app.get("/performance_training", (req, res) => {
  var getUsers;
  questionsModel.find({ type: "performance_training" }).then((data) => {
    getUsers = data;
  res.json(getUsers);

  }).catch((error) => {
    console.error('Error fetching user:', error);
  });
});
app.get("/manual_training", (req, res) => {
  var getUsers;
  questionsModel.find({ type: "manual_training" }).then((data) => {
    getUsers = data;
  res.json(getUsers);

  }).catch((error) => {
    console.error('Error fetching user:', error);
  });
});


app.get('/sabka_malik_ek/:name', (req, res)=> {  //code for all type in one 
  questionsModel.find({ type: req.params?.name }).then((data) => {
  res.json(data);
  }).catch((error) => {
    console.error('Error fetching user:', error);
  });
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
