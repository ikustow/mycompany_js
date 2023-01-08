export declare class AdminRepository {
    getUsers(): Promise<void>;
    addUser(): Promise<void>;
    deleteUser(): Promise<void>;
    getDeparts(): Promise<any[]>;
    addDepartment(): Promise<number[]>;
}
