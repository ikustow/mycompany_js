import { Department } from "../domain-layer/entities/department.entity";
import { User } from "../domain-layer/entities/user.entity";
export declare class AdminRepository {
    getUsers(): Promise<any[]>;
    addUser(user: User): Promise<any[]>;
    deleteUser(id: number): Promise<any[]>;
    setRole(): Promise<void>;
    getDeparts(): Promise<any[]>;
    addDepartment(department: Department): Promise<any[]>;
    setDepartment(): Promise<void>;
}
