import type { Student } from "../types/Student";
import StudentCard from "./StudentCard";
import "./StudentList.css";

interface StudentListProps {
  students: Student[];
  deleteStudent: (id: string) => void;
}

export default function StudentList({
  students,
}: StudentListProps) {
  // console.log(students)
  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard
          key={student._id}
          student={student}
        />
      ))}
    </div>
  );
}
