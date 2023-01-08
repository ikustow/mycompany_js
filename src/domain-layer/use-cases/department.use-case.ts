import {AdminRepository} from "../../data-layer/admin.repository"


export class DepartmentUseCase {
    async getDepartment(){
        const repository: AdminRepository = new AdminRepository();
        const departments = await repository.getDeparts();
        return departments;
    }

    async addDepartment(){
        const repository: AdminRepository = new AdminRepository();
        const newDepartment = await repository.addDepartment();
        return newDepartment;
    }
}