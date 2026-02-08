import {useEffect, useState } from "react";
import studentsData from "./data/students";
import type { Student } from "./types/Student";
import Profile from "./Component/profile";
import StudentForm from "./Component/StudentForm";
import StudentList from "./Component/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState<Student[]>(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : studentsData;
  });

  useEffect(() =>{
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student: Student) => {
    setStudents(prev => [...prev, student]);
  };

  const deleteStudent = (id:number) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="App">
      <Profile />
      <StudentForm addStudent={addStudent} />
      <StudentList students = {students} deleteStudent={deleteStudent} />

    </div>
  );
}

export default App;
