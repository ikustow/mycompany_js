import {Router} from 'express'
import {EmployeeController} from "../controllers/employee.controller";


const controller: EmployeeController = new EmployeeController()
const employeeRouter: Router = Router()
const employeePrefix = '/emp'


employeeRouter.post(`${employeePrefix}/set`, controller.setInitialData)
employeeRouter.post(`${employeePrefix}/update`, controller.updateData)
employeeRouter.post(`${employeePrefix}/action`, controller.setAction)



export default employeeRouter