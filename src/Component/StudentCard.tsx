import type { Student } from "../types/Student";
import { FaTrash } from "react-icons/fa";
import "./StudentCard.css";

type Props = {
  student: Student;
  onDelete: (id: number) => void; // delete function
};

const StudentCard = ({ student, onDelete }: Props) => {
  return (
    <div className="student-card-container">
      <div className="student-card">
        <h3>{student.name}</h3>
        <p>Grade: {student.grade}</p>
        <p>Roll: {student.rollNumber}</p>
        <p>Phone: {student.phoneNumber}</p>
        <p>Gender: {student.gender}</p>
      </div>

      <button
        type="button"
        className="delete-btn"
        onClick={() => onDelete(student.id)}
        aria-label={`Delete ${student.name}`}
      >
        <FaTrash /> Delete
      </button>
    </div>
  );
};

export default StudentCard;
