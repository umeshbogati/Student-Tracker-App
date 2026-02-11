import { useStudents } from "../hooks/useStudents";
import StudentList from "../Component/StudentList";

export default function StudentListPage() {
  const { students, deleteStudent } = useStudents();
  return <StudentList students={students} deleteStudent={deleteStudent} />;
}
