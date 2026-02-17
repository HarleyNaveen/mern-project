import { useState } from 'react'
import AddStudent from "./components/AddStudents";
import StudentList from "./components/StudentList";
// import './App.css'

function App() {
 
  return (
    <>
      <h2>Student CRUD</h2>
      <AddStudent />
      <StudentList />
    </>
  );
}

export default App
