import { useEffect, useState } from "react";
import type {Student} from "../types/Student";
import studentsData from "../data/students";

export function useStudents() {
    console.log("Custom hook bata")
    const [students, setStudents] = useState<Student[]>(() => {
        const saved = localStorage.getItem("students");
        return saved ? JSON.parse(saved) : studentsData;

    });

    useEffect(() => {
        localStorage.setItem("students", JSON.stringify(students));
    }, [students]);

    const addStudent = (student: Student) => {
        setStudents(prev => [...prev, student]);
    };

    const deleteStudent = (id: string) => {
        setStudents(prev => prev.filter(s=> s._id !== id));
    };

    const updateStudent = (updatedStudent: Student) => {
        setStudents(prev =>
            prev.map(s => (s._id === updatedStudent._id ? updatedStudent : s))
        );
    };

    const getStudentById = (id: string) => {
        return students.find(s => s._id === id);
    };

    return { students, addStudent, deleteStudent, updateStudent, getStudentById };
};