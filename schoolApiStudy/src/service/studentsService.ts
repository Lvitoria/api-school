import { Pool } from "pg";
import { ServiceImplements } from "../interface/implements/interfaceService";
// import pool from './conecta'
export class StudentsService implements ServiceImplements{

    async findByIds(id: number): Promise<any> {
        const pool = new Pool({
            host: "localhost",
            port: 5432,
            user: "postgres",
            password: "123",
            database: "school",
        })
        return (await (pool.query(`SELECT students.name, grades.n1, grades.n2, grades.n3, grades.n4 from students inner join grades on grades.idstudent = students.id where students.id = ${id}`))).rows[0]
    }
}