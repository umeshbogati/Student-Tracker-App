import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import StudentForm from "../Component/StudentForm";

export default function EditPage() {
  const { id } = useParams(); // string
  const navigate = useNavigate();

  const { students, updateStudent, loading } = useContext(StudentContext);

  // find student using _id
  const student = students.find(s => s._id === id);

  if (loading) return <h2>Loading...</h2>;
  if (!student) return <h2>Student Not Found</h2>;

  return (
    <div>
      <h2>Edit Student</h2>

      <StudentForm
        initialData={student}
        onSubmit={async (data) => {
          await updateStudent(id!, data); // id is string
          navigate("/");
        }}
      />
    </div>
  );
}