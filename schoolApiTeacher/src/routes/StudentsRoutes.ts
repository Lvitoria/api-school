import {Request, Response, Router} from 'express';
import { OperationMathUtils } from '../utils/OperationMathUtils';
import { StudyController } from '../controller/StudyController';
import { StudentsService } from '../service/studentsService';
import { body } from 'express-validator';
const route = Router();

const studyController = new StudyController(new StudentsService(), new OperationMathUtils())

route.post('/alunos', body('name').isString(), body('grades').isArray({max:4,min:4}), async (request: Request, response: Response) => {
    return await studyController.create(request, response)
});

route.get('/alunos', async (request: Request, response: Response) => {
    return await studyController.getAll(request, response)
});

export default route; 
