import type { Student } from "../types/Student";
import StudentCard from "./StudentCard";
import "./StudentList.css";

interface StudentListProps {
  students: Student[];
  deleteStudent: (id: number) => void;
}

export default function StudentList({
  students,
  deleteStudent,
}: StudentListProps) {
  // console.log(students)
  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          deleteStudent={deleteStudent}
        />
      ))}
    </div>
  );
}
