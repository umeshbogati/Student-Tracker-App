// import { useStudents } from "../hooks/useStudents";
import StudentForm from "../Component/StudentForm";
import { useStudentsContext } from "../context/StudentContext";

export default function AddStudentPage() {
    const { addStudent} = useStudentsContext();
    return <StudentForm onSubmit={addStudent} />;
}

