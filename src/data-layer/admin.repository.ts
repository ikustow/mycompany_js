import {Department} from "../domain-layer/entities/department.entity";
import db from "./db";

export class AdminRepository {
    //user section
    async getUsers(){

    }

    async addUser(){

    }

    async deleteUser(){

    }

    // department section
    async getDeparts(){
        const departments =  await db('department').select();

        return departments;
    }

    async addDepartment(){
        const departments =  await db('department').insert([
                {
                    code: '000001',
                    description: 'main'
                },
            ]);

        console.log(departments)
        return departments;
    }
}