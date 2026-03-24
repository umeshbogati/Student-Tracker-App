import type { Student } from "../types/Student";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { Link } from "react-router-dom";
import "./StudentCard.css"

export default function StudentItem({ student }: { student: Student }) {
  const { deleteStudent } = useContext(StudentContext);

  return (
    <div className="card">
      <img
        src={student.imageUrl}
        width="100"
        alt={`${student.name} profile`}
        title={student.name}
      />

      <h3>{student.name}</h3>
      <p>{student.grade}</p>
      <div className="buttons">
        <Link to={`/detail/${student._id}`}>Details</Link>
        <Link to={`/edit/${student._id}`}>Edit</Link>

        <button onClick={() => deleteStudent(student._id!)}>Delete</button>
      </div>
    </div>
  );
}
