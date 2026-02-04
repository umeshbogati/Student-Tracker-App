import type { Student } from "../types/Student";
import StudentCard  from "./StudentCard";
import "./StudentList.css";

interface StudentProps {
    students: Student[];
    onDelete: (id: number) => void;
}

function StudentList ({ students, onDelete }: StudentProps) {
    return (
        <div className="student-list">
            {students.map((student) =>(
                <StudentCard key={student.id} student={student} onDelete={onDelete} />
                
            ))}


        </div>
    );
}

export default StudentList;