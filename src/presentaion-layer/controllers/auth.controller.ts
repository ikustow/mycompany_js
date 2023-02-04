import {Request, Response} from 'express';
import {AuthUseCase} from "../../domain-layer/use-cases/auth.use-case";

export class AuthController {

    async checkUserByEmail (req: Request, res: Response) {
        console.log(req.body.username)
        console.log(req.body.password)
        const authUseCase: AuthUseCase = new AuthUseCase();
        const userData = await authUseCase.checkUserByEmail("admin@company.com", "admin");
        console.log(userData)
        res.header("Access-Control-Allow-Origin", "*");
        return res.send(userData)
    }
}