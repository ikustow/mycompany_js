import db from "./db";
import {Employee} from "../domain-layer/entities/employee.entity";
const employeeTableName: string =  "employee";

export class EmployeeRepository {

    async setInitialData(){

    }

    async updateData(){

    }

    async setAction(){

    }

    async getInfoById(id){
        const result = await db(employeeTableName).select().where('users_id',id).returning('*');
        if (result.length > 0){
            const data = result[0];
            console.log(data)
            const resultEntity = new Employee(
                data.id,
                data.name,
                data.surname,
                data.departments_id,
                data.users_id,
            );
            console.log(resultEntity)
            return resultEntity;
        }
    }

}


