import { Employee } from "./employee.entity";
export declare class User {
    id: number;
    email: string;
    password: string;
    role_id: number;
    details: Employee;
    constructor(id: number, email: string, password: string, role_id: number);
    getInfoById(): Promise<void>;
}
