import { useStudents } from "../hooks/useStudents";
import StudentForm from "../Component/StudentForm";

export default function addStudentPage() {
    const { addStudent} = useStudents();
    return <StudentForm addStudent={addStudent} />;
}

