export type Gender = "Male" | "Female" | "Others";

export interface Student {
    id: number;
    name: string;
    grade: string;
    phoneNumber: string;
    rollNumber: number;
    gender: Gender;
}