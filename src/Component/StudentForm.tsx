import { useState } from "react";
import type { FormEvent } from "react";
import type { Student } from "../types/Student";
import "./StudentForm.css";

interface Props {
  initialData?: Student;
  onSubmit: (student: Student) => void;
}

export default function StudentForm({ initialData, onSubmit }: Props) {
  const [form, setForm] = useState<Student>(
    initialData || {
      id: Date.now(),
      name: "",
      grade: "",
      phoneNumber: "",
      rollNumber: "",
      gender: "Male",
      imageUrl: "",
      address: "",
      email: "",
    }
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input placeholder="Name" value={form.name}
        onChange={e => setForm({...form, name: e.target.value})} required />

      <input placeholder="Grade" value={form.grade}
        onChange={e => setForm({...form, grade: e.target.value})} required />

      <input placeholder="Roll Number" value={form.rollNumber}
        onChange={e => setForm({...form, rollNumber: e.target.value})} required />

      <input placeholder="Phone" value={form.phoneNumber}
        onChange={e => setForm({...form, phoneNumber: e.target.value})} required />

      <input placeholder="Email" value={form.email}
        onChange={e => setForm({...form, email: e.target.value})} />


      <input placeholder="Address" value={form.address}
        onChange={e => setForm({...form, address: e.target.value})} />

      <input placeholder="Image URL"
        value={form.imageUrl}
        onChange={e => setForm({...form, imageUrl: e.target.value})} />

      <button type="submit">
        {initialData ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}
