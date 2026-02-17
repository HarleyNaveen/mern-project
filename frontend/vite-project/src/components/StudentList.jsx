import { useEffect, useState } from "react";

function StudentList() {
  const [students, setStudents] = useState([]);

  // LOAD
  const loadStudents = async () => {
    const res = await fetch("http://localhost:3000/api/students");
    const data = await res.json();
    setStudents(data);
  };

  // DELETE
  const deleteStudent = async (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    await fetch(`http://localhost:3000/api/students/${id}`, {
      method: "DELETE",
    });

    loadStudents();
  };

  // UPDATE
  const editStudent = async (student) => {
    const newName = prompt("Enter Name", student.name);
    const newAge = prompt("Enter Age", student.age);
    const newCourse = prompt("Enter Course", student.course);

    if (!newName || !newAge || !newCourse) {
      alert("All fields are required");
      return;
    }

    await fetch(`http://localhost:3000/api/students/${student._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
        age: newAge,
        course: newCourse,
      }),
    });

    alert("Student Updated");
    loadStudents();
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <ul>
      {students.map((s) => (
        <li key={s._id}>
          {s.name} - {s.age} - {s.course}
          <button onClick={() => editStudent(s)}>Edit</button>
          <button onClick={() => deleteStudent(s._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
