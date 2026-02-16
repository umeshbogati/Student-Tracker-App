import { useParams } from "react-router-dom";
// import { useStudents } from "../hooks/useStudents";
import "./StudentDetailPage.css";
import { useStudentsContext } from "../context/StudentContext";

export default function StudentDetailPage() {
    const { id } = useParams();
    const { getStudentById } = useStudentsContext();

    const student = getStudentById(Number(id));

    if (!student) return <h2>Student Not Found</h2>;
    
    return (
        <div className="detail">
            <img src={student.imageUrl} alt= {student.name} />
            <h2>{student.name}</h2>
            <p><strong>Grade:</strong>{student.grade}</p>
            <p><strong>Roll:</strong>{student.rollNumber}</p>
            <p><strong>Phone:</strong>{student.phoneNumber}</p>
            <p><strong>Address:</strong>{student.address}</p>
            <p><strong>Email:</strong>{student.email}</p>
            <p><strong>Gender:</strong>{student.gender}</p>
        </div>
    );
}