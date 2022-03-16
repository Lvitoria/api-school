import { Request, Response } from "express"
import { validationResult } from "express-validator";
import { responseGetAll } from "interface/responseGetAll";
import { interfaceStudyBody } from "../interface/dto/interfaceStudyBody"
import { ServiceImplements } from "../interface/implements/interfaceService"
import { OperationMathUtils } from "../utils/OperationMathUtils"

export class StudyController {

    constructor(
        private readonly serviceStudy: ServiceImplements,
        private readonly OperationMathUtils: OperationMathUtils,
        ){ }

    async create(request: Request, response: Response): Promise<any> {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array(), status: 400 });
            }
            const { name, grades }:interfaceStudyBody = request.body
            const {grade, ...study} = await this.serviceStudy.save({name, grades})
            study.largeGrade = this.OperationMathUtils.largerNumber(grades)
            study.smallerGrade = this.OperationMathUtils.smallerNumber(grades)
            study.sumGrade = this.OperationMathUtils.addNumber(grades)
            study.state = this.OperationMathUtils.stateThisYear(grades)
            const {n1, n2, n3, n4 } = grade
            return response.status(201).json({ grade: {n1, n2, n3, n4}, ...study})    
        } catch (error) {
            return response.status(500).json(error)
        }
    }

    async getAll(request: Request, response: Response):Promise<any>{
        try {
            const allStudy  = await this.serviceStudy.getAll()
            for (const key in allStudy) {
                const {n1,n2, n3, n4}= allStudy[key]
               allStudy[key].state = this.OperationMathUtils.stateThisYear([n1,n2, n3, n4])
            }
            return response.json(allStudy)
        } catch (error) {
            return response.status(500).json(error)
        }
    }

}