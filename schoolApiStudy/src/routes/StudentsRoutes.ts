import {Request, Response, Router} from 'express';
import { StudyController } from '../controller/StudyController';
import { StudentsService } from '../service/studentsService';


const route = Router();

const studyController = new StudyController(new StudentsService())



route.get('/alunos/:id', async (request: Request, response: Response) => {
    return await studyController.getAll(request, response)
});

export default route; 
