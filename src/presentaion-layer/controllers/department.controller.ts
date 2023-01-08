import {DepartmentUseCase} from "../../domain-layer/use-cases/department.use-case";
import {Request, Response} from 'express';


export class DepartmentController {

    async getDepartments (req: Request, res: Response) {
        const departmentUseCase: DepartmentUseCase = new DepartmentUseCase();
        const departments = await departmentUseCase.getDepartment();
        return res.send(departments)
    }

    async createDepartment(req: Request, res:Response){
        const departmentUseCase: DepartmentUseCase = new DepartmentUseCase();
        const newDepartments = await departmentUseCase.addDepartment();
        return res.send(newDepartments);
    }

}


