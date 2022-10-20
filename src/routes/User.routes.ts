import { Router } from 'express';

import UserController from '../controllers/User.controller';
import validBodyMiddleware from '../middlewares/validBody.middleware';
import validTokenMiddleware from '../middlewares/validToken.middleware';
import UserService from '../services/User.service';
import * as schemas from '../utils/schema';

const router = Router();

const userService = new UserService();
const userController = new UserController(userService);

router.post('/login', validBodyMiddleware(schemas.loginSchema), userController.login);
router.post('/user', validBodyMiddleware(schemas.createUserSchema), userController.create);
router.get('/user', validTokenMiddleware, userController.getAll);
router.get('/user/:id', validTokenMiddleware, userController.getById);
export default router;
