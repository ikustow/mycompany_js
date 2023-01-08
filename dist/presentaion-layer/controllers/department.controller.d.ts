import { Request, Response } from 'express';
export declare class DepartmentController {
    getDepartments(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    createDepartment(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
