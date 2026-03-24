import { useParams } from "react-router-dom";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import "./StudentDetailPage.css";

export default function StudentDetailPage() {
  const { id } = useParams();
  const { students, loading, error } = useContext(StudentContext);

  const student = students.find(s => s._id === id);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!student) return <h2>Student Not Found</h2>;

  return (
    <div className="detail">
      <img src={student.imageUrl} alt={student.name} />

      <h2>{student.name}</h2>

      <p><strong>Grade:</strong> {student.grade}</p>
      <p><strong>Roll:</strong> {student.rollNumber}</p>
      <p><strong>Phone:</strong> {student.phone}</p>
      <p><strong>Gender:</strong> {student.gender}</p>
      <p><strong>imageUrl:</strong>{student.imageUrl}</p>
    </div>
  );
}