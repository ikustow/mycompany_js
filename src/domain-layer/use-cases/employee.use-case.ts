import {EmployeeRepository} from "../../data-layer/employee.repository";


export class EmployeeUseCase {

    async setInitialData(){
        const employeeRepository:EmployeeRepository = new EmployeeRepository();
        const resultData = await  employeeRepository.setInitialData();
        return resultData;
    }

    async updateData(){
        const employeeRepository:EmployeeRepository = new EmployeeRepository();
        const updatedData = await  employeeRepository.updateData();
        return updatedData;
    }

    async setAction(){
        const employeeRepository:EmployeeRepository = new EmployeeRepository();
        const actionResult = await  employeeRepository.setAction();
        return actionResult;
    }

    async getInfoById(id: number){
        const employeeRepository:EmployeeRepository = new EmployeeRepository();
        const infoResult = await  employeeRepository.getInfoById(id);
        return infoResult;
    }

}