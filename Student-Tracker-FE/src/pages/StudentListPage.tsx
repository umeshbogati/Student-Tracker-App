import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { Link } from "react-router-dom";
import StudentCard from "../Component/StudentCard";
import "./StudentListPage.css";
export default function StudentListPage() {
  const { students, loading, error } = useContext(StudentContext);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="list-page">
      <h1>Student List</h1>

      <Link to="/add">
        <button className="add-btn">+ Add Student</button>
      </Link>

      {students.length === 0 ? (
        <p>No students found</p>
      ) : (
        <div className="student-grid">
          {students.map((student) => (
            <StudentCard key={student._id} student={student} />
          ))}
        </div>
      )}
    </div>
  );
}
