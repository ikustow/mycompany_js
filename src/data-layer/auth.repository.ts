import {User} from "../domain-layer/entities/user.entity";
import db from "./db";
const usersTableName: string = process.env.USER_TABEL || "users";

export class AuthRepository {
    //user section
    async checkUserByEmail(email: string, password: string){
        const user =  await db(usersTableName).select().where({email,password}).returning('*');

        if (user.length > 0 ) {
            const data = user[0];
            const userEntity = new User(
                data.id,
                data.email,
                data.password,
                data.roles_id
            )
            await userEntity.getInfoById()
            return userEntity;
        }

        return user;
    }
}