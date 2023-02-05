import {Request, Response} from 'express';
import {AuthUseCase} from "../../domain-layer/use-cases/auth.use-case";


export class AuthController {

    async checkUserByEmail(req: Request, res: Response) {
        const authUseCase: AuthUseCase = new AuthUseCase();
        const userData = await authUseCase.checkUserByEmail(req.body.username, req.body.password);
        console.log(userData)
        res.header("Access-Control-Allow-Origin", "*");
        return res.send(userData)
    }
}