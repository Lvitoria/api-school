import { Request, Response } from "express"
import { ServiceImplements } from "../interface/implements/interfaceService"

export class StudyController {

    constructor(
        private readonly serviceStudy: ServiceImplements,
        ){ }

    async getAll(request: Request, response: Response):Promise<any>{
        try {
            const study = await this.serviceStudy.findByIds(<number><unknown>request.params.id)
            if(!study){
                return response.status(400).json({data: 'aluno não existe', status: 400})
            }
            const { name , ...grades} = study
            let totalGrade:number = 0
            let countGrade:number = 0
            for(const prop in grades) {
                totalGrade = totalGrade + grades[prop]
                countGrade++
            }
            const resultGrade = totalGrade/countGrade
            let state: string 
            if(resultGrade >= 6){
                state = 'Aprovado'
            }
            if(resultGrade < 6 && resultGrade >= 4){
                state = 'Recuperação'
            }
            if(resultGrade < 4){
                state = 'Reprovado'
            }
            return response.json({data: { name, grades, state }, status: 200})
        } catch (error) {
            return response.status(500).json({data: error,status: 500})
        }
    }

}