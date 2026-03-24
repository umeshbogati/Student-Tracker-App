//

import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import axios from "axios";
import type { Student } from "../types/Student";

interface ContextType {
  students: Student[];
  loading: boolean;
  error: string;
  addStudent: (s: Student) => Promise<void>;
  deleteStudent: (id: string) => Promise<void>;
  updateStudent: (id: string, s: Student) => Promise<void>;
}

export const StudentContext = createContext<ContextType>({} as ContextType);

const API = "http://localhost:5000/api/students";

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API);
      setStudents(res.data);
    } catch (err) {
      setError("Failed to fetch students");
    } finally {
      setLoading(false);
    }
  };

  const addStudent = async (student: Student) => {
    const res = await axios.post(API, student);
    setStudents((prev) => [...prev, res.data]);
  };

  const deleteStudent = async (id: string) => {
    await axios.delete(`${API}/${id}`);
    setStudents((prev) => prev.filter((s) => s._id !== id));
  };

  const updateStudent = async (id: string, student: Student) => {
    const res = await axios.put(`${API}/${id}`, student);

    setStudents((prev) => prev.map((s) => (s._id === id ? res.data : s)));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <StudentContext.Provider
      value={{
        students,
        loading,
        error,
        addStudent,
        deleteStudent,
        updateStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentsContext = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error("useStudentsContext must be used within StudentProvider");
  }
  return context;
};
