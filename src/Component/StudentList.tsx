import type { Student } from "../types/Student";

import "./StudentList.css";

interface StudentListProps {
    students: Student[];
    deleteStudent: (id: number) => void;
}

export default function StudentList({ students, deleteStudent }: StudentListProps) {
    console.log(students)
    return (
        <div className="student-list">
            {students.map((student) => (
                <div key={student.id} className="student-card">
                    <img src={student.imageUrl} alt={student.name} />
                    <div className="student-info">
                        <h3>{student.name}</h3>
                        <p>Grade: {student.grade}</p>
                        <p>Roll No: {student.rollNumber}</p>
                        <p>Phone: {student.phoneNumber}</p>
                        <p>Gender: {student.gender}</p>
                        <button onClick={() => deleteStudent(student.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
