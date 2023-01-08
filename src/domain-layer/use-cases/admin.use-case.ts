import {AdminRepository} from "../../data-layer/admin.repository";
import {User} from "../entities/user.entity";

export class AdminUseCase {

    async getUsers(){
        const repository: AdminRepository = new AdminRepository();
        const users = await repository.getUsers();
        return users;
    }

    async adduser(user: User){
        const repository: AdminRepository = new AdminRepository();
        const newUser = await repository.addUser(user);
        return newUser;
    }

    async deleteUser(id: number){
        const repository: AdminRepository = new AdminRepository();
        const newUser = await repository.deleteUser(id);
        return newUser;
    }

    async getDepartment(){
        const repository: AdminRepository = new AdminRepository();
        const departments = await repository.getDeparts();
        return departments;
    }

    async addDepartment(department){
        const repository: AdminRepository = new AdminRepository();
        const newDepartment = await repository.addDepartment(department);
        return newDepartment;
    }

}