"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidCPF = exports.isValidEmail = void 0;
const cpf_cnpj_validator_1 = require("cpf-cnpj-validator");
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
exports.isValidEmail = isValidEmail;
function isValidCPF(cpfInput) {
    return cpf_cnpj_validator_1.cpf.isValid(cpfInput);
}
exports.isValidCPF = isValidCPF;
