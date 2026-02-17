const Student = require("../models/Student");

// CREATE
exports.addStudent = async (req, res) => {
  try {
    const { name, age, course } = req.body;
    const newStudent = new Student({ name, age, course });
    await newStudent.save();
    res.status(201).json({ message: "Student added successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// READ
exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

// UPDATE
exports.updateStudent = async (req, res) => {
  try {
    const { name, age, course } = req.body;

    await Student.findByIdAndUpdate(
      req.params.id,
      { name, age, course },
      { new: true, runValidators: true }
    );

    res.json({ message: "Student updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE
exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
