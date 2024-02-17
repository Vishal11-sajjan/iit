const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userDataSchema);

module.exports = User;
