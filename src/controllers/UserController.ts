import { Request, Response } from 'express';
import User from '../models/User';
import {isValidCPF, isValidEmail} from "../helpers/validation";

export default class UserController {
    async addUser(req: Request, res: Response) {
        try {
            const { email, cpf} = req.body;
            if(!isValidEmail(email)){
                return res.status(400).json({message: 'E-mail invalido'})
            }

            if(!isValidCPF(cpf)){
                return res.status(400).json({message: 'CPF invalido'})
            }

            const newUser = new User(req.body);
            await newUser.save();
            res.status(201).json(newUser);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    }

    async getUserByID(req: Request, res: Response) {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            res.json(user);
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            res.json(user);
        } catch (err: any) {
            res.status(400).json({ message: err.message });
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            res.json({ message: 'Usuário excluído com sucesso' });
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    }
}
