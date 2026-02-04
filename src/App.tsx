import { useState } from "react";
import studentsData from "./data/students";
import type { Student } from "./types/Student";
import StudentCard from "./Component/StudentCard";
import "./App.css";

function App() {
  const [students, setStudents] = useState<Student[]>(studentsData);

  const handleDelete = (id: number) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="app">
      <h1>Student Tracker App</h1>

      <h2>Students List</h2>
      <ul className="student-list">
        {students.map((student) => (
          <li key={student.id}>
            <StudentCard student={student} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
