import { cpf } from 'cpf-cnpj-validator'

export function isValidEmail(email: string): boolean {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

export function isValidCPF(cpfInput: string): boolean {
    return cpf.isValid(cpfInput)
}