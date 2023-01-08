
import {Router} from 'express'
import {AdminController} from "../controllers/admin.controller";


const controller: AdminController = new AdminController()
const adminRouter: Router = Router()
const adminRoutePrefix = '/admin'

adminRouter.get(`${adminRoutePrefix}/dep`, controller.getDepartments)
adminRouter.post(`${adminRoutePrefix}/dep`, controller.createDepartment)
adminRouter.get(`${adminRoutePrefix}/usr`, controller.getUsers)
adminRouter.post(`${adminRoutePrefix}/usr`, controller.createUser)

export default adminRouter