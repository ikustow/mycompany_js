import {Router} from 'express'
import {AuthController} from "../controllers/auth.controller";


const controller: AuthController = new AuthController()
const authRouter: Router = Router()
const authRoutePrefix = '/auth'

authRouter.post(`${authRoutePrefix}/signin`, controller.checkUserByEmail)

export default authRouter