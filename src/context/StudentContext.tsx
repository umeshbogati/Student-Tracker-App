import { createContext, useContext, useEffect, useState } from "react";
import type { Student } from "../types/Student";

interface StudentContextType {
  students: Student[];
  addStudent: (student: Student) => void;
  updateStudent: (student: Student) => void;
  deleteStudent: (id: number) => void;
  getStudentById: (id: number) => Student | undefined;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  console.log("StudentProvider bata");
  const [students, setStudents] = useState<Student[]>(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student: Student) => {
    setStudents((prev) => [...prev, student]);
  };
  const updateStudent = (updatedStudent: Student) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student,
      ),
    );
  };
  const deleteStudent = (id: number) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const getStudentById = (id: number) => {
    return students.find((student) => student.id === id);
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
        updateStudent,
        deleteStudent,
        getStudentById,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentsContext = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudentContext must be used within a StudentProvider");
  }
  return context;
};
