export type Gender = "Male" | "Female" ;

export interface Student {
    id: number;
    name: string;
    grade: string;
    phoneNumber: string;
    rollNumber: string;
    gender: Gender;
    imageUrl: string;

}