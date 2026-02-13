import { useStudents } from "../hooks/useStudents";
import StudentForm from "../Component/StudentForm";

export default function AddStudentPage() {
    const { addStudent} = useStudents();
    return <StudentForm onSubmit={addStudent} />;
}

