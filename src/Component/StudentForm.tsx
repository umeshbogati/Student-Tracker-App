import  { useState } from "react";
import type { Student, Gender } from "../types/Student";
import "./StudentForm.css";

interface StudentFormProps {
    addStudent: (student: Student) => void;
}

export default function StudentForm({ addStudent }: StudentFormProps) {
    const [name, setName] = useState("");
    const [grade, setGrade] = useState("");
    const [rollNumber, setRollNumber] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState<Gender>("Male");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newStudent: Student = {
            id: Date.now(),
            name,
            grade,
            rollNumber,
            phoneNumber,
            gender,
            imageUrl: imageUrl || ""
        };
        addStudent(newStudent);
        setName(""); setGrade(""); setRollNumber(""); setPhoneNumber(""); setGender("Male"); setImageUrl("");
    };

    return (
        <form className="student-form" onSubmit={handleSubmit}>
            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
            <input placeholder="Grade" value={grade} onChange={e => setGrade(e.target.value)} required />
            <input placeholder="Roll Number" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} required />
            <input placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            <input placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
                <select title="Gender" value={gender} onChange={(e) => setGender(e.target.value as Gender)}>
                     <option value="Male">Male</option>
                     <option value="Female">Female</option>
               
                </select>
            
            <button type="submit">Add Student</button>
        </form>
    );
}
