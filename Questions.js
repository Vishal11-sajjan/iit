const mongoose = require('mongoose')


const questionsSchema = new mongoose.Schema({
    id: String,
    questions: String,
    type: String,
  });
  //isme above se connect hua and then ye nihce schema define kiya and collection ka name User rakha 
module.exports =  mongoose.model('Questions', questionsSchema,'questions') //ab model bana ke User collection ko export kar de 