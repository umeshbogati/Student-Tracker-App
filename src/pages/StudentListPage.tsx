// import { useStudents } from "../hooks/useStudents";
import StudentList from "../Component/StudentList";
import { useStudentsContext } from "../context/StudentContext";

export default function StudentListPage() {
  const { students, deleteStudent } = useStudentsContext();
  return <StudentList students={students} deleteStudent={deleteStudent} />;
}
