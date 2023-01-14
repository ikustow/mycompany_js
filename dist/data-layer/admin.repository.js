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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRepository = void 0;
const db_1 = __importDefault(require("./db"));
const departmentTableName = process.env.DEPARTMENT_TABEL;
const usersTableName = process.env.USER_TABEL || "users";
class AdminRepository {
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield (0, db_1.default)(usersTableName).select();
            return users;
        });
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield (0, db_1.default)(usersTableName).insert([
                {
                    email: user.email,
                    password: user.password
                },
            ]).returning('*');
            return newUser;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, db_1.default)(usersTableName).del().where({ id, }).returning("id");
            return result;
        });
    }
    setRole() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getDeparts() {
        return __awaiter(this, void 0, void 0, function* () {
            const departments = yield (0, db_1.default)(departmentTableName).select();
            return departments;
        });
    }
    addDepartment(department) {
        return __awaiter(this, void 0, void 0, function* () {
            const newDepartment = yield (0, db_1.default)(departmentTableName).insert([
                {
                    code: department.code,
                    description: department.description
                },
            ]).returning('*');
            return newDepartment;
        });
    }
    setDepartment() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.AdminRepository = AdminRepository;
//# sourceMappingURL=admin.repository.js.map