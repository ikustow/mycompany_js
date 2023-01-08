import {Request, Response} from 'express';
import {AdminUseCase} from "../../domain-layer/use-cases/admin.use-case";

export class AdminController {

    async getUsers (req: Request, res: Response) {
        const departmentUseCase: AdminUseCase = new AdminUseCase();
        const departments = await departmentUseCase.getUsers();
        return res.send(departments)
    }

    async createUser(req: Request, res:Response){
        const departmentUseCase: AdminUseCase = new AdminUseCase();
     //   const newDepartments = await departmentUseCase.adduser('todo');
     //   return res.send(newDepartments);
    }

    async getDepartments (req: Request, res: Response) {
        const departmentUseCase: AdminUseCase = new AdminUseCase();
        const departments = await departmentUseCase.getDepartment();
        return res.send(departments)
    }

    async createDepartment(req: Request, res:Response){
        const departmentUseCase: AdminUseCase = new AdminUseCase();
        const newDepartments = await departmentUseCase.addDepartment('todo');
        return res.send(newDepartments);
    }

}


