const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 5,
    max: 60,
  },
  course: {
    type: String,
    required: true,
    enum: ["HTML", "CSS", "JavaScript", "React Js", "Node Js"],
  },
});

module.exports = mongoose.model("Student", studentSchema);
