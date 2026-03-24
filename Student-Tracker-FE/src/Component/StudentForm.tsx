import { useState } from "react";
import type { Student } from "../types/Student";
import "./StudentForm.css"
interface Props {
  onSubmit: (data: Student) => void;
  initialData?: Student;
}

export default function StudentForm({ onSubmit, initialData }: Props) {
  const [form, setForm] = useState<Student>({
    _id: initialData?._id,
    name: initialData?.name || "",
    grade: initialData?.grade || "",
    phone: initialData?.phone || "",
    rollNumber: initialData?.rollNumber || 0,
    gender: initialData?.gender || "Male",
    imageUrl: initialData?.imageUrl || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "rollNumber" ? Number(value) : value, // ✅ FIXED
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="form"
    >
      <label>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={form.name}
        />

        <input
          name="grade"
          placeholder="Grade"
          onChange={handleChange}
          value={form.grade}
        />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          value={form.phone}
        />
        <label></label>
        <input
          name="rollNumber"
          type="number"
          onChange={handleChange}
          value={form.rollNumber}
        />

        <select name="gender" onChange={handleChange} value={form.gender}>
          <option>Male</option>
          <option>Female</option>
        </select>

        <input
          name="imageUrl"
          placeholder="Image URL"
          onChange={handleChange}
          value={form.imageUrl}
        />
      </label>

      {/* Preview Image */}
      {form.imageUrl && <img src={form.imageUrl} alt="preview" width="100" />}

      <button type="submit">{initialData ? "Update" : "Add"} Student</button>
    </form>
  );
}
