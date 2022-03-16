
export interface Student {
    name: String;
    id: number;
    created_at: Date;
    updated_at: Date;
}

export interface Grade {
    idstudent: number;
    n1: number;
    n2: number;
    n3: number;
    n4: number;
    id: number;
    created_at: Date;
    updated_at: Date;
}

export interface responseInsert {
    student: Student;
    grade: Grade;
    largeGrade?: number;
    sumGrade?: number;
    smallerGrade?: number;
    state?: string;
}



