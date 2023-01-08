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
class AdminRepository {
    //user section
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    addUser() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    deleteUser() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    // department section
    getDeparts() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    addDepartment() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
