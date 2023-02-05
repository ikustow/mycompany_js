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
exports.User = void 0;
const employee_use_case_1 = require("../use-cases/employee.use-case");
class User {
    constructor(id, email, password, role_id) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role_id = role_id;
    }
    getInfoById() {
        return __awaiter(this, void 0, void 0, function* () {
            const employeeUseCase = new employee_use_case_1.EmployeeUseCase();
            const infoResult = yield employeeUseCase.getInfoById(this.id);
            this.details = infoResult;
        });
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map