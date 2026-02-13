import { Link } from "react-router-dom";
import type { Student} from "../types/Student";
import "./StudentCard.css";

interface StudentCardProps {
    student: Student;
    deleteStudent: (id: number) => void;
}

export default function StudentCard({ student, deleteStudent}: StudentCardProps) {
    return (
        <div className="card">
            <img src={student.imageUrl} alt={student.name} />
            <h3>{student.name}</h3>
            <p>Grade: {student.grade}</p>

            <div className="card-button">
                <Link to={`/detail/${student.id}`}>View Details</Link>
                <Link to={`/edit/${student.id}`}>Edit</Link>
                <button className="delete-btn" onClick={() => deleteStudent(student.id)}>Delete</button>

            </div>

        </div>
    );
}