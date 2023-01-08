"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const department_controller_1 = require("../controllers/department.controller");
const controller = new department_controller_1.DepartmentController();
const departmentRouter = (0, express_1.Router)();
departmentRouter.get('/dep', controller.getDepartments);
departmentRouter.post('/dep', controller.createDepartment);
exports.default = departmentRouter;
//# sourceMappingURL=department.route.js.map