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
   
    { "id": "8", "questions": "What is smoke testing and when is it performed?", "type": "manual_training" },
    { "id": "9", "questions": "What is acceptance testing and how is it different from other types of testing?", "type": "manual_training" },
    { "id": "10", "questions": "Explain the concept of usability testing.", "type": "manual_training" },

    // Selenium training
    { "id": "1", "questions": "What are the advantages of Selenium for automated testing?", "type": "selenium_training" },
    { "id": "2", "questions": "How do you handle dynamic elements in Selenium WebDriver?", "type": "selenium_training" },
    { "id": "3", "questions": "What is the Page Object Model (POM) and how does it help in Selenium testing?", "type": "selenium_training" },
    { "id": "4", "questions": "Explain the difference between findElement() and findElements() in Selenium.", "type": "selenium_training" },
    { "id": "5", "questions": "What is the difference between WebDriver and WebElement in Selenium?", "type": "selenium_training" },
    { "id": "6", "questions": "How do you handle alerts in Selenium WebDriver?", "type": "selenium_training" },
    { "id": "7", "questions": "What is TestNG and how is it used in Selenium testing?", "type": "selenium_training" },
    { "id": "8", "questions": "Explain the concept of parallel testing in Selenium.", "type": "selenium_training" },
    { "id": "9", "questions": "What is the purpose of the Selenium Grid?", "type": "selenium_training" },
    { "id": "10", "questions": "How do you handle synchronization issues in Selenium WebDriver?", "type": "selenium_training" },

    // Android development
    { "id": "1", "questions": "What are the key components of an Android application?", "type": "android_development" },
    { "id": "2", "questions": "Explain the Android activity lifecycle.", "type": "android_development" },
    { "id": "3", "questions": "How do you handle orientation changes in Android applications?", "type": "android_development" },
    { "id": "4", "questions": "What are the different storage options available in Android?", "type": "android_development" },
    { "id": "5", "questions": "What is an Android Service and how does it work?", "type": "android_development" },
    { "id": "6", "questions": "Explain the concept of Intents in Android.", "type": "android_development" },
    { "id": "7", "questions": "What is the Android Manifest file and what is its purpose?", "type": "android_development" },
    { "id": "8", "questions": "How do you handle background tasks in Android applications?", "type": "android_development" },
    { "id": "9", "questions": "What are the different types of layouts available in Android?", "type": "android_development" },
    { "id": "10", "questions": "Explain the concept of Fragments in Android applications.", "type": "android_development" },

    // iOS app development
    { "id": "1", "questions": "What are the differences between UIKit and SwiftUI?", "type": "ios_app_development" },
    { "id": "2", "questions": "Explain the iOS app lifecycle.", "type": "ios_app_development" },
    { "id": "3", "questions": "How do you handle data persistence in iOS applications?", "type": "ios_app_development" },
    { "id": "4", "questions": "What are delegates and protocols in iOS development?", "type": "ios_app_development" },
    { "id": "5", "questions": "What is Auto Layout and why is it used in iOS development?", "type": "ios_app_development" },
    { "id": "6", "questions": "Explain the concept of view controllers in iOS.", "type": "ios_app_development" },
    { "id": "7", "questions": "What is the purpose of the Info.plist file in an iOS app?", "type": "ios_app_development" },
    { "id": "8", "questions": "How do you handle push notifications in iOS applications?", "type": "ios_app_development" },
    { "id": "9", "questions": "What is Core Data and how is it used for data modeling in iOS?", "type": "ios_app_development" },
    { "id": "10", "questions": "Explain the use of UICollectionView in iOS development.", "type": "ios_app_development" },

    // Iconic app development
    { "id": "1", "questions": "What is Ionic and how does it differ from other app development frameworks?", "type": "iconic_app_development" },
    { "id": "2", "questions": "Explain the concept of Capacitor in Ionic development.", "type": "iconic_app_development" },
    { "id": "3", "questions": "How do you handle platform-specific code in Ionic applications?", "type": "iconic_app_development" },
    { "id": "4", "questions": "What are the advantages of using Ionic for cross-platform app development?", "type": "iconic_app_development" },
    { "id": "5", "questions": "Explain the use of Ionic CLI in app development.", "type": "iconic_app_development" },
    { "id": "6", "questions": "What is the purpose of Ionic Native plugins?", "type": "iconic_app_development" },
    { "id": "7", "questions": "How do you integrate third-party libraries into an Ionic app?", "type": "iconic_app_development" },
    { "id": "8", "questions": "What are the different types of navigation available in Ionic?", "type": "iconic_app_development" },
    { "id": "9", "questions": "What is the Ionic Storage and how is it used for data persistence?", "type": "iconic_app_development" },
    { "id": "10", "questions": "Explain the concept of Ionic UI components.", "type": "iconic_app_development" },

    // Flutter app development
    { "id": "1", "questions": "What are the advantages of Flutter for mobile app development?", "type": "flutter_app_development" },
    { "id": "2", "questions": "Explain the Flutter widget tree and how it works.", "type": "flutter_app_development" },
    { "id": "3", "questions": "How do you handle state management in Flutter applications?", "type": "flutter_app_development" },
    { "id": "4", "questions": "What is the purpose of MaterialApp in Flutter?", "type": "flutter_app_development" },
    { "id": "5", "questions": "Explain the use of Flutter plugins in app development.", "type": "flutter_app_development" },
    { "id": "6", "questions": "What is Flutter Navigator and how is it used for app navigation?", "type": "flutter_app_development" },
    { "id": "7", "questions": "How do you handle asynchronous operations in Flutter?", "type": "flutter_app_development" },
    { "id": "8", "questions": "What are Flutter themes and how are they used to customize app appearance?", "type": "flutter_app_development" },
    { "id": "9", "questions": "Explain the concept of Flutter packages and how to use them in app development.", "type": "flutter_app_development" },
    { "id": "10", "questions": "What are Flutter layouts and how do you create them?", "type": "flutter_app_development" },

    // React native app development
    { "id": "1", "questions": "What are the advantages of React Native for mobile app development?", "type": "react_native_app_development" },
    { "id": "2", "questions": "Explain the difference between React Native and ReactJS.", "type": "react_native_app_development" },
    { "id": "3", "questions": "How do you handle navigation in React Native applications?", "type": "react_native_app_development" },
    { "id": "4", "questions": "What is the purpose of Expo in React Native development?", "type": "react_native_app_development" },
    { "id": "5", "questions": "Explain the use of AsyncStorage in React Native for data persistence.", "type": "react_native_app_development" },
    { "id": "6", "questions": "How do you integrate native modules in React Native applications?", "type": "react_native_app_development" },
    { "id": "7", "questions": "What are the different lifecycle methods in React Native?", "type": "react_native_app_development" },
    { "id": "8", "questions": "How do you handle app state in React Native?", "type": "react_native_app_development" },
    { "id": "9", "questions": "Explain the use of Flexbox in React Native layout design.", "type": "react_native_app_development" },
    { "id": "10", "questions": "What are React Native gestures and how do you handle them?", "type": "react_native_app_development" },

    // Augmented reality development
    { "id": "1", "questions": "What is augmented reality and how does it differ from virtual reality?", "type": "augmented_reality_development" },
    { "id": "2", "questions": "Explain the concept of marker-based AR.", "type": "augmented_reality_development" },
    { "id": "3", "questions": "How do you handle lighting and shadows in augmented reality?", "type": "augmented_reality_development" },
    { "id": "4", "questions": "What are the key components of an AR application?", "type": "augmented_reality_development" },
    { "id": "5", "questions": "Explain the role of computer vision in AR development.", "type": "augmented_reality_development" },
    { "id": "6", "questions": "How do you integrate ARKit or ARCore into mobile applications?", "type": "augmented_reality_development" },
    { "id": "7", "questions": "What are the challenges faced in AR development?", "type": "augmented_reality_development" },
    { "id": "8", "questions": "How do you optimize AR experiences for performance and user experience?", "type": "augmented_reality_development" },
    { "id": "9", "questions": "Explain the use of spatial mapping in augmented reality applications.", "type": "augmented_reality_development" },
    { "id": "10", "questions": "What are some popular AR frameworks and libraries?", "type": "augmented_reality_development" },
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
