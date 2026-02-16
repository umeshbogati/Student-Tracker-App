import { useParams, useNavigate } from "react-router-dom";
// import { useStudents } from "../hooks/useStudents";
import StudentForm from "../Component/StudentForm";
import "./EditStudentPage.css";
import { useStudentsContext } from "../context/StudentContext";

export default function EditStudentPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getStudentById, updateStudent } = useStudentsContext();

  const student = getStudentById(Number(id));

  if (!student) return <h2 className="not-found">Student Not Found</h2>;

  return (
    <div className="edit-container">
      <h2 className="edit-title">Edit Student</h2>

      <StudentForm
        initialData={student}
        onSubmit={(updated) => {
          updateStudent(updated);
          navigate("/list");
        }}
      />
    </div>
  );
}
