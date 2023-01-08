"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentController = void 0;
const department_use_case_1 = require("../../domain-layer/use-cases/department.use-case");
class DepartmentController {
    getDepartments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const departmentUseCase = new department_use_case_1.DepartmentUseCase();
            const departments = yield departmentUseCase.getDepartment();
            return res.send(departments);
        });
    }
    createDepartment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const departmentUseCase = new department_use_case_1.DepartmentUseCase();
            const newDepartments = yield departmentUseCase.addDepartment();
            return res.send(newDepartments);
        });
    }
}
exports.DepartmentController = DepartmentController;
//# sourceMappingURL=department.controller.js.map