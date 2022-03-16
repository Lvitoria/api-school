import { getRepository } from "typeorm";
import { interfaceStudyBody } from "../interface/dto/interfaceStudyBody";
import { ServiceImplements } from "../interface/implements/interfaceService";
import { Grades } from "../entities/Grades";
import { Students } from "../entities/Students";
import { responseInsert, Student } from "interface/responseInsert";
import { responseGetAll } from "interface/responseGetAll";
export class StudentsService implements ServiceImplements{

    async save({ name, grades }: interfaceStudyBody): Promise<responseInsert>{
        const repoGrade = getRepository(Grades)
        const repoStudent = getRepository(Students)
        const student = repoStudent.create({name})
        const resultStudent: Student = await  repoStudent.save(student)
        const grade = repoGrade.create({
            idstudent: resultStudent.id,
            n1: grades[0],
            n2: grades[1],
            n3: grades[2],
            n4: grades[3],
        })
        const resultGrade =  await repoGrade.save(grade)
        return { student: resultStudent, grade :resultGrade }
    }

    async getAll(): Promise<responseGetAll[]> {
        const repoGrade = getRepository(Grades)
        return await repoGrade.find({
            relations: ['student']
        });
    }
}