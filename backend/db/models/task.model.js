const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  _userId: {
    type: String,
    required: true
  }
}, {

})
const Task = mongoose.model('Task', TaskSchema);
module.exports = { Task }