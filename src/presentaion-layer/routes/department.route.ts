
import {Router} from 'express'
import {DepartmentController} from "../controllers/department.controller";

const controller: DepartmentController = new DepartmentController()
const departmentRouter: Router = Router()

departmentRouter.get('/dep', controller.getDepartments)
departmentRouter.post('/dep', controller.createDepartment)

export default departmentRouter