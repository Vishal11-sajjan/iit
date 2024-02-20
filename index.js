const express = require("express");
require("dotenv").config(); //added so we can access .env variables
const questionsModel = require("./models/Questions");
const usersModel = require("./models/User");
const coursesModel = require("./models/Courses");
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
  //   { course_name: 'Advance Java' },
  //   { course_name: 'Core Java' },
  //   { course_name: 'Digital Marketing' },
  //   { course_name: 'Figma Training' },
  //   { course_name: 'Illustrator Training' },
  //   { course_name: 'Photoshop Training' },
  //   { course_name: 'Performance Training' },
  //   { course_name: 'Manual Testing Training' },
  //   { course_name: 'Selenium Training' },
  //   { course_name: 'Android App Development' },
  //   { course_name: 'Ios App Development' },
  //   { course_name: 'Ionic App Development' },
  //   { course_name: 'Flutter App Development' },
  //   { course_name: 'React Native App Development' },
  //   { course_name: 'Augmented Reality Development' }
  // ];


  // coursesModel.insertMany(questionsArray)
  //   .then((data) => {
  //     console.log('Questions inserted successfully:', data);
  //   })
  //   .catch((error) => {
  //     console.error('Error inserting questions:', error);
  //   });


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
app.get("/selenium_training", (req, res) => {
  var getUsers;
  questionsModel.find({ type: "selenium_training" }).then((data) => {
    getUsers = data;
  res.json(getUsers);

  }).catch((error) => {
    console.error('Error fetching user:', error);
  });
});
app.get("/android_development", (req, res) => {
  var getUsers;
  questionsModel.find({ type: "android_development" }).then((data) => {
    getUsers = data;
  res.json(getUsers);

  }).catch((error) => {
    console.error('Error fetching user:', error);
  });
});
app.get("/ios_app_development", (req, res) => {
  var getUsers;
  questionsModel.find({ type: "ios_app_development" }).then((data) => {
    getUsers = data;
  res.json(getUsers);

  }).catch((error) => {
    console.error('Error fetching user:', error);
  });
});
app.get("/iconic_app_development", (req, res) => {
  var getUsers;
  questionsModel.find({ type: "iconic_app_development" }).then((data) => {
    getUsers = data;
  res.json(getUsers);

  }).catch((error) => {
    console.error('Error fetching user:', error);
  });
});
app.get("/flutter_app_development", (req, res) => {
  var getUsers;
  questionsModel.find({ type: "flutter_app_development" }).then((data) => {
    getUsers = data;
  res.json(getUsers);

  }).catch((error) => {
    console.error('Error fetching user:', error);
  });
});
app.get("/react_native_app_development", (req, res) => {
  var getUsers;
  questionsModel.find({ type: "react_native_app_development" }).then((data) => {
    getUsers = data;
  res.json(getUsers);

  }).catch((error) => {
    console.error('Error fetching user:', error);
  });
});
app.get("/augmented_reality_development", (req, res) => {
  var getUsers;
  questionsModel.find({ type: "augmented_reality_development" }).then((data) => {
    getUsers = data;
  res.json(getUsers);

  }).catch((error) => {
    console.error('Error fetching user:', error);
  });
});


//store user values 
app.post('/submit-form', async (req, res) => {
  const { name, phone, email, address, pincode, description } = req.body;
  console.log(req.body);
  if (!name || !phone || !email || !address || !pincode || !description) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  try {
    // Create a new entry in the database
    const formData = new usersModel({
      name,
      phone,
      email,
      address,
      pincode,
      description
    });

    const savedData = await formData.save();
    console.log('Form data saved successfully:', savedData);
    res.status(200).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//search courses 
app.get('/search', async (req, res) => {
  const searchTerm = req.query.q; // Get the search term from query parameters
  try {
      const courses = await coursesModel.find({ course_name: { $regex: searchTerm, $options: 'i' } });
      res.json(courses);
  } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
  }
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
