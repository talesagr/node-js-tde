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
const User_1 = __importDefault(require("../models/User"));
const validation_1 = require("../helpers/validation");
class UserController {
    addUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, cpf } = req.body;
                if (!(0, validation_1.isValidEmail)(email)) {
                    return res.status(400).json({ message: 'E-mail invalido' });
                }
                if (!(0, validation_1.isValidCPF)(cpf)) {
                    return res.status(400).json({ message: 'CPF invalido' });
                }
                const newUser = new User_1.default(req.body);
                yield newUser.save();
                res.status(201).json(newUser);
            }
            catch (err) {
                res.status(400).json({ message: err.message });
            }
        });
    }
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield User_1.default.find();
                res.json(users);
            }
            catch (err) {
                res.status(500).json({ message: err.message });
            }
        });
    }
    getUserByID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findById(req.params.id);
                if (!user) {
                    return res.status(404).json({ message: 'Usuário não encontrado' });
                }
                res.json(user);
            }
            catch (err) {
                res.status(500).json({ message: err.message });
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
                if (!user) {
                    return res.status(404).json({ message: 'Usuário não encontrado' });
                }
                res.json(user);
            }
            catch (err) {
                res.status(400).json({ message: err.message });
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findByIdAndDelete(req.params.id);
                if (!user) {
                    return res.status(404).json({ message: 'Usuário não encontrado' });
                }
                res.json({ message: 'Usuário excluído com sucesso' });
            }
            catch (err) {
                res.status(500).json({ message: err.message });
            }
        });
    }
}
exports.default = UserController;
