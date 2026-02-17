import { useState } from "react";

function AddStudent() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    course: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:3000/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Student Added");
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Age"
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />
      <input
        placeholder="Course"
        onChange={(e) => setForm({ ...form, course: e.target.value })}
      />
      <button>Add</button>
    </form>
  );
}

export default AddStudent;
