const { Schema, model } = require('mongoose');

//Schema to create Thought model
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Must match an email address!'],
  },
  thoughts: {
    

  },
  friends: {

  }
});
