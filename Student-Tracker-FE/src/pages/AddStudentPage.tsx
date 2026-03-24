import StudentForm from "../Component/StudentForm";
import { useStudentsContext } from "../context/StudentContext";
import { useNavigate } from "react-router-dom";
import type { Student } from "../types/Student";

export default function AddStudentPage() {
  const { addStudent } = useStudentsContext();
  const navigate = useNavigate();

  const handleAddStudent = (student: Student) => {
    addStudent(student);
    navigate("/list");
  };

  return (
    <div >
      <h2>Add New Student</h2>
      <StudentForm onSubmit={handleAddStudent} />
    </div>
  );
}