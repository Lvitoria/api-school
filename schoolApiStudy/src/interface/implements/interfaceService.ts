export interface ServiceImplements {
    findByIds(id: number): Promise<any>
}