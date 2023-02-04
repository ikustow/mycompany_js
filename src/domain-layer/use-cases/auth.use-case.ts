import {AuthRepository} from "../../data-layer/auth.repository";

export class AuthUseCase {

    async checkUserByEmail(email: string, password: string){
        const repository: AuthRepository = new AuthRepository();
        const user = await repository.checkUserByEmail(email, password);
        return user;
    }

}