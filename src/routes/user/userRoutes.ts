import express from "express";
import UserController from "../../controllers/UserController"

const router = express.Router();
const userController = new UserController();

router.get('/', userController.getAllUsers);
router.post('/', userController.addUser)
router.get('/:id', userController.getUserByID)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export default router;