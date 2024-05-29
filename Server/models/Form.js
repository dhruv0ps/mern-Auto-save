// models/Form.js

const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  field1: {
    type: String,
    
  },
  field2: {
    type: String,
   
  },
  // Add more fields as needed
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Form', FormSchema);
