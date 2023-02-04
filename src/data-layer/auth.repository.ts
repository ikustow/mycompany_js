import {User} from "../domain-layer/entities/user.entity";
import db from "./db";
const usersTableName: string = process.env.USER_TABEL || "users";

export class AuthRepository {
    //user section
    async checkUserByEmail(email: string, password: string){
        const user =  await db(usersTableName).select().where({email,password}).returning('*');
        return user;
    }
}