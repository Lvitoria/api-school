   export interface Student {
        id: number;
        name: String;
        created_at: Date;
        updated_at: Date;
    }

    export interface responseGetAll {
        id: number;
        idstudent: number;
        n1: number;
        n2: number;
        n3: number;
        n4: number;
        state?: String
        created_at: Date;
        updated_at: Date;
        student: Student;
    }



