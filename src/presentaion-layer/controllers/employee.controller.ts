import {EmployeeUseCase} from "../../domain-layer/use-cases/employee.use-case";


export class EmployeeController {

    async setInitialData(){
        const employeeUseCase: EmployeeUseCase = new EmployeeUseCase();
        const resultData = employeeUseCase.setInitialData();
        return resultData;
    }


    async updateData(){
        const employeeUseCase: EmployeeUseCase = new EmployeeUseCase();
        const updatedData = employeeUseCase.updateData();
        return updatedData;
    }

    async setAction(){
        const employeeUseCase: EmployeeUseCase = new EmployeeUseCase();
        const actionResult = employeeUseCase.setAction();
        return actionResult;
    }

}