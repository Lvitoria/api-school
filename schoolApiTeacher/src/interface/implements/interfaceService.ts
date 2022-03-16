import { responseGetAll } from "interface/responseGetAll";
import { responseInsert } from "interface/responseInsert";
import { interfaceStudyBody } from "../dto/interfaceStudyBody";

export interface ServiceImplements {
    save(body: interfaceStudyBody): Promise<responseInsert>
    getAll(): Promise<responseGetAll[]>
}