import {Employee} from "./employee.entity";
import {EmployeeUseCase} from "../use-cases/employee.use-case";

export class User {
    id: number;
    email: string;
    password: string;
    role_id: number;

    details: Employee;

    constructor(id: number, email: string, password:string, role_id:number) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role_id = role_id;
    }

    async getInfoById(){
        const employeeUseCase: EmployeeUseCase = new EmployeeUseCase();
        const infoResult: Employee = await employeeUseCase.getInfoById(this.id);
        this.details = infoResult;
    }

}