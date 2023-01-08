import {Department} from "../domain-layer/entities/department.entity";
import {User} from "../domain-layer/entities/user.entity";
import db from "./db";

const departmentTableName: string = process.env.DEPARTMENT_TABEL;
const usersTableName: string = process.env.USER_TABEL;

export class AdminRepository {
    //user section
    async getUsers(){
        const users =  await db(usersTableName).select();
        return users;
    }

    async addUser(user: User){
        const newUser =  await db(usersTableName).insert([
            {
                email: user.email,
                password: user.password
            },
        ]).returning('*');
        return newUser;
    }

    async deleteUser(id){
        const result = await db(usersTableName).del().where({id,}).returning("id");
        return result;
    }

    // department section
    async getDeparts(){
        const departments =  await db(departmentTableName).select();
        return departments;
    }

    async addDepartment(department: Department){
        const newDepartment =  await db(departmentTableName).insert([
                {
                    code: department.code,
                    description: department.description
                },
            ]).returning('*');
        return newDepartment;
    }
}